(()=>{"use strict";var t;const e=(e,r)=>{r&&t&&clearInterval(t);const i=JSON.parse(e?.getAttribute("data-countdown")),o=i.dueDate,n=i.style,s=new Date(o).getTime(),c=6048e5,l=864e5,u=36e5,a=6e4,g=(t,r,i=!0)=>{0===t&&i&&(e.querySelector(r).classList.add("gkit-flip"),".gkit-minutes"===r&&setTimeout((()=>{e.querySelector(r).classList.remove("gkit-flip")}),800)),i||(e.querySelector(r).classList.add("gkit-flip"),setTimeout((()=>{e.querySelector(r).classList.remove("gkit-flip")}),800))},k=(t,r)=>{const i=e.querySelector(`${r} .gkit-next.gkit-top`),o=e.querySelector(`${r} .gkit-next.gkit-bottom`),n=e.querySelector(`${r} .gkit-curr.gkit-top`),s=e.querySelector(`${r} .gkit-curr.gkit-bottom`);i.innerHTML=t,o.innerHTML=t,setTimeout((()=>{n.innerHTML=t,s.innerHTML=t}),250)};t="style3"===n?setInterval((function(){const e=(new Date).getTime(),r=s-e;if(r<0)return void clearInterval(t);const i=Math.floor(r/c),o=Math.floor(r%c/l),n=Math.floor(r%l/u),d=Math.floor(r%u/a),m=Math.floor(r%a/1e3);k(i,".gkit-weeks"),k(o,".gkit-days"),k(n,".gkit-hours"),k(d,".gkit-minutes"),k(m,".gkit-seconds"),g(m,".gkit-minutes"),g(d,".gkit-hours"),g(n,".gkit-days"),g(o,".gkit-weeks"),g(m,".gkit-seconds",!1)}),1e3):setInterval((function(){const r=(new Date).getTime(),i=s-r;if(i<0)return void clearInterval(t);const o=Math.floor(i/l),n=Math.floor(i%l/u),c=Math.floor(i%u/a),g=Math.floor(i%a/1e3);e.querySelector(".gkit-days .gkit-timer-count").innerHTML=o,e.querySelector(".gkit-hours .gkit-timer-count").innerHTML=n,e.querySelector(".gkit-minutes .gkit-timer-count").innerHTML=c,e.querySelector(".gkit-seconds .gkit-timer-count").innerHTML=g}),1e3)};window.addEventListener("load",(()=>{document.querySelectorAll(".gkit-countdown").forEach((t=>{e(t,!1)}))}))})();