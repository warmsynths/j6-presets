(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const W=globalThis,J=W.ShadowRoot&&(W.ShadyCSS===void 0||W.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,K=Symbol(),te=new WeakMap;let fe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==K)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const i=t!==void 0&&t.length===1;i&&(e=te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&te.set(t,e))}return e}toString(){return this.cssText}};const He=s=>new fe(typeof s=="string"?s:s+"",void 0,K),ge=(s,...e)=>{const t=s.length===1?s[0]:e.reduce((i,a,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(a)+s[o+1],s[0]);return new fe(t,s,K)},Ee=(s,e)=>{if(J)s.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const i=document.createElement("style"),a=W.litNonce;a!==void 0&&i.setAttribute("nonce",a),i.textContent=t.cssText,s.appendChild(i)}},se=J?s=>s:s=>s instanceof CSSStyleSheet?(e=>{let t="";for(const i of e.cssRules)t+=i.cssText;return He(t)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:$e,defineProperty:Le,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:Oe,getOwnPropertySymbols:Ie,getPrototypeOf:Ae}=Object,w=globalThis,ae=w.trustedTypes,Ce=ae?ae.emptyScript:"",z=w.reactiveElementPolyfillSupport,C=(s,e)=>s,Y={toAttribute(s,e){switch(e){case Boolean:s=s?Ce:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,e){let t=s;switch(e){case Boolean:t=s!==null;break;case Number:t=s===null?null:Number(s);break;case Object:case Array:try{t=JSON.parse(s)}catch{t=null}}return t}},Z=(s,e)=>!$e(s,e),ie={attribute:!0,type:String,converter:Y,reflect:!1,useDefault:!1,hasChanged:Z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),w.litPropertyMetadata??(w.litPropertyMetadata=new WeakMap);let E=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=ie){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const i=Symbol(),a=this.getPropertyDescriptor(e,i,t);a!==void 0&&Le(this.prototype,e,a)}}static getPropertyDescriptor(e,t,i){const{get:a,set:o}=Pe(this.prototype,e)??{get(){return this[t]},set(r){this[t]=r}};return{get:a,set(r){const l=a==null?void 0:a.call(this);o==null||o.call(this,r),this.requestUpdate(e,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ie}static _$Ei(){if(this.hasOwnProperty(C("elementProperties")))return;const e=Ae(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(C("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(C("properties"))){const t=this.properties,i=[...Oe(t),...Ie(t)];for(const a of i)this.createProperty(a,t[a])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[i,a]of t)this.elementProperties.set(i,a)}this._$Eh=new Map;for(const[t,i]of this.elementProperties){const a=this._$Eu(t,i);a!==void 0&&this._$Eh.set(a,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const i=new Set(e.flat(1/0).reverse());for(const a of i)t.unshift(se(a))}else e!==void 0&&t.push(se(e));return t}static _$Eu(e,t){const i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const i of t.keys())this.hasOwnProperty(i)&&(e.set(i,this[i]),delete this[i]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Ee(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostConnected)==null?void 0:i.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var i;return(i=t.hostDisconnected)==null?void 0:i.call(t)})}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$ET(e,t){var o;const i=this.constructor.elementProperties.get(e),a=this.constructor._$Eu(e,i);if(a!==void 0&&i.reflect===!0){const r=(((o=i.converter)==null?void 0:o.toAttribute)!==void 0?i.converter:Y).toAttribute(t,i.type);this._$Em=e,r==null?this.removeAttribute(a):this.setAttribute(a,r),this._$Em=null}}_$AK(e,t){var o,r;const i=this.constructor,a=i._$Eh.get(e);if(a!==void 0&&this._$Em!==a){const l=i.getPropertyOptions(a),n=typeof l.converter=="function"?{fromAttribute:l.converter}:((o=l.converter)==null?void 0:o.fromAttribute)!==void 0?l.converter:Y;this._$Em=a;const c=n.fromAttribute(t,l.type);this[a]=c??((r=this._$Ej)==null?void 0:r.get(a))??c,this._$Em=null}}requestUpdate(e,t,i,a=!1,o){var r;if(e!==void 0){const l=this.constructor;if(a===!1&&(o=this[e]),i??(i=l.getPropertyOptions(e)),!((i.hasChanged??Z)(o,t)||i.useDefault&&i.reflect&&o===((r=this._$Ej)==null?void 0:r.get(e))&&!this.hasAttribute(l._$Eu(e,i))))return;this.C(e,t,i)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:i,reflect:a,wrapped:o},r){i&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,r??t??this[e]),o!==!0||r!==void 0)||(this._$AL.has(e)||(this.hasUpdated||i||(t=void 0),this._$AL.set(e,t)),a===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,r]of this._$Ep)this[o]=r;this._$Ep=void 0}const a=this.constructor.elementProperties;if(a.size>0)for(const[o,r]of a){const{wrapped:l}=r,n=this[o];l!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,r,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(i=this._$EO)==null||i.forEach(a=>{var o;return(o=a.hostUpdate)==null?void 0:o.call(a)}),this.update(t)):this._$EM()}catch(a){throw e=!1,this._$EM(),a}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(i=>{var a;return(a=i.hostUpdated)==null?void 0:a.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};E.elementStyles=[],E.shadowRootOptions={mode:"open"},E[C("elementProperties")]=new Map,E[C("finalized")]=new Map,z==null||z({ReactiveElement:E}),(w.reactiveElementVersions??(w.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N=globalThis,oe=s=>s,V=N.trustedTypes,re=V?V.createPolicy("lit-html",{createHTML:s=>s}):void 0,ve="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,be="?"+y,Ne=`<${be}>`,F=document,T=()=>F.createComment(""),q=s=>s===null||typeof s!="object"&&typeof s!="function",X=Array.isArray,Te=s=>X(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",U=`[ 	
\f\r]`,A=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ne=/-->/g,le=/>/g,k=RegExp(`>|${U}(?:([^\\s"'>=/]+)(${U}*=${U}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),de=/'/g,ce=/"/g,xe=/^(?:script|style|textarea|title)$/i,qe=s=>(e,...t)=>({_$litType$:s,strings:e,values:t}),f=qe(1),L=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),pe=new WeakMap,_=F.createTreeWalker(F,129);function me(s,e){if(!X(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return re!==void 0?re.createHTML(e):e}const Re=(s,e)=>{const t=s.length-1,i=[];let a,o=e===2?"<svg>":e===3?"<math>":"",r=A;for(let l=0;l<t;l++){const n=s[l];let c,d,p=-1,b=0;for(;b<n.length&&(r.lastIndex=b,d=r.exec(n),d!==null);)b=r.lastIndex,r===A?d[1]==="!--"?r=ne:d[1]!==void 0?r=le:d[2]!==void 0?(xe.test(d[2])&&(a=RegExp("</"+d[2],"g")),r=k):d[3]!==void 0&&(r=k):r===k?d[0]===">"?(r=a??A,p=-1):d[1]===void 0?p=-2:(p=r.lastIndex-d[2].length,c=d[1],r=d[3]===void 0?k:d[3]==='"'?ce:de):r===ce||r===de?r=k:r===ne||r===le?r=A:(r=k,a=void 0);const x=r===k&&s[l+1].startsWith("/>")?" ":"";o+=r===A?n+Ne:p>=0?(i.push(c),n.slice(0,p)+ve+n.slice(p)+y+x):n+y+(p===-2?l:x)}return[me(s,o+(s[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),i]};class R{constructor({strings:e,_$litType$:t},i){let a;this.parts=[];let o=0,r=0;const l=e.length-1,n=this.parts,[c,d]=Re(e,t);if(this.el=R.createElement(c,i),_.currentNode=this.el.content,t===2||t===3){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(a=_.nextNode())!==null&&n.length<l;){if(a.nodeType===1){if(a.hasAttributes())for(const p of a.getAttributeNames())if(p.endsWith(ve)){const b=d[r++],x=a.getAttribute(p).split(y),H=/([.?@])?(.*)/.exec(b);n.push({type:1,index:o,name:H[2],strings:x,ctor:H[1]==="."?We:H[1]==="?"?Ye:H[1]==="@"?Ve:B}),a.removeAttribute(p)}else p.startsWith(y)&&(n.push({type:6,index:o}),a.removeAttribute(p));if(xe.test(a.tagName)){const p=a.textContent.split(y),b=p.length-1;if(b>0){a.textContent=V?V.emptyScript:"";for(let x=0;x<b;x++)a.append(p[x],T()),_.nextNode(),n.push({type:2,index:++o});a.append(p[b],T())}}}else if(a.nodeType===8)if(a.data===be)n.push({type:2,index:o});else{let p=-1;for(;(p=a.data.indexOf(y,p+1))!==-1;)n.push({type:7,index:o}),p+=y.length-1}o++}}static createElement(e,t){const i=F.createElement("template");return i.innerHTML=e,i}}function P(s,e,t=s,i){var r,l;if(e===L)return e;let a=i!==void 0?(r=t._$Co)==null?void 0:r[i]:t._$Cl;const o=q(e)?void 0:e._$litDirective$;return(a==null?void 0:a.constructor)!==o&&((l=a==null?void 0:a._$AO)==null||l.call(a,!1),o===void 0?a=void 0:(a=new o(s),a._$AT(s,t,i)),i!==void 0?(t._$Co??(t._$Co=[]))[i]=a:t._$Cl=a),a!==void 0&&(e=P(s,a._$AS(s,e.values),a,i)),e}class De{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:i}=this._$AD,a=((e==null?void 0:e.creationScope)??F).importNode(t,!0);_.currentNode=a;let o=_.nextNode(),r=0,l=0,n=i[0];for(;n!==void 0;){if(r===n.index){let c;n.type===2?c=new D(o,o.nextSibling,this,e):n.type===1?c=new n.ctor(o,n.name,n.strings,this,e):n.type===6&&(c=new Be(o,this,e)),this._$AV.push(c),n=i[++l]}r!==(n==null?void 0:n.index)&&(o=_.nextNode(),r++)}return _.currentNode=F,a}p(e){let t=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}}class D{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,i,a){this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=a,this._$Cv=(a==null?void 0:a.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),q(e)?e===u||e==null||e===""?(this._$AH!==u&&this._$AR(),this._$AH=u):e!==this._$AH&&e!==L&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):Te(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==u&&q(this._$AH)?this._$AA.nextSibling.data=e:this.T(F.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:i}=e,a=typeof i=="number"?this._$AC(e):(i.el===void 0&&(i.el=R.createElement(me(i.h,i.h[0]),this.options)),i);if(((o=this._$AH)==null?void 0:o._$AD)===a)this._$AH.p(t);else{const r=new De(a,this),l=r.u(this.options);r.p(t),this.T(l),this._$AH=r}}_$AC(e){let t=pe.get(e.strings);return t===void 0&&pe.set(e.strings,t=new R(e)),t}k(e){X(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let i,a=0;for(const o of e)a===t.length?t.push(i=new D(this.O(T()),this.O(T()),this,this.options)):i=t[a],i._$AI(o),a++;a<t.length&&(this._$AR(i&&i._$AB.nextSibling,a),t.length=a)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,t);e!==this._$AB;){const a=oe(e).nextSibling;oe(e).remove(),e=a}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,i,a,o){this.type=1,this._$AH=u,this._$AN=void 0,this.element=e,this.name=t,this._$AM=a,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}_$AI(e,t=this,i,a){const o=this.strings;let r=!1;if(o===void 0)e=P(this,e,t,0),r=!q(e)||e!==this._$AH&&e!==L,r&&(this._$AH=e);else{const l=e;let n,c;for(e=o[0],n=0;n<o.length-1;n++)c=P(this,l[i+n],t,n),c===L&&(c=this._$AH[n]),r||(r=!q(c)||c!==this._$AH[n]),c===u?e=u:e!==u&&(e+=(c??"")+o[n+1]),this._$AH[n]=c}r&&!a&&this.j(e)}j(e){e===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class We extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===u?void 0:e}}class Ye extends B{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==u)}}class Ve extends B{constructor(e,t,i,a,o){super(e,t,i,a,o),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??u)===L)return;const i=this._$AH,a=e===u&&i!==u||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,o=e!==u&&(i===u||a);a&&this.element.removeEventListener(this.name,this,i),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Be{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const G=N.litHtmlPolyfillSupport;G==null||G(R,D),(N.litHtmlVersions??(N.litHtmlVersions=[])).push("3.3.3");const ze=(s,e,t)=>{const i=(t==null?void 0:t.renderBefore)??e;let a=i._$litPart$;if(a===void 0){const o=(t==null?void 0:t.renderBefore)??null;i._$litPart$=a=new D(e.insertBefore(T(),o),o,void 0,t??{})}return a._$AI(s),a};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=globalThis;class $ extends E{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=ze(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return L}}var ue;$._$litElement$=!0,$.finalized=!0,(ue=S.litElementHydrateSupport)==null||ue.call(S,{LitElement:$});const j=S.litElementPolyfillSupport;j==null||j({LitElement:$});(S.litElementVersions??(S.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ye=s=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(s,e)}):customElements.define(s,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ue={attribute:!0,type:String,converter:Y,reflect:!1,hasChanged:Z},Ge=(s=Ue,e,t)=>{const{kind:i,metadata:a}=t;let o=globalThis.litPropertyMetadata.get(a);if(o===void 0&&globalThis.litPropertyMetadata.set(a,o=new Map),i==="setter"&&((s=Object.create(s)).wrapped=!0),o.set(t.name,s),i==="accessor"){const{name:r}=t;return{set(l){const n=e.get.call(this);e.set.call(this,l),this.requestUpdate(r,n,s,!0,l)},init(l){return l!==void 0&&this.C(r,void 0,s,l),l}}}if(i==="setter"){const{name:r}=t;return function(l){const n=this[r];e.call(this,l),this.requestUpdate(r,n,s,!0,l)}}throw Error("Unsupported decorator location: "+i)};function ee(s){return(e,t)=>typeof t=="object"?Ge(s,e,t):((i,a,o)=>{const r=a.hasOwnProperty(o);return a.constructor.createProperty(o,i),r?Object.getOwnPropertyDescriptor(a,o):void 0})(s,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function v(s){return ee({...s,state:!0,attribute:!1})}const je=[{blank:"",preset:"1 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"I",notes_description:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",bankPatch:"1-1",soundNameCategory:"Mellow Sub Octave Pluck",notesDescription:"Mellow Sub Octave Pluck: Mild Sustain once Envelope control is past 50% (Good for Deadmaus5)",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Low (Low -> Mid)",r:"None",blank_3:"Off",notes_description:"Square Pluck:",bankPatch:"1-2",soundNameCategory:"Square Pluck",notesDescription:"Square Pluck:",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Low (Low -> Mid)",release:"None",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 3",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Mellow Mallet: Sustains once Envelope control is past 50%",bankPatch:"1-3",soundNameCategory:"Mellow Mallet",notesDescription:"Mellow Mallet: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 4",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"High",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"Off",notes_description:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-4",soundNameCategory:"Noisy Mellow Pluck",notesDescription:"Noisy Mellow Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"1 - 5",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",bankPatch:"1-5",soundNameCategory:"Noisy Octave Pluck",notesDescription:"Noisy Octave Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 6",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"Mid",kybd:"x",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"Off",notes_description:"Harpsichord: Sustains + PWM once Envelope control is past 50%",bankPatch:"1-6",soundNameCategory:"Harpsichord",notesDescription:"Harpsichord: Sustains + PWM once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"1 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"15%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"I",notes_description:"Chorus Clavinet: Sustains once Envelope control is past 50%",bankPatch:"1-7",soundNameCategory:"Chorus Clavinet",notesDescription:"Chorus Clavinet: Sustains once Envelope control is past 50%",waveformOscType:"Fixed + Sub 15%",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"1 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Chorus Harp: Mild Sustain once Envelope control is past 50%",bankPatch:"1-8",soundNameCategory:"Chorus Harp",notesDescription:"Chorus Harp: Mild Sustain once Envelope control is past 50%",waveformOscType:"Sub 100% + Square",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 1",glide:"x",octave:"+1",rate:"1/8th",delay:"x",lfo:"x",pwm:"LFO*",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",bankPatch:"2-1",soundNameCategory:"Staccato Steel Drum",notesDescription:"Staccato Steel Drum: LFO retriggers at 1/8th notes in a SAW wave once Envelope Control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Low",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"II",notes_description:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",bankPatch:"2-2",soundNameCategory:"Bright Detuned Saw Pluck",notesDescription:"Bright Detuned Saw Pluck: Sustains once Envelope control is past 50% (Increase Attack for Brass Ensemble Stab)",waveformOscType:"Saw",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Off (Off -> High)",r:"Mid",blank_3:"I",notes_description:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",bankPatch:"2-3",soundNameCategory:"Synthy 80s Clean Guitar",notesDescription:"Synthy 80s Clean Guitar: Sustains once Envelope control is past 50%",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"Off (Off -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 4",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> High)",r:"None",blank_3:"II",notes_description:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",bankPatch:"2-4",soundNameCategory:"Gliding Noisy Pluck",notesDescription:"Gliding Noisy Pluck: Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"Mid",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"Off (Off -> Mid)",r:"Fast",blank_3:"II",notes_description:"Octave Splash: Mild Sustain once Envelope control is past 50%",bankPatch:"2-5",soundNameCategory:"Octave Splash",notesDescription:"Octave Splash: Mild Sustain once Envelope control is past 50%",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"Off (Off -> Mid)",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"2 - 6",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"Mid",blank_2:"Y",freq:"Mid",res:"High",env:"+ Mid",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Plectrum Wind:",bankPatch:"2-6",soundNameCategory:"Plectrum Wind",notesDescription:"Plectrum Wind:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"High",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"2 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Fast",blank_3:"II",notes_description:"Plectrum Mellotron Chorus:",bankPatch:"2-7",soundNameCategory:"Plectrum Mellotron Chorus",notesDescription:"Plectrum Mellotron Chorus:",waveformOscType:"Sub 100% + Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"2 - 8",glide:"x",octave:"0",rate:"Fast",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"33%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Air Harp:",bankPatch:"2-8",soundNameCategory:"Air Harp",notesDescription:"Air Harp:",waveformOscType:"Fixed + Sub 33%",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"Y"},{blank:"",preset:"3 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Slow",s_control_range:"Low (Low -> High)",r:"Slow",blank_3:"I",notes_description:"Ambient Piano:",bankPatch:"3-1",soundNameCategory:"Ambient Piano",notesDescription:"Ambient Piano:",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"None",decay:"Slow",sustain:"Low (Low -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 2",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"Off",notes_description:"Synth Vibraphone:",bankPatch:"3-2",soundNameCategory:"Synth Vibraphone",notesDescription:"Synth Vibraphone:",waveformOscType:"Square",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"Mid (Low -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 3",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Hammered Dulcimar:",bankPatch:"3-3",soundNameCategory:"Hammered Dulcimar",notesDescription:"Hammered Dulcimar:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"3 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"Mid (Low -> High)",r:"Mid",blank_3:"I",notes_description:"Saw Piano:",bankPatch:"3-4",soundNameCategory:"Saw Piano",notesDescription:"Saw Piano:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"Mid (Low -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"Fast",d:"Mid",s_control_range:"Mid (Low -> High)",r:"None",blank_3:"I",notes_description:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",bankPatch:"3-5",soundNameCategory:"Brass Pluck",notesDescription:"Brass Pluck: VCA Gate for low Envelope settings, VCA Env for high Envelope settings (Attack only)",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"Mid (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 6",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Resonant Blown Glass:",bankPatch:"3-6",soundNameCategory:"Resonant Blown Glass",notesDescription:"Resonant Blown Glass:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"3 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",bankPatch:"3-7",soundNameCategory:"Acid Saw",notesDescription:"Acid Saw: (Turn Attack to 0% for pure Saw Pluck)",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"3 - 8",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"Mid (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",bankPatch:"3-8",soundNameCategory:"Bright Trumpet",notesDescription:"Bright Trumpet: (Turn Attack to 0% for Plectrum Bass Guitar)",waveformOscType:"Saw + Low",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Fast",sustain:"Mid (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"4 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"II",notes_description:"Octave PWM Lead:",bankPatch:"4-1",soundNameCategory:"Octave PWM Lead",notesDescription:"Octave PWM Lead:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 2",glide:"Fast",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"x",lfo_2:"High",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"I",notes_description:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",bankPatch:"4-2",soundNameCategory:"Gliding Pulse Lead I",notesDescription:"Gliding Pulse Lead I: Wide LFO Filter Sweep for low Filter/Envelope values",waveformOscType:"Fixed + Sub 25%",filterFreq:"High",resonance:"High",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"4 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Slow PWM Lead:",bankPatch:"4-3",soundNameCategory:"Slow PWM Lead",notesDescription:"Slow PWM Lead:",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"x",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"High",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Vibrato Saw Lead:",bankPatch:"4-4",soundNameCategory:"Vibrato Saw Lead",notesDescription:"Vibrato Saw Lead:",waveformOscType:"Saw + High",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 5",glide:"Mid",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"None",blank_3:"II",notes_description:"Gliding Pluse Lead II:",bankPatch:"4-5",soundNameCategory:"Gliding Pluse Lead II",notesDescription:"Gliding Pluse Lead II:",waveformOscType:"Fixed + Sub 25% + Low",filterFreq:"High",resonance:"Low",envMod:"+ High",attack:"None",decay:"Fast",sustain:"High",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 6",glide:"x",octave:"",rate:"Fast",delay:"Y",lfo:"Mid",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"x",env_gate:"Env",a:"Fast",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Dirty Strings:",bankPatch:"4-6",soundNameCategory:"Octave Dirty Strings",notesDescription:"Octave Dirty Strings:",waveformOscType:"Saw + Fixed + Sub 25% + Mid",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"Y"},{blank:"",preset:"4 - 7",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Octave Mixed Lead:",bankPatch:"4-7",soundNameCategory:"Octave Mixed Lead",notesDescription:"Octave Mixed Lead:",waveformOscType:"Saw + Fixed + Sub 25%",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"4 - 8",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"Low",blank_2:"Y",freq:"High",res:"High",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Fast",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Blown Octave Square:",bankPatch:"4-8",soundNameCategory:"Blown Octave Square",notesDescription:"Blown Octave Square:",waveformOscType:"Sub 100% + Square",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Fast",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 1",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"High",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"I",notes_description:"Thick Attack Lead:",bankPatch:"5-1",soundNameCategory:"Thick Attack Lead",notesDescription:"Thick Attack Lead:",waveformOscType:"Saw + LFO + PWM",filterFreq:"High",resonance:"Mid",envMod:"+ Mid",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"I",delayReverb:"x"},{blank:"",preset:"5 - 2",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"Off",notes_description:"The Fake Slim Shady:",bankPatch:"5-2",soundNameCategory:"The Fake Slim Shady",notesDescription:"The Fake Slim Shady:",waveformOscType:"Saw + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 3",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"SAW",sub:"x",noise:"Low",blank_2:"Y",freq:"Mid",res:"High",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Ya-ee Choir:",bankPatch:"5-3",soundNameCategory:"Ya-ee Choir",notesDescription:"Ya-ee Choir:",waveformOscType:"Saw + LFO + PWM",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 4",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Dark Strings:",bankPatch:"5-4",soundNameCategory:"Dark Strings",notesDescription:"Dark Strings:",waveformOscType:"Saw + Sub 50%",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 5",glide:"Slow",octave:"+1",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Angry Cat: Gliding noisy lead with fast filter modulation",bankPatch:"5-5",soundNameCategory:"Angry Cat",notesDescription:"Angry Cat: Gliding noisy lead with fast filter modulation",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 6",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Mid",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Choir:",bankPatch:"5-6",soundNameCategory:"Brass Choir",notesDescription:"Brass Choir:",waveformOscType:"LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"+ Mid",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"5 - 7",glide:"Fast",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Whoa Flute:",bankPatch:"5-7",soundNameCategory:"Whoa Flute",notesDescription:"Whoa Flute:",waveformOscType:"Sub 100% + Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"5 - 8",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"Low",blank_2:"x",freq:"Low",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"II",notes_description:"Honky Tonk Clav: (Great bass sounds)",bankPatch:"5-8",soundNameCategory:"Honky Tonk Clav",notesDescription:"Honky Tonk Clav: (Great bass sounds)",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Low",resonance:"Low",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 1",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"x",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Mid -> High)",r:"None",blank_3:"I",notes_description:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-1",soundNameCategory:"PWM Envelope",notesDescription:"PWM Envelope: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Env + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"None",decay:"Mid",sustain:"High (Mid -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 2",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Mid",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Low",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"Off",notes_description:"Solo String:",bankPatch:"6-2",soundNameCategory:"Solo String",notesDescription:"Solo String:",waveformOscType:"Saw + Mid",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 3",glide:"x",octave:"0",rate:"Max",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High",r:"Fast",blank_3:"II",notes_description:"Square Ring Mod:",bankPatch:"6-3",soundNameCategory:"Square Ring Mod",notesDescription:"Square Ring Mod:",waveformOscType:"Sub 100% + Square",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"None",decay:"Mid",sustain:"High",release:"Fast",chorus:"II",delayReverb:"x"},{blank:"",preset:"6 - 4",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Low -> High)",r:"Fast",blank_3:"Off",notes_description:"Mellow Trumpet:",bankPatch:"6-4",soundNameCategory:"Mellow Trumpet",notesDescription:"Mellow Trumpet:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"+ High",attack:"Mid",decay:"Mid",sustain:"High (Low -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 5",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"x",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Horn:",bankPatch:"6-5",soundNameCategory:"Horn",notesDescription:"Horn:",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 6",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ High",lfo_2:"x",kybd:"Y",env_gate:"Env/Gate",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"None",blank_3:"I",notes_description:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",bankPatch:"6-6",soundNameCategory:"Square Chorus Lead",notesDescription:"Square Chorus Lead: VCA Gate for low Envelope settings, VCA Env for high Envelope settings",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"+ High",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"None",chorus:"I",delayReverb:"x"},{blank:"",preset:"6 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"Low",pwm:"x",pulse:"SQU",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Clarinet:",bankPatch:"6-7",soundNameCategory:"Clarinet",notesDescription:"Clarinet:",waveformOscType:"Square + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"Y"},{blank:"",preset:"6 - 8",glide:"x",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"x",sub:"x",noise:"High",blank_2:"Y",freq:"Tuned*",res:"Max*",env:"x",lfo_2:"Low",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Fast",blank_3:"Off",notes_description:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",bankPatch:"6-8",soundNameCategory:"Ocarina",notesDescription:"Ocarina: Keyboard tracked self-oscilating filtered noise (Turn down Resonance to increase noise)",waveformOscType:"Unknown",filterFreq:"Tuned*",resonance:"Max*",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Fast",chorus:"Off",delayReverb:"x"},{blank:"",preset:"7 - 1",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"High",res:"Low",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"PWM String Ensemble I:",bankPatch:"7-1",soundNameCategory:"PWM String Ensemble I",notesDescription:"PWM String Ensemble I:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"High",resonance:"Low",envMod:"+ Low",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 2",glide:"x",octave:"+1",rate:"x",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"II",notes_description:"Saw String Ensemble:",bankPatch:"7-2",soundNameCategory:"Saw String Ensemble",notesDescription:"Saw String Ensemble:",waveformOscType:"Saw + Sub 100%",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 3",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Brass Ensemble:",bankPatch:"7-3",soundNameCategory:"Brass Ensemble",notesDescription:"Brass Ensemble:",waveformOscType:"Saw + Sub 100% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 4",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"PWM String Ensemble II:",bankPatch:"7-4",soundNameCategory:"PWM String Ensemble II",notesDescription:"PWM String Ensemble II:",waveformOscType:"Sub 100% + LFO + PWM",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Fast",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"7 - 5",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"Low",pwm:"x",pulse:"x",saw:"SAW",sub:"25%",noise:"Mid",blank_2:"x",freq:"Mid",res:"Mid",env:"x",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Mid",blank_3:"I",notes_description:"Ghost Pad: (Open filter for Noisy String Ensemble)",bankPatch:"7-5",soundNameCategory:"Ghost Pad",notesDescription:"Ghost Pad: (Open filter for Noisy String Ensemble)",waveformOscType:"Saw + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"x",attack:"Mid",decay:"Mid",sustain:"High",release:"Mid",chorus:"I",delayReverb:"x"},{blank:"",preset:"7 - 6",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Low",env:"- Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad I (Bright):",bankPatch:"7-6",soundNameCategory:"Evolving Filter Pad I (Bright)",notesDescription:"Evolving Filter Pad I (Bright):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Low",envMod:"- Low",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 7",glide:"x",octave:"0",rate:"Mid",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"25%",saw:"x",sub:"x",noise:"x",blank_2:"Y",freq:"Mid",res:"High",env:"+ Low",lfo_2:"High",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad II (Mellow):",bankPatch:"7-7",soundNameCategory:"Evolving Filter Pad II (Mellow)",notesDescription:"Evolving Filter Pad II (Mellow):",waveformOscType:"Fixed + Sub 25%",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High",release:"Slow",chorus:"II",delayReverb:"Y"},{blank:"",preset:"7 - 8",glide:"x",octave:"0",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Evolving Filter Pad III (Mellow Slow and Wide):",bankPatch:"7-8",soundNameCategory:"Evolving Filter Pad III (Mellow Slow and Wide)",notesDescription:"Evolving Filter Pad III (Mellow Slow and Wide):",waveformOscType:"Fixed + Sub 20%",filterFreq:"Mid",resonance:"Mid",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 1",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"50%",noise:"Low",blank_2:"x",freq:"Mid",res:"High",env:"- Med",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Fast",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad IV (Bright Slow and Wide):",bankPatch:"8-1",soundNameCategory:"Evolving Filter Pad IV (Bright Slow and Wide)",notesDescription:"Evolving Filter Pad IV (Bright Slow and Wide):",waveformOscType:"Sub 50% + Fixed + Sub 20%",filterFreq:"Mid",resonance:"High",envMod:"- Med",attack:"Fast",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 2",glide:"Mid",octave:"0",rate:"Mid",delay:"x",lfo:"x",pwm:"LFO",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"High",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad V (Squishy I):",bankPatch:"8-2",soundNameCategory:"Evolving Filter Pad V (Squishy I)",notesDescription:"Evolving Filter Pad V (Squishy I):",waveformOscType:"LFO + PWM",filterFreq:"High",resonance:"High",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 3",glide:"x",octave:"0",rate:"Slow",delay:"Y",lfo:"x",pwm:"Fixed",pulse:"20%",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"High",res:"Mid",env:"- Low",lfo_2:"High",kybd:"Y",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Mid",blank_3:"I",notes_description:"Evolving Filter Pad VI (Squishy II):",bankPatch:"8-3",soundNameCategory:"Evolving Filter Pad VI (Squishy II)",notesDescription:"Evolving Filter Pad VI (Squishy II):",waveformOscType:"Fixed + Sub 20%",filterFreq:"High",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Mid",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 4",glide:"x",octave:"+1",rate:"Slow",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"50%",noise:"x",blank_2:"x",freq:"Low",res:"Mid",env:"+ High",lfo_2:"Mid",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Low -> High)",r:"Mid",blank_3:"II",notes_description:"Evolving Filter Pad VII (Blossoming I):",bankPatch:"8-4",soundNameCategory:"Evolving Filter Pad VII (Blossoming I)",notesDescription:"Evolving Filter Pad VII (Blossoming I):",waveformOscType:"Saw + Sub 50%",filterFreq:"Low",resonance:"Mid",envMod:"+ High",attack:"Slow",decay:"Mid",sustain:"High (Low -> High)",release:"Mid",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 5",glide:"x",octave:"0",rate:"x",delay:"x",lfo:"x",pwm:"Env",pulse:"PWM",saw:"x",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"+ Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Slow",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"I",notes_description:"Evolving Filter Pad VII (Blossoming II):",bankPatch:"8-5",soundNameCategory:"Evolving Filter Pad VII (Blossoming II)",notesDescription:"Evolving Filter Pad VII (Blossoming II):",waveformOscType:"Env + PWM",filterFreq:"Mid",resonance:"High",envMod:"+ Low",attack:"Slow",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"I",delayReverb:"x"},{blank:"",preset:"8 - 6",glide:"x",octave:"+1",rate:"Fast",delay:"Y",lfo:"Low",pwm:"Fixed",pulse:"25%",saw:"x",sub:"100%",noise:"x",blank_2:"x",freq:"Mid",res:"Mid",env:"- Low",lfo_2:"x",kybd:"Y",env_gate:"Env",a:"Mid",d:"Slow",s_control_range:"Off (Off -> High)",r:"Fast",blank_3:"I",notes_description:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",bankPatch:"8-6",soundNameCategory:"Decaying Filter Pad (Blossoming III)",notesDescription:"Decaying Filter Pad (Blossoming III): Sustains once Envelope control is past 50%",waveformOscType:"Sub 100% + Fixed + Sub 25% + Low",filterFreq:"Mid",resonance:"Mid",envMod:"- Low",attack:"Mid",decay:"Slow",sustain:"Off (Off -> High)",release:"Fast",chorus:"I",delayReverb:"Y"},{blank:"",preset:"8 - 7",glide:"x",octave:"+1",rate:"Mid",delay:"x",lfo:"x",pwm:"x",pulse:"x",saw:"SAW",sub:"100%",noise:"x",blank_2:"x",freq:"Low",res:"High",env:"+ Low",lfo_2:"High*",kybd:"x",env_gate:"Env",a:"Mid",d:"Mid",s_control_range:"High (Mid -> High)",r:"Slow",blank_3:"II",notes_description:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",bankPatch:"8-7",soundNameCategory:"Sample and Hold Pad",notesDescription:"Sample and Hold Pad: Freerunning S&H LFO to Filter. S&H effect dissapears for high Filter Settings",waveformOscType:"Saw + Sub 100%",filterFreq:"Low",resonance:"High",envMod:"+ Low",attack:"Mid",decay:"Mid",sustain:"High (Mid -> High)",release:"Slow",chorus:"II",delayReverb:"x"},{blank:"",preset:"8 - 8",glide:"x",octave:"0",rate:"Fast",delay:"x",lfo:"x",pwm:"x",pulse:"SQU",saw:"SAW",sub:"x",noise:"x",blank_2:"x",freq:"Mid",res:"High",env:"x",lfo_2:"Low*",kybd:"Y",env_gate:"Env",a:"None",d:"Mid",s_control_range:"High (Low -> High)",r:"Slow",blank_3:"II",notes_description:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",bankPatch:"8-8",soundNameCategory:"Plectrum Tremolo Pad",notesDescription:"Plectrum Tremolo Pad: Freerunning SAW LFO to Filter. Tremolo effect dissapears for high Filter Settings",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"High",envMod:"x",attack:"None",decay:"Mid",sustain:"High (Low -> High)",release:"Slow",chorus:"II",delayReverb:"x"}],Qe=[[/deadmau5/i,["Progressive House","EDM"]],[/avicii/i,["Melodic EDM","Pop"]],[/chiptune/i,["Chiptune","Retro"]],[/lo[- ]?fi/i,["Lo-Fi"]],[/house/i,["House"]],[/trance/i,["Trance"]],[/dance/i,["Dance"]],[/ambient/i,["Ambient"]],[/juno/i,["Vintage","Analog"]],[/303/i,["Acid","Bassline"]],[/bass/i,["Bass"]],[/brass/i,["Brass"]],[/organ/i,["Organ"]],[/strings/i,["Strings"]],[/piano/i,["Piano"]],[/pad/i,["Pad"]],[/lead/i,["Lead"]],[/pluck/i,["Pluck"]],[/synth/i,["Synth"]],[/noise/i,["Noise"]],[/bell/i,["Bell"]],[/vintage/i,["Vintage"]],[/metallic/i,["Metallic"]],[/dark/i,["Dark"]],[/bright/i,["Bright"]],[/soft/i,["Soft"]],[/aggressive/i,["Aggressive"]],[/hyper pop/i,["Hyperpop"]],[/rock/i,["Rock"]],[/house music/i,["House"]],[/deep house/i,["Deep House"]],[/hip hop/i,["Hip Hop"]],[/rnb/i,["R&B"]],[/sci-fi/i,["Sci-Fi"]],[/industrial/i,["Industrial"]],[/noise style/i,["Noise"]],[/soundtrack/i,["Soundtrack"]]];function h(s,e){Array.isArray(e)?e.forEach(t=>t&&s.add(t)):e&&s.add(e)}function Je(s){const e=new Set,t=s.notesDescription||"",i=(s.soundNameCategory||"").toLowerCase(),a=/\(([^)]+)\)/g;let o;for(;(o=a.exec(t))!==null;){const n=o[1].trim();n&&(/^good for\s+/i.test(n)||h(e,n))}Qe.forEach(([n,c])=>{(n.test(t)||n.test(i))&&h(e,c)}),[[/pad/i,"Pad"],[/lead/i,"Lead"],[/bass/i,"Bass"],[/keys/i,"Keys"],[/organ/i,"Organ"],[/piano/i,"Piano"],[/pluck/i,"Pluck"],[/brass/i,"Brass"],[/strings/i,"Strings"],[/bell/i,"Bell"],[/whistle/i,"Whistle"],[/clav/i,"Clav"],[/synth/i,"Synth"]].forEach(([n,c])=>{s.soundNameCategory&&n.test(s.soundNameCategory)&&h(e,c)});const l=(s.waveformOscType||"").toLowerCase();return l.includes("saw")&&h(e,"Saw"),l.includes("square")&&h(e,"Square"),l.includes("sub")&&h(e,"Sub"),l.includes("noise")&&h(e,"Noise"),l.includes("triangle")&&h(e,"Triangle"),l.includes("sync")&&h(e,"Sync"),l.includes("pwm")&&h(e,"PWM"),(l.includes("cross-mod")||l.includes("cross mod"))&&h(e,"Cross-Mod"),s.filterFreq==="High"&&h(e,"Bright"),s.filterFreq==="Low"&&h(e,"Dark"),s.resonance==="High"&&h(e,"Resonant"),s.resonance==="Low"&&h(e,"Smooth"),s.attack==="Fast"&&h(e,"Sharp Attack"),s.attack==="Slow"&&h(e,"Slow Attack"),s.release==="Slow"&&h(e,"Long Release"),s.release==="Fast"&&h(e,"Snappy Release"),s.sustain==="Max"&&h(e,"Sustained"),s.chorus&&s.chorus!=="Off"&&h(e,s.chorus),s.delayReverb&&s.delayReverb!=="Off"&&h(e,s.delayReverb),Array.from(e)}function Ke(s){const e=s.toLowerCase();return/^(progressive house|edm|melodic edm|pop|chiptune|retro|lo-fi|house|trance|dance|ambient|acid|bassline|hip hop|r&b|sci-fi|industrial|soundtrack|hyperpop|rock|vintage|analog)$/.test(e)?"Genre / Mood":/^(pad|lead|bass|keys|organ|piano|pluck|brass|strings|bell|whistle|clav|synth)$/.test(e)?"Instrument / Type":/^(bright|dark|soft|aggressive|metallic|noise|smooth|resonant|sustained)$/.test(e)?"Character":/^(sharp attack|slow attack|long release|snappy release)$/.test(e)?"Envelope":/^(chorus|reverb|delay|chorus \d|reverb \d|delay \d)$/.test(e)?"Effects":/^(saw|square|sub|triangle|sync|pwm|cross-mod)$/.test(e)?"Waveform":"Other"}function Q(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("none")||e==="x"?0:e.includes("fast")?20:e.includes("mid")||e.includes("med")?60:e.includes("slow")?100:0}function Ze(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("off")||e==="x"?0:e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")||e.includes("max")?100:0}function Xe(s){if(!s)return 50;const e=s.toLowerCase().trim();return e.includes("low")?15:e.includes("mid")||e.includes("med")?55:e.includes("high")?85:e.includes("tuned")?70:50}function et(s){if(!s)return 0;const e=s.toLowerCase().trim();return e.includes("low")?10:e.includes("mid")||e.includes("med")?45:e.includes("high")?80:e.includes("max")?100:0}function tt(s){if(!s||s==="x")return 50;const e=s.toLowerCase().trim();return e.includes("- med")||e.includes("- high")?15:e.includes("- low")?35:e.includes("+ low")?65:e.includes("+ mid")||e.includes("+ med")?80:e.includes("+ high")?95:50}function st(s){if(!s||s==="x")return 0;const e=s.toLowerCase().trim();return e.includes("low")?30:e.includes("mid")||e.includes("med")?65:e.includes("high")?100:0}function at(s){if(!s||s==="x")return 0;const e=s.toLowerCase().trim();return e.includes("fixed")?30:e.includes("env")?50:e.includes("lfo")?85:0}var it=Object.defineProperty,ot=Object.getOwnPropertyDescriptor,m=(s,e,t,i)=>{for(var a=i>1?void 0:i?ot(e,t):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(a=(i?r(e,t,a):r(a))||a);return i&&a&&it(e,t,a),a};let g=class extends ${constructor(){super(...arguments),this.presets=[],this.selectedId="",this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All",this.filtersOpen=!1}clearFilters(){this.searchQuery="",this.activeGenreMood="All",this.activeInstrumentType="All",this.activeCharacter="All",this.activeEnvelope="All",this.activeEffects="All",this.activeWaveform="All"}get hasActiveFilters(){return this.searchQuery!==""||this.activeGenreMood!=="All"||this.activeInstrumentType!=="All"||this.activeCharacter!=="All"||this.activeEnvelope!=="All"||this.activeEffects!=="All"||this.activeWaveform!=="All"}get filteredPresets(){const s=this.searchQuery.trim().toLowerCase();return this.presets.filter(e=>{const t=[e.name,e.notes,e.waveformOscType,e.bankPatch,e.filterFreq,e.delayEffects,(e.tags||[]).join(" ")].filter(Boolean).join(" ").toLowerCase(),i=s===""||t.includes(s),a=this.activeGenreMood==="All"||(e.tags||[]).some(d=>d.toLowerCase()===this.activeGenreMood.toLowerCase()),o=this.activeInstrumentType==="All"||(e.tags||[]).some(d=>d.toLowerCase()===this.activeInstrumentType.toLowerCase()),r=this.activeCharacter==="All"||(e.tags||[]).some(d=>d.toLowerCase()===this.activeCharacter.toLowerCase()),l=this.activeEnvelope==="All"||(e.tags||[]).some(d=>d.toLowerCase()===this.activeEnvelope.toLowerCase()),n=this.activeEffects==="All"||(e.tags||[]).some(d=>d.toLowerCase()===this.activeEffects.toLowerCase()),c=this.activeWaveform==="All"||(e.tags||[]).some(d=>d.toLowerCase()===this.activeWaveform.toLowerCase());return i&&a&&o&&r&&l&&n&&c})}get groupedTags(){const s=new Set;this.presets.forEach(t=>(t.tags||[]).forEach(i=>s.add(i)));const e=new Map;return Array.from(s).sort((t,i)=>t.localeCompare(i)).forEach(t=>{const i=Ke(t),a=e.get(i)??[];a.push(t),e.set(i,a)}),e}renderCategorySelect(s,e,t,i){return f`
      <div class="filter-group">
        <label>${s}</label>
        <select
          class="filter-select"
          .value=${t}
          @change=${a=>{this[i]=a.target.value}}
        >
          <option value="All">All</option>
          ${e.map(a=>f`<option value=${a} ?selected=${t===a}>${a}</option>`)}
        </select>
      </div>
    `}render(){const s=this.filteredPresets,e=s.filter(a=>(a.tags||[]).some(o=>o.toLowerCase()==="bass")).length,t=s.filter(a=>(a.tags||[]).some(o=>o.toLowerCase()==="pad")).length,i=s.filter(a=>(a.tags||[]).some(o=>o.toLowerCase()==="lead")).length;return f`
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
          <span class="preset-count">MATCH: ${s.length}</span>
          <div class="patch-counts">
            FILTERED (BASS: ${e}, PAD: ${t}, LEAD: ${i})
          </div>
        </div>
      </div>
      
      ${this.filtersOpen?f`
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
        ${s.length===0?f`<div class="no-results">NO PRESETS FOUND</div>`:f`
            <ul>
              ${s.map(a=>{const o=a.id||a.bankPatch,r=a.name||a.soundNameCategory,l=this.selectedId===o;return f`
                  <li 
                    class=${l?"selected":""} 
                    @click=${()=>{this.dispatchEvent(new CustomEvent("preset-selected",{detail:a}))}}
                  >
                    <span class="preset-id">${o}</span>
                    <span class="preset-name">${r}</span>
                  </li>
                `})}
            </ul>
          `}
      </div>
    `}};g.styles=ge`
    :host {
      display: flex;
      flex-direction: column;
      background: #141416;
      border: 3px solid #3c3d42;
      border-radius: 8px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.85), inset 0 0 20px rgba(0, 0, 0, 0.6);
      overflow: hidden;
      max-height: 85vh;
      font-family: 'Inter', system-ui, sans-serif;
      color: #e2e2e4;
      z-index: 1000;
      width: 100%;
    }
    
    .list-header {
      background: #1c1d22;
      border-bottom: 2px solid #2e2f34;
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

    .retro-btn {
      background: linear-gradient(180deg, #3c3e44 0%, #202124 100%);
      border: 2px solid #5a5c62; color: #e2e2e4; font-size: 0.7rem; font-weight: bold;
      padding: 6px 12px; border-radius: 4px; cursor: pointer; text-transform: uppercase;
      height: 34px;
    }

    .retro-btn:hover { background: #4a4d54; }

    .patch-counts {
      font-size: 0.65rem;
      color: #8c8e94;
      font-weight: 800;
      text-align: right;
      text-transform: uppercase;
    }

    .filters-drawer {
      background: #18191e;
      border-bottom: 2px solid #2e2f34;
      padding: 14px;
    }
    
    .filter-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; }
    .filter-group { display: flex; flex-direction: column; gap: 4px; }
    .filter-group label { font-size: 0.7rem; font-weight: bold; color: #8c8e94; text-transform: uppercase; }
    .filter-select {
      background: #0c0c0e; border: 2px solid #2e3037; color: #e2e2e4;
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
  `;m([ee({type:Array})],g.prototype,"presets",2);m([ee({type:String})],g.prototype,"selectedId",2);m([v()],g.prototype,"searchQuery",2);m([v()],g.prototype,"activeGenreMood",2);m([v()],g.prototype,"activeInstrumentType",2);m([v()],g.prototype,"activeCharacter",2);m([v()],g.prototype,"activeEnvelope",2);m([v()],g.prototype,"activeEffects",2);m([v()],g.prototype,"activeWaveform",2);m([v()],g.prototype,"filtersOpen",2);g=m([ye("j6-preset-list")],g);var rt=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,O=(s,e,t,i)=>{for(var a=i>1?void 0:i?nt(e,t):e,o=s.length-1,r;o>=0;o--)(r=s[o])&&(a=(i?r(e,t,a):r(a))||a);return i&&a&&rt(e,t,a),a};const he=je.map(s=>({...s,id:s.bankPatch,name:s.soundNameCategory,notes:s.notesDescription||"",delayEffects:s.delayReverb,tags:Je(s)}));let M=class extends ${constructor(){super(...arguments),this.selectedPreset=he[0],this.presetListOpen=!1,this.aboutOpen=!1,this.isEdited=!1,this.customValues={}}willUpdate(s){s.has("selectedPreset")&&this.resetToPresetValues()}resetToPresetValues(){const s=this.selectedPreset;this.customValues={lfo:st(s.lfo),pwm:at(s.pwm),a:Q(s.attack),d:Q(s.decay),s:Ze(s.sustain),r:Q(s.release),freq:Xe(s.filterFreq),res:et(s.resonance),env:tt(s.envMod),effect:s.chorus!=="Off"?70:0,delay:s.delayReverb==="Y"?60:0,reverb:s.delayReverb==="Y"?50:0},this.isEdited=!1}handleFaderMouseDown(s,e){s.preventDefault();const t=s.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(s.clientY,t,e);const i=o=>{this.updateFaderFromCoord(o.clientY,t,e)},a=()=>{window.removeEventListener("mousemove",i),window.removeEventListener("mouseup",a)};window.addEventListener("mousemove",i),window.addEventListener("mouseup",a)}handleFaderTouchStart(s,e){const t=s.currentTarget.querySelector(".fader-track");this.updateFaderFromCoord(s.touches[0].clientY,t,e);const i=o=>{this.updateFaderFromCoord(o.touches[0].clientY,t,e)},a=()=>{window.removeEventListener("touchmove",i),window.removeEventListener("touchend",a)};window.addEventListener("touchmove",i),window.addEventListener("touchend",a)}updateFaderFromCoord(s,e,t){const i=e.getBoundingClientRect(),a=Math.max(0,Math.min(1,(i.bottom-s)/i.height)),o=Math.round(a*100);this.customValues={...this.customValues,[t]:o},this.isEdited=!0}handleKnobMouseDown(s,e){s.preventDefault();const t=s.clientY,i=this.customValues[e]||0,a=r=>{const n=(t-r.clientY)*1.2,c=Math.max(0,Math.min(100,i+n));this.customValues={...this.customValues,[e]:Math.round(c)},this.isEdited=!0},o=()=>{window.removeEventListener("mousemove",a),window.removeEventListener("mouseup",o)};window.addEventListener("mousemove",a),window.addEventListener("mouseup",o)}handleSendGet(){const s=`--- Roland J-6 Patch Info ---
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
---------------------------------------`;navigator.clipboard.writeText(s).then(()=>{alert("Patch dump copied to clipboard successfully!")})}renderFader(s,e,t){return f`
      <div 
        class="fader-group"
        @mousedown=${i=>this.handleFaderMouseDown(i,t)}
        @touchstart=${i=>this.handleFaderTouchStart(i,t)}
      >
        <span class="fader-label">${s}</span>
        <div class="fader-track-wrapper">
          <div class="fader-track">
            <div class="fader-handle" style="bottom: calc(${e}% * 0.86)"></div>
          </div>
        </div>
        <span class="fader-val-label">${e}%</span>
      </div>
    `}renderKnob(s,e,t){const i=-135+2.7*e;return f`
      <div class="knob-control" @mousedown=${a=>this.handleKnobMouseDown(a,t)}>
        <div class="knob-dial-wrapper">
          <div class="knob-dial" style="transform: rotate(${i}deg)">
            <div class="knob-indicator"></div>
          </div>
        </div>
        <span class="knob-label">${s}</span>
      </div>
    `}render(){const s=this.selectedPreset,e=s.saw==="SAW",t=s.pulse==="SQU"||s.pulse==="PWM",i=["15%","20%","25%","33%"].includes(s.pulse),a=["100%","25%"].includes(s.sub),o=s.sub==="50%",r=s.noise!=="x",l=s.chorus==="Off"||!s.chorus,n=s.chorus==="I",c=s.chorus==="II",d=(this.customValues.a||0)*.25,p=(this.customValues.d||0)*.25,b=(this.customValues.s||0)*.4,x=25,H=(this.customValues.r||0)*.25,we="0,40",Me=`${d},0`,ke=`${d+p},${40-b}`,_e=`${d+p+x},${40-b}`,Se=`${d+p+x+H},40`,Fe=`M ${we} L ${Me} L ${ke} L ${_e} L ${Se}`;return f`
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
                    
                    <!-- ADSR LCD Screen -->
                    <div class="led-search-screen" style="padding: 0; overflow: hidden; justify-content: center;">
                      <svg viewBox="0 0 100 40" style="width: 90%; height: 80%; overflow: visible;" preserveAspectRatio="none">
                        <path d=${Fe} fill="none" stroke="#ff5d00" stroke-width="2" vector-effect="non-scaling-stroke" filter="drop-shadow(0 0 4px rgba(255, 93, 0, 0.7))"/>
                      </svg>
                    </div>
                  </div>

                  <!-- Bottom Row: Notes and Counts -->
                  <div class="patch-bottom-row">
                    <div class="patch-notes">
                      ${this.isEdited?f`<span style="color:#ffa166;">[EDITED] </span>`:""}
                      ${s.notes||"Factory patch preset definition"}
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
                      <div class="led-well ${i?"active":""}"></div>
                      <button class="btn-key key-cream ${i?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label">
                        <span style="font-size:0.5rem; letter-spacing:0.02em;">SUB</span>
                      </span>
                      <div class="led-well ${a?"active":""}"></div>
                      <button class="btn-key key-sub ${a?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem; font-family:sans-serif;">Sub 50%</span>
                      <div class="led-well ${o?"active":""}"></div>
                      <button class="btn-key key-sub50 ${o?"active":""}"></button>
                    </div>

                    <div class="waveform-item">
                      <span class="waveform-label" style="font-size:0.55rem;">Noise</span>
                      <div class="led-well ${r?"active":""}"></div>
                      <button class="btn-key key-noise ${r?"active":""}"></button>
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
                        <div class="led-well ${n?"active":""}"></div>
                        <button class="btn-key key-cream ${n?"active":""}"></button>
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
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8c8e94" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" style="display:block; margin-bottom: 1px;">
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
      ${this.presetListOpen?f`
        <div class="modal-backdrop" @click=${()=>this.presetListOpen=!1}>
          <div class="preset-dropdown-container" @click=${I=>I.stopPropagation()}>
            <j6-preset-list
              .presets=${he}
              .selectedId=${this.selectedPreset.id}
              @preset-selected=${I=>{this.selectedPreset=I.detail,this.presetListOpen=!1}}
            ></j6-preset-list>
          </div>
        </div>
      `:""}



      <!-- ABOUT/HELP MODAL -->
      ${this.aboutOpen?f`
        <div class="modal-backdrop" @click=${()=>this.aboutOpen=!1}>
          <div class="retro-modal" @click=${I=>I.stopPropagation()}>
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
    `}};M.styles=ge`
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
      display: flex; justify-content: center; align-items: center; gap: 24px; font-size: 0.8rem; color: #6a6b72;
    }
    .synth-footer a {
      color: #8c8e94;
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 8px;
      transition: color 0.2s ease;
      font-weight: 600;
    }
    .synth-footer a:hover {
      color: #e2e2e4;
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
  `;O([v()],M.prototype,"selectedPreset",2);O([v()],M.prototype,"presetListOpen",2);O([v()],M.prototype,"aboutOpen",2);O([v()],M.prototype,"isEdited",2);O([v()],M.prototype,"customValues",2);M=O([ye("j6-app")],M);
