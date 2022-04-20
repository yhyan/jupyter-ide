#define PY_SSIZE_T_CLEAN
#include "Python.h"

#include <stdio.h>
#include "httpif.h"


void SayHello()
{
	printf("Hello world!\n");
}


static int _python_init = 0;

int PythonInit()
{
	if (_python_init != 1) {
		Py_Initialize();
		_python_init = 1;
	}
	return _python_init;
}
