(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{42:function(t,n,e){"use strict";e.r(n);var u=e(53),a=e(49);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);var r=e(5),c=Object(r.a)(a.default,u.a,u.b,!1,null,"64543cfe",null);n.default=c.exports},48:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var u=function(t){return t&&t.__esModule?t:{default:t}}(e(40));n.default={name:"DetailPage",data:function(){return{pic:""}},mounted:function(){var t=this;this.$nextTick(function(){u.default.get("https://api.github.com/users/lz82").then(function(n){console.log(n),t.pic=n.data.avatar_url})})}}},49:function(t,n,e){"use strict";e.r(n);var u=e(48),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n.default=a.a},53:function(t,n,e){"use strict";e.d(n,"a",function(){return u}),e.d(n,"b",function(){return a});var u=function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"container"},[n("img",{attrs:{src:this.pic,alt:""}})])},a=[]}}]);