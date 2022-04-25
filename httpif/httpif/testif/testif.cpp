#include <iostream>
#include <stdio.h>
#include "httpif.h"

char resp_line[1000];
int resp_line_n;
char resp_header[10000];
int resp_header_n;
char resp_body[1000000];
int resp_body_n;

int main(int argc, char *argv[])
{

	SayHello();
	PythonInit();

	char req_line[] = "GET /562f25980001b1b106000338.jpg HTTP/1.1\r\n";
	char req_header[] = "Host:    img.mukewang.com\r\n"\
		"User-Agent:    Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit / 537.36 (KHTML, like Gecko) Chrome / 51.0.2704.106 Safari / 537.36\r\n"\
		"Accept:    image / webp, image/*,*/*; q = 0.8\r\n"\
		"Referer:    http ://www.imooc.com/\r\n"\
		"Accept - Encoding:    gzip, deflate, sdch\r\n"\
		"Accept - Language:    zh - CN, zh; q = 0.8\r\n";

	http_request(
		req_line, strlen(req_line),
		req_header, strlen(req_header),
		"", 0,

		resp_line, &resp_line_n, 1000,
		resp_header, &resp_header_n, 10000,
		resp_body, &resp_body_n, 100000

		);

	printf("%s\n", resp_line);
	printf("%s\n", resp_header);
	printf("%s\n", resp_body);

	system("pause");
	return 0;
}