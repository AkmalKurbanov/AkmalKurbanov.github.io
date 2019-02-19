/*! @source http://purl.eligrey.com/github/classList.js/blob/master/classList.js */
"document"in self&&("classList"in document.createElement("_")&&(!document.createElementNS||"classList"in document.createElementNS("http://www.w3.org/2000/svg","g"))||!function(t){"use strict";if("Element"in t){var e="classList",n="prototype",i=t.Element[n],s=Object,r=String[n].trim||function(){return this.replace(/^\s+|\s+$/g,"")},o=Array[n].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1},c=function(t,e){this.name=t,this.code=DOMException[t],this.message=e},a=function(t,e){if(""===e)throw new c("SYNTAX_ERR","The token must not be empty.");if(/\s/.test(e))throw new c("INVALID_CHARACTER_ERR","The token must not contain space characters.");return o.call(t,e)},l=function(t){for(var e=r.call(t.getAttribute("class")||""),n=e?e.split(/\s+/):[],i=0,s=n.length;s>i;i++)this.push(n[i]);this._updateClassName=function(){t.setAttribute("class",this.toString())}},u=l[n]=[],h=function(){return new l(this)};if(c[n]=Error[n],u.item=function(t){return this[t]||null},u.contains=function(t){return~a(this,t+"")},u.add=function(){var t,e=arguments,n=0,i=e.length,s=!1;do t=e[n]+"",~a(this,t)||(this.push(t),s=!0);while(++n<i);s&&this._updateClassName()},u.remove=function(){var t,e,n=arguments,i=0,s=n.length,r=!1;do for(t=n[i]+"",e=a(this,t);~e;)this.splice(e,1),r=!0,e=a(this,t);while(++i<s);r&&this._updateClassName()},u.toggle=function(t,e){var n=this.contains(t),i=n?e!==!0&&"remove":e!==!1&&"add";return i&&this[i](t),e===!0||e===!1?e:!n},u.replace=function(t,e){var n=a(t+"");~n&&(this.splice(n,1,e),this._updateClassName())},u.toString=function(){return this.join(" ")},s.defineProperty){var f={get:h,enumerable:!0,configurable:!0};try{s.defineProperty(i,e,f)}catch(p){void 0!==p.number&&-2146823252!==p.number||(f.enumerable=!1,s.defineProperty(i,e,f))}}else s[n].__defineGetter__&&i.__defineGetter__(e,h)}}(self),function(){"use strict";var t=document.createElement("_");if(t.classList.add("c1","c2"),!t.classList.contains("c2")){var e=function(t){var e=DOMTokenList.prototype[t];DOMTokenList.prototype[t]=function(t){var n,i=arguments.length;for(n=0;i>n;n++)t=arguments[n],e.call(this,t)}};e("add"),e("remove")}if(t.classList.toggle("c3",!1),t.classList.contains("c3")){var n=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(t,e){return 1 in arguments&&!this.contains(t)==!e?e:n.call(this,t)}}"replace"in document.createElement("_").classList||(DOMTokenList.prototype.replace=function(t,e){var n=this.toString().split(" "),i=n.indexOf(t+"");~i&&(n=n.slice(i),this.remove.apply(this,n),this.add(e),this.add.apply(this,n.slice(1)))}),t=null}());
// Snap.svg 0.5.0
//
// Copyright (c) 2013 – 2017 Adobe Systems Incorporated. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// build: 2017-02-06

!function(a){var b,c,d="0.5.0",e="hasOwnProperty",f=/[\.\/]/,g=/\s*,\s*/,h="*",i=function(a,b){return a-b},j={n:{}},k=function(){for(var a=0,b=this.length;b>a;a++)if("undefined"!=typeof this[a])return this[a]},l=function(){for(var a=this.length;--a;)if("undefined"!=typeof this[a])return this[a]},m=Object.prototype.toString,n=String,o=Array.isArray||function(a){return a instanceof Array||"[object Array]"==m.call(a)};eve=function(a,d){var e,f=c,g=Array.prototype.slice.call(arguments,2),h=eve.listeners(a),j=0,m=[],n={},o=[],p=b;o.firstDefined=k,o.lastDefined=l,b=a,c=0;for(var q=0,r=h.length;r>q;q++)"zIndex"in h[q]&&(m.push(h[q].zIndex),h[q].zIndex<0&&(n[h[q].zIndex]=h[q]));for(m.sort(i);m[j]<0;)if(e=n[m[j++]],o.push(e.apply(d,g)),c)return c=f,o;for(q=0;r>q;q++)if(e=h[q],"zIndex"in e)if(e.zIndex==m[j]){if(o.push(e.apply(d,g)),c)break;do if(j++,e=n[m[j]],e&&o.push(e.apply(d,g)),c)break;while(e)}else n[e.zIndex]=e;else if(o.push(e.apply(d,g)),c)break;return c=f,b=p,o},eve._events=j,eve.listeners=function(a){var b,c,d,e,g,i,k,l,m=o(a)?a:a.split(f),n=j,p=[n],q=[];for(e=0,g=m.length;g>e;e++){for(l=[],i=0,k=p.length;k>i;i++)for(n=p[i].n,c=[n[m[e]],n[h]],d=2;d--;)b=c[d],b&&(l.push(b),q=q.concat(b.f||[]));p=l}return q},eve.separator=function(a){a?(a=n(a).replace(/(?=[\.\^\]\[\-])/g,"\\"),a="["+a+"]",f=new RegExp(a)):f=/[\.\/]/},eve.on=function(a,b){if("function"!=typeof b)return function(){};for(var c=o(a)?o(a[0])?a:[a]:n(a).split(g),d=0,e=c.length;e>d;d++)!function(a){for(var c,d=o(a)?a:n(a).split(f),e=j,g=0,h=d.length;h>g;g++)e=e.n,e=e.hasOwnProperty(d[g])&&e[d[g]]||(e[d[g]]={n:{}});for(e.f=e.f||[],g=0,h=e.f.length;h>g;g++)if(e.f[g]==b){c=!0;break}!c&&e.f.push(b)}(c[d]);return function(a){+a==+a&&(b.zIndex=+a)}},eve.f=function(a){var b=[].slice.call(arguments,1);return function(){eve.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},eve.stop=function(){c=1},eve.nt=function(a){var c=o(b)?b.join("."):b;return a?new RegExp("(?:\\.|\\/|^)"+a+"(?:\\.|\\/|$)").test(c):c},eve.nts=function(){return o(b)?b:b.split(f)},eve.off=eve.unbind=function(a,b){if(!a)return void(eve._events=j={n:{}});var c=o(a)?o(a[0])?a:[a]:n(a).split(g);if(c.length>1)for(var d=0,i=c.length;i>d;d++)eve.off(c[d],b);else{c=o(a)?a:n(a).split(f);var k,l,m,d,i,p,q,r=[j],s=[];for(d=0,i=c.length;i>d;d++)for(p=0;p<r.length;p+=m.length-2){if(m=[p,1],k=r[p].n,c[d]!=h)k[c[d]]&&(m.push(k[c[d]]),s.unshift({n:k,name:c[d]}));else for(l in k)k[e](l)&&(m.push(k[l]),s.unshift({n:k,name:l}));r.splice.apply(r,m)}for(d=0,i=r.length;i>d;d++)for(k=r[d];k.n;){if(b){if(k.f){for(p=0,q=k.f.length;q>p;p++)if(k.f[p]==b){k.f.splice(p,1);break}!k.f.length&&delete k.f}for(l in k.n)if(k.n[e](l)&&k.n[l].f){var t=k.n[l].f;for(p=0,q=t.length;q>p;p++)if(t[p]==b){t.splice(p,1);break}!t.length&&delete k.n[l].f}}else{delete k.f;for(l in k.n)k.n[e](l)&&k.n[l].f&&delete k.n[l].f}k=k.n}a:for(d=0,i=s.length;i>d;d++){k=s[d];for(l in k.n[k.name].f)continue a;for(l in k.n[k.name].n)continue a;delete k.n[k.name]}}},eve.once=function(a,b){var c=function(){return eve.off(a,c),b.apply(this,arguments)};return eve.on(a,c)},eve.version=d,eve.toString=function(){return"You are running Eve "+d},"undefined"!=typeof module&&module.exports?module.exports=eve:"function"==typeof define&&define.amd?define("eve",[],function(){return eve}):a.eve=eve}(this),function(a,b){if("function"==typeof define&&define.amd)define(["eve"],function(c){return b(a,c)});else if("undefined"!=typeof exports){var c=require("eve");module.exports=b(a,c)}else b(a,a.eve)}(window||this,function(a,b){var c=function(b){var c,d={},e=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){return setTimeout(a,16,(new Date).getTime()),!0},f=Array.isArray||function(a){return a instanceof Array||"[object Array]"==Object.prototype.toString.call(a)},g=0,h="M"+(+new Date).toString(36),i=function(){return h+(g++).toString(36)},j=Date.now||function(){return+new Date},k=function(a){var b=this;if(null==a)return b.s;var c=b.s-a;b.b+=b.dur*c,b.B+=b.dur*c,b.s=a},l=function(a){var b=this;return null==a?b.spd:void(b.spd=a)},m=function(a){var b=this;return null==a?b.dur:(b.s=b.s*a/b.dur,void(b.dur=a))},n=function(){var a=this;delete d[a.id],a.update(),b("mina.stop."+a.id,a)},o=function(){var a=this;a.pdif||(delete d[a.id],a.update(),a.pdif=a.get()-a.b)},p=function(){var a=this;a.pdif&&(a.b=a.get()-a.pdif,delete a.pdif,d[a.id]=a,r())},q=function(){var a,b=this;if(f(b.start)){a=[];for(var c=0,d=b.start.length;d>c;c++)a[c]=+b.start[c]+(b.end[c]-b.start[c])*b.easing(b.s)}else a=+b.start+(b.end-b.start)*b.easing(b.s);b.set(a)},r=function(a){if(!a)return void(c||(c=e(r)));var f=0;for(var g in d)if(d.hasOwnProperty(g)){var h=d[g],i=h.get();f++,h.s=(i-h.b)/(h.dur/h.spd),h.s>=1&&(delete d[g],h.s=1,f--,function(a){setTimeout(function(){b("mina.finish."+a.id,a)})}(h)),h.update()}c=f?e(r):!1},s=function(a,b,c,e,f,g,h){var j={id:i(),start:a,end:b,b:c,s:0,dur:e-c,spd:1,get:f,set:g,easing:h||s.linear,status:k,speed:l,duration:m,stop:n,pause:o,resume:p,update:q};d[j.id]=j;var t,u=0;for(t in d)if(d.hasOwnProperty(t)&&(u++,2==u))break;return 1==u&&r(),j};return s.time=j,s.getById=function(a){return d[a]||null},s.linear=function(a){return a},s.easeout=function(a){return Math.pow(a,1.7)},s.easein=function(a){return Math.pow(a,.48)},s.easeinout=function(a){if(1==a)return 1;if(0==a)return 0;var b=.48-a/1.04,c=Math.sqrt(.1734+b*b),d=c-b,e=Math.pow(Math.abs(d),1/3)*(0>d?-1:1),f=-c-b,g=Math.pow(Math.abs(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},s.backin=function(a){if(1==a)return 1;var b=1.70158;return a*a*((b+1)*a-b)},s.backout=function(a){if(0==a)return 0;a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},s.elastic=function(a){return a==!!a?a:Math.pow(2,-10*a)*Math.sin((a-.075)*(2*Math.PI)/.3)+1},s.bounce=function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b},a.mina=s,s}("undefined"==typeof b?function(){}:b),d=function(a){function c(a,b){if(a){if(a.nodeType)return w(a);if(e(a,"array")&&c.set)return c.set.apply(c,a);if(a instanceof s)return a;if(null==b)return a=y.doc.querySelector(String(a)),w(a)}return a=null==a?"100%":a,b=null==b?"100%":b,new v(a,b)}function d(a,b){if(b){if("#text"==a&&(a=y.doc.createTextNode(b.text||b["#text"]||"")),"#comment"==a&&(a=y.doc.createComment(b.text||b["#text"]||"")),"string"==typeof a&&(a=d(a)),"string"==typeof b)return 1==a.nodeType?"xlink:"==b.substring(0,6)?a.getAttributeNS(T,b.substring(6)):"xml:"==b.substring(0,4)?a.getAttributeNS(U,b.substring(4)):a.getAttribute(b):"text"==b?a.nodeValue:null;if(1==a.nodeType){for(var c in b)if(b[z](c)){var e=A(b[c]);e?"xlink:"==c.substring(0,6)?a.setAttributeNS(T,c.substring(6),e):"xml:"==c.substring(0,4)?a.setAttributeNS(U,c.substring(4),e):a.setAttribute(c,e):a.removeAttribute(c)}}else"text"in b&&(a.nodeValue=b.text)}else a=y.doc.createElementNS(U,a);return a}function e(a,b){return b=A.prototype.toLowerCase.call(b),"finite"==b?isFinite(a):"array"==b&&(a instanceof Array||Array.isArray&&Array.isArray(a))?!0:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||J.call(a).slice(8,-1).toLowerCase()==b}function f(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[z](c)&&(b[c]=f(a[c]));return b}function h(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function i(a,b,c){function d(){var e=Array.prototype.slice.call(arguments,0),f=e.join("␀"),g=d.cache=d.cache||{},i=d.count=d.count||[];return g[z](f)?(h(i,f),c?c(g[f]):g[f]):(i.length>=1e3&&delete g[i.shift()],i.push(f),g[f]=a.apply(b,e),c?c(g[f]):g[f])}return d}function j(a,b,c,d,e,f){if(null==e){var g=a-c,h=b-d;return g||h?(180+180*D.atan2(-h,-g)/H+360)%360:0}return j(a,b,e,f)-j(c,d,e,f)}function k(a){return a%360*H/180}function l(a){return 180*a/H%360}function m(a){var b=[];return a=a.replace(/(?:^|\s)(\w+)\(([^)]+)\)/g,function(a,c,d){return d=d.split(/\s*,\s*|\s+/),"rotate"==c&&1==d.length&&d.push(0,0),"scale"==c&&(d.length>2?d=d.slice(0,2):2==d.length&&d.push(0,0),1==d.length&&d.push(d[0],0,0)),"skewX"==c?b.push(["m",1,0,D.tan(k(d[0])),1,0,0]):"skewY"==c?b.push(["m",1,D.tan(k(d[0])),0,1,0,0]):b.push([c.charAt(0)].concat(d)),a}),b}function n(a,b){var d=aa(a),e=new c.Matrix;if(d)for(var f=0,g=d.length;g>f;f++){var h,i,j,k,l,m=d[f],n=m.length,o=A(m[0]).toLowerCase(),p=m[0]!=o,q=p?e.invert():0;"t"==o&&2==n?e.translate(m[1],0):"t"==o&&3==n?p?(h=q.x(0,0),i=q.y(0,0),j=q.x(m[1],m[2]),k=q.y(m[1],m[2]),e.translate(j-h,k-i)):e.translate(m[1],m[2]):"r"==o?2==n?(l=l||b,e.rotate(m[1],l.x+l.width/2,l.y+l.height/2)):4==n&&(p?(j=q.x(m[2],m[3]),k=q.y(m[2],m[3]),e.rotate(m[1],j,k)):e.rotate(m[1],m[2],m[3])):"s"==o?2==n||3==n?(l=l||b,e.scale(m[1],m[n-1],l.x+l.width/2,l.y+l.height/2)):4==n?p?(j=q.x(m[2],m[3]),k=q.y(m[2],m[3]),e.scale(m[1],m[1],j,k)):e.scale(m[1],m[1],m[2],m[3]):5==n&&(p?(j=q.x(m[3],m[4]),k=q.y(m[3],m[4]),e.scale(m[1],m[2],j,k)):e.scale(m[1],m[2],m[3],m[4])):"m"==o&&7==n&&e.add(m[1],m[2],m[3],m[4],m[5],m[6])}return e}function o(a){var b=a.node.ownerSVGElement&&w(a.node.ownerSVGElement)||a.node.parentNode&&w(a.node.parentNode)||c.select("svg")||c(0,0),d=b.select("defs"),e=null==d?!1:d.node;return e||(e=u("defs",b.node).node),e}function p(a){return a.node.ownerSVGElement&&w(a.node.ownerSVGElement)||c.select("svg")}function q(a,b,c){function e(a){if(null==a)return I;if(a==+a)return a;d(j,{width:a});try{return j.getBBox().width}catch(b){return 0}}function f(a){if(null==a)return I;if(a==+a)return a;d(j,{height:a});try{return j.getBBox().height}catch(b){return 0}}function g(d,e){null==b?i[d]=e(a.attr(d)||0):d==b&&(i=e(null==c?a.attr(d)||0:c))}var h=p(a).node,i={},j=h.querySelector(".svg---mgr");switch(j||(j=d("rect"),d(j,{x:-9e9,y:-9e9,width:10,height:10,"class":"svg---mgr",fill:"none"}),h.appendChild(j)),a.type){case"rect":g("rx",e),g("ry",f);case"image":g("width",e),g("height",f);case"text":g("x",e),g("y",f);break;case"circle":g("cx",e),g("cy",f),g("r",e);break;case"ellipse":g("cx",e),g("cy",f),g("rx",e),g("ry",f);break;case"line":g("x1",e),g("x2",e),g("y1",f),g("y2",f);break;case"marker":g("refX",e),g("markerWidth",e),g("refY",f),g("markerHeight",f);break;case"radialGradient":g("fx",e),g("fy",f);break;case"tspan":g("dx",e),g("dy",f);break;default:g(b,e)}return h.removeChild(j),i}function r(a){e(a,"array")||(a=Array.prototype.slice.call(arguments,0));for(var b=0,c=0,d=this.node;this[b];)delete this[b++];for(b=0;b<a.length;b++)"set"==a[b].type?a[b].forEach(function(a){d.appendChild(a.node)}):d.appendChild(a[b].node);var f=d.childNodes;for(b=0;b<f.length;b++)this[c++]=w(f[b]);return this}function s(a){if(a.snap in V)return V[a.snap];var b;try{b=a.ownerSVGElement}catch(c){}this.node=a,b&&(this.paper=new v(b)),this.type=a.tagName||a.nodeName;var d=this.id=S(this);if(this.anims={},this._={transform:[]},a.snap=d,V[d]=this,"g"==this.type&&(this.add=r),this.type in{g:1,mask:1,pattern:1,symbol:1})for(var e in v.prototype)v.prototype[z](e)&&(this[e]=v.prototype[e])}function t(a){this.node=a}function u(a,b){var c=d(a);b.appendChild(c);var e=w(c);return e}function v(a,b){var c,e,f,g=v.prototype;if(a&&a.tagName&&"svg"==a.tagName.toLowerCase()){if(a.snap in V)return V[a.snap];var h=a.ownerDocument;c=new s(a),e=a.getElementsByTagName("desc")[0],f=a.getElementsByTagName("defs")[0],e||(e=d("desc"),e.appendChild(h.createTextNode("Created with Snap")),c.node.appendChild(e)),f||(f=d("defs"),c.node.appendChild(f)),c.defs=f;for(var i in g)g[z](i)&&(c[i]=g[i]);c.paper=c.root=c}else c=u("svg",y.doc.body),d(c.node,{height:b,version:1.1,width:a,xmlns:U});return c}function w(a){return a?a instanceof s||a instanceof t?a:a.tagName&&"svg"==a.tagName.toLowerCase()?new v(a):a.tagName&&"object"==a.tagName.toLowerCase()&&"image/svg+xml"==a.type?new v(a.contentDocument.getElementsByTagName("svg")[0]):new s(a):a}function x(a,b){for(var c=0,d=a.length;d>c;c++){var e={type:a[c].type,attr:a[c].attr()},f=a[c].children();b.push(e),f.length&&x(f,e.childNodes=[])}}c.version="0.5.1",c.toString=function(){return"Snap v"+this.version},c._={};var y={win:a.window,doc:a.window.document};c._.glob=y;var z="hasOwnProperty",A=String,B=parseFloat,C=parseInt,D=Math,E=D.max,F=D.min,G=D.abs,H=(D.pow,D.PI),I=(D.round,""),J=Object.prototype.toString,K=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?%?)\s*\))\s*$/i,L=(c._.separator=/[,\s]+/,/[\s]*,[\s]*/),M={hs:1,rg:1},N=/([a-z])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,O=/([rstm])[\s,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\s]*,?[\s]*)+)/gi,P=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\s]*,?[\s]*/gi,Q=0,R="S"+(+new Date).toString(36),S=function(a){return(a&&a.type?a.type:I)+R+(Q++).toString(36)},T="http://www.w3.org/1999/xlink",U="http://www.w3.org/2000/svg",V={};c.url=function(a){return"url('#"+a+"')"};c._.$=d,c._.id=S,c.format=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return A(b).replace(a,function(a,b){return c(a,b,d)})}}(),c._.clone=f,c._.cacher=i,c.rad=k,c.deg=l,c.sin=function(a){return D.sin(c.rad(a))},c.tan=function(a){return D.tan(c.rad(a))},c.cos=function(a){return D.cos(c.rad(a))},c.asin=function(a){return c.deg(D.asin(a))},c.acos=function(a){return c.deg(D.acos(a))},c.atan=function(a){return c.deg(D.atan(a))},c.atan2=function(a){return c.deg(D.atan2(a))},c.angle=j,c.len=function(a,b,d,e){return Math.sqrt(c.len2(a,b,d,e))},c.len2=function(a,b,c,d){return(a-c)*(a-c)+(b-d)*(b-d)},c.closestPoint=function(a,b,c){function d(a){var d=a.x-b,e=a.y-c;return d*d+e*e}for(var e,f,g,h,i=a.node,j=i.getTotalLength(),k=j/i.pathSegList.numberOfItems*.125,l=1/0,m=0;j>=m;m+=k)(h=d(g=i.getPointAtLength(m)))<l&&(e=g,f=m,l=h);for(k*=.5;k>.5;){var n,o,p,q,r,s;(p=f-k)>=0&&(r=d(n=i.getPointAtLength(p)))<l?(e=n,f=p,l=r):(q=f+k)<=j&&(s=d(o=i.getPointAtLength(q)))<l?(e=o,f=q,l=s):k*=.5}return e={x:e.x,y:e.y,length:f,distance:Math.sqrt(l)}},c.is=e,c.snapTo=function(a,b,c){if(c=e(c,"finite")?c:10,e(a,"array")){for(var d=a.length;d--;)if(G(a[d]-b)<=c)return a[d]}else{a=+a;var f=b%a;if(c>f)return b-f;if(f>a-c)return b-f+a}return b},c.getRGB=i(function(a){if(!a||(a=A(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:Z};if(!(M[z](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=W(a)),!a)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z};var b,d,f,g,h,i,j=a.match(K);return j?(j[2]&&(f=C(j[2].substring(5),16),d=C(j[2].substring(3,5),16),b=C(j[2].substring(1,3),16)),j[3]&&(f=C((h=j[3].charAt(3))+h,16),d=C((h=j[3].charAt(2))+h,16),b=C((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=B(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),f=B(i[2]),"%"==i[2].slice(-1)&&(f*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100)),j[5]?(i=j[5].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b/=100),d=B(i[1]),"%"==i[1].slice(-1)&&(d/=100),f=B(i[2]),"%"==i[2].slice(-1)&&(f/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),c.hsb2rgb(b,d,f,g)):j[6]?(i=j[6].split(L),b=B(i[0]),"%"==i[0].slice(-1)&&(b/=100),d=B(i[1]),"%"==i[1].slice(-1)&&(d/=100),f=B(i[2]),"%"==i[2].slice(-1)&&(f/=100),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(g=B(i[3])),i[3]&&"%"==i[3].slice(-1)&&(g/=100),c.hsl2rgb(b,d,f,g)):(b=F(D.round(b),255),d=F(D.round(d),255),f=F(D.round(f),255),g=F(E(g,0),1),j={r:b,g:d,b:f,toString:Z},j.hex="#"+(16777216|f|d<<8|b<<16).toString(16).slice(1),j.opacity=e(g,"finite")?g:1,j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:Z}},c),c.hsb=i(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=i(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=i(function(a,b,c,d){if(e(d,"finite")){var f=D.round;return"rgba("+[f(a),f(b),f(c),+d.toFixed(2)]+")"}return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)});var W=function(a){var b=y.doc.getElementsByTagName("head")[0]||y.doc.getElementsByTagName("svg")[0],c="rgb(255, 0, 0)";return(W=i(function(a){if("red"==a.toLowerCase())return c;b.style.color=c,b.style.color=a;var d=y.doc.defaultView.getComputedStyle(b,I).getPropertyValue("color");return d==c?null:d}))(a)},X=function(){return"hsb("+[this.h,this.s,this.b]+")"},Y=function(){return"hsl("+[this.h,this.s,this.l]+")"},Z=function(){return 1==this.opacity||null==this.opacity?this.hex:"rgba("+[this.r,this.g,this.b,this.opacity]+")"},$=function(a,b,d){if(null==b&&e(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&e(a,string)){var f=c.getRGB(a);a=f.r,b=f.g,d=f.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},_=function(a,b,d,f){a=D.round(255*a),b=D.round(255*b),d=D.round(255*d);var g={r:a,g:b,b:d,opacity:e(f,"finite")?f:1,hex:c.rgb(a,b,d),toString:Z};return e(f,"finite")&&(g.opacity=f),g};c.color=function(a){var b;return e(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.opacity=1,a.hex=b.hex):e(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.opacity=1,a.hex=b.hex):(e(a,"string")&&(a=c.getRGB(a)),e(a,"object")&&"r"in a&&"g"in a&&"b"in a&&!("error"in a)?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1,a.error=1)),a.toString=Z,a},c.hsb2rgb=function(a,b,c,d){e(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,d=a.o,a=a.h),a*=360;var f,g,h,i,j;return a=a%360/60,j=c*b,i=j*(1-G(a%2-1)),f=g=h=c-j,a=~~a,f+=[j,i,0,0,i,j][a],g+=[i,j,j,i,0,0][a],h+=[0,0,i,j,j,i][a],_(f,g,h,d)},c.hsl2rgb=function(a,b,c,d){e(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var f,g,h,i,j;return a=a%360/60,j=2*b*(.5>c?c:1-c),i=j*(1-G(a%2-1)),f=g=h=c-j/2,a=~~a,f+=[j,i,0,0,i,j][a],g+=[i,j,j,i,0,0][a],h+=[0,0,i,j,j,i][a],_(f,g,h,d)},c.rgb2hsb=function(a,b,c){c=$(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=E(a,b,c),g=f-F(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:X}},c.rgb2hsl=function(a,b,c){c=$(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=E(a,b,c),h=F(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:Y}},c.parsePathString=function(a){if(!a)return null;var b=c.path(a);if(b.arr)return c.path.clone(b.arr);var d={a:7,c:6,o:2,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,u:3,z:0},f=[];return e(a,"array")&&e(a[0],"array")&&(f=c.path.clone(a)),f.length||A(a).replace(N,function(a,b,c){var e=[],g=b.toLowerCase();if(c.replace(P,function(a,b){b&&e.push(+b)}),"m"==g&&e.length>2&&(f.push([b].concat(e.splice(0,2))),g="l",b="m"==b?"l":"L"),"o"==g&&1==e.length&&f.push([b,e[0]]),"r"==g)f.push([b].concat(e));else for(;e.length>=d[g]&&(f.push([b].concat(e.splice(0,d[g]))),d[g]););}),f.toString=c.path.toString,b.arr=c.path.clone(f),f};var aa=c.parseTransformString=function(a){if(!a)return null;var b=[];return e(a,"array")&&e(a[0],"array")&&(b=c.path.clone(a)),b.length||A(a).replace(O,function(a,c,d){var e=[];c.toLowerCase();d.replace(P,function(a,b){b&&e.push(+b)}),b.push([c].concat(e))}),b.toString=c.path.toString,b};c._.svgTransform2string=m,c._.rgTransform=/^[a-z][\s]*-?\.?\d/i,c._.transform2matrix=n,c._unit2px=q;y.doc.contains||y.doc.compareDocumentPosition?function(a,b){var c=9==a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a==d||!(!d||1!=d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b;)if(b=b.parentNode,b==a)return!0;return!1};c._.getSomeDefs=o,c._.getSomeSVG=p,c.select=function(a){return a=A(a).replace(/([^\\]):/g,"$1\\:"),w(y.doc.querySelector(a))},c.selectAll=function(a){for(var b=y.doc.querySelectorAll(a),d=(c.set||Array)(),e=0;e<b.length;e++)d.push(w(b[e]));return d},setInterval(function(){for(var a in V)if(V[z](a)){var b=V[a],c=b.node;("svg"!=b.type&&!c.ownerSVGElement||"svg"==b.type&&(!c.parentNode||"ownerSVGElement"in c.parentNode&&!c.ownerSVGElement))&&delete V[a]}},1e4),s.prototype.attr=function(a,c){var d=this,f=d.node;if(!a){if(1!=f.nodeType)return{text:f.nodeValue};for(var g=f.attributes,h={},i=0,j=g.length;j>i;i++)h[g[i].nodeName]=g[i].nodeValue;return h}if(e(a,"string")){if(!(arguments.length>1))return b("snap.util.getattr."+a,d).firstDefined();var k={};k[a]=c,a=k}for(var l in a)a[z](l)&&b("snap.util.attr."+l,d,a[l]);return d},c.parse=function(a){var b=y.doc.createDocumentFragment(),c=!0,d=y.doc.createElement("div");if(a=A(a),a.match(/^\s*<\s*svg(?:\s|>)/)||(a="<svg>"+a+"</svg>",c=!1),d.innerHTML=a,a=d.getElementsByTagName("svg")[0])if(c)b=a;else for(;a.firstChild;)b.appendChild(a.firstChild);return new t(b)},c.fragment=function(){for(var a=Array.prototype.slice.call(arguments,0),b=y.doc.createDocumentFragment(),d=0,e=a.length;e>d;d++){var f=a[d];f.node&&f.node.nodeType&&b.appendChild(f.node),f.nodeType&&b.appendChild(f),"string"==typeof f&&b.appendChild(c.parse(f).node)}return new t(b)},c._.make=u,c._.wrap=w,v.prototype.el=function(a,b){var c=u(a,this.node);return b&&c.attr(b),c},s.prototype.children=function(){for(var a=[],b=this.node.childNodes,d=0,e=b.length;e>d;d++)a[d]=c(b[d]);return a},s.prototype.toJSON=function(){var a=[];return x([this],a),a[0]},b.on("snap.util.getattr",function(){var a=b.nt();a=a.substring(a.lastIndexOf(".")+1);var c=a.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()});return ba[z](c)?this.node.ownerDocument.defaultView.getComputedStyle(this.node,null).getPropertyValue(c):d(this.node,a)});var ba={"alignment-baseline":0,"baseline-shift":0,clip:0,"clip-path":0,"clip-rule":0,color:0,"color-interpolation":0,"color-interpolation-filters":0,"color-profile":0,"color-rendering":0,cursor:0,direction:0,display:0,"dominant-baseline":0,"enable-background":0,fill:0,"fill-opacity":0,"fill-rule":0,filter:0,"flood-color":0,"flood-opacity":0,font:0,"font-family":0,"font-size":0,"font-size-adjust":0,"font-stretch":0,"font-style":0,"font-variant":0,"font-weight":0,"glyph-orientation-horizontal":0,"glyph-orientation-vertical":0,"image-rendering":0,kerning:0,"letter-spacing":0,"lighting-color":0,marker:0,"marker-end":0,"marker-mid":0,"marker-start":0,mask:0,opacity:0,overflow:0,"pointer-events":0,"shape-rendering":0,"stop-color":0,"stop-opacity":0,stroke:0,"stroke-dasharray":0,"stroke-dashoffset":0,"stroke-linecap":0,"stroke-linejoin":0,"stroke-miterlimit":0,"stroke-opacity":0,"stroke-width":0,"text-anchor":0,"text-decoration":0,"text-rendering":0,"unicode-bidi":0,visibility:0,"word-spacing":0,"writing-mode":0};b.on("snap.util.attr",function(a){var c=b.nt(),e={};c=c.substring(c.lastIndexOf(".")+1),e[c]=a;var f=c.replace(/-(\w)/gi,function(a,b){return b.toUpperCase()}),g=c.replace(/[A-Z]/g,function(a){return"-"+a.toLowerCase()});ba[z](g)?this.node.style[f]=null==a?I:a:d(this.node,e)}),function(a){}(v.prototype),c.ajax=function(a,c,d,f){var g=new XMLHttpRequest,h=S();if(g){if(e(c,"function"))f=d,d=c,c=null;else if(e(c,"object")){var i=[];for(var j in c)c.hasOwnProperty(j)&&i.push(encodeURIComponent(j)+"="+encodeURIComponent(c[j]));c=i.join("&")}return g.open(c?"POST":"GET",a,!0),c&&(g.setRequestHeader("X-Requested-With","XMLHttpRequest"),g.setRequestHeader("Content-type","application/x-www-form-urlencoded")),d&&(b.once("snap.ajax."+h+".0",d),b.once("snap.ajax."+h+".200",d),b.once("snap.ajax."+h+".304",d)),g.onreadystatechange=function(){4==g.readyState&&b("snap.ajax."+h+"."+g.status,f,g)},4==g.readyState?g:(g.send(c),g)}},c.load=function(a,b,d){c.ajax(a,function(a){var e=c.parse(a.responseText);d?b.call(d,e):b(e)})};var ca=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,h=e.clientLeft||d.clientLeft||0,i=b.top+(g.win.pageYOffset||e.scrollTop||d.scrollTop)-f,j=b.left+(g.win.pageXOffset||e.scrollLeft||d.scrollLeft)-h;return{y:i,x:j}};return c.getElementByPoint=function(a,b){var c=this,d=(c.canvas,y.doc.elementFromPoint(a,b));if(y.win.opera&&"svg"==d.tagName){var e=ca(d),f=d.createSVGRect();f.x=a-e.x,f.y=b-e.y,f.width=f.height=1;var g=d.getIntersectionList(f,null);g.length&&(d=g[g.length-1])}return d?w(d):null},c.plugin=function(a){a(c,s,v,y,t)},y.win.Snap=c,c}(a||this);return d.plugin(function(c,d,e,f,g){function h(a,b){if(null==b){var d=!0;if(b="linearGradient"==a.type||"radialGradient"==a.type?a.node.getAttribute("gradientTransform"):"pattern"==a.type?a.node.getAttribute("patternTransform"):a.node.getAttribute("transform"),!b)return new c.Matrix;b=c._.svgTransform2string(b)}else b=c._.rgTransform.test(b)?m(b).replace(/\.{3}|\u2026/g,a._.transform||""):c._.svgTransform2string(b),l(b,"array")&&(b=c.path?c.path.toString.call(b):m(b)),a._.transform=b;var e=c._.transform2matrix(b,a.getBBox(1));return d?e:void(a.matrix=e)}function i(a){function b(a,b){var d=o(a.node,b);d=d&&d.match(g),d=d&&d[2],d&&"#"==d.charAt()&&(d=d.substring(1),d&&(i[d]=(i[d]||[]).concat(function(d){var e={};e[b]=c.url(d),o(a.node,e)})))}function d(a){var b=o(a.node,"xlink:href");b&&"#"==b.charAt()&&(b=b.substring(1),b&&(i[b]=(i[b]||[]).concat(function(b){a.attr("xlink:href","#"+b)})))}for(var e,f=a.selectAll("*"),g=/^\s*url\(("|'|)(.*)\1\)\s*$/,h=[],i={},j=0,k=f.length;k>j;j++){e=f[j],b(e,"fill"),b(e,"stroke"),b(e,"filter"),b(e,"mask"),b(e,"clip-path"),d(e);var l=o(e.node,"id");l&&(o(e.node,{id:e.id}),h.push({old:l,id:e.id}))}for(j=0,k=h.length;k>j;j++){var m=i[h[j].old];if(m)for(var n=0,p=m.length;p>n;n++)m[n](h[j].id)}}function j(a){return function(){var b=a?"<"+this.type:"",c=this.node.attributes,d=this.node.childNodes;if(a)for(var e=0,f=c.length;f>e;e++)b+=" "+c[e].name+'="'+c[e].value.replace(/"/g,'\\"')+'"';if(d.length){for(a&&(b+=">"),e=0,f=d.length;f>e;e++)3==d[e].nodeType?b+=d[e].nodeValue:1==d[e].nodeType&&(b+=s(d[e]).toString());a&&(b+="</"+this.type+">")}else a&&(b+="/>");return b}}var k=d.prototype,l=c.is,m=String,n=c._unit2px,o=c._.$,p=c._.make,q=c._.getSomeDefs,r="hasOwnProperty",s=c._.wrap;k.getBBox=function(a){if("tspan"==this.type)return c._.box(this.node.getClientRects().item(0));if(!c.Matrix||!c.path)return this.node.getBBox();var b=this,d=new c.Matrix;if(b.removed)return c._.box();for(;"use"==b.type;)if(a||(d=d.add(b.transform().localMatrix.translate(b.attr("x")||0,b.attr("y")||0))),b.original)b=b.original;else{var e=b.attr("xlink:href");b=b.original=b.node.ownerDocument.getElementById(e.substring(e.indexOf("#")+1))}var f=b._,g=c.path.get[b.type]||c.path.get.deflt;try{return a?(f.bboxwt=g?c.path.getBBox(b.realPath=g(b)):c._.box(b.node.getBBox()),c._.box(f.bboxwt)):(b.realPath=g(b),b.matrix=b.transform().localMatrix,f.bbox=c.path.getBBox(c.path.map(b.realPath,d.add(b.matrix))),c._.box(f.bbox))}catch(h){return c._.box()}};var t=function(){return this.string};k.transform=function(a){var b=this._;if(null==a){for(var d,e=this,f=new c.Matrix(this.node.getCTM()),g=h(this),i=[g],j=new c.Matrix,k=g.toTransformString(),l=m(g)==m(this.matrix)?m(b.transform):k;"svg"!=e.type&&(e=e.parent());)i.push(h(e));for(d=i.length;d--;)j.add(i[d]);return{string:l,globalMatrix:f,totalMatrix:j,localMatrix:g,diffMatrix:f.clone().add(g.invert()),global:f.toTransformString(),total:j.toTransformString(),local:k,toString:t}}return a instanceof c.Matrix?(this.matrix=a,this._.transform=a.toTransformString()):h(this,a),this.node&&("linearGradient"==this.type||"radialGradient"==this.type?o(this.node,{gradientTransform:this.matrix}):"pattern"==this.type?o(this.node,{patternTransform:this.matrix}):o(this.node,{transform:this.matrix})),this},k.parent=function(){return s(this.node.parentNode)},k.append=k.add=function(a){if(a){if("set"==a.type){var b=this;return a.forEach(function(a){b.add(a)}),this}a=s(a),this.node.appendChild(a.node),a.paper=this.paper}return this},k.appendTo=function(a){return a&&(a=s(a),a.append(this)),this},k.prepend=function(a){if(a){if("set"==a.type){var b,c=this;return a.forEach(function(a){b?b.after(a):c.prepend(a),b=a}),this}a=s(a);var d=a.parent();this.node.insertBefore(a.node,this.node.firstChild),this.add&&this.add(),a.paper=this.paper,this.parent()&&this.parent().add(),d&&d.add()}return this},k.prependTo=function(a){return a=s(a),a.prepend(this),this},k.before=function(a){if("set"==a.type){var b=this;return a.forEach(function(a){var c=a.parent();b.node.parentNode.insertBefore(a.node,b.node),c&&c.add()}),this.parent().add(),this}a=s(a);var c=a.parent();return this.node.parentNode.insertBefore(a.node,this.node),this.parent()&&this.parent().add(),c&&c.add(),a.paper=this.paper,this},k.after=function(a){a=s(a);var b=a.parent();return this.node.nextSibling?this.node.parentNode.insertBefore(a.node,this.node.nextSibling):this.node.parentNode.appendChild(a.node),this.parent()&&this.parent().add(),b&&b.add(),a.paper=this.paper,this},k.insertBefore=function(a){a=s(a);var b=this.parent();return a.node.parentNode.insertBefore(this.node,a.node),this.paper=a.paper,b&&b.add(),a.parent()&&a.parent().add(),this},k.insertAfter=function(a){a=s(a);var b=this.parent();return a.node.parentNode.insertBefore(this.node,a.node.nextSibling),this.paper=a.paper,b&&b.add(),a.parent()&&a.parent().add(),this},k.remove=function(){var a=this.parent();return this.node.parentNode&&this.node.parentNode.removeChild(this.node),delete this.paper,this.removed=!0,a&&a.add(),this},k.select=function(a){return s(this.node.querySelector(a))},k.selectAll=function(a){for(var b=this.node.querySelectorAll(a),d=(c.set||Array)(),e=0;e<b.length;e++)d.push(s(b[e]));return d},k.asPX=function(a,b){return null==b&&(b=this.attr(a)),+n(this,a,b)},k.use=function(){var a,b=this.node.id;return b||(b=this.id,o(this.node,{id:b})),a="linearGradient"==this.type||"radialGradient"==this.type||"pattern"==this.type?p(this.type,this.node.parentNode):p("use",this.node.parentNode),o(a.node,{"xlink:href":"#"+b}),a.original=this,a},k.clone=function(){var a=s(this.node.cloneNode(!0));return o(a.node,"id")&&o(a.node,{id:a.id}),i(a),a.insertAfter(this),a},k.toDefs=function(){var a=q(this);return a.appendChild(this.node),this},k.pattern=k.toPattern=function(a,b,c,d){var e=p("pattern",q(this));return null==a&&(a=this.getBBox()),l(a,"object")&&"x"in a&&(b=a.y,c=a.width,d=a.height,a=a.x),o(e.node,{x:a,y:b,width:c,height:d,patternUnits:"userSpaceOnUse",id:e.id,viewBox:[a,b,c,d].join(" ")}),e.node.appendChild(this.node),e},k.marker=function(a,b,c,d,e,f){var g=p("marker",q(this));return null==a&&(a=this.getBBox()),l(a,"object")&&"x"in a&&(b=a.y,c=a.width,d=a.height,e=a.refX||a.cx,f=a.refY||a.cy,a=a.x),o(g.node,{viewBox:[a,b,c,d].join(" "),markerWidth:c,markerHeight:d,orient:"auto",refX:e||0,refY:f||0,id:g.id}),g.node.appendChild(this.node),g};var u={};k.data=function(a,d){var e=u[this.id]=u[this.id]||{};if(0==arguments.length)return b("snap.data.get."+this.id,this,e,null),e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[r](f)&&this.data(f,a[f]);return this}return b("snap.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("snap.data.set."+this.id,this,d,a),this},k.removeData=function(a){return null==a?u[this.id]={}:u[this.id]&&delete u[this.id][a],this},k.outerSVG=k.toString=j(1),k.innerSVG=j(),k.toDataURL=function(){if(a&&a.btoa){var b=this.getBBox(),d=c.format('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{width}" height="{height}" viewBox="{x} {y} {width} {height}">{contents}</svg>',{x:+b.x.toFixed(3),y:+b.y.toFixed(3),width:+b.width.toFixed(3),height:+b.height.toFixed(3),contents:this.outerSVG()});
return"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(d)))}},g.prototype.select=k.select,g.prototype.selectAll=k.selectAll}),d.plugin(function(a,d,e,f,g){function h(a,b,c){return function(d){var e=d.slice(a,b);return 1==e.length&&(e=e[0]),c?c(e):e}}var i=d.prototype,j=a.is,k=String,l="hasOwnProperty",m=function(a,b,d,e){"function"!=typeof d||d.length||(e=d,d=c.linear),this.attr=a,this.dur=b,d&&(this.easing=d),e&&(this.callback=e)};a._.Animation=m,a.animation=function(a,b,c,d){return new m(a,b,c,d)},i.inAnim=function(){var a=this,b=[];for(var c in a.anims)a.anims[l](c)&&!function(a){b.push({anim:new m(a._attrs,a.dur,a.easing,a._callback),mina:a,curStatus:a.status(),status:function(b){return a.status(b)},stop:function(){a.stop()}})}(a.anims[c]);return b},a.animate=function(a,d,e,f,g,h){"function"!=typeof g||g.length||(h=g,g=c.linear);var i=c.time(),j=c(a,d,i,i+f,c.time,e,g);return h&&b.once("mina.finish."+j.id,h),j},i.stop=function(){for(var a=this.inAnim(),b=0,c=a.length;c>b;b++)a[b].stop();return this},i.animate=function(a,d,e,f){"function"!=typeof e||e.length||(f=e,e=c.linear),a instanceof m&&(f=a.callback,e=a.easing,d=a.dur,a=a.attr);var g,i,n,o,p=[],q=[],r={},s=this;for(var t in a)if(a[l](t)){s.equal?(o=s.equal(t,k(a[t])),g=o.from,i=o.to,n=o.f):(g=+s.attr(t),i=+a[t]);var u=j(g,"array")?g.length:1;r[t]=h(p.length,p.length+u,n),p=p.concat(g),q=q.concat(i)}var v=c.time(),w=c(p,q,v,v+d,c.time,function(a){var b={};for(var c in r)r[l](c)&&(b[c]=r[c](a));s.attr(b)},e);return s.anims[w.id]=w,w._attrs=a,w._callback=f,b("snap.animcreated."+s.id,w),b.once("mina.finish."+w.id,function(){b.off("mina.*."+w.id),delete s.anims[w.id],f&&f.call(s)}),b.once("mina.stop."+w.id,function(){b.off("mina.*."+w.id),delete s.anims[w.id]}),s}}),d.plugin(function(a,b,c,d,e){function f(a,b,c,d,e,f){return null==b&&"[object SVGMatrix]"==g.call(a)?(this.a=a.a,this.b=a.b,this.c=a.c,this.d=a.d,this.e=a.e,void(this.f=a.f)):void(null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0))}var g=Object.prototype.toString,h=String,i=Math,j="";!function(b){function c(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var b=i.sqrt(c(a));a[0]&&(a[0]/=b),a[1]&&(a[1]/=b)}b.add=function(a,b,c,d,e,g){if(a&&a instanceof f)return this.add(a.a,a.b,a.c,a.d,a.e,a.f);var h=a*this.a+b*this.c,i=a*this.b+b*this.d;return this.e+=e*this.a+g*this.c,this.f+=e*this.b+g*this.d,this.c=c*this.a+d*this.c,this.d=c*this.b+d*this.d,this.a=h,this.b=i,this},f.prototype.multLeft=function(a,b,c,d,e,g){if(a&&a instanceof f)return this.multLeft(a.a,a.b,a.c,a.d,a.e,a.f);var h=a*this.a+c*this.b,i=a*this.c+c*this.d,j=a*this.e+c*this.f+e;return this.b=b*this.a+d*this.b,this.d=b*this.c+d*this.d,this.f=b*this.e+d*this.f+g,this.a=h,this.c=i,this.e=j,this},b.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new f(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},b.clone=function(){return new f(this.a,this.b,this.c,this.d,this.e,this.f)},b.translate=function(a,b){return this.e+=a*this.a+b*this.c,this.f+=a*this.b+b*this.d,this},b.scale=function(a,b,c,d){return null==b&&(b=a),(c||d)&&this.translate(c,d),this.a*=a,this.b*=a,this.c*=b,this.d*=b,(c||d)&&this.translate(-c,-d),this},b.rotate=function(b,c,d){b=a.rad(b),c=c||0,d=d||0;var e=+i.cos(b).toFixed(9),f=+i.sin(b).toFixed(9);return this.add(e,f,-f,e,c,d),this.add(1,0,0,1,-c,-d)},b.skewX=function(a){return this.skew(a,0)},b.skewY=function(a){return this.skew(0,a)},b.skew=function(b,c){b=b||0,c=c||0,b=a.rad(b),c=a.rad(c);var d=i.tan(b).toFixed(9),e=i.tan(c).toFixed(9);return this.add(1,e,d,1,0,0)},b.x=function(a,b){return a*this.a+b*this.c+this.e},b.y=function(a,b){return a*this.b+b*this.d+this.f},b.get=function(a){return+this[h.fromCharCode(97+a)].toFixed(4)},b.toString=function(){return"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")"},b.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},b.determinant=function(){return this.a*this.d-this.b*this.c},b.split=function(){var b={};b.dx=this.e,b.dy=this.f;var e=[[this.a,this.b],[this.c,this.d]];b.scalex=i.sqrt(c(e[0])),d(e[0]),b.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*b.shear,e[1][1]-e[0][1]*b.shear],b.scaley=i.sqrt(c(e[1])),d(e[1]),b.shear/=b.scaley,this.determinant()<0&&(b.scalex=-b.scalex);var f=e[0][1],g=e[1][1];return 0>g?(b.rotate=a.deg(i.acos(g)),0>f&&(b.rotate=360-b.rotate)):b.rotate=a.deg(i.asin(f)),b.isSimple=!(+b.shear.toFixed(9)||b.scalex.toFixed(9)!=b.scaley.toFixed(9)&&b.rotate),b.isSuperSimple=!+b.shear.toFixed(9)&&b.scalex.toFixed(9)==b.scaley.toFixed(9)&&!b.rotate,b.noRotation=!+b.shear.toFixed(9)&&!b.rotate,b},b.toTransformString=function(a){var b=a||this.split();return+b.shear.toFixed(9)?"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]:(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[+b.dx.toFixed(4),+b.dy.toFixed(4)]:j)+(b.rotate?"r"+[+b.rotate.toFixed(4),0,0]:j)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:j))}}(f.prototype),a.Matrix=f,a.matrix=function(a,b,c,d,e,g){return new f(a,b,c,d,e,g)}}),d.plugin(function(a,c,d,e,f){function g(d){return function(e){if(b.stop(),e instanceof f&&1==e.node.childNodes.length&&("radialGradient"==e.node.firstChild.tagName||"linearGradient"==e.node.firstChild.tagName||"pattern"==e.node.firstChild.tagName)&&(e=e.node.firstChild,n(this).appendChild(e),e=l(e)),e instanceof c)if("radialGradient"==e.type||"linearGradient"==e.type||"pattern"==e.type){e.node.id||p(e.node,{id:e.id});var g=q(e.node.id)}else g=e.attr(d);else if(g=a.color(e),g.error){var h=a(n(this).ownerSVGElement).gradient(e);h?(h.node.id||p(h.node,{id:h.id}),g=q(h.node.id)):g=e}else g=r(g);var i={};i[d]=g,p(this.node,i),this.node.style[d]=t}}function h(a){b.stop(),a==+a&&(a+="px"),this.node.style.fontSize=a}function i(a){for(var b=[],c=a.childNodes,d=0,e=c.length;e>d;d++){var f=c[d];3==f.nodeType&&b.push(f.nodeValue),"tspan"==f.tagName&&(1==f.childNodes.length&&3==f.firstChild.nodeType?b.push(f.firstChild.nodeValue):b.push(i(f)))}return b}function j(){return b.stop(),this.node.style.fontSize}var k=a._.make,l=a._.wrap,m=a.is,n=a._.getSomeDefs,o=/^url\((['"]?)([^)]+)\1\)$/,p=a._.$,q=a.url,r=String,s=a._.separator,t="";a.deurl=function(a){var b=String(a).match(o);return b?b[2]:a},b.on("snap.util.attr.mask",function(a){if(a instanceof c||a instanceof f){if(b.stop(),a instanceof f&&1==a.node.childNodes.length&&(a=a.node.firstChild,n(this).appendChild(a),a=l(a)),"mask"==a.type)var d=a;else d=k("mask",n(this)),d.node.appendChild(a.node);!d.node.id&&p(d.node,{id:d.id}),p(this.node,{mask:q(d.id)})}}),function(a){b.on("snap.util.attr.clip",a),b.on("snap.util.attr.clip-path",a),b.on("snap.util.attr.clipPath",a)}(function(a){if(a instanceof c||a instanceof f){b.stop();for(var d,e=a.node;e;){if("clipPath"===e.nodeName){d=new c(e);break}if("svg"===e.nodeName){d=void 0;break}e=e.parentNode}d||(d=k("clipPath",n(this)),d.node.appendChild(a.node),!d.node.id&&p(d.node,{id:d.id})),p(this.node,{"clip-path":q(d.node.id||d.id)})}}),b.on("snap.util.attr.fill",g("fill")),b.on("snap.util.attr.stroke",g("stroke"));var u=/^([lr])(?:\(([^)]*)\))?(.*)$/i;b.on("snap.util.grad.parse",function(a){function b(a,b){for(var c=(b-h)/(a-i),d=i;a>d;d++)f[d].offset=+(+h+c*(d-i)).toFixed(2);i=a,h=b}a=r(a);var c=a.match(u);if(!c)return null;var d=c[1],e=c[2],f=c[3];e=e.split(/\s*,\s*/).map(function(a){return+a==a?+a:a}),1==e.length&&0==e[0]&&(e=[]),f=f.split("-"),f=f.map(function(a){a=a.split(":");var b={color:a[0]};return a[1]&&(b.offset=parseFloat(a[1])),b});var g=f.length,h=0,i=0;g--;for(var j=0;g>j;j++)"offset"in f[j]&&b(j,f[j].offset);return f[g].offset=f[g].offset||100,b(g,f[g].offset),{type:d,params:e,stops:f}}),b.on("snap.util.attr.d",function(c){b.stop(),m(c,"array")&&m(c[0],"array")&&(c=a.path.toString.call(c)),c=r(c),c.match(/[ruo]/i)&&(c=a.path.toAbsolute(c)),p(this.node,{d:c})})(-1),b.on("snap.util.attr.#text",function(a){b.stop(),a=r(a);for(var c=e.doc.createTextNode(a);this.node.firstChild;)this.node.removeChild(this.node.firstChild);this.node.appendChild(c)})(-1),b.on("snap.util.attr.path",function(a){b.stop(),this.attr({d:a})})(-1),b.on("snap.util.attr.class",function(a){b.stop(),this.node.className.baseVal=a})(-1),b.on("snap.util.attr.viewBox",function(a){var c;c=m(a,"object")&&"x"in a?[a.x,a.y,a.width,a.height].join(" "):m(a,"array")?a.join(" "):a,p(this.node,{viewBox:c}),b.stop()})(-1),b.on("snap.util.attr.transform",function(a){this.transform(a),b.stop()})(-1),b.on("snap.util.attr.r",function(a){"rect"==this.type&&(b.stop(),p(this.node,{rx:a,ry:a}))})(-1),b.on("snap.util.attr.textpath",function(a){if(b.stop(),"text"==this.type){var d,e,f;if(!a&&this.textPath){for(e=this.textPath;e.node.firstChild;)this.node.appendChild(e.node.firstChild);return e.remove(),void delete this.textPath}if(m(a,"string")){var g=n(this),h=l(g.parentNode).path(a);g.appendChild(h.node),d=h.id,h.attr({id:d})}else a=l(a),a instanceof c&&(d=a.attr("id"),d||(d=a.id,a.attr({id:d})));if(d)if(e=this.textPath,f=this.node,e)e.attr({"xlink:href":"#"+d});else{for(e=p("textPath",{"xlink:href":"#"+d});f.firstChild;)e.appendChild(f.firstChild);f.appendChild(e),this.textPath=l(e)}}})(-1),b.on("snap.util.attr.text",function(a){if("text"==this.type){for(var c=this.node,d=function(a){var b=p("tspan");if(m(a,"array"))for(var c=0;c<a.length;c++)b.appendChild(d(a[c]));else b.appendChild(e.doc.createTextNode(a));return b.normalize&&b.normalize(),b};c.firstChild;)c.removeChild(c.firstChild);for(var f=d(a);f.firstChild;)c.appendChild(f.firstChild)}b.stop()})(-1),b.on("snap.util.attr.fontSize",h)(-1),b.on("snap.util.attr.font-size",h)(-1),b.on("snap.util.getattr.transform",function(){return b.stop(),this.transform()})(-1),b.on("snap.util.getattr.textpath",function(){return b.stop(),this.textPath})(-1),function(){function c(c){return function(){b.stop();var d=e.doc.defaultView.getComputedStyle(this.node,null).getPropertyValue("marker-"+c);return"none"==d?d:a(e.doc.getElementById(d.match(o)[1]))}}function d(a){return function(c){b.stop();var d="marker"+a.charAt(0).toUpperCase()+a.substring(1);if(""==c||!c)return void(this.node.style[d]="none");if("marker"==c.type){var e=c.node.id;return e||p(c.node,{id:c.id}),void(this.node.style[d]=q(e))}}}b.on("snap.util.getattr.marker-end",c("end"))(-1),b.on("snap.util.getattr.markerEnd",c("end"))(-1),b.on("snap.util.getattr.marker-start",c("start"))(-1),b.on("snap.util.getattr.markerStart",c("start"))(-1),b.on("snap.util.getattr.marker-mid",c("mid"))(-1),b.on("snap.util.getattr.markerMid",c("mid"))(-1),b.on("snap.util.attr.marker-end",d("end"))(-1),b.on("snap.util.attr.markerEnd",d("end"))(-1),b.on("snap.util.attr.marker-start",d("start"))(-1),b.on("snap.util.attr.markerStart",d("start"))(-1),b.on("snap.util.attr.marker-mid",d("mid"))(-1),b.on("snap.util.attr.markerMid",d("mid"))(-1)}(),b.on("snap.util.getattr.r",function(){return"rect"==this.type&&p(this.node,"rx")==p(this.node,"ry")?(b.stop(),p(this.node,"rx")):void 0})(-1),b.on("snap.util.getattr.text",function(){if("text"==this.type||"tspan"==this.type){b.stop();var a=i(this.node);return 1==a.length?a[0]:a}})(-1),b.on("snap.util.getattr.#text",function(){return this.node.textContent})(-1),b.on("snap.util.getattr.fill",function(c){if(!c){b.stop();var d=b("snap.util.getattr.fill",this,!0).firstDefined();return a(a.deurl(d))||d}})(-1),b.on("snap.util.getattr.stroke",function(c){if(!c){b.stop();var d=b("snap.util.getattr.stroke",this,!0).firstDefined();return a(a.deurl(d))||d}})(-1),b.on("snap.util.getattr.viewBox",function(){b.stop();var c=p(this.node,"viewBox");return c?(c=c.split(s),a._.box(+c[0],+c[1],+c[2],+c[3])):void 0})(-1),b.on("snap.util.getattr.points",function(){var a=p(this.node,"points");return b.stop(),a?a.split(s):void 0})(-1),b.on("snap.util.getattr.path",function(){var a=p(this.node,"d");return b.stop(),a})(-1),b.on("snap.util.getattr.class",function(){return this.node.className.baseVal})(-1),b.on("snap.util.getattr.fontSize",j)(-1),b.on("snap.util.getattr.font-size",j)(-1)}),d.plugin(function(a,b,c,d,e){var f=/\S+/g,g=String,h=b.prototype;h.addClass=function(a){var b,c,d,e,h=g(a||"").match(f)||[],i=this.node,j=i.className.baseVal,k=j.match(f)||[];if(h.length){for(b=0;d=h[b++];)c=k.indexOf(d),~c||k.push(d);e=k.join(" "),j!=e&&(i.className.baseVal=e)}return this},h.removeClass=function(a){var b,c,d,e,h=g(a||"").match(f)||[],i=this.node,j=i.className.baseVal,k=j.match(f)||[];if(k.length){for(b=0;d=h[b++];)c=k.indexOf(d),~c&&k.splice(c,1);e=k.join(" "),j!=e&&(i.className.baseVal=e)}return this},h.hasClass=function(a){var b=this.node,c=b.className.baseVal,d=c.match(f)||[];return!!~d.indexOf(a)},h.toggleClass=function(a,b){if(null!=b)return b?this.addClass(a):this.removeClass(a);var c,d,e,g,h=(a||"").match(f)||[],i=this.node,j=i.className.baseVal,k=j.match(f)||[];for(c=0;e=h[c++];)d=k.indexOf(e),~d?k.splice(d,1):k.push(e);return g=k.join(" "),j!=g&&(i.className.baseVal=g),this}}),d.plugin(function(a,c,d,e,f){function g(a){return a}function h(a){return function(b){return+b.toFixed(3)+a}}var i={"+":function(a,b){return a+b},"-":function(a,b){return a-b},"/":function(a,b){return a/b},"*":function(a,b){return a*b}},j=String,k=/[a-z]+$/i,l=/^\s*([+\-\/*])\s*=\s*([\d.eE+\-]+)\s*([^\d\s]+)?\s*$/;b.on("snap.util.attr",function(a){var c=j(a).match(l);if(c){var d=b.nt(),e=d.substring(d.lastIndexOf(".")+1),f=this.attr(e),g={};b.stop();var h=c[3]||"",m=f.match(k),n=i[c[1]];if(m&&m==h?a=n(parseFloat(f),+c[2]):(f=this.asPX(e),a=n(this.asPX(e),this.asPX(e,c[2]+h))),isNaN(f)||isNaN(a))return;g[e]=a,this.attr(g)}})(-10),b.on("snap.util.equal",function(a,c){var d=j(this.attr(a)||""),e=j(c).match(l);if(e){b.stop();var f=e[3]||"",m=d.match(k),n=i[e[1]];return m&&m==f?{from:parseFloat(d),to:n(parseFloat(d),+e[2]),f:h(m)}:(d=this.asPX(a),{from:d,to:n(d,this.asPX(a,e[2]+f)),f:g})}})(-10)}),d.plugin(function(c,d,e,f,g){var h=e.prototype,i=c.is;h.rect=function(a,b,c,d,e,f){var g;return null==f&&(f=e),i(a,"object")&&"[object Object]"==a?g=a:null!=a&&(g={x:a,y:b,width:c,height:d},null!=e&&(g.rx=e,g.ry=f)),this.el("rect",g)},h.circle=function(a,b,c){var d;return i(a,"object")&&"[object Object]"==a?d=a:null!=a&&(d={cx:a,cy:b,r:c}),this.el("circle",d)};var j=function(){function a(){this.parentNode.removeChild(this)}return function(b,c){var d=f.doc.createElement("img"),e=f.doc.body;d.style.cssText="position:absolute;left:-9999em;top:-9999em",d.onload=function(){c.call(d),d.onload=d.onerror=null,e.removeChild(d)},d.onerror=a,e.appendChild(d),d.src=b}}();h.image=function(a,b,d,e,f){var g=this.el("image");if(i(a,"object")&&"src"in a)g.attr(a);else if(null!=a){var h={"xlink:href":a,preserveAspectRatio:"none"};null!=b&&null!=d&&(h.x=b,h.y=d),null!=e&&null!=f?(h.width=e,h.height=f):j(a,function(){c._.$(g.node,{width:this.offsetWidth,height:this.offsetHeight})}),c._.$(g.node,h)}return g},h.ellipse=function(a,b,c,d){var e;return i(a,"object")&&"[object Object]"==a?e=a:null!=a&&(e={cx:a,cy:b,rx:c,ry:d}),this.el("ellipse",e)},h.path=function(a){var b;return i(a,"object")&&!i(a,"array")?b=a:a&&(b={d:a}),this.el("path",b)},h.group=h.g=function(a){var b=this.el("g");return 1==arguments.length&&a&&!a.type?b.attr(a):arguments.length&&b.add(Array.prototype.slice.call(arguments,0)),b},h.svg=function(a,b,c,d,e,f,g,h){var j={};return i(a,"object")&&null==b?j=a:(null!=a&&(j.x=a),null!=b&&(j.y=b),null!=c&&(j.width=c),null!=d&&(j.height=d),null!=e&&null!=f&&null!=g&&null!=h&&(j.viewBox=[e,f,g,h])),this.el("svg",j)},h.mask=function(a){var b=this.el("mask");return 1==arguments.length&&a&&!a.type?b.attr(a):arguments.length&&b.add(Array.prototype.slice.call(arguments,0)),b},h.ptrn=function(a,b,c,d,e,f,g,h){if(i(a,"object"))var j=a;else j={patternUnits:"userSpaceOnUse"},a&&(j.x=a),b&&(j.y=b),null!=c&&(j.width=c),null!=d&&(j.height=d),null!=e&&null!=f&&null!=g&&null!=h?j.viewBox=[e,f,g,h]:j.viewBox=[a||0,b||0,c||0,d||0];return this.el("pattern",j)},h.use=function(a){return null!=a?(a instanceof d&&(a.attr("id")||a.attr({id:c._.id(a)}),a=a.attr("id")),"#"==String(a).charAt()&&(a=a.substring(1)),this.el("use",{"xlink:href":"#"+a})):d.prototype.use.call(this)},h.symbol=function(a,b,c,d){var e={};return null!=a&&null!=b&&null!=c&&null!=d&&(e.viewBox=[a,b,c,d]),this.el("symbol",e)},h.text=function(a,b,c){var d={};return i(a,"object")?d=a:null!=a&&(d={x:a,y:b,text:c||""}),this.el("text",d)},h.line=function(a,b,c,d){var e={};return i(a,"object")?e=a:null!=a&&(e={x1:a,x2:c,y1:b,y2:d}),this.el("line",e)},h.polyline=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0));var b={};return i(a,"object")&&!i(a,"array")?b=a:null!=a&&(b={points:a}),this.el("polyline",b)},h.polygon=function(a){arguments.length>1&&(a=Array.prototype.slice.call(arguments,0));var b={};return i(a,"object")&&!i(a,"array")?b=a:null!=a&&(b={points:a}),this.el("polygon",b)},function(){function d(){return this.selectAll("stop")}function e(a,b){var d=l("stop"),e={offset:+b+"%"};a=c.color(a),e["stop-color"]=a.hex,a.opacity<1&&(e["stop-opacity"]=a.opacity),l(d,e);for(var f,g=this.stops(),h=0;h<g.length;h++){var i=parseFloat(g[h].attr("offset"));if(i>b){this.node.insertBefore(d,g[h].node),f=!0;break}}return f||this.node.appendChild(d),this}function f(){if("linearGradient"==this.type){var a=l(this.node,"x1")||0,b=l(this.node,"x2")||1,d=l(this.node,"y1")||0,e=l(this.node,"y2")||0;return c._.box(a,d,math.abs(b-a),math.abs(e-d))}var f=this.node.cx||.5,g=this.node.cy||.5,h=this.node.r||0;return c._.box(f-h,g-h,2*h,2*h)}function g(a){var d=a,e=this.stops();if("string"==typeof a&&(d=b("snap.util.grad.parse",null,"l(0,0,0,1)"+a).firstDefined().stops),c.is(d,"array")){for(var f=0;f<e.length;f++)if(d[f]){var g=c.color(d[f].color),h={offset:d[f].offset+"%"};h["stop-color"]=g.hex,g.opacity<1&&(h["stop-opacity"]=g.opacity),e[f].attr(h)}else e[f].remove();for(f=e.length;f<d.length;f++)this.addStop(d[f].color,d[f].offset);return this}}function i(a,c){var d,e=b("snap.util.grad.parse",null,c).firstDefined();if(!e)return null;e.params.unshift(a),d="l"==e.type.toLowerCase()?j.apply(0,e.params):k.apply(0,e.params),e.type!=e.type.toLowerCase()&&l(d.node,{gradientUnits:"userSpaceOnUse"});for(var f=e.stops,g=f.length,h=0;g>h;h++){var i=f[h];d.addStop(i.color,i.offset)}return d}function j(a,b,h,i,j){var k=c._.make("linearGradient",a);return k.stops=d,k.addStop=e,k.getBBox=f,k.setStops=g,null!=b&&l(k.node,{x1:b,y1:h,x2:i,y2:j}),k}function k(a,b,g,h,i,j){var k=c._.make("radialGradient",a);return k.stops=d,k.addStop=e,k.getBBox=f,null!=b&&l(k.node,{cx:b,cy:g,r:h}),null!=i&&null!=j&&l(k.node,{fx:i,fy:j}),k}var l=c._.$;h.gradient=function(a){return i(this.defs,a)},h.gradientLinear=function(a,b,c,d){return j(this.defs,a,b,c,d)},h.gradientRadial=function(a,b,c,d,e){return k(this.defs,a,b,c,d,e)},h.toString=function(){var a,b=this.node.ownerDocument,d=b.createDocumentFragment(),e=b.createElement("div"),f=this.node.cloneNode(!0);return d.appendChild(e),e.appendChild(f),c._.$(f,{xmlns:"http://www.w3.org/2000/svg"}),a=e.innerHTML,d.removeChild(d.firstChild),a},h.toDataURL=function(){return a&&a.btoa?"data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(this))):void 0},h.clear=function(){for(var a,b=this.node.firstChild;b;)a=b.nextSibling,"defs"!=b.tagName?b.parentNode.removeChild(b):h.clear.call({node:b}),b=a}}()}),d.plugin(function(a,b,c,d){function e(a){var b=e.ps=e.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[M](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]}function f(a,b,c,d){return null==a&&(a=b=c=d=0),null==b&&(b=a.y,c=a.width,d=a.height,a=a.x),{x:a,y:b,width:c,w:c,height:d,h:d,x2:a+c,y2:b+d,cx:a+c/2,cy:b+d/2,r1:P.min(c,d)/2,r2:P.max(c,d)/2,r0:P.sqrt(c*c+d*d)/2,path:y(a,b,c,d),vb:[a,b,c,d].join(" ")}}function g(){return this.join(",").replace(N,"$1")}function h(a){var b=L(a);return b.toString=g,b}function i(a,b,c,d,e,f,g,h,i){return null==i?p(a,b,c,d,e,f,g,h):k(a,b,c,d,e,f,g,h,q(a,b,c,d,e,f,g,h,i))}function j(c,d){function e(a){return+(+a).toFixed(3)}return a._.cacher(function(a,f,g){a instanceof b&&(a=a.attr("d")),a=G(a);for(var h,j,l,m,n,o="",p={},q=0,r=0,s=a.length;s>r;r++){if(l=a[r],"M"==l[0])h=+l[1],j=+l[2];else{if(m=i(h,j,l[1],l[2],l[3],l[4],l[5],l[6]),q+m>f){if(d&&!p.start){if(n=i(h,j,l[1],l[2],l[3],l[4],l[5],l[6],f-q),o+=["C"+e(n.start.x),e(n.start.y),e(n.m.x),e(n.m.y),e(n.x),e(n.y)],g)return o;p.start=o,o=["M"+e(n.x),e(n.y)+"C"+e(n.n.x),e(n.n.y),e(n.end.x),e(n.end.y),e(l[5]),e(l[6])].join(),q+=m,h=+l[5],j=+l[6];continue}if(!c&&!d)return n=i(h,j,l[1],l[2],l[3],l[4],l[5],l[6],f-q)}q+=m,h=+l[5],j=+l[6]}o+=l.shift()+l}return p.end=o,n=c?q:d?p:k(h,j,l[0],l[1],l[2],l[3],l[4],l[5],1)},null,a._.clone)}function k(a,b,c,d,e,f,g,h,i){var j=1-i,k=T(j,3),l=T(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*P.atan2(q-s,r-t)/Q;return{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}}function l(b,c,d,e,g,h,i,j){a.is(b,"array")||(b=[b,c,d,e,g,h,i,j]);var k=F.apply(null,b);return f(k.min.x,k.min.y,k.max.x-k.min.x,k.max.y-k.min.y)}function m(a,b,c){return b>=a.x&&b<=a.x+a.width&&c>=a.y&&c<=a.y+a.height}function n(a,b){return a=f(a),b=f(b),m(b,a.x,a.y)||m(b,a.x2,a.y)||m(b,a.x,a.y2)||m(b,a.x2,a.y2)||m(a,b.x,b.y)||m(a,b.x2,b.y)||m(a,b.x,b.y2)||m(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)}function o(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function p(a,b,c,d,e,f,g,h,i){null==i&&(i=1),i=i>1?1:0>i?0:i;for(var j=i/2,k=12,l=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],m=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],n=0,p=0;k>p;p++){var q=j*l[p]+j,r=o(q,a,c,e,g),s=o(q,b,d,f,h),t=r*r+s*s;n+=m[p]*P.sqrt(t)}return j*n}function q(a,b,c,d,e,f,g,h,i){if(!(0>i||p(a,b,c,d,e,f,g,h)<i)){var j,k=1,l=k/2,m=k-l,n=.01;for(j=p(a,b,c,d,e,f,g,h,m);U(j-i)>n;)l/=2,m+=(i>j?1:-1)*l,j=p(a,b,c,d,e,f,g,h,m);return m}}function r(a,b,c,d,e,f,g,h){if(!(S(a,c)<R(e,g)||R(a,c)>S(e,g)||S(b,d)<R(f,h)||R(b,d)>S(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+R(a,c).toFixed(2)||n>+S(a,c).toFixed(2)||n<+R(e,g).toFixed(2)||n>+S(e,g).toFixed(2)||o<+R(b,d).toFixed(2)||o>+S(b,d).toFixed(2)||o<+R(f,h).toFixed(2)||o>+S(f,h).toFixed(2)))return{x:l,y:m}}}}function s(a,b,c){var d=l(a),e=l(b);if(!n(d,e))return c?0:[];for(var f=p.apply(0,a),g=p.apply(0,b),h=~~(f/8),i=~~(g/8),j=[],m=[],o={},q=c?0:[],s=0;h+1>s;s++){var t=k.apply(0,a.concat(s/h));j.push({x:t.x,y:t.y,t:s/h})}for(s=0;i+1>s;s++)t=k.apply(0,b.concat(s/i)),m.push({x:t.x,y:t.y,t:s/i});for(s=0;h>s;s++)for(var u=0;i>u;u++){var v=j[s],w=j[s+1],x=m[u],y=m[u+1],z=U(w.x-v.x)<.001?"y":"x",A=U(y.x-x.x)<.001?"y":"x",B=r(v.x,v.y,w.x,w.y,x.x,x.y,y.x,y.y);if(B){if(o[B.x.toFixed(4)]==B.y.toFixed(4))continue;o[B.x.toFixed(4)]=B.y.toFixed(4);var C=v.t+U((B[z]-v[z])/(w[z]-v[z]))*(w.t-v.t),D=x.t+U((B[A]-x[A])/(y[A]-x[A]))*(y.t-x.t);C>=0&&1>=C&&D>=0&&1>=D&&(c?q++:q.push({x:B.x,y:B.y,t1:C,t2:D}))}}return q}function t(a,b){return v(a,b)}function u(a,b){return v(a,b,1)}function v(a,b,c){a=G(a),b=G(b);for(var d,e,f,g,h,i,j,k,l,m,n=c?0:[],o=0,p=a.length;p>o;o++){var q=a[o];if("M"==q[0])d=h=q[1],e=i=q[2];else{"C"==q[0]?(l=[d,e].concat(q.slice(1)),d=l[6],e=l[7]):(l=[d,e,d,e,h,i,h,i],d=h,e=i);for(var r=0,t=b.length;t>r;r++){var u=b[r];if("M"==u[0])f=j=u[1],g=k=u[2];else{"C"==u[0]?(m=[f,g].concat(u.slice(1)),f=m[6],g=m[7]):(m=[f,g,f,g,j,k,j,k],f=j,g=k);var v=s(l,m,c);if(c)n+=v;else{for(var w=0,x=v.length;x>w;w++)v[w].segment1=o,v[w].segment2=r,v[w].bez1=l,v[w].bez2=m;n=n.concat(v)}}}}}return n}function w(a,b,c){var d=x(a);return m(d,b,c)&&v(a,[["M",b,c],["H",d.x2+10]],1)%2==1}function x(a){var b=e(a);if(b.bbox)return L(b.bbox);if(!a)return f();a=G(a);for(var c,d=0,g=0,h=[],i=[],j=0,k=a.length;k>j;j++)if(c=a[j],"M"==c[0])d=c[1],g=c[2],h.push(d),i.push(g);else{var l=F(d,g,c[1],c[2],c[3],c[4],c[5],c[6]);h=h.concat(l.min.x,l.max.x),i=i.concat(l.min.y,l.max.y),d=c[5],g=c[6]}var m=R.apply(0,h),n=R.apply(0,i),o=S.apply(0,h),p=S.apply(0,i),q=f(m,n,o-m,p-n);return b.bbox=L(q),q}function y(a,b,c,d,e){if(e)return[["M",+a+ +e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]];var f=[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]];return f.toString=g,f}function z(a,b,c,d,e){if(null==e&&null==d&&(d=c),a=+a,b=+b,c=+c,d=+d,null!=e)var f=Math.PI/180,h=a+c*Math.cos(-d*f),i=a+c*Math.cos(-e*f),j=b+c*Math.sin(-d*f),k=b+c*Math.sin(-e*f),l=[["M",h,j],["A",c,c,0,+(e-d>180),0,i,k]];else l=[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]];return l.toString=g,l}function A(b){var c=e(b),d=String.prototype.toLowerCase;if(c.rel)return h(c.rel);a.is(b,"array")&&a.is(b&&b[0],"array")||(b=a.parsePathString(b));var f=[],i=0,j=0,k=0,l=0,m=0;"M"==b[0][0]&&(i=b[0][1],j=b[0][2],k=i,l=j,m++,f.push(["M",i,j]));for(var n=m,o=b.length;o>n;n++){var p=f[n]=[],q=b[n];if(q[0]!=d.call(q[0]))switch(p[0]=d.call(q[0]),p[0]){case"a":p[1]=q[1],p[2]=q[2],p[3]=q[3],p[4]=q[4],p[5]=q[5],p[6]=+(q[6]-i).toFixed(3),p[7]=+(q[7]-j).toFixed(3);break;case"v":p[1]=+(q[1]-j).toFixed(3);break;case"m":k=q[1],l=q[2];default:for(var r=1,s=q.length;s>r;r++)p[r]=+(q[r]-(r%2?i:j)).toFixed(3)}else{p=f[n]=[],"m"==q[0]&&(k=q[1]+i,l=q[2]+j);for(var t=0,u=q.length;u>t;t++)f[n][t]=q[t]}var v=f[n].length;switch(f[n][0]){case"z":i=k,j=l;break;case"h":i+=+f[n][v-1];break;case"v":j+=+f[n][v-1];break;default:i+=+f[n][v-2],j+=+f[n][v-1]}}return f.toString=g,c.rel=h(f),f}function B(b){var c=e(b);if(c.abs)return h(c.abs);if(K(b,"array")&&K(b&&b[0],"array")||(b=a.parsePathString(b)),!b||!b.length)return[["M",0,0]];var d,f=[],i=0,j=0,k=0,l=0,m=0;"M"==b[0][0]&&(i=+b[0][1],j=+b[0][2],k=i,l=j,m++,f[0]=["M",i,j]);for(var n,o,p=3==b.length&&"M"==b[0][0]&&"R"==b[1][0].toUpperCase()&&"Z"==b[2][0].toUpperCase(),q=m,r=b.length;r>q;q++){if(f.push(n=[]),o=b[q],d=o[0],d!=d.toUpperCase())switch(n[0]=d.toUpperCase(),n[0]){case"A":n[1]=o[1],n[2]=o[2],n[3]=o[3],n[4]=o[4],n[5]=o[5],n[6]=+o[6]+i,n[7]=+o[7]+j;break;case"V":n[1]=+o[1]+j;break;case"H":n[1]=+o[1]+i;break;case"R":for(var s=[i,j].concat(o.slice(1)),t=2,u=s.length;u>t;t++)s[t]=+s[t]+i,s[++t]=+s[t]+j;f.pop(),f=f.concat(I(s,p));break;case"O":f.pop(),s=z(i,j,o[1],o[2]),s.push(s[0]),f=f.concat(s);break;case"U":f.pop(),f=f.concat(z(i,j,o[1],o[2],o[3])),n=["U"].concat(f[f.length-1].slice(-2));break;case"M":k=+o[1]+i,l=+o[2]+j;default:for(t=1,u=o.length;u>t;t++)n[t]=+o[t]+(t%2?i:j)}else if("R"==d)s=[i,j].concat(o.slice(1)),f.pop(),f=f.concat(I(s,p)),n=["R"].concat(o.slice(-2));else if("O"==d)f.pop(),s=z(i,j,o[1],o[2]),s.push(s[0]),f=f.concat(s);else if("U"==d)f.pop(),f=f.concat(z(i,j,o[1],o[2],o[3])),n=["U"].concat(f[f.length-1].slice(-2));else for(var v=0,w=o.length;w>v;v++)n[v]=o[v];if(d=d.toUpperCase(),"O"!=d)switch(n[0]){case"Z":i=+k,j=+l;break;case"H":i=n[1];break;case"V":j=n[1];break;case"M":k=n[n.length-2],l=n[n.length-1];default:i=n[n.length-2],j=n[n.length-1]}}return f.toString=g,c.abs=h(f),f}function C(a,b,c,d){return[a,b,c,d,c,d]}function D(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]}function E(b,c,d,e,f,g,h,i,j,k){var l,m=120*Q/180,n=Q/180*(+f||0),o=[],p=a._.cacher(function(a,b,c){var d=a*P.cos(c)-b*P.sin(c),e=a*P.sin(c)+b*P.cos(c);return{x:d,y:e}});if(!d||!e)return[b,c,i,j,i,j];if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(b,c,-n),b=l.x,c=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(P.cos(Q/180*f),P.sin(Q/180*f),(b-i)/2),r=(c-j)/2,s=q*q/(d*d)+r*r/(e*e);s>1&&(s=P.sqrt(s),d=s*d,e=s*e);var t=d*d,u=e*e,v=(g==h?-1:1)*P.sqrt(U((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*d*r/e+(b+i)/2,x=v*-e*q/d+(c+j)/2,y=P.asin(((c-x)/e).toFixed(9)),z=P.asin(((j-x)/e).toFixed(9));y=w>b?Q-y:y,z=w>i?Q-z:z,0>y&&(y=2*Q+y),0>z&&(z=2*Q+z),h&&y>z&&(y-=2*Q),!h&&z>y&&(z-=2*Q)}var A=z-y;if(U(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+d*P.cos(z),j=x+e*P.sin(z),o=E(i,j,d,e,f,0,h,C,D,[z,B,w,x])}A=z-y;var F=P.cos(y),G=P.sin(y),H=P.cos(z),I=P.sin(z),J=P.tan(A/4),K=4/3*d*J,L=4/3*e*J,M=[b,c],N=[b+K*G,c-L*F],O=[i+K*I,j-L*H],R=[i,j];if(N[0]=2*M[0]-N[0],N[1]=2*M[1]-N[1],k)return[N,O,R].concat(o);o=[N,O,R].concat(o).join().split(",");for(var S=[],T=0,V=o.length;V>T;T++)S[T]=T%2?p(o[T-1],o[T],n).y:p(o[T],o[T+1],n).x;return S}function F(a,b,c,d,e,f,g,h){for(var i,j,k,l,m,n,o,p,q=[],r=[[],[]],s=0;2>s;++s)if(0==s?(j=6*a-12*c+6*e,i=-3*a+9*c-9*e+3*g,k=3*c-3*a):(j=6*b-12*d+6*f,i=-3*b+9*d-9*f+3*h,k=3*d-3*b),U(i)<1e-12){if(U(j)<1e-12)continue;l=-k/j,l>0&&1>l&&q.push(l)}else o=j*j-4*k*i,p=P.sqrt(o),0>o||(m=(-j+p)/(2*i),m>0&&1>m&&q.push(m),n=(-j-p)/(2*i),n>0&&1>n&&q.push(n));for(var t,u=q.length,v=u;u--;)l=q[u],t=1-l,r[0][u]=t*t*t*a+3*t*t*l*c+3*t*l*l*e+l*l*l*g,r[1][u]=t*t*t*b+3*t*t*l*d+3*t*l*l*f+l*l*l*h;return r[0][v]=a,r[1][v]=b,r[0][v+1]=g,r[1][v+1]=h,r[0].length=r[1].length=v+2,{min:{x:R.apply(0,r[0]),y:R.apply(0,r[1])},max:{x:S.apply(0,r[0]),y:S.apply(0,r[1])}}}function G(a,b){var c=!b&&e(a);if(!b&&c.curve)return h(c.curve);for(var d=B(a),f=b&&B(b),g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},i={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},j=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"].concat(E.apply(0,[b.x,b.y].concat(a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e].concat(a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"].concat(D(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"].concat(D(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"].concat(C(b.x,b.y,a[1],a[2]));break;case"H":a=["C"].concat(C(b.x,b.y,a[1],b.y));break;case"V":a=["C"].concat(C(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"].concat(C(b.x,b.y,b.X,b.Y))}return a}),k=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)m[b]="A",f&&(n[b]="A"),a.splice(b++,0,["C"].concat(c.splice(0,6)));a.splice(b,1),r=S(d.length,f&&f.length||0)}},l=function(a,b,c,e,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",e.x,e.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],r=S(d.length,f&&f.length||0))},m=[],n=[],o="",p="",q=0,r=S(d.length,f&&f.length||0);r>q;q++){d[q]&&(o=d[q][0]),"C"!=o&&(m[q]=o,q&&(p=m[q-1])),d[q]=j(d[q],g,p),"A"!=m[q]&&"C"==o&&(m[q]="C"),k(d,q),f&&(f[q]&&(o=f[q][0]),"C"!=o&&(n[q]=o,q&&(p=n[q-1])),f[q]=j(f[q],i,p),"A"!=n[q]&&"C"==o&&(n[q]="C"),k(f,q)),l(d,f,g,i,q),l(f,d,i,g,q);var s=d[q],t=f&&f[q],u=s.length,v=f&&t.length;g.x=s[u-2],g.y=s[u-1],g.bx=O(s[u-4])||g.x,g.by=O(s[u-3])||g.y,i.bx=f&&(O(t[v-4])||i.x),i.by=f&&(O(t[v-3])||i.y),i.x=f&&t[v-2],i.y=f&&t[v-1]}return f||(c.curve=h(d)),f?[d,f]:d}function H(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=G(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a}function I(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}var J=b.prototype,K=a.is,L=a._.clone,M="hasOwnProperty",N=/,?([a-z]),?/gi,O=parseFloat,P=Math,Q=P.PI,R=P.min,S=P.max,T=P.pow,U=P.abs,V=j(1),W=j(),X=j(0,1),Y=a._unit2px,Z={path:function(a){return a.attr("path")},circle:function(a){var b=Y(a);return z(b.cx,b.cy,b.r)},ellipse:function(a){var b=Y(a);return z(b.cx||0,b.cy||0,b.rx,b.ry);
},rect:function(a){var b=Y(a);return y(b.x||0,b.y||0,b.width,b.height,b.rx,b.ry)},image:function(a){var b=Y(a);return y(b.x||0,b.y||0,b.width,b.height)},line:function(a){return"M"+[a.attr("x1")||0,a.attr("y1")||0,a.attr("x2"),a.attr("y2")]},polyline:function(a){return"M"+a.attr("points")},polygon:function(a){return"M"+a.attr("points")+"z"},deflt:function(a){var b=a.node.getBBox();return y(b.x,b.y,b.width,b.height)}};a.path=e,a.path.getTotalLength=V,a.path.getPointAtLength=W,a.path.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return X(a,b).end;var d=X(a,c,1);return b?X(d,b).end:d},J.getTotalLength=function(){return this.node.getTotalLength?this.node.getTotalLength():void 0},J.getPointAtLength=function(a){return W(this.attr("d"),a)},J.getSubpath=function(b,c){return a.path.getSubpath(this.attr("d"),b,c)},a._.box=f,a.path.findDotsAtSegment=k,a.path.bezierBBox=l,a.path.isPointInsideBBox=m,a.closest=function(b,c,d,e){for(var g=100,h=f(b-g/2,c-g/2,g,g),i=[],j=d[0].hasOwnProperty("x")?function(a){return{x:d[a].x,y:d[a].y}}:function(a){return{x:d[a],y:e[a]}},k=0;1e6>=g&&!k;){for(var l=0,n=d.length;n>l;l++){var o=j(l);if(m(h,o.x,o.y)){k++,i.push(o);break}}k||(g*=2,h=f(b-g/2,c-g/2,g,g))}if(1e6!=g){var p,q=1/0;for(l=0,n=i.length;n>l;l++){var r=a.len(b,c,i[l].x,i[l].y);q>r&&(q=r,i[l].len=r,p=i[l])}return p}},a.path.isBBoxIntersect=n,a.path.intersection=t,a.path.intersectionNumber=u,a.path.isPointInside=w,a.path.getBBox=x,a.path.get=Z,a.path.toRelative=A,a.path.toAbsolute=B,a.path.toCubic=G,a.path.map=H,a.path.toString=g,a.path.clone=h}),d.plugin(function(a,d,e,f){var g=Math.max,h=Math.min,i=function(a){if(this.items=[],this.bindings={},this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)a[b]&&(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},j=i.prototype;j.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],a&&(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},j.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},j.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this},j.animate=function(d,e,f,g){"function"!=typeof f||f.length||(g=f,f=c.linear),d instanceof a._.Animation&&(g=d.callback,f=d.easing,e=f.dur,d=d.attr);var h=arguments;if(a.is(d,"array")&&a.is(h[h.length-1],"array"))var i=!0;var j,k=function(){j?this.b=j:j=this.b},l=0,m=this,n=g&&function(){++l==m.length&&g.call(this)};return this.forEach(function(a,c){b.once("snap.animcreated."+a.id,k),i?h[c]&&a.animate.apply(a,h[c]):a.animate(d,e,f,n)})},j.remove=function(){for(;this.length;)this.pop().remove();return this},j.bind=function(a,b,c){var d={};if("function"==typeof b)this.bindings[a]=b;else{var e=c||a;this.bindings[a]=function(a){d[e]=a,b.attr(d)}}return this},j.attr=function(a){var b={};for(var c in a)this.bindings[c]?this.bindings[c](a[c]):b[c]=a[c];for(var d=0,e=this.items.length;e>d;d++)this.items[d].attr(b);return this},j.clear=function(){for(;this.length;)this.pop()},j.splice=function(a,b,c){a=0>a?g(this.length+a,0):a,b=g(0,h(this.length-a,b));var d,e=[],f=[],j=[];for(d=2;d<arguments.length;d++)j.push(arguments[d]);for(d=0;b>d;d++)f.push(this[a+d]);for(;d<this.length-a;d++)e.push(this[a+d]);var k=j.length;for(d=0;d<k+e.length;d++)this.items[a+d]=this[a+d]=k>d?j[d]:e[d-k];for(d=this.items.length=this.length-=b-k;this[d];)delete this[d++];return new i(f)},j.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0;return!1},j.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},j.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=h.apply(0,a),b=h.apply(0,b),c=g.apply(0,c),d=g.apply(0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b,cx:a+(c-a)/2,cy:b+(d-b)/2}},j.clone=function(a){a=new i;for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},j.toString=function(){return"Snap‘s set"},j.type="set",a.Set=i,a.set=function(){var a=new i;return arguments.length&&a.push.apply(a,Array.prototype.slice.call(arguments,0)),a}}),d.plugin(function(a,c,d,e){function f(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}}function g(b,c,d){b=b||new a.Matrix,c=c||new a.Matrix,b=a.parseTransformString(b.toTransformString())||[],c=a.parseTransformString(c.toTransformString())||[];for(var e,g,h,i,j=Math.max(b.length,c.length),k=[],n=[],o=0;j>o;o++){if(h=b[o]||f(c[o]),i=c[o]||f(h),h[0]!=i[0]||"r"==h[0].toLowerCase()&&(h[2]!=i[2]||h[3]!=i[3])||"s"==h[0].toLowerCase()&&(h[3]!=i[3]||h[4]!=i[4])){b=a._.transform2matrix(b,d()),c=a._.transform2matrix(c,d()),k=[["m",b.a,b.b,b.c,b.d,b.e,b.f]],n=[["m",c.a,c.b,c.c,c.d,c.e,c.f]];break}for(k[o]=[],n[o]=[],e=0,g=Math.max(h.length,i.length);g>e;e++)e in h&&(k[o][e]=h[e]),e in i&&(n[o][e]=i[e])}return{from:m(k),to:m(n),f:l(k)}}function h(a){return a}function i(a){return function(b){return+b.toFixed(3)+a}}function j(a){return a.join(" ")}function k(b){return a.rgb(b[0],b[1],b[2],b[3])}function l(a){var b,c,d,e,f,g,h=0,i=[];for(b=0,c=a.length;c>b;b++){for(f="[",g=['"'+a[b][0]+'"'],d=1,e=a[b].length;e>d;d++)g[d]="val["+h++ +"]";f+=g+"]",i[b]=f}return Function("val","return Snap.path.toString.call(["+i+"])")}function m(a){for(var b=[],c=0,d=a.length;d>c;c++)for(var e=1,f=a[c].length;f>e;e++)b.push(a[c][e]);return b}function n(a){return isFinite(a)}function o(b,c){return a.is(b,"array")&&a.is(c,"array")?b.toString()==c.toString():!1}var p={},q=/[%a-z]+$/i,r=String;p.stroke=p.fill="colour",c.prototype.equal=function(a,c){return b("snap.util.equal",this,a,c).firstDefined()},b.on("snap.util.equal",function(b,c){var d,e,f=r(this.attr(b)||""),s=this;if("colour"==p[b])return d=a.color(f),e=a.color(c),{from:[d.r,d.g,d.b,d.opacity],to:[e.r,e.g,e.b,e.opacity],f:k};if("viewBox"==b)return d=this.attr(b).vb.split(" ").map(Number),e=c.split(" ").map(Number),{from:d,to:e,f:j};if("transform"==b||"gradientTransform"==b||"patternTransform"==b)return"string"==typeof c&&(c=r(c).replace(/\.{3}|\u2026/g,f)),f=this.matrix,c=a._.rgTransform.test(c)?a._.transform2matrix(c,this.getBBox()):a._.transform2matrix(a._.svgTransform2string(c),this.getBBox()),g(f,c,function(){return s.getBBox(1)});if("d"==b||"path"==b)return d=a.path.toCubic(f,c),{from:m(d[0]),to:m(d[1]),f:l(d[0])};if("points"==b)return d=r(f).split(a._.separator),e=r(c).split(a._.separator),{from:d,to:e,f:function(a){return a}};if(n(f)&&n(c))return{from:parseFloat(f),to:parseFloat(c),f:h};var t=f.match(q),u=r(c).match(q);return t&&o(t,u)?{from:parseFloat(f),to:parseFloat(c),f:i(t)}:{from:this.asPX(b),to:this.asPX(b,c),f:h}})}),d.plugin(function(a,c,d,e){for(var f=c.prototype,g="hasOwnProperty",h=("createTouch"in e.doc),i=["click","dblclick","mousedown","mousemove","mouseout","mouseover","mouseup","touchstart","touchmove","touchend","touchcancel"],j={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},k=(function(a,b){var c="y"==a?"scrollTop":"scrollLeft",d=b&&b.node?b.node.ownerDocument:e.doc;return d[c in d.documentElement?"documentElement":"body"][c]}),l=function(){return this.originalEvent.preventDefault()},m=function(){return this.originalEvent.stopPropagation()},n=function(a,b,c,d){var e=h&&j[b]?j[b]:b,f=function(e){var f=k("y",d),i=k("x",d);if(h&&j[g](b))for(var n=0,o=e.targetTouches&&e.targetTouches.length;o>n;n++)if(e.targetTouches[n].target==a||a.contains(e.targetTouches[n].target)){var p=e;e=e.targetTouches[n],e.originalEvent=p,e.preventDefault=l,e.stopPropagation=m;break}var q=e.clientX+i,r=e.clientY+f;return c.call(d,e,q,r)};return b!==e&&a.addEventListener(b,f,!1),a.addEventListener(e,f,!1),function(){return b!==e&&a.removeEventListener(b,f,!1),a.removeEventListener(e,f,!1),!0}},o=[],p=function(a){for(var c,d=a.clientX,e=a.clientY,f=k("y"),g=k("x"),i=o.length;i--;){if(c=o[i],h){for(var j,l=a.touches&&a.touches.length;l--;)if(j=a.touches[l],j.identifier==c.el._drag.id||c.el.node.contains(j.target)){d=j.clientX,e=j.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var m=c.el.node;m.nextSibling,m.parentNode,m.style.display;d+=g,e+=f,b("snap.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a)}},q=function(c){a.unmousemove(p).unmouseup(q);for(var d,e=o.length;e--;)d=o[e],d.el._drag={},b("snap.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,c),b.off("snap.drag.*."+d.el.id);o=[]},r=i.length;r--;)!function(b){a[b]=f[b]=function(c,d){if(a.is(c,"function"))this.events=this.events||[],this.events.push({name:b,f:c,unbind:n(this.node||document,b,c,d||this)});else for(var e=0,f=this.events.length;f>e;e++)if(this.events[e].name==b)try{this.events[e].f.call(this)}catch(g){}return this},a["un"+b]=f["un"+b]=function(a){for(var c=this.events||[],d=c.length;d--;)if(c[d].name==b&&(c[d].f==a||!a))return c[d].unbind(),c.splice(d,1),!c.length&&delete this.events,this;return this}}(i[r]);f.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},f.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var s=[];f.drag=function(c,d,e,f,g,h){function i(i,j,l){(i.originalEvent||i).preventDefault(),k._drag.x=j,k._drag.y=l,k._drag.id=i.identifier,!o.length&&a.mousemove(p).mouseup(q),o.push({el:k,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("snap.drag.start."+k.id,d),c&&b.on("snap.drag.move."+k.id,c),e&&b.on("snap.drag.end."+k.id,e),b("snap.drag.start."+k.id,g||f||k,j,l,i)}function j(a,c,d){b("snap.draginit."+k.id,k,a,c,d)}var k=this;if(!arguments.length){var l;return k.drag(function(a,b){this.attr({transform:l+(l?"T":"t")+[a,b]})},function(){l=this.transform().local})}return b.on("snap.draginit."+k.id,i),k._drag={},s.push({el:k,start:i,init:j}),k.mousedown(j),k},f.undrag=function(){for(var c=s.length;c--;)s[c].el==this&&(this.unmousedown(s[c].init),s.splice(c,1),b.unbind("snap.drag.*."+this.id),b.unbind("snap.draginit."+this.id));return!s.length&&a.unmousemove(p).unmouseup(q),this}}),d.plugin(function(a,c,d,e){var f=(c.prototype,d.prototype),g=/^\s*url\((.+)\)/,h=String,i=a._.$;a.filter={},f.filter=function(b){var d=this;"svg"!=d.type&&(d=d.paper);var e=a.parse(h(b)),f=a._.id(),g=(d.node.offsetWidth,d.node.offsetHeight,i("filter"));return i(g,{id:f,filterUnits:"userSpaceOnUse"}),g.appendChild(e.node),d.defs.appendChild(g),new c(g)},b.on("snap.util.getattr.filter",function(){b.stop();var c=i(this.node,"filter");if(c){var d=h(c).match(g);return d&&a.select(d[1])}}),b.on("snap.util.attr.filter",function(d){if(d instanceof c&&"filter"==d.type){b.stop();var e=d.node.id;e||(i(d.node,{id:d.id}),e=d.id),i(this.node,{filter:a.url(e)})}d&&"none"!=d||(b.stop(),this.node.removeAttribute("filter"))}),a.filter.blur=function(b,c){null==b&&(b=2);var d=null==c?b:[b,c];return a.format('<feGaussianBlur stdDeviation="{def}"/>',{def:d})},a.filter.blur.toString=function(){return this()},a.filter.shadow=function(b,c,d,e,f){return null==f&&(null==e?(f=d,d=4,e="#000"):(f=e,e=d,d=4)),null==d&&(d=4),null==f&&(f=1),null==b&&(b=0,c=2),null==c&&(c=b),e=a.color(e),a.format('<feGaussianBlur in="SourceAlpha" stdDeviation="{blur}"/><feOffset dx="{dx}" dy="{dy}" result="offsetblur"/><feFlood flood-color="{color}"/><feComposite in2="offsetblur" operator="in"/><feComponentTransfer><feFuncA type="linear" slope="{opacity}"/></feComponentTransfer><feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>',{color:e,dx:b,dy:c,blur:d,opacity:f})},a.filter.shadow.toString=function(){return this()},a.filter.grayscale=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {b} {h} 0 0 0 0 0 1 0"/>',{a:.2126+.7874*(1-b),b:.7152-.7152*(1-b),c:.0722-.0722*(1-b),d:.2126-.2126*(1-b),e:.7152+.2848*(1-b),f:.0722-.0722*(1-b),g:.2126-.2126*(1-b),h:.0722+.9278*(1-b)})},a.filter.grayscale.toString=function(){return this()},a.filter.sepia=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="matrix" values="{a} {b} {c} 0 0 {d} {e} {f} 0 0 {g} {h} {i} 0 0 0 0 0 1 0"/>',{a:.393+.607*(1-b),b:.769-.769*(1-b),c:.189-.189*(1-b),d:.349-.349*(1-b),e:.686+.314*(1-b),f:.168-.168*(1-b),g:.272-.272*(1-b),h:.534-.534*(1-b),i:.131+.869*(1-b)})},a.filter.sepia.toString=function(){return this()},a.filter.saturate=function(b){return null==b&&(b=1),a.format('<feColorMatrix type="saturate" values="{amount}"/>',{amount:1-b})},a.filter.saturate.toString=function(){return this()},a.filter.hueRotate=function(b){return b=b||0,a.format('<feColorMatrix type="hueRotate" values="{angle}"/>',{angle:b})},a.filter.hueRotate.toString=function(){return this()},a.filter.invert=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="table" tableValues="{amount} {amount2}"/><feFuncG type="table" tableValues="{amount} {amount2}"/><feFuncB type="table" tableValues="{amount} {amount2}"/></feComponentTransfer>',{amount:b,amount2:1-b})},a.filter.invert.toString=function(){return this()},a.filter.brightness=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}"/><feFuncG type="linear" slope="{amount}"/><feFuncB type="linear" slope="{amount}"/></feComponentTransfer>',{amount:b})},a.filter.brightness.toString=function(){return this()},a.filter.contrast=function(b){return null==b&&(b=1),a.format('<feComponentTransfer><feFuncR type="linear" slope="{amount}" intercept="{amount2}"/><feFuncG type="linear" slope="{amount}" intercept="{amount2}"/><feFuncB type="linear" slope="{amount}" intercept="{amount2}"/></feComponentTransfer>',{amount:b,amount2:.5-b/2})},a.filter.contrast.toString=function(){return this()}}),d.plugin(function(a,b,c,d,e){var f=a._.box,g=a.is,h=/^[^a-z]*([tbmlrc])/i,i=function(){return"T"+this.dx+","+this.dy};b.prototype.getAlign=function(a,b){null==b&&g(a,"string")&&(b=a,a=null),a=a||this.paper;var c=a.getBBox?a.getBBox():f(a),d=this.getBBox(),e={};switch(b=b&&b.match(h),b=b?b[1].toLowerCase():"c"){case"t":e.dx=0,e.dy=c.y-d.y;break;case"b":e.dx=0,e.dy=c.y2-d.y2;break;case"m":e.dx=0,e.dy=c.cy-d.cy;break;case"l":e.dx=c.x-d.x,e.dy=0;break;case"r":e.dx=c.x2-d.x2,e.dy=0;break;default:e.dx=c.cx-d.cx,e.dy=0}return e.toString=i,e},b.prototype.align=function(a,b){return this.transform("..."+this.getAlign(a,b))}}),d.plugin(function(b,c,d,e){function f(a){a=a.split(/(?=#)/);var b=new String(a[5]);return b[50]=a[0],b[100]=a[1],b[200]=a[2],b[300]=a[3],b[400]=a[4],b[500]=a[5],b[600]=a[6],b[700]=a[7],b[800]=a[8],b[900]=a[9],a[10]&&(b.A100=a[10],b.A200=a[11],b.A400=a[12],b.A700=a[13]),b}var g="#ffebee#ffcdd2#ef9a9a#e57373#ef5350#f44336#e53935#d32f2f#c62828#b71c1c#ff8a80#ff5252#ff1744#d50000",h="#FCE4EC#F8BBD0#F48FB1#F06292#EC407A#E91E63#D81B60#C2185B#AD1457#880E4F#FF80AB#FF4081#F50057#C51162",i="#F3E5F5#E1BEE7#CE93D8#BA68C8#AB47BC#9C27B0#8E24AA#7B1FA2#6A1B9A#4A148C#EA80FC#E040FB#D500F9#AA00FF",j="#EDE7F6#D1C4E9#B39DDB#9575CD#7E57C2#673AB7#5E35B1#512DA8#4527A0#311B92#B388FF#7C4DFF#651FFF#6200EA",k="#E8EAF6#C5CAE9#9FA8DA#7986CB#5C6BC0#3F51B5#3949AB#303F9F#283593#1A237E#8C9EFF#536DFE#3D5AFE#304FFE",l="#E3F2FD#BBDEFB#90CAF9#64B5F6#64B5F6#2196F3#1E88E5#1976D2#1565C0#0D47A1#82B1FF#448AFF#2979FF#2962FF",m="#E1F5FE#B3E5FC#81D4FA#4FC3F7#29B6F6#03A9F4#039BE5#0288D1#0277BD#01579B#80D8FF#40C4FF#00B0FF#0091EA",n="#E0F7FA#B2EBF2#80DEEA#4DD0E1#26C6DA#00BCD4#00ACC1#0097A7#00838F#006064#84FFFF#18FFFF#00E5FF#00B8D4",o="#E0F2F1#B2DFDB#80CBC4#4DB6AC#26A69A#009688#00897B#00796B#00695C#004D40#A7FFEB#64FFDA#1DE9B6#00BFA5",p="#E8F5E9#C8E6C9#A5D6A7#81C784#66BB6A#4CAF50#43A047#388E3C#2E7D32#1B5E20#B9F6CA#69F0AE#00E676#00C853",q="#F1F8E9#DCEDC8#C5E1A5#AED581#9CCC65#8BC34A#7CB342#689F38#558B2F#33691E#CCFF90#B2FF59#76FF03#64DD17",r="#F9FBE7#F0F4C3#E6EE9C#DCE775#D4E157#CDDC39#C0CA33#AFB42B#9E9D24#827717#F4FF81#EEFF41#C6FF00#AEEA00",s="#FFFDE7#FFF9C4#FFF59D#FFF176#FFEE58#FFEB3B#FDD835#FBC02D#F9A825#F57F17#FFFF8D#FFFF00#FFEA00#FFD600",t="#FFF8E1#FFECB3#FFE082#FFD54F#FFCA28#FFC107#FFB300#FFA000#FF8F00#FF6F00#FFE57F#FFD740#FFC400#FFAB00",u="#FFF3E0#FFE0B2#FFCC80#FFB74D#FFA726#FF9800#FB8C00#F57C00#EF6C00#E65100#FFD180#FFAB40#FF9100#FF6D00",v="#FBE9E7#FFCCBC#FFAB91#FF8A65#FF7043#FF5722#F4511E#E64A19#D84315#BF360C#FF9E80#FF6E40#FF3D00#DD2C00",w="#EFEBE9#D7CCC8#BCAAA4#A1887F#8D6E63#795548#6D4C41#5D4037#4E342E#3E2723",x="#FAFAFA#F5F5F5#EEEEEE#E0E0E0#BDBDBD#9E9E9E#757575#616161#424242#212121",y="#ECEFF1#CFD8DC#B0BEC5#90A4AE#78909C#607D8B#546E7A#455A64#37474F#263238";b.mui={},b.flat={},b.mui.red=f(g),b.mui.pink=f(h),b.mui.purple=f(i),b.mui.deeppurple=f(j),b.mui.indigo=f(k),b.mui.blue=f(l),b.mui.lightblue=f(m),b.mui.cyan=f(n),b.mui.teal=f(o),b.mui.green=f(p),b.mui.lightgreen=f(q),b.mui.lime=f(r),b.mui.yellow=f(s),b.mui.amber=f(t),b.mui.orange=f(u),b.mui.deeporange=f(v),b.mui.brown=f(w),b.mui.grey=f(x),b.mui.bluegrey=f(y),b.flat.turquoise="#1abc9c",b.flat.greensea="#16a085",b.flat.sunflower="#f1c40f",b.flat.orange="#f39c12",b.flat.emerland="#2ecc71",b.flat.nephritis="#27ae60",b.flat.carrot="#e67e22",b.flat.pumpkin="#d35400",b.flat.peterriver="#3498db",b.flat.belizehole="#2980b9",b.flat.alizarin="#e74c3c",b.flat.pomegranate="#c0392b",b.flat.amethyst="#9b59b6",b.flat.wisteria="#8e44ad",b.flat.clouds="#ecf0f1",b.flat.silver="#bdc3c7",b.flat.wetasphalt="#34495e",b.flat.midnightblue="#2c3e50",b.flat.concrete="#95a5a6",b.flat.asbestos="#7f8c8d",b.importMUIColors=function(){for(var c in b.mui)b.mui.hasOwnProperty(c)&&(a[c]=b.mui[c])}}),d});
"use strict";

/**
 * Проверка является ли клиент мобильным устройством
 * @type {boolean}
 */
var isMobile = !!navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i);
/**
 * Не позволяет функции выполняться часто
 * @param callback
 * @param wait
 * @param context
 * @returns {Function}
 */

function throttle(callback, wait) {
    var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this;
    var timeout = null;
    var callbackArgs = null;

    var later = function later() {
        callback.apply(context, callbackArgs);
        timeout = null;
    };

    return function () {
        if (!timeout) {
            callbackArgs = arguments;
            timeout = setTimeout(later, wait);
        }
    };
}
/**
 * Анимация ссылок, при наведении на ссылку под ней появляется анимированный пузырь
 * @type {{}}
 */


var LinkAnimation = function () {
    var LINK_BUBBLE = '<svg class="link_bubble" xmlns="http://www.w3.org/2000/svg" width="52" height="36" viewBox="0 0 51.1 35.3" preserveAspectRatio="xMidYMid slice"><g class="canvas-svg" data-name="link-blob"><g class="morph" data-name="link-blob-anim"><path class="morph-shape-start" fill="#901d81" d="M11.6,5.4c-1.7,1.1-8.7,5.5-9.9,11.9c-1.5,7.8,6,14.7,14.2,17c10.1,2.8,23.4-0.7,29.6-8.7c0.6-0.8,4.5-6.1,3.1-12.2C46.4,4.6,34.3,0,24.1,1C17.6,1.7,13,4.6,11.6,5.4z"></path><path style="opacity: 0;" class="morph-shape-step" data-timing="0.7" fill="#901d81" d="M11.6,5.4c-1.7,1.1-8.7,5.5-9.9,11.9c-1.5,7.8,6,14.7,14.2,17c10.1,2.8,23.4-0.7,29.6-8.7c0.6-0.8,4.5-6.1,3.1-12.2C46.4,4.6,34.3,0,24.1,1C17.6,1.7,13,4.6,11.6,5.4z"></path><path style="opacity: 0;" class="morph-shape-step" data-timing="0.7" fill="#901d81" d="M8.1,8.9c-1.7,1.1-6.7,6.5-7.9,13c-1.5,7.8,6.9,12.3,14.7,9c16.9-7.3,22.4,3.3,28.6-4.7C44,25.3,48,18.3,50,12.4C55.3-3,38.8,1.1,28.6,1.5C18.3,2,9.5,8.1,8.1,8.9z"></path><path style="opacity: 0;" class="morph-shape-step" data-timing="0.7" fill="#901d81" d="M6.5,8.9c-1.8,1.1-8.1,7.7-6,14c2.6,7.6,6.7,10.1,15.2,11c16.9,1.7,22.4-0.2,28.6-8.2c0.6-0.8,8.3-4.2,6.6-10.2C47.1,2.5,38.2-0.4,27.9,0C17.6,0.5,7.8,8.1,6.5,8.9z"></path></g></g></svg>';
    var LINK_BUBBLE_PARSED = new DOMParser().parseFromString(LINK_BUBBLE, 'text/html');
    var LINK_BUBBLE_SVG = LINK_BUBBLE_PARSED.body.firstChild;
    return {
        init: initLinks
    };

    function appendBubble(link) {
        var svg = LINK_BUBBLE_SVG.cloneNode(true);
        link.appendChild(svg);
    }

    function initLinks() {
        // Не включаем анимацию на мобильных устройствах
        if (isMobile) {
            console.log('isMobile');
            return;
        }

        var links = Snap.selectAll('.morph-link'),
            links_length = links.length;

        for (var i = 0; i < links_length; i++) {
            var link = links[i].node;
            appendBubble(link);
            animate(link);
        }
    }

    function animate(link) {
        var svg = link.getElementsByClassName('link_bubble')[0];
        var canvas = link.getElementsByTagName('canvas')[0];
        var s = Snap(svg);
        var shape = s.select('.morph-shape-start');
        var steps = s.selectAll('.morph-shape-step');
        var points = [];

        for (var i = 0; i < steps.length; i++) {
            points.push(steps[i].node.getAttribute('d'));
        }

        var animation_step = 1;

        var loop = function loop() {
            shape.animate({
                d: points[animation_step++]
            }, 700, mina.easeout, loop);

            if (animation_step == points.length) {
                animation_step = 0;
            }
        };

        loop();
    }
}();

var MorphSVG = function MorphSVG(svg, autoplay) {
    var shape;

    if (autoplay) {
        start();
    }

    return {
        start: start,
        stop: stop
    };

    function start() {
        animate();
    }

    function stop() {
        shape.stop();
    }

    function animate() {
        var s = Snap(svg);
        shape = s.select('.svg_morph__start');
        var steps = s.selectAll('.svg_morph__step');
        var layers = [];

        for (var i = 0; i < steps.length; i++) {
            var step = steps[i].node;
            layers.push({
                points: step.getAttribute('d'),
                duration: Number(step.getAttribute('data-duration')) || 700,
                delay: Number(step.getAttribute('data-delay')) || 0
            });
        }

        var animation_step = 1;

        var loop = function loop() {
            var layer = layers[animation_step++];
            shape.animate({
                d: layer.points
            }, layer.duration * 1000, mina.easeinout, function () {
                setTimeout(function () {
                    loop();
                }, layer.delay);
            });

            if (animation_step == layers.length) {
                animation_step = 0;
            }
        };

        loop();
    }
};

var parallaxOnMouse = {
    container: undefined,
    layers: undefined,
    layer_count: undefined,
    client_width_half: window.innerWidth * 0.5,
    addMouseMoveListener: function addMouseMoveListener() {
        var throttled_function = throttle(parallaxOnMouse.moveLayers, 100);
        document.addEventListener('mousemove', throttled_function);
    },
    moveLayers: function moveLayers(event) {
        var mouse_x = event.x;

        for (var i = 0; i < parallaxOnMouse.layer_count; i++) {
            var layer = parallaxOnMouse.layers[i];
            var momentum = layer.getAttribute('data-momentum');
            var offset = (mouse_x - parallaxOnMouse.client_width_half) * momentum;
            parallaxOnMouse.layers[i].style.transform = 'translateX(' + offset + 'px)';
        }
    },
    init: function init(container, layers) {
        parallaxOnMouse.container = container;
        parallaxOnMouse.layers = layers;
        parallaxOnMouse.layer_count = layers.length;
        parallaxOnMouse.addMouseMoveListener();
    }
};

var MorphPath = function MorphPath(path, path_end, duration) {
    var end_point = path_end.node.getAttribute('d');
    path.animate({
        d: end_point
    }, duration, mina.easein, function () {
        console.log('end');
    });
};

var Loader = function () {
    return {
        init: initLoaderLinks,
        resize: resizeLoader,
        open: loaderOpen,
        close: loaderClose
    };

    function resizeLoader() {
        var orig_width = 500;
        var orig_height = 270;
        var ratio = orig_width / orig_height;
        var window_height = window.outerHeight * 2;
        var window_width = window.outerWidth * 2;

        if (window_width > window_height) {
            document.getElementById('preloader').setAttribute('height', window_width * ratio + 'px');
            document.getElementById('preloader').setAttribute('width', window_width + 'px');
        } else {
            document.getElementById('preloader').setAttribute('height', window_height + 'px');
            document.getElementById('preloader').setAttribute('width', window_height * ratio + 'px');
        }
    }

    function loaderClose(callback) {
        var duration = 400;

        for (var i = 1; i <= 6; i++) {
            MorphPath(Snap('.preloader #group #Shape' + i), Snap('.preloader #group_end #Shape' + i), duration);
        }

        Snap('.preloader #group').animate({
            transform: Snap('.preloader #group_end').node.getAttribute('transform')
        }, duration, mina.easein, function () {
            document.getElementsByClassName('preloader')[0].classList.add('hide');
            setTimeout(function () {
                document.getElementsByClassName('preloader')[0].classList.add('full-hide');
            }, 200);
            callback && callback();
        });
    }

    function loaderOpen(callback) {
        var duration = 400;
        Snap('.preloader #group').node.innerHTML = Snap('.preloader #group_start').node.innerHTML;
        Snap('.preloader #group').animate({
            transform: Snap('.preloader #group_start').node.getAttribute('transform')
        }, 1);
        document.getElementsByClassName('preloader')[0].classList.remove('full-hide');
        setTimeout(function () {
            document.getElementsByClassName('preloader')[0].classList.remove('hide');

            for (var i = 1; i <= 6; i++) {
                MorphPath(Snap('.preloader #group #Shape' + i), Snap('.preloader #group_center #Shape' + i), duration);
            }

            Snap('.preloader #group').animate({
                transform: Snap('.preloader #group_center').node.getAttribute('transform')
            }, duration, mina.easein, function () {
                callback && callback();
            });
        }, 50);
    }

    function initLoaderLinks() {
        var elements = document.getElementsByClassName('loader_link');

        for (var i = 0, len = elements.length; i < len; i++) {
            elements[i].addEventListener('click', function (e) {
                var link = this.getAttribute('href');
                loaderOpen(function () {
                    location.href = link;
                });
                e.preventDefault();
                e.stopPropagation();
            });
        }
    }
}();

!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},_=function(){w=(0,h.default)(),O()},S=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},z=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},A=function(e){return j=i(j,e),w=(0,h.default)(),z(j.disable)||x?S():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("orientationchange",(0,f.default)(O,j.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},j.throttleDelay)),j.disableMutationObserver||(0,d.default)("[data-aos]",_),w)};e.exports={init:A,refresh:O,refreshHard:_}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),_?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,z&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(_=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),_?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,z&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,_=!1,S=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(_=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,z="trailing"in n?!!n.trailing:z),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){var n=new r(o);a=t,n.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes),o=t.concat(n).filter(function(e){return e.hasAttribute&&e.hasAttribute("data-aos")}).length;o&&a()})}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,a=function(){};t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});
/*!
  * Bootstrap v4.0.0-beta.2 (https://getbootstrap.com)
  * Copyright 2011-2017 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
var bootstrap = (function (exports,$) {
'use strict';

$ = $ && $.hasOwnProperty('default') ? $['default'] : $;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): util.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Util = function () {
  /**
   * ------------------------------------------------------------------------
   * Private TransitionEnd Helpers
   * ------------------------------------------------------------------------
   */
  var transition = false;
  var MAX_UID = 1000000;
  var TransitionEndEvent = {
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'transitionend',
    OTransition: 'oTransitionEnd otransitionend',
    transition: 'transitionend' // shoutout AngusCroll (https://goo.gl/pxwQGp)

  };

  function toType(obj) {
    return {}.toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
  }

  function getSpecialTransitionEndEvent() {
    return {
      bindType: transition.end,
      delegateType: transition.end,
      handle: function handle(event) {
        if ($(event.target).is(this)) {
          return event.handleObj.handler.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }

        return undefined; // eslint-disable-line no-undefined
      }
    };
  }

  function transitionEndTest() {
    if (window.QUnit) {
      return false;
    }

    var el = document.createElement('bootstrap');

    for (var name in TransitionEndEvent) {
      if (typeof el.style[name] !== 'undefined') {
        return {
          end: TransitionEndEvent[name]
        };
      }
    }

    return false;
  }

  function transitionEndEmulator(duration) {
    var _this = this;

    var called = false;
    $(this).one(Util.TRANSITION_END, function () {
      called = true;
    });
    setTimeout(function () {
      if (!called) {
        Util.triggerTransitionEnd(_this);
      }
    }, duration);
    return this;
  }

  function setTransitionEndSupport() {
    transition = transitionEndTest();
    $.fn.emulateTransitionEnd = transitionEndEmulator;

    if (Util.supportsTransitionEnd()) {
      $.event.special[Util.TRANSITION_END] = getSpecialTransitionEndEvent();
    }
  }
  /**
   * --------------------------------------------------------------------------
   * Public Util Api
   * --------------------------------------------------------------------------
   */


  var Util = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function getUID(prefix) {
      do {
        // eslint-disable-next-line no-bitwise
        prefix += ~~(Math.random() * MAX_UID); // "~~" acts like a faster Math.floor() here
      } while (document.getElementById(prefix));

      return prefix;
    },
    getSelectorFromElement: function getSelectorFromElement(element) {
      var selector = element.getAttribute('data-target');

      if (!selector || selector === '#') {
        selector = element.getAttribute('href') || '';
      }

      try {
        var $selector = $(document).find(selector);
        return $selector.length > 0 ? selector : null;
      } catch (error) {
        return null;
      }
    },
    reflow: function reflow(element) {
      return element.offsetHeight;
    },
    triggerTransitionEnd: function triggerTransitionEnd(element) {
      $(element).trigger(transition.end);
    },
    supportsTransitionEnd: function supportsTransitionEnd() {
      return Boolean(transition);
    },
    isElement: function isElement(obj) {
      return (obj[0] || obj).nodeType;
    },
    typeCheckConfig: function typeCheckConfig(componentName, config, configTypes) {
      for (var property in configTypes) {
        if (Object.prototype.hasOwnProperty.call(configTypes, property)) {
          var expectedTypes = configTypes[property];
          var value = config[property];
          var valueType = value && Util.isElement(value) ? 'element' : toType(value);

          if (!new RegExp(expectedTypes).test(valueType)) {
            throw new Error(componentName.toUpperCase() + ": " + ("Option \"" + property + "\" provided type \"" + valueType + "\" ") + ("but expected type \"" + expectedTypes + "\"."));
          }
        }
      }
    }
  };
  setTransitionEndSupport();
  return Util;
}($);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var createClass = _createClass;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var inheritsLoose = _inheritsLoose;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): alert.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Alert = function () {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'alert';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.alert';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var Selector = {
    DISMISS: '[data-dismiss="alert"]'
  };
  var Event = {
    CLOSE: "close" + EVENT_KEY,
    CLOSED: "closed" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    ALERT: 'alert',
    FADE: 'fade',
    SHOW: 'show'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Alert =
  /*#__PURE__*/
  function () {
    function Alert(element) {
      this._element = element;
    } // getters


    var _proto = Alert.prototype;

    // public
    _proto.close = function close(element) {
      element = element || this._element;

      var rootElement = this._getRootElement(element);

      var customEvent = this._triggerCloseEvent(rootElement);

      if (customEvent.isDefaultPrevented()) {
        return;
      }

      this._removeElement(rootElement);
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // private


    _proto._getRootElement = function _getRootElement(element) {
      var selector = Util.getSelectorFromElement(element);
      var parent = false;

      if (selector) {
        parent = $(selector)[0];
      }

      if (!parent) {
        parent = $(element).closest("." + ClassName.ALERT)[0];
      }

      return parent;
    };

    _proto._triggerCloseEvent = function _triggerCloseEvent(element) {
      var closeEvent = $.Event(Event.CLOSE);
      $(element).trigger(closeEvent);
      return closeEvent;
    };

    _proto._removeElement = function _removeElement(element) {
      var _this = this;

      $(element).removeClass(ClassName.SHOW);

      if (!Util.supportsTransitionEnd() || !$(element).hasClass(ClassName.FADE)) {
        this._destroyElement(element);

        return;
      }

      $(element).one(Util.TRANSITION_END, function (event) {
        return _this._destroyElement(element, event);
      }).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto._destroyElement = function _destroyElement(element) {
      $(element).detach().trigger(Event.CLOSED).remove();
    }; // static


    Alert._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $element = $(this);
        var data = $element.data(DATA_KEY);

        if (!data) {
          data = new Alert(this);
          $element.data(DATA_KEY, data);
        }

        if (config === 'close') {
          data[config](this);
        }
      });
    };

    Alert._handleDismiss = function _handleDismiss(alertInstance) {
      return function (event) {
        if (event) {
          event.preventDefault();
        }

        alertInstance.close(this);
      };
    };

    createClass(Alert, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Alert;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DISMISS, Alert._handleDismiss(new Alert()));
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Alert._jQueryInterface;
  $.fn[NAME].Constructor = Alert;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Alert._jQueryInterface;
  };

  return Alert;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): button.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Button = function () {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'button';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.button';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ClassName = {
    ACTIVE: 'active',
    BUTTON: 'btn',
    FOCUS: 'focus'
  };
  var Selector = {
    DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
    DATA_TOGGLE: '[data-toggle="buttons"]',
    INPUT: 'input',
    ACTIVE: '.active',
    BUTTON: '.btn'
  };
  var Event = {
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    FOCUS_BLUR_DATA_API: "focus" + EVENT_KEY + DATA_API_KEY + " " + ("blur" + EVENT_KEY + DATA_API_KEY)
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Button =
  /*#__PURE__*/
  function () {
    function Button(element) {
      this._element = element;
    } // getters


    var _proto = Button.prototype;

    // public
    _proto.toggle = function toggle() {
      var triggerChangeEvent = true;
      var addAriaPressed = true;
      var rootElement = $(this._element).closest(Selector.DATA_TOGGLE)[0];

      if (rootElement) {
        var input = $(this._element).find(Selector.INPUT)[0];

        if (input) {
          if (input.type === 'radio') {
            if (input.checked && $(this._element).hasClass(ClassName.ACTIVE)) {
              triggerChangeEvent = false;
            } else {
              var activeElement = $(rootElement).find(Selector.ACTIVE)[0];

              if (activeElement) {
                $(activeElement).removeClass(ClassName.ACTIVE);
              }
            }
          }

          if (triggerChangeEvent) {
            if (input.hasAttribute('disabled') || rootElement.hasAttribute('disabled') || input.classList.contains('disabled') || rootElement.classList.contains('disabled')) {
              return;
            }

            input.checked = !$(this._element).hasClass(ClassName.ACTIVE);
            $(input).trigger('change');
          }

          input.focus();
          addAriaPressed = false;
        }
      }

      if (addAriaPressed) {
        this._element.setAttribute('aria-pressed', !$(this._element).hasClass(ClassName.ACTIVE));
      }

      if (triggerChangeEvent) {
        $(this._element).toggleClass(ClassName.ACTIVE);
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // static


    Button._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        if (!data) {
          data = new Button(this);
          $(this).data(DATA_KEY, data);
        }

        if (config === 'toggle') {
          data[config]();
        }
      });
    };

    createClass(Button, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Button;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    event.preventDefault();
    var button = event.target;

    if (!$(button).hasClass(ClassName.BUTTON)) {
      button = $(button).closest(Selector.BUTTON);
    }

    Button._jQueryInterface.call($(button), 'toggle');
  }).on(Event.FOCUS_BLUR_DATA_API, Selector.DATA_TOGGLE_CARROT, function (event) {
    var button = $(event.target).closest(Selector.BUTTON)[0];
    $(button).toggleClass(ClassName.FOCUS, /^focus(in)?$/.test(event.type));
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Button._jQueryInterface;
  $.fn[NAME].Constructor = Button;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Button._jQueryInterface;
  };

  return Button;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): carousel.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Carousel = function () {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'carousel';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.carousel';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;
  var ARROW_LEFT_KEYCODE = 37; // KeyboardEvent.which value for left arrow key

  var ARROW_RIGHT_KEYCODE = 39; // KeyboardEvent.which value for right arrow key

  var TOUCHEVENT_COMPAT_WAIT = 500; // Time for mouse compat events to fire after touch

  var Default = {
    interval: 5000,
    keyboard: true,
    slide: false,
    pause: 'hover',
    wrap: true
  };
  var DefaultType = {
    interval: '(number|boolean)',
    keyboard: 'boolean',
    slide: '(boolean|string)',
    pause: '(string|boolean)',
    wrap: 'boolean'
  };
  var Direction = {
    NEXT: 'next',
    PREV: 'prev',
    LEFT: 'left',
    RIGHT: 'right'
  };
  var Event = {
    SLIDE: "slide" + EVENT_KEY,
    SLID: "slid" + EVENT_KEY,
    KEYDOWN: "keydown" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY,
    TOUCHEND: "touchend" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    CAROUSEL: 'carousel',
    ACTIVE: 'active',
    SLIDE: 'slide',
    RIGHT: 'carousel-item-right',
    LEFT: 'carousel-item-left',
    NEXT: 'carousel-item-next',
    PREV: 'carousel-item-prev',
    ITEM: 'carousel-item'
  };
  var Selector = {
    ACTIVE: '.active',
    ACTIVE_ITEM: '.active.carousel-item',
    ITEM: '.carousel-item',
    NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
    INDICATORS: '.carousel-indicators',
    DATA_SLIDE: '[data-slide], [data-slide-to]',
    DATA_RIDE: '[data-ride="carousel"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Carousel =
  /*#__PURE__*/
  function () {
    function Carousel(element, config) {
      this._items = null;
      this._interval = null;
      this._activeElement = null;
      this._isPaused = false;
      this._isSliding = false;
      this.touchTimeout = null;
      this._config = this._getConfig(config);
      this._element = $(element)[0];
      this._indicatorsElement = $(this._element).find(Selector.INDICATORS)[0];

      this._addEventListeners();
    } // getters


    var _proto = Carousel.prototype;

    // public
    _proto.next = function next() {
      if (!this._isSliding) {
        this._slide(Direction.NEXT);
      }
    };

    _proto.nextWhenVisible = function nextWhenVisible() {
      // Don't call next when the page isn't visible
      // or the carousel or its parent isn't visible
      if (!document.hidden && $(this._element).is(':visible') && $(this._element).css('visibility') !== 'hidden') {
        this.next();
      }
    };

    _proto.prev = function prev() {
      if (!this._isSliding) {
        this._slide(Direction.PREV);
      }
    };

    _proto.pause = function pause(event) {
      if (!event) {
        this._isPaused = true;
      }

      if ($(this._element).find(Selector.NEXT_PREV)[0] && Util.supportsTransitionEnd()) {
        Util.triggerTransitionEnd(this._element);
        this.cycle(true);
      }

      clearInterval(this._interval);
      this._interval = null;
    };

    _proto.cycle = function cycle(event) {
      if (!event) {
        this._isPaused = false;
      }

      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }

      if (this._config.interval && !this._isPaused) {
        this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval);
      }
    };

    _proto.to = function to(index) {
      var _this = this;

      this._activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeIndex = this._getItemIndex(this._activeElement);

      if (index > this._items.length - 1 || index < 0) {
        return;
      }

      if (this._isSliding) {
        $(this._element).one(Event.SLID, function () {
          return _this.to(index);
        });
        return;
      }

      if (activeIndex === index) {
        this.pause();
        this.cycle();
        return;
      }

      var direction = index > activeIndex ? Direction.NEXT : Direction.PREV;

      this._slide(direction, this._items[index]);
    };

    _proto.dispose = function dispose() {
      $(this._element).off(EVENT_KEY);
      $.removeData(this._element, DATA_KEY);
      this._items = null;
      this._config = null;
      this._element = null;
      this._interval = null;
      this._isPaused = null;
      this._isSliding = null;
      this._activeElement = null;
      this._indicatorsElement = null;
    }; // private


    _proto._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._addEventListeners = function _addEventListeners() {
      var _this2 = this;

      if (this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN, function (event) {
          return _this2._keydown(event);
        });
      }

      if (this._config.pause === 'hover') {
        $(this._element).on(Event.MOUSEENTER, function (event) {
          return _this2.pause(event);
        }).on(Event.MOUSELEAVE, function (event) {
          return _this2.cycle(event);
        });

        if ('ontouchstart' in document.documentElement) {
          // if it's a touch-enabled device, mouseenter/leave are fired as
          // part of the mouse compatibility events on first tap - the carousel
          // would stop cycling until user tapped out of it;
          // here, we listen for touchend, explicitly pause the carousel
          // (as if it's the second time we tap on it, mouseenter compat event
          // is NOT fired) and after a timeout (to allow for mouse compatibility
          // events to fire) we explicitly restart cycling
          $(this._element).on(Event.TOUCHEND, function () {
            _this2.pause();

            if (_this2.touchTimeout) {
              clearTimeout(_this2.touchTimeout);
            }

            _this2.touchTimeout = setTimeout(function (event) {
              return _this2.cycle(event);
            }, TOUCHEVENT_COMPAT_WAIT + _this2._config.interval);
          });
        }
      }
    };

    _proto._keydown = function _keydown(event) {
      if (/input|textarea/i.test(event.target.tagName)) {
        return;
      }

      switch (event.which) {
        case ARROW_LEFT_KEYCODE:
          event.preventDefault();
          this.prev();
          break;

        case ARROW_RIGHT_KEYCODE:
          event.preventDefault();
          this.next();
          break;

        default:
          return;
      }
    };

    _proto._getItemIndex = function _getItemIndex(element) {
      this._items = $.makeArray($(element).parent().find(Selector.ITEM));
      return this._items.indexOf(element);
    };

    _proto._getItemByDirection = function _getItemByDirection(direction, activeElement) {
      var isNextDirection = direction === Direction.NEXT;
      var isPrevDirection = direction === Direction.PREV;

      var activeIndex = this._getItemIndex(activeElement);

      var lastItemIndex = this._items.length - 1;
      var isGoingToWrap = isPrevDirection && activeIndex === 0 || isNextDirection && activeIndex === lastItemIndex;

      if (isGoingToWrap && !this._config.wrap) {
        return activeElement;
      }

      var delta = direction === Direction.PREV ? -1 : 1;
      var itemIndex = (activeIndex + delta) % this._items.length;
      return itemIndex === -1 ? this._items[this._items.length - 1] : this._items[itemIndex];
    };

    _proto._triggerSlideEvent = function _triggerSlideEvent(relatedTarget, eventDirectionName) {
      var targetIndex = this._getItemIndex(relatedTarget);

      var fromIndex = this._getItemIndex($(this._element).find(Selector.ACTIVE_ITEM)[0]);

      var slideEvent = $.Event(Event.SLIDE, {
        relatedTarget: relatedTarget,
        direction: eventDirectionName,
        from: fromIndex,
        to: targetIndex
      });
      $(this._element).trigger(slideEvent);
      return slideEvent;
    };

    _proto._setActiveIndicatorElement = function _setActiveIndicatorElement(element) {
      if (this._indicatorsElement) {
        $(this._indicatorsElement).find(Selector.ACTIVE).removeClass(ClassName.ACTIVE);

        var nextIndicator = this._indicatorsElement.children[this._getItemIndex(element)];

        if (nextIndicator) {
          $(nextIndicator).addClass(ClassName.ACTIVE);
        }
      }
    };

    _proto._slide = function _slide(direction, element) {
      var _this3 = this;

      var activeElement = $(this._element).find(Selector.ACTIVE_ITEM)[0];

      var activeElementIndex = this._getItemIndex(activeElement);

      var nextElement = element || activeElement && this._getItemByDirection(direction, activeElement);

      var nextElementIndex = this._getItemIndex(nextElement);

      var isCycling = Boolean(this._interval);
      var directionalClassName;
      var orderClassName;
      var eventDirectionName;

      if (direction === Direction.NEXT) {
        directionalClassName = ClassName.LEFT;
        orderClassName = ClassName.NEXT;
        eventDirectionName = Direction.LEFT;
      } else {
        directionalClassName = ClassName.RIGHT;
        orderClassName = ClassName.PREV;
        eventDirectionName = Direction.RIGHT;
      }

      if (nextElement && $(nextElement).hasClass(ClassName.ACTIVE)) {
        this._isSliding = false;
        return;
      }

      var slideEvent = this._triggerSlideEvent(nextElement, eventDirectionName);

      if (slideEvent.isDefaultPrevented()) {
        return;
      }

      if (!activeElement || !nextElement) {
        // some weirdness is happening, so we bail
        return;
      }

      this._isSliding = true;

      if (isCycling) {
        this.pause();
      }

      this._setActiveIndicatorElement(nextElement);

      var slidEvent = $.Event(Event.SLID, {
        relatedTarget: nextElement,
        direction: eventDirectionName,
        from: activeElementIndex,
        to: nextElementIndex
      });

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.SLIDE)) {
        $(nextElement).addClass(orderClassName);
        Util.reflow(nextElement);
        $(activeElement).addClass(directionalClassName);
        $(nextElement).addClass(directionalClassName);
        $(activeElement).one(Util.TRANSITION_END, function () {
          $(nextElement).removeClass(directionalClassName + " " + orderClassName).addClass(ClassName.ACTIVE);
          $(activeElement).removeClass(ClassName.ACTIVE + " " + orderClassName + " " + directionalClassName);
          _this3._isSliding = false;
          setTimeout(function () {
            return $(_this3._element).trigger(slidEvent);
          }, 0);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        $(activeElement).removeClass(ClassName.ACTIVE);
        $(nextElement).addClass(ClassName.ACTIVE);
        this._isSliding = false;
        $(this._element).trigger(slidEvent);
      }

      if (isCycling) {
        this.cycle();
      }
    }; // static


    Carousel._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = $.extend({}, Default, $(this).data());

        if (typeof config === 'object') {
          $.extend(_config, config);
        }

        var action = typeof config === 'string' ? config : _config.slide;

        if (!data) {
          data = new Carousel(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'number') {
          data.to(config);
        } else if (typeof action === 'string') {
          if (typeof data[action] === 'undefined') {
            throw new Error("No method named \"" + action + "\"");
          }

          data[action]();
        } else if (_config.interval) {
          data.pause();
          data.cycle();
        }
      });
    };

    Carousel._dataApiClickHandler = function _dataApiClickHandler(event) {
      var selector = Util.getSelectorFromElement(this);

      if (!selector) {
        return;
      }

      var target = $(selector)[0];

      if (!target || !$(target).hasClass(ClassName.CAROUSEL)) {
        return;
      }

      var config = $.extend({}, $(target).data(), $(this).data());
      var slideIndex = this.getAttribute('data-slide-to');

      if (slideIndex) {
        config.interval = false;
      }

      Carousel._jQueryInterface.call($(target), config);

      if (slideIndex) {
        $(target).data(DATA_KEY).to(slideIndex);
      }

      event.preventDefault();
    };

    createClass(Carousel, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Carousel;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_SLIDE, Carousel._dataApiClickHandler);
  $(window).on(Event.LOAD_DATA_API, function () {
    $(Selector.DATA_RIDE).each(function () {
      var $carousel = $(this);

      Carousel._jQueryInterface.call($carousel, $carousel.data());
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Carousel._jQueryInterface;
  $.fn[NAME].Constructor = Carousel;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Carousel._jQueryInterface;
  };

  return Carousel;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): collapse.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Collapse = function () {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'collapse';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.collapse';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 600;
  var Default = {
    toggle: true,
    parent: ''
  };
  var DefaultType = {
    toggle: 'boolean',
    parent: '(string|element)'
  };
  var Event = {
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SHOW: 'show',
    COLLAPSE: 'collapse',
    COLLAPSING: 'collapsing',
    COLLAPSED: 'collapsed'
  };
  var Dimension = {
    WIDTH: 'width',
    HEIGHT: 'height'
  };
  var Selector = {
    ACTIVES: '.show, .collapsing',
    DATA_TOGGLE: '[data-toggle="collapse"]'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Collapse =
  /*#__PURE__*/
  function () {
    function Collapse(element, config) {
      this._isTransitioning = false;
      this._element = element;
      this._config = this._getConfig(config);
      this._triggerArray = $.makeArray($("[data-toggle=\"collapse\"][href=\"#" + element.id + "\"]," + ("[data-toggle=\"collapse\"][data-target=\"#" + element.id + "\"]")));
      var tabToggles = $(Selector.DATA_TOGGLE);

      for (var i = 0; i < tabToggles.length; i++) {
        var elem = tabToggles[i];
        var selector = Util.getSelectorFromElement(elem);

        if (selector !== null && $(selector).filter(element).length > 0) {
          this._triggerArray.push(elem);
        }
      }

      this._parent = this._config.parent ? this._getParent() : null;

      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._element, this._triggerArray);
      }

      if (this._config.toggle) {
        this.toggle();
      }
    } // getters


    var _proto = Collapse.prototype;

    // public
    _proto.toggle = function toggle() {
      if ($(this._element).hasClass(ClassName.SHOW)) {
        this.hide();
      } else {
        this.show();
      }
    };

    _proto.show = function show() {
      var _this = this;

      if (this._isTransitioning || $(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var actives;
      var activesData;

      if (this._parent) {
        actives = $.makeArray($(this._parent).children().children(Selector.ACTIVES));

        if (!actives.length) {
          actives = null;
        }
      }

      if (actives) {
        activesData = $(actives).data(DATA_KEY);

        if (activesData && activesData._isTransitioning) {
          return;
        }
      }

      var startEvent = $.Event(Event.SHOW);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      if (actives) {
        Collapse._jQueryInterface.call($(actives), 'hide');

        if (!activesData) {
          $(actives).data(DATA_KEY, null);
        }
      }

      var dimension = this._getDimension();

      $(this._element).removeClass(ClassName.COLLAPSE).addClass(ClassName.COLLAPSING);
      this._element.style[dimension] = 0;

      if (this._triggerArray.length) {
        $(this._triggerArray).removeClass(ClassName.COLLAPSED).attr('aria-expanded', true);
      }

      this.setTransitioning(true);

      var complete = function complete() {
        $(_this._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).addClass(ClassName.SHOW);
        _this._element.style[dimension] = '';

        _this.setTransitioning(false);

        $(_this._element).trigger(Event.SHOWN);
      };

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      var capitalizedDimension = dimension[0].toUpperCase() + dimension.slice(1);
      var scrollSize = "scroll" + capitalizedDimension;
      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      this._element.style[dimension] = this._element[scrollSize] + "px";
    };

    _proto.hide = function hide() {
      var _this2 = this;

      if (this._isTransitioning || !$(this._element).hasClass(ClassName.SHOW)) {
        return;
      }

      var startEvent = $.Event(Event.HIDE);
      $(this._element).trigger(startEvent);

      if (startEvent.isDefaultPrevented()) {
        return;
      }

      var dimension = this._getDimension();

      this._element.style[dimension] = this._element.getBoundingClientRect()[dimension] + "px";
      Util.reflow(this._element);
      $(this._element).addClass(ClassName.COLLAPSING).removeClass(ClassName.COLLAPSE).removeClass(ClassName.SHOW);

      if (this._triggerArray.length) {
        for (var i = 0; i < this._triggerArray.length; i++) {
          var trigger = this._triggerArray[i];
          var selector = Util.getSelectorFromElement(trigger);

          if (selector !== null) {
            var $elem = $(selector);

            if (!$elem.hasClass(ClassName.SHOW)) {
              $(trigger).addClass(ClassName.COLLAPSED).attr('aria-expanded', false);
            }
          }
        }
      }

      this.setTransitioning(true);

      var complete = function complete() {
        _this2.setTransitioning(false);

        $(_this2._element).removeClass(ClassName.COLLAPSING).addClass(ClassName.COLLAPSE).trigger(Event.HIDDEN);
      };

      this._element.style[dimension] = '';

      if (!Util.supportsTransitionEnd()) {
        complete();
        return;
      }

      $(this._element).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
    };

    _proto.setTransitioning = function setTransitioning(isTransitioning) {
      this._isTransitioning = isTransitioning;
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._config = null;
      this._parent = null;
      this._element = null;
      this._triggerArray = null;
      this._isTransitioning = null;
    }; // private


    _proto._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      config.toggle = Boolean(config.toggle); // coerce string values

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getDimension = function _getDimension() {
      var hasWidth = $(this._element).hasClass(Dimension.WIDTH);
      return hasWidth ? Dimension.WIDTH : Dimension.HEIGHT;
    };

    _proto._getParent = function _getParent() {
      var _this3 = this;

      var parent = null;

      if (Util.isElement(this._config.parent)) {
        parent = this._config.parent; // it's a jQuery object

        if (typeof this._config.parent.jquery !== 'undefined') {
          parent = this._config.parent[0];
        }
      } else {
        parent = $(this._config.parent)[0];
      }

      var selector = "[data-toggle=\"collapse\"][data-parent=\"" + this._config.parent + "\"]";
      $(parent).find(selector).each(function (i, element) {
        _this3._addAriaAndCollapsedClass(Collapse._getTargetFromElement(element), [element]);
      });
      return parent;
    };

    _proto._addAriaAndCollapsedClass = function _addAriaAndCollapsedClass(element, triggerArray) {
      if (element) {
        var isOpen = $(element).hasClass(ClassName.SHOW);

        if (triggerArray.length) {
          $(triggerArray).toggleClass(ClassName.COLLAPSED, !isOpen).attr('aria-expanded', isOpen);
        }
      }
    }; // static


    Collapse._getTargetFromElement = function _getTargetFromElement(element) {
      var selector = Util.getSelectorFromElement(element);
      return selector ? $(selector)[0] : null;
    };

    Collapse._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        var _config = $.extend({}, Default, $this.data(), typeof config === 'object' && config);

        if (!data && _config.toggle && /show|hide/.test(config)) {
          _config.toggle = false;
        }

        if (!data) {
          data = new Collapse(this, _config);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    createClass(Collapse, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Collapse;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    // preventDefault only for <a> elements (which change the URL) not inside the collapsible element
    if (event.currentTarget.tagName === 'A') {
      event.preventDefault();
    }

    var $trigger = $(this);
    var selector = Util.getSelectorFromElement(this);
    $(selector).each(function () {
      var $target = $(this);
      var data = $target.data(DATA_KEY);
      var config = data ? 'toggle' : $trigger.data();

      Collapse._jQueryInterface.call($target, config);
    });
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Collapse._jQueryInterface;
  $.fn[NAME].Constructor = Collapse;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Collapse._jQueryInterface;
  };

  return Collapse;
}($);

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass$1 = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends$1 = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends$1({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends$1({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends$1({}, attributes, data.attributes);
  data.styles = _extends$1({}, styles, data.styles);
  data.arrowStyles = _extends$1({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends$1({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends$1({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends$1({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends$1({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends$1({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends$1({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends$1({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass$1(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): dropdown.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Dropdown = function () {
  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap dropdown require Popper.js (https://popper.js.org)');
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME = 'dropdown';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.dropdown';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var SPACE_KEYCODE = 32; // KeyboardEvent.which value for space key

  var TAB_KEYCODE = 9; // KeyboardEvent.which value for tab key

  var ARROW_UP_KEYCODE = 38; // KeyboardEvent.which value for up arrow key

  var ARROW_DOWN_KEYCODE = 40; // KeyboardEvent.which value for down arrow key

  var RIGHT_MOUSE_BUTTON_WHICH = 3; // MouseEvent.which value for the right button (assuming a right-handed mouse)

  var REGEXP_KEYDOWN = new RegExp(ARROW_UP_KEYCODE + "|" + ARROW_DOWN_KEYCODE + "|" + ESCAPE_KEYCODE);
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY,
    KEYDOWN_DATA_API: "keydown" + EVENT_KEY + DATA_API_KEY,
    KEYUP_DATA_API: "keyup" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DISABLED: 'disabled',
    SHOW: 'show',
    DROPUP: 'dropup',
    MENURIGHT: 'dropdown-menu-right',
    MENULEFT: 'dropdown-menu-left'
  };
  var Selector = {
    DATA_TOGGLE: '[data-toggle="dropdown"]',
    FORM_CHILD: '.dropdown form',
    MENU: '.dropdown-menu',
    NAVBAR_NAV: '.navbar-nav',
    VISIBLE_ITEMS: '.dropdown-menu .dropdown-item:not(.disabled)'
  };
  var AttachmentMap = {
    TOP: 'top-start',
    TOPEND: 'top-end',
    BOTTOM: 'bottom-start',
    BOTTOMEND: 'bottom-end'
  };
  var Default = {
    offset: 0,
    flip: true
  };
  var DefaultType = {
    offset: '(number|string|function)',
    flip: 'boolean'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Dropdown =
  /*#__PURE__*/
  function () {
    function Dropdown(element, config) {
      this._element = element;
      this._popper = null;
      this._config = this._getConfig(config);
      this._menu = this._getMenuElement();
      this._inNavbar = this._detectNavbar();

      this._addEventListeners();
    } // getters


    var _proto = Dropdown.prototype;

    // public
    _proto.toggle = function toggle() {
      if (this._element.disabled || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this._element);

      var isActive = $(this._menu).hasClass(ClassName.SHOW);

      Dropdown._clearMenus();

      if (isActive) {
        return;
      }

      var relatedTarget = {
        relatedTarget: this._element
      };
      var showEvent = $.Event(Event.SHOW, relatedTarget);
      $(parent).trigger(showEvent);

      if (showEvent.isDefaultPrevented()) {
        return;
      }

      var element = this._element; // for dropup with alignment we use the parent as popper container

      if ($(parent).hasClass(ClassName.DROPUP)) {
        if ($(this._menu).hasClass(ClassName.MENULEFT) || $(this._menu).hasClass(ClassName.MENURIGHT)) {
          element = parent;
        }
      }

      this._popper = new Popper(element, this._menu, this._getPopperConfig()); // if this is a touch-enabled device we add extra
      // empty mouseover listeners to the body's immediate children;
      // only needed because of broken event delegation on iOS
      // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

      if ('ontouchstart' in document.documentElement && !$(parent).closest(Selector.NAVBAR_NAV).length) {
        $('body').children().on('mouseover', null, $.noop);
      }

      this._element.focus();

      this._element.setAttribute('aria-expanded', true);

      $(this._menu).toggleClass(ClassName.SHOW);
      $(parent).toggleClass(ClassName.SHOW).trigger($.Event(Event.SHOWN, relatedTarget));
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._element).off(EVENT_KEY);
      this._element = null;
      this._menu = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
    };

    _proto.update = function update() {
      this._inNavbar = this._detectNavbar();

      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // private


    _proto._addEventListeners = function _addEventListeners() {
      var _this = this;

      $(this._element).on(Event.CLICK, function (event) {
        event.preventDefault();
        event.stopPropagation();

        _this.toggle();
      });
    };

    _proto._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this._element).data(), config);
      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getMenuElement = function _getMenuElement() {
      if (!this._menu) {
        var parent = Dropdown._getParentFromElement(this._element);

        this._menu = $(parent).find(Selector.MENU)[0];
      }

      return this._menu;
    };

    _proto._getPlacement = function _getPlacement() {
      var $parentDropdown = $(this._element).parent();
      var placement = AttachmentMap.BOTTOM; // Handle dropup

      if ($parentDropdown.hasClass(ClassName.DROPUP)) {
        placement = AttachmentMap.TOP;

        if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
          placement = AttachmentMap.TOPEND;
        }
      } else if ($(this._menu).hasClass(ClassName.MENURIGHT)) {
        placement = AttachmentMap.BOTTOMEND;
      }

      return placement;
    };

    _proto._detectNavbar = function _detectNavbar() {
      return $(this._element).closest('.navbar').length > 0;
    };

    _proto._getPopperConfig = function _getPopperConfig() {
      var _this2 = this;

      var offsetConf = {};

      if (typeof this._config.offset === 'function') {
        offsetConf.fn = function (data) {
          data.offsets = $.extend({}, data.offsets, _this2._config.offset(data.offsets) || {});
          return data;
        };
      } else {
        offsetConf.offset = this._config.offset;
      }

      var popperConfig = {
        placement: this._getPlacement(),
        modifiers: {
          offset: offsetConf,
          flip: {
            enabled: this._config.flip
          }
        } // Disable Popper.js for Dropdown in Navbar

      };

      if (this._inNavbar) {
        popperConfig.modifiers.applyStyle = {
          enabled: !this._inNavbar
        };
      }

      return popperConfig;
    }; // static


    Dropdown._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data) {
          data = new Dropdown(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    Dropdown._clearMenus = function _clearMenus(event) {
      if (event && (event.which === RIGHT_MOUSE_BUTTON_WHICH || event.type === 'keyup' && event.which !== TAB_KEYCODE)) {
        return;
      }

      var toggles = $.makeArray($(Selector.DATA_TOGGLE));

      for (var i = 0; i < toggles.length; i++) {
        var parent = Dropdown._getParentFromElement(toggles[i]);

        var context = $(toggles[i]).data(DATA_KEY);
        var relatedTarget = {
          relatedTarget: toggles[i]
        };

        if (!context) {
          continue;
        }

        var dropdownMenu = context._menu;

        if (!$(parent).hasClass(ClassName.SHOW)) {
          continue;
        }

        if (event && (event.type === 'click' && /input|textarea/i.test(event.target.tagName) || event.type === 'keyup' && event.which === TAB_KEYCODE) && $.contains(parent, event.target)) {
          continue;
        }

        var hideEvent = $.Event(Event.HIDE, relatedTarget);
        $(parent).trigger(hideEvent);

        if (hideEvent.isDefaultPrevented()) {
          continue;
        } // if this is a touch-enabled device we remove the extra
        // empty mouseover listeners we added for iOS support


        if ('ontouchstart' in document.documentElement) {
          $('body').children().off('mouseover', null, $.noop);
        }

        toggles[i].setAttribute('aria-expanded', 'false');
        $(dropdownMenu).removeClass(ClassName.SHOW);
        $(parent).removeClass(ClassName.SHOW).trigger($.Event(Event.HIDDEN, relatedTarget));
      }
    };

    Dropdown._getParentFromElement = function _getParentFromElement(element) {
      var parent;
      var selector = Util.getSelectorFromElement(element);

      if (selector) {
        parent = $(selector)[0];
      }

      return parent || element.parentNode;
    };

    Dropdown._dataApiKeydownHandler = function _dataApiKeydownHandler(event) {
      if (!REGEXP_KEYDOWN.test(event.which) || /button/i.test(event.target.tagName) && event.which === SPACE_KEYCODE || /input|textarea/i.test(event.target.tagName)) {
        return;
      }

      event.preventDefault();
      event.stopPropagation();

      if (this.disabled || $(this).hasClass(ClassName.DISABLED)) {
        return;
      }

      var parent = Dropdown._getParentFromElement(this);

      var isActive = $(parent).hasClass(ClassName.SHOW);

      if (!isActive && (event.which !== ESCAPE_KEYCODE || event.which !== SPACE_KEYCODE) || isActive && (event.which === ESCAPE_KEYCODE || event.which === SPACE_KEYCODE)) {
        if (event.which === ESCAPE_KEYCODE) {
          var toggle = $(parent).find(Selector.DATA_TOGGLE)[0];
          $(toggle).trigger('focus');
        }

        $(this).trigger('click');
        return;
      }

      var items = $(parent).find(Selector.VISIBLE_ITEMS).get();

      if (!items.length) {
        return;
      }

      var index = items.indexOf(event.target);

      if (event.which === ARROW_UP_KEYCODE && index > 0) {
        // up
        index--;
      }

      if (event.which === ARROW_DOWN_KEYCODE && index < items.length - 1) {
        // down
        index++;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    };

    createClass(Dropdown, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Dropdown;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.KEYDOWN_DATA_API, Selector.DATA_TOGGLE, Dropdown._dataApiKeydownHandler).on(Event.KEYDOWN_DATA_API, Selector.MENU, Dropdown._dataApiKeydownHandler).on(Event.CLICK_DATA_API + " " + Event.KEYUP_DATA_API, Dropdown._clearMenus).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();
    event.stopPropagation();

    Dropdown._jQueryInterface.call($(this), 'toggle');
  }).on(Event.CLICK_DATA_API, Selector.FORM_CHILD, function (e) {
    e.stopPropagation();
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Dropdown._jQueryInterface;
  $.fn[NAME].Constructor = Dropdown;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Dropdown._jQueryInterface;
  };

  return Dropdown;
}($, Popper);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): modal.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Modal = function () {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'modal';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.modal';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 300;
  var BACKDROP_TRANSITION_DURATION = 150;
  var ESCAPE_KEYCODE = 27; // KeyboardEvent.which value for Escape (Esc) key

  var Default = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: true
  };
  var DefaultType = {
    backdrop: '(boolean|string)',
    keyboard: 'boolean',
    focus: 'boolean',
    show: 'boolean'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    RESIZE: "resize" + EVENT_KEY,
    CLICK_DISMISS: "click.dismiss" + EVENT_KEY,
    KEYDOWN_DISMISS: "keydown.dismiss" + EVENT_KEY,
    MOUSEUP_DISMISS: "mouseup.dismiss" + EVENT_KEY,
    MOUSEDOWN_DISMISS: "mousedown.dismiss" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    STICKY_CONTENT: '.sticky-top',
    NAVBAR_TOGGLER: '.navbar-toggler'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Modal =
  /*#__PURE__*/
  function () {
    function Modal(element, config) {
      this._config = this._getConfig(config);
      this._element = element;
      this._dialog = $(element).find(Selector.DIALOG)[0];
      this._backdrop = null;
      this._isShown = false;
      this._isBodyOverflowing = false;
      this._ignoreBackdropClick = false;
      this._originalBodyPadding = 0;
      this._scrollbarWidth = 0;
    } // getters


    var _proto = Modal.prototype;

    // public
    _proto.toggle = function toggle(relatedTarget) {
      return this._isShown ? this.hide() : this.show(relatedTarget);
    };

    _proto.show = function show(relatedTarget) {
      var _this = this;

      if (this._isTransitioning || this._isShown) {
        return;
      }

      if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
        this._isTransitioning = true;
      }

      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: relatedTarget
      });
      $(this._element).trigger(showEvent);

      if (this._isShown || showEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = true;

      this._checkScrollbar();

      this._setScrollbar();

      this._adjustDialog();

      $(document.body).addClass(ClassName.OPEN);

      this._setEscapeEvent();

      this._setResizeEvent();

      $(this._element).on(Event.CLICK_DISMISS, Selector.DATA_DISMISS, function (event) {
        return _this.hide(event);
      });
      $(this._dialog).on(Event.MOUSEDOWN_DISMISS, function () {
        $(_this._element).one(Event.MOUSEUP_DISMISS, function (event) {
          if ($(event.target).is(_this._element)) {
            _this._ignoreBackdropClick = true;
          }
        });
      });

      this._showBackdrop(function () {
        return _this._showElement(relatedTarget);
      });
    };

    _proto.hide = function hide(event) {
      var _this2 = this;

      if (event) {
        event.preventDefault();
      }

      if (this._isTransitioning || !this._isShown) {
        return;
      }

      var hideEvent = $.Event(Event.HIDE);
      $(this._element).trigger(hideEvent);

      if (!this._isShown || hideEvent.isDefaultPrevented()) {
        return;
      }

      this._isShown = false;
      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (transition) {
        this._isTransitioning = true;
      }

      this._setEscapeEvent();

      this._setResizeEvent();

      $(document).off(Event.FOCUSIN);
      $(this._element).removeClass(ClassName.SHOW);
      $(this._element).off(Event.CLICK_DISMISS);
      $(this._dialog).off(Event.MOUSEDOWN_DISMISS);

      if (transition) {
        $(this._element).one(Util.TRANSITION_END, function (event) {
          return _this2._hideModal(event);
        }).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        this._hideModal();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(window, document, this._element, this._backdrop).off(EVENT_KEY);
      this._config = null;
      this._element = null;
      this._dialog = null;
      this._backdrop = null;
      this._isShown = null;
      this._isBodyOverflowing = null;
      this._ignoreBackdropClick = null;
      this._scrollbarWidth = null;
    };

    _proto.handleUpdate = function handleUpdate() {
      this._adjustDialog();
    }; // private


    _proto._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);
      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._showElement = function _showElement(relatedTarget) {
      var _this3 = this;

      var transition = Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE);

      if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE) {
        // don't move modals dom position
        document.body.appendChild(this._element);
      }

      this._element.style.display = 'block';

      this._element.removeAttribute('aria-hidden');

      this._element.scrollTop = 0;

      if (transition) {
        Util.reflow(this._element);
      }

      $(this._element).addClass(ClassName.SHOW);

      if (this._config.focus) {
        this._enforceFocus();
      }

      var shownEvent = $.Event(Event.SHOWN, {
        relatedTarget: relatedTarget
      });

      var transitionComplete = function transitionComplete() {
        if (_this3._config.focus) {
          _this3._element.focus();
        }

        _this3._isTransitioning = false;
        $(_this3._element).trigger(shownEvent);
      };

      if (transition) {
        $(this._dialog).one(Util.TRANSITION_END, transitionComplete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        transitionComplete();
      }
    };

    _proto._enforceFocus = function _enforceFocus() {
      var _this4 = this;

      $(document).off(Event.FOCUSIN) // guard against infinite focus loop
      .on(Event.FOCUSIN, function (event) {
        if (document !== event.target && _this4._element !== event.target && !$(_this4._element).has(event.target).length) {
          _this4._element.focus();
        }
      });
    };

    _proto._setEscapeEvent = function _setEscapeEvent() {
      var _this5 = this;

      if (this._isShown && this._config.keyboard) {
        $(this._element).on(Event.KEYDOWN_DISMISS, function (event) {
          if (event.which === ESCAPE_KEYCODE) {
            event.preventDefault();

            _this5.hide();
          }
        });
      } else if (!this._isShown) {
        $(this._element).off(Event.KEYDOWN_DISMISS);
      }
    };

    _proto._setResizeEvent = function _setResizeEvent() {
      var _this6 = this;

      if (this._isShown) {
        $(window).on(Event.RESIZE, function (event) {
          return _this6.handleUpdate(event);
        });
      } else {
        $(window).off(Event.RESIZE);
      }
    };

    _proto._hideModal = function _hideModal() {
      var _this7 = this;

      this._element.style.display = 'none';

      this._element.setAttribute('aria-hidden', true);

      this._isTransitioning = false;

      this._showBackdrop(function () {
        $(document.body).removeClass(ClassName.OPEN);

        _this7._resetAdjustments();

        _this7._resetScrollbar();

        $(_this7._element).trigger(Event.HIDDEN);
      });
    };

    _proto._removeBackdrop = function _removeBackdrop() {
      if (this._backdrop) {
        $(this._backdrop).remove();
        this._backdrop = null;
      }
    };

    _proto._showBackdrop = function _showBackdrop(callback) {
      var _this8 = this;

      var animate = $(this._element).hasClass(ClassName.FADE) ? ClassName.FADE : '';

      if (this._isShown && this._config.backdrop) {
        var doAnimate = Util.supportsTransitionEnd() && animate;
        this._backdrop = document.createElement('div');
        this._backdrop.className = ClassName.BACKDROP;

        if (animate) {
          $(this._backdrop).addClass(animate);
        }

        $(this._backdrop).appendTo(document.body);
        $(this._element).on(Event.CLICK_DISMISS, function (event) {
          if (_this8._ignoreBackdropClick) {
            _this8._ignoreBackdropClick = false;
            return;
          }

          if (event.target !== event.currentTarget) {
            return;
          }

          if (_this8._config.backdrop === 'static') {
            _this8._element.focus();
          } else {
            _this8.hide();
          }
        });

        if (doAnimate) {
          Util.reflow(this._backdrop);
        }

        $(this._backdrop).addClass(ClassName.SHOW);

        if (!callback) {
          return;
        }

        if (!doAnimate) {
          callback();
          return;
        }

        $(this._backdrop).one(Util.TRANSITION_END, callback).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
      } else if (!this._isShown && this._backdrop) {
        $(this._backdrop).removeClass(ClassName.SHOW);

        var callbackRemove = function callbackRemove() {
          _this8._removeBackdrop();

          if (callback) {
            callback();
          }
        };

        if (Util.supportsTransitionEnd() && $(this._element).hasClass(ClassName.FADE)) {
          $(this._backdrop).one(Util.TRANSITION_END, callbackRemove).emulateTransitionEnd(BACKDROP_TRANSITION_DURATION);
        } else {
          callbackRemove();
        }
      } else if (callback) {
        callback();
      }
    }; // ----------------------------------------------------------------------
    // the following methods are used to handle overflowing modals
    // todo (fat): these should probably be refactored out of modal.js
    // ----------------------------------------------------------------------


    _proto._adjustDialog = function _adjustDialog() {
      var isModalOverflowing = this._element.scrollHeight > document.documentElement.clientHeight;

      if (!this._isBodyOverflowing && isModalOverflowing) {
        this._element.style.paddingLeft = this._scrollbarWidth + "px";
      }

      if (this._isBodyOverflowing && !isModalOverflowing) {
        this._element.style.paddingRight = this._scrollbarWidth + "px";
      }
    };

    _proto._resetAdjustments = function _resetAdjustments() {
      this._element.style.paddingLeft = '';
      this._element.style.paddingRight = '';
    };

    _proto._checkScrollbar = function _checkScrollbar() {
      var rect = document.body.getBoundingClientRect();
      this._isBodyOverflowing = rect.left + rect.right < window.innerWidth;
      this._scrollbarWidth = this._getScrollbarWidth();
    };

    _proto._setScrollbar = function _setScrollbar() {
      var _this9 = this;

      if (this._isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        // Adjust fixed content padding
        $(Selector.FIXED_CONTENT).each(function (index, element) {
          var actualPadding = $(element)[0].style.paddingRight;
          var calculatedPadding = $(element).css('padding-right');
          $(element).data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + _this9._scrollbarWidth + "px");
        }); // Adjust sticky content margin

        $(Selector.STICKY_CONTENT).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) - _this9._scrollbarWidth + "px");
        }); // Adjust navbar-toggler margin

        $(Selector.NAVBAR_TOGGLER).each(function (index, element) {
          var actualMargin = $(element)[0].style.marginRight;
          var calculatedMargin = $(element).css('margin-right');
          $(element).data('margin-right', actualMargin).css('margin-right', parseFloat(calculatedMargin) + _this9._scrollbarWidth + "px");
        }); // Adjust body padding

        var actualPadding = document.body.style.paddingRight;
        var calculatedPadding = $('body').css('padding-right');
        $('body').data('padding-right', actualPadding).css('padding-right', parseFloat(calculatedPadding) + this._scrollbarWidth + "px");
      }
    };

    _proto._resetScrollbar = function _resetScrollbar() {
      // Restore fixed content padding
      $(Selector.FIXED_CONTENT).each(function (index, element) {
        var padding = $(element).data('padding-right');

        if (typeof padding !== 'undefined') {
          $(element).css('padding-right', padding).removeData('padding-right');
        }
      }); // Restore sticky content and navbar-toggler margin

      $(Selector.STICKY_CONTENT + ", " + Selector.NAVBAR_TOGGLER).each(function (index, element) {
        var margin = $(element).data('margin-right');

        if (typeof margin !== 'undefined') {
          $(element).css('margin-right', margin).removeData('margin-right');
        }
      }); // Restore body padding

      var padding = $('body').data('padding-right');

      if (typeof padding !== 'undefined') {
        $('body').css('padding-right', padding).removeData('padding-right');
      }
    };

    _proto._getScrollbarWidth = function _getScrollbarWidth() {
      // thx d.walsh
      var scrollDiv = document.createElement('div');
      scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
      document.body.appendChild(scrollDiv);
      var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    }; // static


    Modal._jQueryInterface = function _jQueryInterface(config, relatedTarget) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = $.extend({}, Modal.Default, $(this).data(), typeof config === 'object' && config);

        if (!data) {
          data = new Modal(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config](relatedTarget);
        } else if (_config.show) {
          data.show(relatedTarget);
        }
      });
    };

    createClass(Modal, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return Modal;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    var _this10 = this;

    var target;
    var selector = Util.getSelectorFromElement(this);

    if (selector) {
      target = $(selector)[0];
    }

    var config = $(target).data(DATA_KEY) ? 'toggle' : $.extend({}, $(target).data(), $(this).data());

    if (this.tagName === 'A' || this.tagName === 'AREA') {
      event.preventDefault();
    }

    var $target = $(target).one(Event.SHOW, function (showEvent) {
      if (showEvent.isDefaultPrevented()) {
        // only register focus restorer if modal will actually get shown
        return;
      }

      $target.one(Event.HIDDEN, function () {
        if ($(_this10).is(':visible')) {
          _this10.focus();
        }
      });
    });

    Modal._jQueryInterface.call($(target), config, this);
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Modal._jQueryInterface;
  $.fn[NAME].Constructor = Modal;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Modal._jQueryInterface;
  };

  return Modal;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): tooltip.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tooltip = function () {
  /**
   * Check for Popper dependency
   * Popper - https://popper.js.org
   */
  if (typeof Popper === 'undefined') {
    throw new Error('Bootstrap tooltips require Popper.js (https://popper.js.org)');
  }
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */


  var NAME = 'tooltip';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.tooltip';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var CLASS_PREFIX = 'bs-tooltip';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var DefaultType = {
    animation: 'boolean',
    template: 'string',
    title: '(string|element|function)',
    trigger: 'string',
    delay: '(number|object)',
    html: 'boolean',
    selector: '(string|boolean)',
    placement: '(string|function)',
    offset: '(number|string)',
    container: '(string|element|boolean)',
    fallbackPlacement: '(string|array)'
  };
  var AttachmentMap = {
    AUTO: 'auto',
    TOP: 'top',
    RIGHT: 'right',
    BOTTOM: 'bottom',
    LEFT: 'left'
  };
  var Default = {
    animation: true,
    template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    selector: false,
    placement: 'top',
    offset: 0,
    container: false,
    fallbackPlacement: 'flip'
  };
  var HoverState = {
    SHOW: 'show',
    OUT: 'out'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
  };
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TOOLTIP: '.tooltip',
    TOOLTIP_INNER: '.tooltip-inner',
    ARROW: '.arrow'
  };
  var Trigger = {
    HOVER: 'hover',
    FOCUS: 'focus',
    CLICK: 'click',
    MANUAL: 'manual'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tooltip =
  /*#__PURE__*/
  function () {
    function Tooltip(element, config) {
      // private
      this._isEnabled = true;
      this._timeout = 0;
      this._hoverState = '';
      this._activeTrigger = {};
      this._popper = null; // protected

      this.element = element;
      this.config = this._getConfig(config);
      this.tip = null;

      this._setListeners();
    } // getters


    var _proto = Tooltip.prototype;

    // public
    _proto.enable = function enable() {
      this._isEnabled = true;
    };

    _proto.disable = function disable() {
      this._isEnabled = false;
    };

    _proto.toggleEnabled = function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    };

    _proto.toggle = function toggle(event) {
      if (!this._isEnabled) {
        return;
      }

      if (event) {
        var dataKey = this.constructor.DATA_KEY;
        var context = $(event.currentTarget).data(dataKey);

        if (!context) {
          context = new this.constructor(event.currentTarget, this._getDelegateConfig());
          $(event.currentTarget).data(dataKey, context);
        }

        context._activeTrigger.click = !context._activeTrigger.click;

        if (context._isWithActiveTrigger()) {
          context._enter(null, context);
        } else {
          context._leave(null, context);
        }
      } else {
        if ($(this.getTipElement()).hasClass(ClassName.SHOW)) {
          this._leave(null, this);

          return;
        }

        this._enter(null, this);
      }
    };

    _proto.dispose = function dispose() {
      clearTimeout(this._timeout);
      $.removeData(this.element, this.constructor.DATA_KEY);
      $(this.element).off(this.constructor.EVENT_KEY);
      $(this.element).closest('.modal').off('hide.bs.modal');

      if (this.tip) {
        $(this.tip).remove();
      }

      this._isEnabled = null;
      this._timeout = null;
      this._hoverState = null;
      this._activeTrigger = null;

      if (this._popper !== null) {
        this._popper.destroy();
      }

      this._popper = null;
      this.element = null;
      this.config = null;
      this.tip = null;
    };

    _proto.show = function show() {
      var _this = this;

      if ($(this.element).css('display') === 'none') {
        throw new Error('Please use show on visible elements');
      }

      var showEvent = $.Event(this.constructor.Event.SHOW);

      if (this.isWithContent() && this._isEnabled) {
        $(this.element).trigger(showEvent);
        var isInTheDom = $.contains(this.element.ownerDocument.documentElement, this.element);

        if (showEvent.isDefaultPrevented() || !isInTheDom) {
          return;
        }

        var tip = this.getTipElement();
        var tipId = Util.getUID(this.constructor.NAME);
        tip.setAttribute('id', tipId);
        this.element.setAttribute('aria-describedby', tipId);
        this.setContent();

        if (this.config.animation) {
          $(tip).addClass(ClassName.FADE);
        }

        var placement = typeof this.config.placement === 'function' ? this.config.placement.call(this, tip, this.element) : this.config.placement;

        var attachment = this._getAttachment(placement);

        this.addAttachmentClass(attachment);
        var container = this.config.container === false ? document.body : $(this.config.container);
        $(tip).data(this.constructor.DATA_KEY, this);

        if (!$.contains(this.element.ownerDocument.documentElement, this.tip)) {
          $(tip).appendTo(container);
        }

        $(this.element).trigger(this.constructor.Event.INSERTED);
        this._popper = new Popper(this.element, tip, {
          placement: attachment,
          modifiers: {
            offset: {
              offset: this.config.offset
            },
            flip: {
              behavior: this.config.fallbackPlacement
            },
            arrow: {
              element: Selector.ARROW
            }
          },
          onCreate: function onCreate(data) {
            if (data.originalPlacement !== data.placement) {
              _this._handlePopperPlacementChange(data);
            }
          },
          onUpdate: function onUpdate(data) {
            _this._handlePopperPlacementChange(data);
          }
        });
        $(tip).addClass(ClassName.SHOW); // if this is a touch-enabled device we add extra
        // empty mouseover listeners to the body's immediate children;
        // only needed because of broken event delegation on iOS
        // https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html

        if ('ontouchstart' in document.documentElement) {
          $('body').children().on('mouseover', null, $.noop);
        }

        var complete = function complete() {
          if (_this.config.animation) {
            _this._fixTransition();
          }

          var prevHoverState = _this._hoverState;
          _this._hoverState = null;
          $(_this.element).trigger(_this.constructor.Event.SHOWN);

          if (prevHoverState === HoverState.OUT) {
            _this._leave(null, _this);
          }
        };

        if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
          $(this.tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(Tooltip._TRANSITION_DURATION);
        } else {
          complete();
        }
      }
    };

    _proto.hide = function hide(callback) {
      var _this2 = this;

      var tip = this.getTipElement();
      var hideEvent = $.Event(this.constructor.Event.HIDE);

      var complete = function complete() {
        if (_this2._hoverState !== HoverState.SHOW && tip.parentNode) {
          tip.parentNode.removeChild(tip);
        }

        _this2._cleanTipClass();

        _this2.element.removeAttribute('aria-describedby');

        $(_this2.element).trigger(_this2.constructor.Event.HIDDEN);

        if (_this2._popper !== null) {
          _this2._popper.destroy();
        }

        if (callback) {
          callback();
        }
      };

      $(this.element).trigger(hideEvent);

      if (hideEvent.isDefaultPrevented()) {
        return;
      }

      $(tip).removeClass(ClassName.SHOW); // if this is a touch-enabled device we remove the extra
      // empty mouseover listeners we added for iOS support

      if ('ontouchstart' in document.documentElement) {
        $('body').children().off('mouseover', null, $.noop);
      }

      this._activeTrigger[Trigger.CLICK] = false;
      this._activeTrigger[Trigger.FOCUS] = false;
      this._activeTrigger[Trigger.HOVER] = false;

      if (Util.supportsTransitionEnd() && $(this.tip).hasClass(ClassName.FADE)) {
        $(tip).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      this._hoverState = '';
    };

    _proto.update = function update() {
      if (this._popper !== null) {
        this._popper.scheduleUpdate();
      }
    }; // protected


    _proto.isWithContent = function isWithContent() {
      return Boolean(this.getTitle());
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement());
      this.setElementContent($tip.find(Selector.TOOLTIP_INNER), this.getTitle());
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    };

    _proto.setElementContent = function setElementContent($element, content) {
      var html = this.config.html;

      if (typeof content === 'object' && (content.nodeType || content.jquery)) {
        // content is a DOM node or a jQuery
        if (html) {
          if (!$(content).parent().is($element)) {
            $element.empty().append(content);
          }
        } else {
          $element.text($(content).text());
        }
      } else {
        $element[html ? 'html' : 'text'](content);
      }
    };

    _proto.getTitle = function getTitle() {
      var title = this.element.getAttribute('data-original-title');

      if (!title) {
        title = typeof this.config.title === 'function' ? this.config.title.call(this.element) : this.config.title;
      }

      return title;
    }; // private


    _proto._getAttachment = function _getAttachment(placement) {
      return AttachmentMap[placement.toUpperCase()];
    };

    _proto._setListeners = function _setListeners() {
      var _this3 = this;

      var triggers = this.config.trigger.split(' ');
      triggers.forEach(function (trigger) {
        if (trigger === 'click') {
          $(_this3.element).on(_this3.constructor.Event.CLICK, _this3.config.selector, function (event) {
            return _this3.toggle(event);
          });
        } else if (trigger !== Trigger.MANUAL) {
          var eventIn = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSEENTER : _this3.constructor.Event.FOCUSIN;
          var eventOut = trigger === Trigger.HOVER ? _this3.constructor.Event.MOUSELEAVE : _this3.constructor.Event.FOCUSOUT;
          $(_this3.element).on(eventIn, _this3.config.selector, function (event) {
            return _this3._enter(event);
          }).on(eventOut, _this3.config.selector, function (event) {
            return _this3._leave(event);
          });
        }

        $(_this3.element).closest('.modal').on('hide.bs.modal', function () {
          return _this3.hide();
        });
      });

      if (this.config.selector) {
        this.config = $.extend({}, this.config, {
          trigger: 'manual',
          selector: ''
        });
      } else {
        this._fixTitle();
      }
    };

    _proto._fixTitle = function _fixTitle() {
      var titleType = typeof this.element.getAttribute('data-original-title');

      if (this.element.getAttribute('title') || titleType !== 'string') {
        this.element.setAttribute('data-original-title', this.element.getAttribute('title') || '');
        this.element.setAttribute('title', '');
      }
    };

    _proto._enter = function _enter(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusin' ? Trigger.FOCUS : Trigger.HOVER] = true;
      }

      if ($(context.getTipElement()).hasClass(ClassName.SHOW) || context._hoverState === HoverState.SHOW) {
        context._hoverState = HoverState.SHOW;
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.SHOW;

      if (!context.config.delay || !context.config.delay.show) {
        context.show();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.SHOW) {
          context.show();
        }
      }, context.config.delay.show);
    };

    _proto._leave = function _leave(event, context) {
      var dataKey = this.constructor.DATA_KEY;
      context = context || $(event.currentTarget).data(dataKey);

      if (!context) {
        context = new this.constructor(event.currentTarget, this._getDelegateConfig());
        $(event.currentTarget).data(dataKey, context);
      }

      if (event) {
        context._activeTrigger[event.type === 'focusout' ? Trigger.FOCUS : Trigger.HOVER] = false;
      }

      if (context._isWithActiveTrigger()) {
        return;
      }

      clearTimeout(context._timeout);
      context._hoverState = HoverState.OUT;

      if (!context.config.delay || !context.config.delay.hide) {
        context.hide();
        return;
      }

      context._timeout = setTimeout(function () {
        if (context._hoverState === HoverState.OUT) {
          context.hide();
        }
      }, context.config.delay.hide);
    };

    _proto._isWithActiveTrigger = function _isWithActiveTrigger() {
      for (var trigger in this._activeTrigger) {
        if (this._activeTrigger[trigger]) {
          return true;
        }
      }

      return false;
    };

    _proto._getConfig = function _getConfig(config) {
      config = $.extend({}, this.constructor.Default, $(this.element).data(), config);

      if (typeof config.delay === 'number') {
        config.delay = {
          show: config.delay,
          hide: config.delay
        };
      }

      if (typeof config.title === 'number') {
        config.title = config.title.toString();
      }

      if (typeof config.content === 'number') {
        config.content = config.content.toString();
      }

      Util.typeCheckConfig(NAME, config, this.constructor.DefaultType);
      return config;
    };

    _proto._getDelegateConfig = function _getDelegateConfig() {
      var config = {};

      if (this.config) {
        for (var key in this.config) {
          if (this.constructor.Default[key] !== this.config[key]) {
            config[key] = this.config[key];
          }
        }
      }

      return config;
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    };

    _proto._handlePopperPlacementChange = function _handlePopperPlacementChange(data) {
      this._cleanTipClass();

      this.addAttachmentClass(this._getAttachment(data.placement));
    };

    _proto._fixTransition = function _fixTransition() {
      var tip = this.getTipElement();
      var initConfigAnimation = this.config.animation;

      if (tip.getAttribute('x-placement') !== null) {
        return;
      }

      $(tip).removeClass(ClassName.FADE);
      this.config.animation = false;
      this.hide();
      this.show();
      this.config.animation = initConfigAnimation;
    }; // static


    Tooltip._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data && /dispose|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Tooltip(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    createClass(Tooltip, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Tooltip;
  }();
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = Tooltip._jQueryInterface;
  $.fn[NAME].Constructor = Tooltip;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tooltip._jQueryInterface;
  };

  return Tooltip;
}($, Popper);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): popover.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Popover = function () {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'popover';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.popover';
  var EVENT_KEY = "." + DATA_KEY;
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var CLASS_PREFIX = 'bs-popover';
  var BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)" + CLASS_PREFIX + "\\S+", 'g');
  var Default = $.extend({}, Tooltip.Default, {
    placement: 'right',
    trigger: 'click',
    content: '',
    template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
  });
  var DefaultType = $.extend({}, Tooltip.DefaultType, {
    content: '(string|element|function)'
  });
  var ClassName = {
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    TITLE: '.popover-header',
    CONTENT: '.popover-body'
  };
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    INSERTED: "inserted" + EVENT_KEY,
    CLICK: "click" + EVENT_KEY,
    FOCUSIN: "focusin" + EVENT_KEY,
    FOCUSOUT: "focusout" + EVENT_KEY,
    MOUSEENTER: "mouseenter" + EVENT_KEY,
    MOUSELEAVE: "mouseleave" + EVENT_KEY
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Popover =
  /*#__PURE__*/
  function (_Tooltip) {
    inheritsLoose(Popover, _Tooltip);

    function Popover() {
      return _Tooltip.apply(this, arguments) || this;
    }

    var _proto = Popover.prototype;

    // overrides
    _proto.isWithContent = function isWithContent() {
      return this.getTitle() || this._getContent();
    };

    _proto.addAttachmentClass = function addAttachmentClass(attachment) {
      $(this.getTipElement()).addClass(CLASS_PREFIX + "-" + attachment);
    };

    _proto.getTipElement = function getTipElement() {
      this.tip = this.tip || $(this.config.template)[0];
      return this.tip;
    };

    _proto.setContent = function setContent() {
      var $tip = $(this.getTipElement()); // we use append for html objects to maintain js events

      this.setElementContent($tip.find(Selector.TITLE), this.getTitle());
      this.setElementContent($tip.find(Selector.CONTENT), this._getContent());
      $tip.removeClass(ClassName.FADE + " " + ClassName.SHOW);
    }; // private


    _proto._getContent = function _getContent() {
      return this.element.getAttribute('data-content') || (typeof this.config.content === 'function' ? this.config.content.call(this.element) : this.config.content);
    };

    _proto._cleanTipClass = function _cleanTipClass() {
      var $tip = $(this.getTipElement());
      var tabClass = $tip.attr('class').match(BSCLS_PREFIX_REGEX);

      if (tabClass !== null && tabClass.length > 0) {
        $tip.removeClass(tabClass.join(''));
      }
    }; // static


    Popover._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' ? config : null;

        if (!data && /destroy|hide/.test(config)) {
          return;
        }

        if (!data) {
          data = new Popover(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    createClass(Popover, null, [{
      key: "VERSION",
      // getters
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }, {
      key: "NAME",
      get: function get() {
        return NAME;
      }
    }, {
      key: "DATA_KEY",
      get: function get() {
        return DATA_KEY;
      }
    }, {
      key: "Event",
      get: function get() {
        return Event;
      }
    }, {
      key: "EVENT_KEY",
      get: function get() {
        return EVENT_KEY;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return DefaultType;
      }
    }]);
    return Popover;
  }(Tooltip);
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  $.fn[NAME] = Popover._jQueryInterface;
  $.fn[NAME].Constructor = Popover;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Popover._jQueryInterface;
  };

  return Popover;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): scrollspy.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var ScrollSpy = function () {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'scrollspy';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.scrollspy';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var Default = {
    offset: 10,
    method: 'auto',
    target: ''
  };
  var DefaultType = {
    offset: 'number',
    method: 'string',
    target: '(string|element)'
  };
  var Event = {
    ACTIVATE: "activate" + EVENT_KEY,
    SCROLL: "scroll" + EVENT_KEY,
    LOAD_DATA_API: "load" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_ITEM: 'dropdown-item',
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active'
  };
  var Selector = {
    DATA_SPY: '[data-spy="scroll"]',
    ACTIVE: '.active',
    NAV_LIST_GROUP: '.nav, .list-group',
    NAV_LINKS: '.nav-link',
    NAV_ITEMS: '.nav-item',
    LIST_ITEMS: '.list-group-item',
    DROPDOWN: '.dropdown',
    DROPDOWN_ITEMS: '.dropdown-item',
    DROPDOWN_TOGGLE: '.dropdown-toggle'
  };
  var OffsetMethod = {
    OFFSET: 'offset',
    POSITION: 'position'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var ScrollSpy =
  /*#__PURE__*/
  function () {
    function ScrollSpy(element, config) {
      var _this = this;

      this._element = element;
      this._scrollElement = element.tagName === 'BODY' ? window : element;
      this._config = this._getConfig(config);
      this._selector = this._config.target + " " + Selector.NAV_LINKS + "," + (this._config.target + " " + Selector.LIST_ITEMS + ",") + (this._config.target + " " + Selector.DROPDOWN_ITEMS);
      this._offsets = [];
      this._targets = [];
      this._activeTarget = null;
      this._scrollHeight = 0;
      $(this._scrollElement).on(Event.SCROLL, function (event) {
        return _this._process(event);
      });
      this.refresh();

      this._process();
    } // getters


    var _proto = ScrollSpy.prototype;

    // public
    _proto.refresh = function refresh() {
      var _this2 = this;

      var autoMethod = this._scrollElement !== this._scrollElement.window ? OffsetMethod.POSITION : OffsetMethod.OFFSET;
      var offsetMethod = this._config.method === 'auto' ? autoMethod : this._config.method;
      var offsetBase = offsetMethod === OffsetMethod.POSITION ? this._getScrollTop() : 0;
      this._offsets = [];
      this._targets = [];
      this._scrollHeight = this._getScrollHeight();
      var targets = $.makeArray($(this._selector));
      targets.map(function (element) {
        var target;
        var targetSelector = Util.getSelectorFromElement(element);

        if (targetSelector) {
          target = $(targetSelector)[0];
        }

        if (target) {
          var targetBCR = target.getBoundingClientRect();

          if (targetBCR.width || targetBCR.height) {
            // todo (fat): remove sketch reliance on jQuery position/offset
            return [$(target)[offsetMethod]().top + offsetBase, targetSelector];
          }
        }

        return null;
      }).filter(function (item) {
        return item;
      }).sort(function (a, b) {
        return a[0] - b[0];
      }).forEach(function (item) {
        _this2._offsets.push(item[0]);

        _this2._targets.push(item[1]);
      });
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      $(this._scrollElement).off(EVENT_KEY);
      this._element = null;
      this._scrollElement = null;
      this._config = null;
      this._selector = null;
      this._offsets = null;
      this._targets = null;
      this._activeTarget = null;
      this._scrollHeight = null;
    }; // private


    _proto._getConfig = function _getConfig(config) {
      config = $.extend({}, Default, config);

      if (typeof config.target !== 'string') {
        var id = $(config.target).attr('id');

        if (!id) {
          id = Util.getUID(NAME);
          $(config.target).attr('id', id);
        }

        config.target = "#" + id;
      }

      Util.typeCheckConfig(NAME, config, DefaultType);
      return config;
    };

    _proto._getScrollTop = function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    };

    _proto._getScrollHeight = function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    };

    _proto._getOffsetHeight = function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    };

    _proto._process = function _process() {
      var scrollTop = this._getScrollTop() + this._config.offset;

      var scrollHeight = this._getScrollHeight();

      var maxScroll = this._config.offset + scrollHeight - this._getOffsetHeight();

      if (this._scrollHeight !== scrollHeight) {
        this.refresh();
      }

      if (scrollTop >= maxScroll) {
        var target = this._targets[this._targets.length - 1];

        if (this._activeTarget !== target) {
          this._activate(target);
        }

        return;
      }

      if (this._activeTarget && scrollTop < this._offsets[0] && this._offsets[0] > 0) {
        this._activeTarget = null;

        this._clear();

        return;
      }

      for (var i = this._offsets.length; i--;) {
        var isActiveTarget = this._activeTarget !== this._targets[i] && scrollTop >= this._offsets[i] && (typeof this._offsets[i + 1] === 'undefined' || scrollTop < this._offsets[i + 1]);

        if (isActiveTarget) {
          this._activate(this._targets[i]);
        }
      }
    };

    _proto._activate = function _activate(target) {
      this._activeTarget = target;

      this._clear();

      var queries = this._selector.split(','); // eslint-disable-next-line arrow-body-style


      queries = queries.map(function (selector) {
        return selector + "[data-target=\"" + target + "\"]," + (selector + "[href=\"" + target + "\"]");
      });
      var $link = $(queries.join(','));

      if ($link.hasClass(ClassName.DROPDOWN_ITEM)) {
        $link.closest(Selector.DROPDOWN).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        $link.addClass(ClassName.ACTIVE);
      } else {
        // Set triggered link as active
        $link.addClass(ClassName.ACTIVE); // Set triggered links parents as active
        // With both <ul> and <nav> markup a parent is the previous sibling of any nav ancestor

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_LINKS + ", " + Selector.LIST_ITEMS).addClass(ClassName.ACTIVE); // Handle special case when .nav-link is inside .nav-item

        $link.parents(Selector.NAV_LIST_GROUP).prev(Selector.NAV_ITEMS).children(Selector.NAV_LINKS).addClass(ClassName.ACTIVE);
      }

      $(this._scrollElement).trigger(Event.ACTIVATE, {
        relatedTarget: target
      });
    };

    _proto._clear = function _clear() {
      $(this._selector).filter(Selector.ACTIVE).removeClass(ClassName.ACTIVE);
    }; // static


    ScrollSpy._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var data = $(this).data(DATA_KEY);

        var _config = typeof config === 'object' && config;

        if (!data) {
          data = new ScrollSpy(this, _config);
          $(this).data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    createClass(ScrollSpy, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }, {
      key: "Default",
      get: function get() {
        return Default;
      }
    }]);
    return ScrollSpy;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(window).on(Event.LOAD_DATA_API, function () {
    var scrollSpys = $.makeArray($(Selector.DATA_SPY));

    for (var i = scrollSpys.length; i--;) {
      var $spy = $(scrollSpys[i]);

      ScrollSpy._jQueryInterface.call($spy, $spy.data());
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = ScrollSpy._jQueryInterface;
  $.fn[NAME].Constructor = ScrollSpy;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return ScrollSpy._jQueryInterface;
  };

  return ScrollSpy;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-beta.2): tab.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

var Tab = function () {
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */
  var NAME = 'tab';
  var VERSION = '4.0.0-beta.2';
  var DATA_KEY = 'bs.tab';
  var EVENT_KEY = "." + DATA_KEY;
  var DATA_API_KEY = '.data-api';
  var JQUERY_NO_CONFLICT = $.fn[NAME];
  var TRANSITION_DURATION = 150;
  var Event = {
    HIDE: "hide" + EVENT_KEY,
    HIDDEN: "hidden" + EVENT_KEY,
    SHOW: "show" + EVENT_KEY,
    SHOWN: "shown" + EVENT_KEY,
    CLICK_DATA_API: "click" + EVENT_KEY + DATA_API_KEY
  };
  var ClassName = {
    DROPDOWN_MENU: 'dropdown-menu',
    ACTIVE: 'active',
    DISABLED: 'disabled',
    FADE: 'fade',
    SHOW: 'show'
  };
  var Selector = {
    DROPDOWN: '.dropdown',
    NAV_LIST_GROUP: '.nav, .list-group',
    ACTIVE: '.active',
    ACTIVE_UL: '> li > .active',
    DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
    DROPDOWN_TOGGLE: '.dropdown-toggle',
    DROPDOWN_ACTIVE_CHILD: '> .dropdown-menu .active'
    /**
     * ------------------------------------------------------------------------
     * Class Definition
     * ------------------------------------------------------------------------
     */

  };

  var Tab =
  /*#__PURE__*/
  function () {
    function Tab(element) {
      this._element = element;
    } // getters


    var _proto = Tab.prototype;

    // public
    _proto.show = function show() {
      var _this = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && $(this._element).hasClass(ClassName.ACTIVE) || $(this._element).hasClass(ClassName.DISABLED)) {
        return;
      }

      var target;
      var previous;
      var listElement = $(this._element).closest(Selector.NAV_LIST_GROUP)[0];
      var selector = Util.getSelectorFromElement(this._element);

      if (listElement) {
        var itemSelector = listElement.nodeName === 'UL' ? Selector.ACTIVE_UL : Selector.ACTIVE;
        previous = $.makeArray($(listElement).find(itemSelector));
        previous = previous[previous.length - 1];
      }

      var hideEvent = $.Event(Event.HIDE, {
        relatedTarget: this._element
      });
      var showEvent = $.Event(Event.SHOW, {
        relatedTarget: previous
      });

      if (previous) {
        $(previous).trigger(hideEvent);
      }

      $(this._element).trigger(showEvent);

      if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) {
        return;
      }

      if (selector) {
        target = $(selector)[0];
      }

      this._activate(this._element, listElement);

      var complete = function complete() {
        var hiddenEvent = $.Event(Event.HIDDEN, {
          relatedTarget: _this._element
        });
        var shownEvent = $.Event(Event.SHOWN, {
          relatedTarget: previous
        });
        $(previous).trigger(hiddenEvent);
        $(_this._element).trigger(shownEvent);
      };

      if (target) {
        this._activate(target, target.parentNode, complete);
      } else {
        complete();
      }
    };

    _proto.dispose = function dispose() {
      $.removeData(this._element, DATA_KEY);
      this._element = null;
    }; // private


    _proto._activate = function _activate(element, container, callback) {
      var _this2 = this;

      var activeElements;

      if (container.nodeName === 'UL') {
        activeElements = $(container).find(Selector.ACTIVE_UL);
      } else {
        activeElements = $(container).children(Selector.ACTIVE);
      }

      var active = activeElements[0];
      var isTransitioning = callback && Util.supportsTransitionEnd() && active && $(active).hasClass(ClassName.FADE);

      var complete = function complete() {
        return _this2._transitionComplete(element, active, isTransitioning, callback);
      };

      if (active && isTransitioning) {
        $(active).one(Util.TRANSITION_END, complete).emulateTransitionEnd(TRANSITION_DURATION);
      } else {
        complete();
      }

      if (active) {
        $(active).removeClass(ClassName.SHOW);
      }
    };

    _proto._transitionComplete = function _transitionComplete(element, active, isTransitioning, callback) {
      if (active) {
        $(active).removeClass(ClassName.ACTIVE);
        var dropdownChild = $(active.parentNode).find(Selector.DROPDOWN_ACTIVE_CHILD)[0];

        if (dropdownChild) {
          $(dropdownChild).removeClass(ClassName.ACTIVE);
        }

        if (active.getAttribute('role') === 'tab') {
          active.setAttribute('aria-selected', false);
        }
      }

      $(element).addClass(ClassName.ACTIVE);

      if (element.getAttribute('role') === 'tab') {
        element.setAttribute('aria-selected', true);
      }

      if (isTransitioning) {
        Util.reflow(element);
        $(element).addClass(ClassName.SHOW);
      } else {
        $(element).removeClass(ClassName.FADE);
      }

      if (element.parentNode && $(element.parentNode).hasClass(ClassName.DROPDOWN_MENU)) {
        var dropdownElement = $(element).closest(Selector.DROPDOWN)[0];

        if (dropdownElement) {
          $(dropdownElement).find(Selector.DROPDOWN_TOGGLE).addClass(ClassName.ACTIVE);
        }

        element.setAttribute('aria-expanded', true);
      }

      if (callback) {
        callback();
      }
    }; // static


    Tab._jQueryInterface = function _jQueryInterface(config) {
      return this.each(function () {
        var $this = $(this);
        var data = $this.data(DATA_KEY);

        if (!data) {
          data = new Tab(this);
          $this.data(DATA_KEY, data);
        }

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new Error("No method named \"" + config + "\"");
          }

          data[config]();
        }
      });
    };

    createClass(Tab, null, [{
      key: "VERSION",
      get: function get() {
        return VERSION;
      }
    }]);
    return Tab;
  }();
  /**
   * ------------------------------------------------------------------------
   * Data Api implementation
   * ------------------------------------------------------------------------
   */


  $(document).on(Event.CLICK_DATA_API, Selector.DATA_TOGGLE, function (event) {
    event.preventDefault();

    Tab._jQueryInterface.call($(this), 'show');
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  $.fn[NAME] = Tab._jQueryInterface;
  $.fn[NAME].Constructor = Tab;

  $.fn[NAME].noConflict = function () {
    $.fn[NAME] = JQUERY_NO_CONFLICT;
    return Tab._jQueryInterface;
  };

  return Tab;
}($);

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(function () {
  if (typeof $ === 'undefined') {
    throw new Error('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  }

  var version = $.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})($);

exports.Util = Util;
exports.Alert = Alert;
exports.Button = Button;
exports.Carousel = Carousel;
exports.Collapse = Collapse;
exports.Dropdown = Dropdown;
exports.Modal = Modal;
exports.Popover = Popover;
exports.Scrollspy = ScrollSpy;
exports.Tab = Tab;
exports.Tooltip = Tooltip;

return exports;

}({},$));
//# sourceMappingURL=bootstrap.bundle.js.map

/**
 * jQuery 2.0+  REQUIRED
 * ==============================================
 * iOS9 'click', 'mousedown' and 'mouseup' fix
 * ---------------------------------------------
 * Include this script in your poject to fix 'click', 'mousedown' and 'mouseup' event
 * handling for $(window), $(document), $('body') and $('html'). By default iOS9 Safari is
 * suppressing those events in some situations and without some magic they can't be rely on.
 * This fix is blocking native event handlers from firing
 * (in some rare cases event will reach it's destination)
 * and it handles native event handlers basing on 'touchstart' and 'touchend' event.
 * ---------------------------------------------
 * Use at your own risk
 */

$(document).ready(function(){

  /** Device is not iOS. There's no need to hack the planet. */
  if( typeof navigator.userAgent == 'undefined' || ! navigator.userAgent.match(/(iPad|iPhone|iPod)/i) ){
    return;
  }

  var EVENT_NAMESPACE = 'IOS9FIX';
  var MAX_DOM_DEPTH = 100;

  /**
   * Suppress event for $object.
   * @param $object
   * @param eventType
   */
  var blockEventFor = function($object, eventType) {
    var eventQueue, eventRepo = new Array();

    if($._data($object.get(0),"events") !== undefined){
      eventQueue = $._data($object.get(0),"events")[eventType];
    }

    if(eventQueue !== undefined) {
      for(var i = 0; i < eventQueue.length; i++) {
        eventRepo.push({
          handler: eventQueue[i].handler,
          selector: eventQueue[i].selector,
          namespace: eventQueue[i].namespace
        });
      }

      $object.off(eventType);
    }

    $object.on(eventType + '.' + EVENT_NAMESPACE, '*', function(event){
      event.stopImmediatePropagation();
    });

    for(var i = 0; i < eventRepo.length; i++) {

      var _eventType = eventRepo[i].namespace
          ? eventType + '.' + eventRepo[i].namespace
          : eventType;

      $object.on(_eventType, eventRepo[i].selector, eventRepo[i].handler);
    }
  };

  /**
   * EXECUTE MOCKED-EVENT HANDLERS
   * @param object $object
   * @param string mockedEventType
   * @param object originalEvent
   */
  var executeMockedEventHandlers = function($object, mockedEventType, originalEvent){
    /** Let's say touch is mouse left button (by default touch event has .which === 0) */
    originalEvent.which = 1;

    var mockedEventQueue, $target = $(originalEvent.target);

    if($._data($object.get(0), "events") !== undefined){
      mockedEventQueue = $._data($object.get(0), "events")[mockedEventType];
    }

    /** No event-handlers for event of such type */
    if(mockedEventQueue === undefined){
      return false;
    }

    /** Traverse DOM from 'target' to 'base' and execute mockedEventHandlers for all matched elements */
    for(var preventEndlessLoop = 0; preventEndlessLoop < MAX_DOM_DEPTH; preventEndlessLoop++){

      /** END THE LOOP */
      if($target.length == 0){
        break;
      }

      /** EXECUTE MOCKED EVENT HANDLERS */
      for(var i = 0; i < mockedEventQueue.length; i++){

        // Skip eventHandler used to block originalEvent for mockedEvent
        if(mockedEventQueue[i].namespace === EVENT_NAMESPACE){
          continue;
        }

        if(mockedEventQueue[i].selector === undefined){
          // Skip $object level eventHandlers until current DOM level is $object level
          if( ! $target.is($object[0])) {
            continue;
          }
        } else {
          // Skip eventHandlers not meant for current DOM level
          if( ! $target.is(mockedEventQueue[i].selector)){
            continue;
          }
        }

        // Execute handler for current DOM level
        if(mockedEventQueue[i].handler.call($target[0], originalEvent) === false){
          originalEvent.stopImmediatePropagation();
        }

        // Check for stopImmediatePropagation() */
        if(originalEvent.isImmediatePropagationStopped()){
          break;
        }
      }

      if(originalEvent.isPropagationStopped()){
        break;
      }

      /** Go to parent level */
      $target = $target.parent();
    }
  };



  /*****************************
   *      INITIALIZATION
   ****************************/

  /**
   * Go through objects and suppress all selected events.
   */
  $.each([$(document), $(window), $('body'), $('html')], function(objectIndex, $object){
    $.each(['mousedown', 'click',  'mouseup'], function(eventIndex, eventType){
      blockEventFor($object, eventType);
    });
  });


  /**
   * MOCK MOUSEDOWN EVENT
   */

  /**
   * Init MouseDown-Mock for Dom $object
   * @param $object
   */
  var initMouseDownMock = function($object) {
    $object.on('touchstart', function (event) {
      executeMockedEventHandlers($object, 'mousedown', event);
    });
  };

  /**
   * Init MouseDown-Mock for objects...
   */
  $.each([$(document), $(window), $('body'), $('html')], function(objectIndex, $object){
    initMouseDownMock($object);
  });


  /**
   * MOCK MOUSEUP EVENT
   */

  /**
   * Init MouseUp-Mock for Dom $object
   * @param $object
   */
  var initMouseUpMock = function($object) {
    $object.on('touchend', function (event) {
      executeMockedEventHandlers($object, 'mouseup', event);
    });
  };

  /**
   * Init MouseUp-Mock for objects...
   */
  $.each([$(document), $(window), $('body'), $('html')], function(objectIndex, $object){
    initMouseUpMock($object);
  });


  /**
   * MOCK CLICK EVENT
   */

  /**
   * Init Click-Mock for Dom $object
   * @param $object
   */
  var initClickMock = function($object) {
    var clickCancelationTimer, isClick, cursorX, cursorY, target;

    $object.on('touchstart', function(event){
      isClick = true;

      cursorX = event.originalEvent.touches[0].pageX;
      cursorY = event.originalEvent.touches[0].pageY;
      target = event.target;

      /** Click Timeout */
      clickCancelationTimer = setTimeout(function(){
        isClick = false;
      }, 300);
    });

    /** moved more than 10 px away from starting position */
    $object.on('touchmove', function(event){
      if(Math.abs(cursorX - event.originalEvent.touches[0].pageX) > 10 || Math.abs(cursorY - event.originalEvent.touches[0].pageY) > 10){
        isClick = false;
      }
    });

    $object.on('touchend', function(event){
      clearTimeout(clickCancelationTimer);

      if(isClick){
        executeMockedEventHandlers($object, 'click', event);
      }
    });
  };

  /**
   * Init Click-Mock for objects...
   */
  $.each([$(document), $(window), $('body'), $('html')], function(objectIndex, $object){
    initClickMock($object);
  });


});


$(function() {
    ParallaxScroll.init();
});

var ParallaxScroll = {
    /* PUBLIC VARIABLES */
    showLogs: false,
    round: 1000,

    /* PUBLIC FUNCTIONS */
    init: function() {
        this._log("init");
        if (this._inited) {
            this._log("Already Inited");
            this._inited = true;
            return;
        }
        this._requestAnimationFrame = (function(){
          return  window.requestAnimationFrame       || 
                  window.webkitRequestAnimationFrame || 
                  window.mozRequestAnimationFrame    || 
                  window.oRequestAnimationFrame      || 
                  window.msRequestAnimationFrame     || 
                  function(/* function */ callback, /* DOMElement */ element){
                      window.setTimeout(callback, 1000 / 60);
                  };
        })();
        this._onScroll(true);
    },

    /* PRIVATE VARIABLES */
    _inited: false,
    _properties: ['x', 'y', 'z', 'rotateX', 'rotateY', 'rotateZ', 'scaleX', 'scaleY', 'scaleZ', 'scale'],
    _requestAnimationFrame:null,

    /* PRIVATE FUNCTIONS */
    _log: function(message) {
        if (this.showLogs) console.log("Parallax Scroll / " + message);
    },
    _onScroll: function(noSmooth) {
        var scroll = $(document).scrollTop();
        var windowHeight = $(window).height();
        this._log("onScroll " + scroll);
        $("[data-parallax]").each($.proxy(function(index, el) {
            var $el = $(el);
            var properties = [];
            var applyProperties = false;
            var style = $el.data("style");
            if (style == undefined) {
                style = $el.attr("style") || "";
                $el.data("style", style);
            }
            var datas = [$el.data("parallax")];
            var iData;
            for(iData = 2; ; iData++) {
                if($el.data("parallax"+iData)) {
                    datas.push($el.data("parallax-"+iData));
                }
                else {
                    break;
                }
            }
            var datasLength = datas.length;
            for(iData = 0; iData < datasLength; iData ++) {
                var data = datas[iData];
                var scrollFrom = data["from-scroll"];
                if (scrollFrom == undefined) scrollFrom = Math.max(0, $(el).offset().top - windowHeight);
                scrollFrom = scrollFrom | 0;
                var scrollDistance = data["distance"];
                var scrollTo = data["to-scroll"];
                if (scrollDistance == undefined && scrollTo == undefined) scrollDistance = windowHeight;
                scrollDistance = Math.max(scrollDistance | 0, 1);
                var easing = data["easing"];
                var easingReturn = data["easing-return"];
                if (easing == undefined || !$.easing|| !$.easing[easing]) easing = null;
                if (easingReturn == undefined || !$.easing|| !$.easing[easingReturn]) easingReturn = easing;
                if (easing) {
                    var totalTime = data["duration"];
                    if (totalTime == undefined) totalTime = scrollDistance;
                    totalTime = Math.max(totalTime | 0, 1);
                    var totalTimeReturn = data["duration-return"];
                    if (totalTimeReturn == undefined) totalTimeReturn = totalTime;
                    scrollDistance = 1;
                    var currentTime = $el.data("current-time");
                    if(currentTime == undefined) currentTime = 0;
                }
                if (scrollTo == undefined) scrollTo = scrollFrom + scrollDistance;
                scrollTo = scrollTo | 0;
                var smoothness = data["smoothness"];
                if (smoothness == undefined) smoothness = 30;
                smoothness = smoothness | 0;
                if (noSmooth || smoothness == 0) smoothness = 1;
                smoothness = smoothness | 0;
                var scrollCurrent = scroll;
                scrollCurrent = Math.max(scrollCurrent, scrollFrom);
                scrollCurrent = Math.min(scrollCurrent, scrollTo);
                if(easing) {
                    if($el.data("sens") == undefined) $el.data("sens", "back");
                    if(scrollCurrent>scrollFrom) {
                        if($el.data("sens") == "back") {
                            currentTime = 1;
                            $el.data("sens", "go");
                        }
                        else {
                            currentTime++;
                        }
                    }
                    if(scrollCurrent<scrollTo) {
                        if($el.data("sens") == "go") {
                            currentTime = 1;
                            $el.data("sens", "back");
                        }
                        else {
                            currentTime++;
                        }
                    }
                    if(noSmooth) currentTime = totalTime;
                    $el.data("current-time", currentTime);
                }
                this._properties.map($.proxy(function(prop) {
                    var defaultProp = 0;
                    var to = data[prop];
                    if (to == undefined) return;
                    if(prop=="scale" || prop=="scaleX" || prop=="scaleY" || prop=="scaleZ" ) {
                        defaultProp = 1;
                    }
                    else {
                        to = to | 0;
                    }
                    var prev = $el.data("_" + prop);
                    if (prev == undefined) prev = defaultProp;
                    var next = ((to-defaultProp) * ((scrollCurrent - scrollFrom) / (scrollTo - scrollFrom))) + defaultProp;
                    var val = prev + (next - prev) / smoothness;
                    if(easing && currentTime>0 && currentTime<=totalTime) {
                        var from = defaultProp;
                        if($el.data("sens") == "back") {
                            from = to;
                            to = -to;
                            easing = easingReturn;
                            totalTime = totalTimeReturn;
                        }
                        val = $.easing[easing](null, currentTime, from, to, totalTime);
                    }
                    val = Math.ceil(val * this.round) / this.round;
                    if(val==prev&&next==to) val = to;
                    if(!properties[prop]) properties[prop] = 0;
                    properties[prop] += val;
                    if (prev != properties[prop]) {
                        $el.data("_" + prop, properties[prop]);
                        applyProperties = true;
                    }
                }, this));
            }
            if (applyProperties) {
                if (properties["z"] != undefined) {
                    var perspective = data["perspective"];
                    if (perspective == undefined) perspective = 800;
                    var $parent = $el.parent();
                    if(!$parent.data("style")) $parent.data("style", $parent.attr("style") || "");
                    $parent.attr("style", "perspective:" + perspective + "px; -webkit-perspective:" + perspective + "px; "+ $parent.data("style"));
                }
                if(properties["scaleX"] == undefined) properties["scaleX"] = 1;
                if(properties["scaleY"] == undefined) properties["scaleY"] = 1;
                if(properties["scaleZ"] == undefined) properties["scaleZ"] = 1;
                if (properties["scale"] != undefined) {
                    properties["scaleX"] *= properties["scale"];
                    properties["scaleY"] *= properties["scale"];
                    properties["scaleZ"] *= properties["scale"];
                }
                var translate3d = "translate3d(" + (properties["x"] ? properties["x"] : 0) + "px, " + (properties["y"] ? properties["y"] : 0) + "px, " + (properties["z"] ? properties["z"] : 0) + "px)";
                var rotate3d = "rotateX(" + (properties["rotateX"] ? properties["rotateX"] : 0) + "deg) rotateY(" + (properties["rotateY"] ? properties["rotateY"] : 0) + "deg) rotateZ(" + (properties["rotateZ"] ? properties["rotateZ"] : 0) + "deg)";
                var scale3d = "scaleX(" + properties["scaleX"] + ") scaleY(" + properties["scaleY"] + ") scaleZ(" + properties["scaleZ"] + ")";
                var cssTransform = translate3d + " " + rotate3d + " " + scale3d + ";";
                this._log(cssTransform);
                $el.attr("style", "transform:" + cssTransform + " -webkit-transform:" + cssTransform + " " + style);
            }
        }, this));
        if(window.requestAnimationFrame) {
            window.requestAnimationFrame($.proxy(this._onScroll, this, false));
        }
        else {
            this._requestAnimationFrame($.proxy(this._onScroll, this, false));
        }
    }
};
/*! jQuery ResponsiveIframe - v0.0.3 - 2013-09-05
* https://github.com/npr/responsiveiframe
* Copyright (c) 2013 Irakli Nadareishvili; Licensed MIT, GPL */
if (typeof jQuery !== 'undefined') {
  (function( $ ){
    var settings = {
      xdomain: '*',
      ie : navigator.userAgent.toLowerCase().indexOf('msie') > -1,
      scrollToTop: true
    };

    var methods = {
      // initialization for the parent, the one housing this
      init: function() {
        return this.each(function(self){
          var $this = $(this);

          if (window.postMessage) {
            if (window.addEventListener) {
              window.addEventListener('message', function(e) {
                privateMethods.messageHandler($this,e);
              } , false);
            } else if (window.attachEvent) {
              window.attachEvent('onmessage', function(e) {
                privateMethods.messageHandler($this,e);
              }, $this);
            }
          } else {
            setInterval(function () {
              var hash = window.location.hash, matches = hash.match(/^#h(\d+)(s?)$/);
              if (matches) {
                privateMethods.setHeight($this, matches[1]);
                if (settings.scrollToTop && matches[2] === 's'){
                  scroll(0,0);
                }
              }
            }, 150);
          }
        });
      }
    };

    var privateMethods = {
      messageHandler: function (elem, e) {
        var height,
          r,
          matches,
          strD;

        if (settings.xdomain !== '*') {
          var regex = new RegExp(settings.xdomain + '$');
          if(e.origin == "null"){
            throw new Error("messageHandler( elem, e): There is no origin.  You are viewing the page from your file system.  Please run through a web server.");
          }
          if(e.origin.match(regex)){
            matches = true;
          }else{
            throw new Error("messageHandler( elem, e): The orgin doesn't match the responsiveiframe  xdomain.");
          }

        }

        if(settings.xdomain === '*' || matches ) {
          strD = e.data + "";
          r = strD.match(/^(\d+)(s?)$/);
          if(r && r.length === 3){
            height = parseInt(r[1], 10);
            if (!isNaN(height)) {
              try {
                privateMethods.setHeight(elem, height);
              } catch (ex) {}
            }
            if (settings.scrollToTop && r[2] === "s"){
              scroll(0,0);
            }
          }
        }
      },

      // Sets the height of the iframe
      setHeight : function (elem, height) {
        elem.css('height', height + 'px');
      },
      getDocHeight: function () {
        var D = document;
        return Math.min(
          Math.max(D.body.scrollHeight, D.documentElement.scrollHeight),
          Math.max(D.body.offsetHeight, D.documentElement.offsetHeight),
          Math.max(D.body.clientHeight, D.documentElement.clientHeight)
        );
      }
    };

    $.fn.responsiveIframe = function( method ) {
      if ( methods[method] ) {
        return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
      } else if ( typeof method === 'object' || ! method ) {
        $.extend(settings, arguments[0]);
        return methods.init.apply( this );
      } else {
        $.error( 'Method ' +  method + ' does not exist on jQuery.responsiveIframe' );
      }
    };
  }( jQuery ));
}

;(function(){
  var self,
      module,
      ResponsiveIframe = function () {self = this;};

  ResponsiveIframe.prototype.allowResponsiveEmbedding = function() {
    if (window.addEventListener) {
      window.addEventListener("load", self.messageParent, false);
      window.addEventListener("resize", self.messageParent, false);
    } else if (window.attachEvent) {
      window.attachEvent("onload", self.messageParent);
      window.attachEvent("onresize", self.messageParent);
    }
  };

  ResponsiveIframe.prototype.messageParent = function(scrollTop) {
    var h = document.body.offsetHeight;
    h = (scrollTop)? h+'s':h;
    if(top.postMessage){
      top.postMessage( h , '*');
    } else {
      window.location.hash = 'h'+h;
    }
  };

  function responsiveIframe() {
    return new ResponsiveIframe();
  }

  // expose
  if ('undefined' === typeof exports) {
    window.responsiveIframe = responsiveIframe;
  } else {
    module.exports.responsiveIframe = responsiveIframe;
  }
}());

/*!
 * jQuery Smooth Scroll - v2.2.0 - 2017-05-05
 * https://github.com/kswedberg/jquery-smooth-scroll
 * Copyright (c) 2017 Karl Swedberg
 * Licensed MIT
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS
    factory(require('jquery'));
  } else {
    // Browser globals
    factory(jQuery);
  }
}(function($) {

  var version = '2.2.0';
  var optionOverrides = {};
  var defaults = {
    exclude: [],
    excludeWithin: [],
    offset: 0,

    // one of 'top' or 'left'
    direction: 'top',

    // if set, bind click events through delegation
    //  supported since jQuery 1.4.2
    delegateSelector: null,

    // jQuery set of elements you wish to scroll (for $.smoothScroll).
    //  if null (default), $('html, body').firstScrollable() is used.
    scrollElement: null,

    // only use if you want to override default behavior
    scrollTarget: null,

    // automatically focus the target element after scrolling to it
    autoFocus: false,

    // fn(opts) function to be called before scrolling occurs.
    // `this` is the element(s) being scrolled
    beforeScroll: function() {},

    // fn(opts) function to be called after scrolling occurs.
    // `this` is the triggering element
    afterScroll: function() {},

    // easing name. jQuery comes with "swing" and "linear." For others, you'll need an easing plugin
    // from jQuery UI or elsewhere
    easing: 'swing',

    // speed can be a number or 'auto'
    // if 'auto', the speed will be calculated based on the formula:
    // (current scroll position - target scroll position) / autoCoeffic
    speed: 400,

    // coefficient for "auto" speed
    autoCoefficient: 2,

    // $.fn.smoothScroll only: whether to prevent the default click action
    preventDefault: true
  };

  var getScrollable = function(opts) {
    var scrollable = [];
    var scrolled = false;
    var dir = opts.dir && opts.dir === 'left' ? 'scrollLeft' : 'scrollTop';

    this.each(function() {
      var el = $(this);

      if (this === document || this === window) {
        return;
      }

      if (document.scrollingElement && (this === document.documentElement || this === document.body)) {
        scrollable.push(document.scrollingElement);

        return false;
      }

      if (el[dir]() > 0) {
        scrollable.push(this);
      } else {
        // if scroll(Top|Left) === 0, nudge the element 1px and see if it moves
        el[dir](1);
        scrolled = el[dir]() > 0;

        if (scrolled) {
          scrollable.push(this);
        }
        // then put it back, of course
        el[dir](0);
      }
    });

    if (!scrollable.length) {
      this.each(function() {
        // If no scrollable elements and <html> has scroll-behavior:smooth because
        // "When this property is specified on the root element, it applies to the viewport instead."
        // and "The scroll-behavior property of the … body element is *not* propagated to the viewport."
        // → https://drafts.csswg.org/cssom-view/#propdef-scroll-behavior
        if (this === document.documentElement && $(this).css('scrollBehavior') === 'smooth') {
          scrollable = [this];
        }

        // If still no scrollable elements, fall back to <body>,
        // if it's in the jQuery collection
        // (doing this because Safari sets scrollTop async,
        // so can't set it to 1 and immediately get the value.)
        if (!scrollable.length && this.nodeName === 'BODY') {
          scrollable = [this];
        }
      });
    }

    // Use the first scrollable element if we're calling firstScrollable()
    if (opts.el === 'first' && scrollable.length > 1) {
      scrollable = [scrollable[0]];
    }

    return scrollable;
  };

  var rRelative = /^([\-\+]=)(\d+)/;

  $.fn.extend({
    scrollable: function(dir) {
      var scrl = getScrollable.call(this, {dir: dir});

      return this.pushStack(scrl);
    },
    firstScrollable: function(dir) {
      var scrl = getScrollable.call(this, {el: 'first', dir: dir});

      return this.pushStack(scrl);
    },

    smoothScroll: function(options, extra) {
      options = options || {};

      if (options === 'options') {
        if (!extra) {
          return this.first().data('ssOpts');
        }

        return this.each(function() {
          var $this = $(this);
          var opts = $.extend($this.data('ssOpts') || {}, extra);

          $(this).data('ssOpts', opts);
        });
      }

      var opts = $.extend({}, $.fn.smoothScroll.defaults, options);

      var clickHandler = function(event) {
        var escapeSelector = function(str) {
          return str.replace(/(:|\.|\/)/g, '\\$1');
        };

        var link = this;
        var $link = $(this);
        var thisOpts = $.extend({}, opts, $link.data('ssOpts') || {});
        var exclude = opts.exclude;
        var excludeWithin = thisOpts.excludeWithin;
        var elCounter = 0;
        var ewlCounter = 0;
        var include = true;
        var clickOpts = {};
        var locationPath = $.smoothScroll.filterPath(location.pathname);
        var linkPath = $.smoothScroll.filterPath(link.pathname);
        var hostMatch = location.hostname === link.hostname || !link.hostname;
        var pathMatch = thisOpts.scrollTarget || (linkPath === locationPath);
        var thisHash = escapeSelector(link.hash);

        if (thisHash && !$(thisHash).length) {
          include = false;
        }

        if (!thisOpts.scrollTarget && (!hostMatch || !pathMatch || !thisHash)) {
          include = false;
        } else {
          while (include && elCounter < exclude.length) {
            if ($link.is(escapeSelector(exclude[elCounter++]))) {
              include = false;
            }
          }

          while (include && ewlCounter < excludeWithin.length) {
            if ($link.closest(excludeWithin[ewlCounter++]).length) {
              include = false;
            }
          }
        }

        if (include) {
          if (thisOpts.preventDefault) {
            event.preventDefault();
          }

          $.extend(clickOpts, thisOpts, {
            scrollTarget: thisOpts.scrollTarget || thisHash,
            link: link
          });

          $.smoothScroll(clickOpts);
        }
      };

      if (options.delegateSelector !== null) {
        this
        .off('click.smoothscroll', options.delegateSelector)
        .on('click.smoothscroll', options.delegateSelector, clickHandler);
      } else {
        this
        .off('click.smoothscroll')
        .on('click.smoothscroll', clickHandler);
      }

      return this;
    }
  });

  var getExplicitOffset = function(val) {
    var explicit = {relative: ''};
    var parts = typeof val === 'string' && rRelative.exec(val);

    if (typeof val === 'number') {
      explicit.px = val;
    } else if (parts) {
      explicit.relative = parts[1];
      explicit.px = parseFloat(parts[2]) || 0;
    }

    return explicit;
  };

  var onAfterScroll = function(opts) {
    var $tgt = $(opts.scrollTarget);

    if (opts.autoFocus && $tgt.length) {
      $tgt[0].focus();

      if (!$tgt.is(document.activeElement)) {
        $tgt.prop({tabIndex: -1});
        $tgt[0].focus();
      }
    }

    opts.afterScroll.call(opts.link, opts);
  };

  $.smoothScroll = function(options, px) {
    if (options === 'options' && typeof px === 'object') {
      return $.extend(optionOverrides, px);
    }
    var opts, $scroller, speed, delta;
    var explicitOffset = getExplicitOffset(options);
    var scrollTargetOffset = {};
    var scrollerOffset = 0;
    var offPos = 'offset';
    var scrollDir = 'scrollTop';
    var aniProps = {};
    var aniOpts = {};

    if (explicitOffset.px) {
      opts = $.extend({link: null}, $.fn.smoothScroll.defaults, optionOverrides);
    } else {
      opts = $.extend({link: null}, $.fn.smoothScroll.defaults, options || {}, optionOverrides);

      if (opts.scrollElement) {
        offPos = 'position';

        if (opts.scrollElement.css('position') === 'static') {
          opts.scrollElement.css('position', 'relative');
        }
      }

      if (px) {
        explicitOffset = getExplicitOffset(px);
      }
    }

    scrollDir = opts.direction === 'left' ? 'scrollLeft' : scrollDir;

    if (opts.scrollElement) {
      $scroller = opts.scrollElement;

      if (!explicitOffset.px && !(/^(?:HTML|BODY)$/).test($scroller[0].nodeName)) {
        scrollerOffset = $scroller[scrollDir]();
      }
    } else {
      $scroller = $('html, body').firstScrollable(opts.direction);
    }

    // beforeScroll callback function must fire before calculating offset
    opts.beforeScroll.call($scroller, opts);

    scrollTargetOffset = explicitOffset.px ? explicitOffset : {
      relative: '',
      px: ($(opts.scrollTarget)[offPos]() && $(opts.scrollTarget)[offPos]()[opts.direction]) || 0
    };

    aniProps[scrollDir] = scrollTargetOffset.relative + (scrollTargetOffset.px + scrollerOffset + opts.offset);

    speed = opts.speed;

    // automatically calculate the speed of the scroll based on distance / coefficient
    if (speed === 'auto') {

      // $scroller[scrollDir]() is position before scroll, aniProps[scrollDir] is position after
      // When delta is greater, speed will be greater.
      delta = Math.abs(aniProps[scrollDir] - $scroller[scrollDir]());

      // Divide the delta by the coefficient
      speed = delta / opts.autoCoefficient;
    }

    aniOpts = {
      duration: speed,
      easing: opts.easing,
      complete: function() {
        onAfterScroll(opts);
      }
    };

    if (opts.step) {
      aniOpts.step = opts.step;
    }

    if ($scroller.length) {
      $scroller.stop().animate(aniProps, aniOpts);
    } else {
      onAfterScroll(opts);
    }
  };

  $.smoothScroll.version = version;
  $.smoothScroll.filterPath = function(string) {
    string = string || '';

    return string
      .replace(/^\//, '')
      .replace(/(?:index|default).[a-zA-Z]{3,4}$/, '')
      .replace(/\/$/, '');
  };

  // default options
  $.fn.smoothScroll.defaults = defaults;

}));


/*
 *  Vide - v0.5.1
 *  Easy as hell jQuery plugin for video backgrounds.
 *  http://vodkabears.github.io/vide/
 *
 *  Made by Ilya Makarov
 *  Under MIT License
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):b("object"==typeof exports?require("jquery"):a.jQuery)}(this,function(a){"use strict";function b(a){var b,c,d,e,f,g,h,i={};for(f=a.replace(/\s*:\s*/g,":").replace(/\s*,\s*/g,",").split(","),h=0,g=f.length;h<g&&(c=f[h],c.search(/^(http|https|ftp):\/\//)===-1&&c.search(":")!==-1);h++)b=c.indexOf(":"),d=c.substring(0,b),e=c.substring(b+1),e||(e=void 0),"string"==typeof e&&(e="true"===e||"false"!==e&&e),"string"==typeof e&&(e=isNaN(e)?e:+e),i[d]=e;return null==d&&null==e?a:i}function c(a){a=""+a;var b,c,d,e=a.split(/\s+/),f="50%",g="50%";for(d=0,b=e.length;d<b;d++)c=e[d],"left"===c?f="0%":"right"===c?f="100%":"top"===c?g="0%":"bottom"===c?g="100%":"center"===c?0===d?f="50%":g="50%":0===d?f=c:g=c;return{x:f,y:g}}function d(b,c){var d=function(){c(this.src)};a('<img src="'+b+'.gif">').on("load",d),a('<img src="'+b+'.jpg">').on("load",d),a('<img src="'+b+'.jpeg">').on("load",d),a('<img src="'+b+'.png">').on("load",d)}function e(c,d,e){if(this.$element=a(c),"string"==typeof d&&(d=b(d)),e?"string"==typeof e&&(e=b(e)):e={},"string"==typeof d)d=d.replace(/\.\w*$/,"");else if("object"==typeof d)for(var f in d)d.hasOwnProperty(f)&&(d[f]=d[f].replace(/\.\w*$/,""));this.settings=a.extend({},g,e),this.path=d;try{this.init()}catch(i){if(i.message!==h)throw i}}var f="vide",g={volume:1,playbackRate:1,muted:!0,loop:!0,autoplay:!0,position:"50% 50%",posterType:"detect",resizing:!0,bgColor:"transparent",className:""},h="Not implemented";e.prototype.init=function(){var b,e,f=this,g=f.path,i=g,j="",k=f.$element,l=f.settings,m=c(l.position),n=l.posterType;e=f.$wrapper=a("<div>").addClass(l.className).css({position:"absolute","z-index":-1,top:0,left:0,bottom:0,right:0,overflow:"hidden","-webkit-background-size":"cover","-moz-background-size":"cover","-o-background-size":"cover","background-size":"cover","background-color":l.bgColor,"background-repeat":"no-repeat","background-position":m.x+" "+m.y}),"object"==typeof g&&(g.poster?i=g.poster:g.mp4?i=g.mp4:g.webm?i=g.webm:g.ogv&&(i=g.ogv)),"detect"===n?d(i,function(a){e.css("background-image","url("+a+")")}):"none"!==n&&e.css("background-image","url("+i+"."+n+")"),"static"===k.css("position")&&k.css("position","relative"),k.prepend(e),"object"==typeof g?(g.mp4&&(j+='<source src="'+g.mp4+'.mp4" type="video/mp4">'),g.webm&&(j+='<source src="'+g.webm+'.webm" type="video/webm">'),g.ogv&&(j+='<source src="'+g.ogv+'.ogv" type="video/ogg">'),b=f.$video=a("<video>"+j+"</video>")):b=f.$video=a('<video><source src="'+g+'.mp4" type="video/mp4"><source src="'+g+'.webm" type="video/webm"><source src="'+g+'.ogv" type="video/ogg"></video>');try{b.prop({autoplay:l.autoplay,loop:l.loop,volume:l.volume,muted:l.muted,defaultMuted:l.muted,playbackRate:l.playbackRate,defaultPlaybackRate:l.playbackRate})}catch(o){throw new Error(h)}b.css({margin:"auto",position:"absolute","z-index":-1,top:m.y,left:m.x,"-webkit-transform":"translate(-"+m.x+", -"+m.y+")","-ms-transform":"translate(-"+m.x+", -"+m.y+")","-moz-transform":"translate(-"+m.x+", -"+m.y+")",transform:"translate(-"+m.x+", -"+m.y+")",visibility:"hidden",opacity:0}).one("canplaythrough.vide",function(){f.resize()}).one("playing.vide",function(){b.css({visibility:"visible",opacity:1}),e.css("background-image","none")}),k.on("resize.vide",function(){l.resizing&&f.resize()}),e.append(b)},e.prototype.getVideoObject=function(){return this.$video[0]},e.prototype.resize=function(){if(this.$video){var a=this.$wrapper,b=this.$video,c=b[0],d=c.videoHeight,e=c.videoWidth,f=a.height(),g=a.width();g/e>f/d?b.css({width:g+2,height:"auto"}):b.css({width:"auto",height:f+2})}},e.prototype.destroy=function(){delete a[f].lookup[this.index],this.$video&&this.$video.off(f),this.$element.off(f).removeData(f),this.$wrapper.remove()},a[f]={lookup:[]},a.fn[f]=function(b,c){var d;return this.each(function(){d=a.data(this,f),d&&d.destroy(),d=new e(this,b,c),d.index=a[f].lookup.push(d)-1,a.data(this,f,d)}),this},a(document).ready(function(){var b=a(window);b.on("resize.vide",function(){for(var b,c=a[f].lookup.length,d=0;d<c;d++)b=a[f].lookup[d],b&&b.settings.resizing&&b.resize()}),b.on("unload.vide",function(){return!1}),a(document).find("[data-vide-bg]").each(function(b,c){var d=a(c),e=d.data("vide-options"),g=d.data("vide-bg");d[f](g,e)})})});
/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
(function ($) {
	var defaults = {
		url: false,
		callback: false,
		target: false,
		duration: 120,
		on: 'mouseover', // other options: grab, click, toggle
		touch: true, // enables a touch fallback
		onZoomIn: false,
		onZoomOut: false,
		magnify: 1
	};

	// Core Zoom Logic, independent of event listeners.
	$.zoom = function(target, source, img, magnify) {
		var targetHeight,
			targetWidth,
			sourceHeight,
			sourceWidth,
			xRatio,
			yRatio,
			offset,
			$target = $(target),
			position = $target.css('position'),
			$source = $(source);

		// The parent element needs positioning so that the zoomed element can be correctly positioned within.
		target.style.position = /(absolute|fixed)/.test(position) ? position : 'relative';
		target.style.overflow = 'hidden';
		img.style.width = img.style.height = '';

		$(img)
			.addClass('zoomImg')
			.css({
				position: 'absolute',
				top: 0,
				left: 0,
				opacity: 0,
				width: img.width * magnify,
				height: img.height * magnify,
				border: 'none',
				maxWidth: 'none',
				maxHeight: 'none'
			})
			.appendTo(target);

		return {
			init: function() {
				targetWidth = $target.outerWidth();
				targetHeight = $target.outerHeight();

				if (source === target) {
					sourceWidth = targetWidth;
					sourceHeight = targetHeight;
				} else {
					sourceWidth = $source.outerWidth();
					sourceHeight = $source.outerHeight();
				}

				xRatio = (img.width - targetWidth) / sourceWidth;
				yRatio = (img.height - targetHeight) / sourceHeight;

				offset = $source.offset();
			},
			move: function (e) {
				var left = (e.pageX - offset.left),
					top = (e.pageY - offset.top);

				top = Math.max(Math.min(top, sourceHeight), 0);
				left = Math.max(Math.min(left, sourceWidth), 0);

				img.style.left = (left * -xRatio) + 'px';
				img.style.top = (top * -yRatio) + 'px';
			}
		};
	};

	$.fn.zoom = function (options) {
		return this.each(function () {
			var
			settings = $.extend({}, defaults, options || {}),
			//target will display the zoomed image
			target = settings.target && $(settings.target)[0] || this,
			//source will provide zoom location info (thumbnail)
			source = this,
			$source = $(source),
			img = document.createElement('img'),
			$img = $(img),
			mousemove = 'mousemove.zoom',
			clicked = false,
			touched = false;

			// If a url wasn't specified, look for an image element.
			if (!settings.url) {
				var srcElement = source.querySelector('img');
				if (srcElement) {
					settings.url = srcElement.getAttribute('data-src') || srcElement.currentSrc || srcElement.src;
				}
				if (!settings.url) {
					return;
				}
			}

			$source.one('zoom.destroy', function(position, overflow){
				$source.off(".zoom");
				target.style.position = position;
				target.style.overflow = overflow;
				img.onload = null;
				$img.remove();
			}.bind(this, target.style.position, target.style.overflow));

			img.onload = function () {
				var zoom = $.zoom(target, source, img, settings.magnify);

				function start(e) {
					zoom.init();
					zoom.move(e);

					// Skip the fade-in for IE8 and lower since it chokes on fading-in
					// and changing position based on mousemovement at the same time.
					$img.stop()
					.fadeTo($.support.opacity ? settings.duration : 0, 1, $.isFunction(settings.onZoomIn) ? settings.onZoomIn.call(img) : false);
				}

				function stop() {
					$img.stop()
					.fadeTo(settings.duration, 0, $.isFunction(settings.onZoomOut) ? settings.onZoomOut.call(img) : false);
				}

				// Mouse events
				if (settings.on === 'grab') {
					$source
						.on('mousedown.zoom',
							function (e) {
								if (e.which === 1) {
									$(document).one('mouseup.zoom',
										function () {
											stop();

											$(document).off(mousemove, zoom.move);
										}
									);

									start(e);

									$(document).on(mousemove, zoom.move);

									e.preventDefault();
								}
							}
						);
				} else if (settings.on === 'click') {
					$source.on('click.zoom',
						function (e) {
							if (clicked) {
								// bubble the event up to the document to trigger the unbind.
								return;
							} else {
								clicked = true;
								start(e);
								$(document).on(mousemove, zoom.move);
								$(document).one('click.zoom',
									function () {
										stop();
										clicked = false;
										$(document).off(mousemove, zoom.move);
									}
								);
								return false;
							}
						}
					);
				} else if (settings.on === 'toggle') {
					$source.on('click.zoom',
						function (e) {
							if (clicked) {
								stop();
							} else {
								start(e);
							}
							clicked = !clicked;
						}
					);
				} else if (settings.on === 'mouseover') {
					zoom.init(); // Preemptively call init because IE7 will fire the mousemove handler before the hover handler.

					$source
						.on('mouseenter.zoom', start)
						.on('mouseleave.zoom', stop)
						.on(mousemove, zoom.move);
				}

				// Touch fallback
				if (settings.touch) {
					$source
						.on('touchstart.zoom', function (e) {
							e.preventDefault();
							if (touched) {
								touched = false;
								stop();
							} else {
								touched = true;
								start( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
							}
						})
						.on('touchmove.zoom', function (e) {
							e.preventDefault();
							zoom.move( e.originalEvent.touches[0] || e.originalEvent.changedTouches[0] );
						})
						.on('touchend.zoom', function (e) {
							e.preventDefault();
							if (touched) {
								touched = false;
								stop();
							}
						});
				}
				
				if ($.isFunction(settings.callback)) {
					settings.callback.call(img);
				}
			};

			img.setAttribute('role', 'presentation');
			img.alt = '';
			img.src = settings.url;
		});
	};

	$.fn.zoom.defaults = defaults;
}(window.jQuery));

/*! lightgallery - v1.6.5 - 2017-11-16
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
/*! lightgallery - v1.6.5 - 2017-11-16
* http://sachinchoolur.github.io/lightGallery/
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(root["jQuery"]);
  }
}(this, function ($) {

(function() {
    'use strict';

    var defaults = {

        mode: 'lg-slide',

        // Ex : 'ease'
        cssEasing: 'ease',

        //'for jquery animation'
        easing: 'linear',
        speed: 600,
        height: '100%',
        width: '100%',
        addClass: '',
        startClass: 'lg-start-zoom',
        backdropDuration: 150,
        hideBarsDelay: 6000,

        useLeft: false,

        closable: true,
        loop: true,
        escKey: true,
        keyPress: true,
        controls: true,
        slideEndAnimatoin: true,
        hideControlOnEnd: false,
        mousewheel: true,

        getCaptionFromTitleOrAlt: true,

        // .lg-item || '.lg-sub-html'
        appendSubHtmlTo: '.lg-sub-html',

        subHtmlSelectorRelative: false,

        /**
         * @desc number of preload slides
         * will exicute only after the current slide is fully loaded.
         *
         * @ex you clicked on 4th image and if preload = 1 then 3rd slide and 5th
         * slide will be loaded in the background after the 4th slide is fully loaded..
         * if preload is 2 then 2nd 3rd 5th 6th slides will be preloaded.. ... ...
         *
         */
        preload: 1,
        showAfterLoad: true,
        selector: '',
        selectWithin: '',
        nextHtml: '',
        prevHtml: '',

        // 0, 1
        index: false,

        iframeMaxWidth: '100%',

        download: true,
        counter: true,
        appendCounterTo: '.lg-toolbar',

        swipeThreshold: 50,
        enableSwipe: true,
        enableDrag: true,

        dynamic: false,
        dynamicEl: [],
        galleryId: 1
    };

    function Plugin(element, options) {

        // Current lightGallery element
        this.el = element;

        // Current jquery element
        this.$el = $(element);

        // lightGallery settings
        this.s = $.extend({}, defaults, options);

        // When using dynamic mode, ensure dynamicEl is an array
        if (this.s.dynamic && this.s.dynamicEl !== 'undefined' && this.s.dynamicEl.constructor === Array && !this.s.dynamicEl.length) {
            throw ('When using dynamic mode, you must also define dynamicEl as an Array.');
        }

        // lightGallery modules
        this.modules = {};

        // false when lightgallery complete first slide;
        this.lGalleryOn = false;

        this.lgBusy = false;

        // Timeout function for hiding controls;
        this.hideBartimeout = false;

        // To determine browser supports for touch events;
        this.isTouch = ('ontouchstart' in document.documentElement);

        // Disable hideControlOnEnd if sildeEndAnimation is true
        if (this.s.slideEndAnimatoin) {
            this.s.hideControlOnEnd = false;
        }

        // Gallery items
        if (this.s.dynamic) {
            this.$items = this.s.dynamicEl;
        } else {
            if (this.s.selector === 'this') {
                this.$items = this.$el;
            } else if (this.s.selector !== '') {
                if (this.s.selectWithin) {
                    this.$items = $(this.s.selectWithin).find(this.s.selector);
                } else {
                    this.$items = this.$el.find($(this.s.selector));
                }
            } else {
                this.$items = this.$el.children();
            }
        }

        // .lg-item
        this.$slide = '';

        // .lg-outer
        this.$outer = '';

        this.init();

        return this;
    }

    Plugin.prototype.init = function() {

        var _this = this;

        // s.preload should not be more than $item.length
        if (_this.s.preload > _this.$items.length) {
            _this.s.preload = _this.$items.length;
        }

        // if dynamic option is enabled execute immediately
        var _hash = window.location.hash;
        if (_hash.indexOf('lg=' + this.s.galleryId) > 0) {

            _this.index = parseInt(_hash.split('&slide=')[1], 10);

            $('body').addClass('lg-from-hash');
            if (!$('body').hasClass('lg-on')) {
                setTimeout(function() {
                    _this.build(_this.index);
                });

                $('body').addClass('lg-on');
            }
        }

        if (_this.s.dynamic) {

            _this.$el.trigger('onBeforeOpen.lg');

            _this.index = _this.s.index || 0;

            // prevent accidental double execution
            if (!$('body').hasClass('lg-on')) {
                setTimeout(function() {
                    _this.build(_this.index);
                    $('body').addClass('lg-on');
                });
            }
        } else {

            // Using different namespace for click because click event should not unbind if selector is same object('this')
            _this.$items.on('click.lgcustom', function(event) {

                // For IE8
                try {
                    event.preventDefault();
                    event.preventDefault();
                } catch (er) {
                    event.returnValue = false;
                }

                _this.$el.trigger('onBeforeOpen.lg');

                _this.index = _this.s.index || _this.$items.index(this);

                // prevent accidental double execution
                if (!$('body').hasClass('lg-on')) {
                    _this.build(_this.index);
                    $('body').addClass('lg-on');
                }
            });
        }

    };

    Plugin.prototype.build = function(index) {

        var _this = this;

        _this.structure();

        // module constructor
        $.each($.fn.lightGallery.modules, function(key) {
            _this.modules[key] = new $.fn.lightGallery.modules[key](_this.el);
        });

        // initiate slide function
        _this.slide(index, false, false, false);

        if (_this.s.keyPress) {
            _this.keyPress();
        }

        if (_this.$items.length > 1) {

            _this.arrow();

            setTimeout(function() {
                _this.enableDrag();
                _this.enableSwipe();
            }, 50);

            if (_this.s.mousewheel) {
                _this.mousewheel();
            }
        } else {
            _this.$slide.on('click.lg', function() {
                _this.$el.trigger('onSlideClick.lg');
            });
        }

        _this.counter();

        _this.closeGallery();

        _this.$el.trigger('onAfterOpen.lg');

        // Hide controllers if mouse doesn't move for some period
        _this.$outer.on('mousemove.lg click.lg touchstart.lg', function() {

            _this.$outer.removeClass('lg-hide-items');

            clearTimeout(_this.hideBartimeout);

            // Timeout will be cleared on each slide movement also
            _this.hideBartimeout = setTimeout(function() {
                _this.$outer.addClass('lg-hide-items');
            }, _this.s.hideBarsDelay);

        });

        _this.$outer.trigger('mousemove.lg');

    };

    Plugin.prototype.structure = function() {
        var list = '';
        var controls = '';
        var i = 0;
        var subHtmlCont = '';
        var template;
        var _this = this;

        $('body').append('<div class="lg-backdrop"></div>');
        $('.lg-backdrop').css('transition-duration', this.s.backdropDuration + 'ms');

        // Create gallery items
        for (i = 0; i < this.$items.length; i++) {
            list += '<div class="lg-item"></div>';
        }

        // Create controlls
        if (this.s.controls && this.$items.length > 1) {
            controls = '<div class="lg-actions">' +
                '<button class="lg-prev lg-icon">' + this.s.prevHtml + '</button>' +
                '<button class="lg-next lg-icon">' + this.s.nextHtml + '</button>' +
                '</div>';
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {
            subHtmlCont = '<div class="lg-sub-html"></div>';
        }

        template = '<div class="lg-outer ' + this.s.addClass + ' ' + this.s.startClass + '">' +
            '<div class="lg" style="width:' + this.s.width + '; height:' + this.s.height + '">' +
            '<div class="lg-inner">' + list + '</div>' +
            '<div class="lg-toolbar lg-group">' +
            '<span class="lg-close lg-icon"></span>' +
            '</div>' +
            controls +
            subHtmlCont +
            '</div>' +
            '</div>';

        $('body').append(template);
        this.$outer = $('.lg-outer');
        this.$slide = this.$outer.find('.lg-item');

        if (this.s.useLeft) {
            this.$outer.addClass('lg-use-left');

            // Set mode lg-slide if use left is true;
            this.s.mode = 'lg-slide';
        } else {
            this.$outer.addClass('lg-use-css3');
        }

        // For fixed height gallery
        _this.setTop();
        $(window).on('resize.lg orientationchange.lg', function() {
            setTimeout(function() {
                _this.setTop();
            }, 100);
        });

        // add class lg-current to remove initial transition
        this.$slide.eq(this.index).addClass('lg-current');

        // add Class for css support and transition mode
        if (this.doCss()) {
            this.$outer.addClass('lg-css3');
        } else {
            this.$outer.addClass('lg-css');

            // Set speed 0 because no animation will happen if browser doesn't support css3
            this.s.speed = 0;
        }

        this.$outer.addClass(this.s.mode);

        if (this.s.enableDrag && this.$items.length > 1) {
            this.$outer.addClass('lg-grab');
        }

        if (this.s.showAfterLoad) {
            this.$outer.addClass('lg-show-after-load');
        }

        if (this.doCss()) {
            var $inner = this.$outer.find('.lg-inner');
            $inner.css('transition-timing-function', this.s.cssEasing);
            $inner.css('transition-duration', this.s.speed + 'ms');
        }

        setTimeout(function() {
            $('.lg-backdrop').addClass('in');
        });

        setTimeout(function() {
            _this.$outer.addClass('lg-visible');
        }, this.s.backdropDuration);

        if (this.s.download) {
            this.$outer.find('.lg-toolbar').append('<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>');
        }

        // Store the current scroll top value to scroll back after closing the gallery..
        this.prevScrollTop = $(window).scrollTop();

    };

    // For fixed height gallery
    Plugin.prototype.setTop = function() {
        if (this.s.height !== '100%') {
            var wH = $(window).height();
            var top = (wH - parseInt(this.s.height, 10)) / 2;
            var $lGallery = this.$outer.find('.lg');
            if (wH >= parseInt(this.s.height, 10)) {
                $lGallery.css('top', top + 'px');
            } else {
                $lGallery.css('top', '0px');
            }
        }
    };

    // Find css3 support
    Plugin.prototype.doCss = function() {
        // check for css animation support
        var support = function() {
            var transition = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'];
            var root = document.documentElement;
            var i = 0;
            for (i = 0; i < transition.length; i++) {
                if (transition[i] in root.style) {
                    return true;
                }
            }
        };

        if (support()) {
            return true;
        }

        return false;
    };

    /**
     *  @desc Check the given src is video
     *  @param {String} src
     *  @return {Object} video type
     *  Ex:{ youtube  :  ["//www.youtube.com/watch?v=c0asJgSyxcY", "c0asJgSyxcY"] }
     */
    Plugin.prototype.isVideo = function(src, index) {

        var html;
        if (this.s.dynamic) {
            html = this.s.dynamicEl[index].html;
        } else {
            html = this.$items.eq(index).attr('data-html');
        }

        if (!src) {
            if(html) {
                return {
                    html5: true
                };
            } else {
                console.error('lightGallery :- data-src is not pvovided on slide item ' + (index + 1) + '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html');
                return false;
            }
        }

        var youtube = src.match(/\/\/(?:www\.)?youtu(?:\.be|be\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i);
        var vimeo = src.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i);
        var dailymotion = src.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i);
        var vk = src.match(/\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i);

        if (youtube) {
            return {
                youtube: youtube
            };
        } else if (vimeo) {
            return {
                vimeo: vimeo
            };
        } else if (dailymotion) {
            return {
                dailymotion: dailymotion
            };
        } else if (vk) {
            return {
                vk: vk
            };
        }
    };

    /**
     *  @desc Create image counter
     *  Ex: 1/10
     */
    Plugin.prototype.counter = function() {
        if (this.s.counter) {
            $(this.s.appendCounterTo).append('<div id="lg-counter"><span id="lg-counter-current">' + (parseInt(this.index, 10) + 1) + '</span> / <span id="lg-counter-all">' + this.$items.length + '</span></div>');
        }
    };

    /**
     *  @desc add sub-html into the slide
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.addHtml = function(index) {
        var subHtml = null;
        var subHtmlUrl;
        var $currentEle;
        if (this.s.dynamic) {
            if (this.s.dynamicEl[index].subHtmlUrl) {
                subHtmlUrl = this.s.dynamicEl[index].subHtmlUrl;
            } else {
                subHtml = this.s.dynamicEl[index].subHtml;
            }
        } else {
            $currentEle = this.$items.eq(index);
            if ($currentEle.attr('data-sub-html-url')) {
                subHtmlUrl = $currentEle.attr('data-sub-html-url');
            } else {
                subHtml = $currentEle.attr('data-sub-html');
                if (this.s.getCaptionFromTitleOrAlt && !subHtml) {
                    subHtml = $currentEle.attr('title') || $currentEle.find('img').first().attr('alt');
                }
            }
        }

        if (!subHtmlUrl) {
            if (typeof subHtml !== 'undefined' && subHtml !== null) {

                // get first letter of subhtml
                // if first letter starts with . or # get the html form the jQuery object
                var fL = subHtml.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    if (this.s.subHtmlSelectorRelative && !this.s.dynamic) {
                        subHtml = $currentEle.find(subHtml).html();
                    } else {
                        subHtml = $(subHtml).html();
                    }
                }
            } else {
                subHtml = '';
            }
        }

        if (this.s.appendSubHtmlTo === '.lg-sub-html') {

            if (subHtmlUrl) {
                this.$outer.find(this.s.appendSubHtmlTo).load(subHtmlUrl);
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).html(subHtml);
            }

        } else {

            if (subHtmlUrl) {
                this.$slide.eq(index).load(subHtmlUrl);
            } else {
                this.$slide.eq(index).append(subHtml);
            }
        }

        // Add lg-empty-html class if title doesn't exist
        if (typeof subHtml !== 'undefined' && subHtml !== null) {
            if (subHtml === '') {
                this.$outer.find(this.s.appendSubHtmlTo).addClass('lg-empty-html');
            } else {
                this.$outer.find(this.s.appendSubHtmlTo).removeClass('lg-empty-html');
            }
        }

        this.$el.trigger('onAfterAppendSubHtml.lg', [index]);
    };

    /**
     *  @desc Preload slides
     *  @param {Number} index - index of the slide
     */
    Plugin.prototype.preload = function(index) {
        var i = 1;
        var j = 1;
        for (i = 1; i <= this.s.preload; i++) {
            if (i >= this.$items.length - index) {
                break;
            }

            this.loadContent(index + i, false, 0);
        }

        for (j = 1; j <= this.s.preload; j++) {
            if (index - j < 0) {
                break;
            }

            this.loadContent(index - j, false, 0);
        }
    };

    /**
     *  @desc Load slide content into slide.
     *  @param {Number} index - index of the slide.
     *  @param {Boolean} rec - if true call loadcontent() function again.
     *  @param {Boolean} delay - delay for adding complete class. it is 0 except first time.
     */
    Plugin.prototype.loadContent = function(index, rec, delay) {

        var _this = this;
        var _hasPoster = false;
        var _$img;
        var _src;
        var _poster;
        var _srcset;
        var _sizes;
        var _html;
        var getResponsiveSrc = function(srcItms) {
            var rsWidth = [];
            var rsSrc = [];
            for (var i = 0; i < srcItms.length; i++) {
                var __src = srcItms[i].split(' ');

                // Manage empty space
                if (__src[0] === '') {
                    __src.splice(0, 1);
                }

                rsSrc.push(__src[0]);
                rsWidth.push(__src[1]);
            }

            var wWidth = $(window).width();
            for (var j = 0; j < rsWidth.length; j++) {
                if (parseInt(rsWidth[j], 10) > wWidth) {
                    _src = rsSrc[j];
                    break;
                }
            }
        };

        if (_this.s.dynamic) {

            if (_this.s.dynamicEl[index].poster) {
                _hasPoster = true;
                _poster = _this.s.dynamicEl[index].poster;
            }

            _html = _this.s.dynamicEl[index].html;
            _src = _this.s.dynamicEl[index].src;

            if (_this.s.dynamicEl[index].responsive) {
                var srcDyItms = _this.s.dynamicEl[index].responsive.split(',');
                getResponsiveSrc(srcDyItms);
            }

            _srcset = _this.s.dynamicEl[index].srcset;
            _sizes = _this.s.dynamicEl[index].sizes;

        } else {

            if (_this.$items.eq(index).attr('data-poster')) {
                _hasPoster = true;
                _poster = _this.$items.eq(index).attr('data-poster');
            }

            _html = _this.$items.eq(index).attr('data-html');
            _src = _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src');

            if (_this.$items.eq(index).attr('data-responsive')) {
                var srcItms = _this.$items.eq(index).attr('data-responsive').split(',');
                getResponsiveSrc(srcItms);
            }

            _srcset = _this.$items.eq(index).attr('data-srcset');
            _sizes = _this.$items.eq(index).attr('data-sizes');

        }

        //if (_src || _srcset || _sizes || _poster) {

        var iframe = false;
        if (_this.s.dynamic) {
            if (_this.s.dynamicEl[index].iframe) {
                iframe = true;
            }
        } else {
            if (_this.$items.eq(index).attr('data-iframe') === 'true') {
                iframe = true;
            }
        }

        var _isVideo = _this.isVideo(_src, index);
        if (!_this.$slide.eq(index).hasClass('lg-loaded')) {
            if (iframe) {
                _this.$slide.eq(index).prepend('<div class="lg-video-cont lg-has-iframe" style="max-width:' + _this.s.iframeMaxWidth + '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' + _src + '"  allowfullscreen="true"></iframe></div></div>');
            } else if (_hasPoster) {
                var videoClass = '';
                if (_isVideo && _isVideo.youtube) {
                    videoClass = 'lg-has-youtube';
                } else if (_isVideo && _isVideo.vimeo) {
                    videoClass = 'lg-has-vimeo';
                } else {
                    videoClass = 'lg-has-html5';
                }

                _this.$slide.eq(index).prepend('<div class="lg-video-cont ' + videoClass + ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' + _poster + '" /></div></div>');

            } else if (_isVideo) {
                _this.$slide.eq(index).prepend('<div class="lg-video-cont "><div class="lg-video"></div></div>');
                _this.$el.trigger('hasVideo.lg', [index, _src, _html]);
            } else {
                _this.$slide.eq(index).prepend('<div class="lg-img-wrap"><img class="lg-object lg-image" src="' + _src + '" /></div>');
            }

            _this.$el.trigger('onAferAppendSlide.lg', [index]);

            _$img = _this.$slide.eq(index).find('.lg-object');
            if (_sizes) {
                _$img.attr('sizes', _sizes);
            }

            if (_srcset) {
                _$img.attr('srcset', _srcset);
                try {
                    picturefill({
                        elements: [_$img[0]]
                    });
                } catch (e) {
                    console.warn('lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.');
                }
            }

            if (this.s.appendSubHtmlTo !== '.lg-sub-html') {
                _this.addHtml(index);
            }

            _this.$slide.eq(index).addClass('lg-loaded');
        }

        _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {

            // For first time add some delay for displaying the start animation.
            var _speed = 0;

            // Do not change the delay value because it is required for zoom plugin.
            // If gallery opened from direct url (hash) speed value should be 0
            if (delay && !$('body').hasClass('lg-from-hash')) {
                _speed = delay;
            }

            setTimeout(function() {
                _this.$slide.eq(index).addClass('lg-complete');
                _this.$el.trigger('onSlideItemLoad.lg', [index, delay || 0]);
            }, _speed);

        });

        // @todo check load state for html5 videos
        if (_isVideo && _isVideo.html5 && !_hasPoster) {
            _this.$slide.eq(index).addClass('lg-complete');
        }

        if (rec === true) {
            if (!_this.$slide.eq(index).hasClass('lg-complete')) {
                _this.$slide.eq(index).find('.lg-object').on('load.lg error.lg', function() {
                    _this.preload(index);
                });
            } else {
                _this.preload(index);
            }
        }

        //}
    };

    /**
    *   @desc slide function for lightgallery
        ** Slide() gets call on start
        ** ** Set lg.on true once slide() function gets called.
        ** Call loadContent() on slide() function inside setTimeout
        ** ** On first slide we do not want any animation like slide of fade
        ** ** So on first slide( if lg.on if false that is first slide) loadContent() should start loading immediately
        ** ** Else loadContent() should wait for the transition to complete.
        ** ** So set timeout s.speed + 50
    <=> ** loadContent() will load slide content in to the particular slide
        ** ** It has recursion (rec) parameter. if rec === true loadContent() will call preload() function.
        ** ** preload will execute only when the previous slide is fully loaded (images iframe)
        ** ** avoid simultaneous image load
    <=> ** Preload() will check for s.preload value and call loadContent() again accoring to preload value
        ** loadContent()  <====> Preload();

    *   @param {Number} index - index of the slide
    *   @param {Boolean} fromTouch - true if slide function called via touch event or mouse drag
    *   @param {Boolean} fromThumb - true if slide function called via thumbnail click
    *   @param {String} direction - Direction of the slide(next/prev)
    */
    Plugin.prototype.slide = function(index, fromTouch, fromThumb, direction) {

        var _prevIndex = this.$outer.find('.lg-current').index();
        var _this = this;

        // Prevent if multiple call
        // Required for hsh plugin
        if (_this.lGalleryOn && (_prevIndex === index)) {
            return;
        }

        var _length = this.$slide.length;
        var _time = _this.lGalleryOn ? this.s.speed : 0;

        if (!_this.lgBusy) {

            if (this.s.download) {
                var _src;
                if (_this.s.dynamic) {
                    _src = _this.s.dynamicEl[index].downloadUrl !== false && (_this.s.dynamicEl[index].downloadUrl || _this.s.dynamicEl[index].src);
                } else {
                    _src = _this.$items.eq(index).attr('data-download-url') !== 'false' && (_this.$items.eq(index).attr('data-download-url') || _this.$items.eq(index).attr('href') || _this.$items.eq(index).attr('data-src'));

                }

                if (_src) {
                    $('#lg-download').attr('href', _src);
                    _this.$outer.removeClass('lg-hide-download');
                } else {
                    _this.$outer.addClass('lg-hide-download');
                }
            }

            this.$el.trigger('onBeforeSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);

            _this.lgBusy = true;

            clearTimeout(_this.hideBartimeout);

            // Add title if this.s.appendSubHtmlTo === lg-sub-html
            if (this.s.appendSubHtmlTo === '.lg-sub-html') {

                // wait for slide animation to complete
                setTimeout(function() {
                    _this.addHtml(index);
                }, _time);
            }

            this.arrowDisable(index);

            if (!direction) {
                if (index < _prevIndex) {
                    direction = 'prev';
                } else if (index > _prevIndex) {
                    direction = 'next';
                }
            }

            if (!fromTouch) {

                // remove all transitions
                _this.$outer.addClass('lg-no-trans');

                this.$slide.removeClass('lg-prev-slide lg-next-slide');

                if (direction === 'prev') {

                    //prevslide
                    this.$slide.eq(index).addClass('lg-prev-slide');
                    this.$slide.eq(_prevIndex).addClass('lg-next-slide');
                } else {

                    // next slide
                    this.$slide.eq(index).addClass('lg-next-slide');
                    this.$slide.eq(_prevIndex).addClass('lg-prev-slide');
                }

                // give 50 ms for browser to add/remove class
                setTimeout(function() {
                    _this.$slide.removeClass('lg-current');

                    //_this.$slide.eq(_prevIndex).removeClass('lg-current');
                    _this.$slide.eq(index).addClass('lg-current');

                    // reset all transitions
                    _this.$outer.removeClass('lg-no-trans');
                }, 50);
            } else {

                this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide');
                var touchPrev;
                var touchNext;
                if (_length > 2) {
                    touchPrev = index - 1;
                    touchNext = index + 1;

                    if ((index === 0) && (_prevIndex === _length - 1)) {

                        // next slide
                        touchNext = 0;
                        touchPrev = _length - 1;
                    } else if ((index === _length - 1) && (_prevIndex === 0)) {

                        // prev slide
                        touchNext = 0;
                        touchPrev = _length - 1;
                    }

                } else {
                    touchPrev = 0;
                    touchNext = 1;
                }

                if (direction === 'prev') {
                    _this.$slide.eq(touchNext).addClass('lg-next-slide');
                } else {
                    _this.$slide.eq(touchPrev).addClass('lg-prev-slide');
                }

                _this.$slide.eq(index).addClass('lg-current');
            }

            if (_this.lGalleryOn) {
                setTimeout(function() {
                    _this.loadContent(index, true, 0);
                }, this.s.speed + 50);

                setTimeout(function() {
                    _this.lgBusy = false;
                    _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
                }, this.s.speed);

            } else {
                _this.loadContent(index, true, _this.s.backdropDuration);

                _this.lgBusy = false;
                _this.$el.trigger('onAfterSlide.lg', [_prevIndex, index, fromTouch, fromThumb]);
            }

            _this.lGalleryOn = true;

            if (this.s.counter) {
                $('#lg-counter-current').text(index + 1);
            }

        }
        _this.index = index;

    };

    /**
     *  @desc Go to next slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToNextSlide = function(fromTouch) {
        var _this = this;
        var _loop = _this.s.loop;
        if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
        }

        if (!_this.lgBusy) {
            if ((_this.index + 1) < _this.$slide.length) {
                _this.index++;
                _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                _this.slide(_this.index, fromTouch, false, 'next');
            } else {
                if (_loop) {
                    _this.index = 0;
                    _this.$el.trigger('onBeforeNextSlide.lg', [_this.index]);
                    _this.slide(_this.index, fromTouch, false, 'next');
                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                    _this.$outer.addClass('lg-right-end');
                    setTimeout(function() {
                        _this.$outer.removeClass('lg-right-end');
                    }, 400);
                }
            }
        }
    };

    /**
     *  @desc Go to previous slide
     *  @param {Boolean} fromTouch - true if slide function called via touch event
     */
    Plugin.prototype.goToPrevSlide = function(fromTouch) {
        var _this = this;
        var _loop = _this.s.loop;
        if (fromTouch && _this.$slide.length < 3) {
            _loop = false;
        }

        if (!_this.lgBusy) {
            if (_this.index > 0) {
                _this.index--;
                _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                _this.slide(_this.index, fromTouch, false, 'prev');
            } else {
                if (_loop) {
                    _this.index = _this.$items.length - 1;
                    _this.$el.trigger('onBeforePrevSlide.lg', [_this.index, fromTouch]);
                    _this.slide(_this.index, fromTouch, false, 'prev');
                } else if (_this.s.slideEndAnimatoin && !fromTouch) {
                    _this.$outer.addClass('lg-left-end');
                    setTimeout(function() {
                        _this.$outer.removeClass('lg-left-end');
                    }, 400);
                }
            }
        }
    };

    Plugin.prototype.keyPress = function() {
        var _this = this;
        if (this.$items.length > 1) {
            $(window).on('keyup.lg', function(e) {
                if (_this.$items.length > 1) {
                    if (e.keyCode === 37) {
                        e.preventDefault();
                        _this.goToPrevSlide();
                    }

                    if (e.keyCode === 39) {
                        e.preventDefault();
                        _this.goToNextSlide();
                    }
                }
            });
        }

        $(window).on('keydown.lg', function(e) {
            if (_this.s.escKey === true && e.keyCode === 27) {
                e.preventDefault();
                if (!_this.$outer.hasClass('lg-thumb-open')) {
                    _this.destroy();
                } else {
                    _this.$outer.removeClass('lg-thumb-open');
                }
            }
        });
    };

    Plugin.prototype.arrow = function() {
        var _this = this;
        this.$outer.find('.lg-prev').on('click.lg', function() {
            _this.goToPrevSlide();
        });

        this.$outer.find('.lg-next').on('click.lg', function() {
            _this.goToNextSlide();
        });
    };

    Plugin.prototype.arrowDisable = function(index) {

        // Disable arrows if s.hideControlOnEnd is true
        if (!this.s.loop && this.s.hideControlOnEnd) {
            if ((index + 1) < this.$slide.length) {
                this.$outer.find('.lg-next').removeAttr('disabled').removeClass('disabled');
            } else {
                this.$outer.find('.lg-next').attr('disabled', 'disabled').addClass('disabled');
            }

            if (index > 0) {
                this.$outer.find('.lg-prev').removeAttr('disabled').removeClass('disabled');
            } else {
                this.$outer.find('.lg-prev').attr('disabled', 'disabled').addClass('disabled');
            }
        }
    };

    Plugin.prototype.setTranslate = function($el, xValue, yValue) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        if (this.s.useLeft) {
            $el.css('left', xValue);
        } else {
            $el.css({
                transform: 'translate3d(' + (xValue) + 'px, ' + yValue + 'px, 0px)'
            });
        }
    };

    Plugin.prototype.touchMove = function(startCoords, endCoords) {

        var distance = endCoords - startCoords;

        if (Math.abs(distance) > 15) {
            // reset opacity and transition duration
            this.$outer.addClass('lg-dragging');

            // move current slide
            this.setTranslate(this.$slide.eq(this.index), distance, 0);

            // move next and prev slide with current slide
            this.setTranslate($('.lg-prev-slide'), -this.$slide.eq(this.index).width() + distance, 0);
            this.setTranslate($('.lg-next-slide'), this.$slide.eq(this.index).width() + distance, 0);
        }
    };

    Plugin.prototype.touchEnd = function(distance) {
        var _this = this;

        // keep slide animation for any mode while dragg/swipe
        if (_this.s.mode !== 'lg-slide') {
            _this.$outer.addClass('lg-slide');
        }

        this.$slide.not('.lg-current, .lg-prev-slide, .lg-next-slide').css('opacity', '0');

        // set transition duration
        setTimeout(function() {
            _this.$outer.removeClass('lg-dragging');
            if ((distance < 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
                _this.goToNextSlide(true);
            } else if ((distance > 0) && (Math.abs(distance) > _this.s.swipeThreshold)) {
                _this.goToPrevSlide(true);
            } else if (Math.abs(distance) < 5) {

                // Trigger click if distance is less than 5 pix
                _this.$el.trigger('onSlideClick.lg');
            }

            _this.$slide.removeAttr('style');
        });

        // remove slide class once drag/swipe is completed if mode is not slide
        setTimeout(function() {
            if (!_this.$outer.hasClass('lg-dragging') && _this.s.mode !== 'lg-slide') {
                _this.$outer.removeClass('lg-slide');
            }
        }, _this.s.speed + 100);

    };

    Plugin.prototype.enableSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;

        if (_this.s.enableSwipe && _this.doCss()) {

            _this.$slide.on('touchstart.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed') && !_this.lgBusy) {
                    e.preventDefault();
                    _this.manageSwipeClass();
                    startCoords = e.originalEvent.targetTouches[0].pageX;
                }
            });

            _this.$slide.on('touchmove.lg', function(e) {
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    e.preventDefault();
                    endCoords = e.originalEvent.targetTouches[0].pageX;
                    _this.touchMove(startCoords, endCoords);
                    isMoved = true;
                }
            });

            _this.$slide.on('touchend.lg', function() {
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    if (isMoved) {
                        isMoved = false;
                        _this.touchEnd(endCoords - startCoords);
                    } else {
                        _this.$el.trigger('onSlideClick.lg');
                    }
                }
            });
        }

    };

    Plugin.prototype.enableDrag = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        if (_this.s.enableDrag && _this.doCss()) {
            _this.$slide.on('mousedown.lg', function(e) {
                // execute only on .lg-object
                if (!_this.$outer.hasClass('lg-zoomed')) {
                    if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
                        e.preventDefault();

                        if (!_this.lgBusy) {
                            _this.manageSwipeClass();
                            startCoords = e.pageX;
                            isDraging = true;

                            // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                            _this.$outer.scrollLeft += 1;
                            _this.$outer.scrollLeft -= 1;

                            // *

                            _this.$outer.removeClass('lg-grab').addClass('lg-grabbing');

                            _this.$el.trigger('onDragstart.lg');
                        }

                    }
                }
            });

            $(window).on('mousemove.lg', function(e) {
                if (isDraging) {
                    isMoved = true;
                    endCoords = e.pageX;
                    _this.touchMove(startCoords, endCoords);
                    _this.$el.trigger('onDragmove.lg');
                }
            });

            $(window).on('mouseup.lg', function(e) {
                if (isMoved) {
                    isMoved = false;
                    _this.touchEnd(endCoords - startCoords);
                    _this.$el.trigger('onDragend.lg');
                } else if ($(e.target).hasClass('lg-object') || $(e.target).hasClass('lg-video-play')) {
                    _this.$el.trigger('onSlideClick.lg');
                }

                // Prevent execution on click
                if (isDraging) {
                    isDraging = false;
                    _this.$outer.removeClass('lg-grabbing').addClass('lg-grab');
                }
            });

        }
    };

    Plugin.prototype.manageSwipeClass = function() {
        var _touchNext = this.index + 1;
        var _touchPrev = this.index - 1;
        if (this.s.loop && this.$slide.length > 2) {
            if (this.index === 0) {
                _touchPrev = this.$slide.length - 1;
            } else if (this.index === this.$slide.length - 1) {
                _touchNext = 0;
            }
        }

        this.$slide.removeClass('lg-next-slide lg-prev-slide');
        if (_touchPrev > -1) {
            this.$slide.eq(_touchPrev).addClass('lg-prev-slide');
        }

        this.$slide.eq(_touchNext).addClass('lg-next-slide');
    };

    Plugin.prototype.mousewheel = function() {
        var _this = this;
        _this.$outer.on('mousewheel.lg', function(e) {

            if (!e.deltaY) {
                return;
            }

            if (e.deltaY > 0) {
                _this.goToPrevSlide();
            } else {
                _this.goToNextSlide();
            }

            e.preventDefault();
        });

    };

    Plugin.prototype.closeGallery = function() {

        var _this = this;
        var mousedown = false;
        this.$outer.find('.lg-close').on('click.lg', function() {
            _this.destroy();
        });

        if (_this.s.closable) {

            // If you drag the slide and release outside gallery gets close on chrome
            // for preventing this check mousedown and mouseup happened on .lg-item or lg-outer
            _this.$outer.on('mousedown.lg', function(e) {

                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap')) {
                    mousedown = true;
                } else {
                    mousedown = false;
                }

            });

            _this.$outer.on('mouseup.lg', function(e) {

                if ($(e.target).is('.lg-outer') || $(e.target).is('.lg-item ') || $(e.target).is('.lg-img-wrap') && mousedown) {
                    if (!_this.$outer.hasClass('lg-dragging')) {
                        _this.destroy();
                    }
                }

            });

        }

    };

    Plugin.prototype.destroy = function(d) {

        var _this = this;

        if (!d) {
            _this.$el.trigger('onBeforeClose.lg');
            $(window).scrollTop(_this.prevScrollTop);
        }


        /**
         * if d is false or undefined destroy will only close the gallery
         * plugins instance remains with the element
         *
         * if d is true destroy will completely remove the plugin
         */

        if (d) {
            if (!_this.s.dynamic) {
                // only when not using dynamic mode is $items a jquery collection
                this.$items.off('click.lg click.lgcustom');
            }

            $.removeData(_this.el, 'lightGallery');
        }

        // Unbind all events added by lightGallery
        this.$el.off('.lg.tm');

        // Distroy all lightGallery modules
        $.each($.fn.lightGallery.modules, function(key) {
            if (_this.modules[key]) {
                _this.modules[key].destroy();
            }
        });

        this.lGalleryOn = false;

        clearTimeout(_this.hideBartimeout);
        this.hideBartimeout = false;
        $(window).off('.lg');
        $('body').removeClass('lg-on lg-from-hash');

        if (_this.$outer) {
            _this.$outer.removeClass('lg-visible');
        }

        $('.lg-backdrop').removeClass('in');

        setTimeout(function() {
            if (_this.$outer) {
                _this.$outer.remove();
            }

            $('.lg-backdrop').remove();

            if (!d) {
                _this.$el.trigger('onCloseAfter.lg');
            }

        }, _this.s.backdropDuration + 50);
    };

    $.fn.lightGallery = function(options) {
        return this.each(function() {
            if (!$.data(this, 'lightGallery')) {
                $.data(this, 'lightGallery', new Plugin(this, options));
            } else {
                try {
                    $(this).data('lightGallery').init();
                } catch (err) {
                    console.error('lightGallery has not initiated properly');
                }
            }
        });
    };

    $.fn.lightGallery.modules = {};

})();


}));

/*! lg-autoplay - v1.0.4 - 2017-03-28
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {


(function() {

    'use strict';

    var defaults = {
        autoplay: false,
        pause: 5000,
        progressBar: true,
        fourceAutoplay: false,
        autoplayControls: true,
        appendAutoplayControlsTo: '.lg-toolbar'
    };

    /**
     * Creates the autoplay plugin.
     * @param {object} element - lightGallery element
     */
    var Autoplay = function(element) {

        this.core = $(element).data('lightGallery');

        this.$el = $(element);

        // Execute only if items are above 1
        if (this.core.$items.length < 2) {
            return false;
        }

        this.core.s = $.extend({}, defaults, this.core.s);
        this.interval = false;

        // Identify if slide happened from autoplay
        this.fromAuto = true;

        // Identify if autoplay canceled from touch/drag
        this.canceledOnTouch = false;

        // save fourceautoplay value
        this.fourceAutoplayTemp = this.core.s.fourceAutoplay;

        // do not allow progress bar if browser does not support css3 transitions
        if (!this.core.doCss()) {
            this.core.s.progressBar = false;
        }

        this.init();

        return this;
    };

    Autoplay.prototype.init = function() {
        var _this = this;

        // append autoplay controls
        if (_this.core.s.autoplayControls) {
            _this.controls();
        }

        // Create progress bar
        if (_this.core.s.progressBar) {
            _this.core.$outer.find('.lg').append('<div class="lg-progress-bar"><div class="lg-progress"></div></div>');
        }

        // set progress
        _this.progress();

        // Start autoplay
        if (_this.core.s.autoplay) {
            _this.$el.one('onSlideItemLoad.lg.tm', function() {
                _this.startlAuto();
            });
        }

        // cancel interval on touchstart and dragstart
        _this.$el.on('onDragstart.lg.tm touchstart.lg.tm', function() {
            if (_this.interval) {
                _this.cancelAuto();
                _this.canceledOnTouch = true;
            }
        });

        // restore autoplay if autoplay canceled from touchstart / dragstart
        _this.$el.on('onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm', function() {
            if (!_this.interval && _this.canceledOnTouch) {
                _this.startlAuto();
                _this.canceledOnTouch = false;
            }
        });

    };

    Autoplay.prototype.progress = function() {

        var _this = this;
        var _$progressBar;
        var _$progress;

        _this.$el.on('onBeforeSlide.lg.tm', function() {

            // start progress bar animation
            if (_this.core.s.progressBar && _this.fromAuto) {
                _$progressBar = _this.core.$outer.find('.lg-progress-bar');
                _$progress = _this.core.$outer.find('.lg-progress');
                if (_this.interval) {
                    _$progress.removeAttr('style');
                    _$progressBar.removeClass('lg-start');
                    setTimeout(function() {
                        _$progress.css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
                        _$progressBar.addClass('lg-start');
                    }, 20);
                }
            }

            // Remove setinterval if slide is triggered manually and fourceautoplay is false
            if (!_this.fromAuto && !_this.core.s.fourceAutoplay) {
                _this.cancelAuto();
            }

            _this.fromAuto = false;

        });
    };

    // Manage autoplay via play/stop buttons
    Autoplay.prototype.controls = function() {
        var _this = this;
        var _html = '<span class="lg-autoplay-button lg-icon"></span>';

        // Append autoplay controls
        $(this.core.s.appendAutoplayControlsTo).append(_html);

        _this.core.$outer.find('.lg-autoplay-button').on('click.lg', function() {
            if ($(_this.core.$outer).hasClass('lg-show-autoplay')) {
                _this.cancelAuto();
                _this.core.s.fourceAutoplay = false;
            } else {
                if (!_this.interval) {
                    _this.startlAuto();
                    _this.core.s.fourceAutoplay = _this.fourceAutoplayTemp;
                }
            }
        });
    };

    // Autostart gallery
    Autoplay.prototype.startlAuto = function() {
        var _this = this;

        _this.core.$outer.find('.lg-progress').css('transition', 'width ' + (_this.core.s.speed + _this.core.s.pause) + 'ms ease 0s');
        _this.core.$outer.addClass('lg-show-autoplay');
        _this.core.$outer.find('.lg-progress-bar').addClass('lg-start');

        _this.interval = setInterval(function() {
            if (_this.core.index + 1 < _this.core.$items.length) {
                _this.core.index++;
            } else {
                _this.core.index = 0;
            }

            _this.fromAuto = true;
            _this.core.slide(_this.core.index, false, false, 'next');
        }, _this.core.s.speed + _this.core.s.pause);
    };

    // cancel Autostart
    Autoplay.prototype.cancelAuto = function() {
        clearInterval(this.interval);
        this.interval = false;
        this.core.$outer.find('.lg-progress').removeAttr('style');
        this.core.$outer.removeClass('lg-show-autoplay');
        this.core.$outer.find('.lg-progress-bar').removeClass('lg-start');
    };

    Autoplay.prototype.destroy = function() {

        this.cancelAuto();
        this.core.$outer.find('.lg-progress-bar').remove();
    };

    $.fn.lightGallery.modules.autoplay = Autoplay;

})();


}));

/*! lg-fullscreen - v1.0.1 - 2016-09-30
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2016 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        fullScreen: true
    };

    var Fullscreen = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        this.$el = $(element);

        // extend module defalut settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.init();

        return this;
    };

    Fullscreen.prototype.init = function() {
        var fullScreen = '';
        if (this.core.s.fullScreen) {

            // check for fullscreen browser support
            if (!document.fullscreenEnabled && !document.webkitFullscreenEnabled &&
                !document.mozFullScreenEnabled && !document.msFullscreenEnabled) {
                return;
            } else {
                fullScreen = '<span class="lg-fullscreen lg-icon"></span>';
                this.core.$outer.find('.lg-toolbar').append(fullScreen);
                this.fullScreen();
            }
        }
    };

    Fullscreen.prototype.requestFullscreen = function() {
        var el = document.documentElement;
        if (el.requestFullscreen) {
            el.requestFullscreen();
        } else if (el.msRequestFullscreen) {
            el.msRequestFullscreen();
        } else if (el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if (el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        }
    };

    Fullscreen.prototype.exitFullscreen = function() {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    };

    // https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Using_full_screen_mode
    Fullscreen.prototype.fullScreen = function() {
        var _this = this;

        $(document).on('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg', function() {
            _this.core.$outer.toggleClass('lg-fullscreen-on');
        });

        this.core.$outer.find('.lg-fullscreen').on('click.lg', function() {
            if (!document.fullscreenElement &&
                !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                _this.requestFullscreen();
            } else {
                _this.exitFullscreen();
            }
        });

    };

    Fullscreen.prototype.destroy = function() {

        // exit from fullscreen if activated
        this.exitFullscreen();

        $(document).off('fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg');
    };

    $.fn.lightGallery.modules.fullscreen = Fullscreen;

})();

}));

/*! lg-pager - v1.0.2 - 2017-01-22
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        pager: false
    };

    var Pager = function(element) {

        this.core = $(element).data('lightGallery');

        this.$el = $(element);
        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.pager && this.core.$items.length > 1) {
            this.init();
        }

        return this;
    };

    Pager.prototype.init = function() {
        var _this = this;
        var pagerList = '';
        var $pagerCont;
        var $pagerOuter;
        var timeout;

        _this.core.$outer.find('.lg').append('<div class="lg-pager-outer"></div>');

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + _this.core.s.dynamicEl[i].thumb + '" /></div></span>';
            }
        } else {
            _this.core.$items.each(function() {

                if (!_this.core.s.exThumbImage) {
                    pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).find('img').attr('src') + '" /></div></span>';
                } else {
                    pagerList += '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' + $(this).attr(_this.core.s.exThumbImage) + '" /></div></span>';
                }

            });
        }

        $pagerOuter = _this.core.$outer.find('.lg-pager-outer');

        $pagerOuter.html(pagerList);

        $pagerCont = _this.core.$outer.find('.lg-pager-cont');
        $pagerCont.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            _this.core.index = _$this.index();
            _this.core.slide(_this.core.index, false, true, false);
        });

        $pagerOuter.on('mouseover.lg', function() {
            clearTimeout(timeout);
            $pagerOuter.addClass('lg-pager-hover');
        });

        $pagerOuter.on('mouseout.lg', function() {
            timeout = setTimeout(function() {
                $pagerOuter.removeClass('lg-pager-hover');
            });
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function(e, prevIndex, index) {
            $pagerCont.removeClass('lg-pager-active');
            $pagerCont.eq(index).addClass('lg-pager-active');
        });

    };

    Pager.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.pager = Pager;

})();


}));

/*! lg-thumbnail - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        thumbnail: true,

        animateThumb: true,
        currentPagerPosition: 'middle',

        thumbWidth: 100,
        thumbHeight: '80px',
        thumbContHeight: 100,
        thumbMargin: 5,

        exThumbImage: false,
        showThumbByDefault: true,
        toogleThumb: true,
        pullCaptionUp: true,

        enableThumbDrag: true,
        enableThumbSwipe: true,
        swipeThreshold: 50,

        loadYoutubeThumbnail: true,
        youtubeThumbSize: 1,

        loadVimeoThumbnail: true,
        vimeoThumbSize: 'thumbnail_small',

        loadDailymotionThumbnail: true
    };

    var Thumbnail = function(element) {

        // get lightGallery core plugin data
        this.core = $(element).data('lightGallery');

        // extend module default settings with lightGallery core settings
        this.core.s = $.extend({}, defaults, this.core.s);

        this.$el = $(element);
        this.$thumbOuter = null;
        this.thumbOuterWidth = 0;
        this.thumbTotalWidth = (this.core.$items.length * (this.core.s.thumbWidth + this.core.s.thumbMargin));
        this.thumbIndex = this.core.index;

        if (this.core.s.animateThumb) {
            this.core.s.thumbHeight = '100%';
        }

        // Thumbnail animation value
        this.left = 0;

        this.init();

        return this;
    };

    Thumbnail.prototype.init = function() {
        var _this = this;
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            if (this.core.s.showThumbByDefault) {
                setTimeout(function(){
                    _this.core.$outer.addClass('lg-thumb-open');
                }, 700);
            }

            if (this.core.s.pullCaptionUp) {
                this.core.$outer.addClass('lg-pull-caption-up');
            }

            this.build();
            if (this.core.s.animateThumb && this.core.doCss()) {
                if (this.core.s.enableThumbDrag) {
                    this.enableThumbDrag();
                }

                if (this.core.s.enableThumbSwipe) {
                    this.enableThumbSwipe();
                }

                this.thumbClickable = false;
            } else {
                this.thumbClickable = true;
            }

            this.toogle();
            this.thumbkeyPress();
        }
    };

    Thumbnail.prototype.build = function() {
        var _this = this;
        var thumbList = '';
        var vimeoErrorThumbSize = '';
        var $thumb;
        var html = '<div class="lg-thumb-outer">' +
            '<div class="lg-thumb lg-group">' +
            '</div>' +
            '</div>';

        switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
                vimeoErrorThumbSize = '640';
                break;
            case 'thumbnail_medium':
                vimeoErrorThumbSize = '200x150';
                break;
            case 'thumbnail_small':
                vimeoErrorThumbSize = '100x75';
        }

        _this.core.$outer.addClass('lg-has-thumb');

        _this.core.$outer.find('.lg').append(html);

        _this.$thumbOuter = _this.core.$outer.find('.lg-thumb-outer');
        _this.thumbOuterWidth = _this.$thumbOuter.width();

        if (_this.core.s.animateThumb) {
            _this.core.$outer.find('.lg-thumb').css({
                width: _this.thumbTotalWidth + 'px',
                position: 'relative'
            });
        }

        if (this.core.s.animateThumb) {
            _this.$thumbOuter.css('height', _this.core.s.thumbContHeight + 'px');
        }

        function getThumb(src, thumb, index) {
            var isVideo = _this.core.isVideo(src, index) || {};
            var thumbImg;
            var vimeoId = '';

            if (isVideo.youtube || isVideo.vimeo || isVideo.dailymotion) {
                if (isVideo.youtube) {
                    if (_this.core.s.loadYoutubeThumbnail) {
                        thumbImg = '//img.youtube.com/vi/' + isVideo.youtube[1] + '/' + _this.core.s.youtubeThumbSize + '.jpg';
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.vimeo) {
                    if (_this.core.s.loadVimeoThumbnail) {
                        thumbImg = '//i.vimeocdn.com/video/error_' + vimeoErrorThumbSize + '.jpg';
                        vimeoId = isVideo.vimeo[1];
                    } else {
                        thumbImg = thumb;
                    }
                } else if (isVideo.dailymotion) {
                    if (_this.core.s.loadDailymotionThumbnail) {
                        thumbImg = '//www.dailymotion.com/thumbnail/video/' + isVideo.dailymotion[1];
                    } else {
                        thumbImg = thumb;
                    }
                }
            } else {
                thumbImg = thumb;
            }

            thumbList += '<div data-vimeo-id="' + vimeoId + '" class="lg-thumb-item" style="width:' + _this.core.s.thumbWidth + 'px; height: ' + _this.core.s.thumbHeight + '; margin-right: ' + _this.core.s.thumbMargin + 'px"><img src="' + thumbImg + '" /></div>';
            vimeoId = '';
        }

        if (_this.core.s.dynamic) {
            for (var i = 0; i < _this.core.s.dynamicEl.length; i++) {
                getThumb(_this.core.s.dynamicEl[i].src, _this.core.s.dynamicEl[i].thumb, i);
            }
        } else {
            _this.core.$items.each(function(i) {

                if (!_this.core.s.exThumbImage) {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).find('img').attr('src'), i);
                } else {
                    getThumb($(this).attr('href') || $(this).attr('data-src'), $(this).attr(_this.core.s.exThumbImage), i);
                }

            });
        }

        _this.core.$outer.find('.lg-thumb').html(thumbList);

        $thumb = _this.core.$outer.find('.lg-thumb-item');

        // Load vimeo thumbnails
        $thumb.each(function() {
            var $this = $(this);
            var vimeoVideoId = $this.attr('data-vimeo-id');

            if (vimeoVideoId) {
                $.getJSON('//www.vimeo.com/api/v2/video/' + vimeoVideoId + '.json?callback=?', {
                    format: 'json'
                }, function(data) {
                    $this.find('img').attr('src', data[0][_this.core.s.vimeoThumbSize]);
                });
            }
        });

        // manage active class for thumbnail
        $thumb.eq(_this.core.index).addClass('active');
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            $thumb.removeClass('active');
            $thumb.eq(_this.core.index).addClass('active');
        });

        $thumb.on('click.lg touchend.lg', function() {
            var _$this = $(this);
            setTimeout(function() {

                // In IE9 and bellow touch does not support
                // Go to slide if browser does not support css transitions
                if ((_this.thumbClickable && !_this.core.lgBusy) || !_this.core.doCss()) {
                    _this.core.index = _$this.index();
                    _this.core.slide(_this.core.index, false, true, false);
                }
            }, 50);
        });

        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            _this.animateThumb(_this.core.index);
        });

        $(window).on('resize.lg.thumb orientationchange.lg.thumb', function() {
            setTimeout(function() {
                _this.animateThumb(_this.core.index);
                _this.thumbOuterWidth = _this.$thumbOuter.width();
            }, 200);
        });

    };

    Thumbnail.prototype.setTranslate = function(value) {
        // jQuery supports Automatic CSS prefixing since jQuery 1.8.0
        this.core.$outer.find('.lg-thumb').css({
            transform: 'translate3d(-' + (value) + 'px, 0px, 0px)'
        });
    };

    Thumbnail.prototype.animateThumb = function(index) {
        var $thumb = this.core.$outer.find('.lg-thumb');
        if (this.core.s.animateThumb) {
            var position;
            switch (this.core.s.currentPagerPosition) {
                case 'left':
                    position = 0;
                    break;
                case 'middle':
                    position = (this.thumbOuterWidth / 2) - (this.core.s.thumbWidth / 2);
                    break;
                case 'right':
                    position = this.thumbOuterWidth - this.core.s.thumbWidth;
            }
            this.left = ((this.core.s.thumbWidth + this.core.s.thumbMargin) * index - 1) - position;
            if (this.left > (this.thumbTotalWidth - this.thumbOuterWidth)) {
                this.left = this.thumbTotalWidth - this.thumbOuterWidth;
            }

            if (this.left < 0) {
                this.left = 0;
            }

            if (this.core.lGalleryOn) {
                if (!$thumb.hasClass('on')) {
                    this.core.$outer.find('.lg-thumb').css('transition-duration', this.core.s.speed + 'ms');
                }

                if (!this.core.doCss()) {
                    $thumb.animate({
                        left: -this.left + 'px'
                    }, this.core.s.speed);
                }
            } else {
                if (!this.core.doCss()) {
                    $thumb.css('left', -this.left + 'px');
                }
            }

            this.setTranslate(this.left);

        }
    };

    // Enable thumbnail dragging and swiping
    Thumbnail.prototype.enableThumbDrag = function() {

        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isDraging = false;
        var isMoved = false;
        var tempLeft = 0;

        _this.$thumbOuter.addClass('lg-grab');

        _this.core.$outer.find('.lg-thumb').on('mousedown.lg.thumb', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                // execute only on .lg-object
                e.preventDefault();
                startCoords = e.pageX;
                isDraging = true;

                // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                _this.core.$outer.scrollLeft += 1;
                _this.core.$outer.scrollLeft -= 1;

                // *
                _this.thumbClickable = false;
                _this.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing');
            }
        });

        $(window).on('mousemove.lg.thumb', function(e) {
            if (isDraging) {
                tempLeft = _this.left;
                isMoved = true;
                endCoords = e.pageX;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        $(window).on('mouseup.lg.thumb', function() {
            if (isMoved) {
                isMoved = false;
                _this.$thumbOuter.removeClass('lg-dragging');

                _this.left = tempLeft;

                if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                    _this.thumbClickable = true;
                }

            } else {
                _this.thumbClickable = true;
            }

            if (isDraging) {
                isDraging = false;
                _this.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab');
            }
        });

    };

    Thumbnail.prototype.enableThumbSwipe = function() {
        var _this = this;
        var startCoords = 0;
        var endCoords = 0;
        var isMoved = false;
        var tempLeft = 0;

        _this.core.$outer.find('.lg-thumb').on('touchstart.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                startCoords = e.originalEvent.targetTouches[0].pageX;
                _this.thumbClickable = false;
            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchmove.lg', function(e) {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {
                e.preventDefault();
                endCoords = e.originalEvent.targetTouches[0].pageX;
                isMoved = true;

                _this.$thumbOuter.addClass('lg-dragging');

                tempLeft = _this.left;

                tempLeft = tempLeft - (endCoords - startCoords);

                if (tempLeft > (_this.thumbTotalWidth - _this.thumbOuterWidth)) {
                    tempLeft = _this.thumbTotalWidth - _this.thumbOuterWidth;
                }

                if (tempLeft < 0) {
                    tempLeft = 0;
                }

                // move current slide
                _this.setTranslate(tempLeft);

            }
        });

        _this.core.$outer.find('.lg-thumb').on('touchend.lg', function() {
            if (_this.thumbTotalWidth > _this.thumbOuterWidth) {

                if (isMoved) {
                    isMoved = false;
                    _this.$thumbOuter.removeClass('lg-dragging');
                    if (Math.abs(endCoords - startCoords) < _this.core.s.swipeThreshold) {
                        _this.thumbClickable = true;
                    }

                    _this.left = tempLeft;
                } else {
                    _this.thumbClickable = true;
                }
            } else {
                _this.thumbClickable = true;
            }
        });

    };

    Thumbnail.prototype.toogle = function() {
        var _this = this;
        if (_this.core.s.toogleThumb) {
            _this.core.$outer.addClass('lg-can-toggle');
            _this.$thumbOuter.append('<span class="lg-toogle-thumb lg-icon"></span>');
            _this.core.$outer.find('.lg-toogle-thumb').on('click.lg', function() {
                _this.core.$outer.toggleClass('lg-thumb-open');
            });
        }
    };

    Thumbnail.prototype.thumbkeyPress = function() {
        var _this = this;
        $(window).on('keydown.lg.thumb', function(e) {
            if (e.keyCode === 38) {
                e.preventDefault();
                _this.core.$outer.addClass('lg-thumb-open');
            } else if (e.keyCode === 40) {
                e.preventDefault();
                _this.core.$outer.removeClass('lg-thumb-open');
            }
        });
    };

    Thumbnail.prototype.destroy = function() {
        if (this.core.s.thumbnail && this.core.$items.length > 1) {
            $(window).off('resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb');
            this.$thumbOuter.remove();
            this.core.$outer.removeClass('lg-has-thumb');
        }
    };

    $.fn.lightGallery.modules.Thumbnail = Thumbnail;

})();

}));

/*! lg-video - v1.2.0 - 2017-11-16
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {
    
        'use strict';
    
        var defaults = {
            videoMaxWidth: '855px',

            autoplayFirstVideo: true,

            youtubePlayerParams: false,
            vimeoPlayerParams: false,
            dailymotionPlayerParams: false,
            vkPlayerParams: false,

            videojs: false,
            videojsOptions: {}
        };
    
        var Video = function(element) {
    
            this.core = $(element).data('lightGallery');
    
            this.$el = $(element);
            this.core.s = $.extend({}, defaults, this.core.s);
            this.videoLoaded = false;
    
            this.init();
    
            return this;
        };
    
        Video.prototype.init = function() {
            var _this = this;
    
            // Event triggered when video url found without poster
            _this.core.$el.on('hasVideo.lg.tm', onHasVideo.bind(this));
    
            // Set max width for video
            _this.core.$el.on('onAferAppendSlide.lg.tm', onAferAppendSlide.bind(this));
    
            if (_this.core.doCss() && (_this.core.$items.length > 1) && (_this.core.s.enableSwipe || _this.core.s.enableDrag)) {
                _this.core.$el.on('onSlideClick.lg.tm', function() {
                    var $el = _this.core.$slide.eq(_this.core.index);
                    _this.loadVideoOnclick($el);
                });
            } else {
    
                // For IE 9 and bellow
                _this.core.$slide.on('click.lg', function() {
                    _this.loadVideoOnclick($(this));
                });
            }
    
            _this.core.$el.on('onBeforeSlide.lg.tm', onBeforeSlide.bind(this));
    
            _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex) {
                _this.core.$slide.eq(prevIndex).removeClass('lg-video-playing');
            });
        };
    
        Video.prototype.loadVideo = function(src, addClass, noPoster, index, html) {
            var video = '';
            var autoplay = 1;
            var a = '';
            var isVideo = this.core.isVideo(src, index) || {};
    
            // Enable autoplay based on setting for first video if poster doesn't exist
            if (noPoster) {
                if (this.videoLoaded) {
                    autoplay = 0;
                } else {
                    autoplay = this.core.s.autoplayFirstVideo ? 1 : 0;
                }
            }
    
            if (isVideo.youtube) {
    
                a = '?wmode=opaque&autoplay=' + autoplay + '&enablejsapi=1';
                if (this.core.s.youtubePlayerParams) {
                    a = a + '&' + $.param(this.core.s.youtubePlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-youtube ' + addClass + '" width="560" height="315" src="//www.youtube.com/embed/' + isVideo.youtube[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            } else if (isVideo.vimeo) {
    
                a = '?autoplay=' + autoplay + '&api=1';
                if (this.core.s.vimeoPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vimeoPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-vimeo ' + addClass + '" width="560" height="315"  src="//player.vimeo.com/video/' + isVideo.vimeo[1] + a + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';
    
            } else if (isVideo.dailymotion) {
    
                a = '?wmode=opaque&autoplay=' + autoplay + '&api=postMessage';
                if (this.core.s.dailymotionPlayerParams) {
                    a = a + '&' + $.param(this.core.s.dailymotionPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-dailymotion ' + addClass + '" width="560" height="315" src="//www.dailymotion.com/embed/video/' + isVideo.dailymotion[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            } else if (isVideo.html5) {
                var fL = html.substring(0, 1);
                if (fL === '.' || fL === '#') {
                    html = $(html).html();
                }
    
                video = html;
    
            } else if (isVideo.vk) {
    
                a = '&autoplay=' + autoplay;
                if (this.core.s.vkPlayerParams) {
                    a = a + '&' + $.param(this.core.s.vkPlayerParams);
                }
    
                video = '<iframe class="lg-video-object lg-vk ' + addClass + '" width="560" height="315" src="http://vk.com/video_ext.php?' + isVideo.vk[1] + a + '" frameborder="0" allowfullscreen></iframe>';
    
            }
    
            return video;
        };

        Video.prototype.loadVideoOnclick = function($el){

            var _this = this;
            // check slide has poster
            if ($el.find('.lg-object').hasClass('lg-has-poster') && $el.find('.lg-object').is(':visible')) {

                // check already video element present
                if (!$el.hasClass('lg-has-video')) {

                    $el.addClass('lg-video-playing lg-has-video');

                    var _src;
                    var _html;
                    var _loadVideo = function(_src, _html) {

                        $el.find('.lg-video').append(_this.loadVideo(_src, '', false, _this.core.index, _html));

                        if (_html) {
                            if (_this.core.s.videojs) {
                                try {
                                    videojs(_this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                                        this.play();
                                    });
                                } catch (e) {
                                    console.error('Make sure you have included videojs');
                                }
                            } else {
                                _this.core.$slide.eq(_this.core.index).find('.lg-html5').get(0).play();
                            }
                        }

                    };

                    if (_this.core.s.dynamic) {

                        _src = _this.core.s.dynamicEl[_this.core.index].src;
                        _html = _this.core.s.dynamicEl[_this.core.index].html;

                        _loadVideo(_src, _html);

                    } else {

                        _src = _this.core.$items.eq(_this.core.index).attr('href') || _this.core.$items.eq(_this.core.index).attr('data-src');
                        _html = _this.core.$items.eq(_this.core.index).attr('data-html');

                        _loadVideo(_src, _html);

                    }

                    var $tempImg = $el.find('.lg-object');
                    $el.find('.lg-video').append($tempImg);

                    // @todo loading icon for html5 videos also
                    // for showing the loading indicator while loading video
                    if (!$el.find('.lg-video-object').hasClass('lg-html5')) {
                        $el.removeClass('lg-complete');
                        $el.find('.lg-video-object').on('load.lg error.lg', function() {
                            $el.addClass('lg-complete');
                        });
                    }

                } else {

                    var youtubePlayer = $el.find('.lg-youtube').get(0);
                    var vimeoPlayer = $el.find('.lg-vimeo').get(0);
                    var dailymotionPlayer = $el.find('.lg-dailymotion').get(0);
                    var html5Player = $el.find('.lg-html5').get(0);
                    if (youtubePlayer) {
                        youtubePlayer.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
                    } else if (vimeoPlayer) {
                        try {
                            $f(vimeoPlayer).api('play');
                        } catch (e) {
                            console.error('Make sure you have included froogaloop2 js');
                        }
                    } else if (dailymotionPlayer) {
                        dailymotionPlayer.contentWindow.postMessage('play', '*');

                    } else if (html5Player) {
                        if (_this.core.s.videojs) {
                            try {
                                videojs(html5Player).play();
                            } catch (e) {
                                console.error('Make sure you have included videojs');
                            }
                        } else {
                            html5Player.play();
                        }
                    }

                    $el.addClass('lg-video-playing');

                }
            }
        };
    
        Video.prototype.destroy = function() {
            this.videoLoaded = false;
        };

        function onHasVideo(event, index, src, html) {
            /*jshint validthis:true */
            var _this = this;
            _this.core.$slide.eq(index).find('.lg-video').append(_this.loadVideo(src, 'lg-object', true, index, html));
            if (html) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(_this.core.$slide.eq(index).find('.lg-html5').get(0), _this.core.s.videojsOptions, function() {
                            if (!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                                this.play();
                            }
                        });
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    if(!_this.videoLoaded && _this.core.s.autoplayFirstVideo) {
                        _this.core.$slide.eq(index).find('.lg-html5').get(0).play();
                    }
                }
            }
        }

        function onAferAppendSlide(event, index) {
            /*jshint validthis:true */
            var $videoCont = this.core.$slide.eq(index).find('.lg-video-cont');
            if (!$videoCont.hasClass('lg-has-iframe')) {
                $videoCont.css('max-width', this.core.s.videoMaxWidth);
                this.videoLoaded = true;
            }
        }

        function onBeforeSlide(event, prevIndex, index) {
            /*jshint validthis:true */
            var _this = this;

            var $videoSlide = _this.core.$slide.eq(prevIndex);
            var youtubePlayer = $videoSlide.find('.lg-youtube').get(0);
            var vimeoPlayer = $videoSlide.find('.lg-vimeo').get(0);
            var dailymotionPlayer = $videoSlide.find('.lg-dailymotion').get(0);
            var vkPlayer = $videoSlide.find('.lg-vk').get(0);
            var html5Player = $videoSlide.find('.lg-html5').get(0);
            if (youtubePlayer) {
                youtubePlayer.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
            } else if (vimeoPlayer) {
                try {
                    $f(vimeoPlayer).api('pause');
                } catch (e) {
                    console.error('Make sure you have included froogaloop2 js');
                }
            } else if (dailymotionPlayer) {
                dailymotionPlayer.contentWindow.postMessage('pause', '*');

            } else if (html5Player) {
                if (_this.core.s.videojs) {
                    try {
                        videojs(html5Player).pause();
                    } catch (e) {
                        console.error('Make sure you have included videojs');
                    }
                } else {
                    html5Player.pause();
                }
            } if (vkPlayer) {
                $(vkPlayer).attr('src', $(vkPlayer).attr('src').replace('&autoplay', '&noplay'));
            }

            var _src;
            if (_this.core.s.dynamic) {
                _src = _this.core.s.dynamicEl[index].src;
            } else {
                _src = _this.core.$items.eq(index).attr('href') || _this.core.$items.eq(index).attr('data-src');

            }

            var _isVideo = _this.core.isVideo(_src, index) || {};
            if (_isVideo.youtube || _isVideo.vimeo || _isVideo.dailymotion || _isVideo.vk) {
                _this.core.$outer.addClass('lg-hide-download');
            }

        }
    
        $.fn.lightGallery.modules.video = Video;
    
    })();

}));

/*! lg-zoom - v1.1.0 - 2017-08-08
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var getUseLeft = function() {
        var useLeft = false;
        var isChrome = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        if (isChrome && parseInt(isChrome[2], 10) < 54) {
            useLeft = true;
        }

        return useLeft;
    };

    var defaults = {
        scale: 1,
        zoom: true,
        actualSize: true,
        enableZoomAfter: 300,
        useLeftForZoom: getUseLeft()
    };

    var Zoom = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);

        if (this.core.s.zoom && this.core.doCss()) {
            this.init();

            // Store the zoomable timeout value just to clear it while closing
            this.zoomabletimeout = false;

            // Set the initial value center
            this.pageX = $(window).width() / 2;
            this.pageY = ($(window).height() / 2) + $(window).scrollTop();
        }

        return this;
    };

    Zoom.prototype.init = function() {

        var _this = this;
        var zoomIcons = '<span id="lg-zoom-in" class="lg-icon"></span><span id="lg-zoom-out" class="lg-icon"></span>';

        if (_this.core.s.actualSize) {
            zoomIcons += '<span id="lg-actual-size" class="lg-icon"></span>';
        }

        if (_this.core.s.useLeftForZoom) {
            _this.core.$outer.addClass('lg-use-left-for-zoom');
        } else {
            _this.core.$outer.addClass('lg-use-transition-for-zoom');
        }

        this.core.$outer.find('.lg-toolbar').append(zoomIcons);

        // Add zoomable class
        _this.core.$el.on('onSlideItemLoad.lg.tm.zoom', function(event, index, delay) {

            // delay will be 0 except first time
            var _speed = _this.core.s.enableZoomAfter + delay;

            // set _speed value 0 if gallery opened from direct url and if it is first slide
            if ($('body').hasClass('lg-from-hash') && delay) {

                // will execute only once
                _speed = 0;
            } else {

                // Remove lg-from-hash to enable starting animation.
                $('body').removeClass('lg-from-hash');
            }

            _this.zoomabletimeout = setTimeout(function() {
                _this.core.$slide.eq(index).addClass('lg-zoomable');
            }, _speed + 30);
        });

        var scale = 1;
        /**
         * @desc Image zoom
         * Translate the wrap and scale the image to get better user experience
         *
         * @param {String} scaleVal - Zoom decrement/increment value
         */
        var zoom = function(scaleVal) {

            var $image = _this.core.$outer.find('.lg-current .lg-image');
            var _x;
            var _y;

            // Find offset manually to avoid issue after zoom
            var offsetX = ($(window).width() - $image.prop('offsetWidth')) / 2;
            var offsetY = (($(window).height() - $image.prop('offsetHeight')) / 2) + $(window).scrollTop();

            _x = _this.pageX - offsetX;
            _y = _this.pageY - offsetY;

            var x = (scaleVal - 1) * (_x);
            var y = (scaleVal - 1) * (_y);

            $image.css('transform', 'scale3d(' + scaleVal + ', ' + scaleVal + ', 1)').attr('data-scale', scaleVal);

            if (_this.core.s.useLeftForZoom) {
                $image.parent().css({
                    left: -x + 'px',
                    top: -y + 'px'
                }).attr('data-x', x).attr('data-y', y);
            } else {
                $image.parent().css('transform', 'translate3d(-' + x + 'px, -' + y + 'px, 0)').attr('data-x', x).attr('data-y', y);
            }
        };

        var callScale = function() {
            if (scale > 1) {
                _this.core.$outer.addClass('lg-zoomed');
            } else {
                _this.resetZoom();
            }

            if (scale < 1) {
                scale = 1;
            }

            zoom(scale);
        };

        var actualSize = function(event, $image, index, fromIcon) {
            var w = $image.prop('offsetWidth');
            var nw;
            if (_this.core.s.dynamic) {
                nw = _this.core.s.dynamicEl[index].width || $image[0].naturalWidth || w;
            } else {
                nw = _this.core.$items.eq(index).attr('data-width') || $image[0].naturalWidth || w;
            }

            var _scale;

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                scale = 1;
            } else {
                if (nw > w) {
                    _scale = nw / w;
                    scale = _scale || 2;
                }
            }

            if (fromIcon) {
                _this.pageX = $(window).width() / 2;
                _this.pageY = ($(window).height() / 2) + $(window).scrollTop();
            } else {
                _this.pageX = event.pageX || event.originalEvent.targetTouches[0].pageX;
                _this.pageY = event.pageY || event.originalEvent.targetTouches[0].pageY;
            }

            callScale();
            setTimeout(function() {
                _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');
            }, 10);
        };

        var tapped = false;

        // event triggered after appending slide content
        _this.core.$el.on('onAferAppendSlide.lg.tm.zoom', function(event, index) {

            // Get the current element
            var $image = _this.core.$slide.eq(index).find('.lg-image');

            $image.on('dblclick', function(event) {
                actualSize(event, $image, index);
            });

            $image.on('touchstart', function(event) {
                if (!tapped) {
                    tapped = setTimeout(function() {
                        tapped = null;
                    }, 300);
                } else {
                    clearTimeout(tapped);
                    tapped = null;
                    actualSize(event, $image, index);
                }

                event.preventDefault();
            });

        });

        // Update zoom on resize and orientationchange
        $(window).on('resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom', function() {
            _this.pageX = $(window).width() / 2;
            _this.pageY = ($(window).height() / 2) + $(window).scrollTop();
            zoom(scale);
        });

        $('#lg-zoom-out').on('click.lg', function() {
            if (_this.core.$outer.find('.lg-current .lg-image').length) {
                scale -= _this.core.s.scale;
                callScale();
            }
        });

        $('#lg-zoom-in').on('click.lg', function() {
            if (_this.core.$outer.find('.lg-current .lg-image').length) {
                scale += _this.core.s.scale;
                callScale();
            }
        });

        $('#lg-actual-size').on('click.lg', function(event) {
            actualSize(event, _this.core.$slide.eq(_this.core.index).find('.lg-image'), _this.core.index, true);
        });

        // Reset zoom on slide change
        _this.core.$el.on('onBeforeSlide.lg.tm', function() {
            scale = 1;
            _this.resetZoom();
        });

        // Drag option after zoom
        _this.zoomDrag();

        _this.zoomSwipe();

    };

    // Reset zoom effect
    Zoom.prototype.resetZoom = function() {
        this.core.$outer.removeClass('lg-zoomed');
        this.core.$slide.find('.lg-img-wrap').removeAttr('style data-x data-y');
        this.core.$slide.find('.lg-image').removeAttr('style data-scale');

        // Reset pagx pagy values to center
        this.pageX = $(window).width() / 2;
        this.pageY = ($(window).height() / 2) + $(window).scrollTop();
    };

    Zoom.prototype.zoomSwipe = function() {
        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        _this.core.$slide.on('touchstart.lg', function(e) {

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

                allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
                allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();
                if ((allowX || allowY)) {
                    e.preventDefault();
                    startCoords = {
                        x: e.originalEvent.targetTouches[0].pageX,
                        y: e.originalEvent.targetTouches[0].pageY
                    };
                }
            }

        });

        _this.core.$slide.on('touchmove.lg', function(e) {

            if (_this.core.$outer.hasClass('lg-zoomed')) {

                var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                var distanceX;
                var distanceY;

                e.preventDefault();
                isMoved = true;

                endCoords = {
                    x: e.originalEvent.targetTouches[0].pageX,
                    y: e.originalEvent.targetTouches[0].pageY
                };

                // reset opacity and transition duration
                _this.core.$outer.addClass('lg-zoom-dragging');

                if (allowY) {
                    distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if ((Math.abs(endCoords.x - startCoords.x) > 15) || (Math.abs(endCoords.y - startCoords.y) > 15)) {

                    if (_this.core.s.useLeftForZoom) {
                        _$el.css({
                            left: distanceX + 'px',
                            top: distanceY + 'px'
                        });
                    } else {
                        _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                    }
                }

            }

        });

        _this.core.$slide.on('touchend.lg', function() {
            if (_this.core.$outer.hasClass('lg-zoomed')) {
                if (isMoved) {
                    isMoved = false;
                    _this.core.$outer.removeClass('lg-zoom-dragging');
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);

                }
            }
        });

    };

    Zoom.prototype.zoomDrag = function() {

        var _this = this;
        var startCoords = {};
        var endCoords = {};
        var isDraging = false;
        var isMoved = false;

        // Allow x direction drag
        var allowX = false;

        // Allow Y direction drag
        var allowY = false;

        _this.core.$slide.on('mousedown.lg.zoom', function(e) {

            // execute only on .lg-object
            var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');

            allowY = $image.prop('offsetHeight') * $image.attr('data-scale') > _this.core.$outer.find('.lg').height();
            allowX = $image.prop('offsetWidth') * $image.attr('data-scale') > _this.core.$outer.find('.lg').width();

            if (_this.core.$outer.hasClass('lg-zoomed')) {
                if ($(e.target).hasClass('lg-object') && (allowX || allowY)) {
                    e.preventDefault();
                    startCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };

                    isDraging = true;

                    // ** Fix for webkit cursor issue https://code.google.com/p/chromium/issues/detail?id=26723
                    _this.core.$outer.scrollLeft += 1;
                    _this.core.$outer.scrollLeft -= 1;

                    _this.core.$outer.removeClass('lg-grab').addClass('lg-grabbing');
                }
            }
        });

        $(window).on('mousemove.lg.zoom', function(e) {
            if (isDraging) {
                var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
                var distanceX;
                var distanceY;

                isMoved = true;
                endCoords = {
                    x: e.pageX,
                    y: e.pageY
                };

                // reset opacity and transition duration
                _this.core.$outer.addClass('lg-zoom-dragging');

                if (allowY) {
                    distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
                } else {
                    distanceY = -Math.abs(_$el.attr('data-y'));
                }

                if (allowX) {
                    distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
                } else {
                    distanceX = -Math.abs(_$el.attr('data-x'));
                }

                if (_this.core.s.useLeftForZoom) {
                    _$el.css({
                        left: distanceX + 'px',
                        top: distanceY + 'px'
                    });
                } else {
                    _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
                }
            }
        });

        $(window).on('mouseup.lg.zoom', function(e) {

            if (isDraging) {
                isDraging = false;
                _this.core.$outer.removeClass('lg-zoom-dragging');

                // Fix for chrome mouse move on click
                if (isMoved && ((startCoords.x !== endCoords.x) || (startCoords.y !== endCoords.y))) {
                    endCoords = {
                        x: e.pageX,
                        y: e.pageY
                    };
                    _this.touchendZoom(startCoords, endCoords, allowX, allowY);

                }

                isMoved = false;
            }

            _this.core.$outer.removeClass('lg-grabbing').addClass('lg-grab');

        });
    };

    Zoom.prototype.touchendZoom = function(startCoords, endCoords, allowX, allowY) {

        var _this = this;
        var _$el = _this.core.$slide.eq(_this.core.index).find('.lg-img-wrap');
        var $image = _this.core.$slide.eq(_this.core.index).find('.lg-object');
        var distanceX = (-Math.abs(_$el.attr('data-x'))) + (endCoords.x - startCoords.x);
        var distanceY = (-Math.abs(_$el.attr('data-y'))) + (endCoords.y - startCoords.y);
        var minY = (_this.core.$outer.find('.lg').height() - $image.prop('offsetHeight')) / 2;
        var maxY = Math.abs(($image.prop('offsetHeight') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').height() + minY);
        var minX = (_this.core.$outer.find('.lg').width() - $image.prop('offsetWidth')) / 2;
        var maxX = Math.abs(($image.prop('offsetWidth') * Math.abs($image.attr('data-scale'))) - _this.core.$outer.find('.lg').width() + minX);

        if ((Math.abs(endCoords.x - startCoords.x) > 15) || (Math.abs(endCoords.y - startCoords.y) > 15)) {
            if (allowY) {
                if (distanceY <= -maxY) {
                    distanceY = -maxY;
                } else if (distanceY >= -minY) {
                    distanceY = -minY;
                }
            }

            if (allowX) {
                if (distanceX <= -maxX) {
                    distanceX = -maxX;
                } else if (distanceX >= -minX) {
                    distanceX = -minX;
                }
            }

            if (allowY) {
                _$el.attr('data-y', Math.abs(distanceY));
            } else {
                distanceY = -Math.abs(_$el.attr('data-y'));
            }

            if (allowX) {
                _$el.attr('data-x', Math.abs(distanceX));
            } else {
                distanceX = -Math.abs(_$el.attr('data-x'));
            }

            if (_this.core.s.useLeftForZoom) {
                _$el.css({
                    left: distanceX + 'px',
                    top: distanceY + 'px'
                });
            } else {
                _$el.css('transform', 'translate3d(' + distanceX + 'px, ' + distanceY + 'px, 0)');
            }

        }
    };

    Zoom.prototype.destroy = function() {

        var _this = this;

        // Unbind all events added by lightGallery zoom plugin
        _this.core.$el.off('.lg.zoom');
        $(window).off('.lg.zoom');
        _this.core.$slide.off('.lg.zoom');
        _this.core.$el.off('.lg.tm.zoom');
        _this.resetZoom();
        clearTimeout(_this.zoomabletimeout);
        _this.zoomabletimeout = false;
    };

    $.fn.lightGallery.modules.zoom = Zoom;

})();


}));

/*! lg-hash - v1.0.3 - 2017-10-19
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        hash: true
    };

    var Hash = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);

        if (this.core.s.hash) {
            this.oldHash = window.location.hash;
            this.init();
        }

        return this;
    };

    Hash.prototype.init = function() {
        var _this = this;
        var _hash;

        // Change hash value on after each slide transition
        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {
            if (history.replaceState) {
                history.replaceState(null, null, window.location.pathname + '#lg=' + _this.core.s.galleryId + '&slide=' + index);
            } else {
                window.location.hash = 'lg=' + _this.core.s.galleryId + '&slide=' + index;
            }
        });

        // Listen hash change and change the slide according to slide value
        $(window).on('hashchange.lg.hash', function() {
            _hash = window.location.hash;
            var _idx = parseInt(_hash.split('&slide=')[1], 10);

            // it galleryId doesn't exist in the url close the gallery
            if ((_hash.indexOf('lg=' + _this.core.s.galleryId) > -1)) {
                _this.core.slide(_idx, false, false);
            } else if (_this.core.lGalleryOn) {
                _this.core.destroy();
            }

        });
    };

    Hash.prototype.destroy = function() {

        if (!this.core.s.hash) {
            return;
        }

        // Reset to old hash value
        if (this.oldHash && this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0) {
            if (history.replaceState) {
                history.replaceState(null, null, this.oldHash);
            } else {
                window.location.hash = this.oldHash;
            }
        } else {
            if (history.replaceState) {
                history.replaceState(null, document.title, window.location.pathname + window.location.search);
            } else {
                window.location.hash = '';
            }
        }

        this.core.$el.off('.lg.hash');

    };

    $.fn.lightGallery.modules.hash = Hash;

})();


}));

/*! lg-share - v1.1.0 - 2017-10-03
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        share: true,
        facebook: true,
        facebookDropdownText: 'Facebook',
        twitter: true,
        twitterDropdownText: 'Twitter',
        googlePlus: true,
        googlePlusDropdownText: 'GooglePlus',
        pinterest: true,
        pinterestDropdownText: 'Pinterest'
    };

    var Share = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.share) {
            this.init();
        }

        return this;
    };

    Share.prototype.init = function() {
        var _this = this;
        var shareHtml = '<span id="lg-share" class="lg-icon">' +
            '<ul class="lg-dropdown" style="position: absolute;">';
        shareHtml += _this.core.s.facebook ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.facebookDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.twitter ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.twitterDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.googlePlus ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.googlePlusDropdownText + '</span></a></li>' : '';
        shareHtml += _this.core.s.pinterest ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' + this.core.s.pinterestDropdownText + '</span></a></li>' : '';
        shareHtml += '</ul></span>';

        this.core.$outer.find('.lg-toolbar').append(shareHtml);
        this.core.$outer.find('.lg').append('<div id="lg-dropdown-overlay"></div>');
        $('#lg-share').on('click.lg', function(){
            _this.core.$outer.toggleClass('lg-dropdown-active');
        });

        $('#lg-dropdown-overlay').on('click.lg', function(){
            _this.core.$outer.removeClass('lg-dropdown-active');
        });

        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {

            setTimeout(function() {

                $('#lg-share-facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + (encodeURIComponent(_this.getSahreProps(index, 'facebookShareUrl') || window.location.href)));

                $('#lg-share-twitter').attr('href', 'https://twitter.com/intent/tweet?text=' + _this.getSahreProps(index, 'tweetText') + '&url=' + (encodeURIComponent(_this.getSahreProps(index, 'twitterShareUrl') || window.location.href)));

                $('#lg-share-googleplus').attr('href', 'https://plus.google.com/share?url=' + (encodeURIComponent(_this.getSahreProps(index, 'googleplusShareUrl') || window.location.href)));

                $('#lg-share-pinterest').attr('href', 'http://www.pinterest.com/pin/create/button/?url=' + (encodeURIComponent(_this.getSahreProps(index, 'pinterestShareUrl') || window.location.href)) + '&media=' + encodeURIComponent(_this.getSahreProps(index, 'src')) + '&description=' + _this.getSahreProps(index, 'pinterestText'));

            }, 100);
        });
    };

    Share.prototype.getSahreProps = function(index, prop){
        var shareProp = '';
        if(this.core.s.dynamic) {
            shareProp = this.core.s.dynamicEl[index][prop];
        } else {
            var _href = this.core.$items.eq(index).attr('href');
            var _prop = this.core.$items.eq(index).data(prop);
            shareProp = prop === 'src' ? _href || _prop : _prop;
        }
        return shareProp;
    };

    Share.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.share = Share;

})();



}));

/*!
 * jQuery Masked Input Plugin
 * Copyright (c) 2007 - 2014 Josh Bush (digitalbush.com)
 * Licensed under the MIT license (http://digitalbush.com/projects/masked-input-plugin/#license)
 * Version: 1.4.0
 */
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(a.length<o.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a)},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});

/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = (function () {
'use strict';

var OFI = 'bfred-it:object-fit-images';
var propRegex = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g;
var testImg = typeof Image === 'undefined' ? {style: {'object-position': 1}} : new Image();
var supportsObjectFit = 'object-fit' in testImg.style;
var supportsObjectPosition = 'object-position' in testImg.style;
var supportsOFI = 'background-size' in testImg.style;
var supportsCurrentSrc = typeof testImg.currentSrc === 'string';
var nativeGetAttribute = testImg.getAttribute;
var nativeSetAttribute = testImg.setAttribute;
var autoModeEnabled = false;

function createPlaceholder(w, h) {
	return ("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + w + "' height='" + h + "'%3E%3C/svg%3E");
}

function polyfillCurrentSrc(el) {
	if (el.srcset && !supportsCurrentSrc && window.picturefill) {
		var pf = window.picturefill._;
		// parse srcset with picturefill where currentSrc isn't available
		if (!el[pf.ns] || !el[pf.ns].evaled) {
			// force synchronous srcset parsing
			pf.fillImg(el, {reselect: true});
		}

		if (!el[pf.ns].curSrc) {
			// force picturefill to parse srcset
			el[pf.ns].supported = false;
			pf.fillImg(el, {reselect: true});
		}

		// retrieve parsed currentSrc, if any
		el.currentSrc = el[pf.ns].curSrc || el.src;
	}
}

function getStyle(el) {
	var style = getComputedStyle(el).fontFamily;
	var parsed;
	var props = {};
	while ((parsed = propRegex.exec(style)) !== null) {
		props[parsed[1]] = parsed[2];
	}
	return props;
}

function setPlaceholder(img, width, height) {
	// Default: fill width, no height
	var placeholder = createPlaceholder(width || 1, height || 0);

	// Only set placeholder if it's different
	if (nativeGetAttribute.call(img, 'src') !== placeholder) {
		nativeSetAttribute.call(img, 'src', placeholder);
	}
}

function onImageReady(img, callback) {
	// naturalWidth is only available when the image headers are loaded,
	// this loop will poll it every 100ms.
	if (img.naturalWidth) {
		callback(img);
	} else {
		setTimeout(onImageReady, 100, img, callback);
	}
}

function fixOne(el) {
	var style = getStyle(el);
	var ofi = el[OFI];
	style['object-fit'] = style['object-fit'] || 'fill'; // default value

	// Avoid running where unnecessary, unless OFI had already done its deed
	if (!ofi.img) {
		// fill is the default behavior so no action is necessary
		if (style['object-fit'] === 'fill') {
			return;
		}

		// Where object-fit is supported and object-position isn't (Safari < 10)
		if (
			!ofi.skipTest && // unless user wants to apply regardless of browser support
			supportsObjectFit && // if browser already supports object-fit
			!style['object-position'] // unless object-position is used
		) {
			return;
		}
	}

	// keep a clone in memory while resetting the original to a blank
	if (!ofi.img) {
		ofi.img = new Image(el.width, el.height);
		ofi.img.srcset = nativeGetAttribute.call(el, "data-ofi-srcset") || el.srcset;
		ofi.img.src = nativeGetAttribute.call(el, "data-ofi-src") || el.src;

		// preserve for any future cloneNode calls
		// https://github.com/bfred-it/object-fit-images/issues/53
		nativeSetAttribute.call(el, "data-ofi-src", el.src);
		if (el.srcset) {
			nativeSetAttribute.call(el, "data-ofi-srcset", el.srcset);
		}

		setPlaceholder(el, el.naturalWidth || el.width, el.naturalHeight || el.height);

		// remove srcset because it overrides src
		if (el.srcset) {
			el.srcset = '';
		}
		try {
			keepSrcUsable(el);
		} catch (err) {
			if (window.console) {
				console.warn('https://bit.ly/ofi-old-browser');
			}
		}
	}

	polyfillCurrentSrc(ofi.img);

	el.style.backgroundImage = "url(\"" + ((ofi.img.currentSrc || ofi.img.src).replace(/"/g, '\\"')) + "\")";
	el.style.backgroundPosition = style['object-position'] || 'center';
	el.style.backgroundRepeat = 'no-repeat';
	el.style.backgroundOrigin = 'content-box';

	if (/scale-down/.test(style['object-fit'])) {
		onImageReady(ofi.img, function () {
			if (ofi.img.naturalWidth > el.width || ofi.img.naturalHeight > el.height) {
				el.style.backgroundSize = 'contain';
			} else {
				el.style.backgroundSize = 'auto';
			}
		});
	} else {
		el.style.backgroundSize = style['object-fit'].replace('none', 'auto').replace('fill', '100% 100%');
	}

	onImageReady(ofi.img, function (img) {
		setPlaceholder(el, img.naturalWidth, img.naturalHeight);
	});
}

function keepSrcUsable(el) {
	var descriptors = {
		get: function get(prop) {
			return el[OFI].img[prop ? prop : 'src'];
		},
		set: function set(value, prop) {
			el[OFI].img[prop ? prop : 'src'] = value;
			nativeSetAttribute.call(el, ("data-ofi-" + prop), value); // preserve for any future cloneNode
			fixOne(el);
			return value;
		}
	};
	Object.defineProperty(el, 'src', descriptors);
	Object.defineProperty(el, 'currentSrc', {
		get: function () { return descriptors.get('currentSrc'); }
	});
	Object.defineProperty(el, 'srcset', {
		get: function () { return descriptors.get('srcset'); },
		set: function (ss) { return descriptors.set(ss, 'srcset'); }
	});
}

function hijackAttributes() {
	function getOfiImageMaybe(el, name) {
		return el[OFI] && el[OFI].img && (name === 'src' || name === 'srcset') ? el[OFI].img : el;
	}
	if (!supportsObjectPosition) {
		HTMLImageElement.prototype.getAttribute = function (name) {
			return nativeGetAttribute.call(getOfiImageMaybe(this, name), name);
		};

		HTMLImageElement.prototype.setAttribute = function (name, value) {
			return nativeSetAttribute.call(getOfiImageMaybe(this, name), name, String(value));
		};
	}
}

function fix(imgs, opts) {
	var startAutoMode = !autoModeEnabled && !imgs;
	opts = opts || {};
	imgs = imgs || 'img';

	if ((supportsObjectPosition && !opts.skipTest) || !supportsOFI) {
		return false;
	}

	// use imgs as a selector or just select all images
	if (imgs === 'img') {
		imgs = document.getElementsByTagName('img');
	} else if (typeof imgs === 'string') {
		imgs = document.querySelectorAll(imgs);
	} else if (!('length' in imgs)) {
		imgs = [imgs];
	}

	// apply fix to all
	for (var i = 0; i < imgs.length; i++) {
		imgs[i][OFI] = imgs[i][OFI] || {
			skipTest: opts.skipTest
		};
		fixOne(imgs[i]);
	}

	if (startAutoMode) {
		document.body.addEventListener('load', function (e) {
			if (e.target.tagName === 'IMG') {
				fix(e.target, {
					skipTest: opts.skipTest
				});
			}
		}, true);
		autoModeEnabled = true;
		imgs = 'img'; // reset to a generic selector for watchMQ
	}

	// if requested, watch media queries for object-fit change
	if (opts.watchMQ) {
		window.addEventListener('resize', fix.bind(null, imgs, {
			skipTest: opts.skipTest
		}));
	}
}

fix.supportsObjectFit = supportsObjectFit;
fix.supportsObjectPosition = supportsObjectPosition;

hijackAttributes();

return fix;

}());

/**
 * Swiper 4.0.7
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * http://www.idangero.us/swiper/
 *
 * Copyright 2014-2017 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: November 28, 2017
 */

(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Swiper = factory());
}(this, (function () { 'use strict';

var w;
if (typeof window === 'undefined') {
  w = {
    navigator: {
      userAgent: '',
    },
    location: {},
    history: {},
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    getComputedStyle: function getComputedStyle() {
      return {};
    },
    Image: function Image() {},
    Date: function Date() {},
    screen: {},
  };
} else {
  w = window;
}

var win = w;

/**
 * Dom7 2.0.1
 * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
 * http://framework7.io/docs/dom.html
 *
 * Copyright 2017, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under MIT
 *
 * Released on: October 2, 2017
 */
var Dom7 = function Dom7(arr) {
  var self = this;
  // Create array-like object
  for (var i = 0; i < arr.length; i += 1) {
    self[i] = arr[i];
  }
  self.length = arr.length;
  // Return collection with methods
  return this;
};

function $$1(selector, context) {
  var arr = [];
  var i = 0;
  if (selector && !context) {
    if (selector instanceof Dom7) {
      return selector;
    }
  }
  if (selector) {
      // String
    if (typeof selector === 'string') {
      var els;
      var tempParent;
      var html = selector.trim();
      if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
        var toCreate = 'div';
        if (html.indexOf('<li') === 0) { toCreate = 'ul'; }
        if (html.indexOf('<tr') === 0) { toCreate = 'tbody'; }
        if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) { toCreate = 'tr'; }
        if (html.indexOf('<tbody') === 0) { toCreate = 'table'; }
        if (html.indexOf('<option') === 0) { toCreate = 'select'; }
        tempParent = document.createElement(toCreate);
        tempParent.innerHTML = html;
        for (i = 0; i < tempParent.childNodes.length; i += 1) {
          arr.push(tempParent.childNodes[i]);
        }
      } else {
        if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
          // Pure ID selector
          els = [document.getElementById(selector.trim().split('#')[1])];
        } else {
          // Other selectors
          els = (context || document).querySelectorAll(selector.trim());
        }
        for (i = 0; i < els.length; i += 1) {
          if (els[i]) { arr.push(els[i]); }
        }
      }
    } else if (selector.nodeType || selector === window || selector === document) {
      // Node/element
      arr.push(selector);
    } else if (selector.length > 0 && selector[0].nodeType) {
      // Array of elements or instance of Dom
      for (i = 0; i < selector.length; i += 1) {
        arr.push(selector[i]);
      }
    }
  }
  return new Dom7(arr);
}

$$1.fn = Dom7.prototype;
$$1.Class = Dom7;
$$1.Dom7 = Dom7;

function unique(arr) {
  var uniqueArray = [];
  for (var i = 0; i < arr.length; i += 1) {
    if (uniqueArray.indexOf(arr[i]) === -1) { uniqueArray.push(arr[i]); }
  }
  return uniqueArray;
}
// Classes and attributes
function addClass(className) {
  var this$1 = this;

  if (typeof className === 'undefined') {
    return this;
  }
  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.add(classes[i]); }
    }
  }
  return this;
}
function removeClass(className) {
  var this$1 = this;

  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.remove(classes[i]); }
    }
  }
  return this;
}
function hasClass(className) {
  if (!this[0]) { return false; }
  return this[0].classList.contains(className);
}
function toggleClass(className) {
  var this$1 = this;

  var classes = className.split(' ');
  for (var i = 0; i < classes.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      if (typeof this$1[j].classList !== 'undefined') { this$1[j].classList.toggle(classes[i]); }
    }
  }
  return this;
}
function attr(attrs, value) {
  var arguments$1 = arguments;
  var this$1 = this;

  if (arguments.length === 1 && typeof attrs === 'string') {
    // Get attr
    if (this[0]) { return this[0].getAttribute(attrs); }
    return undefined;
  }

  // Set attrs
  for (var i = 0; i < this.length; i += 1) {
    if (arguments$1.length === 2) {
      // String
      this$1[i].setAttribute(attrs, value);
    } else {
      // Object
      // eslint-disable-next-line
      for (var attrName in attrs) {
        this$1[i][attrName] = attrs[attrName];
        this$1[i].setAttribute(attrName, attrs[attrName]);
      }
    }
  }
  return this;
}
// eslint-disable-next-line
function removeAttr(attr) {
  var this$1 = this;

  for (var i = 0; i < this.length; i += 1) {
    this$1[i].removeAttribute(attr);
  }
  return this;
}
function data(key, value) {
  var this$1 = this;

  var el;
  if (typeof value === 'undefined') {
    el = this[0];
    // Get value
    if (el) {
      if (el.dom7ElementDataStorage && (key in el.dom7ElementDataStorage)) {
        return el.dom7ElementDataStorage[key];
      }

      var dataKey = el.getAttribute(("data-" + key));
      if (dataKey) {
        return dataKey;
      }
      return undefined;
    }
    return undefined;
  }

  // Set value
  for (var i = 0; i < this.length; i += 1) {
    el = this$1[i];
    if (!el.dom7ElementDataStorage) { el.dom7ElementDataStorage = {}; }
    el.dom7ElementDataStorage[key] = value;
  }
  return this;
}
// Transforms
// eslint-disable-next-line
function transform(transform) {
  var this$1 = this;

  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this$1[i].style;
    elStyle.webkitTransform = transform;
    elStyle.transform = transform;
  }
  return this;
}
function transition(duration) {
  var this$1 = this;

  if (typeof duration !== 'string') {
    duration = duration + "ms"; // eslint-disable-line
  }
  for (var i = 0; i < this.length; i += 1) {
    var elStyle = this$1[i].style;
    elStyle.webkitTransitionDuration = duration;
    elStyle.transitionDuration = duration;
  }
  return this;
}
// Events
function on() {
  var this$1 = this;
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var eventType = args[0];
  var targetSelector = args[1];
  var listener = args[2];
  var capture = args[3];
  if (typeof args[1] === 'function') {
    var assign;
    (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
    targetSelector = undefined;
  }
  if (!capture) { capture = false; }

  function handleLiveEvent(e) {
    var target = e.target;
    if (!target) { return; }
    var eventData = e.target.dom7EventData || [];
    eventData.unshift(e);
    if ($$1(target).is(targetSelector)) { listener.apply(target, eventData); }
    else {
      var parents = $$1(target).parents(); // eslint-disable-line
      for (var k = 0; k < parents.length; k += 1) {
        if ($$1(parents[k]).is(targetSelector)) { listener.apply(parents[k], eventData); }
      }
    }
  }
  function handleEvent(e) {
    var eventData = e && e.target ? e.target.dom7EventData || [] : [];
    eventData.unshift(e);
    listener.apply(this, eventData);
  }
  var events = eventType.split(' ');
  var j;
  for (var i = 0; i < this.length; i += 1) {
    var el = this$1[i];
    if (!targetSelector) {
      for (j = 0; j < events.length; j += 1) {
        if (!el.dom7Listeners) { el.dom7Listeners = []; }
        el.dom7Listeners.push({
          type: eventType,
          listener: listener,
          proxyListener: handleEvent,
        });
        el.addEventListener(events[j], handleEvent, capture);
      }
    } else {
      // Live events
      for (j = 0; j < events.length; j += 1) {
        if (!el.dom7LiveListeners) { el.dom7LiveListeners = []; }
        el.dom7LiveListeners.push({
          type: eventType,
          listener: listener,
          proxyListener: handleLiveEvent,
        });
        el.addEventListener(events[j], handleLiveEvent, capture);
      }
    }
  }
  return this;
}
function off() {
  var this$1 = this;
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var eventType = args[0];
  var targetSelector = args[1];
  var listener = args[2];
  var capture = args[3];
  if (typeof args[1] === 'function') {
    var assign;
    (assign = args, eventType = assign[0], listener = assign[1], capture = assign[2]);
    targetSelector = undefined;
  }
  if (!capture) { capture = false; }

  var events = eventType.split(' ');
  for (var i = 0; i < events.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      var el = this$1[j];
      if (!targetSelector) {
        if (el.dom7Listeners) {
          for (var k = 0; k < el.dom7Listeners.length; k += 1) {
            if (listener) {
              if (el.dom7Listeners[k].listener === listener) {
                el.removeEventListener(events[i], el.dom7Listeners[k].proxyListener, capture);
              }
            } else if (el.dom7Listeners[k].type === events[i]) {
              el.removeEventListener(events[i], el.dom7Listeners[k].proxyListener, capture);
            }
          }
        }
      } else if (el.dom7LiveListeners) {
        for (var k$1 = 0; k$1 < el.dom7LiveListeners.length; k$1 += 1) {
          if (listener) {
            if (el.dom7LiveListeners[k$1].listener === listener) {
              el.removeEventListener(events[i], el.dom7LiveListeners[k$1].proxyListener, capture);
            }
          } else if (el.dom7LiveListeners[k$1].type === events[i]) {
            el.removeEventListener(events[i], el.dom7LiveListeners[k$1].proxyListener, capture);
          }
        }
      }
    }
  }
  return this;
}
function trigger() {
  var this$1 = this;
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var events = args[0].split(' ');
  var eventData = args[1];
  for (var i = 0; i < events.length; i += 1) {
    for (var j = 0; j < this.length; j += 1) {
      var evt = (void 0);
      try {
        evt = new window.CustomEvent(events[i], {
          detail: eventData,
          bubbles: true,
          cancelable: true,
        });
      } catch (e) {
        evt = document.createEvent('Event');
        evt.initEvent(events[i], true, true);
        evt.detail = eventData;
      }
      // eslint-disable-next-line
      this$1[j].dom7EventData = args.filter(function (data, dataIndex) { return dataIndex > 0; });
      this$1[j].dispatchEvent(evt);
      this$1[j].dom7EventData = [];
      delete this$1[j].dom7EventData;
    }
  }
  return this;
}
function transitionEnd(callback) {
  var events = ['webkitTransitionEnd', 'transitionend'];
  var dom = this;
  var i;
  function fireCallBack(e) {
    /* jshint validthis:true */
    if (e.target !== this) { return; }
    callback.call(this, e);
    for (i = 0; i < events.length; i += 1) {
      dom.off(events[i], fireCallBack);
    }
  }
  if (callback) {
    for (i = 0; i < events.length; i += 1) {
      dom.on(events[i], fireCallBack);
    }
  }
  return this;
}
function outerWidth(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var styles = this.styles();
      return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
    }
    return this[0].offsetWidth;
  }
  return null;
}
function outerHeight(includeMargins) {
  if (this.length > 0) {
    if (includeMargins) {
      // eslint-disable-next-line
      var styles = this.styles();
      return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
    }
    return this[0].offsetHeight;
  }
  return null;
}
function offset() {
  if (this.length > 0) {
    var el = this[0];
    var box = el.getBoundingClientRect();
    var body = document.body;
    var clientTop = el.clientTop || body.clientTop || 0;
    var clientLeft = el.clientLeft || body.clientLeft || 0;
    var scrollTop = el === window ? window.scrollY : el.scrollTop;
    var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
    return {
      top: (box.top + scrollTop) - clientTop,
      left: (box.left + scrollLeft) - clientLeft,
    };
  }

  return null;
}
function styles() {
  if (this[0]) { return window.getComputedStyle(this[0], null); }
  return {};
}
function css(props, value) {
  var this$1 = this;

  var i;
  if (arguments.length === 1) {
    if (typeof props === 'string') {
      if (this[0]) { return window.getComputedStyle(this[0], null).getPropertyValue(props); }
    } else {
      for (i = 0; i < this.length; i += 1) {
        // eslint-disable-next-line
        for (var prop in props) {
          this$1[i].style[prop] = props[prop];
        }
      }
      return this;
    }
  }
  if (arguments.length === 2 && typeof props === 'string') {
    for (i = 0; i < this.length; i += 1) {
      this$1[i].style[props] = value;
    }
    return this;
  }
  return this;
}

// Iterate over the collection passing elements to `callback`
function each(callback) {
  var this$1 = this;

  // Don't bother continuing without a callback
  if (!callback) { return this; }
  // Iterate over the current collection
  for (var i = 0; i < this.length; i += 1) {
    // If the callback returns false
    if (callback.call(this$1[i], i, this$1[i]) === false) {
      // End the loop early
      return this$1;
    }
  }
  // Return `this` to allow chained DOM operations
  return this;
}
// eslint-disable-next-line
function html(html) {
  var this$1 = this;

  if (typeof html === 'undefined') {
    return this[0] ? this[0].innerHTML : undefined;
  }

  for (var i = 0; i < this.length; i += 1) {
    this$1[i].innerHTML = html;
  }
  return this;
}
// eslint-disable-next-line
function text(text) {
  var this$1 = this;

  if (typeof text === 'undefined') {
    if (this[0]) {
      return this[0].textContent.trim();
    }
    return null;
  }

  for (var i = 0; i < this.length; i += 1) {
    this$1[i].textContent = text;
  }
  return this;
}
function is(selector) {
  var el = this[0];
  var compareWith;
  var i;
  if (!el || typeof selector === 'undefined') { return false; }
  if (typeof selector === 'string') {
    if (el.matches) { return el.matches(selector); }
    else if (el.webkitMatchesSelector) { return el.webkitMatchesSelector(selector); }
    else if (el.msMatchesSelector) { return el.msMatchesSelector(selector); }

    compareWith = $$1(selector);
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) { return true; }
    }
    return false;
  } else if (selector === document) { return el === document; }
  else if (selector === window) { return el === window; }

  if (selector.nodeType || selector instanceof Dom7) {
    compareWith = selector.nodeType ? [selector] : selector;
    for (i = 0; i < compareWith.length; i += 1) {
      if (compareWith[i] === el) { return true; }
    }
    return false;
  }
  return false;
}
function index() {
  var child = this[0];
  var i;
  if (child) {
    i = 0;
    // eslint-disable-next-line
    while ((child = child.previousSibling) !== null) {
      if (child.nodeType === 1) { i += 1; }
    }
    return i;
  }
  return undefined;
}
// eslint-disable-next-line
function eq(index) {
  if (typeof index === 'undefined') { return this; }
  var length = this.length;
  var returnIndex;
  if (index > length - 1) {
    return new Dom7([]);
  }
  if (index < 0) {
    returnIndex = length + index;
    if (returnIndex < 0) { return new Dom7([]); }
    return new Dom7([this[returnIndex]]);
  }
  return new Dom7([this[index]]);
}
function append() {
  var this$1 = this;
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var newChild;

  for (var k = 0; k < args.length; k += 1) {
    newChild = args[k];
    for (var i = 0; i < this.length; i += 1) {
      if (typeof newChild === 'string') {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = newChild;
        while (tempDiv.firstChild) {
          this$1[i].appendChild(tempDiv.firstChild);
        }
      } else if (newChild instanceof Dom7) {
        for (var j = 0; j < newChild.length; j += 1) {
          this$1[i].appendChild(newChild[j]);
        }
      } else {
        this$1[i].appendChild(newChild);
      }
    }
  }

  return this;
}
 function prepend(newChild) {
  var this$1 = this;

  var i;
  var j;
  for (i = 0; i < this.length; i += 1) {
    if (typeof newChild === 'string') {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = newChild;
      for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
        this$1[i].insertBefore(tempDiv.childNodes[j], this$1[i].childNodes[0]);
      }
    } else if (newChild instanceof Dom7) {
      for (j = 0; j < newChild.length; j += 1) {
        this$1[i].insertBefore(newChild[j], this$1[i].childNodes[0]);
      }
    } else {
      this$1[i].insertBefore(newChild, this$1[i].childNodes[0]);
    }
  }
  return this;
}
 function next(selector) {
  if (this.length > 0) {
    if (selector) {
      if (this[0].nextElementSibling && $$1(this[0].nextElementSibling).is(selector)) {
        return new Dom7([this[0].nextElementSibling]);
      }
      return new Dom7([]);
    }

    if (this[0].nextElementSibling) { return new Dom7([this[0].nextElementSibling]); }
    return new Dom7([]);
  }
  return new Dom7([]);
}
function nextAll(selector) {
  var nextEls = [];
  var el = this[0];
  if (!el) { return new Dom7([]); }
  while (el.nextElementSibling) {
    var next = el.nextElementSibling; // eslint-disable-line
    if (selector) {
      if ($$1(next).is(selector)) { nextEls.push(next); }
    } else { nextEls.push(next); }
    el = next;
  }
  return new Dom7(nextEls);
}
function prev(selector) {
  if (this.length > 0) {
    var el = this[0];
    if (selector) {
      if (el.previousElementSibling && $$1(el.previousElementSibling).is(selector)) {
        return new Dom7([el.previousElementSibling]);
      }
      return new Dom7([]);
    }

    if (el.previousElementSibling) { return new Dom7([el.previousElementSibling]); }
    return new Dom7([]);
  }
  return new Dom7([]);
}
function prevAll(selector) {
  var prevEls = [];
  var el = this[0];
  if (!el) { return new Dom7([]); }
  while (el.previousElementSibling) {
    var prev = el.previousElementSibling; // eslint-disable-line
    if (selector) {
      if ($$1(prev).is(selector)) { prevEls.push(prev); }
    } else { prevEls.push(prev); }
    el = prev;
  }
  return new Dom7(prevEls);
}
function parent(selector) {
  var this$1 = this;

  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    if (this$1[i].parentNode !== null) {
      if (selector) {
        if ($$1(this$1[i].parentNode).is(selector)) { parents.push(this$1[i].parentNode); }
      } else {
        parents.push(this$1[i].parentNode);
      }
    }
  }
  return $$1(unique(parents));
}
function parents(selector) {
  var this$1 = this;

  var parents = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var parent = this$1[i].parentNode; // eslint-disable-line
    while (parent) {
      if (selector) {
        if ($$1(parent).is(selector)) { parents.push(parent); }
      } else {
        parents.push(parent);
      }
      parent = parent.parentNode;
    }
  }
  return $$1(unique(parents));
}
function closest(selector) {
  var closest = this; // eslint-disable-line
  if (typeof selector === 'undefined') {
    return new Dom7([]);
  }
  if (!closest.is(selector)) {
    closest = closest.parents(selector).eq(0);
  }
  return closest;
}
function find(selector) {
  var this$1 = this;

  var foundElements = [];
  for (var i = 0; i < this.length; i += 1) {
    var found = this$1[i].querySelectorAll(selector);
    for (var j = 0; j < found.length; j += 1) {
      foundElements.push(found[j]);
    }
  }
  return new Dom7(foundElements);
}
function children(selector) {
  var this$1 = this;

  var children = []; // eslint-disable-line
  for (var i = 0; i < this.length; i += 1) {
    var childNodes = this$1[i].childNodes;

    for (var j = 0; j < childNodes.length; j += 1) {
      if (!selector) {
        if (childNodes[j].nodeType === 1) { children.push(childNodes[j]); }
      } else if (childNodes[j].nodeType === 1 && $$1(childNodes[j]).is(selector)) {
        children.push(childNodes[j]);
      }
    }
  }
  return new Dom7(unique(children));
}
function remove() {
  var this$1 = this;

  for (var i = 0; i < this.length; i += 1) {
    if (this$1[i].parentNode) { this$1[i].parentNode.removeChild(this$1[i]); }
  }
  return this;
}
function add() {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  var dom = this;
  var i;
  var j;
  for (i = 0; i < args.length; i += 1) {
    var toAdd = $$1(args[i]);
    for (j = 0; j < toAdd.length; j += 1) {
      dom[dom.length] = toAdd[j];
      dom.length += 1;
    }
  }
  return dom;
}
var noTrigger = ('resize scroll').split(' ');

var Methods = {
  addClass: addClass,
  removeClass: removeClass,
  hasClass: hasClass,
  toggleClass: toggleClass,
  attr: attr,
  removeAttr: removeAttr,
  data: data,
  transform: transform,
  transition: transition,
  on: on,
  off: off,
  trigger: trigger,
  transitionEnd: transitionEnd,
  outerWidth: outerWidth,
  outerHeight: outerHeight,
  offset: offset,
  css: css,
  each: each,
  html: html,
  text: text,
  is: is,
  index: index,
  eq: eq,
  append: append,
  prepend: prepend,
  next: next,
  nextAll: nextAll,
  prev: prev,
  prevAll: prevAll,
  parent: parent,
  parents: parents,
  closest: closest,
  find: find,
  children: children,
  remove: remove,
  add: add,
  styles: styles,
};

Object.keys(Methods).forEach(function (methodName) {
  $$1.fn[methodName] = Methods[methodName];
});

var Utils = {
  deleteProps: function deleteProps(obj) {
    var object = obj;
    Object.keys(object).forEach(function (key) {
      try {
        object[key] = null;
      } catch (e) {
        // no getter for object
      }
      try {
        delete object[key];
      } catch (e) {
        // something got wrong
      }
    });
  },
  nextTick: function nextTick(callback, delay) {
    if ( delay === void 0 ) delay = 0;

    return setTimeout(callback, delay);
  },
  now: function now() {
    return Date.now();
  },
  getTranslate: function getTranslate(el, axis) {
    if ( axis === void 0 ) axis = 'x';

    var matrix;
    var curTransform;
    var transformMatrix;

    var curStyle = win.getComputedStyle(el, null);

    if (win.WebKitCSSMatrix) {
      curTransform = curStyle.transform || curStyle.webkitTransform;
      if (curTransform.split(',').length > 6) {
        curTransform = curTransform.split(', ').map(function (a) { return a.replace(',', '.'); }).join(', ');
      }
      // Some old versions of Webkit choke when 'none' is passed; pass
      // empty string instead in this case
      transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
    } else {
      transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
      matrix = transformMatrix.toString().split(',');
    }

    if (axis === 'x') {
      // Latest Chrome and webkits Fix
      if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m41; }
      // Crazy IE10 Matrix
      else if (matrix.length === 16) { curTransform = parseFloat(matrix[12]); }
      // Normal Browsers
      else { curTransform = parseFloat(matrix[4]); }
    }
    if (axis === 'y') {
      // Latest Chrome and webkits Fix
      if (win.WebKitCSSMatrix) { curTransform = transformMatrix.m42; }
      // Crazy IE10 Matrix
      else if (matrix.length === 16) { curTransform = parseFloat(matrix[13]); }
      // Normal Browsers
      else { curTransform = parseFloat(matrix[5]); }
    }
    return curTransform || 0;
  },
  parseUrlQuery: function parseUrlQuery(url) {
    var query = {};
    var urlToParse = url || win.location.href;
    var i;
    var params;
    var param;
    var length;
    if (typeof urlToParse === 'string' && urlToParse.length) {
      urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
      params = urlToParse.split('&').filter(function (paramsPart) { return paramsPart !== ''; });
      length = params.length;

      for (i = 0; i < length; i += 1) {
        param = params[i].replace(/#\S+/g, '').split('=');
        query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
      }
    }
    return query;
  },
  isObject: function isObject(o) {
    return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
  },
  extend: function extend() {
    var args = [], len$1 = arguments.length;
    while ( len$1-- ) args[ len$1 ] = arguments[ len$1 ];

    var to = Object(args[0]);
    for (var i = 1; i < args.length; i += 1) {
      var nextSource = args[i];
      if (nextSource !== undefined && nextSource !== null) {
        var keysArray = Object.keys(Object(nextSource));
        for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
          var nextKey = keysArray[nextIndex];
          var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
          if (desc !== undefined && desc.enumerable) {
            if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
              to[nextKey] = {};
              Utils.extend(to[nextKey], nextSource[nextKey]);
            } else {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }
    }
    return to;
  },
};

var d;
if (typeof document === 'undefined') {
  d = {
    addEventListener: function addEventListener() {},
    removeEventListener: function removeEventListener() {},
    activeElement: {
      blur: function blur() {},
      nodeName: '',
    },
    querySelector: function querySelector() {
      return {};
    },
    querySelectorAll: function querySelectorAll() {
      return [];
    },
    createElement: function createElement() {
      return {
        style: {},
        setAttribute: function setAttribute() {},
        getElementsByTagName: function getElementsByTagName() {
          return [];
        },
      };
    },
    location: { hash: '' },
  };
} else {
  d = document;
}

var doc = d;

var Support = (function Support() {
  return {
    touch: (win.Modernizr && win.Modernizr.touch === true) || (function checkTouch() {
      return !!(('ontouchstart' in win) || (win.DocumentTouch && doc instanceof win.DocumentTouch));
    }()),

    transforms3d: (win.Modernizr && win.Modernizr.csstransforms3d === true) || (function checkTransforms3d() {
      var div = doc.createElement('div').style;
      return ('webkitPerspective' in div || 'MozPerspective' in div || 'OPerspective' in div || 'MsPerspective' in div || 'perspective' in div);
    }()),

    flexbox: (function checkFlexbox() {
      var div = doc.createElement('div').style;
      var styles = ('alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient').split(' ');
      for (var i = 0; i < styles.length; i += 1) {
        if (styles[i] in div) { return true; }
      }
      return false;
    }()),

    observer: (function checkObserver() {
      return ('MutationObserver' in win || 'WebkitMutationObserver' in win);
    }()),

    passiveListener: (function checkPassiveListener() {
      var supportsPassive = false;
      try {
        var opts = Object.defineProperty({}, 'passive', {
          get: function get() {
            supportsPassive = true;
          },
        });
        win.addEventListener('testPassiveListener', null, opts);
      } catch (e) {
        // No support
      }
      return supportsPassive;
    }()),

    gestures: (function checkGestures() {
      return 'ongesturestart' in win;
    }()),
  };
}());

var SwiperClass = function SwiperClass(params) {
  if ( params === void 0 ) params = {};

  var self = this;
  self.params = params;

  // Events
  self.eventsListeners = {};

  if (self.params && self.params.on) {
    Object.keys(self.params.on).forEach(function (eventName) {
      self.on(eventName, self.params.on[eventName]);
    });
  }
};

var staticAccessors = { components: {} };
SwiperClass.prototype.on = function on (events, handler) {
  var self = this;
  if (typeof handler !== 'function') { return self; }
  events.split(' ').forEach(function (event) {
    if (!self.eventsListeners[event]) { self.eventsListeners[event] = []; }
    self.eventsListeners[event].push(handler);
  });
  return self;
};
SwiperClass.prototype.once = function once (events, handler) {
  var self = this;
  if (typeof handler !== 'function') { return self; }
  function onceHandler() {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

    handler.apply(self, args);
    self.off(events, onceHandler);
  }
  return self.on(events, onceHandler);
};
SwiperClass.prototype.off = function off (events, handler) {
  var self = this;
  events.split(' ').forEach(function (event) {
    if (typeof handler === 'undefined') {
      self.eventsListeners[event] = [];
    } else {
      self.eventsListeners[event].forEach(function (eventHandler, index) {
        if (eventHandler === handler) {
          self.eventsListeners[event].splice(index, 1);
        }
      });
    }
  });
  return self;
};
SwiperClass.prototype.emit = function emit () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

  var self = this;
  if (!self.eventsListeners) { return self; }
  var events;
  var data;
  var context;
  if (typeof args[0] === 'string' || Array.isArray(args[0])) {
    events = args[0];
    data = args.slice(1, args.length);
    context = self;
  } else {
    events = args[0].events;
    data = args[0].data;
    context = args[0].context || self;
  }
  var eventsArray = Array.isArray(events) ? events : events.split(' ');
  eventsArray.forEach(function (event) {
    if (self.eventsListeners[event]) {
      var handlers = [];
      self.eventsListeners[event].forEach(function (eventHandler) {
        handlers.push(eventHandler);
      });
      handlers.forEach(function (eventHandler) {
        eventHandler.apply(context, data);
      });
    }
  });
  return self;
};
SwiperClass.prototype.useModulesParams = function useModulesParams (instanceParams) {
  var instance = this;
  if (!instance.modules) { return; }
  Object.keys(instance.modules).forEach(function (moduleName) {
    var module = instance.modules[moduleName];
    // Extend params
    if (module.params) {
      Utils.extend(instanceParams, module.params);
    }
  });
};
SwiperClass.prototype.useModules = function useModules (modulesParams) {
    if ( modulesParams === void 0 ) modulesParams = {};

  var instance = this;
  if (!instance.modules) { return; }
  Object.keys(instance.modules).forEach(function (moduleName) {
    var module = instance.modules[moduleName];
    var moduleParams = modulesParams[moduleName] || {};
    // Extend instance methods and props
    if (module.instance) {
      Object.keys(module.instance).forEach(function (modulePropName) {
        var moduleProp = module.instance[modulePropName];
        if (typeof moduleProp === 'function') {
          instance[modulePropName] = moduleProp.bind(instance);
        } else {
          instance[modulePropName] = moduleProp;
        }
      });
    }
    // Add event listeners
    if (module.on && instance.on) {
      Object.keys(module.on).forEach(function (moduleEventName) {
        instance.on(moduleEventName, module.on[moduleEventName]);
      });
    }

    // Module create callback
    if (module.create) {
      module.create.bind(instance)(moduleParams);
    }
  });
};
staticAccessors.components.set = function (components) {
  var Class = this;
  if (!Class.use) { return; }
  Class.use(components);
};
SwiperClass.installModule = function installModule (module) {
    var params = [], len = arguments.length - 1;
    while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

  var Class = this;
  if (!Class.prototype.modules) { Class.prototype.modules = {}; }
  var name = module.name || (((Object.keys(Class.prototype.modules).length) + "_" + (Utils.now())));
  Class.prototype.modules[name] = module;
  // Prototype
  if (module.proto) {
    Object.keys(module.proto).forEach(function (key) {
      Class.prototype[key] = module.proto[key];
    });
  }
  // Class
  if (module.static) {
    Object.keys(module.static).forEach(function (key) {
      Class[key] = module.static[key];
    });
  }
  // Callback
  if (module.install) {
    module.install.apply(Class, params);
  }
  return Class;
};
SwiperClass.use = function use (module) {
    var params = [], len = arguments.length - 1;
    while ( len-- > 0 ) params[ len ] = arguments[ len + 1 ];

  var Class = this;
  if (Array.isArray(module)) {
    module.forEach(function (m) { return Class.installModule(m); });
    return Class;
  }
  return Class.installModule.apply(Class, [ module ].concat( params ));
};

Object.defineProperties( SwiperClass, staticAccessors );

var updateSize = function () {
  var swiper = this;
  var width;
  var height;
  var $el = swiper.$el;
  if (typeof swiper.params.width !== 'undefined') {
    width = swiper.params.width;
  } else {
    width = $el[0].clientWidth;
  }
  if (typeof swiper.params.height !== 'undefined') {
    height = swiper.params.height;
  } else {
    height = $el[0].clientHeight;
  }
  if ((width === 0 && swiper.isHorizontal()) || (height === 0 && swiper.isVertical())) {
    return;
  }

  // Subtract paddings
  width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
  height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);

  Utils.extend(swiper, {
    width: width,
    height: height,
    size: swiper.isHorizontal() ? width : height,
  });
};

var updateSlides = function () {
  var swiper = this;
  var params = swiper.params;

  var $wrapperEl = swiper.$wrapperEl;
  var swiperSize = swiper.size;
  var rtl = swiper.rtl;
  var wrongRTL = swiper.wrongRTL;
  var slides = $wrapperEl.children(("." + (swiper.params.slideClass)));
  var isVirtual = swiper.virtual && params.virtual.enabled;
  var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
  var snapGrid = [];
  var slidesGrid = [];
  var slidesSizesGrid = [];

  var offsetBefore = params.slidesOffsetBefore;
  if (typeof offsetBefore === 'function') {
    offsetBefore = params.slidesOffsetBefore.call(swiper);
  }

  var offsetAfter = params.slidesOffsetAfter;
  if (typeof offsetAfter === 'function') {
    offsetAfter = params.slidesOffsetAfter.call(swiper);
  }

  var previousSlidesLength = slidesLength;
  var previousSnapGridLength = swiper.snapGrid.length;
  var previousSlidesGridLength = swiper.snapGrid.length;

  var spaceBetween = params.spaceBetween;
  var slidePosition = -offsetBefore;
  var prevSlideSize = 0;
  var index = 0;
  if (typeof swiperSize === 'undefined') {
    return;
  }
  if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
    spaceBetween = (parseFloat(spaceBetween.replace('%', '')) / 100) * swiperSize;
  }

  swiper.virtualSize = -spaceBetween;

  // reset margins
  if (rtl) { slides.css({ marginLeft: '', marginTop: '' }); }
  else { slides.css({ marginRight: '', marginBottom: '' }); }

  var slidesNumberEvenToRows;
  if (params.slidesPerColumn > 1) {
    if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
      slidesNumberEvenToRows = slidesLength;
    } else {
      slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
    }
    if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
      slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
    }
  }

  // Calc slides
  var slideSize;
  var slidesPerColumn = params.slidesPerColumn;
  var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
  var numFullColumns = slidesPerRow - ((params.slidesPerColumn * slidesPerRow) - slidesLength);
  for (var i = 0; i < slidesLength; i += 1) {
    slideSize = 0;
    var slide = slides.eq(i);
    if (params.slidesPerColumn > 1) {
      // Set slides order
      var newSlideOrderIndex = (void 0);
      var column = (void 0);
      var row = (void 0);
      if (params.slidesPerColumnFill === 'column') {
        column = Math.floor(i / slidesPerColumn);
        row = i - (column * slidesPerColumn);
        if (column > numFullColumns || (column === numFullColumns && row === slidesPerColumn - 1)) {
          row += 1;
          if (row >= slidesPerColumn) {
            row = 0;
            column += 1;
          }
        }
        newSlideOrderIndex = column + ((row * slidesNumberEvenToRows) / slidesPerColumn);
        slide
          .css({
            '-webkit-box-ordinal-group': newSlideOrderIndex,
            '-moz-box-ordinal-group': newSlideOrderIndex,
            '-ms-flex-order': newSlideOrderIndex,
            '-webkit-order': newSlideOrderIndex,
            order: newSlideOrderIndex,
          });
      } else {
        row = Math.floor(i / slidesPerRow);
        column = i - (row * slidesPerRow);
      }
      slide
        .css(
          ("margin-" + (swiper.isHorizontal() ? 'top' : 'left')),
          (row !== 0 && params.spaceBetween) && (((params.spaceBetween) + "px"))
        )
        .attr('data-swiper-column', column)
        .attr('data-swiper-row', row);
    }
    if (slide.css('display') === 'none') { continue; } // eslint-disable-line
    if (params.slidesPerView === 'auto') {
      slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
      if (params.roundLengths) { slideSize = Math.floor(slideSize); }
    } else {
      slideSize = (swiperSize - ((params.slidesPerView - 1) * spaceBetween)) / params.slidesPerView;
      if (params.roundLengths) { slideSize = Math.floor(slideSize); }

      if (slides[i]) {
        if (swiper.isHorizontal()) {
          slides[i].style.width = slideSize + "px";
        } else {
          slides[i].style.height = slideSize + "px";
        }
      }
    }
    if (slides[i]) {
      slides[i].swiperSlideSize = slideSize;
    }
    slidesSizesGrid.push(slideSize);


    if (params.centeredSlides) {
      slidePosition = slidePosition + (slideSize / 2) + (prevSlideSize / 2) + spaceBetween;
      if (prevSlideSize === 0 && i !== 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
      if (i === 0) { slidePosition = slidePosition - (swiperSize / 2) - spaceBetween; }
      if (Math.abs(slidePosition) < 1 / 1000) { slidePosition = 0; }
      if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
      slidesGrid.push(slidePosition);
    } else {
      if ((index) % params.slidesPerGroup === 0) { snapGrid.push(slidePosition); }
      slidesGrid.push(slidePosition);
      slidePosition = slidePosition + slideSize + spaceBetween;
    }

    swiper.virtualSize += slideSize + spaceBetween;

    prevSlideSize = slideSize;

    index += 1;
  }
  swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
  var newSlidesGrid;

  if (
    rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
    $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") });
  }
  if (!Support.flexbox || params.setWrapperSize) {
    if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
  }

  if (params.slidesPerColumn > 1) {
    swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
    swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
    if (swiper.isHorizontal()) { $wrapperEl.css({ width: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    else { $wrapperEl.css({ height: ((swiper.virtualSize + params.spaceBetween) + "px") }); }
    if (params.centeredSlides) {
      newSlidesGrid = [];
      for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
        if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) { newSlidesGrid.push(snapGrid[i$1]); }
      }
      snapGrid = newSlidesGrid;
    }
  }

  // Remove last grid elements depending on width
  if (!params.centeredSlides) {
    newSlidesGrid = [];
    for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
      if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
        newSlidesGrid.push(snapGrid[i$2]);
      }
    }
    snapGrid = newSlidesGrid;
    if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
      snapGrid.push(swiper.virtualSize - swiperSize);
    }
  }
  if (snapGrid.length === 0) { snapGrid = [0]; }

  if (params.spaceBetween !== 0) {
    if (swiper.isHorizontal()) {
      if (rtl) { slides.css({ marginLeft: (spaceBetween + "px") }); }
      else { slides.css({ marginRight: (spaceBetween + "px") }); }
    } else { slides.css({ marginBottom: (spaceBetween + "px") }); }
  }

  Utils.extend(swiper, {
    slides: slides,
    snapGrid: snapGrid,
    slidesGrid: slidesGrid,
    slidesSizesGrid: slidesSizesGrid,
  });

  if (slidesLength !== previousSlidesLength) {
    swiper.emit('slidesLengthChange');
  }
  if (snapGrid.length !== previousSnapGridLength) {
    swiper.emit('snapGridLengthChange');
  }
  if (slidesGrid.length !== previousSlidesGridLength) {
    swiper.emit('slidesGridLengthChange');
  }

  if (params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateSlidesOffset();
  }
};

var updateAutoHeight = function () {
  var swiper = this;
  var activeSlides = [];
  var newHeight = 0;
  var i;

  // Find slides currently in view
  if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
    for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
      var index = swiper.activeIndex + i;
      if (index > swiper.slides.length) { break; }
      activeSlides.push(swiper.slides.eq(index)[0]);
    }
  } else {
    activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
  }

  // Find new height from highest slide in view
  for (i = 0; i < activeSlides.length; i += 1) {
    if (typeof activeSlides[i] !== 'undefined') {
      var height = activeSlides[i].offsetHeight;
      newHeight = height > newHeight ? height : newHeight;
    }
  }

  // Update Height
  if (newHeight) { swiper.$wrapperEl.css('height', (newHeight + "px")); }
};

var updateSlidesOffset = function () {
  var swiper = this;
  var slides = swiper.slides;
  for (var i = 0; i < slides.length; i += 1) {
    slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
  }
};

var updateSlidesProgress = function (translate) {
  if ( translate === void 0 ) translate = this.translate || 0;

  var swiper = this;
  var params = swiper.params;

  var slides = swiper.slides;
  var rtl = swiper.rtl;

  if (slides.length === 0) { return; }
  if (typeof slides[0].swiperSlideOffset === 'undefined') { swiper.updateSlidesOffset(); }

  var offsetCenter = -translate;
  if (rtl) { offsetCenter = translate; }

  // Visible Slides
  slides.removeClass(params.slideVisibleClass);

  for (var i = 0; i < slides.length; i += 1) {
    var slide = slides[i];
    var slideProgress =
      (
        (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0)) - slide.swiperSlideOffset
      ) / (slide.swiperSlideSize + params.spaceBetween);
    if (params.watchSlidesVisibility) {
      var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
      var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
      var isVisible =
                (slideBefore >= 0 && slideBefore < swiper.size) ||
                (slideAfter > 0 && slideAfter <= swiper.size) ||
                (slideBefore <= 0 && slideAfter >= swiper.size);
      if (isVisible) {
        slides.eq(i).addClass(params.slideVisibleClass);
      }
    }
    slide.progress = rtl ? -slideProgress : slideProgress;
  }
};

var updateProgress = function (translate) {
  if ( translate === void 0 ) translate = this.translate || 0;

  var swiper = this;
  var params = swiper.params;

  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  var progress = swiper.progress;
  var isBeginning = swiper.isBeginning;
  var isEnd = swiper.isEnd;
  var wasBeginning = isBeginning;
  var wasEnd = isEnd;
  if (translatesDiff === 0) {
    progress = 0;
    isBeginning = true;
    isEnd = true;
  } else {
    progress = (translate - swiper.minTranslate()) / (translatesDiff);
    isBeginning = progress <= 0;
    isEnd = progress >= 1;
  }
  Utils.extend(swiper, {
    progress: progress,
    isBeginning: isBeginning,
    isEnd: isEnd,
  });

  if (params.watchSlidesProgress || params.watchSlidesVisibility) { swiper.updateSlidesProgress(translate); }

  if (isBeginning && !wasBeginning) {
    swiper.emit('reachBeginning toEdge');
  }
  if (isEnd && !wasEnd) {
    swiper.emit('reachEnd toEdge');
  }
  if ((wasBeginning && !isBeginning) || (wasEnd && !isEnd)) {
    swiper.emit('fromEdge');
  }

  swiper.emit('progress', progress);
};

var updateSlidesClasses = function () {
  var swiper = this;

  var slides = swiper.slides;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl;
  var activeIndex = swiper.activeIndex;
  var realIndex = swiper.realIndex;
  var isVirtual = swiper.virtual && params.virtual.enabled;

  slides.removeClass(((params.slideActiveClass) + " " + (params.slideNextClass) + " " + (params.slidePrevClass) + " " + (params.slideDuplicateActiveClass) + " " + (params.slideDuplicateNextClass) + " " + (params.slideDuplicatePrevClass)));

  var activeSlide;
  if (isVirtual) {
    activeSlide = swiper.$wrapperEl.find(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + activeIndex + "\"]"));
  } else {
    activeSlide = slides.eq(activeIndex);
  }

  // Active classes
  activeSlide.addClass(params.slideActiveClass);

  if (params.loop) {
    // Duplicate to all looped slides
    if (activeSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + realIndex + "\"]"))
        .addClass(params.slideDuplicateActiveClass);
    } else {
      $wrapperEl
        .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]"))
        .addClass(params.slideDuplicateActiveClass);
    }
  }
  // Next Slide
  var nextSlide = activeSlide.nextAll(("." + (params.slideClass))).eq(0).addClass(params.slideNextClass);
  if (params.loop && nextSlide.length === 0) {
    nextSlide = slides.eq(0);
    nextSlide.addClass(params.slideNextClass);
  }
  // Prev Slide
  var prevSlide = activeSlide.prevAll(("." + (params.slideClass))).eq(0).addClass(params.slidePrevClass);
  if (params.loop && prevSlide.length === 0) {
    prevSlide = slides.eq(-1);
    prevSlide.addClass(params.slidePrevClass);
  }
  if (params.loop) {
    // Duplicate to all looped slides
    if (nextSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
        .addClass(params.slideDuplicateNextClass);
    } else {
      $wrapperEl
        .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (nextSlide.attr('data-swiper-slide-index')) + "\"]"))
        .addClass(params.slideDuplicateNextClass);
    }
    if (prevSlide.hasClass(params.slideDuplicateClass)) {
      $wrapperEl
        .children(("." + (params.slideClass) + ":not(." + (params.slideDuplicateClass) + ")[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
        .addClass(params.slideDuplicatePrevClass);
    } else {
      $wrapperEl
        .children(("." + (params.slideClass) + "." + (params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + (prevSlide.attr('data-swiper-slide-index')) + "\"]"))
        .addClass(params.slideDuplicatePrevClass);
    }
  }
};

var updateActiveIndex = function (newActiveIndex) {
  var swiper = this;
  var translate = swiper.rtl ? swiper.translate : -swiper.translate;
  var slidesGrid = swiper.slidesGrid;
  var snapGrid = swiper.snapGrid;
  var params = swiper.params;
  var previousIndex = swiper.activeIndex;
  var previousRealIndex = swiper.realIndex;
  var previousSnapIndex = swiper.snapIndex;
  var activeIndex = newActiveIndex;
  var snapIndex;
  if (typeof activeIndex === 'undefined') {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (typeof slidesGrid[i + 1] !== 'undefined') {
        if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - ((slidesGrid[i + 1] - slidesGrid[i]) / 2)) {
          activeIndex = i;
        } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
          activeIndex = i + 1;
        }
      } else if (translate >= slidesGrid[i]) {
        activeIndex = i;
      }
    }
    // Normalize slideIndex
    if (params.normalizeSlideIndex) {
      if (activeIndex < 0 || typeof activeIndex === 'undefined') { activeIndex = 0; }
    }
  }
  if (snapGrid.indexOf(translate) >= 0) {
    snapIndex = snapGrid.indexOf(translate);
  } else {
    snapIndex = Math.floor(activeIndex / params.slidesPerGroup);
  }
  if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }
  if (activeIndex === previousIndex) {
    if (snapIndex !== previousSnapIndex) {
      swiper.snapIndex = snapIndex;
      swiper.emit('snapIndexChange');
    }
    return;
  }

  // Get real index
  var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);

  Utils.extend(swiper, {
    snapIndex: snapIndex,
    realIndex: realIndex,
    previousIndex: previousIndex,
    activeIndex: activeIndex,
  });
  swiper.emit('activeIndexChange');
  swiper.emit('snapIndexChange');
  if (previousRealIndex !== realIndex) {
    swiper.emit('realIndexChange');
  }
  swiper.emit('slideChange');
};

var updateClickedSlide = function (e) {
  var swiper = this;
  var params = swiper.params;
  var slide = $$1(e.target).closest(("." + (params.slideClass)))[0];
  var slideFound = false;
  if (slide) {
    for (var i = 0; i < swiper.slides.length; i += 1) {
      if (swiper.slides[i] === slide) { slideFound = true; }
    }
  }

  if (slide && slideFound) {
    swiper.clickedSlide = slide;
    if (swiper.virtual && swiper.params.virtual.enabled) {
      swiper.clickedIndex = parseInt($$1(slide).attr('data-swiper-slide-index'), 10);
    } else {
      swiper.clickedIndex = $$1(slide).index();
    }
  } else {
    swiper.clickedSlide = undefined;
    swiper.clickedIndex = undefined;
    return;
  }
  if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
    swiper.slideToClickedSlide();
  }
};

var update = {
  updateSize: updateSize,
  updateSlides: updateSlides,
  updateAutoHeight: updateAutoHeight,
  updateSlidesOffset: updateSlidesOffset,
  updateSlidesProgress: updateSlidesProgress,
  updateProgress: updateProgress,
  updateSlidesClasses: updateSlidesClasses,
  updateActiveIndex: updateActiveIndex,
  updateClickedSlide: updateClickedSlide,
};

var getTranslate = function (axis) {
  if ( axis === void 0 ) axis = this.isHorizontal() ? 'x' : 'y';

  var swiper = this;

  var params = swiper.params;
  var rtl = swiper.rtl;
  var translate = swiper.translate;
  var $wrapperEl = swiper.$wrapperEl;

  if (params.virtualTranslate) {
    return rtl ? -translate : translate;
  }

  var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);
  if (rtl) { currentTranslate = -currentTranslate; }

  return currentTranslate || 0;
};

var setTranslate = function (translate, byController) {
  var swiper = this;
  var rtl = swiper.rtl;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl;
  var progress = swiper.progress;
  var x = 0;
  var y = 0;
  var z = 0;

  if (swiper.isHorizontal()) {
    x = rtl ? -translate : translate;
  } else {
    y = translate;
  }

  if (params.roundLengths) {
    x = Math.floor(x);
    y = Math.floor(y);
  }

  if (!params.virtualTranslate) {
    if (Support.transforms3d) { $wrapperEl.transform(("translate3d(" + x + "px, " + y + "px, " + z + "px)")); }
    else { $wrapperEl.transform(("translate(" + x + "px, " + y + "px)")); }
  }

  swiper.translate = swiper.isHorizontal() ? x : y;

  // Check if we need to update progress
  var newProgress;
  var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  if (translatesDiff === 0) {
    newProgress = 0;
  } else {
    newProgress = (translate - swiper.minTranslate()) / (translatesDiff);
  }
  if (newProgress !== progress) {
    swiper.updateProgress(translate);
  }

  swiper.emit('setTranslate', swiper.translate, byController);
};

var minTranslate = function () {
  return (-this.snapGrid[0]);
};

var maxTranslate = function () {
  return (-this.snapGrid[this.snapGrid.length - 1]);
};

var translate = {
  getTranslate: getTranslate,
  setTranslate: setTranslate,
  minTranslate: minTranslate,
  maxTranslate: maxTranslate,
};

var setTransition = function (duration, byController) {
  var swiper = this;

  swiper.$wrapperEl.transition(duration);

  swiper.emit('setTransition', duration, byController);
};

var transitionStart = function (runCallbacks) {
  if ( runCallbacks === void 0 ) runCallbacks = true;

  var swiper = this;
  var activeIndex = swiper.activeIndex;
  var params = swiper.params;
  var previousIndex = swiper.previousIndex;
  if (params.autoHeight) {
    swiper.updateAutoHeight();
  }
  swiper.emit('transitionStart');

  if (!runCallbacks) { return; }
  if (activeIndex !== previousIndex) {
    swiper.emit('slideChangeTransitionStart');
    if (activeIndex > previousIndex) {
      swiper.emit('slideNextTransitionStart');
    } else {
      swiper.emit('slidePrevTransitionStart');
    }
  }
};

var transitionEnd$1 = function (runCallbacks) {
  if ( runCallbacks === void 0 ) runCallbacks = true;

  var swiper = this;
  var activeIndex = swiper.activeIndex;
  var previousIndex = swiper.previousIndex;
  swiper.animating = false;
  swiper.setTransition(0);

  swiper.emit('transitionEnd');
  if (runCallbacks) {
    if (activeIndex !== previousIndex) {
      swiper.emit('slideChangeTransitionEnd');
      if (activeIndex > previousIndex) {
        swiper.emit('slideNextTransitionEnd');
      } else {
        swiper.emit('slidePrevTransitionEnd');
      }
    }
  }
};

var transition$1 = {
  setTransition: setTransition,
  transitionStart: transitionStart,
  transitionEnd: transitionEnd$1,
};

var Browser = (function Browser() {
  function isIE9() {
    // create temporary DIV
    var div = doc.createElement('div');
    // add content to tmp DIV which is wrapped into the IE HTML conditional statement
    div.innerHTML = '<!--[if lte IE 9]><i></i><![endif]-->';
    // return true / false value based on what will browser render
    return div.getElementsByTagName('i').length === 1;
  }
  function isSafari() {
    var ua = win.navigator.userAgent.toLowerCase();
    return (ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0);
  }
  return {
    isSafari: isSafari(),
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent),
    ie: win.navigator.pointerEnabled || win.navigator.msPointerEnabled,
    ieTouch: (win.navigator.msPointerEnabled && win.navigator.msMaxTouchPoints > 1) ||
             (win.navigator.pointerEnabled && win.navigator.maxTouchPoints > 1),
    lteIE9: isIE9(),
  };
}());

var slideTo = function (index, speed, runCallbacks, internal) {
  if ( index === void 0 ) index = 0;
  if ( speed === void 0 ) speed = this.params.speed;
  if ( runCallbacks === void 0 ) runCallbacks = true;

  var swiper = this;
  var slideIndex = index;
  if (slideIndex < 0) { slideIndex = 0; }

  var params = swiper.params;
  var snapGrid = swiper.snapGrid;
  var slidesGrid = swiper.slidesGrid;
  var previousIndex = swiper.previousIndex;
  var activeIndex = swiper.activeIndex;
  var rtl = swiper.rtl;
  var $wrapperEl = swiper.$wrapperEl;

  var snapIndex = Math.floor(slideIndex / params.slidesPerGroup);
  if (snapIndex >= snapGrid.length) { snapIndex = snapGrid.length - 1; }

  if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
    swiper.emit('beforeSlideChangeStart');
  }

  var translate = -snapGrid[snapIndex];

  // Update progress
  swiper.updateProgress(translate);

  // Normalize slideIndex
  if (params.normalizeSlideIndex) {
    for (var i = 0; i < slidesGrid.length; i += 1) {
      if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
        slideIndex = i;
      }
    }
  }

  // Directions locks
  if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
    return false;
  }
  if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
    if ((activeIndex || 0) !== slideIndex) { return false; }
  }

  // Update Index
  if ((rtl && -translate === swiper.translate) || (!rtl && translate === swiper.translate)) {
    swiper.updateActiveIndex(slideIndex);
    // Update Height
    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
    swiper.updateSlidesClasses();
    if (params.effect !== 'slide') {
      swiper.setTranslate(translate);
    }
    return false;
  }

  if (speed === 0 || Browser.lteIE9) {
    swiper.setTransition(0);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks);
    swiper.transitionEnd(runCallbacks);
  } else {
    swiper.setTransition(speed);
    swiper.setTranslate(translate);
    swiper.updateActiveIndex(slideIndex);
    swiper.updateSlidesClasses();
    swiper.emit('beforeTransitionStart', speed, internal);
    swiper.transitionStart(runCallbacks);
    if (!swiper.animating) {
      swiper.animating = true;
      $wrapperEl.transitionEnd(function () {
        if (!swiper || swiper.destroyed) { return; }
        swiper.transitionEnd(runCallbacks);
      });
    }
  }

  return true;
};

/* eslint no-unused-vars: "off" */
var slideNext = function (speed, runCallbacks, internal) {
  if ( speed === void 0 ) speed = this.params.speed;
  if ( runCallbacks === void 0 ) runCallbacks = true;

  var swiper = this;
  var params = swiper.params;
  var animating = swiper.animating;
  if (params.loop) {
    if (animating) { return false; }
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex + params.slidesPerGroup, speed, runCallbacks, internal);
};

/* eslint no-unused-vars: "off" */
var slidePrev = function (speed, runCallbacks, internal) {
  if ( speed === void 0 ) speed = this.params.speed;
  if ( runCallbacks === void 0 ) runCallbacks = true;

  var swiper = this;
  var params = swiper.params;
  var animating = swiper.animating;

  if (params.loop) {
    if (animating) { return false; }
    swiper.loopFix();
    // eslint-disable-next-line
    swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
    return swiper.slideTo(swiper.activeIndex - 1, speed, runCallbacks, internal);
  }
  return swiper.slideTo(swiper.activeIndex - 1, speed, runCallbacks, internal);
};

/* eslint no-unused-vars: "off" */
var slideReset = function (speed, runCallbacks, internal) {
  if ( speed === void 0 ) speed = this.params.speed;
  if ( runCallbacks === void 0 ) runCallbacks = true;

  var swiper = this;
  return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
};

var slideToClickedSlide = function () {
  var swiper = this;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl;

  var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
  var slideToIndex = swiper.clickedIndex;
  var realIndex;
  if (params.loop) {
    if (swiper.animating) { return; }
    realIndex = parseInt($$1(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
    if (params.centeredSlides) {
      if (
        (slideToIndex < swiper.loopedSlides - (slidesPerView / 2)) ||
        (slideToIndex > (swiper.slides.length - swiper.loopedSlides) + (slidesPerView / 2))
      ) {
        swiper.loopFix();
        slideToIndex = $wrapperEl
          .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
          .eq(0)
          .index();

        Utils.nextTick(function () {
          swiper.slideTo(slideToIndex);
        });
      } else {
        swiper.slideTo(slideToIndex);
      }
    } else if (slideToIndex > swiper.slides.length - slidesPerView) {
      swiper.loopFix();
      slideToIndex = $wrapperEl
        .children(("." + (params.slideClass) + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + (params.slideDuplicateClass) + ")"))
        .eq(0)
        .index();

      Utils.nextTick(function () {
        swiper.slideTo(slideToIndex);
      });
    } else {
      swiper.slideTo(slideToIndex);
    }
  } else {
    swiper.slideTo(slideToIndex);
  }
};

var slide = {
  slideTo: slideTo,
  slideNext: slideNext,
  slidePrev: slidePrev,
  slideReset: slideReset,
  slideToClickedSlide: slideToClickedSlide,
};

var loopCreate = function () {
  var swiper = this;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl;
  // Remove duplicated slides
  $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();

  var slides = $wrapperEl.children(("." + (params.slideClass)));

  if (params.loopFillGroupWithBlank) {
    var blankSlidesNum = params.slidesPerGroup - (slides.length % params.slidesPerGroup);
    if (blankSlidesNum !== params.slidesPerGroup) {
      for (var i = 0; i < blankSlidesNum; i += 1) {
        var blankNode = $$1(doc.createElement('div')).addClass(((params.slideClass) + " " + (params.slideBlankClass)));
        $wrapperEl.append(blankNode);
      }
      slides = $wrapperEl.children(("." + (params.slideClass)));
    }
  }

  if (params.slidesPerView === 'auto' && !params.loopedSlides) { params.loopedSlides = slides.length; }

  swiper.loopedSlides = parseInt(params.loopedSlides || params.slidesPerView, 10);
  swiper.loopedSlides += params.loopAdditionalSlides;
  if (swiper.loopedSlides > slides.length) {
    swiper.loopedSlides = slides.length;
  }

  var prependSlides = [];
  var appendSlides = [];
  slides.each(function (index, el) {
    var slide = $$1(el);
    if (index < swiper.loopedSlides) { appendSlides.push(el); }
    if (index < slides.length && index >= slides.length - swiper.loopedSlides) { prependSlides.push(el); }
    slide.attr('data-swiper-slide-index', index);
  });
  for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
    $wrapperEl.append($$1(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
  for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
    $wrapperEl.prepend($$1(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
  }
};

var loopFix = function () {
  var swiper = this;
  var params = swiper.params;
  var activeIndex = swiper.activeIndex;
  var slides = swiper.slides;
  var loopedSlides = swiper.loopedSlides;
  var allowSlidePrev = swiper.allowSlidePrev;
  var allowSlideNext = swiper.allowSlideNext;
  var newIndex;
  swiper.allowSlidePrev = true;
  swiper.allowSlideNext = true;
  // Fix For Negative Oversliding
  if (activeIndex < loopedSlides) {
    newIndex = (slides.length - (loopedSlides * 3)) + activeIndex;
    newIndex += loopedSlides;
    swiper.slideTo(newIndex, 0, false, true);
  } else if ((params.slidesPerView === 'auto' && activeIndex >= loopedSlides * 2) || (activeIndex > slides.length - (params.slidesPerView * 2))) {
    // Fix For Positive Oversliding
    newIndex = -slides.length + activeIndex + loopedSlides;
    newIndex += loopedSlides;
    swiper.slideTo(newIndex, 0, false, true);
  }
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
};

var loopDestroy = function () {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl;
  var params = swiper.params;
  var slides = swiper.slides;
  $wrapperEl.children(("." + (params.slideClass) + "." + (params.slideDuplicateClass))).remove();
  slides.removeAttr('data-swiper-slide-index');
};

var loop = {
  loopCreate: loopCreate,
  loopFix: loopFix,
  loopDestroy: loopDestroy,
};

var setGrabCursor = function (moving) {
  var swiper = this;
  if (Support.touch || !swiper.params.simulateTouch) { return; }
  var el = swiper.el;
  el.style.cursor = 'move';
  el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
  el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
  el.style.cursor = moving ? 'grabbing' : 'grab';
};

var unsetGrabCursor = function () {
  var swiper = this;
  if (Support.touch) { return; }
  swiper.el.style.cursor = '';
};

var grabCursor = {
  setGrabCursor: setGrabCursor,
  unsetGrabCursor: unsetGrabCursor,
};

var appendSlide = function (slides) {
  var swiper = this;
  var $wrapperEl = swiper.$wrapperEl;
  var params = swiper.params;
  if (params.loop) {
    swiper.loopDestroy();
  }
  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) { $wrapperEl.append(slides[i]); }
    }
  } else {
    $wrapperEl.append(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
};

var prependSlide = function (slides) {
  var swiper = this;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl;
  var activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
  }
  var newActiveIndex = activeIndex + 1;
  if (typeof slides === 'object' && 'length' in slides) {
    for (var i = 0; i < slides.length; i += 1) {
      if (slides[i]) { $wrapperEl.prepend(slides[i]); }
    }
    newActiveIndex = activeIndex + slides.length;
  } else {
    $wrapperEl.prepend(slides);
  }
  if (params.loop) {
    swiper.loopCreate();
  }
  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  swiper.slideTo(newActiveIndex, 0, false);
};

var removeSlide = function (slidesIndexes) {
  var swiper = this;
  var params = swiper.params;
  var $wrapperEl = swiper.$wrapperEl;
  var activeIndex = swiper.activeIndex;

  if (params.loop) {
    swiper.loopDestroy();
    swiper.slides = $wrapperEl.children(("." + (params.slideClass)));
  }
  var newActiveIndex = activeIndex;
  var indexToRemove;

  if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
    for (var i = 0; i < slidesIndexes.length; i += 1) {
      indexToRemove = slidesIndexes[i];
      if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
      if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
    }
    newActiveIndex = Math.max(newActiveIndex, 0);
  } else {
    indexToRemove = slidesIndexes;
    if (swiper.slides[indexToRemove]) { swiper.slides.eq(indexToRemove).remove(); }
    if (indexToRemove < newActiveIndex) { newActiveIndex -= 1; }
    newActiveIndex = Math.max(newActiveIndex, 0);
  }

  if (params.loop) {
    swiper.loopCreate();
  }

  if (!(params.observer && Support.observer)) {
    swiper.update();
  }
  if (params.loop) {
    swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
  } else {
    swiper.slideTo(newActiveIndex, 0, false);
  }
};

var removeAllSlides = function () {
  var swiper = this;

  var slidesIndexes = [];
  for (var i = 0; i < swiper.slides.length; i += 1) {
    slidesIndexes.push(i);
  }
  swiper.removeSlide(slidesIndexes);
};

var manipulation = {
  appendSlide: appendSlide,
  prependSlide: prependSlide,
  removeSlide: removeSlide,
  removeAllSlides: removeAllSlides,
};

var Device = (function Device() {
  var ua = win.navigator.userAgent;

  var device = {
    ios: false,
    android: false,
    androidChrome: false,
    desktop: false,
    windows: false,
    iphone: false,
    ipod: false,
    ipad: false,
    cordova: win.cordova || win.phonegap,
    phonegap: win.cordova || win.phonegap,
  };

  var windows = ua.match(/(Windows Phone);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
  var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
  var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);


  // Windows
  if (windows) {
    device.os = 'windows';
    device.osVersion = windows[2];
    device.windows = true;
  }
  // Android
  if (android && !windows) {
    device.os = 'android';
    device.osVersion = android[2];
    device.android = true;
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
  }
  if (ipad || iphone || ipod) {
    device.os = 'ios';
    device.ios = true;
  }
  // iOS
  if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.');
    device.iphone = true;
  }
  if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.');
    device.ipad = true;
  }
  if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
    device.iphone = true;
  }
  // iOS 8+ changed UA
  if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
      device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
    }
  }

  // Desktop
  device.desktop = !(device.os || device.android || device.webView);

  // Webview
  device.webView = (iphone || ipad || ipod) && ua.match(/.*AppleWebKit(?!.*Safari)/i);

  // Minimal UI
  if (device.os && device.os === 'ios') {
    var osVersionArr = device.osVersion.split('.');
    var metaViewport = doc.querySelector('meta[name="viewport"]');
    device.minimalUi =
      !device.webView &&
      (ipod || iphone) &&
      (osVersionArr[0] * 1 === 7 ? osVersionArr[1] * 1 >= 1 : osVersionArr[0] * 1 > 7) &&
      metaViewport && metaViewport.getAttribute('content').indexOf('minimal-ui') >= 0;
  }

  // Pixel Ratio
  device.pixelRatio = win.devicePixelRatio || 1;

  // Export object
  return device;
}());

var onTouchStart = function (event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params;
  var touches = swiper.touches;
  var e = event;
  if (e.originalEvent) { e = e.originalEvent; }
  data.isTouchEvent = e.type === 'touchstart';
  if (!data.isTouchEvent && 'which' in e && e.which === 3) { return; }
  if (data.isTouched && data.isMoved) { return; }
  if (params.noSwiping && $$1(e.target).closest(("." + (params.noSwipingClass)))[0]) {
    swiper.allowClick = true;
    return;
  }
  if (params.swipeHandler) {
    if (!$$1(e).closest(params.swipeHandler)[0]) { return; }
  }

  touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
  touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  var startX = touches.currentX;
  var startY = touches.currentY;

  // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

  if (
    Device.ios &&
    !Device.cordova &&
    params.iOSEdgeSwipeDetection &&
    (startX <= params.iOSEdgeSwipeThreshold) &&
    (startX >= window.screen.width - params.iOSEdgeSwipeThreshold)
  ) {
    return;
  }

  Utils.extend(data, {
    isTouched: true,
    isMoved: false,
    allowTouchCallbacks: true,
    isScrolling: undefined,
    startMoving: undefined,
  });

  touches.startX = startX;
  touches.startY = startY;
  data.touchStartTime = Utils.now();
  swiper.allowClick = true;
  swiper.updateSize();
  swiper.swipeDirection = undefined;
  if (params.threshold > 0) { data.allowThresholdMove = false; }
  if (e.type !== 'touchstart') {
    var preventDefault = true;
    if ($$1(e.target).is(data.formElements)) { preventDefault = false; }
    if (doc.activeElement && $$1(doc.activeElement).is(data.formElements)) {
      doc.activeElement.blur();
    }
    if (preventDefault && swiper.allowTouchMove) {
      e.preventDefault();
    }
  }
  swiper.emit('touchStart', e);
};

var onTouchMove = function (event) {
  var swiper = this;
  var data = swiper.touchEventsData;
  var params = swiper.params;
  var touches = swiper.touches;
  var rtl = swiper.rtl;
  var e = event;
  if (e.originalEvent) { e = e.originalEvent; }
  if (data.isTouchEvent && e.type === 'mousemove') { return; }
  var pageX = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
  var pageY = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
  if (e.preventedByNestedSwiper) {
    touches.startX = pageX;
    touches.startY = pageY;
    return;
  }
  if (!swiper.allowTouchMove) {
    // isMoved = true;
    swiper.allowClick = false;
    if (data.isTouched) {
      Utils.extend(touches, {
        startX: pageX,
        startY: pageY,
        currentX: pageX,
        currentY: pageY,
      });
      data.touchStartTime = Utils.now();
    }
    return;
  }
  if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
    if (swiper.isVertical()) {
      // Vertical
      if (
        (pageY < touches.startY && swiper.translate <= swiper.maxTranslate()) ||
        (pageY > touches.startY && swiper.translate >= swiper.minTranslate())
      ) {
        data.isTouched = false;
        data.isMoved = false;
        return;
      }
    } else if (
      (pageX < touches.startX && swiper.translate <= swiper.maxTranslate()) ||
      (pageX > touches.startX && swiper.translate >= swiper.minTranslate())
    ) {
      return;
    }
  }
  if (data.isTouchEvent && doc.activeElement) {
    if (e.target === doc.activeElement && $$1(e.target).is(data.formElements)) {
      data.isMoved = true;
      swiper.allowClick = false;
      return;
    }
  }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchMove', e);
  }
  if (e.targetTouches && e.targetTouches.length > 1) { return; }

  touches.currentX = pageX;
  touches.currentY = pageY;

  var diffX = touches.currentX - touches.startX;
  var diffY = touches.currentY - touches.startY;

  if (typeof data.isScrolling === 'undefined') {
    var touchAngle;
    if ((swiper.isHorizontal() && touches.currentY === touches.startY) || (swiper.isVertical() && touches.currentX === touches.startX)) {
      data.isScrolling = false;
    } else {
      // eslint-disable-next-line
      if ((diffX * diffX) + (diffY * diffY) >= 25) {
        touchAngle = (Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180) / Math.PI;
        data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : (90 - touchAngle > params.touchAngle);
      }
    }
  }
  if (data.isScrolling) {
    swiper.emit('touchMoveOpposite', e);
  }
  if (typeof startMoving === 'undefined') {
    if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
      data.startMoving = true;
    }
  }
  if (!data.isTouched) { return; }
  if (data.isScrolling) {
    data.isTouched = false;
    return;
  }
  if (!data.startMoving) {
    return;
  }
  swiper.allowClick = false;
  e.preventDefault();
  if (params.touchMoveStopPropagation && !params.nested) {
    e.stopPropagation();
  }

  if (!data.isMoved) {
    if (params.loop) {
      swiper.loopFix();
    }
    data.startTranslate = swiper.getTranslate();
    swiper.setTransition(0);
    if (swiper.animating) {
      swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
    }
    data.allowMomentumBounce = false;
    // Grab Cursor
    if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
      swiper.setGrabCursor(true);
    }
    swiper.emit('sliderFirstMove', e);
  }
  swiper.emit('sliderMove', e);
  data.isMoved = true;

  var diff = swiper.isHorizontal() ? diffX : diffY;
  touches.diff = diff;

  diff *= params.touchRatio;
  if (rtl) { diff = -diff; }

  swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
  data.currentTranslate = diff + data.startTranslate;

  var disableParentSwiper = true;
  var resistanceRatio = params.resistanceRatio;
  if (params.touchReleaseOnEdges) {
    resistanceRatio = 0;
  }
  if ((diff > 0 && data.currentTranslate > swiper.minTranslate())) {
    disableParentSwiper = false;
    if (params.resistance) { data.currentTranslate = (swiper.minTranslate() - 1) + (Math.pow( (-swiper.minTranslate() + data.startTranslate + diff), resistanceRatio )); }
  } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
    disableParentSwiper = false;
    if (params.resistance) { data.currentTranslate = (swiper.maxTranslate() + 1) - (Math.pow( (swiper.maxTranslate() - data.startTranslate - diff), resistanceRatio )); }
  }

  if (disableParentSwiper) {
    e.preventedByNestedSwiper = true;
  }

  // Directions locks
  if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }
  if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
    data.currentTranslate = data.startTranslate;
  }


  // Threshold
  if (params.threshold > 0) {
    if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
      if (!data.allowThresholdMove) {
        data.allowThresholdMove = true;
        touches.startX = touches.currentX;
        touches.startY = touches.currentY;
        data.currentTranslate = data.startTranslate;
        touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
        return;
      }
    } else {
      data.currentTranslate = data.startTranslate;
      return;
    }
  }

  if (!params.followFinger) { return; }

  // Update active index in free mode
  if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  }
  if (params.freeMode) {
    // Velocity
    if (data.velocities.length === 0) {
      data.velocities.push({
        position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
        time: data.touchStartTime,
      });
    }
    data.velocities.push({
      position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
      time: Utils.now(),
    });
  }
  // Update progress
  swiper.updateProgress(data.currentTranslate);
  // Update translate
  swiper.setTranslate(data.currentTranslate);
};

var onTouchEnd = function (event) {
  var swiper = this;
  var data = swiper.touchEventsData;

  var params = swiper.params;
  var touches = swiper.touches;
  var rtl = swiper.rtl;
  var $wrapperEl = swiper.$wrapperEl;
  var slidesGrid = swiper.slidesGrid;
  var snapGrid = swiper.snapGrid;
  var e = event;
  if (e.originalEvent) { e = e.originalEvent; }
  if (data.allowTouchCallbacks) {
    swiper.emit('touchEnd', e);
  }
  data.allowTouchCallbacks = false;
  if (!data.isTouched) { return; }
  // Return Grab Cursor
  if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
    swiper.setGrabCursor(false);
  }

  // Time diff
  var touchEndTime = Utils.now();
  var timeDiff = touchEndTime - data.touchStartTime;

  // Tap, doubleTap, Click
  if (swiper.allowClick) {
    swiper.updateClickedSlide(e);
    swiper.emit('tap', e);
    if (timeDiff < 300 && (touchEndTime - data.lastClickTime) > 300) {
      if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
      data.clickTimeout = Utils.nextTick(function () {
        if (!swiper || swiper.destroyed) { return; }
        swiper.emit('click', e);
      }, 300);
    }
    if (timeDiff < 300 && (touchEndTime - data.lastClickTime) < 300) {
      if (data.clickTimeout) { clearTimeout(data.clickTimeout); }
      swiper.emit('doubleTap', e);
    }
  }

  data.lastClickTime = Utils.now();
  Utils.nextTick(function () {
    if (!swiper.destroyed) { swiper.allowClick = true; }
  });

  if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
    data.isTouched = false;
    data.isMoved = false;
    return;
  }
  data.isTouched = false;
  data.isMoved = false;

  var currentPos;
  if (params.followFinger) {
    currentPos = rtl ? swiper.translate : -swiper.translate;
  } else {
    currentPos = -data.currentTranslate;
  }
  if (params.freeMode) {
    if (currentPos < -swiper.minTranslate()) {
      swiper.slideTo(swiper.activeIndex);
      return;
    } else if (currentPos > -swiper.maxTranslate()) {
      if (swiper.slides.length < snapGrid.length) {
        swiper.slideTo(snapGrid.length - 1);
      } else {
        swiper.slideTo(swiper.slides.length - 1);
      }
      return;
    }

    if (params.freeModeMomentum) {
      if (data.velocities.length > 1) {
        var lastMoveEvent = data.velocities.pop();
        var velocityEvent = data.velocities.pop();

        var distance = lastMoveEvent.position - velocityEvent.position;
        var time = lastMoveEvent.time - velocityEvent.time;
        swiper.velocity = distance / time;
        swiper.velocity /= 2;
        if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
          swiper.velocity = 0;
        }
        // this implies that the user stopped moving a finger then released.
        // There would be no events with distance zero, so the last event is stale.
        if (time > 150 || (Utils.now() - lastMoveEvent.time) > 300) {
          swiper.velocity = 0;
        }
      } else {
        swiper.velocity = 0;
      }
      swiper.velocity *= params.freeModeMomentumVelocityRatio;

      data.velocities.length = 0;
      var momentumDuration = 1000 * params.freeModeMomentumRatio;
      var momentumDistance = swiper.velocity * momentumDuration;

      var newPosition = swiper.translate + momentumDistance;
      if (rtl) { newPosition = -newPosition; }
      var doBounce = false;
      var afterBouncePosition;
      var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
      if (newPosition < swiper.maxTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition + swiper.maxTranslate() < -bounceAmount) {
            newPosition = swiper.maxTranslate() - bounceAmount;
          }
          afterBouncePosition = swiper.maxTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.maxTranslate();
        }
      } else if (newPosition > swiper.minTranslate()) {
        if (params.freeModeMomentumBounce) {
          if (newPosition - swiper.minTranslate() > bounceAmount) {
            newPosition = swiper.minTranslate() + bounceAmount;
          }
          afterBouncePosition = swiper.minTranslate();
          doBounce = true;
          data.allowMomentumBounce = true;
        } else {
          newPosition = swiper.minTranslate();
        }
      } else if (params.freeModeSticky) {
        var nextSlide;
        for (var j = 0; j < snapGrid.length; j += 1) {
          if (snapGrid[j] > -newPosition) {
            nextSlide = j;
            break;
          }
        }
        if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
          newPosition = snapGrid[nextSlide];
        } else {
          newPosition = snapGrid[nextSlide - 1];
        }
        newPosition = -newPosition;
      }
      // Fix duration
      if (swiper.velocity !== 0) {
        if (rtl) {
          momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
        } else {
          momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
        }
      } else if (params.freeModeSticky) {
        swiper.slideReset();
        return;
      }

      if (params.freeModeMomentumBounce && doBounce) {
        swiper.updateProgress(afterBouncePosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart();
        swiper.animating = true;
        $wrapperEl.transitionEnd(function () {
          if (!swiper || swiper.destroyed || !data.allowMomentumBounce) { return; }
          swiper.emit('momentumBounce');

          swiper.setTransition(params.speed);
          swiper.setTranslate(afterBouncePosition);
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) { return; }
            swiper.transitionEnd();
          });
        });
      } else if (swiper.velocity) {
        swiper.updateProgress(newPosition);
        swiper.setTransition(momentumDuration);
        swiper.setTranslate(newPosition);
        swiper.transitionStart();
        if (!swiper.animating) {
          swiper.animating = true;
          $wrapperEl.transitionEnd(function () {
            if (!swiper || swiper.destroyed) { return; }
            swiper.transitionEnd();
          });
        }
      } else {
        swiper.updateProgress(newPosition);
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    return;
  }

  // Find current slide
  var stopIndex = 0;
  var groupSize = swiper.slidesSizesGrid[0];
  for (var i = 0; i < slidesGrid.length; i += params.slidesPerGroup) {
    if (typeof slidesGrid[i + params.slidesPerGroup] !== 'undefined') {
      if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + params.slidesPerGroup]) {
        stopIndex = i;
        groupSize = slidesGrid[i + params.slidesPerGroup] - slidesGrid[i];
      }
    } else if (currentPos >= slidesGrid[i]) {
      stopIndex = i;
      groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
    }
  }

  // Find current slide size
  var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;

  if (timeDiff > params.longSwipesMs) {
    // Long touches
    if (!params.longSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      if (ratio >= params.longSwipesRatio) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
      else { swiper.slideTo(stopIndex); }
    }
    if (swiper.swipeDirection === 'prev') {
      if (ratio > (1 - params.longSwipesRatio)) { swiper.slideTo(stopIndex + params.slidesPerGroup); }
      else { swiper.slideTo(stopIndex); }
    }
  } else {
    // Short swipes
    if (!params.shortSwipes) {
      swiper.slideTo(swiper.activeIndex);
      return;
    }
    if (swiper.swipeDirection === 'next') {
      swiper.slideTo(stopIndex + params.slidesPerGroup);
    }
    if (swiper.swipeDirection === 'prev') {
      swiper.slideTo(stopIndex);
    }
  }
};

var onResize = function () {
  var swiper = this;

  var params = swiper.params;
  var el = swiper.el;

  if (el && el.offsetWidth === 0) { return; }

  // Breakpoints
  if (params.breakpoints) {
    swiper.setBreakpoint();
  }

  // Save locks
  var allowSlideNext = swiper.allowSlideNext;
  var allowSlidePrev = swiper.allowSlidePrev;

  // Disable locks on resize
  swiper.allowSlideNext = true;
  swiper.allowSlidePrev = true;

  swiper.updateSize();
  swiper.updateSlides();

  if (params.freeMode) {
    var newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
    swiper.setTranslate(newTranslate);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();

    if (params.autoHeight) {
      swiper.updateAutoHeight();
    }
  } else {
    swiper.updateSlidesClasses();
    if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
      swiper.slideTo(swiper.slides.length - 1, 0, false, true);
    } else {
      swiper.slideTo(swiper.activeIndex, 0, false, true);
    }
  }
  // Return locks after resize
  swiper.allowSlidePrev = allowSlidePrev;
  swiper.allowSlideNext = allowSlideNext;
};

var onClick = function (e) {
  var swiper = this;
  if (!swiper.allowClick) {
    if (swiper.params.preventClicks) { e.preventDefault(); }
    if (swiper.params.preventClicksPropagation && swiper.animating) {
      e.stopPropagation();
      e.stopImmediatePropagation();
    }
  }
};

function attachEvents() {
  var swiper = this;

  var params = swiper.params;
  var touchEvents = swiper.touchEvents;
  var el = swiper.el;
  var wrapperEl = swiper.wrapperEl;

  {
    swiper.onTouchStart = onTouchStart.bind(swiper);
    swiper.onTouchMove = onTouchMove.bind(swiper);
    swiper.onTouchEnd = onTouchEnd.bind(swiper);
  }

  swiper.onClick = onClick.bind(swiper);

  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested;

  // Touch Events
  {
    if (Browser.ie) {
      target.addEventListener(touchEvents.start, swiper.onTouchStart, false);
      (Support.touch ? target : doc).addEventListener(touchEvents.move, swiper.onTouchMove, capture);
      (Support.touch ? target : doc).addEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? { passive: false, capture: capture } : capture);
        target.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.addEventListener('mousedown', swiper.onTouchStart, false);
        doc.addEventListener('mousemove', swiper.onTouchMove, capture);
        doc.addEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.addEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.on('resize observerUpdate', onResize);
}

function detachEvents() {
  var swiper = this;

  var params = swiper.params;
  var touchEvents = swiper.touchEvents;
  var el = swiper.el;
  var wrapperEl = swiper.wrapperEl;

  var target = params.touchEventsTarget === 'container' ? el : wrapperEl;
  var capture = !!params.nested;

  // Touch Events
  {
    if (Browser.ie) {
      target.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
      (Support.touch ? target : doc).removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
      (Support.touch ? target : doc).removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
    } else {
      if (Support.touch) {
        var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? { passive: true, capture: false } : false;
        target.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
        target.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        target.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
      }
      if ((params.simulateTouch && !Device.ios && !Device.android) || (params.simulateTouch && !Support.touch && Device.ios)) {
        target.removeEventListener('mousedown', swiper.onTouchStart, false);
        doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
        doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
      }
    }
    // Prevent Links Clicks
    if (params.preventClicks || params.preventClicksPropagation) {
      target.removeEventListener('click', swiper.onClick, true);
    }
  }

  // Resize handler
  swiper.off('resize observerUpdate', onResize);
}

var events = {
  attachEvents: attachEvents,
  detachEvents: detachEvents,
};

var setBreakpoint = function () {
  var swiper = this;
  var activeIndex = swiper.activeIndex;
  var loopedSlides = swiper.loopedSlides; if ( loopedSlides === void 0 ) loopedSlides = 0;
  var params = swiper.params;
  var breakpoints = params.breakpoints;
  if (!breakpoints || (breakpoints && Object.keys(breakpoints).length === 0)) { return; }
  // Set breakpoint for window width and update parameters
  var breakpoint = swiper.getBreakpoint(breakpoints);
  if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
    var breakPointsParams = breakpoint in breakpoints ? breakpoints[breakpoint] : swiper.originalParams;
    var needsReLoop = params.loop && (breakPointsParams.slidesPerView !== params.slidesPerView);

    Utils.extend(swiper.params, breakPointsParams);

    Utils.extend(swiper, {
      allowTouchMove: swiper.params.allowTouchMove,
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,
    });

    swiper.currentBreakpoint = breakpoint;

    if (needsReLoop) {
      swiper.loopDestroy();
      swiper.loopCreate();
      swiper.updateSlides();
      swiper.slideTo((activeIndex - loopedSlides) + swiper.loopedSlides, 0, false);
    }
    swiper.emit('breakpoint', breakPointsParams);
  }
};

var getBreakpoint = function (breakpoints) {
  // Get breakpoint for window width
  if (!breakpoints) { return undefined; }
  var breakpoint = false;
  var points = [];
  Object.keys(breakpoints).forEach(function (point) {
    points.push(point);
  });
  points.sort(function (a, b) { return parseInt(a, 10) - parseInt(b, 10); });
  for (var i = 0; i < points.length; i += 1) {
    var point = points[i];
    if (point >= win.innerWidth && !breakpoint) {
      breakpoint = point;
    }
  }
  return breakpoint || 'max';
};

var breakpoints = { setBreakpoint: setBreakpoint, getBreakpoint: getBreakpoint };

var addClasses = function () {
  var swiper = this;
  var classNames = swiper.classNames;
  var params = swiper.params;
  var rtl = swiper.rtl;
  var $el = swiper.$el;
  var suffixes = [];

  suffixes.push(params.direction);

  if (params.freeMode) {
    suffixes.push('free-mode');
  }
  if (!Support.flexbox) {
    suffixes.push('no-flexbox');
  }
  if (params.autoHeight) {
    suffixes.push('autoheight');
  }
  if (rtl) {
    suffixes.push('rtl');
  }
  if (params.slidesPerColumn > 1) {
    suffixes.push('multirow');
  }
  if (Device.android) {
    suffixes.push('android');
  }
  if (Device.ios) {
    suffixes.push('ios');
  }
  // WP8 Touch Events Fix
  if (win.navigator.pointerEnabled || win.navigator.msPointerEnabled) {
    suffixes.push(("wp8-" + (params.direction)));
  }

  suffixes.forEach(function (suffix) {
    classNames.push(params.containerModifierClass + suffix);
  });

  $el.addClass(classNames.join(' '));
};

var removeClasses = function () {
  var swiper = this;
  var $el = swiper.$el;
  var classNames = swiper.classNames;

  $el.removeClass(classNames.join(' '));
};

var classes = { addClasses: addClasses, removeClasses: removeClasses };

var loadImage = function (imageEl, src, srcset, sizes, checkForComplete, callback) {
  var image;
  function onReady() {
    if (callback) { callback(); }
  }
  if (!imageEl.complete || !checkForComplete) {
    if (src) {
      image = new win.Image();
      image.onload = onReady;
      image.onerror = onReady;
      if (sizes) {
        image.sizes = sizes;
      }
      if (srcset) {
        image.srcset = srcset;
      }
      if (src) {
        image.src = src;
      }
    } else {
      onReady();
    }
  } else {
    // image already loaded...
    onReady();
  }
};

var preloadImages = function () {
  var swiper = this;
  swiper.imagesToLoad = swiper.$el.find('img');
  function onReady() {
    if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) { return; }
    if (swiper.imagesLoaded !== undefined) { swiper.imagesLoaded += 1; }
    if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
      if (swiper.params.updateOnImagesReady) { swiper.update(); }
      swiper.emit('imagesReady');
    }
  }
  for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
    var imageEl = swiper.imagesToLoad[i];
    swiper.loadImage(
      imageEl,
      imageEl.currentSrc || imageEl.getAttribute('src'),
      imageEl.srcset || imageEl.getAttribute('srcset'),
      imageEl.sizes || imageEl.getAttribute('sizes'),
      true,
      onReady
    );
  }
};

var images = {
  loadImage: loadImage,
  preloadImages: preloadImages,
};

var defaults = {
  init: true,
  direction: 'horizontal',
  touchEventsTarget: 'container',
  initialSlide: 0,
  speed: 300,

  // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
  iOSEdgeSwipeDetection: false,
  iOSEdgeSwipeThreshold: 20,

  // Free mode
  freeMode: false,
  freeModeMomentum: true,
  freeModeMomentumRatio: 1,
  freeModeMomentumBounce: true,
  freeModeMomentumBounceRatio: 1,
  freeModeMomentumVelocityRatio: 1,
  freeModeSticky: false,
  freeModeMinimumVelocity: 0.02,

  // Autoheight
  autoHeight: false,

  // Set wrapper width
  setWrapperSize: false,

  // Virtual Translate
  virtualTranslate: false,

  // Effects
  effect: 'slide', // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'

  // Breakpoints
  breakpoints: undefined,

  // Slides grid
  spaceBetween: 0,
  slidesPerView: 1,
  slidesPerColumn: 1,
  slidesPerColumnFill: 'column',
  slidesPerGroup: 1,
  centeredSlides: false,
  slidesOffsetBefore: 0, // in px
  slidesOffsetAfter: 0, // in px
  normalizeSlideIndex: true,

  // Round length
  roundLengths: false,

  // Touches
  touchRatio: 1,
  touchAngle: 45,
  simulateTouch: true,
  shortSwipes: true,
  longSwipes: true,
  longSwipesRatio: 0.5,
  longSwipesMs: 300,
  followFinger: true,
  allowTouchMove: true,
  threshold: 0,
  touchMoveStopPropagation: true,
  touchReleaseOnEdges: false,

  // Unique Navigation Elements
  uniqueNavElements: true,

  // Resistance
  resistance: true,
  resistanceRatio: 0.85,

  // Progress
  watchSlidesProgress: false,
  watchSlidesVisibility: false,

  // Cursor
  grabCursor: false,

  // Clicks
  preventClicks: true,
  preventClicksPropagation: true,
  slideToClickedSlide: false,

  // Images
  preloadImages: true,
  updateOnImagesReady: true,

  // loop
  loop: false,
  loopAdditionalSlides: 0,
  loopedSlides: null,
  loopFillGroupWithBlank: false,

  // Swiping/no swiping
  allowSlidePrev: true,
  allowSlideNext: true,
  swipeHandler: null, // '.swipe-handler',
  noSwiping: true,
  noSwipingClass: 'swiper-no-swiping',

  // Passive Listeners
  passiveListeners: true,

  // NS
  containerModifierClass: 'swiper-container-', // NEW
  slideClass: 'swiper-slide',
  slideBlankClass: 'swiper-slide-invisible-blank',
  slideActiveClass: 'swiper-slide-active',
  slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
  slideVisibleClass: 'swiper-slide-visible',
  slideDuplicateClass: 'swiper-slide-duplicate',
  slideNextClass: 'swiper-slide-next',
  slideDuplicateNextClass: 'swiper-slide-duplicate-next',
  slidePrevClass: 'swiper-slide-prev',
  slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
  wrapperClass: 'swiper-wrapper',

  // Callbacks
  runCallbacksOnInit: true,
};

var prototypes = {
  update: update,
  translate: translate,
  transition: transition$1,
  slide: slide,
  loop: loop,
  grabCursor: grabCursor,
  manipulation: manipulation,
  events: events,
  breakpoints: breakpoints,
  classes: classes,
  images: images,
};

var extendedDefaults = {};

var Swiper$1 = (function (SwiperClass$$1) {
  function Swiper() {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var el;
    var params;
    if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
      params = args[0];
    } else {
      var assign;
      (assign = args, el = assign[0], params = assign[1]);
    }
    if (!params) { params = {}; }

    params = Utils.extend({}, params);
    if (el && !params.el) { params.el = el; }

    SwiperClass$$1.call(this, params);

    Object.keys(prototypes).forEach(function (prototypeGroup) {
      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        if (!Swiper.prototype[protoMethod]) {
          Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
        }
      });
    });

    // Swiper Instance
    var swiper = this;
    if (typeof swiper.modules === 'undefined') {
      swiper.modules = {};
    }
    Object.keys(swiper.modules).forEach(function (moduleName) {
      var module = swiper.modules[moduleName];
      if (module.params) {
        var moduleParamName = Object.keys(module.params)[0];
        var moduleParams = module.params[moduleParamName];
        if (typeof moduleParams !== 'object') { return; }
        if (!(moduleParamName in params && 'enabled' in moduleParams)) { return; }
        if (params[moduleParamName] === true) {
          params[moduleParamName] = { enabled: true };
        }
        if (
          typeof params[moduleParamName] === 'object' &&
          !('enabled' in params[moduleParamName])
        ) {
          params[moduleParamName].enabled = true;
        }
        if (!params[moduleParamName]) { params[moduleParamName] = { enabled: false }; }
      }
    });

    // Extend defaults with modules params
    var swiperParams = Utils.extend({}, defaults);
    swiper.useModulesParams(swiperParams);

    // Extend defaults with passed params
    swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
    swiper.originalParams = Utils.extend({}, swiper.params);
    swiper.passedParams = Utils.extend({}, params);

    // Find el
    var $el = $$1(swiper.params.el);
    el = $el[0];

    if (!el) {
      return undefined;
    }

    if ($el.length > 1) {
      var swipers = [];
      $el.each(function (index, containerEl) {
        var newParams = Utils.extend({}, params, { el: containerEl });
        swipers.push(new Swiper(newParams));
      });
      return swipers;
    }

    el.swiper = swiper;
    $el.data('swiper', swiper);

    // Find Wrapper
    var $wrapperEl = $el.children(("." + (swiper.params.wrapperClass)));

    // Extend Swiper
    Utils.extend(swiper, {
      $el: $el,
      el: el,
      $wrapperEl: $wrapperEl,
      wrapperEl: $wrapperEl[0],

      // Classes
      classNames: [],

      // Slides
      slides: $$1(),
      slidesGrid: [],
      snapGrid: [],
      slidesSizesGrid: [],

      // isDirection
      isHorizontal: function isHorizontal() {
        return swiper.params.direction === 'horizontal';
      },
      isVertical: function isVertical() {
        return swiper.params.direction === 'vertical';
      },
      // RTL
      rtl: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
      wrongRTL: $wrapperEl.css('display') === '-webkit-box',

      // Indexes
      activeIndex: 0,
      realIndex: 0,

      //
      isBeginning: true,
      isEnd: false,

      // Props
      translate: 0,
      progress: 0,
      velocity: 0,
      animating: false,

      // Locks
      allowSlideNext: swiper.params.allowSlideNext,
      allowSlidePrev: swiper.params.allowSlidePrev,

      // Touch Events
      touchEvents: (function touchEvents() {
        var touch = ['touchstart', 'touchmove', 'touchend'];
        var desktop = ['mousedown', 'mousemove', 'mouseup'];
        if (win.navigator.pointerEnabled) {
          desktop = ['pointerdown', 'pointermove', 'pointerup'];
        } else if (win.navigator.msPointerEnabled) {
          desktop = ['MSPointerDown', 'MsPointerMove', 'MsPointerUp'];
        }

        return {
          start: Support.touch || !swiper.params.simulateTouch ? touch[0] : desktop[0],
          move: Support.touch || !swiper.params.simulateTouch ? touch[1] : desktop[1],
          end: Support.touch || !swiper.params.simulateTouch ? touch[2] : desktop[2],
        };
      }()),
      touchEventsData: {
        isTouched: undefined,
        isMoved: undefined,
        allowTouchCallbacks: undefined,
        touchStartTime: undefined,
        isScrolling: undefined,
        currentTranslate: undefined,
        startTranslate: undefined,
        allowThresholdMove: undefined,
        // Form elements to match
        formElements: 'input, select, option, textarea, button, video',
        // Last click time
        lastClickTime: Utils.now(),
        clickTimeout: undefined,
        // Velocities
        velocities: [],
        allowMomentumBounce: undefined,
        isTouchEvent: undefined,
        startMoving: undefined,
      },

      // Clicks
      allowClick: true,

      // Touches
      allowTouchMove: swiper.params.allowTouchMove,

      touches: {
        startX: 0,
        startY: 0,
        currentX: 0,
        currentY: 0,
        diff: 0,
      },

      // Images
      imagesToLoad: [],
      imagesLoaded: 0,

    });

    // Install Modules
    swiper.useModules();

    // Init
    if (swiper.params.init) {
      swiper.init();
    }

    // Return app instance
    return swiper;
  }

  if ( SwiperClass$$1 ) Swiper.__proto__ = SwiperClass$$1;
  Swiper.prototype = Object.create( SwiperClass$$1 && SwiperClass$$1.prototype );
  Swiper.prototype.constructor = Swiper;

  var staticAccessors = { extendedDefaults: {},defaults: {},Class: {},$: {} };
  Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic () {
    var swiper = this;
    var params = swiper.params;
    var slides = swiper.slides;
    var slidesGrid = swiper.slidesGrid;
    var swiperSize = swiper.size;
    var activeIndex = swiper.activeIndex;
    var spv = 1;
    if (params.centeredSlides) {
      var slideSize = slides[activeIndex].swiperSlideSize;
      var breakLoop;
      for (var i = activeIndex + 1; i < slides.length; i += 1) {
        if (slides[i] && !breakLoop) {
          slideSize += slides[i].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) { breakLoop = true; }
        }
      }
      for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
        if (slides[i$1] && !breakLoop) {
          slideSize += slides[i$1].swiperSlideSize;
          spv += 1;
          if (slideSize > swiperSize) { breakLoop = true; }
        }
      }
    } else {
      for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
        if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
          spv += 1;
        }
      }
    }
    return spv;
  };
  Swiper.prototype.update = function update$$1 () {
    var swiper = this;
    if (!swiper || swiper.destroyed) { return; }
    swiper.updateSize();
    swiper.updateSlides();
    swiper.updateProgress();
    swiper.updateSlidesClasses();

    var newTranslate;
    function setTranslate() {
      newTranslate = Math.min(Math.max(swiper.translate, swiper.maxTranslate()), swiper.minTranslate());
      swiper.setTranslate(newTranslate);
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
    }
    var translated;
    if (swiper.params.freeMode) {
      setTranslate();
      if (swiper.params.autoHeight) {
        swiper.updateAutoHeight();
      }
    } else {
      if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
      if (!translated) {
        setTranslate();
      }
    }
    swiper.emit('update');
  };
  Swiper.prototype.init = function init () {
    var swiper = this;
    if (swiper.initialized) { return; }

    swiper.emit('beforeInit');

    // Set breakpoint
    if (swiper.params.breakpoints) {
      swiper.setBreakpoint();
    }

    // Add Classes
    swiper.addClasses();

    // Create loop
    if (swiper.params.loop) {
      swiper.loopCreate();
    }

    // Update size
    swiper.updateSize();

    // Update slides
    swiper.updateSlides();

    // Set Grab Cursor
    if (swiper.params.grabCursor) {
      swiper.setGrabCursor();
    }

    if (swiper.params.preloadImages) {
      swiper.preloadImages();
    }

    // Slide To Initial Slide
    if (swiper.params.loop) {
      swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
    } else {
      swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
    }

    // Attach events
    swiper.attachEvents();

    // Init Flag
    swiper.initialized = true;

    // Emit
    swiper.emit('init');
  };
  Swiper.prototype.destroy = function destroy (deleteInstance, cleanStyles) {
    if ( deleteInstance === void 0 ) deleteInstance = true;
    if ( cleanStyles === void 0 ) cleanStyles = true;

    var swiper = this;
    var params = swiper.params;
    var $el = swiper.$el;
    var $wrapperEl = swiper.$wrapperEl;
    var slides = swiper.slides;
    swiper.emit('beforeDestroy');

    // Init Flag
    swiper.initialized = false;

    // Detach events
    swiper.detachEvents();

    // Destroy loop
    if (params.loop) {
      swiper.loopDestroy();
    }

    // Cleanup styles
    if (cleanStyles) {
      swiper.removeClasses();
      $el.removeAttr('style');
      $wrapperEl.removeAttr('style');
      if (slides && slides.length) {
        slides
          .removeClass([
            params.slideVisibleClass,
            params.slideActiveClass,
            params.slideNextClass,
            params.slidePrevClass ].join(' '))
          .removeAttr('style')
          .removeAttr('data-swiper-slide-index')
          .removeAttr('data-swiper-column')
          .removeAttr('data-swiper-row');
      }
    }

    swiper.emit('destroy');

    // Detach emitter events
    Object.keys(swiper.eventsListeners).forEach(function (eventName) {
      swiper.off(eventName);
    });

    if (deleteInstance !== false) {
      swiper.$el[0].swiper = null;
      swiper.$el.data('swiper', null);
      Utils.deleteProps(swiper);
    }
    swiper.destroyed = true;
  };
  Swiper.extendDefaults = function extendDefaults (newDefaults) {
    Utils.extend(extendedDefaults, newDefaults);
  };
  staticAccessors.extendedDefaults.get = function () {
    return extendedDefaults;
  };
  staticAccessors.defaults.get = function () {
    return defaults;
  };
  staticAccessors.Class.get = function () {
    return SwiperClass$$1;
  };
  staticAccessors.$.get = function () {
    return $$1;
  };

  Object.defineProperties( Swiper, staticAccessors );

  return Swiper;
}(SwiperClass));

var Device$2 = {
  name: 'device',
  proto: {
    device: Device,
  },
  static: {
    device: Device,
  },
};

var Support$2 = {
  name: 'support',
  proto: {
    support: Support,
  },
  static: {
    support: Support,
  },
};

var Browser$2 = {
  name: 'browser',
  proto: {
    browser: Browser,
  },
  static: {
    browser: Browser,
  },
};

var Resize = {
  name: 'resize',
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      resize: {
        resizeHandler: function resizeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
          swiper.emit('beforeResize');
          swiper.emit('resize');
        },
        orientationChangeHandler: function orientationChangeHandler() {
          if (!swiper || swiper.destroyed || !swiper.initialized) { return; }
          swiper.emit('orientationchange');
        },
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      // Emit resize
      win.addEventListener('resize', swiper.resize.resizeHandler);

      // Emit orientationchange
      win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
    destroy: function destroy() {
      var swiper = this;
      win.removeEventListener('resize', swiper.resize.resizeHandler);
      win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
    },
  },
};

var Observer = {
  func: win.MutationObserver || win.WebkitMutationObserver,
  attach: function attach(target, options) {
    if ( options === void 0 ) options = {};

    var swiper = this;

    var ObserverFunc = Observer.func;
    var observer = new ObserverFunc(function (mutations) {
      mutations.forEach(function (mutation) {
        swiper.emit('observerUpdate', mutation);
      });
    });

    observer.observe(target, {
      attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
      childList: typeof options.childList === 'undefined' ? true : options.childList,
      characterData: typeof options.characterData === 'undefined' ? true : options.characterData,
    });

    swiper.observer.observers.push(observer);
  },
  init: function init() {
    var swiper = this;
    if (!Support.observer || !swiper.params.observer) { return; }
    if (swiper.params.observeParents) {
      var containerParents = swiper.$el.parents();
      for (var i = 0; i < containerParents.length; i += 1) {
        swiper.observer.attach(containerParents[i]);
      }
    }
    // Observe container
    swiper.observer.attach(swiper.$el[0], { childList: false });

    // Observe wrapper
    swiper.observer.attach(swiper.$wrapperEl[0], { attributes: false });
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.observer.observers.forEach(function (observer) {
      observer.disconnect();
    });
    swiper.observer.observers = [];
  },
};

var Observer$1 = {
  name: 'observer',
  params: {
    observer: false,
    observeParents: false,
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      observer: {
        init: Observer.init.bind(swiper),
        attach: Observer.attach.bind(swiper),
        destroy: Observer.destroy.bind(swiper),
        observers: [],
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.observer.init();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.observer.destroy();
    },
  },
};

var Virtual = {
  update: function update(force) {
    var swiper = this;
    var ref = swiper.params;
    var slidesPerView = ref.slidesPerView;
    var slidesPerGroup = ref.slidesPerGroup;
    var centeredSlides = ref.centeredSlides;
    var ref$1 = swiper.virtual;
    var previousFrom = ref$1.from;
    var previousTo = ref$1.to;
    var slides = ref$1.slides;
    var previousSlidesGrid = ref$1.slidesGrid;
    var renderSlide = ref$1.renderSlide;
    var previousOffset = ref$1.offset;
    swiper.updateActiveIndex();
    var activeIndex = swiper.activeIndex || 0;

    var offsetProp;
    if (swiper.rtl && swiper.isHorizontal()) { offsetProp = 'right'; }
    else { offsetProp = swiper.isHorizontal() ? 'left' : 'top'; }

    var slidesAfter;
    var slidesBefore;
    if (centeredSlides) {
      slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup;
      slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup;
    } else {
      slidesAfter = slidesPerView + (slidesPerGroup - 1);
      slidesBefore = slidesPerGroup;
    }
    var from = Math.max((activeIndex || 0) - slidesBefore, 0);
    var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
    var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);

    Utils.extend(swiper.virtual, {
      from: from,
      to: to,
      offset: offset,
      slidesGrid: swiper.slidesGrid,
    });

    function onRendered() {
      swiper.updateSlides();
      swiper.updateProgress();
      swiper.updateSlidesClasses();
      if (swiper.lazy && swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    }

    if (previousFrom === from && previousTo === to && !force) {
      if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
        swiper.slides.css(offsetProp, (offset + "px"));
      }
      swiper.updateProgress();
      return;
    }
    if (swiper.params.virtual.renderExternal) {
      swiper.params.virtual.renderExternal.call(swiper, {
        offset: offset,
        from: from,
        to: to,
        slides: (function getSlides() {
          var slidesToRender = [];
          for (var i = from; i <= to; i += 1) {
            slidesToRender.push(slides[i]);
          }
          return slidesToRender;
        }()),
      });
      onRendered();
      return;
    }
    var prependIndexes = [];
    var appendIndexes = [];
    if (force) {
      swiper.$wrapperEl.find(("." + (swiper.params.slideClass))).remove();
    } else {
      for (var i = previousFrom; i <= previousTo; i += 1) {
        if (i < from || i > to) {
          swiper.$wrapperEl.find(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + i + "\"]")).remove();
        }
      }
    }
    for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
      if (i$1 >= from && i$1 <= to) {
        if (typeof previousTo === 'undefined' || force) {
          appendIndexes.push(i$1);
        } else {
          if (i$1 > previousTo) { appendIndexes.push(i$1); }
          if (i$1 < previousFrom) { prependIndexes.push(i$1); }
        }
      }
    }
    appendIndexes.forEach(function (index) {
      swiper.$wrapperEl.append(renderSlide(slides[index], index));
    });
    prependIndexes.sort(function (a, b) { return a < b; }).forEach(function (index) {
      swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
    });
    swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, (offset + "px"));
    onRendered();
  },
  renderSlide: function renderSlide(slide, index) {
    var swiper = this;
    var params = swiper.params.virtual;
    if (params.cache && swiper.virtual.cache[index]) {
      return swiper.virtual.cache[index];
    }
    var $slideEl = params.renderSlide
      ? $$1(params.renderSlide.call(swiper, slide, index))
      : $$1(("<div class=\"" + (swiper.params.slideClass) + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>"));
    if (!$slideEl.attr('data-swiper-slide-index')) { $slideEl.attr('data-swiper-slide-index', index); }
    if (params.cache) { swiper.virtual.cache[index] = $slideEl; }
    return $slideEl;
  },
  appendSlide: function appendSlide(slide) {
    var swiper = this;
    swiper.virtual.slides.push(slide);
    swiper.virtual.update(true);
  },
  prependSlide: function prependSlide(slide) {
    var swiper = this;
    swiper.virtual.slides.unshift(slide);
    if (swiper.params.virtual.cache) {
      var cache = swiper.virtual.cache;
      var newCache = {};
      Object.keys(cache).forEach(function (cachedIndex) {
        newCache[cachedIndex + 1] = cache[cachedIndex];
      });
      swiper.virtual.cache = newCache;
    }
    swiper.virtual.update(true);
    swiper.slideNext(0);
  },
};

var Virtual$1 = {
  name: 'virtual',
  params: {
    virtual: {
      enabled: false,
      slides: [],
      cache: true,
      renderSlide: null,
      renderExternal: null,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      virtual: {
        update: Virtual.update.bind(swiper),
        appendSlide: Virtual.appendSlide.bind(swiper),
        prependSlide: Virtual.prependSlide.bind(swiper),
        renderSlide: Virtual.renderSlide.bind(swiper),
        slides: swiper.params.virtual.slides,
        cache: {},
      },
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) { return; }
      swiper.classNames.push(((swiper.params.containerModifierClass) + "virtual"));
      var overwriteParams = {
        watchSlidesProgress: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);

      swiper.virtual.update();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.virtual.enabled) { return; }
      swiper.virtual.update();
    },
  },
};

var Keyboard = {
  handle: function handle(event) {
    var swiper = this;
    var e = event;
    if (e.originalEvent) { e = e.originalEvent; } // jquery fix
    var kc = e.keyCode || e.charCode;
    // Directions locks
    if (!swiper.allowSlideNext && ((swiper.isHorizontal() && kc === 39) || (swiper.isVertical() && kc === 40))) {
      return false;
    }
    if (!swiper.allowSlidePrev && ((swiper.isHorizontal() && kc === 37) || (swiper.isVertical() && kc === 38))) {
      return false;
    }
    if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
      return undefined;
    }
    if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
      return undefined;
    }
    if (kc === 37 || kc === 39 || kc === 38 || kc === 40) {
      var inView = false;
      // Check that swiper should be inside of visible area of window
      if (swiper.$el.parents(("." + (swiper.params.slideClass))).length > 0 && swiper.$el.parents(("." + (swiper.params.slideActiveClass))).length === 0) {
        return undefined;
      }
      var windowScroll = {
        left: win.pageXOffset,
        top: win.pageYOffset,
      };
      var windowWidth = win.innerWidth;
      var windowHeight = win.innerHeight;
      var swiperOffset = swiper.$el.offset();
      if (swiper.rtl) { swiperOffset.left -= swiper.$el[0].scrollLeft; }
      var swiperCoord = [
        [swiperOffset.left, swiperOffset.top],
        [swiperOffset.left + swiper.width, swiperOffset.top],
        [swiperOffset.left, swiperOffset.top + swiper.height],
        [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height] ];
      for (var i = 0; i < swiperCoord.length; i += 1) {
        var point = swiperCoord[i];
        if (
          point[0] >= windowScroll.left && point[0] <= windowScroll.left + windowWidth &&
            point[1] >= windowScroll.top && point[1] <= windowScroll.top + windowHeight
        ) {
          inView = true;
        }
      }
      if (!inView) { return undefined; }
    }
    if (swiper.isHorizontal()) {
      if (kc === 37 || kc === 39) {
        if (e.preventDefault) { e.preventDefault(); }
        else { e.returnValue = false; }
      }
      if ((kc === 39 && !swiper.rtl) || (kc === 37 && swiper.rtl)) { swiper.slideNext(); }
      if ((kc === 37 && !swiper.rtl) || (kc === 39 && swiper.rtl)) { swiper.slidePrev(); }
    } else {
      if (kc === 38 || kc === 40) {
        if (e.preventDefault) { e.preventDefault(); }
        else { e.returnValue = false; }
      }
      if (kc === 40) { swiper.slideNext(); }
      if (kc === 38) { swiper.slidePrev(); }
    }
    swiper.emit('keyPress', kc);
    return undefined;
  },
  enable: function enable() {
    var swiper = this;
    if (swiper.keyboard.enabled) { return; }
    $$1(doc).on('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = true;
  },
  disable: function disable() {
    var swiper = this;
    if (!swiper.keyboard.enabled) { return; }
    $$1(doc).off('keydown', swiper.keyboard.handle);
    swiper.keyboard.enabled = false;
  },
};

var Keyboard$1 = {
  name: 'keyboard',
  params: {
    keyboard: {
      enabled: false,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      keyboard: {
        enabled: false,
        enable: Keyboard.enable.bind(swiper),
        disable: Keyboard.disable.bind(swiper),
        handle: Keyboard.handle.bind(swiper),
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.keyboard.enabled) {
        swiper.keyboard.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.keyboard.enabled) {
        swiper.keyboard.disable();
      }
    },
  },
};

function isEventSupported() {
  var eventName = 'onwheel';
  var isSupported = eventName in doc;

  if (!isSupported) {
    var element = doc.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported &&
    doc.implementation &&
    doc.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    doc.implementation.hasFeature('', '') !== true
  ) {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}
var Mousewheel = {
  lastScrollTime: Utils.now(),
  event: (function getEvent() {
    if (win.navigator.userAgent.indexOf('firefox') > -1) { return 'DOMMouseScroll'; }
    return isEventSupported() ? 'wheel' : 'mousewheel';
  }()),
  normalize: function normalize(e) {
    // Reasonable defaults
    var PIXEL_STEP = 10;
    var LINE_HEIGHT = 40;
    var PAGE_HEIGHT = 800;

    var sX = 0;
    var sY = 0; // spinX, spinY
    var pX = 0;
    var pY = 0; // pixelX, pixelY

    // Legacy
    if ('detail' in e) {
      sY = e.detail;
    }
    if ('wheelDelta' in e) {
      sY = -e.wheelDelta / 120;
    }
    if ('wheelDeltaY' in e) {
      sY = -e.wheelDeltaY / 120;
    }
    if ('wheelDeltaX' in e) {
      sX = -e.wheelDeltaX / 120;
    }

    // side scrolling on FF with DOMMouseScroll
    if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in e) {
      pY = e.deltaY;
    }
    if ('deltaX' in e) {
      pX = e.deltaX;
    }

    if ((pX || pY) && e.deltaMode) {
      if (e.deltaMode === 1) { // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else { // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) {
      sX = (pX < 1) ? -1 : 1;
    }
    if (pY && !sY) {
      sY = (pY < 1) ? -1 : 1;
    }

    return {
      spinX: sX,
      spinY: sY,
      pixelX: pX,
      pixelY: pY,
    };
  },
  handle: function handle(event) {
    var e = event;
    var swiper = this;
    var params = swiper.params.mousewheel;
    if (e.originalEvent) { e = e.originalEvent; } // jquery fix
    var delta = 0;
    var rtlFactor = swiper.rtl ? -1 : 1;

    var data = Mousewheel.normalize(e);

    if (params.forceToAxis) {
      if (swiper.isHorizontal()) {
        if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) { delta = data.pixelX * rtlFactor; }
        else { return true; }
      } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) { delta = data.pixelY; }
      else { return true; }
    } else {
      delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
    }

    if (delta === 0) { return true; }

    if (params.invert) { delta = -delta; }

    if (!swiper.params.freeMode) {
      if (Utils.now() - swiper.mousewheel.lastScrollTime > 60) {
        if (delta < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', e);
          } else if (params.releaseOnEdges) { return true; }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', e);
        } else if (params.releaseOnEdges) { return true; }
      }
      swiper.mousewheel.lastScrollTime = (new win.Date()).getTime();
    } else {
      // Freemode or scrollContainer:
      var position = swiper.getTranslate() + (delta * params.sensitivity);
      var wasBeginning = swiper.isBeginning;
      var wasEnd = swiper.isEnd;

      if (position >= swiper.minTranslate()) { position = swiper.minTranslate(); }
      if (position <= swiper.maxTranslate()) { position = swiper.maxTranslate(); }

      swiper.setTransition(0);
      swiper.setTranslate(position);
      swiper.updateProgress();
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();

      if ((!wasBeginning && swiper.isBeginning) || (!wasEnd && swiper.isEnd)) {
        swiper.updateSlidesClasses();
      }

      if (swiper.params.freeModeSticky) {
        clearTimeout(swiper.mousewheel.timeout);
        swiper.mousewheel.timeout = Utils.nextTick(function () {
          swiper.slideReset();
        }, 300);
      }
      // Emit event
      swiper.emit('scroll', e);

      // Stop autoplay
      if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) { swiper.stopAutoplay(); }

      // Return page scroll on edge positions
      if (position === 0 || position === swiper.maxTranslate()) { return true; }
    }

    if (e.preventDefault) { e.preventDefault(); }
    else { e.returnValue = false; }
    return false;
  },
  enable: function enable() {
    var swiper = this;
    if (!Mousewheel.event) { return false; }
    if (swiper.mousewheel.enabled) { return false; }
    var target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = $$1(swiper.params.mousewheel.eventsTarged);
    }
    target.on(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = true;
    return true;
  },
  disable: function disable() {
    var swiper = this;
    if (!Mousewheel.event) { return false; }
    if (!swiper.mousewheel.enabled) { return false; }
    var target = swiper.$el;
    if (swiper.params.mousewheel.eventsTarged !== 'container') {
      target = $$1(swiper.params.mousewheel.eventsTarged);
    }
    target.off(Mousewheel.event, swiper.mousewheel.handle);
    swiper.mousewheel.enabled = false;
    return true;
  },
};

var Mousewheel$1 = {
  name: 'mousewheel',
  params: {
    mousewheel: {
      enabled: false,
      releaseOnEdges: false,
      invert: false,
      forceToAxis: false,
      sensitivity: 1,
      eventsTarged: 'container',
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      mousewheel: {
        enabled: false,
        enable: Mousewheel.enable.bind(swiper),
        disable: Mousewheel.disable.bind(swiper),
        handle: Mousewheel.handle.bind(swiper),
        lastScrollTime: Utils.now(),
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.mousewheel.enabled) { swiper.mousewheel.enable(); }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.mousewheel.enabled) { swiper.mousewheel.disable(); }
    },
  },
};

var Navigation = {
  update: function update() {
    // Update Navigation Buttons
    var swiper = this;
    var params = swiper.params.navigation;

    if (swiper.params.loop) { return; }
    var ref = swiper.navigation;
    var $nextEl = ref.$nextEl;
    var $prevEl = ref.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        $prevEl.addClass(params.disabledClass);
      } else {
        $prevEl.removeClass(params.disabledClass);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        $nextEl.addClass(params.disabledClass);
      } else {
        $nextEl.removeClass(params.disabledClass);
      }
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.navigation;
    if (!(params.nextEl || params.prevEl)) { return; }

    var $nextEl;
    var $prevEl;
    if (params.nextEl) {
      $nextEl = $$1(params.nextEl);
      if (
        swiper.params.uniqueNavElements &&
        typeof params.nextEl === 'string' &&
        $nextEl.length > 1 &&
        swiper.$el.find(params.nextEl).length === 1
      ) {
        $nextEl = swiper.$el.find(params.nextEl);
      }
    }
    if (params.prevEl) {
      $prevEl = $$1(params.prevEl);
      if (
        swiper.params.uniqueNavElements &&
        typeof params.prevEl === 'string' &&
        $prevEl.length > 1 &&
        swiper.$el.find(params.prevEl).length === 1
      ) {
        $prevEl = swiper.$el.find(params.prevEl);
      }
    }

    if ($nextEl && $nextEl.length > 0) {
      $nextEl.on('click', function (e) {
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) { return; }
        swiper.slideNext();
      });
    }
    if ($prevEl && $prevEl.length > 0) {
      $prevEl.on('click', function (e) {
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) { return; }
        swiper.slidePrev();
      });
    }

    Utils.extend(swiper.navigation, {
      $nextEl: $nextEl,
      nextEl: $nextEl && $nextEl[0],
      $prevEl: $prevEl,
      prevEl: $prevEl && $prevEl[0],
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var ref = swiper.navigation;
    var $nextEl = ref.$nextEl;
    var $prevEl = ref.$prevEl;
    if ($nextEl && $nextEl.length) {
      $nextEl.off('click');
      $nextEl.removeClass(swiper.params.navigation.disabledClass);
    }
    if ($prevEl && $prevEl.length) {
      $prevEl.off('click');
      $prevEl.removeClass(swiper.params.navigation.disabledClass);
    }
  },
};

var Navigation$1 = {
  name: 'navigation',
  params: {
    navigation: {
      nextEl: null,
      prevEl: null,

      hideOnClick: false,
      disabledClass: 'swiper-button-disabled',
      hiddenClass: 'swiper-button-hidden',
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      navigation: {
        init: Navigation.init.bind(swiper),
        update: Navigation.update.bind(swiper),
        destroy: Navigation.destroy.bind(swiper),
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.navigation.init();
      swiper.navigation.update();
    },
    toEdge: function toEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      swiper.navigation.update();
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.navigation.destroy();
    },
    click: function click(e) {
      var swiper = this;
      var ref = swiper.navigation;
      var $nextEl = ref.$nextEl;
      var $prevEl = ref.$prevEl;
      if (
        swiper.params.navigation.hideOnClick &&
        !$$1(e.target).is($prevEl) &&
        !$$1(e.target).is($nextEl)
      ) {
        if ($nextEl) { $nextEl.toggleClass(swiper.params.navigation.hiddenClass); }
        if ($prevEl) { $prevEl.toggleClass(swiper.params.navigation.hiddenClass); }
      }
    },
  },
};

var Pagination = {
  update: function update() {
    // Render || Update Pagination bullets/items
    var swiper = this;
    var rtl = swiper.rtl;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
    var $el = swiper.pagination.$el;
    // Current/Total
    var current;
    var total = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
    if (swiper.params.loop) {
      current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
      if (current > slidesLength - 1 - (swiper.loopedSlides * 2)) {
        current -= (slidesLength - (swiper.loopedSlides * 2));
      }
      if (current > total - 1) { current -= total; }
      if (current < 0 && swiper.params.paginationType !== 'bullets') { current = total + current; }
    } else if (typeof swiper.snapIndex !== 'undefined') {
      current = swiper.snapIndex;
    } else {
      current = swiper.activeIndex || 0;
    }
    // Types
    if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
      var bullets = swiper.pagination.bullets;
      if (params.dynamicBullets) {
        swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
        $el.css(swiper.isHorizontal() ? 'width' : 'height', ((swiper.pagination.bulletSize * 5) + "px"));
      }
      bullets.removeClass(((params.bulletActiveClass) + " " + (params.bulletActiveClass) + "-next " + (params.bulletActiveClass) + "-next-next " + (params.bulletActiveClass) + "-prev " + (params.bulletActiveClass) + "-prev-prev"));
      if ($el.length > 1) {
        bullets.each(function (index, bullet) {
          var $bullet = $$1(bullet);
          if ($bullet.index() === current) {
            $bullet.addClass(params.bulletActiveClass);
            if (params.dynamicBullets) {
              $bullet
                .prev()
                .addClass(((params.bulletActiveClass) + "-prev"))
                .prev()
                .addClass(((params.bulletActiveClass) + "-prev-prev"));
              $bullet
                .next()
                .addClass(((params.bulletActiveClass) + "-next"))
                .next()
                .addClass(((params.bulletActiveClass) + "-next-next"));
            }
          }
        });
      } else {
        var $bullet = bullets.eq(current);
        $bullet.addClass(params.bulletActiveClass);
        if (params.dynamicBullets) {
          $bullet
            .prev()
            .addClass(((params.bulletActiveClass) + "-prev"))
            .prev()
            .addClass(((params.bulletActiveClass) + "-prev-prev"));
          $bullet
            .next()
            .addClass(((params.bulletActiveClass) + "-next"))
            .next()
            .addClass(((params.bulletActiveClass) + "-next-next"));
        }
      }
      if (params.dynamicBullets) {
        var dynamicBulletsLength = Math.min(bullets.length, 5);
        var bulletsOffset = (((swiper.pagination.bulletSize * dynamicBulletsLength) - (swiper.pagination.bulletSize)) / 2) - (current * swiper.pagination.bulletSize);
        var offsetProp = rtl ? 'right' : 'left';
        bullets.css(swiper.isHorizontal() ? offsetProp : 'top', (bulletsOffset + "px"));
      }
    }
    if (params.type === 'fraction') {
      $el.find(("." + (params.currentClass))).text(current + 1);
      $el.find(("." + (params.totalClass))).text(total);
    }
    if (params.type === 'progressbar') {
      var scale = (current + 1) / total;
      var scaleX = scale;
      var scaleY = 1;
      if (!swiper.isHorizontal()) {
        scaleY = scale;
        scaleX = 1;
      }
      $el.find(("." + (params.progressbarFillClass))).transform(("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")")).transition(swiper.params.speed);
    }
    if (params.type === 'custom' && params.renderCustom) {
      $el.html(params.renderCustom(swiper, current + 1, total));
      swiper.emit('paginationRender', swiper, $el[0]);
    } else {
      swiper.emit('paginationUpdate', swiper, $el[0]);
    }
  },
  render: function render() {
    // Render Container
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
    var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;

    var $el = swiper.pagination.$el;
    var paginationHTML = '';
    if (params.type === 'bullets') {
      var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - (swiper.loopedSlides * 2)) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
      for (var i = 0; i < numberOfBullets; i += 1) {
        if (params.renderBullet) {
          paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
        } else {
          paginationHTML += "<" + (params.bulletElement) + " class=\"" + (params.bulletClass) + "\"></" + (params.bulletElement) + ">";
        }
      }
      $el.html(paginationHTML);
      swiper.pagination.bullets = $el.find(("." + (params.bulletClass)));
    }
    if (params.type === 'fraction') {
      if (params.renderFraction) {
        paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
      } else {
        paginationHTML =
        "<span class=\"" + (params.currentClass) + "\"></span>" +
        ' / ' +
        "<span class=\"" + (params.totalClass) + "\"></span>";
      }
      $el.html(paginationHTML);
    }
    if (params.type === 'progressbar') {
      if (params.renderProgressbar) {
        paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
      } else {
        paginationHTML = "<span class=\"" + (params.progressbarFillClass) + "\"></span>";
      }
      $el.html(paginationHTML);
    }
    if (params.type !== 'custom') {
      swiper.emit('paginationRender', swiper.pagination.$el[0]);
    }
  },
  init: function init() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el) { return; }

    var $el = $$1(params.el);
    if ($el.length === 0) { return; }

    if (
      swiper.params.uniqueNavElements &&
      typeof params.el === 'string' &&
      $el.length > 1 &&
      swiper.$el.find(params.el).length === 1
    ) {
      $el = swiper.$el.find(params.el);
    }

    if (params.type === 'bullets' && params.clickable) {
      $el.addClass(params.clickableClass);
    }

    $el.addClass(params.modifierClass + params.type);

    if (params.type === 'bullets' && params.dynamicBullets) {
      $el.addClass(("" + (params.modifierClass) + (params.type) + "-dynamic"));
    }

    if (params.clickable) {
      $el.on('click', ("." + (params.bulletClass)), function onClick(e) {
        e.preventDefault();
        var index = $$1(this).index() * swiper.params.slidesPerGroup;
        if (swiper.params.loop) { index += swiper.loopedSlides; }
        swiper.slideTo(index);
      });
    }

    Utils.extend(swiper.pagination, {
      $el: $el,
      el: $el[0],
    });
  },
  destroy: function destroy() {
    var swiper = this;
    var params = swiper.params.pagination;
    if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) { return; }
    var $el = swiper.pagination.$el;

    $el.removeClass(params.hiddenClass);
    $el.removeClass(params.modifierClass + params.type);
    if (swiper.pagination.bullets) { swiper.pagination.bullets.removeClass(params.bulletActiveClass); }
    if (params.clickable) {
      $el.off('click', ("." + (params.bulletClass)));
    }
  },
};

var Pagination$1 = {
  name: 'pagination',
  params: {
    pagination: {
      el: null,
      bulletElement: 'span',
      clickable: false,
      hideOnClick: false,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      type: 'bullets', // 'bullets' or 'progressbar' or 'fraction' or 'custom'
      dynamicBullets: false,

      bulletClass: 'swiper-pagination-bullet',
      bulletActiveClass: 'swiper-pagination-bullet-active',
      modifierClass: 'swiper-pagination-', // NEW
      currentClass: 'swiper-pagination-current',
      totalClass: 'swiper-pagination-total',
      hiddenClass: 'swiper-pagination-hidden',
      progressbarFillClass: 'swiper-pagination-progressbar-fill',
      clickableClass: 'swiper-pagination-clickable', // NEW
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      pagination: {
        init: Pagination.init.bind(swiper),
        render: Pagination.render.bind(swiper),
        update: Pagination.update.bind(swiper),
        destroy: Pagination.destroy.bind(swiper),
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();
    },
    activeIndexChange: function activeIndexChange() {
      var swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.update();
      } else if (typeof swiper.snapIndex === 'undefined') {
        swiper.pagination.update();
      }
    },
    snapIndexChange: function snapIndexChange() {
      var swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.update();
      }
    },
    slidesLengthChange: function slidesLengthChange() {
      var swiper = this;
      if (swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    snapGridLengthChange: function snapGridLengthChange() {
      var swiper = this;
      if (!swiper.params.loop) {
        swiper.pagination.render();
        swiper.pagination.update();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.pagination.destroy();
    },
    click: function click(e) {
      var swiper = this;
      if (
        swiper.params.pagination.el &&
        swiper.params.pagination.hideOnClick &&
        swiper.pagination.$el.length > 0 &&
        !$$1(e.target).hasClass(swiper.params.pagination.bulletClass)
      ) {
        swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
      }
    },
  },
};

var Scrollbar = {
  setTranslate: function setTranslate() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
    var scrollbar = swiper.scrollbar;
    var rtl = swiper.rtl;
    var progress = swiper.progress;
    var dragSize = scrollbar.dragSize;
    var trackSize = scrollbar.trackSize;
    var $dragEl = scrollbar.$dragEl;
    var $el = scrollbar.$el;
    var params = swiper.params.scrollbar;

    var newSize = dragSize;
    var newPos = (trackSize - dragSize) * progress;
    if (rtl && swiper.isHorizontal()) {
      newPos = -newPos;
      if (newPos > 0) {
        newSize = dragSize - newPos;
        newPos = 0;
      } else if (-newPos + dragSize > trackSize) {
        newSize = trackSize + newPos;
      }
    } else if (newPos < 0) {
      newSize = dragSize + newPos;
      newPos = 0;
    } else if (newPos + dragSize > trackSize) {
      newSize = trackSize - newPos;
    }
    if (swiper.isHorizontal()) {
      if (Support.transforms3d) {
        $dragEl.transform(("translate3d(" + newPos + "px, 0, 0)"));
      } else {
        $dragEl.transform(("translateX(" + newPos + "px)"));
      }
      $dragEl[0].style.width = newSize + "px";
    } else {
      if (Support.transforms3d) {
        $dragEl.transform(("translate3d(0px, " + newPos + "px, 0)"));
      } else {
        $dragEl.transform(("translateY(" + newPos + "px)"));
      }
      $dragEl[0].style.height = newSize + "px";
    }
    if (params.hide) {
      clearTimeout(swiper.scrollbar.timeout);
      $el[0].style.opacity = 1;
      swiper.scrollbar.timeout = setTimeout(function () {
        $el[0].style.opacity = 0;
        $el.transition(400);
      }, 1000);
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }
    swiper.scrollbar.$dragEl.transition(duration);
  },
  updateSize: function updateSize() {
    var swiper = this;
    if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) { return; }

    var scrollbar = swiper.scrollbar;
    var $dragEl = scrollbar.$dragEl;
    var $el = scrollbar.$el;

    $dragEl[0].style.width = '';
    $dragEl[0].style.height = '';
    var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;

    var divider = swiper.size / swiper.virtualSize;
    var moveDivider = divider * (trackSize / swiper.size);
    var dragSize;
    if (swiper.params.scrollbar.dragSize === 'auto') {
      dragSize = trackSize * divider;
    } else {
      dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
    }

    if (swiper.isHorizontal()) {
      $dragEl[0].style.width = dragSize + "px";
    } else {
      $dragEl[0].style.height = dragSize + "px";
    }

    if (divider >= 1) {
      $el[0].style.display = 'none';
    } else {
      $el[0].style.display = '';
    }
    if (swiper.params.scrollbarHide) {
      $el[0].style.opacity = 0;
    }
    Utils.extend(scrollbar, {
      trackSize: trackSize,
      divider: divider,
      moveDivider: moveDivider,
      dragSize: dragSize,
    });
  },
  setDragPosition: function setDragPosition(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar;
    var $el = scrollbar.$el;
    var dragSize = scrollbar.dragSize;
    var trackSize = scrollbar.trackSize;

    var pointerPosition;
    if (swiper.isHorizontal()) {
      pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageX : e.pageX || e.clientX);
    } else {
      pointerPosition = ((e.type === 'touchstart' || e.type === 'touchmove') ? e.targetTouches[0].pageY : e.pageY || e.clientY);
    }
    var positionRatio;
    positionRatio = ((pointerPosition) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragSize / 2)) / (trackSize - dragSize);
    positionRatio = Math.max(Math.min(positionRatio, 1), 0);
    if (swiper.rtl) {
      positionRatio = 1 - positionRatio;
    }

    var position = swiper.minTranslate() + ((swiper.maxTranslate() - swiper.minTranslate()) * positionRatio);

    swiper.updateProgress(position);
    swiper.setTranslate(position);
    swiper.updateActiveIndex();
    swiper.updateSlidesClasses();
  },
  onDragStart: function onDragStart(e) {
    var swiper = this;
    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar;
    var $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    var $dragEl = scrollbar.$dragEl;
    swiper.scrollbar.isTouched = true;
    e.preventDefault();
    e.stopPropagation();

    $wrapperEl.transition(100);
    $dragEl.transition(100);
    scrollbar.setDragPosition(e);

    clearTimeout(swiper.scrollbar.dragTimeout);

    $el.transition(0);
    if (params.hide) {
      $el.css('opacity', 1);
    }
    swiper.emit('scrollbarDragStart', e);
  },
  onDragMove: function onDragMove(e) {
    var swiper = this;
    var scrollbar = swiper.scrollbar;
    var $wrapperEl = swiper.$wrapperEl;
    var $el = scrollbar.$el;
    var $dragEl = scrollbar.$dragEl;

    if (!swiper.scrollbar.isTouched) { return; }
    if (e.preventDefault) { e.preventDefault(); }
    else { e.returnValue = false; }
    scrollbar.setDragPosition(e);
    $wrapperEl.transition(0);
    $el.transition(0);
    $dragEl.transition(0);
    swiper.emit('scrollbarDragMove', e);
  },
  onDragEnd: function onDragEnd(e) {
    var swiper = this;

    var params = swiper.params.scrollbar;
    var scrollbar = swiper.scrollbar;
    var $el = scrollbar.$el;

    if (!swiper.scrollbar.isTouched) { return; }
    swiper.scrollbar.isTouched = false;
    if (params.hide) {
      clearTimeout(swiper.scrollbar.dragTimeout);
      swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
        $el.css('opacity', 0);
        $el.transition(400);
      }, 1000);
    }
    swiper.emit('scrollbarDragEnd', e);
    if (params.snapOnRelease) {
      swiper.slideReset();
    }
  },
  enableDraggable: function enableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) { return; }
    var scrollbar = swiper.scrollbar;
    var $el = scrollbar.$el;
    var target = Support.touch ? $el[0] : document;
    $el.on(swiper.scrollbar.dragEvents.start, swiper.scrollbar.onDragStart);
    $$1(target).on(swiper.scrollbar.dragEvents.move, swiper.scrollbar.onDragMove);
    $$1(target).on(swiper.scrollbar.dragEvents.end, swiper.scrollbar.onDragEnd);
  },
  disableDraggable: function disableDraggable() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) { return; }
    var scrollbar = swiper.scrollbar;
    var $el = scrollbar.$el;
    var target = Support.touch ? $el[0] : document;
    $el.off(swiper.scrollbar.dragEvents.start);
    $$1(target).off(swiper.scrollbar.dragEvents.move);
    $$1(target).off(swiper.scrollbar.dragEvents.end);
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.scrollbar.el) { return; }
    var scrollbar = swiper.scrollbar;
    var $swiperEl = swiper.$el;
    var touchEvents = swiper.touchEvents;
    var params = swiper.params.scrollbar;

    var $el = $$1(params.el);
    if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
      $el = $swiperEl.find(params.el);
    }

    var $dragEl = $el.find('.swiper-scrollbar-drag');
    if ($dragEl.length === 0) {
      $dragEl = $$1('<div class="swiper-scrollbar-drag"></div>');
      $el.append($dragEl);
    }

    swiper.scrollbar.dragEvents = (function dragEvents() {
      if ((swiper.params.simulateTouch === false && !Support.touch)) {
        return {
          start: 'mousedown',
          move: 'mousemove',
          end: 'mouseup',
        };
      }
      return touchEvents;
    }());

    Utils.extend(scrollbar, {
      $el: $el,
      el: $el[0],
      $dragEl: $dragEl,
      dragEl: $dragEl[0],
    });

    if (params.draggable) {
      scrollbar.enableDraggable();
    }
  },
  destroy: function destroy() {
    var swiper = this;
    swiper.scrollbar.disableDraggable();
  },
};

var Scrollbar$1 = {
  name: 'scrollbar',
  params: {
    scrollbar: {
      el: null,
      dragSize: 'auto',
      hide: false,
      draggable: false,
      snapOnRelease: true,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      scrollbar: {
        init: Scrollbar.init.bind(swiper),
        destroy: Scrollbar.destroy.bind(swiper),
        updateSize: Scrollbar.updateSize.bind(swiper),
        setTranslate: Scrollbar.setTranslate.bind(swiper),
        setTransition: Scrollbar.setTransition.bind(swiper),
        enableDraggable: Scrollbar.enableDraggable.bind(swiper),
        disableDraggable: Scrollbar.disableDraggable.bind(swiper),
        setDragPosition: Scrollbar.setDragPosition.bind(swiper),
        onDragStart: Scrollbar.onDragStart.bind(swiper),
        onDragMove: Scrollbar.onDragMove.bind(swiper),
        onDragEnd: Scrollbar.onDragEnd.bind(swiper),
        isTouched: false,
        timeout: null,
        dragTimeout: null,
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      swiper.scrollbar.init();
      swiper.scrollbar.updateSize();
      swiper.scrollbar.setTranslate();
    },
    update: function update() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    resize: function resize() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      swiper.scrollbar.updateSize();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      swiper.scrollbar.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      swiper.scrollbar.setTransition(duration);
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.scrollbar.destroy();
    },
  },
};

var Parallax = {
  setTransform: function setTransform(el, progress) {
    var swiper = this;
    var rtl = swiper.rtl;

    var $el = $$1(el);
    var rtlFactor = rtl ? -1 : 1;

    var p = $el.attr('data-swiper-parallax') || '0';
    var x = $el.attr('data-swiper-parallax-x');
    var y = $el.attr('data-swiper-parallax-y');
    var scale = $el.attr('data-swiper-parallax-scale');
    var opacity = $el.attr('data-swiper-parallax-opacity');

    if (x || y) {
      x = x || '0';
      y = y || '0';
    } else if (swiper.isHorizontal()) {
      x = p;
      y = '0';
    } else {
      y = p;
      x = '0';
    }

    if ((x).indexOf('%') >= 0) {
      x = (parseInt(x, 10) * progress * rtlFactor) + "%";
    } else {
      x = (x * progress * rtlFactor) + "px";
    }
    if ((y).indexOf('%') >= 0) {
      y = (parseInt(y, 10) * progress) + "%";
    } else {
      y = (y * progress) + "px";
    }

    if (typeof opacity !== 'undefined' && opacity !== null) {
      var currentOpacity = opacity - ((opacity - 1) * (1 - Math.abs(progress)));
      $el[0].style.opacity = currentOpacity;
    }
    if (typeof scale === 'undefined' || scale === null) {
      $el.transform(("translate3d(" + x + ", " + y + ", 0px)"));
    } else {
      var currentScale = scale - ((scale - 1) * (1 - Math.abs(progress)));
      $el.transform(("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")"));
    }
  },
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el;
    var slides = swiper.slides;
    var progress = swiper.progress;
    var snapGrid = swiper.snapGrid;
    $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
      .each(function (index, el) {
        swiper.parallax.setTransform(el, progress);
      });
    slides.each(function (slideIndex, slideEl) {
      var slideProgress = slideEl.progress;
      if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
        slideProgress += Math.ceil(slideIndex / 2) - (progress * (snapGrid.length - 1));
      }
      slideProgress = Math.min(Math.max(slideProgress, -1), 1);
      $$1(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
        .each(function (index, el) {
          swiper.parallax.setTransform(el, slideProgress);
        });
    });
  },
  setTransition: function setTransition(duration) {
    if ( duration === void 0 ) duration = this.params.speed;

    var swiper = this;
    var $el = swiper.$el;
    $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]')
      .each(function (index, parallaxEl) {
        var $parallaxEl = $$1(parallaxEl);
        var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
        if (duration === 0) { parallaxDuration = 0; }
        $parallaxEl.transition(parallaxDuration);
      });
  },
};

var Parallax$1 = {
  name: 'parallax',
  params: {
    parallax: {
      enabled: false,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      parallax: {
        setTransform: Parallax.setTransform.bind(swiper),
        setTranslate: Parallax.setTranslate.bind(swiper),
        setTransition: Parallax.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      swiper.params.watchSlidesProgress = true;
    },
    init: function init() {
      var swiper = this;
      if (!swiper.params.parallax) { return; }
      swiper.parallax.setTranslate();
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (!swiper.params.parallax) { return; }
      swiper.parallax.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (!swiper.params.parallax) { return; }
      swiper.parallax.setTransition(duration);
    },
  },
};

var Zoom = {
  // Calc Scale From Multi-touches
  getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
    if (e.targetTouches.length < 2) { return 1; }
    var x1 = e.targetTouches[0].pageX;
    var y1 = e.targetTouches[0].pageY;
    var x2 = e.targetTouches[1].pageX;
    var y2 = e.targetTouches[1].pageY;
    var distance = Math.sqrt((Math.pow( (x2 - x1), 2 )) + (Math.pow( (y2 - y1), 2 )));
    return distance;
  },
  // Events
  onGestureStart: function onGestureStart(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    zoom.fakeGestureTouched = false;
    zoom.fakeGestureMoved = false;
    if (!Support.gestures) {
      if (e.type !== 'touchstart' || (e.type === 'touchstart' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureTouched = true;
      gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$slideEl || !gesture.$slideEl.length) {
      gesture.$slideEl = $$1(this);
      if (gesture.$slideEl.length === 0) { gesture.$slideEl = swiper.slides.eq(swiper.activeIndex); }
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
      gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
      if (gesture.$imageWrapEl.length === 0) {
        gesture.$imageEl = undefined;
        return;
      }
    }
    gesture.$imageEl.transition(0);
    swiper.zoom.isScaling = true;
  },
  onGestureChange: function onGestureChange(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    if (!Support.gestures) {
      if (e.type !== 'touchmove' || (e.type === 'touchmove' && e.targetTouches.length < 2)) {
        return;
      }
      zoom.fakeGestureMoved = true;
      gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
    if (Support.gestures) {
      swiper.zoom.scale = e.scale * zoom.currentScale;
    } else {
      zoom.scale = (gesture.scaleMove / gesture.scaleStart) * zoom.currentScale;
    }
    if (zoom.scale > gesture.maxRatio) {
      zoom.scale = (gesture.maxRatio - 1) + (Math.pow( ((zoom.scale - gesture.maxRatio) + 1), 0.5 ));
    }
    if (zoom.scale < params.minRatio) {
      zoom.scale = (params.minRatio + 1) - (Math.pow( ((params.minRatio - zoom.scale) + 1), 0.5 ));
    }
    gesture.$imageEl.transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
  },
  onGestureEnd: function onGestureEnd(e) {
    var swiper = this;
    var params = swiper.params.zoom;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    if (!Support.gestures) {
      if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
        return;
      }
      if (e.type !== 'touchend' || (e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android)) {
        return;
      }
      zoom.fakeGestureTouched = false;
      zoom.fakeGestureMoved = false;
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
    zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
    gesture.$imageEl.transition(swiper.params.speed).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
    zoom.currentScale = zoom.scale;
    zoom.isScaling = false;
    if (zoom.scale === 1) { gesture.$slideEl = undefined; }
  },
  onTouchStart: function onTouchStart(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    var image = zoom.image;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
    if (image.isTouched) { return; }
    if (Device.android) { e.preventDefault(); }
    image.isTouched = true;
    image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
  },
  onTouchMove: function onTouchMove(e) {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    var image = zoom.image;
    var velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
    swiper.allowClick = false;
    if (!image.isTouched || !gesture.$slideEl) { return; }

    if (!image.isMoved) {
      image.width = gesture.$imageEl[0].offsetWidth;
      image.height = gesture.$imageEl[0].offsetHeight;
      image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
      image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
      gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
      gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
      gesture.$imageWrapEl.transition(0);
      if (swiper.rtl) { image.startX = -image.startX; }
      if (swiper.rtl) { image.startY = -image.startY; }
    }
    // Define if we need image drag
    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;

    if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) { return; }

    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;

    image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
    image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

    if (!image.isMoved && !zoom.isScaling) {
      if (
        swiper.isHorizontal() &&
        (
          (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x) ||
          (Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)
        )
      ) {
        image.isTouched = false;
        return;
      } else if (
        !swiper.isHorizontal() &&
        (
          (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y) ||
          (Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)
        )
      ) {
        image.isTouched = false;
        return;
      }
    }
    e.preventDefault();
    e.stopPropagation();

    image.isMoved = true;
    image.currentX = (image.touchesCurrent.x - image.touchesStart.x) + image.startX;
    image.currentY = (image.touchesCurrent.y - image.touchesStart.y) + image.startY;

    if (image.currentX < image.minX) {
      image.currentX = (image.minX + 1) - (Math.pow( ((image.minX - image.currentX) + 1), 0.8 ));
    }
    if (image.currentX > image.maxX) {
      image.currentX = (image.maxX - 1) + (Math.pow( ((image.currentX - image.maxX) + 1), 0.8 ));
    }

    if (image.currentY < image.minY) {
      image.currentY = (image.minY + 1) - (Math.pow( ((image.minY - image.currentY) + 1), 0.8 ));
    }
    if (image.currentY > image.maxY) {
      image.currentY = (image.maxY - 1) + (Math.pow( ((image.currentY - image.maxY) + 1), 0.8 ));
    }

    // Velocity
    if (!velocity.prevPositionX) { velocity.prevPositionX = image.touchesCurrent.x; }
    if (!velocity.prevPositionY) { velocity.prevPositionY = image.touchesCurrent.y; }
    if (!velocity.prevTime) { velocity.prevTime = Date.now(); }
    velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
    velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
    if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) { velocity.x = 0; }
    if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) { velocity.y = 0; }
    velocity.prevPositionX = image.touchesCurrent.x;
    velocity.prevPositionY = image.touchesCurrent.y;
    velocity.prevTime = Date.now();

    gesture.$imageWrapEl.transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
  },
  onTouchEnd: function onTouchEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    var image = zoom.image;
    var velocity = zoom.velocity;
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }
    if (!image.isTouched || !image.isMoved) {
      image.isTouched = false;
      image.isMoved = false;
      return;
    }
    image.isTouched = false;
    image.isMoved = false;
    var momentumDurationX = 300;
    var momentumDurationY = 300;
    var momentumDistanceX = velocity.x * momentumDurationX;
    var newPositionX = image.currentX + momentumDistanceX;
    var momentumDistanceY = velocity.y * momentumDurationY;
    var newPositionY = image.currentY + momentumDistanceY;

    // Fix duration
    if (velocity.x !== 0) { momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x); }
    if (velocity.y !== 0) { momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y); }
    var momentumDuration = Math.max(momentumDurationX, momentumDurationY);

    image.currentX = newPositionX;
    image.currentY = newPositionY;

    // Define if we need image drag
    var scaledWidth = image.width * zoom.scale;
    var scaledHeight = image.height * zoom.scale;
    image.minX = Math.min(((gesture.slideWidth / 2) - (scaledWidth / 2)), 0);
    image.maxX = -image.minX;
    image.minY = Math.min(((gesture.slideHeight / 2) - (scaledHeight / 2)), 0);
    image.maxY = -image.minY;
    image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
    image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);

    gesture.$imageWrapEl.transition(momentumDuration).transform(("translate3d(" + (image.currentX) + "px, " + (image.currentY) + "px,0)"));
  },
  onTransitionEnd: function onTransitionEnd() {
    var swiper = this;
    var zoom = swiper.zoom;
    var gesture = zoom.gesture;
    if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
      gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
      gesture.$imageWrapEl.transform('translate3d(0,0,0)');
      gesture.$slideEl = undefined;
      gesture.$imageEl = undefined;
      gesture.$imageWrapEl = undefined;

      zoom.scale = 1;
      zoom.currentScale = 1;
    }
  },
  // Toggle Zoom
  toggle: function toggle(e) {
    var swiper = this;
    var zoom = swiper.zoom;

    if (zoom.scale && zoom.scale !== 1) {
      // Zoom Out
      zoom.out();
    } else {
      // Zoom In
      zoom.in(e);
    }
  },
  in: function in$1(e) {
    var swiper = this;

    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;
    var image = zoom.image;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? $$1(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

    gesture.$slideEl.addClass(("" + (params.zoomedSlideClass)));

    var touchX;
    var touchY;
    var offsetX;
    var offsetY;
    var diffX;
    var diffY;
    var translateX;
    var translateY;
    var imageWidth;
    var imageHeight;
    var scaledWidth;
    var scaledHeight;
    var translateMinX;
    var translateMinY;
    var translateMaxX;
    var translateMaxY;
    var slideWidth;
    var slideHeight;

    if (typeof image.touchesStart.x === 'undefined' && e) {
      touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
      touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
    } else {
      touchX = image.touchesStart.x;
      touchY = image.touchesStart.y;
    }

    zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
    if (e) {
      slideWidth = gesture.$slideEl[0].offsetWidth;
      slideHeight = gesture.$slideEl[0].offsetHeight;
      offsetX = gesture.$slideEl.offset().left;
      offsetY = gesture.$slideEl.offset().top;
      diffX = (offsetX + (slideWidth / 2)) - touchX;
      diffY = (offsetY + (slideHeight / 2)) - touchY;

      imageWidth = gesture.$imageEl[0].offsetWidth;
      imageHeight = gesture.$imageEl[0].offsetHeight;
      scaledWidth = imageWidth * zoom.scale;
      scaledHeight = imageHeight * zoom.scale;

      translateMinX = Math.min(((slideWidth / 2) - (scaledWidth / 2)), 0);
      translateMinY = Math.min(((slideHeight / 2) - (scaledHeight / 2)), 0);
      translateMaxX = -translateMinX;
      translateMaxY = -translateMinY;

      translateX = diffX * zoom.scale;
      translateY = diffY * zoom.scale;

      if (translateX < translateMinX) {
        translateX = translateMinX;
      }
      if (translateX > translateMaxX) {
        translateX = translateMaxX;
      }

      if (translateY < translateMinY) {
        translateY = translateMinY;
      }
      if (translateY > translateMaxY) {
        translateY = translateMaxY;
      }
    } else {
      translateX = 0;
      translateY = 0;
    }
    gesture.$imageWrapEl.transition(300).transform(("translate3d(" + translateX + "px, " + translateY + "px,0)"));
    gesture.$imageEl.transition(300).transform(("translate3d(0,0,0) scale(" + (zoom.scale) + ")"));
  },
  out: function out() {
    var swiper = this;

    var zoom = swiper.zoom;
    var params = swiper.params.zoom;
    var gesture = zoom.gesture;

    if (!gesture.$slideEl) {
      gesture.$slideEl = swiper.clickedSlide ? $$1(swiper.clickedSlide) : swiper.slides.eq(swiper.activeIndex);
      gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas');
      gesture.$imageWrapEl = gesture.$imageEl.parent(("." + (params.containerClass)));
    }
    if (!gesture.$imageEl || gesture.$imageEl.length === 0) { return; }

    zoom.scale = 1;
    zoom.currentScale = 1;
    gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
    gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
    gesture.$slideEl.removeClass(("" + (params.zoomedSlideClass)));
    gesture.$slideEl = undefined;
  },
  // Attach/Detach Events
  enable: function enable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (zoom.enabled) { return; }
    zoom.enabled = true;

    var slides = swiper.slides;

    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      slides.on('gesturestart', zoom.onGestureStart, passiveListener);
      slides.on('gesturechange', zoom.onGestureChange, passiveListener);
      slides.on('gestureend', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      slides.on(swiper.touchEvents.start, zoom.onGestureStart, passiveListener);
      slides.on(swiper.touchEvents.move, zoom.onGestureChange, passiveListener);
      slides.on(swiper.touchEvents.end, zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.slides.each(function (index, slideEl) {
      var $slideEl = $$1(slideEl);
      if ($slideEl.find(("." + (swiper.params.zoom.containerClass))).length > 0) {
        $slideEl.on(swiper.touchEvents.move, zoom.onTouchMove);
      }
    });
  },
  disable: function disable() {
    var swiper = this;
    var zoom = swiper.zoom;
    if (!zoom.enabled) { return; }

    swiper.zoom.enabled = false;

    var slides = swiper.slides;

    var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? { passive: true, capture: false } : false;

    // Scale image
    if (Support.gestures) {
      slides.off('gesturestart', zoom.onGestureStart, passiveListener);
      slides.off('gesturechange', zoom.onGestureChange, passiveListener);
      slides.off('gestureend', zoom.onGestureEnd, passiveListener);
    } else if (swiper.touchEvents.start === 'touchstart') {
      slides.off(swiper.touchEvents.start, zoom.onGestureStart, passiveListener);
      slides.off(swiper.touchEvents.move, zoom.onGestureChange, passiveListener);
      slides.off(swiper.touchEvents.end, zoom.onGestureEnd, passiveListener);
    }

    // Move image
    swiper.slides.each(function (index, slideEl) {
      var $slideEl = $$1(slideEl);
      if ($slideEl.find(("." + (swiper.params.zoom.containerClass))).length > 0) {
        $slideEl.off(swiper.touchEvents.move, zoom.onTouchMove);
      }
    });
  },
};

var Zoom$1 = {
  name: 'zoom',
  params: {
    zoom: {
      enabled: false,
      maxRatio: 3,
      minRatio: 1,
      toggle: true,
      containerClass: 'swiper-zoom-container',
      zoomedSlideClass: 'swiper-slide-zoomed',
    },
  },
  create: function create() {
    var swiper = this;
    var zoom = {
      enabled: false,
      scale: 1,
      currentScale: 1,
      isScaling: false,
      gesture: {
        $slideEl: undefined,
        slideWidth: undefined,
        slideHeight: undefined,
        $imageEl: undefined,
        $imageWrapEl: undefined,
        maxRatio: 3,
      },
      image: {
        isTouched: undefined,
        isMoved: undefined,
        currentX: undefined,
        currentY: undefined,
        minX: undefined,
        minY: undefined,
        maxX: undefined,
        maxY: undefined,
        width: undefined,
        height: undefined,
        startX: undefined,
        startY: undefined,
        touchesStart: {},
        touchesCurrent: {},
      },
      velocity: {
        x: undefined,
        y: undefined,
        prevPositionX: undefined,
        prevPositionY: undefined,
        prevTime: undefined,
      },
    };
    ('onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out').split(' ').forEach(function (methodName) {
      zoom[methodName] = Zoom[methodName].bind(swiper);
    });
    Utils.extend(swiper, {
      zoom: zoom,
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.zoom.enabled) {
        swiper.zoom.enable();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      swiper.zoom.disable();
    },
    touchStart: function touchStart(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) { return; }
      swiper.zoom.onTouchStart(e);
    },
    touchEnd: function touchEnd(e) {
      var swiper = this;
      if (!swiper.zoom.enabled) { return; }
      swiper.zoom.onTouchEnd(e);
    },
    doubleTap: function doubleTap(e) {
      var swiper = this;
      if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
        swiper.zoom.toggle(e);
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;
      if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
        swiper.zoom.onTransitionEnd();
      }
    },
  },
};

var Lazy = {
  loadInSlide: function loadInSlide(index, loadInDuplicate) {
    if ( loadInDuplicate === void 0 ) loadInDuplicate = true;

    var swiper = this;
    var params = swiper.params.lazy;
    if (typeof index === 'undefined') { return; }
    if (swiper.slides.length === 0) { return; }
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;

    var $slideEl = isVirtual
      ? swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]"))
      : swiper.slides.eq(index);

    var $images = $slideEl.find(("." + (params.elementClass) + ":not(." + (params.loadedClass) + "):not(." + (params.loadingClass) + ")"));
    if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
      $images = $images.add($slideEl[0]);
    }
    if ($images.length === 0) { return; }

    $images.each(function (imageIndex, imageEl) {
      var $imageEl = $$1(imageEl);
      $imageEl.addClass(params.loadingClass);

      var background = $imageEl.attr('data-background');
      var src = $imageEl.attr('data-src');
      var srcset = $imageEl.attr('data-srcset');
      var sizes = $imageEl.attr('data-sizes');

      swiper.loadImage($imageEl[0], (src || background), srcset, sizes, false, function () {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || (swiper && !swiper.params) || swiper.destroyed) { return; }
        if (background) {
          $imageEl.css('background-image', ("url(\"" + background + "\")"));
          $imageEl.removeAttr('data-background');
        } else {
          if (srcset) {
            $imageEl.attr('srcset', srcset);
            $imageEl.removeAttr('data-srcset');
          }
          if (sizes) {
            $imageEl.attr('sizes', sizes);
            $imageEl.removeAttr('data-sizes');
          }
          if (src) {
            $imageEl.attr('src', src);
            $imageEl.removeAttr('data-src');
          }
        }

        $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
        $slideEl.find(("." + (params.preloaderClass))).remove();
        if (swiper.params.loop && loadInDuplicate) {
          var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
          if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
            var originalSlide = swiper.$wrapperEl.children(("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + (swiper.params.slideDuplicateClass) + ")"));
            swiper.lazy.loadInSlide(originalSlide.index(), false);
          } else {
            var duplicatedSlide = swiper.$wrapperEl.children(("." + (swiper.params.slideDuplicateClass) + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]"));
            swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
          }
        }
        swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
      });

      swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
    });
  },
  load: function load() {
    var swiper = this;
    var $wrapperEl = swiper.$wrapperEl;
    var swiperParams = swiper.params;
    var slides = swiper.slides;
    var activeIndex = swiper.activeIndex;
    var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
    var params = swiperParams.lazy;

    var slidesPerView = swiperParams.slidesPerView;
    if (slidesPerView === 'auto') {
      slidesPerView = 0;
    }

    function slideExist(index) {
      if (isVirtual) {
        if ($wrapperEl.children(("." + (swiperParams.slideClass) + "[data-swiper-slide-index=\"" + index + "\"]")).length) {
          return true;
        }
      } else if (slides[index]) { return true; }
      return false;
    }
    function slideIndex(slideEl) {
      if (isVirtual) {
        return $$1(slideEl).attr('data-swiper-slide-index');
      }
      return $$1(slideEl).index();
    }

    if (!swiper.lazy.initialImageLoaded) { swiper.lazy.initialImageLoaded = true; }
    if (swiper.params.watchSlidesVisibility) {
      $wrapperEl.children(("." + (swiperParams.slideVisibleClass))).each(function (elIndex, slideEl) {
        var index = isVirtual ? $$1(slideEl).attr('data-swiper-slide-index') : $$1(slideEl).index();
        swiper.lazy.loadInSlide(index);
      });
    } else if (slidesPerView > 1) {
      for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
        if (slideExist(i)) { swiper.lazy.loadInSlide(i); }
      }
    } else {
      swiper.lazy.loadInSlide(activeIndex);
    }
    if (params.loadPrevNext) {
      if (slidesPerView > 1 || (params.loadPrevNextAmount && params.loadPrevNextAmount > 1)) {
        var amount = params.loadPrevNextAmount;
        var spv = slidesPerView;
        var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
        var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0);
        // Next Slides
        for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
          if (slideExist(i$1)) { swiper.lazy.loadInSlide(i$1); }
        }
        // Prev Slides
        for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
          if (slideExist(i$2)) { swiper.lazy.loadInSlide(i$2); }
        }
      } else {
        var nextSlide = $wrapperEl.children(("." + (swiperParams.slideNextClass)));
        if (nextSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(nextSlide)); }

        var prevSlide = $wrapperEl.children(("." + (swiperParams.slidePrevClass)));
        if (prevSlide.length > 0) { swiper.lazy.loadInSlide(slideIndex(prevSlide)); }
      }
    }
  },
};

var Lazy$1 = {
  name: 'lazy',
  params: {
    lazy: {
      enabled: false,
      loadPrevNext: false,
      loadPrevNextAmount: 1,
      loadOnTransitionStart: false,

      elementClass: 'swiper-lazy',
      loadingClass: 'swiper-lazy-loading',
      loadedClass: 'swiper-lazy-loaded',
      preloaderClass: 'swiper-lazy-preloader',
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      lazy: {
        initialImageLoaded: false,
        load: Lazy.load.bind(swiper),
        loadInSlide: Lazy.loadInSlide.bind(swiper),
      },
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
        swiper.params.preloadImages = false;
      }
    },
    init: function init() {
      var swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
        swiper.lazy.load();
      }
    },
    scroll: function scroll() {
      var swiper = this;
      if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
        swiper.lazy.load();
      }
    },
    resize: function resize() {
      var swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    scrollbarDragMove: function scrollbarDragMove() {
      var swiper = this;
      if (swiper.params.lazy.enabled) {
        swiper.lazy.load();
      }
    },
    transitionStart: function transitionStart() {
      var swiper = this;
      if (swiper.params.lazy.enabled) {
        if (swiper.params.lazy.loadOnTransitionStart || (!swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded)) {
          swiper.lazy.load();
        }
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;
      if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
        swiper.lazy.load();
      }
    },
  },
};

/* eslint no-bitwise: ["error", { "allow": [">>"] }] */
var Controller = {
  LinearSpline: function LinearSpline(x, y) {
    var binarySearch = (function search() {
      var maxIndex;
      var minIndex;
      var guess;
      return function (array, val) {
        minIndex = -1;
        maxIndex = array.length;
        while (maxIndex - minIndex > 1) {
          guess = maxIndex + minIndex >> 1;
          if (array[guess] <= val) {
            minIndex = guess;
          } else {
            maxIndex = guess;
          }
        }
        return maxIndex;
      };
    }());
    this.x = x;
    this.y = y;
    this.lastIndex = x.length - 1;
    // Given an x value (x2), return the expected y2 value:
    // (x1,y1) is the known point before given value,
    // (x3,y3) is the known point after given value.
    var i1;
    var i3;

    this.interpolate = function interpolate(x2) {
      if (!x2) { return 0; }

      // Get the indexes of x1 and x3 (the array indexes before and after given x2):
      i3 = binarySearch(this.x, x2);
      i1 = i3 - 1;

      // We have our indexes i1 & i3, so we can calculate already:
      // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
      return (((x2 - this.x[i1]) * (this.y[i3] - this.y[i1])) / (this.x[i3] - this.x[i1])) + this.y[i1];
    };
    return this;
  },
  // xxx: for now i will just save one spline function to to
  getInterpolateFunction: function getInterpolateFunction(c) {
    var swiper = this;
    if (!swiper.controller.spline) {
      swiper.controller.spline = swiper.params.loop ?
        new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) :
        new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
    }
  },
  setTranslate: function setTranslate(setTranslate$1, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var multiplier;
    var controlledTranslate;
    function setControlledTranslate(c) {
      // this will create an Interpolate function based on the snapGrids
      // x is the Grid of the scrolled scroller and y will be the controlled scroller
      // it makes sense to create this only once and recall it for the interpolation
      // the function does a lot of value caching for performance
      var translate = c.rtl && c.params.direction === 'horizontal' ? -swiper.translate : swiper.translate;
      if (swiper.params.controller.by === 'slide') {
        swiper.controller.getInterpolateFunction(c);
        // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
        // but it did not work out
        controlledTranslate = -swiper.controller.spline.interpolate(-translate);
      }

      if (!controlledTranslate || swiper.params.controller.by === 'container') {
        multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
        controlledTranslate = ((translate - swiper.minTranslate()) * multiplier) + c.minTranslate();
      }

      if (swiper.params.controller.inverse) {
        controlledTranslate = c.maxTranslate() - controlledTranslate;
      }
      c.updateProgress(controlledTranslate);
      c.setTranslate(controlledTranslate, swiper);
      c.updateActiveIndex();
      c.updateSlidesClasses();
    }
    if (Array.isArray(controlled)) {
      for (var i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper$1) {
          setControlledTranslate(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper$1 && byController !== controlled) {
      setControlledTranslate(controlled);
    }
  },
  setTransition: function setTransition(duration, byController) {
    var swiper = this;
    var controlled = swiper.controller.control;
    var i;
    function setControlledTransition(c) {
      c.setTransition(duration, swiper);
      if (duration !== 0) {
        c.transitionStart();
        c.$wrapperEl.transitionEnd(function () {
          if (!controlled) { return; }
          if (c.params.loop && swiper.params.controller.by === 'slide') {
            c.loopFix();
          }
          c.transitionEnd();
        });
      }
    }
    if (Array.isArray(controlled)) {
      for (i = 0; i < controlled.length; i += 1) {
        if (controlled[i] !== byController && controlled[i] instanceof Swiper$1) {
          setControlledTransition(controlled[i]);
        }
      }
    } else if (controlled instanceof Swiper$1 && byController !== controlled) {
      setControlledTransition(controlled);
    }
  },
};
var Controller$1 = {
  name: 'controller',
  params: {
    controller: {
      control: undefined,
      inverse: false,
      by: 'slide', // or 'container'
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      controller: {
        control: swiper.params.controller.control,
        getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
        setTranslate: Controller.setTranslate.bind(swiper),
        setTransition: Controller.setTransition.bind(swiper),
      },
    });
  },
  on: {
    update: function update() {
      var swiper = this;
      if (!swiper.controller.control) { return; }
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    resize: function resize() {
      var swiper = this;
      if (!swiper.controller.control) { return; }
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    observerUpdate: function observerUpdate() {
      var swiper = this;
      if (!swiper.controller.control) { return; }
      if (swiper.controller.spline) {
        swiper.controller.spline = undefined;
        delete swiper.controller.spline;
      }
    },
    setTranslate: function setTranslate(translate, byController) {
      var swiper = this;
      if (!swiper.controller.control) { return; }
      swiper.controller.setTranslate(translate, byController);
    },
    setTransition: function setTransition(duration, byController) {
      var swiper = this;
      if (!swiper.controller.control) { return; }
      swiper.controller.setTransition(duration, byController);
    },
  },
};

var a11y = {
  makeElFocusable: function makeElFocusable($el) {
    $el.attr('tabIndex', '0');
    return $el;
  },
  addElRole: function addElRole($el, role) {
    $el.attr('role', role);
    return $el;
  },
  addElLabel: function addElLabel($el, label) {
    $el.attr('aria-label', label);
    return $el;
  },
  disableEl: function disableEl($el) {
    $el.attr('aria-disabled', true);
    return $el;
  },
  enableEl: function enableEl($el) {
    $el.attr('aria-disabled', false);
    return $el;
  },
  onEnterKey: function onEnterKey(e) {
    var swiper = this;
    var params = swiper.params.a11y;
    if (e.keyCode !== 13) { return; }
    var $targetEl = $$1(e.target);
    if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
      if (!(swiper.isEnd && !swiper.params.loop)) {
        swiper.slideNext();
      }
      if (swiper.isEnd) {
        swiper.a11y.notify(params.lastSlideMessage);
      } else {
        swiper.a11y.notify(params.nextSlideMessage);
      }
    }
    if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
      if (!(swiper.isBeginning && !swiper.params.loop)) {
        swiper.slidePrev();
      }
      if (swiper.isBeginning) {
        swiper.a11y.notify(params.firstSlideMessage);
      } else {
        swiper.a11y.notify(params.prevSlideMessage);
      }
    }
    if (swiper.pagination && $targetEl.is(("." + (swiper.params.pagination.bulletClass)))) {
      $targetEl[0].click();
    }
  },
  notify: function notify(message) {
    var swiper = this;
    var notification = swiper.a11y.liveRegion;
    if (notification.length === 0) { return; }
    notification.html('');
    notification.html(message);
  },
  updateNavigation: function updateNavigation() {
    var swiper = this;

    if (swiper.params.loop) { return; }
    var ref = swiper.navigation;
    var $nextEl = ref.$nextEl;
    var $prevEl = ref.$prevEl;

    if ($prevEl && $prevEl.length > 0) {
      if (swiper.isBeginning) {
        swiper.a11y.disableEl($prevEl);
      } else {
        swiper.a11y.enableEl($prevEl);
      }
    }
    if ($nextEl && $nextEl.length > 0) {
      if (swiper.isEnd) {
        swiper.a11y.disableEl($nextEl);
      } else {
        swiper.a11y.enableEl($nextEl);
      }
    }
  },
  updatePagination: function updatePagination() {
    var swiper = this;
    var params = swiper.params.a11y;
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
        var $bulletEl = $$1(bulletEl);
        swiper.a11y.makeElFocusable($bulletEl);
        swiper.a11y.addElRole($bulletEl, 'button');
        swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
      });
    }
  },
  init: function init() {
    var swiper = this;

    swiper.$el.append(swiper.a11y.liveRegion);

    // Navigation
    var params = swiper.params.a11y;
    var $nextEl;
    var $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      swiper.a11y.makeElFocusable($nextEl);
      swiper.a11y.addElRole($nextEl, 'button');
      swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
      $nextEl.on('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      swiper.a11y.makeElFocusable($prevEl);
      swiper.a11y.addElRole($prevEl, 'button');
      swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
      $prevEl.on('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.on('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) { swiper.a11y.liveRegion.remove(); }

    var $nextEl;
    var $prevEl;
    if (swiper.navigation && swiper.navigation.$nextEl) {
      $nextEl = swiper.navigation.$nextEl;
    }
    if (swiper.navigation && swiper.navigation.$prevEl) {
      $prevEl = swiper.navigation.$prevEl;
    }
    if ($nextEl) {
      $nextEl.off('keydown', swiper.a11y.onEnterKey);
    }
    if ($prevEl) {
      $prevEl.off('keydown', swiper.a11y.onEnterKey);
    }

    // Pagination
    if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
      swiper.pagination.$el.off('keydown', ("." + (swiper.params.pagination.bulletClass)), swiper.a11y.onEnterKey);
    }
  },
};
var A11y = {
  name: 'a11y',
  params: {
    a11y: {
      enabled: false,
      notificationClass: 'swiper-notification',
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      a11y: {
        liveRegion: $$1(("<span class=\"" + (swiper.params.a11y.notificationClass) + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")),
      },
    });
    Object.keys(a11y).forEach(function (methodName) {
      swiper.a11y[methodName] = a11y[methodName].bind(swiper);
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) { return; }
      swiper.a11y.init();
      swiper.a11y.updateNavigation();
    },
    toEdge: function toEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) { return; }
      swiper.a11y.updateNavigation();
    },
    fromEdge: function fromEdge() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) { return; }
      swiper.a11y.updateNavigation();
    },
    paginationUpdate: function paginationUpdate() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) { return; }
      swiper.a11y.updatePagination();
    },
    destroy: function destroy() {
      var swiper = this;
      if (!swiper.params.a11y.enabled) { return; }
      swiper.a11y.destroy();
    },
  },
};

var History = {
  init: function init() {
    var swiper = this;
    if (!swiper.params.history) { return; }
    if (!win.history || !win.history.pushState) {
      swiper.params.history.enabled = false;
      swiper.params.hashNavigation.enabled = true;
      return;
    }
    var history = swiper.history;
    history.initialized = true;
    history.paths = History.getPathValues();
    if (!history.paths.key && !history.paths.value) { return; }
    history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
    if (!swiper.params.history.replaceState) {
      win.addEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (!swiper.params.history.replaceState) {
      win.removeEventListener('popstate', swiper.history.setHistoryPopState);
    }
  },
  setHistoryPopState: function setHistoryPopState() {
    var swiper = this;
    swiper.history.paths = History.getPathValues();
    swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
  },
  getPathValues: function getPathValues() {
    var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) { return part !== ''; });
    var total = pathArray.length;
    var key = pathArray[total - 2];
    var value = pathArray[total - 1];
    return { key: key, value: value };
  },
  setHistory: function setHistory(key, index) {
    var swiper = this;
    if (!swiper.history.initialized || !swiper.params.history.enabled) { return; }
    var slide = swiper.slides.eq(index);
    var value = History.slugify(slide.attr('data-history'));
    if (!win.location.pathname.includes(key)) {
      value = key + "/" + value;
    }
    var currentState = win.history.state;
    if (currentState && currentState.value === value) {
      return;
    }
    if (swiper.params.history.replaceState) {
      win.history.replaceState({ value: value }, null, value);
    } else {
      win.history.pushState({ value: value }, null, value);
    }
  },
  slugify: function slugify(text) {
    return text.toString().toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/--+/g, '-')
      .replace(/^-+/, '')
      .replace(/-+$/, '');
  },
  scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
    var swiper = this;
    if (value) {
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHistory = History.slugify(slide.attr('data-history'));
        if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, runCallbacks);
        }
      }
    } else {
      swiper.slideTo(0, speed, runCallbacks);
    }
  },
};

var History$1 = {
  name: 'history',
  params: {
    history: {
      enabled: false,
      replaceState: false,
      key: 'slides',
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      history: {
        init: History.init.bind(swiper),
        setHistory: History.setHistory.bind(swiper),
        setHistoryPopState: History.setHistoryPopState.bind(swiper),
        scrollToSlide: History.scrollToSlide.bind(swiper),
        destroy: History.destroy.bind(swiper),
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.history.enabled) {
        swiper.history.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;
      if (swiper.history.initialized) {
        swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
      }
    },
  },
};

var HashNavigation = {
  onHashCange: function onHashCange() {
    var swiper = this;
    var newHash = doc.location.hash.replace('#', '');
    var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
    if (newHash !== activeSlideHash) {
      swiper.slideTo(swiper.$wrapperEl.children(("." + (swiper.params.slideClass) + "[data-hash=\"" + newHash + "\"]")).index());
    }
  },
  setHash: function setHash() {
    var swiper = this;
    if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) { return; }
    if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
      win.history.replaceState(null, null, (("#" + (swiper.slides.eq(swiper.activeIndex).attr('data-hash'))) || ''));
    } else {
      var slide = swiper.slides.eq(swiper.activeIndex);
      var hash = slide.attr('data-hash') || slide.attr('data-history');
      doc.location.hash = hash || '';
    }
  },
  init: function init() {
    var swiper = this;
    if (!swiper.params.hashNavigation.enabled || (swiper.params.history && swiper.params.history.enabled)) { return; }
    swiper.hashNavigation.initialized = true;
    var hash = doc.location.hash.replace('#', '');
    if (hash) {
      var speed = 0;
      for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
        var slide = swiper.slides.eq(i);
        var slideHash = slide.attr('data-hash') || slide.attr('data-history');
        if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
          var index = slide.index();
          swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
        }
      }
    }
    if (swiper.params.hashNavigation.watchState) {
      $$1(win).on('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
  destroy: function destroy() {
    var swiper = this;
    if (swiper.params.hashNavigation.watchState) {
      $$1(win).off('hashchange', swiper.hashNavigation.onHashCange);
    }
  },
};
var HashNavigation$1 = {
  name: 'hash-navigation',
  params: {
    hashNavigation: {
      enabled: false,
      replaceState: false,
      watchState: false,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      hashNavigation: {
        initialized: false,
        init: HashNavigation.init.bind(swiper),
        destroy: HashNavigation.destroy.bind(swiper),
        setHash: HashNavigation.setHash.bind(swiper),
        onHashCange: HashNavigation.onHashCange.bind(swiper),
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.init();
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.params.hashNavigation.enabled) {
        swiper.hashNavigation.destroy();
      }
    },
    transitionEnd: function transitionEnd() {
      var swiper = this;
      if (swiper.hashNavigation.initialized) {
        swiper.hashNavigation.setHash();
      }
    },
  },
};

var Autoplay = {
  run: function run() {
    var swiper = this;
    var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
    var delay = swiper.params.autoplay.delay;
    if ($activeSlideEl.attr('data-swiper-autoplay')) {
      delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
    }
    swiper.autoplay.timeout = Utils.nextTick(function () {
      if (swiper.params.loop) {
        swiper.loopFix();
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.isEnd) {
        swiper.slideNext(swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else if (!swiper.params.autoplay.stopOnLastSlide) {
        swiper.slideTo(0, swiper.params.speed, true, true);
        swiper.emit('autoplay');
      } else {
        swiper.autoplay.stop();
      }
    }, delay);
  },
  start: function start() {
    var swiper = this;
    if (typeof swiper.autoplay.timeout !== 'undefined') { return false; }
    if (swiper.autoplay.running) { return false; }
    swiper.autoplay.running = true;
    swiper.emit('autoplayStart');
    swiper.autoplay.run();
    return true;
  },
  stop: function stop() {
    var swiper = this;
    if (!swiper.autoplay.running) { return false; }
    if (typeof swiper.autoplay.timeout === 'undefined') { return false; }

    if (swiper.autoplay.timeout) {
      clearTimeout(swiper.autoplay.timeout);
      swiper.autoplay.timeout = undefined;
    }
    swiper.autoplay.running = false;
    swiper.emit('autoplayStop');
    return true;
  },
  pause: function pause(speed) {
    var swiper = this;
    if (!swiper.autoplay.running) { return; }
    if (swiper.autoplay.paused) { return; }
    if (swiper.autoplay.timeout) { clearTimeout(swiper.autoplay.timeout); }
    swiper.autoplay.paused = true;
    if (speed === 0) {
      swiper.autoplay.paused = false;
      swiper.autoplay.run();
    } else {
      swiper.$wrapperEl.transitionEnd(function () {
        if (!swiper || swiper.destroyed) { return; }
        swiper.autoplay.paused = false;
        if (!swiper.autoplay.running) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.run();
        }
      });
    }
  },
};

var Autoplay$1 = {
  name: 'autoplay',
  params: {
    autoplay: {
      enabled: false,
      delay: 3000,
      disableOnInteraction: true,
      stopOnLastSlide: false,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      autoplay: {
        running: false,
        paused: false,
        run: Autoplay.run.bind(swiper),
        start: Autoplay.start.bind(swiper),
        stop: Autoplay.stop.bind(swiper),
        pause: Autoplay.pause.bind(swiper),
      },
    });
  },
  on: {
    init: function init() {
      var swiper = this;
      if (swiper.params.autoplay.enabled) {
        swiper.autoplay.start();
      }
    },
    beforeTransitionStart: function beforeTransitionStart(speed, internal) {
      var swiper = this;
      if (swiper.autoplay.running) {
        if (internal || !swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.pause(speed);
        } else {
          swiper.autoplay.stop();
        }
      }
    },
    sliderFirstMove: function sliderFirstMove() {
      var swiper = this;
      if (swiper.autoplay.running) {
        if (swiper.params.autoplay.disableOnInteraction) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.pause();
        }
      }
    },
    destroy: function destroy() {
      var swiper = this;
      if (swiper.autoplay.running) {
        swiper.autoplay.stop();
      }
    },
  },
};

var Fade = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = swiper.slides.eq(i);
      var offset = $slideEl[0].swiperSlideOffset;
      var tx = -offset;
      if (!swiper.params.virtualTranslate) { tx -= swiper.translate; }
      var ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
      }
      var slideOpacity = swiper.params.fadeEffect.crossFade ?
        Math.max(1 - Math.abs($slideEl[0].progress), 0) :
        1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
      $slideEl
        .css({
          opacity: slideOpacity,
        })
        .transform(("translate3d(" + tx + "px, " + ty + "px, 0px)"));
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides;
    var $wrapperEl = swiper.$wrapperEl;
    slides.transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      slides.transitionEnd(function () {
        if (eventTriggered) { return; }
        if (!swiper || swiper.destroyed) { return; }
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFade = {
  name: 'effect-fade',
  params: {
    fadeEffect: {
      crossFade: false,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      fadeEffect: {
        setTranslate: Fade.setTranslate.bind(swiper),
        setTransition: Fade.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') { return; }
      swiper.classNames.push(((swiper.params.containerModifierClass) + "fade"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'fade') { return; }
      swiper.fadeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'fade') { return; }
      swiper.fadeEffect.setTransition(duration);
    },
  },
};

var Cube = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var $el = swiper.$el;
    var $wrapperEl = swiper.$wrapperEl;
    var slides = swiper.slides;
    var swiperWidth = swiper.width;
    var swiperHeight = swiper.height;
    var rtl = swiper.rtl;
    var swiperSize = swiper.size;
    var params = swiper.params.cubeEffect;
    var isHorizontal = swiper.isHorizontal();
    var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
    var wrapperRotate = 0;
    var $cubeShadowEl;
    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = $$1('<div class="swiper-cube-shadow"></div>');
          $wrapperEl.append($cubeShadowEl);
        }
        $cubeShadowEl.css({ height: (swiperWidth + "px") });
      } else {
        $cubeShadowEl = $el.find('.swiper-cube-shadow');
        if ($cubeShadowEl.length === 0) {
          $cubeShadowEl = $$1('<div class="swiper-cube-shadow"></div>');
          $el.append($cubeShadowEl);
        }
      }
    }
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideIndex = i;
      if (isVirtual) {
        slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
      }
      var slideAngle = slideIndex * 90;
      var round = Math.floor(slideAngle / 360);
      if (rtl) {
        slideAngle = -slideAngle;
        round = Math.floor(-slideAngle / 360);
      }
      var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      var tx = 0;
      var ty = 0;
      var tz = 0;
      if (slideIndex % 4 === 0) {
        tx = -round * 4 * swiperSize;
        tz = 0;
      } else if ((slideIndex - 1) % 4 === 0) {
        tx = 0;
        tz = -round * 4 * swiperSize;
      } else if ((slideIndex - 2) % 4 === 0) {
        tx = swiperSize + (round * 4 * swiperSize);
        tz = swiperSize;
      } else if ((slideIndex - 3) % 4 === 0) {
        tx = -swiperSize;
        tz = (3 * swiperSize) + (swiperSize * 4 * round);
      }
      if (rtl) {
        tx = -tx;
      }

      if (!isHorizontal) {
        ty = tx;
        tx = 0;
      }

      var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
      if (progress <= 1 && progress > -1) {
        wrapperRotate = (slideIndex * 90) + (progress * 90);
        if (rtl) { wrapperRotate = (-slideIndex * 90) - (progress * 90); }
      }
      $slideEl.transform(transform);
      if (params.slideShadows) {
        // Set shadows
        var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = $$1(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = $$1(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
        if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
      }
    }
    $wrapperEl.css({
      '-webkit-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      '-moz-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      '-ms-transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
      'transform-origin': ("50% 50% -" + (swiperSize / 2) + "px"),
    });

    if (params.shadow) {
      if (isHorizontal) {
        $cubeShadowEl.transform(("translate3d(0px, " + ((swiperWidth / 2) + params.shadowOffset) + "px, " + (-swiperWidth / 2) + "px) rotateX(90deg) rotateZ(0deg) scale(" + (params.shadowScale) + ")"));
      } else {
        var shadowAngle = Math.abs(wrapperRotate) - (Math.floor(Math.abs(wrapperRotate) / 90) * 90);
        var multiplier = 1.5 - (
          (Math.sin((shadowAngle * 2 * Math.PI) / 360) / 2) +
          (Math.cos((shadowAngle * 2 * Math.PI) / 360) / 2)
        );
        var scale1 = params.shadowScale;
        var scale2 = params.shadowScale / multiplier;
        var offset = params.shadowOffset;
        $cubeShadowEl.transform(("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + ((swiperHeight / 2) + offset) + "px, " + (-swiperHeight / 2 / scale2) + "px) rotateX(-90deg)"));
      }
    }
    var zFactor = (Browser.isSafari || Browser.isUiWebView) ? (-swiperSize / 2) : 0;
    $wrapperEl
      .transform(("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)"));
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var $el = swiper.$el;
    var slides = swiper.slides;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
      $el.find('.swiper-cube-shadow').transition(duration);
    }
  },
};

var EffectCube = {
  name: 'effect-cube',
  params: {
    cubeEffect: {
      slideShadows: true,
      shadow: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      cubeEffect: {
        setTranslate: Cube.setTranslate.bind(swiper),
        setTransition: Cube.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') { return; }
      swiper.classNames.push(((swiper.params.containerModifierClass) + "cube"));
      swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        resistanceRatio: 0,
        spaceBetween: 0,
        centeredSlides: false,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'cube') { return; }
      swiper.cubeEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'cube') { return; }
      swiper.cubeEffect.setTransition(duration);
    },
  },
};

var Flip = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var slides = swiper.slides;
    for (var i = 0; i < slides.length; i += 1) {
      var $slideEl = slides.eq(i);
      var progress = $slideEl[0].progress;
      if (swiper.params.flipEffect.limitRotation) {
        progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
      }
      var offset = $slideEl[0].swiperSlideOffset;
      var rotate = -180 * progress;
      var rotateY = rotate;
      var rotateX = 0;
      var tx = -offset;
      var ty = 0;
      if (!swiper.isHorizontal()) {
        ty = tx;
        tx = 0;
        rotateX = -rotateY;
        rotateY = 0;
      } else if (swiper.rtl) {
        rotateY = -rotateY;
      }

      $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

      if (swiper.params.flipEffect.slideShadows) {
        // Set shadows
        var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if (shadowBefore.length === 0) {
          shadowBefore = $$1(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>"));
          $slideEl.append(shadowBefore);
        }
        if (shadowAfter.length === 0) {
          shadowAfter = $$1(("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>"));
          $slideEl.append(shadowAfter);
        }
        if (shadowBefore.length) { shadowBefore[0].style.opacity = Math.max(-progress, 0); }
        if (shadowAfter.length) { shadowAfter[0].style.opacity = Math.max(progress, 0); }
      }
      $slideEl
        .transform(("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)"));
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    var slides = swiper.slides;
    var activeIndex = swiper.activeIndex;
    var $wrapperEl = swiper.$wrapperEl;
    slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
    if (swiper.params.virtualTranslate && duration !== 0) {
      var eventTriggered = false;
      // eslint-disable-next-line
      slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
        if (eventTriggered) { return; }
        if (!swiper || swiper.destroyed) { return; }
        // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
        eventTriggered = true;
        swiper.animating = false;
        var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
        for (var i = 0; i < triggerEvents.length; i += 1) {
          $wrapperEl.trigger(triggerEvents[i]);
        }
      });
    }
  },
};

var EffectFlip = {
  name: 'effect-flip',
  params: {
    flipEffect: {
      slideShadows: true,
      limitRotation: true,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      flipEffect: {
        setTranslate: Flip.setTranslate.bind(swiper),
        setTransition: Flip.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') { return; }
      swiper.classNames.push(((swiper.params.containerModifierClass) + "flip"));
      swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));
      var overwriteParams = {
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: true,
        spaceBetween: 0,
        virtualTranslate: true,
      };
      Utils.extend(swiper.params, overwriteParams);
      Utils.extend(swiper.originalParams, overwriteParams);
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'flip') { return; }
      swiper.flipEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'flip') { return; }
      swiper.flipEffect.setTransition(duration);
    },
  },
};

var Coverflow = {
  setTranslate: function setTranslate() {
    var swiper = this;
    var swiperWidth = swiper.width;
    var swiperHeight = swiper.height;
    var slides = swiper.slides;
    var $wrapperEl = swiper.$wrapperEl;
    var slidesSizesGrid = swiper.slidesSizesGrid;
    var params = swiper.params.coverflowEffect;
    var isHorizontal = swiper.isHorizontal();
    var transform = swiper.translate;
    var center = isHorizontal ? -transform + (swiperWidth / 2) : -transform + (swiperHeight / 2);
    var rotate = isHorizontal ? params.rotate : -params.rotate;
    var translate = params.depth;
    // Each slide offset from center
    for (var i = 0, length = slides.length; i < length; i += 1) {
      var $slideEl = slides.eq(i);
      var slideSize = slidesSizesGrid[i];
      var slideOffset = $slideEl[0].swiperSlideOffset;
      var offsetMultiplier = ((center - slideOffset - (slideSize / 2)) / slideSize) * params.modifier;

      var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
      var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier;
      // var rotateZ = 0
      var translateZ = -translate * Math.abs(offsetMultiplier);

      var translateY = isHorizontal ? 0 : params.stretch * (offsetMultiplier);
      var translateX = isHorizontal ? params.stretch * (offsetMultiplier) : 0;

      // Fix for ultra small values
      if (Math.abs(translateX) < 0.001) { translateX = 0; }
      if (Math.abs(translateY) < 0.001) { translateY = 0; }
      if (Math.abs(translateZ) < 0.001) { translateZ = 0; }
      if (Math.abs(rotateY) < 0.001) { rotateY = 0; }
      if (Math.abs(rotateX) < 0.001) { rotateX = 0; }

      var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";

      $slideEl.transform(slideTransform);
      $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
      if (params.slideShadows) {
        // Set shadows
        var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
        var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
        if ($shadowBeforeEl.length === 0) {
          $shadowBeforeEl = $$1(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>"));
          $slideEl.append($shadowBeforeEl);
        }
        if ($shadowAfterEl.length === 0) {
          $shadowAfterEl = $$1(("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>"));
          $slideEl.append($shadowAfterEl);
        }
        if ($shadowBeforeEl.length) { $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0; }
        if ($shadowAfterEl.length) { $shadowAfterEl[0].style.opacity = (-offsetMultiplier) > 0 ? -offsetMultiplier : 0; }
      }
    }

    // Set correct perspective for IE10
    if (Browser.ie) {
      var ws = $wrapperEl[0].style;
      ws.perspectiveOrigin = center + "px 50%";
    }
  },
  setTransition: function setTransition(duration) {
    var swiper = this;
    swiper.slides
      .transition(duration)
      .find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left')
      .transition(duration);
  },
};

var EffectCoverflow = {
  name: 'effect-coverflow',
  params: {
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  },
  create: function create() {
    var swiper = this;
    Utils.extend(swiper, {
      coverflowEffect: {
        setTranslate: Coverflow.setTranslate.bind(swiper),
        setTransition: Coverflow.setTransition.bind(swiper),
      },
    });
  },
  on: {
    beforeInit: function beforeInit() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') { return; }

      swiper.classNames.push(((swiper.params.containerModifierClass) + "coverflow"));
      swiper.classNames.push(((swiper.params.containerModifierClass) + "3d"));

      swiper.params.watchSlidesProgress = true;
      swiper.originalParams.watchSlidesProgress = true;
    },
    setTranslate: function setTranslate() {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') { return; }
      swiper.coverflowEffect.setTranslate();
    },
    setTransition: function setTransition(duration) {
      var swiper = this;
      if (swiper.params.effect !== 'coverflow') { return; }
      swiper.coverflowEffect.setTransition(duration);
    },
  },
};

// Swiper Class
// Core Modules
Swiper$1.use([
  Device$2,
  Support$2,
  Browser$2,
  Resize,
  Observer$1,
  Virtual$1,
  Keyboard$1,
  Mousewheel$1,
  Navigation$1,
  Pagination$1,
  Scrollbar$1,
  Parallax$1,
  Zoom$1,
  Lazy$1,
  Controller$1,
  A11y,
  History$1,
  HashNavigation$1,
  Autoplay$1,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow
]);

return Swiper$1;

})));

/*
|--------------------------------------------------------------------------
| Mobile menu
|--------------------------------------------------------------------------
*/

$('.burger').click(function() {
	$(this).toggleClass('-open');
});