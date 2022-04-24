
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
            method, uri, version = parse_request_start_line(line)
        self.method = method
        self.uri = uri
        self.version = version
        if header:
            self.headers = HTTPHeaders.parse(header)
        else:
            self.headers = HTTPHeaders()
        self.body = body or b""


class Response(Base):

    def __init__(self, line, header, body):
        if line is not None:
            method, uri, version = parse_response_start_line(line)
        self.method = method
        self.uri = uri
        self.version = version
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
        return b'\r\n'.join(headers)

    def set_header(self, k, v):
        self.headers[k] = v



if __name__ == "__main__":

    start_line = "post /lab HTTP/1.1"
    header = "Host:www.wrox.com"
    body = "name=Professional%20Ajax&publisher=Wiley"
    req = Request(start_line, header, body)
    print(req.method)
    print(req.headers['Host'])
    print(req.serialize_headers())






