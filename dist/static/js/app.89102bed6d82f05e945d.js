webpackJsonp([0],[,,,function(t,e,s){"use strict";var a=s(13),r=s(16);e.a={name:"app",components:{Hello:a.a,Potreb:r.a}}},function(t,e,s){"use strict";e.a={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js PWA"}}}},function(t,e,s){"use strict";e.a={name:"Potreb",data:function(){return{category:0,items:[{cat_name:"Группа Газпром",cat_id:3},{cat_name:"Приоритет",cat_id:82},{cat_name:"Розница",cat_id:2},{cat_name:"Прочие ФЛ",cat_id:0}],income:4e4,outcome:5e3,srok:36,summa:5e4,switch_insr:!0,switch_disc:!0,switch_obesp:!1,vars:[],rowsPerPageItems:[16,24,32],pagination:{rowsPerPage:16},headers:[{text:"Сумма",align:"left",value:"summa"},{text:"Срок, мес",value:"srok"},{text:"Ставка",value:"fat"},{text:"Платеж, руб",value:"carbs"},{text:"Проценты",value:"protein"},{text:"КДС",value:"iron"},{text:"Обеспечение",value:"iron"}]}},methods:{get_rate:function(t,e,s){var a=0;return 0==s?e<=12?a=9.99:3==t&&e>12&&e<=60?a=11.4:3==t&&e>60&&e<=84?a=14.25:82==t&&e>12&&e<=60?a=11.4:82==t&&e>60&&e<=84?a=14.25:2==t&&e>12&&e<=60?a=11.9:2==t&&e>60&&e<=84?a=14.25:0==t&&e>12&&e<=60&&(a=12.4):1==s&&(e<=24?a=11.4:e>24&&e<=60?a=11.4:0!==t&&e>60&&e<=84&&(a=13.75)),a},calc_pmt:function(t,e,s){t/=1200,s=s;var a=Math.pow(1+t,-s),r=Math.round(e*t/(1-a));return this.switch_insr&&(r+=.00192*e),r},decode_boolean:function(t){return 1==t?"Да":"Нет"},add_var:function(){this.vars.push({rate:this.std_rate,pmt:this.calc_pmt(this.std_rate,this.summa,this.srok),kds:this.decode_boolean(this.switch_insr),obesp:this.decode_boolean(this.switch_obesp),proc:this.profit,srok:this.srok,summa:this.summa})}},computed:{std_rate:function(){var t=0;return this.switch_insr||(t+=3),this.switch_disc||(t+=1),this.get_rate(this.category,this.srok,this.switch_obesp)+t},pmt:function(){var t=this;return function(e){return t.calc_pmt(e,t.summa,t.srok)}},profit:function(){return this.pmt(this.std_rate)*this.srok-this.summa}},created:function(){}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(2),r=s(10),i=s(20),n=s.n(i),o=s(21);s.n(o);a.default.use(n.a),a.default.config.productionTip=!1,new a.default({el:"#app",template:"<App/>",components:{App:r.a}})},,,,function(t,e,s){"use strict";function a(t){s(11)}var r=s(3),i=s(19),n=s(1),o=a,l=n(r.a,i.a,!1,o,null,null);e.a=l.exports},function(t,e){},,function(t,e,s){"use strict";function a(t){s(14)}var r=s(4),i=s(15),n=s(1),o=a,l=n(r.a,i.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._v(" "),s("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),s("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},r=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://chat.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("Vue Community Chat")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank",rel:"noopener"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),t._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),t._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],i={render:a,staticRenderFns:r};e.a=i},function(t,e,s){"use strict";function a(t){s(17)}var r=s(5),i=s(18),n=s(1),o=a,l=n(r.a,i.a,!1,o,null,null);e.a=l.exports},function(t,e){},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:"","grid-list-md":""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs9:""}},[s("v-text-field",{attrs:{label:"ФИО"}})],1),t._v(" "),s("v-flex",{attrs:{xs3:""}},[s("v-select",{attrs:{items:t.items,"item-text":"cat_name","item-value":"cat_id",label:"Категория клиента"},model:{value:t.category,callback:function(e){t.category=e},expression:"category"}})],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-subheader",{staticClass:"pl-0"},[t._v("Доходы")]),t._v(" "),s("v-text-field",{attrs:{type:"number"},model:{value:t.income,callback:function(e){t.income=e},expression:"income"}})],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-subheader",{staticClass:"pl-0"},[t._v("Обязательства")]),t._v(" "),s("v-text-field",{attrs:{type:"number"},model:{value:t.outcome,callback:function(e){t.outcome=e},expression:"outcome"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg2:""}},[s("v-switch",{attrs:{label:"ЗП проект"},model:{value:t.switch_disc,callback:function(e){t.switch_disc=e},expression:"switch_disc"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg2:""}},[s("v-switch",{attrs:{label:"КДС"},model:{value:t.switch_insr,callback:function(e){t.switch_insr=e},expression:"switch_insr"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:"",sm4:"",md4:"",lg2:""}},[s("v-switch",{attrs:{label:"Обеспечение"},model:{value:t.switch_obesp,callback:function(e){t.switch_obesp=e},expression:"switch_obesp"}})],1)],1)],1),t._v(" "),s("v-flex",{attrs:{xs6:""}},[s("v-subheader",{staticClass:"pl-0"},[t._v("Срок")]),t._v(" "),s("v-slider",{attrs:{max:84,"thumb-label":"always"},model:{value:t.srok,callback:function(e){t.srok=e},expression:"srok"}})],1),t._v(" "),s("v-flex",{attrs:{xs3:""}},[s("v-subheader",{staticClass:"pl-0"},[t._v("Сумма")]),t._v(" "),s("v-text-field",{attrs:{type:"number"},model:{value:t.summa,callback:function(e){t.summa=e},expression:"summa"}})],1),t._v(" "),s("v-flex",{attrs:{xs3:""}},[s("v-subheader",{staticClass:"pl-0"},[t._v("Ставка")]),t._v(" "),s("v-text-field",{model:{value:t.std_rate,callback:function(e){t.std_rate=e},expression:"std_rate"}})],1),t._v(" "),s("v-flex",{attrs:{xs12:""}},[s("h3",[t._v("Платеж: "+t._s(t.pmt(t.std_rate).toLocaleString())+" Руб")]),t._v(" "),s("h3",[t._v("Проценты: "+t._s(t.profit.toLocaleString())+" Руб")]),t._v(" "),s("v-btn",{attrs:{fab:"",dark:"",color:"indigo"},on:{click:t.add_var}},[s("v-icon",{attrs:{dark:""}},[t._v("add")])],1)],1),t._v(" "),s("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.vars,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[s("td",[t._v(t._s(e.item.summa.toLocaleString()))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.srok))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.rate))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.pmt.toLocaleString()))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.proc.toLocaleString()))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.kds))]),t._v(" "),s("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.obesp))])]}}])}),t._v(" "),s("v-flex")],1)],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("v-app",[s("v-toolbar",{attrs:{app:""}},[t._v("Vue.js PWA")]),t._v(" "),s("v-content",[s("v-container",{attrs:{fluid:""}},[s("potreb")],1)],1),t._v(" "),s("v-footer",{attrs:{app:""}},[t._v("EvgenJin")])],1)],1)},r=[],i={render:a,staticRenderFns:r};e.a=i},,function(t,e){}],[6]);
//# sourceMappingURL=app.89102bed6d82f05e945d.js.map