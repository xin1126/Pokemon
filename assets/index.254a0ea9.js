import{c as e,a as t,o as r,b as n,r as o,d as s}from"./vendor.2524a82e.js";let a;const i={},d=function(e,t){if(!t||0===t.length)return e();if(void 0===a){const e=document.createElement("link").relList;a=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":a,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},c=[{path:"/game",component:()=>d((()=>import("./Game.a8029180.js")),["./assets/Game.a8029180.js","./assets/vendor.2524a82e.js"])},{path:"/aaa",component:()=>d((()=>import("./Test.54d7de49.js")),["./assets/Test.54d7de49.js","./assets/vendor.2524a82e.js"])},{path:"/",component:()=>d((()=>import("./Home.d7ecae8c.js")),["./assets/Home.d7ecae8c.js","./assets/vendor.2524a82e.js"])}],m=e({history:t(),routes:c});const p={};p.render=function(e,t,s,a,i,d){const c=o("Router-view");return r(),n(c)};s(p).use(m).mount("#app");