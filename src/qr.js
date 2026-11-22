import jsQR from 'jsqr';
import { parseDeviceCode } from './steps.js';

function createDetector() {
  if (typeof BarcodeDetector === 'undefined') return null;
  try { return new BarcodeDetector({ formats: ['qr_code'] }); }
  catch { return null; }
}

let detector = undefined; // undefined = not tried yet
function getDetector() {
  if (detector === undefined) detector = createDetector();
  return detector;
}

async function decodeWithDetector(source) {
  const det = getDetector();
  if (!det) return null;
  try {
    const codes = await det.detect(source);
    const raw = codes?.[0]?.rawValue;
    return raw ? String(raw) : null;
  } catch {
    return null;
  }
}

export function decodeQRFromImageData(imageData) {
  if (!imageData || !imageData.width || !imageData.height) return null;
  try {
    const r = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: 'attemptBoth' });
    return r?.data ? String(r.data) : null;
  } catch {
    return null;
  }
}

function drawToImageData(src, w, h) {
  const c = document.createElement('canvas');
  c.width = w;
  c.height = h;
  const ctx = c.getContext('2d', { willReadFrequently: true });
  ctx.drawImage(src, 0, 0, w, h);
  return ctx.getImageData(0, 0, w, h);
}

/** 從 HTMLImageElement、ImageBitmap、canvas 或 video 解碼。 */
export async function decodeQRFromSource(src) {
  if (!src) return null;
  const viaDet = await decodeWithDetector(src);
  if (viaDet) return viaDet;
  const w = src.naturalWidth || src.videoWidth || src.width;
  const h = src.naturalHeight || src.videoHeight || src.height;
  if (!w || !h) return null;
  // 過大圖縮小，加快 jsQR
  const max = 1024;
  const scale = Math.min(1, max / Math.max(w, h));
  const dw = Math.max(1, Math.round(w * scale));
  const dh = Math.max(1, Math.round(h * scale));
  return decodeQRFromImageData(drawToImageData(src, dw, dh));
}

export async function decodeQRFromBlob(blob) {
  if (!blob) return null;
  const viaDet = await decodeWithDetector(blob);
  if (viaDet) return viaDet;
  const url = URL.createObjectURL(blob);
  try {
    const img = await loadImage(url);
    return decodeQRFromSource(img);
  } finally {
    URL.revokeObjectURL(url);
  }
}

export function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error('圖片載入失敗'));
    img.src = url;
  });
}

export async function decodeDeviceFromSource(src) {
  const raw = await decodeQRFromSource(src);
  if (!raw) return { raw: null, code: null };
  return { raw, code: parseDeviceCode(raw) };
}

export { parseDeviceCode, getDetector };
