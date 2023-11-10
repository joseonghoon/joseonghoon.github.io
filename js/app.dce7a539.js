(function(){"use strict";var e={6531:function(e,t,o){var r=o(6369),n=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("TodoHeader"),t("TodoInput"),t("TodoList"),t("TodoFooter")],1)},a=[],s=function(){var e=this,t=e._self._c;return t("header",{class:{"dark-mode":e.isDarkMode}},[t("h1",[e._v("ToDo")]),t("div",{staticClass:"option"},[t("label",{staticClass:"switch"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.isDarkMode,expression:"isDarkMode"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.isDarkMode)?e._i(e.isDarkMode,null)>-1:e.isDarkMode},on:{change:[function(t){var o=e.isDarkMode,r=t.target,n=!!r.checked;if(Array.isArray(o)){var a=null,s=e._i(o,a);r.checked?s<0&&(e.isDarkMode=o.concat([a])):s>-1&&(e.isDarkMode=o.slice(0,s).concat(o.slice(s+1)))}else e.isDarkMode=n},e.saveDarkModeState]}}),t("span",{staticClass:"slider"})]),t("p",[e._v(e._s(e.currentDateWithDay))])])])},i=[],l={computed:{currentDateWithDay(){const e=["일","월","화","수","목","금","토"],t=new Date,o=t.toLocaleDateString(),r=e[t.getDay()];return`${o} (${r})`}},data(){return{isDarkMode:!1}},mounted(){this.loadDarkModeState()},methods:{saveDarkModeState(){localStorage.setItem("isDarkMode",this.isDarkMode.toString()),location.reload()},loadDarkModeState(){const e=localStorage.getItem("isDarkMode");null!==e&&(this.isDarkMode=JSON.parse(e))}}},d=l,c=o(1001),u=(0,c.Z)(d,s,i,!1,null,"44932753",null),m=u.exports,f=function(){var e=this,t=e._self._c;return t("div",{staticClass:"inputBox shadow",class:{"dark-mode":e.isDarkMode}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.newTodoItem,expression:"newTodoItem"}],attrs:{type:"text",placeholder:"Input Your List"},domProps:{value:e.newTodoItem},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo.apply(null,arguments)},input:function(t){t.target.composing||(e.newTodoItem=t.target.value)}}}),t("span",{staticClass:"addContainer",on:{click:e.addTodo}},[t("i",{staticClass:"fas fa-plus addBtn"})])])},p=[],h={data(){return{newTodoItem:"",showModal:!1,isDarkMode:!1}},methods:{addTodo(){""!==this.newTodoItem?(this.$store.commit("addOnItem",this.newTodoItem),this.clearInput()):this.showModal=!this.showModal},clearInput(){this.newTodoItem=""}},mounted(){const e=localStorage.getItem("isDarkMode");null!==e&&(this.isDarkMode=JSON.parse(e))}},v=h,g=(0,c.Z)(v,f,p,!1,null,"bc77c112",null),k=g.exports,I=function(){var e=this,t=e._self._c;return t("div",{class:{"dark-mode":e.isDarkMode}},[t("transition-group",{attrs:{name:"list",tag:"ul"}},e._l(this.storedTodoItems,(function(o,r){return t("li",{key:o.item,staticClass:"shadow"},[t("span",{staticClass:"checkBtn",class:{checkBtnCompleted:o.completed},on:{click:function(t){return e.toggleComplete({todoItem:o,index:r})}}},[t("i",{staticClass:"fas fa-check"})]),t("span",{class:{textCompleted:o.completed}},[e._v(e._s(o.item))]),t("span",{staticClass:"removeBtn",on:{click:function(t){return e.removeTodo({todoItem:o,index:r})}}},[t("i",{staticClass:"fas fa-trash-alt"})])])})),0)],1)},D=[],y=o(6971),M={data(){return{isDarkMode:!1}},methods:{...(0,y.OI)({removeTodo:"removeOneItem",toggleComplete:"toggleOneItem"})},computed:{...(0,y.Se)(["storedTodoItems"])},mounted(){const e=localStorage.getItem("isDarkMode");null!==e&&(this.isDarkMode=JSON.parse(e))}},S=M,T=(0,c.Z)(S,I,D,!1,null,"383a7ca6",null),O=T.exports,w=function(){var e=this,t=e._self._c;return t("div",{staticClass:"clearAllContainer"},[t("b-button",{attrs:{variant:"outline-danger"},on:{click:e.clearTodo}},[e._v("Clear ALL")])],1)},_=[],b={methods:{...(0,y.OI)({clearTodo:"clearAllItems"})}},x=b,C=(0,c.Z)(x,w,_,!1,null,"3828261e",null),j=C.exports,A={components:{TodoHeader:m,TodoInput:k,TodoList:O,TodoFooter:j}},P=A,N=(0,c.Z)(P,n,a,!1,null,null,null),Z=N.exports;o(7658);const J={fetch(){const e=[];if(localStorage.length>0)for(let t=0;t<localStorage.length;t++)e.push(JSON.parse(localStorage.getItem(localStorage.key(t))));return e}},L={todoItems:J.fetch()},B={storedTodoItems(e){return e.todoItems}},$={addOnItem(e,t){const o={completed:!1,item:t};localStorage.setItem(t,JSON.stringify(o)),e.todoItems.push(o)},removeOneItem(e,t){localStorage.removeItem(t.todoItem.item),e.todoItems.splice(t.index,1)},toggleOneItem(e,t){e.todoItems[t.index].completed=!e.todoItems[t.index].completed,localStorage.removeItem(t.todoItem.item),localStorage.setItem(t.todoItem.item,JSON.stringify(t.todoItem))},clearAllItems(e){const t=Object.keys(localStorage).filter((e=>"isDarkMode"!==e));t.forEach((e=>{localStorage.removeItem(e)})),e.todoItems=[]}};var E={state:L,getters:B,mutations:$};r["default"].use(y.ZP);const F=new y.ZP.Store({modules:{todoApp:E}});var H=o(6882);o(7024);r["default"].use(H.ZPm),r["default"].config.productionTip=!1,new r["default"]({store:F,render:e=>e(Z)}).$mount("#app")}},t={};function o(r){var n=t[r];if(void 0!==n)return n.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,o),a.exports}o.m=e,function(){var e=[];o.O=function(t,r,n,a){if(!r){var s=1/0;for(c=0;c<e.length;c++){r=e[c][0],n=e[c][1],a=e[c][2];for(var i=!0,l=0;l<r.length;l++)(!1&a||s>=a)&&Object.keys(o.O).every((function(e){return o.O[e](r[l])}))?r.splice(l--,1):(i=!1,a<s&&(s=a));if(i){e.splice(c--,1);var d=n();void 0!==d&&(t=d)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,n,a]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var r in t)o.o(t,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){var e={143:0};o.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,a,s=r[0],i=r[1],l=r[2],d=0;if(s.some((function(t){return 0!==e[t]}))){for(n in i)o.o(i,n)&&(o.m[n]=i[n]);if(l)var c=l(o)}for(t&&t(r);d<s.length;d++)a=s[d],o.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return o.O(c)},r=self["webpackChunkvue_todo"]=self["webpackChunkvue_todo"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(6531)}));r=o.O(r)})();
//# sourceMappingURL=app.dce7a539.js.map