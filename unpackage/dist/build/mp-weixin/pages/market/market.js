(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/market/market"],{"0536":function(n,t,e){"use strict";e.r(t);var o=e("086b"),u=e("fa3f");for(var r in u)"default"!==r&&function(n){e.d(t,n,(function(){return u[n]}))}(r);e("17bd");var i,a=e("f0c5"),c=Object(a["a"])(u["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],i);t["default"]=c.exports},"086b":function(n,t,e){"use strict";var o,u=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",(function(){return u})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return o}))},"17bd":function(n,t,e){"use strict";var o=e("91fe"),u=e.n(o);u.a},"60ab":function(n,t,e){"use strict";(function(n){e("bc17");o(e("66fd"));var t=o(e("0536"));function o(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"91fe":function(n,t,e){},ed7b:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=u(e("4795"));function u(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,o,u,r,i){try{var a=n[r](i),c=a.value}catch(s){return void e(s)}a.done?t(c):Promise.resolve(c).then(o,u)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(o,u){var i=n.apply(t,e);function a(n){r(i,o,u,a,c,"next",n)}function c(n){r(i,o,u,a,c,"throw",n)}a(void 0)}))}}var a=function(){e.e("components/goodList/goodList").then(function(){return resolve(e("2948"))}.bind(null,e)).catch(e.oe)},c={data:function(){return{number:1,goods:[]}},components:{"good-list":a},methods:{requestGood:function(){var n=this;return i(o.default.mark((function t(){var e;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$myRequest({url:"/api/getgoods?pageindex="+n.number});case 2:e=t.sent,n.goods=e.data.message;case 4:case"end":return t.stop()}}),t)})))()},navigateToGoodsDetail:function(t){n.navigateTo({url:"../goodsDetail/goodsDetail?id="+t,success:function(n){},fail:function(){},complete:function(){}})}},onLoad:function(){this.requestGood()},onPullDownRefresh:function(){var t=this;console.log("refresh"),this.number=1,setTimeout((function(){t.requestGood(),n.stopPullDownRefresh()}),2e3)},onReachBottom:function(){console.log("到底了"),this.number<2&&this.number++,console.log(this.number),this.requestGood()}};t.default=c}).call(this,e("543d")["default"])},fa3f:function(n,t,e){"use strict";e.r(t);var o=e("ed7b"),u=e.n(o);for(var r in o)"default"!==r&&function(n){e.d(t,n,(function(){return o[n]}))}(r);t["default"]=u.a}},[["60ab","common/runtime","common/vendor"]]]);