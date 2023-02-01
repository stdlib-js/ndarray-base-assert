// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).ns=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,i=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,c=r.__lookupGetter__,l=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var f,a,p,s;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,n)||l.call(t,n)?(f=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=f):t[n]=e.value),p="get"in e,s="set"in e,a&&(p||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&o&&o.call(t,n,e.get),s&&u&&u.call(t,n,e.set),t};var f=n;function a(t,n,e){f(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}function p(t){return Object.keys(Object(t))}var s=void 0!==Object.keys;var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return y&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function v(t,n){return null!=t&&g.call(t,n)}var d="function"==typeof Symbol?Symbol.toStringTag:"";var h,x=m()?function(t){var n,e,r;if(null==t)return b.call(t);e=t[d],n=v(t,d);try{t[d]=void 0}catch(n){return b.call(t)}return r=b.call(t),n?t[d]=e:delete t[d],r}:function(t){return b.call(t)};function j(t){return"[object Arguments]"===x(t)}h=function(){return j(arguments)}();var w=h;function O(t,n,e){f(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}function _(t){return"string"==typeof t}var S=String.prototype.valueOf;var T=m();function E(t){return"object"==typeof t&&(t instanceof String||(T?function(t){try{return S.call(t),!0}catch(t){return!1}}(t):"[object String]"===x(t)))}function P(t){return _(t)||E(t)}function I(t){return"number"==typeof t}O(P,"isPrimitive",_),O(P,"isObject",E);var C=Number,A=C.prototype.toString;var k=m();function B(t){return"object"==typeof t&&(t instanceof C||(k?function(t){try{return A.call(t),!0}catch(t){return!1}}(t):"[object Number]"===x(t)))}function M(t){return I(t)||B(t)}function N(t){return t!=t}function V(t){return I(t)&&N(t)}function F(t){return B(t)&&N(t.valueOf())}function L(t){return V(t)||F(t)}O(M,"isPrimitive",I),O(M,"isObject",B),O(L,"isPrimitive",V),O(L,"isObject",F);var D=Number.POSITIVE_INFINITY,R=C.NEGATIVE_INFINITY,Y=Math.floor;function G(t){return Y(t)===t}function q(t){return t<D&&t>R&&G(t)}function X(t){return I(t)&&q(t)}function H(t){return B(t)&&q(t.valueOf())}function W(t){return X(t)||H(t)}O(W,"isPrimitive",X),O(W,"isObject",H);var K=Object.prototype.propertyIsEnumerable;var U=!K.call("beep","0");function z(t,n){var e;return null!=t&&(!(e=K.call(t,n))&&U&&P(t)?!V(n=+n)&&X(n)&&n>=0&&n<t.length:e)}var J=Array.isArray?Array.isArray:function(t){return"[object Array]"===x(t)};var Q=w?j:function(t){return null!==t&&"object"==typeof t&&!J(t)&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=4294967295&&v(t,"callee")&&!z(t,"callee")},Z=Array.prototype.slice;function $(t){return null!==t&&"object"==typeof t}var tt=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!J(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}($);O($,"isObjectLikeArray",tt);var nt=z((function(){}),"prototype"),et=!z({toString:null},"toString");function rt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&G(t.length)&&t.length>=0&&t.length<=9007199254740991}function it(t,n,e){var r,i;if(!rt(t)&&!_(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!X(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(L(n)){for(;i<r;i++)if(L(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var ot=/./;function ut(t){return"boolean"==typeof t}var ct=Boolean.prototype.toString;var lt=m();function ft(t){return"object"==typeof t&&(t instanceof Boolean||(lt?function(t){try{return ct.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===x(t)))}function at(t){return ut(t)||ft(t)}function pt(){return new Function("return this;")()}O(at,"isPrimitive",ut),O(at,"isObject",ft);var st="object"==typeof self?self:null,yt="object"==typeof window?window:null,mt="object"==typeof global?global:null;var bt=function(t){if(arguments.length){if(!ut(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return pt()}if(st)return st;if(yt)return yt;if(mt)return mt;throw new Error("unexpected error. Unable to resolve global object.")}(),gt=bt.document&&bt.document.childNodes,vt=Int8Array;function dt(){return/^\s*function\s*([^(]*)/i}var ht=/^\s*function\s*([^(]*)/i;function xt(t){var n,e,r,i;if(("Object"===(e=x(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=ht.exec(r.toString()))return n[1]}return $(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}O(dt,"REGEXP",ht);var jt="function"==typeof ot||"object"==typeof vt||"function"==typeof gt?function(t){return xt(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?xt(t).toLowerCase():n};function wt(t){return t.constructor&&t.constructor.prototype===t}var Ot=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],_t="undefined"==typeof window?void 0:window;var St=function(){var t;if("undefined"===jt(_t))return!1;for(t in _t)try{-1===it(Ot,t)&&v(_t,t)&&null!==_t[t]&&"object"===jt(_t[t])&&wt(_t[t])}catch(t){return!0}return!1}(),Tt="undefined"!=typeof window;var Et,Pt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Et=s?function(){return 2!==(p(arguments)||"").length}(1,2)?function(t){return Q(t)?p(Z.call(t)):p(t)}:p:function(t){var n,e,r,i,o,u,c;if(i=[],Q(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!v(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1==(r="function"==typeof t)&&!$(t))return i;e=nt&&r}for(o in t)e&&"prototype"===o||!v(t,o)||i.push(String(o));if(et)for(n=function(t){if(!1===Tt&&!St)return wt(t);try{return wt(t)}catch(t){return!1}}(t),c=0;c<Pt.length;c++)u=Pt[c],n&&"constructor"===u||!v(t,u)||i.push(String(u));return i};var It=Et;function Ct(t){return"function"===jt(t)}var At,kt=Object.getPrototypeOf;At=Ct(Object.getPrototypeOf)?kt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===x(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Bt=At;var Mt=Object.prototype;function Nt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!J(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Bt(t))}(t),!n||!v(t,"constructor")&&v(n,"constructor")&&Ct(n.constructor)&&"[object Function]"===x(n.constructor)&&v(n,"isPrototypeOf")&&Ct(n.isPrototypeOf)&&(n===Mt||function(t){var n;for(n in t)if(!v(t,n))return!1;return!0}(t)))}var Vt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ft(){return Vt.slice()}var Lt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Dt(){return Lt.slice()}function Rt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}O(Dt,"enum",Rt),function(t,n){var e,r,i;for(e=It(n),i=0;i<e.length;i++)a(t,r=e[i],n[r])}(Dt,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Yt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Gt(){return{bool:Yt.bool,int8:Yt.int8,uint8:Yt.uint8,uint8c:Yt.uint8c,int16:Yt.int16,uint16:Yt.uint16,int32:Yt.int32,uint32:Yt.uint32,int64:Yt.int64,uint64:Yt.uint64,float32:Yt.float32,float64:Yt.float64,complex64:Yt.complex64,complex128:Yt.complex128,binary:Yt.binary,generic:Yt.generic,notype:Yt.notype,userdefined_type:Yt.userdefined_type}}O(Ft,"enum",Gt),function(t,n){var e,r,i;for(e=It(n),i=0;i<e.length;i++)a(t,r=e[i],n[r])}(Ft,Gt());var qt=function(t,n){var e,r,i,o,u,c,l,f=!0;if(!$(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Nt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(v(n,"duplicates")&&!ut(f=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+f+"`.")}if(r=(e=It(t)).length,u={},f)for(l=0;l<r;l++)v(u,o=t[i=e[l]])?(c=u[o],J(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<r;l++)u[t[i=e[l]]]=i;return u}(Gt(),{duplicates:!1});var Xt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Ht(t){var n=typeof t;return"string"===n?null===function(t){var n=Xt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=qt[t];return"string"==typeof n?n:null}(t):null}var Wt,Kt={float64:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Ut(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=It(Kt)).length,l=0;l<n;l++){for(i=t[l],u=Kt[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function zt(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=It(Kt)).length,l=0;l<n;l++){for(i=t[l],u=Kt[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var Jt=function(t){return 0===arguments.length?Ut():(void 0===Wt&&(Wt=zt()),t=Ht(t),v(Wt,t)?Wt[t].slice():null)}();function Qt(t,n){return t===n||Jt[t][n]>0}var Zt,$t={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function tn(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=It($t)).length,l=0;l<n;l++){for(i=t[l],u=$t[i],r={},c=0;c<n;c++)r[o=t[c]]=u[o];e[i]=r}return e}function nn(){var t,n,e,r,i,o,u,c,l;for(e={},n=(t=It($t)).length,l=0;l<n;l++){for(i=t[l],u=$t[i],r=[],c=0;c<n;c++)1===u[o=t[c]]&&r.push(o);e[i]=r}return e}var en=function(t){return 0===arguments.length?tn():(void 0===Zt&&(Zt=nn()),t=Ht(t),v(Zt,t)?Zt[t].slice():null)}();function rn(t,n){return t===n||en[t][n]>0}function on(t,n,e){var r,i,o,u,c;for(r=t.length,i=e,o=e,c=0;c<r;c++){if(0===t[c])return[e,e];(u=n[c])>0?o+=u*(t[c]-1):u<0&&(i+=u*(t[c]-1))}return[i,o]}function un(t){var n,e,r;if(0===(n=t.length))return 0;for(e=1,r=0;r<n;r++)e*=t[r];return e}O(on,"assign",(function(t,n,e,r){var i,o,u,c,l;for(i=t.length,o=e,u=e,l=0;l<i;l++){if(0===t[l])return r[0]=e,r[1]=e,r;(c=n[l])>0?u+=c*(t[l]-1):c<0&&(o+=c*(t[l]-1))}return r[0]=o,r[1]=u,r}));var cn=["none","equiv","safe","same-kind","unsafe"];function ln(){return cn.slice()}O(ln,"enum",(function(){return{none:0,equiv:1,safe:2,"same-kind":3,unsafe:4}}));var fn=ln(),an=fn.length;function pn(t){return Math.abs(t)}function sn(t){var n,e,r,i;if(0===(n=t.length))return!1;for(e=pn(t[0]),i=1;i<n;i++){if((r=pn(t[i]))<e)return!1;e=r}return!0}function yn(t,n,e){var r,i;return 0!==(r=un(t))&&r===(i=on(t,n,e))[1]-i[0]+1}function mn(t){var n,e;for(n=0,e=0;e<t.length;e++)t[e]<0&&(n+=1);return 0===n?1:n===t.length?-1:0}var bn=Dt(),gn=bn.length;var vn=["throw","clamp","wrap"];function dn(){return vn.slice()}O(dn,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var hn=dn(),xn=hn.length;var jn=["row-major","column-major"];function wn(){return jn.slice()}O(wn,"enum",(function(){return{"row-major":1,"column-major":2}}));var On=wn(),_n=On.length;function Sn(t){var n,e,r,i;if(0===(n=t.length))return!1;for(e=pn(t[0]),i=1;i<n;i++){if((r=pn(t[i]))>e)return!1;e=r}return!0}var Tn={};return a(Tn,"isAllowedDataTypeCast",(function(t,n,e){return"unsafe"===e||(t===n||"none"!==e&&"equiv"!==e&&("safe"===e?Qt(t,n):rn(t,n)))})),a(Tn,"isBufferLengthCompatible",(function(t,n,e,r){var i=on(n,e,r);return i[0]>=0&&i[1]<t})),a(Tn,"isBufferLengthCompatibleShape",(function(t,n){return t>=un(n)})),a(Tn,"isCastingMode",(function(t){var n;for(n=0;n<an;n++)if(t===fn[n])return!0;return!1})),a(Tn,"isColumnMajor",sn),a(Tn,"isColumnMajorContiguous",(function(t,n,e){return 0!==mn(n)&&sn(n)&&yn(t,n,e)})),a(Tn,"isContiguous",(function(t,n,e){return 0!==mn(n)&&yn(t,n,e)})),a(Tn,"isDataType",(function(t){var n;for(n=0;n<gn;n++)if(t===bn[n])return!0;return!1})),a(Tn,"isIndexMode",(function(t){var n;for(n=0;n<xn;n++)if(t===hn[n])return!0;return!1})),a(Tn,"isOrder",(function(t){var n;for(n=0;n<_n;n++)if(t===On[n])return!0;return!1})),a(Tn,"isReadOnly",(function(t){var n=t.flags;return n&&!0===n.READONLY})),a(Tn,"isRowMajor",Sn),a(Tn,"isRowMajorContiguous",(function(t,n,e){return 0!==mn(n)&&Sn(n)&&yn(t,n,e)})),a(Tn,"isSafeDataTypeCast",Qt),a(Tn,"isSameKindDataTypeCast",rn),a(Tn,"isSingleSegmentCompatible",yn),Tn}));
//# sourceMappingURL=index.js.map