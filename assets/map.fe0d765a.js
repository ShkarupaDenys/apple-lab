import{G as f}from"./vendor.4fe26b01.js";const g=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};g();const l=document.querySelector(".header"),p=document.querySelector(".header__nav-button"),y=()=>{window.scrollY>40?l.classList.add("header--fixed"):l.classList.remove("header--fixed")};addEventListener("scroll",y);p.addEventListener("mouseover",()=>{console.log("check")});const a=document.querySelectorAll(".models__btn"),L=document.querySelectorAll(".models__content");a[0].classList.toggle("selected",!0);L[0].classList.toggle("hidden",!1);a.forEach(c=>{c.addEventListener("click",t=>{a.forEach(e=>{e.classList.remove("selected")}),t.target.classList.toggle("selected",!0);const s=t.target.dataset.tabContentId,r=document.getElementById(s);Array.from(r.parentNode.children).forEach(e=>{e.classList.toggle("hidden",!0)}),r.classList.toggle("hidden",!1)})});const i=document.querySelector(".article__button"),d=document.querySelector(".article__wrap");i.addEventListener("click",()=>{if(d.classList.toggle("article__wrap--hidden"),d.classList.contains("article__wrap--hidden")){i.innerText="\u0423\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435";return}i.innerText="\u0421\u0432\u0435\u0440\u043D\u0443\u0442\u044C"});const _=new f(".team__carousel",{type:"carousel",startAt:0,perView:4,gap:20,breakpoints:{1024:{perView:3},768:{perView:2}}});_.mount();const v=document.querySelector(".accordion"),m=document.querySelectorAll(".accordion__item");m.forEach(c=>{c.children[1].classList.contains("active")&&(c.children[1].style.height=c.children[1].scrollHeight+"px")});const E=(c,t)=>{b(c,t),t.style.height=t.scrollHeight+"px",c.classList.add("active"),t.classList.add("active")},h=(c,t)=>{c.classList.remove("active"),t.classList.remove("active"),t.style.height=""},b=(c,t)=>{m.forEach(s=>{s.children[0]!==c&&s.children[1]!==t&&h(s.children[0],s.children[1])})};v.addEventListener("click",c=>{const t=c.target,s=t.closest(".accordion__head");if(!!s&&s.classList.contains("accordion__head")){const e=t.closest(".accordion__item").querySelector(".accordion__content");e.classList.contains("active")?h(t,e):E(s,e)}});let u;async function q(){const c={lat:-25.344,lng:131.031},{Map:t}=await google.maps.importLibrary("maps"),{AdvancedMarkerElement:s}=await google.maps.importLibrary("marker");u=new t(document.getElementById("map"),{zoom:4,center:c,mapId:"DEMO_MAP_ID"}),new s({map:u,position:c,title:"Uluru"})}q();
