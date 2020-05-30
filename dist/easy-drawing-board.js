!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("core-js/modules/es.array.concat"),require("core-js/modules/es.array.map"),require("core-js/modules/es.object.to-string"),require("core-js/modules/es.promise"),require("core-js/modules/es.regexp.exec"),require("core-js/modules/es.string.replace"),require("core-js/modules/es.string.split"),require("core-js/modules/es.array.fill"),require("core-js/modules/es.object.keys")):"function"==typeof define&&define.amd?define(["core-js/modules/es.array.concat","core-js/modules/es.array.map","core-js/modules/es.object.to-string","core-js/modules/es.promise","core-js/modules/es.regexp.exec","core-js/modules/es.string.replace","core-js/modules/es.string.split","core-js/modules/es.array.fill","core-js/modules/es.object.keys"],e):(t=t||self).EasyDrawingBoard=e()}(this,(function(){"use strict";function t(t,e,n,r,o,i,a){try{var s=t[i](a),c=s.value}catch(t){return void n(t)}s.done?e(c):Promise.resolve(c).then(r,o)}function e(e){return function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function s(e){t(a,o,i,s,c,"next",e)}function c(e){t(a,o,i,s,c,"throw",e)}s(void 0)}))}}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}!function(t,e){void 0===e&&(e={});var n=e.insertAt;if(t&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=t:o.appendChild(document.createTextNode(t))}}('.__edb-textarea-box {\n  position: absolute;\n  z-index: 101;\n  width: auto;\n  overflow-y: hidden;\n  overflow-x: hidden;\n  word-wrap: break-word;\n  word-break: break-all;\n  color: #aaa;\n  border: 1px dashed gray;\n}\n.__edb-textarea-box .__edb-textarea {\n  resize: none;\n  background: transparent;\n  border: none;\n  padding: 1px;\n  outline: none;\n  font-family: "PingFang SC", "Microsoft YaHei", "微软雅黑";\n  overflow: hidden;\n}\n.__edb-text-pre {\n  position: absolute;\n  z-index: 999;\n  top: 0;\n  left: -9999px;\n  min-width: 100px;\n  display: inline-block;\n  padding: 1px;\n  border: 1px solid red;\n  font-family: "PingFang SC", "Microsoft YaHei", "微软雅黑";\n}\n');var a=function(t){var e=Object.prototype,n=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},o=r.iterator||"@@iterator",i=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(t,e,n,r){var o=e&&e.prototype instanceof l?e:l,i=Object.create(o.prototype),a=new k(r||[]);return i._invoke=function(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return C()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var s=m(a,n);if(s){if(s===u)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=c(t,e,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}(t,n,a),i}function c(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var u={};function l(){}function h(){}function f(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,g=v&&v(v(E([])));g&&g!==e&&n.call(g,o)&&(d=g);var p=f.prototype=l.prototype=Object.create(d);function y(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function x(t,e){var r;this._invoke=function(o,i){function a(){return new e((function(r,a){!function r(o,i,a,s){var u=c(t[o],t,i);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==typeof h&&n.call(h,"__await")?e.resolve(h.__await).then((function(t){r("next",t,a,s)}),(function(t){r("throw",t,a,s)})):e.resolve(h).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,s)}))}s(u.arg)}(o,i,r,a)}))}return r=r?r.then(a,a):a()}}function m(t,e){var n=t.iterator[e.method];if(void 0===n){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,m(t,e),"throw"===e.method))return u;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return u}var r=c(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,u;var o=r.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,u):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,u)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,i=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return h.prototype=p.constructor=f,f.constructor=h,f[a]=h.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(p),t},t.awrap=function(t){return{__await:t}},y(x.prototype),x.prototype[i]=function(){return this},t.AsyncIterator=x,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new x(s(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},y(p),p[a]="Generator",p[o]=function(){return this},p.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=E,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),c=n.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,u):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),u},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),b(n),u}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;b(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:E(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=a}catch(t){Function("r","regeneratorRuntime = r")(a)}function s(t,e){var n=e.canvasWidth,r=e.canvasHeight,o=e.arrowSize;t.save(),t.beginPath(),t.moveTo(e.points[0].x*n,e.points[0].y*r);for(var i=function(t,e,n,r){!function(t,e){t.beginPath(),t.moveTo(e[0].x,e[0].y);for(var n=1;n<e.length;n++)t.lineTo(e[n].x,e[n].y);t.closePath(),t.fill()}(t,function(t,e,n){var r=Math.atan2(e.y-t.y,e.x-t.x),o=n/3*2,i={x:e.x-Math.round(n*Math.cos(r+.6)),y:e.y-Math.round(n*Math.sin(r+.6))},a={x:e.x-Math.round(n*Math.cos(r-.6)),y:e.y-Math.round(n*Math.sin(r-.6))},s={x:e.x-Math.round(o*Math.cos(r+.3)),y:e.y-Math.round(o*Math.sin(r+.3))};return[t,{x:e.x-Math.round(o*Math.cos(r-.3)),y:e.y-Math.round(o*Math.sin(r-.3))},a,e,i,s]}(n,e,r))},a=1;a<e.points.length;a++)i(t,{x:e.points[a].x*n,y:e.points[a].y*r},{x:e.points[a-1].x*n,y:e.points[a-1].y*r},o);t.restore()}var c=function(){function t(){n(this,t)}return o(t,null,[{key:"createEl",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"div",e=arguments.length>1?arguments[1]:void 0,n=e.styles,r=void 0===n?{}:n,o=e.attrs,i=void 0===o?{}:o,a=e.props,s=void 0===a?{}:a,c=document.createElement(t);return Object.keys(r).map((function(t){c.style[t]=r[t]})),Object.keys(i).map((function(t){c.setAttribute(t,i[t])})),Object.keys(s).map((function(t){c[t]=s[t]})),c}},{key:"hasClass",value:function(t,e){return t.classList.contains(e)}},{key:"addClass",value:function(t,e){t.classList.add(e)}},{key:"removeClass",value:function(t,e){t.classList.removeClass(e)}},{key:"setAttr",value:function(t,e,n){t.setAttribute(e,n)}},{key:"delAttr",value:function(t,e){t.removeAttribute(e)}},{key:"appendChild",value:function(t,e){t.appendChild(e)}},{key:"removeChild",value:function(t,e){t.removeChild(e)}}]),t}();return function(){function t(e){n(this,t);var r=e.container,o=e.bgImg,i=void 0===o?"":o,a=e.lineColor,s=void 0===a?"#f00":a,c=e.lineWidth,u=void 0===c?"1":c,l=e.arrowSize,h=void 0===l?15:l,f=e.canvasBgColor,d=void 0===f?"#fff":f,v=e.textFontSize,g=void 0===v?16:v,p=e.textLineHeight,y=void 0===p?20:p,x=e.textColor,m=void 0===x?"#f00":x;if(!r)throw Error("No container element were found...");this.container=r,this.canvas=this.createCanvasEl(r),this.context=this.canvas.getContext("2d"),this.mode="pencil",this.canvasWidth=this.canvas.width,this.canvasHeight=this.canvas.height,this.configuration={lineColor:s,lineWidth:u,arrowSize:h,canvasBgColor:d,textFontSize:g,textLineHeight:y,textColor:m},this.arrowPoints=[],this.isDrawing=!1,this.image=new Image,this.bgImg=i,this.textareaEl=null,this.measureEl=null,this.createTextMeasure(),this.init()}var r;return o(t,[{key:"createCanvasEl",value:function(t){var e=c.createEl("canvas",{styles:{height:"".concat(t.clientHeight,"px"),width:"".concat(t.clientWidth,"px")},attrs:{width:t.clientHeight,height:t.clientWidth}});return c.appendChild(t,e),e}},{key:"init",value:function(){var t,e=this,n=null,r=this.canvas.getBoundingClientRect(),o=r.x,i=r.y;this.clear(),this.canvas.addEventListener("mousedown",(function(r){e.isDrawing=!0,e.image.src=e.canvas.toDataURL("image/png");var a=r.clientX,s=r.clientY,c=t=a-o,u=n=s-i;e.context.moveTo(t,n),e.context.lineWidth=e.configuration.lineWidth,e.context.strokeStyle=e.configuration.lineColor,e.context.fillStyle=e.configuration.lineColor,e.context.beginPath(),"arrow"===e.mode&&e.saveArrowPoint({x:t,y:n}),"text"===e.mode&&e.createTextArea({x:c,y:u})})),this.canvas.addEventListener("mousemove",(function(r){if(e.isDrawing){var a=r.clientX,s=r.clientY,c=a-o,u=s-i,l=t,h=n,f=Math.abs(c-t),d=Math.abs(u-n);c<t&&(l=c),u<n&&(h=u);var v={x:c,y:u,originX:t,originY:n,newOriginX:l,newOriginY:h,distanceX:f,distanceY:d},g=e.handleMousemove()[e.mode];g&&g(v)}})),this.canvas.addEventListener("mouseup",(function(){return e.endOfDrawing()})),this.canvas.addEventListener("mouseleave",(function(){return e.endOfDrawing()}))}},{key:"reDraw",value:function(){this.context.clearRect(0,0,this.canvasWidth,this.canvasHeight),this.context.drawImage(this.image,0,0),this.context.beginPath()}},{key:"endOfDrawing",value:function(){this.isDrawing&&(this.context.closePath(),this.isDrawing=!1)}},{key:"setBackground",value:function(){this.bgImg&&(this.context.globalCompositeOperation="destination-out",this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.canvas.style.background="url(".concat(this.bgImg,")"),this.canvas.style.backgroundSize="100% 100%",this.canvas.style.backgroundPosition="center",this.canvas.style.backgroundRepeat="no-repeat",this.context.globalCompositeOperation="source-over")}},{key:"handleMousemove",value:function(){var t=this;return{pencil:function(e){var n=e.x,r=e.y;t.context.lineTo(n,r),t.context.stroke()},straightLine:function(e){var n=e.x,r=e.y,o=e.originX,i=e.originY;t.reDraw(),t.context.moveTo(o,i),t.context.lineTo(n,r),t.context.stroke()},rect:function(e){var n=e.newOriginX,r=e.newOriginY,o=e.distanceX,i=e.distanceY;t.reDraw(),t.context.rect(n,r,o,i),t.context.stroke(),t.context.closePath()},circle:function(e){var n=e.newOriginX,r=e.newOriginY,o=e.distanceX,i=e.distanceY;t.reDraw();var a=Math.sqrt(o*o+i*i);t.context.arc(n+o,r+i,a,0,2*Math.PI),t.context.stroke()},arrow:function(e){var n=e.x,r=e.y;t.reDraw(),t.arrowPoints[1]={x:n/t.canvasWidth,y:r/t.canvasHeight},s(t.context,{points:t.arrowPoints,arrowSize:t.configuration.arrowSize,canvasWidth:t.canvasWidth,canvasHeight:t.canvasHeight})},eraser:function(e){var n=e.x,r=e.y;t.bgImg&&(t.context.globalCompositeOperation="destination-out"),t.context.strokeStyle=t.configuration.canvasBgColor,t.context.fillStyle=t.configuration.canvasBgColor,t.context.lineTo(n,r),t.context.stroke()},clear:function(){return t.clear()}}}},{key:"saveArrowPoint",value:function(t){this.arrowPoints=[],this.arrowPoints.push({x:t.x/this.canvasWidth,y:t.y/this.canvasHeight})}},{key:"createTextMeasure",value:function(){this.measureEl&&(c.removeChild(this.container,this.measureEl),this.measureEl=null),this.measureEl=c.createEl("pre",{styles:{fontSize:"".concat(this.configuration.textFontSize,"px"),lineHeight:"".concat(this.configuration.textLineHeight,"px"),color:this.configuration.textColor}}),c.addClass(this.measureEl,"__edb-text-pre"),c.appendChild(this.container,this.measureEl)}},{key:"drawText",value:function(t,e){var n=this;e.font=e.font||'"PingFang SC","Microsoft YaHei","微软雅黑"';var r=e.text;t.save(),t.textBaseline="middle",t.font="".concat(this.configuration.textFontSize,"px/").concat(this.configuration.textLineHeight,"px ").concat(e.font),t.fillStyle=this.configuration.textColor,t.globalCompositeOperation="source-over",r.replace(/<br>/g,"\n").split(/\n/).map((function(r,o){t.fillText(r,e.position.x+2,e.position.y+o*n.configuration.textLineHeight+n.configuration.textLineHeight/2+2)})),t.restore()}},{key:"createTextArea",value:function(t){var e=this;this.mode=null,this.boxDom=c.createEl("div",{styles:{left:"".concat(t.x,"px"),top:"".concat(t.y,"px"),lineHeight:"".concat(this.configuration.textLineHeight,"px"),fontSize:"".concat(this.configuration.textFontSize,"px")}}),c.addClass(this.boxDom,"__edb-textarea-box"),this.textareaEl=c.createEl("textarea",{styles:{lineHeight:"".concat(this.configuration.textLineHeight,"px"),color:this.configuration.textColor,fontSize:"".concat(this.configuration.textFontSize,"px")},props:{placeholder:"请点击输入",autofocus:!0}}),c.addClass(this.textareaEl,"__edb-textarea"),c.appendChild(this.boxDom,this.textareaEl),c.appendChild(this.container,this.boxDom),this.textareaEl.onblur=function(){e.mode=null,c.delAttr(e.textareaEl,"autofocus"),e.drawText(e.context,{text:e.textareaEl.value,position:t}),c.removeChild(e.container,e.boxDom)},this.textareaEl.addEventListener("input",(function(t){e.measureEl.innerHTML=t.target.value+" ",e.textareaEl.style.width=e.measureEl.clientWidth+"px",e.textareaEl.style.height=e.measureEl.clientHeight+"px"}))}},{key:"config",value:function(t,e){this.configuration[t]=e,"canvasBgColor"===t&&this.clear(),("textFontSize"===t||"textColor"===t||"textLineHeight"===t)&&this.createTextMeasure()}},{key:"setMode",value:function(t){this.context.globalCompositeOperation="source-over",this.context.strokeStyle=this.configuration.lineColor,this.context.fillStyle=this.configuration.lineColor,this.mode=t}},{key:"getBase64Data",value:function(t){var e=this;return new Promise((function(n,r){var o=e,i=o.canvas.toDataURL("image/".concat(t)),a=c.createEl("canvas",{styles:{width:"".concat(o.canvasWidth,"px"),height:"".concat(o.canvasHeight,"px")},attrs:{width:o.canvasWidth,height:o.canvasHeight}}),s=a.getContext("2d"),u=new Image;u.setAttribute("crossOrigin","anonymous"),u.src=o.bgImg,u.onerror=function(){return r("Image loading failed.")},u.onload=function(){s.drawImage(this,0,0,o.canvasWidth,o.canvasHeight);var e=new Image;e.setAttribute("crossOrigin","anonymous"),e.src=i,e.onerror=function(){return r("Image loading failed.")},e.onload=function(){s.drawImage(this,0,0,o.canvasWidth,o.canvasHeight),n(a.toDataURL("image/".concat(t)))}}}))}},{key:"generateBase64",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"png";return new Promise(function(){var r=e(regeneratorRuntime.mark((function e(r){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.bgImg){e.next=7;break}return e.next=3,t.getBase64Data(n);case 3:o=e.sent,r(o),e.next=8;break;case 7:r(t.canvas.toDataURL("image/".concat(n)));case 8:case"end":return e.stop()}}),e)})));return function(t){return r.apply(this,arguments)}}())}},{key:"saveImg",value:(r=e(regeneratorRuntime.mark((function t(){var e,n,r,o=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=o.length>0&&void 0!==o[0]?o[0]:{type:"png",fileName:"canvas_image"},r=null,!this.bgImg){t.next=8;break}return t.next=5,this.getBase64Data(n.type);case 5:r=t.sent,t.next=9;break;case 8:r=this.canvas.toDataURL("image/".concat(n.type));case 9:c.createEl("a",{attrs:(e={href:this.canvas.toDataURL("image/".concat(n.type))},i(e,"href",r),i(e,"download","".concat(n.fileName,".").concat(n.type)),e)}).click();case 11:case"end":return t.stop()}}),t,this)}))),function(){return r.apply(this,arguments)})},{key:"clear",value:function(){this.context.fillStyle=this.configuration.canvasBgColor,this.context.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.setBackground()}}]),t}()}));
