(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{y6RJ:function(e,t,a){"use strict";var r=a("Jgta");r.default.apps.length||r.default.initializeApp({apiKey:"AIzaSyD2e8VJNsAOnbbBd1p8EzEKA5ibwQC0iYA",authDomain:"heartoftexaspetgrief.firebaseapp.com",databaseURL:"https://heartoftexaspetgrief.firebaseio.com",projectId:"heartoftexaspetgrief",storageBucket:"heartoftexaspetgrief.appspot.com",messagingSenderId:"670102399058",appId:"1:670102399058:web:58a419c4a38e77b83a178b",measurementId:"G-9VFKFFEVMR"});var n=r.default;t.a=n},zqYS:function(e,t,a){"use strict";a.r(t);var r=a("HaE+"),n=a("o0o1"),i=a.n(n),c=a("q1tI"),u=a.n(c),o=a("y6RJ"),l=a("Bl7J"),s=a("vrFN"),f=function(){return(f=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},m=function(e,t){if(e.exists){var a,r=e.val();return function(e){return null!=e&&"object"==typeof e&&!1===Array.isArray(e)}(r)?f({},r,t?((a={})[t]=e.key,a):null):r}},p=function(e){return{loading:null==e,value:e}},d=function(e){var t=e?e():void 0,a=Object(c.useReducer)((function(e,t){switch(t.type){case"error":return f({},e,{error:t.error,loading:!1,value:void 0});case"reset":return p(t.defaultValue);case"value":return f({},e,{error:void 0,loading:!1,value:t.value});default:return e}}),p(t)),r=a[0],n=a[1];return{error:r.error,loading:r.loading,reset:function(){var t=e?e():void 0;n({type:"reset",defaultValue:t})},setError:function(e){n({type:"error",error:e})},setValue:function(e){n({type:"value",value:e})},value:r.value}},v=function(e,t){var a=!e&&!t,r=!!e&&!!t&&e.isEqual(t);return a||r},b=function(e,t){return function(e,t,a){var r=Object(c.useRef)(e);return Object(c.useEffect)((function(){t(e,r.current)||(r.current=e,a&&a())})),r}(e,v,t)},g=function(e,t){var a=function(e){var t=d(),a=t.error,r=t.loading,n=t.reset,i=t.setError,u=t.setValue,o=t.value,l=b(e,n);return Object(c.useEffect)((function(){var e=l.current;if(e)return e.on("value",u,i),function(){e.off("value",u)};u(void 0)}),[l.current]),[o,r,a]}(e),r=a[0],n=a[1],i=a[2];return[Object(c.useMemo)((function(){return r?m(r,t?t.keyField:void 0):void 0}),[r,t&&t.keyField]),n,i]},E=a("Wbzz");t.default=function(){var e=g(o.a.database().ref("/"))[0],t=o.a.storage().ref(),a=Object(c.useState)({}),n=a[0],f=a[1];function m(){return(m=Object(r.a)(i.a.mark((function e(){var a,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,t.child("images/").listAll().then((function(e){var c=e.items;n=c.map(function(){var e=Object(r.a)(i.a.mark((function e(r){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.name,e.next=3,t.child("images/"+n).getDownloadURL().then((function(e){a[n]=e}));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}));case 3:return e.next=5,Promise.all(n);case 5:f(a);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){!function(){m.apply(this,arguments)}()})),u.a.createElement(l.a,null,u.a.createElement(s.a,{title:"Memorial Page"}),u.a.createElement("h1",null,"Memorial"),u.a.createElement("h4",null,u.a.createElement(E.Link,{to:"/addToMemorial/"},"Click here to add to memorial page")),u.a.createElement("div",{className:"columns is-multiline"},e&&Object.keys(e).map((function(t){return u.a.createElement("div",{className:"column is-half",key:t},u.a.createElement("div",{className:"card"},u.a.createElement("div",{className:"card-image"},u.a.createElement("figure",{className:"image is-4by3",style:{marginBottom:0}},u.a.createElement("img",{src:n[e[t].petImageURL],alt:e[t].petName,style:{objectFit:"contain"}}))),u.a.createElement("div",{className:"card-content"},u.a.createElement("div",{className:"media"},u.a.createElement("div",{className:"media-content"},u.a.createElement("p",{className:"title is-6"},e[t].petName),u.a.createElement("p",{className:"subtitle is-6",style:{marginBottom:0,fontSize:".75rem"}},"Owner(s): ",e[t].owner))),u.a.createElement("div",{className:"content"},u.a.createElement("p",{style:{fontSize:".75rem"}},e[t].petBio)))))}))))}}}]);
//# sourceMappingURL=component---src-pages-memorial-js-3680dde568eec10c073b.js.map