(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/image/image"],{2799:function(e,t,n){"use strict";var r=n("3c25"),u=n.n(r);u.a},"3c25":function(e,t,n){},5307:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=u(n("4795"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,u,a,i){try{var c=e[a](i),o=c.value}catch(s){return void n(s)}c.done?t(o):Promise.resolve(o).then(r,u)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var i=e.apply(t,n);function c(e){a(i,r,u,c,o,"next",e)}function o(e){a(i,r,u,c,o,"throw",e)}c(void 0)}))}}var c={data:function(){return{message:[],active:0,imgArr:[],imgUrlArr:[]}},methods:{getImg:function(){var e=this;return i(r.default.mark((function t(){var n;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$myRequest({url:"/api/getimgcategory"});case 2:n=t.sent,e.message=n.data.message,e.getIndex(0,e.message[0].id);case 5:case"end":return t.stop()}}),t)})))()},getIndex:function(e,t){var n=this;return i(r.default.mark((function u(){var a;return r.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n.active=e,r.next=3,n.$myRequest({url:"/api/getimages/"+t});case 3:a=r.sent,n.imgArr=a.data.message,n.imgUrlArr=a.data.message.map((function(e){return e.img_url}));case 6:case"end":return r.stop()}}),u)})))()},previewImage:function(t){console.log(this.imgUrlArr),e.previewImage({urls:this.imgUrlArr,current:t})}},onLoad:function(){this.getImg()}};t.default=c}).call(this,n("543d")["default"])},bcc8:function(e,t,n){"use strict";n.r(t);var r=n("d046"),u=n("f991");for(var a in u)"default"!==a&&function(e){n.d(t,e,(function(){return u[e]}))}(a);n("2799");var i,c=n("f0c5"),o=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],i);t["default"]=o.exports},d046:function(e,t,n){"use strict";var r,u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return r}))},f991:function(e,t,n){"use strict";n.r(t);var r=n("5307"),u=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=u.a},fe90:function(e,t,n){"use strict";(function(e){n("bc17");r(n("66fd"));var t=r(n("bcc8"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])}},[["fe90","common/runtime","common/vendor"]]]);