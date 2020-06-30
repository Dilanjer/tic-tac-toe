!function(n){var r={};function e(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=r,e.d=function(n,r,t){e.o(n,r)||Object.defineProperty(n,r,{enumerable:!0,get:t})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,r){if(1&r&&(n=e(n)),8&r)return n;if(4&r&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(e.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&r&&"string"!=typeof n)for(var o in n)e.d(t,o,function(r){return n[r]}.bind(null,o));return t},e.n=function(n){var r=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(r,"a",r),r},e.o=function(n,r){return Object.prototype.hasOwnProperty.call(n,r)},e.p="",e(e.s=2)}([function(n,r,e){(r=e(1)(!1)).push([n.i,'* {\r\n  font-family: sans-serif, Arial;\r\n  box-sizing: border-box;\r\n  user-select: none;\r\n}\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n.wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n  width: 320px;\r\n}\r\n.wrapper .navigation-buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.wrapper .navigation-buttons .page-reload-button,\r\n.wrapper .navigation-buttons .menu-open-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 5px;\r\n  transition: transform linear 0.1s;\r\n}\r\n.wrapper .navigation-buttons .menu-open-button:active {\r\n  transform: scale(1.05);\r\n}\r\n.wrapper .navigation-buttons .page-reload-button:active {\r\n  transform: scale(1.1);\r\n  transform: rotate(-45deg);\r\n}\r\n.wrapper .title {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  text-shadow: #333 1px 2px 3px;\r\n  margin: 5px;\r\n}\r\n.wrapper .player {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 10px 20px 10px;\r\n  width: 100%;\r\n}\r\n.wrapper .player .win-counter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 74%;\r\n  margin: 0 auto;\r\n  font-size: 24px;\r\n  text-shadow: #333 1px 1px 3px;\r\n}\r\n.wrapper .player .player-step {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n.wrapper .player .player-step .cross,\r\n.wrapper .player .player-step .circle {\r\n  padding: 2px 38px;\r\n  border-radius: 5px;\r\n  font-size: 22px;\r\n  color: #fff;\r\n  transition: background-color linear 0.15s;\r\n  box-shadow: #333 1px 2px 3px;\r\n}\r\n.wrapper .player .player-step .ai {\r\n  font-size: 19px;\r\n  font-weight: bold;\r\n}\r\n.wrapper .player .player-step .ai input[type="checkbox"] {\r\n  transform: scale(1.3);\r\n}\r\n.wrapper .game-board {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n.wrapper .game-board .box {\r\n  width: 80px;\r\n  height: 80px;\r\n  padding: 5px;\r\n  margin: 5px;\r\n  border: 2px solid #333;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  font-size: 60px;\r\n  transition: box-shadow linear 0.12s, background-color linear 0.12s, transform linear 0.1s;\r\n}\r\n.wrapper .game-board .box:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(33, 33, 33, 0.1);\r\n  box-shadow: #000 0px 0px 2px;\r\n}\r\n.wrapper .game-board .box:active {\r\n  transform: scale(1.03);\r\n}\r\n.wrapper .game-board .box:focus {\r\n  outline: none;\r\n}\r\n.player-info {\r\n  display: none;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.player-info .wrapper-center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n.player-info .wrapper-center .player-win-text {\r\n  display: block;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 45px;\r\n  text-shadow: #000 1px 1px 5px;\r\n  margin-bottom: 50px;\r\n}\r\n.player-info .wrapper-center .restart-button {\r\n  padding: 8px 50px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: #ffffff;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  box-shadow: #000 1px 1px 3px;\r\n  transition: background-color linear 0.15s;\r\n}\r\n.player-info .wrapper-center .restart-button:hover {\r\n  cursor: pointer;\r\n  background-color: #85aafa;\r\n}\r\n.player-info .wrapper-center .restart-button:active {\r\n  background-color: #4b70be;\r\n}\r\n.menu {\r\n  display: none;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.menu .menu-navigation {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.menu .menu-navigation .menu-close-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  transition: transform linear 0.1s;\r\n}\r\n.menu .menu-buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n.menu .menu-buttons .button {\r\n  padding: 10px 26px;\r\n  margin-bottom: 15px;\r\n  max-width: 150px;\r\n  min-width: 150px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: #ffffff;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  box-shadow: #000 1px 1px 3px;\r\n  transition: background-color linear 0.15s;\r\n}\r\n.menu .menu-buttons .button:hover {\r\n  cursor: pointer;\r\n  background-color: #85aafa;\r\n}\r\n.menu .menu-buttons .button:active {\r\n  background-color: #4b70be;\r\n}\r\n.player-click-off {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: not-allowed;\r\n}\r\n',""]),n.exports=r},function(n,r,e){"use strict";n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e=function(n,r){var e=n[1]||"",t=n[3];if(!t)return e;if(r&&"function"==typeof btoa){var o=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(a).concat([o]).join("\n")}var i,c,l;return[e].join("\n")}(r,n);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(n,e,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&o[l[0]]||(e&&(l[2]?l[2]="".concat(e," and ").concat(l[2]):l[2]=e),r.push(l))}},r}},function(n,r,e){"use strict";e.r(r);e(0);var t=e.p+"img/490ed2b1b968f90c2d07b1aaee373bb9.svg",o=e.p+"img/f074a5759cae46047f8412fc3ff8b897.svg",a=e.p+"img/e9b85140ec619505eddc3d319224cabc.svg";const i=document.querySelector(".game-board"),c=document.querySelectorAll(".box"),l=document.querySelector(".player-info"),p=document.querySelector(".player-win-text"),s=document.querySelector(".checkbox"),u=document.querySelector(".ai"),d=document.querySelector(".cross"),f=document.querySelector(".circle"),b=document.querySelector(".menu"),x=document.querySelector(".restart-button"),y=document.querySelector(".data-clear-button"),g=document.querySelector(".data-menu-open-button"),m=document.querySelector(".player-click-off"),w=document.querySelector(".page-reload-button"),h=document.querySelector(".menu-open-button"),v=document.querySelector(".menu-close-button"),k=document.querySelector(".circleWin"),S=document.querySelector(".crossWin"),C=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];function q(){b.style.display="none",h.style.display="block"}h.addEventListener("click",(function(){b.style.display="block",h.style.display="none"})),v.addEventListener("click",q),x.addEventListener("click",(function(){l.style.display="none",p.textContent="",c.forEach(n=>{n.textContent="",n.removeAttribute("clicked")}),A()})),y.addEventListener("click",(function(){z=0,j=0,window.localStorage.setItem("crossWinInfo",j),window.localStorage.setItem("circleWinInfo",z),k.textContent=z,S.textContent=j,q()})),g.addEventListener("click",(function(){alert("This game from Artur Hovhannisyan")})),w.src=a,h.src=o,v.src=t;let I=!1,j=window.localStorage.getItem("crossWinInfo"),z=window.localStorage.getItem("circleWinInfo");function A(){null===j&&null===z&&(j=0,z=0,window.localStorage.setItem("crossWinInfo",j),window.localStorage.setItem("circleWinInfo",z)),k.textContent=z,S.textContent=j,d.style.backgroundColor="orange",f.style.backgroundColor="red",s.checked=!0,u.style.display="block",I=!1,i.addEventListener("click",L),w.addEventListener("click",_)}async function L(n,r){r=(n=event.target).hasAttribute("data-game-box"),u.style.display="none",r&&!n.hasAttribute("clicked")&&(n.textContent=O(),n.setAttribute("clicked",""),s.checked&&(m.style.display="block",W(),await M(800),function(){if(""!=p.textContent)return void(m.style.display="none");d.style.backgroundColor="orange";let n=!0;for(;n;){let r=Math.floor(Math.random()*c.length);c[r].hasAttribute("clicked")||(c[r].setAttribute("clicked",""),c[r].textContent=O(),n=!1)}m.style.display="none"}())),W()}function O(n){return I=!I,I?(d.style.backgroundColor="blue",f.style.backgroundColor="orange","X"):(f.style.backgroundColor="red",d.style.backgroundColor="orange","O")}function W(){if(""==p.textContent)for(let n=0;n<c.length;n++){if(E(c[n].textContent)&&""!=c[n].textContent)return i.removeEventListener("click",L),l.style.display="block",d.style.backgroundColor="blue",f.style.backgroundColor="red",P(c[n].textContent),p.textContent="win: "+c[n].textContent;if([...c].every(n=>n.hasAttribute("clicked")))return p.textContent="Draw",l.style.display="block"}}function E(n){return C.some(r=>r.every(r=>c[r].textContent==n))}function M(n){return new Promise(r=>setTimeout(r,n))}function P(n){"X"==n?(j++,window.localStorage.setItem("crossWinInfo",j)):"O"==n&&(z++,window.localStorage.setItem("circleWinInfo",z))}async function _(){await M(300),location.reload()}A()}]);