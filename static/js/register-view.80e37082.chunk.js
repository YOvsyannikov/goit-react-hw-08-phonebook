"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[931],{7555:function(e,a,t){t.r(a),t.d(a,{default:function(){return h}});var r=t(885),n=t(2791),s=t(9434),o=t(688),l=t(9869),i=t(5985),u=t(1095),c=t(7205),m=t(9446),d="RegisterView_form__q9n4X",f="RegisterView_textField__9HzQG",p=t(184);function h(){var e=(0,s.I0)(),a=(0,s.v9)(l.Kv),t=(0,n.useState)(""),h=(0,r.Z)(t,2),v=h[0],_=h[1],g=(0,n.useState)(""),w=(0,r.Z)(g,2),b=w[0],x=w[1],y=(0,n.useState)(""),Z=(0,r.Z)(y,2),j=Z[0],k=Z[1],C=function(e){var a=e.target,t=a.name,r=a.value;switch(t){case"name":return _(r);case"email":return x(r);case"password":return k(r);default:return}};return(0,p.jsxs)("form",{onSubmit:function(a){return a.preventDefault(),""===v.trim()||""===b.trim()||""===j.trim()?i.Am.error("\ud83d\udca9 Please fill in all fields!"):j.length<7?i.Am.info("Passwords must be at least 7 characters long!"):(e(o.authOperations.register({name:v,email:b,password:j})),_(""),x(""),void k(""))},className:d,autoComplete:"off",children:[(0,p.jsx)(u.Z,{label:"Name",variant:"outlined",color:"secondary",type:"text",name:"name",value:v,onChange:C,className:f}),(0,p.jsx)(u.Z,{label:"Email",variant:"outlined",color:"secondary",type:"email",name:"email",value:b,onChange:C,className:f}),(0,p.jsx)(u.Z,{label:"Password",variant:"outlined",color:"secondary",type:"password",name:"password",value:j,onChange:C,className:f}),!a&&(0,p.jsx)(c.Z,{variant:"contained",color:"secondary",size:"large",type:"submit",children:"Sign up"}),a&&(0,p.jsx)(m.Z,{})]})}}}]);
//# sourceMappingURL=register-view.80e37082.chunk.js.map