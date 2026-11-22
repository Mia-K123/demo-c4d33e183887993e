import http from 'http';
import fs from 'fs';
import path from 'path';
import { spawn } from 'child_process';
import { fileURLToPath, pathToFileURL } from 'url';
import puppeteer from '/workspace/assembly-demo/node_modules/puppeteer-core/lib/esm/puppeteer/puppeteer-core.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 8796;
const CHROME = '/usr/bin/google-chrome';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let failed = 0;
function ok(name, cond, extra) {
  if (cond) console.log('  PASS', name);
  else { failed++; console.log('  FAIL', name, extra != null ? extra : ''); }
}

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.glb': 'model/gltf-binary',
  '.hdr': 'application/octet-stream',
  '.wasm': 'application/wasm',
  '.task': 'application/octet-stream',
  '.mind': 'application/octet-stream',
  '.mp3': 'audio/mpeg',
  '.usdz': 'model/vnd.usdz+zip',
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
  return new Promise((res) => server.listen(PORT, '127.0.0.1', () => res(server)));
}

async function withPage(browser, url, fn, opts = {}) {
  const p = await browser.newPage();
  if (opts.ua) await p.setUserAgent(opts.ua);
  if (opts.viewport) await p.setViewport(opts.viewport);
  p.setDefaultTimeout(opts.timeout || 60000);
  const errs = [];
  p.on('pageerror', (e) => errs.push(String(e)));
  await p.goto(url, { waitUntil: 'load', timeout: 60000 });
  try {
    await fn(p, errs);
  } finally {
    await p.close();
  }
  return errs;
}

const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

const server = await serve();
const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: [
    '--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
    '--ignore-gpu-blocklist',
    '--use-fake-device-for-media-stream', '--use-fake-ui-for-media-stream',
  ],
});

try {
  const base = `http://127.0.0.1:${PORT}/`;
  console.log('== gestures unit (already run separately) + page integration @', base);

  await withPage(browser, base + '?auto=cam', async (p) => {
    await p.waitForFunction(() => window.__demo?.modelReady && window.__demo?.camOn, { timeout: 90000 });
    const info = await p.evaluate(() => {
      const r = document.querySelector('#gl');
      const gl = r.getContext('webgl2') || r.getContext('webgl');
      return {
        mode: __demo.camMode,
        camOn: __demo.camOn,
        appMode: __demo.appMode,
        clearAlpha: __demo.debugCam().clearAlpha,
        sceneBg: __demo.debugCam().sceneBg,
        tabs: [...document.querySelectorAll('#modeTabs [data-app-mode]')].map((b) => b.textContent.trim()),
        selected: document.querySelector('#modeTabs [aria-selected="true"]')?.dataset.appMode,
        legend: document.querySelector('#gtxt')?.textContent,
      };
    });
    ok('auto=cam stays single', info.mode === 'single' && info.camOn, info);
    ok('clearAlpha is 0', info.clearAlpha === 0, info.clearAlpha);
    ok('scene.background is null', info.sceneBg == null, info.sceneBg);
    ok('tabs 展示/組裝/圖像追蹤', JSON.stringify(info.tabs) === JSON.stringify(['展示', '組裝', '圖像追蹤']), info.tabs);
    ok('default tab 展示', info.selected === 'demo', info.selected);
  });

  await withPage(browser, base + '?auto=touch', async (p) => {
    await p.setUserAgent(IPHONE);
    await p.reload({ waitUntil: 'load' });
    await p.waitForFunction(() => window.__demo?.modelReady && window.__demo?.defaultCamMode, { timeout: 60000 });
    const mode = await p.evaluate(() => {
      try { localStorage.removeItem('gesture-demo-cam-mode'); } catch {}
      return { def: __demo.defaultCamMode(), saved: localStorage.getItem('gesture-demo-cam-mode') };
    });
    ok('iPhone defaultCamMode is dual', mode.def === 'dual', mode);
  }, { ua: IPHONE, viewport: { width: 390, height: 844, isMobile: true, hasTouch: true, deviceScaleFactor: 2 } });

  await withPage(browser, base + '?auto=dual', async (p) => {
    await p.waitForFunction(() => window.__demo?.modelReady && window.__demo?.camOn, { timeout: 90000 });
    const info = await p.evaluate(() => {
      const d = __demo.debugCam();
      const video = document.querySelector('#video');
      const still = document.querySelector('#bgStill');
      const bodyStill = document.body.classList.contains('dual-still');
      const bodyDual = document.body.classList.contains('dual');
      return {
        mode: d.mode, kind: d.kind, camOn: d.camOn, clearAlpha: d.clearAlpha,
        stillNonBlack: d.stillNonBlack, still: d.still, sceneBg: d.sceneBg,
        videoW: video?.videoWidth || 0, stillW: still?.width || 0,
        opacityVideo: getComputedStyle(video).opacity,
        opacityStill: getComputedStyle(still).opacity,
        bodyStill, bodyDual,
      };
    });
    // Headless Chrome 通常只有一顆假鏡頭，雙鏡頭會合理退回單鏡頭。
    ok('auto=dual camera starts', info.camOn && (info.mode === 'dual' || info.mode === 'single'), info);
    ok('dual path clearAlpha 0', info.clearAlpha === 0 && info.sceneBg == null, info);
    const bgOk = info.mode !== 'dual'
      || (info.bodyStill && (info.stillNonBlack || info.stillW > 0))
      || (!info.bodyStill && info.videoW > 0);
    ok('dual background visible/non-black (or single fallback)', bgOk, info);
  });

  await withPage(browser, base + '?auto=touch&debug=1', async (p) => {
    await p.waitForFunction(() => window.__demo?.modelReady, { timeout: 60000 });
    await p.evaluate(() => document.body.classList.add('debug'));
    const debugOn = await p.evaluate(() => {
      const el = document.querySelector('#gdebug');
      return { shown: getComputedStyle(el).display !== 'none', text: el?.textContent || '' };
    });
    ok('?debug=1 overlay visible', debugOn.shown && /clearAlpha/.test(debugOn.text) && /fps det=/.test(debugOn.text), debugOn);

    await p.evaluate(() => window.__demo.setAppMode('assembly'));
    await p.waitForFunction(() => window.__demo.appMode === 'assembly' && window.__demo.assembly);
    const asm = await p.evaluate(async () => {
      const a = __demo.assembly;
      const before = a.state.step;
      a.next();
      const mid = a.state.step;
      a.prev();
      const back = a.state.step;
      const card = document.querySelector('#asmCard');
      const title = document.querySelector('#stepTitle')?.textContent;
      const vis = getComputedStyle(card).display !== 'none';
      const legendAsm = [...document.querySelectorAll('.legend-asm')].some((el) => !el.hidden);
      const legendDemo = [...document.querySelectorAll('.legend-demo')].every((el) => el.hidden);
      return { before, mid, back, title, vis, legendAsm, legendDemo, mode: document.body.className };
    });
    ok('assembly next/prev changes step', asm.before === 0 && asm.mid === 1 && asm.back === 0, asm);
    ok('assembly card visible', asm.vis && asm.title, asm);
    ok('assembly legend shown', asm.legendAsm && asm.legendDemo, asm);
  });

  await withPage(browser, base + '?mode=assembly&auto=touch', async (p) => {
    await p.waitForFunction(() => window.__demo?.modelReady && window.__demo?.appMode === 'assembly', { timeout: 60000 });
    const info = await p.evaluate(() => ({
      selected: document.querySelector('#modeTabs [aria-selected="true"]')?.dataset.appMode,
      step: __demo.assembly?.state.step,
      kicker: document.querySelector('#stepKicker')?.textContent,
      introHidden: getComputedStyle(document.querySelector('#intro')).visibility === 'hidden' || document.querySelector('#intro').classList.contains('hide'),
    }));
    ok('?mode=assembly lands in assembly', info.selected === 'assembly' && info.kicker?.includes('步驟'), info);
    ok('assembly hides start intro', info.introHidden, info);
  });

  const iphoneVp = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true };
  await withPage(browser, base + '?mode=assembly&auto=touch', async (p) => {
    await p.waitForFunction(() => window.__demo?.modelReady && window.__demo?.appMode === 'assembly', { timeout: 60000 });
    const collapsed = await p.evaluate(() => {
      const card = document.querySelector('#asmCard').getBoundingClientRect();
      const headerBtns = [...document.querySelectorAll('.header-actions .iconbtn')]
        .filter((el) => !el.hidden && getComputedStyle(el).display !== 'none')
        .map((el) => {
          const r = el.getBoundingClientRect();
          const s = getComputedStyle(el);
          return { id: el.id, h: Math.round(r.height), w: r.width, wrap: s.whiteSpace, right: r.right, top: r.top };
        });
      return {
        collapsed: document.body.classList.contains('sheet-collapsed'),
        expanded: document.body.classList.contains('sheet-expanded'),
        cardH: card.height,
        vh: innerHeight,
        vw: innerWidth,
        headerBtns,
        titleWrap: getComputedStyle(document.querySelector('#docTitle')).whiteSpace,
      };
    });
    ok('iPhone assembly sheet starts collapsed', collapsed.collapsed && !collapsed.expanded, collapsed);
    ok('collapsed sheet leaves model visible (~40% or less)', collapsed.cardH <= collapsed.vh * 0.42, collapsed);
    ok('header buttons same height and nowrap, not clipped',
      collapsed.headerBtns.length >= 3
      && collapsed.headerBtns.every((b) => b.h === collapsed.headerBtns[0].h && b.h >= 28 && b.h <= 40 && b.wrap === 'nowrap' && b.right <= collapsed.vw + 1)
      && collapsed.titleWrap === 'nowrap', collapsed);

    await p.click('#btnSheet');
    const expanded = await p.evaluate(() => {
      const box = (sel) => {
        const el = document.querySelector(sel);
        if (!el) return null;
        const r = el.getBoundingClientRect();
        const s = getComputedStyle(el);
        return { h: Math.round(r.height), w: Math.round(r.width), wrap: s.whiteSpace, right: r.right, display: s.display };
      };
      const kicker = ['#btnMenu', '#btnReplay', '#btnSheet'].map(box);
      const ann = ['#btnAnnotate', '#btnAnnExport', 'label.file-btn'].map(box);
      const card = document.querySelector('#asmCard').getBoundingClientRect();
      const sameH = (arr) => arr.every((b) => b && b.display !== 'none' && b.h === arr[0].h && b.wrap === 'nowrap');
      const closeW = (arr) => {
        const ws = arr.map((b) => b.w).sort((a, b) => a - b);
        return ws[ws.length - 1] - ws[0] <= 24;
      };
      return {
        expanded: document.body.classList.contains('sheet-expanded'),
        kicker, ann,
        kickerOk: sameH(kicker) && closeW(kicker) && kicker[0].h === 36,
        annOk: sameH(ann) && closeW(ann) && ann[0].h === 36 && ann[2].right <= innerWidth - 6,
        cardH: card.height,
        vh: innerHeight,
      };
    });
    ok('expanded kicker buttons equal height/width, nowrap', expanded.kickerOk, expanded);
    ok('新增／匯出／匯入 equal size and not clipped', expanded.annOk, expanded);
    ok('expanded sheet stays about 40% height', expanded.expanded && expanded.cardH <= expanded.vh * 0.42 + 2, expanded);
  }, { ua: IPHONE, viewport: iphoneVp });

  await withPage(browser, base + 'assembly/?ann=examples/SRV-2U-DEMO.annotations.json&device=SRV-2U-DEMO', async (p) => {
    await p.waitForFunction(() => location.pathname === '/' || location.pathname.endsWith('/') && location.search.includes('mode=assembly'), { timeout: 10000 });
    const u = await p.evaluate(() => ({ path: location.pathname, search: location.search }));
    ok('assembly/ redirects to ?mode=assembly', u.search.includes('mode=assembly') && u.search.includes('ann=examples'), u);
    ok('redirect keeps device', u.search.includes('device=SRV-2U-DEMO'), u);
  });

  // 背景預載：模型就緒後才抓 track bundle；進入分頁應幾乎立刻就緒
  {
    const timings = { reqs: [] };
    const p = await browser.newPage();
    p.setDefaultTimeout(90000);
    await p.setCacheEnabled(true);
    p.on('request', (r) => {
      const u = r.url();
      if (/track-mode\.bundle|targets\.mind|hand_landmarker|vision_wasm_internal/.test(u)) {
        timings.reqs.push({ url: u.split('/').pop().split('?')[0], t: Date.now() });
      }
    });
    const tNav = Date.now();
    await p.goto(base + '?auto=touch', { waitUntil: 'load', timeout: 60000 });
    await p.waitForFunction(() => window.__demo?.modelReady, { timeout: 60000 });
    const tModel = Date.now();
    const untilTrack = Date.now();
    await p.waitForFunction(() => window.__demo?.trackReady, { timeout: 120000 });
    const tReady = Date.now();
    const info = await p.evaluate(() => ({
      preloadMs: __demo.trackPreloadMs,
      pct: __demo.trackPreloadPct,
      status: __demo.trackPreloadStatus,
      tab: document.querySelector('#trackTabProg')?.textContent,
      mpDone: !!__demo.mpPrefetchDone,
    }));
    const firstTrack = timings.reqs.find((r) => r.url.includes('track-mode.bundle') || r.url.includes('targets.mind'));
    const firstMp = timings.reqs.find((r) => r.url.includes('hand_landmarker') || r.url.includes('vision_wasm'));
    ok('track prefetch starts after model ready', !firstTrack || firstTrack.t >= tModel - 50, { firstTrack, tModel: tModel - tNav });
    if (firstTrack && firstMp) {
      ok('track prefetch not before MP started', firstTrack.t + 20 >= firstMp.t, { firstTrack: firstTrack.t - tNav, firstMp: firstMp.t - tNav });
    } else {
      ok('track prefetch recorded (or already cached)', !!info.preloadMs || !!firstTrack, { reqs: timings.reqs, info });
    }
    ok('background preload reaches 已就緒', info.status === 'ready' && info.tab && info.tab.includes('已就緒'), info);
    const tEnter0 = Date.now();
    await p.evaluate(() => window.__demo.setAppMode('track'));
    await p.waitForFunction(() => document.querySelector('#trackStart') && !document.querySelector('#trackStart').disabled);
    const enterMs = await p.evaluate(() => __demo.trackEnterToReadyMs);
    const enterWall = Date.now() - tEnter0;
    ok('tab enter is instant when preloaded', (enterMs == null || enterMs < 400) && enterWall < 1500, { enterMs, enterWall, preloadMs: info.preloadMs });
    console.log('  TIMING first-visit preloadMs=', info.preloadMs, 'enterToReadyMs=', enterMs, 'enterWall=', enterWall, 'modelToReady=', tReady - tModel);
    // 模擬「以前」進入分頁才開始載入：preloadMs 就是使用者會等的時間
    console.log('  TIMING before (tab waited for assets)=', info.preloadMs, 'ms; after (enter when preloaded)=', enterMs, 'ms');
    await p.close();
  }

  await withPage(browser, base + '?mode=track&auto=touch', async (p) => {
    await p.waitForFunction(() => window.__demo?.modelReady && window.__demo?.appMode === 'track', { timeout: 60000 });
    await p.waitForFunction(() => document.querySelector('#trackStart') && !document.querySelector('#trackStart').disabled, { timeout: 90000 });
    const info = await p.evaluate(() => ({
      selected: document.querySelector('#modeTabs [aria-selected="true"]')?.dataset.appMode,
      btn: document.querySelector('#trackStart')?.textContent,
      disabled: document.querySelector('#trackStart')?.disabled,
      printHref: document.querySelector('#trackCardLink')?.href || '',
      printText: document.querySelector('#trackCardLink')?.textContent || '',
      printVisible: (() => {
        const el = document.querySelector('#trackCardLink');
        if (!el) return false;
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        return r.width > 0 && r.height > 0 && cs.display !== 'none' && cs.visibility !== 'hidden' && cs.opacity !== '0';
      })(),
      simBtn: document.querySelector('#trackSimBtn')?.textContent || '',
      simIntro: document.querySelector('#trackSimIntro')?.textContent || '',
      intro: !document.querySelector('#trackIntro').classList.contains('hide'),
      loopStopped: true,
    }));
    ok('?mode=track shows 開啟相機', info.selected === 'track' && info.btn.includes('開啟相機') && info.disabled === false, info);
    ok('列印卡片／開啟卡片 link visible in tab UI', info.printVisible && /track\/card\.html/.test(info.printHref) && info.printText.includes('列印卡片'), info);
    ok('模擬卡片 button present', info.simBtn.includes('模擬卡片') && info.simIntro.includes('模擬卡片'), info);
    ok('track waits for Start (intro visible)', info.intro, info);

    // Start with fake camera should not throw
    await p.click('#trackStart');
    await sleep(4000);
    const after = await p.evaluate(() => {
      const ar = document.querySelector('#trackAr');
      const v = ar?.querySelector('video');
      const cs = v ? getComputedStyle(v) : null;
      const arCs = ar ? getComputedStyle(ar) : null;
      return {
        on: !!__demo.trackOn,
        introHidden: document.querySelector('#trackIntro').classList.contains('hide'),
        err: document.querySelector('#trackLoadTxt')?.textContent || '',
        status: document.querySelector('#trackStatus')?.textContent || '',
        hasStatus: !!document.querySelector('#trackStatus'),
        hasVideo: !!v,
        vw: v?.videoWidth || 0,
        paused: !!v?.paused,
        opacity: cs?.opacity,
        vis: cs?.visibility,
        display: cs?.display,
        z: cs?.zIndex,
        arBg: arCs?.backgroundColor,
        iso: arCs?.isolation,
        bodyErr: document.body.classList.contains('track-error'),
      };
    });
    ok('track start() ran (session or visible error)', after.on || /無法|失敗|權限|鏡頭/.test(after.err + after.status) || after.introHidden || after.bodyErr, after);
    ok('track status line exists', after.hasStatus, after);
    if (after.on) {
      ok('MindAR video is visible (not z-index -2 / hidden)', after.hasVideo && after.vw > 0 && after.opacity === '1' && after.vis === 'visible' && after.display !== 'none' && String(after.z) !== '-2', after);
      ok('#trackAr does not cover video with opaque background', after.iso === 'isolate' || after.arBg === 'rgba(0, 0, 0, 0)' || after.arBg === 'transparent', after);
    } else {
      ok('failed start shows on-screen reason + 開啟相機', after.bodyErr || /鏡頭|權限|失敗|播放/.test(after.status), after);
      const shown = await p.evaluate(() => {
        const intro = document.querySelector('#trackIntro');
        const btn = document.querySelector('#trackStart, #trackRetry');
        return { introShown: intro && !intro.classList.contains('hide'), btn: btn?.textContent };
      });
      ok('failed start keeps 開啟相機 visible', shown.introShown && /開啟相機/.test(shown.btn || ''), shown);
    }

    // 模擬卡片：一支手機也能直接看模型
    await p.click('#trackSimBtn');
    await p.waitForFunction(() => window.__demo?.trackSim === true, { timeout: 30000 }).catch(() => {});
    await sleep(400);
    const sim = await p.evaluate(() => ({
      on: !!__demo.trackSim,
      kind: __demo.trackSimKind,
      cls: document.body.classList.contains('track-sim'),
      btn: document.querySelector('#trackSimBtn')?.textContent || '',
      name: document.querySelector('#trackLabel .name')?.textContent || '',
      pips: document.querySelectorAll('#trackPips .pip').length,
      nav: !!document.querySelector('#trackPrev') && !!document.querySelector('#trackNext'),
      introHidden: document.querySelector('#trackIntro')?.classList.contains('hide'),
      canvas: !!document.querySelector('#trackSimCanvas, #trackAr canvas'),
      hold: !!(() => {
        const root = __demo; // session not on state; check kind only
        return __demo.trackSimKind;
      })(),
    }));
    ok('模擬卡片 shows model and 結束模擬', sim.on && sim.cls && sim.btn.includes('結束模擬') && sim.introHidden && (sim.kind === 'ar' || sim.kind === 'fallback'), sim);
    ok('模擬卡片 has 8 switchable pips + prev/next', sim.pips === 8 && sim.nav && sim.name === '整機', sim);
    await p.click('#trackNext');
    await sleep(300);
    const stepped = await p.evaluate(() => ({
      index: __demo.trackItemIndex,
      name: document.querySelector('#trackHudToggle .hud-name')?.textContent || document.querySelector('#trackLabel .name')?.textContent || '',
    }));
    ok('next / pips switch item in simulate mode', stepped.index === 1 && stepped.name && stepped.name !== '整機', stepped);
    await p.evaluate(() => window.__demo.setTrackHudOpen(true, { autoHide: false }));
    await p.evaluate(() => document.querySelectorAll('#trackPips .pip')[3]?.click());
    await sleep(200);
    const piped = await p.evaluate(() => ({ index: __demo.trackItemIndex, name: document.querySelector('#trackHudToggle .hud-name')?.textContent || '' }));
    ok('pip 3 selects 4th item', piped.index === 3 && !!piped.name, piped);

    await p.evaluate(() => window.__demo.setTrackHudOpen(true));
    await sleep(2300);
    const hidden = await p.evaluate(() => {
      const detail = document.querySelector('#trackHudDetail');
      const status = document.querySelector('#trackStatus');
      const actions = document.querySelector('#trackActions');
      const ar = document.querySelector('#trackAr').getBoundingClientRect();
      const top = actions.getBoundingClientRect();
      const hud = document.querySelector('#trackHud').getBoundingClientRect();
      return {
        open: !!__demo.trackHudOpen,
        cls: document.body.classList.contains('track-hud-open'),
        detailDisplay: getComputedStyle(detail).display,
        statusFaded: status.classList.contains('faded') || getComputedStyle(status).opacity === '0',
        actionH: Math.round(top.height),
        clearTop: top.bottom - ar.top,
        clearBot: ar.bottom - hud.top,
        arH: ar.height,
      };
    });
    ok('info panel auto-hides after ~2s', !hidden.open && !hidden.cls && hidden.detailDisplay === 'none', hidden);
    ok('top hint/actions are compact and status fades', hidden.actionH <= 36 && hidden.statusFaded, hidden);
    ok('model clear area sits between top and bottom UI', hidden.clearTop > 0 && hidden.clearBot > 0 && (hidden.arH - hidden.clearTop - hidden.clearBot) > hidden.arH * 0.45, hidden);
    await p.click('#trackHudToggle');
    const shown = await p.evaluate(() => ({ open: !!__demo.trackHudOpen, display: getComputedStyle(document.querySelector('#trackHudDetail')).display }));
    ok('tap shows collapsed info panel', shown.open && shown.display === 'flex', shown);
    await p.evaluate(() => window.__demo.setTrackHudOpen(false, { autoHide: false }));
    await p.click('#trackSimBtn');
    await p.waitForFunction(() => window.__demo?.trackSim !== true, { timeout: 8000 }).catch(() => {});
    const ended = await p.evaluate(() => ({
      on: !!__demo.trackSim,
      cls: document.body.classList.contains('track-sim'),
      btn: document.querySelector('#trackSimBtn')?.textContent || '',
    }));
    ok('結束模擬 returns to real tracking UI', !ended.on && !ended.cls && ended.btn.includes('模擬卡片'), ended);

    await p.evaluate(() => window.__demo.setAppMode('demo'));
    await p.waitForFunction(() => window.__demo.appMode === 'demo');
    const left = await p.evaluate(() => ({ mode: __demo.appMode, trackOn: !!__demo.trackOn, sim: !!__demo.trackSim }));
    ok('leaving track stops session', left.mode === 'demo' && left.trackOn === false && left.sim === false, left);
  });

  const card = await fetch(base + 'track/card.html').then((r) => ({ status: r.status, len: +r.headers.get('content-length') || 0 }));
  ok('track/card.html 200', card.status === 200, card);
  const mind = await fetch(base + 'track/targets.mind').then((r) => r.status);
  ok('track/targets.mind 200', mind === 200, mind);
  const qr = await fetch(base + 'qr.html').then((r) => r.status);
  ok('qr.html 200', qr === 200, qr);

} finally {
  await browser.close();
  server.close();
}

if (failed) {
  console.log(`FAILED ${failed}`);
  process.exit(1);
}
console.log('ALL INTEGRATION PASSED');
