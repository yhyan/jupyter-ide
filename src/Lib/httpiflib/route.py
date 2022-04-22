import re

urls = [
(re.compile('/(?P<mode>lab|doc)(?P<workspace>/workspaces/[a-zA-Z0-9\\-\\_]+)?(?P<tree>/tree/.*)?$'), "jupyterlab_server.handlers.LabHandler"),
(re.compile('/lab/extensions/(.*)$'), "jupyter_server.base.handlers.FileFindHandler"),
(re.compile('/lab/api/settings/?$'), "jupyterlab_server.settings_handler.SettingsHandler"),
(re.compile('/lab/api/settings/(?P<schema_name>.+)$'), "jupyterlab_server.settings_handler.SettingsHandler"),
(re.compile('/lab/api/translations/?$'), "jupyterlab_server.translations_handler.TranslationsHandler"),
(re.compile('/lab/api/translations/(?P<locale>.*)$'), "jupyterlab_server.translations_handler.TranslationsHandler"),
(re.compile('/lab/api/workspaces/?$'), "jupyterlab_server.workspaces_handler.WorkspacesHandler"),
(re.compile('/lab/api/workspaces/(?P<space_name>.+)$'), "jupyterlab_server.workspaces_handler.WorkspacesHandler"),
(re.compile('/lab/api/listings/(.*)$'), "jupyterlab_server.listings_handler.ListingsHandler"),
(re.compile('/lab/api/themes/(.*)$'), "jupyterlab_server.themes_handler.ThemesHandler"),
(re.compile('/lab/api/licenses/(.*)$'), "jupyterlab_server.licenses_handler.LicensesHandler"),
(re.compile('/lab/.*$'), "jupyterlab_server.handlers.NotFoundHandler"),
(re.compile('/static/lab/(.*)$'), "jupyter_server.base.handlers.FileFindHandler"),
(re.compile('/(robots\\.txt)$'), "jupyter_server.base.handlers.FileFindHandler"),
(re.compile('/(favicon\\.ico)$'), "jupyter_server.base.handlers.FileFindHandler"),
(re.compile('/static/(.*)$'), "jupyter_server.base.handlers.FileFindHandler"),
(re.compile('/login$'), "jupyter_server.auth.login.LoginHandler"),
(re.compile('/logout$'), "jupyter_server.auth.logout.LogoutHandler"),
(re.compile('/api/spec.yaml$'), "jupyter_server.services.api.handlers.APISpecHandler"),
(re.compile('/api/status$'), "jupyter_server.services.api.handlers.APIStatusHandler"),
(re.compile('/api/config/(?P<section_name>\\w+)$'), "jupyter_server.services.config.handlers.ConfigHandler"),
(re.compile('/api/contents(?P<path>(?:(?:/[^/]+)+|/?))/checkpoints$'), "jupyter_server.services.contents.handlers.CheckpointsHandler"),
(re.compile('/api/contents(?P<path>(?:(?:/[^/]+)+|/?))/checkpoints/(?P<checkpoint_id>[\\w-]+)$'), "jupyter_server.services.contents.handlers.ModifyCheckpointsHandler"),
(re.compile('/api/contents(?P<path>(?:(?:/[^/]+)+|/?))/trust$'), "jupyter_server.services.contents.handlers.TrustNotebooksHandler"),
(re.compile('/api/contents(?P<path>(?:(?:/[^/]+)+|/?))$'), "jupyter_server.services.contents.handlers.ContentsHandler"),
(re.compile('/api/notebooks/?(.*)$'), "jupyter_server.services.contents.handlers.NotebooksRedirectHandler"),
(re.compile('/api/kernels$'), "jupyter_server.services.kernels.handlers.MainKernelHandler"),
(re.compile('/api/kernels/(?P<kernel_id>\\w+-\\w+-\\w+-\\w+-\\w+)$'), "jupyter_server.services.kernels.handlers.KernelHandler"),
(re.compile('/api/kernels/(?P<kernel_id>\\w+-\\w+-\\w+-\\w+-\\w+)/(?P<action>restart|interrupt)$'), "jupyter_server.services.kernels.handlers.KernelActionHandler"),
(re.compile('/api/kernels/(?P<kernel_id>\\w+-\\w+-\\w+-\\w+-\\w+)/channels$'), "jupyter_server.services.kernels.handlers.ZMQChannelsHandler"),
(re.compile('/kernelspecs/(?P<kernel_name>[\\w\\.\\-%]+)/(?P<path>.*)$'), "jupyter_server.kernelspecs.handlers.KernelSpecResourceHandler"),
(re.compile('/api/kernelspecs$'), "jupyter_server.services.kernelspecs.handlers.MainKernelSpecHandler"),
(re.compile('/api/kernelspecs/(?P<kernel_name>[\\w\\.\\-%]+)$'), "jupyter_server.services.kernelspecs.handlers.KernelSpecHandler"),
(re.compile('/nbconvert/(?P<format>\\w+)$'), "jupyter_server.nbconvert.handlers.NbconvertPostHandler"),
(re.compile('/nbconvert/(?P<format>\\w+)(?P<path>(?:(?:/[^/]+)+|/?))$'), "jupyter_server.nbconvert.handlers.NbconvertFileHandler"),
(re.compile('/api/nbconvert$'), "jupyter_server.services.nbconvert.handlers.NbconvertRootHandler"),
(re.compile('/api/security/csp-report$'), "jupyter_server.services.security.handlers.CSPReportHandler"),
(re.compile('/api/sessions/(?P<session_id>\\w+-\\w+-\\w+-\\w+-\\w+)$'), "jupyter_server.services.sessions.handlers.SessionHandler"),
(re.compile('/api/sessions$'), "jupyter_server.services.sessions.handlers.SessionRootHandler"),
(re.compile('/api/shutdown$'), "jupyter_server.services.shutdown.ShutdownHandler"),
(re.compile('/view(?P<path>(?:(?:/[^/]+)+|/?))$'), "jupyter_server.view.handlers.ViewHandler"),
(re.compile('/files/(.*)$'), "jupyter_server.base.handlers.AuthenticatedFileHandler"),
(re.compile('/.*/$'), "jupyter_server.base.handlers.TrailingSlashHandler"),
(re.compile('/api$'), "jupyter_server.base.handlers.APIVersionHandler"),
(re.compile('/(robots\\.txt|favicon\\.ico)$'), "tornado.web.StaticFileHandler"),
(re.compile('/metrics$'), "jupyter_server.base.handlers.PrometheusMetricsHandler"),
(re.compile('/?$'), "jupyter_server.base.handlers.RedirectWithParams"),
(re.compile('(.*)$'), "jupyter_server.base.handlers.Template404"),
]


def _get_handler_name(path):
    for r, name in urls:
        if r.match(path) is not None:
            return name
    return None

def get_func(path):
    name = _get_handler_name(path)
    if name is None:
        name = "jupyterlab_server.handlers.LabHandler"
    if name == "jupyterlab_server.handlers.LabHandler":
        from index import handler
        return handler



