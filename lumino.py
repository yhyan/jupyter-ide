pkgs = ['@lumino/coreutils: ^1.5.3',
 '@lumino/datagrid: ^0.20.0,',
 '@lumino/disposable: ^1.4.3',
 '@lumino/domutils: ^1.2.3,',
 '@lumino/dragdrop: ^1.7.1,',
 '@lumino/messaging: ^1.4.3,',
 '@lumino/polling: ^1.3.3,',
 '@lumino/properties: ^1.2.3,',
 '@lumino/signaling: ^1.4.3',
 '@lumino/virtualdom: ^1.8.0,',
 '@lumino/widgets: ^1.19.0']

for pkg in pkgs:
    tag = pkg.replace(': ^', '@').replace(',', '')
    name = pkg.split(':')[0].split('/')[1]
    print('git checkout %s' % tag)

    print('cp -r packages/%s ~/jupyterlab/lumino' % name)





