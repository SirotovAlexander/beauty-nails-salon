import{b as d}from"./assets/vendor-d8571883.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const a=document.querySelector(".header__button");a.addEventListener("click",m);const r=d.create(`
<div
  style="
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0 50px 0 50px;
  "
>
  <img src="./img/ex2.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex3.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex4.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex5.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex6.jpg" width="300" height="400" alt="example" />
  <img src="./img/ex7.jpg" width="300" height="400" alt="example" />
</div>
`,{onShow:i=>{window.addEventListener("keydown",c)},onClose:i=>{window.removeEventListener("keydown",c)}});function m(i){r.show(),document.querySelector(".basicLightbox").addEventListener("click",()=>r.close())}function c(i){i.code==="Escape"&&r.close()}
//# sourceMappingURL=commonHelpers.js.map