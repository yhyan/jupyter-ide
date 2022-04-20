#pragma once
// 导出函数，使用“ _stdcall ” 标准调用
extern "C" _declspec(dllexport) void SayHello();
extern "C" _declspec(dllexport) int PythonInit();
