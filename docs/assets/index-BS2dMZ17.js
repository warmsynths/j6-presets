(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const H=globalThis,X=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Z=Symbol(),ae=new WeakMap;let ye=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==Z)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(X&&e===void 0){const a=t!==void 0&&t.length===1;a&&(e=ae.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&ae.set(t,e))}return e}toString(){return this.cssText}};const Me=r=>new ye(typeof r=="string"?r:r+"",void 0,Z),Y=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((a,s,o)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new ye(t,r,Z)},Se=(r,e)=>{if(X)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const a=document.createElement("style"),s=H.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=t.cssText,r.appendChild(a)}},re=X?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return Me(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$e,defineProperty:Pe,getOwnPropertyDescriptor:ke,getOwnPropertyNames:Oe,getOwnPropertySymbols:Ce,getPrototypeOf:xe}=Object,M=globalThis,oe=M.trustedTypes,Fe=oe?oe.emptyScript:"",G=M.reactiveElementPolyfillSupport,A=(r,e)=>r,B={toAttribute(r,e){switch(e){case Boolean:r=r?Fe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},ee=(r,e)=>!$e(r,e),ie={attribute:!0,type:String,converter:B,reflect:!1,useDefault:!1,hasChanged:ee};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),M.litPropertyMetadata??(M.litPropertyMetadata=new WeakMap);let C=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&Pe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){const{get:s,set:o}=ke(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:s,set(i){const c=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(A("elementProperties")))return;const e=xe(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(A("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(A("properties"))){const t=this.properties,a=[...Oe(t),...Ce(t)];for(const s of a)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[a,s]of t)this.elementProperties.set(a,s)}this._$Eh=new Map;for(const[t,a]of this.elementProperties){const s=this._$Eu(t,a);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const s of a)t.unshift(re(s))}else e!==void 0&&t.push(re(e));return t}static _$Eu(e,t){const a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Se(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostConnected)==null?void 0:a.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostDisconnected)==null?void 0:a.call(t)})}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){var o;const a=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,a);if(s!==void 0&&a.reflect===!0){const i=(((o=a.converter)==null?void 0:o.toAttribute)!==void 0?a.converter:B).toAttribute(t,a.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){var o,i;const a=this.constructor,s=a._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const c=a.getPropertyOptions(s),n=typeof c.converter=="function"?{fromAttribute:c.converter}:((o=c.converter)==null?void 0:o.fromAttribute)!==void 0?c.converter:B;this._$Em=s;const d=n.fromAttribute(t,c.type);this[s]=d??((i=this._$Ej)==null?void 0:i.get(s))??d,this._$Em=null}}requestUpdate(e,t,a,s=!1,o){var i;if(e!==void 0){const c=this.constructor;if(s===!1&&(o=this[e]),a??(a=c.getPropertyOptions(e)),!((a.hasChanged??ee)(o,t)||a.useDefault&&a.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(c._$Eu(e,a))))return;this.C(e,t,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:s,wrapped:o},i){a&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),o!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:c}=i,n=this[o];c!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(a=this._$EO)==null||a.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(a=>{var s;return(s=a.hostUpdated)==null?void 0:s.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};C.elementStyles=[],C.shadowRootOptions={mode:"open"},C[A("elementProperties")]=new Map,C[A("finalized")]=new Map,G==null||G({ReactiveElement:C}),(M.reactiveElementVersions??(M.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const R=globalThis,ne=r=>r,U=R.trustedTypes,ce=U?U.createPolicy("lit-html",{createHTML:r=>r}):void 0,ve="$lit$",b=`lit$${Math.random().toFixed(9).slice(2)}$`,ge="?"+b,_e=`<${ge}>`,O=document,D=()=>O.createComment(""),E=r=>r===null||typeof r!="object"&&typeof r!="function",te=Array.isArray,Le=r=>te(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",K=`[ 	
\f\r]`,L=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,le=/-->/g,de=/>/g,S=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),he=/'/g,ue=/"/g,me=/^(?:script|style|textarea|title)$/i,Ae=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),m=Ae(1),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),pe=new WeakMap,$=O.createTreeWalker(O,129);function we(r,e){if(!te(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ce!==void 0?ce.createHTML(e):e}const Re=(r,e)=>{const t=r.length-1,a=[];let s,o=e===2?"<svg>":e===3?"<math>":"",i=L;for(let c=0;c<t;c++){const n=r[c];let d,l,h=-1,g=0;for(;g<n.length&&(i.lastIndex=g,l=i.exec(n),l!==null);)g=i.lastIndex,i===L?l[1]==="!--"?i=le:l[1]!==void 0?i=de:l[2]!==void 0?(me.test(l[2])&&(s=RegExp("</"+l[2],"g")),i=S):l[3]!==void 0&&(i=S):i===S?l[0]===">"?(i=s??L,h=-1):l[1]===void 0?h=-2:(h=i.lastIndex-l[2].length,d=l[1],i=l[3]===void 0?S:l[3]==='"'?ue:he):i===ue||i===he?i=S:i===le||i===de?i=L:(i=S,s=void 0);const w=i===S&&r[c+1].startsWith("/>")?" ":"";o+=i===L?n+_e:h>=0?(a.push(d),n.slice(0,h)+ve+n.slice(h)+b+w):n+b+(h===-2?c:w)}return[we(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class T{constructor({strings:e,_$litType$:t},a){let s;this.parts=[];let o=0,i=0;const c=e.length-1,n=this.parts,[d,l]=Re(e,t);if(this.el=T.createElement(d,a),$.currentNode=this.el.content,t===2||t===3){const h=this.el.content.firstChild;h.replaceWith(...h.childNodes)}for(;(s=$.nextNode())!==null&&n.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const h of s.getAttributeNames())if(h.endsWith(ve)){const g=l[i++],w=s.getAttribute(h).split(b),q=/([.?@])?(.*)/.exec(g);n.push({type:1,index:o,name:q[2],strings:w,ctor:q[1]==="."?Ee:q[1]==="?"?Te:q[1]==="@"?Ne:j}),s.removeAttribute(h)}else h.startsWith(b)&&(n.push({type:6,index:o}),s.removeAttribute(h));if(me.test(s.tagName)){const h=s.textContent.split(b),g=h.length-1;if(g>0){s.textContent=U?U.emptyScript:"";for(let w=0;w<g;w++)s.append(h[w],D()),$.nextNode(),n.push({type:2,index:++o});s.append(h[g],D())}}}else if(s.nodeType===8)if(s.data===ge)n.push({type:2,index:o});else{let h=-1;for(;(h=s.data.indexOf(b,h+1))!==-1;)n.push({type:7,index:o}),h+=b.length-1}o++}}static createElement(e,t){const a=O.createElement("template");return a.innerHTML=e,a}}function F(r,e,t=r,a){var i,c;if(e===x)return e;let s=a!==void 0?(i=t._$Co)==null?void 0:i[a]:t._$Cl;const o=E(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,a)),a!==void 0?(t._$Co??(t._$Co=[]))[a]=s:t._$Cl=s),s!==void 0&&(e=F(r,s._$AS(r,e.values),s,a)),e}class De{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,s=((e==null?void 0:e.creationScope)??O).importNode(t,!0);$.currentNode=s;let o=$.nextNode(),i=0,c=0,n=a[0];for(;n!==void 0;){if(i===n.index){let d;n.type===2?d=new N(o,o.nextSibling,this,e):n.type===1?d=new n.ctor(o,n.name,n.strings,this,e):n.type===6&&(d=new qe(o,this,e)),this._$AV.push(d),n=a[++c]}i!==(n==null?void 0:n.index)&&(o=$.nextNode(),i++)}return $.currentNode=O,s}p(e){let t=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class N{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,a,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=F(this,e,t),E(e)?e===p||e==null||e===""?(this._$AH!==p&&this._$AR(),this._$AH=p):e!==this._$AH&&e!==x&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Le(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==p&&E(this._$AH)?this._$AA.nextSibling.data=e:this.T(O.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=T.createElement(we(a.h,a.h[0]),this.options)),a);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const i=new De(s,this),c=i.u(this.options);i.p(t),this.T(c),this._$AH=i}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new T(e)),t}k(e){te(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,s=0;for(const o of e)s===t.length?t.push(a=new N(this.O(D()),this.O(D()),this,this.options)):a=t[s],a._$AI(o),s++;s<t.length&&(this._$AR(a&&a._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,t);e!==this._$AB;){const s=ne(e).nextSibling;ne(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class j{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,s,o){this.type=1,this._$AH=p,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=p}_$AI(e,t=this,a,s){const o=this.strings;let i=!1;if(o===void 0)e=F(this,e,t,0),i=!E(e)||e!==this._$AH&&e!==x,i&&(this._$AH=e);else{const c=e;let n,d;for(e=o[0],n=0;n<o.length-1;n++)d=F(this,c[a+n],t,n),d===x&&(d=this._$AH[n]),i||(i=!E(d)||d!==this._$AH[n]),d===p?e=p:e!==p&&(e+=(d??"")+o[n+1]),this._$AH[n]=d}i&&!s&&this.j(e)}j(e){e===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class Ee extends j{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===p?void 0:e}}class Te extends j{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==p)}}class Ne extends j{constructor(e,t,a,s,o){super(e,t,a,s,o),this.type=5}_$AI(e,t=this){if((e=F(this,e,t,0)??p)===x)return;const a=this._$AH,s=e===p&&a!==p||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==p&&(a===p||s);s&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class qe{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){F(this,e)}}const V=R.litHtmlPolyfillSupport;V==null||V(T,N),(R.litHtmlVersions??(R.litHtmlVersions=[])).push("3.3.3");const He=(r,e,t)=>{const a=(t==null?void 0:t.renderBefore)??e;let s=a._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;a._$litPart$=s=new N(e.insertBefore(D(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const P=globalThis;class k extends C{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=He(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return x}}var fe;k._$litElement$=!0,k.finalized=!0,(fe=P.litElementHydrateSupport)==null||fe.call(P,{LitElement:k});const J=P.litElementPolyfillSupport;J==null||J({LitElement:k});(P.litElementVersions??(P.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const se=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Be={attribute:!0,type:String,converter:B,reflect:!1,hasChanged:ee},Ue=(r=Be,e,t)=>{const{kind:a,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),a==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),a==="accessor"){const{name:i}=t;return{set(c){const n=e.get.call(this);e.set.call(this,c),this.requestUpdate(i,n,r,!0,c)},init(c){return c!==void 0&&this.C(i,void 0,r,c),c}}}if(a==="setter"){const{name:i}=t;return function(c){const n=this[i];e.call(this,c),this.requestUpdate(i,n,r,!0,c)}}throw Error("Unsupported decorator location: "+a)};function z(r){return(e,t)=>typeof t=="object"?Ue(r,e,t):((a,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,a),i?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function y(r){return z({...r,state:!0,attribute:!1})}const We=[{bankPatch:"1-1",soundNameCategory:"Mellow Sub Octave Pluck",waveformOscType:"Saw + Sub",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Mellow Sub Octave Pluck: (Good for Deadmau5)"},{bankPatch:"1-2",soundNameCategory:"Bright Detuned Saw Pluck",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"High",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Bright Detuned Saw Pluck: (Good for Avicii)"},{bankPatch:"1-3",soundNameCategory:"Fat Square Lead / Bass",waveformOscType:"Unison Square",filterFreq:"Mid",resonance:"Mid",envMod:"Low",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Reverb 2",notesDescription:"Fat Square Lead / Bass: (Good for Chiptune)"},{bankPatch:"1-4",soundNameCategory:"Soft Analog Square Pluck",waveformOscType:"Square",filterFreq:"Low",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Chorus 1",delayReverb:"Reverb 1",notesDescription:"Soft Analog Square Pluck: (Good for Lofi)"},{bankPatch:"1-5",soundNameCategory:"Resonant Acid Bass",waveformOscType:"Saw",filterFreq:"Low",resonance:"Max",envMod:"High",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Resonant Acid Bass: (Good for 303 emulation)"},{bankPatch:"1-6",soundNameCategory:"Deep Sub Bass",waveformOscType:"Sub",filterFreq:"Low",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Deep Sub Bass: (Clean fundamental tone)"},{bankPatch:"1-7",soundNameCategory:"Evolving Filter Pad",waveformOscType:"Unison Saw",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 4",notesDescription:"Evolving Filter Pad: (Ambient Swell)"},{bankPatch:"1-8",soundNameCategory:"Bright 80s Polysynth Keys",waveformOscType:"Saw + Square",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 2",notesDescription:"Bright 80s Polysynth Keys: (Classic Juno sound)"},{bankPatch:"2-1",soundNameCategory:"Hollow Square Pluck",waveformOscType:"Square",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Delay 1",notesDescription:"Hollow Square Pluck"},{bankPatch:"2-2",soundNameCategory:"Percussive Organ Keys",waveformOscType:"Multi-Square",filterFreq:"High",resonance:"Low",envMod:"Fast",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Chorus 1",delayReverb:"Reverb 1",notesDescription:"Percussive Organ Keys: (House music stabs)"},{bankPatch:"2-3",soundNameCategory:"Detuned PWM Pad",waveformOscType:"PWM Saw",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 3",notesDescription:"Detuned PWM Pad: (Thick texture)"},{bankPatch:"2-4",soundNameCategory:"Snappy FM-Style Bass",waveformOscType:"Square + Sub",filterFreq:"Low",resonance:"Mid",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Snappy FM-Style Bass: (Metallic attack)"},{bankPatch:"2-5",soundNameCategory:"Bright Phasey Strings",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 2",notesDescription:"Bright Phasey Strings: (String Machine emulation)"},{bankPatch:"2-6",soundNameCategory:"Lo-Fi Noise Lead",waveformOscType:"Saw + Noise",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Lo-Fi Noise Lead: (Vintage/textured)"},{bankPatch:"2-7",soundNameCategory:"Dark Ambient Pad",waveformOscType:"Square",filterFreq:"Low",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 1",delayReverb:"Reverb 4",notesDescription:"Dark Ambient Pad: (Warm deep swell)"},{bankPatch:"2-8",soundNameCategory:"Classic Unison Lead",waveformOscType:"Super Saw",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Classic Unison Lead: (Trance/Dance anthem)"},{bankPatch:"3-1",soundNameCategory:"Plucky Sine / Sub",waveformOscType:"Sine + Sub",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Fast",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Reverb 1",notesDescription:"Plucky Sine / Sub"},{bankPatch:"3-2",soundNameCategory:"Warm Analog Keys",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Warm Analog Keys: (Classic polyphonic)"},{bankPatch:"3-3",soundNameCategory:"Sustained Bright Brass",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Mid",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Reverb 2",notesDescription:"Sustained Bright Brass: (Synth horn emulation)"},{bankPatch:"3-4",soundNameCategory:"Slap Bass",waveformOscType:"Square",filterFreq:"Mid",resonance:"High",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Slap Bass: (Funk/percussive)"},{bankPatch:"3-5",soundNameCategory:"Slow Sweep Pad",waveformOscType:"Saw",filterFreq:"Low",resonance:"Mid",envMod:"High",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 3",notesDescription:"Slow Sweep Pad: (Filter sweep)"},{bankPatch:"3-6",soundNameCategory:"Chiptune Triangle Lead",waveformOscType:"Triangle",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 1",notesDescription:"Chiptune Triangle Lead"},{bankPatch:"3-7",soundNameCategory:"Glassy Digital Pad",waveformOscType:"PWM Square",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 1",delayReverb:"Reverb 4",notesDescription:"Glassy Digital Pad: (Bell-like texture)"},{bankPatch:"3-8",soundNameCategory:"Aggressive Sync Lead",waveformOscType:"Sync Saw",filterFreq:"High",resonance:"Mid",envMod:"Mid",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Aggressive Sync Lead: (Hard rock edge)"},{bankPatch:"4-1",soundNameCategory:"Metallic Bell Pluck",waveformOscType:"Cross-Mod",filterFreq:"High",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Low",release:"Mid",chorus:"Off",delayReverb:"Reverb 3",notesDescription:"Metallic Bell Pluck: (FM character)"},{bankPatch:"4-2",soundNameCategory:"Velo-Sensitive Clav Keys",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Reverb 1",notesDescription:"Velo-Sensitive Clav Keys"},{bankPatch:"4-3",soundNameCategory:"Warm Strings Pad",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"Off",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Warm Strings Pad: (Classic analog ensemble)"},{bankPatch:"4-4",soundNameCategory:"Drive Bass",waveformOscType:"Saw + Sub",filterFreq:"Low",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Drive Bass: (Slightly saturated feel)"},{bankPatch:"4-5",soundNameCategory:"Bright Swell Pad",waveformOscType:"Super Saw",filterFreq:"High",resonance:"Low",envMod:"High",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 4",notesDescription:"Bright Swell Pad: (Trance/Modern style)"},{bankPatch:"4-6",soundNameCategory:"Expressive Solo Lead",waveformOscType:"Saw",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Expressive Solo Lead: (Vibrato friendly)"},{bankPatch:"4-7",soundNameCategory:"Resonant Moving Texture",waveformOscType:"Saw",filterFreq:"Low",resonance:"High",envMod:"Slow LFO",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Off",delayReverb:"Reverb 3",notesDescription:"Resonant Moving Texture"},{bankPatch:"4-8",soundNameCategory:"Classic 90s Organ",waveformOscType:"Multi-Sine",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Chorus 1",delayReverb:"Reverb 1",notesDescription:"Classic 90s Organ: (Deep house style)"},{bankPatch:"5-1",soundNameCategory:"Damped Wood Block Pluck",waveformOscType:"Square",filterFreq:"Low",resonance:"Low",envMod:"Fast",attack:"Fast",decay:"Fast",sustain:"Off",release:"Fast",chorus:"Off",delayReverb:"Delay 1",notesDescription:"Damped Wood Block Pluck"},{bankPatch:"5-2",soundNameCategory:"Detuned Pop Piano Keys",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Mid",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Detuned Pop Piano Keys"},{bankPatch:"5-3",soundNameCategory:"Rich Warm Brass",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Rich Warm Brass: (Polysynth brass)"},{bankPatch:"5-4",soundNameCategory:"Sub Punch Bass",waveformOscType:"Sine + Sub",filterFreq:"Low",resonance:"Low",envMod:"Fast",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Sub Punch Bass: (Hip Hop/RnB sub)"},{bankPatch:"5-5",soundNameCategory:"Airy Flute Pad",waveformOscType:"Triangle + Noise",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Reverb 4",notesDescription:"Airy Flute Pad: (Breath-like opening)"},{bankPatch:"5-6",soundNameCategory:"Glitchy S&H Lead",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"S&H LFO",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Glitchy S&H Lead"},{bankPatch:"5-7",soundNameCategory:"Deep Cosmic Swell",waveformOscType:"Saw",filterFreq:"Low",resonance:"Low",envMod:"Slow LFO",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 2",delayReverb:"Reverb 4",notesDescription:"Deep Cosmic Swell: (Sci-Fi soundtrack texture)"},{bankPatch:"5-8",soundNameCategory:"Hard Detuned Rave Stabs",waveformOscType:"Super Saw",filterFreq:"High",resonance:"Mid",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Hard Detuned Rave Stabs: (90s rave/techno)"},{bankPatch:"6-1",soundNameCategory:"Crisp Acoustic-Like Pluck",waveformOscType:"Short Saw",filterFreq:"High",resonance:"Low",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Off",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Crisp Acoustic-Like Pluck: (Guitar/Harp vibe)"},{bankPatch:"6-2",soundNameCategory:"Electric Rhodes Piano Keys",waveformOscType:"Sine + Triangle",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Mid",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Electric Rhodes Piano Keys"},{bankPatch:"6-3",soundNameCategory:"Mellow Warm Horns",waveformOscType:"Saw",filterFreq:"Low",resonance:"Low",envMod:"Mid",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 1",notesDescription:"Mellow Warm Horns"},{bankPatch:"6-4",soundNameCategory:"Clicky Attack Bass",waveformOscType:"Saw + Sub",filterFreq:"Low",resonance:"Low",envMod:"Fast",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Clicky Attack Bass: (Transient heavy)"},{bankPatch:"6-5",soundNameCategory:"Shimmering High Pad",waveformOscType:"Super Saw",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Max",chorus:"Chorus 2",delayReverb:"Reverb 4",notesDescription:"Shimmering High Pad: (Ethereal high end)"},{bankPatch:"6-6",soundNameCategory:"Searing Sync Lead",waveformOscType:"Sync Saw",filterFreq:"High",resonance:"Low",envMod:"High",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Searing Sync Lead"},{bankPatch:"6-7",soundNameCategory:"Warm Low End Drone",waveformOscType:"Square + Sub",filterFreq:"Low",resonance:"Low",envMod:"Off",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 1",delayReverb:"Reverb 3",notesDescription:"Warm Low End Drone"},{bankPatch:"6-8",soundNameCategory:"Hyper Pop Lead",waveformOscType:"Super Saw + Square",filterFreq:"High",resonance:"Mid",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Hyper Pop Lead: (Bright, modern cutting tone)"},{bankPatch:"7-1",soundNameCategory:"Percolating Modular Pluck",waveformOscType:"Square",filterFreq:"Low",resonance:"Mid",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Off",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Percolating Modular Pluck: (Rhythmic sequence friendly)"},{bankPatch:"7-2",soundNameCategory:"FM Electric Piano Keys",waveformOscType:"Cross-Mod Sine",filterFreq:"High",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Max",sustain:"Mid",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"FM Electric Piano Keys: (DX7 style)"},{bankPatch:"7-3",soundNameCategory:"Stately Synth Brass",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Reverb 2",notesDescription:"Stately Synth Brass"},{bankPatch:"7-4",soundNameCategory:"Fuzz/Overdriven Bass",waveformOscType:"Sync Saw",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Fuzz/Overdriven Bass"},{bankPatch:"7-5",soundNameCategory:"Slow Vibrato Pad",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"Vibrato LFO",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 3",notesDescription:"Slow Vibrato Pad: (Vintage tape warble feel)"},{bankPatch:"7-6",soundNameCategory:"Theremin-Like Whistle Lead",waveformOscType:"Sine",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Theremin-Like Whistle Lead: (Portamento friendly)"},{bankPatch:"7-7",soundNameCategory:"Warm Hollow Pad",waveformOscType:"Square",filterFreq:"Mid",resonance:"Low",envMod:"Off",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 1",delayReverb:"Reverb 4",notesDescription:"Warm Hollow Pad"},{bankPatch:"7-8",soundNameCategory:"Aggressive Saw Lead",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 1",notesDescription:"Aggressive Saw Lead"},{bankPatch:"8-1",soundNameCategory:"Lo-Fi Vinyl Crackle Pluck",waveformOscType:"Saw + Noise",filterFreq:"Low",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Fast",sustain:"Off",release:"Fast",chorus:"Off",delayReverb:"Reverb 1",notesDescription:"Lo-Fi Vinyl Crackle Pluck: (Grit texture)"},{bankPatch:"8-2",soundNameCategory:"Detuned Wurlitzer Keys",waveformOscType:"Square + Triangle",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Mid",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Detuned Wurlitzer Keys"},{bankPatch:"8-3",soundNameCategory:"Bright Filter Sweep Brass",waveformOscType:"Super Saw",filterFreq:"Low",resonance:"Mid",envMod:"High",attack:"Mid",decay:"Mid",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Reverb 2",notesDescription:"Bright Filter Sweep Brass"},{bankPatch:"8-4",soundNameCategory:"Gated Rhythmic Bass",waveformOscType:"Square",filterFreq:"Low",resonance:"Low",envMod:"Gated LFO",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Gated Rhythmic Bass"},{bankPatch:"8-5",soundNameCategory:"Bright Evolving String Pad",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Slow LFO",attack:"Slow",decay:"Max",sustain:"Max",release:"Max",chorus:"Chorus 2",delayReverb:"Reverb 3",notesDescription:"Bright Evolving String Pad"},{bankPatch:"8-6",soundNameCategory:"Soaring Square Lead",waveformOscType:"Square",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Chorus 1",delayReverb:"Delay 2",notesDescription:"Soaring Square Lead"},{bankPatch:"8-7",soundNameCategory:"Deep Submerged Pad",waveformOscType:"Sine",filterFreq:"Low",resonance:"Low",envMod:"Off",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Off",delayReverb:"Reverb 4",notesDescription:"Deep Submerged Pad: (Underwater/muffled tone)"},{bankPatch:"8-8",soundNameCategory:"Aggressive Screamer Lead",waveformOscType:"Cross-Mod Saw",filterFreq:"High",resonance:"High",envMod:"High",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Aggressive Screamer Lead: (Industrial/Noise style)"}];var je=Object.defineProperty,ze=Object.getOwnPropertyDescriptor,I=(r,e,t,a)=>{for(var s=a>1?void 0:a?ze(e,t):e,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(a?i(e,t,s):i(s))||s);return a&&s&&je(e,t,s),s};let _=class extends k{constructor(){super(...arguments),this.presets=[],this.selectedId="",this.isOpen=!1}render(){const r=this.presets.find(t=>(t.id||t.bankPatch)===this.selectedId),e=r?`${r.id||r.bankPatch} - ${r.name||r.soundNameCategory}`:"Select a Preset...";return m`
      <div class="drawer-header" @click=${()=>this.isOpen=!this.isOpen}>
        <div class="current-selection">
          <span class="id">☰</span> <span>${e}</span>
        </div>
        <div class="toggle-icon">${this.isOpen?"▲":"▼"}</div>
      </div>

      <div class="drawer-content ${this.isOpen?"open":""}">
        <ul>
          ${this.presets.map(t=>{const a=t.id||t.bankPatch,s=t.name||t.soundNameCategory;return m`
              <li class=${this.selectedId===a?"selected":""} @click=${()=>{this.isOpen=!1,this.dispatchEvent(new CustomEvent("preset-selected",{detail:t}))}}>
                <span class="id">${a}</span>
                <span class="name">${s}</span>
              </li>
            `})}
        </ul>
      </div>
    `}};_.styles=Y`
    :host {
      display: block;
      background: #1e1e1e;
      border: 1px solid #333;
      border-radius: 8px;
      overflow-y: auto;
      max-height: 80vh;
    }
    .drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem;
      background: #2a2a2a;
      cursor: pointer;
      border-bottom: 1px solid #333;
      font-weight: bold;
    }
    .drawer-header:hover {
      background: #333;
    }
    .toggle-icon {
      color: #ff5500;
      font-size: 0.8rem;
    }
    .drawer-content {
      display: none;
    }
    .drawer-content.open {
      display: block;
    }
    
    /* List styles */
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    li {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid #333;
      cursor: pointer;
      transition: background-color 0.2s;
      display: flex;
      gap: 1rem;
      align-items: center;
    }
    li:hover {
      background-color: #2a2a2a;
    }
    li.selected {
      background-color: #ff550033;
      border-left: 4px solid #ff5500;
    }
    .id {
      color: #ff5500;
      font-family: monospace;
      font-size: 1.1rem;
      font-weight: bold;
      min-width: 3rem;
    }
    
    /* Desktop override: Always show list, hide drawer header */
    @media (min-width: 768px) {
      .drawer-header {
        display: none;
      }
      .drawer-content {
        display: block;
      }
    }
  `;I([z({type:Array})],_.prototype,"presets",2);I([z({type:String})],_.prototype,"selectedId",2);I([y()],_.prototype,"isOpen",2);_=I([se("j6-preset-list")],_);var Ie=Object.defineProperty,Ge=Object.getOwnPropertyDescriptor,be=(r,e,t,a)=>{for(var s=a>1?void 0:a?Ge(e,t):e,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(a?i(e,t,s):i(s))||s);return a&&s&&Ie(e,t,s),s};let W=class extends k{constructor(){super(...arguments),this.preset=null}getEnvelopePath(){if(!this.preset)return"M 0 100 L 100 100";let r=this.preset.attack==="Fast"?10:this.preset.attack==="Mid"?40:80,e=this.preset.decay==="Fast"?r+20:r+50,t=this.preset.sustain==="Max"?10:this.preset.sustain==="Mid"?50:90,a=this.preset.release==="Fast"?e+20:e+70;return`M 10 100 L ${r} 10 L ${e} ${t} L ${a-20} ${t} L ${a} 100`}render(){var r;return this.preset?m`
      <h2>[${this.preset.id}] ${this.preset.name}</h2>
      <p class="description">${this.preset.notes}</p>
      ${(r=this.preset.tags)!=null&&r.length?m`
        <div class="tag-bar">
          ${this.preset.tags.map(e=>m`<span class="tag">${e}</span>`)}
        </div>
      `:""}
      
      <h3>Amp Envelope Visualizer</h3>
      <div class="envelope-visualizer">
        <svg viewBox="0 0 300 120">
          <line x1="0" y1="100" x2="300" y2="100" stroke="#222" />
          <path d=${this.getEnvelopePath()} />
        </svg>
        <div style="display: flex; justify-content: space-between; font-size: 12px; color: #888;">
          <span>A: ${this.preset.attack}</span>
          <span>D: ${this.preset.decay}</span>
          <span>S: ${this.preset.sustain}</span>
          <span>R: ${this.preset.release}</span>
        </div>
      </div>

      <div class="params-grid">
        <div class="param-group">
          <h4>Oscillator</h4>
          <p><strong>Waveform:</strong> ${this.preset.waveformOscType}</p>
        </div>
        <div class="param-group">
          <h4>Filter</h4>
          <p><strong>Cutoff:</strong> ${this.preset.filterFreq}</p>
          <p><strong>Resonance:</strong> ${this.preset.resonance}</p>
          <p><strong>Env Mod:</strong> ${this.preset.envMod}</p>
        </div>
        <div class="param-group" style="grid-column: 1 / -1;">
          <h4>Effects</h4>
          <p><strong>Delay/Reverb:</strong> ${this.preset.delayEffects||"Off"}</p>
          <p><strong>Chorus:</strong> ${this.preset.chorus||"Off"}</p>
        </div>
      </div>
    `:m`<p>Select a preset to see details</p>`}};W.styles=Y`
    :host {
      display: block;
      background: #1e1e1e;
      border: 1px solid #333;
      border-radius: 8px;
      padding: 1.5rem;
    }
    .envelope-visualizer {
      background: #000;
      border-radius: 4px;
      padding: 0.5rem;
      margin: 1rem 0;
    }
    svg {
      width: 100%;
      height: 120px;
    }
    path {
      stroke: #ff5500; /* Roland orange vibe */
      stroke-width: 3;
      fill: none;
    }
    .params-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-bottom: 1rem;
    }
    .param-group {
      background: #2a2a2a;
      padding: 1rem;
      border-radius: 4px;
    }
    .param-group h4 {
      margin-top: 0;
      color: #ff5500;
      border-bottom: 1px solid #444;
      padding-bottom: 0.5rem;
    }
    .tag-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 0.75rem 0 1rem;
    }
    .tag {
      background: #333;
      color: #f0f0f0;
      padding: 0.25rem 0.6rem;
      border-radius: 999px;
      font-size: 0.8rem;
      border: 1px solid #444;
    }
    .param-group p {
      margin: 0.5rem 0;
    }
  `;be([z({type:Object})],W.prototype,"preset",2);W=be([se("j6-preset-detail")],W);var Ke=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,v=(r,e,t,a)=>{for(var s=a>1?void 0:a?Ve(e,t):e,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(a?i(e,t,s):i(s))||s);return a&&s&&Ke(e,t,s),s};const Je=[[/deadmau5/i,["Progressive House","EDM"]],[/avicii/i,["Melodic EDM","Pop"]],[/chiptune/i,["Chiptune","Retro"]],[/lo[- ]?fi/i,["Lo-Fi"]],[/house/i,["House"]],[/trance/i,["Trance"]],[/dance/i,["Dance"]],[/ambient/i,["Ambient"]],[/juno/i,["Vintage","Analog"]],[/303/i,["Acid","Bassline"]],[/bass/i,["Bass"]],[/brass/i,["Brass"]],[/organ/i,["Organ"]],[/strings/i,["Strings"]],[/piano/i,["Piano"]],[/pad/i,["Pad"]],[/lead/i,["Lead"]],[/pluck/i,["Pluck"]],[/synth/i,["Synth"]],[/noise/i,["Noise"]],[/bell/i,["Bell"]],[/vintage/i,["Vintage"]],[/metallic/i,["Metallic"]],[/dark/i,["Dark"]],[/bright/i,["Bright"]],[/soft/i,["Soft"]],[/aggressive/i,["Aggressive"]],[/hyper pop/i,["Hyperpop"]],[/rock/i,["Rock"]],[/house music/i,["House"]],[/deep house/i,["Deep House"]],[/hip hop/i,["Hip Hop"]],[/rnb/i,["R&B"]],[/sci-fi/i,["Sci-Fi"]],[/industrial/i,["Industrial"]],[/noise style/i,["Noise"]],[/soundtrack/i,["Soundtrack"]]];function u(r,e){Array.isArray(e)?e.forEach(t=>t&&r.add(t)):e&&r.add(e)}function Qe(r){const e=new Set,t=r.notesDescription||"",a=(r.soundNameCategory||"").toLowerCase();t.toLowerCase();const s=/\(([^)]+)\)/g;let o;for(;(o=s.exec(t))!==null;){const n=o[1].trim();n&&(/^good for\s+/i.test(n)||u(e,n))}Je.forEach(([n,d])=>{(n.test(t)||n.test(a))&&u(e,d)}),[[/pad/i,"Pad"],[/lead/i,"Lead"],[/bass/i,"Bass"],[/keys/i,"Keys"],[/organ/i,"Organ"],[/piano/i,"Piano"],[/pluck/i,"Pluck"],[/brass/i,"Brass"],[/strings/i,"Strings"],[/bell/i,"Bell"],[/whistle/i,"Whistle"],[/clav/i,"Clav"],[/synth/i,"Synth"]].forEach(([n,d])=>{n.test(r.soundNameCategory)&&u(e,d)});const c=(r.waveformOscType||"").toLowerCase();return c.includes("saw")&&u(e,"Saw"),c.includes("square")&&u(e,"Square"),c.includes("sub")&&u(e,"Sub"),c.includes("noise")&&u(e,"Noise"),c.includes("triangle")&&u(e,"Triangle"),c.includes("sync")&&u(e,"Sync"),c.includes("pwm")&&u(e,"PWM"),(c.includes("cross-mod")||c.includes("cross mod"))&&u(e,"Cross-Mod"),r.filterFreq==="High"&&u(e,"Bright"),r.filterFreq==="Low"&&u(e,"Dark"),r.resonance==="High"&&u(e,"Resonant"),r.resonance==="Low"&&u(e,"Smooth"),r.attack==="Fast"&&u(e,"Sharp Attack"),r.attack==="Slow"&&u(e,"Slow Attack"),r.release==="Slow"&&u(e,"Long Release"),r.release==="Fast"&&u(e,"Snappy Release"),r.sustain==="Max"&&u(e,"Sustained"),r.chorus&&r.chorus!=="Off"&&u(e,r.chorus),r.delayReverb&&r.delayReverb!=="Off"&&u(e,r.delayReverb),Array.from(e)}const Q=We.map(r=>({...r,id:r.bankPatch,name:r.soundNameCategory,notes:r.notesDescription||"",delayEffects:r.delayReverb,tags:Qe(r)}));let f=class extends k{constructor(){super(...arguments),this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All",this.selectedPreset=Q[0],this.filtersOpen=!1}get filteredPresets(){const r=this.searchQuery.trim().toLowerCase();return Q.filter(e=>{const t=[e.name,e.notes,e.waveformOscType,e.bankPatch,e.filterFreq,e.delayEffects,(e.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase(),a=r===""||t.includes(r),s=this.activeGenreMood==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeGenreMood.toLowerCase()),o=this.activeInstrumentType==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeInstrumentType.toLowerCase()),i=this.activeCharacter==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeCharacter.toLowerCase()),c=this.activeEnvelope==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeEnvelope.toLowerCase()),n=this.activeEffects==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeEffects.toLowerCase()),d=this.activeWaveform==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeWaveform.toLowerCase());return a&&s&&o&&i&&c&&n&&d})}getTagCategory(r){const e=r.toLowerCase();return/^(progressive house|edm|melodic edm|pop|chiptune|retro|lo-fi|house|trance|dance|ambient|acid|bassline|hip hop|r&b|sci-fi|industrial|soundtrack|hyperpop|rock|vintage|analog)$/.test(e)?"Genre / Mood":/^(pad|lead|bass|keys|organ|piano|pluck|brass|strings|bell|whistle|clav|synth)$/.test(e)?"Instrument / Type":/^(bright|dark|soft|aggressive|metallic|noise|smooth|resonant|sustained)$/.test(e)?"Character":/^(sharp attack|slow attack|long release|snappy release)$/.test(e)?"Envelope":/^(chorus|reverb|delay|chorus \d|reverb \d|delay \d)$/.test(e)?"Effects":/^(saw|square|sub|triangle|sync|pwm|cross-mod)$/.test(e)?"Waveform":"Other"}renderCategorySelect(r,e,t,a){return m`
      <label style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:0.8rem;color:#aaa;">${r}</span>
        <select
          @change=${s=>{this[a]=s.target.value}}
          style="padding:8px;border-radius:6px;border:1px solid #333;background:#141414;color:#e0e0e0;min-width:180px;"
        >
          <option value="All">All</option>
          ${e.map(s=>m`<option value=${s} ?selected=${t===s}>${s}</option>`)}
        </select>
      </label>
    `}render(){const r=new Set;Q.forEach(t=>(t.tags||[]).forEach(a=>r.add(a)));const e=new Map;return Array.from(r).sort((t,a)=>t.localeCompare(a)).forEach(t=>{const a=this.getTagCategory(t),s=e.get(a)??[];s.push(t),e.set(a,s)}),Array.from(e.entries()),m`
      <header>
        <h1>Roland J-6 Preset Explorer</h1>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
          <input
            placeholder="Search by name, notes, waveform, etc..."
            .value=${this.searchQuery}
            @input=${t=>{this.searchQuery=t.target.value}}
            style="flex:1;min-width:240px;padding:8px;border-radius:6px;border:1px solid #333;background:#141414;color:#e0e0e0;"
          />
        </div>

        <div class="filter-drawer-header ${this.filtersOpen?"open":""}" @click=${()=>this.filtersOpen=!this.filtersOpen}>
          <div>
            <span style="color:#ff5500;">☰</span> <span>Filters</span>
          </div>
          <div class="toggle-icon">${this.filtersOpen?"▲":"▼"}</div>
        </div>
        <div class="filter-drawer-content ${this.filtersOpen?"open":""}">
          ${this.renderCategorySelect("Genre / Mood",e.get("Genre / Mood")||[],this.activeGenreMood,"activeGenreMood")}
          ${this.renderCategorySelect("Instrument / Type",e.get("Instrument / Type")||[],this.activeInstrumentType,"activeInstrumentType")}
          ${this.renderCategorySelect("Character",e.get("Character")||[],this.activeCharacter,"activeCharacter")}
          ${this.renderCategorySelect("Envelope",e.get("Envelope")||[],this.activeEnvelope,"activeEnvelope")}
          ${this.renderCategorySelect("Effects",e.get("Effects")||[],this.activeEffects,"activeEffects")}
          ${this.renderCategorySelect("Waveform",e.get("Waveform")||[],this.activeWaveform,"activeWaveform")}
        </div>
      </header>

      <div class="layout">
        <j6-preset-list 
          .presets=${this.filteredPresets}
          .selectedId=${this.selectedPreset.id}
          @preset-selected=${t=>this.selectedPreset=t.detail}>
        </j6-preset-list>

        <j6-preset-detail 
          .preset=${this.selectedPreset}>
        </j6-preset-detail>
      </div>
    `}};f.styles=Y`
    :host {
      display: block;
      font-family: system-ui, sans-serif;
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem;
      color: #e0e0e0;
      background-color: #121212;
    }
    .layout {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    header {
      margin-bottom: 1rem;
    }
    .filter-drawer-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 1rem;
      background: #1e1e1e;
      cursor: pointer;
      border: 1px solid #333;
      border-radius: 8px;
      font-weight: bold;
      margin-top: 1rem;
    }
    .filter-drawer-header.open {
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
    }
    .filter-drawer-header:hover {
      background: #2a2a2a;
    }
    .filter-drawer-content {
      display: none;
      background: #1e1e1e;
      border: 1px solid #333;
      border-top: none;
      border-radius: 0 0 8px 8px;
      padding: 1rem;
      align-items: flex-end;
    }
    .filter-drawer-content.open {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .toggle-icon {
      color: #ff5500;
      font-size: 0.8rem;
    }
    @media (min-width: 768px) {
      .layout {
        grid-template-columns: 400px 1fr;
      }
    }
  `;v([y()],f.prototype,"searchQuery",2);v([y()],f.prototype,"activeGenreMood",2);v([y()],f.prototype,"activeInstrumentType",2);v([y()],f.prototype,"activeCharacter",2);v([y()],f.prototype,"activeEnvelope",2);v([y()],f.prototype,"activeEffects",2);v([y()],f.prototype,"activeWaveform",2);v([y()],f.prototype,"selectedPreset",2);v([y()],f.prototype,"filtersOpen",2);f=v([se("j6-app")],f);
