!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=4)}([function(n,e,r){var t=r(1),o=r(2);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var a={insert:"head",singleton:!1};t(o,a);n.exports=o.locals||{}},function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},a=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),i=[];function c(n){for(var e=-1,r=0;r<i.length;r++)if(i[r].identifier===n){e=r;break}return e}function l(n,e){for(var r={},t=[],o=0;o<n.length;o++){var a=n[o],l=e.base?a[0]+e.base:a[0],s=r[l]||0,u="".concat(l," ").concat(s);r[l]=s+1;var p=c(u),d={css:a[1],media:a[2],sourceMap:a[3]};-1!==p?(i[p].references++,i[p].updater(d)):i.push({identifier:u,updater:m(d,e),references:1}),t.push(u)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var u,p=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function d(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=p(e,o);else{var a=document.createTextNode(o),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function f(n,e,r){var t=r.css,o=r.media,a=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var b=null,x=0;function m(n,e){var r,t,o;if(e.singleton){var a=x++;r=b||(b=s(e)),t=d.bind(null,r,a,!1),o=d.bind(null,r,a,!0)}else r=s(e),t=f.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=l(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=c(r[t]);i[o].references--}for(var a=l(n,e),s=0;s<r.length;s++){var u=c(r[s]);0===i[u].references&&(i[u].updater(),i.splice(u,1))}r=a}}}},function(n,e,r){(e=r(3)(!1)).push([n.i,'* {\r\n  font-family: sans-serif, Arial;\r\n  box-sizing: border-box;\r\n  user-select: none;\r\n}\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  position: relative;\r\n  width: 100%;\r\n  height: 100vh;\r\n}\r\n.wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 0 auto;\r\n  width: 320px;\r\n}\r\n.wrapper .navigation-buttons {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n.wrapper .navigation-buttons .page-reload-button,\r\n.wrapper .navigation-buttons .menu-open-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 5px;\r\n  transition: transform linear 0.1s;\r\n}\r\n.wrapper .navigation-buttons .menu-open-button:active {\r\n  transform: scale(1.05);\r\n}\r\n.wrapper .navigation-buttons .page-reload-button:active {\r\n  transform: scale(1.1);\r\n  transform: rotate(-45deg);\r\n}\r\n.wrapper .title {\r\n  text-align: center;\r\n  font-size: 40px;\r\n  text-shadow: #333 1px 2px 3px;\r\n  margin: 5px;\r\n}\r\n.wrapper .player {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 0 10px 20px 10px;\r\n  width: 100%;\r\n}\r\n.wrapper .player .win-counter {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  width: 74%;\r\n  margin: 0 auto;\r\n  font-size: 24px;\r\n  text-shadow: #333 1px 1px 3px;\r\n}\r\n.wrapper .player .player-step {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-top: 5px;\r\n}\r\n.wrapper .player .player-step .cross,\r\n.wrapper .player .player-step .circle {\r\n  padding: 2px 38px;\r\n  border-radius: 5px;\r\n  font-size: 22px;\r\n  color: #fff;\r\n  transition: background-color linear 0.15s;\r\n  box-shadow: #333 1px 2px 3px;\r\n}\r\n.wrapper .player .player-step .ai {\r\n  font-size: 19px;\r\n  font-weight: bold;\r\n}\r\n.wrapper .player .player-step .ai input[type="checkbox"] {\r\n  transform: scale(1.3);\r\n}\r\n.wrapper .game-board {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n.wrapper .game-board .box {\r\n  width: 80px;\r\n  height: 80px;\r\n  padding: 5px;\r\n  margin: 5px;\r\n  border: 2px solid #333;\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  font-size: 60px;\r\n  transition: box-shadow linear 0.12s, background-color linear 0.12s, transform linear 0.1s;\r\n}\r\n.wrapper .game-board .box:hover {\r\n  cursor: pointer;\r\n  background-color: rgba(33, 33, 33, 0.1);\r\n  box-shadow: #000 0px 0px 2px;\r\n}\r\n.wrapper .game-board .box:active {\r\n  transform: scale(1.03);\r\n}\r\n.wrapper .game-board .box:focus {\r\n  outline: none;\r\n}\r\n.player-info {\r\n  display: none;\r\n  z-index: 1;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.7);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.player-info .wrapper-center {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n.player-info .wrapper-center .player-win-text {\r\n  display: block;\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 45px;\r\n  text-shadow: #000 1px 1px 5px;\r\n  margin-bottom: 50px;\r\n}\r\n.player-info .wrapper-center .restart-button {\r\n  padding: 8px 50px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: #ffffff;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  box-shadow: #000 1px 1px 3px;\r\n  transition: background-color linear 0.15s;\r\n}\r\n.player-info .wrapper-center .restart-button:hover {\r\n  cursor: pointer;\r\n  background-color: #85aafa;\r\n}\r\n.player-info .wrapper-center .restart-button:active {\r\n  background-color: #4b70be;\r\n}\r\n.menu {\r\n  display: none;\r\n  z-index: 2;\r\n  top: 0;\r\n  left: 0;\r\n  position: fixed;\r\n  background-color: rgba(0, 0, 0, 0.8);\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.menu .menu-navigation {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n}\r\n.menu .menu-navigation .menu-close-button {\r\n  width: 50px;\r\n  height: 50px;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  transition: transform linear 0.1s;\r\n}\r\n.menu .menu-buttons {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-align: center;\r\n}\r\n.menu .menu-buttons .button {\r\n  padding: 10px 26px;\r\n  margin-bottom: 15px;\r\n  max-width: 150px;\r\n  min-width: 150px;\r\n  border-radius: 5px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: #ffffff;\r\n  font-size: 20px;\r\n  font-weight: bold;\r\n  box-shadow: #000 1px 1px 3px;\r\n  transition: background-color linear 0.15s;\r\n}\r\n.menu .menu-buttons .button:hover {\r\n  cursor: pointer;\r\n  background-color: #85aafa;\r\n}\r\n.menu .menu-buttons .button:active {\r\n  background-color: #4b70be;\r\n}\r\n.player-click-off {\r\n  display: none;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  width: 100%;\r\n  height: 100%;\r\n  cursor: not-allowed;\r\n}\r\n',""]),n.exports=e},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(i=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(l," */")),a=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(a).concat([o]).join("\n")}var i,c,l;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);t&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),e.push(l))}},e}},function(n,e,r){"use strict";r.r(e);r(0);var t=r.p+"img/490ed2b1b968f90c2d07b1aaee373bb9.svg",o=r.p+"img/f074a5759cae46047f8412fc3ff8b897.svg",a=r.p+"img/e9b85140ec619505eddc3d319224cabc.svg";const i=document.querySelector(".game-board"),c=document.querySelectorAll(".box"),l=document.querySelector(".player-info"),s=document.querySelector(".player-win-text"),u=document.querySelector(".checkbox"),p=document.querySelector(".ai"),d=document.querySelector(".cross"),f=document.querySelector(".circle"),b=document.querySelector(".menu"),x=document.querySelector(".restart-button"),m=document.querySelector(".data-clear-button"),g=document.querySelector(".data-menu-open-button"),y=document.querySelector(".player-click-off"),h=document.querySelector(".page-reload-button"),v=document.querySelector(".menu-open-button"),w=document.querySelector(".menu-close-button"),k=document.querySelector(".circleWin"),S=document.querySelector(".crossWin"),C=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[6,4,2]];let j=!1,q=parseInt(window.localStorage.getItem("crossWinInfo"))||0,I=parseInt(window.localStorage.getItem("circleWinInfo"))||0;u.checked=JSON.parse(window.localStorage.getItem("aiCheckBoxInfo"))||!0;const O=n=>{b.style.display=n?"block":"none",v.style.display=n?"none":"block"},A=()=>{window.localStorage.setItem("crossWinInfo",q),window.localStorage.setItem("circleWinInfo",I),window.localStorage.setItem("aiCheckBoxInfo",u.checked)},M=()=>{k.textContent=I,S.textContent=q},E=()=>(j=!j,d.style.backgroundColor=j?"blue":"orange",f.style.backgroundColor=j?"orange":"red",j?"X":"O"),L=(n,e)=>{const r=n.filter(n=>c[n].textContent===e),t=n.filter(n=>!c[n].hasAttribute("clicked"));return 2===r.length&&1===t.length?t[0]:null},z=()=>{for(const n of C){const[e,r,t]=n;if(c[e].textContent&&c[e].textContent===c[r].textContent&&c[e].textContent===c[t].textContent)return c[e].textContent}return[...c].every(n=>n.hasAttribute("clicked"))?"Draw":null},T=()=>{for(const n of C){const e=L(n,"O")||L(n,"X");if(null!==e)return c[e].textContent="O",c[e].setAttribute("clicked",""),void E()}(n=>{const e=[...c].filter(n=>!n.hasAttribute("clicked")),r=e[Math.floor(Math.random()*e.length)];r.textContent=n,r.setAttribute("clicked","")})("O"),E()},N=n=>{p.style.display="none";const e=n.target;if(e.hasAttribute("data-game-box")&&!e.hasAttribute("clicked")){e.textContent=E(),e.setAttribute("clicked","");const n=z();if(n)return _(n);u.checked&&(y.style.display="block",setTimeout(()=>{T(),y.style.display="none";const n=z();n&&_(n)},800))}},_=n=>{l.style.display="block",s.textContent="Draw"===n?"Draw":"Win: "+n,"X"===n&&q++,"O"===n&&I++,M(),A(),i.removeEventListener("click",N)},W=()=>{j=!1,h.src=a,v.src=o,w.src=t,k.textContent=I,S.textContent=q,d.style.backgroundColor="orange",f.style.backgroundColor="red",p.style.display="block",b.style.display="none",l.style.display="none",c.forEach(n=>{n.textContent="",n.removeAttribute("clicked")}),s.textContent="",M(),i.addEventListener("click",N)};v.addEventListener("click",()=>O(!0)),w.addEventListener("click",()=>O(!1)),x.addEventListener("click",W),m.addEventListener("click",()=>{q=0,I=0,M(),A()}),u.addEventListener("change",A),g.addEventListener("click",()=>alert("This game is created by Artur Hovhannisyan")),W()}]);