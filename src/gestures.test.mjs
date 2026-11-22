import { classifyPose, createGestureMachine, applyMirrorX, palmCenter, HOLD_S, YAW_GAIN } from './gestures.mjs';

function pt(x, y) { return { x, y, z: 0 }; }

/**
 * 簡易 21 點手：腕在 (x,y)，手指向上（y 減小）。
 * pose: open | fist | pinch | half
 */
export function makeHand({ x = 0.5, y = 0.7, pose = 'open', scale = 0.22 } = {}) {
  const lm = Array.from({ length: 21 }, () => pt(x, y));
  lm[0] = pt(x, y);
  const palm = scale * 0.85;
  // MCP 一排（在手腕上方），形成穩定的手掌尺寸
  const mcpY = y - palm;
  const xs = { 5: -0.22, 9: -0.02, 13: 0.16, 17: 0.34 };
  const fingers = [
    { mcp: 5, pip: 6, dip: 7, tip: 8 },
    { mcp: 9, pip: 10, dip: 11, tip: 12 },
    { mcp: 13, pip: 14, dip: 15, tip: 16 },
    { mcp: 17, pip: 18, dip: 19, tip: 20 },
  ];
  const curl = pose === 'open' ? 0
    : pose === 'half' ? 0.72
    : pose === 'pinch' ? null
    : 1; // fist
  fingers.forEach((f, i) => {
    const bx = x + xs[f.mcp] * scale;
    lm[f.mcp] = pt(bx, mcpY);
    let k = 1;
    if (pose === 'pinch') k = i === 0 ? 1 : 0.12;
    else if (pose === 'half') k = 0.28;
    else if (pose === 'fist') k = 0.08;
    if (pose === 'fist') {
      // 指尖捲回掌心（比 MCP 更靠近手腕）
      lm[f.pip] = pt(bx, mcpY + palm * 0.25);
      lm[f.dip] = pt(bx, mcpY + palm * 0.4);
      lm[f.tip] = pt(bx, mcpY + palm * 0.55);
    } else if (pose === 'half') {
      // 半開：指節彎曲，指尖未真正伸直（D(tip,wrist) 不會明顯大於 pip）
      lm[f.pip] = pt(bx, mcpY - scale * 0.22);
      lm[f.dip] = pt(bx, mcpY - scale * 0.12);
      lm[f.tip] = pt(bx, mcpY + scale * 0.06);
    } else {
      const len = scale * 1.05 * k;
      lm[f.pip] = pt(bx, mcpY - len * 0.35);
      lm[f.dip] = pt(bx, mcpY - len * 0.65);
      lm[f.tip] = pt(bx, mcpY - len);
    }
  });
  // 拇指
  if (pose === 'open') {
    lm[1] = pt(x - scale * 0.15, y - palm * 0.3);
    lm[2] = pt(x - scale * 0.35, y - palm * 0.55);
    lm[3] = pt(x - scale * 0.52, y - palm * 0.85);
    lm[4] = pt(x - scale * 0.72, y - palm * 1.15);
  } else if (pose === 'half') {
    lm[1] = pt(x - scale * 0.12, y - palm * 0.2);
    lm[2] = pt(x - scale * 0.22, y - palm * 0.35);
    lm[3] = pt(x - scale * 0.28, y - palm * 0.4);
    lm[4] = pt(x - scale * 0.32, y - palm * 0.42);
  } else if (pose === 'pinch') {
    const ix = lm[8].x, iy = lm[8].y;
    lm[1] = pt(x - scale * 0.18, y - palm * 0.25);
    lm[2] = pt(x - scale * 0.28, mcpY - scale * 0.15);
    lm[3] = pt(ix - scale * 0.1, iy + scale * 0.08);
    lm[4] = pt(ix - scale * 0.05, iy + scale * 0.03);
  } else {
    // 握拳：拇指貼在食指 MCP 旁
    lm[1] = pt(x - scale * 0.08, y - palm * 0.35);
    lm[2] = pt(x - scale * 0.1, mcpY + palm * 0.1);
    lm[3] = pt(x - scale * 0.08, mcpY + palm * 0.25);
    lm[4] = pt(x - scale * 0.04, mcpY + palm * 0.35);
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
      const lm = step.lm ? step.lm(i, n) : makeHand({ x, y, pose: step.pose });
      const r = g.update({ now, landmarks: step.lost ? null : lm, mirrored, zoom });
      yaw += r.dYaw;
      pitch += r.dPitch;
      zoom = r.zoom;
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
  const o = classifyPose(makeHand({ pose: 'open' }));
  const f = classifyPose(makeHand({ pose: 'fist' }));
  const p = classifyPose(makeHand({ pose: 'pinch' }));
  if (o.g !== 'open') fail('classify-open', JSON.stringify(o)); else pass('classify-open');
  if (f.g !== 'fist') fail('classify-fist', JSON.stringify(f)); else pass('classify-fist');
  if (p.g !== 'pinch') fail('classify-pinch', JSON.stringify(p)); else pass('classify-pinch', `pinchD=${p.pinchD.toFixed(2)}`);
}

// 捏合過程（拇指食指靠近、食指略彎）不可判成握拳
{
  const lm = makeHand({ pose: 'pinch' });
  // 再把食指尖靠近拇指，模擬捏緊
  lm[8] = { x: lm[4].x + 0.01, y: lm[4].y + 0.01, z: 0 };
  const c = classifyPose(lm);
  if (c.g === 'fist') fail('pinch-not-fist', JSON.stringify(c));
  else pass('pinch-not-fist', c.g);
}

// --- moving open palm: rotate, do not explode ---
{
  const frames = 30; // 1s 橫移 0.35，速度 0.35 units/s 接近／超過抑制閾值
  const r = run([
    { pose: 'open', x: 0.25, y: 0.7, frames: 5 }, // 先落穩
    { pose: 'open', x: (i, n) => 0.25 + 0.4 * ((i + 1) / n), y: 0.7, frames },
  ]);
  if (r.events.some((e) => e.type === 'explode' || e.type === 'collapse')) fail('move-open-no-explode', JSON.stringify(r.events));
  else pass('move-open-no-explode');
  if (r.yaw <= 0.4) fail('move-open-rotates', `yaw=${r.yaw.toFixed(3)}`);
  else pass('move-open-rotates', `yaw=${r.yaw.toFixed(3)}`);
}

// --- still fist: collapse, little/no rotation ---
{
  const r = run([
    { pose: 'fist', x: 0.5, y: 0.7, frames: 8 },
    { pose: 'fist', x: 0.5, y: 0.7, frames: 20 }, // ~0.67s still
  ]);
  const col = r.events.filter((e) => e.type === 'collapse');
  const exp = r.events.filter((e) => e.type === 'explode');
  if (col.length !== 1) fail('still-fist-collapse', JSON.stringify(r.events));
  else pass('still-fist-collapse', `t=${((col[0].now-1000)/1000).toFixed(2)}s`);
  if (exp.length) fail('still-fist-no-explode', JSON.stringify(r.events));
  else pass('still-fist-no-explode');
  if (Math.abs(r.yaw) > 0.05) fail('still-fist-no-spin', `yaw=${r.yaw}`);
  else pass('still-fist-no-spin', `yaw=${r.yaw.toFixed(4)}`);
}

// --- moving fist: rotate only, no collapse ---
{
  const frames = 36;
  const r = run([
    { pose: 'fist', x: 0.2, y: 0.7, frames: 4 },
    { pose: 'fist', x: (i, n) => 0.2 + 0.45 * ((i + 1) / n), y: 0.7, frames },
  ]);
  if (r.events.length) fail('move-fist-no-collapse', JSON.stringify(r.events));
  else pass('move-fist-no-collapse');
  if (r.yaw <= 0.4) fail('move-fist-rotates', `yaw=${r.yaw.toFixed(3)}`);
  else pass('move-fist-rotates', `yaw=${r.yaw.toFixed(3)}`);
}

// --- still open palm: explode once, cooldown blocks second ---
{
  const r = run([
    { pose: 'open', x: 0.5, y: 0.7, frames: 30 }, // 1s still
    { pose: 'open', x: 0.5, y: 0.7, frames: 20 }, // still in cooldown
  ]);
  const exp = r.events.filter((e) => e.type === 'explode');
  if (exp.length !== 1) fail('still-open-once', JSON.stringify(r.events));
  else pass('still-open-once', `t=${((exp[0].now-1000)/1000).toFixed(2)}s`);
}

// --- half-open should not explode quickly ---
{
  const r = run([{ pose: 'half', x: 0.5, y: 0.7, frames: 30 }]);
  if (r.events.length) fail('half-open-no-explode', JSON.stringify(r.events) + ' pose=' + classifyPose(makeHand({ pose: 'half' })).g);
  else pass('half-open-no-explode', `cls=${classifyPose(makeHand({ pose: 'half' })).g}`);
}

// --- front camera mirror: 手往畫面右（使用者向右）yaw 增加 ---
{
  // 原始 MediaPipe：未鏡像時，使用者向右 → x 減少（自拍相機）
  // applyMirrorX 後 x 應增加
  const rawL = palmCenter(makeHand({ x: 0.7 })); // 影像右邊 = 使用者左邊（未鏡像）
  const rawR = palmCenter(makeHand({ x: 0.3 }));
  const mL = applyMirrorX(rawL, { facing: 'user' });
  const mR = applyMirrorX(rawR, { facing: 'user' });
  if (!(mL.x < mR.x) || !mL.mirrored) fail('mirror-front', JSON.stringify({ mL, mR }));
  else pass('mirror-front', `left ${mL.x.toFixed(2)} < right ${mR.x.toFixed(2)}`);

  const rearL = applyMirrorX(rawL, { facing: 'environment' });
  const rearR = applyMirrorX(rawR, { facing: 'environment' });
  if (rearL.mirrored || rearL.x <= rearR.x) fail('mirror-rear', JSON.stringify({ rearL, rearR }));
  else pass('mirror-rear', `raw right ${rearL.x.toFixed(2)} stays right`);

  // 前鏡頭：使用者向右揮（raw x 變小）應讓鏡像後 x 變大、yaw 增加
  const g = createGestureMachine();
  let yaw = 0, now = 1000;
  for (let i = 0; i < 24; i++) {
    now += 1000 / 30;
    const x = 0.7 - 0.4 * (i / 23); // raw 向左（使用者向右）
    const r = g.update({ now, landmarks: makeHand({ pose: 'open', x }), mirrored: true });
    yaw += r.dYaw;
  }
  if (yaw <= 0.3) fail('mirror-yaw-sign', `yaw=${yaw.toFixed(3)}`);
  else pass('mirror-yaw-sign', `yaw=${yaw.toFixed(3)}`);
}

// --- pinch zoom changes zoom, no collapse ---
{
  const g = createGestureMachine();
  let zoom = 1, now = 1000, triggered = [];
  const start = makeHand({ pose: 'pinch', x: 0.5 });
  const d0 = Math.hypot(start[4].x - start[8].x, start[4].y - start[8].y);
  for (let i = 0; i < 20; i++) {
    now += 1000 / 30;
    const lm = makeHand({ pose: 'pinch', x: 0.5 });
    // 逐漸張開兩指
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

// --- rotation lock after trigger: settling motion shouldn't spin ---
{
  const g = createGestureMachine();
  let yaw = 0, now = 1000;
  // still open to trigger
  for (let i = 0; i < 20; i++) {
    now += 1000 / 30;
    const r = g.update({ now, landmarks: makeHand({ pose: 'open', x: 0.5 }) });
    yaw += r.dYaw;
    if (r.triggered) break;
  }
  const yawAtTrig = yaw;
  // settling: 0.25s of residual motion
  for (let i = 0; i < 8; i++) {
    now += 1000 / 30;
    const r = g.update({ now, landmarks: makeHand({ pose: 'open', x: 0.5 + 0.02 * (i + 1) }) });
    yaw += r.dYaw;
  }
  if (Math.abs(yaw - yawAtTrig) > 0.05) fail('rot-lock-after-trigger', `dYaw=${(yaw - yawAtTrig).toFixed(3)}`);
  else pass('rot-lock-after-trigger', `dYaw=${(yaw - yawAtTrig).toFixed(4)}`);
}

const failed = results.filter((r) => !r.ok);
console.log('\n==== GESTURE UNIT ====');
for (const r of results) console.log(`${r.ok ? 'OK' : 'XX'}  ${r.n}${r.m ? ' — ' + r.m : ''}`);
console.log(failed.length ? `${failed.length} failed` : `all ${results.length} passed`);
process.exit(failed.length ? 1 : 0);
