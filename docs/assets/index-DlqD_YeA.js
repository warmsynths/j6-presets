(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,J=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),se=new WeakMap;let fe=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const a=t!==void 0&&t.length===1;a&&(e=se.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&se.set(t,e))}return e}toString(){return this.cssText}};const we=s=>new fe(typeof s=="string"?s:s+"",void 0,K),ge=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((a,i,o)=>a+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+s[o+1],s[0]);return new fe(t,s,K)},Me=(s,e)=>{if(J)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const a=document.createElement("style"),i=D.litNonce;i!==void 0&&a.setAttribute("nonce",i),a.textContent=t.cssText,s.appendChild(a)}},ae=J?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return we(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ke,defineProperty:_e,getOwnPropertyDescriptor:Se,getOwnPropertyNames:Fe,getOwnPropertySymbols:Ee,getPrototypeOf:He}=Object,M=globalThis,ie=M.trustedTypes,Le=ie?ie.emptyScript:"",B=M.reactiveElementPolyfillSupport,I=(s,e)=>s,W={toAttribute(s,e){switch(e){case Boolean:s=s?Le:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Z=(s,e)=>!ke(s,e),oe={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=oe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),i=this.getPropertyDescriptor(e,a,t);i!==void 0&&_e(this.prototype,e,i)}}static getPropertyDescriptor(e,t,a){const{get:i,set:o}=Se(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};return{get:i,set(n){const l=i==null?void 0:i.call(this);o==null||o.call(this,n),this.requestUpdate(e,l,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??oe}static _$Ei(){if(this.hasOwnProperty(I("elementProperties")))return;const e=He(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(I("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(I("properties"))){const t=this.properties,a=[...Fe(t),...Ee(t)];for(const i of a)this.createProperty(i,t[i])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[a,i]of t)this.elementProperties.set(a,i)}this._$Eh=new Map;for(const[t,a]of this.elementProperties){const i=this._$Eu(t,a);i!==void 0&&this._$Eh.set(i,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const i of a)t.unshift(ae(i))}else e!==void 0&&t.push(ae(e));return t}static _$Eu(e,t){const a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostConnected)==null?void 0:a.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostDisconnected)==null?void 0:a.call(t)})}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){var o;const a=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,a);if(i!==void 0&&a.reflect===!0){const n=(((o=a.converter)==null?void 0:o.toAttribute)!==void 0?a.converter:W).toAttribute(t,a.type);this._$Em=e,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(e,t){var o,n;const a=this.constructor,i=a._$Eh.get(e);if(i!==void 0&&this._$Em!==i){const l=a.getPropertyOptions(i),r=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:W;this._$Em=i;const d=r.fromAttribute(t,l.type);this[i]=d??((n=this._$Ej)==null?void 0:n.get(i))??d,this._$Em=null}}requestUpdate(e,t,a,i=!1,o){var n;if(e!==void 0){const l=this.constructor;if(i===!1&&(o=this[e]),a??(a=l.getPropertyOptions(e)),!((a.hasChanged??Z)(o,t)||a.useDefault&&a.reflect&&o===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(l._$Eu(e,a))))return;this.C(e,t,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:i,wrapped:o},n){a&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,n??t??this[e]),o!==!0||n!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),i===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[o,n]of i){const{wrapped:l}=n,r=this[o];l!==!0||this._$AL.has(o)||r===void 0||this.C(o,void 0,n,r)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(a=this._$EO)==null||a.forEach(i=>{var o;return(o=i.hostUpdate)==null?void 0:o.call(i)}),this.update(t)):this._$EM()}catch(i){throw e=!1,this._$EM(),i}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(a=>{var i;return(i=a.hostUpdated)==null?void 0:i.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[I("elementProperties")]=new Map,E[I("finalized")]=new Map,B==null||B({ReactiveElement:E}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const A=globalThis,ne=s=>s,Y=A.trustedTypes,re=Y?Y.createPolicy("lit-html",{createHTML:s=>s}):void 0,ve="$lit$",w=`lit$${Math.random().toFixed(9).slice(2)}$`,be="?"+w,$e=`<${be}>`,F=document,C=()=>F.createComment(""),N=s=>s===null||typeof s!="object"&&typeof s!="function",X=Array.isArray,Pe=s=>X(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",U=`[ 	
\f\r]`,O=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,de=/>/g,k=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ce=/'/g,pe=/"/g,xe=/^(?:script|style|textarea|title)$/i,Oe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),x=Oe(1),L=Symbol.for("lit-noChange"),f=Symbol.for("lit-nothing"),he=new WeakMap,_=F.createTreeWalker(F,129);function me(s,e){if(!X(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(e):e}const Ie=(s,e)=>{const t=s.length-1,a=[];let i,o=e===2?"<svg>":e===3?"<math>":"",n=O;for(let l=0;l<t;l++){const r=s[l];let d,c,p=-1,m=0;for(;m<r.length&&(n.lastIndex=m,c=n.exec(r),c!==null);)m=n.lastIndex,n===O?c[1]==="!--"?n=le:c[1]!==void 0?n=de:c[2]!==void 0?(xe.test(c[2])&&(i=RegExp("</"+c[2],"g")),n=k):c[3]!==void 0&&(n=k):n===k?c[0]===">"?(n=i??O,p=-1):c[1]===void 0?p=-2:(p=n.lastIndex-c[2].length,d=c[1],n=c[3]===void 0?k:c[3]==='"'?pe:ce):n===pe||n===ce?n=k:n===le||n===de?n=O:(n=k,i=void 0);const y=n===k&&s[l+1].startsWith("/>")?" ":"";o+=n===O?r+$e:p>=0?(a.push(d),r.slice(0,p)+ve+r.slice(p)+w+y):r+w+(p===-2?l:y)}return[me(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class T{constructor({strings:e,_$litType$:t},a){let i;this.parts=[];let o=0,n=0;const l=e.length-1,r=this.parts,[d,c]=Ie(e,t);if(this.el=T.createElement(d,a),_.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=_.nextNode())!==null&&r.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(ve)){const m=c[n++],y=i.getAttribute(p).split(w),u=/([.?@])?(.*)/.exec(m);r.push({type:1,index:o,name:u[2],strings:y,ctor:u[1]==="."?Ce:u[1]==="?"?Ne:u[1]==="@"?Te:V}),i.removeAttribute(p)}else p.startsWith(w)&&(r.push({type:6,index:o}),i.removeAttribute(p));if(xe.test(i.tagName)){const p=i.textContent.split(w),m=p.length-1;if(m>0){i.textContent=Y?Y.emptyScript:"";for(let y=0;y<m;y++)i.append(p[y],C()),_.nextNode(),r.push({type:2,index:++o});i.append(p[m],C())}}}else if(i.nodeType===8)if(i.data===be)r.push({type:2,index:o});else{let p=-1;for(;(p=i.data.indexOf(w,p+1))!==-1;)r.push({type:7,index:o}),p+=w.length-1}o++}}static createElement(e,t){const a=F.createElement("template");return a.innerHTML=e,a}}function $(s,e,t=s,a){var n,l;if(e===L)return e;let i=a!==void 0?(n=t._$Co)==null?void 0:n[a]:t._$Cl;const o=N(e)?void 0:e._$litDirective$;return(i==null?void 0:i.constructor)!==o&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),o===void 0?i=void 0:(i=new o(s),i._$AT(s,t,a)),a!==void 0?(t._$Co??(t._$Co=[]))[a]=i:t._$Cl=i),i!==void 0&&(e=$(s,i._$AS(s,e.values),i,a)),e}class Ae{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,i=((e==null?void 0:e.creationScope)??F).importNode(t,!0);_.currentNode=i;let o=_.nextNode(),n=0,l=0,r=a[0];for(;r!==void 0;){if(n===r.index){let d;r.type===2?d=new R(o,o.nextSibling,this,e):r.type===1?d=new r.ctor(o,r.name,r.strings,this,e):r.type===6&&(d=new qe(o,this,e)),this._$AV.push(d),r=a[++l]}n!==(r==null?void 0:r.index)&&(o=_.nextNode(),n++)}return _.currentNode=F,i}p(e){let t=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class R{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,a,i){this.type=2,this._$AH=f,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=$(this,e,t),N(e)?e===f||e==null||e===""?(this._$AH!==f&&this._$AR(),this._$AH=f):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Pe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==f&&N(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:a}=e,i=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=T.createElement(me(a.h,a.h[0]),this.options)),a);if(((o=this._$AH)==null?void 0:o._$AD)===i)this._$AH.p(t);else{const n=new Ae(i,this),l=n.u(this.options);n.p(t),this.T(l),this._$AH=n}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new T(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,i=0;for(const o of e)i===t.length?t.push(a=new R(this.O(C()),this.O(C()),this,this.options)):a=t[i],a._$AI(o),i++;i<t.length&&(this._$AR(a&&a._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,t);e!==this._$AB;){const i=ne(e).nextSibling;ne(e).remove(),e=i}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,i,o){this.type=1,this._$AH=f,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=o,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=f}_$AI(e,t=this,a,i){const o=this.strings;let n=!1;if(o===void 0)e=$(this,e,t,0),n=!N(e)||e!==this._$AH&&e!==L,n&&(this._$AH=e);else{const l=e;let r,d;for(e=o[0],r=0;r<o.length-1;r++)d=$(this,l[a+r],t,r),d===L&&(d=this._$AH[r]),n||(n=!N(d)||d!==this._$AH[r]),d===f?e=f:e!==f&&(e+=(d??"")+o[r+1]),this._$AH[r]=d}n&&!i&&this.j(e)}j(e){e===f?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ce extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===f?void 0:e}}class Ne extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==f)}}class Te extends V{constructor(e,t,a,i,o){super(e,t,a,i,o),this.type=5}_$AI(e,t=this){if((e=$(this,e,t,0)??f)===L)return;const a=this._$AH,i=e===f&&a!==f||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==f&&(a===f||i);i&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class qe{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){$(this,e)}}const z=A.litHtmlPolyfillSupport;z==null||z(T,R),(A.litHtmlVersions??(A.litHtmlVersions=[])).push("3.3.3");const Re=(s,e,t)=>{const a=(t==null?void 0:t.renderBefore)??e;let i=a._$litPart$;if(i===void 0){const o=(t==null?void 0:t.renderBefore)??null;a._$litPart$=i=new R(e.insertBefore(C(),o),o,void 0,t??{})}return i._$AI(s),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;class H extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Re(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return L}}var ue;H._$litElement$=!0,H.finalized=!0,(ue=S.litElementHydrateSupport)==null||ue.call(S,{LitElement:H});const G=S.litElementPolyfillSupport;G==null||G({LitElement:H});(S.litElementVersions??(S.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const De={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:Z},We=(s=De,e,t)=>{const{kind:a,metadata:i}=t;let o=globalThis.litPropertyMetadata.get(i);if(o===void 0&&globalThis.litPropertyMetadata.set(i,o=new Map),a==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),a==="accessor"){const{name:n}=t;return{set(l){const r=e.get.call(this);e.set.call(this,l),this.requestUpdate(n,r,s,!0,l)},init(l){return l!==void 0&&this.C(n,void 0,s,l),l}}}if(a==="setter"){const{name:n}=t;return function(l){const r=this[n];e.call(this,l),this.requestUpdate(n,r,s,!0,l)}}throw Error("Unsupported decorator location: "+a)};function ee(s){return(e,t)=>typeof t=="object"?We(s,e,t):((a,i,o)=>{const n=i.hasOwnProperty(o);return i.constructor.createProperty(o,a),n?Object.getOwnPropertyDescriptor(i,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function b(s){return ee({...s,state:!0,attribute:!1})}const Ye=[{blank:"",preset:"1 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"I",notes_description:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",bankPatch:"1-1",soundNameCategory:"Mellow Sub Octave Pluck",notesDescription:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Low (Low -> Mid)",r:"None",blank_3:"Off",notes_description:"Square Pluck:",bankPatch:"1-2",soundNameCategory:"Square Pluck",notesDescription:"Square Pluck:",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Low (Low -> Mid)",release:"None",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 3",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Mellow Mallet: Sustains once Envelope control is past 50%",bankPatch:"1-3",soundNameCategory:"Mellow Mallet",notesDescription:"Mellow Mallet: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 4",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"High",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-4",soundNameCategory:"Noisy Mellow Pluck",notesDescription:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 5",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-5",soundNameCategory:"Noisy Octave Pluck",notesDescription:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 6",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"Mid",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"Off",notes_description:"Harpsichord: Sustains + PWM once Envelope control is past 50%",bankPatch:"1-6",soundNameCategory:"Harpsichord",notesDescription:"Harpsichord: Sustains + PWM once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"1 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"15%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"I",notes_description:"Chorus Clavinet: Sustains once Envelope control is past 50%",bankPatch:"1-7",soundNameCategory:"Chorus Clavinet",notesDescription:"Chorus Clavinet: Sustains once Envelope control is past 50%",waveformOscType:"Fixed + Sub 15%",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Chorus Harp: Mild Sustain once Envelope control is past 50%",bankPatch:"1-8",soundNameCategory:"Chorus Harp",notesDescription:"Chorus Harp: Mild Sustain once Envelope control is past 50%",waveformOscType:"Sub 100% + Square",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 1",glide:"x",octave:"+1",rate:"1/8th",delay:"x",lfo:"x",pwm:"LFO*",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",bankPatch:"2-1",soundNameCategory:"Staccato Steel Drum",notesDescription:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Low",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",bankPatch:"2-2",soundNameCategory:"Bright Detuned Saw Pluck",notesDescription:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",waveformOscType:"Saw",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",bankPatch:"2-3",soundNameCategory:"Synthy 80s Clean Guitar",notesDescription:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 4",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"II",notes_description:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",bankPatch:"2-4",soundNameCategory:"Gliding Noisy Pluck",notesDescription:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> Mid)",r:"Fast",blank_3:"II",notes_description:"Octave Splash: Mild Sustain once Envelope control is past 50%",bankPatch:"2-5",soundNameCategory:"Octave Splash",notesDescription:"Octave Splash: Mild Sustain once Envelope control is past 50%",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> Mid)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 6",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"Mid",blank_2:"Y",freq:"Mid",res:"High",env:"+ Mid",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Plectrum Wind:",bankPatch:"2-6",soundNameCategory:"Plectrum Wind",notesDescription:"Plectrum Wind:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"High",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"II",notes_description:"Plectrum Mellotron Chorus:",bankPatch:"2-7",soundNameCategory:"Plectrum Mellotron Chorus",notesDescription:"Plectrum Mellotron Chorus:",waveformOscType:"Sub 100% + Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"2 - 8",glide:"x",octave:"0",rate:"Fast",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Air Harp:",bankPatch:"2-8",soundNameCategory:"Air Harp",notesDescription:"Air Harp:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"Y"},{blank:"",preset:"3 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Slow",s_control_range:"Low (Low -> High)",r:"Slow",blank_3:"I",notes_description:"Ambient Piano:",bankPatch:"3-1",soundNameCategory:"Ambient Piano",notesDescription:"Ambient Piano:",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"None",decay:"Slow",sustain:"Low (Low -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"Off",notes_description:"Synth Vibraphone:",bankPatch:"3-2",soundNameCategory:"Synth Vibraphone",notesDescription:"Synth Vibraphone:",waveformOscType:"Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Hammered Dulcimar:",bankPatch:"3-3",soundNameCategory:"Hammered Dulcimar",notesDescription:"Hammered Dulcimar:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"3 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"I",notes_description:"Saw Piano:",bankPatch:"3-4",soundNameCategory:"Saw Piano",notesDescription:"Saw Piano:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"Fast",d:"Mid",s_control_range:"Mid (Low -> High)",r:"None",blank_3:"I",notes_description:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",bankPatch:"3-5",soundNameCategory:"Brass Pluck",notesDescription:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"Mid (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 6",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Resonant Blown Glass:",bankPatch:"3-6",soundNameCategory:"Resonant Blown Glass",notesDescription:"Resonant Blown Glass:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",bankPatch:"3-7",soundNameCategory:"Acid Saw",notesDescription:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 8",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",bankPatch:"3-8",soundNameCategory:"Bright Trumpet",notesDescription:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",waveformOscType:"Saw + Low",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"4 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"II",notes_description:"Octave PWM Lead:",bankPatch:"4-1",soundNameCategory:"Octave PWM Lead",notesDescription:"Octave PWM Lead:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 2",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"x",lfo_2:"High",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"I",notes_description:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",bankPatch:"4-2",soundNameCategory:"Gliding Pulse Lead I",notesDescription:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",waveformOscType:"Fixed + Sub 25%",filterFreq:"High",resonance:"High",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"4 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Slow PWM Lead:",bankPatch:"4-3",soundNameCategory:"Slow PWM Lead",notesDescription:"Slow PWM Lead:",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"High",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Vibrato Saw Lead:",bankPatch:"4-4",soundNameCategory:"Vibrato Saw Lead",notesDescription:"Vibrato Saw Lead:",waveformOscType:"Saw + High",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 5",glide:"Mid",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"II",notes_description:"Gliding Pluse Lead II:",bankPatch:"4-5",soundNameCategory:"Gliding Pluse Lead II",notesDescription:"Gliding Pluse Lead II:",waveformOscType:"Fixed + Sub 25% + Low",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 6",glide:"x",octave:"",rate:"Fast",delay:"Y",lfo:"Mid",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Dirty Strings:",bankPatch:"4-6",soundNameCategory:"Octave Dirty Strings",notesDescription:"Octave Dirty Strings:",waveformOscType:"Saw + Fixed + Sub 25% + Mid",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Mixed Lead:",bankPatch:"4-7",soundNameCategory:"Octave Mixed Lead",notesDescription:"Octave Mixed Lead:",waveformOscType:"Saw + Fixed + Sub 25%",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"Low",blank_2:"Y",freq:"High",res:"High",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Blown Octave Square:",bankPatch:"4-8",soundNameCategory:"Blown Octave Square",notesDescription:"Blown Octave Square:",waveformOscType:"Sub 100% + Square",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 1",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"I",notes_description:"Thick Attack Lead:",bankPatch:"5-1",soundNameCategory:"Thick Attack Lead",notesDescription:"Thick Attack Lead:",waveformOscType:"Saw + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"5 - 2",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"Off",notes_description:"The Fake Slim Shady:",bankPatch:"5-2",soundNameCategory:"The Fake Slim Shady",notesDescription:"The Fake Slim Shady:",waveformOscType:"Saw + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"Low",blank_2:"Y",freq:"Mid",res:"High",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Ya-ee Choir:",bankPatch:"5-3",soundNameCategory:"Ya-ee Choir",notesDescription:"Ya-ee Choir:",waveformOscType:"Saw + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Dark Strings:",bankPatch:"5-4",soundNameCategory:"Dark Strings",notesDescription:"Dark Strings:",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 5",glide:"Slow",octave:"+1",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Angry Cat: Gliding noisy lead with fast filter modulation",bankPatch:"5-5",soundNameCategory:"Angry Cat",notesDescription:"Angry Cat: Gliding noisy lead with fast filter modulation",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 6",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Choir:",bankPatch:"5-6",soundNameCategory:"Brass Choir",notesDescription:"Brass Choir:",waveformOscType:"LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 7",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Whoa Flute:",bankPatch:"5-7",soundNameCategory:"Whoa Flute",notesDescription:"Whoa Flute:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 8",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"II",notes_description:"Honky Tonk Clav: (Great bass sounds)",bankPatch:"5-8",soundNameCategory:"Honky Tonk Clav",notesDescription:"Honky Tonk Clav: (Great bass sounds)",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"I",notes_description:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-1",soundNameCategory:"PWM Envelope",notesDescription:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Env + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 2",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Mid",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"Off",notes_description:"Solo String:",bankPatch:"6-2",soundNameCategory:"Solo String",notesDescription:"Solo String:",waveformOscType:"Saw + Mid",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 3",glide:"x",octave:"0",rate:"Max",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Square Ring Mod:",bankPatch:"6-3",soundNameCategory:"Square Ring Mod",notesDescription:"Square Ring Mod:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Low -> High)",r:"Fast",blank_3:"Off",notes_description:"Mellow Trumpet:",bankPatch:"6-4",soundNameCategory:"Mellow Trumpet",notesDescription:"Mellow Trumpet:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Low -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 5",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Horn:",bankPatch:"6-5",soundNameCategory:"Horn",notesDescription:"Horn:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 6",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"I",notes_description:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-6",soundNameCategory:"Square Chorus Lead",notesDescription:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Clarinet:",bankPatch:"6-7",soundNameCategory:"Clarinet",notesDescription:"Clarinet:",waveformOscType:"Square + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 8",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"x",sub:"x",noise:"High",blank_2:"Y",freq:"Tuned*",res:"Max*",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",bankPatch:"6-8",soundNameCategory:"Ocarina",notesDescription:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",waveformOscType:"Unknown",filterFreq:"Tuned*",resonance:"Max*",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"7 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"PWM String Ensemble I:",bankPatch:"7-1",soundNameCategory:"PWM String Ensemble I",notesDescription:"PWM String Ensemble I:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 2",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"Saw String Ensemble:",bankPatch:"7-2",soundNameCategory:"Saw String Ensemble",notesDescription:"Saw String Ensemble:",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 3",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Ensemble:",bankPatch:"7-3",soundNameCategory:"Brass Ensemble",notesDescription:"Brass Ensemble:",waveformOscType:"Saw + Sub 100% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 4",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"PWM String Ensemble II:",bankPatch:"7-4",soundNameCategory:"PWM String Ensemble II",notesDescription:"PWM String Ensemble II:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 5",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"25%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Ghost Pad: (Open filter for Noisy String Ensemble)",bankPatch:"7-5",soundNameCategory:"Ghost Pad",notesDescription:"Ghost Pad: (Open filter for Noisy String Ensemble)",waveformOscType:"Saw + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Mid",decay:"Mid",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"7 - 6",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"- Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad I (Bright):",bankPatch:"7-6",soundNameCategory:"Evolving Filter Pad I (Bright)",notesDescription:"Evolving Filter Pad I (Bright):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Low",envMod:"- Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad II (Mellow):",bankPatch:"7-7",soundNameCategory:"Evolving Filter Pad II (Mellow)",notesDescription:"Evolving Filter Pad II (Mellow):",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 8",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad III (Mellow Slow and Wide):",bankPatch:"7-8",soundNameCategory:"Evolving Filter Pad III (Mellow Slow and Wide)",notesDescription:"Evolving Filter Pad III (Mellow Slow and Wide):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Mid",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 1",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"50%",noise:"Low",blank_2:"x",freq:"Mid",res:"High",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad IV (Bright Slow and Wide):",bankPatch:"8-1",soundNameCategory:"Evolving Filter Pad IV (Bright Slow and Wide)",notesDescription:"Evolving Filter Pad IV (Bright Slow and Wide):",waveformOscType:"Sub 50% + Fixed + Sub 20%",filterFreq:"Mid",resonance:"High",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 2",glide:"Mid",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad V (Squishy I):",bankPatch:"8-2",soundNameCategory:"Evolving Filter Pad V (Squishy I)",notesDescription:"Evolving Filter Pad V (Squishy I):",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 3",glide:"x",octave:"0",rate:"Slow",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Evolving Filter Pad VI (Squishy II):",bankPatch:"8-3",soundNameCategory:"Evolving Filter Pad VI (Squishy II)",notesDescription:"Evolving Filter Pad VI (Squishy II):",waveformOscType:"Fixed + Sub 20%",filterFreq:"High",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 4",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Low",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad VII (Blossoming I):",bankPatch:"8-4",soundNameCategory:"Evolving Filter Pad VII (Blossoming I)",notesDescription:"Evolving Filter Pad VII (Blossoming I):",waveformOscType:"Saw + Sub 50%",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"Slow",decay:"Mid",sustain:"High (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Evolving Filter Pad VII (Blossoming II):",bankPatch:"8-5",soundNameCategory:"Evolving Filter Pad VII (Blossoming II)",notesDescription:"Evolving Filter Pad VII (Blossoming II):",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Slow",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"8 - 6",glide:"x",octave:"+1",rate:"Fast",delay:"Y",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Slow",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"I",notes_description:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",bankPatch:"8-6",soundNameCategory:"Decaying Filter Pad (Blossoming III)",notesDescription:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Slow",sustain:"Off (Off -> High)",release:"Fast",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"High",env:"+ Low",lfo_2:"High*",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",bankPatch:"8-7",soundNameCategory:"Sample and Hold Pad",notesDescription:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",waveformOscType:"Saw + Sub 100%",filterFreq:"Low",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 8",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"Slow",blank_3:"II",notes_description:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",bankPatch:"8-8",soundNameCategory:"Plectrum Tremolo Pad",notesDescription:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"Slow",chorus:"II",delayReverb:"x"}],Ve=[[/deadmau5/i,["Progressive House","EDM"]],[/avicii/i,["Melodic EDM","Pop"]],[/chiptune/i,["Chiptune","Retro"]],[/lo[- ]?fi/i,["Lo-Fi"]],[/house/i,["House"]],[/trance/i,["Trance"]],[/dance/i,["Dance"]],[/ambient/i,["Ambient"]],[/juno/i,["Vintage","Analog"]],[/303/i,["Acid","Bassline"]],[/bass/i,["Bass"]],[/brass/i,["Brass"]],[/organ/i,["Organ"]],[/strings/i,["Strings"]],[/piano/i,["Piano"]],[/pad/i,["Pad"]],[/lead/i,["Lead"]],[/pluck/i,["Pluck"]],[/synth/i,["Synth"]],[/noise/i,["Noise"]],[/bell/i,["Bell"]],[/vintage/i,["Vintage"]],[/metallic/i,["Metallic"]],[/dark/i,["Dark"]],[/bright/i,["Bright"]],[/soft/i,["Soft"]],[/aggressive/i,["Aggressive"]],[/hyper pop/i,["Hyperpop"]],[/rock/i,["Rock"]],[/house music/i,["House"]],[/deep house/i,["Deep House"]],[/hip hop/i,["Hip Hop"]],[/rnb/i,["R&B"]],[/sci-fi/i,["Sci-Fi"]],[/industrial/i,["Industrial"]],[/noise style/i,["Noise"]],[/soundtrack/i,["Soundtrack"]]];function h(s,e){Array.isArray(e)?e.forEach(t=>t&&s.add(t)):e&&s.add(e)}function Be(s){const e=new Set,t=s.notesDescription||"",a=(s.soundNameCategory||"").toLowerCase(),i=/\(([^)]+)\)/g;let o;for(;(o=i.exec(t))!==null;){const r=o[1].trim();r&&(/^good for\s+/i.test(r)||h(e,r))}Ve.forEach(([r,d])=>{(r.test(t)||r.test(a))&&h(e,d)}),[[/pad/i,"Pad"],[/lead/i,"Lead"],[/bass/i,"Bass"],[/keys/i,"Keys"],[/organ/i,"Organ"],[/piano/i,"Piano"],[/pluck/i,"Pluck"],[/brass/i,"Brass"],[/strings/i,"Strings"],[/bell/i,"Bell"],[/whistle/i,"Whistle"],[/clav/i,"Clav"],[/synth/i,"Synth"]].forEach(([r,d])=>{s.soundNameCategory&&r.test(s.soundNameCategory)&&h(e,d)});const l=(s.waveformOscType||"").toLowerCase();return l.includes("saw")&&h(e,"Saw"),l.includes("square")&&h(e,"Square"),l.includes("sub")&&h(e,"Sub"),l.includes("noise")&&h(e,"Noise"),l.includes("triangle")&&h(e,"Triangle"),l.includes("sync")&&h(e,"Sync"),l.includes("pwm")&&h(e,"PWM"),(l.includes("cross-mod")||l.includes("cross mod"))&&h(e,"Cross-Mod"),s.filterFreq==="High"&&h(e,"Bright"),s.filterFreq==="Low"&&h(e,"Dark"),s.resonance==="High"&&h(e,"Resonant"),s.resonance==="Low"&&h(e,"Smooth"),s.attack==="Fast"&&h(e,"Sharp Attack"),s.attack==="Slow"&&h(e,"Slow Attack"),s.release==="Slow"&&h(e,"Long Release"),s.release==="Fast"&&h(e,"Snappy Release"),s.sustain==="Max"&&h(e,"Sustained"),s.chorus&&s.chorus!=="Off"&&h(e,s.chorus),s.delayReverb&&s.delayReverb!=="Off"&&h(e,s.delayReverb),Array.from(e)}function Ue(s){const e=s.toLowerCase();return/^(progressive house|edm|melodic edm|pop|chiptune|retro|lo-fi|house|trance|dance|ambient|acid|bassline|hip hop|r&b|sci-fi|industrial|soundtrack|hyperpop|rock|vintage|analog)$/.test(e)?"Genre / Mood":/^(pad|lead|bass|keys|organ|piano|pluck|brass|strings|bell|whistle|clav|synth)$/.test(e)?"Instrument / Type":/^(bright|dark|soft|aggressive|metallic|noise|smooth|resonant|sustained)$/.test(e)?"Character":/^(sharp attack|slow attack|long release|snappy release)$/.test(e)?"Envelope":/^(chorus|reverb|delay|chorus \d|reverb \d|delay \d)$/.test(e)?"Effects":/^(saw|square|sub|triangle|sync|pwm|cross-mod)$/.test(e)?"Waveform":"Other"}function j(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("none")||e==="x"?0:e.includes("fast")?20:e.includes("mid")||e.includes("med")?60:e.includes("slow")?100:0}function ze(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("off")||e==="x"?0:e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")||e.includes("max")?100:0}function Ge(s){if(!s)return 50;const e=s.toLowerCase().trim();return e.includes("low")?15:e.includes("mid")||e.includes("med")?55:e.includes("high")?85:e.includes("tuned")?70:50}function je(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("low")?10:e.includes("mid")||e.includes("med")?45:e.includes("high")?80:e.includes("max")?100:0}function Qe(s){if(!s||s==="x")return 50;const e=s.toLowerCase().trim();return e.includes("- med")||e.includes("- high")?15:e.includes("- low")?35:e.includes("+ low")?65:e.includes("+ mid")||e.includes("+ med")?80:e.includes("+ high")?95:50}function Je(s){if(!s||s==="x")return 0;const e=s.toLowerCase().trim();return e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")?100:0}function Ke(s){if(!s||s==="x")return 0;const e=s.toLowerCase().trim();return e.includes("fixed")?30:e.includes("env")?50:e.includes("lfo")?85:0}var Ze=Object.defineProperty,Xe=Object.getOwnPropertyDescriptor,te=(s,e,t,a)=>{for(var i=a>1?void 0:a?Xe(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(a?n(e,t,i):n(i))||i);return a&&i&&Ze(e,t,i),i};let q=class extends H{constructor(){super(...arguments),this.presets=[],this.selectedId=""}render(){return x`
      <div class="list-header">
        <span class="list-title">Select Preset</span>
        <span class="preset-count">MATCH: ${this.presets.length}</span>
      </div>
      <div class="scroll-container">
        ${this.presets.length===0?x`<div class="no-results">NO PRESETS FOUND</div>`:x`
            <ul>
              ${this.presets.map(s=>{const e=s.id||s.bankPatch,t=s.name||s.soundNameCategory,a=this.selectedId===e;return x`
                  <li 
                    class=${a?"selected":""} 
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
  `;te([ee({type:Array})],q.prototype,"presets",2);te([ee({type:String})],q.prototype,"selectedId",2);q=te([ye("j6-preset-list")],q);var et=Object.defineProperty,tt=Object.getOwnPropertyDescriptor,v=(s,e,t,a)=>{for(var i=a>1?void 0:a?tt(e,t):e,o=s.length-1,n;o>=0;o--)(n=s[o])&&(i=(a?n(e,t,i):n(i))||i);return a&&i&&et(e,t,i),i};const Q=Ye.map(s=>({...s,id:s.bankPatch,name:s.soundNameCategory,notes:s.notesDescription||"",delayEffects:s.delayReverb,tags:Be(s)}));let g=class extends H{constructor(){super(...arguments),this.selectedPreset=Q[0],this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All",this.presetListOpen=!1,this.filtersOpen=!1,this.aboutOpen=!1,this.searchOn=!0,this.isEdited=!1,this.customValues={}}willUpdate(s){s.has("selectedPreset")&&this.resetToPresetValues()}resetToPresetValues(){const s=this.selectedPreset;this.customValues={lfo:Je(s.lfo),pwm:Ke(s.pwm),a:j(s.attack),d:j(s.decay),s:ze(s.sustain),r:j(s.release),freq:Ge(s.filterFreq),res:je(s.resonance),env:Qe(s.envMod),effect:s.chorus!=="Off"?70:0,delay:s.delayReverb==="Y"?60:0,reverb:s.delayReverb==="Y"?50:0},this.isEdited=!1}handleFaderMouseDown(s,e){s.preventDefault();const t=s.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(s.clientY,t,e);const a=o=>{this.updateFaderFromCoord(o.clientY,t,e)},i=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",i)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",i)}handleFaderTouchStart(s,e){const t=s.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(s.touches[0].clientY,t,e);const a=o=>{this.updateFaderFromCoord(o.touches[0].clientY,t,e)},i=()=>{window.removeEventListener("touchmove",a),window.removeEventListener("touchend",i)};window.addEventListener("touchmove",a),window.addEventListener("touchend",i)}updateFaderFromCoord(s,e,t){const a=e.getBoundingClientRect(),i=Math.max(0,Math.min(1,(a.bottom-s)/a.height)),o=Math.round(i*100);this.customValues={...this.customValues,[t]:o},this.isEdited=!0}handleKnobMouseDown(s,e){s.preventDefault();const t=s.clientY,a=this.customValues[e]||0,i=n=>{const r=(t-n.clientY)*1.2,d=Math.max(0,Math.min(100,a+r));this.customValues={...this.customValues,[e]:Math.round(d)},this.isEdited=!0},o=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",o)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",o)}handleSendGet(){const s=`--- Roland J-6 Patch Info ---
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
---------------------------------------`;navigator.clipboard.writeText(s).then(()=>{alert("Patch dump copied to clipboard successfully!")})}clearFilters(){this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All"}get hasActiveFilters(){return this.searchQuery!==""||this.activeGenreMood!=="All"||this.activeInstrumentType!=="All"||this.activeCharacter!=="All"||this.activeEnvelope!=="All"||this.activeEffects!=="All"||this.activeWaveform!=="All"}get filteredPresets(){const s=this.searchQuery.trim().toLowerCase();return Q.filter(e=>{const t=[e.name,e.notes,e.waveformOscType,e.bankPatch,e.filterFreq,e.delayEffects,(e.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase(),a=!this.searchOn||s===""||t.includes(s),i=this.activeGenreMood==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeGenreMood.toLowerCase()),o=this.activeInstrumentType==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeInstrumentType.toLowerCase()),n=this.activeCharacter==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeCharacter.toLowerCase()),l=this.activeEnvelope==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeEnvelope.toLowerCase()),r=this.activeEffects==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeEffects.toLowerCase()),d=this.activeWaveform==="All"||(e.tags||[]).some(c=>c.toLowerCase()===this.activeWaveform.toLowerCase());return a&&i&&o&&n&&l&&r&&d})}get groupedTags(){const s=new Set;Q.forEach(t=>(t.tags||[]).forEach(a=>s.add(a)));const e=new Map;return Array.from(s).sort((t,a)=>t.localeCompare(a)).forEach(t=>{const a=Ue(t),i=e.get(a)??[];i.push(t),e.set(a,i)}),e}renderFader(s,e,t){return x`
      <div 
        class="fader-group"
        @mousedown=${a=>this.handleFaderMouseDown(a,t)}
        @touchstart=${a=>this.handleFaderTouchStart(a,t)}
      >
        <span class="fader-label">${s}</span>
        <div class="fader-track-wrapper">
          <div class="fader-track">
            <div class="fader-handle" style="bottom: calc(${e}% * 0.86)"></div>
          </div>
        </div>
        <span class="fader-val-label">${e}%</span>
      </div>
    `}renderKnob(s,e,t){const a=-135+2.7*e;return x`
      <div class="knob-control" @mousedown=${i=>this.handleKnobMouseDown(i,t)}>
        <div class="knob-dial-wrapper">
          <div class="knob-dial" style="transform: rotate(${a}deg)">
            <div class="knob-indicator"></div>
          </div>
        </div>
        <span class="knob-label">${s}</span>
      </div>
    `}renderCategorySelect(s,e,t,a){return x`
      <div class="filter-group">
        <label>${s}</label>
        <select
          class="filter-select"
          .value=${t}
          @change=${i=>{this[a]=i.target.value}}
        >
          <option value="All">All</option>
          ${e.map(i=>x`<option value=${i} ?selected=${t===i}>${i}</option>`)}
        </select>
      </div>
    `}render(){const s=this.selectedPreset,e=s.saw==="SAW",t=s.pulse==="SQU"||s.pulse==="PWM",a=["15%","20%","25%","33%"].includes(s.pulse),i=["100%","25%"].includes(s.sub),o=s.sub==="50%",n=s.noise!=="x",l=s.chorus==="Off"||!s.chorus,r=s.chorus==="I",d=s.chorus==="II",c=this.filteredPresets,p=c.filter(u=>(u.tags||[]).some(P=>P.toLowerCase()==="bass")).length,m=c.filter(u=>(u.tags||[]).some(P=>P.toLowerCase()==="pad")).length,y=c.filter(u=>(u.tags||[]).some(P=>P.toLowerCase()==="lead")).length;return x`
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
                
                <div class="patch-panel-content">
                  
                  <!-- Top Row: Buttons, LED Search, Toggle -->
                  <div class="patch-top-row">
                    <button class="btn-key key-cream patch-btn" @click=${()=>this.presetListOpen=!0}>
                      ${s.id||"1-1"}
                    </button>
                    <button class="btn-key key-cream patch-btn" @click=${()=>this.presetListOpen=!0}>
                      ${s.name||"MELLOW SUB OCTAVE"}
                    </button>
                    
                    <!-- LED Search field -->
                    <div class="led-search-screen">
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
                    <div class="search-toggle-container">
                      <span class="search-toggle-label">SEARCH ON</span>
                      <button 
                        class="search-toggle-btn ${this.searchOn?"active":""}" 
                        @click=${()=>this.searchOn=!this.searchOn}
                      ></button>
                    </div>
                  </div>

                  <!-- Bottom Row: Notes and Counts -->
                  <div class="patch-bottom-row">
                    <div class="patch-notes">
                      ${this.isEdited?x`<span style="color:#ffa166;">[EDITED] </span>`:""}
                      ${s.notes||"Factory patch preset definition"}
                    </div>

                    <div class="patch-counts">
                      FILTERED<br/>
                      (BASS: ${p},<br/>
                      PAD: ${m},<br/>
                      LEAD: ${y})
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
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 9 L9 1 L9 9 Z" />
                        </svg>
                      </span>
                      <div class="led-well ${e?"active":""}"></div>
                      <button class="btn-key key-cream ${e?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
                          <path d="M1 9 L1 1 L5 1 L5 9 L9 9" />
                        </svg>
                      </span>
                      <div class="led-well ${t?"active":""}"></div>
                      <button class="btn-key key-cream ${t?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="#8c8e94" fill="none" stroke-width="1.5">
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
                      <div class="led-well ${i?"active":""}"></div>
                      <button class="btn-key key-sub ${i?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem; font-family:sans-serif;">Sub 50%</span>
                      <div class="led-well ${o?"active":""}"></div>
                      <button class="btn-key key-sub50 ${o?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem;">Noise</span>
                      <div class="led-well ${n?"active":""}"></div>
                      <button class="btn-key key-noise ${n?"active":""}"></button>
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
                        <div class="led-well ${l?"active":""}"></div>
                        <button class="btn-key key-cream ${l?"active":""}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>I</span>
                        <div class="led-well ${r?"active":""}"></div>
                        <button class="btn-key key-cream ${r?"active":""}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>II</span>
                        <div class="led-well ${d?"active":""}"></div>
                        <button class="btn-key key-cream ${d?"active":""}"></button>
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
      padding: 16px 28px;
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
      letter-spacing: 0.15em;
      color: #a5a298;
      text-transform: uppercase;
      text-shadow: 1px 1px 2px rgba(0,0,0,0.6);
    }

    .plugout-badge {
      background: linear-gradient(135deg, #e4e6eb 0%, #b2b4b8 40%, #76787e 50%, #b2b4b8 60%, #e4e6eb 100%);
      border: 2px solid #4e5055;
      border-radius: 3px;
      padding: 3px 10px;
      font-size: 0.65rem;
      font-weight: 900;
      color: #ff5d00;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      box-shadow: inset 0 1px 1px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.4);
      text-shadow: 0 0 2px rgba(255, 93, 0, 0.4);
    }

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
      padding: 24px;
      background: #15161b; /* Charcoal grey background */
    }

    .synth-grid {
      display: grid;
      grid-template-columns: 1.25fr 1fr;
      gap: 20px;
    }

    .grid-left {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }

    .grid-right {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 20px;
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
      background: #e2e2e4;
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
      color: #8c8e94;
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
      color: #8c8e94;
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
      font-family: 'Inter', sans-serif;
      font-weight: 800;
      font-size: 0.8rem;
      color: #2b271d;
      white-space: nowrap;
    }

    /* Recessed LED search screen */
    .led-search-screen {
      flex: 1;
      height: 34px;
      background-color: #120201;
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
      color: #ff5d00;
      font-family: 'VT323', monospace;
      font-size: 1.7rem;
      letter-spacing: 0.05em;
      outline: none;
      text-transform: uppercase;
      text-shadow: 0 0 6px rgba(255, 93, 0, 0.8);
      padding: 0;
    }
    .led-search-input::placeholder { color: #ff5d0033; text-shadow: none; }
    
    .led-search-icon {
      position: absolute; right: 8px; top: calc(50% - 9px);
      width: 18px; height: 18px; fill: #ff5d00;
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
      color: #8c8e94;
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
      color: #8c8e94;
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
      color: #8c8e94;
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
      box-shadow: 0 0 8px #ff9d00, 0 0 16px #ff5d00, inset 0 0 2px #fff;
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
      color: #8c8e94;
    }

    /* Modals & Overlays */
    .modal-backdrop {
      position: fixed; top: 0; left: 0; right: 0; bottom: 0;
      background: rgba(0, 0, 0, 0.75); backdrop-filter: blur(4px);
      z-index: 2000; display: flex; justify-content: center; align-items: center; padding: 20px;
    }
    .preset-dropdown-container { width: 100%; max-width: 500px; }
    .retro-modal {
      background: #141518; border: 3px solid #3c3d42; border-radius: 8px;
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.9); width: 100%; max-width: 550px;
      overflow: hidden; font-family: 'Inter', sans-serif;
    }
    .modal-header {
      background: #b52c24; padding: 10px 16px; display: flex;
      justify-content: space-between; align-items: center; border-bottom: 2px solid #751a14;
    }
    .modal-title { font-size: 0.8rem; font-weight: bold; color: #fff; letter-spacing: 0.08em; }
    .close-btn { background: transparent; border: none; color: #fff; font-size: 1.4rem; cursor: pointer; }
    .modal-body { padding: 20px; }
    .modal-body.text-content h3 { margin-top: 0; color: #ff5d00; }
    .modal-body.text-content p { line-height: 1.5; font-size: 0.9rem; color: #b2b4b8; }
    .filter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; }
    .filter-group { display: flex; flex-direction: column; gap: 6px; }
    .filter-group label { font-size: 0.75rem; font-weight: bold; color: #8c8e94; text-transform: uppercase; }
    .filter-select {
      background: #0c0c0e; border: 2px solid #2e3037; color: #e2e2e4;
      border-radius: 4px; padding: 8px; font-size: 0.85rem; outline: none;
    }
    .modal-footer {
      background: #0f1012; padding: 12px 16px; display: flex;
      justify-content: flex-end; gap: 12px; border-top: 1px solid #1f2025;
    }
    .retro-btn {
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 2px solid #5a5c62; color: #e2e2e4; font-size: 0.7rem; font-weight: bold;
      padding: 6px 12px; border-radius: 4px; cursor: pointer; text-transform: uppercase;
    }
    .retro-btn.accent { background: #cd5a1e; border-color: #3e2010; color: #fff; }
    .retro-btn.accent:hover { background: #ff5d00; }
    .synth-footer {
      padding: 16px 24px; background: #0d0d10; border-top: 3px solid #1a1b1f;
      display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #6a6b72;
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
    }
  `;v([b()],g.prototype,"selectedPreset",2);v([b()],g.prototype,"searchQuery",2);v([b()],g.prototype,"activeGenreMood",2);v([b()],g.prototype,"activeInstrumentType",2);v([b()],g.prototype,"activeCharacter",2);v([b()],g.prototype,"activeEnvelope",2);v([b()],g.prototype,"activeEffects",2);v([b()],g.prototype,"activeWaveform",2);v([b()],g.prototype,"presetListOpen",2);v([b()],g.prototype,"filtersOpen",2);v([b()],g.prototype,"aboutOpen",2);v([b()],g.prototype,"searchOn",2);v([b()],g.prototype,"isEdited",2);v([b()],g.prototype,"customValues",2);g=v([ye("j6-app")],g);
