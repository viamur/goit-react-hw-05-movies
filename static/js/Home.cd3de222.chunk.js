"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[268],{4094:function(t,e,n){n.d(e,{Z:function(){return o}});var r=n(501),a=n(6871),c="List_list__AK7hC",i="List_item__WqTbr",s="List_link__EYABn",u=n(184),o=function(t){var e=t.data,n=t.isHome,o=(0,a.TH)(),p=n?"movies/":"";return(0,u.jsx)("ul",{className:c,children:e.map((function(t){return(0,u.jsx)("li",{className:i,children:(0,u.jsx)(r.rU,{to:"".concat(p).concat(t.id),state:{from:o},className:s,children:t.title})},t.id)}))})}},7111:function(t,e,n){n.d(e,{Z:function(){return c}});var r="Section_section__Z2PLw",a=n(184),c=function(t){var e=t.children;return(0,a.jsx)("section",{className:r,children:e})}},4936:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r=n(5861),a=n(885),c=n(7757),i=n.n(c),s=n(7111),u=n(2791),o=n(2854),p=n(9086),f=n(4094),l="Home_title__L087v",d=n(184),h=function(){var t=(0,u.useState)([]),e=(0,a.Z)(t,2),n=e[0],c=e[1],h=(0,u.useState)(1),Z=(0,a.Z)(h,2),v=Z[0],m=Z[1],_=(0,u.useState)(o.Z.START),w=(0,a.Z)(_,2),b=w[0],x=w[1];return(0,u.useEffect)((function(){var t=function(){var t=(0,r.Z)(i().mark((function t(){var e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return x(o.Z.LOADING),t.prev=1,t.next=4,p.Z.trend(v);case 4:e=t.sent,c(e),x(o.Z.FINISH),t.next=14;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),x(o.Z.EROR),m(1);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,d.jsxs)(s.Z,{children:[(0,d.jsx)("h1",{className:l,children:"Trending today"}),b===o.Z.FINISH&&(0,d.jsx)(f.Z,{data:n,isHome:!0}),b===o.Z.LOADING&&(0,d.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430"})," ",b===o.Z.EROR&&(0,d.jsx)("p",{children:"Erorr"})]})}},9086:function(t,e,n){var r=n(5861),a=n(3144),c=n(5671),i=n(6274),s=n(9359),u=n(7757),o=n.n(u),p=n(4569),f=n.n(p),l=(0,s.Z)("BASE_URL"),d=(0,s.Z)("API_KEY"),h=(0,s.Z)("SEARCH"),Z=(0,s.Z)("TRAND"),v=(0,s.Z)("ALL"),m=(0,a.Z)((function t(){var e=this;(0,c.Z)(this,t),Object.defineProperty(this,l,{writable:!0,value:"https://api.themoviedb.org/3/"}),Object.defineProperty(this,d,{writable:!0,value:"0a4aab5daca4d3b8b09b771948ad9265"}),Object.defineProperty(this,h,{writable:!0,value:"search/movie"}),Object.defineProperty(this,Z,{writable:!0,value:"trending/movie/day"}),Object.defineProperty(this,v,{writable:!0,value:"movie/"}),this.trend=function(){var t=(0,r.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,i.Z)(e,l)[l]).concat((0,i.Z)(e,Z)[Z],"?api_key=").concat((0,i.Z)(e,d)[d],"&page=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.search=function(){var t=(0,r.Z)(o().mark((function t(n,r){var a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,i.Z)(e,l)[l]).concat((0,i.Z)(e,h)[h],"?api_key=").concat((0,i.Z)(e,d)[d],"&query=").concat(n,"&page=").concat(r));case 2:return a=t.sent,t.abrupt("return",a.data);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),this.id=function(){var t=(0,r.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,i.Z)(e,l)[l]).concat((0,i.Z)(e,v)[v],"/").concat(n,"?api_key=").concat((0,i.Z)(e,d)[d]));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.cast=function(){var t=(0,r.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,i.Z)(e,l)[l]).concat((0,i.Z)(e,v)[v],"/").concat(n,"/credits?api_key=").concat((0,i.Z)(e,d)[d]));case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),this.reviews=function(){var t=(0,r.Z)(o().mark((function t(n){var r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f().get("".concat((0,i.Z)(e,l)[l]).concat((0,i.Z)(e,v)[v],"/").concat(n,"/reviews?api_key=").concat((0,i.Z)(e,d)[d]));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})),_=new m;e.Z=_},2854:function(t,e){e.Z={LOADING:"loading",START:"start",FINISH:"finish",EROR:"eror"}}}]);
//# sourceMappingURL=Home.cd3de222.chunk.js.map