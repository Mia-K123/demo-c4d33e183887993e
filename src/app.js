import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { createGestureMachine, classifyPose } from './gestures.mjs';
import { createAssembly } from './assembly-mode.js';
import { createArMenu } from './ar-menu.mjs';

const $ = (s) => document.querySelector(s);
const ASSET_VER = (typeof __ASSET_VER__ !== 'undefined' && __ASSET_VER__) ? String(__ASSET_VER__) : 'dev';
const rel = (p) => {
  const u = new URL(p, document.baseURI);
  if (!u.searchParams.has('v')) u.searchParams.set('v', ASSET_VER);
  return u.href;
};
// MediaPipe concatenates `${base}/vision_wasm_internal.js`. A ?v= on the directory
// would produce `/wasm?v=xxx/vision_wasm_internal.js` and the loader would fail
// with an Event (toast then showed "undefined").
const wasmBase = () => new URL('libs/mediapipe/wasm', document.baseURI).href.replace(/\/+$/, '');
function errText(e) {
  if (e == null || e === '') return '未知錯誤';
  if (typeof e === 'string') return (e === 'undefined' || e === 'null') ? '未知錯誤' : e;
  const bits = [];
  if (e.message && String(e.message) !== 'undefined') bits.push(String(e.message));
  if (e.name && e.name !== 'Error' && String(e.name) !== 'undefined') bits.push(String(e.name));
  if (!bits.length && e.type) {
    const src = e.target && (e.target.src || e.target.href);
    bits.push('載入失敗（' + e.type + (src ? ' ' + src : '') + '）');
  }
  if (e.stack) bits.push(String(e.stack).split('\n').slice(0, 4).join(' | '));
  const s = bits.join(' — ') || String(e);
  if (!s || s === 'undefined' || s === '[object Event]' || s === '[object Object]' || s === '[object ErrorEvent]') {
    return '手勢模組載入失敗';
  }
  return s;
}
const ua = navigator.userAgent || '';
// iPhone UA contains "like Mac OS X" and maxTouchPoints>1 — do NOT treat that as iPad.
const isIPhone = /iPhone|iPod/.test(ua);
const isIPadOS = /iPad/.test(ua)
  || (!isIPhone && (navigator.platform === 'MacIntel' || /Macintosh/.test(ua)) && (navigator.maxTouchPoints || 0) > 1);
const isIOS = isIPhone || isIPadOS;
const isAndroid = /Android/.test(ua);
const isTouch = matchMedia('(pointer: coarse)').matches || isIOS || isAndroid || (navigator.maxTouchPoints || 0) > 1;
const PORTRAIT0 = innerHeight > innerWidth; const YAW0 = PORTRAIT0 ? -0.42 : -0.66, PITCH0 = PORTRAIT0 ? 0.5 : 0.36;
const state = { explode: 0, target: 0, yaw: YAW0, pitch: PITCH0, zoom: 1, tYaw: YAW0, tPitch: PITCH0, tZoom: 1,
  facing: 'user', stream: null, hand: null, gesture: '', camOn: false };
window.__demo = state;
state.isIOS = isIOS; state.isIPadOS = isIPadOS; state.isIPhone = isIPhone; state.isTouch = isTouch;

// ---------- three.js ----------
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, isTouch ? 1.5 : 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.setClearColor(0x000000, 0);
renderer.setClearAlpha(0);
canvas.style.background = 'transparent';
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType('local-floor');
const scene = new THREE.Scene();
scene.background = null;
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.75;
// 攝影棚 HDRI（載入完成前先用程式產生的 RoomEnvironment）
new HDRLoader().load(rel('env/studio_small_09_1k.hdr'), (t) => { t.mapping = THREE.EquirectangularReflectionMapping; scene.environment = pmrem.fromEquirectangular(t).texture; scene.environmentIntensity = 1.0; t.dispose(); });
const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(2, 4, 3); scene.add(key);
const rim = new THREE.DirectionalLight(0x9fc4ff, 1.2); rim.position.set(-3, 2, -3); scene.add(rim);
const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 100);
const pivot = new THREE.Group(); scene.add(pivot);
let arMenuHost = null, cardTex = null;

// soft contact shadow (cheap radial gradient)
const sc = document.createElement('canvas'); sc.width = sc.height = 128;
const g2 = sc.getContext('2d'); const grd = g2.createRadialGradient(64, 64, 4, 64, 64, 64);
grd.addColorStop(0, 'rgba(0,0,0,0.55)'); grd.addColorStop(1, 'rgba(0,0,0,0)'); g2.fillStyle = grd; g2.fillRect(0, 0, 128, 128);
const shadow = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
shadow.rotation.x = -Math.PI / 2; pivot.add(shadow);

const parts = []; const groups = {}; const frameInfo = { r0: 1, r1: 1, c0: 0.3, c1: 0.5 };
const ORDER = { cover: 0, pcie: 0.06, cpu: 0.12, fan: 0.1, ram: 0.18, psu: 0.08, bezel: 0.04, drive: 0.1, board: 0.22, chassis: 0.22 };
const S = 4; // 放大倍率：模型 0.43 m → 約 1.7 單位
const AR_WIDTH = 0.44; // AR 實體寬度約 44 公分（2U 機箱）
let modelRoot = null, modelWidth1 = 0.434;

async function loadModel() {
  const [meta, gltf] = await Promise.all([
    fetch(rel('models/parts.json')).then((r) => r.json()),
    new GLTFLoader().loadAsync(rel('models/server.glb'), (e) => {
      if (e.total) $('#loadtxt').textContent = `載入伺服器模型… ${Math.round(e.loaded / e.total * 100)}%`;
    }),
  ]);
  const root = gltf.scene; modelRoot = root; root.scale.setScalar(S);
  const box = new THREE.Box3().setFromObject(root); const c = box.getCenter(new THREE.Vector3());
  root.position.set(-c.x, -box.min.y, -c.z); pivot.add(root);
  modelWidth1 = (box.max.x - box.min.x) / S;
  shadow.scale.set((box.max.x - box.min.x) * 1.5, (box.max.z - box.min.z) * 1.3, 1); shadow.position.y = 0.002;
  root.traverse((o) => {
    const m = meta.objects[o.name]; if (!m) return;
    const p = { obj: o, name: o.name, base: o.position.clone(), off: new THREE.Vector3(...m.offset), group: m.group, delay: ORDER[m.group] ?? 0 };
    parts.push(p); (groups[m.group] ||= { parts: [], ...meta.groups[m.group] }).parts.push(p);
    if (o.material) for (const mm of [].concat(o.material)) { mm.envMapIntensity = 1; }
  });
  // 標籤
  const wrap = $('#labels');
  for (const [k, gr] of Object.entries(groups)) {
    const el = document.createElement('div'); el.className = 'lbl';
    el.innerHTML = `<b>${gr.zh}</b><small>${gr.en}</small>`; wrap.appendChild(el); gr.el = el;
  }
  // 以「展開」後的大小決定鏡頭距離
  for (const t of [0, 1]) {
    setExplodePositions(t); root.updateMatrixWorld(true);
    const eb = new THREE.Box3().setFromObject(root);
    frameInfo['r' + t] = eb.getBoundingSphere(new THREE.Sphere()).radius; frameInfo['c' + t] = eb.getCenter(new THREE.Vector3()).y;
  }
  setExplodePositions(0);
}

function layoutModel(scale) {
  if (!modelRoot) return;
  modelRoot.scale.setScalar(scale);
  modelRoot.position.set(0, 0, 0);
  modelRoot.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(modelRoot);
  const c = box.getCenter(new THREE.Vector3());
  modelRoot.position.set(-c.x, -box.min.y, -c.z);
  shadow.scale.set((box.max.x - box.min.x) * 1.5, (box.max.z - box.min.z) * 1.3, 1);
  shadow.position.y = 0.002;
}

const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
function setExplodePositions(t) {
  for (const p of parts) {
    const k = ease((t * 1.45) - p.delay * 1.45 * (1 - t) - p.delay * 0.45 * t);
    p.obj.position.copy(p.base).addScaledVector(p.off, k);
  }
}

function resize() {
  if (renderer.xr.isPresenting) return;
  if (state.trackSim) { layoutTrackSim(); return; }
  const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
}
addEventListener('resize', resize); resize();

const tmp = new THREE.Vector3(), tmpBox = new THREE.Box3();
function updateLabels() {
  const show = state.explode > 0.6; const op = Math.max(0, (state.explode - 0.6) / 0.4);
  const L = [];
  for (const gr of Object.values(groups)) {
    if (!gr.el) continue;
    if (!show) { gr.el.style.opacity = 0; continue; }
    tmpBox.makeEmpty(); for (const p of gr.parts) tmpBox.expandByObject(p.obj);
    tmpBox.getCenter(tmp); tmp.project(camera);
    if (!gr.w) { gr.w = gr.el.offsetWidth; gr.h = gr.el.offsetHeight; }
    L.push({ gr, ax: (tmp.x * 0.5 + 0.5) * innerWidth, ay: (-tmp.y * 0.5 + 0.5) * innerHeight });
  }
  // 標籤避讓：簡單的迭代推開，避免重疊
  for (const l of L) { l.x = l.ax; l.y = l.ay; }
  for (let it = 0; it < 40; it++) for (let i = 0; i < L.length; i++) for (let j = i + 1; j < L.length; j++) {
    const a = L[i], b = L[j], ox = (a.gr.w + b.gr.w) / 2 + 4 - Math.abs(a.x - b.x), oy = (a.gr.h + b.gr.h) / 2 + 3 - Math.abs(a.y - b.y);
    if (ox > 0 && oy > 0) { const d = (a.y <= b.y ? -1 : 1) * oy / 2; a.y += d; b.y -= d; }
  }
  for (const l of L) {
    const x = Math.max(l.gr.w / 2 + 4, Math.min(innerWidth - l.gr.w / 2 - 4, l.x));
    l.gr.el.style.opacity = op;
    l.gr.el.style.transform = `translate(${x}px, ${l.y}px) translate(-50%, -50%)`;
  }
}

let last = performance.now();
function frame(now, xrFrame) {
  if (now == null) now = performance.now();
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  // 平滑動畫
  const sp = 1 - Math.exp(-dt * 3.2);
  const rotK = 1 - Math.pow(1 - 0.35, dt * 60);
  // 展開維持原本速度；收合加快，約 0.4 秒合上，對準音樂淡出與撞擊
  const closeK = state.target ? 3.6 : 7.5;
  state.explode += (state.target - state.explode) * (1 - Math.exp(-dt * closeK));
  if (Math.abs(state.target - state.explode) < 0.001) state.explode = state.target;
  if (state.camOn && state.appMode !== 'track') {
    const tr = gesture.tick(dt);
    state.tYaw += tr.dYaw;
    state.tPitch = clampP(state.tPitch + tr.dPitch);
  }
  state.yaw += (state.tYaw - state.yaw) * rotK; state.pitch += (state.tPitch - state.pitch) * rotK;
  state.zoom += (state.tZoom - state.zoom) * sp * 2;
  if (assembly?.state.active) assembly.tick(now);
  else setExplodePositions(state.explode);

  if (renderer.xr.isPresenting) {
    updateAR(xrFrame);
  } else if (state.trackSim && arMenuHost) {
    setExplodePositions(0);
    arMenuHost.tick(dt, camera);
    const dist = 3.35 / Math.max(0.55, state.zoom);
    const pit = state.pitch;
    const yaw = state.yaw;
    camera.position.set(
      Math.sin(yaw) * dist * Math.cos(pit),
      Math.sin(pit) * dist,
      Math.cos(yaw) * dist * Math.cos(pit),
    );
    camera.lookAt(0, 0.18, 0.02);
    for (const gr of Object.values(groups)) if (gr.el) gr.el.style.opacity = 0;
  } else {
    pivot.rotation.y = state.yaw;
    const fovV = THREE.MathUtils.degToRad(camera.fov / 2), fovH = Math.atan(Math.tan(fovV) * camera.aspect);
    const e = ease(assembly?.state.active ? 0 : state.explode), portrait = camera.aspect < 1;
    const rad = frameInfo.r0 + (frameInfo.r1 - frameInfo.r0) * e, cy = frameInfo.c0 + (frameInfo.c1 - frameInfo.c0) * e;
    const dist = rad / Math.sin(Math.min(fovV, fovH)) * (portrait ? 1.0 - 0.2 * e : 0.88) / state.zoom;
    camera.position.set(0, cy + Math.sin(state.pitch) * dist, Math.cos(state.pitch) * dist);
    camera.lookAt(0, cy - rad * (portrait ? 0.06 : 0.04), 0);
    if (!assembly?.state.active) updateLabels();
    else { for (const gr of Object.values(groups)) if (gr.el) gr.el.style.opacity = 0; }
  }
  if (state.trackSim) state.simFrames = (state.simFrames || 0) + 1;
  noteRenderFps(now);
  updateDebug(state.gLast);
  if (snd.thudWhen && snd.ctx && snd.ctx.currentTime >= snd.thudWhen) {
    snd.thudWhen = 0;
    punch = 1; state.punch = 1;
    snd.sfx.impactAt = performance.now();
  }
  if (punch > 0) { punch = Math.max(0, punch - dt * 5.5); if (punch < 0.03) punch = 0; state.punch = punch; }
  applyPunch(now);
  renderer.render(scene, camera);
}



// ---------- 音效（整首歌從頭循環；平時小聲，展開變大聲；開合都有撞擊） ----------
const SOUND_KEY = 'gesture-demo-sound';
const QUIET_GAIN = 0.11;   // 收合／待機約 10–12%
const FULL_GAIN = 0.60;    // 展開峰值約 60%
const SWELL = 1.2;         // 開合音量升降時間
const SNAP_AT = 0.08;
const THUD_OPEN = 0.15;    // 展開：零件開始彈出時
const THUD_CLOSE = 0.4;    // 收合：零件合上、對準動畫
const WHOOSH_GAIN = 0.18;  // 隨音樂一起略降，避免蓋過
const THUD_GAIN = 0.6;
const KEY0 = 1.6, RIM0 = 1.2;

const MUSIC_SRC = rel('audio/explode.mp3');
const music = new Audio();
music.preload = 'none'; music.playsInline = true; music.crossOrigin = 'anonymous';
music.setAttribute('playsinline', ''); music.loop = true;
let musicArmed = false;
function armMusic() {
  if (musicArmed) return;
  musicArmed = true;
  music.preload = 'auto';
  music.src = MUSIC_SRC;
  state.musicArmed = true;
}
function allowMusic() {
  armMusic();
  if (snd.unlocked && state.soundOn) startMusicQuietOrFull();
}

const snd = {
  ctx: null, gain: null, noise: null,
  unlocked: false, pauseT: 0, thudWhen: 0, whooshBuf: null, thudBuf: null,
  sfx: { whooshAt: 0, impactAt: 0 },
};
let snapArmed = false, punch = 0, ignoreGesturesUntil = 0;
state.soundOn = localStorage.getItem(SOUND_KEY) !== '0';
state.music = music;
state.sound = snd;
state.punch = 0;
state.QUIET_GAIN = QUIET_GAIN; state.FULL_GAIN = FULL_GAIN;

function ensureAudio() {
  if (snd.ctx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  const ctx = snd.ctx = new AC();
  snd.gain = ctx.createGain();
  snd.gain.gain.value = 0;
  ctx.createMediaElementSource(music).connect(snd.gain).connect(ctx.destination);
  bakeSfxSync();
}

function currentGain(node) {
  if (!node) return 0;
  try { const v = node.gain.value; return Number.isFinite(v) ? v : 0; } catch { return 0; }
}

function fadeNode(node, to, dur) {
  if (!node || !snd.ctx) return;
  const now = snd.ctx.currentTime, from = currentGain(node);
  node.gain.cancelScheduledValues(now);
  node.gain.setValueAtTime(from, now);
  node.gain.linearRampToValueAtTime(to, now + Math.max(0.02, dur));
}

// 等功率曲線，開合音量升降比較順
function fadeEqPower(node, to, dur) {
  if (!node || !snd.ctx) return fadeNode(node, to, dur);
  const now = snd.ctx.currentTime, from = currentGain(node), n = 48;
  const arr = new Float32Array(n);
  for (let i = 0; i < n; i++) {
    const k = i / (n - 1);
    arr[i] = (to >= from)
      ? from + (to - from) * Math.sin(k * Math.PI / 2)
      : to + (from - to) * Math.cos(k * Math.PI / 2);
  }
  node.gain.cancelScheduledValues(now);
  node.gain.setValueAtTime(arr[0], now);
  try { node.gain.setValueCurveAtTime(arr, now, Math.max(0.05, dur)); }
  catch { node.gain.linearRampToValueAtTime(to, now + dur); }
}

function audioLatency() {
  if (!snd.ctx) return 0;
  const ol = snd.ctx.outputLatency, bl = snd.ctx.baseLatency;
  return (typeof ol === 'number' && ol > 0 ? ol : 0) || (typeof bl === 'number' && bl > 0 ? bl : 0) || 0;
}

function bakeSfxSync() {
  if (!snd.ctx || snd.thudBuf) return;
  const sr = snd.ctx.sampleRate;
  const mk = (dur, fn) => {
    const n = Math.max(1, Math.floor(sr * dur));
    const buf = snd.ctx.createBuffer(1, n, sr);
    fn(buf.getChannelData(0), sr);
    return buf;
  };
  snd.whooshBuf = mk(0.45, (d, sr) => {
    let y = 0;
    for (let i = 0; i < d.length; i++) {
      const t = i / sr, k = t / 0.45;
      const env = Math.min(1, t / 0.05) * Math.exp(-k * 3.8) * 0.55;
      const cut = 1800 * Math.pow(260 / 1800, k);
      const a = Math.exp(-2 * Math.PI * cut / sr);
      const x = Math.random() * 2 - 1;
      y = x * (1 - a) + y * a;
      d[i] = y * env;
    }
  });
  snd.thudBuf = mk(0.36, (d, sr) => {
    for (let i = 0; i < d.length; i++) {
      const t = i / sr;
      const thudF = 150 * Math.pow(38 / 150, Math.min(1, t / 0.2));
      const thud = Math.sin(2 * Math.PI * thudF * t) * Math.exp(-t * 9) * 1.15;
      const clkF = 480 * Math.pow(160 / 480, Math.min(1, t / 0.06));
      const click = Math.sin(2 * Math.PI * clkF * t) * Math.exp(-t * 40) * 0.35;
      const noise = (Math.random() * 2 - 1) * Math.exp(-t * 18) * 0.55;
      d[i] = thud + click + noise;
    }
  });
}

function playBufAt(buf, when, gain) {
  if (!snd.ctx || !buf) return;
  const src = snd.ctx.createBufferSource();
  src.buffer = buf;
  const g = snd.ctx.createGain();
  g.gain.value = gain == null ? 1 : gain;
  src.connect(g).connect(snd.ctx.destination);
  src.start(Math.max(snd.ctx.currentTime, when));
}

function scheduleMotionSfx(isExplode) {
  if (!state.soundOn || !snd.unlocked || !snd.ctx) return;
  if (!snd.thudBuf) bakeSfxSync();
  const ctx = snd.ctx, t0 = ctx.currentTime, lat = audioLatency();
  const heardAt = isExplode ? THUD_OPEN : THUD_CLOSE;
  playBufAt(snd.whooshBuf, t0, WHOOSH_GAIN);
  snd.sfx.whooshAt = performance.now();
  snd.sfx.impactAt = 0;
  playBufAt(snd.thudBuf, Math.max(t0, t0 + heardAt - lat), THUD_GAIN);
  snd.thudWhen = t0 + heardAt;
}

function swellMusic(open) {
  if (!state.soundOn || !snd.unlocked) return;
  if (state.appMode && state.appMode !== 'demo') {
    fadeEqPower(snd.gain, Math.min(0.04, QUIET_GAIN), 0.4);
    return;
  }
  if (snd.ctx && snd.ctx.state !== 'running') snd.ctx.resume();
  if (music.paused) music.play().catch(() => {});
  fadeEqPower(snd.gain, open ? FULL_GAIN : QUIET_GAIN, SWELL);
}

function onExplodeAudio() {
  snapArmed = false;
  swellMusic(true);
  scheduleMotionSfx(true);
}

function onCollapseAudio() {
  snapArmed = state.explode > SNAP_AT;
  swellMusic(false);
  scheduleMotionSfx(false);
}

function applyPunch(now) {
  const p = punch * punch;
  rim.intensity = RIM0 + p * 3.4;
  key.intensity = KEY0 + p * 1.2;
  if (p > 0 && !renderer.xr.isPresenting) {
    camera.position.x += Math.sin(now * 0.058) * 0.05 * p;
    camera.position.y += Math.sin(now * 0.081) * 0.028 * p;
  }
}

function updateSoundBtn() {
  const label = !snd.unlocked ? '🔊 開啟音效' : (state.soundOn ? '🔊 音效開' : '🔇 音效關');
  for (const id of ['#btnSound', '#btnARSound']) {
    const el = $(id); if (!el) continue;
    el.textContent = label; el.title = label;
    el.setAttribute('aria-pressed', (state.soundOn && snd.unlocked) ? 'true' : 'false');
    el.classList.toggle('off', !!(snd.unlocked && !state.soundOn));
  }
}

function musicTargetGain() {
  if (state.appMode && state.appMode !== 'demo') return Math.min(0.04, QUIET_GAIN);
  return state.target ? FULL_GAIN : QUIET_GAIN;
}
function startMusicQuietOrFull() {
  armMusic();
  if (snd.ctx && snd.ctx.state !== 'running') snd.ctx.resume();
  music.loop = true;
  fadeEqPower(snd.gain, musicTargetGain(), 0.35);
  music.play().catch(() => {});
}

async function unlockAudio() {
  try {
    ensureAudio();
    if (snd.ctx && snd.ctx.state !== 'running') await snd.ctx.resume();
    if (snd.gain) { snd.gain.gain.cancelScheduledValues(snd.ctx.currentTime); snd.gain.gain.value = 0; }
    snd.unlocked = true;
    state.audioUnlocked = true;
    updateSoundBtn();
    if (!musicArmed) {
      // 手勢模型下載期間不要搶頻寬；模型就緒或觸控模式再載入音樂
      return;
    }
    music.loop = true;
    music.muted = true;
    try { await music.play(); } catch {}
    music.muted = false;
    if (music.paused && state.soundOn) { try { await music.play(); } catch {} }
    if (state.soundOn) startMusicQuietOrFull();
    else { music.pause(); fadeEqPower(snd.gain, 0, 0.01); }
  } catch (e) {
    console.warn('音效尚未解鎖', e);
  }
}

function toggleSound(ev) {
  ev?.preventDefault(); ev?.stopPropagation();
  if (!snd.unlocked) {
    state.soundOn = true;
    localStorage.setItem(SOUND_KEY, '1');
    updateSoundBtn();
    allowMusic();
    unlockAudio();
    return;
  }
  state.soundOn = !state.soundOn;
  localStorage.setItem(SOUND_KEY, state.soundOn ? '1' : '0');
  updateSoundBtn();
  if (state.soundOn) startMusicQuietOrFull();
  else {
    fadeEqPower(snd.gain, 0, 0.2);
    clearTimeout(snd.pauseT);
    snd.pauseT = setTimeout(() => { if (!state.soundOn) music.pause(); }, 250);
  }
}

updateSoundBtn();
document.addEventListener('pointerdown', (e) => {
  if (e.target?.closest?.('#btnSound, #btnARSound')) return;
  if (!snd.unlocked) unlockAudio();
}, { capture: true });
$('#btnSound')?.addEventListener('click', toggleSound);
$('#btnARSound')?.addEventListener('click', toggleSound);

// ---------- UI / 觸控 / 滑鼠 / 鍵盤 ----------
function setTarget(v) {
  if (state.appMode === 'assembly' || state.appMode === 'track') return;
  v = v ? 1 : 0;
  const changed = state.target !== v;
  state.target = v;
  const label = v ? '收合' : '展開';
  $('#btnToggle').textContent = label; $('#btnToggle').classList.toggle('on', !!v);
  const b = $('#btnARToggle'); if (b) { b.textContent = label; b.classList.toggle('on', !!v); }
  if (changed) { if (v) onExplodeAudio(); else onCollapseAudio(); }
}
$('#btnToggle').onclick = () => setTarget(state.target ? 0 : 1);
$('#btnReset').onclick = () => { state.tYaw = YAW0; state.tPitch = PITCH0; state.tZoom = 1; setTarget(0); };
$('#btnHelp').onclick = () => $('#help').classList.toggle('show');
$('#help').onclick = () => $('#help').classList.remove('show');
const clampP = (p) => Math.max(-0.15, Math.min(1.35, p));
const clampZ = (z) => Math.max(0.55, Math.min(2.6, z));
const ptrs = new Map(); let pinch0 = 0, zoom0 = 1, lastTap = -1e9, moved = false;
canvas.addEventListener('pointerdown', (e) => { canvas.setPointerCapture(e.pointerId); ptrs.set(e.pointerId, [e.clientX, e.clientY]); moved = false;
  if (ptrs.size === 2) { const [a, b] = [...ptrs.values()]; pinch0 = Math.hypot(a[0] - b[0], a[1] - b[1]); zoom0 = state.tZoom; } });
canvas.addEventListener('pointermove', (e) => {
  const p = ptrs.get(e.pointerId); if (!p) return;
  if (ptrs.size === 1) { const dx = e.clientX - p[0], dy = e.clientY - p[1]; if (Math.abs(dx) + Math.abs(dy) > 3) moved = true;
    state.tYaw += dx * 0.008; state.tPitch = clampP(state.tPitch + dy * 0.006); }
  ptrs.set(e.pointerId, [e.clientX, e.clientY]);
  if (ptrs.size === 2) { moved = true; const [a, b] = [...ptrs.values()]; state.tZoom = clampZ(zoom0 * Math.hypot(a[0] - b[0], a[1] - b[1]) / pinch0); }
});
const up = (e) => {
  if (ptrs.size === 1 && !moved) {
    if (state.trackSim && arMenuHost) pickArMenu(e);
    else if (!state.trackSim) {
      const t = performance.now();
      if (t - lastTap < 320) setTarget(state.target ? 0 : 1);
      lastTap = t;
    }
  }
  ptrs.delete(e.pointerId);
};
canvas.addEventListener('pointerup', up); canvas.addEventListener('pointercancel', up);
canvas.addEventListener('wheel', (e) => { e.preventDefault(); state.tZoom = clampZ(state.tZoom * Math.exp(-e.deltaY * 0.0012)); }, { passive: false });
addEventListener('keydown', (e) => {
  const k = e.key.toLowerCase();
  if (k === 'e' || k === ' ') setTarget(state.target ? 0 : 1); else if (k === 'c') setTarget(0); else if (k === 'o') setTarget(1);
  else if (k === 'arrowleft') state.tYaw -= 0.25; else if (k === 'arrowright') state.tYaw += 0.25;
  else if (k === 'arrowup') state.tPitch = clampP(state.tPitch - 0.15); else if (k === 'arrowdown') state.tPitch = clampP(state.tPitch + 0.15);
  else if (k === '+' || k === '=') state.tZoom = clampZ(state.tZoom * 1.15); else if (k === '-') state.tZoom = clampZ(state.tZoom / 1.15);
});

// ---------- AR：WebXR（Quest / 安卓 Chrome）＋ Scene Viewer / Quick Look 後備 ----------
// isIOS / isIPadOS / isAndroid / isTouch are declared at the top so camera + MediaPipe
// take the mobile path even when iPadOS Safari spoofs a Mac desktop UA.
const arBtn = $('#btnAR');
const ar = { session: null, hitSource: null, placed: false, placing: true, resumeCam: false, refType: 'local-floor' };
state.xrAR = false;

const _v1 = new THREE.Vector3(), _v2 = new THREE.Vector3(), _q1 = new THREE.Quaternion(), _s1 = new THREE.Vector3();
const xrRay = new THREE.Raycaster();

const reticle = new THREE.Group();
reticle.add(new THREE.Mesh(
  new THREE.RingGeometry(0.045, 0.062, 48).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x3aa0ff, transparent: true, opacity: 0.95, side: THREE.DoubleSide }),
));
reticle.add(new THREE.Mesh(
  new THREE.CircleGeometry(0.045, 48).rotateX(-Math.PI / 2),
  new THREE.MeshBasicMaterial({ color: 0x3aa0ff, transparent: true, opacity: 0.18, side: THREE.DoubleSide, depthWrite: false }),
));
reticle.matrixAutoUpdate = false;
reticle.visible = false;
scene.add(reticle);

function setARHint(msg) { const el = $('#arHint'); if (el) el.textContent = msg; }

function sceneViewerIntent() {
  const file = rel('models/server.glb');
  const fallback = location.href;
  return `intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(file)}&mode=ar_preferred&title=${encodeURIComponent('2U 伺服器')}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(fallback)};end;`;
}

function bindXRControllers() {
  for (let i = 0; i < 2; i++) {
    const c = renderer.xr.getController(i);
    c.addEventListener('select', onXRSelect);
    scene.add(c);
  }
}
bindXRControllers();

function onXRSelect(ev) {
  if (!renderer.xr.isPresenting) return;
  if (ar.placing) {
    if (reticle.visible) placeAtMatrix(reticle.matrix);
    else placeInFront();
    return;
  }
  const ctrl = ev.target;
  xrRay.ray.origin.setFromMatrixPosition(ctrl.matrixWorld);
  xrRay.ray.direction.set(0, 0, -1).transformDirection(ctrl.matrixWorld);
  const hits = modelRoot ? xrRay.intersectObject(modelRoot, true) : [];
  if (hits.length) setTarget(state.target ? 0 : 1);
}

function placeAtMatrix(matrix) {
  matrix.decompose(_v1, _q1, _s1);
  pivot.position.copy(_v1);
  pivot.quaternion.copy(_q1);
  pivot.scale.set(1, 1, 1);
  pivot.visible = true;
  ar.placed = true;
  ar.placing = false;
  reticle.visible = false;
  setARHint('點模型或按「展開」可分層查看，按「移動」可重新放置');
}

function placeInFront() {
  const xrCam = renderer.xr.getCamera();
  xrCam.getWorldPosition(_v1);
  xrCam.getWorldDirection(_v2);
  const p = _v1.clone().addScaledVector(_v2, 1.0);
  if (ar.refType === 'local-floor') p.y = 0;
  else p.y = _v1.y - 1.15;
  pivot.position.copy(p);
  pivot.quaternion.identity();
  const yaw = Math.atan2(_v1.x - p.x, _v1.z - p.z);
  pivot.rotation.set(0, yaw, 0);
  pivot.scale.set(1, 1, 1);
  pivot.visible = true;
  ar.placed = true;
  ar.placing = false;
  reticle.visible = false;
  setARHint('點模型或按「展開」可分層查看，按「移動」可重新放置');
}

function startPlacing() {
  ar.placing = true;
  ar.placed = false;
  pivot.visible = false;
  reticle.visible = false;
  setARHint('對準桌面或地面，點一下或捏合即可放置');
}

function applyARLayout() {
  const s = modelWidth1 > 0 ? AR_WIDTH / modelWidth1 : 1;
  layoutModel(s);
  pivot.position.set(0, 0, 0);
  pivot.quaternion.identity();
  pivot.rotation.set(0, 0, 0);
  pivot.scale.set(1, 1, 1);
  shadow.visible = false;
  startPlacing();
}

function restorePreviewLayout() {
  layoutModel(S);
  pivot.position.set(0, 0, 0);
  pivot.quaternion.identity();
  pivot.rotation.set(0, state.yaw, 0);
  pivot.scale.set(1, 1, 1);
  pivot.visible = true;
  shadow.visible = true;
  reticle.visible = false;
}

function updateAR(xrFrame) {
  if (!xrFrame || !ar.hitSource || !ar.placing) return;
  const ref = renderer.xr.getReferenceSpace();
  if (!ref) return;
  const hits = xrFrame.getHitTestResults(ar.hitSource);
  if (hits.length) {
    const pose = hits[0].getPose(ref);
    if (pose) {
      reticle.visible = true;
      reticle.matrix.fromArray(pose.transform.matrix);
    } else reticle.visible = false;
  } else reticle.visible = false;
}

async function setupHitTest(session) {
  ar.hitSource = null;
  try {
    if (!session.requestHitTestSource) return;
    const viewerSpace = await session.requestReferenceSpace('viewer');
    ar.hitSource = await session.requestHitTestSource({ space: viewerSpace });
  } catch (e) { console.warn('hit-test 無法使用', e); }
}

async function startAR() {
  if (!navigator.xr?.requestSession) { toast('此瀏覽器不支援 WebXR AR'); return; }
  if (!state.modelReady) { toast('模型還在載入，請稍候再試'); return; }
  if (ar.session) return;
  ar.resumeCam = state.camOn;
  if (state.camOn) stopCamera();
  unlockAudio();
  $('#intro').classList.add('hide');
  const overlay = $('#arOverlay');
  overlay.style.display = 'block';
  const sessionInit = {
    optionalFeatures: ['hit-test', 'dom-overlay', 'local-floor', 'hand-tracking'],
    domOverlay: { root: overlay },
  };
  let session;
  try {
    session = await navigator.xr.requestSession('immersive-ar', sessionInit);
  } catch (e) {
    overlay.style.display = 'none';
    if (ar.resumeCam) enableGestures();
    ar.resumeCam = false;
    toast('無法開啟 AR：' + (e.message || e.name) + '。請允許相機與空間權限後再試');
    return;
  }
  const feats = session.enabledFeatures;
  const hasFloor = feats && (typeof feats.has === 'function' ? feats.has('local-floor') : Array.from(feats).includes('local-floor'));
  ar.refType = hasFloor || !feats ? 'local-floor' : 'local';
  try {
    renderer.xr.setReferenceSpaceType(ar.refType);
    await renderer.xr.setSession(session);
  } catch (e) {
    try {
      ar.refType = 'local';
      renderer.xr.setReferenceSpaceType('local');
      await renderer.xr.setSession(session);
    } catch (e2) {
      overlay.style.display = 'none';
      try { session.end(); } catch {}
      if (ar.resumeCam) enableGestures();
      ar.resumeCam = false;
      toast('無法啟動 AR 工作階段：' + (e2.message || e2.name));
      return;
    }
  }
  ar.session = session;
  session.addEventListener('end', onAREnded);
  document.body.classList.add('ar');
  applyARLayout();
  await setupHitTest(session);
}

function onAREnded() {
  if (ar.hitSource?.cancel) try { ar.hitSource.cancel(); } catch {}
  ar.hitSource = null;
  ar.session = null;
  ar.placing = false;
  ar.placed = false;
  document.body.classList.remove('ar');
  const overlay = $('#arOverlay'); if (overlay) overlay.style.display = 'none';
  restorePreviewLayout();
  resize();
  if (ar.resumeCam) enableGestures();
  ar.resumeCam = false;
}

async function toggleAR(ev) {
  ev?.preventDefault();
  if (ar.session) { try { await ar.session.end(); } catch {} return; }
  await startAR();
}

$('#btnARExit')?.addEventListener('click', (e) => { e.preventDefault(); if (ar.session) ar.session.end(); });
$('#btnARPlace')?.addEventListener('click', (e) => { e.preventDefault(); if (renderer.xr.isPresenting) startPlacing(); });
$('#btnARToggle')?.addEventListener('click', (e) => { e.preventDefault(); setTarget(state.target ? 0 : 1); });

async function initARButton() {
  let xrOK = false;
  if (navigator.xr?.isSessionSupported) {
    try { xrOK = await navigator.xr.isSessionSupported('immersive-ar'); } catch {}
  }
  state.xrAR = !!xrOK;
  arBtn.classList.remove('disabled');
  if (xrOK) {
    arBtn.removeAttribute('rel');
    arBtn.href = '#';
    arBtn.setAttribute('role', 'button');
    arBtn.onclick = toggleAR;
    arBtn.title = '進入 AR，把伺服器放到真實桌上';
    return;
  }
  if (isIOS) {
    arBtn.href = rel('models/server_anim.usdz');
    arBtn.rel = 'ar';
    arBtn.innerHTML = '<img alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=">AR';
    arBtn.onclick = null;
    arBtn.title = '用 iPhone Quick Look 開啟 AR';
    return;
  }
  if (isAndroid) {
    arBtn.href = sceneViewerIntent();
    arBtn.removeAttribute('rel');
    arBtn.onclick = null;
    arBtn.title = '用 Google Scene Viewer 開啟 AR';
    return;
  }
  arBtn.href = '#';
  arBtn.classList.add('disabled');
  arBtn.title = '此裝置不支援 AR';
  arBtn.onclick = (e) => { e.preventDefault(); toast('請用支援 AR 的安卓手機、iPhone 或 Meta Quest 開啟此頁'); };
}
initARButton();

// ---------- 相機 + MediaPipe ----------
let landmarker = null, video = $('#video'), videoFront = $('#videoFront'), bgStill = $('#bgStill');
let trackVideo = video, lastVideoTime = -1, lastDetect = 0;
const hud = $('#hand'), hctx = hud.getContext('2d');
const camHint = $('#camHint'), modeSheet = $('#modeSheet');
const MP_CACHE = 'gesture-demo-mp-v2';
const MP_FILES = [
  { key: 'wasmJs', url: rel('libs/mediapipe/wasm/vision_wasm_internal.js'), bytes: 336624 },
  { key: 'wasm', url: rel('libs/mediapipe/wasm/vision_wasm_internal.wasm'), bytes: 14665716 },
  { key: 'task', url: rel('models/hand_landmarker.task'), bytes: 7819105 },
];
let mpPrefetchP = null, mpInitP = null, mpOverlay = false;

function introVisible() {
  const el = $('#intro');
  return el && !el.classList.contains('hide');
}

function setMpProgress(msg, forceOverlay) {
  state.mpProgress = msg;
  const hint = $('#preloadHint');
  if (hint) hint.textContent = msg;
  const needOverlay = forceOverlay || mpOverlay || !introVisible();
  if (needOverlay && msg) {
    $('#loadtxt').textContent = msg;
    $('#loading').classList.remove('hide');
  }
}

function hideMpOverlay() {
  mpOverlay = false;
  $('#loading').classList.add('hide');
}

async function openMpCache() {
  try { return await caches.open(MP_CACHE); } catch { return null; }
}

async function fetchMpFile(url, known, onDelta) {
  const cache = await openMpCache();
  if (cache) {
    try {
      const hit = await cache.match(url, { ignoreSearch: true });
      if (hit) {
        const buf = new Uint8Array(await hit.arrayBuffer());
        onDelta(buf.byteLength);
        return buf;
      }
    } catch {}
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error('下載失敗 ' + url.split('/').pop());
  const reader = res.body?.getReader();
  if (!reader) {
    const buf = new Uint8Array(await res.arrayBuffer());
    onDelta(buf.byteLength);
    if (cache) try { await cache.put(url, new Response(buf, { headers: { 'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream' } })); } catch {}
    return buf;
  }
  const chunks = [];
  let n = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    n += value.byteLength;
    onDelta(value.byteLength);
  }
  const buf = new Uint8Array(n);
  let o = 0;
  for (const c of chunks) { buf.set(c, o); o += c.byteLength; }
  if (cache) {
    try { await cache.put(url, new Response(buf, { headers: { 'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream' } })); } catch {}
  }
  return buf;
}

async function prefetchMpAssets(forceOverlay) {
  if (state.mpBuffers) return state.mpBuffers;
  if (mpPrefetchP) return mpPrefetchP;
  mpPrefetchP = (async () => {
    const total = MP_FILES.reduce((s, f) => s + f.bytes, 0);
    let loaded = 0;
    const tick = () => {
      const pct = Math.min(99, Math.round((loaded / total) * 100));
      const mb = (loaded / 1048576).toFixed(1);
      const tot = (total / 1048576).toFixed(1);
      setMpProgress(`下載手勢模型 ${mb} / ${tot} MB（${pct}%）`, forceOverlay);
    };
    tick();
    const out = {};
    await Promise.all(MP_FILES.map(async (f) => {
      out[f.key] = await fetchMpFile(f.url, f.bytes, (d) => { loaded += d; tick(); });
    }));
    state.mpBuffers = out;
    state.mpPrefetchDone = true;
    setMpProgress('手勢模型已下載，正在準備…', forceOverlay);
    return out;
  })();
  try { return await mpPrefetchP; }
  catch (e) { mpPrefetchP = null; throw e; }
}

async function initLandmarker(opts = {}) {
  if (landmarker) return landmarker;
  if (mpInitP) {
    if (opts.overlay) { mpOverlay = true; setMpProgress(state.mpProgress || '正在準備手勢辨識…', true); }
    return mpInitP;
  }
  if (opts.overlay) mpOverlay = true;
  const quiet = !!opts.quiet && introVisible() && !mpOverlay;
  mpInitP = (async () => {
    try {
      if (typeof FilesetResolver !== 'function' || typeof HandLandmarker !== 'function') {
        throw new Error('手勢模組未載入（FilesetResolver 或 HandLandmarker 無效）');
      }
      const bufs = await prefetchMpAssets(!quiet);
      if (!quiet) setMpProgress('正在啟動手勢辨識…', true);
      else setMpProgress('正在啟動手勢辨識…', false);
      const fileset = await FilesetResolver.forVisionTasks(wasmBase());
      const modelBuf = () => {
        const src = bufs.task;
        const u8 = src instanceof Uint8Array ? src : new Uint8Array(src);
        return u8.slice(); // never hand the only copy to WASM (it may detach)
      };
      const mk = (delegate) => ({
        baseOptions: { modelAssetBuffer: modelBuf(), delegate },
        runningMode: 'VIDEO', numHands: 1,
        minHandDetectionConfidence: isIPadOS ? 0.45 : 0.5,
        minHandPresenceConfidence: isIPadOS ? 0.45 : 0.5,
        minTrackingConfidence: isIPadOS ? 0.45 : 0.5,
      });
      // iPhone keeps the proven GPU-first path. iPad prefers CPU (GPU often returns zero hands).
      const order = isIPadOS ? ['CPU', 'GPU'] : ['GPU', 'CPU'];
      let lastErr = null;
      landmarker = null;
      for (const del of order) {
        try {
          if (!quiet) setMpProgress(`正在啟動手勢辨識（${del}）…`, true);
          landmarker = await HandLandmarker.createFromOptions(fileset, mk(del));
          state.delegate = del;
          state.mpError = '';
          lastErr = null;
          break;
        } catch (e) {
          lastErr = e;
          console.warn(del + ' delegate failed', e);
          state.mpError = del + '：' + errText(e);
        }
      }
      if (!landmarker) throw lastErr || new Error('HandLandmarker 啟動失敗');
      state.mpReady = true;
      state.mpOrder = order.join('→');
      if (introVisible()) setMpProgress('手勢辨識已準備好，可開啟相機', false);
      hideMpOverlay();
      allowMusic();
      return landmarker;
    } catch (e) {
      mpInitP = null;
      hideMpOverlay();
      if (introVisible()) setMpProgress('手勢模型預載失敗，開啟相機時會再試', false);
      throw e;
    }
  })();
  return mpInitP;
}

function scheduleMpWarmup() {
  setTimeout(() => {
    prefetchMpAssets(false).then(() => initLandmarker({ quiet: true })).catch((e) => console.warn('預載入手勢模型失敗', e));
  }, 200);
}

function registerMpWorker() {
  if (!('serviceWorker' in navigator)) return;
  const swUrl = rel('sw.js');
  navigator.serviceWorker.register(swUrl).catch((e) => console.warn('Service Worker 註冊失敗', e));
}
const CAM_KEY = 'gesture-demo-camera';
const CAM_MODE_KEY = 'gesture-demo-cam-mode';
function defaultCamMode() {
  try {
    const saved = localStorage.getItem(CAM_MODE_KEY);
    if (saved === 'single' || saved === 'dual') return saved;
  } catch {}
  if (isTouch || isIOS || isAndroid) return 'dual';
  return 'single';
}
try { if (localStorage.getItem(CAM_KEY) === 'environment') state.facing = 'environment'; } catch {}
if (!state.camMode) state.camMode = defaultCamMode();
state.deviceId = null;
state.rearStream = null;
state.dualKind = null;
let videoInputs = [];

function facingFromLabel(label) {
  const s = (label || '').toLowerCase();
  if (/back|rear|environment|後置|後鏡頭/.test(s)) return 'environment';
  if (/front|user|face|前置|前鏡頭|facetime/.test(s)) return 'user';
  return null;
}

function trackOf(stream) { return stream?.getVideoTracks?.()[0] || null; }
function trackSettings(stream) { return trackOf(stream)?.getSettings?.() || {}; }
function facingOf(stream) {
  const st = trackSettings(stream);
  if (st.facingMode === 'user' || st.facingMode === 'environment') return st.facingMode;
  const dev = videoInputs.find((d) => d.deviceId === st.deviceId);
  return facingFromLabel(dev?.label) || null;
}
function trackAlive(stream) {
  const t = trackOf(stream);
  return !!(t && t.readyState === 'live' && t.enabled);
}
function stopStream(stream) {
  stream?.getTracks?.().forEach((tr) => { try { tr.stop(); } catch {} });
}
function sameCamera(a, b) {
  if (!a || !b) return false;
  const ia = trackSettings(a).deviceId, ib = trackSettings(b).deviceId;
  if (ia && ib && ia === ib) return true;
  const fa = facingOf(a), fb = facingOf(b);
  return !!(fa && fb && fa === fb);
}

function applyMirror() {
  if (state.camMode === 'dual') {
    video.classList.remove('mirror');
    videoFront.classList.add('mirror');
  } else {
    video.classList.toggle('mirror', state.facing === 'user');
    videoFront.classList.remove('mirror');
  }
}

function persistCam() {
  try { localStorage.setItem(CAM_KEY, state.facing); } catch {}
  try { localStorage.setItem(CAM_MODE_KEY, state.camMode); } catch {}
}

function hintText() {
  if (!state.camOn) return '';
  if (state.camMode === 'dual' && state.dualKind === 'live') return '目前：雙鏡頭（前置控制手勢，後置即時背景）';
  if (state.camMode === 'dual' && state.dualKind === 'still') return '目前：雙鏡頭（前置控制手勢，後置靜態背景）。此裝置無法同時開啟兩顆鏡頭。';
  if (state.facing === 'environment') return '目前：後鏡頭手勢';
  return '目前：前鏡頭手勢';
}

function updateCamUI() {
  const on = !!state.camOn;
  const dual = on && state.camMode === 'dual';
  const still = dual && state.dualKind === 'still';
  document.body.classList.toggle('cam', on);
  document.body.classList.toggle('dual', dual);
  document.body.classList.toggle('dual-still', still);
  const flip = $('#btnFlip');
  if (flip) {
    flip.textContent = '🔄 切換鏡頭';
    flip.title = '切換鏡頭';
    flip.hidden = !on || dual || videoInputs.length < 2;
  }
  const modeBtn = $('#btnMode');
  if (modeBtn) {
    modeBtn.hidden = !on;
    modeBtn.textContent = dual ? '🎥 雙鏡頭' : '🎥 鏡頭模式';
    modeBtn.setAttribute('aria-expanded', modeSheet?.classList.contains('show') ? 'true' : 'false');
  }
  const reshoot = $('#btnReshoot');
  if (reshoot) reshoot.hidden = !still;
  if (camHint) camHint.textContent = hintText();
  if (modeSheet) {
    for (const b of modeSheet.querySelectorAll('[data-mode]')) {
      b.setAttribute('aria-current', b.dataset.mode === state.camMode ? 'true' : 'false');
    }
  }
  applyMirror();
  state.trackSrc = (state.camMode === 'dual') ? 'front' : 'main';
}

function closeModeSheet() { modeSheet?.classList.remove('show'); }

async function refreshVideoInputs() {
  try {
    const list = await navigator.mediaDevices.enumerateDevices();
    videoInputs = list.filter((d) => d.kind === 'videoinput');
  } catch { videoInputs = []; }
  state.cameraCount = videoInputs.length;
  updateCamUI();
}

function pickDevice(facing) {
  return videoInputs.find((d) => facingFromLabel(d.label) === facing) || null;
}

async function openFacingStream(facing, extra = {}) {
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('這個瀏覽器不支援相機（需要 HTTPS 或 localhost）');
  const tryGet = (video) => navigator.mediaDevices.getUserMedia({ audio: false, video });
  const base = { width: { ideal: extra.width || 640 }, height: { ideal: extra.height || 480 } };
  const dev = pickDevice(facing);
  if (dev?.deviceId) {
    try { return await tryGet({ ...base, deviceId: { exact: dev.deviceId } }); }
    catch { /* 改試 facingMode */ }
  }
  try { return await tryGet({ ...base, facingMode: { exact: facing } }); }
  catch {}
  try { return await tryGet({ ...base, facingMode: { ideal: facing } }); }
  catch {}
  try { return await tryGet({ facingMode: { ideal: facing } }); }
  catch {}
  return tryGet(true);
}

function waitEvent(el, ev, ms) {
  return new Promise((res, rej) => {
    const t = setTimeout(() => rej(new Error('等候畫面逾時')), ms);
    const ok = () => { clearTimeout(t); el.removeEventListener(ev, ok); res(); };
    el.addEventListener(ev, ok);
  });
}

async function attachVideo(el, stream) {
  el.srcObject = stream;
  el.muted = true;
  el.playsInline = true;
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  el.setAttribute('muted', '');
  try { await el.play(); } catch {}
  if (el.readyState >= 2) { state.camPermitted = true; return; }
  try { await waitEvent(el, 'loadeddata', 2000); } catch {}
  state.camPermitted = true;
}

async function waitTrackReady(stream, ms = 500) {
  const tr = trackOf(stream);
  if (!tr) return false;
  if (tr.readyState !== 'live') return false;
  if (!tr.muted) return true;
  return await new Promise((res) => {
    const done = (v) => { clearTimeout(t); tr.removeEventListener('unmute', onUnmute); res(v); };
    const onUnmute = () => done(true);
    const t = setTimeout(() => done(tr.readyState === 'live'), ms);
    tr.addEventListener('unmute', onUnmute, { once: true });
  });
}

function isMostlyBlack(el) {
  const w = el.videoWidth, h = el.videoHeight;
  if (!w || !h) return false;
  const c = document.createElement('canvas');
  c.width = 32; c.height = 24;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  try { ctx.drawImage(el, 0, 0, 32, 24); } catch { return false; }
  const data = ctx.getImageData(0, 0, 32, 24).data;
  let max = 0, sum = 0;
  for (let i = 0; i < data.length; i += 4) {
    const l = data[i] + data[i + 1] + data[i + 2];
    if (l > max) max = l;
    sum += l;
  }
  return max < 12 && sum < 32 * 24 * 3 * 0.02;
}

async function videoLooksLive(el, samples = 2) {
  if (el.readyState < 2) {
    try { await waitEvent(el, 'loadeddata', 800); } catch { return false; }
  }
  await new Promise((r) => setTimeout(r, 40));
  let black = 0, ready = 0;
  for (let i = 0; i < samples; i++) {
    if (el.videoWidth) {
      ready++;
      if (isMostlyBlack(el)) black++;
    }
    if (i < samples - 1) await new Promise((r) => setTimeout(r, 50));
  }
  if (!ready) return trackAlive(el.srcObject);
  return black < samples;
}

async function waitForStillFrame(el, ms = 2000) {
  el.muted = true;
  el.playsInline = true;
  el.setAttribute('playsinline', '');
  el.setAttribute('webkit-playsinline', '');
  const deadline = performance.now() + ms;
  const ok = () => el.videoWidth > 0 && !isMostlyBlack(el);
  if (ok()) return true;
  return await new Promise((res) => {
    let done = false;
    const finish = (v) => { if (done) return; done = true; res(v); };
    const tick = () => {
      if (ok()) return finish(true);
      if (performance.now() >= deadline) return finish(el.videoWidth > 0);
      if (typeof el.requestVideoFrameCallback === 'function') el.requestVideoFrameCallback(() => tick());
      else requestAnimationFrame(tick);
    };
    tick();
  });
}

function captureStill(el) {
  const w = el.videoWidth || 1280, h = el.videoHeight || 720;
  bgStill.width = w; bgStill.height = h;
  const ctx = bgStill.getContext('2d');
  ctx.drawImage(el, 0, 0, w, h);
  state.stillSize = { w, h };
  const img = $('#bgStillImg');
  if (img) {
    try { img.src = bgStill.toDataURL('image/jpeg', 0.85); state.stillDataUrl = true; }
    catch { state.stillDataUrl = false; }
  }
}

function stillIsNonBlack() {
  if (!bgStill?.width) return false;
  const w = Math.min(32, bgStill.width), h = Math.min(24, bgStill.height);
  try {
    const ctx = bgStill.getContext('2d', { willReadFrequently: true });
    const data = ctx.getImageData(0, 0, w, h).data;
    let max = 0, sum = 0;
    for (let i = 0; i < data.length; i += 4) {
      const l = data[i] + data[i + 1] + data[i + 2];
      if (l > max) max = l;
      sum += l;
    }
    return max >= 12 || sum >= w * h * 3 * 0.02;
  } catch { return bgStill.width > 0; }
}

function clearStillBackground() {
  if (bgStill) { bgStill.width = 0; bgStill.height = 0; }
  const img = $('#bgStillImg'); if (img) img.removeAttribute('src');
  state.stillSize = null;
  state.stillDataUrl = false;
}

function setTrackSource(el) {
  trackVideo = el;
  lastVideoTime = -1;
  lastDetect = 0;
}

async function openCameraStream() {
  const base = { width: { ideal: 640 }, height: { ideal: 480 } };
  const tryGet = (v) => navigator.mediaDevices.getUserMedia({ audio: false, video: v });
  if (state.deviceId) {
    try { return await tryGet({ ...base, deviceId: { exact: state.deviceId } }); }
    catch { state.deviceId = null; }
  }
  try { return await tryGet({ ...base, facingMode: { ideal: state.facing } }); }
  catch {}
  try { return await tryGet({ facingMode: { ideal: state.facing } }); }
  catch {}
  return tryGet(true);
}

async function startCamera() {
  stopCamera();
  state.camMode = 'single';
  state.dualKind = null;
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('這個瀏覽器不支援相機（需要 HTTPS 或 localhost）');
  state.stream = await openCameraStream();
  const track = trackOf(state.stream);
  const st = track?.getSettings?.() || {};
  if (st.facingMode === 'user' || st.facingMode === 'environment') state.facing = st.facingMode;
  if (st.deviceId) state.deviceId = st.deviceId;
  await attachVideo(video, state.stream);
  setTrackSource(video);
  state.camOn = true;
  startDetectLoop();
  ignoreGesturesUntil = performance.now() + 800;
  gesture.reset();
  persistCam();
  await refreshVideoInputs();
  if (!st.facingMode && state.deviceId) {
    const dev = videoInputs.find((d) => d.deviceId === state.deviceId);
    const f = facingFromLabel(dev?.label);
    if (f) { state.facing = f; persistCam(); }
  }
  updateCamUI();
}

async function startDualStill(existingRear) {
  state.camMode = 'dual';
  state.dualKind = 'still';
  state.facing = 'user';
  let rear = existingRear && trackAlive(existingRear) ? existingRear : null;
  try {
    if (!rear) rear = await openFacingStream('environment', { width: 1280, height: 720 });
    await attachVideo(video, rear);
    const got = await waitForStillFrame(video, 2000);
    if (got || video.videoWidth) captureStill(video);
    else throw new Error('無法擷取後置畫面');
  } finally {
    stopStream(rear);
    if (video.srcObject === rear) video.srcObject = null;
  }
  const front = await openFacingStream('user');
  await attachVideo(videoFront, front);
  state.stream = front;
  state.rearStream = null;
  const fst = trackSettings(front);
  if (fst.deviceId) state.deviceId = fst.deviceId;
  setTrackSource(videoFront);
  state.camOn = true;
  startDetectLoop();
  ignoreGesturesUntil = performance.now() + 800;
  gesture.reset();
  persistCam();
  await refreshVideoInputs();
  updateCamUI();
}

async function startDualCamera() {
  stopCamera();
  state.camMode = 'dual';
  state.dualKind = null;
  state.facing = 'user';
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('這個瀏覽器不支援相機（需要 HTTPS 或 localhost）');
  // 先要一次權限，才讀得到鏡頭名稱
  try { await refreshVideoInputs(); } catch {}

  // iPhone / iPad 的 getUserMedia 無法同時開兩顆鏡頭，直接走靜態背景，避免多秒的失敗探測
  if (isIOS) {
    try {
      await startDualStill(null);
      return;
    } catch (e) {
      console.warn('雙鏡頭靜態背景失敗，改用單鏡頭手勢', e);
      await startCamera();
      return;
    }
  }

  let rear = null, front = null;
  try {
    rear = await openFacingStream('environment', { width: 1280, height: 720 });
    front = await openFacingStream('user');
  } catch (e) {
    if (rear && !front) {
      try { await startDualStill(rear); return; }
      catch (e2) { stopStream(rear); throw e2; }
    }
    stopStream(rear); stopStream(front);
    throw e;
  }

  if (sameCamera(rear, front)) {
    stopStream(rear); stopStream(front);
    toast('找不到獨立的後鏡頭，已改用單鏡頭手勢');
    state.facing = 'user';
    await startCamera();
    return;
  }

  await attachVideo(video, rear);
  await attachVideo(videoFront, front);
  await waitTrackReady(rear);
  await waitTrackReady(front);
  const rearOk = trackAlive(rear) && await videoLooksLive(video);
  const frontOk = trackAlive(front) && await videoLooksLive(videoFront);

  if (rearOk && frontOk) {
    state.rearStream = rear;
    state.stream = front;
    state.dualKind = 'live';
    const fst = trackSettings(front);
    if (fst.deviceId) state.deviceId = fst.deviceId;
    setTrackSource(videoFront);
    state.camOn = true;
    startDetectLoop();
    ignoreGesturesUntil = performance.now() + 800;
    gesture.reset();
    persistCam();
    await refreshVideoInputs();
    updateCamUI();
    return;
  }

  // 第二路把第一路擠掉、黑畫面、或其中一路失敗 → 改拍靜態背景
  stopStream(front);
  videoFront.srcObject = null;
  if (!trackAlive(rear) || !rearOk) {
    stopStream(rear);
    if (video.srcObject === rear) video.srcObject = null;
    rear = null;
  }
  try {
    await startDualStill(rear);
  } catch (e) {
    stopStream(rear); stopStream(front);
    throw e;
  }
}

function stopCamera({ keepStill = false } = {}) {
  stopDetectLoop();
  stopStream(state.stream);
  stopStream(state.rearStream);
  state.stream = null;
  state.rearStream = null;
  state.camOn = false;
  state.dualKind = null;
  if (video.srcObject) video.srcObject = null;
  if (videoFront?.srcObject) videoFront.srcObject = null;
  if (!keepStill) clearStillBackground();
  document.body.classList.remove('cam', 'dual', 'dual-still');
  closeModeSheet();
  updateCamUI();
}

function hardStopVideoEl(el) {
  if (!el) return;
  try { el.pause(); } catch {}
  try {
    if (el.srcObject) el.srcObject.getTracks().forEach((tr) => { try { tr.stop(); } catch {} });
  } catch {}
  el.srcObject = null;
}

async function releaseCameras({ keepStill = false } = {}) {
  stopCamera({ keepStill });
  assembly?.stopScanStream?.();
  hardStopVideoEl(video);
  hardStopVideoEl(videoFront);
  hardStopVideoEl($('#scanVideo'));
  // iPhone 必須等前置軌道真的結束，後鏡頭 getUserMedia 才不會拿到黑畫面或 NotReadableError
  const wait = isIOS ? 350 : 80;
  await new Promise((r) => setTimeout(r, wait));
}

async function acquireCameras(preferred) {
  const mode = preferred || defaultCamMode();
  await enableGestures(mode);
}

async function flipCamera() {
  if (!state.camOn || state.camMode === 'dual') return;
  await refreshVideoInputs();
  if (videoInputs.length < 2) { updateCamUI(); toast('這個裝置只有一個鏡頭'); return; }
  const prevId = state.deviceId || trackSettings(state.stream).deviceId || '';
  const nextFacing = state.facing === 'user' ? 'environment' : 'user';
  const cycleFrom = (id) => {
    const i = Math.max(0, videoInputs.findIndex((d) => d.deviceId === id));
    const nxt = videoInputs[(i + 1) % videoInputs.length];
    state.deviceId = nxt.deviceId;
    const f = facingFromLabel(nxt.label);
    if (f) state.facing = f;
  };
  state.facing = nextFacing;
  state.deviceId = null;
  try {
    await startCamera();
    if (prevId && state.deviceId === prevId && videoInputs.length > 1) {
      cycleFrom(prevId);
      await startCamera();
    }
  } catch (e) {
    try { cycleFrom(prevId); await startCamera(); }
    catch (e2) { console.warn(e2); toast('切換鏡頭失敗'); }
  }
}

async function setCamMode(mode) {
  closeModeSheet();
  if (mode !== 'single' && mode !== 'dual') return;
  if (state.camOn && state.camMode === mode && (mode !== 'dual' || state.dualKind)) return;
  state.camMode = mode;
  persistCam();
  if (!state.camOn) { updateCamUI(); return; }
  try {
    if (mode === 'dual') await startDualCamera();
    else {
      state.facing = 'user';
      state.deviceId = null;
      await startCamera();
    }
    setStatus('none');
  } catch (e) {
    console.warn(e);
    toast((mode === 'dual' ? '無法開啟雙鏡頭：' : '無法開啟相機：') + (e.message || e.name));
  }
}

async function reshootBackground() {
  if (!state.camOn || state.camMode !== 'dual') return;
  const reshoot = $('#btnReshoot');
  if (reshoot) reshoot.disabled = true;
  toast('正在重拍後置背景…');
  const keepFront = state.stream;
  stopStream(keepFront);
  state.stream = null;
  if (videoFront.srcObject === keepFront) videoFront.srcObject = null;
  stopStream(state.rearStream);
  state.rearStream = null;
  try {
    await startDualStill(null);
    toast('背景已更新');
    setStatus('none');
  } catch (e) {
    console.warn(e);
    toast('重拍失敗：' + (e.message || e.name) + '。改回前鏡頭手勢');
    try { state.facing = 'user'; await startCamera(); } catch {}
  } finally {
    if (reshoot) reshoot.disabled = false;
  }
}

async function enableGestures(preferred) {
  if (preferred === 'dual' || preferred === 'single') state.camMode = preferred;
  try {
    const mp = initLandmarker({ overlay: true });
    const cam = (async () => {
      if (state.camMode === 'dual') await startDualCamera();
      else await startCamera();
    })();
    const camErr = await Promise.allSettled([mp, cam]);
    if (camErr[1].status === 'rejected') throw camErr[1].reason;
    if (camErr[0].status === 'rejected') throw camErr[0].reason;
    state.wantCam = true;
    setStatus('none');
  } catch (e) {
    console.warn(e);
    $('#loading').classList.add('hide');
    toast((/相機|鏡頭|NotAllowed|NotFound|NotReadable|NotSupported|Overconstrained|constraint|permission|getUserMedia|SecurityError/i.test(errText(e)) ? '無法開啟相機：' : '無法載入手勢：') + errText(e) + '。已切換成觸控模式');
    state.wantCam = false;
    setStatus('nocam');
  }
}
$('#btnFlip').onclick = () => { flipCamera(); };
$('#btnMode').onclick = (e) => {
  e.stopPropagation();
  if (modeSheet.classList.contains('show')) closeModeSheet();
  else { modeSheet.classList.add('show'); updateCamUI(); }
};
modeSheet?.querySelectorAll('[data-mode]').forEach((b) => {
  b.onclick = (e) => { e.stopPropagation(); setCamMode(b.dataset.mode); };
});
document.addEventListener('click', () => closeModeSheet());
$('#btnReshoot').onclick = () => { reshootBackground(); };
$('#startCam').onclick = () => { $('#intro').classList.add('hide'); unlockAudio(); enableGestures(defaultCamMode()); };
$('#startDual').onclick = () => { $('#intro').classList.add('hide'); unlockAudio(); enableGestures('dual'); };
$('#startTouch').onclick = () => { state.wantCam = false; allowMusic(); $('#intro').classList.add('hide'); unlockAudio(); setStatus('nocam'); };

state.setCamMode = setCamMode;
state.reshootBackground = reshootBackground;
state.debugCam = () => ({
  mode: state.camMode, kind: state.dualKind, facing: state.facing, camOn: state.camOn,
  frontLive: trackAlive(state.stream), rearLive: trackAlive(state.rearStream),
  frontId: trackSettings(state.stream).deviceId || null,
  rearId: trackSettings(state.rearStream).deviceId || null,
  videoMirror: video.classList.contains('mirror'),
  frontMirror: videoFront.classList.contains('mirror'),
  reshootHidden: !!$('#btnReshoot')?.hidden,
  flipHidden: !!$('#btnFlip')?.hidden,
  modeHidden: !!$('#btnMode')?.hidden,
  hint: camHint?.textContent || '',
  still: !!(state.stillSize && bgStill?.width),
  stillSize: state.stillSize || null,
  trackSrc: state.trackSrc,
  bodyDual: document.body.classList.contains('dual'),
  bodyStill: document.body.classList.contains('dual-still'),
  clearAlpha: renderer.getClearAlpha(),
  clearColor: renderer.getClearColor(new THREE.Color()).getHex(),
  sceneBg: scene.background == null ? null : 'set',
  stillNonBlack: stillIsNonBlack(),
  wantCam: !!state.wantCam,
  appMode: state.appMode,
});

// 手勢判斷（旋轉與開合分開的狀態機，邏輯在 gestures.mjs）
const gesture = createGestureMachine();
state.gestureMachine = gesture;
state.classify = (lm) => classifyPose(lm).g;

function updateChargeUI(r) {
  const el = $('#gesture');
  const fg = $('#gRingFg');
  if (!el || !fg) return;
  const on = !!(r && r.charge > 0.03 && r.chargeLabel);
  el.classList.toggle('charging', on);
  const pct = on ? Math.max(0, Math.min(100, r.charge * 100)) : 0;
  fg.setAttribute('stroke-dasharray', `${pct} 100`);
}

const DETECT_MAX = (isTouch || isIOS || isAndroid) ? 320 : 480;
let detectCanvas = null, detectCtx = null, detectLoopOn = false, detectLoopToken = 0;
let inferTs = 0, emptyHands = 0, detectSkips = 0, lastInferErr = '', switchingDelegate = false;
const fpsMeter = { detN: 0, detT: 0, detFps: 0, detMs: 0, drawN: 0, drawT: 0, drawFps: 0, rvfc: false, srcW: 0 };

function noteRenderFps(now) {
  fpsMeter.drawN++;
  if (!fpsMeter.drawT) fpsMeter.drawT = now;
  const e = now - fpsMeter.drawT;
  if (e >= 500) {
    fpsMeter.drawFps = Math.round(fpsMeter.drawN * 1000 / e);
    fpsMeter.drawN = 0;
    fpsMeter.drawT = now;
    state.rendFps = fpsMeter.drawFps;
  }
}

function detectSource(videoEl) {
  if (!videoEl || !videoEl.videoWidth) return videoEl;
  // iPad only: pass the video element. iPhone keeps the canvas downscale path that worked before.
  if (isIPadOS) { fpsMeter.srcW = videoEl.videoWidth; return videoEl; }
  const vw = videoEl.videoWidth, vh = videoEl.videoHeight;
  if (vw <= DETECT_MAX) { fpsMeter.srcW = vw; return videoEl; }
  const w = DETECT_MAX, h = Math.max(1, Math.round(vh * (DETECT_MAX / vw)));
  if (!detectCanvas) {
    detectCanvas = document.createElement('canvas');
    detectCtx = detectCanvas.getContext('2d', { willReadFrequently: true });
  }
  if (detectCanvas.width !== w || detectCanvas.height !== h) {
    detectCanvas.width = w; detectCanvas.height = h;
  }
  detectCtx.drawImage(videoEl, 0, 0, w, h);
  fpsMeter.srcW = w;
  return detectCanvas;
}

function startDetectLoop() {
  if (state.appMode === 'track' || !state.camOn) return;
  detectLoopOn = true;
  state.detLoop = true;
  const token = ++detectLoopToken;
  const src = trackVideo || video;
  fpsMeter.rvfc = !!(src && typeof src.requestVideoFrameCallback === 'function');
  const onFrame = (now) => {
    if (!detectLoopOn || token !== detectLoopToken) return;
    detect(typeof now === 'number' ? now : performance.now());
    const el = trackVideo || video;
    if (el && typeof el.requestVideoFrameCallback === 'function') el.requestVideoFrameCallback(onFrame);
    else requestAnimationFrame(onFrame);
  };
  if (src && typeof src.requestVideoFrameCallback === 'function') src.requestVideoFrameCallback(onFrame);
  else requestAnimationFrame(onFrame);
  // iOS live camera streams may not fire rVFC, or leave currentTime at 0.
  if (isIOS) {
    const watch = () => {
      if (!detectLoopOn || token !== detectLoopToken) return;
      if (performance.now() - (lastDetect || 0) > 180) detect(performance.now());
      setTimeout(watch, 50);
    };
    setTimeout(watch, 80);
  }
}

function stopDetectLoop() {
  detectLoopOn = false;
  state.detLoop = false;
  detectLoopToken++;
}

async function switchLandmarkerToCpu(why) {
  if (switchingDelegate || state.delegate === 'CPU') return;
  switchingDelegate = true;
  state.mpError = why || 'GPU 無手勢結果，改用 CPU';
  try {
    const bufs = await prefetchMpAssets(false);
    const fileset = await FilesetResolver.forVisionTasks(wasmBase());
    const src = bufs.task;
    const u8 = src instanceof Uint8Array ? src : new Uint8Array(src);
    const next = await HandLandmarker.createFromOptions(fileset, {
      baseOptions: { modelAssetBuffer: u8.slice(), delegate: 'CPU' },
      runningMode: 'VIDEO', numHands: 1,
      minHandDetectionConfidence: 0.45, minHandPresenceConfidence: 0.45, minTrackingConfidence: 0.45,
    });
    const old = landmarker;
    landmarker = next;
    state.delegate = 'CPU';
    state.mpReady = true;
    emptyHands = 0;
    lastVideoTime = -1;
    try { old?.close?.(); } catch {}
  } catch (e) {
    console.warn(e);
    state.mpError = 'CPU 後備失敗：' + errText(e);
  } finally {
    switchingDelegate = false;
  }
}

let trackHandOn = false, trackHandToken = 0, trackHandFails = 0, trackHandSlow = 0;
const hoverHold = { index: -1, t: 0, cool: 0 };
const swipeHand = { x: null, armed: false };

function trackHandVideoEl() {
  return $('#trackBgVideo') || $('#trackAr video') || null;
}

function videoNormToScreen(video, nx, ny, sw, sh) {
  const vw = video?.videoWidth || sw, vh = video?.videoHeight || sh;
  const scale = Math.max(sw / Math.max(vw, 1), sh / Math.max(vh, 1));
  const dw = vw * scale, dh = vh * scale;
  return { x: (sw - dw) / 2 + nx * dw, y: (sh - dh) / 2 + ny * dh };
}

function startTrackHandLoop() {
  stopTrackHandLoop();
  trackHandOn = true;
  trackHandFails = 0;
  trackHandSlow = 0;
  const token = ++trackHandToken;
  state.trackHands = 'on';
  lastVideoTime = -1;
  const onFrame = (now) => {
    if (!trackHandOn || token !== trackHandToken) return;
    detectTrackHand(typeof now === 'number' ? now : performance.now());
    const el = trackHandVideoEl();
    if (el && typeof el.requestVideoFrameCallback === 'function') el.requestVideoFrameCallback(onFrame);
    else requestAnimationFrame(onFrame);
  };
  const src = trackHandVideoEl();
  if (src && typeof src.requestVideoFrameCallback === 'function') src.requestVideoFrameCallback(onFrame);
  else requestAnimationFrame(onFrame);
  if (isIOS) {
    const watch = () => {
      if (!trackHandOn || token !== trackHandToken) return;
      if (performance.now() - (lastDetect || 0) > 180) detectTrackHand(performance.now());
      setTimeout(watch, 50);
    };
    setTimeout(watch, 80);
  }
}

function stopTrackHandLoop() {
  trackHandOn = false;
  trackHandToken++;
  hoverHold.index = -1;
  swipeHand.x = null;
  if (state.trackHands === 'on') state.trackHands = 'off';
}

function fallbackTrackHands(why) {
  stopTrackHandLoop();
  state.trackHands = 'fallback';
  state.trackHandsWhy = why || '後鏡頭手勢暫停，改用點選與 ‹ ›';
  setTrackStatus(state.trackHandsWhy);
}

function detectTrackHand(now) {
  if (!trackHandOn) return;
  const src = trackHandVideoEl();
  if (!landmarker || !src || src.readyState < 2) return;
  if (!src.videoWidth) return;
  if (isIOS) {
    if (!shouldInfer(src, now)) return;
  } else {
    if (src.currentTime === lastVideoTime) return;
    lastVideoTime = src.currentTime;
    lastDetect = now;
  }
  const t0 = performance.now();
  try {
    const input = detectSource(src);
    inferTs = Math.max(inferTs + 1, Math.round(now));
    const ts = isIOS ? inferTs : now;
    const res = landmarker.detectForVideo(input, ts);
    const inferMs = performance.now() - t0;
    fpsMeter.detMs = fpsMeter.detMs ? fpsMeter.detMs * 0.8 + inferMs * 0.2 : inferMs;
    fpsMeter.detN++;
    if (!fpsMeter.detT) fpsMeter.detT = t0;
    if (t0 - fpsMeter.detT >= 500) {
      fpsMeter.detFps = Math.round(fpsMeter.detN * 1000 / (t0 - fpsMeter.detT));
      fpsMeter.detN = 0;
      fpsMeter.detT = t0;
      state.detFps = fpsMeter.detFps;
      state.detMs = Math.round(fpsMeter.detMs);
    }
    trackHandFails = 0;
    if (inferMs > 90) {
      trackHandSlow++;
      if (trackHandSlow > 12 && trackSession && !state.trackSim) {
        fallbackTrackHands('真實追蹤時後鏡頭手勢較吃力，已改用點選圖示與 ‹ › 切換');
        return;
      }
    } else {
      trackHandSlow = Math.max(0, trackHandSlow - 1);
    }
    handleTrackHands(res.landmarks?.[0], src);
  } catch (e) {
    trackHandFails++;
    if (trackHandFails >= 8) fallbackTrackHands('後鏡頭手勢無法同時執行，已改用點選與 ‹ ›');
  }
}

function handleTrackHands(lm, src) {
  if (!lm) {
    hoverHold.index = -1;
    swipeHand.x = null;
    return;
  }
  const pose = classifyPose(lm).g;
  const tip = lm[8];
  if (pose !== 'index' || !tip) {
    hoverHold.index = -1;
    swipeHand.x = null;
    swipeHand.armed = false;
    return;
  }
  if (swipeHand.x == null) {
    swipeHand.x = tip.x;
    swipeHand.armed = true;
  } else if (swipeHand.armed && Math.abs(tip.x - swipeHand.x) > 0.18) {
    swipeHand.armed = false;
    setTrackItem((state.trackItemIndex || 0) + (tip.x < swipeHand.x ? 1 : -1));
    hoverHold.cool = performance.now() + 500;
  }
  if (performance.now() < (hoverHold.cool || 0)) return;
  const menu = arMenuHost || (trackSession && typeof trackSession.projectIcons === 'function' ? trackSession : null);
  if (!menu?.projectIcons) return;
  const w = innerWidth, h = innerHeight;
  const cam = (trackSession?._internal?.camera) || camera;
  const pts = menu.projectIcons(cam, w, h);
  const scr = videoNormToScreen(src, tip.x, tip.y, w, h);
  let hit = -1, best = 1e9;
  for (const p of pts || []) {
    if (p.z > 1.2 || p.z < -1.2) continue;
    const d = Math.hypot(p.x - scr.x, p.y - scr.y);
    if (d < p.r && d < best) { best = d; hit = p.index; }
  }
  if (hit < 0) { hoverHold.index = -1; return; }
  if (hoverHold.index !== hit) { hoverHold.index = hit; hoverHold.t = performance.now(); return; }
  if (performance.now() - hoverHold.t >= 400 && hit !== (state.trackItemIndex || 0)) {
    setTrackItem(hit);
    hoverHold.cool = performance.now() + 600;
    hoverHold.index = -1;
  }
}

const menuRay = new THREE.Raycaster();
const menuNdc = new THREE.Vector2();
function pickArMenu(e) {
  if (!arMenuHost) return;
  const r = canvas.getBoundingClientRect();
  if (r.width < 2 || r.height < 2) return;
  menuNdc.set(((e.clientX - r.left) / r.width) * 2 - 1, -((e.clientY - r.top) / r.height) * 2 + 1);
  menuRay.setFromCamera(menuNdc, camera);
  const i = arMenuHost.pick(menuRay);
  if (i >= 0) setTrackItem(i);
}

async function ensureTrackHands() {
  try {
    await initLandmarker({ quiet: true });
    if (landmarker) startTrackHandLoop();
  } catch (e) {
    console.warn(e);
    state.trackHands = 'fallback';
    state.trackHandsWhy = '手勢模組尚未就緒，可用點選圖示或 ‹ › 切換';
  }
}

function shouldInfer(src, now) {
  const vt = src.currentTime;
  const hasTime = Number.isFinite(vt);
  const zeroStuck = !hasTime || vt === 0 || (vt === lastVideoTime && (now - lastDetect) >= 33);
  // iOS live streams often leave currentTime at 0 after the first frame; don't stall the loop.
  if (hasTime && vt > 0 && vt === lastVideoTime && !zeroStuck) {
    detectSkips++;
    state.detSkip = 'same-frame';
    return false;
  }
  if ((!hasTime || vt === 0 || vt === lastVideoTime) && (now - lastDetect) < 33) {
    state.detSkip = 'throttle';
    return false;
  }
  if (hasTime && vt > 0) lastVideoTime = vt;
  lastDetect = now;
  state.detSkip = '';
  return true;
}

function noteInfer(t0, now, res) {
  const inferMs = performance.now() - t0;
  fpsMeter.detMs = fpsMeter.detMs ? fpsMeter.detMs * 0.8 + inferMs * 0.2 : inferMs;
  fpsMeter.detN++;
  if (!fpsMeter.detT) fpsMeter.detT = t0;
  if (t0 - fpsMeter.detT >= 500) {
    fpsMeter.detFps = Math.round(fpsMeter.detN * 1000 / (t0 - fpsMeter.detT));
    fpsMeter.detN = 0;
    fpsMeter.detT = t0;
    state.detFps = fpsMeter.detFps;
    state.detMs = Math.round(fpsMeter.detMs);
  }
  const lm = res?.landmarks?.[0] || null;
  state.hands = lm ? 1 : 0;
  if (lm) emptyHands = 0;
  else {
    emptyHands++;
    if (state.delegate === 'GPU' && emptyHands >= 20 && state.camOn) switchLandmarkerToCpu('GPU 連續無手勢，改用 CPU');
  }
  return lm;
}

function detect(now) {
  if (ar.session || renderer.xr.isPresenting) { state.detSkip = 'ar'; return; }
  if (!state.camOn || state.appMode === 'track') { state.detSkip = state.appMode === 'track' ? 'track' : 'cam-off'; return; }
  const src = trackVideo || video;
  state.videoW = src?.videoWidth || 0;
  state.videoH = src?.videoHeight || 0;
  state.videoT = src ? src.currentTime : -1;
  state.videoReady = src?.readyState || 0;
  if (!landmarker) { state.detSkip = 'no-landmarker'; return; }
  if (!src || src.readyState < 2) { state.detSkip = 'video-not-ready'; return; }
  if (!src.videoWidth) { state.detSkip = 'video-0'; return; }
  if (isIOS) {
    if (!shouldInfer(src, now)) return;
  } else {
    if (src.currentTime === lastVideoTime) return;
    lastVideoTime = src.currentTime;
    lastDetect = now;
  }
  const t0 = performance.now();
  const input = detectSource(src);
  inferTs = Math.max(inferTs + 1, Math.round(now));
  const ts = isIOS ? inferTs : now;
  let res;
  try { res = landmarker.detectForVideo(input, ts); lastInferErr = ''; }
  catch (e) { lastInferErr = errText(e); console.warn(e); state.detSkip = 'infer-err'; return; }
  const lm = noteInfer(t0, now, res);
  drawHand(lm);
  const mirrored = state.camMode === 'dual' || state.facing === 'user';
  const r = gesture.update({
    now, landmarks: lm || null, mirrored,
    ignore: now < ignoreGesturesUntil,
    zoom: state.tZoom, clampZ,
  });
  if (r.status === 'pinch') state.tZoom = r.zoom;
  if (state.appMode === 'assembly') {
    if (r.triggered === 'explode') assembly?.next();
    else if (r.triggered === 'collapse') assembly?.prev();
    if (r.chargeLabel === '展開') r.chargeLabel = '下一步';
    else if (r.chargeLabel === '收合') r.chargeLabel = '上一步';
  } else {
    if (r.triggered === 'explode') setTarget(1);
    else if (r.triggered === 'collapse') setTarget(0);
  }
  updateChargeUI(r);
  setStatus(r.status);
  state.gLast = r;
  state.gSpeed = r.speed;
  state.gCharge = r.charge;
  state.gHold = r.hold;
  state.gPose = r.pose;
  state.gRaw = r.raw;
}

function gestureLegend() {
  const asm = state.appMode === 'assembly';
  return {
    none: ['✋', '請把手放進畫面'],
    open: ['🖐️', asm ? '張開手掌：下一步' : '張開手掌：展開'],
    fist: ['✊', asm ? '握拳：上一步' : '握拳：收合'],
    index: ['☝️', '只伸食指並移動：旋轉'],
    pinch: ['🤏', '捏合：縮放'],
    chargeOpen: ['🖐️', asm ? '下一步' : '展開'],
    chargeFist: ['✊', asm ? '上一步' : '收合'],
    nocam: ['👆', asm ? '觸控：拖曳旋轉、雙指縮放、左右滑切步驟' : '觸控模式：拖曳旋轉・雙指縮放・點兩下展開'],
  };
}
function setStatus(g) {
  const GEST = gestureLegend();
  const key = GEST[g] ? g : 'none';
  const [i, txt] = GEST[key];
  if (state.gesture === key && key !== 'nocam' && key !== 'chargeOpen' && key !== 'chargeFist' && $('#gtxt')?.textContent === txt) return;
  state.gesture = key;
  $('#gico').textContent = i;
  $('#gtxt').textContent = txt;
}
function updateDebug(r) {
  if (!document.body.classList.contains('debug')) return;
  const el = $('#gdebug'); if (!el) return;
  const d = r || state.gLast || {};
  const orient = (screen.orientation && screen.orientation.type) || (innerWidth > innerHeight ? 'landscape' : 'portrait');
  el.textContent = [
    `mode=${state.appMode || 'demo'} pose=${d.pose || '-'} raw=${d.raw || '-'} status=${d.status || state.gesture || '-'}`,
    `hold=${Math.round((d.hold || 0) * 100)}% last=${d.lastAction || '-'} nExt=${d.nExt ?? '-'} nCurled=${d.nCurled ?? '-'}`,
    `mp=${state.mpReady ? 'ready' : (state.mpError ? 'fail' : 'load')} del=${state.delegate || '-'} loop=${detectLoopOn ? 'on' : 'off'} skip=${state.detSkip || '-'} hands=${state.hands ?? 0} empty=${emptyHands} err=${lastInferErr || state.mpError || '-'}`,
    `cam=${state.camMode} kind=${state.dualKind || '-'} facing=${state.facing} on=${!!state.camOn} ios=${isIOS ? 1 : 0} ipad=${isIPadOS ? 1 : 0} touch=${isTouch ? 1 : 0}`,
    `video=${state.videoW || 0}x${state.videoH || 0} t=${Number(state.videoT || 0).toFixed(2)} ready=${state.videoReady ?? '-'} orient=${orient}`,
    `fps det=${fpsMeter.detFps || 0} infer=${Math.round(fpsMeter.detMs)}ms rend=${fpsMeter.drawFps || 0} rvfc=${fpsMeter.rvfc ? 1 : 0} src=${fpsMeter.srcW || '-'} skips=${detectSkips}`,
    state.trackSim ? `sim canv=${canvas.width}x${canvas.height} css=${canvas.clientWidth}x${canvas.clientHeight} meshes=${state.simMeshCount ?? 0} frames=${state.simFrames || 0} hands=${state.trackHands || '-'} ` : `asset=${ASSET_VER} trackHands=${state.trackHands || '-'}`,
  ].join('\n');
}
const BONES = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [17, 18], [18, 19], [19, 20], [0, 17]];
function drawHand(lm) {
  const w = hud.width, h = hud.height; hctx.clearRect(0, 0, w, h);
  if (!lm) return; const m = state.camMode === 'dual' || state.facing === 'user';
  const P = (p) => [(m ? 1 - p.x : p.x) * w, p.y * h];
  hctx.lineWidth = 3; hctx.strokeStyle = 'rgba(120,200,255,0.95)'; hctx.lineCap = 'round';
  for (const [a, b] of BONES) { const [x1, y1] = P(lm[a]), [x2, y2] = P(lm[b]); hctx.beginPath(); hctx.moveTo(x1, y1); hctx.lineTo(x2, y2); hctx.stroke(); }
  hctx.fillStyle = '#fff'; for (const p of lm) { const [x, y] = P(p); hctx.beginPath(); hctx.arc(x, y, 3, 0, 7); hctx.fill(); }
}
let toastT; function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 4500); }

// ---------- 模式分頁（展示／組裝／圖像追蹤） ----------
let assembly = null;
const DEMO_TITLE = '2U 機架式伺服器';
const DEMO_SUB = '手勢互動 3D 爆炸圖展示';
state.appMode = 'demo';
state.wantCam = false;

function syncModeUrl() {
  const p = new URLSearchParams(location.search);
  if (state.appMode === 'demo') p.delete('mode');
  else p.set('mode', state.appMode);
  const q = p.toString();
  const url = location.pathname + (q ? '?' + q : '') + (location.hash || '');
  history.replaceState(null, '', url);
}

function updateModeTabs() {
  document.querySelectorAll('#modeTabs [data-app-mode]').forEach((b) => {
    b.setAttribute('aria-selected', b.dataset.appMode === state.appMode ? 'true' : 'false');
  });
  document.querySelectorAll('.legend-demo').forEach((el) => { el.hidden = state.appMode === 'assembly'; });
  document.querySelectorAll('.legend-asm').forEach((el) => { el.hidden = state.appMode !== 'assembly'; });
}

let trackMod = null, trackAssets = null, trackSession = null, trackBusy = false, trackPreloadP = null, trackSim = null, simPtrUnbind = null;
const TRACK_CACHE = 'gesture-demo-track-v2';
const TRACK_FILES = [
  { url: () => rel('track/track-mode.bundle.js'), bytes: 2810444, w: 0.62 },
  { url: () => rel('track/targets.mind'), bytes: 753330, w: 0.22 },
  { url: () => rel('models/server.glb'), bytes: 572000, w: 0.14 },
  { url: () => rel('models/parts.json'), bytes: 8000, w: 0.02 },
];

function updateTrackProgress(pct, status) {
  const p = Math.max(0, Math.min(100, Math.round((pct || 0) * 100)));
  state.trackPreloadPct = p;
  state.trackPreloadStatus = status;
  const label = status === 'ready' ? '已就緒' : status === 'error' ? '預載失敗' : `預載中 ${p}%`;
  const tab = $('#trackTabProg'); if (tab) tab.textContent = (status === 'idle') ? '' : label;
  const bar = $('#trackBar'); if (bar) bar.style.width = `${status === 'ready' ? 100 : p}%`;
  const txt = $('#trackLoadTxt');
  if (txt) {
    if (status === 'ready') txt.textContent = '資源已就緒。請按下「開啟相機」（第一次需你親自點按，瀏覽器才會允許後鏡頭）。';
    else if (status === 'error') { /* keep error text */ }
    else txt.textContent = `載入追蹤資源… ${p}%`;
  }
  const start = $('#trackStart');
  if (start && status === 'ready') start.disabled = false;
  if (start && status === 'load') start.disabled = true;
}

async function openTrackCache() {
  try { return await caches.open(TRACK_CACHE); } catch { return null; }
}

async function cacheTrackUrl(url, onDelta) {
  const cache = await openTrackCache();
  if (cache) {
    try {
      const hit = await cache.match(url, { ignoreSearch: true });
      if (hit) {
        const buf = await hit.arrayBuffer();
        onDelta(buf.byteLength);
        return buf;
      }
    } catch {}
  }
  const res = await fetch(url);
  if (!res.ok) throw new Error('下載失敗 ' + String(url).split('/').pop());
  const reader = res.body?.getReader();
  if (!reader) {
    const buf = await res.arrayBuffer();
    onDelta(buf.byteLength);
    if (cache) try { await cache.put(url, new Response(buf, { headers: { 'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream' } })); } catch {}
    return buf;
  }
  const chunks = [];
  let n = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    chunks.push(value);
    n += value.byteLength;
    onDelta(value.byteLength);
  }
  const u8 = new Uint8Array(n);
  let o = 0;
  for (const c of chunks) { u8.set(c, o); o += c.byteLength; }
  if (cache) {
    try { await cache.put(url, new Response(u8, { headers: { 'Content-Type': res.headers.get('Content-Type') || 'application/octet-stream' } })); } catch {}
  }
  return u8.buffer;
}

function resetTrackHud() {
  document.body.classList.remove('searching', 'found');
  const intro = $('#trackIntro');
  if (intro && !state.trackSim) intro.classList.remove('hide');
  const start = $('#trackStart'); if (start) { start.disabled = !trackAssets; start.textContent = '開啟相機'; }
  const name = $('#trackLabel .name'); if (name) name.textContent = '整機';
  const spec = $('#trackLabel .spec'); if (spec) spec.textContent = '2U 機架式伺服器（示例）';
  const hudName = $('#trackHudToggle .hud-name'); if (hudName) hudName.textContent = '整機';
  setTrackHudOpen(false, { autoHide: false });
  if (trackAssets) updateTrackProgress(1, 'ready');
  else if (state.trackPreloadStatus === 'load') updateTrackProgress((state.trackPreloadPct || 0) / 100, 'load');
  syncTrackPips(0);
}

function syncTrackPips(index) {
  const wrap = $('#trackPips'); if (!wrap) return;
  const items = trackMod?.ITEMS || [];
  const n = items.length || 8;
  if (wrap.childElementCount !== n) {
    wrap.innerHTML = '';
    for (let i = 0; i < n; i++) {
      const d = document.createElement('button');
      d.type = 'button';
      d.className = 'pip' + (i === index ? ' on' : '');
      d.setAttribute('aria-label', items[i]?.zh || ('項目 ' + (i + 1)));
      d.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); setTrackItem(i); });
      wrap.appendChild(d);
    }
  } else {
    [...wrap.children].forEach((el, i) => el.classList.toggle('on', i === index));
  }
}

const TRACK_ITEMS = [
  { id: 'all', zh: '整機', spec: '2U 機架式伺服器（示例）', groups: null, hue: '#3aa0ff', glyph: 'server' },
  { id: 'board', zh: '主機板', spec: '伺服器主機板（示例）', groups: ['board'], hue: '#5ad0c8', glyph: 'board' },
  { id: 'cpu', zh: 'CPU', spec: '雙路 CPU 散熱器（示例）', groups: ['cpu'], hue: '#e8ba4a', glyph: 'cpu' },
  { id: 'ram', zh: '記憶體', spec: 'DDR5 RDIMM ×16（示例）', groups: ['ram'], hue: '#7cbcff', glyph: 'ram' },
  { id: 'drive', zh: '硬碟', spec: '3.5" 熱插拔硬碟 ×12（示例）', groups: ['drive'], hue: '#9ad36a', glyph: 'drive' },
  { id: 'psu', zh: '電源', spec: '備援電源供應器 ×2（示例）', groups: ['psu'], hue: '#ff9a3a', glyph: 'psu' },
  { id: 'fan', zh: '風扇', spec: '80mm 風扇牆 ×4（示例）', groups: ['fan'], hue: '#c9d6e6', glyph: 'fan' },
  { id: 'pcie', zh: '擴充卡', spec: 'PCIe 網路擴充卡（示例）', groups: ['pcie'], hue: '#d07cff', glyph: 'pcie' },
];
function trackItemList() { return trackMod?.ITEMS || TRACK_ITEMS; }

function setTrackItem(index) {
  const items = trackItemList();
  const n = items.length || 8;
  const i = ((index % n) + n) % n;
  state.trackItemIndex = i;
  if (state.trackSim && (state.trackSimKind === 'host' || !trackSession)) applyHostSimItem(i);
  else if (trackSession?.setIndex) trackSession.setIndex(i);
  else {
    const item = items[i];
    if (item) applyTrackItemLabel(item, i);
    else syncTrackPips(i);
  }
}

function applyTrackItemLabel(item, index) {
  if (!item) return;
  const name = $('#trackLabel .name'); if (name) name.textContent = item.zh;
  const spec = $('#trackLabel .spec'); if (spec) spec.textContent = item.spec || '';
  const hudName = $('#trackHudToggle .hud-name'); if (hudName) hudName.textContent = item.zh;
  state.trackItem = item.zh;
  if (index != null) syncTrackPips(index);
}

let trackHudTimer = null;
function setTrackHudOpen(open, { autoHide = true } = {}) {
  document.body.classList.toggle('track-hud-open', !!open);
  state.trackHudOpen = !!open;
  const tog = $('#trackHudToggle');
  if (tog) tog.setAttribute('aria-expanded', open ? 'true' : 'false');
  clearTimeout(trackHudTimer);
  if (open && autoHide) {
    trackHudTimer = setTimeout(() => setTrackHudOpen(false, { autoHide: false }), 2000);
  }
  layoutTrackSim();
}

function toggleTrackHud(e) {
  e?.preventDefault?.();
  e?.stopPropagation?.();
  setTrackHudOpen(!state.trackHudOpen);
}

function trackOverlayInsets() {
  const box = $('#trackAr');
  if (!box) return { top: 0, bottom: 0, width: innerWidth, height: innerHeight };
  const r = box.getBoundingClientRect();
  const vis = (el) => {
    if (!el) return false;
    const s = getComputedStyle(el);
    if (s.display === 'none' || s.visibility === 'hidden' || Number(s.opacity) === 0) return false;
    const b = el.getBoundingClientRect();
    return b.width > 0 && b.height > 0;
  };
  let top = 0, bottom = 0;
  for (const sel of ['#modeTabs', '#trackActions', '#trackStatus']) {
    const el = $(sel);
    if (!vis(el) || (sel === '#trackStatus' && el.classList.contains('faded'))) continue;
    top = Math.max(top, el.getBoundingClientRect().bottom - r.top);
  }
  const hud = $('#trackHud');
  if (vis(hud)) bottom = Math.max(bottom, r.bottom - hud.getBoundingClientRect().top);
  return { top, bottom, width: r.width, height: r.height };
}

function layoutTrackSim() {
  if (!state.trackSim) {
    try { camera.clearViewOffset(); } catch {}
    return;
  }
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  try { camera.clearViewOffset(); } catch {}
  camera.aspect = w / Math.max(h, 1);
  camera.updateProjectionMatrix();
  const { top, bottom } = trackOverlayInsets();
  state.trackClear = { top, bottom, width: w, height: h, clearH: Math.max(1, h - top - bottom) };
}

let simBgStream = null;
const glHomeParent = canvas.parentNode;
const glHomeNext = canvas.nextSibling;

function countSimMeshes() {
  let n = 0;
  (modelRoot || pivot).traverse((o) => { if (o.isMesh && o.visible) n++; });
  state.simMeshCount = n;
  return n;
}

function applyHostSimItem(index, { fromMenu = false } = {}) {
  const items = trackItemList();
  const n = items.length || 8;
  const i = ((index % n) + n) % n;
  const item = items[i] || { id: 'all', zh: '整機', spec: '', groups: null, hue: '#3aa0ff' };
  applyTrackItemLabel(item, i);
  if (arMenuHost && !fromMenu) arMenuHost.setIndex(i);
  const all = item.id === 'all' || !item.groups;
  const selected = new Set(item.groups || []);
  const byObj = new Map(parts.map((p) => [p.obj, p.group]));
  const groupOf = (o) => {
    let n = o;
    while (n) {
      if (byObj.has(n)) return byObj.get(n);
      const p = parts.find((pp) => pp.name && pp.name === n.name);
      if (p) return p.group;
      n = n.parent;
    }
    return null;
  };
  const root = modelRoot || pivot;
  root.traverse((o) => {
    if (!o.isMesh) return;
    const g = groupOf(o);
    const on = all || (g && selected.has(g));
    const ghost = !all && !on;
    for (const m of [].concat(o.material || [])) {
      if (!m) continue;
      if (m.userData._simInit == null) {
        m.userData._simInit = true;
        m.userData._simOp = m.opacity;
        m.userData._simDw = m.depthWrite;
        m.userData._simTr = m.transparent;
        m.userData._simEmi = m.emissiveIntensity || 0;
        if (m.emissive) m.userData._simEm = m.emissive.clone();
      }
      m.transparent = true;
      m.opacity = ghost ? 0.16 : (m.userData._simOp ?? 1);
      m.depthWrite = !ghost;
      if (m.emissive) {
        if (!ghost && !all && on) { m.emissive.set(item.hue); m.emissiveIntensity = 0.35; }
        else if (m.userData._simEm) { m.emissive.copy(m.userData._simEm); m.emissiveIntensity = m.userData._simEmi || 0; }
      }
    }
  });
  countSimMeshes();
}

function restoreSimMaterials() {
  const root = modelRoot || pivot;
  root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of [].concat(o.material || [])) {
      if (!m?.userData?._simInit) continue;
      m.opacity = m.userData._simOp;
      m.depthWrite = m.userData._simDw;
      m.transparent = m.userData._simTr;
      if (m.emissive && m.userData._simEm) {
        m.emissive.copy(m.userData._simEm);
        m.emissiveIntensity = m.userData._simEmi || 0;
      }
      delete m.userData._simInit;
    }
  });
}

function loadCardTexture() {
  if (cardTex) return Promise.resolve(cardTex);
  return new Promise((resolve) => {
    new THREE.TextureLoader().load(rel('track/card.png'), (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      cardTex = tex;
      resolve(tex);
    }, undefined, () => resolve(null));
  });
}

function attachHostGlForSim() {
  const box = $('#trackAr');
  if (!box) throw new Error('找不到追蹤畫面容器');
  box.appendChild(canvas);
  renderer.setClearColor(0x000000, 0);
  scene.background = null;
  if (!arMenuHost) {
    arMenuHost = createArMenu(THREE, {
      items: TRACK_ITEMS,
      showCard: true,
      cardMap: cardTex || null,
      radius: 0.50,
      disc: 0.068,
      cardW: 0.62,
      cardH: 0.42,
      modelY: 0.38,
      modelTilt: -0.2,
      onSelect: (item, i) => {
        state.trackItemIndex = i;
        applyHostSimItem(i, { fromMenu: true });
      },
    });
    scene.add(arMenuHost.root);
  }
  if (pivot.parent !== arMenuHost.modelSpin) {
    pivot.parent?.remove(pivot);
    arMenuHost.modelSpin.add(pivot);
  }
  pivot.rotation.set(0, 0.25, 0);
  pivot.scale.setScalar(0.23);
  pivot.visible = true;
  if (modelRoot) modelRoot.visible = true;
  if (shadow) shadow.visible = false;
  state.target = 0;
  state.explode = 0;
  setExplodePositions(0);
  state.simFrames = 0;
  state.arMenuOn = true;
  state.arIconCount = arMenuHost.icons.length;
  state.arHasBubble = !!arMenuHost.bubble;
  countSimMeshes();
}

function detachHostGlFromSim() {
  stopTrackHandLoop();
  try { camera.clearViewOffset(); } catch {}
  if (state._fovSaved) { camera.fov = state._fovSaved; state._fovSaved = 0; }
  restoreSimMaterials();
  if (arMenuHost) {
    try { arMenuHost.modelSpin.remove(pivot); } catch {}
    try { scene.remove(arMenuHost.root); } catch {}
    try { arMenuHost.dispose(); } catch {}
    arMenuHost = null;
  }
  state.arMenuOn = false;
  state.arIconCount = 0;
  state.arHasBubble = false;
  if (pivot.parent !== scene) scene.add(pivot);
  pivot.rotation.set(0, 0, 0);
  pivot.scale.setScalar(1);
  if (shadow) shadow.visible = true;
  if (glHomeNext && glHomeNext.parentNode === glHomeParent) glHomeParent.insertBefore(canvas, glHomeNext);
  else if (glHomeParent) glHomeParent.appendChild(canvas);
  const w = innerWidth, h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / Math.max(h, 1);
  camera.updateProjectionMatrix();
}

async function startSimBackgroundVideo() {
  const box = $('#trackAr');
  let v = $('#trackBgVideo');
  if (!v) {
    v = document.createElement('video');
    v.id = 'trackBgVideo';
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.setAttribute('muted', '');
    v.setAttribute('autoplay', '');
    v.muted = true;
    v.playsInline = true;
    v.autoplay = true;
    box.appendChild(v);
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { ideal: 'environment' } },
      audio: false,
    });
    simBgStream = stream;
    v.srcObject = stream;
    try { await v.play(); } catch {}
    state.trackCamAllowed = true;
    state.camPermitted = true;
    return true;
  } catch (e) {
    console.warn(e);
    v.srcObject = null;
    return false;
  }
}

function stopSimBackgroundVideo() {
  try { simBgStream?.getTracks?.().forEach((t) => t.stop()); } catch {}
  simBgStream = null;
  const v = $('#trackBgVideo');
  if (v) {
    try { v.srcObject = null; } catch {}
    v.remove();
  }
}

function cleanTrackArExtras() {
  const box = $('#trackAr');
  if (!box) return;
  [...box.children].forEach((el) => {
    if (el.id === 'gl' || el.id === 'trackBgVideo') return;
    if (el.tagName === 'CANVAS' || el.tagName === 'VIDEO') el.remove();
  });
}

function unbindSimPointer() { try { simPtrUnbind?.(); } catch {} simPtrUnbind = null; }

function bindSimPointer(el, target) {
  unbindSimPointer();
  if (!el || !target) return;
  const pts = new Map();
  let mode = 'none', lastX = 0, lastY = 0, lastDist = 0, downX = 0, downY = 0, downT = 0, rotated = false, swallowClick = false;
  const onDown = (e) => {
    if (e.button && e.button !== 0) return;
    try { el.setPointerCapture(e.pointerId); } catch {}
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size >= 2) {
      mode = 'pinch';
      const arr = [...pts.values()];
      lastDist = Math.hypot(arr[0].x - arr[1].x, arr[0].y - arr[1].y);
    } else {
      mode = 'pending';
      lastX = downX = e.clientX; lastY = downY = e.clientY; downT = performance.now();
      rotated = false;
    }
  };
  const onMove = (e) => {
    if (!pts.has(e.pointerId)) return;
    pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pts.size >= 2) {
      const arr = [...pts.values()];
      const d = Math.hypot(arr[0].x - arr[1].x, arr[0].y - arr[1].y);
      if (lastDist > 0 && d > 0) {
        const s = Math.min(2.6, Math.max(0.45, target.scale.x * (d / lastDist)));
        target.scale.setScalar(s);
      }
      lastDist = d;
      mode = 'pinch';
      rotated = true;
      return;
    }
    const dx = e.clientX - lastX, dy = e.clientY - lastY;
    lastX = e.clientX; lastY = e.clientY;
    if (mode === 'pending') {
      if (Math.hypot(e.clientX - downX, e.clientY - downY) < 10) return;
      mode = 'rotate';
    }
    if (mode === 'rotate') {
      target.rotation.y += dx * 0.008;
      target.rotation.x = Math.max(-1.15, Math.min(1.15, target.rotation.x + dy * 0.006));
      rotated = true;
    }
  };
  const onUp = (e) => {
    pts.delete(e.pointerId);
    try { el.releasePointerCapture(e.pointerId); } catch {}
    if (pts.size < 2) lastDist = 0;
    if (pts.size === 0) {
      if (!rotated && mode !== 'pinch') {
        const dx = e.clientX - downX, dy = e.clientY - downY, dt = performance.now() - downT;
        if (dt < 420 && Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.2) {
          swallowClick = true;
          setTrackItem((state.trackItemIndex || 0) + (dx < 0 ? 1 : -1));
        }
      }
      mode = 'none';
    }
  };
  const onClick = (e) => {
    if (!swallowClick) return;
    swallowClick = false;
    e.preventDefault();
    e.stopPropagation();
  };
  el.addEventListener('pointerdown', onDown);
  el.addEventListener('pointermove', onMove);
  el.addEventListener('pointerup', onUp);
  el.addEventListener('pointercancel', onUp);
  el.addEventListener('click', onClick, true);
  el.style.touchAction = 'none';
  simPtrUnbind = () => {
    el.removeEventListener('pointerdown', onDown);
    el.removeEventListener('pointermove', onMove);
    el.removeEventListener('pointerup', onUp);
    el.removeEventListener('pointercancel', onUp);
    el.removeEventListener('click', onClick, true);
    simPtrUnbind = null;
  };
}

function detachArSim() {
  if (!trackSim || trackSim.kind !== 'ar') return;
  const { hold, root, homeParent, camera, scene } = trackSim;
  try {
    if (root && hold && root.parent === hold) hold.remove(root);
    if (root && homeParent && root.parent !== homeParent) homeParent.add(root);
  } catch (e) { console.warn(e); }
  try { if (hold?.parent) hold.parent.remove(hold); } catch {}
  try { camera?.remove?.(hold); } catch {}
  try { scene?.remove?.(hold); } catch {}
}

function disposeFallbackSim() {
  if (!trackSim || trackSim.kind !== 'fallback') return;
  try { if (trackSim.raf) cancelAnimationFrame(trackSim.raf); } catch {}
  try { trackSim.ro?.disconnect(); } catch {}
  try { trackSim.renderer?.dispose(); } catch {}
  try { trackSim.canvas?.remove(); } catch {}
}

async function stopCardSimulate({ keepSession = true, skipHud = false } = {}) {
  unbindSimPointer();
  detachHostGlFromSim();
  stopSimBackgroundVideo();
  trackSim = null;
  const wasSim = state.trackSim;
  state.trackSim = false;
  state.trackSimKind = null;
  document.body.classList.remove('track-sim');
  setTrackHudOpen(false, { autoHide: false });
  const btn = $('#trackSimBtn');
  if (btn) { btn.disabled = false; btn.textContent = '模擬卡片'; }
  if (state.appMode === 'track') {
    try { renderer.setAnimationLoop(null); } catch {}
  }
  if (skipHud) return;
  const hint = $('#trackLabel .hint');
  if (hint) hint.textContent = '點圖示或按 ‹ › 也可切換';
  if (keepSession && wasSim && state.appMode === 'track') {
    document.body.classList.add('searching');
    document.body.classList.remove('found');
    setTrackStatus('已結束模擬。請將後鏡頭對準卡片，或再按「模擬卡片」。');
    if (state.trackCamAllowed || state.camPermitted) {
      try { await startTrackSession(); } catch {}
    }
  } else {
    resetTrackHud();
    setTrackStatus(trackAssets ? '資源已就緒。可開啟相機，或按「模擬卡片」直接看模型。' : '');
  }
}

async function startCardSimulate() {
  if (state.trackSim) return;
  if (trackBusy) {
    const t0 = performance.now();
    while (trackBusy && performance.now() - t0 < 8000) await new Promise((r) => setTimeout(r, 50));
  }
  const btn = $('#trackSimBtn');
  if (btn) { btn.disabled = true; btn.textContent = '載入中…'; }
  try {
    setTrackStatus('正在載入模擬模型…');
    if (!modelRoot) throw new Error('主模型尚未就緒');
    // 停掉 MindAR，避免 iPhone 第二個 WebGL 把模型畫成空白
    if (trackSession) {
      await stopTrackSession({ resetHud: false });
      if (isIOS) await new Promise((r) => setTimeout(r, 350));
    }
    cleanTrackArExtras();
    document.body.classList.add('track-sim', 'found', 'mode-track');
    document.body.classList.remove('searching', 'track-error');
    $('#trackIntro')?.classList.add('hide');
    const hasCam = await startSimBackgroundVideo();
    await loadCardTexture();
    state._fovSaved = camera.fov;
    camera.fov = 46;
    camera.updateProjectionMatrix();
    attachHostGlForSim();
    state.trackSim = true;
    state.trackSimKind = 'host';
    trackSim = { kind: 'host' };
    state.tYaw = 0; state.tPitch = 1.05; state.tZoom = 1;
    state.yaw = 0; state.pitch = 1.05; state.zoom = 1;
    applyHostSimItem(state.trackItemIndex || 0);
    if (arMenuHost) arMenuHost.setIndex(state.trackItemIndex || 0, { instant: true, silent: true });
    renderer.setAnimationLoop(frame);
    if (btn) { btn.disabled = false; btn.textContent = '結束模擬'; }
    const hint = $('#trackLabel .hint');
    if (hint) hint.textContent = '食指向左／右滑切換，或將食指停在圖示上約 0.4 秒';
    setTrackHudOpen(false, { autoHide: false });
    requestAnimationFrame(() => { layoutTrackSim(); countSimMeshes(); });
    setTrackStatus('模擬卡片：環形選單已在 AR 場景中。' + (hasCam ? '可用食指滑動或停留選取（後鏡頭）。' : '無相機時請點圖示或 ‹ ›。'));
    ensureTrackHands();
  } catch (e) {
    console.warn(e);
    try { detachHostGlFromSim(); } catch {}
    stopSimBackgroundVideo();
    trackSim = null;
    state.trackSim = false;
    state.trackSimKind = null;
    document.body.classList.remove('track-sim');
    const why = '模擬卡片失敗：' + (e?.message || e);
    setTrackStatus(why, { error: true });
    toast(why);
    if (btn) { btn.disabled = false; btn.textContent = '模擬卡片'; }
  }
}

function toggleCardSimulate(e) {
  e?.preventDefault?.();
  e?.stopPropagation?.();
  if (state.trackSim) stopCardSimulate({ keepSession: true });
  else startCardSimulate();
}

async function loadTrackModule() {
  if (trackMod) return trackMod;
  try {
    const link = document.createElement('link');
    link.rel = 'modulepreload';
    link.href = rel('track/track-mode.bundle.js');
    if (!document.head.querySelector('link[rel="modulepreload"][href*="track-mode.bundle"]')) document.head.appendChild(link);
  } catch {}
  trackMod = await import(rel('track/track-mode.bundle.js'));
  return trackMod;
}

async function preloadTrack() {
  if (trackAssets) { updateTrackProgress(1, 'ready'); state.trackReady = true; return trackAssets; }
  if (trackPreloadP) return trackPreloadP;
  const t0 = performance.now();
  state.trackPreloadStart = t0;
  updateTrackProgress(0, 'load');
  trackPreloadP = (async () => {
    try {
      const weights = TRACK_FILES;
      const totals = weights.map((f) => f.bytes);
      const loaded = weights.map(() => 0);
      const tick = () => {
        let p = 0;
        weights.forEach((f, i) => { p += f.w * Math.min(1, loaded[i] / (totals[i] || 1)); });
        updateTrackProgress(p, 'load');
      };
      tick();
      const bufs = await Promise.all(weights.map(async (f, i) => {
        const url = f.url();
        const buf = await cacheTrackUrl(url, (d) => { loaded[i] += d; tick(); });
        return { url, buf };
      }));
      const by = Object.fromEntries(bufs.map((b) => [b.url, b.buf]));
      await loadTrackModule();
      if (!trackAssets) {
        const mindUrl = rel('track/targets.mind');
        const glbUrl = rel('models/server.glb');
        let parts;
        try { parts = JSON.parse(new TextDecoder().decode(by[rel('models/parts.json')])); } catch { parts = null; }
        trackAssets = await trackMod.preload({
          baseUrl: rel('./'),
          imageTargetSrc: by[mindUrl] || mindUrl,
          model: by[glbUrl] || glbUrl,
          parts,
          onProgress: (p) => updateTrackProgress(0.9 + (p || 0) * 0.1, 'load'),
        });
      }
      state.trackReady = true;
      state.trackPreloadMs = Math.round(performance.now() - t0);
      updateTrackProgress(1, 'ready');
      return trackAssets;
    } catch (e) {
      console.warn(e);
      trackPreloadP = null;
      updateTrackProgress(state.trackPreloadPct / 100 || 0, 'error');
      const txt = $('#trackLoadTxt');
      if (txt) txt.textContent = '資源載入失敗：' + (e.message || e);
      toast('圖像追蹤資源載入失敗：' + (e.message || e));
      throw e;
    }
  })();
  return trackPreloadP;
}

function scheduleTrackWarmup() {
  const start = () => {
    preloadTrack().catch((e) => console.warn('預載入圖像追蹤失敗', e));
  };
  const afterMp = () => {
    if ('requestIdleCallback' in window) requestIdleCallback(() => start(), { timeout: 2500 });
    else setTimeout(start, 400);
  };
  if (state.mpPrefetchDone) afterMp();
  else Promise.resolve(mpPrefetchP || prefetchMpAssets(false)).then(afterMp, afterMp);
}

let trackStatusTimer = null;
function setTrackStatus(msg, { error = false, sticky = false } = {}) {
  const el = $('#trackStatus');
  if (el) {
    el.textContent = msg || '';
    el.classList.toggle('err', !!error);
    el.classList.toggle('faded', !msg);
  }
  state.trackStatus = msg || '';
  state.trackStatusError = !!error;
  clearTimeout(trackStatusTimer);
  if (msg && !error && !sticky) {
    trackStatusTimer = setTimeout(() => {
      const s = $('#trackStatus');
      if (s && !s.classList.contains('err')) s.classList.add('faded');
      layoutTrackSim();
    }, 2000);
  }
  layoutTrackSim();
}

function explainTrackError(err) {
  const name = err?.name || '';
  const msg = String(err?.message || err || '').trim();
  if (name === 'NotAllowedError' || /permission|denied|not allowed|權限/i.test(msg)) {
    return '無法開啟後鏡頭：權限被拒。請到設定允許 Safari 使用相機，再按「開啟相機」。';
  }
  if (name === 'NotReadableError' || name === 'AbortError' || /busy|in use|readable|device/i.test(msg)) {
    return '無法開啟後鏡頭：相機忙碌（前鏡頭可能尚未釋放）。請再按「開啟相機」。';
  }
  if (name === 'NotFoundError' || /not found|no device/i.test(msg)) {
    return '找不到後鏡頭。';
  }
  if (name === 'SecurityError' || /secure|https/i.test(msg)) {
    return '此頁必須在 HTTPS 下才能開相機。';
  }
  if (name === 'NotSupportedError') return '這個瀏覽器不支援後鏡頭。';
  if (msg && msg !== 'undefined' && msg !== '[object Object]') {
    return '無法開啟後鏡頭：' + msg;
  }
  return '無法開啟後鏡頭（權限被拒、相機忙碌，或畫面無法播放）。請再按「開啟相機」。';
}

function prepareTrackMedia(root) {
  const videos = [...(root?.querySelectorAll?.('video') || [])];
  for (const v of videos) {
    v.muted = true;
    v.defaultMuted = true;
    v.autoplay = true;
    v.playsInline = true;
    v.setAttribute('playsinline', '');
    v.setAttribute('webkit-playsinline', '');
    v.setAttribute('muted', '');
    v.setAttribute('autoplay', '');
    v.style.zIndex = '0';
    v.style.objectFit = 'cover';
    v.style.opacity = '1';
    v.style.visibility = 'visible';
  }
  return videos[0] || null;
}

function watchTrackMedia(root) {
  prepareTrackMedia(root);
  const mo = new MutationObserver(() => prepareTrackMedia(root));
  mo.observe(root, { childList: true, subtree: true });
  return mo;
}

async function ensureTrackVideoLive(session, timeout = 2500) {
  const mind = session?._internal?.mindarThree;
  const v = mind?.video || prepareTrackMedia($('#trackAr'));
  if (!v) throw Object.assign(new Error('MindAR 沒有建立鏡頭畫面'), { name: 'TrackVideoMissing' });
  prepareTrackMedia($('#trackAr'));
  try { await v.play(); } catch (e) {
    const err = new Error('畫面尚未播放（iPhone 需點「開啟相機」）');
    err.name = 'TrackVideoNotPlaying';
    err.cause = e;
    throw err;
  }
  const t0 = performance.now();
  while (performance.now() - t0 < timeout) {
    if (v.videoWidth > 0 && v.readyState >= 2 && !v.paused) return v;
    await new Promise((r) => setTimeout(r, 80));
    try { await v.play(); } catch {}
  }
  if (v.paused) {
    const err = new Error('畫面尚未播放（video 被暫停）');
    err.name = 'TrackVideoNotPlaying';
    throw err;
  }
  if (!v.videoWidth) {
    const err = new Error('鏡頭畫面尺寸為 0');
    err.name = 'TrackVideoSizeZero';
    throw err;
  }
  return v;
}

function showTrackCameraPrompt() {
  if (state.trackSim) return;
  document.body.classList.add('track-error');
  document.body.classList.remove('searching', 'found');
  $('#trackIntro')?.classList.remove('hide');
  const start = $('#trackStart');
  if (start) { start.disabled = false; start.textContent = '開啟相機'; }
}

function clearTrackCameraPrompt() {
  document.body.classList.remove('track-error');
}

async function startTrackSession() {
  if (trackBusy || state.trackSim) return;
  const start = $('#trackStart');
  const txt = $('#trackLoadTxt');
  let watch = null;
  try {
    trackBusy = true;
    clearTrackCameraPrompt();
    setTrackStatus('正在開啟後鏡頭…');
    if (start) { start.disabled = true; start.textContent = '啟動中…'; }
    await releaseCameras({ keepStill: false });
    const box = $('#trackAr');
    if (!box) throw new Error('找不到追蹤畫面容器');
    // 等分頁版面算出尺寸，避免 MindAR 把畫面排成 0 高
    box.style.display = 'block';
    await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));
    if (box.clientWidth < 2 || box.clientHeight < 2) {
      throw new Error('追蹤畫面容器尚未展開（' + box.clientWidth + '×' + box.clientHeight + '）');
    }
    await loadTrackModule();
    if (!trackAssets) await preloadTrack();
    if (!trackAssets) throw new Error('資源尚未就緒');
    watch = watchTrackMedia(box);
    try {
      trackSession = await trackMod.start(box, {
        imageTargetSrc: trackAssets.mindBuf,
        model: trackAssets.glbBuf,
        parts: trackAssets.parts,
        cycleOnTap: true,
        onSelect: (item, index) => {
          applyTrackItemLabel(item, index);
        },
        onFound: () => {
          if (state.trackSim) return;
          document.body.classList.add('found');
          document.body.classList.remove('searching');
          state.trackFound = true;
          setTrackStatus('已找到卡片。食指向左／右滑切換，或將食指停在圖示上選取。');
          setTrackHudOpen(false, { autoHide: false });
          ensureTrackHands();
        },
        onLost: () => {
          if (state.trackSim) return;
          document.body.classList.remove('found');
          document.body.classList.add('searching');
          state.trackFound = false;
          setTrackStatus('請將後鏡頭對準卡片');
        },
      });
    } catch (e) {
      // MindAR 有時 reject() 沒帶 Error
      throw (e && (e.message || e.name)) ? e : Object.assign(new Error('MindAR 啟動失敗'), { name: 'TrackStartFailed', cause: e });
    }
    const live = await ensureTrackVideoLive(trackSession);
    state.trackVideoSize = { w: live.videoWidth, h: live.videoHeight };
    $('#trackIntro')?.classList.add('hide');
    document.body.classList.add('searching');
    document.body.classList.remove('found', 'track-error');
    state.trackOn = true;
    state.camPermitted = true;
    state.trackCamAllowed = true;
    syncTrackPips(0);
    setTrackStatus('後鏡頭已開啟。請對準卡片；選單會圍在卡片周圍，可用食指滑動切換。');
    ensureTrackHands();
  } catch (e) {
    console.warn(e);
    const why = explainTrackError(e);
    setTrackStatus(why, { error: true });
    toast(why);
    if (txt) txt.textContent = why;
    if (start) { start.disabled = false; start.textContent = '開啟相機'; }
    showTrackCameraPrompt();
    state.trackOn = false;
    try { await stopTrackSession(); } catch {}
    $('#trackIntro')?.classList.remove('hide');
  } finally {
    try { watch?.disconnect(); } catch {}
    // 保持最後一次對 video 的屬性修正
    prepareTrackMedia($('#trackAr'));
    trackBusy = false;
  }
}

async function stopTrackSession({ resetHud = true } = {}) {
  stopTrackHandLoop();
  if (resetHud && (state.trackSim || trackSim)) {
    await stopCardSimulate({ keepSession: false, skipHud: true });
  }
  const sess = trackSession;
  trackSession = null;
  state.trackOn = false;
  state.trackFound = false;
  if (resetHud) document.body.classList.remove('searching', 'found', 'track-sim');
  else document.body.classList.remove('searching', 'found');
  try { if (sess) await sess.stop(); }
  catch (e) { try { await trackMod?.stop?.(); } catch (e2) { console.warn(e2); } }
  cleanTrackArExtras();
  if (resetHud) resetTrackHud();
}

async function enterTrackMode() {
  if (state.camOn) state.wantCam = true;
  await releaseCameras({ keepStill: false });
  try { renderer.setAnimationLoop(null); } catch {}
  if (state.soundOn && snd.unlocked) fadeEqPower(snd.gain, Math.min(0.04, QUIET_GAIN), 0.4);
  const tEl = $('#docTitle'); if (tEl) tEl.textContent = '圖像追蹤';
  const n = $('#deviceName'); if (n) n.textContent = '對準卡片，用手勢切換零件';
  resetTrackHud();
  setTrackStatus(trackAssets ? '資源已就緒。正在準備後鏡頭…' : '正在預載追蹤資源…');
  const tEnter = performance.now();
  await preloadTrack().catch(() => {});
  state.trackEnterToReadyMs = Math.round(performance.now() - tEnter);
  // User may have already started 模擬卡片 while preload was still running.
  if (state.trackSim || state.appMode !== 'track') return;
  const canAuto = !!(trackAssets && (state.camPermitted || state.trackCamAllowed) && !trackSession && !trackBusy);
  if (canAuto) {
    await startTrackSession();
    if (!state.trackOn) {
      setTrackStatus(state.trackStatus || '自動開啟後鏡頭失敗，請按「開啟相機」。', { error: true });
      showTrackCameraPrompt();
    }
  } else {
    if (state.trackSim) return;
    setTrackStatus('資源已預載。請按「開啟相機」以開啟後鏡頭（iPhone 需你親自點按一次）。');
    showTrackCameraPrompt();
    document.body.classList.remove('track-error'); // 正常提示，用 intro 大按鈕即可
    $('#trackIntro')?.classList.remove('hide');
  }
}

async function leaveTrackMode() {
  await stopTrackSession();
  try { renderer.setAnimationLoop(frame); } catch {}
}

async function setAppMode(mode, { fromUrl = false } = {}) {
  if (mode !== 'demo' && mode !== 'assembly' && mode !== 'track') mode = 'demo';
  const prev = state.appMode || 'demo';
  const already = prev === mode && document.body.classList.contains('mode-' + mode)
    && (mode !== 'assembly' || assembly?.state.active)
    && (mode !== 'track' || !!(trackAssets || state.trackOn));
  if (already) {
    updateModeTabs();
    if (!fromUrl) syncModeUrl();
    return;
  }
  state.appMode = mode;
  document.body.classList.remove('mode-demo', 'mode-assembly', 'mode-track');
  document.body.classList.add('mode-' + mode);
  updateModeTabs();
  if (prev === 'track' && mode !== 'track') await leaveTrackMode();
  if (prev === 'assembly' && mode !== 'assembly') assembly?.setActive(false);
  if (mode === 'assembly') {
    state.target = 0; state.explode = 0;
    setExplodePositions(0);
    assembly?.setActive(true);
    if (state.soundOn && snd.unlocked) fadeEqPower(snd.gain, Math.min(0.04, QUIET_GAIN), 0.4);
    if (prev === 'track' && state.wantCam) { try { await acquireCameras(); } catch {} }
  } else if (mode === 'track') {
    await enterTrackMode();
  } else {
    const tEl = $('#docTitle'); if (tEl) tEl.textContent = DEMO_TITLE;
    const n = $('#deviceName'); if (n) n.textContent = DEMO_SUB;
    if (state.soundOn && snd.unlocked) startMusicQuietOrFull();
    if (prev === 'track' && state.wantCam) { try { await acquireCameras(); } catch {} }
  }
  setStatus(state.camOn ? 'none' : (state.gesture === 'nocam' ? 'nocam' : state.gesture || 'none'));
  if (!fromUrl) syncModeUrl();
}

function initAssembly() {
  if (assembly) return assembly;
  assembly = createAssembly({
    parts, pivot, camera, renderer, canvas, toast, rel,
    onScanStart: async () => { if (state.camOn) state.wantCam = true; await releaseCameras({ keepStill: true }); },
    onScanEnd: () => { if (state.wantCam && state.appMode !== 'track') acquireCameras(); },
  });
  state.assembly = assembly;
  $('#btnARPrev')?.addEventListener('click', (e) => { e.preventDefault(); assembly.prev(); });
  $('#btnARNext')?.addEventListener('click', (e) => { e.preventDefault(); assembly.next(); });
  $('#btnARReplay')?.addEventListener('click', (e) => { e.preventDefault(); assembly.replay(); });
  return assembly;
}

document.querySelectorAll('#modeTabs [data-app-mode]').forEach((b) => {
  b.addEventListener('click', () => setAppMode(b.dataset.appMode));
});
$('#trackStart')?.addEventListener('click', () => startTrackSession());
$('#trackRetry')?.addEventListener('click', () => startTrackSession());
$('#trackSimBtn')?.addEventListener('click', toggleCardSimulate);
$('#trackSimIntro')?.addEventListener('click', toggleCardSimulate);
$('#trackPrev')?.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); setTrackItem((state.trackItemIndex || 0) - 1); });
$('#trackNext')?.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); setTrackItem((state.trackItemIndex || 0) + 1); });
$('#trackHudToggle')?.addEventListener('click', toggleTrackHud);
addEventListener('resize', () => layoutTrackSim());
const cardHref = rel('track/card.html');
document.querySelectorAll('a[href="track/card.html"], #trackCardLink, #btnCard').forEach((a) => { a.href = cardHref; });


state.setAppMode = setAppMode;
state.initLandmarker = (opts) => initLandmarker(opts || { overlay: false });
state.errText = errText;
state.wasmBase = wasmBase;

state.releaseCameras = releaseCameras;
state.acquireCameras = acquireCameras;
state.defaultCamMode = defaultCamMode;
state.stillIsNonBlack = stillIsNonBlack;
state.startTrack = startTrackSession;
state.stopTrack = stopTrackSession;
state.preloadTrack = preloadTrack;
state.startCardSimulate = startCardSimulate;
state.stopCardSimulate = stopCardSimulate;
state.setTrackItem = setTrackItem;
state.setTrackHudOpen = setTrackHudOpen;
state.projectTrackIcons = () => {
  if (!arMenuHost?.projectIcons) return [];
  const cam = (trackSession?._internal?.camera) || camera;
  return arMenuHost.projectIcons(cam, innerWidth, innerHeight);
};
state.layoutTrackSim = layoutTrackSim;
state.fpsMeter = fpsMeter;

// 啟動
const bootQs = new URLSearchParams(location.search);
if (bootQs.get('debug') === '1') document.body.classList.add('debug');
const initialMode = (bootQs.get('mode') === 'assembly' || bootQs.get('mode') === 'track') ? bootQs.get('mode') : 'demo';
document.body.classList.add('mode-' + initialMode);
state.appMode = initialMode === 'track' ? 'demo' : initialMode; // 模型就緒後再正式切到 track
updateModeTabs();

loadModel().then(async () => {
  $('#loading').classList.add('hide');
  state.modelReady = true;
  initAssembly();
  await setAppMode(initialMode, { fromUrl: true });
  if (initialMode === 'assembly') assembly.loadAnnParam();
  if (initialMode !== 'track') renderer.setAnimationLoop(frame);
  registerMpWorker();
  scheduleMpWarmup();
  if (initialMode !== 'track') scheduleTrackWarmup();
}).catch((e) => { console.error(e); $('#loadtxt').textContent = '模型載入失敗：' + e.message; });
// 測試用：?auto=cam 一律單鏡頭；?auto=dual / ?auto=touch 仍可跳過開始畫面
const auto = bootQs.get('auto');
if (auto === 'cam') { $('#intro').classList.add('hide'); unlockAudio(); enableGestures('single'); }
else if (auto === 'dual') $('#startDual').click();
else if (auto === 'touch') $('#startTouch').click();
