var _extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"object"===("undefined"==typeof exports?"undefined":_typeof(exports))&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.WCDP_LazyLoad=t()}(this,function(){"use strict";var e=function(e,t){return e.getAttribute("data-"+t)},t=function(t){return t.filter(function(t){return!e(t,"was-processed")})},n=function(e,t){var n,r=new e(t);try{n=new CustomEvent("WCDP_LazyLoad::Initialized",{detail:{instance:r}})}catch(e){(n=document.createEvent("CustomEvent")).initCustomEvent("WCDP_LazyLoad::Initialized",!1,!1,{instance:r})}window.dispatchEvent(n)},r=function(t,n){var r=n.data_src,s=n.data_srcset,o=t.tagName,a=e(t,r);if("IMG"===o){!function(t,n){var r=n.data_srcset,s=t.parentNode;if(s&&"PICTURE"===s.tagName)for(var o,a=0;o=s.children[a];a+=1)if("SOURCE"===o.tagName){var i=e(o,r);i&&o.setAttribute("srcset",i)}}(t,n);var i=e(t,s);return i&&t.setAttribute("srcset",i),void(a&&t.setAttribute("src",a))}"IFRAME"!==o?a&&(t.style.backgroundImage='url("'+a+'")'):a&&t.setAttribute("src",a)},s="undefined"!=typeof window,o=s&&"IntersectionObserver"in window,a=s&&"classList"in document.createElement("p"),i=function(e,t){a?e.classList.add(t):e.className+=(e.className?" ":"")+t},c=function(e,t){e&&e(t)},l=function(e,t,n){e.removeEventListener("load",t),e.removeEventListener("error",n)},u=function(e,t,n){var r=e.target;!function(e,t){a?e.classList.remove(t):e.className=e.className.replace(new RegExp("(^|\\s+)"+t+"(\\s+|$)")," ").replace(/^\s+/,"").replace(/\s+$/,"")}(r,n.class_loading),i(r,t?n.class_loaded:n.class_error),c(t?n.callback_load:n.callback_error,r)},d=function(e,t){c(t.callback_enter,e),["IMG","IFRAME"].indexOf(e.tagName)>-1&&(!function(e,t){var n=function n(s){u(s,!0,t),l(e,n,r)},r=function r(s){u(s,!1,t),l(e,n,r)};e.addEventListener("load",n),e.addEventListener("error",r)}(e,t),i(e,t.class_loading)),r(e,t),function(e,t,n){e.setAttribute("data-"+t,n)}(e,"was-processed",!0),c(t.callback_set,e)},f=function(e,t){this._settings=function(e){var t={elements_selector:"img",container:document,threshold:300,data_src:"src",data_srcset:"srcset",class_loading:"loading",class_loaded:"loaded",class_error:"error",callback_load:null,callback_error:null,callback_set:null,callback_enter:null};return _extends({},t,e)}(e),this._setObserver(),this.update(t)};f.prototype={_setObserver:function(){var e=this;if(o){var n=this._settings,r={root:n.container===document?null:n.container,rootMargin:n.threshold+"px"};this._observer=new IntersectionObserver(function(n){n.forEach(function(t){if(function(e){return e.isIntersecting||e.intersectionRatio>0}(t)){var n=t.target;d(n,e._settings),e._observer.unobserve(n)}}),e._elements=t(e._elements)},r)}},update:function(e){var n=this,r=this._settings,s=e||r.container.querySelectorAll(r.elements_selector);this._elements=t(Array.prototype.slice.call(s)),this._observer?this._elements.forEach(function(e){n._observer.observe(e)}):(this._elements.forEach(function(e){d(e,r)}),this._elements=t(this._elements))},destroy:function(){var e=this;this._observer&&(t(this._elements).forEach(function(t){e._observer.unobserve(t)}),this._observer=null),this._elements=null,this._settings=null}};var _=window.WCDP_LazyLoadOptions;return s&&_&&function(e,t){if(t.length)for(var r,s=0;r=t[s];s+=1)n(e,r);else n(e,t)}(f,_),f});