import sys
from PIL import Image
im = Image.open(sys.argv[1]).convert("RGB")
w, h = im.size
crop = im.crop((int(w * 0.12), int(h * 0.18), int(w * 0.88), int(h * 0.86)))
lit = n = 0
maxL = 0
for r, g, b in list(crop.getdata())[::3]:
    n += 1
    l = (r + g + b) / 3
    maxL = max(maxL, l)
    neon = g > 200 and r < 140 and b < 80
    if l > 28 and not neon:
        lit += 1
print(lit, n, f"{maxL:.1f}", f"{lit / max(n, 1):.4f}")
