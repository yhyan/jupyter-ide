#!/usr/bin/env python
#coding:utf-8

import os
os.environ["HTTPIFTEST"] = "1"

import sys

HERE = os.path.dirname(os.path.abspath(__file__))


STATIC_PATH = os.path.join(HERE, 'share', 'jupyter', 'lab', 'static')
_third_path = os.path.join(HERE, 'Lib', '3rd')
if _third_path not in sys.path:
    sys.path.insert(0, _third_path)

_default_path = os.path.join(HERE, 'Lib', 'default')
if _default_path not in sys.path:
    sys.path.insert(0, _default_path)

if '' not in sys.path:
    sys.path.insert(0, '')





if len(sys.argv) == 0:
    sys.argv.append('http_interface.py')






def http_wrapper(req_line, req_header, req_body):
    try:
        from httpiflib.utils import Request, Resp404
        from httpiflib.main import process_request

        # http request:  line, header, blank, body
        # http response: line, header, blank, body

        # print(req_line)
        # print(req_header)
        # print(req_body)
        req = Request(req_line, req_header, req_body)
        resp = process_request(req)
        return resp.get_line(), resp.serialize_headers(), resp.get_body()
    except Exception as e:
        import traceback
        print(traceback.format_exc())
        return Resp404.get_line(), Resp404.serialize_headers(), Resp404.get_body()



def print_rule(rule):
    from tornado.routing import Rule, PathMatches
    from tornado.web import _ApplicationRouter

    if isinstance(rule.matcher, PathMatches):
        s = "%r" % rule.matcher.regex
    else:
        s = "%r" % rule.matcher

    if isinstance(rule.target, _ApplicationRouter):
        for r in rule.target.rules:
            print_rule(r)
        return
    else:
        s += ', %s' % rule.target

    if rule.target_kwargs:
        s += ", kwargs=%r" % rule.target_kwargs
    if rule.name:
        s += ", name=%r" % rule.name
    print(s)

def print_rule2(rule):
    from tornado.routing import Rule, PathMatches
    from tornado.web import _ApplicationRouter

    s = "("
    if isinstance(rule.matcher, PathMatches):
        s += "%r" % rule.matcher.regex
    else:
        s += "%r" % rule.matcher

    if isinstance(rule.target, _ApplicationRouter):
        for r in rule.target.rules:
            print_rule2(r)
        return
    else:
        s += ', "%s.%s"' % (rule.target.__module__, rule.target.__name__)
    s += "),"
    print(s)


def mycase1():
    import jupyterlab
    import jupyterlab.labapp

    app = jupyterlab.labapp.LabApp.launch_instance()

    print(sys.path)

    print(sys.argv)
    # serverapp = app.initialize_server()
    print(app)
    print(app.web_app.default_router)
    for rule in app.web_app.default_router.rules:
        print_rule2(rule)
  #  print(app.web_app.wildcard_router)
  #  for rule in app.web_app.wildcard_router.rules:
  #      print_rule(rule)
    print(HERE)

def mycase2():

    req_line = "GET /lab HTTP/1.1"
    req_header = '''Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Accept-Encoding: gzip, deflate, br
Accept-Language: en-US,en;q=0.9,zh;q=0.8,ja;q=0.7,zh-TW;q=0.6,zh-CN;q=0.5,es;q=0.4,fr;q=0.3,nl;q=0.2
Cache-Control: max-age=0
Connection: keep-alive
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'''
    req_body = ''

    a, b, c = http_wrapper(req_line, req_header, req_body)
    print(a)
    print(b)
    print(c)

    req_line = "GET /static/lab/stylexxx.js HTTP/1.1"
    a, b, c = http_wrapper(req_line, req_header, req_body)
    print(a)
    print(b)
    print(c.decode("utf-8"))


    ff = os.listdir(STATIC_PATH)
    for f in ff:
        print("start req %s" % f)
        req_line = "GET /static/lab/%s HTTP/1.1" % f
        a, b, c = http_wrapper(req_line, req_header, req_body)
        print("finish req %s" % f)



if __name__ == "__main__":
    # testcase()
    mycase2()
