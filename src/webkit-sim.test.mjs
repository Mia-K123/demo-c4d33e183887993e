import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execFileSync } from 'child_process';
import pkg from '/usr/local/lib/pnpm/5/.pnpm/playwright-core@1.59.1/node_modules/playwright-core/index.js';
const { webkit, chromium } = pkg;

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8799;
const OUT = path.join(ROOT, 'debug-shots');
fs.mkdirSync(OUT, { recursive: true });
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

import http from 'http';

const MIME = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json',
  '.glb': 'model/gltf-binary', '.hdr': 'application/octet-stream',
  '.wasm': 'application/wasm', '.task': 'application/octet-stream',
  '.mind': 'application/octet-stream', '.mp3': 'audio/mpeg', '.png': 'image/png',
};

function serve() {
  const server = http.createServer((req, res) => {
    const u = new URL(req.url, 'http://127.0.0.1');
    let rel = decodeURIComponent(u.pathname);
    if (rel.endsWith('/')) rel += 'index.html';
    const file = path.normalize(path.join(ROOT, rel));
    if (!file.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end('not found'); return; }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
      res.end(data);
    });
  });
  return new Promise((r) => server.listen(PORT, '127.0.0.1', () => r(server)));
}

function modelVisible(pngPath) {
  // Lightweight PNG pixel scan without extra deps: use a data URL from playwright instead.
  return pngPath;
}

const server = await serve();
const base = `http://127.0.0.1:${PORT}/`;
let failed = 0;
const ok = (n, c, extra) => { if (c) console.log('  PASS', n); else { failed++; console.log('  FAIL', n, extra ?? ''); } };
function analyzeShot(pngPath) {
  const out = execFileSync('python3', [path.join(path.dirname(fileURLToPath(import.meta.url)), 'analyze_shot.py'), pngPath], { encoding: 'utf8' });
  const [lit, n, maxL, ratio, white, whiteRatio, ring] = out.trim().split(/\s+/).map(Number);
  return { lit, n, maxL, ratio, white, whiteRatio, ring };
}


async function run(name, type, launchOpts, grantCam) {
  const browser = await type.launch({ headless: true, ...launchOpts });
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 3,
    isMobile: true,
    hasTouch: true,
    userAgent: IPHONE,
  });
  if (grantCam) {
    try { await context.grantPermissions(['camera'], { origin: `http://127.0.0.1:${PORT}` }); } catch {}
  }
  const page = await context.newPage();
  await page.goto(base + '?mode=track&auto=touch&debug=1', { waitUntil: 'load', timeout: 60000 });
  await page.waitForFunction(() => window.__demo?.modelReady && window.__demo?.appMode === 'track', { timeout: 90000 });
  await page.waitForFunction(() => document.querySelector('#trackSimBtn') && !document.querySelector('#trackSimBtn').disabled, { timeout: 30000 }).catch(() => {});
  await page.waitForTimeout(400);
  await page.click('#trackSimBtn');
  await page.waitForFunction(() => window.__demo?.trackSim === true && (window.__demo.simFrames || 0) > 8, { timeout: 30000 });
  await page.waitForTimeout(1200);
  const info = await page.evaluate(() => {
    const gl = document.querySelector('#gl');
    const cs = getComputedStyle(gl);
    const r = gl.getBoundingClientRect();
    return {
      kind: __demo.trackSimKind,
      parent: gl.parentElement?.id,
      display: cs.display,
      vis: cs.visibility,
      w: r.width, h: r.height,
      buf: [gl.width, gl.height],
      meshes: __demo.simMeshCount,
      frames: __demo.simFrames,
      arMenuOn: !!__demo.arMenuOn,
      arIconCount: __demo.arIconCount,
      arHasBubble: !!__demo.arHasBubble,
      debug: document.querySelector('#gdebug')?.textContent || '',
    };
  });
  await page.evaluate(() => {
    const g = document.querySelector('#gdebug');
    if (g) g.style.display = 'none';
    document.querySelector('#trackStatus')?.classList.add('faded');
  });
  await page.waitForTimeout(200);
  const shot = path.join(OUT, `${name}-simulate-menu.png`);
  await page.screenshot({ path: shot, fullPage: false });
  const pixels = analyzeShot(shot);
  console.log('====', name, '====');
  console.log(info, pixels, shot);
  ok(`${name} uses host renderer`, info.kind === 'host' && info.parent === 'trackAr' && info.display === 'block' && info.w > 100, info);
  ok(`${name} debug has canvas/meshes/frames`, /sim canv=\d+x\d+/.test(info.debug) && info.meshes > 0 && info.frames > 8, info);
  ok(`${name} AR ring menu in scene`, info.arMenuOn && info.arIconCount === 8 && info.arHasBubble, info);
  ok(`${name} model pixels visible in #gl`, pixels.ratio > 0.02 && pixels.maxL > 40, pixels);
  ok(`${name} label bubble visible`, pixels.white > 80 || pixels.whiteRatio > 0.002, pixels);
  await browser.close();
  return { info, pixels, shot };
}

try {
  const wk = await run('webkit', webkit, {}, false);
  console.log('WEBKIT_SHOT', wk.shot);
  try {
    const cr = await run('chromium', chromium, {
      executablePath: '/home/box/.cache/ms-playwright/chromium-1255/chrome-linux64/chrome',
      args: ['--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream', '--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
    }, true);
    console.log('CHROMIUM_SHOT', cr.shot);
  } catch (e) {
    console.warn('chromium optional failed', e.message);
  }
} finally {
  server.close();
}
if (failed) { console.log('FAILED', failed); process.exit(1); }
console.log('WEBKIT SIM TEST PASSED');
