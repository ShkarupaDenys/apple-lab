const i=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}};i();const d=document.querySelector(".header"),a=()=>{window.scrollY>40?d.classList.add("header--fixed"):d.classList.remove("header--fixed")};addEventListener("scroll",a);const n=document.querySelectorAll(".models__btn"),u=document.querySelectorAll(".models__content");n[0].classList.toggle("selected",!0);u[0].classList.toggle("hidden",!1);n.forEach(c=>{c.addEventListener("click",r=>{n.forEach(e=>{e.classList.remove("selected")}),r.target.classList.toggle("selected",!0);const s=r.target.dataset.tabContentId,o=document.getElementById(s);Array.from(o.parentNode.children).forEach(e=>{e.classList.toggle("hidden",!0)}),o.classList.toggle("hidden",!1)})});
