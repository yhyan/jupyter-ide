# coding: utf-8
"""A tornado based Jupyter lab server."""

# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.

import json
import os
import os.path as osp
import sys
from os.path import join as pjoin

from jupyter_core.application import JupyterApp, NoStart, base_aliases, base_flags
from jupyter_server._version import version_info as jpserver_version_info
from jupyter_server.serverapp import flags
from jupyter_server.utils import url_path_join as ujoin

from jupyterlab_server import WORKSPACE_EXTENSION, LabServerApp, slugify
# from nbclassic.shim import NBClassicConfigShimMixin
from traitlets import Bool, Instance, Unicode, default

from ._version import __version__
from .commands import (
    DEV_DIR, HERE, AppOptions, build, clean, ensure_app,
    ensure_core, ensure_dev, get_app_dir, get_app_version,
    get_user_settings_dir, get_workspaces_dir, pjoin, watch,
    watch_dev
)

from .handlers.error_handler import ErrorHandler



DEV_NOTE = """You're running JupyterLab from source.
If you're working on the TypeScript sources of JupyterLab, try running

    jupyter lab --dev-mode --watch


to have the system incrementally watch and build JupyterLab for you, as you
make changes.
"""


CORE_NOTE = """
Running the core application with no additional extensions or settings
"""



version = __version__
app_version = get_app_version()
if version != app_version:
    version = '%s (dev), %s (app)' % (__version__, app_version)


clean_aliases = dict(base_aliases)
clean_aliases['app-dir'] = 'LabCleanApp.app_dir'

ext_warn_msg = "WARNING: this will delete all of your extensions, which will need to be reinstalled"



class LabPathApp(JupyterApp):
    version = version
    description = """
    Print the configured paths for the JupyterLab application

    The application path can be configured using the JUPYTERLAB_DIR
        environment variable.
    The user settings path can be configured using the JUPYTERLAB_SETTINGS_DIR
        environment variable or it will fall back to
        `/lab/user-settings` in the default Jupyter configuration directory.
    The workspaces path can be configured using the JUPYTERLAB_WORKSPACES_DIR
        environment variable or it will fall back to
        '/lab/workspaces' in the default Jupyter configuration directory.
    """
    def start(self):
        print('Application directory:   %s' % get_app_dir())
        print('User Settings directory: %s' % get_user_settings_dir())
        print('Workspaces directory: %s' % get_workspaces_dir())


class LabWorkspaceExportApp(JupyterApp):
    version = version
    description = """
    Export a JupyterLab workspace

    If no arguments are passed in, this command will export the default
        workspace.
    If a workspace name is passed in, this command will export that workspace.
    If no workspace is found, this command will export an empty workspace.
    """
    def start(self):
        app = LabApp(config=self.config)
        base_url = app.settings.get('base_url', '/')
        directory = app.workspaces_dir
        app_url = app.app_url

        if len(self.extra_args) > 1:
            print('Too many arguments were provided for workspace export.')
            self.exit(1)

        workspaces_url = ujoin(app_url, 'workspaces')
        raw = (app_url if not self.extra_args
               else ujoin(workspaces_url, self.extra_args[0]))
        slug = slugify(raw, base_url)
        workspace_path = pjoin(directory, slug + WORKSPACE_EXTENSION)

        if osp.exists(workspace_path):
            with open(workspace_path) as fid:
                try:  # to load the workspace file.
                    print(fid.read())
                except Exception as e:
                    print(json.dumps(dict(data=dict(), metadata=dict(id=raw))))
        else:
            print(json.dumps(dict(data=dict(), metadata=dict(id=raw))))


class LabWorkspaceImportApp(JupyterApp):
    version = version
    description = """
    Import a JupyterLab workspace

    This command will import a workspace from a JSON file. The format of the
        file must be the same as what the export functionality emits.
    """
    workspace_name = Unicode(
        None,
        config=True,
        allow_none=True,
        help="""
        Workspace name. If given, the workspace ID in the imported
        file will be replaced with a new ID pointing to this
        workspace name.
        """
    )

    aliases = {
        'name': 'LabWorkspaceImportApp.workspace_name'
    }

    def start(self):
        app = LabApp(config=self.config)
        base_url = app.settings.get('base_url', '/')
        directory = app.workspaces_dir
        app_url = app.app_url
        workspaces_url = ujoin(app.app_url, 'workspaces')

        if len(self.extra_args) != 1:
            print('One argument is required for workspace import.')
            self.exit(1)

        workspace = dict()
        with self._smart_open() as fid:
            try:  # to load, parse, and validate the workspace file.
                workspace = self._validate(fid, base_url, app_url, workspaces_url)
            except Exception as e:
                print('%s is not a valid workspace:\n%s' % (fid.name, e))
                self.exit(1)

        if not osp.exists(directory):
            try:
                os.makedirs(directory)
            except Exception as e:
                print('Workspaces directory could not be created:\n%s' % e)
                self.exit(1)

        slug = slugify(workspace['metadata']['id'], base_url)
        workspace_path = pjoin(directory, slug + WORKSPACE_EXTENSION)

        # Write the workspace data to a file.
        with open(workspace_path, 'w') as fid:
            fid.write(json.dumps(workspace))

        print('Saved workspace: %s' % workspace_path)

    def _smart_open(self):
        file_name = self.extra_args[0]

        if file_name == '-':
            return sys.stdin
        else:
            file_path = osp.abspath(file_name)

            if not osp.exists(file_path):
                print('%s does not exist.' % file_name)
                self.exit(1)

            return open(file_path)

    def _validate(self, data, base_url, app_url, workspaces_url):
        workspace = json.load(data)

        if 'data' not in workspace:
            raise Exception('The `data` field is missing.')

        # If workspace_name is set in config, inject the
        # name into the workspace metadata.
        if self.workspace_name is not None:
            if self.workspace_name == "":
                workspace_id = ujoin(base_url, app_url)
            else:
                workspace_id = ujoin(base_url, workspaces_url, self.workspace_name)
            workspace['metadata'] = {'id': workspace_id}
        # else check that the workspace_id is valid.
        else:
            if 'id' not in workspace['metadata']:
                raise Exception('The `id` field is missing in `metadata`.')
            else:
                id = workspace['metadata']['id']
                if id != ujoin(base_url, app_url) and not id.startswith(ujoin(base_url, workspaces_url)):
                    error = '%s does not match app_url or start with workspaces_url.'
                    raise Exception(error % id)

        return workspace


class LabWorkspaceApp(JupyterApp):
    version = version
    description = """
    Import or export a JupyterLab workspace

    There are two sub-commands for export or import of workspaces. This app
        should not otherwise do any work.
    """
    subcommands = dict()
    subcommands['export'] = (
        LabWorkspaceExportApp,
        LabWorkspaceExportApp.description.splitlines()[0]
    )
    subcommands['import'] = (
        LabWorkspaceImportApp,
        LabWorkspaceImportApp.description.splitlines()[0]
    )

    def start(self):
        try:
            super().start()
            print('Either `export` or `import` must be specified.')
            self.exit(1)
        except NoStart:
            pass
        self.exit(0)


aliases = dict(base_aliases)
aliases.update({
    'ip': 'ServerApp.ip',
    'port': 'ServerApp.port',
    'port-retries': 'ServerApp.port_retries',
    'keyfile': 'ServerApp.keyfile',
    'certfile': 'ServerApp.certfile',
    'client-ca': 'ServerApp.client_ca',
    'notebook-dir': 'ServerApp.root_dir',
    'browser': 'ServerApp.browser',
    'pylab': 'ServerApp.pylab',
})


class LabApp(LabServerApp):
    version = version

    name = "lab"
    app_name = "JupyterLab"

    # Should your extension expose other server extensions when launched directly?
    load_other_extensions = True

    description = """
    JupyterLab - An extensible computational environment for Jupyter.

    This launches a Tornado based HTML Server that serves up an
    HTML5/Javascript JupyterLab client.

    JupyterLab has three different modes of running:

    * Core mode (`--core-mode`): in this mode JupyterLab will run using the JavaScript
      assets contained in the installed `jupyterlab` Python package. In core mode, no
      extensions are enabled. This is the default in a stable JupyterLab release if you
      have no extensions installed.
    * Dev mode (`--dev-mode`): uses the unpublished local JavaScript packages in the
      `dev_mode` folder.  In this case JupyterLab will show a red stripe at the top of
      the page.  It can only be used if JupyterLab is installed as `pip install -e .`.
    * App mode: JupyterLab allows multiple JupyterLab "applications" to be
      created by the user with different combinations of extensions. The `--app-dir` can
      be used to set a directory for different applications. The default application
      path can be found using `jupyter lab path`.
    """

    examples = """
        jupyter lab                       # start JupyterLab
        jupyter lab --dev-mode            # start JupyterLab in development mode, with no extensions
        jupyter lab --core-mode           # start JupyterLab in core mode, with no extensions
        jupyter lab --app-dir=~/myjupyterlabapp # start JupyterLab with a particular set of extensions
        jupyter lab --certfile=mycert.pem # use SSL/TLS certificate
    """

    aliases = aliases
    aliases.update({
        'watch': 'LabApp.watch',
    })
    aliases['app-dir'] = 'LabApp.app_dir'

    flags = flags
    flags['core-mode'] = (
        {'LabApp': {'core_mode': True}},
        "Start the app in core mode."
    )
    flags['dev-mode'] = (
        {'LabApp': {'dev_mode': True}},
        "Start the app in dev mode for running from source."
    )
    flags['watch'] = (
        {'LabApp': {'watch': True}},
        "Start the app in watch mode."
    )
    flags['splice-source'] = (
        {'LabApp': {'splice_source': True}},
        "Splice source packages into app directory."
    )
    flags['expose-app-in-browser'] = (
        {'LabApp': {'expose_app_in_browser': True}},
        """Expose the global app instance to browser via window.jupyterapp.
        It is also available via the deprecated window.jupyterlab name."""
    )
    flags['extensions-in-dev-mode'] = (
        {'LabApp': {'extensions_in_dev_mode': True}},
        "Load prebuilt extensions in dev-mode."
    )
    flags['collaborative'] = (
        {'LabApp': {'collaborative': True}},
        "Whether to enable collaborative mode."
    )

    subcommands = dict(
        path=(LabPathApp, LabPathApp.description.splitlines()[0]),
        paths=(LabPathApp, LabPathApp.description.splitlines()[0]),
        workspace=(LabWorkspaceApp, LabWorkspaceApp.description.splitlines()[0]),
        workspaces=(LabWorkspaceApp, LabWorkspaceApp.description.splitlines()[0])
    )


    default_url = Unicode('/lab', config=True,
        help="The default URL to redirect to from `/`")

    override_static_url = Unicode(config=True, help=('The override url for static lab assets, typically a CDN.'))

    override_theme_url = Unicode(config=True, help=('The override url for static lab theme assets, typically a CDN.'))

    app_dir = Unicode(None, config=True,
        help="The app directory to launch JupyterLab from.")

    user_settings_dir = Unicode(get_user_settings_dir(), config=True,
        help="The directory for user settings.")

    workspaces_dir = Unicode(get_workspaces_dir(), config=True,
        help="The directory for workspaces")

    core_mode = Bool(False, config=True,
        help="""Whether to start the app in core mode. In this mode, JupyterLab
        will run using the JavaScript assets that are within the installed
        JupyterLab Python package. In core mode, third party extensions are disabled.
        The `--dev-mode` flag is an alias to this to be used when the Python package
        itself is installed in development mode (`pip install -e .`).
        """)

    dev_mode = Bool(False, config=True,
        help="""Whether to start the app in dev mode. Uses the unpublished local
        JavaScript packages in the `dev_mode` folder.  In this case JupyterLab will
        show a red stripe at the top of the page.  It can only be used if JupyterLab
        is installed as `pip install -e .`.
        """)

    extensions_in_dev_mode = Bool(False, config=True,
        help="""Whether to load prebuilt extensions in dev mode. This may be
        useful to run and test prebuilt extensions in development installs of
        JupyterLab. APIs in a JupyterLab development install may be
        incompatible with published packages, so prebuilt extensions compiled
        against published packages may not work correctly.""")

    watch = Bool(False, config=True,
        help="Whether to serve the app in watch mode")

    splice_source = Bool(False, config=True,
        help="Splice source packages into app directory.")

    expose_app_in_browser = Bool(False, config=True,
        help="Whether to expose the global app instance to browser via window.jupyterlab")

    collaborative = Bool(False, config=True,
        help="Whether to enable collaborative mode.")

    @default('app_dir')
    def _default_app_dir(self):
        app_dir = get_app_dir()  # share/jupyter/lab
        return app_dir

    @default('app_settings_dir')
    def _default_app_settings_dir(self):
        return pjoin(self.app_dir, 'settings')

    @default('app_version')
    def _default_app_version(self):
        return app_version

    @default('cache_files')
    def _default_cache_files(self):
        return False

    @default('schemas_dir')
    def _default_schemas_dir(self):
        return pjoin(self.app_dir, 'schemas')

    @default('templates_dir')
    def _default_templates_dir(self):
        return pjoin(self.app_dir, 'static')

    @default('themes_dir')
    def _default_themes_dir(self):
        if self.override_theme_url:
            return ''
        return pjoin(self.app_dir, 'themes')

    @default('static_dir')
    def _default_static_dir(self):
        return pjoin(self.app_dir, 'static')

    @default('static_url_prefix')
    def _default_static_url_prefix(self):
        if self.override_static_url:
            return self.override_static_url
        else:
            static_url = "/static/{name}/".format(
            name=self.name)
            return ujoin(self.serverapp.base_url, static_url)

    @default('theme_url')
    def _default_theme_url(self):
        if self.override_theme_url:
            return self.override_theme_url
        return ''

    def initialize_templates(self):

        self.static_paths = [self.static_dir]
        self.template_paths = [self.templates_dir]


    def initialize_settings(self):
        super().initialize_settings()


    def initialize_handlers(self):

        handlers = []
        # print("self.core_mode = %s, self.dev_mode = %s" % (self.core_mode, self.dev_mode))
        # default
        # self.core_mode = False
        # self.dev_mode = False

        # Set config for Jupyterlab
        page_config = self.serverapp.web_app.settings.setdefault('page_config_data', {})
        page_config.setdefault('buildAvailable', not self.core_mode and not self.dev_mode)
        page_config.setdefault('buildCheck', not self.core_mode and not self.dev_mode)
        page_config['devMode'] = self.dev_mode
        page_config['token'] = self.serverapp.token
        page_config['exposeAppInBrowser'] = self.expose_app_in_browser
        page_config['quitButton'] = self.serverapp.quit_button
        page_config['collaborative'] = self.collaborative
        page_config['allow_hidden_files'] = self.serverapp.contents_manager.allow_hidden

        # Client-side code assumes notebookVersion is a JSON-encoded string
        page_config['notebookVersion'] = json.dumps(jpserver_version_info)

        self.log.info('JupyterLab extension loaded from %s' % HERE)
        self.log.info('JupyterLab application directory is %s' % self.app_dir)

        build_handler_options = AppOptions(
            logger=self.log, app_dir=self.app_dir,
            labextensions_path=self.extra_labextensions_path + self.labextensions_path,
            splice_source=self.splice_source)


        errored = False

        if self.core_mode:
            self.log.info(CORE_NOTE.strip())
            ensure_core(self.log)
        elif self.dev_mode:
            if not self.watch:
                ensure_dev(self.log)
                self.log.info(DEV_NOTE)
        else:
            if self.splice_source:
                ensure_dev(self.log)
            msgs = ensure_app(self.app_dir)
            if msgs:
                [self.log.error(msg) for msg in msgs]
                handler = (self.app_url, ErrorHandler, { 'messages': msgs })
                handlers.append(handler)
                errored = True

        if self.watch:
            self.log.info('Starting JupyterLab watch mode...')
            if self.dev_mode:
                watch_dev(self.log)
            else:
                watch(app_options=build_handler_options)
                page_config['buildAvailable'] = False
            self.cache_files = False



        # Update Jupyter Server's webapp settings with jupyterlab settings.
        self.serverapp.web_app.settings['page_config_data'] = page_config

        # Extend Server handlers with jupyterlab handlers.
        self.handlers.extend(handlers)
        super().initialize_handlers()

    def initialize(self, argv=None):
        """Subclass because the ExtensionApp.initialize() method does not take arguments"""
        super().initialize()

#-----------------------------------------------------------------------------
# Main entry point
#-----------------------------------------------------------------------------

main = launch_new_instance = LabApp.launch_instance

if __name__ == '__main__':
    main()
