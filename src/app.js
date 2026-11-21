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

async function loadModel() {
  const [meta, gltf] = await Promise.all([
    fetch(rel('models/parts.json')).then((r) => r.json()),
    new GLTFLoader().loadAsync(rel('models/server.glb'), (e) => {
      if (e.total) $('#loadtxt').textContent = `載入伺服器模型… ${Math.round(e.loaded / e.total * 100)}%`;
    }),
  ]);
  const root = gltf.scene; root.scale.setScalar(S);
  const box = new THREE.Box3().setFromObject(root); const c = box.getCenter(new THREE.Vector3());
  root.position.set(-c.x, -box.min.y, -c.z); pivot.add(root);
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

const ease = (x) => (x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x));
function setExplodePositions(t) {
  for (const p of parts) {
    const k = ease((t * 1.45) - p.delay * 1.45 * (1 - t) - p.delay * 0.45 * t);
    p.obj.position.copy(p.base).addScaledVector(p.off, k);
  }
}

function resize() {
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
function frame(now) {
  const dt = Math.min(0.05, (now - last) / 1000); last = now;
  // 平滑動畫
  const sp = 1 - Math.exp(-dt * 3.2);
  state.explode += (state.target - state.explode) * (1 - Math.exp(-dt * 3.6));
  if (Math.abs(state.target - state.explode) < 0.001) state.explode = state.target;
  state.yaw += (state.tYaw - state.yaw) * sp * 2; state.pitch += (state.tPitch - state.pitch) * sp * 2;
  state.zoom += (state.tZoom - state.zoom) * sp * 2;
  setExplodePositions(state.explode);
  pivot.rotation.y = state.yaw;
  const fovV = THREE.MathUtils.degToRad(camera.fov / 2), fovH = Math.atan(Math.tan(fovV) * camera.aspect);
  const e = ease(state.explode), portrait = camera.aspect < 1;
  const rad = frameInfo.r0 + (frameInfo.r1 - frameInfo.r0) * e, cy = frameInfo.c0 + (frameInfo.c1 - frameInfo.c0) * e;
  const dist = rad / Math.sin(Math.min(fovV, fovH)) * (portrait ? 1.0 - 0.2 * e : 0.88) / state.zoom;
  camera.position.set(0, cy + Math.sin(state.pitch) * dist, Math.cos(state.pitch) * dist);
  camera.lookAt(0, cy - rad * (portrait ? 0.06 : 0.04), 0);
  renderer.render(scene, camera); updateLabels();
  if (state.camOn) detect(now);
  requestAnimationFrame(frame);
}

// ---------- UI / 觸控 / 滑鼠 / 鍵盤 ----------
function setTarget(v) { state.target = v; $('#btnToggle').textContent = v ? '收合' : '展開'; $('#btnToggle').classList.toggle('on', !!v); }
$('#btnToggle').onclick = () => setTarget(state.target ? 0 : 1);
$('#btnReset').onclick = () => { state.tYaw = YAW0; state.tPitch = PITCH0; state.tZoom = 1; setTarget(0); };
$('#btnHelp').onclick = () => $('#help').classList.toggle('show');
$('#help').onclick = () => $('#help').classList.remove('show');
const clampP = (p) => Math.max(-0.15, Math.min(1.35, p));
const clampZ = (z) => Math.max(0.55, Math.min(2.6, z));
const ptrs = new Map(); let pinch0 = 0, zoom0 = 1, lastTap = 0, moved = false;
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

// AR 連結（iPhone：USDZ 動畫；Android：Scene Viewer GLB）
const ua = navigator.userAgent; const isIOS = /iP(hone|ad|od)/.test(ua) || (ua.includes('Mac') && navigator.maxTouchPoints > 1);
const ar = $('#btnAR');
if (isIOS) { ar.href = rel('models/server_anim.usdz'); ar.rel = 'ar'; ar.innerHTML = '<img alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=">AR'; }
else if (/Android/.test(ua)) ar.href = `intent://arvr.google.com/scene-viewer/1.2?file=${encodeURIComponent(rel('models/server.glb'))}&mode=ar_preferred&title=2U%20Server#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(location.href)};end;`;
else ar.style.display = 'none';

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
async function startCamera() {
  stopCamera();
  if (!navigator.mediaDevices?.getUserMedia) throw new Error('這個瀏覽器不支援相機（需要 HTTPS 或 localhost）');
  state.stream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: state.facing, width: { ideal: 640 }, height: { ideal: 480 } } });
  video.srcObject = state.stream; await video.play();
  video.classList.toggle('mirror', state.facing === 'user'); document.body.classList.add('cam');
  state.camOn = true; lastVideoTime = -1;
}
function stopCamera() { state.stream?.getTracks().forEach((t) => t.stop()); state.stream = null; state.camOn = false; document.body.classList.remove('cam'); }

async function enableGestures() {
  try { await Promise.all([initLandmarker(), startCamera()]); $('#btnFlip').hidden = false; setStatus('none'); }
  catch (e) { console.warn(e); $('#loading').classList.add('hide'); toast('無法開啟相機：' + (e.message || e.name) + '。已切換成觸控模式'); setStatus('nocam'); }
}
$('#btnFlip').onclick = async () => { state.facing = state.facing === 'user' ? 'environment' : 'user'; try { await startCamera(); } catch (e) { toast('切換鏡頭失敗'); } };
$('#startCam').onclick = () => { $('#intro').classList.add('hide'); enableGestures(); };
$('#startTouch').onclick = () => { $('#intro').classList.add('hide'); setStatus('nocam'); };

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
loadModel().then(() => { $('#loading').classList.add('hide'); state.modelReady = true; requestAnimationFrame(frame); })
  .catch((e) => { console.error(e); $('#loadtxt').textContent = '模型載入失敗：' + e.message; });
// 測試用：?auto=cam / ?auto=touch 直接跳過開始畫面
const auto = new URLSearchParams(location.search).get('auto');
if (auto === 'cam') $('#startCam').click(); else if (auto === 'touch') $('#startTouch').click();
