import{g as e,i as s,_ as t,a as r}from"./proceed.18167479.js";import{e as n,w as a,f as l,o,b as i,g as u,F as c,h as d}from"./vendor.96fa4f38.js";const f={setup(){const t=n(null),r=n(null);let o=[];const{url:i,getSr:u,move:c,keyup:d}=e();return a(i,(()=>{o.push(s(t,r)),o=void 0===o[o.length-1].target?[o[o.length-1]]:o})),l((()=>{u(),window.addEventListener("keydown",(e=>{c(e,t,o)})),window.addEventListener("keyup",d)})),{protagonist:t,billboard:r,url:i}}},m={class:"flex justify-center items-center h-screen w-screen"},g={class:"view relative"},p={class:"mountain-wall flex items-end justify-around"},v={class:"h-3/5 flex items-center justify-center"},w={src:t,ref:"billboard"};f.render=function(e,s,t,n,a,l){return o(),i("div",m,[u("div",g,[u("div",p,[(o(),i(c,null,d(3,(e=>u("img",{key:e,src:r,alt:"proceed"}))),64))]),u("img",{src:n.url,class:"protagonist absolute bottom-0",ref:"protagonist"},null,8,["src"]),u("div",v,[u("img",w,null,512)])])])};export default f;