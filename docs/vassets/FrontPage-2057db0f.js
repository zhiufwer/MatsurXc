import{_ as p,o as s,c as n,a as o,w as m,t as u,b as r,n as w,p as y,d as f,e as g,r as b,F as h,f as D,g as x,h as k}from"./index-0951e3cd.js";const S={props:["active","now_product"],methods:{close(){this.$emit("close")}}},t=a=>(y("data-v-f7ddef2d"),a=a(),f(),a),C=t(()=>o("i",null,"close",-1)),P=[C],A={key:0,class:"border",style:{"white-space":"pre-wrap"}},N=t(()=>o("article",{class:"border"},[o("h5",null,"Donate"),o("br"),g(" USDT TRC20"),o("br"),o("article",{class:"border"},"TRhnA7SXE5Sap5gSG3ijxRmdYFiD4KRhPs")],-1)),R={class:"border"},V=t(()=>o("h5",null,"Download",-1)),F={key:0,class:"center-align div-dl"},G=["href"],I=t(()=>o("i",null,"download",-1)),B=t(()=>o("span",null,"Download",-1)),M=[I,B],T={key:1,class:"center-align div-dl"},q=["href"],E=t(()=>o("i",null,"download",-1)),U=t(()=>o("span",null,"GitHub Release",-1)),X=[E,U],j={key:2,class:"center-align div-dl"},H=["href"],K=t(()=>o("i",null,"download",-1)),L=t(()=>o("span",null,"Google Play",-1)),z=[K,L],Y={key:3,class:"center-align div-dl"},J=["href"],O=t(()=>o("i",null,"code",-1)),Q=t(()=>o("span",null,"Source code",-1)),W=[O,Q];function Z(a,i,e,v,c,l){return s(),n("dialog",{class:w({active:e.active})},[o("button",{class:"border",onClick:i[0]||(i[0]=m((..._)=>l.close&&l.close(..._),["self"]))},P),o("h5",null,u(e.now_product.name),1),e.now_product.intro?(s(),n("article",A,[o("p",null,u(e.now_product.intro),1)])):r("",!0),N,o("article",R,[V,e.now_product.download?(s(),n("div",F,[o("a",{href:e.now_product.download,class:"round button"},M,8,G)])):r("",!0),e.now_product.github?(s(),n("div",T,[o("a",{href:e.now_product.github,class:"round button"},X,8,q)])):r("",!0),e.now_product.play?(s(),n("div",j,[o("a",{href:e.now_product.play,class:"round button"},z,8,H)])):r("",!0),e.now_product.github?(s(),n("div",Y,[o("a",{href:e.now_product.github.replaceAll("/releases",""),class:"round button"},W,8,J)])):r("",!0)])],2)}const $=p(S,[["render",Z],["__scopeId","data-v-f7ddef2d"]]),oo={components:{DownloadDrop:$},data(){return{active:!1,now_product:{},all_product:[{name:"NekoBoxForAndroid",icon:"android",github:"https://MatsurXc.github.io",intro:`收藏的网站`},{name:"nekoray",icon:"monitor",github:"https://github.com/MatsurXc",intro:`个人blog`},{name:"Plugin APKs",icon:"extension",download:"./m-plugin/"}]}},methods:{toggleDownDrop(a){this.now_product={},a==null?(document.querySelector("main").style.removeProperty("display"),document.querySelector("nav").style.removeProperty("display"),this.active=!1):(document.querySelector("main").style.setProperty("display","none"),document.querySelector("nav").style.setProperty("display","none"),this.active=!0,this.all_product.forEach(i=>{i.name==a&&(this.now_product=i)}))}}},eo={class:"responsive",id:"main"},to=o("article",{class:"top-round large-padding large-margin"},[o("div",{class:"row"},[o("img",{class:"circle large",src:"https://MatsurXc.github.io/assets/images/matsuri1.jpg"}),o("div",{class:"max"},[o("h5",null,"MatsuriDayo"),o("p",null,"Some software")])])],-1),so={class:"large-padding large-margin"},no=o("div",{class:"row"},[o("div",{class:"max"},[o("p",null,[o("i",null,"download"),g(" Download Latest release")])])],-1),ao=["onClick"],io=k('<article class="bottom-round large-padding large-margin"><div class="row"><div class="max"><p><i>help</i> Getting Help</p></div></div><div class="center-align div-dl"><a href="./index_docs/" class="round button"><i>article</i><span>帮助文档 / Documents</span></a></div><div class="center-align div-dl"><a href="https://t.me/Matsuridayo" class="round button"><i>notifications</i><span>Telegram Channel</span></a></div><div class="center-align div-dl"><a href="https://matsuricom.pages.dev" class="round button"><i>flight</i><span>推广服务</span></a></div></article>',1);function lo(a,i,e,v,c,l){const _=b("DownloadDrop");return s(),n(h,null,[o("main",eo,[to,o("article",so,[no,(s(!0),n(h,null,D(c.all_product,d=>(s(),n("div",{class:"center-align div-dl",key:d},[o("button",{class:"round",onClick:ro=>l.toggleDownDrop(d.name)},[o("i",null,u(d.icon),1),o("span",null,u(d.name),1)],8,ao)]))),128))]),io]),x(_,{now_product:c.now_product,active:c.active,onClose:i[0]||(i[0]=d=>l.toggleDownDrop())},null,8,["now_product","active"])],64)}const uo=p(oo,[["render",lo]]);export{uo as default};
