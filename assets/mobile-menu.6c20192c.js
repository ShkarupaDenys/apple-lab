import{G as d}from"./vendor.4fe26b01.js";const x=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function c(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=c(s);fetch(s.href,o)}};x();const h=document.querySelector(".header"),u=document.querySelectorAll(".navigation__item"),H=()=>{window.scrollY>40?h.classList.add("header--fixed"):h.classList.remove("header--fixed")};addEventListener("scroll",H);u.forEach(e=>e.addEventListener("mouseover",()=>{[...u].find(c=>c.classList.contains("active")).classList.remove("active"),e.classList.add("active")}));const r=document.querySelectorAll(".models__btn"),B=document.querySelectorAll(".models__content");r.length&&(r[0].classList.toggle("selected",!0),B[0].classList.toggle("hidden",!1),r.forEach(e=>{e.addEventListener("click",t=>{r.forEach(s=>{s.classList.remove("selected")}),t.target.classList.toggle("selected",!0);const c=t.target.dataset.tabContentId,i=document.getElementById(c);Array.from(i.parentNode.children).forEach(s=>{s.classList.toggle("hidden",!0)}),i.classList.toggle("hidden",!1)})}));const a=document.querySelectorAll(".malfunction__btn"),G=document.querySelectorAll(".malfunction__content");a.length&&(a[0].classList.toggle("selected",!0),G[0].classList.toggle("hidden",!1),a.forEach(e=>{e.addEventListener("click",t=>{a.forEach(s=>{s.classList.remove("selected")}),t.target.classList.toggle("selected",!0);const c=t.target.dataset.tabContentId,i=document.getElementById(c);Array.from(i.parentNode.children).forEach(s=>{s.classList.toggle("hidden",!0)}),i.classList.toggle("hidden",!1)})}));const n=document.querySelector(".article__button"),m=document.querySelector(".article__wrap");n&&n.addEventListener("click",()=>{if(m.classList.toggle("article__wrap--hidden"),m.classList.contains("article__wrap--hidden")){n.innerText="\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435";return}n.innerText="\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"});const L=document.querySelector(".hero-screen__carousel"),v=document.querySelector(".contacts-general__carousel"),y=document.querySelector(".team__carousel"),T=new d(y,{type:"carousel",startAt:0,perView:4,gap:20,breakpoints:{1024:{perView:3},768:{perView:2}}});y&&T.mount();const N=new d(L,{type:"carousel",startAt:0,perView:1,gap:40,breakpoints:{}});L&&N.mount();const V=new d(v,{type:"carousel",startAt:0,perView:1,gap:40});v&&V.mount();const C=document.querySelector(".locations__accordion"),p=document.querySelectorAll(".locations__accordion .accordion__item");p.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const O=(e,t)=>{M(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),e.parentElement.classList.add("active"),t.classList.add("active")},E=(e,t)=>{e.classList.remove("active"),e.parentElement.classList.remove("active"),t.classList.remove("active"),t.style.height=""},M=(e,t)=>{p.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&E(c.children[0],c.children[1])})};C.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?E(t,s):O(c,s)}});const _=document.querySelector(".faq__accordion"),q=document.querySelectorAll(".faq__accordion .accordion__item");q.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const P=(e,t)=>{F(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),t.classList.add("active")},S=(e,t)=>{e.classList.remove("active"),t.classList.remove("active"),t.style.height=""},F=(e,t)=>{q.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&S(c.children[0],c.children[1])})};_&&_.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?S(t,s):P(c,s)}});const f=document.querySelector(".price__accordion"),b=document.querySelectorAll(".price__accordion .accordion__item");b.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const K=(e,t)=>{Y(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),e.parentElement.classList.add("active"),t.classList.add("active")},A=(e,t)=>{e.classList.remove("active"),e.parentElement.classList.remove("active"),t.classList.remove("active"),t.style.height=""},Y=(e,t)=>{b.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&A(c.children[0],c.children[1])})};f&&f.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?A(t,s):K(c,s)}});const g=document.querySelector(".contacts-general__accordion"),$=document.querySelectorAll(".contacts-general__accordion .accordion__item");$.forEach(e=>{e.children[1].classList.contains("active")&&(e.children[1].style.height=e.children[1].scrollHeight+"px")});const j=(e,t)=>{w(e,t),t.style.height=t.scrollHeight+"px",e.classList.add("active"),e.parentElement.classList.add("active"),t.classList.add("active")},k=(e,t)=>{e.classList.remove("active"),e.parentElement.classList.remove("active"),t.classList.remove("active"),t.style.height=""},w=(e,t)=>{$.forEach(c=>{c.children[0]!==e&&c.children[1]!==t&&k(c.children[0],c.children[1])})};g&&g.addEventListener("click",e=>{const t=e.target,c=t.closest(".accordion__head");if(!!c&&c.classList.contains("accordion__head")){const s=t.closest(".accordion__item").querySelector(".accordion__content");s.classList.contains("active")?k(t,s):j(c,s)}});const z=document.querySelectorAll(".mobile-menu__category-btn"),I=document.querySelector(".mobile-menu"),J=document.querySelector(".mobile-menu__background");z.forEach(e=>e.addEventListener("click",()=>{const t=document.getElementById(e.dataset.mobileMenu),c=t.querySelector(".mobile-menu__model-btn");t.classList.add("active"),c.addEventListener("click",()=>{t.classList.remove("active")})}));const Q=document.querySelector(".burger-menu");Q.addEventListener("click",()=>{I.classList.add("active"),document.body.classList.add("overflow")});J.addEventListener("click",()=>{I.classList.remove("active"),document.body.classList.remove("overflow");const e=document.querySelector(".mobile-menu__model.active");e&&e.classList.remove("active")});
