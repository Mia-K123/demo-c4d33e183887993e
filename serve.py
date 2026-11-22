import gzip, io, os, sys, functools
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler

ROOT = os.path.dirname(os.path.abspath(__file__))
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765
COMPRESS_EXT = {'.js', '.mjs', '.css', '.html', '.json', '.wasm', '.task', '.glb', '.txt', '.svg'}

class Handler(SimpleHTTPRequestHandler):
    extensions_map = SimpleHTTPRequestHandler.extensions_map.copy()
    extensions_map.update({
        '.glb': 'model/gltf-binary', '.usdz': 'model/vnd.usdz+zip',
        '.js': 'text/javascript', '.mjs': 'text/javascript',
        '.wasm': 'application/wasm', '.hdr': 'image/vnd.radiance',
        '.ktx2': 'image/ktx2', '.task': 'application/octet-stream',
        '.json': 'application/json', '.mp3': 'audio/mpeg',
        '.mind': 'application/octet-stream',
    })

    def end_headers(self):
        if getattr(self, '_gzip', False):
            self.send_header('Content-Encoding', 'gzip')
            self.send_header('Vary', 'Accept-Encoding')
        super().end_headers()

    def send_head(self):
        path = self.translate_path(self.path.split('?', 1)[0].split('#', 1)[0])
        if os.path.isdir(path):
            return super().send_head()
        ext = os.path.splitext(path)[1].lower()
        accept = self.headers.get('Accept-Encoding', '')
        self._gzip = False
        if ext in COMPRESS_EXT and 'gzip' in accept and os.path.isfile(path):
            try:
                data = open(path, 'rb').read()
            except OSError:
                self.send_error(404)
                return None
            gz = gzip.compress(data, compresslevel=6)
            self._gzip = True
            self.send_response(200)
            self.send_header('Content-Type', self.guess_type(path))
            self.send_header('Content-Length', str(len(gz)))
            self.send_header('Last-Modified', self.date_time_string(os.path.getmtime(path)))
            self.end_headers()
            return io.BytesIO(gz)
        return super().send_head()

if __name__ == '__main__':
    print(f'Serving {ROOT} at http://localhost:{PORT}  (Ctrl+C 停止)', flush=True)
    ThreadingHTTPServer(('0.0.0.0', PORT), functools.partial(Handler, directory=ROOT)).serve_forever()
