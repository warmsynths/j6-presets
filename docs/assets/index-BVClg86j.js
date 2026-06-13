(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const E=globalThis,J=E.ShadowRoot&&(E.ShadyCSS===void 0||E.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,X=Symbol(),te=new WeakMap;let fe=class{constructor(e,t,a){if(this._$cssResult$=!0,a!==X)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(J&&e===void 0){const a=t!==void 0&&t.length===1;a&&(e=te.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),a&&te.set(t,e))}return e}toString(){return this.cssText}};const be=r=>new fe(typeof r=="string"?r:r+"",void 0,X),Z=(r,...e)=>{const t=r.length===1?r[0]:e.reduce((a,s,o)=>a+(i=>{if(i._$cssResult$===!0)return i.cssText;if(typeof i=="number")return i;throw Error("Value passed to 'css' function must be a 'css' function result: "+i+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+r[o+1],r[0]);return new fe(t,r,X)},Me=(r,e)=>{if(J)r.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet);else for(const t of e){const a=document.createElement("style"),s=E.litNonce;s!==void 0&&a.setAttribute("nonce",s),a.textContent=t.cssText,r.appendChild(a)}},se=J?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let t="";for(const a of e.cssRules)t+=a.cssText;return be(t)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Se,defineProperty:$e,getOwnPropertyDescriptor:Pe,getOwnPropertyNames:Oe,getOwnPropertySymbols:ke,getPrototypeOf:_e}=Object,v=globalThis,ae=v.trustedTypes,Fe=ae?ae.emptyScript:"",I=v.reactiveElementPolyfillSupport,F=(r,e)=>r,N={toAttribute(r,e){switch(e){case Boolean:r=r?Fe:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let t=r;switch(e){case Boolean:t=r!==null;break;case Number:t=r===null?null:Number(r);break;case Object:case Array:try{t=JSON.parse(r)}catch{t=null}}return t}},Y=(r,e)=>!Se(r,e),re={attribute:!0,type:String,converter:N,reflect:!1,useDefault:!1,hasChanged:Y};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),v.litPropertyMetadata??(v.litPropertyMetadata=new WeakMap);let S=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=re){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const a=Symbol(),s=this.getPropertyDescriptor(e,a,t);s!==void 0&&$e(this.prototype,e,s)}}static getPropertyDescriptor(e,t,a){const{get:s,set:o}=Pe(this.prototype,e)??{get(){return this[t]},set(i){this[t]=i}};return{get:s,set(i){const c=s==null?void 0:s.call(this);o==null||o.call(this,i),this.requestUpdate(e,c,a)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??re}static _$Ei(){if(this.hasOwnProperty(F("elementProperties")))return;const e=_e(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(F("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(F("properties"))){const t=this.properties,a=[...Oe(t),...ke(t)];for(const s of a)this.createProperty(s,t[s])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[a,s]of t)this.elementProperties.set(a,s)}this._$Eh=new Map;for(const[t,a]of this.elementProperties){const s=this._$Eu(t,a);s!==void 0&&this._$Eh.set(s,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const a=new Set(e.flat(1/0).reverse());for(const s of a)t.unshift(se(s))}else e!==void 0&&t.push(se(e));return t}static _$Eu(e,t){const a=t.attribute;return a===!1?void 0:typeof a=="string"?a:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const a of t.keys())this.hasOwnProperty(a)&&(e.set(a,this[a]),delete this[a]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Me(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostConnected)==null?void 0:a.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var a;return(a=t.hostDisconnected)==null?void 0:a.call(t)})}attributeChangedCallback(e,t,a){this._$AK(e,a)}_$ET(e,t){var o;const a=this.constructor.elementProperties.get(e),s=this.constructor._$Eu(e,a);if(s!==void 0&&a.reflect===!0){const i=(((o=a.converter)==null?void 0:o.toAttribute)!==void 0?a.converter:N).toAttribute(t,a.type);this._$Em=e,i==null?this.removeAttribute(s):this.setAttribute(s,i),this._$Em=null}}_$AK(e,t){var o,i;const a=this.constructor,s=a._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const c=a.getPropertyOptions(s),n=typeof c.converter=="function"?{fromAttribute:c.converter}:((o=c.converter)==null?void 0:o.fromAttribute)!==void 0?c.converter:N;this._$Em=s;const d=n.fromAttribute(t,c.type);this[s]=d??((i=this._$Ej)==null?void 0:i.get(s))??d,this._$Em=null}}requestUpdate(e,t,a,s=!1,o){var i;if(e!==void 0){const c=this.constructor;if(s===!1&&(o=this[e]),a??(a=c.getPropertyOptions(e)),!((a.hasChanged??Y)(o,t)||a.useDefault&&a.reflect&&o===((i=this._$Ej)==null?void 0:i.get(e))&&!this.hasAttribute(c._$Eu(e,a))))return;this.C(e,t,a)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:a,reflect:s,wrapped:o},i){a&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,i??t??this[e]),o!==!0||i!==void 0)||(this._$AL.has(e)||(this.hasUpdated||a||(t=void 0),this._$AL.set(e,t)),s===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var a;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[o,i]of s){const{wrapped:c}=i,n=this[o];c!==!0||this._$AL.has(o)||n===void 0||this.C(o,void 0,i,n)}}let e=!1;const t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),(a=this._$EO)==null||a.forEach(s=>{var o;return(o=s.hostUpdate)==null?void 0:o.call(s)}),this.update(t)):this._$EM()}catch(s){throw e=!1,this._$EM(),s}e&&this._$AE(t)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(a=>{var s;return(s=a.hostUpdated)==null?void 0:s.call(a)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};S.elementStyles=[],S.shadowRootOptions={mode:"open"},S[F("elementProperties")]=new Map,S[F("finalized")]=new Map,I==null||I({ReactiveElement:S}),(v.reactiveElementVersions??(v.reactiveElementVersions=[])).push("2.1.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const C=globalThis,oe=r=>r,q=C.trustedTypes,ie=q?q.createPolicy("lit-html",{createHTML:r=>r}):void 0,ye="$lit$",y=`lit$${Math.random().toFixed(9).slice(2)}$`,ve="?"+y,Ce=`<${ve}>`,M=document,x=()=>M.createComment(""),L=r=>r===null||typeof r!="object"&&typeof r!="function",Q=Array.isArray,xe=r=>Q(r)||typeof(r==null?void 0:r[Symbol.iterator])=="function",K=`[ 	
\f\r]`,_=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ne=/-->/g,ce=/>/g,g=RegExp(`>|${K}(?:([^\\s"'>=/]+)(${K}*=${K}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),le=/'/g,de=/"/g,ge=/^(?:script|style|textarea|title)$/i,Le=r=>(e,...t)=>({_$litType$:r,strings:e,values:t}),A=Le(1),$=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),he=new WeakMap,m=M.createTreeWalker(M,129);function me(r,e){if(!Q(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return ie!==void 0?ie.createHTML(e):e}const Ae=(r,e)=>{const t=r.length-1,a=[];let s,o=e===2?"<svg>":e===3?"<math>":"",i=_;for(let c=0;c<t;c++){const n=r[c];let d,u,l=-1,p=0;for(;p<n.length&&(i.lastIndex=p,u=i.exec(n),u!==null);)p=i.lastIndex,i===_?u[1]==="!--"?i=ne:u[1]!==void 0?i=ce:u[2]!==void 0?(ge.test(u[2])&&(s=RegExp("</"+u[2],"g")),i=g):u[3]!==void 0&&(i=g):i===g?u[0]===">"?(i=s??_,l=-1):u[1]===void 0?l=-2:(l=i.lastIndex-u[2].length,d=u[1],i=u[3]===void 0?g:u[3]==='"'?de:le):i===de||i===le?i=g:i===ne||i===ce?i=_:(i=g,s=void 0);const f=i===g&&r[c+1].startsWith("/>")?" ":"";o+=i===_?n+Ce:l>=0?(a.push(d),n.slice(0,l)+ye+n.slice(l)+y+f):n+y+(l===-2?c:f)}return[me(r,o+(r[t]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),a]};class R{constructor({strings:e,_$litType$:t},a){let s;this.parts=[];let o=0,i=0;const c=e.length-1,n=this.parts,[d,u]=Ae(e,t);if(this.el=R.createElement(d,a),m.currentNode=this.el.content,t===2||t===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(s=m.nextNode())!==null&&n.length<c;){if(s.nodeType===1){if(s.hasAttributes())for(const l of s.getAttributeNames())if(l.endsWith(ye)){const p=u[i++],f=s.getAttribute(l).split(y),T=/([.?@])?(.*)/.exec(p);n.push({type:1,index:o,name:T[2],strings:f,ctor:T[1]==="."?De:T[1]==="?"?Te:T[1]==="@"?Ee:B}),s.removeAttribute(l)}else l.startsWith(y)&&(n.push({type:6,index:o}),s.removeAttribute(l));if(ge.test(s.tagName)){const l=s.textContent.split(y),p=l.length-1;if(p>0){s.textContent=q?q.emptyScript:"";for(let f=0;f<p;f++)s.append(l[f],x()),m.nextNode(),n.push({type:2,index:++o});s.append(l[p],x())}}}else if(s.nodeType===8)if(s.data===ve)n.push({type:2,index:o});else{let l=-1;for(;(l=s.data.indexOf(y,l+1))!==-1;)n.push({type:7,index:o}),l+=y.length-1}o++}}static createElement(e,t){const a=M.createElement("template");return a.innerHTML=e,a}}function P(r,e,t=r,a){var i,c;if(e===$)return e;let s=a!==void 0?(i=t._$Co)==null?void 0:i[a]:t._$Cl;const o=L(e)?void 0:e._$litDirective$;return(s==null?void 0:s.constructor)!==o&&((c=s==null?void 0:s._$AO)==null||c.call(s,!1),o===void 0?s=void 0:(s=new o(r),s._$AT(r,t,a)),a!==void 0?(t._$Co??(t._$Co=[]))[a]=s:t._$Cl=s),s!==void 0&&(e=P(r,s._$AS(r,e.values),s,a)),e}class Re{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:t},parts:a}=this._$AD,s=((e==null?void 0:e.creationScope)??M).importNode(t,!0);m.currentNode=s;let o=m.nextNode(),i=0,c=0,n=a[0];for(;n!==void 0;){if(i===n.index){let d;n.type===2?d=new D(o,o.nextSibling,this,e):n.type===1?d=new n.ctor(o,n.name,n.strings,this,e):n.type===6&&(d=new Ne(o,this,e)),this._$AV.push(d),n=a[++c]}i!==(n==null?void 0:n.index)&&(o=m.nextNode(),i++)}return m.currentNode=M,s}p(e){let t=0;for(const a of this._$AV)a!==void 0&&(a.strings!==void 0?(a._$AI(e,a,t),t+=a.strings.length-2):a._$AI(e[t])),t++}}class D{get _$AU(){var e;return((e=this._$AM)==null?void 0:e._$AU)??this._$Cv}constructor(e,t,a,s){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=a,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=P(this,e,t),L(e)?e===h||e==null||e===""?(this._$AH!==h&&this._$AR(),this._$AH=h):e!==this._$AH&&e!==$&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):xe(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==h&&L(this._$AH)?this._$AA.nextSibling.data=e:this.T(M.createTextNode(e)),this._$AH=e}$(e){var o;const{values:t,_$litType$:a}=e,s=typeof a=="number"?this._$AC(e):(a.el===void 0&&(a.el=R.createElement(me(a.h,a.h[0]),this.options)),a);if(((o=this._$AH)==null?void 0:o._$AD)===s)this._$AH.p(t);else{const i=new Re(s,this),c=i.u(this.options);i.p(t),this.T(c),this._$AH=i}}_$AC(e){let t=he.get(e.strings);return t===void 0&&he.set(e.strings,t=new R(e)),t}k(e){Q(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let a,s=0;for(const o of e)s===t.length?t.push(a=new D(this.O(x()),this.O(x()),this,this.options)):a=t[s],a._$AI(o),s++;s<t.length&&(this._$AR(a&&a._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var a;for((a=this._$AP)==null?void 0:a.call(this,!1,!0,t);e!==this._$AB;){const s=oe(e).nextSibling;oe(e).remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cv=e,(t=this._$AP)==null||t.call(this,e))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,a,s,o){this.type=1,this._$AH=h,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,a.length>2||a[0]!==""||a[1]!==""?(this._$AH=Array(a.length-1).fill(new String),this.strings=a):this._$AH=h}_$AI(e,t=this,a,s){const o=this.strings;let i=!1;if(o===void 0)e=P(this,e,t,0),i=!L(e)||e!==this._$AH&&e!==$,i&&(this._$AH=e);else{const c=e;let n,d;for(e=o[0],n=0;n<o.length-1;n++)d=P(this,c[a+n],t,n),d===$&&(d=this._$AH[n]),i||(i=!L(d)||d!==this._$AH[n]),d===h?e=h:e!==h&&(e+=(d??"")+o[n+1]),this._$AH[n]=d}i&&!s&&this.j(e)}j(e){e===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class De extends B{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===h?void 0:e}}class Te extends B{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==h)}}class Ee extends B{constructor(e,t,a,s,o){super(e,t,a,s,o),this.type=5}_$AI(e,t=this){if((e=P(this,e,t,0)??h)===$)return;const a=this._$AH,s=e===h&&a!==h||e.capture!==a.capture||e.once!==a.once||e.passive!==a.passive,o=e!==h&&(a===h||s);s&&this.element.removeEventListener(this.name,this,a),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t;typeof this._$AH=="function"?this._$AH.call(((t=this.options)==null?void 0:t.host)??this.element,e):this._$AH.handleEvent(e)}}class Ne{constructor(e,t,a){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=a}get _$AU(){return this._$AM._$AU}_$AI(e){P(this,e)}}const V=C.litHtmlPolyfillSupport;V==null||V(R,D),(C.litHtmlVersions??(C.litHtmlVersions=[])).push("3.3.3");const qe=(r,e,t)=>{const a=(t==null?void 0:t.renderBefore)??e;let s=a._$litPart$;if(s===void 0){const o=(t==null?void 0:t.renderBefore)??null;a._$litPart$=s=new D(e.insertBefore(x(),o),o,void 0,t??{})}return s._$AI(r),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const w=globalThis;class b extends S{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const e=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=e.firstChild),e}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=qe(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)==null||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)==null||e.setConnected(!1)}render(){return $}}var pe;b._$litElement$=!0,b.finalized=!0,(pe=w.litElementHydrateSupport)==null||pe.call(w,{LitElement:b});const G=w.litElementPolyfillSupport;G==null||G({LitElement:b});(w.litElementVersions??(w.litElementVersions=[])).push("4.2.2");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const ee=r=>(e,t)=>{t!==void 0?t.addInitializer(()=>{customElements.define(r,e)}):customElements.define(r,e)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const He={attribute:!0,type:String,converter:N,reflect:!1,hasChanged:Y},Be=(r=He,e,t)=>{const{kind:a,metadata:s}=t;let o=globalThis.litPropertyMetadata.get(s);if(o===void 0&&globalThis.litPropertyMetadata.set(s,o=new Map),a==="setter"&&((r=Object.create(r)).wrapped=!0),o.set(t.name,r),a==="accessor"){const{name:i}=t;return{set(c){const n=e.get.call(this);e.set.call(this,c),this.requestUpdate(i,n,r,!0,c)},init(c){return c!==void 0&&this.C(i,void 0,r,c),c}}}if(a==="setter"){const{name:i}=t;return function(c){const n=this[i];e.call(this,c),this.requestUpdate(i,n,r,!0,c)}}throw Error("Unsupported decorator location: "+a)};function U(r){return(e,t)=>typeof t=="object"?Be(r,e,t):((a,s,o)=>{const i=s.hasOwnProperty(o);return s.constructor.createProperty(o,a),i?Object.getOwnPropertyDescriptor(s,o):void 0})(r,e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function j(r){return U({...r,state:!0,attribute:!1})}const Ue=[{bankPatch:"1-1",soundNameCategory:"Mellow Sub Octave Pluck",waveformOscType:"Saw + Sub",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Mellow Sub Octave Pluck: (Good for Deadmau5)"},{bankPatch:"1-2",soundNameCategory:"Bright Detuned Saw Pluck",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"High",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Bright Detuned Saw Pluck: (Good for Avicii)"},{bankPatch:"1-3",soundNameCategory:"Fat Square Lead / Bass",waveformOscType:"Unison Square",filterFreq:"Mid",resonance:"Mid",envMod:"Low",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Reverb 2",notesDescription:"Fat Square Lead / Bass: (Good for Chiptune)"},{bankPatch:"1-4",soundNameCategory:"Soft Analog Square Pluck",waveformOscType:"Square",filterFreq:"Low",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Chorus 1",delayReverb:"Reverb 1",notesDescription:"Soft Analog Square Pluck: (Good for Lofi)"},{bankPatch:"1-5",soundNameCategory:"Resonant Acid Bass",waveformOscType:"Saw",filterFreq:"Low",resonance:"Max",envMod:"High",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Resonant Acid Bass: (Good for 303 emulation)"},{bankPatch:"1-6",soundNameCategory:"Deep Sub Bass",waveformOscType:"Sub",filterFreq:"Low",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Deep Sub Bass: (Clean fundamental tone)"},{bankPatch:"1-7",soundNameCategory:"Evolving Filter Pad",waveformOscType:"Unison Saw",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 4",notesDescription:"Evolving Filter Pad: (Ambient Swell)"},{bankPatch:"1-8",soundNameCategory:"Bright 80s Polysynth Keys",waveformOscType:"Saw + Square",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 2",notesDescription:"Bright 80s Polysynth Keys: (Classic Juno sound)"},{bankPatch:"2-1",soundNameCategory:"Hollow Square Pluck",waveformOscType:"Square",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Delay 1",notesDescription:"Hollow Square Pluck"},{bankPatch:"2-2",soundNameCategory:"Percussive Organ Keys",waveformOscType:"Multi-Square",filterFreq:"High",resonance:"Low",envMod:"Fast",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Chorus 1",delayReverb:"Reverb 1",notesDescription:"Percussive Organ Keys: (House music stabs)"},{bankPatch:"2-3",soundNameCategory:"Detuned PWM Pad",waveformOscType:"PWM Saw",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 3",notesDescription:"Detuned PWM Pad: (Thick texture)"},{bankPatch:"2-4",soundNameCategory:"Snappy FM-Style Bass",waveformOscType:"Square + Sub",filterFreq:"Low",resonance:"Mid",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Snappy FM-Style Bass: (Metallic attack)"},{bankPatch:"2-5",soundNameCategory:"Bright Phasey Strings",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 2",notesDescription:"Bright Phasey Strings: (String Machine emulation)"},{bankPatch:"2-6",soundNameCategory:"Lo-Fi Noise Lead",waveformOscType:"Saw + Noise",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Lo-Fi Noise Lead: (Vintage/textured)"},{bankPatch:"2-7",soundNameCategory:"Dark Ambient Pad",waveformOscType:"Square",filterFreq:"Low",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 1",delayReverb:"Reverb 4",notesDescription:"Dark Ambient Pad: (Warm deep swell)"},{bankPatch:"2-8",soundNameCategory:"Classic Unison Lead",waveformOscType:"Super Saw",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Classic Unison Lead: (Trance/Dance anthem)"},{bankPatch:"3-1",soundNameCategory:"Plucky Sine / Sub",waveformOscType:"Sine + Sub",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Fast",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Reverb 1",notesDescription:"Plucky Sine / Sub"},{bankPatch:"3-2",soundNameCategory:"Warm Analog Keys",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Warm Analog Keys: (Classic polyphonic)"},{bankPatch:"3-3",soundNameCategory:"Sustained Bright Brass",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Mid",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Reverb 2",notesDescription:"Sustained Bright Brass: (Synth horn emulation)"},{bankPatch:"3-4",soundNameCategory:"Slap Bass",waveformOscType:"Square",filterFreq:"Mid",resonance:"High",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Slap Bass: (Funk/percussive)"},{bankPatch:"3-5",soundNameCategory:"Slow Sweep Pad",waveformOscType:"Saw",filterFreq:"Low",resonance:"Mid",envMod:"High",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 3",notesDescription:"Slow Sweep Pad: (Filter sweep)"},{bankPatch:"3-6",soundNameCategory:"Chiptune Triangle Lead",waveformOscType:"Triangle",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 1",notesDescription:"Chiptune Triangle Lead"},{bankPatch:"3-7",soundNameCategory:"Glassy Digital Pad",waveformOscType:"PWM Square",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 1",delayReverb:"Reverb 4",notesDescription:"Glassy Digital Pad: (Bell-like texture)"},{bankPatch:"3-8",soundNameCategory:"Aggressive Sync Lead",waveformOscType:"Sync Saw",filterFreq:"High",resonance:"Mid",envMod:"Mid",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Aggressive Sync Lead: (Hard rock edge)"},{bankPatch:"4-1",soundNameCategory:"Metallic Bell Pluck",waveformOscType:"Cross-Mod",filterFreq:"High",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Mid",sustain:"Low",release:"Mid",chorus:"Off",delayReverb:"Reverb 3",notesDescription:"Metallic Bell Pluck: (FM character)"},{bankPatch:"4-2",soundNameCategory:"Velo-Sensitive Clav Keys",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Low",release:"Fast",chorus:"Off",delayReverb:"Reverb 1",notesDescription:"Velo-Sensitive Clav Keys"},{bankPatch:"4-3",soundNameCategory:"Warm Strings Pad",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"Off",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Warm Strings Pad: (Classic analog ensemble)"},{bankPatch:"4-4",soundNameCategory:"Drive Bass",waveformOscType:"Saw + Sub",filterFreq:"Low",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Drive Bass: (Slightly saturated feel)"},{bankPatch:"4-5",soundNameCategory:"Bright Swell Pad",waveformOscType:"Super Saw",filterFreq:"High",resonance:"Low",envMod:"High",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 2",delayReverb:"Reverb 4",notesDescription:"Bright Swell Pad: (Trance/Modern style)"},{bankPatch:"4-6",soundNameCategory:"Expressive Solo Lead",waveformOscType:"Saw",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Expressive Solo Lead: (Vibrato friendly)"},{bankPatch:"4-7",soundNameCategory:"Resonant Moving Texture",waveformOscType:"Saw",filterFreq:"Low",resonance:"High",envMod:"Slow LFO",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Off",delayReverb:"Reverb 3",notesDescription:"Resonant Moving Texture"},{bankPatch:"4-8",soundNameCategory:"Classic 90s Organ",waveformOscType:"Multi-Sine",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Chorus 1",delayReverb:"Reverb 1",notesDescription:"Classic 90s Organ: (Deep house style)"},{bankPatch:"5-1",soundNameCategory:"Damped Wood Block Pluck",waveformOscType:"Square",filterFreq:"Low",resonance:"Low",envMod:"Fast",attack:"Fast",decay:"Fast",sustain:"Off",release:"Fast",chorus:"Off",delayReverb:"Delay 1",notesDescription:"Damped Wood Block Pluck"},{bankPatch:"5-2",soundNameCategory:"Detuned Pop Piano Keys",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Mid",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Detuned Pop Piano Keys"},{bankPatch:"5-3",soundNameCategory:"Rich Warm Brass",waveformOscType:"Saw + Square",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Rich Warm Brass: (Polysynth brass)"},{bankPatch:"5-4",soundNameCategory:"Sub Punch Bass",waveformOscType:"Sine + Sub",filterFreq:"Low",resonance:"Low",envMod:"Fast",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Sub Punch Bass: (Hip Hop/RnB sub)"},{bankPatch:"5-5",soundNameCategory:"Airy Flute Pad",waveformOscType:"Triangle + Noise",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Reverb 4",notesDescription:"Airy Flute Pad: (Breath-like opening)"},{bankPatch:"5-6",soundNameCategory:"Glitchy S&H Lead",waveformOscType:"Square",filterFreq:"Mid",resonance:"Mid",envMod:"S&H LFO",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Glitchy S&H Lead"},{bankPatch:"5-7",soundNameCategory:"Deep Cosmic Swell",waveformOscType:"Saw",filterFreq:"Low",resonance:"Low",envMod:"Slow LFO",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 2",delayReverb:"Reverb 4",notesDescription:"Deep Cosmic Swell: (Sci-Fi soundtrack texture)"},{bankPatch:"5-8",soundNameCategory:"Hard Detuned Rave Stabs",waveformOscType:"Super Saw",filterFreq:"High",resonance:"Mid",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Hard Detuned Rave Stabs: (90s rave/techno)"},{bankPatch:"6-1",soundNameCategory:"Crisp Acoustic-Like Pluck",waveformOscType:"Short Saw",filterFreq:"High",resonance:"Low",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Off",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Crisp Acoustic-Like Pluck: (Guitar/Harp vibe)"},{bankPatch:"6-2",soundNameCategory:"Electric Rhodes Piano Keys",waveformOscType:"Sine + Triangle",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Mid",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Electric Rhodes Piano Keys"},{bankPatch:"6-3",soundNameCategory:"Mellow Warm Horns",waveformOscType:"Saw",filterFreq:"Low",resonance:"Low",envMod:"Mid",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 1",notesDescription:"Mellow Warm Horns"},{bankPatch:"6-4",soundNameCategory:"Clicky Attack Bass",waveformOscType:"Saw + Sub",filterFreq:"Low",resonance:"Low",envMod:"Fast",attack:"Fast",decay:"Fast",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Clicky Attack Bass: (Transient heavy)"},{bankPatch:"6-5",soundNameCategory:"Shimmering High Pad",waveformOscType:"Super Saw",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Slow",decay:"Max",sustain:"Max",release:"Max",chorus:"Chorus 2",delayReverb:"Reverb 4",notesDescription:"Shimmering High Pad: (Ethereal high end)"},{bankPatch:"6-6",soundNameCategory:"Searing Sync Lead",waveformOscType:"Sync Saw",filterFreq:"High",resonance:"Low",envMod:"High",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Searing Sync Lead"},{bankPatch:"6-7",soundNameCategory:"Warm Low End Drone",waveformOscType:"Square + Sub",filterFreq:"Low",resonance:"Low",envMod:"Off",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 1",delayReverb:"Reverb 3",notesDescription:"Warm Low End Drone"},{bankPatch:"6-8",soundNameCategory:"Hyper Pop Lead",waveformOscType:"Super Saw + Square",filterFreq:"High",resonance:"Mid",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 2",notesDescription:"Hyper Pop Lead: (Bright, modern cutting tone)"},{bankPatch:"7-1",soundNameCategory:"Percolating Modular Pluck",waveformOscType:"Square",filterFreq:"Low",resonance:"Mid",envMod:"High",attack:"Fast",decay:"Fast",sustain:"Off",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Percolating Modular Pluck: (Rhythmic sequence friendly)"},{bankPatch:"7-2",soundNameCategory:"FM Electric Piano Keys",waveformOscType:"Cross-Mod Sine",filterFreq:"High",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Max",sustain:"Mid",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"FM Electric Piano Keys: (DX7 style)"},{bankPatch:"7-3",soundNameCategory:"Stately Synth Brass",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"Mid",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Reverb 2",notesDescription:"Stately Synth Brass"},{bankPatch:"7-4",soundNameCategory:"Fuzz/Overdriven Bass",waveformOscType:"Sync Saw",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Fuzz/Overdriven Bass"},{bankPatch:"7-5",soundNameCategory:"Slow Vibrato Pad",waveformOscType:"Saw",filterFreq:"Mid",resonance:"Low",envMod:"Vibrato LFO",attack:"Slow",decay:"Max",sustain:"Max",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 3",notesDescription:"Slow Vibrato Pad: (Vintage tape warble feel)"},{bankPatch:"7-6",soundNameCategory:"Theremin-Like Whistle Lead",waveformOscType:"Sine",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Mid",decay:"Max",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Theremin-Like Whistle Lead: (Portamento friendly)"},{bankPatch:"7-7",soundNameCategory:"Warm Hollow Pad",waveformOscType:"Square",filterFreq:"Mid",resonance:"Low",envMod:"Off",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Chorus 1",delayReverb:"Reverb 4",notesDescription:"Warm Hollow Pad"},{bankPatch:"7-8",soundNameCategory:"Aggressive Saw Lead",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 1",notesDescription:"Aggressive Saw Lead"},{bankPatch:"8-1",soundNameCategory:"Lo-Fi Vinyl Crackle Pluck",waveformOscType:"Saw + Noise",filterFreq:"Low",resonance:"Low",envMod:"Mid",attack:"Fast",decay:"Fast",sustain:"Off",release:"Fast",chorus:"Off",delayReverb:"Reverb 1",notesDescription:"Lo-Fi Vinyl Crackle Pluck: (Grit texture)"},{bankPatch:"8-2",soundNameCategory:"Detuned Wurlitzer Keys",waveformOscType:"Square + Triangle",filterFreq:"Mid",resonance:"Low",envMod:"Low",attack:"Fast",decay:"Max",sustain:"Mid",release:"Mid",chorus:"Chorus 1",delayReverb:"Reverb 2",notesDescription:"Detuned Wurlitzer Keys"},{bankPatch:"8-3",soundNameCategory:"Bright Filter Sweep Brass",waveformOscType:"Super Saw",filterFreq:"Low",resonance:"Mid",envMod:"High",attack:"Mid",decay:"Mid",sustain:"Max",release:"Mid",chorus:"Off",delayReverb:"Reverb 2",notesDescription:"Bright Filter Sweep Brass"},{bankPatch:"8-4",soundNameCategory:"Gated Rhythmic Bass",waveformOscType:"Square",filterFreq:"Low",resonance:"Low",envMod:"Gated LFO",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Off",notesDescription:"Gated Rhythmic Bass"},{bankPatch:"8-5",soundNameCategory:"Bright Evolving String Pad",waveformOscType:"Unison Saw",filterFreq:"High",resonance:"Low",envMod:"Slow LFO",attack:"Slow",decay:"Max",sustain:"Max",release:"Max",chorus:"Chorus 2",delayReverb:"Reverb 3",notesDescription:"Bright Evolving String Pad"},{bankPatch:"8-6",soundNameCategory:"Soaring Square Lead",waveformOscType:"Square",filterFreq:"High",resonance:"Low",envMod:"Off",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Chorus 1",delayReverb:"Delay 2",notesDescription:"Soaring Square Lead"},{bankPatch:"8-7",soundNameCategory:"Deep Submerged Pad",waveformOscType:"Sine",filterFreq:"Low",resonance:"Low",envMod:"Off",attack:"Slow",decay:"Max",sustain:"Max",release:"Slow",chorus:"Off",delayReverb:"Reverb 4",notesDescription:"Deep Submerged Pad: (Underwater/muffled tone)"},{bankPatch:"8-8",soundNameCategory:"Aggressive Screamer Lead",waveformOscType:"Cross-Mod Saw",filterFreq:"High",resonance:"High",envMod:"High",attack:"Fast",decay:"Max",sustain:"Max",release:"Fast",chorus:"Off",delayReverb:"Delay 3",notesDescription:"Aggressive Screamer Lead: (Industrial/Noise style)"}];var je=Object.defineProperty,We=Object.getOwnPropertyDescriptor,W=(r,e,t,a)=>{for(var s=a>1?void 0:a?We(e,t):e,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(a?i(e,t,s):i(s))||s);return a&&s&&je(e,t,s),s};let O=class extends b{constructor(){super(...arguments),this.presets=[],this.selectedId="",this.isOpen=!1}render(){const r=this.presets.find(t=>(t.id||t.bankPatch)===this.selectedId),e=r?`${r.id||r.bankPatch} - ${r.name||r.soundNameCategory}`:"Select a Preset...";return A`
      <div class="drawer-header" @click=${()=>this.isOpen=!this.isOpen}>
        <div class="current-selection">
          <span class="id">☰</span> <span>${e}</span>
        </div>
        <div class="toggle-icon">${this.isOpen?"▲":"▼"}</div>
      </div>

      <div class="drawer-content ${this.isOpen?"open":""}">
        <ul>
          ${this.presets.map(t=>{const a=t.id||t.bankPatch,s=t.name||t.soundNameCategory;return A`
              <li class=${this.selectedId===a?"selected":""} @click=${()=>{this.isOpen=!1,this.dispatchEvent(new CustomEvent("preset-selected",{detail:t}))}}>
                <span class="id">${a}</span>
                <span class="name">${s}</span>
              </li>
            `})}
        </ul>
      </div>
    `}};O.styles=Z`
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
  `;W([U({type:Array})],O.prototype,"presets",2);W([U({type:String})],O.prototype,"selectedId",2);W([j()],O.prototype,"isOpen",2);O=W([ee("j6-preset-list")],O);var ze=Object.defineProperty,Ie=Object.getOwnPropertyDescriptor,we=(r,e,t,a)=>{for(var s=a>1?void 0:a?Ie(e,t):e,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(a?i(e,t,s):i(s))||s);return a&&s&&ze(e,t,s),s};let H=class extends b{constructor(){super(...arguments),this.preset=null}getEnvelopePath(){if(!this.preset)return"M 0 100 L 100 100";let r=this.preset.attack==="Fast"?10:this.preset.attack==="Mid"?40:80,e=this.preset.decay==="Fast"?r+20:r+50,t=this.preset.sustain==="Max"?10:this.preset.sustain==="Mid"?50:90,a=this.preset.release==="Fast"?e+20:e+70;return`M 10 100 L ${r} 10 L ${e} ${t} L ${a-20} ${t} L ${a} 100`}render(){return this.preset?A`
      <h2>[${this.preset.id}] ${this.preset.name}</h2>
      <p class="description">${this.preset.notes}</p>
      
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
    `:A`<p>Select a preset to see details</p>`}};H.styles=Z`
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
    .param-group p {
      margin: 0.5rem 0;
    }
  `;we([U({type:Object})],H.prototype,"preset",2);H=we([ee("j6-preset-detail")],H);var Ke=Object.defineProperty,Ve=Object.getOwnPropertyDescriptor,z=(r,e,t,a)=>{for(var s=a>1?void 0:a?Ve(e,t):e,o=r.length-1,i;o>=0;o--)(i=r[o])&&(s=(a?i(e,t,s):i(s))||s);return a&&s&&Ke(e,t,s),s};const ue=Ue.map(r=>({...r,id:r.bankPatch,name:r.soundNameCategory,notes:r.notesDescription||"",delayEffects:r.delayReverb}));let k=class extends b{constructor(){super(...arguments),this.searchSearch="",this.activeCategory="All",this.selectedPreset=ue[0]}get filteredPresets(){return ue.filter(r=>{const e=r.name.toLowerCase().includes(this.searchSearch.toLowerCase())||r.notes.toLowerCase().includes(this.searchSearch.toLowerCase()),t=this.activeCategory==="All"||r.category===this.activeCategory;return e&&t})}render(){return A`
      <header>
        <h1>Roland J-6 Preset Explorer</h1>
      </header>
      
      <div class="layout">
        <j6-preset-list 
          .presets=${this.filteredPresets}
          .selectedId=${this.selectedPreset.id}
          @preset-selected=${r=>this.selectedPreset=r.detail}>
        </j6-preset-list>

        <j6-preset-detail 
          .preset=${this.selectedPreset}>
        </j6-preset-detail>
      </div>
    `}};k.styles=Z`
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
    @media (min-width: 768px) {
      .layout {
        grid-template-columns: 400px 1fr;
      }
    }
  `;z([j()],k.prototype,"searchSearch",2);z([j()],k.prototype,"activeCategory",2);z([j()],k.prototype,"selectedPreset",2);k=z([ee("j6-app")],k);
