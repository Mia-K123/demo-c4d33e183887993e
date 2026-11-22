import * as THREE from 'three';
import { DEVICES, DEFAULT_DEVICE, SUPPORTED_CODES, parseDeviceCode } from './steps.js';
import {
  normalizeAnn, parseAnnotationFile, buildExport, mergeAnnotations, downloadJson,
  safeFetchUrl, makeMarker, disposeMarker, signature, anchorOnPart, ANN_TYPES, ANN_COLORS,
} from './annotations.js';
import { decodeQRFromSource, decodeQRFromBlob } from './qr.js';

const STORE_KEY = 'assembly-demo-v1';
const HIGHLIGHT = 0xffb020;
const $ = (s, root = document) => root.querySelector(s);

export { parseDeviceCode, SUPPORTED_CODES, DEVICES, DEFAULT_DEVICE };

export function createAssembly(ctx) {
  const {
    parts, pivot, camera, renderer, canvas, toast, rel,
    onScanStart, onScanEnd,
  } = ctx;

  const state = {
    active: false,
    deviceId: DEFAULT_DEVICE,
    step: 0,
    done: {},
    annotations: [],
    selectedAnnId: null,
    annotating: false,
    anim: null,
    ready: false,
  };

  const annMeshes = new Map();
  const arrowMat = new THREE.MeshBasicMaterial({ color: HIGHLIGHT, transparent: true, opacity: 0.8, depthTest: false, toneMapped: false });
  const arrow = new THREE.Group();
  {
    const shaft = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 1, 10), arrowMat);
    shaft.position.y = 0.5;
    const cone = new THREE.Mesh(new THREE.ConeGeometry(0.024, 0.07, 12), arrowMat);
    cone.position.y = 1.04;
    arrow.add(shaft, cone);
    arrow.visible = false;
    pivot.add(arrow);
  }

  const _ndc = new THREE.Vector2();
  const _pickRay = new THREE.Raycaster();
  let draft = null;
  const params = () => new URLSearchParams(location.search);

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function ease(x) { return x <= 0 ? 0 : x >= 1 ? 1 : x * x * (3 - 2 * x); }
  function currentDevice() { return DEVICES[state.deviceId] || DEVICES[DEFAULT_DEVICE]; }
  function currentSteps() { return currentDevice().steps; }
  function currentStep() { return currentSteps()[state.step] || currentSteps()[0]; }

  function readStore() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || '{}') || {}; }
    catch { return {}; }
  }
  function writeStore(fn) {
    if (params().get('nostore') === '1') return;
    const data = readStore();
    fn(data);
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch {}
  }
  function persist() {
    writeStore((data) => {
      data.lastDevice = state.deviceId;
      data.devices = data.devices || {};
      data.devices[state.deviceId] = { step: state.step, done: { ...state.done }, annotations: state.annotations };
    });
  }

  function insertDir(part, step) {
    if (part.off.length() > 0.02) return part.off.clone().normalize();
    return new THREE.Vector3(...(step.insert || [0, 1, 0])).normalize();
  }
  function flyDist(part) { return Math.max(part.off.length() * 1.35, 0.14); }

  function prepareMeshes() {
    for (const p of parts) {
      if (p.name == null) p.name = p.obj?.name;
      p.obj.traverse((mesh) => {
        if (!mesh.isMesh || mesh.userData.workMats) return;
        const src = [].concat(mesh.material);
        const clones = src.map((m) => {
          const c = m.clone();
          c.userData.orig = {
            color: c.color ? c.color.clone() : null,
            emissive: c.emissive ? c.emissive.clone() : null,
            emissiveIntensity: c.emissiveIntensity ?? 0,
            opacity: c.opacity,
            transparent: c.transparent,
            depthWrite: c.depthWrite,
          };
          return c;
        });
        mesh.material = clones.length === 1 ? clones[0] : clones;
        mesh.userData.workMats = clones;
        if (mesh.geometry && !mesh.userData.outline) {
          const outline = new THREE.LineSegments(
            new THREE.EdgesGeometry(mesh.geometry, 28),
            new THREE.LineBasicMaterial({ color: HIGHLIGHT, transparent: true, opacity: 0, depthTest: false }),
          );
          outline.name = '__outline';
          outline.renderOrder = 9;
          outline.visible = false;
          mesh.add(outline);
          mesh.userData.outline = outline;
        }
      });
    }
  }

  function eachMat(obj, fn) {
    obj.traverse((o) => {
      if (!o.isMesh || !o.userData.workMats) return;
      for (const m of o.userData.workMats) fn(m, o);
    });
  }
  function setOutline(obj, on) {
    obj.traverse((o) => {
      if (o.userData?.outline) {
        o.userData.outline.visible = !!on;
        o.userData.outline.material.opacity = on ? 0.85 : 0;
      }
    });
  }
  function applyMaterial(part, mode, pulse = 0) {
    eachMat(part.obj, (m) => {
      const o = m.userData.orig;
      if (!o) return;
      if (o.color) m.color.copy(o.color);
      if (m.emissive) m.emissive.copy(o.emissive || new THREE.Color(0x000000));
      m.emissiveIntensity = o.emissiveIntensity;
      m.opacity = o.opacity;
      m.transparent = o.transparent;
      m.depthWrite = o.depthWrite;
      if (mode === 'future') {
        m.transparent = true; m.opacity = 0.12; m.depthWrite = false;
        if (m.color) m.color.multiplyScalar(0.7);
      } else if (mode === 'current') {
        if (m.emissive) m.emissive.set(HIGHLIGHT);
        m.emissiveIntensity = 0.35 + 0.35 * pulse;
      }
    });
    setOutline(part.obj, mode === 'current');
  }

  function restoreDemoMaterials() {
    for (const p of parts) {
      p.obj.visible = true;
      p.obj.position.copy(p.base);
      applyMaterial(p, 'done', 0);
      setOutline(p.obj, false);
    }
    arrow.visible = false;
    hideAnnotationMeshes();
  }

  function partMode(part, stepIdx) {
    const steps = currentSteps();
    const hide = new Set();
    steps.forEach((s, i) => { if (i > stepIdx) (s.hideFuture || []).forEach((g) => hide.add(g)); });
    const si = steps.findIndex((s) => s.groups.includes(part.group));
    if (si < 0) return 'hidden';
    if (si === stepIdx) return 'current';
    if (si < stepIdx) return 'done';
    if (hide.has(part.group)) return 'hidden';
    return 'future';
  }

  function setPartPosition(part, k, step) {
    const dir = insertDir(part, step);
    part.obj.position.copy(part.base).addScaledVector(dir, (1 - k) * flyDist(part));
  }

  function applyStepVisuals(now = performance.now()) {
    if (!state.active) return;
    const step = currentStep();
    const anim = state.anim;
    const currentParts = parts.filter((p) => step.groups.includes(p.group));
    const pulse = 0.5 + 0.5 * Math.sin((now / 1000) * 3.2);
    for (const p of parts) {
      const mode = partMode(p, state.step);
      if (mode === 'hidden') { p.obj.visible = false; continue; }
      p.obj.visible = true;
      applyMaterial(p, mode, pulse);
      if (mode === 'current' && anim) {
        const idx = currentParts.indexOf(p);
        const t = (now - anim.start - idx * anim.stagger) / anim.dur;
        setPartPosition(p, ease(clamp(t, 0, 1)), step);
      } else if (mode === 'current') setPartPosition(p, 1, step);
      else p.obj.position.copy(p.base);
    }
    updateArrow(currentParts, step, anim ? 1 : 0.45);
    syncAnnotationVisuals();
    if (anim) {
      const doneAt = anim.start + anim.dur + Math.max(0, currentParts.length - 1) * anim.stagger + 400;
      if (now >= doneAt) state.anim = null;
    }
  }

  function updateArrow(currentParts, step, opacity) {
    if (!currentParts.length || opacity <= 0.01) { arrow.visible = false; return; }
    arrow.visible = true;
    arrowMat.opacity = 0.2 + 0.75 * opacity;
    const dir = insertDir(currentParts[0], step);
    const box = new THREE.Box3();
    for (const p of currentParts) box.expandByObject(p.obj);
    const c = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const len = clamp(Math.max(size.y, size.z, 0.22) * 0.55, 0.22, 0.4);
    const to = dir.clone().multiplyScalar(-1).normalize();
    const mid = c.clone().addScaledVector(dir, len * 0.55);
    pivot.updateMatrixWorld(true);
    arrow.position.copy(pivot.worldToLocal(mid.clone()));
    arrow.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), to);
    arrow.scale.set(1, len, 1);
  }

  function replay(stepIdx = state.step) {
    const step = currentSteps()[stepIdx];
    const n = parts.filter((p) => step.groups.includes(p.group)).length;
    state.anim = { start: performance.now() + 30, dur: 1050, stagger: n > 8 ? 45 : 70 };
  }
  function setStep(i, { play = true, save = true } = {}) {
    const steps = currentSteps();
    state.step = clamp(i, 0, steps.length - 1);
    const sid = currentStep().id;
    if (state.selectedAnnId) {
      const sel = state.annotations.find((a) => a.id === state.selectedAnnId);
      if (!sel || sel.stepId !== sid) state.selectedAnnId = null;
    }
    if (play) replay(state.step); else state.anim = null;
    renderAll();
    if (save) persist();
  }
  function next() { if (state.step < currentSteps().length - 1) setStep(state.step + 1); }
  function prev() { if (state.step > 0) setStep(state.step - 1); }

  function toggleDone(on) {
    const id = currentStep().id;
    if (on) state.done[id] = true; else delete state.done[id];
    renderAll(); persist();
  }

  function loadDevice(code, opts = {}) {
    const id = parseDeviceCode(code) || (DEVICES[code] ? code : null);
    if (!id) return false;
    state.deviceId = id;
    const saved = readStore().devices?.[id];
    const steps = currentDevice().steps;
    let step = Number.isInteger(opts.step) ? opts.step : (saved?.step ?? 0);
    state.done = { ...(saved?.done || {}) };
    if (opts.clearDone) state.done = {};
    if (!opts.keepAnnotations) {
      state.annotations = (saved?.annotations || []).map((a) => normalizeAnn(a, { deviceId: id })).filter(Boolean);
      state.selectedAnnId = null;
      clearAnnotationMeshes();
    }
    setStep(clamp(step, 0, steps.length - 1), { play: opts.play !== false, save: true });
    return true;
  }

  function renderDevice() {
    const d = currentDevice();
    const t = $('#docTitle'); if (t) t.textContent = d.blurb.includes('L11') ? 'L11 組裝教學' : d.name;
    const n = $('#deviceName'); if (n) n.textContent = d.name;
    const c = $('#deviceCode'); if (c) c.textContent = d.id;
  }
  function renderList() {
    const ul = $('#stepList'); if (!ul) return;
    const steps = currentSteps();
    const doneN = steps.filter((s) => state.done[s.id]).length;
    const pt = $('#progText'); if (pt) pt.textContent = `${doneN}／${steps.length} 完成`;
    const bar = $('#progBar'); if (bar) bar.style.width = `${(doneN / steps.length) * 100}%`;
    ul.innerHTML = '';
    steps.forEach((s, i) => {
      const li = document.createElement('li');
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'step-item' + (i === state.step ? ' current' : '') + (state.done[s.id] ? ' done' : '');
      b.innerHTML = `<span class="idx">${i + 1}</span><span class="name">${s.title}</span><span class="mark">${state.done[s.id] ? '✓' : ''}</span>`;
      b.onclick = () => { setStep(i); document.body.classList.remove('sidebar-open'); };
      li.appendChild(b); ul.appendChild(li);
    });
  }
  function renderCard() {
    const s = currentStep();
    const steps = currentSteps();
    const k = $('#stepKicker'); if (k) k.textContent = `步驟 ${state.step + 1}／${steps.length}`;
    const t = $('#stepTitle'); if (t) t.textContent = s.title;
    const inst = $('#stepInst'); if (inst) inst.textContent = s.instruction || s.brief || '';
    const notes = $('#stepNotes'); if (notes) notes.textContent = s.notes || '';
    const tools = $('#stepTools');
    if (tools) {
      tools.innerHTML = (s.tools || []).map((x) =>
        `<div class="tool"><b>${x.label}</b><span>${x.value}</span>${x.example ? `<small>示例</small>` : ''}</div>`).join('');
    }
    const chk = $('#chkDone'); if (chk) chk.checked = !!state.done[s.id];
    const prevB = $('#btnPrev'); if (prevB) prevB.disabled = state.step <= 0;
    const nextB = $('#btnNext'); if (nextB) nextB.disabled = state.step >= steps.length - 1;
    renderAnnList();
    const card = $('#asmCard');
    if (card) document.documentElement.style.setProperty('--sheet-h', Math.round(card.getBoundingClientRect().height) + 'px');
  }
  function renderAll() { renderDevice(); renderList(); renderCard(); }

  function hideAnnotationMeshes() { for (const rec of annMeshes.values()) rec.group.visible = false; }
  function clearAnnotationMeshes() {
    for (const rec of annMeshes.values()) disposeMarker(rec.group);
    annMeshes.clear();
  }
  function findPartByName(name) { return parts.find((p) => (p.name || p.obj.name) === name); }
  function syncAnnotationVisuals() {
    const sid = currentStep().id;
    const want = new Set();
    for (const ann of state.annotations) {
      if (ann.stepId && ann.stepId !== sid) continue;
      const part = findPartByName(ann.partName);
      if (!part || !part.obj.visible) continue;
      want.add(ann.id);
      const sig = signature(ann) + (state.selectedAnnId === ann.id ? '|sel' : '');
      let rec = annMeshes.get(ann.id);
      if (!rec || rec.sig !== sig || rec.part !== part.obj) {
        if (rec) disposeMarker(rec.group);
        const g = makeMarker(ann, state.selectedAnnId === ann.id);
        part.obj.add(g);
        rec = { group: g, sig, part: part.obj };
        annMeshes.set(ann.id, rec);
      }
      rec.group.visible = true;
    }
    for (const [id, rec] of annMeshes) {
      if (!want.has(id)) { disposeMarker(rec.group); annMeshes.delete(id); }
    }
  }
  function renderAnnList() {
    const ul = $('#annList'); if (!ul) return;
    const sid = currentStep().id;
    const list = state.annotations.filter((a) => !a.stepId || a.stepId === sid);
    ul.innerHTML = '';
    for (const a of list) {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'ann-item' + (a.id === state.selectedAnnId ? ' sel' : '');
      const typ = ANN_TYPES.find((t) => t.id === a.type)?.label || a.type;
      b.innerHTML = `<span class="ann-dot" style="background:${a.color}"></span><span class="ttl">${a.text || typ}</span><span class="kind">${typ}</span>`;
      b.onclick = () => { selectAnnotation(a.id); openAnnEditor(a.id); };
      ul.appendChild(b);
    }
  }

  function addAnnotation(partial) {
    const ann = normalizeAnn({
      ...partial,
      deviceId: state.deviceId,
      stepId: partial.stepId || currentStep().id,
    }, { deviceId: state.deviceId, stepId: currentStep().id });
    state.annotations.push(ann);
    state.selectedAnnId = ann.id;
    persist(); renderAnnList(); syncAnnotationVisuals();
    return ann;
  }
  function updateAnnotation(id, patch) {
    const i = state.annotations.findIndex((a) => a.id === id);
    if (i < 0) return;
    state.annotations[i] = normalizeAnn({ ...state.annotations[i], ...patch });
    persist(); renderAnnList(); syncAnnotationVisuals();
  }
  function removeAnnotation(id) {
    state.annotations = state.annotations.filter((a) => a.id !== id);
    if (state.selectedAnnId === id) state.selectedAnnId = null;
    persist(); renderAnnList(); syncAnnotationVisuals();
  }
  function selectAnnotation(id) { state.selectedAnnId = id; renderAnnList(); syncAnnotationVisuals(); }
  function setAnnotating(on) {
    state.annotating = !!on;
    document.body.classList.toggle('annotating', state.annotating);
    const b = $('#btnAnnotate'); if (b) b.classList.toggle('on', state.annotating);
    if (state.annotating) toast('點模型表面以放置標註');
  }
  function exportAnnotations() {
    const d = currentDevice();
    downloadJson(`${d.id}.annotations.json`, buildExport(d.id, d.name, state.annotations));
  }
  function importAnnotations(data, { replace = false } = {}) {
    const parsed = parseAnnotationFile(data, { deviceId: state.deviceId });
    if (parsed.deviceId && parsed.deviceId !== state.deviceId && DEVICES[parsed.deviceId]) {
      loadDevice(parsed.deviceId, { keepAnnotations: true, play: false });
    }
    const r = mergeAnnotations(state.annotations, parsed.annotations, { replace });
    state.annotations = r.list;
    persist(); renderAll(); syncAnnotationVisuals();
    return r;
  }
  async function loadAnnotationsFromUrl(raw) {
    const href = safeFetchUrl(raw, document.baseURI);
    const res = await fetch(href);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    const data = await res.json();
    const r = importAnnotations(data, { replace: false });
    return r.added + r.updated;
  }

  function findPartByObject(obj) {
    let o = obj;
    while (o) {
      const p = parts.find((x) => x.obj === o || x.obj === o.parent);
      if (p) return p;
      const hit = parts.find((x) => {
        let n = o; while (n) { if (n === x.obj) return true; n = n.parent; }
        return false;
      });
      if (hit) return hit;
      o = o.parent;
    }
    return null;
  }

  function pickAt(cx, cy) {
    const rect = canvas.getBoundingClientRect();
    _ndc.set(((cx - rect.left) / rect.width) * 2 - 1, -((cy - rect.top) / rect.height) * 2 + 1);
    const cam = renderer.xr.isPresenting ? renderer.xr.getCamera() : camera;
    _pickRay.setFromCamera(_ndc, cam);
    const annObjs = [...annMeshes.values()].map((r) => r.group);
    const annHits = _pickRay.intersectObjects(annObjs, true);
    const hits = _pickRay.intersectObjects(parts.map((p) => p.obj).filter((o) => o.visible), true);
    return { annHits, hits };
  }

  function beginAnnFromHit(hit) {
    const part = findPartByObject(hit.object);
    if (!part) { toast('請點在零件表面上'); return; }
    const localPos = part.obj.worldToLocal(hit.point.clone());
    const inv = new THREE.Matrix3().getNormalMatrix(new THREE.Matrix4().copy(part.obj.matrixWorld).invert());
    const localNormal = hit.face
      ? hit.face.normal.clone().applyNormalMatrix(inv).normalize()
      : new THREE.Vector3(0, 1, 0);
    draft = {
      partName: part.name || part.obj.name,
      localPos: localPos.toArray(),
      localNormal: localNormal.toArray(),
      type: 'ring',
      color: '#ffb020',
      text: '',
    };
    openAnnEditor(null, draft);
  }

  function openAnnEditor(id, d = null) {
    const modal = $('#annModal'); if (!modal) return;
    const ann = id ? state.annotations.find((a) => a.id === id) : d;
    draft = id ? { ...ann } : d;
    $('#annModalTitle').textContent = id ? '編輯標註' : '新增標註';
    $('#annPartLine').textContent = '零件：' + (ann?.partName || '—');
    $('#annText').value = ann?.text || '';
    $('#btnAnnDelete').hidden = !id;
    const types = $('#annTypes'); types.innerHTML = '';
    for (const t of ANN_TYPES) {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'btn small' + ((draft?.type || 'ring') === t.id ? ' primary' : '');
      b.textContent = t.label;
      b.onclick = () => { draft.type = t.id; openAnnEditor(id, draft); };
      types.appendChild(b);
    }
    const sw = $('#annColors'); sw.innerHTML = '';
    for (const c of ANN_COLORS) {
      const b = document.createElement('button');
      b.type = 'button'; b.className = 'swatch' + ((draft?.color || '#ffb020') === c.id ? ' sel' : '');
      b.style.background = c.id; b.title = c.label;
      b.onclick = () => { draft.color = c.id; openAnnEditor(id, draft); };
      sw.appendChild(b);
    }
    modal.hidden = false;
  }
  function closeAnnModal() { $('#annModal').hidden = true; draft = null; setAnnotating(false); }
  function saveAnnEditor() {
    if (!draft) return;
    draft.text = ($('#annText').value || '').slice(0, 80);
    if (draft.id && state.annotations.some((a) => a.id === draft.id)) updateAnnotation(draft.id, draft);
    else addAnnotation(draft);
    closeAnnModal();
  }

  let scanStream = null, scanLoop = 0, scanBusy = false;
  function stopScanStream() {
    if (scanLoop) cancelAnimationFrame(scanLoop);
    scanLoop = 0; scanBusy = false;
    if (scanStream) { scanStream.getTracks().forEach((t) => t.stop()); scanStream = null; }
    const v = $('#scanVideo'); if (v) v.srcObject = null;
  }
  function applyScanned(raw) {
    const code = parseDeviceCode(raw);
    if (!code) {
      toast(`無法辨識此設備代碼「${String(raw).slice(0, 48)}」。目前支援 ${SUPPORTED_CODES.join('、')}。`);
      return false;
    }
    loadDevice(code);
    toast(`已載入「${currentDevice().name}」教學`);
    return true;
  }
  async function openScanner() {
    const modal = $('#scanModal'); modal.hidden = false;
    $('#qrManual').value = '';
    if (onScanStart) await onScanStart();
    try {
      scanStream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } },
      });
      const sv = $('#scanVideo');
      sv.srcObject = scanStream; sv.muted = true; sv.playsInline = true;
      await sv.play();
      const tick = async () => {
        if (!scanStream) return;
        if (!scanBusy && sv.readyState >= 2) {
          scanBusy = true;
          try {
            const raw = await decodeQRFromSource(sv);
            if (raw && applyScanned(raw)) { closeScanner(); return; }
          } catch (err) { console.warn(err); }
          scanBusy = false;
        }
        scanLoop = requestAnimationFrame(tick);
      };
      scanLoop = requestAnimationFrame(tick);
    } catch (e) {
      toast('無法開啟後鏡頭，請改用上傳圖片或手動輸入。' + (e.message ? `（${e.message}）` : ''));
    }
  }
  function closeScanner() {
    stopScanStream();
    $('#scanModal').hidden = true;
    if (onScanEnd) onScanEnd();
  }

  function onCanvasPointer(e) {
    if (!state.active) return false;
    if (!state.annotating && !e.altKey) {
      const { annHits } = pickAt(e.clientX, e.clientY);
      if (annHits.length) {
        const id = annHits[0].object.userData?.annId;
        if (id) { selectAnnotation(id); openAnnEditor(id); return true; }
      }
      return false;
    }
    const { hits } = pickAt(e.clientX, e.clientY);
    if (hits.length) beginAnnFromHit(hits[0]);
    return true;
  }

  function bindUi() {
    $('#btnNext')?.addEventListener('click', () => next());
    $('#btnPrev')?.addEventListener('click', () => prev());
    $('#btnReplay')?.addEventListener('click', () => replay());
    $('#chkDone')?.addEventListener('change', (e) => toggleDone(e.target.checked));
    $('#btnMenu')?.addEventListener('click', () => document.body.classList.toggle('sidebar-open'));
    $('#backdrop')?.addEventListener('click', () => document.body.classList.remove('sidebar-open'));
    $('#btnScan')?.addEventListener('click', () => openScanner());
    $('#btnScanClose')?.addEventListener('click', () => closeScanner());
    $('#scanModal')?.addEventListener('click', (e) => { if (e.target === $('#scanModal')) closeScanner(); });
    $('#btnManual')?.addEventListener('click', () => {
      const v = $('#qrManual').value.trim();
      if (v && applyScanned(v)) closeScanner();
    });
    $('#qrManual')?.addEventListener('keydown', (e) => { if (e.key === 'Enter') $('#btnManual').click(); });
    $('#qrFile')?.addEventListener('change', async (e) => {
      const f = e.target.files?.[0]; e.target.value = '';
      if (!f) return;
      try {
        const raw = await decodeQRFromBlob(f);
        if (raw && applyScanned(raw)) closeScanner();
        else if (!raw) toast('圖片中找不到 QR 代碼');
      } catch (err) { toast('無法讀取圖片：' + (err.message || err)); }
    });
    $('#btnAnnotate')?.addEventListener('click', () => setAnnotating(!state.annotating));
    $('#btnAnnExport')?.addEventListener('click', () => exportAnnotations());
    $('#annFile')?.addEventListener('change', async (e) => {
      const f = e.target.files?.[0]; e.target.value = '';
      if (!f) return;
      try {
        const data = JSON.parse(await f.text());
        const r = importAnnotations(data);
        toast(`已匯入標註（新增 ${r.added}，更新 ${r.updated}）`);
      } catch (err) { toast('匯入失敗：' + (err.message || err)); }
    });
    $('#btnAnnSave')?.addEventListener('click', () => saveAnnEditor());
    $('#btnAnnCancel')?.addEventListener('click', () => closeAnnModal());
    $('#btnAnnDelete')?.addEventListener('click', () => {
      if (draft?.id) removeAnnotation(draft.id);
      closeAnnModal();
    });
    $('#annModal')?.addEventListener('click', (e) => { if (e.target === $('#annModal')) closeAnnModal(); });
    $('#btnResetAsm')?.addEventListener('click', () => {
      if (!confirm('重設此設備的組裝進度，從頭開始？')) return;
      state.done = {}; setStep(0, { play: true, save: true }); toast('已重設進度');
    });
    const card = $('#asmCard');
    if (card) {
      let x0 = 0, t0 = 0;
      card.addEventListener('touchstart', (e) => { x0 = e.touches[0].clientX; t0 = performance.now(); }, { passive: true });
      card.addEventListener('touchend', (e) => {
        const dx = e.changedTouches[0].clientX - x0;
        if (performance.now() - t0 < 500 && Math.abs(dx) > 50) { if (dx < 0) next(); else prev(); }
      });
    }
    const sheetBtn = $('#btnSheet');
    const mq = matchMedia('(max-width: 900px)');
    const setSheet = (exp) => {
      const on = mq.matches;
      document.body.classList.toggle('sheet-expanded', on && exp);
      document.body.classList.toggle('sheet-collapsed', on && !exp);
      if (sheetBtn) { sheetBtn.hidden = !on; sheetBtn.textContent = exp ? '收合' : '說明'; }
    };
    sheetBtn?.addEventListener('click', () => setSheet(!document.body.classList.contains('sheet-expanded')));
    mq.addEventListener?.('change', () => setSheet(false));
    setSheet(false);
    canvas.addEventListener('pointerdown', (e) => {
      if (onCanvasPointer(e)) e.stopPropagation();
    });
  }

  function bootFromUrl() {
    const p = params();
    const store = readStore();
    const qDev = p.get('device') || p.get('code');
    const dev = parseDeviceCode(qDev) || (DEVICES[qDev] ? qDev : null) || store.lastDevice || DEFAULT_DEVICE;
    const qStep = p.has('step') ? Number(p.get('step')) : undefined;
    const saved = store.devices?.[dev];
    state.deviceId = DEVICES[dev] ? dev : DEFAULT_DEVICE;
    state.done = { ...(saved?.done || {}) };
    state.annotations = (saved?.annotations || []).map((a) => normalizeAnn(a, { deviceId: state.deviceId })).filter(Boolean);
    const idx = Number.isFinite(qStep) ? qStep : (saved?.step ?? 0);
    setStep(idx, { play: true, save: false });
  }

  async function loadAnnParam() {
    const annParam = params().get('ann');
    if (!annParam) return;
    try {
      const n = await loadAnnotationsFromUrl(annParam);
      toast(`已載入遠端標註（${n} 筆）`);
    } catch (e) {
      toast('無法載入標註檔：' + (e.message || e));
    }
  }

  function setActive(on) {
    state.active = !!on;
    if (on) {
      prepareMeshes();
      if (!state.ready) { bootFromUrl(); state.ready = true; }
      renderAll();
      applyStepVisuals();
    } else {
      restoreDemoMaterials();
      setAnnotating(false);
      closeAnnModal();
      closeScanner();
      document.body.classList.remove('sidebar-open', 'sheet-expanded', 'sheet-collapsed');
    }
  }

  bindUi();

  return {
    state,
    setActive,
    tick: applyStepVisuals,
    next, prev, replay, setStep, loadDevice, applyScanned,
    importAnnotations, exportAnnotations, loadAnnotationsFromUrl, loadAnnParam,
    addAnnotation, removeAnnotation, getAnnotations: () => state.annotations.slice(),
    currentStep, currentDevice, currentSteps, partMode,
    stopScanStream,
    getVisibility() {
      const out = {};
      for (const p of parts) out[p.name || p.obj.name] = { group: p.group, mode: partMode(p, state.step), visible: p.obj.visible };
      return out;
    },
  };
}
