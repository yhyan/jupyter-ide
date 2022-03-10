(self["webpackChunk_jupyterlab_application_top"] = self["webpackChunk_jupyterlab_application_top"] || []).push([["build_index_out_js"],{

/***/ "./build/index.out.js":
/*!****************************!*\
  !*** ./build/index.out.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/coreutils */ "webpack/sharing/consume/default/@jupyterlab/coreutils/@jupyterlab/coreutils");
/* harmony import */ var _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.js */ "./build/style.js");
// This file is auto-generated from the corresponding file in /dev_mode
/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/



// Promise.allSettled polyfill, until our supported browsers implement it
// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/allSettled
if (Promise.allSettled === undefined) {
  Promise.allSettled = promises =>
    Promise.all(
      promises.map(promise =>
        promise
          .then(value => ({
            status: "fulfilled",
            value,
          }), reason => ({
            status: "rejected",
            reason,
          }))
      )
    );
}



async function createModule(scope, module) {
  try {
    const factory = await window._JUPYTERLAB[scope].get(module);
    return factory();
  } catch(e) {
    console.warn(`Failed to create module: package: ${scope}; module: ${module}`);
    throw e;
  }
}

/**
 * The main entry point for the application.
 */
async function main() {

   // Handle a browser test.
   // Set up error handling prior to loading extensions.
   var browserTest = _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.getOption('browserTest');
   if (browserTest.toLowerCase() === 'true') {
     var el = document.createElement('div');
     el.id = 'browserTest';
     document.body.appendChild(el);
     el.textContent = '[]';
     el.style.display = 'none';
     var errors = [];
     var reported = false;
     var timeout = 25000;

     var report = function() {
       if (reported) {
         return;
       }
       reported = true;
       el.className = 'completed';
     }

     window.onerror = function(msg, url, line, col, error) {
       errors.push(String(error));
       el.textContent = JSON.stringify(errors)
     };
     console.error = function(message) {
       errors.push(String(message));
       el.textContent = JSON.stringify(errors)
     };
  }

  var JupyterLab = __webpack_require__(/*! @jupyterlab/application */ "webpack/sharing/consume/default/@jupyterlab/application/@jupyterlab/application").JupyterLab;
  var disabled = [];
  var deferred = [];
  var ignorePlugins = [];
  var register = [];


  const federatedExtensionPromises = [];
  const federatedMimeExtensionPromises = [];
  const federatedStylePromises = [];

  // Start initializing the federated extensions
  const extensions = JSON.parse(
    _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.getOption('federated_extensions')
  );

  const queuedFederated = [];

  extensions.forEach(data => {
    if (data.extension) {
      queuedFederated.push(data.name);
      federatedExtensionPromises.push(createModule(data.name, data.extension));
    }
    if (data.mimeExtension) {
      queuedFederated.push(data.name);
      federatedMimeExtensionPromises.push(createModule(data.name, data.mimeExtension));
    }
    if (data.style) {
      federatedStylePromises.push(createModule(data.name, data.style));
    }
  });

  /**
   * Iterate over active plugins in an extension.
   *
   * #### Notes
   * This also populates the disabled, deferred, and ignored arrays.
   */
  function* activePlugins(extension) {
    // Handle commonjs or es2015 modules
    let exports;
    if (extension.hasOwnProperty('__esModule')) {
      exports = extension.default;
    } else {
      // CommonJS exports.
      exports = extension;
    }

    let plugins = Array.isArray(exports) ? exports : [exports];
    for (let plugin of plugins) {
      if (_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.Extension.isDisabled(plugin.id)) {
        disabled.push(plugin.id);
        continue;
      }
      if (_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.Extension.isDeferred(plugin.id)) {
        deferred.push(plugin.id);
        ignorePlugins.push(plugin.id);
      }
      yield plugin;
    }
  }

  // Handle the registered mime extensions.
  const mimeExtensions = [];
  if (!queuedFederated.includes('@jupyterlab/javascript-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/javascript-extension */ "webpack/sharing/consume/default/@jupyterlab/javascript-extension/@jupyterlab/javascript-extension");
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/json-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/json-extension */ "webpack/sharing/consume/default/@jupyterlab/json-extension/@jupyterlab/json-extension");
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/pdf-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/pdf-extension */ "webpack/sharing/consume/default/@jupyterlab/pdf-extension/@jupyterlab/pdf-extension");
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/vega5-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/vega5-extension */ "webpack/sharing/consume/default/@jupyterlab/vega5-extension/@jupyterlab/vega5-extension");
      for (let plugin of activePlugins(ext)) {
        mimeExtensions.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Add the federated mime extensions.
  const federatedMimeExtensions = await Promise.allSettled(federatedMimeExtensionPromises);
  federatedMimeExtensions.forEach(p => {
    if (p.status === "fulfilled") {
      for (let plugin of activePlugins(p.value)) {
        mimeExtensions.push(plugin);
      }
    } else {
      console.error(p.reason);
    }
  });

  // Handled the registered standard extensions.
  if (!queuedFederated.includes('@jupyterlab/application-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/application-extension */ "webpack/sharing/consume/default/@jupyterlab/application-extension/@jupyterlab/application-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/apputils-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/apputils-extension */ "webpack/sharing/consume/default/@jupyterlab/apputils-extension/@jupyterlab/apputils-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/celltags-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/celltags-extension */ "webpack/sharing/consume/default/@jupyterlab/celltags-extension/@jupyterlab/celltags-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/codemirror-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/codemirror-extension */ "webpack/sharing/consume/default/@jupyterlab/codemirror-extension/@jupyterlab/codemirror-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/completer-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/completer-extension */ "webpack/sharing/consume/default/@jupyterlab/completer-extension/@jupyterlab/completer-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/console-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/console-extension */ "webpack/sharing/consume/default/@jupyterlab/console-extension/@jupyterlab/console-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/csvviewer-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/csvviewer-extension */ "webpack/sharing/consume/default/@jupyterlab/csvviewer-extension/@jupyterlab/csvviewer-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/debugger-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/debugger-extension */ "webpack/sharing/consume/default/@jupyterlab/debugger-extension/@jupyterlab/debugger-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/docmanager-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/docmanager-extension */ "webpack/sharing/consume/default/@jupyterlab/docmanager-extension/@jupyterlab/docmanager-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/docprovider-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/docprovider-extension */ "webpack/sharing/consume/default/@jupyterlab/docprovider-extension/@jupyterlab/docprovider-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/documentsearch-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/documentsearch-extension */ "webpack/sharing/consume/default/@jupyterlab/documentsearch-extension/@jupyterlab/documentsearch-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/extensionmanager-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/extensionmanager-extension */ "webpack/sharing/consume/default/@jupyterlab/extensionmanager-extension/@jupyterlab/extensionmanager-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/filebrowser-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/filebrowser-extension */ "webpack/sharing/consume/default/@jupyterlab/filebrowser-extension/@jupyterlab/filebrowser-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/fileeditor-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/fileeditor-extension */ "webpack/sharing/consume/default/@jupyterlab/fileeditor-extension/@jupyterlab/fileeditor-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/help-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/help-extension */ "webpack/sharing/consume/default/@jupyterlab/help-extension/@jupyterlab/help-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/htmlviewer-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/htmlviewer-extension */ "webpack/sharing/consume/default/@jupyterlab/htmlviewer-extension/@jupyterlab/htmlviewer-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/hub-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/hub-extension */ "webpack/sharing/consume/default/@jupyterlab/hub-extension/@jupyterlab/hub-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/imageviewer-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/imageviewer-extension */ "webpack/sharing/consume/default/@jupyterlab/imageviewer-extension/@jupyterlab/imageviewer-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/inspector-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/inspector-extension */ "webpack/sharing/consume/default/@jupyterlab/inspector-extension/@jupyterlab/inspector-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/launcher-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/launcher-extension */ "webpack/sharing/consume/default/@jupyterlab/launcher-extension/@jupyterlab/launcher-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/logconsole-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/logconsole-extension */ "webpack/sharing/consume/default/@jupyterlab/logconsole-extension/@jupyterlab/logconsole-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/mainmenu-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/mainmenu-extension */ "webpack/sharing/consume/default/@jupyterlab/mainmenu-extension/@jupyterlab/mainmenu-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/markdownviewer-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/markdownviewer-extension */ "webpack/sharing/consume/default/@jupyterlab/markdownviewer-extension/@jupyterlab/markdownviewer-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/mathjax2-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/mathjax2-extension */ "webpack/sharing/consume/default/@jupyterlab/mathjax2-extension/@jupyterlab/mathjax2-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/notebook-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/notebook-extension */ "webpack/sharing/consume/default/@jupyterlab/notebook-extension/@jupyterlab/notebook-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/rendermime-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/rendermime-extension */ "webpack/sharing/consume/default/@jupyterlab/rendermime-extension/@jupyterlab/rendermime-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/running-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/running-extension */ "webpack/sharing/consume/default/@jupyterlab/running-extension/@jupyterlab/running-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/settingeditor-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/settingeditor-extension */ "webpack/sharing/consume/default/@jupyterlab/settingeditor-extension/@jupyterlab/settingeditor-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/shortcuts-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/shortcuts-extension */ "webpack/sharing/consume/default/@jupyterlab/shortcuts-extension/@jupyterlab/shortcuts-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/statusbar-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/statusbar-extension */ "webpack/sharing/consume/default/@jupyterlab/statusbar-extension/@jupyterlab/statusbar-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/terminal-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/terminal-extension */ "webpack/sharing/consume/default/@jupyterlab/terminal-extension/@jupyterlab/terminal-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/theme-dark-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/theme-dark-extension */ "webpack/sharing/consume/default/@jupyterlab/theme-dark-extension/@jupyterlab/theme-dark-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/theme-light-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/theme-light-extension */ "webpack/sharing/consume/default/@jupyterlab/theme-light-extension/@jupyterlab/theme-light-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/toc-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/toc-extension */ "webpack/sharing/consume/default/@jupyterlab/toc-extension/@jupyterlab/toc-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/tooltip-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/tooltip-extension */ "webpack/sharing/consume/default/@jupyterlab/tooltip-extension/@jupyterlab/tooltip-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/translation-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/translation-extension */ "webpack/sharing/consume/default/@jupyterlab/translation-extension/@jupyterlab/translation-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/ui-components-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/ui-components-extension */ "webpack/sharing/consume/default/@jupyterlab/ui-components-extension/@jupyterlab/ui-components-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }
  if (!queuedFederated.includes('@jupyterlab/vdom-extension')) {
    try {
      let ext = __webpack_require__(/*! @jupyterlab/vdom-extension */ "webpack/sharing/consume/default/@jupyterlab/vdom-extension/@jupyterlab/vdom-extension");
      for (let plugin of activePlugins(ext)) {
        register.push(plugin);
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Add the federated extensions.
  const federatedExtensions = await Promise.allSettled(federatedExtensionPromises);
  federatedExtensions.forEach(p => {
    if (p.status === "fulfilled") {
      for (let plugin of activePlugins(p.value)) {
        register.push(plugin);
      }
    } else {
      console.error(p.reason);
    }
  });

  // Load all federated component styles and log errors for any that do not
  (await Promise.allSettled(federatedStylePromises)).filter(({status}) => status === "rejected").forEach(({reason}) => {
    console.error(reason);
  });

  const lab = new JupyterLab({
    mimeExtensions,
    disabled: {
      matches: disabled,
      patterns: _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.Extension.disabled.map(function (val) { return val.raw; })
    },
    deferred: {
      matches: deferred,
      patterns: _jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.Extension.deferred.map(function (val) { return val.raw; })
    },
  });
  register.forEach(function(item) { lab.registerPluginModule(item); });
  lab.start({ ignorePlugins });

  // Expose global app instance when in dev mode or when toggled explicitly.
  var exposeAppInBrowser = (_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.getOption('exposeAppInBrowser') || '').toLowerCase() === 'true';
  var devMode = (_jupyterlab_coreutils__WEBPACK_IMPORTED_MODULE_0__.PageConfig.getOption('devMode') || '').toLowerCase() === 'true';

  if (exposeAppInBrowser || devMode) {
    window.jupyterlab = lab;
    window.jupyterapp = lab;
  }

  // Handle a browser test.
  if (browserTest.toLowerCase() === 'true') {
    lab.restored
      .then(function() { report(errors); })
      .catch(function(reason) { report([`RestoreError: ${reason.message}`]); });

    // Handle failures to restore after the timeout has elapsed.
    window.setTimeout(function() { report(errors); }, timeout);
  }

}


/***/ }),

/***/ "./build/style.js":
/*!************************!*\
  !*** ./build/style.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _jupyterlab_application_extension_style_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @jupyterlab/application-extension/style/index.js */ "./node_modules/@jupyterlab/application-extension/style/index.js");
/* harmony import */ var _jupyterlab_apputils_extension_style_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @jupyterlab/apputils-extension/style/index.js */ "./node_modules/@jupyterlab/apputils-extension/style/index.js");
/* harmony import */ var _jupyterlab_celltags_extension_style_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @jupyterlab/celltags-extension/style/index.js */ "./node_modules/@jupyterlab/celltags-extension/style/index.js");
/* harmony import */ var _jupyterlab_codemirror_extension_style_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @jupyterlab/codemirror-extension/style/index.js */ "./node_modules/@jupyterlab/codemirror-extension/style/index.js");
/* harmony import */ var _jupyterlab_completer_extension_style_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @jupyterlab/completer-extension/style/index.js */ "./node_modules/@jupyterlab/completer-extension/style/index.js");
/* harmony import */ var _jupyterlab_console_extension_style_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @jupyterlab/console-extension/style/index.js */ "./node_modules/@jupyterlab/console-extension/style/index.js");
/* harmony import */ var _jupyterlab_csvviewer_extension_style_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jupyterlab/csvviewer-extension/style/index.js */ "./node_modules/@jupyterlab/csvviewer-extension/style/index.js");
/* harmony import */ var _jupyterlab_debugger_extension_style_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jupyterlab/debugger-extension/style/index.js */ "./node_modules/@jupyterlab/debugger-extension/style/index.js");
/* harmony import */ var _jupyterlab_docmanager_extension_style_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jupyterlab/docmanager-extension/style/index.js */ "./node_modules/@jupyterlab/docmanager-extension/style/index.js");
/* harmony import */ var _jupyterlab_docprovider_extension_style_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jupyterlab/docprovider-extension/style/index.js */ "./node_modules/@jupyterlab/docprovider-extension/style/index.js");
/* harmony import */ var _jupyterlab_documentsearch_extension_style_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @jupyterlab/documentsearch-extension/style/index.js */ "./node_modules/@jupyterlab/documentsearch-extension/style/index.js");
/* harmony import */ var _jupyterlab_extensionmanager_extension_style_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jupyterlab/extensionmanager-extension/style/index.js */ "./node_modules/@jupyterlab/extensionmanager-extension/style/index.js");
/* harmony import */ var _jupyterlab_filebrowser_extension_style_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @jupyterlab/filebrowser-extension/style/index.js */ "./node_modules/@jupyterlab/filebrowser-extension/style/index.js");
/* harmony import */ var _jupyterlab_fileeditor_extension_style_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @jupyterlab/fileeditor-extension/style/index.js */ "./node_modules/@jupyterlab/fileeditor-extension/style/index.js");
/* harmony import */ var _jupyterlab_help_extension_style_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @jupyterlab/help-extension/style/index.js */ "./node_modules/@jupyterlab/help-extension/style/index.js");
/* harmony import */ var _jupyterlab_htmlviewer_extension_style_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @jupyterlab/htmlviewer-extension/style/index.js */ "./node_modules/@jupyterlab/htmlviewer-extension/style/index.js");
/* harmony import */ var _jupyterlab_hub_extension_style_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @jupyterlab/hub-extension/style/index.js */ "./node_modules/@jupyterlab/hub-extension/style/index.js");
/* harmony import */ var _jupyterlab_imageviewer_extension_style_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @jupyterlab/imageviewer-extension/style/index.js */ "./node_modules/@jupyterlab/imageviewer-extension/style/index.js");
/* harmony import */ var _jupyterlab_inspector_extension_style_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @jupyterlab/inspector-extension/style/index.js */ "./node_modules/@jupyterlab/inspector-extension/style/index.js");
/* harmony import */ var _jupyterlab_javascript_extension_style_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @jupyterlab/javascript-extension/style/index.js */ "./node_modules/@jupyterlab/javascript-extension/style/index.js");
/* harmony import */ var _jupyterlab_json_extension_style_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @jupyterlab/json-extension/style/index.js */ "./node_modules/@jupyterlab/json-extension/style/index.js");
/* harmony import */ var _jupyterlab_launcher_extension_style_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @jupyterlab/launcher-extension/style/index.js */ "./node_modules/@jupyterlab/launcher-extension/style/index.js");
/* harmony import */ var _jupyterlab_logconsole_extension_style_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @jupyterlab/logconsole-extension/style/index.js */ "./node_modules/@jupyterlab/logconsole-extension/style/index.js");
/* harmony import */ var _jupyterlab_mainmenu_extension_style_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @jupyterlab/mainmenu-extension/style/index.js */ "./node_modules/@jupyterlab/mainmenu-extension/style/index.js");
/* harmony import */ var _jupyterlab_markdownviewer_extension_style_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @jupyterlab/markdownviewer-extension/style/index.js */ "./node_modules/@jupyterlab/markdownviewer-extension/style/index.js");
/* harmony import */ var _jupyterlab_mathjax2_extension_style_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @jupyterlab/mathjax2-extension/style/index.js */ "./node_modules/@jupyterlab/mathjax2-extension/style/index.js");
/* harmony import */ var _jupyterlab_notebook_extension_style_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @jupyterlab/notebook-extension/style/index.js */ "./node_modules/@jupyterlab/notebook-extension/style/index.js");
/* harmony import */ var _jupyterlab_pdf_extension_style_index_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @jupyterlab/pdf-extension/style/index.js */ "./node_modules/@jupyterlab/pdf-extension/style/index.js");
/* harmony import */ var _jupyterlab_rendermime_extension_style_index_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @jupyterlab/rendermime-extension/style/index.js */ "./node_modules/@jupyterlab/rendermime-extension/style/index.js");
/* harmony import */ var _jupyterlab_running_extension_style_index_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @jupyterlab/running-extension/style/index.js */ "./node_modules/@jupyterlab/running-extension/style/index.js");
/* harmony import */ var _jupyterlab_settingeditor_extension_style_index_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @jupyterlab/settingeditor-extension/style/index.js */ "./node_modules/@jupyterlab/settingeditor-extension/style/index.js");
/* harmony import */ var _jupyterlab_statusbar_extension_style_index_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @jupyterlab/statusbar-extension/style/index.js */ "./node_modules/@jupyterlab/statusbar-extension/style/index.js");
/* harmony import */ var _jupyterlab_terminal_extension_style_index_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @jupyterlab/terminal-extension/style/index.js */ "./node_modules/@jupyterlab/terminal-extension/style/index.js");
/* harmony import */ var _jupyterlab_toc_extension_style_index_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @jupyterlab/toc-extension/style/index.js */ "./node_modules/@jupyterlab/toc-extension/style/index.js");
/* harmony import */ var _jupyterlab_tooltip_extension_style_index_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @jupyterlab/tooltip-extension/style/index.js */ "./node_modules/@jupyterlab/tooltip-extension/style/index.js");
/* harmony import */ var _jupyterlab_translation_extension_style_index_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @jupyterlab/translation-extension/style/index.js */ "./node_modules/@jupyterlab/translation-extension/style/index.js");
/* harmony import */ var _jupyterlab_ui_components_extension_style_index_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @jupyterlab/ui-components-extension/style/index.js */ "./node_modules/@jupyterlab/ui-components-extension/style/index.js");
/* harmony import */ var _jupyterlab_vdom_extension_style_index_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @jupyterlab/vdom-extension/style/index.js */ "./node_modules/@jupyterlab/vdom-extension/style/index.js");
/* harmony import */ var _jupyterlab_vega5_extension_style_index_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @jupyterlab/vega5-extension/style/index.js */ "./node_modules/@jupyterlab/vega5-extension/style/index.js");
/* This is a generated file of CSS imports */
/* It was generated by @jupyterlab/builder in Build.ensureAssets() */










































/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AanVweXRlcmxhYi9hcHBsaWNhdGlvbi10b3AvLi9idWlsZC9pbmRleC5vdXQuanMiLCJ3ZWJwYWNrOi8vQGp1cHl0ZXJsYWIvYXBwbGljYXRpb24tdG9wLy4vYnVpbGQvc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNEQUFzRCxPQUFPLFdBQVcsT0FBTztBQUMvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBLHFCQUFxQix1RUFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0pBQTZDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdUVBQW9CO0FBQ3hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsa0ZBQStCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0ZBQStCO0FBQ3pDO0FBQ0E7QUFDQTtB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QUFDbEg7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9GQUNKLGlCQUFpQixnQkFBZ0IsRUFBRTtBQUMvQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixvRkFDSixpQkFBaUIsZ0JBQWdCLEVBQUU7QUFDL0MsS0FBSztBQUNMLEdBQUc7QUFDSCxtQ0FBbUMsZ0NBQWdDLEVBQUU7QUFDckUsYUFBYSxnQkFBZ0I7O0FBRTdCO0FBQ0EsNEJBQTRCLHVFQUFvQjtBQUNoRCxpQkFBaUIsdUVBQW9COztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCLEVBQUU7QUFDMUMsK0JBQStCLDBCQUEwQixlQUFlLElBQUksRUFBRTs7QUFFOUU7QUFDQSxrQ0FBa0MsZ0JBQWdCLEVBQUU7QUFDcEQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqbkJBO0FBQ0E7O0FBRTBEO0FBQ0g7QUFDQTtBQUNFO0FBQ0Q7QUFDRjtBQUNFO0FBQ0Q7QUFDRTtBQUNDO0FBQ0c7QUFDRTtBQUNMO0FBQ0Q7QUFDTjtBQUNNO0FBQ1A7QUFDUTtBQUNGO0FBQ0M7QUFDTjtBQUNJO0FBQ0U7QUFDRjtBQUNNO0FBQ047QUFDQTtBQUNMO0FBQ087QUFDSDtBQUNNO0FBQ0o7QUFDRDtBQUNMO0FBQ0k7QUFDSTtBQUNFO0FBQ1Q7QUFDQyIsImZpbGUiOiJidWlsZF9pbmRleF9vdXRfanMuMjc0NDY3ZTRlMTIwYjI5NjU4Y2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgYXV0by1nZW5lcmF0ZWQgZnJvbSB0aGUgY29ycmVzcG9uZGluZyBmaWxlIGluIC9kZXZfbW9kZVxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxufCBDb3B5cmlnaHQgKGMpIEp1cHl0ZXIgRGV2ZWxvcG1lbnQgVGVhbS5cbnwgRGlzdHJpYnV0ZWQgdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBNb2RpZmllZCBCU0QgTGljZW5zZS5cbnwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuaW1wb3J0IHsgUGFnZUNvbmZpZyB9IGZyb20gJ0BqdXB5dGVybGFiL2NvcmV1dGlscyc7XG5cbi8vIFByb21pc2UuYWxsU2V0dGxlZCBwb2x5ZmlsbCwgdW50aWwgb3VyIHN1cHBvcnRlZCBicm93c2VycyBpbXBsZW1lbnQgaXRcbi8vIFNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9Qcm9taXNlL2FsbFNldHRsZWRcbmlmIChQcm9taXNlLmFsbFNldHRsZWQgPT09IHVuZGVmaW5lZCkge1xuICBQcm9taXNlLmFsbFNldHRsZWQgPSBwcm9taXNlcyA9PlxuICAgIFByb21pc2UuYWxsKFxuICAgICAgcHJvbWlzZXMubWFwKHByb21pc2UgPT5cbiAgICAgICAgcHJvbWlzZVxuICAgICAgICAgIC50aGVuKHZhbHVlID0+ICh7XG4gICAgICAgICAgICBzdGF0dXM6IFwiZnVsZmlsbGVkXCIsXG4gICAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICB9KSwgcmVhc29uID0+ICh7XG4gICAgICAgICAgICBzdGF0dXM6IFwicmVqZWN0ZWRcIixcbiAgICAgICAgICAgIHJlYXNvbixcbiAgICAgICAgICB9KSlcbiAgICAgIClcbiAgICApO1xufVxuXG5pbXBvcnQgJy4vc3R5bGUuanMnO1xuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVNb2R1bGUoc2NvcGUsIG1vZHVsZSkge1xuICB0cnkge1xuICAgIGNvbnN0IGZhY3RvcnkgPSBhd2FpdCB3aW5kb3cuX0pVUFlURVJMQUJbc2NvcGVdLmdldChtb2R1bGUpO1xuICAgIHJldHVybiBmYWN0b3J5KCk7XG4gIH0gY2F0Y2goZSkge1xuICAgIGNvbnNvbGUud2FybihgRmFpbGVkIHRvIGNyZWF0ZSBtb2R1bGU6IHBhY2thZ2U6ICR7c2NvcGV9OyBtb2R1bGU6ICR7bW9kdWxlfWApO1xuICAgIHRocm93IGU7XG4gIH1cbn1cblxuLyoqXG4gKiBUaGUgbWFpbiBlbnRyeSBwb2ludCBmb3IgdGhlIGFwcGxpY2F0aW9uLlxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFpbigpIHtcblxuICAgLy8gSGFuZGxlIGEgYnJvd3NlciB0ZXN0LlxuICAgLy8gU2V0IHVwIGVycm9yIGhhbmRsaW5nIHByaW9yIHRvIGxvYWRpbmcgZXh0ZW5zaW9ucy5cbiAgIHZhciBicm93c2VyVGVzdCA9IFBhZ2VDb25maWcuZ2V0T3B0aW9uKCdicm93c2VyVGVzdCcpO1xuICAgaWYgKGJyb3dzZXJUZXN0LnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xuICAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgZWwuaWQgPSAnYnJvd3NlclRlc3QnO1xuICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgZWwudGV4dENvbnRlbnQgPSAnW10nO1xuICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICB2YXIgZXJyb3JzID0gW107XG4gICAgIHZhciByZXBvcnRlZCA9IGZhbHNlO1xuICAgICB2YXIgdGltZW91dCA9IDI1MDAwO1xuXG4gICAgIHZhciByZXBvcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICBpZiAocmVwb3J0ZWQpIHtcbiAgICAgICAgIHJldHVybjtcbiAgICAgICB9XG4gICAgICAgcmVwb3J0ZWQgPSB0cnVlO1xuICAgICAgIGVsLmNsYXNzTmFtZSA9ICdjb21wbGV0ZWQnO1xuICAgICB9XG5cbiAgICAgd2luZG93Lm9uZXJyb3IgPSBmdW5jdGlvbihtc2csIHVybCwgbGluZSwgY29sLCBlcnJvcikge1xuICAgICAgIGVycm9ycy5wdXNoKFN0cmluZyhlcnJvcikpO1xuICAgICAgIGVsLnRleHRDb250ZW50ID0gSlNPTi5zdHJpbmdpZnkoZXJyb3JzKVxuICAgICB9O1xuICAgICBjb25zb2xlLmVycm9yID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgIGVycm9ycy5wdXNoKFN0cmluZyhtZXNzYWdlKSk7XG4gICAgICAgZWwudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShlcnJvcnMpXG4gICAgIH07XG4gIH1cblxuICB2YXIgSnVweXRlckxhYiA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2FwcGxpY2F0aW9uJykuSnVweXRlckxhYjtcbiAgdmFyIGRpc2FibGVkID0gW107XG4gIHZhciBkZWZlcnJlZCA9IFtdO1xuICB2YXIgaWdub3JlUGx1Z2lucyA9IFtdO1xuICB2YXIgcmVnaXN0ZXIgPSBbXTtcblxuXG4gIGNvbnN0IGZlZGVyYXRlZEV4dGVuc2lvblByb21pc2VzID0gW107XG4gIGNvbnN0IGZlZGVyYXRlZE1pbWVFeHRlbnNpb25Qcm9taXNlcyA9IFtdO1xuICBjb25zdCBmZWRlcmF0ZWRTdHlsZVByb21pc2VzID0gW107XG5cbiAgLy8gU3RhcnQgaW5pdGlhbGl6aW5nIHRoZSBmZWRlcmF0ZWQgZXh0ZW5zaW9uc1xuICBjb25zdCBleHRlbnNpb25zID0gSlNPTi5wYXJzZShcbiAgICBQYWdlQ29uZmlnLmdldE9wdGlvbignZmVkZXJhdGVkX2V4dGVuc2lvbnMnKVxuICApO1xuXG4gIGNvbnN0IHF1ZXVlZEZlZGVyYXRlZCA9IFtdO1xuXG4gIGV4dGVuc2lvbnMuZm9yRWFjaChkYXRhID0+IHtcbiAgICBpZiAoZGF0YS5leHRlbnNpb24pIHtcbiAgICAgIHF1ZXVlZEZlZGVyYXRlZC5wdXNoKGRhdGEubmFtZSk7XG4gICAgICBmZWRlcmF0ZWRFeHRlbnNpb25Qcm9taXNlcy5wdXNoKGNyZWF0ZU1vZHVsZShkYXRhLm5hbWUsIGRhdGEuZXh0ZW5zaW9uKSk7XG4gICAgfVxuICAgIGlmIChkYXRhLm1pbWVFeHRlbnNpb24pIHtcbiAgICAgIHF1ZXVlZEZlZGVyYXRlZC5wdXNoKGRhdGEubmFtZSk7XG4gICAgICBmZWRlcmF0ZWRNaW1lRXh0ZW5zaW9uUHJvbWlzZXMucHVzaChjcmVhdGVNb2R1bGUoZGF0YS5uYW1lLCBkYXRhLm1pbWVFeHRlbnNpb24pKTtcbiAgICB9XG4gICAgaWYgKGRhdGEuc3R5bGUpIHtcbiAgICAgIGZlZGVyYXRlZFN0eWxlUHJvbWlzZXMucHVzaChjcmVhdGVNb2R1bGUoZGF0YS5uYW1lLCBkYXRhLnN0eWxlKSk7XG4gICAgfVxuICB9KTtcblxuICAvKipcbiAgICogSXRlcmF0ZSBvdmVyIGFjdGl2ZSBwbHVnaW5zIGluIGFuIGV4dGVuc2lvbi5cbiAgICpcbiAgICogIyMjIyBOb3Rlc1xuICAgKiBUaGlzIGFsc28gcG9wdWxhdGVzIHRoZSBkaXNhYmxlZCwgZGVmZXJyZWQsIGFuZCBpZ25vcmVkIGFycmF5cy5cbiAgICovXG4gIGZ1bmN0aW9uKiBhY3RpdmVQbHVnaW5zKGV4dGVuc2lvbikge1xuICAgIC8vIEhhbmRsZSBjb21tb25qcyBvciBlczIwMTUgbW9kdWxlc1xuICAgIGxldCBleHBvcnRzO1xuICAgIGlmIChleHRlbnNpb24uaGFzT3duUHJvcGVydHkoJ19fZXNNb2R1bGUnKSkge1xuICAgICAgZXhwb3J0cyA9IGV4dGVuc2lvbi5kZWZhdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb21tb25KUyBleHBvcnRzLlxuICAgICAgZXhwb3J0cyA9IGV4dGVuc2lvbjtcbiAgICB9XG5cbiAgICBsZXQgcGx1Z2lucyA9IEFycmF5LmlzQXJyYXkoZXhwb3J0cykgPyBleHBvcnRzIDogW2V4cG9ydHNdO1xuICAgIGZvciAobGV0IHBsdWdpbiBvZiBwbHVnaW5zKSB7XG4gICAgICBpZiAoUGFnZUNvbmZpZy5FeHRlbnNpb24uaXNEaXNhYmxlZChwbHVnaW4uaWQpKSB7XG4gICAgICAgIGRpc2FibGVkLnB1c2gocGx1Z2luLmlkKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoUGFnZUNvbmZpZy5FeHRlbnNpb24uaXNEZWZlcnJlZChwbHVnaW4uaWQpKSB7XG4gICAgICAgIGRlZmVycmVkLnB1c2gocGx1Z2luLmlkKTtcbiAgICAgICAgaWdub3JlUGx1Z2lucy5wdXNoKHBsdWdpbi5pZCk7XG4gICAgICB9XG4gICAgICB5aWVsZCBwbHVnaW47XG4gICAgfVxuICB9XG5cbiAgLy8gSGFuZGxlIHRoZSByZWdpc3RlcmVkIG1pbWUgZXh0ZW5zaW9ucy5cbiAgY29uc3QgbWltZUV4dGVuc2lvbnMgPSBbXTtcbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2phdmFzY3JpcHQtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2phdmFzY3JpcHQtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIG1pbWVFeHRlbnNpb25zLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvanNvbi1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvanNvbi1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgbWltZUV4dGVuc2lvbnMucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9wZGYtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL3BkZi1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgbWltZUV4dGVuc2lvbnMucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi92ZWdhNS1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvdmVnYTUtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIG1pbWVFeHRlbnNpb25zLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgZmVkZXJhdGVkIG1pbWUgZXh0ZW5zaW9ucy5cbiAgY29uc3QgZmVkZXJhdGVkTWltZUV4dGVuc2lvbnMgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoZmVkZXJhdGVkTWltZUV4dGVuc2lvblByb21pc2VzKTtcbiAgZmVkZXJhdGVkTWltZUV4dGVuc2lvbnMuZm9yRWFjaChwID0+IHtcbiAgICBpZiAocC5zdGF0dXMgPT09IFwiZnVsZmlsbGVkXCIpIHtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKHAudmFsdWUpKSB7XG4gICAgICAgIG1pbWVFeHRlbnNpb25zLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihwLnJlYXNvbik7XG4gICAgfVxuICB9KTtcblxuICAvLyBIYW5kbGVkIHRoZSByZWdpc3RlcmVkIHN0YW5kYXJkIGV4dGVuc2lvbnMuXG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9hcHBsaWNhdGlvbi1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvYXBwbGljYXRpb24tZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvYXBwdXRpbHMtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2FwcHV0aWxzLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2NlbGx0YWdzLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9jZWxsdGFncy1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9jb2RlbWlycm9yLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9jb2RlbWlycm9yLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2NvbXBsZXRlci1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvY29tcGxldGVyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2NvbnNvbGUtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2NvbnNvbGUtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvY3N2dmlld2VyLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9jc3Z2aWV3ZXItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvZGVidWdnZXItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2RlYnVnZ2VyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2RvY21hbmFnZXItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2RvY21hbmFnZXItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvZG9jcHJvdmlkZXItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2RvY3Byb3ZpZGVyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2RvY3VtZW50c2VhcmNoLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9kb2N1bWVudHNlYXJjaC1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9leHRlbnNpb25tYW5hZ2VyLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9leHRlbnNpb25tYW5hZ2VyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2ZpbGVicm93c2VyLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9maWxlYnJvd3Nlci1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9maWxlZWRpdG9yLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9maWxlZWRpdG9yLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2hlbHAtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2hlbHAtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvaHRtbHZpZXdlci1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvaHRtbHZpZXdlci1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9odWItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2h1Yi1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9pbWFnZXZpZXdlci1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvaW1hZ2V2aWV3ZXItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvaW5zcGVjdG9yLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9pbnNwZWN0b3ItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvbGF1bmNoZXItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2xhdW5jaGVyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2xvZ2NvbnNvbGUtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2xvZ2NvbnNvbGUtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvbWFpbm1lbnUtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL21haW5tZW51LWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL21hcmtkb3dudmlld2VyLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9tYXJrZG93bnZpZXdlci1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9tYXRoamF4Mi1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvbWF0aGpheDItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvbm90ZWJvb2stZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL25vdGVib29rLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL3JlbmRlcm1pbWUtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL3JlbmRlcm1pbWUtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvcnVubmluZy1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvcnVubmluZy1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9zZXR0aW5nZWRpdG9yLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9zZXR0aW5nZWRpdG9yLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL3Nob3J0Y3V0cy1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvc2hvcnRjdXRzLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL3N0YXR1c2Jhci1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvc3RhdHVzYmFyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL3Rlcm1pbmFsLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi90ZXJtaW5hbC1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi90aGVtZS1kYXJrLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi90aGVtZS1kYXJrLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL3RoZW1lLWxpZ2h0LWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi90aGVtZS1saWdodC1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi90b2MtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL3RvYy1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi90b29sdGlwLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi90b29sdGlwLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL3RyYW5zbGF0aW9uLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi90cmFuc2xhdGlvbi1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi91aS1jb21wb25lbnRzLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi91aS1jb21wb25lbnRzLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL3Zkb20tZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL3Zkb20tZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCB0aGUgZmVkZXJhdGVkIGV4dGVuc2lvbnMuXG4gIGNvbnN0IGZlZGVyYXRlZEV4dGVuc2lvbnMgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoZmVkZXJhdGVkRXh0ZW5zaW9uUHJvbWlzZXMpO1xuICBmZWRlcmF0ZWRFeHRlbnNpb25zLmZvckVhY2gocCA9PiB7XG4gICAgaWYgKHAuc3RhdHVzID09PSBcImZ1bGZpbGxlZFwiKSB7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhwLnZhbHVlKSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocC5yZWFzb24pO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTG9hZCBhbGwgZmVkZXJhdGVkIGNvbXBvbmVudCBzdHlsZXMgYW5kIGxvZyBlcnJvcnMgZm9yIGFueSB0aGF0IGRvIG5vdFxuICAoYXdhaXQgUHJvbWlzZS5hbGxTZXR0bGVkKGZlZGVyYXRlZFN0eWxlUHJvbWlzZXMpKS5maWx0ZXIoKHtzdGF0dXN9KSA9PiBzdGF0dXMgPT09IFwicmVqZWN0ZWRcIikuZm9yRWFjaCgoe3JlYXNvbn0pID0+IHtcbiAgICBjb25zb2xlLmVycm9yKHJlYXNvbik7XG4gIH0pO1xuXG4gIGNvbnN0IGxhYiA9IG5ldyBKdXB5dGVyTGFiKHtcbiAgICBtaW1lRXh0ZW5zaW9ucyxcbiAgICBkaXNhYmxlZDoge1xuICAgICAgbWF0Y2hlczogZGlzYWJsZWQsXG4gICAgICBwYXR0ZXJuczogUGFnZUNvbmZpZy5FeHRlbnNpb24uZGlzYWJsZWRcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWwucmF3OyB9KVxuICAgIH0sXG4gICAgZGVmZXJyZWQ6IHtcbiAgICAgIG1hdGNoZXM6IGRlZmVycmVkLFxuICAgICAgcGF0dGVybnM6IFBhZ2VDb25maWcuRXh0ZW5zaW9uLmRlZmVycmVkXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKHZhbCkgeyByZXR1cm4gdmFsLnJhdzsgfSlcbiAgICB9LFxuICB9KTtcbiAgcmVnaXN0ZXIuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7IGxhYi5yZWdpc3RlclBsdWdpbk1vZHVsZShpdGVtKTsgfSk7XG4gIGxhYi5zdGFydCh7IGlnbm9yZVBsdWdpbnMgfSk7XG5cbiAgLy8gRXhwb3NlIGdsb2JhbCBhcHAgaW5zdGFuY2Ugd2hlbiBpbiBkZXYgbW9kZSBvciB3aGVuIHRvZ2dsZWQgZXhwbGljaXRseS5cbiAgdmFyIGV4cG9zZUFwcEluQnJvd3NlciA9IChQYWdlQ29uZmlnLmdldE9wdGlvbignZXhwb3NlQXBwSW5Ccm93c2VyJykgfHwgJycpLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcbiAgdmFyIGRldk1vZGUgPSAoUGFnZUNvbmZpZy5nZXRPcHRpb24oJ2Rldk1vZGUnKSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuXG4gIGlmIChleHBvc2VBcHBJbkJyb3dzZXIgfHwgZGV2TW9kZSkge1xuICAgIHdpbmRvdy5qdXB5dGVybGFiID0gbGFiO1xuICAgIHdpbmRvdy5qdXB5dGVyYXBwID0gbGFiO1xuICB9XG5cbiAgLy8gSGFuZGxlIGEgYnJvd3NlciB0ZXN0LlxuICBpZiAoYnJvd3NlclRlc3QudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XG4gICAgbGFiLnJlc3RvcmVkXG4gICAgICAudGhlbihmdW5jdGlvbigpIHsgcmVwb3J0KGVycm9ycyk7IH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24ocmVhc29uKSB7IHJlcG9ydChbYFJlc3RvcmVFcnJvcjogJHtyZWFzb24ubWVzc2FnZX1gXSk7IH0pO1xuXG4gICAgLy8gSGFuZGxlIGZhaWx1cmVzIHRvIHJlc3RvcmUgYWZ0ZXIgdGhlIHRpbWVvdXQgaGFzIGVsYXBzZWQuXG4gICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IHJlcG9ydChlcnJvcnMpOyB9LCB0aW1lb3V0KTtcbiAgfVxuXG59XG4iLCIvKiBUaGlzIGlzIGEgZ2VuZXJhdGVkIGZpbGUgb2YgQ1NTIGltcG9ydHMgKi9cbi8qIEl0IHdhcyBnZW5lcmF0ZWQgYnkgQGp1cHl0ZXJsYWIvYnVpbGRlciBpbiBCdWlsZC5lbnN1cmVBc3NldHMoKSAqL1xuXG5pbXBvcnQgJ0BqdXB5dGVybGFiL2FwcGxpY2F0aW9uLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2FwcHV0aWxzLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2NlbGx0YWdzLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2NvZGVtaXJyb3ItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvY29tcGxldGVyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2NvbnNvbGUtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvY3N2dmlld2VyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2RlYnVnZ2VyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2RvY21hbmFnZXItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvZG9jcHJvdmlkZXItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvZG9jdW1lbnRzZWFyY2gtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvZXh0ZW5zaW9ubWFuYWdlci1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9maWxlYnJvd3Nlci1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9maWxlZWRpdG9yLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2hlbHAtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvaHRtbHZpZXdlci1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9odWItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvaW1hZ2V2aWV3ZXItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvaW5zcGVjdG9yLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2phdmFzY3JpcHQtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvanNvbi1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9sYXVuY2hlci1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9sb2djb25zb2xlLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL21haW5tZW51LWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL21hcmtkb3dudmlld2VyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL21hdGhqYXgyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL25vdGVib29rLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL3BkZi1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9yZW5kZXJtaW1lLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL3J1bm5pbmctZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvc2V0dGluZ2VkaXRvci1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9zdGF0dXNiYXItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvdGVybWluYWwtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvdG9jLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL3Rvb2x0aXAtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvdHJhbnNsYXRpb24tZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvdWktY29tcG9uZW50cy1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi92ZG9tLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL3ZlZ2E1LWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG4iXSwic291cmNlUm9vdCI6IiJ9