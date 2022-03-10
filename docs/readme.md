
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


