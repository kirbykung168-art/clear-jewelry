#!/usr/bin/env python3
"""
bake-product-cutouts.py — generate transparent-PNG cutouts of product photos
shot on black velvet, preserving FULL gem color.

History / why this exists:
The first cutout attempt (commit 75142f4) used luma-keyed alpha:
    luma = 0.299·R + 0.587·G + 0.114·B
    alpha = clip((luma - 35) * 255 / (70-35), 0, 255)
That destroyed deep-blue sapphires. A deep royal-sapphire pixel like
RGB(20, 23, 100) has luma ≈ 31 — BELOW the 35 cutoff — so the gem CORE
was keyed out as transparent and visually vanished. Only the diamond petals
(high luma) survived, making the choker look like a diamond-only piece on
the cream gallery tile.

Fix:
Use MAX-CHANNEL keying: alpha = f(max(R, G, B)). A pixel that has ANY
channel above the black-velvet threshold is foreground, regardless of which
channel. RGB(20, 23, 100) → max=100 → α=255 → preserved at full saturation.

Usage:
    python3 scripts/bake-product-cutouts.py SOURCE.jpg OUT.png
"""
import sys
from PIL import Image
import numpy as np

LO = 22   # max(R,G,B) below this is black-velvet background — alpha 0
HI = 45   # above this is foreground — alpha 255  (linear band between)

def bake(src_path, out_path, lo=LO, hi=HI):
    img = Image.open(src_path).convert('RGB')
    arr = np.asarray(img, dtype=np.uint8)
    R, G, B = arr[..., 0], arr[..., 1], arr[..., 2]
    maxc = np.maximum(np.maximum(R, G), B).astype(np.float32)
    alpha = np.clip((maxc - lo) * 255.0 / (hi - lo), 0, 255).astype(np.uint8)
    rgba = np.dstack([arr, alpha])
    Image.fromarray(rgba, 'RGBA').save(out_path, optimize=True)
    print(f"  wrote {out_path}  size={img.size}")

if __name__ == '__main__':
    if len(sys.argv) != 3:
        print(__doc__); sys.exit(2)
    bake(sys.argv[1], sys.argv[2])
