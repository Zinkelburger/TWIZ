(function(){'use strict';var m;function ba(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ca="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function da(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var ha=da(this);function u(a,b){if(b)a:{var c=ha;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ca(c,a,{configurable:!0,writable:!0,value:b})}}
u("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ca(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
u("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=ha[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ca(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ja(ba(this))}})}return a});
function ja(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function ka(a){return a.raw=a}
function na(a,b){a.raw=b;return a}
function v(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:ba(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function oa(a){if(!(a instanceof Array)){a=v(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function pa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var qa="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)pa(d,e)&&(a[e]=d[e])}return a};
u("Object.assign",function(a){return a||qa});
var ra="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},sa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ra(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ta;
if("function"==typeof Object.setPrototypeOf)ta=Object.setPrototypeOf;else{var ua;a:{var va={a:!0},wa={};try{wa.__proto__=va;ua=wa.a;break a}catch(a){}ua=!1}ta=ua?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var xa=ta;
function w(a,b){a.prototype=ra(b.prototype);a.prototype.constructor=a;if(xa)xa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Aa=b.prototype}
function ya(){this.A=!1;this.v=null;this.i=void 0;this.h=1;this.m=this.l=0;this.P=this.j=null}
function za(a){if(a.A)throw new TypeError("Generator is already running");a.A=!0}
ya.prototype.D=function(a){this.i=a};
function Aa(a,b){a.j={exception:b,md:!0};a.h=a.l||a.m}
ya.prototype.return=function(a){this.j={return:a};this.h=this.m};
ya.prototype.yield=function(a,b){this.h=b;return{value:a}};
ya.prototype.B=function(a){this.h=a};
function Ba(a,b,c){a.l=b;void 0!=c&&(a.m=c)}
function Ca(a){a.l=0;var b=a.j.exception;a.j=null;return b}
function Ea(a){var b=a.P.splice(0)[0];(b=a.j=a.j||b)?b.md?a.h=a.l||a.m:void 0!=b.B&&a.m<b.B?(a.h=b.B,a.j=null):a.h=a.m:a.h=0}
function Fa(a){this.h=new ya;this.i=a}
function Ga(a,b){za(a.h);var c=a.h.v;if(c)return Ha(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ia(a)}
function Ha(a,b,c,d){try{var e=b.call(a.h.v,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.A=!1,e;var f=e.value}catch(g){return a.h.v=null,Aa(a.h,g),Ia(a)}a.h.v=null;d.call(a.h,f);return Ia(a)}
function Ia(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.A=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,Aa(a.h,c)}a.h.A=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.md)throw b.exception;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ja(a){this.next=function(b){za(a.h);a.h.v?b=Ha(a,a.h.v.next,b,a.h.D):(a.h.D(b),b=Ia(a));return b};
this.throw=function(b){za(a.h);a.h.v?b=Ha(a,a.h.v["throw"],b,a.h.D):(Aa(a.h,b),b=Ia(a));return b};
this.return=function(b){return Ga(a,b)};
this[Symbol.iterator]=function(){return this}}
function Ka(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function A(a){return Ka(new Ja(new Fa(a)))}
function B(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
u("Reflect",function(a){return a?a:{}});
u("Reflect.construct",function(){return sa});
u("Reflect.setPrototypeOf",function(a){return a?a:xa?function(b,c){try{return xa(b,c),!0}catch(d){return!1}}:null});
u("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.A=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.v()})}this.h.push(g)};
var e=ha.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.v=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.ba),reject:g(this.v)}};
b.prototype.ba=function(g){if(g===this)this.v(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ga(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.X(g):this.m(g)}};
b.prototype.X=function(g){var h=void 0;try{h=g.then}catch(k){this.v(k);return}"function"==typeof h?this.ka(h,g):this.m(g)};
b.prototype.v=function(g){this.D(2,g)};
b.prototype.m=function(g){this.D(1,g)};
b.prototype.D=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.ea();this.P()};
b.prototype.ea=function(){var g=this;e(function(){if(g.T()){var h=ha.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.T=function(){if(this.A)return!1;var g=ha.CustomEvent,h=ha.Event,k=ha.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=ha.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.P=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.ga=function(g){var h=this.l();g.Wb(h.resolve,h.reject)};
b.prototype.ka=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(r,t){return"function"==typeof r?function(x){try{l(r(x))}catch(z){n(z)}}:t}
var l,n,p=new b(function(r,t){l=r;n=t});
this.Wb(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Wb=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.A=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=v(g),n=l.next();!n.done;n=l.next())d(n.value).Wb(h,k)})};
b.all=function(g){var h=v(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(x){return function(z){r[x]=z;t--;0==t&&l(r)}}
var r=[],t=0;do r.push(void 0),t++,d(k.value).Wb(p(r.length-1),n),k=h.next();while(!k.done)})};
return b});
u("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=v(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!pa(k,g)){var l=new c;ca(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!pa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&pa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&pa(k,g)&&pa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&pa(k,g)&&pa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
u("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ja(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h[0][l];if(n&&pa(h[0],l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=v(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(v([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function La(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
u("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=La(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
u("Object.setPrototypeOf",function(a){return a||xa});
u("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
u("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=La(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
u("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
function Ma(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
u("Array.prototype.keys",function(a){return a?a:function(){return Ma(this,function(b){return b})}});
u("Set",function(a){function b(c){this.h=new Map;if(c){c=v(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(v([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
u("Array.prototype.values",function(a){return a?a:function(){return Ma(this,function(b,c){return c})}});
u("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)pa(b,d)&&c.push(b[d]);return c}});
u("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
u("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
u("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==La(this,b,"includes").indexOf(b,c||0)}});
u("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
u("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
u("Number.isSafeInteger",function(a){return a?a:function(b){return Number.isInteger(b)&&Math.abs(b)<=Number.MAX_SAFE_INTEGER}});
u("Math.trunc",function(a){return a?a:function(b){b=Number(b);if(isNaN(b)||Infinity===b||-Infinity===b||0===b)return b;var c=Math.floor(Math.abs(b));return 0>b?-c:c}});
u("Array.prototype.entries",function(a){return a?a:function(){return Ma(this,function(b,c){return[b,c]})}});
u("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
u("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
u("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)pa(b,d)&&c.push([d,b[d]]);return c}});
u("globalThis",function(a){return a||ha});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var Na=Na||{},C=this||self;function D(a,b,c){a=a.split(".");c=c||C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function E(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Oa(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Pa(a){var b=Oa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Qa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Ra(a){return Object.prototype.hasOwnProperty.call(a,Sa)&&a[Sa]||(a[Sa]=++Ta)}
var Sa="closure_uid_"+(1E9*Math.random()>>>0),Ta=0;function Ua(a,b,c){return a.call.apply(a.bind,arguments)}
function Va(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Wa(a,b,c){Wa=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Ua:Va;return Wa.apply(null,arguments)}
function Xa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Ya(){return Date.now()}
function Za(a,b){function c(){}
c.prototype=b.prototype;a.Aa=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.base=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function $a(a){return a}
;function ab(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,ab);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Za(ab,Error);ab.prototype.name="CustomError";function bb(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function cb(){}
function db(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var eb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},fb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},gb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},hb=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},ib=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
fb(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function jb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function kb(a,b){b=eb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function lb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Pa(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function mb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function nb(a){var b=ob,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function pb(a){for(var b in a)return!1;return!0}
function qb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function rb(a){return null!==a&&"privembed"in a?a.privembed:!1}
function sb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function tb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function ub(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=ub(a[c]);return b}
var vb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function wb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<vb.length;f++)c=vb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var xb;function yb(){if(void 0===xb){var a=null,b=C.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:$a,createScript:$a,createScriptURL:$a})}catch(c){C.console&&C.console.error(c.message)}xb=a}else xb=a}return xb}
;function zb(a,b){this.h=a===Ab&&b||""}
zb.prototype.toString=function(){return this.h};
function Bb(a){return new zb(Ab,a)}
var Ab={};Bb("");function Cb(a){this.h=a}
Cb.prototype.toString=function(){return this.h+""};
function Db(a){if(a instanceof Cb&&a.constructor===Cb)return a.h;Oa(a);return"type_error:TrustedResourceUrl"}
var Eb={};function Fb(a){var b=yb();a=b?b.createScriptURL(a):a;return new Cb(a,Eb)}
;function Gb(a){this.h=a}
Gb.prototype.toString=function(){return this.h.toString()};
var Hb={},Ib=new Gb("about:invalid#zClosurez",Hb);var Jb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};var Kb,Lb=E("CLOSURE_FLAGS"),Mb=Lb&&Lb[610401301];Kb=null!=Mb?Mb:!1;function Nb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ob,Pb=C.navigator;Ob=Pb?Pb.userAgentData||null:null;function Qb(a){return Kb?Ob?Ob.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Nb().indexOf(a)}
;function Rb(){return Kb?!!Ob&&0<Ob.brands.length:!1}
function Sb(){return Rb()?!1:F("Opera")}
function Tb(){return Rb()?!1:F("Trident")||F("MSIE")}
function Ub(){return F("Firefox")||F("FxiOS")}
function Vb(){return Rb()?Qb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Rb()?0:F("Edge"))||F("Silk")}
;function Wb(a){this.h=a}
Wb.prototype.toString=function(){return this.h.toString()};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Xb={};function Yb(){}
Yb.prototype.toString=function(){return this.ud.toString()};function Zb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var $b=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ac(a){return a?decodeURI(a):a}
function bc(a,b){return b.match($b)[a]||null}
function cc(a){return ac(bc(3,a))}
function dc(a){var b=a.match($b);a=b[5];var c=b[6];b=b[7];var d="";a&&(d+=a);c&&(d+="?"+c);b&&(d+="#"+b);return d}
function ec(a){var b=a.indexOf("#");return 0>b?a:a.slice(0,b)}
function fc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)fc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function hc(a){var b=[],c;for(c in a)fc(c,a[c],b);return b.join("&")}
function ic(a,b){b=hc(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.slice(0,d),e,a.slice(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
function jc(a,b,c,d){for(var e=c.length;0<=(b=a.indexOf(c,b))&&b<d;){var f=a.charCodeAt(b-1);if(38==f||63==f)if(f=a.charCodeAt(b+e),!f||61==f||38==f||35==f)return b;b+=e+1}return-1}
var kc=/#|$/,lc=/[?&]($|#)/;function mc(a,b){for(var c=a.search(kc),d=0,e,f=[];0<=(e=jc(a,d,b,c));)f.push(a.substring(d,e)),d=Math.min(a.indexOf("&",e)+1||c,c);f.push(a.slice(d));return f.join("").replace(lc,"$1")}
;function nc(a){this.h=a}
;function oc(a,b,c){this.j=a;this.v=b;this.i=c||[];this.h=new Map}
m=oc.prototype;m.Od=function(a){var b=B.apply(1,arguments),c=this.xc(b);c?c.push(new nc(a)):this.Bd(a,b)};
m.Bd=function(a){var b=this.getKey(B.apply(1,arguments));this.h.set(b,[new nc(a)])};
m.xc=function(){var a=this.getKey(B.apply(0,arguments));return this.h.has(a)?this.h.get(a):void 0};
m.ee=function(){var a=this.xc(B.apply(0,arguments));return a&&a.length?a[0]:void 0};
m.clear=function(){this.h.clear()};
m.getKey=function(){var a=B.apply(0,arguments);return a?a.join(","):"key"};function pc(a,b){oc.call(this,a,3,b)}
w(pc,oc);pc.prototype.l=function(a){var b=B.apply(1,arguments),c=0,d=this.ee(b);d&&(c=d.h);this.Bd(c+a,b)};function qc(a,b){oc.call(this,a,2,b)}
w(qc,oc);qc.prototype.record=function(a){this.Od(a,B.apply(1,arguments))};function rc(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function sc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Pa(d)?sc.apply(null,d):rc(d)}}
;function H(){this.ob=this.ob;this.v=this.v}
m=H.prototype;m.ob=!1;m.Z=function(){return this.ob};
m.dispose=function(){this.ob||(this.ob=!0,this.S())};
function tc(a,b){a.addOnDisposeCallback(Xa(rc,b))}
m.addOnDisposeCallback=function(a,b){this.ob?void 0!==b?a.call(b):a():(this.v||(this.v=[]),this.v.push(void 0!==b?Wa(a,b):a))};
m.S=function(){if(this.v)for(;this.v.length;)this.v.shift()()};function uc(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
uc.prototype.stopPropagation=function(){this.j=!0};
uc.prototype.preventDefault=function(){this.defaultPrevented=!0};function vc(a){var b=E("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=wc(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,xc[c])c=xc[c];else{c=String(c);if(!xc[c]){var f=/function\s+([^\(]+)/m.exec(c);xc[c]=f?f[1]:"[Anonymous]"}c=xc[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}return{message:a.message,
name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:b}}
function wc(a,b){b||(b={});b[yc(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[yc(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=wc(a,b));return c}
function yc(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var xc={};var zc=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function Ac(){return Kb?!!Ob&&!!Ob.platform:!1}
function Bc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function Cc(a){Cc[" "](a);return a}
Cc[" "]=function(){};var Dc=Sb(),Ec=Tb(),Fc=F("Edge"),Gc=F("Gecko")&&!(-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),Hc=-1!=Nb().toLowerCase().indexOf("webkit")&&!F("Edge");Hc&&F("Mobile");Ac()||F("Macintosh");Ac()||F("Windows");(Ac()?"Linux"===Ob.platform:F("Linux"))||Ac()||F("CrOS");var Ic=Ac()?"Android"===Ob.platform:F("Android");Bc();F("iPad");F("iPod");Bc()||F("iPad")||F("iPod");Nb().toLowerCase().indexOf("kaios");
function Jc(){var a=C.document;return a?a.documentMode:void 0}
var Kc;a:{var Lc="",Mc=function(){var a=Nb();if(Gc)return/rv:([^\);]+)(\)|;)/.exec(a);if(Fc)return/Edge\/([\d\.]+)/.exec(a);if(Ec)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Hc)return/WebKit\/(\S+)/.exec(a);if(Dc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
Mc&&(Lc=Mc?Mc[1]:"");if(Ec){var Nc=Jc();if(null!=Nc&&Nc>parseFloat(Lc)){Kc=String(Nc);break a}}Kc=Lc}var Oc=Kc,Pc;if(C.document&&Ec){var Qc=Jc();Pc=Qc?Qc:parseInt(Oc,10)||void 0}else Pc=void 0;var Rc=Pc;function Sc(a,b){uc.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
Za(Sc,uc);var Tc={2:"touch",3:"pen",4:"mouse"};
Sc.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(Gc){a:{try{Cc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:Tc[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&Sc.Aa.preventDefault.call(this)};
Sc.prototype.stopPropagation=function(){Sc.Aa.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
Sc.prototype.preventDefault=function(){Sc.Aa.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var Uc="closure_listenable_"+(1E6*Math.random()|0);var Vc=0;function Wc(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.ac=e;this.key=++Vc;this.Lb=this.Vb=!1}
function Xc(a){a.Lb=!0;a.listener=null;a.proxy=null;a.src=null;a.ac=null}
;function Yc(a){this.src=a;this.listeners={};this.h=0}
Yc.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=Zc(a,b,d,e);-1<g?(b=a[g],c||(b.Vb=!1)):(b=new Wc(b,this.src,f,!!d,e),b.Vb=c,a.push(b));return b};
Yc.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Zc(e,b,c,d);return-1<b?(Xc(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function $c(a,b){var c=b.type;c in a.listeners&&kb(a.listeners[c],b)&&(Xc(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function Zc(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Lb&&f.listener==b&&f.capture==!!c&&f.ac==d)return e}return-1}
;var ad="closure_lm_"+(1E6*Math.random()|0),bd={},cd=0;function dd(a,b,c,d,e){if(d&&d.once)ed(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)dd(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.listen(b,c,Qa(d)?!!d.capture:!!d,e):gd(a,b,c,!1,d,e)}
function gd(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Qa(e)?!!e.capture:!!e,h=hd(a);h||(a[ad]=h=new Yc(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=id();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)zc||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(jd(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");cd++}}
function id(){function a(c){return b.call(a.src,a.listener,c)}
var b=kd;return a}
function ed(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ed(a,b[f],c,d,e);else c=fd(c),a&&a[Uc]?a.h.add(String(b),c,!0,Qa(d)?!!d.capture:!!d,e):gd(a,b,c,!0,d,e)}
function ld(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)ld(a,b[f],c,d,e);else(d=Qa(d)?!!d.capture:!!d,c=fd(c),a&&a[Uc])?a.h.remove(String(b),c,d,e):a&&(a=hd(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Zc(b,c,d,e)),(c=-1<a?b[a]:null)&&md(c))}
function md(a){if("number"!==typeof a&&a&&!a.Lb){var b=a.src;if(b&&b[Uc])$c(b.h,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(jd(c),d):b.addListener&&b.removeListener&&b.removeListener(d);cd--;(c=hd(b))?($c(c,a),0==c.h&&(c.src=null,b[ad]=null)):Xc(a)}}}
function jd(a){return a in bd?bd[a]:bd[a]="on"+a}
function kd(a,b){if(a.Lb)a=!0;else{b=new Sc(b,this);var c=a.listener,d=a.ac||a.src;a.Vb&&md(a);a=c.call(d,b)}return a}
function hd(a){a=a[ad];return a instanceof Yc?a:null}
var nd="__closure_events_fn_"+(1E9*Math.random()>>>0);function fd(a){if("function"===typeof a)return a;a[nd]||(a[nd]=function(b){return a.handleEvent(b)});
return a[nd]}
;function od(){H.call(this);this.h=new Yc(this);this.Za=this;this.ga=null}
Za(od,H);od.prototype[Uc]=!0;m=od.prototype;m.addEventListener=function(a,b,c,d){dd(this,a,b,c,d)};
m.removeEventListener=function(a,b,c,d){ld(this,a,b,c,d)};
function pd(a,b){var c=a.ga;if(c){var d=[];for(var e=1;c;c=c.ga)d.push(c),++e}a=a.Za;c=b.type||b;"string"===typeof b?b=new uc(b,a):b instanceof uc?b.target=b.target||a:(e=b,b=new uc(c,a),wb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=qd(g,c,!0,b)&&e}b.j||(g=b.h=a,e=qd(g,c,!0,b)&&e,b.j||(e=qd(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=qd(g,c,!1,b)&&e}
m.S=function(){od.Aa.S.call(this);this.removeAllListeners();this.ga=null};
m.listen=function(a,b,c,d){return this.h.add(String(a),b,!1,c,d)};
m.removeAllListeners=function(a){if(this.h){var b=this.h;a=a&&a.toString();var c=0,d;for(d in b.listeners)if(!a||d==a){for(var e=b.listeners[d],f=0;f<e.length;f++)++c,Xc(e[f]);delete b.listeners[d];b.h--}b=c}else b=0;return b};
function qd(a,b,c,d){b=a.h.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Lb&&g.capture==c){var h=g.listener,k=g.ac||g.src;g.Vb&&$c(a.h,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function rd(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
rd.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function sd(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;function td(a,b){return a+Math.random()*(b-a)}
;function ud(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=ud.prototype;m.clone=function(){return new ud(this.x,this.y)};
m.equals=function(a){return a instanceof ud&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function vd(a,b){this.width=a;this.height=b}
m=vd.prototype;m.clone=function(){return new vd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function wd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function xd(a){var b=document;a=String(a);"application/xhtml+xml"===b.contentType&&(a=a.toLowerCase());return b.createElement(a)}
function yd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;var zd;function Ad(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=xd("IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Wa(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Tb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.Zc;c.Zc=null;e()}};
return function(e){d.next={Zc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function Bd(a){C.setTimeout(function(){throw a;},0)}
;function Cd(){this.i=this.h=null}
Cd.prototype.add=function(a,b){var c=Dd.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Cd.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Dd=new rd(function(){return new Ed},function(a){return a.reset()});
function Ed(){this.next=this.scope=this.h=null}
Ed.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ed.prototype.reset=function(){this.next=this.scope=this.h=null};var Fd,Gd=!1,Hd=new Cd;function Id(a,b){Fd||Jd();Gd||(Fd(),Gd=!0);Hd.add(a,b)}
function Jd(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Fd=function(){a.then(Kd)}}else Fd=function(){var b=Kd;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Rb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(zd||(zd=Ad()),zd(b)):C.setImmediate(b)}}
function Kd(){for(var a;a=Hd.remove();){try{a.h.call(a.scope)}catch(b){Bd(b)}sd(Dd,a)}Gd=!1}
;function Ld(a){this.h=0;this.A=void 0;this.l=this.i=this.j=null;this.v=this.m=!1;if(a!=cb)try{var b=this;a.call(void 0,function(c){Md(b,2,c)},function(c){Md(b,3,c)})}catch(c){Md(this,3,c)}}
function Nd(){this.next=this.context=this.h=this.i=this.child=null;this.j=!1}
Nd.prototype.reset=function(){this.context=this.h=this.i=this.child=null;this.j=!1};
var Od=new rd(function(){return new Nd},function(a){a.reset()});
function Pd(a,b,c){var d=Od.get();d.i=a;d.h=b;d.context=c;return d}
function Qd(a){return new Ld(function(b,c){c(a)})}
Ld.prototype.then=function(a,b,c){return Rd(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
Ld.prototype.$goog_Thenable=!0;m=Ld.prototype;m.oc=function(a,b){return Rd(this,null,a,b)};
m.catch=Ld.prototype.oc;m.cancel=function(a){if(0==this.h){var b=new Sd(a);Id(function(){Td(this,b)},this)}};
function Td(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.child==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Td(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Ud(c),Vd(c,e,3,b)))}a.j=null}else Md(a,3,b)}
function Wd(a,b){a.i||2!=a.h&&3!=a.h||Xd(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Rd(a,b,c,d){var e=Pd(null,null,null);e.child=new Ld(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Sd?g(h):f(k)}catch(l){g(l)}}:g});
e.child.j=a;Wd(a,e);return e.child}
m.ef=function(a){this.h=0;Md(this,2,a)};
m.ff=function(a){this.h=0;Md(this,3,a)};
function Md(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.ef,f=a.ff;if(d instanceof Ld){Wd(d,Pd(e||cb,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Qa(d))try{var k=d.then;if("function"===typeof k){Yd(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.A=c,a.h=b,a.j=null,Xd(a),3!=b||c instanceof Sd||Zd(a,c))}}
function Yd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Xd(a){a.m||(a.m=!0,Id(a.Zd,a))}
function Ud(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
m.Zd=function(){for(var a;a=Ud(this);)Vd(this,a,this.h,this.A);this.m=!1};
function Vd(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.v;a=a.j)a.v=!1;if(b.child)b.child.j=null,$d(b,c,d);else try{b.j?b.i.call(b.context):$d(b,c,d)}catch(e){ae.call(null,e)}sd(Od,b)}
function $d(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function Zd(a,b){a.v=!0;Id(function(){a.v&&ae.call(null,b)})}
var ae=Bd;function Sd(a){ab.call(this,a)}
Za(Sd,ab);Sd.prototype.name="cancel";function be(a,b){od.call(this);this.j=a||1;this.i=b||C;this.l=Wa(this.cf,this);this.m=Ya()}
Za(be,od);m=be.prototype;m.enabled=!1;m.Ea=null;m.setInterval=function(a){this.j=a;this.Ea&&this.enabled?(this.stop(),this.start()):this.Ea&&this.stop()};
m.cf=function(){if(this.enabled){var a=Ya()-this.m;0<a&&a<.8*this.j?this.Ea=this.i.setTimeout(this.l,this.j-a):(this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null),pd(this,"tick"),this.enabled&&(this.stop(),this.start()))}};
m.start=function(){this.enabled=!0;this.Ea||(this.Ea=this.i.setTimeout(this.l,this.j),this.m=Ya())};
m.stop=function(){this.enabled=!1;this.Ea&&(this.i.clearTimeout(this.Ea),this.Ea=null)};
m.S=function(){be.Aa.S.call(this);this.stop();delete this.i};
function ce(a,b,c){if("function"===typeof a)c&&(a=Wa(a,c));else if(a&&"function"==typeof a.handleEvent)a=Wa(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(b)?-1:C.setTimeout(a,b||0)}
;function de(a){H.call(this);this.D=a;this.j=0;this.l=100;this.m=!1;this.i=new Map;this.A=new Set;this.flushInterval=3E4;this.h=new be(this.flushInterval);this.h.listen("tick",this.Oa,!1,this);tc(this,this.h)}
w(de,H);m=de.prototype;m.sendIsolatedPayload=function(a){this.m=a;this.l=1};
function ee(a){a.h.enabled||a.h.start();a.j++;a.j>=a.l&&a.Oa()}
m.Oa=function(){var a=this.i.values();a=[].concat(oa(a)).filter(function(b){return b.h.size});
a.length&&this.D.flush(a,this.m);fe(a);this.j=0;this.h.enabled&&this.h.stop()};
m.Rb=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new pc(a,b))};
m.sc=function(a){var b=B.apply(1,arguments);this.i.has(a)||this.i.set(a,new qc(a,b))};
function ge(a,b){return a.A.has(b)?void 0:a.i.get(b)}
m.Pb=function(a){this.Nd.apply(this,[a,1].concat(oa(B.apply(1,arguments))))};
m.Nd=function(a,b){var c=B.apply(2,arguments),d=ge(this,a);d&&d instanceof pc&&(d.l(b,c),ee(this))};
m.record=function(a,b){var c=B.apply(2,arguments),d=ge(this,a);d&&d instanceof qc&&(d.record(b,c),ee(this))};
function fe(a){for(var b=0;b<a.length;b++)a[b].clear()}
;function he(a){this.h=a;this.h.Rb("/client_streamz/bg/fic",{pa:3,oa:"ke"})}
function ie(a){this.h=a;this.h.Rb("/client_streamz/bg/fiec",{pa:3,oa:"rk"},{pa:3,oa:"ke"},{pa:2,oa:"ec"},{pa:3,oa:"em"})}
function je(a){this.h=a;this.h.sc("/client_streamz/bg/fil",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
je.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fil",a,b,c)};
function ke(a){this.h=a;this.h.Rb("/client_streamz/bg/fcc",{pa:2,oa:"ph"},{pa:3,oa:"ke"})}
function le(a){this.h=a;this.h.sc("/client_streamz/bg/fcd",{pa:2,oa:"ph"},{pa:3,oa:"ke"})}
le.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fcd",a,b,c)};
function me(a){this.h=a;this.h.Rb("/client_streamz/bg/fsc",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
function ne(a){this.h=a;this.h.sc("/client_streamz/bg/fsl",{pa:3,oa:"rk"},{pa:3,oa:"ke"})}
ne.prototype.record=function(a,b,c){this.h.record("/client_streamz/bg/fsl",a,b,c)};var oe={toString:function(a){var b=[],c=0;a-=-2147483648;b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(a%52);for(a=Math.floor(a/52);0<a;)b[c++]="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(a%62),a=Math.floor(a/62);return b.join("")}};function pe(a){function b(){c-=d;c-=e;c^=e>>>13;d-=e;d-=c;d^=c<<8;e-=c;e-=d;e^=d>>>13;c-=d;c-=e;c^=e>>>12;d-=e;d-=c;d^=c<<16;e-=c;e-=d;e^=d>>>5;c-=d;c-=e;c^=e>>>3;d-=e;d-=c;d^=c<<10;e-=c;e-=d;e^=d>>>15}
a=qe(a);for(var c=2654435769,d=2654435769,e=314159265,f=a.length,g=f,h=0;12<=g;g-=12,h+=12)c+=re(a,h),d+=re(a,h+4),e+=re(a,h+8),b();e+=f;switch(g){case 11:e+=a[h+10]<<24;case 10:e+=a[h+9]<<16;case 9:e+=a[h+8]<<8;case 8:d+=a[h+7]<<24;case 7:d+=a[h+6]<<16;case 6:d+=a[h+5]<<8;case 5:d+=a[h+4];case 4:c+=a[h+3]<<24;case 3:c+=a[h+2]<<16;case 2:c+=a[h+1]<<8;case 1:c+=a[h+0]}b();return oe.toString(e)}
function qe(a){for(var b=[],c=0;c<a.length;c++)b.push(a.charCodeAt(c));return b}
function re(a,b){return a[b+0]+(a[b+1]<<8)+(a[b+2]<<16)+(a[b+3]<<24)}
;Ub();var se=Bc()||F("iPod"),te=F("iPad");!F("Android")||Vb()||Ub()||Sb()||F("Silk");Vb();var ue=F("Safari")&&!(Vb()||(Rb()?0:F("Coast"))||Sb()||(Rb()?0:F("Edge"))||(Rb()?Qb("Microsoft Edge"):F("Edg/"))||(Rb()?Qb("Opera"):F("OPR"))||Ub()||F("Silk")||F("Android"))&&!(Bc()||F("iPad")||F("iPod"));var ve={},we=null;function xe(a,b){Pa(a);void 0===b&&(b=0);ye();b=ve[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,f=0;e<a.length-2;e+=3){var g=a[e],h=a[e+1],k=a[e+2],l=b[g>>2];g=b[(g&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[f++]=""+l+g+h+k}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[f]=""+b[a>>2]+b[(a&3)<<4|l>>4]+k+d}return c.join("")}
function ze(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ae(a,function(f){d[e++]=f});
return e!==c?d.subarray(0,e):d}
function Ae(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),n=we[l];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}
ye();for(var d=0;;){var e=c(-1),f=c(0),g=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|f>>4);64!=g&&(b(f<<4&240|g>>2),64!=h&&b(g<<6&192|h))}}
function ye(){if(!we){we={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));ve[c]=d;for(var e=0;e<d.length;e++){var f=d[e];void 0===we[f]&&(we[f]=e)}}}}
;var Be="undefined"!==typeof Uint8Array,Ce=!Ec&&"function"===typeof btoa;function De(a){if(!Ce)return xe(a);for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);return btoa(b)}
var Ee=/[-_.]/g,Fe={"-":"+",_:"/",".":"="};function Ge(a){return Fe[a]||""}
function He(a){return Be&&null!=a&&a instanceof Uint8Array}
var Ie={};var Je;function Ke(a){if(a!==Ie)throw Error("illegal external caller");}
function Le(a,b){Ke(b);this.h=a;if(null!=a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}
Le.prototype.sizeBytes=function(){Ke(Ie);var a=this.h;if(null!=a&&!He(a))if("string"===typeof a)if(Ce){Ee.test(a)&&(a=a.replace(Ee,Ge));a=atob(a);for(var b=new Uint8Array(a.length),c=0;c<a.length;c++)b[c]=a.charCodeAt(c);a=b}else a=ze(a);else Oa(a),a=null;return(a=null==a?a:this.h=a)?a.length:0};function Me(){return"function"===typeof BigInt}
;function Ne(a){return Array.prototype.slice.call(a)}
;var Oe;Oe="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,oa(Object.values({If:1,Gf:2,Ff:4,Lf:8,Kf:16,Jf:32,wf:64,Nf:128,Ef:256,Df:512,Hf:1024,Bf:2048,Mf:4096,Cf:8192})));var Pe=Oe?function(a,b){a[Oe]|=b}:function(a,b){void 0!==a.Sa?a.Sa|=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Qe(a,b,c){return c?a|b:a&~b}
var Re=Oe?function(a){return a[Oe]|0}:function(a){return a.Sa|0},Se=Oe?function(a){return a[Oe]}:function(a){return a.Sa},Te=Oe?function(a,b){a[Oe]=b;
return a}:function(a,b){void 0!==a.Sa?a.Sa=b:Object.defineProperties(a,{Sa:{value:b,
configurable:!0,writable:!0,enumerable:!1}});return a};
function Ue(a,b){Te(b,(a|0)&-14591)}
function Ve(a,b){Te(b,(a|34)&-14557)}
function We(a){a=a>>14&1023;return 0===a?536870912:a}
;var Xe={},Ye={};function Ze(a){return!(!a||"object"!==typeof a||a.h!==Ye)}
function $e(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var af;function bf(a,b,c){if(!Array.isArray(a)||a.length)return!1;var d=Re(a);if(d&1)return!0;if(!(b&&(Array.isArray(b)?b.includes(c):b.has(c))))return!1;Te(a,d|1);return!0}
var cf,df=[];Te(df,55);cf=Object.freeze(df);function ef(a){if(a&2)throw Error();}
Object.freeze(new function(){});
Object.freeze(new function(){});var ff=0,gf=0;function hf(a){var b=0>a;a=Math.abs(a);var c=a>>>0;a=Math.floor((a-c)/4294967296);b&&(c=v(jf(c,a)),b=c.next().value,a=c.next().value,c=b);ff=c>>>0;gf=a>>>0}
function kf(a,b){b>>>=0;a>>>=0;if(2097151>=b)var c=""+(4294967296*b+a);else Me()?c=""+(BigInt(b)<<BigInt(32)|BigInt(a)):(c=(a>>>24|b<<8)&16777215,b=b>>16&65535,a=(a&16777215)+6777216*c+6710656*b,c+=8147497*b,b*=2,1E7<=a&&(c+=Math.floor(a/1E7),a%=1E7),1E7<=c&&(b+=Math.floor(c/1E7),c%=1E7),c=b+lf(c)+lf(a));return c}
function lf(a){a=String(a);return"0000000".slice(a.length)+a}
function mf(){var a=ff,b=gf;b&2147483648?Me()?a=""+(BigInt(b|0)<<BigInt(32)|BigInt(a>>>0)):(b=v(jf(a,b)),a=b.next().value,b=b.next().value,a="-"+kf(a,b)):a=kf(a,b);return a}
function jf(a,b){b=~b;a?a=~a+1:b+=1;return[a,b]}
;function nf(a){a=Error(a);a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity="warning";return a}
;function of(a){return a.displayName||a.name||"unknown type name"}
function pf(a){if(null!=a&&"boolean"!==typeof a)throw Error("Expected boolean but got "+Oa(a)+": "+a);return a}
var qf=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function rf(a){var b=typeof a;return"number"===b?Number.isFinite(a):"string"!==b?!1:qf.test(a)}
function sf(a){if(null!=a){if("number"!==typeof a)throw nf("int32");if(!Number.isFinite(a))throw nf("int32");a|=0}return a}
function tf(a){if(null==a)return a;if("string"===typeof a){if(!a)return;a=+a}if("number"===typeof a)return Number.isFinite(a)?a|0:void 0}
function uf(a){if(null!=a){var b=!!b;if(!rf(a))throw nf("int64");a="string"===typeof a?vf(a):b?wf(a):xf(a)}return a}
function yf(a){return"-"===a[0]?20>a.length?!0:20===a.length&&-922337<Number(a.substring(0,7)):19>a.length?!0:19===a.length&&922337>Number(a.substring(0,6))}
function xf(a){rf(a);a=Math.trunc(a);if(!Number.isSafeInteger(a)){hf(a);var b=ff,c=gf;if(a=c&2147483648)b=~b+1>>>0,c=~c>>>0,0==b&&(c=c+1>>>0);b=4294967296*c+(b>>>0);a=a?-b:b}return a}
function wf(a){rf(a);a=Math.trunc(a);if(Number.isSafeInteger(a))a=String(a);else{var b=String(a);yf(b)?a=b:(hf(a),a=mf())}return a}
function vf(a){rf(a);var b=Math.trunc(Number(a));if(Number.isSafeInteger(b))return String(b);b=a.indexOf(".");-1!==b&&(a=a.substring(0,b));a.indexOf(".");if(!yf(a)){if(16>a.length)hf(Number(a));else if(Me())a=BigInt(a),ff=Number(a&BigInt(4294967295))>>>0,gf=Number(a>>BigInt(32)&BigInt(4294967295));else{b=+("-"===a[0]);gf=ff=0;for(var c=a.length,d=0+b,e=(c-b)%6+b;e<=c;d=e,e+=6)d=Number(a.slice(d,e)),gf*=1E6,ff=1E6*ff+d,4294967296<=ff&&(gf+=Math.trunc(ff/4294967296),gf>>>=0,ff>>>=0);b&&(b=v(jf(ff,gf)),
a=b.next().value,b=b.next().value,ff=a,gf=b)}a=mf()}return a}
function zf(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function Af(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+of(b)+" but got "+(a&&of(a.constructor)));}
function Bf(a,b,c){if(null!=a&&"object"===typeof a&&a.Jc===Xe)return a;if(Array.isArray(a)){var d=Re(a),e=d;0===e&&(e|=c&32);e|=c&2;e!==d&&Te(a,e);return new b(a)}}
;var Cf;function Df(a,b){Re(b);Cf=b;a=new a(b);Cf=void 0;return a}
function I(a,b,c){null==a&&(a=Cf);Cf=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-16760833|(b&1023)<<14)}else{if(!Array.isArray(a))throw Error();d=Re(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1;if($e(c[f])){d|=256;b=f-(+!!(d&512)-1);if(1024<=b)throw Error();d=d&-16760833|(b&1023)<<14;break a}}if(b){b=Math.max(b,e-(+!!(d&512)-1));if(1024<b)throw Error();d=d&-16760833|(b&1023)<<14}}}Te(a,d);return a}
;function Ef(a,b){return Ff(b)}
function Ff(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a)if(Array.isArray(a)){if(bf(a,void 0,0))return}else{if(He(a))return De(a);if(a instanceof Le){var b=a.h;return null==b?"":"string"===typeof b?b:a.h=De(b)}}}return a}
;function Gf(a,b,c){a=Ne(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function Hf(a,b,c,d,e){if(null!=a){if(Array.isArray(a))a=bf(a,void 0,0)?void 0:e&&Re(a)&2?a:If(a,b,c,void 0!==d,e);else if($e(a)){var f={},g;for(g in a)f[g]=Hf(a[g],b,c,d,e);a=f}else a=b(a,d);return a}}
function If(a,b,c,d,e){var f=d||c?Re(a):0;d=d?!!(f&32):void 0;a=Ne(a);for(var g=0;g<a.length;g++)a[g]=Hf(a[g],b,c,d,e);c&&c(f,a);return a}
function Jf(a){return a.Jc===Xe?a.toJSON():Ff(a)}
;function Kf(a,b,c){c=void 0===c?Ve:c;if(null!=a){if(Be&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=Re(a);if(d&2)return a;b&&(b=0===d||!!(d&32)&&!(d&64||!(d&16)));return b?Te(a,(d|34)&-12293):If(a,Kf,d&4?Ve:c,!0,!0)}a.Jc===Xe&&(c=a.F,d=Se(c),a=d&2?a:Df(a.constructor,Lf(c,d,!0)));return a}}
function Lf(a,b,c){var d=c||b&2?Ve:Ue,e=!!(b&32);a=Gf(a,b,function(f){return Kf(f,e,d)});
Pe(a,32|(c?2:0));return a}
function Mf(a){var b=a.F,c=Se(b);return c&2?Df(a.constructor,Lf(b,c,!1)):a}
;function Nf(a,b){a=a.F;return Of(a,Se(a),b)}
function Of(a,b,c,d){if(-1===c)return null;if(c>=We(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function Pf(a,b,c){var d=a.F,e=Se(d);ef(e);Qf(d,e,b,c);return a}
function Qf(a,b,c,d,e){$e(d);var f=We(b);if(c>=f||e){var g=b;if(b&256)e=a[a.length-1];else{if(null==d)return g;e=a[f+(+!!(b&512)-1)]={};g|=256}e[c]=d;c<f&&(a[c+(+!!(b&512)-1)]=void 0);g!==b&&Te(a,g);return g}a[c+(+!!(b&512)-1)]=d;b&256&&(a=a[a.length-1],c in a&&delete a[c]);return b}
function Rf(a){return void 0!==Sf(a,Tf,11,!1)}
function Uf(a){return!!(2&a)&&!!(4&a)||!!(2048&a)}
function Vf(a,b,c,d){a=a.F;var e=Se(a);ef(e);for(var f=e,g=0,h=0;h<c.length;h++){var k=c[h];null!=Of(a,f,k)&&(0!==g&&(f=Qf(a,f,g)),g=k)}(c=g)&&c!==b&&null!=d&&(e=Qf(a,e,c));Qf(a,e,b,d)}
function Sf(a,b,c,d){a=a.F;var e=Se(a),f=Of(a,e,c,d);b=Bf(f,b,e);b!==f&&null!=b&&Qf(a,e,c,b,d);return b}
function Wf(a,b,c,d){d=void 0===d?!1:d;b=Sf(a,b,c,d);if(null==b)return b;a=a.F;var e=Se(a);if(!(e&2)){var f=Mf(b);f!==b&&(b=f,Qf(a,e,c,b,d))}return b}
function Xf(a,b,c,d){null!=d?Af(d,b):d=void 0;return Pf(a,c,d)}
function Yf(a,b,c,d){var e=a.F,f=Se(e);ef(f);if(null==d)return Qf(e,f,c),a;if(!Array.isArray(d))throw nf();for(var g=Re(d),h=g,k=!!(2&g)||!!(2048&g),l=k||Object.isFrozen(d),n=!l&&!1,p=!0,r=!0,t=0;t<d.length;t++){var x=d[t];Af(x,b);k||(x=!!(Re(x.F)&2),p&&(p=!x),r&&(r=x))}k||(g=Qe(g,5,!0),g=Qe(g,8,p),g=Qe(g,16,r));if(n||l&&g!==h)d=Ne(d),h=0,g=Zf(g,f,!0);g!==h&&Te(d,g);Qf(e,f,c,d);return a}
function Zf(a,b,c){a=Qe(a,2,!!(2&b));a=Qe(a,32,!!(32&b)&&c);return a=Qe(a,2048,!1)}
function $f(a,b){a=Nf(a,b);var c;null==a?c=a:rf(a)?"number"===typeof a?c=xf(a):c=vf(a):c=void 0;return c}
function ag(a){a=Nf(a,1);var b=void 0===b?!1:b;b=null==a?a:rf(a)?"string"===typeof a?vf(a):b?wf(a):xf(a):void 0;return b}
function bg(a){a=Nf(a,1);return null==a?a:Number.isFinite(a)?a|0:void 0}
function cg(a,b,c){return Pf(a,b,zf(c))}
function dg(a,b,c){if(null!=c){if(!Number.isFinite(c))throw nf("enum");c|=0}return Pf(a,b,c)}
;function K(a,b,c){this.F=I(a,b,c)}
m=K.prototype;m.toJSON=function(){if(af)var a=eg(this,this.F,!1);else a=If(this.F,Jf,void 0,void 0,!1),a=eg(this,a,!0);return a};
m.serialize=function(){af=!0;try{return JSON.stringify(this.toJSON(),Ef)}finally{af=!1}};
function fg(a,b){if(null==b||""==b)return new a;b=JSON.parse(b);if(!Array.isArray(b))throw Error(void 0);Pe(b,32);return Df(a,b)}
m.clone=function(){var a=this.F,b=Se(a);return Df(this.constructor,Lf(a,b,!1))};
m.Jc=Xe;m.toString=function(){return eg(this,this.F,!1).toString()};
function eg(a,b,c){var d=a.constructor.Ua,e=Se(c?a.F:b);a=b.length;if(!a)return b;var f;if($e(c=b[a-1])){a:{var g=c;var h={},k=!1,l;for(l in g){var n=g[l];if(Array.isArray(n)){var p=n;if(bf(n,d,+l)||Ze(n)&&0===n.size)n=null;n!=p&&(k=!0)}null!=n?h[l]=n:k=!0}if(k){for(var r in h){g=h;break a}g=null}}g!=c&&(f=!0);a--}for(l=+!!(e&512)-1;0<a;a--){r=a-1;c=b[r];r-=l;if(!(null==c||bf(c,d,r)||Ze(c)&&0===c.size))break;var t=!0}if(!f&&!t)return b;b=Array.prototype.slice.call(b,0,a);g&&b.push(g);return b}
;function gg(a){this.F=I(a)}
w(gg,K);var hg=[1,2,3];function ig(a){this.F=I(a)}
w(ig,K);var jg=[1,2,3];function kg(a){this.F=I(a)}
w(kg,K);kg.Ua=[1];function lg(a){this.F=I(a)}
w(lg,K);lg.Ua=[3,6,4];function mg(a){this.F=I(a)}
w(mg,K);mg.Ua=[1];function ng(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function og(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var r=g,t=0;64>t;t+=4)r[t/4]=p[t]<<24|p[t+1]<<16|p[t+2]<<8|p[t+3];for(t=16;80>t;t++)p=r[t-3]^r[t-8]^r[t-14]^r[t-16],r[t]=(p<<1|p>>>31)&4294967295;p=e[0];var x=e[1],z=e[2],y=e[3],J=e[4];for(t=0;80>t;t++){if(40>t)if(20>t){var G=y^x&(z^y);var M=1518500249}else G=x^z^y,M=1859775393;else 60>t?(G=x&z|y&(x|z),M=2400959708):(G=x^z^y,M=3395469782);G=((p<<5|p>>>27)&4294967295)+G+J+M+r[t]&4294967295;J=y;y=z;z=(x<<30|x>>>2)&4294967295;x=p;p=G}e[0]=e[0]+p&4294967295;e[1]=e[1]+x&4294967295;e[2]=
e[2]+z&4294967295;e[3]=e[3]+y&4294967295;e[4]=e[4]+J&4294967295}
function c(p,r){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var t=[],x=0,z=p.length;x<z;++x)t.push(p.charCodeAt(x));p=t}r||(r=p.length);t=0;if(0==l)for(;t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64;for(;t<r;)if(f[l++]=p[t++],n++,64==l)for(l=0,b(f);t+64<r;)b(p.slice(t,t+64)),t+=64,n+=64}
function d(){var p=[],r=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var t=63;56<=t;t--)f[t]=r&255,r>>>=8;b(f);for(t=r=0;5>t;t++)for(var x=24;0<=x;x-=8)p[r++]=e[t]>>x&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Vd:function(){for(var p=d(),r="",t=0;t<p.length;t++)r+="0123456789ABCDEF".charAt(Math.floor(p[t]/16))+"0123456789ABCDEF".charAt(p[t]%16);return r}}}
;function pg(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,qg(ng(d),a,c||null)].join(" "):null}
function qg(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],fb(d,function(h){e.push(h)}),rg(e.join(" "));
var f=[],g=[];fb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];fb(d,function(h){e.push(h)});
a=rg(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function rg(a){var b=og();b.update(a);return b.Vd().toLowerCase()}
;var sg={};function tg(a){this.h=a||{cookie:""}}
m=tg.prototype;m.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(this.h.cookie)return!0;this.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.jg;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.fc}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Jb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{fc:0,path:b,domain:c});return d};
m.Ac=function(){return ug(this).keys};
m.clear=function(){for(var a=ug(this).keys,b=a.length-1;0<=b;b--)this.remove(a[b])};
function ug(a){a=(a.h.cookie||"").split(";");for(var b=[],c=[],d,e,f=0;f<a.length;f++)e=Jb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));return{keys:b,values:c}}
var vg=new tg("undefined"==typeof document?null:document);function wg(a){return!!sg.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function xg(a){a=void 0===a?!1:a;var b=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;wg(a)&&(b=b||C.__1PSAPISID);if(b)return!0;if("undefined"!==typeof document){var c=new tg(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID")||c.get("OSID");wg(a)&&(b=b||c.get("__Secure-1PAPISID"))}return!!b}
function yg(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new tg(document)).get(b));return a?pg(a,c,d):null}
function zg(a,b){b=void 0===b?!1:b;var c=ng(String(C.location.href)),d=[];if(xg(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?C.__SAPISID:C.__APISID;e||"undefined"===typeof document||(e=new tg(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?pg(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&wg(b)&&((b=yg("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=yg("__3PSAPISID","__Secure-3PAPISID",
"SAPISID3PHASH",a))&&d.push(a))}return 0==d.length?null:d.join(" ")}
;function Ag(a){this.F=I(a)}
w(Ag,K);Ag.Ua=[2];function Bg(a){od.call(this);this.intervalMs=a;this.enabled=!1;this.i=function(){return Ya()};
this.j=this.i()}
w(Bg,od);Bg.prototype.setInterval=function(a){this.intervalMs=a;this.timer&&this.enabled?(this.stop(),this.start()):this.timer&&this.stop()};
Bg.prototype.start=function(){var a=this;this.enabled=!0;this.timer||(this.timer=setTimeout(function(){a.tick()},this.intervalMs),this.j=this.i())};
Bg.prototype.stop=function(){this.enabled=!1;this.timer&&(clearTimeout(this.timer),this.timer=void 0)};
Bg.prototype.tick=function(){var a=this;if(this.enabled){var b=Math.max(this.i()-this.j,0);b<.8*this.intervalMs?this.timer=setTimeout(function(){a.tick()},this.intervalMs-b):(this.timer&&(clearTimeout(this.timer),this.timer=void 0),pd(this,"tick"),this.enabled&&(this.stop(),this.start()))}else this.timer=void 0};function Cg(a){this.F=I(a)}
w(Cg,K);function Dg(a){this.F=I(a)}
w(Dg,K);function Eg(a){this.h=this.i=this.j=a}
Eg.prototype.reset=function(){this.h=this.i=this.j};
Eg.prototype.getValue=function(){return this.i};function Fg(a){this.F=I(a)}
w(Fg,K);Fg.prototype.Bc=function(){return bg(this)};function Gg(a){this.F=I(a)}
w(Gg,K);function Hg(a){this.F=I(a)}
w(Hg,K);function Ig(a,b){Yf(a,Gg,1,b)}
Hg.Ua=[1];function Tf(a){this.F=I(a)}
w(Tf,K);var Jg=["platform","platformVersion","architecture","model","uaFullVersion"],Kg=new Hg,Lg=null;function Ng(a,b){b=void 0===b?Jg:b;if(!Lg){var c;a=null==(c=a.navigator)?void 0:c.userAgentData;if(!a||"function"!==typeof a.getHighEntropyValues)return Promise.reject(Error("UACH unavailable"));c=(a.brands||[]).map(function(d){var e=new Gg;e=cg(e,1,d.brand);return cg(e,2,d.version)});
Ig(Pf(Kg,2,pf(a.mobile)),c);Lg=a.getHighEntropyValues(b)}return Lg.then(function(d){var e=Kg.clone();b.includes("platform")&&cg(e,3,d.platform);b.includes("platformVersion")&&cg(e,4,d.platformVersion);b.includes("architecture")&&cg(e,5,d.architecture);b.includes("model")&&cg(e,6,d.model);b.includes("uaFullVersion")&&cg(e,7,d.uaFullVersion);return e}).catch(function(){return Kg.clone()})}
;function Og(a){this.F=I(a)}
w(Og,K);function Pg(a){this.F=I(a,4)}
w(Pg,K);function Qg(a){this.F=I(a,35)}
w(Qg,K);Qg.Ua=[3,20,27];function Rg(a){this.F=I(a,19)}
w(Rg,K);Rg.prototype.Mb=function(a){return dg(this,2,a)};
Rg.Ua=[3,5];function Sg(a){this.F=I(a,7)}
w(Sg,K);var Tg=function(a){return function(b){return fg(a,b)}}(Sg);
Sg.Ua=[5,6];function Ug(a){this.F=I(a)}
w(Ug,K);var Vg=new function(a,b){this.h=a;this.ctor=b;this.isRepeated=0;this.i=Wf;this.defaultValue=void 0}(175237375,Ug);function Wg(a){H.call(this);var b=this;this.componentId="";this.j=[];this.ba="";this.ea=this.X=-1;this.experimentIds=null;this.T=this.m=0;this.ga=1;this.timeoutMillis=0;this.logSource=a.logSource;this.Gb=a.Gb||function(){};
this.i=new Xg(a.logSource,a.eb);this.network=a.network;this.yb=a.yb||null;this.bufferSize=1E3;this.ka=Xa(td,0,1);this.A=a.gf||null;this.sessionIndex=a.sessionIndex||null;this.Eb=a.Eb||!1;this.pageId=a.pageId||null;this.logger=null;this.withCredentials=!a.dd;this.eb=a.eb||!1;this.P="undefined"!==typeof URLSearchParams&&!!(new URL(Yg(this))).searchParams&&!!(new URL(Yg(this))).searchParams.set;var c=dg(new Og,1,1);Zg(this.i,c);this.l=new Eg(1E4);this.h=new Bg(this.l.getValue());a=$g(this,a.Wc);dd(this.h,
"tick",a,!1,this);this.D=new Bg(6E5);dd(this.D,"tick",a,!1,this);this.Eb||this.D.start();this.eb||(dd(document,"visibilitychange",function(){"hidden"===document.visibilityState&&b.vc()}),dd(document,"pagehide",this.vc,!1,this))}
w(Wg,H);function $g(a,b){return a.P?b?function(){b().then(function(){a.flush()})}:function(){a.flush()}:function(){}}
m=Wg.prototype;m.S=function(){this.vc();this.h.stop();this.D.stop();H.prototype.S.call(this)};
m.log=function(a){if(this.P){a=a.clone();var b=this.ga++;a=Pf(a,21,uf(b));this.componentId&&cg(a,26,this.componentId);if(!ag(a)){var c=Date.now();b=a;c=Number.isFinite(c)?c.toString():"0";Pf(b,1,uf(c))}null==$f(a,15)&&Pf(a,15,uf(60*(new Date).getTimezoneOffset()));this.experimentIds&&(b=a,c=this.experimentIds.clone(),Xf(b,Ag,16,c));b=this.j.length-this.bufferSize+1;0<b&&(this.j.splice(0,b),this.m+=b);this.j.push(a);this.Eb||this.h.enabled||this.h.start()}};
m.flush=function(a,b){var c=this;if(0===this.j.length)a&&a();else{var d=Date.now();if(this.ea>d&&this.X<d)b&&b("throttled");else{this.network&&("function"===typeof this.network.Bc?ah(this.i,this.network.Bc()):ah(this.i,0));var e=bh(this.i,this.j,this.m,this.T,this.yb);d={};var f=this.Gb();f&&(d.Authorization=f);this.A||(this.A=Yg(this));try{var g=(new URL(this.A)).toString()}catch(k){g=(new URL(this.A,window.location.origin)).toString()}g=new URL(g);this.sessionIndex&&(d["X-Goog-AuthUser"]=this.sessionIndex,
g.searchParams.set("authuser",this.sessionIndex));this.pageId&&(d["X-Goog-PageId"]=this.pageId,g.searchParams.set("pageId",this.pageId));if(f&&this.ba===f)b&&b("stale-auth-token");else{this.j=[];this.h.enabled&&this.h.stop();this.m=0;var h=e.serialize();d={url:g.toString(),body:h,Qf:1,Ie:d,requestType:"POST",withCredentials:this.withCredentials,timeoutMillis:this.timeoutMillis};g=function(k){c.l.reset();c.h.setInterval(c.l.getValue());if(k){var l=null;try{var n=JSON.stringify(JSON.parse(k.replace(")]}'\n",
"")));l=Tg(n)}catch(r){}if(l){k=Number;n="-1";n=void 0===n?"0":n;var p=ag(l);k=k(null!=p?p:n);0<k&&(c.X=Date.now(),c.ea=c.X+k);l=Vg.ctor?Vg.i(l,Vg.ctor,Vg.h,!0):Vg.i(l,Vg.h,null,!0);if(k=null===l?void 0:l)l=-1,l=void 0===l?0:l,k=tf(Nf(k,1)),l=null!=k?k:l,-1!==l&&(c.l=new Eg(1>l?1:l),c.h.setInterval(c.l.getValue()))}}a&&a();c.T=0};
h=function(k,l){var n=e.F;var p=Se(n),r=p,t=!(2&p),x=!!(2&r),z=x?1:2;p=1===z;z=2===z;t&&(t=!x);x=Of(n,r,3);x=Array.isArray(x)?x:cf;var y=Re(x),J=!!(4&y);if(!J){var G=y;0===G&&(G=Zf(G,r,!1));G=Qe(G,1,!0);y=x;var M=r,P=!!(2&G);P&&(M=Qe(M,2,!0));for(var ea=!P,aa=!0,S=0,fa=0;S<y.length;S++){var la=Bf(y[S],Qg,M);if(la instanceof Qg){if(!P){var ma=!!(Re(la.F)&2);ea&&(ea=!ma);aa&&(aa=ma)}y[fa++]=la}}fa<S&&(y.length=fa);G=Qe(G,4,!0);G=Qe(G,16,aa);G=Qe(G,8,ea);Te(y,G);P&&Object.freeze(y);y=G}G=!!(8&y)||p&&
!x.length;if(t&&!G){Uf(y)&&(x=Ne(x),y=Zf(y,r,!1),r=Qf(n,r,3,x));t=x;for(G=0;G<t.length;G++)M=t[G],P=Mf(M),M!==P&&(t[G]=P);y=Qe(y,8,!0);y=Qe(y,16,!t.length);Te(t,y)}Uf(y)||(t=y,p?y=Qe(y,!x.length||16&y&&(!J||32&y)?2:2048,!0):y=Qe(y,32,!1),y!==t&&Te(x,y),p&&Object.freeze(x));z&&Uf(y)&&(x=Ne(x),y=Zf(y,r,!1),Te(x,y),Qf(n,r,3,x));n=x;r=$f(e,14);p=c.l;p.h=Math.min(3E5,2*p.h);p.i=Math.min(3E5,p.h+Math.round(.2*(Math.random()-.5)*p.h));c.h.setInterval(c.l.getValue());401===k&&f&&(c.ba=f);r&&(c.m+=r);void 0===
l&&(l=c.isRetryable(k));l&&(c.j=n.concat(c.j),c.Eb||c.h.enabled||c.h.start());b&&b("net-send-failed",k);++c.T};
c.network&&c.network.send(d,g,h)}}}};
m.vc=function(){ch(this.i,!0);this.flush();ch(this.i,!1)};
m.isRetryable=function(a){return 500<=a&&600>a||401===a||0===a};
function Yg(a){return.01>a.ka()?"https://www.google.com/log?format=json&hasfast=true":"https://play.google.com/log?format=json&hasfast=true"}
function Xg(a,b){this.eb=b=void 0===b?!1:b;this.uach=this.locale=null;this.h=new Rg;Number.isInteger(a)&&this.h.Mb(a);b||(this.locale=document.documentElement.getAttribute("lang"));Zg(this,new Og)}
Xg.prototype.Mb=function(a){this.h.Mb(a);return this};
function Zg(a,b){Xf(a.h,Og,1,b);bg(b)||dg(b,1,1);if(!a.eb){b=dh(a);var c=Nf(b,5);(null==c||"string"===typeof c)&&c||cg(b,5,a.locale)}a.uach&&(b=dh(a),Wf(b,Hg,9)||Xf(b,Hg,9,a.uach))}
function ah(a,b){Rf(eh(a))&&(a=fh(a),dg(a,1,b))}
function ch(a,b){Rf(eh(a))&&(a=fh(a),Pf(a,2,pf(b)))}
function eh(a){return Wf(a.h,Og,1)}
function gh(a){var b=void 0===b?Jg:b;var c=a.eb?void 0:window;c?Ng(c,b).then(function(d){a.uach=d;d=dh(a);Xf(d,Hg,9,a.uach);return!0}).catch(function(){return!1}):Promise.resolve(!1)}
function dh(a){a=eh(a);var b=Wf(a,Tf,11);b||(b=new Tf,Xf(a,Tf,11,b));return b}
function fh(a){a=dh(a);var b=Wf(a,Fg,10);b||(b=new Fg,Pf(b,2,pf(!1)),Xf(a,Fg,10,b));return b}
function bh(a,b,c,d,e){var f=0,g=0;c=void 0===c?0:c;f=void 0===f?0:f;g=void 0===g?0:g;d=void 0===d?0:d;if(Rf(eh(a))){var h=fh(a);Pf(h,3,sf(d))}Rf(eh(a))&&(d=fh(a),Pf(d,4,sf(f)));Rf(eh(a))&&(f=fh(a),Pf(f,5,sf(g)));a=a.h.clone();g=Date.now().toString();a=Pf(a,4,uf(g));b=Yf(a,Qg,3,b);e&&(a=new Cg,e=Pf(a,13,sf(e)),a=new Dg,e=Xf(a,Cg,2,e),a=new Pg,e=Xf(a,Dg,1,e),e=dg(e,2,9),Xf(b,Pg,18,e));c&&Pf(b,14,uf(c));return b}
;function hh(){}
hh.prototype.serialize=function(a){var b=[];ih(this,a,b);return b.join("")};
function ih(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),ih(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),jh(d,c),c.push(":"),ih(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":jh(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var kh={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},lh=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function jh(a,b){b.push('"',a.replace(lh,function(c){var d=kh[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).slice(1),kh[c]=d);return d}),'"')}
;function mh(){}
mh.prototype.h=null;mh.prototype.getOptions=function(){var a;(a=this.h)||(a={},nh(this)&&(a[0]=!0,a[1]=!0),a=this.h=a);return a};var oh;function ph(){}
Za(ph,mh);function qh(a){return(a=nh(a))?new ActiveXObject(a):new XMLHttpRequest}
function nh(a){if(!a.i&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.i=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.i}
oh=new ph;function rh(a){od.call(this);this.headers=new Map;this.T=a||null;this.i=!1;this.P=this.J=null;this.l=this.ea="";this.j=this.ba=this.A=this.X=!1;this.m=0;this.D=null;this.Pa="";this.ka=this.Ba=!1}
Za(rh,od);var sh=/^https?$/i,th=["POST","PUT"],uh=[];function vh(a,b,c,d,e,f,g){var h=new rh;uh.push(h);b&&h.listen("complete",b);h.h.add("ready",h.Td,!0,void 0,void 0);f&&(h.m=Math.max(0,f));g&&(h.Ba=g);h.send(a,c,d,e)}
m=rh.prototype;m.Td=function(){this.dispose();kb(uh,this)};
m.send=function(a,b,c,d){if(this.J)throw Error("[goog.net.XhrIo] Object is active with another request="+this.ea+"; newUri="+a);b=b?b.toUpperCase():"GET";this.ea=a;this.l="";this.X=!1;this.i=!0;this.J=this.T?qh(this.T):qh(oh);this.P=this.T?this.T.getOptions():oh.getOptions();this.J.onreadystatechange=Wa(this.rd,this);try{this.getStatus(),this.ba=!0,this.J.open(b,String(a),!0),this.ba=!1}catch(g){this.getStatus();wh(this,g);return}a=c||"";c=new Map(this.headers);if(d)if(Object.getPrototypeOf(d)===
Object.prototype)for(var e in d)c.set(e,d[e]);else if("function"===typeof d.keys&&"function"===typeof d.get){e=v(d.keys());for(var f=e.next();!f.done;f=e.next())f=f.value,c.set(f,d.get(f))}else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(c.keys()).find(function(g){return"content-type"==g.toLowerCase()});
e=C.FormData&&a instanceof C.FormData;!(0<=eb(th,b))||d||e||c.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");b=v(c);for(d=b.next();!d.done;d=b.next())c=v(d.value),d=c.next().value,c=c.next().value,this.J.setRequestHeader(d,c);this.Pa&&(this.J.responseType=this.Pa);"withCredentials"in this.J&&this.J.withCredentials!==this.Ba&&(this.J.withCredentials=this.Ba);try{xh(this),0<this.m&&(this.ka=yh(this.J),this.getStatus(),this.ka?(this.J.timeout=this.m,this.J.ontimeout=Wa(this.Gd,
this)):this.D=ce(this.Gd,this.m,this)),this.getStatus(),this.A=!0,this.J.send(a),this.A=!1}catch(g){this.getStatus(),wh(this,g)}};
function yh(a){return Ec&&"number"===typeof a.timeout&&void 0!==a.ontimeout}
m.Gd=function(){"undefined"!=typeof Na&&this.J&&(this.l="Timed out after "+this.m+"ms, aborting",this.getStatus(),pd(this,"timeout"),this.abort(8))};
function wh(a,b){a.i=!1;a.J&&(a.j=!0,a.J.abort(),a.j=!1);a.l=b;zh(a);Ah(a)}
function zh(a){a.X||(a.X=!0,pd(a,"complete"),pd(a,"error"))}
m.abort=function(){this.J&&this.i&&(this.getStatus(),this.i=!1,this.j=!0,this.J.abort(),this.j=!1,pd(this,"complete"),pd(this,"abort"),Ah(this))};
m.S=function(){this.J&&(this.i&&(this.i=!1,this.j=!0,this.J.abort(),this.j=!1),Ah(this,!0));rh.Aa.S.call(this)};
m.rd=function(){this.Z()||(this.ba||this.A||this.j?Bh(this):this.Ae())};
m.Ae=function(){Bh(this)};
function Bh(a){if(a.i&&"undefined"!=typeof Na)if(a.P[1]&&4==Ch(a)&&2==a.getStatus())a.getStatus();else if(a.A&&4==Ch(a))ce(a.rd,0,a);else if(pd(a,"readystatechange"),a.isComplete()){a.getStatus();a.i=!1;try{if(Dh(a))pd(a,"complete"),pd(a,"success");else{try{var b=2<Ch(a)?a.J.statusText:""}catch(c){b=""}a.l=b+" ["+a.getStatus()+"]";zh(a)}}finally{Ah(a)}}}
function Ah(a,b){if(a.J){xh(a);var c=a.J,d=a.P[0]?function(){}:null;
a.J=null;a.P=null;b||pd(a,"ready");try{c.onreadystatechange=d}catch(e){}}}
function xh(a){a.J&&a.ka&&(a.J.ontimeout=null);a.D&&(C.clearTimeout(a.D),a.D=null)}
m.isActive=function(){return!!this.J};
m.isComplete=function(){return 4==Ch(this)};
function Dh(a){var b=a.getStatus();a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break a;default:c=!1}if(!c){if(b=0===b)a=bc(1,String(a.ea)),!a&&C.self&&C.self.location&&(a=C.self.location.protocol.slice(0,-1)),b=!sh.test(a?a.toLowerCase():"");c=b}return c}
function Ch(a){return a.J?a.J.readyState:0}
m.getStatus=function(){try{return 2<Ch(this)?this.J.status:-1}catch(a){return-1}};
m.getLastError=function(){return"string"===typeof this.l?this.l:String(this.l)};function Eh(){}
Eh.prototype.send=function(a,b,c){b=void 0===b?function(){}:b;
c=void 0===c?function(){}:c;
vh(a.url,function(d){d=d.target;if(Dh(d)){try{var e=d.J?d.J.responseText:""}catch(f){e=""}b(e)}else c(d.getStatus())},a.requestType,a.body,a.Ie,a.timeoutMillis,a.withCredentials)};
Eh.prototype.Bc=function(){return 1};function Fh(a,b){H.call(this);this.logSource=a;this.sessionIndex=b;this.i="https://play.google.com/log?format=json&hasfast=true";this.h=null;this.j=!1;this.componentId="";this.yb=null;this.network=new Eh}
w(Fh,H);Fh.prototype.dd=function(){this.l=!0;return this};function Gh(a,b,c,d,e,f,g){a=void 0===a?-1:a;b=void 0===b?"":b;c=void 0===c?"":c;d=void 0===d?!1:d;e=void 0===e?"":e;H.call(this);this.logSource=a;this.componentId=b;f?a=f:(a=new Fh(a,"0"),a.componentId=b,tc(this,a),""!==c&&(a.i=c),d&&(a.j=!0),e&&(a.h=e),g&&(a.network=g),b=new Wg({logSource:a.logSource,Gb:a.Gb?a.Gb:zg,sessionIndex:a.sessionIndex,gf:a.i,eb:a.j,Eb:!1,dd:a.l,pageId:a.pageId,Wc:a.Wc,network:a.network?a.network:void 0}),tc(a,b),a.h&&(c=a.h,d=dh(b.i),cg(d,7,c)),a.componentId&&(b.componentId=
a.componentId),a.yb&&(b.yb=a.yb),gh(b.i),a.network.Mb&&a.network.Mb(a.logSource),a.network.Ve&&a.network.Ve(b),a=b);this.h=a}
w(Gh,H);
Gh.prototype.flush=function(a){var b=a||[];if(b.length){a=new mg;for(var c=[],d=0;d<b.length;d++){var e=b[d];var f=new lg;f=cg(f,1,e.j);for(var g=[],h=0;h<e.i.length;h++)g.push(e.i[h].oa);h=f.F;var k=Se(h);ef(k);if(null==g)Qf(h,k,3);else{if(!Array.isArray(g))throw nf();var l=Re(g),n=l,p=!!(2&l)||Object.isFrozen(g),r=!p&&!1;var t=4&l?!1:!0;if(t)for(l=21,p&&(g=Ne(g),n=0,l=Zf(l,k,!0)),t=0;t<g.length;t++){p=g;var x=t,z=g[t];if("string"!==typeof z)throw Error();p[x]=z}r&&(g=Ne(g),n=0,l=Zf(l,k,!0));l!==
n&&Te(g,l);Qf(h,k,3,g)}g=[];h=[];k=v(e.h.keys());for(l=k.next();!l.done;l=k.next())h.push(l.value.split(","));for(k=0;k<h.length;k++){l=h[k];n=e.v;r=e.xc(l)||[];t=[];for(p=0;p<r.length;p++){z=(x=r[p])&&x.h;x=new ig;switch(n){case 3:z=Number(z);Number.isFinite(z)&&Vf(x,1,jg,uf(z));break;case 2:z=Number(z);if(null!=z&&"number"!==typeof z)throw Error("Value of float/double field must be a number, found "+typeof z+": "+z);Vf(x,2,jg,z)}t.push(x)}n=t;for(r=0;r<n.length;r++){t=n[r];p=new kg;t=Xf(p,ig,2,
t);p=l;x=[];z=[];for(var y=0;y<e.i.length;y++)z.push(e.i[y].pa);for(y=0;y<z.length;y++){var J=z[y],G=p[y],M=new gg;switch(J){case 3:Vf(M,1,hg,zf(String(G)));break;case 2:J=Number(G);Number.isFinite(J)&&Vf(M,2,hg,sf(J));break;case 1:Vf(M,3,hg,pf("true"===G))}x.push(M)}Yf(t,gg,1,x);g.push(t)}}Yf(f,kg,4,g);c.push(f);e.clear()}Yf(a,lg,1,c);b=this.h;b.P&&(a instanceof Qg?b.log(a):(c=new Qg,a=a.serialize(),a=cg(c,8,a),b.log(a)));this.h.flush()}};function Hh(a,b,c){this.logger=a;this.event=b;if(void 0===c||c)this.h=Ih()}
Hh.prototype.start=function(){this.h=Ih()};
Hh.prototype.done=function(){null!=this.h&&this.logger.od(this.event,Ih()-this.h)};
function Jh(){}
m=Jh.prototype;m.Gc=function(){};
m.od=function(){};
m.ec=function(){};
m.nd=function(){};
m.Oa=function(){};
function Kh(a,b){this.i=b;this.l=new Map;this.v=new Gh(1828,"","",!1,"",void 0,new Eh);this.h=new de(this.v);this.P=new je(this.h);this.T=new me(this.h);this.X=new ne(this.h);this.D=new ie(this.h);this.m=new ke(this.h);this.A=new le(this.h);this.j=pe(a);(new he(this.h)).h.Pb("/client_streamz/bg/fic",this.i)}
m=Kh.prototype;m.Gc=function(){this.T.h.Pb("/client_streamz/bg/fsc",this.j,this.i)};
m.od=function(a,b){0===a?this.P.record(b,this.j,this.i):1===a&&this.X.record(b,this.j,this.i)};
m.ec=function(a,b){this.D.h.Pb("/client_streamz/bg/fiec",this.j,this.i,a,b)};
function Lh(a,b,c){var d,e=null!=(d=a.l.get(c))?d:0;++e;a.l.set(c,e);a.m.h.Pb("/client_streamz/bg/fcc",c,a.i);150>=e&&a.A.record(b,c,a.i)}
m.nd=function(a,b,c){b?Lh(this,a,1):c?Lh(this,a,2):Lh(this,a,3)};
m.Oa=function(){this.h.Oa()};
function Ih(){var a,b,c;return null!=(c=null==(a=globalThis.performance)?void 0:null==(b=a.now)?void 0:b.call(a))?c:Date.now()}
;function Mh(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function Nh(a){function b(p,r,t){Promise.resolve().then(function(){l.done();k.resolve({Qd:p,Ye:r,eg:t})})}
function c(p,r,t){d.na.nd(p,r,t)}
var d=this;this.h=!1;var e=a.program;var f=a.he;if(!1!==a.Ge){var g,h;this.na=null!=(h=a.na)?h:new Kh(f,null!=(g=a.dg)?g:"_")}else this.na=new Jh;var k=new Mh;this.i=k.promise;var l=new Hh(this.na,0,!1);C[f]?C[f].a||(this.na.ec(2,""),this.na.Oa()):(this.na.ec(1,""),this.na.Oa());try{var n=C[f].a;l.start();this.j=v(n(e,b,!0,a.og,c)).next().value;this.Xe=k.promise.then(function(){})}catch(p){throw this.na.ec(4,p.message),this.na.Oa(),p;
}}
Nh.prototype.snapshot=function(a){var b=this;if(this.h)throw Error("Already disposed");this.na.Gc();return this.i.then(function(c){var d=c.Qd;return new Promise(function(e){var f=new Hh(b.na,1);d(function(g){f.done();e(g)},[a.cd,
a.Ze,a.jf])})})};
Nh.prototype.Dd=function(a){if(this.h)throw Error("Already disposed");this.na.Gc();var b=new Hh(this.na,1);a=this.j([a.cd,a.Ze,a.jf]);b.done();return a};
Nh.prototype.dispose=function(){this.na.Oa();this.h=!0;this.i.then(function(a){(a=a.Ye)&&a()})};
Nh.prototype.Z=function(){return this.h};var Oh=window;Bb("csi.gstatic.com");Bb("googleads.g.doubleclick.net");Bb("partner.googleadservices.com");Bb("pubads.g.doubleclick.net");Bb("securepubads.g.doubleclick.net");Bb("tpc.googlesyndication.com");var Ph=ka([""]),Qh=na(["\x00"],["\\0"]),Rh=na(["\n"],["\\n"]),Sh=na(["\x00"],["\\u0000"]);function Th(a){return-1===a.toString().indexOf("`")}
Th(function(a){return a(Ph)})||Th(function(a){return a(Qh)})||Th(function(a){return a(Rh)})||Th(function(a){return a(Sh)});function Uh(a){this.re=a}
function Vh(a){return new Uh(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var Wh=[Vh("data"),Vh("http"),Vh("https"),Vh("mailto"),Vh("ftp"),new Uh(function(a){return/^[^:]*([/?#]|$)/.test(a)})],Xh=/^\s*(?!javascript:)(?:[a-z0-9+.-]+:|[^:\/?#]*(?:[\/?#]|$))/i;
function Yh(a){a instanceof Gb?a instanceof Gb&&a.constructor===Gb?a=a.h:(Oa(a),a="type_error:SafeUrl"):a=Xh.test(a)?a:void 0;return a}
;function Zh(a,b){b=Yh(b);void 0!==b&&(a.href=b)}
;function $h(){}
function ai(a){this.h=a}
w(ai,$h);ai.prototype.toString=function(){return this.h};function bi(a){var b="true".toString(),c=[new ai(ci[0].toLowerCase(),Xb)];if(0===c.length)throw Error("");if(c.map(function(d){if(d instanceof ai)d=d.h;else throw Error("");return d}).every(function(d){return 0!=="data-loaded".indexOf(d)}))throw Error('Attribute "data-loaded" does not match any of the allowed prefixes.');
a.setAttribute("data-loaded",b)}
;function di(){throw Error("unknown trace type");}
;var ei="alternate author bookmark canonical cite help icon license modulepreload next prefetch dns-prefetch prerender preconnect preload prev search subresource".split(" ");function fi(a,b){if(b instanceof Cb)a.href=Db(b).toString();else{if(-1===ei.indexOf("stylesheet"))throw Error('TrustedResourceUrl href attribute required with rel="stylesheet"');b=Yh(b);if(void 0===b)return;a.href=b}a.rel="stylesheet"}
;function gi(a){var b,c;return(a=null==(c=(b=a.document).querySelector)?void 0:c.call(b,"script[nonce]"))?a.nonce||a.getAttribute("nonce")||"":""}
;function hi(a){var b=gi(a.ownerDocument&&a.ownerDocument.defaultView||window);b&&a.setAttribute("nonce",b)}
function ii(a,b){if(b instanceof Yb)b=b.ud;else throw Error("");a.textContent=b;hi(a)}
function ji(a,b){a.src=Db(b);hi(a)}
;function ki(a){var b=li;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function mi(){var a=[];ki(function(b){a.push(b)});
return a}
var li={kf:"allow-forms",lf:"allow-modals",mf:"allow-orientation-lock",nf:"allow-pointer-lock",pf:"allow-popups",qf:"allow-popups-to-escape-sandbox",rf:"allow-presentation",sf:"allow-same-origin",tf:"allow-scripts",uf:"allow-top-navigation",vf:"allow-top-navigation-by-user-activation"},ni=db(function(){return mi()});
function oi(){var a=pi(),b={};fb(ni(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function pi(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function qi(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var ri=(new Date).getTime();function si(a){od.call(this);var b=this;this.A=this.j=0;this.Da=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ra:function(e){clearTimeout(e)}};
var c,d;this.i=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.l=function(){return A(function(e){return e.yield(ti(b),0)})};
window.addEventListener("offline",this.l);window.addEventListener("online",this.l);this.A||ui(this)}
w(si,od);function vi(){var a=wi;si.h||(si.h=new si(a));return si.h}
si.prototype.dispose=function(){window.removeEventListener("offline",this.l);window.removeEventListener("online",this.l);this.Da.ra(this.A);delete si.h};
si.prototype.wa=function(){return this.i};
function ui(a){a.A=a.Da.qa(function(){var b;return A(function(c){if(1==c.h)return a.i?(null==(b=window.navigator)?0:b.onLine)?c.B(3):c.yield(ti(a),3):c.yield(ti(a),3);ui(a);c.h=0})},3E4)}
function ti(a,b){return a.m?a.m:a.m=new Promise(function(c){var d,e,f,g;return A(function(h){switch(h.h){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,Ba(h,2,3),d&&(a.j=a.Da.qa(function(){d.abort()},b||2E4)),h.yield(fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.P=[h.j];h.l=0;h.m=0;a.m=void 0;a.j&&(a.Da.ra(a.j),a.j=0);g!==a.i&&(a.i=g,a.i?pd(a,"networkstatus-online"):pd(a,"networkstatus-offline"));c(g);Ea(h);break;case 2:Ca(h),g=!1,h.B(3)}})})}
;function xi(){this.data=[];this.h=-1}
xi.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.h=-1)};
xi.prototype.get=function(a){return!!this.data[a]};
function yi(a){-1===a.h&&(a.h=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.h}
;function zi(a,b){this.h=a[C.Symbol.iterator]();this.i=b}
zi.prototype[Symbol.iterator]=function(){return this};
zi.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value),done:a.done}};
function Ai(a,b){return new zi(a,b)}
;function Bi(){this.blockSize=-1}
;function Ci(){this.blockSize=-1;this.blockSize=64;this.h=[];this.v=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
Za(Ci,Bi);Ci.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function Di(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
Ci.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Di(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Di(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Di(this,e);f=0;break}}this.i=f;this.l+=b}};
Ci.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.v[c]=b&255,b/=256;Di(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function Ei(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Fi(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Gi(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ei(a).match(/\S+/g)||[],b=0<=eb(a,b));return b}
function Hi(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Gi(a,"inverted-hdpi")&&Fi(a,Array.prototype.filter.call(a.classList?a.classList:Ei(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;function Ii(){}
Ii.prototype.next=function(){return Ji};
var Ji={done:!0,value:void 0};function Ki(a){return{value:a,done:!1}}
Ii.prototype.Fa=function(){return this};function Li(a){if(a instanceof Mi||a instanceof Ni||a instanceof Oi)return a;if("function"==typeof a.next)return new Mi(function(){return a});
if("function"==typeof a[Symbol.iterator])return new Mi(function(){return a[Symbol.iterator]()});
if("function"==typeof a.Fa)return new Mi(function(){return a.Fa()});
throw Error("Not an iterator or iterable.");}
function Mi(a){this.i=a}
Mi.prototype.Fa=function(){return new Ni(this.i())};
Mi.prototype[Symbol.iterator]=function(){return new Oi(this.i())};
Mi.prototype.h=function(){return new Oi(this.i())};
function Ni(a){this.i=a}
w(Ni,Ii);Ni.prototype.next=function(){return this.i.next()};
Ni.prototype[Symbol.iterator]=function(){return new Oi(this.i)};
Ni.prototype.h=function(){return new Oi(this.i)};
function Oi(a){Mi.call(this,function(){return a});
this.j=a}
w(Oi,Mi);Oi.prototype.next=function(){return this.j.next()};function L(a){H.call(this);this.m=1;this.j=[];this.l=0;this.h=[];this.i={};this.A=!!a}
Za(L,H);m=L.prototype;m.subscribe=function(a,b,c){var d=this.i[a];d||(d=this.i[a]=[]);var e=this.m;this.h[e]=a;this.h[e+1]=b;this.h[e+2]=c;this.m=e+3;d.push(e);return e};
m.unsubscribe=function(a,b,c){if(a=this.i[a]){var d=this.h;if(a=a.find(function(e){return d[e+1]==b&&d[e+2]==c}))return this.Ab(a)}return!1};
m.Ab=function(a){var b=this.h[a];if(b){var c=this.i[b];0!=this.l?(this.j.push(a),this.h[a+1]=function(){}):(c&&kb(c,a),delete this.h[a],delete this.h[a+1],delete this.h[a+2])}return!!b};
m.Ya=function(a,b){var c=this.i[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];Pi(this.h[g+1],this.h[g+2],d)}else{this.l++;try{for(e=0,f=c.length;e<f&&!this.Z();e++)g=c[e],this.h[g+1].apply(this.h[g+2],d)}finally{if(this.l--,0<this.j.length&&0==this.l)for(;c=this.j.pop();)this.Ab(c)}}return 0!=e}return!1};
function Pi(a,b,c){Id(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.i[a];b&&(b.forEach(this.Ab,this),delete this.i[a])}else this.h.length=0,this.i={}};
m.S=function(){L.Aa.S.call(this);this.clear();this.j.length=0};function Qi(a){this.h=a}
Qi.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,(new hh).serialize(b))};
Qi.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Qi.prototype.remove=function(a){this.h.remove(a)};function Ri(a){this.h=a}
Za(Ri,Qi);function Si(a){this.data=a}
function Ti(a){return void 0===a||a instanceof Si?a:new Si(a)}
Ri.prototype.set=function(a,b){Ri.Aa.set.call(this,a,Ti(b))};
Ri.prototype.i=function(a){a=Ri.Aa.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Ri.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Ui(a){this.h=a}
Za(Ui,Ri);Ui.prototype.set=function(a,b,c){if(b=Ti(b)){if(c){if(c<Ya()){Ui.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ya()}Ui.Aa.set.call(this,a,b)};
Ui.prototype.i=function(a){var b=Ui.Aa.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ya()||c&&c>Ya())Ui.prototype.remove.call(this,a);else return b}};function Vi(){}
;function Wi(){}
Za(Wi,Vi);Wi.prototype[Symbol.iterator]=function(){return Li(this.Fa(!0)).h()};
Wi.prototype.clear=function(){var a=Array.from(this);a=v(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Xi(a){this.h=a;this.i=null}
Za(Xi,Wi);m=Xi.prototype;m.isAvailable=function(){var a=this.h;if(a)try{a.setItem("__sak","1");a.removeItem("__sak");var b=!0}catch(c){b=c instanceof DOMException&&("QuotaExceededError"===c.name||22===c.code||1014===c.code||"NS_ERROR_DOM_QUOTA_REACHED"===c.name)&&a&&0!==a.length}else b=!1;return this.i=b};
m.set=function(a,b){Yi(this);try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){Yi(this);a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){Yi(this);this.h.removeItem(a)};
m.Fa=function(a){Yi(this);var b=0,c=this.h,d=new Ii;d.next=function(){if(b>=c.length)return Ji;var e=c.key(b++);if(a)return Ki(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ki(e)};
return d};
m.clear=function(){Yi(this);this.h.clear()};
m.key=function(a){Yi(this);return this.h.key(a)};
function Yi(a){if(null==a.h)throw Error("Storage mechanism: Storage unavailable");var b;(null!=(b=a.i)?b:a.isAvailable())||Bd(Error("Storage mechanism: Storage unavailable"))}
;function Zi(){var a=null;try{a=C.localStorage||null}catch(b){}Xi.call(this,a)}
Za(Zi,Xi);function $i(a,b){this.i={};this.h=[];this.Wa=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof $i)for(c=a.Ac(),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
m=$i.prototype;m.Ac=function(){aj(this);return this.h.concat()};
m.has=function(a){return bj(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||cj;aj(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function cj(a,b){return a===b}
m.clear=function(){this.i={};this.Wa=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return bj(this.i,a)?(delete this.i[a],--this.size,this.Wa++,this.h.length>2*this.size&&aj(this),!0):!1};
function aj(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];bj(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],bj(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return bj(this.i,a)?this.i[a]:b};
m.set=function(a,b){bj(this.i,a)||(this.size+=1,this.h.push(a),this.Wa++);this.i[a]=b};
m.forEach=function(a,b){for(var c=this.Ac(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new $i(this)};
m.keys=function(){return Li(this.Fa(!0)).h()};
m.values=function(){return Li(this.Fa(!1)).h()};
m.entries=function(){var a=this;return Ai(this.keys(),function(b){return[b,a.get(b)]})};
m.Fa=function(a){aj(this);var b=0,c=this.Wa,d=this,e=new Ii;e.next=function(){if(c!=d.Wa)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return Ji;var f=d.h[b++];return Ki(a?f:d.i[f])};
return e};
function bj(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function dj(a,b){this.i=a;this.h=null;var c;if(c=Ec)c=!(9<=Number(Rc));if(c){ej||(ej=new $i);this.h=ej.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),ej.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
Za(dj,Wi);var fj={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},ej=null;function gj(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return fj[b]})}
m=dj.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(gj(a),b);hj(this)};
m.get=function(a){a=this.h.getAttribute(gj(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(gj(a));hj(this)};
m.Fa=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new Ii;d.next=function(){if(b>=c.length)return Ji;var e=c[b++];if(a)return Ki(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Ki(e)};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);hj(this)};
function hj(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function ij(a,b){this.i=a;this.h=b+"::"}
Za(ij,Wi);ij.prototype.set=function(a,b){this.i.set(this.h+a,b)};
ij.prototype.get=function(a){return this.i.get(this.h+a)};
ij.prototype.remove=function(a){this.i.remove(this.h+a)};
ij.prototype.Fa=function(a){var b=this.i[Symbol.iterator](),c=this,d=new Ii;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.h.length)!=c.h;){e=b.next();if(e.done)return e;e=e.value}return Ki(a?e.slice(c.h.length):c.i.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var N={},jj="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;N.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
N.Rc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var kj={mb:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},lj={mb:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
gd:function(a){return[].concat.apply([],a)}};
N.We=function(){jj?(N.lb=Uint8Array,N.Ha=Uint16Array,N.Md=Int32Array,N.assign(N,kj)):(N.lb=Array,N.Ha=Array,N.Md=Array,N.assign(N,lj))};
N.We();var mj=!0;try{new Uint8Array(1)}catch(a){mj=!1}
function nj(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new N.lb(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var oj={};oj=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var pj={},qj,rj=[],sj=0;256>sj;sj++){qj=sj;for(var tj=0;8>tj;tj++)qj=qj&1?3988292384^qj>>>1:qj>>>1;rj[sj]=qj}pj=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^rj[(a^b[d])&255];return a^-1};var uj={};uj={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function vj(a){for(var b=a.length;0<=--b;)a[b]=0}
var wj=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],xj=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],yj=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],zj=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Aj=Array(576);vj(Aj);var Bj=Array(60);vj(Bj);var Cj=Array(512);vj(Cj);var Dj=Array(256);vj(Dj);var Ej=Array(29);vj(Ej);var Fj=Array(30);vj(Fj);function Gj(a,b,c,d,e){this.Ed=a;this.be=b;this.ae=c;this.Wd=d;this.xe=e;this.kd=a&&a.length}
var Hj,Ij,Jj;function Kj(a,b){this.ed=a;this.vb=0;this.Va=b}
function Lj(a,b){a.W[a.pending++]=b&255;a.W[a.pending++]=b>>>8&255}
function Mj(a,b,c){a.fa>16-c?(a.ma|=b<<a.fa&65535,Lj(a,a.ma),a.ma=b>>16-a.fa,a.fa+=c-16):(a.ma|=b<<a.fa&65535,a.fa+=c)}
function Nj(a,b,c){Mj(a,c[2*b],c[2*b+1])}
function Oj(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Pj(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Oj(d[e]++,e))}
function Qj(a){var b;for(b=0;286>b;b++)a.sa[2*b]=0;for(b=0;30>b;b++)a.bb[2*b]=0;for(b=0;19>b;b++)a.ha[2*b]=0;a.sa[512]=1;a.Na=a.zb=0;a.ya=a.matches=0}
function Rj(a){8<a.fa?Lj(a,a.ma):0<a.fa&&(a.W[a.pending++]=a.ma);a.ma=0;a.fa=0}
function Sj(a,b,c){Rj(a);Lj(a,c);Lj(a,~c);N.mb(a.W,a.window,b,c,a.pending);a.pending+=c}
function Tj(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Uj(a,b,c){for(var d=a.Y[c],e=c<<1;e<=a.La;){e<a.La&&Tj(b,a.Y[e+1],a.Y[e],a.depth)&&e++;if(Tj(b,d,a.Y[e],a.depth))break;a.Y[c]=a.Y[e];c=e;e<<=1}a.Y[c]=d}
function Vj(a,b,c){var d=0;if(0!==a.ya){do{var e=a.W[a.Db+2*d]<<8|a.W[a.Db+2*d+1];var f=a.W[a.Fc+d];d++;if(0===e)Nj(a,f,b);else{var g=Dj[f];Nj(a,g+256+1,b);var h=wj[g];0!==h&&(f-=Ej[g],Mj(a,f,h));e--;g=256>e?Cj[e]:Cj[256+(e>>>7)];Nj(a,g,c);h=xj[g];0!==h&&(e-=Fj[g],Mj(a,e,h))}}while(d<a.ya)}Nj(a,256,b)}
function Wj(a,b){var c=b.ed,d=b.Va.Ed,e=b.Va.kd,f=b.Va.Wd,g,h=-1;a.La=0;a.qb=573;for(g=0;g<f;g++)0!==c[2*g]?(a.Y[++a.La]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.La;){var k=a.Y[++a.La]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.Na--;e&&(a.zb-=d[2*k+1])}b.vb=h;for(g=a.La>>1;1<=g;g--)Uj(a,c,g);k=f;do g=a.Y[1],a.Y[1]=a.Y[a.La--],Uj(a,c,1),d=a.Y[1],a.Y[--a.qb]=g,a.Y[--a.qb]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.Y[1]=k++,Uj(a,c,1);while(2<=a.La);a.Y[--a.qb]=
a.Y[1];g=b.ed;k=b.vb;d=b.Va.Ed;e=b.Va.kd;f=b.Va.be;var l=b.Va.ae,n=b.Va.xe,p,r=0;for(p=0;15>=p;p++)a.Ia[p]=0;g[2*a.Y[a.qb]+1]=0;for(b=a.qb+1;573>b;b++){var t=a.Y[b];p=g[2*g[2*t+1]+1]+1;p>n&&(p=n,r++);g[2*t+1]=p;if(!(t>k)){a.Ia[p]++;var x=0;t>=l&&(x=f[t-l]);var z=g[2*t];a.Na+=z*(p+x);e&&(a.zb+=z*(d[2*t+1]+x))}}if(0!==r){do{for(p=n-1;0===a.Ia[p];)p--;a.Ia[p]--;a.Ia[p+1]+=2;a.Ia[n]--;r-=2}while(0<r);for(p=n;0!==p;p--)for(t=a.Ia[p];0!==t;)d=a.Y[--b],d>k||(g[2*d+1]!==p&&(a.Na+=(p-g[2*d+1])*g[2*d],g[2*
d+1]=p),t--)}Pj(c,h,a.Ia)}
function Xj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.ha[2*l]+=g:0!==l?(l!==e&&a.ha[2*l]++,a.ha[32]++):10>=g?a.ha[34]++:a.ha[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function Yj(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Nj(a,l,a.ha);while(0!==--g)}else 0!==l?(l!==e&&(Nj(a,l,a.ha),g--),Nj(a,16,a.ha),Mj(a,g-3,2)):10>=g?(Nj(a,17,a.ha),Mj(a,g-3,3)):(Nj(a,18,a.ha),Mj(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function Zj(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.sa[2*c])return 0;if(0!==a.sa[18]||0!==a.sa[20]||0!==a.sa[26])return 1;for(c=32;256>c;c++)if(0!==a.sa[2*c])return 1;return 0}
var ak=!1;function bk(a,b,c){a.W[a.Db+2*a.ya]=b>>>8&255;a.W[a.Db+2*a.ya+1]=b&255;a.W[a.Fc+a.ya]=c&255;a.ya++;0===b?a.sa[2*c]++:(a.matches++,b--,a.sa[2*(Dj[c]+256+1)]++,a.bb[2*(256>b?Cj[b]:Cj[256+(b>>>7)])]++);return a.ya===a.Ib-1}
;function ck(a,b){a.msg=uj[b];return b}
function dk(a){for(var b=a.length;0<=--b;)a[b]=0}
function ek(a){var b=a.state,c=b.pending;c>a.M&&(c=a.M);0!==c&&(N.mb(a.output,b.W,b.Kb,c,a.wb),a.wb+=c,b.Kb+=c,a.Sc+=c,a.M-=c,b.pending-=c,0===b.pending&&(b.Kb=0))}
function fk(a,b){var c=0<=a.va?a.va:-1,d=a.o-a.va,e=0;if(0<a.level){2===a.I.uc&&(a.I.uc=Zj(a));Wj(a,a.dc);Wj(a,a.Yb);Xj(a,a.sa,a.dc.vb);Xj(a,a.bb,a.Yb.vb);Wj(a,a.Xc);for(e=18;3<=e&&0===a.ha[2*zj[e]+1];e--);a.Na+=3*(e+1)+14;var f=a.Na+3+7>>>3;var g=a.zb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)Mj(a,b?1:0,3),Sj(a,c,d);else if(4===a.strategy||g===f)Mj(a,2+(b?1:0),3),Vj(a,Aj,Bj);else{Mj(a,4+(b?1:0),3);c=a.dc.vb+1;d=a.Yb.vb+1;e+=1;Mj(a,c-257,5);Mj(a,d-1,5);Mj(a,e-4,4);for(f=0;f<e;f++)Mj(a,a.ha[2*
zj[f]+1],3);Yj(a,a.sa,c-1);Yj(a,a.bb,d-1);Vj(a,a.sa,a.bb)}Qj(a);b&&Rj(a);a.va=a.o;ek(a.I)}
function O(a,b){a.W[a.pending++]=b}
function gk(a,b){a.W[a.pending++]=b>>>8&255;a.W[a.pending++]=b&255}
function hk(a,b){var c=a.pd,d=a.o,e=a.xa,f=a.qd,g=a.o>a.ja-262?a.o-(a.ja-262):0,h=a.window,k=a.Xa,l=a.Ga,n=a.o+258,p=h[d+e-1],r=h[d+e];a.xa>=a.jd&&(c>>=2);f>a.u&&(f=a.u);do{var t=b;if(h[t+e]===r&&h[t+e-1]===p&&h[t]===h[d]&&h[++t]===h[d+1]){d+=2;for(t++;h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&h[++d]===h[++t]&&d<n;);t=258-(n-d);d=n-258;if(t>e){a.ub=b;e=t;if(t>=f)break;p=h[d+e-1];r=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.u?e:a.u}
function ik(a){var b=a.ja,c;do{var d=a.Kd-a.u-a.o;if(a.o>=b+(b-262)){N.mb(a.window,a.window,b,b,0);a.ub-=b;a.o-=b;a.va-=b;var e=c=a.cc;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.Ga[--e],a.Ga[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.I.la)break;e=a.I;c=a.window;f=a.o+a.u;var g=e.la;g>d&&(g=d);0===g?c=0:(e.la-=g,N.mb(c,e.input,e.hb,g,f),1===e.state.wrap?e.H=oj(e.H,c,g,f):2===e.state.wrap&&(e.H=pj(e.H,c,g,f)),e.hb+=g,e.kb+=g,c=g);a.u+=c;if(3<=a.u+a.ta)for(d=a.o-a.ta,a.K=a.window[d],
a.K=(a.K<<a.Ka^a.window[d+1])&a.Ja;a.ta&&!(a.K=(a.K<<a.Ka^a.window[d+3-1])&a.Ja,a.Ga[d&a.Xa]=a.head[a.K],a.head[a.K]=d,d++,a.ta--,3>a.u+a.ta););}while(262>a.u&&0!==a.I.la)}
function jk(a,b){for(var c;;){if(262>a.u){ik(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);0!==c&&a.o-c<=a.ja-262&&(a.R=hk(a,c));if(3<=a.R)if(c=bk(a,a.o-a.ub,a.R-3),a.u-=a.R,a.R<=a.Hc&&3<=a.u){a.R--;do a.o++,a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o;while(0!==--a.R);a.o++}else a.o+=a.R,a.R=0,a.K=a.window[a.o],a.K=(a.K<<a.Ka^a.window[a.o+1])&a.Ja;else c=bk(a,0,
a.window[a.o]),a.u--,a.o++;if(c&&(fk(a,!1),0===a.I.M))return 1}a.ta=2>a.o?a.o:2;return 4===b?(fk(a,!0),0===a.I.M?3:4):a.ya&&(fk(a,!1),0===a.I.M)?1:2}
function kk(a,b){for(var c,d;;){if(262>a.u){ik(a);if(262>a.u&&0===b)return 1;if(0===a.u)break}c=0;3<=a.u&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,c=a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);a.xa=a.R;a.td=a.ub;a.R=2;0!==c&&a.xa<a.Hc&&a.o-c<=a.ja-262&&(a.R=hk(a,c),5>=a.R&&(1===a.strategy||3===a.R&&4096<a.o-a.ub)&&(a.R=2));if(3<=a.xa&&a.R<=a.xa){d=a.o+a.u-3;c=bk(a,a.o-1-a.td,a.xa-3);a.u-=a.xa-1;a.xa-=2;do++a.o<=d&&(a.K=(a.K<<a.Ka^a.window[a.o+3-1])&a.Ja,a.Ga[a.o&a.Xa]=a.head[a.K],a.head[a.K]=a.o);
while(0!==--a.xa);a.fb=0;a.R=2;a.o++;if(c&&(fk(a,!1),0===a.I.M))return 1}else if(a.fb){if((c=bk(a,0,a.window[a.o-1]))&&fk(a,!1),a.o++,a.u--,0===a.I.M)return 1}else a.fb=1,a.o++,a.u--}a.fb&&(bk(a,0,a.window[a.o-1]),a.fb=0);a.ta=2>a.o?a.o:2;return 4===b?(fk(a,!0),0===a.I.M?3:4):a.ya&&(fk(a,!1),0===a.I.M)?1:2}
function lk(a,b){for(var c,d,e,f=a.window;;){if(258>=a.u){ik(a);if(258>=a.u&&0===b)return 1;if(0===a.u)break}a.R=0;if(3<=a.u&&0<a.o&&(d=a.o-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.o+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.R=258-(e-d);a.R>a.u&&(a.R=a.u)}3<=a.R?(c=bk(a,1,a.R-3),a.u-=a.R,a.o+=a.R,a.R=0):(c=bk(a,0,a.window[a.o]),a.u--,a.o++);if(c&&(fk(a,!1),0===a.I.M))return 1}a.ta=0;return 4===b?(fk(a,!0),0===a.I.M?3:4):
a.ya&&(fk(a,!1),0===a.I.M)?1:2}
function mk(a,b){for(var c;;){if(0===a.u&&(ik(a),0===a.u)){if(0===b)return 1;break}a.R=0;c=bk(a,0,a.window[a.o]);a.u--;a.o++;if(c&&(fk(a,!1),0===a.I.M))return 1}a.ta=0;return 4===b?(fk(a,!0),0===a.I.M?3:4):a.ya&&(fk(a,!1),0===a.I.M)?1:2}
function nk(a,b,c,d,e){this.je=a;this.we=b;this.ze=c;this.ue=d;this.de=e}
var ok;ok=[new nk(0,0,0,0,function(a,b){var c=65535;for(c>a.za-5&&(c=a.za-5);;){if(1>=a.u){ik(a);if(0===a.u&&0===b)return 1;if(0===a.u)break}a.o+=a.u;a.u=0;var d=a.va+c;if(0===a.o||a.o>=d)if(a.u=a.o-d,a.o=d,fk(a,!1),0===a.I.M)return 1;if(a.o-a.va>=a.ja-262&&(fk(a,!1),0===a.I.M))return 1}a.ta=0;if(4===b)return fk(a,!0),0===a.I.M?3:4;a.o>a.va&&fk(a,!1);return 1}),
new nk(4,4,8,4,jk),new nk(4,5,16,8,jk),new nk(4,6,32,32,jk),new nk(4,4,16,16,kk),new nk(8,16,32,32,kk),new nk(8,16,128,128,kk),new nk(8,32,128,256,kk),new nk(32,128,258,1024,kk),new nk(32,258,258,4096,kk)];
function pk(){this.I=null;this.status=0;this.W=null;this.wrap=this.pending=this.Kb=this.za=0;this.G=null;this.Ca=0;this.method=8;this.sb=-1;this.Xa=this.Uc=this.ja=0;this.window=null;this.Kd=0;this.head=this.Ga=null;this.qd=this.jd=this.strategy=this.level=this.Hc=this.pd=this.xa=this.u=this.ub=this.o=this.fb=this.td=this.R=this.va=this.Ka=this.Ja=this.Cc=this.cc=this.K=0;this.sa=new N.Ha(1146);this.bb=new N.Ha(122);this.ha=new N.Ha(78);dk(this.sa);dk(this.bb);dk(this.ha);this.Xc=this.Yb=this.dc=
null;this.Ia=new N.Ha(16);this.Y=new N.Ha(573);dk(this.Y);this.qb=this.La=0;this.depth=new N.Ha(573);dk(this.depth);this.fa=this.ma=this.ta=this.matches=this.zb=this.Na=this.Db=this.ya=this.Ib=this.Fc=0}
function qk(a,b){if(!a||!a.state||5<b||0>b)return a?ck(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.la||666===c.status&&4!==b)return ck(a,0===a.M?-5:-2);c.I=a;var d=c.sb;c.sb=b;if(42===c.status)if(2===c.wrap)a.H=0,O(c,31),O(c,139),O(c,8),c.G?(O(c,(c.G.text?1:0)+(c.G.Ra?2:0)+(c.G.extra?4:0)+(c.G.name?8:0)+(c.G.comment?16:0)),O(c,c.G.time&255),O(c,c.G.time>>8&255),O(c,c.G.time>>16&255),O(c,c.G.time>>24&255),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,c.G.os&255),c.G.extra&&c.G.extra.length&&
(O(c,c.G.extra.length&255),O(c,c.G.extra.length>>8&255)),c.G.Ra&&(a.H=pj(a.H,c.W,c.pending,0)),c.Ca=0,c.status=69):(O(c,0),O(c,0),O(c,0),O(c,0),O(c,0),O(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),O(c,3),c.status=113);else{var e=8+(c.Uc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.o&&(e|=32);c.status=113;gk(c,e+(31-e%31));0!==c.o&&(gk(c,a.H>>>16),gk(c,a.H&65535));a.H=1}if(69===c.status)if(c.G.extra){for(e=c.pending;c.Ca<(c.G.extra.length&65535)&&(c.pending!==c.za||
(c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e)),ek(a),e=c.pending,c.pending!==c.za));)O(c,c.G.extra[c.Ca]&255),c.Ca++;c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e));c.Ca===c.G.extra.length&&(c.Ca=0,c.status=73)}else c.status=73;if(73===c.status)if(c.G.name){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e)),ek(a),e=c.pending,c.pending===c.za)){var f=1;break}f=c.Ca<c.G.name.length?c.G.name.charCodeAt(c.Ca++)&255:0;O(c,f)}while(0!==f);c.G.Ra&&c.pending>
e&&(a.H=pj(a.H,c.W,c.pending-e,e));0===f&&(c.Ca=0,c.status=91)}else c.status=91;if(91===c.status)if(c.G.comment){e=c.pending;do{if(c.pending===c.za&&(c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e)),ek(a),e=c.pending,c.pending===c.za)){f=1;break}f=c.Ca<c.G.comment.length?c.G.comment.charCodeAt(c.Ca++)&255:0;O(c,f)}while(0!==f);c.G.Ra&&c.pending>e&&(a.H=pj(a.H,c.W,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.G.Ra?(c.pending+2>c.za&&ek(a),c.pending+2<=c.za&&(O(c,a.H&
255),O(c,a.H>>8&255),a.H=0,c.status=113)):c.status=113);if(0!==c.pending){if(ek(a),0===a.M)return c.sb=-1,0}else if(0===a.la&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return ck(a,-5);if(666===c.status&&0!==a.la)return ck(a,-5);if(0!==a.la||0!==c.u||0!==b&&666!==c.status){d=2===c.strategy?mk(c,b):3===c.strategy?lk(c,b):ok[c.level].de(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.M&&(c.sb=-1),0;if(2===d&&(1===b?(Mj(c,2,3),Nj(c,256,Aj),16===c.fa?(Lj(c,c.ma),c.ma=0,c.fa=0):8<=c.fa&&
(c.W[c.pending++]=c.ma&255,c.ma>>=8,c.fa-=8)):5!==b&&(Mj(c,0,3),Sj(c,0,0),3===b&&(dk(c.head),0===c.u&&(c.o=0,c.va=0,c.ta=0))),ek(a),0===a.M))return c.sb=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(O(c,a.H&255),O(c,a.H>>8&255),O(c,a.H>>16&255),O(c,a.H>>24&255),O(c,a.kb&255),O(c,a.kb>>8&255),O(c,a.kb>>16&255),O(c,a.kb>>24&255)):(gk(c,a.H>>>16),gk(c,a.H&65535));ek(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var rk={};rk=function(){this.input=null;this.kb=this.la=this.hb=0;this.output=null;this.Sc=this.M=this.wb=0;this.msg="";this.state=null;this.uc=2;this.H=0};var sk=Object.prototype.toString;
function tk(a){if(!(this instanceof tk))return new tk(a);a=this.options=N.assign({level:-1,method:8,chunkSize:16384,windowBits:15,memLevel:8,strategy:0,to:""},a||{});a.raw&&0<a.windowBits?a.windowBits=-a.windowBits:a.gzip&&0<a.windowBits&&16>a.windowBits&&(a.windowBits+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.I=new rk;this.I.M=0;var b=this.I;var c=a.level,d=a.method,e=a.windowBits,f=a.memLevel,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<
f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=ck(b,-2);else{8===e&&(e=9);var k=new pk;b.state=k;k.I=b;k.wrap=h;k.G=null;k.Uc=e;k.ja=1<<k.Uc;k.Xa=k.ja-1;k.Cc=f+7;k.cc=1<<k.Cc;k.Ja=k.cc-1;k.Ka=~~((k.Cc+3-1)/3);k.window=new N.lb(2*k.ja);k.head=new N.Ha(k.cc);k.Ga=new N.Ha(k.ja);k.Ib=1<<f+6;k.za=4*k.Ib;k.W=new N.lb(k.za);k.Db=1*k.Ib;k.Fc=3*k.Ib;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.kb=b.Sc=0;b.uc=2;c=b.state;c.pending=0;c.Kb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.H=2===c.wrap?
0:1;c.sb=0;if(!ak){d=Array(16);for(f=g=0;28>f;f++)for(Ej[f]=g,e=0;e<1<<wj[f];e++)Dj[g++]=f;Dj[g-1]=f;for(f=g=0;16>f;f++)for(Fj[f]=g,e=0;e<1<<xj[f];e++)Cj[g++]=f;for(g>>=7;30>f;f++)for(Fj[f]=g<<7,e=0;e<1<<xj[f]-7;e++)Cj[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)Aj[2*e+1]=8,e++,d[8]++;for(;255>=e;)Aj[2*e+1]=9,e++,d[9]++;for(;279>=e;)Aj[2*e+1]=7,e++,d[7]++;for(;287>=e;)Aj[2*e+1]=8,e++,d[8]++;Pj(Aj,287,d);for(e=0;30>e;e++)Bj[2*e+1]=5,Bj[2*e]=Oj(e,5);Hj=new Gj(Aj,wj,257,286,15);Ij=new Gj(Bj,
xj,0,30,15);Jj=new Gj([],yj,0,19,7);ak=!0}c.dc=new Kj(c.sa,Hj);c.Yb=new Kj(c.bb,Ij);c.Xc=new Kj(c.ha,Jj);c.ma=0;c.fa=0;Qj(c);c=0}else c=ck(b,-2);0===c&&(b=b.state,b.Kd=2*b.ja,dk(b.head),b.Hc=ok[b.level].we,b.jd=ok[b.level].je,b.qd=ok[b.level].ze,b.pd=ok[b.level].ue,b.o=0,b.va=0,b.u=0,b.ta=0,b.R=b.xa=2,b.fb=0,b.K=0);b=c}}else b=-2;if(0!==b)throw Error(uj[b]);a.header&&(b=this.I)&&b.state&&2===b.state.wrap&&(b.state.G=a.header);if(a.dictionary){var l;"string"===typeof a.dictionary?l=nj(a.dictionary):
"[object ArrayBuffer]"===sk.call(a.dictionary)?l=new Uint8Array(a.dictionary):l=a.dictionary;a=this.I;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,2===b||1===b&&42!==l.status||l.u)b=-2;else{1===b&&(a.H=oj(a.H,f,g,0));l.wrap=0;g>=l.ja&&(0===b&&(dk(l.head),l.o=0,l.va=0,l.ta=0),c=new N.lb(l.ja),N.mb(c,f,g-l.ja,l.ja,0),f=c,g=l.ja);c=a.la;d=a.hb;e=a.input;a.la=g;a.hb=0;a.input=f;for(ik(l);3<=l.u;){f=l.o;g=l.u-2;do l.K=(l.K<<l.Ka^l.window[f+3-1])&l.Ja,l.Ga[f&l.Xa]=l.head[l.K],l.head[l.K]=f,f++;while(--g);
l.o=f;l.u=2;ik(l)}l.o+=l.u;l.va=l.o;l.ta=l.u;l.u=0;l.R=l.xa=2;l.fb=0;a.hb=d;a.input=e;a.la=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(uj[b]);this.Of=!0}}
tk.prototype.push=function(a,b){var c=this.I,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=nj(a):"[object ArrayBuffer]"===sk.call(a)?c.input=new Uint8Array(a):c.input=a;c.hb=0;c.la=c.input.length;do{0===c.M&&(c.output=new N.lb(d),c.wb=0,c.M=d);a=qk(c,e);if(1!==a&&0!==a)return uk(this,a),this.ended=!0,!1;if(0===c.M||0===c.la&&(4===e||2===e))if("string"===this.options.to){var f=N.Rc(c.output,c.wb);b=f;f=f.length;if(65537>f&&(b.subarray&&mj||!b.subarray))b=
String.fromCharCode.apply(null,N.Rc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=N.Rc(c.output,c.wb),this.chunks.push(b)}while((0<c.la||0===c.M)&&1!==a);if(4===e)return(c=this.I)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=ck(c,-2):(c.state=null,a=113===d?ck(c,-3):0)):a=-2,uk(this,a),this.ended=!0,0===a;2===e&&(uk(this,0),c.M=0);return!0};
function uk(a,b){0===b&&(a.result="string"===a.options.to?a.chunks.join(""):N.gd(a.chunks));a.chunks=[];a.err=b;a.msg=a.I.msg}
function vk(a,b){b=b||{};b.gzip=!0;b=new tk(b);b.push(a,!0);if(b.err)throw b.msg||uj[b.err];return b.result}
;function wk(a){if(!a)return null;a=a.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue;var b;a?b=Fb(a):b=null;return b}
;function xk(a){return Fb(null===a?"null":void 0===a?"undefined":a)}
;function yk(a){this.name=a}
;var zk=new yk("rawColdConfigGroup");var Ak=new yk("rawHotConfigGroup");function Bk(a){this.F=I(a)}
w(Bk,K);var Ck=new yk("continuationCommand");var Dk=new yk("webCommandMetadata");var Ek=new yk("signalServiceEndpoint");var Fk={Af:"EMBEDDED_PLAYER_MODE_UNKNOWN",xf:"EMBEDDED_PLAYER_MODE_DEFAULT",zf:"EMBEDDED_PLAYER_MODE_PFP",yf:"EMBEDDED_PLAYER_MODE_PFL"};var Gk=new yk("feedbackEndpoint");function Hk(a){this.F=I(a)}
w(Hk,K);Hk.prototype.setTrackingParams=function(a){if(null!=a)if("string"===typeof a)a=a?new Le(a,Ie):Je||(Je=new Le(null,Ie));else if(a.constructor!==Le)if(He(a))a=a.length?new Le(new Uint8Array(a),Ie):Je||(Je=new Le(null,Ie));else throw Error();return Pf(this,1,a)};var Ik=new yk("webPlayerShareEntityServiceEndpoint");var Jk=new yk("playlistEditEndpoint");var Kk=new yk("modifyChannelNotificationPreferenceEndpoint");var Lk=new yk("unsubscribeEndpoint");var Mk=new yk("subscribeEndpoint");function Nk(){var a=Ok;E("yt.ads.biscotti.getId_")||D("yt.ads.biscotti.getId_",a)}
function Pk(a){D("yt.ads.biscotti.lastId_",a)}
;function Qk(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Rk=C.window,Sk,Tk,Uk=(null==Rk?void 0:null==(Sk=Rk.yt)?void 0:Sk.config_)||(null==Rk?void 0:null==(Tk=Rk.ytcfg)?void 0:Tk.data_)||{};D("yt.config_",Uk);function Vk(){Qk(Uk,arguments)}
function R(a,b){return a in Uk?Uk[a]:b}
function Wk(a){var b=Uk.EXPERIMENT_FLAGS;return b?b[a]:void 0}
;var Xk=[];function Yk(a){Xk.forEach(function(b){return b(a)})}
function Zk(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){$k(b)}}:a}
function $k(a){var b=E("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=R("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),Vk("ERRORS",b));Yk(a)}
function al(a,b,c,d,e){var f=E("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=R("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),Vk("ERRORS",f))}
;var bl=/^[\w.]*$/,cl={q:!0,search_query:!0};function dl(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1===f.length&&f[0]||2===f.length)try{var g=el(f[0]||""),h=el(f[1]||"");if(g in c){var k=c[g];Array.isArray(k)?lb(k,h):c[g]=[k,h]}else c[g]=h}catch(r){var l=r,n=f[0],p=String(dl);l.args=[{key:n,value:f[1],query:a,method:fl===p?"unchanged":p}];cl.hasOwnProperty(n)||al(l)}}return c}
var fl=String(dl);function gl(a){var b=[];mb(a,function(c,d){var e=encodeURIComponent(String(d));c=Array.isArray(c)?c:[c];fb(c,function(f){""==f?b.push(e):b.push(e+"="+encodeURIComponent(String(f)))})});
return b.join("&")}
function hl(a){"?"===a.charAt(0)&&(a=a.substring(1));return dl(a,"&")}
function il(a){return-1!==a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),hl(1<a.length?a[1]:a[0])):{}}
function jl(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=hl(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return ic(a,e)+d}
function kl(a){if(!b)var b=window.location.href;var c=bc(1,a),d=cc(a);c&&d?(a=a.match($b),b=b.match($b),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?cc(b)===d&&(Number(bc(4,b))||null)===(Number(bc(4,a))||null):!0;return a}
function el(a){return a&&a.match(bl)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ll(a){var b=ml;a=void 0===a?E("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=ri;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Da){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Oh:g;try{var h=g.history.length}catch(Da){h=0}e.u_his=h;var k;e.u_h=null==(k=Oh.screen)?void 0:k.height;var l;e.u_w=null==(l=Oh.screen)?void 0:l.width;var n;e.u_ah=null==(n=Oh.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=Oh.screen)?void 0:p.availWidth;var r;e.u_cd=null==(r=Oh.screen)?void 0:r.colorDepth}catch(Da){}h=b.h;try{var t=h.screenX;var x=h.screenY}catch(Da){}try{var z=h.outerWidth;var y=h.outerHeight}catch(Da){}try{var J=h.innerWidth;var G=h.innerHeight}catch(Da){}try{var M=h.screenLeft;var P=h.screenTop}catch(Da){}try{J=h.innerWidth,G=h.innerHeight}catch(Da){}try{var ea=h.screen.availWidth;var aa=h.screen.availTop}catch(Da){}t=[M,P,t,x,ea,aa,z,y,J,G];try{var S=(b.h.top||window).document,fa="CSS1Compat"==
S.compatMode?S.documentElement:S.body;var la=(new vd(fa.clientWidth,fa.clientHeight)).round()}catch(Da){la=new vd(-12245933,-12245933)}S=la;la={};var ma=void 0===ma?C:ma;fa=new xi;"SVGElement"in ma&&"createElementNS"in ma.document&&fa.set(0);x=oi();x["allow-top-navigation-by-user-activation"]&&fa.set(1);x["allow-popups-to-escape-sandbox"]&&fa.set(2);ma.crypto&&ma.crypto.subtle&&fa.set(3);"TextDecoder"in ma&&"TextEncoder"in ma&&fa.set(4);ma=yi(fa);la.bc=ma;la.bih=S.height;la.biw=S.width;la.brdim=t.join();
b=b.i;b=(la.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,la.wgl=!!Oh.WebGLRenderingContext,la);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var ml=new function(){var a=window.document;this.h=window;this.i=a};
D("yt.ads_.signals_.getAdSignalsString",function(a){return gl(ll(a))});Ya();navigator.userAgent.indexOf(" (CrKey ");function T(a){a=nl(a);return"string"===typeof a&&"false"===a?!1:!!a}
function U(a,b){a=nl(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function nl(a){return R("EXPERIMENT_FLAGS",{})[a]}
function ol(){for(var a=[],b=R("EXPERIMENTS_FORCED_FLAGS",{}),c=v(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=R("EXPERIMENT_FLAGS",{});d=v(Object.keys(c));for(var e=d.next();!e.done;e=d.next())e=e.value,e.startsWith("force_")&&void 0===b[e]&&a.push({key:e,value:String(c[e])});return a}
;var pl="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function ql(){if(!pl)return null;var a=pl();return"open"in a?a:null}
function rl(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function sl(a,b){"function"===typeof a&&(a=Zk(a));return window.setTimeout(a,b)}
;var tl="client_dev_domain client_dev_expflag client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");[].concat(oa(tl),["client_dev_set_cookie"]);var ul={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},vl="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(oa(tl)),wl=!1;
function xl(a,b,c,d,e,f,g,h){function k(){4===(l&&"readyState"in l?l.readyState:0)&&b&&Zk(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=ql();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;T("debug_forward_web_query_parameters")&&(a=yl(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"===c&&(void 0===window.FormData||!(d instanceof FormData));if(e=zl(a,e))for(var n in e)l.setRequestHeader(n,e[n]),"content-type"===n.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
if(h&&"setAttributionReporting"in XMLHttpRequest.prototype){a={eventSourceEligible:!0,triggerEligible:!1};try{l.setAttributionReporting(a)}catch(p){al(p)}}l.send(d);return l}
function zl(a,b){b=void 0===b?{}:b;var c=kl(a),d=T("web_ajax_ignore_global_headers_if_set"),e;for(e in ul){var f=R(ul[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=R("VISITOR_DATA"));!f||!c&&cc(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===R("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||!cc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!cc(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&
(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&cc(a)||(b["X-YouTube-Ad-Signals"]=gl(ll()));return b}
function Al(a,b){b.method="POST";b.postParams||(b.postParams={});return Bl(a,b)}
function Bl(a,b){var c=b.format||"JSON";a=Cl(a,b);var d=Dl(a,b),e=!1,f=El(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);var l=rl(k),n=null,p=400<=k.status&&500>k.status,r=500<=k.status&&600>k.status;if(l||p||r)n=Fl(a,c,k,b.convertToSafeHtml);l&&(l=Gl(c,k,n));n=n||{};p=b.context||C;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=sl(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Cl(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=R("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=jl(a,b||{},!0);return a}
function Dl(a,b){var c=R("XSRF_FIELD_NAME"),d=R("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=R("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||cc(a)&&!b.withCredentials&&cc(a)!==document.location.hostname||"POST"!==b.method||h&&"application/x-www-form-urlencoded"!==h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(T("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=hl(e),wb(e,f),e=b.postBodyFormat&&"JSON"===b.postBodyFormat?
JSON.stringify(e):hc(e));f=e||f&&!pb(f);!wl&&f&&"POST"!==b.method&&(wl=!0,$k(Error("AJAX request with postData should use POST")));return e}
function Fl(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,al(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Hl(a):null)e={},fb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Il(g)})}d&&Jl(e);
return e}
function Jl(a){if(Qa(a))for(var b in a){var c;(c="html_content"===b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b],e=yb();d=e?e.createHTML(d):d;a[c]=new Wb(d)}else Jl(a[b])}}
function Gl(a,b,c){if(b&&204===b.status)return!0;switch(a){case "JSON":return!!c;case "XML":return 0===parseInt(c&&c.return_code,10);case "RAW":return!0;default:return!!c}}
function Hl(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Il(a){var b="";fb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function yl(a){var b=window.location.search,c=cc(a);T("debug_handle_relative_url_for_query_forward_killswitch")||!c&&kl(a)&&(c=document.location.hostname);var d=ac(bc(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=hl(b),f={};fb(vl,function(g){e[g]&&(f[g]=e[g])});
return jl(a,f||{},!1)}
var El=xl;var Kl=[{Ic:function(a){return"Cannot read property '"+a.key+"'"},
hc:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ic:function(a){return"Cannot call '"+a.key+"'"},
hc:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ic:function(a){return a.key+" is not defined"},
hc:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Ml={Ta:[],Qa:[{callback:Ll,weight:500}]};function Ll(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Nl(){this.Qa=[];this.Ta=[]}
var Ol;function Pl(){if(!Ol){var a=Ol=new Nl;a.Ta.length=0;a.Qa.length=0;Ml.Ta&&a.Ta.push.apply(a.Ta,Ml.Ta);Ml.Qa&&a.Qa.push.apply(a.Qa,Ml.Qa)}return Ol}
;var Ql=new L;function Rl(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=Sl(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=Sl(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=Sl(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function Sl(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function Tl(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=Ul(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=e;var g=a[e],h=b,k=c;f="string"!==typeof g||"clickTrackingParams"!==f&&"trackingParams"!==f?0:(g=Rl(atob(g.replace(/-/g,"+").replace(/_/g,"/"))))?Ul(f+".ve",g,h,k):0;d+=f;d+=Ul(e,a[e],b,c);if(500<d)break}}else c[b]=Vl(a),d+=c[b].length;else c[b]=Vl(a),d+=c[b].length;return d}
function Ul(a,b,c,d){c+="."+a;a=Vl(b);d[c]=a;return c.length+a.length}
function Vl(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function Wl(){this.af=!0}
function Xl(){Wl.h||(Wl.h=new Wl);return Wl.h}
function Yl(a,b){a={};var c=zg([]);c&&(a.Authorization=c,c=b=null==b?void 0:b.sessionIndex,void 0===c&&(c=Number(R("SESSION_INDEX",0)),c=isNaN(c)?0:c),T("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=c.toString()),"INNERTUBE_HOST_OVERRIDE"in Uk||(a["X-Origin"]=window.location.origin),void 0===b&&"DELEGATED_SESSION_ID"in Uk&&(a["X-Goog-PageId"]=R("DELEGATED_SESSION_ID")));return a}
;var Zl={identityType:"UNAUTHENTICATED_IDENTITY_TYPE_UNKNOWN"};function $l(a){var b=this;this.i=void 0;this.h=!1;a.addEventListener("beforeinstallprompt",function(c){c.preventDefault();b.i=c});
a.addEventListener("appinstalled",function(){b.h=!0},{once:!0})}
function am(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function bm(a,b,c,d,e){vg.set(""+a,b,{fc:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
function cm(a){return vg.get(""+a,void 0)}
function dm(a,b,c){vg.remove(""+a,void 0===b?"/":b,void 0===c?"youtube.com":c)}
function em(){if(!vg.isEnabled())return!1;if(vg.h.cookie)return!0;vg.set("TESTCOOKIESENABLED","1",{fc:60});if("1"!==vg.get("TESTCOOKIESENABLED"))return!1;vg.remove("TESTCOOKIESENABLED");return!0}
;var fm=E("ytglobal.prefsUserPrefsPrefs_")||{};D("ytglobal.prefsUserPrefsPrefs_",fm);function gm(){this.h=R("ALT_PREF_COOKIE_NAME","PREF");this.i=R("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=cm(this.h);a&&this.parse(a)}
var hm;function im(){hm||(hm=new gm);return hm}
m=gm.prototype;m.get=function(a,b){jm(a);km(a);a=void 0!==fm[a]?fm[a].toString():null;return null!=a?a:b?b:""};
m.set=function(a,b){jm(a);km(a);if(null==b)throw Error("ExpectedNotNull");fm[a]=b.toString()};
function lm(a){return!!((mm("f"+(Math.floor(a/31)+1))||0)&1<<a%31)}
m.remove=function(a){jm(a);km(a);delete fm[a]};
m.clear=function(){for(var a in fm)delete fm[a]};
function km(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function jm(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function mm(a){a=void 0!==fm[a]?fm[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
m.parse=function(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(fm[d]=c.toString())}};var nm={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},om={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};
function pm(){var a=C.navigator;return a?a.connection:void 0}
function qm(){var a=pm();if(a){var b=nm[a.type||"unknown"]||"CONN_UNKNOWN";a=nm[a.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===b&&"CONN_UNKNOWN"!==a&&(b=a);if("CONN_UNKNOWN"!==b)return b;if("CONN_UNKNOWN"!==a)return a}}
function rm(){var a=pm();if(null!=a&&a.effectiveType)return om.hasOwnProperty(a.effectiveType)?om[a.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN"}
;function V(a){var b=B.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(oa(b))}
w(V,Error);function sm(){try{return tm(),!0}catch(a){return!1}}
function tm(a){if(void 0!==R("DATASYNC_ID"))return R("DATASYNC_ID");throw new V("Datasync ID not set",void 0===a?"unknown":a);}
;function um(){}
function wm(a,b){return wi.ab(a,0,b)}
um.prototype.qa=function(a,b){return this.ab(a,1,b)};
um.prototype.Bb=function(a){var b=E("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var xm=U("web_emulated_idle_callback_delay",300),ym=1E3/60-3,zm=[8,5,4,3,2,1,0];
function Am(a){a=void 0===a?{}:a;H.call(this);this.i=[];this.j={};this.ba=this.h=0;this.X=this.m=!1;this.P=[];this.T=this.ea=!1;for(var b=v(zm),c=b.next();!c.done;c=b.next())this.i[c.value]=[];this.l=0;this.qc=a.timeout||1;this.D=ym;this.A=0;this.ka=this.Be.bind(this);this.pc=this.df.bind(this);this.Pa=this.Pd.bind(this);this.Za=this.ke.bind(this);this.Qb=this.Ee.bind(this);this.Ba=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!T("disable_scheduler_requestIdleCallback");(this.ga=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.ka)}
w(Am,H);m=Am.prototype;m.Bb=function(a){var b=Ya();Bm(this,a);a=Ya()-b;this.m||(this.D-=a)};
m.ab=function(a,b,c){++this.ba;if(10===b)return this.Bb(a),this.ba;var d=this.ba;this.j[d]=a;this.m&&!c?this.P.push({id:d,priority:b}):(this.i[b].push(d),this.X||this.m||(0!==this.h&&Cm(this)!==this.A&&this.stop(),this.start()));return d};
m.ra=function(a){delete this.j[a]};
function Dm(a){a.P.length=0;for(var b=5;0<=b;b--)a.i[b].length=0;a.i[8].length=0;a.j={};a.stop()}
m.isHidden=function(){return!!document.hidden||!1};
function Em(a){return!a.isHidden()&&a.ga}
function Cm(a){if(a.i[8].length){if(a.T)return 4;if(Em(a))return 3}for(var b=5;b>=a.l;b--)if(0<a.i[b].length)return 0<b?Em(a)?3:2:1;return 0}
m.Jb=function(a){var b=E("yt.logging.errors.log");b&&b(a)};
function Bm(a,b){try{b()}catch(c){a.Jb(c)}}
function Fm(a){for(var b=v(zm),c=b.next();!c.done;c=b.next())if(a.i[c.value].length)return!0;return!1}
m.ke=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ea=!0;Gm(this,b);this.ea=!1};
m.df=function(){Gm(this)};
m.Pd=function(){Hm(this)};
m.Ee=function(a){this.T=!0;var b=Cm(this);4===b&&b!==this.A&&(this.stop(),this.start());Gm(this,void 0,a);this.T=!1};
m.Be=function(){this.isHidden()||Hm(this);this.h&&(this.stop(),this.start())};
function Hm(a){a.stop();a.m=!0;for(var b=Ya(),c=a.i[8];c.length;){var d=c.shift(),e=a.j[d];delete a.j[d];e&&Bm(a,e)}Im(a);a.m=!1;Fm(a)&&a.start();b=Ya()-b;a.D-=b}
function Im(a){for(var b=0,c=a.P.length;b<c;b++){var d=a.P[b];a.i[d.priority].push(d.id)}a.P.length=0}
function Gm(a,b,c){a.T&&4===a.A&&a.h||a.stop();a.m=!0;b=Ya()+(b||a.D);for(var d=a.i[5];d.length;){var e=d.shift(),f=a.j[e];delete a.j[e];if(f){e=a;try{f(c)}catch(l){e.Jb(l)}}}for(d=a.i[4];d.length;)c=d.shift(),f=a.j[c],delete a.j[c],f&&Bm(a,f);d=a.ea?0:1;d=a.l>d?a.l:d;if(!(Ya()>=b)){do{a:{c=a;f=d;for(e=3;e>=f;e--)for(var g=c.i[e];g.length;){var h=g.shift(),k=c.j[h];delete c.j[h];if(k){c=k;break a}}c=null}c&&Bm(a,c)}while(c&&Ya()<b)}a.m=!1;Im(a);a.D=ym;Fm(a)&&a.start()}
m.start=function(){this.X=!1;if(0===this.h)switch(this.A=Cm(this),this.A){case 1:var a=this.Za;this.h=this.Ba?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,xm);break;case 2:this.h=window.setTimeout(this.pc,this.qc);break;case 3:this.h=window.requestAnimationFrame(this.Qb);break;case 4:this.h=window.setTimeout(this.Pa,0)}};
m.pause=function(){this.stop();this.X=!0};
m.stop=function(){if(this.h){switch(this.A){case 1:var a=this.h;this.Ba?window.cancelIdleCallback(a):window.clearTimeout(a);break;case 2:case 4:window.clearTimeout(this.h);break;case 3:window.cancelAnimationFrame(this.h)}this.h=0}};
m.S=function(){Dm(this);this.stop();this.ga&&document.removeEventListener("visibilitychange",this.ka);H.prototype.S.call(this)};var Jm=E("yt.scheduler.instance.timerIdMap_")||{},Km=U("kevlar_tuner_scheduler_soft_state_timer_ms",800),Lm=0,Mm=0;function Nm(){var a=E("ytglobal.schedulerInstanceInstance_");if(!a||a.Z())a=new Am(R("scheduler")||{}),D("ytglobal.schedulerInstanceInstance_",a);return a}
function Om(){Pm();var a=E("ytglobal.schedulerInstanceInstance_");a&&(rc(a),D("ytglobal.schedulerInstanceInstance_",null))}
function Pm(){Dm(Nm());for(var a in Jm)Jm.hasOwnProperty(a)&&delete Jm[Number(a)]}
function Qm(a,b,c){if(!c)return c=void 0===c,-Nm().ab(a,b,c);var d=window.setTimeout(function(){var e=Nm().ab(a,b);Jm[d]=e},c);
return d}
function Rm(a){Nm().Bb(a)}
function Sm(a){var b=Nm();if(0>a)b.ra(-a);else{var c=Jm[a];c?(b.ra(c),delete Jm[a]):window.clearTimeout(a)}}
function Tm(){Um()}
function Um(){window.clearTimeout(Lm);Nm().start()}
function Vm(){Nm().pause();window.clearTimeout(Lm);Lm=window.setTimeout(Tm,Km)}
function Wm(){window.clearTimeout(Mm);Mm=window.setTimeout(function(){Xm(0)},Km)}
function Xm(a){Wm();var b=Nm();b.l=a;b.start()}
function Ym(a){Wm();var b=Nm();b.l>a&&(b.l=a,b.start())}
function Zm(){window.clearTimeout(Mm);var a=Nm();a.l=0;a.start()}
function $m(){E("yt.scheduler.initialized")||(D("yt.scheduler.instance.dispose",Om),D("yt.scheduler.instance.addJob",Qm),D("yt.scheduler.instance.addImmediateJob",Rm),D("yt.scheduler.instance.cancelJob",Sm),D("yt.scheduler.instance.cancelAllJobs",Pm),D("yt.scheduler.instance.start",Um),D("yt.scheduler.instance.pause",Vm),D("yt.scheduler.instance.setPriorityThreshold",Xm),D("yt.scheduler.instance.enablePriorityThreshold",Ym),D("yt.scheduler.instance.clearPriorityThreshold",Zm),D("yt.scheduler.initialized",
!0))}
;function an(){um.apply(this,arguments)}
w(an,um);function bn(){an.h||(an.h=new an);return an.h}
an.prototype.ab=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=E("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):sl(a,c||0)};
an.prototype.ra=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=E("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
an.prototype.start=function(){var a=E("yt.scheduler.instance.start");a&&a()};
an.prototype.pause=function(){var a=E("yt.scheduler.instance.pause");a&&a()};
var wi=bn();T("web_scheduler_auto_init")&&$m();function cn(a){var b=new Zi;(b=b.isAvailable()?a?new ij(b,a):b:null)||(a=new dj(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new Ui(a):null;this.i=document.domain||window.location.hostname}
cn.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape((new hh).serialize(b))}catch(f){return}else e=escape(b);bm(a,e,c,this.i)};
cn.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=cm(a))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
cn.prototype.remove=function(a){this.h&&this.h.remove(a);dm(a,"/",this.i)};var dn=function(){var a;return function(){a||(a=new cn("ytidb"));return a}}();
function en(){var a;return null==(a=dn())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var fn=[],gn,hn=!1;function jn(){var a={};for(gn=new kn(void 0===a.handleError?ln:a.handleError,void 0===a.logEvent?mn:a.logEvent);0<fn.length;)switch(a=fn.shift(),a.type){case "ERROR":gn.Jb(a.payload);break;case "EVENT":gn.logEvent(a.eventType,a.payload)}}
function nn(a){hn||(gn?gn.Jb(a):(fn.push({type:"ERROR",payload:a}),10<fn.length&&fn.shift()))}
function on(a,b){hn||(gn?gn.logEvent(a,b):(fn.push({type:"EVENT",eventType:a,payload:b}),10<fn.length&&fn.shift()))}
;function pn(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function qn(a){return a.substr(0,a.indexOf(":"))||a}
;var rn=se||te;function sn(a){var b=Nb();return b?0<=b.toLowerCase().indexOf(a):!1}
;var tn={},un=(tn.AUTH_INVALID="No user identifier specified.",tn.EXPLICIT_ABORT="Transaction was explicitly aborted.",tn.IDB_NOT_SUPPORTED="IndexedDB is not supported.",tn.MISSING_INDEX="Index not created.",tn.MISSING_OBJECT_STORES="Object stores not created.",tn.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",tn.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",tn.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
tn.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",tn.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",tn.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",tn.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",tn),vn={},wn=(vn.AUTH_INVALID="ERROR",vn.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",vn.EXPLICIT_ABORT="IGNORED",vn.IDB_NOT_SUPPORTED="ERROR",vn.MISSING_INDEX=
"WARNING",vn.MISSING_OBJECT_STORES="ERROR",vn.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",vn.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",vn.QUOTA_EXCEEDED="WARNING",vn.QUOTA_MAYBE_EXCEEDED="WARNING",vn.UNKNOWN_ABORT="WARNING",vn.INCOMPATIBLE_DB_VERSION="WARNING",vn),xn={},yn=(xn.AUTH_INVALID=!1,xn.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,xn.EXPLICIT_ABORT=!1,xn.IDB_NOT_SUPPORTED=!1,xn.MISSING_INDEX=!1,xn.MISSING_OBJECT_STORES=!1,xn.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,xn.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,xn.QUOTA_EXCEEDED=!1,xn.QUOTA_MAYBE_EXCEEDED=!0,xn.UNKNOWN_ABORT=!0,xn.INCOMPATIBLE_DB_VERSION=!1,xn);function zn(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?un[a]:c;d=void 0===d?wn[a]:d;e=void 0===e?yn[a]:e;V.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,zn.prototype)}
w(zn,V);function An(a,b){zn.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},un.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,An.prototype)}
w(An,zn);function Bn(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,Bn.prototype)}
w(Bn,Error);var Cn=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function Dn(a,b,c,d){b=qn(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof zn)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new zn("QUOTA_EXCEEDED",a);if(ue&&"UnknownError"===e.name)return new zn("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof Bn)return new zn("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&Cn.some(function(f){return e.message.includes(f)}))return new zn("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new zn("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",sd:e.name})];e.level="WARNING";return e}
function En(a,b,c){var d=en();return new zn("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function Fn(a){if(!a)throw Error();throw a;}
function Gn(a){return a}
function Hn(a){this.h=a}
function In(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=v(d.i);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=v(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.i=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
In.all=function(a){return new In(new Hn(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={rb:0};f.rb<a.length;f={rb:f.rb},++f.rb)In.resolve(a[f.rb]).then(function(g){return function(h){d[g.rb]=h;e--;0===e&&b(d)}}(f)).catch(function(g){c(g)})}))};
In.resolve=function(a){return new In(new Hn(function(b,c){a instanceof In?a.then(b,c):b(a)}))};
In.reject=function(a){return new In(new Hn(function(b,c){c(a)}))};
In.prototype.then=function(a,b){var c=this,d=null!=a?a:Gn,e=null!=b?b:Fn;return new In(new Hn(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){Jn(c,c,d,f,g)}),c.i.push(function(){Kn(c,c,e,f,g)})):"FULFILLED"===c.state.status?Jn(c,c,d,f,g):"REJECTED"===c.state.status&&Kn(c,c,e,f,g)}))};
In.prototype.catch=function(a){return this.then(void 0,a)};
function Jn(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof In?Ln(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Kn(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof In?Ln(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Ln(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof In?Ln(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Mn(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Nn(a){return new Promise(function(b,c){Mn(a,b,c)})}
function On(a){return new In(new Hn(function(b,c){Mn(a,b,c)}))}
;function Pn(a,b){return new In(new Hn(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Qn=window,W=Qn.ytcsi&&Qn.ytcsi.now?Qn.ytcsi.now:Qn.performance&&Qn.performance.timing&&Qn.performance.now&&Qn.performance.timing.navigationStart?function(){return Qn.performance.timing.navigationStart+Qn.performance.now()}:function(){return(new Date).getTime()};function Rn(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(W());this.i=!1}
m=Rn.prototype;m.add=function(a,b,c){return Sn(this,[a],{mode:"readwrite",ia:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Sn(this,[a],{mode:"readwrite",ia:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){this.h.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Sn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).count(b)})};
function Tn(a,b,c){a=a.h.createObjectStore(b,c);return new Un(a)}
m.delete=function(a,b){return Sn(this,[a],{mode:"readwrite",ia:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Sn(this,[a],{mode:"readonly",ia:!0},function(c){return c.objectStore(a).get(b)})};
function Vn(a,b,c){return Sn(a,[b],{mode:"readwrite",ia:!0},function(d){d=d.objectStore(b);return On(d.h.put(c,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Sn(a,b,c,d){var e,f,g,h,k,l,n,p,r,t,x,z;return A(function(y){switch(y.h){case 1:var J={mode:"readonly",ia:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?J.mode=c:Object.assign(J,c);e=J;a.transactionCount++;f=e.ia?3:1;g=0;case 2:if(h){y.B(4);break}g++;k=Math.round(W());Ba(y,5);l=a.h.transaction(b,e.mode);J=y.yield;var G=new Wn(l);G=Xn(G,d);return J.call(y,G,7);case 7:return n=y.i,p=Math.round(W()),Yn(a,k,p,g,void 0,b.join(),e),y.return(n);case 5:r=Ca(y);t=Math.round(W());x=Dn(r,
a.h.name,b.join(),a.h.version);if((z=x instanceof zn&&!x.h)||g>=f)Yn(a,k,t,g,x,b.join(),e),h=x;y.B(2);break;case 4:return y.return(Promise.reject(h))}})}
function Yn(a,b,c,d,e,f,g){b=c-b;e?(e instanceof zn&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&on("QUOTA_EXCEEDED",{dbName:qn(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof zn&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),on("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Zn(a,!1,d,f,b,g.tag),nn(e)):Zn(a,!0,d,f,b,g.tag)}
function Zn(a,b,c,d,e,f){on("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Un(a){this.h=a}
m=Un.prototype;m.add=function(a,b){return On(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return On(this.h.clear()).then(function(){})};
function $n(a,b,c){a.h.createIndex(b,c,{unique:!1})}
m.count=function(a){return On(this.h.count(a))};
function ao(a,b){return bo(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?ao(this,a):On(this.h.delete(a))};
m.get=function(a){return On(this.h.get(a))};
m.index=function(a){try{return new co(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new Bn(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function bo(a,b,c){a=a.h.openCursor(b.query,b.direction);return eo(a).then(function(d){return Pn(d,c)})}
function Wn(a){var b=this;this.h=a;this.i=new Map;this.aborted=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.aborted){e=zn;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Xn(a,b){var c=new Promise(function(d,e){try{b(a).then(function(f){d(f)}).catch(e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return v(d).next().value})}
Wn.prototype.abort=function(){this.h.abort();this.aborted=!0;throw new zn("EXPLICIT_ABORT");};
Wn.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.i.get(a);b||(b=new Un(a),this.i.set(a,b));return b};
function co(a){this.h=a}
m=co.prototype;m.count=function(a){return On(this.h.count(a))};
m.delete=function(a){return fo(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return On(this.h.get(a))};
m.getKey=function(a){return On(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function fo(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return eo(a).then(function(d){return Pn(d,c)})}
function go(a,b){this.request=a;this.cursor=b}
function eo(a){return On(a).then(function(b){return b?new go(a,b):null})}
m=go.prototype;m.advance=function(a){this.cursor.advance(a);return eo(this.request)};
m.continue=function(a){this.cursor.continue(a);return eo(this.request)};
m.delete=function(){return On(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return On(this.cursor.update(a))};function ho(a,b,c){return new Promise(function(d,e){function f(){r||(r=new Rn(g.result,{closed:p}));return r}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Rd,k=c.blocking,l=c.bf,n=c.upgrade,p=c.closed,r;g.addEventListener("upgradeneeded",function(t){try{if(null===t.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");t.dataLoss&&"none"!==t.dataLoss&&on("IDB_DATA_CORRUPTED",{reason:t.dataLossMessage||"unknown reason",dbName:qn(a)});var x=f(),z=new Wn(g.transaction);
n&&n(x,function(y){return t.oldVersion<y&&t.newVersion>=y},z);
z.done.catch(function(y){e(y)})}catch(y){e(y)}});
g.addEventListener("success",function(){var t=g.result;k&&t.addEventListener("versionchange",function(){k(f())});
t.addEventListener("close",function(){on("IDB_UNEXPECTEDLY_CLOSED",{dbName:qn(a),dbVersion:t.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function io(a,b,c){c=void 0===c?{}:c;return ho(a,b,c)}
function jo(a,b){b=void 0===b?{}:b;var c,d,e,f;return A(function(g){if(1==g.h)return Ba(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Rd)&&c.addEventListener("blocked",function(){e()}),g.yield(Nn(c),4);
if(2!=g.h)g.h=0,g.l=0;else throw f=Ca(g),Dn(f,a,"",-1);})}
;function ko(a,b){this.name=a;this.options=b;this.j=!0;this.v=this.l=0}
ko.prototype.i=function(a,b,c){c=void 0===c?{}:c;return io(a,b,c)};
ko.prototype.delete=function(a){a=void 0===a?{}:a;return jo(this.name,a)};
function lo(a,b){return new zn("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function mo(a,b){if(!b)throw En("openWithToken",qn(a.name));return a.open()}
ko.prototype.open=function(){function a(){var f,g,h,k,l,n,p,r,t,x;return A(function(z){switch(z.h){case 1:return g=null!=(f=Error().stack)?f:"",Ba(z,2),z.yield(c.i(c.name,c.options.version,e),4);case 4:for(var y=h=z.i,J=c.options,G=[],M=v(Object.keys(J.xb)),P=M.next();!P.done;P=M.next()){P=P.value;var ea=J.xb[P],aa=void 0===ea.He?Number.MAX_VALUE:ea.He;!(y.h.version>=ea.Cb)||y.h.version>=aa||y.h.objectStoreNames.contains(P)||G.push(P)}k=G;if(0===k.length){z.B(5);break}l=Object.keys(c.options.xb);
n=h.objectStoreNames();if(c.v<U("ytidb_reopen_db_retries",0))return c.v++,h.close(),nn(new zn("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());if(!(c.l<U("ytidb_remake_db_retries",1))){z.B(6);break}c.l++;return z.yield(c.delete(),7);case 7:return nn(new zn("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:l,foundObjectStores:n})),z.return(a());case 6:throw new An(n,l);case 5:return z.return(h);case 2:p=Ca(z);
if(p instanceof DOMException?"VersionError"!==p.name:"DOMError"in self&&p instanceof DOMError?"VersionError"!==p.name:!(p instanceof Object&&"message"in p)||"An attempt was made to open a database using a lower version than the existing version."!==p.message){z.B(8);break}return z.yield(c.i(c.name,void 0,Object.assign({},e,{upgrade:void 0})),9);case 9:r=z.i;t=r.h.version;if(void 0!==c.options.version&&t>c.options.version+1)throw r.close(),c.j=!1,lo(c,t);return z.return(r);case 8:throw b(),p instanceof
Error&&!T("ytidb_async_stack_killswitch")&&(p.stack=p.stack+"\n"+g.substring(g.indexOf("\n")+1)),Dn(p,c.name,"",null!=(x=c.options.version)?x:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.j)throw lo(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,bf:b,upgrade:this.options.upgrade};return this.h=d=a()};var no=new ko("YtIdbMeta",{xb:{databases:{Cb:1}},upgrade:function(a,b){b(1)&&Tn(a,"databases",{keyPath:"actualName"})}});
function oo(a,b){var c;return A(function(d){if(1==d.h)return d.yield(mo(no,b),2);c=d.i;return d.return(Sn(c,["databases"],{ia:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return On(f.h.put(a,void 0)).then(function(){})})}))})}
function po(a,b){var c;return A(function(d){if(1==d.h)return a?d.yield(mo(no,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function qo(a,b){var c,d;return A(function(e){return 1==e.h?(c=[],e.yield(mo(no,b),2)):3!=e.h?(d=e.i,e.yield(Sn(d,["databases"],{ia:!0,mode:"readonly"},function(f){c.length=0;return bo(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function ro(a){return qo(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
function so(a,b,c){return qo(function(d){return c?void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)&&c.includes(d.publicName):void 0!==d.userIdentifier&&!a.includes(d.userIdentifier)},b)}
function to(a){var b,c;return A(function(d){if(1==d.h)return b=tm("YtIdbMeta hasAnyMeta other"),d.yield(qo(function(e){return void 0!==e.userIdentifier&&e.userIdentifier!==b},a),2);
c=d.i;return d.return(0<c.length)})}
;var uo,vo=new function(){}(new function(){});
function wo(){var a,b,c,d;return A(function(e){switch(e.h){case 1:a=en();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=rn)f=/WebKit\/([0-9]+)/.exec(Nb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Nb()),f=!(f&&602<=parseInt(f[1],10)));if(f||Fc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
Ba(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return e.yield(oo(d,vo),4);case 4:return e.yield(po("yt-idb-test-do-not-use",vo),5);case 5:return e.return(!0);case 2:return Ca(e),e.return(!1)}})}
function xo(){if(void 0!==uo)return uo;hn=!0;return uo=wo().then(function(a){hn=!1;var b;if(null!=(b=dn())&&b.h){var c;b={hasSucceededOnce:(null==(c=en())?void 0:c.hasSucceededOnce)||a};var d;null==(d=dn())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function yo(){return E("ytglobal.idbToken_")||void 0}
function zo(){var a=yo();return a?Promise.resolve(a):xo().then(function(b){(b=b?vo:void 0)&&D("ytglobal.idbToken_",b);return b})}
;var Ao=0;function Bo(a,b){Ao||(Ao=wi.qa(function(){var c,d,e,f,g;return A(function(h){switch(h.h){case 1:return h.yield(zo(),2);case 2:c=h.i;if(!c)return h.return();d=!0;Ba(h,3);return h.yield(so(a,c,b),5);case 5:e=h.i;if(!e.length){d=!1;h.B(6);break}f=e[0];return h.yield(jo(f.actualName),7);case 7:return h.yield(po(f.actualName,c),6);case 6:h.h=4;h.l=0;break;case 3:g=Ca(h),nn(g),d=!1;case 4:wi.ra(Ao),Ao=0,d&&Bo(a,b),h.h=0}})}))}
function Co(){var a;return A(function(b){return 1==b.h?b.yield(zo(),2):(a=b.i)?b.return(to(a)):b.return(!1)})}
new Mh;function Do(a){if(!sm())throw a=new zn("AUTH_INVALID",{dbName:a}),nn(a),a;var b=tm();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function Eo(a,b,c,d){var e,f,g,h,k,l;return A(function(n){switch(n.h){case 1:return f=null!=(e=Error().stack)?e:"",n.yield(zo(),2);case 2:g=n.i;if(!g)throw h=En("openDbImpl",a,b),T("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),nn(h),h;pn(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:Do(a);Ba(n,3);return n.yield(oo(k,g),5);case 5:return n.yield(io(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=Ca(n),Ba(n,7),n.yield(po(k.actualName,
g),9);case 9:n.h=8;n.l=0;break;case 7:Ca(n);case 8:throw l;}})}
function Fo(a,b,c){c=void 0===c?{}:c;return Eo(a,b,!1,c)}
function Go(a,b,c){c=void 0===c?{}:c;return Eo(a,b,!0,c)}
function Ho(a,b){b=void 0===b?{}:b;var c,d;return A(function(e){if(1==e.h)return e.yield(zo(),2);if(3!=e.h){c=e.i;if(!c)return e.return();pn(a);d=Do(a);return e.yield(jo(d.actualName,b),3)}return e.yield(po(d.actualName,c),0)})}
function Io(a,b,c){a=a.map(function(d){return A(function(e){return 1==e.h?e.yield(jo(d.actualName,b),2):e.yield(po(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function Jo(){var a=void 0===a?{}:a;var b,c;return A(function(d){if(1==d.h)return d.yield(zo(),2);if(3!=d.h){b=d.i;if(!b)return d.return();pn("LogsDatabaseV2");return d.yield(ro(b),3)}c=d.i;return d.yield(Io(c,a,b),0)})}
function Ko(a,b){b=void 0===b?{}:b;var c;return A(function(d){if(1==d.h)return d.yield(zo(),2);if(3!=d.h){c=d.i;if(!c)return d.return();pn(a);return d.yield(jo(a,b),3)}return d.yield(po(a,c),0)})}
;function Lo(a,b){ko.call(this,a,b);this.options=b;pn(a)}
w(Lo,ko);function Mo(a,b){var c;return function(){c||(c=new Lo(a,b));return c}}
Lo.prototype.i=function(a,b,c){c=void 0===c?{}:c;return(this.options.nc?Go:Fo)(a,b,Object.assign({},c))};
Lo.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.nc?Ko:Ho)(this.name,a)};
function No(a,b){return Mo(a,b)}
;var Oo={},Po=No("ytGcfConfig",{xb:(Oo.coldConfigStore={Cb:1},Oo.hotConfigStore={Cb:1},Oo),nc:!1,upgrade:function(a,b){b(1)&&($n(Tn(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),$n(Tn(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function Qo(a){return mo(Po(),a)}
function Ro(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:return d={config:a,hashData:b,timestamp:W()},g.yield(Qo(c),2);case 2:return e=g.i,g.yield(e.clear("hotConfigStore"),3);case 3:return g.yield(Vn(e,"hotConfigStore",d),4);case 4:return f=g.i,g.return(f)}})}
function So(a,b,c,d){var e,f,g;return A(function(h){switch(h.h){case 1:return e={config:a,hashData:b,configData:c,timestamp:W()},h.yield(Qo(d),2);case 2:return f=h.i,h.yield(f.clear("coldConfigStore"),3);case 3:return h.yield(Vn(f,"coldConfigStore",e),4);case 4:return g=h.i,h.return(g)}})}
function To(a){var b,c;return A(function(d){return 1==d.h?d.yield(Qo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Sn(b,["coldConfigStore"],{mode:"readwrite",ia:!0},function(e){return fo(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
function Uo(a){var b,c;return A(function(d){return 1==d.h?d.yield(Qo(a),2):3!=d.h?(b=d.i,c=void 0,d.yield(Sn(b,["hotConfigStore"],{mode:"readwrite",ia:!0},function(e){return fo(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.getValue()})}),3)):d.return(c)})}
;function Vo(){H.call(this);this.i=[];this.h=[];var a=E("yt.gcf.config.hotUpdateCallbacks");a?(this.i=[].concat(oa(a)),this.h=a):(this.h=[],D("yt.gcf.config.hotUpdateCallbacks",this.h))}
w(Vo,H);Vo.prototype.S=function(){for(var a=v(this.i),b=a.next();!b.done;b=a.next()){var c=this.h;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.i.length=0;H.prototype.S.call(this)};function Wo(){this.h=0;this.i=new Vo}
function Xo(){var a;return null!=(a=E("yt.gcf.config.hotConfigGroup"))?a:R("RAW_HOT_CONFIG_GROUP")}
function Yo(a,b,c){var d,e,f;return A(function(g){switch(g.h){case 1:if(!T("start_client_gcf")){g.B(0);break}c&&(a.j=c,D("yt.gcf.config.hotConfigGroup",a.j||null));a.l(b);d=yo();if(!d){g.B(3);break}if(c){g.B(4);break}return g.yield(Uo(d),5);case 5:e=g.i,c=null==(f=e)?void 0:f.config;case 4:return g.yield(Ro(c,b,d),3);case 3:if(c)for(var h=c,k=v(a.i.h),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.h=0}})}
function Zo(a,b,c){var d,e,f,g;return A(function(h){if(1==h.h){if(!T("start_client_gcf"))return h.B(0);a.coldHashData=b;D("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=yo())?c?h.B(4):h.yield(To(d),5):h.B(0)}4!=h.h&&(e=h.i,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return h.yield(So(c,b,g,d),0)})}
function $o(){if(!Wo.h){var a=new Wo;Wo.h=a}a=Wo.h;var b=W()-a.h;if(!(0!==a.h&&b<U("send_config_hash_timer"))){b=E("yt.gcf.config.coldConfigData");var c=E("yt.gcf.config.hotHashData"),d=E("yt.gcf.config.coldHashData");b&&c&&d&&(a.h=W());return{coldConfigData:b,hotHashData:c,coldHashData:d}}}
Wo.prototype.l=function(a){this.hotHashData=a;D("yt.gcf.config.hotHashData",this.hotHashData||null)};function ap(){return"INNERTUBE_API_KEY"in Uk&&"INNERTUBE_API_VERSION"in Uk}
function bp(){return{innertubeApiKey:R("INNERTUBE_API_KEY"),innertubeApiVersion:R("INNERTUBE_API_VERSION"),le:R("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),ld:R("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Wf:R("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:R("INNERTUBE_CONTEXT_CLIENT_VERSION"),ne:R("INNERTUBE_CONTEXT_HL"),me:R("INNERTUBE_CONTEXT_GL"),oe:R("INNERTUBE_HOST_OVERRIDE")||"",qe:!!R("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),pe:!!R("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:R("SERIALIZED_CLIENT_CONFIG_DATA")}}
function cp(a){var b={client:{hl:a.ne,gl:a.me,clientName:a.ld,clientVersion:a.innertubeContextClientVersion,configInfo:a.le}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=R("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=ol();0<c.length&&(b.request={internalExperimentFlags:c});c=a.ld;if(("WEB"===c||"MWEB"===c||1===c||2===c)&&b){var d;b.client.mainAppWebInfo=null!=(d=b.client.mainAppWebInfo)?
d:{};b.client.mainAppWebInfo.webDisplayMode=am()}(d=E("yt.embedded_player.embed_url"))&&b&&(b.thirdParty={embedUrl:d});var e;if(T("web_log_memory_total_kbytes")&&(null==(e=C.navigator)?0:e.deviceMemory)){var f;e=null==(f=C.navigator)?void 0:f.deviceMemory;b&&(b.client.memoryTotalKbytes=""+1E6*e)}a.appInstallData&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.appInstallData=a.appInstallData);(a=qm())&&b&&(b.client.connectionType=a);T("web_log_effective_connection_type")&&(a=rm())&&
b&&(b.client.effectiveConnectionType=a);T("start_client_gcf")&&(e=$o())&&(a=e.coldConfigData,f=e.coldHashData,e=e.hotHashData,a&&f&&e&&b&&(b.client.configInfo=b.client.configInfo||{},b.client.configInfo.coldConfigData=a,b.client.configInfo.coldHashData=f,b.client.configInfo.hotHashData=e));R("DELEGATED_SESSION_ID")&&!T("pageid_as_header_web")&&(b.user={onBehalfOfUser:R("DELEGATED_SESSION_ID")});!T("fill_delegate_context_in_gel_killswitch")&&(a=R("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&
(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;f=a.assign;e=b.client;d={};c=v(Object.entries(hl(R("DEVICE",""))));for(var g=c.next();!g.done;g=c.next()){var h=v(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?d.deviceMake=h:"cmodel"===g?d.deviceModel=h:"cbr"===g?d.browserName=h:"cbrver"===g?d.browserVersion=h:"cos"===g?d.osName=h:"cosver"===g?d.osVersion=h:"cplatform"===g&&(d.platform=h)}b.client=f.call(a,e,d);return b}
function dp(a,b,c){c=void 0===c?{}:c;var d={};R("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":R("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||R("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.authorization||R("AUTHORIZATION");b||(a?b="Bearer "+E("gapi.auth.getToken")().Pf:(a=Yl(Xl()),T("pageid_as_header_web")||delete a["X-Goog-PageId"],d=Object.assign({},d,a)));b&&(d.Authorization=b);return d}
;var ep="undefined"!==typeof TextEncoder?new TextEncoder:null,fp=ep?function(a){return ep.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function gp(a,b){this.version=a;this.args=b}
gp.prototype.serialize=function(){return{version:this.version,args:this.args}};function hp(a,b){this.topic=a;this.h=b}
hp.prototype.toString=function(){return this.topic};var ip=E("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ab;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsub2Pubsub2Instance",ip);var jp=E("ytPubsub2Pubsub2SubscribedKeys")||{};D("ytPubsub2Pubsub2SubscribedKeys",jp);var kp=E("ytPubsub2Pubsub2TopicToKeys")||{};D("ytPubsub2Pubsub2TopicToKeys",kp);var lp=E("ytPubsub2Pubsub2IsAsync")||{};D("ytPubsub2Pubsub2IsAsync",lp);
D("ytPubsub2Pubsub2SkipSubKey",null);function mp(a,b){var c=np();c&&c.publish.call(c,a.toString(),a,b)}
function op(a){var b=pp,c=np();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=E("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(jp[d])try{if(f&&b instanceof hp&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.Wa){var l=new h;h.Wa=l.version}var n=h.Wa}catch(y){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{n=Reflect;var p=n.construct;
var r=k.args,t=r.length;if(0<t){var x=Array(t);for(k=0;k<t;k++)x[k]=r[k];var z=x}else z=[];f=p.call(n,h,z)}catch(y){throw y.message="yt.pubsub2.Data.deserialize(): "+y.message,y;}}catch(y){throw y.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+y.message,y;}a.call(window,f)}catch(y){$k(y)}},lp[b.toString()]?E("yt.scheduler.instance")?wi.qa(g):sl(g,0):g())});
jp[d]=!0;kp[b.toString()]||(kp[b.toString()]=[]);kp[b.toString()].push(d);return d}
function qp(){var a=rp,b=op(function(c){a.apply(void 0,arguments);sp(b)});
return b}
function sp(a){var b=np();b&&("number"===typeof a&&(a=[a]),fb(a,function(c){b.unsubscribeByKey(c);delete jp[c]}))}
function np(){return E("ytPubsub2Pubsub2Instance")}
;function tp(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&mp("meta_logging_csi_event",{timerName:a,ng:b})}
;var up=void 0,vp=void 0;function wp(){vp||(vp=wk(R("WORKER_SERIALIZATION_URL")));return vp||void 0}
function xp(){var a=wp();up||void 0===a||(up=new Worker(Db(a),void 0));return up}
;var yp=U("max_body_size_to_compress",5E5),zp=U("min_body_size_to_compress",500),Ap=!0,Bp=0,Cp=0,Dp=U("compression_performance_threshold_lr",250),Ep=U("slow_compressions_before_abandon_count",4),Fp=!1,Gp=new Map,Hp=1,Ip=!0;function Jp(){if("function"===typeof Worker&&wp()&&!Fp){var a=function(c){c=c.data;if("gzippedGelBatch"===c.op){var d=Gp.get(c.key);d&&(Kp(c.gzippedBatch,d.latencyPayload,d.url,d.options,d.sendFn),Gp.delete(c.key))}},b=xp();
b&&(b.addEventListener("message",a),b.onerror=function(){Gp.clear()},Fp=!0)}}
function Lp(a,b,c,d,e){e=void 0===e?!1:e;var f={startTime:W(),ticks:{},infos:{}};if(Ap)try{var g=Mp(b);if(null!=g&&(g>yp||g<zp))d(a,c);else{if(T("gzip_gel_with_worker")&&(T("initial_gzip_use_main_thread")&&!Ip||!T("initial_gzip_use_main_thread"))){Fp||Jp();var h=xp();if(h&&!e){Gp.set(Hp,{latencyPayload:f,url:a,options:c,sendFn:d});h.postMessage({op:"gelBatchToGzip",serializedBatch:b,key:Hp});Hp++;return}}var k=vk(fp(b));Kp(k,f,a,c,d)}}catch(l){al(l),d(a,c)}else d(a,c)}
function Kp(a,b,c,d,e){Ip=!1;var f=W();b.ticks.gelc=f;Cp++;T("disable_compression_due_to_performance_degredation")&&f-b.startTime>=Dp&&(Bp++,T("abandon_compression_after_N_slow_zips")?Cp===U("compression_disable_point")&&Bp>Ep&&(Ap=!1):Ap=!1);Np(b);d.headers||(d.headers={});d.headers["Content-Encoding"]="gzip";d.postBody=a;d.postParams=void 0;e(c,d)}
function Op(a){var b=void 0===b?!1:b;var c=void 0===c?!1:c;var d=W(),e={startTime:d,ticks:{},infos:{}},f=b?E("yt.logging.gzipForFetch",!1):!0;if(Ap&&f){if(!a.body)return a;try{var g=c?a.body:"string"===typeof a.body?a.body:JSON.stringify(a.body);f=g;if(!c&&"string"===typeof g){var h=Mp(g);if(null!=h&&(h>yp||h<zp))return a;c=b?{level:1}:void 0;f=vk(fp(g),c);var k=W();e.ticks.gelc=k;if(b){Cp++;if((T("disable_compression_due_to_performance_degredation")||T("disable_compression_due_to_performance_degradation_lr"))&&
k-d>=Dp)if(Bp++,T("abandon_compression_after_N_slow_zips")||T("abandon_compression_after_N_slow_zips_lr")){b=Bp/Cp;var l=Ep/U("compression_disable_point");0<Cp&&0===Cp%U("compression_disable_point")&&b>=l&&(Ap=!1)}else Ap=!1;Np(e)}}a.headers=Object.assign({},{"Content-Encoding":"gzip"},a.headers||{});a.body=f;return a}catch(n){return al(n),a}}else return a}
function Mp(a){try{return(new Blob(a.split(""))).size}catch(b){return al(b),null}}
function Np(a){T("gel_compression_csi_killswitch")||!T("log_gel_compression_latency")&&!T("log_gel_compression_latency_lr")||tp("gel_compression",a,{sampleRate:.1})}
;function Pp(a){a=Object.assign({},a);delete a.Authorization;var b=zg();if(b){var c=new Ci;c.update(R("INNERTUBE_API_KEY"));c.update(b);a.hash=xe(c.digest(),3)}return a}
;var Qp;function Rp(){Qp||(Qp=new cn("yt.innertube"));return Qp}
function Sp(a,b,c,d){if(d)return null;d=Rp().get("nextId",!0)||1;var e=Rp().get("requests",!0)||{};e[d]={method:a,request:b,authState:Pp(c),requestTime:Math.round(W())};Rp().set("nextId",d+1,86400,!0);Rp().set("requests",e,86400,!0);return d}
function Tp(a){var b=Rp().get("requests",!0)||{};delete b[a];Rp().set("requests",b,86400,!0)}
function Up(a){var b=Rp().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(W())-d.requestTime)){var e=d.authState,f=Pp(dp(!1));sb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(W())),Vp(a,d.method,e,{}));delete b[c]}}Rp().set("requests",b,86400,!0)}}
;function Wp(a){this.Ub=this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.pb=function(){};
this.now=Date.now;this.Fb=!1;var b;this.Fd=null!=(b=a.Fd)?b:100;var c;this.zd=null!=(c=a.zd)?c:1;var d;this.xd=null!=(d=a.xd)?d:2592E6;var e;this.vd=null!=(e=a.vd)?e:12E4;var f;this.yd=null!=(f=a.yd)?f:5E3;var g;this.U=null!=(g=a.U)?g:void 0;this.Zb=!!a.Zb;var h;this.Xb=null!=(h=a.Xb)?h:.1;var k;this.jc=null!=(k=a.jc)?k:10;a.handleError&&(this.handleError=a.handleError);a.pb&&(this.pb=a.pb);a.Fb&&(this.Fb=a.Fb);a.Ub&&(this.Ub=a.Ub);this.V=a.V;this.Da=a.Da;this.da=a.da;this.aa=a.aa;this.sendFn=a.sendFn;
this.Oc=a.Oc;this.Lc=a.Lc;Xp(this)&&(!this.V||this.V("networkless_logging"))&&Yp(this)}
function Yp(a){Xp(a)&&!a.Fb&&(a.h=!0,a.Zb&&Math.random()<=a.Xb&&a.da.Sd(a.U),Zp(a),a.aa.wa()&&a.Ob(),a.aa.listen(a.Oc,a.Ob.bind(a)),a.aa.listen(a.Lc,a.Yc.bind(a)))}
m=Wp.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(Xp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.da.set(d,this.U).then(function(e){d.id=e;c.aa.wa()&&$p(c,d)}).catch(function(e){$p(c,d);
aq(c,e)})}else this.sendFn(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(Xp(this)&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.V&&this.V("nwl_skip_retry")&&(e.skipRetry=c);if(this.aa.wa()||this.V&&this.V("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return A(function(k){if(1==k.h)return k.yield(d.da.set(e,d.U).catch(function(l){aq(d,l)}),2);
f(g,h);k.h=0})}}this.sendFn(a,b,e.skipRetry)}else this.da.set(e,this.U).catch(function(g){d.sendFn(a,b,e.skipRetry);
aq(d,g)})}else this.sendFn(a,b,this.V&&this.V("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(Xp(this)&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.da.nb(d.id,c.U):e=!0;c.aa.gb&&c.V&&c.V("vss_network_hint")&&c.aa.gb(!0);f(g,h)};
this.sendFn(d.url,d.options,void 0,!0);this.da.set(d,this.U).then(function(g){d.id=g;e&&c.da.nb(d.id,c.U)}).catch(function(g){aq(c,g)})}else this.sendFn(a,b,void 0,!0)};
m.Ob=function(){var a=this;if(!Xp(this))throw Error("IndexedDB is not supported: throttleSend");this.i||(this.i=this.Da.qa(function(){var b;return A(function(c){if(1==c.h)return c.yield(a.da.hd("NEW",a.U),2);if(3!=c.h)return b=c.i,b?c.yield($p(a,b),3):(a.Yc(),c.return());a.i&&(a.i=0,a.Ob());c.h=0})},this.Fd))};
m.Yc=function(){this.Da.ra(this.i);this.i=0};
function $p(a,b){var c;return A(function(d){switch(d.h){case 1:if(!Xp(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return d.yield(a.da.te(b.id,a.U),3);case 3:(c=d.i)||a.pb(Error("The request cannot be found in the database."));case 2:if(bq(a,b,a.xd)){d.B(4);break}a.pb(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return d.yield(a.da.nb(b.id,a.U),5);case 5:return d.return();case 4:b.skipRetry||(b=cq(a,
b));if(!b){d.B(0);break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return d.yield(a.da.nb(b.id,a.U),8);case 8:a.sendFn(b.url,b.options,!!b.skipRetry),d.h=0}})}
function cq(a,b){if(!Xp(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return A(function(n){switch(n.h){case 1:g=dq(f);(h=eq(f))&&a.V&&a.V("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.V&&a.V("nwl_consider_error_code")&&g||a.V&&!a.V("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.jc)){n.B(2);break}if(!a.aa.mc){n.B(3);break}return n.yield(a.aa.mc(),3);case 3:if(a.aa.wa()){n.B(2);break}c(e,f);if(!a.V||!a.V("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){n.B(6);
break}return n.yield(a.da.Pc(b.id,a.U,!1),6);case 6:return n.return();case 2:if(a.V&&a.V("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.jc)return n.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){n.B(8);break}return b.sendCount<a.zd?n.yield(a.da.Pc(b.id,a.U,!0,h?!1:void 0),12):n.yield(a.da.nb(b.id,a.U),8);case 12:a.Da.qa(function(){a.aa.wa()&&a.Ob()},a.yd);
case 8:c(e,f),n.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return A(function(h){if(1==h.h)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):h.yield(a.da.nb(b.id,a.U),2);a.aa.gb&&a.V&&a.V("vss_network_hint")&&a.aa.gb(!0);d(e,f);h.h=0})};
return b}
function bq(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function Zp(a){if(!Xp(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.da.hd("QUEUED",a.U).then(function(b){b&&!bq(a,b,a.vd)?a.Da.qa(function(){return A(function(c){if(1==c.h)return void 0===b.id?c.B(2):c.yield(a.da.Pc(b.id,a.U),2);Zp(a);c.h=0})}):a.aa.wa()&&a.Ob()})}
function aq(a,b){a.Ld&&!a.aa.wa()?a.Ld(b):a.handleError(b)}
function Xp(a){return!!a.U||a.Ub}
function dq(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function eq(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var fq;
function gq(){if(fq)return fq();var a={};fq=No("LogsDatabaseV2",{xb:(a.LogsRequestsStore={Cb:2},a),nc:!1,upgrade:function(b,c,d){c(2)&&Tn(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),$n(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return fq()}
;function hq(a){return mo(gq(),a)}
function iq(a,b){var c,d,e,f;return A(function(g){if(1==g.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},g.yield(hq(b),2);if(3!=g.h)return d=g.i,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:R("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),g.yield(Vn(d,"LogsRequestsStore",e),3);f=g.i;c.ticks.tc=W();jq(c);return g.return(f)})}
function kq(a,b){var c,d,e,f,g,h,k;return A(function(l){if(1==l.h)return c={startTime:W(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},l.yield(hq(b),2);if(3!=l.h)return d=l.i,e=R("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,W()],h=IDBKeyRange.bound(f,g),k=void 0,l.yield(Sn(d,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(n){return fo(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===
a&&(k.status="QUEUED",p.update(k)))})}),3);
c.ticks.tc=W();jq(c);return l.return(k)})}
function lq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(hq(b),2);c=d.i;return d.return(Sn(c,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",On(f.h.put(g,void 0)).then(function(){return g})})}))})}
function mq(a,b,c,d){c=void 0===c?!0:c;var e;return A(function(f){if(1==f.h)return f.yield(hq(b),2);e=f.i;return f.return(Sn(e,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),On(h.h.put(k,void 0)).then(function(){return k})):In.resolve(void 0)})}))})}
function nq(a,b){var c;return A(function(d){if(1==d.h)return d.yield(hq(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function oq(a){var b,c;return A(function(d){if(1==d.h)return d.yield(hq(a),2);b=d.i;c=W()-2592E6;return d.yield(Sn(b,["LogsRequestsStore"],{mode:"readwrite",ia:!0},function(e){return bo(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function pq(){A(function(a){return a.yield(Jo(),0)})}
function jq(a){T("nwl_csi_killswitch")||tp("networkless_performance",a,{sampleRate:1})}
;var qq={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrCowatchPartyEvent:492,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,
mbsPlaybackInitiated:139,mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,
kidsSignedOutSettingsStatus:437,kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,
transactionFlowPaymentSubmitted:460,transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,
ypcPauseFlowSucceeded:190,ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,
ypcFamilyCreateFlowCancelled:259,ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,
accountRegistryChange:226,userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,
musicSideloadedPlaylistServiceCalled:246,embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,
yongleUsbSetup:271,touStrikeInterstitialEvent:272,liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,
notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,
tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,
iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,
mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,
mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,
clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,
mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,
dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,
tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,
tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485,offlineDeleteEvent:486,crossDeviceNotificationTransfer:487,androidIntentEvent:488,unpluggedAmbientInterludesCounterfactualEvent:489,keyPlaysPlayback:490,shortsCreationFallbackEvent:493,vssData:491,castMatch:494,miniAppPerformanceMetrics:495,userFeedbackEvent:496};var rq={},sq=No("ServiceWorkerLogsDatabase",{xb:(rq.SWHealthLog={Cb:1},rq),nc:!0,upgrade:function(a,b){b(1)&&$n(Tn(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function tq(a){return mo(sq(),a)}
function uq(a){var b,c;A(function(d){if(1==d.h)return d.yield(tq(a),2);b=d.i;c=W()-2592E6;return d.yield(Sn(b,["SWHealthLog"],{mode:"readwrite",ia:!0},function(e){return bo(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function vq(a){var b;return A(function(c){if(1==c.h)return c.yield(tq(a),2);b=c.i;return c.yield(b.clear("SWHealthLog"),0)})}
;var wq={},xq=0;function yq(a){var b=new Image,c=""+xq++;wq[c]=b;b.onload=b.onerror=function(){delete wq[c]};
b.src=a}
;function zq(){this.h=new Map;this.i=!1}
function Aq(){if(!zq.h){var a=E("yt.networkRequestMonitor.instance")||new zq;D("yt.networkRequestMonitor.instance",a);zq.h=a}return zq.h}
zq.prototype.requestComplete=function(a,b){b&&(this.i=!0);a=this.removeParams(a);this.h.get(a)||this.h.set(a,b)};
zq.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.h.get(a))?!1:!1===a&&this.i?!0:null};
zq.prototype.removeParams=function(a){return a.split("?")[0]};
zq.prototype.removeParams=zq.prototype.removeParams;zq.prototype.isEndpointCFR=zq.prototype.isEndpointCFR;zq.prototype.requestComplete=zq.prototype.requestComplete;zq.getInstance=Aq;var Bq;function Cq(){Bq||(Bq=new cn("yt.offline"));return Bq}
function Dq(a){if(T("offline_error_handling")){var b=Cq().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Cq().set("errors",b,2592E3,!0)}}
;function Eq(){od.call(this);var a=this;this.j=!1;this.i=vi();this.i.listen("networkstatus-online",function(){if(a.j&&T("offline_error_handling")){var b=Cq().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new V(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;$k(d)}Cq().set("errors",{},2592E3,!0)}}})}
w(Eq,od);function Fq(){if(!Eq.h){var a=E("yt.networkStatusManager.instance")||new Eq;D("yt.networkStatusManager.instance",a);Eq.h=a}return Eq.h}
m=Eq.prototype;m.wa=function(){return this.i.wa()};
m.gb=function(a){this.i.i=a};
m.ge=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Xd=function(){this.j=!0};
m.listen=function(a,b){return this.i.listen(a,b)};
m.mc=function(a){a=ti(this.i,a);a.then(function(b){T("use_cfr_monitor")&&Aq().requestComplete("generate_204",b)});
return a};
Eq.prototype.sendNetworkCheckRequest=Eq.prototype.mc;Eq.prototype.listen=Eq.prototype.listen;Eq.prototype.enableErrorFlushing=Eq.prototype.Xd;Eq.prototype.getWindowStatus=Eq.prototype.ge;Eq.prototype.networkStatusHint=Eq.prototype.gb;Eq.prototype.isNetworkAvailable=Eq.prototype.wa;Eq.getInstance=Fq;function Gq(a){a=void 0===a?{}:a;od.call(this);var b=this;this.i=this.m=0;this.j=Fq();var c=E("yt.networkStatusManager.instance.listen").bind(this.j);c&&(a.rateLimit?(this.rateLimit=a.rateLimit,c("networkstatus-online",function(){Hq(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Hq(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){pd(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){pd(b,"publicytnetworkstatus-offline")})))}
w(Gq,od);Gq.prototype.wa=function(){var a=E("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.j)():!0};
Gq.prototype.gb=function(a){var b=E("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
Gq.prototype.mc=function(a){var b=this,c;return A(function(d){c=E("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return T("skip_network_check_if_cfr")&&Aq().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.gb((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.wa())})):c?d.return(c(a)):d.return(!0)})};
function Hq(a,b){a.rateLimit?a.i?(wi.ra(a.m),a.m=wi.qa(function(){a.l!==b&&(pd(a,b),a.l=b,a.i=W())},a.rateLimit-(W()-a.i))):(pd(a,b),a.l=b,a.i=W()):pd(a,b)}
;var Iq;function Jq(){var a=Wp.call;Iq||(Iq=new Gq({ag:!0,Uf:!0}));a.call(Wp,this,{da:{Sd:oq,nb:nq,hd:kq,te:lq,Pc:mq,set:iq},aa:Iq,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;al(new V(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else $k(b)},
pb:al,sendFn:Kq,now:W,Ld:Dq,Da:bn(),Oc:"publicytnetworkstatus-online",Lc:"publicytnetworkstatus-offline",Zb:!0,Xb:.1,jc:U("potential_esf_error_limit",10),V:T,Fb:!(sm()&&Lq())});this.j=new Mh;T("networkless_immediately_drop_all_requests")&&pq();Ko("LogsDatabaseV2")}
w(Jq,Wp);function Mq(){var a=E("yt.networklessRequestController.instance");a||(a=new Jq,D("yt.networklessRequestController.instance",a),T("networkless_logging")&&zo().then(function(b){a.U=b;Yp(a);a.j.resolve();a.Zb&&Math.random()<=a.Xb&&a.U&&uq(a.U);T("networkless_immediately_drop_sw_health_store")&&Nq(a)}));
return a}
Jq.prototype.writeThenSend=function(a,b){b||(b={});b=Oq(a,b);sm()||(this.h=!1);Wp.prototype.writeThenSend.call(this,a,b)};
Jq.prototype.sendThenWrite=function(a,b,c){b||(b={});b=Oq(a,b);sm()||(this.h=!1);Wp.prototype.sendThenWrite.call(this,a,b,c)};
Jq.prototype.sendAndWrite=function(a,b){b||(b={});b=Oq(a,b);sm()||(this.h=!1);Wp.prototype.sendAndWrite.call(this,a,b)};
Jq.prototype.awaitInitialization=function(){return this.j.promise};
function Nq(a){var b;A(function(c){if(!a.U)throw b=En("clearSWHealthLogsDb"),b;return c.return(vq(a.U).catch(function(d){a.handleError(d)}))})}
function Kq(a,b,c,d){d=void 0===d?!1:d;b=T("web_fp_via_jspb")?Object.assign({},b):b;T("use_cfr_monitor")&&Pq(a,b);if(T("use_request_time_ms_header"))b.headers&&kl(a)&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));else{var e;if(null==(e=b.postParams)?0:e.requestTimeMs)b.postParams.requestTimeMs=Math.round(W())}if(c&&0===Object.keys(b).length){var f=void 0===f?"":f;var g=void 0===g?!1:g;var h=void 0===h?!1:h;if(a)if(f)xl(a,void 0,"POST",f,void 0);else if(R("USE_NET_AJAX_FOR_PING_TRANSPORT",
!1)||h)xl(a,void 0,"GET","",void 0,void 0,g,h);else{b:{try{var k=new bb({url:a});if(k.j&&k.i||k.l){var l=ac(bc(5,a)),n;if(!(n=!l||!l.endsWith("/aclk"))){var p=a.search(kc),r=jc(a,0,"ri",p);if(0>r)var t=null;else{var x=a.indexOf("&",r);if(0>x||x>p)x=p;t=decodeURIComponent(a.slice(r+3,-1!==x?x:0).replace(/\+/g," "))}n="1"!==t}var z=!n;break b}}catch(J){}z=!1}if(z){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var y=!0;break b}}catch(J){}y=!1}c=y?!0:!1}else c=
!1;c||yq(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Lp(a,b.postBody,b,Bl,d)):Lp(a,JSON.stringify(b.postParams),b,Al,d):Bl(a,b)}
function Oq(a,b){T("use_event_time_ms_header")&&kl(a)&&(b.headers||(b.headers={}),b.headers["X-Goog-Event-Time"]=JSON.stringify(Math.round(W())));return b}
function Pq(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Aq().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Aq().requestComplete(a,!0);d(e,f)}}
function Lq(){return"www.youtube-nocookie.com"!==cc(document.location.toString())}
;var Qq=!1,Rq=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:Qq};D("ytNetworklessLoggingInitializationOptions",Rq);function Sq(){var a;A(function(b){if(1==b.h)return b.yield(zo(),2);a=b.i;if(!a||!sm()&&!T("nwl_init_require_datasync_id_killswitch")||!Lq())return b.B(0);Qq=!0;Rq.isNwlInitialized=Qq;return b.yield(Mq().awaitInitialization(),0)})}
;function Tq(a){var b=this;this.config_=null;a?this.config_=a:ap()&&(this.config_=bp());wm(function(){Up(b)},5E3)}
Tq.prototype.isReady=function(){!this.config_&&ap()&&(this.config_=bp());return!!this.config_};
function Vp(a,b,c,d){function e(x){x=void 0===x?!1:x;var z;if(d.retry&&"www.youtube-nocookie.com"!=h&&(x||T("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(z=Sp(b,c,l,k)),z)){var y=g.onSuccess,J=g.onFetchSuccess;g.onSuccess=function(P,ea){Tp(z);y(P,ea)};
c.onFetchSuccess=function(P,ea){Tp(z);J(P,ea)}}try{if(x&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Mq().writeThenSend(t,g):Mq().sendAndWrite(t,g);
else if(d.compress){var G=!d.networklessOptions.writeThenSend;if(g.postBody){var M=g.postBody;"string"!==typeof M&&(M=JSON.stringify(g.postBody));Lp(t,M,g,Bl,G)}else Lp(t,JSON.stringify(g.postParams),g,Al,G)}else T("web_all_payloads_via_jspb")?Bl(t,g):Al(t,g)}catch(P){if("InvalidAccessError"===P.name)z&&(Tp(z),z=0),al(Error("An extension is blocking network request."));else throw P;}z&&wm(function(){Up(a)},5E3)}
!R("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&al(new V("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new V("innertube xhrclient not ready",b,c,d);$k(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(x,z){if(d.onSuccess)d.onSuccess(z)},
onFetchSuccess:function(x){if(d.onSuccess)d.onSuccess(x)},
onError:function(x,z){if(d.onError)d.onError(z)},
onFetchError:function(x){if(d.onError)d.onError(x)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.oe)&&(h=f);var k=a.config_.qe||!1,l=dp(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},r=a.config_.pe&&f;r=r&&f.startsWith("Bearer");r||(p.key=a.config_.innertubeApiKey);var t=jl(""+h+n,p||{},!0);(E("ytNetworklessLoggingInitializationOptions")?
Rq.isNwlInitialized:Qq)?xo().then(function(x){e(x)}):e(!1)}
;var Uq=0,Vq=Hc?"webkit":Gc?"moz":Ec?"ms":Dc?"o":"";D("ytDomDomGetNextId",E("ytDomDomGetNextId")||function(){return++Uq});var Wq={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Xq(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Wq||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function Yq(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
Xq.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Xq.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Xq.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var ob=C.ytEventsEventsListeners||{};D("ytEventsEventsListeners",ob);var Zq=C.ytEventsEventsCounter||{count:0};D("ytEventsEventsCounter",Zq);
function $q(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return nb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Qa(e[4])&&Qa(d)&&sb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var ar=db(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function br(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=$q(a,b,c,d);if(e)return e;e=++Zq.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Xq(h);if(!yd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Xq(h);
h.currentTarget=a;return c.call(a,h)};
g=Zk(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),ar()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);ob[e]=[a,b,c,g,d];return e}
function cr(a){a&&("string"==typeof a&&(a=[a]),fb(a,function(b){if(b in ob){var c=ob[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?ar()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete ob[b]}}))}
;function dr(a){this.D=a;this.h=null;this.l=0;this.A=null;this.m=0;this.i=[];for(a=0;4>a;a++)this.i.push(0);this.j=0;this.T=br(window,"mousemove",Wa(this.X,this));a=Wa(this.P,this);"function"===typeof a&&(a=Zk(a));this.ba=window.setInterval(a,25)}
Za(dr,H);dr.prototype.X=function(a){void 0===a.h&&Yq(a);var b=a.h;void 0===a.i&&Yq(a);this.h=new ud(b,a.i)};
dr.prototype.P=function(){if(this.h){var a=W();if(0!=this.l){var b=this.A,c=this.h,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.l);this.i[this.j]=.5<Math.abs((d-this.m)/this.m)?1:0;for(c=b=0;4>c;c++)b+=this.i[c]||0;3<=b&&this.D();this.m=d}this.l=a;this.A=this.h;this.j=(this.j+1)%4}};
dr.prototype.S=function(){window.clearInterval(this.ba);cr(this.T)};var er={};
function fr(a){var b=void 0===a?{}:a;a=void 0===b.De?!1:b.De;b=void 0===b.Yd?!0:b.Yd;if(null==E("_lact",window)){var c=parseInt(R("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;D("_lact",c,window);D("_fact",c,window);-1==c&&gr();br(document,"keydown",gr);br(document,"keyup",gr);br(document,"mousedown",gr);br(document,"mouseup",gr);a?br(window,"touchmove",function(){kr("touchmove",200)},{passive:!0}):(br(window,"resize",function(){kr("resize",200)}),b&&br(window,"scroll",function(){kr("scroll",200)}));
new dr(function(){kr("mouse",100)});
br(document,"touchstart",gr,{passive:!0});br(document,"touchend",gr,{passive:!0})}}
function kr(a,b){er[a]||(er[a]=!0,wi.qa(function(){gr();er[a]=!1},b))}
function gr(){null==E("_lact",window)&&fr();var a=Date.now();D("_lact",a,window);-1==E("_fact",window)&&D("_fact",a,window);(a=E("ytglobal.ytUtilActivityCallback_"))&&a()}
function lr(){var a=E("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var mr=C.ytPubsubPubsubInstance||new L,nr=C.ytPubsubPubsubSubscribedKeys||{},or=C.ytPubsubPubsubTopicToKeys||{},pr=C.ytPubsubPubsubIsSynchronous||{};function qr(a,b){var c=rr();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){nr[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{pr[a]?f():sl(f,0)}catch(g){$k(g)}},void 0);
nr[d]=!0;or[a]||(or[a]=[]);or[a].push(d);return d}return 0}
function sr(a){var b=rr();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),fb(a,function(c){b.unsubscribeByKey(c);delete nr[c]}))}
function tr(a,b){var c=rr();c&&c.publish.apply(c,arguments)}
function ur(a){var b=rr();if(b)if(b.clear(a),a)vr(a);else for(var c in or)vr(c)}
function rr(){return C.ytPubsubPubsubInstance}
function vr(a){or[a]&&(a=or[a],fb(a,function(b){nr[b]&&delete nr[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.Ab;L.prototype.publish=L.prototype.Ya;L.prototype.clear=L.prototype.clear;D("ytPubsubPubsubInstance",mr);D("ytPubsubPubsubTopicToKeys",or);D("ytPubsubPubsubIsSynchronous",pr);D("ytPubsubPubsubSubscribedKeys",nr);var wr=Symbol("injectionDeps");function xr(a){this.name=a}
xr.prototype.toString=function(){return"InjectionToken("+this.name+")"};
function yr(a){this.key=a}
function zr(){this.i=new Map;this.j=new Map;this.h=new Map}
function Ar(a,b){a.i.set(b.lc,b);var c=a.j.get(b.lc);c&&c.ig(a.resolve(b.lc))}
zr.prototype.resolve=function(a){return a instanceof yr?Br(this,a.key,[],!0):Br(this,a,[])};
function Br(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.h.has(b))return a.h.get(b);if(!a.i.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.i.get(b);c.push(b);if(void 0!==d.Id)var e=d.Id;else if(d.hf)e=d[wr]?Cr(a,d[wr],c):[],e=d.hf.apply(d,oa(e));else if(d.Hd){e=d.Hd;var f=e[wr]?Cr(a,e[wr],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(oa(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.mg||a.h.set(b,e);return e}
function Cr(a,b,c){return b?b.map(function(d){return d instanceof yr?Br(a,d.key,c,!0):Br(a,d,c)}):[]}
;var Dr;function Er(){Dr||(Dr=new zr);return Dr}
;var Fr=window;function Gr(){var a,b;return"h5vcc"in Fr&&(null==(a=Fr.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=Fr.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in Fr&&Fr.performance.mark&&Fr.performance.measure?2:0}
function Hr(a){switch(Gr()){case 1:Fr.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:Fr.performance.mark(a+"-start");break;case 0:break;default:di()}}
function Ir(a){switch(Gr()){case 1:Fr.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";Fr.performance.mark(c);Fr.performance.measure(a,b,c);break;case 0:break;default:di()}}
;var Jr=T("web_enable_lifecycle_monitoring")&&0!==Gr(),Kr=T("web_enable_lifecycle_monitoring");function Lr(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?bn():d;this.j=c;this.scheduler=d;this.i=new Mh;this.h=a;for(a={cb:0};a.cb<this.h.length;a={ic:void 0,cb:a.cb},a.cb++)a.ic=this.h[a.cb],c=function(e){return function(){e.ic.Ec();b.h[e.cb].kc=!0;b.h.every(function(f){return!0===f.kc})&&b.i.resolve()}}(a),d=this.getPriority(a.ic),d=this.scheduler.ab(c,d),this.h[a.cb]=Object.assign({},a.ic,{Ec:c,
jobId:d})}
function Mr(a){var b=Array.from(a.h.keys()).sort(function(d,e){return a.getPriority(a.h[e])-a.getPriority(a.h[d])});
b=v(b);for(var c=b.next();!c.done;c=b.next())c=a.h[c.value],void 0===c.jobId||c.kc||(a.scheduler.ra(c.jobId),a.scheduler.ab(c.Ec,10))}
Lr.prototype.cancel=function(){for(var a=v(this.h),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.kc||this.scheduler.ra(b.jobId),b.kc=!0;this.i.resolve()};
Lr.prototype.getPriority=function(a){var b;return null!=(b=a.priority)?b:this.j};function Nr(a){this.state=a;this.plugins=[];this.l=void 0;this.A={};Jr&&Hr(this.state)}
m=Nr.prototype;m.install=function(a){this.plugins.push(a);return this};
m.uninstall=function(){var a=this;B.apply(0,arguments).forEach(function(b){b=a.plugins.indexOf(b);-1<b&&a.plugins.splice(b,1)})};
m.transition=function(a,b){var c=this;Jr&&Ir(this.state);var d=this.transitions.find(function(f){return Array.isArray(f.from)?f.from.find(function(g){return g===c.state&&f.to===a}):f.from===c.state&&f.to===a});
if(d){this.j&&(Mr(this.j),this.j=void 0);Or(this,a,b);this.state=a;Jr&&Hr(this.state);d=d.action.bind(this);var e=this.plugins.filter(function(f){return f[a]}).map(function(f){return f[a]});
d(Pr(this,e),b)}else throw Error("no transition specified from "+this.state+" to "+a);};
function Pr(a,b){var c=b.filter(function(e){return 10===Qr(a,e)}),d=b.filter(function(e){return 10!==Qr(a,e)});
return a.A.lg?function(){var e=B.apply(0,arguments);return A(function(f){if(1==f.h)return f.yield(a.Le.apply(a,[c].concat(oa(e))),2);a.Cd.apply(a,[d].concat(oa(e)));f.h=0})}:function(){var e=B.apply(0,arguments);
a.Me.apply(a,[c].concat(oa(e)));a.Cd.apply(a,[d].concat(oa(e)))}}
m.Me=function(a){for(var b=B.apply(1,arguments),c=bn(),d=v(a),e=d.next(),f={};!e.done;f={Hb:void 0},e=d.next())f.Hb=e.value,c.Bb(function(g){return function(){Rr(g.Hb.name);g.Hb.callback.apply(g.Hb,oa(b));Sr(g.Hb.name)}}(f))};
m.Le=function(a){var b=B.apply(1,arguments),c,d,e,f,g;return A(function(h){1==h.h&&(c=bn(),d=v(a),e=d.next(),f={});if(3!=h.h){if(e.done)return h.B(0);f.tb=e.value;f.Sb=void 0;g=function(k){return function(){Rr(k.tb.name);var l=k.tb.callback.apply(k.tb,oa(b));"function"===typeof(null==l?void 0:l.then)?k.Sb=l.then(function(){Sr(k.tb.name)}):Sr(k.tb.name)}}(f);
c.Bb(g);return f.Sb?h.yield(f.Sb,3):h.B(3)}f={tb:void 0,Sb:void 0};e=d.next();return h.B(2)})};
m.Cd=function(a){var b=B.apply(1,arguments),c=this,d=a.map(function(e){return{Ec:function(){Rr(e.name);e.callback.apply(e,oa(b));Sr(e.name)},
priority:Qr(c,e)}});
d.length&&(this.j=new Lr(d))};
function Qr(a,b){var c,d;return null!=(d=null!=(c=a.l)?c:b.priority)?d:0}
function Rr(a){Jr&&a&&Hr(a)}
function Sr(a){Jr&&a&&Ir(a)}
function Or(a,b,c){Kr&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to '"+b+"'"),console.log("with message: ",c),console.groupEnd())}
ha.Object.defineProperties(Nr.prototype,{currentState:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function Tr(a){Nr.call(this,void 0===a?"none":a);this.h=null;this.l=10;this.transitions=[{from:"none",to:"application_navigating",action:this.i},{from:"application_navigating",to:"none",action:this.v},{from:"application_navigating",to:"application_navigating",action:function(){}},
{from:"none",to:"none",action:function(){}}]}
var Ur;w(Tr,Nr);Tr.prototype.i=function(a,b){var c=this;this.h=wm(function(){"application_navigating"===c.currentState&&c.transition("none")},5E3);
a(null==b?void 0:b.event)};
Tr.prototype.v=function(a,b){this.h&&(wi.ra(this.h),this.h=null);a(null==b?void 0:b.event)};
function Vr(){Ur||(Ur=new Tr);return Ur}
;var Wr=[];D("yt.logging.transport.getScrapedGelPayloads",function(){return Wr});function Xr(){this.store={};this.h={}}
Xr.prototype.storePayload=function(a,b){a=Yr(a);this.store[a]?this.store[a].push(b):(this.h={},this.store[a]=[b]);return a};
Xr.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=Zr(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,oa(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,oa(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,oa(this.smartExtractMatchingEntries(a))));return c};
Xr.prototype.extractMatchingEntries=function(a){a=Zr(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,oa(this.store[a[c]])),delete this.store[a[c]]);return b};
Xr.prototype.getSequenceCount=function(a){a=Zr(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function Zr(a,b){var c=Yr(b);if(a.h[c])return a.h[c];var d=Object.keys(a.store)||[];if(1>=d.length&&Yr(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if($r(b.auth,g[0])){var h=b.isJspb;$r(void 0===h?"undefined":h?"true":"false",g[1])&&$r(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),$r(h,g[3])&&e.push(d[f]))}}return a.h[c]=e}
function $r(a,b){return void 0===a||"undefined"===a?!0:a===b}
Xr.prototype.getSequenceCount=Xr.prototype.getSequenceCount;Xr.prototype.extractMatchingEntries=Xr.prototype.extractMatchingEntries;Xr.prototype.smartExtractMatchingEntries=Xr.prototype.smartExtractMatchingEntries;Xr.prototype.storePayload=Xr.prototype.storePayload;function Yr(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;function as(a,b){if(a)return a[b.name]}
;var bs=U("initial_gel_batch_timeout",2E3),cs=U("gel_queue_timeout_max_ms",6E4),ds=Math.pow(2,16)-1,es=U("gel_min_batch_size",5),gs=void 0,hs=null;function is(){this.l=this.h=this.i=0;this.j=!1}
var js=new is,ks=new is,ls=new is,ms=new is,ns,ps=!0,qs=C.ytLoggingTransportTokensToCttTargetIds_||{};D("ytLoggingTransportTokensToCttTargetIds_",qs);var rs={};function ss(){var a=E("yt.logging.ims");a||(a=new Xr,D("yt.logging.ims",a));return a}
function ts(a,b){if("log_event"===a.endpoint){us();var c=vs(a),d=ws(a.payload)||"";a:{if(T("enable_web_tiered_gel")){var e=qq[d||""];var f,g,h,k=null==Er().resolve(new yr(Wo))?void 0:null==(f=Xo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.eventLoggingConfig)?void 0:h.payloadPolicies;if(k)for(f=0;f<k.length;f++)if(k[f].payloadNumber===e){e=k[f];break a}}e=void 0}k=200;if(e){if(!1===e.enabled&&!T("web_payload_policy_disabled_killswitch"))return;k=xs(e.tier);if(400===k){ys(a,b);return}}rs[c]=
!0;e={cttAuthInfo:c,isJspb:!1,tier:k};ss().storePayload(e,a.payload);zs(b,c,e,"gelDebuggingEvent"===d)}}
function zs(a,b,c,d){function e(){As({writeThenSend:!0},T("flush_only_full_queue")?b:void 0,f,c.tier)}
var f=!1;f=void 0===f?!1:f;d=void 0===d?!1:d;T("web_enable_cached_it_client")&&a&&a!==hs?(gs=new a,hs=a):!T("web_enable_cached_it_client")&&a&&(gs=new a);a=U("tvhtml5_logging_max_batch_ads_fork")||U("web_logging_max_batch")||100;var g=W(),h=Bs(f,c.tier),k=h.l;d&&(h.j=!0);d=0;c&&(d=ss().getSequenceCount(c));1E3<=d?e():d>=a?ns||(ns=Cs(function(){e();ns=void 0},0)):10<=g-k&&(Ds(f,c.tier),h.l=g)}
function ys(a,b){if("log_event"===a.endpoint){us();var c=vs(a),d=new Map;d.set(c,[a.payload]);var e=ws(a.payload)||"";b&&(gs=new b);return new Ld(function(f,g){gs&&gs.isReady()?Es(d,gs,f,g,{bypassNetworkless:!0},!0,"gelDebuggingEvent"===e):f()})}}
function vs(a){var b="";if(a.dangerousLogToVisitorSession)b="visitorOnlyApprovedKey";else if(a.cttAuthInfo){b=a.cttAuthInfo;var c={};b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId);qs[a.cttAuthInfo.token]=c;b=a.cttAuthInfo.token}return b}
function As(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new Ld(function(e,f){var g=Bs(c,d),h=g.j;g.j=!1;Fs(g.i);Fs(g.h);g.h=0;gs&&gs.isReady()?void 0===d&&T("enable_web_tiered_gel")?Gs(e,f,a,b,c,300,h):Gs(e,f,a,b,c,d,h):(Ds(c,d),e())})}
function Gs(a,b,c,d,e,f,g){var h=gs;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l={isJspb:e,cttAuthInfo:d,tier:f};e={isJspb:e,cttAuthInfo:d};if(void 0!==d)f=T("enable_web_tiered_gel")?ss().smartExtractMatchingEntries({keys:[l,e],sizeLimit:1E3}):ss().extractMatchingEntries(e),k.set(d,f);else for(d=v(Object.keys(rs)),l=d.next();!l.done;l=d.next())l=l.value,e=T("enable_web_tiered_gel")?ss().smartExtractMatchingEntries({keys:[{isJspb:!1,cttAuthInfo:l,tier:f},
{isJspb:!1,cttAuthInfo:l}],sizeLimit:1E3}):ss().extractMatchingEntries({isJspb:!1,cttAuthInfo:l}),0<e.length&&k.set(l,e),(T("web_fp_via_jspb_and_json")&&c.writeThenSend||!T("web_fp_via_jspb_and_json"))&&delete rs[l];Es(k,h,a,b,c,!1,g)}
function Ds(a,b){function c(){As({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=Bs(a,b),e=d===ms||d===ls?5E3:cs;T("web_gel_timeout_cap")&&!d.h&&(e=Cs(function(){c()},e),d.h=e);
Fs(d.i);e=R("LOGGING_BATCH_TIMEOUT",U("web_gel_debounce_ms",1E4));T("shorten_initial_gel_batch_timeout")&&ps&&(e=bs);e=Cs(function(){0<U("gel_min_batch_size")?ss().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=es&&c():c()},e);
d.i=e}
function Es(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(W()),k=a.size,l=(void 0===g?0:g)&&T("vss_through_gel_video_stats")?"video_stats":"log_event";a=v(a);var n=a.next();for(g={};!n.done;g={Kc:void 0,batchRequest:void 0,dangerousLogToVisitorSession:void 0,Nc:void 0,Mc:void 0},n=a.next()){var p=v(n.value);n=p.next().value;p=p.next().value;g.batchRequest=ub({context:cp(b.config_||bp())});if(!Pa(p)&&!T("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=p;(p=qs[n])&&
Hs(g.batchRequest,n,p);delete qs[n];g.dangerousLogToVisitorSession="visitorOnlyApprovedKey"===n;Is(g.batchRequest,h,g.dangerousLogToVisitorSession);T("always_send_and_write")&&(e.writeThenSend=!1);g.Nc=function(r){T("start_client_gcf")&&wi.qa(function(){return A(function(t){return t.yield(Js(r),0)})});
k--;k||c()};
g.Kc=0;g.Mc=function(r){return function(){r.Kc++;if(e.bypassNetworkless&&1===r.Kc)try{Vp(b,l,r.batchRequest,Ks({writeThenSend:!0},r.dangerousLogToVisitorSession,r.Nc,r.Mc,f)),ps=!1}catch(t){$k(t),d()}k--;k||c()}}(g);
try{Vp(b,l,g.batchRequest,Ks(e,g.dangerousLogToVisitorSession,g.Nc,g.Mc,f)),ps=!1}catch(r){$k(r),d()}}}
function Ks(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,Rf:!!e,headers:{},postBodyFormat:"",postBody:"",compress:T("compress_gel")||T("compress_gel_lr")};Ls()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(W())));return a}
function Is(a,b,c){Ls()||(a.requestTimeMs=String(b));T("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=R("EVENT_ID"))&&((c=R("BATCH_CLIENT_COUNTER")||0)||(c=Math.floor(Math.random()*ds/2)),c++,c>ds&&(c=1),Vk("BATCH_CLIENT_COUNTER",c),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function Hs(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function us(){var a;(a=E("yt.logging.transport.enableScrapingForTest"))||(a=nl("il_payload_scraping"),a="enable_il_payload_scraping"!==(void 0!==a?String(a):""));a||(Wr=[],D("yt.logging.transport.enableScrapingForTest",!0),D("yt.logging.transport.scrapedPayloadsForTesting",Wr),D("yt.logging.transport.payloadToScrape","visualElementShown visualElementHidden visualElementAttached screenCreated visualElementGestured visualElementStateChanged".split(" ")),D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction"),
D("yt.logging.transport.scrapeClientEvent",!0))}
function Ls(){return T("use_request_time_ms_header")||T("lr_use_request_time_ms_header")}
function Cs(a,b){return!1===T("embeds_transport_use_scheduler")?sl(a,b):T("logging_avoid_blocking_during_navigation")||T("lr_logging_avoid_blocking_during_navigation")?wm(function(){if("none"===Vr().currentState)a();else{var c={};Vr().install((c.none={callback:a},c))}},b):wm(a,b)}
function Fs(a){T("transport_use_scheduler")?wi.ra(a):window.clearTimeout(a)}
function Js(a){var b,c,d,e,f,g,h,k,l,n;return A(function(p){return 1==p.h?(d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup,e=as(d,Ak),g=null==(f=d)?void 0:f.hotHashData,h=as(d,zk),l=null==(k=d)?void 0:k.coldHashData,(n=Er().resolve(new yr(Wo)))?g?e?p.yield(Yo(n,g,e),2):p.yield(Yo(n,g),2):p.B(2):p.return()):l?h?p.yield(Zo(n,l,h),0):p.yield(Zo(n,l),0):p.B(0)})}
function Bs(a,b){b=void 0===b?200:b;return a?300===b?ms:ks:300===b?ls:js}
function ws(a){a=Object.keys(a);a=v(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,qq[b])return b}
function xs(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
;var Ms=C.ytLoggingGelSequenceIdObj_||{};D("ytLoggingGelSequenceIdObj_",Ms);
function Ns(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||W());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=lr();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!T("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,Ms[b]=b in Ms?Ms[b]+1:0,a.sequence={index:Ms[b],groupKey:b},d.endOfSequence&&delete Ms[d.sequenceGroup]);(d.sendIsolatedPayload?ys:ts)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
;function mn(a,b,c){c=void 0===c?{}:c;var d=Tq;R("ytLoggingEventsDefaultDisabled",!1)&&Tq===Tq&&(d=null);T("web_all_payloads_via_jspb")&&!c.timestamp&&(c.lact=lr(),c.timestamp=W());Ns(a,b,d,c)}
;D("ytLoggingGelSequenceIdObj_",C.ytLoggingGelSequenceIdObj_||{});var Os=new Set,Ps=0,Qs=0,Rs=0,Ss=[],Ts=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function ln(a){Us(a)}
function Vs(a){Us(a,"WARNING")}
function Ws(a){a instanceof Error?Us(a):(a=Qa(a)?JSON.stringify(a):String(a),a=new V(a),a.name="RejectedPromiseError",Vs(a))}
function Us(a,b,c,d,e,f,g,h){f=void 0===f?{}:f;f.name=c||R("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||R("INNERTUBE_CONTEXT_CLIENT_VERSION");c=f;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;b=void 0===b?"ERROR":b;g=void 0===g?!1:g;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),T("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+
JSON.stringify(a.args)),d.push("File name: "+a.fileName),d.push("Stacktrace: "+a.stack),d=d.join("\n"),window.console.log(d,a)),!(5<=Ps))){d=Ss;var k=vc(a);e=k.message||"Unknown Error";f=k.name||"UnknownError";var l=k.stack||a.i||"Not available";if(l.startsWith(f+": "+e)){var n=l.split("\n");n.shift();l=n.join("\n")}n=k.lineNumber||"Not available";k=k.fileName||"Not available";var p=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var r=0;r<a.args.length&&!(p=Tl(a.args[r],"params."+r,c,p),
500<=p);r++);else if(a.hasOwnProperty("params")&&a.params){var t=a.params;if("object"===typeof a.params)for(r in t){if(t[r]){var x="params."+r,z=Vl(t[r]);c[x]=z;p+=x.length+z.length;if(500<p)break}}else c.params=Vl(t)}if(d.length)for(r=0;r<d.length&&!(p=Tl(d[r],"params.context."+r,c,p),500<=p);r++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);r={message:e,name:f,lineNumber:n,fileName:k,stack:l,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(r.lineNumber=
r.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=Pl();c=v(a.Ta);for(d=c.next();!d.done;d=c.next())if(d=d.value,r.message&&r.message.match(d.cg)){a=d.weight;break a}a=v(a.Qa);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.callback(r)){a=c.weight;break a}a=1}r.sampleWeight=a;a=v(Kl);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.hc[r.name])for(e=v(c.hc[r.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=r.message.match(f.regexp)){r.params["params.error.original"]=d[0];e=f.groups;f={};
for(n=0;n<e.length;n++)f[e[n]]=d[n+1],r.params["params.error."+e[n]]=d[n+1];r.message=c.Ic(f);break}r.params||(r.params={});a=Pl();r.params["params.errorServiceSignature"]="msg="+a.Ta.length+"&cb="+a.Qa.length;r.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(r.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));Bb("sample").constructor!==zb&&(r.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(r);
if(0!==r.sampleWeight&&!Os.has(r.message)){if(g&&T("web_enable_error_204"))Xs(void 0===b?"ERROR":b,r);else{b=void 0===b?"ERROR":b;"ERROR"===b?(Ql.Ya("handleError",r),T("record_app_crashed_web")&&0===Rs&&1===r.sampleWeight&&(Rs++,g={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},T("report_client_error_with_app_crash_ks")||(g.systemHealth={crashData:{clientError:{logMessage:{message:r.message}}}}),mn("appCrashed",g)),Qs++):"WARNING"===b&&Ql.Ya("handleWarning",r);if(T("kevlar_gel_error_routing")){g=b;h=void 0===
h?{}:h;b:{a=v(Ts);for(c=a.next();!c.done;c=a.next())if(sn(c.value.toLowerCase())){a=!0;break b}a=!1}if(a)h=void 0;else{c={stackTrace:r.stack};r.fileName&&(c.filename=r.fileName);a=r.lineNumber&&r.lineNumber.split?r.lineNumber.split(":"):[];0!==a.length&&(1!==a.length||isNaN(Number(a[0]))?2!==a.length||isNaN(Number(a[0]))||isNaN(Number(a[1]))||(c.lineNumber=Number(a[0]),c.columnNumber=Number(a[1])):c.lineNumber=Number(a[0]));a={level:"ERROR_LEVEL_UNKNOWN",message:r.message,errorClassName:r.name,sampleWeight:r.sampleWeight};
"ERROR"===g?a.level="ERROR_LEVEL_ERROR":"WARNING"===g&&(a.level="ERROR_LEVEL_WARNNING");c={isObfuscated:!0,browserStackInfo:c};h.pageUrl=window.location.href;h.kvPairs=[];R("FEXP_EXPERIMENTS")&&(h.experimentIds=R("FEXP_EXPERIMENTS"));d=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS");if(!Wk("web_disable_gel_stp_ecatcher_killswitch")&&d)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=f.value,h.kvPairs.push({key:f,value:String(d[f])});if(d=r.params)for(e=v(Object.keys(d)),f=e.next();!f.done;f=e.next())f=
f.value,h.kvPairs.push({key:"client."+f,value:String(d[f])});d=R("SERVER_NAME");e=R("SERVER_VERSION");d&&e&&(h.kvPairs.push({key:"server.name",value:d}),h.kvPairs.push({key:"server.version",value:e}));h={errorMetadata:h,stackTrace:c,logMessage:a}}h&&(mn("clientError",h),("ERROR"===g||T("errors_flush_gel_always_killswitch"))&&As(void 0,void 0,!1))}T("suppress_error_204_logging")||Xs(b,r)}try{Os.add(r.message)}catch(y){}Ps++}}}
function Xs(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:R("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=v(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=R("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=v(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=R("SERVER_NAME");b=R("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Bl(R("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Ys(){this.register=new Map}
function Zs(a){a=v(a.register.values());for(var b=a.next();!b.done;b=a.next())b.value.gg("ABORTED")}
Ys.prototype.clear=function(){Zs(this);this.register.clear()};
var $s=new Ys;var at=Date.now().toString();function bt(){for(var a=Array(16),b=0;16>b;b++){for(var c=Date.now(),d=0;d<c%23;d++)a[b]=Math.random();a[b]=Math.floor(256*Math.random())}if(at)for(b=1,c=0;c<at.length;c++)a[b%16]=a[b%16]^a[(b-1)%16]/4^at.charCodeAt(c),b++;return a}
function ct(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=bt()}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));return a.join("")}
;var dt,et=C.ytLoggingDocDocumentNonce_;et||(et=ct(),D("ytLoggingDocDocumentNonce_",et));dt=et;function ft(a){this.h=a}
m=ft.prototype;m.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);this.h.isCounterfactual&&(a.isCounterfactual=!0);return a};
m.getAsJspb=function(){var a=new Hk;void 0!==this.h.trackingParams?a.setTrackingParams(this.h.trackingParams):(void 0!==this.h.veType&&Pf(a,2,sf(this.h.veType)),void 0!==this.h.veCounter&&Pf(a,6,sf(this.h.veCounter)),void 0!==this.h.elementIndex&&Pf(a,3,sf(this.h.elementIndex)),this.h.isCounterfactual&&Pf(a,5,pf(!0)));if(void 0!==this.h.dataElement){var b=this.h.dataElement.getAsJspb();Xf(a,Hk,7,b)}void 0!==this.h.youtubeData&&Xf(a,Bk,8,this.h.jspbYoutubeData);return a};
m.toString=function(){return JSON.stringify(this.getAsJson())};
m.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};
m.getLoggingDirectives=function(){return this.h.loggingDirectives};function gt(a){return R("client-screen-nonce-store",{})[void 0===a?0:a]}
function ht(a,b){b=void 0===b?0:b;var c=R("client-screen-nonce-store");c||(c={},Vk("client-screen-nonce-store",c));c[b]=a}
function jt(a){a=void 0===a?0:a;return 0===a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function kt(a){return R(jt(void 0===a?0:a))}
D("yt_logging_screen.getRootVeType",kt);function lt(){var a=R("csn-to-ctt-auth-info");a||(a={},Vk("csn-to-ctt-auth-info",a));return a}
function mt(){return Object.values(R("client-screen-nonce-store",{})).filter(function(a){return void 0!==a})}
function nt(a){a=gt(void 0===a?0:a);if(!a&&!R("USE_CSN_FALLBACK",!0))return null;a||(a="UNDEFINED_CSN");return a?a:null}
D("yt_logging_screen.getCurrentCsn",nt);function ot(a,b,c){var d=lt();(c=nt(c))&&delete d[c];b&&(d[a]=b)}
function pt(a){return lt()[a]}
D("yt_logging_screen.getCttAuthInfo",pt);D("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==gt(c)||b!==R(jt(c)))if(ot(a,d,c),ht(a,c),Vk(jt(c),b),b=function(){setTimeout(function(){a&&mn("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:dt,clientScreenNonce:a})},0)},"requestAnimationFrame"in window)try{window.requestAnimationFrame(b)}catch(e){b()}else b()});var qt=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};D("yt.msgs_",qt);function rt(a){Qk(qt,arguments)}
;function st(){var a=tb(tt),b;return(new Ld(function(c,d){a.onSuccess=function(e){rl(e)?c(new ut(e)):d(new vt("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new vt("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new vt("Request timed out","net.timeout",e))};
b=Bl("//googleads.g.doubleclick.net/pagead/id",a)})).oc(function(c){if(c instanceof Sd){var d;
null==(d=b)||d.abort()}return Qd(c)})}
function vt(a,b,c){ab.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
w(vt,ab);function ut(a){this.xhr=a}
;function wt(){this.h=0;this.i=null}
wt.prototype.then=function(a,b,c){return 1===this.h&&a?(a=a.call(c,this.i))&&"function"===typeof a.then?a:xt(a):2===this.h&&b?(a=b.call(c,this.i))&&"function"===typeof a.then?a:zt(a):this};
wt.prototype.getValue=function(){return this.i};
wt.prototype.isRejected=function(){return 2==this.h};
wt.prototype.$goog_Thenable=!0;function zt(a){var b=new wt;a=void 0===a?null:a;b.h=2;b.i=void 0===a?null:a;return b}
function xt(a){var b=new wt;a=void 0===a?null:a;b.h=1;b.i=void 0===a?null:a;return b}
;function At(a,b){var c=void 0===c?{}:c;a={method:void 0===b?"POST":b,mode:kl(a)?"same-origin":"cors",credentials:kl(a)?"same-origin":"include"};b={};for(var d=v(Object.keys(c)),e=d.next();!e.done;e=d.next())e=e.value,c[e]&&(b[e]=c[e]);0<Object.keys(b).length&&(a.headers=b);return a}
;function Bt(){return xg()||(se||te)&&sn("applewebkit")&&!sn("version")&&(!sn("safari")||sn("gsa/"))||Ic&&sn("version/")?!0:R("EOM_VISITOR_DATA")?!1:!0}
;function Ct(a){a:{var b="EMBEDDED_PLAYER_MODE_UNKNOWN";window.location.hostname.includes("youtubeeducation.com")&&(b="EMBEDDED_PLAYER_MODE_PFL");var c=a.raw_embedded_player_response;if(!c&&(a=a.embedded_player_response))try{c=JSON.parse(a)}catch(e){break a}if(c)b:for(var d in Fk)if(Fk[d]==c.embeddedPlayerMode){b=Fk[d];break b}}return"EMBEDDED_PLAYER_MODE_PFL"===b}
;function Dt(a){ab.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Et;this.isTimeout=a instanceof vt&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Sd}
w(Dt,ab);Dt.prototype.name="BiscottiError";function Et(){ab.call(this,"Biscotti ID is missing from server")}
w(Et,ab);Et.prototype.name="BiscottiMissingError";var tt={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Ft=null;function Gt(){if(T("disable_biscotti_fetch_entirely_for_all_web_clients"))return Error("Biscotti id fetching has been disabled entirely.");if(!Bt())return Error("User has not consented - not fetching biscotti id.");var a=R("PLAYER_VARS",{});if("1"==rb(a))return Error("Biscotti ID is not available in private embed mode");if(Ct(a))return Error("Biscotti id fetching has been disabled for pfl.")}
function Ok(){var a=Gt();if(void 0!==a)return Qd(a);Ft||(Ft=st().then(Ht).oc(function(b){return It(2,b)}));
return Ft}
function Ht(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Et;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Et;a=a.id;Pk(a);Ft=xt(a);Jt(18E5,2);return a}
function It(a,b){b=new Dt(b);Pk("");Ft=zt(b);0<a&&Jt(12E4,a-1);throw b;}
function Jt(a,b){sl(function(){st().then(Ht,function(c){return It(b,c)}).oc(cb)},a)}
function Kt(){try{var a=E("yt.ads.biscotti.getId_");return a?a():Ok()}catch(b){return Qd(b)}}
;function Lt(a){if("1"!=rb(R("PLAYER_VARS",{}))){a&&Nk();try{Kt().then(function(){},function(){}),sl(Lt,18E5)}catch(b){$k(b)}}}
;var Mt=new Map([["dark","USER_INTERFACE_THEME_DARK"],["light","USER_INTERFACE_THEME_LIGHT"]]);function Nt(){var a=void 0===a?window.location.href:a;if(T("kevlar_disable_theme_param"))return null;ac(bc(5,a));try{var b=il(a).theme;return Mt.get(b)||null}catch(c){}return null}
;function Ot(){this.h={};if(this.i=em()){var a=cm("CONSISTENCY");a&&Pt(this,{encryptedTokenJarContents:a})}}
Ot.prototype.handleResponse=function(a,b){if(!b)throw Error("request needs to be passed into ConsistencyService");var c,d;b=(null==(c=b.Ma.context)?void 0:null==(d=c.request)?void 0:d.consistencyTokenJars)||[];var e;if(a=null==(e=a.responseContext)?void 0:e.consistencyTokenJar){e=v(b);for(c=e.next();!c.done;c=e.next())delete this.h[c.value.encryptedTokenJarContents];Pt(this,a)}};
function Pt(a,b){if(b.encryptedTokenJarContents&&(a.h[b.encryptedTokenJarContents]=b,"string"===typeof b.expirationSeconds)){var c=Number(b.expirationSeconds);setTimeout(function(){delete a.h[b.encryptedTokenJarContents]},1E3*c);
a.i&&bm("CONSISTENCY",b.encryptedTokenJarContents,c,void 0,!0)}}
;var Qt=window.location.hostname.split(".").slice(-2).join(".");function Rt(){var a=R("LOCATION_PLAYABILITY_TOKEN");"TVHTML5"===R("INNERTUBE_CLIENT_NAME")&&(this.h=St(this))&&(a=this.h.get("yt-location-playability-token"));a&&(this.locationPlayabilityToken=a,this.i=void 0)}
var Tt;function Ut(){Tt=E("yt.clientLocationService.instance");Tt||(Tt=new Rt,D("yt.clientLocationService.instance",Tt));return Tt}
m=Rt.prototype;m.setLocationOnInnerTubeContext=function(a){a.client||(a.client={});this.i?(a.client.locationInfo||(a.client.locationInfo={}),a.client.locationInfo.latitudeE7=Math.floor(1E7*this.i.coords.latitude),a.client.locationInfo.longitudeE7=Math.floor(1E7*this.i.coords.longitude),a.client.locationInfo.horizontalAccuracyMeters=Math.round(this.i.coords.accuracy),a.client.locationInfo.forceLocationPlayabilityTokenRefresh=!0):this.locationPlayabilityToken&&(a.client.locationPlayabilityToken=this.locationPlayabilityToken)};
m.handleResponse=function(a){var b;a=null==(b=a.responseContext)?void 0:b.locationPlayabilityToken;void 0!==a&&(this.locationPlayabilityToken=a,this.i=void 0,"TVHTML5"===R("INNERTUBE_CLIENT_NAME")?(this.h=St(this))&&this.h.set("yt-location-playability-token",a,15552E3):bm("YT_CL",JSON.stringify({loctok:a}),15552E3,Qt,!0))};
function St(a){return void 0===a.h?new cn("yt-client-location"):a.h}
m.clearLocationPlayabilityToken=function(a){"TVHTML5"===a?(this.h=St(this))&&this.h.remove("yt-location-playability-token"):dm("YT_CL")};
m.getCurrentPositionFromGeolocation=function(){var a=this;if(!(navigator&&navigator.geolocation&&navigator.geolocation.getCurrentPosition))return Promise.reject(Error("Geolocation unsupported"));var b=!1,c=1E4;"MWEB"===R("INNERTUBE_CLIENT_NAME")&&(b=!0,c=15E3);return new Promise(function(d,e){navigator.geolocation.getCurrentPosition(function(f){a.i=f;d(f)},function(f){e(f)},{enableHighAccuracy:b,
maximumAge:0,timeout:c})})};
m.createUnpluggedLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);if(null==a?0:a.accuracy)b.locationRadiusMeters=Math.round(a.accuracy);return b};
m.createLocationInfo=function(a){var b={};a=a.coords;if(null==a?0:a.latitude)b.latitudeE7=Math.floor(1E7*a.latitude);if(null==a?0:a.longitude)b.longitudeE7=Math.floor(1E7*a.longitude);return b};function Vt(a,b){var c,d=null==(c=as(a,Ek))?void 0:c.signal;if(d&&b.Nb&&(c=b.Nb[d]))return c();var e;if((c=null==(e=as(a,Ck))?void 0:e.request)&&b.Ud&&(e=b.Ud[c]))return e();for(var f in a)if(b.bd[f]&&(a=b.bd[f]))return a()}
;function Wt(a){return function(){return new a}}
;var Xt={},Yt=(Xt.WEB_UNPLUGGED="^unplugged/",Xt.WEB_UNPLUGGED_ONBOARDING="^unplugged/",Xt.WEB_UNPLUGGED_OPS="^unplugged/",Xt.WEB_UNPLUGGED_PUBLIC="^unplugged/",Xt.WEB_CREATOR="^creator/",Xt.WEB_KIDS="^kids/",Xt.WEB_EXPERIMENTS="^experiments/",Xt.WEB_MUSIC="^music/",Xt.WEB_REMIX="^music/",Xt.WEB_MUSIC_EMBEDDED_PLAYER="^music/",Xt.WEB_MUSIC_EMBEDDED_PLAYER="^main_app/|^sfv/",Xt);
function Zt(a){var b=void 0===b?"UNKNOWN_INTERFACE":b;if(1===a.length)return a[0];var c=Yt[b];if(c){c=new RegExp(c);for(var d=v(a),e=d.next();!e.done;e=d.next())if(e=e.value,c.exec(e))return e}var f=[];Object.entries(Yt).forEach(function(g){var h=v(g);g=h.next().value;h=h.next().value;b!==g&&f.push(h)});
c=new RegExp(f.join("|"));a.sort(function(g,h){return g.length-h.length});
d=v(a);for(e=d.next();!e.done;e=d.next())if(e=e.value,!c.exec(e))return e;return a[0]}
;function $t(){}
$t.prototype.v=function(a,b,c){b=void 0===b?{}:b;c=void 0===c?Zl:c;var d=a.clickTrackingParams,e=this.l,f=!1;f=void 0===f?!1:f;e=void 0===e?!1:e;var g=R("INNERTUBE_CONTEXT");if(g){g=ub(g);T("web_no_tracking_params_in_shell_killswitch")||delete g.clickTracking;g.client||(g.client={});var h=g.client;"MWEB"===h.clientName&&"AUTOMOTIVE_FORM_FACTOR"!==h.clientFormFactor&&(h.clientFormFactor=R("IS_TABLET")?"LARGE_FORM_FACTOR":"SMALL_FORM_FACTOR");h.screenWidthPoints=window.innerWidth;h.screenHeightPoints=
window.innerHeight;h.screenPixelDensity=Math.round(window.devicePixelRatio||1);h.screenDensityFloat=window.devicePixelRatio||1;h.utcOffsetMinutes=-Math.floor((new Date).getTimezoneOffset());var k=void 0===k?!1:k;im();var l="USER_INTERFACE_THEME_LIGHT";lm(165)?l="USER_INTERFACE_THEME_DARK":lm(174)?l="USER_INTERFACE_THEME_LIGHT":!T("kevlar_legacy_browsers")&&window.matchMedia&&window.matchMedia("(prefers-color-scheme)").matches&&window.matchMedia("(prefers-color-scheme: dark)").matches&&(l="USER_INTERFACE_THEME_DARK");
k=k?l:Nt()||l;h.userInterfaceTheme=k;if(!f){if(k=qm())h.connectionType=k;T("web_log_effective_connection_type")&&(k=rm())&&(g.client.effectiveConnectionType=k)}var n;if(T("web_log_memory_total_kbytes")&&(null==(n=C.navigator)?0:n.deviceMemory)){var p;n=null==(p=C.navigator)?void 0:p.deviceMemory;g.client.memoryTotalKbytes=""+1E6*n}T("web_gcf_hashes_innertube")&&(k=$o())&&(p=k.coldConfigData,n=k.coldHashData,k=k.hotHashData,g.client.configInfo=g.client.configInfo||{},g.client.configInfo.coldConfigData=
p,g.client.configInfo.coldHashData=n,g.client.configInfo.hotHashData=k);p=il(C.location.href);!T("web_populate_internal_geo_killswitch")&&p.internalcountrycode&&(h.internalGeo=p.internalcountrycode);"MWEB"===h.clientName||"WEB"===h.clientName?(h.mainAppWebInfo={graftUrl:C.location.href},T("kevlar_woffle")&&$l.h&&(p=$l.h,h.mainAppWebInfo.pwaInstallabilityStatus=!p.h&&p.i?"PWA_INSTALLABILITY_STATUS_CAN_BE_INSTALLED":"PWA_INSTALLABILITY_STATUS_UNKNOWN"),h.mainAppWebInfo.webDisplayMode=am(),h.mainAppWebInfo.isWebNativeShareAvailable=
navigator&&void 0!==navigator.share):"TVHTML5"===h.clientName&&(!T("web_lr_app_quality_killswitch")&&(p=R("LIVING_ROOM_APP_QUALITY"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{appQuality:p})),p=R("LIVING_ROOM_CERTIFICATION_SCOPE"))&&(h.tvAppInfo=Object.assign(h.tvAppInfo||{},{certificationScope:p}));if(!T("web_populate_time_zone_itc_killswitch")){b:{if("undefined"!==typeof Intl)try{var r=(new Intl.DateTimeFormat).resolvedOptions().timeZone;break b}catch(fa){}r=void 0}r&&(h.timeZone=r)}(r=R("EXPERIMENTS_TOKEN",
""))?h.experimentsToken=r:delete h.experimentsToken;r=ol();Ot.h||(Ot.h=new Ot);h=Ot.h.h;p=[];n=0;for(var t in h)p[n++]=h[t];g.request=Object.assign({},g.request,{internalExperimentFlags:r,consistencyTokenJars:p});!T("web_prequest_context_killswitch")&&(t=R("INNERTUBE_CONTEXT_PREQUEST_CONTEXT"))&&(g.request.externalPrequestContext=t);r=im();t=lm(58);r=r.get("gsml","");g.user=Object.assign({},g.user);t&&(g.user.enableSafetyMode=t);r&&(g.user.lockedSafetyMode=!0);T("warm_op_csn_cleanup")?e&&(f=nt())&&
(g.clientScreenNonce=f):!f&&(f=nt())&&(g.clientScreenNonce=f);d&&(g.clickTracking={clickTrackingParams:d});if(d=E("yt.mdx.remote.remoteClient_"))g.remoteClient=d;Ut().setLocationOnInnerTubeContext(g);try{var x=ll(),z=x.bid;delete x.bid;g.adSignalsInfo={params:[],bid:z};var y=v(Object.entries(x));for(var J=y.next();!J.done;J=y.next()){var G=v(J.value),M=G.next().value,P=G.next().value;x=M;z=P;d=void 0;null==(d=g.adSignalsInfo.params)||d.push({key:x,value:""+z})}var ea;if(T("add_ifa_to_tvh5_requests")&&
"TVHTML5"===(null==(ea=g.client)?void 0:ea.clientName)){var aa=R("INNERTUBE_CONTEXT");aa.adSignalsInfo&&(g.adSignalsInfo.advertisingId=aa.adSignalsInfo.advertisingId,g.adSignalsInfo.limitAdTracking=aa.adSignalsInfo.limitAdTracking)}}catch(fa){Us(fa)}y=g}else Us(Error("Error: No InnerTubeContext shell provided in ytconfig.")),y={};y={context:y};if(J=this.i(a)){this.h(y,J,b);var S;b="/youtubei/v1/"+Zt(this.j());(J=null==(S=as(a.commandMetadata,Dk))?void 0:S.apiUrl)&&(b=J);S=b;(b=R("INNERTUBE_HOST_OVERRIDE"))&&
(S=String(b)+String(dc(S)));b={};b.key=R("INNERTUBE_API_KEY");T("json_condensed_response")&&(b.prettyPrint="false");S=jl(S,b||{},!1);a=Object.assign({},{command:a},void 0);a={input:S,ib:At(S),Ma:y,config:a};a.config.Tb?a.config.Tb.identity=c:a.config.Tb={identity:c};return a}Us(new V("Error: Failed to create Request from Command.",a))};
ha.Object.defineProperties($t.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!1}}});
function au(){}
w(au,$t);function bu(){}
w(bu,au);bu.prototype.v=function(){return{input:"/getDatasyncIdsEndpoint",ib:At("/getDatasyncIdsEndpoint","GET"),Ma:{}}};
bu.prototype.j=function(){return[]};
bu.prototype.i=function(){};
bu.prototype.h=function(){};var cu={},du=(cu.GET_DATASYNC_IDS=Wt(bu),cu);var eu="absolute_experiments app conditional_experiments debugcss debugjs expflag forced_experiments pbj pbjreload sbb spf spfreload sr_bns_address sttick".split(" ");
function fu(a,b){var c=void 0===c?!0:c;var d=R("VALID_SESSION_TEMPDATA_DOMAINS",[]),e=cc(window.location.href);e&&d.push(e);e=cc(a);if(0<=eb(d,e)||!e&&0==a.lastIndexOf("/",0))if(d=document.createElement("a"),Zh(d,a),a=d.href)if(a=dc(a),a=ec(a))if(c&&!b.csn&&(b.itct||b.ved)&&(b=Object.assign({csn:nt()},b)),f){var f=parseInt(f,10);isFinite(f)&&0<f&&gu(a,b,f)}else gu(a,b)}
function gu(a,b,c){a=hu(a);b=b?hc(b):"";c=c||5;Bt()&&bm(a,b,c)}
function hu(a){for(var b=v(eu),c=b.next();!c.done;c=b.next())a=mc(a,c.value);return"ST-"+Zb(a).toString(36)}
;function iu(a){gp.call(this,1,arguments);this.csn=a}
w(iu,gp);var pp=new hp("screen-created",iu),ju=[],ku=0,lu=new Map,mu=new Map,nu=new Map;
function ou(a,b,c,d,e){e=void 0===e?!1:e;for(var f=pu({cttAuthInfo:pt(b)||void 0},b),g=v(d),h=g.next();!h.done;h=g.next()){h=h.value;var k=h.getAsJson();(pb(k)||!k.trackingParams&&!k.veType)&&Vs(Error("Child VE logged with no data"));if(T("no_client_ve_attach_unless_shown")){var l=qu(h,b);if(k.veType&&!mu.has(l)&&!nu.has(l)&&!e){lu.set(l,[a,b,c,h]);return}h=qu(c,b);lu.has(h)?ru(c,b):nu.set(h,!0)}}d=d.filter(function(n){n.csn!==b?(n.csn=b,n=!0):n=!1;return n});
c={csn:b,parentVe:c.getAsJson(),childVes:hb(d,function(n){return n.getAsJson()})};
"UNDEFINED_CSN"===b?su("visualElementAttached",f,c):a?Ns("visualElementAttached",c,a,f):mn("visualElementAttached",c,f)}
function su(a,b,c){ju.push({Ce:a,payload:c,Xf:void 0,options:b});ku||(ku=qp())}
function rp(a){if(ju){for(var b=v(ju),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,mn(c.Ce,c.payload,c.options));ju.length=0}ku=0}
function qu(a,b){return""+a.getAsJson().veType+a.getAsJson().veCounter+b}
function ru(a,b){a=qu(a,b);lu.has(a)&&(b=lu.get(a)||[],ou(b[0],b[1],b[2],[b[3]],!0),lu.delete(a))}
function pu(a,b){T("log_sequence_info_on_gel_web")&&(a.sequenceGroup=b);return a}
;function tu(){try{return!!self.localStorage}catch(a){return!1}}
;function uu(a){a=a.match(/(.*)::.*::.*/);if(null!==a)return a[1]}
function vu(a){if(tu()){var b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=uu(c);void 0===d||a.includes(d)||self.localStorage.removeItem(c)}}}
function wu(){if(!tu())return!1;var a=tm(),b=Object.keys(window.localStorage);b=v(b);for(var c=b.next();!c.done;c=b.next())if(c=uu(c.value),void 0!==c&&c!==a)return!0;return!1}
;function xu(){var a=!1;try{a=!!window.sessionStorage.getItem("session_logininfo")}catch(b){a=!0}return T("copy_login_info_to_st_cookie")&&("WEB"===R("INNERTUBE_CLIENT_NAME")||"WEB_CREATOR"===R("INNERTUBE_CLIENT_NAME"))&&a}
function yu(a){if(R("LOGGED_IN",!0)&&xu()){var b=R("VALID_SESSION_TEMPDATA_DOMAINS",[]);var c=cc(window.location.href);c&&b.push(c);c=cc(a);0<=eb(b,c)||!c&&0==a.lastIndexOf("/",0)?(b=dc(a),(b=ec(b))?(b=hu(b),b=(b=cm(b)||null)?hl(b):{}):b=null):b=null;null==b&&(b={});c=b;var d=void 0;xu()?(d||(d=R("LOGIN_INFO")),d?(c.session_logininfo=d,c=!0):c=!1):c=!1;c&&fu(a,b)}}
;function zu(a){var b=B.apply(1,arguments);if(!Au(a)||b.some(function(d){return!Au(d)}))throw Error("Only objects may be merged.");
b=v(b);for(var c=b.next();!c.done;c=b.next())Bu(a,c.value)}
function Bu(a,b){for(var c in b)if(Au(b[c])){if(c in a&&!Au(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});Bu(a[c],b[c])}else if(Cu(b[c])){if(c in a&&!Cu(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);Du(a[c],b[c])}else a[c]=b[c];return a}
function Du(a,b){b=v(b);for(var c=b.next();!c.done;c=b.next())c=c.value,Au(c)?a.push(Bu({},c)):Cu(c)?a.push(Du([],c)):a.push(c);return a}
function Au(a){return"object"===typeof a&&!Array.isArray(a)}
function Cu(a){return"object"===typeof a&&Array.isArray(a)}
;function Eu(a){var b;(b=E("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},D("ytcsi."+(a||"")+"data_",b));return b}
function Fu(){var a=Eu();a.info||(a.info={});return a.info}
function Gu(a){a=Eu(a);a.metadata||(a.metadata={});return a.metadata}
function Hu(a){a=Eu(a);a.tick||(a.tick={});return a.tick}
function Iu(a){a=Eu(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Ju(a){a=Iu(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
function Ku(a){var b=Eu(a).nonce;if(!b){if(T("enable_lr_96_bit_can_no_crypto")){b=bt();for(var c=[],d=0;d<b.length;d++)c.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[d]&63));b=c.join("")}else b=ct();Eu(a).nonce=b}return b}
;function Lu(){var a=E("ytcsi.debug");a||(a=[],D("ytcsi.debug",a),D("ytcsi.reference",{}));return a}
function Mu(a){a=a||"";var b=E("ytcsi.reference");b||(Lu(),b=E("ytcsi.reference"));if(b[a])return b[a];var c=Lu(),d={timerName:a,info:{},tick:{},span:{},jspbInfo:[]};c.push(d);return b[a]=d}
;var X={},Nu=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X["asset.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_CLAIMED_VIDEOS",
X["asset.composition"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION",X["asset.composition_ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_OWNERSHIP",X["asset.composition_policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_COMPOSITION_POLICY",X["asset.embeds"]="LATENCY_ACTION_CREATOR_CMS_ASSET_EMBEDS",X["asset.history"]="LATENCY_ACTION_CREATOR_CMS_ASSET_HISTORY",X["asset.issues"]="LATENCY_ACTION_CREATOR_CMS_ASSET_ISSUES",X["asset.licenses"]="LATENCY_ACTION_CREATOR_CMS_ASSET_LICENSES",X["asset.metadata"]=
"LATENCY_ACTION_CREATOR_CMS_ASSET_METADATA",X["asset.ownership"]="LATENCY_ACTION_CREATOR_CMS_ASSET_OWNERSHIP",X["asset.policy"]="LATENCY_ACTION_CREATOR_CMS_ASSET_POLICY",X["asset.references"]="LATENCY_ACTION_CREATOR_CMS_ASSET_REFERENCES",X["asset.shares"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SHARES",X["asset.sound_recordings"]="LATENCY_ACTION_CREATOR_CMS_ASSET_SOUND_RECORDINGS",X["asset_group.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_ASSETS",X["asset_group.campaigns"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CAMPAIGNS",
X["asset_group.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_CLAIMED_VIDEOS",X["asset_group.metadata"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUP_METADATA",X["song.analytics"]="LATENCY_ACTION_CREATOR_SONG_ANALYTICS",X.browse="LATENCY_ACTION_BROWSE",X.cast_splash="LATENCY_ACTION_CAST_SPLASH",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard="LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",
X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.content.promotions"]="LATENCY_ACTION_CREATOR_PROMOTION_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.music_storefront"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC_STOREFRONT",X["channel.playlists"]="LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",
X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X.commerce_transaction="LATENCY_ACTION_COMMERCE_TRANSACTION",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.video_copyright"]="LATENCY_ACTION_CREATOR_DIALOG_VIDEO_COPYRIGHT",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",
X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf="LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.mini_app="LATENCY_ACTION_MINI_APP_PLAY",X.onboarding="LATENCY_ACTION_ONBOARDING",
X.owner="LATENCY_ACTION_CREATOR_CMS_DASHBOARD",X["owner.allowlist"]="LATENCY_ACTION_CREATOR_CMS_ALLOWLIST",X["owner.analytics"]="LATENCY_ACTION_CREATOR_CMS_ANALYTICS",X["owner.art_tracks"]="LATENCY_ACTION_CREATOR_CMS_ART_TRACKS",X["owner.assets"]="LATENCY_ACTION_CREATOR_CMS_ASSETS",X["owner.asset_groups"]="LATENCY_ACTION_CREATOR_CMS_ASSET_GROUPS",X["owner.bulk"]="LATENCY_ACTION_CREATOR_CMS_BULK_HISTORY",X["owner.campaigns"]="LATENCY_ACTION_CREATOR_CMS_CAMPAIGNS",X["owner.channel_invites"]="LATENCY_ACTION_CREATOR_CMS_CHANNEL_INVITES",
X["owner.channels"]="LATENCY_ACTION_CREATOR_CMS_CHANNELS",X["owner.claimed_videos"]="LATENCY_ACTION_CREATOR_CMS_CLAIMED_VIDEOS",X["owner.claims"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.claims.manual"]="LATENCY_ACTION_CREATOR_CMS_MANUAL_CLAIMING",X["owner.delivery"]="LATENCY_ACTION_CREATOR_CMS_CONTENT_DELIVERY",X["owner.delivery_templates"]="LATENCY_ACTION_CREATOR_CMS_DELIVERY_TEMPLATES",X["owner.issues"]="LATENCY_ACTION_CREATOR_CMS_ISSUES",X["owner.licenses"]="LATENCY_ACTION_CREATOR_CMS_LICENSES",
X["owner.pitch_music"]="LATENCY_ACTION_CREATOR_CMS_PITCH_MUSIC",X["owner.policies"]="LATENCY_ACTION_CREATOR_CMS_POLICIES",X["owner.releases"]="LATENCY_ACTION_CREATOR_CMS_RELEASES",X["owner.reports"]="LATENCY_ACTION_CREATOR_CMS_REPORTS",X["owner.videos"]="LATENCY_ACTION_CREATOR_CMS_VIDEOS",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard="LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att=
"LATENCY_ACTION_PLAYER_ATTESTATION",X["playlist.videos"]="LATENCY_ACTION_CREATOR_PLAYLIST_VIDEO_LIST",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X["promotion.edit"]="LATENCY_ACTION_CREATOR_PROMOTION_EDIT",
X.red="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.premium="LATENCY_ACTION_PREMIUM_PAGE_GET_BROWSE",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest="LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.store="LATENCY_ACTION_STORE",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again=
"LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]="LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.claims"]="LATENCY_ACTION_CREATOR_VIDEO_CLAIMS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.copyright"]=
"LATENCY_ACTION_CREATOR_VIDEO_COPYRIGHT",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.policy"]="LATENCY_ACTION_CREATOR_VIDEO_POLICY",X["video.rights_management"]=
"LATENCY_ACTION_CREATOR_VIDEO_RIGHTS_MANAGEMENT",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X.gel_compression="LATENCY_ACTION_GEL_COMPRESSION",X.gel_jspb_serialize="LATENCY_ACTION_GEL_JSPB_SERIALIZE",X);function Ou(a,b){gp.call(this,1,arguments);this.timer=b}
w(Ou,gp);var Pu=new hp("aft-recorded",Ou);var Qu=C.ytLoggingLatencyUsageStats_||{};D("ytLoggingLatencyUsageStats_",Qu);function Ru(){this.h=0}
function Su(){Ru.h||(Ru.h=new Ru);return Ru.h}
Ru.prototype.tick=function(a,b,c,d){Tu(this,"tick_"+a+"_"+b)||mn("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c,cttAuthInfo:d})};
Ru.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Tu(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,mn("latencyActionInfo",a,{cttAuthInfo:c}))};
Ru.prototype.jspbInfo=function(){};
Ru.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Tu(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,mn("latencyActionSpan",a,{cttAuthInfo:c}))};
function Tu(a,b){Qu[b]=Qu[b]||{count:0};var c=Qu[b];c.count++;c.time=W();a.h||(a.h=wm(function(){var d=W(),e;for(e in Qu)Qu[e]&&6E4<d-Qu[e].time&&delete Qu[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new V("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||Vs(c)),!0):!1}
;var Uu=window;function Vu(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
function Wu(){var a;if(T("csi_use_performance_navigation_timing")||T("csi_use_performance_navigation_timing_tvhtml5")){var b,c,d,e=null==Y?void 0:null==(a=Y.getEntriesByType)?void 0:null==(b=a.call(Y,"navigation"))?void 0:null==(c=b[0])?void 0:null==(d=c.toJSON)?void 0:d.call(c);e?(e.requestStart=Xu(e.requestStart),e.responseEnd=Xu(e.responseEnd),e.redirectStart=Xu(e.redirectStart),e.redirectEnd=Xu(e.redirectEnd),e.domainLookupEnd=Xu(e.domainLookupEnd),e.connectStart=Xu(e.connectStart),e.connectEnd=
Xu(e.connectEnd),e.responseStart=Xu(e.responseStart),e.secureConnectionStart=Xu(e.secureConnectionStart),e.domainLookupStart=Xu(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=Y.timing}else a=Y.timing;return a}
function Xu(a){return Math.round(Yu()+a)}
function Yu(){return(T("csi_use_time_origin")||T("csi_use_time_origin_tvhtml5"))&&Y.timeOrigin?Math.floor(Y.timeOrigin):Y.timing.navigationStart}
var Y=Uu.performance||Uu.mozPerformance||Uu.msPerformance||Uu.webkitPerformance||new Vu;var Zu=!1,$u=!1,av={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="preload"][name="player/embed"]':"pej",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",
'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",
'script[name="mobile_blazer_watch_mod"]':"mbwj"};Wa(Y.clearResourceTimings||Y.webkitClearResourceTimings||Y.mozClearResourceTimings||Y.msClearResourceTimings||Y.oClearResourceTimings||cb,Y);function bv(a,b){if(!T("web_csi_action_sampling_enabled")||!Eu(b).actionDisabled){var c=Mu(b||"");zu(c.info,a);a.loadType&&(c=a.loadType,Gu(b).loadType=c);zu(Ju(b),a);c=Ku(b);b=Eu(b).cttAuthInfo;Su().info(a,c,b)}}
function cv(){var a,b,c,d;return(null!=(d=null==Er().resolve(new yr(Wo))?void 0:null==(a=Xo())?void 0:null==(b=a.loggingHotConfig)?void 0:null==(c=b.csiConfig)?void 0:c.debugTicks)?d:[]).map(function(e){return Object.values(e)[0]})}
function Z(a,b,c){if(!T("web_csi_action_sampling_enabled")||!Eu(c).actionDisabled){var d=Ku(c),e;if(e=T("web_csi_debug_sample_enabled")&&d){(null==Er().resolve(new yr(Wo))?0:Xo())&&!$u&&($u=!0,Z("gcfl",W(),c));var f,g,h;e=(null==Er().resolve(new yr(Wo))?void 0:null==(f=Xo())?void 0:null==(g=f.loggingHotConfig)?void 0:null==(h=g.csiConfig)?void 0:h.debugSampleWeight)||0;if(f=0!==e)b:{f=cv();if(0<f.length)for(g=0;g<f.length;g++)if(a===f[g]){f=!0;break b}f=!1}if(f){for(g=f=0;g<d.length;g++)f=31*f+d.charCodeAt(g),
g<d.length-1&&(f%=Math.pow(2,47));e=0!==f%1E5%e;Eu(c).debugTicksExcludedLogged||(f={},f.debugTicksExcluded=e,bv(f,c));Eu(c).debugTicksExcludedLogged=!0}else e=!1}if(!e){b||"_"===a[0]||(e=a,Y.mark&&(e.startsWith("mark_")||(e="mark_"+e),c&&(e+=" ("+c+")"),Y.mark(e)));e=Mu(c||"");e.tick[a]=b||W();if(e.callback&&e.callback[a])for(e=v(e.callback[a]),f=e.next();!f.done;f=e.next())f=f.value,f();e=Iu(c);e.gelTicks&&(e.gelTicks[a]=!0);f=Hu(c);e=b||W();T("log_repeated_ytcsi_ticks")?a in f||(f[a]=e):f[a]=e;
f=Eu(c).cttAuthInfo;"_start"===a?(a=Su(),Tu(a,"baseline_"+d)||mn("latencyActionBaselined",{clientActionNonce:d},{timestamp:b,cttAuthInfo:f})):Su().tick(a,d,b,f);dv(c);return e}}}
function ev(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=Vq+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function fv(){function a(f,g,h){g=g.match("_rid")?g.split("_rid")[0]:g;"number"===typeof h&&(h=JSON.stringify(h));f.requestIds?f.requestIds.push({endpoint:g,id:h}):f.requestIds=[{endpoint:g,id:h}]}
for(var b={},c=v(Object.entries(R("TIMING_INFO",{}))),d=c.next();!d.done;d=c.next()){var e=v(d.value);d=e.next().value;e=e.next().value;switch(d){case "GetBrowse_rid":a(b,d,e);break;case "GetGuide_rid":a(b,d,e);break;case "GetHome_rid":a(b,d,e);break;case "GetPlayer_rid":a(b,d,e);break;case "GetSearch_rid":a(b,d,e);break;case "GetSettings_rid":a(b,d,e);break;case "GetTrending_rid":a(b,d,e);break;case "GetWatchNext_rid":a(b,d,e);break;case "yt_red":b.isRedSubscriber=!!e;break;case "yt_ad":b.isMonetized=
!!e}}return b}
function gv(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);gi(window)&&a.setAttribute("nonce",gi(window));return c?(a=Y.getEntriesByName(c))&&a[0]&&(a=a[0],c=Yu(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function hv(){var a=window.location.protocol,b=Y.getEntriesByType("resource");b=gb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=ib(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",Xu(b.startTime)),Z("wffe",Xu(b.responseEnd)))}
function iv(a){var b=jv("aft",a);if(b)return b;b=R((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=b.length,d=0;d<c;d++){var e=jv(b[d],a);if(e)return e}return NaN}
function jv(a,b){if(a=Hu(b)[a])return"number"===typeof a?a:a[a.length-1]}
function dv(a){var b=jv("_start",a),c=iv(a);b&&c&&!Zu&&(mp(Pu,new Ou(Math.round(c-b),a)),Zu=!0)}
function kv(){if(Y.getEntriesByType){var a=Y.getEntriesByType("paint");if(a=jb(a,function(b){return"first-paint"===b.name}))return Xu(a.startTime)}a=Y.timing;
return a.ye?Math.max(0,a.ye):0}
;function lv(a,b){Zk(function(){Mu("").info.actionType=a;b&&Vk("TIMING_AFT_KEYS",b);Vk("TIMING_ACTION",a);var c=fv();0<Object.keys(c).length&&bv(c);c={isNavigation:!0,actionType:Nu[R("TIMING_ACTION")]||"LATENCY_ACTION_UNKNOWN"};var d=R("PREVIOUS_ACTION");d&&(c.previousAction=Nu[d]||"LATENCY_ACTION_UNKNOWN");if(d=R("CLIENT_PROTOCOL"))c.httpProtocol=d;if(d=R("CLIENT_TRANSPORT"))c.transportProtocol=d;(d=nt())&&"UNDEFINED_CSN"!==d&&(c.clientScreenNonce=d);d=ev();if(1===d||-1===d)c.isVisible=!0;Gu();Fu();
c.loadType="cold";d=Fu();var e=Wu(),f=Yu(),g=R("CSI_START_TIMESTAMP_MILLIS",0);0<g&&!T("embeds_web_enable_csi_start_override_killswitch")&&(f=g);f&&(Z("srt",e.responseStart),1!==d.prerender&&Z("_start",f,void 0));d=kv();0<d&&Z("fpt",d);d=Wu();d.isPerformanceNavigationTiming&&bv({performanceNavigationTiming:!0},void 0);Z("nreqs",d.requestStart,void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,
void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=Yu()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",d.connectEnd,void 0));Y&&"getEntriesByType"in Y&&hv();d=[];if(document.querySelector&&Y&&Y.getEntriesByName)for(var h in av)av.hasOwnProperty(h)&&(e=av[h],
gv(h,e)&&d.push(e));if(0<d.length)for(c.resourceInfo=[],h=v(d),d=h.next();!d.done;d=h.next())c.resourceInfo.push({resourceCache:d.value});bv(c);c=Iu();c.preLoggedGelInfos||(c.preLoggedGelInfos=[]);h=c.preLoggedGelInfos;c=Ju();d=void 0;for(e=0;e<h.length;e++)if(f=h[e],f.loadType){d=f.loadType;break}if("cold"===Gu().loadType&&("cold"===c.loadType||"cold"===d)){d=Hu();e=Iu();e=e.gelTicks?e.gelTicks:e.gelTicks={};for(var k in d)if(!(k in e))if("number"===typeof d[k])Z(k,jv(k));else if(T("log_repeated_ytcsi_ticks"))for(f=
v(d[k]),g=f.next();!g.done;g=f.next())g=g.value,Z(k.slice(1),g);k={};d=!1;h=v(h);for(e=h.next();!e.done;e=h.next())d=e.value,zu(c,d),zu(k,d),d=!0;d&&bv(k)}D("ytglobal.timingready_",!0);k=R("TIMING_ACTION");E("ytglobal.timingready_")&&k&&mv()&&iv()&&dv()})()}
function nv(a,b,c){Zk(bv)(a,b,void 0===c?!1:c)}
function ov(a,b,c){return Zk(Z)(a,b,c)}
function mv(){return Zk(function(){return"_start"in Hu()})()}
function pv(){Zk(function(){var a=Ku();requestAnimationFrame(function(){setTimeout(function(){a===Ku()&&ov("ol",void 0,void 0)},0)})})()}
var qv=window;qv.ytcsi&&(qv.ytcsi.infoGel=nv,qv.ytcsi.tick=ov);var rv="tokens consistency mss client_location entities adblock_detection response_received_commands store PLAYER_PRELOAD".split(" "),sv=["type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.BrowseResponse","type.googleapis.com/youtube.api.pfiinnertube.YoutubeApiInnertube.PlayerResponse"];function tv(a,b,c,d){this.v=a;this.aa=b;this.l=c;this.j=d;this.i=void 0;this.h=new Map;a.Nb||(a.Nb={});a.Nb=Object.assign({},du,a.Nb)}
function uv(a,b,c,d){if(void 0!==tv.h){if(d=tv.h,a=[a!==d.v,b!==d.aa,c!==d.l,!1,!1,!1,void 0!==d.i],a.some(function(e){return e}))throw new V("InnerTubeTransportService is already initialized",a);
}else tv.h=new tv(a,b,c,d)}
function vv(a){var b={signalServiceEndpoint:{signal:"GET_DATASYNC_IDS"}};var c=void 0===c?Zl:c;var d=Vt(b,a.v);if(!d)return Qd(new V("Error: No request builder found for command.",b));var e=d.v(b,void 0,c);return e?(yu(e.input),new Ld(function(f){var g,h,k;return A(function(l){if(1==l.h){h="cors"===(null==(g=e.ib)?void 0:g.mode)?"cors":void 0;if(a.l.af){var n=e.config,p;n=null==n?void 0:null==(p=n.Tb)?void 0:p.sessionIndex;p=Yl(0,{sessionIndex:n});k=Object.assign({},wv(h),p);return l.B(2)}return l.yield(xv(e.config,
h),3)}2!=l.h&&(k=l.i);f(yv(a,e,k));l.h=0})})):Qd(new V("Error: Failed to build request for command.",b))}
function zv(a,b,c){var d;if(b&&!(null==b?0:null==(d=b.sequenceMetaData)?0:d.skipProcessing)&&a.j){d=v(rv);for(var e=d.next();!e.done;e=d.next())e=e.value,a.j[e]&&a.j[e].handleResponse(b,c)}}
function yv(a,b,c){var d,e,f,g,h,k,l,n,p,r,t,x,z,y,J,G,M,P,ea,aa,S,fa,la,ma,Da,Mg,hr,ir,jr;return A(function(ia){switch(ia.h){case 1:ia.B(2);break;case 3:if((d=ia.i)&&!d.isExpired())return ia.return(Promise.resolve(d.h()));case 2:if(!(null==(e=b)?0:null==(f=e.Ma)?0:f.context)){ia.B(4);break}g=b.Ma.context;ia.B(5);break;case 5:h=v([]),k=h.next();case 7:if(k.done){ia.B(4);break}l=k.value;return ia.yield(l.fg(g),8);case 8:k=h.next();ia.B(7);break;case 4:if(null==(n=a.i)||!n.kg(b.input,b.Ma)){ia.B(11);
break}return ia.yield(a.i.Zf(b.input,b.Ma),12);case 12:return p=ia.i,T("kevlar_process_local_innertube_responses_killswitch")||zv(a,p,b),ia.return(p);case 11:return(x=null==(t=b.config)?void 0:t.hg)&&a.h.has(x)?r=a.h.get(x):(z=JSON.stringify(b.Ma),G=null!=(J=null==(y=b.ib)?void 0:y.headers)?J:{},b.ib=Object.assign({},b.ib,{headers:Object.assign({},G,c)}),M=Object.assign({},b.ib),"POST"===b.ib.method&&(M=Object.assign({},M,{body:z})),(null==(P=b.config)?0:P.Je)&&ov(b.config.Je),ea=function(){return a.aa.fetch(b.input,
M,b.config)},r=ea(),x&&a.h.set(x,r)),ia.yield(r,13);
case 13:if((aa=ia.i)&&"error"in aa&&(null==(S=aa)?0:null==(fa=S.error)?0:fa.details))for(la=aa.error.details,ma=v(la),Da=ma.next();!Da.done;Da=ma.next())Mg=Da.value,(hr=Mg["@type"])&&-1<sv.indexOf(hr)&&(delete Mg["@type"],aa=Mg);x&&a.h.has(x)&&a.h.delete(x);(null==(ir=b.config)?0:ir.Ke)&&ov(b.config.Ke);if(aa||null==(jr=a.i)||!jr.Sf(b.input,b.Ma)){ia.B(14);break}return ia.yield(a.i.Yf(b.input,b.Ma),15);case 15:aa=ia.i;case 14:return zv(a,aa,b),ia.return(aa||void 0)}})}
function xv(a,b){var c,d,e,f;return A(function(g){if(1==g.h){e=null==(c=a)?void 0:null==(d=c.Tb)?void 0:d.sessionIndex;var h=g.yield;var k=Yl(0,{sessionIndex:e});if(!(k instanceof Ld)){var l=new Ld(cb);Md(l,2,k);k=l}return h.call(g,k,2)}f=g.i;return g.return(Promise.resolve(Object.assign({},wv(b),f)))})}
function wv(a){var b={"Content-Type":"application/json"};R("EOM_VISITOR_DATA")?b["X-Goog-EOM-Visitor-Id"]=R("EOM_VISITOR_DATA"):R("VISITOR_DATA")&&(b["X-Goog-Visitor-Id"]=R("VISITOR_DATA"));b["X-Youtube-Bootstrap-Logged-In"]=R("LOGGED_IN",!1);R("DEBUG_SETTINGS_METADATA")&&(b["X-Debug-Settings-Metadata"]=R("DEBUG_SETTINGS_METADATA"));"cors"!==a&&((a=R("INNERTUBE_CONTEXT_CLIENT_NAME"))&&(b["X-Youtube-Client-Name"]=a),(a=R("INNERTUBE_CONTEXT_CLIENT_VERSION"))&&(b["X-Youtube-Client-Version"]=a),(a=R("CHROME_CONNECTED_HEADER"))&&
(b["X-Youtube-Chrome-Connected"]=a),(a=R("DOMAIN_ADMIN_STATE"))&&(b["X-Youtube-Domain-Admin-State"]=a));return b}
;var Av=new xr("INNERTUBE_TRANSPORT_TOKEN");var Bv=["share/get_web_player_share_panel"],Cv=["feedback"],Dv=["notification/modify_channel_preference"],Ev=["browse/edit_playlist"],Fv=["subscription/subscribe"],Gv=["subscription/unsubscribe"];function Hv(){}
w(Hv,au);Hv.prototype.j=function(){return Fv};
Hv.prototype.i=function(a){return as(a,Mk)||void 0};
Hv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params);c.botguardResponse&&(a.botguardResponse=c.botguardResponse);c.feature&&(a.clientFeature=c.feature)};
ha.Object.defineProperties(Hv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Iv(){}
w(Iv,au);Iv.prototype.j=function(){return Gv};
Iv.prototype.i=function(a){return as(a,Lk)||void 0};
Iv.prototype.h=function(a,b){b.channelIds&&(a.channelIds=b.channelIds);b.siloName&&(a.siloName=b.siloName);b.params&&(a.params=b.params)};
ha.Object.defineProperties(Iv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Jv(){}
w(Jv,au);Jv.prototype.j=function(){return Cv};
Jv.prototype.i=function(a){return as(a,Gk)||void 0};
Jv.prototype.h=function(a,b,c){a.feedbackTokens=[];b.feedbackToken&&a.feedbackTokens.push(b.feedbackToken);if(b=b.cpn||c.cpn)a.feedbackContext={cpn:b};a.isFeedbackTokenUnencrypted=!!c.is_feedback_token_unencrypted;a.shouldMerge=!1;c.extra_feedback_tokens&&(a.shouldMerge=!0,a.feedbackTokens=a.feedbackTokens.concat(c.extra_feedback_tokens))};
ha.Object.defineProperties(Jv.prototype,{l:{configurable:!0,enumerable:!0,get:function(){return!0}}});function Kv(){}
w(Kv,au);Kv.prototype.j=function(){return Dv};
Kv.prototype.i=function(a){return as(a,Kk)||void 0};
Kv.prototype.h=function(a,b){b.params&&(a.params=b.params);b.secondaryParams&&(a.secondaryParams=b.secondaryParams)};function Lv(){}
w(Lv,au);Lv.prototype.j=function(){return Ev};
Lv.prototype.i=function(a){return as(a,Jk)||void 0};
Lv.prototype.h=function(a,b){b.actions&&(a.actions=b.actions);b.params&&(a.params=b.params);b.playlistId&&(a.playlistId=b.playlistId)};function Mv(){}
w(Mv,au);Mv.prototype.j=function(){return Bv};
Mv.prototype.i=function(a){return as(a,Ik)};
Mv.prototype.h=function(a,b,c){c=void 0===c?{}:c;b.serializedShareEntity&&(a.serializedSharedEntity=b.serializedShareEntity);c.includeListId&&(a.includeListId=!0)};var Nv=new xr("NETWORK_SLI_TOKEN");function Ov(a){this.h=a}
Ov.prototype.fetch=function(a,b,c){var d=this,e;return A(function(f){e=Pv(d,a,b);return f.return(fetch(e).then(function(g){return d.handleResponse(g,c)}).catch(function(g){Vs(g)}))})};
function Pv(a,b,c){if(a.h){var d=ac(bc(5,mc(b,"key")))||"/UNKNOWN_PATH";a.h.start(d)}a=c;T("wug_networking_gzip_request")&&(a=Op(c));return new window.Request(b,a)}
Ov.prototype.handleResponse=function(a,b){var c=a.text().then(function(d){return(null==b?0:b.se)&&a.ok?fg(b.se,d):JSON.parse(d.replace(")]}'",""))});
a.redirected||a.ok?this.h&&this.h.success():(this.h&&this.h.Vf(),c=c.then(function(d){Vs(new V("Error: API fetch failed",a.status,a.url,d));return Object.assign({},d,{errorMetadata:{status:a.status}})}));
return c};
Ov[wr]=[new yr(Nv)];var Qv=new xr("NETWORK_MANAGER_TOKEN");var Rv;function Sv(){var a,b,c;return A(function(d){if(1==d.h)return a=Er().resolve(Av),a?d.yield(vv(a),2):(Vs(Error("InnertubeTransportService unavailable in fetchDatasyncIds")),d.return(void 0));if(b=d.i){if(b.errorMetadata)return Vs(Error("Datasync IDs fetch responded with "+b.errorMetadata.status+": "+b.error)),d.return(void 0);c=b.Tf;return d.return(c)}Vs(Error("Network request to get Datasync IDs failed."));return d.return(void 0)})}
;var Tv=C.caches,Uv;function Vv(a){var b=a.indexOf(":");return-1===b?{sd:a}:{sd:a.substring(0,b),datasyncId:a.substring(b+1)}}
function Wv(){return A(function(a){if(void 0!==Uv)return a.return(Uv);Uv=new Promise(function(b){var c;return A(function(d){switch(d.h){case 1:return Ba(d,2),d.yield(Tv.open("test-only"),4);case 4:return d.yield(Tv.delete("test-only"),5);case 5:d.h=3;d.l=0;break;case 2:if(c=Ca(d),c instanceof Error&&"SecurityError"===c.name)return b(!1),d.return();case 3:b("caches"in window),d.h=0}})});
return a.return(Uv)})}
function Xv(a){var b,c,d,e,f,g,h;A(function(k){if(1==k.h)return k.yield(Wv(),2);if(3!=k.h){if(!k.i)return k.return(!1);b=[];return k.yield(Tv.keys(),3)}c=k.i;d=v(c);for(e=d.next();!e.done;e=d.next())f=e.value,g=Vv(f),h=g.datasyncId,!h||a.includes(h)||b.push(Tv.delete(f));return k.return(Promise.all(b).then(function(l){return l.some(function(n){return n})}))})}
function Yv(){var a,b,c,d,e,f,g;return A(function(h){if(1==h.h)return h.yield(Wv(),2);if(3!=h.h){if(!h.i)return h.return(!1);a=tm("cache contains other");return h.yield(Tv.keys(),3)}b=h.i;c=v(b);for(d=c.next();!d.done;d=c.next())if(e=d.value,f=Vv(e),(g=f.datasyncId)&&g!==a)return h.return(!0);return h.return(!1)})}
;function Zv(){Sv().then(function(a){a&&(Bo(a),Xv(a),vu(a))})}
function $v(){var a=new Gq;wi.qa(function(){var b,c,d,e;return A(function(f){switch(f.h){case 1:if(T("ytidb_clear_optimizations_killswitch")){f.B(2);break}b=tm("clear");if(b.startsWith("V")&&b.endsWith("||")){var g=[b];Bo(g);Xv(g);vu(g);return f.return()}c=wu();return f.yield(Yv(),3);case 3:return d=f.i,f.yield(Co(),4);case 4:if(e=f.i,!c&&!d&&!e)return f.return();case 2:a.wa()?Zv():a.h.add("publicytnetworkstatus-online",Zv,!0,void 0,void 0),f.h=0}})})}
;var ci=ka(["data-"]);function aw(a){a&&(a.dataset?a.dataset[bw()]="true":bi(a))}
function cw(a){return a?a.dataset?a.dataset[bw()]:a.getAttribute("data-loaded"):null}
var dw={};function bw(){return dw.loaded||(dw.loaded="loaded".replace(/\-([a-z])/g,function(a,b){return b.toUpperCase()}))}
;var ew=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,fw=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function gw(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(ew,""),c=c.replace(fw,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else hw(a,b,c)}
function hw(a,b,c){c=void 0===c?null:c;var d=iw(a),e=document.getElementById(d),f=e&&cw(e),g=e&&!f;f?b&&b():(b&&(f=qr(d,b),b=""+Ra(b),jw[b]=f),g||(e=kw(a,d,function(){cw(e)||(aw(e),tr(d),sl(function(){ur(d)},0))},c)))}
function kw(a,b,c,d){d=void 0===d?null:d;var e=xd("SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);ji(e,xk(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function lw(a){a=iw(a);var b=document.getElementById(a);b&&(ur(a),b.parentNode.removeChild(b))}
function mw(a,b){a&&b&&(a=""+Ra(b),(a=jw[a])&&sr(a))}
function iw(a){var b=document.createElement("a");Zh(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Zb(a)}
var jw={};var nw=[],ow=!1;function pw(){if(!T("disable_biscotti_fetch_for_ad_blocker_detection")&&!T("disable_biscotti_fetch_entirely_for_all_web_clients")&&Bt()){var a=R("PLAYER_VARS",{});if("1"!=rb(a)&&!Ct(a)){var b=function(){ow=!0;"google_ad_status"in window?Vk("DCLKSTAT",1):Vk("DCLKSTAT",2)};
try{gw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}nw.push(wi.qa(function(){if(!(ow||"google_ad_status"in window)){try{mw("//static.doubleclick.net/instream/ad_status.js",b)}catch(c){}ow=!0;Vk("DCLKSTAT",3)}},5E3))}}}
function qw(){var a=Number(R("DCLKSTAT",0));return isNaN(a)?0:a}
;function rw(a){Nr.call(this,void 0===a?"document_active":a);var b=this;this.l=10;this.h=new Map;this.transitions=[{from:"document_active",to:"document_disposed_preventable",action:this.D},{from:"document_active",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"document_disposed",action:this.v},{from:"document_disposed_preventable",to:"flush_logs",action:this.m},{from:"document_disposed_preventable",to:"document_active",action:this.i},{from:"document_disposed",to:"flush_logs",
action:this.m},{from:"document_disposed",to:"document_active",action:this.i},{from:"document_disposed",to:"document_disposed",action:function(){}},
{from:"flush_logs",to:"document_active",action:this.i}];window.addEventListener("pagehide",function(c){b.transition("document_disposed",{event:c})});
window.addEventListener("beforeunload",function(c){b.transition("document_disposed_preventable",{event:c})})}
w(rw,Nr);rw.prototype.D=function(a,b){if(!this.h.get("document_disposed_preventable")){a(null==b?void 0:b.event);var c,d;if((null==b?0:null==(c=b.event)?0:c.defaultPrevented)||(null==b?0:null==(d=b.event)?0:d.returnValue)){b.event.returnValue||(b.event.returnValue=!0);b.event.defaultPrevented||b.event.preventDefault();this.h=new Map;this.transition("document_active");return}}this.h.set("document_disposed_preventable",!0);this.h.get("document_disposed")?this.transition("flush_logs"):this.transition("document_disposed")};
rw.prototype.v=function(a,b){this.h.get("document_disposed")?this.transition("document_active"):(a(null==b?void 0:b.event),this.h.set("document_disposed",!0),this.transition("flush_logs"))};
rw.prototype.m=function(a,b){a(null==b?void 0:b.event);this.transition("document_active")};
rw.prototype.i=function(){this.h=new Map};function sw(a){Nr.call(this,void 0===a?"document_visibility_unknown":a);var b=this;this.transitions=[{from:"document_visibility_unknown",to:"document_visible",action:this.i},{from:"document_visibility_unknown",to:"document_hidden",action:this.h},{from:"document_visibility_unknown",to:"document_foregrounded",action:this.m},{from:"document_visibility_unknown",to:"document_backgrounded",action:this.v},{from:"document_visible",to:"document_hidden",action:this.h},{from:"document_visible",to:"document_foregrounded",
action:this.m},{from:"document_visible",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_visible",action:this.i},{from:"document_foregrounded",to:"document_hidden",action:this.h},{from:"document_foregrounded",to:"document_foregrounded",action:this.m},{from:"document_hidden",to:"document_visible",action:this.i},{from:"document_hidden",to:"document_backgrounded",action:this.v},{from:"document_hidden",to:"document_hidden",action:this.h},{from:"document_backgrounded",to:"document_hidden",
action:this.h},{from:"document_backgrounded",to:"document_backgrounded",action:this.v},{from:"document_backgrounded",to:"document_visible",action:this.i}];document.addEventListener("visibilitychange",function(c){"visible"===document.visibilityState?b.transition("document_visible",{event:c}):b.transition("document_hidden",{event:c})});
T("visibility_lifecycles_dynamic_backgrounding")&&(window.addEventListener("blur",function(c){b.transition("document_backgrounded",{event:c})}),window.addEventListener("focus",function(c){b.transition("document_foregrounded",{event:c})}))}
w(sw,Nr);sw.prototype.i=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_foregrounded")};
sw.prototype.h=function(a,b){a(null==b?void 0:b.event);T("visibility_lifecycles_dynamic_backgrounding")&&this.transition("document_backgrounded")};
sw.prototype.v=function(a,b){a(null==b?void 0:b.event)};
sw.prototype.m=function(a,b){a(null==b?void 0:b.event)};function tw(){this.l=new rw;this.v=new sw}
tw.prototype.install=function(){var a=B.apply(0,arguments),b=this;a.forEach(function(c){b.l.install(c)});
a.forEach(function(c){b.v.install(c)})};function uw(){this.l=[];this.i=new Map;this.h=new Map;this.j=new Set}
uw.prototype.clickCommand=function(a,b,c){var d=a.clickTrackingParams;c=void 0===c?0:c;if(d)if(c=nt(void 0===c?0:c)){a=this.client;d=new ft({trackingParams:d});var e=void 0;if(T("no_client_ve_attach_unless_shown")){var f=qu(d,c);mu.set(f,!0);ru(d,c)}e=e||"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";f=pu({cttAuthInfo:pt(c)||void 0},c);d={csn:c,ve:d.getAsJson(),gestureType:e};b&&(d.clientData=b);"UNDEFINED_CSN"===c?su("visualElementGestured",f,d):a?Ns("visualElementGestured",d,a,f):mn("visualElementGestured",
d,f);b=!0}else b=!1;else b=!1;return b};
uw.prototype.stateChanged=function(a,b,c){this.visualElementStateChanged(new ft({trackingParams:a}),b,void 0===c?0:c)};
uw.prototype.visualElementStateChanged=function(a,b,c){c=void 0===c?0:c;if(0===c&&this.j.has(c))this.l.push([a,b]);else{var d=c;d=void 0===d?0:d;c=nt(d);a||(a=(a=kt(void 0===d?0:d))?new ft({veType:a,youtubeData:void 0,jspbYoutubeData:void 0}):null);var e=a;c&&e&&(a=this.client,d=pu({cttAuthInfo:pt(c)||void 0},c),b={csn:c,ve:e.getAsJson(),clientData:b},"UNDEFINED_CSN"===c?su("visualElementStateChanged",d,b):a?Ns("visualElementStateChanged",b,a,d):mn("visualElementStateChanged",b,d))}};
function vw(a,b){if(void 0===b)for(var c=mt(),d=0;d<c.length;d++)void 0!==c[d]&&vw(a,c[d]);else a.i.forEach(function(e,f){(f=a.h.get(f))&&ou(a.client,b,f,e)}),a.i.clear(),a.h.clear()}
;function ww(){tw.call(this);var a={};this.install((a.document_disposed={callback:this.h},a));T("combine_ve_grafts")&&(a={},this.install((a.document_disposed={callback:this.i},a)));a={};this.install((a.flush_logs={callback:this.j},a))}
w(ww,tw);ww.prototype.j=function(){mn("finalPayload",{csn:nt()})};
ww.prototype.h=function(){Zs($s)};
ww.prototype.i=function(){var a=vw;uw.h||(uw.h=new uw);a(uw.h)};function xw(){}
function yw(){var a=E("ytglobal.storage_");a||(a=new xw,D("ytglobal.storage_",a));return a}
xw.prototype.estimate=function(){var a,b,c;return A(function(d){a=navigator;return(null==(b=a.storage)?0:b.estimate)?d.return(a.storage.estimate()):(null==(c=a.webkitTemporaryStorage)?0:c.queryUsageAndQuota)?d.return(zw()):d.return()})};
function zw(){var a=navigator;return new Promise(function(b,c){var d;null!=(d=a.webkitTemporaryStorage)&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
D("ytglobal.storageClass_",xw);function kn(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=U("ytidb_transaction_ended_event_rate_limit_session",.2)}
kn.prototype.Jb=function(a){this.handleError(a)};
kn.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":T("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":T("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Aw(this,b);break;case "TRANSACTION_ENDED":this.j&&Math.random()<=U("ytidb_transaction_ended_event_rate_limit_transaction",.1)&&this.h("idbTransactionEnded",
b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign({},b,{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Aw(a,b){yw().estimate().then(function(c){c=Object.assign({},b,{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Bw(null==c?void 0:c.usage),deviceStorageQuotaMbytes:Bw(null==c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Bw(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;function Cw(a,b,c){H.call(this);var d=this;c=c||R("POST_MESSAGE_ORIGIN")||window.document.location.protocol+"//"+window.document.location.hostname;this.i=b||null;this.targetOrigin="*";this.j=c;this.sessionId=null;this.channel="widget";this.D=!!a;this.A=function(e){a:if(!("*"!=d.j&&e.origin!=d.j||d.i&&e.source!=d.i||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.D&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.j=d.targetOrigin=e.origin);d.i=e.source;d.sessionId=f.id;d.h&&(d.h(),d.h=null);break;case "command":d.l&&(!d.m||0<=eb(d.m,f.func))&&d.l(f.func,f.args,e.origin)}}};
this.m=this.h=this.l=null;window.addEventListener("message",this.A)}
w(Cw,H);Cw.prototype.sendMessage=function(a,b){if(b=b||this.i){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.targetOrigin)}catch(d){al(d)}}};
Cw.prototype.S=function(){window.removeEventListener("message",this.A);H.prototype.S.call(this)};function Dw(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Cw(!!R("WIDGET_ID_ENFORCE")),b=this.Fe.bind(this);a.l=b;a.m=null;this.h.channel="widget";if(a=R("WIDGET_ID"))this.h.sessionId=a}
m=Dw.prototype;m.Fe=function(a,b,c){"addEventListener"===a&&b?this.Dc(b[0],c):this.Vc(a,b,c)};
m.Vc=function(){};
m.wc=function(a){var b=this;return function(c){return b.sendMessage(a,c)}};
m.Dc=function(a,b){this.j[a]||"onReady"===a||(this.addEventListener(a,this.wc(a,b)),this.j[a]=!0)};
m.addEventListener=function(){};
m.ce=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.zc());this.sendMessage("onReady");fb(this.i,this.Ad,this);this.i=[]};
m.zc=function(){return null};
function Ew(a,b){a.sendMessage("infoDelivery",b)}
m.Ad=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.Ad({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};var Fw={},Gw=(Fw["api.invalidparam"]=2,Fw.auth=150,Fw["drm.auth"]=150,Fw["heartbeat.net"]=150,Fw["heartbeat.servererror"]=150,Fw["heartbeat.stop"]=150,Fw["html5.unsupportedads"]=5,Fw["fmt.noneavailable"]=5,Fw["fmt.decode"]=5,Fw["fmt.unplayable"]=5,Fw["html5.missingapi"]=5,Fw["html5.unsupportedlive"]=5,Fw["drm.unavailable"]=5,Fw["mrm.blocked"]=151,Fw);var Hw=new Set("endSeconds startSeconds mediaContentUrl suggestedQuality videoId rct rctn".split(" "));function Iw(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Jw(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b={};c=v(Hw);for(var d=c.next();!d.done;d=c.next())d=d.value,a[d]&&(b[d]=a[d]);return b}
function Kw(a,b,c,d){if(Qa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Lw(a){Dw.call(this);this.listeners=[];this.l=!1;this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.Se.bind(this));this.addEventListener("onVolumeChange",this.Te.bind(this));this.addEventListener("onApiChange",this.Ne.bind(this));this.addEventListener("onPlaybackQualityChange",this.Pe.bind(this));this.addEventListener("onPlaybackRateChange",this.Qe.bind(this));this.addEventListener("onStateChange",this.Re.bind(this));this.addEventListener("onWebglSettingsChanged",
this.Ue.bind(this))}
w(Lw,Dw);m=Lw.prototype;
m.Vc=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Iw(a)){var d=b;if(Qa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Jw(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Jw(e);break;case "loadPlaylist":case "cuePlaylist":e=Kw(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Iw(a)&&Ew(this,this.zc())}};
m.Dc=function(a,b){"onReady"===a?this.api.logApiCall(a+" invocation",b):"onError"===a&&this.l&&(this.api.logApiCall(a+" invocation",b,this.errorCode),this.errorCode=void 0);this.api.logApiCall(a+" registration",b);Dw.prototype.Dc.call(this,a,b)};
m.wc=function(a,b){var c=this,d=Dw.prototype.wc.call(this,a,b);return function(e){"onError"===a?c.api.logApiCall(a+" invocation",b,e):c.api.logApiCall(a+" invocation",b);d(e)}};
m.onReady=function(){var a=this.h,b=this.ce.bind(this);a.h=b;a=this.api.getVideoData();if(!a.isPlayable){this.l=!0;a=a.errorCode;var c=void 0===c?5:c;this.errorCode=a?Gw[a]||c:c;this.sendMessage("onError",this.errorCode.toString())}};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.zc=function(){if(!this.api)return null;var a=this.api.getApiInterface();kb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Re=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Ew(this,a)};
m.Pe=function(a){Ew(this,{playbackQuality:a})};
m.Qe=function(a){Ew(this,{playbackRate:a})};
m.Ne=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);a.join(", ");b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Te=function(){Ew(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.Se=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Ew(this,a)};
m.Ue=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Ew(this,a)};
m.dispose=function(){Dw.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Mw(a){H.call(this);this.h={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.wd,this)}
w(Mw,H);m=Mw.prototype;m.start=function(){this.started||this.Z()||(this.started=!0,this.connection.jb("RECEIVING"))};
m.jb=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,b)};
m.wd=function(a,b,c){if(this.started&&!this.Z()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Nw(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Ow(a,c))&&this.jb(a,c))}}};
m.addListener=function(a){if(!(a in this.h)){var b=this.Oe.bind(this,a);this.h[a]=b;this.addEventListener(a,b)}};
m.Oe=function(a,b){this.started&&!this.Z()&&this.connection.jb(a,this.yc(a,b))};
m.yc=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.h&&(this.removeEventListener(a,this.h[a]),delete this.h[a])};
m.S=function(){this.connection.unsubscribe("command",this.wd,this);this.connection=null;for(var a in this.h)this.h.hasOwnProperty(a)&&this.removeListener(a);H.prototype.S.call(this)};function Pw(a,b){Mw.call(this,b);this.api=a;this.start()}
w(Pw,Mw);Pw.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Pw.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Nw(a,b){switch(a){case "loadVideoById":return a=Jw(b),[a];case "cueVideoById":return a=Jw(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Kw(b),[a];case "cuePlaylist":return a=Kw(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Ow(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Pw.prototype.yc=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Mw.prototype.yc.call(this,a,b)};
Pw.prototype.S=function(){Mw.prototype.S.call(this);delete this.api};function Qw(a){a=void 0===a?!1:a;H.call(this);this.h=new L(a);tc(this,this.h)}
Za(Qw,H);Qw.prototype.subscribe=function(a,b,c){return this.Z()?0:this.h.subscribe(a,b,c)};
Qw.prototype.unsubscribe=function(a,b,c){return this.Z()?!1:this.h.unsubscribe(a,b,c)};
Qw.prototype.l=function(a,b){this.Z()||this.h.Ya.apply(this.h,arguments)};function Rw(a,b,c){Qw.call(this);this.j=a;this.i=b;this.id=c}
w(Rw,Qw);Rw.prototype.jb=function(a,b){this.Z()||this.j.jb(this.i,this.id,a,b)};
Rw.prototype.S=function(){this.i=this.j=null;Qw.prototype.S.call(this)};function Sw(a,b,c){H.call(this);this.h=a;this.origin=c;this.i=br(window,"message",this.j.bind(this));this.connection=new Rw(this,a,b);tc(this,this.connection)}
w(Sw,H);Sw.prototype.jb=function(a,b,c,d){this.Z()||a!==this.h||(a={id:b,command:c},d&&(a.data=d),this.h.postMessage(JSON.stringify(a),this.origin))};
Sw.prototype.j=function(a){if(!this.Z()&&a.origin===this.origin){var b=a.data;if("string"===typeof b){try{b=JSON.parse(b)}catch(d){return}if(b.command){var c=this.connection;c.Z()||c.l("command",b.command,b.data,a.origin)}}}};
Sw.prototype.S=function(){cr(this.i);this.h=null;H.prototype.S.call(this)};function Tw(){this.state=1;this.h=null}
m=Tw.prototype;m.initialize=function(a,b,c){if(a.program){var d,e=null!=(d=a.interpreterUrl)?d:null;if(a.interpreterSafeScript){var f=a.interpreterSafeScript;f?((f=f.privateDoNotAccessOrElseSafeScriptWrappedValue)?(f=(d=yb())?d.createScript(f):f,d=new Yb,d.ud=f,f=d):f=null,d=f):d=null}else d=null!=(f=a.interpreterScript)?f:null;a.interpreterSafeUrl&&(e=wk(a.interpreterSafeUrl).toString());Uw(this,d,e,a.program,b,c)}else Vs(Error("Cannot initialize botguard without program"))};
function Uw(a,b,c,d,e,f){var g=void 0===g?"trayride":g;c?(a.state=2,gw(c,function(){window[g]?Vw(a,d,g,e):(a.state=3,lw(c),Vs(new V("Unable to load Botguard","from "+c)))},f)):b?(f=xd("SCRIPT"),b instanceof Yb?ii(f,b):f.textContent=b,f.nonce=gi(window),document.head.appendChild(f),document.head.removeChild(f),window[g]?Vw(a,d,g,e):(a.state=4,Vs(new V("Unable to load Botguard from JS")))):Vs(new V("Unable to load VM; no url or JS provided"))}
m.isLoading=function(){return 2===this.state};
function Vw(a,b,c,d){a.state=5;try{var e=new Nh({program:b,he:c,Ge:T("att_web_record_metrics")});e.Xe.then(function(){a.state=6;d&&d(b)});
a.Qc(e)}catch(f){a.state=7,f instanceof Error&&Vs(f)}}
m.invoke=function(a){a=void 0===a?{}:a;return this.Tc()?this.Jd({cd:a}):null};
m.dispose=function(){this.Qc(null);this.state=8};
m.Tc=function(){return!!this.h};
m.Jd=function(a){return this.h.Dd(a)};
m.Qc=function(a){rc(this.h);this.h=a};function Ww(){var a=E("yt.abuse.playerAttLoader");return a&&["bgvma","bgvmb","bgvmc"].every(function(b){return b in a})?a:null}
;function Xw(){Tw.apply(this,arguments)}
w(Xw,Tw);Xw.prototype.Qc=function(a){var b;null==(b=Ww())||b.bgvma();a?(b={bgvma:a.dispose.bind(a),bgvmb:a.snapshot.bind(a),bgvmc:a.Dd.bind(a)},D("yt.abuse.playerAttLoader",b),D("yt.abuse.playerAttLoaderRun",function(c){return a.snapshot(c)})):(D("yt.abuse.playerAttLoader",null),D("yt.abuse.playerAttLoaderRun",null))};
Xw.prototype.Tc=function(){return!!Ww()};
Xw.prototype.Jd=function(a){return Ww().bgvmc(a)};var Yw=new Xw;function Zw(){return Yw.Tc()}
function $w(a){a=void 0===a?{}:a;return Yw.invoke(a)}
;function ax(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||tb(b);this.assets=a.assets||{};this.attrs=a.attrs||tb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
ax.prototype.clone=function(){var a=new ax,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Oa(c)?a[b]=tb(c):a[b]=c}return a};var bx=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function cx(a){a=a||"";if(window.spf){var b=a.match(bx);spf.style.load(a,b?b[1]:"",void 0)}else dx(a)}
function dx(a){var b=ex(a),c=document.getElementById(b),d=c&&cw(c);d||c&&!d||(c=fx(a,b,function(){if(!cw(c)){aw(c);tr(b);var e=Xa(ur,b);sl(e,0)}}))}
function fx(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=xk(a);fi(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function ex(a){var b=xd("A");Zh(b,new Gb(a,Hb));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Zb(a)}
;function gx(a,b,c,d,e){H.call(this);var f=this;this.A=b;this.webPlayerContextConfig=d;this.pc=e;this.Pa=!1;this.api={};this.ga=this.m=null;this.T=new L;this.h={};this.ba=this.ka=this.elementId=this.Za=this.config=null;this.X=!1;this.j=this.D=null;this.Ba={};this.qc=["onReady"];this.lastError=null;this.Qb=NaN;this.P={};this.ea=0;this.i=this.l=a;tc(this,this.T);hx(this);c?this.ea=setTimeout(function(){f.loadNewVideoConfig(c)},0):d&&(ix(this),jx(this))}
w(gx,H);m=gx.prototype;m.getId=function(){return this.A};
m.loadNewVideoConfig=function(a){if(!this.Z()){this.ea&&(clearTimeout(this.ea),this.ea=0);var b=a||{};b instanceof ax||(b=new ax(b));this.config=b;this.setConfig(a);jx(this);this.isReady()&&kx(this)}};
function ix(a){var b;a.webPlayerContextConfig?b=a.webPlayerContextConfig.rootElementId:b=a.config.attrs.id;a.elementId=b||a.elementId;"video-player"===a.elementId&&(a.elementId=a.A,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.A:a.config.attrs.id=a.A);var c;(null==(c=a.i)?void 0:c.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){this.Za=a;this.config=lx(a);ix(this);if(!this.ka){var b;this.ka=mx(this,(null==(b=this.config.args)?void 0:b.jsapicallback)||"onYouTubePlayerReady")}this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null==(c=this.config)?0:c.attrs)a=this.config.attrs,(b=a.width)&&this.i&&(this.i.style.width=qi(Number(b)||b)),(a=a.height)&&this.i&&(this.i.style.height=qi(Number(a)||a))};
function kx(a){if(a.config&&!0!==a.config.loaded)if(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay){var b;a.api.loadVideoByPlayerVars(null!=(b=a.config.args)?b:null)}else a.api.cueVideoByPlayerVars(a.config.args)}
function nx(a){var b=!0,c=ox(a);c&&a.config&&(b=c.dataset.version===px(a));return b&&!!E("yt.player.Application.create")}
function jx(a){if(!a.Z()&&!a.X){var b=nx(a);if(b&&"html5"===(ox(a)?"html5":null))a.ba="html5",a.isReady()||qx(a);else if(rx(a),a.ba="html5",b&&a.j&&a.l)a.l.appendChild(a.j),qx(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.D=function(){c=!0;var d=sx(a,"player_bootstrap_method")?E("yt.player.Application.createAlternate")||E("yt.player.Application.create"):E("yt.player.Application.create");var e=a.config?lx(a.config):void 0;d&&d(a.l,e,a.webPlayerContextConfig,a.pc);qx(a)};
a.X=!0;b?a.D():(gw(px(a),a.D),(b=tx(a))&&cx(b),ux(a)&&!c&&D("yt.player.Application.create",null))}}}
function ox(a){var b=wd(a.elementId);!b&&a.i&&a.i.querySelector&&(b=a.i.querySelector("#"+a.elementId));return b}
function qx(a){if(!a.Z()){var b=ox(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);if(c){a.X=!1;if(!sx(a,"html5_remove_not_servable_check_killswitch")){var d;if((null==b?0:b.isNotServable)&&a.config&&(null==b?0:b.isNotServable(null==(d=a.config.args)?void 0:d.video_id)))return}vx(a)}else a.Qb=setTimeout(function(){qx(a)},50)}}
function vx(a){hx(a);a.Pa=!0;var b=ox(a);if(b){a.m=wx(a,b,"addEventListener");a.ga=wx(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=wx(a,b,f))}}for(var g in a.h)a.h.hasOwnProperty(g)&&a.m&&a.m(g,a.h[g]);kx(a);a.ka&&a.ka(a.api);a.T.Ya("onReady",a.api)}
function wx(a,b,c){var d=b[c];return function(){var e=B.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){if("sendAbandonmentPing"!==c)throw f.params=c,a.lastError=f,e=new V("PlayerProxy error in method call",{error:f,method:c,playerId:a.A}),e.level="WARNING",e;}}}
function hx(a){a.Pa=!1;if(a.ga)for(var b in a.h)a.h.hasOwnProperty(b)&&a.ga(b,a.h[b]);for(var c in a.P)a.P.hasOwnProperty(c)&&clearTimeout(Number(c));a.P={};a.m=null;a.ga=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Za};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Pa};
m.addEventListener=function(a,b){var c=this,d=mx(this,b);d&&(0<=eb(this.qc,a)||this.h[a]||(b=xx(this,a),this.m&&this.m(a,b)),this.T.subscribe(a,d),"onReady"===a&&this.isReady()&&setTimeout(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.Z()||(b=mx(this,b))&&this.T.unsubscribe(a,b)};
function mx(a,b){var c=b;if("string"===typeof b){if(a.Ba[b])return a.Ba[b];c=function(){var d=B.apply(0,arguments),e=E(b);if(e)try{e.apply(C,d)}catch(f){throw d=new V("PlayerProxy error when executing callback",{error:f}),d.level="ERROR",d;}};
a.Ba[b]=c}return c?c:null}
function xx(a,b){function c(d){var e=setTimeout(function(){if(!a.Z()){try{a.T.Ya(b,null!=d?d:void 0)}catch(h){var f=new V("PlayerProxy error when creating global callback",{error:h.message,event:b,playerId:a.A,data:d,originalStack:h.stack});f.level="WARNING";throw f;}f=a.P;var g=String(e);g in f&&delete f[g]}},0);
qb(a.P,String(e))}
return a.h[b]=c}
m.getPlayerType=function(){return this.ba||(ox(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function rx(a){a.cancel();hx(a);a.ba=null;a.config&&(a.config.loaded=!1);var b=ox(a);b&&(nx(a)||!ux(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));if(a.l)for(a=a.l;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.D&&mw(px(this),this.D);clearTimeout(this.Qb);this.X=!1};
m.S=function(){rx(this);if(this.j&&this.config&&this.j.destroy)try{this.j.destroy()}catch(b){var a=new V("PlayerProxy error during disposal",{error:b});a.level="ERROR";throw a;}this.Ba=null;for(a in this.h)this.h.hasOwnProperty(a)&&delete this.h[a];this.Za=this.config=this.api=null;delete this.l;delete this.i;H.prototype.S.call(this)};
function ux(a){var b,c;a=null==(b=a.config)?void 0:null==(c=b.args)?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function px(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function tx(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function sx(a,b){if(a.webPlayerContextConfig)var c=a.webPlayerContextConfig.serializedExperimentFlags;else{var d;if(null==(d=a.config)?0:d.args)c=a.config.args.fflags}return(c||"").split("&").includes(b+"=true")}
function lx(a){for(var b={},c=v(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?tb(e):e}return b}
;var yx={},zx="player_uid_"+(1E9*Math.random()>>>0);function Ax(a,b){var c="player",d=!1;d=void 0===d?!0:d;c="string"===typeof c?wd(c):c;var e=zx+"_"+Ra(c),f=yx[e];if(f&&d)return Bx(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new gx(c,e,a,b,void 0);yx[e]=f;f.addOnDisposeCallback(function(){delete yx[f.getId()]});
return f.api}
function Bx(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Cx=null,Dx=null,Ex=null;
function Fx(){pv();var a=im(),b=lm(119),c=1<window.devicePixelRatio;if(document.body&&Gi(document.body,"exp-invert-logo"))if(c&&!Gi(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!Gi(d,"inverted-hdpi")){var e=Ei(d);Fi(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&Gi(document.body,"inverted-hdpi")&&Hi();if(b!=c){b="f"+(Math.floor(119/31)+1);d=mm(b)||0;d=c?d|67108864:d&-67108865;0===d?delete fm[b]:(c=d.toString(16),fm[b]=c.toString());
c=!0;T("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(f in fm)fm.hasOwnProperty(f)&&d.push(f+"="+encodeURIComponent(String(fm[f])));var f=d.join("&");bm(b,f,63072E3,a.i,c)}}
function Gx(){Hx()}
function Ix(){ov("ep_init_pr");Hx()}
function Hx(){var a=Cx.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
function Jx(){Cx&&Cx.sendAbandonmentPing&&Cx.sendAbandonmentPing();R("PL_ATT")&&Yw.dispose();for(var a=wi,b=0,c=nw.length;b<c;b++)a.ra(nw[b]);nw.length=0;lw("//static.doubleclick.net/instream/ad_status.js");ow=!1;Vk("DCLKSTAT",0);sc(Ex,Dx);Cx&&(Cx.removeEventListener("onVideoDataChange",Gx),Cx.destroy())}
;function Kx(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=R("EVENT_ID");d&&(b.ei||(b.ei=d));b&&fu(a,b);if(c)return!1;yu(a);var e=void 0===e?{}:e;var f=void 0===f?"":f;var g=void 0===g?window:g;a=ic(a,e);yu(a);f=a+f;var h=void 0===h?Wh:h;a:if(h=void 0===h?Wh:h,f instanceof Gb)h=f;else{for(a=0;a<h.length;++a)if(b=h[a],b instanceof Uh&&b.re(f)){h=new Gb(f,Hb);break a}h=void 0}g=g.location;h=Yh(h||Ib);void 0!==h&&(g.href=h);return!0}
;D("yt.setConfig",Vk);D("yt.config.set",Vk);D("yt.setMsg",rt);D("yt.msgs.set",rt);D("yt.logging.errors.log",Us);
D("writeEmbed",function(){var a=R("PLAYER_CONFIG");if(!a){var b=R("PLAYER_VARS");b&&(a={args:b})}Lt(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=R("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);lv("embed",["ol"]);c=R("WEB_PLAYER_CONTEXT_CONFIGS").WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER;if(!c.serializedForcedExperimentIds){var d=il(window.location.href);
d.forced_experiments&&(c.serializedForcedExperimentIds=d.forced_experiments)}var e;(null==(e=a.args)?0:e.autoplay)&&lv("watch",["pbs","pbu","pbp"]);Cx=Ax(a,c);Cx.addEventListener("onVideoDataChange",Gx);Cx.addEventListener("onReady",Ix);a=R("POST_MESSAGE_ID","player");R("ENABLE_JS_API")?Ex=new Lw(Cx):R("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Dx=new Sw(window.parent,a,b),Ex=new Pw(Cx,Dx.connection));pw();T("ytidb_create_logger_embed_killswitch")||jn();a={};ww.h||(ww.h=new ww);
ww.h.install((a.flush_logs={callback:function(){As()}},a));
Sq();T("ytidb_clear_embedded_player")&&wi.qa(function(){var f,g;if(!Rv){var h=Er();Ar(h,{lc:Qv,Hd:Ov});var k={bd:{feedbackEndpoint:Wt(Jv),modifyChannelNotificationPreferenceEndpoint:Wt(Kv),playlistEditEndpoint:Wt(Lv),subscribeEndpoint:Wt(Hv),unsubscribeEndpoint:Wt(Iv),webPlayerShareEntityServiceEndpoint:Wt(Mv)}},l=Ut(),n={};l&&(n.client_location=l);void 0===f&&(f=Xl());void 0===g&&(g=h.resolve(Qv));uv(k,g,f,n);Ar(h,{lc:Av,Id:tv.h});Rv=h.resolve(Av)}$v()})});
D("yt.abuse.player.botguardInitialized",E("yt.abuse.player.botguardInitialized")||Zw);D("yt.abuse.player.invokeBotguard",E("yt.abuse.player.invokeBotguard")||$w);D("yt.abuse.dclkstatus.checkDclkStatus",E("yt.abuse.dclkstatus.checkDclkStatus")||qw);D("yt.player.exports.navigate",E("yt.player.exports.navigate")||Kx);D("yt.util.activity.init",E("yt.util.activity.init")||fr);D("yt.util.activity.getTimeSinceActive",E("yt.util.activity.getTimeSinceActive")||lr);
D("yt.util.activity.setTimestamp",E("yt.util.activity.setTimestamp")||gr);window.addEventListener("load",Zk(function(){Fx()}));
window.addEventListener("pageshow",Zk(function(a){a.persisted||Fx()}));
window.addEventListener("pagehide",Zk(function(a){T("embeds_web_enable_dispose_player_if_page_not_cached_killswitch")?Jx():a.persisted||Jx()}));
window.onerror=function(a,b,c,d,e){b=void 0===b?"Unknown file":b;c=void 0===c?0:c;var f=!1,g=Wk("log_window_onerror_fraction");if(g&&Math.random()<g)f=!0;else{g=document.getElementsByTagName("script");for(var h=0,k=g.length;h<k;h++)if(0<g[h].src.indexOf("/debug-")){f=!0;break}}f&&(f=!1,e?f=!0:("string"===typeof a?g=a:ErrorEvent&&a instanceof ErrorEvent?(f=!0,g=a.message,b=a.filename,c=a.lineno,d=a.colno):(g="Unknown error",b="Unknown file",c=0),e=new V(g),e.name="UnhandledWindowError",e.message=g,
e.fileName=b,e.lineNumber=c,isNaN(d)?delete e.columnNumber:e.columnNumber=d),f?Us(e):Vs(e))};
ae=Ws;window.addEventListener("unhandledrejection",function(a){Ws(a.reason)});
fb(R("ERRORS")||[],function(a){Us.apply(null,a)});
Vk("ERRORS",[]);T("embeds_web_enable_scheduler_to_player_binary")&&$m();}).call(this);
