(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/newsList/newsList"],{"0a69":function(t,n,e){"use strict";var a=e("4d4d"),r=e.n(a);r.a},"3f10":function(t,n,e){"use strict";e.r(n);var a=e("a4eb"),r=e.n(a);for(var u in a)"default"!==u&&function(t){e.d(n,t,(function(){return a[t]}))}(u);n["default"]=r.a},"4d4d":function(t,n,e){},7919:function(t,n,e){"use strict";var a,r=function(){var t=this,n=t.$createElement,e=(t._self._c,t.__map(t.news,(function(n,e){var a=t._f("formatDate")(n.add_time);return{$orig:t.__get_orig(n),f0:a}})));t.$mp.data=Object.assign({},{$root:{l0:e}})},u=[];e.d(n,"b",(function(){return r})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){return a}))},a4eb:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},props:["news"],filters:{formatDate:function(t){var n=new Date(t),e=n.getFullYear(),a=n.getMonth().toString().padStart(2,0),r=n.getDay().toString().padStart(2,0);return e+"-"+a+"-"+r}},methods:{navigateToNewsDetail:function(t){this.$emit("navigateToNewsDetail",t)}}};n.default=a},e904:function(t,n,e){"use strict";e.r(n);var a=e("7919"),r=e("3f10");for(var u in r)"default"!==u&&function(t){e.d(n,t,(function(){return r[t]}))}(u);e("0a69");var i,o=e("f0c5"),f=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);n["default"]=f.exports}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/newsList/newsList-create-component',
    {
        'components/newsList/newsList-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("e904"))
        })
    },
    [['components/newsList/newsList-create-component']]
]);
