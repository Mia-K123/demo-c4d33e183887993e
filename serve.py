import http.server, functools, sys, os
H = http.server.SimpleHTTPRequestHandler
H.extensions_map.update({'.glb': 'model/gltf-binary', '.usdz': 'model/vnd.usdz+zip', '.js': 'text/javascript',
                         '.wasm': 'application/wasm', '.hdr': 'image/vnd.radiance', '.ktx2': 'image/ktx2',
                         '.task': 'application/octet-stream', '.json': 'application/json', '.mjs': 'text/javascript'})
port = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
root = os.path.dirname(os.path.abspath(__file__))  # 這個資料夾本身
print(f'Serving {root} at http://localhost:{port}  (Ctrl+C 停止)')
http.server.ThreadingHTTPServer(('0.0.0.0', port), functools.partial(H, directory=root)).serve_forever()
