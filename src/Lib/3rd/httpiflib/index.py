from jinja2 import Environment
from jinja2 import FileSystemLoader
from .utils import Request, Response

# jupyterlab_server.handlers.LabHandler

page_config = {'buildAvailable': True,
 'buildCheck': True,
 'devMode': False,
 'token': 'c3aff563da0bcd8add403eaff2043b2889628fa0fbf0b86f',
 'exposeAppInBrowser': False,
 'quitButton': True,
 'collaborative': False,
 'allow_hidden_files': False,
 'notebookVersion': '[1, 13, 5, "", ""]',
 'fullStaticUrl': '/static/lab',
 'terminalsAvailable': False,
 'ignorePlugins': [],
 'serverRoot': 'D:/docs',
 'store_id': 0,
 'preferredPath': '/',
 'mathjaxConfig': 'TeX-AMS_HTML-full,Safe',
 'fullMathjaxUrl': 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.7/MathJax.js',
 'appName': 'JupyterLab',
 'appNamespace': 'lab',
 'appSettingsDir': 'D:/download/jupyter-ide/src/share/jupyter/lab/settings',
 'appUrl': '/lab',
 'appVersion': '3.2.9',
 'cacheFiles': False,
 'extraLabextensionsPath': [],
 'labextensionsPath': ['C:\\Users\\Yahua\\AppData\\Roaming\\jupyter\\labextensions',
  'D:\\download\\jupyter-ide\\src\\share\\jupyter\\labextensions',
  'C:\\ProgramData\\jupyter\\labextensions'],
 'labextensionsUrl': '/lab/extensions',
 'licensesUrl': '/lab/api/licenses',
 'listingsUrl': '/lab/api/listings',
 'schemasDir': 'D:/download/jupyter-ide/src/share/jupyter/lab/schemas',
 'settingsUrl': '/lab/api/settings',
 'staticDir': 'D:/download/jupyter-ide/src/share/jupyter/lab/static',
 'templatesDir': 'D:/download/jupyter-ide/src/share/jupyter/lab/static',
 'themesDir': 'D:/download/jupyter-ide/src/share/jupyter/lab/themes',
 'themesUrl': '/lab/api/themes',
 'translationsApiUrl': '/lab/api/translations',
 'treeUrl': '/lab/tree',
 'userSettingsDir': 'C:/Users/Yahua/.jupyter/lab/user-settings',
 'workspacesApiUrl': '/lab/api/workspaces',
 'workspacesDir': 'C:/Users/Yahua/.jupyter/lab/workspaces',
 'fullAppUrl': '/lab',
 'fullLabextensionsUrl': '/lab/extensions',
 'fullLicensesUrl': '/lab/api/licenses',
 'fullListingsUrl': '/lab/api/listings',
 'fullSettingsUrl': '/lab/api/settings',
 'fullThemesUrl': '/lab/api/themes',
 'fullTranslationsApiUrl': '/lab/api/translations',
 'fullTreeUrl': '/lab/tree',
 'fullWorkspacesApiUrl': '/lab/api/workspaces',
 'federated_extensions': [],
 'disabledExtensions': []}


_ns = {'base_url': '/',
'default_url': '/lab',
 'ws_url': '', 'logged_in': True,
 'allow_password_change': True,

 }

def handler(req: Request):
    resp = Response('HTTP/1.1 200 OK',
                    None,
                    None
                    )

    mode = None
    workspace = None
    tree = None

    workspace = (
        "default" if workspace is None else workspace.replace("/workspaces/", "")
    )
    tree_path = "" if tree is None else tree.replace("/tree/", "")

    if mode == "doc":
        page_config["mode"] = "single-document"
    else:
        page_config["mode"] = "multiple-document"
    page_config["workspace"] = workspace
    page_config["treePath"] = tree_path


    from http_interface import STATIC_PATH

    env = Environment(
        loader=FileSystemLoader(STATIC_PATH),
        extensions=["jinja2.ext.i18n"],
        autoescape=True,
    )
    template = env.get_template('index.html')
    html = template.render(page_config=page_config, **_ns)
    resp.body = html
    return resp


