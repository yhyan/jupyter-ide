
from tornado.httputil import HTTPHeaders, parse_request_start_line

class Request(object):

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


class Response(object):

    def __init__(self, line, header, body):
        if line is not None:
            method, uri, version = line
        self.method = method
        self.uri = uri
        self.version = version
        self.headers = header or HTTPHeaders()
        self.body = body or b""



if __name__ == "__main__":

    start_line = "post /lab HTTP/1.1"
    header = "Host:www.wrox.com"
    body = "name=Professional%20Ajax&publisher=Wiley"
    req = Request(start_line, header, body)
    print(req.method)
    print(req.headers['Host'])






