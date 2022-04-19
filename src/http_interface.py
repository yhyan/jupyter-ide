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

print(HERE)
