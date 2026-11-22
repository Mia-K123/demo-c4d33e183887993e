import sys
from PIL import Image
im = Image.open(sys.argv[1]).convert("RGB")
w, h = im.size
crop = im.crop((int(w * 0.08), int(h * 0.12), int(w * 0.92), int(h * 0.90)))
lit = n = white = ring = 0
maxL = 0
for r, g, b in list(crop.getdata())[::3]:
    n += 1
    l = (r + g + b) / 3
    maxL = max(maxL, l)
    neon = g > 200 and r < 140 and b < 80
    if l > 28 and not neon:
        lit += 1
    if r > 200 and g > 200 and b > 200 and abs(r - g) < 25 and abs(g - b) < 25:
        white += 1
    # dark-disc + light-edge-ish midtones typical of icon rings
    if 18 < l < 55 and abs(r - g) < 20 and abs(g - b) < 22:
        ring += 1
print(lit, n, f"{maxL:.1f}", f"{lit / max(n, 1):.4f}", white, f"{white / max(n, 1):.4f}", ring)
