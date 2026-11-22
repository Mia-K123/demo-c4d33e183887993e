import * as THREE from 'three';

export const ANN_KIND = 'assembly-demo-annotations';
export const ANN_VERSION = 1;

export const ANN_TYPES = [
  { id: 'ring', label: '環形', hint: '圈出零件表面的位置' },
  { id: 'arrow', label: '箭頭', hint: '沿表面法線指向該處' },
  { id: 'text', label: '文字', hint: '在該點顯示說明標籤' },
];

export const ANN_COLORS = [
  { id: '#ff4d4d', label: '紅' },
  { id: '#ffb020', label: '橙' },
  { id: '#3ee0c8', label: '青' },
  { id: '#3aa0ff', label: '藍' },
  { id: '#c084fc', label: '紫' },
  { id: '#f0f4f8', label: '白' },
];

export function uid() {
  return 'ann_' + Math.random().toString(36).slice(2, 8) + Date.now().toString(36).slice(-4);
}

export function normalizeAnn(raw, fallbacks = {}) {
  if (!raw || typeof raw !== 'object') return null;
  const type = ['ring', 'circle', 'arrow', 'text'].includes(raw.type) ? (raw.type === 'circle' ? 'ring' : raw.type) : 'ring';
  const color = String(raw.color || '#ffb020');
  const pos = Array.isArray(raw.localPos) && raw.localPos.length >= 3
    ? raw.localPos.map(Number).slice(0, 3)
    : [0, 0, 0];
  const nrm = Array.isArray(raw.localNormal) && raw.localNormal.length >= 3
    ? raw.localNormal.map(Number).slice(0, 3)
    : [0, 1, 0];
  const len = Math.hypot(nrm[0], nrm[1], nrm[2]) || 1;
  return {
    id: String(raw.id || uid()),
    deviceId: String(raw.deviceId || fallbacks.deviceId || ''),
    stepId: String(raw.stepId || fallbacks.stepId || ''),
    partName: String(raw.partName || ''),
    localPos: pos,
    localNormal: [nrm[0] / len, nrm[1] / len, nrm[2] / len],
    type,
    color: /^#([0-9a-fA-F]{6})$/.test(color) ? color : '#ffb020',
    text: String(raw.text || '').slice(0, 80),
  };
}

export function parseAnnotationFile(data, fallbacks = {}) {
  if (typeof data === 'string') data = JSON.parse(data);
  if (!data || typeof data !== 'object') throw new Error('不是有效的 JSON');
  const list = Array.isArray(data) ? data : data.annotations;
  if (!Array.isArray(list)) throw new Error('檔案裡找不到 annotations 陣列');
  const deviceId = data.deviceId || fallbacks.deviceId;
  const anns = list.map((a) => normalizeAnn(a, { ...fallbacks, deviceId })).filter(Boolean);
  return { deviceId, deviceName: data.deviceName || '', annotations: anns, version: data.version || 1 };
}

export function buildExport(deviceId, deviceName, annotations) {
  return {
    version: ANN_VERSION,
    kind: ANN_KIND,
    deviceId,
    deviceName,
    exportedAt: new Date().toISOString(),
    annotations: annotations.map((a) => normalizeAnn(a, { deviceId })).filter(Boolean),
  };
}

export function mergeAnnotations(existing, incoming, { replace = false } = {}) {
  if (replace) {
    const list = incoming.map((a) => normalizeAnn(a)).filter(Boolean);
    return { list, added: list.length, updated: 0 };
  }
  const map = new Map((existing || []).map((a) => [a.id, a]));
  let added = 0, updated = 0;
  for (const a of incoming) {
    const n = normalizeAnn(a);
    if (!n) continue;
    if (map.has(n.id)) updated++;
    else added++;
    map.set(n.id, n);
  }
  return { list: [...map.values()], added, updated };
}

export function downloadJson(filename, obj) {
  const blob = new Blob([JSON.stringify(obj, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500);
}

export function safeFetchUrl(raw, base) {
  const u = new URL(String(raw), base);
  if (u.protocol !== 'http:' && u.protocol !== 'https:') throw new Error('只接受 http(s) 或相對路徑');
  return u.href;
}

// ---------- 3D markers ----------
const geo = {
  ring: new THREE.RingGeometry(0.01, 0.02, 40),
  disc: new THREE.CircleGeometry(0.01, 32),
  shaft: new THREE.CylinderGeometry(0.0035, 0.0035, 0.05, 10),
  cone: new THREE.ConeGeometry(0.011, 0.026, 14),
  pick: new THREE.SphereGeometry(0.02, 8, 8),
};

function mat(color, opacity = 0.95) {
  return new THREE.MeshBasicMaterial({
    color, transparent: true, opacity, side: THREE.DoubleSide,
    depthTest: true, depthWrite: false, toneMapped: false,
  });
}

function makeTextSprite(text, color, selected) {
  const lines = String(text || '註記').split(/\n/).map((s) => s.trim()).filter(Boolean).slice(0, 3);
  const c = document.createElement('canvas');
  const ctx = c.getContext('2d');
  const fontSize = 30;
  ctx.font = `650 ${fontSize}px "Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif`;
  const padX = 18, padY = 12, lineH = 38;
  const textW = Math.max(...lines.map((l) => ctx.measureText(l).width), 24);
  const w = Math.ceil(textW + padX * 2);
  const h = Math.ceil(lines.length * lineH + padY * 2);
  c.width = w * 2; c.height = h * 2;
  const xctx = c.getContext('2d');
  xctx.scale(2, 2);
  xctx.font = `650 ${fontSize}px "Noto Sans TC","PingFang TC","Microsoft JhengHei",sans-serif`;
  const r = 10;
  xctx.fillStyle = 'rgba(10,16,26,0.88)';
  xctx.beginPath();
  xctx.moveTo(r, 0); xctx.arcTo(w, 0, w, h, r); xctx.arcTo(w, h, 0, h, r); xctx.arcTo(0, h, 0, 0, r); xctx.arcTo(0, 0, w, 0, r);
  xctx.closePath(); xctx.fill();
  xctx.lineWidth = selected ? 3 : 2;
  xctx.strokeStyle = color;
  xctx.stroke();
  xctx.fillStyle = '#f4f7fb';
  xctx.textBaseline = 'middle';
  lines.forEach((l, i) => {
    xctx.fillText(l, padX, padY + lineH * i + lineH / 2);
  });
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  const spr = new THREE.Sprite(new THREE.SpriteMaterial({
    map: tex, transparent: true, depthTest: true, sizeAttenuation: true, toneMapped: false,
  }));
  const worldW = 0.11 * (w / 160);
  spr.scale.set(worldW, worldW * (h / w), 1);
  spr.center.set(0.5, 0);
  spr.userData.canvasTex = tex;
  return spr;
}

export function makeMarker(ann, selected = false) {
  const g = new THREE.Group();
  g.name = 'ann:' + ann.id;
  g.userData.annId = ann.id;
  const n = new THREE.Vector3(...ann.localNormal);
  if (n.lengthSq() < 1e-6) n.set(0, 1, 0);
  n.normalize();
  g.position.fromArray(ann.localPos).addScaledVector(n, 0.005);
  g.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), n);

  const col = ann.color || '#ffb020';
  const solid = mat(col, selected ? 1 : 0.95);
  const soft = mat(col, selected ? 0.4 : 0.28);

  if (ann.type === 'arrow') {
    const shaft = new THREE.Mesh(geo.shaft, solid);
    shaft.position.y = 0.028;
    const cone = new THREE.Mesh(geo.cone, solid);
    cone.position.y = 0.066;
    g.add(shaft, cone);
  } else if (ann.type === 'text') {
    // 小圓點當錨點
    const disc = new THREE.Mesh(geo.disc, solid);
    disc.rotation.x = -Math.PI / 2;
    g.add(disc);
  } else {
    const ring = new THREE.Mesh(geo.ring, solid);
    ring.rotation.x = -Math.PI / 2;
    const disc = new THREE.Mesh(geo.disc, soft);
    disc.rotation.x = -Math.PI / 2;
    g.add(ring, disc);
  }

  if (ann.text || ann.type === 'text') {
    const spr = makeTextSprite(ann.text || '註記', col, selected);
    spr.position.y = ann.type === 'arrow' ? 0.11 : 0.055;
    g.add(spr);
  }

  const pick = new THREE.Mesh(geo.pick, new THREE.MeshBasicMaterial({ visible: false }));
  pick.userData.annId = ann.id;
  g.add(pick);
  g.traverse((o) => { if (o.isMesh || o.isSprite) o.userData.annId = ann.id; });
  if (selected) {
    const halo = new THREE.Mesh(new THREE.RingGeometry(0.022, 0.028, 40), mat('#ffffff', 0.85));
    halo.rotation.x = -Math.PI / 2;
    halo.userData.halo = true;
    g.add(halo);
  }
  return g;
}

export function disposeMarker(group) {
  if (!group) return;
  group.removeFromParent();
  group.traverse((o) => {
    if (o.userData?.canvasTex) o.userData.canvasTex.dispose();
    if (o.isSprite && o.material) {
      o.material.map?.dispose();
      o.material.dispose();
    }
    // shared geos — do not dispose
    if (o.isMesh && o.material && !o.material.userData?.shared) {
      if (o.geometry && !Object.values(geo).includes(o.geometry)) o.geometry.dispose();
      if (o.material && !o.userData?.halo) { /* mesh mats are unique */ o.material.dispose?.(); }
      if (o.userData?.halo) o.material.dispose?.();
    }
  });
}

export function signature(ann) {
  return [ann.id, ann.type, ann.color, ann.text, ann.partName, ...(ann.localPos || []), ...(ann.localNormal || [])].join('|');
}

/** 以零件本體頂面中心為錨點（示範或程式新增加用）。 */
export function anchorOnPart(obj, face = 'top') {
  obj.updateMatrixWorld(true);
  const wbox = new THREE.Box3().setFromObject(obj);
  const c = wbox.getCenter(new THREE.Vector3());
  if (face === 'top') c.y = wbox.max.y;
  else if (face === 'front') c.z = wbox.max.z;
  else if (face === 'back') c.z = wbox.min.z;
  else if (face === 'left') c.x = wbox.min.x;
  else if (face === 'right') c.x = wbox.max.x;
  const nWorld = new THREE.Vector3(
    face === 'right' ? 1 : face === 'left' ? -1 : 0,
    face === 'top' ? 1 : face === 'bottom' ? -1 : 0,
    face === 'front' ? 1 : face === 'back' ? -1 : 0,
  );
  const localPos = obj.worldToLocal(c.clone());
  const inv = new THREE.Matrix3().getNormalMatrix(new THREE.Matrix4().copy(obj.matrixWorld).invert());
  const localNormal = nWorld.clone().applyNormalMatrix(inv).normalize();
  return { localPos: localPos.toArray(), localNormal: localNormal.toArray() };
}
