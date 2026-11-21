const puppeteer = require('puppeteer-core');
(async () => {
  const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader'] });
  const p = await b.newPage(); await p.goto('http://localhost:8765/?auto=touch'); await p.waitForFunction(() => window.__demo?.classify);
  const r = await p.evaluate(() => {
    // 合成手部 21 點：手腕在 (0.5,0.8)，四指沿 -y 方向
    const mk = (ext, thumb, pinch) => {
      const L = Array.from({ length: 21 }, () => ({ x: 0.5, y: 0.8 }));
      const bases = [0.42, 0.48, 0.54, 0.6];
      [5, 9, 13, 17].forEach((m, i) => { const x = bases[i];
        L[m] = { x, y: 0.62 }; const e = ext[i];
        L[m + 1] = { x, y: e ? 0.55 : 0.58 }; L[m + 2] = { x, y: e ? 0.49 : 0.63 }; L[m + 3] = { x, y: e ? 0.44 : 0.68 }; });
      L[1] = { x: 0.44, y: 0.74 }; L[2] = { x: 0.40, y: 0.70 }; L[3] = thumb ? { x: 0.35, y: 0.66 } : { x: 0.44, y: 0.66 }; L[4] = thumb ? { x: 0.31, y: 0.62 } : { x: 0.47, y: 0.64 };
      if (pinch != null) { L[8] = { x: 0.42, y: 0.5 }; L[4] = { x: 0.42 + pinch, y: 0.5 }; L[7] = { x: 0.42, y: 0.52 }; L[6] = { x: 0.42, y: 0.56 }; }
      return L; };
    const c = __demo.classify;
    return { open: c(mk([1,1,1,1], true)), fist: c(mk([0,0,0,0], false)), pinch: c(mk([1,0,0,0], true, 0.02)), pinchWide: c(mk([1,0,0,0], true, 0.12)), two: c(mk([1,1,0,0], true)) };
  });
  console.log(JSON.stringify(r)); await b.close();
})();
