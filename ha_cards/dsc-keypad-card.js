(function () {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
        var e = new Error(message);
        return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };

    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const t$2=window,e$3=t$2.ShadowRoot&&(void 0===t$2.ShadyCSS||t$2.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,s$3=Symbol(),n$5=new WeakMap;class o$3{constructor(t,e,n){if(this._$cssResult$=!0,n!==s$3)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e;}get styleSheet(){let t=this.o;const s=this.t;if(e$3&&void 0===t){const e=void 0!==s&&1===s.length;e&&(t=n$5.get(s)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),e&&n$5.set(s,t));}return t}toString(){return this.cssText}}const r$2=t=>new o$3("string"==typeof t?t:t+"",void 0,s$3),i$2=(t,...e)=>{const n=1===t.length?t[0]:e.reduce(((e,s,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+t[n+1]),t[0]);return new o$3(n,t,s$3)},S$1=(s,n)=>{e$3?s.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((e=>{const n=document.createElement("style"),o=t$2.litNonce;void 0!==o&&n.setAttribute("nonce",o),n.textContent=e.cssText,s.appendChild(n);}));},c$1=e$3?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return r$2(e)})(t):t;

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var s$2;const e$2=window,r$1=e$2.trustedTypes,h$1=r$1?r$1.emptyScript:"",o$2=e$2.reactiveElementPolyfillSupport,n$4={toAttribute(t,i){switch(i){case Boolean:t=t?h$1:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t);}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t);}catch(t){s=null;}}return s}},a$1=(t,i)=>i!==t&&(i==i||t==t),l$2={attribute:!0,type:String,converter:n$4,reflect:!1,hasChanged:a$1},d$1="finalized";class u$1 extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu();}static addInitializer(t){var i;this.finalize(),(null!==(i=this.h)&&void 0!==i?i:this.h=[]).push(t);}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this._$Ep(s,i);void 0!==e&&(this._$Ev.set(e,s),t.push(e));})),t}static createProperty(t,i=l$2){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e);}}static getPropertyDescriptor(t,i,s){return {get(){return this[i]},set(e){const r=this[t];this[i]=e,this.requestUpdate(t,r,s);},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||l$2}static finalize(){if(this.hasOwnProperty(d$1))return !1;this[d$1]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s]);}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(i){const s=[];if(Array.isArray(i)){const e=new Set(i.flat(1/0).reverse());for(const i of e)s.unshift(c$1(i));}else void 0!==i&&s.push(c$1(i));return s}static _$Ep(t,i){const s=i.attribute;return !1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)));}addController(t){var i,s;(null!==(i=this._$ES)&&void 0!==i?i:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t));}removeController(t){var i;null===(i=this._$ES)||void 0===i||i.splice(this._$ES.indexOf(t)>>>0,1);}_$Eg(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i]);}));}createRenderRoot(){var t;const s=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return S$1(s,this.constructor.elementStyles),s}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)}));}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)}));}attributeChangedCallback(t,i,s){this._$AK(t,s);}_$EO(t,i,s=l$2){var e;const r=this.constructor._$Ep(t,s);if(void 0!==r&&!0===s.reflect){const h=(void 0!==(null===(e=s.converter)||void 0===e?void 0:e.toAttribute)?s.converter:n$4).toAttribute(i,s.type);this._$El=t,null==h?this.removeAttribute(r):this.setAttribute(r,h),this._$El=null;}}_$AK(t,i){var s;const e=this.constructor,r=e._$Ev.get(t);if(void 0!==r&&this._$El!==r){const t=e.getPropertyOptions(r),h="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(s=t.converter)||void 0===s?void 0:s.fromAttribute)?t.converter:n$4;this._$El=r,this[r]=h.fromAttribute(i,t.type),this._$El=null;}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||a$1)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),!0===s.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this._$E_=this._$Ej());}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_;}catch(t){Promise.reject(t);}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,i)=>this[i]=t)),this._$Ei=void 0);let i=!1;const s=this._$AL;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this._$Ek();}catch(t){throw i=!1,this._$Ek(),t}i&&this._$AE(s);}willUpdate(t){}_$AE(t){var i;null===(i=this._$ES)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t);}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1;}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return !0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek();}updated(t){}firstUpdated(t){}}u$1[d$1]=!0,u$1.elementProperties=new Map,u$1.elementStyles=[],u$1.shadowRootOptions={mode:"open"},null==o$2||o$2({ReactiveElement:u$1}),(null!==(s$2=e$2.reactiveElementVersions)&&void 0!==s$2?s$2:e$2.reactiveElementVersions=[]).push("1.6.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    var t$1;const i$1=window,s$1=i$1.trustedTypes,e$1=s$1?s$1.createPolicy("lit-html",{createHTML:t=>t}):void 0,o$1="$lit$",n$3=`lit$${(Math.random()+"").slice(9)}$`,l$1="?"+n$3,h=`<${l$1}>`,r=document,u=()=>r.createComment(""),d=t=>null===t||"object"!=typeof t&&"function"!=typeof t,c=Array.isArray,v=t=>c(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]),a="[ \t\n\f\r]",f=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,_=/-->/g,m=/>/g,p=RegExp(`>|${a}(?:([^\\s"'>=/]+)(${a}*=${a}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,"g"),g=/'/g,$=/"/g,y=/^(?:script|style|textarea|title)$/i,w=t=>(i,...s)=>({_$litType$:t,strings:i,values:s}),x=w(1),T=Symbol.for("lit-noChange"),A=Symbol.for("lit-nothing"),E=new WeakMap,C=r.createTreeWalker(r,129,null,!1);function P(t,i){if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return void 0!==e$1?e$1.createHTML(i):i}const V=(t,i)=>{const s=t.length-1,e=[];let l,r=2===i?"<svg>":"",u=f;for(let i=0;i<s;i++){const s=t[i];let d,c,v=-1,a=0;for(;a<s.length&&(u.lastIndex=a,c=u.exec(s),null!==c);)a=u.lastIndex,u===f?"!--"===c[1]?u=_:void 0!==c[1]?u=m:void 0!==c[2]?(y.test(c[2])&&(l=RegExp("</"+c[2],"g")),u=p):void 0!==c[3]&&(u=p):u===p?">"===c[0]?(u=null!=l?l:f,v=-1):void 0===c[1]?v=-2:(v=u.lastIndex-c[2].length,d=c[1],u=void 0===c[3]?p:'"'===c[3]?$:g):u===$||u===g?u=p:u===_||u===m?u=f:(u=p,l=void 0);const w=u===p&&t[i+1].startsWith("/>")?" ":"";r+=u===f?s+h:v>=0?(e.push(d),s.slice(0,v)+o$1+s.slice(v)+n$3+w):s+n$3+(-2===v?(e.push(void 0),i):w);}return [P(t,r+(t[s]||"<?>")+(2===i?"</svg>":"")),e]};class N{constructor({strings:t,_$litType$:i},e){let h;this.parts=[];let r=0,d=0;const c=t.length-1,v=this.parts,[a,f]=V(t,i);if(this.el=N.createElement(a,e),C.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes);}for(;null!==(h=C.nextNode())&&v.length<c;){if(1===h.nodeType){if(h.hasAttributes()){const t=[];for(const i of h.getAttributeNames())if(i.endsWith(o$1)||i.startsWith(n$3)){const s=f[d++];if(t.push(i),void 0!==s){const t=h.getAttribute(s.toLowerCase()+o$1).split(n$3),i=/([.?@])?(.*)/.exec(s);v.push({type:1,index:r,name:i[2],strings:t,ctor:"."===i[1]?H:"?"===i[1]?L:"@"===i[1]?z:k});}else v.push({type:6,index:r});}for(const i of t)h.removeAttribute(i);}if(y.test(h.tagName)){const t=h.textContent.split(n$3),i=t.length-1;if(i>0){h.textContent=s$1?s$1.emptyScript:"";for(let s=0;s<i;s++)h.append(t[s],u()),C.nextNode(),v.push({type:2,index:++r});h.append(t[i],u());}}}else if(8===h.nodeType)if(h.data===l$1)v.push({type:2,index:r});else {let t=-1;for(;-1!==(t=h.data.indexOf(n$3,t+1));)v.push({type:7,index:r}),t+=n$3.length-1;}r++;}}static createElement(t,i){const s=r.createElement("template");return s.innerHTML=t,s}}function S(t,i,s=t,e){var o,n,l,h;if(i===T)return i;let r=void 0!==e?null===(o=s._$Co)||void 0===o?void 0:o[e]:s._$Cl;const u=d(i)?void 0:i._$litDirective$;return (null==r?void 0:r.constructor)!==u&&(null===(n=null==r?void 0:r._$AO)||void 0===n||n.call(r,!1),void 0===u?r=void 0:(r=new u(t),r._$AT(t,s,e)),void 0!==e?(null!==(l=(h=s)._$Co)&&void 0!==l?l:h._$Co=[])[e]=r:s._$Cl=r),void 0!==r&&(i=S(t,r._$AS(t,i.values),r,e)),i}class M{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i;}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;const{el:{content:s},parts:e}=this._$AD,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:r).importNode(s,!0);C.currentNode=o;let n=C.nextNode(),l=0,h=0,u=e[0];for(;void 0!==u;){if(l===u.index){let i;2===u.type?i=new R(n,n.nextSibling,this,t):1===u.type?i=new u.ctor(n,u.name,u.strings,this,t):6===u.type&&(i=new Z(n,this,t)),this._$AV.push(i),u=e[++h];}l!==(null==u?void 0:u.index)&&(n=C.nextNode(),l++);}return C.currentNode=r,o}v(t){let i=0;for(const s of this._$AV)void 0!==s&&(void 0!==s.strings?(s._$AI(t,s,i),i+=s.strings.length-2):s._$AI(t[i])),i++;}}class R{constructor(t,i,s,e){var o;this.type=2,this._$AH=A,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=s,this.options=e,this._$Cp=null===(o=null==e?void 0:e.isConnected)||void 0===o||o;}get _$AU(){var t,i;return null!==(i=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==i?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const i=this._$AM;return void 0!==i&&11===(null==t?void 0:t.nodeType)&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=S(this,t,i),d(t)?t===A||null==t||""===t?(this._$AH!==A&&this._$AR(),this._$AH=A):t!==this._$AH&&t!==T&&this._(t):void 0!==t._$litType$?this.g(t):void 0!==t.nodeType?this.$(t):v(t)?this.T(t):this._(t);}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t));}_(t){this._$AH!==A&&d(this._$AH)?this._$AA.nextSibling.data=t:this.$(r.createTextNode(t)),this._$AH=t;}g(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this._$AC(t):(void 0===e.el&&(e.el=N.createElement(P(e.h,e.h[0]),this.options)),e);if((null===(i=this._$AH)||void 0===i?void 0:i._$AD)===o)this._$AH.v(s);else {const t=new M(o,this),i=t.u(this.options);t.v(s),this.$(i),this._$AH=t;}}_$AC(t){let i=E.get(t.strings);return void 0===i&&E.set(t.strings,i=new N(t)),i}T(t){c(this._$AH)||(this._$AH=[],this._$AR());const i=this._$AH;let s,e=0;for(const o of t)e===i.length?i.push(s=new R(this.k(u()),this.k(u()),this,this.options)):s=i[e],s._$AI(o),e++;e<i.length&&(this._$AR(s&&s._$AB.nextSibling,e),i.length=e);}_$AR(t=this._$AA.nextSibling,i){var s;for(null===(s=this._$AP)||void 0===s||s.call(this,!1,!0,i);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i;}}setConnected(t){var i;void 0===this._$AM&&(this._$Cp=t,null===(i=this._$AP)||void 0===i||i.call(this,t));}}class k{constructor(t,i,s,e,o){this.type=1,this._$AH=A,this._$AN=void 0,this.element=t,this.name=i,this._$AM=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=A;}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=S(this,t,i,0),n=!d(t)||t!==this._$AH&&t!==T,n&&(this._$AH=t);else {const e=t;let l,h;for(t=o[0],l=0;l<o.length-1;l++)h=S(this,e[s+l],i,l),h===T&&(h=this._$AH[l]),n||(n=!d(h)||h!==this._$AH[l]),h===A?t=A:t!==A&&(t+=(null!=h?h:"")+o[l+1]),this._$AH[l]=h;}n&&!e&&this.j(t);}j(t){t===A?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"");}}class H extends k{constructor(){super(...arguments),this.type=3;}j(t){this.element[this.name]=t===A?void 0:t;}}const I=s$1?s$1.emptyScript:"";class L extends k{constructor(){super(...arguments),this.type=4;}j(t){t&&t!==A?this.element.setAttribute(this.name,I):this.element.removeAttribute(this.name);}}class z extends k{constructor(t,i,s,e,o){super(t,i,s,e,o),this.type=5;}_$AI(t,i=this){var s;if((t=null!==(s=S(this,t,i,0))&&void 0!==s?s:A)===T)return;const e=this._$AH,o=t===A&&e!==A||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==A&&(e===A||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this._$AH=t;}handleEvent(t){var i,s;"function"==typeof this._$AH?this._$AH.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this._$AH.handleEvent(t);}}class Z{constructor(t,i,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=i,this.options=s;}get _$AU(){return this._$AM._$AU}_$AI(t){S(this,t);}}const B=i$1.litHtmlPolyfillSupport;null==B||B(N,R),(null!==(t$1=i$1.litHtmlVersions)&&void 0!==t$1?t$1:i$1.litHtmlVersions=[]).push("2.8.0");const D=(t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let l=n._$litPart$;if(void 0===l){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=l=new R(i.insertBefore(u(),t),t,void 0,null!=s?s:{});}return l._$AI(t),l};

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var l,o;class s extends u$1{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0;}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=D(i,this.renderRoot,this.renderOptions);}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0);}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1);}render(){return T}}s.finalized=!0,s._$litElement$=!0,null===(l=globalThis.litElementHydrateSupport)||void 0===l||l.call(globalThis,{LitElement:s});const n$2=globalThis.litElementPolyfillSupport;null==n$2||n$2({LitElement:s});(null!==(o=globalThis.litElementVersions)&&void 0!==o?o:globalThis.litElementVersions=[]).push("3.3.3");

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */
    const i=(i,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(n){n.createProperty(e.key,i);}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this));},finisher(n){n.createProperty(e.key,i);}},e=(i,e,n)=>{e.constructor.createProperty(n,i);};function n$1(n){return (t,o)=>void 0!==o?e(n,t,o):i(n,t)}

    /**
     * @license
     * Copyright 2017 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */function t(t){return n$1({...t,state:!0})}

    /**
     * @license
     * Copyright 2021 Google LLC
     * SPDX-License-Identifier: BSD-3-Clause
     */var n;null!=(null===(n=window.HTMLSlotElement)||void 0===n?void 0:n.prototype.assignedElements)?(o,n)=>o.assignedElements(n):(o,n)=>o.assignedNodes(n).filter((o=>o.nodeType===Node.ELEMENT_NODE));

    var styles = "ha-card[color-scheme=\"light\"]{--maingrpbgcolor:var(--maingrpbgcolorlight,var(--card-background-color));--containerbordercolor:var(--containerborderlight,var(--card-background-color));--btngrpbgcolor:var(--btngrpbgcolorlight,whitesmoke);--buttonbgcolor:var(--buttonbgcolorlight,#d9dcdf);--buttontextcolor:var(--buttontextcolorlight,var(--primary-text-color));--lcdbgcolor:var(--lcdbgcolorlight,#859c99);--lcdtextcolor:var(--lcdtextcolorlight,#222);--sensoroff:var(--sensorofflight,#ccc);--bordercolor:var(--bordercolorlight,#bbb);--hovercolor:var(--hovercolorlight,#c0c0c0);--activecolor:var(--activecolorlight,#d0d0d0);--focuscolor:var(--focuscolorlight,#c5c5c5);}ha-card[color-scheme=\"dark\"]{--maingrpbgcolor:var(--maingrpbgcolordark,var(--card-background-color));--btngrpbgcolor:var(--btngrpbgcolordark,var(--card-background-color));--containerbordercolor:var(--containerborderdark,var(--card-background-color));--buttonbgcolor:var(--buttonbgcolordark,#252525);--buttontextcolor:var(--buttontextcolordark,#03a9f4);--lcdbgcolor:var(--lcdbgcolordark,#859c99);--lcdtextcolor:var(--lcdtextcolordark,#222);--sensoroff:var(--sensoroffdark,#303030);--bordercolor:var(--bordercolordark,#333);--hovercolor:var(--hovercolordark,#444);--activecolor:var(--activecolordark,#555);--focuscolor:var(--focuscolordark,#454545);}:host{width:100%;--mdc-icon-size:16px;}ha-card{width:100%;position:relative;font-size:var(--base-unit);padding-bottom:16px;}h2{padding-left:16px;text-align:left;font-family:\"Arial\";}i.keypad-icon{font-family:'keypad_icons' !important;speak:none;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.icon-star:before{content:\"\\e905\";font-size:0.5rem;}.icon-ac:before{content:\"\\e90d\";font-size:0.8rem;}.icon-trouble:before{content:\"\\e90e\";font-size:0.8rem;}.icon-armed:before{content:\"\\e90f\";font-size:0.8rem;}.icon-check:before{content:\"\\e910\";font-size:0.8rem;}.icon-thief:before{content:\"\\e90b\";font-size:0.8rem;}.icon-alert:before{content:\"\\e90c\";font-size:0.8rem;}.icon-sleep:before{content:\"\\e90a\";font-size:0.8rem;}.icon-bypass:before{content:\"\\e909\";font-size:0.8rem;}.icon-programming:before{content:\"\\e908\";font-size:0.8rem;}.icon-flame:before{content:\"\\e907\";font-size:0.8rem;}.icon-info:before{content:\"\\e906\";font-size:0.8rem;}.icon-stay_away:before{content:\"\\e904\";}.icon-stay_empty:before{content:\"\\e903\";font-size:0.8rem;}.icon-bell:before{content:\"\\e900\";font-size:0.8rem;}.icon-refresh:before{content:\"\\e902\";font-size:0.8rem;}.icon-exit:before{content:\"\\e901\";font-size:0.8rem;}.flex-container{display:flex;justify-content:center;}.container{border:1px solid var(--containerbordercolor);border-radius:1em;padding:4px;background-color:var(--maingrpbgcolor);margin:5px;width:100%;max-width:350px;}.keypad_title{margin:auto;padding-bottom:5px;display:flex;justify-content:center}div.virtual_lcd{flex:1;font-family:\"Arial\";background-color:var(--lcdbgcolor);font-size:1.3rem;border-radius:8px;text-align:center;color:var(--lcdtextcolor);overflow:auto;margin:5px 0px 5px 5px;padding:5px;padding-top:10px;justify-content:center;border:1px solid var(--bordercolor);}div#first_line{height:1.5em;}div#second_line{height:1.5em;}div#lcd_container{margin:4px 4px 4px 4px;border:1px solid var(--bordercolor);padding:4px;background-color:var(--btngrpbgcolor);border-radius:10px;white-space:nowrap;display:flex;justify-content:center}button.keypad_button{border-radius:1.5rem;background-color:var(--buttonbgcolor);border:2px solid var(--bordercolor);color:var(--buttontextcolor);font-weight:bold;}button.keypad_button_pad{width:32%;font-weight:bold;font-size:0.8rem;background-color:var(--buttonbgcolor);border:2px solid var(--bordercolor);min-height:2.3rem;color:var(--buttontextcolor);line-height:1;}button.keypad_button_small{font-weight:bold;font-size:0.8rem;min-height:1.8rem;width:2.2rem;line-height:1;background-color:var(--buttonbgcolor);border:2px solid var(--bordercolor);margin-top:0.1rem;margin-bottom:0.3rem;}button.keypad_button_slim{width:100%;line-height:1;font-weight:bold;min-height:1.5rem;background-color:var(--buttonbgcolor);border:2px solid var(--bordercolor);margin-top:.7rem;}.keypad_cmd_text{font-size:.6vw;font-style:italic;margin-top:1px;font-weight:bold;}button.keypad_button_control{background-color:var(--buttonbgcolor);line-height:0.4;width:100%;margin:auto;padding-bottom:6px;}div.keypad_button_row{margin:6px;text-align:center;white-space:nowrap;}div.status_icons{text-align:center;margin:0px 0px 0px 4px;flex:0;color:grey;}div.status_icons i{display:block;margin:4px;}div#left_buttons,div#right_buttons,div#keypad_container{margin:3px;border:1px solid var(--bordercolor);border-radius:8px;background-color:var(--btngrpbgcolor);}div#left_buttons{}div#keypad_container{display:flex;flex-direction:column;width:60%;}div#right_buttons{}div#buttons_area{display:flex;justify-content:center;}.btn{&:hover{background-color:var(--hovercolor);color:var(--buttontextcolor);}&:focus{background-color:var(--focuscolor);color:var(--buttontextcolor);}&:active{background-color:var(--activecolor);color:var(--buttontextcolor);}}.btn{display:inline-block;font-weight:400;text-align:center;white-space:nowrap;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;padding:0.375rem 0.75rem;font-size:1rem;line-height:1.5;border-radius:0.25rem;transition:lscolor 0.15s ease-in-out,background-color 0.15s ease-in-out,border-color 0.15s ease-in-out,box-shadow 0.15s ease-in-out;}.btn:hover,.btn:focus{text-decoration:none;}.btn:focus,.btn.focus{}.btn.disabled,.btn:disabled{opacity:0.65;}.btn:not(:disabled):not(.disabled){cursor:pointer;}a.btn.disabled,fieldset:disabled a.btn{pointer-events:none;}.btn-outline-dark:focus,.btn-outline-dark.focus{}.btn-outline-dark.disabled,.btn-outline-dark:disabled{background-color:transparent;}.btn-outline-dark:not(:disabled):not(.disabled):active:focus,.btn-outline-dark:not(:disabled):not(.disabled).active:focus,.show>.btn-outline-dark.dropdown-toggle:focus{box-shadow:0 0 0 0.2rem rgba(52,58,64,0.5);}";

    var icons = i$2 `
@font-face {
  /* Font data below from example project at: https://github.com/taligentx/dscKeybusInterface/tree/master/examples/esp32/VirtualKeypad-Web/data/fonts/ */
  font-family: 'keypad_icons';
    src: url(data:font/woff;charset=utf-8;base64,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Ih8IBAkEBQQECQQEBQQIBQMFBAQEBQQECAQJBAgECAgEAwQEBAQEAwQICAQDBAMIBAMDBA4DBAMEAwQDAwcDCQMDAwMJAwMDAwIDAwMSAgMCAwIFAgICAgICAwYBAgICAgEEAgECAwIBAgEBAQIBAQIBAgEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgEBAgEHAgIBAgIBAgICAgIBAgIGAwEDAgIDAgICAwIDAgMCCAMDAgMDAwMOAwMDAwQGAwMDBwQDAwMHBAQKAwQDDAcEAwQEBAMEBAQEBAQEAwQEBQQICAQIBAgEBQQECAUEBAQEBQQEBAUEBBEFBAQJCAUFBAQEEgkHBwYHBwYGBwYGBgUGBgULBAUEBAMDAwIDAgEBAQEBAQECAgIGAwQEBQUFBQYFBgUMBgcGBwcHBggHCAcHBwcGBwYGDAUGBQYFBQUFBAMEAwIDAgECAQECAQICAgMDAwQEBAUFCgYFBgYGBgYGBwcGBwi5AU8CBQgICAgICAH+bQURCAkICAYBAQECCAgICQkGA78BAgEBAQEBAQEBAQEBAQQBAQEBAgECAQECAgEEAQICAgMCAgIKAgIFAgICAwIDAgMPAwMDAgMDCQIDBgMEAgcDBAMDAwQDAwQDBAMDBwQEAwQDBAQDBAQEAxcEBAQEBAMEBAQEBQQEBAQEBAgFBAMFBAQFBAQEBQMFBAQFBAQFBAQECQUEBAQFBAUEBAQFDQQFBAQECQQFBAUEBAQFBAQFBAQFCAQFAwUEBAQEBQQEBQQIBAQECAQEBQMIBAQEBAQDBAQEBAQEAwcEBAQDBAcEAwMDBQMDBAYEAwMDBAMDAwMEAgQFBAYCAwYCAwMCAwMCAwMEAwIDAgIDBAICAgMCAgEEAgICAwIDAgIDAgEBAQMCAQIBAQEBAQEBAQIBAQEDAQEBAQEBAQEBAQEBAQECAQEBAQEBAgEBAwEEAQMCAwQCAgECAgICAgIEBQICAgMEAwICAwsCAwMCAwMDAgYECAQCAwMKAwMEAwMEAwMZBAMEAwQHBAQDBAQEBAsEBAQEBAMJBAMFCAQEBQMEBAQFBAUEAwUEBAUEBAQFBAQEBAUEBAQFBAUEBAUEBQQECQMEBQQJBAUEBAQFBAUEBAUEBQQEBAQFBAQEBQQEBAQFBAQFBAQEBBUEAwUEAwUEAwUD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) format('woff');
  font-weight: normal;
  font-style: normal;
}
`;

    class KeypadAlarmCard extends s {
        constructor() {
            super(...arguments);
            this._line1 = "";
            this._line2 = "";
            this._readyStyle = "color: var(--sensoroff);";
            this._armedStyle = "color: var(--sensoroff);";
            this._chimeStyle = "color: var(--sensoroff);";
            this._troubleStyle = "color: var(--sensoroff);";
            this._acStyle = "color: var(--sensoroff);";
            this._title = "";
            this._cmd_stay = "";
            this._cmd_away = "";
            this._cmd_chime = "";
            this._cmd_reset = "";
            this._cmd_exit = "";
            this._cmd_fire = "";
            this._cmd_alert = "";
            this._cmd_panic = "";
            this._scale = "1";
            this._cmd_A = ""; //cmds to send
            this._cmd_B = "";
            this._cmd_C = "";
            this._cmd_D = "";
            this._text_0 = "";
            this._text_1 = "";
            this._text_2 = "";
            this._text_3 = "";
            this._text_4 = "";
            this._text_5 = "";
            this._text_6 = "";
            this._text_7 = "";
            this._text_8 = "";
            this._text_9 = "";
            this._text_star = "";
            this._text_pound = "";
            this._key_0 = "";
            this._key_1 = "";
            this._key_2 = "";
            this._key_3 = "";
            this._key_4 = "";
            this._key_5 = "";
            this._key_6 = "";
            this._key_7 = "";
            this._key_8 = "";
            this._key_9 = "";
            this._key_star = "";
            this._key_pound = "";
            this._key_left = "";
            this._key_right = "";
            this._partition = "";
            this._vibrate = 5;
            this._partitions = 1;
            this._current_partition = 1;
            this._vibration_duration = 5;
            this._scheme = "light";
            this._kpdservicetype = "";
            this._kpdservice = "";
        }
        /**
         * CSS for the card
         */
        static get styles() {
            return i$2([styles]);
        }
        /**
         * Called on every hass update
         */
        set hass(hass) {
            this._hass = hass;
            // const x =hass.services.esphome["dscalarm_alarm_keypress_partition"].fields ;
            //console.log(x);
            this._scheme = hass.themes.darkMode ? "dark" : "light";
            this._kpdline1 = this._hass.states[this._config.disp_line1];
            this._kpdline2 = this._hass.states[this._config.disp_line2];
            this._kpdbeep = this._hass.states[this._config.beep];
            this._sensor_ready = this._hass.states[this._config.sensor_ready];
            this._sensor_armed = this._hass.states[this._config.sensor_armed];
            this._sensor_chime = this._hass.states[this._config.sensor_chime];
            this._sensor_trouble = this._hass.states[this._config.sensor_trouble];
            this._sensor_ac = this._hass.states[this._config.sensor_ac];
            this._readyStyle = (this._sensor_ready && this._sensor_ready.state == "on") ? "color: green;" : "color: var(--sensoroff);";
            this._acStyle = (this._sensor_ac && this._sensor_ac.state == "on") ? "color: green;" : "color: var(--sensoroff);";
            this._troubleStyle = (this._sensor_trouble && this._sensor_trouble.state == "on") ? "color: orange;" : "color: var(--sensoroff);";
            this._armedStyle = (this._sensor_armed && this._sensor_armed.state == "on") ? "color: red;" : "color: var(--sensoroff);";
            this._chimeStyle = (this._sensor_chime && this._sensor_chime.state == "on") ? "color: green;" : "color: var(--sensoroff);";
        }
        updated(changedProperties) {
            if (changedProperties.has("_kpdline1") || changedProperties.has("_kpdline2")) {
                this.displayChanged();
            }
            if (changedProperties.has("_kpdbeep")) {
                this.beepChanged();
            }
        }
        displayChanged() {
            let state1 = "";
            let state2 = "";
            for (let i = 0; i < this._kpdline1.state.length; i++)
                state1 += this._translateChar(this._kpdline1.state[i]);
            for (let i = 0; i < this._kpdline2.state.length; i++)
                state2 += this._translateChar(this._kpdline2.state[i]);
            this._line1 = state1;
            this._line2 = state2;
        }
        beepChanged() {
            // if (this._kpdbeep === undefined) return;
            if (this._kpdbeep.state == null || this._kpdbeep.state == "0") {
                var promise = this.shadowRoot.getElementById("exitsound1").pause();
                this.shadowRoot.getElementById("exitsound2").pause();
                this.shadowRoot.getElementById("chime").pause();
            }
            else if (this._kpdbeep.state == "1") {
                var promise = this.shadowRoot.getElementById("exitsound1").play();
            }
            else if (this._kpdbeep.state == "2") {
                var promise = this.shadowRoot.getElementById("exitsound2").play();
            }
            else if (this._kpdbeep.state > 2) {
                var promise = this.shadowRoot.getElementById("chime").play();
            }
            if (promise !== undefined) {
                promise.then(_ => {
                    // Autoplay started!
                }).catch(error => {
                    console.warn('Sound auto play not enabled, check browser settings');
                });
            }
        }
        _translateChar(c) {
            // if (c.match('à') !== null ) return '<span class="blink">' + c + '</span>';
            // if (c.match('á') !== null ) return '<span class="under">' + c + '</span>';
            if (c.match('è') !== null)
                return 'e';
            if (c.match('é') !== null)
                return 'e';
            return c;
        }
        /**
         * Called every time when entity config is updated
         * @param config Card configuration (yaml converted to JSON)
         */
        setConfig(config) {
            if (!config.disp_line1)
                throw new Error('You need to define disp_line1');
            if (!config.disp_line2)
                throw new Error('You need to define disp_line2');
            if (!config.service_type)
                throw new Error('You need to define service_type');
            if (!config.service)
                throw new Error('You need to define service');
            if (!config.sensor_ready)
                throw new Error('You need to define sensor_ready');
            if (!config.sensor_armed)
                throw new Error('You need to define sensor_armed');
            if (!config.sensor_trouble)
                throw new Error('You need to define sensor_trouble');
            if (!config.sensor_ac)
                throw new Error('You need to define sensor_ac');
            this._config = config;
            this._title = config.title;
            this._kpdservicetype = config.service_type;
            this._kpdservice = config.service;
            this._scale = config.scale != null ? config.scale : "1";
            this._cmd_stay = config.cmd_stay != null ? config.cmd_stay : "S";
            this._cmd_away = config.cmd_away != null ? config.cmd_away : "W";
            this._cmd_chime = config.cmd_chime != null ? config.cmd_chime : "";
            this._cmd_reset = config.cmd_reset != null ? config.cmd_reset : "R";
            this._cmd_exit = config.cmd_exit != null ? config.cmd_exit : "X";
            this._cmd_fire = config.cmd_fire != null ? config.cmd_fire : "F";
            this._cmd_alert = config.cmd_alert != null ? config.cmd_alert : "A";
            this._cmd_panic = config.cmd_panic != null ? config.cmd_panic : "P";
            this._key_left = (config.key_left != null) ? config.key_left : "&lt;";
            this._key_right = (config.key_right != null) ? config.key_right : "&gt;";
            this._partition = (config.partition != null) ? config.partition : "";
            this._key_0 = (config.key_0 != null) ? config.key_0 : "0";
            this._key_1 = (config.key_1 != null) ? config.key_1 : "`";
            this._key_2 = (config.key_2 != null) ? config.key_2 : "1";
            this._key_3 = (config.key_3 != null) ? config.key_3 : "3";
            this._key_4 = (config.key_4 != null) ? config.key_4 : "3";
            this._key_5 = (config.key_5 != null) ? config.key_5 : "5";
            this._key_6 = (config.key_6 != null) ? config.key_6 : "6";
            this._key_7 = (config.key_7 != null) ? config.key_7 : "7";
            this._key_8 = (config.key_8 != null) ? config.key_8 : "8";
            this._key_9 = (config.key_9 != null) ? config.key_9 : "9";
            this._key_star = (config.key_star != null) ? config.key_star : "*";
            this._key_pound = (config.key_pound != null) ? config.key_pound : "#";
            this._text_0 = (config.text_0 != null) ? config.text_0 : "&nbsp;";
            this._text_1 = (config.text_1 != null) ? config.text_1 : "BYPASS";
            this._text_2 = (config.text_2 != null) ? config.text_2 : "SERV";
            this._text_3 = (config.text_3 != null) ? config.text_3 : "ALARMS";
            this._text_4 = (config.text_4 != null) ? config.text_4 : "CHIME";
            this._text_5 = (config.text_5 != null) ? config.text_5 : "CODES";
            this._text_6 = (config.text_6 != null) ? config.text_6 : "FUNC";
            this._text_7 = (config.text_7 != null) ? config.text_7 : "OUTP";
            this._text_8 = (config.text_8 != null) ? config.text_8 : "PROG";
            this._text_9 = (config.text_9 != null) ? config.text_9 : "NIGHT";
            this._text_star = (config.text_star != null) ? config.text_star : "SELECT";
            this._text_pound = (config.text_pound != null) ? config.text_pound : "ENTER";
            this._vibrate = (config.vibration_duration != null) ? config.vibration_duration : 5;
            this._style = config.style != null ? config.style : "";
            for (let i in this._style) {
                if (this._style[i] == null)
                    continue;
                var v = this._style[i].replace(/;/gi, '');
                // console.log(i,v);
                this.style.setProperty(i, v);
            }
            if (this._hass) {
                this.hass = this._hass;
            }
        }
        _applyStylesToRoot() {
            //  const sheet = (icons as CSSResult).styleSheet ?? icons as CSSStyleSheet;
            const sheet = icons.styleSheet;
            if (!document.adoptedStyleSheets.includes(sheet)) {
                document.adoptedStyleSheets.push(sheet);
            }
        }
        createRenderRoot() {
            this._applyStylesToRoot();
            return super.createRenderRoot();
        }
        confirmState(e) {
            var key = e.currentTarget.getAttribute('state');
            let msg = "";
            switch (key) {
                case 'a':
                    msg = "Alert";
                    break;
                case 'f':
                    msg = "Fire";
                    break;
                case 'p':
                    msg = "Panic";
                    break;
            }
            if (confirm("Are you sure you want to trigger the " + msg + " command") == true)
                this.setState(e);
        }
        _isObject(obj) {
            return obj === Object(obj);
        }
        setState(e) {
            var key = e.currentTarget.getAttribute('state');
            if (key == null || key == "")
                return;
            switch (key) {
                case 's':
                    key = this._cmd_stay;
                    break;
                case 'w':
                    key = this._cmd_away;
                    break;
                case 'r':
                    key = this._cmd_reset;
                    break;
                case 'x':
                    key = this._cmd_exit;
                    break;
                case 'c':
                    key = this._cmd_chime;
                    break;
                case 'a':
                    key = this._cmd_alert;
                    break;
                case 'f':
                    key = this._cmd_fire;
                    break;
                case 'p':
                    key = this._cmd_panic;
                    break;
                case '0':
                    key = this._key_0;
                    break;
                case '1':
                    key = this._key_1;
                    break;
                case '2':
                    key = this._key_2;
                    break;
                case '3':
                    key = this._key_3;
                    break;
                case '4':
                    key = this._key_4;
                    break;
                case '5':
                    key = this._key_5;
                    break;
                case '6':
                    key = this._key_6;
                    break;
                case '7':
                    key = this._key_7;
                    break;
                case '8':
                    key = this._key_8;
                    break;
                case '9':
                    key = this._key_9;
                    break;
                case '*':
                    key = this._key_star;
                    break;
                case '#':
                    key = this._key_pound;
                    break;
                case '>':
                    key = this._key_right;
                    break;
                case '<':
                    key = this._key_left;
                    break;
                default: return;
            }
            if ('vibrate' in navigator && this._vibrate > 0) {
                navigator.vibrate(this._vibrate);
            }
            if (!this._isObject(key)) {
                if (this._partition != "")
                    key = { 'keys': key, 'partition': this._partition };
                else
                    key = { 'keys': key };
            }
            if (this._kpdservicetype.toLowerCase() == "mqtt") {
                let data = { 'topic': this._kpdservice, 'payload': JSON.stringify(key) };
                this._hass.callService(this._kpdservicetype, "publish", data);
            }
            else if (this._kpdservicetype.toLowerCase() == "esphome") {
                this._hass.callService(this._kpdservicetype, this._kpdservice, key);
            }
        }
        _translateChar(c) {
            // if (c.match('à') !== null ) return '<span class="blink">' + c + '</span>';
            // if (c.match('á') !== null ) return '<span class="under">' + c + '</span>';
            if (c.match('è') !== null)
                return '░';
            if (c.match('é') !== null)
                return '▓';
            return c;
        }
        //  static getConfigElement() {
        //    return document.createElement("dsc-alarm-card-editor");
        //  }
        static getStubConfig(hass, entities) {
            //const entity = entities.find(item => item.includes('rdy_1')) || '';
            //console.log(entity);
            return {
                title: "DSC Alarm",
                partition: "1",
                service_type: "esphome",
                service: "<nodename>_alarm_keypress_partition",
                disp_line1: "sensor.<nodename>_ln1_1",
                disp_line2: "sensor.<nodename>_ln2_1",
                sensor_ready: "binary_sensor.<nodename>_rdy_1",
                sensor_armed: "binary_sensor.<nodename>_arm_1",
                sensor_trouble: "binary_sensor.<nodename>_tr",
                sensor_ac: "binary_sensor.<nodename>_ac",
                beep: "sensor.<nodename>_bp_1",
                text_1: "BYPASS",
                text_2: "SERV",
                text_3: "ALARMS",
                text_4: "CHIME",
                text_5: "CODES",
                text_6: "FUNC",
                text_7: "OUTP",
                text_8: "PROG",
                text_9: "NIGHT",
                text_star: "SELECT",
                text_pound: "ENTER",
                /*
                style: {
                    "--buttonbgcolordark": "#252525",
                    "--buttontextcolordark": "#03a9f4",
                    "--lcdbgcolordark": "#748C74",
                    "--lcdtextcolordark": "#000",
                    "--sensoroffdark": "#303030",
                    "--bordercolordark": "#333",
                    "--hovercolordark": "#444",
                    "--activecolordark": "#555",
                    "--focuscolordark": "#454545",
                    "--btngrpbgcolorlight":  "whitesmoke",
                    "--buttonbgcolorlight": "#d9dcdf",
                    "--buttontextcolorlight": "#000",
                    "--lcdbgcolorlight": "#748C74",
                    "--lcdtextcolorlight": "#000",
                    "--sensorofflight": "#ccc",
                    "--bordercolorlight": "#bbb",
                    "--hovercolorlight": "#c0c0c0",
                    "--activecolorlight": "#d0d0d0",
                    "--focuscolorlight": "#c5c5c5"
                    }
                */
            };
        }
        /**
         * Renders the card when the update is requested (when any of the properties are changed)
         */
        render() {
            return x `
      <ha-card  header="${this._title}" color-scheme="${this._scheme}" style="--scale: ${this._scale};" >
<div class="flex-container">
  <div class="container"  >
          
      <div id="lcd_container">
        <div class="virtual_lcd">
          <div id="first_line">${this._line1}</div>
          <div id="second_line">${this._line2}</div>
        </div>
        <div class="status_icons">
          <i class="keypad-icon icon-check" id="ready_icon" title="Ready" style="${this._readyStyle}"></i>
          <i class="keypad-icon icon-armed" id="armed_icon" title="Armed" style="${this._armedStyle}"></i>
          ${this._sensor_chime ? x `
          <i class="keypad-icon icon-bell" id="chime_icon" title="Chime" style="${this._chimeStyle}"></i>  
          ` : ''}        
          <i class="keypad-icon icon-trouble" id="trouble_icon" title="System Trouble" style="${this._troubleStyle}"></i>
          <i class="keypad-icon icon-ac" id="ac_icon" title="AC Power" style="${this._acStyle}"></i>
        </div>
      </div> <!-- lcd -->


      <div id="buttons_area">

        <div id="left_buttons">
 
          <div class="keypad_button_row">
            <button type="button" id="btn_<" class="btn btn-outline-dark keypad_button keypad_button_small" state="<"  @click="${this.setState}" title="<">&lt;</button>
            <button type="button" id="btn_>" class="btn btn-outline-dark keypad_button keypad_button_small" state=">"  @click="${this.setState}" title=">">&gt;</i></button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_f" class="btn btn-outline-dark keypad_button keypad_button_slim" state="f"  @click="${this.confirmState}" title="Fire">
          <i class="keypad-icon icon-flame" ></i>
          </button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_a" class="btn btn-outline-dark keypad_button keypad_button_slim" state="a"  @click="${this.confirmState}" title="Alert">
            <i class="keypad-icon icon-alert" ></i>
          </button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_p" class="btn btn-outline-dark keypad_button keypad_button_slim" state="p"  @click="${this.confirmState}" title="Panic">
            <i class="keypad-icon icon-thief" ></i>
          </button>
           </div>
       </div> <!-- left buttons -->

        <div id="keypad_container">
          <div class="keypad_button_row">
            <button type="button" id="btn_1" class="btn btn-outline-dark keypad_button keypad_button_pad" state="1"  @click="${this.setState}" title="1">1<div class="keypad_cmd_text">${this._text_1}</div></button>
            <button type="button" id="btn_2" class="btn btn-outline-dark keypad_button keypad_button_pad" state="2"  @click="${this.setState}" title="2">2<div class="keypad_cmd_text">${this._text_2}</div></button>
            <button type="button" id="btn_3" class="btn btn-outline-dark keypad_button keypad_button_pad" state="3"  @click="${this.setState}" title="3">3<div class="keypad_cmd_text">${this._text_3}</div></button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_4" class="btn btn-outline-dark keypad_button keypad_button_pad" state="4"  @click="${this.setState}" title="4">4<div class="keypad_cmd_text">${this._text_4}</div></button>
            <button type="button" id="btn_5" class="btn btn-outline-dark keypad_button keypad_button_pad" state="5"  @click="${this.setState}" title="5">5<div class="keypad_cmd_text">${this._text_5}</div></button>
            <button type="button" id="btn_6" class="btn btn-outline-dark keypad_button keypad_button_pad" state="6"  @click="${this.setState}" title="6">6<div class="keypad_cmd_text">${this._text_6}</div></button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_7" class="btn btn-outline-dark keypad_button keypad_button_pad" state="7"  @click="${this.setState}" title="7">7<div class="keypad_cmd_text">${this._text_7}</div></button>
            <button type="button" id="btn_8" class="btn btn-outline-dark keypad_button keypad_button_pad" state="8"  @click="${this.setState}" title="8">8<div class="keypad_cmd_text">${this._text_8}</div></button>
            <button type="button" id="btn_9" class="btn btn-outline-dark keypad_button keypad_button_pad" state="9"  @click="${this.setState}" title="9">9<div class="keypad_cmd_text">${this._text_9}</div></button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_*" class="btn btn-outline-dark keypad_button keypad_button_pad" state="*"  @click="${this.setState}" title="*"><i class="keypad-icon icon-star"></i><div class="keypad_cmd_text">${this._text_star}</div></button>
            <button type="button" id="btn_0" class="btn btn-outline-dark keypad_button keypad_button_pad" state="0"  @click="${this.setState}" title="0">0<div class="keypad_cmd_text">${this._text_0}</div></button>
            <button type="button" id="btn_#" class="btn btn-outline-dark keypad_button keypad_button_pad"  state="#"  @click="${this.setState}" title="#">#<div class="keypad_cmd_text">${this._text_pound}</div></button>
          </div>
        </div> <!-- keypad -->


        <div id="right_buttons">
 
          <div class="keypad_button_row">
            <button type="button" id="btn_s" class="btn btn-outline-dark keypad_button keypad_button_control" state="s"  @click="${this.setState}" title="stay">
            <i class="keypad-icon icon-stay_away"></i>
          </button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_w" class="btn btn-outline-dark keypad_button keypad_button_control" state="w"  @click="${this.setState}" title="away">
            <i class="keypad-icon icon-stay_empty"></i>
          </button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_c" class="btn btn-outline-dark keypad_button keypad_button_control" state="c"  @click="${this.setState}" title="chime">
          <i class="keypad-icon icon-bell"></i>
          </button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_r" class="btn btn-outline-dark keypad_button keypad_button_control" state="r"  @click="${this.setState}" title="reset">
          <i class="keypad-icon icon-refresh"></i>
          </button>
          </div>
          <div class="keypad_button_row">
            <button type="button" id="btn_x" class="btn btn-outline-dark keypad_button keypad_button_control" state="x"  @click="${this.setState}" title="exit">
            <i class="keypad-icon icon-exit"></i>
          </button>
          </div>
        </div> <!-- right -->

     </div> <!-- buttons -->
    </div> <!-- container -->
</div> <!-- flex_container -->
    </ha-card>
        `;
        }
    }
    __decorate([
        t()
    ], KeypadAlarmCard.prototype, "_line1", void 0);
    __decorate([
        t()
    ], KeypadAlarmCard.prototype, "_line2", void 0);
    __decorate([
        t()
    ], KeypadAlarmCard.prototype, "_readyStyle", void 0);
    __decorate([
        t()
    ], KeypadAlarmCard.prototype, "_armedStyle", void 0);
    __decorate([
        t()
    ], KeypadAlarmCard.prototype, "_chimeStyle", void 0);
    __decorate([
        t()
    ], KeypadAlarmCard.prototype, "_troubleStyle", void 0);
    __decorate([
        t()
    ], KeypadAlarmCard.prototype, "_acStyle", void 0);

    class KeypadAlarmCardEditor extends s {
        setConfig(config) {
            this._config = config;
        }
        _valueChanged(ev) {
            ev.target;
        }
        set hass(hass) {
            this._hass = hass;
        }
        get _entity() {
            var _a;
            return ((_a = this._config) === null || _a === void 0 ? void 0 : _a.entity) || '';
        }
        render() {
            const entities = Object.keys(this._hass.states);
            return x `

        <ha-form >
</ha-form>
            <form class="table">
                 <div class="row">
                    <label class="label cell" for="header">Header:</label>
                    <input id="entity"
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="header" value="${this._config.header}"></input>
                </div>
                <div class="row">
                    <label class="label cell" for="entity">Entity:</label>
                    <input
                        @change="${this.handleChangedEvent}"
                        class="value cell" id="entity" value="${this._config.entity}"></input>
                </div>
<div>
<!--
 <ha-entity-picker
                .hass=${this._hass}
                .1includeDomains=""
                .value=${this._entity}
                .1configValue=${'entity'}
                label="Entity1"
                allow-custom-entity
                @value-changed=${this._valueChanged}
              >test</ha-entity-picker>
-->
<!--
 <paper-input
                label="paper dropdown"
                .value="name"
                .placeholder="test"
                .configValue=${'name'}
                @value-changed=${this._valueChanged}
              >tt</paper-input>
-->
<!--
<div>
                <div class="row">
   <label class="label cell" for="entity">display line</label>
 <select 
         label="Entity (Required)"
        configValue=${'entity'}
        value=${this._entity}
        @selected=${this._valueChanged}
        @closed=${(ev) => ev.stopPropagation()}
      >
        ${entities.map((entity) => {
            if (this._config.entity != "" && entity.includes(this._config.entity))
                return x `
        <option value=${entity}>${entity}</option>`;
        })}
      </select>
<div>
-->

            </form>
        `;
        }
        handleChangedEvent(changedEvent) {
            const target = changedEvent.target;
            // this._config is readonly, copy needed
            const newConfig = Object.assign({}, this._config);
            if (target.id == "header") {
                newConfig.header = target.value;
            }
            else if (target.id == "entity") {
                newConfig.entity = target.value;
            }
            const messageEvent = new CustomEvent("config-changed", {
                detail: { config: newConfig },
                bubbles: true,
                composed: true,
            });
            this.dispatchEvent(messageEvent);
        }
    }
    KeypadAlarmCardEditor.styles = i$2 `
    .table {
      display: table;
    }
    .row {
      display: table-row;
    }
    .cell {
      display: table-cell;
      padding: 0.5em;
    }
  `;
    __decorate([
        t()
    ], KeypadAlarmCardEditor.prototype, "_config", void 0);
    __decorate([
        n$1({ attribute: false })
    ], KeypadAlarmCardEditor.prototype, "_hass", void 0);

    const printVersion = () => console.info("%c  DSC Alarm Card %c 0.2.0", "color: white; background: gray; font-weight: 700;", "color: gray; background: white; font-weight: 700;");

    // Registering card
    customElements.define("dsc-keypad-card", KeypadAlarmCard);
    customElements.define("dsc-keypad-card-editor", KeypadAlarmCardEditor);
    printVersion();
    window.customCards = window.customCards || [];
    window.customCards.push({
        type: "dsc-keypad-card",
        name: "DSC keypad card",
        description: "Emulate a DSC keypad",
        preview: true,
    });

})();
//# sourceMappingURL=dsc-keypad-card.js.map
