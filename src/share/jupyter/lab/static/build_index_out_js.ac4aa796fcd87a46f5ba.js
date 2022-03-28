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
/* harmony import */ var _jupyterlab_debugger_extension_style_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @jupyterlab/debugger-extension/style/index.js */ "./node_modules/@jupyterlab/debugger-extension/style/index.js");
/* harmony import */ var _jupyterlab_docmanager_extension_style_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @jupyterlab/docmanager-extension/style/index.js */ "./node_modules/@jupyterlab/docmanager-extension/style/index.js");
/* harmony import */ var _jupyterlab_docprovider_extension_style_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @jupyterlab/docprovider-extension/style/index.js */ "./node_modules/@jupyterlab/docprovider-extension/style/index.js");
/* harmony import */ var _jupyterlab_documentsearch_extension_style_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @jupyterlab/documentsearch-extension/style/index.js */ "./node_modules/@jupyterlab/documentsearch-extension/style/index.js");
/* harmony import */ var _jupyterlab_filebrowser_extension_style_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @jupyterlab/filebrowser-extension/style/index.js */ "./node_modules/@jupyterlab/filebrowser-extension/style/index.js");
/* harmony import */ var _jupyterlab_fileeditor_extension_style_index_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @jupyterlab/fileeditor-extension/style/index.js */ "./node_modules/@jupyterlab/fileeditor-extension/style/index.js");
/* harmony import */ var _jupyterlab_help_extension_style_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @jupyterlab/help-extension/style/index.js */ "./node_modules/@jupyterlab/help-extension/style/index.js");
/* harmony import */ var _jupyterlab_hub_extension_style_index_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @jupyterlab/hub-extension/style/index.js */ "./node_modules/@jupyterlab/hub-extension/style/index.js");
/* harmony import */ var _jupyterlab_inspector_extension_style_index_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @jupyterlab/inspector-extension/style/index.js */ "./node_modules/@jupyterlab/inspector-extension/style/index.js");
/* harmony import */ var _jupyterlab_launcher_extension_style_index_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @jupyterlab/launcher-extension/style/index.js */ "./node_modules/@jupyterlab/launcher-extension/style/index.js");
/* harmony import */ var _jupyterlab_logconsole_extension_style_index_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @jupyterlab/logconsole-extension/style/index.js */ "./node_modules/@jupyterlab/logconsole-extension/style/index.js");
/* harmony import */ var _jupyterlab_mainmenu_extension_style_index_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @jupyterlab/mainmenu-extension/style/index.js */ "./node_modules/@jupyterlab/mainmenu-extension/style/index.js");
/* harmony import */ var _jupyterlab_notebook_extension_style_index_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @jupyterlab/notebook-extension/style/index.js */ "./node_modules/@jupyterlab/notebook-extension/style/index.js");
/* harmony import */ var _jupyterlab_rendermime_extension_style_index_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @jupyterlab/rendermime-extension/style/index.js */ "./node_modules/@jupyterlab/rendermime-extension/style/index.js");
/* harmony import */ var _jupyterlab_running_extension_style_index_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @jupyterlab/running-extension/style/index.js */ "./node_modules/@jupyterlab/running-extension/style/index.js");
/* harmony import */ var _jupyterlab_settingeditor_extension_style_index_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @jupyterlab/settingeditor-extension/style/index.js */ "./node_modules/@jupyterlab/settingeditor-extension/style/index.js");
/* harmony import */ var _jupyterlab_statusbar_extension_style_index_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @jupyterlab/statusbar-extension/style/index.js */ "./node_modules/@jupyterlab/statusbar-extension/style/index.js");
/* harmony import */ var _jupyterlab_toc_extension_style_index_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @jupyterlab/toc-extension/style/index.js */ "./node_modules/@jupyterlab/toc-extension/style/index.js");
/* harmony import */ var _jupyterlab_tooltip_extension_style_index_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @jupyterlab/tooltip-extension/style/index.js */ "./node_modules/@jupyterlab/tooltip-extension/style/index.js");
/* harmony import */ var _jupyterlab_translation_extension_style_index_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @jupyterlab/translation-extension/style/index.js */ "./node_modules/@jupyterlab/translation-extension/style/index.js");
/* harmony import */ var _jupyterlab_ui_components_extension_style_index_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @jupyterlab/ui-components-extension/style/index.js */ "./node_modules/@jupyterlab/ui-components-extension/style/index.js");
/* This is a generated file of CSS imports */
/* It was generated by @jupyterlab/builder in Build.ensureAssets() */






























/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AanVweXRlcmxhYi9hcHBsaWNhdGlvbi10b3AvLi9idWlsZC9pbmRleC5vdXQuanMiLCJ3ZWJwYWNrOi8vQGp1cHl0ZXJsYWIvYXBwbGljYXRpb24tdG9wLy4vYnVpbGQvc3R5bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRW1EOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILHNEQUFzRCxPQUFPLFdBQVcsT0FBTztBQUMvRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBLHFCQUFxQix1RUFBb0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsZ0pBQTZDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksdUVBQW9CO0FBQ3hCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsa0ZBQStCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0ZBQStCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDhJQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHFJQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHFJQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDJJQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdJQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLGtJQUErQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHFJQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDJJQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDhJQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHVKQUFzQztBQUM5RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDhJQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDJJQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHlIQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHNIQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdJQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHFJQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDJJQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHFJQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHFJQUFnQztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDJJQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLGtJQUErQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLG9KQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdJQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHdJQUFpQztBQUN6RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDJJQUFrQztBQUMxRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDhJQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHNIQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLGtJQUErQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLDhJQUFtQztBQUMzRDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLG9KQUFxQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsOERBQThELE9BQU8sc0NBQXNDLE9BQU87QUFDbEg7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLG9GQUNKLGlCQUFpQixnQkFBZ0IsRUFBRTtBQUMvQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixvRkFDSixpQkFBaUIsZ0JBQWdCLEVBQUU7QUFDL0MsS0FBSztBQUNMLEdBQUc7QUFDSCxtQ0FBbUMsZ0NBQWdDLEVBQUU7QUFDckUsYUFBYSxnQkFBZ0I7O0FBRTdCO0FBQ0EsNEJBQTRCLHVFQUFvQjtBQUNoRCxpQkFBaUIsdUVBQW9COztBQUVyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0JBQWdCLEVBQUU7QUFDMUMsK0JBQStCLDBCQUEwQixlQUFlLElBQUksRUFBRTs7QUFFOUU7QUFDQSxrQ0FBa0MsZ0JBQWdCLEVBQUU7QUFDcEQ7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6ZkE7QUFDQTs7QUFFMEQ7QUFDSDtBQUNBO0FBQ0U7QUFDRDtBQUNGO0FBQ0M7QUFDRTtBQUNDO0FBQ0c7QUFDSDtBQUNEO0FBQ047QUFDRDtBQUNNO0FBQ0Q7QUFDRTtBQUNGO0FBQ0E7QUFDRTtBQUNIO0FBQ007QUFDSjtBQUNOO0FBQ0k7QUFDSTtBQUNFIiwiZmlsZSI6ImJ1aWxkX2luZGV4X291dF9qcy5hYzRhYTc5NmZjZDg3YTQ2ZjViYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyBhdXRvLWdlbmVyYXRlZCBmcm9tIHRoZSBjb3JyZXNwb25kaW5nIGZpbGUgaW4gL2Rldl9tb2RlXG4vKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG58IENvcHlyaWdodCAoYykgSnVweXRlciBEZXZlbG9wbWVudCBUZWFtLlxufCBEaXN0cmlidXRlZCB1bmRlciB0aGUgdGVybXMgb2YgdGhlIE1vZGlmaWVkIEJTRCBMaWNlbnNlLlxufC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG5pbXBvcnQgeyBQYWdlQ29uZmlnIH0gZnJvbSAnQGp1cHl0ZXJsYWIvY29yZXV0aWxzJztcblxuLy8gUHJvbWlzZS5hbGxTZXR0bGVkIHBvbHlmaWxsLCB1bnRpbCBvdXIgc3VwcG9ydGVkIGJyb3dzZXJzIGltcGxlbWVudCBpdFxuLy8gU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL1Byb21pc2UvYWxsU2V0dGxlZFxuaWYgKFByb21pc2UuYWxsU2V0dGxlZCA9PT0gdW5kZWZpbmVkKSB7XG4gIFByb21pc2UuYWxsU2V0dGxlZCA9IHByb21pc2VzID0+XG4gICAgUHJvbWlzZS5hbGwoXG4gICAgICBwcm9taXNlcy5tYXAocHJvbWlzZSA9PlxuICAgICAgICBwcm9taXNlXG4gICAgICAgICAgLnRoZW4odmFsdWUgPT4gKHtcbiAgICAgICAgICAgIHN0YXR1czogXCJmdWxmaWxsZWRcIixcbiAgICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIH0pLCByZWFzb24gPT4gKHtcbiAgICAgICAgICAgIHN0YXR1czogXCJyZWplY3RlZFwiLFxuICAgICAgICAgICAgcmVhc29uLFxuICAgICAgICAgIH0pKVxuICAgICAgKVxuICAgICk7XG59XG5cbmltcG9ydCAnLi9zdHlsZS5qcyc7XG5cbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZU1vZHVsZShzY29wZSwgbW9kdWxlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgZmFjdG9yeSA9IGF3YWl0IHdpbmRvdy5fSlVQWVRFUkxBQltzY29wZV0uZ2V0KG1vZHVsZSk7XG4gICAgcmV0dXJuIGZhY3RvcnkoKTtcbiAgfSBjYXRjaChlKSB7XG4gICAgY29uc29sZS53YXJuKGBGYWlsZWQgdG8gY3JlYXRlIG1vZHVsZTogcGFja2FnZTogJHtzY29wZX07IG1vZHVsZTogJHttb2R1bGV9YCk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG4vKipcbiAqIFRoZSBtYWluIGVudHJ5IHBvaW50IGZvciB0aGUgYXBwbGljYXRpb24uXG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xuXG4gICAvLyBIYW5kbGUgYSBicm93c2VyIHRlc3QuXG4gICAvLyBTZXQgdXAgZXJyb3IgaGFuZGxpbmcgcHJpb3IgdG8gbG9hZGluZyBleHRlbnNpb25zLlxuICAgdmFyIGJyb3dzZXJUZXN0ID0gUGFnZUNvbmZpZy5nZXRPcHRpb24oJ2Jyb3dzZXJUZXN0Jyk7XG4gICBpZiAoYnJvd3NlclRlc3QudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XG4gICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICBlbC5pZCA9ICdicm93c2VyVGVzdCc7XG4gICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuICAgICBlbC50ZXh0Q29udGVudCA9ICdbXSc7XG4gICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgIHZhciBlcnJvcnMgPSBbXTtcbiAgICAgdmFyIHJlcG9ydGVkID0gZmFsc2U7XG4gICAgIHZhciB0aW1lb3V0ID0gMjUwMDA7XG5cbiAgICAgdmFyIHJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgICAgIGlmIChyZXBvcnRlZCkge1xuICAgICAgICAgcmV0dXJuO1xuICAgICAgIH1cbiAgICAgICByZXBvcnRlZCA9IHRydWU7XG4gICAgICAgZWwuY2xhc3NOYW1lID0gJ2NvbXBsZXRlZCc7XG4gICAgIH1cblxuICAgICB3aW5kb3cub25lcnJvciA9IGZ1bmN0aW9uKG1zZywgdXJsLCBsaW5lLCBjb2wsIGVycm9yKSB7XG4gICAgICAgZXJyb3JzLnB1c2goU3RyaW5nKGVycm9yKSk7XG4gICAgICAgZWwudGV4dENvbnRlbnQgPSBKU09OLnN0cmluZ2lmeShlcnJvcnMpXG4gICAgIH07XG4gICAgIGNvbnNvbGUuZXJyb3IgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgZXJyb3JzLnB1c2goU3RyaW5nKG1lc3NhZ2UpKTtcbiAgICAgICBlbC50ZXh0Q29udGVudCA9IEpTT04uc3RyaW5naWZ5KGVycm9ycylcbiAgICAgfTtcbiAgfVxuXG4gIHZhciBKdXB5dGVyTGFiID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvYXBwbGljYXRpb24nKS5KdXB5dGVyTGFiO1xuICB2YXIgZGlzYWJsZWQgPSBbXTtcbiAgdmFyIGRlZmVycmVkID0gW107XG4gIHZhciBpZ25vcmVQbHVnaW5zID0gW107XG4gIHZhciByZWdpc3RlciA9IFtdO1xuXG5cbiAgY29uc3QgZmVkZXJhdGVkRXh0ZW5zaW9uUHJvbWlzZXMgPSBbXTtcbiAgY29uc3QgZmVkZXJhdGVkTWltZUV4dGVuc2lvblByb21pc2VzID0gW107XG4gIGNvbnN0IGZlZGVyYXRlZFN0eWxlUHJvbWlzZXMgPSBbXTtcblxuICAvLyBTdGFydCBpbml0aWFsaXppbmcgdGhlIGZlZGVyYXRlZCBleHRlbnNpb25zXG4gIGNvbnN0IGV4dGVuc2lvbnMgPSBKU09OLnBhcnNlKFxuICAgIFBhZ2VDb25maWcuZ2V0T3B0aW9uKCdmZWRlcmF0ZWRfZXh0ZW5zaW9ucycpXG4gICk7XG5cbiAgY29uc3QgcXVldWVkRmVkZXJhdGVkID0gW107XG5cbiAgZXh0ZW5zaW9ucy5mb3JFYWNoKGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLmV4dGVuc2lvbikge1xuICAgICAgcXVldWVkRmVkZXJhdGVkLnB1c2goZGF0YS5uYW1lKTtcbiAgICAgIGZlZGVyYXRlZEV4dGVuc2lvblByb21pc2VzLnB1c2goY3JlYXRlTW9kdWxlKGRhdGEubmFtZSwgZGF0YS5leHRlbnNpb24pKTtcbiAgICB9XG4gICAgaWYgKGRhdGEubWltZUV4dGVuc2lvbikge1xuICAgICAgcXVldWVkRmVkZXJhdGVkLnB1c2goZGF0YS5uYW1lKTtcbiAgICAgIGZlZGVyYXRlZE1pbWVFeHRlbnNpb25Qcm9taXNlcy5wdXNoKGNyZWF0ZU1vZHVsZShkYXRhLm5hbWUsIGRhdGEubWltZUV4dGVuc2lvbikpO1xuICAgIH1cbiAgICBpZiAoZGF0YS5zdHlsZSkge1xuICAgICAgZmVkZXJhdGVkU3R5bGVQcm9taXNlcy5wdXNoKGNyZWF0ZU1vZHVsZShkYXRhLm5hbWUsIGRhdGEuc3R5bGUpKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBJdGVyYXRlIG92ZXIgYWN0aXZlIHBsdWdpbnMgaW4gYW4gZXh0ZW5zaW9uLlxuICAgKlxuICAgKiAjIyMjIE5vdGVzXG4gICAqIFRoaXMgYWxzbyBwb3B1bGF0ZXMgdGhlIGRpc2FibGVkLCBkZWZlcnJlZCwgYW5kIGlnbm9yZWQgYXJyYXlzLlxuICAgKi9cbiAgZnVuY3Rpb24qIGFjdGl2ZVBsdWdpbnMoZXh0ZW5zaW9uKSB7XG4gICAgLy8gSGFuZGxlIGNvbW1vbmpzIG9yIGVzMjAxNSBtb2R1bGVzXG4gICAgbGV0IGV4cG9ydHM7XG4gICAgaWYgKGV4dGVuc2lvbi5oYXNPd25Qcm9wZXJ0eSgnX19lc01vZHVsZScpKSB7XG4gICAgICBleHBvcnRzID0gZXh0ZW5zaW9uLmRlZmF1bHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbW1vbkpTIGV4cG9ydHMuXG4gICAgICBleHBvcnRzID0gZXh0ZW5zaW9uO1xuICAgIH1cblxuICAgIGxldCBwbHVnaW5zID0gQXJyYXkuaXNBcnJheShleHBvcnRzKSA/IGV4cG9ydHMgOiBbZXhwb3J0c107XG4gICAgZm9yIChsZXQgcGx1Z2luIG9mIHBsdWdpbnMpIHtcbiAgICAgIGlmIChQYWdlQ29uZmlnLkV4dGVuc2lvbi5pc0Rpc2FibGVkKHBsdWdpbi5pZCkpIHtcbiAgICAgICAgZGlzYWJsZWQucHVzaChwbHVnaW4uaWQpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChQYWdlQ29uZmlnLkV4dGVuc2lvbi5pc0RlZmVycmVkKHBsdWdpbi5pZCkpIHtcbiAgICAgICAgZGVmZXJyZWQucHVzaChwbHVnaW4uaWQpO1xuICAgICAgICBpZ25vcmVQbHVnaW5zLnB1c2gocGx1Z2luLmlkKTtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHBsdWdpbjtcbiAgICB9XG4gIH1cblxuICAvLyBIYW5kbGUgdGhlIHJlZ2lzdGVyZWQgbWltZSBleHRlbnNpb25zLlxuICBjb25zdCBtaW1lRXh0ZW5zaW9ucyA9IFtdO1xuXG4gIC8vIEFkZCB0aGUgZmVkZXJhdGVkIG1pbWUgZXh0ZW5zaW9ucy5cbiAgY29uc3QgZmVkZXJhdGVkTWltZUV4dGVuc2lvbnMgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoZmVkZXJhdGVkTWltZUV4dGVuc2lvblByb21pc2VzKTtcbiAgZmVkZXJhdGVkTWltZUV4dGVuc2lvbnMuZm9yRWFjaChwID0+IHtcbiAgICBpZiAocC5zdGF0dXMgPT09IFwiZnVsZmlsbGVkXCIpIHtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKHAudmFsdWUpKSB7XG4gICAgICAgIG1pbWVFeHRlbnNpb25zLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihwLnJlYXNvbik7XG4gICAgfVxuICB9KTtcblxuICAvLyBIYW5kbGVkIHRoZSByZWdpc3RlcmVkIHN0YW5kYXJkIGV4dGVuc2lvbnMuXG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9hcHBsaWNhdGlvbi1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvYXBwbGljYXRpb24tZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvYXBwdXRpbHMtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2FwcHV0aWxzLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2NlbGx0YWdzLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9jZWxsdGFncy1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9jb2RlbWlycm9yLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9jb2RlbWlycm9yLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2NvbXBsZXRlci1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvY29tcGxldGVyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2NvbnNvbGUtZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2NvbnNvbGUtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvZGVidWdnZXItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2RlYnVnZ2VyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2RvY21hbmFnZXItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2RvY21hbmFnZXItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvZG9jcHJvdmlkZXItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL2RvY3Byb3ZpZGVyLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2RvY3VtZW50c2VhcmNoLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9kb2N1bWVudHNlYXJjaC1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9maWxlYnJvd3Nlci1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvZmlsZWJyb3dzZXItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvZmlsZWVkaXRvci1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvZmlsZWVkaXRvci1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9oZWxwLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9oZWxwLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2h1Yi1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvaHViLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2luc3BlY3Rvci1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvaW5zcGVjdG9yLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL2xhdW5jaGVyLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9sYXVuY2hlci1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9sb2djb25zb2xlLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9sb2djb25zb2xlLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL21haW5tZW51LWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9tYWlubWVudS1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9ub3RlYm9vay1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvbm90ZWJvb2stZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvcmVuZGVybWltZS1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvcmVuZGVybWltZS1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi9ydW5uaW5nLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9ydW5uaW5nLWV4dGVuc2lvbicpO1xuICAgICAgZm9yIChsZXQgcGx1Z2luIG9mIGFjdGl2ZVBsdWdpbnMoZXh0KSkge1xuICAgICAgICByZWdpc3Rlci5wdXNoKHBsdWdpbik7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICB9XG4gIH1cbiAgaWYgKCFxdWV1ZWRGZWRlcmF0ZWQuaW5jbHVkZXMoJ0BqdXB5dGVybGFiL3NldHRpbmdlZGl0b3ItZXh0ZW5zaW9uJykpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IGV4dCA9IHJlcXVpcmUoJ0BqdXB5dGVybGFiL3NldHRpbmdlZGl0b3ItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvc2hvcnRjdXRzLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9zaG9ydGN1dHMtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvc3RhdHVzYmFyLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi9zdGF0dXNiYXItZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvdGhlbWUtZGFyay1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvdGhlbWUtZGFyay1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi90aGVtZS1saWdodC1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvdGhlbWUtbGlnaHQtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvdG9jLWV4dGVuc2lvbicpKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCBleHQgPSByZXF1aXJlKCdAanVweXRlcmxhYi90b2MtZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvdG9vbHRpcC1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvdG9vbHRpcC1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG4gIGlmICghcXVldWVkRmVkZXJhdGVkLmluY2x1ZGVzKCdAanVweXRlcmxhYi90cmFuc2xhdGlvbi1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvdHJhbnNsYXRpb24tZXh0ZW5zaW9uJyk7XG4gICAgICBmb3IgKGxldCBwbHVnaW4gb2YgYWN0aXZlUGx1Z2lucyhleHQpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgIH1cbiAgfVxuICBpZiAoIXF1ZXVlZEZlZGVyYXRlZC5pbmNsdWRlcygnQGp1cHl0ZXJsYWIvdWktY29tcG9uZW50cy1leHRlbnNpb24nKSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgZXh0ID0gcmVxdWlyZSgnQGp1cHl0ZXJsYWIvdWktY29tcG9uZW50cy1leHRlbnNpb24nKTtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKGV4dCkpIHtcbiAgICAgICAgcmVnaXN0ZXIucHVzaChwbHVnaW4pO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gQWRkIHRoZSBmZWRlcmF0ZWQgZXh0ZW5zaW9ucy5cbiAgY29uc3QgZmVkZXJhdGVkRXh0ZW5zaW9ucyA9IGF3YWl0IFByb21pc2UuYWxsU2V0dGxlZChmZWRlcmF0ZWRFeHRlbnNpb25Qcm9taXNlcyk7XG4gIGZlZGVyYXRlZEV4dGVuc2lvbnMuZm9yRWFjaChwID0+IHtcbiAgICBpZiAocC5zdGF0dXMgPT09IFwiZnVsZmlsbGVkXCIpIHtcbiAgICAgIGZvciAobGV0IHBsdWdpbiBvZiBhY3RpdmVQbHVnaW5zKHAudmFsdWUpKSB7XG4gICAgICAgIHJlZ2lzdGVyLnB1c2gocGx1Z2luKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS5lcnJvcihwLnJlYXNvbik7XG4gICAgfVxuICB9KTtcblxuICAvLyBMb2FkIGFsbCBmZWRlcmF0ZWQgY29tcG9uZW50IHN0eWxlcyBhbmQgbG9nIGVycm9ycyBmb3IgYW55IHRoYXQgZG8gbm90XG4gIChhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoZmVkZXJhdGVkU3R5bGVQcm9taXNlcykpLmZpbHRlcigoe3N0YXR1c30pID0+IHN0YXR1cyA9PT0gXCJyZWplY3RlZFwiKS5mb3JFYWNoKCh7cmVhc29ufSkgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IocmVhc29uKTtcbiAgfSk7XG5cbiAgY29uc3QgbGFiID0gbmV3IEp1cHl0ZXJMYWIoe1xuICAgIG1pbWVFeHRlbnNpb25zLFxuICAgIGRpc2FibGVkOiB7XG4gICAgICBtYXRjaGVzOiBkaXNhYmxlZCxcbiAgICAgIHBhdHRlcm5zOiBQYWdlQ29uZmlnLkV4dGVuc2lvbi5kaXNhYmxlZFxuICAgICAgICAubWFwKGZ1bmN0aW9uICh2YWwpIHsgcmV0dXJuIHZhbC5yYXc7IH0pXG4gICAgfSxcbiAgICBkZWZlcnJlZDoge1xuICAgICAgbWF0Y2hlczogZGVmZXJyZWQsXG4gICAgICBwYXR0ZXJuczogUGFnZUNvbmZpZy5FeHRlbnNpb24uZGVmZXJyZWRcbiAgICAgICAgLm1hcChmdW5jdGlvbiAodmFsKSB7IHJldHVybiB2YWwucmF3OyB9KVxuICAgIH0sXG4gIH0pO1xuICByZWdpc3Rlci5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHsgbGFiLnJlZ2lzdGVyUGx1Z2luTW9kdWxlKGl0ZW0pOyB9KTtcbiAgbGFiLnN0YXJ0KHsgaWdub3JlUGx1Z2lucyB9KTtcblxuICAvLyBFeHBvc2UgZ2xvYmFsIGFwcCBpbnN0YW5jZSB3aGVuIGluIGRldiBtb2RlIG9yIHdoZW4gdG9nZ2xlZCBleHBsaWNpdGx5LlxuICB2YXIgZXhwb3NlQXBwSW5Ccm93c2VyID0gKFBhZ2VDb25maWcuZ2V0T3B0aW9uKCdleHBvc2VBcHBJbkJyb3dzZXInKSB8fCAnJykudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xuICB2YXIgZGV2TW9kZSA9IChQYWdlQ29uZmlnLmdldE9wdGlvbignZGV2TW9kZScpIHx8ICcnKS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSc7XG5cbiAgaWYgKGV4cG9zZUFwcEluQnJvd3NlciB8fCBkZXZNb2RlKSB7XG4gICAgd2luZG93Lmp1cHl0ZXJsYWIgPSBsYWI7XG4gICAgd2luZG93Lmp1cHl0ZXJhcHAgPSBsYWI7XG4gIH1cblxuICAvLyBIYW5kbGUgYSBicm93c2VyIHRlc3QuXG4gIGlmIChicm93c2VyVGVzdC50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcbiAgICBsYWIucmVzdG9yZWRcbiAgICAgIC50aGVuKGZ1bmN0aW9uKCkgeyByZXBvcnQoZXJyb3JzKTsgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihyZWFzb24pIHsgcmVwb3J0KFtgUmVzdG9yZUVycm9yOiAke3JlYXNvbi5tZXNzYWdlfWBdKTsgfSk7XG5cbiAgICAvLyBIYW5kbGUgZmFpbHVyZXMgdG8gcmVzdG9yZSBhZnRlciB0aGUgdGltZW91dCBoYXMgZWxhcHNlZC5cbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHsgcmVwb3J0KGVycm9ycyk7IH0sIHRpbWVvdXQpO1xuICB9XG5cbn1cbiIsIi8qIFRoaXMgaXMgYSBnZW5lcmF0ZWQgZmlsZSBvZiBDU1MgaW1wb3J0cyAqL1xuLyogSXQgd2FzIGdlbmVyYXRlZCBieSBAanVweXRlcmxhYi9idWlsZGVyIGluIEJ1aWxkLmVuc3VyZUFzc2V0cygpICovXG5cbmltcG9ydCAnQGp1cHl0ZXJsYWIvYXBwbGljYXRpb24tZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvYXBwdXRpbHMtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvY2VsbHRhZ3MtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvY29kZW1pcnJvci1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9jb21wbGV0ZXItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvY29uc29sZS1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9kZWJ1Z2dlci1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9kb2NtYW5hZ2VyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2RvY3Byb3ZpZGVyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2RvY3VtZW50c2VhcmNoLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2ZpbGVicm93c2VyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2ZpbGVlZGl0b3ItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvaGVscC1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9odWItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvaW5zcGVjdG9yLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2xhdW5jaGVyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL2xvZ2NvbnNvbGUtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvbWFpbm1lbnUtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvbm90ZWJvb2stZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvcmVuZGVybWltZS1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi9ydW5uaW5nLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL3NldHRpbmdlZGl0b3ItZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbmltcG9ydCAnQGp1cHl0ZXJsYWIvc3RhdHVzYmFyLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL3RvYy1leHRlbnNpb24vc3R5bGUvaW5kZXguanMnO1xuaW1wb3J0ICdAanVweXRlcmxhYi90b29sdGlwLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL3RyYW5zbGF0aW9uLWV4dGVuc2lvbi9zdHlsZS9pbmRleC5qcyc7XG5pbXBvcnQgJ0BqdXB5dGVybGFiL3VpLWNvbXBvbmVudHMtZXh0ZW5zaW9uL3N0eWxlL2luZGV4LmpzJztcbiJdLCJzb3VyY2VSb290IjoiIn0=