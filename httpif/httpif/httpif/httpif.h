#pragma once
// 导出函数，使用“ _stdcall ” 标准调用
extern "C" _declspec(dllexport) void SayHello();
extern "C" _declspec(dllexport) int PythonInit();
extern "C" _declspec(dllexport) int http_request(
	char *req_line, int req_line_n, 
	char *req_header, int req_header_n,
	char *req_body, int req_body_n,

	char *resp_line, int resp_line_n,
	char *resp_header, int resp_header_n,
	char *resp_body, int resp_body_n
	);

