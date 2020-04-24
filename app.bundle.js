/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/polygonize-image/dist/polygons.js":
/*!********************************************************!*\
  !*** ./node_modules/polygonize-image/dist/polygons.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){if(true)module.exports=n();else { var a, e; }}(window,(function(){return function(t){var n={};function e(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return t[a].call(r.exports,r,r.exports,e),r.l=!0,r.exports}return e.m=t,e.c=n,e.d=function(t,n,a){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:a})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(e.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)e.d(a,r,function(n){return t[n]}.bind(null,r));return a},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=2)}([function(t,n,e){(function(n){var e;e=function(){"use strict";function t(t,n,e){return t<n?n:t>e?e:t}var e=function(t,n){void 0===t&&(t=300),void 0===n&&(n=150),"undefined"==typeof window?(this.canvasEl={width:t,height:n},this.ctx=null):(this.canvasEl=document.createElement("canvas"),this.canvasEl.width=t,this.canvasEl.height=n,this.ctx=this.canvasEl.getContext("2d"))},a={width:{configurable:!0},height:{configurable:!0}};function r(t,n,a,r){var o=!(!n||!n.backgroundColor)&&n.backgroundColor,i=new e(t.width*a,t.height*a,r),s=i.getContext("2d");return o&&(s.fillStyle=o,s.fillRect(0,0,t.width*a,t.height*a),s.fillStyle="transparent"),{canvas:i,ctx:s}}e.prototype.getContext=function(){return this.ctx},e.prototype.toDataURL=function(t,n,e){if("function"!=typeof e)return this.canvasEl.toDataURL(t,n);e(this.canvasEl.toDataURL(t,n))},a.width.get=function(){return this.canvasEl.width},a.width.set=function(t){this.canvasEl.width=t},a.height.get=function(){return this.canvasEl.height},a.height.set=function(t){this.canvasEl.height=t},Object.defineProperties(e.prototype,a),"undefined"!=typeof window&&(e.Image=Image);var o=.7,i=4,s=!0,l=!0,u=.5,c="miter",d=700,p=50,g=!1,h=["miter","round","bevel"];function m(n){return"object"!=typeof(n=function(t){var n=!1;if(void 0!==t)try{n=JSON.parse(JSON.stringify(t))}catch(t){}return n}(n))&&(n={}),"number"!=typeof n.accuracy||isNaN(n.accuracy)?n.accuracy=o:n.accuracy=t(n.accuracy,0,1),("number"!=typeof n.blur||isNaN(n.blur))&&(n.blur=i),n.blur<=0&&(n.blur=1),"string"!=typeof n.fill&&"boolean"!=typeof n.fill&&(n.fill=s),"string"!=typeof n.stroke&&"boolean"!=typeof n.stroke&&(n.stroke=l),("number"!=typeof n.strokeWidth||isNaN(n.strokeWidth))&&(n.strokeWidth=u),"number"!=typeof n.threshold||isNaN(n.threshold)?n.threshold=p:n.threshold=t(n.threshold,1,100),"string"==typeof n.lineJoin&&-1!==h.indexOf(n.lineJoin)||(n.lineJoin=c),n.gradients&&n.fill?n.gradients=!0:n.gradients=!1,n.gradients&&(("number"!=typeof n.gradientStops||isNaN(n.gradientStops)||n.gradientStops<2)&&(n.gradientStops=2),n.gradientStops=Math.round(n.gradientStops)),("number"!=typeof n.vertexCount||isNaN(n.vertexCount))&&(n.vertexCount=d),n.vertexCount<=0&&(n.vertexCount=1),"string"!=typeof n.transparentColor&&"boolean"!=typeof n.transparentColor&&(n.transparentColor=g),!0===typeof n.transparentColor&&(n.transparentColor=!1),"string"==typeof n.transparentColor&&(n.transparentColor=function(t){var n=r({width:1,height:1},{},1,!0).ctx;n.fillStyle=t,n.fillRect(0,0,1,1);var e=n.getImageData(0,0,1,1).data;return{r:e[0],g:e[1],b:e[2],a:e[3]/255}}(n.transparentColor)),n}function y(t){if(t instanceof HTMLImageElement){if(!t.naturalWidth||!t.naturalHeight||!1===t.complete)throw new Error("This this image hasn't finished loading: "+t.src);var n=new e(t.naturalWidth,t.naturalHeight),a=n.getContext("2d");a.drawImage(t,0,0,n.width,n.height);var r=a.getImageData(0,0,n.width,n.height);return r.data&&r.data.length&&(void 0===r.width&&(r.width=t.naturalWidth),void 0===r.height&&(r.height=t.naturalHeight)),r}throw new Error("This object does not seem to be an image.")}var f=Object.assign;function x(t){var n=f({a:1},t);return"rgba("+n.r+", "+n.g+", "+n.b+", "+n.a+")"}function b(t,n,e,a){return a=a||1,n.forEach((function(n,e){if(t.beginPath(),t.moveTo(n.a.x*a,n.a.y*a),t.lineTo(n.b.x*a,n.b.y*a),t.lineTo(n.c.x*a,n.c.y*a),t.lineTo(n.a.x*a,n.a.y*a),n.gradient){var r=t.createLinearGradient(n.gradient.x1*a,n.gradient.y1*a,n.gradient.x2*a,n.gradient.y2*a),o=n.gradient.colors.length-1;n.gradient.colors.forEach((function(t,n){var e=x(t);console.log(t),r.addColorStop(n/o,e)})),t.fillStyle=r,t.fill(),n.strokeWidth>0&&(t.strokeStyle=r,t.lineWidth=n.strokeWidth*a,t.lineJoin=n.lineJoin,t.stroke())}else n.fill&&(t.fillStyle=x(n.fill),t.fill()),n.strokeColor&&(t.strokeStyle=x(n.strokeColor),t.lineWidth=n.strokeWidth*a,t.lineJoin=n.lineJoin,t.stroke());t.closePath()})),t}function v(t,n,e){var a=e&&e.dpr?e.dpr:1,o=r(n,e,a,!0).ctx;return b(o,t,0,a),o.getImageData(0,0,n.width*a,n.height*a)}function w(t,n,e){var a=e&&e.dpr?e.dpr:1,o=r(n,e,a);return b(o.ctx,t,0,a),o.canvas.toDataURL()}function _(t){var n=t.toString(16);return 1==n.length?"0"+n:n}function k(t){var n=t.r,e=t.g,a=t.b;return"#"+_(n)+_(e)+_(a)}function D(t,n){var e="";t.length&&t[0].gradient&&(e="<defs>");var a="";return t.forEach((function(t,n){var r=t.a,o=t.b,i=t.c;if(a+='<polygon points="'+r.x+","+r.y+" "+o.x+","+o.y+" "+i.x+","+i.y+'"',t.gradient){var s=t.boundingBox,l=((t.gradient.x1-s.x)/s.width*100).toFixed(3),u=((t.gradient.y1-s.y)/s.height*100).toFixed(3),c=((t.gradient.x2-s.x)/s.width*100).toFixed(3),d=((t.gradient.y2-s.y)/s.height*100).toFixed(3);e+='\n\t<linearGradient id="gradient-'+n+'" x1="'+l+'%" y1="'+u+'%" x2="'+c+'%" y2="'+d+'%">';var p=t.gradient.colors.length-1;t.gradient.colors.forEach((function(t,n){var a=k(t),r=t.a<1?' stop-opacity="'+t.a+'"':"",o=(n/p*100).toFixed(3);e+='\n\t\t\t\t\t<stop offset="'+o+'%" stop-color="'+a+'"'+r+"/>\n\t\t\t\t"})),e+="</linearGradient>",a+=' fill="url(#gradient-'+n+')"',t.strokeWidth>0&&(a+=' stroke="url(#gradient-'+n+')" stroke-width="'+t.strokeWidth+'" stroke-linejoin="'+t.lineJoin+'"')}else{if(t.fill){var g=k(t.fill),h=t.fill.a<1?' fill-opacity="'+t.fill.a+'"':"";a+=' fill="'+g+'"'+h}else a+=' fill="transparent"';if(t.strokeColor){var m=k(t.strokeColor),y=t.strokeColor.a<1?' stroke-opacity="'+t.strokeColor.a+'"':"";a+=' stroke="'+m+'" stroke-width="'+t.strokeWidth+'" stroke-linejoin="'+t.lineJoin+'"'+y}}a+="/>\n\t"})),e.length&&(e+="\n\t\t</defs>"),'<?xml version="1.0" standalone="yes"?>\n<svg width="'+n.width+'" height="'+n.height+'" xmlns="http://www.w3.org/2000/svg" version="1.1" >\n\t'+e+"\n\t"+a+"\n</svg>"}function I(t,n){return t(n={exports:{}},n.exports),n.exports}"undefined"!=typeof window?window:void 0!==n||"undefined"!=typeof self&&self;var C=I((function(t){function n(t,n,e){this.a=t,this.b=n,this.c=e;var a,r,o,i,s=n.x-t.x,l=n.y-t.y,u=e.x-t.x,c=e.y-t.y,d=s*(t.x+n.x)+l*(t.y+n.y),p=u*(t.x+e.x)+c*(t.y+e.y),g=2*(s*(e.y-n.y)-l*(e.x-n.x));Math.abs(g)<1e-6?(a=Math.min(t.x,n.x,e.x),r=Math.min(t.y,n.y,e.y),o=.5*(Math.max(t.x,n.x,e.x)-a),i=.5*(Math.max(t.y,n.y,e.y)-r),this.x=a+o,this.y=r+i,this.r=o*o+i*i):(this.x=(c*d-l*p)/g,this.y=(s*p-u*d)/g,o=this.x-t.x,i=this.y-t.y,this.r=o*o+i*i)}function e(t,n){return n.x-t.x}function a(t){var n,e,a,r,o,i=t.length;t:for(;i;)for(e=t[--i],n=t[--i],a=i;a;)if(o=t[--a],n===(r=t[--a])&&e===o||n===o&&e===r){t.splice(i,2),t.splice(a,2),i-=2;continue t}}n.prototype.draw=function(t){t.beginPath(),t.moveTo(this.a.x,this.a.y),t.lineTo(this.b.x,this.b.y),t.lineTo(this.c.x,this.c.y),t.closePath(),t.stroke()},t.exports={Triangle:n,triangulate:function(t){if(t.length<3)return[];t.sort(e);for(var r=t.length-1,o=t[r].x,i=t[0].x,s=t[r].y,l=s;r--;)t[r].y<s&&(s=t[r].y),t[r].y>l&&(l=t[r].y);var u,c,d,p=i-o,g=l-s,h=p>g?p:g,m=.5*(i+o),y=.5*(l+s),f=[new n({x:m-20*h,y:y-h,__sentinel:!0},{x:m,y:y+20*h,__sentinel:!0},{x:m+20*h,y:y-h,__sentinel:!0})],x=[],b=[];for(r=t.length;r--;){for(b.length=0,u=f.length;u--;)(p=t[r].x-f[u].x)>0&&p*p>f[u].r?(x.push(f[u]),f.splice(u,1)):p*p+(g=t[r].y-f[u].y)*g>f[u].r||(b.push(f[u].a,f[u].b,f[u].b,f[u].c,f[u].c,f[u].a),f.splice(u,1));for(a(b),u=b.length;u;)d=b[--u],c=b[--u],f.push(new n(c,d,t[r]))}for(Array.prototype.push.apply(x,f),r=x.length;r--;)(x[r].a.__sentinel||x[r].b.__sentinel||x[r].c.__sentinel)&&x.splice(r,1);return x}}})),P=(C.Triangle,C.triangulate),S=I((function(t,n){!function(e){function a(t){if(!(this instanceof a))return new a(t);var n=t.width,e=t.height,r=[[-1,0,1],[-2,0,2],[-1,0,1]],o=[[-1,-2,-1],[0,0,0],[1,2,1]],i=[],s=[];function l(t){return function(e,a,r){return t[4*(n*a+e)+(r=r||0)]}}var u,c,d=l(t.data);for(c=0;c<e;c++)for(u=0;u<n;u++){var p=(d(u,c,0)+d(u,c,1)+d(u,c,2))/3;s.push(p,p,p,255)}for(d=l(s),c=0;c<e;c++)for(u=0;u<n;u++){var g=r[0][0]*d(u-1,c-1)+r[0][1]*d(u,c-1)+r[0][2]*d(u+1,c-1)+r[1][0]*d(u-1,c)+r[1][1]*d(u,c)+r[1][2]*d(u+1,c)+r[2][0]*d(u-1,c+1)+r[2][1]*d(u,c+1)+r[2][2]*d(u+1,c+1),h=o[0][0]*d(u-1,c-1)+o[0][1]*d(u,c-1)+o[0][2]*d(u+1,c-1)+o[1][0]*d(u-1,c)+o[1][1]*d(u,c)+o[1][2]*d(u+1,c)+o[2][0]*d(u-1,c+1)+o[2][1]*d(u,c+1)+o[2][2]*d(u+1,c+1),m=Math.sqrt(g*g+h*h)>>>0;i.push(m,m,m,255)}var y=i;return"function"==typeof Uint8ClampedArray&&(y=new Uint8ClampedArray(i)),y.toImageData=function(){return a.toImageData(y,n,e)},y}function r(t,n,e){return{width:n,height:e,data:t}}a.toImageData=function(t,n,e){if("function"==typeof ImageData&&"[object Uint16Array]"===Object.prototype.toString.call(t))return new ImageData(t,n,e);if("object"==typeof window&&"object"==typeof window.document){var a=document.createElement("canvas");if("function"==typeof a.getContext){var o=a.getContext("2d").createImageData(n,e);return o.data.set(t),o}return new r(t,n,e)}return new r(t,n,e)},t.exports&&(n=t.exports=a),n.Sobel=a}()}));function A(t){return t&&"number"==typeof t.width&&"number"==typeof t.height&&t.data&&"number"==typeof t.data.length&&"object"==typeof t.data}function E(t){if(A(t)){if("undefined"==typeof Uint8ClampedArray){if("undefined"==typeof window)throw new Error("Can't copy imageData in webworker without Uint8ClampedArray support.");return j(t)}var n,e=new Uint8ClampedArray(t.data);if("undefined"==typeof ImageData)return{width:t.width,height:t.height,data:e};try{n=new ImageData(e,t.width,t.height)}catch(e){if("undefined"==typeof window)throw new Error("Can't copy imageData in webworker without proper ImageData() support.");n=j(t)}return n}throw new Error("Given imageData object is not useable.")}function j(t){var n=new e(t.width,t.height).getContext("2d");return n.putImageData(t,0,0),n.getImageData(0,0,t.width,t.height)}S.Sobel;var O=[512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,289,287,285,282,280,278,275,273,271,269,267,265,263,261,259],M=[9,11,12,13,13,14,14,15,15,15,15,16,16,16,16,17,17,17,17,17,17,17,18,18,18,18,18,18,18,18,18,19,19,19,19,19,19,19,19,19,19,19,19,19,19,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,21,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,22,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,23,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24];function T(){this.r=0,this.g=0,this.b=0,this.a=0,this.next=null}function R(t,n,e){var a=t+"|"+n;e[a]||(e[a]={x:t,y:n}),a=null}function B(n,e,a){var r=(0|t(n.x,1,e.width-2))+(0|t(n.y,1,e.height-2))*e.width<<2;r>=e.data.length&&(r=e.data.length-5);var o=e.data[r+3]/255;return a&&0===o?a:{r:e.data[r],g:e.data[r+1],b:e.data[r+2],a:o}}function N(t){return{x:.33333*(t.a.x+t.b.x+t.c.x),y:.33333*(t.a.y+t.b.y+t.c.y)}}function W(t){return 0===t.a}function L(t){var n=function(t){if("string"==typeof t){var n=[0,0,0,0];return"#"===t[0]&&(t.length<7&&(t="#"+t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+(t.length>4?t[4]+t[4]:"")),n=[parseInt(t.substr(1,2),16),parseInt(t.substr(3,2),16),parseInt(t.substr(5,2),16),t.length>7?parseInt(t.substr(7,2),16)/255:1]),0===t.indexOf("rgb")&&(t.includes("rgba")||(t+=",1"),n=t.match(/[\.\d]+/g).map((function(t){return+t}))),n}}(t);return n?{r:n[0],g:n[1],b:n[2],a:n[3]}:void 0}function F(t){var n=[t.r,t.g,t.b].map((function(t){return(t/=255)<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}));return.2126*n[0]+.7152*n[1]+.0722*n[2]}function H(t,n,e){return t.forEach((function(t){var a={};"abc".split("").forEach((function(r){var o=B(t[r],n,e.transparentColor);a[r]={key:r,color:o,x:t[r].x,y:t[r].y},a[r].luminance=F(a[r].color);var i="abc".replace(r,"").split("");a[r].median={x:(t[i[0]].x+t[i[1]].x)/2,y:(t[i[0]].y+t[i[1]].y)/2},a[r].medianColor=B(a[r].median,n,e.transparentColor),a[r].medianLuminance=F(a[r].medianColor)}));for(var r,o,i,s,l=[a.a,a.b,a.c].sort((function(t,n){return Math.abs(t.luminance-t.medianLuminance)-Math.abs(n.luminance-n.medianLuminance)})),u=l[0],c=l[0],d=u.median,p=[c],g=(r=c,i=(o=d).x-r.x,s=o.y-r.y,Math.sqrt(i*i+s*s)),h=1,m=e.gradientStops-2;h<m;h++){var y=h*(g/e.gradientStops)/g,f={x:c.x+y*(d.x-c.x),y:c.y+y*(d.y-c.y)};p.push(f)}p.push(d),t.gradient={x1:u.x,y1:u.y,x2:u.median.x,y2:u.median.y,colors:p.map((function(t){return B(t,n,e.transparentColor)}))},e.stroke&&(t.strokeWidth=e.strokeWidth,t.lineJoin=e.lineJoin),a=null})),t}function G(t,n){if(A(t)){var e={width:t.width,height:t.height},a=E(t),r=E(t),o=function(t){for(var n,e=t.data.length,a=0;a<e;a+=4)n=.34*t.data[a]+.5*t.data[a+1]+.16*t.data[a+2],t.data[a]=n,t.data[a+1]=n,t.data[a+2]=n;return t}(function(t,n,e,a,r,o){var i,s,l,u,c,d,p,g,h,m,y,f,x,b,v,w,_,k,D,I,C,P,S,A,E=t.data,j=o+o+1,R=a-1,B=r-1,N=o+1,W=N*(N+1)/2,L=new T,F=L;for(l=1;l<j;l++)if(F=F.next=new T,l==N)var H=F;F.next=L;var G=null,U=null;p=d=0;var J=O[o],Y=M[o];for(s=0;s<r;s++){for(w=_=k=D=g=h=m=y=0,f=N*(I=E[d]),x=N*(C=E[d+1]),b=N*(P=E[d+2]),v=N*(S=E[d+3]),g+=W*I,h+=W*C,m+=W*P,y+=W*S,F=L,l=0;l<N;l++)F.r=I,F.g=C,F.b=P,F.a=S,F=F.next;for(l=1;l<N;l++)u=d+((R<l?R:l)<<2),g+=(F.r=I=E[u])*(A=N-l),h+=(F.g=C=E[u+1])*A,m+=(F.b=P=E[u+2])*A,y+=(F.a=S=E[u+3])*A,w+=I,_+=C,k+=P,D+=S,F=F.next;for(G=L,U=H,i=0;i<a;i++)E[d+3]=S=y*J>>Y,0!=S?(S=255/S,E[d]=(g*J>>Y)*S,E[d+1]=(h*J>>Y)*S,E[d+2]=(m*J>>Y)*S):E[d]=E[d+1]=E[d+2]=0,g-=f,h-=x,m-=b,y-=v,f-=G.r,x-=G.g,b-=G.b,v-=G.a,u=p+((u=i+o+1)<R?u:R)<<2,g+=w+=G.r=E[u],h+=_+=G.g=E[u+1],m+=k+=G.b=E[u+2],y+=D+=G.a=E[u+3],G=G.next,f+=I=U.r,x+=C=U.g,b+=P=U.b,v+=S=U.a,w-=I,_-=C,k-=P,D-=S,U=U.next,d+=4;p+=a}for(i=0;i<a;i++){for(_=k=D=w=h=m=y=g=0,f=N*(I=E[d=i<<2]),x=N*(C=E[d+1]),b=N*(P=E[d+2]),v=N*(S=E[d+3]),g+=W*I,h+=W*C,m+=W*P,y+=W*S,F=L,l=0;l<N;l++)F.r=I,F.g=C,F.b=P,F.a=S,F=F.next;for(c=a,l=1;l<=o;l++)d=c+i<<2,g+=(F.r=I=E[d])*(A=N-l),h+=(F.g=C=E[d+1])*A,m+=(F.b=P=E[d+2])*A,y+=(F.a=S=E[d+3])*A,w+=I,_+=C,k+=P,D+=S,F=F.next,l<B&&(c+=a);for(d=i,G=L,U=H,s=0;s<r;s++)E[3+(u=d<<2)]=S=y*J>>Y,S>0?(S=255/S,E[u]=(g*J>>Y)*S,E[u+1]=(h*J>>Y)*S,E[u+2]=(m*J>>Y)*S):E[u]=E[u+1]=E[u+2]=0,g-=f,h-=x,m-=b,y-=v,f-=G.r,x-=G.g,b-=G.b,v-=G.a,u=i+((u=s+N)<B?u:B)*a<<2,g+=w+=G.r=E[u],h+=_+=G.g=E[u+1],m+=k+=G.b=E[u+2],y+=D+=G.a=E[u+3],G=G.next,f+=I=U.r,x+=C=U.g,b+=P=U.b,v+=S=U.a,w-=I,_-=C,k-=P,D-=S,U=U.next,d+=a}return t}(a,0,0,e.width,e.height,n.blur)),i=function(t,n,e,a,r){var o={},i=Math.max(~~(n*(1-e)),5),s=Math.round(Math.sqrt(i)),l=~~(a/s),u=~~(r/Math.round(Math.ceil(i/s))),c=0,d=0,p=0;for(p=0;p<r;p+=u)for(d=++c%2==0?~~(l/2):0;d<a;d+=l)d<a&&p<r&&R(~~(d+Math.cos(p)*u),~~(p+Math.sin(d)*l),o);R(0,0,o),R(a-1,0,o),R(a-1,r-1,o),R(0,r-1,o);var g=n-Object.keys(o).length,h=t.length,m=~~(h/g);if(n>0&&m>0){var y=0;for(y=0;y<h;y+=m)R(t[y].x,t[y].y,o)}return t=null,Object.keys(o).map((function(t){return o[t]}))}(function(t,n){var e,a,r,o,i,s,l,u,c,d=t.width,p=t.height,g=t.data,h=[];for(a=0;a<p;a+=2)for(e=0;e<d;e+=2){for(u=c=0,r=-1;r<=1;r++)if(l=(s=a+r)*d,s>=0&&s<p)for(o=-1;o<=1;o++)(i=e+o)>=0&&i<d&&(u+=g[i+l<<2],c++);c&&(u/=c),u>n&&h.push({x:e,y:a})}return h}(S(o).toImageData(),n.threshold),n.vertexCount,n.accuracy,e.width,e.height),s=P(i);return s=function(t,n,e){return t.forEach((function(t){var n,e,a,r,o;t.boundingBox=(n=[t.a,t.b,t.c],e=1/0,a=-1/0,r=1/0,o=-1/0,n.forEach((function(t){t.x<e&&(e=t.x),t.y<r&&(r=t.y),t.x>a&&(a=t.x),t.y>o&&(o=t.y)})),{x:e,y:r,width:a-e,height:o-r})})),t.filter((function(t){return t.boundingBox.width>0&&t.boundingBox.height>0}))}(s),n.transparentColor||(s=function(t,n){return t.filter((function(t){return!W(B(N(t),n))}))}(s,r)),s=!0===n.fill&&!0===n.gradients?H(s,r,n):function(t,n,e){var a=e.fill,r=e.stroke,o=e.strokeWidth,i=e.lineJoin,s=e.transparentColor,l=!!a&&L(a),u=!!r&&L(r),c=function(t,n){var e=W(t)&&s;return n&&!e?n:e?s:t};return t.forEach((function(t){var e=B(N(t),n);a&&(t.fill=c(e,l)),r&&(t.strokeColor=c(e,u),t.strokeWidth=o,t.lineJoin=i)})),t}(s,r,n)}throw new Error("Can't work with the imageData provided. It seems to be corrupt.")}return function(t){t=m(t);var n,e,a=!1,r=!1,o=new Worker(URL.createObjectURL(new Blob(["var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};\n\nfunction createCommonjsModule(fn, module) {\n\treturn module = { exports: {} }, fn(module, module.exports), module.exports;\n}\n\nvar delaunay = createCommonjsModule(function (module) {\nfunction Triangle(a, b, c) {\n  this.a = a;\n  this.b = b;\n  this.c = c;\n\n  var A = b.x - a.x,\n      B = b.y - a.y,\n      C = c.x - a.x,\n      D = c.y - a.y,\n      E = A * (a.x + b.x) + B * (a.y + b.y),\n      F = C * (a.x + c.x) + D * (a.y + c.y),\n      G = 2 * (A * (c.y - b.y) - B * (c.x - b.x)),\n      minx, miny, dx, dy;\n\n  /* If the points of the triangle are collinear, then just find the\n   * extremes and use the midpoint as the center of the circumcircle. */\n  if(Math.abs(G) < 0.000001) {\n    minx = Math.min(a.x, b.x, c.x);\n    miny = Math.min(a.y, b.y, c.y);\n    dx   = (Math.max(a.x, b.x, c.x) - minx) * 0.5;\n    dy   = (Math.max(a.y, b.y, c.y) - miny) * 0.5;\n\n    this.x = minx + dx;\n    this.y = miny + dy;\n    this.r = dx * dx + dy * dy;\n  }\n\n  else {\n    this.x = (D*E - B*F) / G;\n    this.y = (A*F - C*E) / G;\n    dx = this.x - a.x;\n    dy = this.y - a.y;\n    this.r = dx * dx + dy * dy;\n  }\n}\n\nTriangle.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.moveTo(this.a.x, this.a.y);\n  ctx.lineTo(this.b.x, this.b.y);\n  ctx.lineTo(this.c.x, this.c.y);\n  ctx.closePath();\n  ctx.stroke();\n};\n\nfunction byX(a, b) {\n  return b.x - a.x\n}\n\nfunction dedup(edges) {\n  var j = edges.length,\n      a, b, i, m, n;\n\n  outer: while(j) {\n    b = edges[--j];\n    a = edges[--j];\n    i = j;\n    while(i) {\n      n = edges[--i];\n      m = edges[--i];\n      if((a === m && b === n) || (a === n && b === m)) {\n        edges.splice(j, 2);\n        edges.splice(i, 2);\n        j -= 2;\n        continue outer\n      }\n    }\n  }\n}\n\nfunction triangulate(vertices) {\n  /* Bail if there aren't enough vertices to form any triangles. */\n  if(vertices.length < 3)\n    { return [] }\n\n  /* Ensure the vertex array is in order of descending X coordinate\n   * (which is needed to ensure a subquadratic runtime), and then find\n   * the bounding box around the points. */\n  vertices.sort(byX);\n\n  var i    = vertices.length - 1,\n      xmin = vertices[i].x,\n      xmax = vertices[0].x,\n      ymin = vertices[i].y,\n      ymax = ymin;\n\n  while(i--) {\n    if(vertices[i].y < ymin) { ymin = vertices[i].y; }\n    if(vertices[i].y > ymax) { ymax = vertices[i].y; }\n  }\n\n  /* Find a supertriangle, which is a triangle that surrounds all the\n   * vertices. This is used like something of a sentinel value to remove\n   * cases in the main algorithm, and is removed before we return any\n   * results.\n   *\n   * Once found, put it in the \"open\" list. (The \"open\" list is for\n   * triangles who may still need to be considered; the \"closed\" list is\n   * for triangles which do not.) */\n  var dx     = xmax - xmin,\n      dy     = ymax - ymin,\n      dmax   = (dx > dy) ? dx : dy,\n      xmid   = (xmax + xmin) * 0.5,\n      ymid   = (ymax + ymin) * 0.5,\n      open   = [\n        new Triangle(\n          {x: xmid - 20 * dmax, y: ymid -      dmax, __sentinel: true},\n          {x: xmid            , y: ymid + 20 * dmax, __sentinel: true},\n          {x: xmid + 20 * dmax, y: ymid -      dmax, __sentinel: true}\n        )\n      ],\n      closed = [],\n      edges = [],\n      j, a, b;\n\n  /* Incrementally add each vertex to the mesh. */\n  i = vertices.length;\n  while(i--) {\n    /* For each open triangle, check to see if the current point is\n     * inside it's circumcircle. If it is, remove the triangle and add\n     * it's edges to an edge list. */\n    edges.length = 0;\n    j = open.length;\n    while(j--) {\n      /* If this point is to the right of this triangle's circumcircle,\n       * then this triangle should never get checked again. Remove it\n       * from the open list, add it to the closed list, and skip. */\n      dx = vertices[i].x - open[j].x;\n      if(dx > 0 && dx * dx > open[j].r) {\n        closed.push(open[j]);\n        open.splice(j, 1);\n        continue\n      }\n\n      /* If not, skip this triangle. */\n      dy = vertices[i].y - open[j].y;\n      if(dx * dx + dy * dy > open[j].r)\n        { continue }\n\n      /* Remove the triangle and add it's edges to the edge list. */\n      edges.push(\n        open[j].a, open[j].b,\n        open[j].b, open[j].c,\n        open[j].c, open[j].a\n      );\n      open.splice(j, 1);\n    }\n\n    /* Remove any doubled edges. */\n    dedup(edges);\n\n    /* Add a new triangle for each edge. */\n    j = edges.length;\n    while(j) {\n      b = edges[--j];\n      a = edges[--j];\n      open.push(new Triangle(a, b, vertices[i]));\n    }\n  }\n\n  /* Copy any remaining open triangles to the closed list, and then\n   * remove any triangles that share a vertex with the supertriangle. */\n  Array.prototype.push.apply(closed, open);\n\n  i = closed.length;\n  while(i--)\n    { if(closed[i].a.__sentinel ||\n       closed[i].b.__sentinel ||\n       closed[i].c.__sentinel)\n      { closed.splice(i, 1); } }\n\n  /* Yay, we're done! */\n  return closed\n}\n\n{\n    module.exports = {\n        Triangle: Triangle,\n        triangulate: triangulate\n    };\n}\n});\nvar delaunay_1 = delaunay.Triangle;\nvar delaunay_2 = delaunay.triangulate;\n\nvar sobel = createCommonjsModule(function (module, exports) {\n(function(root) {\n\n  function Sobel(imageData) {\n    if (!(this instanceof Sobel)) {\n      return new Sobel(imageData);\n    }\n\n    var width = imageData.width;\n    var height = imageData.height;\n\n    var kernelX = [\n      [-1,0,1],\n      [-2,0,2],\n      [-1,0,1]\n    ];\n\n    var kernelY = [\n      [-1,-2,-1],\n      [0,0,0],\n      [1,2,1]\n    ];\n\n    var sobelData = [];\n    var grayscaleData = [];\n\n    function bindPixelAt(data) {\n      return function(x, y, i) {\n        i = i || 0;\n        return data[((width * y) + x) * 4 + i];\n      };\n    }\n\n    var data = imageData.data;\n    var pixelAt = bindPixelAt(data);\n    var x, y;\n\n    for (y = 0; y < height; y++) {\n      for (x = 0; x < width; x++) {\n        var r = pixelAt(x, y, 0);\n        var g = pixelAt(x, y, 1);\n        var b = pixelAt(x, y, 2);\n\n        var avg = (r + g + b) / 3;\n        grayscaleData.push(avg, avg, avg, 255);\n      }\n    }\n\n    pixelAt = bindPixelAt(grayscaleData);\n\n    for (y = 0; y < height; y++) {\n      for (x = 0; x < width; x++) {\n        var pixelX = (\n            (kernelX[0][0] * pixelAt(x - 1, y - 1)) +\n            (kernelX[0][1] * pixelAt(x, y - 1)) +\n            (kernelX[0][2] * pixelAt(x + 1, y - 1)) +\n            (kernelX[1][0] * pixelAt(x - 1, y)) +\n            (kernelX[1][1] * pixelAt(x, y)) +\n            (kernelX[1][2] * pixelAt(x + 1, y)) +\n            (kernelX[2][0] * pixelAt(x - 1, y + 1)) +\n            (kernelX[2][1] * pixelAt(x, y + 1)) +\n            (kernelX[2][2] * pixelAt(x + 1, y + 1))\n        );\n\n        var pixelY = (\n          (kernelY[0][0] * pixelAt(x - 1, y - 1)) +\n          (kernelY[0][1] * pixelAt(x, y - 1)) +\n          (kernelY[0][2] * pixelAt(x + 1, y - 1)) +\n          (kernelY[1][0] * pixelAt(x - 1, y)) +\n          (kernelY[1][1] * pixelAt(x, y)) +\n          (kernelY[1][2] * pixelAt(x + 1, y)) +\n          (kernelY[2][0] * pixelAt(x - 1, y + 1)) +\n          (kernelY[2][1] * pixelAt(x, y + 1)) +\n          (kernelY[2][2] * pixelAt(x + 1, y + 1))\n        );\n\n        var magnitude = Math.sqrt((pixelX * pixelX) + (pixelY * pixelY))>>>0;\n\n        sobelData.push(magnitude, magnitude, magnitude, 255);\n      }\n    }\n\n    var clampedArray = sobelData;\n\n    if (typeof Uint8ClampedArray === 'function') {\n      clampedArray = new Uint8ClampedArray(sobelData);\n    }\n\n    clampedArray.toImageData = function() {\n      return Sobel.toImageData(clampedArray, width, height);\n    };\n\n    return clampedArray;\n  }\n\n  Sobel.toImageData = function toImageData(data, width, height) {\n    if (typeof ImageData === 'function' && Object.prototype.toString.call(data) === '[object Uint16Array]') {\n      return new ImageData(data, width, height);\n    } else {\n      if (typeof window === 'object' && typeof window.document === 'object') {\n        var canvas = document.createElement('canvas');\n\n        if (typeof canvas.getContext === 'function') {\n          var context = canvas.getContext('2d');\n          var imageData = context.createImageData(width, height);\n          imageData.data.set(data);\n          return imageData;\n        } else {\n          return new FakeImageData(data, width, height);\n        }\n      } else {\n        return new FakeImageData(data, width, height);\n      }\n    }\n  };\n\n  function FakeImageData(data, width, height) {\n    return {\n      width: width,\n      height: height,\n      data: data\n    };\n  }\n\n  {\n    if (module.exports) {\n      exports = module.exports = Sobel;\n    }\n    exports.Sobel = Sobel;\n  }\n\n})(commonjsGlobal);\n});\nvar sobel_1 = sobel.Sobel;\n\nfunction isImageData (imageData) {\n\treturn (\n\t\timageData && \n\t\ttypeof imageData.width === 'number' &&\n\t\ttypeof imageData.height === 'number' &&\n\t\timageData.data &&\n\t\ttypeof imageData.data.length === 'number' &&\n\t\ttypeof imageData.data === 'object'\n\t);\n}\n\nvar Canvas = function Canvas ( width, height ) {\n\tif ( width === void 0 ) width = 300;\n\tif ( height === void 0 ) height = 150;\n\n\tif ( typeof window === 'undefined' ) {\n\t\tthis.canvasEl = { width: width, height: height };\n\t\tthis.ctx = null;\n\t} else {\n\t\tthis.canvasEl = document.createElement( 'canvas' );\n\t\tthis.canvasEl.width = width;\n\t\tthis.canvasEl.height = height;\n\t\tthis.ctx = this.canvasEl.getContext( '2d' );\n\t} \n};\n\nvar prototypeAccessors = { width: { configurable: true },height: { configurable: true } };\n\nCanvas.prototype.getContext = function getContext () {\n\treturn this.ctx;\n};\n\nCanvas.prototype.toDataURL = function toDataURL ( type, encoderOptions, cb ) {\n\tif ( typeof cb === 'function' ) {\n\t\tcb( this.canvasEl.toDataURL( type, encoderOptions ) );\n\t} else {\n\t\treturn this.canvasEl.toDataURL( type, encoderOptions );\n\t}\n};\n\t\nprototypeAccessors.width.get = function () {\n\treturn this.canvasEl.width;\n};\n\t\nprototypeAccessors.width.set = function ( newWidth ) {\n\tthis.canvasEl.width = newWidth;\n};\n\nprototypeAccessors.height.get = function () {\n\treturn this.canvasEl.height;\n};\n\nprototypeAccessors.height.set = function ( newHeight ) {\n\tthis.canvasEl.height = newHeight;\n};\n\nObject.defineProperties( Canvas.prototype, prototypeAccessors );\n\nif ( typeof window !== 'undefined' ) {\n\tCanvas.Image = Image;\n}\n\n// import Canvas from 'canvas';\n\nfunction copyImageData (imageData) {\n\tif ( isImageData ( imageData ) ) {\n\t\tif ( typeof Uint8ClampedArray === 'undefined' ) {\n\t\t\tif ( typeof window === 'undefined' ) {\n\t\t\t\tthrow new Error( \"Can't copy imageData in webworker without Uint8ClampedArray support.\" );\n\t\t\t\treturn imageData;\n\t\t\t} else {\n\t\t\t\treturn copyImageDataWithCanvas( imageData );\n\t\t\t}\n\t\t} else {\n\t\t\tvar clampedArray = new Uint8ClampedArray( imageData.data );\n\n\t\t\tif ( typeof ImageData === 'undefined' ) {\n\t\t\t\t// http://stackoverflow.com/a/15238036/229189\n\t\t\t\treturn {\n\t\t\t\t\twidth: imageData.width,\n\t\t\t\t\theight: imageData.height,\n\t\t\t\t\tdata: clampedArray\n\t\t\t\t};\n\t\t\t} else {\n\t\t\t\t// http://stackoverflow.com/a/15908922/229189#comment57192591_15908922\n\t\t\t\tvar result;\n\n\t\t\t\ttry {\n\t\t\t\t\tresult = new ImageData( clampedArray, imageData.width, imageData.height );\n\t\t\t\t} catch ( err ) {\n\t\t\t\t\tif ( typeof window === 'undefined' ) {\n\t\t\t\t\t\tthrow new Error( \"Can't copy imageData in webworker without proper ImageData() support.\" );\n\t\t\t\t\t\tresult = imageData;\n\t\t\t\t\t} else {\n\t\t\t\t\t\tresult = copyImageDataWithCanvas( imageData );\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\treturn result;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tthrow new Error( 'Given imageData object is not useable.' );\n\t\treturn;\n\t}\n}\n\n// http://stackoverflow.com/a/11918126/229189\nfunction copyImageDataWithCanvas ( imageData ) {\n\tvar canvas = new Canvas( imageData.width, imageData.height );\n\tvar ctx = canvas.getContext( '2d' );\n\n\tctx.putImageData( imageData, 0, 0 );\n\t\t\t\t\n\treturn ctx.getImageData( 0, 0, imageData.width, imageData.height );\n}\n\n/*\n    StackBlur - a fast almost Gaussian Blur For Canvas\n\n    Version:     0.5\n    Author:        Mario Klingemann\n    Contact:     mario@quasimondo.com\n    Website:    http://www.quasimondo.com/StackBlurForCanvas\n    Twitter:    @quasimondo\n\n    In case you find this class useful - especially in commercial projects -\n    I am not totally unhappy for a small donation to my PayPal account\n    mario@quasimondo.de\n\n    Or support me on flattr:\n    https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript\n\n    Copyright (c) 2010 Mario Klingemann\n\n    Permission is hereby granted, free of charge, to any person\n    obtaining a copy of this software and associated documentation\n    files (the \"Software\"), to deal in the Software without\n    restriction, including without limitation the rights to use,\n    copy, modify, merge, publish, distribute, sublicense, and/or sell\n    copies of the Software, and to permit persons to whom the\n    Software is furnished to do so, subject to the following\n    conditions:\n\n    The above copyright notice and this permission notice shall be\n    included in all copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n    OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n    HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n    WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n    OTHER DEALINGS IN THE SOFTWARE.\n    */\n\nvar mul_table = [\n    512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,\n    454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,\n    482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,\n    437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,\n    497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,\n    320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,\n    446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,\n    329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,\n    505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,\n    399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,\n    324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,\n    268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,\n    451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,\n    385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,\n    332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,\n    289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];\n\n\nvar shg_table = [\n    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,\n    17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,\n    19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,\n    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,\n    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,\n    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,\n    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,\n    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,\n    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,\n    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,\n    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,\n    23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,\n    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,\n    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,\n    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,\n    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];\n\nfunction BlurStack () {\n\tthis.r = 0;\n\tthis.g = 0;\n\tthis.b = 0;\n\tthis.a = 0;\n\tthis.next = null;\n}\n\nfunction stackblur ( imageData, top_x, top_y, width, height, radius ) {\n\tvar pixels = imageData.data;\n\n\tvar x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,\n\t\tr_out_sum, g_out_sum, b_out_sum, a_out_sum,\n\t\tr_in_sum, g_in_sum, b_in_sum, a_in_sum,\n\t\tpr, pg, pb, pa, rbs;\n\n\tvar div = radius + radius + 1;\n\tvar widthMinus1  = width - 1;\n\tvar heightMinus1 = height - 1;\n\tvar radiusPlus1  = radius + 1;\n\tvar sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;\n\n\tvar stackStart = new BlurStack();\n\tvar stack = stackStart;\n\t\n\tfor ( i = 1; i < div; i++ ) {\n\t\tstack = stack.next = new BlurStack();\n\t\tif (i == radiusPlus1) { var stackEnd = stack; }\n\t}\n\tstack.next = stackStart;\n\t\n\tvar stackIn = null;\n\tvar stackOut = null;\n\n\tyw = yi = 0;\n\n\tvar mul_sum = mul_table[radius];\n\tvar shg_sum = shg_table[radius];\n\n\tfor ( y = 0; y < height; y++ ) {\n\t\tr_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;\n\n\t\tr_out_sum = radiusPlus1 * ( pr = pixels[yi] );\n\t\tg_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );\n\t\tb_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );\n\t\ta_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );\n\n\t\tr_sum += sumFactor * pr;\n\t\tg_sum += sumFactor * pg;\n\t\tb_sum += sumFactor * pb;\n\t\ta_sum += sumFactor * pa;\n\n\t\tstack = stackStart;\n\n\t\tfor ( i = 0; i < radiusPlus1; i++ ) {\n\t\t\tstack.r = pr;\n\t\t\tstack.g = pg;\n\t\t\tstack.b = pb;\n\t\t\tstack.a = pa;\n\t\t\tstack = stack.next;\n\t\t}\n\n\t\tfor ( i = 1; i < radiusPlus1; i++ ) {\n\t\t\tp = yi + ( ( widthMinus1 < i ? widthMinus1 : i ) << 2 );\n\t\t\tr_sum += ( stack.r = ( pr = pixels[p] ) ) * ( rbs = radiusPlus1 - i );\n\t\t\tg_sum += ( stack.g = ( pg = pixels[p+1] ) ) * rbs;\n\t\t\tb_sum += ( stack.b = ( pb = pixels[p+2] ) ) * rbs;\n\t\t\ta_sum += ( stack.a = ( pa = pixels[p+3] ) ) * rbs;\n\n\t\t\tr_in_sum += pr;\n\t\t\tg_in_sum += pg;\n\t\t\tb_in_sum += pb;\n\t\t\ta_in_sum += pa;\n\n\t\t\tstack = stack.next;\n\t\t}\n\n\n\t\tstackIn = stackStart;\n\t\tstackOut = stackEnd;\n\n\t\tfor (x = 0; x < width; x++) {\n\t\t\tpixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;\n\t\t\t\n\t\t\tif (pa != 0) {\n\t\t\t\tpa = 255 / pa;\n\t\t\t\tpixels[yi]   = ( ( r_sum * mul_sum ) >> shg_sum ) * pa;\n\t\t\t\tpixels[yi+1] = ( ( g_sum * mul_sum ) >> shg_sum ) * pa;\n\t\t\t\tpixels[yi+2] = ( ( b_sum * mul_sum ) >> shg_sum ) * pa;\n\t\t\t} else {\n\t\t\t\tpixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;\n\t\t\t}\n\n\t\t\tr_sum -= r_out_sum;\n\t\t\tg_sum -= g_out_sum;\n\t\t\tb_sum -= b_out_sum;\n\t\t\ta_sum -= a_out_sum;\n\n\t\t\tr_out_sum -= stackIn.r;\n\t\t\tg_out_sum -= stackIn.g;\n\t\t\tb_out_sum -= stackIn.b;\n\t\t\ta_out_sum -= stackIn.a;\n\n\t\t\tp =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;\n\n\t\t\tr_in_sum += ( stackIn.r = pixels[p] );\n\t\t\tg_in_sum += ( stackIn.g = pixels[p+1] );\n\t\t\tb_in_sum += ( stackIn.b = pixels[p+2] );\n\t\t\ta_in_sum += ( stackIn.a = pixels[p+3] );\n\n\t\t\tr_sum += r_in_sum;\n\t\t\tg_sum += g_in_sum;\n\t\t\tb_sum += b_in_sum;\n\t\t\ta_sum += a_in_sum;\n\n\t\t\tstackIn = stackIn.next;\n\n\t\t\tr_out_sum += ( pr = stackOut.r );\n\t\t\tg_out_sum += ( pg = stackOut.g );\n\t\t\tb_out_sum += ( pb = stackOut.b );\n\t\t\ta_out_sum += ( pa = stackOut.a );\n\n\t\t\tr_in_sum -= pr;\n\t\t\tg_in_sum -= pg;\n\t\t\tb_in_sum -= pb;\n\t\t\ta_in_sum -= pa;\n\n\t\t\tstackOut = stackOut.next;\n\n\t\t\tyi += 4;\n\t\t}\n\t\tyw += width;\n\t}\n\n\n\tfor ( x = 0; x < width; x++ ) {\n\t\tg_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;\n\n\t\tyi = x << 2;\n\t\tr_out_sum = radiusPlus1 * ( pr = pixels[yi] );\n\t\tg_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );\n\t\tb_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );\n\t\ta_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );\n\n\t\tr_sum += sumFactor * pr;\n\t\tg_sum += sumFactor * pg;\n\t\tb_sum += sumFactor * pb;\n\t\ta_sum += sumFactor * pa;\n\n\t\tstack = stackStart;\n\n\t\tfor ( i = 0; i < radiusPlus1; i++) {\n\t\t\tstack.r = pr;\n\t\t\tstack.g = pg;\n\t\t\tstack.b = pb;\n\t\t\tstack.a = pa;\n\t\t\tstack = stack.next;\n\t\t}\n\n\t\typ = width;\n\n\t\tfor ( i = 1; i <= radius; i++ ) {\n\t\t\tyi = ( yp + x ) << 2;\n\n\t\t\tr_sum += ( stack.r = ( pr = pixels[yi] ) ) * (rbs = radiusPlus1 - i);\n\t\t\tg_sum += ( stack.g = ( pg = pixels[yi+1] ) ) * rbs;\n\t\t\tb_sum += ( stack.b = ( pb = pixels[yi+2] ) ) * rbs;\n\t\t\ta_sum += ( stack.a = ( pa = pixels[yi+3] ) ) * rbs;\n\n\t\t\tr_in_sum += pr;\n\t\t\tg_in_sum += pg;\n\t\t\tb_in_sum += pb;\n\t\t\ta_in_sum += pa;\n\n\t\t\tstack = stack.next;\n\n\t\t\tif ( i < heightMinus1 ) {\n\t\t\t\typ += width;\n\t\t\t}\n\t\t}\n\n\t\tyi = x;\n\t\tstackIn = stackStart;\n\t\tstackOut = stackEnd;\n\n\t\tfor ( y = 0; y < height; y++ ) {\n\t\t\tp = yi << 2;\n\t\t\tpixels[p+3] = pa = ( a_sum * mul_sum ) >> shg_sum;\n\t\t\t\n\t\t\tif ( pa > 0 ) {\n\t\t\t\tpa = 255 / pa;\n\t\t\t\tpixels[p]   = ( ( r_sum * mul_sum ) >> shg_sum) * pa;\n\t\t\t\tpixels[p+1] = ( ( g_sum * mul_sum ) >> shg_sum) * pa;\n\t\t\t\tpixels[p+2] = ( ( b_sum * mul_sum ) >> shg_sum) * pa;\n\t\t\t} else {\n\t\t\t\tpixels[p] = pixels[p+1] = pixels[p+2] = 0;\n\t\t\t}\n\n\t\t\tr_sum -= r_out_sum;\n\t\t\tg_sum -= g_out_sum;\n\t\t\tb_sum -= b_out_sum;\n\t\t\ta_sum -= a_out_sum;\n\n\t\t\tr_out_sum -= stackIn.r;\n\t\t\tg_out_sum -= stackIn.g;\n\t\t\tb_out_sum -= stackIn.b;\n\t\t\ta_out_sum -= stackIn.a;\n\n\t\t\tp = ( x + ( ( ( p = y + radiusPlus1 ) < heightMinus1 ? p : heightMinus1 ) * width ) ) << 2;\n\n\t\t\tr_sum += ( r_in_sum += ( stackIn.r = pixels[p] ) );\n\t\t\tg_sum += ( g_in_sum += ( stackIn.g = pixels[p+1] ) );\n\t\t\tb_sum += ( b_in_sum += ( stackIn.b = pixels[p+2] ) );\n\t\t\ta_sum += ( a_in_sum += ( stackIn.a = pixels[p+3] ) );\n\n\t\t\tstackIn = stackIn.next;\n\n\t\t\tr_out_sum += ( pr = stackOut.r );\n\t\t\tg_out_sum += ( pg = stackOut.g );\n\t\t\tb_out_sum += ( pb = stackOut.b );\n\t\t\ta_out_sum += ( pa = stackOut.a );\n\n\t\t\tr_in_sum -= pr;\n\t\t\tg_in_sum -= pg;\n\t\t\tb_in_sum -= pb;\n\t\t\ta_in_sum -= pa;\n\n\t\t\tstackOut = stackOut.next;\n\n\t\t\tyi += width;\n\t\t}\n\t}\n\n\treturn imageData;\n}\n\nfunction greyscale (imageData) {\n\tvar len = imageData.data.length;\n\tvar brightness;\n\n\tfor ( var i = 0; i < len; i += 4 ) {\n\t\tbrightness = 0.34 * imageData.data[i] + 0.5 * imageData.data[i + 1] + 0.16 * imageData.data[i + 2];\n\n\t\timageData.data[i] = brightness;\n\t\timageData.data[i + 1] = brightness;\n\t\timageData.data[i + 2] = brightness;\n\t}\n\t\t\n\treturn imageData;\n}\n\n// most parts taken from http://jsdo.it/akm2/xoYx\n// (starting line 293++)\nfunction getEdgePoints ( imageData, threshold ) {\n\t// only check every 2nd pixel in imageData to save some time.\n\tvar multiplier = 2;\n\tvar width = imageData.width;\n\tvar height = imageData.height;\n\tvar data = imageData.data;\n\tvar points = [ ];\n\tvar x, y, row, col, sx, sy, step, sum, total;\n\n\tfor ( y = 0; y < height; y += multiplier ) {\n\t\tfor ( x = 0; x < width; x += multiplier ) {\n\t\t\tsum = total = 0;\n\n\t\t\tfor ( row = -1; row <= 1; row++ ) {\n\t\t\t\tsy = y + row;\n\t\t\t\tstep = sy * width;\n\n\t\t\t\tif ( sy >= 0 && sy < height ) {\n\t\t\t\t\tfor ( col = -1; col <= 1; col++ ) {\n\t\t\t\t\t\tsx = x + col;\n\n\t\t\t\t\t\tif ( sx >= 0 && sx < width ) {\n\t\t\t\t\t\t\tsum += data[( sx + step ) << 2];\n\t\t\t\t\t\t\ttotal++;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\tif ( total ) {\n\t\t\t\tsum /= total;\n\t\t\t}\n\n\t\t\tif ( sum > threshold ) {\n\t\t\t\tpoints.push( { x: x, y: y } );\n\t\t\t}\n\t\t}\n\t}\n\n\treturn points;\n}\n\nfunction clamp ( value, min, max ) {\n\treturn value < min ? min : value > max ? max : value;\n}\n\nfunction addVertex ( x, y, hash ) {\n\tvar resultKey = x + '|' + y;\n\n\tif ( ! hash[resultKey] ) {\n\t\thash[resultKey] = { x: x, y: y };\n\t}\n\n\tresultKey = null;\n}\n\nfunction getVerticesFromPoints ( points, maxPointCount, accuracy, width, height ) {\n\t// using hash for all points to make sure we have a set of unique vertices.\n\tvar resultHash = { };\n\n\t// use 25% of max point count to create a background grid.\n\t// this avoids having too many \"big\" triangles in areas of the image with low contrast \n\t// next to very small ones in areas with high contrast\n\t// for every other row, start the x value at > 0, so the grid doesn't look too regular\n\tvar gridPointCount = Math.max( ~~( maxPointCount * ( 1 - accuracy ) ), 5 );\n\n\t// http://stackoverflow.com/a/4107092/229189\n\tvar gridColumns = Math.round( Math.sqrt( gridPointCount ) );\n\tvar gridRows = Math.round( Math.ceil( gridPointCount / gridColumns ) );\n\t\n\tvar xIncrement = ~~( width / gridColumns );\n\tvar yIncrement = ~~( height / gridRows );\n\n\tvar rowIndex = 0;\n\tvar startX = 0;\n\n\tvar x = 0;\n\tvar y = 0;\n\n\tfor ( y = 0; y < height; y+= yIncrement ) {\n\t\trowIndex++;\n\n\t\tstartX = rowIndex % 2 === 0 ? ~~( xIncrement / 2 ) : 0; \n\n\t\tfor ( x = startX; x < width; x += xIncrement ) {\n\t\t\tif ( x < width && y < height ) {\n\t\t\t\t// \"distorting\" the grid a little bit so that the\n\t\t\t\t// background vertices don't appear to be on a straight line (which looks boring)\n\t\t\t\taddVertex(\n\t\t\t\t\t~~( x + ( Math.cos( y ) * ( yIncrement ) ) ),\n\t\t\t\t\t~~( y + ( Math.sin( x ) * ( xIncrement ) ) ),\n\t\t\t\t\tresultHash\n\t\t\t\t);\n\t\t\t}\n\t\t}\n\t}\n\t\n\t// add points in the corners\n\taddVertex( 0, 0, resultHash );\n\taddVertex( width - 1, 0, resultHash );\n\taddVertex( width - 1, height - 1, resultHash );\n\taddVertex( 0, height - 1, resultHash );\n\n\t// add points from all edge points\n\tvar remainingPointCount = maxPointCount - Object.keys( resultHash ).length;\n\tvar edgePointCount = points.length;\n\tvar increment = ~~( edgePointCount / remainingPointCount );\n\n\tif ( maxPointCount > 0 && increment > 0 ) {\n\t\tvar i = 0;\n\n\t\tfor ( i = 0; i < edgePointCount; i += increment ) {\n\t\t\taddVertex( points[i].x, points[i].y, resultHash );\n\t\t}\n\t}\n\n\tpoints = null;\n\n\treturn Object.keys( resultHash ).map( function (key) {\n\t\treturn resultHash[key];\n\t} );\n}\n\nfunction getBoundingBox (points) {\n\tvar xMin = Infinity;\n\tvar xMax = -Infinity;\n\tvar yMin = Infinity;\n\tvar yMax = -Infinity;\n\n\tpoints.forEach( function (p) {\n\t\tif ( p.x < xMin ) {\n\t\t\txMin = p.x;\n\t\t}\n\n\t\tif ( p.y < yMin ) {\n\t\t\tyMin = p.y;\n\t\t}\n\n\t\tif ( p.x > xMax ) {\n\t\t\txMax = p.x;\n\t\t}\n\n\t\tif ( p.y > yMax ) {\n\t\t\tyMax = p.y;\n\t\t}\n\t} );\n\n\treturn {\n\t\tx: xMin,\n\t\ty: yMin,\n\t\twidth: xMax - xMin,\n\t\theight: yMax - yMin\n\t};\n}\n\nfunction addBoundingBoxesToPolygons ( polygons, colorData, params ) {\n\tpolygons.forEach( function (polygon) {\n\t\tpolygon.boundingBox = getBoundingBox( [ polygon.a, polygon.b, polygon.c ] );\n\t} );\n\n\treturn polygons.filter( function (polygon) {\n\t\treturn polygon.boundingBox.width > 0 && polygon.boundingBox.height > 0;\n\t} );\n}\n\n/**\n * Get color object by position\n * @param  {Object} pos         {x,y} object\n * @param  {Object} colorData   Image color data object\n * @param  {Object} [transparentColor] (optional) RGBA color object. Used to set specific color to transparent pixels\n * @return {Object}             RGBA color object\n */\nfunction getColorByPos ( pos, colorData, transparentColor ) {\n\tvar x = clamp( pos.x, 1, colorData.width - 2 );\n\tvar y = clamp( pos.y, 1, colorData.height - 2 );\n\tvar index = ( ( x | 0 ) + ( y | 0 ) * colorData.width ) << 2;\n\n\tif ( index >= colorData.data.length ) {\n\t\tindex = colorData.data.length - 5;\n\t}\n\n\tvar alpha = colorData.data[index + 3] / 255;\n\n\t// Return RGBA color object\n\treturn ( transparentColor && alpha === 0 ) ? transparentColor : {\n\t\tr: colorData.data[index],\n\t\tg: colorData.data[index + 1],\n\t\tb: colorData.data[index + 2],\n\t\ta: alpha\n\t};\n}\n\n/**\n * Get polygon's center point\n * @param  {Object} polygon Polygon object\n * @return {Object}         Point coordinates {x,y}\n */\nfunction polygonCenter (polygon) {\n\treturn {\n\t\tx: ( polygon.a.x + polygon.b.x + polygon.c.x ) * 0.33333,\n\t\ty: ( polygon.a.y + polygon.b.y + polygon.c.y ) * 0.33333\n\t};\n}\n\n/**\n * Is color transparent ?\n * @param  {Object} color Color object\n * @return {Boolean}      Is transparent?\n */\nfunction isTransparent (color) {\n\treturn color.a === 0;\n}\n\n// import objectAssign from 'object-assign'\n\n// https://gist.githubusercontent.com/oriadam/396a4beaaad465ca921618f2f2444d49/raw/76b0de6caffaac59f8af2b4dfa0e0b6397cf447d/colorValues.js\n// return array of [r,g,b,a] from any valid color. if failed returns undefined\nfunction strToColorArr ( color ) {\n\tif ( typeof color === 'string' ) {\n\t\tvar result = [ 0, 0, 0, 0 ];\n\t\t\n\t\tif ( color[0] === '#' )\t{\n\t\t\t// convert #RGB and #RGBA to #RRGGBB and #RRGGBBAA\n\t\t\tif ( color.length < 7 ) {\n\t\t\t\tcolor = \"#\" + (color[1]) + (color[1]) + (color[2]) + (color[2]) + (color[3]) + (color[3]) + (color.length > 4 ? color[4] + color[4] : '');\n\t\t\t}\n\n\t\t\tresult = [\n\t\t\t\tparseInt(color.substr( 1, 2 ), 16),\n\t\t\t\tparseInt(color.substr( 3, 2 ), 16),\n\t\t\t\tparseInt(color.substr( 5, 2 ), 16),\n\t\t\t\tcolor.length > 7 ? parseInt( color.substr( 7, 2 ), 16 ) / 255 : 1\n\t\t\t];\n\t\t}\n\n\t\tif ( color.indexOf('rgb') === 0 ) {\n\t\t\t// convert 'rgb(R,G,B)' to 'rgb(R,G,B)A' which looks awful but will pass the regxep below\n\t\t\tif ( ! color.includes( 'rgba' ) ) {\n\t\t\t\tcolor += ',1';\n\t\t\t}\n\n\t\t\tresult = color\n\t\t\t\t.match( /[\\.\\d]+/g )\n\t\t\t\t.map( function (a) { return +a; } );\n\t\t}\n\t\t\n\t\treturn result;\n\t} else {\n\t\treturn;\n\t}\n\n}\n\nfunction strToColor ( str ) {\n\tvar color = strToColorArr( str );\n\n\tif ( color ) {\n\t\tvar r = color[0];\n\t\tvar g = color[1];\n\t\tvar b = color[2];\n\t\tvar a = color[3];\n\t\treturn { r: r, g: g, b: b, a: a };\n\t} else {\n\t\treturn;\n\t}\n}\n\nfunction addColorToPolygons ( polygons, colorData, params ) {\n\tvar fill = params.fill;\n\tvar stroke = params.stroke;\n\tvar strokeWidth = params.strokeWidth;\n\tvar lineJoin = params.lineJoin;\n\tvar transparentColor = params.transparentColor;\n\tvar fillColor = fill ? strToColor( fill ) : false;\n\tvar strokeColor = stroke ? strToColor( stroke ) : false;\n\n\t/**\n\t * Color override logic\n\t * @param  {Object} color    Color object\n\t * @param  {String} override Override color (fillColor/strokeColor)\n\t * @return {String}          CSS formatted color (rgba,..)\n\t */\n\tvar getColor = function ( color, override ) {\n\t\tvar t = ( isTransparent( color ) && transparentColor );\t// Color is transparent, and transparentColor override is defined\n\t\tvar c = t ? transparentColor : color;\n\t\treturn ( override && !t ) ? override : c;\t\t// Priority: transparentColor -> override -> supplied color\n\t};\n\n\tpolygons.forEach( function (polygon) {\n\t\tvar color = getColorByPos( polygonCenter( polygon ), colorData );\n\n\t\tif ( fill ) {\n\t\t\tpolygon.fill = getColor( color, fillColor );\n\t\t}\n\n\t\tif ( stroke ) {\n\t\t\tpolygon.strokeColor = getColor(color, strokeColor);\n\t\t\tpolygon.strokeWidth = strokeWidth;\n\t\t\tpolygon.lineJoin = lineJoin;\n\t\t}\n\t} );\n\n\treturn polygons;\n}\n\n//  http://stackoverflow.com/a/9733420/229189\nfunction luminance (color) {\n\tvar a = [ color.r, color.g, color.b ].map( function (v) {\n\t\tv /= 255;\n\t\treturn ( v <= 0.03928 ) ? v / 12.92 : Math.pow( ( ( v + 0.055 ) / 1.055 ), 2.4 );\n\t} );\n\n\treturn a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;\n}\n\nfunction distance ( a, b ) {\n\tvar dx = b.x - a.x;\n\tvar dy = b.y - a.y;\n\n\treturn Math.sqrt( ( dx * dx ) + ( dy * dy ) );\n}\n\nfunction addGradientsToPolygons ( polygons, colorData, params ) {\n\tpolygons.forEach( function (polygon) {\n\t\tvar data = { };\n\n\t\t'abc'.split( '' ).forEach( function (key) {\n\t\t\tvar color = getColorByPos( polygon[key], colorData, params.transparentColor );\n\t\t\t\n\t\t\tdata[key] = {\n\t\t\t\tkey: key,\n\t\t\t\tcolor: color,\n\t\t\t\tx: polygon[key].x,\n\t\t\t\ty: polygon[key].y\n\t\t\t};\n\n\t\t\tdata[key].luminance = luminance( data[key].color );\n\n\t\t\tvar otherKeys = 'abc'.replace( key, '' ).split( '' );\n\n\t\t\tdata[key].median = {\n\t\t\t\tx: ( polygon[otherKeys[0]].x + polygon[otherKeys[1]].x ) / 2,\n\t\t\t\ty: ( polygon[otherKeys[0]].y + polygon[otherKeys[1]].y ) / 2\n\t\t\t};\n\n\t\t\tdata[key].medianColor = getColorByPos( data[key].median, colorData, params.transparentColor );\n\t\t\tdata[key].medianLuminance = luminance( data[key].medianColor );\n\t\t} );\n\n\t\t// sort by axis of most difference in luminance\n\t\tvar pointsByDeltaInLuminance = [ data.a, data.b, data.c ].sort( function ( u, v ) {\n\t\t\treturn Math.abs( u.luminance - u.medianLuminance ) - Math.abs( v.luminance - v.medianLuminance );\n\t\t} );\n\n\t\tvar pointWithMostDeltaInLuminance = pointsByDeltaInLuminance[0];\n\t\tvar startPoint = pointsByDeltaInLuminance[0];\n\t\tvar endPoint = pointWithMostDeltaInLuminance.median;\n\n\t\tvar gradienStopPositions = [ startPoint ];\n\n\t\tvar startToEndDistance = distance( startPoint, endPoint );\n\n\t\tfor ( var i = 1, len = params.gradientStops - 2; i < len; i++ ) {\n\t\t\tvar pointDistance = i * ( startToEndDistance / params.gradientStops );\n\t\t\tvar pointPercent = pointDistance / startToEndDistance;\n\t\t\t\n\t\t\tvar point = {\n\t\t\t\tx: startPoint.x + pointPercent * ( endPoint.x - startPoint.x ), \n\t\t\t\ty: startPoint.y + pointPercent * ( endPoint.y - startPoint.y )\n\t\t\t};\n\n\t\t\tgradienStopPositions.push( point );\n\t\t}\n\n\t\tgradienStopPositions.push( endPoint );\n\n\t\tpolygon.gradient = {\n\t\t\tx1: pointWithMostDeltaInLuminance.x,\n\t\t\ty1: pointWithMostDeltaInLuminance.y,\n\t\t\tx2: pointWithMostDeltaInLuminance.median.x,\n\t\t\ty2: pointWithMostDeltaInLuminance.median.y,\n\t\t\tcolors: gradienStopPositions.map( function (pos) {\n\t\t\t\treturn getColorByPos( pos, colorData, params.transparentColor );\n\t\t\t} )\n\t\t};\n\n\t\tif ( params.stroke ) {\n\t\t\tpolygon.strokeWidth = params.strokeWidth;\n\t\t\tpolygon.lineJoin = params.lineJoin;\n\t\t}\n\n\t\tdata = null;\n\t} );\n\n\treturn polygons;\n}\n\n/**\n * Filter polygons with transparent color\n * @param  {Array} polygons    Polygons array\n * @param  {Object} colorData  Color data\n * @return {Array}             Filtered polygons array\n */\nfunction filterTransparentPolygons ( polygons, colorData ) {\n\treturn polygons.filter( function (polygon) {\n\t\tvar color = getColorByPos( polygonCenter( polygon ), colorData );\n\t\treturn ! isTransparent( color );\n\t});\n}\n\nfunction imageDataToPolygons ( imageData, params ) {\n\tif ( isImageData( imageData ) ) {\n\t\tvar imageSize = { width: imageData.width, height: imageData.height };\n\t\tvar tmpImageData = copyImageData( imageData );\n\t\tvar colorImageData = copyImageData( imageData );\n\t\tvar blurredImageData = stackblur( tmpImageData, 0, 0, imageSize.width, imageSize.height, params.blur );\n\t\tvar greyscaleImageData = greyscale( blurredImageData );\n\t\tvar edgesImageData = sobel( greyscaleImageData ).toImageData();\n\t\tvar edgePoints = getEdgePoints( edgesImageData, params.threshold );\n\t\tvar edgeVertices = getVerticesFromPoints( edgePoints, params.vertexCount, params.accuracy, imageSize.width, imageSize.height );\n\t\tvar polygons = delaunay_2( edgeVertices );\n\t\t\n\t\tpolygons = addBoundingBoxesToPolygons( polygons );\n\t\t\n\t\tif ( ! params.transparentColor ) {\n\t\t\tpolygons = filterTransparentPolygons( polygons, colorImageData );\n\t\t}\n\t\t\n\t\tif ( params.fill === true && params.gradients === true ) {\n\t\t\tpolygons = addGradientsToPolygons( polygons, colorImageData, params );\n\t\t} else {\n\t\t\tpolygons = addColorToPolygons( polygons, colorImageData, params );\n\t\t}\n\n\t\treturn polygons;\n\t} else {\n\t\tthrow new Error( \"Can't work with the imageData provided. It seems to be corrupt.\" );\n\t\treturn;\n\t}\n}\n\nonmessage = function (msg) {\n\tif ( msg.data.imageData && msg.data.params ) {\n\t\ttry {\n\t\t\tvar imageData = msg.data.imageData;\n\n\t\t\t// phantomjs seems to have some memory loss so we need to make sure\n\t\t\tif ( typeof imageData.width === 'undefined' && typeof msg.data.imageDataWidth === 'number' ) {\n\t\t\t\timageData.width = msg.data.imageDataWidth;\n\t\t\t}\n\n\t\t\tif ( typeof imageData.height === 'undefined' && typeof msg.data.imageDataHeight === 'number' ) {\n\t\t\t\timageData.height = msg.data.imageDataHeight;\n\t\t\t}\n\t\t\t\n\t\t\tvar polygons = imageDataToPolygons( msg.data.imageData, msg.data.params );\n\t\t\t\t\t\t\n\t\t\tself.postMessage( {\n\t\t\t\tpolygonJSONStr: JSON.stringify( polygons )\n\t\t\t} );\n\t\t} catch ( err ) {\n\t\t\tself.postMessage( { err: err.message || err } );\n\t\t}\n\n\t} else {\n\t\tif ( msg.data.imageData ) {\n\t\t\tself.postMessage( { err: 'Parameters are missing.' } );\n\t\t} else {\n\t\t\tself.postMessage( { err: 'ImageData is missing.' } );\n\t\t}\n\t}\n\t\n\tself.close();\n};\n"],{type:"text/javascript"}))),i={getParams:function(){return t},getInput:u,getOutput:c},s={fromImage:function(t){return d(y,t)},fromImageSync:function(t){return d(y,t,!0)},fromImageData:function(t){return d((function(t){return t}),t)},fromImageDataSync:function(t){return d((function(t){return t}),t,!0)}},l={toData:function(t){return p((function(t){return t}),t)},toDataSync:function(t){return p((function(t){return t}),t,!0)},toDataURL:function(t){return p(w,t)},toDataURLSync:function(t){return p(w,t,!0)},toImageData:function(t){return p(v,t)},toImageDataSync:function(t){return p(v,t,!0)},toSVG:function(t){return p(D,t)},toSVGSync:function(t){return p(D,t,!0)}};function u(){var t=f({},i);return n||f(t,s),t}function c(){var t=f({},i);return e||f(t,l),t}function d(t,e,r){return a=!!r,n=function(){return a?t(e):new Promise((function(n,a){try{n(t(e))}catch(t){a(t)}}))},g()?h():c()}function p(t,n,a){return r=!!a,e=function(e,a){return r?t(e,a,n):new Promise((function(r,o){try{r(t(e,a,n))}catch(t){o(t)}}))},g()?h():u()}function g(){return n&&e}function h(){if(a&&r){var i=n(t),s=G(i,t);return e(s,i)}return new Promise((function(i,s){var l,u;new Promise((function(t,e){if(a)try{t(n(u))}catch(t){e(t)}else n(u).then(t,e)})).then((function(n){return function(t,n){return new Promise((function(e,a){o.addEventListener("message",(function(t){if(t.data&&t.data.polygonJSONStr){var n=JSON.parse(t.data.polygonJSONStr);e(n)}else t.data&&t.data.err?a(t.data.err):a(t)})),o.postMessage({params:n,imageData:t,imageDataWidth:t.width,imageDataHeight:t.height})}))}(l=n,t)}),s).then((function(t){return function(t,n){return new Promise((function(a,o){if(r)try{a(e(t,n))}catch(t){o(t)}else e(t,n).then(a,o)}))}(t,l)}),s).then((function(t){i(t)}),s)}))}return u()}},t.exports=e()}).call(this,e(1))},function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},function(t,n,e){"use strict";e.r(n),e.d(n,"getTriangulationData",(function(){return i})),e.d(n,"invokePolygons",(function(){return l}));var a=e(0),r=e.n(a);const o=t=>{const n=document.createElement("div");return n.innerHTML=t.trim(),n.firstElementChild};var i=({image:t,params:n})=>r()(n).fromImage(t).toSVG().then(o).then(t=>({height:t.getAttribute("height"),width:t.getAttribute("width"),polygons:t.querySelectorAll("polygon")})).then(t=>({...t,polygons:Array.from(t.polygons).map(n=>({points:n.getAttribute("points").split(" ").map(t=>t.split(",")).map(([n,e])=>`${n/t.width*100}% ${e/t.height*100}%`).join(","),color:n.getAttribute("fill")}))}));const s={fade:{pre:({duration:t,color:n,points:e})=>`\n      clip-path: polygon(${e});\n      background: ${n};\n      left: 0;\n      right: 0;\n      top: 0;\n      bottom: 0;\n      position: absolute;\n      opacity: 0;\n      transition: opacity ${t}s cubic-bezier(.7,.3,0,1);`,post:()=>"opacity: 1;"},fly:{pre:({duration:t,points:n})=>`\n        clip-path: polygon(${n.split(",").map(t=>t.split(" ")).map(([t,n])=>`${1*t.replace("%","")+30*Math.random()}% ${n}`).join(",")});\n        background: transparent;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        position: absolute;\n        transition: -webkit-clip-path ${t}s cubic-bezier(.7, .3, 0, 1), clip-path ${t}s cubic-bezier(.7, .3, 0, 1), background-color ${t}s cubic-bezier(.7, .3, 0, 1);`,post:({points:t,color:n})=>`\n      clip-path: polygon(${t});\n      background-color: ${n};`}};var l=({data:t,animation:n,container:e})=>Promise.all(t.polygons.map((t,a)=>{const{polygon:r,promise:o}=(({points:t,color:n,idx:e,type:a="fade",duration:r=.5})=>{const o=document.createElement("div");o.classList.add("polygon"),o.style=s[a].pre({duration:r,color:n,points:t});const i=new Promise(i=>setTimeout(()=>{o.style=o.getAttribute("style")+s[a].post({duration:r,color:n,points:t}),i(o)},100*e/20));return{polygon:o,promise:i}})({...t,idx:a,duration:n.duration,type:n.type});return e.append(r),o}))}])}));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var polygonize_image__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! polygonize-image */ "./node_modules/polygonize-image/dist/polygons.js");
/* harmony import */ var polygonize_image__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(polygonize_image__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _triangulation_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./triangulation-data */ "./src/triangulation-data.js");



const animateImage = async ({
  imageSelector,
  containerSelector,
  animation,
  data1,
  data2,
}) => {
  const image = document.querySelector(imageSelector);
  const container = document.querySelector(containerSelector);

  await Object(polygonize_image__WEBPACK_IMPORTED_MODULE_0__["invokePolygons"])({
    data: data1,
    animation: {
      duration: 0.5,
      type: animation,
    },
    container,
  });

  await Object(polygonize_image__WEBPACK_IMPORTED_MODULE_0__["invokePolygons"])({
    data: data2,
    animation: {
      duration: 0.5,
      type: animation,
    },
    container,
  });

  image.classList.add("show");
};

const init = () => {
  animateImage({
    imageSelector: ".img",
    containerSelector: ".container",
    animation: "fly",
    data1: _triangulation_data__WEBPACK_IMPORTED_MODULE_1__["data1"],
    data2: _triangulation_data__WEBPACK_IMPORTED_MODULE_1__["data2"],
  });
  animateImage({
    imageSelector: ".img-2",
    containerSelector: ".container-2",
    animation: "fade",
    data1: _triangulation_data__WEBPACK_IMPORTED_MODULE_1__["data3"],
    data2: _triangulation_data__WEBPACK_IMPORTED_MODULE_1__["data4"],
  });
};

init();


/***/ }),

/***/ "./src/triangulation-data.js":
/*!***********************************!*\
  !*** ./src/triangulation-data.js ***!
  \***********************************/
/*! exports provided: data1, data2, data3, data4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data1", function() { return data1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data2", function() { return data2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data3", function() { return data3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data4", function() { return data4; });
const data1 = {
  height: "487",
  width: "513",
  polygons: [
    {
      points:
        "11.890838206627679% 56.67351129363449%,10.33138401559454% 85.01026694045176%,17.348927875243664% 83.16221765913757%",
      color: "#26282b",
    },
    {
      points:
        "19.298245614035086% 54.82546201232032%,17.348927875243664% 83.16221765913757%,26.900584795321635% 81.93018480492813%",
      color: "#1b242e",
    },
    {
      points:
        "10.33138401559454% 85.01026694045176%,0% 99.7946611909651%,17.348927875243664% 83.16221765913757%",
      color: "#212017",
    },
    {
      points:
        "29.629629629629626% 25.256673511293638%,28.460038986354775% 53.59342915811089%,38.01169590643275% 31.006160164271044%",
      color: "#292e33",
    },
    {
      points:
        "28.460038986354775% 53.59342915811089%,26.900584795321635% 81.93018480492813%,37.23196881091618% 59.34291581108829%",
      color: "#0f0f0e",
    },
    {
      points:
        "26.900584795321635% 81.93018480492813%,17.348927875243664% 83.16221765913757%,35.86744639376218% 87.67967145790554%",
      color: "#21262c",
    },
    {
      points:
        "17.348927875243664% 83.16221765913757%,33.91812865497076% 116.0164271047228%,35.86744639376218% 87.67967145790554%",
      color: "#18191b",
    },
    {
      points:
        "17.348927875243664% 83.16221765913757%,0% 99.7946611909651%,33.91812865497076% 116.0164271047228%",
      color: "#343028",
    },
    {
      points:
        "20.66276803118908% 26.488706365503077%,28.460038986354775% 53.59342915811089%,29.629629629629626% 25.256673511293638%",
      color: "#393936",
    },
    {
      points:
        "19.298245614035086% 54.82546201232032%,26.900584795321635% 81.93018480492813%,28.460038986354775% 53.59342915811089%",
      color: "#1b222a",
    },
    {
      points:
        "30.01949317738791% -2.8747433264887063%,29.629629629629626% 25.256673511293638%,46.588693957115005% 5.95482546201232%",
      color: "#31393d",
    },
    {
      points:
        "37.23196881091618% 59.34291581108829%,26.900584795321635% 81.93018480492813%,45.02923976608187% 62.62833675564682%",
      color: "#3f3126",
    },
    {
      points:
        "35.86744639376218% 87.67967145790554%,33.91812865497076% 116.0164271047228%,43.46978557504873% 90.96509240246407%",
      color: "#110f10",
    },
    {
      points:
        "35.86744639376218% 87.67967145790554%,43.46978557504873% 90.96509240246407%,50.487329434697855% 81.72484599589322%",
      color: "#5a1e1e",
    },
    {
      points:
        "45.02923976608187% 62.62833675564682%,35.86744639376218% 87.67967145790554%,50.487329434697855% 81.72484599589322%",
      color: "#281e18",
    },
    {
      points:
        "28.460038986354775% 53.59342915811089%,37.23196881091618% 59.34291581108829%,46.198830409356724% 34.29158110882957%",
      color: "#665949",
    },
    {
      points:
        "38.01169590643275% 31.006160164271044%,28.460038986354775% 53.59342915811089%,46.198830409356724% 34.29158110882957%",
      color: "#51422f",
    },
    {
      points:
        "26.900584795321635% 81.93018480492813%,35.86744639376218% 87.67967145790554%,45.02923976608187% 62.62833675564682%",
      color: "#3f352e",
    },
    {
      points:
        "37.23196881091618% 59.34291581108829%,45.02923976608187% 62.62833675564682%,52.436647173489284% 53.38809034907598%",
      color: "#959289",
    },
    {
      points:
        "29.629629629629626% 25.256673511293638%,38.01169590643275% 31.006160164271044%,46.588693957115005% 5.95482546201232%",
      color: "#20272a",
    },
    {
      points:
        "38.01169590643275% 31.006160164271044%,46.198830409356724% 34.29158110882957%,53.80116959064327% 25.051334702258725%",
      color: "#bac0c5",
    },
    {
      points:
        "46.198830409356724% 34.29158110882957%,37.23196881091618% 59.34291581108829%,52.436647173489284% 53.38809034907598%",
      color: "#84837a",
    },
    {
      points:
        "46.588693957115005% 5.95482546201232%,38.01169590643275% 31.006160164271044%,53.80116959064327% 25.051334702258725%",
      color: "#554d41",
    },
    {
      points:
        "45.02923976608187% 62.62833675564682%,50.487329434697855% 81.72484599589322%,60.03898635477582% 75.97535934291582%",
      color: "#352e23",
    },
    {
      points:
        "46.198830409356724% 34.29158110882957%,52.436647173489284% 53.38809034907598%,61.59844054580896% 47.63860369609856%",
      color: "#a0a395",
    },
    {
      points:
        "46.588693957115005% 5.95482546201232%,53.80116959064327% 25.051334702258725%,62.768031189083814% 19.301848049281315%",
      color: "#9d9a89",
    },
    {
      points:
        "43.46978557504873% 90.96509240246407%,33.91812865497076% 116.0164271047228%,67.05653021442495% 116.4271047227926%",
      color: "#6e2a21",
    },
    {
      points:
        "53.80116959064327% 25.051334702258725%,46.198830409356724% 34.29158110882957%,61.59844054580896% 47.63860369609856%",
      color: "#433931",
    },
    {
      points:
        "52.436647173489284% 53.38809034907598%,45.02923976608187% 62.62833675564682%,60.03898635477582% 75.97535934291582%",
      color: "#7b7f77",
    },
    {
      points:
        "60.03898635477582% 75.97535934291582%,50.487329434697855% 81.72484599589322%,69.00584795321637% 88.09034907597535%",
      color: "#5b1e14",
    },
    {
      points:
        "52.436647173489284% 53.38809034907598%,60.03898635477582% 75.97535934291582%,70.37037037037037% 59.753593429158116%",
      color: "#282726",
    },
    {
      points:
        "61.59844054580896% 47.63860369609856%,52.436647173489284% 53.38809034907598%,70.37037037037037% 59.753593429158116%",
      color: "#58655e",
    },
    {
      points:
        "50.487329434697855% 81.72484599589322%,43.46978557504873% 90.96509240246407%,69.00584795321637% 88.09034907597535%",
      color: "#4c1b1c",
    },
    {
      points:
        "53.80116959064327% 25.051334702258725%,61.59844054580896% 47.63860369609856%,71.15009746588694% 31.416837782340863%",
      color: "#6b6360",
    },
    {
      points:
        "62.768031189083814% 19.301848049281315%,53.80116959064327% 25.051334702258725%,71.15009746588694% 31.416837782340863%",
      color: "#333233",
    },
    {
      points:
        "43.46978557504873% 90.96509240246407%,67.05653021442495% 116.4271047227926%,69.00584795321637% 88.09034907597535%",
      color: "#3f160e",
    },
    {
      points:
        "69.00584795321637% 88.09034907597535%,67.05653021442495% 116.4271047227926%,76.60818713450293% 96.30390143737166%",
      color: "#0d1319",
    },
    {
      points:
        "70.37037037037037% 59.753593429158116%,60.03898635477582% 75.97535934291582%,78.16764132553607% 67.96714579055441%",
      color: "#141316",
    },
    {
      points:
        "71.15009746588694% 31.416837782340863%,61.59844054580896% 47.63860369609856%,79.33723196881091% 39.630390143737166%",
      color: "#7c756a",
    },
    {
      points:
        "61.59844054580896% 47.63860369609856%,70.37037037037037% 59.753593429158116%,79.33723196881091% 39.630390143737166%",
      color: "#5e5e5a",
    },
    {
      points:
        "60.03898635477582% 75.97535934291582%,69.00584795321637% 88.09034907597535%,78.16764132553607% 67.96714579055441%",
      color: "#1d1f19",
    },
    {
      points:
        "69.00584795321637% 88.09034907597535%,76.60818713450293% 96.30390143737166%,83.62573099415205% 82.34086242299796%",
      color: "#161716",
    },
    {
      points:
        "78.16764132553607% 67.96714579055441%,69.00584795321637% 88.09034907597535%,83.62573099415205% 82.34086242299796%",
      color: "#353930",
    },
    {
      points:
        "70.37037037037037% 59.753593429158116%,78.16764132553607% 67.96714579055441%,85.57504873294347% 54.00410677618069%",
      color: "#858777",
    },
    {
      points:
        "71.15009746588694% 31.416837782340863%,79.33723196881091% 39.630390143737166%,86.93957115009746% 25.667351129363446%",
      color: "#61625b",
    },
    {
      points:
        "78.16764132553607% 67.96714579055441%,83.62573099415205% 82.34086242299796%,93.17738791423001% 71.45790554414785%",
      color: "#292e33",
    },
    {
      points:
        "76.60818713450293% 96.30390143737166%,67.05653021442495% 116.4271047227926%,100.19493177387915% 114.57905544147845%",
      color: "#4a4742",
    },
    {
      points:
        "99.80506822612085% 99.7946611909651%,76.60818713450293% 96.30390143737166%,100.19493177387915% 114.57905544147845%",
      color: "#2b2d2c",
    },
    {
      points:
        "83.62573099415205% 82.34086242299796%,76.60818713450293% 96.30390143737166%,99.80506822612085% 99.7946611909651%",
      color: "#332922",
    },
    {
      points:
        "93.17738791423001% 71.45790554414785%,83.62573099415205% 82.34086242299796%,102.14424951267056% 86.24229979466119%",
      color: "#171c1d",
    },
    {
      points:
        "83.62573099415205% 82.34086242299796%,99.80506822612085% 99.7946611909651%,102.14424951267056% 86.24229979466119%",
      color: "#3c3d33",
    },
    {
      points:
        "99.80506822612085% 99.7946611909651%,100.19493177387915% 114.57905544147845%,109.74658869395712% 100.2053388090349%",
      color: "#363129",
    },
    {
      points:
        "102.14424951267056% 86.24229979466119%,99.80506822612085% 99.7946611909651%,109.74658869395712% 100.2053388090349%",
      color: "#2a261e",
    },
  ],
};

const data2 = {
  height: "487",
  width: "513",
  polygons: [
    {
      points:
        "0% 99.7946611909651%,-28.84990253411306% 66.52977412731006%,6.432748538011696% 137.5770020533881%",
      color: "#222223",
    },
    {
      points:
        "17.93372319688109% 64.8870636550308%,12.865497076023392% 75.15400410677618%,31.384015594541907% 71.04722792607802%",
      color: "#262d33",
    },
    {
      points:
        "21.44249512670565% 21.765913757700204%,24.171539961013643% 23.81930184804928%,31.968810916179336% 16.83778234086242%",
      color: "#333937",
    },
    {
      points:
        "31.968810916179336% 16.83778234086242%,24.171539961013643% 23.81930184804928%,33.13840155945419% 20.533880903490758%",
      color: "#9f9c98",
    },
    {
      points:
        "31.384015594541907% 71.04722792607802%,12.865497076023392% 75.15400410677618%,35.86744639376218% 79.67145790554414%",
      color: "#111112",
    },
    {
      points:
        "32.748538011695906% 0%,31.57894736842105% 0%,37.03703703703704% 4.517453798767967%",
      color: "#363e45",
    },
    {
      points:
        "37.42690058479532% 50.513347022587276%,25.341130604288498% 47.227926078028744%,37.8167641325536% 51.33470225872689%",
      color: "#272625",
    },
    {
      points:
        "4.678362573099415% 83.77823408624229%,2.729044834307992% 89.5277207392197%,37.8167641325536% 92.81314168377823%",
      color: "#131314",
    },
    {
      points:
        "12.865497076023392% 75.15400410677618%,4.678362573099415% 83.77823408624229%,37.8167641325536% 92.81314168377823%",
      color: "#16181b",
    },
    {
      points:
        "35.86744639376218% 79.67145790554414%,12.865497076023392% 75.15400410677618%,37.8167641325536% 92.81314168377823%",
      color: "#0b0b0e",
    },
    {
      points:
        "24.171539961013643% 44.76386036960985%,25.341130604288498% 47.227926078028744%,38.59649122807017% 41.889117043121146%",
      color: "#564b47",
    },
    {
      points:
        "33.13840155945419% 20.533880903490758%,24.171539961013643% 23.81930184804928%,38.98635477582846% 31.622176591375773%",
      color: "#2f353e",
    },
    {
      points:
        "2.729044834307992% 89.5277207392197%,0% 99.7946611909651%,37.8167641325536% 92.81314168377823%",
      color: "#37332a",
    },
    {
      points:
        "31.968810916179336% 16.83778234086242%,33.13840155945419% 20.533880903490758%,39.37621832358674% 17.659137577002053%",
      color: "#72736c",
    },
    {
      points:
        "33.13840155945419% 20.533880903490758%,38.98635477582846% 31.622176591375773%,39.37621832358674% 27.51540041067762%",
      color: "#453c33",
    },
    {
      points:
        "20.2729044834308% 29.97946611909651%,24.171539961013643% 44.76386036960985%,38.98635477582846% 31.622176591375773%",
      color: "#20282e",
    },
    {
      points:
        "25.341130604288498% 47.227926078028744%,37.42690058479532% 50.513347022587276%,38.59649122807017% 41.889117043121146%",
      color: "#5c5f5e",
    },
    {
      points:
        "24.171539961013643% 44.76386036960985%,38.59649122807017% 41.889117043121146%,39.76608187134503% 35.728952772073924%",
      color: "#4e4b46",
    },
    {
      points:
        "38.98635477582846% 31.622176591375773%,24.171539961013643% 44.76386036960985%,39.76608187134503% 35.728952772073924%",
      color: "#3a322f",
    },
    {
      points:
        "37.42690058479532% 50.513347022587276%,37.8167641325536% 51.33470225872689%,39.76608187134503% 49.69199178644764%",
      color: "#757773",
    },
    {
      points:
        "39.37621832358674% 48.870636550308014%,37.42690058479532% 50.513347022587276%,39.76608187134503% 49.69199178644764%",
      color: "#7f7f7d",
    },
    {
      points:
        "36.25730994152047% 11.088295687885012%,31.968810916179336% 16.83778234086242%,39.37621832358674% 17.659137577002053%",
      color: "#314047",
    },
    {
      points:
        "38.59649122807017% 41.889117043121146%,37.42690058479532% 50.513347022587276%,39.37621832358674% 48.870636550308014%",
      color: "#91948b",
    },
    {
      points:
        "25.341130604288498% 47.227926078028744%,31.384015594541907% 71.04722792607802%,37.8167641325536% 51.33470225872689%",
      color: "#121318",
    },
    {
      points:
        "25.341130604288498% 47.227926078028744%,17.93372319688109% 64.8870636550308%,31.384015594541907% 71.04722792607802%",
      color: "#090e13",
    },
    {
      points:
        "38.59649122807017% 41.889117043121146%,39.37621832358674% 48.870636550308014%,40.93567251461988% 48.04928131416838%",
      color: "#949695",
    },
    {
      points:
        "39.37621832358674% 48.870636550308014%,39.76608187134503% 49.69199178644764%,40.93567251461988% 48.04928131416838%",
      color: "#949494",
    },
    {
      points:
        "33.13840155945419% 20.533880903490758%,39.37621832358674% 27.51540041067762%,39.37621832358674% 17.659137577002053%",
      color: "#323233",
    },
    {
      points:
        "37.8167641325536% 51.33470225872689%,31.384015594541907% 71.04722792607802%,44.054580896686154% 63.65503080082136%",
      color: "#45403d",
    },
    {
      points:
        "39.37621832358674% 27.51540041067762%,38.98635477582846% 31.622176591375773%,47.953216374269005% 30.390143737166326%",
      color: "#9a9c97",
    },
    {
      points:
        "38.98635477582846% 31.622176591375773%,39.76608187134503% 35.728952772073924%,48.343079922027286% 32.85420944558521%",
      color: "#85868b",
    },
    {
      points:
        "47.953216374269005% 30.390143737166326%,38.98635477582846% 31.622176591375773%,48.343079922027286% 32.85420944558521%",
      color: "#c8caca",
    },
    {
      points:
        "31.384015594541907% 71.04722792607802%,35.86744639376218% 79.67145790554414%,44.054580896686154% 63.65503080082136%",
      color: "#3c291e",
    },
    {
      points:
        "0% 99.7946611909651%,6.432748538011696% 137.5770020533881%,37.8167641325536% 92.81314168377823%",
      color: "#1e1f19",
    },
    {
      points:
        "40.93567251461988% 48.04928131416838%,39.76608187134503% 49.69199178644764%,48.732943469785575% 52.15605749486652%",
      color: "#544a3c",
    },
    {
      points:
        "47.173489278752434% 80.49281314168378%,37.8167641325536% 92.81314168377823%,48.343079922027286% 82.54620123203286%",
      color: "#75472a",
    },
    {
      points:
        "35.86744639376218% 79.67145790554414%,37.8167641325536% 92.81314168377823%,47.173489278752434% 80.49281314168378%",
      color: "#4c1b16",
    },
    {
      points:
        "37.03703703703704% 4.517453798767967%,36.25730994152047% 11.088295687885012%,49.512670565302145% 7.392197125256674%",
      color: "#313f47",
    },
    {
      points:
        "38.59649122807017% 41.889117043121146%,40.93567251461988% 48.04928131416838%,49.512670565302145% 43.94250513347023%",
      color: "#adb7b5",
    },
    {
      points:
        "39.76608187134503% 49.69199178644764%,37.8167641325536% 51.33470225872689%,48.732943469785575% 52.15605749486652%",
      color: "#6c695d",
    },
    {
      points:
        "36.25730994152047% 11.088295687885012%,39.37621832358674% 17.659137577002053%,49.902534113060426% 13.141683778234087%",
      color: "#2d373f",
    },
    {
      points:
        "49.512670565302145% 7.392197125256674%,36.25730994152047% 11.088295687885012%,49.902534113060426% 13.141683778234087%",
      color: "#202c35",
    },
    {
      points:
        "49.512670565302145% 59.54825462012321%,44.054580896686154% 63.65503080082136%,49.902534113060426% 60.36960985626283%",
      color: "#58534d",
    },
    {
      points:
        "48.732943469785575% 52.15605749486652%,44.054580896686154% 63.65503080082136%,49.512670565302145% 59.54825462012321%",
      color: "#707267",
    },
    {
      points:
        "37.8167641325536% 51.33470225872689%,44.054580896686154% 63.65503080082136%,48.732943469785575% 52.15605749486652%",
      color: "#7d7874",
    },
    {
      points:
        "49.902534113060426% 13.141683778234087%,39.37621832358674% 17.659137577002053%,50.29239766081871% 15.605749486652979%",
      color: "#5d6164",
    },
    {
      points:
        "39.76608187134503% 35.728952772073924%,38.59649122807017% 41.889117043121146%,50.682261208576996% 41.067761806981515%",
      color: "#705a47",
    },
    {
      points:
        "38.59649122807017% 41.889117043121146%,49.512670565302145% 43.94250513347023%,50.682261208576996% 41.067761806981515%",
      color: "#7e736d",
    },
    {
      points:
        "48.343079922027286% 32.85420944558521%,39.76608187134503% 35.728952772073924%,50.682261208576996% 41.067761806981515%",
      color: "#2e2829",
    },
    {
      points:
        "40.93567251461988% 48.04928131416838%,48.732943469785575% 52.15605749486652%,49.512670565302145% 43.94250513347023%",
      color: "#7f7773",
    },
    {
      points:
        "47.173489278752434% 80.49281314168378%,48.343079922027286% 82.54620123203286%,49.512670565302145% 78.85010266940452%",
      color: "#79332a",
    },
    {
      points:
        "44.054580896686154% 63.65503080082136%,35.86744639376218% 79.67145790554414%,47.173489278752434% 80.49281314168378%",
      color: "#3e3128",
    },
    {
      points:
        "44.054580896686154% 63.65503080082136%,47.173489278752434% 80.49281314168378%,49.512670565302145% 78.85010266940452%",
      color: "#5f4939",
    },
    {
      points:
        "47.953216374269005% 30.390143737166326%,48.343079922027286% 32.85420944558521%,51.85185185185185% 29.158110882956876%",
      color: "#d3d8cf",
    },
    {
      points:
        "48.732943469785575% 52.15605749486652%,49.512670565302145% 59.54825462012321%,52.241715399610136% 52.977412731006154%",
      color: "#8f8c85",
    },
    {
      points:
        "39.37621832358674% 17.659137577002053%,39.37621832358674% 27.51540041067762%,47.953216374269005% 30.390143737166326%",
      color: "#6b5d54",
    },
    {
      points:
        "50.29239766081871% 15.605749486652979%,47.953216374269005% 30.390143737166326%,53.021442495126706% 18.480492813141684%",
      color: "#67624f",
    },
    {
      points:
        "39.37621832358674% 17.659137577002053%,47.953216374269005% 30.390143737166326%,50.29239766081871% 15.605749486652979%",
      color: "#5f5349",
    },
    {
      points:
        "48.343079922027286% 32.85420944558521%,50.682261208576996% 41.067761806981515%,54.58089668615984% 34.90759753593429%",
      color: "#585147",
    },
    {
      points:
        "51.85185185185185% 29.158110882956876%,48.343079922027286% 32.85420944558521%,54.58089668615984% 34.90759753593429%",
      color: "#9da2a6",
    },
    {
      points:
        "49.512670565302145% 59.54825462012321%,49.902534113060426% 60.36960985626283%,54.58089668615984% 57.90554414784395%",
      color: "#898a85",
    },
    {
      points:
        "49.902534113060426% 60.36960985626283%,53.41130604288499% 62.422997946611915%,54.58089668615984% 57.90554414784395%",
      color: "#7d827c",
    },
    {
      points:
        "52.241715399610136% 52.977412731006154%,49.512670565302145% 59.54825462012321%,54.58089668615984% 57.90554414784395%",
      color: "#828283",
    },
    {
      points:
        "48.343079922027286% 82.54620123203286%,37.8167641325536% 92.81314168377823%,54.19103313840156% 87.06365503080082%",
      color: "#1b0800",
    },
    {
      points:
        "49.902534113060426% 60.36960985626283%,44.054580896686154% 63.65503080082136%,53.41130604288499% 62.422997946611915%",
      color: "#a1a196",
    },
    {
      points:
        "47.953216374269005% 30.390143737166326%,51.85185185185185% 29.158110882956876%,53.021442495126706% 18.480492813141684%",
      color: "#8e774f",
    },
    {
      points:
        "54.58089668615984% 57.90554414784395%,53.41130604288499% 62.422997946611915%,55.36062378167641% 58.72689938398358%",
      color: "#838580",
    },
    {
      points:
        "44.054580896686154% 63.65503080082136%,49.512670565302145% 78.85010266940452%,55.36062378167641% 66.94045174537987%",
      color: "#221a11",
    },
    {
      points:
        "53.41130604288499% 62.422997946611915%,44.054580896686154% 63.65503080082136%,55.36062378167641% 66.94045174537987%",
      color: "#818381",
    },
    {
      points:
        "49.512670565302145% 43.94250513347023%,48.732943469785575% 52.15605749486652%,52.241715399610136% 52.977412731006154%",
      color: "#645e59",
    },
    {
      points:
        "52.241715399610136% 52.977412731006154%,54.58089668615984% 57.90554414784395%,57.30994152046783% 54.62012320328542%",
      color: "#5c5a5b",
    },
    {
      points:
        "54.58089668615984% 57.90554414784395%,55.36062378167641% 58.72689938398358%,57.30994152046783% 54.62012320328542%",
      color: "#7a7d7c",
    },
    {
      points:
        "49.512670565302145% 78.85010266940452%,48.343079922027286% 82.54620123203286%,54.19103313840156% 87.06365503080082%",
      color: "#672d28",
    },
    {
      points:
        "37.8167641325536% 92.81314168377823%,6.432748538011696% 137.5770020533881%,56.33528265107213% 134.4969199178645%",
      color: "#33352c",
    },
    {
      points:
        "53.021442495126706% 18.480492813141684%,59.25925925925925% 24.64065708418891%,59.25925925925925% 22.587268993839835%",
      color: "#2b231f",
    },
    {
      points:
        "53.021442495126706% 18.480492813141684%,51.85185185185185% 29.158110882956876%,59.25925925925925% 24.64065708418891%",
      color: "#6c665a",
    },
    {
      points:
        "51.85185185185185% 29.158110882956876%,59.25925925925925% 28.336755646817245%,59.25925925925925% 24.64065708418891%",
      color: "#615347",
    },
    {
      points:
        "51.85185185185185% 29.158110882956876%,54.58089668615984% 34.90759753593429%,59.25925925925925% 28.336755646817245%",
      color: "#846a4f",
    },
    {
      points:
        "49.902534113060426% 13.141683778234087%,50.29239766081871% 15.605749486652979%,53.021442495126706% 18.480492813141684%",
      color: "#3d3e38",
    },
    {
      points:
        "49.902534113060426% 13.141683778234087%,53.021442495126706% 18.480492813141684%,60.42884990253411% 14.37371663244353%",
      color: "#9f9683",
    },
    {
      points:
        "52.241715399610136% 52.977412731006154%,57.30994152046783% 54.62012320328542%,58.86939571150097% 53.798767967145785%",
      color: "#807f79",
    },
    {
      points:
        "54.58089668615984% 34.90759753593429%,50.682261208576996% 41.067761806981515%,60.81871345029239% 40.24640657084189%",
      color: "#7b6a63",
    },
    {
      points:
        "53.021442495126706% 18.480492813141684%,59.25925925925925% 22.587268993839835%,60.42884990253411% 14.37371663244353%",
      color: "#b8bab5",
    },
    {
      points:
        "49.512670565302145% 7.392197125256674%,49.902534113060426% 13.141683778234087%,60.42884990253411% 14.37371663244353%",
      color: "#374143",
    },
    {
      points:
        "50.682261208576996% 41.067761806981515%,49.512670565302145% 43.94250513347023%,60.81871345029239% 40.24640657084189%",
      color: "#858073",
    },
    {
      points:
        "53.41130604288499% 62.422997946611915%,55.36062378167641% 66.94045174537987%,55.36062378167641% 58.72689938398358%",
      color: "#858581",
    },
    {
      points:
        "60.81871345029239% 40.24640657084189%,58.86939571150097% 53.798767967145785%,63.1578947368421% 43.121149897330596%",
      color: "#a1a6a5",
    },
    {
      points:
        "57.30994152046783% 54.62012320328542%,55.36062378167641% 58.72689938398358%,63.1578947368421% 57.08418891170432%",
      color: "#767674",
    },
    {
      points:
        "58.86939571150097% 53.798767967145785%,57.30994152046783% 54.62012320328542%,63.1578947368421% 57.08418891170432%",
      color: "#504e51",
    },
    {
      points:
        "49.512670565302145% 43.94250513347023%,58.86939571150097% 53.798767967145785%,60.81871345029239% 40.24640657084189%",
      color: "#a0a19f",
    },
    {
      points:
        "49.512670565302145% 43.94250513347023%,52.241715399610136% 52.977412731006154%,58.86939571150097% 53.798767967145785%",
      color: "#55544f",
    },
    {
      points:
        "60.42884990253411% 14.37371663244353%,59.25925925925925% 22.587268993839835%,65.10721247563353% 19.301848049281315%",
      color: "#6c6d6f",
    },
    {
      points:
        "55.36062378167641% 58.72689938398358%,55.36062378167641% 66.94045174537987%,63.1578947368421% 57.08418891170432%",
      color: "#64635e",
    },
    {
      points:
        "49.512670565302145% 78.85010266940452%,54.19103313840156% 87.06365503080082%,62.37816764132553% 85.83162217659137%",
      color: "#432711",
    },
    {
      points:
        "59.25925925925925% 28.336755646817245%,54.58089668615984% 34.90759753593429%,60.81871345029239% 40.24640657084189%",
      color: "#86867d",
    },
    {
      points:
        "59.25925925925925% 28.336755646817245%,60.81871345029239% 40.24640657084189%,67.05653021442495% 37.782340862423%",
      color: "#7c766a",
    },
    {
      points:
        "60.81871345029239% 40.24640657084189%,67.05653021442495% 38.60369609856263%,67.05653021442495% 37.782340862423%",
      color: "#38352e",
    },
    {
      points:
        "60.81871345029239% 40.24640657084189%,63.1578947368421% 43.121149897330596%,67.05653021442495% 38.60369609856263%",
      color: "#696763",
    },
    {
      points:
        "59.25925925925925% 22.587268993839835%,59.25925925925925% 24.64065708418891%,65.10721247563353% 19.301848049281315%",
      color: "#2a2f33",
    },
    {
      points:
        "55.36062378167641% 66.94045174537987%,49.512670565302145% 78.85010266940452%,62.37816764132553% 85.83162217659137%",
      color: "#473727",
    },
    {
      points:
        "59.25925925925925% 28.336755646817245%,67.05653021442495% 37.782340862423%,68.61598440545808% 34.08624229979466%",
      color: "#2f3130",
    },
    {
      points:
        "55.36062378167641% 66.94045174537987%,62.37816764132553% 85.83162217659137%,70.76023391812866% 70.63655030800821%",
      color: "#392f28",
    },
    {
      points:
        "69.78557504873294% 61.19096509240246%,55.36062378167641% 66.94045174537987%,70.76023391812866% 70.63655030800821%",
      color: "#111216",
    },
    {
      points:
        "67.05653021442495% 38.60369609856263%,63.1578947368421% 43.121149897330596%,70.56530214424951% 39.42505133470226%",
      color: "#757876",
    },
    {
      points:
        "67.05653021442495% 37.782340862423%,67.05653021442495% 38.60369609856263%,70.56530214424951% 39.42505133470226%",
      color: "#5a5c5b",
    },
    {
      points:
        "68.61598440545808% 34.08624229979466%,67.05653021442495% 37.782340862423%,70.56530214424951% 39.42505133470226%",
      color: "#969a95",
    },
    {
      points:
        "63.1578947368421% 43.121149897330596%,63.1578947368421% 57.08418891170432%,70.17543859649122% 55.441478439425055%",
      color: "#1e1e1e",
    },
    {
      points:
        "63.1578947368421% 57.08418891170432%,69.78557504873294% 61.19096509240246%,70.17543859649122% 55.441478439425055%",
      color: "#272320",
    },
    {
      points:
        "63.1578947368421% 57.08418891170432%,55.36062378167641% 66.94045174537987%,69.78557504873294% 61.19096509240246%",
      color: "#1f1f1d",
    },
    {
      points:
        "59.25925925925925% 24.64065708418891%,59.25925925925925% 28.336755646817245%,65.10721247563353% 19.301848049281315%",
      color: "#4e4b44",
    },
    {
      points:
        "58.86939571150097% 53.798767967145785%,63.1578947368421% 57.08418891170432%,63.1578947368421% 43.121149897330596%",
      color: "#584c46",
    },
    {
      points:
        "70.76023391812866% 70.63655030800821%,62.37816764132553% 85.83162217659137%,72.90448343079922% 76.38603696098562%",
      color: "#303130",
    },
    {
      points:
        "68.61598440545808% 34.08624229979466%,70.56530214424951% 39.42505133470226%,73.2943469785575% 36.96098562628337%",
      color: "#252829",
    },
    {
      points:
        "69.78557504873294% 61.19096509240246%,70.76023391812866% 70.63655030800821%,73.2943469785575% 65.70841889117042%",
      color: "#4d4d45",
    },
    {
      points:
        "65.10721247563353% 19.301848049281315%,59.25925925925925% 28.336755646817245%,68.61598440545808% 34.08624229979466%",
      color: "#20232c",
    },
    {
      points:
        "68.61598440545808% 34.08624229979466%,73.2943469785575% 36.96098562628337%,73.2943469785575% 32.03285420944558%",
      color: "#272629",
    },
    {
      points:
        "68.61598440545808% 34.08624229979466%,73.2943469785575% 32.03285420944558%,74.46393762183236% 25.87268993839836%",
      color: "#343a36",
    },
    {
      points:
        "70.17543859649122% 55.441478439425055%,69.78557504873294% 61.19096509240246%,74.07407407407408% 56.262833675564686%",
      color: "#3f3332",
    },
    {
      points:
        "54.19103313840156% 87.06365503080082%,37.8167641325536% 92.81314168377823%,56.33528265107213% 134.4969199178645%",
      color: "#4a2218",
    },
    {
      points:
        "63.1578947368421% 43.121149897330596%,70.17543859649122% 55.441478439425055%,70.56530214424951% 39.42505133470226%",
      color: "#4f5244",
    },
    {
      points:
        "70.76023391812866% 70.63655030800821%,72.90448343079922% 76.38603696098562%,78.3625730994152% 71.45790554414785%",
      color: "#3f3733",
    },
    {
      points:
        "73.2943469785575% 65.70841889117042%,70.76023391812866% 70.63655030800821%,78.3625730994152% 71.45790554414785%",
      color: "#39352c",
    },
    {
      points:
        "69.78557504873294% 61.19096509240246%,73.2943469785575% 65.70841889117042%,74.07407407407408% 56.262833675564686%",
      color: "#2c2822",
    },
    {
      points:
        "73.2943469785575% 36.96098562628337%,70.56530214424951% 39.42505133470226%,79.14230019493176% 42.299794661190965%",
      color: "#7a423c",
    },
    {
      points:
        "78.3625730994152% 71.45790554414785%,72.90448343079922% 76.38603696098562%,79.14230019493176% 77.61806981519507%",
      color: "#2a2421",
    },
    {
      points:
        "73.2943469785575% 32.03285420944558%,73.2943469785575% 36.96098562628337%,75.6335282651072% 30.800821355236142%",
      color: "#6a6e5e",
    },
    {
      points:
        "73.2943469785575% 65.70841889117042%,78.3625730994152% 71.45790554414785%,80.7017543859649% 68.17248459958932%",
      color: "#36322e",
    },
    {
      points:
        "70.56530214424951% 39.42505133470226%,70.17543859649122% 55.441478439425055%,79.14230019493176% 42.299794661190965%",
      color: "#838478",
    },
    {
      points:
        "79.14230019493176% 42.299794661190965%,81.0916179337232% 45.9958932238193%,81.0916179337232% 45.17453798767967%",
      color: "#696961",
    },
    {
      points:
        "70.17543859649122% 55.441478439425055%,74.07407407407408% 56.262833675564686%,81.0916179337232% 45.9958932238193%",
      color: "#94948f",
    },
    {
      points:
        "80.7017543859649% 68.17248459958932%,78.3625730994152% 71.45790554414785%,81.48148148148148% 69.81519507186859%",
      color: "#262725",
    },
    {
      points:
        "78.3625730994152% 71.45790554414785%,81.48148148148148% 73.1006160164271%,81.48148148148148% 69.81519507186859%",
      color: "#5b5f51",
    },
    {
      points:
        "81.28654970760235% 67.96714579055441%,80.7017543859649% 68.17248459958932%,81.48148148148148% 69.81519507186859%",
      color: "#333536",
    },
    {
      points:
        "78.3625730994152% 71.45790554414785%,79.14230019493176% 77.61806981519507%,81.48148148148148% 73.1006160164271%",
      color: "#3a3530",
    },
    {
      points:
        "81.48148148148148% 73.1006160164271%,79.14230019493176% 77.61806981519507%,83.82066276803118% 81.3141683778234%",
      color: "#595444",
    },
    {
      points:
        "79.14230019493176% 77.61806981519507%,62.37816764132553% 85.83162217659137%,83.82066276803118% 81.3141683778234%",
      color: "#161619",
    },
    {
      points:
        "74.07407407407408% 56.262833675564686%,80.7017543859649% 68.17248459958932%,81.28654970760235% 67.96714579055441%",
      color: "#3d3f35",
    },
    {
      points:
        "74.07407407407408% 56.262833675564686%,73.2943469785575% 65.70841889117042%,80.7017543859649% 68.17248459958932%",
      color: "#36332e",
    },
    {
      points:
        "75.6335282651072% 30.800821355236142%,73.2943469785575% 36.96098562628337%,79.14230019493176% 42.299794661190965%",
      color: "#737373",
    },
    {
      points:
        "72.90448343079922% 76.38603696098562%,62.37816764132553% 85.83162217659137%,79.14230019493176% 77.61806981519507%",
      color: "#737062",
    },
    {
      points:
        "54.19103313840156% 87.06365503080082%,56.33528265107213% 134.4969199178645%,62.37816764132553% 85.83162217659137%",
      color: "#471d10",
    },
    {
      points:
        "62.37816764132553% 85.83162217659137%,56.33528265107213% 134.4969199178645%,88.88888888888889% 99.38398357289527%",
      color: "#171815",
    },
    {
      points:
        "83.82066276803118% 81.3141683778234%,62.37816764132553% 85.83162217659137%,88.88888888888889% 99.38398357289527%",
      color: "#2e312c",
    },
    {
      points:
        "83.82066276803118% 81.3141683778234%,88.88888888888889% 99.38398357289527%,92.00779727095517% 96.91991786447639%",
      color: "#45453d",
    },
    {
      points:
        "83.82066276803118% 81.3141683778234%,92.00779727095517% 96.91991786447639%,98.24561403508771% 84.59958932238193%",
      color: "#47423d",
    },
    {
      points:
        "98.24561403508771% 84.59958932238193%,92.00779727095517% 96.91991786447639%,99.80506822612085% 99.7946611909651%",
      color: "#33332e",
    },
    {
      points:
        "88.88888888888889% 99.38398357289527%,56.33528265107213% 134.4969199178645%,99.80506822612085% 99.7946611909651%",
      color: "#464541",
    },
    {
      points:
        "92.00779727095517% 96.91991786447639%,88.88888888888889% 99.38398357289527%,99.80506822612085% 99.7946611909651%",
      color: "#21221e",
    },
    {
      points:
        "81.28654970760235% 67.96714579055441%,81.48148148148148% 69.81519507186859%,98.24561403508771% 84.59958932238193%",
      color: "#464d56",
    },
    {
      points:
        "81.48148148148148% 69.81519507186859%,81.48148148148148% 73.1006160164271%,98.24561403508771% 84.59958932238193%",
      color: "#11161c",
    },
    {
      points:
        "81.48148148148148% 73.1006160164271%,83.82066276803118% 81.3141683778234%,98.24561403508771% 84.59958932238193%",
      color: "#373e33",
    },
    {
      points:
        "81.0916179337232% 45.9958932238193%,81.28654970760235% 67.96714579055441%,92.39766081871345% 36.139630390143736%",
      color: "#646250",
    },
  ],
};

const data3 = {
  height: "612",
  width: "408",
  polygons: [
    {
      points:
        "10.53921568627451% 76.79738562091504%,0% 99.83660130718954%,18.627450980392158% 85.29411764705883%",
      color: "#fd6a00",
    },
    {
      points:
        "10.53921568627451% 76.79738562091504%,18.627450980392158% 85.29411764705883%,27.205882352941174% 82.02614379084967%",
      color: "#cc3a11",
    },
    {
      points:
        "18.627450980392158% 85.29411764705883%,0% 99.83660130718954%,27.205882352941174% 105.22875816993465%",
      color: "#f65f02",
    },
    {
      points:
        "9.068627450980392% 18.30065359477124%,20.34313725490196% 19.934640522875817%,21.323529411764707% 0%",
      color: "#1c2121",
    },
    {
      points:
        "9.068627450980392% 18.30065359477124%,-7.352941176470589% 28.431372549019606%,20.34313725490196% 19.934640522875817%",
      color: "#896c55",
    },
    {
      points:
        "10.53921568627451% 76.79738562091504%,27.205882352941174% 82.02614379084967%,35.294117647058826% 75.16339869281046%",
      color: "#19331c",
    },
    {
      points:
        "4.166666666666666% 53.59477124183007%,10.53921568627451% 76.79738562091504%,33.82352941176471% 58.98692810457516%",
      color: "#ff7403",
    },
    {
      points:
        "21.323529411764707% 0%,20.34313725490196% 19.934640522875817%,25.735294117647058% 19.607843137254903%",
      color: "#21372c",
    },
    {
      points:
        "20.34313725490196% 19.934640522875817%,20.833333333333336% 46.40522875816993%,37.5% 34.967320261437905%",
      color: "#19201e",
    },
    {
      points:
        "37.00980392156863% 25.163398692810457%,20.34313725490196% 19.934640522875817%,37.5% 34.967320261437905%",
      color: "#051d1f",
    },
    {
      points:
        "25.735294117647058% 19.607843137254903%,20.34313725490196% 19.934640522875817%,37.00980392156863% 25.163398692810457%",
      color: "#3e6061",
    },
    {
      points:
        "33.82352941176471% 58.98692810457516%,10.53921568627451% 76.79738562091504%,35.294117647058826% 75.16339869281046%",
      color: "#fa8d36",
    },
    {
      points:
        "37.00980392156863% 25.163398692810457%,37.5% 34.967320261437905%,42.40196078431372% 30.555555555555557%",
      color: "#663a27",
    },
    {
      points:
        "18.627450980392158% 85.29411764705883%,27.205882352941174% 105.22875816993465%,27.205882352941174% 82.02614379084967%",
      color: "#f7591d",
    },
    {
      points:
        "33.82352941176471% 58.98692810457516%,35.294117647058826% 75.16339869281046%,50.49019607843137% 67.48366013071896%",
      color: "#aa2700",
    },
    {
      points:
        "35.294117647058826% 75.16339869281046%,43.872549019607845% 74.83660130718954%,50.49019607843137% 67.48366013071896%",
      color: "#a4260b",
    },
    {
      points:
        "35.294117647058826% 75.16339869281046%,27.205882352941174% 82.02614379084967%,43.872549019607845% 74.83660130718954%",
      color: "#8d2306",
    },
    {
      points:
        "25.735294117647058% 19.607843137254903%,37.00980392156863% 25.163398692810457%,53.67647058823529% 17.973856209150327%",
      color: "#35413d",
    },
    {
      points:
        "42.40196078431372% 30.555555555555557%,37.5% 34.967320261437905%,54.166666666666664% 32.02614379084967%",
      color: "#ab6f5a",
    },
    {
      points:
        "37.00980392156863% 25.163398692810457%,42.40196078431372% 30.555555555555557%,53.67647058823529% 17.973856209150327%",
      color: "#9b918a",
    },
    {
      points:
        "50.49019607843137% 67.48366013071896%,43.872549019607845% 74.83660130718954%,51.9607843137255% 76.47058823529412%",
      color: "#e44202",
    },
    {
      points:
        "20.833333333333336% 46.40522875816993%,33.82352941176471% 58.98692810457516%,37.5% 34.967320261437905%",
      color: "#b4948a",
    },
    {
      points:
        "54.166666666666664% 32.02614379084967%,37.5% 34.967320261437905%,59.068627450980394% 39.052287581699346%",
      color: "#4f3d31",
    },
    {
      points:
        "21.323529411764707% 0%,25.735294117647058% 19.607843137254903%,53.67647058823529% 17.973856209150327%",
      color: "#5e7472",
    },
    {
      points:
        "43.872549019607845% 74.83660130718954%,27.205882352941174% 82.02614379084967%,51.9607843137255% 76.47058823529412%",
      color: "#d7400c",
    },
    {
      points:
        "33.82352941176471% 58.98692810457516%,50.49019607843137% 67.48366013071896%,60.5392156862745% 63.39869281045751%",
      color: "#ce8a75",
    },
    {
      points:
        "27.205882352941174% 82.02614379084967%,27.205882352941174% 105.22875816993465%,60.5392156862745% 103.26797385620917%",
      color: "#c63204",
    },
    {
      points:
        "27.205882352941174% 105.22875816993465%,43.872549019607845% 110.45751633986929%,60.5392156862745% 103.26797385620917%",
      color: "#da3d01",
    },
    {
      points:
        "37.5% 34.967320261437905%,33.82352941176471% 58.98692810457516%,59.068627450980394% 39.052287581699346%",
      color: "#6d473c",
    },
    {
      points:
        "53.67647058823529% 17.973856209150327%,42.40196078431372% 30.555555555555557%,54.166666666666664% 32.02614379084967%",
      color: "#b28173",
    },
    {
      points:
        "51.9607843137255% 76.47058823529412%,60.5392156862745% 103.26797385620917%,68.62745098039215% 87.41830065359477%",
      color: "#2f2728",
    },
    {
      points:
        "51.9607843137255% 76.47058823529412%,27.205882352941174% 82.02614379084967%,60.5392156862745% 103.26797385620917%",
      color: "#d2390e",
    },
    {
      points:
        "59.068627450980394% 39.052287581699346%,33.82352941176471% 58.98692810457516%,60.5392156862745% 63.39869281045751%",
      color: "#77726a",
    },
    {
      points:
        "60.5392156862745% 63.39869281045751%,51.9607843137255% 76.47058823529412%,67.15686274509804% 64.05228758169935%",
      color: "#da714c",
    },
    {
      points:
        "50.49019607843137% 67.48366013071896%,51.9607843137255% 76.47058823529412%,60.5392156862745% 63.39869281045751%",
      color: "#e55313",
    },
    {
      points:
        "54.166666666666664% 32.02614379084967%,59.068627450980394% 39.052287581699346%,75.73529411764706% 35.62091503267974%",
      color: "#45433b",
    },
    {
      points:
        "59.068627450980394% 39.052287581699346%,70.83333333333334% 40.849673202614376%,75.73529411764706% 35.62091503267974%",
      color: "#50554f",
    },
    {
      points:
        "60.5392156862745% 63.39869281045751%,67.15686274509804% 64.05228758169935%,77.20588235294117% 60.45751633986928%",
      color: "#bc3b23",
    },
    {
      points:
        "70.83333333333334% 40.849673202614376%,60.5392156862745% 63.39869281045751%,77.20588235294117% 60.45751633986928%",
      color: "#cec4c0",
    },
    {
      points:
        "68.62745098039215% 87.41830065359477%,60.5392156862745% 103.26797385620917%,77.20588235294117% 91.83006535947712%",
      color: "#562017",
    },
    {
      points:
        "59.068627450980394% 39.052287581699346%,60.5392156862745% 63.39869281045751%,70.83333333333334% 40.849673202614376%",
      color: "#8f9d9d",
    },
    {
      points:
        "53.67647058823529% 17.973856209150327%,54.166666666666664% 32.02614379084967%,75.73529411764706% 35.62091503267974%",
      color: "#73625b",
    },
    {
      points:
        "77.20588235294117% 91.83006535947712%,60.5392156862745% 103.26797385620917%,85.29411764705883% 95.91503267973856%",
      color: "#162e27",
    },
    {
      points:
        "67.15686274509804% 64.05228758169935%,51.9607843137255% 76.47058823529412%,68.62745098039215% 87.41830065359477%",
      color: "#f46110",
    },
    {
      points:
        "67.15686274509804% 64.05228758169935%,68.62745098039215% 87.41830065359477%,93.87254901960785% 69.28104575163398%",
      color: "#672014",
    },
    {
      points:
        "77.20588235294117% 60.45751633986928%,67.15686274509804% 64.05228758169935%,93.87254901960785% 69.28104575163398%",
      color: "#df5518",
    },
    {
      points:
        "77.20588235294117% 91.83006535947712%,85.29411764705883% 95.91503267973856%,93.87254901960785% 88.88888888888889%",
      color: "#ec5913",
    },
    {
      points:
        "68.62745098039215% 87.41830065359477%,77.20588235294117% 91.83006535947712%,93.87254901960785% 88.88888888888889%",
      color: "#f06418",
    },
    {
      points:
        "68.62745098039215% 87.41830065359477%,93.87254901960785% 88.88888888888889%,93.87254901960785% 69.28104575163398%",
      color: "#e44906",
    },
    {
      points:
        "93.87254901960785% 88.88888888888889%,85.29411764705883% 95.91503267973856%,101.96078431372548% 92.48366013071896%",
      color: "#f75b0e",
    },
    {
      points:
        "85.29411764705883% 95.91503267973856%,99.75490196078431% 99.83660130718954%,101.96078431372548% 92.48366013071896%",
      color: "#f15104",
    },
    {
      points:
        "85.29411764705883% 95.91503267973856%,60.5392156862745% 103.26797385620917%,99.75490196078431% 99.83660130718954%",
      color: "#f45c03",
    },
    {
      points:
        "27.205882352941174% 105.22875816993465%,0% 99.83660130718954%,43.872549019607845% 110.45751633986929%",
      color: "#7c211f",
    },
    {
      points:
        "75.73529411764706% 35.62091503267974%,70.83333333333334% 40.849673202614376%,77.20588235294117% 60.45751633986928%",
      color: "#d7846c",
    },
    {
      points:
        "75.73529411764706% 35.62091503267974%,77.20588235294117% 60.45751633986928%,93.87254901960785% 69.28104575163398%",
      color: "#d35221",
    },
    {
      points:
        "60.5392156862745% 103.26797385620917%,43.872549019607845% 110.45751633986929%,99.75490196078431% 99.83660130718954%",
      color: "#a82710",
    },
    {
      points:
        "93.87254901960785% 69.28104575163398%,93.87254901960785% 88.88888888888889%,101.96078431372548% 92.48366013071896%",
      color: "#fb671d",
    },
    {
      points:
        "101.96078431372548% 92.48366013071896%,99.75490196078431% 99.83660130718954%,110.53921568627452% 97.7124183006536%",
      color: "#fb5f0c",
    },
    {
      points:
        "103.6764705882353% 12.418300653594772%,93.87254901960785% 69.28104575163398%,110.53921568627452% 97.7124183006536%",
      color: "#f55500",
    },
    {
      points:
        "93.87254901960785% 69.28104575163398%,101.96078431372548% 92.48366013071896%,110.53921568627452% 97.7124183006536%",
      color: "#f1753f",
    },
  ],
};

const data4 = {
  height: "612",
  width: "408",
  polygons: [
    {
      points:
        "5.88235294117647% 24.18300653594771%,9.803921568627452% 30.392156862745097%,15.196078431372548% 25.816993464052292%",
      color: "#614127",
    },
    {
      points:
        "13.725490196078432% 10.457516339869281%,16.176470588235293% 11.437908496732026%,16.176470588235293% 9.477124183006536%",
      color: "#47443c",
    },
    {
      points:
        "13.725490196078432% 10.457516339869281%,16.176470588235293% 12.418300653594772%,16.176470588235293% 11.437908496732026%",
      color: "#535047",
    },
    {
      points:
        "13.725490196078432% 10.457516339869281%,9.803921568627452% 13.398692810457517%,16.176470588235293% 12.418300653594772%",
      color: "#28241e",
    },
    {
      points:
        "7.352941176470589% 18.954248366013072%,5.88235294117647% 24.18300653594771%,15.196078431372548% 25.816993464052292%",
      color: "#966447",
    },
    {
      points:
        "9.803921568627452% 30.392156862745097%,17.15686274509804% 34.31372549019608%,18.137254901960784% 32.02614379084967%",
      color: "#37332a",
    },
    {
      points:
        "13.725490196078432% 10.457516339869281%,16.176470588235293% 9.477124183006536%,19.11764705882353% 6.209150326797386%",
      color: "#a6866e",
    },
    {
      points:
        "15.196078431372548% 25.816993464052292%,9.803921568627452% 30.392156862745097%,18.137254901960784% 32.02614379084967%",
      color: "#40392a",
    },
    {
      points:
        "13.725490196078432% 61.111111111111114%,12.745098039215685% 63.0718954248366%,22.058823529411764% 62.091503267973856%",
      color: "#fd7500",
    },
    {
      points:
        "9.803921568627452% 13.398692810457517%,7.352941176470589% 18.954248366013072%,16.176470588235293% 12.418300653594772%",
      color: "#302c1c",
    },
    {
      points:
        "16.176470588235293% 12.418300653594772%,7.352941176470589% 18.954248366013072%,22.54901960784314% 17.973856209150327%",
      color: "#232723",
    },
    {
      points:
        "18.137254901960784% 32.02614379084967%,17.15686274509804% 34.31372549019608%,23.03921568627451% 35.294117647058826%",
      color: "#715235",
    },
    {
      points:
        "7.352941176470589% 18.954248366013072%,15.196078431372548% 25.816993464052292%,22.54901960784314% 17.973856209150327%",
      color: "#9a7f6c",
    },
    {
      points:
        "12.745098039215685% 63.0718954248366%,12.254901960784313% 78.43137254901961%,24.019607843137255% 73.8562091503268%",
      color: "#fb6708",
    },
    {
      points:
        "12.254901960784313% 78.43137254901961%,0% 84.9673202614379%,23.03921568627451% 82.6797385620915%",
      color: "#ff6d00",
    },
    {
      points:
        "15.196078431372548% 25.816993464052292%,22.058823529411764% 24.836601307189543%,22.54901960784314% 17.973856209150327%",
      color: "#775e58",
    },
    {
      points:
        "15.196078431372548% 25.816993464052292%,18.137254901960784% 32.02614379084967%,22.058823529411764% 24.836601307189543%",
      color: "#615e55",
    },
    {
      points:
        "12.745098039215685% 63.0718954248366%,24.019607843137255% 73.8562091503268%,25.49019607843137% 70.26143790849673%",
      color: "#f34a04",
    },
    {
      points:
        "12.254901960784313% 78.43137254901961%,23.03921568627451% 82.6797385620915%,25.49019607843137% 79.41176470588235%",
      color: "#be2d05",
    },
    {
      points:
        "24.019607843137255% 73.8562091503268%,12.254901960784313% 78.43137254901961%,25.49019607843137% 79.41176470588235%",
      color: "#c83915",
    },
    {
      points:
        "22.54901960784314% 17.973856209150327%,22.058823529411764% 24.836601307189543%,26.47058823529412% 21.241830065359476%",
      color: "#4a4b45",
    },
    {
      points:
        "22.058823529411764% 62.091503267973856%,12.745098039215685% 63.0718954248366%,25.49019607843137% 70.26143790849673%",
      color: "#fb5d00",
    },
    {
      points:
        "23.03921568627451% 35.294117647058826%,17.15686274509804% 34.31372549019608%,26.96078431372549% 41.17647058823529%",
      color: "#542f23",
    },
    {
      points:
        "0% 84.9673202614379%,0% 99.83660130718954%,25.98039215686275% 97.05882352941177%",
      color: "#f25201",
    },
    {
      points:
        "23.03921568627451% 82.6797385620915%,0% 84.9673202614379%,27.941176470588236% 89.2156862745098%",
      color: "#7d200d",
    },
    {
      points:
        "0% 84.9673202614379%,25.98039215686275% 97.05882352941177%,27.941176470588236% 89.2156862745098%",
      color: "#df451f",
    },
    {
      points:
        "24.019607843137255% 73.8562091503268%,25.49019607843137% 79.41176470588235%,29.901960784313726% 76.1437908496732%",
      color: "#fd7627",
    },
    {
      points:
        "28.431372549019606% 2.6143790849673203%,22.058823529411764% 4.901960784313726%,30.88235294117647% 7.18954248366013%",
      color: "#aa8f7a",
    },
    {
      points:
        "22.058823529411764% 4.901960784313726%,19.11764705882353% 6.209150326797386%,30.88235294117647% 7.18954248366013%",
      color: "#826959",
    },
    {
      points:
        "23.03921568627451% 82.6797385620915%,27.941176470588236% 89.2156862745098%,31.862745098039213% 85.94771241830065%",
      color: "#a8270f",
    },
    {
      points:
        "19.11764705882353% 6.209150326797386%,16.176470588235293% 11.437908496732026%,30.88235294117647% 7.18954248366013%",
      color: "#706359",
    },
    {
      points:
        "16.176470588235293% 9.477124183006536%,16.176470588235293% 11.437908496732026%,19.11764705882353% 6.209150326797386%",
      color: "#392f27",
    },
    {
      points:
        "28.921568627450984% 44.44444444444444%,22.058823529411764% 62.091503267973856%,33.33333333333333% 59.150326797385624%",
      color: "#fa862a",
    },
    {
      points:
        "22.058823529411764% 62.091503267973856%,33.33333333333333% 60.130718954248366%,33.33333333333333% 59.150326797385624%",
      color: "#fb9d5b",
    },
    {
      points:
        "22.058823529411764% 62.091503267973856%,25.49019607843137% 70.26143790849673%,33.33333333333333% 60.130718954248366%",
      color: "#fa7730",
    },
    {
      points:
        "27.941176470588236% 89.2156862745098%,25.98039215686275% 97.05882352941177%,32.84313725490196% 91.50326797385621%",
      color: "#ba350e",
    },
    {
      points:
        "31.862745098039213% 85.94771241830065%,27.941176470588236% 89.2156862745098%,32.84313725490196% 91.50326797385621%",
      color: "#e85d19",
    },
    {
      points:
        "25.49019607843137% 79.41176470588235%,23.03921568627451% 82.6797385620915%,31.862745098039213% 85.94771241830065%",
      color: "#d43e0a",
    },
    {
      points:
        "16.176470588235293% 11.437908496732026%,16.176470588235293% 12.418300653594772%,30.88235294117647% 7.18954248366013%",
      color: "#535456",
    },
    {
      points:
        "16.176470588235293% 12.418300653594772%,22.54901960784314% 17.973856209150327%,30.88235294117647% 7.18954248366013%",
      color: "#524c42",
    },
    {
      points:
        "25.49019607843137% 70.26143790849673%,24.019607843137255% 73.8562091503268%,29.901960784313726% 76.1437908496732%",
      color: "#fd7c20",
    },
    {
      points:
        "13.725490196078432% 61.111111111111114%,22.058823529411764% 62.091503267973856%,28.921568627450984% 44.44444444444444%",
      color: "#f2a965",
    },
    {
      points:
        "22.058823529411764% 24.836601307189543%,18.137254901960784% 32.02614379084967%,23.03921568627451% 35.294117647058826%",
      color: "#14221c",
    },
    {
      points:
        "22.54901960784314% 17.973856209150327%,26.47058823529412% 21.241830065359476%,39.21568627450981% 14.052287581699346%",
      color: "#182320",
    },
    {
      points:
        "30.88235294117647% 7.18954248366013%,22.54901960784314% 17.973856209150327%,39.21568627450981% 14.052287581699346%",
      color: "#434b46",
    },
    {
      points:
        "29.901960784313726% 76.1437908496732%,25.49019607843137% 79.41176470588235%,39.21568627450981% 80.3921568627451%",
      color: "#d34213",
    },
    {
      points:
        "25.49019607843137% 79.41176470588235%,31.862745098039213% 85.94771241830065%,39.21568627450981% 80.3921568627451%",
      color: "#b73809",
    },
    {
      points:
        "23.03921568627451% 35.294117647058826%,26.96078431372549% 41.17647058823529%,40.68627450980392% 36.27450980392157%",
      color: "#67452f",
    },
    {
      points:
        "25.49019607843137% 70.26143790849673%,29.901960784313726% 76.1437908496732%,42.15686274509804% 72.54901960784314%",
      color: "#fd6f02",
    },
    {
      points:
        "39.21568627450981% 14.052287581699346%,26.47058823529412% 21.241830065359476%,42.64705882352941% 21.895424836601308%",
      color: "#12292a",
    },
    {
      points:
        "28.921568627450984% 44.44444444444444%,33.33333333333333% 59.150326797385624%,42.64705882352941% 51.633986928104584%",
      color: "#cab7a8",
    },
    {
      points:
        "33.33333333333333% 60.130718954248366%,25.49019607843137% 70.26143790849673%,42.64705882352941% 66.33986928104575%",
      color: "#e74b11",
    },
    {
      points:
        "25.49019607843137% 70.26143790849673%,42.15686274509804% 72.54901960784314%,42.64705882352941% 66.33986928104575%",
      color: "#f15602",
    },
    {
      points:
        "26.96078431372549% 41.17647058823529%,28.921568627450984% 44.44444444444444%,42.15686274509804% 37.254901960784316%",
      color: "#705e50",
    },
    {
      points:
        "40.68627450980392% 36.27450980392157%,26.96078431372549% 41.17647058823529%,42.15686274509804% 37.254901960784316%",
      color: "#6d4e3b",
    },
    {
      points:
        "29.901960784313726% 76.1437908496732%,39.21568627450981% 80.3921568627451%,42.15686274509804% 72.54901960784314%",
      color: "#f86009",
    },
    {
      points:
        "30.88235294117647% 7.18954248366013%,39.21568627450981% 14.052287581699346%,45.09803921568628% 8.169934640522875%",
      color: "#5b6d6a",
    },
    {
      points:
        "22.058823529411764% 24.836601307189543%,23.03921568627451% 35.294117647058826%,40.68627450980392% 36.27450980392157%",
      color: "#031111",
    },
    {
      points:
        "26.47058823529412% 21.241830065359476%,22.058823529411764% 24.836601307189543%,42.64705882352941% 21.895424836601308%",
      color: "#032123",
    },
    {
      points:
        "42.64705882352941% 21.895424836601308%,45.09803921568628% 22.54901960784314%,47.05882352941176% 19.607843137254903%",
      color: "#233336",
    },
    {
      points:
        "45.588235294117645% 15.032679738562091%,42.64705882352941% 21.895424836601308%,47.05882352941176% 19.607843137254903%",
      color: "#4f5a56",
    },
    {
      points:
        "39.21568627450981% 14.052287581699346%,42.64705882352941% 21.895424836601308%,45.588235294117645% 15.032679738562091%",
      color: "#081c1b",
    },
    {
      points:
        "22.058823529411764% 24.836601307189543%,40.68627450980392% 36.27450980392157%,42.64705882352941% 21.895424836601308%",
      color: "#14211c",
    },
    {
      points:
        "42.64705882352941% 21.895424836601308%,40.68627450980392% 36.27450980392157%,48.03921568627451% 28.431372549019606%",
      color: "#bc7f6b",
    },
    {
      points:
        "45.09803921568628% 22.54901960784314%,42.64705882352941% 21.895424836601308%,48.03921568627451% 28.431372549019606%",
      color: "#66726b",
    },
    {
      points:
        "42.64705882352941% 66.33986928104575%,42.15686274509804% 72.54901960784314%,45.83333333333333% 66.66666666666666%",
      color: "#97240b",
    },
    {
      points:
        "45.09803921568628% 8.169934640522875%,39.21568627450981% 14.052287581699346%,45.588235294117645% 15.032679738562091%",
      color: "#011212",
    },
    {
      points:
        "28.431372549019606% 2.6143790849673203%,30.88235294117647% 7.18954248366013%,45.09803921568628% 8.169934640522875%",
      color: "#626358",
    },
    {
      points:
        "31.862745098039213% 85.94771241830065%,32.84313725490196% 91.50326797385621%,50% 90.19607843137256%",
      color: "#fd832c",
    },
    {
      points:
        "39.21568627450981% 80.3921568627451%,31.862745098039213% 85.94771241830065%,50% 90.19607843137256%",
      color: "#a42c0d",
    },
    {
      points:
        "42.15686274509804% 37.254901960784316%,28.921568627450984% 44.44444444444444%,42.64705882352941% 51.633986928104584%",
      color: "#806d60",
    },
    {
      points:
        "50% 90.19607843137256%,32.84313725490196% 91.50326797385621%,51.9607843137255% 93.4640522875817%",
      color: "#c53305",
    },
    {
      points:
        "42.15686274509804% 37.254901960784316%,42.64705882352941% 51.633986928104584%,50% 39.54248366013072%",
      color: "#8e6453",
    },
    {
      points:
        "33.33333333333333% 59.150326797385624%,33.33333333333333% 60.130718954248366%,42.64705882352941% 66.33986928104575%",
      color: "#e97141",
    },
    {
      points:
        "42.64705882352941% 51.633986928104584%,49.50980392156863% 50.65359477124183%,50% 39.54248366013072%",
      color: "#b1a99d",
    },
    {
      points:
        "40.68627450980392% 36.27450980392157%,42.15686274509804% 37.254901960784316%,48.03921568627451% 28.431372549019606%",
      color: "#775a4e",
    },
    {
      points:
        "45.588235294117645% 15.032679738562091%,54.41176470588235% 16.99346405228758%,54.41176470588235% 16.013071895424837%",
      color: "#5a6a5f",
    },
    {
      points:
        "45.588235294117645% 15.032679738562091%,47.05882352941176% 19.607843137254903%,54.41176470588235% 16.99346405228758%",
      color: "#656355",
    },
    {
      points:
        "47.05882352941176% 19.607843137254903%,45.09803921568628% 22.54901960784314%,54.41176470588235% 23.202614379084967%",
      color: "#2f5353",
    },
    {
      points:
        "49.50980392156863% 50.65359477124183%,53.92156862745098% 49.673202614379086%,54.41176470588235% 47.05882352941176%",
      color: "#565a54",
    },
    {
      points:
        "50% 39.54248366013072%,54.41176470588235% 47.05882352941176%,54.90196078431373% 42.15686274509804%",
      color: "#7f5a4a",
    },
    {
      points:
        "45.09803921568628% 22.54901960784314%,48.03921568627451% 28.431372549019606%,54.41176470588235% 23.202614379084967%",
      color: "#9f8d89",
    },
    {
      points:
        "50% 39.54248366013072%,49.50980392156863% 50.65359477124183%,54.41176470588235% 47.05882352941176%",
      color: "#8d877b",
    },
    {
      points:
        "32.84313725490196% 91.50326797385621%,25.98039215686275% 97.05882352941177%,51.9607843137255% 93.4640522875817%",
      color: "#fd8130",
    },
    {
      points:
        "33.33333333333333% 59.150326797385624%,42.64705882352941% 66.33986928104575%,42.64705882352941% 51.633986928104584%",
      color: "#dac7b8",
    },
    {
      points:
        "50% 90.19607843137256%,51.9607843137255% 93.4640522875817%,56.86274509803921% 92.48366013071896%",
      color: "#b12f0b",
    },
    {
      points:
        "42.64705882352941% 51.633986928104584%,45.83333333333333% 66.66666666666666%,54.90196078431373% 64.70588235294117%",
      color: "#ab8069",
    },
    {
      points:
        "45.09803921568628% 8.169934640522875%,45.588235294117645% 15.032679738562091%,54.41176470588235% 16.013071895424837%",
      color: "#293f3d",
    },
    {
      points:
        "47.05882352941176% 19.607843137254903%,54.41176470588235% 23.202614379084967%,54.41176470588235% 16.99346405228758%",
      color: "#18393c",
    },
    {
      points:
        "48.03921568627451% 28.431372549019606%,42.15686274509804% 37.254901960784316%,50% 39.54248366013072%",
      color: "#171a17",
    },
    {
      points:
        "42.64705882352941% 51.633986928104584%,42.64705882352941% 66.33986928104575%,45.83333333333333% 66.66666666666666%",
      color: "#d6b6ab",
    },
    {
      points:
        "54.41176470588235% 47.05882352941176%,53.92156862745098% 49.673202614379086%,58.82352941176471% 48.69281045751634%",
      color: "#3e463d",
    },
    {
      points:
        "49.50980392156863% 50.65359477124183%,42.64705882352941% 51.633986928104584%,54.90196078431373% 64.70588235294117%",
      color: "#dacdc4",
    },
    {
      points:
        "39.21568627450981% 80.3921568627451%,50% 90.19607843137256%,60.78431372549019% 83.66013071895425%",
      color: "#eb4d0f",
    },
    {
      points:
        "45.83333333333333% 66.66666666666666%,42.15686274509804% 72.54901960784314%,60.29411764705882% 67.97385620915033%",
      color: "#ea4d0a",
    },
    {
      points:
        "54.90196078431373% 64.70588235294117%,45.83333333333333% 66.66666666666666%,60.29411764705882% 67.97385620915033%",
      color: "#ce8370",
    },
    {
      points:
        "54.41176470588235% 23.202614379084967%,48.03921568627451% 28.431372549019606%,62.254901960784316% 26.797385620915033%",
      color: "#a37d72",
    },
    {
      points:
        "54.90196078431373% 42.15686274509804%,54.41176470588235% 47.05882352941176%,62.745098039215684% 45.09803921568628%",
      color: "#99a29e",
    },
    {
      points:
        "54.41176470588235% 47.05882352941176%,58.82352941176471% 48.69281045751634%,62.745098039215684% 45.09803921568628%",
      color: "#8b9286",
    },
    {
      points:
        "50% 90.19607843137256%,56.86274509803921% 92.48366013071896%,60.78431372549019% 83.66013071895425%",
      color: "#d13b01",
    },
    {
      points:
        "48.03921568627451% 28.431372549019606%,50% 39.54248366013072%,63.725490196078425% 33.006535947712415%",
      color: "#7f5847",
    },
    {
      points:
        "60.78431372549019% 83.66013071895425%,56.86274509803921% 92.48366013071896%,63.725490196078425% 86.9281045751634%",
      color: "#d4510b",
    },
    {
      points:
        "42.15686274509804% 72.54901960784314%,39.21568627450981% 80.3921568627451%,60.78431372549019% 83.66013071895425%",
      color: "#e74408",
    },
    {
      points:
        "56.86274509803921% 92.48366013071896%,51.9607843137255% 93.4640522875817%,64.2156862745098% 95.75163398692811%",
      color: "#c13805",
    },
    {
      points:
        "62.254901960784316% 26.797385620915033%,48.03921568627451% 28.431372549019606%,63.725490196078425% 33.006535947712415%",
      color: "#8c7a70",
    },
    {
      points:
        "50% 39.54248366013072%,54.90196078431373% 42.15686274509804%,63.725490196078425% 33.006535947712415%",
      color: "#71635a",
    },
    {
      points:
        "60.29411764705882% 67.97385620915033%,42.15686274509804% 72.54901960784314%,60.78431372549019% 83.66013071895425%",
      color: "#e84b0e",
    },
    {
      points:
        "53.92156862745098% 49.673202614379086%,49.50980392156863% 50.65359477124183%,54.90196078431373% 64.70588235294117%",
      color: "#9a9994",
    },
    {
      points:
        "54.41176470588235% 16.99346405228758%,54.41176470588235% 23.202614379084967%,68.62745098039215% 20.26143790849673%",
      color: "#47524e",
    },
    {
      points:
        "54.41176470588235% 23.202614379084967%,62.254901960784316% 26.797385620915033%,68.62745098039215% 20.26143790849673%",
      color: "#273c39",
    },
    {
      points:
        "54.41176470588235% 16.013071895424837%,54.41176470588235% 16.99346405228758%,68.62745098039215% 20.26143790849673%",
      color: "#52574f",
    },
    {
      points:
        "63.725490196078425% 86.9281045751634%,56.86274509803921% 92.48366013071896%,64.2156862745098% 95.75163398692811%",
      color: "#cd410f",
    },
    {
      points:
        "60.29411764705882% 67.97385620915033%,60.78431372549019% 83.66013071895425%,71.07843137254902% 77.12418300653596%",
      color: "#da400a",
    },
    {
      points:
        "63.725490196078425% 86.9281045751634%,64.2156862745098% 95.75163398692811%,71.07843137254902% 94.44444444444444%",
      color: "#611e17",
    },
    {
      points:
        "54.90196078431373% 42.15686274509804%,62.745098039215684% 45.09803921568628%,63.725490196078425% 33.006535947712415%",
      color: "#a88f89",
    },
    {
      points:
        "53.92156862745098% 49.673202614379086%,54.90196078431373% 64.70588235294117%,58.82352941176471% 48.69281045751634%",
      color: "#b1b2ad",
    },
    {
      points:
        "63.725490196078425% 33.006535947712415%,62.745098039215684% 45.09803921568628%,73.0392156862745% 38.23529411764706%",
      color: "#62524c",
    },
    {
      points:
        "60.29411764705882% 67.97385620915033%,71.07843137254902% 77.12418300653596%,73.0392156862745% 74.83660130718954%",
      color: "#e85d1c",
    },
    {
      points:
        "60.78431372549019% 83.66013071895425%,63.725490196078425% 86.9281045751634%,73.0392156862745% 81.37254901960785%",
      color: "#e3591b",
    },
    {
      points:
        "71.07843137254902% 77.12418300653596%,60.78431372549019% 83.66013071895425%,73.0392156862745% 81.37254901960785%",
      color: "#f76e36",
    },
    {
      points:
        "50% 0%,45.09803921568628% 8.169934640522875%,54.41176470588235% 16.013071895424837%",
      color: "#485b48",
    },
    {
      points:
        "71.07843137254902% 94.44444444444444%,64.2156862745098% 95.75163398692811%,74.01960784313727% 99.01960784313727%",
      color: "#8f281d",
    },
    {
      points:
        "73.0392156862745% 38.23529411764706%,62.745098039215684% 45.09803921568628%,75% 43.13725490196079%",
      color: "#968a8a",
    },
    {
      points:
        "63.725490196078425% 86.9281045751634%,71.07843137254902% 94.44444444444444%,74.50980392156863% 87.90849673202614%",
      color: "#551a11",
    },
    {
      points:
        "60.29411764705882% 67.97385620915033%,73.0392156862745% 74.83660130718954%,75.49019607843137% 68.95424836601308%",
      color: "#f26c2f",
    },
    {
      points:
        "73.0392156862745% 81.37254901960785%,63.725490196078425% 86.9281045751634%,74.50980392156863% 87.90849673202614%",
      color: "#821e0b",
    },
    {
      points:
        "60.29411764705882% 67.97385620915033%,75.49019607843137% 68.95424836601308%,78.92156862745098% 63.725490196078425%",
      color: "#f56d2f",
    },
    {
      points:
        "78.92156862745098% 63.725490196078425%,75.49019607843137% 68.95424836601308%,79.90196078431373% 66.99346405228758%",
      color: "#692113",
    },
    {
      points:
        "54.90196078431373% 64.70588235294117%,60.29411764705882% 67.97385620915033%,78.92156862745098% 63.725490196078425%",
      color: "#cc8879",
    },
    {
      points:
        "58.82352941176471% 48.69281045751634%,80.3921568627451% 56.5359477124183%,80.3921568627451% 53.92156862745098%",
      color: "#d3765b",
    },
    {
      points:
        "58.82352941176471% 48.69281045751634%,54.90196078431373% 64.70588235294117%,80.3921568627451% 56.5359477124183%",
      color: "#bcb6b1",
    },
    {
      points:
        "54.90196078431373% 64.70588235294117%,78.92156862745098% 63.725490196078425%,80.3921568627451% 56.5359477124183%",
      color: "#b33b10",
    },
    {
      points:
        "62.745098039215684% 45.09803921568628%,58.82352941176471% 48.69281045751634%,80.88235294117648% 52.614379084967325%",
      color: "#afb1b0",
    },
    {
      points:
        "58.82352941176471% 48.69281045751634%,80.3921568627451% 53.92156862745098%,80.88235294117648% 52.614379084967325%",
      color: "#c85a38",
    },
    {
      points:
        "75% 43.13725490196079%,62.745098039215684% 45.09803921568628%,80.88235294117648% 52.614379084967325%",
      color: "#cfb5a1",
    },
    {
      points:
        "80.3921568627451% 56.5359477124183%,78.92156862745098% 63.725490196078425%,82.84313725490196% 57.84313725490197%",
      color: "#8f2811",
    },
    {
      points:
        "75% 43.13725490196079%,80.88235294117648% 52.614379084967325%,82.35294117647058% 46.07843137254902%",
      color: "#cf5b28",
    },
    {
      points:
        "71.07843137254902% 77.12418300653596%,73.0392156862745% 81.37254901960785%,73.0392156862745% 74.83660130718954%",
      color: "#5b1e11",
    },
    {
      points:
        "80.3921568627451% 53.92156862745098%,80.3921568627451% 56.5359477124183%,84.80392156862744% 55.22875816993464%",
      color: "#c64721",
    },
    {
      points:
        "80.3921568627451% 56.5359477124183%,82.84313725490196% 57.84313725490197%,84.80392156862744% 55.22875816993464%",
      color: "#b5411d",
    },
    {
      points:
        "80.88235294117648% 52.614379084967325%,80.3921568627451% 53.92156862745098%,84.80392156862744% 55.22875816993464%",
      color: "#d9582a",
    },
    {
      points:
        "51.9607843137255% 93.4640522875817%,25.98039215686275% 97.05882352941177%,64.2156862745098% 95.75163398692811%",
      color: "#dd4111",
    },
    {
      points:
        "82.35294117647058% 46.07843137254902%,80.88235294117648% 52.614379084967325%,89.70588235294117% 47.712418300653596%",
      color: "#ee7042",
    },
    {
      points:
        "80.88235294117648% 52.614379084967325%,84.80392156862744% 55.22875816993464%,89.70588235294117% 47.712418300653596%",
      color: "#7d2313",
    },
    {
      points:
        "75.49019607843137% 68.95424836601308%,73.0392156862745% 74.83660130718954%,79.90196078431373% 66.99346405228758%",
      color: "#1d1c17",
    },
    {
      points:
        "71.07843137254902% 94.44444444444444%,74.01960784313727% 99.01960784313727%,74.50980392156863% 87.90849673202614%",
      color: "#d64a22",
    },
    {
      points:
        "68.62745098039215% 20.26143790849673%,63.725490196078425% 33.006535947712415%,73.0392156862745% 38.23529411764706%",
      color: "#816954",
    },
    {
      points:
        "62.254901960784316% 26.797385620915033%,63.725490196078425% 33.006535947712415%,68.62745098039215% 20.26143790849673%",
      color: "#60615f",
    },
    {
      points:
        "73.0392156862745% 74.83660130718954%,73.0392156862745% 81.37254901960785%,95.83333333333334% 73.36601307189542%",
      color: "#e8500f",
    },
    {
      points:
        "79.90196078431373% 66.99346405228758%,73.0392156862745% 74.83660130718954%,95.83333333333334% 73.36601307189542%",
      color: "#fe7735",
    },
    {
      points:
        "64.2156862745098% 95.75163398692811%,25.98039215686275% 97.05882352941177%,74.01960784313727% 99.01960784313727%",
      color: "#b92e04",
    },
    {
      points:
        "78.92156862745098% 63.725490196078425%,79.90196078431373% 66.99346405228758%,99.50980392156863% 65.359477124183%",
      color: "#fa6f2c",
    },
    {
      points:
        "82.84313725490196% 57.84313725490197%,78.92156862745098% 63.725490196078425%,99.50980392156863% 65.359477124183%",
      color: "#f77332",
    },
    {
      points:
        "25.98039215686275% 97.05882352941177%,0% 99.83660130718954%,74.01960784313727% 99.01960784313727%",
      color: "#ff6e01",
    },
    {
      points:
        "73.0392156862745% 81.37254901960785%,74.50980392156863% 87.90849673202614%,95.83333333333334% 73.36601307189542%",
      color: "#f45d17",
    },
    {
      points:
        "84.80392156862744% 55.22875816993464%,82.84313725490196% 57.84313725490197%,99.50980392156863% 65.359477124183%",
      color: "#d13a0f",
    },
    {
      points:
        "79.90196078431373% 66.99346405228758%,95.83333333333334% 73.36601307189542%,99.50980392156863% 65.359477124183%",
      color: "#f6783d",
    },
    {
      points:
        "89.70588235294117% 47.712418300653596%,84.80392156862744% 55.22875816993464%,99.50980392156863% 65.359477124183%",
      color: "#eb4b00",
    },
    {
      points:
        "74.01960784313727% 99.01960784313727%,0% 99.83660130718954%,99.75490196078431% 99.83660130718954%",
      color: "#611810",
    },
    {
      points:
        "95.83333333333334% 73.36601307189542%,74.50980392156863% 87.90849673202614%,99.75490196078431% 99.83660130718954%",
      color: "#f05308",
    },
    {
      points:
        "74.50980392156863% 87.90849673202614%,74.01960784313727% 99.01960784313727%,99.75490196078431% 99.83660130718954%",
      color: "#fa6c23",
    },
    {
      points:
        "99.50980392156863% 65.359477124183%,95.83333333333334% 73.36601307189542%,99.75490196078431% 99.83660130718954%",
      color: "#f17446",
    },
  ],
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3BvbHlnb25pemUtaW1hZ2UvZGlzdC9wb2x5Z29ucy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RyaWFuZ3VsYXRpb24tZGF0YS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsZUFBZSxHQUFHLElBQWlELG9CQUFvQixLQUFLLGFBQWlJLENBQUMsb0JBQW9CLG1CQUFtQixTQUFTLGNBQWMsNEJBQTRCLFlBQVkscUJBQXFCLDJEQUEyRCx1Q0FBdUMscUNBQXFDLG9CQUFvQixFQUFFLGlCQUFpQiw0RkFBNEYsZUFBZSx3Q0FBd0MsU0FBUyxFQUFFLG1CQUFtQiw4QkFBOEIscURBQXFELDBCQUEwQiw2Q0FBNkMsc0JBQXNCLDZEQUE2RCxZQUFZLGVBQWUsU0FBUyxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsaUJBQWlCLGtCQUFrQixhQUFhLE1BQU0sYUFBYSxhQUFhLGtCQUFrQixxQkFBcUIsb0JBQW9CLG1GQUFtRixpQkFBaUIsc0pBQXNKLElBQUksT0FBTyxnQkFBZ0IsU0FBUyxrQkFBa0Isb0JBQW9CLHdHQUF3RywwRkFBMEYsZ0JBQWdCLGtDQUFrQyxnQkFBZ0IsdUNBQXVDLDREQUE0RCxnQ0FBZ0Msd0JBQXdCLDJCQUEyQix5QkFBeUIsc0JBQXNCLHlCQUF5Qiw0QkFBNEIsMEJBQTBCLHVCQUF1QixvRkFBb0Ysa0ZBQWtGLGNBQWMscUNBQXFDLFNBQVMsa0JBQWtCLGdDQUFnQyxVQUFVLFNBQVMsV0FBVyx1akNBQXVqQyxTQUFTLGlCQUFpQixHQUFHLFdBQVcsa0NBQWtDLG1DQUFtQyxPQUFPLGlDQUFpQyx3QkFBd0IsY0FBYyxrQ0FBa0MseUhBQXlILGlFQUFpRSxvQ0FBb0MsMkNBQTJDLDJIQUEySCw2REFBNkQsb0JBQW9CLGNBQWMsU0FBUyxJQUFJLElBQUksaURBQWlELG9CQUFvQix1Q0FBdUMscUlBQXFJLDJIQUEySCx5Q0FBeUMsV0FBVyxxQ0FBcUMsMEhBQTBILDJKQUEySixjQUFjLEtBQUssa0JBQWtCLHlDQUF5QywyREFBMkQsa0JBQWtCLGtDQUFrQywyQ0FBMkMsY0FBYyxxQkFBcUIsMkJBQTJCLGNBQWMsc0JBQXNCLHlCQUF5QixnQkFBZ0IsU0FBUyxzQ0FBc0MsU0FBUyxnQ0FBZ0Msc0JBQXNCLHNGQUFzRixrTkFBa04sOEZBQThGLGlDQUFpQyx5Q0FBeUMsdUVBQXVFLDJFQUEyRSxxTEFBcUwsS0FBSyxXQUFXLCtEQUErRCxxQkFBcUIsOEJBQThCLGtCQUFrQixzRkFBc0YsMEZBQTBGLFlBQVksd01BQXdNLGdCQUFnQixZQUFZLFdBQVcsc0JBQXNCLDZFQUE2RSxxQkFBcUIsa0JBQWtCLDJCQUEyQixzSUFBc0ksdVBBQXVQLGdCQUFnQixlQUFlLGNBQWMseUJBQXlCLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxrREFBa0QsaUNBQWlDLFlBQVksNkJBQTZCLDJIQUEySCxZQUFZLG1DQUFtQyx1QkFBdUIsVUFBVSxvREFBb0QsSUFBSSwyQ0FBMkMsZ0VBQWdFLDZCQUE2QixFQUFFLDJCQUEyQixFQUFFLDZCQUE2QixhQUFhLGVBQWUsSUFBSSxFQUFFLDBCQUEwQixJQUFJLGdLQUFnSyxvQkFBb0IsRUFBRSwyQ0FBMkMsK0NBQStDLElBQUksMEVBQTBFLFdBQVcsbURBQW1ELGFBQWEsY0FBYyx3Q0FBd0MsaUdBQWlHLGNBQWMsdUJBQXVCLDhCQUE4QixvQkFBb0IsUUFBUSxJQUFJLFlBQVksSUFBSSxLQUFLLHFDQUFxQyxrQkFBa0IsZUFBZSxJQUFJLFlBQVksSUFBSSxLQUFLLCtWQUErVixrQkFBa0IsUUFBUSxrR0FBa0csNEJBQTRCLEdBQUcsa0JBQWtCLE9BQU8seUJBQXlCLDhCQUE4Qix3SEFBd0gsOERBQThELHVDQUF1QyxvQ0FBb0MsOENBQThDLHVCQUF1QixvQkFBb0Isb0JBQW9CLHNDQUFzQyxHQUFHLEdBQUcsY0FBYywrSEFBK0gsY0FBYyxTQUFTLDBDQUEwQyxzSEFBc0gsWUFBWSxzQ0FBc0Msd0NBQXdDLHNDQUFzQyxJQUFJLG9DQUFvQyxTQUFTLHVIQUF1SCxPQUFPLFNBQVMsMERBQTBELGNBQWMsK0NBQStDLGtFQUFrRSxRQUFRLG93REFBb3dELGFBQWEsbURBQW1ELGtCQUFrQixjQUFjLGFBQWEsUUFBUSxTQUFTLGtCQUFrQixnRUFBZ0Usc0NBQXNDLHNCQUFzQixtQkFBbUIsNkNBQTZDLGNBQWMsT0FBTywyREFBMkQsY0FBYyxlQUFlLGNBQWMsa0JBQWtCLHVCQUF1QixnQkFBZ0IsNlRBQTZULFNBQVMsT0FBTyxJQUFJLFVBQVUsNEJBQTRCLFFBQVEsY0FBYyxxQ0FBcUMsNERBQTRELEdBQUcsdUNBQXVDLGtCQUFrQiw4QkFBOEIsU0FBUyxxQ0FBcUMsbUNBQW1DLE1BQU0sZ0NBQWdDLDhCQUE4QixvQ0FBb0MsYUFBYSxvREFBb0QsK0ZBQStGLEdBQUcsb0RBQW9ELHVGQUF1Riw2R0FBNkcsSUFBSSxLQUFLLGlDQUFpQyxxQ0FBcUMsVUFBVSxzQkFBc0Isb0VBQW9FLGlDQUFpQyxHQUFHLHNFQUFzRSxLQUFLLGdCQUFnQixTQUFTLE9BQU8sOEJBQThCLDZCQUE2Qiw4QkFBOEIsSUFBSSw0RkFBNEYsU0FBUyx1QkFBdUIsK0dBQStHLFFBQVEsSUFBSSxtQ0FBbUMsU0FBUyxrQkFBa0IsTUFBTSxrQkFBa0IsUUFBUSxJQUFJLEtBQUssb0hBQW9ILElBQUkscUNBQXFDLFFBQVEsSUFBSSx3SUFBd0ksZ0JBQWdCLElBQUksc1VBQXNVLEtBQUssUUFBUSxJQUFJLEtBQUsseUhBQXlILElBQUkscUNBQXFDLFlBQVksS0FBSywwSUFBMEksb0JBQW9CLElBQUksNFVBQTRVLFNBQVMsdURBQXVELFFBQVEsK0dBQStHLFFBQVEsSUFBSSw4QkFBOEIsSUFBSSw0REFBNEQsNENBQTRDLG1EQUFtRCxhQUFhLFFBQVEsUUFBUSxJQUFJLHdCQUF3Qiw4Q0FBOEMsWUFBWSxHQUFHLGVBQWUseURBQXlELFFBQVEsSUFBSSxhQUFhLElBQUksTUFBTSxlQUFlLEtBQUssc0NBQXNDLEtBQUssd0NBQXdDLHVCQUF1QixRQUFRLEVBQUUsU0FBUyxtRkFBbUYseUJBQXlCLDhCQUE4QixjQUFjLGdGQUFnRiw0REFBNEQsSUFBSSw2QkFBNkIsRUFBRSx5QkFBeUIscURBQXFELEdBQUcseUNBQXlDLDZCQUE2QixvQkFBb0IsR0FBRyxnRUFBZ0Usa0hBQWtILGNBQWMsc0JBQXNCLDhCQUE4QixnQkFBZ0IsMEVBQTBFLEtBQUssUUFBUSxtRkFBbUYsbUJBQW1CLE9BQU8sNk1BQTZNLCtDQUErQyxxQkFBcUIsWUFBWSxFQUFFLDZDQUE2QyxHQUFHLDJEQUEyRCw4QkFBOEIsZUFBZSxlQUFlLGVBQWUscVFBQXFRLGtMQUFrTCxxQ0FBcUMscUNBQXFDLG9EQUFvRCxvREFBb0QsMkJBQTJCLHlCQUF5QixpQ0FBaUMsS0FBSyxZQUFZLCtCQUErQiwrQkFBK0Isd0JBQXdCLHdCQUF3QixpQ0FBaUMsS0FBSyxHQUFHLDZDQUE2QyxvQkFBb0IsbUNBQW1DLG1DQUFtQyxtQ0FBbUMsb0JBQW9CLGlCQUFpQixJQUFJLHdCQUF3Qix1QkFBdUIsMkJBQTJCLCtDQUErQyx1QkFBdUIscUJBQXFCLHFCQUFxQixZQUFZLGdCQUFnQix1QkFBdUIsdUJBQXVCLDBEQUEwRCw2QkFBNkIsNkJBQTZCLGlCQUFpQixpQ0FBaUMsT0FBTyxLQUFLLEdBQUcsb0NBQW9DLHVHQUF1RyxZQUFZLG1OQUFtTixnSkFBZ0osa0JBQWtCLGdDQUFnQyxzQkFBc0IsRUFBRSxnQ0FBZ0Msc0JBQXNCLEVBQUUsS0FBSyw2V0FBNlcsNFJBQTRSLDJEQUEyRCxjQUFjLDJEQUEyRCxjQUFjLDJEQUEyRCw0RUFBNEUsOEVBQThFLGdCQUFnQiwyTUFBMk0sc0JBQXNCLGtCQUFrQiw2UEFBNlAsMkNBQTJDLCtCQUErQiw0QkFBNEIsMkJBQTJCLGtGQUFrRixvREFBb0QsV0FBVyxpTUFBaU0sMEJBQTBCLE9BQU8sMERBQTBELHNFQUFzRSxnQkFBZ0IsdUJBQXVCLHVCQUF1QixtREFBbUQsT0FBTyxLQUFLLDhMQUE4TCx3QkFBd0IscUJBQXFCLHdHQUF3RyxxQkFBcUIsRUFBRSxFQUFFLGdEQUFnRCxLQUFLLHdCQUF3Qix1RUFBdUUsR0FBRyxHQUFHLEVBQUUscUNBQXFDLHdDQUF3QyxpRUFBaUUsbUJBQW1CLGlDQUFpQyxxQ0FBcUMsb0NBQW9DLE9BQU8sb0NBQW9DLG9DQUFvQyxpRkFBaUYsaUZBQWlGLDJCQUEyQiw2QkFBNkIsb0NBQW9DLGtDQUFrQyxxQkFBcUIsaURBQWlELFVBQVUsT0FBTyxrQ0FBa0Msc0NBQXNDLGVBQWUsbUJBQW1CLFlBQVksT0FBTyxtQkFBbUIsV0FBVyxPQUFPLG1DQUFtQyxtQ0FBbUMsbUNBQW1DLHNDQUFzQyxpREFBaUQsU0FBUyxPQUFPLDZDQUE2QyxtQkFBbUIsWUFBWSxPQUFPLG1CQUFtQixXQUFXLE9BQU8seWZBQXlmLHllQUF5ZSxpRkFBaUYsaUVBQWlFLFNBQVMsT0FBTyxxQ0FBcUMsc0RBQXNELHdEQUF3RCxPQUFPLCtDQUErQyw4REFBOEQsUUFBUSw0QkFBNEIsS0FBSyxxRUFBcUUsK0dBQStHLGtEQUFrRCxPQUFPLE9BQU8sZ0ZBQWdGLHdEQUF3RCwwREFBMEQsa0RBQWtELG1FQUFtRSxxQ0FBcUMsNkJBQTZCLFdBQVcsT0FBTywwREFBMEQsV0FBVyxTQUFTLE9BQU8sd0RBQXdELFNBQVMsT0FBTyxNQUFNLG1EQUFtRCxjQUFjLHNFQUFzRSxLQUFLLE9BQU8sMkJBQTJCLHlDQUF5QyxPQUFPLDRCQUE0QixLQUFLLEtBQUssa0JBQWtCLEdBQUcsRUFBRSw0QkFBNEIsc0NBQXNDLCtPQUErTyxHQUFHLG9EQUFvRCx3Q0FBd0MsMENBQTBDLDRDQUE0Qyx1QkFBdUIsZ0NBQWdDLHNCQUFzQixLQUFLLE9BQU8seURBQXlELGtDQUFrQyxvQ0FBb0Msa0RBQWtELEtBQUssS0FBSyw4QkFBOEIsU0FBUyxxQkFBcUIsVUFBVSxxQkFBcUIsR0FBRywwREFBMEQsb0JBQW9CLElBQUksa0ZBQWtGLHFDQUFxQyw0REFBNEQsS0FBSyxPQUFPLDZEQUE2RCxLQUFLLElBQUksa0RBQWtELCtCQUErQixJQUFJLDREQUE0RCxtQ0FBbUMsSUFBSSxpREFBaUQsZ0NBQWdDLElBQUksNERBQTRELHFDQUFxQyxJQUFJLG9FQUFvRSwwQ0FBMEMseUJBQXlCLEdBQUcsbUNBQW1DLHdDQUF3QyxzQ0FBc0MsdURBQXVELDhDQUE4QyxzR0FBc0csMkJBQTJCLFNBQVMsT0FBTyxzREFBc0QsU0FBUyxPQUFPLE9BQU8sbUVBQW1FLG1EQUFtRCx5RUFBeUUsa0hBQWtILFNBQVMsT0FBTyxxR0FBcUcsaUJBQWlCLHNGQUFzRixXQUFXLGdCQUFnQixrREFBa0QsMkdBQTJHLGlDQUFpQyxhQUFhLE9BQU8sNERBQTRELGFBQWEsV0FBVywwQkFBMEIsU0FBUyxPQUFPLEtBQUssT0FBTyxrRUFBa0UsYUFBYSxLQUFLLEdBQUcsbUdBQW1HLGlFQUFpRSx3Q0FBd0MsMENBQTBDLGlGQUFpRixHQUFHLDB6RkFBMHpGLG9tQ0FBb21DLDJCQUEyQixlQUFlLGVBQWUsZUFBZSxlQUFlLHFCQUFxQixHQUFHLDJFQUEyRSxnQ0FBZ0MscUxBQXFMLG9DQUFvQyxpQ0FBaUMsa0NBQWtDLGtDQUFrQywwREFBMEQsdUNBQXVDLDJCQUEyQixvQkFBb0IsU0FBUyxRQUFRLDJDQUEyQyw2QkFBNkIsc0JBQXNCLEVBQUUsS0FBSyw0QkFBNEIsMkJBQTJCLHdCQUF3QixrQkFBa0Isc0NBQXNDLG9DQUFvQyxrQkFBa0IsWUFBWSxRQUFRLG9GQUFvRixzREFBc0Qsc0RBQXNELHNEQUFzRCxzREFBc0QsZ0NBQWdDLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDJCQUEyQixvQkFBb0IsaUJBQWlCLFFBQVEscUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLDJCQUEyQixPQUFPLG9CQUFvQixpQkFBaUIsUUFBUSxnRUFBZ0UsOEVBQThFLDBEQUEwRCwwREFBMEQsMERBQTBELHlCQUF5Qix1QkFBdUIsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsT0FBTywrQkFBK0IsMEJBQTBCLG1CQUFtQixXQUFXLE9BQU8seURBQXlELDhCQUE4Qix3QkFBd0IsaUVBQWlFLGlFQUFpRSxpRUFBaUUsU0FBUyxPQUFPLHVEQUF1RCxTQUFTLDZCQUE2QiwyQkFBMkIsMkJBQTJCLDJCQUEyQixpQ0FBaUMsK0JBQStCLCtCQUErQiwrQkFBK0Isd0ZBQXdGLGdEQUFnRCxnREFBZ0QsZ0RBQWdELGdEQUFnRCw0QkFBNEIsMEJBQTBCLDBCQUEwQiwwQkFBMEIsaUNBQWlDLDJDQUEyQyx5Q0FBeUMseUNBQXlDLHlDQUF5Qyx5QkFBeUIsdUJBQXVCLHVCQUF1Qix1QkFBdUIsbUNBQW1DLGtCQUFrQixPQUFPLGtCQUFrQixLQUFLLG9CQUFvQixXQUFXLFFBQVEsb0ZBQW9GLG9CQUFvQixvREFBb0Qsc0RBQXNELHNEQUFzRCxzREFBc0QsZ0NBQWdDLDhCQUE4Qiw4QkFBOEIsOEJBQThCLDJCQUEyQixvQkFBb0IsaUJBQWlCLE9BQU8scUJBQXFCLHFCQUFxQixxQkFBcUIscUJBQXFCLDJCQUEyQixPQUFPLG1CQUFtQixvQkFBb0IsYUFBYSxRQUFRLDZCQUE2QiwrRUFBK0UsMkRBQTJELDJEQUEyRCwyREFBMkQseUJBQXlCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLDZCQUE2QixtQ0FBbUMsc0JBQXNCLFNBQVMsT0FBTyxlQUFlLDJCQUEyQiwwQkFBMEIsb0JBQW9CLFlBQVksUUFBUSxvQkFBb0IsMERBQTBELCtCQUErQix3QkFBd0IsK0RBQStELCtEQUErRCwrREFBK0QsU0FBUyxPQUFPLG9EQUFvRCxTQUFTLDZCQUE2QiwyQkFBMkIsMkJBQTJCLDJCQUEyQixpQ0FBaUMsK0JBQStCLCtCQUErQiwrQkFBK0IscUdBQXFHLDZEQUE2RCw2REFBNkQsNkRBQTZELDZEQUE2RCxpQ0FBaUMsMkNBQTJDLHlDQUF5Qyx5Q0FBeUMseUNBQXlDLHlCQUF5Qix1QkFBdUIsdUJBQXVCLHVCQUF1QixtQ0FBbUMsc0JBQXNCLE9BQU8sS0FBSyx1QkFBdUIsR0FBRyxvQ0FBb0Msb0NBQW9DLG1CQUFtQixzQkFBc0IsU0FBUyxXQUFXLHlHQUF5Ryx1Q0FBdUMseUNBQXlDLHlDQUF5QyxLQUFLLDJCQUEyQixHQUFHLGtJQUFrSSx3RkFBd0YsZ0NBQWdDLGtDQUFrQyw4QkFBOEIscUJBQXFCLGlEQUFpRCxrQkFBa0IsWUFBWSxvQkFBb0Isa0JBQWtCLFdBQVcsb0JBQW9CLHdCQUF3Qix5QkFBeUIsVUFBVSxVQUFVLHVCQUF1Qiw0QkFBNEIsMkNBQTJDLDJCQUEyQixVQUFVLFVBQVUsMkJBQTJCLDhDQUE4QyxnREFBZ0Qsd0JBQXdCLGVBQWUsYUFBYSxXQUFXLFNBQVMsd0JBQXdCLHVCQUF1QixTQUFTLGtDQUFrQyx3QkFBd0IsYUFBYSxHQUFHLFNBQVMsT0FBTyxLQUFLLG9CQUFvQixHQUFHLHdDQUF3Qyx5REFBeUQsR0FBRyx1Q0FBdUMsZ0NBQWdDLGdDQUFnQyx5QkFBeUIsY0FBYyxLQUFLLHVCQUF1QixHQUFHLHVGQUF1RixxR0FBcUcsR0FBRyxnWUFBZ1ksa0hBQWtILDJFQUEyRSxtREFBbUQsNkNBQTZDLHVCQUF1QixtQkFBbUIsZ0JBQWdCLGNBQWMsa0JBQWtCLFlBQVksbUJBQW1CLGlCQUFpQiwrREFBK0QsMEJBQTBCLFdBQVcsb0JBQW9CLHdDQUF3QyxnVUFBZ1UsU0FBUyxPQUFPLEtBQUssc0VBQXNFLDBDQUEwQyxtREFBbUQsMkNBQTJDLHVIQUF1SCx1Q0FBdUMsK0RBQStELGlEQUFpRCxnQkFBZ0Isb0JBQW9CLG9CQUFvQixtQkFBbUIsMERBQTBELE9BQU8sS0FBSyxvQkFBb0IsNERBQTRELDZCQUE2QixLQUFLLEdBQUcsR0FBRyxzQ0FBc0Msd0JBQXdCLHlCQUF5Qix3QkFBd0IseUJBQXlCLG9DQUFvQyx5QkFBeUIsbUJBQW1CLE9BQU8sMkJBQTJCLG1CQUFtQixPQUFPLDJCQUEyQixtQkFBbUIsT0FBTywyQkFBMkIsbUJBQW1CLE9BQU8sS0FBSyxHQUFHLGNBQWMsb0ZBQW9GLEdBQUcseUVBQXlFLDBDQUEwQyxrRkFBa0YsS0FBSyxHQUFHLGtEQUFrRCw2RUFBNkUsS0FBSyxHQUFHLEdBQUcsc0RBQXNELE9BQU8sY0FBYyxJQUFJLHFCQUFxQixPQUFPLGtEQUFrRCxPQUFPLGdIQUFnSCxPQUFPLGtHQUFrRyxtREFBbUQsb0RBQW9ELGlFQUFpRSw2Q0FBNkMsd0NBQXdDLEtBQUssa0RBQWtELHNHQUFzRyx5SEFBeUgsR0FBRyxvREFBb0QsT0FBTyxxQ0FBcUMsT0FBTyw0QkFBNEIsSUFBSSx5Q0FBeUMsWUFBWSxtSUFBbUksR0FBRyxnREFBZ0QsT0FBTyxpQ0FBaUMsUUFBUSw0REFBNEQseUJBQXlCLEdBQUcsaVRBQWlULHNDQUFzQyxrQ0FBa0Msc0NBQXNDLDJGQUEyRixzSkFBc0osU0FBUyxnUEFBZ1AsT0FBTywyQ0FBMkMsNElBQTRJLHdCQUF3QixTQUFTLHNGQUFzRixXQUFXLEVBQUUsR0FBRyxPQUFPLDBCQUEwQixLQUFLLE9BQU8sYUFBYSxLQUFLLEtBQUssaUNBQWlDLHFDQUFxQyxvQkFBb0IsdUJBQXVCLHVCQUF1Qix1QkFBdUIsdUJBQXVCLGNBQWMsMEJBQTBCLEtBQUssT0FBTyxhQUFhLEtBQUssR0FBRyxpRUFBaUUsMkJBQTJCLCtCQUErQix5Q0FBeUMsbUNBQW1DLG1EQUFtRCxzREFBc0QsNERBQTRELG9EQUFvRCxPQUFPLHNDQUFzQyxPQUFPLGdFQUFnRSxPQUFPLCtGQUErRiw2REFBNkQsOEdBQThHLCtDQUErQyxxRUFBcUUsNENBQTRDLHVFQUF1RSxxQkFBcUIsb0RBQW9ELE9BQU8sdUJBQXVCLDJEQUEyRCwwQ0FBMEMsb0NBQW9DLE9BQU8sS0FBSyxHQUFHLHNCQUFzQixHQUFHLCtFQUErRSw2REFBNkQsZUFBZSx1RkFBdUYsS0FBSyxHQUFHLDJEQUEyRCxHQUFHLGdDQUFnQyx1QkFBdUIsdUJBQXVCLG9EQUFvRCxHQUFHLHFFQUFxRSwwQ0FBMEMsa0JBQWtCLEdBQUcsbURBQW1ELHNGQUFzRiw2QkFBNkIsMkdBQTJHLDZEQUE2RCwrREFBK0QsOEJBQThCLHVKQUF1Six3R0FBd0csdUVBQXVFLE9BQU8sR0FBRyxnSkFBZ0oseUdBQXlHLE9BQU8sR0FBRyx3RUFBd0UsbURBQW1ELDBEQUEwRCxrREFBa0Qsa0VBQWtFLHdEQUF3RCxTQUFTLFFBQVEsOEVBQThFLDhEQUE4RCw2QkFBNkIsNEpBQTRKLDZDQUE2QyxPQUFPLDhDQUE4Qyw0QkFBNEIsd1BBQXdQLDBFQUEwRSxTQUFTLFVBQVUsOEJBQThCLGlEQUFpRCwyQ0FBMkMsT0FBTyxvQkFBb0IsS0FBSyxHQUFHLHNCQUFzQixHQUFHLGdFQUFnRSxNQUFNLHlDQUF5QyxPQUFPLG9DQUFvQyxNQUFNLHVHQUF1RyxnREFBZ0QsdUVBQXVFLHNDQUFzQyxLQUFLLEVBQUUsR0FBRyx3REFBd0QscUNBQXFDLHVCQUF1QixvREFBb0Qsb0RBQW9ELHNEQUFzRCw2R0FBNkcsNkRBQTZELHFFQUFxRSx5RUFBeUUscUlBQXFJLGdEQUFnRCw4REFBOEQsOENBQThDLHlFQUF5RSxPQUFPLHNFQUFzRSw4RUFBOEUsT0FBTyxPQUFPLDBFQUEwRSxPQUFPLHdCQUF3QixLQUFLLE9BQU8sNkZBQTZGLGFBQWEsS0FBSyxHQUFHLGdDQUFnQyxrREFBa0QsV0FBVywyQ0FBMkMsbUxBQW1MLG9EQUFvRCxTQUFTLDBHQUEwRyxzREFBc0QsU0FBUywwRkFBMEYseUNBQXlDLDZEQUE2RCxHQUFHLE9BQU8sZ0JBQWdCLDJCQUEyQiwwQkFBMEIsR0FBRyxPQUFPLE9BQU8sT0FBTyxpQ0FBaUMsMkJBQTJCLGlDQUFpQyxHQUFHLE9BQU8sT0FBTywyQkFBMkIsK0JBQStCLEdBQUcsT0FBTyxLQUFLLHFCQUFxQixJQUFJLE1BQU0sdUJBQXVCLE9BQU8scUJBQXFCLFNBQVMsd0JBQXdCLElBQUksc0JBQXNCLGNBQWMsMkJBQTJCLGlCQUFpQiwyQkFBMkIsc0JBQXNCLFNBQVMsS0FBSywrQkFBK0Isc0JBQXNCLFNBQVMsU0FBUyxJQUFJLG1CQUFtQixzQkFBc0IsU0FBUyxLQUFLLHdCQUF3QixzQkFBc0IsU0FBUyxRQUFRLHVCQUF1QixjQUFjLDJCQUEyQixpQkFBaUIseUJBQXlCLGNBQWMsNkJBQTZCLGlCQUFpQixtQkFBbUIsY0FBYyx1QkFBdUIsbUJBQW1CLGFBQWEsVUFBVSxJQUFJLG1CQUFtQixhQUFhLFVBQVUsSUFBSSxtQkFBbUIsa0JBQWtCLDBCQUEwQix5Q0FBeUMsSUFBSSxRQUFRLFNBQVMsTUFBTSxHQUFHLGFBQWEsa0JBQWtCLDZCQUE2Qiw2Q0FBNkMsSUFBSSxZQUFZLFNBQVMsTUFBTSxHQUFHLGFBQWEsYUFBYSxZQUFZLGFBQWEsU0FBUyxvQkFBb0IsY0FBYyxrQ0FBa0MsUUFBUSwyQkFBMkIsU0FBUyxRQUFRLFNBQVMsS0FBSyxvQkFBb0IscUJBQXFCLHFCQUFxQixrQ0FBa0MsMENBQTBDLGtDQUFrQyx3Q0FBd0MsS0FBSywyQ0FBMkMsa0JBQWtCLHFFQUFxRSxFQUFFLEdBQUcsUUFBUSx1QkFBdUIscUJBQXFCLGtDQUFrQyxTQUFTLFVBQVUsU0FBUyxLQUFLLHNCQUFzQixHQUFHLE1BQU0sdUJBQXVCLEtBQUssS0FBSyxHQUFHLFlBQVksZUFBZSxrQkFBa0IsZUFBZSxNQUFNLGFBQWEsWUFBWSxHQUFHLElBQUksbUNBQW1DLFNBQVMsb0NBQW9DLFlBQVksaUJBQWlCLGFBQWEsZ0RBQWdELFNBQVMsc0NBQXNDLFNBQVMsR0FBRyxvQkFBb0IsWUFBWSxzQ0FBc0MsaURBQWlELFFBQVEsaUJBQWlCLGlEQUFpRCxxR0FBcUcsYUFBYSw4Q0FBOEMsZ0ZBQWdGLGNBQWMsSUFBSSxlQUFlLDJDQUEyQyxHQUFHLEdBQUcsU0FBUyxNQUFNLE1BQU0sNEJBQTRCLGlDQUFpQyxFQUFFLEVBQUUsc0JBQXNCLEdBQUcsZ0JBQWdCLGlCQUFpQixlQUFlLGtCQUFrQiwyQkFBMkIsbUJBQW1CLDhCQUE4QixFQUFFLDBCQUEwQix1QkFBdUIsRUFBRSxNQUFNLE1BQU0sb0JBQW9CLG1DQUFtQyxrREFBa0QscUNBQXFDLElBQUksRUFBRSxhQUFhLEVBQUUsa0NBQWtDLGtCQUFrQixtQkFBbUIsaUJBQWlCLG9CQUFvQiw2QkFBNkIsMENBQTBDLEVBQUUsMENBQTBDLEVBQUUsaURBQWlELEVBQUUsNkJBQTZCLFNBQVMsaUJBQWlCLGlDQUFpQyxFQUFFLEVBQUUsNEJBQTRCLEdBQUcsSUFBSSxRQUFRLCtCQUErQixzQ0FBc0MsTUFBTSxvQkFBb0IsSUFBSSxtREFBbUQsSUFBSSxzQ0FBc0MsNkNBQTZDLDRCQUE0QixFQUFFLHVDQUF1QywyQ0FBMkMsNEJBQTRCLE9BQU8sWUFBWSxPQUFPLHFCQUFxQixHQUFHLDJDQUEyQyxFQUFFLHFCQUFxQixHQUFHLEdBQUcsRzs7Ozs7Ozs7Ozs7O0FDQXQ5MEQ7QUFBQTtBQUFBO0FBQUE7QUFBa0Q7QUFDZ0I7O0FBRWxFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBLFFBQVEsdUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVILFFBQVEsdUVBQWM7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcseURBQUs7QUFDaEIsV0FBVyx5REFBSztBQUNoQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHlEQUFLO0FBQ2hCLFdBQVcseURBQUs7QUFDaEIsR0FBRztBQUNIOztBQUVBOzs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIWZ1bmN0aW9uKHQsbil7aWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwib2JqZWN0XCI9PXR5cGVvZiBtb2R1bGUpbW9kdWxlLmV4cG9ydHM9bigpO2Vsc2UgaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxuKTtlbHNle3ZhciBlPW4oKTtmb3IodmFyIGEgaW4gZSkoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHM/ZXhwb3J0czp0KVthXT1lW2FdfX0od2luZG93LChmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbih0KXt2YXIgbj17fTtmdW5jdGlvbiBlKGEpe2lmKG5bYV0pcmV0dXJuIG5bYV0uZXhwb3J0czt2YXIgcj1uW2FdPXtpOmEsbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gdFthXS5jYWxsKHIuZXhwb3J0cyxyLHIuZXhwb3J0cyxlKSxyLmw9ITAsci5leHBvcnRzfXJldHVybiBlLm09dCxlLmM9bixlLmQ9ZnVuY3Rpb24odCxuLGEpe2Uubyh0LG4pfHxPYmplY3QuZGVmaW5lUHJvcGVydHkodCxuLHtlbnVtZXJhYmxlOiEwLGdldDphfSl9LGUucj1mdW5jdGlvbih0KXtcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZTeW1ib2wudG9TdHJpbmdUYWcmJk9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFN5bWJvbC50b1N0cmluZ1RhZyx7dmFsdWU6XCJNb2R1bGVcIn0pLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pfSxlLnQ9ZnVuY3Rpb24odCxuKXtpZigxJm4mJih0PWUodCkpLDgmbilyZXR1cm4gdDtpZig0Jm4mJlwib2JqZWN0XCI9PXR5cGVvZiB0JiZ0JiZ0Ll9fZXNNb2R1bGUpcmV0dXJuIHQ7dmFyIGE9T2JqZWN0LmNyZWF0ZShudWxsKTtpZihlLnIoYSksT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsXCJkZWZhdWx0XCIse2VudW1lcmFibGU6ITAsdmFsdWU6dH0pLDImbiYmXCJzdHJpbmdcIiE9dHlwZW9mIHQpZm9yKHZhciByIGluIHQpZS5kKGEscixmdW5jdGlvbihuKXtyZXR1cm4gdFtuXX0uYmluZChudWxsLHIpKTtyZXR1cm4gYX0sZS5uPWZ1bmN0aW9uKHQpe3ZhciBuPXQmJnQuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiB0LmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIHR9O3JldHVybiBlLmQobixcImFcIixuKSxufSxlLm89ZnVuY3Rpb24odCxuKXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsbil9LGUucD1cIlwiLGUoZS5zPTIpfShbZnVuY3Rpb24odCxuLGUpeyhmdW5jdGlvbihuKXt2YXIgZTtlPWZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gdCh0LG4sZSl7cmV0dXJuIHQ8bj9uOnQ+ZT9lOnR9dmFyIGU9ZnVuY3Rpb24odCxuKXt2b2lkIDA9PT10JiYodD0zMDApLHZvaWQgMD09PW4mJihuPTE1MCksXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdz8odGhpcy5jYW52YXNFbD17d2lkdGg6dCxoZWlnaHQ6bn0sdGhpcy5jdHg9bnVsbCk6KHRoaXMuY2FudmFzRWw9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKSx0aGlzLmNhbnZhc0VsLndpZHRoPXQsdGhpcy5jYW52YXNFbC5oZWlnaHQ9bix0aGlzLmN0eD10aGlzLmNhbnZhc0VsLmdldENvbnRleHQoXCIyZFwiKSl9LGE9e3dpZHRoOntjb25maWd1cmFibGU6ITB9LGhlaWdodDp7Y29uZmlndXJhYmxlOiEwfX07ZnVuY3Rpb24gcih0LG4sYSxyKXt2YXIgbz0hKCFufHwhbi5iYWNrZ3JvdW5kQ29sb3IpJiZuLmJhY2tncm91bmRDb2xvcixpPW5ldyBlKHQud2lkdGgqYSx0LmhlaWdodCphLHIpLHM9aS5nZXRDb250ZXh0KFwiMmRcIik7cmV0dXJuIG8mJihzLmZpbGxTdHlsZT1vLHMuZmlsbFJlY3QoMCwwLHQud2lkdGgqYSx0LmhlaWdodCphKSxzLmZpbGxTdHlsZT1cInRyYW5zcGFyZW50XCIpLHtjYW52YXM6aSxjdHg6c319ZS5wcm90b3R5cGUuZ2V0Q29udGV4dD1mdW5jdGlvbigpe3JldHVybiB0aGlzLmN0eH0sZS5wcm90b3R5cGUudG9EYXRhVVJMPWZ1bmN0aW9uKHQsbixlKXtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXJldHVybiB0aGlzLmNhbnZhc0VsLnRvRGF0YVVSTCh0LG4pO2UodGhpcy5jYW52YXNFbC50b0RhdGFVUkwodCxuKSl9LGEud2lkdGguZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2FudmFzRWwud2lkdGh9LGEud2lkdGguc2V0PWZ1bmN0aW9uKHQpe3RoaXMuY2FudmFzRWwud2lkdGg9dH0sYS5oZWlnaHQuZ2V0PWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuY2FudmFzRWwuaGVpZ2h0fSxhLmhlaWdodC5zZXQ9ZnVuY3Rpb24odCl7dGhpcy5jYW52YXNFbC5oZWlnaHQ9dH0sT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsYSksXCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdyYmKGUuSW1hZ2U9SW1hZ2UpO3ZhciBvPS43LGk9NCxzPSEwLGw9ITAsdT0uNSxjPVwibWl0ZXJcIixkPTcwMCxwPTUwLGc9ITEsaD1bXCJtaXRlclwiLFwicm91bmRcIixcImJldmVsXCJdO2Z1bmN0aW9uIG0obil7cmV0dXJuXCJvYmplY3RcIiE9dHlwZW9mKG49ZnVuY3Rpb24odCl7dmFyIG49ITE7aWYodm9pZCAwIT09dCl0cnl7bj1KU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHQpKX1jYXRjaCh0KXt9cmV0dXJuIG59KG4pKSYmKG49e30pLFwibnVtYmVyXCIhPXR5cGVvZiBuLmFjY3VyYWN5fHxpc05hTihuLmFjY3VyYWN5KT9uLmFjY3VyYWN5PW86bi5hY2N1cmFjeT10KG4uYWNjdXJhY3ksMCwxKSwoXCJudW1iZXJcIiE9dHlwZW9mIG4uYmx1cnx8aXNOYU4obi5ibHVyKSkmJihuLmJsdXI9aSksbi5ibHVyPD0wJiYobi5ibHVyPTEpLFwic3RyaW5nXCIhPXR5cGVvZiBuLmZpbGwmJlwiYm9vbGVhblwiIT10eXBlb2Ygbi5maWxsJiYobi5maWxsPXMpLFwic3RyaW5nXCIhPXR5cGVvZiBuLnN0cm9rZSYmXCJib29sZWFuXCIhPXR5cGVvZiBuLnN0cm9rZSYmKG4uc3Ryb2tlPWwpLChcIm51bWJlclwiIT10eXBlb2Ygbi5zdHJva2VXaWR0aHx8aXNOYU4obi5zdHJva2VXaWR0aCkpJiYobi5zdHJva2VXaWR0aD11KSxcIm51bWJlclwiIT10eXBlb2Ygbi50aHJlc2hvbGR8fGlzTmFOKG4udGhyZXNob2xkKT9uLnRocmVzaG9sZD1wOm4udGhyZXNob2xkPXQobi50aHJlc2hvbGQsMSwxMDApLFwic3RyaW5nXCI9PXR5cGVvZiBuLmxpbmVKb2luJiYtMSE9PWguaW5kZXhPZihuLmxpbmVKb2luKXx8KG4ubGluZUpvaW49Yyksbi5ncmFkaWVudHMmJm4uZmlsbD9uLmdyYWRpZW50cz0hMDpuLmdyYWRpZW50cz0hMSxuLmdyYWRpZW50cyYmKChcIm51bWJlclwiIT10eXBlb2Ygbi5ncmFkaWVudFN0b3BzfHxpc05hTihuLmdyYWRpZW50U3RvcHMpfHxuLmdyYWRpZW50U3RvcHM8MikmJihuLmdyYWRpZW50U3RvcHM9Miksbi5ncmFkaWVudFN0b3BzPU1hdGgucm91bmQobi5ncmFkaWVudFN0b3BzKSksKFwibnVtYmVyXCIhPXR5cGVvZiBuLnZlcnRleENvdW50fHxpc05hTihuLnZlcnRleENvdW50KSkmJihuLnZlcnRleENvdW50PWQpLG4udmVydGV4Q291bnQ8PTAmJihuLnZlcnRleENvdW50PTEpLFwic3RyaW5nXCIhPXR5cGVvZiBuLnRyYW5zcGFyZW50Q29sb3ImJlwiYm9vbGVhblwiIT10eXBlb2Ygbi50cmFuc3BhcmVudENvbG9yJiYobi50cmFuc3BhcmVudENvbG9yPWcpLCEwPT09dHlwZW9mIG4udHJhbnNwYXJlbnRDb2xvciYmKG4udHJhbnNwYXJlbnRDb2xvcj0hMSksXCJzdHJpbmdcIj09dHlwZW9mIG4udHJhbnNwYXJlbnRDb2xvciYmKG4udHJhbnNwYXJlbnRDb2xvcj1mdW5jdGlvbih0KXt2YXIgbj1yKHt3aWR0aDoxLGhlaWdodDoxfSx7fSwxLCEwKS5jdHg7bi5maWxsU3R5bGU9dCxuLmZpbGxSZWN0KDAsMCwxLDEpO3ZhciBlPW4uZ2V0SW1hZ2VEYXRhKDAsMCwxLDEpLmRhdGE7cmV0dXJue3I6ZVswXSxnOmVbMV0sYjplWzJdLGE6ZVszXS8yNTV9fShuLnRyYW5zcGFyZW50Q29sb3IpKSxufWZ1bmN0aW9uIHkodCl7aWYodCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQpe2lmKCF0Lm5hdHVyYWxXaWR0aHx8IXQubmF0dXJhbEhlaWdodHx8ITE9PT10LmNvbXBsZXRlKXRocm93IG5ldyBFcnJvcihcIlRoaXMgdGhpcyBpbWFnZSBoYXNuJ3QgZmluaXNoZWQgbG9hZGluZzogXCIrdC5zcmMpO3ZhciBuPW5ldyBlKHQubmF0dXJhbFdpZHRoLHQubmF0dXJhbEhlaWdodCksYT1uLmdldENvbnRleHQoXCIyZFwiKTthLmRyYXdJbWFnZSh0LDAsMCxuLndpZHRoLG4uaGVpZ2h0KTt2YXIgcj1hLmdldEltYWdlRGF0YSgwLDAsbi53aWR0aCxuLmhlaWdodCk7cmV0dXJuIHIuZGF0YSYmci5kYXRhLmxlbmd0aCYmKHZvaWQgMD09PXIud2lkdGgmJihyLndpZHRoPXQubmF0dXJhbFdpZHRoKSx2b2lkIDA9PT1yLmhlaWdodCYmKHIuaGVpZ2h0PXQubmF0dXJhbEhlaWdodCkpLHJ9dGhyb3cgbmV3IEVycm9yKFwiVGhpcyBvYmplY3QgZG9lcyBub3Qgc2VlbSB0byBiZSBhbiBpbWFnZS5cIil9dmFyIGY9T2JqZWN0LmFzc2lnbjtmdW5jdGlvbiB4KHQpe3ZhciBuPWYoe2E6MX0sdCk7cmV0dXJuXCJyZ2JhKFwiK24ucitcIiwgXCIrbi5nK1wiLCBcIituLmIrXCIsIFwiK24uYStcIilcIn1mdW5jdGlvbiBiKHQsbixlLGEpe3JldHVybiBhPWF8fDEsbi5mb3JFYWNoKChmdW5jdGlvbihuLGUpe2lmKHQuYmVnaW5QYXRoKCksdC5tb3ZlVG8obi5hLngqYSxuLmEueSphKSx0LmxpbmVUbyhuLmIueCphLG4uYi55KmEpLHQubGluZVRvKG4uYy54KmEsbi5jLnkqYSksdC5saW5lVG8obi5hLngqYSxuLmEueSphKSxuLmdyYWRpZW50KXt2YXIgcj10LmNyZWF0ZUxpbmVhckdyYWRpZW50KG4uZ3JhZGllbnQueDEqYSxuLmdyYWRpZW50LnkxKmEsbi5ncmFkaWVudC54MiphLG4uZ3JhZGllbnQueTIqYSksbz1uLmdyYWRpZW50LmNvbG9ycy5sZW5ndGgtMTtuLmdyYWRpZW50LmNvbG9ycy5mb3JFYWNoKChmdW5jdGlvbih0LG4pe3ZhciBlPXgodCk7Y29uc29sZS5sb2codCksci5hZGRDb2xvclN0b3Aobi9vLGUpfSkpLHQuZmlsbFN0eWxlPXIsdC5maWxsKCksbi5zdHJva2VXaWR0aD4wJiYodC5zdHJva2VTdHlsZT1yLHQubGluZVdpZHRoPW4uc3Ryb2tlV2lkdGgqYSx0LmxpbmVKb2luPW4ubGluZUpvaW4sdC5zdHJva2UoKSl9ZWxzZSBuLmZpbGwmJih0LmZpbGxTdHlsZT14KG4uZmlsbCksdC5maWxsKCkpLG4uc3Ryb2tlQ29sb3ImJih0LnN0cm9rZVN0eWxlPXgobi5zdHJva2VDb2xvciksdC5saW5lV2lkdGg9bi5zdHJva2VXaWR0aCphLHQubGluZUpvaW49bi5saW5lSm9pbix0LnN0cm9rZSgpKTt0LmNsb3NlUGF0aCgpfSkpLHR9ZnVuY3Rpb24gdih0LG4sZSl7dmFyIGE9ZSYmZS5kcHI/ZS5kcHI6MSxvPXIobixlLGEsITApLmN0eDtyZXR1cm4gYihvLHQsMCxhKSxvLmdldEltYWdlRGF0YSgwLDAsbi53aWR0aCphLG4uaGVpZ2h0KmEpfWZ1bmN0aW9uIHcodCxuLGUpe3ZhciBhPWUmJmUuZHByP2UuZHByOjEsbz1yKG4sZSxhKTtyZXR1cm4gYihvLmN0eCx0LDAsYSksby5jYW52YXMudG9EYXRhVVJMKCl9ZnVuY3Rpb24gXyh0KXt2YXIgbj10LnRvU3RyaW5nKDE2KTtyZXR1cm4gMT09bi5sZW5ndGg/XCIwXCIrbjpufWZ1bmN0aW9uIGsodCl7dmFyIG49dC5yLGU9dC5nLGE9dC5iO3JldHVyblwiI1wiK18obikrXyhlKStfKGEpfWZ1bmN0aW9uIEQodCxuKXt2YXIgZT1cIlwiO3QubGVuZ3RoJiZ0WzBdLmdyYWRpZW50JiYoZT1cIjxkZWZzPlwiKTt2YXIgYT1cIlwiO3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQsbil7dmFyIHI9dC5hLG89dC5iLGk9dC5jO2lmKGErPSc8cG9seWdvbiBwb2ludHM9XCInK3IueCtcIixcIityLnkrXCIgXCIrby54K1wiLFwiK28ueStcIiBcIitpLngrXCIsXCIraS55KydcIicsdC5ncmFkaWVudCl7dmFyIHM9dC5ib3VuZGluZ0JveCxsPSgodC5ncmFkaWVudC54MS1zLngpL3Mud2lkdGgqMTAwKS50b0ZpeGVkKDMpLHU9KCh0LmdyYWRpZW50LnkxLXMueSkvcy5oZWlnaHQqMTAwKS50b0ZpeGVkKDMpLGM9KCh0LmdyYWRpZW50LngyLXMueCkvcy53aWR0aCoxMDApLnRvRml4ZWQoMyksZD0oKHQuZ3JhZGllbnQueTItcy55KS9zLmhlaWdodCoxMDApLnRvRml4ZWQoMyk7ZSs9J1xcblxcdDxsaW5lYXJHcmFkaWVudCBpZD1cImdyYWRpZW50LScrbisnXCIgeDE9XCInK2wrJyVcIiB5MT1cIicrdSsnJVwiIHgyPVwiJytjKyclXCIgeTI9XCInK2QrJyVcIj4nO3ZhciBwPXQuZ3JhZGllbnQuY29sb3JzLmxlbmd0aC0xO3QuZ3JhZGllbnQuY29sb3JzLmZvckVhY2goKGZ1bmN0aW9uKHQsbil7dmFyIGE9ayh0KSxyPXQuYTwxPycgc3RvcC1vcGFjaXR5PVwiJyt0LmErJ1wiJzpcIlwiLG89KG4vcCoxMDApLnRvRml4ZWQoMyk7ZSs9J1xcblxcdFxcdFxcdFxcdFxcdDxzdG9wIG9mZnNldD1cIicrbysnJVwiIHN0b3AtY29sb3I9XCInK2ErJ1wiJytyK1wiLz5cXG5cXHRcXHRcXHRcXHRcIn0pKSxlKz1cIjwvbGluZWFyR3JhZGllbnQ+XCIsYSs9JyBmaWxsPVwidXJsKCNncmFkaWVudC0nK24rJylcIicsdC5zdHJva2VXaWR0aD4wJiYoYSs9JyBzdHJva2U9XCJ1cmwoI2dyYWRpZW50LScrbisnKVwiIHN0cm9rZS13aWR0aD1cIicrdC5zdHJva2VXaWR0aCsnXCIgc3Ryb2tlLWxpbmVqb2luPVwiJyt0LmxpbmVKb2luKydcIicpfWVsc2V7aWYodC5maWxsKXt2YXIgZz1rKHQuZmlsbCksaD10LmZpbGwuYTwxPycgZmlsbC1vcGFjaXR5PVwiJyt0LmZpbGwuYSsnXCInOlwiXCI7YSs9JyBmaWxsPVwiJytnKydcIicraH1lbHNlIGErPScgZmlsbD1cInRyYW5zcGFyZW50XCInO2lmKHQuc3Ryb2tlQ29sb3Ipe3ZhciBtPWsodC5zdHJva2VDb2xvcikseT10LnN0cm9rZUNvbG9yLmE8MT8nIHN0cm9rZS1vcGFjaXR5PVwiJyt0LnN0cm9rZUNvbG9yLmErJ1wiJzpcIlwiO2ErPScgc3Ryb2tlPVwiJyttKydcIiBzdHJva2Utd2lkdGg9XCInK3Quc3Ryb2tlV2lkdGgrJ1wiIHN0cm9rZS1saW5lam9pbj1cIicrdC5saW5lSm9pbisnXCInK3l9fWErPVwiLz5cXG5cXHRcIn0pKSxlLmxlbmd0aCYmKGUrPVwiXFxuXFx0XFx0PC9kZWZzPlwiKSwnPD94bWwgdmVyc2lvbj1cIjEuMFwiIHN0YW5kYWxvbmU9XCJ5ZXNcIj8+XFxuPHN2ZyB3aWR0aD1cIicrbi53aWR0aCsnXCIgaGVpZ2h0PVwiJytuLmhlaWdodCsnXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxLjFcIiA+XFxuXFx0JytlK1wiXFxuXFx0XCIrYStcIlxcbjwvc3ZnPlwifWZ1bmN0aW9uIEkodCxuKXtyZXR1cm4gdChuPXtleHBvcnRzOnt9fSxuLmV4cG9ydHMpLG4uZXhwb3J0c31cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp2b2lkIDAhPT1ufHxcInVuZGVmaW5lZFwiIT10eXBlb2Ygc2VsZiYmc2VsZjt2YXIgQz1JKChmdW5jdGlvbih0KXtmdW5jdGlvbiBuKHQsbixlKXt0aGlzLmE9dCx0aGlzLmI9bix0aGlzLmM9ZTt2YXIgYSxyLG8saSxzPW4ueC10LngsbD1uLnktdC55LHU9ZS54LXQueCxjPWUueS10LnksZD1zKih0Lngrbi54KStsKih0Lnkrbi55KSxwPXUqKHQueCtlLngpK2MqKHQueStlLnkpLGc9MioocyooZS55LW4ueSktbCooZS54LW4ueCkpO01hdGguYWJzKGcpPDFlLTY/KGE9TWF0aC5taW4odC54LG4ueCxlLngpLHI9TWF0aC5taW4odC55LG4ueSxlLnkpLG89LjUqKE1hdGgubWF4KHQueCxuLngsZS54KS1hKSxpPS41KihNYXRoLm1heCh0Lnksbi55LGUueSktciksdGhpcy54PWErbyx0aGlzLnk9citpLHRoaXMucj1vKm8raSppKToodGhpcy54PShjKmQtbCpwKS9nLHRoaXMueT0ocypwLXUqZCkvZyxvPXRoaXMueC10LngsaT10aGlzLnktdC55LHRoaXMucj1vKm8raSppKX1mdW5jdGlvbiBlKHQsbil7cmV0dXJuIG4ueC10Lnh9ZnVuY3Rpb24gYSh0KXt2YXIgbixlLGEscixvLGk9dC5sZW5ndGg7dDpmb3IoO2k7KWZvcihlPXRbLS1pXSxuPXRbLS1pXSxhPWk7YTspaWYobz10Wy0tYV0sbj09PShyPXRbLS1hXSkmJmU9PT1vfHxuPT09byYmZT09PXIpe3Quc3BsaWNlKGksMiksdC5zcGxpY2UoYSwyKSxpLT0yO2NvbnRpbnVlIHR9fW4ucHJvdG90eXBlLmRyYXc9ZnVuY3Rpb24odCl7dC5iZWdpblBhdGgoKSx0Lm1vdmVUbyh0aGlzLmEueCx0aGlzLmEueSksdC5saW5lVG8odGhpcy5iLngsdGhpcy5iLnkpLHQubGluZVRvKHRoaXMuYy54LHRoaXMuYy55KSx0LmNsb3NlUGF0aCgpLHQuc3Ryb2tlKCl9LHQuZXhwb3J0cz17VHJpYW5nbGU6bix0cmlhbmd1bGF0ZTpmdW5jdGlvbih0KXtpZih0Lmxlbmd0aDwzKXJldHVybltdO3Quc29ydChlKTtmb3IodmFyIHI9dC5sZW5ndGgtMSxvPXRbcl0ueCxpPXRbMF0ueCxzPXRbcl0ueSxsPXM7ci0tOyl0W3JdLnk8cyYmKHM9dFtyXS55KSx0W3JdLnk+bCYmKGw9dFtyXS55KTt2YXIgdSxjLGQscD1pLW8sZz1sLXMsaD1wPmc/cDpnLG09LjUqKGkrbykseT0uNSoobCtzKSxmPVtuZXcgbih7eDptLTIwKmgseTp5LWgsX19zZW50aW5lbDohMH0se3g6bSx5OnkrMjAqaCxfX3NlbnRpbmVsOiEwfSx7eDptKzIwKmgseTp5LWgsX19zZW50aW5lbDohMH0pXSx4PVtdLGI9W107Zm9yKHI9dC5sZW5ndGg7ci0tOyl7Zm9yKGIubGVuZ3RoPTAsdT1mLmxlbmd0aDt1LS07KShwPXRbcl0ueC1mW3VdLngpPjAmJnAqcD5mW3VdLnI/KHgucHVzaChmW3VdKSxmLnNwbGljZSh1LDEpKTpwKnArKGc9dFtyXS55LWZbdV0ueSkqZz5mW3VdLnJ8fChiLnB1c2goZlt1XS5hLGZbdV0uYixmW3VdLmIsZlt1XS5jLGZbdV0uYyxmW3VdLmEpLGYuc3BsaWNlKHUsMSkpO2ZvcihhKGIpLHU9Yi5sZW5ndGg7dTspZD1iWy0tdV0sYz1iWy0tdV0sZi5wdXNoKG5ldyBuKGMsZCx0W3JdKSl9Zm9yKEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KHgsZikscj14Lmxlbmd0aDtyLS07KSh4W3JdLmEuX19zZW50aW5lbHx8eFtyXS5iLl9fc2VudGluZWx8fHhbcl0uYy5fX3NlbnRpbmVsKSYmeC5zcGxpY2UociwxKTtyZXR1cm4geH19fSkpLFA9KEMuVHJpYW5nbGUsQy50cmlhbmd1bGF0ZSksUz1JKChmdW5jdGlvbih0LG4peyFmdW5jdGlvbihlKXtmdW5jdGlvbiBhKHQpe2lmKCEodGhpcyBpbnN0YW5jZW9mIGEpKXJldHVybiBuZXcgYSh0KTt2YXIgbj10LndpZHRoLGU9dC5oZWlnaHQscj1bWy0xLDAsMV0sWy0yLDAsMl0sWy0xLDAsMV1dLG89W1stMSwtMiwtMV0sWzAsMCwwXSxbMSwyLDFdXSxpPVtdLHM9W107ZnVuY3Rpb24gbCh0KXtyZXR1cm4gZnVuY3Rpb24oZSxhLHIpe3JldHVybiB0WzQqKG4qYStlKSsocj1yfHwwKV19fXZhciB1LGMsZD1sKHQuZGF0YSk7Zm9yKGM9MDtjPGU7YysrKWZvcih1PTA7dTxuO3UrKyl7dmFyIHA9KGQodSxjLDApK2QodSxjLDEpK2QodSxjLDIpKS8zO3MucHVzaChwLHAscCwyNTUpfWZvcihkPWwocyksYz0wO2M8ZTtjKyspZm9yKHU9MDt1PG47dSsrKXt2YXIgZz1yWzBdWzBdKmQodS0xLGMtMSkrclswXVsxXSpkKHUsYy0xKStyWzBdWzJdKmQodSsxLGMtMSkrclsxXVswXSpkKHUtMSxjKStyWzFdWzFdKmQodSxjKStyWzFdWzJdKmQodSsxLGMpK3JbMl1bMF0qZCh1LTEsYysxKStyWzJdWzFdKmQodSxjKzEpK3JbMl1bMl0qZCh1KzEsYysxKSxoPW9bMF1bMF0qZCh1LTEsYy0xKStvWzBdWzFdKmQodSxjLTEpK29bMF1bMl0qZCh1KzEsYy0xKStvWzFdWzBdKmQodS0xLGMpK29bMV1bMV0qZCh1LGMpK29bMV1bMl0qZCh1KzEsYykrb1syXVswXSpkKHUtMSxjKzEpK29bMl1bMV0qZCh1LGMrMSkrb1syXVsyXSpkKHUrMSxjKzEpLG09TWF0aC5zcXJ0KGcqZytoKmgpPj4+MDtpLnB1c2gobSxtLG0sMjU1KX12YXIgeT1pO3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5JiYoeT1uZXcgVWludDhDbGFtcGVkQXJyYXkoaSkpLHkudG9JbWFnZURhdGE9ZnVuY3Rpb24oKXtyZXR1cm4gYS50b0ltYWdlRGF0YSh5LG4sZSl9LHl9ZnVuY3Rpb24gcih0LG4sZSl7cmV0dXJue3dpZHRoOm4saGVpZ2h0OmUsZGF0YTp0fX1hLnRvSW1hZ2VEYXRhPWZ1bmN0aW9uKHQsbixlKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBJbWFnZURhdGEmJlwiW29iamVjdCBVaW50MTZBcnJheV1cIj09PU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh0KSlyZXR1cm4gbmV3IEltYWdlRGF0YSh0LG4sZSk7aWYoXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdyYmXCJvYmplY3RcIj09dHlwZW9mIHdpbmRvdy5kb2N1bWVudCl7dmFyIGE9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBhLmdldENvbnRleHQpe3ZhciBvPWEuZ2V0Q29udGV4dChcIjJkXCIpLmNyZWF0ZUltYWdlRGF0YShuLGUpO3JldHVybiBvLmRhdGEuc2V0KHQpLG99cmV0dXJuIG5ldyByKHQsbixlKX1yZXR1cm4gbmV3IHIodCxuLGUpfSx0LmV4cG9ydHMmJihuPXQuZXhwb3J0cz1hKSxuLlNvYmVsPWF9KCl9KSk7ZnVuY3Rpb24gQSh0KXtyZXR1cm4gdCYmXCJudW1iZXJcIj09dHlwZW9mIHQud2lkdGgmJlwibnVtYmVyXCI9PXR5cGVvZiB0LmhlaWdodCYmdC5kYXRhJiZcIm51bWJlclwiPT10eXBlb2YgdC5kYXRhLmxlbmd0aCYmXCJvYmplY3RcIj09dHlwZW9mIHQuZGF0YX1mdW5jdGlvbiBFKHQpe2lmKEEodCkpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBVaW50OENsYW1wZWRBcnJheSl7aWYoXCJ1bmRlZmluZWRcIj09dHlwZW9mIHdpbmRvdyl0aHJvdyBuZXcgRXJyb3IoXCJDYW4ndCBjb3B5IGltYWdlRGF0YSBpbiB3ZWJ3b3JrZXIgd2l0aG91dCBVaW50OENsYW1wZWRBcnJheSBzdXBwb3J0LlwiKTtyZXR1cm4gaih0KX12YXIgbixlPW5ldyBVaW50OENsYW1wZWRBcnJheSh0LmRhdGEpO2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiBJbWFnZURhdGEpcmV0dXJue3dpZHRoOnQud2lkdGgsaGVpZ2h0OnQuaGVpZ2h0LGRhdGE6ZX07dHJ5e249bmV3IEltYWdlRGF0YShlLHQud2lkdGgsdC5oZWlnaHQpfWNhdGNoKGUpe2lmKFwidW5kZWZpbmVkXCI9PXR5cGVvZiB3aW5kb3cpdGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3QgY29weSBpbWFnZURhdGEgaW4gd2Vid29ya2VyIHdpdGhvdXQgcHJvcGVyIEltYWdlRGF0YSgpIHN1cHBvcnQuXCIpO249aih0KX1yZXR1cm4gbn10aHJvdyBuZXcgRXJyb3IoXCJHaXZlbiBpbWFnZURhdGEgb2JqZWN0IGlzIG5vdCB1c2VhYmxlLlwiKX1mdW5jdGlvbiBqKHQpe3ZhciBuPW5ldyBlKHQud2lkdGgsdC5oZWlnaHQpLmdldENvbnRleHQoXCIyZFwiKTtyZXR1cm4gbi5wdXRJbWFnZURhdGEodCwwLDApLG4uZ2V0SW1hZ2VEYXRhKDAsMCx0LndpZHRoLHQuaGVpZ2h0KX1TLlNvYmVsO3ZhciBPPVs1MTIsNTEyLDQ1Niw1MTIsMzI4LDQ1NiwzMzUsNTEyLDQwNSwzMjgsMjcxLDQ1NiwzODgsMzM1LDI5Miw1MTIsNDU0LDQwNSwzNjQsMzI4LDI5OCwyNzEsNDk2LDQ1Niw0MjAsMzg4LDM2MCwzMzUsMzEyLDI5MiwyNzMsNTEyLDQ4Miw0NTQsNDI4LDQwNSwzODMsMzY0LDM0NSwzMjgsMzEyLDI5OCwyODQsMjcxLDI1OSw0OTYsNDc1LDQ1Niw0MzcsNDIwLDQwNCwzODgsMzc0LDM2MCwzNDcsMzM1LDMyMywzMTIsMzAyLDI5MiwyODIsMjczLDI2NSw1MTIsNDk3LDQ4Miw0NjgsNDU0LDQ0MSw0MjgsNDE3LDQwNSwzOTQsMzgzLDM3MywzNjQsMzU0LDM0NSwzMzcsMzI4LDMyMCwzMTIsMzA1LDI5OCwyOTEsMjg0LDI3OCwyNzEsMjY1LDI1OSw1MDcsNDk2LDQ4NSw0NzUsNDY1LDQ1Niw0NDYsNDM3LDQyOCw0MjAsNDEyLDQwNCwzOTYsMzg4LDM4MSwzNzQsMzY3LDM2MCwzNTQsMzQ3LDM0MSwzMzUsMzI5LDMyMywzMTgsMzEyLDMwNywzMDIsMjk3LDI5MiwyODcsMjgyLDI3OCwyNzMsMjY5LDI2NSwyNjEsNTEyLDUwNSw0OTcsNDg5LDQ4Miw0NzUsNDY4LDQ2MSw0NTQsNDQ3LDQ0MSw0MzUsNDI4LDQyMiw0MTcsNDExLDQwNSwzOTksMzk0LDM4OSwzODMsMzc4LDM3MywzNjgsMzY0LDM1OSwzNTQsMzUwLDM0NSwzNDEsMzM3LDMzMiwzMjgsMzI0LDMyMCwzMTYsMzEyLDMwOSwzMDUsMzAxLDI5OCwyOTQsMjkxLDI4NywyODQsMjgxLDI3OCwyNzQsMjcxLDI2OCwyNjUsMjYyLDI1OSwyNTcsNTA3LDUwMSw0OTYsNDkxLDQ4NSw0ODAsNDc1LDQ3MCw0NjUsNDYwLDQ1Niw0NTEsNDQ2LDQ0Miw0MzcsNDMzLDQyOCw0MjQsNDIwLDQxNiw0MTIsNDA4LDQwNCw0MDAsMzk2LDM5MiwzODgsMzg1LDM4MSwzNzcsMzc0LDM3MCwzNjcsMzYzLDM2MCwzNTcsMzU0LDM1MCwzNDcsMzQ0LDM0MSwzMzgsMzM1LDMzMiwzMjksMzI2LDMyMywzMjAsMzE4LDMxNSwzMTIsMzEwLDMwNywzMDQsMzAyLDI5OSwyOTcsMjk0LDI5MiwyODksMjg3LDI4NSwyODIsMjgwLDI3OCwyNzUsMjczLDI3MSwyNjksMjY3LDI2NSwyNjMsMjYxLDI1OV0sTT1bOSwxMSwxMiwxMywxMywxNCwxNCwxNSwxNSwxNSwxNSwxNiwxNiwxNiwxNiwxNywxNywxNywxNywxNywxNywxNywxOCwxOCwxOCwxOCwxOCwxOCwxOCwxOCwxOCwxOSwxOSwxOSwxOSwxOSwxOSwxOSwxOSwxOSwxOSwxOSwxOSwxOSwxOSwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMCwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMSwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMiwyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyMywyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNCwyNF07ZnVuY3Rpb24gVCgpe3RoaXMucj0wLHRoaXMuZz0wLHRoaXMuYj0wLHRoaXMuYT0wLHRoaXMubmV4dD1udWxsfWZ1bmN0aW9uIFIodCxuLGUpe3ZhciBhPXQrXCJ8XCIrbjtlW2FdfHwoZVthXT17eDp0LHk6bn0pLGE9bnVsbH1mdW5jdGlvbiBCKG4sZSxhKXt2YXIgcj0oMHx0KG4ueCwxLGUud2lkdGgtMikpKygwfHQobi55LDEsZS5oZWlnaHQtMikpKmUud2lkdGg8PDI7cj49ZS5kYXRhLmxlbmd0aCYmKHI9ZS5kYXRhLmxlbmd0aC01KTt2YXIgbz1lLmRhdGFbciszXS8yNTU7cmV0dXJuIGEmJjA9PT1vP2E6e3I6ZS5kYXRhW3JdLGc6ZS5kYXRhW3IrMV0sYjplLmRhdGFbcisyXSxhOm99fWZ1bmN0aW9uIE4odCl7cmV0dXJue3g6LjMzMzMzKih0LmEueCt0LmIueCt0LmMueCkseTouMzMzMzMqKHQuYS55K3QuYi55K3QuYy55KX19ZnVuY3Rpb24gVyh0KXtyZXR1cm4gMD09PXQuYX1mdW5jdGlvbiBMKHQpe3ZhciBuPWZ1bmN0aW9uKHQpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiB0KXt2YXIgbj1bMCwwLDAsMF07cmV0dXJuXCIjXCI9PT10WzBdJiYodC5sZW5ndGg8NyYmKHQ9XCIjXCIrdFsxXSt0WzFdK3RbMl0rdFsyXSt0WzNdK3RbM10rKHQubGVuZ3RoPjQ/dFs0XSt0WzRdOlwiXCIpKSxuPVtwYXJzZUludCh0LnN1YnN0cigxLDIpLDE2KSxwYXJzZUludCh0LnN1YnN0cigzLDIpLDE2KSxwYXJzZUludCh0LnN1YnN0cig1LDIpLDE2KSx0Lmxlbmd0aD43P3BhcnNlSW50KHQuc3Vic3RyKDcsMiksMTYpLzI1NToxXSksMD09PXQuaW5kZXhPZihcInJnYlwiKSYmKHQuaW5jbHVkZXMoXCJyZ2JhXCIpfHwodCs9XCIsMVwiKSxuPXQubWF0Y2goL1tcXC5cXGRdKy9nKS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybit0fSkpKSxufX0odCk7cmV0dXJuIG4/e3I6blswXSxnOm5bMV0sYjpuWzJdLGE6blszXX06dm9pZCAwfWZ1bmN0aW9uIEYodCl7dmFyIG49W3Qucix0LmcsdC5iXS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybih0Lz0yNTUpPD0uMDM5Mjg/dC8xMi45MjpNYXRoLnBvdygodCsuMDU1KS8xLjA1NSwyLjQpfSkpO3JldHVybi4yMTI2Km5bMF0rLjcxNTIqblsxXSsuMDcyMipuWzJdfWZ1bmN0aW9uIEgodCxuLGUpe3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBhPXt9O1wiYWJjXCIuc3BsaXQoXCJcIikuZm9yRWFjaCgoZnVuY3Rpb24ocil7dmFyIG89Qih0W3JdLG4sZS50cmFuc3BhcmVudENvbG9yKTthW3JdPXtrZXk6cixjb2xvcjpvLHg6dFtyXS54LHk6dFtyXS55fSxhW3JdLmx1bWluYW5jZT1GKGFbcl0uY29sb3IpO3ZhciBpPVwiYWJjXCIucmVwbGFjZShyLFwiXCIpLnNwbGl0KFwiXCIpO2Fbcl0ubWVkaWFuPXt4Oih0W2lbMF1dLngrdFtpWzFdXS54KS8yLHk6KHRbaVswXV0ueSt0W2lbMV1dLnkpLzJ9LGFbcl0ubWVkaWFuQ29sb3I9QihhW3JdLm1lZGlhbixuLGUudHJhbnNwYXJlbnRDb2xvciksYVtyXS5tZWRpYW5MdW1pbmFuY2U9RihhW3JdLm1lZGlhbkNvbG9yKX0pKTtmb3IodmFyIHIsbyxpLHMsbD1bYS5hLGEuYixhLmNdLnNvcnQoKGZ1bmN0aW9uKHQsbil7cmV0dXJuIE1hdGguYWJzKHQubHVtaW5hbmNlLXQubWVkaWFuTHVtaW5hbmNlKS1NYXRoLmFicyhuLmx1bWluYW5jZS1uLm1lZGlhbkx1bWluYW5jZSl9KSksdT1sWzBdLGM9bFswXSxkPXUubWVkaWFuLHA9W2NdLGc9KHI9YyxpPShvPWQpLngtci54LHM9by55LXIueSxNYXRoLnNxcnQoaSppK3MqcykpLGg9MSxtPWUuZ3JhZGllbnRTdG9wcy0yO2g8bTtoKyspe3ZhciB5PWgqKGcvZS5ncmFkaWVudFN0b3BzKS9nLGY9e3g6Yy54K3kqKGQueC1jLngpLHk6Yy55K3kqKGQueS1jLnkpfTtwLnB1c2goZil9cC5wdXNoKGQpLHQuZ3JhZGllbnQ9e3gxOnUueCx5MTp1LnkseDI6dS5tZWRpYW4ueCx5Mjp1Lm1lZGlhbi55LGNvbG9yczpwLm1hcCgoZnVuY3Rpb24odCl7cmV0dXJuIEIodCxuLGUudHJhbnNwYXJlbnRDb2xvcil9KSl9LGUuc3Ryb2tlJiYodC5zdHJva2VXaWR0aD1lLnN0cm9rZVdpZHRoLHQubGluZUpvaW49ZS5saW5lSm9pbiksYT1udWxsfSkpLHR9ZnVuY3Rpb24gRyh0LG4pe2lmKEEodCkpe3ZhciBlPXt3aWR0aDp0LndpZHRoLGhlaWdodDp0LmhlaWdodH0sYT1FKHQpLHI9RSh0KSxvPWZ1bmN0aW9uKHQpe2Zvcih2YXIgbixlPXQuZGF0YS5sZW5ndGgsYT0wO2E8ZTthKz00KW49LjM0KnQuZGF0YVthXSsuNSp0LmRhdGFbYSsxXSsuMTYqdC5kYXRhW2ErMl0sdC5kYXRhW2FdPW4sdC5kYXRhW2ErMV09bix0LmRhdGFbYSsyXT1uO3JldHVybiB0fShmdW5jdGlvbih0LG4sZSxhLHIsbyl7dmFyIGkscyxsLHUsYyxkLHAsZyxoLG0seSxmLHgsYix2LHcsXyxrLEQsSSxDLFAsUyxBLEU9dC5kYXRhLGo9bytvKzEsUj1hLTEsQj1yLTEsTj1vKzEsVz1OKihOKzEpLzIsTD1uZXcgVCxGPUw7Zm9yKGw9MTtsPGo7bCsrKWlmKEY9Ri5uZXh0PW5ldyBULGw9PU4pdmFyIEg9RjtGLm5leHQ9TDt2YXIgRz1udWxsLFU9bnVsbDtwPWQ9MDt2YXIgSj1PW29dLFk9TVtvXTtmb3Iocz0wO3M8cjtzKyspe2Zvcih3PV89az1EPWc9aD1tPXk9MCxmPU4qKEk9RVtkXSkseD1OKihDPUVbZCsxXSksYj1OKihQPUVbZCsyXSksdj1OKihTPUVbZCszXSksZys9VypJLGgrPVcqQyxtKz1XKlAseSs9VypTLEY9TCxsPTA7bDxOO2wrKylGLnI9SSxGLmc9QyxGLmI9UCxGLmE9UyxGPUYubmV4dDtmb3IobD0xO2w8TjtsKyspdT1kKygoUjxsP1I6bCk8PDIpLGcrPShGLnI9ST1FW3VdKSooQT1OLWwpLGgrPShGLmc9Qz1FW3UrMV0pKkEsbSs9KEYuYj1QPUVbdSsyXSkqQSx5Kz0oRi5hPVM9RVt1KzNdKSpBLHcrPUksXys9QyxrKz1QLEQrPVMsRj1GLm5leHQ7Zm9yKEc9TCxVPUgsaT0wO2k8YTtpKyspRVtkKzNdPVM9eSpKPj5ZLDAhPVM/KFM9MjU1L1MsRVtkXT0oZypKPj5ZKSpTLEVbZCsxXT0oaCpKPj5ZKSpTLEVbZCsyXT0obSpKPj5ZKSpTKTpFW2RdPUVbZCsxXT1FW2QrMl09MCxnLT1mLGgtPXgsbS09Yix5LT12LGYtPUcucix4LT1HLmcsYi09Ry5iLHYtPUcuYSx1PXArKCh1PWkrbysxKTxSP3U6Uik8PDIsZys9dys9Ry5yPUVbdV0saCs9Xys9Ry5nPUVbdSsxXSxtKz1rKz1HLmI9RVt1KzJdLHkrPUQrPUcuYT1FW3UrM10sRz1HLm5leHQsZis9ST1VLnIseCs9Qz1VLmcsYis9UD1VLmIsdis9Uz1VLmEsdy09SSxfLT1DLGstPVAsRC09UyxVPVUubmV4dCxkKz00O3ArPWF9Zm9yKGk9MDtpPGE7aSsrKXtmb3IoXz1rPUQ9dz1oPW09eT1nPTAsZj1OKihJPUVbZD1pPDwyXSkseD1OKihDPUVbZCsxXSksYj1OKihQPUVbZCsyXSksdj1OKihTPUVbZCszXSksZys9VypJLGgrPVcqQyxtKz1XKlAseSs9VypTLEY9TCxsPTA7bDxOO2wrKylGLnI9SSxGLmc9QyxGLmI9UCxGLmE9UyxGPUYubmV4dDtmb3IoYz1hLGw9MTtsPD1vO2wrKylkPWMraTw8MixnKz0oRi5yPUk9RVtkXSkqKEE9Ti1sKSxoKz0oRi5nPUM9RVtkKzFdKSpBLG0rPShGLmI9UD1FW2QrMl0pKkEseSs9KEYuYT1TPUVbZCszXSkqQSx3Kz1JLF8rPUMsays9UCxEKz1TLEY9Ri5uZXh0LGw8QiYmKGMrPWEpO2ZvcihkPWksRz1MLFU9SCxzPTA7czxyO3MrKylFWzMrKHU9ZDw8MildPVM9eSpKPj5ZLFM+MD8oUz0yNTUvUyxFW3VdPShnKko+PlkpKlMsRVt1KzFdPShoKko+PlkpKlMsRVt1KzJdPShtKko+PlkpKlMpOkVbdV09RVt1KzFdPUVbdSsyXT0wLGctPWYsaC09eCxtLT1iLHktPXYsZi09Ry5yLHgtPUcuZyxiLT1HLmIsdi09Ry5hLHU9aSsoKHU9cytOKTxCP3U6QikqYTw8MixnKz13Kz1HLnI9RVt1XSxoKz1fKz1HLmc9RVt1KzFdLG0rPWsrPUcuYj1FW3UrMl0seSs9RCs9Ry5hPUVbdSszXSxHPUcubmV4dCxmKz1JPVUucix4Kz1DPVUuZyxiKz1QPVUuYix2Kz1TPVUuYSx3LT1JLF8tPUMsay09UCxELT1TLFU9VS5uZXh0LGQrPWF9cmV0dXJuIHR9KGEsMCwwLGUud2lkdGgsZS5oZWlnaHQsbi5ibHVyKSksaT1mdW5jdGlvbih0LG4sZSxhLHIpe3ZhciBvPXt9LGk9TWF0aC5tYXgofn4obiooMS1lKSksNSkscz1NYXRoLnJvdW5kKE1hdGguc3FydChpKSksbD1+fihhL3MpLHU9fn4oci9NYXRoLnJvdW5kKE1hdGguY2VpbChpL3MpKSksYz0wLGQ9MCxwPTA7Zm9yKHA9MDtwPHI7cCs9dSlmb3IoZD0rK2MlMj09MD9+fihsLzIpOjA7ZDxhO2QrPWwpZDxhJiZwPHImJlIofn4oZCtNYXRoLmNvcyhwKSp1KSx+fihwK01hdGguc2luKGQpKmwpLG8pO1IoMCwwLG8pLFIoYS0xLDAsbyksUihhLTEsci0xLG8pLFIoMCxyLTEsbyk7dmFyIGc9bi1PYmplY3Qua2V5cyhvKS5sZW5ndGgsaD10Lmxlbmd0aCxtPX5+KGgvZyk7aWYobj4wJiZtPjApe3ZhciB5PTA7Zm9yKHk9MDt5PGg7eSs9bSlSKHRbeV0ueCx0W3ldLnksbyl9cmV0dXJuIHQ9bnVsbCxPYmplY3Qua2V5cyhvKS5tYXAoKGZ1bmN0aW9uKHQpe3JldHVybiBvW3RdfSkpfShmdW5jdGlvbih0LG4pe3ZhciBlLGEscixvLGkscyxsLHUsYyxkPXQud2lkdGgscD10LmhlaWdodCxnPXQuZGF0YSxoPVtdO2ZvcihhPTA7YTxwO2ErPTIpZm9yKGU9MDtlPGQ7ZSs9Mil7Zm9yKHU9Yz0wLHI9LTE7cjw9MTtyKyspaWYobD0ocz1hK3IpKmQscz49MCYmczxwKWZvcihvPS0xO288PTE7bysrKShpPWUrbyk+PTAmJmk8ZCYmKHUrPWdbaStsPDwyXSxjKyspO2MmJih1Lz1jKSx1Pm4mJmgucHVzaCh7eDplLHk6YX0pfXJldHVybiBofShTKG8pLnRvSW1hZ2VEYXRhKCksbi50aHJlc2hvbGQpLG4udmVydGV4Q291bnQsbi5hY2N1cmFjeSxlLndpZHRoLGUuaGVpZ2h0KSxzPVAoaSk7cmV0dXJuIHM9ZnVuY3Rpb24odCxuLGUpe3JldHVybiB0LmZvckVhY2goKGZ1bmN0aW9uKHQpe3ZhciBuLGUsYSxyLG87dC5ib3VuZGluZ0JveD0obj1bdC5hLHQuYix0LmNdLGU9MS8wLGE9LTEvMCxyPTEvMCxvPS0xLzAsbi5mb3JFYWNoKChmdW5jdGlvbih0KXt0Lng8ZSYmKGU9dC54KSx0Lnk8ciYmKHI9dC55KSx0Lng+YSYmKGE9dC54KSx0Lnk+byYmKG89dC55KX0pKSx7eDplLHk6cix3aWR0aDphLWUsaGVpZ2h0Om8tcn0pfSkpLHQuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdC5ib3VuZGluZ0JveC53aWR0aD4wJiZ0LmJvdW5kaW5nQm94LmhlaWdodD4wfSkpfShzKSxuLnRyYW5zcGFyZW50Q29sb3J8fChzPWZ1bmN0aW9uKHQsbil7cmV0dXJuIHQuZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4hVyhCKE4odCksbikpfSkpfShzLHIpKSxzPSEwPT09bi5maWxsJiYhMD09PW4uZ3JhZGllbnRzP0gocyxyLG4pOmZ1bmN0aW9uKHQsbixlKXt2YXIgYT1lLmZpbGwscj1lLnN0cm9rZSxvPWUuc3Ryb2tlV2lkdGgsaT1lLmxpbmVKb2luLHM9ZS50cmFuc3BhcmVudENvbG9yLGw9ISFhJiZMKGEpLHU9ISFyJiZMKHIpLGM9ZnVuY3Rpb24odCxuKXt2YXIgZT1XKHQpJiZzO3JldHVybiBuJiYhZT9uOmU/czp0fTtyZXR1cm4gdC5mb3JFYWNoKChmdW5jdGlvbih0KXt2YXIgZT1CKE4odCksbik7YSYmKHQuZmlsbD1jKGUsbCkpLHImJih0LnN0cm9rZUNvbG9yPWMoZSx1KSx0LnN0cm9rZVdpZHRoPW8sdC5saW5lSm9pbj1pKX0pKSx0fShzLHIsbil9dGhyb3cgbmV3IEVycm9yKFwiQ2FuJ3Qgd29yayB3aXRoIHRoZSBpbWFnZURhdGEgcHJvdmlkZWQuIEl0IHNlZW1zIHRvIGJlIGNvcnJ1cHQuXCIpfXJldHVybiBmdW5jdGlvbih0KXt0PW0odCk7dmFyIG4sZSxhPSExLHI9ITEsbz1uZXcgV29ya2VyKFVSTC5jcmVhdGVPYmplY3RVUkwobmV3IEJsb2IoW1widmFyIGNvbW1vbmpzR2xvYmFsID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJyA/IGdsb2JhbCA6IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB7fTtcXG5cXG5mdW5jdGlvbiBjcmVhdGVDb21tb25qc01vZHVsZShmbiwgbW9kdWxlKSB7XFxuXFx0cmV0dXJuIG1vZHVsZSA9IHsgZXhwb3J0czoge30gfSwgZm4obW9kdWxlLCBtb2R1bGUuZXhwb3J0cyksIG1vZHVsZS5leHBvcnRzO1xcbn1cXG5cXG52YXIgZGVsYXVuYXkgPSBjcmVhdGVDb21tb25qc01vZHVsZShmdW5jdGlvbiAobW9kdWxlKSB7XFxuZnVuY3Rpb24gVHJpYW5nbGUoYSwgYiwgYykge1xcbiAgdGhpcy5hID0gYTtcXG4gIHRoaXMuYiA9IGI7XFxuICB0aGlzLmMgPSBjO1xcblxcbiAgdmFyIEEgPSBiLnggLSBhLngsXFxuICAgICAgQiA9IGIueSAtIGEueSxcXG4gICAgICBDID0gYy54IC0gYS54LFxcbiAgICAgIEQgPSBjLnkgLSBhLnksXFxuICAgICAgRSA9IEEgKiAoYS54ICsgYi54KSArIEIgKiAoYS55ICsgYi55KSxcXG4gICAgICBGID0gQyAqIChhLnggKyBjLngpICsgRCAqIChhLnkgKyBjLnkpLFxcbiAgICAgIEcgPSAyICogKEEgKiAoYy55IC0gYi55KSAtIEIgKiAoYy54IC0gYi54KSksXFxuICAgICAgbWlueCwgbWlueSwgZHgsIGR5O1xcblxcbiAgLyogSWYgdGhlIHBvaW50cyBvZiB0aGUgdHJpYW5nbGUgYXJlIGNvbGxpbmVhciwgdGhlbiBqdXN0IGZpbmQgdGhlXFxuICAgKiBleHRyZW1lcyBhbmQgdXNlIHRoZSBtaWRwb2ludCBhcyB0aGUgY2VudGVyIG9mIHRoZSBjaXJjdW1jaXJjbGUuICovXFxuICBpZihNYXRoLmFicyhHKSA8IDAuMDAwMDAxKSB7XFxuICAgIG1pbnggPSBNYXRoLm1pbihhLngsIGIueCwgYy54KTtcXG4gICAgbWlueSA9IE1hdGgubWluKGEueSwgYi55LCBjLnkpO1xcbiAgICBkeCAgID0gKE1hdGgubWF4KGEueCwgYi54LCBjLngpIC0gbWlueCkgKiAwLjU7XFxuICAgIGR5ICAgPSAoTWF0aC5tYXgoYS55LCBiLnksIGMueSkgLSBtaW55KSAqIDAuNTtcXG5cXG4gICAgdGhpcy54ID0gbWlueCArIGR4O1xcbiAgICB0aGlzLnkgPSBtaW55ICsgZHk7XFxuICAgIHRoaXMuciA9IGR4ICogZHggKyBkeSAqIGR5O1xcbiAgfVxcblxcbiAgZWxzZSB7XFxuICAgIHRoaXMueCA9IChEKkUgLSBCKkYpIC8gRztcXG4gICAgdGhpcy55ID0gKEEqRiAtIEMqRSkgLyBHO1xcbiAgICBkeCA9IHRoaXMueCAtIGEueDtcXG4gICAgZHkgPSB0aGlzLnkgLSBhLnk7XFxuICAgIHRoaXMuciA9IGR4ICogZHggKyBkeSAqIGR5O1xcbiAgfVxcbn1cXG5cXG5UcmlhbmdsZS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uKGN0eCkge1xcbiAgY3R4LmJlZ2luUGF0aCgpO1xcbiAgY3R4Lm1vdmVUbyh0aGlzLmEueCwgdGhpcy5hLnkpO1xcbiAgY3R4LmxpbmVUbyh0aGlzLmIueCwgdGhpcy5iLnkpO1xcbiAgY3R4LmxpbmVUbyh0aGlzLmMueCwgdGhpcy5jLnkpO1xcbiAgY3R4LmNsb3NlUGF0aCgpO1xcbiAgY3R4LnN0cm9rZSgpO1xcbn07XFxuXFxuZnVuY3Rpb24gYnlYKGEsIGIpIHtcXG4gIHJldHVybiBiLnggLSBhLnhcXG59XFxuXFxuZnVuY3Rpb24gZGVkdXAoZWRnZXMpIHtcXG4gIHZhciBqID0gZWRnZXMubGVuZ3RoLFxcbiAgICAgIGEsIGIsIGksIG0sIG47XFxuXFxuICBvdXRlcjogd2hpbGUoaikge1xcbiAgICBiID0gZWRnZXNbLS1qXTtcXG4gICAgYSA9IGVkZ2VzWy0tal07XFxuICAgIGkgPSBqO1xcbiAgICB3aGlsZShpKSB7XFxuICAgICAgbiA9IGVkZ2VzWy0taV07XFxuICAgICAgbSA9IGVkZ2VzWy0taV07XFxuICAgICAgaWYoKGEgPT09IG0gJiYgYiA9PT0gbikgfHwgKGEgPT09IG4gJiYgYiA9PT0gbSkpIHtcXG4gICAgICAgIGVkZ2VzLnNwbGljZShqLCAyKTtcXG4gICAgICAgIGVkZ2VzLnNwbGljZShpLCAyKTtcXG4gICAgICAgIGogLT0gMjtcXG4gICAgICAgIGNvbnRpbnVlIG91dGVyXFxuICAgICAgfVxcbiAgICB9XFxuICB9XFxufVxcblxcbmZ1bmN0aW9uIHRyaWFuZ3VsYXRlKHZlcnRpY2VzKSB7XFxuICAvKiBCYWlsIGlmIHRoZXJlIGFyZW4ndCBlbm91Z2ggdmVydGljZXMgdG8gZm9ybSBhbnkgdHJpYW5nbGVzLiAqL1xcbiAgaWYodmVydGljZXMubGVuZ3RoIDwgMylcXG4gICAgeyByZXR1cm4gW10gfVxcblxcbiAgLyogRW5zdXJlIHRoZSB2ZXJ0ZXggYXJyYXkgaXMgaW4gb3JkZXIgb2YgZGVzY2VuZGluZyBYIGNvb3JkaW5hdGVcXG4gICAqICh3aGljaCBpcyBuZWVkZWQgdG8gZW5zdXJlIGEgc3VicXVhZHJhdGljIHJ1bnRpbWUpLCBhbmQgdGhlbiBmaW5kXFxuICAgKiB0aGUgYm91bmRpbmcgYm94IGFyb3VuZCB0aGUgcG9pbnRzLiAqL1xcbiAgdmVydGljZXMuc29ydChieVgpO1xcblxcbiAgdmFyIGkgICAgPSB2ZXJ0aWNlcy5sZW5ndGggLSAxLFxcbiAgICAgIHhtaW4gPSB2ZXJ0aWNlc1tpXS54LFxcbiAgICAgIHhtYXggPSB2ZXJ0aWNlc1swXS54LFxcbiAgICAgIHltaW4gPSB2ZXJ0aWNlc1tpXS55LFxcbiAgICAgIHltYXggPSB5bWluO1xcblxcbiAgd2hpbGUoaS0tKSB7XFxuICAgIGlmKHZlcnRpY2VzW2ldLnkgPCB5bWluKSB7IHltaW4gPSB2ZXJ0aWNlc1tpXS55OyB9XFxuICAgIGlmKHZlcnRpY2VzW2ldLnkgPiB5bWF4KSB7IHltYXggPSB2ZXJ0aWNlc1tpXS55OyB9XFxuICB9XFxuXFxuICAvKiBGaW5kIGEgc3VwZXJ0cmlhbmdsZSwgd2hpY2ggaXMgYSB0cmlhbmdsZSB0aGF0IHN1cnJvdW5kcyBhbGwgdGhlXFxuICAgKiB2ZXJ0aWNlcy4gVGhpcyBpcyB1c2VkIGxpa2Ugc29tZXRoaW5nIG9mIGEgc2VudGluZWwgdmFsdWUgdG8gcmVtb3ZlXFxuICAgKiBjYXNlcyBpbiB0aGUgbWFpbiBhbGdvcml0aG0sIGFuZCBpcyByZW1vdmVkIGJlZm9yZSB3ZSByZXR1cm4gYW55XFxuICAgKiByZXN1bHRzLlxcbiAgICpcXG4gICAqIE9uY2UgZm91bmQsIHB1dCBpdCBpbiB0aGUgXFxcIm9wZW5cXFwiIGxpc3QuIChUaGUgXFxcIm9wZW5cXFwiIGxpc3QgaXMgZm9yXFxuICAgKiB0cmlhbmdsZXMgd2hvIG1heSBzdGlsbCBuZWVkIHRvIGJlIGNvbnNpZGVyZWQ7IHRoZSBcXFwiY2xvc2VkXFxcIiBsaXN0IGlzXFxuICAgKiBmb3IgdHJpYW5nbGVzIHdoaWNoIGRvIG5vdC4pICovXFxuICB2YXIgZHggICAgID0geG1heCAtIHhtaW4sXFxuICAgICAgZHkgICAgID0geW1heCAtIHltaW4sXFxuICAgICAgZG1heCAgID0gKGR4ID4gZHkpID8gZHggOiBkeSxcXG4gICAgICB4bWlkICAgPSAoeG1heCArIHhtaW4pICogMC41LFxcbiAgICAgIHltaWQgICA9ICh5bWF4ICsgeW1pbikgKiAwLjUsXFxuICAgICAgb3BlbiAgID0gW1xcbiAgICAgICAgbmV3IFRyaWFuZ2xlKFxcbiAgICAgICAgICB7eDogeG1pZCAtIDIwICogZG1heCwgeTogeW1pZCAtICAgICAgZG1heCwgX19zZW50aW5lbDogdHJ1ZX0sXFxuICAgICAgICAgIHt4OiB4bWlkICAgICAgICAgICAgLCB5OiB5bWlkICsgMjAgKiBkbWF4LCBfX3NlbnRpbmVsOiB0cnVlfSxcXG4gICAgICAgICAge3g6IHhtaWQgKyAyMCAqIGRtYXgsIHk6IHltaWQgLSAgICAgIGRtYXgsIF9fc2VudGluZWw6IHRydWV9XFxuICAgICAgICApXFxuICAgICAgXSxcXG4gICAgICBjbG9zZWQgPSBbXSxcXG4gICAgICBlZGdlcyA9IFtdLFxcbiAgICAgIGosIGEsIGI7XFxuXFxuICAvKiBJbmNyZW1lbnRhbGx5IGFkZCBlYWNoIHZlcnRleCB0byB0aGUgbWVzaC4gKi9cXG4gIGkgPSB2ZXJ0aWNlcy5sZW5ndGg7XFxuICB3aGlsZShpLS0pIHtcXG4gICAgLyogRm9yIGVhY2ggb3BlbiB0cmlhbmdsZSwgY2hlY2sgdG8gc2VlIGlmIHRoZSBjdXJyZW50IHBvaW50IGlzXFxuICAgICAqIGluc2lkZSBpdCdzIGNpcmN1bWNpcmNsZS4gSWYgaXQgaXMsIHJlbW92ZSB0aGUgdHJpYW5nbGUgYW5kIGFkZFxcbiAgICAgKiBpdCdzIGVkZ2VzIHRvIGFuIGVkZ2UgbGlzdC4gKi9cXG4gICAgZWRnZXMubGVuZ3RoID0gMDtcXG4gICAgaiA9IG9wZW4ubGVuZ3RoO1xcbiAgICB3aGlsZShqLS0pIHtcXG4gICAgICAvKiBJZiB0aGlzIHBvaW50IGlzIHRvIHRoZSByaWdodCBvZiB0aGlzIHRyaWFuZ2xlJ3MgY2lyY3VtY2lyY2xlLFxcbiAgICAgICAqIHRoZW4gdGhpcyB0cmlhbmdsZSBzaG91bGQgbmV2ZXIgZ2V0IGNoZWNrZWQgYWdhaW4uIFJlbW92ZSBpdFxcbiAgICAgICAqIGZyb20gdGhlIG9wZW4gbGlzdCwgYWRkIGl0IHRvIHRoZSBjbG9zZWQgbGlzdCwgYW5kIHNraXAuICovXFxuICAgICAgZHggPSB2ZXJ0aWNlc1tpXS54IC0gb3BlbltqXS54O1xcbiAgICAgIGlmKGR4ID4gMCAmJiBkeCAqIGR4ID4gb3BlbltqXS5yKSB7XFxuICAgICAgICBjbG9zZWQucHVzaChvcGVuW2pdKTtcXG4gICAgICAgIG9wZW4uc3BsaWNlKGosIDEpO1xcbiAgICAgICAgY29udGludWVcXG4gICAgICB9XFxuXFxuICAgICAgLyogSWYgbm90LCBza2lwIHRoaXMgdHJpYW5nbGUuICovXFxuICAgICAgZHkgPSB2ZXJ0aWNlc1tpXS55IC0gb3BlbltqXS55O1xcbiAgICAgIGlmKGR4ICogZHggKyBkeSAqIGR5ID4gb3BlbltqXS5yKVxcbiAgICAgICAgeyBjb250aW51ZSB9XFxuXFxuICAgICAgLyogUmVtb3ZlIHRoZSB0cmlhbmdsZSBhbmQgYWRkIGl0J3MgZWRnZXMgdG8gdGhlIGVkZ2UgbGlzdC4gKi9cXG4gICAgICBlZGdlcy5wdXNoKFxcbiAgICAgICAgb3BlbltqXS5hLCBvcGVuW2pdLmIsXFxuICAgICAgICBvcGVuW2pdLmIsIG9wZW5bal0uYyxcXG4gICAgICAgIG9wZW5bal0uYywgb3BlbltqXS5hXFxuICAgICAgKTtcXG4gICAgICBvcGVuLnNwbGljZShqLCAxKTtcXG4gICAgfVxcblxcbiAgICAvKiBSZW1vdmUgYW55IGRvdWJsZWQgZWRnZXMuICovXFxuICAgIGRlZHVwKGVkZ2VzKTtcXG5cXG4gICAgLyogQWRkIGEgbmV3IHRyaWFuZ2xlIGZvciBlYWNoIGVkZ2UuICovXFxuICAgIGogPSBlZGdlcy5sZW5ndGg7XFxuICAgIHdoaWxlKGopIHtcXG4gICAgICBiID0gZWRnZXNbLS1qXTtcXG4gICAgICBhID0gZWRnZXNbLS1qXTtcXG4gICAgICBvcGVuLnB1c2gobmV3IFRyaWFuZ2xlKGEsIGIsIHZlcnRpY2VzW2ldKSk7XFxuICAgIH1cXG4gIH1cXG5cXG4gIC8qIENvcHkgYW55IHJlbWFpbmluZyBvcGVuIHRyaWFuZ2xlcyB0byB0aGUgY2xvc2VkIGxpc3QsIGFuZCB0aGVuXFxuICAgKiByZW1vdmUgYW55IHRyaWFuZ2xlcyB0aGF0IHNoYXJlIGEgdmVydGV4IHdpdGggdGhlIHN1cGVydHJpYW5nbGUuICovXFxuICBBcnJheS5wcm90b3R5cGUucHVzaC5hcHBseShjbG9zZWQsIG9wZW4pO1xcblxcbiAgaSA9IGNsb3NlZC5sZW5ndGg7XFxuICB3aGlsZShpLS0pXFxuICAgIHsgaWYoY2xvc2VkW2ldLmEuX19zZW50aW5lbCB8fFxcbiAgICAgICBjbG9zZWRbaV0uYi5fX3NlbnRpbmVsIHx8XFxuICAgICAgIGNsb3NlZFtpXS5jLl9fc2VudGluZWwpXFxuICAgICAgeyBjbG9zZWQuc3BsaWNlKGksIDEpOyB9IH1cXG5cXG4gIC8qIFlheSwgd2UncmUgZG9uZSEgKi9cXG4gIHJldHVybiBjbG9zZWRcXG59XFxuXFxue1xcbiAgICBtb2R1bGUuZXhwb3J0cyA9IHtcXG4gICAgICAgIFRyaWFuZ2xlOiBUcmlhbmdsZSxcXG4gICAgICAgIHRyaWFuZ3VsYXRlOiB0cmlhbmd1bGF0ZVxcbiAgICB9O1xcbn1cXG59KTtcXG52YXIgZGVsYXVuYXlfMSA9IGRlbGF1bmF5LlRyaWFuZ2xlO1xcbnZhciBkZWxhdW5heV8yID0gZGVsYXVuYXkudHJpYW5ndWxhdGU7XFxuXFxudmFyIHNvYmVsID0gY3JlYXRlQ29tbW9uanNNb2R1bGUoZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xcbihmdW5jdGlvbihyb290KSB7XFxuXFxuICBmdW5jdGlvbiBTb2JlbChpbWFnZURhdGEpIHtcXG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIFNvYmVsKSkge1xcbiAgICAgIHJldHVybiBuZXcgU29iZWwoaW1hZ2VEYXRhKTtcXG4gICAgfVxcblxcbiAgICB2YXIgd2lkdGggPSBpbWFnZURhdGEud2lkdGg7XFxuICAgIHZhciBoZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xcblxcbiAgICB2YXIga2VybmVsWCA9IFtcXG4gICAgICBbLTEsMCwxXSxcXG4gICAgICBbLTIsMCwyXSxcXG4gICAgICBbLTEsMCwxXVxcbiAgICBdO1xcblxcbiAgICB2YXIga2VybmVsWSA9IFtcXG4gICAgICBbLTEsLTIsLTFdLFxcbiAgICAgIFswLDAsMF0sXFxuICAgICAgWzEsMiwxXVxcbiAgICBdO1xcblxcbiAgICB2YXIgc29iZWxEYXRhID0gW107XFxuICAgIHZhciBncmF5c2NhbGVEYXRhID0gW107XFxuXFxuICAgIGZ1bmN0aW9uIGJpbmRQaXhlbEF0KGRhdGEpIHtcXG4gICAgICByZXR1cm4gZnVuY3Rpb24oeCwgeSwgaSkge1xcbiAgICAgICAgaSA9IGkgfHwgMDtcXG4gICAgICAgIHJldHVybiBkYXRhWygod2lkdGggKiB5KSArIHgpICogNCArIGldO1xcbiAgICAgIH07XFxuICAgIH1cXG5cXG4gICAgdmFyIGRhdGEgPSBpbWFnZURhdGEuZGF0YTtcXG4gICAgdmFyIHBpeGVsQXQgPSBiaW5kUGl4ZWxBdChkYXRhKTtcXG4gICAgdmFyIHgsIHk7XFxuXFxuICAgIGZvciAoeSA9IDA7IHkgPCBoZWlnaHQ7IHkrKykge1xcbiAgICAgIGZvciAoeCA9IDA7IHggPCB3aWR0aDsgeCsrKSB7XFxuICAgICAgICB2YXIgciA9IHBpeGVsQXQoeCwgeSwgMCk7XFxuICAgICAgICB2YXIgZyA9IHBpeGVsQXQoeCwgeSwgMSk7XFxuICAgICAgICB2YXIgYiA9IHBpeGVsQXQoeCwgeSwgMik7XFxuXFxuICAgICAgICB2YXIgYXZnID0gKHIgKyBnICsgYikgLyAzO1xcbiAgICAgICAgZ3JheXNjYWxlRGF0YS5wdXNoKGF2ZywgYXZnLCBhdmcsIDI1NSk7XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIHBpeGVsQXQgPSBiaW5kUGl4ZWxBdChncmF5c2NhbGVEYXRhKTtcXG5cXG4gICAgZm9yICh5ID0gMDsgeSA8IGhlaWdodDsgeSsrKSB7XFxuICAgICAgZm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcXG4gICAgICAgIHZhciBwaXhlbFggPSAoXFxuICAgICAgICAgICAgKGtlcm5lbFhbMF1bMF0gKiBwaXhlbEF0KHggLSAxLCB5IC0gMSkpICtcXG4gICAgICAgICAgICAoa2VybmVsWFswXVsxXSAqIHBpeGVsQXQoeCwgeSAtIDEpKSArXFxuICAgICAgICAgICAgKGtlcm5lbFhbMF1bMl0gKiBwaXhlbEF0KHggKyAxLCB5IC0gMSkpICtcXG4gICAgICAgICAgICAoa2VybmVsWFsxXVswXSAqIHBpeGVsQXQoeCAtIDEsIHkpKSArXFxuICAgICAgICAgICAgKGtlcm5lbFhbMV1bMV0gKiBwaXhlbEF0KHgsIHkpKSArXFxuICAgICAgICAgICAgKGtlcm5lbFhbMV1bMl0gKiBwaXhlbEF0KHggKyAxLCB5KSkgK1xcbiAgICAgICAgICAgIChrZXJuZWxYWzJdWzBdICogcGl4ZWxBdCh4IC0gMSwgeSArIDEpKSArXFxuICAgICAgICAgICAgKGtlcm5lbFhbMl1bMV0gKiBwaXhlbEF0KHgsIHkgKyAxKSkgK1xcbiAgICAgICAgICAgIChrZXJuZWxYWzJdWzJdICogcGl4ZWxBdCh4ICsgMSwgeSArIDEpKVxcbiAgICAgICAgKTtcXG5cXG4gICAgICAgIHZhciBwaXhlbFkgPSAoXFxuICAgICAgICAgIChrZXJuZWxZWzBdWzBdICogcGl4ZWxBdCh4IC0gMSwgeSAtIDEpKSArXFxuICAgICAgICAgIChrZXJuZWxZWzBdWzFdICogcGl4ZWxBdCh4LCB5IC0gMSkpICtcXG4gICAgICAgICAgKGtlcm5lbFlbMF1bMl0gKiBwaXhlbEF0KHggKyAxLCB5IC0gMSkpICtcXG4gICAgICAgICAgKGtlcm5lbFlbMV1bMF0gKiBwaXhlbEF0KHggLSAxLCB5KSkgK1xcbiAgICAgICAgICAoa2VybmVsWVsxXVsxXSAqIHBpeGVsQXQoeCwgeSkpICtcXG4gICAgICAgICAgKGtlcm5lbFlbMV1bMl0gKiBwaXhlbEF0KHggKyAxLCB5KSkgK1xcbiAgICAgICAgICAoa2VybmVsWVsyXVswXSAqIHBpeGVsQXQoeCAtIDEsIHkgKyAxKSkgK1xcbiAgICAgICAgICAoa2VybmVsWVsyXVsxXSAqIHBpeGVsQXQoeCwgeSArIDEpKSArXFxuICAgICAgICAgIChrZXJuZWxZWzJdWzJdICogcGl4ZWxBdCh4ICsgMSwgeSArIDEpKVxcbiAgICAgICAgKTtcXG5cXG4gICAgICAgIHZhciBtYWduaXR1ZGUgPSBNYXRoLnNxcnQoKHBpeGVsWCAqIHBpeGVsWCkgKyAocGl4ZWxZICogcGl4ZWxZKSk+Pj4wO1xcblxcbiAgICAgICAgc29iZWxEYXRhLnB1c2gobWFnbml0dWRlLCBtYWduaXR1ZGUsIG1hZ25pdHVkZSwgMjU1KTtcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgdmFyIGNsYW1wZWRBcnJheSA9IHNvYmVsRGF0YTtcXG5cXG4gICAgaWYgKHR5cGVvZiBVaW50OENsYW1wZWRBcnJheSA9PT0gJ2Z1bmN0aW9uJykge1xcbiAgICAgIGNsYW1wZWRBcnJheSA9IG5ldyBVaW50OENsYW1wZWRBcnJheShzb2JlbERhdGEpO1xcbiAgICB9XFxuXFxuICAgIGNsYW1wZWRBcnJheS50b0ltYWdlRGF0YSA9IGZ1bmN0aW9uKCkge1xcbiAgICAgIHJldHVybiBTb2JlbC50b0ltYWdlRGF0YShjbGFtcGVkQXJyYXksIHdpZHRoLCBoZWlnaHQpO1xcbiAgICB9O1xcblxcbiAgICByZXR1cm4gY2xhbXBlZEFycmF5O1xcbiAgfVxcblxcbiAgU29iZWwudG9JbWFnZURhdGEgPSBmdW5jdGlvbiB0b0ltYWdlRGF0YShkYXRhLCB3aWR0aCwgaGVpZ2h0KSB7XFxuICAgIGlmICh0eXBlb2YgSW1hZ2VEYXRhID09PSAnZnVuY3Rpb24nICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChkYXRhKSA9PT0gJ1tvYmplY3QgVWludDE2QXJyYXldJykge1xcbiAgICAgIHJldHVybiBuZXcgSW1hZ2VEYXRhKGRhdGEsIHdpZHRoLCBoZWlnaHQpO1xcbiAgICB9IGVsc2Uge1xcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygd2luZG93LmRvY3VtZW50ID09PSAnb2JqZWN0Jykge1xcbiAgICAgICAgdmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xcblxcbiAgICAgICAgaWYgKHR5cGVvZiBjYW52YXMuZ2V0Q29udGV4dCA9PT0gJ2Z1bmN0aW9uJykge1xcbiAgICAgICAgICB2YXIgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xcbiAgICAgICAgICB2YXIgaW1hZ2VEYXRhID0gY29udGV4dC5jcmVhdGVJbWFnZURhdGEod2lkdGgsIGhlaWdodCk7XFxuICAgICAgICAgIGltYWdlRGF0YS5kYXRhLnNldChkYXRhKTtcXG4gICAgICAgICAgcmV0dXJuIGltYWdlRGF0YTtcXG4gICAgICAgIH0gZWxzZSB7XFxuICAgICAgICAgIHJldHVybiBuZXcgRmFrZUltYWdlRGF0YShkYXRhLCB3aWR0aCwgaGVpZ2h0KTtcXG4gICAgICAgIH1cXG4gICAgICB9IGVsc2Uge1xcbiAgICAgICAgcmV0dXJuIG5ldyBGYWtlSW1hZ2VEYXRhKGRhdGEsIHdpZHRoLCBoZWlnaHQpO1xcbiAgICAgIH1cXG4gICAgfVxcbiAgfTtcXG5cXG4gIGZ1bmN0aW9uIEZha2VJbWFnZURhdGEoZGF0YSwgd2lkdGgsIGhlaWdodCkge1xcbiAgICByZXR1cm4ge1xcbiAgICAgIHdpZHRoOiB3aWR0aCxcXG4gICAgICBoZWlnaHQ6IGhlaWdodCxcXG4gICAgICBkYXRhOiBkYXRhXFxuICAgIH07XFxuICB9XFxuXFxuICB7XFxuICAgIGlmIChtb2R1bGUuZXhwb3J0cykge1xcbiAgICAgIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IFNvYmVsO1xcbiAgICB9XFxuICAgIGV4cG9ydHMuU29iZWwgPSBTb2JlbDtcXG4gIH1cXG5cXG59KShjb21tb25qc0dsb2JhbCk7XFxufSk7XFxudmFyIHNvYmVsXzEgPSBzb2JlbC5Tb2JlbDtcXG5cXG5mdW5jdGlvbiBpc0ltYWdlRGF0YSAoaW1hZ2VEYXRhKSB7XFxuXFx0cmV0dXJuIChcXG5cXHRcXHRpbWFnZURhdGEgJiYgXFxuXFx0XFx0dHlwZW9mIGltYWdlRGF0YS53aWR0aCA9PT0gJ251bWJlcicgJiZcXG5cXHRcXHR0eXBlb2YgaW1hZ2VEYXRhLmhlaWdodCA9PT0gJ251bWJlcicgJiZcXG5cXHRcXHRpbWFnZURhdGEuZGF0YSAmJlxcblxcdFxcdHR5cGVvZiBpbWFnZURhdGEuZGF0YS5sZW5ndGggPT09ICdudW1iZXInICYmXFxuXFx0XFx0dHlwZW9mIGltYWdlRGF0YS5kYXRhID09PSAnb2JqZWN0J1xcblxcdCk7XFxufVxcblxcbnZhciBDYW52YXMgPSBmdW5jdGlvbiBDYW52YXMgKCB3aWR0aCwgaGVpZ2h0ICkge1xcblxcdGlmICggd2lkdGggPT09IHZvaWQgMCApIHdpZHRoID0gMzAwO1xcblxcdGlmICggaGVpZ2h0ID09PSB2b2lkIDAgKSBoZWlnaHQgPSAxNTA7XFxuXFxuXFx0aWYgKCB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyApIHtcXG5cXHRcXHR0aGlzLmNhbnZhc0VsID0geyB3aWR0aDogd2lkdGgsIGhlaWdodDogaGVpZ2h0IH07XFxuXFx0XFx0dGhpcy5jdHggPSBudWxsO1xcblxcdH0gZWxzZSB7XFxuXFx0XFx0dGhpcy5jYW52YXNFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoICdjYW52YXMnICk7XFxuXFx0XFx0dGhpcy5jYW52YXNFbC53aWR0aCA9IHdpZHRoO1xcblxcdFxcdHRoaXMuY2FudmFzRWwuaGVpZ2h0ID0gaGVpZ2h0O1xcblxcdFxcdHRoaXMuY3R4ID0gdGhpcy5jYW52YXNFbC5nZXRDb250ZXh0KCAnMmQnICk7XFxuXFx0fSBcXG59O1xcblxcbnZhciBwcm90b3R5cGVBY2Nlc3NvcnMgPSB7IHdpZHRoOiB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSB9LGhlaWdodDogeyBjb25maWd1cmFibGU6IHRydWUgfSB9O1xcblxcbkNhbnZhcy5wcm90b3R5cGUuZ2V0Q29udGV4dCA9IGZ1bmN0aW9uIGdldENvbnRleHQgKCkge1xcblxcdHJldHVybiB0aGlzLmN0eDtcXG59O1xcblxcbkNhbnZhcy5wcm90b3R5cGUudG9EYXRhVVJMID0gZnVuY3Rpb24gdG9EYXRhVVJMICggdHlwZSwgZW5jb2Rlck9wdGlvbnMsIGNiICkge1xcblxcdGlmICggdHlwZW9mIGNiID09PSAnZnVuY3Rpb24nICkge1xcblxcdFxcdGNiKCB0aGlzLmNhbnZhc0VsLnRvRGF0YVVSTCggdHlwZSwgZW5jb2Rlck9wdGlvbnMgKSApO1xcblxcdH0gZWxzZSB7XFxuXFx0XFx0cmV0dXJuIHRoaXMuY2FudmFzRWwudG9EYXRhVVJMKCB0eXBlLCBlbmNvZGVyT3B0aW9ucyApO1xcblxcdH1cXG59O1xcblxcdFxcbnByb3RvdHlwZUFjY2Vzc29ycy53aWR0aC5nZXQgPSBmdW5jdGlvbiAoKSB7XFxuXFx0cmV0dXJuIHRoaXMuY2FudmFzRWwud2lkdGg7XFxufTtcXG5cXHRcXG5wcm90b3R5cGVBY2Nlc3NvcnMud2lkdGguc2V0ID0gZnVuY3Rpb24gKCBuZXdXaWR0aCApIHtcXG5cXHR0aGlzLmNhbnZhc0VsLndpZHRoID0gbmV3V2lkdGg7XFxufTtcXG5cXG5wcm90b3R5cGVBY2Nlc3NvcnMuaGVpZ2h0LmdldCA9IGZ1bmN0aW9uICgpIHtcXG5cXHRyZXR1cm4gdGhpcy5jYW52YXNFbC5oZWlnaHQ7XFxufTtcXG5cXG5wcm90b3R5cGVBY2Nlc3NvcnMuaGVpZ2h0LnNldCA9IGZ1bmN0aW9uICggbmV3SGVpZ2h0ICkge1xcblxcdHRoaXMuY2FudmFzRWwuaGVpZ2h0ID0gbmV3SGVpZ2h0O1xcbn07XFxuXFxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIENhbnZhcy5wcm90b3R5cGUsIHByb3RvdHlwZUFjY2Vzc29ycyApO1xcblxcbmlmICggdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgKSB7XFxuXFx0Q2FudmFzLkltYWdlID0gSW1hZ2U7XFxufVxcblxcbi8vIGltcG9ydCBDYW52YXMgZnJvbSAnY2FudmFzJztcXG5cXG5mdW5jdGlvbiBjb3B5SW1hZ2VEYXRhIChpbWFnZURhdGEpIHtcXG5cXHRpZiAoIGlzSW1hZ2VEYXRhICggaW1hZ2VEYXRhICkgKSB7XFxuXFx0XFx0aWYgKCB0eXBlb2YgVWludDhDbGFtcGVkQXJyYXkgPT09ICd1bmRlZmluZWQnICkge1xcblxcdFxcdFxcdGlmICggdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgKSB7XFxuXFx0XFx0XFx0XFx0dGhyb3cgbmV3IEVycm9yKCBcXFwiQ2FuJ3QgY29weSBpbWFnZURhdGEgaW4gd2Vid29ya2VyIHdpdGhvdXQgVWludDhDbGFtcGVkQXJyYXkgc3VwcG9ydC5cXFwiICk7XFxuXFx0XFx0XFx0XFx0cmV0dXJuIGltYWdlRGF0YTtcXG5cXHRcXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdFxcdHJldHVybiBjb3B5SW1hZ2VEYXRhV2l0aENhbnZhcyggaW1hZ2VEYXRhICk7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH0gZWxzZSB7XFxuXFx0XFx0XFx0dmFyIGNsYW1wZWRBcnJheSA9IG5ldyBVaW50OENsYW1wZWRBcnJheSggaW1hZ2VEYXRhLmRhdGEgKTtcXG5cXG5cXHRcXHRcXHRpZiAoIHR5cGVvZiBJbWFnZURhdGEgPT09ICd1bmRlZmluZWQnICkge1xcblxcdFxcdFxcdFxcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1MjM4MDM2LzIyOTE4OVxcblxcdFxcdFxcdFxcdHJldHVybiB7XFxuXFx0XFx0XFx0XFx0XFx0d2lkdGg6IGltYWdlRGF0YS53aWR0aCxcXG5cXHRcXHRcXHRcXHRcXHRoZWlnaHQ6IGltYWdlRGF0YS5oZWlnaHQsXFxuXFx0XFx0XFx0XFx0XFx0ZGF0YTogY2xhbXBlZEFycmF5XFxuXFx0XFx0XFx0XFx0fTtcXG5cXHRcXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdFxcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE1OTA4OTIyLzIyOTE4OSNjb21tZW50NTcxOTI1OTFfMTU5MDg5MjJcXG5cXHRcXHRcXHRcXHR2YXIgcmVzdWx0O1xcblxcblxcdFxcdFxcdFxcdHRyeSB7XFxuXFx0XFx0XFx0XFx0XFx0cmVzdWx0ID0gbmV3IEltYWdlRGF0YSggY2xhbXBlZEFycmF5LCBpbWFnZURhdGEud2lkdGgsIGltYWdlRGF0YS5oZWlnaHQgKTtcXG5cXHRcXHRcXHRcXHR9IGNhdGNoICggZXJyICkge1xcblxcdFxcdFxcdFxcdFxcdGlmICggdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgKSB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0dGhyb3cgbmV3IEVycm9yKCBcXFwiQ2FuJ3QgY29weSBpbWFnZURhdGEgaW4gd2Vid29ya2VyIHdpdGhvdXQgcHJvcGVyIEltYWdlRGF0YSgpIHN1cHBvcnQuXFxcIiApO1xcblxcdFxcdFxcdFxcdFxcdFxcdHJlc3VsdCA9IGltYWdlRGF0YTtcXG5cXHRcXHRcXHRcXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdFxcdFxcdFxcdHJlc3VsdCA9IGNvcHlJbWFnZURhdGFXaXRoQ2FudmFzKCBpbWFnZURhdGEgKTtcXG5cXHRcXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdFxcdHJldHVybiByZXN1bHQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdH1cXG5cXHR9IGVsc2Uge1xcblxcdFxcdHRocm93IG5ldyBFcnJvciggJ0dpdmVuIGltYWdlRGF0YSBvYmplY3QgaXMgbm90IHVzZWFibGUuJyApO1xcblxcdFxcdHJldHVybjtcXG5cXHR9XFxufVxcblxcbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzExOTE4MTI2LzIyOTE4OVxcbmZ1bmN0aW9uIGNvcHlJbWFnZURhdGFXaXRoQ2FudmFzICggaW1hZ2VEYXRhICkge1xcblxcdHZhciBjYW52YXMgPSBuZXcgQ2FudmFzKCBpbWFnZURhdGEud2lkdGgsIGltYWdlRGF0YS5oZWlnaHQgKTtcXG5cXHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoICcyZCcgKTtcXG5cXG5cXHRjdHgucHV0SW1hZ2VEYXRhKCBpbWFnZURhdGEsIDAsIDAgKTtcXG5cXHRcXHRcXHRcXHRcXG5cXHRyZXR1cm4gY3R4LmdldEltYWdlRGF0YSggMCwgMCwgaW1hZ2VEYXRhLndpZHRoLCBpbWFnZURhdGEuaGVpZ2h0ICk7XFxufVxcblxcbi8qXFxuICAgIFN0YWNrQmx1ciAtIGEgZmFzdCBhbG1vc3QgR2F1c3NpYW4gQmx1ciBGb3IgQ2FudmFzXFxuXFxuICAgIFZlcnNpb246ICAgICAwLjVcXG4gICAgQXV0aG9yOiAgICAgICAgTWFyaW8gS2xpbmdlbWFublxcbiAgICBDb250YWN0OiAgICAgbWFyaW9AcXVhc2ltb25kby5jb21cXG4gICAgV2Vic2l0ZTogICAgaHR0cDovL3d3dy5xdWFzaW1vbmRvLmNvbS9TdGFja0JsdXJGb3JDYW52YXNcXG4gICAgVHdpdHRlcjogICAgQHF1YXNpbW9uZG9cXG5cXG4gICAgSW4gY2FzZSB5b3UgZmluZCB0aGlzIGNsYXNzIHVzZWZ1bCAtIGVzcGVjaWFsbHkgaW4gY29tbWVyY2lhbCBwcm9qZWN0cyAtXFxuICAgIEkgYW0gbm90IHRvdGFsbHkgdW5oYXBweSBmb3IgYSBzbWFsbCBkb25hdGlvbiB0byBteSBQYXlQYWwgYWNjb3VudFxcbiAgICBtYXJpb0BxdWFzaW1vbmRvLmRlXFxuXFxuICAgIE9yIHN1cHBvcnQgbWUgb24gZmxhdHRyOlxcbiAgICBodHRwczovL2ZsYXR0ci5jb20vdGhpbmcvNzI3OTEvU3RhY2tCbHVyLWEtZmFzdC1hbG1vc3QtR2F1c3NpYW4tQmx1ci1FZmZlY3QtZm9yLUNhbnZhc0phdmFzY3JpcHRcXG5cXG4gICAgQ29weXJpZ2h0IChjKSAyMDEwIE1hcmlvIEtsaW5nZW1hbm5cXG5cXG4gICAgUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb25cXG4gICAgb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb25cXG4gICAgZmlsZXMgKHRoZSBcXFwiU29mdHdhcmVcXFwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dFxcbiAgICByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSxcXG4gICAgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcXG4gICAgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlXFxuICAgIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nXFxuICAgIGNvbmRpdGlvbnM6XFxuXFxuICAgIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXFxuICAgIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxcblxcbiAgICBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXFxcIkFTIElTXFxcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCxcXG4gICAgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTXFxuICAgIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EXFxuICAgIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUXFxuICAgIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLFxcbiAgICBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkdcXG4gICAgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUlxcbiAgICBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXFxuICAgICovXFxuXFxudmFyIG11bF90YWJsZSA9IFtcXG4gICAgNTEyLDUxMiw0NTYsNTEyLDMyOCw0NTYsMzM1LDUxMiw0MDUsMzI4LDI3MSw0NTYsMzg4LDMzNSwyOTIsNTEyLFxcbiAgICA0NTQsNDA1LDM2NCwzMjgsMjk4LDI3MSw0OTYsNDU2LDQyMCwzODgsMzYwLDMzNSwzMTIsMjkyLDI3Myw1MTIsXFxuICAgIDQ4Miw0NTQsNDI4LDQwNSwzODMsMzY0LDM0NSwzMjgsMzEyLDI5OCwyODQsMjcxLDI1OSw0OTYsNDc1LDQ1NixcXG4gICAgNDM3LDQyMCw0MDQsMzg4LDM3NCwzNjAsMzQ3LDMzNSwzMjMsMzEyLDMwMiwyOTIsMjgyLDI3MywyNjUsNTEyLFxcbiAgICA0OTcsNDgyLDQ2OCw0NTQsNDQxLDQyOCw0MTcsNDA1LDM5NCwzODMsMzczLDM2NCwzNTQsMzQ1LDMzNywzMjgsXFxuICAgIDMyMCwzMTIsMzA1LDI5OCwyOTEsMjg0LDI3OCwyNzEsMjY1LDI1OSw1MDcsNDk2LDQ4NSw0NzUsNDY1LDQ1NixcXG4gICAgNDQ2LDQzNyw0MjgsNDIwLDQxMiw0MDQsMzk2LDM4OCwzODEsMzc0LDM2NywzNjAsMzU0LDM0NywzNDEsMzM1LFxcbiAgICAzMjksMzIzLDMxOCwzMTIsMzA3LDMwMiwyOTcsMjkyLDI4NywyODIsMjc4LDI3MywyNjksMjY1LDI2MSw1MTIsXFxuICAgIDUwNSw0OTcsNDg5LDQ4Miw0NzUsNDY4LDQ2MSw0NTQsNDQ3LDQ0MSw0MzUsNDI4LDQyMiw0MTcsNDExLDQwNSxcXG4gICAgMzk5LDM5NCwzODksMzgzLDM3OCwzNzMsMzY4LDM2NCwzNTksMzU0LDM1MCwzNDUsMzQxLDMzNywzMzIsMzI4LFxcbiAgICAzMjQsMzIwLDMxNiwzMTIsMzA5LDMwNSwzMDEsMjk4LDI5NCwyOTEsMjg3LDI4NCwyODEsMjc4LDI3NCwyNzEsXFxuICAgIDI2OCwyNjUsMjYyLDI1OSwyNTcsNTA3LDUwMSw0OTYsNDkxLDQ4NSw0ODAsNDc1LDQ3MCw0NjUsNDYwLDQ1NixcXG4gICAgNDUxLDQ0Niw0NDIsNDM3LDQzMyw0MjgsNDI0LDQyMCw0MTYsNDEyLDQwOCw0MDQsNDAwLDM5NiwzOTIsMzg4LFxcbiAgICAzODUsMzgxLDM3NywzNzQsMzcwLDM2NywzNjMsMzYwLDM1NywzNTQsMzUwLDM0NywzNDQsMzQxLDMzOCwzMzUsXFxuICAgIDMzMiwzMjksMzI2LDMyMywzMjAsMzE4LDMxNSwzMTIsMzEwLDMwNywzMDQsMzAyLDI5OSwyOTcsMjk0LDI5MixcXG4gICAgMjg5LDI4NywyODUsMjgyLDI4MCwyNzgsMjc1LDI3MywyNzEsMjY5LDI2NywyNjUsMjYzLDI2MSwyNTldO1xcblxcblxcbnZhciBzaGdfdGFibGUgPSBbXFxuICAgIDksIDExLCAxMiwgMTMsIDEzLCAxNCwgMTQsIDE1LCAxNSwgMTUsIDE1LCAxNiwgMTYsIDE2LCAxNiwgMTcsXFxuICAgIDE3LCAxNywgMTcsIDE3LCAxNywgMTcsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE4LCAxOCwgMTgsIDE5LFxcbiAgICAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMTksIDE5LCAxOSwgMjAsIDIwLCAyMCxcXG4gICAgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjAsIDIwLCAyMCwgMjEsXFxuICAgIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLFxcbiAgICAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjEsIDIxLCAyMSwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMixcXG4gICAgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsXFxuICAgIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIyLCAyMiwgMjIsIDIzLFxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMyxcXG4gICAgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsXFxuICAgIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLCAyMywgMjMsIDIzLFxcbiAgICAyMywgMjMsIDIzLCAyMywgMjMsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsXFxuICAgIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LFxcbiAgICAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCxcXG4gICAgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCwgMjQsIDI0LCAyNCBdO1xcblxcbmZ1bmN0aW9uIEJsdXJTdGFjayAoKSB7XFxuXFx0dGhpcy5yID0gMDtcXG5cXHR0aGlzLmcgPSAwO1xcblxcdHRoaXMuYiA9IDA7XFxuXFx0dGhpcy5hID0gMDtcXG5cXHR0aGlzLm5leHQgPSBudWxsO1xcbn1cXG5cXG5mdW5jdGlvbiBzdGFja2JsdXIgKCBpbWFnZURhdGEsIHRvcF94LCB0b3BfeSwgd2lkdGgsIGhlaWdodCwgcmFkaXVzICkge1xcblxcdHZhciBwaXhlbHMgPSBpbWFnZURhdGEuZGF0YTtcXG5cXG5cXHR2YXIgeCwgeSwgaSwgcCwgeXAsIHlpLCB5dywgcl9zdW0sIGdfc3VtLCBiX3N1bSwgYV9zdW0sXFxuXFx0XFx0cl9vdXRfc3VtLCBnX291dF9zdW0sIGJfb3V0X3N1bSwgYV9vdXRfc3VtLFxcblxcdFxcdHJfaW5fc3VtLCBnX2luX3N1bSwgYl9pbl9zdW0sIGFfaW5fc3VtLFxcblxcdFxcdHByLCBwZywgcGIsIHBhLCByYnM7XFxuXFxuXFx0dmFyIGRpdiA9IHJhZGl1cyArIHJhZGl1cyArIDE7XFxuXFx0dmFyIHdpZHRoTWludXMxICA9IHdpZHRoIC0gMTtcXG5cXHR2YXIgaGVpZ2h0TWludXMxID0gaGVpZ2h0IC0gMTtcXG5cXHR2YXIgcmFkaXVzUGx1czEgID0gcmFkaXVzICsgMTtcXG5cXHR2YXIgc3VtRmFjdG9yID0gcmFkaXVzUGx1czEgKiAoIHJhZGl1c1BsdXMxICsgMSApIC8gMjtcXG5cXG5cXHR2YXIgc3RhY2tTdGFydCA9IG5ldyBCbHVyU3RhY2soKTtcXG5cXHR2YXIgc3RhY2sgPSBzdGFja1N0YXJ0O1xcblxcdFxcblxcdGZvciAoIGkgPSAxOyBpIDwgZGl2OyBpKysgKSB7XFxuXFx0XFx0c3RhY2sgPSBzdGFjay5uZXh0ID0gbmV3IEJsdXJTdGFjaygpO1xcblxcdFxcdGlmIChpID09IHJhZGl1c1BsdXMxKSB7IHZhciBzdGFja0VuZCA9IHN0YWNrOyB9XFxuXFx0fVxcblxcdHN0YWNrLm5leHQgPSBzdGFja1N0YXJ0O1xcblxcdFxcblxcdHZhciBzdGFja0luID0gbnVsbDtcXG5cXHR2YXIgc3RhY2tPdXQgPSBudWxsO1xcblxcblxcdHl3ID0geWkgPSAwO1xcblxcblxcdHZhciBtdWxfc3VtID0gbXVsX3RhYmxlW3JhZGl1c107XFxuXFx0dmFyIHNoZ19zdW0gPSBzaGdfdGFibGVbcmFkaXVzXTtcXG5cXG5cXHRmb3IgKCB5ID0gMDsgeSA8IGhlaWdodDsgeSsrICkge1xcblxcdFxcdHJfaW5fc3VtID0gZ19pbl9zdW0gPSBiX2luX3N1bSA9IGFfaW5fc3VtID0gcl9zdW0gPSBnX3N1bSA9IGJfc3VtID0gYV9zdW0gPSAwO1xcblxcblxcdFxcdHJfb3V0X3N1bSA9IHJhZGl1c1BsdXMxICogKCBwciA9IHBpeGVsc1t5aV0gKTtcXG5cXHRcXHRnX291dF9zdW0gPSByYWRpdXNQbHVzMSAqICggcGcgPSBwaXhlbHNbeWkrMV0gKTtcXG5cXHRcXHRiX291dF9zdW0gPSByYWRpdXNQbHVzMSAqICggcGIgPSBwaXhlbHNbeWkrMl0gKTtcXG5cXHRcXHRhX291dF9zdW0gPSByYWRpdXNQbHVzMSAqICggcGEgPSBwaXhlbHNbeWkrM10gKTtcXG5cXG5cXHRcXHRyX3N1bSArPSBzdW1GYWN0b3IgKiBwcjtcXG5cXHRcXHRnX3N1bSArPSBzdW1GYWN0b3IgKiBwZztcXG5cXHRcXHRiX3N1bSArPSBzdW1GYWN0b3IgKiBwYjtcXG5cXHRcXHRhX3N1bSArPSBzdW1GYWN0b3IgKiBwYTtcXG5cXG5cXHRcXHRzdGFjayA9IHN0YWNrU3RhcnQ7XFxuXFxuXFx0XFx0Zm9yICggaSA9IDA7IGkgPCByYWRpdXNQbHVzMTsgaSsrICkge1xcblxcdFxcdFxcdHN0YWNrLnIgPSBwcjtcXG5cXHRcXHRcXHRzdGFjay5nID0gcGc7XFxuXFx0XFx0XFx0c3RhY2suYiA9IHBiO1xcblxcdFxcdFxcdHN0YWNrLmEgPSBwYTtcXG5cXHRcXHRcXHRzdGFjayA9IHN0YWNrLm5leHQ7XFxuXFx0XFx0fVxcblxcblxcdFxcdGZvciAoIGkgPSAxOyBpIDwgcmFkaXVzUGx1czE7IGkrKyApIHtcXG5cXHRcXHRcXHRwID0geWkgKyAoICggd2lkdGhNaW51czEgPCBpID8gd2lkdGhNaW51czEgOiBpICkgPDwgMiApO1xcblxcdFxcdFxcdHJfc3VtICs9ICggc3RhY2suciA9ICggcHIgPSBwaXhlbHNbcF0gKSApICogKCByYnMgPSByYWRpdXNQbHVzMSAtIGkgKTtcXG5cXHRcXHRcXHRnX3N1bSArPSAoIHN0YWNrLmcgPSAoIHBnID0gcGl4ZWxzW3ArMV0gKSApICogcmJzO1xcblxcdFxcdFxcdGJfc3VtICs9ICggc3RhY2suYiA9ICggcGIgPSBwaXhlbHNbcCsyXSApICkgKiByYnM7XFxuXFx0XFx0XFx0YV9zdW0gKz0gKCBzdGFjay5hID0gKCBwYSA9IHBpeGVsc1twKzNdICkgKSAqIHJicztcXG5cXG5cXHRcXHRcXHRyX2luX3N1bSArPSBwcjtcXG5cXHRcXHRcXHRnX2luX3N1bSArPSBwZztcXG5cXHRcXHRcXHRiX2luX3N1bSArPSBwYjtcXG5cXHRcXHRcXHRhX2luX3N1bSArPSBwYTtcXG5cXG5cXHRcXHRcXHRzdGFjayA9IHN0YWNrLm5leHQ7XFxuXFx0XFx0fVxcblxcblxcblxcdFxcdHN0YWNrSW4gPSBzdGFja1N0YXJ0O1xcblxcdFxcdHN0YWNrT3V0ID0gc3RhY2tFbmQ7XFxuXFxuXFx0XFx0Zm9yICh4ID0gMDsgeCA8IHdpZHRoOyB4KyspIHtcXG5cXHRcXHRcXHRwaXhlbHNbeWkrM10gPSBwYSA9IChhX3N1bSAqIG11bF9zdW0pID4+IHNoZ19zdW07XFxuXFx0XFx0XFx0XFxuXFx0XFx0XFx0aWYgKHBhICE9IDApIHtcXG5cXHRcXHRcXHRcXHRwYSA9IDI1NSAvIHBhO1xcblxcdFxcdFxcdFxcdHBpeGVsc1t5aV0gICA9ICggKCByX3N1bSAqIG11bF9zdW0gKSA+PiBzaGdfc3VtICkgKiBwYTtcXG5cXHRcXHRcXHRcXHRwaXhlbHNbeWkrMV0gPSAoICggZ19zdW0gKiBtdWxfc3VtICkgPj4gc2hnX3N1bSApICogcGE7XFxuXFx0XFx0XFx0XFx0cGl4ZWxzW3lpKzJdID0gKCAoIGJfc3VtICogbXVsX3N1bSApID4+IHNoZ19zdW0gKSAqIHBhO1xcblxcdFxcdFxcdH0gZWxzZSB7XFxuXFx0XFx0XFx0XFx0cGl4ZWxzW3lpXSA9IHBpeGVsc1t5aSsxXSA9IHBpeGVsc1t5aSsyXSA9IDA7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHJfc3VtIC09IHJfb3V0X3N1bTtcXG5cXHRcXHRcXHRnX3N1bSAtPSBnX291dF9zdW07XFxuXFx0XFx0XFx0Yl9zdW0gLT0gYl9vdXRfc3VtO1xcblxcdFxcdFxcdGFfc3VtIC09IGFfb3V0X3N1bTtcXG5cXG5cXHRcXHRcXHRyX291dF9zdW0gLT0gc3RhY2tJbi5yO1xcblxcdFxcdFxcdGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XFxuXFx0XFx0XFx0Yl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcXG5cXHRcXHRcXHRhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xcblxcblxcdFxcdFxcdHAgPSAgKCB5dyArICggKCBwID0geCArIHJhZGl1cyArIDEgKSA8IHdpZHRoTWludXMxID8gcCA6IHdpZHRoTWludXMxICkgKSA8PCAyO1xcblxcblxcdFxcdFxcdHJfaW5fc3VtICs9ICggc3RhY2tJbi5yID0gcGl4ZWxzW3BdICk7XFxuXFx0XFx0XFx0Z19pbl9zdW0gKz0gKCBzdGFja0luLmcgPSBwaXhlbHNbcCsxXSApO1xcblxcdFxcdFxcdGJfaW5fc3VtICs9ICggc3RhY2tJbi5iID0gcGl4ZWxzW3ArMl0gKTtcXG5cXHRcXHRcXHRhX2luX3N1bSArPSAoIHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdICk7XFxuXFxuXFx0XFx0XFx0cl9zdW0gKz0gcl9pbl9zdW07XFxuXFx0XFx0XFx0Z19zdW0gKz0gZ19pbl9zdW07XFxuXFx0XFx0XFx0Yl9zdW0gKz0gYl9pbl9zdW07XFxuXFx0XFx0XFx0YV9zdW0gKz0gYV9pbl9zdW07XFxuXFxuXFx0XFx0XFx0c3RhY2tJbiA9IHN0YWNrSW4ubmV4dDtcXG5cXG5cXHRcXHRcXHRyX291dF9zdW0gKz0gKCBwciA9IHN0YWNrT3V0LnIgKTtcXG5cXHRcXHRcXHRnX291dF9zdW0gKz0gKCBwZyA9IHN0YWNrT3V0LmcgKTtcXG5cXHRcXHRcXHRiX291dF9zdW0gKz0gKCBwYiA9IHN0YWNrT3V0LmIgKTtcXG5cXHRcXHRcXHRhX291dF9zdW0gKz0gKCBwYSA9IHN0YWNrT3V0LmEgKTtcXG5cXG5cXHRcXHRcXHRyX2luX3N1bSAtPSBwcjtcXG5cXHRcXHRcXHRnX2luX3N1bSAtPSBwZztcXG5cXHRcXHRcXHRiX2luX3N1bSAtPSBwYjtcXG5cXHRcXHRcXHRhX2luX3N1bSAtPSBwYTtcXG5cXG5cXHRcXHRcXHRzdGFja091dCA9IHN0YWNrT3V0Lm5leHQ7XFxuXFxuXFx0XFx0XFx0eWkgKz0gNDtcXG5cXHRcXHR9XFxuXFx0XFx0eXcgKz0gd2lkdGg7XFxuXFx0fVxcblxcblxcblxcdGZvciAoIHggPSAwOyB4IDwgd2lkdGg7IHgrKyApIHtcXG5cXHRcXHRnX2luX3N1bSA9IGJfaW5fc3VtID0gYV9pbl9zdW0gPSByX2luX3N1bSA9IGdfc3VtID0gYl9zdW0gPSBhX3N1bSA9IHJfc3VtID0gMDtcXG5cXG5cXHRcXHR5aSA9IHggPDwgMjtcXG5cXHRcXHRyX291dF9zdW0gPSByYWRpdXNQbHVzMSAqICggcHIgPSBwaXhlbHNbeWldICk7XFxuXFx0XFx0Z19vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAoIHBnID0gcGl4ZWxzW3lpKzFdICk7XFxuXFx0XFx0Yl9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAoIHBiID0gcGl4ZWxzW3lpKzJdICk7XFxuXFx0XFx0YV9vdXRfc3VtID0gcmFkaXVzUGx1czEgKiAoIHBhID0gcGl4ZWxzW3lpKzNdICk7XFxuXFxuXFx0XFx0cl9zdW0gKz0gc3VtRmFjdG9yICogcHI7XFxuXFx0XFx0Z19zdW0gKz0gc3VtRmFjdG9yICogcGc7XFxuXFx0XFx0Yl9zdW0gKz0gc3VtRmFjdG9yICogcGI7XFxuXFx0XFx0YV9zdW0gKz0gc3VtRmFjdG9yICogcGE7XFxuXFxuXFx0XFx0c3RhY2sgPSBzdGFja1N0YXJ0O1xcblxcblxcdFxcdGZvciAoIGkgPSAwOyBpIDwgcmFkaXVzUGx1czE7IGkrKykge1xcblxcdFxcdFxcdHN0YWNrLnIgPSBwcjtcXG5cXHRcXHRcXHRzdGFjay5nID0gcGc7XFxuXFx0XFx0XFx0c3RhY2suYiA9IHBiO1xcblxcdFxcdFxcdHN0YWNrLmEgPSBwYTtcXG5cXHRcXHRcXHRzdGFjayA9IHN0YWNrLm5leHQ7XFxuXFx0XFx0fVxcblxcblxcdFxcdHlwID0gd2lkdGg7XFxuXFxuXFx0XFx0Zm9yICggaSA9IDE7IGkgPD0gcmFkaXVzOyBpKysgKSB7XFxuXFx0XFx0XFx0eWkgPSAoIHlwICsgeCApIDw8IDI7XFxuXFxuXFx0XFx0XFx0cl9zdW0gKz0gKCBzdGFjay5yID0gKCBwciA9IHBpeGVsc1t5aV0gKSApICogKHJicyA9IHJhZGl1c1BsdXMxIC0gaSk7XFxuXFx0XFx0XFx0Z19zdW0gKz0gKCBzdGFjay5nID0gKCBwZyA9IHBpeGVsc1t5aSsxXSApICkgKiByYnM7XFxuXFx0XFx0XFx0Yl9zdW0gKz0gKCBzdGFjay5iID0gKCBwYiA9IHBpeGVsc1t5aSsyXSApICkgKiByYnM7XFxuXFx0XFx0XFx0YV9zdW0gKz0gKCBzdGFjay5hID0gKCBwYSA9IHBpeGVsc1t5aSszXSApICkgKiByYnM7XFxuXFxuXFx0XFx0XFx0cl9pbl9zdW0gKz0gcHI7XFxuXFx0XFx0XFx0Z19pbl9zdW0gKz0gcGc7XFxuXFx0XFx0XFx0Yl9pbl9zdW0gKz0gcGI7XFxuXFx0XFx0XFx0YV9pbl9zdW0gKz0gcGE7XFxuXFxuXFx0XFx0XFx0c3RhY2sgPSBzdGFjay5uZXh0O1xcblxcblxcdFxcdFxcdGlmICggaSA8IGhlaWdodE1pbnVzMSApIHtcXG5cXHRcXHRcXHRcXHR5cCArPSB3aWR0aDtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcblxcdFxcdHlpID0geDtcXG5cXHRcXHRzdGFja0luID0gc3RhY2tTdGFydDtcXG5cXHRcXHRzdGFja091dCA9IHN0YWNrRW5kO1xcblxcblxcdFxcdGZvciAoIHkgPSAwOyB5IDwgaGVpZ2h0OyB5KysgKSB7XFxuXFx0XFx0XFx0cCA9IHlpIDw8IDI7XFxuXFx0XFx0XFx0cGl4ZWxzW3ArM10gPSBwYSA9ICggYV9zdW0gKiBtdWxfc3VtICkgPj4gc2hnX3N1bTtcXG5cXHRcXHRcXHRcXG5cXHRcXHRcXHRpZiAoIHBhID4gMCApIHtcXG5cXHRcXHRcXHRcXHRwYSA9IDI1NSAvIHBhO1xcblxcdFxcdFxcdFxcdHBpeGVsc1twXSAgID0gKCAoIHJfc3VtICogbXVsX3N1bSApID4+IHNoZ19zdW0pICogcGE7XFxuXFx0XFx0XFx0XFx0cGl4ZWxzW3ArMV0gPSAoICggZ19zdW0gKiBtdWxfc3VtICkgPj4gc2hnX3N1bSkgKiBwYTtcXG5cXHRcXHRcXHRcXHRwaXhlbHNbcCsyXSA9ICggKCBiX3N1bSAqIG11bF9zdW0gKSA+PiBzaGdfc3VtKSAqIHBhO1xcblxcdFxcdFxcdH0gZWxzZSB7XFxuXFx0XFx0XFx0XFx0cGl4ZWxzW3BdID0gcGl4ZWxzW3ArMV0gPSBwaXhlbHNbcCsyXSA9IDA7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHJfc3VtIC09IHJfb3V0X3N1bTtcXG5cXHRcXHRcXHRnX3N1bSAtPSBnX291dF9zdW07XFxuXFx0XFx0XFx0Yl9zdW0gLT0gYl9vdXRfc3VtO1xcblxcdFxcdFxcdGFfc3VtIC09IGFfb3V0X3N1bTtcXG5cXG5cXHRcXHRcXHRyX291dF9zdW0gLT0gc3RhY2tJbi5yO1xcblxcdFxcdFxcdGdfb3V0X3N1bSAtPSBzdGFja0luLmc7XFxuXFx0XFx0XFx0Yl9vdXRfc3VtIC09IHN0YWNrSW4uYjtcXG5cXHRcXHRcXHRhX291dF9zdW0gLT0gc3RhY2tJbi5hO1xcblxcblxcdFxcdFxcdHAgPSAoIHggKyAoICggKCBwID0geSArIHJhZGl1c1BsdXMxICkgPCBoZWlnaHRNaW51czEgPyBwIDogaGVpZ2h0TWludXMxICkgKiB3aWR0aCApICkgPDwgMjtcXG5cXG5cXHRcXHRcXHRyX3N1bSArPSAoIHJfaW5fc3VtICs9ICggc3RhY2tJbi5yID0gcGl4ZWxzW3BdICkgKTtcXG5cXHRcXHRcXHRnX3N1bSArPSAoIGdfaW5fc3VtICs9ICggc3RhY2tJbi5nID0gcGl4ZWxzW3ArMV0gKSApO1xcblxcdFxcdFxcdGJfc3VtICs9ICggYl9pbl9zdW0gKz0gKCBzdGFja0luLmIgPSBwaXhlbHNbcCsyXSApICk7XFxuXFx0XFx0XFx0YV9zdW0gKz0gKCBhX2luX3N1bSArPSAoIHN0YWNrSW4uYSA9IHBpeGVsc1twKzNdICkgKTtcXG5cXG5cXHRcXHRcXHRzdGFja0luID0gc3RhY2tJbi5uZXh0O1xcblxcblxcdFxcdFxcdHJfb3V0X3N1bSArPSAoIHByID0gc3RhY2tPdXQuciApO1xcblxcdFxcdFxcdGdfb3V0X3N1bSArPSAoIHBnID0gc3RhY2tPdXQuZyApO1xcblxcdFxcdFxcdGJfb3V0X3N1bSArPSAoIHBiID0gc3RhY2tPdXQuYiApO1xcblxcdFxcdFxcdGFfb3V0X3N1bSArPSAoIHBhID0gc3RhY2tPdXQuYSApO1xcblxcblxcdFxcdFxcdHJfaW5fc3VtIC09IHByO1xcblxcdFxcdFxcdGdfaW5fc3VtIC09IHBnO1xcblxcdFxcdFxcdGJfaW5fc3VtIC09IHBiO1xcblxcdFxcdFxcdGFfaW5fc3VtIC09IHBhO1xcblxcblxcdFxcdFxcdHN0YWNrT3V0ID0gc3RhY2tPdXQubmV4dDtcXG5cXG5cXHRcXHRcXHR5aSArPSB3aWR0aDtcXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHJldHVybiBpbWFnZURhdGE7XFxufVxcblxcbmZ1bmN0aW9uIGdyZXlzY2FsZSAoaW1hZ2VEYXRhKSB7XFxuXFx0dmFyIGxlbiA9IGltYWdlRGF0YS5kYXRhLmxlbmd0aDtcXG5cXHR2YXIgYnJpZ2h0bmVzcztcXG5cXG5cXHRmb3IgKCB2YXIgaSA9IDA7IGkgPCBsZW47IGkgKz0gNCApIHtcXG5cXHRcXHRicmlnaHRuZXNzID0gMC4zNCAqIGltYWdlRGF0YS5kYXRhW2ldICsgMC41ICogaW1hZ2VEYXRhLmRhdGFbaSArIDFdICsgMC4xNiAqIGltYWdlRGF0YS5kYXRhW2kgKyAyXTtcXG5cXG5cXHRcXHRpbWFnZURhdGEuZGF0YVtpXSA9IGJyaWdodG5lc3M7XFxuXFx0XFx0aW1hZ2VEYXRhLmRhdGFbaSArIDFdID0gYnJpZ2h0bmVzcztcXG5cXHRcXHRpbWFnZURhdGEuZGF0YVtpICsgMl0gPSBicmlnaHRuZXNzO1xcblxcdH1cXG5cXHRcXHRcXG5cXHRyZXR1cm4gaW1hZ2VEYXRhO1xcbn1cXG5cXG4vLyBtb3N0IHBhcnRzIHRha2VuIGZyb20gaHR0cDovL2pzZG8uaXQvYWttMi94b1l4XFxuLy8gKHN0YXJ0aW5nIGxpbmUgMjkzKyspXFxuZnVuY3Rpb24gZ2V0RWRnZVBvaW50cyAoIGltYWdlRGF0YSwgdGhyZXNob2xkICkge1xcblxcdC8vIG9ubHkgY2hlY2sgZXZlcnkgMm5kIHBpeGVsIGluIGltYWdlRGF0YSB0byBzYXZlIHNvbWUgdGltZS5cXG5cXHR2YXIgbXVsdGlwbGllciA9IDI7XFxuXFx0dmFyIHdpZHRoID0gaW1hZ2VEYXRhLndpZHRoO1xcblxcdHZhciBoZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xcblxcdHZhciBkYXRhID0gaW1hZ2VEYXRhLmRhdGE7XFxuXFx0dmFyIHBvaW50cyA9IFsgXTtcXG5cXHR2YXIgeCwgeSwgcm93LCBjb2wsIHN4LCBzeSwgc3RlcCwgc3VtLCB0b3RhbDtcXG5cXG5cXHRmb3IgKCB5ID0gMDsgeSA8IGhlaWdodDsgeSArPSBtdWx0aXBsaWVyICkge1xcblxcdFxcdGZvciAoIHggPSAwOyB4IDwgd2lkdGg7IHggKz0gbXVsdGlwbGllciApIHtcXG5cXHRcXHRcXHRzdW0gPSB0b3RhbCA9IDA7XFxuXFxuXFx0XFx0XFx0Zm9yICggcm93ID0gLTE7IHJvdyA8PSAxOyByb3crKyApIHtcXG5cXHRcXHRcXHRcXHRzeSA9IHkgKyByb3c7XFxuXFx0XFx0XFx0XFx0c3RlcCA9IHN5ICogd2lkdGg7XFxuXFxuXFx0XFx0XFx0XFx0aWYgKCBzeSA+PSAwICYmIHN5IDwgaGVpZ2h0ICkge1xcblxcdFxcdFxcdFxcdFxcdGZvciAoIGNvbCA9IC0xOyBjb2wgPD0gMTsgY29sKysgKSB7XFxuXFx0XFx0XFx0XFx0XFx0XFx0c3ggPSB4ICsgY29sO1xcblxcblxcdFxcdFxcdFxcdFxcdFxcdGlmICggc3ggPj0gMCAmJiBzeCA8IHdpZHRoICkge1xcblxcdFxcdFxcdFxcdFxcdFxcdFxcdHN1bSArPSBkYXRhWyggc3ggKyBzdGVwICkgPDwgMl07XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFx0dG90YWwrKztcXG5cXHRcXHRcXHRcXHRcXHRcXHR9XFxuXFx0XFx0XFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcdH1cXG5cXHRcXHRcXHR9XFxuXFxuXFx0XFx0XFx0aWYgKCB0b3RhbCApIHtcXG5cXHRcXHRcXHRcXHRzdW0gLz0gdG90YWw7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdGlmICggc3VtID4gdGhyZXNob2xkICkge1xcblxcdFxcdFxcdFxcdHBvaW50cy5wdXNoKCB7IHg6IHgsIHk6IHkgfSApO1xcblxcdFxcdFxcdH1cXG5cXHRcXHR9XFxuXFx0fVxcblxcblxcdHJldHVybiBwb2ludHM7XFxufVxcblxcbmZ1bmN0aW9uIGNsYW1wICggdmFsdWUsIG1pbiwgbWF4ICkge1xcblxcdHJldHVybiB2YWx1ZSA8IG1pbiA/IG1pbiA6IHZhbHVlID4gbWF4ID8gbWF4IDogdmFsdWU7XFxufVxcblxcbmZ1bmN0aW9uIGFkZFZlcnRleCAoIHgsIHksIGhhc2ggKSB7XFxuXFx0dmFyIHJlc3VsdEtleSA9IHggKyAnfCcgKyB5O1xcblxcblxcdGlmICggISBoYXNoW3Jlc3VsdEtleV0gKSB7XFxuXFx0XFx0aGFzaFtyZXN1bHRLZXldID0geyB4OiB4LCB5OiB5IH07XFxuXFx0fVxcblxcblxcdHJlc3VsdEtleSA9IG51bGw7XFxufVxcblxcbmZ1bmN0aW9uIGdldFZlcnRpY2VzRnJvbVBvaW50cyAoIHBvaW50cywgbWF4UG9pbnRDb3VudCwgYWNjdXJhY3ksIHdpZHRoLCBoZWlnaHQgKSB7XFxuXFx0Ly8gdXNpbmcgaGFzaCBmb3IgYWxsIHBvaW50cyB0byBtYWtlIHN1cmUgd2UgaGF2ZSBhIHNldCBvZiB1bmlxdWUgdmVydGljZXMuXFxuXFx0dmFyIHJlc3VsdEhhc2ggPSB7IH07XFxuXFxuXFx0Ly8gdXNlIDI1JSBvZiBtYXggcG9pbnQgY291bnQgdG8gY3JlYXRlIGEgYmFja2dyb3VuZCBncmlkLlxcblxcdC8vIHRoaXMgYXZvaWRzIGhhdmluZyB0b28gbWFueSBcXFwiYmlnXFxcIiB0cmlhbmdsZXMgaW4gYXJlYXMgb2YgdGhlIGltYWdlIHdpdGggbG93IGNvbnRyYXN0IFxcblxcdC8vIG5leHQgdG8gdmVyeSBzbWFsbCBvbmVzIGluIGFyZWFzIHdpdGggaGlnaCBjb250cmFzdFxcblxcdC8vIGZvciBldmVyeSBvdGhlciByb3csIHN0YXJ0IHRoZSB4IHZhbHVlIGF0ID4gMCwgc28gdGhlIGdyaWQgZG9lc24ndCBsb29rIHRvbyByZWd1bGFyXFxuXFx0dmFyIGdyaWRQb2ludENvdW50ID0gTWF0aC5tYXgoIH5+KCBtYXhQb2ludENvdW50ICogKCAxIC0gYWNjdXJhY3kgKSApLCA1ICk7XFxuXFxuXFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDEwNzA5Mi8yMjkxODlcXG5cXHR2YXIgZ3JpZENvbHVtbnMgPSBNYXRoLnJvdW5kKCBNYXRoLnNxcnQoIGdyaWRQb2ludENvdW50ICkgKTtcXG5cXHR2YXIgZ3JpZFJvd3MgPSBNYXRoLnJvdW5kKCBNYXRoLmNlaWwoIGdyaWRQb2ludENvdW50IC8gZ3JpZENvbHVtbnMgKSApO1xcblxcdFxcblxcdHZhciB4SW5jcmVtZW50ID0gfn4oIHdpZHRoIC8gZ3JpZENvbHVtbnMgKTtcXG5cXHR2YXIgeUluY3JlbWVudCA9IH5+KCBoZWlnaHQgLyBncmlkUm93cyApO1xcblxcblxcdHZhciByb3dJbmRleCA9IDA7XFxuXFx0dmFyIHN0YXJ0WCA9IDA7XFxuXFxuXFx0dmFyIHggPSAwO1xcblxcdHZhciB5ID0gMDtcXG5cXG5cXHRmb3IgKCB5ID0gMDsgeSA8IGhlaWdodDsgeSs9IHlJbmNyZW1lbnQgKSB7XFxuXFx0XFx0cm93SW5kZXgrKztcXG5cXG5cXHRcXHRzdGFydFggPSByb3dJbmRleCAlIDIgPT09IDAgPyB+figgeEluY3JlbWVudCAvIDIgKSA6IDA7IFxcblxcblxcdFxcdGZvciAoIHggPSBzdGFydFg7IHggPCB3aWR0aDsgeCArPSB4SW5jcmVtZW50ICkge1xcblxcdFxcdFxcdGlmICggeCA8IHdpZHRoICYmIHkgPCBoZWlnaHQgKSB7XFxuXFx0XFx0XFx0XFx0Ly8gXFxcImRpc3RvcnRpbmdcXFwiIHRoZSBncmlkIGEgbGl0dGxlIGJpdCBzbyB0aGF0IHRoZVxcblxcdFxcdFxcdFxcdC8vIGJhY2tncm91bmQgdmVydGljZXMgZG9uJ3QgYXBwZWFyIHRvIGJlIG9uIGEgc3RyYWlnaHQgbGluZSAod2hpY2ggbG9va3MgYm9yaW5nKVxcblxcdFxcdFxcdFxcdGFkZFZlcnRleChcXG5cXHRcXHRcXHRcXHRcXHR+figgeCArICggTWF0aC5jb3MoIHkgKSAqICggeUluY3JlbWVudCApICkgKSxcXG5cXHRcXHRcXHRcXHRcXHR+figgeSArICggTWF0aC5zaW4oIHggKSAqICggeEluY3JlbWVudCApICkgKSxcXG5cXHRcXHRcXHRcXHRcXHRyZXN1bHRIYXNoXFxuXFx0XFx0XFx0XFx0KTtcXG5cXHRcXHRcXHR9XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRcXG5cXHQvLyBhZGQgcG9pbnRzIGluIHRoZSBjb3JuZXJzXFxuXFx0YWRkVmVydGV4KCAwLCAwLCByZXN1bHRIYXNoICk7XFxuXFx0YWRkVmVydGV4KCB3aWR0aCAtIDEsIDAsIHJlc3VsdEhhc2ggKTtcXG5cXHRhZGRWZXJ0ZXgoIHdpZHRoIC0gMSwgaGVpZ2h0IC0gMSwgcmVzdWx0SGFzaCApO1xcblxcdGFkZFZlcnRleCggMCwgaGVpZ2h0IC0gMSwgcmVzdWx0SGFzaCApO1xcblxcblxcdC8vIGFkZCBwb2ludHMgZnJvbSBhbGwgZWRnZSBwb2ludHNcXG5cXHR2YXIgcmVtYWluaW5nUG9pbnRDb3VudCA9IG1heFBvaW50Q291bnQgLSBPYmplY3Qua2V5cyggcmVzdWx0SGFzaCApLmxlbmd0aDtcXG5cXHR2YXIgZWRnZVBvaW50Q291bnQgPSBwb2ludHMubGVuZ3RoO1xcblxcdHZhciBpbmNyZW1lbnQgPSB+figgZWRnZVBvaW50Q291bnQgLyByZW1haW5pbmdQb2ludENvdW50ICk7XFxuXFxuXFx0aWYgKCBtYXhQb2ludENvdW50ID4gMCAmJiBpbmNyZW1lbnQgPiAwICkge1xcblxcdFxcdHZhciBpID0gMDtcXG5cXG5cXHRcXHRmb3IgKCBpID0gMDsgaSA8IGVkZ2VQb2ludENvdW50OyBpICs9IGluY3JlbWVudCApIHtcXG5cXHRcXHRcXHRhZGRWZXJ0ZXgoIHBvaW50c1tpXS54LCBwb2ludHNbaV0ueSwgcmVzdWx0SGFzaCApO1xcblxcdFxcdH1cXG5cXHR9XFxuXFxuXFx0cG9pbnRzID0gbnVsbDtcXG5cXG5cXHRyZXR1cm4gT2JqZWN0LmtleXMoIHJlc3VsdEhhc2ggKS5tYXAoIGZ1bmN0aW9uIChrZXkpIHtcXG5cXHRcXHRyZXR1cm4gcmVzdWx0SGFzaFtrZXldO1xcblxcdH0gKTtcXG59XFxuXFxuZnVuY3Rpb24gZ2V0Qm91bmRpbmdCb3ggKHBvaW50cykge1xcblxcdHZhciB4TWluID0gSW5maW5pdHk7XFxuXFx0dmFyIHhNYXggPSAtSW5maW5pdHk7XFxuXFx0dmFyIHlNaW4gPSBJbmZpbml0eTtcXG5cXHR2YXIgeU1heCA9IC1JbmZpbml0eTtcXG5cXG5cXHRwb2ludHMuZm9yRWFjaCggZnVuY3Rpb24gKHApIHtcXG5cXHRcXHRpZiAoIHAueCA8IHhNaW4gKSB7XFxuXFx0XFx0XFx0eE1pbiA9IHAueDtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aWYgKCBwLnkgPCB5TWluICkge1xcblxcdFxcdFxcdHlNaW4gPSBwLnk7XFxuXFx0XFx0fVxcblxcblxcdFxcdGlmICggcC54ID4geE1heCApIHtcXG5cXHRcXHRcXHR4TWF4ID0gcC54O1xcblxcdFxcdH1cXG5cXG5cXHRcXHRpZiAoIHAueSA+IHlNYXggKSB7XFxuXFx0XFx0XFx0eU1heCA9IHAueTtcXG5cXHRcXHR9XFxuXFx0fSApO1xcblxcblxcdHJldHVybiB7XFxuXFx0XFx0eDogeE1pbixcXG5cXHRcXHR5OiB5TWluLFxcblxcdFxcdHdpZHRoOiB4TWF4IC0geE1pbixcXG5cXHRcXHRoZWlnaHQ6IHlNYXggLSB5TWluXFxuXFx0fTtcXG59XFxuXFxuZnVuY3Rpb24gYWRkQm91bmRpbmdCb3hlc1RvUG9seWdvbnMgKCBwb2x5Z29ucywgY29sb3JEYXRhLCBwYXJhbXMgKSB7XFxuXFx0cG9seWdvbnMuZm9yRWFjaCggZnVuY3Rpb24gKHBvbHlnb24pIHtcXG5cXHRcXHRwb2x5Z29uLmJvdW5kaW5nQm94ID0gZ2V0Qm91bmRpbmdCb3goIFsgcG9seWdvbi5hLCBwb2x5Z29uLmIsIHBvbHlnb24uYyBdICk7XFxuXFx0fSApO1xcblxcblxcdHJldHVybiBwb2x5Z29ucy5maWx0ZXIoIGZ1bmN0aW9uIChwb2x5Z29uKSB7XFxuXFx0XFx0cmV0dXJuIHBvbHlnb24uYm91bmRpbmdCb3gud2lkdGggPiAwICYmIHBvbHlnb24uYm91bmRpbmdCb3guaGVpZ2h0ID4gMDtcXG5cXHR9ICk7XFxufVxcblxcbi8qKlxcbiAqIEdldCBjb2xvciBvYmplY3QgYnkgcG9zaXRpb25cXG4gKiBAcGFyYW0gIHtPYmplY3R9IHBvcyAgICAgICAgIHt4LHl9IG9iamVjdFxcbiAqIEBwYXJhbSAge09iamVjdH0gY29sb3JEYXRhICAgSW1hZ2UgY29sb3IgZGF0YSBvYmplY3RcXG4gKiBAcGFyYW0gIHtPYmplY3R9IFt0cmFuc3BhcmVudENvbG9yXSAob3B0aW9uYWwpIFJHQkEgY29sb3Igb2JqZWN0LiBVc2VkIHRvIHNldCBzcGVjaWZpYyBjb2xvciB0byB0cmFuc3BhcmVudCBwaXhlbHNcXG4gKiBAcmV0dXJuIHtPYmplY3R9ICAgICAgICAgICAgIFJHQkEgY29sb3Igb2JqZWN0XFxuICovXFxuZnVuY3Rpb24gZ2V0Q29sb3JCeVBvcyAoIHBvcywgY29sb3JEYXRhLCB0cmFuc3BhcmVudENvbG9yICkge1xcblxcdHZhciB4ID0gY2xhbXAoIHBvcy54LCAxLCBjb2xvckRhdGEud2lkdGggLSAyICk7XFxuXFx0dmFyIHkgPSBjbGFtcCggcG9zLnksIDEsIGNvbG9yRGF0YS5oZWlnaHQgLSAyICk7XFxuXFx0dmFyIGluZGV4ID0gKCAoIHggfCAwICkgKyAoIHkgfCAwICkgKiBjb2xvckRhdGEud2lkdGggKSA8PCAyO1xcblxcblxcdGlmICggaW5kZXggPj0gY29sb3JEYXRhLmRhdGEubGVuZ3RoICkge1xcblxcdFxcdGluZGV4ID0gY29sb3JEYXRhLmRhdGEubGVuZ3RoIC0gNTtcXG5cXHR9XFxuXFxuXFx0dmFyIGFscGhhID0gY29sb3JEYXRhLmRhdGFbaW5kZXggKyAzXSAvIDI1NTtcXG5cXG5cXHQvLyBSZXR1cm4gUkdCQSBjb2xvciBvYmplY3RcXG5cXHRyZXR1cm4gKCB0cmFuc3BhcmVudENvbG9yICYmIGFscGhhID09PSAwICkgPyB0cmFuc3BhcmVudENvbG9yIDoge1xcblxcdFxcdHI6IGNvbG9yRGF0YS5kYXRhW2luZGV4XSxcXG5cXHRcXHRnOiBjb2xvckRhdGEuZGF0YVtpbmRleCArIDFdLFxcblxcdFxcdGI6IGNvbG9yRGF0YS5kYXRhW2luZGV4ICsgMl0sXFxuXFx0XFx0YTogYWxwaGFcXG5cXHR9O1xcbn1cXG5cXG4vKipcXG4gKiBHZXQgcG9seWdvbidzIGNlbnRlciBwb2ludFxcbiAqIEBwYXJhbSAge09iamVjdH0gcG9seWdvbiBQb2x5Z29uIG9iamVjdFxcbiAqIEByZXR1cm4ge09iamVjdH0gICAgICAgICBQb2ludCBjb29yZGluYXRlcyB7eCx5fVxcbiAqL1xcbmZ1bmN0aW9uIHBvbHlnb25DZW50ZXIgKHBvbHlnb24pIHtcXG5cXHRyZXR1cm4ge1xcblxcdFxcdHg6ICggcG9seWdvbi5hLnggKyBwb2x5Z29uLmIueCArIHBvbHlnb24uYy54ICkgKiAwLjMzMzMzLFxcblxcdFxcdHk6ICggcG9seWdvbi5hLnkgKyBwb2x5Z29uLmIueSArIHBvbHlnb24uYy55ICkgKiAwLjMzMzMzXFxuXFx0fTtcXG59XFxuXFxuLyoqXFxuICogSXMgY29sb3IgdHJhbnNwYXJlbnQgP1xcbiAqIEBwYXJhbSAge09iamVjdH0gY29sb3IgQ29sb3Igb2JqZWN0XFxuICogQHJldHVybiB7Qm9vbGVhbn0gICAgICBJcyB0cmFuc3BhcmVudD9cXG4gKi9cXG5mdW5jdGlvbiBpc1RyYW5zcGFyZW50IChjb2xvcikge1xcblxcdHJldHVybiBjb2xvci5hID09PSAwO1xcbn1cXG5cXG4vLyBpbXBvcnQgb2JqZWN0QXNzaWduIGZyb20gJ29iamVjdC1hc3NpZ24nXFxuXFxuLy8gaHR0cHM6Ly9naXN0LmdpdGh1YnVzZXJjb250ZW50LmNvbS9vcmlhZGFtLzM5NmE0YmVhYWFkNDY1Y2E5MjE2MThmMmYyNDQ0ZDQ5L3Jhdy83NmIwZGU2Y2FmZmFhYzU5ZjhhZjJiNGRmYTBlMGI2Mzk3Y2Y0NDdkL2NvbG9yVmFsdWVzLmpzXFxuLy8gcmV0dXJuIGFycmF5IG9mIFtyLGcsYixhXSBmcm9tIGFueSB2YWxpZCBjb2xvci4gaWYgZmFpbGVkIHJldHVybnMgdW5kZWZpbmVkXFxuZnVuY3Rpb24gc3RyVG9Db2xvckFyciAoIGNvbG9yICkge1xcblxcdGlmICggdHlwZW9mIGNvbG9yID09PSAnc3RyaW5nJyApIHtcXG5cXHRcXHR2YXIgcmVzdWx0ID0gWyAwLCAwLCAwLCAwIF07XFxuXFx0XFx0XFxuXFx0XFx0aWYgKCBjb2xvclswXSA9PT0gJyMnIClcXHR7XFxuXFx0XFx0XFx0Ly8gY29udmVydCAjUkdCIGFuZCAjUkdCQSB0byAjUlJHR0JCIGFuZCAjUlJHR0JCQUFcXG5cXHRcXHRcXHRpZiAoIGNvbG9yLmxlbmd0aCA8IDcgKSB7XFxuXFx0XFx0XFx0XFx0Y29sb3IgPSBcXFwiI1xcXCIgKyAoY29sb3JbMV0pICsgKGNvbG9yWzFdKSArIChjb2xvclsyXSkgKyAoY29sb3JbMl0pICsgKGNvbG9yWzNdKSArIChjb2xvclszXSkgKyAoY29sb3IubGVuZ3RoID4gNCA/IGNvbG9yWzRdICsgY29sb3JbNF0gOiAnJyk7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHJlc3VsdCA9IFtcXG5cXHRcXHRcXHRcXHRwYXJzZUludChjb2xvci5zdWJzdHIoIDEsIDIgKSwgMTYpLFxcblxcdFxcdFxcdFxcdHBhcnNlSW50KGNvbG9yLnN1YnN0ciggMywgMiApLCAxNiksXFxuXFx0XFx0XFx0XFx0cGFyc2VJbnQoY29sb3Iuc3Vic3RyKCA1LCAyICksIDE2KSxcXG5cXHRcXHRcXHRcXHRjb2xvci5sZW5ndGggPiA3ID8gcGFyc2VJbnQoIGNvbG9yLnN1YnN0ciggNywgMiApLCAxNiApIC8gMjU1IDogMVxcblxcdFxcdFxcdF07XFxuXFx0XFx0fVxcblxcblxcdFxcdGlmICggY29sb3IuaW5kZXhPZigncmdiJykgPT09IDAgKSB7XFxuXFx0XFx0XFx0Ly8gY29udmVydCAncmdiKFIsRyxCKScgdG8gJ3JnYihSLEcsQilBJyB3aGljaCBsb29rcyBhd2Z1bCBidXQgd2lsbCBwYXNzIHRoZSByZWd4ZXAgYmVsb3dcXG5cXHRcXHRcXHRpZiAoICEgY29sb3IuaW5jbHVkZXMoICdyZ2JhJyApICkge1xcblxcdFxcdFxcdFxcdGNvbG9yICs9ICcsMSc7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdHJlc3VsdCA9IGNvbG9yXFxuXFx0XFx0XFx0XFx0Lm1hdGNoKCAvW1xcXFwuXFxcXGRdKy9nIClcXG5cXHRcXHRcXHRcXHQubWFwKCBmdW5jdGlvbiAoYSkgeyByZXR1cm4gK2E7IH0gKTtcXG5cXHRcXHR9XFxuXFx0XFx0XFxuXFx0XFx0cmV0dXJuIHJlc3VsdDtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdHJldHVybjtcXG5cXHR9XFxuXFxufVxcblxcbmZ1bmN0aW9uIHN0clRvQ29sb3IgKCBzdHIgKSB7XFxuXFx0dmFyIGNvbG9yID0gc3RyVG9Db2xvckFyciggc3RyICk7XFxuXFxuXFx0aWYgKCBjb2xvciApIHtcXG5cXHRcXHR2YXIgciA9IGNvbG9yWzBdO1xcblxcdFxcdHZhciBnID0gY29sb3JbMV07XFxuXFx0XFx0dmFyIGIgPSBjb2xvclsyXTtcXG5cXHRcXHR2YXIgYSA9IGNvbG9yWzNdO1xcblxcdFxcdHJldHVybiB7IHI6IHIsIGc6IGcsIGI6IGIsIGE6IGEgfTtcXG5cXHR9IGVsc2Uge1xcblxcdFxcdHJldHVybjtcXG5cXHR9XFxufVxcblxcbmZ1bmN0aW9uIGFkZENvbG9yVG9Qb2x5Z29ucyAoIHBvbHlnb25zLCBjb2xvckRhdGEsIHBhcmFtcyApIHtcXG5cXHR2YXIgZmlsbCA9IHBhcmFtcy5maWxsO1xcblxcdHZhciBzdHJva2UgPSBwYXJhbXMuc3Ryb2tlO1xcblxcdHZhciBzdHJva2VXaWR0aCA9IHBhcmFtcy5zdHJva2VXaWR0aDtcXG5cXHR2YXIgbGluZUpvaW4gPSBwYXJhbXMubGluZUpvaW47XFxuXFx0dmFyIHRyYW5zcGFyZW50Q29sb3IgPSBwYXJhbXMudHJhbnNwYXJlbnRDb2xvcjtcXG5cXHR2YXIgZmlsbENvbG9yID0gZmlsbCA/IHN0clRvQ29sb3IoIGZpbGwgKSA6IGZhbHNlO1xcblxcdHZhciBzdHJva2VDb2xvciA9IHN0cm9rZSA/IHN0clRvQ29sb3IoIHN0cm9rZSApIDogZmFsc2U7XFxuXFxuXFx0LyoqXFxuXFx0ICogQ29sb3Igb3ZlcnJpZGUgbG9naWNcXG5cXHQgKiBAcGFyYW0gIHtPYmplY3R9IGNvbG9yICAgIENvbG9yIG9iamVjdFxcblxcdCAqIEBwYXJhbSAge1N0cmluZ30gb3ZlcnJpZGUgT3ZlcnJpZGUgY29sb3IgKGZpbGxDb2xvci9zdHJva2VDb2xvcilcXG5cXHQgKiBAcmV0dXJuIHtTdHJpbmd9ICAgICAgICAgIENTUyBmb3JtYXR0ZWQgY29sb3IgKHJnYmEsLi4pXFxuXFx0ICovXFxuXFx0dmFyIGdldENvbG9yID0gZnVuY3Rpb24gKCBjb2xvciwgb3ZlcnJpZGUgKSB7XFxuXFx0XFx0dmFyIHQgPSAoIGlzVHJhbnNwYXJlbnQoIGNvbG9yICkgJiYgdHJhbnNwYXJlbnRDb2xvciApO1xcdC8vIENvbG9yIGlzIHRyYW5zcGFyZW50LCBhbmQgdHJhbnNwYXJlbnRDb2xvciBvdmVycmlkZSBpcyBkZWZpbmVkXFxuXFx0XFx0dmFyIGMgPSB0ID8gdHJhbnNwYXJlbnRDb2xvciA6IGNvbG9yO1xcblxcdFxcdHJldHVybiAoIG92ZXJyaWRlICYmICF0ICkgPyBvdmVycmlkZSA6IGM7XFx0XFx0Ly8gUHJpb3JpdHk6IHRyYW5zcGFyZW50Q29sb3IgLT4gb3ZlcnJpZGUgLT4gc3VwcGxpZWQgY29sb3JcXG5cXHR9O1xcblxcblxcdHBvbHlnb25zLmZvckVhY2goIGZ1bmN0aW9uIChwb2x5Z29uKSB7XFxuXFx0XFx0dmFyIGNvbG9yID0gZ2V0Q29sb3JCeVBvcyggcG9seWdvbkNlbnRlciggcG9seWdvbiApLCBjb2xvckRhdGEgKTtcXG5cXG5cXHRcXHRpZiAoIGZpbGwgKSB7XFxuXFx0XFx0XFx0cG9seWdvbi5maWxsID0gZ2V0Q29sb3IoIGNvbG9yLCBmaWxsQ29sb3IgKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0aWYgKCBzdHJva2UgKSB7XFxuXFx0XFx0XFx0cG9seWdvbi5zdHJva2VDb2xvciA9IGdldENvbG9yKGNvbG9yLCBzdHJva2VDb2xvcik7XFxuXFx0XFx0XFx0cG9seWdvbi5zdHJva2VXaWR0aCA9IHN0cm9rZVdpZHRoO1xcblxcdFxcdFxcdHBvbHlnb24ubGluZUpvaW4gPSBsaW5lSm9pbjtcXG5cXHRcXHR9XFxuXFx0fSApO1xcblxcblxcdHJldHVybiBwb2x5Z29ucztcXG59XFxuXFxuLy8gIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzk3MzM0MjAvMjI5MTg5XFxuZnVuY3Rpb24gbHVtaW5hbmNlIChjb2xvcikge1xcblxcdHZhciBhID0gWyBjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iIF0ubWFwKCBmdW5jdGlvbiAodikge1xcblxcdFxcdHYgLz0gMjU1O1xcblxcdFxcdHJldHVybiAoIHYgPD0gMC4wMzkyOCApID8gdiAvIDEyLjkyIDogTWF0aC5wb3coICggKCB2ICsgMC4wNTUgKSAvIDEuMDU1ICksIDIuNCApO1xcblxcdH0gKTtcXG5cXG5cXHRyZXR1cm4gYVswXSAqIDAuMjEyNiArIGFbMV0gKiAwLjcxNTIgKyBhWzJdICogMC4wNzIyO1xcbn1cXG5cXG5mdW5jdGlvbiBkaXN0YW5jZSAoIGEsIGIgKSB7XFxuXFx0dmFyIGR4ID0gYi54IC0gYS54O1xcblxcdHZhciBkeSA9IGIueSAtIGEueTtcXG5cXG5cXHRyZXR1cm4gTWF0aC5zcXJ0KCAoIGR4ICogZHggKSArICggZHkgKiBkeSApICk7XFxufVxcblxcbmZ1bmN0aW9uIGFkZEdyYWRpZW50c1RvUG9seWdvbnMgKCBwb2x5Z29ucywgY29sb3JEYXRhLCBwYXJhbXMgKSB7XFxuXFx0cG9seWdvbnMuZm9yRWFjaCggZnVuY3Rpb24gKHBvbHlnb24pIHtcXG5cXHRcXHR2YXIgZGF0YSA9IHsgfTtcXG5cXG5cXHRcXHQnYWJjJy5zcGxpdCggJycgKS5mb3JFYWNoKCBmdW5jdGlvbiAoa2V5KSB7XFxuXFx0XFx0XFx0dmFyIGNvbG9yID0gZ2V0Q29sb3JCeVBvcyggcG9seWdvbltrZXldLCBjb2xvckRhdGEsIHBhcmFtcy50cmFuc3BhcmVudENvbG9yICk7XFxuXFx0XFx0XFx0XFxuXFx0XFx0XFx0ZGF0YVtrZXldID0ge1xcblxcdFxcdFxcdFxcdGtleToga2V5LFxcblxcdFxcdFxcdFxcdGNvbG9yOiBjb2xvcixcXG5cXHRcXHRcXHRcXHR4OiBwb2x5Z29uW2tleV0ueCxcXG5cXHRcXHRcXHRcXHR5OiBwb2x5Z29uW2tleV0ueVxcblxcdFxcdFxcdH07XFxuXFxuXFx0XFx0XFx0ZGF0YVtrZXldLmx1bWluYW5jZSA9IGx1bWluYW5jZSggZGF0YVtrZXldLmNvbG9yICk7XFxuXFxuXFx0XFx0XFx0dmFyIG90aGVyS2V5cyA9ICdhYmMnLnJlcGxhY2UoIGtleSwgJycgKS5zcGxpdCggJycgKTtcXG5cXG5cXHRcXHRcXHRkYXRhW2tleV0ubWVkaWFuID0ge1xcblxcdFxcdFxcdFxcdHg6ICggcG9seWdvbltvdGhlcktleXNbMF1dLnggKyBwb2x5Z29uW290aGVyS2V5c1sxXV0ueCApIC8gMixcXG5cXHRcXHRcXHRcXHR5OiAoIHBvbHlnb25bb3RoZXJLZXlzWzBdXS55ICsgcG9seWdvbltvdGhlcktleXNbMV1dLnkgKSAvIDJcXG5cXHRcXHRcXHR9O1xcblxcblxcdFxcdFxcdGRhdGFba2V5XS5tZWRpYW5Db2xvciA9IGdldENvbG9yQnlQb3MoIGRhdGFba2V5XS5tZWRpYW4sIGNvbG9yRGF0YSwgcGFyYW1zLnRyYW5zcGFyZW50Q29sb3IgKTtcXG5cXHRcXHRcXHRkYXRhW2tleV0ubWVkaWFuTHVtaW5hbmNlID0gbHVtaW5hbmNlKCBkYXRhW2tleV0ubWVkaWFuQ29sb3IgKTtcXG5cXHRcXHR9ICk7XFxuXFxuXFx0XFx0Ly8gc29ydCBieSBheGlzIG9mIG1vc3QgZGlmZmVyZW5jZSBpbiBsdW1pbmFuY2VcXG5cXHRcXHR2YXIgcG9pbnRzQnlEZWx0YUluTHVtaW5hbmNlID0gWyBkYXRhLmEsIGRhdGEuYiwgZGF0YS5jIF0uc29ydCggZnVuY3Rpb24gKCB1LCB2ICkge1xcblxcdFxcdFxcdHJldHVybiBNYXRoLmFicyggdS5sdW1pbmFuY2UgLSB1Lm1lZGlhbkx1bWluYW5jZSApIC0gTWF0aC5hYnMoIHYubHVtaW5hbmNlIC0gdi5tZWRpYW5MdW1pbmFuY2UgKTtcXG5cXHRcXHR9ICk7XFxuXFxuXFx0XFx0dmFyIHBvaW50V2l0aE1vc3REZWx0YUluTHVtaW5hbmNlID0gcG9pbnRzQnlEZWx0YUluTHVtaW5hbmNlWzBdO1xcblxcdFxcdHZhciBzdGFydFBvaW50ID0gcG9pbnRzQnlEZWx0YUluTHVtaW5hbmNlWzBdO1xcblxcdFxcdHZhciBlbmRQb2ludCA9IHBvaW50V2l0aE1vc3REZWx0YUluTHVtaW5hbmNlLm1lZGlhbjtcXG5cXG5cXHRcXHR2YXIgZ3JhZGllblN0b3BQb3NpdGlvbnMgPSBbIHN0YXJ0UG9pbnQgXTtcXG5cXG5cXHRcXHR2YXIgc3RhcnRUb0VuZERpc3RhbmNlID0gZGlzdGFuY2UoIHN0YXJ0UG9pbnQsIGVuZFBvaW50ICk7XFxuXFxuXFx0XFx0Zm9yICggdmFyIGkgPSAxLCBsZW4gPSBwYXJhbXMuZ3JhZGllbnRTdG9wcyAtIDI7IGkgPCBsZW47IGkrKyApIHtcXG5cXHRcXHRcXHR2YXIgcG9pbnREaXN0YW5jZSA9IGkgKiAoIHN0YXJ0VG9FbmREaXN0YW5jZSAvIHBhcmFtcy5ncmFkaWVudFN0b3BzICk7XFxuXFx0XFx0XFx0dmFyIHBvaW50UGVyY2VudCA9IHBvaW50RGlzdGFuY2UgLyBzdGFydFRvRW5kRGlzdGFuY2U7XFxuXFx0XFx0XFx0XFxuXFx0XFx0XFx0dmFyIHBvaW50ID0ge1xcblxcdFxcdFxcdFxcdHg6IHN0YXJ0UG9pbnQueCArIHBvaW50UGVyY2VudCAqICggZW5kUG9pbnQueCAtIHN0YXJ0UG9pbnQueCApLCBcXG5cXHRcXHRcXHRcXHR5OiBzdGFydFBvaW50LnkgKyBwb2ludFBlcmNlbnQgKiAoIGVuZFBvaW50LnkgLSBzdGFydFBvaW50LnkgKVxcblxcdFxcdFxcdH07XFxuXFxuXFx0XFx0XFx0Z3JhZGllblN0b3BQb3NpdGlvbnMucHVzaCggcG9pbnQgKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0Z3JhZGllblN0b3BQb3NpdGlvbnMucHVzaCggZW5kUG9pbnQgKTtcXG5cXG5cXHRcXHRwb2x5Z29uLmdyYWRpZW50ID0ge1xcblxcdFxcdFxcdHgxOiBwb2ludFdpdGhNb3N0RGVsdGFJbkx1bWluYW5jZS54LFxcblxcdFxcdFxcdHkxOiBwb2ludFdpdGhNb3N0RGVsdGFJbkx1bWluYW5jZS55LFxcblxcdFxcdFxcdHgyOiBwb2ludFdpdGhNb3N0RGVsdGFJbkx1bWluYW5jZS5tZWRpYW4ueCxcXG5cXHRcXHRcXHR5MjogcG9pbnRXaXRoTW9zdERlbHRhSW5MdW1pbmFuY2UubWVkaWFuLnksXFxuXFx0XFx0XFx0Y29sb3JzOiBncmFkaWVuU3RvcFBvc2l0aW9ucy5tYXAoIGZ1bmN0aW9uIChwb3MpIHtcXG5cXHRcXHRcXHRcXHRyZXR1cm4gZ2V0Q29sb3JCeVBvcyggcG9zLCBjb2xvckRhdGEsIHBhcmFtcy50cmFuc3BhcmVudENvbG9yICk7XFxuXFx0XFx0XFx0fSApXFxuXFx0XFx0fTtcXG5cXG5cXHRcXHRpZiAoIHBhcmFtcy5zdHJva2UgKSB7XFxuXFx0XFx0XFx0cG9seWdvbi5zdHJva2VXaWR0aCA9IHBhcmFtcy5zdHJva2VXaWR0aDtcXG5cXHRcXHRcXHRwb2x5Z29uLmxpbmVKb2luID0gcGFyYW1zLmxpbmVKb2luO1xcblxcdFxcdH1cXG5cXG5cXHRcXHRkYXRhID0gbnVsbDtcXG5cXHR9ICk7XFxuXFxuXFx0cmV0dXJuIHBvbHlnb25zO1xcbn1cXG5cXG4vKipcXG4gKiBGaWx0ZXIgcG9seWdvbnMgd2l0aCB0cmFuc3BhcmVudCBjb2xvclxcbiAqIEBwYXJhbSAge0FycmF5fSBwb2x5Z29ucyAgICBQb2x5Z29ucyBhcnJheVxcbiAqIEBwYXJhbSAge09iamVjdH0gY29sb3JEYXRhICBDb2xvciBkYXRhXFxuICogQHJldHVybiB7QXJyYXl9ICAgICAgICAgICAgIEZpbHRlcmVkIHBvbHlnb25zIGFycmF5XFxuICovXFxuZnVuY3Rpb24gZmlsdGVyVHJhbnNwYXJlbnRQb2x5Z29ucyAoIHBvbHlnb25zLCBjb2xvckRhdGEgKSB7XFxuXFx0cmV0dXJuIHBvbHlnb25zLmZpbHRlciggZnVuY3Rpb24gKHBvbHlnb24pIHtcXG5cXHRcXHR2YXIgY29sb3IgPSBnZXRDb2xvckJ5UG9zKCBwb2x5Z29uQ2VudGVyKCBwb2x5Z29uICksIGNvbG9yRGF0YSApO1xcblxcdFxcdHJldHVybiAhIGlzVHJhbnNwYXJlbnQoIGNvbG9yICk7XFxuXFx0fSk7XFxufVxcblxcbmZ1bmN0aW9uIGltYWdlRGF0YVRvUG9seWdvbnMgKCBpbWFnZURhdGEsIHBhcmFtcyApIHtcXG5cXHRpZiAoIGlzSW1hZ2VEYXRhKCBpbWFnZURhdGEgKSApIHtcXG5cXHRcXHR2YXIgaW1hZ2VTaXplID0geyB3aWR0aDogaW1hZ2VEYXRhLndpZHRoLCBoZWlnaHQ6IGltYWdlRGF0YS5oZWlnaHQgfTtcXG5cXHRcXHR2YXIgdG1wSW1hZ2VEYXRhID0gY29weUltYWdlRGF0YSggaW1hZ2VEYXRhICk7XFxuXFx0XFx0dmFyIGNvbG9ySW1hZ2VEYXRhID0gY29weUltYWdlRGF0YSggaW1hZ2VEYXRhICk7XFxuXFx0XFx0dmFyIGJsdXJyZWRJbWFnZURhdGEgPSBzdGFja2JsdXIoIHRtcEltYWdlRGF0YSwgMCwgMCwgaW1hZ2VTaXplLndpZHRoLCBpbWFnZVNpemUuaGVpZ2h0LCBwYXJhbXMuYmx1ciApO1xcblxcdFxcdHZhciBncmV5c2NhbGVJbWFnZURhdGEgPSBncmV5c2NhbGUoIGJsdXJyZWRJbWFnZURhdGEgKTtcXG5cXHRcXHR2YXIgZWRnZXNJbWFnZURhdGEgPSBzb2JlbCggZ3JleXNjYWxlSW1hZ2VEYXRhICkudG9JbWFnZURhdGEoKTtcXG5cXHRcXHR2YXIgZWRnZVBvaW50cyA9IGdldEVkZ2VQb2ludHMoIGVkZ2VzSW1hZ2VEYXRhLCBwYXJhbXMudGhyZXNob2xkICk7XFxuXFx0XFx0dmFyIGVkZ2VWZXJ0aWNlcyA9IGdldFZlcnRpY2VzRnJvbVBvaW50cyggZWRnZVBvaW50cywgcGFyYW1zLnZlcnRleENvdW50LCBwYXJhbXMuYWNjdXJhY3ksIGltYWdlU2l6ZS53aWR0aCwgaW1hZ2VTaXplLmhlaWdodCApO1xcblxcdFxcdHZhciBwb2x5Z29ucyA9IGRlbGF1bmF5XzIoIGVkZ2VWZXJ0aWNlcyApO1xcblxcdFxcdFxcblxcdFxcdHBvbHlnb25zID0gYWRkQm91bmRpbmdCb3hlc1RvUG9seWdvbnMoIHBvbHlnb25zICk7XFxuXFx0XFx0XFxuXFx0XFx0aWYgKCAhIHBhcmFtcy50cmFuc3BhcmVudENvbG9yICkge1xcblxcdFxcdFxcdHBvbHlnb25zID0gZmlsdGVyVHJhbnNwYXJlbnRQb2x5Z29ucyggcG9seWdvbnMsIGNvbG9ySW1hZ2VEYXRhICk7XFxuXFx0XFx0fVxcblxcdFxcdFxcblxcdFxcdGlmICggcGFyYW1zLmZpbGwgPT09IHRydWUgJiYgcGFyYW1zLmdyYWRpZW50cyA9PT0gdHJ1ZSApIHtcXG5cXHRcXHRcXHRwb2x5Z29ucyA9IGFkZEdyYWRpZW50c1RvUG9seWdvbnMoIHBvbHlnb25zLCBjb2xvckltYWdlRGF0YSwgcGFyYW1zICk7XFxuXFx0XFx0fSBlbHNlIHtcXG5cXHRcXHRcXHRwb2x5Z29ucyA9IGFkZENvbG9yVG9Qb2x5Z29ucyggcG9seWdvbnMsIGNvbG9ySW1hZ2VEYXRhLCBwYXJhbXMgKTtcXG5cXHRcXHR9XFxuXFxuXFx0XFx0cmV0dXJuIHBvbHlnb25zO1xcblxcdH0gZWxzZSB7XFxuXFx0XFx0dGhyb3cgbmV3IEVycm9yKCBcXFwiQ2FuJ3Qgd29yayB3aXRoIHRoZSBpbWFnZURhdGEgcHJvdmlkZWQuIEl0IHNlZW1zIHRvIGJlIGNvcnJ1cHQuXFxcIiApO1xcblxcdFxcdHJldHVybjtcXG5cXHR9XFxufVxcblxcbm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChtc2cpIHtcXG5cXHRpZiAoIG1zZy5kYXRhLmltYWdlRGF0YSAmJiBtc2cuZGF0YS5wYXJhbXMgKSB7XFxuXFx0XFx0dHJ5IHtcXG5cXHRcXHRcXHR2YXIgaW1hZ2VEYXRhID0gbXNnLmRhdGEuaW1hZ2VEYXRhO1xcblxcblxcdFxcdFxcdC8vIHBoYW50b21qcyBzZWVtcyB0byBoYXZlIHNvbWUgbWVtb3J5IGxvc3Mgc28gd2UgbmVlZCB0byBtYWtlIHN1cmVcXG5cXHRcXHRcXHRpZiAoIHR5cGVvZiBpbWFnZURhdGEud2lkdGggPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc2cuZGF0YS5pbWFnZURhdGFXaWR0aCA9PT0gJ251bWJlcicgKSB7XFxuXFx0XFx0XFx0XFx0aW1hZ2VEYXRhLndpZHRoID0gbXNnLmRhdGEuaW1hZ2VEYXRhV2lkdGg7XFxuXFx0XFx0XFx0fVxcblxcblxcdFxcdFxcdGlmICggdHlwZW9mIGltYWdlRGF0YS5oZWlnaHQgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtc2cuZGF0YS5pbWFnZURhdGFIZWlnaHQgPT09ICdudW1iZXInICkge1xcblxcdFxcdFxcdFxcdGltYWdlRGF0YS5oZWlnaHQgPSBtc2cuZGF0YS5pbWFnZURhdGFIZWlnaHQ7XFxuXFx0XFx0XFx0fVxcblxcdFxcdFxcdFxcblxcdFxcdFxcdHZhciBwb2x5Z29ucyA9IGltYWdlRGF0YVRvUG9seWdvbnMoIG1zZy5kYXRhLmltYWdlRGF0YSwgbXNnLmRhdGEucGFyYW1zICk7XFxuXFx0XFx0XFx0XFx0XFx0XFx0XFxuXFx0XFx0XFx0c2VsZi5wb3N0TWVzc2FnZSgge1xcblxcdFxcdFxcdFxcdHBvbHlnb25KU09OU3RyOiBKU09OLnN0cmluZ2lmeSggcG9seWdvbnMgKVxcblxcdFxcdFxcdH0gKTtcXG5cXHRcXHR9IGNhdGNoICggZXJyICkge1xcblxcdFxcdFxcdHNlbGYucG9zdE1lc3NhZ2UoIHsgZXJyOiBlcnIubWVzc2FnZSB8fCBlcnIgfSApO1xcblxcdFxcdH1cXG5cXG5cXHR9IGVsc2Uge1xcblxcdFxcdGlmICggbXNnLmRhdGEuaW1hZ2VEYXRhICkge1xcblxcdFxcdFxcdHNlbGYucG9zdE1lc3NhZ2UoIHsgZXJyOiAnUGFyYW1ldGVycyBhcmUgbWlzc2luZy4nIH0gKTtcXG5cXHRcXHR9IGVsc2Uge1xcblxcdFxcdFxcdHNlbGYucG9zdE1lc3NhZ2UoIHsgZXJyOiAnSW1hZ2VEYXRhIGlzIG1pc3NpbmcuJyB9ICk7XFxuXFx0XFx0fVxcblxcdH1cXG5cXHRcXG5cXHRzZWxmLmNsb3NlKCk7XFxufTtcXG5cIl0se3R5cGU6XCJ0ZXh0L2phdmFzY3JpcHRcIn0pKSksaT17Z2V0UGFyYW1zOmZ1bmN0aW9uKCl7cmV0dXJuIHR9LGdldElucHV0OnUsZ2V0T3V0cHV0OmN9LHM9e2Zyb21JbWFnZTpmdW5jdGlvbih0KXtyZXR1cm4gZCh5LHQpfSxmcm9tSW1hZ2VTeW5jOmZ1bmN0aW9uKHQpe3JldHVybiBkKHksdCwhMCl9LGZyb21JbWFnZURhdGE6ZnVuY3Rpb24odCl7cmV0dXJuIGQoKGZ1bmN0aW9uKHQpe3JldHVybiB0fSksdCl9LGZyb21JbWFnZURhdGFTeW5jOmZ1bmN0aW9uKHQpe3JldHVybiBkKChmdW5jdGlvbih0KXtyZXR1cm4gdH0pLHQsITApfX0sbD17dG9EYXRhOmZ1bmN0aW9uKHQpe3JldHVybiBwKChmdW5jdGlvbih0KXtyZXR1cm4gdH0pLHQpfSx0b0RhdGFTeW5jOmZ1bmN0aW9uKHQpe3JldHVybiBwKChmdW5jdGlvbih0KXtyZXR1cm4gdH0pLHQsITApfSx0b0RhdGFVUkw6ZnVuY3Rpb24odCl7cmV0dXJuIHAodyx0KX0sdG9EYXRhVVJMU3luYzpmdW5jdGlvbih0KXtyZXR1cm4gcCh3LHQsITApfSx0b0ltYWdlRGF0YTpmdW5jdGlvbih0KXtyZXR1cm4gcCh2LHQpfSx0b0ltYWdlRGF0YVN5bmM6ZnVuY3Rpb24odCl7cmV0dXJuIHAodix0LCEwKX0sdG9TVkc6ZnVuY3Rpb24odCl7cmV0dXJuIHAoRCx0KX0sdG9TVkdTeW5jOmZ1bmN0aW9uKHQpe3JldHVybiBwKEQsdCwhMCl9fTtmdW5jdGlvbiB1KCl7dmFyIHQ9Zih7fSxpKTtyZXR1cm4gbnx8Zih0LHMpLHR9ZnVuY3Rpb24gYygpe3ZhciB0PWYoe30saSk7cmV0dXJuIGV8fGYodCxsKSx0fWZ1bmN0aW9uIGQodCxlLHIpe3JldHVybiBhPSEhcixuPWZ1bmN0aW9uKCl7cmV0dXJuIGE/dChlKTpuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixhKXt0cnl7bih0KGUpKX1jYXRjaCh0KXthKHQpfX0pKX0sZygpP2goKTpjKCl9ZnVuY3Rpb24gcCh0LG4sYSl7cmV0dXJuIHI9ISFhLGU9ZnVuY3Rpb24oZSxhKXtyZXR1cm4gcj90KGUsYSxuKTpuZXcgUHJvbWlzZSgoZnVuY3Rpb24ocixvKXt0cnl7cih0KGUsYSxuKSl9Y2F0Y2godCl7byh0KX19KSl9LGcoKT9oKCk6dSgpfWZ1bmN0aW9uIGcoKXtyZXR1cm4gbiYmZX1mdW5jdGlvbiBoKCl7aWYoYSYmcil7dmFyIGk9bih0KSxzPUcoaSx0KTtyZXR1cm4gZShzLGkpfXJldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24oaSxzKXt2YXIgbCx1O25ldyBQcm9taXNlKChmdW5jdGlvbih0LGUpe2lmKGEpdHJ5e3Qobih1KSl9Y2F0Y2godCl7ZSh0KX1lbHNlIG4odSkudGhlbih0LGUpfSkpLnRoZW4oKGZ1bmN0aW9uKG4pe3JldHVybiBmdW5jdGlvbih0LG4pe3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24oZSxhKXtvLmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsKGZ1bmN0aW9uKHQpe2lmKHQuZGF0YSYmdC5kYXRhLnBvbHlnb25KU09OU3RyKXt2YXIgbj1KU09OLnBhcnNlKHQuZGF0YS5wb2x5Z29uSlNPTlN0cik7ZShuKX1lbHNlIHQuZGF0YSYmdC5kYXRhLmVycj9hKHQuZGF0YS5lcnIpOmEodCl9KSksby5wb3N0TWVzc2FnZSh7cGFyYW1zOm4saW1hZ2VEYXRhOnQsaW1hZ2VEYXRhV2lkdGg6dC53aWR0aCxpbWFnZURhdGFIZWlnaHQ6dC5oZWlnaHR9KX0pKX0obD1uLHQpfSkscykudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIGZ1bmN0aW9uKHQsbil7cmV0dXJuIG5ldyBQcm9taXNlKChmdW5jdGlvbihhLG8pe2lmKHIpdHJ5e2EoZSh0LG4pKX1jYXRjaCh0KXtvKHQpfWVsc2UgZSh0LG4pLnRoZW4oYSxvKX0pKX0odCxsKX0pLHMpLnRoZW4oKGZ1bmN0aW9uKHQpe2kodCl9KSxzKX0pKX1yZXR1cm4gdSgpfX0sdC5leHBvcnRzPWUoKX0pLmNhbGwodGhpcyxlKDEpKX0sZnVuY3Rpb24odCxuKXt2YXIgZTtlPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXN9KCk7dHJ5e2U9ZXx8bmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKX1jYXRjaCh0KXtcIm9iamVjdFwiPT10eXBlb2Ygd2luZG93JiYoZT13aW5kb3cpfXQuZXhwb3J0cz1lfSxmdW5jdGlvbih0LG4sZSl7XCJ1c2Ugc3RyaWN0XCI7ZS5yKG4pLGUuZChuLFwiZ2V0VHJpYW5ndWxhdGlvbkRhdGFcIiwoZnVuY3Rpb24oKXtyZXR1cm4gaX0pKSxlLmQobixcImludm9rZVBvbHlnb25zXCIsKGZ1bmN0aW9uKCl7cmV0dXJuIGx9KSk7dmFyIGE9ZSgwKSxyPWUubihhKTtjb25zdCBvPXQ9Pntjb25zdCBuPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIG4uaW5uZXJIVE1MPXQudHJpbSgpLG4uZmlyc3RFbGVtZW50Q2hpbGR9O3ZhciBpPSh7aW1hZ2U6dCxwYXJhbXM6bn0pPT5yKCkobikuZnJvbUltYWdlKHQpLnRvU1ZHKCkudGhlbihvKS50aGVuKHQ9Pih7aGVpZ2h0OnQuZ2V0QXR0cmlidXRlKFwiaGVpZ2h0XCIpLHdpZHRoOnQuZ2V0QXR0cmlidXRlKFwid2lkdGhcIikscG9seWdvbnM6dC5xdWVyeVNlbGVjdG9yQWxsKFwicG9seWdvblwiKX0pKS50aGVuKHQ9Pih7Li4udCxwb2x5Z29uczpBcnJheS5mcm9tKHQucG9seWdvbnMpLm1hcChuPT4oe3BvaW50czpuLmdldEF0dHJpYnV0ZShcInBvaW50c1wiKS5zcGxpdChcIiBcIikubWFwKHQ9PnQuc3BsaXQoXCIsXCIpKS5tYXAoKFtuLGVdKT0+YCR7bi90LndpZHRoKjEwMH0lICR7ZS90LmhlaWdodCoxMDB9JWApLmpvaW4oXCIsXCIpLGNvbG9yOm4uZ2V0QXR0cmlidXRlKFwiZmlsbFwiKX0pKX0pKTtjb25zdCBzPXtmYWRlOntwcmU6KHtkdXJhdGlvbjp0LGNvbG9yOm4scG9pbnRzOmV9KT0+YFxcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigke2V9KTtcXG4gICAgICBiYWNrZ3JvdW5kOiAke259O1xcbiAgICAgIGxlZnQ6IDA7XFxuICAgICAgcmlnaHQ6IDA7XFxuICAgICAgdG9wOiAwO1xcbiAgICAgIGJvdHRvbTogMDtcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5ICR7dH1zIGN1YmljLWJlemllciguNywuMywwLDEpO2AscG9zdDooKT0+XCJvcGFjaXR5OiAxO1wifSxmbHk6e3ByZTooe2R1cmF0aW9uOnQscG9pbnRzOm59KT0+YFxcbiAgICAgICAgY2xpcC1wYXRoOiBwb2x5Z29uKCR7bi5zcGxpdChcIixcIikubWFwKHQ9PnQuc3BsaXQoXCIgXCIpKS5tYXAoKFt0LG5dKT0+YCR7MSp0LnJlcGxhY2UoXCIlXCIsXCJcIikrMzAqTWF0aC5yYW5kb20oKX0lICR7bn1gKS5qb2luKFwiLFwiKX0pO1xcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgcmlnaHQ6IDA7XFxuICAgICAgICB0b3A6IDA7XFxuICAgICAgICBib3R0b206IDA7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICB0cmFuc2l0aW9uOiAtd2Via2l0LWNsaXAtcGF0aCAke3R9cyBjdWJpYy1iZXppZXIoLjcsIC4zLCAwLCAxKSwgY2xpcC1wYXRoICR7dH1zIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpLCBiYWNrZ3JvdW5kLWNvbG9yICR7dH1zIGN1YmljLWJlemllciguNywgLjMsIDAsIDEpO2AscG9zdDooe3BvaW50czp0LGNvbG9yOm59KT0+YFxcbiAgICAgIGNsaXAtcGF0aDogcG9seWdvbigke3R9KTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke259O2B9fTt2YXIgbD0oe2RhdGE6dCxhbmltYXRpb246bixjb250YWluZXI6ZX0pPT5Qcm9taXNlLmFsbCh0LnBvbHlnb25zLm1hcCgodCxhKT0+e2NvbnN0e3BvbHlnb246cixwcm9taXNlOm99PSgoe3BvaW50czp0LGNvbG9yOm4saWR4OmUsdHlwZTphPVwiZmFkZVwiLGR1cmF0aW9uOnI9LjV9KT0+e2NvbnN0IG89ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtvLmNsYXNzTGlzdC5hZGQoXCJwb2x5Z29uXCIpLG8uc3R5bGU9c1thXS5wcmUoe2R1cmF0aW9uOnIsY29sb3I6bixwb2ludHM6dH0pO2NvbnN0IGk9bmV3IFByb21pc2UoaT0+c2V0VGltZW91dCgoKT0+e28uc3R5bGU9by5nZXRBdHRyaWJ1dGUoXCJzdHlsZVwiKStzW2FdLnBvc3Qoe2R1cmF0aW9uOnIsY29sb3I6bixwb2ludHM6dH0pLGkobyl9LDEwMCplLzIwKSk7cmV0dXJue3BvbHlnb246byxwcm9taXNlOml9fSkoey4uLnQsaWR4OmEsZHVyYXRpb246bi5kdXJhdGlvbix0eXBlOm4udHlwZX0pO3JldHVybiBlLmFwcGVuZChyKSxvfSkpfV0pfSkpOyIsImltcG9ydCB7IGludm9rZVBvbHlnb25zIH0gZnJvbSBcInBvbHlnb25pemUtaW1hZ2VcIjtcbmltcG9ydCB7IGRhdGExLCBkYXRhMiwgZGF0YTMsIGRhdGE0IH0gZnJvbSBcIi4vdHJpYW5ndWxhdGlvbi1kYXRhXCI7XG5cbmNvbnN0IGFuaW1hdGVJbWFnZSA9IGFzeW5jICh7XG4gIGltYWdlU2VsZWN0b3IsXG4gIGNvbnRhaW5lclNlbGVjdG9yLFxuICBhbmltYXRpb24sXG4gIGRhdGExLFxuICBkYXRhMixcbn0pID0+IHtcbiAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGltYWdlU2VsZWN0b3IpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGNvbnRhaW5lclNlbGVjdG9yKTtcblxuICBhd2FpdCBpbnZva2VQb2x5Z29ucyh7XG4gICAgZGF0YTogZGF0YTEsXG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgdHlwZTogYW5pbWF0aW9uLFxuICAgIH0sXG4gICAgY29udGFpbmVyLFxuICB9KTtcblxuICBhd2FpdCBpbnZva2VQb2x5Z29ucyh7XG4gICAgZGF0YTogZGF0YTIsXG4gICAgYW5pbWF0aW9uOiB7XG4gICAgICBkdXJhdGlvbjogMC41LFxuICAgICAgdHlwZTogYW5pbWF0aW9uLFxuICAgIH0sXG4gICAgY29udGFpbmVyLFxuICB9KTtcblxuICBpbWFnZS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbn07XG5cbmNvbnN0IGluaXQgPSAoKSA9PiB7XG4gIGFuaW1hdGVJbWFnZSh7XG4gICAgaW1hZ2VTZWxlY3RvcjogXCIuaW1nXCIsXG4gICAgY29udGFpbmVyU2VsZWN0b3I6IFwiLmNvbnRhaW5lclwiLFxuICAgIGFuaW1hdGlvbjogXCJmbHlcIixcbiAgICBkYXRhMTogZGF0YTEsXG4gICAgZGF0YTI6IGRhdGEyLFxuICB9KTtcbiAgYW5pbWF0ZUltYWdlKHtcbiAgICBpbWFnZVNlbGVjdG9yOiBcIi5pbWctMlwiLFxuICAgIGNvbnRhaW5lclNlbGVjdG9yOiBcIi5jb250YWluZXItMlwiLFxuICAgIGFuaW1hdGlvbjogXCJmYWRlXCIsXG4gICAgZGF0YTE6IGRhdGEzLFxuICAgIGRhdGEyOiBkYXRhNCxcbiAgfSk7XG59O1xuXG5pbml0KCk7XG4iLCJleHBvcnQgY29uc3QgZGF0YTEgPSB7XG4gIGhlaWdodDogXCI0ODdcIixcbiAgd2lkdGg6IFwiNTEzXCIsXG4gIHBvbHlnb25zOiBbXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjExLjg5MDgzODIwNjYyNzY3OSUgNTYuNjczNTExMjkzNjM0NDklLDEwLjMzMTM4NDAxNTU5NDU0JSA4NS4wMTAyNjY5NDA0NTE3NiUsMTcuMzQ4OTI3ODc1MjQzNjY0JSA4My4xNjIyMTc2NTkxMzc1NyVcIixcbiAgICAgIGNvbG9yOiBcIiMyNjI4MmJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxOS4yOTgyNDU2MTQwMzUwODYlIDU0LjgyNTQ2MjAxMjMyMDMyJSwxNy4zNDg5Mjc4NzUyNDM2NjQlIDgzLjE2MjIxNzY1OTEzNzU3JSwyNi45MDA1ODQ3OTUzMjE2MzUlIDgxLjkzMDE4NDgwNDkyODEzJVwiLFxuICAgICAgY29sb3I6IFwiIzFiMjQyZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjEwLjMzMTM4NDAxNTU5NDU0JSA4NS4wMTAyNjY5NDA0NTE3NiUsMCUgOTkuNzk0NjYxMTkwOTY1MSUsMTcuMzQ4OTI3ODc1MjQzNjY0JSA4My4xNjIyMTc2NTkxMzc1NyVcIixcbiAgICAgIGNvbG9yOiBcIiMyMTIwMTdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyOS42Mjk2Mjk2Mjk2Mjk2MjYlIDI1LjI1NjY3MzUxMTI5MzYzOCUsMjguNDYwMDM4OTg2MzU0Nzc1JSA1My41OTM0MjkxNTgxMTA4OSUsMzguMDExNjk1OTA2NDMyNzUlIDMxLjAwNjE2MDE2NDI3MTA0NCVcIixcbiAgICAgIGNvbG9yOiBcIiMyOTJlMzNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyOC40NjAwMzg5ODYzNTQ3NzUlIDUzLjU5MzQyOTE1ODExMDg5JSwyNi45MDA1ODQ3OTUzMjE2MzUlIDgxLjkzMDE4NDgwNDkyODEzJSwzNy4yMzE5Njg4MTA5MTYxOCUgNTkuMzQyOTE1ODExMDg4MjklXCIsXG4gICAgICBjb2xvcjogXCIjMGYwZjBlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjYuOTAwNTg0Nzk1MzIxNjM1JSA4MS45MzAxODQ4MDQ5MjgxMyUsMTcuMzQ4OTI3ODc1MjQzNjY0JSA4My4xNjIyMTc2NTkxMzc1NyUsMzUuODY3NDQ2MzkzNzYyMTglIDg3LjY3OTY3MTQ1NzkwNTU0JVwiLFxuICAgICAgY29sb3I6IFwiIzIxMjYyY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjE3LjM0ODkyNzg3NTI0MzY2NCUgODMuMTYyMjE3NjU5MTM3NTclLDMzLjkxODEyODY1NDk3MDc2JSAxMTYuMDE2NDI3MTA0NzIyOCUsMzUuODY3NDQ2MzkzNzYyMTglIDg3LjY3OTY3MTQ1NzkwNTU0JVwiLFxuICAgICAgY29sb3I6IFwiIzE4MTkxYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjE3LjM0ODkyNzg3NTI0MzY2NCUgODMuMTYyMjE3NjU5MTM3NTclLDAlIDk5Ljc5NDY2MTE5MDk2NTElLDMzLjkxODEyODY1NDk3MDc2JSAxMTYuMDE2NDI3MTA0NzIyOCVcIixcbiAgICAgIGNvbG9yOiBcIiMzNDMwMjhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyMC42NjI3NjgwMzExODkwOCUgMjYuNDg4NzA2MzY1NTAzMDc3JSwyOC40NjAwMzg5ODYzNTQ3NzUlIDUzLjU5MzQyOTE1ODExMDg5JSwyOS42Mjk2Mjk2Mjk2Mjk2MjYlIDI1LjI1NjY3MzUxMTI5MzYzOCVcIixcbiAgICAgIGNvbG9yOiBcIiMzOTM5MzZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxOS4yOTgyNDU2MTQwMzUwODYlIDU0LjgyNTQ2MjAxMjMyMDMyJSwyNi45MDA1ODQ3OTUzMjE2MzUlIDgxLjkzMDE4NDgwNDkyODEzJSwyOC40NjAwMzg5ODYzNTQ3NzUlIDUzLjU5MzQyOTE1ODExMDg5JVwiLFxuICAgICAgY29sb3I6IFwiIzFiMjIyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjMwLjAxOTQ5MzE3NzM4NzkxJSAtMi44NzQ3NDMzMjY0ODg3MDYzJSwyOS42Mjk2Mjk2Mjk2Mjk2MjYlIDI1LjI1NjY3MzUxMTI5MzYzOCUsNDYuNTg4NjkzOTU3MTE1MDA1JSA1Ljk1NDgyNTQ2MjAxMjMyJVwiLFxuICAgICAgY29sb3I6IFwiIzMxMzkzZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM3LjIzMTk2ODgxMDkxNjE4JSA1OS4zNDI5MTU4MTEwODgyOSUsMjYuOTAwNTg0Nzk1MzIxNjM1JSA4MS45MzAxODQ4MDQ5MjgxMyUsNDUuMDI5MjM5NzY2MDgxODclIDYyLjYyODMzNjc1NTY0NjgyJVwiLFxuICAgICAgY29sb3I6IFwiIzNmMzEyNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM1Ljg2NzQ0NjM5Mzc2MjE4JSA4Ny42Nzk2NzE0NTc5MDU1NCUsMzMuOTE4MTI4NjU0OTcwNzYlIDExNi4wMTY0MjcxMDQ3MjI4JSw0My40Njk3ODU1NzUwNDg3MyUgOTAuOTY1MDkyNDAyNDY0MDclXCIsXG4gICAgICBjb2xvcjogXCIjMTEwZjEwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzUuODY3NDQ2MzkzNzYyMTglIDg3LjY3OTY3MTQ1NzkwNTU0JSw0My40Njk3ODU1NzUwNDg3MyUgOTAuOTY1MDkyNDAyNDY0MDclLDUwLjQ4NzMyOTQzNDY5Nzg1NSUgODEuNzI0ODQ1OTk1ODkzMjIlXCIsXG4gICAgICBjb2xvcjogXCIjNWExZTFlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDUuMDI5MjM5NzY2MDgxODclIDYyLjYyODMzNjc1NTY0NjgyJSwzNS44Njc0NDYzOTM3NjIxOCUgODcuNjc5NjcxNDU3OTA1NTQlLDUwLjQ4NzMyOTQzNDY5Nzg1NSUgODEuNzI0ODQ1OTk1ODkzMjIlXCIsXG4gICAgICBjb2xvcjogXCIjMjgxZTE4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjguNDYwMDM4OTg2MzU0Nzc1JSA1My41OTM0MjkxNTgxMTA4OSUsMzcuMjMxOTY4ODEwOTE2MTglIDU5LjM0MjkxNTgxMTA4ODI5JSw0Ni4xOTg4MzA0MDkzNTY3MjQlIDM0LjI5MTU4MTEwODgyOTU3JVwiLFxuICAgICAgY29sb3I6IFwiIzY2NTk0OVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM4LjAxMTY5NTkwNjQzMjc1JSAzMS4wMDYxNjAxNjQyNzEwNDQlLDI4LjQ2MDAzODk4NjM1NDc3NSUgNTMuNTkzNDI5MTU4MTEwODklLDQ2LjE5ODgzMDQwOTM1NjcyNCUgMzQuMjkxNTgxMTA4ODI5NTclXCIsXG4gICAgICBjb2xvcjogXCIjNTE0MjJmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjYuOTAwNTg0Nzk1MzIxNjM1JSA4MS45MzAxODQ4MDQ5MjgxMyUsMzUuODY3NDQ2MzkzNzYyMTglIDg3LjY3OTY3MTQ1NzkwNTU0JSw0NS4wMjkyMzk3NjYwODE4NyUgNjIuNjI4MzM2NzU1NjQ2ODIlXCIsXG4gICAgICBjb2xvcjogXCIjM2YzNTJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzcuMjMxOTY4ODEwOTE2MTglIDU5LjM0MjkxNTgxMTA4ODI5JSw0NS4wMjkyMzk3NjYwODE4NyUgNjIuNjI4MzM2NzU1NjQ2ODIlLDUyLjQzNjY0NzE3MzQ4OTI4NCUgNTMuMzg4MDkwMzQ5MDc1OTglXCIsXG4gICAgICBjb2xvcjogXCIjOTU5Mjg5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjkuNjI5NjI5NjI5NjI5NjI2JSAyNS4yNTY2NzM1MTEyOTM2MzglLDM4LjAxMTY5NTkwNjQzMjc1JSAzMS4wMDYxNjAxNjQyNzEwNDQlLDQ2LjU4ODY5Mzk1NzExNTAwNSUgNS45NTQ4MjU0NjIwMTIzMiVcIixcbiAgICAgIGNvbG9yOiBcIiMyMDI3MmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOC4wMTE2OTU5MDY0MzI3NSUgMzEuMDA2MTYwMTY0MjcxMDQ0JSw0Ni4xOTg4MzA0MDkzNTY3MjQlIDM0LjI5MTU4MTEwODgyOTU3JSw1My44MDExNjk1OTA2NDMyNyUgMjUuMDUxMzM0NzAyMjU4NzI1JVwiLFxuICAgICAgY29sb3I6IFwiI2JhYzBjNVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ2LjE5ODgzMDQwOTM1NjcyNCUgMzQuMjkxNTgxMTA4ODI5NTclLDM3LjIzMTk2ODgxMDkxNjE4JSA1OS4zNDI5MTU4MTEwODgyOSUsNTIuNDM2NjQ3MTczNDg5Mjg0JSA1My4zODgwOTAzNDkwNzU5OCVcIixcbiAgICAgIGNvbG9yOiBcIiM4NDgzN2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0Ni41ODg2OTM5NTcxMTUwMDUlIDUuOTU0ODI1NDYyMDEyMzIlLDM4LjAxMTY5NTkwNjQzMjc1JSAzMS4wMDYxNjAxNjQyNzEwNDQlLDUzLjgwMTE2OTU5MDY0MzI3JSAyNS4wNTEzMzQ3MDIyNTg3MjUlXCIsXG4gICAgICBjb2xvcjogXCIjNTU0ZDQxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDUuMDI5MjM5NzY2MDgxODclIDYyLjYyODMzNjc1NTY0NjgyJSw1MC40ODczMjk0MzQ2OTc4NTUlIDgxLjcyNDg0NTk5NTg5MzIyJSw2MC4wMzg5ODYzNTQ3NzU4MiUgNzUuOTc1MzU5MzQyOTE1ODIlXCIsXG4gICAgICBjb2xvcjogXCIjMzUyZTIzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDYuMTk4ODMwNDA5MzU2NzI0JSAzNC4yOTE1ODExMDg4Mjk1NyUsNTIuNDM2NjQ3MTczNDg5Mjg0JSA1My4zODgwOTAzNDkwNzU5OCUsNjEuNTk4NDQwNTQ1ODA4OTYlIDQ3LjYzODYwMzY5NjA5ODU2JVwiLFxuICAgICAgY29sb3I6IFwiI2EwYTM5NVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ2LjU4ODY5Mzk1NzExNTAwNSUgNS45NTQ4MjU0NjIwMTIzMiUsNTMuODAxMTY5NTkwNjQzMjclIDI1LjA1MTMzNDcwMjI1ODcyNSUsNjIuNzY4MDMxMTg5MDgzODE0JSAxOS4zMDE4NDgwNDkyODEzMTUlXCIsXG4gICAgICBjb2xvcjogXCIjOWQ5YTg5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDMuNDY5Nzg1NTc1MDQ4NzMlIDkwLjk2NTA5MjQwMjQ2NDA3JSwzMy45MTgxMjg2NTQ5NzA3NiUgMTE2LjAxNjQyNzEwNDcyMjglLDY3LjA1NjUzMDIxNDQyNDk1JSAxMTYuNDI3MTA0NzIyNzkyNiVcIixcbiAgICAgIGNvbG9yOiBcIiM2ZTJhMjFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1My44MDExNjk1OTA2NDMyNyUgMjUuMDUxMzM0NzAyMjU4NzI1JSw0Ni4xOTg4MzA0MDkzNTY3MjQlIDM0LjI5MTU4MTEwODgyOTU3JSw2MS41OTg0NDA1NDU4MDg5NiUgNDcuNjM4NjAzNjk2MDk4NTYlXCIsXG4gICAgICBjb2xvcjogXCIjNDMzOTMxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTIuNDM2NjQ3MTczNDg5Mjg0JSA1My4zODgwOTAzNDkwNzU5OCUsNDUuMDI5MjM5NzY2MDgxODclIDYyLjYyODMzNjc1NTY0NjgyJSw2MC4wMzg5ODYzNTQ3NzU4MiUgNzUuOTc1MzU5MzQyOTE1ODIlXCIsXG4gICAgICBjb2xvcjogXCIjN2I3Zjc3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjAuMDM4OTg2MzU0Nzc1ODIlIDc1Ljk3NTM1OTM0MjkxNTgyJSw1MC40ODczMjk0MzQ2OTc4NTUlIDgxLjcyNDg0NTk5NTg5MzIyJSw2OS4wMDU4NDc5NTMyMTYzNyUgODguMDkwMzQ5MDc1OTc1MzUlXCIsXG4gICAgICBjb2xvcjogXCIjNWIxZTE0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTIuNDM2NjQ3MTczNDg5Mjg0JSA1My4zODgwOTAzNDkwNzU5OCUsNjAuMDM4OTg2MzU0Nzc1ODIlIDc1Ljk3NTM1OTM0MjkxNTgyJSw3MC4zNzAzNzAzNzAzNzAzNyUgNTkuNzUzNTkzNDI5MTU4MTE2JVwiLFxuICAgICAgY29sb3I6IFwiIzI4MjcyNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYxLjU5ODQ0MDU0NTgwODk2JSA0Ny42Mzg2MDM2OTYwOTg1NiUsNTIuNDM2NjQ3MTczNDg5Mjg0JSA1My4zODgwOTAzNDkwNzU5OCUsNzAuMzcwMzcwMzcwMzcwMzclIDU5Ljc1MzU5MzQyOTE1ODExNiVcIixcbiAgICAgIGNvbG9yOiBcIiM1ODY1NWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1MC40ODczMjk0MzQ2OTc4NTUlIDgxLjcyNDg0NTk5NTg5MzIyJSw0My40Njk3ODU1NzUwNDg3MyUgOTAuOTY1MDkyNDAyNDY0MDclLDY5LjAwNTg0Nzk1MzIxNjM3JSA4OC4wOTAzNDkwNzU5NzUzNSVcIixcbiAgICAgIGNvbG9yOiBcIiM0YzFiMWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1My44MDExNjk1OTA2NDMyNyUgMjUuMDUxMzM0NzAyMjU4NzI1JSw2MS41OTg0NDA1NDU4MDg5NiUgNDcuNjM4NjAzNjk2MDk4NTYlLDcxLjE1MDA5NzQ2NTg4Njk0JSAzMS40MTY4Mzc3ODIzNDA4NjMlXCIsXG4gICAgICBjb2xvcjogXCIjNmI2MzYwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjIuNzY4MDMxMTg5MDgzODE0JSAxOS4zMDE4NDgwNDkyODEzMTUlLDUzLjgwMTE2OTU5MDY0MzI3JSAyNS4wNTEzMzQ3MDIyNTg3MjUlLDcxLjE1MDA5NzQ2NTg4Njk0JSAzMS40MTY4Mzc3ODIzNDA4NjMlXCIsXG4gICAgICBjb2xvcjogXCIjMzMzMjMzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDMuNDY5Nzg1NTc1MDQ4NzMlIDkwLjk2NTA5MjQwMjQ2NDA3JSw2Ny4wNTY1MzAyMTQ0MjQ5NSUgMTE2LjQyNzEwNDcyMjc5MjYlLDY5LjAwNTg0Nzk1MzIxNjM3JSA4OC4wOTAzNDkwNzU5NzUzNSVcIixcbiAgICAgIGNvbG9yOiBcIiMzZjE2MGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2OS4wMDU4NDc5NTMyMTYzNyUgODguMDkwMzQ5MDc1OTc1MzUlLDY3LjA1NjUzMDIxNDQyNDk1JSAxMTYuNDI3MTA0NzIyNzkyNiUsNzYuNjA4MTg3MTM0NTAyOTMlIDk2LjMwMzkwMTQzNzM3MTY2JVwiLFxuICAgICAgY29sb3I6IFwiIzBkMTMxOVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjcwLjM3MDM3MDM3MDM3MDM3JSA1OS43NTM1OTM0MjkxNTgxMTYlLDYwLjAzODk4NjM1NDc3NTgyJSA3NS45NzUzNTkzNDI5MTU4MiUsNzguMTY3NjQxMzI1NTM2MDclIDY3Ljk2NzE0NTc5MDU1NDQxJVwiLFxuICAgICAgY29sb3I6IFwiIzE0MTMxNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjcxLjE1MDA5NzQ2NTg4Njk0JSAzMS40MTY4Mzc3ODIzNDA4NjMlLDYxLjU5ODQ0MDU0NTgwODk2JSA0Ny42Mzg2MDM2OTYwOTg1NiUsNzkuMzM3MjMxOTY4ODEwOTElIDM5LjYzMDM5MDE0MzczNzE2NiVcIixcbiAgICAgIGNvbG9yOiBcIiM3Yzc1NmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2MS41OTg0NDA1NDU4MDg5NiUgNDcuNjM4NjAzNjk2MDk4NTYlLDcwLjM3MDM3MDM3MDM3MDM3JSA1OS43NTM1OTM0MjkxNTgxMTYlLDc5LjMzNzIzMTk2ODgxMDkxJSAzOS42MzAzOTAxNDM3MzcxNjYlXCIsXG4gICAgICBjb2xvcjogXCIjNWU1ZTVhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjAuMDM4OTg2MzU0Nzc1ODIlIDc1Ljk3NTM1OTM0MjkxNTgyJSw2OS4wMDU4NDc5NTMyMTYzNyUgODguMDkwMzQ5MDc1OTc1MzUlLDc4LjE2NzY0MTMyNTUzNjA3JSA2Ny45NjcxNDU3OTA1NTQ0MSVcIixcbiAgICAgIGNvbG9yOiBcIiMxZDFmMTlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2OS4wMDU4NDc5NTMyMTYzNyUgODguMDkwMzQ5MDc1OTc1MzUlLDc2LjYwODE4NzEzNDUwMjkzJSA5Ni4zMDM5MDE0MzczNzE2NiUsODMuNjI1NzMwOTk0MTUyMDUlIDgyLjM0MDg2MjQyMjk5Nzk2JVwiLFxuICAgICAgY29sb3I6IFwiIzE2MTcxNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc4LjE2NzY0MTMyNTUzNjA3JSA2Ny45NjcxNDU3OTA1NTQ0MSUsNjkuMDA1ODQ3OTUzMjE2MzclIDg4LjA5MDM0OTA3NTk3NTM1JSw4My42MjU3MzA5OTQxNTIwNSUgODIuMzQwODYyNDIyOTk3OTYlXCIsXG4gICAgICBjb2xvcjogXCIjMzUzOTMwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzAuMzcwMzcwMzcwMzcwMzclIDU5Ljc1MzU5MzQyOTE1ODExNiUsNzguMTY3NjQxMzI1NTM2MDclIDY3Ljk2NzE0NTc5MDU1NDQxJSw4NS41NzUwNDg3MzI5NDM0NyUgNTQuMDA0MTA2Nzc2MTgwNjklXCIsXG4gICAgICBjb2xvcjogXCIjODU4Nzc3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzEuMTUwMDk3NDY1ODg2OTQlIDMxLjQxNjgzNzc4MjM0MDg2MyUsNzkuMzM3MjMxOTY4ODEwOTElIDM5LjYzMDM5MDE0MzczNzE2NiUsODYuOTM5NTcxMTUwMDk3NDYlIDI1LjY2NzM1MTEyOTM2MzQ0NiVcIixcbiAgICAgIGNvbG9yOiBcIiM2MTYyNWJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3OC4xNjc2NDEzMjU1MzYwNyUgNjcuOTY3MTQ1NzkwNTU0NDElLDgzLjYyNTczMDk5NDE1MjA1JSA4Mi4zNDA4NjI0MjI5OTc5NiUsOTMuMTc3Mzg3OTE0MjMwMDElIDcxLjQ1NzkwNTU0NDE0Nzg1JVwiLFxuICAgICAgY29sb3I6IFwiIzI5MmUzM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc2LjYwODE4NzEzNDUwMjkzJSA5Ni4zMDM5MDE0MzczNzE2NiUsNjcuMDU2NTMwMjE0NDI0OTUlIDExNi40MjcxMDQ3MjI3OTI2JSwxMDAuMTk0OTMxNzczODc5MTUlIDExNC41NzkwNTU0NDE0Nzg0NSVcIixcbiAgICAgIGNvbG9yOiBcIiM0YTQ3NDJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI5OS44MDUwNjgyMjYxMjA4NSUgOTkuNzk0NjYxMTkwOTY1MSUsNzYuNjA4MTg3MTM0NTAyOTMlIDk2LjMwMzkwMTQzNzM3MTY2JSwxMDAuMTk0OTMxNzczODc5MTUlIDExNC41NzkwNTU0NDE0Nzg0NSVcIixcbiAgICAgIGNvbG9yOiBcIiMyYjJkMmNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4My42MjU3MzA5OTQxNTIwNSUgODIuMzQwODYyNDIyOTk3OTYlLDc2LjYwODE4NzEzNDUwMjkzJSA5Ni4zMDM5MDE0MzczNzE2NiUsOTkuODA1MDY4MjI2MTIwODUlIDk5Ljc5NDY2MTE5MDk2NTElXCIsXG4gICAgICBjb2xvcjogXCIjMzMyOTIyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiOTMuMTc3Mzg3OTE0MjMwMDElIDcxLjQ1NzkwNTU0NDE0Nzg1JSw4My42MjU3MzA5OTQxNTIwNSUgODIuMzQwODYyNDIyOTk3OTYlLDEwMi4xNDQyNDk1MTI2NzA1NiUgODYuMjQyMjk5Nzk0NjYxMTklXCIsXG4gICAgICBjb2xvcjogXCIjMTcxYzFkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiODMuNjI1NzMwOTk0MTUyMDUlIDgyLjM0MDg2MjQyMjk5Nzk2JSw5OS44MDUwNjgyMjYxMjA4NSUgOTkuNzk0NjYxMTkwOTY1MSUsMTAyLjE0NDI0OTUxMjY3MDU2JSA4Ni4yNDIyOTk3OTQ2NjExOSVcIixcbiAgICAgIGNvbG9yOiBcIiMzYzNkMzNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI5OS44MDUwNjgyMjYxMjA4NSUgOTkuNzk0NjYxMTkwOTY1MSUsMTAwLjE5NDkzMTc3Mzg3OTE1JSAxMTQuNTc5MDU1NDQxNDc4NDUlLDEwOS43NDY1ODg2OTM5NTcxMiUgMTAwLjIwNTMzODgwOTAzNDklXCIsXG4gICAgICBjb2xvcjogXCIjMzYzMTI5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTAyLjE0NDI0OTUxMjY3MDU2JSA4Ni4yNDIyOTk3OTQ2NjExOSUsOTkuODA1MDY4MjI2MTIwODUlIDk5Ljc5NDY2MTE5MDk2NTElLDEwOS43NDY1ODg2OTM5NTcxMiUgMTAwLjIwNTMzODgwOTAzNDklXCIsXG4gICAgICBjb2xvcjogXCIjMmEyNjFlXCIsXG4gICAgfSxcbiAgXSxcbn07XG5cbmV4cG9ydCBjb25zdCBkYXRhMiA9IHtcbiAgaGVpZ2h0OiBcIjQ4N1wiLFxuICB3aWR0aDogXCI1MTNcIixcbiAgcG9seWdvbnM6IFtcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMCUgOTkuNzk0NjYxMTkwOTY1MSUsLTI4Ljg0OTkwMjUzNDExMzA2JSA2Ni41Mjk3NzQxMjczMTAwNiUsNi40MzI3NDg1MzgwMTE2OTYlIDEzNy41NzcwMDIwNTMzODgxJVwiLFxuICAgICAgY29sb3I6IFwiIzIyMjIyM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjE3LjkzMzcyMzE5Njg4MTA5JSA2NC44ODcwNjM2NTUwMzA4JSwxMi44NjU0OTcwNzYwMjMzOTIlIDc1LjE1NDAwNDEwNjc3NjE4JSwzMS4zODQwMTU1OTQ1NDE5MDclIDcxLjA0NzIyNzkyNjA3ODAyJVwiLFxuICAgICAgY29sb3I6IFwiIzI2MmQzM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjIxLjQ0MjQ5NTEyNjcwNTY1JSAyMS43NjU5MTM3NTc3MDAyMDQlLDI0LjE3MTUzOTk2MTAxMzY0MyUgMjMuODE5MzAxODQ4MDQ5MjglLDMxLjk2ODgxMDkxNjE3OTMzNiUgMTYuODM3NzgyMzQwODYyNDIlXCIsXG4gICAgICBjb2xvcjogXCIjMzMzOTM3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzEuOTY4ODEwOTE2MTc5MzM2JSAxNi44Mzc3ODIzNDA4NjI0MiUsMjQuMTcxNTM5OTYxMDEzNjQzJSAyMy44MTkzMDE4NDgwNDkyOCUsMzMuMTM4NDAxNTU5NDU0MTklIDIwLjUzMzg4MDkwMzQ5MDc1OCVcIixcbiAgICAgIGNvbG9yOiBcIiM5ZjljOThcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzMS4zODQwMTU1OTQ1NDE5MDclIDcxLjA0NzIyNzkyNjA3ODAyJSwxMi44NjU0OTcwNzYwMjMzOTIlIDc1LjE1NDAwNDEwNjc3NjE4JSwzNS44Njc0NDYzOTM3NjIxOCUgNzkuNjcxNDU3OTA1NTQ0MTQlXCIsXG4gICAgICBjb2xvcjogXCIjMTExMTEyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzIuNzQ4NTM4MDExNjk1OTA2JSAwJSwzMS41Nzg5NDczNjg0MjEwNSUgMCUsMzcuMDM3MDM3MDM3MDM3MDQlIDQuNTE3NDUzNzk4NzY3OTY3JVwiLFxuICAgICAgY29sb3I6IFwiIzM2M2U0NVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM3LjQyNjkwMDU4NDc5NTMyJSA1MC41MTMzNDcwMjI1ODcyNzYlLDI1LjM0MTEzMDYwNDI4ODQ5OCUgNDcuMjI3OTI2MDc4MDI4NzQ0JSwzNy44MTY3NjQxMzI1NTM2JSA1MS4zMzQ3MDIyNTg3MjY4OSVcIixcbiAgICAgIGNvbG9yOiBcIiMyNzI2MjVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0LjY3ODM2MjU3MzA5OTQxNSUgODMuNzc4MjM0MDg2MjQyMjklLDIuNzI5MDQ0ODM0MzA3OTkyJSA4OS41Mjc3MjA3MzkyMTk3JSwzNy44MTY3NjQxMzI1NTM2JSA5Mi44MTMxNDE2ODM3NzgyMyVcIixcbiAgICAgIGNvbG9yOiBcIiMxMzEzMTRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxMi44NjU0OTcwNzYwMjMzOTIlIDc1LjE1NDAwNDEwNjc3NjE4JSw0LjY3ODM2MjU3MzA5OTQxNSUgODMuNzc4MjM0MDg2MjQyMjklLDM3LjgxNjc2NDEzMjU1MzYlIDkyLjgxMzE0MTY4Mzc3ODIzJVwiLFxuICAgICAgY29sb3I6IFwiIzE2MTgxYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM1Ljg2NzQ0NjM5Mzc2MjE4JSA3OS42NzE0NTc5MDU1NDQxNCUsMTIuODY1NDk3MDc2MDIzMzkyJSA3NS4xNTQwMDQxMDY3NzYxOCUsMzcuODE2NzY0MTMyNTUzNiUgOTIuODEzMTQxNjgzNzc4MjMlXCIsXG4gICAgICBjb2xvcjogXCIjMGIwYjBlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjQuMTcxNTM5OTYxMDEzNjQzJSA0NC43NjM4NjAzNjk2MDk4NSUsMjUuMzQxMTMwNjA0Mjg4NDk4JSA0Ny4yMjc5MjYwNzgwMjg3NDQlLDM4LjU5NjQ5MTIyODA3MDE3JSA0MS44ODkxMTcwNDMxMjExNDYlXCIsXG4gICAgICBjb2xvcjogXCIjNTY0YjQ3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzMuMTM4NDAxNTU5NDU0MTklIDIwLjUzMzg4MDkwMzQ5MDc1OCUsMjQuMTcxNTM5OTYxMDEzNjQzJSAyMy44MTkzMDE4NDgwNDkyOCUsMzguOTg2MzU0Nzc1ODI4NDYlIDMxLjYyMjE3NjU5MTM3NTc3MyVcIixcbiAgICAgIGNvbG9yOiBcIiMyZjM1M2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyLjcyOTA0NDgzNDMwNzk5MiUgODkuNTI3NzIwNzM5MjE5NyUsMCUgOTkuNzk0NjYxMTkwOTY1MSUsMzcuODE2NzY0MTMyNTUzNiUgOTIuODEzMTQxNjgzNzc4MjMlXCIsXG4gICAgICBjb2xvcjogXCIjMzczMzJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzEuOTY4ODEwOTE2MTc5MzM2JSAxNi44Mzc3ODIzNDA4NjI0MiUsMzMuMTM4NDAxNTU5NDU0MTklIDIwLjUzMzg4MDkwMzQ5MDc1OCUsMzkuMzc2MjE4MzIzNTg2NzQlIDE3LjY1OTEzNzU3NzAwMjA1MyVcIixcbiAgICAgIGNvbG9yOiBcIiM3MjczNmNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzMy4xMzg0MDE1NTk0NTQxOSUgMjAuNTMzODgwOTAzNDkwNzU4JSwzOC45ODYzNTQ3NzU4Mjg0NiUgMzEuNjIyMTc2NTkxMzc1NzczJSwzOS4zNzYyMTgzMjM1ODY3NCUgMjcuNTE1NDAwNDEwNjc3NjIlXCIsXG4gICAgICBjb2xvcjogXCIjNDUzYzMzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjAuMjcyOTA0NDgzNDMwOCUgMjkuOTc5NDY2MTE5MDk2NTElLDI0LjE3MTUzOTk2MTAxMzY0MyUgNDQuNzYzODYwMzY5NjA5ODUlLDM4Ljk4NjM1NDc3NTgyODQ2JSAzMS42MjIxNzY1OTEzNzU3NzMlXCIsXG4gICAgICBjb2xvcjogXCIjMjAyODJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjUuMzQxMTMwNjA0Mjg4NDk4JSA0Ny4yMjc5MjYwNzgwMjg3NDQlLDM3LjQyNjkwMDU4NDc5NTMyJSA1MC41MTMzNDcwMjI1ODcyNzYlLDM4LjU5NjQ5MTIyODA3MDE3JSA0MS44ODkxMTcwNDMxMjExNDYlXCIsXG4gICAgICBjb2xvcjogXCIjNWM1ZjVlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjQuMTcxNTM5OTYxMDEzNjQzJSA0NC43NjM4NjAzNjk2MDk4NSUsMzguNTk2NDkxMjI4MDcwMTclIDQxLjg4OTExNzA0MzEyMTE0NiUsMzkuNzY2MDgxODcxMzQ1MDMlIDM1LjcyODk1Mjc3MjA3MzkyNCVcIixcbiAgICAgIGNvbG9yOiBcIiM0ZTRiNDZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOC45ODYzNTQ3NzU4Mjg0NiUgMzEuNjIyMTc2NTkxMzc1NzczJSwyNC4xNzE1Mzk5NjEwMTM2NDMlIDQ0Ljc2Mzg2MDM2OTYwOTg1JSwzOS43NjYwODE4NzEzNDUwMyUgMzUuNzI4OTUyNzcyMDczOTI0JVwiLFxuICAgICAgY29sb3I6IFwiIzNhMzIyZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM3LjQyNjkwMDU4NDc5NTMyJSA1MC41MTMzNDcwMjI1ODcyNzYlLDM3LjgxNjc2NDEzMjU1MzYlIDUxLjMzNDcwMjI1ODcyNjg5JSwzOS43NjYwODE4NzEzNDUwMyUgNDkuNjkxOTkxNzg2NDQ3NjQlXCIsXG4gICAgICBjb2xvcjogXCIjNzU3NzczXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzkuMzc2MjE4MzIzNTg2NzQlIDQ4Ljg3MDYzNjU1MDMwODAxNCUsMzcuNDI2OTAwNTg0Nzk1MzIlIDUwLjUxMzM0NzAyMjU4NzI3NiUsMzkuNzY2MDgxODcxMzQ1MDMlIDQ5LjY5MTk5MTc4NjQ0NzY0JVwiLFxuICAgICAgY29sb3I6IFwiIzdmN2Y3ZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM2LjI1NzMwOTk0MTUyMDQ3JSAxMS4wODgyOTU2ODc4ODUwMTIlLDMxLjk2ODgxMDkxNjE3OTMzNiUgMTYuODM3NzgyMzQwODYyNDIlLDM5LjM3NjIxODMyMzU4Njc0JSAxNy42NTkxMzc1NzcwMDIwNTMlXCIsXG4gICAgICBjb2xvcjogXCIjMzE0MDQ3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzguNTk2NDkxMjI4MDcwMTclIDQxLjg4OTExNzA0MzEyMTE0NiUsMzcuNDI2OTAwNTg0Nzk1MzIlIDUwLjUxMzM0NzAyMjU4NzI3NiUsMzkuMzc2MjE4MzIzNTg2NzQlIDQ4Ljg3MDYzNjU1MDMwODAxNCVcIixcbiAgICAgIGNvbG9yOiBcIiM5MTk0OGJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyNS4zNDExMzA2MDQyODg0OTglIDQ3LjIyNzkyNjA3ODAyODc0NCUsMzEuMzg0MDE1NTk0NTQxOTA3JSA3MS4wNDcyMjc5MjYwNzgwMiUsMzcuODE2NzY0MTMyNTUzNiUgNTEuMzM0NzAyMjU4NzI2ODklXCIsXG4gICAgICBjb2xvcjogXCIjMTIxMzE4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjUuMzQxMTMwNjA0Mjg4NDk4JSA0Ny4yMjc5MjYwNzgwMjg3NDQlLDE3LjkzMzcyMzE5Njg4MTA5JSA2NC44ODcwNjM2NTUwMzA4JSwzMS4zODQwMTU1OTQ1NDE5MDclIDcxLjA0NzIyNzkyNjA3ODAyJVwiLFxuICAgICAgY29sb3I6IFwiIzA5MGUxM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM4LjU5NjQ5MTIyODA3MDE3JSA0MS44ODkxMTcwNDMxMjExNDYlLDM5LjM3NjIxODMyMzU4Njc0JSA0OC44NzA2MzY1NTAzMDgwMTQlLDQwLjkzNTY3MjUxNDYxOTg4JSA0OC4wNDkyODEzMTQxNjgzOCVcIixcbiAgICAgIGNvbG9yOiBcIiM5NDk2OTVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOS4zNzYyMTgzMjM1ODY3NCUgNDguODcwNjM2NTUwMzA4MDE0JSwzOS43NjYwODE4NzEzNDUwMyUgNDkuNjkxOTkxNzg2NDQ3NjQlLDQwLjkzNTY3MjUxNDYxOTg4JSA0OC4wNDkyODEzMTQxNjgzOCVcIixcbiAgICAgIGNvbG9yOiBcIiM5NDk0OTRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzMy4xMzg0MDE1NTk0NTQxOSUgMjAuNTMzODgwOTAzNDkwNzU4JSwzOS4zNzYyMTgzMjM1ODY3NCUgMjcuNTE1NDAwNDEwNjc3NjIlLDM5LjM3NjIxODMyMzU4Njc0JSAxNy42NTkxMzc1NzcwMDIwNTMlXCIsXG4gICAgICBjb2xvcjogXCIjMzIzMjMzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzcuODE2NzY0MTMyNTUzNiUgNTEuMzM0NzAyMjU4NzI2ODklLDMxLjM4NDAxNTU5NDU0MTkwNyUgNzEuMDQ3MjI3OTI2MDc4MDIlLDQ0LjA1NDU4MDg5NjY4NjE1NCUgNjMuNjU1MDMwODAwODIxMzYlXCIsXG4gICAgICBjb2xvcjogXCIjNDU0MDNkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzkuMzc2MjE4MzIzNTg2NzQlIDI3LjUxNTQwMDQxMDY3NzYyJSwzOC45ODYzNTQ3NzU4Mjg0NiUgMzEuNjIyMTc2NTkxMzc1NzczJSw0Ny45NTMyMTYzNzQyNjkwMDUlIDMwLjM5MDE0MzczNzE2NjMyNiVcIixcbiAgICAgIGNvbG9yOiBcIiM5YTljOTdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOC45ODYzNTQ3NzU4Mjg0NiUgMzEuNjIyMTc2NTkxMzc1NzczJSwzOS43NjYwODE4NzEzNDUwMyUgMzUuNzI4OTUyNzcyMDczOTI0JSw0OC4zNDMwNzk5MjIwMjcyODYlIDMyLjg1NDIwOTQ0NTU4NTIxJVwiLFxuICAgICAgY29sb3I6IFwiIzg1ODY4YlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ3Ljk1MzIxNjM3NDI2OTAwNSUgMzAuMzkwMTQzNzM3MTY2MzI2JSwzOC45ODYzNTQ3NzU4Mjg0NiUgMzEuNjIyMTc2NTkxMzc1NzczJSw0OC4zNDMwNzk5MjIwMjcyODYlIDMyLjg1NDIwOTQ0NTU4NTIxJVwiLFxuICAgICAgY29sb3I6IFwiI2M4Y2FjYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjMxLjM4NDAxNTU5NDU0MTkwNyUgNzEuMDQ3MjI3OTI2MDc4MDIlLDM1Ljg2NzQ0NjM5Mzc2MjE4JSA3OS42NzE0NTc5MDU1NDQxNCUsNDQuMDU0NTgwODk2Njg2MTU0JSA2My42NTUwMzA4MDA4MjEzNiVcIixcbiAgICAgIGNvbG9yOiBcIiMzYzI5MWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIwJSA5OS43OTQ2NjExOTA5NjUxJSw2LjQzMjc0ODUzODAxMTY5NiUgMTM3LjU3NzAwMjA1MzM4ODElLDM3LjgxNjc2NDEzMjU1MzYlIDkyLjgxMzE0MTY4Mzc3ODIzJVwiLFxuICAgICAgY29sb3I6IFwiIzFlMWYxOVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQwLjkzNTY3MjUxNDYxOTg4JSA0OC4wNDkyODEzMTQxNjgzOCUsMzkuNzY2MDgxODcxMzQ1MDMlIDQ5LjY5MTk5MTc4NjQ0NzY0JSw0OC43MzI5NDM0Njk3ODU1NzUlIDUyLjE1NjA1NzQ5NDg2NjUyJVwiLFxuICAgICAgY29sb3I6IFwiIzU0NGEzY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ3LjE3MzQ4OTI3ODc1MjQzNCUgODAuNDkyODEzMTQxNjgzNzglLDM3LjgxNjc2NDEzMjU1MzYlIDkyLjgxMzE0MTY4Mzc3ODIzJSw0OC4zNDMwNzk5MjIwMjcyODYlIDgyLjU0NjIwMTIzMjAzMjg2JVwiLFxuICAgICAgY29sb3I6IFwiIzc1NDcyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM1Ljg2NzQ0NjM5Mzc2MjE4JSA3OS42NzE0NTc5MDU1NDQxNCUsMzcuODE2NzY0MTMyNTUzNiUgOTIuODEzMTQxNjgzNzc4MjMlLDQ3LjE3MzQ4OTI3ODc1MjQzNCUgODAuNDkyODEzMTQxNjgzNzglXCIsXG4gICAgICBjb2xvcjogXCIjNGMxYjE2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzcuMDM3MDM3MDM3MDM3MDQlIDQuNTE3NDUzNzk4NzY3OTY3JSwzNi4yNTczMDk5NDE1MjA0NyUgMTEuMDg4Mjk1Njg3ODg1MDEyJSw0OS41MTI2NzA1NjUzMDIxNDUlIDcuMzkyMTk3MTI1MjU2Njc0JVwiLFxuICAgICAgY29sb3I6IFwiIzMxM2Y0N1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM4LjU5NjQ5MTIyODA3MDE3JSA0MS44ODkxMTcwNDMxMjExNDYlLDQwLjkzNTY3MjUxNDYxOTg4JSA0OC4wNDkyODEzMTQxNjgzOCUsNDkuNTEyNjcwNTY1MzAyMTQ1JSA0My45NDI1MDUxMzM0NzAyMyVcIixcbiAgICAgIGNvbG9yOiBcIiNhZGI3YjVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOS43NjYwODE4NzEzNDUwMyUgNDkuNjkxOTkxNzg2NDQ3NjQlLDM3LjgxNjc2NDEzMjU1MzYlIDUxLjMzNDcwMjI1ODcyNjg5JSw0OC43MzI5NDM0Njk3ODU1NzUlIDUyLjE1NjA1NzQ5NDg2NjUyJVwiLFxuICAgICAgY29sb3I6IFwiIzZjNjk1ZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM2LjI1NzMwOTk0MTUyMDQ3JSAxMS4wODgyOTU2ODc4ODUwMTIlLDM5LjM3NjIxODMyMzU4Njc0JSAxNy42NTkxMzc1NzcwMDIwNTMlLDQ5LjkwMjUzNDExMzA2MDQyNiUgMTMuMTQxNjgzNzc4MjM0MDg3JVwiLFxuICAgICAgY29sb3I6IFwiIzJkMzczZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ5LjUxMjY3MDU2NTMwMjE0NSUgNy4zOTIxOTcxMjUyNTY2NzQlLDM2LjI1NzMwOTk0MTUyMDQ3JSAxMS4wODgyOTU2ODc4ODUwMTIlLDQ5LjkwMjUzNDExMzA2MDQyNiUgMTMuMTQxNjgzNzc4MjM0MDg3JVwiLFxuICAgICAgY29sb3I6IFwiIzIwMmMzNVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ5LjUxMjY3MDU2NTMwMjE0NSUgNTkuNTQ4MjU0NjIwMTIzMjElLDQ0LjA1NDU4MDg5NjY4NjE1NCUgNjMuNjU1MDMwODAwODIxMzYlLDQ5LjkwMjUzNDExMzA2MDQyNiUgNjAuMzY5NjA5ODU2MjYyODMlXCIsXG4gICAgICBjb2xvcjogXCIjNTg1MzRkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDguNzMyOTQzNDY5Nzg1NTc1JSA1Mi4xNTYwNTc0OTQ4NjY1MiUsNDQuMDU0NTgwODk2Njg2MTU0JSA2My42NTUwMzA4MDA4MjEzNiUsNDkuNTEyNjcwNTY1MzAyMTQ1JSA1OS41NDgyNTQ2MjAxMjMyMSVcIixcbiAgICAgIGNvbG9yOiBcIiM3MDcyNjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzNy44MTY3NjQxMzI1NTM2JSA1MS4zMzQ3MDIyNTg3MjY4OSUsNDQuMDU0NTgwODk2Njg2MTU0JSA2My42NTUwMzA4MDA4MjEzNiUsNDguNzMyOTQzNDY5Nzg1NTc1JSA1Mi4xNTYwNTc0OTQ4NjY1MiVcIixcbiAgICAgIGNvbG9yOiBcIiM3ZDc4NzRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0OS45MDI1MzQxMTMwNjA0MjYlIDEzLjE0MTY4Mzc3ODIzNDA4NyUsMzkuMzc2MjE4MzIzNTg2NzQlIDE3LjY1OTEzNzU3NzAwMjA1MyUsNTAuMjkyMzk3NjYwODE4NzElIDE1LjYwNTc0OTQ4NjY1Mjk3OSVcIixcbiAgICAgIGNvbG9yOiBcIiM1ZDYxNjRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOS43NjYwODE4NzEzNDUwMyUgMzUuNzI4OTUyNzcyMDczOTI0JSwzOC41OTY0OTEyMjgwNzAxNyUgNDEuODg5MTE3MDQzMTIxMTQ2JSw1MC42ODIyNjEyMDg1NzY5OTYlIDQxLjA2Nzc2MTgwNjk4MTUxNSVcIixcbiAgICAgIGNvbG9yOiBcIiM3MDVhNDdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOC41OTY0OTEyMjgwNzAxNyUgNDEuODg5MTE3MDQzMTIxMTQ2JSw0OS41MTI2NzA1NjUzMDIxNDUlIDQzLjk0MjUwNTEzMzQ3MDIzJSw1MC42ODIyNjEyMDg1NzY5OTYlIDQxLjA2Nzc2MTgwNjk4MTUxNSVcIixcbiAgICAgIGNvbG9yOiBcIiM3ZTczNmRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0OC4zNDMwNzk5MjIwMjcyODYlIDMyLjg1NDIwOTQ0NTU4NTIxJSwzOS43NjYwODE4NzEzNDUwMyUgMzUuNzI4OTUyNzcyMDczOTI0JSw1MC42ODIyNjEyMDg1NzY5OTYlIDQxLjA2Nzc2MTgwNjk4MTUxNSVcIixcbiAgICAgIGNvbG9yOiBcIiMyZTI4MjlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0MC45MzU2NzI1MTQ2MTk4OCUgNDguMDQ5MjgxMzE0MTY4MzglLDQ4LjczMjk0MzQ2OTc4NTU3NSUgNTIuMTU2MDU3NDk0ODY2NTIlLDQ5LjUxMjY3MDU2NTMwMjE0NSUgNDMuOTQyNTA1MTMzNDcwMjMlXCIsXG4gICAgICBjb2xvcjogXCIjN2Y3NzczXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDcuMTczNDg5Mjc4NzUyNDM0JSA4MC40OTI4MTMxNDE2ODM3OCUsNDguMzQzMDc5OTIyMDI3Mjg2JSA4Mi41NDYyMDEyMzIwMzI4NiUsNDkuNTEyNjcwNTY1MzAyMTQ1JSA3OC44NTAxMDI2Njk0MDQ1MiVcIixcbiAgICAgIGNvbG9yOiBcIiM3OTMzMmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0NC4wNTQ1ODA4OTY2ODYxNTQlIDYzLjY1NTAzMDgwMDgyMTM2JSwzNS44Njc0NDYzOTM3NjIxOCUgNzkuNjcxNDU3OTA1NTQ0MTQlLDQ3LjE3MzQ4OTI3ODc1MjQzNCUgODAuNDkyODEzMTQxNjgzNzglXCIsXG4gICAgICBjb2xvcjogXCIjM2UzMTI4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDQuMDU0NTgwODk2Njg2MTU0JSA2My42NTUwMzA4MDA4MjEzNiUsNDcuMTczNDg5Mjc4NzUyNDM0JSA4MC40OTI4MTMxNDE2ODM3OCUsNDkuNTEyNjcwNTY1MzAyMTQ1JSA3OC44NTAxMDI2Njk0MDQ1MiVcIixcbiAgICAgIGNvbG9yOiBcIiM1ZjQ5MzlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0Ny45NTMyMTYzNzQyNjkwMDUlIDMwLjM5MDE0MzczNzE2NjMyNiUsNDguMzQzMDc5OTIyMDI3Mjg2JSAzMi44NTQyMDk0NDU1ODUyMSUsNTEuODUxODUxODUxODUxODUlIDI5LjE1ODExMDg4Mjk1Njg3NiVcIixcbiAgICAgIGNvbG9yOiBcIiNkM2Q4Y2ZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0OC43MzI5NDM0Njk3ODU1NzUlIDUyLjE1NjA1NzQ5NDg2NjUyJSw0OS41MTI2NzA1NjUzMDIxNDUlIDU5LjU0ODI1NDYyMDEyMzIxJSw1Mi4yNDE3MTUzOTk2MTAxMzYlIDUyLjk3NzQxMjczMTAwNjE1NCVcIixcbiAgICAgIGNvbG9yOiBcIiM4ZjhjODVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOS4zNzYyMTgzMjM1ODY3NCUgMTcuNjU5MTM3NTc3MDAyMDUzJSwzOS4zNzYyMTgzMjM1ODY3NCUgMjcuNTE1NDAwNDEwNjc3NjIlLDQ3Ljk1MzIxNjM3NDI2OTAwNSUgMzAuMzkwMTQzNzM3MTY2MzI2JVwiLFxuICAgICAgY29sb3I6IFwiIzZiNWQ1NFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUwLjI5MjM5NzY2MDgxODcxJSAxNS42MDU3NDk0ODY2NTI5NzklLDQ3Ljk1MzIxNjM3NDI2OTAwNSUgMzAuMzkwMTQzNzM3MTY2MzI2JSw1My4wMjE0NDI0OTUxMjY3MDYlIDE4LjQ4MDQ5MjgxMzE0MTY4NCVcIixcbiAgICAgIGNvbG9yOiBcIiM2NzYyNGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzOS4zNzYyMTgzMjM1ODY3NCUgMTcuNjU5MTM3NTc3MDAyMDUzJSw0Ny45NTMyMTYzNzQyNjkwMDUlIDMwLjM5MDE0MzczNzE2NjMyNiUsNTAuMjkyMzk3NjYwODE4NzElIDE1LjYwNTc0OTQ4NjY1Mjk3OSVcIixcbiAgICAgIGNvbG9yOiBcIiM1ZjUzNDlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0OC4zNDMwNzk5MjIwMjcyODYlIDMyLjg1NDIwOTQ0NTU4NTIxJSw1MC42ODIyNjEyMDg1NzY5OTYlIDQxLjA2Nzc2MTgwNjk4MTUxNSUsNTQuNTgwODk2Njg2MTU5ODQlIDM0LjkwNzU5NzUzNTkzNDI5JVwiLFxuICAgICAgY29sb3I6IFwiIzU4NTE0N1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUxLjg1MTg1MTg1MTg1MTg1JSAyOS4xNTgxMTA4ODI5NTY4NzYlLDQ4LjM0MzA3OTkyMjAyNzI4NiUgMzIuODU0MjA5NDQ1NTg1MjElLDU0LjU4MDg5NjY4NjE1OTg0JSAzNC45MDc1OTc1MzU5MzQyOSVcIixcbiAgICAgIGNvbG9yOiBcIiM5ZGEyYTZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0OS41MTI2NzA1NjUzMDIxNDUlIDU5LjU0ODI1NDYyMDEyMzIxJSw0OS45MDI1MzQxMTMwNjA0MjYlIDYwLjM2OTYwOTg1NjI2MjgzJSw1NC41ODA4OTY2ODYxNTk4NCUgNTcuOTA1NTQ0MTQ3ODQzOTUlXCIsXG4gICAgICBjb2xvcjogXCIjODk4YTg1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDkuOTAyNTM0MTEzMDYwNDI2JSA2MC4zNjk2MDk4NTYyNjI4MyUsNTMuNDExMzA2MDQyODg0OTklIDYyLjQyMjk5Nzk0NjYxMTkxNSUsNTQuNTgwODk2Njg2MTU5ODQlIDU3LjkwNTU0NDE0Nzg0Mzk1JVwiLFxuICAgICAgY29sb3I6IFwiIzdkODI3Y1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUyLjI0MTcxNTM5OTYxMDEzNiUgNTIuOTc3NDEyNzMxMDA2MTU0JSw0OS41MTI2NzA1NjUzMDIxNDUlIDU5LjU0ODI1NDYyMDEyMzIxJSw1NC41ODA4OTY2ODYxNTk4NCUgNTcuOTA1NTQ0MTQ3ODQzOTUlXCIsXG4gICAgICBjb2xvcjogXCIjODI4MjgzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDguMzQzMDc5OTIyMDI3Mjg2JSA4Mi41NDYyMDEyMzIwMzI4NiUsMzcuODE2NzY0MTMyNTUzNiUgOTIuODEzMTQxNjgzNzc4MjMlLDU0LjE5MTAzMzEzODQwMTU2JSA4Ny4wNjM2NTUwMzA4MDA4MiVcIixcbiAgICAgIGNvbG9yOiBcIiMxYjA4MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0OS45MDI1MzQxMTMwNjA0MjYlIDYwLjM2OTYwOTg1NjI2MjgzJSw0NC4wNTQ1ODA4OTY2ODYxNTQlIDYzLjY1NTAzMDgwMDgyMTM2JSw1My40MTEzMDYwNDI4ODQ5OSUgNjIuNDIyOTk3OTQ2NjExOTE1JVwiLFxuICAgICAgY29sb3I6IFwiI2ExYTE5NlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ3Ljk1MzIxNjM3NDI2OTAwNSUgMzAuMzkwMTQzNzM3MTY2MzI2JSw1MS44NTE4NTE4NTE4NTE4NSUgMjkuMTU4MTEwODgyOTU2ODc2JSw1My4wMjE0NDI0OTUxMjY3MDYlIDE4LjQ4MDQ5MjgxMzE0MTY4NCVcIixcbiAgICAgIGNvbG9yOiBcIiM4ZTc3NGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1NC41ODA4OTY2ODYxNTk4NCUgNTcuOTA1NTQ0MTQ3ODQzOTUlLDUzLjQxMTMwNjA0Mjg4NDk5JSA2Mi40MjI5OTc5NDY2MTE5MTUlLDU1LjM2MDYyMzc4MTY3NjQxJSA1OC43MjY4OTkzODM5ODM1OCVcIixcbiAgICAgIGNvbG9yOiBcIiM4Mzg1ODBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0NC4wNTQ1ODA4OTY2ODYxNTQlIDYzLjY1NTAzMDgwMDgyMTM2JSw0OS41MTI2NzA1NjUzMDIxNDUlIDc4Ljg1MDEwMjY2OTQwNDUyJSw1NS4zNjA2MjM3ODE2NzY0MSUgNjYuOTQwNDUxNzQ1Mzc5ODclXCIsXG4gICAgICBjb2xvcjogXCIjMjIxYTExXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTMuNDExMzA2MDQyODg0OTklIDYyLjQyMjk5Nzk0NjYxMTkxNSUsNDQuMDU0NTgwODk2Njg2MTU0JSA2My42NTUwMzA4MDA4MjEzNiUsNTUuMzYwNjIzNzgxNjc2NDElIDY2Ljk0MDQ1MTc0NTM3OTg3JVwiLFxuICAgICAgY29sb3I6IFwiIzgxODM4MVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ5LjUxMjY3MDU2NTMwMjE0NSUgNDMuOTQyNTA1MTMzNDcwMjMlLDQ4LjczMjk0MzQ2OTc4NTU3NSUgNTIuMTU2MDU3NDk0ODY2NTIlLDUyLjI0MTcxNTM5OTYxMDEzNiUgNTIuOTc3NDEyNzMxMDA2MTU0JVwiLFxuICAgICAgY29sb3I6IFwiIzY0NWU1OVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUyLjI0MTcxNTM5OTYxMDEzNiUgNTIuOTc3NDEyNzMxMDA2MTU0JSw1NC41ODA4OTY2ODYxNTk4NCUgNTcuOTA1NTQ0MTQ3ODQzOTUlLDU3LjMwOTk0MTUyMDQ2NzgzJSA1NC42MjAxMjMyMDMyODU0MiVcIixcbiAgICAgIGNvbG9yOiBcIiM1YzVhNWJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1NC41ODA4OTY2ODYxNTk4NCUgNTcuOTA1NTQ0MTQ3ODQzOTUlLDU1LjM2MDYyMzc4MTY3NjQxJSA1OC43MjY4OTkzODM5ODM1OCUsNTcuMzA5OTQxNTIwNDY3ODMlIDU0LjYyMDEyMzIwMzI4NTQyJVwiLFxuICAgICAgY29sb3I6IFwiIzdhN2Q3Y1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ5LjUxMjY3MDU2NTMwMjE0NSUgNzguODUwMTAyNjY5NDA0NTIlLDQ4LjM0MzA3OTkyMjAyNzI4NiUgODIuNTQ2MjAxMjMyMDMyODYlLDU0LjE5MTAzMzEzODQwMTU2JSA4Ny4wNjM2NTUwMzA4MDA4MiVcIixcbiAgICAgIGNvbG9yOiBcIiM2NzJkMjhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzNy44MTY3NjQxMzI1NTM2JSA5Mi44MTMxNDE2ODM3NzgyMyUsNi40MzI3NDg1MzgwMTE2OTYlIDEzNy41NzcwMDIwNTMzODgxJSw1Ni4zMzUyODI2NTEwNzIxMyUgMTM0LjQ5NjkxOTkxNzg2NDUlXCIsXG4gICAgICBjb2xvcjogXCIjMzMzNTJjXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTMuMDIxNDQyNDk1MTI2NzA2JSAxOC40ODA0OTI4MTMxNDE2ODQlLDU5LjI1OTI1OTI1OTI1OTI1JSAyNC42NDA2NTcwODQxODg5MSUsNTkuMjU5MjU5MjU5MjU5MjUlIDIyLjU4NzI2ODk5MzgzOTgzNSVcIixcbiAgICAgIGNvbG9yOiBcIiMyYjIzMWZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1My4wMjE0NDI0OTUxMjY3MDYlIDE4LjQ4MDQ5MjgxMzE0MTY4NCUsNTEuODUxODUxODUxODUxODUlIDI5LjE1ODExMDg4Mjk1Njg3NiUsNTkuMjU5MjU5MjU5MjU5MjUlIDI0LjY0MDY1NzA4NDE4ODkxJVwiLFxuICAgICAgY29sb3I6IFwiIzZjNjY1YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUxLjg1MTg1MTg1MTg1MTg1JSAyOS4xNTgxMTA4ODI5NTY4NzYlLDU5LjI1OTI1OTI1OTI1OTI1JSAyOC4zMzY3NTU2NDY4MTcyNDUlLDU5LjI1OTI1OTI1OTI1OTI1JSAyNC42NDA2NTcwODQxODg5MSVcIixcbiAgICAgIGNvbG9yOiBcIiM2MTUzNDdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1MS44NTE4NTE4NTE4NTE4NSUgMjkuMTU4MTEwODgyOTU2ODc2JSw1NC41ODA4OTY2ODYxNTk4NCUgMzQuOTA3NTk3NTM1OTM0MjklLDU5LjI1OTI1OTI1OTI1OTI1JSAyOC4zMzY3NTU2NDY4MTcyNDUlXCIsXG4gICAgICBjb2xvcjogXCIjODQ2YTRmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDkuOTAyNTM0MTEzMDYwNDI2JSAxMy4xNDE2ODM3NzgyMzQwODclLDUwLjI5MjM5NzY2MDgxODcxJSAxNS42MDU3NDk0ODY2NTI5NzklLDUzLjAyMTQ0MjQ5NTEyNjcwNiUgMTguNDgwNDkyODEzMTQxNjg0JVwiLFxuICAgICAgY29sb3I6IFwiIzNkM2UzOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ5LjkwMjUzNDExMzA2MDQyNiUgMTMuMTQxNjgzNzc4MjM0MDg3JSw1My4wMjE0NDI0OTUxMjY3MDYlIDE4LjQ4MDQ5MjgxMzE0MTY4NCUsNjAuNDI4ODQ5OTAyNTM0MTElIDE0LjM3MzcxNjYzMjQ0MzUzJVwiLFxuICAgICAgY29sb3I6IFwiIzlmOTY4M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUyLjI0MTcxNTM5OTYxMDEzNiUgNTIuOTc3NDEyNzMxMDA2MTU0JSw1Ny4zMDk5NDE1MjA0Njc4MyUgNTQuNjIwMTIzMjAzMjg1NDIlLDU4Ljg2OTM5NTcxMTUwMDk3JSA1My43OTg3Njc5NjcxNDU3ODUlXCIsXG4gICAgICBjb2xvcjogXCIjODA3Zjc5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuNTgwODk2Njg2MTU5ODQlIDM0LjkwNzU5NzUzNTkzNDI5JSw1MC42ODIyNjEyMDg1NzY5OTYlIDQxLjA2Nzc2MTgwNjk4MTUxNSUsNjAuODE4NzEzNDUwMjkyMzklIDQwLjI0NjQwNjU3MDg0MTg5JVwiLFxuICAgICAgY29sb3I6IFwiIzdiNmE2M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUzLjAyMTQ0MjQ5NTEyNjcwNiUgMTguNDgwNDkyODEzMTQxNjg0JSw1OS4yNTkyNTkyNTkyNTkyNSUgMjIuNTg3MjY4OTkzODM5ODM1JSw2MC40Mjg4NDk5MDI1MzQxMSUgMTQuMzczNzE2NjMyNDQzNTMlXCIsXG4gICAgICBjb2xvcjogXCIjYjhiYWI1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDkuNTEyNjcwNTY1MzAyMTQ1JSA3LjM5MjE5NzEyNTI1NjY3NCUsNDkuOTAyNTM0MTEzMDYwNDI2JSAxMy4xNDE2ODM3NzgyMzQwODclLDYwLjQyODg0OTkwMjUzNDExJSAxNC4zNzM3MTY2MzI0NDM1MyVcIixcbiAgICAgIGNvbG9yOiBcIiMzNzQxNDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1MC42ODIyNjEyMDg1NzY5OTYlIDQxLjA2Nzc2MTgwNjk4MTUxNSUsNDkuNTEyNjcwNTY1MzAyMTQ1JSA0My45NDI1MDUxMzM0NzAyMyUsNjAuODE4NzEzNDUwMjkyMzklIDQwLjI0NjQwNjU3MDg0MTg5JVwiLFxuICAgICAgY29sb3I6IFwiIzg1ODA3M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUzLjQxMTMwNjA0Mjg4NDk5JSA2Mi40MjI5OTc5NDY2MTE5MTUlLDU1LjM2MDYyMzc4MTY3NjQxJSA2Ni45NDA0NTE3NDUzNzk4NyUsNTUuMzYwNjIzNzgxNjc2NDElIDU4LjcyNjg5OTM4Mzk4MzU4JVwiLFxuICAgICAgY29sb3I6IFwiIzg1ODU4MVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYwLjgxODcxMzQ1MDI5MjM5JSA0MC4yNDY0MDY1NzA4NDE4OSUsNTguODY5Mzk1NzExNTAwOTclIDUzLjc5ODc2Nzk2NzE0NTc4NSUsNjMuMTU3ODk0NzM2ODQyMSUgNDMuMTIxMTQ5ODk3MzMwNTk2JVwiLFxuICAgICAgY29sb3I6IFwiI2ExYTZhNVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU3LjMwOTk0MTUyMDQ2NzgzJSA1NC42MjAxMjMyMDMyODU0MiUsNTUuMzYwNjIzNzgxNjc2NDElIDU4LjcyNjg5OTM4Mzk4MzU4JSw2My4xNTc4OTQ3MzY4NDIxJSA1Ny4wODQxODg5MTE3MDQzMiVcIixcbiAgICAgIGNvbG9yOiBcIiM3Njc2NzRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1OC44NjkzOTU3MTE1MDA5NyUgNTMuNzk4NzY3OTY3MTQ1Nzg1JSw1Ny4zMDk5NDE1MjA0Njc4MyUgNTQuNjIwMTIzMjAzMjg1NDIlLDYzLjE1Nzg5NDczNjg0MjElIDU3LjA4NDE4ODkxMTcwNDMyJVwiLFxuICAgICAgY29sb3I6IFwiIzUwNGU1MVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ5LjUxMjY3MDU2NTMwMjE0NSUgNDMuOTQyNTA1MTMzNDcwMjMlLDU4Ljg2OTM5NTcxMTUwMDk3JSA1My43OTg3Njc5NjcxNDU3ODUlLDYwLjgxODcxMzQ1MDI5MjM5JSA0MC4yNDY0MDY1NzA4NDE4OSVcIixcbiAgICAgIGNvbG9yOiBcIiNhMGExOWZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0OS41MTI2NzA1NjUzMDIxNDUlIDQzLjk0MjUwNTEzMzQ3MDIzJSw1Mi4yNDE3MTUzOTk2MTAxMzYlIDUyLjk3NzQxMjczMTAwNjE1NCUsNTguODY5Mzk1NzExNTAwOTclIDUzLjc5ODc2Nzk2NzE0NTc4NSVcIixcbiAgICAgIGNvbG9yOiBcIiM1NTU0NGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2MC40Mjg4NDk5MDI1MzQxMSUgMTQuMzczNzE2NjMyNDQzNTMlLDU5LjI1OTI1OTI1OTI1OTI1JSAyMi41ODcyNjg5OTM4Mzk4MzUlLDY1LjEwNzIxMjQ3NTYzMzUzJSAxOS4zMDE4NDgwNDkyODEzMTUlXCIsXG4gICAgICBjb2xvcjogXCIjNmM2ZDZmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTUuMzYwNjIzNzgxNjc2NDElIDU4LjcyNjg5OTM4Mzk4MzU4JSw1NS4zNjA2MjM3ODE2NzY0MSUgNjYuOTQwNDUxNzQ1Mzc5ODclLDYzLjE1Nzg5NDczNjg0MjElIDU3LjA4NDE4ODkxMTcwNDMyJVwiLFxuICAgICAgY29sb3I6IFwiIzY0NjM1ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ5LjUxMjY3MDU2NTMwMjE0NSUgNzguODUwMTAyNjY5NDA0NTIlLDU0LjE5MTAzMzEzODQwMTU2JSA4Ny4wNjM2NTUwMzA4MDA4MiUsNjIuMzc4MTY3NjQxMzI1NTMlIDg1LjgzMTYyMjE3NjU5MTM3JVwiLFxuICAgICAgY29sb3I6IFwiIzQzMjcxMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU5LjI1OTI1OTI1OTI1OTI1JSAyOC4zMzY3NTU2NDY4MTcyNDUlLDU0LjU4MDg5NjY4NjE1OTg0JSAzNC45MDc1OTc1MzU5MzQyOSUsNjAuODE4NzEzNDUwMjkyMzklIDQwLjI0NjQwNjU3MDg0MTg5JVwiLFxuICAgICAgY29sb3I6IFwiIzg2ODY3ZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU5LjI1OTI1OTI1OTI1OTI1JSAyOC4zMzY3NTU2NDY4MTcyNDUlLDYwLjgxODcxMzQ1MDI5MjM5JSA0MC4yNDY0MDY1NzA4NDE4OSUsNjcuMDU2NTMwMjE0NDI0OTUlIDM3Ljc4MjM0MDg2MjQyMyVcIixcbiAgICAgIGNvbG9yOiBcIiM3Yzc2NmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2MC44MTg3MTM0NTAyOTIzOSUgNDAuMjQ2NDA2NTcwODQxODklLDY3LjA1NjUzMDIxNDQyNDk1JSAzOC42MDM2OTYwOTg1NjI2MyUsNjcuMDU2NTMwMjE0NDI0OTUlIDM3Ljc4MjM0MDg2MjQyMyVcIixcbiAgICAgIGNvbG9yOiBcIiMzODM1MmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2MC44MTg3MTM0NTAyOTIzOSUgNDAuMjQ2NDA2NTcwODQxODklLDYzLjE1Nzg5NDczNjg0MjElIDQzLjEyMTE0OTg5NzMzMDU5NiUsNjcuMDU2NTMwMjE0NDI0OTUlIDM4LjYwMzY5NjA5ODU2MjYzJVwiLFxuICAgICAgY29sb3I6IFwiIzY5Njc2M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU5LjI1OTI1OTI1OTI1OTI1JSAyMi41ODcyNjg5OTM4Mzk4MzUlLDU5LjI1OTI1OTI1OTI1OTI1JSAyNC42NDA2NTcwODQxODg5MSUsNjUuMTA3MjEyNDc1NjMzNTMlIDE5LjMwMTg0ODA0OTI4MTMxNSVcIixcbiAgICAgIGNvbG9yOiBcIiMyYTJmMzNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1NS4zNjA2MjM3ODE2NzY0MSUgNjYuOTQwNDUxNzQ1Mzc5ODclLDQ5LjUxMjY3MDU2NTMwMjE0NSUgNzguODUwMTAyNjY5NDA0NTIlLDYyLjM3ODE2NzY0MTMyNTUzJSA4NS44MzE2MjIxNzY1OTEzNyVcIixcbiAgICAgIGNvbG9yOiBcIiM0NzM3MjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1OS4yNTkyNTkyNTkyNTkyNSUgMjguMzM2NzU1NjQ2ODE3MjQ1JSw2Ny4wNTY1MzAyMTQ0MjQ5NSUgMzcuNzgyMzQwODYyNDIzJSw2OC42MTU5ODQ0MDU0NTgwOCUgMzQuMDg2MjQyMjk5Nzk0NjYlXCIsXG4gICAgICBjb2xvcjogXCIjMmYzMTMwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTUuMzYwNjIzNzgxNjc2NDElIDY2Ljk0MDQ1MTc0NTM3OTg3JSw2Mi4zNzgxNjc2NDEzMjU1MyUgODUuODMxNjIyMTc2NTkxMzclLDcwLjc2MDIzMzkxODEyODY2JSA3MC42MzY1NTAzMDgwMDgyMSVcIixcbiAgICAgIGNvbG9yOiBcIiMzOTJmMjhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2OS43ODU1NzUwNDg3MzI5NCUgNjEuMTkwOTY1MDkyNDAyNDYlLDU1LjM2MDYyMzc4MTY3NjQxJSA2Ni45NDA0NTE3NDUzNzk4NyUsNzAuNzYwMjMzOTE4MTI4NjYlIDcwLjYzNjU1MDMwODAwODIxJVwiLFxuICAgICAgY29sb3I6IFwiIzExMTIxNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjY3LjA1NjUzMDIxNDQyNDk1JSAzOC42MDM2OTYwOTg1NjI2MyUsNjMuMTU3ODk0NzM2ODQyMSUgNDMuMTIxMTQ5ODk3MzMwNTk2JSw3MC41NjUzMDIxNDQyNDk1MSUgMzkuNDI1MDUxMzM0NzAyMjYlXCIsXG4gICAgICBjb2xvcjogXCIjNzU3ODc2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjcuMDU2NTMwMjE0NDI0OTUlIDM3Ljc4MjM0MDg2MjQyMyUsNjcuMDU2NTMwMjE0NDI0OTUlIDM4LjYwMzY5NjA5ODU2MjYzJSw3MC41NjUzMDIxNDQyNDk1MSUgMzkuNDI1MDUxMzM0NzAyMjYlXCIsXG4gICAgICBjb2xvcjogXCIjNWE1YzViXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjguNjE1OTg0NDA1NDU4MDglIDM0LjA4NjI0MjI5OTc5NDY2JSw2Ny4wNTY1MzAyMTQ0MjQ5NSUgMzcuNzgyMzQwODYyNDIzJSw3MC41NjUzMDIxNDQyNDk1MSUgMzkuNDI1MDUxMzM0NzAyMjYlXCIsXG4gICAgICBjb2xvcjogXCIjOTY5YTk1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjMuMTU3ODk0NzM2ODQyMSUgNDMuMTIxMTQ5ODk3MzMwNTk2JSw2My4xNTc4OTQ3MzY4NDIxJSA1Ny4wODQxODg5MTE3MDQzMiUsNzAuMTc1NDM4NTk2NDkxMjIlIDU1LjQ0MTQ3ODQzOTQyNTA1NSVcIixcbiAgICAgIGNvbG9yOiBcIiMxZTFlMWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2My4xNTc4OTQ3MzY4NDIxJSA1Ny4wODQxODg5MTE3MDQzMiUsNjkuNzg1NTc1MDQ4NzMyOTQlIDYxLjE5MDk2NTA5MjQwMjQ2JSw3MC4xNzU0Mzg1OTY0OTEyMiUgNTUuNDQxNDc4NDM5NDI1MDU1JVwiLFxuICAgICAgY29sb3I6IFwiIzI3MjMyMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYzLjE1Nzg5NDczNjg0MjElIDU3LjA4NDE4ODkxMTcwNDMyJSw1NS4zNjA2MjM3ODE2NzY0MSUgNjYuOTQwNDUxNzQ1Mzc5ODclLDY5Ljc4NTU3NTA0ODczMjk0JSA2MS4xOTA5NjUwOTI0MDI0NiVcIixcbiAgICAgIGNvbG9yOiBcIiMxZjFmMWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1OS4yNTkyNTkyNTkyNTkyNSUgMjQuNjQwNjU3MDg0MTg4OTElLDU5LjI1OTI1OTI1OTI1OTI1JSAyOC4zMzY3NTU2NDY4MTcyNDUlLDY1LjEwNzIxMjQ3NTYzMzUzJSAxOS4zMDE4NDgwNDkyODEzMTUlXCIsXG4gICAgICBjb2xvcjogXCIjNGU0YjQ0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTguODY5Mzk1NzExNTAwOTclIDUzLjc5ODc2Nzk2NzE0NTc4NSUsNjMuMTU3ODk0NzM2ODQyMSUgNTcuMDg0MTg4OTExNzA0MzIlLDYzLjE1Nzg5NDczNjg0MjElIDQzLjEyMTE0OTg5NzMzMDU5NiVcIixcbiAgICAgIGNvbG9yOiBcIiM1ODRjNDZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3MC43NjAyMzM5MTgxMjg2NiUgNzAuNjM2NTUwMzA4MDA4MjElLDYyLjM3ODE2NzY0MTMyNTUzJSA4NS44MzE2MjIxNzY1OTEzNyUsNzIuOTA0NDgzNDMwNzk5MjIlIDc2LjM4NjAzNjk2MDk4NTYyJVwiLFxuICAgICAgY29sb3I6IFwiIzMwMzEzMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjY4LjYxNTk4NDQwNTQ1ODA4JSAzNC4wODYyNDIyOTk3OTQ2NiUsNzAuNTY1MzAyMTQ0MjQ5NTElIDM5LjQyNTA1MTMzNDcwMjI2JSw3My4yOTQzNDY5Nzg1NTc1JSAzNi45NjA5ODU2MjYyODMzNyVcIixcbiAgICAgIGNvbG9yOiBcIiMyNTI4MjlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2OS43ODU1NzUwNDg3MzI5NCUgNjEuMTkwOTY1MDkyNDAyNDYlLDcwLjc2MDIzMzkxODEyODY2JSA3MC42MzY1NTAzMDgwMDgyMSUsNzMuMjk0MzQ2OTc4NTU3NSUgNjUuNzA4NDE4ODkxMTcwNDIlXCIsXG4gICAgICBjb2xvcjogXCIjNGQ0ZDQ1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjUuMTA3MjEyNDc1NjMzNTMlIDE5LjMwMTg0ODA0OTI4MTMxNSUsNTkuMjU5MjU5MjU5MjU5MjUlIDI4LjMzNjc1NTY0NjgxNzI0NSUsNjguNjE1OTg0NDA1NDU4MDglIDM0LjA4NjI0MjI5OTc5NDY2JVwiLFxuICAgICAgY29sb3I6IFwiIzIwMjMyY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjY4LjYxNTk4NDQwNTQ1ODA4JSAzNC4wODYyNDIyOTk3OTQ2NiUsNzMuMjk0MzQ2OTc4NTU3NSUgMzYuOTYwOTg1NjI2MjgzMzclLDczLjI5NDM0Njk3ODU1NzUlIDMyLjAzMjg1NDIwOTQ0NTU4JVwiLFxuICAgICAgY29sb3I6IFwiIzI3MjYyOVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjY4LjYxNTk4NDQwNTQ1ODA4JSAzNC4wODYyNDIyOTk3OTQ2NiUsNzMuMjk0MzQ2OTc4NTU3NSUgMzIuMDMyODU0MjA5NDQ1NTglLDc0LjQ2MzkzNzYyMTgzMjM2JSAyNS44NzI2ODk5MzgzOTgzNiVcIixcbiAgICAgIGNvbG9yOiBcIiMzNDNhMzZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3MC4xNzU0Mzg1OTY0OTEyMiUgNTUuNDQxNDc4NDM5NDI1MDU1JSw2OS43ODU1NzUwNDg3MzI5NCUgNjEuMTkwOTY1MDkyNDAyNDYlLDc0LjA3NDA3NDA3NDA3NDA4JSA1Ni4yNjI4MzM2NzU1NjQ2ODYlXCIsXG4gICAgICBjb2xvcjogXCIjM2YzMzMyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuMTkxMDMzMTM4NDAxNTYlIDg3LjA2MzY1NTAzMDgwMDgyJSwzNy44MTY3NjQxMzI1NTM2JSA5Mi44MTMxNDE2ODM3NzgyMyUsNTYuMzM1MjgyNjUxMDcyMTMlIDEzNC40OTY5MTk5MTc4NjQ1JVwiLFxuICAgICAgY29sb3I6IFwiIzRhMjIxOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYzLjE1Nzg5NDczNjg0MjElIDQzLjEyMTE0OTg5NzMzMDU5NiUsNzAuMTc1NDM4NTk2NDkxMjIlIDU1LjQ0MTQ3ODQzOTQyNTA1NSUsNzAuNTY1MzAyMTQ0MjQ5NTElIDM5LjQyNTA1MTMzNDcwMjI2JVwiLFxuICAgICAgY29sb3I6IFwiIzRmNTI0NFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjcwLjc2MDIzMzkxODEyODY2JSA3MC42MzY1NTAzMDgwMDgyMSUsNzIuOTA0NDgzNDMwNzk5MjIlIDc2LjM4NjAzNjk2MDk4NTYyJSw3OC4zNjI1NzMwOTk0MTUyJSA3MS40NTc5MDU1NDQxNDc4NSVcIixcbiAgICAgIGNvbG9yOiBcIiMzZjM3MzNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3My4yOTQzNDY5Nzg1NTc1JSA2NS43MDg0MTg4OTExNzA0MiUsNzAuNzYwMjMzOTE4MTI4NjYlIDcwLjYzNjU1MDMwODAwODIxJSw3OC4zNjI1NzMwOTk0MTUyJSA3MS40NTc5MDU1NDQxNDc4NSVcIixcbiAgICAgIGNvbG9yOiBcIiMzOTM1MmNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2OS43ODU1NzUwNDg3MzI5NCUgNjEuMTkwOTY1MDkyNDAyNDYlLDczLjI5NDM0Njk3ODU1NzUlIDY1LjcwODQxODg5MTE3MDQyJSw3NC4wNzQwNzQwNzQwNzQwOCUgNTYuMjYyODMzNjc1NTY0Njg2JVwiLFxuICAgICAgY29sb3I6IFwiIzJjMjgyMlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjczLjI5NDM0Njk3ODU1NzUlIDM2Ljk2MDk4NTYyNjI4MzM3JSw3MC41NjUzMDIxNDQyNDk1MSUgMzkuNDI1MDUxMzM0NzAyMjYlLDc5LjE0MjMwMDE5NDkzMTc2JSA0Mi4yOTk3OTQ2NjExOTA5NjUlXCIsXG4gICAgICBjb2xvcjogXCIjN2E0MjNjXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzguMzYyNTczMDk5NDE1MiUgNzEuNDU3OTA1NTQ0MTQ3ODUlLDcyLjkwNDQ4MzQzMDc5OTIyJSA3Ni4zODYwMzY5NjA5ODU2MiUsNzkuMTQyMzAwMTk0OTMxNzYlIDc3LjYxODA2OTgxNTE5NTA3JVwiLFxuICAgICAgY29sb3I6IFwiIzJhMjQyMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjczLjI5NDM0Njk3ODU1NzUlIDMyLjAzMjg1NDIwOTQ0NTU4JSw3My4yOTQzNDY5Nzg1NTc1JSAzNi45NjA5ODU2MjYyODMzNyUsNzUuNjMzNTI4MjY1MTA3MiUgMzAuODAwODIxMzU1MjM2MTQyJVwiLFxuICAgICAgY29sb3I6IFwiIzZhNmU1ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjczLjI5NDM0Njk3ODU1NzUlIDY1LjcwODQxODg5MTE3MDQyJSw3OC4zNjI1NzMwOTk0MTUyJSA3MS40NTc5MDU1NDQxNDc4NSUsODAuNzAxNzU0Mzg1OTY0OSUgNjguMTcyNDg0NTk5NTg5MzIlXCIsXG4gICAgICBjb2xvcjogXCIjMzYzMjJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzAuNTY1MzAyMTQ0MjQ5NTElIDM5LjQyNTA1MTMzNDcwMjI2JSw3MC4xNzU0Mzg1OTY0OTEyMiUgNTUuNDQxNDc4NDM5NDI1MDU1JSw3OS4xNDIzMDAxOTQ5MzE3NiUgNDIuMjk5Nzk0NjYxMTkwOTY1JVwiLFxuICAgICAgY29sb3I6IFwiIzgzODQ3OFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc5LjE0MjMwMDE5NDkzMTc2JSA0Mi4yOTk3OTQ2NjExOTA5NjUlLDgxLjA5MTYxNzkzMzcyMzIlIDQ1Ljk5NTg5MzIyMzgxOTMlLDgxLjA5MTYxNzkzMzcyMzIlIDQ1LjE3NDUzNzk4NzY3OTY3JVwiLFxuICAgICAgY29sb3I6IFwiIzY5Njk2MVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjcwLjE3NTQzODU5NjQ5MTIyJSA1NS40NDE0Nzg0Mzk0MjUwNTUlLDc0LjA3NDA3NDA3NDA3NDA4JSA1Ni4yNjI4MzM2NzU1NjQ2ODYlLDgxLjA5MTYxNzkzMzcyMzIlIDQ1Ljk5NTg5MzIyMzgxOTMlXCIsXG4gICAgICBjb2xvcjogXCIjOTQ5NDhmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiODAuNzAxNzU0Mzg1OTY0OSUgNjguMTcyNDg0NTk5NTg5MzIlLDc4LjM2MjU3MzA5OTQxNTIlIDcxLjQ1NzkwNTU0NDE0Nzg1JSw4MS40ODE0ODE0ODE0ODE0OCUgNjkuODE1MTk1MDcxODY4NTklXCIsXG4gICAgICBjb2xvcjogXCIjMjYyNzI1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzguMzYyNTczMDk5NDE1MiUgNzEuNDU3OTA1NTQ0MTQ3ODUlLDgxLjQ4MTQ4MTQ4MTQ4MTQ4JSA3My4xMDA2MTYwMTY0MjcxJSw4MS40ODE0ODE0ODE0ODE0OCUgNjkuODE1MTk1MDcxODY4NTklXCIsXG4gICAgICBjb2xvcjogXCIjNWI1ZjUxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiODEuMjg2NTQ5NzA3NjAyMzUlIDY3Ljk2NzE0NTc5MDU1NDQxJSw4MC43MDE3NTQzODU5NjQ5JSA2OC4xNzI0ODQ1OTk1ODkzMiUsODEuNDgxNDgxNDgxNDgxNDglIDY5LjgxNTE5NTA3MTg2ODU5JVwiLFxuICAgICAgY29sb3I6IFwiIzMzMzUzNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc4LjM2MjU3MzA5OTQxNTIlIDcxLjQ1NzkwNTU0NDE0Nzg1JSw3OS4xNDIzMDAxOTQ5MzE3NiUgNzcuNjE4MDY5ODE1MTk1MDclLDgxLjQ4MTQ4MTQ4MTQ4MTQ4JSA3My4xMDA2MTYwMTY0MjcxJVwiLFxuICAgICAgY29sb3I6IFwiIzNhMzUzMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjgxLjQ4MTQ4MTQ4MTQ4MTQ4JSA3My4xMDA2MTYwMTY0MjcxJSw3OS4xNDIzMDAxOTQ5MzE3NiUgNzcuNjE4MDY5ODE1MTk1MDclLDgzLjgyMDY2Mjc2ODAzMTE4JSA4MS4zMTQxNjgzNzc4MjM0JVwiLFxuICAgICAgY29sb3I6IFwiIzU5NTQ0NFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc5LjE0MjMwMDE5NDkzMTc2JSA3Ny42MTgwNjk4MTUxOTUwNyUsNjIuMzc4MTY3NjQxMzI1NTMlIDg1LjgzMTYyMjE3NjU5MTM3JSw4My44MjA2NjI3NjgwMzExOCUgODEuMzE0MTY4Mzc3ODIzNCVcIixcbiAgICAgIGNvbG9yOiBcIiMxNjE2MTlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3NC4wNzQwNzQwNzQwNzQwOCUgNTYuMjYyODMzNjc1NTY0Njg2JSw4MC43MDE3NTQzODU5NjQ5JSA2OC4xNzI0ODQ1OTk1ODkzMiUsODEuMjg2NTQ5NzA3NjAyMzUlIDY3Ljk2NzE0NTc5MDU1NDQxJVwiLFxuICAgICAgY29sb3I6IFwiIzNkM2YzNVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc0LjA3NDA3NDA3NDA3NDA4JSA1Ni4yNjI4MzM2NzU1NjQ2ODYlLDczLjI5NDM0Njk3ODU1NzUlIDY1LjcwODQxODg5MTE3MDQyJSw4MC43MDE3NTQzODU5NjQ5JSA2OC4xNzI0ODQ1OTk1ODkzMiVcIixcbiAgICAgIGNvbG9yOiBcIiMzNjMzMmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3NS42MzM1MjgyNjUxMDcyJSAzMC44MDA4MjEzNTUyMzYxNDIlLDczLjI5NDM0Njk3ODU1NzUlIDM2Ljk2MDk4NTYyNjI4MzM3JSw3OS4xNDIzMDAxOTQ5MzE3NiUgNDIuMjk5Nzk0NjYxMTkwOTY1JVwiLFxuICAgICAgY29sb3I6IFwiIzczNzM3M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjcyLjkwNDQ4MzQzMDc5OTIyJSA3Ni4zODYwMzY5NjA5ODU2MiUsNjIuMzc4MTY3NjQxMzI1NTMlIDg1LjgzMTYyMjE3NjU5MTM3JSw3OS4xNDIzMDAxOTQ5MzE3NiUgNzcuNjE4MDY5ODE1MTk1MDclXCIsXG4gICAgICBjb2xvcjogXCIjNzM3MDYyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuMTkxMDMzMTM4NDAxNTYlIDg3LjA2MzY1NTAzMDgwMDgyJSw1Ni4zMzUyODI2NTEwNzIxMyUgMTM0LjQ5NjkxOTkxNzg2NDUlLDYyLjM3ODE2NzY0MTMyNTUzJSA4NS44MzE2MjIxNzY1OTEzNyVcIixcbiAgICAgIGNvbG9yOiBcIiM0NzFkMTBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2Mi4zNzgxNjc2NDEzMjU1MyUgODUuODMxNjIyMTc2NTkxMzclLDU2LjMzNTI4MjY1MTA3MjEzJSAxMzQuNDk2OTE5OTE3ODY0NSUsODguODg4ODg4ODg4ODg4ODklIDk5LjM4Mzk4MzU3Mjg5NTI3JVwiLFxuICAgICAgY29sb3I6IFwiIzE3MTgxNVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjgzLjgyMDY2Mjc2ODAzMTE4JSA4MS4zMTQxNjgzNzc4MjM0JSw2Mi4zNzgxNjc2NDEzMjU1MyUgODUuODMxNjIyMTc2NTkxMzclLDg4Ljg4ODg4ODg4ODg4ODg5JSA5OS4zODM5ODM1NzI4OTUyNyVcIixcbiAgICAgIGNvbG9yOiBcIiMyZTMxMmNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4My44MjA2NjI3NjgwMzExOCUgODEuMzE0MTY4Mzc3ODIzNCUsODguODg4ODg4ODg4ODg4ODklIDk5LjM4Mzk4MzU3Mjg5NTI3JSw5Mi4wMDc3OTcyNzA5NTUxNyUgOTYuOTE5OTE3ODY0NDc2MzklXCIsXG4gICAgICBjb2xvcjogXCIjNDU0NTNkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiODMuODIwNjYyNzY4MDMxMTglIDgxLjMxNDE2ODM3NzgyMzQlLDkyLjAwNzc5NzI3MDk1NTE3JSA5Ni45MTk5MTc4NjQ0NzYzOSUsOTguMjQ1NjE0MDM1MDg3NzElIDg0LjU5OTU4OTMyMjM4MTkzJVwiLFxuICAgICAgY29sb3I6IFwiIzQ3NDIzZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjk4LjI0NTYxNDAzNTA4NzcxJSA4NC41OTk1ODkzMjIzODE5MyUsOTIuMDA3Nzk3MjcwOTU1MTclIDk2LjkxOTkxNzg2NDQ3NjM5JSw5OS44MDUwNjgyMjYxMjA4NSUgOTkuNzk0NjYxMTkwOTY1MSVcIixcbiAgICAgIGNvbG9yOiBcIiMzMzMzMmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4OC44ODg4ODg4ODg4ODg4OSUgOTkuMzgzOTgzNTcyODk1MjclLDU2LjMzNTI4MjY1MTA3MjEzJSAxMzQuNDk2OTE5OTE3ODY0NSUsOTkuODA1MDY4MjI2MTIwODUlIDk5Ljc5NDY2MTE5MDk2NTElXCIsXG4gICAgICBjb2xvcjogXCIjNDY0NTQxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiOTIuMDA3Nzk3MjcwOTU1MTclIDk2LjkxOTkxNzg2NDQ3NjM5JSw4OC44ODg4ODg4ODg4ODg4OSUgOTkuMzgzOTgzNTcyODk1MjclLDk5LjgwNTA2ODIyNjEyMDg1JSA5OS43OTQ2NjExOTA5NjUxJVwiLFxuICAgICAgY29sb3I6IFwiIzIxMjIxZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjgxLjI4NjU0OTcwNzYwMjM1JSA2Ny45NjcxNDU3OTA1NTQ0MSUsODEuNDgxNDgxNDgxNDgxNDglIDY5LjgxNTE5NTA3MTg2ODU5JSw5OC4yNDU2MTQwMzUwODc3MSUgODQuNTk5NTg5MzIyMzgxOTMlXCIsXG4gICAgICBjb2xvcjogXCIjNDY0ZDU2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiODEuNDgxNDgxNDgxNDgxNDglIDY5LjgxNTE5NTA3MTg2ODU5JSw4MS40ODE0ODE0ODE0ODE0OCUgNzMuMTAwNjE2MDE2NDI3MSUsOTguMjQ1NjE0MDM1MDg3NzElIDg0LjU5OTU4OTMyMjM4MTkzJVwiLFxuICAgICAgY29sb3I6IFwiIzExMTYxY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjgxLjQ4MTQ4MTQ4MTQ4MTQ4JSA3My4xMDA2MTYwMTY0MjcxJSw4My44MjA2NjI3NjgwMzExOCUgODEuMzE0MTY4Mzc3ODIzNCUsOTguMjQ1NjE0MDM1MDg3NzElIDg0LjU5OTU4OTMyMjM4MTkzJVwiLFxuICAgICAgY29sb3I6IFwiIzM3M2UzM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjgxLjA5MTYxNzkzMzcyMzIlIDQ1Ljk5NTg5MzIyMzgxOTMlLDgxLjI4NjU0OTcwNzYwMjM1JSA2Ny45NjcxNDU3OTA1NTQ0MSUsOTIuMzk3NjYwODE4NzEzNDUlIDM2LjEzOTYzMDM5MDE0MzczNiVcIixcbiAgICAgIGNvbG9yOiBcIiM2NDYyNTBcIixcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGNvbnN0IGRhdGEzID0ge1xuICBoZWlnaHQ6IFwiNjEyXCIsXG4gIHdpZHRoOiBcIjQwOFwiLFxuICBwb2x5Z29uczogW1xuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxMC41MzkyMTU2ODYyNzQ1MSUgNzYuNzk3Mzg1NjIwOTE1MDQlLDAlIDk5LjgzNjYwMTMwNzE4OTU0JSwxOC42Mjc0NTA5ODAzOTIxNTglIDg1LjI5NDExNzY0NzA1ODgzJVwiLFxuICAgICAgY29sb3I6IFwiI2ZkNmEwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjEwLjUzOTIxNTY4NjI3NDUxJSA3Ni43OTczODU2MjA5MTUwNCUsMTguNjI3NDUwOTgwMzkyMTU4JSA4NS4yOTQxMTc2NDcwNTg4MyUsMjcuMjA1ODgyMzUyOTQxMTc0JSA4Mi4wMjYxNDM3OTA4NDk2NyVcIixcbiAgICAgIGNvbG9yOiBcIiNjYzNhMTFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxOC42Mjc0NTA5ODAzOTIxNTglIDg1LjI5NDExNzY0NzA1ODgzJSwwJSA5OS44MzY2MDEzMDcxODk1NCUsMjcuMjA1ODgyMzUyOTQxMTc0JSAxMDUuMjI4NzU4MTY5OTM0NjUlXCIsXG4gICAgICBjb2xvcjogXCIjZjY1ZjAyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiOS4wNjg2Mjc0NTA5ODAzOTIlIDE4LjMwMDY1MzU5NDc3MTI0JSwyMC4zNDMxMzcyNTQ5MDE5NiUgMTkuOTM0NjQwNTIyODc1ODE3JSwyMS4zMjM1Mjk0MTE3NjQ3MDclIDAlXCIsXG4gICAgICBjb2xvcjogXCIjMWMyMTIxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiOS4wNjg2Mjc0NTA5ODAzOTIlIDE4LjMwMDY1MzU5NDc3MTI0JSwtNy4zNTI5NDExNzY0NzA1ODklIDI4LjQzMTM3MjU0OTAxOTYwNiUsMjAuMzQzMTM3MjU0OTAxOTYlIDE5LjkzNDY0MDUyMjg3NTgxNyVcIixcbiAgICAgIGNvbG9yOiBcIiM4OTZjNTVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxMC41MzkyMTU2ODYyNzQ1MSUgNzYuNzk3Mzg1NjIwOTE1MDQlLDI3LjIwNTg4MjM1Mjk0MTE3NCUgODIuMDI2MTQzNzkwODQ5NjclLDM1LjI5NDExNzY0NzA1ODgyNiUgNzUuMTYzMzk4NjkyODEwNDYlXCIsXG4gICAgICBjb2xvcjogXCIjMTkzMzFjXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNC4xNjY2NjY2NjY2NjY2NjYlIDUzLjU5NDc3MTI0MTgzMDA3JSwxMC41MzkyMTU2ODYyNzQ1MSUgNzYuNzk3Mzg1NjIwOTE1MDQlLDMzLjgyMzUyOTQxMTc2NDcxJSA1OC45ODY5MjgxMDQ1NzUxNiVcIixcbiAgICAgIGNvbG9yOiBcIiNmZjc0MDNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyMS4zMjM1Mjk0MTE3NjQ3MDclIDAlLDIwLjM0MzEzNzI1NDkwMTk2JSAxOS45MzQ2NDA1MjI4NzU4MTclLDI1LjczNTI5NDExNzY0NzA1OCUgMTkuNjA3ODQzMTM3MjU0OTAzJVwiLFxuICAgICAgY29sb3I6IFwiIzIxMzcyY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjIwLjM0MzEzNzI1NDkwMTk2JSAxOS45MzQ2NDA1MjI4NzU4MTclLDIwLjgzMzMzMzMzMzMzMzMzNiUgNDYuNDA1MjI4NzU4MTY5OTMlLDM3LjUlIDM0Ljk2NzMyMDI2MTQzNzkwNSVcIixcbiAgICAgIGNvbG9yOiBcIiMxOTIwMWVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzNy4wMDk4MDM5MjE1Njg2MyUgMjUuMTYzMzk4NjkyODEwNDU3JSwyMC4zNDMxMzcyNTQ5MDE5NiUgMTkuOTM0NjQwNTIyODc1ODE3JSwzNy41JSAzNC45NjczMjAyNjE0Mzc5MDUlXCIsXG4gICAgICBjb2xvcjogXCIjMDUxZDFmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjUuNzM1Mjk0MTE3NjQ3MDU4JSAxOS42MDc4NDMxMzcyNTQ5MDMlLDIwLjM0MzEzNzI1NDkwMTk2JSAxOS45MzQ2NDA1MjI4NzU4MTclLDM3LjAwOTgwMzkyMTU2ODYzJSAyNS4xNjMzOTg2OTI4MTA0NTclXCIsXG4gICAgICBjb2xvcjogXCIjM2U2MDYxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzMuODIzNTI5NDExNzY0NzElIDU4Ljk4NjkyODEwNDU3NTE2JSwxMC41MzkyMTU2ODYyNzQ1MSUgNzYuNzk3Mzg1NjIwOTE1MDQlLDM1LjI5NDExNzY0NzA1ODgyNiUgNzUuMTYzMzk4NjkyODEwNDYlXCIsXG4gICAgICBjb2xvcjogXCIjZmE4ZDM2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzcuMDA5ODAzOTIxNTY4NjMlIDI1LjE2MzM5ODY5MjgxMDQ1NyUsMzcuNSUgMzQuOTY3MzIwMjYxNDM3OTA1JSw0Mi40MDE5NjA3ODQzMTM3MiUgMzAuNTU1NTU1NTU1NTU1NTU3JVwiLFxuICAgICAgY29sb3I6IFwiIzY2M2EyN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjE4LjYyNzQ1MDk4MDM5MjE1OCUgODUuMjk0MTE3NjQ3MDU4ODMlLDI3LjIwNTg4MjM1Mjk0MTE3NCUgMTA1LjIyODc1ODE2OTkzNDY1JSwyNy4yMDU4ODIzNTI5NDExNzQlIDgyLjAyNjE0Mzc5MDg0OTY3JVwiLFxuICAgICAgY29sb3I6IFwiI2Y3NTkxZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjMzLjgyMzUyOTQxMTc2NDcxJSA1OC45ODY5MjgxMDQ1NzUxNiUsMzUuMjk0MTE3NjQ3MDU4ODI2JSA3NS4xNjMzOTg2OTI4MTA0NiUsNTAuNDkwMTk2MDc4NDMxMzclIDY3LjQ4MzY2MDEzMDcxODk2JVwiLFxuICAgICAgY29sb3I6IFwiI2FhMjcwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM1LjI5NDExNzY0NzA1ODgyNiUgNzUuMTYzMzk4NjkyODEwNDYlLDQzLjg3MjU0OTAxOTYwNzg0NSUgNzQuODM2NjAxMzA3MTg5NTQlLDUwLjQ5MDE5NjA3ODQzMTM3JSA2Ny40ODM2NjAxMzA3MTg5NiVcIixcbiAgICAgIGNvbG9yOiBcIiNhNDI2MGJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzNS4yOTQxMTc2NDcwNTg4MjYlIDc1LjE2MzM5ODY5MjgxMDQ2JSwyNy4yMDU4ODIzNTI5NDExNzQlIDgyLjAyNjE0Mzc5MDg0OTY3JSw0My44NzI1NDkwMTk2MDc4NDUlIDc0LjgzNjYwMTMwNzE4OTU0JVwiLFxuICAgICAgY29sb3I6IFwiIzhkMjMwNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjI1LjczNTI5NDExNzY0NzA1OCUgMTkuNjA3ODQzMTM3MjU0OTAzJSwzNy4wMDk4MDM5MjE1Njg2MyUgMjUuMTYzMzk4NjkyODEwNDU3JSw1My42NzY0NzA1ODgyMzUyOSUgMTcuOTczODU2MjA5MTUwMzI3JVwiLFxuICAgICAgY29sb3I6IFwiIzM1NDEzZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQyLjQwMTk2MDc4NDMxMzcyJSAzMC41NTU1NTU1NTU1NTU1NTclLDM3LjUlIDM0Ljk2NzMyMDI2MTQzNzkwNSUsNTQuMTY2NjY2NjY2NjY2NjY0JSAzMi4wMjYxNDM3OTA4NDk2NyVcIixcbiAgICAgIGNvbG9yOiBcIiNhYjZmNWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzNy4wMDk4MDM5MjE1Njg2MyUgMjUuMTYzMzk4NjkyODEwNDU3JSw0Mi40MDE5NjA3ODQzMTM3MiUgMzAuNTU1NTU1NTU1NTU1NTU3JSw1My42NzY0NzA1ODgyMzUyOSUgMTcuOTczODU2MjA5MTUwMzI3JVwiLFxuICAgICAgY29sb3I6IFwiIzliOTE4YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUwLjQ5MDE5NjA3ODQzMTM3JSA2Ny40ODM2NjAxMzA3MTg5NiUsNDMuODcyNTQ5MDE5NjA3ODQ1JSA3NC44MzY2MDEzMDcxODk1NCUsNTEuOTYwNzg0MzEzNzI1NSUgNzYuNDcwNTg4MjM1Mjk0MTIlXCIsXG4gICAgICBjb2xvcjogXCIjZTQ0MjAyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjAuODMzMzMzMzMzMzMzMzM2JSA0Ni40MDUyMjg3NTgxNjk5MyUsMzMuODIzNTI5NDExNzY0NzElIDU4Ljk4NjkyODEwNDU3NTE2JSwzNy41JSAzNC45NjczMjAyNjE0Mzc5MDUlXCIsXG4gICAgICBjb2xvcjogXCIjYjQ5NDhhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuMTY2NjY2NjY2NjY2NjY0JSAzMi4wMjYxNDM3OTA4NDk2NyUsMzcuNSUgMzQuOTY3MzIwMjYxNDM3OTA1JSw1OS4wNjg2Mjc0NTA5ODAzOTQlIDM5LjA1MjI4NzU4MTY5OTM0NiVcIixcbiAgICAgIGNvbG9yOiBcIiM0ZjNkMzFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyMS4zMjM1Mjk0MTE3NjQ3MDclIDAlLDI1LjczNTI5NDExNzY0NzA1OCUgMTkuNjA3ODQzMTM3MjU0OTAzJSw1My42NzY0NzA1ODgyMzUyOSUgMTcuOTczODU2MjA5MTUwMzI3JVwiLFxuICAgICAgY29sb3I6IFwiIzVlNzQ3MlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQzLjg3MjU0OTAxOTYwNzg0NSUgNzQuODM2NjAxMzA3MTg5NTQlLDI3LjIwNTg4MjM1Mjk0MTE3NCUgODIuMDI2MTQzNzkwODQ5NjclLDUxLjk2MDc4NDMxMzcyNTUlIDc2LjQ3MDU4ODIzNTI5NDEyJVwiLFxuICAgICAgY29sb3I6IFwiI2Q3NDAwY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjMzLjgyMzUyOTQxMTc2NDcxJSA1OC45ODY5MjgxMDQ1NzUxNiUsNTAuNDkwMTk2MDc4NDMxMzclIDY3LjQ4MzY2MDEzMDcxODk2JSw2MC41MzkyMTU2ODYyNzQ1JSA2My4zOTg2OTI4MTA0NTc1MSVcIixcbiAgICAgIGNvbG9yOiBcIiNjZThhNzVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyNy4yMDU4ODIzNTI5NDExNzQlIDgyLjAyNjE0Mzc5MDg0OTY3JSwyNy4yMDU4ODIzNTI5NDExNzQlIDEwNS4yMjg3NTgxNjk5MzQ2NSUsNjAuNTM5MjE1Njg2Mjc0NSUgMTAzLjI2Nzk3Mzg1NjIwOTE3JVwiLFxuICAgICAgY29sb3I6IFwiI2M2MzIwNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjI3LjIwNTg4MjM1Mjk0MTE3NCUgMTA1LjIyODc1ODE2OTkzNDY1JSw0My44NzI1NDkwMTk2MDc4NDUlIDExMC40NTc1MTYzMzk4NjkyOSUsNjAuNTM5MjE1Njg2Mjc0NSUgMTAzLjI2Nzk3Mzg1NjIwOTE3JVwiLFxuICAgICAgY29sb3I6IFwiI2RhM2QwMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM3LjUlIDM0Ljk2NzMyMDI2MTQzNzkwNSUsMzMuODIzNTI5NDExNzY0NzElIDU4Ljk4NjkyODEwNDU3NTE2JSw1OS4wNjg2Mjc0NTA5ODAzOTQlIDM5LjA1MjI4NzU4MTY5OTM0NiVcIixcbiAgICAgIGNvbG9yOiBcIiM2ZDQ3M2NcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1My42NzY0NzA1ODgyMzUyOSUgMTcuOTczODU2MjA5MTUwMzI3JSw0Mi40MDE5NjA3ODQzMTM3MiUgMzAuNTU1NTU1NTU1NTU1NTU3JSw1NC4xNjY2NjY2NjY2NjY2NjQlIDMyLjAyNjE0Mzc5MDg0OTY3JVwiLFxuICAgICAgY29sb3I6IFwiI2IyODE3M1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUxLjk2MDc4NDMxMzcyNTUlIDc2LjQ3MDU4ODIzNTI5NDEyJSw2MC41MzkyMTU2ODYyNzQ1JSAxMDMuMjY3OTczODU2MjA5MTclLDY4LjYyNzQ1MDk4MDM5MjE1JSA4Ny40MTgzMDA2NTM1OTQ3NyVcIixcbiAgICAgIGNvbG9yOiBcIiMyZjI3MjhcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1MS45NjA3ODQzMTM3MjU1JSA3Ni40NzA1ODgyMzUyOTQxMiUsMjcuMjA1ODgyMzUyOTQxMTc0JSA4Mi4wMjYxNDM3OTA4NDk2NyUsNjAuNTM5MjE1Njg2Mjc0NSUgMTAzLjI2Nzk3Mzg1NjIwOTE3JVwiLFxuICAgICAgY29sb3I6IFwiI2QyMzkwZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU5LjA2ODYyNzQ1MDk4MDM5NCUgMzkuMDUyMjg3NTgxNjk5MzQ2JSwzMy44MjM1Mjk0MTE3NjQ3MSUgNTguOTg2OTI4MTA0NTc1MTYlLDYwLjUzOTIxNTY4NjI3NDUlIDYzLjM5ODY5MjgxMDQ1NzUxJVwiLFxuICAgICAgY29sb3I6IFwiIzc3NzI2YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYwLjUzOTIxNTY4NjI3NDUlIDYzLjM5ODY5MjgxMDQ1NzUxJSw1MS45NjA3ODQzMTM3MjU1JSA3Ni40NzA1ODgyMzUyOTQxMiUsNjcuMTU2ODYyNzQ1MDk4MDQlIDY0LjA1MjI4NzU4MTY5OTM1JVwiLFxuICAgICAgY29sb3I6IFwiI2RhNzE0Y1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUwLjQ5MDE5NjA3ODQzMTM3JSA2Ny40ODM2NjAxMzA3MTg5NiUsNTEuOTYwNzg0MzEzNzI1NSUgNzYuNDcwNTg4MjM1Mjk0MTIlLDYwLjUzOTIxNTY4NjI3NDUlIDYzLjM5ODY5MjgxMDQ1NzUxJVwiLFxuICAgICAgY29sb3I6IFwiI2U1NTMxM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU0LjE2NjY2NjY2NjY2NjY2NCUgMzIuMDI2MTQzNzkwODQ5NjclLDU5LjA2ODYyNzQ1MDk4MDM5NCUgMzkuMDUyMjg3NTgxNjk5MzQ2JSw3NS43MzUyOTQxMTc2NDcwNiUgMzUuNjIwOTE1MDMyNjc5NzQlXCIsXG4gICAgICBjb2xvcjogXCIjNDU0MzNiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTkuMDY4NjI3NDUwOTgwMzk0JSAzOS4wNTIyODc1ODE2OTkzNDYlLDcwLjgzMzMzMzMzMzMzMzM0JSA0MC44NDk2NzMyMDI2MTQzNzYlLDc1LjczNTI5NDExNzY0NzA2JSAzNS42MjA5MTUwMzI2Nzk3NCVcIixcbiAgICAgIGNvbG9yOiBcIiM1MDU1NGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2MC41MzkyMTU2ODYyNzQ1JSA2My4zOTg2OTI4MTA0NTc1MSUsNjcuMTU2ODYyNzQ1MDk4MDQlIDY0LjA1MjI4NzU4MTY5OTM1JSw3Ny4yMDU4ODIzNTI5NDExNyUgNjAuNDU3NTE2MzM5ODY5MjglXCIsXG4gICAgICBjb2xvcjogXCIjYmMzYjIzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzAuODMzMzMzMzMzMzMzMzQlIDQwLjg0OTY3MzIwMjYxNDM3NiUsNjAuNTM5MjE1Njg2Mjc0NSUgNjMuMzk4NjkyODEwNDU3NTElLDc3LjIwNTg4MjM1Mjk0MTE3JSA2MC40NTc1MTYzMzk4NjkyOCVcIixcbiAgICAgIGNvbG9yOiBcIiNjZWM0YzBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2OC42Mjc0NTA5ODAzOTIxNSUgODcuNDE4MzAwNjUzNTk0NzclLDYwLjUzOTIxNTY4NjI3NDUlIDEwMy4yNjc5NzM4NTYyMDkxNyUsNzcuMjA1ODgyMzUyOTQxMTclIDkxLjgzMDA2NTM1OTQ3NzEyJVwiLFxuICAgICAgY29sb3I6IFwiIzU2MjAxN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU5LjA2ODYyNzQ1MDk4MDM5NCUgMzkuMDUyMjg3NTgxNjk5MzQ2JSw2MC41MzkyMTU2ODYyNzQ1JSA2My4zOTg2OTI4MTA0NTc1MSUsNzAuODMzMzMzMzMzMzMzMzQlIDQwLjg0OTY3MzIwMjYxNDM3NiVcIixcbiAgICAgIGNvbG9yOiBcIiM4ZjlkOWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1My42NzY0NzA1ODgyMzUyOSUgMTcuOTczODU2MjA5MTUwMzI3JSw1NC4xNjY2NjY2NjY2NjY2NjQlIDMyLjAyNjE0Mzc5MDg0OTY3JSw3NS43MzUyOTQxMTc2NDcwNiUgMzUuNjIwOTE1MDMyNjc5NzQlXCIsXG4gICAgICBjb2xvcjogXCIjNzM2MjViXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzcuMjA1ODgyMzUyOTQxMTclIDkxLjgzMDA2NTM1OTQ3NzEyJSw2MC41MzkyMTU2ODYyNzQ1JSAxMDMuMjY3OTczODU2MjA5MTclLDg1LjI5NDExNzY0NzA1ODgzJSA5NS45MTUwMzI2Nzk3Mzg1NiVcIixcbiAgICAgIGNvbG9yOiBcIiMxNjJlMjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2Ny4xNTY4NjI3NDUwOTgwNCUgNjQuMDUyMjg3NTgxNjk5MzUlLDUxLjk2MDc4NDMxMzcyNTUlIDc2LjQ3MDU4ODIzNTI5NDEyJSw2OC42Mjc0NTA5ODAzOTIxNSUgODcuNDE4MzAwNjUzNTk0NzclXCIsXG4gICAgICBjb2xvcjogXCIjZjQ2MTEwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjcuMTU2ODYyNzQ1MDk4MDQlIDY0LjA1MjI4NzU4MTY5OTM1JSw2OC42Mjc0NTA5ODAzOTIxNSUgODcuNDE4MzAwNjUzNTk0NzclLDkzLjg3MjU0OTAxOTYwNzg1JSA2OS4yODEwNDU3NTE2MzM5OCVcIixcbiAgICAgIGNvbG9yOiBcIiM2NzIwMTRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3Ny4yMDU4ODIzNTI5NDExNyUgNjAuNDU3NTE2MzM5ODY5MjglLDY3LjE1Njg2Mjc0NTA5ODA0JSA2NC4wNTIyODc1ODE2OTkzNSUsOTMuODcyNTQ5MDE5NjA3ODUlIDY5LjI4MTA0NTc1MTYzMzk4JVwiLFxuICAgICAgY29sb3I6IFwiI2RmNTUxOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc3LjIwNTg4MjM1Mjk0MTE3JSA5MS44MzAwNjUzNTk0NzcxMiUsODUuMjk0MTE3NjQ3MDU4ODMlIDk1LjkxNTAzMjY3OTczODU2JSw5My44NzI1NDkwMTk2MDc4NSUgODguODg4ODg4ODg4ODg4ODklXCIsXG4gICAgICBjb2xvcjogXCIjZWM1OTEzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjguNjI3NDUwOTgwMzkyMTUlIDg3LjQxODMwMDY1MzU5NDc3JSw3Ny4yMDU4ODIzNTI5NDExNyUgOTEuODMwMDY1MzU5NDc3MTIlLDkzLjg3MjU0OTAxOTYwNzg1JSA4OC44ODg4ODg4ODg4ODg4OSVcIixcbiAgICAgIGNvbG9yOiBcIiNmMDY0MThcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2OC42Mjc0NTA5ODAzOTIxNSUgODcuNDE4MzAwNjUzNTk0NzclLDkzLjg3MjU0OTAxOTYwNzg1JSA4OC44ODg4ODg4ODg4ODg4OSUsOTMuODcyNTQ5MDE5NjA3ODUlIDY5LjI4MTA0NTc1MTYzMzk4JVwiLFxuICAgICAgY29sb3I6IFwiI2U0NDkwNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjkzLjg3MjU0OTAxOTYwNzg1JSA4OC44ODg4ODg4ODg4ODg4OSUsODUuMjk0MTE3NjQ3MDU4ODMlIDk1LjkxNTAzMjY3OTczODU2JSwxMDEuOTYwNzg0MzEzNzI1NDglIDkyLjQ4MzY2MDEzMDcxODk2JVwiLFxuICAgICAgY29sb3I6IFwiI2Y3NWIwZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjg1LjI5NDExNzY0NzA1ODgzJSA5NS45MTUwMzI2Nzk3Mzg1NiUsOTkuNzU0OTAxOTYwNzg0MzElIDk5LjgzNjYwMTMwNzE4OTU0JSwxMDEuOTYwNzg0MzEzNzI1NDglIDkyLjQ4MzY2MDEzMDcxODk2JVwiLFxuICAgICAgY29sb3I6IFwiI2YxNTEwNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjg1LjI5NDExNzY0NzA1ODgzJSA5NS45MTUwMzI2Nzk3Mzg1NiUsNjAuNTM5MjE1Njg2Mjc0NSUgMTAzLjI2Nzk3Mzg1NjIwOTE3JSw5OS43NTQ5MDE5NjA3ODQzMSUgOTkuODM2NjAxMzA3MTg5NTQlXCIsXG4gICAgICBjb2xvcjogXCIjZjQ1YzAzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjcuMjA1ODgyMzUyOTQxMTc0JSAxMDUuMjI4NzU4MTY5OTM0NjUlLDAlIDk5LjgzNjYwMTMwNzE4OTU0JSw0My44NzI1NDkwMTk2MDc4NDUlIDExMC40NTc1MTYzMzk4NjkyOSVcIixcbiAgICAgIGNvbG9yOiBcIiM3YzIxMWZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3NS43MzUyOTQxMTc2NDcwNiUgMzUuNjIwOTE1MDMyNjc5NzQlLDcwLjgzMzMzMzMzMzMzMzM0JSA0MC44NDk2NzMyMDI2MTQzNzYlLDc3LjIwNTg4MjM1Mjk0MTE3JSA2MC40NTc1MTYzMzk4NjkyOCVcIixcbiAgICAgIGNvbG9yOiBcIiNkNzg0NmNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3NS43MzUyOTQxMTc2NDcwNiUgMzUuNjIwOTE1MDMyNjc5NzQlLDc3LjIwNTg4MjM1Mjk0MTE3JSA2MC40NTc1MTYzMzk4NjkyOCUsOTMuODcyNTQ5MDE5NjA3ODUlIDY5LjI4MTA0NTc1MTYzMzk4JVwiLFxuICAgICAgY29sb3I6IFwiI2QzNTIyMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYwLjUzOTIxNTY4NjI3NDUlIDEwMy4yNjc5NzM4NTYyMDkxNyUsNDMuODcyNTQ5MDE5NjA3ODQ1JSAxMTAuNDU3NTE2MzM5ODY5MjklLDk5Ljc1NDkwMTk2MDc4NDMxJSA5OS44MzY2MDEzMDcxODk1NCVcIixcbiAgICAgIGNvbG9yOiBcIiNhODI3MTBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI5My44NzI1NDkwMTk2MDc4NSUgNjkuMjgxMDQ1NzUxNjMzOTglLDkzLjg3MjU0OTAxOTYwNzg1JSA4OC44ODg4ODg4ODg4ODg4OSUsMTAxLjk2MDc4NDMxMzcyNTQ4JSA5Mi40ODM2NjAxMzA3MTg5NiVcIixcbiAgICAgIGNvbG9yOiBcIiNmYjY3MWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxMDEuOTYwNzg0MzEzNzI1NDglIDkyLjQ4MzY2MDEzMDcxODk2JSw5OS43NTQ5MDE5NjA3ODQzMSUgOTkuODM2NjAxMzA3MTg5NTQlLDExMC41MzkyMTU2ODYyNzQ1MiUgOTcuNzEyNDE4MzAwNjUzNiVcIixcbiAgICAgIGNvbG9yOiBcIiNmYjVmMGNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxMDMuNjc2NDcwNTg4MjM1MyUgMTIuNDE4MzAwNjUzNTk0NzcyJSw5My44NzI1NDkwMTk2MDc4NSUgNjkuMjgxMDQ1NzUxNjMzOTglLDExMC41MzkyMTU2ODYyNzQ1MiUgOTcuNzEyNDE4MzAwNjUzNiVcIixcbiAgICAgIGNvbG9yOiBcIiNmNTU1MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI5My44NzI1NDkwMTk2MDc4NSUgNjkuMjgxMDQ1NzUxNjMzOTglLDEwMS45NjA3ODQzMTM3MjU0OCUgOTIuNDgzNjYwMTMwNzE4OTYlLDExMC41MzkyMTU2ODYyNzQ1MiUgOTcuNzEyNDE4MzAwNjUzNiVcIixcbiAgICAgIGNvbG9yOiBcIiNmMTc1M2ZcIixcbiAgICB9LFxuICBdLFxufTtcblxuZXhwb3J0IGNvbnN0IGRhdGE0ID0ge1xuICBoZWlnaHQ6IFwiNjEyXCIsXG4gIHdpZHRoOiBcIjQwOFwiLFxuICBwb2x5Z29uczogW1xuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1Ljg4MjM1Mjk0MTE3NjQ3JSAyNC4xODMwMDY1MzU5NDc3MSUsOS44MDM5MjE1Njg2Mjc0NTIlIDMwLjM5MjE1Njg2Mjc0NTA5NyUsMTUuMTk2MDc4NDMxMzcyNTQ4JSAyNS44MTY5OTM0NjQwNTIyOTIlXCIsXG4gICAgICBjb2xvcjogXCIjNjE0MTI3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTMuNzI1NDkwMTk2MDc4NDMyJSAxMC40NTc1MTYzMzk4NjkyODElLDE2LjE3NjQ3MDU4ODIzNTI5MyUgMTEuNDM3OTA4NDk2NzMyMDI2JSwxNi4xNzY0NzA1ODgyMzUyOTMlIDkuNDc3MTI0MTgzMDA2NTM2JVwiLFxuICAgICAgY29sb3I6IFwiIzQ3NDQzY1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjEzLjcyNTQ5MDE5NjA3ODQzMiUgMTAuNDU3NTE2MzM5ODY5MjgxJSwxNi4xNzY0NzA1ODgyMzUyOTMlIDEyLjQxODMwMDY1MzU5NDc3MiUsMTYuMTc2NDcwNTg4MjM1MjkzJSAxMS40Mzc5MDg0OTY3MzIwMjYlXCIsXG4gICAgICBjb2xvcjogXCIjNTM1MDQ3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTMuNzI1NDkwMTk2MDc4NDMyJSAxMC40NTc1MTYzMzk4NjkyODElLDkuODAzOTIxNTY4NjI3NDUyJSAxMy4zOTg2OTI4MTA0NTc1MTclLDE2LjE3NjQ3MDU4ODIzNTI5MyUgMTIuNDE4MzAwNjUzNTk0NzcyJVwiLFxuICAgICAgY29sb3I6IFwiIzI4MjQxZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjcuMzUyOTQxMTc2NDcwNTg5JSAxOC45NTQyNDgzNjYwMTMwNzIlLDUuODgyMzUyOTQxMTc2NDclIDI0LjE4MzAwNjUzNTk0NzcxJSwxNS4xOTYwNzg0MzEzNzI1NDglIDI1LjgxNjk5MzQ2NDA1MjI5MiVcIixcbiAgICAgIGNvbG9yOiBcIiM5NjY0NDdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI5LjgwMzkyMTU2ODYyNzQ1MiUgMzAuMzkyMTU2ODYyNzQ1MDk3JSwxNy4xNTY4NjI3NDUwOTgwNCUgMzQuMzEzNzI1NDkwMTk2MDglLDE4LjEzNzI1NDkwMTk2MDc4NCUgMzIuMDI2MTQzNzkwODQ5NjclXCIsXG4gICAgICBjb2xvcjogXCIjMzczMzJhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTMuNzI1NDkwMTk2MDc4NDMyJSAxMC40NTc1MTYzMzk4NjkyODElLDE2LjE3NjQ3MDU4ODIzNTI5MyUgOS40NzcxMjQxODMwMDY1MzYlLDE5LjExNzY0NzA1ODgyMzUzJSA2LjIwOTE1MDMyNjc5NzM4NiVcIixcbiAgICAgIGNvbG9yOiBcIiNhNjg2NmVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxNS4xOTYwNzg0MzEzNzI1NDglIDI1LjgxNjk5MzQ2NDA1MjI5MiUsOS44MDM5MjE1Njg2Mjc0NTIlIDMwLjM5MjE1Njg2Mjc0NTA5NyUsMTguMTM3MjU0OTAxOTYwNzg0JSAzMi4wMjYxNDM3OTA4NDk2NyVcIixcbiAgICAgIGNvbG9yOiBcIiM0MDM5MmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxMy43MjU0OTAxOTYwNzg0MzIlIDYxLjExMTExMTExMTExMTExNCUsMTIuNzQ1MDk4MDM5MjE1Njg1JSA2My4wNzE4OTU0MjQ4MzY2JSwyMi4wNTg4MjM1Mjk0MTE3NjQlIDYyLjA5MTUwMzI2Nzk3Mzg1NiVcIixcbiAgICAgIGNvbG9yOiBcIiNmZDc1MDBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI5LjgwMzkyMTU2ODYyNzQ1MiUgMTMuMzk4NjkyODEwNDU3NTE3JSw3LjM1Mjk0MTE3NjQ3MDU4OSUgMTguOTU0MjQ4MzY2MDEzMDcyJSwxNi4xNzY0NzA1ODgyMzUyOTMlIDEyLjQxODMwMDY1MzU5NDc3MiVcIixcbiAgICAgIGNvbG9yOiBcIiMzMDJjMWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxNi4xNzY0NzA1ODgyMzUyOTMlIDEyLjQxODMwMDY1MzU5NDc3MiUsNy4zNTI5NDExNzY0NzA1ODklIDE4Ljk1NDI0ODM2NjAxMzA3MiUsMjIuNTQ5MDE5NjA3ODQzMTQlIDE3Ljk3Mzg1NjIwOTE1MDMyNyVcIixcbiAgICAgIGNvbG9yOiBcIiMyMzI3MjNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxOC4xMzcyNTQ5MDE5NjA3ODQlIDMyLjAyNjE0Mzc5MDg0OTY3JSwxNy4xNTY4NjI3NDUwOTgwNCUgMzQuMzEzNzI1NDkwMTk2MDglLDIzLjAzOTIxNTY4NjI3NDUxJSAzNS4yOTQxMTc2NDcwNTg4MjYlXCIsXG4gICAgICBjb2xvcjogXCIjNzE1MjM1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNy4zNTI5NDExNzY0NzA1ODklIDE4Ljk1NDI0ODM2NjAxMzA3MiUsMTUuMTk2MDc4NDMxMzcyNTQ4JSAyNS44MTY5OTM0NjQwNTIyOTIlLDIyLjU0OTAxOTYwNzg0MzE0JSAxNy45NzM4NTYyMDkxNTAzMjclXCIsXG4gICAgICBjb2xvcjogXCIjOWE3ZjZjXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTIuNzQ1MDk4MDM5MjE1Njg1JSA2My4wNzE4OTU0MjQ4MzY2JSwxMi4yNTQ5MDE5NjA3ODQzMTMlIDc4LjQzMTM3MjU0OTAxOTYxJSwyNC4wMTk2MDc4NDMxMzcyNTUlIDczLjg1NjIwOTE1MDMyNjglXCIsXG4gICAgICBjb2xvcjogXCIjZmI2NzA4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTIuMjU0OTAxOTYwNzg0MzEzJSA3OC40MzEzNzI1NDkwMTk2MSUsMCUgODQuOTY3MzIwMjYxNDM3OSUsMjMuMDM5MjE1Njg2Mjc0NTElIDgyLjY3OTczODU2MjA5MTUlXCIsXG4gICAgICBjb2xvcjogXCIjZmY2ZDAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTUuMTk2MDc4NDMxMzcyNTQ4JSAyNS44MTY5OTM0NjQwNTIyOTIlLDIyLjA1ODgyMzUyOTQxMTc2NCUgMjQuODM2NjAxMzA3MTg5NTQzJSwyMi41NDkwMTk2MDc4NDMxNCUgMTcuOTczODU2MjA5MTUwMzI3JVwiLFxuICAgICAgY29sb3I6IFwiIzc3NWU1OFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjE1LjE5NjA3ODQzMTM3MjU0OCUgMjUuODE2OTkzNDY0MDUyMjkyJSwxOC4xMzcyNTQ5MDE5NjA3ODQlIDMyLjAyNjE0Mzc5MDg0OTY3JSwyMi4wNTg4MjM1Mjk0MTE3NjQlIDI0LjgzNjYwMTMwNzE4OTU0MyVcIixcbiAgICAgIGNvbG9yOiBcIiM2MTVlNTVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxMi43NDUwOTgwMzkyMTU2ODUlIDYzLjA3MTg5NTQyNDgzNjYlLDI0LjAxOTYwNzg0MzEzNzI1NSUgNzMuODU2MjA5MTUwMzI2OCUsMjUuNDkwMTk2MDc4NDMxMzclIDcwLjI2MTQzNzkwODQ5NjczJVwiLFxuICAgICAgY29sb3I6IFwiI2YzNGEwNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjEyLjI1NDkwMTk2MDc4NDMxMyUgNzguNDMxMzcyNTQ5MDE5NjElLDIzLjAzOTIxNTY4NjI3NDUxJSA4Mi42Nzk3Mzg1NjIwOTE1JSwyNS40OTAxOTYwNzg0MzEzNyUgNzkuNDExNzY0NzA1ODgyMzUlXCIsXG4gICAgICBjb2xvcjogXCIjYmUyZDA1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjQuMDE5NjA3ODQzMTM3MjU1JSA3My44NTYyMDkxNTAzMjY4JSwxMi4yNTQ5MDE5NjA3ODQzMTMlIDc4LjQzMTM3MjU0OTAxOTYxJSwyNS40OTAxOTYwNzg0MzEzNyUgNzkuNDExNzY0NzA1ODgyMzUlXCIsXG4gICAgICBjb2xvcjogXCIjYzgzOTE1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjIuNTQ5MDE5NjA3ODQzMTQlIDE3Ljk3Mzg1NjIwOTE1MDMyNyUsMjIuMDU4ODIzNTI5NDExNzY0JSAyNC44MzY2MDEzMDcxODk1NDMlLDI2LjQ3MDU4ODIzNTI5NDEyJSAyMS4yNDE4MzAwNjUzNTk0NzYlXCIsXG4gICAgICBjb2xvcjogXCIjNGE0YjQ1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjIuMDU4ODIzNTI5NDExNzY0JSA2Mi4wOTE1MDMyNjc5NzM4NTYlLDEyLjc0NTA5ODAzOTIxNTY4NSUgNjMuMDcxODk1NDI0ODM2NiUsMjUuNDkwMTk2MDc4NDMxMzclIDcwLjI2MTQzNzkwODQ5NjczJVwiLFxuICAgICAgY29sb3I6IFwiI2ZiNWQwMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjIzLjAzOTIxNTY4NjI3NDUxJSAzNS4yOTQxMTc2NDcwNTg4MjYlLDE3LjE1Njg2Mjc0NTA5ODA0JSAzNC4zMTM3MjU0OTAxOTYwOCUsMjYuOTYwNzg0MzEzNzI1NDklIDQxLjE3NjQ3MDU4ODIzNTI5JVwiLFxuICAgICAgY29sb3I6IFwiIzU0MmYyM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjAlIDg0Ljk2NzMyMDI2MTQzNzklLDAlIDk5LjgzNjYwMTMwNzE4OTU0JSwyNS45ODAzOTIxNTY4NjI3NSUgOTcuMDU4ODIzNTI5NDExNzclXCIsXG4gICAgICBjb2xvcjogXCIjZjI1MjAxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjMuMDM5MjE1Njg2Mjc0NTElIDgyLjY3OTczODU2MjA5MTUlLDAlIDg0Ljk2NzMyMDI2MTQzNzklLDI3Ljk0MTE3NjQ3MDU4ODIzNiUgODkuMjE1Njg2Mjc0NTA5OCVcIixcbiAgICAgIGNvbG9yOiBcIiM3ZDIwMGRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIwJSA4NC45NjczMjAyNjE0Mzc5JSwyNS45ODAzOTIxNTY4NjI3NSUgOTcuMDU4ODIzNTI5NDExNzclLDI3Ljk0MTE3NjQ3MDU4ODIzNiUgODkuMjE1Njg2Mjc0NTA5OCVcIixcbiAgICAgIGNvbG9yOiBcIiNkZjQ1MWZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyNC4wMTk2MDc4NDMxMzcyNTUlIDczLjg1NjIwOTE1MDMyNjglLDI1LjQ5MDE5NjA3ODQzMTM3JSA3OS40MTE3NjQ3MDU4ODIzNSUsMjkuOTAxOTYwNzg0MzEzNzI2JSA3Ni4xNDM3OTA4NDk2NzMyJVwiLFxuICAgICAgY29sb3I6IFwiI2ZkNzYyN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjI4LjQzMTM3MjU0OTAxOTYwNiUgMi42MTQzNzkwODQ5NjczMjAzJSwyMi4wNTg4MjM1Mjk0MTE3NjQlIDQuOTAxOTYwNzg0MzEzNzI2JSwzMC44ODIzNTI5NDExNzY0NyUgNy4xODk1NDI0ODM2NjAxMyVcIixcbiAgICAgIGNvbG9yOiBcIiNhYThmN2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyMi4wNTg4MjM1Mjk0MTE3NjQlIDQuOTAxOTYwNzg0MzEzNzI2JSwxOS4xMTc2NDcwNTg4MjM1MyUgNi4yMDkxNTAzMjY3OTczODYlLDMwLjg4MjM1Mjk0MTE3NjQ3JSA3LjE4OTU0MjQ4MzY2MDEzJVwiLFxuICAgICAgY29sb3I6IFwiIzgyNjk1OVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjIzLjAzOTIxNTY4NjI3NDUxJSA4Mi42Nzk3Mzg1NjIwOTE1JSwyNy45NDExNzY0NzA1ODgyMzYlIDg5LjIxNTY4NjI3NDUwOTglLDMxLjg2Mjc0NTA5ODAzOTIxMyUgODUuOTQ3NzEyNDE4MzAwNjUlXCIsXG4gICAgICBjb2xvcjogXCIjYTgyNzBmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTkuMTE3NjQ3MDU4ODIzNTMlIDYuMjA5MTUwMzI2Nzk3Mzg2JSwxNi4xNzY0NzA1ODgyMzUyOTMlIDExLjQzNzkwODQ5NjczMjAyNiUsMzAuODgyMzUyOTQxMTc2NDclIDcuMTg5NTQyNDgzNjYwMTMlXCIsXG4gICAgICBjb2xvcjogXCIjNzA2MzU5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMTYuMTc2NDcwNTg4MjM1MjkzJSA5LjQ3NzEyNDE4MzAwNjUzNiUsMTYuMTc2NDcwNTg4MjM1MjkzJSAxMS40Mzc5MDg0OTY3MzIwMjYlLDE5LjExNzY0NzA1ODgyMzUzJSA2LjIwOTE1MDMyNjc5NzM4NiVcIixcbiAgICAgIGNvbG9yOiBcIiMzOTJmMjdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyOC45MjE1Njg2Mjc0NTA5ODQlIDQ0LjQ0NDQ0NDQ0NDQ0NDQ0JSwyMi4wNTg4MjM1Mjk0MTE3NjQlIDYyLjA5MTUwMzI2Nzk3Mzg1NiUsMzMuMzMzMzMzMzMzMzMzMzMlIDU5LjE1MDMyNjc5NzM4NTYyNCVcIixcbiAgICAgIGNvbG9yOiBcIiNmYTg2MmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyMi4wNTg4MjM1Mjk0MTE3NjQlIDYyLjA5MTUwMzI2Nzk3Mzg1NiUsMzMuMzMzMzMzMzMzMzMzMzMlIDYwLjEzMDcxODk1NDI0ODM2NiUsMzMuMzMzMzMzMzMzMzMzMzMlIDU5LjE1MDMyNjc5NzM4NTYyNCVcIixcbiAgICAgIGNvbG9yOiBcIiNmYjlkNWJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyMi4wNTg4MjM1Mjk0MTE3NjQlIDYyLjA5MTUwMzI2Nzk3Mzg1NiUsMjUuNDkwMTk2MDc4NDMxMzclIDcwLjI2MTQzNzkwODQ5NjczJSwzMy4zMzMzMzMzMzMzMzMzMyUgNjAuMTMwNzE4OTU0MjQ4MzY2JVwiLFxuICAgICAgY29sb3I6IFwiI2ZhNzczMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjI3Ljk0MTE3NjQ3MDU4ODIzNiUgODkuMjE1Njg2Mjc0NTA5OCUsMjUuOTgwMzkyMTU2ODYyNzUlIDk3LjA1ODgyMzUyOTQxMTc3JSwzMi44NDMxMzcyNTQ5MDE5NiUgOTEuNTAzMjY3OTczODU2MjElXCIsXG4gICAgICBjb2xvcjogXCIjYmEzNTBlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzEuODYyNzQ1MDk4MDM5MjEzJSA4NS45NDc3MTI0MTgzMDA2NSUsMjcuOTQxMTc2NDcwNTg4MjM2JSA4OS4yMTU2ODYyNzQ1MDk4JSwzMi44NDMxMzcyNTQ5MDE5NiUgOTEuNTAzMjY3OTczODU2MjElXCIsXG4gICAgICBjb2xvcjogXCIjZTg1ZDE5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjUuNDkwMTk2MDc4NDMxMzclIDc5LjQxMTc2NDcwNTg4MjM1JSwyMy4wMzkyMTU2ODYyNzQ1MSUgODIuNjc5NzM4NTYyMDkxNSUsMzEuODYyNzQ1MDk4MDM5MjEzJSA4NS45NDc3MTI0MTgzMDA2NSVcIixcbiAgICAgIGNvbG9yOiBcIiNkNDNlMGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIxNi4xNzY0NzA1ODgyMzUyOTMlIDExLjQzNzkwODQ5NjczMjAyNiUsMTYuMTc2NDcwNTg4MjM1MjkzJSAxMi40MTgzMDA2NTM1OTQ3NzIlLDMwLjg4MjM1Mjk0MTE3NjQ3JSA3LjE4OTU0MjQ4MzY2MDEzJVwiLFxuICAgICAgY29sb3I6IFwiIzUzNTQ1NlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjE2LjE3NjQ3MDU4ODIzNTI5MyUgMTIuNDE4MzAwNjUzNTk0NzcyJSwyMi41NDkwMTk2MDc4NDMxNCUgMTcuOTczODU2MjA5MTUwMzI3JSwzMC44ODIzNTI5NDExNzY0NyUgNy4xODk1NDI0ODM2NjAxMyVcIixcbiAgICAgIGNvbG9yOiBcIiM1MjRjNDJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyNS40OTAxOTYwNzg0MzEzNyUgNzAuMjYxNDM3OTA4NDk2NzMlLDI0LjAxOTYwNzg0MzEzNzI1NSUgNzMuODU2MjA5MTUwMzI2OCUsMjkuOTAxOTYwNzg0MzEzNzI2JSA3Ni4xNDM3OTA4NDk2NzMyJVwiLFxuICAgICAgY29sb3I6IFwiI2ZkN2MyMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjEzLjcyNTQ5MDE5NjA3ODQzMiUgNjEuMTExMTExMTExMTExMTE0JSwyMi4wNTg4MjM1Mjk0MTE3NjQlIDYyLjA5MTUwMzI2Nzk3Mzg1NiUsMjguOTIxNTY4NjI3NDUwOTg0JSA0NC40NDQ0NDQ0NDQ0NDQ0NCVcIixcbiAgICAgIGNvbG9yOiBcIiNmMmE5NjVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyMi4wNTg4MjM1Mjk0MTE3NjQlIDI0LjgzNjYwMTMwNzE4OTU0MyUsMTguMTM3MjU0OTAxOTYwNzg0JSAzMi4wMjYxNDM3OTA4NDk2NyUsMjMuMDM5MjE1Njg2Mjc0NTElIDM1LjI5NDExNzY0NzA1ODgyNiVcIixcbiAgICAgIGNvbG9yOiBcIiMxNDIyMWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyMi41NDkwMTk2MDc4NDMxNCUgMTcuOTczODU2MjA5MTUwMzI3JSwyNi40NzA1ODgyMzUyOTQxMiUgMjEuMjQxODMwMDY1MzU5NDc2JSwzOS4yMTU2ODYyNzQ1MDk4MSUgMTQuMDUyMjg3NTgxNjk5MzQ2JVwiLFxuICAgICAgY29sb3I6IFwiIzE4MjMyMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjMwLjg4MjM1Mjk0MTE3NjQ3JSA3LjE4OTU0MjQ4MzY2MDEzJSwyMi41NDkwMTk2MDc4NDMxNCUgMTcuOTczODU2MjA5MTUwMzI3JSwzOS4yMTU2ODYyNzQ1MDk4MSUgMTQuMDUyMjg3NTgxNjk5MzQ2JVwiLFxuICAgICAgY29sb3I6IFwiIzQzNGI0NlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjI5LjkwMTk2MDc4NDMxMzcyNiUgNzYuMTQzNzkwODQ5NjczMiUsMjUuNDkwMTk2MDc4NDMxMzclIDc5LjQxMTc2NDcwNTg4MjM1JSwzOS4yMTU2ODYyNzQ1MDk4MSUgODAuMzkyMTU2ODYyNzQ1MSVcIixcbiAgICAgIGNvbG9yOiBcIiNkMzQyMTNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyNS40OTAxOTYwNzg0MzEzNyUgNzkuNDExNzY0NzA1ODgyMzUlLDMxLjg2Mjc0NTA5ODAzOTIxMyUgODUuOTQ3NzEyNDE4MzAwNjUlLDM5LjIxNTY4NjI3NDUwOTgxJSA4MC4zOTIxNTY4NjI3NDUxJVwiLFxuICAgICAgY29sb3I6IFwiI2I3MzgwOVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjIzLjAzOTIxNTY4NjI3NDUxJSAzNS4yOTQxMTc2NDcwNTg4MjYlLDI2Ljk2MDc4NDMxMzcyNTQ5JSA0MS4xNzY0NzA1ODgyMzUyOSUsNDAuNjg2Mjc0NTA5ODAzOTIlIDM2LjI3NDUwOTgwMzkyMTU3JVwiLFxuICAgICAgY29sb3I6IFwiIzY3NDUyZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjI1LjQ5MDE5NjA3ODQzMTM3JSA3MC4yNjE0Mzc5MDg0OTY3MyUsMjkuOTAxOTYwNzg0MzEzNzI2JSA3Ni4xNDM3OTA4NDk2NzMyJSw0Mi4xNTY4NjI3NDUwOTgwNCUgNzIuNTQ5MDE5NjA3ODQzMTQlXCIsXG4gICAgICBjb2xvcjogXCIjZmQ2ZjAyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzkuMjE1Njg2Mjc0NTA5ODElIDE0LjA1MjI4NzU4MTY5OTM0NiUsMjYuNDcwNTg4MjM1Mjk0MTIlIDIxLjI0MTgzMDA2NTM1OTQ3NiUsNDIuNjQ3MDU4ODIzNTI5NDElIDIxLjg5NTQyNDgzNjYwMTMwOCVcIixcbiAgICAgIGNvbG9yOiBcIiMxMjI5MmFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIyOC45MjE1Njg2Mjc0NTA5ODQlIDQ0LjQ0NDQ0NDQ0NDQ0NDQ0JSwzMy4zMzMzMzMzMzMzMzMzMyUgNTkuMTUwMzI2Nzk3Mzg1NjI0JSw0Mi42NDcwNTg4MjM1Mjk0MSUgNTEuNjMzOTg2OTI4MTA0NTg0JVwiLFxuICAgICAgY29sb3I6IFwiI2NhYjdhOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjMzLjMzMzMzMzMzMzMzMzMzJSA2MC4xMzA3MTg5NTQyNDgzNjYlLDI1LjQ5MDE5NjA3ODQzMTM3JSA3MC4yNjE0Mzc5MDg0OTY3MyUsNDIuNjQ3MDU4ODIzNTI5NDElIDY2LjMzOTg2OTI4MTA0NTc1JVwiLFxuICAgICAgY29sb3I6IFwiI2U3NGIxMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjI1LjQ5MDE5NjA3ODQzMTM3JSA3MC4yNjE0Mzc5MDg0OTY3MyUsNDIuMTU2ODYyNzQ1MDk4MDQlIDcyLjU0OTAxOTYwNzg0MzE0JSw0Mi42NDcwNTg4MjM1Mjk0MSUgNjYuMzM5ODY5MjgxMDQ1NzUlXCIsXG4gICAgICBjb2xvcjogXCIjZjE1NjAyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjYuOTYwNzg0MzEzNzI1NDklIDQxLjE3NjQ3MDU4ODIzNTI5JSwyOC45MjE1Njg2Mjc0NTA5ODQlIDQ0LjQ0NDQ0NDQ0NDQ0NDQ0JSw0Mi4xNTY4NjI3NDUwOTgwNCUgMzcuMjU0OTAxOTYwNzg0MzE2JVwiLFxuICAgICAgY29sb3I6IFwiIzcwNWU1MFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQwLjY4NjI3NDUwOTgwMzkyJSAzNi4yNzQ1MDk4MDM5MjE1NyUsMjYuOTYwNzg0MzEzNzI1NDklIDQxLjE3NjQ3MDU4ODIzNTI5JSw0Mi4xNTY4NjI3NDUwOTgwNCUgMzcuMjU0OTAxOTYwNzg0MzE2JVwiLFxuICAgICAgY29sb3I6IFwiIzZkNGUzYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjI5LjkwMTk2MDc4NDMxMzcyNiUgNzYuMTQzNzkwODQ5NjczMiUsMzkuMjE1Njg2Mjc0NTA5ODElIDgwLjM5MjE1Njg2Mjc0NTElLDQyLjE1Njg2Mjc0NTA5ODA0JSA3Mi41NDkwMTk2MDc4NDMxNCVcIixcbiAgICAgIGNvbG9yOiBcIiNmODYwMDlcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzMC44ODIzNTI5NDExNzY0NyUgNy4xODk1NDI0ODM2NjAxMyUsMzkuMjE1Njg2Mjc0NTA5ODElIDE0LjA1MjI4NzU4MTY5OTM0NiUsNDUuMDk4MDM5MjE1Njg2MjglIDguMTY5OTM0NjQwNTIyODc1JVwiLFxuICAgICAgY29sb3I6IFwiIzViNmQ2YVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjIyLjA1ODgyMzUyOTQxMTc2NCUgMjQuODM2NjAxMzA3MTg5NTQzJSwyMy4wMzkyMTU2ODYyNzQ1MSUgMzUuMjk0MTE3NjQ3MDU4ODI2JSw0MC42ODYyNzQ1MDk4MDM5MiUgMzYuMjc0NTA5ODAzOTIxNTclXCIsXG4gICAgICBjb2xvcjogXCIjMDMxMTExXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjYuNDcwNTg4MjM1Mjk0MTIlIDIxLjI0MTgzMDA2NTM1OTQ3NiUsMjIuMDU4ODIzNTI5NDExNzY0JSAyNC44MzY2MDEzMDcxODk1NDMlLDQyLjY0NzA1ODgyMzUyOTQxJSAyMS44OTU0MjQ4MzY2MDEzMDglXCIsXG4gICAgICBjb2xvcjogXCIjMDMyMTIzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDIuNjQ3MDU4ODIzNTI5NDElIDIxLjg5NTQyNDgzNjYwMTMwOCUsNDUuMDk4MDM5MjE1Njg2MjglIDIyLjU0OTAxOTYwNzg0MzE0JSw0Ny4wNTg4MjM1Mjk0MTE3NiUgMTkuNjA3ODQzMTM3MjU0OTAzJVwiLFxuICAgICAgY29sb3I6IFwiIzIzMzMzNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ1LjU4ODIzNTI5NDExNzY0NSUgMTUuMDMyNjc5NzM4NTYyMDkxJSw0Mi42NDcwNTg4MjM1Mjk0MSUgMjEuODk1NDI0ODM2NjAxMzA4JSw0Ny4wNTg4MjM1Mjk0MTE3NiUgMTkuNjA3ODQzMTM3MjU0OTAzJVwiLFxuICAgICAgY29sb3I6IFwiIzRmNWE1NlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM5LjIxNTY4NjI3NDUwOTgxJSAxNC4wNTIyODc1ODE2OTkzNDYlLDQyLjY0NzA1ODgyMzUyOTQxJSAyMS44OTU0MjQ4MzY2MDEzMDglLDQ1LjU4ODIzNTI5NDExNzY0NSUgMTUuMDMyNjc5NzM4NTYyMDkxJVwiLFxuICAgICAgY29sb3I6IFwiIzA4MWMxYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjIyLjA1ODgyMzUyOTQxMTc2NCUgMjQuODM2NjAxMzA3MTg5NTQzJSw0MC42ODYyNzQ1MDk4MDM5MiUgMzYuMjc0NTA5ODAzOTIxNTclLDQyLjY0NzA1ODgyMzUyOTQxJSAyMS44OTU0MjQ4MzY2MDEzMDglXCIsXG4gICAgICBjb2xvcjogXCIjMTQyMTFjXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDIuNjQ3MDU4ODIzNTI5NDElIDIxLjg5NTQyNDgzNjYwMTMwOCUsNDAuNjg2Mjc0NTA5ODAzOTIlIDM2LjI3NDUwOTgwMzkyMTU3JSw0OC4wMzkyMTU2ODYyNzQ1MSUgMjguNDMxMzcyNTQ5MDE5NjA2JVwiLFxuICAgICAgY29sb3I6IFwiI2JjN2Y2YlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ1LjA5ODAzOTIxNTY4NjI4JSAyMi41NDkwMTk2MDc4NDMxNCUsNDIuNjQ3MDU4ODIzNTI5NDElIDIxLjg5NTQyNDgzNjYwMTMwOCUsNDguMDM5MjE1Njg2Mjc0NTElIDI4LjQzMTM3MjU0OTAxOTYwNiVcIixcbiAgICAgIGNvbG9yOiBcIiM2NjcyNmJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0Mi42NDcwNTg4MjM1Mjk0MSUgNjYuMzM5ODY5MjgxMDQ1NzUlLDQyLjE1Njg2Mjc0NTA5ODA0JSA3Mi41NDkwMTk2MDc4NDMxNCUsNDUuODMzMzMzMzMzMzMzMzMlIDY2LjY2NjY2NjY2NjY2NjY2JVwiLFxuICAgICAgY29sb3I6IFwiIzk3MjQwYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ1LjA5ODAzOTIxNTY4NjI4JSA4LjE2OTkzNDY0MDUyMjg3NSUsMzkuMjE1Njg2Mjc0NTA5ODElIDE0LjA1MjI4NzU4MTY5OTM0NiUsNDUuNTg4MjM1Mjk0MTE3NjQ1JSAxNS4wMzI2Nzk3Mzg1NjIwOTElXCIsXG4gICAgICBjb2xvcjogXCIjMDExMjEyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjguNDMxMzcyNTQ5MDE5NjA2JSAyLjYxNDM3OTA4NDk2NzMyMDMlLDMwLjg4MjM1Mjk0MTE3NjQ3JSA3LjE4OTU0MjQ4MzY2MDEzJSw0NS4wOTgwMzkyMTU2ODYyOCUgOC4xNjk5MzQ2NDA1MjI4NzUlXCIsXG4gICAgICBjb2xvcjogXCIjNjI2MzU4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzEuODYyNzQ1MDk4MDM5MjEzJSA4NS45NDc3MTI0MTgzMDA2NSUsMzIuODQzMTM3MjU0OTAxOTYlIDkxLjUwMzI2Nzk3Mzg1NjIxJSw1MCUgOTAuMTk2MDc4NDMxMzcyNTYlXCIsXG4gICAgICBjb2xvcjogXCIjZmQ4MzJjXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMzkuMjE1Njg2Mjc0NTA5ODElIDgwLjM5MjE1Njg2Mjc0NTElLDMxLjg2Mjc0NTA5ODAzOTIxMyUgODUuOTQ3NzEyNDE4MzAwNjUlLDUwJSA5MC4xOTYwNzg0MzEzNzI1NiVcIixcbiAgICAgIGNvbG9yOiBcIiNhNDJjMGRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0Mi4xNTY4NjI3NDUwOTgwNCUgMzcuMjU0OTAxOTYwNzg0MzE2JSwyOC45MjE1Njg2Mjc0NTA5ODQlIDQ0LjQ0NDQ0NDQ0NDQ0NDQ0JSw0Mi42NDcwNTg4MjM1Mjk0MSUgNTEuNjMzOTg2OTI4MTA0NTg0JVwiLFxuICAgICAgY29sb3I6IFwiIzgwNmQ2MFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUwJSA5MC4xOTYwNzg0MzEzNzI1NiUsMzIuODQzMTM3MjU0OTAxOTYlIDkxLjUwMzI2Nzk3Mzg1NjIxJSw1MS45NjA3ODQzMTM3MjU1JSA5My40NjQwNTIyODc1ODE3JVwiLFxuICAgICAgY29sb3I6IFwiI2M1MzMwNVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQyLjE1Njg2Mjc0NTA5ODA0JSAzNy4yNTQ5MDE5NjA3ODQzMTYlLDQyLjY0NzA1ODgyMzUyOTQxJSA1MS42MzM5ODY5MjgxMDQ1ODQlLDUwJSAzOS41NDI0ODM2NjAxMzA3MiVcIixcbiAgICAgIGNvbG9yOiBcIiM4ZTY0NTNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzMy4zMzMzMzMzMzMzMzMzMyUgNTkuMTUwMzI2Nzk3Mzg1NjI0JSwzMy4zMzMzMzMzMzMzMzMzMyUgNjAuMTMwNzE4OTU0MjQ4MzY2JSw0Mi42NDcwNTg4MjM1Mjk0MSUgNjYuMzM5ODY5MjgxMDQ1NzUlXCIsXG4gICAgICBjb2xvcjogXCIjZTk3MTQxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDIuNjQ3MDU4ODIzNTI5NDElIDUxLjYzMzk4NjkyODEwNDU4NCUsNDkuNTA5ODAzOTIxNTY4NjMlIDUwLjY1MzU5NDc3MTI0MTgzJSw1MCUgMzkuNTQyNDgzNjYwMTMwNzIlXCIsXG4gICAgICBjb2xvcjogXCIjYjFhOTlkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDAuNjg2Mjc0NTA5ODAzOTIlIDM2LjI3NDUwOTgwMzkyMTU3JSw0Mi4xNTY4NjI3NDUwOTgwNCUgMzcuMjU0OTAxOTYwNzg0MzE2JSw0OC4wMzkyMTU2ODYyNzQ1MSUgMjguNDMxMzcyNTQ5MDE5NjA2JVwiLFxuICAgICAgY29sb3I6IFwiIzc3NWE0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ1LjU4ODIzNTI5NDExNzY0NSUgMTUuMDMyNjc5NzM4NTYyMDkxJSw1NC40MTE3NjQ3MDU4ODIzNSUgMTYuOTkzNDY0MDUyMjg3NTglLDU0LjQxMTc2NDcwNTg4MjM1JSAxNi4wMTMwNzE4OTU0MjQ4MzclXCIsXG4gICAgICBjb2xvcjogXCIjNWE2YTVmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDUuNTg4MjM1Mjk0MTE3NjQ1JSAxNS4wMzI2Nzk3Mzg1NjIwOTElLDQ3LjA1ODgyMzUyOTQxMTc2JSAxOS42MDc4NDMxMzcyNTQ5MDMlLDU0LjQxMTc2NDcwNTg4MjM1JSAxNi45OTM0NjQwNTIyODc1OCVcIixcbiAgICAgIGNvbG9yOiBcIiM2NTYzNTVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0Ny4wNTg4MjM1Mjk0MTE3NiUgMTkuNjA3ODQzMTM3MjU0OTAzJSw0NS4wOTgwMzkyMTU2ODYyOCUgMjIuNTQ5MDE5NjA3ODQzMTQlLDU0LjQxMTc2NDcwNTg4MjM1JSAyMy4yMDI2MTQzNzkwODQ5NjclXCIsXG4gICAgICBjb2xvcjogXCIjMmY1MzUzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDkuNTA5ODAzOTIxNTY4NjMlIDUwLjY1MzU5NDc3MTI0MTgzJSw1My45MjE1Njg2Mjc0NTA5OCUgNDkuNjczMjAyNjE0Mzc5MDg2JSw1NC40MTE3NjQ3MDU4ODIzNSUgNDcuMDU4ODIzNTI5NDExNzYlXCIsXG4gICAgICBjb2xvcjogXCIjNTY1YTU0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTAlIDM5LjU0MjQ4MzY2MDEzMDcyJSw1NC40MTE3NjQ3MDU4ODIzNSUgNDcuMDU4ODIzNTI5NDExNzYlLDU0LjkwMTk2MDc4NDMxMzczJSA0Mi4xNTY4NjI3NDUwOTgwNCVcIixcbiAgICAgIGNvbG9yOiBcIiM3ZjVhNGFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0NS4wOTgwMzkyMTU2ODYyOCUgMjIuNTQ5MDE5NjA3ODQzMTQlLDQ4LjAzOTIxNTY4NjI3NDUxJSAyOC40MzEzNzI1NDkwMTk2MDYlLDU0LjQxMTc2NDcwNTg4MjM1JSAyMy4yMDI2MTQzNzkwODQ5NjclXCIsXG4gICAgICBjb2xvcjogXCIjOWY4ZDg5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTAlIDM5LjU0MjQ4MzY2MDEzMDcyJSw0OS41MDk4MDM5MjE1Njg2MyUgNTAuNjUzNTk0NzcxMjQxODMlLDU0LjQxMTc2NDcwNTg4MjM1JSA0Ny4wNTg4MjM1Mjk0MTE3NiVcIixcbiAgICAgIGNvbG9yOiBcIiM4ZDg3N2JcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzMi44NDMxMzcyNTQ5MDE5NiUgOTEuNTAzMjY3OTczODU2MjElLDI1Ljk4MDM5MjE1Njg2Mjc1JSA5Ny4wNTg4MjM1Mjk0MTE3NyUsNTEuOTYwNzg0MzEzNzI1NSUgOTMuNDY0MDUyMjg3NTgxNyVcIixcbiAgICAgIGNvbG9yOiBcIiNmZDgxMzBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCIzMy4zMzMzMzMzMzMzMzMzMyUgNTkuMTUwMzI2Nzk3Mzg1NjI0JSw0Mi42NDcwNTg4MjM1Mjk0MSUgNjYuMzM5ODY5MjgxMDQ1NzUlLDQyLjY0NzA1ODgyMzUyOTQxJSA1MS42MzM5ODY5MjgxMDQ1ODQlXCIsXG4gICAgICBjb2xvcjogXCIjZGFjN2I4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTAlIDkwLjE5NjA3ODQzMTM3MjU2JSw1MS45NjA3ODQzMTM3MjU1JSA5My40NjQwNTIyODc1ODE3JSw1Ni44NjI3NDUwOTgwMzkyMSUgOTIuNDgzNjYwMTMwNzE4OTYlXCIsXG4gICAgICBjb2xvcjogXCIjYjEyZjBiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDIuNjQ3MDU4ODIzNTI5NDElIDUxLjYzMzk4NjkyODEwNDU4NCUsNDUuODMzMzMzMzMzMzMzMzMlIDY2LjY2NjY2NjY2NjY2NjY2JSw1NC45MDE5NjA3ODQzMTM3MyUgNjQuNzA1ODgyMzUyOTQxMTclXCIsXG4gICAgICBjb2xvcjogXCIjYWI4MDY5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDUuMDk4MDM5MjE1Njg2MjglIDguMTY5OTM0NjQwNTIyODc1JSw0NS41ODgyMzUyOTQxMTc2NDUlIDE1LjAzMjY3OTczODU2MjA5MSUsNTQuNDExNzY0NzA1ODgyMzUlIDE2LjAxMzA3MTg5NTQyNDgzNyVcIixcbiAgICAgIGNvbG9yOiBcIiMyOTNmM2RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0Ny4wNTg4MjM1Mjk0MTE3NiUgMTkuNjA3ODQzMTM3MjU0OTAzJSw1NC40MTE3NjQ3MDU4ODIzNSUgMjMuMjAyNjE0Mzc5MDg0OTY3JSw1NC40MTE3NjQ3MDU4ODIzNSUgMTYuOTkzNDY0MDUyMjg3NTglXCIsXG4gICAgICBjb2xvcjogXCIjMTgzOTNjXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDguMDM5MjE1Njg2Mjc0NTElIDI4LjQzMTM3MjU0OTAxOTYwNiUsNDIuMTU2ODYyNzQ1MDk4MDQlIDM3LjI1NDkwMTk2MDc4NDMxNiUsNTAlIDM5LjU0MjQ4MzY2MDEzMDcyJVwiLFxuICAgICAgY29sb3I6IFwiIzE3MWExN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQyLjY0NzA1ODgyMzUyOTQxJSA1MS42MzM5ODY5MjgxMDQ1ODQlLDQyLjY0NzA1ODgyMzUyOTQxJSA2Ni4zMzk4NjkyODEwNDU3NSUsNDUuODMzMzMzMzMzMzMzMzMlIDY2LjY2NjY2NjY2NjY2NjY2JVwiLFxuICAgICAgY29sb3I6IFwiI2Q2YjZhYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU0LjQxMTc2NDcwNTg4MjM1JSA0Ny4wNTg4MjM1Mjk0MTE3NiUsNTMuOTIxNTY4NjI3NDUwOTglIDQ5LjY3MzIwMjYxNDM3OTA4NiUsNTguODIzNTI5NDExNzY0NzElIDQ4LjY5MjgxMDQ1NzUxNjM0JVwiLFxuICAgICAgY29sb3I6IFwiIzNlNDYzZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjQ5LjUwOTgwMzkyMTU2ODYzJSA1MC42NTM1OTQ3NzEyNDE4MyUsNDIuNjQ3MDU4ODIzNTI5NDElIDUxLjYzMzk4NjkyODEwNDU4NCUsNTQuOTAxOTYwNzg0MzEzNzMlIDY0LjcwNTg4MjM1Mjk0MTE3JVwiLFxuICAgICAgY29sb3I6IFwiI2RhY2RjNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjM5LjIxNTY4NjI3NDUwOTgxJSA4MC4zOTIxNTY4NjI3NDUxJSw1MCUgOTAuMTk2MDc4NDMxMzcyNTYlLDYwLjc4NDMxMzcyNTQ5MDE5JSA4My42NjAxMzA3MTg5NTQyNSVcIixcbiAgICAgIGNvbG9yOiBcIiNlYjRkMGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0NS44MzMzMzMzMzMzMzMzMyUgNjYuNjY2NjY2NjY2NjY2NjYlLDQyLjE1Njg2Mjc0NTA5ODA0JSA3Mi41NDkwMTk2MDc4NDMxNCUsNjAuMjk0MTE3NjQ3MDU4ODIlIDY3Ljk3Mzg1NjIwOTE1MDMzJVwiLFxuICAgICAgY29sb3I6IFwiI2VhNGQwYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU0LjkwMTk2MDc4NDMxMzczJSA2NC43MDU4ODIzNTI5NDExNyUsNDUuODMzMzMzMzMzMzMzMzMlIDY2LjY2NjY2NjY2NjY2NjY2JSw2MC4yOTQxMTc2NDcwNTg4MiUgNjcuOTczODU2MjA5MTUwMzMlXCIsXG4gICAgICBjb2xvcjogXCIjY2U4MzcwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuNDExNzY0NzA1ODgyMzUlIDIzLjIwMjYxNDM3OTA4NDk2NyUsNDguMDM5MjE1Njg2Mjc0NTElIDI4LjQzMTM3MjU0OTAxOTYwNiUsNjIuMjU0OTAxOTYwNzg0MzE2JSAyNi43OTczODU2MjA5MTUwMzMlXCIsXG4gICAgICBjb2xvcjogXCIjYTM3ZDcyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuOTAxOTYwNzg0MzEzNzMlIDQyLjE1Njg2Mjc0NTA5ODA0JSw1NC40MTE3NjQ3MDU4ODIzNSUgNDcuMDU4ODIzNTI5NDExNzYlLDYyLjc0NTA5ODAzOTIxNTY4NCUgNDUuMDk4MDM5MjE1Njg2MjglXCIsXG4gICAgICBjb2xvcjogXCIjOTlhMjllXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuNDExNzY0NzA1ODgyMzUlIDQ3LjA1ODgyMzUyOTQxMTc2JSw1OC44MjM1Mjk0MTE3NjQ3MSUgNDguNjkyODEwNDU3NTE2MzQlLDYyLjc0NTA5ODAzOTIxNTY4NCUgNDUuMDk4MDM5MjE1Njg2MjglXCIsXG4gICAgICBjb2xvcjogXCIjOGI5Mjg2XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTAlIDkwLjE5NjA3ODQzMTM3MjU2JSw1Ni44NjI3NDUwOTgwMzkyMSUgOTIuNDgzNjYwMTMwNzE4OTYlLDYwLjc4NDMxMzcyNTQ5MDE5JSA4My42NjAxMzA3MTg5NTQyNSVcIixcbiAgICAgIGNvbG9yOiBcIiNkMTNiMDFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI0OC4wMzkyMTU2ODYyNzQ1MSUgMjguNDMxMzcyNTQ5MDE5NjA2JSw1MCUgMzkuNTQyNDgzNjYwMTMwNzIlLDYzLjcyNTQ5MDE5NjA3ODQyNSUgMzMuMDA2NTM1OTQ3NzEyNDE1JVwiLFxuICAgICAgY29sb3I6IFwiIzdmNTg0N1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYwLjc4NDMxMzcyNTQ5MDE5JSA4My42NjAxMzA3MTg5NTQyNSUsNTYuODYyNzQ1MDk4MDM5MjElIDkyLjQ4MzY2MDEzMDcxODk2JSw2My43MjU0OTAxOTYwNzg0MjUlIDg2LjkyODEwNDU3NTE2MzQlXCIsXG4gICAgICBjb2xvcjogXCIjZDQ1MTBiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNDIuMTU2ODYyNzQ1MDk4MDQlIDcyLjU0OTAxOTYwNzg0MzE0JSwzOS4yMTU2ODYyNzQ1MDk4MSUgODAuMzkyMTU2ODYyNzQ1MSUsNjAuNzg0MzEzNzI1NDkwMTklIDgzLjY2MDEzMDcxODk1NDI1JVwiLFxuICAgICAgY29sb3I6IFwiI2U3NDQwOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU2Ljg2Mjc0NTA5ODAzOTIxJSA5Mi40ODM2NjAxMzA3MTg5NiUsNTEuOTYwNzg0MzEzNzI1NSUgOTMuNDY0MDUyMjg3NTgxNyUsNjQuMjE1Njg2Mjc0NTA5OCUgOTUuNzUxNjMzOTg2OTI4MTElXCIsXG4gICAgICBjb2xvcjogXCIjYzEzODA1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjIuMjU0OTAxOTYwNzg0MzE2JSAyNi43OTczODU2MjA5MTUwMzMlLDQ4LjAzOTIxNTY4NjI3NDUxJSAyOC40MzEzNzI1NDkwMTk2MDYlLDYzLjcyNTQ5MDE5NjA3ODQyNSUgMzMuMDA2NTM1OTQ3NzEyNDE1JVwiLFxuICAgICAgY29sb3I6IFwiIzhjN2E3MFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUwJSAzOS41NDI0ODM2NjAxMzA3MiUsNTQuOTAxOTYwNzg0MzEzNzMlIDQyLjE1Njg2Mjc0NTA5ODA0JSw2My43MjU0OTAxOTYwNzg0MjUlIDMzLjAwNjUzNTk0NzcxMjQxNSVcIixcbiAgICAgIGNvbG9yOiBcIiM3MTYzNWFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2MC4yOTQxMTc2NDcwNTg4MiUgNjcuOTczODU2MjA5MTUwMzMlLDQyLjE1Njg2Mjc0NTA5ODA0JSA3Mi41NDkwMTk2MDc4NDMxNCUsNjAuNzg0MzEzNzI1NDkwMTklIDgzLjY2MDEzMDcxODk1NDI1JVwiLFxuICAgICAgY29sb3I6IFwiI2U4NGIwZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUzLjkyMTU2ODYyNzQ1MDk4JSA0OS42NzMyMDI2MTQzNzkwODYlLDQ5LjUwOTgwMzkyMTU2ODYzJSA1MC42NTM1OTQ3NzEyNDE4MyUsNTQuOTAxOTYwNzg0MzEzNzMlIDY0LjcwNTg4MjM1Mjk0MTE3JVwiLFxuICAgICAgY29sb3I6IFwiIzlhOTk5NFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU0LjQxMTc2NDcwNTg4MjM1JSAxNi45OTM0NjQwNTIyODc1OCUsNTQuNDExNzY0NzA1ODgyMzUlIDIzLjIwMjYxNDM3OTA4NDk2NyUsNjguNjI3NDUwOTgwMzkyMTUlIDIwLjI2MTQzNzkwODQ5NjczJVwiLFxuICAgICAgY29sb3I6IFwiIzQ3NTI0ZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU0LjQxMTc2NDcwNTg4MjM1JSAyMy4yMDI2MTQzNzkwODQ5NjclLDYyLjI1NDkwMTk2MDc4NDMxNiUgMjYuNzk3Mzg1NjIwOTE1MDMzJSw2OC42Mjc0NTA5ODAzOTIxNSUgMjAuMjYxNDM3OTA4NDk2NzMlXCIsXG4gICAgICBjb2xvcjogXCIjMjczYzM5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuNDExNzY0NzA1ODgyMzUlIDE2LjAxMzA3MTg5NTQyNDgzNyUsNTQuNDExNzY0NzA1ODgyMzUlIDE2Ljk5MzQ2NDA1MjI4NzU4JSw2OC42Mjc0NTA5ODAzOTIxNSUgMjAuMjYxNDM3OTA4NDk2NzMlXCIsXG4gICAgICBjb2xvcjogXCIjNTI1NzRmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjMuNzI1NDkwMTk2MDc4NDI1JSA4Ni45MjgxMDQ1NzUxNjM0JSw1Ni44NjI3NDUwOTgwMzkyMSUgOTIuNDgzNjYwMTMwNzE4OTYlLDY0LjIxNTY4NjI3NDUwOTglIDk1Ljc1MTYzMzk4NjkyODExJVwiLFxuICAgICAgY29sb3I6IFwiI2NkNDEwZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYwLjI5NDExNzY0NzA1ODgyJSA2Ny45NzM4NTYyMDkxNTAzMyUsNjAuNzg0MzEzNzI1NDkwMTklIDgzLjY2MDEzMDcxODk1NDI1JSw3MS4wNzg0MzEzNzI1NDkwMiUgNzcuMTI0MTgzMDA2NTM1OTYlXCIsXG4gICAgICBjb2xvcjogXCIjZGE0MDBhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjMuNzI1NDkwMTk2MDc4NDI1JSA4Ni45MjgxMDQ1NzUxNjM0JSw2NC4yMTU2ODYyNzQ1MDk4JSA5NS43NTE2MzM5ODY5MjgxMSUsNzEuMDc4NDMxMzcyNTQ5MDIlIDk0LjQ0NDQ0NDQ0NDQ0NDQ0JVwiLFxuICAgICAgY29sb3I6IFwiIzYxMWUxN1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU0LjkwMTk2MDc4NDMxMzczJSA0Mi4xNTY4NjI3NDUwOTgwNCUsNjIuNzQ1MDk4MDM5MjE1Njg0JSA0NS4wOTgwMzkyMTU2ODYyOCUsNjMuNzI1NDkwMTk2MDc4NDI1JSAzMy4wMDY1MzU5NDc3MTI0MTUlXCIsXG4gICAgICBjb2xvcjogXCIjYTg4Zjg5XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTMuOTIxNTY4NjI3NDUwOTglIDQ5LjY3MzIwMjYxNDM3OTA4NiUsNTQuOTAxOTYwNzg0MzEzNzMlIDY0LjcwNTg4MjM1Mjk0MTE3JSw1OC44MjM1Mjk0MTE3NjQ3MSUgNDguNjkyODEwNDU3NTE2MzQlXCIsXG4gICAgICBjb2xvcjogXCIjYjFiMmFkXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjMuNzI1NDkwMTk2MDc4NDI1JSAzMy4wMDY1MzU5NDc3MTI0MTUlLDYyLjc0NTA5ODAzOTIxNTY4NCUgNDUuMDk4MDM5MjE1Njg2MjglLDczLjAzOTIxNTY4NjI3NDUlIDM4LjIzNTI5NDExNzY0NzA2JVwiLFxuICAgICAgY29sb3I6IFwiIzYyNTI0Y1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYwLjI5NDExNzY0NzA1ODgyJSA2Ny45NzM4NTYyMDkxNTAzMyUsNzEuMDc4NDMxMzcyNTQ5MDIlIDc3LjEyNDE4MzAwNjUzNTk2JSw3My4wMzkyMTU2ODYyNzQ1JSA3NC44MzY2MDEzMDcxODk1NCVcIixcbiAgICAgIGNvbG9yOiBcIiNlODVkMWNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2MC43ODQzMTM3MjU0OTAxOSUgODMuNjYwMTMwNzE4OTU0MjUlLDYzLjcyNTQ5MDE5NjA3ODQyNSUgODYuOTI4MTA0NTc1MTYzNCUsNzMuMDM5MjE1Njg2Mjc0NSUgODEuMzcyNTQ5MDE5NjA3ODUlXCIsXG4gICAgICBjb2xvcjogXCIjZTM1OTFiXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzEuMDc4NDMxMzcyNTQ5MDIlIDc3LjEyNDE4MzAwNjUzNTk2JSw2MC43ODQzMTM3MjU0OTAxOSUgODMuNjYwMTMwNzE4OTU0MjUlLDczLjAzOTIxNTY4NjI3NDUlIDgxLjM3MjU0OTAxOTYwNzg1JVwiLFxuICAgICAgY29sb3I6IFwiI2Y3NmUzNlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUwJSAwJSw0NS4wOTgwMzkyMTU2ODYyOCUgOC4xNjk5MzQ2NDA1MjI4NzUlLDU0LjQxMTc2NDcwNTg4MjM1JSAxNi4wMTMwNzE4OTU0MjQ4MzclXCIsXG4gICAgICBjb2xvcjogXCIjNDg1YjQ4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzEuMDc4NDMxMzcyNTQ5MDIlIDk0LjQ0NDQ0NDQ0NDQ0NDQ0JSw2NC4yMTU2ODYyNzQ1MDk4JSA5NS43NTE2MzM5ODY5MjgxMSUsNzQuMDE5NjA3ODQzMTM3MjclIDk5LjAxOTYwNzg0MzEzNzI3JVwiLFxuICAgICAgY29sb3I6IFwiIzhmMjgxZFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjczLjAzOTIxNTY4NjI3NDUlIDM4LjIzNTI5NDExNzY0NzA2JSw2Mi43NDUwOTgwMzkyMTU2ODQlIDQ1LjA5ODAzOTIxNTY4NjI4JSw3NSUgNDMuMTM3MjU0OTAxOTYwNzklXCIsXG4gICAgICBjb2xvcjogXCIjOTY4YThhXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjMuNzI1NDkwMTk2MDc4NDI1JSA4Ni45MjgxMDQ1NzUxNjM0JSw3MS4wNzg0MzEzNzI1NDkwMiUgOTQuNDQ0NDQ0NDQ0NDQ0NDQlLDc0LjUwOTgwMzkyMTU2ODYzJSA4Ny45MDg0OTY3MzIwMjYxNCVcIixcbiAgICAgIGNvbG9yOiBcIiM1NTFhMTFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2MC4yOTQxMTc2NDcwNTg4MiUgNjcuOTczODU2MjA5MTUwMzMlLDczLjAzOTIxNTY4NjI3NDUlIDc0LjgzNjYwMTMwNzE4OTU0JSw3NS40OTAxOTYwNzg0MzEzNyUgNjguOTU0MjQ4MzY2MDEzMDglXCIsXG4gICAgICBjb2xvcjogXCIjZjI2YzJmXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzMuMDM5MjE1Njg2Mjc0NSUgODEuMzcyNTQ5MDE5NjA3ODUlLDYzLjcyNTQ5MDE5NjA3ODQyNSUgODYuOTI4MTA0NTc1MTYzNCUsNzQuNTA5ODAzOTIxNTY4NjMlIDg3LjkwODQ5NjczMjAyNjE0JVwiLFxuICAgICAgY29sb3I6IFwiIzgyMWUwYlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYwLjI5NDExNzY0NzA1ODgyJSA2Ny45NzM4NTYyMDkxNTAzMyUsNzUuNDkwMTk2MDc4NDMxMzclIDY4Ljk1NDI0ODM2NjAxMzA4JSw3OC45MjE1Njg2Mjc0NTA5OCUgNjMuNzI1NDkwMTk2MDc4NDI1JVwiLFxuICAgICAgY29sb3I6IFwiI2Y1NmQyZlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc4LjkyMTU2ODYyNzQ1MDk4JSA2My43MjU0OTAxOTYwNzg0MjUlLDc1LjQ5MDE5NjA3ODQzMTM3JSA2OC45NTQyNDgzNjYwMTMwOCUsNzkuOTAxOTYwNzg0MzEzNzMlIDY2Ljk5MzQ2NDA1MjI4NzU4JVwiLFxuICAgICAgY29sb3I6IFwiIzY5MjExM1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU0LjkwMTk2MDc4NDMxMzczJSA2NC43MDU4ODIzNTI5NDExNyUsNjAuMjk0MTE3NjQ3MDU4ODIlIDY3Ljk3Mzg1NjIwOTE1MDMzJSw3OC45MjE1Njg2Mjc0NTA5OCUgNjMuNzI1NDkwMTk2MDc4NDI1JVwiLFxuICAgICAgY29sb3I6IFwiI2NjODg3OVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjU4LjgyMzUyOTQxMTc2NDcxJSA0OC42OTI4MTA0NTc1MTYzNCUsODAuMzkyMTU2ODYyNzQ1MSUgNTYuNTM1OTQ3NzEyNDE4MyUsODAuMzkyMTU2ODYyNzQ1MSUgNTMuOTIxNTY4NjI3NDUwOTglXCIsXG4gICAgICBjb2xvcjogXCIjZDM3NjViXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTguODIzNTI5NDExNzY0NzElIDQ4LjY5MjgxMDQ1NzUxNjM0JSw1NC45MDE5NjA3ODQzMTM3MyUgNjQuNzA1ODgyMzUyOTQxMTclLDgwLjM5MjE1Njg2Mjc0NTElIDU2LjUzNTk0NzcxMjQxODMlXCIsXG4gICAgICBjb2xvcjogXCIjYmNiNmIxXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNTQuOTAxOTYwNzg0MzEzNzMlIDY0LjcwNTg4MjM1Mjk0MTE3JSw3OC45MjE1Njg2Mjc0NTA5OCUgNjMuNzI1NDkwMTk2MDc4NDI1JSw4MC4zOTIxNTY4NjI3NDUxJSA1Ni41MzU5NDc3MTI0MTgzJVwiLFxuICAgICAgY29sb3I6IFwiI2IzM2IxMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjYyLjc0NTA5ODAzOTIxNTY4NCUgNDUuMDk4MDM5MjE1Njg2MjglLDU4LjgyMzUyOTQxMTc2NDcxJSA0OC42OTI4MTA0NTc1MTYzNCUsODAuODgyMzUyOTQxMTc2NDglIDUyLjYxNDM3OTA4NDk2NzMyNSVcIixcbiAgICAgIGNvbG9yOiBcIiNhZmIxYjBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI1OC44MjM1Mjk0MTE3NjQ3MSUgNDguNjkyODEwNDU3NTE2MzQlLDgwLjM5MjE1Njg2Mjc0NTElIDUzLjkyMTU2ODYyNzQ1MDk4JSw4MC44ODIzNTI5NDExNzY0OCUgNTIuNjE0Mzc5MDg0OTY3MzI1JVwiLFxuICAgICAgY29sb3I6IFwiI2M4NWEzOFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc1JSA0My4xMzcyNTQ5MDE5NjA3OSUsNjIuNzQ1MDk4MDM5MjE1Njg0JSA0NS4wOTgwMzkyMTU2ODYyOCUsODAuODgyMzUyOTQxMTc2NDglIDUyLjYxNDM3OTA4NDk2NzMyNSVcIixcbiAgICAgIGNvbG9yOiBcIiNjZmI1YTFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4MC4zOTIxNTY4NjI3NDUxJSA1Ni41MzU5NDc3MTI0MTgzJSw3OC45MjE1Njg2Mjc0NTA5OCUgNjMuNzI1NDkwMTk2MDc4NDI1JSw4Mi44NDMxMzcyNTQ5MDE5NiUgNTcuODQzMTM3MjU0OTAxOTclXCIsXG4gICAgICBjb2xvcjogXCIjOGYyODExXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzUlIDQzLjEzNzI1NDkwMTk2MDc5JSw4MC44ODIzNTI5NDExNzY0OCUgNTIuNjE0Mzc5MDg0OTY3MzI1JSw4Mi4zNTI5NDExNzY0NzA1OCUgNDYuMDc4NDMxMzcyNTQ5MDIlXCIsXG4gICAgICBjb2xvcjogXCIjY2Y1YjI4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzEuMDc4NDMxMzcyNTQ5MDIlIDc3LjEyNDE4MzAwNjUzNTk2JSw3My4wMzkyMTU2ODYyNzQ1JSA4MS4zNzI1NDkwMTk2MDc4NSUsNzMuMDM5MjE1Njg2Mjc0NSUgNzQuODM2NjAxMzA3MTg5NTQlXCIsXG4gICAgICBjb2xvcjogXCIjNWIxZTExXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiODAuMzkyMTU2ODYyNzQ1MSUgNTMuOTIxNTY4NjI3NDUwOTglLDgwLjM5MjE1Njg2Mjc0NTElIDU2LjUzNTk0NzcxMjQxODMlLDg0LjgwMzkyMTU2ODYyNzQ0JSA1NS4yMjg3NTgxNjk5MzQ2NCVcIixcbiAgICAgIGNvbG9yOiBcIiNjNjQ3MjFcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4MC4zOTIxNTY4NjI3NDUxJSA1Ni41MzU5NDc3MTI0MTgzJSw4Mi44NDMxMzcyNTQ5MDE5NiUgNTcuODQzMTM3MjU0OTAxOTclLDg0LjgwMzkyMTU2ODYyNzQ0JSA1NS4yMjg3NTgxNjk5MzQ2NCVcIixcbiAgICAgIGNvbG9yOiBcIiNiNTQxMWRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4MC44ODIzNTI5NDExNzY0OCUgNTIuNjE0Mzc5MDg0OTY3MzI1JSw4MC4zOTIxNTY4NjI3NDUxJSA1My45MjE1Njg2Mjc0NTA5OCUsODQuODAzOTIxNTY4NjI3NDQlIDU1LjIyODc1ODE2OTkzNDY0JVwiLFxuICAgICAgY29sb3I6IFwiI2Q5NTgyYVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjUxLjk2MDc4NDMxMzcyNTUlIDkzLjQ2NDA1MjI4NzU4MTclLDI1Ljk4MDM5MjE1Njg2Mjc1JSA5Ny4wNTg4MjM1Mjk0MTE3NyUsNjQuMjE1Njg2Mjc0NTA5OCUgOTUuNzUxNjMzOTg2OTI4MTElXCIsXG4gICAgICBjb2xvcjogXCIjZGQ0MTExXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiODIuMzUyOTQxMTc2NDcwNTglIDQ2LjA3ODQzMTM3MjU0OTAyJSw4MC44ODIzNTI5NDExNzY0OCUgNTIuNjE0Mzc5MDg0OTY3MzI1JSw4OS43MDU4ODIzNTI5NDExNyUgNDcuNzEyNDE4MzAwNjUzNTk2JVwiLFxuICAgICAgY29sb3I6IFwiI2VlNzA0MlwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjgwLjg4MjM1Mjk0MTE3NjQ4JSA1Mi42MTQzNzkwODQ5NjczMjUlLDg0LjgwMzkyMTU2ODYyNzQ0JSA1NS4yMjg3NTgxNjk5MzQ2NCUsODkuNzA1ODgyMzUyOTQxMTclIDQ3LjcxMjQxODMwMDY1MzU5NiVcIixcbiAgICAgIGNvbG9yOiBcIiM3ZDIzMTNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3NS40OTAxOTYwNzg0MzEzNyUgNjguOTU0MjQ4MzY2MDEzMDglLDczLjAzOTIxNTY4NjI3NDUlIDc0LjgzNjYwMTMwNzE4OTU0JSw3OS45MDE5NjA3ODQzMTM3MyUgNjYuOTkzNDY0MDUyMjg3NTglXCIsXG4gICAgICBjb2xvcjogXCIjMWQxYzE3XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzEuMDc4NDMxMzcyNTQ5MDIlIDk0LjQ0NDQ0NDQ0NDQ0NDQ0JSw3NC4wMTk2MDc4NDMxMzcyNyUgOTkuMDE5NjA3ODQzMTM3MjclLDc0LjUwOTgwMzkyMTU2ODYzJSA4Ny45MDg0OTY3MzIwMjYxNCVcIixcbiAgICAgIGNvbG9yOiBcIiNkNjRhMjJcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2OC42Mjc0NTA5ODAzOTIxNSUgMjAuMjYxNDM3OTA4NDk2NzMlLDYzLjcyNTQ5MDE5NjA3ODQyNSUgMzMuMDA2NTM1OTQ3NzEyNDE1JSw3My4wMzkyMTU2ODYyNzQ1JSAzOC4yMzUyOTQxMTc2NDcwNiVcIixcbiAgICAgIGNvbG9yOiBcIiM4MTY5NTRcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI2Mi4yNTQ5MDE5NjA3ODQzMTYlIDI2Ljc5NzM4NTYyMDkxNTAzMyUsNjMuNzI1NDkwMTk2MDc4NDI1JSAzMy4wMDY1MzU5NDc3MTI0MTUlLDY4LjYyNzQ1MDk4MDM5MjE1JSAyMC4yNjE0Mzc5MDg0OTY3MyVcIixcbiAgICAgIGNvbG9yOiBcIiM2MDYxNWZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3My4wMzkyMTU2ODYyNzQ1JSA3NC44MzY2MDEzMDcxODk1NCUsNzMuMDM5MjE1Njg2Mjc0NSUgODEuMzcyNTQ5MDE5NjA3ODUlLDk1LjgzMzMzMzMzMzMzMzM0JSA3My4zNjYwMTMwNzE4OTU0MiVcIixcbiAgICAgIGNvbG9yOiBcIiNlODUwMGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3OS45MDE5NjA3ODQzMTM3MyUgNjYuOTkzNDY0MDUyMjg3NTglLDczLjAzOTIxNTY4NjI3NDUlIDc0LjgzNjYwMTMwNzE4OTU0JSw5NS44MzMzMzMzMzMzMzMzNCUgNzMuMzY2MDEzMDcxODk1NDIlXCIsXG4gICAgICBjb2xvcjogXCIjZmU3NzM1XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNjQuMjE1Njg2Mjc0NTA5OCUgOTUuNzUxNjMzOTg2OTI4MTElLDI1Ljk4MDM5MjE1Njg2Mjc1JSA5Ny4wNTg4MjM1Mjk0MTE3NyUsNzQuMDE5NjA3ODQzMTM3MjclIDk5LjAxOTYwNzg0MzEzNzI3JVwiLFxuICAgICAgY29sb3I6IFwiI2I5MmUwNFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjc4LjkyMTU2ODYyNzQ1MDk4JSA2My43MjU0OTAxOTYwNzg0MjUlLDc5LjkwMTk2MDc4NDMxMzczJSA2Ni45OTM0NjQwNTIyODc1OCUsOTkuNTA5ODAzOTIxNTY4NjMlIDY1LjM1OTQ3NzEyNDE4MyVcIixcbiAgICAgIGNvbG9yOiBcIiNmYTZmMmNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4Mi44NDMxMzcyNTQ5MDE5NiUgNTcuODQzMTM3MjU0OTAxOTclLDc4LjkyMTU2ODYyNzQ1MDk4JSA2My43MjU0OTAxOTYwNzg0MjUlLDk5LjUwOTgwMzkyMTU2ODYzJSA2NS4zNTk0NzcxMjQxODMlXCIsXG4gICAgICBjb2xvcjogXCIjZjc3MzMyXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiMjUuOTgwMzkyMTU2ODYyNzUlIDk3LjA1ODgyMzUyOTQxMTc3JSwwJSA5OS44MzY2MDEzMDcxODk1NCUsNzQuMDE5NjA3ODQzMTM3MjclIDk5LjAxOTYwNzg0MzEzNzI3JVwiLFxuICAgICAgY29sb3I6IFwiI2ZmNmUwMVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjczLjAzOTIxNTY4NjI3NDUlIDgxLjM3MjU0OTAxOTYwNzg1JSw3NC41MDk4MDM5MjE1Njg2MyUgODcuOTA4NDk2NzMyMDI2MTQlLDk1LjgzMzMzMzMzMzMzMzM0JSA3My4zNjYwMTMwNzE4OTU0MiVcIixcbiAgICAgIGNvbG9yOiBcIiNmNDVkMTdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4NC44MDM5MjE1Njg2Mjc0NCUgNTUuMjI4NzU4MTY5OTM0NjQlLDgyLjg0MzEzNzI1NDkwMTk2JSA1Ny44NDMxMzcyNTQ5MDE5NyUsOTkuNTA5ODAzOTIxNTY4NjMlIDY1LjM1OTQ3NzEyNDE4MyVcIixcbiAgICAgIGNvbG9yOiBcIiNkMTNhMGZcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI3OS45MDE5NjA3ODQzMTM3MyUgNjYuOTkzNDY0MDUyMjg3NTglLDk1LjgzMzMzMzMzMzMzMzM0JSA3My4zNjYwMTMwNzE4OTU0MiUsOTkuNTA5ODAzOTIxNTY4NjMlIDY1LjM1OTQ3NzEyNDE4MyVcIixcbiAgICAgIGNvbG9yOiBcIiNmNjc4M2RcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI4OS43MDU4ODIzNTI5NDExNyUgNDcuNzEyNDE4MzAwNjUzNTk2JSw4NC44MDM5MjE1Njg2Mjc0NCUgNTUuMjI4NzU4MTY5OTM0NjQlLDk5LjUwOTgwMzkyMTU2ODYzJSA2NS4zNTk0NzcxMjQxODMlXCIsXG4gICAgICBjb2xvcjogXCIjZWI0YjAwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzQuMDE5NjA3ODQzMTM3MjclIDk5LjAxOTYwNzg0MzEzNzI3JSwwJSA5OS44MzY2MDEzMDcxODk1NCUsOTkuNzU0OTAxOTYwNzg0MzElIDk5LjgzNjYwMTMwNzE4OTU0JVwiLFxuICAgICAgY29sb3I6IFwiIzYxMTgxMFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgcG9pbnRzOlxuICAgICAgICBcIjk1LjgzMzMzMzMzMzMzMzM0JSA3My4zNjYwMTMwNzE4OTU0MiUsNzQuNTA5ODAzOTIxNTY4NjMlIDg3LjkwODQ5NjczMjAyNjE0JSw5OS43NTQ5MDE5NjA3ODQzMSUgOTkuODM2NjAxMzA3MTg5NTQlXCIsXG4gICAgICBjb2xvcjogXCIjZjA1MzA4XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwb2ludHM6XG4gICAgICAgIFwiNzQuNTA5ODAzOTIxNTY4NjMlIDg3LjkwODQ5NjczMjAyNjE0JSw3NC4wMTk2MDc4NDMxMzcyNyUgOTkuMDE5NjA3ODQzMTM3MjclLDk5Ljc1NDkwMTk2MDc4NDMxJSA5OS44MzY2MDEzMDcxODk1NCVcIixcbiAgICAgIGNvbG9yOiBcIiNmYTZjMjNcIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHBvaW50czpcbiAgICAgICAgXCI5OS41MDk4MDM5MjE1Njg2MyUgNjUuMzU5NDc3MTI0MTgzJSw5NS44MzMzMzMzMzMzMzMzNCUgNzMuMzY2MDEzMDcxODk1NDIlLDk5Ljc1NDkwMTk2MDc4NDMxJSA5OS44MzY2MDEzMDcxODk1NCVcIixcbiAgICAgIGNvbG9yOiBcIiNmMTc0NDZcIixcbiAgICB9LFxuICBdLFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=