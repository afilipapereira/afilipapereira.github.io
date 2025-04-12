function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};o=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var i,r={},a={};i="object"==typeof n&&n&&n.Object===Object&&n;var s="object"==typeof self&&self&&self.Object===Object&&self,c=i||s||Function("return this")();r=function(){return a.Date.now()};var l={},d={},u={},p=/\s/;u=function(t){for(var e=t.length;e--&&p.test(t.charAt(e)););return e};var h=/^\s+/;d=function(t){return t?t.slice(0,u(t)+1).replace(h,""):t};var g,f={},v={};g=(a=c).Symbol;var m={},y=Object.prototype,w=y.hasOwnProperty,b=y.toString,j=g?g.toStringTag:void 0;m=function(t){var e=w.call(t,j),n=t[j];try{t[j]=void 0;var o=!0}catch(t){}var i=b.call(t);return o&&(e?t[j]=n:delete t[j]),i};var _={},S=Object.prototype.toString;_=function(t){return S.call(t)};var T=g?g.toStringTag:void 0;v=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":T&&T in Object(t)?m(t):_(t)};var E={};E=function(t){return null!=t&&"object"==typeof t};f=function(t){return"symbol"==typeof t||E(t)&&"[object Symbol]"==v(t)};var L=/^[-+]0x[0-9a-f]+$/i,x=/^0b[01]+$/i,R=/^0o[0-7]+$/i,k=parseInt;l=function(t){if("number"==typeof t)return t;if(f(t))return NaN;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=d(t);var n=x.test(t);return n||R.test(t)?k(t.slice(2),n?2:8):L.test(t)?NaN:+t};var q=Math.max,A=Math.min;e=function(t,e,n){var i,a,s,c,d,u,p=0,h=!1,g=!1,f=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=i,o=a;return i=a=void 0,p=e,c=t.apply(o,n)}function m(t){return p=t,d=setTimeout(w,e),h?v(t):c}function y(t){var n=t-u;return void 0===u||n>=e||n<0||g&&t-p>=s}function w(){var t=r();if(y(t))return b(t);d=setTimeout(w,function(t){var n=e-(t-u);return g?A(n,s-(t-p)):n}(t))}function b(t){return d=void 0,f&&i?v(t):(i=a=void 0,c)}function j(){var t=r(),n=y(t);if(i=arguments,a=this,u=t,n){if(void 0===d)return m(u);if(g)return clearTimeout(d),d=setTimeout(w,e),v(u)}return void 0===d&&(d=setTimeout(w,e)),c}return e=l(e)||0,o(n)&&(h=!!n.leading,s=(g="maxWait"in n)?q(l(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f),j.cancel=function(){void 0!==d&&clearTimeout(d),p=0,i=u=a=d=void 0},j.flush=function(){return void 0===d?c:b(r())},j};const B=[{match:["M","a","r","i","a","&nbsp;","A","d","e","l","a","i","d","e"],link:"https://mariaadelaide.com"},{match:["E","m","a","i","l"],link:"mailto:afilipaspereira@gmail.com"},{match:["G","i","t","H","u","b"],link:"https://github.com/afilipapereira"}];class C{_transformToSpans(){this.text.split("").forEach((t=>{if("\n"===t)this.newText+="<br>";else{const e=" "===t?" ":t;this.newText+="<span>"+e+"</span>"}})),this.el.innerHTML=this.newText}_checkForLinks(){let t=0,e=[];B.forEach((n=>{this.spanEls.forEach((o=>{if(o.innerHTML===n.match[t]){if(e.push(o),t++,t===n.match.length){const o=document.createElement("a");o.href=n.link,o.target="_blank";const i=e[0];i.parentNode.insertBefore(o,i),e.forEach((t=>o.appendChild(t))),t=0,e=[]}}else t=0,e=[]}))}))}_addFadeInAnimation(){this.spanEls.forEach(((t,e)=>{const n=.01*e+.5;t.style.transition=`transform 0.5s ease-in, opacity 0.5s ease-in ${n}s`,setTimeout((()=>t.style.opacity=1),100)}))}addHoverInteration(){this.spanEls.forEach(((t,e)=>{let n;setTimeout((()=>{this.el.classList.add("about__content--ready"),t.addEventListener("mouseenter",(()=>{const e=30*Math.random()-10,o=30*Math.random()-10,i=2.5*Math.random()-2.5;t.style.transitionDuration="0.5s",t.style.transform=`translate(${e}px, ${o}px) rotate(${i}deg)`,n=setTimeout((()=>t.style.transform="translate(0,0) rotate(0deg)"),1e3)})),t.addEventListener("mouseleave",(()=>{clearTimeout(n),t.style.transitionDuration="0.75s",setTimeout((()=>t.style.transform="translate(0,0) rotate(0deg)"),450)}))}),3e3)}))}addShakeInteraction(){let t=0;let e;window.addEventListener("devicemotion",(n=>{const o=n.accelerationIncludingGravity;if(!o)return;if(this.shakeForce=Math.sqrt(Math.pow(o.x,2)+Math.pow(o.y,2)+Math.pow(o.z,2)),this.shakeForce>11.5){let n=Date.now();n-t>750&&(clearTimeout(e),this._moveSpansAllOverThePlace(),e=setTimeout((()=>this._moveSpansBackToPlace()),1500),t=n)}}))}_moveSpansBackToPlace(){this.spanEls.forEach(((t,e)=>{t.style.transitionDuration="0.75s",t.style.transform="translate(0px, 0px) rotate(0deg)"}))}_moveSpansAllOverThePlace(){this.isAnimating||(this.isAnimating=!0,this.changePosRelatedToShakeForce=this._mapRangeExponential(this.shakeForce,0,18,0,1),this.spanEls.forEach(((t,e)=>{let n=-1*t.getBoundingClientRect().left,o=window.innerWidth-t.getBoundingClientRect().left-t.getBoundingClientRect().width/3;e<30&&(n=-1*t.getBoundingClientRect().left/2,o=window.innerWidth-t.getBoundingClientRect().left-t.getBoundingClientRect().width),e>=30&&e<100&&(n=-1*t.getBoundingClientRect().left/3,o=(window.innerWidth-t.getBoundingClientRect().left-t.getBoundingClientRect().width)/2);const i=-1*t.getBoundingClientRect().top;let r=window.innerHeight/3-(window.scrollY+t.getBoundingClientRect().top)-t.getBoundingClientRect().height;e<30&&(r=window.innerHeight-(window.scrollY+t.getBoundingClientRect().top)-t.getBoundingClientRect().height),e>=30&&e<100&&(r=window.innerHeight/2-(window.scrollY+t.getBoundingClientRect().top)-t.getBoundingClientRect().height);const a=(Math.random()*(o-n)+n)*this.changePosRelatedToShakeForce,s=(Math.random()*(r-i)+i)*this.changePosRelatedToShakeForce,c=10*Math.random()-10;t.style.transitionDuration="0.75s",t.style.transform=`translate(${a}px, ${s}px) rotate(${c}deg)`})),setTimeout((()=>this.isAnimating=!1),750))}_mapRange(t,e,n,o,i){if(t<e||t>n)return console.warn("Value is out of the expected range:",t),t;return o+(t-e)/(n-e)*(i-o)}_mapRangeExponential(t,e,n,o,i,r=5,a=1,s=.1){if(t>n)return 1;if(t<e)return 0;let c=(t-e)/(n-e),l=o+Math.pow(c,r)*(i-o);return t<=14&&(l*=s),l}constructor(t){this.el=t,this.text=t.getAttribute("data-about-text"),this.newText="",this.spanEls=void 0,this.isAnimating=!1,this.shakeForce=0,this._transformToSpans(),this.spanEls=t.querySelectorAll("span"),this._checkForLinks(),this._addFadeInAnimation()}}var M;window.onbeforeunload=function(){window.scrollTo(0,0)},M=()=>{const n=document.querySelector("[data-about-paragraph-desktop]");n&&new C(n).addHoverInteration();const o=document.querySelector("[data-about-paragraph-tablet]");o&&new C(o).addShakeInteraction();const i=document.querySelector("[data-about-paragraph-mobile]");i&&new C(i).addShakeInteraction(),document.addEventListener("mousemove",(t=>{const e=t.pageY,n=document.querySelector(".project--heading").getBoundingClientRect().height,o=e-window.scrollY-n/2;o>document.querySelector(".projects").getBoundingClientRect().top&&e-n/2-window.scrollY>n&&o<window.innerHeight-n&&(document.querySelector(".projects__hovered-proj").style.top=o+"px",document.querySelector(".project--heading").style.top=o+"px")}));const r=t(e)((t=>{const e=t.querySelector(".project__column-img video");if(e){const t=e.getAttribute("data-video-id");document.querySelector('[data-video-bg="'+t+'"]').classList.add("project-bg__video--active")}}),200);document.querySelectorAll(".projects__group .project a").forEach((t=>t.addEventListener("click",(t=>t.stopPropagation()))));const a=Math.log(5)/document.querySelectorAll(".projects__group .project:not(.project--year)").length;let s=1;const c=new IntersectionObserver((t=>{t.forEach((t=>{const e=t.target.querySelector(".project__column-img video");t.isIntersecting?(t.target.classList.add("in-viewport"),t.target.classList.contains("project--active")&&"true"===e.getAttribute("data-is-video-hq")&&e.play()):(t.target.classList.remove("in-viewport"),t.target.classList.contains("project--active")&&"true"===e.getAttribute("data-is-video-hq")&&e.pause())}))}),{rootMargin:"10%",threshold:.1});document.querySelectorAll(".projects__group .project:not(.project--year)").forEach(((t,e)=>{s+=.15*Math.exp(-a*e),t.style.animationDelay=`${s}s`,t.addEventListener("mouseenter",(()=>{r.cancel(),r(t)})),t.addEventListener("mouseleave",(()=>{r.cancel();const e=t.querySelector(".project__column-img video");if(e){const t=e.getAttribute("data-video-id");document.querySelector('[data-video-bg="'+t+'"]').classList.remove("project-bg__video--active")}})),t.addEventListener("click",(()=>{const e=t.querySelector(".project__column-img video"),n=t.classList.contains("project--active");if(e){const n=e.getAttribute("data-video-src");"true"!==e.getAttribute("data-is-video-hq")&&(e.insertAdjacentHTML("afterbegin",`<source src="https://pub-c336f26f70c841309ac8d8ab67e766f8.r2.dev/${n}" type="video/mp4">`),e.setAttribute("data-is-video-hq","true"),e.addEventListener("canplay",(()=>{t.classList.add("project--video-loaded"),e.play()})))}n?(t.classList.remove("project--active"),document.querySelector(".projects__hovered-proj").classList.remove("projects__hovered-proj--active"),e.pause()):(t.classList.add("project--active"),document.querySelector(".projects__hovered-proj").classList.add("projects__hovered-proj--active"),e.play(),setTimeout((()=>{t.getBoundingClientRect().top;parseFloat(getComputedStyle(t).fontSize);window.innerWidth}),1e3))})),c.observe(t)}))},"loading"!==document.readyState?M():document.addEventListener("DOMContentLoaded",M);
//# sourceMappingURL=index.6c608de0.js.map
