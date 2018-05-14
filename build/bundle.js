!function(t){function e(n){if(i[n])return i[n].exports;var r=i[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var i={};e.m=t,e.c=i,e.i=function(t){return t},e.d=function(t,i,n){e.o(t,i)||Object.defineProperty(t,i,{configurable:!1,enumerable:!0,get:n})},e.n=function(t){var i=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(i,"a",i),i},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=4)}([function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.SVG_NS="http://www.w3.org/2000/svg",e.KEYS={a:"a",z:"z",x:"x",shift:"Shift",up:"ArrowUp",down:"ArrowDown",right:"ArrowRight",left:"ArrowLeft",spaceBar:" ",b:"b"}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.eot"},function(t,e,i){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=i(6),l=n(a),u=i(7),h=n(u),d=i(5),f=n(d),c=i(8),p=n(c),b=i(9),y=n(b),v=function(){function t(e,i,n){var s=this;r(this,t),this.element=e,this.width=i,this.height=n,this.gameElement=document.getElementById(this.element),this.paddleWidth=15,this.paddleHeight=70,this.boardGap=8,this.radius=8,this.pause=!1,this.board=new l.default(this.width,this.height),this.paddle1=new h.default(this.height,this.paddleWidth,this.paddleHeight,this.boardGap,(this.height-this.paddleHeight)/2,o.KEYS.a,o.KEYS.z,o.KEYS.x,o.KEYS.shift,"paddle1"),this.paddle2=new h.default(this.height,this.paddleWidth,this.paddleHeight,this.width-this.boardGap-this.paddleWidth,(this.height-this.paddleHeight)/2,o.KEYS.up,o.KEYS.down,o.KEYS.right,o.KEYS.left,"paddle2"),this.score1=new p.default(this.width/2-80,30,30),this.score2=new p.default(this.width/2+55,30,30),this.winner=new y.default(this.width/2-250,225),this.winner2=new y.default(this.width/2-250,70),this.gameover=new Audio("public/sounds/gameover.wav"),this.ball1=new f.default(this.radius,this.width,this.height),this.ball2=new f.default(this.radius,this.width,this.height),document.addEventListener("keydown",function(t){t.key==o.KEYS.spaceBar&&(s.pause=!s.pause)})}return s(t,[{key:"render",value:function(){if(!this.pause){this.gameElement.innerHTML="";var t=document.createElementNS(o.SVG_NS,"svg");t.setAttributeNS(null,"width",this.width),t.setAttributeNS(null,"height",this.height),t.setAttributeNS(null,"viewBox","0 0 "+this.width+" "+this.height),this.gameElement.appendChild(t),this.board.render(t),this.score1.render(t,this.paddle1.score),this.score2.render(t,this.paddle2.score),this.paddle1.render(t),this.paddle2.render(t),this.ball1.render(t,this.paddle1,this.paddle2),this.ball2.render(t,this.paddle1,this.paddle2),10!==this.paddle1.score&&10!==this.paddle2.score||(this.winner.render(t),this.winner2.render(t),this.pause=!0,this.gameover.play())}}}]),t}();e.default=v},function(t,e,i){var n=i(10);"string"==typeof n&&(n=[[t.i,n,""]]);i(15)(n,{});n.locals&&(t.exports=n.locals)},function(t,e,i){"use strict";i(3);var n=i(2),r=function(t){return t&&t.__esModule?t:{default:t}}(n),s=new r.default("game",512,256);!function t(){s.render(),requestAnimationFrame(t)}()},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){var i=[],n=!0,r=!1,s=void 0;try{for(var o,a=t[Symbol.iterator]();!(n=(o=a.next()).done)&&(i.push(o.value),!e||i.length!==e);n=!0);}catch(t){r=!0,s=t}finally{try{!n&&a.return&&a.return()}finally{if(r)throw s}}return i}return function(e,i){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return t(e,i);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),o=i(0),a=function(){function t(e,i,r){n(this,t),this.radius=e,this.boardWidth=i,this.boardHeight=r,this.direction=1,this.reset(),this.ping=new Audio("public/sounds/tin-ping.wav"),this.chime=new Audio("public/sounds/water-drip.wav")}return s(t,[{key:"reset",value:function(){for(this.x=this.boardWidth/2,this.y=this.boardHeight/2,this.vy=0;0===this.vy;)this.vy=Math.floor(10*Math.random()-5);this.vx=this.direction*(6-Math.abs(this.vy))}},{key:"goal",value:function(t){t.score++,this.reset()}},{key:"wallCollision",value:function(){var t=this.x-this.radius<=0,e=this.x+this.radius>=this.boardWidth,i=this.y-this.radius<=0,n=this.y+this.radius>=this.boardHeight;(t||e)&&(this.vx=-this.vx),(i||n)&&(this.vy=-this.vy)}},{key:"paddleCollision",value:function(t,e){if(this.vx>0){var i=e.coordinates(e.x,e.y,e.width,e.height),n=r(i,4),s=n[0],o=n[1],a=n[2],l=n[3];this.x+this.radius>=s&&this.x+this.radius<=o&&this.y>=a&&this.y<=l&&(this.vx=-this.vx,this.ping.play())}else{var u=t.coordinates(t.x,t.y,t.width,t.height),h=r(u,4),d=h[0],f=h[1],c=h[2],p=h[3];this.x-this.radius<=f&&this.x-this.radius>=d&&this.y>=c&&this.y<=p&&(this.vx=-this.vx,this.ping.play())}}},{key:"render",value:function(t,e,i){this.x+=this.vx,this.y+=this.vy;var n=document.createElementNS(o.SVG_NS,"circle");n.setAttributeNS(null,"r",this.radius),n.setAttributeNS(null,"cx",this.x),n.setAttributeNS(null,"cy",this.y),n.setAttributeNS(null,"fill","white"),t.appendChild(n),this.wallCollision(),this.paddleCollision(e,i);var r=this.x+this.radius>=this.boardWidth,s=this.x-this.radius<=0;r?(this.goal(e),this.direction=-1,this.chime.play()):s&&(this.goal(i),this.direction=1,this.chime.play())}}]),t}();e.default=a},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i){n(this,t),this.width=e,this.height=i}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","#196f0c"),e.setAttributeNS(null,"stroke","#6413BF"),e.setAttributeNS(null,"stroke-width","9");var i=document.createElementNS(s.SVG_NS,"line");i.setAttributeNS(null,"x1",this.width/2),i.setAttributeNS(null,"y1",0),i.setAttributeNS(null,"x2",this.width/2),i.setAttributeNS(null,"y2",this.height),i.setAttributeNS(null,"stroke","white"),i.setAttributeNS(null,"stroke-width","3"),i.setAttributeNS(null,"stroke-dasharray","15, 5");var n=document.createElementNS(s.SVG_NS,"rect");n.setAttributeNS(null,"x",-1),n.setAttributeNS(null,"y",64),n.setAttributeNS(null,"width",60),n.setAttributeNS(null,"height",128),n.setAttributeNS(null,"fill","#269B15"),n.setAttributeNS(null,"stroke","white"),n.setAttributeNS(null,"stroke-width","2"),n.setAttributeNS(null,"stroke-dasharray","15, 5");var r=document.createElementNS(s.SVG_NS,"rect");r.setAttributeNS(null,"x",453),r.setAttributeNS(null,"y",64),r.setAttributeNS(null,"width",60),r.setAttributeNS(null,"height",128),r.setAttributeNS(null,"fill","#269B15"),r.setAttributeNS(null,"stroke","white"),r.setAttributeNS(null,"stroke-width","2"),r.setAttributeNS(null,"stroke-dasharray","15, 5"),t.appendChild(e),t.appendChild(i),t.appendChild(n),t.appendChild(r)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r,s,o,a,l,u,h,d){var f=this;n(this,t),this.boardHeight=e,this.width=i,this.height=r,this.x=s,this.y=o,this.speed=10,this.score=0,this.paddle=d,this.keyState={},document.addEventListener("keydown",function(t){f.keyState[t.key||t.which]=!0},!0),document.addEventListener("keyup",function(t){f.keyState[t.key||t.which]=!1},!0),document.addEventListener("keyleft",function(t){f.keyState[t.key||t.which]=!0},!0),document.addEventListener("keyright",function(t){f.keyState[t.key||t.which]=!1},!0)}return r(t,[{key:"up",value:function(){this.y=Math.max(0,this.y-this.speed)}},{key:"down",value:function(){this.y=Math.min(this.boardHeight-this.height,this.y+this.speed)}},{key:"paddle1left",value:function(){this.x=Math.max(this.width,this.x-this.speed)}},{key:"paddle1right",value:function(){this.x=Math.min(112,this.x+this.speed)}},{key:"paddle2left",value:function(){this.x=Math.max(400,this.x-this.speed)}},{key:"paddle2right",value:function(){this.x=Math.min(500-this.width,this.x+this.speed)}},{key:"coordinates",value:function(t,e,i,n){return[t,t+i,e,e+n]}},{key:"render",value:function(t){this.keyState.a&&"paddle1"===this.paddle&&this.up(),this.keyState.z&&"paddle1"===this.paddle&&this.down(),this.keyState.Shift&&"paddle1"===this.paddle&&this.paddle1left(),this.keyState.x&&"paddle1"===this.paddle&&this.paddle1right(),this.keyState.ArrowUp&&"paddle2"===this.paddle&&this.up(),this.keyState.ArrowDown&&"paddle2"===this.paddle&&this.down(),this.keyState.ArrowLeft&&"paddle2"===this.paddle&&this.paddle2left(),this.keyState.ArrowRight&&"paddle2"===this.paddle&&this.paddle2right();var e=document.createElementNS(s.SVG_NS,"rect");e.setAttributeNS(null,"width",this.width),e.setAttributeNS(null,"height",this.height),e.setAttributeNS(null,"fill","#FFB81C"),e.setAttributeNS(null,"stroke","#6413BF"),e.setAttributeNS(null,"stroke-width","4"),e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),t.appendChild(e)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.size=r}return r(t,[{key:"render",value:function(t,e){var i=document.createElementNS(s.SVG_NS,"text");i.setAttributeNS(null,"x",this.x-30),i.setAttributeNS(null,"y",160),i.setAttributeNS(null,"font-family","'SilkScreen Web', monotype"),i.setAttributeNS(null,"font-size",120),i.setAttributeNS(null,"fill","#FFB81C"),i.textContent=e,t.appendChild(i)}}]),t}();e.default=o},function(t,e,i){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),s=i(0),o=function(){function t(e,i,r){n(this,t),this.x=e,this.y=i,this.size=77}return r(t,[{key:"render",value:function(t){var e=document.createElementNS(s.SVG_NS,"text");e.setAttributeNS(null,"x",this.x),e.setAttributeNS(null,"y",this.y),e.setAttributeNS(null,"font-family","'Silkscreen Web', monotype"),e.setAttributeNS(null,"font-size",this.size),e.setAttributeNS(null,"fill","#6413BF"),e.setAttributeNS(null,"stroke","#FFB81C"),e.textContent="Game Over!",t.appendChild(e)}}]),t}();e.default=o},function(t,e,i){e=t.exports=i(11)(),e.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}@font-face{font-family:Silkscreen Web;src:url('+i(1)+");src:url("+i(1)+'?#iefix) format("embedded-opentype"),url('+i(14)+') format("woff"),url('+i(13)+') format("truetype"),url('+i(12)+'#silkscreennormal) format("svg");font-weight:400;font-style:normal}html{font-size:16px}body{align-items:center;display:flex;font-family:Silkscreen Web,monotype;height:100vh;justify-content:center;width:100%}h1{font-size:8.5rem;margin-bottom:4.5rem;text-align:center;color:#000;-webkit-text-stroke-width:3px;-webkit-text-stroke-color:#ffb81c;text-shadow:2px 2px 0 #6413bf,3px 3px 0 #6413bf,4px 4px 0 #6413bf,5px 5px 0 #6413bf,6px 6px 0 #000,7px 7px 0 #000,8px 8px 0 #000,9px 9px 0 #6413bf,10px 10px 0 #6413bf,11px 11px 0 #6413bf,12px 12px 0 #6413bf,13px 13px 0 #000,14px 14px 0 #000,15px 15px 0 #000,16px 16px 0 #6413bf,17px 17px 0 #6413bf,18px 18px 0 #6413bf,19px 19px 0 #6413bf,20px 20px 0 #000,21px 21px 0 #000,22px 22px 0 #000,23px 23px 0 #6413bf,24px 24px 0 #6413bf,25px 25px 0 #6413bf,26px 26px 0 #6413bf}h2{font-size:1.25rem;margin-bottom:.5rem;text-align:center;color:#6413bf;-webkit-text-stroke-color:#ffb81c;text-shadow:2px 2px 0 #6413bf,3px 3px 0 #6413bf,4px 4px 0 #6413bf,5px 5px 0 #6413bf,6px 6px 0 #000,7px 7px 0 #000,8px 8px 0 #000,}.showtime{color:red}.controls{display:flex;justify-content:space-evenly}.controls ul{justify-content:column}.controls-menu{display:flex;justify-content:center;font-size:2rem}.player1,.player2{text-align:center}',""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var i=this[e];i[2]?t.push("@media "+i[2]+"{"+i[1]+"}"):t.push(i[1])}return t.join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var s=this[r][0];"number"==typeof s&&(n[s]=!0)}for(r=0;r<e.length;r++){var o=e[r];"number"==typeof o[0]&&n[o[0]]||(i&&!o[2]?o[2]=i:i&&(o[2]="("+o[2]+") and ("+i+")"),t.push(o))}},t}},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.svg"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.ttf"},function(t,e,i){t.exports=i.p+"public/fonts/slkscr-webfont.woff"},function(t,e){function i(t,e){for(var i=0;i<t.length;i++){var n=t[i],r=f[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(l(n.parts[s],e))}else{for(var o=[],s=0;s<n.parts.length;s++)o.push(l(n.parts[s],e));f[n.id]={id:n.id,refs:1,parts:o}}}}function n(t){for(var e=[],i={},n=0;n<t.length;n++){var r=t[n],s=r[0],o=r[1],a=r[2],l=r[3],u={css:o,media:a,sourceMap:l};i[s]?i[s].parts.push(u):e.push(i[s]={id:s,parts:[u]})}return e}function r(t,e){var i=b(),n=x[x.length-1];if("top"===t.insertAt)n?n.nextSibling?i.insertBefore(e,n.nextSibling):i.appendChild(e):i.insertBefore(e,i.firstChild),x.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");i.appendChild(e)}}function s(t){t.parentNode.removeChild(t);var e=x.indexOf(t);e>=0&&x.splice(e,1)}function o(t){var e=document.createElement("style");return e.type="text/css",r(t,e),e}function a(t){var e=document.createElement("link");return e.rel="stylesheet",r(t,e),e}function l(t,e){var i,n,r;if(e.singleton){var l=v++;i=y||(y=o(e)),n=u.bind(null,i,l,!1),r=u.bind(null,i,l,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=a(e),n=d.bind(null,i),r=function(){s(i),i.href&&URL.revokeObjectURL(i.href)}):(i=o(e),n=h.bind(null,i),r=function(){s(i)});return n(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;n(t=e)}else r()}}function u(t,e,i,n){var r=i?"":n.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var s=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(s,o[e]):t.appendChild(s)}}function h(t,e){var i=e.css,n=e.media;if(n&&t.setAttribute("media",n),t.styleSheet)t.styleSheet.cssText=i;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}function d(t,e){var i=e.css,n=e.sourceMap;n&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(n))))+" */");var r=new Blob([i],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(r),s&&URL.revokeObjectURL(s)}var f={},c=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}},p=c(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=c(function(){return document.head||document.getElementsByTagName("head")[0]}),y=null,v=0,x=[];t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},void 0===e.singleton&&(e.singleton=p()),void 0===e.insertAt&&(e.insertAt="bottom");var r=n(t);return i(r,e),function(t){for(var s=[],o=0;o<r.length;o++){var a=r[o],l=f[a.id];l.refs--,s.push(l)}if(t){i(n(t),e)}for(var o=0;o<s.length;o++){var l=s[o];if(0===l.refs){for(var u=0;u<l.parts.length;u++)l.parts[u]();delete f[l.id]}}}};var m=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}()}]);