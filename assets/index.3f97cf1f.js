import{c as e,a as t,o as r,b as o,r as n,d as s}from"./vendor.96fa4f38.js";let a;const i={},d=function(e,t){if(!t||0===t.length)return e();if(void 0===a){const e=document.createElement("link").relList;a=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":a,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},c=[{path:"/",component:()=>d((()=>import("./Home.f571fd37.js")),["./assets/Home.f571fd37.js","./assets/Home.51d305ff.css","./assets/proceed.18167479.js","./assets/vendor.96fa4f38.js"])},{path:"/flame",component:()=>d((()=>import("./FlameMythicalBeast.f7d70984.js")),["./assets/FlameMythicalBeast.f7d70984.js","./assets/proceed.18167479.js","./assets/vendor.96fa4f38.js"])},{path:"/sky",component:()=>d((()=>import("./SkyMythicalBeast.9b31c67d.js")),["./assets/SkyMythicalBeast.9b31c67d.js","./assets/proceed.18167479.js","./assets/vendor.96fa4f38.js"])},{path:"/sea",component:()=>d((()=>import("./SeaMythicalBeast.d773daf6.js")),["./assets/SeaMythicalBeast.d773daf6.js","./assets/proceed.18167479.js","./assets/vendor.96fa4f38.js"])}],l=e({history:t(),routes:c});const p={setup(){}};p.render=function(e,t,s,a,i,d){const c=n("Router-view");return r(),o(c)};s(p).use(l).mount("#app");
