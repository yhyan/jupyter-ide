#!/usr/bin/env python
#coding:utf-8

def test(a, b):
    print("a=", a)
    print("b=", b)
    c = a + b
    print("a + b = ", c)
    return c
    
if __name__ == "__main__":
    print("你好")
    print("test")
    
    a = [1, 1, 2]
    for i in range(2, 100):
        
        a[i] = a[i - 1] + a[i - 2]
        
    
    print