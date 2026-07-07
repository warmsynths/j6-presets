(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(t){if(t.ep)return;t.ep=!0;const n=r(t);fetch(t.href,n)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,Z=N.ShadowRoot&&(N.ShadyCSS===void 0||N.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),se=new WeakMap;let ve=class{constructor(e,r,a){if(this._$cssResult$=!0,a!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=r}get styleSheet(){let e=this.o;const r=this.t;if(Z&&e===void 0){const a=r!==void 0&&r.length===1;a&&(e=se.get(r)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&se.set(r,e))}return e}toString(){return this.cssText}};const Ee=o=>new ve(typeof o=="string"?o:o+"",void 0,ee),oe=(o,...e)=>{const r=o.length===1?o[0]:e.reduce((a,t,n)=>a+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(t)+o[n+1],o[0]);return new ve(r,o,ee)},Se=(o,e)=>{if(Z)o.adoptedStyleSheets=e.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of e){const a=document.createElement("style"),t=N.litNonce;t!==void 0&&a.setAttribute("nonce",t),a.textContent=r.cssText,o.appendChild(a)}},ie=Z?o=>o:o=>o instanceof CSSStyleSheet?(e=>{let r="";for(const a of e.cssRules)r+=a.cssText;return Ee(r)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:je,defineProperty:Be,getOwnPropertyDescriptor:Ie,getOwnPropertyNames:Te,getOwnPropertySymbols:Pe,getPrototypeOf:Ke}=Object,D=globalThis,de=D.trustedTypes,$e=de?de.emptyScript:"",z=D.reactiveElementPolyfillSupport,K=(o,e)=>o,V={toAttribute(o,e){switch(e){case Boolean:o=o?$e:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,e){let r=o;switch(e){case Boolean:r=o!==null;break;case Number:r=o===null?null:Number(o);break;case Object:case Array:try{r=JSON.parse(o)}catch{r=null}}return r}},re=(o,e)=>!je(o,e),le={attribute:!0,type:String,converter:V,reflect:!1,useDefault:!1,hasChanged:re};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),D.litPropertyMetadata??(D.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,r=le){if(r.state&&(r.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((r=Object.create(r)).wrapped=!0),this.elementProperties.set(e,r),!r.noAccessor){const a=Symbol(),t=this.getPropertyDescriptor(e,a,r);t!==void 0&&Be(this.prototype,e,t)}}static getPropertyDescriptor(e,r,a){const{get:t,set:n}=Ie(this.prototype,e)??{get(){return this[r]},set(s){this[r]=s}};return{get:t,set(s){const d=t==null?void 0:t.call(this);n==null||n.call(this,s),this.requestUpdate(e,d,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(K("elementProperties")))return;const e=Ke(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(K("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(K("properties"))){const r=this.properties,a=[...Te(r),...Pe(r)];for(const t of a)this.createProperty(t,r[t])}const e=this[Symbol.metadata];if(e!==null){const r=litPropertyMetadata.get(e);if(r!==void 0)for(const[a,t]of r)this.elementProperties.set(a,t)}this._$Eh=new Map;for(const[r,a]of this.elementProperties){const t=this._$Eu(r,a);t!==void 0&&this._$Eh.set(t,r)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const r=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const t of a)r.unshift(ie(t))}else e!==void 0&&r.push(ie(e));return r}static _$Eu(e,r){const a=r.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(r=>this.enableUpdating=r),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(r=>r(this))}addController(e){var r;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((r=e.hostConnected)==null||r.call(e))}removeController(e){var r;(r=this._$EO)==null||r.delete(e)}_$E_(){const e=new Map,r=this.constructor.elementProperties;for(const a of r.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Se(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(r=>{var a;return(a=r.hostConnected)==null?void 0:a.call(r)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(r=>{var a;return(a=r.hostDisconnected)==null?void 0:a.call(r)})}attributeChangedCallback(e,r,a){this._$AK(e,a)}_$ET(e,r){var n;const a=this.constructor.elementProperties.get(e),t=this.constructor._$Eu(e,a);if(t!==void 0&&a.reflect===!0){const s=(((n=a.converter)==null?void 0:n.toAttribute)!==void 0?a.converter:V).toAttribute(r,a.type);this._$Em=e,s==null?this.removeAttribute(t):this.setAttribute(t,s),this._$Em=null}}_$AK(e,r){var n,s;const a=this.constructor,t=a._$Eh.get(e);if(t!==void 0&&this._$Em!==t){const d=a.getPropertyOptions(t),i=typeof d.converter=="function"?{fromAttribute:d.converter}:((n=d.converter)==null?void 0:n.fromAttribute)!==void 0?d.converter:V;this._$Em=t;const c=i.fromAttribute(r,d.type);this[t]=c??((s=this._$Ej)==null?void 0:s.get(t))??c,this._$Em=null}}requestUpdate(e,r,a,t=!1,n){var s;if(e!==void 0){const d=this.constructor;if(t===!1&&(n=this[e]),a??(a=d.getPropertyOptions(e)),!((a.hasChanged??re)(n,r)||a.useDefault&&a.reflect&&n===((s=this._$Ej)==null?void 0:s.get(e))&&!this.hasAttribute(d._$Eu(e,a))))return;this.C(e,r,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,r,{useDefault:a,reflect:t,wrapped:n},s){a&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??r??this[e]),n!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(r=void 0),this._$AL.set(e,r)),t===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(r){Promise.reject(r)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[n,s]of this._$Ep)this[n]=s;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[n,s]of t){const{wrapped:d}=s,i=this[n];d!==!0||this._$AL.has(n)||i===void 0||this.C(n,void 0,s,i)}}let e=!1;const r=this._$AL;try{e=this.shouldUpdate(r),e?(this.willUpdate(r),(a=this._$EO)==null||a.forEach(t=>{var n;return(n=t.hostUpdate)==null?void 0:n.call(t)}),this.update(r)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(r)}willUpdate(e){}_$AE(e){var r;(r=this._$EO)==null||r.forEach(a=>{var t;return(t=a.hostUpdated)==null?void 0:t.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(r=>this._$ET(r,this[r]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[K("elementProperties")]=new Map,S[K("finalized")]=new Map,z==null||z({ReactiveElement:S}),(D.reactiveElementVersions??(D.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const $=globalThis,ce=o=>o,q=$.trustedTypes,me=q?q.createPolicy("lit-html",{createHTML:o=>o}):void 0,fe="$lit$",F=`lit$${Math.random().toFixed(9).slice(2)}$`,Fe="?"+F,Re=`<${Fe}>`,M=document,R=()=>M.createComment(""),H=o=>o===null||typeof o!="object"&&typeof o!="function",te=Array.isArray,He=o=>te(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",J=`[ 	
\f\r]`,P=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ue=/-->/g,be=/>/g,G=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),pe=/'/g,Ce=/"/g,De=/^(?:script|style|textarea|title)$/i,Le=o=>(e,...r)=>({_$litType$:o,strings:e,values:r}),u=Le(1),j=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),he=new WeakMap,k=M.createTreeWalker(M,129);function Ae(o,e){if(!te(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return me!==void 0?me.createHTML(e):e}const Oe=(o,e)=>{const r=o.length-1,a=[];let t,n=e===2?"<svg>":e===3?"<math>":"",s=P;for(let d=0;d<r;d++){const i=o[d];let c,l,m=-1,g=0;for(;g<i.length&&(s.lastIndex=g,l=s.exec(i),l!==null);)g=s.lastIndex,s===P?l[1]==="!--"?s=ue:l[1]!==void 0?s=be:l[2]!==void 0?(De.test(l[2])&&(t=RegExp("</"+l[2],"g")),s=G):l[3]!==void 0&&(s=G):s===G?l[0]===">"?(s=t??P,m=-1):l[1]===void 0?m=-2:(m=s.lastIndex-l[2].length,c=l[1],s=l[3]===void 0?G:l[3]==='"'?Ce:pe):s===Ce||s===pe?s=G:s===ue||s===be?s=P:(s=G,t=void 0);const y=s===G&&o[d+1].startsWith("/>")?" ":"";n+=s===P?i+Re:m>=0?(a.push(c),i.slice(0,m)+fe+i.slice(m)+F+y):i+F+(m===-2?d:y)}return[Ae(o,n+(o[r]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class L{constructor({strings:e,_$litType$:r},a){let t;this.parts=[];let n=0,s=0;const d=e.length-1,i=this.parts,[c,l]=Oe(e,r);if(this.el=L.createElement(c,a),k.currentNode=this.el.content,r===2||r===3){const m=this.el.content.firstChild;m.replaceWith(...m.childNodes)}for(;(t=k.nextNode())!==null&&i.length<d;){if(t.nodeType===1){if(t.hasAttributes())for(const m of t.getAttributeNames())if(m.endsWith(fe)){const g=l[s++],y=t.getAttribute(m).split(F),E=/([.?@])?(.*)/.exec(g);i.push({type:1,index:n,name:E[2],strings:y,ctor:E[1]==="."?Ve:E[1]==="?"?qe:E[1]==="@"?We:W}),t.removeAttribute(m)}else m.startsWith(F)&&(i.push({type:6,index:n}),t.removeAttribute(m));if(De.test(t.tagName)){const m=t.textContent.split(F),g=m.length-1;if(g>0){t.textContent=q?q.emptyScript:"";for(let y=0;y<g;y++)t.append(m[y],R()),k.nextNode(),i.push({type:2,index:++n});t.append(m[g],R())}}}else if(t.nodeType===8)if(t.data===Fe)i.push({type:2,index:n});else{let m=-1;for(;(m=t.data.indexOf(F,m+1))!==-1;)i.push({type:7,index:n}),m+=F.length-1}n++}}static createElement(e,r){const a=M.createElement("template");return a.innerHTML=e,a}}function B(o,e,r=o,a){var s,d;if(e===j)return e;let t=a!==void 0?(s=r._$Co)==null?void 0:s[a]:r._$Cl;const n=H(e)?void 0:e._$litDirective$;return(t==null?void 0:t.constructor)!==n&&((d=t==null?void 0:t._$AO)==null||d.call(t,!1),n===void 0?t=void 0:(t=new n(o),t._$AT(o,r,a)),a!==void 0?(r._$Co??(r._$Co=[]))[a]=t:r._$Cl=t),t!==void 0&&(e=B(o,t._$AS(o,e.values),t,a)),e}class Ne{constructor(e,r){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:r},parts:a}=this._$AD,t=((e==null?void 0:e.creationScope)??M).importNode(r,!0);k.currentNode=t;let n=k.nextNode(),s=0,d=0,i=a[0];for(;i!==void 0;){if(s===i.index){let c;i.type===2?c=new O(n,n.nextSibling,this,e):i.type===1?c=new i.ctor(n,i.name,i.strings,this,e):i.type===6&&(c=new ze(n,this,e)),this._$AV.push(c),i=a[++d]}s!==(i==null?void 0:i.index)&&(n=k.nextNode(),s++)}return k.currentNode=M,t}p(e){let r=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,r),r+=a.strings.length-2):a._$AI(e[r])),r++}}class O{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,r,a,t){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=r,this._$AM=a,this.options=t,this._$Cv=(t==null?void 0:t.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=r.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,r=this){e=B(this,e,r),H(e)?e===C||e==null||e===""?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==j&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):He(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&H(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){var n;const{values:r,_$litType$:a}=e,t=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=L.createElement(Ae(a.h,a.h[0]),this.options)),a);if(((n=this._$AH)==null?void 0:n._$AD)===t)this._$AH.p(r);else{const s=new Ne(t,this),d=s.u(this.options);s.p(r),this.T(d),this._$AH=s}}_$AC(e){let r=he.get(e.strings);return r===void 0&&he.set(e.strings,r=new L(e)),r}k(e){te(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let a,t=0;for(const n of e)t===r.length?r.push(a=new O(this.O(R()),this.O(R()),this,this.options)):a=r[t],a._$AI(n),t++;t<r.length&&(this._$AR(a&&a._$AB.nextSibling,t),r.length=t)}_$AR(e=this._$AA.nextSibling,r){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,r);e!==this._$AB;){const t=ce(e).nextSibling;ce(e).remove(),e=t}}setConnected(e){var r;this._$AM===void 0&&(this._$Cv=e,(r=this._$AP)==null||r.call(this,e))}}class W{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,r,a,t,n){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=r,this._$AM=t,this.options=n,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=C}_$AI(e,r=this,a,t){const n=this.strings;let s=!1;if(n===void 0)e=B(this,e,r,0),s=!H(e)||e!==this._$AH&&e!==j,s&&(this._$AH=e);else{const d=e;let i,c;for(e=n[0],i=0;i<n.length-1;i++)c=B(this,d[a+i],r,i),c===j&&(c=this._$AH[i]),s||(s=!H(c)||c!==this._$AH[i]),c===C?e=C:e!==C&&(e+=(c??"")+n[i+1]),this._$AH[i]=c}s&&!t&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ve extends W{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}}class qe extends W{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}}class We extends W{constructor(e,r,a,t,n){super(e,r,a,t,n),this.type=5}_$AI(e,r=this){if((e=B(this,e,r,0)??C)===j)return;const a=this._$AH,t=e===C&&a!==C||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,n=e!==C&&(a===C||t);t&&this.element.removeEventListener(this.name,this,a),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,e):this._$AH.handleEvent(e)}}class ze{constructor(e,r,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=r,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){B(this,e)}}const Y=$.litHtmlPolyfillSupport;Y==null||Y(L,O),($.litHtmlVersions??($.litHtmlVersions=[])).push("3.3.3");const Je=(o,e,r)=>{const a=(r==null?void 0:r.renderBefore)??e;let t=a._$litPart$;if(t===void 0){const n=(r==null?void 0:r.renderBefore)??null;a._$litPart$=t=new O(e.insertBefore(R(),n),n,void 0,r??{})}return t._$AI(o),t};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const x=globalThis;class w extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var r;const e=super.createRenderRoot();return(r=this.renderOptions).renderBefore??(r.renderBefore=e.firstChild),e}update(e){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Je(r,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return j}}var ye;w._$litElement$=!0,w.finalized=!0,(ye=x.litElementHydrateSupport)==null||ye.call(x,{LitElement:w});const U=x.litElementPolyfillSupport;U==null||U({LitElement:w});(x.litElementVersions??(x.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ae=o=>(e,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(o,e)}):customElements.define(o,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ye={attribute:!0,type:String,converter:V,reflect:!1,hasChanged:re},Ue=(o=Ye,e,r)=>{const{kind:a,metadata:t}=r;let n=globalThis.litPropertyMetadata.get(t);if(n===void 0&&globalThis.litPropertyMetadata.set(t,n=new Map),a==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(r.name,o),a==="accessor"){const{name:s}=r;return{set(d){const i=e.get.call(this);e.set.call(this,d),this.requestUpdate(s,i,o,!0,d)},init(d){return d!==void 0&&this.C(s,void 0,o,d),d}}}if(a==="setter"){const{name:s}=r;return function(d){const i=this[s];e.call(this,d),this.requestUpdate(s,i,o,!0,d)}}throw Error("Unsupported decorator location: "+a)};function ne(o){return(e,r)=>typeof r=="object"?Ue(o,e,r):((a,t,n)=>{const s=t.hasOwnProperty(n);return t.constructor.createProperty(n,a),s?Object.getOwnPropertyDescriptor(t,n):void 0})(o,e,r)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(o){return ne({...o,state:!0,attribute:!1})}const Qe=[{blank:"",preset:"1 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"I",notes_description:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",bankPatch:"1-1",soundNameCategory:"Mellow Sub Octave Pluck",notesDescription:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Low (Low -> Mid)",r:"None",blank_3:"Off",notes_description:"Square Pluck:",bankPatch:"1-2",soundNameCategory:"Square Pluck",notesDescription:"Square Pluck:",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Low (Low -> Mid)",release:"None",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 3",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Mellow Mallet: Sustains once Envelope control is past 50%",bankPatch:"1-3",soundNameCategory:"Mellow Mallet",notesDescription:"Mellow Mallet: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 4",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"High",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-4",soundNameCategory:"Noisy Mellow Pluck",notesDescription:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 5",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-5",soundNameCategory:"Noisy Octave Pluck",notesDescription:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 6",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"Mid",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"Off",notes_description:"Harpsichord: Sustains + PWM once Envelope control is past 50%",bankPatch:"1-6",soundNameCategory:"Harpsichord",notesDescription:"Harpsichord: Sustains + PWM once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"1 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"15%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"I",notes_description:"Chorus Clavinet: Sustains once Envelope control is past 50%",bankPatch:"1-7",soundNameCategory:"Chorus Clavinet",notesDescription:"Chorus Clavinet: Sustains once Envelope control is past 50%",waveformOscType:"Fixed + Sub 15%",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Chorus Harp: Mild Sustain once Envelope control is past 50%",bankPatch:"1-8",soundNameCategory:"Chorus Harp",notesDescription:"Chorus Harp: Mild Sustain once Envelope control is past 50%",waveformOscType:"Sub 100% + Square",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 1",glide:"x",octave:"+1",rate:"1/8th",delay:"x",lfo:"x",pwm:"LFO*",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",bankPatch:"2-1",soundNameCategory:"Staccato Steel Drum",notesDescription:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Low",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",bankPatch:"2-2",soundNameCategory:"Bright Detuned Saw Pluck",notesDescription:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",waveformOscType:"Saw",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",bankPatch:"2-3",soundNameCategory:"Synthy 80s Clean Guitar",notesDescription:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 4",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"II",notes_description:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",bankPatch:"2-4",soundNameCategory:"Gliding Noisy Pluck",notesDescription:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> Mid)",r:"Fast",blank_3:"II",notes_description:"Octave Splash: Mild Sustain once Envelope control is past 50%",bankPatch:"2-5",soundNameCategory:"Octave Splash",notesDescription:"Octave Splash: Mild Sustain once Envelope control is past 50%",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> Mid)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 6",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"Mid",blank_2:"Y",freq:"Mid",res:"High",env:"+ Mid",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Plectrum Wind:",bankPatch:"2-6",soundNameCategory:"Plectrum Wind",notesDescription:"Plectrum Wind:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"High",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"II",notes_description:"Plectrum Mellotron Chorus:",bankPatch:"2-7",soundNameCategory:"Plectrum Mellotron Chorus",notesDescription:"Plectrum Mellotron Chorus:",waveformOscType:"Sub 100% + Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"2 - 8",glide:"x",octave:"0",rate:"Fast",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Air Harp:",bankPatch:"2-8",soundNameCategory:"Air Harp",notesDescription:"Air Harp:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"Y"},{blank:"",preset:"3 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Slow",s_control_range:"Low (Low -> High)",r:"Slow",blank_3:"I",notes_description:"Ambient Piano:",bankPatch:"3-1",soundNameCategory:"Ambient Piano",notesDescription:"Ambient Piano:",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"None",decay:"Slow",sustain:"Low (Low -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"Off",notes_description:"Synth Vibraphone:",bankPatch:"3-2",soundNameCategory:"Synth Vibraphone",notesDescription:"Synth Vibraphone:",waveformOscType:"Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Hammered Dulcimar:",bankPatch:"3-3",soundNameCategory:"Hammered Dulcimar",notesDescription:"Hammered Dulcimar:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"3 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"I",notes_description:"Saw Piano:",bankPatch:"3-4",soundNameCategory:"Saw Piano",notesDescription:"Saw Piano:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"Fast",d:"Mid",s_control_range:"Mid (Low -> High)",r:"None",blank_3:"I",notes_description:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",bankPatch:"3-5",soundNameCategory:"Brass Pluck",notesDescription:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"Mid (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 6",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Resonant Blown Glass:",bankPatch:"3-6",soundNameCategory:"Resonant Blown Glass",notesDescription:"Resonant Blown Glass:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",bankPatch:"3-7",soundNameCategory:"Acid Saw",notesDescription:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 8",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",bankPatch:"3-8",soundNameCategory:"Bright Trumpet",notesDescription:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",waveformOscType:"Saw + Low",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"4 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"II",notes_description:"Octave PWM Lead:",bankPatch:"4-1",soundNameCategory:"Octave PWM Lead",notesDescription:"Octave PWM Lead:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 2",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"x",lfo_2:"High",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"I",notes_description:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",bankPatch:"4-2",soundNameCategory:"Gliding Pulse Lead I",notesDescription:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",waveformOscType:"Fixed + Sub 25%",filterFreq:"High",resonance:"High",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"4 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Slow PWM Lead:",bankPatch:"4-3",soundNameCategory:"Slow PWM Lead",notesDescription:"Slow PWM Lead:",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"High",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Vibrato Saw Lead:",bankPatch:"4-4",soundNameCategory:"Vibrato Saw Lead",notesDescription:"Vibrato Saw Lead:",waveformOscType:"Saw + High",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 5",glide:"Mid",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"II",notes_description:"Gliding Pluse Lead II:",bankPatch:"4-5",soundNameCategory:"Gliding Pluse Lead II",notesDescription:"Gliding Pluse Lead II:",waveformOscType:"Fixed + Sub 25% + Low",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 6",glide:"x",octave:"",rate:"Fast",delay:"Y",lfo:"Mid",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Dirty Strings:",bankPatch:"4-6",soundNameCategory:"Octave Dirty Strings",notesDescription:"Octave Dirty Strings:",waveformOscType:"Saw + Fixed + Sub 25% + Mid",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Mixed Lead:",bankPatch:"4-7",soundNameCategory:"Octave Mixed Lead",notesDescription:"Octave Mixed Lead:",waveformOscType:"Saw + Fixed + Sub 25%",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"Low",blank_2:"Y",freq:"High",res:"High",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Blown Octave Square:",bankPatch:"4-8",soundNameCategory:"Blown Octave Square",notesDescription:"Blown Octave Square:",waveformOscType:"Sub 100% + Square",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 1",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"I",notes_description:"Thick Attack Lead:",bankPatch:"5-1",soundNameCategory:"Thick Attack Lead",notesDescription:"Thick Attack Lead:",waveformOscType:"Saw + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"5 - 2",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"Off",notes_description:"The Fake Slim Shady:",bankPatch:"5-2",soundNameCategory:"The Fake Slim Shady",notesDescription:"The Fake Slim Shady:",waveformOscType:"Saw + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"Low",blank_2:"Y",freq:"Mid",res:"High",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Ya-ee Choir:",bankPatch:"5-3",soundNameCategory:"Ya-ee Choir",notesDescription:"Ya-ee Choir:",waveformOscType:"Saw + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Dark Strings:",bankPatch:"5-4",soundNameCategory:"Dark Strings",notesDescription:"Dark Strings:",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 5",glide:"Slow",octave:"+1",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Angry Cat: Gliding noisy lead with fast filter modulation",bankPatch:"5-5",soundNameCategory:"Angry Cat",notesDescription:"Angry Cat: Gliding noisy lead with fast filter modulation",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 6",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Choir:",bankPatch:"5-6",soundNameCategory:"Brass Choir",notesDescription:"Brass Choir:",waveformOscType:"LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 7",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Whoa Flute:",bankPatch:"5-7",soundNameCategory:"Whoa Flute",notesDescription:"Whoa Flute:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 8",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"II",notes_description:"Honky Tonk Clav: (Great bass sounds)",bankPatch:"5-8",soundNameCategory:"Honky Tonk Clav",notesDescription:"Honky Tonk Clav: (Great bass sounds)",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"I",notes_description:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-1",soundNameCategory:"PWM Envelope",notesDescription:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Env + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 2",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Mid",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"Off",notes_description:"Solo String:",bankPatch:"6-2",soundNameCategory:"Solo String",notesDescription:"Solo String:",waveformOscType:"Saw + Mid",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 3",glide:"x",octave:"0",rate:"Max",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Square Ring Mod:",bankPatch:"6-3",soundNameCategory:"Square Ring Mod",notesDescription:"Square Ring Mod:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Low -> High)",r:"Fast",blank_3:"Off",notes_description:"Mellow Trumpet:",bankPatch:"6-4",soundNameCategory:"Mellow Trumpet",notesDescription:"Mellow Trumpet:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Low -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 5",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Horn:",bankPatch:"6-5",soundNameCategory:"Horn",notesDescription:"Horn:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 6",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"I",notes_description:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-6",soundNameCategory:"Square Chorus Lead",notesDescription:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Clarinet:",bankPatch:"6-7",soundNameCategory:"Clarinet",notesDescription:"Clarinet:",waveformOscType:"Square + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 8",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"x",sub:"x",noise:"High",blank_2:"Y",freq:"Tuned*",res:"Max*",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",bankPatch:"6-8",soundNameCategory:"Ocarina",notesDescription:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",waveformOscType:"Unknown",filterFreq:"Tuned*",resonance:"Max*",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"7 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"PWM String Ensemble I:",bankPatch:"7-1",soundNameCategory:"PWM String Ensemble I",notesDescription:"PWM String Ensemble I:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 2",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"Saw String Ensemble:",bankPatch:"7-2",soundNameCategory:"Saw String Ensemble",notesDescription:"Saw String Ensemble:",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 3",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Ensemble:",bankPatch:"7-3",soundNameCategory:"Brass Ensemble",notesDescription:"Brass Ensemble:",waveformOscType:"Saw + Sub 100% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 4",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"PWM String Ensemble II:",bankPatch:"7-4",soundNameCategory:"PWM String Ensemble II",notesDescription:"PWM String Ensemble II:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 5",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"25%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Ghost Pad: (Open filter for Noisy String Ensemble)",bankPatch:"7-5",soundNameCategory:"Ghost Pad",notesDescription:"Ghost Pad: (Open filter for Noisy String Ensemble)",waveformOscType:"Saw + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Mid",decay:"Mid",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"7 - 6",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"- Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad I (Bright):",bankPatch:"7-6",soundNameCategory:"Evolving Filter Pad I (Bright)",notesDescription:"Evolving Filter Pad I (Bright):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Low",envMod:"- Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad II (Mellow):",bankPatch:"7-7",soundNameCategory:"Evolving Filter Pad II (Mellow)",notesDescription:"Evolving Filter Pad II (Mellow):",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 8",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad III (Mellow Slow and Wide):",bankPatch:"7-8",soundNameCategory:"Evolving Filter Pad III (Mellow Slow and Wide)",notesDescription:"Evolving Filter Pad III (Mellow Slow and Wide):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Mid",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 1",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"50%",noise:"Low",blank_2:"x",freq:"Mid",res:"High",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad IV (Bright Slow and Wide):",bankPatch:"8-1",soundNameCategory:"Evolving Filter Pad IV (Bright Slow and Wide)",notesDescription:"Evolving Filter Pad IV (Bright Slow and Wide):",waveformOscType:"Sub 50% + Fixed + Sub 20%",filterFreq:"Mid",resonance:"High",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 2",glide:"Mid",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad V (Squishy I):",bankPatch:"8-2",soundNameCategory:"Evolving Filter Pad V (Squishy I)",notesDescription:"Evolving Filter Pad V (Squishy I):",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 3",glide:"x",octave:"0",rate:"Slow",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Evolving Filter Pad VI (Squishy II):",bankPatch:"8-3",soundNameCategory:"Evolving Filter Pad VI (Squishy II)",notesDescription:"Evolving Filter Pad VI (Squishy II):",waveformOscType:"Fixed + Sub 20%",filterFreq:"High",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 4",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Low",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad VII (Blossoming I):",bankPatch:"8-4",soundNameCategory:"Evolving Filter Pad VII (Blossoming I)",notesDescription:"Evolving Filter Pad VII (Blossoming I):",waveformOscType:"Saw + Sub 50%",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"Slow",decay:"Mid",sustain:"High (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Evolving Filter Pad VII (Blossoming II):",bankPatch:"8-5",soundNameCategory:"Evolving Filter Pad VII (Blossoming II)",notesDescription:"Evolving Filter Pad VII (Blossoming II):",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Slow",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"8 - 6",glide:"x",octave:"+1",rate:"Fast",delay:"Y",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Slow",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"I",notes_description:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",bankPatch:"8-6",soundNameCategory:"Decaying Filter Pad (Blossoming III)",notesDescription:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Slow",sustain:"Off (Off -> High)",release:"Fast",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"High",env:"+ Low",lfo_2:"High*",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",bankPatch:"8-7",soundNameCategory:"Sample and Hold Pad",notesDescription:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",waveformOscType:"Saw + Sub 100%",filterFreq:"Low",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 8",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"Slow",blank_3:"II",notes_description:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",bankPatch:"8-8",soundNameCategory:"Plectrum Tremolo Pad",notesDescription:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"Slow",chorus:"II",delayReverb:"x"}],Xe=[[/deadmau5/i,["Progressive House","EDM"]],[/avicii/i,["Melodic EDM","Pop"]],[/chiptune/i,["Chiptune","Retro"]],[/lo[- ]?fi/i,["Lo-Fi"]],[/house/i,["House"]],[/trance/i,["Trance"]],[/dance/i,["Dance"]],[/ambient/i,["Ambient"]],[/juno/i,["Vintage","Analog"]],[/303/i,["Acid","Bassline"]],[/bass/i,["Bass"]],[/brass/i,["Brass"]],[/organ/i,["Organ"]],[/strings/i,["Strings"]],[/piano/i,["Piano"]],[/pad/i,["Pad"]],[/lead/i,["Lead"]],[/pluck/i,["Pluck"]],[/synth/i,["Synth"]],[/noise/i,["Noise"]],[/bell/i,["Bell"]],[/vintage/i,["Vintage"]],[/metallic/i,["Metallic"]],[/dark/i,["Dark"]],[/bright/i,["Bright"]],[/soft/i,["Soft"]],[/aggressive/i,["Aggressive"]],[/hyper pop/i,["Hyperpop"]],[/rock/i,["Rock"]],[/house music/i,["House"]],[/deep house/i,["Deep House"]],[/hip hop/i,["Hip Hop"]],[/rnb/i,["R&B"]],[/sci-fi/i,["Sci-Fi"]],[/industrial/i,["Industrial"]],[/noise style/i,["Noise"]],[/soundtrack/i,["Soundtrack"]]];function b(o,e){Array.isArray(e)?e.forEach(r=>r&&o.add(r)):e&&o.add(e)}function Ze(o){const e=new Set,r=o.notesDescription||"",a=(o.soundNameCategory||"").toLowerCase(),t=/\(([^)]+)\)/g;let n;for(;(n=t.exec(r))!==null;){const i=n[1].trim();i&&(/^good for\s+/i.test(i)||b(e,i))}Xe.forEach(([i,c])=>{(i.test(r)||i.test(a))&&b(e,c)}),[[/pad/i,"Pad"],[/lead/i,"Lead"],[/bass/i,"Bass"],[/keys/i,"Keys"],[/organ/i,"Organ"],[/piano/i,"Piano"],[/pluck/i,"Pluck"],[/brass/i,"Brass"],[/strings/i,"Strings"],[/bell/i,"Bell"],[/whistle/i,"Whistle"],[/clav/i,"Clav"],[/synth/i,"Synth"]].forEach(([i,c])=>{o.soundNameCategory&&i.test(o.soundNameCategory)&&b(e,c)});const d=(o.waveformOscType||"").toLowerCase();return d.includes("saw")&&b(e,"Saw"),d.includes("square")&&b(e,"Square"),d.includes("sub")&&b(e,"Sub"),d.includes("noise")&&b(e,"Noise"),d.includes("triangle")&&b(e,"Triangle"),d.includes("sync")&&b(e,"Sync"),d.includes("pwm")&&b(e,"PWM"),(d.includes("cross-mod")||d.includes("cross mod"))&&b(e,"Cross-Mod"),o.filterFreq==="High"&&b(e,"Bright"),o.filterFreq==="Low"&&b(e,"Dark"),o.resonance==="High"&&b(e,"Resonant"),o.resonance==="Low"&&b(e,"Smooth"),o.attack==="Fast"&&b(e,"Sharp Attack"),o.attack==="Slow"&&b(e,"Slow Attack"),o.release==="Slow"&&b(e,"Long Release"),o.release==="Fast"&&b(e,"Snappy Release"),o.sustain==="Max"&&b(e,"Sustained"),o.chorus&&o.chorus!=="Off"&&b(e,o.chorus),o.delayReverb&&o.delayReverb!=="Off"&&b(e,o.delayReverb),Array.from(e)}function eo(o){const e=o.toLowerCase();return/^(progressive house|edm|melodic edm|pop|chiptune|retro|lo-fi|house|trance|dance|ambient|acid|bassline|hip hop|r&b|sci-fi|industrial|soundtrack|hyperpop|rock|vintage|analog)$/.test(e)?"Genre / Mood":/^(pad|lead|bass|keys|organ|piano|pluck|brass|strings|bell|whistle|clav|synth)$/.test(e)?"Instrument / Type":/^(bright|dark|soft|aggressive|metallic|noise|smooth|resonant|sustained)$/.test(e)?"Character":/^(sharp attack|slow attack|long release|snappy release)$/.test(e)?"Envelope":/^(chorus|reverb|delay|chorus \d|reverb \d|delay \d)$/.test(e)?"Effects":/^(saw|square|sub|triangle|sync|pwm|cross-mod)$/.test(e)?"Waveform":"Other"}function Q(o){if(!o)return 0;const e=o.toLowerCase().trim();return e.includes("none")||e==="x"?0:e.includes("fast")?20:e.includes("mid")||e.includes("med")?60:e.includes("slow")?100:0}function oo(o){if(!o)return 0;const e=o.toLowerCase().trim();return e.includes("off")||e==="x"?0:e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")||e.includes("max")?100:0}function ro(o){if(!o)return 50;const e=o.toLowerCase().trim();return e.includes("low")?15:e.includes("mid")||e.includes("med")?55:e.includes("high")?85:e.includes("tuned")?70:50}function to(o){if(!o)return 0;const e=o.toLowerCase().trim();return e.includes("low")?10:e.includes("mid")||e.includes("med")?45:e.includes("high")?80:e.includes("max")?100:0}function ao(o){if(!o||o==="x")return 50;const e=o.toLowerCase().trim();return e.includes("- med")||e.includes("- high")?15:e.includes("- low")?35:e.includes("+ low")?65:e.includes("+ mid")||e.includes("+ med")?80:e.includes("+ high")?95:50}function no(o){if(!o||o==="x")return 0;const e=o.toLowerCase().trim();return e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")?100:0}function so(o){if(!o||o==="x")return 0;const e=o.toLowerCase().trim();return e.includes("fixed")?30:e.includes("env")?50:e.includes("lfo")?85:0}var io=Object.defineProperty,lo=Object.getOwnPropertyDescriptor,v=(o,e,r,a)=>{for(var t=a>1?void 0:a?lo(e,r):e,n=o.length-1,s;n>=0;n--)(s=o[n])&&(t=(a?s(e,r,t):s(t))||t);return a&&t&&io(e,r,t),t};let h=class extends w{constructor(){super(...arguments),this.presets=[],this.selectedId="",this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All",this.filtersOpen=!1}clearFilters(){this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All"}get hasActiveFilters(){return this.searchQuery!==""||this.activeGenreMood!=="All"||this.activeInstrumentType!=="All"||this.activeCharacter!=="All"||this.activeEnvelope!=="All"||this.activeEffects!=="All"||this.activeWaveform!=="All"}get filteredPresets(){const o=this.searchQuery.trim().toLowerCase();return this.presets.filter(e=>{const r=[e.name,e.notes,e.waveformOscType,e.bankPatch,e.filterFreq,e.delayEffects,(e.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase(),a=o===""||r.includes(o),t=this.activeGenreMood==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeGenreMood.toLowerCase()),n=this.activeInstrumentType==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeInstrumentType.toLowerCase()),s=this.activeCharacter==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeCharacter.toLowerCase()),d=this.activeEnvelope==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeEnvelope.toLowerCase()),i=this.activeEffects==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeEffects.toLowerCase()),c=this.activeWaveform==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeWaveform.toLowerCase());return a&&t&&n&&s&&d&&i&&c})}get groupedTags(){const o=new Set;this.presets.forEach(r=>(r.tags||[]).forEach(a=>o.add(a)));const e=new Map;return Array.from(o).sort((r,a)=>r.localeCompare(a)).forEach(r=>{const a=eo(r),t=e.get(a)??[];t.push(r),e.set(a,t)}),e}renderCategorySelect(o,e,r,a){return u`
      <div class="filter-group">
        <label>${o}</label>
        <select
          class="filter-select"
          .value=${r}
          @change=${t=>{this[a]=t.target.value}}
        >
          <option value="All">All</option>
          ${e.map(t=>u`<option value=${t} ?selected=${r===t}>${t}</option>`)}
        </select>
      </div>
    `}render(){const o=this.filteredPresets,e=o.filter(t=>(t.tags||[]).some(n=>n.toLowerCase()==="bass")).length,r=o.filter(t=>(t.tags||[]).some(n=>n.toLowerCase()==="pad")).length,a=o.filter(t=>(t.tags||[]).some(n=>n.toLowerCase()==="lead")).length;return u`
      <div class="list-header">
        <div class="header-top">
          <div class="led-search-screen">
            <input 
              class="led-search-input" 
              placeholder="SEARCH..."
              .value=${this.searchQuery}
              @input=${t=>{this.searchQuery=t.target.value}}
            />
            <svg class="led-search-icon" viewBox="0 0 24 24">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
            </svg>
          </div>
          <button class="retro-btn" style="${this.filtersOpen?"background: #4a4d54;":""}" @click=${()=>this.filtersOpen=!this.filtersOpen}>
            ${this.filtersOpen?"CLOSE FILTERS":"FILTERS"}
          </button>
        </div>
        
        <div class="header-bottom">
          <span class="preset-count">MATCH: ${o.length}</span>
          <div class="patch-counts">
            FILTERED (BASS: ${e}, PAD: ${r}, LEAD: ${a})
          </div>
        </div>
      </div>
      
      ${this.filtersOpen?u`
        <div class="filters-drawer">
          <div class="filter-grid">
            ${this.renderCategorySelect("Genre / Mood",this.groupedTags.get("Genre / Mood")||[],this.activeGenreMood,"activeGenreMood")}
            ${this.renderCategorySelect("Instrument / Type",this.groupedTags.get("Instrument / Type")||[],this.activeInstrumentType,"activeInstrumentType")}
            ${this.renderCategorySelect("Character",this.groupedTags.get("Character")||[],this.activeCharacter,"activeCharacter")}
            ${this.renderCategorySelect("Envelope",this.groupedTags.get("Envelope")||[],this.activeEnvelope,"activeEnvelope")}
            ${this.renderCategorySelect("Effects",this.groupedTags.get("Effects")||[],this.activeEffects,"activeEffects")}
            ${this.renderCategorySelect("Waveform",this.groupedTags.get("Waveform")||[],this.activeWaveform,"activeWaveform")}
          </div>
          <div class="filters-footer">
            <button class="retro-btn" @click=${this.clearFilters} ?disabled=${!this.hasActiveFilters}>CLEAR ALL</button>
          </div>
        </div>
      `:""}

      <div class="scroll-container">
        ${o.length===0?u`<div class="no-results">NO PRESETS FOUND</div>`:u`
            <ul>
              ${o.map(t=>{const n=t.id||t.bankPatch,s=t.name||t.soundNameCategory,d=this.selectedId===n;return u`
                  <li 
                    class=${d?"selected":""} 
                    @click=${()=>{this.dispatchEvent(new CustomEvent("preset-selected",{detail:t}))}}
                  >
                    <span class="preset-id">${n}</span>
                    <span class="preset-name">${s}</span>
                  </li>
                `})}
            </ul>
          `}
      </div>
    `}};h.styles=oe`
    :host {
      display: flex;
      flex-direction: column;
      background: var(--bg-surface);
      border: 3px solid var(--border-light);
      border-radius: 8px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.85), inset 0 0 20px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      max-height: 85vh;
      font-family: var(--font-sans);
      color: var(--text-primary);
      z-index: 1000;
      width: 100%;
    }
    
    .list-header {
      background: var(--bg-list-header);
      border-bottom: 2px solid var(--border-medium);
      padding: 14px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    
    .header-top, .header-bottom {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .preset-count {
      font-family: var(--font-mono);
      color: var(--color-orange-primary);
      font-size: 1.2rem;
      letter-spacing: 0.05em;
      background: #0c0c0d;
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid var(--color-orange-primary)33;
      box-shadow: 0 0 6px rgba(255, 93, 0, 0.15);
    }
    
    .led-search-screen {
      flex: 1;
      height: 34px;
      background-color: var(--bg-input);
      background-image: radial-gradient(rgba(255, 93, 0, 0.2) 1.5px, transparent 0);
      background-size: 4px 4px;
      border: 2px solid #09090b;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 1px 1px rgba(255,255,255,0.05);
      border-radius: 3px;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
    }

    .led-search-input {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--color-orange-primary);
      font-family: var(--font-mono);
      font-size: 1.7rem;
      letter-spacing: 0.05em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 6px rgba(255, 93, 0, 0.8);
      padding: 0;
    }
    .led-search-input::placeholder { color: var(--color-orange-primary)33; text-shadow: none; }
    
    .led-search-icon {
      position: absolute; right: 8px; top: calc(50% - 9px);
      width: 18px; height: 18px; fill: var(--color-orange-primary);
      filter: drop-shadow(0 0 4px rgba(255, 93, 0, 0.7)); pointer-events: none;
    }

    .retro-btn {
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 2px solid #5a5c62; color: var(--text-primary); font-size: 0.7rem; font-weight: bold;
      padding: 6px 12px; border-radius: 4px; cursor: pointer; text-transform: uppercase;
      height: 34px;
    }

    .retro-btn:hover { background: #4a4d54; }

    .patch-counts {
      font-size: 0.65rem;
      color: var(--text-secondary);
      font-weight: 800;
      text-align: right;
      text-transform: uppercase;
    }

    .filters-drawer {
      background: #18191e;
      border-bottom: 2px solid var(--border-medium);
      padding: 14px;
    }
    
    .filter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
    .filter-group { display: flex; flex-direction: column; gap: 4px; }
    .filter-group label { font-size: 0.7rem; font-weight: bold; color: var(--text-secondary); text-transform: uppercase; }
    .filter-select {
      background: var(--bg-element-dark); border: 2px solid #2e3037; color: var(--text-primary);
      border-radius: 4px; padding: 6px; font-size: 0.8rem; outline: none;
    }
    .filters-footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 14px;
    }

    .scroll-container {
      overflow-y: auto;
      flex: 1;
      min-height: 200px;
    }

    /* Custom Retro Scrollbar */
    .scroll-container::-webkit-scrollbar {
      width: 10px;
    }
    .scroll-container::-webkit-scrollbar-track {
      background: #0f0f11;
      border-left: 1px solid #232328;
    }
    .scroll-container::-webkit-scrollbar-thumb {
      background: #3a3b40;
      border-radius: 5px;
      border: 2px solid #0f0f11;
    }
    .scroll-container::-webkit-scrollbar-thumb:hover {
      background: var(--color-orange-primary);
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    li {
      padding: 10px 14px;
      border-bottom: 1px solid var(--border-dark);
      cursor: pointer;
      display: grid;
      grid-template-columns: 50px 1fr;
      gap: 12px;
      align-items: center;
      transition: all 0.15s ease;
      font-size: 0.9rem;
    }
    
    li:hover {
      background: var(--bg-element-hover);
      color: #ffffff;
    }
    
    li.selected {
      background: rgba(255, 93, 0, 0.08);
      border-left: 4px solid var(--color-orange-primary);
      color: var(--color-orange-light);
    }
    
    .preset-id {
      font-family: var(--font-mono);
      font-size: 1.4rem;
      color: var(--color-orange-primary);
      text-shadow: 0 0 4px rgba(255, 93, 0, 0.2);
    }
    
    .preset-name {
      font-weight: 500;
    }

    .no-results {
      padding: 30px;
      text-align: center;
      color: var(--text-muted);
      font-family: var(--font-mono);
      font-size: 1.5rem;
    }
  `;v([ne({type:Array})],h.prototype,"presets",2);v([ne({type:String})],h.prototype,"selectedId",2);v([p()],h.prototype,"searchQuery",2);v([p()],h.prototype,"activeGenreMood",2);v([p()],h.prototype,"activeInstrumentType",2);v([p()],h.prototype,"activeCharacter",2);v([p()],h.prototype,"activeEnvelope",2);v([p()],h.prototype,"activeEffects",2);v([p()],h.prototype,"activeWaveform",2);v([p()],h.prototype,"filtersOpen",2);h=v([ae("j6-preset-list")],h);const co=[{number:1,genre:"Pop",chords:["Cadd9","C#M9/C","Dm7","D#M7","Cadd9/E","FM9","Dadd9/F#","Em7/G","Fm6/G#","FM/A","Gm/A#","G/B"],voicings:[["E4","D4","G3","C3"],["F4","D#4","C4","C#3"],["C4","A3","F4","D3"],["G4","D4","A#3","D#3"],["G4","D4","C4","E3"],["G4","E4","A3","F2"],["E4","D4","A3","F#2"],["G4","E4","D4","G2"],["F4","D4","C4","G#2"],["F4","C4","A3","A2"],["G4","D4","A#3","A#2"],["G4","D4","B3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, F major, D minor)。ダイアトニック適合率(構成音ベース): 82%。特徴: pop-ish sus/add9",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.999},{key:"F major",score:1,raw:.999},{key:"D minor",score:0,raw:.849}],diatonicToneRatio:1,tags:["pop-ish sus/add9"],qualityCounts:{major:7,min7:2,minor:2,maj7:1},extensionCounts:{6:1,9:5,add9:3},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"I–IV–V–I",recommendedProgression:"Cadd9 - FM9 - G/B - Cadd9",blackSubstitutionsToWhite:"C#:C#M9/C→FM/A(tone_overlap) | D#:D#M7→Em7/G(tone_overlap) | F#:Dadd9/F#→Em7/G(tone_overlap) | G#:Fm6/G#→Dm7(tone_overlap) | A#:Gm/A#→Em7/G(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:2,genre:"Pop",chords:["CM9","C#dim7","Dm9","D#dim7","Em7","FM9","F#m7b5","F/A","G#dim7","Am9","C/A#","Bm7b5"],voicings:[["D4","B3","E3","C3"],["E4","A#3","G3","C#3"],["E4","C4","F3","D3"],["F#4","C4","A3","D#3"],["G4","D4","B3","E3"],["G4","E4","A3","F3"],["E4","C4","A3","F#3"],["F4","C4","A3","G2"],["F4","D4","B3","G#2"],["G4","C4","B3","A2"],["E4","C4","G3","A#2"],["F4","D4","A3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, F major)。ダイアトニック適合率(構成音ベース): 87%。特徴: diminished flavor",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.054},{key:"A minor",score:.209,raw:.904},{key:"F major",score:0,raw:.865}],diatonicToneRatio:1,tags:["diminished flavor"],qualityCounts:{major:4,dim7:3,minor:2,m7b5:2,min7:1},extensionCounts:{9:4},alterationCounts:{b5:2},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"CM9 - FM9 - Am9",blackSubstitutionsToWhite:"C#:C#dim7→CM9(root_neighbor) | D#:D#dim7→Dm9(root_neighbor) | F#:F#m7b5→FM9(root_neighbor) | G#:G#dim7→Bm7b5(tone_overlap) | A#:C/A#→CM9(root_neighbor)",blackMappingReasonCounts:"root_neighbor:4; tone_overlap:1"}},{number:3,genre:"Jazz",chords:["D7sus2/C","C#7#9","Dm9","D7#9","E7#9","FM9","F#7#9","G7(13)","G#7(13)","Am7(11)","A#9","Bm7(11)"],voicings:[["D4","A3","E3","C3"],["E4","B3","F3","C#3"],["E4","C4","F3","D3"],["F#4","C#4","G3","D#3"],["G4","D4","G#3","E3"],["G4","E4","A3","F3"],["A4","E4","A#3","F#3"],["E4","B3","F3","G2"],["F4","C4","F#3","G#2"],["D4","C4","G3","A2"],["D4","C4","G#3","A#2"],["E4","D4","A3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: A minor (候補: A minor, D minor, F major)。ダイアトニック適合率(構成音ベース): 75%。特徴: dominant/altered colors",bestKey:"C major",topKeys:[{key:"A minor",score:1,raw:.651},{key:"D minor",score:0,raw:.585},{key:"F major",score:0,raw:.585}],diatonicToneRatio:.9643,tags:["dominant/altered colors"],qualityCounts:{dom7:6,major:2,min7:2,sus2:1,minor:1},extensionCounts:{9:7,11:2,13:2},alterationCounts:{"#9":4},whiteInferredKey:"C major",whiteInferredKeyScore:.9643,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"FM9 - G7(13) - Am7(11)",blackSubstitutionsToWhite:"C#:C#7#9→G7(13)(tritone_sub) | D#:D7#9→G7(13)(secondary_dominant_target) | F#:F#7#9→Bm7(11)(secondary_dominant_target) | G#:G#7(13)→G7(13)(root_neighbor) | A#:A#9→Am7(11)(root_neighbor)",blackMappingReasonCounts:"secondary_dominant_target:2; root_neighbor:2; tritone_sub:1"}},{number:4,genre:"Jazz",chords:["Dsus2/C","C#7#9","Dm9","D#9","Em9","Fm9","F#m7b5","Gaug7","G#7(13)","Aaug7","A#7(13)","Bm7(11)"],voicings:[["D4","A3","E3","C3"],["D#4","B3","F3","C#3"],["E4","C4","F3","D3"],["F4","C#4","G3","D#3"],["F#4","D4","G3","E3"],["G4","D#4","G#3","F2"],["E4","C4","A3","F#2"],["D#4","B3","F3","G2"],["F4","C4","F#3","G#2"],["F4","C#4","G3","A2"],["G4","D4","G#3","A#2"],["E4","D4","A3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D minor (候補: D minor, C major, A minor)。ダイアトニック適合率(構成音ベース): 65%。特徴: dominant/altered colors",bestKey:"C major",topKeys:[{key:"D minor",score:1,raw:.378},{key:"C major",score:0,raw:.315},{key:"A minor",score:0,raw:.315}],diatonicToneRatio:.8214,tags:["dominant/altered colors"],qualityCounts:{dom7:3,minor:3,aug:2,sus2:1,major:1,m7b5:1,min7:1},extensionCounts:{9:5,11:1,13:2},alterationCounts:{"#9":1,b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.8214,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Fm9 - Gaug7 - Aaug7",blackSubstitutionsToWhite:"C#:C#7#9→Gaug7(tone_overlap) | D#:D#9→Fm9(tone_overlap) | F#:F#m7b5→Dsus2/C(tone_overlap) | G#:G#7(13)→Gaug7(root_neighbor) | A#:A#7(13)→Aaug7(root_neighbor)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:5,genre:"Jazz",chords:["CM9","C#M7","DM9","D#M9","EM9","FM9","F#M9","GM9","G#M9","AM9","A#M9","BM9"],voicings:[["D4","B3","E3","C3"],["D#4","C4","F3","C#3"],["E4","C#4","F#3","D3"],["F4","D4","G3","D#3"],["F#4","D#4","G#3","E3"],["G4","E4","A3","F3"],["G#4","F4","A#3","F#3"],["A4","F#4","B3","G3"],["A#4","G4","C4","G#3"],["B4","G#4","C#4","A3"],["C5","A4","D4","A#3"],["C#5","A#4","D#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, F major, G major)。ダイアトニック適合率(構成音ベース): 60%。特徴: many non-diatonic tones",bestKey:"C# minor",topKeys:[{key:"C major",score:0,raw:.194},{key:"F major",score:0,raw:.194},{key:"G major",score:0,raw:.194}],diatonicToneRatio:.75,tags:["many non-diatonic tones"],qualityCounts:{major:11,maj7:1},extensionCounts:{9:11},alterationCounts:{},whiteInferredKey:"C# minor",whiteInferredKeyScore:.75,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"BM9 - AM9",blackSubstitutionsToWhite:"C#:C#M7→CM9(root_neighbor) | D#:D#M9→DM9(root_neighbor) | F#:F#M9→FM9(root_neighbor) | G#:G#M9→GM9(root_neighbor) | A#:A#M9→AM9(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:6,genre:"Blues",chords:["C9","C#9","D9","D#9","E7#9","Fm9","F#dim7","G7(13)","G#dim7","Aaug7","A#7(13)","Bm7b5"],voicings:[["E4","D4","A#3","C3"],["D#4","B3","F3","C#3"],["E4","C4","F#3","D3"],["F4","C#4","G3","D#3"],["G4","D4","G#3","E3"],["G4","D#4","A3","F2"],["D#4","C4","A3","F#2"],["E4","B3","F3","G2"],["F4","D4","B3","G#2"],["F4","C#4","G3","A2"],["G4","D4","G#3","A#2"],["F4","D4","A3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, D# major, A# major)。ダイアトニック適合率(構成音ベース): 71%。特徴: dominant/altered colors / diminished flavor",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.458},{key:"D# major",score:.219,raw:.371},{key:"A# major",score:0,raw:.347}],diatonicToneRatio:.8214,tags:["dominant/altered colors","diminished flavor"],qualityCounts:{major:4,dom7:3,dim7:2,minor:1,aug:1,m7b5:1},extensionCounts:{9:6,13:2},alterationCounts:{"#9":1,b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.8214,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"C9 - G7(13) - Aaug7 - Fm9",blackSubstitutionsToWhite:"C#:C#9→C9(root_neighbor) | D#:D#9→Fm9(tone_overlap) | F#:F#dim7→Fm9(root_neighbor) | G#:G#dim7→Bm7b5(tone_overlap) | A#:A#7(13)→E7#9(tritone_sub)",blackMappingReasonCounts:"root_neighbor:2; tone_overlap:2; tritone_sub:1"}},{number:7,genre:"Trad Maj",chords:["C","C#dim7","Dm","D#dim7","Em","F","F#m7b5","G","G#dim7","Am","A#","Bdim"],voicings:[["C5","G4","E4","C3"],["A#4","G4","E4","C#3"],["A4","F4","D4","D3"],["C5","A4","F#4","D#3"],["B4","G4","E4","E3"],["C5","A4","F4","F3"],["C5","A4","E4","F#3"],["B4","G4","D4","G3"],["B4","F4","D4","G#3"],["C5","A4","E4","A2"],["A#4","F4","D4","A#2"],["B4","F4","D4","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, D minor)。ダイアトニック適合率(構成音ベース): 82%。特徴: diminished flavor",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.801},{key:"A minor",score:1,raw:.801},{key:"D minor",score:0,raw:.662}],diatonicToneRatio:1,tags:["diminished flavor"],qualityCounts:{major:4,dim7:3,minor:3,m7b5:1,dim:1},extensionCounts:{},alterationCounts:{b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"C - G - Am - F",blackSubstitutionsToWhite:"C#:C#dim7→C(tone_overlap) | D#:D#dim7→F(tone_overlap) | F#:F#m7b5→Am(tone_overlap) | G#:G#dim7→Bdim(tone_overlap) | A#:A#→Dm(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:8,genre:"Trad Min",chords:["Cm","C#","Ddim","Eb","Edim7","Fm","F#dim7","Gm","G#","Am7b5","A#","Bdim7"],voicings:[["C5","G4","D#4","C3"],["G#4","F4","C#4","C#3"],["G#4","F4","D4","D3"],["A#4","G4","D#4","D#3"],["A#4","G4","C#4","E3"],["G#4","F4","C4","F2"],["A4","D#4","C4","F#2"],["G4","D4","A#3","G2"],["G#4","D#4","C4","G#2"],["G4","D#4","C4","A2"],["A#4","F4","D4","A#2"],["G#4","F4","D4","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, F minor)。ダイアトニック適合率(構成音ベース): 82%。特徴: diminished flavor",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:.801},{key:"D# major",score:1,raw:.801},{key:"F minor",score:0,raw:.662}],diatonicToneRatio:.8333,tags:["diminished flavor"],qualityCounts:{major:4,minor:3,dim7:3,dim:1,m7b5:1},extensionCounts:{},alterationCounts:{b5:1},whiteInferredKey:"C minor",whiteInferredKeyScore:.8333,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Cm - Fm - Gm - Cm",blackSubstitutionsToWhite:"C#:C#→Ddim(tone_overlap) | D#:Eb→Cm(tone_overlap) | F#:F#dim7→Am7b5(tone_overlap) | G#:G#→Cm(tone_overlap) | A#:A#→Ddim(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:9,genre:"Trad Min 2",chords:["Cm","C#","Ddim","D#aug","Em","Fm","F#dim7","G","G#","Am7b5","A#","Bdim"],voicings:[["C5","G4","D#4","C3"],["G#4","F4","C#4","C#3"],["G#4","F4","D4","D3"],["B4","G4","D#4","D#3"],["B4","G4","E4","E3"],["G#4","F4","C4","F2"],["A4","D#4","C4","F#2"],["G4","D4","B3","G2"],["C4","D#4","G#4","G#2"],["G4","D#4","C4","A2"],["A#4","F4","D4","A#2"],["B4","F4","D4","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, A# major)。ダイアトニック適合率(構成音ベース): 76%。特徴: diminished flavor",bestKey:"C major",topKeys:[{key:"C minor",score:1,raw:.61},{key:"D# major",score:.136,raw:.46},{key:"A# major",score:0,raw:.437}],diatonicToneRatio:.8182,tags:["diminished flavor"],qualityCounts:{major:4,minor:3,dim:2,aug:1,dim7:1,m7b5:1},extensionCounts:{},alterationCounts:{b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.8182,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Cm - G - Am7b5 - Fm",blackSubstitutionsToWhite:"C#:C#→Ddim(tone_overlap) | D#:D#aug→Cm(tone_overlap) | F#:F#dim7→Am7b5(tone_overlap) | G#:G#→Cm(tone_overlap) | A#:A#→Ddim(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:10,genre:"Pop Min",chords:["Cmadd9","C#M7","Dm7b5","D#M7","Edim7","Fm9","F#dim7","Gm7","G#M7","Am7b5","G#/A#","Bdim7"],voicings:[["G4","D#4","D4","C3"],["F4","C4","G#3","C#3"],["G#4","F4","C4","D3"],["G4","D4","A#3","D#3"],["G4","C#4","A#3","E3"],["G4","D#4","G#3","F2"],["D#4","C4","A3","F#2"],["F4","D4","A#3","G2"],["G4","D#4","C4","G#2"],["G4","D#4","C4","A2"],["D#4","C4","G#3","A#2"],["F4","D4","G#3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, G# major)。ダイアトニック適合率(構成音ベース): 85%。特徴: diminished flavor",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:.819},{key:"D# major",score:1,raw:.819},{key:"G# major",score:0,raw:.812}],diatonicToneRatio:.8571,tags:["diminished flavor"],qualityCounts:{maj7:3,dim7:3,minor:2,m7b5:2,min7:1,major:1},extensionCounts:{9:2,add9:1},alterationCounts:{b5:2},whiteInferredKey:"C minor",whiteInferredKeyScore:.8571,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Cmadd9 - Fm9 - Gm7 - Cmadd9",blackSubstitutionsToWhite:"C#:C#M7→Dm7b5(tone_overlap) | D#:D#M7→Cmadd9(tone_overlap) | F#:F#dim7→Am7b5(tone_overlap) | G#:G#M7→Cmadd9(tone_overlap) | A#:G#/A#→Gm7(root_neighbor)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:11,genre:"Pop Min",chords:["Cmadd9","Gdim/C#","Dm7b5","D#M7","EM9","Fm9","F#dim7","Gaug7","G#M7","Am7b5","Cm7/A#","Baug#9"],voicings:[["G4","D#4","D4","C3"],["G4","D#4","A#3","C#3"],["F4","C4","G#3","D3"],["G4","D4","A#3","D#3"],["F#4","D#4","G#3","E3"],["G4","D#4","G#3","F2"],["D#4","C4","A3","F#2"],["D#4","B3","F3","G2"],["G4","D#4","C4","G#2"],["G4","D#4","C4","A2"],["G4","D#4","C4","A#2"],["G4","D#4","D4","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, G minor)。ダイアトニック適合率(構成音ベース): 79%。特徴: dominant/altered colors / diminished flavor",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:.849},{key:"D# major",score:.41,raw:.699},{key:"G minor",score:0,raw:.595}],diatonicToneRatio:.8214,tags:["dominant/altered colors","diminished flavor"],qualityCounts:{minor:2,m7b5:2,maj7:2,aug:2,dim:1,major:1,dim7:1,min7:1},extensionCounts:{9:4,add9:1},alterationCounts:{b5:2,"#9":1},whiteInferredKey:"C minor",whiteInferredKeyScore:.8214,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Cmadd9 - Fm9 - Gaug7 - Cmadd9",blackSubstitutionsToWhite:"C#:Gdim/C#→Gaug7(root_neighbor) | D#:D#M7→Cmadd9(tone_overlap) | F#:F#dim7→Am7b5(tone_overlap) | G#:G#M7→Cmadd9(tone_overlap) | A#:Cm7/A#→Cmadd9(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:12,genre:"Jazz Min",chords:["Cm7(11)","C#7#9","Dm7b5","D#M7#5","E9","F9","F#dim7","G7#9","G#M7b5","Am7b5","A#m7","Bdim7"],voicings:[["F4","D#4","A#3","C3"],["E4","B3","F3","C#3"],["G#4","F4","C4","D3"],["G4","D4","B3","D#3"],["F#4","D4","G#3","E2"],["G4","D#4","A3","F2"],["D#4","C4","A3","F#2"],["A#4","F4","B3","G2"],["G4","D4","C4","G#2"],["G4","D#4","C4","A2"],["F4","C#4","G#3","A#2"],["F4","D4","G#3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, A minor)。ダイアトニック適合率(構成音ベース): 72%。特徴: dominant/altered colors / diminished flavor",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:.489},{key:"D# major",score:1,raw:.489},{key:"A minor",score:0,raw:.336}],diatonicToneRatio:.7857,tags:["dominant/altered colors","diminished flavor"],qualityCounts:{min7:2,dom7:2,m7b5:2,maj7:2,major:2,dim7:2},extensionCounts:{9:4,11:1},alterationCounts:{b5:3,"#9":2,"#5":1},whiteInferredKey:"C minor",whiteInferredKeyScore:.7857,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Cm7(11) - F9 - G7#9 - Cm7(11)",blackSubstitutionsToWhite:"C#:C#7#9→G7#9(tritone_sub) | D#:D#M7#5→Dm7b5(root_neighbor) | F#:F#dim7→Am7b5(tone_overlap) | G#:G#M7b5→Dm7b5(tone_overlap) | A#:A#m7→Am7b5(root_neighbor)",blackMappingReasonCounts:"root_neighbor:2; tone_overlap:2; tritone_sub:1"}},{number:13,genre:"Jazz Min",chords:["Cm9","C#9","Dm9","D#9","EM9","Fm9","F#dim7","G7(13)","G#m6","Am7b5","A#m7","Bm7b5"],voicings:[["D4","A#3","D#3","C3"],["D#4","B3","F3","C#3"],["E4","C4","F3","D3"],["F4","C#4","G3","D#3"],["F#4","D#4","G#3","E2"],["G4","D#4","G#3","F2"],["D#4","C4","A3","F#2"],["E4","B3","F3","G2"],["F4","D#4","B3","G#2"],["G4","D#4","C4","A2"],["F4","C#4","G#3","A#2"],["F4","D4","A3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, F minor)。ダイアトニック適合率(構成音ベース): 69%。特徴: diminished flavor",bestKey:"C major",topKeys:[{key:"C minor",score:1,raw:.423},{key:"D# major",score:1,raw:.423},{key:"F minor",score:0,raw:.329}],diatonicToneRatio:.7143,tags:["diminished flavor"],qualityCounts:{minor:4,major:3,m7b5:2,dim7:1,dom7:1,min7:1},extensionCounts:{6:1,9:6,13:1},alterationCounts:{b5:2},whiteInferredKey:"C major",whiteInferredKeyScore:.7143,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Cm9 - G7(13) - Am7b5 - Fm9",blackSubstitutionsToWhite:"C#:C#9→Cm9(root_neighbor) | D#:D#9→Fm9(tone_overlap) | F#:F#dim7→Am7b5(tone_overlap) | G#:G#m6→Fm9(tone_overlap) | A#:A#m7→Am7b5(root_neighbor)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:14,genre:"Oct Stack",chords:["C5C4","C#5C#4","D5D4","D#5D#4","E5E4","F5F4","F#5F#4","G5G4","G#5G#4","A5A4","A#5A#4","B5B4"],voicings:[["C5","C4"],["C#5","C#4"],["D5","D4"],["D#5","D#4"],["E5","E4"],["F5","F4"],["F#5","F#4"],["G5","G4"],["G#5","G#4"],["A5","A4"],["A#5","A#4"],["B5","B4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:24,extractedTokenCount:24,usedFallback:!0},analysis:{summaryJa:"推定キー: C major (候補: C major, C# major, D major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"C major",score:0,raw:.142},{key:"C# major",score:0,raw:.142},{key:"D major",score:0,raw:.142}],diatonicToneRatio:1,tags:["many non-diatonic tones"],qualityCounts:{major:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"C5C4 - G5G4 - A5A4 - F5F4",blackSubstitutionsToWhite:"C#:C#5C#4→C5C4(root_neighbor) | D#:D#5D#4→D5D4(root_neighbor) | F#:F#5F#4→F5F4(root_neighbor) | G#:G#5G#4→G5G4(root_neighbor) | A#:A#5A#4→A5A4(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:15,genre:"4th Stack",chords:["F4C4","F#4C#4","G4D4","G#4D#4","A4E4","A#4F4","B4F#4","C5G4","C#5G#4","D5A4","D#5A#4","E5B4"],voicings:[["F4","C4"],["F#4","C#4"],["G4","D4"],["G#4","D#4"],["A4","E4"],["A#4","F4"],["B4","F#4"],["C5","G4"],["C#5","G#4"],["D5","A4"],["D#5","A#4"],["E5","B4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:24,extractedTokenCount:24,usedFallback:!0},analysis:{summaryJa:"推定キー: C major (候補: C major, C# major, D major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"C major",score:0,raw:.142},{key:"C# major",score:0,raw:.142},{key:"D major",score:0,raw:.142}],diatonicToneRatio:.9286,tags:["many non-diatonic tones"],qualityCounts:{major:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"C5G4 - G4D4 - A4E4 - F4C4",blackSubstitutionsToWhite:"C#:F#4C#4→F4C4(root_neighbor) | D#:G#4D#4→G4D4(root_neighbor) | F#:B4F#4→A#4F4(root_neighbor) | G#:C#5G#4→C5G4(root_neighbor) | A#:D#5A#4→D5A4(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:16,genre:"5th Stack",chords:["G4C4","G#4C#4","A4D4","A#4D#4","B4E4","C5F4","C#5F#4","D5G4","D#5G#4","E5A4","F5A#4","F#5B4"],voicings:[["G4","C4"],["G#4","C#4"],["A4","D4"],["A#4","D#4"],["B4","E4"],["C5","F4"],["C#5","F#4"],["D5","G4"],["D#5","G#4"],["E5","A4"],["F5","A#4"],["F#5","B4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:24,extractedTokenCount:24,usedFallback:!0},analysis:{summaryJa:"推定キー: C major (候補: C major, C# major, D major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"C major",score:0,raw:.142},{key:"C# major",score:0,raw:.142},{key:"D major",score:0,raw:.142}],diatonicToneRatio:.9286,tags:["many non-diatonic tones"],qualityCounts:{major:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"ii–V–I–vi",recommendedProgression:"D5G4 - G4C4 - C5F4 - A4D4",blackSubstitutionsToWhite:"C#:G#4C#4→G4C4(root_neighbor) | D#:A#4D#4→A4D4(root_neighbor) | F#:C#5F#4→C5F4(root_neighbor) | G#:D#5G#4→D5G4(root_neighbor) | A#:F5A#4→E5A4(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:17,genre:"Utility",chords:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],voicings:[["G3","E3","C3"],["G#3","F3","C#3"],["A3","F#3","D3"],["A#3","G3","D#3"],["B3","G#3","E3"],["C4","A3","F3"],["C#4","A#3","F#3"],["D4","B3","G3"],["D#4","C4","G#3"],["E4","C#4","A3"],["F4","D4","A#3"],["F#4","D#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:36,extractedTokenCount:36,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, C# major, D major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"E minor",topKeys:[{key:"C major",score:0,raw:.142},{key:"C# major",score:0,raw:.142},{key:"D major",score:0,raw:.142}],diatonicToneRatio:.8095,tags:["many non-diatonic tones"],qualityCounts:{major:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"E minor",whiteInferredKeyScore:.8095,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"E - D - C - D",blackSubstitutionsToWhite:"C#:C#→C(root_neighbor) | D#:D#→D(root_neighbor) | F#:F#→F(root_neighbor) | G#:G#→G(root_neighbor) | A#:A#→A(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:18,genre:"Utility",chords:["Cm","C#m","Dm","D#m","E","Fm","F#m","Gm","G#m","Am","A#m","Bm"],voicings:[["G3","D#3","C3"],["G#3","E3","C#3"],["A3","F3","D3"],["A#3","F#3","D#3"],["B3","G3","E3"],["C4","G#3","F3"],["C#4","A3","F#3"],["D4","A#3","G3"],["D#4","B3","G#3"],["E4","C4","A3"],["F4","C#4","A#3"],["F#4","D4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:36,extractedTokenCount:36,usedFallback:!1},analysis:{summaryJa:"推定キー: D# minor (候補: D# minor, C# minor, E major)。ダイアトニック適合率(構成音ベース): 61%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"D# minor",score:1,raw:.211},{key:"C# minor",score:0,raw:.211},{key:"E major",score:0,raw:.211}],diatonicToneRatio:.8095,tags:["many non-diatonic tones"],qualityCounts:{minor:11,major:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.8095,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Cm - Gm - Am - Fm",blackSubstitutionsToWhite:"C#:C#m→Cm(root_neighbor) | D#:D#m→Dm(root_neighbor) | F#:F#m→Fm(root_neighbor) | G#:G#m→Gm(root_neighbor) | A#:A#m→Am(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:19,genre:"Utility",chords:["CM7","C#M7","DM7","D#M7","EM7","FM7","F#FM7","GM7","G#M7","AM7","A#M7","BM7"],voicings:[["B3","G3","E3","C3"],["C4","G#3","F3","C#3"],["C#4","A3","F#3","D3"],["D4","A#3","G3","D#3"],["D#4","B3","G#3","E3"],["E4","C4","A3","F3"],["F4","C#4","A#3","F#3"],["F#4","D4","B3","G3"],["G4","D#4","C4","G#3"],["G#4","E4","C#4","A3"],["A4","F4","D4","A#3"],["A#4","F#4","D#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, C# major, D major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C# minor",topKeys:[{key:"C major",score:0,raw:.142},{key:"C# major",score:0,raw:.142},{key:"D major",score:0,raw:.142}],diatonicToneRatio:.7143,tags:["many non-diatonic tones"],qualityCounts:{maj7:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C# minor",whiteInferredKeyScore:.7143,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"BM7 - AM7",blackSubstitutionsToWhite:"C#:C#M7→CM7(root_neighbor) | D#:D#M7→DM7(root_neighbor) | F#:F#FM7→FM7(root_neighbor) | G#:G#M7→GM7(root_neighbor) | A#:A#M7→AM7(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:20,genre:"Utility",chords:["Cm7","C#m7","Dm7","D#m7","Em7","Fm7","F#m7","Gm7","G#m7","Am7","A#m7","Bm7"],voicings:[["A#3","G3","D#3","C3"],["B3","G#3","E3","C#3"],["C4","A3","F3","D3"],["C#4","A#3","F#3","D#3"],["D4","B3","G3","E3"],["D#4","C4","G#3","F3"],["E4","C#4","A3","F#3"],["F4","D4","A#3","G3"],["F#4","D#4","B3","G#3"],["G4","E4","C4","A3"],["G#4","F4","C#4","A#3"],["A4","F#4","D4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, C# minor, D minor)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"C minor",score:0,raw:.142},{key:"C# minor",score:0,raw:.142},{key:"D minor",score:0,raw:.142}],diatonicToneRatio:.7857,tags:["many non-diatonic tones"],qualityCounts:{min7:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.7857,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Cm7 - Gm7 - Am7 - Fm7",blackSubstitutionsToWhite:"C#:C#m7→Cm7(root_neighbor) | D#:D#m7→Dm7(root_neighbor) | F#:F#m7→Fm7(root_neighbor) | G#:G#m7→Gm7(root_neighbor) | A#:A#m7→Am7(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:21,genre:"Utility",chords:["CM9","C#M9","DM9","D#M9","EM9","FM9","F#M9","GM9","G#M9","AM9","A#M9","BM9"],voicings:[["D4","B3","E3","C3"],["D#4","C4","F3","C#3"],["E4","C#4","F#3","D3"],["F4","D4","G3","D#3"],["F#4","D#4","G#3","E3"],["G4","E4","A3","F3"],["G#4","F4","A#3","F#3"],["A4","F#4","B3","G3"],["A#4","G4","C4","G#3"],["B4","G#4","C#4","A3"],["C5","A4","D4","A#3"],["C#5","A#4","D#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, C# major, D major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C# minor",topKeys:[{key:"C major",score:0,raw:.142},{key:"C# major",score:0,raw:.142},{key:"D major",score:0,raw:.142}],diatonicToneRatio:.75,tags:["many non-diatonic tones"],qualityCounts:{major:12},extensionCounts:{9:12},alterationCounts:{},whiteInferredKey:"C# minor",whiteInferredKeyScore:.75,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"BM9 - AM9",blackSubstitutionsToWhite:"C#:C#M9→CM9(root_neighbor) | D#:D#M9→DM9(root_neighbor) | F#:F#M9→FM9(root_neighbor) | G#:G#M9→GM9(root_neighbor) | A#:A#M9→AM9(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:22,genre:"Utility",chords:["Cm9","C#m9","Dm9","D#m9","Em9","Fm9","F#m9","Gm9","G#m9","Am9","A#m9","Bm9"],voicings:[["D4","A#3","D#3","C3"],["D#4","B3","E3","C#3"],["E4","C4","F3","D3"],["F4","C#4","F#3","D#3"],["F#4","D4","G3","E3"],["G4","D#4","G#3","F3"],["G#4","E4","A3","F#3"],["A4","F4","A#3","G3"],["A#4","F#4","B3","G#3"],["B4","G4","C4","A3"],["C5","G#4","C#4","A#3"],["C#5","A4","D4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, C# minor, D minor)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"C minor",score:0,raw:.142},{key:"C# minor",score:0,raw:.142},{key:"D minor",score:0,raw:.142}],diatonicToneRatio:.75,tags:["many non-diatonic tones"],qualityCounts:{minor:12},extensionCounts:{9:12},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.75,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Cm9 - Gm9 - Am9 - Fm9",blackSubstitutionsToWhite:"C#:C#m9→Cm9(root_neighbor) | D#:D#m9→Dm9(root_neighbor) | F#:F#m9→Fm9(root_neighbor) | G#:G#m9→Gm9(root_neighbor) | A#:A#m9→Am9(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:23,genre:"Utility",chords:["CM9/#11","C#M9/#11","DM9/#11","D#M9/#11","EM9/#11","FM9/#11","F#M9/#11","GM9/#11","G#M9/#11","AM9/#11","A#M9/#11","BM9/#11"],voicings:[["F#4","D4","B3","C3"],["G4","D#4","C4","C#3"],["G#4","E4","C#4","D3"],["A4","F4","D4","D#3"],["A#4","F#4","D#4","E3"],["B4","G4","E4","F3"],["C5","G#4","F4","F#3"],["C#5","A4","F#4","G3"],["D5","A#4","G4","G#3"],["D#5","B4","G#4","A3"],["E5","C5","A4","A#3"],["F5","C#5","A#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, C# major, D major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C# minor",topKeys:[{key:"C major",score:0,raw:.142},{key:"C# major",score:0,raw:.142},{key:"D major",score:0,raw:.142}],diatonicToneRatio:.6786,tags:["many non-diatonic tones"],qualityCounts:{major:12},extensionCounts:{9:12},alterationCounts:{},whiteInferredKey:"C# minor",whiteInferredKeyScore:.6786,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"BM9/#11 - AM9/#11",blackSubstitutionsToWhite:"C#:C#M9/#11→CM9/#11(root_neighbor) | D#:D#M9/#11→DM9/#11(root_neighbor) | F#:F#M9/#11→FM9/#11(root_neighbor) | G#:G#M9/#11→GM9/#11(root_neighbor) | A#:A#M9/#11→AM9/#11(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:24,genre:"Utility",chords:["Cm9/11","C#m9/11","Dm9/11","D#m9/11","Em9/11","Fm9/11","F#m9/11","Gm9/11","G#m9/11","Am9/11","A#m9/11","Bm9/11"],voicings:[["F4","D4","A#3","C3"],["F#4","D#4","B3","C#3"],["G4","E4","C4","D3"],["G#4","F4","C#4","D#3"],["A4","F#4","D4","E3"],["A#4","G4","D#4","F3"],["B4","G#4","E4","F#3"],["C5","A4","F4","G3"],["C#5","A#4","F#4","G#3"],["D5","B4","G4","A3"],["D#5","C5","G#4","A#3"],["E5","C#5","A4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, C# minor, D minor)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"C minor",score:0,raw:.142},{key:"C# minor",score:0,raw:.142},{key:"D minor",score:0,raw:.142}],diatonicToneRatio:.8214,tags:["many non-diatonic tones"],qualityCounts:{minor:12},extensionCounts:{9:12},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.8214,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Cm9/11 - Gm9/11 - Am9/11 - Fm9/11",blackSubstitutionsToWhite:"C#:C#m9/11→Cm9/11(root_neighbor) | D#:D#m9/11→Dm9/11(root_neighbor) | F#:F#m9/11→Fm9/11(root_neighbor) | G#:G#m9/11→Gm9/11(root_neighbor) | A#:A#m9/11→Am9/11(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:25,genre:"Utility",chords:["CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7"],voicings:[["B3","G3","E3","C3"],["C4","B3","G3","E3"],["E4","C4","B3","G3"],["G4","E4","C4","B3"],["B4","G4","E4","C4"],["C5","B4","G4","E4"],["B4","E4","G3","C3"],["C5","B4","E4","G3"],["E5","B4","G4","C4"],["G5","C5","B4","E4"],["B5","E5","C5","G4"],["C6","G5","E5","B4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, E minor, G major)。ダイアトニック適合率(構成音ベース): 100%",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:3},{key:"E minor",score:0,raw:1.2},{key:"G major",score:0,raw:1.2}],diatonicToneRatio:1,tags:[],qualityCounts:{maj7:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"CM7",blackSubstitutionsToWhite:"C#:CM7→CM7(tone_overlap) | D#:CM7→CM7(tone_overlap) | F#:CM7→CM7(tone_overlap) | G#:CM7→CM7(tone_overlap) | A#:CM7→CM7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:26,genre:"Utility",chords:["Cm7","Cm7/D#","Cm7/G","Cm7/A#","Cm7","Cm7/D#","Cm7","Cm7/G","Cm7","Cm7/D#","Cm7/G","Cm7/A#"],voicings:[["A#3","G3","D#3","C3"],["C4","A#3","G3","D#3"],["D#4","C4","A#3","G3"],["G4","D#4","C4","A#3"],["A#4","G4","D#4","C4"],["C5","A#4","G4","D#4"],["A#4","D#4","G3","C3"],["C5","A#4","D#4","G3"],["D#5","A#4","G4","C4"],["G5","C5","A#4","D#4"],["A#5","D#5","C5","G4"],["C6","G5","D#5","A#4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, F minor)。ダイアトニック適合率(構成音ベース): 100%",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:3},{key:"D# major",score:0,raw:1.2},{key:"F minor",score:0,raw:1.2}],diatonicToneRatio:1,tags:[],qualityCounts:{min7:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:1,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Cm7",blackSubstitutionsToWhite:"C#:Cm7/D#→Cm7(tone_overlap) | D#:Cm7/A#→Cm7(tone_overlap) | F#:Cm7→Cm7(tone_overlap) | G#:Cm7→Cm7(tone_overlap) | A#:Cm7/G→Cm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:27,genre:"Pop/Synth",chords:["C","Em","G","Am","Bm","C","Em","G","Am","Bm","C","Em"],voicings:[["E4","G3","C3"],["G4","B3","E3"],["B4","D4","G3"],["C5","E4","A3"],["D5","F#4","B3"],["E5","G4","C4"],["G5","B4","E4"],["B5","D5","G4"],["C6","E5","A4"],["D6","F#5","B4"],["E6","G5","C5"],["D7","B5","E5"]],voicingValidation:{matchesSource:!0,sourceTokenCount:36,extractedTokenCount:36,usedFallback:!1},analysis:{summaryJa:"推定キー: E minor (候補: E minor, C major, G major)。ダイアトニック適合率(構成音ベース): 100%",bestKey:"E minor",topKeys:[{key:"E minor",score:1,raw:1.65},{key:"C major",score:.074,raw:1.511},{key:"G major",score:0,raw:1.5}],diatonicToneRatio:1,tags:[],qualityCounts:{minor:7,major:5},extensionCounts:{},alterationCounts:{},whiteInferredKey:"E minor",whiteInferredKeyScore:1,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Em - C - Bm",blackSubstitutionsToWhite:"C#:Em→C(tone_overlap) | D#:Am→C(tone_overlap) | F#:Em→C(tone_overlap) | G#:Am→C(tone_overlap) | A#:C→C(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:28,genre:"Pop",chords:["C","C7","Dm7","D#M7","C/E","F","Fm","G","C/G","Am7","Eaug/A#","G7/B"],voicings:[["C4","G3","E3","C3"],["A#3","G3","E3","C3"],["C4","A3","F3","D3"],["A#3","G3","D3","D#2"],["C4","G3","E3","E2"],["C4","A3","F3","F2"],["C4","G#3","F3","F2"],["B3","G3","D3","G2"],["C4","G3","E3","G2"],["C4","G3","E3","A2"],["C4","G#3","E3","A#2"],["B3","G3","F3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, D minor)。ダイアトニック適合率(構成音ベース): 88%",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.472},{key:"A minor",score:.037,raw:1.022},{key:"D minor",score:0,raw:1.004}],diatonicToneRatio:1,tags:[],qualityCounts:{major:5,dom7:2,min7:2,maj7:1,minor:1,aug:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"C - G7/B - Am7 - F",blackSubstitutionsToWhite:"C#:C7→F(secondary_dominant_target) | D#:D#M7→G(tone_overlap) | F#:Fm→F(tone_overlap) | G#:C/G→C(tone_overlap) | A#:Eaug/A#→C(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; secondary_dominant_target:1"}},{number:29,genre:"Pop",chords:["C","FM7","G","Em7","Dm7","CM7/E","F","D7/G","G","Am","Dm","G7"],voicings:[["E4","C4","C3","C2"],["E4","C4","F2","F1"],["D4","B3","G2","G1"],["D4","G3","B2","E2"],["C4","F3","A2","D2"],["C4","G3","B2","E2"],["C4","A3","C3","F2"],["D4","A3","C3","G2"],["D4","B3","D3","G2"],["E4","C4","E3","A2"],["F4","A3","A2","D2"],["G4","B3","F3","G2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, G major)。ダイアトニック適合率(構成音ベース): 98%",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.448},{key:"A minor",score:.061,raw:1.298},{key:"G major",score:0,raw:1.288}],diatonicToneRatio:1,tags:[],qualityCounts:{major:4,maj7:2,min7:2,dom7:2,minor:2},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"ii–V–I–vi",recommendedProgression:"Dm7 - G7 - C - Am",blackSubstitutionsToWhite:"C#:FM7→C(tone_overlap) | D#:Em7→G(tone_overlap) | F#:F→Dm7(tone_overlap) | G#:G→G(tone_overlap) | A#:Dm→Dm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:30,genre:"Pop",chords:["Cm","D#","G#","A#","Gm","G#","D#","A#sus4/D","Cm","G/B","G#","F/A"],voicings:[["D#4","G3","C3","G4"],["A#3","D#3","C4","D#3"],["G#2","D4","F3","A#2"],["G4","D4","A#3","G3"],["G#4","D#4","C4","G#3"],["G4","D#4","A#3","D#3"],["F4","D#4","A#3","D3"],["D#4","C4","G3","C3"],["D4","B3","G3"],["B2","C4","G#3"],["D#3","G#2","C4"],["A3","F3","A2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:44,extractedTokenCount:44,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, G# major)。ダイアトニック適合率(構成音ベース): 94%",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:1.361},{key:"D# major",score:1,raw:1.361},{key:"G# major",score:0,raw:1.303}],diatonicToneRatio:.9048,tags:[],qualityCounts:{major:8,minor:3,sus4:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:.9048,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Cm - A#sus4/D - G# - A#sus4/D",blackSubstitutionsToWhite:"C#:D#→Cm(tone_overlap) | D#:A#→G#(tone_overlap) | F#:D#→G#(tone_overlap) | G#:Cm→Cm(root_neighbor) | A#:G#→Gm(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:31,genre:"Pop",chords:["Cadd11","Bb/C","Dm7","D7","Cadd9/E","FM7","F7","Gm7","A/G","FM7/A","F/Bb","G7/B"],voicings:[["C5","F4","E4","C3"],["F4","D4","A#3","C3"],["F4","C4","A3","D3"],["F#4","C4","A3","D3"],["G4","D4","C4","E3"],["A4","E4","C4","F3"],["A4","D#4","C4","F3"],["A#4","F4","D4","G3"],["A4","E4","C#4","G3"],["C5","F4","E4","A3"],["A4","F4","C4","A#3"],["G4","F4","D4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F major (候補: F major, C major, D minor)。ダイアトニック適合率(構成音ベース): 91%",bestKey:"C major",topKeys:[{key:"F major",score:1,raw:1.574},{key:"C major",score:.105,raw:1.172},{key:"D minor",score:0,raw:1.124}],diatonicToneRatio:.963,tags:[],qualityCounts:{major:5,dom7:3,min7:2,maj7:2},extensionCounts:{9:1,11:1,add9:1},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.963,recommendedProgressionName:"I–IV–V–I",recommendedProgression:"Cadd11 - FM7 - G7/B - Cadd11",blackSubstitutionsToWhite:"C#:Bb/C→Dm7(tone_overlap) | D#:D7→Gm7(secondary_dominant_target) | F#:F7→Dm7(tone_overlap) | G#:A/G→Gm7(root_neighbor) | A#:F/Bb→Dm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:3; secondary_dominant_target:1; root_neighbor:1"}},{number:32,genre:"Pop",chords:["Cmb13","D#M7","G7/D","A#/D#","C7","Fm7","D#","Gm7","G#M9","G#m6","F7/A","A#add11"],voicings:[["D#4","G#3","G3","C3"],["G4","D4","A#3","D#3"],["F4","B3","G3","D3"],["F4","D4","A#3","D#3"],["E4","A#3","G3","C3"],["G#4","D#4","C4","F3"],["G4","D#4","A#3","D#3"],["F4","D4","A#3","G3"],["G4","C4","A#3","G#3"],["F4","D#3","B3","G#3"],["F4","D#4","C3","A3"],["A#4","D#4","D4","A#3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D# major (候補: D# major, C minor, A# major)。ダイアトニック適合率(構成音ベース): 89%",bestKey:"C minor",topKeys:[{key:"D# major",score:1,raw:1.25},{key:"C minor",score:.122,raw:1.1},{key:"A# major",score:0,raw:1.079}],diatonicToneRatio:.8889,tags:[],qualityCounts:{major:4,dom7:3,minor:2,min7:2,maj7:1},extensionCounts:{6:1,9:1,11:1,13:1},alterationCounts:{b13:1},whiteInferredKey:"C minor",whiteInferredKeyScore:.8889,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Cmb13 - A#add11 - G#m6 - A#add11",blackSubstitutionsToWhite:"C#:D#M7→A#add11(tone_overlap) | D#:A#/D#→A#add11(tone_overlap) | F#:D#→A#add11(tone_overlap) | G#:G#M9→Cmb13(tone_overlap) | A#:F7/A→A#add11(secondary_dominant_target)",blackMappingReasonCounts:"tone_overlap:4; secondary_dominant_target:1"}},{number:33,genre:"Cinematic",chords:["CM7","F/E","A#M7","G","Dm7","C","A#M7","G","C","A/C#","Dm","G/F"],voicings:[["B3","G3","E3","C3"],["C4","A3","F3","E3"],["D4","A3","F3","A#2"],["D4","B3","G3","G2"],["F4","C4","F3","D3"],["E4","C4","G3","C3"],["F4","D4","A3","A#2"],["G4","D4","B3","G2"],["E4","C4","G3","C3"],["E4","C#4","A3","C#3"],["F4","D4","A3","D3"],["G4","D4","B3","F3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, D minor, G major)。ダイアトニック適合率(構成音ベース): 92%",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.41},{key:"D minor",score:.271,raw:1.17},{key:"G major",score:0,raw:1.081}],diatonicToneRatio:.9167,tags:[],qualityCounts:{major:7,maj7:3,min7:1,minor:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.9167,recommendedProgressionName:"ii–V–I–vi",recommendedProgression:"Dm7 - G - C - A/C#",blackSubstitutionsToWhite:"C#:F/E→Dm7(tone_overlap) | D#:G→G(tone_overlap) | F#:A#M7→A#M7(tone_overlap) | G#:C→C(tone_overlap) | A#:Dm→A#M7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:34,genre:"Cinematic/Synthwave",chords:["Csus2","Dsus2","D#sus2","Fsus2","Gsus2","A#sus2","Csus2","Dsus2","D#sus2","Fsus2","Gsus2","A#sus2"],voicings:[["D4","G3","D3","C3"],["E4","A3","E3","D3"],["F4","A#3","F3","D#3"],["G4","C4","G3","F3"],["A4","D4","A3","G3"],["C5","F4","C4","A#3"],["D5","G4","D4","C4"],["E5","A4","E4","D4"],["F5","A#4","F4","D#4"],["G5","C5","G4","F4"],["A5","D5","A4","G4"],["C6","F5","C5","A#4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: A# major (候補: A# major, F major, D# major)。ダイアトニック適合率(構成音ベース): 94%。特徴: pop-ish sus/add9",bestKey:"D minor",topKeys:[{key:"A# major",score:1,raw:1.361},{key:"F major",score:.76,raw:1.294},{key:"D# major",score:0,raw:1.083}],diatonicToneRatio:.9524,tags:["pop-ish sus/add9"],qualityCounts:{sus2:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"D minor",whiteInferredKeyScore:.9524,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Dsus2 - Csus2 - A#sus2 - Csus2",blackSubstitutionsToWhite:"C#:Dsus2→Dsus2(tone_overlap) | D#:Fsus2→Fsus2(tone_overlap) | F#:Csus2→Csus2(tone_overlap) | G#:D#sus2→D#sus2(tone_overlap) | A#:Gsus2→Gsus2(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:35,genre:"Cinematic/House",chords:["CM7","Am7","DM7","Bm7","EM7","C#m7","F#M7","D#m7","G#M7","Fm7","A#M7","Gm7"],voicings:[["B4","E4","G3","C3"],["G4","C4","E3","A2"],["C#5","F#4","A3","D3"],["A4","D4","F#3","B2"],["D#5","G#4","B3","E3"],["B4","E4","G#3","C#3"],["F5","A#4","C#4","F#3"],["C#5","F#4","A#3","D#3"],["G5","C5","D#4","G#3"],["D#5","G#4","C4","F3"],["A5","D5","F4","A#3"],["F5","A#4","D4","G3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, C# minor, E major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"G# minor",topKeys:[{key:"C major",score:0,raw:.142},{key:"C# minor",score:0,raw:.142},{key:"E major",score:0,raw:.142}],diatonicToneRatio:.6786,tags:["many non-diatonic tones"],qualityCounts:{maj7:6,min7:6},extensionCounts:{},alterationCounts:{},whiteInferredKey:"G# minor",whiteInferredKeyScore:.6786,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"EM7 - D#m7",blackSubstitutionsToWhite:"C#:Am7→CM7(tone_overlap) | D#:Bm7→DM7(tone_overlap) | F#:F#M7→D#m7(tone_overlap) | G#:G#M7→Fm7(tone_overlap) | A#:A#M7→Gm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:36,genre:"Cinematic",chords:["Ebsus2/C","Fsus2/D","Gsus2/E","Absus2/F","Bbsus2/G","Csus2/A","Dsus2/B","Ebsus2/C","Fsus2/D","Gsus2/E","Absus2/F","Bbsus2/G"],voicings:[["Eb4","Bb3","F3","C3"],["F4","C4","G3","D3"],["G4","D4","A3","E3"],["Ab4","Eb4","Bb3","F3"],["Bb4","F4","C4","G3"],["C5","G4","D4","A3"],["D5","A4","E4","B3"],["Eb5","Bb4","F4","C4"],["F5","C5","G4","D4"],["G5","D5","A4","E4"],["Ab5","Eb5","Bb4","F4"],["Bb5","F5","C5","G4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: A# major (候補: A# major, D# major, F major)。ダイアトニック適合率(構成音ベース): 92%。特徴: pop-ish sus/add9",bestKey:"D minor",topKeys:[{key:"A# major",score:1,raw:1.225},{key:"D# major",score:.99,raw:1.222},{key:"F major",score:0,raw:.95}],diatonicToneRatio:.9286,tags:["pop-ish sus/add9"],qualityCounts:{sus2:12},extensionCounts:{},alterationCounts:{},whiteInferredKey:"D minor",whiteInferredKeyScore:.9286,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Csus2/A - Bbsus2/G",blackSubstitutionsToWhite:"C#:Fsus2/D→Bbsus2/G(tone_overlap) | D#:Absus2/F→Ebsus2/C(tone_overlap) | F#:Dsus2/B→Gsus2/E(tone_overlap) | G#:Fsus2/D→Bbsus2/G(tone_overlap) | A#:Absus2/F→Ebsus2/C(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:37,genre:"Cinematic",chords:["C6sus2","Dsus2","Emadd11","Dadd9/F#","Gadd9","Am7/11","Bm7","C6","D6","Emadd9","E7sus4","Em7b5/F"],voicings:[["A4","D4","G3","C3"],["A4","E4","A3","D3"],["A4","G4","B3","E3"],["A4","E4","D4","F#3"],["B4","A4","D4","G3"],["D5","G4","C4","A3"],["D5","A4","F#4","B3"],["E5","A4","G4","C4"],["F#5","B4","A4","D4"],["F#5","B4","G4","E4"],["A5","D5","B4","E4"],["G5","E5","D5","F4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: E minor (候補: E minor, D major, G major)。ダイアトニック適合率(構成音ベース): 98%。特徴: pop-ish sus/add9",bestKey:"C major",topKeys:[{key:"E minor",score:1,raw:1.598},{key:"D major",score:.257,raw:1.375},{key:"G major",score:0,raw:1.298}],diatonicToneRatio:.9643,tags:["pop-ish sus/add9"],qualityCounts:{major:4,sus2:2,minor:2,min7:2,sus4:1,m7b5:1},extensionCounts:{6:3,9:3,11:1,add9:3},alterationCounts:{b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.9643,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"C6 - Gadd9 - Am7/11",blackSubstitutionsToWhite:"C#:Dsus2→C6sus2(tone_overlap) | D#:Dadd9/F#→C6sus2(root_neighbor) | F#:Bm7→Gadd9(tone_overlap) | G#:D6→Gadd9(tone_overlap) | A#:E7sus4→Emadd11(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:38,genre:"New Age/Cinematic",chords:["C","Gsus4","G7sus4","A#/D#","C/E","Gsus4/F","D/F#","C/G","E/G#","Am","Fsus4","G"],voicings:[["E4","C4","G3","C3"],["G4","D4","C4","G3"],["F4","D4","C4","G3"],["F4","D4","A#3","D#3"],["E4","C4","G3","E3"],["D4","C4","G3","F3"],["F#4","D4","A3","F#3"],["E4","C4","G3","G2"],["E4","B3","G#3","G#2"],["E4","C4","A3","A2"],["F4","C4","A#3","F3"],["G4","D4","B3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, G major, F major)。ダイアトニック適合率(構成音ベース): 89%。特徴: pop-ish sus/add9",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.339},{key:"G major",score:.982,raw:1.334},{key:"F major",score:0,raw:1.072}],diatonicToneRatio:1,tags:["pop-ish sus/add9"],qualityCounts:{major:7,sus4:4,minor:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"C - G - Am",blackSubstitutionsToWhite:"C#:Gsus4→G7sus4(tone_overlap) | D#:A#/D#→Am(root_neighbor) | F#:D/F#→C(root_neighbor) | G#:E/G#→G7sus4(root_neighbor) | A#:Fsus4→G7sus4(tone_overlap)",blackMappingReasonCounts:"root_neighbor:3; tone_overlap:2"}},{number:39,genre:"Synthwave",chords:["C6sus4","Gmadd9/D","Edim11","Fsus2/D","BbM7","Gmadd9","Am/G","C7/G","A#M7","Gm/A","C7/A#","A#m6"],voicings:[["A3","G3","F3","C3"],["A#3","A3","G3","D3"],["A#3","A3","G3","E3"],["C4","G3","F3","D3"],["D4","A#3","A3","F3"],["D4","A#3","A3","G3"],["E4","C4","A3","G3"],["E4","C4","A#3","G3"],["F4","D4","A#3","A3"],["G4","D4","A#3","A3"],["G4","E4","C4","A#3"],["G4","F4","C#4","A#3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: G minor (候補: G minor, F major, A# major)。ダイアトニック適合率(構成音ベース): 89%",bestKey:"D minor",topKeys:[{key:"G minor",score:1,raw:1.339},{key:"F major",score:.727,raw:1.298},{key:"A# major",score:0,raw:1.189}],diatonicToneRatio:.9643,tags:[],qualityCounts:{minor:5,maj7:2,dom7:2,sus4:1,dim:1,sus2:1},extensionCounts:{6:2,9:2,11:1,add9:2},alterationCounts:{},whiteInferredKey:"D minor",whiteInferredKeyScore:.9643,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"C7/G - BbM7",blackSubstitutionsToWhite:"C#:Gmadd9/D→Gmadd9(tone_overlap) | D#:Fsus2/D→C6sus4(tone_overlap) | F#:Am/G→C6sus4(tone_overlap) | G#:A#M7→BbM7(tone_overlap) | A#:C7/A#→C7/G(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:40,genre:"Synthwave",chords:["Cadd9","Dadd9","D#add9","Fadd9","Gadd9","G#add9","A#add9","Cadd9","Dadd9","D#add9","Fadd9","Gadd9"],voicings:[["G3","E3","D3","C3"],["A3","F#3","E3","D3"],["A#3","G3","F3","D#3"],["C4","A3","G3","F3"],["D4","B3","A3","G3"],["D#4","C4","A#3","G#3"],["F4","D4","C4","A#3"],["G4","E4","D4","C4"],["A4","F#4","E4","D4"],["A#4","G4","F4","D#4"],["C5","A4","G4","F4"],["D5","B4","A4","G4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F major (候補: F major, A# major, C major)。ダイアトニック適合率(構成音ベース): 83%。特徴: pop-ish sus/add9",bestKey:"G minor",topKeys:[{key:"F major",score:1,raw:.983},{key:"A# major",score:.015,raw:.848},{key:"C major",score:0,raw:.846}],diatonicToneRatio:.8214,tags:["pop-ish sus/add9"],qualityCounts:{major:12},extensionCounts:{9:12,add9:12},alterationCounts:{},whiteInferredKey:"G minor",whiteInferredKeyScore:.8214,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Gadd9 - D#add9",blackSubstitutionsToWhite:"C#:Dadd9→D#add9(root_neighbor) | D#:Fadd9→D#add9(root_neighbor) | F#:A#add9→Cadd9(root_neighbor) | G#:Dadd9→D#add9(root_neighbor) | A#:Fadd9→D#add9(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:41,genre:"Synthwave",chords:["C","C#dim7","Fsus2/D","D#add9","Csus2/E","FM7","F#dim","Gsus4","G#6","Csus2/A","Csus2/A#","G7/B"],voicings:[["C4","G3","E3","C2"],["A#3","G3","E3","C#2"],["C4","G3","F3","D2"],["A#3","G3","F3","D#2"],["C4","G3","D3","E2"],["C4","A3","E3","F2"],["C4","A3","F#3","F#2"],["C4","G3","D3","G2"],["C4","G#3","F3","G#2"],["C4","G3","D3","A2"],["C4","G3","D3","A#2"],["B3","G3","F3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, F major, D# major)。ダイアトニック適合率(構成音ベース): 83%。特徴: pop-ish sus/add9",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.285},{key:"F major",score:.473,raw:1.037},{key:"D# major",score:0,raw:.815}],diatonicToneRatio:1,tags:["pop-ish sus/add9"],qualityCounts:{sus2:4,major:3,dim7:1,maj7:1,dim:1,sus4:1,dom7:1},extensionCounts:{6:1,9:1,add9:1},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"I–IV–V–I",recommendedProgression:"C - FM7 - G7/B - C",blackSubstitutionsToWhite:"C#:C#dim7→C(tone_overlap) | D#:D#add9→G7/B(tone_overlap) | F#:F#dim→FM7(tone_overlap) | G#:G#6→Fsus2/D(tone_overlap) | A#:Csus2/A#→Gsus4(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:42,genre:"Synthwave",chords:["C","A#sus2/D#","A#7/G#","G/B","C","Fm","F#dim7","C","G#add9","F/A","A#","G7/B"],voicings:[["C5","E4","G3","C3"],["C5","F4","A#3","D#3"],["A#4","F4","G#3","G#2"],["B4","D4","G3","B2"],["C5","E4","G3","C3"],["C5","F4","G#3","F2"],["C5","D#4","A3","F#2"],["C5","E4","G3","G2"],["C5","D#4","A#3","G#2"],["C5","F4","A3","A2"],["D5","F4","A#3","A#2"],["D5","F4","G3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: A# major (候補: A# major, C major, F major)。ダイアトニック適合率(構成音ベース): 78%",bestKey:"C major",topKeys:[{key:"A# major",score:1,raw:1.028},{key:"C major",score:.401,raw:.91},{key:"F major",score:0,raw:.832}],diatonicToneRatio:.8636,tags:[],qualityCounts:{major:7,dom7:2,sus2:1,minor:1,dim7:1},extensionCounts:{9:1,add9:1},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.8636,recommendedProgressionName:"I–IV–V–I",recommendedProgression:"C - F/A - G7/B - C",blackSubstitutionsToWhite:"C#:A#sus2/D#→A#7/G#(tone_overlap) | D#:G/B→G7/B(tone_overlap) | F#:F#dim7→F/A(tone_overlap) | G#:G#add9→A#7/G#(tone_overlap) | A#:A#→A#7/G#(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:43,genre:"Synthwave",chords:["Cm7","A#/C","D#/G#","A#/G#","D#/F","A#/F","G#add9","A#","G#M7","Fsus2/A","A#6","Fm7/B"],voicings:[["G4","D#4","A#3","C3"],["F4","D4","A#3","C3"],["G4","D#4","A#3","G#2"],["F4","D4","A#3","G#2"],["G4","D#4","A#3","F3"],["F3","D4","A#3","F3"],["D#4","C4","A#3","G#2"],["F4","D4","A#3","A#2"],["D#4","C4","G3","G#2"],["F4","C4","G3","A2"],["F4","D4","G3","A#2"],["F4","D#4","G#3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: A# major (候補: A# major, D# major, C minor)。ダイアトニック適合率(構成音ベース): 93%",bestKey:"C minor",topKeys:[{key:"A# major",score:1,raw:1.727},{key:"D# major",score:.398,raw:1.5},{key:"C minor",score:0,raw:1.35}],diatonicToneRatio:.9231,tags:[],qualityCounts:{major:8,min7:2,maj7:1,sus2:1},extensionCounts:{6:1,9:1,add9:1},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:.9231,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Cm7 - A#",blackSubstitutionsToWhite:"C#:A#/C→A#/F(tone_overlap) | D#:A#/G#→A#/F(tone_overlap) | F#:G#add9→Cm7(tone_overlap) | G#:G#M7→Cm7(tone_overlap) | A#:A#6→A#/F(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:44,genre:"Synthwave",chords:["Cm7","C#sus2/F","Gm7","D#","Csus2/E","Fm","D#dim7","G#sus2/G","Cm7","F7","Fm7","G5"],voicings:[["A#4","G4","D#4","C3"],["G#4","D#4","C#4","F3"],["A#4","F4","D4","G3"],["A#4","D#4","G3","D#3"],["G4","D4","C4","E3"],["G#4","F4","C4","F3"],["A4","D#4","C4","F#3"],["A#4","D#4","G#3","G3"],["A#4","D#4","C4","C3"],["A4","D#4","C4","F3"],["G#4","D#4","C4","F3"],["G4","D4","D3","G3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, F minor, D# major)。ダイアトニック適合率(構成音ベース): 88%。特徴: pop-ish sus/add9",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:1.172},{key:"F minor",score:.412,raw:1.083},{key:"D# major",score:0,raw:1.022}],diatonicToneRatio:.92,tags:["pop-ish sus/add9"],qualityCounts:{min7:4,sus2:3,major:2,minor:1,dim7:1,dom7:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:.92,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Cm7 - Fm - G5 - Cm7",blackSubstitutionsToWhite:"C#:C#sus2/F→Fm(tone_overlap) | D#:D#→Cm7(tone_overlap) | F#:D#dim7→F7(tone_overlap) | G#:Cm7→Cm7(tone_overlap) | A#:Fm7→Fm(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:45,genre:"Synthwave",chords:["Ab","Fm","Gm","Ab","Fm","Bb","Gm","Cm","Ab","Fm","Bb","Cm"],voicings:[["Ab3","Eb3","C3"],["Ab3","F3","C3"],["Bb3","G3","D3"],["C4","Ab3","Eb3"],["C4","Ab3","F3"],["D3","Bb3","F3"],["D4","Bb3","G3"],["Eb4","C4","G3"],["Eb4","C4","Ab3"],["F4","C4","Ab3"],["F4","D4","Bb3"],["G4","Eb4","C4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:36,extractedTokenCount:36,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, F minor, G# major)。ダイアトニック適合率(構成音ベース): 100%",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:1.5},{key:"F minor",score:0,raw:1.372},{key:"G# major",score:0,raw:1.372}],diatonicToneRatio:1,tags:[],qualityCounts:{minor:7,major:5},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:1,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Cm - Bb - Ab - Bb",blackSubstitutionsToWhite:"C#:Fm→Fm(tone_overlap) | D#:Ab→Ab(tone_overlap) | F#:Gm→Gm(tone_overlap) | G#:Ab→Ab(tone_overlap) | A#:Bb→Bb(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:46,genre:"Synthwave",chords:["C","D","Em","D","G","Am","Bm","C","D","Em","D","G"],voicings:[["E3","G2","C2"],["F#3","A2","D2"],["G3","B2","E2"],["A3","D3","F#2"],["B3","D3","G2"],["C4","E3","A2"],["D4","F#3","B2"],["E4","G3","C3"],["F#4","A3","D3"],["G4","B3","E3"],["A4","D4","F#3"],["B4","D4","G3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:36,extractedTokenCount:36,usedFallback:!1},analysis:{summaryJa:"推定キー: D major (候補: D major, E minor, G major)。ダイアトニック適合率(構成音ベース): 92%",bestKey:"C major",topKeys:[{key:"D major",score:1,raw:1.525},{key:"E minor",score:0,raw:1.5},{key:"G major",score:0,raw:1.5}],diatonicToneRatio:1,tags:[],qualityCounts:{major:8,minor:4},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"C - G - Am",blackSubstitutionsToWhite:"C#:D→C(root_neighbor) | D#:D→C(root_neighbor) | F#:Bm→G(tone_overlap) | G#:D→C(root_neighbor) | A#:D→C(root_neighbor)",blackMappingReasonCounts:"root_neighbor:4; tone_overlap:1"}},{number:47,genre:"Synthwave/House",chords:["Cm7","D#M7","Dm7","Fm7","D#M7","Gm7","Fm7","G#M7","Gm7","A#7","G#M7","C#/C"],voicings:[["A#3","G3","D#3","C3"],["D4","A#3","G3","D#3"],["C4","A3","F3","D3"],["D#4","C4","G#3","F3"],["D4","A#3","G3","D#3"],["F4","D4","A#3","G3"],["D#4","C4","G#3","F3"],["G4","D#4","C4","G#3"],["F4","D4","A#3","G3"],["G#4","F4","D4","A#3"],["G4","D#4","C4","G#3"],["G#4","F4","C#4","C4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D# major (候補: D# major, C minor, F minor)。ダイアトニック適合率(構成音ベース): 96%",bestKey:"C minor",topKeys:[{key:"D# major",score:1,raw:1.345},{key:"C minor",score:.383,raw:1.195},{key:"F minor",score:0,raw:1.102}],diatonicToneRatio:.9286,tags:[],qualityCounts:{min7:6,maj7:4,dom7:1,major:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:.9286,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Cm7 - A#7 - G#M7 - A#7",blackSubstitutionsToWhite:"C#:D#M7→D#M7(tone_overlap) | D#:Fm7→G#M7(tone_overlap) | F#:Fm7→G#M7(tone_overlap) | G#:Gm7→Gm7(tone_overlap) | A#:G#M7→G#M7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:48,genre:"Trance",chords:["Cm","Ab/C","Bb/D","Eb","C/E","Fm","F","Gm","Ab","F7/A","Bb","G7/B"],voicings:[["Eb4","G3","C3","C2"],["Eb4","Ab3","C3","C2"],["F4","Bb3","F3","D2"],["G4","Bb3","Bb2","Eb2"],["G4","C4","G3","E2"],["Ab4","C4","F3","F2"],["A4","C4","F3","F2"],["Bb4","D4","G3","G2"],["C4","Eb3","Ab2","Ab1"],["C4","F3","Eb3","A1"],["D4","F3","Bb2","Bb1"],["D4","G3","F3","B1"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, A# major)。ダイアトニック適合率(構成音ベース): 89%",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:1.107},{key:"D# major",score:1,raw:1.107},{key:"A# major",score:0,raw:1.103}],diatonicToneRatio:.8696,tags:[],qualityCounts:{major:7,minor:3,dom7:2},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:.8696,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Cm - Fm - G7/B - Cm",blackSubstitutionsToWhite:"C#:Ab/C→Cm(tone_overlap) | D#:Eb→Cm(tone_overlap) | F#:F→F7/A(tone_overlap) | G#:Ab→Cm(tone_overlap) | A#:Bb→Bb/D(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:49,genre:"House",chords:["Cm7","C#m7","Dm7","EbM7","Gm/E","Eb/F","D7/F#","Gm7","AbM7","Ab/Bb","BbM7","Bm7b5"],voicings:[["Eb4","Bb3","G3","C3"],["E4","B3","G#3","C#3"],["F4","C4","A3","D3"],["G4","D4","Bb3","Eb3"],["G4","D4","Bb3","E3"],["G4","Eb4","Bb3","F3"],["C4","A3","D3","F#2"],["Bb3","F3","D3","G2"],["C4","G3","Eb3","Ab2"],["Eb4","C4","Ab3","Bb2"],["D4","A3","F3","Bb2"],["D4","A3","F3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D# major (候補: D# major, G minor, C minor)。ダイアトニック適合率(構成音ベース): 80%",bestKey:"G minor",topKeys:[{key:"D# major",score:1,raw:.965},{key:"G minor",score:.787,raw:.933},{key:"C minor",score:0,raw:.815}],diatonicToneRatio:.8929,tags:[],qualityCounts:{min7:4,maj7:3,major:2,minor:1,dom7:1,m7b5:1},extensionCounts:{},alterationCounts:{b5:1},whiteInferredKey:"G minor",whiteInferredKeyScore:.8929,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Gm7 - Cm7 - Dm7 - Gm7",blackSubstitutionsToWhite:"C#:C#m7→Cm7(root_neighbor) | D#:EbM7→Cm7(tone_overlap) | F#:D7/F#→Gm/E(secondary_dominant_target) | G#:AbM7→Cm7(tone_overlap) | A#:BbM7→Dm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:1; secondary_dominant_target:1"}},{number:50,genre:"House",chords:["Cmaj7","Dmaj7","Em7","Fmaj9","Gmaj9","Eadd9/G#","Am7","Bm7","Cmaj9","Dm7/9","Em7","Fmaj7"],voicings:[["E4","B3","G3","C3"],["F#4","C#4","A3","D3"],["G4","D4","B3","E3"],["G4","E4","C4","F3"],["A4","F#4","D4","G3"],["B4","F#4","E4","G#3"],["C5","G4","E4","A3"],["D5","A4","F#4","B3"],["D5","B4","G4","C4"],["E5","C5","F4","D4"],["G5","D5","B4","E4"],["A5","E5","C5","F4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D minor (候補: D minor, A minor, E minor)。ダイアトニック適合率(構成音ベース): 75%。特徴: jazzy/neo-soul tensions",bestKey:"E minor",topKeys:[{key:"D minor",score:1,raw:.842},{key:"A minor",score:.625,raw:.829},{key:"E minor",score:0,raw:.808}],diatonicToneRatio:.8929,tags:["jazzy/neo-soul tensions"],qualityCounts:{minor:6,min7:5,major:1},extensionCounts:{9:4,add9:1},alterationCounts:{},whiteInferredKey:"E minor",whiteInferredKeyScore:.8929,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Em7 - Dm7/9 - Cmaj7 - Dm7/9",blackSubstitutionsToWhite:"C#:Dmaj7→Gmaj9(tone_overlap) | D#:Fmaj9→Cmaj7(tone_overlap) | F#:Am7→Cmaj7(tone_overlap) | G#:Cmaj9→Cmaj7(tone_overlap) | A#:Em7→Em7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:51,genre:"House",chords:["Cm7","G#/C#","Dm7","A#/D#","Em7","C/F","F#m7","D/G","G#m7","E/A","A#m7","F#/B"],voicings:[["A#3","G3","D#3","C3"],["C4","G#3","D#3","C#3"],["C4","A3","F3","D3"],["D4","A#3","F3","D#3"],["D4","B3","G3","E3"],["E4","C4","G3","F3"],["E4","C#4","A3","F#3"],["F#4","D4","A3","G3"],["F#4","D#4","B3","G#3"],["G#4","E4","B3","A3"],["G#4","F4","C#4","A#3"],["A#4","F#4","C#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D minor (候補: D minor, F# minor, C minor)。ダイアトニック適合率(構成音ベース): 60%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"D minor",score:1,raw:.21},{key:"F# minor",score:.5,raw:.21},{key:"C minor",score:0,raw:.21}],diatonicToneRatio:.75,tags:["many non-diatonic tones"],qualityCounts:{min7:6,major:6},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.75,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"C/F",blackSubstitutionsToWhite:"C#:G#/C#→F#/B(root_neighbor) | D#:A#/D#→Cm7(root_neighbor) | F#:F#m7→F#/B(root_neighbor) | G#:G#m7→F#/B(root_neighbor) | A#:A#m7→Cm7(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:52,genre:"House",chords:["Cm7","G#M7","Dm7","A#M7","Em7","CM7","F#m7","DM7","G#m7","EM7","A#m7","F#M7"],voicings:[["A#4","D#4","G3","C3"],["G4","C4","D#3","G#2"],["C5","F4","A3","D3"],["A4","D4","F3","A#2"],["D5","G4","B3","E3"],["B4","E4","G3","C3"],["E5","A4","C#4","F#3"],["C#5","F#4","A3","D3"],["F#5","B4","D#4","G#3"],["D#5","G#4","B3","E3"],["G#5","C#5","F4","A#3"],["F5","A#4","C#4","F#3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D minor, E minor)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"C minor",score:0,raw:.175},{key:"D minor",score:0,raw:.175},{key:"E minor",score:0,raw:.175}],diatonicToneRatio:.6786,tags:["many non-diatonic tones"],qualityCounts:{min7:6,maj7:6},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.6786,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"CM7",blackSubstitutionsToWhite:"C#:G#M7→Cm7(tone_overlap) | D#:A#M7→Dm7(tone_overlap) | F#:F#m7→DM7(tone_overlap) | G#:G#m7→EM7(tone_overlap) | A#:A#m7→F#M7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:53,genre:"House",chords:["Cm7/11","Cdim7","C#M7/b5","Ddim7","Cm","C#M7","CM7","Em7","FM7","Fm6","Csus2/E","Fm"],voicings:[["F4","A#3","D#3","C3"],["F#4","A3","D#3","C3"],["G4","C4","F3","C#3"],["G#4","B3","F3","D3"],["G4","C4","G3","D#3"],["F4","C4","F3","C#3"],["E4","B3","G3","C3"],["G4","D4","B3","E3"],["A4","E4","C4","F3"],["G#4","D4","C4","F3"],["G4","D4","C4","E3"],["F4","C4","G#3","F3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, C major, F minor)。ダイアトニック適合率(構成音ベース): 76%",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:.977},{key:"C major",score:.146,raw:.774},{key:"F minor",score:0,raw:.739}],diatonicToneRatio:.84,tags:[],qualityCounts:{maj7:4,minor:3,min7:2,dim7:2,sus2:1},extensionCounts:{6:1},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:.84,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Cm",blackSubstitutionsToWhite:"C#:Cdim7→Cm(tone_overlap) | D#:Ddim7→Fm6(tone_overlap) | F#:CM7→Em7(tone_overlap) | G#:FM7→C#M7(tone_overlap) | A#:Csus2/E→Em7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:54,genre:"House",chords:["CM7","Em7","Dm7","FM7","D#M7","Gm7","FM7","Am7","Gm7","A#M7","Am7","Bm7"],voicings:[["B3","G3","E3","C3"],["D4","B3","G3","E3"],["C4","A3","F3","D3"],["E4","C4","A3","F3"],["D4","A#3","G3","D#3"],["F4","D4","A#3","G3"],["E4","C4","A3","F3"],["G4","E4","C4","A3"],["F4","D4","A#3","G3"],["A4","F4","D4","A#3"],["G4","E4","C4","A3"],["A4","F#4","D4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F major (候補: F major, A minor, D minor)。ダイアトニック適合率(構成音ベース): 90%",bestKey:"D minor",topKeys:[{key:"F major",score:1,raw:1.173},{key:"A minor",score:.653,raw:1.121},{key:"D minor",score:0,raw:1.023}],diatonicToneRatio:.8571,tags:[],qualityCounts:{min7:7,maj7:5},extensionCounts:{},alterationCounts:{},whiteInferredKey:"D minor",whiteInferredKeyScore:.8571,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Dm7 - CM7 - A#M7 - CM7",blackSubstitutionsToWhite:"C#:Em7→CM7(tone_overlap) | D#:FM7→Dm7(tone_overlap) | F#:FM7→Dm7(tone_overlap) | G#:Gm7→Gm7(tone_overlap) | A#:Am7→Am7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:55,genre:"Jazz House",chords:["CM13","CM7#5","Dm7b5","G7","Cadd9/E","Fadd9","FmAdd9","G9","E7/G#","Am9/11","Gm11/Bb","CM7#5/G#"],voicings:[["B4","A4","E4","C4"],["B4","G#4","E4","C4"],["C5","Ab4","F4","D4"],["B4","G4","F4","D4"],["D5","C5","G4","E4"],["C5","A4","G4","F4"],["C5","Ab4","G4","F4"],["F5","B4","A4","G4"],["E5","D5","B4","G#4"],["B5","D5","C5","A4"],["G5","D5","C5","Bb4"],["E5","C5","B4","G#4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, G major)。ダイアトニック適合率(構成音ベース): 88%",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.487},{key:"A minor",score:.217,raw:1.037},{key:"G major",score:0,raw:.913}],diatonicToneRatio:.9286,tags:[],qualityCounts:{major:4,minor:3,maj7:2,dom7:2,m7b5:1},extensionCounts:{9:5,11:1,13:1,add9:2},alterationCounts:{"#5":2,b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"CM13 - G9 - Am9/11 - Fadd9",blackSubstitutionsToWhite:"C#:CM7#5→CM7#5/G#(tone_overlap) | D#:G7→CM13(secondary_dominant_target) | F#:FmAdd9→Dm7b5(tone_overlap) | G#:E7/G#→Am9/11(secondary_dominant_target) | A#:Gm11/Bb→Cadd9/E(tone_overlap)",blackMappingReasonCounts:"tone_overlap:3; secondary_dominant_target:2"}},{number:56,genre:"Jazz House",chords:["Cm7","Db6","Dm7","Dm7b5","EbM7","Fm7","Gb6","Gm7","Ab6","AbM7","Am7","BbM7"],voicings:[["Eb5","Bb4","C4","G3"],["F5","Bb4","Db4","Ab3"],["F5","C5","D4","A3"],["F5","C5","D4","Ab3"],["G5","D5","Eb4","Bb3"],["Ab5","Eb5","F4","C4"],["Bb5","Eb5","Gb4","Db4"],["Bb5","F5","G4","D4"],["C6","F5","Ab4","Eb4"],["C6","G5","Ab4","Eb4"],["C6","G5","A4","E4"],["D6","A5","Bb4","F4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, G# major)。ダイアトニック適合率(構成音ベース): 85%",bestKey:"C minor",topKeys:[{key:"C minor",score:1,raw:.885},{key:"D# major",score:1,raw:.885},{key:"G# major",score:0,raw:.846}],diatonicToneRatio:.9286,tags:[],qualityCounts:{min7:5,major:3,maj7:3,m7b5:1},extensionCounts:{6:3},alterationCounts:{b5:1},whiteInferredKey:"C minor",whiteInferredKeyScore:.9286,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Cm7 - BbM7 - AbM7 - BbM7",blackSubstitutionsToWhite:"C#:Db6→Cm7(root_neighbor) | D#:Dm7b5→Dm7(tone_overlap) | F#:Gb6→Fm7(root_neighbor) | G#:Ab6→Fm7(tone_overlap) | A#:Am7→AbM7(root_neighbor)",blackMappingReasonCounts:"root_neighbor:3; tone_overlap:2"}},{number:57,genre:"House/Techno",chords:["C5b9","DbM7","Dm7","Ebsus11","EM7#11","Fm9","GbM7#11","Gm7","AbM7#11","A7alt","Bb5add9/b13","C7sus4"],voicings:[["C4","G3","C#3","C3"],["C4","G#3","F3","C#3"],["C4","A3","F3","D3"],["C#4","A#3","G#3","D#3"],["D#4","A#3","G#3","E3"],["C4","G#3","G3","F3"],["F4","C3","A#3","F#3"],["F4","D3","A#3","G3"],["G4","D4","C4","G#3"],["G4","C#4","C4","A3"],["F4","C4","F#3","A#2"],["A#3","G3","F3","C3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D# major (候補: D# major, F minor, G# major)。ダイアトニック適合率(構成音ベース): 74%。特徴: jazzy/neo-soul tensions / dominant/altered colors",bestKey:"C minor",topKeys:[{key:"D# major",score:1,raw:.63},{key:"F minor",score:0,raw:.612},{key:"G# major",score:0,raw:.612}],diatonicToneRatio:.8148,tags:["jazzy/neo-soul tensions","dominant/altered colors"],qualityCounts:{maj7:4,major:2,min7:2,sus4:2,minor:1,dom7:1},extensionCounts:{9:3,11:4,add9:1},alterationCounts:{"#11":3,b9:1},whiteInferredKey:"C minor",whiteInferredKeyScore:.8148,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"C5b9 - Fm9 - Gm7 - C5b9",blackSubstitutionsToWhite:"C#:DbM7→Fm9(tone_overlap) | D#:Ebsus11→EM7#11(tone_overlap) | F#:GbM7#11→C7sus4(tone_overlap) | G#:AbM7#11→Fm9(tone_overlap) | A#:Bb5add9/b13→C7sus4(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:58,genre:"Techno",chords:["Cm7","A#m/C#","A#/D","D#","C/E","Cm/F","D/F#","G","G#M7","Csus4/A","D#/A#","G/B"],voicings:[["G4","D#4","A#3","C3"],["F4","C#4","A#3","C#3"],["F4","D4","A#3","D3"],["G4","D#4","A#3","D#3"],["G4","E4","C4","E2"],["G4","D#4","C4","F2"],["A4","F#4","D4","F#2"],["G4","D4","B3","G2"],["G4","D#4","C4","G#2"],["G4","F4","C4","A2"],["G4","D#4","A#3","A#2"],["G4","D4","B3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C minor (候補: C minor, D# major, A# major)。ダイアトニック適合率(構成音ベース): 84%",bestKey:"G minor",topKeys:[{key:"C minor",score:1,raw:1.083},{key:"D# major",score:1,raw:1.083},{key:"A# major",score:0,raw:.917}],diatonicToneRatio:.875,tags:[],qualityCounts:{major:7,minor:2,min7:1,maj7:1,sus4:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"G minor",whiteInferredKeyScore:.875,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"G",blackSubstitutionsToWhite:"C#:A#m/C#→A#/D(tone_overlap) | D#:D#→Cm7(tone_overlap) | F#:D/F#→Cm7(root_neighbor) | G#:G#M7→Cm7(tone_overlap) | A#:D#/A#→Cm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:59,genre:"EDM",chords:["CM9","C6","Dm9","Dm6","EM9","FM9","F6","GM9","G6","Am9","Am6","Bm9"],voicings:[["B3","A3","D3","C3"],["F#3","B3","E3","D#3"],["C#4","B3","E3","D3"],["G#4","C#4","F#3","F3"],["D#4","C#4","F#3","E3"],["E4","D4","G3","F3"],["B4","E4","A3","G#3"],["F#4","E4","A3","G3"],["C#4","F#4","B3","A#3"],["G#5","F#4","B3","A3"],["D#5","G#4","C#4","C4"],["A#5","G#4","C#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, G major)。ダイアトニック適合率(構成音ベース): 90%",bestKey:"D major",topKeys:[{key:"C major",score:1,raw:1.24},{key:"A minor",score:1,raw:1.24},{key:"G major",score:0,raw:1.121}],diatonicToneRatio:.7857,tags:[],qualityCounts:{major:7,minor:5},extensionCounts:{6:5,9:7},alterationCounts:{},whiteInferredKey:"D major",whiteInferredKeyScore:.7857,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Dm9 - Am9 - Bm9 - GM9",blackSubstitutionsToWhite:"C#:C6→EM9(tone_overlap) | D#:Dm6→Dm9(root_neighbor) | F#:F6→Am9(tone_overlap) | G#:G6→Bm9(tone_overlap) | A#:Am6→Am9(root_neighbor)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:60,genre:"EDM",chords:["CM13(no3)","EM9(no3)","DM13(no3)","F#M9(no3)","EM13(no3)","FM13(no3)","AM9(no3)","GM13(no3)","BM9(no3)","AM13(no3)","C#M9(no3)","BM13(no3)"],voicings:[["B3","A3","D3","C3"],["F#4","B3","E3","D#3"],["C#4","B3","E3","D3"],["G#4","C#4","F#3","F3"],["D#4","C#4","F#3","E3"],["E4","D4","G3","F3"],["B4","E4","A3","G#3"],["F#4","E4","A3","G3"],["C#5","F#4","B3","A#3"],["G#4","F#4","B3","A3"],["D#5","G#4","C#4","C4"],["A#4","G#4","C#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: A major (候補: A major, E major, D major)。ダイアトニック適合率(構成音ベース): 79%",bestKey:"D major",topKeys:[{key:"A major",score:1,raw:.879},{key:"E major",score:.878,raw:.846},{key:"D major",score:0,raw:.606}],diatonicToneRatio:.7857,tags:[],qualityCounts:{major:12},extensionCounts:{9:5,13:7},alterationCounts:{},whiteInferredKey:"D major",whiteInferredKeyScore:.7857,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"DM13(no3) - AM13(no3) - BM13(no3) - GM13(no3)",blackSubstitutionsToWhite:"C#:EM9(no3)→EM13(no3)(tone_overlap) | D#:F#M9(no3)→FM13(no3)(root_neighbor) | F#:AM9(no3)→AM13(no3)(tone_overlap) | G#:BM9(no3)→BM13(no3)(tone_overlap) | A#:C#M9(no3)→CM13(no3)(root_neighbor)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:61,genre:"EDM",chords:["Csus9/13","C6","Dsus9/13","D6","Esus9/13","Fsus9/13","F6","Gsus9/13","G6","Asus9/13","A6","Bsus9/13"],voicings:[["A4","D4","G3","C3"],["E5","A4","G3","C3"],["B4","E4","A3","D3"],["F#5","B4","A3","D3"],["C#5","F#4","B3","E3"],["D5","G4","C4","F3"],["A4","D5","C4","F3"],["E5","A4","D4","G3"],["B4","E4","D4","G3"],["F#5","B4","E4","A3"],["C#5","F#4","E4","A3"],["G#5","C#5","F#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, G major, D major)。ダイアトニック適合率(構成音ベース): 85%。特徴: pop-ish sus/add9",bestKey:"D major",topKeys:[{key:"C major",score:1,raw:1.135},{key:"G major",score:.939,raw:1.121},{key:"D major",score:0,raw:.898}],diatonicToneRatio:.8571,tags:["pop-ish sus/add9"],qualityCounts:{sus4:7,major:5},extensionCounts:{6:5,9:7},alterationCounts:{},whiteInferredKey:"D major",whiteInferredKeyScore:.8571,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Dsus9/13 - Asus9/13 - Bsus9/13 - Gsus9/13",blackSubstitutionsToWhite:"C#:C6→Csus9/13(tone_overlap) | D#:D6→Dsus9/13(tone_overlap) | F#:F6→Csus9/13(tone_overlap) | G#:G6→Dsus9/13(tone_overlap) | A#:A6→Esus9/13(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:62,genre:"EDM",chords:["CM13","C#sus9","DM13","D#sus9","EM13","FM13","F#sus9","GMaj13","Absus9","AM13","Bbsus9","BM13"],voicings:[["E4","B3","A3","C3"],["D#4","A#3","F#3","C#3"],["F#4","C#4","B3","D3"],["F4","A#3","G#3","D#3"],["G#4","D#4","C#4","E3"],["A4","E4","D4","F3"],["G#4","C#4","B3","F#3"],["B4","F#4","E4","G3"],["A#4","D#4","C#4","G#3"],["C#5","G#4","F#4","A3"],["C5","F4","D#4","A#3"],["D#5","A#4","G#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: E major (候補: E major, B major, A major)。ダイアトニック適合率(構成音ベース): 71%。特徴: pop-ish sus/add9",bestKey:"C# minor",topKeys:[{key:"E major",score:1,raw:.454},{key:"B major",score:.5,raw:.402},{key:"A major",score:0,raw:.35}],diatonicToneRatio:.7857,tags:["pop-ish sus/add9"],qualityCounts:{major:7,sus4:5},extensionCounts:{9:5,13:7},alterationCounts:{},whiteInferredKey:"C# minor",whiteInferredKeyScore:.7857,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"BM13 - AM13",blackSubstitutionsToWhite:"C#:C#sus9→CM13(root_neighbor) | D#:D#sus9→BM13(tone_overlap) | F#:F#sus9→DM13(tone_overlap) | G#:Absus9→EM13(tone_overlap) | A#:Bbsus9→AM13(root_neighbor)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:63,genre:"EDM",chords:["CM7","Dbm7","Dm7","Eb6","Em7","FM7","Gbm7","GM7","Abm7","Am7","Bb6","Bm7"],voicings:[["E4","B3","C3","G2"],["E4","B3","C#3","G#2"],["F4","C4","D3","A2"],["G4","C4","D#3","A#2"],["G4","D4","E3","B2"],["A4","E4","F3","C3"],["A4","E4","F#3","C#3"],["B4","F#4","G3","D3"],["B4","F#4","G#3","D#3"],["C5","G4","A3","E3"],["D5","G4","B3","F3"],["D5","A4","B3","F#3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: E minor (候補: E minor, G major, C major)。ダイアトニック適合率(構成音ベース): 77%",bestKey:"C major",topKeys:[{key:"E minor",score:1,raw:.61},{key:"G major",score:1,raw:.61},{key:"C major",score:0,raw:.558}],diatonicToneRatio:.9286,tags:[],qualityCounts:{min7:7,maj7:3,major:2},extensionCounts:{6:2},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"CM7 - GM7 - Am7 - FM7",blackSubstitutionsToWhite:"C#:Dbm7→CM7(root_neighbor) | D#:Eb6→Dm7(root_neighbor) | F#:Gbm7→FM7(root_neighbor) | G#:Abm7→GM7(root_neighbor) | A#:Bb6→Em7(tone_overlap)",blackMappingReasonCounts:"root_neighbor:4; tone_overlap:1"}},{number:64,genre:"EDM",chords:["C6","AM7","D6","BM7","E6","F6","DM7","G6","EM7","A6","GbM7","B6"],voicings:[["E4","A3","G3","C3"],["E4","A3","G#3","C#3"],["F#4","B3","A3","D3"],["F#4","B3","A#3","D#3"],["G#4","C#4","B3","E3"],["A4","D4","C4","F3"],["A4","D4","C#4","F#3"],["B4","E4","D4","G3"],["B4","E4","D#4","G#3"],["C#5","F#4","E4","A3"],["C#5","F#4","F4","A#3"],["D#5","G#4","F#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: A major (候補: A major, D major, E major)。ダイアトニック適合率(構成音ベース): 77%",bestKey:"D major",topKeys:[{key:"A major",score:1,raw:.827},{key:"D major",score:.404,raw:.756},{key:"E major",score:0,raw:.708}],diatonicToneRatio:.7857,tags:[],qualityCounts:{major:7,maj7:5},extensionCounts:{6:7},alterationCounts:{},whiteInferredKey:"D major",whiteInferredKeyScore:.7857,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"D6 - A6 - B6 - G6",blackSubstitutionsToWhite:"C#:AM7→E6(tone_overlap) | D#:BM7→B6(tone_overlap) | F#:DM7→D6(tone_overlap) | G#:EM7→E6(tone_overlap) | A#:GbM7→F6(root_neighbor)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:65,genre:"Gospel/R&B",chords:["G/C","C#dim7","Dm7b5","D#dim7","Em7","Fm11","F#dim7","Gm7b13","G#M9","Am7/b13","A#m7add","Bm7/b13"],voicings:[["G4","D4","B3","C3"],["G4","E4","A#3","C#3"],["F4","C4","Ab3","D3"],["F#4","C4","A3","D#3"],["G4","D4","B3","E3"],["Eb4","Bb3","Ab3","F2"],["D#4","A3","C3","F#2"],["Eb4","Bb3","F3","G2"],["G4","C4","A#3","G#2"],["F4","C3","G3","A2"],["G4","C#4","G#3","A#2"],["G4","D3","A3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D minor (候補: D minor, G minor, A minor)。ダイアトニック適合率(構成音ベース): 67%。特徴: diminished flavor",bestKey:"C major",topKeys:[{key:"D minor",score:1,raw:.35},{key:"G minor",score:1,raw:.35},{key:"A minor",score:0,raw:.281}],diatonicToneRatio:.7857,tags:["diminished flavor"],qualityCounts:{min7:5,dim7:3,major:2,m7b5:1,minor:1},extensionCounts:{9:1,11:1,13:1},alterationCounts:{b5:1,b13:1},whiteInferredKey:"C major",whiteInferredKeyScore:.7857,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Fm11 - G/C - Am7/b13",blackSubstitutionsToWhite:"C#:C#dim7→Dm7b5(root_neighbor) | D#:D#dim7→Dm7b5(root_neighbor) | F#:F#dim7→G/C(root_neighbor) | G#:G#M9→G/C(root_neighbor) | A#:A#m7add→Am7/b13(root_neighbor)",blackMappingReasonCounts:"root_neighbor:5"}},{number:66,genre:"Gospel/R&B",chords:["Cm7/b13","C#M13","Dm7/b13","D#m11","D/E","G#m/F","F#6","A#m/G","G#m11","AM9","A#7/b13","F#/B"],voicings:[["F4","Bb3","Ab3","C3"],["F4","C4","A#3","C#3"],["F4","C4","Bb3","D3"],["F#4","C#4","G#3","D#3"],["F#4","D4","A3","E3"],["G#4","D#4","B3","F3"],["A#4","D#4","C#4","F#3"],["A#4","F4","C#4","G3"],["B4","F#4","C#4","G#3"],["B4","E4","C#4","A3"],["G#4","F#4","D4","A#3"],["A#4","F#4","C#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F# major (候補: F# major, D# minor, G# minor)。ダイアトニック適合率(構成音ベース): 77%",bestKey:"D# minor",topKeys:[{key:"F# major",score:1,raw:.811},{key:"D# minor",score:.136,raw:.661},{key:"G# minor",score:0,raw:.637}],diatonicToneRatio:.6786,tags:[],qualityCounts:{major:5,minor:4,min7:2,dom7:1},extensionCounts:{6:1,9:1,11:2,13:1},alterationCounts:{},whiteInferredKey:"D# minor",whiteInferredKeyScore:.6786,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"A#m/G",blackSubstitutionsToWhite:"C#:C#M13→Cm7/b13(tone_overlap) | D#:D#m11→Dm7/b13(root_neighbor) | F#:F#6→F#/B(tone_overlap) | G#:G#m11→F#/B(tone_overlap) | A#:A#7/b13→A#m/G(root_neighbor)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:67,genre:"Gospel/R&B",chords:["D","C/D","D/E","Dm/F","Dsus2/F#","Gadd9","E/G#","A","A#dim7","Bm7","D/C","C#dim"],voicings:[["D4","A3","F#3","D2"],["C4","G3","E3","D2"],["D4","A3","F#3","E2"],["D4","A3","F3","F2"],["D4","A3","E3","F#2"],["D4","B3","A3","G2"],["E4","B3","G#3","G#2"],["E4","C#4","A3","A1"],["C#4","G3","E3","A#1"],["D4","A3","F#3","B1"],["D4","A3","F#3","C2"],["C#4","G3","E3","C#2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D major (候補: D major, B minor, G major)。ダイアトニック適合率(構成音ベース): 90%",bestKey:"D major",topKeys:[{key:"D major",score:1,raw:1.473},{key:"B minor",score:.213,raw:1.023},{key:"G major",score:0,raw:.901}],diatonicToneRatio:1,tags:[],qualityCounts:{major:7,minor:1,sus2:1,dim7:1,min7:1,dim:1},extensionCounts:{9:1,add9:1},alterationCounts:{},whiteInferredKey:"D major",whiteInferredKeyScore:1,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"D - A - Bm7 - Gadd9",blackSubstitutionsToWhite:"C#:C/D→C#dim(tone_overlap) | D#:Dm/F→D(tone_overlap) | F#:E/G#→D(root_neighbor) | G#:A#dim7→C#dim(tone_overlap) | A#:D/C→D(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:68,genre:"Lofi R&B",chords:["Cmadd9","Abadd9/C","Bb7/D","EbM9","Eb7/b9","Fm9","GbM6/9","Gm7","Eb/Ab","Fsus4/A","Bbsus","Bbsus4/b9"],voicings:[["D#4","D4","G3","C3"],["D#4","A#3","G#3","C3"],["F4","A#3","G#3","D3"],["D4","G3","F3","D#3"],["C#4","G3","E3","D#3"],["D#4","G#3","G3","F3"],["D#4","A#3","G#3","F#3"],["F4","D4","A#3","G3"],["G4","D#4","A#3","G#3"],["F4","C4","A#3","A3"],["F4","D#4","D4","A#3"],["A#4","D#4","B3","A#3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D# major (候補: D# major, A# major, C minor)。ダイアトニック適合率(構成音ベース): 93%。特徴: pop-ish sus/add9",bestKey:"C minor",topKeys:[{key:"D# major",score:1,raw:1.46},{key:"A# major",score:.368,raw:1.271},{key:"C minor",score:0,raw:1.16}],diatonicToneRatio:.8519,tags:["pop-ish sus/add9"],qualityCounts:{major:4,sus4:3,minor:2,dom7:2,min7:1},extensionCounts:{6:1,9:4,add9:2},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:.8519,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Cmadd9 - Fm9 - Gm7 - Cmadd9",blackSubstitutionsToWhite:"C#:Abadd9/C→Bbsus4/b9(tone_overlap) | D#:EbM9→Cmadd9(tone_overlap) | F#:GbM6/9→Bbsus4/b9(tone_overlap) | G#:Eb/Ab→Fm9(tone_overlap) | A#:Bbsus→Bb7/D(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:69,genre:"Lofi R&B",chords:["Ab7/C","C#m11","DM9","Bsus4/Eb","EMadd2","DM7#11","F#m11","G6","Abm7","AM7add6","F#add9/A#","BMadd4"],voicings:[["G#3","F#3","D#3","C3"],["B3","F#3","E3","C#3"],["C#4","F#3","E3","D3"],["B3","F#3","E3","D#3"],["B3","G#3","F#3","E3"],["C#4","G#3","F#3","D3"],["E3","B2","A2","F#2"],["E3","B2","A2","G2"],["F#3","D#3","B2","G#2"],["G#3","F#3","C#3","A2"],["G#3","F#3","C#3","A#2"],["F#3","E3","D#3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F# minor (候補: F# minor, A major, C# minor)。ダイアトニック適合率(構成音ベース): 85%。特徴: dominant/altered colors",bestKey:"C# minor",topKeys:[{key:"F# minor",score:1,raw:.952},{key:"A major",score:1,raw:.952},{key:"C# minor",score:0,raw:.92}],diatonicToneRatio:.8571,tags:["dominant/altered colors"],qualityCounts:{major:5,minor:2,maj7:2,dom7:1,sus4:1,min7:1},extensionCounts:{6:2,9:2,11:3,add9:1},alterationCounts:{"#11":1},whiteInferredKey:"C# minor",whiteInferredKeyScore:.8571,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"BMadd4 - AM7add6 - Ab7/C",blackSubstitutionsToWhite:"C#:C#m11→DM9(tone_overlap) | D#:Bsus4/Eb→BMadd4(tone_overlap) | F#:F#m11→EMadd2(tone_overlap) | G#:Abm7→Ab7/C(tone_overlap) | A#:F#add9/A#→DM7#11(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:70,genre:"Funk",chords:["C9","C/D","D7b9","EbM7","Em7b13","Eb/F","F#13","G7","Abm6addb13","Am7","Bm7","B7"],voicings:[["D4","Bb3","E3","C2"],["E4","C4","G3","D2"],["Eb4","C4","F#3","D2"],["D4","Bb3","G3","Eb2"],["D4","C4","G3","E2"],["Eb4","Bb3","G3","F2"],["Eb4","Bb3","E3","F#2"],["D4","B3","F3","G2"],["E4","B3","F3","Ab2"],["E4","C4","G3","A2"],["F#4","D4","A3","B2"],["F#4","D#4","A3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, E minor, G major)。ダイアトニック適合率(構成音ベース): 69%。特徴: dominant/altered colors",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.572},{key:"E minor",score:0,raw:.552},{key:"G major",score:0,raw:.552}],diatonicToneRatio:.75,tags:["dominant/altered colors"],qualityCounts:{major:4,dom7:3,min7:3,maj7:1,minor:1},extensionCounts:{6:1,9:2,13:3},alterationCounts:{b13:2,b9:1},whiteInferredKey:"C major",whiteInferredKeyScore:.75,recommendedProgressionName:"ii–V–I–vi",recommendedProgression:"D7b9 - G7 - C9 - Am7",blackSubstitutionsToWhite:"C#:C/D→Em7b13(tone_overlap) | D#:EbM7→Eb/F(tone_overlap) | F#:F#13→G7(root_neighbor) | G#:Abm6addb13→G7(root_neighbor) | A#:Bm7→B7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:71,genre:"Funk",chords:["C7alt","DbM7","D7alt","Eb7","C7/E","F7alt","F11sus2","Gm7b5","Ab9","Bb9sus","Bb7add9","C11sus2"],voicings:[["Eb4","Ab3","E3","C3"],["F4","C4","Ab3","Db3"],["F4","C4","F#3","D3"],["G4","Db4","Bb3","Eb3"],["G4","C4","Bb3","E3"],["Ab4","Eb4","A3","F3"],["G4","Eb4","Bb3","F3"],["F4","Db4","Bb3","G3"],["Bb4","Gb4","C4","Ab3"],["Ab4","Eb4","C4","Bb3"],["Ab4","D4","C4","Bb3"],["D4","Bb3","F3","C3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: A# major (候補: A# major, G# major, D# major)。ダイアトニック適合率(構成音ベース): 82%。特徴: dominant/altered colors / pop-ish sus/add9",bestKey:"C minor",topKeys:[{key:"A# major",score:1,raw:.975},{key:"G# major",score:.139,raw:.91},{key:"D# major",score:0,raw:.9}],diatonicToneRatio:.8214,tags:["dominant/altered colors","pop-ish sus/add9"],qualityCounts:{dom7:6,sus2:2,maj7:1,m7b5:1,major:1,sus4:1},extensionCounts:{9:3,11:2,add9:1},alterationCounts:{b5:1},whiteInferredKey:"C minor",whiteInferredKeyScore:.8214,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"C7/E - F7alt - Gm7b5 - C7/E",blackSubstitutionsToWhite:"C#:DbM7→C7alt(root_neighbor) | D#:Eb7→Gm7b5(tone_overlap) | F#:F11sus2→Gm7b5(tone_overlap) | G#:Ab9→Bb9sus(tone_overlap) | A#:Bb7add9→Bb9sus(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:72,genre:"Neo Soul",chords:["Cm9","AbM7","Dm7","EbDimM7","EbM7","Fm7","CM7#5","Gm7","G7#5","AbM7","Fm7b5/B","Bb13/D"],voicings:[["D4","A#3","D#3","C3"],["C4","G#3","G3","D#3"],["C4","A3","F3","D3"],["D4","A3","F#3","D#3"],["D4","A#3","G3","D#3"],["D#4","C4","G#3","F3"],["E4","C4","G#3","G3"],["F4","D4","A#3","G3"],["F4","D#4","B3","G3"],["G4","D#4","C4","G#3"],["G#4","F4","D#4","B3"],["G4","A#3","G#3","D3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D# major (候補: D# major, C minor, F minor)。ダイアトニック適合率(構成音ベース): 90%",bestKey:"C minor",topKeys:[{key:"D# major",score:1,raw:1.24},{key:"C minor",score:.566,raw:1.09},{key:"F minor",score:0,raw:.894}],diatonicToneRatio:.9643,tags:[],qualityCounts:{maj7:4,min7:3,major:2,minor:1,dom7:1,m7b5:1},extensionCounts:{9:1,13:1},alterationCounts:{"#5":2,b5:1},whiteInferredKey:"C minor",whiteInferredKeyScore:.9643,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Cm9 - Bb13/D - AbM7 - Bb13/D",blackSubstitutionsToWhite:"C#:AbM7→AbM7(tone_overlap) | D#:EbDimM7→EbM7(root_neighbor) | F#:CM7#5→AbM7(tone_overlap) | G#:G7#5→Cm9(secondary_dominant_target) | A#:Fm7b5/B→Fm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:1; secondary_dominant_target:1"}},{number:73,genre:"Neo Soul",chords:["Cm7","C#dim7","Fm7","Fm7/b5","EbM7","Cm7/Eb","Edim","AbM7","Fm7","AbM13","Bb13","Bb6"],voicings:[["Bb4","G4","Eb4","C4"],["A#4","G4","E4","C#4"],["Ab4","F4","Eb4","C4"],["Ab4","F4","Eb4","B3"],["Bb4","G4","Eb4","D4"],["C5","Bb4","G4","Eb4"],["Db5","Bb4","G4","E4"],["C5","Ab4","G4","Eb4"],["Eb5","C5","Ab4","F4"],["F5","C5","Ab4","G4"],["G5","D5","Bb4","Ab4"],["G5","F5","D5","Bb4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F minor (候補: F minor, C minor, G# major)。ダイアトニック適合率(構成音ベース): 89%",bestKey:"C minor",topKeys:[{key:"F minor",score:1,raw:1.339},{key:"C minor",score:.472,raw:1.26},{key:"G# major",score:0,raw:1.189}],diatonicToneRatio:1,tags:[],qualityCounts:{min7:5,major:3,maj7:2,dim7:1,dim:1},extensionCounts:{6:1,13:2},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:1,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Cm7 - Bb6 - AbM7 - Bb6",blackSubstitutionsToWhite:"C#:C#dim7→Cm7(root_neighbor) | D#:Fm7/b5→Fm7(tone_overlap) | F#:Edim→Fm7(root_neighbor) | G#:Fm7→Fm7(tone_overlap) | A#:Bb13→EbM7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:74,genre:"Neo Soul",chords:["Em7/D","Gm7b5/C#","FM7/E","DMb7/D#","GM7/F#","Edim7","Cadd13/E","E","Gaddb9/G#","Am9","Dm7","Emb9/F"],voicings:[["B3","G3","E3","D3"],["A#3","G3","F3","C#3"],["C4","A3","F3","E3"],["D4","A3","F#3","D#3"],["D4","B3","G3","F#3"],["C#4","A#3","G3","E3"],["C4","A3","G3","E3"],["E4","B3","G#3","E3"],["G4","D4","B3","G#3"],["G4","C4","B3","A3"],["F4","C4","F3","D3"],["E4","B3","G3","F3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: E minor (候補: E minor, G major, C major)。ダイアトニック適合率(構成音ベース): 80%。特徴: dominant/altered colors",bestKey:"C major",topKeys:[{key:"E minor",score:1,raw:1.099},{key:"G major",score:.301,raw:.949},{key:"C major",score:0,raw:.885}],diatonicToneRatio:.8519,tags:["dominant/altered colors"],qualityCounts:{major:3,min7:2,maj7:2,minor:2,m7b5:1,dom7:1,dim7:1},extensionCounts:{9:3,13:1},alterationCounts:{b9:2,b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.8519,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"FM7/E - GM7/F# - Am9",blackSubstitutionsToWhite:"C#:Gm7b5/C#→Edim7(tone_overlap) | D#:DMb7/D#→Em7/D(root_neighbor) | F#:Cadd13/E→FM7/E(tone_overlap) | G#:Gaddb9/G#→Em7/D(tone_overlap) | A#:Dm7→FM7/E(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:75,genre:"Neo Soul",chords:["CM7","C#m7","Dm7","EbM7","Em7","FM7","Gb7","GM7","AbM7","Am7","BbM7","Bm7"],voicings:[["B4","E4","C4","G3"],["B4","E4","C#4","G#3"],["C5","F4","D4","A3"],["D5","G4","Eb4","Bb3"],["D5","G4","E4","B3"],["E5","A4","F4","C4"],["E5","Bb4","Gb4","Db4"],["F#5","B4","G4","D4"],["G5","C5","Ab4","Eb4"],["G5","C5","A4","E4"],["A5","D5","Bb4","F4"],["A5","D5","B4","F#4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, E minor, G major)。ダイアトニック適合率(構成音ベース): 75%",bestKey:"C major",topKeys:[{key:"C major",score:0,raw:.558},{key:"E minor",score:0,raw:.558},{key:"G major",score:0,raw:.558}],diatonicToneRatio:.9286,tags:[],qualityCounts:{maj7:6,min7:5,dom7:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"CM7 - GM7 - Am7 - FM7",blackSubstitutionsToWhite:"C#:C#m7→CM7(root_neighbor) | D#:EbM7→Dm7(root_neighbor) | F#:Gb7→Bm7(secondary_dominant_target) | G#:AbM7→GM7(root_neighbor) | A#:BbM7→Dm7(tone_overlap)",blackMappingReasonCounts:"root_neighbor:3; secondary_dominant_target:1; tone_overlap:1"}},{number:76,genre:"Neo-Soul",chords:["CM7sus2","Gadd9/B","DM7sus2","E6sus4/C#","EM7sus2","F#6sus4/D#","F#M7sus2","G#6sus4/F","G#M7sus2","A#6sus4/G","A#M7sus2","Fadd9/A"],voicings:[["B3","G3","D3","C3"],["D4","A3","G3","B2"],["C#4","A3","E3","D3"],["E4","B3","A3","C#3"],["D#4","B3","F#3","E3"],["F#4","C#4","B3","D#3"],["F4","C#4","G#3","F#3"],["G#4","D#4","C#4","F3"],["G4","D#4","A#3","G#3"],["A#4","F4","D#4","G3"],["A4","F4","C4","A#3"],["C5","G4","F4","A3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F# major (候補: F# major, G# major, E major)。ダイアトニック適合率(構成音ベース): 60%。特徴: pop-ish sus/add9 / many non-diatonic tones",bestKey:"C major",topKeys:[{key:"F# major",score:1,raw:.344},{key:"G# major",score:1,raw:.344},{key:"E major",score:0,raw:.31}],diatonicToneRatio:.6071,tags:["pop-ish sus/add9","many non-diatonic tones"],qualityCounts:{sus2:6,sus4:4,major:2},extensionCounts:{6:4,9:2,add9:2},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.6071,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"CM7sus2 - Fadd9/A",blackSubstitutionsToWhite:"C#:Gadd9/B→CM7sus2(tone_overlap) | D#:E6sus4/C#→DM7sus2(tone_overlap) | F#:F#M7sus2→G#6sus4/F(tone_overlap) | G#:G#M7sus2→A#6sus4/G(tone_overlap) | A#:A#M7sus2→Fadd9/A(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:77,genre:"Neo-Soul",chords:["CM7","C#m7","DM7","D#m7","EM7","Fm7","F#M7","Gm7","AbM7","Am7","BbM7","Bm7"],voicings:[["E4","B3","G3","C3"],["E4","B3","G#3","C#3"],["F#4","C#4","A3","D3"],["F#4","C#4","A#3","D#3"],["G#4","D#4","B3","E3"],["G#4","D#4","C4","F3"],["A#4","F4","C#4","F#3"],["A#4","F4","D4","G3"],["C5","G4","D#4","G#3"],["C5","G4","E4","A3"],["D5","A4","F4","A#3"],["D5","A4","F#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C# minor (候補: C# minor, D# minor, E major)。ダイアトニック適合率(構成音ベース): 58%。特徴: many non-diatonic tones",bestKey:"C major",topKeys:[{key:"C# minor",score:0,raw:.142},{key:"D# minor",score:0,raw:.142},{key:"E major",score:0,raw:.142}],diatonicToneRatio:.7143,tags:["many non-diatonic tones"],qualityCounts:{maj7:6,min7:6},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.7143,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"CM7 - Gm7 - Am7 - Fm7",blackSubstitutionsToWhite:"C#:C#m7→EM7(tone_overlap) | D#:D#m7→DM7(root_neighbor) | F#:F#M7→Fm7(root_neighbor) | G#:AbM7→Fm7(tone_overlap) | A#:BbM7→Gm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:78,genre:"Neo-Soul",chords:["C11sus","A7/C#","Dm7","EbM7","C7/E","F6","D7/F#","Gdim7","E7/G#","F6/A","Bb6","Bm7b5"],voicings:[["Bb4","F4","D4","C4"],["A4","E4","G3","C#3"],["F4","C4","A3","D3"],["D4","Bb3","G3","Eb3"],["C4","Bb3","G3","E3"],["D4","C4","A3","F3"],["D4","C4","A3","F#3"],["E4","Db4","Bb3","G3"],["E4","D4","B3","G#3"],["F4","D4","C4","A3"],["G4","F4","D4","Bb3"],["A4","F4","D4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F major (候補: F major, C major, D minor)。ダイアトニック適合率(構成音ベース): 85%。特徴: dominant/altered colors",bestKey:"D minor",topKeys:[{key:"F major",score:1,raw:1.069},{key:"C major",score:.306,raw:.965},{key:"D minor",score:0,raw:.919}],diatonicToneRatio:.9286,tags:["dominant/altered colors"],qualityCounts:{dom7:4,major:3,sus4:1,min7:1,maj7:1,dim7:1,m7b5:1},extensionCounts:{6:3,11:1},alterationCounts:{b5:1},whiteInferredKey:"D minor",whiteInferredKeyScore:.9286,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Dm7 - C7/E",blackSubstitutionsToWhite:"C#:A7/C#→Dm7(secondary_dominant_target) | D#:EbM7→Dm7(root_neighbor) | F#:D7/F#→Gdim7(secondary_dominant_target) | G#:E7/G#→F6(root_neighbor) | A#:Bb6→C11sus(tone_overlap)",blackMappingReasonCounts:"secondary_dominant_target:2; root_neighbor:2; tone_overlap:1"}},{number:79,genre:"Neo-Soul",chords:["Ab/C","Db","Bb/D","Ebm","C/E","Db/F","Gb","Eb/G","Db/Ab","F7/A","Ebm/Bb","B"],voicings:[["Ab3","Eb3","C3"],["Ab3","F3","Db3"],["Bb3","F3","D3"],["Bb3","Gb3","Eb3"],["C4","G3","E3"],["Db4","Ab3","F3"],["Db4","Bb3","Gb3"],["Eb4","Bb3","G3"],["F4","Db4","Ab3"],["F4","Eb4","A3"],["Gb4","Eb4","Bb3"],["F#4","D#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:36,extractedTokenCount:36,usedFallback:!1},analysis:{summaryJa:"推定キー: C# major (候補: C# major, D# minor, F# major)。ダイアトニック適合率(構成音ベース): 84%",bestKey:"C minor",topKeys:[{key:"C# major",score:1,raw:1.217},{key:"D# minor",score:.356,raw:.946},{key:"F# major",score:0,raw:.796}],diatonicToneRatio:.7619,tags:[],qualityCounts:{major:9,minor:2,dom7:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C minor",whiteInferredKeyScore:.7619,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"C/E - Bb/D - Ab/C - Bb/D",blackSubstitutionsToWhite:"C#:Db→Db/F(tone_overlap) | D#:Ebm→Eb/G(tone_overlap) | F#:Gb→F7/A(root_neighbor) | G#:Db/Ab→Db/F(tone_overlap) | A#:Ebm/Bb→Eb/G(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:80,genre:"Neo-Soul",chords:["Cm7b5","Db7sus","Bbadd2/D","Ebm7","EM7","Fmb6","GbM9","Ebadd9/G","Ab7sus","AdimM7","Bbm9","Gb/B"],voicings:[["D#4","A#3","F#3","C3"],["F#4","D#4","B3","C#3"],["F4","C4","A#3","D3"],["F#4","C#4","A#3","D#3"],["G#4","D#4","B3","E3"],["G#4","C#4","C4","F3"],["F4","C#4","G#3","F#3"],["F4","D#4","A#3","G3"],["F#4","C#4","A#3","G#3"],["G#4","D#4","C4","A3"],["G#4","C#4","C4","A#3"],["A#4","F#4","C#4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F# major (候補: F# major, C# major, A# minor)。ダイアトニック適合率(構成音ベース): 80%",bestKey:"C# major",topKeys:[{key:"F# major",score:1,raw:.914},{key:"C# major",score:0,raw:.901},{key:"A# minor",score:0,raw:.901}],diatonicToneRatio:.7857,tags:[],qualityCounts:{major:4,sus4:2,minor:2,m7b5:1,min7:1,maj7:1,dim:1},extensionCounts:{6:1,9:3,add9:1},alterationCounts:{b5:1},whiteInferredKey:"C# major",whiteInferredKeyScore:.7857,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Gb/B - Bbadd2/D",blackSubstitutionsToWhite:"C#:Db7sus→Gb/B(tone_overlap) | D#:Ebm7→Cm7b5(tone_overlap) | F#:GbM9→Fmb6(tone_overlap) | G#:Ab7sus→Gb/B(tone_overlap) | A#:Bbm9→Fmb6(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:81,genre:"Neo-Soul",chords:["C7alt","DbM7add6","Bb7/D","Db/Eb","Edim7","Fm9","Gb6/9","Gm7b5","Eb/Ab","F7/A","Bbm9","BM7#11"],voicings:[["Eb3","Ab3","E3","C3"],["C4","Bb3","F3","Db3"],["Bb3","Ab3","F3","D3"],["Ab3","F3","Db3","Eb2"],["G3","Db3","Bb2","E2"],["G3","Eb3","Ab2","F2"],["Ab3","Eb3","Bb2","Gb2"],["C4","F3","Db3","G2"],["Bb3","G3","Eb3","Ab2"],["C4","F3","Eb3","A2"],["C4","F3","Db3","Bb2"],["Bb3","F3","Eb3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F minor (候補: F minor, C# major, G# major)。ダイアトニック適合率(構成音ベース): 84%。特徴: dominant/altered colors",bestKey:"F minor",topKeys:[{key:"F minor",score:1,raw:.885},{key:"C# major",score:.727,raw:.844},{key:"G# major",score:0,raw:.735}],diatonicToneRatio:.8214,tags:["dominant/altered colors"],qualityCounts:{dom7:3,major:3,maj7:2,minor:2,dim7:1,m7b5:1},extensionCounts:{6:2,9:2,11:1},alterationCounts:{b5:1,"#11":1},whiteInferredKey:"F minor",whiteInferredKeyScore:.8214,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"Fm9 - Bb7/D - C7alt - Fm9",blackSubstitutionsToWhite:"C#:DbM7add6→Gm7b5(tone_overlap) | D#:Db/Eb→Fm9(tone_overlap) | F#:Gb6/9→Fm9(root_neighbor) | G#:Eb/Ab→Fm9(tone_overlap) | A#:Bbm9→Gm7b5(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:82,genre:"Jazz/Bossa",chords:["Gm7","Bb/Ab","Am7","C/Bb","Bm7","D/C","C#m7","E/D","D#m7","F#/E","Fm7","Ab/Gb"],voicings:[["D4","Bb3","F3","G2"],["D4","Bb3","F3","Ab2"],["E4","C4","G3","A2"],["E4","C4","G3","Bb2"],["F#4","D4","A3","B2"],["F#4","D4","A3","C3"],["G#4","E4","B3","C#3"],["G#4","E4","B3","D3"],["A#4","F#4","C#4","D#3"],["A#4","F#4","C#4","E3"],["C5","Ab4","Eb4","F3"],["C5","Ab4","Eb4","Gb3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C# minor (候補: C# minor, E major, F minor)。ダイアトニック適合率(構成音ベース): 57%。特徴: many non-diatonic tones",bestKey:"E minor",topKeys:[{key:"C# minor",score:1,raw:.107},{key:"E major",score:1,raw:.107},{key:"F minor",score:0,raw:.107}],diatonicToneRatio:.75,tags:["many non-diatonic tones"],qualityCounts:{min7:6,major:6},extensionCounts:{},alterationCounts:{},whiteInferredKey:"E minor",whiteInferredKeyScore:.75,recommendedProgressionName:"i–iv–V–i",recommendedProgression:"E/D - Am7 - Bm7 - E/D",blackSubstitutionsToWhite:"C#:Bb/Ab→Gm7(tone_overlap) | D#:C/Bb→Am7(tone_overlap) | F#:C#m7→E/D(tone_overlap) | G#:D#m7→F#/E(tone_overlap) | A#:Fm7→Ab/Gb(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:83,genre:"Bossa Nova",chords:["CM9","C#dim","Dm7","D#dim","CM9/E","FM9","F#dim","Gm9","C13b9","F6","BbM9","G13b9"],voicings:[["D5","B4","E4","C4"],["E5","A#4","G4","C#4"],["F5","C5","A4","D4"],["B5","F#5","C5","D#4"],["G5","D5","C5","E4"],["G5","E5","A4","F4"],["A5","D#5","C5","F#4"],["A5","F5","Bb4","G4"],["A5","E5","Db5","C4"],["A5","D5","C5","F4"],["C6","A5","D5","Bb4"],["E5","B4","Ab4","G3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, F major, D minor)。ダイアトニック適合率(構成音ベース): 84%。特徴: dominant/altered colors / diminished flavor",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.065},{key:"F major",score:.761,raw:1.018},{key:"D minor",score:0,raw:.868}],diatonicToneRatio:.9286,tags:["dominant/altered colors","diminished flavor"],qualityCounts:{major:7,dim:3,min7:1,minor:1},extensionCounts:{6:1,9:7,13:2},alterationCounts:{b9:2},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"I–IV–V–I",recommendedProgression:"CM9 - F6 - Gm9 - CM9",blackSubstitutionsToWhite:"C#:C#dim→CM9(root_neighbor) | D#:D#dim→Dm7(root_neighbor) | F#:F#dim→FM9(root_neighbor) | G#:C13b9→CM9(root_neighbor) | A#:BbM9→Dm7(tone_overlap)",blackMappingReasonCounts:"root_neighbor:4; tone_overlap:1"}},{number:84,genre:"Bossa Nova",chords:["CM7","C#Dim","Dm11","D#Dim","Em11","G/F","F9#11","Gsus13","Abdim7","FM7/A","Bb13","Eb/B"],voicings:[["E5","B4","G4","C4"],["G5","E5","A#4","C#4"],["G5","F5","C5","D4"],["A5","F#5","C5","D#4"],["A5","G5","D5","E4"],["B5","G5","D5","F4"],["B5","G5","Eb5","F4"],["E5","C5","F4","G3"],["E5","B4","F4","Ab3"],["E5","C5","F4","A3"],["G5","D5","Ab4","Bb3"],["G5","Eb5","Bb4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F major (候補: F major, D# major, C major)。ダイアトニック適合率(構成音ベース): 78%。特徴: dominant/altered colors",bestKey:"C major",topKeys:[{key:"F major",score:1,raw:.776},{key:"D# major",score:.514,raw:.704},{key:"C major",score:0,raw:.628}],diatonicToneRatio:.9286,tags:["dominant/altered colors"],qualityCounts:{major:6,maj7:2,minor:2,sus4:1,dim7:1},extensionCounts:{9:1,11:3,13:2},alterationCounts:{"#11":1},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"I–IV–V–I",recommendedProgression:"CM7 - FM7/A - G/F - CM7",blackSubstitutionsToWhite:"C#:C#Dim→CM7(root_neighbor) | D#:D#Dim→Eb/B(root_neighbor) | F#:F9#11→G/F(tone_overlap) | G#:Abdim7→G/F(root_neighbor) | A#:Bb13→CM7(root_neighbor)",blackMappingReasonCounts:"root_neighbor:4; tone_overlap:1"}},{number:85,genre:"Jazz",chords:["CM7#11","DbM7#11","Dm9","EbM7#11","Em9","FM7#11","F#m11","G6/9","AbM7#11","Am9","BbM13","Bm11b5"],voicings:[["B4","F#4","E4","C3"],["C5","G4","F4","Db3"],["E5","G4","F4","D3"],["D5","A4","G4","Eb3"],["F#5","A4","G4","E3"],["E5","B4","A4","F3"],["E5","B4","A4","F#3"],["A5","E5","B4","G3"],["G5","D5","C5","Ab3"],["B5","D5","C5","A3"],["G5","D5","A4","Bb3"],["E5","A4","F4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, E minor)。ダイアトニック適合率(構成音ベース): 74%。特徴: jazzy/neo-soul tensions / dominant/altered colors",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.593},{key:"A minor",score:1,raw:.593},{key:"E minor",score:0,raw:.506}],diatonicToneRatio:.9286,tags:["jazzy/neo-soul tensions","dominant/altered colors"],qualityCounts:{maj7:5,minor:5,major:2},extensionCounts:{6:1,9:3,11:7,13:1},alterationCounts:{"#11":5,b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"CM7#11 - G6/9 - Am9 - FM7#11",blackSubstitutionsToWhite:"C#:DbM7#11→CM7#11(root_neighbor) | D#:EbM7#11→Dm9(root_neighbor) | F#:F#m11→CM7#11(tone_overlap) | G#:AbM7#11→G6/9(root_neighbor) | A#:BbM13→Am9(root_neighbor)",blackMappingReasonCounts:"root_neighbor:4; tone_overlap:1"}},{number:86,genre:"Jazz",chords:["CM9","Db9#11","Dm9","D13b9/Eb","Em11","FM13","E/F","FM7/G","Ab7#9#5","Am9/11","BbM9","Bdim7"],voicings:[["B4","E4","D4","C3"],["Bb4","F4","B3","Db3"],["C5","F4","E4","D3"],["B4","Gb4","C4","Eb3"],["A4","G4","D4","E3"],["A4","E4","D4","F3"],["B4","G#4","E4","F3"],["E5","A4","F4","G3"],["B5","E5","C5","Ab3"],["B5","D5","C5","A3"],["A5","D5","C5","Bb3"],["G5","D5","Ab4","B3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, F major)。ダイアトニック適合率(構成音ベース): 77%。特徴: dominant/altered colors",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.764},{key:"A minor",score:1,raw:.764},{key:"F major",score:0,raw:.706}],diatonicToneRatio:.9643,tags:["dominant/altered colors"],qualityCounts:{major:6,minor:3,maj7:1,dom7:1,dim7:1},extensionCounts:{9:7,11:2,13:2},alterationCounts:{"#11":1,b9:1,"#9":1,"#5":1},whiteInferredKey:"C major",whiteInferredKeyScore:.9643,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"CM9 - FM13 - Am9/11",blackSubstitutionsToWhite:"C#:Db9#11→CM9(root_neighbor) | D#:D13b9/Eb→Dm9(root_neighbor) | F#:E/F→Em11(root_neighbor) | G#:Ab7#9#5→CM9(tone_overlap) | A#:BbM9→Am9/11(tone_overlap)",blackMappingReasonCounts:"root_neighbor:3; tone_overlap:2"}},{number:87,genre:"Jazz",chords:["Cmaj7","Aadd9/C#","Dm6","B7/D#","Em7","Fmaj9","Dadd9/F#","Gm7/9","Abmaj9","Cadd9/G","Eadd9/G#","Asus7"],voicings:[["E4","B3","G3","C3"],["E4","B3","A3","C#3"],["F4","B3","A3","D3"],["F#4","B3","A3","D#3"],["G4","D4","B3","E3"],["G4","E4","A3","F3"],["A4","E4","D4","F#3"],["A4","F4","Bb3","G3"],["Bb4","G4","C4","Ab3"],["B4","E4","C4","G3"],["B4","F#4","E4","G#3"],["D5","B4","G4","A3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, E minor, A minor)。ダイアトニック適合率(構成音ベース): 73%。特徴: pop-ish sus/add9",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.64},{key:"E minor",score:.778,raw:.606},{key:"A minor",score:0,raw:.49}],diatonicToneRatio:.9643,tags:["pop-ish sus/add9"],qualityCounts:{minor:4,major:4,min7:2,dom7:1,sus4:1},extensionCounts:{6:1,9:6,add9:4},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.9643,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Cmaj7 - Gm7/9 - Asus7 - Fmaj9",blackSubstitutionsToWhite:"C#:Aadd9/C#→Asus7(root_neighbor) | D#:B7/D#→Em7(secondary_dominant_target) | F#:Dadd9/F#→Dm6(root_neighbor) | G#:Abmaj9→Gm7/9(root_neighbor) | A#:Eadd9/G#→Em7(root_neighbor)",blackMappingReasonCounts:"root_neighbor:4; secondary_dominant_target:1"}},{number:88,genre:"Jazz",chords:["Fmaj7/9","Gm7/b5","Abmaj7/9","Bbm7/b5","Bmaj7/9","C#m7/b5","DM7/9","Em7/b5","CM7/9","Dm7b5/9","GbM7/9","Abm7/b5"],voicings:[["C4","A3","G3","E3"],["Db4","Bb3","G3","F3"],["Eb4","C4","Bb3","G3"],["E4","Db4","Bb3","Ab3"],["F#4","D#4","C#4","A#3"],["G4","E4","C#4","B3"],["A4","F#4","E4","C#4"],["A#4","G4","E4","D4"],["B4","G4","E4","D4"],["C5","Ab4","F4","E4"],["Db5","Bb4","Ab4","F4"],["D5","B4","Ab4","Gb4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: G# minor (候補: G# minor, F# major, D# minor)。ダイアトニック適合率(構成音ベース): 62%。特徴: many non-diatonic tones",bestKey:"D minor",topKeys:[{key:"G# minor",score:1,raw:.396},{key:"F# major",score:.766,raw:.35},{key:"D# minor",score:0,raw:.2}],diatonicToneRatio:.6429,tags:["many non-diatonic tones"],qualityCounts:{min7:5,minor:3,maj7:3,m7b5:1},extensionCounts:{},alterationCounts:{b5:1},whiteInferredKey:"D minor",whiteInferredKeyScore:.6429,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Dm7b5/9",blackSubstitutionsToWhite:"C#:Gm7/b5→Abmaj7/9(root_neighbor) | D#:Bbm7/b5→Bmaj7/9(root_neighbor) | F#:DM7/9→Dm7b5/9(root_neighbor) | G#:CM7/9→C#m7/b5(tone_overlap) | A#:GbM7/9→Fmaj7/9(root_neighbor)",blackMappingReasonCounts:"root_neighbor:4; tone_overlap:1"}},{number:89,genre:"Jazz",chords:["Cadd9","C#dim7","Gadd13/B","D#dim#5","FM7/E","G7sus2/F","D#dim7","C6","Ddim7","Am/C","Dm7b5","G7/D"],voicings:[["G4","E4","D4","C4"],["A#4","G4","E4","C#4"],["G4","E4","D4","B3"],["B4","A4","F#4","D#4"],["C5","A4","F4","E4"],["D5","A4","G4","F4"],["C5","A4","F#4","D#4"],["A4","G4","E4","C4"],["B4","G#4","F4","D4"],["C5","A4","E4","C4"],["C5","G#4","F4","D4"],["B4","G4","F4","D4"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, G major, A minor)。ダイアトニック適合率(構成音ベース): 83%。特徴: diminished flavor",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.983},{key:"G major",score:.736,raw:.944},{key:"A minor",score:0,raw:.833}],diatonicToneRatio:1,tags:["diminished flavor"],qualityCounts:{major:3,dim7:3,dim:1,maj7:1,sus2:1,minor:1,m7b5:1,dom7:1},extensionCounts:{6:1,9:1,13:1,add9:1},alterationCounts:{"#5":1,b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"C6 - G7/D - Am/C - FM7/E",blackSubstitutionsToWhite:"C#:C#dim7→Cadd9(root_neighbor) | D#:D#dim#5→FM7/E(root_neighbor) | F#:D#dim7→Am/C(tone_overlap) | G#:Ddim7→G7/D(tone_overlap) | A#:Dm7b5→Cadd9(root_neighbor)",blackMappingReasonCounts:"root_neighbor:3; tone_overlap:2"}},{number:90,genre:"Jazz",chords:["Em7","Edim7","FM7","F#dim7","Em7","C6/E","F#dim7","FM7b5","Eb7/F","Gadd9","A#11/F","F#dim7"],voicings:[["D4","B3","G3","E3"],["C#4","A#3","G3","E3"],["E4","C4","A3","F3"],["D#4","C4","A3","F#3"],["D4","B3","G3","E3"],["C4","A3","G3","E3"],["D#4","C4","A3","F#3"],["E4","B3","A3","F3"],["E4","B3","G#3","F3"],["D4","B3","A3","G3"],["E4","D4","A#3","F3"],["D#4","C4","A3","F#3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: E minor (候補: E minor, F major, G major)。ダイアトニック適合率(構成音ベース): 73%。特徴: diminished flavor",bestKey:"C major",topKeys:[{key:"E minor",score:1,raw:.84},{key:"F major",score:.326,raw:.637},{key:"G major",score:0,raw:.54}],diatonicToneRatio:.9286,tags:["diminished flavor"],qualityCounts:{dim7:4,major:3,min7:2,maj7:2,dom7:1},extensionCounts:{6:1,9:1,11:1,add9:1},alterationCounts:{b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.9286,recommendedProgressionName:"I–IV–V–I",recommendedProgression:"C6/E - FM7 - Gadd9 - C6/E",blackSubstitutionsToWhite:"C#:Edim7→Em7(root_neighbor) | D#:F#dim7→F#dim7(tone_overlap) | F#:F#dim7→F#dim7(tone_overlap) | G#:Eb7/F→FM7b5(tone_overlap) | A#:A#11/F→C6/E(root_neighbor)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:91,genre:"Jazz",chords:["Gm7","G#M7","Am7","A#M7","G/B","D#M7","A#/D","D","CM7sus2","Em7","F6","C6sus2b5"],voicings:[["D4","A#3","F3","G2"],["D#4","C4","G3","G#2"],["E4","C4","G3","A2"],["F4","D4","A3","A#2"],["D4","G3","B2","D4"],["A#3","G3","D#3","D4"],["A#3","G3","D#3","D4"],["A3","F#3","D3","D4"],["B3","G3","C3","D4"],["B3","G3","E3","D4"],["C4","A3","F3","D4"],["A3","F#3","C3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:47,extractedTokenCount:47,usedFallback:!1},analysis:{summaryJa:"推定キー: A# major (候補: A# major, C major, F major)。ダイアトニック適合率(構成音ベース): 82%",bestKey:"E minor",topKeys:[{key:"A# major",score:1,raw:.982},{key:"C major",score:.208,raw:.863},{key:"F major",score:0,raw:.832}],diatonicToneRatio:.84,tags:[],qualityCounts:{major:4,min7:3,maj7:3,sus2:2},extensionCounts:{6:2},alterationCounts:{b5:1},whiteInferredKey:"E minor",whiteInferredKeyScore:.84,recommendedProgressionName:"i–♭VII–♭VI–♭VII(ループ)",recommendedProgression:"Em7 - D - C6sus2b5 - D",blackSubstitutionsToWhite:"C#:G#M7→Gm7(root_neighbor) | D#:A#M7→Gm7(tone_overlap) | F#:A#/D→D#M7(tone_overlap) | G#:CM7sus2→G/B(tone_overlap) | A#:F6→D(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:92,genre:"Jazz",chords:["A#M7","BM7","Cm7b5","C#dim7","Em7b5/D","Fm7/D#","Edim7","F7/D#","F#dim7","Gm7/F","G#M7/D#","F7/D#"],voicings:[["A3","F3","D3","A#2"],["A#3","F#3","D#3","B2"],["A#3","F#3","D#3","C3"],["A#3","G3","E3","C#3"],["A#3","G3","E3","D3"],["C4","G#3","F3","D#3"],["C#4","A#3","G3","E3"],["C4","A3","F3","D#3"],["D#4","C4","A3","F#3"],["D4","A#3","G3","F3"],["C4","G#3","G3","D#3"],["C4","A3","F3","D#3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F major (候補: F major, G minor, A# major)。ダイアトニック適合率(構成音ベース): 69%。特徴: diminished flavor",bestKey:"G minor",topKeys:[{key:"F major",score:1,raw:.585},{key:"G minor",score:0,raw:.577},{key:"A# major",score:0,raw:.577}],diatonicToneRatio:.8929,tags:["diminished flavor"],qualityCounts:{maj7:3,dim7:3,m7b5:2,min7:2,dom7:2},extensionCounts:{},alterationCounts:{b5:2},whiteInferredKey:"G minor",whiteInferredKeyScore:.8929,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Gm7/F - F7/D#",blackSubstitutionsToWhite:"C#:BM7→Cm7b5(tone_overlap) | D#:C#dim7→Em7b5/D(tone_overlap) | F#:Edim7→Em7b5/D(tone_overlap) | G#:F#dim7→Cm7b5(tone_overlap) | A#:G#M7/D#→Fm7/D#(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:93,genre:"Jazz",chords:["A#M7/A","G#6","Am7","A#M7","Gadd11/B","FM7/C","A7/C","D7/C","D#M7b5/D","Cadd9/D","Fadd9","Cdim7"],voicings:[["F3","D3","A#2","A2"],["F3","D#3","C3","G#2"],["G3","E3","C3","A2"],["A3","F3","D3","A#2"],["G3","D3","C3","B2"],["A3","F3","E3","C3"],["A3","G3","E3","C#3"],["A3","F#3","D3","C3"],["A3","G3","D#3","D3"],["C4","G3","E3","D3"],["C4","A3","G3","F3"],["A3","F#3","D#3","C3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F major (候補: F major, A# major, C major)。ダイアトニック適合率(構成音ベース): 83%。特徴: jazzy/neo-soul tensions",bestKey:"C major",topKeys:[{key:"F major",score:1,raw:1.017},{key:"A# major",score:.93,raw:.998},{key:"C major",score:0,raw:.748}],diatonicToneRatio:.8571,tags:["jazzy/neo-soul tensions"],qualityCounts:{maj7:4,major:4,dom7:2,min7:1,dim7:1},extensionCounts:{6:1,9:2,11:1,add9:2},alterationCounts:{b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:.8571,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"Cadd9/D - Gadd11/B - Am7 - FM7/C",blackSubstitutionsToWhite:"C#:G#6→Am7(root_neighbor) | D#:A#M7→A#M7/A(tone_overlap) | F#:A7/C→D7/C(secondary_dominant_target) | G#:D#M7b5/D→D7/C(root_neighbor) | A#:Fadd9→Am7(tone_overlap)",blackMappingReasonCounts:"root_neighbor:2; tone_overlap:2; secondary_dominant_target:1"}},{number:94,genre:"Jazz",chords:["CM7","DbM7","Dm7","Ebm7add13","Em7/b13","Fm7","F#m7/b5","G9sus","G#dim7","Am6","F/Bb","Bdim7"],voicings:[["B4","E4","G3","C3"],["C5","F4","G#3","C#3"],["C5","F4","A3","D3"],["C5","F#4","C#4","D#3"],["C5","G4","D4","E3"],["C5","G#4","D#4","F3"],["C5","A4","E4","F#3"],["A4","F4","C4","G3"],["B4","F4","D4","G#3"],["C5","F#4","E4","A3"],["A4","F4","C4","A#2"],["G#4","D4","F3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, D minor)。ダイアトニック適合率(構成音ベース): 73%",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:.581},{key:"A minor",score:1,raw:.581},{key:"D minor",score:0,raw:.381}],diatonicToneRatio:.8571,tags:[],qualityCounts:{min7:5,maj7:2,dim7:2,sus4:1,minor:1,major:1},extensionCounts:{6:1,9:1,13:1},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.8571,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"CM7 - G9sus - Am6 - Fm7",blackSubstitutionsToWhite:"C#:DbM7→Fm7(tone_overlap) | D#:Ebm7add13→Dm7(root_neighbor) | F#:F#m7/b5→Am6(tone_overlap) | G#:G#dim7→Bdim7(tone_overlap) | A#:F/Bb→Dm7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:95,genre:"Classical",chords:["FM7/E","Bdim/D","Am","G#dim7","C/G","Amb9/C","Fadd9/C","Dm","C/G","C/G","Fadd9/G","Ddim/G"],voicings:[["A4","F4","E4","B4"],["F4","D4","C5","E4"],["A3","D5","F4","B3"],["G#3","E5","E4","C4"],["G4","A5","A#4","E4"],["C4","G5","A4","F4"],["C4","F5","A4","F4"],["D3","E5","G4","C4"],["G2","C5","E4","G3"],["G2","A4","F4"],["C4","G2","G#4"],["F4","D4","G2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:45,extractedTokenCount:45,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, F major)。ダイアトニック適合率(構成音ベース): 93%。特徴: dominant/altered colors / diminished flavor",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.453},{key:"A minor",score:.031,raw:1.303},{key:"F major",score:0,raw:1.299}],diatonicToneRatio:.9615,tags:["dominant/altered colors","diminished flavor"],qualityCounts:{major:5,minor:3,dim:2,maj7:1,dim7:1},extensionCounts:{9:3,add9:2},alterationCounts:{b9:1},whiteInferredKey:"C major",whiteInferredKeyScore:.9615,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"C/G - FM7/E - Am",blackSubstitutionsToWhite:"C#:Bdim/D→Dm(tone_overlap) | D#:G#dim7→Dm(tone_overlap) | F#:Fadd9/C→Amb9/C(tone_overlap) | G#:C/G→Dm(tone_overlap) | A#:Fadd9/G→Amb9/C(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:96,genre:"Classical",chords:["Am","Bm7/A","Fdim/B","C/E","A7/G","Dm7","D#aug","E","F","D/F#","C/G","E/G#"],voicings:[["E4","C4","A3","A2"],["D4","B3","A3","A2"],["F4","B3","G#3","B2"],["E4","C4","G3","E3"],["E4","C#4","A3","G3"],["F4","C4","A3","D3"],["D#4","B3","G3","D#3"],["E4","B3","G#3","E3"],["F4","C4","A3","F3"],["D4","A3","F#3","F#2"],["E4","C4","G3","G2"],["E4","B3","G#3","G#2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, E minor)。ダイアトニック適合率(構成音ベース): 82%",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.015},{key:"A minor",score:.656,raw:.865},{key:"E minor",score:0,raw:.579}],diatonicToneRatio:.7826,tags:[],qualityCounts:{major:6,min7:2,minor:1,dim:1,dom7:1,aug:1},extensionCounts:{},alterationCounts:{},whiteInferredKey:"C major",whiteInferredKeyScore:.7826,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"Fdim/B - Am",blackSubstitutionsToWhite:"C#:Bm7/A→D/F#(tone_overlap) | D#:C/E→Am(tone_overlap) | F#:D#aug→Dm7(root_neighbor) | G#:F→Dm7(tone_overlap) | A#:C/G→Am(tone_overlap)",blackMappingReasonCounts:"tone_overlap:4; root_neighbor:1"}},{number:97,genre:"Classical",chords:["F#/C#","F#/A#","G#m7","A6","F#/C#","Bsus2","G#/C","C#7","A#7/D","F#6sus4/C#","C#m7","C#7"],voicings:[["F#4","A#3","F#3","C#3"],["F#4","C#4","F#3","A#2"],["F#4","B3","F#3","G#2"],["F#4","C#4","E3","A2"],["F#4","C#4","F#3","A#2"],["F#4","C#4","F#3","B2"],["G#4","D#4","G#3","C3"],["F4","B3","G#3","C#3"],["F4","A#3","G#3","D3"],["D#4","B3","F#3","C#3"],["E4","B3","G#3","C#3"],["F4","B3","F3","C#3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: F# major (候補: F# major, G# minor, B major)。ダイアトニック適合率(構成音ベース): 88%",bestKey:"D# minor",topKeys:[{key:"F# major",score:1,raw:1.489},{key:"G# minor",score:0,raw:.987},{key:"B major",score:0,raw:.987}],diatonicToneRatio:1,tags:[],qualityCounts:{major:5,dom7:3,min7:2,sus2:1,sus4:1},extensionCounts:{6:2},alterationCounts:{},whiteInferredKey:"D# minor",whiteInferredKeyScore:1,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"C#7 - Bsus2",blackSubstitutionsToWhite:"C#:F#/A#→F#/C#(tone_overlap) | D#:A6→F#/C#(tone_overlap) | F#:G#/C→G#m7(root_neighbor) | G#:A#7/D→Bsus2(root_neighbor) | A#:C#m7→C#7(tone_overlap)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}},{number:98,genre:"Classical",chords:["Dm","D#M7/D","E7/D","Dm7","D7","Gm/D","G#/D","A/D","A#add9/D","DM7(13)","Csus2/D","G#dim/D"],voicings:[["D4","A3","F3","D2"],["D#4","A#3","G3","D2"],["B3","G#3","E3","D2"],["C4","A3","F3","D2"],["C4","A3","F#3","D2"],["D4","A#3","G3","D2"],["D#4","C4","G#3","D2"],["E4","C#4","A3","D2"],["F4","C4","A#3","D2"],["F#4","C#4","B3","D2"],["G4","D4","C4","D2"],["G#4","D4","B3","D2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D minor (候補: D minor, G minor, A# major)。ダイアトニック適合率(構成音ベース): 72%",bestKey:"F# minor",topKeys:[{key:"D minor",score:1,raw:.719},{key:"G minor",score:0,raw:.569},{key:"A# major",score:0,raw:.569}],diatonicToneRatio:.84,tags:[],qualityCounts:{major:3,minor:2,maj7:2,dom7:2,min7:1,sus2:1,dim:1},extensionCounts:{9:1,13:1,add9:1},alterationCounts:{},whiteInferredKey:"F# minor",whiteInferredKeyScore:.84,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"E7/D - D7",blackSubstitutionsToWhite:"C#:D#M7/D→Gm/D(tone_overlap) | D#:Dm7→Dm(tone_overlap) | F#:G#/D→G#dim/D(tone_overlap) | G#:A#add9/D→Dm(tone_overlap) | A#:Csus2/D→Gm/D(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:99,genre:"Modern",chords:["CM13","AM9/C#","Dm13","EbM13","CM9/E","FM13","FmM13","CM9(no3)/G","AbMb5/#9","Am11","BbM9","G6/9"],voicings:[["B3","A3","E3","C3"],["B3","A3","E3","C#3"],["C4","B3","F3","D3"],["D4","C4","G3","D#3"],["D4","C4","G3","E3"],["E4","D4","A3","F3"],["E4","D4","G#3","F3"],["B4","D4","C4","G3"],["B4","D4","C4","G#3"],["D4","G3","C3","A2"],["D4","A3","C3","A#2"],["E4","A3","G3","B2"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: C major (候補: C major, A minor, D minor)。ダイアトニック適合率(構成音ベース): 87%",bestKey:"C major",topKeys:[{key:"C major",score:1,raw:1.22},{key:"A minor",score:.059,raw:.92},{key:"D minor",score:0,raw:.901}],diatonicToneRatio:1,tags:[],qualityCounts:{major:9,minor:3},extensionCounts:{6:1,9:4,11:1,13:5},alterationCounts:{b5:1},whiteInferredKey:"C major",whiteInferredKeyScore:1,recommendedProgressionName:"I–V–vi–IV",recommendedProgression:"CM13 - G6/9 - Am11 - FM13",blackSubstitutionsToWhite:"C#:AM9/C#→CM13(tone_overlap) | D#:EbM13→CM9/E(tone_overlap) | F#:FmM13→FM13(tone_overlap) | G#:AbMb5/#9→Dm13(tone_overlap) | A#:BbM9→Am11(tone_overlap)",blackMappingReasonCounts:"tone_overlap:5"}},{number:100,genre:"Modern",chords:["CM9","Cm9","Dm9","Dm6/9","CM9/E","Dm9/F","D9/F#","Gsus13","G13b9","AbMaj13","AbDimM7","BbM13"],voicings:[["B4","E4","D4","C3"],["Bb4","Eb4","D4","C3"],["C5","F4","E4","D3"],["B4","F4","E4","D3"],["B4","D4","C4","E3"],["C5","E4","D4","F3"],["C5","E4","D4","F#3"],["E5","A4","F4","G3"],["E5","Ab4","F4","G3"],["E5","Bb4","G4","Ab3"],["G5","B4","F4","Ab3"],["A5","D5","G4","Bb3"]],voicingValidation:{matchesSource:!0,sourceTokenCount:48,extractedTokenCount:48,usedFallback:!1},analysis:{summaryJa:"推定キー: D minor (候補: D minor, C major, G major)。ダイアトニック適合率(構成音ベース): 82%。特徴: dominant/altered colors",bestKey:"C major",topKeys:[{key:"D minor",score:1,raw:1.149},{key:"C major",score:.584,raw:1.001},{key:"G major",score:0,raw:.792}],diatonicToneRatio:.8929,tags:["dominant/altered colors"],qualityCounts:{major:7,minor:4,sus4:1},extensionCounts:{6:1,9:7,13:4},alterationCounts:{b9:1},whiteInferredKey:"C major",whiteInferredKeyScore:.8929,recommendedProgressionName:"おすすめ(近い形)",recommendedProgression:"CM9 - Gsus13",blackSubstitutionsToWhite:"C#:Cm9→CM9(root_neighbor) | D#:Dm6/9→CM9(tone_overlap) | F#:D9/F#→CM9(tone_overlap) | G#:G13b9→Gsus13(tone_overlap) | A#:AbDimM7→AbMaj13(root_neighbor)",blackMappingReasonCounts:"tone_overlap:3; root_neighbor:2"}}],mo={sets:co};var uo=Object.defineProperty,bo=Object.getOwnPropertyDescriptor,I=(o,e,r,a)=>{for(var t=a>1?void 0:a?bo(e,r):e,n=o.length-1,s;n>=0;n--)(s=o[n])&&(t=(a?s(e,r,t):s(t))||t);return a&&t&&uo(e,r,t),t};const X=mo;let A=class extends w{constructor(){super(...arguments),this.searchQuery="",this.selectedGenre="All",this.selectedKey="All",this.currentFilteredIndex=0,this.showSearchModal=!1}get uniqueGenres(){return["All",...Array.from(new Set(X.sets.map(o=>o.genre))).sort()]}get uniqueKeys(){return["All",...Array.from(new Set(X.sets.map(o=>o.analysis.bestKey))).sort()]}get filteredSets(){return X.sets.filter(o=>{if(this.selectedGenre!=="All"&&o.genre!==this.selectedGenre||this.selectedKey!=="All"&&o.analysis.bestKey!==this.selectedKey)return!1;if(this.searchQuery){const e=this.searchQuery.toLowerCase();if(!o.genre.toLowerCase().includes(e)&&!o.analysis.bestKey.toLowerCase().includes(e)&&!o.number.toString().includes(e)&&!o.chords.some(r=>r.toLowerCase().includes(e)))return!1}return!0})}get currentSet(){const o=this.filteredSets;if(o.length!==0)return this.currentFilteredIndex>=o.length?(setTimeout(()=>this.currentFilteredIndex=0,0),o[0]):o[this.currentFilteredIndex]}selectFilterValue(o,e){o==="genre"?this.selectedGenre=e:this.selectedKey=e,this.currentFilteredIndex=0}jumpToSet(o){const e=this.filteredSets.findIndex(r=>r.number===o);e!==-1&&(this.currentFilteredIndex=e,this.showSearchModal=!1)}cycleSet(o){const e=this.filteredSets.length;if(e<=1)return;let r=this.currentFilteredIndex+o;r<0&&(r=e-1),r>=e&&(r=0),this.currentFilteredIndex=r}render(){return u`
      <div class="juno-panel-container">
        
        <div class="top-row">
          
          <!-- SEARCH & FILTERS -->
          <div class="juno-block">
            <div class="juno-header blue">DCO / FILTER SEARCH</div>
            <div class="juno-content" style="flex-direction: column; gap: 20px;">
              
              <div class="led-screen clickable" style="width: 100%; box-sizing: border-box;" @click=${()=>this.showSearchModal=!0}>
                <span class="led-text" style="font-size: 0.9rem;">
                  ${this.searchQuery?`Q: ${this.searchQuery}`:"CLICK TO SEARCH..."}
                </span>
              </div>

              <div style="display: flex; gap: 24px; width: 100%; justify-content: center;">
                <div class="cycle-group">
                  <div class="cycle-label">GENRE</div>
                  <div class="led-screen clickable" style="min-width: 110px;" @click=${()=>this.showSearchModal=!0}>
                    <span class="led-text" style="font-size: 0.8rem;">${this.selectedGenre}</span>
                  </div>
                </div>

                <div class="cycle-group">
                  <div class="cycle-label">KEY</div>
                  <div class="led-screen clickable" style="min-width: 60px;" @click=${()=>this.showSearchModal=!0}>
                    <span class="led-text" style="font-size: 0.8rem;">${this.selectedKey}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <!-- SET INFO & SELECTION -->
          <div class="juno-block" style="flex: 1.5;">
            <div class="juno-header orange">SET INFO</div>
            <div class="juno-content">
              <div class="set-info-container">
                
                <div class="set-header-row">
                  <div class="led-screen set-display clickable" @click=${()=>this.showSearchModal=!0}>
                    <span class="led-text">
                      ${this.currentSet?`SET ${this.currentSet.number.toString().padStart(2,"0")}`:"NO SET"}
                    </span>
                  </div>
                  
                  <div class="set-controls">
                    <div class="cycle-group">
                      <div class="cycle-label">DEC</div>
                      <button class="retro-btn patch-bank-btn" ?disabled=${!this.currentSet} @click=${()=>this.cycleSet(-1)}>▼</button>
                    </div>
                    <div class="cycle-group">
                      <div class="cycle-label">INC</div>
                      <button class="retro-btn patch-bank-btn" ?disabled=${!this.currentSet} @click=${()=>this.cycleSet(1)}>▲</button>
                    </div>
                  </div>
                </div>

                ${this.currentSet?u`
                  <div class="info-screen">
                    <div class="info-row">
                      <span class="info-label">GENRE / KEY</span>
                      <span style="color: #fff; font-weight: bold;">${this.currentSet.genre} • ${this.currentSet.analysis.bestKey}</span>
                    </div>
                    <div class="info-row">
                      <span class="info-label">PROGRESSION</span>
                      <span style="color: #fff;">${this.currentSet.analysis.recommendedProgression}</span>
                    </div>
                    ${this.currentSet.analysis.tags&&this.currentSet.analysis.tags.length>0?u`
                      <div class="info-row" style="margin-top: 4px;">
                        <span class="info-label">TAGS</span>
                        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                          ${this.currentSet.analysis.tags.map(o=>u`<span class="tag-bubble">${o}</span>`)}
                        </div>
                      </div>
                    `:""}
                  </div>
                `:u`
                  <div style="color: #5d5f66; font-weight: bold; font-size: 0.8rem;">
                    NO SETS MATCHING FILTER
                  </div>
                `}
                
              </div>
            </div>
          </div>
          
        </div>

        <!-- BOTTOM CHORDS ROW (PATCH BUTTONS) -->
        <div class="chords-block">
          <div class="juno-header red">CHORDS</div>
          <div class="chords-row">
            ${this.currentSet?this.currentSet.chords.map((o,e)=>{const r=e<4?"color-3":e<8?"color-1":"color-2",a=this.currentSet.voicings[e];return u`
                <div class="patch-btn-wrapper" title="Voicing: ${(a==null?void 0:a.join(", "))||"N/A"}">
                  <div class="patch-legend">${o}</div>
                  <button class="patch-btn ${r}" @click=${()=>this.handleChordClick(o,a)}></button>
                </div>
              `}):""}
          </div>
        </div>

      </div>

      <!-- UNIFIED SEARCH MODAL -->
      ${this.showSearchModal?u`
        <div class="modal-backdrop" @click=${o=>{o.target===o.currentTarget&&(this.showSearchModal=!1)}}>
          <div class="retro-modal">
            <div class="modal-header">
              <div class="modal-title">BROWSE CHORD SETS</div>
              <button class="close-btn" @click=${()=>this.showSearchModal=!1}>&times;</button>
            </div>
            
            <div class="modal-body">
              
              <!-- QUERY INPUT -->
              <div class="modal-section">
                <div class="led-screen" style="padding: 12px;">
                  <input 
                    type="text" 
                    class="led-input-modal" 
                    placeholder="TYPE TO SEARCH..." 
                    .value=${this.searchQuery}
                    @input=${o=>{this.searchQuery=o.target.value,this.currentFilteredIndex=0}}
                  />
                </div>
              </div>

              <!-- GENRE FILTER -->
              <div class="modal-section">
                <div class="modal-section-title">Filter by Genre</div>
                <div class="modal-list">
                  ${this.uniqueGenres.map(o=>u`
                    <button class="modal-item-btn ${this.selectedGenre===o?"selected":""}" @click=${()=>this.selectFilterValue("genre",o)}>${o}</button>
                  `)}
                </div>
              </div>

              <!-- KEY FILTER -->
              <div class="modal-section">
                <div class="modal-section-title">Filter by Key</div>
                <div class="modal-list">
                  ${this.uniqueKeys.map(o=>u`
                    <button class="modal-item-btn ${this.selectedKey===o?"selected":""}" @click=${()=>this.selectFilterValue("key",o)}>${o}</button>
                  `)}
                </div>
              </div>

              <!-- MATCHING SETS -->
              <div class="modal-section" style="margin-top: 12px;">
                <div class="modal-section-title" style="display:flex; justify-content:space-between;">
                  <span>Matching Sets</span>
                  <span style="color: #ff5d00;">${this.filteredSets.length} found</span>
                </div>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  ${this.filteredSets.map(o=>{var e;return u`
                    <button class="modal-item-btn set-list-btn ${((e=this.currentSet)==null?void 0:e.number)===o.number?"selected":""}" @click=${()=>this.jumpToSet(o.number)}>
                      <span class="s-num">#${o.number.toString().padStart(2,"0")}</span>
                      <span class="s-genre">${o.genre}</span>
                      <span class="s-key">${o.analysis.bestKey}</span>
                    </button>
                  `})}
                </div>
              </div>

            </div>
          </div>
        </div>
      `:""}

    `}handleChordClick(o,e){const r=`Chord: ${o}
Voicing: ${e==null?void 0:e.join(", ")}`;navigator.clipboard.writeText(r).then(()=>{})}};A.styles=oe`
    :host {
      display: block;
      color: var(--text-primary);
      font-family: var(--font-sans);
    }
    
    .juno-panel-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      padding: 12px;
      background: #15161b;
      border: 1px solid #2e3037;
      border-radius: 4px;
    }

    .top-row {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: space-between;
    }

    .juno-block {
      background: transparent;
      border: 1px solid #2a2b30;
      border-radius: 4px;
      position: relative;
      flex: 1;
      min-width: 280px;
      display: flex;
      flex-direction: column;
    }

    .juno-header {
      padding: 4px 12px;
      font-size: 0.7rem;
      font-weight: 900;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.2em;
      color: #fff;
    }
    .juno-header.blue { background: #346d92; border-bottom: 2px solid #1a3c54; }
    .juno-header.red { background: #b52c24; border-bottom: 2px solid #6b1510; }
    .juno-header.orange { background: #d67118; border-bottom: 2px solid #7d4009; }

    .juno-content {
      padding: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      flex: 1;
    }

    .led-screen {
      background-color: #120907;
      background-image: radial-gradient(rgba(255, 93, 0, 0.15) 1px, transparent 0);
      background-size: 3px 3px;
      border: 2px solid #09090b;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 1px 0 rgba(255,255,255,0.05);
      border-radius: 3px;
      padding: 6px 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .led-screen.clickable {
      cursor: pointer;
      transition: box-shadow 0.1s ease;
    }
    
    .led-screen.clickable:hover {
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 0 8px rgba(255, 93, 0, 0.6);
    }

    .led-text {
      color: #ff5d00;
      font-family: var(--font-mono), monospace;
      font-size: 1.2rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      text-shadow: 0 0 8px rgba(255, 93, 0, 0.9);
      white-space: nowrap;
    }

    /* Used inside the modal for actual typing */
    .led-input-modal {
      background: transparent;
      border: none;
      color: #ff5d00;
      font-family: var(--font-mono), monospace;
      font-size: 1.5rem;
      letter-spacing: 0.1em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 8px rgba(255, 93, 0, 0.9);
      width: 100%;
      text-align: center;
    }
    .led-input-modal::placeholder { color: rgba(255, 93, 0, 0.3); text-shadow: none; }

    .cycle-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .cycle-label {
      font-size: 0.55rem;
      font-weight: 900;
      color: #a4a5aa;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .retro-btn {
      width: 32px;
      height: 24px;
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 1.5px solid #101113;
      border-radius: 2px;
      box-shadow: 0 3px 0 #000, 0 4px 6px rgba(0,0,0,0.5);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #a4a5aa;
      font-weight: 900;
      font-size: 0.7rem;
      transition: all 0.05s ease;
    }
    .retro-btn:active {
      transform: translateY(3px);
      box-shadow: 0 0 0 #000, 0 1px 2px rgba(0,0,0,0.5);
      background: #ff8500;
      color: #fff;
    }

    .patch-bank-btn {
      width: 50px;
      height: 28px;
      background: #ebdcb9; /* Cream color */
      color: #111;
      font-size: 0.8rem;
    }

    /* Set Info Layout */
    .set-info-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 16px;
    }
    
    .set-header-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      border-bottom: 1px solid #23242a;
      padding-bottom: 12px;
    }

    .set-display {
      font-size: 1.5rem;
      font-weight: bold;
      padding: 6px 12px;
      min-width: 110px;
      text-align: center;
    }
    
    .set-controls {
      display: flex;
      gap: 12px;
    }

    .info-screen {
      font-size: 0.75rem;
      color: #a4a5aa;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      gap: 6px;
    }
    
    .info-row {
      display: flex;
      align-items: baseline;
      gap: 8px;
    }
    
    .info-label {
      font-weight: 900;
      color: #5d5f66;
      text-transform: uppercase;
      font-size: 0.65rem;
      width: 90px;
      flex-shrink: 0;
    }

    .tag-bubble {
      display: inline-block;
      background: #ff5d00;
      color: #111;
      border-radius: 2px;
      padding: 2px 6px;
      font-size: 0.6rem;
      font-weight: 900;
      text-transform: uppercase;
    }

    /* Chords Row (The PATCH section) */
    .chords-block {
      background: transparent;
      border: 1px solid #2a2b30;
      border-radius: 4px;
      position: relative;
    }

    .chords-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;
      padding: 32px 16px 24px 16px;
      background: #111216;
    }

    .patch-btn-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
    }

    .patch-legend {
      font-size: 0.75rem;
      font-weight: 900;
      color: #a4a5aa;
      font-family: var(--font-sans);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: center;
      min-height: 16px;
    }

    .patch-btn {
      width: 44px;
      height: 44px;
      border: 2px solid #101113;
      border-radius: 3px;
      box-shadow: 0 5px 0 #000, 0 6px 10px rgba(0, 0, 0, 0.7);
      cursor: pointer;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: transform 0.05s ease, box-shadow 0.05s ease;
    }
    
    .patch-btn::after {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 2px;
      background: rgba(255,255,255,0.3);
    }

    .patch-btn:active {
      transform: translateY(4px);
      box-shadow: 0 1px 0 #000, 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .patch-btn.color-1 { background: #ffaa33; } 
    .patch-btn.color-2 { background: #e85d22; } 
    .patch-btn.color-3 { background: #ebdcb9; } 

    /* Modals & Overlays */
    .modal-backdrop {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(4px);
      z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px;
    }
    .retro-modal {
      background: #141518; border: 3px solid var(--border-light, #2e3037); border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9); width: 100%; max-width: 650px;
      overflow: hidden; font-family: var(--font-sans);
      display: flex; flex-direction: column;
      max-height: 90vh;
    }
    .modal-header {
      background: #111214; padding: 10px 16px; display: flex;
      justify-content: space-between; align-items: center; border-bottom: 2px solid #2a2b30;
      flex-shrink: 0;
    }
    .modal-title { font-size: 0.8rem; font-weight: bold; color: #ff5d00; letter-spacing: 0.08em; }
    .close-btn { background: transparent; border: none; color: #fff; font-size: 1.4rem; cursor: pointer; transition: color 0.2s ease; }
    .close-btn:hover { color: #ff5d00; }
    
    .modal-body { 
      padding: 20px; 
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
    
    .modal-body::-webkit-scrollbar { width: 8px; }
    .modal-body::-webkit-scrollbar-track { background: #0f0f11; border-left: 1px solid #232328; }
    .modal-body::-webkit-scrollbar-thumb { background: #3a3b40; border-radius: 5px; border: 2px solid #0f0f11; }
    .modal-body::-webkit-scrollbar-thumb:hover { background: #ff5d00; }

    .modal-section {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .modal-section-title {
      font-size: 0.7rem;
      font-weight: 900;
      color: #a4a5aa;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      border-bottom: 1px solid #23242a;
      padding-bottom: 6px;
    }

    .modal-list {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }
    
    .modal-item-btn {
      background: var(--bg-element-dark, #1a1b20);
      border: 1px solid #2e3037;
      color: #fff;
      padding: 10px 14px;
      border-radius: 4px;
      cursor: pointer;
      font-family: var(--font-sans);
      font-size: 0.8rem;
      font-weight: bold;
      transition: all 0.1s ease;
      white-space: nowrap;
    }
    
    .modal-item-btn:hover {
      background: #23242a;
      border-color: #555861;
    }
    
    .modal-item-btn.selected {
      background: #ff5d00;
      color: #000;
      border-color: #ff7d33;
    }

    .set-list-btn {
      width: 100%;
      text-align: left;
      display: grid;
      grid-template-columns: 60px 1fr 1fr;
      gap: 16px;
      align-items: center;
    }
    .set-list-btn .s-num { color: #ff5d00; font-family: monospace; font-size: 1.1rem; }
    .set-list-btn .s-genre { color: #fff; }
    .set-list-btn .s-key { color: #a4a5aa; font-size: 0.7rem; text-align: right; }

    @media (max-width: 768px) {
      .top-row { flex-direction: column; }
      .set-header-row { flex-direction: column; align-items: flex-start; }
      .chords-row { padding: 24px 16px; gap: 12px; }
      .patch-btn { width: 38px; height: 38px; }
      .patch-legend { font-size: 0.65rem; }
    }
  `;I([p()],A.prototype,"searchQuery",2);I([p()],A.prototype,"selectedGenre",2);I([p()],A.prototype,"selectedKey",2);I([p()],A.prototype,"currentFilteredIndex",2);I([p()],A.prototype,"showSearchModal",2);A=I([ae("j6-chords-view")],A);var po=Object.defineProperty,Co=Object.getOwnPropertyDescriptor,_=(o,e,r,a)=>{for(var t=a>1?void 0:a?Co(e,r):e,n=o.length-1,s;n>=0;n--)(s=o[n])&&(t=(a?s(e,r,t):s(t))||t);return a&&t&&po(e,r,t),t};const ge=Qe.map(o=>({...o,id:o.bankPatch,name:o.soundNameCategory,notes:o.notesDescription||"",delayEffects:o.delayReverb,tags:Ze(o)}));let f=class extends w{constructor(){super(...arguments),this.selectedPreset=ge[0],this.presetListOpen=!1,this.aboutOpen=!1,this.isEdited=!1,this.activeView="preset",this.customValues={}}willUpdate(o){o.has("selectedPreset")&&this.resetToPresetValues()}resetToPresetValues(){const o=this.selectedPreset;this.customValues={lfo:no(o.lfo),pwm:so(o.pwm),a:Q(o.attack),d:Q(o.decay),s:oo(o.sustain),r:Q(o.release),freq:ro(o.filterFreq),res:to(o.resonance),env:ao(o.envMod),effect:o.chorus!=="Off"?70:0,delay:o.delayReverb==="Y"?60:0,reverb:o.delayReverb==="Y"?50:0},this.isEdited=!1}handleFaderMouseDown(o,e){o.preventDefault();const r=o.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(o.clientY,r,e);const a=n=>{this.updateFaderFromCoord(n.clientY,r,e)},t=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",t)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",t)}handleFaderTouchStart(o,e){const r=o.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(o.touches[0].clientY,r,e);const a=n=>{this.updateFaderFromCoord(n.touches[0].clientY,r,e)},t=()=>{window.removeEventListener("touchmove",a),window.removeEventListener("touchend",t)};window.addEventListener("touchmove",a),window.addEventListener("touchend",t)}handleSwitchClick(o){const e=o.currentTarget.getBoundingClientRect(),r=o.clientX-e.left,a=e.width/3;r<a?this.activeView="preset":r<a*2?this.activeView="chords":this.activeView="styles"}updateFaderFromCoord(o,e,r){const a=e.getBoundingClientRect(),t=Math.max(0,Math.min(1,(a.bottom-o)/a.height)),n=Math.round(t*100);this.customValues={...this.customValues,[r]:n},this.isEdited=!0}handleKnobMouseDown(o,e){o.preventDefault();const r=o.clientY,a=this.customValues[e]||0,t=s=>{const i=(r-s.clientY)*1.2,c=Math.max(0,Math.min(100,a+i));this.customValues={...this.customValues,[e]:Math.round(c)},this.isEdited=!0},n=()=>{window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",n)};window.addEventListener("mousemove",t),window.addEventListener("mouseup",n)}handleSendGet(){const o=`--- Roland J-6 Patch Info ---
Preset: [${this.selectedPreset.id}] ${this.selectedPreset.name}
Notes: ${this.selectedPreset.notes}
Waveform: ${this.selectedPreset.waveformOscType}
Chorus: ${this.selectedPreset.chorus}
---------------------------------------
LFO Rate: ${this.customValues.lfo}%
PWM Depth: ${this.customValues.pwm}%
Attack Time: ${this.customValues.a}%
Decay Time: ${this.customValues.d}%
Sustain Level: ${this.customValues.s}%
Release Time: ${this.customValues.r}%
Cutoff Freq: ${this.customValues.freq}%
Resonance: ${this.customValues.res}%
Env Mod: ${this.customValues.env}%
Delay Level: ${this.customValues.delay}%
Reverb Level: ${this.customValues.reverb}%
Effect Chorus: ${this.customValues.effect}%
---------------------------------------`;navigator.clipboard.writeText(o).then(()=>{alert("Patch dump copied to clipboard successfully!")})}renderFader(o,e,r){return u`
      <div 
        class="fader-group"
        @mousedown=${a=>this.handleFaderMouseDown(a,r)}
        @touchstart=${a=>this.handleFaderTouchStart(a,r)}
      >
        <span class="fader-label">${o}</span>
        <div class="fader-track-wrapper">
          <div class="fader-track">
            <div class="fader-handle" style="bottom: calc(${e}% * 0.86)"></div>
          </div>
        </div>
        <span class="fader-val-label">${e}%</span>
      </div>
    `}renderKnob(o,e,r){const a=-135+2.7*e;return u`
      <div class="knob-control" @mousedown=${t=>this.handleKnobMouseDown(t,r)}>
        <div class="knob-dial-wrapper">
          <div class="knob-dial" style="transform: rotate(${a}deg)">
            <div class="knob-indicator"></div>
          </div>
        </div>
        <span class="knob-label">${o}</span>
      </div>
    `}render(){const o=this.selectedPreset,e=o.saw==="SAW",r=o.pulse==="SQU"||o.pulse==="PWM",a=["15%","20%","25%","33%"].includes(o.pulse),t=["100%","25%"].includes(o.sub),n=o.sub==="50%",s=o.noise!=="x",d=o.chorus==="Off"||!o.chorus,i=o.chorus==="I",c=o.chorus==="II",l=(this.customValues.a||0)*.25,m=(this.customValues.d||0)*.25,g=(this.customValues.s||0)*.4,y=25,E=(this.customValues.r||0)*.25,Ge="0,40",ke=`${l},0`,xe=`${l+m},${40-g}`,we=`${l+m+y},${40-g}`,Me=`${l+m+y+E},40`,_e=`M ${Ge} L ${ke} L ${xe} L ${we} L ${Me}`;return u`
      <div class="synth-container">
        <!-- Top Bar Header -->
        <div class="synth-header">
          <div class="header-left">
            <span class="roland-logo">Roland</span>
            
            <!-- 3-Way Mode Toggle -->
            <div class="juno-switch" @click=${this.handleSwitchClick}>
              <div class="juno-switch-labels">
                <div class="juno-switch-label-box" style="flex: 1; ${this.activeView==="preset"?"color: #fff; background: rgba(255,255,255,0.1);":""}">Preset</div>
                <div class="juno-switch-label-box" style="flex: 1; ${this.activeView==="chords"?"color: #fff; background: rgba(255,255,255,0.1);":""}">Chords</div>
                <div class="juno-switch-label-box" style="flex: 1; ${this.activeView==="styles"?"color: #fff; background: rgba(255,255,255,0.1);":""}">Styles</div>
              </div>
              <div class="juno-switch-track-container">
                <div class="juno-switch-track">
                  <div class="juno-switch-handle" style="left: ${this.activeView==="preset"?"16.6%":this.activeView==="chords"?"50%":"83.3%"}"></div>
                </div>
              </div>
            </div>
          </div>

          <div class="juno-logo">J6</div>
        </div>

        <!-- Main Body Controls -->
        <div class="synth-body">
          ${this.activeView==="preset"?u`
          <div class="synth-grid">
            <!-- Left Grid (Patch Display + Oscillator Settings) -->
            <div class="grid-left">
              <!-- PATCH PANEL -->
              <div class="panel-card">
                <div class="panel-header red">Patch</div>
                
                <div class="patch-panel-content">
                  
                  <!-- Top Row: Buttons, LED Search, Toggle -->
                  <div class="patch-top-row">
                    <button class="btn-key key-cream patch-btn" @click=${()=>this.presetListOpen=!0}>
                      ${o.id||"1-1"}
                    </button>
                    <button class="btn-key key-cream patch-btn" @click=${()=>this.presetListOpen=!0}>
                      ${o.name||"MELLOW SUB OCTAVE"}
                    </button>
                    
                    <!-- ADSR LCD Screen -->
                    <div class="led-search-screen" style="padding: 0; overflow: hidden; justify-content: center;">
                      <svg viewBox="0 0 100 40" style="width: 90%; height: 80%; overflow: visible;" preserveAspectRatio="none">
                        <path d=${_e} fill="none" stroke="var(--color-orange-primary)" stroke-width="2" vector-effect="non-scaling-stroke" filter="drop-shadow(0 0 4px rgba(255, 93, 0, 0.7))"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Bottom Row: Notes and Counts -->
                  <div class="patch-bottom-row">
                    <div class="patch-notes">
                      ${this.isEdited?u`<span style="color:#ffa166;">[EDITED] </span>`:""}
                      ${o.notes||"Factory patch preset definition"}
                    </div>


                  </div>
                  
                </div>
              </div>

              <!-- OSCILLATOR PANEL -->
              <div class="panel-card">
                <div class="panel-header blue">Oscillator</div>
                
                <div class="panel-content" style="padding-top: 24px;">
                  
                  <!-- Shared Scale left of LFO -->
                  <div class="fader-scale-shared" style="margin-right: -4px;">
                    <span>4</span>
                    <span>-</span>
                    <span>0</span>
                  </div>
                  <!-- LFO slider -->
                  ${this.renderFader("LFO",this.customValues.lfo||0,"lfo")}
                  <!-- PWM slider -->
                  ${this.renderFader("PWM",this.customValues.pwm||0,"pwm")}

                  <!-- Waveform Toggle Buttons with LEDs -->
                  <div class="waveform-picker">
                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="var(--text-secondary)" fill="none" stroke-width="1.5">
                          <path d="M1 9 L9 1 L9 9 Z" />
                        </svg>
                      </span>
                      <div class="led-well ${e?"active":""}"></div>
                      <button class="btn-key key-cream ${e?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="var(--text-secondary)" fill="none" stroke-width="1.5">
                          <path d="M1 9 L1 1 L5 1 L5 9 L9 9" />
                        </svg>
                      </span>
                      <div class="led-well ${r?"active":""}"></div>
                      <button class="btn-key key-cream ${r?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="var(--text-secondary)" fill="none" stroke-width="1.5">
                          <path d="M1 5 L9 5" stroke-dasharray="2 2" />
                          <path d="M3 9 L3 1 L7 1 L7 9" />
                        </svg>
                      </span>
                      <div class="led-well ${a?"active":""}"></div>
                      <button class="btn-key key-cream ${a?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <span style="font-size:0.5rem; letter-spacing:0.02em;">SUB</span>
                      </span>
                      <div class="led-well ${t?"active":""}"></div>
                      <button class="btn-key key-sub ${t?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem; font-family:sans-serif;">Sub 50%</span>
                      <div class="led-well ${n?"active":""}"></div>
                      <button class="btn-key key-sub50 ${n?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem;">Noise</span>
                      <div class="led-well ${s?"active":""}"></div>
                      <button class="btn-key key-noise ${s?"active":""}"></button>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <!-- Right Grid (Envelope + Filter + Chorus Panels) -->
            <div class="grid-right">
              <!-- On mobile screens, render Amp Envelope and Filter side-by-side -->
              <div class="grid-right-mobile-row" style="grid-column: 1 / -1; display: contents;">
                <!-- AMP ENVELOPE PANEL -->
                <div class="panel-card">
                  <div class="panel-header red">Amp Envelope</div>
                  
                  <div class="panel-content" style="padding-top: 24px;">
                    ${this.renderFader("A",this.customValues.a||0,"a")}
                    
                    <div class="fader-scale-shared">
                      <span>12</span>
                    </div>
                    
                    ${this.renderFader("D",this.customValues.d||0,"d")}
                    
                    <div class="fader-scale-shared">
                      <span>6</span>
                    </div>
                    
                    ${this.renderFader("S",this.customValues.s||0,"s")}
                    
                    <div class="fader-scale-shared">
                      <span>0</span>
                    </div>
                    
                    ${this.renderFader("R",this.customValues.r||0,"r")}
                  </div>
                </div>

                <!-- FILTER PANEL -->
                <div class="panel-card">
                  <div class="panel-header red">Filter</div>
                  
                  <div class="panel-content" style="padding-top: 24px;">
                    <!-- shared ticks labels -->
                    <div class="fader-scale-shared" style="margin-right: -4px;">
                      <span>120</span>
                      <span>55</span>
                      <span>10</span>
                    </div>
                    ${this.renderFader("Freq",this.customValues.freq||50,"freq")}
                    
                    <div class="fader-scale-shared">
                      <span>65</span>
                      <span>0</span>
                      <span>-8</span>
                    </div>
                    ${this.renderFader("Res",this.customValues.res||0,"res")}
                    
                    <div class="fader-scale-shared">
                      <span>16</span>
                      <span>0</span>
                      <span>-4</span>
                    </div>
                    ${this.renderFader("Env Mod",this.customValues.env||50,"env")}
                  </div>
                </div>
              </div>

              <!-- CHORUS & UTILITIES PANEL -->
              <div class="panel-card full-width-module">
                <div class="panel-header red" style="background: linear-gradient(180deg, #3c3e44 0%, #202124 100%); border-bottom: 2px solid #141517;">Chorus & Utilities</div>
                
                <div class="chorus-panel-grid" style="padding-top: 24px;">
                  
                  <!-- Section 1: Chorus -->
                  <div class="chorus-section">
                    <div class="chorus-picker">
                      <div class="chorus-button">
                        <span>OFF</span>
                        <div class="led-well ${d?"active":""}"></div>
                        <button class="btn-key key-cream ${d?"active":""}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>I</span>
                        <div class="led-well ${i?"active":""}"></div>
                        <button class="btn-key key-cream ${i?"active":""}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>II</span>
                        <div class="led-well ${c?"active":""}"></div>
                        <button class="btn-key key-cream ${c?"active":""}"></button>
                      </div>
                    </div>
                  </div>

                  <!-- Section 2: Utilities -->
                  <div class="chorus-section">
                    <div class="chorus-picker">
                      <div class="chorus-button">
                        <span>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-secondary)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin-bottom: 1px;">
                            <path d="M7 16V4M7 4L3 8M7 4L11 8M17 8V20M17 20L21 16M17 20L13 16"/>
                          </svg>
                        </span>
                        <div class="led-well"></div>
                        <button class="btn-key key-sub" title="Send/Get Patch" @click=${this.handleSendGet}></button>
                      </div>
                      <div class="chorus-button">
                        <span style="font-size: 0.75rem; line-height: 12px; margin-bottom: 1px;">?</span>
                        <div class="led-well ${this.aboutOpen?"active":""}"></div>
                        <button class="btn-key key-sub ${this.aboutOpen?"active":""}" title="Help" @click=${()=>this.aboutOpen=!0}></button>
                      </div>
                    </div>
                  </div>

                  <!-- Section 3: Knobs -->
                  <div class="chorus-section">
                    <div style="display:flex; gap:10px;">
                      ${this.renderKnob("Effect",this.customValues.effect||0,"effect")}
                      ${this.renderKnob("Delay",this.customValues.delay||0,"delay")}
                      ${this.renderKnob("Reverb",this.customValues.reverb||0,"reverb")}
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
          `:this.activeView==="chords"?u`
            <j6-chords-view></j6-chords-view>
          `:u`
            <div style="min-height: 400px; display: flex; align-items: center; justify-content: center; color: #5d5f66; font-weight: bold; text-transform: uppercase; letter-spacing: 0.1em; border: 2px dashed #2e3037; border-radius: 4px; margin: 16px;">
              Styles view coming soon
            </div>
          `}
        </div>

        <!-- Footer bar inside synth container -->
        <div class="synth-footer">
          <a href="https://github.com/warmsynths/j6-presets" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            GitHub
          </a>
          <span class="footer-divider">|</span>
          <a href="mailto:warmsythsiloveyou@ail.com">
            Made with ❤️ by warmsynths
          </a>
          <span class="footer-divider">|</span>
          <a href="https://ko-fi.com/warmsynths" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.061-4.3-.037-.046-.054-.09-.054-.118-.014-.015-.024-.023-.024-.023-.497-1.182-.266-2.59.882-3.13 1.554-.735 2.809.18 3.565 1.127.756-.947 2.011-1.862 3.565-1.127 1.149.54 1.379 1.948.882 3.13 0 0-.01.008-.024.023-.001.027-.018.072-.054.118-.328.618-1.503 1.93-2.248 2.812zm9.44 1.455c-1.077 1.054-3.52 1.492-3.52 1.492s.103-3.66.1-4.821c-.004-1.229-.024-2.864-.024-2.864s1.77-.076 2.502.213c.732.288 1.42 1.021 1.545 1.834.126.812-.061 1.761-1.065 2.696z"/></svg>
            Support
          </a>
        </div>
      </div>

      <!-- PRESET LIST OVERLAY MODAL -->
      ${this.presetListOpen?u`
        <div class="modal-backdrop" @click=${()=>this.presetListOpen=!1}>
          <div class="preset-dropdown-container" @click=${T=>T.stopPropagation()}>
            <j6-preset-list
              .presets=${ge}
              .selectedId=${this.selectedPreset.id}
              @preset-selected=${T=>{this.selectedPreset=T.detail,this.presetListOpen=!1}}
            ></j6-preset-list>
          </div>
        </div>
      `:""}



      <!-- ABOUT/HELP MODAL -->
      ${this.aboutOpen?u`
        <div class="modal-backdrop" @click=${()=>this.aboutOpen=!1}>
          <div class="retro-modal" @click=${T=>T.stopPropagation()}>
            <div class="modal-header">
              <span class="modal-title">ABOUT ROLAND J-6 EXPLORER</span>
              <button class="close-btn" @click=${()=>this.aboutOpen=!1}>&times;</button>
            </div>
            <div class="modal-body text-content">
              <h3>Roland J-6 Preset Explorer</h3>
              <p>This web explorer allows you to view and interact with the preset configurations for the Roland J-6 synthesizer.</p>
              <p>Selecting presets visually moves the physical knobs and sliders to show their underlying settings as modeled by the Roland Juno-60 faceplate parameters.</p>
              <p><strong>Interactive Tweaking:</strong> Click and drag up/down on the sliders and knobs to custom-tweak the patch sound parameters! The screen will show an <code>[EDITED]</code> warning.</p>
              <p><strong>Patch Dump (Send/Get):</strong> Click <em>Send/Get</em> to copy the current patch values as a formatted text summary, perfect for archiving your edits!</p>
              <p>Based on Nick Standing's J-6 video. <a href="https://www.youtube.com/watch?v=z6hoNwWadR8" target="_blank" rel="noreferrer">Watch the source video</a>.</p>
            </div>
            <div class="modal-footer">
              <button class="retro-btn accent" @click=${()=>this.aboutOpen=!1}>CLOSE</button>
            </div>
          </div>
        </div>
      `:""}
    `}};f.styles=oe`
    :host {
      display: block;
      color: var(--text-primary);
      background-color: var(--bg-app-base);
      min-height: 100vh;
      font-family: var(--font-sans);
      padding: 20px;
      box-sizing: border-box;
    }

    /* Outer Skeuomorphic Synth Faceplate */
    .synth-container {
      max-width: 1200px;
      margin: 0 auto;
      background: #18191e;
      border: 4px solid #2a2b30;
      border-radius: 8px;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.9), inset 0 1px 2px rgba(255,255,255,0.08);
      overflow: hidden;
      position: relative;
    }

    /* Grille stripes on top metal bar */
    .synth-header {
      background: repeating-linear-gradient(90deg, #111214, #111214 1.5px, #1a1b20 1.5px, #1a1b20 3px);
      border-bottom: 4px solid #08080a;
      padding: 12px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .roland-logo {
      font-weight: 800;
      font-size: 2.2rem;
      letter-spacing: 0.15em;
      color: #a5a298;
      text-transform: uppercase;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
    }

    /* 3-way Juno-60 Style Toggle Switch */
    .juno-switch {
      display: inline-flex;
      flex-direction: column;
      margin-left: 16px;
      user-select: none;
      cursor: pointer;
    }

    .juno-switch-labels {
      display: flex;
    }

    .juno-switch-label-box {
      border: 2px solid #e2e1d7;
      padding: 2px 8px;
      font-size: 0.7rem;
      font-weight: 900;
      color: #e2e1d7;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      cursor: pointer;
      text-align: center;
      background: transparent;
      position: relative;
    }

    /* Don't collapse the borders between items, instead hide the left border of adjacent ones so the single line looks continuous */
    .juno-switch-label-box:not(:first-child) {
      margin-left: -2px;
    }

    .juno-switch-track-container {
      border: 2px solid #e2e1d7;
      border-top: none;
      padding: 8px 12px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: transparent;
      margin-top: 0;
    }

    .juno-switch-track {
      width: 100%;
      height: 6px;
      background: #000;
      border-radius: 1px;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.9);
      position: relative;
    }

    .juno-switch-handle {
      position: absolute;
      top: -8px;
      width: 24px;
      height: 22px;
      background: linear-gradient(180deg, #2b2b2b 0%, #111 100%);
      border: 1px solid #0a0a0a;
      border-radius: 2px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15);
      transition: left 0.15s cubic-bezier(0.2, 0, 0, 1);
      transform: translateX(-50%);
      cursor: pointer;
    }

    .juno-switch-handle::before,
    .juno-switch-handle::after {
      content: '';
      position: absolute;
      top: 4px;
      bottom: 4px;
      width: 2px;
      background: #000;
      box-shadow: 1px 0 0 rgba(255,255,255,0.1);
    }
    .juno-switch-handle::before { left: 8px; }
    .juno-switch-handle::after { right: 8px; }

    .juno-logo {
      font-family: 'Arial Black', system-ui, sans-serif;
      font-weight: 900;
      font-size: 3.6rem;
      letter-spacing: -0.02em;
      
      /* Horizontally stretch the font to match the ultra-wide JUNO logo */
      transform: scaleX(1.4);
      transform-origin: right center;

      /* Metallic vertical gradient */
      background: linear-gradient(180deg, #f0efea 0%, #dcdad2 40%, #a4a298 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      
      /* Subtle drop shadow behind the clipped text */
      filter: drop-shadow(0px 2px 3px rgba(0,0,0,0.8));
      
      margin-right: 16px;
    }

    /* Main Synth Panel (Continuous Flat Plate) */
    .synth-body {
      padding: 16px;
      background: #15161b; /* Charcoal grey background */
    }

    .synth-grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 12px;
    }

    .grid-left {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .grid-right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 12px;
    }

    .full-width-module {
      grid-column: 1 / -1;
    }

    /* Flat JUNO Section Panel Outline styling */
    .panel-card {
      background: transparent;
      border: 1px solid #2e3037;
      border-radius: 4px;
      box-sizing: border-box;
      position: relative;
    }

    /* Red and Blue screen-printed block headers */
    .panel-header {
      padding: 6px 12px;
      font-size: 0.72rem;
      font-weight: 800;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.15em;
      color: #ffffff;
    }

    .panel-header.red {
      background: #b52c24;
      border-bottom: 1.5px solid #ffa19922;
    }

    .panel-header.blue {
      background: #346d92;
      border-bottom: 1.5px solid #a8cce422;
    }

    .panel-content {
      padding: 20px 16px 16px;
      display: flex;
      gap: 16px;
      justify-content: space-around;
      align-items: center;
    }

    /* Fader controls styling */
    .fader-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
    }

    .fader-label {
      font-size: 0.65rem;
      font-weight: 800;
      color: #a4a5aa;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .fader-track-wrapper {
      position: relative;
      padding: 0 10px;
    }

    /* narrow slit track */
    .fader-track {
      width: 5px;
      height: 100px;
      background: #000000;
      border-radius: 2px;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.8);
      position: relative;
      cursor: pointer;
    }

    /* JUNO gold/tan ticks printed directly on faceplate next to track */
    .fader-track::before, .fader-track::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      width: 4px;
      background: repeating-linear-gradient(180deg, #9e9a8e, #9e9a8e 1.5px, transparent 1.5px, transparent 10px);
      opacity: 0.55;
    }

    .fader-track::before { left: -8px; }
    .fader-track::after { right: -8px; }

    /* JUNO-60 dark charcoal plastic fader handle with white center stripe */
    .fader-handle {
      width: 24px;
      height: 14px;
      background: linear-gradient(180deg, #44464f 0%, #1a1b1e 100%);
      border: 1.5px solid #0a0b0d;
      border-radius: 3px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1);
      position: absolute;
      left: calc(50% - 12px);
      cursor: ns-resize;
      transition: bottom 0.05s linear;
    }

    .fader-handle::before {
      content: '';
      display: block;
      position: absolute;
      left: 1.5px; right: 1.5px;
      top: 5px;
      height: 1.5px;
      background: var(--text-primary);
      box-shadow: 0 0.5px 1px rgba(0,0,0,0.3);
    }

    .fader-val-label {
      font-family: monospace;
      font-size: 0.6rem;
      color: #5d5f66;
      margin-top: 8px;
    }

    /* Shared fader numeric scales */
    .fader-scale-shared {
      font-family: monospace;
      font-size: 0.55rem;
      color: var(--text-secondary);
      font-weight: bold;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100px;
      margin-top: 20px;
      padding: 0 2px;
    }

    .fader-scale-shared span {
      text-align: center;
      line-height: 1;
    }

    /* Rotary Knobs styling */
    .knob-control {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      position: relative;
    }

    .knob-dial-wrapper {
      position: relative;
      width: 44px;
      height: 44px;
    }

    /* printed tick marks around the knob dial */
    .knob-dial-wrapper::before {
      content: '';
      position: absolute;
      top: -4px; left: -4px; right: -4px; bottom: -4px;
      border-radius: 50%;
      background: repeating-conic-gradient(
        from 225deg,
        #a4a5aa 0deg,
        #a4a5aa 2deg,
        transparent 2deg,
        transparent 27deg
      );
      mask-image: radial-gradient(circle at center, transparent 65%, black 66%);
      -webkit-mask-image: radial-gradient(circle at center, transparent 65%, black 66%);
      pointer-events: none;
      opacity: 0.4;
    }

    .knob-dial {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #42454e 0%, #151619 80%);
      border: 1.5px solid #1c1d21;
      box-shadow: 0 5px 8px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.1);
      position: relative;
      cursor: ns-resize;
    }

    /* JUNO orange knob indicator pointer */
    .knob-indicator {
      position: absolute;
      top: 3px;
      left: calc(50% - 1.5px);
      width: 3px;
      height: 10px;
      background: #ff8500;
      border-radius: 1px;
      transform-origin: bottom center;
      box-shadow: 0 0 2px rgba(255,133,0,0.8);
    }

    .knob-label {
      font-size: 0.6rem;
      font-weight: bold;
      color: var(--text-secondary);
      text-transform: uppercase;
    }

    /* PATCH display panel elements */
    .patch-panel-content {
      padding: 16px;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .patch-top-row {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }

    /* Override btn-key for the wide patch buttons */
    .patch-btn {
      width: auto !important;
      height: 34px !important;
      padding: 0 12px;
      font-family: var(--font-sans);
      font-weight: 800;
      font-size: 0.8rem;
      color: #2b271d;
      white-space: nowrap;
    }

    /* Recessed LED search screen */
    .led-search-screen {
      flex: 1;
      height: 34px;
      background-color: var(--bg-input);
      background-image: radial-gradient(rgba(255, 93, 0, 0.2) 1.5px, transparent 0);
      background-size: 4px 4px;
      border: 2px solid #09090b;
      box-shadow: inset 0 2px 8px rgba(0,0,0,0.98), 0 1px 1px rgba(255,255,255,0.05);
      border-radius: 3px;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 10px;
      box-sizing: border-box;
    }

    .led-search-input {
      width: 100%;
      background: transparent;
      border: none;
      color: var(--color-orange-primary);
      font-family: var(--font-mono);
      font-size: 1.7rem;
      letter-spacing: 0.05em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 6px rgba(255, 93, 0, 0.8);
      padding: 0;
    }
    .led-search-input::placeholder { color: var(--color-orange-primary)33; text-shadow: none; }
    
    .led-search-icon {
      position: absolute; right: 8px; top: calc(50% - 9px);
      width: 18px; height: 18px; fill: var(--color-orange-primary);
      filter: drop-shadow(0 0 4px rgba(255, 93, 0, 0.7)); pointer-events: none;
    }

    .search-toggle-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }
    
    .search-toggle-label {
      font-size: 0.55rem;
      font-weight: 800;
      color: var(--text-secondary);
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }

    .search-toggle-btn {
      width: 26px;
      height: 26px;
      background: #231b1a;
      border: 2px solid #101113;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 3px 0 #000, 0 4px 6px rgba(0,0,0,0.5);
      transition: all 0.1s ease;
    }

    .search-toggle-btn.active {
      background: #ffab44; /* Bright glowing amber */
      box-shadow: 0 1px 0 #000, 0 0 12px #ff9d00, inset 0 0 4px #fff;
      transform: translateY(2px);
    }

    .patch-bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-top: 4px;
    }

    .patch-notes {
      font-size: 0.8rem;
      color: #a4a5aa;
      font-weight: 600;
      line-height: 1.4;
      flex: 1;
      padding-right: 20px;
    }

    .patch-counts {
      font-size: 0.55rem;
      color: var(--text-secondary);
      font-weight: 800;
      text-align: right;
      line-height: 1.3;
      text-transform: uppercase;
      white-space: nowrap;
    }

    /* Waveform selector styling */
    .waveform-picker {
      display: flex;
      gap: 12px;
      align-items: flex-end;
    }

    .waveform-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .waveform-label {
      font-size: 0.6rem;
      font-weight: bold;
      color: var(--text-secondary);
      text-transform: uppercase;
      height: 12px;
      display: flex;
      align-items: center;
    }

    /* Inset LED well above switches */
    .led-well {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #380c0d; /* dark red off state */
      border: 1px solid #120c0a;
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.9), 0 1px 1px rgba(255,255,255,0.05);
      transition: all 0.15s ease;
    }

    .led-well.active {
      background: #ff9d00; /* warm amber glow */
      border-color: #ffc466;
      box-shadow: 0 0 8px #ff9d00, 0 0 16px var(--color-orange-primary), inset 0 0 2px #fff;
    }

    /* Skeuomorphic retro keys with thick black borders and deep drop shadows */
    .btn-key {
      width: 34px;
      height: 34px;
      border: 2px solid #101113;
      border-radius: 4px;
      box-shadow: 0 4px 0 #000000, 0 6px 10px rgba(0, 0, 0, 0.6);
      cursor: pointer;
      box-sizing: border-box;
      transition: transform 0.1s ease, box-shadow 0.1s ease;
      position: relative;
    }

    .btn-key::after {
      /* Subtle top highlight inner bevel for plastic texture */
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; height: 1px;
      background: rgba(255,255,255,0.25);
    }

    /* Only physically depress the button while the mouse is actively holding it down */
    .btn-key:active {
      transform: translateY(3px);
      box-shadow: 0 1px 0 #000000, 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Individual custom hardware hues */
    .key-cream { background: #ebdcb9; }
    .key-sub { background: #d6c886; }
    .key-sub50 { background: #e8aa55; }
    .key-noise { background: #e68a35; }

    /* Chorus panel specific elements */
    .chorus-panel-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
      width: 100%;
      box-sizing: border-box;
      gap: 12px;
    }

    .chorus-section {
      display: flex;
      align-items: center;
      gap: 16px;
      justify-content: center;
    }

    .chorus-section:not(:last-child) {
      border-right: 1px solid #282930;
      padding-right: 20px;
    }

    .chorus-picker {
      display: flex;
      gap: 10px;
    }

    .chorus-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }

    .chorus-button span {
      font-size: 0.6rem;
      font-weight: bold;
      color: var(--text-secondary);
    }

    /* Modals & Overlays */
    .modal-backdrop {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(4px);
      z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px;
    }
    .preset-dropdown-container { width: 100%; max-width: 500px; }
    .retro-modal {
      background: #141518; border: 3px solid var(--border-light); border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9); width: 100%; max-width: 550px;
      overflow: hidden; font-family: var(--font-sans);
    }
    .modal-header {
      background: #111214; padding: 10px 16px; display: flex;
      justify-content: space-between; align-items: center; border-bottom: 2px solid #2a2b30;
    }
    .modal-title { font-size: 0.8rem; font-weight: bold; color: var(--color-orange-primary); letter-spacing: 0.08em; }
    .close-btn { background: transparent; border: none; color: #fff; font-size: 1.4rem; cursor: pointer; transition: color 0.2s ease; }
    .close-btn:hover { color: var(--color-orange-primary); }
    .modal-body { padding: 20px; }
    .modal-body.text-content h3 { margin-top: 0; color: var(--color-orange-primary); }
    .modal-body.text-content p { line-height: 1.5; font-size: 0.9rem; color: #b2b4b8; }
    .modal-body.text-content a { color: var(--color-orange-primary); text-decoration: none; font-weight: bold; transition: color 0.2s ease; }
    .modal-body.text-content a:hover { color: #fff; text-decoration: underline; }
    .filter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
    .filter-group { display: flex; flex-direction: column; gap: 6px; }
    .filter-group label { font-size: 0.75rem; font-weight: bold; color: var(--text-secondary); text-transform: uppercase; }
    .filter-select {
      background: var(--bg-element-dark); border: 2px solid #2e3037; color: var(--text-primary);
      border-radius: 4px; padding: 8px; font-size: 0.85rem; outline: none;
    }
    .modal-footer {
      background: #0f1012; padding: 12px 16px; display: flex;
      justify-content: flex-end; gap: 12px; border-top: 1px solid #1f2025;
    }
    .retro-btn {
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 2px solid #5a5c62; color: var(--text-primary); font-size: 0.7rem; font-weight: bold;
      padding: 6px 12px; border-radius: 4px; cursor: pointer; text-transform: uppercase;
    }
    .retro-btn.accent { background: #cd5a1e; border-color: #3e2010; color: #fff; }
    .retro-btn.accent:hover { background: var(--color-orange-primary); }
    .synth-footer {
      padding: 16px 24px; background: #0d0d10; border-top: 3px solid #1a1b1f;
      display: flex; justify-content: center; align-items: center; gap: 24px; font-size: 0.8rem; color: var(--text-muted);
    }
    .synth-footer a {
      color: var(--text-secondary);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.2s ease;
      font-weight: 600;
    }
    .synth-footer a:hover {
      color: var(--text-primary);
    }
    .footer-divider {
      color: #2e3037;
    }

    /* Mobile vertical layout queries */
    @media (max-width: 768px) {
      :host { padding: 8px; }
      .synth-container { border-width: 2px; }
      .roland-logo { font-size: 1.6rem; }
      .juno-logo { font-size: 2rem; }
      .synth-grid { display: flex; flex-direction: column; gap: 12px; }
      .grid-right { display: grid; grid-template-columns: 1fr; gap: 12px; }
      .grid-right-mobile-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .panel-content { padding: 10px; gap: 8px; }
      .waveform-picker { overflow-x: auto; padding-bottom: 4px; width: 100%; justify-content: flex-start; }
      .chorus-panel-grid { flex-direction: column; gap: 20px; padding: 8px 0; }
      .chorus-section { width: 100%; border-right: none; padding-right: 0; border-bottom: 1px solid #232429; padding-bottom: 16px; }
      .chorus-section:last-child { border-bottom: none; }
      .synth-footer { flex-direction: column; gap: 12px; }
      .footer-divider { display: none; }
    }
  `;_([p()],f.prototype,"selectedPreset",2);_([p()],f.prototype,"presetListOpen",2);_([p()],f.prototype,"aboutOpen",2);_([p()],f.prototype,"isEdited",2);_([p()],f.prototype,"activeView",2);_([p()],f.prototype,"customValues",2);f=_([ae("j6-app")],f);
