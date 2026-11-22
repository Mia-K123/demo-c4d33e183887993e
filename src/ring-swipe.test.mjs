import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import pkg from '/usr/local/lib/pnpm/5/.pnpm/playwright-core@1.59.1/node_modules/playwright-core/index.js';
const { webkit, chromium } = pkg;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8796;
const BASE = (process.env.BASE_URL || `http://127.0.0.1:${PORT}`).replace(/\/+$/, '');
const LIVE = BASE.includes('github.io');
const OUT = path.join(ROOT, 'debug-shots', LIVE ? 'ring-swipe-live' : 'ring-swipe');
fs.mkdirSync(OUT, { recursive: true });

const HAND_B64 = fs.readFileSync(path.join(ROOT, 'test-fixtures/hand-index.jpg')).toString('base64');
// Measured in the source photo (1024x768).
const TIP_IN_IMG = { x: 713, y: 160, w: 1024, h: 768 };
const CAM_W = 640, CAM_H = 480, HAND_SCALE = 0.42;

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.glb': 'model/gltf-binary', '.hdr': 'application/octet-stream',
  '.wasm': 'application/wasm', '.task': 'application/octet-stream',
  '.mind': 'application/octet-stream', '.mp3': 'audio/mpeg',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
};

function serve() {
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://127.0.0.1');
    let relp = decodeURIComponent(u.pathname);
    if (relp.endsWith('/')) relp += 'index.html';
    const file = path.normalize(path.join(ROOT, relp));
    if (!file.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end('not found'); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(data);
    });
  });
  return new Promise((r) => server.listen(PORT, '127.0.0.1', () => r(server)));
}

const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1';
const IPAD_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15';
const ANDROID_UA = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36';

let failed = 0;
const results = [];
function ok(name, cond, extra) {
  if (cond) console.log('  PASS', name);
  else { failed++; console.log('  FAIL', name, extra ?? ''); }
  results.push({ name, ok: !!cond, extra });
}

async function installPointCamera(page) {
  await page.evaluate(async ({ b64, tip, camW, camH, scale }) => {
    const blob = await (await fetch('data:image/jpeg;base64,' + b64)).blob();
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    await img.decode();
    const c = document.createElement('canvas');
    c.width = camW; c.height = camH;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    const hw = Math.round(img.width * scale), hh = Math.round(img.height * scale);
    const tipSx = tip.x * scale, tipSy = tip.y * scale;
    let visible = false, tipNx = 0.62, tipNy = 0.40, jig = 0;
    const draw = () => {
      ctx.fillStyle = '#121212';
      ctx.fillRect(0, 0, camW, camH);
      if (!visible) return;
      const ox = Math.round(tipNx * camW - tipSx);
      const oy = Math.round(tipNy * camH - tipSy);
      ctx.drawImage(img, ox, oy, hw, hh);
    };
    const loop = () => { jig++; draw(); requestAnimationFrame(loop); };
    requestAnimationFrame(loop);
    window.__pointCam = {
      show(nx, ny) { visible = true; if (nx != null) tipNx = nx; if (ny != null) tipNy = ny; draw(); },
      hide() { visible = false; draw(); },
      get() { return { visible, tipNx, tipNy }; },
      canvas: c,
    };
    const hook = async () => c.captureStream(30);
    try { MediaDevices.prototype.getUserMedia = hook; } catch {}
    try { navigator.mediaDevices.getUserMedia = hook; } catch {}
    navigator.mediaDevices.enumerateDevices = async () => ([
      { deviceId: 'front', kind: 'videoinput', label: 'Front Camera', groupId: 'g1', toJSON() { return this; } },
      { deviceId: 'back', kind: 'videoinput', label: 'Back Camera', groupId: 'g2', toJSON() { return this; } },
    ]);
    window.__gumHooked = true;
    window.__pointCam.show(0.62, 0.40);
  }, { b64: HAND_B64, tip: TIP_IN_IMG, camW: CAM_W, camH: CAM_H, scale: HAND_SCALE });
  const probe = await page.evaluate(async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: { facingMode: { ideal: 'environment' } } });
      return { ok: true, hooked: !!window.__gumHooked, n: s.getVideoTracks().length, state: s.getVideoTracks()[0]?.readyState };
    } catch (e) { return { ok: false, err: e.name + ': ' + e.message }; }
  });
  if (!probe.ok) throw new Error('pointing-hand camera hook failed: ' + JSON.stringify(probe));
}

function videoNormFromScreen(sx, sy, sw, sh, vw = 640, vh = 480) {
  const scale = Math.max(sw / vw, sh / vh);
  const dw = vw * scale, dh = vh * scale;
  return { nx: (sx - (sw - dw) / 2) / dw, ny: (sy - (sh - dh) / 2) / dh };
}

async function collect(page) {
  return page.evaluate(() => {
    const d = window.__demo || {};
    const hud = document.querySelector('#trackHudToggle .hud-name')?.textContent || '';
    const label = document.querySelector('#trackLabel .name')?.textContent || '';
    const status = document.querySelector('#trackStatus')?.textContent || '';
    const debug = document.querySelector('#gdebug')?.textContent || '';
    return {
      ready: !!d.mpReady, del: d.delegate || '', err: d.mpError || '',
      item: d.trackItemIndex ?? 0, itemName: d.trackItem || hud || label,
      hud, label, status, debug,
      trackHands: d.trackHands, trackSim: !!d.trackSim,
      camOn: !!d.camOn, trackCam: !!d.trackCamAllowed,
      toast: document.querySelector('#toast')?.textContent || '',
    };
  });
}

async function waitItemChange(page, from, ms = 8000) {
  const start = Date.now();
  while (Date.now() - start < ms) {
    const now = await collect(page);
    if (now.item !== from) return now;
    await page.waitForTimeout(80);
  }
  return collect(page);
}

async function shot(page, name) {
  const dest = path.join(OUT, name + '.png');
  try { await page.evaluate(() => window.__demo.setTrackHudOpen?.(true, { autoHide: false })); } catch {}
  await page.waitForTimeout(80);
  await page.screenshot({ path: dest, fullPage: false });
  return dest;
}

async function startSimulate(page) {
  await page.waitForFunction(() => window.__demo && (window.__demo.modelReady || document.querySelector('#trackSimIntro, #trackSimBtn')), { timeout: 120000 });
  // Prefer the track tab + intro button, same path as a user.
  const tab = await page.$('nav#modeTabs button[data-app-mode="track"]');
  if (tab) await tab.click();
  await page.waitForTimeout(500);
  const already = await page.evaluate(() => !!window.__demo.trackSim);
  if (!already) {
    const btn = await page.$('#trackSimIntro, #trackSimBtn');
    if (btn) await btn.click();
    else await page.evaluate(() => window.__demo.startCardSimulate?.());
  }
  await page.waitForFunction(() => window.__demo?.trackSim === true, { timeout: 60000 });
  await page.waitForFunction(() => {
    const intro = document.querySelector('#trackIntro');
    return !intro || intro.classList.contains('hide') || getComputedStyle(intro).display === 'none';
  }, { timeout: 15000 }).catch(() => {});
  await page.waitForFunction(() => window.__demo?.mpReady === true, { timeout: 120000 });
  // Hand loop may start slightly later.
  const t0 = Date.now();
  while (Date.now() - t0 < 15000) {
    const st = await collect(page);
    if (st.trackHands === 'on' || st.trackHands === 'fallback') return st;
    await page.waitForTimeout(200);
  }
  return collect(page);
}

async function runProfile({ label, type, launchOpts, ua, viewport, dpr, spoof }) {
  const browser = await type.launch({ headless: true, ...launchOpts });
  const context = await browser.newContext({
    viewport, deviceScaleFactor: dpr, isMobile: true, hasTouch: true, userAgent: ua,
  });
  if (type === chromium) {
    try { await context.grantPermissions(['camera'], { origin: BASE }); } catch {}
  }
  await context.addInitScript(({ spoof }) => {
    if (spoof.platform) { try { Object.defineProperty(navigator, 'platform', { get: () => spoof.platform }); } catch {} }
    if (typeof spoof.maxTouchPoints === 'number') {
      try { Object.defineProperty(navigator, 'maxTouchPoints', { get: () => spoof.maxTouchPoints }); } catch {}
    }
  }, { spoof });
  const page = await context.newPage();
  const pageErr = [];
  page.on('pageerror', (e) => pageErr.push(String(e)));
  await page.goto(`${BASE}/?debug=1`, { waitUntil: 'load', timeout: 90000 });
  await page.waitForFunction(() => window.__demo, { timeout: 90000 });
  await installPointCamera(page);

  const started = await startSimulate(page);
  const beforeShot = await shot(page, label + '-before');
  const introHidden = await page.evaluate(() => {
    const intro = document.querySelector('#trackIntro');
    return !intro || intro.classList.contains('hide') || getComputedStyle(intro).display === 'none';
  });
  ok(`${label} simulate + MediaPipe ready, hand loop on, intro hidden`, started.trackSim && started.ready && started.trackHands === 'on' && introHidden, { started, introHidden, beforeShot, pageErr: pageErr.slice(0, 3) });
  console.log('====', label, 'start ====', started);

  // Reset to item 0, hide hand to clear swipe state, then swipe left→right (tip.x increases ⇒ previous item, i.e. -1, wraps to last).
  // Code: tip.x < start ⇒ +1; tip.x > start ⇒ -1. We swipe to the right (finger moves right) to select previous, or left to select next.
  // Use a right-to-left swipe so item 0 becomes 1.
  await page.evaluate(() => { window.__demo.setTrackItem?.(0); window.__pointCam.hide(); });
  await page.waitForTimeout(400);
  await page.evaluate(() => window.__pointCam.show(0.78, 0.40)); // start on the right
  await page.waitForTimeout(500);
  const beforeSwipe = await collect(page);
  // Animate tip to the left (delta ~0.33 > 0.18)
  await page.evaluate(async () => {
    const a = 0.78, b = 0.47, n = 24;
    for (let i = 1; i <= n; i++) {
      const t = i / n, e = t * t * (3 - 2 * t);
      window.__pointCam.show(a + (b - a) * e, 0.40);
      await new Promise((r) => setTimeout(r, 40));
    }
  });
  const afterSwipe = await waitItemChange(page, beforeSwipe.item, 5000);
  const swipeShot = await shot(page, label + '-swipe');
  const swipeOk = afterSwipe.item !== beforeSwipe.item;
  ok(`${label} index swipe changed ring item`, swipeOk, { before: beforeSwipe, after: afterSwipe, swipeShot });
  console.log('====', label, 'swipe ====', { before: beforeSwipe.item, after: afterSwipe.item, names: [beforeSwipe.itemName, afterSwipe.itemName], swipeShot });

  // Hover-hold on a different icon. Prefer projectTrackIcons if present; otherwise scan the ring ellipse.
  await page.evaluate(() => window.__pointCam.hide());
  await page.waitForTimeout(450);
  const afterHide = await collect(page);
  const current = afterHide.item;
  const layout = await page.evaluate(() => {
    const d = window.__demo;
    const fn = d.projectTrackIcons || d.projectIcons;
    const pts = typeof fn === 'function' ? fn() : null;
    return {
      hasApi: !!pts,
      pts: pts || [],
      vw: innerWidth,
      vh: innerHeight,
    };
  });
  let hoverTarget = null;
  if (layout.hasApi && layout.pts.length) {
    const vis = layout.pts.filter((p) => p.z < 1.2 && p.z > -1.2 && p.index !== current);
    vis.sort((a, b) => Math.abs(a.z) - Math.abs(b.z));
    hoverTarget = vis[0] || null;
  }

  let afterHover = afterHide;
  let hoverShot = null;
  const tryHold = async (nx, ny, ms) => {
    await page.evaluate(() => window.__pointCam.hide());
    await page.waitForTimeout(300);
    await page.evaluate(({ nx, ny }) => window.__pointCam.show(nx, ny), { nx, ny });
    const t0 = Date.now();
    while (Date.now() - t0 < ms) {
      const st = await collect(page);
      if (st.item !== current) return st;
      await page.waitForTimeout(80);
    }
    return collect(page);
  };

  if (hoverTarget) {
    const nrm = videoNormFromScreen(hoverTarget.x, hoverTarget.y, layout.vw, layout.vh);
    afterHover = await tryHold(nrm.nx, nrm.ny, 1800);
    hoverShot = await shot(page, label + '-hover');
    ok(`${label} hover-hold changed ring item`, afterHover.item !== current && afterHover.item === hoverTarget.index, { current, afterHover, hoverTarget, nrm, hoverShot });
  } else {
    const candidates = [];
    const cx = layout.vw * 0.5, cy = layout.vh * 0.58, rx = layout.vw * 0.28, ry = layout.vh * 0.16;
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2 - Math.PI / 2;
      candidates.push(videoNormFromScreen(cx + Math.cos(a) * rx, cy + Math.sin(a) * ry, layout.vw, layout.vh));
    }
    let found = false;
    for (let i = 0; i < candidates.length; i++) {
      afterHover = await tryHold(candidates[i].nx, candidates[i].ny, 900);
      if (afterHover.item !== current) { found = true; break; }
    }
    hoverShot = await shot(page, label + '-hover');
    ok(`${label} hover-hold changed ring item`, found, { current, afterHover, scanned: candidates.length, hoverShot });
  }
  console.log('====', label, 'hover ====', { current, after: afterHover.item, names: [afterHide.itemName, afterHover.itemName], hoverShot, hasApi: layout.hasApi, pageErr: pageErr.slice(0, 3) });

  await browser.close();
  return { label, swipeOk, hoverOk: afterHover.item !== current, swipeShot, hoverShot };
}

const server = LIVE ? null : await serve();
try {
  const crLaunch = {
    executablePath: '/home/box/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',
    args: [
      '--use-fake-device-for-media-stream',
      '--use-fake-ui-for-media-stream',
      `--use-file-for-fake-video-capture=/tmp/hand-index-swipe.y4m`,
      '--no-sandbox',
      '--use-angle=swiftshader',
      '--enable-unsafe-swiftshader',
    ],
  };
  // Canvas hook still overrides getUserMedia so hover can be positioned; Y4M is available as the recorded swipe source.
  await runProfile({
    label: 'webkit-iphone', type: webkit, launchOpts: {},
    ua: IPHONE_UA, viewport: { width: 390, height: 844 }, dpr: 3,
    spoof: { platform: 'iPhone', maxTouchPoints: 5 },
  });
  await runProfile({
    label: 'webkit-ipad', type: webkit, launchOpts: {},
    ua: IPAD_UA, viewport: { width: 820, height: 1180 }, dpr: 2,
    spoof: { platform: 'MacIntel', maxTouchPoints: 5 },
  });
  await runProfile({
    label: 'chromium-android', type: chromium, launchOpts: crLaunch,
    ua: ANDROID_UA, viewport: { width: 412, height: 915 }, dpr: 2.6,
    spoof: { platform: 'Linux armv8l', maxTouchPoints: 5 },
  });
} finally {
  if (server) server.close();
}
if (failed) { console.log('FAILED', failed); process.exit(1); }
console.log('RING SWIPE TEST PASSED');
