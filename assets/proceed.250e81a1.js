import{e,u as t,k as s}from"./vendor.6e88f69a.js";var a="./assets/billboard.8f7d37a6.png",o=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/billboard.8f7d37a6.png"}),l=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/down1.510aa471.png"}),f=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/down2.8d27545c.png"}),r=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/down3.a0e68272.png"}),n="./assets/inflammation.d4c1fbbd.png",g=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/inflammation.d4c1fbbd.png"}),p=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/left1.1ca5143c.png"}),u=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/left2.dd7165aa.png"}),i=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/left3.8b3e791a.png"}),c=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/right1.9e991787.png"}),d=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/right2.183b6da1.png"}),_=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/right3.c0cb236b.png"}),b="./assets/sea.3db9ad7c.png",m=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/sea.3db9ad7c.png"}),S="./assets/sky.7468e304.png",y=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/sky.7468e304.png"}),h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/up1.30edfa3a.png"}),T=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/up2.2dd54fa2.png"}),j=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:"./assets/up3.bffb3725.png"}),M=()=>{const a=e(""),n=t(),b=s();let S="up1";const M=(e="up1")=>{const t=`/src/assets/images/${e}.png`,s={"/src/assets/images/billboard.png":o,"/src/assets/images/down1.png":l,"/src/assets/images/down2.png":f,"/src/assets/images/down3.png":r,"/src/assets/images/inflammation.png":g,"/src/assets/images/left1.png":p,"/src/assets/images/left2.png":u,"/src/assets/images/left3.png":i,"/src/assets/images/right1.png":c,"/src/assets/images/right2.png":d,"/src/assets/images/right3.png":_,"/src/assets/images/sea.png":m,"/src/assets/images/sky.png":y,"/src/assets/images/up1.png":h,"/src/assets/images/up2.png":T,"/src/assets/images/up3.png":j};a.value=s[t].default},O=e=>{S!==`${e}3`?setTimeout((()=>{S=`${e}3`,M(S)}),100):setTimeout((()=>{S=`${e}2`,M(S)}),100),console.log(S)};return{url:a,getSr:M,move:(e,t,s)=>{let a,o;1===s.length?(a=s[0].contact,o=s[0].target):(a=s[1].contact,o=s[1].target);const l=e.keyCode||e.which||e.charCode,f=!e.ctrlKey||37!==l&&38!==l&&39!==l&&40!==l?6:12,r=t.value;if(!r)return;const g=r.offsetLeft,p=g>105&&g<160,u=g>440&&g<495,i=g>780&&g<835;switch(e.keyCode){case 37:if(O("left"),a&&"left"===o)return;r.style.left=r.offsetLeft<0?r.offsetLeft:r.offsetLeft-f+"px";break;case 38:if(O("up"),a&&"up"===o)return;r.style.top=!(p||u||i)&&r.offsetTop<115?r.offsetTop:r.offsetTop-f+"px",r.offsetTop<60&&("/"===b.path?p?n.push("/sea"):u?n.push("/sky"):i&&n.push("/flame"):u&&n.push("/"));break;case 39:if(O("right"),a&&"right"===o)return;r.style.left=r.offsetLeft>=920?r.offsetLeft:`${r.offsetLeft+f}px`;break;case 40:if(O("down"),a&&"down"===o)return;r.style.top=r.offsetTop>=410?r.offsetTop:`${r.offsetTop+f}px`}},keyup:()=>{setTimeout((()=>{const e=S.substring(0,S.length-1);M(`${e}1`)}),150)}}},O=(e,t)=>{let s,a=!1;const o=e.value.offsetLeft,l=e.value.offsetTop,f=t.value.offsetLeft,r=t.value.offsetTop,n=Math.min(o+e.value.offsetWidth,f+t.value.offsetWidth)-Math.max(o,f),g=Math.min(l+e.value.offsetHeight,r+t.value.offsetHeight)-Math.max(l,r);if(a=n>=0&&g>=0,a){const t=["1","2","3"],{src:a}=e.value,o=Array.from(a).reverse();o.splice(o.indexOf("/"));const l=o.reverse().join("");let f;t.forEach((e=>{const t=l.indexOf(e);t>0&&(f=t)}));const r=Array.from(l);r.splice(f),s=r.join("")}return{contact:a,target:s}},v="./assets/proceed.e65931c5.jpg";export{a as _,v as a,n as b,S as c,b as d,M as g,O as i};