#!/usr/bin/env python
#coding:utf-8

import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, 'Lib', '3rd'))
sys.path.insert(0, os.path.join(HERE, 'Lib', 'default'))

import jupyterlab
import jupyterlab.labapp

jupyterlab.labapp.LabApp.launch_instance()
app = jupyterlab.labapp.LabApp._instance

#serverapp = app.initialize_server()
print(app.web_app)
print(app.web_app.default_router)
print(app.web_app.wildcard_router)
print(HERE)


def http_warpper(req_line, req_header, req_body):

    from tornado.httputil import parse_request_start_line

    # http request:  line, header, blank, body
    # http response: line, header, blank, body




    return '', '', ''
