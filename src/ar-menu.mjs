/** Shared AR coaster menu (icons + speech bubble). Pass in the Three namespace
 *  of the current realm so host r187 and MindAR 0.161 never mix Object3Ds. */

export function paintIcon(item, selected) {
  const c = document.createElement('canvas');
  c.width = 256; c.height = 256;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 256, 256);
  g.beginPath();
  g.arc(128, 128, 118, 0, Math.PI * 2);
  g.fillStyle = selected ? '#f4f7fb' : 'rgba(12,16,24,0.92)';
  g.fill();
  g.lineWidth = selected ? 10 : 6;
  g.strokeStyle = selected ? (item.hue || '#3aa0ff') : 'rgba(255,255,255,0.82)';
  g.stroke();
  const col = selected ? '#151a22' : '#f3f6fa';
  drawGlyph(g, item.glyph || item.id || 'server', 128, 118, 52, col);
  return c;
}

export function paintBubble(name, spec) {
  const c = document.createElement('canvas');
  c.width = 1024; c.height = 280;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 1024, 280);
  const x = 36, y = 52, w = 952, h = 176, r = 40;
  // Pointer on TOP, aimed at the selected icon above the label
  g.fillStyle = 'rgba(255,255,255,0.96)';
  g.beginPath();
  g.moveTo(x + r, y);
  g.lineTo(512 - 22, y);
  g.lineTo(512, 8);
  g.lineTo(512 + 22, y);
  g.arcTo(x + w, y, x + w, y + h, r);
  g.arcTo(x + w, y + h, x, y + h, r);
  g.arcTo(x, y + h, x, y, r);
  g.arcTo(x, y, x + w, y, r);
  g.closePath();
  g.fill();
  g.lineWidth = 3;
  g.strokeStyle = 'rgba(20,28,40,0.12)';
  g.stroke();
  // vertical divider
  g.strokeStyle = 'rgba(20,28,40,0.16)';
  g.beginPath();
  g.moveTo(400, y + 36);
  g.lineTo(400, y + h - 36);
  g.stroke();
  const fit = (text, weight, font, maxW) => {
    let size = font;
    g.font = `${weight} ${size}px "PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif`;
    while (size > 22 && g.measureText(text).width > maxW) {
      size -= 2;
      g.font = `${weight} ${size}px "PingFang TC","Noto Sans TC","Microsoft JhengHei",sans-serif`;
    }
    return size;
  };
  g.textBaseline = 'middle';
  g.fillStyle = '#151a22';
  g.textAlign = 'center';
  fit(name || '', 'bold', 52, 320);
  g.fillText(name || '', 218, y + h / 2);
  g.fillStyle = '#5a6573';
  g.textAlign = 'left';
  const sub = spec ? `${spec}` : '';
  fit(sub, '500', 30, 540);
  g.fillText(sub, 430, y + h / 2);
  return c;
}

function paintGlow() {
  const c = document.createElement('canvas');
  c.width = c.height = 256;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(128, 128, 8, 128, 128, 128);
  grd.addColorStop(0, 'rgba(200, 220, 255, 0.55)');
  grd.addColorStop(0.35, 'rgba(80, 140, 220, 0.22)');
  grd.addColorStop(1, 'rgba(80, 140, 220, 0)');
  g.fillStyle = grd;
  g.fillRect(0, 0, 256, 256);
  return c;
}

export function drawGlyph(ctx, kind, cx, cy, r, color) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = Math.max(4, r * 0.12);
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  if (kind === 'server' || kind === 'all') {
    ctx.strokeRect(-r * 0.75, -r * 0.5, r * 1.5, r);
    for (let i = 0; i < 3; i++) {
      ctx.fillRect(-r * 0.55, -r * 0.32 + i * r * 0.22, r * 0.7, r * 0.1);
      ctx.beginPath();
      ctx.arc(r * 0.4, -r * 0.27 + i * r * 0.22, r * 0.07, 0, Math.PI * 2);
      ctx.fill();
    }
  } else if (kind === 'board') {
    ctx.strokeRect(-r * 0.8, -r * 0.55, r * 1.6, r * 1.1);
    ctx.fillRect(-r * 0.2, -r * 0.2, r * 0.4, r * 0.4);
    ctx.beginPath();
    ctx.moveTo(-r * 0.8, r * 0.15); ctx.lineTo(-r * 1.05, r * 0.15);
    ctx.moveTo(r * 0.8, r * 0.15); ctx.lineTo(r * 1.05, r * 0.15);
    ctx.stroke();
  } else if (kind === 'cpu') {
    ctx.strokeRect(-r * 0.45, -r * 0.45, r * 0.9, r * 0.9);
    for (const s of [-1, 1]) {
      for (let i = -2; i <= 2; i++) {
        ctx.beginPath();
        ctx.moveTo(s * r * 0.45, i * r * 0.14);
        ctx.lineTo(s * r * 0.7, i * r * 0.14);
        ctx.moveTo(i * r * 0.14, s * r * 0.45);
        ctx.lineTo(i * r * 0.14, s * r * 0.7);
        ctx.stroke();
      }
    }
  } else if (kind === 'ram') {
    ctx.strokeRect(-r * 0.85, -r * 0.28, r * 1.7, r * 0.56);
    for (let i = 0; i < 4; i++) ctx.fillRect(-r * 0.7 + i * r * 0.38, -r * 0.14, r * 0.22, r * 0.28);
  } else if (kind === 'drive') {
    ctx.strokeRect(-r * 0.7, -r * 0.45, r * 1.4, r * 0.9);
    ctx.beginPath(); ctx.arc(-r * 0.25, 0, r * 0.18, 0, Math.PI * 2); ctx.stroke();
    ctx.fillRect(r * 0.15, -r * 0.12, r * 0.4, r * 0.24);
  } else if (kind === 'psu') {
    ctx.strokeRect(-r * 0.7, -r * 0.5, r * 1.4, r);
    ctx.beginPath();
    ctx.moveTo(-r * 0.2, -r * 0.22);
    ctx.lineTo(r * 0.12, -r * 0.22);
    ctx.lineTo(-r * 0.1, r * 0.05);
    ctx.lineTo(r * 0.22, r * 0.05);
    ctx.stroke();
  } else if (kind === 'fan') {
    ctx.beginPath(); ctx.arc(0, 0, r * 0.16, 0, Math.PI * 2); ctx.fill();
    for (let i = 0; i < 3; i++) {
      ctx.save();
      ctx.rotate((i * Math.PI * 2) / 3);
      ctx.beginPath();
      ctx.ellipse(0, -r * 0.4, r * 0.2, r * 0.36, 0, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();
    }
  } else if (kind === 'pcie') {
    ctx.strokeRect(-r * 0.75, -r * 0.32, r * 1.5, r * 0.64);
    ctx.fillRect(-r * 0.75, r * 0.32, r * 1.05, r * 0.16);
  }
  ctx.restore();
}

function colorize(tex, THREE) {
  if ('SRGBColorSpace' in THREE && THREE.SRGBColorSpace) tex.colorSpace = THREE.SRGBColorSpace;
  else if (THREE.sRGBEncoding !== undefined) tex.encoding = THREE.sRGBEncoding;
  tex.needsUpdate = true;
  return tex;
}

export function createArMenu(THREE, opts = {}) {
  const items = opts.items || [];
  const n = items.length || 8;
  const radius = opts.radius ?? 0.72;
  const discR = opts.disc ?? 0.11;
  const showCard = opts.showCard !== false;
  const root = new THREE.Group();
  root.name = 'arMenu';

  if (showCard) {
    const cw = opts.cardW ?? 1.05, ch = opts.cardH ?? 0.72;
    const geo = new THREE.PlaneGeometry(cw, ch);
    const mat = new THREE.MeshBasicMaterial({
      color: 0x1a2230,
      transparent: true,
      opacity: 0.88,
      side: THREE.DoubleSide,
    });
    if (opts.cardMap) {
      mat.map = opts.cardMap;
      mat.color.set(0xffffff);
      mat.opacity = 1;
    }
    const card = new THREE.Mesh(geo, mat);
    card.rotation.x = -Math.PI / 2;
    card.position.y = 0.001;
    card.name = 'arCard';
    root.add(card);
    const edge = new THREE.LineLoop(
      new THREE.BufferGeometry().setFromPoints(
        Array.from({ length: 64 }, (_, i) => {
          const a = (i / 64) * Math.PI * 2;
          return new THREE.Vector3(Math.cos(a) * (radius + 0.02), 0.004, Math.sin(a) * (radius + 0.02));
        }),
      ),
      new THREE.LineBasicMaterial({ color: 0xe8ba4a, transparent: true, opacity: 0.55 }),
    );
    root.add(edge);
  }

  const ring = new THREE.Group();
  ring.name = 'arRing';
  root.add(ring);
  const iconGeo = new THREE.CircleGeometry(discR, 40);
  const icons = items.map((item, i) => {
    const tex = colorize(new THREE.CanvasTexture(paintIcon(item, i === 0)), THREE);
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, depthWrite: false });
    const mesh = new THREE.Mesh(iconGeo, mat);
    mesh.name = 'arIcon-' + (item.id || i);
    mesh.userData.itemIndex = i;
    const hold = new THREE.Group();
    const a = Math.PI / 2 - (i / n) * Math.PI * 2; // index 0 at +Z, toward a camera on +Z
    hold.position.set(Math.cos(a) * radius, 0.03, Math.sin(a) * radius);
    hold.add(mesh);
    mesh.position.y = 0;
    ring.add(hold);
    return { item, mesh, mat, hold, tex, i };
  });

  const glowMap = colorize(new THREE.CanvasTexture(paintGlow()), THREE);
  const glow = new THREE.Mesh(
    new THREE.CircleGeometry(opts.glowR ?? 0.28, 48),
    new THREE.MeshBasicMaterial({ map: glowMap, transparent: true, depthWrite: false, side: THREE.DoubleSide }),
  );
  glow.rotation.x = -Math.PI / 2;
  glow.position.y = 0.006;
  glow.name = 'arGlow';
  root.add(glow);

  const bubble = new THREE.Mesh(
    new THREE.PlaneGeometry(0.72, 0.20),
    new THREE.MeshBasicMaterial({ transparent: true, depthWrite: false, side: THREE.DoubleSide }),
  );
  bubble.name = 'arBubble';
  bubble.position.set(0, 0.10, radius + 0.22);
  root.add(bubble);

  const modelAnchor = new THREE.Group();
  modelAnchor.name = 'arModelAnchor';
  modelAnchor.position.y = opts.modelY ?? 0.34;
  if (opts.modelTilt != null) modelAnchor.rotation.x = opts.modelTilt;
  root.add(modelAnchor);
  const modelSpin = new THREE.Group();
  modelSpin.name = 'arModelSpin';
  modelAnchor.add(modelSpin);

  let index = 0;
  let ringRot = 0, ringTarget = 0;
  let switchT = 1, pending = -1, modelS = 1;
  const setBubble = (item) => {
    const c = paintBubble(item?.zh || '', item?.spec || '');
    bubble.material.map?.dispose();
    bubble.material.map = colorize(new THREE.CanvasTexture(c), THREE);
    bubble.material.needsUpdate = true;
  };
  const paintSelected = () => {
    icons.forEach((ic, i) => {
      const on = i === index;
      ic.tex.dispose();
      ic.tex = colorize(new THREE.CanvasTexture(paintIcon(ic.item, on)), THREE);
      ic.mat.map = ic.tex;
      ic.mat.needsUpdate = true;
    });
  };

  const setIndex = (i, { instant = false, silent = false } = {}) => {
    const next = ((i % n) + n) % n;
    if (next === index && switchT >= 1) {
      ringTarget = -next * (Math.PI * 2 / n);
      if (instant) ringRot = ringTarget;
      return index;
    }
    pending = next;
    ringTarget = -next * (Math.PI * 2 / n);
    if (instant) {
      index = next;
      pending = -1;
      switchT = 1;
      ringRot = ringTarget;
      ring.rotation.y = ringRot;
      paintSelected();
      setBubble(items[index]);
      modelS = 1;
      modelSpin.scale.setScalar(1);
      if (!silent && opts.onSelect) opts.onSelect(items[index], index);
    } else {
      switchT = 0;
    }
    return next;
  };

  setBubble(items[0]);
  paintSelected();

  const tmp = new THREE.Vector3();
  const tick = (dt, camera) => {
    ringRot += (ringTarget - ringRot) * Math.min(1, dt * 6);
    ring.rotation.y = ringRot;
    if (switchT < 1) {
      switchT = Math.min(1, switchT + dt / 0.4);
      const mid = switchT >= 0.5;
      if (mid && pending >= 0) {
        index = pending;
        pending = -1;
        paintSelected();
        setBubble(items[index]);
        if (opts.onSelect) opts.onSelect(items[index], index);
      }
      const u = switchT < 0.5 ? switchT * 2 : (1 - (switchT - 0.5) * 2);
      modelS = 1 - 0.22 * Math.sin(Math.min(1, switchT) * Math.PI);
      const fade = 1 - 0.55 * Math.sin(Math.min(1, switchT) * Math.PI);
      modelSpin.scale.setScalar(modelS);
      modelSpin.traverse((o) => {
        if (o.isMesh && o.material && o.userData._menuFade != null) { /* skip */ }
      });
    } else {
      modelS += (1 - modelS) * Math.min(1, dt * 6);
      modelSpin.scale.setScalar(modelS);
    }
    modelSpin.rotation.y += dt * 0.45;
    icons.forEach((ic) => {
      const on = ic.i === index;
      const want = on ? 1.4 : 1;
      const s = ic.mesh.scale.x + (want - ic.mesh.scale.x) * Math.min(1, dt * 8);
      ic.mesh.scale.setScalar(s);
      ic.hold.position.y += ((on ? 0.055 : 0.04) - ic.hold.position.y) * Math.min(1, dt * 8);
      if (camera) {
        ic.mesh.lookAt(camera.position);
      } else {
        ic.mesh.rotation.set(-0.55, 0, 0);
      }
    });
    if (camera) {
      bubble.lookAt(camera.position);
      bubble.position.x = 0;
      bubble.position.y = 0.10;
      bubble.position.z = radius + 0.22;
    }
  };

  const projectIcons = (camera, width, height) => {
    return icons.map((ic) => {
      ic.mesh.getWorldPosition(tmp);
      tmp.project(camera);
      return {
        index: ic.i,
        x: (tmp.x * 0.5 + 0.5) * width,
        y: (-tmp.y * 0.5 + 0.5) * height,
        z: tmp.z,
        r: (onScreenRadius(camera, width) * (ic.i === index ? 1.4 : 1)),
      };
    });
  };

  const onScreenRadius = (camera, width) => {
    const dist = camera.position.length();
    const fov = ((camera.fov || 32) * Math.PI) / 180;
    const world = discR * 1.25;
    const pix = (world / (2 * Math.tan(fov / 2) * Math.max(dist, 0.2))) * width;
    return Math.max(28, pix);
  };

  const pick = (raycaster) => {
    const hits = raycaster.intersectObjects(icons.map((ic) => ic.mesh), false);
    if (!hits.length) return -1;
    const i = hits[0].object.userData.itemIndex;
    return Number.isInteger(i) ? i : -1;
  };

  const dispose = () => {
    icons.forEach((ic) => { ic.tex.dispose(); ic.mat.dispose(); });
    iconGeo.dispose();
    bubble.material.map?.dispose();
    bubble.material.dispose();
    bubble.geometry.dispose();
    glow.material.map?.dispose();
    glow.material.dispose();
    glow.geometry.dispose();
  };

  return {
    root, modelSpin, modelAnchor, icons, bubble, ring,
    setIndex, tick, projectIcons, pick, dispose,
    getIndex: () => index,
    getItems: () => items,
  };
}
