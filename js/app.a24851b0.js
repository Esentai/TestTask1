(function(t){function e(e){for(var s,i,u=e[0],o=e[1],c=e[2],p=0,d=[];p<u.length;p++)i=u[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);l&&l(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],s=!0,u=1;u<r.length;u++){var o=r[u];0!==a[o]&&(s=!1)}s&&(n.splice(e--,1),t=i(i.s=r[0]))}return t}var s={},a={app:0},n=[];function i(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=s,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(r,s,function(e){return t[e]}.bind(null,s));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/ TestTask1 /";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],o=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=o;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},3686:function(t,e,r){},"4f4e":function(t,e,r){t.exports=r.p+"img/checked.f1286e9a.png"},"56d7":function(t,e,r){"use strict";r.r(e);r("e623"),r("e379"),r("5dc8"),r("37e1");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"form"},[r("h1",{staticClass:"title"},[t._v("Cоздание клиента")]),r("progressBar",{attrs:{currentStep:t.currentStep}}),1===t.currentStep?r("step1",{on:{status:t.stepStatus}}):t._e(),2===t.currentStep?r("step2",{on:{status:t.stepStatus}}):t._e(),3===t.currentStep?r("step3",{on:{status:t.stepStatus}}):t._e(),4===t.currentStep?r("success"):t._e()],1)])},n=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ol",{staticClass:"progress"},[r("li",{class:{"is-active":1===t.currentStep,"is-complete":t.currentStep>1},attrs:{"data-step":"1"}},[t._v(" Личные данные ")]),r("li",{class:{"is-active":2===t.currentStep,"is-complete":t.currentStep>2},attrs:{"data-step":"2"}},[t._v(" Адрес ")]),r("li",{staticClass:" progress__last",class:{"is-active":3===t.currentStep,"is-complete":t.currentStep>3},attrs:{"data-step":"3"}},[t._v(" Паспорт ")])])},u=[],o={name:"progressBar",props:["currentStep"]},c=o,l=(r("70b2"),r("2877")),p=Object(l["a"])(c,i,u,!1,null,"381c814c",null),d=p.exports,m=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"inputs",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"input",class:{hasError:t.$v.lastName.$error},attrs:{type:"text",placeholder:"Фамилия*"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.firstName,expression:"firstName"}],staticClass:"input",class:{hasError:t.$v.firstName.$error},attrs:{type:"text",placeholder:"Имя*"},domProps:{value:t.firstName},on:{input:function(e){e.target.composing||(t.firstName=e.target.value)}}}),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Отчество"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dateOfBirth,expression:"dateOfBirth"}],staticClass:"input",class:{hasError:t.$v.dateOfBirth.$error},attrs:{type:"text",onfocus:"(this.type = 'date')",placeholder:"Дата рождения*"},domProps:{value:t.dateOfBirth},on:{input:function(e){e.target.composing||(t.dateOfBirth=e.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.phoneNumber,expression:"phoneNumber"}],staticClass:"input",class:{hasError:t.$v.phoneNumber.$error},attrs:{type:"number",placeholder:"Номер телефона*"},domProps:{value:t.phoneNumber},on:{input:function(e){e.target.composing||(t.phoneNumber=e.target.value)}}}),r("label",{staticClass:"input_label",attrs:{for:"group"}},[t._v("Группа клиентов*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.groupName,expression:"groupName"}],staticClass:"input multiple",class:{hasError:t.$v.groupName.$error},attrs:{multiple:"",id:"group"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.groupName=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"vip"}},[t._v("VIP")]),r("option",{attrs:{value:"problems"}},[t._v("Проблемные")]),r("option",{attrs:{value:"oms"}},[t._v("ОМС")])]),r("label",{staticClass:"input_label",attrs:{for:"doctor"}},[t._v("Лечащий врач")]),t._m(0),t._m(1),r("button",{staticClass:"step_btn",attrs:{type:"submit"}},[t._v("Следующий шаг")])])},f=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("select",{staticClass:"input",attrs:{name:"doctor",id:"doctor"}},[r("option",{attrs:{value:"",selected:"",disabled:"",hidden:""}},[t._v("Не выбрано")]),r("option",{attrs:{value:""}},[t._v("Иванов")]),r("option",{attrs:{value:""}},[t._v("Захаров")]),r("option",{attrs:{value:""}},[t._v("Чернышева")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"checkbox"},[r("input",{attrs:{id:"sendSMS",type:"checkbox"}}),r("label",{attrs:{for:"sendSMS"}},[t._v("Не отправлять СМС")])])}],v=r("b5ae"),h={name:"step1",data:function(){return{lastName:"",firstName:"",dateOfBirth:"",phoneNumber:"",groupName:[]}},validations:{lastName:{required:v["required"],min:Object(v["minLength"])(2)},firstName:{required:v["required"],min:Object(v["minLength"])(2)},dateOfBirth:{required:v["required"]},phoneNumber:{required:v["required"],max:Object(v["maxLength"])(11)},groupName:{required:v["required"]}},methods:{submit:function(){this.$v.$touch(),this.$v.$error||this.$emit("status",!0)}}},b=h,_=(r("9e4f"),Object(l["a"])(b,m,f,!1,null,"37c1fdd1",null)),g=_.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"inputs",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("input",{staticClass:"input",attrs:{type:"number",placeholder:"Индекс"}}),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Страна"}}),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Область"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"input",class:{hasError:t.$v.city.$error},attrs:{type:"text",placeholder:"Город*"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Улица"}}),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Дом"}}),r("button",{staticClass:"step_btn",attrs:{type:"submit"}},[t._v("Следующий шаг")])])},$=[],x={name:"step2",data:function(){return{city:""}},validations:{city:{required:v["required"],min:Object(v["minLength"])(2)}},methods:{submit:function(){this.$v.$touch(),this.$v.$error||this.$emit("status",!0)}}},C=x,N=(r("5d92"),Object(l["a"])(C,y,$,!1,null,"39bc2bf1",null)),O=N.exports,S=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("form",{staticClass:"inputs",on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[r("label",{staticClass:"input_label",attrs:{for:"type"}},[t._v("Тип документа*")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.documentType,expression:"documentType"}],staticClass:"input",class:{hasError:t.$v.documentType.$error},attrs:{id:"type"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.documentType=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",selected:"",disabled:"",hidden:""}},[t._v("Не выбрано")]),r("option",{attrs:{value:"passport"}},[t._v("Паспорт")]),r("option",{attrs:{value:"BC"}},[t._v("Свидетельство о рождении")]),r("option",{attrs:{value:"driversLicense"}},[t._v("Вод. удостоверение")])]),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Серия"}}),r("input",{staticClass:"input",attrs:{type:"number",placeholder:"Номер"}}),r("input",{staticClass:"input",attrs:{type:"text",placeholder:"Кем выдан"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.dateOfIssue,expression:"dateOfIssue"}],staticClass:"input",class:{hasError:t.$v.dateOfIssue.$error},attrs:{type:"text",onfocus:"(this.type = 'date')",placeholder:"Дата выдачи*"},domProps:{value:t.dateOfIssue},on:{input:function(e){e.target.composing||(t.dateOfIssue=e.target.value)}}}),r("button",{staticClass:"step_btn",attrs:{type:"submit"}},[t._v("Создать")])])},j=[],w={name:"step3",data:function(){return{documentType:"",dateOfIssue:""}},validations:{documentType:{required:v["required"]},dateOfIssue:{required:v["required"]}},methods:{submit:function(){this.$v.$touch(),this.$v.$error||this.$emit("status",!0)}}},E=w,q=(r("ed0a"),Object(l["a"])(E,S,j,!1,null,"b7d49182",null)),P=q.exports,B=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"success"},[s("h3",{staticClass:"title"},[t._v("Вы успешно создали клиента")]),s("img",{staticClass:"success_icon",attrs:{src:r("4f4e"),alt:""}})])}],I={name:"success"},k=I,M=(r("58e2"),Object(l["a"])(k,B,T,!1,null,"3ca70a16",null)),L=M.exports,A={name:"App",data:function(){return{currentStep:1}},components:{progressBar:d,step1:g,step2:O,step3:P,success:L},methods:{stepStatus:function(t){t&&this.$data.currentStep++}}},D=A,J=(r("cf25"),Object(l["a"])(D,a,n,!1,null,null,null)),V=J.exports,z=r("1dce"),F=r.n(z);s["a"].config.productionTip=!1,s["a"].config.devtools=!0,s["a"].use(F.a),new s["a"]({render:function(t){return t(V)}}).$mount("#app")},"58e2":function(t,e,r){"use strict";r("8636")},"5d92":function(t,e,r){"use strict";r("3686")},6790:function(t,e,r){},"70b2":function(t,e,r){"use strict";r("6790")},8636:function(t,e,r){},"9e4f":function(t,e,r){"use strict";r("eb10")},cf25:function(t,e,r){"use strict";r("fea6")},d1e7:function(t,e,r){},eb10:function(t,e,r){},ed0a:function(t,e,r){"use strict";r("d1e7")},fea6:function(t,e,r){}});
//# sourceMappingURL=app.a24851b0.js.map