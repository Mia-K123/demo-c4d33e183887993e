/** 純手勢狀態機：旋轉與開合分開，不含 DOM，可供單元測試。 */

export const HOLD_S = 0.4;
export const COOLDOWN_S = 1.0;
export const ROT_LOCK_S = 0.5;
export const STILL_SPEED = 0.22;          // 畫面正規化單位／秒，低於此視為靜止
export const MOVE_SUPPRESS_SPEED = 0.42;  // 高於此暫停開／合判定
export const ROT_DEADZONE = 0.0035;       // 每幀位移死區
export const YAW_GAIN = 5.5;
export const PITCH_GAIN = 3.5;
export const SPEED_SMOOTH = 0.08;
export const CHARGE_GRACE_S = 0.1;
export const POSE_ENTER = 3;
export const POSE_EXIT = 4;
export const INERTIA_DECAY = 5;           // 慣性指數衰減（1/秒）

const D = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

export function palmCenter(lm) {
  return {
    x: (lm[0].x + lm[5].x + lm[17].x) / 3,
    y: (lm[0].y + lm[5].y + lm[17].y) / 3,
  };
}

/** 前鏡頭／雙鏡頭：把座標對到鏡像預覽，手往畫面右邊移動時 x 增加。 */
export function applyMirrorX(palm, { facing, camMode } = {}) {
  const mirrored = camMode === 'dual' || facing === 'user';
  if (!mirrored) return { x: palm.x, y: palm.y, mirrored: false };
  return { x: 1 - palm.x, y: palm.y, mirrored: true };
}

/**
 * 姿態分類。pinch 優先於 fist，避免捏合時被當成握拳。
 * prev 可做短暫滯後（由狀態機主責）。
 */
export function classifyPose(lm, prevPose = 'none') {
  if (!lm || lm.length < 21) return { g: 'none', pinchD: 0, nExt: 0, thumbOut: false };
  const size = D(lm[0], lm[9]) || 1e-3;
  const ext = [[8, 6], [12, 10], [16, 14], [20, 18]].map(([t, p]) => D(lm[t], lm[0]) > D(lm[p], lm[0]) * 1.12);
  const nExt = ext.filter(Boolean).length;
  const pinchD = D(lm[4], lm[8]) / size;
  const thumbOut = D(lm[4], lm[17]) / size > 0.9;
  const idxOut = D(lm[8], lm[0]) > D(lm[5], lm[0]) * 1.1;
  const othersCurled = !ext[1] && !ext[2] && !ext[3];
  const indexCurled = !ext[0] && !idxOut;

  if (nExt >= 4 && thumbOut && pinchD > 0.5) return { g: 'open', pinchD, nExt, thumbOut, ext };
  // 只伸拇指＋食指 → 縮放。捏合中食指微彎時，沿用上一幀 pinch，避免誤判握拳
  if (othersCurled && idxOut) return { g: 'pinch', pinchD, nExt, thumbOut, ext };
  if (prevPose === 'pinch' && othersCurled && thumbOut && !indexCurled) {
    return { g: 'pinch', pinchD, nExt, thumbOut, ext };
  }
  if ((othersCurled && indexCurled && !thumbOut) || (nExt === 0 && !thumbOut)) {
    return { g: 'fist', pinchD, nExt, thumbOut, ext };
  }
  return { g: 'move', pinchD, nExt, thumbOut, ext };
}

export function createGestureMachine() {
  const s = {
    pose: 'none',      // 滯後後的姿態
    raw: 'none',
    enterN: 0,
    exitN: 0,
    prevPalm: null,
    prevNow: 0,
    speed: 0,
    vx: 0,
    vy: 0,
    yawVel: 0,
    pitchVel: 0,
    charge: 0,
    grace: 0,
    cooldownUntil: 0,
    rotLockUntil: 0,
    pinchRef: null,
  };

  function resetTracking() {
    s.prevPalm = null;
    s.prevNow = 0;
    s.speed = 0;
    s.vx = 0;
    s.vy = 0;
    s.charge = 0;
    s.grace = 0;
    s.pinchRef = null;
  }

  function resetAll() {
    resetTracking();
    s.pose = 'none';
    s.raw = 'none';
    s.enterN = 0;
    s.exitN = 0;
    s.yawVel = 0;
    s.pitchVel = 0;
  }

  function latchPose(raw) {
    if (raw === s.pose) {
      s.enterN = POSE_ENTER;
      s.exitN = 0;
      return s.pose;
    }
    // pinch 與 open/fist 不要輕易互跳；半開手保持前一個開／合姿態直到連續多幀不同
    if (s.pose === 'none' || s.pose === 'move') {
      if (raw === 'open' || raw === 'fist' || raw === 'pinch') {
        s.enterN = (s.raw === raw) ? s.enterN + 1 : 1;
        s.raw = raw;
        if (s.enterN >= POSE_ENTER) {
          s.pose = raw;
          s.exitN = 0;
        }
      } else {
        s.raw = raw;
        s.enterN = 0;
        s.pose = raw === 'none' ? 'none' : 'move';
      }
      return s.pose;
    }
    // 已鎖定 open/fist/pinch
    const sameFamily = (s.pose === 'pinch' && raw === 'pinch')
      || (s.pose === 'open' && raw === 'open')
      || (s.pose === 'fist' && raw === 'fist');
    if (sameFamily) {
      s.exitN = 0;
      s.raw = raw;
      return s.pose;
    }
    // pinch 過程中食指彎曲常被判成 move，不要立刻取消
    if (s.pose === 'pinch' && (raw === 'move' || raw === 'fist')) {
      s.exitN += 1;
      if (s.exitN < POSE_EXIT + 1) return s.pose;
    } else {
      s.exitN += 1;
    }
    s.raw = raw;
    if (s.exitN >= POSE_EXIT) {
      s.pose = (raw === 'open' || raw === 'fist' || raw === 'pinch') ? raw : (raw === 'none' ? 'none' : 'move');
      s.enterN = POSE_ENTER;
      s.exitN = 0;
    }
    return s.pose;
  }

  function update({ now, landmarks, mirrored = false, ignore = false, zoom = 1, clampZ = (z) => z, clampP = (p) => p }) {
    const out = {
      pose: s.pose,
      raw: 'none',
      status: 'none',
      dYaw: 0,
      dPitch: 0,
      zoom,
      charge: 0,
      chargeLabel: null,
      triggered: null,
      moving: false,
      speed: 0,
      still: false,
    };

    const dt = s.prevNow ? Math.max(0.016, Math.min(0.08, (now - s.prevNow) / 1000)) : 1 / 30;

    if (!landmarks) {
      // 短暫慣性
      if (now >= s.rotLockUntil) {
        const decay = Math.exp(-INERTIA_DECAY * dt);
        s.yawVel *= decay;
        s.pitchVel *= decay;
        if (Math.abs(s.yawVel) > 1e-4) out.dYaw = s.yawVel * dt;
        if (Math.abs(s.pitchVel) > 1e-4) out.dPitch = s.pitchVel * dt;
      } else {
        s.yawVel = 0;
        s.pitchVel = 0;
      }
      if (!landmarks) {
        s.pose = 'none';
        s.raw = 'none';
        s.enterN = 0;
        s.exitN = 0;
        resetTracking();
        s.prevNow = now;
      }
      out.pose = 'none';
      out.status = 'none';
      return out;
    }

    const cls = classifyPose(landmarks, s.pose);
    out.raw = cls.g;
    const pose = latchPose(cls.g);
    out.pose = pose;

    let palm = palmCenter(landmarks);
    if (mirrored) palm = { x: 1 - palm.x, y: palm.y };

    let dx = 0, dy = 0;
    if (s.prevPalm) {
      dx = palm.x - s.prevPalm.x;
      dy = palm.y - s.prevPalm.y;
      s.vx = dx / dt;
      s.vy = dy / dt;
      const inst = Math.hypot(s.vx, s.vy);
      const k = 1 - Math.exp(-dt / SPEED_SMOOTH);
      s.speed += (inst - s.speed) * k;
    }
    s.prevPalm = palm;
    s.prevNow = now;
    out.speed = s.speed;
    out.moving = s.speed >= MOVE_SUPPRESS_SPEED;
    out.still = s.speed <= STILL_SPEED;

    if (ignore) {
      s.charge = 0;
      s.yawVel = 0;
      s.pitchVel = 0;
      out.status = pose === 'none' ? 'none' : pose;
      return out;
    }

    const rotLocked = now < s.rotLockUntil;
    const canRotate = pose !== 'pinch' && !rotLocked;

    // 旋轉：任何姿態都可轉（捏合除外）；有死區與慣性
    if (canRotate) {
      const liveX = Math.abs(dx) > ROT_DEADZONE;
      const liveY = Math.abs(dy) > ROT_DEADZONE;
      if (liveX) {
        s.yawVel = (dx / dt) * YAW_GAIN;
        out.dYaw += dx * YAW_GAIN;
      } else {
        out.dYaw += s.yawVel * dt;
        s.yawVel *= Math.exp(-INERTIA_DECAY * dt);
      }
      if (liveY) {
        s.pitchVel = (dy / dt) * PITCH_GAIN;
        out.dPitch += dy * PITCH_GAIN;
      } else {
        out.dPitch += s.pitchVel * dt;
        s.pitchVel *= Math.exp(-INERTIA_DECAY * dt);
      }
    } else {
      s.yawVel = 0;
      s.pitchVel = 0;
    }

    // 捏合縮放（優先，避免被判成握拳後開合）
    if (pose === 'pinch') {
      s.charge = 0;
      s.grace = 0;
      if (!s.pinchRef) s.pinchRef = { d: Math.max(0.15, cls.pinchD), z: zoom };
      out.zoom = clampZ(s.pinchRef.z * Math.pow(Math.max(0.05, cls.pinchD) / s.pinchRef.d, 0.9));
      out.status = 'pinch';
      return out;
    }
    s.pinchRef = null;

    // 移動夠快時暫停開／合
    const suppressPose = out.moving;
    const want = (!suppressPose && out.still && (pose === 'open' || pose === 'fist'))
      ? pose
      : null;
    const cooling = now < s.cooldownUntil;

    if (want && !cooling) {
      s.grace = CHARGE_GRACE_S;
      s.charge += dt;
    } else if (s.charge > 0 && s.grace > 0 && !cooling && !suppressPose) {
      s.grace -= dt;
    } else {
      s.charge = 0;
      s.grace = 0;
    }

    if (s.charge > 0 && want) {
      out.charge = Math.min(1, s.charge / HOLD_S);
      out.chargeLabel = want === 'open' ? '展開' : '收合';
      out.status = want === 'open' ? 'chargeOpen' : 'chargeFist';
      if (s.charge >= HOLD_S) {
        out.triggered = want === 'open' ? 'explode' : 'collapse';
        s.charge = 0;
        s.grace = 0;
        s.cooldownUntil = now + COOLDOWN_S * 1000;
        s.rotLockUntil = now + ROT_LOCK_S * 1000;
        s.yawVel = 0;
        s.pitchVel = 0;
        out.dYaw = 0;
        out.dPitch = 0;
        out.charge = 0;
        out.chargeLabel = null;
        out.status = want;
      }
    } else if (suppressPose) {
      out.status = 'move';
    } else {
      out.status = pose === 'none' ? 'none' : pose;
    }

    return out;
  }

  return { update, reset: resetAll, getState: () => ({ ...s }) };
}
