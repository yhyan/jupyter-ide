#define PY_SSIZE_T_CLEAN
#include "Python.h"

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

	const char *MyModuleName = "blah";
	const char *MyModuleCode = "print('Hello world2!');import sys;print(sys.path);";
	PyRun_SimpleString(MyModuleCode);
	

	return _python_init;
}

int http_request(
	char *req_line, int req_line_n,
	char *req_header, int req_header_n,
	char *req_body, int req_body_n,

	char *resp_line, int *resp_line_n, int MAX_LINE_N,
	char *resp_header, int *resp_header_n, int MAX_HEADER_N,
	char *resp_body, int *resp_body_n, int MAX_BODY_N
	)
{
	PyObject *pModule, *pFunc;
	PyObject *pArgs, *pRet;

	if (_python_init != 1) {
		Py_Initialize();
		_python_init = 1;
	}

	pModule = PyImport_ImportModule("http_interface");
	if (pModule != NULL) {
		pFunc = PyObject_GetAttrString(pModule, "http_wrapper");
		if (pFunc && PyCallable_Check(pFunc)) {
			pArgs = PyTuple_New(3);
			PyTuple_SetItem(pArgs, 0, PyUnicode_FromStringAndSize(req_line, req_line_n));
			PyTuple_SetItem(pArgs, 1, PyUnicode_FromStringAndSize(req_header, req_header_n));
			PyTuple_SetItem(pArgs, 2, PyUnicode_FromStringAndSize(req_body, req_body_n));
			pRet = PyObject_CallObject(pFunc, pArgs);
			Py_DECREF(pArgs);
			if (pRet != NULL) {
				PyTuple_Check(pRet);
				PyErr_Print();
				
				/*
				PyObject* repr = PyObject_Repr(pRet);
				PyObject* str = PyUnicode_AsEncodedString(repr, "utf-8", "~E~");
				const char *bytes = PyBytes_AS_STRING(str);

				printf("REPR: %s\n", bytes);
			
				
				Py_XDECREF(repr);
				Py_XDECREF(str);
			*/	

				PyObject *item = PyTuple_GetItem(pRet, 0);
				PyErr_Print();

				char *bytes = PyBytes_AsString(item);
				PyErr_Print();
				strncpy(resp_line, bytes, MAX_LINE_N - 1);
				resp_line[MAX_LINE_N - 1] = 0;
				*resp_line_n = strlen(resp_line);

				item = PyTuple_GetItem(pRet, 1);
				PyErr_Print();
				bytes = PyBytes_AsString(item);
				strncpy(resp_header, bytes, MAX_HEADER_N - 1);
				resp_header[MAX_HEADER_N - 1] = 0;
				*resp_header_n = strlen(resp_header);

				item = PyTuple_GetItem(pRet, 2);
				PyErr_Print();
				bytes = PyBytes_AsString(item);
				strncpy(resp_body, bytes, MAX_BODY_N - 1);
				resp_body[MAX_BODY_N - 1] = 0;
				*resp_body_n = strlen(resp_body);

				Py_DECREF(item); 
				Py_DECREF(pRet);
			}
		}
	}
	else {
		printf("import http_interface failed\n");
		PyErr_Print();
	}
	return 0;
}
