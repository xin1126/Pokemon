import{c as e,a as t,o as r,b as n,r as o,d as s}from"./vendor.83efa345.js";let a;const i={},c=function(e,t){if(!t||0===t.length)return e();if(void 0===a){const e=document.createElement("link").relList;a=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in i)return;i[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":a,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))},d=[{path:"/test/aaa",component:()=>c((()=>import("./Game.18f226c1.js")),["./assets/Game.18f226c1.js","./assets/vendor.83efa345.js"])},{path:"/test",component:()=>c((()=>import("./Test.e465d710.js")),["./assets/Test.e465d710.js","./assets/vendor.83efa345.js"]),children:[{path:"home",component:()=>c((()=>import("./Home.ce497885.js")),["./assets/Home.ce497885.js","./assets/vendor.83efa345.js"])}]}];var l=e({history:t(),routes:d});const m={};m.render=function(e,t,s,a,i,c){const d=o("Router-view");return r(),n(d)};s(m).use(l).mount("#app");
