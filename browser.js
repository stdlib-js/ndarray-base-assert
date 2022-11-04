// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).ns=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,i=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,c=r.__lookupGetter__,l=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var f,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,n)||l.call(t,n)?(f=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=f):t[n]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,n,e.get),s&&u&&u.call(t,n,e.set),t};var f=n;function a(t,n,e){f(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function p(t){return Object.keys(Object(t))}var s=void 0!==Object.keys;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function v(t,n){return null!=t&&g.call(t,n)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var h,x=m()?function(t){var n,e,r;if(null==t)return b.call(t);e=t[d],n=v(t,d);try{t[d]=void 0}catch(n){return b.call(t)}return r=b.call(t),n?t[d]=e:delete t[d],r}:function(t){return b.call(t)};function j(t){return"[object Arguments]"===x(t)}h=function(){return j(arguments)}();var w=h;function O(t,n,e){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var S=String.prototype.valueOf;var T=m();function E(t){return"object"==typeof t&&(t instanceof String||(T?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===x(t)))}function P(t){return _(t)||E(t)}function I(t){return"number"==typeof t}O(P,"isPrimitive",_),O(P,"isObject",E);var C=Number,A=C.prototype.toString;var k=m();function B(t){return"object"==typeof t&&(t instanceof C||(k?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===x(t)))}function M(t){return I(t)||B(t)}function N(t){return t!=t}function V(t){return I(t)&&N(t)}function F(t){return B(t)&&N(t.valueOf())}function L(t){return V(t)||F(t)}O(M,"isPrimitive",I),O(M,"isObject",B),O(L,"isPrimitive",V),O(L,"isObject",F);var D=Number.POSITIVE_INFINITY,R=C.NEGATIVE_INFINITY,Y=Math.floor;function G(t){return Y(t)===t}function q(t){return t<D&&t>R&&G(t)}function X(t){return I(t)&&q(t)}function H(t){return B(t)&&q(t.valueOf())}function W(t){return X(t)||H(t)}O(W,"isPrimitive",X),O(W,"isObject",H);var K=Object.prototype.propertyIsEnumerable;var U=!K.call("beep","0");function z(t,n){var e;return null!=t&&(!(e=K.call(t,n))&&U&&P(t)?!V(n=+n)&&X(n)&&n>=0&&n<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===x(t)};var Q=w?j:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=4294967295&&v(t,"callee")&&!z(t,"callee")},Z=Array.prototype.slice;function $(t){return null!==t&&"object"==typeof t}var tt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!J(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}($);O($,"isObjectLikeArray",tt);var nt=z((function(){}),"prototype"),et=!z({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=9007199254740991}function it(t,n,e){var r,i;if(!rt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!X(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(L(n)){for(;i<r;i++)if(L(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var ot=/./;function ut(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var lt=m();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===x(t)))}function at(t){return ut(t)||ft(t)}function pt(){return new Function("return this;")()}O(at,"isPrimitive",ut),O(at,"isObject",ft);var st="object"==typeof self?self:null,yt="object"==typeof window?window:null,mt="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},bt="object"==typeof mt?mt:null;var gt=function(t){if(arguments.length){if(!ut(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(st)return st;if(yt)return yt;if(bt)return bt;throw new Error("unexpected error. Unable to resolve global object.")}(),vt=gt.document&&gt.document.childNodes,dt=Int8Array;function ht(){return/^\s*function\s*([^(]*)/i}var xt=/^\s*function\s*([^(]*)/i;function jt(t){var n,e,r,i;if(("Object"===(e=x(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=xt.exec(r.toString()))return n[1]}return $(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}O(ht,"REGEXP",xt);var wt="function"==typeof ot||"object"==typeof dt||"function"==typeof vt?function(t){return jt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?jt(t).toLowerCase():n};function Ot(t){return t.constructor&&t.constructor.prototype===t}var _t=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],St="undefined"==typeof window?void 0:window;var Tt=function(){var t;if("undefined"===wt(St))return!1;for(t in St)try{-1===it(_t,t)&&v(St,t)&&null!==St[t]&&"object"===wt(St[t])&&Ot(St[t])}catch(t){return!0}return!1}(),Et="undefined"!=typeof window;var Pt,It=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Pt=s?function(){return 2!==(p(arguments)||"").length}(1,2)?function(t){return Q(t)?p(Z.call(t)):p(t)}:p:function(t){var n,e,r,i,o,u,c;if(i=[],Q(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!v(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!$(t))return i;e=nt&&r}for(o in t)e&&"prototype"===o||!v(t,o)||i.push(String(o));if(et)for(n=function(t){if(!1===Et&&!Tt)return Ot(t);try{return Ot(t)}catch(t){return!1}}(t),c=0;c<It.length;c++)u=It[c],n&&"constructor"===u||!v(t,u)||i.push(String(u));return i};var Ct=Pt;function At(t){return"function"===wt(t)}var kt,Bt=Object.getPrototypeOf;kt=At(Object.getPrototypeOf)?Bt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===x(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Mt=kt;var Nt=Object.prototype;function Vt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Mt(t))}(t),!n||!v(t,"constructor")&&v(n,"constructor")&&At(n.constructor)&&"[object Function]"===x(n.constructor)&&v(n,"isPrototypeOf")&&At(n.isPrototypeOf)&&(n===Nt||function(t){var n;for(n in t)if(!v(t,n))return!1;return!0}(t)))}var Ft=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Lt(){return Ft.slice()}var Dt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Rt(){return Dt.slice()}function Yt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}O(Rt,"enum",Yt),function(t,n){var e,r,i;for(e=Ct(n),i=0;i<e.length;i++)a(t,r=e[i],n[r])}(Rt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Gt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function qt(){return{bool:Gt.bool,int8:Gt.int8,uint8:Gt.uint8,uint8c:Gt.uint8c,int16:Gt.int16,uint16:Gt.uint16,int32:Gt.int32,uint32:Gt.uint32,int64:Gt.int64,uint64:Gt.uint64,float32:Gt.float32,float64:Gt.float64,complex64:Gt.complex64,complex128:Gt.complex128,binary:Gt.binary,generic:Gt.generic,notype:Gt.notype,userdefined_type:Gt.userdefined_type}}O(Lt,"enum",qt),function(t,n){var e,r,i;for(e=Ct(n),i=0;i<e.length;i++)a(t,r=e[i],n[r])}(Lt,qt());var Xt=function(t,n){var e,r,i,o,u,c,l,f=!0;if(!$(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Vt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(v(n,"duplicates")&&!ut(f=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(r=(e=Ct(t)).length,u={},f)for(l=0;l<r;l++)v(u,o=t[i=e[l]])?(c=u[o],J(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=e[l]]]=i;return u}(qt(),{duplicates:!1});var Ht={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Wt(t){var n=typeof t;return"string"===n?null===function(t){var n=Ht[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Xt[t];return"string"==typeof n?n:null}(t):null}var Kt,Ut={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function zt(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Ct(Ut)).length,l=0;l<n;l++){for(i=t[l],u=Ut[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function Jt(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Ct(Ut)).length,l=0;l<n;l++){for(i=t[l],u=Ut[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Qt=function(t){return 0===arguments.length?zt():(void 0===Kt&&(Kt=Jt()),t=Wt(t),v(Kt,t)?Kt[t].slice():null)}();function Zt(t,n){return t===n||Qt[t][n]>0}var $t,tn={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function nn(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Ct(tn)).length,l=0;l<n;l++){for(i=t[l],u=tn[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function en(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=Ct(tn)).length,l=0;l<n;l++){for(i=t[l],u=tn[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var rn=function(t){return 0===arguments.length?nn():(void 0===$t&&($t=en()),t=Wt(t),v($t,t)?$t[t].slice():null)}();function on(t,n){return t===n||rn[t][n]>0}function un(t,n,e){var r,i,o,u,c;for(r=t.length,i=e,o=e,c=0;c<r;c++){if(0===t[c])return[e,e];(u=n[c])>0?o+=u*(t[c]-1):u<0&&(i+=u*(t[c]-1))}return[i,o]}function cn(t){var n,e,r;if(0===(n=t.length))return 0;for(e=1,r=0;r<n;r++)e*=t[r];return e}O(un,"assign",(function(t,n,e,r){var i,o,u,c,l;for(i=t.length,o=e,u=e,l=0;l<i;l++){if(0===t[l])return r[0]=e,r[1]=e,r;(c=n[l])>0?u+=c*(t[l]-1):c<0&&(o+=c*(t[l]-1))}return r[0]=o,r[1]=u,r}));var ln=["none","equiv","safe","same-kind","unsafe"];function fn(){return ln.slice()}O(fn,"enum",(function(){return{none:0,equiv:1,safe:2,"same-kind":3,unsafe:4}}));var an=fn(),pn=an.length;function sn(t){return Math.abs(t)}function yn(t){var n,e,r,i;if(0===(n=t.length))return!1;for(e=sn(t[0]),i=1;i<n;i++){if((r=sn(t[i]))<e)return!1;e=r}return!0}function mn(t,n,e){var r,i;return 0!==(r=cn(t))&&r===(i=un(t,n,e))[1]-i[0]+1}function bn(t){var n,e;for(n=0,e=0;e<t.length;e++)t[e]<0&&(n+=1);return 0===n?1:n===t.length?-1:0}var gn=Rt(),vn=gn.length;var dn=["throw","clamp","wrap"];function hn(){return dn.slice()}O(hn,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var xn=hn(),jn=xn.length;var wn=["row-major","column-major"];function On(){return wn.slice()}O(On,"enum",(function(){return{"row-major":1,"column-major":2}}));var _n=On(),Sn=_n.length;function Tn(t){var n,e,r,i;if(0===(n=t.length))return!1;for(e=sn(t[0]),i=1;i<n;i++){if((r=sn(t[i]))>e)return!1;e=r}return!0}var En={};return a(En,"isAllowedDataTypeCast",(function(t,n,e){return"unsafe"===e||(t===n||"none"!==e&&"equiv"!==e&&("safe"===e?Zt(t,n):on(t,n)))})),a(En,"isBufferLengthCompatible",(function(t,n,e,r){var i=un(n,e,r);return i[0]>=0&&i[1]<t})),a(En,"isBufferLengthCompatibleShape",(function(t,n){return t>=cn(n)})),a(En,"isCastingMode",(function(t){var n;for(n=0;n<pn;n++)if(t===an[n])return!0;return!1})),a(En,"isColumnMajor",yn),a(En,"isColumnMajorContiguous",(function(t,n,e){return 0!==bn(n)&&yn(n)&&mn(t,n,e)})),a(En,"isContiguous",(function(t,n,e){return 0!==bn(n)&&mn(t,n,e)})),a(En,"isDataType",(function(t){var n;for(n=0;n<vn;n++)if(t===gn[n])return!0;return!1})),a(En,"isIndexMode",(function(t){var n;for(n=0;n<jn;n++)if(t===xn[n])return!0;return!1})),a(En,"isOrder",(function(t){var n;for(n=0;n<Sn;n++)if(t===_n[n])return!0;return!1})),a(En,"isReadOnly",(function(t){var n=t.flags;return n&&!0===n.READONLY})),a(En,"isRowMajor",Tn),a(En,"isRowMajorContiguous",(function(t,n,e){return 0!==bn(n)&&Tn(n)&&mn(t,n,e)})),a(En,"isSafeDataTypeCast",Zt),a(En,"isSameKindDataTypeCast",on),a(En,"isSingleSegmentCompatible",mn),En}));
//# sourceMappingURL=browser.js.map
