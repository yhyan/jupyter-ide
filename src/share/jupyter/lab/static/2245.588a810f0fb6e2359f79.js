(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[2245],{72245:(t,e,s)=>{"use strict";s.r(e);s.d(e,{ISettingEditorTracker:()=>W,SettingEditor:()=>R});var n=s(1612);var i=s(92481);var r=s(9727);var a=s(61389);var o=s(2411);var d=s(43006);var l=s(26825);var c=s(75138);var h=s(77616);var u=s(5724);var g=s(72805);var _=s(53371);function p(t,e,s){s=s||n.nullTranslator;const i=s.load("jupyterlab");const r=new m(t,s);const a=new u.InspectorPanel({initialContent:i.__("Any errors will be listed here"),translator:s});const o=new u.InspectionHandler({connector:r,rendermime:e||new g.RenderMimeRegistry({initialFactories:g.standardRendererFactories,translator:s})});a.addClass("jp-SettingsDebug");a.source=o;o.editor=t.source;return a}class m extends _.DataConnector{constructor(t,e){super();this._current=0;this.translator=e||n.nullTranslator;this._editor=t;this._trans=this.translator.load("jupyterlab")}fetch(t){return new Promise((e=>{const s=this._current=window.setTimeout((()=>{if(s!==this._current){return e(undefined)}const n=this._validate(t.text);if(!n){return e({data:{"text/markdown":this._trans.__("No errors found")},metadata:{}})}e({data:f.render(n),metadata:{}})}),100)}))}_validate(t){const e=this._editor;if(!e.settings){return null}const{id:s,schema:n,version:i}=e.settings;const r={composite:{},user:{}};const a=e.registry.validator;return a.validateData({data:r,id:s,raw:t,schema:n,version:i},false)}}var f;(function(t){function e(t){return{"text/markdown":t.map(s).join("")}}t.render=e;function s(t){var e;switch(t.keyword){case"additionalProperties":return`**\`[additional property error]\`**\n          \`${(e=t.params)===null||e===void 0?void 0:e.additionalProperty}\` is not a valid property`;case"syntax":return`**\`[syntax error]\`** *${t.message}*`;case"type":return`**\`[type error]\`**\n          \`${t.dataPath}\` ${t.message}`;default:return`**\`[error]\`** *${t.message}*`}}})(f||(f={}));class v extends a.SplitPanel{constructor(){super(...arguments);this.handleMoved=new c.Signal(this)}handleEvent(t){super.handleEvent(t);if(t.type==="mouseup"){this.handleMoved.emit(undefined)}}}const y="jp-SettingsRawEditor";const w="jp-SettingsRawEditor-user";const S="jp-mod-error";class E extends v{constructor(t){super({orientation:"horizontal",renderer:v.defaultRenderer,spacing:1});this._canRevert=false;this._canSave=false;this._commandsChanged=new c.Signal(this);this._settings=null;this._toolbar=new l.Toolbar;const{commands:e,editorFactory:s,registry:i,translator:r}=t;this.registry=i;this.translator=r||n.nullTranslator;this._commands=e;const a=this._defaults=new h.CodeEditorWrapper({model:new h.CodeEditor.Model,factory:s});a.editor.model.value.text="";a.editor.model.mimeType="text/javascript";a.editor.setOption("readOnly",true);const o=this._user=new h.CodeEditorWrapper({model:new h.CodeEditor.Model,factory:s,config:{lineNumbers:true}});o.addClass(w);o.editor.model.mimeType="text/javascript";o.editor.model.value.changed.connect(this._onTextChanged,this);this._inspector=p(this,t.rendermime,this.translator);this.addClass(y);this._onSaveError=t.onSaveError;this.addWidget(b.defaultsEditor(a,this.translator));this.addWidget(b.userEditor(o,this._toolbar,this._inspector,this.translator))}get canRevert(){return this._canRevert}get canSave(){return this._canSave}get commandsChanged(){return this._commandsChanged}get isDirty(){var t,e;return(e=this._user.editor.model.value.text!==((t=this._settings)===null||t===void 0?void 0:t.raw))!==null&&e!==void 0?e:""}get settings(){return this._settings}set settings(t){if(!t&&!this._settings){return}const e=t&&this._settings&&t.plugin===this._settings.plugin;if(e){return}const s=this._defaults;const n=this._user;if(this._settings){this._settings.changed.disconnect(this._onSettingsChanged,this)}if(t){this._settings=t;this._settings.changed.connect(this._onSettingsChanged,this);this._onSettingsChanged()}else{this._settings=null;s.editor.model.value.text="";n.editor.model.value.text=""}this.update()}get sizes(){return this.relativeSizes()}set sizes(t){this.setRelativeSizes(t)}get source(){return this._user.editor}dispose(){if(this.isDisposed){return}super.dispose();this._defaults.dispose();this._user.dispose()}revert(){var t,e;this._user.editor.model.value.text=(e=(t=this.settings)===null||t===void 0?void 0:t.raw)!==null&&e!==void 0?e:"";this._updateToolbar(false,false)}save(){if(!this.isDirty||!this._settings){return Promise.resolve(undefined)}const t=this._settings;const e=this._user.editor.model.value.text;return t.save(e).then((()=>{this._updateToolbar(false,false)})).catch((t=>{this._updateToolbar(true,false);this._onSaveError(t,this.translator)}))}onAfterAttach(t){b.populateToolbar(this._commands,this._toolbar);this.update()}onUpdateRequest(t){const e=this._settings;const s=this._defaults;const n=this._user;if(e){s.editor.refresh();n.editor.refresh()}}_onTextChanged(){const t=this._user.editor.model.value.text;const e=this._settings;this.removeClass(S);if(!e||e.raw===t){this._updateToolbar(false,false);return}const s=e.validate(t);if(s){this.addClass(S);this._updateToolbar(true,false);return}this._updateToolbar(true,true)}_onSettingsChanged(){var t,e;const s=this._settings;const n=this._defaults;const i=this._user;n.editor.model.value.text=(t=s===null||s===void 0?void 0:s.annotatedDefaults())!==null&&t!==void 0?t:"";i.editor.model.value.text=(e=s===null||s===void 0?void 0:s.raw)!==null&&e!==void 0?e:""}_updateToolbar(t=this._canRevert,e=this._canSave){const s=this._commands;this._canRevert=t;this._canSave=e;this._commandsChanged.emit([s.revert,s.save])}}var b;(function(t){function e(t,e){e=e||n.nullTranslator;const s=e.load("jupyterlab");const i=new a.Widget;const r=i.layout=new a.BoxLayout({spacing:0});const o=new a.Widget;const d=new l.Toolbar;const c=s.__("System Defaults");o.node.innerText=c;d.insertItem(0,"banner",o);r.addWidget(d);r.addWidget(t);return i}t.defaultsEditor=e;function s(t,e){const{registry:s,revert:n,save:i}=t;e.addItem("spacer",l.Toolbar.createSpacerItem());[n,i].forEach((t=>{const n=new l.CommandToolbarButton({commands:s,id:t});e.addItem(t,n)}))}t.populateToolbar=s;function i(t,e,s,i){i=i||n.nullTranslator;const r=i.load("jupyterlab");const o=r.__("User Preferences");const d=new a.Widget;const l=d.layout=new a.BoxLayout({spacing:0});const c=new a.Widget;c.node.innerText=o;e.insertItem(0,"banner",c);l.addWidget(e);l.addWidget(t);l.addWidget(s);return d}t.userEditor=i})(b||(b={}));const C="jp-PluginEditor";class T extends a.Widget{constructor(t){super();this._settings=null;this._stateChanged=new c.Signal(this);this.addClass(C);const{commands:e,editorFactory:s,registry:i,rendermime:r,translator:o}=t;this.translator=o||n.nullTranslator;this._trans=this.translator.load("jupyterlab");const d=this.layout=new a.StackedLayout;const{onSaveError:l}=j;this.raw=this._rawEditor=new E({commands:e,editorFactory:s,onSaveError:l,registry:i,rendermime:r,translator:o});this._rawEditor.handleMoved.connect(this._onStateChanged,this);d.addWidget(this._rawEditor)}get isDirty(){return this._rawEditor.isDirty}get settings(){return this._settings}set settings(t){if(this._settings===t){return}const e=this._rawEditor;this._settings=e.settings=t;this.update()}get state(){const t=this._settings?this._settings.id:"";const{sizes:e}=this._rawEditor;return{plugin:t,sizes:e}}set state(t){if(r.JSONExt.deepEqual(this.state,t)){return}this._rawEditor.sizes=t.sizes;this.update()}get stateChanged(){return this._stateChanged}confirm(){if(this.isHidden||!this.isAttached||!this.isDirty){return Promise.resolve(undefined)}return(0,l.showDialog)({title:this._trans.__("You have unsaved changes."),body:this._trans.__("Do you want to leave without saving?"),buttons:[l.Dialog.cancelButton({label:this._trans.__("Cancel")}),l.Dialog.okButton({label:this._trans.__("Ok")})]}).then((t=>{if(!t.button.accept){throw new Error("User canceled.")}}))}dispose(){if(this.isDisposed){return}super.dispose();this._rawEditor.dispose()}onAfterAttach(t){this.update()}onUpdateRequest(t){const e=this._rawEditor;const s=this._settings;if(!s){this.hide();return}this.show();e.show()}_onStateChanged(){this.stateChanged.emit(undefined)}}var j;(function(t){function e(t,e){e=e||n.nullTranslator;const s=e.load("jupyterlab");console.error(`Saving setting editor value failed: ${t.message}`);void(0,l.showDialog)({title:s.__("Your changes were not saved."),body:t.message,buttons:[l.Dialog.okButton({label:s.__("Ok")})]})}t.onSaveError=e})(j||(j={}));class x extends a.Widget{constructor(t){super();this._changed=new c.Signal(this);this._scrollTop=0;this._selection="";this.registry=t.registry;this.translator=t.translator||n.nullTranslator;this.addClass("jp-PluginList");this._confirm=t.confirm;this.registry.pluginChanged.connect((()=>{this.update()}),this)}get changed(){return this._changed}get scrollTop(){var t;return(t=this.node.querySelector("ul"))===null||t===void 0?void 0:t.scrollTop}get selection(){return this._selection}set selection(t){if(this._selection===t){return}this._selection=t;this.update()}handleEvent(t){switch(t.type){case"mousedown":this._evtMousedown(t);break;default:break}}onAfterAttach(t){this.node.addEventListener("mousedown",this);this.update()}onBeforeDetach(t){this.node.removeEventListener("mousedown",this)}onUpdateRequest(t){const{node:e,registry:s}=this;const n=this._selection;const i=this.translator;z.populateList(s,n,e,i);const r=e.querySelector("ul");if(r&&this._scrollTop!==undefined){r.scrollTop=this._scrollTop}}_evtMousedown(t){t.preventDefault();let e=t.target;let s=e.getAttribute("data-id");if(s===this._selection){return}if(!s){while(!s&&e!==this.node){e=e.parentElement;s=e.getAttribute("data-id")}}if(!s){return}this._confirm().then((()=>{this._scrollTop=this.scrollTop;this._selection=s;this._changed.emit(undefined);this.update()})).catch((()=>{}))}}var z;(function(t){const e="jupyter.lab.setting-icon";const s="jupyter.lab.setting-icon-class";const r="jupyter.lab.setting-icon-label";function a(t,e,s){let n=s.data.user[t];if(!n){n=s.data.composite[t]}if(!n){n=s.schema[t]}if(!n){const{properties:s}=e.schema;n=s&&s[t]&&s[t].default}return typeof n==="string"?n:""}function l(t,l,h,u){u=u||n.nullTranslator;const g=u.load("jupyterlab");const _=c(t).filter((t=>{const{schema:e}=t;const s=e["jupyter.lab.setting-deprecated"]===true;const n=Object.keys(e.properties||{}).length>0;const i=e.additionalProperties!==false;return!s&&(n||i)}));const p=_.map((n=>{const{id:d,schema:c,version:h}=n;const u=typeof c.title==="string"?g._p("schema",c.title):d;const _=typeof c.description==="string"?g._p("schema",c.description):"";const p=`${_}\n${d}\n${h}`;const m=a(e,t,n);const f=a(s,t,n);const v=a(r,t,n);return o.createElement("li",{className:d===l?"jp-mod-selected":"","data-id":d,key:d,title:p},o.createElement(i.LabIcon.resolveReact,{icon:m||(f?undefined:i.settingsIcon),iconClass:(0,i.classes)(f,"jp-Icon"),title:v,tag:"span",stylesheet:"settingsEditor"}),o.createElement("span",null,u))}));d.unmountComponentAtNode(h);d.render(o.createElement("ul",null,p),h)}t.populateList=l;function c(t){return Object.keys(t.plugins).map((e=>t.plugins[e])).sort(((t,e)=>(t.schema.title||t.id).localeCompare(e.schema.title||e.id)))}})(z||(z={}));const k={sizes:[1,3],container:{editor:"raw",plugin:"",sizes:[1,1]}};class R extends a.Widget{constructor(t){super();this._fetching=null;this._saving=false;this._state=r.JSONExt.deepCopy(k);this.translator=t.translator||n.nullTranslator;this.addClass("jp-SettingEditor");this.key=t.key;this.state=t.state;const{commands:e,editorFactory:s,rendermime:i}=t;const o=this.layout=new a.PanelLayout;const d=this.registry=t.registry;const l=this._panel=new v({orientation:"horizontal",renderer:v.defaultRenderer,spacing:1});const c=this._instructions=new a.Widget;const h=this._editor=new T({commands:e,editorFactory:s,registry:d,rendermime:i,translator:this.translator});const u=()=>h.confirm();const g=this._list=new x({confirm:u,registry:d,translator:this.translator});const _=t.when;c.addClass("jp-SettingEditorInstructions");A.populateInstructionsNode(c.node,this.translator);if(_){this._when=Array.isArray(_)?Promise.all(_):_}l.addClass("jp-SettingEditor-main");o.addWidget(l);l.addWidget(g);l.addWidget(c);v.setStretch(g,0);v.setStretch(c,1);v.setStretch(h,1);h.stateChanged.connect(this._onStateChanged,this);g.changed.connect(this._onStateChanged,this);l.handleMoved.connect(this._onStateChanged,this)}get canRevertRaw(){return this._editor.raw.canRevert}get canSaveRaw(){return this._editor.raw.canSave}get commandsChanged(){return this._editor.raw.commandsChanged}get settings(){return this._editor.settings}get source(){return this._editor.raw.source}dispose(){if(this.isDisposed){return}super.dispose();this._editor.dispose();this._instructions.dispose();this._list.dispose();this._panel.dispose()}revert(){this._editor.raw.revert()}save(){return this._editor.raw.save()}onAfterAttach(t){super.onAfterAttach(t);this._panel.hide();this._fetchState().then((()=>{this._panel.show();this._setState()})).catch((t=>{console.error("Fetching setting editor state failed",t);this._panel.show();this._setState()}))}onCloseRequest(t){this._editor.confirm().then((()=>{super.onCloseRequest(t);this.dispose()})).catch((()=>{}))}_fetchState(){if(this._fetching){return this._fetching}const{key:t,state:e}=this;const s=[e.fetch(t),this._when];return this._fetching=Promise.all(s).then((([t])=>{this._fetching=null;if(this._saving){return}this._state=A.normalizeState(t,this._state)}))}async _onStateChanged(){this._state.sizes=this._panel.relativeSizes();this._state.container=this._editor.state;this._state.container.plugin=this._list.selection;try{await this._saveState()}catch(t){console.error("Saving setting editor state failed",t)}this._setState()}async _saveState(){const{key:t,state:e}=this;const s=this._state;this._saving=true;try{await e.save(t,s);this._saving=false}catch(n){this._saving=false;throw n}}_setLayout(){const t=this._editor;const e=this._panel;const s=this._state;t.state=s.container;requestAnimationFrame((()=>{e.setRelativeSizes(s.sizes)}))}_setState(){const t=this._editor;const e=this._list;const s=this._panel;const{container:n}=this._state;if(!n.plugin){t.settings=null;e.selection="";this._setLayout();return}if(t.settings&&t.settings.id===n.plugin){this._setLayout();return}const i=this._instructions;this.registry.load(n.plugin).then((r=>{if(i.isAttached){i.parent=null}if(!t.isAttached){s.addWidget(t)}t.settings=r;e.selection=n.plugin;this._setLayout()})).catch((s=>{console.error(`Loading ${n.plugin} settings failed.`,s);e.selection=this._state.container.plugin="";t.settings=null;this._setLayout()}))}}var A;(function(t){function e(t,e){e=e||n.nullTranslator;const s=e.load("jupyterlab");d.render(o.createElement(o.Fragment,null,o.createElement("h2",null,o.createElement(i.jupyterIcon.react,{className:"jp-SettingEditorInstructions-icon",tag:"span",elementPosition:"center",height:"auto",width:"60px"}),o.createElement("span",{className:"jp-SettingEditorInstructions-title"},"Settings")),o.createElement("span",{className:"jp-SettingEditorInstructions-text"},s.__("Select a plugin from the list to view and edit its preferences."))),t)}t.populateInstructionsNode=e;function s(t,e){if(!t){return r.JSONExt.deepCopy(k)}if(!("sizes"in t)||!a(t.sizes)){t.sizes=r.JSONExt.deepCopy(k.sizes)}if(!("container"in t)){t.container=r.JSONExt.deepCopy(k.container);return t}const s="container"in t&&t.container&&typeof t.container==="object"?t.container:{};t.container={plugin:typeof s.plugin==="string"?s.plugin:k.container.plugin,sizes:a(s.sizes)?s.sizes:r.JSONExt.deepCopy(k.container.sizes)};return t}t.normalizeState=s;function a(t){return Array.isArray(t)&&t.every((t=>typeof t==="number"))}})(A||(A={}));const W=new r.Token("@jupyterlab/settingeditor:ISettingEditorTracker")}}]);