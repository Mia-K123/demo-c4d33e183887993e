import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';
import { createGestureMachine, classifyPose } from './gestures.mjs';

const $ = (s) => document.querySelector(s);
const rel = (p) => new URL(p, document.baseURI).href;   // 所有路徑相對於本頁，可放在任何子路徑
const isTouch = matchMedia('(pointer: coarse)').matches;
const PORTRAIT0 = innerHeight > innerWidth; const YAW0 = PORTRAIT0 ? -0.42 : -0.66, PITCH0 = PORTRAIT0 ? 0.5 : 0.36;
const state = { explode: 0, target: 0, yaw: YAW0, pitch: PITCH0, zoom: 1, tYaw: YAW0, tPitch: PITCH0, tZoom: 1,
  facing: 'user', stream: null, hand: null, gesture: '', camOn: false };
window.__demo = state;

// ---------- three.js ----------
const canvas = $('#gl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, isTouch ? 1.5 : 1.75));
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.xr.enabled = true;
renderer.xr.setReferenceSpaceType('local-floor');
const scene = new THREE.Scene();
const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
scene.environmentIntensity = 0.75;
// 攝影棚 HDRI（載入完成前先用程式產生的 RoomEnvironment）
new HDRLoader().load(rel('env/studio_small_09_1k.hdr'), (t) => { t.mapping = THREE.EquirectangularReflectionMapping; scene.environment = pmrem.fromEquirectangular(t).texture; scene.environmentIntensity = 1.0; t.dispose(); });
const key = new THREE.DirectionalLight(0xffffff, 1.6); key.position.set(2, 4, 3); scene.add(key);
const rim = new THREE.DirectionalLight(0x9fc4ff, 1.2); rim.position.set(-3, 2, -3); scene.add(rim);
const camera = new THREE.PerspectiveCamera(32, 1, 0.01, 100);
const pivot = new THREE.Group(); scene.add(pivot);

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
    const p = { obj: o, base: o.position.clone(), off: new THREE.Vector3(...m.offset), group: m.group, delay: ORDER[m.group] ?? 0 };
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
  // 展開維持原本速度；收合加快，約 0.4 秒合上，對準音樂淡出與撞擊
  const closeK = state.target ? 3.6 : 7.5;
  state.explode += (state.target - state.explode) * (1 - Math.exp(-dt * closeK));
  if (Math.abs(state.target - state.explode) < 0.001) state.explode = state.target;
  state.yaw += (state.tYaw - state.yaw) * sp * 2; state.pitch += (state.tPitch - state.pitch) * sp * 2;
  state.zoom += (state.tZoom - state.zoom) * sp * 2;
  setExplodePositions(state.explode);

  if (renderer.xr.isPresenting) {
    updateAR(xrFrame);
  } else {
    pivot.rotation.y = state.yaw;
    const fovV = THREE.MathUtils.degToRad(camera.fov / 2), fovH = Math.atan(Math.tan(fovV) * camera.aspect);
    const e = ease(state.explode), portrait = camera.aspect < 1;
    const rad = frameInfo.r0 + (frameInfo.r1 - frameInfo.r0) * e, cy = frameInfo.c0 + (frameInfo.c1 - frameInfo.c0) * e;
    const dist = rad / Math.sin(Math.min(fovV, fovH)) * (portrait ? 1.0 - 0.2 * e : 0.88) / state.zoom;
    camera.position.set(0, cy + Math.sin(state.pitch) * dist, Math.cos(state.pitch) * dist);
    camera.lookAt(0, cy - rad * (portrait ? 0.06 : 0.04), 0);
    updateLabels();
    if (state.camOn) detect(now);
  }
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

function startMusicQuietOrFull() {
  armMusic();
  if (snd.ctx && snd.ctx.state !== 'running') snd.ctx.resume();
  music.loop = true;
  const to = state.target ? FULL_GAIN : QUIET_GAIN;
  fadeEqPower(snd.gain, to, 0.35);
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
const up = (e) => { if (ptrs.size === 1 && !moved) { const t = performance.now(); if (t - lastTap < 320) setTarget(state.target ? 0 : 1); lastTap = t; } ptrs.delete(e.pointerId); };
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
const ua = navigator.userAgent;
const isIOS = /iP(hone|ad|od)/.test(ua) || (ua.includes('Mac') && navigator.maxTouchPoints > 1);
const isAndroid = /Android/.test(ua);
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
const MP_CACHE = 'gesture-demo-mp-v1';
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
      const bufs = await prefetchMpAssets(!quiet);
      if (!quiet) setMpProgress('正在啟動手勢辨識（GPU）…', true);
      else setMpProgress('正在啟動手勢辨識…', false);
      const fileset = await FilesetResolver.forVisionTasks(rel('libs/mediapipe/wasm'));
      const mk = (delegate) => ({
        baseOptions: { modelAssetBuffer: bufs.task, delegate },
        runningMode: 'VIDEO', numHands: 1,
        minHandDetectionConfidence: 0.5, minHandPresenceConfidence: 0.5, minTrackingConfidence: 0.5,
      });
      try {
        landmarker = await HandLandmarker.createFromOptions(fileset, mk('GPU'));
        state.delegate = 'GPU';
      } catch (e) {
        console.warn('GPU delegate failed, using CPU', e);
        setMpProgress('GPU 無法使用，改用 CPU…', !quiet);
        landmarker = await HandLandmarker.createFromOptions(fileset, mk('CPU'));
        state.delegate = 'CPU';
      }
      state.mpReady = true;
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
try { if (localStorage.getItem(CAM_KEY) === 'environment') state.facing = 'environment'; } catch {}
try { if (localStorage.getItem(CAM_MODE_KEY) === 'dual') state.camMode = 'dual'; } catch {}
if (!state.camMode) state.camMode = 'single';
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
  return tryGet({ ...base, facingMode: { ideal: facing } });
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
  try { await el.play(); } catch {}
  if (el.readyState >= 2) return;
  try { await waitEvent(el, 'loadeddata', 800); } catch {}
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

function captureStill(el) {
  const w = el.videoWidth || 1280, h = el.videoHeight || 720;
  bgStill.width = w; bgStill.height = h;
  const ctx = bgStill.getContext('2d');
  ctx.drawImage(el, 0, 0, w, h);
  state.stillSize = { w, h };
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
  return tryGet({ ...base, facingMode: { ideal: state.facing } });
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
    await new Promise((r) => setTimeout(r, 80));
    if (video.videoWidth) captureStill(video);
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
    await startDualStill(null);
    return;
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

function stopCamera() {
  stopStream(state.stream);
  stopStream(state.rearStream);
  state.stream = null;
  state.rearStream = null;
  state.camOn = false;
  state.dualKind = null;
  if (video.srcObject) video.srcObject = null;
  if (videoFront?.srcObject) videoFront.srcObject = null;
  document.body.classList.remove('cam', 'dual', 'dual-still');
  closeModeSheet();
  updateCamUI();
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
    setStatus('none');
  } catch (e) {
    console.warn(e);
    $('#loading').classList.add('hide');
    toast('無法開啟相機：' + (e.message || e.name) + '。已切換成觸控模式');
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
$('#startCam').onclick = () => { $('#intro').classList.add('hide'); unlockAudio(); enableGestures('single'); };
$('#startDual').onclick = () => { $('#intro').classList.add('hide'); unlockAudio(); enableGestures('dual'); };
$('#startTouch').onclick = () => { allowMusic(); $('#intro').classList.add('hide'); unlockAudio(); setStatus('nocam'); };

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

function detect(now) {
  if (ar.session || renderer.xr.isPresenting) return; // AR 進行中暫停手勢相機推論
  const src = trackVideo || video;
  if (!landmarker || !src || src.readyState < 2 || now - lastDetect < 33) return;
  if (src.currentTime === lastVideoTime) return; lastVideoTime = src.currentTime; lastDetect = now;
  let res; try { res = landmarker.detectForVideo(src, now); } catch (e) { console.warn(e); return; }
  const lm = res.landmarks?.[0];
  drawHand(lm);
  const mirrored = state.camMode === 'dual' || state.facing === 'user';
  const r = gesture.update({
    now, landmarks: lm || null, mirrored,
    ignore: now < ignoreGesturesUntil,
    zoom: state.tZoom, clampZ,
  });
  state.tYaw += r.dYaw;
  state.tPitch = clampP(state.tPitch + r.dPitch);
  if (r.status === 'pinch') state.tZoom = r.zoom;
  if (r.triggered === 'explode') setTarget(1);
  else if (r.triggered === 'collapse') setTarget(0);
  updateChargeUI(r);
  setStatus(r.status);
  state.gSpeed = r.speed;
  state.gCharge = r.charge;
}

const GEST = {
  none: ['✋', '請把手放進畫面'],
  open: ['🖐️', '張開手並靜止：展開'],
  fist: ['✊', '握拳並靜止：收合'],
  pinch: ['🤏', '捏合：縮放'],
  move: ['👋', '左右移動：旋轉'],
  chargeOpen: ['🖐️', '展開'],
  chargeFist: ['✊', '收合'],
  nocam: ['👆', '觸控模式：拖曳旋轉・雙指縮放・點兩下展開'],
};
function setStatus(g) {
  const key = GEST[g] ? g : 'none';
  if (state.gesture === key && key !== 'nocam' && key !== 'chargeOpen' && key !== 'chargeFist') return;
  state.gesture = key;
  const [i, t] = GEST[key];
  $('#gico').textContent = i;
  $('#gtxt').textContent = t;
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

// 啟動
loadModel().then(() => { $('#loading').classList.add('hide'); state.modelReady = true; renderer.setAnimationLoop(frame); registerMpWorker(); scheduleMpWarmup(); })
  .catch((e) => { console.error(e); $('#loadtxt').textContent = '模型載入失敗：' + e.message; });
// 測試用：?auto=cam / ?auto=touch 直接跳過開始畫面
const auto = new URLSearchParams(location.search).get('auto');
if (auto === 'cam') $('#startCam').click(); else if (auto === 'dual') $('#startDual').click(); else if (auto === 'touch') $('#startTouch').click();
