(function(){
"use strict";
var tip=document.createElement("div");
tip.style.cssText="position:fixed;z-index:999999;display:none;pointer-events:none;background:rgba(255,255,255,.97);border:1px solid #aaa;border-radius:3px;padding:6px 8px;box-shadow:0 2px 8px rgba(0,0,0,.15);font:12px Arial;color:#222";
document.body.appendChild(tip);
document.addEventListener("pointermove",function(e){var p=e.target.closest("[data-snapshot-tip]");if(!p){tip.style.display="none";return;}tip.textContent=p.getAttribute("data-snapshot-tip");tip.style.left=Math.min(e.clientX+12,window.innerWidth-300)+"px";tip.style.top=Math.min(e.clientY+12,window.innerHeight-60)+"px";tip.style.display="block";});
document.addEventListener("click",function(e){var item=e.target.closest("[data-snapshot-legend]");if(!item)return;var chart=item.closest(".highcharts-container");if(!chart)return;var i=item.getAttribute("data-snapshot-legend");var hidden=item.getAttribute("data-hidden")==="1";chart.querySelectorAll('[data-snapshot-series="'+i+'"]').forEach(function(x){x.style.display=hidden?"":"none";});item.setAttribute("data-hidden",hidden?"0":"1");item.style.opacity=hidden?"1":".35";});
})();