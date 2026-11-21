import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { HDRLoader } from 'three/examples/jsm/loaders/HDRLoader.js';
import { FilesetResolver, HandLandmarker } from '@mediapipe/tasks-vision';

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
  if (snd.introBackWhen && snd.ctx && snd.ctx.currentTime >= snd.introBackWhen) {
    snd.introBackWhen = 0;
    if (!state.target && state.soundOn) startIntroLoop();
  }
  if (punch > 0) { punch = Math.max(0, punch - dt * 5.5); if (punch < 0.03) punch = 0; state.punch = punch; }
  tickIntroLoop();
  applyPunch(now);
  renderer.render(scene, camera);
}



// ---------- 音效（前奏輕聲循環；第一次展開跳到副歌高潮；收合有撞擊音效） ----------
// 分析：50 ms RMS（全頻 + 300–3400 Hz 人聲帶）+ 128 BPM 拍點網格（前奏 onset ACF）。
// 前奏 0.00–28.12s = 15 小節器樂；約 29.1s 起較安靜的主歌（人聲帶相對凸顯）；
// 45.00s = 第 24 小節，全頻能量躍升約 +8 dB，副歌/高潮（人聲與編曲一起進來）。
const SOUND_KEY = 'gesture-demo-sound';
const INTRO_START = 0.00, INTRO_END = 28.12, CLIMAX = 45.00;
const INTRO_GAIN = 0.4, MAIN_GAIN = 1.0, SNAP_AT = 0.08;
const MUSIC_FADE_OUT = 0.4, THUD_AT = 0.4; // 撞擊與音樂切掉同一刻（約 0.4s）
const BPM = 128, BAR = 60 / BPM * 4;          // 1.875s
const XFADE = BAR;                             // 1 小節等功率交叉淡化，結束在 45.00 拍點
const CLIMAX_CUE = CLIMAX - XFADE;             // 43.125s，淡入期間走到高潮正拍
const INTRO_IN = 1.5;
const KEY0 = 1.6, RIM0 = 1.2;

function makeAudioEl() {
  const a = new Audio(rel('audio/explode.mp3'));
  a.preload = 'auto'; a.playsInline = true; a.crossOrigin = 'anonymous';
  a.setAttribute('playsinline', ''); a.loop = false;
  return a;
}
const introEl = makeAudioEl(), mainEl = makeAudioEl();
const snd = {
  ctx: null, introGain: null, mainGain: null, introFilter: null, mainFilter: null,
  verbSend: null, verb: null, noise: null,
  unlocked: false, mode: 'off', resumePos: CLIMAX, mainEnded: false, heardMain: false,
  pauseT: 0, thudWhen: 0, introBackWhen: 0, whooshBuf: null, thudBuf: null,
  sfx: { whooshAt: 0, impactAt: 0, riserAt: 0 },
};
let snapArmed = false, punch = 0, ignoreGesturesUntil = 0;
state.soundOn = localStorage.getItem(SOUND_KEY) !== '0';
state.music = mainEl; // 測試相容
state.intro = introEl;
state.sound = snd;
state.punch = 0;

function nyquist() { return Math.min(20000, (snd.ctx?.sampleRate || 44100) * 0.49); }

function ensureAudio() {
  if (snd.ctx) return;
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  const ctx = snd.ctx = new AC();
  const lp = () => { const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.Q.value = 0.7; f.frequency.value = nyquist(); return f; };
  snd.introFilter = lp(); snd.mainFilter = lp();
  snd.introGain = ctx.createGain(); snd.introGain.gain.value = 0;
  snd.mainGain = ctx.createGain(); snd.mainGain.gain.value = 0;
  ctx.createMediaElementSource(introEl).connect(snd.introFilter);
  ctx.createMediaElementSource(mainEl).connect(snd.mainFilter);
  snd.introFilter.connect(snd.introGain).connect(ctx.destination);
  snd.mainFilter.connect(snd.mainGain).connect(ctx.destination);
  // 前奏淡出時留下一點殘響
  const impulse = ctx.createBuffer(2, Math.floor(ctx.sampleRate * 1.8), ctx.sampleRate);
  for (let ch = 0; ch < 2; ch++) {
    const d = impulse.getChannelData(ch);
    for (let i = 0; i < d.length; i++) {
      const x = i / ctx.sampleRate;
      d[i] = (Math.random() * 2 - 1) * Math.exp(-x * 3.4) * (1 - i / d.length);
    }
  }
  snd.verb = ctx.createConvolver(); snd.verb.buffer = impulse;
  snd.verbSend = ctx.createGain(); snd.verbSend.gain.value = 0;
  snd.introFilter.connect(snd.verbSend).connect(snd.verb).connect(ctx.destination);
  bakeSfxSync();
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
  snd.whooshBuf = mk(0.52, (d, sr) => {
    let y = 0;
    for (let i = 0; i < d.length; i++) {
      const t = i / sr, k = t / 0.52;
      const env = Math.min(1, t / 0.05) * Math.exp(-k * 3.4) * 0.65;
      const cut = 2000 * Math.pow(220 / 2000, k);
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

function currentGain(node) {
  if (!node) return 0;
  try { const v = node.gain.value; return Number.isFinite(v) ? v : 0; } catch { return 0; }
}

function fadeNode(node, to, dur) {
  if (!node || !snd.ctx) return;
  const now = snd.ctx.currentTime, g = node.gain, from = currentGain(node);
  g.cancelScheduledValues(now);
  g.setValueAtTime(from, now);
  g.linearRampToValueAtTime(to, now + Math.max(0.02, dur));
}

// 等功率淡化：淡出用 cos、淡入用 sin，交叉時能量較平滑
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

function sweepLowpass(filter, fromHz, toHz, dur, now) {
  if (!filter || !snd.ctx) return;
  const lo = 80, hi = nyquist();
  const a = Math.max(lo, Math.min(hi, fromHz)), b = Math.max(lo, Math.min(hi, toHz));
  filter.frequency.cancelScheduledValues(now);
  filter.frequency.setValueAtTime(a, now);
  filter.frequency.exponentialRampToValueAtTime(b, now + Math.max(0.05, dur));
}

function noiseBuffer() {
  if (snd.noise) return snd.noise;
  if (!snd.ctx) return null;
  const sr = snd.ctx.sampleRate, n = Math.floor(sr * 1.6);
  const buf = snd.ctx.createBuffer(1, n, sr), d = buf.getChannelData(0);
  for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
  snd.noise = buf; return buf;
}

function playClimaxRiser(when, dur) {
  if (!snd.ctx) return;
  const ctx = snd.ctx, buf = noiseBuffer(); if (!buf) return;
  const src = ctx.createBufferSource(); src.buffer = buf;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = 1.1;
  bp.frequency.setValueAtTime(350, when);
  bp.frequency.exponentialRampToValueAtTime(5500, when + dur);
  const g = ctx.createGain();
  g.gain.setValueAtTime(0.0001, when);
  g.gain.exponentialRampToValueAtTime(0.14, when + dur * 0.75);
  g.gain.exponentialRampToValueAtTime(0.0001, when + dur);
  src.connect(bp).connect(g).connect(ctx.destination);
  src.start(when); src.stop(when + dur + 0.02);
  snd.sfx.riserAt = performance.now() + Math.max(0, (when - ctx.currentTime) * 1000);
}

async function silentPrime(el) {
  el.muted = true;
  try { await el.play(); } catch {}
  el.pause();
  el.muted = false;
  try { el.currentTime = 0; } catch {}
}

function tickIntroLoop() {
  if (snd.mode !== 'intro' || introEl.paused) return;
  if (introEl.currentTime >= INTRO_END - 0.05) {
    try { introEl.currentTime = INTRO_START; } catch {}
  }
}

function startIntroLoop() {
  if (!state.soundOn || !snd.unlocked) return;
  clearTimeout(snd.pauseT);
  if (snd.ctx && snd.ctx.state !== 'running') snd.ctx.resume();
  try { if (introEl.currentTime < INTRO_START || introEl.currentTime >= INTRO_END - 0.08) introEl.currentTime = INTRO_START; } catch {}
  introEl.play().catch(() => {});
  const now = snd.ctx ? snd.ctx.currentTime : 0;
  const fadeIn = (snd.mode === 'main') ? INTRO_IN : 0.6; // 收合後慢進；解鎖時稍快
  sweepLowpass(snd.introFilter, 700, nyquist(), fadeIn, now);
  fadeEqPower(snd.introGain, INTRO_GAIN, fadeIn);
  fadeEqPower(snd.mainGain, 0, 0.4);
  if (snd.verbSend) fadeNode(snd.verbSend, 0, 0.3);
  snd.mode = 'intro';
  snd.pauseT = setTimeout(() => { if (snd.mode === 'intro') mainEl.pause(); }, 450);
}

function startMainBloom(pos, intoClimax) {
  if (!state.soundOn || !snd.unlocked) return;
  clearTimeout(snd.pauseT);
  if (snd.ctx && snd.ctx.state !== 'running') snd.ctx.resume();
  const dur = mainEl.duration;
  if (!Number.isFinite(pos) || pos < 0) pos = intoClimax ? CLIMAX_CUE : CLIMAX;
  if (Number.isFinite(dur) && dur > 0 && pos > dur - 0.8) pos = intoClimax ? CLIMAX_CUE : CLIMAX;
  try { mainEl.currentTime = pos; } catch {}
  mainEl.play().catch(() => {});
  const now = snd.ctx ? snd.ctx.currentTime : 0;
  const fade = XFADE;
  const hi = nyquist();
  sweepLowpass(snd.introFilter, Math.max(snd.introFilter && snd.introFilter.frequency.value || hi, 2000), 480, fade, now);
  sweepLowpass(snd.mainFilter, 800, hi, fade, now);
  fadeEqPower(snd.introGain, 0, fade);
  fadeEqPower(snd.mainGain, MAIN_GAIN, fade);
  if (snd.verbSend) {
    snd.verbSend.gain.cancelScheduledValues(now);
    snd.verbSend.gain.setValueAtTime(Math.max(0.04, currentGain(snd.verbSend)), now);
    snd.verbSend.gain.linearRampToValueAtTime(0.22, now + 0.25);
    snd.verbSend.gain.exponentialRampToValueAtTime(0.0001, now + fade + 1.05);
  }
  if (intoClimax) playClimaxRiser(now + Math.max(0.05, fade - 1.05), 1.05);
  snd.mode = 'main';
  snd.mainEnded = false;
  snd.heardMain = true;
  snd.pauseT = setTimeout(() => { if (snd.mode === 'main') introEl.pause(); }, fade * 1000 + 80);
}

function onExplodeAudio() {
  snapArmed = false;
  if (!state.soundOn || !snd.unlocked) return;
  const intoClimax = !snd.heardMain || snd.mainEnded || !Number.isFinite(snd.resumePos) || Math.abs(snd.resumePos - CLIMAX) < 0.2;
  const pos = intoClimax ? CLIMAX_CUE : snd.resumePos;
  startMainBloom(pos, intoClimax);
}

function onCollapseAudio() {
  snapArmed = state.explode > SNAP_AT;
  snd.resumePos = (!mainEl.paused || snd.mode === 'main') ? mainEl.currentTime : snd.resumePos;
  if (snd.mode === 'main') snd.resumePos = mainEl.currentTime;
  fadeNode(snd.mainGain, 0, MUSIC_FADE_OUT);
  fadeNode(snd.introGain, 0, 0.25);
  clearTimeout(snd.pauseT);
  snd.pauseT = setTimeout(() => { mainEl.pause(); if (state.target) return; }, MUSIC_FADE_OUT * 1000 + 30);
  snd.thudWhen = 0; snd.introBackWhen = 0;
  if (state.soundOn && snd.unlocked && snd.ctx) {
    if (!snd.thudBuf) bakeSfxSync();
    const ctx = snd.ctx, t0 = ctx.currentTime, lat = audioLatency();
    const heardAt = snapArmed ? THUD_AT : 0.02; // 合上撞擊對準音樂切掉；幾乎已合上就立刻撞
    if (snapArmed) {
      playBufAt(snd.whooshBuf, t0, 1); // 立刻 whoosh
      snd.sfx.whooshAt = performance.now();
    } else {
      snd.sfx.whooshAt = performance.now();
    }
    const thudStart = Math.max(t0, t0 + heardAt - lat);
    playBufAt(snd.thudBuf, thudStart, 1);
    snd.thudWhen = t0 + heardAt; // 視覺撞擊跟「聽到」的那一刻對齊（已扣 outputLatency）
    snd.introBackWhen = snd.thudWhen + 0.35;
  } else {
    snd.mode = 'off';
  }
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

async function unlockAudio() {
  try {
    ensureAudio();
    if (snd.ctx && snd.ctx.state !== 'running') await snd.ctx.resume();
    fadeNode(snd.introGain, 0, 0.01);
    fadeNode(snd.mainGain, 0, 0.01);
    await Promise.all([silentPrime(introEl), silentPrime(mainEl)]);
    snd.unlocked = true;
    state.audioUnlocked = true;
    updateSoundBtn();
    // 解鎖後若尚未展開：只輕聲循環前奏，絕不跳到高潮
    if (state.soundOn && !state.target) startIntroLoop();
    else if (state.soundOn && state.target) onExplodeAudio();
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
    unlockAudio();
    return;
  }
  state.soundOn = !state.soundOn;
  localStorage.setItem(SOUND_KEY, state.soundOn ? '1' : '0');
  updateSoundBtn();
  if (state.soundOn) {
    if (state.target) onExplodeAudio(); else startIntroLoop();
  } else {
    fadeNode(snd.introGain, 0, 0.2);
    fadeNode(snd.mainGain, 0, 0.2);
    clearTimeout(snd.pauseT);
    snd.pauseT = setTimeout(() => { introEl.pause(); mainEl.pause(); snd.mode = 'off'; }, 250);
  }
}

mainEl.addEventListener('ended', () => { snd.mainEnded = true; snd.resumePos = CLIMAX; });
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
let landmarker = null, video = $('#video'), lastVideoTime = -1, lastDetect = 0;
const hud = $('#hand'), hctx = hud.getContext('2d');
async function initLandmarker() {
  if (landmarker) return landmarker;
  $('#loadtxt').textContent = '載入手勢辨識模型…'; $('#loading').classList.remove('hide');
  const fileset = await FilesetResolver.forVisionTasks(rel('libs/mediapipe/wasm'));
  const opts = (delegate) => ({ baseOptions: { modelAssetPath: rel('models/hand_landmarker.task'), delegate }, runningMode: 'VIDEO', numHands: 1,
    minHandDetectionConfidence: 0.5, minHandPresenceConfidence: 0.5, minTrackingConfidence: 0.5 });
  try { landmarker = await HandLandmarker.createFromOptions(fileset, opts('GPU')); state.delegate = 'GPU'; }
  catch (e) { console.warn('GPU delegate failed, using CPU', e); landmarker = await HandLandmarker.createFromOptions(fileset, opts('CPU')); state.delegate = 'CPU'; }
  state.mpReady = true; $('#loading').classList.add('hide');
  return landmarker;
}
const CAM_KEY = 'gesture-demo-camera';
try { if (localStorage.getItem(CAM_KEY) === 'environment') state.facing = 'environment'; } catch {}
state.deviceId = null;
let videoInputs = [];

function facingFromLabel(label) {
  const s = (label || '').toLowerCase();
  if (/back|rear|environment|後置|後鏡頭/.test(s)) return 'environment';
  if (/front|user|face|前置|前鏡頭|facetime/.test(s)) return 'user';
  return null;
}

function applyMirror() {
  // 只有前鏡頭鏡像預覽；後鏡頭不鏡像，手勢座標也不左右對調，旋轉方向才會跟畫面對得上
  video.classList.toggle('mirror', state.facing === 'user');
}

function updateFlipBtn() {
  const btn = $('#btnFlip');
  if (!btn) return;
  btn.textContent = '🔄 切換鏡頭';
  btn.title = '切換鏡頭';
  btn.hidden = !state.camOn || videoInputs.length < 2;
}

async function refreshVideoInputs() {
  try {
    const list = await navigator.mediaDevices.enumerateDevices();
    videoInputs = list.filter((d) => d.kind === 'videoinput');
  } catch { videoInputs = []; }
  state.cameraCount = videoInputs.length;
  updateFlipBtn();
}

async function openCameraStream() {
  const base = { width: { ideal: 640 }, height: { ideal: 480 } };
  const tryGet = (video) => navigator.mediaDevices.getUserMedia({ audio: false, video });
  if (state.deviceId) {
    try { return await tryGet({ ...base, deviceId: { exact: state.deviceId } }); }
    catch { state.deviceId = null; }
  }
  return tryGet({ ...base, facingMode: { ideal: state.facing } });
}

async function startCamera() {
  stopCamera(); // 先關掉舊軌道再要新鏡頭
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('這個瀏覽器不支援相機（需要 HTTPS 或 localhost）');
  state.stream = await openCameraStream();
  const track = state.stream.getVideoTracks()[0];
  const st = track?.getSettings?.() || {};
  if (st.facingMode === 'user' || st.facingMode === 'environment') state.facing = st.facingMode;
  if (st.deviceId) state.deviceId = st.deviceId;
  video.srcObject = state.stream; await video.play();
  applyMirror();
  document.body.classList.add('cam');
  state.camOn = true; lastVideoTime = -1;
  ignoreGesturesUntil = performance.now() + 800;
  stable = { g: 'none', n: 0 };
  try { localStorage.setItem(CAM_KEY, state.facing); } catch {}
  await refreshVideoInputs();
  if (!st.facingMode && state.deviceId) {
    const dev = videoInputs.find((d) => d.deviceId === state.deviceId);
    const f = facingFromLabel(dev?.label);
    if (f) { state.facing = f; applyMirror(); try { localStorage.setItem(CAM_KEY, state.facing); } catch {} }
  }
}

function stopCamera() {
  state.stream?.getTracks().forEach((t) => t.stop());
  state.stream = null; state.camOn = false; document.body.classList.remove('cam');
}

async function flipCamera() {
  if (!state.camOn) return;
  await refreshVideoInputs();
  if (videoInputs.length < 2) { updateFlipBtn(); toast('這個裝置只有一個鏡頭'); return; }
  const prevId = state.deviceId || state.stream?.getVideoTracks?.()[0]?.getSettings?.()?.deviceId || '';
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

async function enableGestures() {
  try { await Promise.all([initLandmarker(), startCamera()]); setStatus('none'); }
  catch (e) { console.warn(e); $('#loading').classList.add('hide'); toast('無法開啟相機：' + (e.message || e.name) + '。已切換成觸控模式'); setStatus('nocam'); }
}
$('#btnFlip').onclick = () => { flipCamera(); };
$('#startCam').onclick = () => { $('#intro').classList.add('hide'); unlockAudio(); enableGestures(); };
$('#startTouch').onclick = () => { $('#intro').classList.add('hide'); unlockAudio(); setStatus('nocam'); };

// 手勢判斷
const D = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
function classify(lm) {
  const size = D(lm[0], lm[9]) || 1e-3;
  const ext = [[8, 6], [12, 10], [16, 14], [20, 18]].map(([t, p]) => D(lm[t], lm[0]) > D(lm[p], lm[0]) * 1.12);
  const nExt = ext.filter(Boolean).length; const pinchD = D(lm[4], lm[8]) / size;
  const thumbOut = D(lm[4], lm[17]) / size > 0.9;
  if (nExt >= 4 && thumbOut && pinchD > 0.5) return { g: 'open', pinchD };
  const idxOut = D(lm[8], lm[0]) > D(lm[5], lm[0]) * 1.1;
  const othersCurled = !ext[1] && !ext[2] && !ext[3];
  if (othersCurled && idxOut) return { g: 'pinch', pinchD };            // 只伸拇指和食指：捏合縮放
  if (othersCurled) return { g: 'fist', pinchD };
  return { g: 'move', pinchD };
}
state.classify = (lm) => classify(lm).g;
let stable = { g: 'none', n: 0 }, prevPalm = null, pinchRef = null;
function detect(now) {
  if (ar.session || renderer.xr.isPresenting) return; // AR 進行中暫停手勢相機推論
  if (!landmarker || video.readyState < 2 || now - lastDetect < 33) return;
  if (video.currentTime === lastVideoTime) return; lastVideoTime = video.currentTime; lastDetect = now;
  let res; try { res = landmarker.detectForVideo(video, now); } catch (e) { console.warn(e); return; }
  const lm = res.landmarks?.[0]; drawHand(lm);
  if (!lm) { stable = { g: 'none', n: 0 }; prevPalm = null; pinchRef = null; setStatus('none'); return; }
  const mirror = state.facing === 'user';
  const palm = { x: (lm[0].x + lm[5].x + lm[17].x) / 3, y: (lm[0].y + lm[5].y + lm[17].y) / 3 };
  if (mirror) palm.x = 1 - palm.x;
  const c = classify(lm);
  stable = c.g === stable.g ? { g: c.g, n: stable.n + 1 } : { g: c.g, n: 1 };
  const g = stable.n >= 3 ? stable.g : state.gesture;
  if (now < ignoreGesturesUntil) { prevPalm = palm; setStatus(c.g); return; }
  if (g === 'open') setTarget(1); else if (g === 'fist') setTarget(0);
  if (g === 'pinch') { // 拇指–食指距離 → 縮放（相對於開始捏的那一刻）
    if (!pinchRef) pinchRef = { d: Math.max(0.15, c.pinchD), z: state.tZoom };
    state.tZoom = clampZ(pinchRef.z * Math.pow(Math.max(0.05, c.pinchD) / pinchRef.d, 0.9));
  } else pinchRef = null;
  if (prevPalm && g !== 'pinch') {   // 手左右移動 → 轉；上下移動 → 俯仰
    const dx = palm.x - prevPalm.x, dy = palm.y - prevPalm.y;
    if (Math.abs(dx) > 0.004) state.tYaw += dx * 5.5;
    if (Math.abs(dy) > 0.004) state.tPitch = clampP(state.tPitch + dy * 3.5);
  }
  prevPalm = palm; setStatus(g);
}
const GEST = { none: ['✋', '請把手放進畫面'], open: ['🖐️', '張開手：展開'], fist: ['✊', '握拳：收合'], pinch: ['🤏', '捏合：縮放'],
  move: ['👋', '移動手：旋轉'], nocam: ['👆', '觸控模式：拖曳旋轉・雙指縮放・點兩下展開'] };
function setStatus(g) { if (state.gesture === g && g !== 'nocam') return; state.gesture = g; const [i, t] = GEST[g]; $('#gico').textContent = i; $('#gtxt').textContent = t; }
const BONES = [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [5, 6], [6, 7], [7, 8], [5, 9], [9, 10], [10, 11], [11, 12], [9, 13], [13, 14], [14, 15], [15, 16], [13, 17], [17, 18], [18, 19], [19, 20], [0, 17]];
function drawHand(lm) {
  const w = hud.width, h = hud.height; hctx.clearRect(0, 0, w, h);
  if (!lm) return; const m = state.facing === 'user';
  const P = (p) => [(m ? 1 - p.x : p.x) * w, p.y * h];
  hctx.lineWidth = 3; hctx.strokeStyle = 'rgba(120,200,255,0.95)'; hctx.lineCap = 'round';
  for (const [a, b] of BONES) { const [x1, y1] = P(lm[a]), [x2, y2] = P(lm[b]); hctx.beginPath(); hctx.moveTo(x1, y1); hctx.lineTo(x2, y2); hctx.stroke(); }
  hctx.fillStyle = '#fff'; for (const p of lm) { const [x, y] = P(p); hctx.beginPath(); hctx.arc(x, y, 3, 0, 7); hctx.fill(); }
}
let toastT; function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('show'), 4500); }

// 啟動
loadModel().then(() => { $('#loading').classList.add('hide'); state.modelReady = true; renderer.setAnimationLoop(frame); })
  .catch((e) => { console.error(e); $('#loadtxt').textContent = '模型載入失敗：' + e.message; });
// 測試用：?auto=cam / ?auto=touch 直接跳過開始畫面
const auto = new URLSearchParams(location.search).get('auto');
if (auto === 'cam') $('#startCam').click(); else if (auto === 'touch') $('#startTouch').click();
