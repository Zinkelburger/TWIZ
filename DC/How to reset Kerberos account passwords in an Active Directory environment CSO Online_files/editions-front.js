/*! Copyright (c) 2024 Big Bite® | bigbite.net | @bigbite */!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n.h="5f6eef4e06e37d556a73",n.cn="editions-front",n(n.s=137)}([function(t,e,n){var r=n(2),o=n(37),i=n(3),a=n(38),c=n(40),u=n(61),s=o("wks"),f=r.Symbol,l=u?f:f&&f.withoutSetter||a;t.exports=function(t){return i(s,t)||(c&&i(f,t)?s[t]=f[t]:s[t]=l("Symbol."+t)),s[t]}},function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,e,n){(function(e){var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")()}).call(this,n(79))},function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){var r=n(9),o=n(8),i=n(12);t.exports=r?function(t,e,n){return o.f(t,e,i(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(2),o=n(24).f,i=n(6),a=n(10),c=n(33),u=n(71),s=n(74);t.exports=function(t,e){var n,f,l,p,d,v=t.target,h=t.global,y=t.stat;if(n=h?r:y?r[v]||c(v,{}):(r[v]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(d=o(n,f))&&d.value:n[f],!s(h?f:v+(y?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;u(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(n,f,p,t)}}},function(t,e,n){var r=n(9),o=n(49),i=n(4),a=n(22),c=Object.defineProperty;e.f=r?c:function(t,e,n){if(i(t),e=a(e,!0),i(n),o)try{return c(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(1);t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},function(t,e,n){var r=n(2),o=n(6),i=n(3),a=n(33),c=n(51),u=n(16),s=u.get,f=u.enforce,l=String(String).split("String");(t.exports=function(t,e,n,c){var u=!!c&&!!c.unsafe,s=!!c&&!!c.enumerable,p=!!c&&!!c.noTargetGet;"function"==typeof n&&("string"!=typeof e||i(n,"name")||o(n,"name",e),f(n).source=l.join("string"==typeof e?e:"")),t!==r?(u?!p&&t[e]&&(s=!0):delete t[e],s?t[e]=n:o(t,e,n)):s?t[e]=n:a(e,n)})(Function.prototype,"toString",(function(){return"function"==typeof this&&s(this).source||c(this)}))},function(t,e,n){var r=n(58),o=n(21);t.exports=function(t){return r(o(t))}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e,n){var r=n(21);t.exports=function(t){return Object(r(t))}},function(t,e){t.exports={}},function(t,e,n){var r=n(59),o=n(2),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][e]||o[t]&&o[t][e]}},function(t,e,n){var r,o,i,a=n(80),c=n(2),u=n(5),s=n(6),f=n(3),l=n(25),p=n(26),d=c.WeakMap;if(a){var v=new d,h=v.get,y=v.has,g=v.set;r=function(t,e){return g.call(v,t,e),e},o=function(t){return h.call(v,t)||{}},i=function(t){return y.call(v,t)}}else{var m=l("state");p[m]=!0,r=function(t,e){return s(t,m,e),e},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:r,get:o,has:i,enforce:function(t){return i(t)?o(t):r(t,{})},getterFor:function(t){return function(e){var n;if(!u(e)||(n=o(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return n}}}},function(t,e){t.exports=!1},function(t,e,n){var r=n(27),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,e,n){"use strict";var r=n(11),o=n(86),i=n(14),a=n(16),c=n(54),u=a.set,s=a.getterFor("Array Iterator");t.exports=c(Array,"Array",(function(t,e){u(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=s(this),e=t.target,n=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),i.Arguments=i.Array,o("keys"),o("values"),o("entries")},function(t,e){var n={}.toString;t.exports=function(t){return n.call(t).slice(8,-1)}},function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},function(t,e,n){var r=n(5);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e,n){var r,o=n(4),i=n(82),a=n(34),c=n(26),u=n(83),s=n(50),f=n(25),l=f("IE_PROTO"),p=function(){},d=function(t){return"<script>"+t+"<\/script>"},v=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}var t,e;v=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=s("iframe")).style.display="none",u.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var n=a.length;n--;)delete v.prototype[a[n]];return v()};c[l]=!0,t.exports=Object.create||function(t,e){var n;return null!==t?(p.prototype=o(t),n=new p,p.prototype=null,n[l]=t):n=v(),void 0===e?n:i(n,e)}},function(t,e,n){var r=n(9),o=n(57),i=n(12),a=n(11),c=n(22),u=n(3),s=n(49),f=Object.getOwnPropertyDescriptor;e.f=r?f:function(t,e){if(t=a(t),e=c(e,!0),s)try{return f(t,e)}catch(t){}if(u(t,e))return i(!o.f.call(t,e),t[e])}},function(t,e,n){var r=n(37),o=n(38),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},function(t,e){t.exports={}},function(t,e){var n=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:n)(t)}},function(t,e,n){var r=n(8).f,o=n(3),i=n(0)("toStringTag");t.exports=function(t,e,n){t&&!o(t=n?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},function(t,e,n){var r=n(36),o=n(10),i=n(85);r||o(Object.prototype,"toString",i,{unsafe:!0})},function(t,e,n){"use strict";var r=n(77).charAt,o=n(16),i=n(54),a=o.set,c=o.getterFor("String Iterator");i(String,"String",(function(t){a(this,{type:"String Iterator",string:String(t),index:0})}),(function(){var t,e=c(this),n=e.string,o=e.index;return o>=n.length?{value:void 0,done:!0}:(t=r(n,o),e.index+=t.length,{value:t,done:!1})}))},function(t,e,n){"use strict";var r=n(7),o=n(48);r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},function(t,e,n){"use strict";var r=n(7),o=n(1),i=n(35),a=n(5),c=n(13),u=n(18),s=n(43),f=n(63),l=n(67),p=n(0),d=n(56),v=p("isConcatSpreadable"),h=d>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),y=l("concat"),g=function(t){if(!a(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)};r({target:"Array",proto:!0,forced:!h||!y},{concat:function(t){var e,n,r,o,i,a=c(this),l=f(a,0),p=0;for(e=-1,r=arguments.length;e<r;e++)if(g(i=-1===e?a:arguments[e])){if(p+(o=u(i.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<o;n++,p++)n in i&&s(l,p,i[n])}else{if(p>=9007199254740991)throw TypeError("Maximum allowed index exceeded");s(l,p++,i)}return l.length=p,l}})},function(t,e,n){var r=n(2),o=n(6);t.exports=function(t,e){try{o(r,t,e)}catch(n){r[t]=e}return e}},function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},function(t,e,n){var r=n(20);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,e,n){var r={};r[n(0)("toStringTag")]="z",t.exports="[object z]"===String(r)},function(t,e,n){var r=n(17),o=n(52);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},function(t,e){var n=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++n+r).toString(36)}},function(t,e,n){var r=n(53),o=n(34).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,o)}},function(t,e,n){var r=n(1);t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},function(t,e,n){var r=n(36),o=n(20),i=n(0)("toStringTag"),a="Arguments"==o(function(){return arguments}());t.exports=r?o:function(t){var e,n,r;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,e){try{return t[e]}catch(t){}}(e=Object(t),i))?n:a?o(e):"Object"==(r=o(e))&&"function"==typeof e.callee?"Arguments":r}},function(t,e,n){var r=n(2),o=n(66),i=n(19),a=n(6),c=n(0),u=c("iterator"),s=c("toStringTag"),f=i.values;for(var l in o){var p=r[l],d=p&&p.prototype;if(d){if(d[u]!==f)try{a(d,u,f)}catch(t){d[u]=f}if(d[s]||a(d,s,l),o[l])for(var v in i)if(d[v]!==i[v])try{a(d,v,i[v])}catch(t){d[v]=i[v]}}}},function(t,e,n){"use strict";var r=n(22),o=n(8),i=n(12);t.exports=function(t,e,n){var a=r(e);a in t?o.f(t,a,i(0,n)):t[a]=n}},function(t,e,n){var r=n(53),o=n(34);t.exports=Object.keys||function(t){return r(t,o)}},function(t,e,n){var r=n(62);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 0:return function(){return t.call(e)};case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e,n){var r=n(3),o=n(13),i=n(25),a=n(76),c=i("IE_PROTO"),u=Object.prototype;t.exports=a?Object.getPrototypeOf:function(t){return t=o(t),r(t,c)?t[c]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?u:null}},function(t,e,n){var r=n(41),o=n(14),i=n(0)("iterator");t.exports=function(t){if(null!=t)return t[i]||t["@@iterator"]||o[r(t)]}},function(t,e,n){"use strict";var r,o,i=n(69),a=n(94),c=RegExp.prototype.exec,u=String.prototype.replace,s=c,f=(r=/a/,o=/b*/g,c.call(r,"a"),c.call(o,"a"),0!==r.lastIndex||0!==o.lastIndex),l=a.UNSUPPORTED_Y||a.BROKEN_CARET,p=void 0!==/()??/.exec("")[1];(f||p||l)&&(s=function(t){var e,n,r,o,a=this,s=l&&a.sticky,d=i.call(a),v=a.source,h=0,y=t;return s&&(-1===(d=d.replace("y","")).indexOf("g")&&(d+="g"),y=String(t).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==t[a.lastIndex-1])&&(v="(?: "+v+")",y=" "+y,h++),n=new RegExp("^(?:"+v+")",d)),p&&(n=new RegExp("^"+v+"$(?!\\s)",d)),f&&(e=a.lastIndex),r=c.call(s?n:a,y),s?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=a.lastIndex,a.lastIndex+=r[0].length):a.lastIndex=0:f&&r&&(a.lastIndex=a.global?r.index+r[0].length:e),p&&r&&r.length>1&&u.call(r[0],n,(function(){for(o=1;o<arguments.length-2;o++)void 0===arguments[o]&&(r[o]=void 0)})),r}),t.exports=s},function(t,e,n){var r=n(9),o=n(1),i=n(50);t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},function(t,e,n){var r=n(2),o=n(5),i=r.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},function(t,e,n){var r=n(52),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},function(t,e,n){var r=n(2),o=n(33),i=r["__core-js_shared__"]||o("__core-js_shared__",{});t.exports=i},function(t,e,n){var r=n(3),o=n(11),i=n(81).indexOf,a=n(26);t.exports=function(t,e){var n,c=o(t),u=0,s=[];for(n in c)!r(a,n)&&r(c,n)&&s.push(n);for(;e.length>u;)r(c,n=e[u++])&&(~i(s,n)||s.push(n));return s}},function(t,e,n){"use strict";var r=n(7),o=n(64),i=n(46),a=n(65),c=n(28),u=n(6),s=n(10),f=n(0),l=n(17),p=n(14),d=n(55),v=d.IteratorPrototype,h=d.BUGGY_SAFARI_ITERATORS,y=f("iterator"),g=function(){return this};t.exports=function(t,e,n,f,d,m,x){o(n,e,f);var b,S,w,E=function(t){if(t===d&&P)return P;if(!h&&t in j)return j[t];switch(t){case"keys":case"values":case"entries":return function(){return new n(this,t)}}return function(){return new n(this)}},O=e+" Iterator",_=!1,j=t.prototype,L=j[y]||j["@@iterator"]||d&&j[d],P=!h&&L||E(d),T="Array"==e&&j.entries||L;if(T&&(b=i(T.call(new t)),v!==Object.prototype&&b.next&&(l||i(b)===v||(a?a(b,v):"function"!=typeof b[y]&&u(b,y,g)),c(b,O,!0,!0),l&&(p[O]=g))),"values"==d&&L&&"values"!==L.name&&(_=!0,P=function(){return L.call(this)}),l&&!x||j[y]===P||u(j,y,P),p[e]=P,d)if(S={values:E("values"),keys:m?P:E("keys"),entries:E("entries")},x)for(w in S)(h||_||!(w in j))&&s(j,w,S[w]);else r({target:e,proto:!0,forced:h||_},S);return S}},function(t,e,n){"use strict";var r,o,i,a=n(46),c=n(6),u=n(3),s=n(0),f=n(17),l=s("iterator"),p=!1;[].keys&&("next"in(i=[].keys())?(o=a(a(i)))!==Object.prototype&&(r=o):p=!0),null==r&&(r={}),f||u(r,l)||c(r,l,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},function(t,e,n){var r,o,i=n(2),a=n(89),c=i.process,u=c&&c.versions,s=u&&u.v8;s?o=(r=s.split("."))[0]+r[1]:a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=r[1]),t.exports=o&&+o},function(t,e,n){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);e.f=i?function(t){var e=o(this,t);return!!e&&e.enumerable}:r},function(t,e,n){var r=n(1),o=n(20),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},function(t,e,n){var r=n(2);t.exports=r},function(t,e){e.f=Object.getOwnPropertySymbols},function(t,e,n){var r=n(40);t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},function(t,e,n){var r=n(5),o=n(35),i=n(0)("species");t.exports=function(t,e){var n;return o(t)&&("function"!=typeof(n=t.constructor)||n!==Array&&!o(n.prototype)?r(n)&&null===(n=n[i])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},function(t,e,n){"use strict";var r=n(55).IteratorPrototype,o=n(23),i=n(12),a=n(28),c=n(14),u=function(){return this};t.exports=function(t,e,n){var s=e+" Iterator";return t.prototype=o(r,{next:i(1,n)}),a(t,s,!1,!0),c[s]=u,t}},function(t,e,n){var r=n(4),o=n(87);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,n={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),e=n instanceof Array}catch(t){}return function(n,i){return r(n),o(i),e?t.call(n,i):n.__proto__=i,n}}():void 0)},function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},function(t,e,n){var r=n(1),o=n(0),i=n(56),a=o("species");t.exports=function(t){return i>=51||!r((function(){var e=[];return(e.constructor={})[a]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},function(t,e,n){var r=n(2),o=n(66),i=n(100),a=n(6);for(var c in o){var u=r[c],s=u&&u.prototype;if(s&&s.forEach!==i)try{a(s,"forEach",i)}catch(t){s.forEach=i}}},function(t,e,n){"use strict";var r=n(4);t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},function(t,e,n){"use strict";n(19);var r=n(7),o=n(15),i=n(104),a=n(10),c=n(105),u=n(28),s=n(64),f=n(16),l=n(106),p=n(3),d=n(45),v=n(41),h=n(4),y=n(5),g=n(23),m=n(12),x=n(107),b=n(47),S=n(0),w=o("fetch"),E=o("Headers"),O=S("iterator"),_=f.set,j=f.getterFor("URLSearchParams"),L=f.getterFor("URLSearchParamsIterator"),P=/\+/g,T=Array(4),R=function(t){return T[t-1]||(T[t-1]=RegExp("((?:%[\\da-f]{2}){"+t+"})","gi"))},A=function(t){try{return decodeURIComponent(t)}catch(e){return t}},k=function(t){var e=t.replace(P," "),n=4;try{return decodeURIComponent(e)}catch(t){for(;n;)e=e.replace(R(n--),A);return e}},I=/[!'()~]|%20/g,C={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},U=function(t){return C[t]},N=function(t){return encodeURIComponent(t).replace(I,U)},M=function(t,e){if(e)for(var n,r,o=e.split("&"),i=0;i<o.length;)(n=o[i++]).length&&(r=n.split("="),t.push({key:k(r.shift()),value:k(r.join("="))}))},D=function(t){this.entries.length=0,M(this.entries,t)},F=function(t,e){if(t<e)throw TypeError("Not enough arguments")},B=s((function(t,e){_(this,{type:"URLSearchParamsIterator",iterator:x(j(t).entries),kind:e})}),"Iterator",(function(){var t=L(this),e=t.kind,n=t.iterator.next(),r=n.value;return n.done||(n.value="keys"===e?r.key:"values"===e?r.value:[r.key,r.value]),n})),G=function(){l(this,G,"URLSearchParams");var t,e,n,r,o,i,a,c,u,s=arguments.length>0?arguments[0]:void 0,f=this,d=[];if(_(f,{type:"URLSearchParams",entries:d,updateURL:function(){},updateSearchParams:D}),void 0!==s)if(y(s))if("function"==typeof(t=b(s)))for(n=(e=t.call(s)).next;!(r=n.call(e)).done;){if((a=(i=(o=x(h(r.value))).next).call(o)).done||(c=i.call(o)).done||!i.call(o).done)throw TypeError("Expected sequence with length 2");d.push({key:a.value+"",value:c.value+""})}else for(u in s)p(s,u)&&d.push({key:u,value:s[u]+""});else M(d,"string"==typeof s?"?"===s.charAt(0)?s.slice(1):s:s+"")},$=G.prototype;c($,{append:function(t,e){F(arguments.length,2);var n=j(this);n.entries.push({key:t+"",value:e+""}),n.updateURL()},delete:function(t){F(arguments.length,1);for(var e=j(this),n=e.entries,r=t+"",o=0;o<n.length;)n[o].key===r?n.splice(o,1):o++;e.updateURL()},get:function(t){F(arguments.length,1);for(var e=j(this).entries,n=t+"",r=0;r<e.length;r++)if(e[r].key===n)return e[r].value;return null},getAll:function(t){F(arguments.length,1);for(var e=j(this).entries,n=t+"",r=[],o=0;o<e.length;o++)e[o].key===n&&r.push(e[o].value);return r},has:function(t){F(arguments.length,1);for(var e=j(this).entries,n=t+"",r=0;r<e.length;)if(e[r++].key===n)return!0;return!1},set:function(t,e){F(arguments.length,1);for(var n,r=j(this),o=r.entries,i=!1,a=t+"",c=e+"",u=0;u<o.length;u++)(n=o[u]).key===a&&(i?o.splice(u--,1):(i=!0,n.value=c));i||o.push({key:a,value:c}),r.updateURL()},sort:function(){var t,e,n,r=j(this),o=r.entries,i=o.slice();for(o.length=0,n=0;n<i.length;n++){for(t=i[n],e=0;e<n;e++)if(o[e].key>t.key){o.splice(e,0,t);break}e===n&&o.push(t)}r.updateURL()},forEach:function(t){for(var e,n=j(this).entries,r=d(t,arguments.length>1?arguments[1]:void 0,3),o=0;o<n.length;)r((e=n[o++]).value,e.key,this)},keys:function(){return new B(this,"keys")},values:function(){return new B(this,"values")},entries:function(){return new B(this,"entries")}},{enumerable:!0}),a($,O,$.entries),a($,"toString",(function(){for(var t,e=j(this).entries,n=[],r=0;r<e.length;)t=e[r++],n.push(N(t.key)+"="+N(t.value));return n.join("&")}),{enumerable:!0}),u(G,"URLSearchParams"),r({global:!0,forced:!i},{URLSearchParams:G}),i||"function"!=typeof w||"function"!=typeof E||r({global:!0,enumerable:!0,forced:!0},{fetch:function(t){var e,n,r,o=[t];return arguments.length>1&&(y(e=arguments[1])&&(n=e.body,"URLSearchParams"===v(n)&&((r=e.headers?new E(e.headers):new E).has("content-type")||r.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),e=g(e,{body:m(0,String(n)),headers:m(0,r)}))),o.push(e)),w.apply(this,o)}}),t.exports={URLSearchParams:G,getState:j}},function(t,e,n){var r=n(3),o=n(72),i=n(24),a=n(8);t.exports=function(t,e){for(var n=o(e),c=a.f,u=i.f,s=0;s<n.length;s++){var f=n[s];r(t,f)||c(t,f,u(e,f))}}},function(t,e,n){var r=n(15),o=n(39),i=n(60),a=n(4);t.exports=r("Reflect","ownKeys")||function(t){var e=o.f(a(t)),n=i.f;return n?e.concat(n(t)):e}},function(t,e,n){var r=n(27),o=Math.max,i=Math.min;t.exports=function(t,e){var n=r(t);return n<0?o(n+e,0):i(n,e)}},function(t,e,n){var r=n(1),o=/#|\.prototype\./,i=function(t,e){var n=c[a(t)];return n==s||n!=u&&("function"==typeof e?r(e):!!e)},a=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},c=i.data={},u=i.NATIVE="N",s=i.POLYFILL="P";t.exports=i},function(t,e,n){var r=n(45),o=n(58),i=n(13),a=n(18),c=n(63),u=[].push,s=function(t){var e=1==t,n=2==t,s=3==t,f=4==t,l=6==t,p=5==t||l;return function(d,v,h,y){for(var g,m,x=i(d),b=o(x),S=r(v,h,3),w=a(b.length),E=0,O=y||c,_=e?O(d,w):n?O(d,0):void 0;w>E;E++)if((p||E in b)&&(m=S(g=b[E],E,x),t))if(e)_[E]=m;else if(m)switch(t){case 3:return!0;case 5:return g;case 6:return E;case 2:u.call(_,g)}else if(f)return!1;return l?-1:s||f?f:_}};t.exports={forEach:s(0),map:s(1),filter:s(2),some:s(3),every:s(4),find:s(5),findIndex:s(6)}},function(t,e,n){var r=n(1);t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},function(t,e,n){var r=n(27),o=n(21),i=function(t){return function(e,n){var i,a,c=String(o(e)),u=r(n),s=c.length;return u<0||u>=s?t?"":void 0:(i=c.charCodeAt(u))<55296||i>56319||u+1===s||(a=c.charCodeAt(u+1))<56320||a>57343?t?c.charAt(u):i:t?c.slice(u,u+2):a-56320+(i-55296<<10)+65536}};t.exports={codeAt:i(!1),charAt:i(!0)}},function(t,e,n){"use strict";var r=n(7),o=n(2),i=n(15),a=n(17),c=n(9),u=n(40),s=n(61),f=n(1),l=n(3),p=n(35),d=n(5),v=n(4),h=n(13),y=n(11),g=n(22),m=n(12),x=n(23),b=n(44),S=n(39),w=n(99),E=n(60),O=n(24),_=n(8),j=n(57),L=n(6),P=n(10),T=n(37),R=n(25),A=n(26),k=n(38),I=n(0),C=n(84),U=n(96),N=n(28),M=n(16),D=n(75).forEach,F=R("hidden"),B=I("toPrimitive"),G=M.set,$=M.getterFor("Symbol"),q=Object.prototype,H=o.Symbol,V=i("JSON","stringify"),z=O.f,K=_.f,W=w.f,X=j.f,Y=T("symbols"),J=T("op-symbols"),Q=T("string-to-symbol-registry"),Z=T("symbol-to-string-registry"),tt=T("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=c&&f((function(){return 7!=x(K({},"a",{get:function(){return K(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=z(q,e);r&&delete q[e],K(t,e,n),r&&t!==q&&K(q,e,r)}:K,ot=function(t,e){var n=Y[t]=x(H.prototype);return G(n,{type:"Symbol",tag:t,description:e}),c||(n.description=e),n},it=s?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},at=function(t,e,n){t===q&&at(J,e,n),v(t);var r=g(e,!0);return v(n),l(Y,r)?(n.enumerable?(l(t,F)&&t[F][r]&&(t[F][r]=!1),n=x(n,{enumerable:m(0,!1)})):(l(t,F)||K(t,F,m(1,{})),t[F][r]=!0),rt(t,r,n)):K(t,r,n)},ct=function(t,e){v(t);var n=y(e),r=b(n).concat(lt(n));return D(r,(function(e){c&&!ut.call(n,e)||at(t,e,n[e])})),t},ut=function(t){var e=g(t,!0),n=X.call(this,e);return!(this===q&&l(Y,e)&&!l(J,e))&&(!(n||!l(this,e)||!l(Y,e)||l(this,F)&&this[F][e])||n)},st=function(t,e){var n=y(t),r=g(e,!0);if(n!==q||!l(Y,r)||l(J,r)){var o=z(n,r);return!o||!l(Y,r)||l(n,F)&&n[F][r]||(o.enumerable=!0),o}},ft=function(t){var e=W(y(t)),n=[];return D(e,(function(t){l(Y,t)||l(A,t)||n.push(t)})),n},lt=function(t){var e=t===q,n=W(e?J:y(t)),r=[];return D(n,(function(t){!l(Y,t)||e&&!l(q,t)||r.push(Y[t])})),r};(u||(P((H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=k(t),n=function(t){this===q&&n.call(J,t),l(this,F)&&l(this[F],e)&&(this[F][e]=!1),rt(this,e,m(1,t))};return c&&nt&&rt(q,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return $(this).tag})),P(H,"withoutSetter",(function(t){return ot(k(t),t)})),j.f=ut,_.f=at,O.f=st,S.f=w.f=ft,E.f=lt,C.f=function(t){return ot(I(t),t)},c&&(K(H.prototype,"description",{configurable:!0,get:function(){return $(this).description}}),a||P(q,"propertyIsEnumerable",ut,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!u,sham:!u},{Symbol:H}),D(b(tt),(function(t){U(t)})),r({target:"Symbol",stat:!0,forced:!u},{for:function(t){var e=String(t);if(l(Q,e))return Q[e];var n=H(e);return Q[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!u,sham:!c},{create:function(t,e){return void 0===e?x(t):ct(x(t),e)},defineProperty:at,defineProperties:ct,getOwnPropertyDescriptor:st}),r({target:"Object",stat:!0,forced:!u},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){E.f(1)}))},{getOwnPropertySymbols:function(t){return E.f(h(t))}}),V)&&r({target:"JSON",stat:!0,forced:!u||f((function(){var t=H();return"[null]"!=V([t])||"{}"!=V({a:t})||"{}"!=V(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(d(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,V.apply(null,o)}});H.prototype[B]||L(H.prototype,B,H.prototype.valueOf),N(H,"Symbol"),A[F]=!0},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(2),o=n(51),i=r.WeakMap;t.exports="function"==typeof i&&/native code/.test(o(i))},function(t,e,n){var r=n(11),o=n(18),i=n(73),a=function(t){return function(e,n,a){var c,u=r(e),s=o(u.length),f=i(a,s);if(t&&n!=n){for(;s>f;)if((c=u[f++])!=c)return!0}else for(;s>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},function(t,e,n){var r=n(9),o=n(8),i=n(4),a=n(44);t.exports=r?Object.defineProperties:function(t,e){i(t);for(var n,r=a(e),c=r.length,u=0;c>u;)o.f(t,n=r[u++],e[n]);return t}},function(t,e,n){var r=n(15);t.exports=r("document","documentElement")},function(t,e,n){var r=n(0);e.f=r},function(t,e,n){"use strict";var r=n(36),o=n(41);t.exports=r?{}.toString:function(){return"[object "+o(this)+"]"}},function(t,e,n){var r=n(0),o=n(23),i=n(8),a=r("unscopables"),c=Array.prototype;null==c[a]&&i.f(c,a,{configurable:!0,value:o(null)}),t.exports=function(t){c[a][t]=!0}},function(t,e,n){var r=n(5);t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},function(t,e,n){var r=n(7),o=n(13),i=n(44);r({target:"Object",stat:!0,forced:n(1)((function(){i(1)}))},{keys:function(t){return i(o(t))}})},function(t,e,n){var r=n(15);t.exports=r("navigator","userAgent")||""},function(t,e,n){var r=n(9),o=n(1),i=n(3),a=Object.defineProperty,c={},u=function(t){throw t};t.exports=function(t,e){if(i(c,t))return c[t];e||(e={});var n=[][t],s=!!i(e,"ACCESSORS")&&e.ACCESSORS,f=i(e,0)?e[0]:u,l=i(e,1)?e[1]:void 0;return c[t]=!!n&&!o((function(){if(s&&!r)return!0;var t={length:-1};s?a(t,1,{enumerable:!0,get:u}):t[1]=1,n.call(t,f,l)}))}},function(t,e,n){var r=n(7),o=n(102);r({target:"Array",stat:!0,forced:!n(103)((function(t){Array.from(t)}))},{from:o})},function(t,e,n){var r=n(4);t.exports=function(t,e,n,o){try{return o?e(r(n)[0],n[1]):e(n)}catch(e){var i=t.return;throw void 0!==i&&r(i.call(t)),e}}},function(t,e,n){var r=n(0),o=n(14),i=r("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},function(t,e,n){"use strict";var r=n(1);function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},function(t,e,n){"use strict";var r=n(10),o=n(4),i=n(1),a=n(69),c=RegExp.prototype,u=c.toString,s=i((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),f="toString"!=u.name;(s||f)&&r(RegExp.prototype,"toString",(function(){var t=o(this),e=String(t.source),n=t.flags;return"/"+e+"/"+String(void 0===n&&t instanceof RegExp&&!("flags"in c)?a.call(t):n)}),{unsafe:!0})},function(t,e,n){var r=n(59),o=n(3),i=n(84),a=n(8).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||a(e,t,{value:i.f(t)})}},,,function(t,e,n){var r=n(11),o=n(39).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return a&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return a.slice()}}(t):o(r(t))}},function(t,e,n){"use strict";var r=n(75).forEach,o=n(101),i=n(90),a=o("forEach"),c=i("forEach");t.exports=a&&c?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},function(t,e,n){"use strict";var r=n(1);t.exports=function(t,e){var n=[][t];return!!n&&r((function(){n.call(null,e||function(){throw 1},1)}))}},function(t,e,n){"use strict";var r=n(45),o=n(13),i=n(92),a=n(93),c=n(18),u=n(43),s=n(47);t.exports=function(t){var e,n,f,l,p,d,v=o(t),h="function"==typeof this?this:Array,y=arguments.length,g=y>1?arguments[1]:void 0,m=void 0!==g,x=s(v),b=0;if(m&&(g=r(g,y>2?arguments[2]:void 0,2)),null==x||h==Array&&a(x))for(n=new h(e=c(v.length));e>b;b++)d=m?g(v[b],b):v[b],u(n,b,d);else for(p=(l=x.call(v)).next,n=new h;!(f=p.call(l)).done;b++)d=m?i(l,g,[f.value,b],!0):f.value,u(n,b,d);return n.length=b,n}},function(t,e,n){var r=n(0)("iterator"),o=!1;try{var i=0,a={next:function(){return{done:!!i++}},return:function(){o=!0}};a[r]=function(){return this},Array.from(a,(function(){throw 2}))}catch(t){}t.exports=function(t,e){if(!e&&!o)return!1;var n=!1;try{var i={};i[r]=function(){return{next:function(){return{done:n=!0}}}},t(i)}catch(t){}return n}},function(t,e,n){var r=n(1),o=n(0),i=n(17),a=o("iterator");t.exports=!r((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,n="";return t.pathname="c%20d",e.forEach((function(t,r){e.delete("b"),n+=r+t})),i&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},function(t,e,n){var r=n(10);t.exports=function(t,e,n){for(var o in e)r(t,o,e[o],n);return t}},function(t,e){t.exports=function(t,e,n){if(!(t instanceof e))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return t}},function(t,e,n){var r=n(4),o=n(47);t.exports=function(t){var e=o(t);if("function"!=typeof e)throw TypeError(String(t)+" is not iterable");return r(e.call(t))}},function(t,e,n){"use strict";n(31);var r=n(10),o=n(1),i=n(0),a=n(48),c=n(6),u=i("species"),s=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f="$0"==="a".replace(/./,"$0"),l=i("replace"),p=!!/./[l]&&""===/./[l]("a","$0"),d=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var v=i(t),h=!o((function(){var e={};return e[v]=function(){return 7},7!=""[t](e)})),y=h&&!o((function(){var e=!1,n=/a/;return"split"===t&&((n={}).constructor={},n.constructor[u]=function(){return n},n.flags="",n[v]=/./[v]),n.exec=function(){return e=!0,null},n[v](""),!e}));if(!h||!y||"replace"===t&&(!s||!f||p)||"split"===t&&!d){var g=/./[v],m=n(v,""[t],(function(t,e,n,r,o){return e.exec===a?h&&!o?{done:!0,value:g.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=m[0],b=m[1];r(String.prototype,t,x),r(RegExp.prototype,v,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}l&&c(RegExp.prototype[v],"sham",!0)}},function(t,e,n){var r=n(20),o=n(48);t.exports=function(t,e){var n=t.exec;if("function"==typeof n){var i=n.call(t,e);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},,,,,,,,,,,,function(t,e,n){"use strict";var r=n(108),o=n(4),i=n(13),a=n(18),c=n(27),u=n(21),s=n(130),f=n(109),l=Math.max,p=Math.min,d=Math.floor,v=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(t,e,n,r){var y=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,g=r.REPLACE_KEEPS_$0,m=y?"$":"$0";return[function(n,r){var o=u(this),i=null==n?void 0:n[t];return void 0!==i?i.call(n,o,r):e.call(String(o),n,r)},function(t,r){if(!y&&g||"string"==typeof r&&-1===r.indexOf(m)){var i=n(e,t,this,r);if(i.done)return i.value}var u=o(t),d=String(this),v="function"==typeof r;v||(r=String(r));var h=u.global;if(h){var b=u.unicode;u.lastIndex=0}for(var S=[];;){var w=f(u,d);if(null===w)break;if(S.push(w),!h)break;""===String(w[0])&&(u.lastIndex=s(d,a(u.lastIndex),b))}for(var E,O="",_=0,j=0;j<S.length;j++){w=S[j];for(var L=String(w[0]),P=l(p(c(w.index),d.length),0),T=[],R=1;R<w.length;R++)T.push(void 0===(E=w[R])?E:String(E));var A=w.groups;if(v){var k=[L].concat(T,P,d);void 0!==A&&k.push(A);var I=String(r.apply(void 0,k))}else I=x(L,d,P,T,A,r);P>=_&&(O+=d.slice(_,P)+I,_=P+L.length)}return O+d.slice(_)}];function x(t,n,r,o,a,c){var u=r+t.length,s=o.length,f=h;return void 0!==a&&(a=i(a),f=v),e.call(c,f,(function(e,i){var c;switch(i.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(u);case"<":c=a[i.slice(1,-1)];break;default:var f=+i;if(0===f)return e;if(f>s){var l=d(f/10);return 0===l?e:l<=s?void 0===o[l-1]?i.charAt(1):o[l-1]+i.charAt(1):e}c=o[f-1]}return void 0===c?"":c}))}}))},,,,,,,,,function(t,e,n){"use strict";var r=n(77).charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},,,,,,,function(t,e,n){"use strict";n.r(e);n(32),n(31),n(121),n(29),n(68),n(91),n(30),n(78),n(88),n(95),n(19),n(42),n(70);var r=["placement_id","asset_url","cookie_id"];function o(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}function i(t,e,n){var r=window.location,o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3);var i="expires=".concat(o.toUTCString());"https:"===r.protocol?document.cookie="".concat(t,"=").concat(e,";").concat(i,";secure;path=/"):document.cookie="".concat(t,"=").concat(e,";").concat(i,";path=/")}function a(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"insider",n=arguments.length>1?arguments[1]:void 0,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=new XMLHttpRequest,i="action=idg_set_vary_cache_group&cache_group=".concat(e,"&_ajaxnonce=").concat(ajaxload_params.nonce);i+="edition"===e?"&edition_slug=".concat(n):"&segment=yes&profile_id=".concat(null==n?void 0:n.profile_id,"&email=").concat(null==n?void 0:n.email,"&first_name=").concat(null==n?void 0:n.first_name,"&last_name=").concat(null==n?void 0:n.last_name),o.open("POST",null===(t=ajaxload_params)||void 0===t?void 0:t.ajaxurl,r),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.send(i)}var c=window.addEventListener?"addEventListener":"attachEvent";(0,window[c])("attachEvent"===c?"onmessage":"message",(function(t){if(void 0!==t.data.asset_type&&"insider"===t.data.asset_type.toLowerCase()){var e;if(void 0!==t.data.registration_status&&"pending doi"===t.data.registration_status.toLowerCase()){var n=function(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}(document.getElementsByClassName("sign-up-widget")[0]);return window.scrollTo({top:n,behavior:"smooth"}),!1}var c=t.data,u=(c.placement_id,c.asset_url,c.cookie_id,o(c,r));i("idg-insider",new URLSearchParams(u).toString(),180),window.IDG.setItemToDataLayer("arenaId",t.data.profile_id),window.IDG.setItemToDataLayer("insiderSignedIn","true"),a("insider",t.data),(p=new XMLHttpRequest).open("POST",ajaxload_params.ajaxurl,!0),p.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8"),p.onload=function(){if(p.status>=200&&p.status<400){var t=JSON.parse(p.responseText);document.querySelectorAll("#primaryNav .primaryNav-actions .signed-in-user").forEach((function(t){t.style.display="none"})),document.querySelectorAll("#primaryNav .primaryNav-actions .signed-out-user").forEach((function(t){t.style.display="block"})),document.getElementById("insiderPopover").outerHTML=t.insider_popup}},p.send("action=get_navigation_content&_ajaxnonce=".concat(ajaxload_params.nonce)),"1"===(null===(e=ajaxload_params)||void 0===e?void 0:e.require_redirect)&&window.setTimeout((function(){var t;location.href=null===(t=ajaxload_params)||void 0===t?void 0:t.insider_archive}),3e3);var s=document.getElementsByClassName("sign-up-widget");s.forEach((function(t){return t.remove()}));var f=document.querySelectorAll(".gated-content, .wp-block-product-chart.product-chart");f.forEach((function(t){t.classList.add("visible-gated-content")})),document.querySelectorAll(".teaser-content").forEach((function(t){t.classList.add("invisible-teaser-content")}));var l=function(t){for(var e=0;t;)e+=t.offsetTop,t=t.offsetParent;return e}(f[0]);window.scrollTo({top:l,behavior:"smooth"})}var p;return!1}),!1),document.addEventListener("DOMContentLoaded",(function(){var t=document.getElementById("editor-switcher-button"),e=document.getElementById("editor-switcher-container"),n=document.getElementById("editor-list-items"),r=document.getElementsByClassName("edition-item"),o=function(){t.classList.add("dropdown-closed"),t.classList.remove("dropdown-open"),n.style.display="none"};e&&(document.addEventListener("click",(function(t){e.contains(t.target)||o()})),t.addEventListener("click",(function(){n.style.display&&"none"!==n.style.display?o():(t.classList.add("dropdown-open"),t.classList.remove("dropdown-closed"),n.style.display="block")})));var c=function(t){if(t){var e="vc-v1__edition_--_".concat(t);i("idg-edition",t,365),i("vip-go-seg",e,365),a("edition",t,!1);var n="".concat(document.location.origin,"/").concat(t,"/");"us"===t&&(n=document.location.origin),t&&window.location.replace(n)}};Array.from(r).forEach((function(t){t.parentElement.addEventListener("click",(function(t){if(t.stopPropagation(),t.target.children[0]){var e=t.target.children[0].getAttribute("data-slug");c(e)}})),t.addEventListener("click",(function(t){var e=t.target.getAttribute("data-slug");c(e)}))}));var u=document.getElementById("site-overlay");u&&u.addEventListener("click",(function(){document.getElementById("sideNavEditorCheckbox")&&!document.body.classList.contains("mobileNav--is-open")&&(document.getElementById("sideNavEditorCheckbox").checked=!1)}))}))}]);
//# sourceMappingURL=editions-front.js.map