(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[8102],{66116:(e,n,t)=>{"use strict";t.r(n);t.d(n,{default:()=>m});var a=t(26825);var r=t.n(a);var i=t(54005);var d=t.n(i);var o=t(72805);var l=t.n(o);var s=t(1612);var c=t.n(s);var u;(function(e){e.handleLink="rendermime:handle-local-link"})(u||(u={}));const p={id:"@jupyterlab/rendermime-extension:plugin",requires:[s.ITranslator],optional:[i.IDocumentManager,o.ILatexTypesetter,a.ISanitizer],provides:o.IRenderMimeRegistry,activate:v,autoStart:true};const m=p;function v(e,n,t,a,r){const i=n.load("jupyterlab");if(t){e.commands.addCommand(u.handleLink,{label:i.__("Handle Local Link"),execute:e=>{const n=e["path"];const a=e["id"];if(!n){return}return t.services.contents.get(n,{content:false}).then((()=>{const e=t.registry.defaultRenderedWidgetFactory(n);const r=t.openOrReveal(n,e.name);if(r&&a){r.setFragment(a)}}))}})}return new o.RenderMimeRegistry({initialFactories:o.standardRendererFactories,linkHandler:!t?undefined:{handleLink:(n,t,a)=>{if(n.tagName==="A"&&n.hasAttribute("download")){return}e.commandLinker.connectNode(n,u.handleLink,{path:t,id:a})}},latexTypesetter:a!==null&&a!==void 0?a:undefined,translator:n,sanitizer:r!==null&&r!==void 0?r:undefined})}}}]);