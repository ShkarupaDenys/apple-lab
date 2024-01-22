import{G as d}from"./vendor.4fe26b01.js";const V=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function c(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=c(s);fetch(s.href,i)}};V();const u=document.querySelector(".header"),h=document.querySelectorAll(".navigation__item"),C=()=>{window.scrollY>40?u.classList.add("header--fixed"):u.classList.remove("header--fixed")};addEventListener("scroll",C);h.forEach(e=>e.addEventListener("mouseover",()=>{[...h].find(c=>c.classList.contains("active")).classList.remove("active"),e.classList.add("active")}));const a=document.querySelectorAll(".models__btn"),O=document.querySelectorAll(".models__content");a.length&&(a[0].classList.toggle("selected",!0),O[0].classList.toggle("hidden",!1),a.forEach(e=>{e.addEventListener("click",t=>{a.forEach(s=>{s.classList.remove("selected")}),t.target.classList.toggle("selected",!0);const c=t.target.dataset.tabContentId,o=document.getElementById(c);Array.from(o.parentNode.children).forEach(s=>{s.classList.toggle("hidden",!0)}),o.classList.toggle("hidden",!1)})}));const r=document.querySelectorAll(".malfunction__btn"),R=document.querySelectorAll(".malfunction__content");r.length&&(r[0].classList.toggle("selected",!0),R[0].classList.toggle("hidden",!1),r.forEach(e=>{e.addEventListener("click",t=>{r.forEach(s=>{s.classList.remove("selected")}),t.target.classList.toggle("selected",!0);const c=t.target.dataset.tabContentId,o=document.getElementById(c);Array.from(o.parentNode.children).forEach(s=>{s.classList.toggle("hidden",!0)}),o.classList.toggle("hidden",!1)})}));const n=document.querySelector(".article__button"),m=document.querySelector(".article__wrap");n&&n.addEventListener("click",()=>{if(m.classList.toggle("article__wrap--hidden"),m.classList.contains("article__wrap--hidden")){n.innerText="\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435";return}n.innerText="\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"});const S=document.querySelector(".hero-screen__carousel"),b=document.querySelector(".contacts-general__carousel"),A=document.querySelector(".team__carousel"),F=new d(A,{type:"carousel",startAt:0,perView:4,gap:20,breakpoints:{1024:{perView:3},768:{perView:2}}});A&&F.mount();const K=new d(S,{type:"carousel",startAt:0,perView:1,gap:40,breakpoints:{}});S&&K.mount();const Y=new d(b,{type:"carousel",startAt:0,perView:1,gap:40});b&&Y.mount();const j=document.querySelector(".locations__accordion"),k=document.querySelectorAll(".locations__accordion .accordion__item");k.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const w=(e,t)=>{z(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),e.parentElement.classList.add("active"),t.classList.add("active")},$=(e,t)=>{e.classList.remove("active"),e.parentElement.classList.remove("active"),t.classList.remove("active"),t.style.height=""},z=(e,t)=>{k.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&$(c.children[0],c.children[1])})};j.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?$(t,s):w(c,s)}});const L=document.querySelector(".faq__accordion"),B=document.querySelectorAll(".faq__accordion .accordion__item");B.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const J=(e,t)=>{Q(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),t.classList.add("active")},I=(e,t)=>{e.classList.remove("active"),t.classList.remove("active"),t.style.height=""},Q=(e,t)=>{B.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&I(c.children[0],c.children[1])})};L&&L.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?I(t,s):J(c,s)}});const _=document.querySelector(".price__accordion"),x=document.querySelectorAll(".price__accordion .accordion__item");x.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const U=(e,t)=>{W(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),e.parentElement.classList.add("active"),t.classList.add("active")},H=(e,t)=>{e.classList.remove("active"),e.parentElement.classList.remove("active"),t.classList.remove("active"),t.style.height=""},W=(e,t)=>{x.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&H(c.children[0],c.children[1])})};_&&_.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?H(t,s):U(c,s)}});const f=document.querySelector(".contacts-general__accordion"),M=document.querySelectorAll(".contacts-general__accordion .accordion__item");M.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const X=(e,t)=>{Z(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),e.parentElement.classList.add("active"),t.classList.add("active")},G=(e,t)=>{e.classList.remove("active"),e.parentElement.classList.remove("active"),t.classList.remove("active"),t.style.height=""},Z=(e,t)=>{M.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&G(c.children[0],c.children[1])})};f&&f.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?G(t,s):X(c,s)}});const D=document.querySelectorAll(".mobile-menu__category-btn"),P=document.querySelector(".mobile-menu"),ee=document.querySelector(".mobile-menu__background");D.forEach(e=>e.addEventListener("click",()=>{const t=document.getElementById(e.dataset.mobileMenu),c=t.querySelector(".mobile-menu__model-btn");t.classList.add("active"),c.addEventListener("click",()=>{t.classList.remove("active")})}));const te=document.querySelector(".burger-menu");te.addEventListener("click",()=>{P.classList.add("active"),document.body.classList.add("overflow")});ee.addEventListener("click",()=>{P.classList.remove("active"),document.body.classList.remove("overflow");const e=document.querySelector(".mobile-menu__model.active");e&&e.classList.remove("active")});const T=document.querySelector(".modal.modal-repair"),v=document.querySelectorAll("#button-repair"),ce=document.querySelector(".modal-repair .modal__bg"),g=document.querySelector("#close-modal-repair"),y=()=>T.classList.remove("open");v.length&&v.forEach(e=>{e.addEventListener("click",()=>{T.classList.add("open")})});g&&(g.addEventListener("click",y),ce.addEventListener("click",y));const N=document.querySelector(".modal.modal-ipad-model"),p=document.querySelector("#button-ipad-model"),se=document.querySelector(".modal-ipad-model .modal__bg"),E=document.querySelector("#close-modal-ipad-model"),q=()=>N.classList.remove("open");p&&p.addEventListener("click",()=>{N.classList.add("open")});E&&(E.addEventListener("click",q),se.addEventListener("click",q));
