(self["webpackChunk_jupyterlab_application_top"]=self["webpackChunk_jupyterlab_application_top"]||[]).push([[7196],{87196:(e,t,s)=>{"use strict";s.r(t);s.d(t,{Completer:()=>q,CompleterModel:()=>C,CompletionConnector:()=>p,CompletionHandler:()=>h,ContextConnector:()=>u,ICompletionManager:()=>T,KernelConnector:()=>d});var n=s(83875);var i=s(32151);var o=s(75138);var r=s(53371);class a extends r.DataConnector{fetch(e){return Promise.reject("Attempting to fetch with DummyConnector. Please ensure connector responseType is set.")}}const c="jp-mod-completer-enabled";const l="jp-mod-completer-active";class h{constructor(e){this._editor=null;this._enabled=false;this._pending=0;this._isDisposed=false;this.completer=e.completer;this.completer.selected.connect(this.onCompletionSelected,this);this.completer.visibilityChanged.connect(this.onVisibilityChanged,this);this._connector=e.connector}get connector(){if("responseType"in this._connector){return new a}return this._connector}set connector(e){this._connector=e}get editor(){return this._editor}set editor(e){if(e===this._editor){return}let t=this._editor;if(t&&!t.isDisposed){const e=t.model;t.host.classList.remove(c);t.host.classList.remove(l);e.selections.changed.disconnect(this.onSelectionsChanged,this);e.value.changed.disconnect(this.onTextChanged,this)}this.completer.reset();this.completer.editor=e;t=this._editor=e;if(t){const e=t.model;this._enabled=false;e.selections.changed.connect(this.onSelectionsChanged,this);e.value.changed.connect(this.onTextChanged,this);this.onSelectionsChanged()}}get isDisposed(){return this._isDisposed}dispose(){if(this.isDisposed){return}this._isDisposed=true;o.Signal.clearData(this)}invoke(){i.MessageLoop.sendMessage(this,h.Msg.InvokeRequest)}processMessage(e){switch(e.type){case h.Msg.InvokeRequest.type:this.onInvokeRequest(e);break;default:break}}getState(e,t){return{text:e.model.value.text,lineHeight:e.lineHeight,charWidth:e.charWidth,line:t.line,column:t.column}}onCompletionSelected(e,t){const s=e.model;const n=this._editor;if(!n||!s){return}const i=s.createPatch(t);if(!i){return}const{start:o,end:r,value:a}=i;const c=n.getOffsetAt(n.getCursorPosition());n.model.sharedModel.updateSource(o,r,a);if(c<=r&&c>=o){n.setCursorPosition(n.getPositionAt(o+a.length))}}onInvokeRequest(e){if(!this.completer.model){return}if(this.completer.model.original){return}const t=this._editor;if(t){this._makeRequest(t.getCursorPosition()).catch((e=>{console.warn("Invoke request bailed",e)}))}}onSelectionsChanged(){const e=this.completer.model;const t=this._editor;if(!t){return}const s=t.host;if(!e){this._enabled=false;s.classList.remove(c);return}if(e.subsetMatch){return}const n=t.getCursorPosition();const i=t.getLine(n.line);if(!i){this._enabled=false;e.reset(true);s.classList.remove(c);return}const{start:o,end:r}=t.getSelection();if(o.column!==r.column||o.line!==r.line){this._enabled=false;e.reset(true);s.classList.remove(c);return}if(i.slice(0,n.column).match(/^\s*$/)){this._enabled=false;e.reset(true);s.classList.remove(c);return}if(!this._enabled){this._enabled=true;s.classList.add(c)}e.handleCursorChange(this.getState(t,t.getCursorPosition()))}onTextChanged(){const e=this.completer.model;if(!e||!this._enabled){return}const t=this.editor;if(!t){return}const{start:s,end:n}=t.getSelection();if(s.column!==n.column||s.line!==n.line){return}e.handleTextChange(this.getState(t,t.getCursorPosition()))}onVisibilityChanged(e){if(e.isDisposed||e.isHidden){if(this._editor){this._editor.host.classList.remove(l);this._editor.focus()}return}if(this._editor){this._editor.host.classList.add(l)}}_makeRequest(e){const t=this.editor;if(!t){return Promise.reject(new Error("No active editor"))}const s=t.model.value.text;const i=n.Text.jsIndexToCharIndex(t.getOffsetAt(e),s);const o=++this._pending;const r=this.getState(t,e);const a={text:s,offset:i};if(this._isICompletionItemsConnector(this._connector)){return this._connector.fetch(a).then((e=>{this._validate(o,a);if(!e){throw new Error(`Invalid request: ${a}`)}this._onFetchItemsReply(r,e)})).catch((e=>{this._onFailure()}))}return this._connector.fetch(a).then((e=>{this._validate(o,a);if(!e){throw new Error(`Invalid request: ${a}`)}this._onReply(r,e)})).catch((e=>{this._onFailure()}))}_isICompletionItemsConnector(e){return e.responseType===h.ICompletionItemsResponseType}_validate(e,t){if(this.isDisposed){throw new Error("Handler is disposed")}if(e!==this._pending){throw new Error("A newer completion request is pending")}}_updateModel(e,t,s){const i=this.completer.model;const o=e.text;if(!i){return null}i.original=e;i.cursor={start:n.Text.charIndexToJsIndex(t,o),end:n.Text.charIndexToJsIndex(s,o)};return i}_onReply(e,t){const s=this._updateModel(e,t.start,t.end);if(!s){return}const n=[];const i=new Set(t.matches||[]);if(t.matches){i.forEach((e=>{n.push(e)}))}const o=t.metadata||{};const r=o._jupyter_types_experimental;const a={};if(r){r.forEach((e=>{const t=e.text;const s=e.type;if(i.has(t)&&s!=="<unknown>"){a[t]=s}}))}s.setOptions(n,a)}_onFetchItemsReply(e,t){const s=this._updateModel(e,t.start,t.end);if(!s){return}if(s.setCompletionItems){s.setCompletionItems(t.items)}}_onFailure(){const e=this.completer.model;if(e){e.reset(true)}}}(function(e){e.ICompletionItemsResponseType="ICompletionItemsReply";let t;(function(e){e.InvokeRequest=new i.Message("invoke-request")})(t=e.Msg||(e.Msg={}))})(h||(h={}));class d extends r.DataConnector{constructor(e){super();this._session=e.session}async fetch(e){var t;const s=(t=this._session)===null||t===void 0?void 0:t.kernel;if(!s){throw new Error("No kernel for completion request.")}const n={code:e.text,cursor_pos:e.offset};const i=await s.requestComplete(n);const o=i.content;if(o.status!=="ok"){throw new Error("Completion fetch failed to return successfully.")}return{start:o.cursor_start,end:o.cursor_end,matches:o.matches,metadata:o.metadata}}}class u extends r.DataConnector{constructor(e){super();this._editor=e.editor}fetch(e){if(!this._editor){return Promise.reject("No editor")}return new Promise((e=>{e(m.contextHint(this._editor))}))}}var m;(function(e){function t(e){const t=e.getCursorPosition();const n=e.getTokenForPosition(t);const i=s(n,e);const o=i.filter((e=>e.type)).map((e=>e.value));const r=Array.from(new Set(o));return{start:n.offset,end:n.offset+n.value.length,matches:r,metadata:{}}}e.contextHint=t;function s(e,t){const s=t.getTokens();return s.filter((t=>t.value.indexOf(e.value)===0&&t.value!==e.value))}})(m||(m={}));class p extends r.DataConnector{constructor(e){super();this._kernel=new d(e);this._context=new u(e)}fetch(e){return Promise.all([this._kernel.fetch(e),this._context.fetch(e)]).then((([e,t])=>_.mergeReplies(e,t)))}}var _;(function(e){function t(e,t){if(e.matches.length===0){return t}else if(t.matches.length===0){return e}const s=e.matches.slice();const n=s.reduce(((e,t)=>{e[t]=null;return e}),{});t.matches.forEach((e=>{if(!(e in n)){s.push(e)}}));return Object.assign(Object.assign({},e),{matches:s})}e.mergeReplies=t})(_||(_={}));var f=s(62867);var g=s(9727);class C{constructor(){this._current=null;this._cursor=null;this._isDisposed=false;this._completionItems=[];this._options=[];this._original=null;this._query="";this._subsetMatch=false;this._typeMap={};this._orderedTypes=[];this._stateChanged=new o.Signal(this)}get stateChanged(){return this._stateChanged}get original(){return this._original}set original(e){const t=this._original===e||this._original&&e&&g.JSONExt.deepEqual(e,this._original);if(t){return}this._reset();this._current=this._original=e;this._stateChanged.emit(undefined)}get current(){return this._current}set current(e){const t=this._current===e||this._current&&e&&g.JSONExt.deepEqual(e,this._current);if(t){return}const s=this._original;if(!s){return}const n=this._cursor;if(!n){return}const i=this._current=e;if(!i){this._stateChanged.emit(undefined);return}const o=s.text.split("\n")[s.line];const r=i.text.split("\n")[i.line];if(!this._subsetMatch&&r.length<o.length){this.reset(true);return}const{start:a,end:c}=n;let l=i.text.substring(a);const h=s.text.substring(c);l=l.substring(0,l.lastIndexOf(h));this._query=l;this._stateChanged.emit(undefined)}get cursor(){return this._cursor}set cursor(e){if(!this.original){return}this._cursor=e}get query(){return this._query}set query(e){this._query=e}get subsetMatch(){return this._subsetMatch}set subsetMatch(e){this._subsetMatch=e}get isDisposed(){return this._isDisposed}dispose(){if(this._isDisposed){return}this._isDisposed=true;o.Signal.clearData(this)}completionItems(){let e=this._query;if(e){return this._markup(e)}return this._completionItems}setCompletionItems(e){if(g.JSONExt.deepEqual(e,this._completionItems)){return}this._completionItems=e;this._orderedTypes=y.findOrderedCompletionItemTypes(this._completionItems);this._stateChanged.emit(undefined)}items(){return this._filter()}options(){return(0,f.iter)(this._options)}typeMap(){return this._typeMap}orderedTypes(){return this._orderedTypes}setOptions(e,t){const s=(0,f.toArray)(e||[]);const n=t||{};if(g.JSONExt.deepEqual(s,this._options)&&g.JSONExt.deepEqual(n,this._typeMap)){return}if(s.length){this._options=s;this._typeMap=n;this._orderedTypes=y.findOrderedTypes(n)}else{this._options=[];this._typeMap={};this._orderedTypes=[]}this._stateChanged.emit(undefined)}handleCursorChange(e){if(!this._original){return}const{column:t,line:s}=e;const{current:n,original:i}=this;if(!i){return}if(s!==i.line){this.reset(true);return}if(t<i.column){this.reset(true);return}const{cursor:o}=this;if(!o||!n){return}const r=o.end-o.start;const a=i.text.split("\n")[i.line];const c=n.text.split("\n")[n.line];const l=c.length-a.length;if(t>i.column+r+l){this.reset(true);return}}handleTextChange(e){const t=this._original;if(!t){return}const{text:s,column:n,line:i}=e;const o=s.split("\n")[i][n-1];if(o&&o.match(/\S/)||e.column>=t.column){this.current=e;return}this.reset(false)}createPatch(e){const t=this._original;const s=this._cursor;const n=this._current;if(!t||!s||!n){return undefined}let{start:i,end:o}=s;o=o+(n.text.length-t.text.length);return{start:i,end:o,value:e}}reset(e=false){if(!e&&this._subsetMatch){return}this._reset();this._stateChanged.emit(undefined)}_markup(e){const t=this._completionItems;let s=[];for(let n of t){const t=n.label.indexOf("(");const i=t>-1?n.label.substring(0,t):n.label;let o=f.StringExt.matchSumOfSquares(i,e);if(o){let e=f.StringExt.highlight(n.label,o.indices,y.mark);s.push(Object.assign(Object.assign({},n),{documentation:n.documentation,label:e.join(""),insertText:n.insertText?n.insertText:n.label,score:o.score}))}}s.sort(y.scoreCmp2);s.forEach((e=>{delete e.score}));return s}_filter(){const e=this._options||[];const t=this._query;if(!t){return(0,f.map)(e,(e=>({raw:e,text:e})))}const s=[];for(const n of e){const e=f.StringExt.matchSumOfSquares(n,t);if(e){const t=f.StringExt.highlight(n,e.indices,y.mark);s.push({raw:n,score:e.score,text:t.join("")})}}return(0,f.map)(s.sort(y.scoreCmp),(e=>({text:e.text,raw:e.raw})))}_reset(){this._current=null;this._cursor=null;this._completionItems=[];this._options=[];this._original=null;this._query="";this._subsetMatch=false;this._typeMap={};this._orderedTypes=[]}}var y;(function(e){const t=["function","instance","class","module","keyword"];const s=t.reduce(((e,t)=>{e[t]=null;return e}),{});function n(e){return`<mark>${e}</mark>`}e.mark=n;function i(e,t){const s=e.score-t.score;if(s!==0){return s}return e.raw.localeCompare(t.raw)}e.scoreCmp=i;function o(e,t){var s,n,i;const o=e.score-t.score;if(o!==0){return o}return(i=(s=e.insertText)===null||s===void 0?void 0:s.localeCompare((n=t.insertText)!==null&&n!==void 0?n:""))!==null&&i!==void 0?i:0}e.scoreCmp2=o;function r(e){const s=new Set;e.forEach((e=>{if(e.type&&!t.includes(e.type)&&!s.has(e.type)){s.add(e.type)}}));const n=Array.from(s);n.sort(((e,t)=>e.localeCompare(t)));return t.concat(n)}e.findOrderedCompletionItemTypes=r;function a(e){const n=Object.keys(e).map((t=>e[t])).filter((e=>!!e&&!(e in s))).sort(((e,t)=>e.localeCompare(t)));return t.concat(n)}e.findOrderedTypes=a})(y||(y={}));var v=s(26825);var x=s(33513);var I=s(61389);const b="jp-Completer-item";const w="jp-mod-active";const S=20;const E=300;const M=true;const k=10;class q extends I.Widget{constructor(e){super({node:document.createElement("div")});this._activeIndex=0;this._editor=null;this._model=null;this._resetFlag=false;this._selected=new o.Signal(this);this._visibilityChanged=new o.Signal(this);this._indexChanged=new o.Signal(this);this._lastSubsetMatch="";this._renderer=e.renderer||q.defaultRenderer;this.model=e.model||null;this.editor=e.editor||null;this.addClass("jp-Completer")}get activeIndex(){return this._activeIndex}get editor(){return this._editor}set editor(e){this._editor=e}get selected(){return this._selected}get visibilityChanged(){return this._visibilityChanged}get indexChanged(){return this._indexChanged}get model(){return this._model}set model(e){if(!e&&!this._model||e===this._model){return}if(this._model){this._model.stateChanged.disconnect(this.onModelStateChanged,this)}this._model=e;if(this._model){this._model.stateChanged.connect(this.onModelStateChanged,this)}}dispose(){this._model=null;super.dispose()}handleEvent(e){if(this.isHidden||!this._editor){return}switch(e.type){case"keydown":this._evtKeydown(e);break;case"mousedown":this._evtMousedown(e);break;case"scroll":this._evtScroll(e);break;default:break}}reset(){this._activeIndex=0;this._lastSubsetMatch="";if(this._model){this._model.reset(true)}}selectActive(){const e=this.node.querySelector(`.${w}`);if(!e){this.reset();return}this._selected.emit(e.getAttribute("data-value"));this.reset()}onAfterAttach(e){document.addEventListener("keydown",this,M);document.addEventListener("mousedown",this,M);document.addEventListener("scroll",this,M)}onBeforeDetach(e){document.removeEventListener("keydown",this,M);document.removeEventListener("mousedown",this,M);document.removeEventListener("scroll",this,M)}onModelStateChanged(){if(this.isAttached){this._activeIndex=0;this._indexChanged.emit(this._activeIndex);this.update()}}onUpdateRequest(e){const t=this._model;if(!t){return}if(this._resetFlag){this._resetFlag=false;if(!this.isHidden){this.hide();this._visibilityChanged.emit(undefined)}return}let s=null;let n=t.completionItems&&t.completionItems();if(n&&n.length){s=this._createCompletionItemNode(t,n)}else{s=this._createIItemNode(t)}if(!s){return}let i=s.querySelectorAll(`.${b}`)[this._activeIndex];i.classList.add(w);let o=document.createElement("div");o.className="jp-Completer-docpanel";s.appendChild(o);this._updateDocPanel();if(!t.query){const e=this._populateSubset();if(e){this.update();return}}if(this.isHidden){this.show();this._setGeometry();this._visibilityChanged.emit(undefined)}else{this._setGeometry()}}_createCompletionItemNode(e,t){if(!t.length){this._resetFlag=true;this.reset();if(!this.isHidden){this.hide();this._visibilityChanged.emit(undefined)}return null}let s=this.node;s.textContent="";let n=e.orderedTypes();let i=document.createElement("ul");i.className="jp-Completer-list";for(let o of t){if(!this._renderer.createCompletionItemNode){return null}let e=this._renderer.createCompletionItemNode(o,n);i.appendChild(e)}s.appendChild(i);return s}_createIItemNode(e){const t=(0,f.toArray)(e.items());if(!t||!t.length){this._resetFlag=true;this.reset();if(!this.isHidden){this.hide();this._visibilityChanged.emit(undefined)}return null}const s=(0,f.toArray)(e.options());if(s.length===1){this._selected.emit(s[0]);this.reset();return null}const n=this.node;n.textContent="";const i=e.orderedTypes();let o=document.createElement("ul");o.className="jp-Completer-list";for(const r of t){const t=this._renderer.createItemNode(r,e.typeMap(),i);o.appendChild(t)}n.appendChild(o);return n}_cycle(e){const t=this.node.querySelectorAll(`.${b}`);const s=this._activeIndex;let n=this.node.querySelector(`.${w}`);n.classList.remove(w);if(e==="up"){this._activeIndex=s===0?t.length-1:s-1}else if(e==="down"){this._activeIndex=s<t.length-1?s+1:0}else{const i=this.node.getBoundingClientRect().height;const o=n.getBoundingClientRect().height;const r=Math.floor(i/o);if(e==="pageUp"){this._activeIndex=s-r}else{this._activeIndex=s+r}this._activeIndex=Math.min(Math.max(0,this._activeIndex),t.length-1)}n=t[this._activeIndex];n.classList.add(w);let i=this.node.querySelector(".jp-Completer-list");x.ElementExt.scrollIntoViewIfNeeded(i,n);this._indexChanged.emit(this._activeIndex);this._updateDocPanel()}_evtKeydown(e){if(this.isHidden||!this._editor){return}if(!this._editor.host.contains(e.target)){this.reset();return}switch(e.keyCode){case 9:{e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();const t=this._model;if(!t){return}const s=t.completionItems&&t.completionItems();if(s&&s.length===1){this._selected.emit(s[0].insertText||s[0].label);this.reset();return}const n=this._populateSubset();if(t.query&&t.query!=this._lastSubsetMatch){t.subsetMatch=true;this._selected.emit(t.query);t.subsetMatch=false;this._lastSubsetMatch=t.query}if(n){this.update()}this._cycle(e.shiftKey?"up":"down");return}case 27:e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();this.reset();return;case 33:case 34:case 38:case 40:{e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();const t=N.keyCodeMap[e.keyCode];this._cycle(t);return}default:return}}_evtMousedown(e){if(this.isHidden||!this._editor){return}if(N.nonstandardClick(e)){this.reset();return}let t=e.target;while(t!==document.documentElement){if(t.classList.contains(b)){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();this._selected.emit(t.getAttribute("data-value"));this.reset();return}if(t===this.node){e.preventDefault();e.stopPropagation();e.stopImmediatePropagation();return}t=t.parentElement}this.reset()}_evtScroll(e){if(this.isHidden||!this._editor){return}const{node:t}=this;if(t.contains(e.target)){return}requestAnimationFrame((()=>{this._setGeometry()}))}_populateSubset(){const{model:e}=this;if(!e){return false}const t=this.node.querySelectorAll(`.${b}`);const s=N.commonSubset(N.itemValues(t));const{query:n}=e;if(s&&s!==n&&s.indexOf(n)===0){e.query=s;return true}return false}_setGeometry(){const{node:e}=this;const t=this._model;const s=this._editor;if(!s||!t||!t.original||!t.cursor){return}const n=t.cursor.start;const i=s.getPositionAt(n);const o=s.getCoordinateForPosition(i);const r=window.getComputedStyle(e);const a=parseInt(r.borderLeftWidth,10)||0;const c=parseInt(r.paddingLeft,10)||0;v.HoverBox.setGeometry({anchor:o,host:s.host,maxHeight:E,minHeight:S,node:e,offset:{horizontal:a+c},privilege:"below",style:r})}_updateDocPanel(){var e,t;let s=this.node.querySelector(".jp-Completer-docpanel");if(!s){return}if(!((e=this.model)===null||e===void 0?void 0:e.completionItems)){return}let n=(t=this.model)===null||t===void 0?void 0:t.completionItems();if(!n){s.setAttribute("style","display:none");return}let i=n[this._activeIndex];if(!i){s.setAttribute("style","display:none");return}s.textContent="";if(i.documentation){let e;if(!this._renderer.createDocumentationNode){e=q.defaultRenderer.createDocumentationNode(i)}else{e=this._renderer.createDocumentationNode(i)}s.appendChild(e);s.setAttribute("style","")}else{s.setAttribute("style","display:none")}}}(function(e){class t{createCompletionItemNode(e,t){let s=this._createBaseNode(e.insertText||e.label);if(e.deprecated){s.classList.add("jp-Completer-deprecated")}return this._constructNode(s,this._createMatchNode(e.label),!!e.type,e.type,t,e.icon)}createItemNode(e,t,s){return this._constructNode(this._createBaseNode(e.raw),this._createMatchNode(e.text),!g.JSONExt.deepEqual(t,{}),t[e.raw]||"",s)}createDocumentationNode(e){let t=document.createElement("pre");t.textContent=e.documentation||"";return t}_createBaseNode(e){const t=document.createElement("li");t.className=b;t.setAttribute("data-value",e);return t}_createMatchNode(e){const t=document.createElement("code");t.className="jp-Completer-match";t.innerHTML=v.defaultSanitizer.sanitize(e,{allowedTags:["mark"]});return t}_constructNode(e,t,s,n,i,o){if(o){const t=o.element({className:"jp-Completer-type jp-Completer-icon"});e.appendChild(t)}else if(s){const t=document.createElement("span");t.textContent=(n[0]||"").toLowerCase();const s=i.indexOf(n)%k+1;t.className="jp-Completer-type jp-Completer-monogram";t.setAttribute(`data-color-index`,s.toString());e.appendChild(t)}else{const t=document.createElement("span");t.className="jp-Completer-monogram";e.appendChild(t)}e.appendChild(t);if(s){e.title=n;const t=document.createElement("code");t.className="jp-Completer-typeExtended";t.textContent=n.toLocaleLowerCase();e.appendChild(t)}else{const t=document.createElement("span");t.className="jp-Completer-typeExtended";e.appendChild(t)}return e}}e.Renderer=t;e.defaultRenderer=new t})(q||(q={}));var N;(function(e){e.keyCodeMap={38:"up",40:"down",33:"pageUp",34:"pageDown"};function t(e){const t=e.length;let s="";if(t<2){return s}const n=e[0].length;for(let i=0;i<n;i++){const n=e[0][i];for(let o=1;o<t;o++){if(e[o][i]!==n){return s}}s+=n}return s}e.commonSubset=t;function s(e){const t=[];for(let s=0,n=e.length;s<n;s++){const n=e[s].getAttribute("data-value");if(n){t.push(n)}}return t}e.itemValues=s;function n(e){return e.button!==0||e.altKey||e.ctrlKey||e.shiftKey||e.metaKey}e.nonstandardClick=n})(N||(N={}));const T=new g.Token("@jupyterlab/completer:ICompletionManager")}}]);