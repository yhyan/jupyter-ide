(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[1611,5838],{1611:(e,t,n)=>{"use strict";n.r(t);n.d(t,{default:()=>u});var o=n(83875);var r=n.n(o);var a=n(59917);var i=n.n(a);var c=n(50317);var s=n.n(c);const p={id:"@jupyterlab/docprovider-extension:plugin",provides:a.IDocumentProviderFactory,activate:e=>{const t=c.ServerConnection.makeSettings();const n=o.URLExt.join(t.wsUrl,"api/yjs");const r=o.PageConfig.getOption("collaborative")=="true"?true:false;const i=e=>r?new a.WebSocketProviderWithLocks(Object.assign(Object.assign({},e),{url:n})):new a.ProviderMock;return i}};const l=[p];const u=l}}]);