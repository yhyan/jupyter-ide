
# build

登入 yhyan，切换到基于3.2.9 建立的分支

```commandline

~/jupyterlab$ git status
On branch tdx
Your branch is up to date with 'origin/tdx'.
```

```commandline

cd ~/jupyterlab

npm run build:core
```

build 的结果 在 

```
~/jupyterlab/jupyterlab/static$
```

目录下，把这个目录打包，然后替换到本地的 

```commandline

src/share/jupyter/lab/static
```

实现静态文件的替换。


# extension

style.js 中导入的extension

```commandline
application-extension
apputils-extension
celltags-extension
codemirror-extension
completer-extension
console-extension
csvviewer-extension
debugger-extension
docmanager-extension
docprovider-extension
documentsearch-extension
extensionmanager-extension
filebrowser-extension
fileeditor-extension
help-extension
htmlviewer-extension
hub-extension
imageviewer-extension
inspector-extension
javascript-extension
json-extension
launcher-extension
logconsole-extension
mainmenu-extension
markdownviewer-extension
mathjax2-extension
notebook-extension
pdf-extension
rendermime-extension
running-extension
settingeditor-extension
statusbar-extension
terminal-extension
toc-extension
tooltip-extension
translation-extension
ui-components-extension
vdom-extension
vega5-extension
```

packages 目录中存在的extension

```commandline
shortcuts-extension
theme-dark-extension
theme-light-extension


```


# extension 依赖关系图

(TODO) 画出 extension 的依赖关系图。



# debug 异常

```commandline

It seems the debugger cannot resolve D:\obj\windows-release\37amd64_Release\msi_python\zip_amd64\ntpath.py
This may make the debugger miss breakpoints in the standard library.
Related bug: https://bugs.python.org/issue1180193
```