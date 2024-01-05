import{u as U,l as q,r as h,o as L,a as B,b as o,c as a,e as t,t as c,d as I,w as D,F as i,f as g,m as p,n as r,v as F,p as b,s as f,k,x as w,y as T,g as v,h as V,i as $,z as j,A as M,B as N}from"./index-kCIyNzTU.js";const z={class:"container flex flex-col gap-3 p-4"},A={class:"flex flex-grow justify-between"},E={class:"text-3xl font-bold mt-3"},G={class:"flex flex-col lg:flex-row gap-3"},P={class:"lg:w-96 w flex flex-col gap-3"},Q=["src"],H={class:"bg-slate-700 p-3 rounded-md"},J={class:"flex flex-col w-full"},K={action:"#",class:"flex flex-col gap-3"},O={class:"flex flex-col gap-3"},W=["for"],X=["type","placeholder","id","onUpdate:modelValue"],Y=["id","onUpdate:modelValue"],Z={selected:"",value:""},ee={class:"flex flex-col gap-3 bg-slate-700 p-3 rounded-xl"},te=t("label",{for:"currency"},"Currency",-1),le={class:"flex gap-3"},se=["value"],oe=["src"],ae=["for"],ne={key:1,class:"flex flex-col relative w-4/12 p-3 rounded-xl items-center text-center bg-slate-600"},ce=t("label",{class:"text-lg"},"No items found",-1),de=[ce],re={class:"flex flex-col gap-3"},ue=t("label",{for:"item"},"Item",-1),ie={key:0,class:"flex gap-3"},ge=["value","onUpdate:modelValue"],pe=["src"],_e=["for"],me=["for"],fe={key:1,class:"bg-slate-700 p-3 rounded-xl"},ve={class:"flex gap-3"},xe={class:"flex flex-col grow gap-3"},ye=t("label",{for:"phoneNumber"},"Phone number",-1),he={class:"flex gap-3 w-full bg-slate-700 p-3 rounded-xl"},be={class:"flex flex-col grow gap-3"},ke=t("label",{for:"qty"},"Quantity",-1),we=["selected","value"],Ne={__name:"ItemView",setup(Ve){const _=U(),x=q(),l=h({id:"",name:"",game:{},currency:{},item:{},loginMethod:{},qty:1,user:_.user}),R=()=>{console.log(l.value)},m=h({items:[]}),C=async()=>{try{const d=w(k,"game",x.params.id),n=await T(d);l.value.game=n.data(),l.value.loginMethod=l.value.game.method.reduce((s,S)=>(s[S.name]="",s),{});const u=v(d,"products"),e=await V(u);l.value.game.products=e.docs.map(s=>s.data()),l.value.game.products.length>0&&(l.value.currency=l.value.game.products[0],y())}catch{}},y=async()=>{try{const d=v(k,"game",x.params.id,"products"),n=w(d,l.value.currency.id),u=v(n,"items"),e=await V(u);m.value.items=e.docs.map(s=>s.data())}catch{}};return L(()=>{C()}),(d,n)=>{const u=B("RouterLink");return o(),a("div",z,[t("div",A,[t("h1",E,c(l.value.game.name),1),I(u,{to:"/products",class:"bg-slate-700 p-3 rounded-xl"},{default:D(()=>[$("Back")]),_:1})]),t("div",G,[t("div",P,[t("img",{src:l.value.game.image,alt:""},null,8,Q),t("div",null,[t("p",H,c(l.value.game.desc),1)])]),t("div",J,[t("form",K,[l.value.game.method?(o(!0),a(i,{key:0},g(l.value.game.method,e=>(o(),a("div",O,[t("label",{for:e.name},c(e.name),9,W),e.type!=="select"?r((o(),a("input",{key:0,type:e.type,placeholder:`Enter your ${e.name}`,class:"bg-slate-700 p-3 rounded-xl text-lg",id:e.name,"onUpdate:modelValue":s=>l.value.loginMethod[e.name]=s},null,8,X)),[[j,l.value.loginMethod[e.name]]]):p("",!0),e.type==="select"?r((o(),a("select",{key:1,class:"bg-slate-700 p-3 rounded-xl text-lg",id:e.name,"onUpdate:modelValue":s=>l.value.loginMethod[e.name]=s},[t("option",Z,"Select "+c(e.name),1),(o(!0),a(i,null,g(e.options,s=>(o(),a("option",{key:s},c(s),1))),128))],8,Y)),[[b,l.value.loginMethod[e.name]]]):p("",!0)]))),256)):p("",!0),t("div",ee,[te,t("div",le,[l.value.game.products.length>0?(o(!0),a(i,{key:0},g(l.value.game.products,e=>(o(),a("div",{key:e.id,class:M([l.value.currency.id==e.id?"bg-blue-500 ":"bg-slate-600","flex flex-col gap-2 relative w-4/12 p-3 rounded-xl justify-center items-center text-center"])},[r(t("input",{onChange:y,value:e,"onUpdate:modelValue":n[0]||(n[0]=s=>l.value.currency=s),class:"absolute opacity-0 cursor-pointer w-full h-full top-0 left-0",type:"radio",name:"currency",id:"currency"},null,40,se),[[N,l.value.currency]]),t("img",{src:e.image,alt:""},null,8,oe),t("label",{class:"text-lg",for:"category_"+e},c(e.name),9,ae)],2))),128)):(o(),a("div",ne,de))])]),t("div",re,[ue,m.value.items.length>0?(o(),a("div",ie,[(o(!0),a(i,null,g(m.value.items,e=>(o(),a("div",{key:e.id,class:M([l.value.item.id==e.id?"bg-blue-500 ":"bg-slate-600","flex flex-col relative w-4/12 p-3 rounded-xl items-center text-center"])},[r(t("input",{value:e,"onUpdate:modelValue":s=>l.value.item=s,class:"absolute opacity-0 cursor-pointer w-full h-full top-0 left-0",type:"radio",name:"currency",id:"currency"},null,8,ge),[[N,l.value.item]]),t("img",{src:l.value.currency.image,alt:""},null,8,pe),t("label",{class:"text-lg",for:"category_"+e.id},c(e.name),9,_e),t("label",{class:"text-lg",for:"category_"+e.id},"Rp "+c(e.price.toLocaleString()),9,me)],2))),128))])):(o(),a("div",fe,"No item added"))]),t("div",ve,[t("div",xe,[ye,t("div",he,[r(t("input",{type:"text",class:"bg-slate-100 p-3 flex grow text-black rounded-lg text-lg",id:"phoneNumber","onUpdate:modelValue":n[1]||(n[1]=e=>l.value.phoneNumber=e)},null,512),[[F,l.value.phoneNumber]])])]),t("div",be,[ke,r(t("select",{name:"qty","onUpdate:modelValue":n[2]||(n[2]=e=>l.value.qty=e),class:"bg-slate-700 p-6 text-lg rounded-xl",id:"qty"},[(o(),a(i,null,g(5,e=>t("option",{selected:l.value.qty==e?"selected":"",value:e,key:e},c(e),9,we)),64))],512),[[b,l.value.qty]])])]),t("div",null,[f(_).isLoggedIn?(o(),a("button",{key:0,onClick:R,class:"bg-slate-700 text-xl p-3 rounded-xl"},"Add to cart")):p("",!0),f(_).isLoggedIn?p("",!0):(o(),a("button",{key:1,onClick:n[3]||(n[3]=e=>f(_).openModal("login")),class:"bg-slate-700 text-xl p-3 rounded-xl"},"Log In First"))])])])])])}}};export{Ne as default};