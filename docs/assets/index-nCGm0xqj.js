(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,K=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),se=new WeakMap;let fe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(K&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&se.set(t,e))}return e}toString(){return this.cssText}};const we=s=>new fe(typeof s=="string"?s:s+"",void 0,J),ge=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,a,o)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[o+1],s[0]);return new fe(t,s,J)},Me=(s,e)=>{if(K)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),a=D.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=t.cssText,s.appendChild(i)}},ie=K?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return we(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:_e,defineProperty:ke,getOwnPropertyDescriptor:Se,getOwnPropertyNames:Fe,getOwnPropertySymbols:Ee,getPrototypeOf:He}=Object,M=globalThis,ae=M.trustedTypes,$e=ae?ae.emptyScript:"",B=M.reactiveElementPolyfillSupport,I=(s,e)=>s,W={toAttribute(s,e){switch(e){case Boolean:s=s?$e:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Z=(s,e)=>!_e(s,e),oe={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);a!==void 0&&ke(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:o}=Se(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:a,set(n){const d=a==null?void 0:a.call(this);o==null||o.call(this,n),this.requestUpdate(e,d,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const e=He(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const t=this.properties,i=[...Fe(t),...Ee(t)];for(const a of i)this.createProperty(a,t[a])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,a]of t)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const a=this._$Eu(t,i);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)t.unshift(ie(a))}else e!==void 0&&t.push(ie(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(a!==void 0&&i.reflect===!0){const n=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:W).toAttribute(t,i.type);this._$Em=e,n==null?this.removeAttribute(a):this.setAttribute(a,n),this._$Em=null}}_$AK(e,t){var o,n;const i=this.constructor,a=i._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const d=i.getPropertyOptions(a),r=typeof d.converter=="function"?{fromAttribute:d.converter}:((o=d.converter)==null?void 0:o.fromAttribute)!==void 0?d.converter:W;this._$Em=a;const l=r.fromAttribute(t,d.type);this[a]=l??((n=this._$Ej)==null?void 0:n.get(a))??l,this._$Em=null}}requestUpdate(e,t,i,a=!1,o){var n;if(e!==void 0){const d=this.constructor;if(a===!1&&(o=this[e]),i??(i=d.getPropertyOptions(e)),!((i.hasChanged??Z)(o,t)||i.useDefault&&i.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(d._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:o},n){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[o,n]of a){const{wrapped:d}=n,r=this[o];d!==!0||this._$AL.has(o)||r===void 0||this.C(o,void 0,n,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(a=>{var o;return(o=a.hostUpdate)==null?void 0:o.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[I("elementProperties")]=new Map,E[I("finalized")]=new Map,B==null||B({ReactiveElement:E}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis,ne=s=>s,Y=A.trustedTypes,re=Y?Y.createPolicy("lit-html",{createHTML:s=>s}):void 0,be="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,ve="?"+w,Le=`<${ve}>`,F=document,C=()=>F.createComment(""),N=s=>s===null||typeof s!="object"&&typeof s!="function",X=Array.isArray,Pe=s=>X(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",U=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,de=/-->/g,le=/>/g,_=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,pe=/"/g,xe=/^(?:script|style|textarea|title)$/i,Oe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),x=Oe(1),$=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),he=new WeakMap,k=F.createTreeWalker(F,129);function me(s,e){if(!X(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(e):e}const Ie=(s,e)=>{const t=s.length-1,i=[];let a,o=e===2?"<svg>":e===3?"<math>":"",n=O;for(let d=0;d<t;d++){const r=s[d];let l,c,p=-1,m=0;for(;m<r.length&&(n.lastIndex=m,c=n.exec(r),c!==null);)m=n.lastIndex,n===O?c[1]==="!--"?n=de:c[1]!==void 0?n=le:c[2]!==void 0?(xe.test(c[2])&&(a=RegExp("</"+c[2],"g")),n=_):c[3]!==void 0&&(n=_):n===_?c[0]===">"?(n=a??O,p=-1):c[1]===void 0?p=-2:(p=n.lastIndex-c[2].length,l=c[1],n=c[3]===void 0?_:c[3]==='"'?pe:ce):n===pe||n===ce?n=_:n===de||n===le?n=O:(n=_,a=void 0);const y=n===_&&s[d+1].startsWith("/>")?" ":"";o+=n===O?r+Le:p>=0?(i.push(l),r.slice(0,p)+be+r.slice(p)+w+y):r+w+(p===-2?d:y)}return[me(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class T{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let o=0,n=0;const d=e.length-1,r=this.parts,[l,c]=Ie(e,t);if(this.el=T.createElement(l,i),k.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=k.nextNode())!==null&&r.length<d;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(be)){const m=c[n++],y=a.getAttribute(p).split(w),u=/([.?@])?(.*)/.exec(m);r.push({type:1,index:o,name:u[2],strings:y,ctor:u[1]==="."?Ce:u[1]==="?"?Ne:u[1]==="@"?Te:V}),a.removeAttribute(p)}else p.startsWith(w)&&(r.push({type:6,index:o}),a.removeAttribute(p));if(xe.test(a.tagName)){const p=a.textContent.split(w),m=p.length-1;if(m>0){a.textContent=Y?Y.emptyScript:"";for(let y=0;y<m;y++)a.append(p[y],C()),k.nextNode(),r.push({type:2,index:++o});a.append(p[m],C())}}}else if(a.nodeType===8)if(a.data===ve)r.push({type:2,index:o});else{let p=-1;for(;(p=a.data.indexOf(w,p+1))!==-1;)r.push({type:7,index:o}),p+=w.length-1}o++}}static createElement(e,t){const i=F.createElement("template");return i.innerHTML=e,i}}function L(s,e,t=s,i){var n,d;if(e===$)return e;let a=i!==void 0?(n=t._$Co)==null?void 0:n[i]:t._$Cl;const o=N(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==o&&((d=a==null?void 0:a._$AO)==null||d.call(a,!1),o===void 0?a=void 0:(a=new o(s),a._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=a:t._$Cl=a),a!==void 0&&(e=L(s,a._$AS(s,e.values),a,i)),e}class Ae{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=((e==null?void 0:e.creationScope)??F).importNode(t,!0);k.currentNode=a;let o=k.nextNode(),n=0,d=0,r=i[0];for(;r!==void 0;){if(n===r.index){let l;r.type===2?l=new R(o,o.nextSibling,this,e):r.type===1?l=new r.ctor(o,r.name,r.strings,this,e):r.type===6&&(l=new qe(o,this,e)),this._$AV.push(l),r=i[++d]}n!==(r==null?void 0:r.index)&&(o=k.nextNode(),n++)}return k.currentNode=F,a}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class R{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=L(this,e,t),N(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=T.createElement(me(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===a)this._$AH.p(t);else{const n=new Ae(a,this),d=n.u(this.options);n.p(t),this.T(d),this._$AH=n}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new T(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const o of e)a===t.length?t.push(i=new R(this.O(C()),this.O(C()),this,this.options)):i=t[a],i._$AI(o),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const a=ne(e).nextSibling;ne(e).remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=f}_$AI(e,t=this,i,a){const o=this.strings;let n=!1;if(o===void 0)e=L(this,e,t,0),n=!N(e)||e!==this._$AH&&e!==$,n&&(this._$AH=e);else{const d=e;let r,l;for(e=o[0],r=0;r<o.length-1;r++)l=L(this,d[i+r],t,r),l===$&&(l=this._$AH[r]),n||(n=!N(l)||l!==this._$AH[r]),l===f?e=f:e!==f&&(e+=(l??"")+o[r+1]),this._$AH[r]=l}n&&!a&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ce extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Ne extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class Te extends V{constructor(e,t,i,a,o){super(e,t,i,a,o),this.type=5}_$AI(e,t=this){if((e=L(this,e,t,0)??f)===$)return;const i=this._$AH,a=e===f&&i!==f||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==f&&(i===f||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class qe{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){L(this,e)}}const z=A.litHtmlPolyfillSupport;z==null||z(T,R),(A.litHtmlVersions??(A.litHtmlVersions=[])).push("3.3.3");const Re=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let a=i._$litPart$;if(a===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=a=new R(e.insertBefore(C(),o),o,void 0,t??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;class H extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return $}}var ue;H._$litElement$=!0,H.finalized=!0,(ue=S.litElementHydrateSupport)==null||ue.call(S,{LitElement:H});const G=S.litElementPolyfillSupport;G==null||G({LitElement:H});(S.litElementVersions??(S.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:Z},We=(s=De,e,t)=>{const{kind:i,metadata:a}=t;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),i==="accessor"){const{name:n}=t;return{set(d){const r=e.get.call(this);e.set.call(this,d),this.requestUpdate(n,r,s,!0,d)},init(d){return d!==void 0&&this.C(n,void 0,s,d),d}}}if(i==="setter"){const{name:n}=t;return function(d){const r=this[n];e.call(this,d),this.requestUpdate(n,r,s,!0,d)}}throw Error("Unsupported decorator location: "+i)};function ee(s){return(e,t)=>typeof t=="object"?We(s,e,t):((i,a,o)=>{const n=a.hasOwnProperty(o);return a.constructor.createProperty(o,i),n?Object.getOwnPropertyDescriptor(a,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(s){return ee({...s,state:!0,attribute:!1})}const Ye=[{blank:"",preset:"1 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"I",notes_description:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",bankPatch:"1-1",soundNameCategory:"Mellow Sub Octave Pluck",notesDescription:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Low (Low -> Mid)",r:"None",blank_3:"Off",notes_description:"Square Pluck:",bankPatch:"1-2",soundNameCategory:"Square Pluck",notesDescription:"Square Pluck:",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Low (Low -> Mid)",release:"None",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 3",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Mellow Mallet: Sustains once Envelope control is past 50%",bankPatch:"1-3",soundNameCategory:"Mellow Mallet",notesDescription:"Mellow Mallet: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 4",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"High",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-4",soundNameCategory:"Noisy Mellow Pluck",notesDescription:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 5",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-5",soundNameCategory:"Noisy Octave Pluck",notesDescription:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 6",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"Mid",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"Off",notes_description:"Harpsichord: Sustains + PWM once Envelope control is past 50%",bankPatch:"1-6",soundNameCategory:"Harpsichord",notesDescription:"Harpsichord: Sustains + PWM once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"1 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"15%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"I",notes_description:"Chorus Clavinet: Sustains once Envelope control is past 50%",bankPatch:"1-7",soundNameCategory:"Chorus Clavinet",notesDescription:"Chorus Clavinet: Sustains once Envelope control is past 50%",waveformOscType:"Fixed + Sub 15%",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Chorus Harp: Mild Sustain once Envelope control is past 50%",bankPatch:"1-8",soundNameCategory:"Chorus Harp",notesDescription:"Chorus Harp: Mild Sustain once Envelope control is past 50%",waveformOscType:"Sub 100% + Square",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 1",glide:"x",octave:"+1",rate:"1/8th",delay:"x",lfo:"x",pwm:"LFO*",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",bankPatch:"2-1",soundNameCategory:"Staccato Steel Drum",notesDescription:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Low",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",bankPatch:"2-2",soundNameCategory:"Bright Detuned Saw Pluck",notesDescription:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",waveformOscType:"Saw",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",bankPatch:"2-3",soundNameCategory:"Synthy 80s Clean Guitar",notesDescription:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 4",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"II",notes_description:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",bankPatch:"2-4",soundNameCategory:"Gliding Noisy Pluck",notesDescription:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> Mid)",r:"Fast",blank_3:"II",notes_description:"Octave Splash: Mild Sustain once Envelope control is past 50%",bankPatch:"2-5",soundNameCategory:"Octave Splash",notesDescription:"Octave Splash: Mild Sustain once Envelope control is past 50%",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> Mid)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 6",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"Mid",blank_2:"Y",freq:"Mid",res:"High",env:"+ Mid",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Plectrum Wind:",bankPatch:"2-6",soundNameCategory:"Plectrum Wind",notesDescription:"Plectrum Wind:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"High",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"II",notes_description:"Plectrum Mellotron Chorus:",bankPatch:"2-7",soundNameCategory:"Plectrum Mellotron Chorus",notesDescription:"Plectrum Mellotron Chorus:",waveformOscType:"Sub 100% + Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"2 - 8",glide:"x",octave:"0",rate:"Fast",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Air Harp:",bankPatch:"2-8",soundNameCategory:"Air Harp",notesDescription:"Air Harp:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"Y"},{blank:"",preset:"3 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Slow",s_control_range:"Low (Low -> High)",r:"Slow",blank_3:"I",notes_description:"Ambient Piano:",bankPatch:"3-1",soundNameCategory:"Ambient Piano",notesDescription:"Ambient Piano:",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"None",decay:"Slow",sustain:"Low (Low -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"Off",notes_description:"Synth Vibraphone:",bankPatch:"3-2",soundNameCategory:"Synth Vibraphone",notesDescription:"Synth Vibraphone:",waveformOscType:"Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Hammered Dulcimar:",bankPatch:"3-3",soundNameCategory:"Hammered Dulcimar",notesDescription:"Hammered Dulcimar:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"3 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"I",notes_description:"Saw Piano:",bankPatch:"3-4",soundNameCategory:"Saw Piano",notesDescription:"Saw Piano:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"Fast",d:"Mid",s_control_range:"Mid (Low -> High)",r:"None",blank_3:"I",notes_description:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",bankPatch:"3-5",soundNameCategory:"Brass Pluck",notesDescription:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"Mid (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 6",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Resonant Blown Glass:",bankPatch:"3-6",soundNameCategory:"Resonant Blown Glass",notesDescription:"Resonant Blown Glass:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",bankPatch:"3-7",soundNameCategory:"Acid Saw",notesDescription:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 8",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",bankPatch:"3-8",soundNameCategory:"Bright Trumpet",notesDescription:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",waveformOscType:"Saw + Low",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"4 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"II",notes_description:"Octave PWM Lead:",bankPatch:"4-1",soundNameCategory:"Octave PWM Lead",notesDescription:"Octave PWM Lead:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 2",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"x",lfo_2:"High",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"I",notes_description:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",bankPatch:"4-2",soundNameCategory:"Gliding Pulse Lead I",notesDescription:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",waveformOscType:"Fixed + Sub 25%",filterFreq:"High",resonance:"High",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"4 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Slow PWM Lead:",bankPatch:"4-3",soundNameCategory:"Slow PWM Lead",notesDescription:"Slow PWM Lead:",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"High",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Vibrato Saw Lead:",bankPatch:"4-4",soundNameCategory:"Vibrato Saw Lead",notesDescription:"Vibrato Saw Lead:",waveformOscType:"Saw + High",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 5",glide:"Mid",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"II",notes_description:"Gliding Pluse Lead II:",bankPatch:"4-5",soundNameCategory:"Gliding Pluse Lead II",notesDescription:"Gliding Pluse Lead II:",waveformOscType:"Fixed + Sub 25% + Low",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 6",glide:"x",octave:"",rate:"Fast",delay:"Y",lfo:"Mid",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Dirty Strings:",bankPatch:"4-6",soundNameCategory:"Octave Dirty Strings",notesDescription:"Octave Dirty Strings:",waveformOscType:"Saw + Fixed + Sub 25% + Mid",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Mixed Lead:",bankPatch:"4-7",soundNameCategory:"Octave Mixed Lead",notesDescription:"Octave Mixed Lead:",waveformOscType:"Saw + Fixed + Sub 25%",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"Low",blank_2:"Y",freq:"High",res:"High",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Blown Octave Square:",bankPatch:"4-8",soundNameCategory:"Blown Octave Square",notesDescription:"Blown Octave Square:",waveformOscType:"Sub 100% + Square",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 1",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"I",notes_description:"Thick Attack Lead:",bankPatch:"5-1",soundNameCategory:"Thick Attack Lead",notesDescription:"Thick Attack Lead:",waveformOscType:"Saw + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"5 - 2",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"Off",notes_description:"The Fake Slim Shady:",bankPatch:"5-2",soundNameCategory:"The Fake Slim Shady",notesDescription:"The Fake Slim Shady:",waveformOscType:"Saw + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"Low",blank_2:"Y",freq:"Mid",res:"High",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Ya-ee Choir:",bankPatch:"5-3",soundNameCategory:"Ya-ee Choir",notesDescription:"Ya-ee Choir:",waveformOscType:"Saw + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Dark Strings:",bankPatch:"5-4",soundNameCategory:"Dark Strings",notesDescription:"Dark Strings:",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 5",glide:"Slow",octave:"+1",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Angry Cat: Gliding noisy lead with fast filter modulation",bankPatch:"5-5",soundNameCategory:"Angry Cat",notesDescription:"Angry Cat: Gliding noisy lead with fast filter modulation",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 6",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Choir:",bankPatch:"5-6",soundNameCategory:"Brass Choir",notesDescription:"Brass Choir:",waveformOscType:"LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 7",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Whoa Flute:",bankPatch:"5-7",soundNameCategory:"Whoa Flute",notesDescription:"Whoa Flute:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 8",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"II",notes_description:"Honky Tonk Clav: (Great bass sounds)",bankPatch:"5-8",soundNameCategory:"Honky Tonk Clav",notesDescription:"Honky Tonk Clav: (Great bass sounds)",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"I",notes_description:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-1",soundNameCategory:"PWM Envelope",notesDescription:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Env + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 2",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Mid",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"Off",notes_description:"Solo String:",bankPatch:"6-2",soundNameCategory:"Solo String",notesDescription:"Solo String:",waveformOscType:"Saw + Mid",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 3",glide:"x",octave:"0",rate:"Max",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Square Ring Mod:",bankPatch:"6-3",soundNameCategory:"Square Ring Mod",notesDescription:"Square Ring Mod:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Low -> High)",r:"Fast",blank_3:"Off",notes_description:"Mellow Trumpet:",bankPatch:"6-4",soundNameCategory:"Mellow Trumpet",notesDescription:"Mellow Trumpet:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Low -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 5",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Horn:",bankPatch:"6-5",soundNameCategory:"Horn",notesDescription:"Horn:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 6",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"I",notes_description:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-6",soundNameCategory:"Square Chorus Lead",notesDescription:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Clarinet:",bankPatch:"6-7",soundNameCategory:"Clarinet",notesDescription:"Clarinet:",waveformOscType:"Square + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 8",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"x",sub:"x",noise:"High",blank_2:"Y",freq:"Tuned*",res:"Max*",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",bankPatch:"6-8",soundNameCategory:"Ocarina",notesDescription:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",waveformOscType:"Unknown",filterFreq:"Tuned*",resonance:"Max*",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"7 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"PWM String Ensemble I:",bankPatch:"7-1",soundNameCategory:"PWM String Ensemble I",notesDescription:"PWM String Ensemble I:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 2",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"Saw String Ensemble:",bankPatch:"7-2",soundNameCategory:"Saw String Ensemble",notesDescription:"Saw String Ensemble:",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 3",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Ensemble:",bankPatch:"7-3",soundNameCategory:"Brass Ensemble",notesDescription:"Brass Ensemble:",waveformOscType:"Saw + Sub 100% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 4",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"PWM String Ensemble II:",bankPatch:"7-4",soundNameCategory:"PWM String Ensemble II",notesDescription:"PWM String Ensemble II:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 5",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"25%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Ghost Pad: (Open filter for Noisy String Ensemble)",bankPatch:"7-5",soundNameCategory:"Ghost Pad",notesDescription:"Ghost Pad: (Open filter for Noisy String Ensemble)",waveformOscType:"Saw + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Mid",decay:"Mid",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"7 - 6",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"- Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad I (Bright):",bankPatch:"7-6",soundNameCategory:"Evolving Filter Pad I (Bright)",notesDescription:"Evolving Filter Pad I (Bright):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Low",envMod:"- Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad II (Mellow):",bankPatch:"7-7",soundNameCategory:"Evolving Filter Pad II (Mellow)",notesDescription:"Evolving Filter Pad II (Mellow):",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 8",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad III (Mellow Slow and Wide):",bankPatch:"7-8",soundNameCategory:"Evolving Filter Pad III (Mellow Slow and Wide)",notesDescription:"Evolving Filter Pad III (Mellow Slow and Wide):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Mid",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 1",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"50%",noise:"Low",blank_2:"x",freq:"Mid",res:"High",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad IV (Bright Slow and Wide):",bankPatch:"8-1",soundNameCategory:"Evolving Filter Pad IV (Bright Slow and Wide)",notesDescription:"Evolving Filter Pad IV (Bright Slow and Wide):",waveformOscType:"Sub 50% + Fixed + Sub 20%",filterFreq:"Mid",resonance:"High",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 2",glide:"Mid",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad V (Squishy I):",bankPatch:"8-2",soundNameCategory:"Evolving Filter Pad V (Squishy I)",notesDescription:"Evolving Filter Pad V (Squishy I):",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 3",glide:"x",octave:"0",rate:"Slow",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Evolving Filter Pad VI (Squishy II):",bankPatch:"8-3",soundNameCategory:"Evolving Filter Pad VI (Squishy II)",notesDescription:"Evolving Filter Pad VI (Squishy II):",waveformOscType:"Fixed + Sub 20%",filterFreq:"High",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 4",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Low",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad VII (Blossoming I):",bankPatch:"8-4",soundNameCategory:"Evolving Filter Pad VII (Blossoming I)",notesDescription:"Evolving Filter Pad VII (Blossoming I):",waveformOscType:"Saw + Sub 50%",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"Slow",decay:"Mid",sustain:"High (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Evolving Filter Pad VII (Blossoming II):",bankPatch:"8-5",soundNameCategory:"Evolving Filter Pad VII (Blossoming II)",notesDescription:"Evolving Filter Pad VII (Blossoming II):",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Slow",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"8 - 6",glide:"x",octave:"+1",rate:"Fast",delay:"Y",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Slow",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"I",notes_description:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",bankPatch:"8-6",soundNameCategory:"Decaying Filter Pad (Blossoming III)",notesDescription:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Slow",sustain:"Off (Off -> High)",release:"Fast",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"High",env:"+ Low",lfo_2:"High*",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",bankPatch:"8-7",soundNameCategory:"Sample and Hold Pad",notesDescription:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",waveformOscType:"Saw + Sub 100%",filterFreq:"Low",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 8",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"Slow",blank_3:"II",notes_description:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",bankPatch:"8-8",soundNameCategory:"Plectrum Tremolo Pad",notesDescription:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"Slow",chorus:"II",delayReverb:"x"}],Ve=[[/deadmau5/i,["Progressive House","EDM"]],[/avicii/i,["Melodic EDM","Pop"]],[/chiptune/i,["Chiptune","Retro"]],[/lo[- ]?fi/i,["Lo-Fi"]],[/house/i,["House"]],[/trance/i,["Trance"]],[/dance/i,["Dance"]],[/ambient/i,["Ambient"]],[/juno/i,["Vintage","Analog"]],[/303/i,["Acid","Bassline"]],[/bass/i,["Bass"]],[/brass/i,["Brass"]],[/organ/i,["Organ"]],[/strings/i,["Strings"]],[/piano/i,["Piano"]],[/pad/i,["Pad"]],[/lead/i,["Lead"]],[/pluck/i,["Pluck"]],[/synth/i,["Synth"]],[/noise/i,["Noise"]],[/bell/i,["Bell"]],[/vintage/i,["Vintage"]],[/metallic/i,["Metallic"]],[/dark/i,["Dark"]],[/bright/i,["Bright"]],[/soft/i,["Soft"]],[/aggressive/i,["Aggressive"]],[/hyper pop/i,["Hyperpop"]],[/rock/i,["Rock"]],[/house music/i,["House"]],[/deep house/i,["Deep House"]],[/hip hop/i,["Hip Hop"]],[/rnb/i,["R&B"]],[/sci-fi/i,["Sci-Fi"]],[/industrial/i,["Industrial"]],[/noise style/i,["Noise"]],[/soundtrack/i,["Soundtrack"]]];function h(s,e){Array.isArray(e)?e.forEach(t=>t&&s.add(t)):e&&s.add(e)}function Be(s){const e=new Set,t=s.notesDescription||"",i=(s.soundNameCategory||"").toLowerCase(),a=/\(([^)]+)\)/g;let o;for(;(o=a.exec(t))!==null;){const r=o[1].trim();r&&(/^good for\s+/i.test(r)||h(e,r))}Ve.forEach(([r,l])=>{(r.test(t)||r.test(i))&&h(e,l)}),[[/pad/i,"Pad"],[/lead/i,"Lead"],[/bass/i,"Bass"],[/keys/i,"Keys"],[/organ/i,"Organ"],[/piano/i,"Piano"],[/pluck/i,"Pluck"],[/brass/i,"Brass"],[/strings/i,"Strings"],[/bell/i,"Bell"],[/whistle/i,"Whistle"],[/clav/i,"Clav"],[/synth/i,"Synth"]].forEach(([r,l])=>{s.soundNameCategory&&r.test(s.soundNameCategory)&&h(e,l)});const d=(s.waveformOscType||"").toLowerCase();return d.includes("saw")&&h(e,"Saw"),d.includes("square")&&h(e,"Square"),d.includes("sub")&&h(e,"Sub"),d.includes("noise")&&h(e,"Noise"),d.includes("triangle")&&h(e,"Triangle"),d.includes("sync")&&h(e,"Sync"),d.includes("pwm")&&h(e,"PWM"),(d.includes("cross-mod")||d.includes("cross mod"))&&h(e,"Cross-Mod"),s.filterFreq==="High"&&h(e,"Bright"),s.filterFreq==="Low"&&h(e,"Dark"),s.resonance==="High"&&h(e,"Resonant"),s.resonance==="Low"&&h(e,"Smooth"),s.attack==="Fast"&&h(e,"Sharp Attack"),s.attack==="Slow"&&h(e,"Slow Attack"),s.release==="Slow"&&h(e,"Long Release"),s.release==="Fast"&&h(e,"Snappy Release"),s.sustain==="Max"&&h(e,"Sustained"),s.chorus&&s.chorus!=="Off"&&h(e,s.chorus),s.delayReverb&&s.delayReverb!=="Off"&&h(e,s.delayReverb),Array.from(e)}function Ue(s){const e=s.toLowerCase();return/^(progressive house|edm|melodic edm|pop|chiptune|retro|lo-fi|house|trance|dance|ambient|acid|bassline|hip hop|r&b|sci-fi|industrial|soundtrack|hyperpop|rock|vintage|analog)$/.test(e)?"Genre / Mood":/^(pad|lead|bass|keys|organ|piano|pluck|brass|strings|bell|whistle|clav|synth)$/.test(e)?"Instrument / Type":/^(bright|dark|soft|aggressive|metallic|noise|smooth|resonant|sustained)$/.test(e)?"Character":/^(sharp attack|slow attack|long release|snappy release)$/.test(e)?"Envelope":/^(chorus|reverb|delay|chorus \d|reverb \d|delay \d)$/.test(e)?"Effects":/^(saw|square|sub|triangle|sync|pwm|cross-mod)$/.test(e)?"Waveform":"Other"}function j(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("none")||e==="x"?0:e.includes("fast")?20:e.includes("mid")||e.includes("med")?60:e.includes("slow")?100:0}function ze(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("off")||e==="x"?0:e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")||e.includes("max")?100:0}function Ge(s){if(!s)return 50;const e=s.toLowerCase().trim();return e.includes("low")?15:e.includes("mid")||e.includes("med")?55:e.includes("high")?85:e.includes("tuned")?70:50}function je(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("low")?10:e.includes("mid")||e.includes("med")?45:e.includes("high")?80:e.includes("max")?100:0}function Qe(s){if(!s||s==="x")return 50;const e=s.toLowerCase().trim();return e.includes("- med")||e.includes("- high")?15:e.includes("- low")?35:e.includes("+ low")?65:e.includes("+ mid")||e.includes("+ med")?80:e.includes("+ high")?95:50}function Ke(s){if(!s||s==="x")return 0;const e=s.toLowerCase().trim();return e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")?100:0}function Je(s){if(!s||s==="x")return 0;const e=s.toLowerCase().trim();return e.includes("fixed")?30:e.includes("env")?50:e.includes("lfo")?85:0}var Ze=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,te=(s,e,t,i)=>{for(var a=i>1?void 0:i?Xe(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(a=(i?n(e,t,a):n(a))||a);return i&&a&&Ze(e,t,a),a};let q=class extends H{constructor(){super(...arguments),this.presets=[],this.selectedId=""}render(){return x`
      <div class="list-header">
        <span class="list-title">Select Preset</span>
        <span class="preset-count">MATCH: ${this.presets.length}</span>
      </div>
      <div class="scroll-container">
        ${this.presets.length===0?x`<div class="no-results">NO PRESETS FOUND</div>`:x`
            <ul>
              ${this.presets.map(s=>{const e=s.id||s.bankPatch,t=s.name||s.soundNameCategory,i=this.selectedId===e;return x`
                  <li 
                    class=${i?"selected":""} 
                    @click=${()=>{this.dispatchEvent(new CustomEvent("preset-selected",{detail:s}))}}
                  >
                    <span class="preset-id">${e}</span>
                    <span class="preset-name">${t}</span>
                  </li>
                `})}
            </ul>
          `}
      </div>
    `}};q.styles=ge`
    :host {
      display: block;
      background: #141416;
      border: 3px solid #3c3d42;
      border-radius: 8px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.85), inset 0 0 20px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      max-height: 400px;
      font-family: 'Inter', system-ui, sans-serif;
      color: #e2e2e4;
      z-index: 1000;
    }
    
    .list-header {
      background: #1c1d22;
      border-bottom: 2px solid #2e2f34;
      padding: 10px 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    
    .list-title {
      font-size: 0.85rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: #9e9fa4;
    }
    
    .preset-count {
      font-family: 'VT323', monospace;
      color: #ff5d00;
      font-size: 1.2rem;
      letter-spacing: 0.05em;
      background: #0c0c0d;
      padding: 2px 8px;
      border-radius: 4px;
      border: 1px solid #ff5d0033;
      box-shadow: 0 0 6px rgba(255, 93, 0, 0.15);
    }
    
    .scroll-container {
      overflow-y: auto;
      max-height: 350px;
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
      background: #ff5d00;
    }

    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    li {
      padding: 10px 14px;
      border-bottom: 1px solid #1f2024;
      cursor: pointer;
      display: grid;
      grid-template-columns: 50px 1fr;
      gap: 12px;
      align-items: center;
      transition: all 0.15s ease;
      font-size: 0.9rem;
    }
    
    li:hover {
      background: #24252b;
      color: #ffffff;
    }
    
    li.selected {
      background: rgba(255, 93, 0, 0.08);
      border-left: 4px solid #ff5d00;
      color: #ff7700;
    }
    
    .preset-id {
      font-family: 'VT323', monospace;
      font-size: 1.4rem;
      color: #ff5d00;
      text-shadow: 0 0 4px rgba(255, 93, 0, 0.2);
    }
    
    .preset-name {
      font-weight: 500;
    }

    .no-results {
      padding: 30px;
      text-align: center;
      color: #6a6b72;
      font-family: 'VT323', monospace;
      font-size: 1.5rem;
    }
  `;te([ee({type:Array})],q.prototype,"presets",2);te([ee({type:String})],q.prototype,"selectedId",2);q=te([ye("j6-preset-list")],q);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,b=(s,e,t,i)=>{for(var a=i>1?void 0:i?tt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(a=(i?n(e,t,a):n(a))||a);return i&&a&&et(e,t,a),a};const Q=Ye.map(s=>({...s,id:s.bankPatch,name:s.soundNameCategory,notes:s.notesDescription||"",delayEffects:s.delayReverb,tags:Be(s)}));let g=class extends H{constructor(){super(...arguments),this.selectedPreset=Q[0],this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All",this.presetListOpen=!1,this.filtersOpen=!1,this.aboutOpen=!1,this.searchOn=!0,this.isEdited=!1,this.customValues={}}willUpdate(s){s.has("selectedPreset")&&this.resetToPresetValues()}resetToPresetValues(){const s=this.selectedPreset;this.customValues={lfo:Ke(s.lfo),pwm:Je(s.pwm),a:j(s.attack),d:j(s.decay),s:ze(s.sustain),r:j(s.release),freq:Ge(s.filterFreq),res:je(s.resonance),env:Qe(s.envMod),effect:s.chorus!=="Off"?70:0,delay:s.delayReverb==="Y"?60:0,reverb:s.delayReverb==="Y"?50:0},this.isEdited=!1}handleFaderMouseDown(s,e){s.preventDefault();const t=s.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(s.clientY,t,e);const i=o=>{this.updateFaderFromCoord(o.clientY,t,e)},a=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",a)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",a)}handleFaderTouchStart(s,e){const t=s.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(s.touches[0].clientY,t,e);const i=o=>{this.updateFaderFromCoord(o.touches[0].clientY,t,e)},a=()=>{window.removeEventListener("touchmove",i),window.removeEventListener("touchend",a)};window.addEventListener("touchmove",i),window.addEventListener("touchend",a)}updateFaderFromCoord(s,e,t){const i=e.getBoundingClientRect(),a=Math.max(0,Math.min(1,(i.bottom-s)/i.height)),o=Math.round(a*100);this.customValues={...this.customValues,[t]:o},this.isEdited=!0}handleKnobMouseDown(s,e){s.preventDefault();const t=s.clientY,i=this.customValues[e]||0,a=n=>{const r=(t-n.clientY)*1.2,l=Math.max(0,Math.min(100,i+r));this.customValues={...this.customValues,[e]:Math.round(l)},this.isEdited=!0},o=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",o)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",o)}handleSendGet(){const s=`--- Roland J-6 / JUNO-60 Patch Info ---
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
---------------------------------------`;navigator.clipboard.writeText(s).then(()=>{alert("Patch dump copied to clipboard successfully!")})}clearFilters(){this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All"}get hasActiveFilters(){return this.searchQuery!==""||this.activeGenreMood!=="All"||this.activeInstrumentType!=="All"||this.activeCharacter!=="All"||this.activeEnvelope!=="All"||this.activeEffects!=="All"||this.activeWaveform!=="All"}get filteredPresets(){const s=this.searchQuery.trim().toLowerCase();return Q.filter(e=>{const t=[e.name,e.notes,e.waveformOscType,e.bankPatch,e.filterFreq,e.delayEffects,(e.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase(),i=!this.searchOn||s===""||t.includes(s),a=this.activeGenreMood==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeGenreMood.toLowerCase()),o=this.activeInstrumentType==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeInstrumentType.toLowerCase()),n=this.activeCharacter==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeCharacter.toLowerCase()),d=this.activeEnvelope==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeEnvelope.toLowerCase()),r=this.activeEffects==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeEffects.toLowerCase()),l=this.activeWaveform==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeWaveform.toLowerCase());return i&&a&&o&&n&&d&&r&&l})}get groupedTags(){const s=new Set;Q.forEach(t=>(t.tags||[]).forEach(i=>s.add(i)));const e=new Map;return Array.from(s).sort((t,i)=>t.localeCompare(i)).forEach(t=>{const i=Ue(t),a=e.get(i)??[];a.push(t),e.set(i,a)}),e}renderFader(s,e,t){return x`
      <div 
        class="fader-container"
        @mousedown=${i=>this.handleFaderMouseDown(i,t)}
        @touchstart=${i=>this.handleFaderTouchStart(i,t)}
      >
        <span class="fader-label">${s}</span>
        <div class="fader-body">
          <div class="fader-ticks left">
            <span class="major"></span><span></span><span></span><span></span><span></span>
            <span class="major"></span><span></span><span></span><span></span><span></span>
            <span class="major"></span>
          </div>
          <div class="fader-track">
            <div class="fader-track-inner">
              <div class="fader-handle" style="bottom: calc(${e}% * 0.8 + 10px)"></div>
            </div>
          </div>
          <div class="fader-ticks right">
            <span class="major"></span><span></span><span></span><span></span><span></span>
            <span class="major"></span><span></span><span></span><span></span><span></span>
            <span class="major"></span>
          </div>
        </div>
        <span class="fader-val-label">${e}%</span>
      </div>
    `}renderKnob(s,e,t){const i=-135+2.7*e;return x`
      <div class="knob-control" @mousedown=${a=>this.handleKnobMouseDown(a,t)}>
        <div class="knob-dial-wrapper">
          <div class="knob-dial">
            <div class="knob-indicator" style="transform: rotate(${i}deg)"></div>
          </div>
        </div>
        <span class="knob-label">${s}</span>
      </div>
    `}renderCategorySelect(s,e,t,i){return x`
      <div class="filter-group">
        <label>${s}</label>
        <select
          class="filter-select"
          .value=${t}
          @change=${a=>{this[i]=a.target.value}}
        >
          <option value="All">All</option>
          ${e.map(a=>x`<option value=${a} ?selected=${t===a}>${a}</option>`)}
        </select>
      </div>
    `}render(){const s=this.selectedPreset,e=s.saw==="SAW",t=s.pulse==="SQU"||s.pulse==="PWM",i=["15%","20%","25%","33%"].includes(s.pulse),a=["100%","25%"].includes(s.sub),o=s.sub==="50%",n=s.noise!=="x",d=s.chorus==="Off"||!s.chorus,r=s.chorus==="I",l=s.chorus==="II",c=this.filteredPresets,p=c.filter(u=>(u.tags||[]).some(P=>P.toLowerCase()==="bass")).length,m=c.filter(u=>(u.tags||[]).some(P=>P.toLowerCase()==="pad")).length,y=c.filter(u=>(u.tags||[]).some(P=>P.toLowerCase()==="lead")).length;return x`
      <div class="synth-container">
        <!-- Top Bar Header -->
        <div class="synth-header">
          <div class="header-left">
            <span class="roland-logo">Roland</span>
            <span class="plugout-badge">Plug-Out</span>
          </div>
          
          <div class="juno-logo">J6</div>
        </div>

        <!-- Main Body Controls -->
        <div class="synth-body">
          <div class="synth-grid">
            <!-- Left Grid (Patch Display + Oscillator Settings) -->
            <div class="grid-left">
              <!-- PATCH PANEL -->
              <div class="panel-card">
                <div class="panel-header red">Patch</div>
                <div style="padding: 14px; display: flex; flex-direction: column; gap: 10px;">
                  
                  <div class="led-screen">
                    <div class="led-top-row">
                      <button class="led-patch-btn" @click=${()=>this.presetListOpen=!0}>
                        ${s.id||"1-1"}
                      </button>
                      <button class="led-preset-btn" @click=${()=>this.presetListOpen=!0}>
                        ${s.name||"MELLOW SUB OCTAVE"}
                      </button>
                      
                      <!-- LED Search field -->
                      <div class="led-search-box">
                        <input 
                          class="led-search-input" 
                          placeholder="SEARCH..."
                          .value=${this.searchQuery}
                          @input=${u=>{this.searchQuery=u.target.value,this.presetListOpen=!0}}
                        />
                        <svg class="led-search-icon" viewBox="0 0 24 24">
                          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                        </svg>
                      </div>

                      <!-- Search Toggle -->
                      <div style="display:flex; flex-direction:column; align-items:center; gap:3px;">
                        <button 
                          class="search-toggle-btn ${this.searchOn?"active":""}" 
                          @click=${()=>this.searchOn=!this.searchOn}
                        ></button>
                        <span class="search-toggle-label">Search On</span>
                      </div>
                    </div>

                    <div class="led-notes">
                      ${this.isEdited?x`<span style="color:#ffa166;">[EDITED] </span>`:""}
                      ${s.notes||"Factory patch preset definition"}
                    </div>

                    <div class="led-counts">
                      FILTERED [ BASS: ${p} | PAD: ${m} | LEAD: ${y} ]
                    </div>
                  </div>
                </div>
              </div>

              <!-- OSCILLATOR PANEL -->
              <div class="panel-card">
                <div class="panel-header blue">Oscillator</div>
                <div class="panel-content">
                  <!-- LFO slider -->
                  ${this.renderFader("LFO",this.customValues.lfo||0,"lfo")}
                  <!-- PWM slider -->
                  ${this.renderFader("PWM",this.customValues.pwm||0,"pwm")}

                  <!-- Waveform Toggle Buttons with LEDs -->
                  <div class="waveform-picker">
                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 9 L9 1 L9 9 Z" />
                        </svg>
                      </span>
                      <div class="waveform-led ${e?"active":""}"></div>
                      <button class="btn-beige ${e?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 9 L1 1 L5 1 L5 9 L9 9" />
                        </svg>
                      </span>
                      <div class="waveform-led ${t?"active":""}"></div>
                      <button class="btn-beige ${t?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 5 L9 5" stroke-dasharray="2 2" />
                          <path d="M3 9 L3 1 L7 1 L7 9" />
                        </svg>
                      </span>
                      <div class="waveform-led ${i?"active":""}"></div>
                      <button class="btn-beige ${i?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <span style="font-size:0.5rem; letter-spacing:0.02em;">SUB</span>
                      </span>
                      <div class="waveform-led ${a?"active":""}"></div>
                      <button class="btn-beige ${a?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem; font-family:sans-serif;">Sub 50%</span>
                      <div class="waveform-led ${o?"active":""}"></div>
                      <button class="btn-beige ${o?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem;">Noise</span>
                      <button class="btn-orange ${n?"active":""}"></button>
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
                  <div class="panel-content">
                    ${this.renderFader("A",this.customValues.a||0,"a")}
                    ${this.renderFader("D",this.customValues.d||0,"d")}
                    ${this.renderFader("S",this.customValues.s||0,"s")}
                    ${this.renderFader("R",this.customValues.r||0,"r")}
                  </div>
                </div>

                <!-- FILTER PANEL -->
                <div class="panel-card">
                  <div class="panel-header red">Filter</div>
                  <div class="panel-content">
                    ${this.renderFader("Freq",this.customValues.freq||50,"freq")}
                    ${this.renderFader("Res",this.customValues.res||0,"res")}
                    ${this.renderFader("Env Mod",this.customValues.env||50,"env")}
                  </div>
                </div>
              </div>

              <!-- CHORUS & UTILITIES PANEL -->
              <div class="panel-card full-width-module">
                <div class="panel-header red" style="background: linear-gradient(180deg, #3c3e44 0%, #202124 100%); border-bottom: 2px solid #141517;">Chorus & Utilities</div>
                <div class="chorus-panel-grid">
                  
                  <!-- Section 1: Chorus -->
                  <div class="chorus-section">
                    <div class="chorus-picker">
                      <div class="chorus-button">
                        <span>OFF</span>
                        <div class="chorus-led ${d?"active":""}"></div>
                        <button class="btn-beige ${d?"active":""}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>I</span>
                        <div class="chorus-led ${r?"active":""}"></div>
                        <button class="btn-beige ${r?"active":""}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>II</span>
                        <div class="chorus-led ${l?"active":""}"></div>
                        <button class="btn-beige ${l?"active":""}"></button>
                      </div>
                    </div>
                  </div>

                  <!-- Section 2: Utilities -->
                  <div class="chorus-section">
                    <div style="display:flex; gap: 6px;">
                      <button class="retro-btn accent" @click=${this.handleSendGet}>Send/Get</button>
                      <button class="retro-btn" @click=${()=>this.filtersOpen=!0}>Option</button>
                      <button class="retro-btn" @click=${()=>this.aboutOpen=!0}>Help</button>
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
        </div>

        <!-- Footer bar inside synth container -->
        <div class="synth-footer">
          <div>
            Built by <a href="https://github.com/warmsynths" target="_blank" rel="noopener noreferrer">Warm Synths</a>.
          </div>
          <div>
            Nick Standing's J-6 Compilation Guide.
          </div>
        </div>
      </div>

      <!-- PRESET LIST OVERLAY MODAL -->
      ${this.presetListOpen?x`
        <div class="modal-backdrop" @click=${()=>this.presetListOpen=!1}>
          <div class="preset-dropdown-container" @click=${u=>u.stopPropagation()}>
            <j6-preset-list
              .presets=${this.filteredPresets}
              .selectedId=${this.selectedPreset.id}
              @preset-selected=${u=>{this.selectedPreset=u.detail,this.presetListOpen=!1}}
            ></j6-preset-list>
          </div>
        </div>
      `:""}

      <!-- FILTER DRAWER MODAL -->
      ${this.filtersOpen?x`
        <div class="modal-backdrop" @click=${()=>this.filtersOpen=!1}>
          <div class="retro-modal" @click=${u=>u.stopPropagation()}>
            <div class="modal-header">
              <span class="modal-title">FILTER PRESETS</span>
              <button class="close-btn" @click=${()=>this.filtersOpen=!1}>&times;</button>
            </div>
            <div class="modal-body filter-grid">
              ${this.renderCategorySelect("Genre / Mood",this.groupedTags.get("Genre / Mood")||[],this.activeGenreMood,"activeGenreMood")}
              ${this.renderCategorySelect("Instrument / Type",this.groupedTags.get("Instrument / Type")||[],this.activeInstrumentType,"activeInstrumentType")}
              ${this.renderCategorySelect("Character",this.groupedTags.get("Character")||[],this.activeCharacter,"activeCharacter")}
              ${this.renderCategorySelect("Envelope",this.groupedTags.get("Envelope")||[],this.activeEnvelope,"activeEnvelope")}
              ${this.renderCategorySelect("Effects",this.groupedTags.get("Effects")||[],this.activeEffects,"activeEffects")}
              ${this.renderCategorySelect("Waveform",this.groupedTags.get("Waveform")||[],this.activeWaveform,"activeWaveform")}
            </div>
            <div class="modal-footer">
              <button class="retro-btn" @click=${this.clearFilters} ?disabled=${!this.hasActiveFilters}>CLEAR ALL</button>
              <button class="retro-btn accent" @click=${()=>this.filtersOpen=!1}>OK</button>
            </div>
          </div>
        </div>
      `:""}

      <!-- ABOUT/HELP MODAL -->
      ${this.aboutOpen?x`
        <div class="modal-backdrop" @click=${()=>this.aboutOpen=!1}>
          <div class="retro-modal" @click=${u=>u.stopPropagation()}>
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
    `}};g.styles=ge`
    :host {
      display: block;
      color: #e2e2e4;
      background-color: #0b0c0d;
      min-height: 100vh;
      font-family: 'Inter', system-ui, sans-serif;
      padding: 20px;
      box-sizing: border-box;
    }

    /* Outer Skeuomorphic Synth Faceplate */
    .synth-container {
      max-width: 1200px;
      margin: 0 auto;
      background: #1b1c20;
      border: 4px solid #3c3d42;
      border-radius: 12px;
      box-shadow: 0 25px 60px rgba(0, 0, 0, 0.8), inset 0 2px 2px rgba(255,255,255,0.1);
      overflow: hidden;
      position: relative;
    }

    /* Grille stripes on top metal bar */
    .synth-header {
      background: repeating-linear-gradient(90deg, #16171a, #16171a 3px, #1e1f24 3px, #1e1f24 6px);
      border-bottom: 3px solid #0d0d0f;
      padding: 16px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .header-left {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .roland-logo {
      font-weight: 800;
      font-size: 2.2rem;
      letter-spacing: 0.1em;
      color: #a4a5aa;
      text-transform: uppercase;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
    }

    .plugout-badge {
      background: linear-gradient(180deg, #e4e6eb 0%, #b2b4b8 100%);
      border: 2px solid #5a5c62;
      border-radius: 4px;
      padding: 4px 10px;
      font-size: 0.65rem;
      font-weight: 900;
      color: #ff5d00;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.3);
      text-shadow: 0 0 3px rgba(255, 93, 0, 0.4);
    }

    .header-center-knobs {
      display: flex;
      gap: 24px;
      align-items: center;
    }

    .header-knob-group {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .header-knob-label {
      font-size: 0.55rem;
      font-weight: bold;
      color: #8c8e94;
      text-transform: uppercase;
      letter-spacing: 0.1em;
    }

    .juno-logo {
      font-weight: 900;
      font-size: 2.8rem;
      font-style: italic;
      color: #b4b6ba;
      letter-spacing: -0.05em;
      text-shadow: 2px 2px 0px #0d0d0f, 4px 4px 10px rgba(0,0,0,0.5);
    }

    /* Main Synth Panel Grid */
    .synth-body {
      padding: 16px;
      background: radial-gradient(circle at center, #22232a 0%, #15161a 100%);
    }

    .synth-grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 16px;
    }

    .grid-left {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .grid-right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }

    .full-width-module {
      grid-column: 1 / -1;
    }

    /* Skeuomorphic Module Card styling */
    .panel-card {
      background: #0d0d10;
      border: 2px solid #2e3037;
      border-radius: 6px;
      overflow: hidden;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255,255,255,0.05);
      position: relative;
    }

    .panel-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      border: 1px solid #16171c;
      border-radius: 4px;
      pointer-events: none;
    }

    /* Red and Blue headers */
    .panel-header {
      padding: 6px 12px;
      font-size: 0.75rem;
      font-weight: bold;
      text-align: center;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      color: #ffffff;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.4);
    }

    .panel-header.red {
      background: linear-gradient(180deg, #be3127 0%, #9e241c 100%);
      border-bottom: 2px solid #751a14;
    }

    .panel-header.blue {
      background: linear-gradient(180deg, #3684b5 0%, #266b96 100%);
      border-bottom: 2px solid #1c4f70;
    }

    .panel-content {
      padding: 16px;
      display: flex;
      gap: 16px;
      justify-content: space-around;
      align-items: center;
    }

    /* Fader controls styling */
    .fader-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 150px;
      width: 44px;
    }

    .fader-label {
      font-size: 0.65rem;
      font-weight: bold;
      color: #9e9fa4;
      text-transform: uppercase;
      margin-bottom: 6px;
    }

    .fader-body {
      flex: 1;
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;
      justify-content: center;
    }

    .fader-ticks {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 90px;
      position: absolute;
    }

    .fader-ticks.left {
      left: 2px;
    }

    .fader-ticks.right {
      right: 2px;
    }

    .fader-ticks span {
      display: block;
      width: 5px;
      height: 1.5px;
      background: #44454d;
    }

    .fader-ticks span.major {
      width: 8px;
      background: #888990;
    }

    .fader-track {
      width: 8px;
      height: 90px;
      background: #050507;
      border-radius: 4px;
      border: 1px solid #232429;
      position: relative;
      cursor: pointer;
    }

    .fader-track-inner {
      position: absolute;
      top: 0; bottom: 0; left: 0; right: 0;
    }

    .fader-handle {
      width: 24px;
      height: 16px;
      background: linear-gradient(180deg, #d2d4d9 0%, #8c8e94 50%, #4c4e54 50%, #76787e 100%);
      border-radius: 3px;
      border: 1px solid #1a1a1c;
      box-shadow: 0 3px 6px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.7);
      position: absolute;
      left: calc(50% - 12px);
      cursor: ns-resize;
      transition: bottom 0.05s linear;
    }

    .fader-handle::after {
      content: '';
      display: block;
      position: absolute;
      top: calc(50% - 1.5px);
      left: 0; right: 0;
      height: 3px;
      background: #ff5d00;
      box-shadow: 0 0 4px #ff5d00;
    }

    .fader-val-label {
      font-family: monospace;
      font-size: 0.6rem;
      color: #6c6d72;
      margin-top: 4px;
    }

    /* Rotary Knobs styling */
    .knob-control {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .knob-dial-wrapper {
      position: relative;
      width: 38px;
      height: 38px;
    }

    .knob-dial {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: radial-gradient(circle at 35% 35%, #42444c, #16171b);
      border: 1.5px solid #282a30;
      box-shadow: 0 4px 6px rgba(0,0,0,0.5), inset 0 2px 2px rgba(255,255,255,0.08);
      position: relative;
      cursor: ns-resize;
    }

    .knob-indicator {
      position: absolute;
      top: 3px;
      left: calc(50% - 1.5px);
      width: 3px;
      height: 12px;
      background: #e0e2e5;
      border-radius: 2px;
      transform-origin: bottom center;
    }

    .knob-label {
      font-size: 0.6rem;
      font-weight: bold;
      color: #9e9fa4;
      text-transform: uppercase;
    }

    /* PATCH display panel elements */
    .led-screen {
      background-color: #1c0502;
      background-image: radial-gradient(rgba(255, 93, 0, 0.15) 1px, transparent 0);
      background-size: 3px 3px;
      border: 4px solid #101114;
      box-shadow: inset 0 0 20px rgba(0,0,0,0.9), 0 0 10px rgba(255, 93, 0, 0.08);
      padding: 12px 16px;
      border-radius: 6px;
      min-height: 100px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 8px;
    }

    .led-top-row {
      display: flex;
      gap: 10px;
      align-items: center;
      flex-wrap: wrap;
    }

    .led-patch-btn {
      background: linear-gradient(180deg, #f0ebd9 0%, #dbd4bf 100%);
      border: 2px solid #635f52;
      border-radius: 4px;
      padding: 6px 12px;
      font-family: 'VT323', monospace;
      font-size: 1.4rem;
      font-weight: bold;
      color: #2b271d;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 3px 5px rgba(0,0,0,0.4);
      transition: all 0.1s ease;
    }

    .led-patch-btn:hover {
      background: linear-gradient(180deg, #fffae8 0%, #e6dfc7 100%);
    }

    .led-preset-btn {
      background: linear-gradient(180deg, #f0ebd9 0%, #dbd4bf 100%);
      border: 2px solid #635f52;
      border-radius: 4px;
      padding: 6px 14px;
      font-family: 'VT323', monospace;
      font-size: 1.3rem;
      font-weight: bold;
      color: #2b271d;
      cursor: pointer;
      text-transform: uppercase;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 3px 5px rgba(0,0,0,0.4);
      transition: all 0.1s ease;
    }

    .led-preset-btn:hover {
      background: linear-gradient(180deg, #fffae8 0%, #e6dfc7 100%);
    }

    .led-search-box {
      flex: 1;
      position: relative;
      min-width: 140px;
    }

    .led-search-input {
      width: 100%;
      background: transparent;
      border: none;
      color: #ff5d00;
      font-family: 'VT323', monospace;
      font-size: 1.8rem;
      letter-spacing: 0.05em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 6px rgba(255, 93, 0, 0.7);
      padding: 0 24px 0 4px;
      box-sizing: border-box;
    }

    .led-search-input::placeholder {
      color: #ff5d0044;
      text-shadow: none;
    }

    .led-search-icon {
      position: absolute;
      right: 4px;
      top: calc(50% - 10px);
      width: 20px;
      height: 20px;
      fill: #ff5d00;
      filter: drop-shadow(0 0 3px rgba(255, 93, 0, 0.7));
      pointer-events: none;
    }

    .search-toggle-btn {
      width: 20px;
      height: 20px;
      background: #2b1f1d;
      border: 2px solid #523c39;
      border-radius: 4px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(0,0,0,0.4);
      position: relative;
    }

    .search-toggle-btn.active {
      background: #ff5d00;
      border-color: #ffa166;
      box-shadow: 0 0 10px #ff5d00;
    }

    .search-toggle-label {
      font-size: 0.55rem;
      font-weight: bold;
      color: #8c8e94;
      text-transform: uppercase;
    }

    .led-notes {
      font-size: 0.8rem;
      line-height: 1.3;
      color: #dfd0bb;
      min-height: 2.2rem;
    }

    .led-counts {
      font-family: 'VT323', monospace;
      font-size: 1rem;
      color: #ff5d00aa;
      text-align: right;
      letter-spacing: 0.05em;
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
      color: #8c8e94;
      text-transform: uppercase;
      height: 12px;
      display: flex;
      align-items: center;
    }

    .waveform-led {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: #2b1b18;
      border: 1px solid #4a3633;
    }

    .waveform-led.active {
      background: #ff5d00;
      border-color: #ffa166;
      box-shadow: 0 0 8px #ff5d00, 0 0 12px #ff5d00;
    }

    .btn-beige {
      width: 32px;
      height: 32px;
      background: linear-gradient(180deg, #f0ebd9 0%, #dbd4bf 100%);
      border: 2px solid #5a574c;
      border-radius: 4px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.6), 0 3px 5px rgba(0,0,0,0.5);
      cursor: pointer;
    }

    .btn-beige.active {
      background: linear-gradient(180deg, #ffffff 0%, #eae4cf 100%);
      box-shadow: inset 0 2px 4px rgba(0,0,0,0.3), 0 1px 1px rgba(255,255,255,0.2);
    }

    .btn-orange {
      width: 32px;
      height: 32px;
      background: linear-gradient(180deg, #d3692d 0%, #b84c14 100%);
      border: 2px solid #5e311a;
      border-radius: 4px;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.4), 0 3px 5px rgba(0,0,0,0.5);
      cursor: pointer;
    }

    .btn-orange.active {
      background: linear-gradient(180deg, #ff7b36 0%, #ff5d00 100%);
      border-color: #ff9152;
      box-shadow: 0 0 12px #ff5d00, inset 0 1px 0 rgba(255,255,255,0.5);
    }

    /* Chorus panel specific elements */
    .chorus-panel-grid {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      width: 100%;
      box-sizing: border-box;
      gap: 12px;
    }

    .chorus-section {
      display: flex;
      align-items: center;
      gap: 12px;
      justify-content: center;
    }

    .chorus-section:not(:last-child) {
      border-right: 1px solid #232429;
      padding-right: 16px;
    }

    .chorus-picker {
      display: flex;
      gap: 8px;
    }

    .chorus-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
    }

    .chorus-button span {
      font-size: 0.55rem;
      font-weight: bold;
      color: #8c8e94;
    }

    .chorus-led {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #2b1f1a;
    }

    .chorus-led.active {
      background: #ff5d00;
      box-shadow: 0 0 6px #ff5d00;
    }



    /* Modals & Overlays */
    .modal-backdrop {
      position: fixed;
      top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.75);
      backdrop-filter: blur(4px);
      z-index: 2000;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 20px;
    }

    .preset-dropdown-container {
      width: 100%;
      max-width: 500px;
    }

    .retro-modal {
      background: #141518;
      border: 3px solid #3c3d42;
      border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9);
      width: 100%;
      max-width: 550px;
      overflow: hidden;
      font-family: 'Inter', sans-serif;
    }

    .modal-header {
      background: linear-gradient(180deg, #be3127 0%, #9e241c 100%);
      padding: 10px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 2px solid #751a14;
    }

    .modal-title {
      font-size: 0.8rem;
      font-weight: bold;
      color: #fff;
      letter-spacing: 0.08em;
    }

    .close-btn {
      background: transparent;
      border: none;
      color: #fff;
      font-size: 1.4rem;
      cursor: pointer;
      line-height: 1;
    }

    .modal-body {
      padding: 20px;
    }

    .modal-body.text-content h3 {
      margin-top: 0;
      color: #ff5d00;
    }

    .modal-body.text-content p {
      line-height: 1.5;
      font-size: 0.9rem;
      color: #b2b4b8;
    }

    .modal-body.text-content a {
      color: #ff5d00;
      text-decoration: none;
    }

    .modal-body.text-content a:hover {
      text-decoration: underline;
    }

    .filter-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 16px;
    }

    .filter-group {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .filter-group label {
      font-size: 0.75rem;
      font-weight: bold;
      color: #8c8e94;
      text-transform: uppercase;
    }

    .filter-select {
      background: #0c0c0e;
      border: 2px solid #2e3037;
      color: #e2e2e4;
      border-radius: 4px;
      padding: 8px;
      font-size: 0.85rem;
      outline: none;
    }

    .modal-footer {
      background: #0f1012;
      padding: 12px 16px;
      display: flex;
      justify-content: flex-end;
      gap: 12px;
      border-top: 1px solid #1f2025;
    }

    .retro-btn {
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 2px solid #5a5c62;
      color: #e2e2e4;
      font-size: 0.7rem;
      font-weight: bold;
      padding: 6px 12px;
      border-radius: 4px;
      cursor: pointer;
      text-transform: uppercase;
    }

    .retro-btn:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }

    .retro-btn.accent {
      background: linear-gradient(180deg, #d3692d 0%, #b84c14 100%);
      border-color: #5e311a;
      color: #fff;
    }

    .retro-btn.accent:hover {
      background: linear-gradient(180deg, #ff7b36 0%, #ff5d00 100%);
    }

    /* Attribution footer text inside synth faceplate bottom */
    .synth-footer {
      padding: 16px 24px;
      background: #0d0d10;
      border-top: 3px solid #1a1b1f;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75rem;
      color: #6a6b72;
    }

    .synth-footer a {
      color: #ff5d00;
      text-decoration: none;
    }

    .synth-footer a:hover {
      text-decoration: underline;
    }

    /* Mobile vertical layout queries */
    @media (max-width: 768px) {
      :host {
        padding: 8px;
      }
      .synth-container {
        border-width: 2px;
      }
      .roland-logo {
        font-size: 1.6rem;
      }
      .juno-logo {
        font-size: 2rem;
      }
      .synth-grid {
        display: flex;
        flex-direction: column;
        gap: 12px;
      }
      .grid-right {
        display: grid;
        grid-template-columns: 1fr;
        gap: 12px;
      }
      /* side-by-side for envelope and filter on mobile as in Image 2 */
      .grid-right-mobile-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 12px;
      }
      .panel-content {
        padding: 10px;
        gap: 8px;
      }
      .waveform-picker {
        overflow-x: auto;
        padding-bottom: 4px;
        width: 100%;
        justify-content: flex-start;
      }
      .chorus-panel-grid {
        flex-direction: column;
        gap: 20px;
        padding: 8px 0;
      }
      .chorus-section {
        width: 100%;
      }
      .chorus-section:not(:last-child) {
        border-right: none;
        padding-right: 0;
        border-bottom: 1px solid #232429;
        padding-bottom: 16px;
      }
    }
  `;b([v()],g.prototype,"selectedPreset",2);b([v()],g.prototype,"searchQuery",2);b([v()],g.prototype,"activeGenreMood",2);b([v()],g.prototype,"activeInstrumentType",2);b([v()],g.prototype,"activeCharacter",2);b([v()],g.prototype,"activeEnvelope",2);b([v()],g.prototype,"activeEffects",2);b([v()],g.prototype,"activeWaveform",2);b([v()],g.prototype,"presetListOpen",2);b([v()],g.prototype,"filtersOpen",2);b([v()],g.prototype,"aboutOpen",2);b([v()],g.prototype,"searchOn",2);b([v()],g.prototype,"isEdited",2);b([v()],g.prototype,"customValues",2);g=b([ye("j6-app")],g);
