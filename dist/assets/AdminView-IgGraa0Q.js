import{a as _,b as m,u as x,e as h,f as p,g as s,h as t,w as n,E as f,F as g,H as w,r as i,o as V,C as r,J as v}from"./index-w3Ezt-_Y.js";const C=s("h1",{class:"text-2xl"},"Admin",-1),R={class:"relative justify-around text-center p-2 bg-slate-700 m-1 rounded-xl"},b={class:"grid grid-cols-3 h-11 bg-slate-700 items-center"},B={__name:"AdminView",setup(k){const l=_(),c=m();x();const a=e=>l.path.includes(e),u=()=>{w(v,e=>{e||c.push("/login")})};return h(()=>{u()}),(e,z)=>{const o=i("RouterLink"),d=i("RouterView");return V(),p(g,null,[C,s("div",R,[s("div",b,[t(o,{to:"/admin",class:"text-xl z-10"},{default:n(()=>[r("View Products")]),_:1}),t(o,{to:"/admin/orders",class:"text-xl z-10"},{default:n(()=>[r("View Orders")]),_:1}),t(o,{to:"/admin/users",class:"text-xl z-10"},{default:n(()=>[r("View Users")]),_:1}),s("div",{class:f(["h-11 rounded-xl w-[33%] duration-300 absolute bg-slate-600",{"translate-x-[0px]":a("/admin"),"translate-x-[100%]":a("/admin/orders"),"translate-x-[200%]":a("/admin/users")}])},null,2)])]),t(d)],64)}}};export{B as default};
