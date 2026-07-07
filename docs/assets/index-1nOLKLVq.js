(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=globalThis,Z=z.ShadowRoot&&(z.ShadyCSS===void 0||z.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ee=Symbol(),ie=new WeakMap;let xe=class{constructor(e,s,r){if(this._$cssResult$=!0,r!==ee)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=s}get styleSheet(){let e=this.o;const s=this.t;if(Z&&e===void 0){const r=s!==void 0&&s.length===1;r&&(e=ie.get(s)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&ie.set(s,e))}return e}toString(){return this.cssText}};const $e=t=>new xe(typeof t=="string"?t:t+"",void 0,ee),te=(t,...e)=>{const s=t.length===1?t[0]:e.reduce((r,a,o)=>r+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+t[o+1],t[0]);return new xe(s,t,ee)},He=(t,e)=>{if(Z)t.adoptedStyleSheets=e.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of e){const r=document.createElement("style"),a=z.litNonce;a!==void 0&&r.setAttribute("nonce",a),r.textContent=s.cssText,t.appendChild(r)}},ne=Z?t=>t:t=>t instanceof CSSStyleSheet?(e=>{let s="";for(const r of e.cssRules)s+=r.cssText;return $e(s)})(t):t;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:De,defineProperty:Le,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:Oe,getOwnPropertySymbols:Ie,getPrototypeOf:Ge}=Object,k=globalThis,de=k.trustedTypes,Ne=de?de.emptyScript:"",U=k.reactiveElementPolyfillSupport,G=(t,e)=>t,W={toAttribute(t,e){switch(e){case Boolean:t=t?Ne:null;break;case Object:case Array:t=t==null?t:JSON.stringify(t)}return t},fromAttribute(t,e){let s=t;switch(e){case Boolean:s=t!==null;break;case Number:s=t===null?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch{s=null}}return s}},se=(t,e)=>!De(t,e),le={attribute:!0,type:String,converter:W,reflect:!1,useDefault:!1,hasChanged:se};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),k.litPropertyMetadata??(k.litPropertyMetadata=new WeakMap);let D=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,s=le){if(s.state&&(s.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((s=Object.create(s)).wrapped=!0),this.elementProperties.set(e,s),!s.noAccessor){const r=Symbol(),a=this.getPropertyDescriptor(e,r,s);a!==void 0&&Le(this.prototype,e,a)}}static getPropertyDescriptor(e,s,r){const{get:a,set:o}=Pe(this.prototype,e)??{get(){return this[s]},set(i){this[s]=i}};return{get:a,set(i){const n=a==null?void 0:a.call(this);o==null||o.call(this,i),this.requestUpdate(e,n,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??le}static _$Ei(){if(this.hasOwnProperty(G("elementProperties")))return;const e=Ge(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(G("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(G("properties"))){const s=this.properties,r=[...Oe(s),...Ie(s)];for(const a of r)this.createProperty(a,s[a])}const e=this[Symbol.metadata];if(e!==null){const s=litPropertyMetadata.get(e);if(s!==void 0)for(const[r,a]of s)this.elementProperties.set(r,a)}this._$Eh=new Map;for(const[s,r]of this.elementProperties){const a=this._$Eu(s,r);a!==void 0&&this._$Eh.set(a,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const s=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const a of r)s.unshift(ne(a))}else e!==void 0&&s.push(ne(e));return s}static _$Eu(e,s){const r=s.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(s=>s(this))}addController(e){var s;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((s=e.hostConnected)==null||s.call(e))}removeController(e){var s;(s=this._$EO)==null||s.delete(e)}_$E_(){const e=new Map,s=this.constructor.elementProperties;for(const r of s.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return He(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostConnected)==null?void 0:r.call(s)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(s=>{var r;return(r=s.hostDisconnected)==null?void 0:r.call(s)})}attributeChangedCallback(e,s,r){this._$AK(e,r)}_$ET(e,s){var o;const r=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,r);if(a!==void 0&&r.reflect===!0){const i=(((o=r.converter)==null?void 0:o.toAttribute)!==void 0?r.converter:W).toAttribute(s,r.type);this._$Em=e,i==null?this.removeAttribute(a):this.setAttribute(a,i),this._$Em=null}}_$AK(e,s){var o,i;const r=this.constructor,a=r._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const n=r.getPropertyOptions(a),d=typeof n.converter=="function"?{fromAttribute:n.converter}:((o=n.converter)==null?void 0:o.fromAttribute)!==void 0?n.converter:W;this._$Em=a;const c=d.fromAttribute(s,n.type);this[a]=c??((i=this._$Ej)==null?void 0:i.get(a))??c,this._$Em=null}}requestUpdate(e,s,r,a=!1,o){var i;if(e!==void 0){const n=this.constructor;if(a===!1&&(o=this[e]),r??(r=n.getPropertyOptions(e)),!((r.hasChanged??se)(o,s)||r.useDefault&&r.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(n._$Eu(e,r))))return;this.C(e,s,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,s,{useDefault:r,reflect:a,wrapped:o},i){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??s??this[e]),o!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(s=void 0),this._$AL.set(e,s)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var r;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[o,i]of a){const{wrapped:n}=i,d=this[o];n!==!0||this._$AL.has(o)||d===void 0||this.C(o,void 0,i,d)}}let e=!1;const s=this._$AL;try{e=this.shouldUpdate(s),e?(this.willUpdate(s),(r=this._$EO)==null||r.forEach(a=>{var o;return(o=a.hostUpdate)==null?void 0:o.call(a)}),this.update(s)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(s)}willUpdate(e){}_$AE(e){var s;(s=this._$EO)==null||s.forEach(r=>{var a;return(a=r.hostUpdated)==null?void 0:a.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(s=>this._$ET(s,this[s]))),this._$EM()}updated(e){}firstUpdated(e){}};D.elementStyles=[],D.shadowRootOptions={mode:"open"},D[G("elementProperties")]=new Map,D[G("finalized")]=new Map,U==null||U({ReactiveElement:D}),(k.reactiveElementVersions??(k.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,ce=t=>t,Y=N.trustedTypes,pe=Y?Y.createPolicy("lit-html",{createHTML:t=>t}):void 0,ye="$lit$",M=`lit$${Math.random().toFixed(9).slice(2)}$`,we="?"+M,Te=`<${we}>`,E=document,T=()=>E.createComment(""),B=t=>t===null||typeof t!="object"&&typeof t!="function",ae=Array.isArray,Be=t=>ae(t)||typeof(t==null?void 0:t[Symbol.iterator])=="function",J=`[ 	
\f\r]`,I=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,he=/-->/g,ue=/>/g,_=RegExp(`>|${J}(?:([^\\s"'>=/]+)(${J}*=${J}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),me=/'/g,ge=/"/g,Me=/^(?:script|style|textarea|title)$/i,je=t=>(e,...s)=>({_$litType$:t,strings:e,values:s}),h=je(1),L=Symbol.for("lit-noChange"),g=Symbol.for("lit-nothing"),fe=new WeakMap,F=E.createTreeWalker(E,129);function ke(t,e){if(!ae(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return pe!==void 0?pe.createHTML(e):e}const Re=(t,e)=>{const s=t.length-1,r=[];let a,o=e===2?"<svg>":e===3?"<math>":"",i=I;for(let n=0;n<s;n++){const d=t[n];let c,l,p=-1,b=0;for(;b<d.length&&(i.lastIndex=b,l=i.exec(d),l!==null);)b=i.lastIndex,i===I?l[1]==="!--"?i=he:l[1]!==void 0?i=ue:l[2]!==void 0?(Me.test(l[2])&&(a=RegExp("</"+l[2],"g")),i=_):l[3]!==void 0&&(i=_):i===_?l[0]===">"?(i=a??I,p=-1):l[1]===void 0?p=-2:(p=i.lastIndex-l[2].length,c=l[1],i=l[3]===void 0?_:l[3]==='"'?ge:me):i===ge||i===me?i=_:i===he||i===ue?i=I:(i=_,a=void 0);const v=i===_&&t[n+1].startsWith("/>")?" ":"";o+=i===I?d+Te:p>=0?(r.push(c),d.slice(0,p)+ye+d.slice(p)+M+v):d+M+(p===-2?n:v)}return[ke(t,o+(t[s]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),r]};class j{constructor({strings:e,_$litType$:s},r){let a;this.parts=[];let o=0,i=0;const n=e.length-1,d=this.parts,[c,l]=Re(e,s);if(this.el=j.createElement(c,r),F.currentNode=this.el.content,s===2||s===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=F.nextNode())!==null&&d.length<n;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(ye)){const b=l[i++],v=a.getAttribute(p).split(M),H=/([.?@])?(.*)/.exec(b);d.push({type:1,index:o,name:H[2],strings:v,ctor:H[1]==="."?ze:H[1]==="?"?We:H[1]==="@"?Ye:V}),a.removeAttribute(p)}else p.startsWith(M)&&(d.push({type:6,index:o}),a.removeAttribute(p));if(Me.test(a.tagName)){const p=a.textContent.split(M),b=p.length-1;if(b>0){a.textContent=Y?Y.emptyScript:"";for(let v=0;v<b;v++)a.append(p[v],T()),F.nextNode(),d.push({type:2,index:++o});a.append(p[b],T())}}}else if(a.nodeType===8)if(a.data===we)d.push({type:2,index:o});else{let p=-1;for(;(p=a.data.indexOf(M,p+1))!==-1;)d.push({type:7,index:o}),p+=M.length-1}o++}}static createElement(e,s){const r=E.createElement("template");return r.innerHTML=e,r}}function P(t,e,s=t,r){var i,n;if(e===L)return e;let a=r!==void 0?(i=s._$Co)==null?void 0:i[r]:s._$Cl;const o=B(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==o&&((n=a==null?void 0:a._$AO)==null||n.call(a,!1),o===void 0?a=void 0:(a=new o(t),a._$AT(t,s,r)),r!==void 0?(s._$Co??(s._$Co=[]))[r]=a:s._$Cl=a),a!==void 0&&(e=P(t,a._$AS(t,e.values),a,r)),e}class qe{constructor(e,s){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:s},parts:r}=this._$AD,a=((e==null?void 0:e.creationScope)??E).importNode(s,!0);F.currentNode=a;let o=F.nextNode(),i=0,n=0,d=r[0];for(;d!==void 0;){if(i===d.index){let c;d.type===2?c=new R(o,o.nextSibling,this,e):d.type===1?c=new d.ctor(o,d.name,d.strings,this,e):d.type===6&&(c=new Ve(o,this,e)),this._$AV.push(c),d=r[++n]}i!==(d==null?void 0:d.index)&&(o=F.nextNode(),i++)}return F.currentNode=E,a}p(e){let s=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(e,r,s),s+=r.strings.length-2):r._$AI(e[s])),s++}}class R{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,s,r,a){this.type=2,this._$AH=g,this._$AN=void 0,this._$AA=e,this._$AB=s,this._$AM=r,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=s.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,s=this){e=P(this,e,s),B(e)?e===g||e==null||e===""?(this._$AH!==g&&this._$AR(),this._$AH=g):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Be(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==g&&B(this._$AH)?this._$AA.nextSibling.data=e:this.T(E.createTextNode(e)),this._$AH=e}$(e){var o;const{values:s,_$litType$:r}=e,a=typeof r=="number"?this._$AC(e):(r.el===void 0&&(r.el=j.createElement(ke(r.h,r.h[0]),this.options)),r);if(((o=this._$AH)==null?void 0:o._$AD)===a)this._$AH.p(s);else{const i=new qe(a,this),n=i.u(this.options);i.p(s),this.T(n),this._$AH=i}}_$AC(e){let s=fe.get(e.strings);return s===void 0&&fe.set(e.strings,s=new j(e)),s}k(e){ae(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let r,a=0;for(const o of e)a===s.length?s.push(r=new R(this.O(T()),this.O(T()),this,this.options)):r=s[a],r._$AI(o),a++;a<s.length&&(this._$AR(r&&r._$AB.nextSibling,a),s.length=a)}_$AR(e=this._$AA.nextSibling,s){var r;for((r=this._$AP)==null?void 0:r.call(this,!1,!0,s);e!==this._$AB;){const a=ce(e).nextSibling;ce(e).remove(),e=a}}setConnected(e){var s;this._$AM===void 0&&(this._$Cv=e,(s=this._$AP)==null||s.call(this,e))}}class V{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,s,r,a,o){this.type=1,this._$AH=g,this._$AN=void 0,this.element=e,this.name=s,this._$AM=a,this.options=o,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=g}_$AI(e,s=this,r,a){const o=this.strings;let i=!1;if(o===void 0)e=P(this,e,s,0),i=!B(e)||e!==this._$AH&&e!==L,i&&(this._$AH=e);else{const n=e;let d,c;for(e=o[0],d=0;d<o.length-1;d++)c=P(this,n[r+d],s,d),c===L&&(c=this._$AH[d]),i||(i=!B(c)||c!==this._$AH[d]),c===g?e=g:e!==g&&(e+=(c??"")+o[d+1]),this._$AH[d]=c}i&&!a&&this.j(e)}j(e){e===g?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class ze extends V{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===g?void 0:e}}class We extends V{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==g)}}class Ye extends V{constructor(e,s,r,a,o){super(e,s,r,a,o),this.type=5}_$AI(e,s=this){if((e=P(this,e,s,0)??g)===L)return;const r=this._$AH,a=e===g&&r!==g||e.capture!==r.capture||e.once!==r.once||e.passive!==r.passive,o=e!==g&&(r===g||a);a&&this.element.removeEventListener(this.name,this,r),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,e):this._$AH.handleEvent(e)}}class Ve{constructor(e,s,r){this.element=e,this.type=6,this._$AN=void 0,this._$AM=s,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const Q=N.litHtmlPolyfillSupport;Q==null||Q(j,R),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.3");const Ue=(t,e,s)=>{const r=(s==null?void 0:s.renderBefore)??e;let a=r._$litPart$;if(a===void 0){const o=(s==null?void 0:s.renderBefore)??null;r._$litPart$=a=new R(e.insertBefore(T(),o),o,void 0,s??{})}return a._$AI(t),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis;class S extends D{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const e=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=e.firstChild),e}update(e){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ue(s,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return L}}var ve;S._$litElement$=!0,S.finalized=!0,(ve=C.litElementHydrateSupport)==null||ve.call(C,{LitElement:S});const K=C.litElementPolyfillSupport;K==null||K({LitElement:S});(C.litElementVersions??(C.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const re=t=>(e,s)=>{s!==void 0?s.addInitializer(()=>{customElements.define(t,e)}):customElements.define(t,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Je={attribute:!0,type:String,converter:W,reflect:!1,hasChanged:se},Qe=(t=Je,e,s)=>{const{kind:r,metadata:a}=s;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),r==="setter"&&((t=Object.create(t)).wrapped=!0),o.set(s.name,t),r==="accessor"){const{name:i}=s;return{set(n){const d=e.get.call(this);e.set.call(this,n),this.requestUpdate(i,d,t,!0,n)},init(n){return n!==void 0&&this.C(i,void 0,t,n),n}}}if(r==="setter"){const{name:i}=s;return function(n){const d=this[i];e.call(this,n),this.requestUpdate(i,d,t,!0,n)}}throw Error("Unsupported decorator location: "+r)};function oe(t){return(e,s)=>typeof s=="object"?Qe(t,e,s):((r,a,o)=>{const i=a.hasOwnProperty(o);return a.constructor.createProperty(o,r),i?Object.getOwnPropertyDescriptor(a,o):void 0})(t,e,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function m(t){return oe({...t,state:!0,attribute:!1})}const Ke=[{blank:"",preset:"1 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"I",notes_description:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",bankPatch:"1-1",soundNameCategory:"Mellow Sub Octave Pluck",notesDescription:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Low (Low -> Mid)",r:"None",blank_3:"Off",notes_description:"Square Pluck:",bankPatch:"1-2",soundNameCategory:"Square Pluck",notesDescription:"Square Pluck:",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Low (Low -> Mid)",release:"None",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 3",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Mellow Mallet: Sustains once Envelope control is past 50%",bankPatch:"1-3",soundNameCategory:"Mellow Mallet",notesDescription:"Mellow Mallet: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 4",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"High",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-4",soundNameCategory:"Noisy Mellow Pluck",notesDescription:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 5",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-5",soundNameCategory:"Noisy Octave Pluck",notesDescription:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 6",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"Mid",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"Off",notes_description:"Harpsichord: Sustains + PWM once Envelope control is past 50%",bankPatch:"1-6",soundNameCategory:"Harpsichord",notesDescription:"Harpsichord: Sustains + PWM once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"1 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"15%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"I",notes_description:"Chorus Clavinet: Sustains once Envelope control is past 50%",bankPatch:"1-7",soundNameCategory:"Chorus Clavinet",notesDescription:"Chorus Clavinet: Sustains once Envelope control is past 50%",waveformOscType:"Fixed + Sub 15%",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Chorus Harp: Mild Sustain once Envelope control is past 50%",bankPatch:"1-8",soundNameCategory:"Chorus Harp",notesDescription:"Chorus Harp: Mild Sustain once Envelope control is past 50%",waveformOscType:"Sub 100% + Square",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 1",glide:"x",octave:"+1",rate:"1/8th",delay:"x",lfo:"x",pwm:"LFO*",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",bankPatch:"2-1",soundNameCategory:"Staccato Steel Drum",notesDescription:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Low",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",bankPatch:"2-2",soundNameCategory:"Bright Detuned Saw Pluck",notesDescription:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",waveformOscType:"Saw",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",bankPatch:"2-3",soundNameCategory:"Synthy 80s Clean Guitar",notesDescription:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 4",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"II",notes_description:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",bankPatch:"2-4",soundNameCategory:"Gliding Noisy Pluck",notesDescription:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> Mid)",r:"Fast",blank_3:"II",notes_description:"Octave Splash: Mild Sustain once Envelope control is past 50%",bankPatch:"2-5",soundNameCategory:"Octave Splash",notesDescription:"Octave Splash: Mild Sustain once Envelope control is past 50%",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> Mid)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 6",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"Mid",blank_2:"Y",freq:"Mid",res:"High",env:"+ Mid",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Plectrum Wind:",bankPatch:"2-6",soundNameCategory:"Plectrum Wind",notesDescription:"Plectrum Wind:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"High",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"II",notes_description:"Plectrum Mellotron Chorus:",bankPatch:"2-7",soundNameCategory:"Plectrum Mellotron Chorus",notesDescription:"Plectrum Mellotron Chorus:",waveformOscType:"Sub 100% + Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"2 - 8",glide:"x",octave:"0",rate:"Fast",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Air Harp:",bankPatch:"2-8",soundNameCategory:"Air Harp",notesDescription:"Air Harp:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"Y"},{blank:"",preset:"3 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Slow",s_control_range:"Low (Low -> High)",r:"Slow",blank_3:"I",notes_description:"Ambient Piano:",bankPatch:"3-1",soundNameCategory:"Ambient Piano",notesDescription:"Ambient Piano:",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"None",decay:"Slow",sustain:"Low (Low -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"Off",notes_description:"Synth Vibraphone:",bankPatch:"3-2",soundNameCategory:"Synth Vibraphone",notesDescription:"Synth Vibraphone:",waveformOscType:"Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Hammered Dulcimar:",bankPatch:"3-3",soundNameCategory:"Hammered Dulcimar",notesDescription:"Hammered Dulcimar:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"3 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"I",notes_description:"Saw Piano:",bankPatch:"3-4",soundNameCategory:"Saw Piano",notesDescription:"Saw Piano:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"Fast",d:"Mid",s_control_range:"Mid (Low -> High)",r:"None",blank_3:"I",notes_description:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",bankPatch:"3-5",soundNameCategory:"Brass Pluck",notesDescription:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"Mid (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 6",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Resonant Blown Glass:",bankPatch:"3-6",soundNameCategory:"Resonant Blown Glass",notesDescription:"Resonant Blown Glass:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",bankPatch:"3-7",soundNameCategory:"Acid Saw",notesDescription:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 8",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",bankPatch:"3-8",soundNameCategory:"Bright Trumpet",notesDescription:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",waveformOscType:"Saw + Low",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"4 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"II",notes_description:"Octave PWM Lead:",bankPatch:"4-1",soundNameCategory:"Octave PWM Lead",notesDescription:"Octave PWM Lead:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 2",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"x",lfo_2:"High",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"I",notes_description:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",bankPatch:"4-2",soundNameCategory:"Gliding Pulse Lead I",notesDescription:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",waveformOscType:"Fixed + Sub 25%",filterFreq:"High",resonance:"High",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"4 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Slow PWM Lead:",bankPatch:"4-3",soundNameCategory:"Slow PWM Lead",notesDescription:"Slow PWM Lead:",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"High",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Vibrato Saw Lead:",bankPatch:"4-4",soundNameCategory:"Vibrato Saw Lead",notesDescription:"Vibrato Saw Lead:",waveformOscType:"Saw + High",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 5",glide:"Mid",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"II",notes_description:"Gliding Pluse Lead II:",bankPatch:"4-5",soundNameCategory:"Gliding Pluse Lead II",notesDescription:"Gliding Pluse Lead II:",waveformOscType:"Fixed + Sub 25% + Low",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 6",glide:"x",octave:"",rate:"Fast",delay:"Y",lfo:"Mid",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Dirty Strings:",bankPatch:"4-6",soundNameCategory:"Octave Dirty Strings",notesDescription:"Octave Dirty Strings:",waveformOscType:"Saw + Fixed + Sub 25% + Mid",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Mixed Lead:",bankPatch:"4-7",soundNameCategory:"Octave Mixed Lead",notesDescription:"Octave Mixed Lead:",waveformOscType:"Saw + Fixed + Sub 25%",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"Low",blank_2:"Y",freq:"High",res:"High",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Blown Octave Square:",bankPatch:"4-8",soundNameCategory:"Blown Octave Square",notesDescription:"Blown Octave Square:",waveformOscType:"Sub 100% + Square",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 1",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"I",notes_description:"Thick Attack Lead:",bankPatch:"5-1",soundNameCategory:"Thick Attack Lead",notesDescription:"Thick Attack Lead:",waveformOscType:"Saw + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"5 - 2",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"Off",notes_description:"The Fake Slim Shady:",bankPatch:"5-2",soundNameCategory:"The Fake Slim Shady",notesDescription:"The Fake Slim Shady:",waveformOscType:"Saw + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"Low",blank_2:"Y",freq:"Mid",res:"High",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Ya-ee Choir:",bankPatch:"5-3",soundNameCategory:"Ya-ee Choir",notesDescription:"Ya-ee Choir:",waveformOscType:"Saw + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Dark Strings:",bankPatch:"5-4",soundNameCategory:"Dark Strings",notesDescription:"Dark Strings:",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 5",glide:"Slow",octave:"+1",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Angry Cat: Gliding noisy lead with fast filter modulation",bankPatch:"5-5",soundNameCategory:"Angry Cat",notesDescription:"Angry Cat: Gliding noisy lead with fast filter modulation",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 6",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Choir:",bankPatch:"5-6",soundNameCategory:"Brass Choir",notesDescription:"Brass Choir:",waveformOscType:"LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 7",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Whoa Flute:",bankPatch:"5-7",soundNameCategory:"Whoa Flute",notesDescription:"Whoa Flute:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 8",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"II",notes_description:"Honky Tonk Clav: (Great bass sounds)",bankPatch:"5-8",soundNameCategory:"Honky Tonk Clav",notesDescription:"Honky Tonk Clav: (Great bass sounds)",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"I",notes_description:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-1",soundNameCategory:"PWM Envelope",notesDescription:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Env + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 2",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Mid",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"Off",notes_description:"Solo String:",bankPatch:"6-2",soundNameCategory:"Solo String",notesDescription:"Solo String:",waveformOscType:"Saw + Mid",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 3",glide:"x",octave:"0",rate:"Max",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Square Ring Mod:",bankPatch:"6-3",soundNameCategory:"Square Ring Mod",notesDescription:"Square Ring Mod:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Low -> High)",r:"Fast",blank_3:"Off",notes_description:"Mellow Trumpet:",bankPatch:"6-4",soundNameCategory:"Mellow Trumpet",notesDescription:"Mellow Trumpet:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Low -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 5",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Horn:",bankPatch:"6-5",soundNameCategory:"Horn",notesDescription:"Horn:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 6",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"I",notes_description:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-6",soundNameCategory:"Square Chorus Lead",notesDescription:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Clarinet:",bankPatch:"6-7",soundNameCategory:"Clarinet",notesDescription:"Clarinet:",waveformOscType:"Square + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 8",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"x",sub:"x",noise:"High",blank_2:"Y",freq:"Tuned*",res:"Max*",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",bankPatch:"6-8",soundNameCategory:"Ocarina",notesDescription:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",waveformOscType:"Unknown",filterFreq:"Tuned*",resonance:"Max*",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"7 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"PWM String Ensemble I:",bankPatch:"7-1",soundNameCategory:"PWM String Ensemble I",notesDescription:"PWM String Ensemble I:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 2",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"Saw String Ensemble:",bankPatch:"7-2",soundNameCategory:"Saw String Ensemble",notesDescription:"Saw String Ensemble:",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 3",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Ensemble:",bankPatch:"7-3",soundNameCategory:"Brass Ensemble",notesDescription:"Brass Ensemble:",waveformOscType:"Saw + Sub 100% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 4",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"PWM String Ensemble II:",bankPatch:"7-4",soundNameCategory:"PWM String Ensemble II",notesDescription:"PWM String Ensemble II:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 5",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"25%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Ghost Pad: (Open filter for Noisy String Ensemble)",bankPatch:"7-5",soundNameCategory:"Ghost Pad",notesDescription:"Ghost Pad: (Open filter for Noisy String Ensemble)",waveformOscType:"Saw + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Mid",decay:"Mid",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"7 - 6",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"- Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad I (Bright):",bankPatch:"7-6",soundNameCategory:"Evolving Filter Pad I (Bright)",notesDescription:"Evolving Filter Pad I (Bright):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Low",envMod:"- Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad II (Mellow):",bankPatch:"7-7",soundNameCategory:"Evolving Filter Pad II (Mellow)",notesDescription:"Evolving Filter Pad II (Mellow):",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 8",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad III (Mellow Slow and Wide):",bankPatch:"7-8",soundNameCategory:"Evolving Filter Pad III (Mellow Slow and Wide)",notesDescription:"Evolving Filter Pad III (Mellow Slow and Wide):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Mid",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 1",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"50%",noise:"Low",blank_2:"x",freq:"Mid",res:"High",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad IV (Bright Slow and Wide):",bankPatch:"8-1",soundNameCategory:"Evolving Filter Pad IV (Bright Slow and Wide)",notesDescription:"Evolving Filter Pad IV (Bright Slow and Wide):",waveformOscType:"Sub 50% + Fixed + Sub 20%",filterFreq:"Mid",resonance:"High",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 2",glide:"Mid",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad V (Squishy I):",bankPatch:"8-2",soundNameCategory:"Evolving Filter Pad V (Squishy I)",notesDescription:"Evolving Filter Pad V (Squishy I):",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 3",glide:"x",octave:"0",rate:"Slow",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Evolving Filter Pad VI (Squishy II):",bankPatch:"8-3",soundNameCategory:"Evolving Filter Pad VI (Squishy II)",notesDescription:"Evolving Filter Pad VI (Squishy II):",waveformOscType:"Fixed + Sub 20%",filterFreq:"High",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 4",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Low",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad VII (Blossoming I):",bankPatch:"8-4",soundNameCategory:"Evolving Filter Pad VII (Blossoming I)",notesDescription:"Evolving Filter Pad VII (Blossoming I):",waveformOscType:"Saw + Sub 50%",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"Slow",decay:"Mid",sustain:"High (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Evolving Filter Pad VII (Blossoming II):",bankPatch:"8-5",soundNameCategory:"Evolving Filter Pad VII (Blossoming II)",notesDescription:"Evolving Filter Pad VII (Blossoming II):",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Slow",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"8 - 6",glide:"x",octave:"+1",rate:"Fast",delay:"Y",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Slow",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"I",notes_description:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",bankPatch:"8-6",soundNameCategory:"Decaying Filter Pad (Blossoming III)",notesDescription:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Slow",sustain:"Off (Off -> High)",release:"Fast",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"High",env:"+ Low",lfo_2:"High*",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",bankPatch:"8-7",soundNameCategory:"Sample and Hold Pad",notesDescription:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",waveformOscType:"Saw + Sub 100%",filterFreq:"Low",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 8",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"Slow",blank_3:"II",notes_description:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",bankPatch:"8-8",soundNameCategory:"Plectrum Tremolo Pad",notesDescription:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"Slow",chorus:"II",delayReverb:"x"}],Xe=[[/deadmau5/i,["Progressive House","EDM"]],[/avicii/i,["Melodic EDM","Pop"]],[/chiptune/i,["Chiptune","Retro"]],[/lo[- ]?fi/i,["Lo-Fi"]],[/house/i,["House"]],[/trance/i,["Trance"]],[/dance/i,["Dance"]],[/ambient/i,["Ambient"]],[/juno/i,["Vintage","Analog"]],[/303/i,["Acid","Bassline"]],[/bass/i,["Bass"]],[/brass/i,["Brass"]],[/organ/i,["Organ"]],[/strings/i,["Strings"]],[/piano/i,["Piano"]],[/pad/i,["Pad"]],[/lead/i,["Lead"]],[/pluck/i,["Pluck"]],[/synth/i,["Synth"]],[/noise/i,["Noise"]],[/bell/i,["Bell"]],[/vintage/i,["Vintage"]],[/metallic/i,["Metallic"]],[/dark/i,["Dark"]],[/bright/i,["Bright"]],[/soft/i,["Soft"]],[/aggressive/i,["Aggressive"]],[/hyper pop/i,["Hyperpop"]],[/rock/i,["Rock"]],[/house music/i,["House"]],[/deep house/i,["Deep House"]],[/hip hop/i,["Hip Hop"]],[/rnb/i,["R&B"]],[/sci-fi/i,["Sci-Fi"]],[/industrial/i,["Industrial"]],[/noise style/i,["Noise"]],[/soundtrack/i,["Soundtrack"]]];function u(t,e){Array.isArray(e)?e.forEach(s=>s&&t.add(s)):e&&t.add(e)}function Ze(t){const e=new Set,s=t.notesDescription||"",r=(t.soundNameCategory||"").toLowerCase(),a=/\(([^)]+)\)/g;let o;for(;(o=a.exec(s))!==null;){const d=o[1].trim();d&&(/^good for\s+/i.test(d)||u(e,d))}Xe.forEach(([d,c])=>{(d.test(s)||d.test(r))&&u(e,c)}),[[/pad/i,"Pad"],[/lead/i,"Lead"],[/bass/i,"Bass"],[/keys/i,"Keys"],[/organ/i,"Organ"],[/piano/i,"Piano"],[/pluck/i,"Pluck"],[/brass/i,"Brass"],[/strings/i,"Strings"],[/bell/i,"Bell"],[/whistle/i,"Whistle"],[/clav/i,"Clav"],[/synth/i,"Synth"]].forEach(([d,c])=>{t.soundNameCategory&&d.test(t.soundNameCategory)&&u(e,c)});const n=(t.waveformOscType||"").toLowerCase();return n.includes("saw")&&u(e,"Saw"),n.includes("square")&&u(e,"Square"),n.includes("sub")&&u(e,"Sub"),n.includes("noise")&&u(e,"Noise"),n.includes("triangle")&&u(e,"Triangle"),n.includes("sync")&&u(e,"Sync"),n.includes("pwm")&&u(e,"PWM"),(n.includes("cross-mod")||n.includes("cross mod"))&&u(e,"Cross-Mod"),t.filterFreq==="High"&&u(e,"Bright"),t.filterFreq==="Low"&&u(e,"Dark"),t.resonance==="High"&&u(e,"Resonant"),t.resonance==="Low"&&u(e,"Smooth"),t.attack==="Fast"&&u(e,"Sharp Attack"),t.attack==="Slow"&&u(e,"Slow Attack"),t.release==="Slow"&&u(e,"Long Release"),t.release==="Fast"&&u(e,"Snappy Release"),t.sustain==="Max"&&u(e,"Sustained"),t.chorus&&t.chorus!=="Off"&&u(e,t.chorus),t.delayReverb&&t.delayReverb!=="Off"&&u(e,t.delayReverb),Array.from(e)}function et(t){const e=t.toLowerCase();return/^(progressive house|edm|melodic edm|pop|chiptune|retro|lo-fi|house|trance|dance|ambient|acid|bassline|hip hop|r&b|sci-fi|industrial|soundtrack|hyperpop|rock|vintage|analog)$/.test(e)?"Genre / Mood":/^(pad|lead|bass|keys|organ|piano|pluck|brass|strings|bell|whistle|clav|synth)$/.test(e)?"Instrument / Type":/^(bright|dark|soft|aggressive|metallic|noise|smooth|resonant|sustained)$/.test(e)?"Character":/^(sharp attack|slow attack|long release|snappy release)$/.test(e)?"Envelope":/^(chorus|reverb|delay|chorus \d|reverb \d|delay \d)$/.test(e)?"Effects":/^(saw|square|sub|triangle|sync|pwm|cross-mod)$/.test(e)?"Waveform":"Other"}function X(t){if(!t)return 0;const e=t.toLowerCase().trim();return e.includes("none")||e==="x"?0:e.includes("fast")?20:e.includes("mid")||e.includes("med")?60:e.includes("slow")?100:0}function tt(t){if(!t)return 0;const e=t.toLowerCase().trim();return e.includes("off")||e==="x"?0:e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")||e.includes("max")?100:0}function st(t){if(!t)return 50;const e=t.toLowerCase().trim();return e.includes("low")?15:e.includes("mid")||e.includes("med")?55:e.includes("high")?85:e.includes("tuned")?70:50}function at(t){if(!t)return 0;const e=t.toLowerCase().trim();return e.includes("low")?10:e.includes("mid")||e.includes("med")?45:e.includes("high")?80:e.includes("max")?100:0}function rt(t){if(!t||t==="x")return 50;const e=t.toLowerCase().trim();return e.includes("- med")||e.includes("- high")?15:e.includes("- low")?35:e.includes("+ low")?65:e.includes("+ mid")||e.includes("+ med")?80:e.includes("+ high")?95:50}function ot(t){if(!t||t==="x")return 0;const e=t.toLowerCase().trim();return e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")?100:0}function it(t){if(!t||t==="x")return 0;const e=t.toLowerCase().trim();return e.includes("fixed")?30:e.includes("env")?50:e.includes("lfo")?85:0}var nt=Object.defineProperty,dt=Object.getOwnPropertyDescriptor,x=(t,e,s,r)=>{for(var a=r>1?void 0:r?dt(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&nt(e,s,a),a};let f=class extends S{constructor(){super(...arguments),this.presets=[],this.selectedId="",this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All",this.filtersOpen=!1}clearFilters(){this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All"}get hasActiveFilters(){return this.searchQuery!==""||this.activeGenreMood!=="All"||this.activeInstrumentType!=="All"||this.activeCharacter!=="All"||this.activeEnvelope!=="All"||this.activeEffects!=="All"||this.activeWaveform!=="All"}get filteredPresets(){const t=this.searchQuery.trim().toLowerCase();return this.presets.filter(e=>{const s=[e.name,e.notes,e.waveformOscType,e.bankPatch,e.filterFreq,e.delayEffects,(e.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase(),r=t===""||s.includes(t),a=this.activeGenreMood==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeGenreMood.toLowerCase()),o=this.activeInstrumentType==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeInstrumentType.toLowerCase()),i=this.activeCharacter==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeCharacter.toLowerCase()),n=this.activeEnvelope==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeEnvelope.toLowerCase()),d=this.activeEffects==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeEffects.toLowerCase()),c=this.activeWaveform==="All"||(e.tags||[]).some(l=>l.toLowerCase()===this.activeWaveform.toLowerCase());return r&&a&&o&&i&&n&&d&&c})}get groupedTags(){const t=new Set;this.presets.forEach(s=>(s.tags||[]).forEach(r=>t.add(r)));const e=new Map;return Array.from(t).sort((s,r)=>s.localeCompare(r)).forEach(s=>{const r=et(s),a=e.get(r)??[];a.push(s),e.set(r,a)}),e}renderCategorySelect(t,e,s,r){return h`
      <div class="filter-group">
        <label>${t}</label>
        <select
          class="filter-select"
          .value=${s}
          @change=${a=>{this[r]=a.target.value}}
        >
          <option value="All">All</option>
          ${e.map(a=>h`<option value=${a} ?selected=${s===a}>${a}</option>`)}
        </select>
      </div>
    `}render(){const t=this.filteredPresets,e=t.filter(a=>(a.tags||[]).some(o=>o.toLowerCase()==="bass")).length,s=t.filter(a=>(a.tags||[]).some(o=>o.toLowerCase()==="pad")).length,r=t.filter(a=>(a.tags||[]).some(o=>o.toLowerCase()==="lead")).length;return h`
      <div class="list-header">
        <div class="header-top">
          <div class="led-search-screen">
            <input 
              class="led-search-input" 
              placeholder="SEARCH..."
              .value=${this.searchQuery}
              @input=${a=>{this.searchQuery=a.target.value}}
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
          <span class="preset-count">MATCH: ${t.length}</span>
          <div class="patch-counts">
            FILTERED (BASS: ${e}, PAD: ${s}, LEAD: ${r})
          </div>
        </div>
      </div>
      
      ${this.filtersOpen?h`
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
        ${t.length===0?h`<div class="no-results">NO PRESETS FOUND</div>`:h`
            <ul>
              ${t.map(a=>{const o=a.id||a.bankPatch,i=a.name||a.soundNameCategory,n=this.selectedId===o;return h`
                  <li 
                    class=${n?"selected":""} 
                    @click=${()=>{this.dispatchEvent(new CustomEvent("preset-selected",{detail:a}))}}
                  >
                    <span class="preset-id">${o}</span>
                    <span class="preset-name">${i}</span>
                  </li>
                `})}
            </ul>
          `}
      </div>
    `}};f.styles=te`
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
  `;x([oe({type:Array})],f.prototype,"presets",2);x([oe({type:String})],f.prototype,"selectedId",2);x([m()],f.prototype,"searchQuery",2);x([m()],f.prototype,"activeGenreMood",2);x([m()],f.prototype,"activeInstrumentType",2);x([m()],f.prototype,"activeCharacter",2);x([m()],f.prototype,"activeEnvelope",2);x([m()],f.prototype,"activeEffects",2);x([m()],f.prototype,"activeWaveform",2);x([m()],f.prototype,"filtersOpen",2);f=x([re("j6-preset-list")],f);const lt=[{number:1,genre:"Pop",chords:["Cadd9","C#M9/C","Dm7","D#M7","Cadd9/E","FM9","Dadd9/F#","Em7/G","Fm6/G#","FM/A","Gm/A#","G/B"]},{number:2,genre:"Pop",chords:["CM9","C#dim7","Dm9","D#dim7","Em7","FM9","F#m7b5","F/A","G#dim7","Am9","C/A#","Bm7b5"]},{number:3,genre:"Jazz",chords:["D7sus2/C","C#7#9","Dm9","D7#9","E7#9","FM9","F#7#9","G7(13)","G#7(13)","Am7(11)","A#9","Bm7(11)"]},{number:4,genre:"Jazz",chords:["Dsus2/C","C#7#9","Dm9","D#9","Em9","Fm9","F#m7b5","Gaug7","G#7(13)","Aaug7","A#7(13)","Bm7(11)"]},{number:5,genre:"Jazz",chords:["CM9","C#M7","DM9","D#M9","EM9","FM9","F#M9","GM9","G#M9","AM9","A#M9","BM9"]},{number:6,genre:"Blues",chords:["C9","C#9","D9","D#9","E7#9","Fm9","F#dim7","G7(13)","G#dim7","Aaug7","A#7(13)","Bm7b5"]},{number:7,genre:"Trad Maj",chords:["C","C#dim7","Dm","D#dim7","Em","F","F#m7b5","G","G#dim7","Am","A#","Bdim"]},{number:8,genre:"Trad Min",chords:["Cm","C#","Ddim","Eb","Edim7","Fm","F#dim7","Gm","G#","Am7b5","A#","Bdim7"]},{number:9,genre:"Trad Min 2",chords:["Cm","C#","Ddim","D#aug","Em","Fm","F#dim7","G","G#","Am7b5","A#","Bdim"]},{number:10,genre:"Pop Min",chords:["Cmadd9","C#M7","Dm7b5","D#M7","Edim7","Fm9","F#dim7","Gm7","G#M7","Am7b5","G#/A#","Bdim7"]},{number:11,genre:"Pop Min",chords:["Cmadd9","Gdim/C#","Dm7b5","D#M7","EM9","Fm9","F#dim7","Gaug7","G#M7","Am7b5","Cm7/A#","Baug#9"]},{number:12,genre:"Jazz Min",chords:["Cm7(11)","C#7#9","Dm7b5","D#M7#5","E9","F9","F#dim7","G7#9","G#M7b5","Am7b5","A#m7","Bdim7"]},{number:13,genre:"Jazz Min",chords:["Cm9","C#9","Dm9","D#9","EM9","Fm9","F#dim7","G7(13)","G#m6","Am7b5","A#m7","Bm7b5"]},{number:14,genre:"Oct Stack",chords:["C5","C4","C#5","C#4","D5","D4","D#5","D#4","E5","E4","F5","F4"]},{number:15,genre:"4th Stack",chords:["F4","C4","F#4","C#4","G4","D4","G#4","D#4","A4","E4","A#4","F4"]},{number:16,genre:"5th Stack",chords:["G4","C4","G#4","C#4","A4","D4","A#4","D#4","B4","E4","C5","F4"]},{number:17,genre:"Utility",chords:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]},{number:18,genre:"Utility",chords:["Cm","C#m","Dm","D#m","E","Fm","F#m","Gm","G#m","Am","A#m","Bm"]},{number:19,genre:"Utility",chords:["CM7","C#M7","DM7","D#M7","EM7","FM7","F#FM7","GM7","G#M7","AM7","A#M7","BM7"]},{number:20,genre:"Utility",chords:["Cm7","C#m7","Dm7","D#m7","Em7","Fm7","F#m7","Gm7","G#m7","Am7","A#m7","Bm7"]},{number:21,genre:"Utility",chords:["CM9","C#M9","DM9","D#M9","EM9","FM9","F#M9","GM9","G#M9","AM9","A#M9","BM9"]},{number:22,genre:"Utility",chords:["Cm9","C#m9","Dm9","D#m9","Em9","Fm9","F#m9","Gm9","G#m9","Am9","A#m9","Bm9"]},{number:23,genre:"Utility",chords:["CM9/#11","C#M9/#11","DM9/#11","D#M9/#11","EM9/#11","FM9/#11","F#M9/#11","GM9/#11","G#M9/#11","AM9/#11","A#M9/#11","BM9/#11"]},{number:24,genre:"Utility",chords:["Cm9/11","C#m9/11","Dm9/11","D#m9/11","Em9/11","Fm9/11","F#m9/11","Gm9/11","G#m9/11","Am9/11","A#m9/11","Bm9/11"]},{number:25,genre:"Utility",chords:["CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7","CM7"]},{number:26,genre:"Utility",chords:["Cm7","Cm7/D#","Cm7/G","Cm7/A#","Cm7","Cm7/D#","Cm7","Cm7/G","Cm7","Cm7/D#","Cm7/G","Cm7/A#"]},{number:27,genre:"Pop/Synth",chords:["C","Em","G","Am","Bm","C","Em","G","Am","Bm","C","Em"]},{number:28,genre:"Pop",chords:["C","C7","Dm7","D#M7","C/E","F","Fm","G","C/G","Am7","Eaug/A#","G7/B"]},{number:29,genre:"Pop",chords:["C","FM7","G","Em7","Dm7","CM7/E","F","D7/G","G","Am","Dm","G7"]},{number:30,genre:"Pop",chords:["Cm","D#","G#","A#","Gm","G#","D#","A#sus4/D","Cm","G/B","G#","F/A"]},{number:31,genre:"Pop",chords:["Cadd11","Bb/C","Dm7","D7","Cadd9/E","FM7","F7","Gm7","A/G","FM7/A","F/Bb","G7/B"]},{number:32,genre:"Pop",chords:["Cmb13","D#M7","G7/D","A#/D#","C7","Fm7","D#","Gm7","G#M9","G#m6","F7/A","A#add11"]},{number:33,genre:"Cinematic",chords:["CM7","F/E","A#M7","G","Dm7","C","A#M7","G","C","A/C#","Dm","G/F"]},{number:34,genre:"Cinematic/Synthwave",chords:["Csus2","Dsus2","D#sus2","Fsus2","Gsus2","A#sus2","Csus2","Dsus2","D#sus2","Fsus2","Gsus2","A#sus2"]},{number:35,genre:"Cinematic/House",chords:["CM7","Am7","DM7","Bm7","EM7","C#m7","F#M7","D#m7","G#M7","Fm7","A#M7","Gm7"]},{number:36,genre:"Cinematic",chords:["Ebsus2/C","Fsus2/D","Gsus2/E","Absus2/F","Bbsus2/G","Csus2/A","Dsus2/B","Ebsus2/C","Fsus2/D","Gsus2/E","Absus2/F","Bbsus2/G"]},{number:37,genre:"Cinematic",chords:["C6sus2","Dsus2","Emadd11","Dadd9/F#","Gadd9","Am7/11","Bm7","C6","D6","Emadd9","E7sus4","Em7b5/F"]},{number:38,genre:"New Age/Cinematic",chords:["C","Gsus4","G7sus4","A#/D#","C/E","Gsus4/F","D/F#","C/G","E/G#","Am","Fsus4","G"]},{number:39,genre:"Synthwave",chords:["C6sus4","Gmadd9/D","Edim11","Fsus2/D","BbM7","Gmadd9","Am/G","C7/G","A#M7","Gm/A","C7/A#","A#m6"]},{number:40,genre:"Synthwave",chords:["Cadd9","Dadd9","D#add9","Fadd9","Gadd9","G#add9","A#add9","Cadd9","Dadd9","D#add9","Fadd9","Gadd9"]},{number:41,genre:"Synthwave",chords:["C","C#dim7","Fsus2/D","D#add9","Csus2/E","FM7","F#dim","Gsus4","G#6","Csus2/A","Csus2/A#","G7/B"]},{number:42,genre:"Synthwave",chords:["C","A#sus2/D#","A#7/G#","G/B","C","Fm","F#dim7","C","G#add9","F/A","A#","G7/B"]},{number:43,genre:"Synthwave",chords:["Cm7","A#/C","D#/G#","A#/G#","D#/F","A#/F","G#add9","A#","G#M7","Fsus2/A","A#6","Fm7/B"]},{number:44,genre:"Synthwave",chords:["Cm7","C#sus2/F","Gm7","D#","Csus2/E","Fm","D#dim7","G#sus2/G","Cm7","F7","Fm7","G5"]},{number:45,genre:"Synthwave",chords:["Ab","Fm","Gm","Ab","Fm","Bb","Gm","Cm","Ab","Fm","Bb","Cm"]},{number:46,genre:"Synthwave",chords:["C","D","Em","D","G","Am","Bm","C","D","Em","D","G"]},{number:47,genre:"Synthwave/House",chords:["Cm7","D#M7","Dm7","Fm7","D#M7","Gm7","Fm7","G#M7","Gm7","A#7","G#M7","C#/C"]},{number:48,genre:"Trance",chords:["Cm","Ab/C","Bb/D","Eb","C/E","Fm","F","Gm","Ab","F7/A","Bb","G7/B"]},{number:49,genre:"House",chords:["Cm7","C#m7","Dm7","EbM7","Gm/E","Eb/F","D7/F#","Gm7","AbM7","Ab/Bb","BbM7","Bm7b5"]},{number:50,genre:"House",chords:["Cmaj7","Dmaj7","Em7","Fmaj9","Gmaj9","Eadd9/G#","Am7","Bm7","Cmaj9","Dm7/9","Em7","Fmaj7"]},{number:51,genre:"House",chords:["Cm7","G#/C#","Dm7","A#/D#","Em7","C/F","F#m7","D/G","G#m7","E/A","A#m7","F#/B"]},{number:52,genre:"House",chords:["Cm7","G#M7","Dm7","A#M7","Em7","CM7","F#m7","DM7","G#m7","EM7","A#m7","F#M7"]},{number:53,genre:"House",chords:["Cm7/11","Cdim7","C#M7/b5","Ddim7","Cm","C#M7","CM7","Em7","FM7","Fm6","Csus2/E","F#m7/b5"]},{number:54,genre:"Techno",chords:["Cm7","C#m7","Dm7","D#m7","Em7","Fm7","F#m7","Gm7","G#m7","Am7","A#m7","Bm7"]},{number:55,genre:"Techno",chords:["Cm","C#dim","Dm","D#dim","Em","Fm","F#dim","Gm","G#dim","Am","A#dim","Bm"]},{number:56,genre:"House/Techno",chords:["Cm9","DbM9","Dm9","Ebm9","Em9","Fm9","F#m9","Gm9","Abm9","Am9","Bbm9","Bm9"]},{number:57,genre:"House/Techno",chords:["C5b9","DbM7","Dm7","Ebsus11","EM7#11","Fm9","GbM7#11","Gm7","AbM7#11","A7alt","Bb5add9/b13","C7sus4"]},{number:58,genre:"Techno",chords:["Cm7","A#m/C#","A#/D","D#","C/E","Cm/F","D/F#","G","G#M7","Csus4/A","D#/A#","G/B"]},{number:59,genre:"EDM",chords:["CM9","C6","Dm9","Dm6","EM9","FM9","F6","GM9","G6","Am9","Am6","Bm9"]},{number:60,genre:"EDM",chords:["Cmaj7","Dbmaj7","Dmaj7","Ebmaj7","Emaj7","Fmaj7","Gbmaj7","Gmaj7","Abmaj7","Amaj7","Bbmaj7","Bmaj7"]},{number:61,genre:"EDM",chords:["Cadd9","Dbadd9","Dadd9","Ebadd9","Eadd9","Fadd9","Gbadd9","Gadd9","Abadd9","Aadd9","Bbadd9","Badd9"]},{number:62,genre:"EDM",chords:["CM13","C#sus9","DM13","D#sus9","EM13","FM13","F#sus9","GMaj13","Absus9","AM13","Bbsus9","BM13"]},{number:63,genre:"EDM",chords:["CM7","Dbm7","Dm7","Eb6","Em7","FM7","Gbm7","GM7","Abm7","Am7","Bb6","Bm7"]},{number:64,genre:"EDM",chords:["C6","AM7","D6","BM7","E6","F6","DM7","G6","EM7","A6","GbM7","B6"]},{number:65,genre:"Gospel/R&B",chords:["G/C","C#dim7","Dm7b5","D#dim7","Em7","Fm11","F#dim7","Gm7b13","G#M7","A7alt","A#M7","Bdim7"]},{number:66,genre:"Gospel/R&B",chords:["C9","C#dim7","Dm7","D#dim7","Em7","Fmaj7","F#m7b5","G7","G#dim7","Am7","A#dim7","Bm7b5"]},{number:67,genre:"Gospel/R&B",chords:["Cmaj9","Dbmaj9","Dmaj9","Ebmaj9","Emaj9","Fmaj9","Gbmaj9","Gmaj9","Abmaj9","Amaj9","Bbmaj9","Bmaj9"]},{number:68,genre:"Gospel/R&B",chords:["Cm9","C#m9","Dm9","D#m9","Em9","Fm9","F#m9","Gm9","G#m9","Am9","A#m9","Bm9"]},{number:69,genre:"Gospel/R&B",chords:["Cm11","C#m11","Dm11","D#m11","Em11","Fm11","F#m11","Gm11","G#m11","Am11","A#m11","Bm11"]},{number:70,genre:"Gospel/R&B",chords:["CM13","C#M13","DM13","D#M13","EM13","FM13","F#M13","GM13","G#M13","AM13","A#M13","BM13"]},{number:71,genre:"Funk",chords:["C7alt","DbM7","D7alt","Eb7","C7/E","F7alt","F11sus2","Gm7b5","Ab9","Bb9sus","Bb7add9","C11sus2"]},{number:72,genre:"Neo Soul",chords:["Cm9","AbM7","Dm7","EbDimM7","EbM7","Fm7","CM7#5","Gm7","G7#5","AbM7","Fm7b5/B","Bb13/D"]},{number:73,genre:"Neo Soul",chords:["Cm7","C#dim7","Fm7","Fm7/b5","EbM7","Cm7/Eb","Edim","AbM7","Fm7","AbM13","Bb13","Bb6"]},{number:74,genre:"Neo Soul",chords:["Em7/D","Gm7b5/C#","FM7/E","DMb7/D#","GM7/F#","Edim7","Cadd13/E","E","Gaddb9/G#","Am9","Dm7","Emb9/F"]},{number:75,genre:"Neo Soul",chords:["CM7","C#m7","Dm7","EbM7","Em7","FM7","Gb7","GM7","AbM7","Am7","BbM7","Bm7"]},{number:76,genre:"Neo Soul",chords:["Cm9","C#M9","Dm9","D#M9","Em9","FM9","F#M9","GM9","G#M9","Am9","A#M9","Bm9"]},{number:77,genre:"Neo Soul",chords:["Cm11","C#m11","Dm11","D#m11","Em11","Fm11","F#m11","Gm11","G#m11","Am11","A#m11","Bm11"]},{number:78,genre:"Neo-Soul",chords:["C11sus","A7/C#","Dm7","EbM7","C7/E","F6","D7/F#","Gdim7","E7/G#","F6/A","Bb6","Bm7b5"]},{number:79,genre:"Neo-Soul",chords:["Ab/C","Db","Bb/D","Ebm","C/E","Db/F","Gb","Eb/G","Db/Ab","F7/A","Ebm/Bb","B"]},{number:80,genre:"Neo-Soul",chords:["Cm7b5","Db7sus","Bbadd2/D","Ebm7","EM7","Fmb6","GbM9","Ebadd9/G","Ab7sus","AdimM7","Bbm9","Gb/B"]},{number:81,genre:"Neo-Soul",chords:["C7alt","DbM7add6","Bb7/D","Db/Eb","Edim7","Fm9","Gb6/9","Gm7b5","Eb/Ab","F7/A","Bbm9","BM7#11"]},{number:82,genre:"Jazz/Bossa",chords:["Gm7","Bb/Ab","Am7","C/Bb","Bm7","D/C","C#m7","E/D","D#m7","F#/E","Fm7","Ab/Gb"]},{number:83,genre:"Jazz/Bossa",chords:["Cmaj7","Dbmaj7","Dmaj7","Ebmaj7","Emaj7","Fmaj7","Gbmaj7","Gmaj7","Abmaj7","Amaj7","Bbmaj7","Bmaj7"]},{number:84,genre:"Jazz/Bossa",chords:["Cm7","C#m7","Dm7","D#m7","Em7","Fm7","F#m7","Gm7","G#m7","Am7","A#m7","Bm7"]},{number:85,genre:"Jazz/Bossa",chords:["Cm9","C#m9","Dm9","D#m9","Em9","Fm9","F#m9","Gm9","G#m9","Am9","A#m9","Bm9"]},{number:86,genre:"Jazz",chords:["Cmaj7","Dbmaj7","Dmaj7","Ebmaj7","Emaj7","Fmaj7","Gbmaj7","Gmaj7","Abmaj7","Amaj7","Bbmaj7","Bmaj7"]},{number:87,genre:"Jazz",chords:["Cmaj7","Aadd9/C#","Dm6","B7/D#","Em7","Fmaj9","Dadd9/F#","Gm7/9","Abmaj9","Cadd9/G","Eadd9/G#","Asus7"]},{number:88,genre:"Jazz",chords:["Fmaj7/9","Gm7/b5","Abmaj7/9","Bbm7/b5","Bmaj7/9","C#m7/b5","DM7/9","Em7/b5","CM7/9","Dm7b5/9","GbM7/9","Abm7/b5"]},{number:89,genre:"Jazz",chords:["Cadd9","C#dim7","Gadd13/B","D#dim#5","FM7/E","G7sus2/F","D#dim7","C6","Ddim7","Am/C","Dm7b5","G7/D"]},{number:90,genre:"Jazz",chords:["Cmaj13","Dbmaj13","Dmaj13","Ebmaj13","Emaj13","Fmaj13","Gbmaj13","Gmaj13","Abmaj13","Amaj13","Bbmaj13","Bmaj13"]},{number:91,genre:"Jazz",chords:["Cm13","C#m13","Dm13","D#m13","Em13","Fm13","F#m13","Gm13","G#m13","Am13","A#m13","Bm13"]},{number:92,genre:"Jazz",chords:["C7","C#7","D7","D#7","E7","F7","F#7","G7","G#7","A7","A#7","B7"]},{number:93,genre:"Jazz",chords:["Cm7","C#m7","Dm7","D#m7","Em7","Fm7","F#m7","Gm7","G#m7","Am7","A#m7","Bm7"]}],ct={chord_sets:lt};var pt=Object.defineProperty,ht=Object.getOwnPropertyDescriptor,A=(t,e,s,r)=>{for(var a=r>1?void 0:r?ht(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&pt(e,s,a),a};const q=ct;let y=class extends S{constructor(){super(...arguments),this.searchQuery="",this.selectedGenre="All",this.maxComplexity=100,this.currentFilteredIndex=0,this.showSearchModal=!1,this.showComplexHelpModal=!1}get uniqueGenres(){return["All",...Array.from(new Set(q.chord_sets.map(t=>t.genre))).sort()]}getChordSetComplexity(t){let e=0;return t.forEach(s=>{(s.includes("9")||s.includes("11")||s.includes("13"))&&(e+=2),(s.includes("m")||s.includes("aug")||s.includes("dim"))&&(e+=1),s.includes("/")&&(e+=1),s.includes("sus")&&(e+=1)}),Math.min(100,Math.floor(e/48*100))}get filteredSets(){return q.chord_sets.filter(t=>{if(this.selectedGenre!=="All"&&t.genre!==this.selectedGenre||this.getChordSetComplexity(t.chords)>this.maxComplexity)return!1;if(this.searchQuery){const e=this.searchQuery.toLowerCase();if(!t.genre.toLowerCase().includes(e)&&!t.number.toString().includes(e)&&!t.chords.some(s=>s.toLowerCase().includes(e)))return!1}return!0})}get currentSet(){const t=this.filteredSets;if(t.length!==0)return this.currentFilteredIndex>=t.length?(setTimeout(()=>this.currentFilteredIndex=0,0),t[0]):t[this.currentFilteredIndex]}selectFilterValue(t,e){t==="genre"&&(this.selectedGenre=e),this.currentFilteredIndex=0}jumpToSet(t){const e=this.filteredSets.findIndex(s=>s.number===t);e!==-1&&(this.currentFilteredIndex=e,this.showSearchModal=!1)}cycleSet(t){const e=this.filteredSets.length;if(e<=1)return;let s=this.currentFilteredIndex+t;s<0&&(s=e-1),s>=e&&(s=0),this.currentFilteredIndex=s}selectRandomSet(t){let e=q.chord_sets;if(t&&(e=e.filter(s=>s.genre===t)),e.length>0){const s=e[Math.floor(Math.random()*e.length)],r=this.getChordSetComplexity(s.chords);r>this.maxComplexity&&(this.maxComplexity=r),t?this.selectedGenre=t:this.selectedGenre="All",this.searchQuery="";const o=q.chord_sets.filter(i=>!(this.selectedGenre!=="All"&&i.genre!==this.selectedGenre||this.getChordSetComplexity(i.chords)>this.maxComplexity)).findIndex(i=>i.number===s.number);o!==-1&&(this.currentFilteredIndex=o)}}handleFaderMouseDown(t){t.preventDefault(),this.startFaderDrag(t.clientY)}handleFaderTouchStart(t){t.preventDefault(),this.startFaderDrag(t.touches[0].clientY)}startFaderDrag(t){const e=this.maxComplexity,s=a=>{const o="touches"in a?a.touches[0].clientY:a.clientY,i=t-o;let n=e+i;n=Math.max(0,Math.min(100,Math.round(n))),this.maxComplexity=n,this.currentFilteredIndex=0},r=()=>{window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r),window.removeEventListener("touchmove",s),window.removeEventListener("touchend",r)};window.addEventListener("mousemove",s),window.addEventListener("mouseup",r),window.addEventListener("touchmove",s,{passive:!1}),window.addEventListener("touchend",r)}render(){return h`
      <div class="juno-panel-container">
        
        <div class="top-row">

          <!-- SET INFO & SELECTION -->
          <div class="juno-block panel-set-info" style="flex: 1;">
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

                ${this.currentSet?h`
                  <div class="info-screen">
                    <div class="info-row">
                      <span class="info-label">GENRE</span>
                      <span style="color: #fff; font-weight: bold;">${this.currentSet.genre}</span>
                    </div>
                    ${this.currentSet.analysis?h`
                      <div class="info-row">
                        <span class="info-label">KEY</span>
                        <span style="color: #fff; font-weight: bold;">${this.currentSet.analysis.bestKey}</span>
                      </div>
                      <div class="info-row">
                        <span class="info-label">PROGRESSION</span>
                        <span style="color: #fff;">${this.currentSet.analysis.recommendedProgression}</span>
                      </div>
                      ${this.currentSet.analysis.tags&&this.currentSet.analysis.tags.length>0?h`
                        <div class="info-row" style="margin-top: 4px;">
                          <span class="info-label">TAGS</span>
                          <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                            ${this.currentSet.analysis.tags.map(t=>h`<span class="tag-bubble">${t}</span>`)}
                          </div>
                        </div>
                      `:""}
                    `:""}
                  </div>
                `:h`
                  <div style="color: #5d5f66; font-weight: bold; font-size: 0.8rem;">
                    NO SETS MATCHING FILTER
                  </div>
                `}
                
              </div>
            </div>
          </div>
          
          <!-- PARAMETERS / COMPLEXITY -->
          <div class="juno-block panel-parameters" style="flex: 1;">
            <div class="juno-header blue">PARAMETERS</div>
            <div class="juno-content" style="gap: 24px; padding: 8px 16px;">
              <div class="fader-scale-shared">
                <span>10</span>
                <span>-</span>
                <span>0</span>
              </div>
              <div 
                class="fader-group"
                @mousedown=${t=>this.handleFaderMouseDown(t)}
                @touchstart=${t=>this.handleFaderTouchStart(t)}
              >
                <span class="fader-label" style="display: flex; align-items: center; gap: 4px;">
                  COMPLEX
                  <span 
                    class="help-icon" 
                    @mousedown=${t=>t.stopPropagation()} 
                    @touchstart=${t=>t.stopPropagation()} 
                    @click=${()=>this.showComplexHelpModal=!0}
                    style="cursor: pointer; background: #2a2b30; color: #a4a5aa; border-radius: 50%; width: 14px; height: 14px; display: flex; align-items: center; justify-content: center; font-size: 0.55rem; font-weight: bold; line-height: 1; border: 1px solid #3c3e44; transition: all 0.1s ease;"
                    onmouseover="this.style.color='#fff'; this.style.borderColor='#555861'"
                    onmouseout="this.style.color='#a4a5aa'; this.style.borderColor='#3c3e44'"
                    title="What is this?"
                  >?</span>
                </span>
                <div class="fader-track-wrapper">
                  <div class="fader-track">
                    <div class="fader-handle" style="bottom: calc(${this.maxComplexity}% * 0.86)"></div>
                  </div>
                </div>
                <span class="fader-val-label">${this.maxComplexity}%</span>
              </div>
            </div>
          </div>

          <!-- SEARCH & FILTERS -->
          <div class="juno-block panel-random-selection" style="flex: 1;">
            <div class="juno-header blue">RANDOM SELECTION</div>
            <div class="juno-content" style="flex-direction: column; gap: 20px;">
              
              <div style="display: flex; gap: 16px; justify-content: center; flex-wrap: wrap;">
                
                <div class="patch-btn-wrapper">
                  <div class="patch-legend" style="flex-direction: column; justify-content: flex-start; height: 28px; font-size: 0.65rem; min-width: 0; overflow: visible;">
                    <span>POP</span>
                  </div>
                  <button class="patch-btn color-1" @click=${()=>this.selectRandomSet("Pop")}></button>
                </div>

                <div class="patch-btn-wrapper">
                  <div class="patch-legend" style="flex-direction: column; justify-content: flex-start; height: 28px; font-size: 0.5rem; letter-spacing: 0; min-width: 0; overflow: visible;">
                    <span>NEO SOUL</span>
                  </div>
                  <button class="patch-btn color-1" @click=${()=>this.selectRandomSet("Neo Soul")}></button>
                </div>

                <div class="patch-btn-wrapper">
                  <div class="patch-legend" style="flex-direction: column; justify-content: flex-start; height: 28px; font-size: 0.65rem; min-width: 0; overflow: visible;">
                    <span>JAZZ</span>
                  </div>
                  <button class="patch-btn color-1" @click=${()=>this.selectRandomSet("Jazz")}></button>
                </div>

                <div class="patch-btn-wrapper">
                  <div class="patch-legend" style="flex-direction: column; justify-content: flex-start; height: 28px; font-size: 0.65rem; min-width: 0; overflow: visible;">
                    <span>ALL</span>
                  </div>
                  <button class="patch-btn color-3" @click=${()=>this.selectRandomSet()}></button>
                </div>

              </div>

              <div style="margin-top: auto; width: 100%;">
                <div class="led-screen clickable" style="width: 100%; box-sizing: border-box;" @click=${()=>this.showSearchModal=!0}>
                  <span class="led-text" style="font-size: 0.8rem; display: flex; align-items: center; gap: 8px; justify-content: center;">
                    <span style="font-size: 1.2rem; margin-top: -2px;">+</span> ADVANCED SEARCH
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        <!-- BOTTOM CHORDS ROW (PATCH BUTTONS) -->
        <div class="chords-block">
          <div class="juno-header red">CHORDS</div>
          <div class="chords-row">
            ${this.currentSet?this.currentSet.chords.map((t,e)=>{var a;const s=e<4?"color-3":e<8?"color-1":"color-2",r=(a=this.currentSet.voicings)==null?void 0:a[e];return h`
                <div class="patch-btn-wrapper" title="${r?`Voicing: ${r.join(", ")}`:"N/A"}">
                  <div class="patch-legend">${t}</div>
                  <button class="patch-btn ${s}" @click=${()=>this.handleChordClick(t,r)}></button>
                </div>
              `}):""}
          </div>
        </div>

      </div>

      <!-- UNIFIED SEARCH MODAL -->
      ${this.showSearchModal?h`
        <div class="modal-backdrop" @click=${t=>{t.target===t.currentTarget&&(this.showSearchModal=!1)}}>
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
                    @input=${t=>{this.searchQuery=t.target.value,this.currentFilteredIndex=0}}
                  />
                </div>
              </div>

              <!-- GENRE FILTER -->
              <div class="modal-section">
                <div class="modal-section-title">Filter by Genre</div>
                <div class="modal-list">
                  ${this.uniqueGenres.map(t=>h`
                    <button class="modal-item-btn ${this.selectedGenre===t?"selected":""}" @click=${()=>this.selectFilterValue("genre",t)}>${t}</button>
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
                  ${this.filteredSets.map(t=>{var e,s;return h`
                    <button class="modal-item-btn set-list-btn ${((e=this.currentSet)==null?void 0:e.number)===t.number?"selected":""}" @click=${()=>this.jumpToSet(t.number)}>
                      <span class="s-num">#${t.number.toString().padStart(2,"0")}</span>
                      <span class="s-genre">${t.genre}</span>
                      <span class="s-key">${((s=t.analysis)==null?void 0:s.bestKey)||""}</span>
                    </button>
                  `})}
                </div>
              </div>

            </div>
          </div>
        </div>
      `:""}

      <!-- COMPLEX HELP MODAL -->
      ${this.showComplexHelpModal?h`
        <div class="modal-backdrop" style="z-index: 2500;" @click=${t=>{t.target===t.currentTarget&&(this.showComplexHelpModal=!1)}}>
          <div class="retro-modal" style="max-width: 450px;">
            <div class="modal-header">
              <div class="modal-title">COMPLEXITY PARAMETER</div>
              <button class="close-btn" @click=${()=>this.showComplexHelpModal=!1}>&times;</button>
            </div>
            <div class="modal-body" style="color: #a4a5aa; font-size: 0.85rem; line-height: 1.6;">
              <p style="margin-top: 0; color: #fff;">The <strong>COMPLEX</strong> parameter filters the chord sets based on their harmonic complexity.</p>
              <p>It calculates a score by checking for advanced chord extensions (like 9ths, 11ths, 13ths), alterations (diminished, augmented), suspended chords, and slash chords.</p>
              <p style="margin-bottom: 0;">Lower the fader to show only simpler, more basic chord sets. Raise it to include jazzier, more complex progressions.</p>
            </div>
          </div>
        </div>
      `:""}

    `}handleChordClick(t,e){const s=e?`Chord: ${t}
Voicing: ${e.join(", ")}`:`Chord: ${t}`;navigator.clipboard.writeText(s).then(()=>{})}};y.styles=te`
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
      width: 44px;
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
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
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

    /* FADER CSS */
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
    .fader-track {
      width: 5px;
      height: 100px;
      background: #000000;
      border-radius: 2px;
      box-shadow: inset 0 2px 5px rgba(0,0,0,0.8);
      position: relative;
      cursor: pointer;
    }
    .fader-track::before, .fader-track::after {
      content: '';
      position: absolute;
      top: 0; bottom: 0; width: 4px;
      background: repeating-linear-gradient(180deg, #9e9a8e, #9e9a8e 1.5px, transparent 1.5px, transparent 10px);
      opacity: 0.55;
    }
    .fader-track::before { left: -8px; }
    .fader-track::after { right: -8px; }
    .fader-handle {
      width: 24px; height: 14px;
      background: linear-gradient(180deg, #44464f 0%, #1a1b1e 100%);
      border: 1.5px solid #0a0b0d; border-radius: 3px;
      box-shadow: 0 3px 6px rgba(0,0,0,0.7), inset 0 1px 1px rgba(255,255,255,0.1);
      position: absolute; left: calc(50% - 12px);
      cursor: ns-resize; transition: bottom 0.05s linear;
    }
    .fader-handle::before {
      content: ''; display: block; position: absolute;
      left: 1.5px; right: 1.5px; top: 5px; height: 1.5px;
      background: var(--text-primary);
      box-shadow: 0 0.5px 1px rgba(0,0,0,0.3);
    }
    .fader-val-label {
      font-family: monospace; font-size: 0.6rem; color: #5d5f66; margin-top: 8px;
    }
    .fader-scale-shared {
      font-family: monospace; font-size: 0.55rem; color: #a4a5aa;
      font-weight: bold; display: flex; flex-direction: column;
      justify-content: space-between; height: 100px; margin-top: 20px; padding: 0 2px;
    }
    .fader-scale-shared span { text-align: center; line-height: 1; }

    @media (max-width: 768px) {
      .juno-panel-container {
        display: flex;
        flex-direction: column;
      }
      .top-row {
        display: contents;
      }
      .panel-set-info {
        order: 1;
      }
      .chords-block {
        order: 2;
      }
      .panel-parameters {
        order: 3;
      }
      .panel-random-selection {
        order: 4;
      }
      .set-header-row {
        flex-direction: column;
        align-items: center;
      }
      .info-screen {
        align-items: center;
        text-align: center;
      }
      .info-row {
        justify-content: center;
        width: 100%;
      }
      .info-row div {
        justify-content: center;
      }
      .info-label {
        width: auto;
      }
      .chords-row { padding: 24px 16px; gap: 12px; }
      .patch-btn { width: 38px; height: 38px; }
      .patch-legend { font-size: 0.65rem; }
    }
  `;A([m()],y.prototype,"searchQuery",2);A([m()],y.prototype,"selectedGenre",2);A([m()],y.prototype,"maxComplexity",2);A([m()],y.prototype,"currentFilteredIndex",2);A([m()],y.prototype,"showSearchModal",2);A([m()],y.prototype,"showComplexHelpModal",2);y=A([re("j6-chords-view")],y);var ut=Object.defineProperty,mt=Object.getOwnPropertyDescriptor,$=(t,e,s,r)=>{for(var a=r>1?void 0:r?mt(e,s):e,o=t.length-1,i;o>=0;o--)(i=t[o])&&(a=(r?i(e,s,a):i(a))||a);return r&&a&&ut(e,s,a),a};const be=Ke.map(t=>({...t,id:t.bankPatch,name:t.soundNameCategory,notes:t.notesDescription||"",delayEffects:t.delayReverb,tags:Ze(t)}));let w=class extends S{constructor(){super(...arguments),this.selectedPreset=be[0],this.presetListOpen=!1,this.aboutOpen=!1,this.isEdited=!1,this.activeView="preset",this.customValues={}}willUpdate(t){t.has("selectedPreset")&&this.resetToPresetValues()}resetToPresetValues(){const t=this.selectedPreset;this.customValues={lfo:ot(t.lfo),pwm:it(t.pwm),a:X(t.attack),d:X(t.decay),s:tt(t.sustain),r:X(t.release),freq:st(t.filterFreq),res:at(t.resonance),env:rt(t.envMod),effect:t.chorus!=="Off"?70:0,delay:t.delayReverb==="Y"?60:0,reverb:t.delayReverb==="Y"?50:0},this.isEdited=!1}handleFaderMouseDown(t,e){t.preventDefault();const s=t.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(t.clientY,s,e);const r=o=>{this.updateFaderFromCoord(o.clientY,s,e)},a=()=>{window.removeEventListener("mousemove",r),window.removeEventListener("mouseup",a)};window.addEventListener("mousemove",r),window.addEventListener("mouseup",a)}handleFaderTouchStart(t,e){const s=t.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(t.touches[0].clientY,s,e);const r=o=>{this.updateFaderFromCoord(o.touches[0].clientY,s,e)},a=()=>{window.removeEventListener("touchmove",r),window.removeEventListener("touchend",a)};window.addEventListener("touchmove",r),window.addEventListener("touchend",a)}handleSwitchClick(t){const e=t.currentTarget.getBoundingClientRect(),s=t.clientX-e.left,r=e.width/3;s<r?this.activeView="preset":s<r*2?this.activeView="chords":this.activeView="styles"}updateFaderFromCoord(t,e,s){const r=e.getBoundingClientRect(),a=Math.max(0,Math.min(1,(r.bottom-t)/r.height)),o=Math.round(a*100);this.customValues={...this.customValues,[s]:o},this.isEdited=!0}handleKnobMouseDown(t,e){t.preventDefault();const s=t.clientY,r=this.customValues[e]||0,a=i=>{const d=(s-i.clientY)*1.2,c=Math.max(0,Math.min(100,r+d));this.customValues={...this.customValues,[e]:Math.round(c)},this.isEdited=!0},o=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",o)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",o)}handleSendGet(){const t=`--- Roland J-6 Patch Info ---
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
---------------------------------------`;navigator.clipboard.writeText(t).then(()=>{alert("Patch dump copied to clipboard successfully!")})}renderFader(t,e,s){return h`
      <div 
        class="fader-group"
        @mousedown=${r=>this.handleFaderMouseDown(r,s)}
        @touchstart=${r=>this.handleFaderTouchStart(r,s)}
      >
        <span class="fader-label">${t}</span>
        <div class="fader-track-wrapper">
          <div class="fader-track">
            <div class="fader-handle" style="bottom: calc(${e}% * 0.86)"></div>
          </div>
        </div>
        <span class="fader-val-label">${e}%</span>
      </div>
    `}renderKnob(t,e,s){const r=-135+2.7*e;return h`
      <div class="knob-control" @mousedown=${a=>this.handleKnobMouseDown(a,s)}>
        <div class="knob-dial-wrapper">
          <div class="knob-dial" style="transform: rotate(${r}deg)">
            <div class="knob-indicator"></div>
          </div>
        </div>
        <span class="knob-label">${t}</span>
      </div>
    `}render(){const t=this.selectedPreset,e=t.saw==="SAW",s=t.pulse==="SQU"||t.pulse==="PWM",r=["15%","20%","25%","33%"].includes(t.pulse),a=["100%","25%"].includes(t.sub),o=t.sub==="50%",i=t.noise!=="x",n=t.chorus==="Off"||!t.chorus,d=t.chorus==="I",c=t.chorus==="II",l=(this.customValues.a||0)*.25,p=(this.customValues.d||0)*.25,b=(this.customValues.s||0)*.4,v=25,H=(this.customValues.r||0)*.25,_e="0,40",Fe=`${l},0`,Ce=`${l+p},${40-b}`,Se=`${l+p+v},${40-b}`,Ee=`${l+p+v+H},40`,Ae=`M ${_e} L ${Fe} L ${Ce} L ${Se} L ${Ee}`;return h`
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
          ${this.activeView==="preset"?h`
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
                      ${t.id||"1-1"}
                    </button>
                    <button class="btn-key key-cream patch-btn" @click=${()=>this.presetListOpen=!0}>
                      ${t.name||"MELLOW SUB OCTAVE"}
                    </button>
                    
                    <!-- ADSR LCD Screen -->
                    <div class="led-search-screen" style="padding: 0; overflow: hidden; justify-content: center;">
                      <svg viewBox="0 0 100 40" style="width: 90%; height: 80%; overflow: visible;" preserveAspectRatio="none">
                        <path d=${Ae} fill="none" stroke="var(--color-orange-primary)" stroke-width="2" vector-effect="non-scaling-stroke" filter="drop-shadow(0 0 4px rgba(255, 93, 0, 0.7))"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Bottom Row: Notes and Counts -->
                  <div class="patch-bottom-row">
                    <div class="patch-notes">
                      ${this.isEdited?h`<span style="color:#ffa166;">[EDITED] </span>`:""}
                      ${t.notes||"Factory patch preset definition"}
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
                      <div class="led-well ${s?"active":""}"></div>
                      <button class="btn-key key-cream ${s?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <svg width="12" height="12" viewBox="0 0 10 10" stroke="var(--text-secondary)" fill="none" stroke-width="1.5">
                          <path d="M1 5 L9 5" stroke-dasharray="2 2" />
                          <path d="M3 9 L3 1 L7 1 L7 9" />
                        </svg>
                      </span>
                      <div class="led-well ${r?"active":""}"></div>
                      <button class="btn-key key-cream ${r?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <span>SUB</span>
                      </span>
                      <div class="led-well ${a?"active":""}"></div>
                      <button class="btn-key key-sub ${a?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">Sub 50%</span>
                      <div class="led-well ${o?"active":""}"></div>
                      <button class="btn-key key-sub50 ${o?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">Noise</span>
                      <div class="led-well ${i?"active":""}"></div>
                      <button class="btn-key key-noise ${i?"active":""}"></button>
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
                        <div class="led-well ${n?"active":""}"></div>
                        <button class="btn-key key-cream ${n?"active":""}"></button>
                      </div>
                      <div class="chorus-button">
                        <span>I</span>
                        <div class="led-well ${d?"active":""}"></div>
                        <button class="btn-key key-cream ${d?"active":""}"></button>
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
                        <span>?</span>
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
          `:this.activeView==="chords"?h`
            <j6-chords-view></j6-chords-view>
          `:h`
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
      ${this.presetListOpen?h`
        <div class="modal-backdrop" @click=${()=>this.presetListOpen=!1}>
          <div class="preset-dropdown-container" @click=${O=>O.stopPropagation()}>
            <j6-preset-list
              .presets=${be}
              .selectedId=${this.selectedPreset.id}
              @preset-selected=${O=>{this.selectedPreset=O.detail,this.presetListOpen=!1}}
            ></j6-preset-list>
          </div>
        </div>
      `:""}



      <!-- ABOUT/HELP MODAL -->
      ${this.aboutOpen?h`
        <div class="modal-backdrop" @click=${()=>this.aboutOpen=!1}>
          <div class="retro-modal" @click=${O=>O.stopPropagation()}>
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
    `}};w.styles=te`
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
      gap: 16px;
      align-items: flex-end;
    }

    .waveform-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: 44px;
    }

    .waveform-label {
      font-size: 0.75rem;
      font-weight: 900;
      color: #a4a5aa;
      font-family: var(--font-sans);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: center;
      min-height: 16px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
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
      width: 44px;
      height: 44px;
      border: 2px solid #101113;
      border-radius: 3px;
      box-shadow: 0 5px 0 #000000, 0 6px 10px rgba(0, 0, 0, 0.7);
      cursor: pointer;
      box-sizing: border-box;
      transition: transform 0.05s ease, box-shadow 0.05s ease;
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
      transform: translateY(4px);
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
      gap: 16px;
    }

    .chorus-button {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 12px;
      width: 44px;
    }

    .chorus-button span {
      font-size: 0.75rem;
      font-weight: 900;
      color: #a4a5aa;
      font-family: var(--font-sans);
      text-transform: uppercase;
      letter-spacing: 0.05em;
      text-align: center;
      min-height: 16px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      justify-content: center;
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
      .synth-header {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 12px;
      }
      .header-left {
        display: contents;
      }
      .roland-logo {
        font-size: 1.6rem;
        grid-column: 1;
        justify-self: start;
      }
      .juno-logo {
        font-size: 2rem;
        grid-column: 2;
        justify-self: end;
        margin-right: 0;
      }
      .juno-switch {
        grid-column: 1 / span 2;
        justify-self: center;
        margin-left: 0;
      }
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
  `;$([m()],w.prototype,"selectedPreset",2);$([m()],w.prototype,"presetListOpen",2);$([m()],w.prototype,"aboutOpen",2);$([m()],w.prototype,"isEdited",2);$([m()],w.prototype,"activeView",2);$([m()],w.prototype,"customValues",2);w=$([re("j6-app")],w);
