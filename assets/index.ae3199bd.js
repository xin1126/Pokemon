import{c as e,a as t,o as r,b as o,r as n,d as s}from"./vendor.6e88f69a.js";let a;const i={},c=function(e,t){if(!t||0===t.length)return e();if(void 0===a){const e=document.createElement("link").relList;a=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":a,t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e()))},l=[{path:"/",component:()=>c((()=>import("./Home.70ac7ed8.js")),["./assets/Home.70ac7ed8.js","./assets/Home.1236799c.css","./assets/vendor.6e88f69a.js","./assets/proceed.250e81a1.js"])},{path:"/flame",component:()=>c((()=>import("./FlameMythicalBeast.318e88fa.js")),["./assets/FlameMythicalBeast.318e88fa.js","./assets/proceed.250e81a1.js","./assets/vendor.6e88f69a.js"])},{path:"/sky",component:()=>c((()=>import("./SkyMythicalBeast.71dc6e02.js")),["./assets/SkyMythicalBeast.71dc6e02.js","./assets/proceed.250e81a1.js","./assets/vendor.6e88f69a.js"])},{path:"/sea",component:()=>c((()=>import("./SeaMythicalBeast.6293ccaf.js")),["./assets/SeaMythicalBeast.6293ccaf.js","./assets/proceed.250e81a1.js","./assets/vendor.6e88f69a.js"])}],p=e({history:t(),routes:l});const d={setup(){}};d.render=function(e,t,s,a,i,c){const l=n("Router-view");return r(),o(l)};s(d).use(p).mount("#app");