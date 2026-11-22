/** 組裝步驟與設備定義。螺絲數量、力矩皆為示例，非實機規格。 */

export const DEFAULT_DEVICE = 'SRV-2U-DEMO';

const EX = '（示例，非實機規格）';

const STEPS_2U = [
  {
    id: 'chassis',
    groups: ['chassis'],
    title: '機殼底座',
    brief: '將 2U 機箱放到防靜電工作台，確認前後方向後再開始。',
    instruction: '機箱正面朝向自己，底部平放。檢查外觀有無凹陷，並確認滑軌與定位孔完好。此步驟完成後，後續零件才有可靠的安裝基準。',
    tools: [
      { label: '工具', value: '防靜電手環、十字螺絲起子' },
      { label: '螺絲', value: '機箱定位／滑軌螺絲 ×4' },
      { label: '力矩', value: '0.6 N·m' },
    ],
    notes: '請在防靜電區域作業。本教學為 L11 機櫃整合概念的簡化示範。',
    insert: [0, -1, 0],
    hideFuture: ['cover'],
  },
  {
    id: 'board',
    groups: ['board'],
    title: '主機板',
    brief: '對準機箱內的定位柱，將主機板平放就位後再鎖螺絲。',
    instruction: '先確認 I/O 擋板方向與後窗對齊，再將主機板輕放在定位柱上，不可斜推。對角鎖附固定螺絲，避免板彎。',
    tools: [
      { label: '工具', value: '十字螺絲起子（#2）' },
      { label: '螺絲', value: '主板固定螺絲 ×8' },
      { label: '力矩', value: '0.5 N·m，對角鎖附' },
    ],
    notes: '鎖附順序與數量為示例。實機請依主機板與機箱手冊。',
    insert: [0, 1, 0],
    hideFuture: ['cover'],
  },
  {
    id: 'cpu',
    groups: ['cpu'],
    title: 'CPU／散熱',
    brief: '依插座方向安裝處理器與散熱器（本模型呈現散熱器外觀）。',
    instruction: '對準插座缺口後垂直放下，勿觸碰接點。塗抹導熱介面後，將兩組散熱器對角鎖緊，保持壓力平均。',
    tools: [
      { label: '工具', value: '散熱器專用起子、導熱膏' },
      { label: '螺絲', value: '散熱器螺絲 ×8（每組 ×4）' },
      { label: '力矩', value: '0.6 N·m，對角鎖附' },
    ],
    notes: '導熱膏用量與螺絲力矩為示例，請依實機手冊。本模型不含獨立 CPU 本體。',
    insert: [0, 1, 0],
    hideFuture: ['cover'],
  },
  {
    id: 'ram',
    groups: ['ram'],
    title: '記憶體',
    brief: '依槽位順序安裝 16 條 DIMM，卡榫應聽到定位聲。',
    instruction: '打開兩側卡榫，將缺口對準插槽後垂直壓入，直到兩側卡榫回彈鎖定。建議成對、依通道順序安裝，避免跳槽。',
    tools: [
      { label: '工具', value: '無需工具，保持防靜電' },
      { label: '配件', value: 'DDR5 RDIMM ×16' },
    ],
    notes: '安裝順序（例如從通道 A 開始）為示例，實機請看主機板標示。',
    insert: [0, 1, 0],
    hideFuture: ['cover'],
  },
  {
    id: 'drive',
    groups: ['drive'],
    title: '硬碟',
    brief: '將 12 顆熱插拔硬碟由機箱前方推入托盤，直到把手卡上。',
    instruction: '確認托盤方向與編號，沿滑軌平推到底，再將把手壓下鎖定。不要只靠單側施力，避免托盤卡死或背板彎曲。',
    tools: [
      { label: '工具', value: '無需工具（熱插拔托盤）' },
      { label: '配件', value: '3.5" 熱插拔硬碟 ×12' },
    ],
    notes: '硬碟編號與槽位對應為示意，實務應依資產標籤登錄。',
    insert: [0, 0, 1],
    hideFuture: ['cover', 'bezel'],
  },
  {
    id: 'psu',
    groups: ['psu'],
    title: '電源',
    brief: '將兩顆備援電源由機箱後側滑入，直到卡榫鎖上。',
    instruction: '確認電源規格與插接方向，沿導軌推入至卡榫咔一聲鎖定。兩顆都裝上後，檢查解鎖拉環可自由作動。',
    tools: [
      { label: '工具', value: '無需工具（熱插拔模組）' },
      { label: '配件', value: '備援電源模組 ×2' },
    ],
    notes: '電源規格與插頭方向為示例。本教學不含通電步驟。',
    insert: [0.2, 0, -1],
    hideFuture: ['cover'],
  },
  {
    id: 'fan',
    groups: ['fan'],
    title: '風扇',
    brief: '安裝風扇牆 4 顆，注意出風方向朝後。',
    instruction: '依序放入四顆 80mm 風扇，電源接頭朝向可配線的一側。確認葉片無干涉後再鎖螺絲，並將線材固定在線扣內。',
    tools: [
      { label: '工具', value: '十字螺絲起子' },
      { label: '螺絲', value: '風扇螺絲 ×16（每顆 ×4）' },
      { label: '力矩', value: '0.4 N·m' },
    ],
    notes: '出風方向、螺絲數量與力矩為示例。',
    insert: [0, 1, 0.4],
    hideFuture: ['cover'],
  },
  {
    id: 'cables',
    groups: ['pcie'],
    title: '擴充卡與線材',
    brief: '將 PCIe 網卡插入對應插槽，並整理電源與訊號線。',
    instruction: '打開後窗擋板，將網卡垂直插入 PCIe 插槽後鎖上擋板螺絲。電源線、資料線沿既有線槽走線，避免擋到風扇與上蓋。',
    tools: [
      { label: '工具', value: '十字螺絲起子' },
      { label: '螺絲', value: '擋板固定螺絲 ×1' },
      { label: '線材', value: '電源線、資料線路由（示意）' },
    ],
    notes: '線材路徑為示意，非實機走線圖。本模型以 PCIe 網卡代表擴充與配線步驟。',
    insert: [-0.15, 0.3, -1],
    hideFuture: ['cover'],
  },
  {
    id: 'bezel',
    groups: ['bezel'],
    title: '前面板',
    brief: '將前面板對準卡扣，由前往後輕推卡上。',
    instruction: '對準兩側卡扣與指示燈開孔，水平推入直到卡上。不要用力壓指示燈或 USB 面板區域。裝上後檢查按鍵與燈號開孔是否對齊。',
    tools: [
      { label: '工具', value: '無需工具（卡扣式）' },
    ],
    notes: '前面板結構因機種而異，此處為示意卡扣安裝。',
    insert: [0, 0, 1],
    hideFuture: ['cover'],
  },
  {
    id: 'cover',
    groups: ['cover'],
    title: '上蓋',
    brief: '將上蓋由後往前滑入，鎖上後側螺絲並做通電前檢查。',
    instruction: '對準兩側滑軌，由後往前推至定位後鎖上後側螺絲。合上後確認沒有夾線。本教學到此結束，不含通電與上架。',
    tools: [
      { label: '工具', value: '十字螺絲起子' },
      { label: '螺絲', value: '上蓋螺絲 ×2' },
      { label: '力矩', value: '0.6 N·m' },
    ],
    notes: '完成後建議進行通電前目視檢查。通電、上架與走線驗收不在本示範範圍。',
    insert: [0, 1, -0.15],
    hideFuture: [],
  },
];

function withExampleFlags(steps) {
  return steps.map((s) => ({
    ...s,
    tools: (s.tools || []).map((t) => ({ ...t, example: true, hint: EX })),
  }));
}

export const DEVICES = {
  'SRV-2U-DEMO': {
    id: 'SRV-2U-DEMO',
    name: '2U 示範伺服器',
    model: '2U Rack Server',
    blurb: 'L11 機櫃整合組裝教學（簡化示範）',
    steps: withExampleFlags(STEPS_2U),
  },
  'RACK-L11-DEMO': {
    id: 'RACK-L11-DEMO',
    name: 'L11 機櫃示範單元',
    model: 'L11 Integration Cell',
    blurb: '同一套簡化組裝流程，用於示範掃描不同設備代碼。',
    steps: withExampleFlags(STEPS_2U),
  },
};

export const SUPPORTED_CODES = Object.keys(DEVICES);

/** 從 QR 字串解析設備代碼：純代碼、?device=、#device=、路徑末段皆可。 */
export function parseDeviceCode(raw) {
  if (raw == null) return null;
  let s = String(raw).trim();
  if (!s) return null;
  if (DEVICES[s]) return s;
  try {
    const url = new URL(s, 'https://example.invalid/');
    const q = url.searchParams.get('device') || url.searchParams.get('code');
    if (q && DEVICES[q.trim()]) return q.trim();
    const hash = url.hash.replace(/^#/, '');
    const hp = new URLSearchParams(hash.startsWith('?') ? hash.slice(1) : hash);
    const hq = hp.get('device') || hp.get('code') || (DEVICES[hash] ? hash : null);
    if (hq && DEVICES[String(hq).trim()]) return String(hq).trim();
    const parts = url.pathname.split('/').filter(Boolean);
    const last = parts[parts.length - 1];
    if (last && DEVICES[last]) return last;
  } catch {}
  const m = s.match(/\b(SRV-2U-DEMO|RACK-L11-DEMO)\b/);
  return m ? m[1] : null;
}
