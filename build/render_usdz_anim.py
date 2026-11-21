import bpy, sys, math
from mathutils import Vector
f, out = sys.argv[sys.argv.index('--')+1:]
bpy.ops.wm.read_factory_settings(use_empty=True)
bpy.ops.wm.usd_import(filepath=f)
objs=[o for o in bpy.context.scene.objects if o.type=='MESH']
pts=[o.matrix_world@Vector(c) for o in objs for c in o.bound_box]
lo=Vector([min(p[i] for p in pts) for i in range(3)]); hi=Vector([max(p[i] for p in pts) for i in range(3)]); c=(lo+hi)/2; r=(hi-lo).length
print('BLENDER DIMS mm', [round((hi[i]-lo[i])*1000,3) for i in range(3)])
cam=bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); bpy.context.scene.collection.objects.link(cam)
cam.location=c+Vector((r*1.1,-r*1.4,r*1.1)); cam.rotation_euler=(c-cam.location).to_track_quat('-Z','Y').to_euler(); cam.data.clip_start=r/100
bpy.context.scene.camera=cam
w=bpy.data.worlds.new('w'); w.use_nodes=True; w.node_tree.nodes['Background'].inputs['Color'].default_value=(0.8,0.8,0.82,1); bpy.context.scene.world=w
L=bpy.data.objects.new('L', bpy.data.lights.new('L','SUN')); L.data.energy=3; L.rotation_euler=(0.6,0.3,0.5); bpy.context.scene.collection.objects.link(L)
s=bpy.context.scene; s.render.engine='CYCLES'; s.cycles.samples=24; s.render.resolution_x=480; s.render.resolution_y=360; s.render.filepath=out
bpy.context.scene.frame_set(80); s.cycles.samples=12
bpy.ops.render.render(write_still=True)
