(function(){"use strict";var W=document.createElement("style");W.textContent=`:root{font-family:system-ui,Avenir,Helvetica,Arial,sans-serif;line-height:1.5;font-weight:400;color-scheme:light dark;color:#ffffffde;background-color:#242424;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}a{font-weight:500;color:#646cff;text-decoration:inherit}a:hover{color:#535bf2}body{margin:0;display:flex;place-items:center;min-width:320px;min-height:100vh}@media(prefers-color-scheme:light){:root{color:#213547;background-color:#fff}}
/*$vite$:1*/`,document.head.appendChild(W);const U=globalThis,H=U.ShadowRoot&&(U.ShadyCSS===void 0||U.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,L=Symbol(),F=new WeakMap;let G=class{constructor(t,e,s){if(this._$cssResult$=!0,s!==L)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(H&&t===void 0){const s=e!==void 0&&e.length===1;s&&(t=F.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),s&&F.set(e,t))}return t}toString(){return this.cssText}};const ct=o=>new G(typeof o=="string"?o:o+"",void 0,L),lt=(o,...t)=>{const e=o.length===1?o[0]:t.reduce(((s,i,n)=>s+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+o[n+1]),o[0]);return new G(e,o,L)},ht=(o,t)=>{if(H)o.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet));else for(const e of t){const s=document.createElement("style"),i=U.litNonce;i!==void 0&&s.setAttribute("nonce",i),s.textContent=e.cssText,o.appendChild(s)}},X=H?o=>o:o=>o instanceof CSSStyleSheet?(t=>{let e="";for(const s of t.cssRules)e+=s.cssText;return ct(e)})(o):o;const{is:dt,defineProperty:ut,getOwnPropertyDescriptor:pt,getOwnPropertyNames:ft,getOwnPropertySymbols:$t,getPrototypeOf:mt}=Object,I=globalThis,K=I.trustedTypes,_t=K?K.emptyScript:"",gt=I.reactiveElementPolyfillSupport,S=(o,t)=>o,M={toAttribute(o,t){switch(t){case Boolean:o=o?_t:null;break;case Object:case Array:o=o==null?o:JSON.stringify(o)}return o},fromAttribute(o,t){let e=o;switch(t){case Boolean:e=o!==null;break;case Number:e=o===null?null:Number(o);break;case Object:case Array:try{e=JSON.parse(o)}catch{e=null}}return e}},j=(o,t)=>!dt(o,t),J={attribute:!0,type:String,converter:M,reflect:!1,useDefault:!1,hasChanged:j};Symbol.metadata??=Symbol("metadata"),I.litPropertyMetadata??=new WeakMap;let y=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,e=J){if(e.state&&(e.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(t)&&((e=Object.create(e)).wrapped=!0),this.elementProperties.set(t,e),!e.noAccessor){const s=Symbol(),i=this.getPropertyDescriptor(t,s,e);i!==void 0&&ut(this.prototype,t,i)}}static getPropertyDescriptor(t,e,s){const{get:i,set:n}=pt(this.prototype,t)??{get(){return this[e]},set(r){this[e]=r}};return{get:i,set(r){const c=i?.call(this);n?.call(this,r),this.requestUpdate(t,c,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??J}static _$Ei(){if(this.hasOwnProperty(S("elementProperties")))return;const t=mt(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(S("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(S("properties"))){const e=this.properties,s=[...ft(e),...$t(e)];for(const i of s)this.createProperty(i,e[i])}const t=this[Symbol.metadata];if(t!==null){const e=litPropertyMetadata.get(t);if(e!==void 0)for(const[s,i]of e)this.elementProperties.set(s,i)}this._$Eh=new Map;for(const[e,s]of this.elementProperties){const i=this._$Eu(e,s);i!==void 0&&this._$Eh.set(i,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const i of s)e.unshift(X(i))}else t!==void 0&&e.push(X(t));return e}static _$Eu(t,e){const s=e.attribute;return s===!1?void 0:typeof s=="string"?s:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((t=>t(this)))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,e=this.constructor.elementProperties;for(const s of e.keys())this.hasOwnProperty(s)&&(t.set(s,this[s]),delete this[s]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ht(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((t=>t.hostConnected?.()))}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach((t=>t.hostDisconnected?.()))}attributeChangedCallback(t,e,s){this._$AK(t,s)}_$ET(t,e){const s=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,s);if(i!==void 0&&s.reflect===!0){const n=(s.converter?.toAttribute!==void 0?s.converter:M).toAttribute(e,s.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,e){const s=this.constructor,i=s._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=s.getPropertyOptions(i),r=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:M;this._$Em=i;const c=r.fromAttribute(e,n.type);this[i]=c??this._$Ej?.get(i)??c,this._$Em=null}}requestUpdate(t,e,s){if(t!==void 0){const i=this.constructor,n=this[t];if(s??=i.getPropertyOptions(t),!((s.hasChanged??j)(n,e)||s.useDefault&&s.reflect&&n===this._$Ej?.get(t)&&!this.hasAttribute(i._$Eu(t,s))))return;this.C(t,e,s)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(t,e,{useDefault:s,reflect:i,wrapped:n},r){s&&!(this._$Ej??=new Map).has(t)&&(this._$Ej.set(t,r??e??this[t]),n!==!0||r!==void 0)||(this._$AL.has(t)||(this.hasUpdated||s||(e=void 0),this._$AL.set(t,e)),i===!0&&this._$Em!==t&&(this._$Eq??=new Set).add(t))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[i,n]of this._$Ep)this[i]=n;this._$Ep=void 0}const s=this.constructor.elementProperties;if(s.size>0)for(const[i,n]of s){const{wrapped:r}=n,c=this[i];r!==!0||this._$AL.has(i)||c===void 0||this.C(i,void 0,n,c)}}let t=!1;const e=this._$AL;try{t=this.shouldUpdate(e),t?(this.willUpdate(e),this._$EO?.forEach((s=>s.hostUpdate?.())),this.update(e)):this._$EM()}catch(s){throw t=!1,this._$EM(),s}t&&this._$AE(e)}willUpdate(t){}_$AE(t){this._$EO?.forEach((e=>e.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Eq&&=this._$Eq.forEach((e=>this._$ET(e,this[e]))),this._$EM()}updated(t){}firstUpdated(t){}};y.elementStyles=[],y.shadowRootOptions={mode:"open"},y[S("elementProperties")]=new Map,y[S("finalized")]=new Map,gt?.({ReactiveElement:y}),(I.reactiveElementVersions??=[]).push("2.1.1");const z=globalThis,R=z.trustedTypes,Z=R?R.createPolicy("lit-html",{createHTML:o=>o}):void 0,Q="$lit$",f=`lit$${Math.random().toFixed(9).slice(2)}$`,Y="?"+f,vt=`<${Y}>`,_=document,w=()=>_.createComment(""),C=o=>o===null||typeof o!="object"&&typeof o!="function",q=Array.isArray,yt=o=>q(o)||typeof o?.[Symbol.iterator]=="function",B=`[ 	
\f\r]`,x=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,tt=/-->/g,et=/>/g,g=RegExp(`>|${B}(?:([^\\s"'>=/]+)(${B}*=${B}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),st=/'/g,it=/"/g,ot=/^(?:script|style|textarea|title)$/i,At=o=>(t,...e)=>({_$litType$:o,strings:t,values:e}),nt=At(1),A=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),rt=new WeakMap,v=_.createTreeWalker(_,129);function at(o,t){if(!q(o)||!o.hasOwnProperty("raw"))throw Error("invalid template strings array");return Z!==void 0?Z.createHTML(t):t}const bt=(o,t)=>{const e=o.length-1,s=[];let i,n=t===2?"<svg>":t===3?"<math>":"",r=x;for(let c=0;c<e;c++){const a=o[c];let d,u,l=-1,p=0;for(;p<a.length&&(r.lastIndex=p,u=r.exec(a),u!==null);)p=r.lastIndex,r===x?u[1]==="!--"?r=tt:u[1]!==void 0?r=et:u[2]!==void 0?(ot.test(u[2])&&(i=RegExp("</"+u[2],"g")),r=g):u[3]!==void 0&&(r=g):r===g?u[0]===">"?(r=i??x,l=-1):u[1]===void 0?l=-2:(l=r.lastIndex-u[2].length,d=u[1],r=u[3]===void 0?g:u[3]==='"'?it:st):r===it||r===st?r=g:r===tt||r===et?r=x:(r=g,i=void 0);const m=r===g&&o[c+1].startsWith("/>")?" ":"";n+=r===x?a+vt:l>=0?(s.push(d),a.slice(0,l)+Q+a.slice(l)+f+m):a+f+(l===-2?c:m)}return[at(o,n+(o[e]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),s]};class P{constructor({strings:t,_$litType$:e},s){let i;this.parts=[];let n=0,r=0;const c=t.length-1,a=this.parts,[d,u]=bt(t,e);if(this.el=P.createElement(d,s),v.currentNode=this.el.content,e===2||e===3){const l=this.el.content.firstChild;l.replaceWith(...l.childNodes)}for(;(i=v.nextNode())!==null&&a.length<c;){if(i.nodeType===1){if(i.hasAttributes())for(const l of i.getAttributeNames())if(l.endsWith(Q)){const p=u[r++],m=i.getAttribute(l).split(f),D=/([.?@])?(.*)/.exec(p);a.push({type:1,index:n,name:D[2],strings:m,ctor:D[1]==="."?St:D[1]==="?"?wt:D[1]==="@"?Ct:N}),i.removeAttribute(l)}else l.startsWith(f)&&(a.push({type:6,index:n}),i.removeAttribute(l));if(ot.test(i.tagName)){const l=i.textContent.split(f),p=l.length-1;if(p>0){i.textContent=R?R.emptyScript:"";for(let m=0;m<p;m++)i.append(l[m],w()),v.nextNode(),a.push({type:2,index:++n});i.append(l[p],w())}}}else if(i.nodeType===8)if(i.data===Y)a.push({type:2,index:n});else{let l=-1;for(;(l=i.data.indexOf(f,l+1))!==-1;)a.push({type:7,index:n}),l+=f.length-1}n++}}static createElement(t,e){const s=_.createElement("template");return s.innerHTML=t,s}}function b(o,t,e=o,s){if(t===A)return t;let i=s!==void 0?e._$Co?.[s]:e._$Cl;const n=C(t)?void 0:t._$litDirective$;return i?.constructor!==n&&(i?._$AO?.(!1),n===void 0?i=void 0:(i=new n(o),i._$AT(o,e,s)),s!==void 0?(e._$Co??=[])[s]=i:e._$Cl=i),i!==void 0&&(t=b(o,i._$AS(o,t.values),i,s)),t}class Et{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:e},parts:s}=this._$AD,i=(t?.creationScope??_).importNode(e,!0);v.currentNode=i;let n=v.nextNode(),r=0,c=0,a=s[0];for(;a!==void 0;){if(r===a.index){let d;a.type===2?d=new O(n,n.nextSibling,this,t):a.type===1?d=new a.ctor(n,a.name,a.strings,this,t):a.type===6&&(d=new xt(n,this,t)),this._$AV.push(d),a=s[++c]}r!==a?.index&&(n=v.nextNode(),r++)}return v.currentNode=_,i}p(t){let e=0;for(const s of this._$AV)s!==void 0&&(s.strings!==void 0?(s._$AI(t,s,e),e+=s.strings.length-2):s._$AI(t[e])),e++}}class O{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,e,s,i){this.type=2,this._$AH=h,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=s,this.options=i,this._$Cv=i?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&t?.nodeType===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=b(this,t,e),C(t)?t===h||t==null||t===""?(this._$AH!==h&&this._$AR(),this._$AH=h):t!==this._$AH&&t!==A&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):yt(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==h&&C(this._$AH)?this._$AA.nextSibling.data=t:this.T(_.createTextNode(t)),this._$AH=t}$(t){const{values:e,_$litType$:s}=t,i=typeof s=="number"?this._$AC(t):(s.el===void 0&&(s.el=P.createElement(at(s.h,s.h[0]),this.options)),s);if(this._$AH?._$AD===i)this._$AH.p(e);else{const n=new Et(i,this),r=n.u(this.options);n.p(e),this.T(r),this._$AH=n}}_$AC(t){let e=rt.get(t.strings);return e===void 0&&rt.set(t.strings,e=new P(t)),e}k(t){q(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let s,i=0;for(const n of t)i===e.length?e.push(s=new O(this.O(w()),this.O(w()),this,this.options)):s=e[i],s._$AI(n),i++;i<e.length&&(this._$AR(s&&s._$AB.nextSibling,i),e.length=i)}_$AR(t=this._$AA.nextSibling,e){for(this._$AP?.(!1,!0,e);t!==this._$AB;){const s=t.nextSibling;t.remove(),t=s}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class N{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,e,s,i,n){this.type=1,this._$AH=h,this._$AN=void 0,this.element=t,this.name=e,this._$AM=i,this.options=n,s.length>2||s[0]!==""||s[1]!==""?(this._$AH=Array(s.length-1).fill(new String),this.strings=s):this._$AH=h}_$AI(t,e=this,s,i){const n=this.strings;let r=!1;if(n===void 0)t=b(this,t,e,0),r=!C(t)||t!==this._$AH&&t!==A,r&&(this._$AH=t);else{const c=t;let a,d;for(t=n[0],a=0;a<n.length-1;a++)d=b(this,c[s+a],e,a),d===A&&(d=this._$AH[a]),r||=!C(d)||d!==this._$AH[a],d===h?t=h:t!==h&&(t+=(d??"")+n[a+1]),this._$AH[a]=d}r&&!i&&this.j(t)}j(t){t===h?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class St extends N{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===h?void 0:t}}class wt extends N{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==h)}}class Ct extends N{constructor(t,e,s,i,n){super(t,e,s,i,n),this.type=5}_$AI(t,e=this){if((t=b(this,t,e,0)??h)===A)return;const s=this._$AH,i=t===h&&s!==h||t.capture!==s.capture||t.once!==s.once||t.passive!==s.passive,n=t!==h&&(s===h||i);i&&this.element.removeEventListener(this.name,this,s),n&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class xt{constructor(t,e,s){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=s}get _$AU(){return this._$AM._$AU}_$AI(t){b(this,t)}}const Pt=z.litHtmlPolyfillSupport;Pt?.(P,O),(z.litHtmlVersions??=[]).push("3.3.1");const Ot=(o,t,e)=>{const s=e?.renderBefore??t;let i=s._$litPart$;if(i===void 0){const n=e?.renderBefore??null;s._$litPart$=i=new O(t.insertBefore(w(),n),n,void 0,e??{})}return i._$AI(o),i};const V=globalThis;class k extends y{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Ot(e,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return A}}k._$litElement$=!0,k.finalized=!0,V.litElementHydrateSupport?.({LitElement:k});const kt=V.litElementPolyfillSupport;kt?.({LitElement:k}),(V.litElementVersions??=[]).push("4.2.1");const Ut=o=>(t,e)=>{e!==void 0?e.addInitializer((()=>{customElements.define(o,t)})):customElements.define(o,t)};const It={attribute:!0,type:String,converter:M,reflect:!1,hasChanged:j},Mt=(o=It,t,e)=>{const{kind:s,metadata:i}=e;let n=globalThis.litPropertyMetadata.get(i);if(n===void 0&&globalThis.litPropertyMetadata.set(i,n=new Map),s==="setter"&&((o=Object.create(o)).wrapped=!0),n.set(e.name,o),s==="accessor"){const{name:r}=e;return{set(c){const a=t.get.call(this);t.set.call(this,c),this.requestUpdate(r,a,o)},init(c){return c!==void 0&&this.C(r,void 0,o,c),c}}}if(s==="setter"){const{name:r}=e;return function(c){const a=this[r];t.call(this,c),this.requestUpdate(r,a,o)}}throw Error("Unsupported decorator location: "+s)};function Rt(o){return(t,e)=>typeof e=="object"?Mt(o,t,e):((s,i,n)=>{const r=i.hasOwnProperty(n);return i.constructor.createProperty(n,s),r?Object.getOwnPropertyDescriptor(i,n):void 0})(o,t,e)}function T(o){return Rt({...o,state:!0,attribute:!1})}const Nt=(o,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(o,t,e),e);function Tt(o,t){return(e,s,i)=>{const n=r=>r.renderRoot?.querySelector(o)??null;return Nt(e,s,{get(){return n(this)}})}}var Dt=Object.defineProperty,Ht=Object.getOwnPropertyDescriptor,E=(o,t,e,s)=>{for(var i=s>1?void 0:s?Ht(t,e):t,n=o.length-1,r;n>=0;n--)(r=o[n])&&(i=(s?r(t,e,i):r(i))||i);return s&&i&&Dt(t,e,i),i};let $=class extends k{constructor(){super(...arguments),this.audioDevices1=[],this.hideMe=!0,this.isActive=!1,this.selectedDeviceId=null}async connectedCallback(){super.connectedCallback(),this.populateAudio(),window.AGENTX_SERVICE.aqm.contact.eAgentOfferContact.listen(o=>{o.data.interaction.contactDirection.type==="INBOUND"&&this.playSound()}),window.AGENTX_SERVICE.aqm.contact.eAgentOfferConsult.listen(o=>{o.data.interaction.contactDirection.type==="INBOUND"&&this.playSound()}),window.AGENTX_SERVICE.aqm.contact.eAgentContactAssigned.listen(()=>{this.stopSound()}),window.AGENTX_SERVICE.aqm.contact.eAgentContactEnded.listen(()=>{this.stopSound()}),window.AGENTX_SERVICE.aqm.contact.eAgentOfferContactRona.listen(()=>{this.stopSound()}),window.AGENTX_SERVICE.aqm.contact.eAgentConsulting.listen(()=>{this.stopSound()})}async firstUpdated(){const o=localStorage.getItem("secondaryRingerSelectedId");o&&this.hmm&&(this.hmm.setSinkId(o),this.selectedDeviceId=o),localStorage.getItem("secondaryRingerIsActive")==="true"&&(this.isActive=!0)}populateAudio(){navigator.mediaDevices.getUserMedia({audio:!0}),this.listAudioDevices()}_handleSelect(o){localStorage.setItem("secondaryRingerSelectedId",o.target.value),this.selectedDeviceId=o.target.value,this.hmm.setSinkId(o.target.value)}_handleIsActive(){const o=!this.isActive;this.isActive=o,localStorage.setItem("secondaryRingerIsActive",o.toString())}playSound(){this.isActive&&this.hmm.play()}stopSound(){this.hmm.load()}async listAudioDevices(){try{const t=(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="audiooutput"&&e.deviceId!=="default"&&e.deviceId!=="communications");this.audioDevices1=t.map(e=>nt`<option
                        value=${e.deviceId}
                        ?selected=${e.deviceId===this.selectedDeviceId}
                    >
                        ${e.label}
                    </option>`),t.length===0&&this.populateAudio()}catch(o){console.error("Error enumerating devices:",o)}}render(){return nt`
            <button
                class="ringer-button"
                @click=${()=>this.hideMe=!this.hideMe}
            >
                Second Ringer
            </button>
            <div class=${"modal__container"+(this.hideMe?" hidden":"")}>
                <div class="modal__header-container">
                    <p class="modal__title">Second Ringer Configuration</p>
                    <button
                        class="modal__close-button"
                        @click=${()=>this.hideMe=!0}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 384 512"
                            height="20px"
                            width="auto"
                            class="modal__close-svg"
                        >
                            <!--!Font Awesome Free v7.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.-->
                            <path
                                d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"
                            />
                        </svg>
                    </button>
                </div>
                <div class="modal__top-container">
                    <audio
                        id="ring"
                        src="https://intranet.corp.conwy.gov.uk/edge-extensions/wxcc-second-ringer-widget/ring.mp3"
                        type="audio/mp3"
                        controls
                        loop
                    ></audio>
                    <button @click=${this._handleIsActive}>
                        ${this.isActive?"Enabled":"Disabled"}
                    </button>
                </div>
                <div class="modal__bottom-container">
                    <select @change=${this._handleSelect}>
                        ${this.audioDevices1}
                    </select>
                    <button @click="${this.listAudioDevices}">Load</button>
                </div>
            </div>
        `}};$.styles=[lt`
            :host {
                display: block;
                font-family: var(--brand-font-regular);
            }
            .modal__container {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 1rem;
                border: solid black;
                border-radius: 12px;
                overflow: hidden;
                z-index: 99;
                background-color: rgba(5, 5, 5, 0.5);
                display: flex;
                flex-direction: column;
                gap: 1rem;
            }
            .hidden {
                display: none;
            }
            .modal__header-container {
                display: flex;
                justify-content: space-between;
            }
            .modal__title {
                margin-top: 0;
                margin-bottom: 0;
                color: white;
                font-size: large;
                font-weight: bold;
            }
            .modal__close-svg path {
                fill: var(--tabs-primary-text-color);
            }
            .modal__top-container,
            .modal__bottom-container {
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 1rem;
            }
            button {
                padding: 0.3rem 0.75rem;
                border: none;
                background: black;
                font-weight: bold;
                font-family: var(--brand-font-bold);
                font-weight: var(--brand-font-weight-bold);
                background-color: var(--tabs-primary-bg-color);
                color: var(--tabs-primary-text-color);
                box-shadow: inset 0 0 0 0 var(--tabs-default-active-border);
                border-radius: 0.5rem;
                cursor: pointer;
                user-select: none;
            }
            select {
                padding: 0.5rem;
                background-color: var(--button-idle-bg-color);
                color: var(--button-secondary-text-color);
                border: 1px solid var(--button-idle-border-color);
                border-radius: 0.5rem;
            }
        `],E([T()],$.prototype,"audioDevices1",2),E([T()],$.prototype,"hideMe",2),E([T()],$.prototype,"isActive",2),E([T()],$.prototype,"selectedDeviceId",2),E([Tt("#ring")],$.prototype,"hmm",2),$=E([Ut("second-ringer")],$)})();
