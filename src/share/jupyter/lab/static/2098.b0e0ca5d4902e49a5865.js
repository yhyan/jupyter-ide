(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[2098,6139],{86139:(e,n,t)=>{"use strict";t.r(n);t.d(n,{default:()=>y});var o=t(20650);var s=t.n(o);var r=t(26825);var c=t.n(r);var i=t(49069);var a=t.n(i);var d=t(5724);var l=t.n(d);var p=t(64678);var u=t.n(p);var v=t(3860);var m=t.n(v);var f=t(1612);var h=t.n(f);var C=t(92481);var I=t.n(C);var b;(function(e){e.open="inspector:open"})(b||(b={}));const g={id:"@jupyterlab/inspector-extension:inspector",requires:[f.ITranslator],optional:[r.ICommandPalette,p.ILauncher,o.ILayoutRestorer],provides:d.IInspector,autoStart:true,activate:(e,n,t,o,s)=>{const c=n.load("jupyterlab");const{commands:i,shell:a}=e;const l=b.open;const p=c.__("Show Contextual Help");const u="inspector";const v=new r.WidgetTracker({namespace:u});function m(){return h&&!h.isDisposed}let f=null;let h;function I(e){var t;if(!m()){h=new r.MainAreaWidget({content:new d.InspectorPanel({translator:n})});h.id="jp-inspector";h.title.label=p;h.title.icon=C.inspectorIcon;void v.add(h);f=f&&!f.isDisposed?f:null;h.content.source=f;(t=h.content.source)===null||t===void 0?void 0:t.onEditorChange(e)}if(!h.isAttached){a.add(h,"main",{activate:false,mode:"split-right"})}a.activateById(h.id);return h}i.addCommand(l,{caption:c.__("Live updating code documentation from the active kernel"),isEnabled:()=>!h||h.isDisposed||!h.isAttached||!h.isVisible,label:p,icon:e=>e.isLauncher?C.inspectorIcon:undefined,execute:e=>{var n;const t=e&&e.text;const o=e&&e.refresh;if(m()&&o)(n=h.content.source)===null||n===void 0?void 0:n.onEditorChange(t);else I(t)}});if(t){t.addItem({command:l,category:p})}if(o){o.add({command:l,args:{isLauncher:true}})}if(s){void s.restore(v,{command:l,name:()=>"inspector"})}const g=Object.defineProperty({},"source",{get:()=>!h||h.isDisposed?null:h.content.source,set:e=>{f=e&&!e.isDisposed?e:null;if(h&&!h.isDisposed){h.content.source=f}}});return g}};const w={id:"@jupyterlab/inspector-extension:consoles",requires:[d.IInspector,i.IConsoleTracker,o.ILabShell],autoStart:true,activate:(e,n,t,o,s)=>{const r={};t.widgetAdded.connect(((e,n)=>{const t=n.console.sessionContext;const o=n.console.rendermime;const s=new d.KernelConnector({sessionContext:t});const c=new d.InspectionHandler({connector:s,rendermime:o});r[n.id]=c;const i=n.console.promptCell;c.editor=i&&i.editor;n.console.promptCellCreated.connect(((e,n)=>{c.editor=n&&n.editor}));n.disposed.connect((()=>{delete r[n.id];c.dispose()}))}));o.currentChanged.connect(((e,o)=>{const s=o.newValue;if(!s||!t.has(s)){return}const c=r[s.id];if(c){n.source=c}}))}};const k={id:"@jupyterlab/inspector-extension:notebooks",requires:[d.IInspector,v.INotebookTracker,o.ILabShell],autoStart:true,activate:(e,n,t,o)=>{const s={};t.widgetAdded.connect(((e,n)=>{const t=n.sessionContext;const o=n.content.rendermime;const r=new d.KernelConnector({sessionContext:t});const c=new d.InspectionHandler({connector:r,rendermime:o});s[n.id]=c;const i=n.content.activeCell;c.editor=i&&i.editor;n.content.activeCellChanged.connect(((e,n)=>{c.editor=n&&n.editor}));n.disposed.connect((()=>{delete s[n.id];c.dispose()}))}));o.currentChanged.connect(((e,o)=>{const r=o.newValue;if(!r||!t.has(r)){return}const c=s[r.id];if(c){n.source=c}}))}};const x=[g,w,k];const y=x}}]);