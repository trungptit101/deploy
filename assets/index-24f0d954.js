import{bF as R,bG as q,bd as be,b8 as ve,bg as me,bf as fe,bH as he,ar as X,a5 as U,H as K,a4 as V,O as E,L as p,aB as G,ab as ke,a7 as T,a6 as Q,I as Y,ad as Z,ah as _,r as z,ap as I,b5 as pe,bI as A,a8 as H,aa as j,d as L,aF as ee,K as P,a as y,e as ae,f as ne,b as J,v as x,i as u,w,c as C,a0 as $,bJ as F,M as O,F as ge,y as le,t as te,h as D,ae as oe,N as M,ag as xe,C as ye,D as Ce,J as Se,a_ as Le,W as Be,X as se}from"./index-43fa284a.js";import{U as N}from"./event-9519ab40.js";import{i as Ie}from"./index-45ffb881.js";import{m as Ee,j as we}from"./index-4dd40978.js";import{f as $e}from"./flatten-2355c2af.js";function Fe(e){return e}function Ne(e,a,l){switch(l.length){case 0:return e.call(a);case 1:return e.call(a,l[0]);case 2:return e.call(a,l[0],l[1]);case 3:return e.call(a,l[0],l[1],l[2])}return e.apply(a,l)}var Ve=800,Ge=16,ze=Date.now;function De(e){var a=0,l=0;return function(){var n=ze(),s=Ge-(n-l);if(l=n,s>0){if(++a>=Ve)return arguments[0]}else a=0;return e.apply(void 0,arguments)}}function Te(e){return function(){return e}}var Pe=R?function(e,a){return R(e,"toString",{configurable:!0,enumerable:!1,value:Te(a),writable:!0})}:Fe;const Oe=Pe;var Me=De(Oe);const Re=Me;var W=Math.max;function Ue(e,a,l){return a=W(a===void 0?e.length-1:a,0),function(){for(var n=arguments,s=-1,d=W(n.length-a,0),c=Array(d);++s<d;)c[s]=n[a+s];s=-1;for(var t=Array(a+1);++s<a;)t[s]=n[s];return t[a]=l(c),Ne(e,this,t)}}function Ke(e){return Re(Ue(e,void 0,$e),e+"")}function Ae(e,a){return e!=null&&a in Object(e)}function He(e,a,l){a=q(a,e);for(var n=-1,s=a.length,d=!1;++n<s;){var c=be(a[n]);if(!(d=e!=null&&l(e,c)))break;e=e[c]}return d||++n!=s?d:(s=e==null?0:e.length,!!s&&Ee(s)&&ve(c,s)&&(me(e)||we(e)))}function Je(e,a){return e!=null&&He(e,a,Ae)}function We(e,a,l){for(var n=-1,s=a.length,d={};++n<s;){var c=a[n],t=fe(e,c);l(t,c)&&he(d,q(c,e),t)}return d}function qe(e,a){return We(e,a,function(l,n){return Je(e,n)})}var Xe=Ke(function(e,a){return e==null?{}:qe(e,a)});const Qe=Xe,ue={modelValue:{type:[Number,String,Boolean],default:void 0},label:{type:[String,Boolean,Number,Object]},indeterminate:Boolean,disabled:Boolean,checked:Boolean,name:{type:String,default:void 0},trueLabel:{type:[String,Number],default:void 0},falseLabel:{type:[String,Number],default:void 0},id:{type:String,default:void 0},controls:{type:String,default:void 0},border:Boolean,size:X,tabindex:[String,Number],validateEvent:{type:Boolean,default:!0}},ie={[N]:e=>U(e)||K(e)||V(e),change:e=>U(e)||K(e)||V(e)},B=Symbol("checkboxGroupContextKey"),Ye=({model:e,isChecked:a})=>{const l=E(B,void 0),n=p(()=>{var d,c;const t=(d=l==null?void 0:l.max)==null?void 0:d.value,m=(c=l==null?void 0:l.min)==null?void 0:c.value;return!G(t)&&e.value.length>=t&&!a.value||!G(m)&&e.value.length<=m&&a.value});return{isDisabled:ke(p(()=>(l==null?void 0:l.disabled.value)||n.value)),isLimitDisabled:n}},Ze=(e,{model:a,isLimitExceeded:l,hasOwnLabel:n,isDisabled:s,isLabeledByFormItem:d})=>{const c=E(B,void 0),{formItem:t}=T(),{emit:m}=Q();function o(r){var b,v;return r===e.trueLabel||r===!0?(b=e.trueLabel)!=null?b:!0:(v=e.falseLabel)!=null?v:!1}function f(r,b){m("change",o(r),b)}function k(r){if(l.value)return;const b=r.target;m("change",o(b.checked),r)}async function S(r){l.value||!n.value&&!s.value&&d.value&&(r.composedPath().some(h=>h.tagName==="LABEL")||(a.value=o([!1,e.falseLabel].includes(a.value)),await _(),f(a.value,r)))}const i=p(()=>(c==null?void 0:c.validateEvent)||e.validateEvent);return Y(()=>e.modelValue,()=>{i.value&&(t==null||t.validate("change").catch(r=>Z()))}),{handleChange:k,onClickRoot:S}},_e=e=>{const a=z(!1),{emit:l}=Q(),n=E(B,void 0),s=p(()=>G(n)===!1),d=z(!1);return{model:p({get(){var t,m;return s.value?(t=n==null?void 0:n.modelValue)==null?void 0:t.value:(m=e.modelValue)!=null?m:a.value},set(t){var m,o;s.value&&I(t)?(d.value=((m=n==null?void 0:n.max)==null?void 0:m.value)!==void 0&&t.length>(n==null?void 0:n.max.value),d.value===!1&&((o=n==null?void 0:n.changeEvent)==null||o.call(n,t))):(l(N,t),a.value=t)}}),isGroup:s,isLimitExceeded:d}},je=(e,a,{model:l})=>{const n=E(B,void 0),s=z(!1),d=p(()=>{const o=l.value;return V(o)?o:I(o)?pe(e.label)?o.map(A).some(f=>Ie(f,e.label)):o.map(A).includes(e.label):o!=null?o===e.trueLabel:!!o}),c=H(p(()=>{var o;return(o=n==null?void 0:n.size)==null?void 0:o.value}),{prop:!0}),t=H(p(()=>{var o;return(o=n==null?void 0:n.size)==null?void 0:o.value})),m=p(()=>!!(a.default||e.label));return{checkboxButtonSize:c,isChecked:d,isFocused:s,checkboxSize:t,hasOwnLabel:m}},ea=(e,{model:a})=>{function l(){I(a.value)&&!a.value.includes(e.label)?a.value.push(e.label):a.value=e.trueLabel||!0}e.checked&&l()},re=(e,a)=>{const{formItem:l}=T(),{model:n,isGroup:s,isLimitExceeded:d}=_e(e),{isFocused:c,isChecked:t,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f}=je(e,a,{model:n}),{isDisabled:k}=Ye({model:n,isChecked:t}),{inputId:S,isLabeledByFormItem:i}=j(e,{formItemContext:l,disableIdGeneration:f,disableIdManagement:s}),{handleChange:r,onClickRoot:b}=Ze(e,{model:n,isLimitExceeded:d,hasOwnLabel:f,isDisabled:k,isLabeledByFormItem:i});return ea(e,{model:n}),{inputId:S,isLabeledByFormItem:i,isChecked:t,isDisabled:k,isFocused:c,checkboxButtonSize:m,checkboxSize:o,hasOwnLabel:f,model:n,handleChange:r,onClickRoot:b}},aa=["tabindex","role","aria-checked"],na=["id","aria-hidden","name","tabindex","disabled","true-value","false-value"],la=["id","aria-hidden","disabled","value","name","tabindex"],ta=L({name:"ElCheckbox"}),oa=L({...ta,props:ue,emits:ie,setup(e){const a=e,l=ee(),{inputId:n,isLabeledByFormItem:s,isChecked:d,isDisabled:c,isFocused:t,checkboxSize:m,hasOwnLabel:o,model:f,handleChange:k,onClickRoot:S}=re(a,l),i=P("checkbox"),r=p(()=>[i.b(),i.m(m.value),i.is("disabled",c.value),i.is("bordered",a.border),i.is("checked",d.value)]),b=p(()=>[i.e("input"),i.is("disabled",c.value),i.is("checked",d.value),i.is("indeterminate",a.indeterminate),i.is("focus",t.value)]);return(v,h)=>(y(),ae(oe(!u(o)&&u(s)?"span":"label"),{class:x(u(r)),"aria-controls":v.indeterminate?v.controls:null,onClick:u(S)},{default:ne(()=>[J("span",{class:x(u(b)),tabindex:v.indeterminate?0:void 0,role:v.indeterminate?"checkbox":void 0,"aria-checked":v.indeterminate?"mixed":void 0},[v.trueLabel||v.falseLabel?w((y(),C("input",{key:0,id:u(n),"onUpdate:modelValue":h[0]||(h[0]=g=>$(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox","aria-hidden":v.indeterminate?"true":"false",name:v.name,tabindex:v.tabindex,disabled:u(c),"true-value":v.trueLabel,"false-value":v.falseLabel,onChange:h[1]||(h[1]=(...g)=>u(k)&&u(k)(...g)),onFocus:h[2]||(h[2]=g=>t.value=!0),onBlur:h[3]||(h[3]=g=>t.value=!1)},null,42,na)),[[F,u(f)]]):w((y(),C("input",{key:1,id:u(n),"onUpdate:modelValue":h[4]||(h[4]=g=>$(f)?f.value=g:null),class:x(u(i).e("original")),type:"checkbox","aria-hidden":v.indeterminate?"true":"false",disabled:u(c),value:v.label,name:v.name,tabindex:v.tabindex,onChange:h[5]||(h[5]=(...g)=>u(k)&&u(k)(...g)),onFocus:h[6]||(h[6]=g=>t.value=!0),onBlur:h[7]||(h[7]=g=>t.value=!1)},null,42,la)),[[F,u(f)]]),J("span",{class:x(u(i).e("inner"))},null,2)],10,aa),u(o)?(y(),C("span",{key:0,class:x(u(i).e("label"))},[O(v.$slots,"default"),v.$slots.default?D("v-if",!0):(y(),C(ge,{key:0},[le(te(v.label),1)],64))],2)):D("v-if",!0)]),_:3},8,["class","aria-controls","onClick"]))}});var sa=M(oa,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox.vue"]]);const ua=["name","tabindex","disabled","true-value","false-value"],ia=["name","tabindex","disabled","value"],ra=L({name:"ElCheckboxButton"}),da=L({...ra,props:ue,emits:ie,setup(e){const a=e,l=ee(),{isFocused:n,isChecked:s,isDisabled:d,checkboxButtonSize:c,model:t,handleChange:m}=re(a,l),o=E(B,void 0),f=P("checkbox"),k=p(()=>{var i,r,b,v;const h=(r=(i=o==null?void 0:o.fill)==null?void 0:i.value)!=null?r:"";return{backgroundColor:h,borderColor:h,color:(v=(b=o==null?void 0:o.textColor)==null?void 0:b.value)!=null?v:"",boxShadow:h?`-1px 0 0 0 ${h}`:void 0}}),S=p(()=>[f.b("button"),f.bm("button",c.value),f.is("disabled",d.value),f.is("checked",s.value),f.is("focus",n.value)]);return(i,r)=>(y(),C("label",{class:x(u(S))},[i.trueLabel||i.falseLabel?w((y(),C("input",{key:0,"onUpdate:modelValue":r[0]||(r[0]=b=>$(t)?t.value=b:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),"true-value":i.trueLabel,"false-value":i.falseLabel,onChange:r[1]||(r[1]=(...b)=>u(m)&&u(m)(...b)),onFocus:r[2]||(r[2]=b=>n.value=!0),onBlur:r[3]||(r[3]=b=>n.value=!1)},null,42,ua)),[[F,u(t)]]):w((y(),C("input",{key:1,"onUpdate:modelValue":r[4]||(r[4]=b=>$(t)?t.value=b:null),class:x(u(f).be("button","original")),type:"checkbox",name:i.name,tabindex:i.tabindex,disabled:u(d),value:i.label,onChange:r[5]||(r[5]=(...b)=>u(m)&&u(m)(...b)),onFocus:r[6]||(r[6]=b=>n.value=!0),onBlur:r[7]||(r[7]=b=>n.value=!1)},null,42,ia)),[[F,u(t)]]),i.$slots.default||i.label?(y(),C("span",{key:2,class:x(u(f).be("button","inner")),style:xe(u(s)?u(k):void 0)},[O(i.$slots,"default",{},()=>[le(te(i.label),1)])],6)):D("v-if",!0)],2))}});var de=M(da,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-button.vue"]]);const ca=ye({modelValue:{type:Ce(Array),default:()=>[]},disabled:Boolean,min:Number,max:Number,size:X,label:String,fill:String,textColor:String,tag:{type:String,default:"div"},validateEvent:{type:Boolean,default:!0}}),ba={[N]:e=>I(e),change:e=>I(e)},va=L({name:"ElCheckboxGroup"}),ma=L({...va,props:ca,emits:ba,setup(e,{emit:a}){const l=e,n=P("checkbox"),{formItem:s}=T(),{inputId:d,isLabeledByFormItem:c}=j(l,{formItemContext:s}),t=async o=>{a(N,o),await _(),a("change",o)},m=p({get(){return l.modelValue},set(o){t(o)}});return Se(B,{...Qe(Le(l),["size","min","max","disabled","validateEvent","fill","textColor"]),modelValue:m,changeEvent:t}),Y(()=>l.modelValue,()=>{l.validateEvent&&(s==null||s.validate("change").catch(o=>Z()))}),(o,f)=>{var k;return y(),ae(oe(o.tag),{id:u(d),class:x(u(n).b("group")),role:"group","aria-label":u(c)?void 0:o.label||"checkbox-group","aria-labelledby":u(c)?(k=u(s))==null?void 0:k.labelId:void 0},{default:ne(()=>[O(o.$slots,"default")]),_:3},8,["id","class","aria-label","aria-labelledby"])}}});var ce=M(ma,[["__file","/home/runner/work/element-plus/element-plus/packages/components/checkbox/src/checkbox-group.vue"]]);const xa=Be(sa,{CheckboxButton:de,CheckboxGroup:ce});se(de);se(ce);export{xa as E,Je as h,Fe as i,Ue as o,Re as s};
