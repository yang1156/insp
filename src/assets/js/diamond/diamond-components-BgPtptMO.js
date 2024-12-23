(function(h){typeof define=="function"&&define.amd?define(h):h()})(function(){"use strict";var yt;function h(o,t,e,i){var s=arguments.length,r=s<3?t:i,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,t,e,i);else for(var l=o.length-1;l>=0;l--)(n=o[l])&&(r=(s<3?n(r):s>3?n(t,e,r):n(t,e))||r);return s>3&&r&&Object.defineProperty(t,e,r),r}typeof SuppressedError=="function"&&SuppressedError;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const D=globalThis,F=D.ShadowRoot&&(D.ShadyCSS===void 0||D.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,J=Symbol(),it=new WeakMap;let st=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==J)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(F&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=it.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&it.set(e,t))}return t}toString(){return this.cssText}};const gt=o=>new st(typeof o=="string"?o:o+"",void 0,J),K=(o,...t)=>{const e=o.length===1?o[0]:t.reduce((i,s,r)=>i+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+o[r+1],o[0]);return new st(e,o,J)},bt=(o,t)=>{if(F)o.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(const e of t){const i=document.createElement("style"),s=D.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=e.cssText,o.appendChild(i)}},ot=F?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return gt(e)})(o):o;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:At,defineProperty:wt,getOwnPropertyDescriptor:Et,getOwnPropertyNames:St,getOwnPropertySymbols:Ct,getPrototypeOf:Pt}=Object,y=globalThis,rt=y.trustedTypes,xt=rt?rt.emptyScript:"",G=y.reactiveElementPolyfillSupport,H=(o,t)=>o,L={toAttribute(o,t){switch(t){case Boolean:o=o?xt:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},Z=(o,t)=>!At(o,t),nt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:Z};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),y.litPropertyMetadata??(y.litPropertyMetadata=new WeakMap);class P extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=nt){if(e.state&&(e.attribute=!1),this._$Ei(),this.elementProperties.set(t,e),!e.noAccessor){const i=Symbol(),s=this.getPropertyDescriptor(t,i,e);s!==void 0&&wt(this.prototype,t,s)}}static getPropertyDescriptor(t,e,i){const{get:s,set:r}=Et(this.prototype,t)??{get(){return this[e]},set(n){this[e]=n}};return{get(){return s==null?void 0:s.call(this)},set(n){const l=s==null?void 0:s.call(this);r.call(this,n),this.requestUpdate(t,l,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??nt}static _$Ei(){if(this.hasOwnProperty(H("elementProperties")))return;const t=Pt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(H("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(H("properties"))){const e=this.properties,i=[...St(e),...Ct(e)];for(const s of i)this.createProperty(s,e[s])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[i,s]of e)this.elementProperties.set(i,s)}this._$Eh=new Map;for(const[e,i]of this.elementProperties){const s=this._$Eu(e,i);s!==void 0&&this._$Eh.set(s,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const s of i)e.unshift(ot(s))}else t!==void 0&&e.push(ot(t));return e}static _$Eu(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(e=>e(this))}addController(t){var e;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((e=t.hostConnected)==null||e.call(t))}removeController(t){var e;(e=this._$EO)==null||e.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const i of e.keys())this.hasOwnProperty(i)&&(t.set(i,this[i]),delete this[i]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return bt(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostConnected)==null?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(e=>{var i;return(i=e.hostDisconnected)==null?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EC(t,e){var r;const i=this.constructor.elementProperties.get(t),s=this.constructor._$Eu(t,i);if(s!==void 0&&i.reflect===!0){const n=(((r=i.converter)==null?void 0:r.toAttribute)!==void 0?i.converter:L).toAttribute(e,i.type);this._$Em=t,n==null?this.removeAttribute(s):this.setAttribute(s,n),this._$Em=null}}_$AK(t,e){var r;const i=this.constructor,s=i._$Eh.get(t);if(s!==void 0&&this._$Em!==s){const n=i.getPropertyOptions(s),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:L;this._$Em=s,this[s]=l.fromAttribute(e,n.type),this._$Em=null}}requestUpdate(t,e,i){if(t!==void 0){if(i??(i=this.constructor.getPropertyOptions(t)),!(i.hasChanged??Z)(this[t],e))return;this.P(t,e,i)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,e,i){this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var i;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[r,n]of s)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),(i=this._$EO)==null||i.forEach(s=>{var r;return(r=s.hostUpdate)==null?void 0:r.call(s)}),this.update(e)):this._$EU()}catch(s){throw t=!1,this._$EU(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){var e;(e=this._$EO)==null||e.forEach(i=>{var s;return(s=i.hostUpdated)==null?void 0:s.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(e=>this._$EC(e,this[e]))),this._$EU()}updated(t){}firstUpdated(t){}}P.elementStyles=[],P.shadowRootOptions={mode:"open"},P[H("elementProperties")]=new Map,P[H("finalized")]=new Map,G==null||G({ReactiveElement:P}),(y.reactiveElementVersions??(y.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const T=globalThis,k=T.trustedTypes,at=k?k.createPolicy("lit-html",{createHTML:o=>o}):void 0,lt="$lit$",g=`lit$${Math.random().toFixed(9).slice(2)}$`,ct="?"+g,Ot=`<${ct}>`,A=document,R=()=>A.createComment(""),M=o=>o===null||typeof o!="object"&&typeof o!="function",ht=Array.isArray,Ut=o=>ht(o)||typeof(o==null?void 0:o[Symbol.iterator])=="function",Q=`[ 	
\f\r]`,j=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,dt=/-->/g,pt=/>/g,w=RegExp(`>|${Q}(?:([^\\s"'>=/]+)(${Q}*=${Q}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ut=/'/g,ft=/"/g,mt=/^(?:script|style|textarea|title)$/i,Ht=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),_=Ht(1),x=Symbol.for("lit-noChange"),p=Symbol.for("lit-nothing"),_t=new WeakMap,E=A.createTreeWalker(A,129);function $t(o,t){if(!Array.isArray(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return at!==void 0?at.createHTML(t):t}const Tt=(o,t)=>{const e=o.length-1,i=[];let s,r=t===2?"<svg>":"",n=j;for(let l=0;l<e;l++){const a=o[l];let u,f,c=-1,v=0;for(;v<a.length&&(n.lastIndex=v,f=n.exec(a),f!==null);)v=n.lastIndex,n===j?f[1]==="!--"?n=dt:f[1]!==void 0?n=pt:f[2]!==void 0?(mt.test(f[2])&&(s=RegExp("</"+f[2],"g")),n=w):f[3]!==void 0&&(n=w):n===w?f[0]===">"?(n=s??j,c=-1):f[1]===void 0?c=-2:(c=n.lastIndex-f[2].length,u=f[1],n=f[3]===void 0?w:f[3]==='"'?ft:ut):n===ft||n===ut?n=w:n===dt||n===pt?n=j:(n=w,s=void 0);const b=n===w&&o[l+1].startsWith("/>")?" ":"";r+=n===j?a+Ot:c>=0?(i.push(u),a.slice(0,c)+lt+a.slice(c)+g+b):a+g+(c===-2?l:b)}return[$t(o,r+(o[e]||"<?>")+(t===2?"</svg>":"")),i]};class N{constructor({strings:t,_$litType$:e},i){let s;this.parts=[];let r=0,n=0;const l=t.length-1,a=this.parts,[u,f]=Tt(t,e);if(this.el=N.createElement(u,i),E.currentNode=this.el.content,e===2){const c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}for(;(s=E.nextNode())!==null&&a.length<l;){if(s.nodeType===1){if(s.hasAttributes())for(const c of s.getAttributeNames())if(c.endsWith(lt)){const v=f[n++],b=s.getAttribute(c).split(g),W=/([.?@])?(.*)/.exec(v);a.push({type:1,index:r,name:W[2],strings:b,ctor:W[1]==="."?Mt:W[1]==="?"?jt:W[1]==="@"?Nt:B}),s.removeAttribute(c)}else c.startsWith(g)&&(a.push({type:6,index:r}),s.removeAttribute(c));if(mt.test(s.tagName)){const c=s.textContent.split(g),v=c.length-1;if(v>0){s.textContent=k?k.emptyScript:"";for(let b=0;b<v;b++)s.append(c[b],R()),E.nextNode(),a.push({type:2,index:++r});s.append(c[v],R())}}}else if(s.nodeType===8)if(s.data===ct)a.push({type:2,index:r});else{let c=-1;for(;(c=s.data.indexOf(g,c+1))!==-1;)a.push({type:7,index:r}),c+=g.length-1}r++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function O(o,t,e=o,i){var n,l;if(t===x)return t;let s=i!==void 0?(n=e._$Co)==null?void 0:n[i]:e._$Cl;const r=M(t)?void 0:t._$litDirective$;return(s==null?void 0:s.constructor)!==r&&((l=s==null?void 0:s._$AO)==null||l.call(s,!1),r===void 0?s=void 0:(s=new r(o),s._$AT(o,e,i)),i!==void 0?(e._$Co??(e._$Co=[]))[i]=s:e._$Cl=s),s!==void 0&&(t=O(o,s._$AS(o,t.values),s,i)),t}class Rt{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:i}=this._$AD,s=((t==null?void 0:t.creationScope)??A).importNode(e,!0);E.currentNode=s;let r=E.nextNode(),n=0,l=0,a=i[0];for(;a!==void 0;){if(n===a.index){let u;a.type===2?u=new z(r,r.nextSibling,this,t):a.type===1?u=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(u=new zt(r,this,t)),this._$AV.push(u),a=i[++l]}n!==(a==null?void 0:a.index)&&(r=E.nextNode(),n++)}return E.currentNode=A,s}p(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class z{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,e,i,s){this.type=2,this._$AH=p,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=s,this._$Cv=(s==null?void 0:s.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=O(this,t,e),M(t)?t===p||t==null||t===""?(this._$AH!==p&&this._$AR(),this._$AH=p):t!==this._$AH&&t!==x&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):Ut(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==p&&M(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var r;const{values:e,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=N.createElement($t(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(e);else{const n=new Rt(s,this),l=n.u(this.options);n.p(e),this.T(l),this._$AH=n}}_$AC(t){let e=_t.get(t.strings);return e===void 0&&_t.set(t.strings,e=new N(t)),e}k(t){ht(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,s=0;for(const r of t)s===e.length?e.push(i=new z(this.S(R()),this.S(R()),this,this.options)):i=e[s],i._$AI(r),s++;s<e.length&&(this._$AR(i&&i._$AB.nextSibling,s),e.length=s)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)==null?void 0:i.call(this,!1,!0,e);t&&t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){var e;this._$AM===void 0&&(this._$Cv=t,(e=this._$AP)==null||e.call(this,t))}}class B{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,i,s,r){this.type=1,this._$AH=p,this._$AN=void 0,this.element=t,this.name=e,this._$AM=s,this.options=r,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=p}_$AI(t,e=this,i,s){const r=this.strings;let n=!1;if(r===void 0)t=O(this,t,e,0),n=!M(t)||t!==this._$AH&&t!==x,n&&(this._$AH=t);else{const l=t;let a,u;for(t=r[0],a=0;a<r.length-1;a++)u=O(this,l[i+a],e,a),u===x&&(u=this._$AH[a]),n||(n=!M(u)||u!==this._$AH[a]),u===p?t=p:t!==p&&(t+=(u??"")+r[a+1]),this._$AH[a]=u}n&&!s&&this.j(t)}j(t){t===p?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Mt extends B{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===p?void 0:t}}class jt extends B{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==p)}}class Nt extends B{constructor(t,e,i,s,r){super(t,e,i,s,r),this.type=5}_$AI(t,e=this){if((t=O(this,t,e,0)??p)===x)return;const i=this._$AH,s=t===p&&i!==p||t.capture!==i.capture||t.once!==i.once||t.passive!==i.passive,r=t!==p&&(i===p||s);s&&this.element.removeEventListener(this.name,this,i),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e;typeof this._$AH=="function"?this._$AH.call(((e=this.options)==null?void 0:e.host)??this.element,t):this._$AH.handleEvent(t)}}class zt{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){O(this,t)}}const X=T.litHtmlPolyfillSupport;X==null||X(N,z),(T.litHtmlVersions??(T.litHtmlVersions=[])).push("3.1.4");const It=(o,t,e)=>{const i=(e==null?void 0:e.renderBefore)??t;let s=i._$litPart$;if(s===void 0){const r=(e==null?void 0:e.renderBefore)??null;i._$litPart$=s=new z(t.insertBefore(R(),r),r,void 0,e??{})}return s._$AI(o),s};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class m extends P{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e;const t=super.createRenderRoot();return(e=this.renderOptions).renderBefore??(e.renderBefore=t.firstChild),t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=It(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return x}}m._$litElement$=!0,m.finalized=!0,(yt=globalThis.litElementHydrateSupport)==null||yt.call(globalThis,{LitElement:m});const Y=globalThis.litElementPolyfillSupport;Y==null||Y({LitElement:m}),(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const S=o=>(t,e)=>{e!==void 0?e.addInitializer(()=>{customElements.define(o,t)}):customElements.define(o,t)};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Dt={attribute:!0,type:String,converter:L,reflect:!1,hasChanged:Z},Lt=(o=Dt,t,e)=>{const{kind:i,metadata:s}=e;let r=globalThis.litPropertyMetadata.get(s);if(r===void 0&&globalThis.litPropertyMetadata.set(s,r=new Map),r.set(e.name,o),i==="accessor"){const{name:n}=e;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,o)},init(l){return l!==void 0&&this.P(n,void 0,o),l}}}if(i==="setter"){const{name:n}=e;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,o)}}throw Error("Unsupported decorator location: "+i)};function d(o){return(t,e)=>typeof e=="object"?Lt(o,t,e):((i,s,r)=>{const n=s.hasOwnProperty(r);return s.constructor.createProperty(r,n?{...i,wrapped:!0}:i),n?Object.getOwnPropertyDescriptor(s,r):void 0})(o,t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function kt(o){return d({...o,state:!0,attribute:!1})}let tt=class extends m{render(){return _`
      <div part="header">
        <slot name="header"></slot>
      </div>
      <div part="main">
        <slot></slot>
      </div>
      <div part="footer">
        <slot name="footer"></slot>
      </div>
    `}};h([d({reflect:!0})],tt.prototype,"header",void 0),tt=h([S("diamond-app")],tt);let C=class extends m{constructor(){super(...arguments),this.inView=!1}connectedCallback(){super.connectedCallback(),this.enterOnScroll&&(this.observer=new IntersectionObserver(t=>{t.forEach(e=>{var i;e.isIntersecting&&(this.inView=!0,(i=this.observer)===null||i===void 0||i.unobserve(this))})},{threshold:0}),this.observer.observe(this))}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this.observer)===null||t===void 0||t.disconnect()}render(){const t=this.inView||!this.enterOnScroll?this.type:"";return _`
      <style>
        :host {
          --diamond-transition-enter-delay: ${this.delay}s;
          --diamond-transition-enter-animation: ${t};
        }
      </style>
      <slot></slot>
    `}};h([kt()],C.prototype,"inView",void 0),h([d({reflect:!0})],C.prototype,"type",void 0),h([d({reflect:!0,attribute:"enter-on-scroll"})],C.prototype,"enterOnScroll",void 0),h([d({reflect:!0})],C.prototype,"delay",void 0),h([d({reflect:!0})],C.prototype,"fill",void 0),C=h([S("diamond-enter")],C);let $=class extends m{constructor(){super(...arguments),this.ariaHidden="true",this.aspectRatio="inherit",this.objectFit="fill",this.objectPosition="50% 50%"}render(){return _`
      <style>
        :host {
          --diamond-img-aspect-ratio: ${this.aspectRatio};
          --diamond-img-object-fit: ${this.objectFit};
          --diamond-img-object-position: ${this.objectPosition};
        }
      </style>
      <slot></slot>
    `}};h([d({reflect:!0,attribute:"aria-hidden"})],$.prototype,"ariaHidden",void 0),h([d({reflect:!0})],$.prototype,"block",void 0),h([d({reflect:!0})],$.prototype,"responsive",void 0),h([d({reflect:!0,attribute:"aspect-ratio"})],$.prototype,"aspectRatio",void 0),h([d({reflect:!0})],$.prototype,"radius",void 0),h([d({reflect:!0,attribute:"object-fit"})],$.prototype,"objectFit",void 0),h([d({reflect:!0,attribute:"object-position"})],$.prototype,"objectPosition",void 0),$=h([S("diamond-img")],$);let q=class extends m{render(){return _`
      <div class="diamond-collapse__content">
        <slot></slot>
      </div>
    `}};q.styles=[K`
      @keyframes diamond-collapse-overflow {
        0%,
        99% {
          overflow: hidden;
        }
        100% {
          overflow: visible;
        }
      }
      :host {
        content-visibility: hidden;
        display: grid;
        grid-template-rows: 0fr;
        overflow: hidden;
        transition:
          grid-template-rows var(--diamond-transition),
          content-visibility var(--diamond-transition),
          overflow var(--diamond-transition);
        transition-behavior: allow-discrete;
      }

      .diamond-collapse__content {
        overflow: hidden;
      }

      :host([open]:not([open='false'])) {
        animation: diamond-collapse-overflow var(--diamond-transition) forwards;
        content-visibility: visible;
        grid-template-rows: 1fr;
      }

      :host([open]:not([open='false'])) .diamond-collapse__content {
        animation: diamond-collapse-overflow var(--diamond-transition) forwards;
      }
    `],h([d({reflect:!0,type:Boolean})],q.prototype,"open",void 0),q=h([S("diamond-collapse")],q);var Bt=Object.defineProperty,qt=Object.getOwnPropertyDescriptor,Vt=(o,t,e,i)=>{for(var s=i>1?void 0:i?qt(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Bt(t,e,s),s};let et=class extends m{render(){return _`
      <footer class="footer">
        <hr />
        <div class="footer__content">
          <p class="footer__about">
            <slot name="about"></slot>
          </p>

          <p class="footer__contact">
            Get in touch to say <a href="mailto:hey@etch.co">hey@etch.co</a>
          </p>
          <p class="footer__copy">
            <slot name="copyright"></slot>
          </p>
        </div>
      </footer>
    `}};et.styles=K`
    :host {
      display: block;
    }

    a,
    ::slotted(a) {
      color: var(--diamond-theme-link-color);
    }

    .footer {
      padding: var(--diamond-spacing) var(--diamond-spacing)
        var(--diamond-spacing-fluid);

      hr {
        border: solid var(--color-gray-5);
        border-width: 1px 0 0;
        margin: auto;
        max-width: var(--diamond-wrap-xxl);
        width: 100%;
      }
    }

    .footer__content {
      display: grid;
      gap: var(--diamond-spacing-sm);
      grid-template-columns: 100%;
      grid-template-rows: auto;
      margin: var(--diamond-spacing) auto 0;
      max-width: var(--diamond-wrap-xxl);
    }

    .footer__about {
      font-weight: var(--diamond-font-weight-bold);
      margin: 0;
    }

    .footer__contact {
      margin: 0;
    }

    .footer__copy {
      font-size: var(--diamond-font-size-sm);
      margin: 0;
    }

    @media (min-width: 768px) {
      .footer {
        font-size: var(--diamond-font-size-sm);
      }

      .footer__content {
        grid-template-columns: auto 1fr auto;
        grid-template-rows: auto auto;
      }

      .footer__copy {
        grid-row: 2 / 3;
      }

      .footer__contact {
        grid-column: 3 / 4;
      }
    }
  `,et=Vt([S("etch-footer")],et);var Wt=Object.defineProperty,Ft=Object.getOwnPropertyDescriptor,vt=(o,t,e,i)=>{for(var s=i>1?void 0:i?Ft(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Wt(t,e,s),s};let V=class extends m{render(){return _`
      <dl class="meta-item">
        <dt class="meta-item__title">
          ${this.titleContent||_`<span>&nbsp;</span>`}
        </dt>
        <dd class="meta-item__content"><slot></slot></dd>
      </dl>
    `}};V.styles=K`
    .meta-item {
      margin: 0;
      padding: 0;
    }

    .meta-item__title {
      font-size: var(--diamond-font-size-sm);

      @media (width >= 768px) {
        display: block;
      }
    }

    .meta-item__content {
      font-weight: var(--diamond-font-weight-bold);
      margin: 0;
    }
  `,vt([d()],V.prototype,"titleContent",2),V=vt([S("etch-meta-item")],V);function Jt(o){return new Promise(t=>{if(document.querySelector(o))return t(document.querySelector(o));const e=new MutationObserver(()=>{document.querySelector(o)&&(e.disconnect(),t(document.querySelector(o)))});e.observe(document.body,{childList:!0,subtree:!0})})}var Kt=Object.defineProperty,Gt=Object.getOwnPropertyDescriptor,I=(o,t,e,i)=>{for(var s=i>1?void 0:i?Gt(t,e):t,r=o.length-1,n;r>=0;r--)(n=o[r])&&(s=(i?n(t,e,s):n(s))||s);return i&&s&&Kt(t,e,s),s};let U=class extends m{constructor(){super(),this.target="",this.headings=[],this.activeHeading="",this.observer=null,this.init=this.init.bind(this)}connectedCallback(){super.connectedCallback(),Jt(this.target).then(()=>{this.init()}),window.addEventListener("load",this.init)}disconnectedCallback(){var o;super.disconnectedCallback(),(o=this.observer)==null||o.disconnect()}init(){var i;const o=this.target||"article",t=(i=document.querySelector(o))==null?void 0:i.querySelectorAll("h2"),e=[...t||[]].map(s=>({id:s.id,text:s.textContent||"",level:s.tagName.toLowerCase()})).filter(s=>!!s.id);e!=null&&e.length&&(this.headings=e),this.observer=new IntersectionObserver(s=>{s.forEach(r=>{r.isIntersecting&&(this.activeHeading=r.target.id)})},{rootMargin:"0% 0% -50% 0%"}),t==null||t.forEach(s=>{var r;(r=this.observer)==null||r.observe(s)})}render(){const{headings:o,activeHeading:t}=this;return o.length?_`
      <ul part="list">
        ${o.map(e=>{let i="item";return t===e.id&&(i+=" active"),_`
            <li part=${i}>
              <a part="link" href=${`#${e.id}`}>${e.text}</a>
            </li>
          `})}
      </ul>
    `:_`<p>Just a little one, no headings found.</p>`}};I([d()],U.prototype,"target",2),I([d({attribute:!1})],U.prototype,"headings",2),I([d({attribute:!1})],U.prototype,"activeHeading",2),I([d({attribute:!1})],U.prototype,"observer",2),U=I([S("etch-table-of-contents")],U)});
