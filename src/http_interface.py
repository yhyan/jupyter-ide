#!/usr/bin/env python
#coding:utf-8

import os
os.environ["HTTPIFTEST"] = "1"

import sys
from tornado.routing import Rule, PathMatches
from tornado.web import _ApplicationRouter

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, 'Lib', '3rd'))
sys.path.insert(0, os.path.join(HERE, 'Lib', 'default'))



if len(sys.argv) == 0:
    sys.argv.append('http_interface.py')

import jupyterlab
import jupyterlab.labapp

app = jupyterlab.labapp.LabApp.launch_instance()




def http_warpper(req_line, req_header, req_body):

    from tornado.httputil import parse_request_start_line

    # http request:  line, header, blank, body
    # http response: line, header, blank, body

    print(req_line)
    print(req_header)
    print(req_body)




    return 'a', 'b', 'c'


def print_rule(rule: Rule):

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

def print_rule2(rule: Rule):

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
Cookie: _xsrf=2|d172faa0|7fec5a423e058b2b960e626ae3bc76e1|1649639183; username-localhost-8891="2|1:0|10:1650271429|23:username-localhost-8891|44:MzFiMTk0NTI3YzdhNDZmOWIyOTg0NTc2NDQ2YzI3YWY=|36ca67a4b12361da7d38e2b13da8243473518407fdc6c8142d54965593e95799"; username-localhost-8889="2|1:0|10:1650277076|23:username-localhost-8889|44:OTE1MTU1NmM1YWE1NDRiYWI0NDIyNzQ3MzhiMjBmMmE=|36197456be1a35f68546723cd10c2afbc9cf4cb8fe6b93439fea2dd864c7fa23"; username-localhost-8890="2|1:0|10:1650277077|23:username-localhost-8890|44:OGM3YzkyNTA1ZmZjNGExYjliZjMyM2JlY2YxMzFhY2I=|a323e78d8b24ba4c12b9dd366116f8446f2c6f0a86f878815ad3a58476e666b5"; freePromorunningtmr=; isfreeretainend=; discount_free_trigger=; vipPromorunningtmr=; isvipretainend=; username-localhost-8888="2|1:0|10:1650522438|23:username-localhost-8888|44:YWQ2MzljYjVhYWFhNDcwZmIxNWJkZGY5ODBmYjAxZjE=|75a5db77e5c384d5fa373605ed82f66fad2dc56285df9e4d1e6631a4b8bd796c"
Host: localhost:8888
If-None-Match: "2c8007807ba0d4d495261ad0790de9c0c0380504"
sec-ch-ua: " Not A;Brand";v="99", "Chromium";v="100", "Google Chrome";v="100"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Windows"
Sec-Fetch-Dest: document
Sec-Fetch-Mode: navigate
Sec-Fetch-Site: same-origin
Sec-Fetch-User: ?1
Upgrade-Insecure-Requests: 1
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.127 Safari/537.36'''
    req_body = ''

    http_warpper(req_line, req_header, req_body)


if __name__ == "__main__":
    # testcase()
    mycase1()
