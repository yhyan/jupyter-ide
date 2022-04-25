
from tornado.httputil import HTTPHeaders, parse_request_start_line, \
    parse_response_start_line

class Base(object):

    def serialize_headers(self):
        """HTTP headers as a bytestring."""
        def to_bytes(val, encoding):
            return val if isinstance(val, bytes) else val.encode(encoding)

        headers = [
            (to_bytes(key, 'ascii') + b': ' + to_bytes(value, 'latin-1'))
            for key, value in self.headers.items()
        ]
        return b'\r\n'.join(headers)



class Request(Base):

    def __init__(self, line, header, body):
        if line is not None:
            method, uri, version = parse_request_start_line(line.strip())
        self.method = method
        self.uri = uri
        self.version = version
        if header:
            self.headers = HTTPHeaders.parse(header.strip())
        else:
            self.headers = HTTPHeaders()
        self.body = body or b""


class Response(Base):

    def __init__(self, status_code, header, body):
        self.status_code = status_code
        self.version = 'HTTP/1.1'
        self.headers = header or HTTPHeaders()
        self.body = body or b""

    def serialize_headers(self):
        """HTTP headers as a bytestring."""
        def to_bytes(val, encoding):
            return val if isinstance(val, bytes) else val.encode(encoding)

        headers = [
            (to_bytes(key, 'ascii') + b': ' + to_bytes(value, 'latin-1'))
            for key, value in self.headers.items()
        ]
        return b'\r\n'.join(headers) + b'\r\n'

    def set_header(self, k, v):
        self.headers[k] = v

    def get_line(self):
        s = '%s %s OK\r\n' % (self.version, self.status_code)
        return s.encode('utf-8')

    def get_body(self):
        if isinstance(self.body, str):
            return self.body.encode('utf-8')
        elif isinstance(self.body, bytes):
            return self.body
        else:
            return b'error body type'


Resp404 = Response(404, '', """<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>404</title>
</head>
<body>
<h2>ERROR ..</h2>
</body>
</html>""")

if __name__ == "__main__":

    start_line = "post /lab HTTP/1.1"
    header = "Host:www.wrox.com"
    body = "name=Professional%20Ajax&publisher=Wiley"
    req = Request(start_line, header, body)
    print(req.method)
    print(req.headers['Host'])
    print(req.serialize_headers())






