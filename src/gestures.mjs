/** 四種固定手勢：張開＝展開、握拳＝收合、只伸食指左右移＝旋轉、捏合＝縮放。 */

export const HOLD_S = 0.3;
export const COOLDOWN_S = 0.8;
export const VOTE_N = 6;
export const VOTE_NEED = 4;
export const YAW_GAIN = 5.5;
export const PITCH_GAIN = 3.5;
export const ROT_DEADZONE = 0.003;
export const ROT_SMOOTH = 0.45;
export const PINCH_MAX = 0.45;
export const CURL_RATIO = 1.1;

const D = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);
const FINGERS = [
  { tip: 8, mcp: 5, pip: 6 },    // 食指
  { tip: 12, mcp: 9, pip: 10 },  // 中指
  { tip: 16, mcp: 13, pip: 14 }, // 無名
  { tip: 20, mcp: 17, pip: 18 }, // 小指
];

export function palmCenter(lm) {
  return {
    x: (lm[0].x + lm[5].x + lm[17].x) / 3,
    y: (lm[0].y + lm[5].y + lm[17].y) / 3,
  };
}

export function applyMirrorX(palm, { facing, camMode } = {}) {
  const mirrored = camMode === 'dual' || facing === 'user';
  if (!mirrored) return { x: palm.x, y: palm.y, mirrored: false };
  return { x: 1 - palm.x, y: palm.y, mirrored: true };
}

function isCurled(lm, f) {
  return D(lm[f.tip], lm[0]) < D(lm[f.mcp], lm[0]) * CURL_RATIO;
}
function isExtended(lm, f) {
  return D(lm[f.tip], lm[0]) > D(lm[f.pip], lm[0]) * 1.12
    && D(lm[f.tip], lm[0]) > D(lm[f.mcp], lm[0]) * 1.15;
}

/**
 * 優先順序：pinch > index > fist > palm。
 * pinch：拇指與食指靠近（食指未捲進掌心，以免握拳被誤判）。
 * index：只伸食指。
 * fist：四指中至少三指捲曲（不理拇指）。
 * palm：四指都伸直。
 */
export function classifyPose(lm) {
  if (!lm || lm.length < 21) {
    return { g: 'none', pinchD: 0, nExt: 0, nCurled: 0, curled: [], ext: [] };
  }
  const size = D(lm[0], lm[9]) || 1e-3;
  const curled = FINGERS.map((f) => isCurled(lm, f));
  const ext = FINGERS.map((f) => isExtended(lm, f));
  const nCurled = curled.filter(Boolean).length;
  const nExt = ext.filter(Boolean).length;
  const pinchD = D(lm[4], lm[8]) / size;
  const info = { pinchD, nExt, nCurled, curled, ext, thumbOut: D(lm[4], lm[17]) / size > 0.9 };

  // pinch：拇指食指靠近，其他手指不限；食指需伸在外面，才不會把握拳當捏合
  if (pinchD < PINCH_MAX && !curled[0]) return { g: 'pinch', ...info };
  // 只伸食指：左右移動旋轉
  if (ext[0] && nExt === 1) return { g: 'index', ...info };
  // 握拳：至少三指捲曲，不理拇指
  if (nCurled >= 3) return { g: 'fist', ...info };
  // 張開：四指伸直
  if (nExt >= 4) return { g: 'open', ...info };
  return { g: 'move', ...info };
}

function majority(votes) {
  if (!votes.length) return 'none';
  const c = Object.create(null);
  for (const g of votes) c[g] = (c[g] || 0) + 1;
  const ranked = Object.entries(c).sort((a, b) => b[1] - a[1]);
  const [best, n] = ranked[0];
  if ((best === 'open' || best === 'fist' || best === 'pinch' || best === 'index') && n >= VOTE_NEED) return best;
  return 'move';
}

export function createGestureMachine() {
  const s = {
    pose: 'none',
    raw: 'none',
    votes: [],
    prevPalm: null,
    prevNow: 0,
    hold: 0,
    holdPose: null,
    cooldownUntil: 0,
    pinchRef: null,
    smDx: 0,
    smDy: 0,
    lastAction: '',
    lastActionAt: 0,
    nExt: 0,
    nCurled: 0,
    pinchD: 0,
  };

  function resetAll() {
    s.pose = 'none';
    s.raw = 'none';
    s.votes = [];
    s.prevPalm = null;
    s.prevNow = 0;
    s.hold = 0;
    s.holdPose = null;
    s.pinchRef = null;
    s.smDx = 0;
    s.smDy = 0;
  }

  function update({ now, landmarks, mirrored = false, ignore = false, zoom = 1, clampZ = (z) => z }) {
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
      lastAction: s.lastAction,
      nExt: s.nExt,
      nCurled: s.nCurled,
      pinchD: s.pinchD,
      hold: s.hold,
    };

    const dt = s.prevNow ? Math.max(0.016, Math.min(0.08, (now - s.prevNow) / 1000)) : 1 / 30;

    if (!landmarks) {
      resetAll();
      s.prevNow = now;
      out.pose = 'none';
      out.status = 'none';
      return out;
    }

    const cls = classifyPose(landmarks);
    s.raw = cls.g;
    s.nExt = cls.nExt;
    s.nCurled = cls.nCurled;
    s.pinchD = cls.pinchD;
    out.raw = cls.g;
    out.nExt = cls.nExt;
    out.nCurled = cls.nCurled;
    out.pinchD = cls.pinchD;

    s.votes.push(cls.g);
    if (s.votes.length > VOTE_N) s.votes.shift();
    const pose = majority(s.votes);
    s.pose = pose;
    out.pose = pose;

    let palm = palmCenter(landmarks);
    if (mirrored) palm = { x: 1 - palm.x, y: palm.y };
    const dx = s.prevPalm ? palm.x - s.prevPalm.x : 0;
    const dy = s.prevPalm ? palm.y - s.prevPalm.y : 0;
    s.prevPalm = palm;
    s.prevNow = now;

    if (ignore) {
      s.hold = 0;
      s.holdPose = null;
      s.smDx = 0;
      s.smDy = 0;
      out.status = pose === 'none' ? 'none' : pose;
      return out;
    }

    const cooling = now < s.cooldownUntil;

    // 捏合縮放（最高優先）
    if (pose === 'pinch') {
      s.hold = 0;
      s.holdPose = null;
      s.smDx = 0;
      s.smDy = 0;
      if (!s.pinchRef) s.pinchRef = { d: Math.max(0.12, cls.pinchD), z: zoom };
      out.zoom = clampZ(s.pinchRef.z * Math.pow(Math.max(0.05, cls.pinchD) / s.pinchRef.d, 0.9));
      out.status = 'pinch';
      return out;
    }
    s.pinchRef = null;

    // 只伸食指：左右／上下移動旋轉（僅此姿態）
    if (pose === 'index') {
      s.hold = 0;
      s.holdPose = null;
      const lx = Math.abs(dx) > ROT_DEADZONE ? dx : 0;
      const ly = Math.abs(dy) > ROT_DEADZONE ? dy : 0;
      s.smDx += (lx - s.smDx) * ROT_SMOOTH;
      s.smDy += (ly - s.smDy) * ROT_SMOOTH;
      out.dYaw = s.smDx * YAW_GAIN;
      out.dPitch = s.smDy * PITCH_GAIN;
      out.status = 'index';
      return out;
    }
    s.smDx = 0;
    s.smDy = 0;

    // 張開／握拳：6 幀多數決後再維持約 0.3 秒，接著 0.8 秒冷卻
    const want = (pose === 'open' || pose === 'fist') ? pose : null;
    if (want && !cooling) {
      if (s.holdPose === want) s.hold += dt;
      else { s.holdPose = want; s.hold = dt; }
    } else {
      s.hold = 0;
      s.holdPose = null;
    }

    if (want && s.hold > 0 && !cooling) {
      out.charge = Math.min(1, s.hold / HOLD_S);
      out.chargeLabel = want === 'open' ? '展開' : '收合';
      out.status = want === 'open' ? 'chargeOpen' : 'chargeFist';
      if (s.hold >= HOLD_S) {
        out.triggered = want === 'open' ? 'explode' : 'collapse';
        s.lastAction = out.triggered;
        s.lastActionAt = now;
        s.hold = 0;
        s.holdPose = null;
        s.votes = [];
        s.cooldownUntil = now + COOLDOWN_S * 1000;
        out.charge = 0;
        out.chargeLabel = null;
        out.status = want;
        out.lastAction = s.lastAction;
      }
    } else {
      out.status = pose === 'none' ? 'none' : pose;
    }

    return out;
  }

  return { update, reset: resetAll, getState: () => ({ ...s, votes: s.votes.slice() }) };
}
