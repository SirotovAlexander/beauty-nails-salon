import{b as d,a as m}from"./assets/vendor-efc5e510.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const u=document.querySelector(".header__button");u.addEventListener("click",g);const s=d.create(`
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
`,{onShow:i=>{window.addEventListener("keydown",l)},onClose:i=>{window.removeEventListener("keydown",l)}});function g(i){s.show(),document.querySelector(".basicLightbox").addEventListener("click",()=>s.close())}function l(i){i.code==="Escape"&&s.close()}const n=document.querySelector(".callback__form");console.dir(n);const p="6755016444:AAE9QL601cMD22Yv8nzXsELemNX_mJQKASQ",f="",h=`https://api.telegram.org/bot${p}/sendMessage`;n.addEventListener("submit",x);function x(i){i.preventDefault();let o=`<b>Контактна інформація з сайту</b> 
`;o+=`<b>${n.tell.value}</b>`,m.post(h,{chat_id:f,parse_mode:"html",text:o}),console.log(o),n.tell.value=""}
//# sourceMappingURL=commonHelpers.js.map
