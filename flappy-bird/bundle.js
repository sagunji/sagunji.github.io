!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={i:i,l:!1,exports:{}};return e[i].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function s(){M=new b.default(100,100),M.create(),C.appendChild(M.element),B=setInterval(function(){I.moveBg(),l(),a(),o(),r(),c(),f(),d()},1e3/60)}function o(){M.gravity()}function r(){M.velocity--}function l(){if(I.marginLeft%400==0)for(var e=h(),t=0;t<2;t++)T=new k.default(t,e),T.create(),C.appendChild(T.element),L.push(T)}function a(){for(var e=0;e<L.length;e++)L[e].movePipe()}function u(e){switch(e.keyCode){case 32:M.jumpUp();break;case 13:y(),s()}}function h(){return-Math.floor(201*Math.random())-150}function c(){(M.yPos<=0||M.yPos+M.height>=400)&&(clearInterval(B),H=!0,m())}function f(){for(var e=0;e<L.length;e++)console.log(M.yPos),M.xPos<=L[e].xPos+L[e].width&&M.xPos+M.width>=L[e].xPos&&M.yPos<=L[e].yPos+L[e].height&&M.height+M.yPos>=L[e].yPos&&(console.log("game over "+e),clearInterval(B),H=!0,m())}function m(){S.changeZIndex(10)}function y(){if(H){for(var e=0;e<L.length;e++)C.removeChild(L[e].element);H=!1,L=[],C.removeChild(M.element),S.changeZIndex(-1),z.resetScore()}}function d(){if(!H)for(var e=0;e<L.length;e++)M.xPos==L[e].xPos+L[e].width&&z.addScore()}var g=n(1),p=i(g),v=n(2),b=i(v),w=n(3),P=(i(w),n(4)),k=i(P),x=n(5),j=i(x),_=n(6),O=i(_),C=document.getElementsByClassName("wrapper")[0],E=document.getElementById("container"),I=new p.default(E);I.create(),document.addEventListener("keydown",u);var M=void 0,T=void 0,L=[],S=new j.default;S.create(),C.appendChild(S.element);var z=new O.default;z.create(),C.appendChild(z.element),s();var B,H=!1},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t){i(this,e),this.element=t,this.width=1e5,this.height=400,this.marginLeft=0}return s(e,[{key:"create",value:function(){this.element.style.width=this.width,this.element.style.height=this.height,this.element.className+="center",this.element.style.background="url('images/background.png')",this.element.style.position="absolute"}},{key:"moveBg",value:function(){this.marginLeft-=1,this.element.style.left=this.marginLeft}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,n){i(this,e),this.element=document.createElement("div"),this.setPosition(t,n),this.setToDefault()}return s(e,[{key:"create",value:function(){this.element.style.width=this.width,this.element.style.height=this.height,this.element.style.top=this.yPos,this.element.style.left=this.xPos,this.element.style.backgroundImage="url('images/flappy-bird.png')",this.element.style.position="absolute"}},{key:"gravity",value:function(){this.yPos-=this.velocity*this.t-.5*this.g*this.t*this.t,this.element.style.top=this.yPos}},{key:"jumpUp",value:function(){this.velocity=15}},{key:"setToDefault",value:function(){this.g=.5,this.t=.5,this.velocity=0,this.width=50,this.height=30}},{key:"setPosition",value:function(e,t){this.xPos=e,this.yPos=t}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){i(this,e)}return s(e,[{key:"construtor",value:function(){this.element=document.createElement("div"),this.width=280,this.height=50}},{key:"create",value:function(){this.element.style.width=this.width,this.element.style.height=this.height,this.element.style.position="absolute",this.element.style.top=400,this.element.style.left=300,this.element.style.backgroundImage="url('images/start-img.png')"}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(t,n){i(this,e),this.element=document.createElement("div"),this.width=100,this.height=400,this.xPos=700,this.yPos=n,this.imgSrc,0==t?(this.imgSrc="url('images/top-obs.png')",this.yPos=n):1==t&&(this.imgSrc="url('images/bottom-obs.png')",this.yPos=n+400+150)}return s(e,[{key:"create",value:function(){this.element.style.width=this.width,this.element.style.height=this.height,this.element.style.position="absolute",this.element.style.backgroundImage=this.imgSrc,this.element.style.left=this.xPos,this.element.style.top=this.yPos}},{key:"movePipe",value:function(){this.xPos-=1,this.element.style.left=this.xPos}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){i(this,e),this.element=document.createElement("div"),this.width=280,this.height=50,this.z=-1}return s(e,[{key:"create",value:function(){this.element.style.width=this.width,this.element.style.height=this.height,this.element.style.backgroundImage="url('images/start-img.png')",this.element.style.position="absolute",this.element.style.top=150,this.element.style.left=250,this.element.style.zIndex=this.z}},{key:"changeZIndex",value:function(e){this.z=e,this.element.style.zIndex=this.z}}]),e}();t.default=o},function(e,t,n){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=function(){function e(){i(this,e),this.element=document.createElement("div"),this.width=55,this.height=20,this.score=0}return s(e,[{key:"create",value:function(){this.element.style.width=this.width,this.element.style.height=this.height,this.element.style.position="absolute",this.element.style.backgroundImage="url('images/scorechart.png')",this.element.style.top=0,this.element.style.right=10,this.element.style.paddingTop=30,this.element.style.paddingLeft=45,this.element.innerHTML=this.score}},{key:"addScore",value:function(){this.score++,this.element.innerHTML=this.score/2}},{key:"resetScore",value:function(){this.score=0,this.element.innerHTML=this.score}}]),e}();t.default=o}]);