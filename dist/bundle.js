!function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!g[e])return;for(var t in g[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(h[t]=n[t]);0==--y&&0===b&&j()}(e,t),n&&n(e,t)};var t,r=!0,o="66e0e2d54e4fbe45740b",i={},c=[],a=[];function d(e){var n=E[e];if(!n)return k;var r=function(r){return n.hot.active?(E[r]?-1===E[r].parents.indexOf(e)&&E[r].parents.push(e):(c=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),c=[]),k(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return k[e]},set:function(n){k[e]=n}}};for(var i in k)Object.prototype.hasOwnProperty.call(k,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===u&&f("prepare"),b++,k.e(e).then(n,(function(e){throw n(),e}));function n(){b--,"prepare"===u&&(m[e]||_(e),0===b&&0===y&&j())}},r.t=function(e,n){return 1&n&&(e=r(e)),k.t(e,-2&n)},r}function s(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:O,apply:D,status:function(e){if(!e)return u;l.push(e)},addStatusHandler:function(e){l.push(e)},removeStatusHandler:function(e){var n=l.indexOf(e);n>=0&&l.splice(n,1)},data:i[e]};return t=void 0,n}var l=[],u="idle";function f(e){u=e;for(var n=0;n<l.length;n++)l[n].call(null,e)}var p,h,v,y=0,b=0,m={},g={},w={};function x(e){return+e+""===e?+e:e}function O(e){if("idle"!==u)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(n=1e4,n=n||1e4,new Promise((function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=k.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}}))).then((function(e){if(!e)return f("idle"),null;g={},m={},w=e.c,v=e.h,f("prepare");var n=new Promise((function(e,n){p={resolve:e,reject:n}}));h={};return _(0),"prepare"===u&&0===b&&0===y&&j(),n}));var n}function _(e){w[e]?(g[e]=!0,y++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=k.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):m[e]=!0}function j(){f("ready");var e=p;if(p=null,e)if(r)Promise.resolve().then((function(){return D(r)})).then((function(n){e.resolve(n)}),(function(n){e.reject(n)}));else{var n=[];for(var t in h)Object.prototype.hasOwnProperty.call(h,t)&&n.push(x(t));e.resolve(n)}}function D(n){if("ready"!==u)throw new Error("apply() is only allowed in ready status");var t,r,a,d,s;function l(e){for(var n=[e],t={},r=n.map((function(e){return{chain:[e],id:e}}));r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((d=E[i])&&!d.hot._selfAccepted){if(d.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(d.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var a=0;a<d.parents.length;a++){var s=d.parents[a],l=E[s];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([s]),moduleId:i,parentId:s};-1===n.indexOf(s)&&(l.hot._acceptedDependencies[i]?(t[s]||(t[s]=[]),p(t[s],[i])):(delete t[s],n.push(s),r.push({chain:c.concat([s]),id:s})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function p(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var y={},b=[],m={},g=function(){console.warn("[HMR] unexpected require("+_.moduleId+") to disposed module")};for(var O in h)if(Object.prototype.hasOwnProperty.call(h,O)){var _;s=x(O);var j=!1,D=!1,M=!1,H="";switch((_=h[O]?l(s):{type:"disposed",moduleId:O}).chain&&(H="\nUpdate propagation: "+_.chain.join(" -> ")),_.type){case"self-declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of self decline: "+_.moduleId+H));break;case"declined":n.onDeclined&&n.onDeclined(_),n.ignoreDeclined||(j=new Error("Aborted because of declined dependency: "+_.moduleId+" in "+_.parentId+H));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(_),n.ignoreUnaccepted||(j=new Error("Aborted because "+s+" is not accepted"+H));break;case"accepted":n.onAccepted&&n.onAccepted(_),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(_),M=!0;break;default:throw new Error("Unexception type "+_.type)}if(j)return f("abort"),Promise.reject(j);if(D)for(s in m[s]=h[s],p(b,_.outdatedModules),_.outdatedDependencies)Object.prototype.hasOwnProperty.call(_.outdatedDependencies,s)&&(y[s]||(y[s]=[]),p(y[s],_.outdatedDependencies[s]));M&&(p(b,[_.moduleId]),m[s]=g)}var P,I=[];for(r=0;r<b.length;r++)s=b[r],E[s]&&E[s].hot._selfAccepted&&m[s]!==g&&I.push({module:s,errorHandler:E[s].hot._selfAccepted});f("dispose"),Object.keys(w).forEach((function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)}));for(var S,A,C=b.slice();C.length>0;)if(s=C.pop(),d=E[s]){var U={},T=d.hot._disposeHandlers;for(a=0;a<T.length;a++)(t=T[a])(U);for(i[s]=U,d.hot.active=!1,delete E[s],delete y[s],a=0;a<d.children.length;a++){var R=E[d.children[a]];R&&((P=R.parents.indexOf(s))>=0&&R.parents.splice(P,1))}}for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(d=E[s]))for(A=y[s],a=0;a<A.length;a++)S=A[a],(P=d.children.indexOf(S))>=0&&d.children.splice(P,1);for(s in f("apply"),o=v,m)Object.prototype.hasOwnProperty.call(m,s)&&(e[s]=m[s]);var N=null;for(s in y)if(Object.prototype.hasOwnProperty.call(y,s)&&(d=E[s])){A=y[s];var q=[];for(r=0;r<A.length;r++)if(S=A[r],t=d.hot._acceptedDependencies[S]){if(-1!==q.indexOf(t))continue;q.push(t)}for(r=0;r<q.length;r++){t=q[r];try{t(A)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:s,dependencyId:A[r],error:e}),n.ignoreErrored||N||(N=e)}}}for(r=0;r<I.length;r++){var L=I[r];s=L.module,c=[s];try{k(s)}catch(e){if("function"==typeof L.errorHandler)try{L.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:s,error:t,originalError:e}),n.ignoreErrored||N||(N=t),N||(N=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:s,error:e}),n.ignoreErrored||N||(N=e)}}return N?(f("fail"),Promise.reject(N)):(f("idle"),new Promise((function(e){e(b)})))}var E={};function k(n){if(E[n])return E[n].exports;var t=E[n]={i:n,l:!1,exports:{},hot:s(n),parents:(a=c,c=[],a),children:[]};return e[n].call(t.exports,t,t.exports,d(n)),t.l=!0,t.exports}k.m=e,k.c=E,k.d=function(e,n,t){k.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},k.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},k.t=function(e,n){if(1&n&&(e=k(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(k.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)k.d(t,r,function(n){return e[n]}.bind(null,r));return t},k.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return k.d(n,"a",n),n},k.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},k.p="/",k.h=function(){return o},d(1)(k.s=1)}([function(e,n,t){(n=t(4)(!1)).push([e.i,'*{box-sizing:border-box}.wrapper{padding:70px 0;display:flex;flex-direction:column;align-items:center}.calculatorbox{width:300px;border:gray}.calwindow{background:gray;display:flex;flex-direction:column;align-items:flex-end;padding:40px 30px}.entry{font-size:55px}#clear,#save{font-family:sans-serif}.row{clear:both;display:flex}button{border:none;padding:0;outline:none;cursor:pointer}.key{width:100%;height:70px;font-size:26px;border-top:1px solid gray;background-color:coral;color:#fff;font-weight:200;font-family:sans-serif}.key.topcolor{background-color:red;color:#fff;padding:0px 41px 0 5px;width:13.3rem;padding-left:20px}.key.operators{background-color:yellow;color:#fff;font-size:35px;font-family:sans-serif}.key[value="0"]{text-align:left;padding:0px 70px 0 31px}\n',""]),e.exports=n},function(e,n,t){"use strict";t.r(n);t(2)},function(e,n,t){var r=t(3),o=t(0);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var i={insert:"head",singleton:!1},c=r(o,i),a=o.locals?o.locals:{};o.locals||e.hot.accept(0,(function(){var n=t(0);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[e.i,n,""]]),c(n)})),e.hot.dispose((function(){c()})),e.exports=a},function(e,n,t){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),c=[];function a(e){for(var n=-1,t=0;t<c.length;t++)if(c[t].identifier===e){n=t;break}return n}function d(e,n){for(var t={},r=[],o=0;o<e.length;o++){var i=e[o],d=n.base?i[0]+n.base:i[0],s=t[d]||0,l="".concat(d," ").concat(s);t[d]=s+1;var u=a(l),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(c[u].references++,c[u].updater(f)):c.push({identifier:l,updater:y(f,n),references:1}),r.push(l)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var c=i(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function f(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,o);else{var i=document.createTextNode(o),c=e.childNodes;c[n]&&e.removeChild(c[n]),c.length?e.insertBefore(i,c[n]):e.appendChild(i)}}function p(e,n,t){var r=t.css,o=t.media,i=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function y(e,n){var t,r,o;if(n.singleton){var i=v++;t=h||(h=s(n)),r=f.bind(null,t,i,!1),o=f.bind(null,t,i,!0)}else t=s(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=o());var t=d(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=a(t[r]);c[o].references--}for(var i=d(e,n),s=0;s<t.length;s++){var l=a(t[s]);0===c[l].references&&(c[l].updater(),c.splice(l,1))}t=i}}}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var o=(c=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(c)))),d="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(d," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[t].concat(i).concat([o]).join("\n")}var c,a,d;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(o[c]=!0)}for(var a=0;a<e.length;a++){var d=[].concat(e[a]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}}]);