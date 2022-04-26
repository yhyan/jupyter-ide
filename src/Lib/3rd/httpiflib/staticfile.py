import os
import datetime
import re

from .utils import Request, Response, Resp404

def handler(req: Request):

    from http_interface import STATIC_PATH

    try:
        regex = re.compile('/static/lab/(.*)$')
        match = regex.match(req.uri)
        filename = match.groups()[0]
    except Exception as e:
        filename = None

    if filename is None:
        return Resp404

    filepath = os.path.join(STATIC_PATH, filename)

    if not os.path.exists(filepath):
        return Resp404

    with open(filepath, encoding="utf-8") as fp:
        content = fp.read()

    resp = Response(200,
                    None,
                    None
                    )

    resp.body = content.encode('utf-8')
    resp.set_header('Date', str(datetime.datetime.now()))
    resp.set_header('Content-Type', 'text/html; charset=UTF8')
    return resp
