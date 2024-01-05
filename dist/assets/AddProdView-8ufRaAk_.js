import{u as z,r as p,o as J,b as n,c as d,e,n as c,p as q,F as U,f as S,t as f,m,d as V,i,v as g,A as D,q as P,g as h,h as M,k as b,G as W,H as Y,I as Q,J as X,x as y,K as G,L as Z}from"./index-kCIyNzTU.js";import{A}from"./Add-JbQ5vKdk.js";const ee=e("h1",{class:"text-2xl font-bold"},"Add Product",-1),le={class:"flex flex-col gap-4"},te=e("label",{for:"Games"},"Game",-1),oe=e("option",{selected:"",disabled:"",value:""},"Select game",-1),ae=["value"],se=["src"],ne=["value"],de={value:"add"},ie={class:"flex gap-3"},re={key:0,class:"flex flex-col gap-3"},ue={class:"flex gap-3"},ce={class:"flex flex-col grow"},me=e("label",{for:"id"},[e("strong",null,"Game"),i(" ID:")],-1),ge={class:"flex flex-col grow"},pe=e("label",{for:"name"},[e("strong",null,"Game"),i(" Name:")],-1),ve={class:"flex-grow flex flex-row-reverse"},fe={class:"flex gap-3 items-center"},_e={class:"flex flex-col grow"},he=e("label",{for:"id"},[e("strong",null,"Game"),i(" Method Name:")],-1),ye=["id","onUpdate:modelValue"],xe={class:"flex flex-col grow"},be=e("label",{for:"name"},[e("strong",null,"Method"),i(" Type:")],-1),we=["onChange","id","onUpdate:modelValue"],Ce=Z('<option class="" selected disabled value="">Select method type</option><option value="text">text</option><option value="email">Email</option><option value="number">number</option><option value="password">password</option><option value="select">Select Option</option>',6),ke=[Ce],qe={class:"flex flex-col grow"},Ue={key:0,class:"flex justify-between grow"},Se=e("label",{for:"name"},[e("strong",null,"Select "),i(" Option:")],-1),Ve=e("span",null,'GUNAKAN "," UNTUK MEMISAHKAN',-1),De=[Se,Ve],Ge={key:1,class:"flex-grow flex gap-3"},Ae=["id","onChange","onUpdate:modelValue"],Ne={class:"flex flex-col grow"},Ee=e("label",{for:"name"},[e("strong",null,"Game"),i(" Description:")],-1),Re={class:"flex max-h-60 max-w-60"},Ie=e("label",{for:"image"},[e("strong",null,"Game"),i(" Image:")],-1),Pe=["src"],Me={key:1,class:"flex flex-col gap-3"},je=e("label",{for:"Games"},"Currency",-1),Be=e("option",{selected:"",disabled:"",value:""},"Select currency",-1),Le=["value"],Oe=["src"],Te=["value"],$e={value:"add"},Ke={class:"flex gap-3"},Fe={key:0,class:"flex flex-col grow gap-3"},He={class:"flex gap-3"},ze={class:"flex flex-col grow"},Je=e("label",{for:"id"},[e("strong",null,"Currency"),i(" ID:")],-1),We={class:"flex flex-col grow"},Ye=e("label",{for:"name"},[e("strong",null,"Currency"),i(" Name:")],-1),Qe={class:"flex max-h-60 max-w-60"},Xe=e("label",{for:"image"},[e("strong",null,"Currency"),i(" Image:")],-1),Ze=e("div",null,null,-1),el=["src"],ll={class:"flex gap-3"},tl={class:"flex flex-col grow"},ol=e("label",{for:"id"},[e("strong",null,"Item"),i(" ID:")],-1),al={class:"flex flex-col grow"},sl=e("label",{for:"name"},[e("strong",null,"Item"),i(" Name:")],-1),nl={class:"flex flex-col grow"},dl=e("label",{for:"price"},[e("strong",null,"Item"),i(" Price:")],-1),cl={__name:"AddProdView",setup(il){const k=z(),a=p({id:"",name:"",image:"",uploader:k.user.email,method:[{name:"",type:""}]}),x=p({message:"",type:""}),_=p({message:"",type:""}),r=p({id:"",name:"",image:"",uploader:k.user.email}),s=p({id:"",name:"",price:0,game:"",currency:"",uploader:k.user.email}),N=p([]),E=p([]),j=async()=>{const t=P(h(b,"game")),o=await M(t);N.value=o.docs.map(l=>l.data())},B=async()=>{const t=P(h(b,"game",s.value.game,"products")),o=await M(t);E.value=o.docs.map(l=>l.data())},R=async(t,o)=>{const u=t.target.files;if(u.length>0){const w=u[0],I=W(Y,`images/${w.name}`);try{await Q(I,w);const C=await X(I);o==="game"?a.value.image=C:r.value.image=C}catch(C){console.error("Error uploading file: ",C)}}},L=async()=>{try{if(!a.value.id||!a.value.name||!a.value.desc||!a.value.image){console.error("Please fill in all required fields."),_.value={message:"Please fill in all required fields.",type:"error"};return}const t=a.value.id,o=y(h(b,"game"),t);await G(o,a.value),s.game=t,_.value={message:"Document with custom ID added: "+t,type:"success"},console.log("Document with custom ID added: ",t)}catch(t){console.error("Error adding document: ",t)}},v=p({message:"",type:""}),O=async()=>{if(!r.value.id||!r.value.name||!r.value.image){console.error("Please fill in all required fields."),v.value={message:"Please fill in all required fields.",type:"error"};return}try{const t=r.value.id,o=y(b,"game",s.value.game),l=h(o,"products"),u=y(l,t);await G(u,r.value),s.value.currency=t,console.log("Document with custom ID added: ",t),v.value={message:"Document with custom ID added: "+t,type:"success"}}catch(t){console.error("Error adding document: ",t),v.value={message:`Error adding document: ${t.message}`,type:"error"}}},T=async()=>{try{if(!s.value.id||!s.value.name||!s.value.price||!s.value.game||!s.value.currency){console.error("Please fill in all required fields."),x.value={message:"Please fill in all required fields.",type:"error"};return}try{const t=y(b,"game",s.value.game),o=h(t,"products"),l=y(o,s.value.currency),u=h(l,"items"),w=y(u,s.value.id);await G(w,s.value),x.value={message:"Item added to 'products' sub-collection in the selected game document.",type:"success"}}catch(t){console.error("Error adding item: ",t)}}catch(t){console.error("Error adding item: ",t)}},$=t=>{const l=a.value.method[t].optionString.split(",");a.value.method[t].options=l,console.log(a.value.method[t].options)},K=()=>{a.value.method.push({name:"",type:""})},F=t=>{const o={name:a.value.method[t].name,type:a.value.method[t].type,optionString:"",options:[]};a.value.method[t]=o,console.log(a.value.method[t])},H=t=>{const o={name:a.value.method[t].name,type:a.value.method[t].type};a.value.method[t]=o,console.log(a.value.method[t])};return J(()=>{j()}),(t,o)=>(n(),d("div",null,[ee,e("form",le,[te,c(e("select",{onChange:B,required:"",class:"bg-slate-700 p-3 rounded-lg text-lg max-w-md",name:"Games",id:"Games","onUpdate:modelValue":o[0]||(o[0]=l=>s.value.game=l)},[oe,(n(!0),d(U,null,S(N.value,l=>(n(),d("option",{key:l.id,value:l.id},[e("img",{src:l.image,alt:""},null,8,se),i(" "+f(l.name),1)],8,ae))),128)),_.value.type=="success"?(n(),d("option",{key:0,selected:"",value:a.value.id},f(a.value.name),9,ne)):m("",!0),e("option",de,[e("span",ie,[V(A),i("Add new game")])])],544),[[q,s.value.game]]),s.value.game=="add"?(n(),d("div",re,[e("div",ue,[e("div",ce,[me,c(e("input",{placeholder:"e.g. GENSHIN *No space or special characters",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"id","onUpdate:modelValue":o[1]||(o[1]=l=>a.value.id=l)},null,512),[[g,a.value.id]])]),e("div",ge,[pe,c(e("input",{placeholder:"Enter game name",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"name","onUpdate:modelValue":o[2]||(o[2]=l=>a.value.name=l)},null,512),[[g,a.value.name]])])]),e("div",ve,[e("button",{type:"button",onClick:K,class:"group text-lg font-semibold flex gap-2 justify-center"},[V(A,{class:"w-7 duration-150 group-hover:scale-105"}),i(" Add method ")])]),(n(!0),d(U,null,S(a.value.method.length,l=>(n(),d("div",{key:l,class:"flex flex-col gap-3"},[e("div",fe,[e("div",_e,[he,c(e("input",{placeholder:'Will be displayed in the form "Enter/Select your <method-name>"',required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"id_"+l,"onUpdate:modelValue":u=>a.value.method[l-1].name=u},null,8,ye),[[g,a.value.method[l-1].name]])]),e("div",xe,[be,c(e("select",{onChange:u=>a.value.method[l-1].type==="select"?F(l-1):H(l-1),class:"bg-slate-700 capitalize p-4 rounded-lg text-lg",id:"type_"+l,"onUpdate:modelValue":u=>a.value.method[l-1].type=u},ke,40,we),[[q,a.value.method[l-1].type]])])]),e("div",qe,[a.value.method[l-1].type==="select"?(n(),d("div",Ue,De)):m("",!0),a.value.method[l-1].type==="select"?(n(),d("div",Ge,[c(e("input",{placeholder:'Enter option (Use "," to add new option)',required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg grow",id:"option_"+t.index,onChange:u=>$(l-1),"onUpdate:modelValue":u=>a.value.method[l-1].optionString=u},null,40,Ae),[[g,a.value.method[l-1].optionString]])])):m("",!0)])]))),128)),e("div",Ne,[Ee,c(e("textarea",{placeholder:"Enter game description",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"name","onUpdate:modelValue":o[3]||(o[3]=l=>a.value.desc=l)},null,512),[[g,a.value.desc]])]),e("div",Re,[e("div",null,[Ie,e("input",{required:"",type:"file",class:"p-3 file:p-2 file:font-josefin file:bg-slate-700 file:rounded-full file:border-0 file:hover:bg-slate-600 file:me-3 file:px-4 file:text-white",id:"image",onChange:o[4]||(o[4]=l=>R(l,"game"))},null,32)]),a.value.image?(n(),d("img",{key:0,src:a.value.image,class:"",alt:"Uploaded Image",style:{"max-width":"100%","margin-top":"10px"}},null,8,Pe)):m("",!0)]),e("button",{type:"button",class:"bg-blue-700 p-3 rounded-lg text-lg",onClick:L},"Add Game"),_.value.message?(n(),d("div",{key:0,class:D([_.value.type==="success"?"bg-green-500":"bg-red-500","rounded-lg text-black p-5"])},[e("span",null,f(_.value.message),1)],2)):m("",!0)])):m("",!0),s.value.game&&s.value.game!="add"?(n(),d("div",Me,[je,c(e("select",{required:"",class:"bg-slate-700 p-3 rounded-lg text-lg max-w-md",name:"Games",id:"Games","onUpdate:modelValue":o[5]||(o[5]=l=>s.value.currency=l)},[Be,(n(!0),d(U,null,S(E.value,l=>(n(),d("option",{key:l.id,value:l.id},[e("img",{src:l.image,alt:""},null,8,Oe),i(" "+f(l.name),1)],8,Le))),128)),v.value.type=="success"?(n(),d("option",{key:0,selected:"",value:r.value.id},f(r.value.name),9,Te)):m("",!0),e("option",$e,[e("span",Ke,[V(A),i("Add new currency")])])],512),[[q,s.value.currency]]),s.value.currency=="add"?(n(),d("div",Fe,[e("div",He,[e("div",ze,[Je,c(e("input",{placeholder:"e.g. GCRYSTAL *No Spaces or Special Characters",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"id","onUpdate:modelValue":o[6]||(o[6]=l=>r.value.id=l)},null,512),[[g,r.value.id]])]),e("div",We,[Ye,c(e("input",{placeholder:"Enter currency name",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"name","onUpdate:modelValue":o[7]||(o[7]=l=>r.value.name=l)},null,512),[[g,r.value.name]])])]),e("div",Qe,[e("div",null,[Xe,e("input",{placeholder:"Enter currency image URL",required:"",type:"file",class:"p-3 file:p-2 file:bg-slate-700 file:font-josefin file:rounded-full file:border-0 file:hover:bg-slate-600 file:me-3 file:px-4 file:text-white",id:"image",onChange:o[8]||(o[8]=l=>R(l,"currency"))},null,32)]),Ze,r.value.image?(n(),d("img",{key:0,src:r.value.image,class:"",alt:"Uploaded Image",style:{"max-width":"100%","margin-top":"10px"}},null,8,el)):m("",!0)]),e("button",{type:"button",class:"bg-blue-700 p-3 rounded-lg text-lg",onClick:O},"Add Currency"),v.value.message?(n(),d("div",{key:0,class:D([v.value.type=="success"?"bg-green-500":"bg-red-500","rounded-lg text-black p-5"])},[e("span",null,f(v.value.message),1)],2)):m("",!0)])):m("",!0)])):m("",!0),e("div",ll,[e("div",tl,[ol,c(e("input",{placeholder:"e.g. 2400 *Better to fill it with the amount",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"id","onUpdate:modelValue":o[9]||(o[9]=l=>s.value.id=l)},null,512),[[g,s.value.id]])]),e("div",al,[sl,c(e("input",{placeholder:"Enter item name",required:"",type:"text",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"name","onUpdate:modelValue":o[10]||(o[10]=l=>s.value.name=l)},null,512),[[g,s.value.name]])])]),e("div",nl,[dl,c(e("input",{required:"",type:"number",class:"bg-slate-700 p-3 rounded-lg text-lg",id:"price","onUpdate:modelValue":o[11]||(o[11]=l=>s.value.price=l)},null,512),[[g,s.value.price]])]),e("button",{type:"button",class:"bg-blue-700 p-3 rounded-lg text-lg",onClick:T},"Add Items"),x.value.message?(n(),d("div",{key:2,class:D([x.value.type==="success"?"bg-green-300":"bg-red-300","rounded-lg text-black p-5"])},[e("span",null,f(x.value.message)+" in ",1)],2)):m("",!0)])]))}};export{cl as default};
