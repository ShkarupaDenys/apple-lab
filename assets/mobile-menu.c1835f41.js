import{G as _}from"./vendor.4fe26b01.js";const b=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}};b();const d=document.querySelector(".header"),h=document.querySelectorAll(".navigation__item"),A=()=>{window.scrollY>40?d.classList.add("header--fixed"):d.classList.remove("header--fixed")};addEventListener("scroll",A);h.forEach(e=>e.addEventListener("mouseover",()=>{[...h].find(c=>c.classList.contains("active")).classList.remove("active"),e.classList.add("active")}));const r=document.querySelectorAll(".models__btn"),k=document.querySelectorAll(".models__content");r.length&&(r[0].classList.toggle("selected",!0),k[0].classList.toggle("hidden",!1),r.forEach(e=>{e.addEventListener("click",t=>{r.forEach(s=>{s.classList.remove("selected")}),t.target.classList.toggle("selected",!0);const c=t.target.dataset.tabContentId,i=document.getElementById(c);Array.from(i.parentNode.children).forEach(s=>{s.classList.toggle("hidden",!0)}),i.classList.toggle("hidden",!1)})}));const n=document.querySelectorAll(".malfunction__btn"),I=document.querySelectorAll(".malfunction__content");n.length&&(n[0].classList.toggle("selected",!0),I[0].classList.toggle("hidden",!1),n.forEach(e=>{e.addEventListener("click",t=>{n.forEach(s=>{s.classList.remove("selected")}),t.target.classList.toggle("selected",!0);const c=t.target.dataset.tabContentId,i=document.getElementById(c);Array.from(i.parentNode.children).forEach(s=>{s.classList.toggle("hidden",!0)}),i.classList.toggle("hidden",!1)})}));const l=document.querySelector(".article__button"),u=document.querySelector(".article__wrap");l.addEventListener("click",()=>{if(u.classList.toggle("article__wrap--hidden"),u.classList.contains("article__wrap--hidden")){l.innerText="\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435";return}l.innerText="\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"});const g=document.querySelector(".hero-screen__carousel"),$=new _(".team__carousel",{type:"carousel",startAt:0,perView:4,gap:20,breakpoints:{1024:{perView:3},768:{perView:2}}});$.mount();const x=new _(g,{type:"carousel",startAt:0,perView:1,gap:40,breakpoints:{}});g&&x.mount();const B=document.querySelector(".locations__accordion"),L=document.querySelectorAll(".locations__accordion .accordion__item");L.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const H=(e,t)=>{T(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),e.parentElement.classList.add("active"),t.classList.add("active")},v=(e,t)=>{e.classList.remove("active"),e.parentElement.classList.remove("active"),t.classList.remove("active"),t.style.height=""},T=(e,t)=>{L.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&v(c.children[0],c.children[1])})};B.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?v(t,s):H(c,s)}});const m=document.querySelector(".faq__accordion"),y=document.querySelectorAll(".faq__accordion .accordion__item");y.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const N=(e,t)=>{C(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),t.classList.add("active")},p=(e,t)=>{e.classList.remove("active"),t.classList.remove("active"),t.style.height=""},C=(e,t)=>{y.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&p(c.children[0],c.children[1])})};m&&m.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?p(t,s):N(c,s)}});const f=document.querySelector(".price__accordion"),E=document.querySelectorAll(".price__accordion .accordion__item");E.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const O=(e,t)=>{V(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),e.parentElement.classList.add("active"),t.classList.add("active")},q=(e,t)=>{e.classList.remove("active"),e.parentElement.classList.remove("active"),t.classList.remove("active"),t.style.height=""},V=(e,t)=>{E.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&q(c.children[0],c.children[1])})};f&&f.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?q(t,s):O(c,s)}});const G=document.querySelectorAll(".mobile-menu__category"),S=document.querySelector(".mobile-menu"),M=document.querySelector(".mobile-menu__background");G.forEach(e=>e.addEventListener("click",()=>{const t=document.getElementById(e.dataset.mobileMenu),c=t.querySelector(".mobile-menu__model-btn");t.classList.add("active"),c.addEventListener("click",()=>{t.classList.remove("active")})}));const w=document.querySelector(".burger-menu");w.addEventListener("click",()=>{S.classList.add("active"),document.body.classList.add("overflow")});M.addEventListener("click",()=>{S.classList.remove("active"),document.body.classList.remove("overflow");const e=document.querySelector(".mobile-menu__model.active");e&&e.classList.remove("active")});
