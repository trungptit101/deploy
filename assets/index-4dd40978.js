import{cc as Q,b_ as E,b7 as rt,bh as Et,c7 as _t,bi as Pt,ba as me,bb as ee,cd as jt,bg as ot,b8 as Ot,ce as xe,cf as J,bZ as zt,cg as z,b1 as st,L as v,a6 as Mt,ch as kt,r as O,H as Fe,C as Ft,ar as Vt,D as ie,a3 as Ve,G as Bt,a5 as le,d as it,aE as Nt,aF as Lt,a7 as Dt,aa as Rt,a8 as Kt,ab as Ut,K as Be,aO as ue,ci as Ht,cj as Wt,ck as Gt,cl as qt,aR as Xt,I as ce,ah as N,ad as Ne,m as Yt,aH as Zt,w as Jt,T as Qt,a as y,c as w,h,F as pe,v as m,i as o,M as X,b as j,e as S,f as L,ae as Y,S as D,aw as de,g as ea,aq as ta,V as aa,bM as na,t as Z,ag as ra,N as oa,b5 as Le,W as sa}from"./index-43fa284a.js";import{U as ve}from"./event-9519ab40.js";var ia=Q(E,"WeakMap");const ge=ia;var De=Object.create,la=function(){function e(){}return function(r){if(!rt(r))return{};if(De)return De(r);e.prototype=r;var t=new e;return e.prototype=void 0,t}}();const ua=la;function or(e,r){var t=-1,a=e.length;for(r||(r=Array(a));++t<a;)r[t]=e[t];return r}function sr(e,r,t,a){var s=!t;t||(t={});for(var i=-1,u=r.length;++i<u;){var g=r[i],c=a?a(t[g],e[g],g,t,e):void 0;c===void 0&&(c=e[g]),s?Et(t,g,c):_t(t,g,c)}return t}var ca=9007199254740991;function lt(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=ca}function ut(e){return e!=null&&lt(e.length)&&!Pt(e)}var pa=Object.prototype;function we(e){var r=e&&e.constructor,t=typeof r=="function"&&r.prototype||pa;return e===t}function da(e,r){for(var t=-1,a=Array(e);++t<e;)a[t]=r(t);return a}var fa="[object Arguments]";function Re(e){return me(e)&&ee(e)==fa}var ct=Object.prototype,va=ct.hasOwnProperty,ga=ct.propertyIsEnumerable,ya=Re(function(){return arguments}())?Re:function(e){return me(e)&&va.call(e,"callee")&&!ga.call(e,"callee")};const ba=ya;function ha(){return!1}var pt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ke=pt&&typeof module=="object"&&module&&!module.nodeType&&module,ma=Ke&&Ke.exports===pt,Ue=ma?E.Buffer:void 0,xa=Ue?Ue.isBuffer:void 0,wa=xa||ha;const Sa=wa;var Ta="[object Arguments]",Ca="[object Array]",Ia="[object Boolean]",Aa="[object Date]",$a="[object Error]",Ea="[object Function]",_a="[object Map]",Pa="[object Number]",ja="[object Object]",Oa="[object RegExp]",za="[object Set]",Ma="[object String]",ka="[object WeakMap]",Fa="[object ArrayBuffer]",Va="[object DataView]",Ba="[object Float32Array]",Na="[object Float64Array]",La="[object Int8Array]",Da="[object Int16Array]",Ra="[object Int32Array]",Ka="[object Uint8Array]",Ua="[object Uint8ClampedArray]",Ha="[object Uint16Array]",Wa="[object Uint32Array]",p={};p[Ba]=p[Na]=p[La]=p[Da]=p[Ra]=p[Ka]=p[Ua]=p[Ha]=p[Wa]=!0;p[Ta]=p[Ca]=p[Fa]=p[Ia]=p[Va]=p[Aa]=p[$a]=p[Ea]=p[_a]=p[Pa]=p[ja]=p[Oa]=p[za]=p[Ma]=p[ka]=!1;function Ga(e){return me(e)&&lt(e.length)&&!!p[ee(e)]}function qa(e){return function(r){return e(r)}}var dt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,R=dt&&typeof module=="object"&&module&&!module.nodeType&&module,Xa=R&&R.exports===dt,fe=Xa&&jt.process,Ya=function(){try{var e=R&&R.require&&R.require("util").types;return e||fe&&fe.binding&&fe.binding("util")}catch{}}();const He=Ya;var We=He&&He.isTypedArray,Za=We?qa(We):Ga;const Ja=Za;var Qa=Object.prototype,en=Qa.hasOwnProperty;function ft(e,r){var t=ot(e),a=!t&&ba(e),s=!t&&!a&&Sa(e),i=!t&&!a&&!s&&Ja(e),u=t||a||s||i,g=u?da(e.length,String):[],c=g.length;for(var f in e)(r||en.call(e,f))&&!(u&&(f=="length"||s&&(f=="offset"||f=="parent")||i&&(f=="buffer"||f=="byteLength"||f=="byteOffset")||Ot(f,c)))&&g.push(f);return g}function vt(e,r){return function(t){return e(r(t))}}var tn=vt(Object.keys,Object);const an=tn;var nn=Object.prototype,rn=nn.hasOwnProperty;function on(e){if(!we(e))return an(e);var r=[];for(var t in Object(e))rn.call(e,t)&&t!="constructor"&&r.push(t);return r}function sn(e){return ut(e)?ft(e):on(e)}function ln(e){var r=[];if(e!=null)for(var t in Object(e))r.push(t);return r}var un=Object.prototype,cn=un.hasOwnProperty;function pn(e){if(!rt(e))return ln(e);var r=we(e),t=[];for(var a in e)a=="constructor"&&(r||!cn.call(e,a))||t.push(a);return t}function ir(e){return ut(e)?ft(e,!0):pn(e)}function dn(e,r){for(var t=-1,a=r.length,s=e.length;++t<a;)e[s+t]=r[t];return e}var fn=vt(Object.getPrototypeOf,Object);const vn=fn;function gn(){this.__data__=new xe,this.size=0}function yn(e){var r=this.__data__,t=r.delete(e);return this.size=r.size,t}function bn(e){return this.__data__.get(e)}function hn(e){return this.__data__.has(e)}var mn=200;function xn(e,r){var t=this.__data__;if(t instanceof xe){var a=t.__data__;if(!J||a.length<mn-1)return a.push([e,r]),this.size=++t.size,this;t=this.__data__=new zt(a)}return t.set(e,r),this.size=t.size,this}function K(e){var r=this.__data__=new xe(e);this.size=r.size}K.prototype.clear=gn;K.prototype.delete=yn;K.prototype.get=bn;K.prototype.has=hn;K.prototype.set=xn;var gt=typeof exports=="object"&&exports&&!exports.nodeType&&exports,Ge=gt&&typeof module=="object"&&module&&!module.nodeType&&module,wn=Ge&&Ge.exports===gt,qe=wn?E.Buffer:void 0,Xe=qe?qe.allocUnsafe:void 0;function lr(e,r){if(r)return e.slice();var t=e.length,a=Xe?Xe(t):new e.constructor(t);return e.copy(a),a}function Sn(e,r){for(var t=-1,a=e==null?0:e.length,s=0,i=[];++t<a;){var u=e[t];r(u,t,e)&&(i[s++]=u)}return i}function Tn(){return[]}var Cn=Object.prototype,In=Cn.propertyIsEnumerable,Ye=Object.getOwnPropertySymbols,An=Ye?function(e){return e==null?[]:(e=Object(e),Sn(Ye(e),function(r){return In.call(e,r)}))}:Tn;const $n=An;function En(e,r,t){var a=r(e);return ot(e)?a:dn(a,t(e))}function ur(e){return En(e,sn,$n)}var _n=Q(E,"DataView");const ye=_n;var Pn=Q(E,"Promise");const be=Pn;var jn=Q(E,"Set");const he=jn;var Ze="[object Map]",On="[object Object]",Je="[object Promise]",Qe="[object Set]",et="[object WeakMap]",tt="[object DataView]",zn=z(ye),Mn=z(J),kn=z(be),Fn=z(he),Vn=z(ge),$=ee;(ye&&$(new ye(new ArrayBuffer(1)))!=tt||J&&$(new J)!=Ze||be&&$(be.resolve())!=Je||he&&$(new he)!=Qe||ge&&$(new ge)!=et)&&($=function(e){var r=ee(e),t=r==On?e.constructor:void 0,a=t?z(t):"";if(a)switch(a){case zn:return tt;case Mn:return Ze;case kn:return Je;case Fn:return Qe;case Vn:return et}return r});const cr=$;var Bn=E.Uint8Array;const at=Bn;function Nn(e){var r=new e.constructor(e.byteLength);return new at(r).set(new at(e)),r}function pr(e,r){var t=r?Nn(e.buffer):e.buffer;return new e.constructor(t,e.byteOffset,e.length)}function dr(e){return typeof e.constructor=="function"&&!we(e)?ua(vn(e)):{}}const Ln=()=>st&&/firefox/i.test(window.navigator.userAgent),Dn=e=>/([(\uAC00-\uD7AF)|(\u3130-\u318F)])+/gi.test(e),Rn=["class","style"],Kn=/^on[A-Z]/,Un=(e={})=>{const{excludeListeners:r=!1,excludeKeys:t}=e,a=v(()=>((t==null?void 0:t.value)||[]).concat(Rn)),s=Mt();return s?v(()=>{var i;return kt(Object.entries((i=s.proxy)==null?void 0:i.$attrs).filter(([u])=>!a.value.includes(u)&&!(r&&Kn.test(u))))}):v(()=>({}))};function Hn(e){const r=O();function t(){if(e.value==null)return;const{selectionStart:s,selectionEnd:i,value:u}=e.value;if(s==null||i==null)return;const g=u.slice(0,Math.max(0,s)),c=u.slice(Math.max(0,i));r.value={selectionStart:s,selectionEnd:i,value:u,beforeTxt:g,afterTxt:c}}function a(){if(e.value==null||r.value==null)return;const{value:s}=e.value,{beforeTxt:i,afterTxt:u,selectionStart:g}=r.value;if(i==null||u==null||g==null)return;let c=s.length;if(s.endsWith(u))c=s.length-u.length;else if(s.startsWith(i))c=i.length;else{const f=i[g-1],T=s.indexOf(f,g-1);T!==-1&&(c=T+1)}e.value.setSelectionRange(c,c)}return[t,a]}let x;const Wn=`
  height:0 !important;
  visibility:hidden !important;
  ${Ln()?"":"overflow:hidden !important;"}
  position:absolute !important;
  z-index:-1000 !important;
  top:0 !important;
  right:0 !important;
`,Gn=["letter-spacing","line-height","padding-top","padding-bottom","font-family","font-weight","font-size","text-rendering","text-transform","width","text-indent","padding-left","padding-right","border-width","box-sizing"];function qn(e){const r=window.getComputedStyle(e),t=r.getPropertyValue("box-sizing"),a=Number.parseFloat(r.getPropertyValue("padding-bottom"))+Number.parseFloat(r.getPropertyValue("padding-top")),s=Number.parseFloat(r.getPropertyValue("border-bottom-width"))+Number.parseFloat(r.getPropertyValue("border-top-width"));return{contextStyle:Gn.map(u=>`${u}:${r.getPropertyValue(u)}`).join(";"),paddingSize:a,borderSize:s,boxSizing:t}}function nt(e,r=1,t){var a;x||(x=document.createElement("textarea"),document.body.appendChild(x));const{paddingSize:s,borderSize:i,boxSizing:u,contextStyle:g}=qn(e);x.setAttribute("style",`${g};${Wn}`),x.value=e.value||e.placeholder||"";let c=x.scrollHeight;const f={};u==="border-box"?c=c+i:u==="content-box"&&(c=c-s),x.value="";const T=x.scrollHeight-s;if(Fe(r)){let b=T*r;u==="border-box"&&(b=b+s+i),c=Math.max(b,c),f.minHeight=`${b}px`}if(Fe(t)){let b=T*t;u==="border-box"&&(b=b+s+i),c=Math.min(b,c)}return f.height=`${c}px`,(a=x.parentNode)==null||a.removeChild(x),x=void 0,f}const Xn=Ft({id:{type:String,default:void 0},size:Vt,disabled:Boolean,modelValue:{type:ie([String,Number,Object]),default:""},type:{type:String,default:"text"},resize:{type:String,values:["none","both","horizontal","vertical"]},autosize:{type:ie([Boolean,Object]),default:!1},autocomplete:{type:String,default:"off"},formatter:{type:Function},parser:{type:Function},placeholder:{type:String},form:{type:String},readonly:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},showWordLimit:{type:Boolean,default:!1},suffixIcon:{type:Ve},prefixIcon:{type:Ve},containerRole:{type:String,default:void 0},label:{type:String,default:void 0},tabindex:{type:[String,Number],default:0},validateEvent:{type:Boolean,default:!0},inputStyle:{type:ie([Object,Array,String]),default:()=>Bt({})}}),Yn={[ve]:e=>le(e),input:e=>le(e),change:e=>le(e),focus:e=>e instanceof FocusEvent,blur:e=>e instanceof FocusEvent,clear:()=>!0,mouseleave:e=>e instanceof MouseEvent,mouseenter:e=>e instanceof MouseEvent,keydown:e=>e instanceof Event,compositionstart:e=>e instanceof CompositionEvent,compositionupdate:e=>e instanceof CompositionEvent,compositionend:e=>e instanceof CompositionEvent},Zn=["role"],Jn=["id","type","disabled","formatter","parser","readonly","autocomplete","tabindex","aria-label","placeholder","form"],Qn=["id","tabindex","disabled","readonly","autocomplete","aria-label","placeholder","form"],er=it({name:"ElInput",inheritAttrs:!1}),tr=it({...er,props:Xn,emits:Yn,setup(e,{expose:r,emit:t}){const a=e,s=Nt(),i=Lt(),u=v(()=>{const n={};return a.containerRole==="combobox"&&(n["aria-haspopup"]=s["aria-haspopup"],n["aria-owns"]=s["aria-owns"],n["aria-expanded"]=s["aria-expanded"]),n}),g=v(()=>[a.type==="textarea"?Te.b():l.b(),l.m(yt.value),l.is("disabled",_.value),l.is("exceed",mt.value),{[l.b("group")]:i.prepend||i.append,[l.bm("group","append")]:i.append,[l.bm("group","prepend")]:i.prepend,[l.m("prefix")]:i.prefix||a.prefixIcon,[l.m("suffix")]:i.suffix||a.suffixIcon||a.clearable||a.showPassword,[l.bm("suffix","password-clear")]:W.value&&ne.value},s.class]),c=v(()=>[l.e("wrapper"),l.is("focus",M.value)]),f=Un({excludeKeys:v(()=>Object.keys(u.value))}),{form:T,formItem:b}=Dt(),{inputId:Se}=Rt(a,{formItemContext:b}),yt=Kt(),_=Ut(),l=Be("input"),Te=Be("textarea"),U=ue(),I=ue(),M=O(!1),te=O(!1),k=O(!1),H=O(!1),Ce=O(),ae=ue(a.inputStyle),F=v(()=>U.value||I.value),Ie=v(()=>{var n;return(n=T==null?void 0:T.statusIcon)!=null?n:!1}),V=v(()=>(b==null?void 0:b.validateState)||""),Ae=v(()=>V.value&&Ht[V.value]),bt=v(()=>H.value?Wt:Gt),ht=v(()=>[s.style,a.inputStyle]),$e=v(()=>[a.inputStyle,ae.value,{resize:a.resize}]),C=v(()=>qt(a.modelValue)?"":String(a.modelValue)),W=v(()=>a.clearable&&!_.value&&!a.readonly&&!!C.value&&(M.value||te.value)),ne=v(()=>a.showPassword&&!_.value&&!a.readonly&&!!C.value&&(!!C.value||M.value)),P=v(()=>a.showWordLimit&&!!f.value.maxlength&&(a.type==="text"||a.type==="textarea")&&!_.value&&!a.readonly&&!a.showPassword),re=v(()=>Array.from(C.value).length),mt=v(()=>!!P.value&&re.value>Number(f.value.maxlength)),xt=v(()=>!!i.suffix||!!a.suffixIcon||W.value||a.showPassword||P.value||!!V.value&&Ie.value),[wt,St]=Hn(U);Xt(I,n=>{if(!P.value||a.resize!=="both")return;const d=n[0],{width:A}=d.contentRect;Ce.value={right:`calc(100% - ${A+15+6}px)`}});const G=()=>{const{type:n,autosize:d}=a;if(!(!st||n!=="textarea"||!I.value))if(d){const A=Le(d)?d.minRows:void 0,se=Le(d)?d.maxRows:void 0;ae.value={...nt(I.value,A,se)}}else ae.value={minHeight:nt(I.value).minHeight}},B=()=>{const n=F.value;!n||n.value===C.value||(n.value=C.value)},oe=async n=>{wt();let{value:d}=n.target;if(a.formatter&&(d=a.parser?a.parser(d):d,d=a.formatter(d)),!k.value){if(d===C.value){B();return}t(ve,d),t("input",d),await N(),B(),St()}},Ee=n=>{t("change",n.target.value)},_e=n=>{t("compositionstart",n),k.value=!0},Pe=n=>{var d;t("compositionupdate",n);const A=(d=n.target)==null?void 0:d.value,se=A[A.length-1]||"";k.value=!Dn(se)},je=n=>{t("compositionend",n),k.value&&(k.value=!1,oe(n))},Tt=()=>{H.value=!H.value,q()},q=async()=>{var n;await N(),(n=F.value)==null||n.focus()},Ct=()=>{var n;return(n=F.value)==null?void 0:n.blur()},Oe=n=>{M.value=!0,t("focus",n)},ze=n=>{var d;M.value=!1,t("blur",n),a.validateEvent&&((d=b==null?void 0:b.validate)==null||d.call(b,"blur").catch(A=>Ne()))},It=n=>{te.value=!1,t("mouseleave",n)},At=n=>{te.value=!0,t("mouseenter",n)},Me=n=>{t("keydown",n)},$t=()=>{var n;(n=F.value)==null||n.select()},ke=()=>{t(ve,""),t("change",""),t("clear"),t("input","")};return ce(()=>a.modelValue,()=>{var n;N(()=>G()),a.validateEvent&&((n=b==null?void 0:b.validate)==null||n.call(b,"change").catch(d=>Ne()))}),ce(C,()=>B()),ce(()=>a.type,async()=>{await N(),B(),G()}),Yt(()=>{!a.formatter&&a.parser,B(),N(G)}),r({input:U,textarea:I,ref:F,textareaStyle:$e,autosize:Zt(a,"autosize"),focus:q,blur:Ct,select:$t,clear:ke,resizeTextarea:G}),(n,d)=>Jt((y(),w("div",de(o(u),{class:o(g),style:o(ht),role:n.containerRole,onMouseenter:At,onMouseleave:It}),[h(" input "),n.type!=="textarea"?(y(),w(pe,{key:0},[h(" prepend slot "),n.$slots.prepend?(y(),w("div",{key:0,class:m(o(l).be("group","prepend"))},[X(n.$slots,"prepend")],2)):h("v-if",!0),j("div",{class:m(o(c))},[h(" prefix slot "),n.$slots.prefix||n.prefixIcon?(y(),w("span",{key:0,class:m(o(l).e("prefix"))},[j("span",{class:m(o(l).e("prefix-inner")),onClick:q},[X(n.$slots,"prefix"),n.prefixIcon?(y(),S(o(D),{key:0,class:m(o(l).e("icon"))},{default:L(()=>[(y(),S(Y(n.prefixIcon)))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0),j("input",de({id:o(Se),ref_key:"input",ref:U,class:o(l).e("inner")},o(f),{type:n.showPassword?H.value?"text":"password":n.type,disabled:o(_),formatter:n.formatter,parser:n.parser,readonly:n.readonly,autocomplete:n.autocomplete,tabindex:n.tabindex,"aria-label":n.label,placeholder:n.placeholder,style:n.inputStyle,form:a.form,onCompositionstart:_e,onCompositionupdate:Pe,onCompositionend:je,onInput:oe,onFocus:Oe,onBlur:ze,onChange:Ee,onKeydown:Me}),null,16,Jn),h(" suffix slot "),o(xt)?(y(),w("span",{key:1,class:m(o(l).e("suffix"))},[j("span",{class:m(o(l).e("suffix-inner")),onClick:q},[!o(W)||!o(ne)||!o(P)?(y(),w(pe,{key:0},[X(n.$slots,"suffix"),n.suffixIcon?(y(),S(o(D),{key:0,class:m(o(l).e("icon"))},{default:L(()=>[(y(),S(Y(n.suffixIcon)))]),_:1},8,["class"])):h("v-if",!0)],64)):h("v-if",!0),o(W)?(y(),S(o(D),{key:1,class:m([o(l).e("icon"),o(l).e("clear")]),onMousedown:aa(o(na),["prevent"]),onClick:ke},{default:L(()=>[ea(o(ta))]),_:1},8,["class","onMousedown"])):h("v-if",!0),o(ne)?(y(),S(o(D),{key:2,class:m([o(l).e("icon"),o(l).e("password")]),onClick:Tt},{default:L(()=>[(y(),S(Y(o(bt))))]),_:1},8,["class"])):h("v-if",!0),o(P)?(y(),w("span",{key:3,class:m(o(l).e("count"))},[j("span",{class:m(o(l).e("count-inner"))},Z(o(re))+" / "+Z(o(f).maxlength),3)],2)):h("v-if",!0),o(V)&&o(Ae)&&o(Ie)?(y(),S(o(D),{key:4,class:m([o(l).e("icon"),o(l).e("validateIcon"),o(l).is("loading",o(V)==="validating")])},{default:L(()=>[(y(),S(Y(o(Ae))))]),_:1},8,["class"])):h("v-if",!0)],2)],2)):h("v-if",!0)],2),h(" append slot "),n.$slots.append?(y(),w("div",{key:1,class:m(o(l).be("group","append"))},[X(n.$slots,"append")],2)):h("v-if",!0)],64)):(y(),w(pe,{key:1},[h(" textarea "),j("textarea",de({id:o(Se),ref_key:"textarea",ref:I,class:o(Te).e("inner")},o(f),{tabindex:n.tabindex,disabled:o(_),readonly:n.readonly,autocomplete:n.autocomplete,style:o($e),"aria-label":n.label,placeholder:n.placeholder,form:a.form,onCompositionstart:_e,onCompositionupdate:Pe,onCompositionend:je,onInput:oe,onFocus:Oe,onBlur:ze,onChange:Ee,onKeydown:Me}),null,16,Qn),o(P)?(y(),w("span",{key:0,style:ra(Ce.value),class:m(o(l).e("count"))},Z(o(re))+" / "+Z(o(f).maxlength),7)):h("v-if",!0)],64))],16,Zn)),[[Qt,n.type!=="hidden"]])}});var ar=oa(tr,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input/src/input.vue"]]);const fr=sa(ar);export{fr as E,K as S,at as U,ir as a,Sa as b,sr as c,Ja as d,or as e,lr as f,vn as g,pr as h,ut as i,ba as j,sn as k,dr as l,lt as m,dn as n,ur as o,cr as p,Dn as q,$n as r,Tn as s,En as t,Nn as u,He as v,qa as w};
