import{b as d,a as m}from"./assets/vendor-efc5e510.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p=document.querySelector(".header__button");p.addEventListener("click",u);const c=d.create(`
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
`,{onShow:o=>{window.addEventListener("keydown",a)},onClose:o=>{window.removeEventListener("keydown",a)}});function u(o){c.show(),document.querySelector(".basicLightbox").addEventListener("click",()=>c.close())}function a(o){o.code==="Escape"&&c.close()}const r=document.querySelector(".callback__form"),g="",h="",f=`https://api.telegram.org/bot${g}/sendMessage`;r.addEventListener("submit",x);function x(o){o.preventDefault();let n=`<b>Контактна інформація з сайту</b> 
`;if(r.phone.value==="")return alert("Введіть коректний номер");n+=`<b>${r.phone.value}</b>`,m.post(f,{chat_id:h,parse_mode:"html",text:n}).then(i=>{alert("Наш менеджер зателефонує Вам! Гарного дня"),r.phone.value=""}).catch(i=>console.warn(i.massege))}
//# sourceMappingURL=commonHelpers.js.map
