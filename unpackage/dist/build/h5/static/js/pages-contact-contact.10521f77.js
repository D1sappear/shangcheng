(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-contact"],{"12e7":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{markers:[{latitude:22.637068,longitude:114.063717,iconPath:"/static/image/day12/wuzi.png"}]}},methods:{telephone:function(){t.log("拨打电话"),uni.makePhoneCall({phoneNumber:"13539535474",success:function(){t.log("进行拨打")},fail:function(n){t.log("电话拨打失败",n)}})}}};n.default=e}).call(this,e("5a52")["default"])},"18df":function(t,n,e){"use strict";e.r(n);var a=e("12e7"),i=e.n(a);for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);n["default"]=i.a},"1ced":function(t,n,e){var a=e("4ce3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var i=e("4f06").default;i("4d99951d",a,!0,{sourceMap:!1,shadowMode:!1})},"4ce3":function(t,n,e){var a=e("24fb");n=a(!1),n.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.contact .header uni-image[data-v-decc9420]{width:%?750?%;height:%?350?%}.contact .header .detail .phone[data-v-decc9420]{margin-top:%?40?%}.contact .header .detail uni-view uni-text[data-v-decc9420]{display:block;width:%?710?%;height:%?100?%;margin:%?0?% %?0?% %?50?% %?20?%;border-bottom:1px solid #f0f0f0}.contact .map[data-v-decc9420]{margin:%?-20?% %?0?% %?15?% %?15?%}',""]),t.exports=n},9811:function(t,n,e){"use strict";e.r(n);var a=e("9b87"),i=e("18df");for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);e("9889");var c,s=e("f0c5"),u=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"decc9420",null,!1,a["a"],c);n["default"]=u.exports},9889:function(t,n,e){"use strict";var a=e("1ced"),i=e.n(a);i.a},"9b87":function(t,n,e){"use strict";var a,i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-uni-view",{staticClass:"contact"},[a("v-uni-view",{staticClass:"header"},[a("v-uni-image",{attrs:{src:e("c6ce"),mode:"strings"}}),a("v-uni-view",{staticClass:"detail"},[a("v-uni-view",{staticClass:"phone"},[a("v-uni-text",{on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.telephone.apply(void 0,arguments)}}},[t._v("联系电话：400-618-9090（点击拨打）")])],1),a("v-uni-view",{staticClass:"adress"},[a("v-uni-text",{},[t._v("地址：深圳市龙岗区坂田街道同兴路20号")])],1)],1)],1),a("v-uni-view",{staticClass:"map"},[a("v-uni-map",{staticStyle:{width:"720rpx",height:"720rpx"},attrs:{latitude:"22.637068",longitude:"114.063717",scale:"16",markers:t.markers}})],1)],1)},r=[];e.d(n,"b",(function(){return i})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return a}))},c6ce:function(t,n,e){t.exports=e.p+"static/img/guanyuwomen.4f891374.png"}}]);