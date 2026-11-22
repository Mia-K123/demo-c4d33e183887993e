import { classifyPose, createGestureMachine, applyMirrorX, palmCenter, HOLD_S } from './gestures.mjs';

function pt(x, y) { return { x, y, z: 0 }; }

export function makeHand({ x = 0.5, y = 0.7, pose = 'open', scale = 0.22, jitter = 0 } = {}) {
  const j = () => (Math.random() - 0.5) * 2 * jitter;
  const lm = Array.from({ length: 21 }, () => pt(x, y));
  lm[0] = pt(x, y);
  const palm = scale * 0.85;
  const mcpY = y - palm;
  const xs = { 5: -0.22, 9: -0.02, 13: 0.16, 17: 0.34 };
  const fingers = [
    { mcp: 5, pip: 6, dip: 7, tip: 8 },
    { mcp: 9, pip: 10, dip: 11, tip: 12 },
    { mcp: 13, pip: 14, dip: 15, tip: 16 },
    { mcp: 17, pip: 18, dip: 19, tip: 20 },
  ];
  const curlSet = pose === 'open' ? [false, false, false, false]
    : pose === 'index' || pose === 'pinch' ? [false, true, true, true]
    : pose === 'fist3' ? [true, true, true, false] // 三指捲、小指略伸
    : pose === 'half' ? [true, true, false, false]
    : [true, true, true, true]; // fist
  fingers.forEach((f, i) => {
    const bx = x + xs[f.mcp] * scale;
    lm[f.mcp] = pt(bx, mcpY);
    if (curlSet[i]) {
      lm[f.pip] = pt(bx, mcpY + palm * 0.25);
      lm[f.dip] = pt(bx, mcpY + palm * 0.4);
      lm[f.tip] = pt(bx, mcpY + palm * 0.55);
    } else {
      const len = scale * 1.05;
      lm[f.pip] = pt(bx, mcpY - len * 0.35);
      lm[f.dip] = pt(bx, mcpY - len * 0.65);
      lm[f.tip] = pt(bx, mcpY - len);
    }
  });
  if (pose === 'open') {
    lm[1] = pt(x - scale * 0.15, y - palm * 0.3);
    lm[2] = pt(x - scale * 0.35, y - palm * 0.55);
    lm[3] = pt(x - scale * 0.52, y - palm * 0.85);
    lm[4] = pt(x - scale * 0.72, y - palm * 1.15);
  } else if (pose === 'pinch') {
    const ix = lm[8].x, iy = lm[8].y;
    lm[1] = pt(x - scale * 0.18, y - palm * 0.25);
    lm[2] = pt(x - scale * 0.28, mcpY - scale * 0.15);
    lm[3] = pt(ix - scale * 0.08, iy + scale * 0.06);
    lm[4] = pt(ix - scale * 0.03, iy + scale * 0.02);
  } else if (pose === 'index') {
    lm[1] = pt(x - scale * 0.1, y - palm * 0.3);
    lm[2] = pt(x - scale * 0.16, mcpY + palm * 0.05);
    lm[3] = pt(x - scale * 0.12, mcpY + palm * 0.2);
    lm[4] = pt(x - scale * 0.06, mcpY + palm * 0.3);
  } else {
    // 握拳：拇指可貼在側面（真實握拳常這樣，不可因此排除）
    lm[1] = pt(x - scale * 0.08, y - palm * 0.35);
    lm[2] = pt(x - scale * 0.18, mcpY + palm * 0.05);
    lm[3] = pt(x - scale * 0.2, mcpY + palm * 0.2);
    lm[4] = pt(x - scale * 0.14, mcpY + palm * 0.35);
  }
  if (jitter) {
    for (const p of lm) { p.x += j(); p.y += j(); }
  }
  return lm;
}

function run(seq, { mirrored = false, fps = 30 } = {}) {
  const g = createGestureMachine();
  const events = [];
  let yaw = 0, pitch = 0, zoom = 1;
  let now = 1000;
  const dt = 1000 / fps;
  for (const step of seq) {
    const n = step.frames ?? 1;
    for (let i = 0; i < n; i++) {
      now += dt;
      const x = typeof step.x === 'function' ? step.x(i, n, now) : step.x;
      const y = typeof step.y === 'function' ? step.y(i, n, now) : (step.y ?? 0.7);
      const lm = step.lm ? step.lm(i, n) : makeHand({ x, y, pose: step.pose, jitter: step.jitter || 0 });
      const r = g.update({ now, landmarks: step.lost ? null : lm, mirrored, zoom });
      zoom = r.zoom;
      // 偵測 ~30fps、畫面 60fps：在兩個偵測之間補 tick
      const steps = Math.max(1, Math.round((dt / 1000) * 60));
      const slice = (dt / 1000) / steps;
      for (let k = 0; k < steps; k++) {
        const tr = g.tick(slice);
        yaw += tr.dYaw;
        pitch += tr.dPitch;
      }
      if (r.triggered) events.push({ type: r.triggered, now, yaw, charge: r.charge });
    }
  }
  return { yaw, pitch, zoom, events, machine: g };
}

const results = [];
const pass = (n, m = '') => { results.push({ n, ok: true, m }); console.log('PASS', n, m); };
const fail = (n, m) => { results.push({ n, ok: false, m }); console.error('FAIL', n, m); };

// --- classify ---
{
  const cases = [
    ['open', 'open'],
    ['fist', 'fist'],
    ['fist3', 'fist'],
    ['pinch', 'pinch'],
    ['index', 'index'],
    ['half', 'move'],
  ];
  for (const [pose, expect] of cases) {
    const c = classifyPose(makeHand({ pose }));
    if (c.g !== expect) fail(`classify-${pose}`, JSON.stringify(c));
    else pass(`classify-${pose}`, `nExt=${c.nExt} nCurled=${c.nCurled} pinchD=${c.pinchD.toFixed(2)}`);
  }
}

// 優先：捏合 > 食指 > 握拳 > 張開。捏合時其他指可張開。
{
  const lm = makeHand({ pose: 'open' });
  // 把拇指拉近食指尖，應判 pinch 而非 open
  lm[4] = { x: lm[8].x + 0.01, y: lm[8].y + 0.01, z: 0 };
  const c = classifyPose(lm);
  if (c.g !== 'pinch') fail('priority-pinch-over-open', JSON.stringify(c));
  else pass('priority-pinch-over-open', `pinchD=${c.pinchD.toFixed(2)}`);
}

// 握拳即使拇指外貼也不該變 pinch（食指已捲曲）
{
  const c = classifyPose(makeHand({ pose: 'fist' }));
  if (c.g !== 'fist') fail('fist-ignores-thumb', JSON.stringify(c));
  else pass('fist-ignores-thumb', `pinchD=${c.pinchD.toFixed(2)} nCurled=${c.nCurled}`);
}

// --- still open → explode once, cooldown ---
{
  const r = run([
    { pose: 'open', x: 0.5, y: 0.7, frames: 25 },
    { pose: 'open', x: 0.5, y: 0.7, frames: 15 },
  ]);
  const exp = r.events.filter((e) => e.type === 'explode');
  if (exp.length !== 1) fail('open-explode-once', JSON.stringify(r.events));
  else pass('open-explode-once', `t=${((exp[0].now - 1000) / 1000).toFixed(2)}s`);
}

// --- still fist → collapse ---
{
  const r = run([{ pose: 'fist', x: 0.5, y: 0.7, frames: 25 }]);
  const col = r.events.filter((e) => e.type === 'collapse');
  if (col.length !== 1) fail('fist-collapse', JSON.stringify(r.events));
  else pass('fist-collapse', `t=${((col[0].now - 1000) / 1000).toFixed(2)}s`);
}

// --- jittery real-ish fist（小幅抖動、拇指外貼、偶發 3 指捲）仍應收合 ---
{
  const r = run([{
    pose: 'fist', x: 0.5, y: 0.7, frames: 30, jitter: 0.01,
    lm: (i) => makeHand({ pose: i % 7 === 0 ? 'fist3' : 'fist', x: 0.5 + Math.sin(i) * 0.008, y: 0.7 + Math.cos(i * 1.3) * 0.006 }),
  }]);
  const col = r.events.filter((e) => e.type === 'collapse');
  if (col.length < 1) fail('jittery-fist-collapse', JSON.stringify(r.events));
  else pass('jittery-fist-collapse', `n=${col.length} t=${((col[0].now - 1000) / 1000).toFixed(2)}s`);
}

// --- 只伸食指左右移：旋轉，不開合 ---
{
  const frames = 30;
  const r = run([
    { pose: 'index', x: 0.25, y: 0.7, frames: 8 },
    { pose: 'index', x: (i, n) => 0.25 + 0.4 * ((i + 1) / n), y: 0.7, frames },
  ]);
  if (r.events.length) fail('index-no-trigger', JSON.stringify(r.events));
  else pass('index-no-trigger');
  if (r.yaw <= 0.3) fail('index-rotates', `yaw=${r.yaw.toFixed(3)}`);
  else pass('index-rotates', `yaw=${r.yaw.toFixed(3)}`);
}

// 張開／握拳移動時也可以觸發（不再用速度門檻），但只伸食指才旋轉
{
  const r = run([{ pose: 'fist', x: 0.5, y: 0.7, frames: 20 }]);
  if (Math.abs(r.yaw) > 0.05) fail('fist-does-not-rotate', `yaw=${r.yaw}`);
  else pass('fist-does-not-rotate', `yaw=${r.yaw.toFixed(4)}`);
}

// --- pinch zoom, not collapse ---
{
  const g = createGestureMachine();
  let zoom = 1, now = 1000, triggered = [];
  for (let i = 0; i < 20; i++) {
    now += 1000 / 30;
    const lm = makeHand({ pose: 'pinch', x: 0.5 });
    lm[8].x += 0.02 * i;
    const r = g.update({ now, landmarks: lm, zoom });
    zoom = r.zoom;
    if (r.triggered) triggered.push(r.triggered);
  }
  if (triggered.length) fail('pinch-no-trigger', JSON.stringify(triggered));
  else pass('pinch-no-trigger');
  if (!(zoom > 1.05)) fail('pinch-zooms', `zoom=${zoom}`);
  else pass('pinch-zooms', `zoom=${zoom.toFixed(3)}`);
}

// --- 前鏡頭鏡像：使用者向右（raw x 變小）→ yaw 增加 ---
{
  const rawL = palmCenter(makeHand({ x: 0.7 }));
  const rawR = palmCenter(makeHand({ x: 0.3 }));
  const mL = applyMirrorX(rawL, { facing: 'user' });
  const mR = applyMirrorX(rawR, { facing: 'user' });
  if (!(mL.x < mR.x) || !mL.mirrored) fail('mirror-front', JSON.stringify({ mL, mR }));
  else pass('mirror-front', `left ${mL.x.toFixed(2)} < right ${mR.x.toFixed(2)}`);
  const rearL = applyMirrorX(rawL, { facing: 'environment' });
  if (rearL.mirrored) fail('mirror-rear', 'should not mirror');
  else pass('mirror-rear');

  const g = createGestureMachine();
  let yaw = 0, now = 1000;
  for (let i = 0; i < 24; i++) {
    now += 1000 / 30;
    const x = 0.7 - 0.4 * (i / 23);
    const r = g.update({ now, landmarks: makeHand({ pose: 'index', x }), mirrored: true });
    const tr = g.tick(1 / 30);
    yaw += tr.dYaw;
  }
  if (yaw <= 0.25) fail('mirror-yaw-sign', `yaw=${yaw.toFixed(3)}`);
  else pass('mirror-yaw-sign', `yaw=${yaw.toFixed(3)}`);
}

// --- 食指旋轉：第一個位移幀立刻有 yaw（不必等多數決）---
{
  const g = createGestureMachine();
  let yaw = 0, now = 1000;
  g.update({ now, landmarks: makeHand({ pose: 'index', x: 0.3 }), mirrored: false });
  now += 1000 / 30;
  g.update({ now, landmarks: makeHand({ pose: 'index', x: 0.42 }), mirrored: false });
  for (let k = 0; k < 2; k++) yaw += g.tick(1 / 60).dYaw;
  if (yaw <= 0.02) fail('index-rotates-immediately', `yaw=${yaw.toFixed(4)}`);
  else pass('index-rotates-immediately', `yaw=${yaw.toFixed(3)}`);
}

// --- 放開食指後慣性續轉，之後逐漸停下 ---
{
  const g = createGestureMachine();
  let yaw = 0, now = 1000;
  for (let i = 0; i < 10; i++) {
    now += 1000 / 30;
    g.update({ now, landmarks: makeHand({ pose: 'index', x: 0.3 + i * 0.03 }) });
    yaw += g.tick(1 / 30).dYaw;
  }
  const afterMove = yaw;
  // 手勢改張開（非食指），速度應帶一段慣性
  now += 1000 / 30;
  g.update({ now, landmarks: makeHand({ pose: 'open', x: 0.3 + 9 * 0.03 }) });
  let coast = 0;
  for (let k = 0; k < 20; k++) {
    const d = g.tick(1 / 60).dYaw;
    coast += d;
    yaw += d;
  }
  if (!(afterMove > 0.2)) fail('index-inertia-move', `afterMove=${afterMove.toFixed(3)}`);
  else if (!(coast > 0.01)) fail('index-inertia-coast', `coast=${coast.toFixed(4)} afterMove=${afterMove.toFixed(3)}`);
  else pass('index-inertia', `move=${afterMove.toFixed(3)} coast=${coast.toFixed(3)}`);
}

const failed = results.filter((r) => !r.ok);
console.log('\n==== GESTURE UNIT ====');
for (const r of results) console.log(`${r.ok ? 'OK' : 'XX'}  ${r.n}${r.m ? ' — ' + r.m : ''}`);
console.log(failed.length ? `${failed.length} failed` : `all ${results.length} passed`);
process.exit(failed.length ? 1 : 0);
