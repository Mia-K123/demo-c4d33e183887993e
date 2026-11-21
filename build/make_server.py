# Headless Blender: procedural 2U rack server, separate parts -> GLB (static) + USDZ (looping explode anim) + parts.json
import bpy, bmesh, math, json, sys
from mathutils import Matrix, Vector
OUT = '/workspace/gesture-demo/models/'
bpy.ops.wm.read_factory_settings(use_empty=True)
sc = bpy.context.scene

def lin(c): return tuple(((x/255)/12.92 if x/255 <= 0.04045 else (((x/255)+0.055)/1.055)**2.4) for x in c)
MATS = {}
def mat(name, col, metal=0.0, rough=0.5, emit=None, aniso=0.0):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*lin(col), 1); b.inputs['Metallic'].default_value = metal
    b.inputs['Roughness'].default_value = rough
    if aniso: b.inputs['Anisotropic'].default_value = aniso
    if emit:
        b.inputs['Emission Color'].default_value = (*lin(emit), 1); b.inputs['Emission Strength'].default_value = 4.0
    MATS[name] = m; return name
mat('steel', (150,153,158), 1, 0.42)
mat('cover', (160,163,168), 1, 0.36)
mat('blk_plastic', (14,14,16), 0, 0.55)
mat('blk_metal', (24,25,28), 0.7, 0.42)
mat('pcb_green', (18,74,38), 0, 0.38)
mat('pcb_black', (12,12,14), 0, 0.32)
mat('alu', (215,217,222), 1, 0.24)
mat('copper', (235,150,100), 1, 0.3)
mat('gold', (240,195,90), 1, 0.25)
mat('chip', (20,20,22), 0, 0.45)
mat('dimm', (40,42,48), 0.85, 0.33)
mat('port_blue', (20,70,200), 0, 0.4)
mat('sticker', (225,225,225), 0, 0.6)
mat('drive_body', (130,132,138), 1, 0.45)
mat('led_blue', (30,120,255), 0, 0.3, emit=(40,140,255))
mat('led_green', (40,230,90), 0, 0.3, emit=(40,255,100))
mat('fan', (16,16,18), 0, 0.5)
mat('accent', (0,98,180), 0, 0.4)   # blue release tabs

class Part:
    def __init__(s, name): s.name = name; s.bm = bmesh.new(); s.mats = []
    def mi(s, m):
        if m not in s.mats: s.mats.append(m)
        return s.mats.index(m)
    def box(s, size, c, m, bevel=0.0, rot=None):
        r = bmesh.ops.create_cube(s.bm, size=1.0)
        M = Matrix.Translation(c) @ (rot or Matrix()) @ Matrix.Diagonal((*size, 1))
        bmesh.ops.transform(s.bm, matrix=M, verts=r['verts'])
        fs = list({f for v in r['verts'] for f in v.link_faces}); i = s.mi(m)
        for f in fs: f.material_index = i
        if bevel:
            es = list({e for v in r['verts'] for e in v.link_edges})
            bmesh.ops.bevel(s.bm, geom=r['verts'] + es, offset=bevel, segments=1, affect='EDGES', profile=0.5)
    def cyl(s, r, h, c, m, axis='Z', segs=20, r2=None):
        rot = {'Z': Matrix(), 'Y': Matrix.Rotation(math.pi/2, 4, 'X'), 'X': Matrix.Rotation(math.pi/2, 4, 'Y')}[axis]
        res = bmesh.ops.create_cone(s.bm, cap_ends=True, segments=segs, radius1=r, radius2=r2 if r2 is not None else r, depth=h,
                                    matrix=Matrix.Translation(c) @ rot)
        i = s.mi(m)
        for f in {f for v in res['verts'] for f in v.link_faces}:
            f.material_index = i; f.smooth = len(f.verts) == 4
    def build(s):
        me = bpy.data.meshes.new(s.name); s.bm.to_mesh(me); s.bm.free()
        for m in s.mats: me.materials.append(MATS[m])
        o = bpy.data.objects.new(s.name, me); sc.collection.objects.link(o)
        c = sum((v.co for v in me.vertices), Vector()) / len(me.vertices)
        me.transform(Matrix.Translation(-c)); o.location = c
        return o

V = Vector
W, D, H = 0.434, 0.65, 0.0875
YF, YR = -D/2, D/2
objs = {}   # name -> (obj, offset blender coords, group)
def add(p, off, group): o = p.build(); objs[o.name] = (o, V(off), group)

# ---------- chassis ----------
p = Part('chassis-1')
p.box((W, D, 0.0015), (0, 0, 0.00075), 'steel')
for sx in (-1, 1):
    p.box((0.0015, D, H-0.002), (sx*(W/2-0.00075), 0, H/2), 'steel')
    p.box((0.018, 0.003, H), (sx*(W/2+0.009), YF-0.006, H/2), 'steel', bevel=0.0008)      # rack ear
    p.box((0.006, 0.010, 0.050), (sx*(W/2+0.012), YF-0.012, H/2), 'blk_metal', bevel=0.002)  # handle
p.box((W-0.003, 0.15, 0.0012), (0, YF+0.085, H-0.0006), 'steel')        # fixed front top over drive cage
p.box((0.30, 0.0015, H-0.004), (-0.065, YR-0.00075, H/2), 'steel')       # rear wall (left part)
p.box((0.40, 0.003, 0.074), (0, YF+0.168, 0.042), 'pcb_green')           # backplane
for i in range(12): p.box((0.02, 0.004, 0.006), (-0.15+(i%4)*0.1, YF+0.165, 0.016+(i//4)*0.027), 'chip')
for x in (-0.19, -0.16, -0.13): p.box((0.016, 0.004, 0.02), (x, YR+0.002, 0.07), 'blk_metal')  # PCIe slot covers
# front control panel on right ear
p.box((0.012, 0.002, 0.012), (W/2+0.009, YF-0.0085, 0.072), 'blk_plastic')
add(p, (0, 0, -0.10), 'chassis')

# ---------- front bezel (frame around 4x3 bays) ----------
p = Part('bezel-1')
bw, bh, gap = 0.101, 0.0262, 0.0035
x0 = -(4*bw+3*gap)/2; z0 = (H-(3*bh+2*gap))/2
yb = YF-0.003
p.box((W, 0.008, z0), (0, yb, z0/2), 'blk_metal')
p.box((W, 0.008, z0), (0, yb, H-z0/2), 'blk_metal')
for k in range(5):
    xe = x0 - gap/2 + k*(bw+gap) if 0 < k < 4 else None
    if xe is not None: p.box((gap, 0.008, H), (xe, yb, H/2), 'blk_metal')
side = (W-(4*bw+3*gap))/2
for sx in (-1, 1): p.box((side, 0.008, H), (sx*(W/2-side/2), yb, H/2), 'blk_metal')
for r in range(2): p.box((4*bw+3*gap, 0.008, gap), (0, yb, z0+bh+gap/2+r*(bh+gap)), 'blk_metal')
add(p, (0, -0.10, 0), 'bezel')

# ---------- drives ----------
for r in range(3):
    for c in range(4):
        n = r*4+c
        p = Part(f'drive-{n+1:02d}')
        cx = x0+bw/2+c*(bw+gap); cz = z0+bh/2+r*(bh+gap)
        p.box((bw-0.002, 0.006, bh-0.0016), (cx, YF-0.002, cz), 'blk_plastic', bevel=0.0006)
        for k in range(9): p.box((0.0035, 0.0012, bh-0.009), (cx-0.036+k*0.0062, YF-0.0055, cz), 'blk_metal')  # vent grille
        p.box((0.026, 0.0035, 0.011), (cx+0.034, YF-0.006, cz), 'accent', bevel=0.0008)  # release latch
        p.cyl(0.0012, 0.002, (cx+0.044, YF-0.0055, cz+0.0085), 'led_blue', axis='Y', segs=10)
        p.cyl(0.0012, 0.002, (cx+0.044, YF-0.0055, cz-0.0085), 'led_green', axis='Y', segs=10)
        p.box((bw-0.006, 0.150, bh-0.003), (cx, YF+0.079, cz), 'drive_body', bevel=0.0012)
        p.box((0.06, 0.0005, 0.012), (cx, YF+0.079, cz+bh/2-0.0012), 'sticker')
        add(p, (0, -0.16 - 0.012*(3-c) if False else -0.24, (r-1)*0.03 - 0.03), 'drive')
# stagger drives by column for nicer spread
for name,(o,off,g) in objs.items():
    if g == 'drive':
        c = (int(name.split('-')[1])-1) % 4
        off.x = (c-1.5)*0.035

# ---------- fans ----------
yfan = -0.115
for i in range(4):
    p = Part(f'fan-{i+1}'); cx = -0.135 + i*0.09; s = 0.08; cz = 0.044
    for sx in (-1, 1):
        p.box((0.006, 0.038, s), (cx+sx*(s/2-0.003), yfan, cz), 'fan')
        p.box((s, 0.038, 0.006), (cx, yfan, cz+sx*(s/2-0.003)), 'fan')
    p.cyl(0.0372, 0.03, (cx, yfan, cz), 'fan', axis='Y', segs=28)      # shroud ring (closed look from sides)
    p.cyl(0.015, 0.032, (cx, yfan-0.001, cz), 'blk_plastic', axis='Y', segs=20)
    for b in range(7):
        a = b*2*math.pi/7
        rot = Matrix.Rotation(a, 4, 'Y') @ Matrix.Rotation(math.radians(28), 4, 'Z')
        off = V((math.cos(a)*0.024, 0, -math.sin(a)*0.024))
        p.box((0.022, 0.0015, 0.014), V((cx, yfan-0.017, cz)) + off, 'fan', rot=Matrix.Rotation(a, 4, 'Y') @ Matrix.Rotation(math.radians(35), 4, 'X'))
    p.box((0.012, 0.004, 0.006), (cx+0.026, yfan-0.021, cz+0.034), 'accent')
    add(p, (0, -0.10, 0.17 + 0.012*i), 'fan')

# ---------- motherboard ----------
mbx0, mbx1, mby0, mby1 = -0.212, 0.122, -0.088, YR-0.003
p = Part('board-1'); mz = 0.0075
p.box((mbx1-mbx0, mby1-mby0, 0.0016), ((mbx0+mbx1)/2, (mby0+mby1)/2, mz), 'pcb_green')
for cpu_x in (-0.12, 0.04):
    p.box((0.076, 0.09, 0.004), (cpu_x, 0.03, mz+0.0028), 'blk_metal')      # socket frame
    for sx in (-1, 1):
        for k in range(4):
            x = cpu_x + sx*(0.055 + k*0.0068)
            p.box((0.0048, 0.142, 0.007), (x, 0.03, mz+0.0043), 'blk_plastic')   # DIMM slot
            p.box((0.0048, 0.004, 0.009), (x, 0.03-0.073, mz+0.005), 'accent')
    for k in range(8): p.box((0.008, 0.008, 0.004), (cpu_x-0.03+k*0.0085, 0.093, mz+0.0028), 'chip')   # VRM
    for k in range(6): p.cyl(0.003, 0.008, (cpu_x-0.025+k*0.01, 0.107, mz+0.0048), 'blk_metal', segs=10)
p.box((0.025, 0.025, 0.003), (-0.04, 0.2, mz+0.0023), 'chip')       # PCH
p.box((0.014, 0.014, 0.002), (-0.08, 0.25, mz+0.0018), 'chip')      # BMC
for k in range(3): p.box((0.014, 0.08, 0.008), (-0.19+k*0.03, 0.24, mz+0.0048), 'blk_plastic')   # PCIe slots
# rear I/O
for k, (w, h, m) in enumerate([(0.014, 0.012, 'blk_metal'), (0.014, 0.012, 'blk_metal'), (0.016, 0.014, 'port_blue'), (0.016, 0.014, 'port_blue'), (0.016, 0.013, 'blk_metal')]):
    p.box((w, 0.02, h), (0.02+k*0.02, YR-0.012, mz+h/2+0.001), m)
add(p, (0, 0, 0), 'board')

# ---------- RAM ----------
n = 0
for cpu_x in (-0.12, 0.04):
    for sx in (-1, 1):
        for k in range(4):
            n += 1; x = cpu_x + sx*(0.055 + k*0.0068)
            p = Part(f'ram-{n:02d}')
            p.box((0.0013, 0.133, 0.03), (x, 0.03, mz+0.007+0.015), 'pcb_green')
            p.box((0.0034, 0.128, 0.026), (x, 0.03, mz+0.009+0.014), 'dimm', bevel=0.0005)
            p.box((0.0036, 0.05, 0.006), (x, 0.03, mz+0.03), 'sticker')
            add(p, (0, 0, 0.11), 'ram')

# ---------- CPU heatsinks ----------
for i, cpu_x in enumerate((-0.12, 0.04)):
    p = Part(f'cpu-{i+1}'); z = mz+0.0045
    p.box((0.072, 0.086, 0.006), (cpu_x, 0.03, z+0.003), 'copper', bevel=0.0008)
    nf = 26
    for k in range(nf):
        p.box((0.0006, 0.105, 0.056), (cpu_x-0.0385+k*0.077/(nf-1), 0.03, z+0.006+0.028), 'alu')
    p.box((0.079, 0.105, 0.0012), (cpu_x, 0.03, z+0.0625), 'alu')
    for sx in (-1, 1):
        for sy in (-1, 1): p.cyl(0.0035, 0.009, (cpu_x+sx*0.03, 0.03+sy*0.047, z+0.066), 'blk_metal', segs=12)
    p.box((0.05, 0.03, 0.0003), (cpu_x, 0.03, z+0.0633), 'sticker')
    add(p, (0, 0, 0.21), 'cpu')

# ---------- PSUs ----------
for i in range(2):
    p = Part(f'psu-{i+1}'); x0p, x1p = 0.13, 0.2155; cx = (x0p+x1p)/2; ww = x1p-x0p
    zc = 0.0215 + i*0.0425; y0, y1 = 0.0, YR+0.012
    p.box((ww, y1-y0, 0.04), (cx, (y0+y1)/2, zc), 'steel', bevel=0.001)
    p.box((ww-0.002, 0.004, 0.038), (cx, y1+0.001, zc), 'blk_metal')
    p.cyl(0.016, 0.003, (cx-0.012, y1+0.003, zc), 'fan', axis='Y', segs=24)
    for k in range(4): p.box((0.03, 0.001, 0.0012), (cx-0.012, y1+0.0048, zc-0.009+k*0.006), 'blk_metal')
    p.box((0.012, 0.03, 0.01), (cx+0.026, y1+0.016, zc), 'accent', bevel=0.001)       # handle
    p.box((0.014, 0.006, 0.01), (cx+0.026, y1+0.004, zc+0.012), 'blk_plastic')        # AC inlet
    p.cyl(0.0015, 0.002, (cx+0.012, y1+0.0035, zc+0.014), 'led_green', axis='Y', segs=10)
    p.box((0.04, 0.0004, 0.025), (cx, y0+0.15, zc+0.0202), 'sticker') if False else None
    add(p, (0.07, 0.24, 0.035*i), 'psu')

# ---------- PCIe card (on riser, lying flat) ----------
p = Part('pcie-1'); pz = 0.052
p.box((0.012, 0.04, 0.035), (-0.19, 0.24, 0.03), 'pcb_green')                        # riser board
p.box((0.165, 0.11, 0.0016), (-0.105, 0.255, pz), 'pcb_black')
p.box((0.12, 0.004, 0.006), (-0.12, 0.2, pz-0.004), 'gold')                            # gold fingers
p.box((0.05, 0.05, 0.012), (-0.09, 0.25, pz+0.007), 'alu', bevel=0.001)              # controller heatsink
for k in range(8): p.box((0.05, 0.0012, 0.006), (-0.09, 0.228+k*0.0065, pz+0.016), 'alu')
for k in range(2): p.box((0.014, 0.018, 0.013), (-0.165+k*0.022, YR-0.015, pz+0.0075), 'blk_metal')  # SFP cages
p.box((0.12, 0.0012, 0.018), (-0.12, YR+0.001, pz+0.002), 'steel')                    # bracket
p.cyl(0.0012, 0.002, (-0.06, YR+0.002, pz+0.006), 'led_green', axis='Y', segs=10)
add(p, (-0.05, 0.30, 0.13), 'pcie')

# ---------- top cover ----------
p = Part('cover-1')
yc0 = YF+0.16
p.box((W+0.002, YR-yc0, 0.0012), (0, (yc0+YR)/2, H+0.0006), 'cover')
for sx in (-1, 1): p.box((0.0012, YR-yc0, 0.012), (sx*(W/2+0.0016), (yc0+YR)/2, H-0.005), 'cover')
p.box((0.03, 0.008, 0.002), (0, yc0+0.02, H+0.0018), 'accent', bevel=0.0006)          # release button
p.box((0.12, 0.09, 0.0003), (0.08, 0.15, H+0.0013), 'sticker')                       # service label
for k in range(6): p.box((0.09, 0.002, 0.00035), (0.08, 0.12+k*0.012, H+0.0015), 'blk_plastic')
add(p, (0, 0.04, 0.43), 'cover')

# ---------- exports ----------
for o in sc.objects: o.select_set(True)
bpy.ops.export_scene.gltf(filepath=OUT+'server.glb', export_format='GLB', export_yup=True, export_apply=True,
                          export_animations=False, export_draco_mesh_compression_enable=False)
def to_gl(v): return [round(v.x, 4), round(v.z, 4), round(-v.y, 4)]
LABELS = {'cover': ['上蓋', 'Top Cover'], 'chassis': ['機箱', 'Chassis'], 'bezel': ['前面板', 'Front Bezel'],
          'drive': ['熱插拔硬碟 ×12', '3.5" Hot-swap'], 'board': ['主機板', 'Motherboard'], 'cpu': ['CPU 散熱器 ×2', 'Heatsink'],
          'ram': ['記憶體 DIMM ×16', 'DDR5 RDIMM'], 'fan': ['風扇牆 ×4', '80mm Fans'], 'psu': ['電源供應器 ×2', 'Redundant PSU'],
          'pcie': ['PCIe 擴充卡', 'NIC Card']}
json.dump({'objects': {n: {'group': g, 'offset': to_gl(off)} for n, (o, off, g) in objs.items()},
           'groups': {k: {'zh': v[0], 'en': v[1]} for k, v in LABELS.items()}},
          open(OUT+'parts.json', 'w'), ensure_ascii=False, indent=1)

# USDZ with looping explode animation (30 fps): hold collapsed, explode, hold, collapse
sc.render.fps = 30; sc.frame_start = 0; sc.frame_end = 150
for n, (o, off, g) in objs.items():
    base = o.location.copy()
    for f, k in ((0, 0), (20, 0), (60, 1), (100, 1), (140, 0), (150, 0)):
        o.location = base + off*k; o.keyframe_insert('location', frame=f)
    for fc in (o.animation_data.action.fcurves if hasattr(o.animation_data.action, 'fcurves') else []):
        for kp in fc.keyframe_points: kp.interpolation = 'BEZIER'
    o.location = base
sc.frame_set(0)
bpy.ops.wm.usd_export(filepath=OUT+'server_anim.usdz', export_materials=True, generate_preview_surface=True,
    convert_orientation=True, export_global_up_selection='Y', export_global_forward_selection='NEGATIVE_Z',
    export_animation=True, meters_per_unit=1.0, convert_scene_units='METERS')
print('OBJECTS', len(objs), 'TRIS', sum(sum(len(p.vertices)-2 for p in o.data.polygons) for o, _, _ in objs.values()))
