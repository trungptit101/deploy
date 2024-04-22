import{C as Y,a3 as M,D as Z,a4 as C,a5 as w,H as I,d as A,a6 as $,a7 as x,a8 as ee,K as ae,a9 as te,L as u,aa as ie,ab as ne,r as S,ac as oe,I as V,ad as se,m as le,a as o,c as d,b as T,i as a,v as r,Q as re,e as v,f as b,ae as E,S as g,h as c,t as N,g as ce,af as ue,ag as O,V as de,N as ve,ah as fe,ai as U,aj as pe,W as me}from"./index-43fa284a.js";import{i as he}from"./validator-183bd9e8.js";import{U as B,C as P,I as D}from"./event-9519ab40.js";const ye=Y({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:M},inactiveIcon:{type:M},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:Z(Function)},size:{type:String,validator:he},tabindex:{type:[String,Number]}}),be={[B]:s=>C(s)||w(s)||I(s),[P]:s=>C(s)||w(s)||I(s),[D]:s=>C(s)||w(s)||I(s)},ge=["onClick"],Ce=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],ke=["aria-hidden"],we=["aria-hidden"],Ie=["aria-hidden"],_="ElSwitch",Se=A({name:_}),Ve=A({...Se,props:ye,emits:be,setup(s,{expose:H,emit:f}){const t=s,L=$(),{formItem:m}=x(),W=ee(),i=ae("switch");te({from:'"value"',replacement:'"model-value" or "v-model"',scope:_,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},u(()=>{var e;return!!((e=L.vnode.props)!=null&&e.value)}));const{inputId:j}=ie(t,{formItemContext:m}),h=ne(u(()=>t.loading)),k=S(t.modelValue!==!1),p=S(),G=S(),Q=u(()=>[i.b(),i.m(W.value),i.is("disabled",h.value),i.is("checked",n.value)]),q=u(()=>({width:oe(t.width)}));V(()=>t.modelValue,()=>{k.value=!0}),V(()=>t.value,()=>{k.value=!1});const z=u(()=>k.value?t.modelValue:t.value),n=u(()=>z.value===t.activeValue);[t.activeValue,t.inactiveValue].includes(z.value)||(f(B,t.inactiveValue),f(P,t.inactiveValue),f(D,t.inactiveValue)),V(n,e=>{var l;p.value.checked=e,t.validateEvent&&((l=m==null?void 0:m.validate)==null||l.call(m,"change").catch(X=>se()))});const y=()=>{const e=n.value?t.inactiveValue:t.activeValue;f(B,e),f(P,e),f(D,e),fe(()=>{p.value.checked=n.value})},F=()=>{if(h.value)return;const{beforeChange:e}=t;if(!e){y();return}const l=e();[U(l),C(l)].includes(!0)||pe(_,"beforeChange must return type `Promise<boolean>` or `boolean`"),U(l)?l.then(K=>{K&&y()}).catch(K=>{}):l&&y()},J=u(()=>i.cssVarBlock({...t.activeColor?{"on-color":t.activeColor}:null,...t.inactiveColor?{"off-color":t.inactiveColor}:null,...t.borderColor?{"border-color":t.borderColor}:null})),R=()=>{var e,l;(l=(e=p.value)==null?void 0:e.focus)==null||l.call(e)};return le(()=>{p.value.checked=n.value}),H({focus:R,checked:n}),(e,l)=>(o(),d("div",{class:r(a(Q)),style:O(a(J)),onClick:de(F,["prevent"])},[T("input",{id:a(j),ref_key:"input",ref:p,class:r(a(i).e("input")),type:"checkbox",role:"switch","aria-checked":a(n),"aria-disabled":a(h),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:a(h),tabindex:e.tabindex,onChange:y,onKeydown:re(F,["enter"])},null,42,Ce),!e.inlinePrompt&&(e.inactiveIcon||e.inactiveText)?(o(),d("span",{key:0,class:r([a(i).e("label"),a(i).em("label","left"),a(i).is("active",!a(n))])},[e.inactiveIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.inactiveIcon)))]),_:1})):c("v-if",!0),!e.inactiveIcon&&e.inactiveText?(o(),d("span",{key:1,"aria-hidden":a(n)},N(e.inactiveText),9,ke)):c("v-if",!0)],2)):c("v-if",!0),T("span",{ref_key:"core",ref:G,class:r(a(i).e("core")),style:O(a(q))},[e.inlinePrompt?(o(),d("div",{key:0,class:r(a(i).e("inner"))},[e.activeIcon||e.inactiveIcon?(o(),v(a(g),{key:0,class:r(a(i).is("icon"))},{default:b(()=>[(o(),v(E(a(n)?e.activeIcon:e.inactiveIcon)))]),_:1},8,["class"])):e.activeText||e.inactiveText?(o(),d("span",{key:1,class:r(a(i).is("text")),"aria-hidden":!a(n)},N(a(n)?e.activeText:e.inactiveText),11,we)):c("v-if",!0)],2)):c("v-if",!0),T("div",{class:r(a(i).e("action"))},[e.loading?(o(),v(a(g),{key:0,class:r(a(i).is("loading"))},{default:b(()=>[ce(a(ue))]),_:1},8,["class"])):c("v-if",!0)],2)],6),!e.inlinePrompt&&(e.activeIcon||e.activeText)?(o(),d("span",{key:1,class:r([a(i).e("label"),a(i).em("label","right"),a(i).is("active",a(n))])},[e.activeIcon?(o(),v(a(g),{key:0},{default:b(()=>[(o(),v(E(e.activeIcon)))]),_:1})):c("v-if",!0),!e.activeIcon&&e.activeText?(o(),d("span",{key:1,"aria-hidden":!a(n)},N(e.activeText),9,Ie)):c("v-if",!0)],2)):c("v-if",!0)],14,ge))}});var Te=ve(Ve,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]]);const Pe=me(Te);export{Pe as E};
