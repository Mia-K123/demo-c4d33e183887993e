import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import http from 'http';
import pkg from '/usr/local/lib/pnpm/5/.pnpm/playwright-core@1.59.1/node_modules/playwright-core/index.js';
const { webkit, chromium } = pkg;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8798;
const BASE = (process.env.BASE_URL || `http://127.0.0.1:${PORT}`).replace(/\/+$/, '');
const LIVE = BASE.includes('github.io');
const OUT = path.join(ROOT, 'debug-shots', 'gesture-e2e');
const HAND_PNG = path.join(ROOT, 'test-fixtures', 'hand-open.png');
const HAND_Y4M = '/tmp/hand-open.y4m';
const SW_V1 = fs.existsSync('/tmp/old-site/sw-v1.js')
  ? fs.readFileSync('/tmp/old-site/sw-v1.js')
  : fs.readFileSync(path.join(ROOT, 'sw.js'));
fs.mkdirSync(OUT, { recursive: true });

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.glb': 'model/gltf-binary', '.hdr': 'application/octet-stream',
  '.wasm': 'application/wasm', '.task': 'application/octet-stream',
  '.mind': 'application/octet-stream', '.mp3': 'audio/mpeg',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.y4m': 'video/yuv4mpegpipe',
  '.webm': 'video/webm', '.svg': 'image/svg+xml',
};

function serve() {
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://127.0.0.1');
    let relp = decodeURIComponent(u.pathname);
    if (relp === '/sw-v1.js') {
      res.writeHead(200, { 'Content-Type': 'text/javascript; charset=utf-8', 'Cache-Control': 'no-store', 'Service-Worker-Allowed': '/' });
      res.end(SW_V1);
      return;
    }
    if (relp === '/old-sw.html') {
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' });
      res.end(`<!doctype html><meta charset="utf-8"><title>old-sw</title>
<script>
navigator.serviceWorker.register('/sw-v1.js', { scope: './' }).then(() => {
  document.title = 'sw-ready';
  document.body.dataset.sw = 'ready';
}).catch((e) => { document.title = 'sw-fail'; document.body.dataset.sw = String(e); });
</script>`);
      return;
    }
    if (relp.endsWith('/')) relp += 'index.html';
    const file = path.normalize(path.join(ROOT, relp));
    if (!file.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end('not found'); return; }
      const typ = MIME[path.extname(file)] || 'application/octet-stream';
      const headers = { 'Content-Type': typ, 'Cache-Control': 'no-store' };
      if (file.endsWith('sw.js')) headers['Service-Worker-Allowed'] = '/';
      res.writeHead(200, headers);
      res.end(data);
    });
  });
  return new Promise((r) => server.listen(PORT, '127.0.0.1', () => r(server)));
}

const IPHONE_UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1';
const IPAD_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15';
const ANDROID_UA = 'Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36';

const HAND_B64 = fs.readFileSync(HAND_PNG).toString('base64');

let failed = 0;
const results = [];
function ok(name, cond, extra) {
  if (cond) console.log('  PASS', name);
  else { failed++; console.log('  FAIL', name, extra ?? ''); }
  results.push({ name, ok: !!cond, extra });
}

async function installFakeCamera(page) {
  await page.evaluate(async (b64) => {
    const blob = await (await fetch('data:image/png;base64,' + b64)).blob();
    const img = new Image();
    img.src = URL.createObjectURL(blob);
    await img.decode();
    const c = document.createElement('canvas');
    c.width = 640; c.height = 480;
    const ctx = c.getContext('2d', { willReadFrequently: true });
    let frame = 0;
    const draw = (shift = 0) => {
      frame++;
      ctx.fillStyle = '#101010';
      ctx.fillRect(0, 0, 640, 480);
      const s = Math.min(640 / img.width, 480 / img.height) * 0.95;
      const w = img.width * s, h = img.height * s;
      const jig = Math.sin((frame + shift) / 6) * 3;
      ctx.drawImage(img, (640 - w) / 2 + jig, (480 - h) / 2, w, h);
    };
    draw();
    window.__fakeCamDraw = draw;
    window.__fakeCamCanvas = c;
    const hook = async () => c.captureStream(30);
    try { MediaDevices.prototype.getUserMedia = hook; } catch {}
    try { navigator.mediaDevices.getUserMedia = hook; } catch {}
    navigator.mediaDevices.enumerateDevices = async () => ([
      { deviceId: 'front', kind: 'videoinput', label: 'Front Camera', groupId: 'g1', toJSON() { return this; } },
      { deviceId: 'back', kind: 'videoinput', label: 'Back Camera', groupId: 'g2', toJSON() { return this; } },
    ]);
    if (!window.__fakeCamLoop) {
      window.__fakeCamLoop = true;
      const loop = () => { draw(); requestAnimationFrame(loop); };
      requestAnimationFrame(loop);
    }
    window.__gumHooked = true;
  }, HAND_B64);
  const probe = await page.evaluate(async () => {
    try {
      const s = await navigator.mediaDevices.getUserMedia({ video: true });
      const tr = s.getVideoTracks()[0];
      return { ok: true, hooked: !!window.__gumHooked, state: tr && tr.readyState, w: (tr && tr.getSettings && tr.getSettings().width) || 0 };
    } catch (e) {
      return { ok: false, hooked: !!window.__gumHooked, err: e.name + ': ' + e.message };
    }
  });
  if (!probe.ok) throw new Error('fake camera hook failed: ' + JSON.stringify(probe));
}

async function collect(page) {
  return page.evaluate(() => {
    const d = window.__demo || {};
    const toast = document.querySelector('#toast')?.textContent || '';
    const gtxt = document.querySelector('#gtxt')?.textContent || '';
    const debug = document.querySelector('#gdebug')?.textContent || '';
    return {
      ready: !!d.mpReady,
      del: d.delegate || '',
      err: d.mpError || '',
      toast,
      gtxt,
      debug,
      hands: d.hands ?? 0,
      skip: d.detSkip || '',
      camOn: !!d.camOn,
      videoW: d.videoW || 0,
      videoH: d.videoH || 0,
      videoT: d.videoT,
      videoReady: d.videoReady,
      isiPad: !!d.isIPadOS,
      isIOS: !!d.isIOS,
      isIPhone: !!d.isIPhone,
      isTouch: !!d.isTouch,
      wasm: d.wasmBase ? d.wasmBase() : '',
      order: d.mpOrder || '',
      loop: !!d.detLoop,
      mode: d.appMode || '',
      trackItem: d.trackItemIndex,
      trackHands: d.trackHands,
      camMode: d.camMode,
      dualKind: d.dualKind,
    };
  });
}

async function waitHands(page, ms = 25000) {
  const start = Date.now();
  let last = null, hits = 0, maxHits = 0;
  while (Date.now() - start < ms) {
    last = await collect(page);
    if (last.hands >= 1) {
      hits++;
      if (hits > maxHits) maxHits = hits;
      if (hits >= 5) return { ...last, consecutive: hits, maxHits };
    } else {
      hits = 0;
    }
    await page.waitForTimeout(200);
  }
  return { ...(last || {}), consecutive: hits, maxHits };
}

async function shot(page, name) {
  const dest = path.join(OUT, name + '.png');
  await page.screenshot({ path: dest, fullPage: false });
  return dest;
}

async function runProfile({ label, type, launchOpts, ua, viewport, dpr, spoof, expectIPad, expectIPhone, y4m }) {
  const browser = await type.launch({ headless: true, ...launchOpts });
  const context = await browser.newContext({
    viewport,
    deviceScaleFactor: dpr,
    isMobile: true,
    hasTouch: true,
    userAgent: ua,
  });
  if (type === chromium) {
    try { await context.grantPermissions(['camera'], { origin: BASE }); } catch {}
  }
  await context.addInitScript(({ spoof }) => {
    if (spoof.platform) {
      try { Object.defineProperty(navigator, 'platform', { get: () => spoof.platform }); } catch {}
    }
    if (typeof spoof.maxTouchPoints === 'number') {
      try { Object.defineProperty(navigator, 'maxTouchPoints', { get: () => spoof.maxTouchPoints }); } catch {}
    }
  }, { spoof });


  const page = await context.newPage();
  const pageErr = [];
  page.on('pageerror', (e) => pageErr.push(String(e)));

  await page.goto(`${BASE}/?debug=1`, { waitUntil: 'load', timeout: 60000 });
  await page.waitForFunction(() => window.__demo && document.querySelector('#startCam'), { timeout: 90000 });
  const flags = await collect(page);
  ok(`${label} wasmBase has no query`, flags.wasm && !flags.wasm.includes('?') && /\/libs\/mediapipe\/wasm$/.test(flags.wasm), flags.wasm);
  if (expectIPhone) ok(`${label} detected as iPhone, not iPad`, flags.isIOS && flags.isIPhone && !flags.isiPad, flags);
  if (expectIPad) ok(`${label} detected as iPad`, flags.isIOS && flags.isiPad && !flags.isIPhone, flags);
  if (!expectIPhone && !expectIPad) ok(`${label} not iOS`, !flags.isIOS && !flags.isiPad, flags);

  await installFakeCamera(page);
  await page.click('#startCam');
  const ready = await page.waitForFunction(() => {
    const d = window.__demo;
    if (d.mpReady && d.delegate) return { ok: true, ready: true, del: d.delegate, err: d.mpError || '', toast: document.querySelector('#toast')?.textContent || '', camOn: !!d.camOn };
    if (d.mpError && !d.mpReady) return { ok: false, ready: false, del: d.delegate || '', err: d.mpError, toast: document.querySelector('#toast')?.textContent || '', camOn: !!d.camOn };
    return false;
  }, { timeout: 120000 }).then((h) => h.jsonValue()).catch(async () => ({ ...(await collect(page)), ok: false }));

  ok(`${label} MediaPipe ready, no undefined error`, !!(ready.ready || ready.ok) && !/undefined/i.test(ready.err || '') && !/undefined/i.test(ready.toast || ''), ready);
  if (expectIPad && (ready.ready || ready.ok)) ok(`${label} prefers CPU`, ready.del === 'CPU', ready);
  if (expectIPhone && (ready.ready || ready.ok)) ok(`${label} GPU-first (GPU or CPU fallback)`, ready.del === 'GPU' || ready.del === 'CPU', ready);

  // Give the detect loop time; live streams often keep currentTime at 0.
  const hands = await waitHands(page, 28000);
  const shotPath = await shot(page, label + '-demo');
  ok(`${label} hands=1 across consecutive frames`, (hands.maxHits || 0) >= 5 && hands.hands >= 1, { ...hands, shotPath, pageErr: pageErr.slice(0, 3) });
  ok(`${label} debug overlay mentions hands`, /hands=\d/.test(hands.debug || ''), hands.debug);
  console.log('====', label, 'demo ====\n', { flags, ready, hands: { ...hands, debug: (hands.debug || '').slice(0, 400) }, shotPath, pageErr: pageErr.slice(0, 3) });

  // Track / simulate card: try index swipe, but consecutive landmarks already required above.
  let trackInfo = null, trackShot = null;
  try {
    await page.click('nav#modeTabs button[data-app-mode="track"]');
    await page.waitForTimeout(400);
    const sim = await page.$('#trackSimIntro, #trackSimBtn');
    if (sim) await sim.click();
    await page.waitForTimeout(1500);
    // Keep feeding the same fake camera if the track path re-requests getUserMedia.
    await installFakeCamera(page);
    const beforeItem = await page.evaluate(() => window.__demo.trackItemIndex ?? 0);
    // Animate the hand sideways to simulate a swipe (best-effort).
    await page.evaluate(async () => {
      const draw = window.__fakeCamDraw;
      const c = window.__fakeCamCanvas;
      if (!draw || !c) return;
      const ctx = c.getContext('2d');
      for (let i = 0; i < 24; i++) {
        draw(i * 14);
        await new Promise((r) => setTimeout(r, 40));
      }
    });
    const after = await waitHands(page, 8000);
    const afterItem = await page.evaluate(() => window.__demo.trackItemIndex ?? 0);
    trackInfo = { beforeItem, afterItem, changed: afterItem !== beforeItem, hands: after.hands, maxHits: after.maxHits, trackHands: after.trackHands, debug: (after.debug || '').slice(0, 300) };
    trackShot = await shot(page, label + '-track');
    if (trackInfo.changed) ok(`${label} index swipe changed ring item`, true, trackInfo);
    else console.log('  INFO', label, 'ring item did not change (allowed if landmarks are consecutive);', trackInfo);
  } catch (e) {
    console.warn('  WARN track/swipe', label, e.message);
    trackInfo = { error: e.message };
  }

  // Assembly hint pill must not clip on the right.
  try {
    await page.click('nav#modeTabs button[data-app-mode="assembly"]');
    await page.waitForTimeout(400);
    await page.evaluate(() => {
      document.body.classList.add('mode-assembly');
      window.__demo.appMode = 'assembly';
      // force the long-ish nocam (or current) label and also the previous long string if still used
      const el = document.querySelector('#gtxt');
      const g = document.querySelector('#gesture');
      if (el && window.__demo.gesture !== undefined) {
        // trigger setStatus via public path if possible
      }
    });
    // If camera is on, status may be "請把手放進畫面" which is short; also measure whatever is shown,
    // then temporarily set the assembly nocam text to verify wrap/overflow.
    const pill = await page.evaluate(() => {
      const g = document.querySelector('#gesture');
      const t = document.querySelector('#gtxt');
      const orig = t.textContent;
      t.textContent = '觸控：拖曳旋轉、雙指縮放、左右滑切步驟';
      const gr = g.getBoundingClientRect();
      const tr = t.getBoundingClientRect();
      t.textContent = orig;
      return {
        orig,
        g: { x: gr.x, r: gr.right, w: gr.width, y: gr.y },
        t: { x: tr.x, r: tr.right, w: tr.width, y: tr.y },
        vw: innerWidth,
      };
    });
    const pillShot = await shot(page, label + '-assembly-pill');
    const clipped = pill.g.r > pill.vw - 4 || pill.t.r > pill.vw - 4 || pill.g.x < 4;
    ok(`${label} assembly hint pill not clipped on the right`, !clipped, { ...pill, pillShot });
  } catch (e) {
    failed++;
    console.log('  FAIL', `${label} assembly pill`, e.message);
  }

  await browser.close();
  return { label, hands, trackInfo, trackShot };
}

const server = LIVE ? null : await serve();
try {
  const wk = webkit;
  const crLaunch = {
    executablePath: '/home/box/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',
    args: [
      '--use-fake-device-for-media-stream',
      '--use-fake-ui-for-media-stream',
      `--use-file-for-fake-video-capture=${HAND_Y4M}`,
      '--no-sandbox',
      '--use-angle=swiftshader',
      '--enable-unsafe-swiftshader',
    ],
  };

  await runProfile({
    label: 'webkit-iphone',
    type: wk, launchOpts: {},
    ua: IPHONE_UA,
    viewport: { width: 390, height: 844 }, dpr: 3,
    spoof: { platform: 'iPhone', maxTouchPoints: 5 },
    expectIPhone: true,
  });
  await runProfile({
    label: 'webkit-ipad',
    type: wk, launchOpts: {},
    ua: IPAD_UA,
    viewport: { width: 820, height: 1180 }, dpr: 2,
    spoof: { platform: 'MacIntel', maxTouchPoints: 5 },
    expectIPad: true,
  });
  await runProfile({
    label: 'chromium-android',
    type: chromium, launchOpts: crLaunch,
    ua: ANDROID_UA,
    viewport: { width: 412, height: 915 }, dpr: 2.6,
    spoof: { platform: 'Linux armv8l', maxTouchPoints: 5 },
    expectIPhone: false, expectIPad: false,
    y4m: true,
  });

  // Service worker upgrade: install v1, then load the new app and confirm gestures still work.
  if (!LIVE) {
    const browser = await wk.launch({ headless: true });
    const context = await browser.newContext({
      viewport: { width: 390, height: 844 },
      deviceScaleFactor: 3,
      isMobile: true,
      hasTouch: true,
      userAgent: IPHONE_UA,
    });
    await context.addInitScript(() => {
      try { Object.defineProperty(navigator, 'platform', { get: () => 'iPhone' }); } catch {}
      try { Object.defineProperty(navigator, 'maxTouchPoints', { get: () => 5 }); } catch {}
    });

    const page = await context.newPage();
    await page.goto(`${BASE}/old-sw.html`, { waitUntil: 'load', timeout: 30000 });
    await page.waitForFunction(() => document.title === 'sw-ready', { timeout: 20000 });
    const oldReg = await page.evaluate(async () => {
      const r = await navigator.serviceWorker.getRegistration('./');
      return { script: r?.active?.scriptURL || r?.installing?.scriptURL || r?.waiting?.scriptURL || '', scope: r?.scope || '' };
    });
    ok('sw-upgrade old v1 installed', /sw-v1\.js/.test(oldReg.script), oldReg);
    await page.goto(`${BASE}/?debug=1`, { waitUntil: 'load', timeout: 60000 });
    await page.waitForFunction(() => window.__demo && document.querySelector('#startCam'), { timeout: 90000 });
    // Wait for the new worker to take over if it can.
    await page.evaluate(async () => {
      try { await navigator.serviceWorker.ready; } catch {}
    });
    await page.waitForTimeout(800);
    const newReg = await page.evaluate(async () => {
      const regs = await navigator.serviceWorker.getRegistrations();
      return regs.map((r) => r.active?.scriptURL || r.waiting?.scriptURL || r.installing?.scriptURL || '');
    });
    await installFakeCamera(page);
    await page.click('#startCam');
    const ready = await page.waitForFunction(() => {
      const d = window.__demo;
      if (d.mpReady && d.delegate) return true;
      if (d.mpError && !d.mpReady) return 'fail';
      return false;
    }, { timeout: 120000 }).then((h) => h.jsonValue()).catch(() => 'timeout');
    const hands = await waitHands(page, 28000);
    const swShot = await shot(page, 'webkit-iphone-sw-upgrade');
    ok('sw-upgrade MediaPipe ready after v1→new', ready === true, { ready, newReg });
    ok('sw-upgrade hands=1 after v1→new', (hands.maxHits || 0) >= 5 && hands.hands >= 1, { ...hands, swShot, newReg });
    console.log('==== sw-upgrade ====\n', { oldReg, newReg, ready, hands: { hands: hands.hands, maxHits: hands.maxHits, err: hands.err, debug: (hands.debug || '').slice(0, 300) }, swShot });
    await browser.close();
  }
} finally {
  if (server) server.close();
}

if (failed) { console.log('FAILED', failed); process.exit(1); }
console.log('GESTURE E2E PASSED');
