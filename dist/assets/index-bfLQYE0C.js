(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function ru(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ae={},is=[],Ot=()=>{},d0=()=>!1,ma=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),su=t=>t.startsWith("onUpdate:"),Xe=Object.assign,iu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f0=Object.prototype.hasOwnProperty,ce=(t,e)=>f0.call(t,e),z=Array.isArray,os=t=>$i(t)==="[object Map]",Ss=t=>$i(t)==="[object Set]",ed=t=>$i(t)==="[object Date]",J=t=>typeof t=="function",Ue=t=>typeof t=="string",Jn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",$p=t=>(Ce(t)||J(t))&&J(t.then)&&J(t.catch),Bp=Object.prototype.toString,$i=t=>Bp.call(t),p0=t=>$i(t).slice(8,-1),jp=t=>$i(t)==="[object Object]",ou=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,So=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),_a=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},g0=/-(\w)/g,un=_a(t=>t.replace(g0,(e,n)=>n?n.toUpperCase():"")),m0=/\B([A-Z])/g,Ps=_a(t=>t.replace(m0,"-$1").toLowerCase()),ya=_a(t=>t.charAt(0).toUpperCase()+t.slice(1)),yc=_a(t=>t?`on${ya(t)}`:""),Zn=(t,e)=>!Object.is(t,e),Po=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},jo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let td;const qp=()=>td||(td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function au(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?w0(r):au(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||Ce(t))return t}const _0=/;(?![^(]*\))/g,y0=/:([^]+)/,v0=/\/\*[^]*?\*\//g;function w0(t){const e={};return t.replace(v0,"").split(_0).forEach(n=>{if(n){const r=n.split(y0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function ks(t){let e="";if(Ue(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=ks(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const E0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",I0=ru(E0);function Hp(t){return!!t||t===""}function T0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=br(t[r],e[r]);return n}function br(t,e){if(t===e)return!0;let n=ed(t),r=ed(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Jn(t),r=Jn(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?T0(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!br(t[o],e[o]))return!1}}return String(t)===String(e)}function cu(t,e){return t.findIndex(n=>br(n,e))}const Ho=t=>Ue(t)?t:t==null?"":z(t)||Ce(t)&&(t.toString===Bp||!J(t.toString))?JSON.stringify(t,zp,2):String(t),zp=(t,e)=>e&&e.__v_isRef?zp(t,e.value):os(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[vc(r,i)+" =>"]=s,n),{})}:Ss(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>vc(n))}:Jn(e)?vc(e):Ce(e)&&!z(e)&&!jp(e)?String(e):e,vc=(t,e="")=>{var n;return Jn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Tt;class Wp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Tt,!e&&Tt&&(this.index=(Tt.scopes||(Tt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Tt;try{return Tt=this,e()}finally{Tt=n}}}on(){Tt=this}off(){Tt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Gp(t){return new Wp(t)}function C0(t,e=Tt){e&&e.active&&e.effects.push(t)}function Kp(){return Tt}function A0(t){Tt&&Tt.cleanups.push(t)}let Er;class lu{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,C0(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Ur();for(const e of this.deps)if(e.computed&&(R0(e.computed),this._dirtyLevel>=2))break;$r(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Hn,n=Er;try{return Hn=!0,Er=this,this._runnings++,nd(this),this.fn()}finally{rd(this),this._runnings--,Er=n,Hn=e}}stop(){var e;this.active&&(nd(this),rd(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function R0(t){return t.value}function nd(t){t._trackId++,t._depsLength=0}function rd(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Qp(t.deps[e],t);t.deps.length=t._depsLength}}function Qp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Hn=!0,nl=0;const Yp=[];function Ur(){Yp.push(Hn),Hn=!1}function $r(){const t=Yp.pop();Hn=t===void 0?!0:t}function uu(){nl++}function hu(){for(nl--;!nl&&rl.length;)rl.shift()()}function Xp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Qp(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const rl=[];function Jp(t,e,n){uu();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&rl.push(r.scheduler))}hu()}const Zp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},zo=new WeakMap,Ir=Symbol(""),sl=Symbol("");function vt(t,e,n){if(Hn&&Er){let r=zo.get(t);r||zo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Zp(()=>r.delete(n))),Xp(Er,s)}}function En(t,e,n,r,s,i){const o=zo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Jn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?ou(n)&&a.push(o.get("length")):(a.push(o.get(Ir)),os(t)&&a.push(o.get(sl)));break;case"delete":z(t)||(a.push(o.get(Ir)),os(t)&&a.push(o.get(sl)));break;case"set":os(t)&&a.push(o.get(Ir));break}uu();for(const c of a)c&&Jp(c,3);hu()}function b0(t,e){var n;return(n=zo.get(t))==null?void 0:n.get(e)}const S0=ru("__proto__,__v_isRef,__isVue"),eg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Jn)),sd=P0();function P0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ue(this);for(let i=0,o=this.length;i<o;i++)vt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ue)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ur(),uu();const r=ue(this)[e].apply(this,n);return hu(),$r(),r}}),t}function k0(t){const e=ue(this);return vt(e,"has",t),e.hasOwnProperty(t)}class tg{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?q0:ig:i?sg:rg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=z(e);if(!s){if(o&&ce(sd,n))return Reflect.get(sd,n,r);if(n==="hasOwnProperty")return k0}const a=Reflect.get(e,n,r);return(Jn(n)?eg.has(n):S0(n))||(s||vt(e,"get",n),i)?a:$e(a)?o&&ou(n)?a:a.value:Ce(a)?s?ag(a):Bi(a):a}}class ng extends tg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=fs(i);if(!ns(r)&&!fs(r)&&(i=ue(i),r=ue(r)),!z(e)&&$e(i)&&!$e(r))return c?!1:(i.value=r,!0)}const o=z(e)&&ou(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,r,s);return e===ue(s)&&(o?Zn(r,i)&&En(e,"set",n,r):En(e,"add",n,r)),a}deleteProperty(e,n){const r=ce(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&En(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Jn(n)||!eg.has(n))&&vt(e,"has",n),r}ownKeys(e){return vt(e,"iterate",z(e)?"length":Ir),Reflect.ownKeys(e)}}class x0 extends tg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const O0=new ng,D0=new x0,N0=new ng(!0),du=t=>t,va=t=>Reflect.getPrototypeOf(t);function lo(t,e,n=!1,r=!1){t=t.__v_raw;const s=ue(t),i=ue(e);n||(Zn(e,i)&&vt(s,"get",e),vt(s,"get",i));const{has:o}=va(s),a=r?du:n?gu:pi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function uo(t,e=!1){const n=this.__v_raw,r=ue(n),s=ue(t);return e||(Zn(t,s)&&vt(r,"has",t),vt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ho(t,e=!1){return t=t.__v_raw,!e&&vt(ue(t),"iterate",Ir),Reflect.get(t,"size",t)}function id(t){t=ue(t);const e=ue(this);return va(e).has.call(e,t)||(e.add(t),En(e,"add",t,t)),this}function od(t,e){e=ue(e);const n=ue(this),{has:r,get:s}=va(n);let i=r.call(n,t);i||(t=ue(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Zn(e,o)&&En(n,"set",t,e):En(n,"add",t,e),this}function ad(t){const e=ue(this),{has:n,get:r}=va(e);let s=n.call(e,t);s||(t=ue(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&En(e,"delete",t,void 0),i}function cd(){const t=ue(this),e=t.size!==0,n=t.clear();return e&&En(t,"clear",void 0,void 0),n}function fo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ue(o),c=e?du:t?gu:pi;return!t&&vt(a,"iterate",Ir),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function po(t,e,n){return function(...r){const s=this.__v_raw,i=ue(s),o=os(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?du:e?gu:pi;return!e&&vt(i,"iterate",c?sl:Ir),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function xn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function V0(){const t={get(i){return lo(this,i)},get size(){return ho(this)},has:uo,add:id,set:od,delete:ad,clear:cd,forEach:fo(!1,!1)},e={get(i){return lo(this,i,!1,!0)},get size(){return ho(this)},has:uo,add:id,set:od,delete:ad,clear:cd,forEach:fo(!1,!0)},n={get(i){return lo(this,i,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:fo(!0,!1)},r={get(i){return lo(this,i,!0,!0)},get size(){return ho(this,!0)},has(i){return uo.call(this,i,!0)},add:xn("add"),set:xn("set"),delete:xn("delete"),clear:xn("clear"),forEach:fo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=po(i,!1,!1),n[i]=po(i,!0,!1),e[i]=po(i,!1,!0),r[i]=po(i,!0,!0)}),[t,n,e,r]}const[M0,L0,F0,U0]=V0();function fu(t,e){const n=e?t?U0:F0:t?L0:M0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ce(n,s)&&s in r?n:r,s,i)}const $0={get:fu(!1,!1)},B0={get:fu(!1,!0)},j0={get:fu(!0,!1)},rg=new WeakMap,sg=new WeakMap,ig=new WeakMap,q0=new WeakMap;function H0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function z0(t){return t.__v_skip||!Object.isExtensible(t)?0:H0(p0(t))}function Bi(t){return fs(t)?t:pu(t,!1,O0,$0,rg)}function og(t){return pu(t,!1,N0,B0,sg)}function ag(t){return pu(t,!0,D0,j0,ig)}function pu(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=z0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function zn(t){return fs(t)?zn(t.__v_raw):!!(t&&t.__v_isReactive)}function fs(t){return!!(t&&t.__v_isReadonly)}function ns(t){return!!(t&&t.__v_isShallow)}function cg(t){return zn(t)||fs(t)}function ue(t){const e=t&&t.__v_raw;return e?ue(e):t}function wa(t){return jo(t,"__v_skip",!0),t}const pi=t=>Ce(t)?Bi(t):t,gu=t=>Ce(t)?ag(t):t;class lg{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new lu(()=>e(this._value),()=>il(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ue(this);return ug(e),(!e._cacheable||e.effect.dirty)&&Zn(e._value,e._value=e.effect.run())&&il(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function W0(t,e,n=!1){let r,s;const i=J(t);return i?(r=t,s=Ot):(r=t.get,s=t.set),new lg(r,s,i||!s,n)}function ug(t){Hn&&Er&&(t=ue(t),Xp(Er,t.dep||(t.dep=Zp(()=>t.dep=void 0,t instanceof lg?t:void 0))))}function il(t,e=3,n){t=ue(t);const r=t.dep;r&&Jp(r,e)}function $e(t){return!!(t&&t.__v_isRef===!0)}function Me(t){return hg(t,!1)}function G0(t){return hg(t,!0)}function hg(t,e){return $e(t)?t:new K0(t,e)}class K0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ue(e),this._value=n?e:pi(e)}get value(){return ug(this),this._value}set value(e){const n=this.__v_isShallow||ns(e)||fs(e);e=n?e:ue(e),Zn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:pi(e),il(this,3))}}function le(t){return $e(t)?t.value:t}const Q0={get:(t,e,n)=>le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return $e(s)&&!$e(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function dg(t){return zn(t)?t:new Proxy(t,Q0)}function Y0(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=J0(t,n);return e}class X0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return b0(ue(this._object),this._key)}}function J0(t,e,n){const r=t[e];return $e(r)?r:new X0(t,e,n)}function Wn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Ea(i,e,n)}return s}function Ht(t,e,n,r){if(J(t)){const i=Wn(t,e,n,r);return i&&$p(i)&&i.catch(o=>{Ea(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ht(t[i],e,n,r));return s}function Ea(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Wn(c,null,10,[t,o,a]);return}}Z0(t,n,s,r)}function Z0(t,e,n,r=!0){console.error(t)}let gi=!1,ol=!1;const rt=[];let en=0;const as=[];let gn=null,gr=0;const fg=Promise.resolve();let mu=null;function _u(t){const e=mu||fg;return t?e.then(this?t.bind(this):t):e}function ev(t){let e=en+1,n=rt.length;for(;e<n;){const r=e+n>>>1,s=rt[r],i=mi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function yu(t){(!rt.length||!rt.includes(t,gi&&t.allowRecurse?en+1:en))&&(t.id==null?rt.push(t):rt.splice(ev(t.id),0,t),pg())}function pg(){!gi&&!ol&&(ol=!0,mu=fg.then(mg))}function tv(t){const e=rt.indexOf(t);e>en&&rt.splice(e,1)}function nv(t){z(t)?as.push(...t):(!gn||!gn.includes(t,t.allowRecurse?gr+1:gr))&&as.push(t),pg()}function ld(t,e,n=gi?en+1:0){for(;n<rt.length;n++){const r=rt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;rt.splice(n,1),n--,r()}}}function gg(t){if(as.length){const e=[...new Set(as)];if(as.length=0,gn){gn.push(...e);return}for(gn=e,gn.sort((n,r)=>mi(n)-mi(r)),gr=0;gr<gn.length;gr++)gn[gr]();gn=null,gr=0}}const mi=t=>t.id==null?1/0:t.id,rv=(t,e)=>{const n=mi(t)-mi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function mg(t){ol=!1,gi=!0,rt.sort(rv);try{for(en=0;en<rt.length;en++){const e=rt[en];e&&e.active!==!1&&Wn(e,null,14)}}finally{en=0,rt.length=0,gg(),gi=!1,mu=null,(rt.length||as.length)&&mg()}}function sv(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ae;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ae;d&&(s=n.map(f=>Ue(f)?f.trim():f)),h&&(s=n.map(qo))}let a,c=r[a=yc(e)]||r[a=yc(un(e))];!c&&i&&(c=r[a=yc(Ps(e))]),c&&Ht(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ht(l,t,6,s)}}function _g(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=_g(l,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Ce(t)&&r.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Xe(o,i),Ce(t)&&r.set(t,o),o)}function Ia(t,e){return!t||!ma(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Ps(e))||ce(t,e))}let Ct=null,yg=null;function Wo(t){const e=Ct;return Ct=t,yg=t&&t.type.__scopeId||null,e}function $t(t,e=Ct,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Ed(-1);const i=Wo(e);let o;try{o=t(...s)}finally{Wo(i),r._d&&Ed(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function wc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:_,inheritAttrs:I}=t;let v,S;const D=Wo(t);try{if(n.shapeFlag&4){const B=s||r,F=B;v=Zt(u.call(F,B,h,i,f,d,_)),S=c}else{const B=e;v=Zt(B.length>1?B(i,{attrs:c,slots:a,emit:l}):B(i,null)),S=e.props?c:iv(c)}}catch(B){ni.length=0,Ea(B,t,1),v=he(Sr)}let N=v;if(S&&I!==!1){const B=Object.keys(S),{shapeFlag:F}=N;B.length&&F&7&&(o&&B.some(su)&&(S=ov(S,o)),N=ps(N,S))}return n.dirs&&(N=ps(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),v=N,Wo(D),v}const iv=t=>{let e;for(const n in t)(n==="class"||n==="style"||ma(n))&&((e||(e={}))[n]=t[n]);return e},ov=(t,e)=>{const n={};for(const r in t)(!su(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function av(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?ud(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ia(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?ud(r,o,l):!0:!!o;return!1}function ud(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ia(n,i))return!0}return!1}function cv({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const vg="components";function vu(t,e){return uv(vg,t,!0,e)||t}const lv=Symbol.for("v-ndc");function uv(t,e,n=!0,r=!1){const s=Ct||qe;if(s){const i=s.type;if(t===vg){const a=sw(i,!1);if(a&&(a===e||a===un(e)||a===ya(un(e))))return i}const o=hd(s[t]||i[t],e)||hd(s.appContext[t],e);return!o&&r?i:o}}function hd(t,e){return t&&(t[e]||t[un(e)]||t[ya(un(e))])}const hv=t=>t.__isSuspense;function dv(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):nv(t)}const fv=Symbol.for("v-scx"),pv=()=>Dt(fv),go={};function ei(t,e,n){return wg(t,e,n)}function wg(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ae){var c;if(e&&i){const F=e;e=(...oe)=>{F(...oe),B()}}const l=Kp()===((c=qe)==null?void 0:c.scope)?qe:null;let u,h=!1,d=!1;if($e(t)?(u=()=>t.value,h=ns(t)):zn(t)?(u=ns(t)||r===!1?()=>_n(t,1):()=>_n(t),h=!0):z(t)?(d=!0,h=t.some(F=>zn(F)||ns(F)),u=()=>t.map(F=>{if($e(F))return F.value;if(zn(F))return _n(F,ns(F)||r===!1?1:void 0);if(J(F))return Wn(F,l,2)})):J(t)?e?u=()=>Wn(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return f&&f(),Ht(t,l,3,[_])}:u=Ot,e&&r){const F=u;u=()=>_n(F())}let f,_=F=>{f=N.onStop=()=>{Wn(F,l,4),f=N.onStop=void 0}},I;if(ba)if(_=Ot,e?n&&Ht(e,l,3,[u(),d?[]:void 0,_]):u(),s==="sync"){const F=pv();I=F.__watcherHandles||(F.__watcherHandles=[])}else return Ot;let v=d?new Array(t.length).fill(go):go;const S=()=>{if(!(!N.active||!N.dirty))if(e){const F=N.run();(r||h||(d?F.some((oe,me)=>Zn(oe,v[me])):Zn(F,v)))&&(f&&f(),Ht(e,l,3,[F,v===go?void 0:d&&v[0]===go?[]:v,_]),v=F)}else N.run()};S.allowRecurse=!!e;let D;s==="sync"?D=S:s==="post"?D=()=>gt(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),D=()=>yu(S));const N=new lu(u,Ot,D),B=()=>{N.stop(),l&&l.scope&&iu(l.scope.effects,N)};return e?n?S():v=N.run():s==="post"?gt(N.run.bind(N),l&&l.suspense):N.run(),I&&I.push(B),B}function gv(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?Eg(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=qe;gs(this);const a=wg(s,i.bind(r),n);return o?gs(o):Tr(),a}function Eg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function _n(t,e,n=0,r){if(!Ce(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),$e(t))_n(t.value,e,n,r);else if(z(t))for(let s=0;s<t.length;s++)_n(t[s],e,n,r);else if(Ss(t)||os(t))t.forEach(s=>{_n(s,e,n,r)});else if(jp(t))for(const s in t)_n(t[s],e,n,r);return t}function rs(t,e){const n=Ct;if(n===null)return t;const r=Sa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ae]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&_n(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function dr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Ur(),Ht(c,n,8,[t.el,a,t,e]),$r())}}/*! #__NO_SIDE_EFFECTS__ */function Ig(t,e){return J(t)?Xe({name:t.name},e,{setup:t}):t}const ko=t=>!!t.type.__asyncLoader,Tg=t=>t.type.__isKeepAlive;function mv(t,e){Cg(t,"a",e)}function _v(t,e){Cg(t,"da",e)}function Cg(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ta(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Tg(s.parent.vnode)&&yv(r,e,n,s),s=s.parent}}function yv(t,e,n,r){const s=Ta(e,t,r,!0);Ag(()=>{iu(r[e],s)},n)}function Ta(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ur(),gs(n);const a=Ht(e,n,t,o);return Tr(),$r(),a});return r?s.unshift(i):s.push(i),i}}const bn=t=>(e,n=qe)=>(!ba||t==="sp")&&Ta(t,(...r)=>e(...r),n),Ca=bn("bm"),vv=bn("m"),wv=bn("bu"),Ev=bn("u"),Iv=bn("bum"),Ag=bn("um"),Tv=bn("sp"),Cv=bn("rtg"),Av=bn("rtc");function Rv(t,e=qe){Ta("ec",t,e)}function dd(t,e,n,r){let s;const i=n&&n[r];if(z(t)||Ue(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const al=t=>t?Lg(t)?Sa(t)||t.proxy:al(t.parent):null,ti=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>al(t.parent),$root:t=>al(t.root),$emit:t=>t.emit,$options:t=>wu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,yu(t.update)}),$nextTick:t=>t.n||(t.n=_u.bind(t.proxy)),$watch:t=>gv.bind(t)}),Ec=(t,e)=>t!==Ae&&!t.__isScriptSetup&&ce(t,e),bv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Ec(r,e))return o[e]=1,r[e];if(s!==Ae&&ce(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ce(l,e))return o[e]=3,i[e];if(n!==Ae&&ce(n,e))return o[e]=4,n[e];cl&&(o[e]=0)}}const u=ti[e];let h,d;if(u)return e==="$attrs"&&vt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ae&&ce(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ce(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Ec(s,e)?(s[e]=n,!0):r!==Ae&&ce(r,e)?(r[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ae&&ce(t,o)||Ec(e,o)||(a=i[0])&&ce(a,o)||ce(r,o)||ce(ti,o)||ce(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function fd(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let cl=!0;function Sv(t){const e=wu(t),n=t.proxy,r=t.ctx;cl=!1,e.beforeCreate&&pd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:_,activated:I,deactivated:v,beforeDestroy:S,beforeUnmount:D,destroyed:N,unmounted:B,render:F,renderTracked:oe,renderTriggered:me,errorCaptured:ee,serverPrefetch:ne,expose:Ie,inheritAttrs:Je,components:wt,directives:Pt,filters:hr}=e;if(l&&Pv(l,r,null),o)for(const we in o){const pe=o[we];J(pe)&&(r[we]=pe.bind(n))}if(s){const we=s.call(n,n);Ce(we)&&(t.data=Bi(we))}if(cl=!0,i)for(const we in i){const pe=i[we],fn=J(pe)?pe.bind(n,n):J(pe.get)?pe.get.bind(n,n):Ot,kn=!J(pe)&&J(pe.set)?pe.set.bind(n):Ot,Yt=ht({get:fn,set:kn});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Yt.value,set:pt=>Yt.value=pt})}if(a)for(const we in a)Rg(a[we],r,n,we);if(c){const we=J(c)?c.call(n):c;Reflect.ownKeys(we).forEach(pe=>{xo(pe,we[pe])})}u&&pd(u,t,"c");function de(we,pe){z(pe)?pe.forEach(fn=>we(fn.bind(n))):pe&&we(pe.bind(n))}if(de(Ca,h),de(vv,d),de(wv,f),de(Ev,_),de(mv,I),de(_v,v),de(Rv,ee),de(Av,oe),de(Cv,me),de(Iv,D),de(Ag,B),de(Tv,ne),z(Ie))if(Ie.length){const we=t.exposed||(t.exposed={});Ie.forEach(pe=>{Object.defineProperty(we,pe,{get:()=>n[pe],set:fn=>n[pe]=fn})})}else t.exposed||(t.exposed={});F&&t.render===Ot&&(t.render=F),Je!=null&&(t.inheritAttrs=Je),wt&&(t.components=wt),Pt&&(t.directives=Pt)}function Pv(t,e,n=Ot){z(t)&&(t=ll(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Dt(s.from||r,s.default,!0):i=Dt(s.from||r):i=Dt(s),$e(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function pd(t,e,n){Ht(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Rg(t,e,n,r){const s=r.includes(".")?Eg(n,r):()=>n[r];if(Ue(t)){const i=e[t];J(i)&&ei(s,i)}else if(J(t))ei(s,t.bind(n));else if(Ce(t))if(z(t))t.forEach(i=>Rg(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&ei(s,i,t)}}function wu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Go(c,l,o,!0)),Go(c,e,o)),Ce(e)&&i.set(e,c),c}function Go(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Go(t,i,n,!0),s&&s.forEach(o=>Go(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=kv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const kv={data:gd,props:md,emits:md,methods:Ws,computed:Ws,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Ws,directives:Ws,watch:Ov,provide:gd,inject:xv};function gd(t,e){return e?t?function(){return Xe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function xv(t,e){return Ws(ll(t),ll(e))}function ll(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ut(t,e){return t?[...new Set([].concat(t,e))]:e}function Ws(t,e){return t?Xe(Object.create(null),t,e):e}function md(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Xe(Object.create(null),fd(t),fd(e??{})):e}function Ov(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=ut(t[r],e[r]);return n}function bg(){return{app:null,config:{isNativeTag:d0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Dv=0;function Nv(t,e){return function(r,s=null){J(r)||(r=Xe({},r)),s!=null&&!Ce(s)&&(s=null);const i=bg(),o=new WeakSet;let a=!1;const c=i.app={_uid:Dv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ow,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=he(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Sa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){_i=c;try{return l()}finally{_i=null}}};return c}}let _i=null;function xo(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function Dt(t,e,n=!1){const r=qe||Ct;if(r||_i){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:_i._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r&&r.proxy):e}}function Vv(){return!!(qe||Ct||_i)}function Mv(t,e,n,r=!1){const s={},i={};jo(i,Ra,1),t.propsDefaults=Object.create(null),Sg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:og(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Lv(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ue(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ia(t.emitsOptions,d))continue;const f=e[d];if(c)if(ce(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const _=un(d);s[_]=ul(c,a,_,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{Sg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ce(e,h)&&((u=Ps(h))===h||!ce(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=ul(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ce(e,h))&&(delete i[h],l=!0)}l&&En(t,"set","$attrs")}function Sg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(So(c))continue;const l=e[c];let u;s&&ce(s,u=un(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ia(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ue(n),l=a||Ae;for(let u=0;u<i.length;u++){const h=i[u];n[h]=ul(s,c,h,l[h],t,!ce(l,h))}}return o}function ul(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(gs(s),r=l[n]=c.call(null,e),Tr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ps(n))&&(r=!0))}return r}function Pg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,f]=Pg(h,e,!0);Xe(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Ce(t)&&r.set(t,is),is;if(z(i))for(let u=0;u<i.length;u++){const h=un(i[u]);_d(h)&&(o[h]=Ae)}else if(i)for(const u in i){const h=un(u);if(_d(h)){const d=i[u],f=o[h]=z(d)||J(d)?{type:d}:Xe({},d);if(f){const _=wd(Boolean,f.type),I=wd(String,f.type);f[0]=_>-1,f[1]=I<0||_<I,(_>-1||ce(f,"default"))&&a.push(h)}}}const l=[o,a];return Ce(t)&&r.set(t,l),l}function _d(t){return t[0]!=="$"}function yd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function vd(t,e){return yd(t)===yd(e)}function wd(t,e){return z(e)?e.findIndex(n=>vd(n,t)):J(e)&&vd(e,t)?0:-1}const kg=t=>t[0]==="_"||t==="$stable",Eu=t=>z(t)?t.map(Zt):[Zt(t)],Fv=(t,e,n)=>{if(e._n)return e;const r=$t((...s)=>Eu(e(...s)),n);return r._c=!1,r},xg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(kg(s))continue;const i=t[s];if(J(i))e[s]=Fv(s,i,r);else if(i!=null){const o=Eu(i);e[s]=()=>o}}},Og=(t,e)=>{const n=Eu(e);t.slots.default=()=>n},Uv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ue(e),jo(e,"_",n)):xg(e,t.slots={})}else t.slots={},e&&Og(t,e);jo(t.slots,Ra,1)},$v=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ae;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,xg(e,s)),o=e}else e&&(Og(t,e),o={default:1});if(i)for(const a in s)!kg(a)&&o[a]==null&&delete s[a]};function hl(t,e,n,r,s=!1){if(z(t)){t.forEach((d,f)=>hl(d,e&&(z(e)?e[f]:e),n,r,s));return}if(ko(r)&&!s)return;const i=r.shapeFlag&4?Sa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ae?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Ue(l)?(u[l]=null,ce(h,l)&&(h[l]=null)):$e(l)&&(l.value=null)),J(c))Wn(c,a,12,[o,u]);else{const d=Ue(c),f=$e(c);if(d||f){const _=()=>{if(t.f){const I=d?ce(h,c)?h[c]:u[c]:c.value;s?z(I)&&iu(I,i):z(I)?I.includes(i)||I.push(i):d?(u[c]=[i],ce(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ce(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(_.id=-1,gt(_,n)):_()}}}const gt=dv;function Bv(t){return jv(t)}function jv(t,e){const n=qp();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ot,insertStaticContent:_}=t,I=(p,g,m,y=null,T=null,A=null,V=void 0,P=null,k=!!g.dynamicChildren)=>{if(p===g)return;p&&!$s(p,g)&&(y=w(p),pt(p,T,A,!0),p=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:b,ref:L,shapeFlag:W}=g;switch(b){case Aa:v(p,g,m,y);break;case Sr:S(p,g,m,y);break;case Oo:p==null&&D(g,m,y,V);break;case Ut:wt(p,g,m,y,T,A,V,P,k);break;default:W&1?F(p,g,m,y,T,A,V,P,k):W&6?Pt(p,g,m,y,T,A,V,P,k):(W&64||W&128)&&b.process(p,g,m,y,T,A,V,P,k,x)}L!=null&&T&&hl(L,p&&p.ref,A,g||p,!g)},v=(p,g,m,y)=>{if(p==null)r(g.el=a(g.children),m,y);else{const T=g.el=p.el;g.children!==p.children&&l(T,g.children)}},S=(p,g,m,y)=>{p==null?r(g.el=c(g.children||""),m,y):g.el=p.el},D=(p,g,m,y)=>{[p.el,p.anchor]=_(p.children,g,m,y,p.el,p.anchor)},N=({el:p,anchor:g},m,y)=>{let T;for(;p&&p!==g;)T=d(p),r(p,m,y),p=T;r(g,m,y)},B=({el:p,anchor:g})=>{let m;for(;p&&p!==g;)m=d(p),s(p),p=m;s(g)},F=(p,g,m,y,T,A,V,P,k)=>{g.type==="svg"?V="svg":g.type==="math"&&(V="mathml"),p==null?oe(g,m,y,T,A,V,P,k):ne(p,g,T,A,V,P,k)},oe=(p,g,m,y,T,A,V,P)=>{let k,b;const{props:L,shapeFlag:W,transition:q,dirs:Y}=p;if(k=p.el=o(p.type,A,L&&L.is,L),W&8?u(k,p.children):W&16&&ee(p.children,k,null,y,T,Ic(p,A),V,P),Y&&dr(p,null,y,"created"),me(k,p,p.scopeId,V,y),L){for(const Ee in L)Ee!=="value"&&!So(Ee)&&i(k,Ee,null,L[Ee],A,p.children,y,T,Ze);"value"in L&&i(k,"value",null,L.value,A),(b=L.onVnodeBeforeMount)&&Jt(b,y,p)}Y&&dr(p,null,y,"beforeMount");const re=qv(T,q);re&&q.beforeEnter(k),r(k,g,m),((b=L&&L.onVnodeMounted)||re||Y)&&gt(()=>{b&&Jt(b,y,p),re&&q.enter(k),Y&&dr(p,null,y,"mounted")},T)},me=(p,g,m,y,T)=>{if(m&&f(p,m),y)for(let A=0;A<y.length;A++)f(p,y[A]);if(T){let A=T.subTree;if(g===A){const V=T.vnode;me(p,V,V.scopeId,V.slotScopeIds,T.parent)}}},ee=(p,g,m,y,T,A,V,P,k=0)=>{for(let b=k;b<p.length;b++){const L=p[b]=P?Vn(p[b]):Zt(p[b]);I(null,L,g,m,y,T,A,V,P)}},ne=(p,g,m,y,T,A,V)=>{const P=g.el=p.el;let{patchFlag:k,dynamicChildren:b,dirs:L}=g;k|=p.patchFlag&16;const W=p.props||Ae,q=g.props||Ae;let Y;if(m&&fr(m,!1),(Y=q.onVnodeBeforeUpdate)&&Jt(Y,m,g,p),L&&dr(g,p,m,"beforeUpdate"),m&&fr(m,!0),b?Ie(p.dynamicChildren,b,P,m,y,Ic(g,T),A):V||pe(p,g,P,null,m,y,Ic(g,T),A,!1),k>0){if(k&16)Je(P,g,W,q,m,y,T);else if(k&2&&W.class!==q.class&&i(P,"class",null,q.class,T),k&4&&i(P,"style",W.style,q.style,T),k&8){const re=g.dynamicProps;for(let Ee=0;Ee<re.length;Ee++){const Pe=re[Ee],Be=W[Pe],Ft=q[Pe];(Ft!==Be||Pe==="value")&&i(P,Pe,Be,Ft,T,p.children,m,y,Ze)}}k&1&&p.children!==g.children&&u(P,g.children)}else!V&&b==null&&Je(P,g,W,q,m,y,T);((Y=q.onVnodeUpdated)||L)&&gt(()=>{Y&&Jt(Y,m,g,p),L&&dr(g,p,m,"updated")},y)},Ie=(p,g,m,y,T,A,V)=>{for(let P=0;P<g.length;P++){const k=p[P],b=g[P],L=k.el&&(k.type===Ut||!$s(k,b)||k.shapeFlag&70)?h(k.el):m;I(k,b,L,null,y,T,A,V,!0)}},Je=(p,g,m,y,T,A,V)=>{if(m!==y){if(m!==Ae)for(const P in m)!So(P)&&!(P in y)&&i(p,P,m[P],null,V,g.children,T,A,Ze);for(const P in y){if(So(P))continue;const k=y[P],b=m[P];k!==b&&P!=="value"&&i(p,P,b,k,V,g.children,T,A,Ze)}"value"in y&&i(p,"value",m.value,y.value,V)}},wt=(p,g,m,y,T,A,V,P,k)=>{const b=g.el=p?p.el:a(""),L=g.anchor=p?p.anchor:a("");let{patchFlag:W,dynamicChildren:q,slotScopeIds:Y}=g;Y&&(P=P?P.concat(Y):Y),p==null?(r(b,m,y),r(L,m,y),ee(g.children,m,L,T,A,V,P,k)):W>0&&W&64&&q&&p.dynamicChildren?(Ie(p.dynamicChildren,q,m,T,A,V,P),(g.key!=null||T&&g===T.subTree)&&Dg(p,g,!0)):pe(p,g,m,L,T,A,V,P,k)},Pt=(p,g,m,y,T,A,V,P,k)=>{g.slotScopeIds=P,p==null?g.shapeFlag&512?T.ctx.activate(g,m,y,V,k):hr(g,m,y,T,A,V,k):kt(p,g,k)},hr=(p,g,m,y,T,A,V)=>{const P=p.component=Zv(p,y,T);if(Tg(p)&&(P.ctx.renderer=x),ew(P),P.asyncDep){if(T&&T.registerDep(P,de),!p.el){const k=P.subTree=he(Sr);S(null,k,g,m)}}else de(P,p,g,m,T,A,V)},kt=(p,g,m)=>{const y=g.component=p.component;if(av(p,g,m))if(y.asyncDep&&!y.asyncResolved){we(y,g,m);return}else y.next=g,tv(y.update),y.effect.dirty=!0,y.update();else g.el=p.el,y.vnode=g},de=(p,g,m,y,T,A,V)=>{const P=()=>{if(p.isMounted){let{next:L,bu:W,u:q,parent:Y,vnode:re}=p;{const Qr=Ng(p);if(Qr){L&&(L.el=re.el,we(p,L,V)),Qr.asyncDep.then(()=>{p.isUnmounted||P()});return}}let Ee=L,Pe;fr(p,!1),L?(L.el=re.el,we(p,L,V)):L=re,W&&Po(W),(Pe=L.props&&L.props.onVnodeBeforeUpdate)&&Jt(Pe,Y,L,re),fr(p,!0);const Be=wc(p),Ft=p.subTree;p.subTree=Be,I(Ft,Be,h(Ft.el),w(Ft),p,T,A),L.el=Be.el,Ee===null&&cv(p,Be.el),q&&gt(q,T),(Pe=L.props&&L.props.onVnodeUpdated)&&gt(()=>Jt(Pe,Y,L,re),T)}else{let L;const{el:W,props:q}=g,{bm:Y,m:re,parent:Ee}=p,Pe=ko(g);if(fr(p,!1),Y&&Po(Y),!Pe&&(L=q&&q.onVnodeBeforeMount)&&Jt(L,Ee,g),fr(p,!0),W&&ge){const Be=()=>{p.subTree=wc(p),ge(W,p.subTree,p,T,null)};Pe?g.type.__asyncLoader().then(()=>!p.isUnmounted&&Be()):Be()}else{const Be=p.subTree=wc(p);I(null,Be,m,y,p,T,A),g.el=Be.el}if(re&&gt(re,T),!Pe&&(L=q&&q.onVnodeMounted)){const Be=g;gt(()=>Jt(L,Ee,Be),T)}(g.shapeFlag&256||Ee&&ko(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&p.a&&gt(p.a,T),p.isMounted=!0,g=m=y=null}},k=p.effect=new lu(P,Ot,()=>yu(b),p.scope),b=p.update=()=>{k.dirty&&k.run()};b.id=p.uid,fr(p,!0),b()},we=(p,g,m)=>{g.component=p;const y=p.vnode.props;p.vnode=g,p.next=null,Lv(p,g.props,y,m),$v(p,g.children,m),Ur(),ld(p),$r()},pe=(p,g,m,y,T,A,V,P,k=!1)=>{const b=p&&p.children,L=p?p.shapeFlag:0,W=g.children,{patchFlag:q,shapeFlag:Y}=g;if(q>0){if(q&128){kn(b,W,m,y,T,A,V,P,k);return}else if(q&256){fn(b,W,m,y,T,A,V,P,k);return}}Y&8?(L&16&&Ze(b,T,A),W!==b&&u(m,W)):L&16?Y&16?kn(b,W,m,y,T,A,V,P,k):Ze(b,T,A,!0):(L&8&&u(m,""),Y&16&&ee(W,m,y,T,A,V,P,k))},fn=(p,g,m,y,T,A,V,P,k)=>{p=p||is,g=g||is;const b=p.length,L=g.length,W=Math.min(b,L);let q;for(q=0;q<W;q++){const Y=g[q]=k?Vn(g[q]):Zt(g[q]);I(p[q],Y,m,null,T,A,V,P,k)}b>L?Ze(p,T,A,!0,!1,W):ee(g,m,y,T,A,V,P,k,W)},kn=(p,g,m,y,T,A,V,P,k)=>{let b=0;const L=g.length;let W=p.length-1,q=L-1;for(;b<=W&&b<=q;){const Y=p[b],re=g[b]=k?Vn(g[b]):Zt(g[b]);if($s(Y,re))I(Y,re,m,null,T,A,V,P,k);else break;b++}for(;b<=W&&b<=q;){const Y=p[W],re=g[q]=k?Vn(g[q]):Zt(g[q]);if($s(Y,re))I(Y,re,m,null,T,A,V,P,k);else break;W--,q--}if(b>W){if(b<=q){const Y=q+1,re=Y<L?g[Y].el:y;for(;b<=q;)I(null,g[b]=k?Vn(g[b]):Zt(g[b]),m,re,T,A,V,P,k),b++}}else if(b>q)for(;b<=W;)pt(p[b],T,A,!0),b++;else{const Y=b,re=b,Ee=new Map;for(b=re;b<=q;b++){const Et=g[b]=k?Vn(g[b]):Zt(g[b]);Et.key!=null&&Ee.set(Et.key,b)}let Pe,Be=0;const Ft=q-re+1;let Qr=!1,Xh=0;const Us=new Array(Ft);for(b=0;b<Ft;b++)Us[b]=0;for(b=Y;b<=W;b++){const Et=p[b];if(Be>=Ft){pt(Et,T,A,!0);continue}let Xt;if(Et.key!=null)Xt=Ee.get(Et.key);else for(Pe=re;Pe<=q;Pe++)if(Us[Pe-re]===0&&$s(Et,g[Pe])){Xt=Pe;break}Xt===void 0?pt(Et,T,A,!0):(Us[Xt-re]=b+1,Xt>=Xh?Xh=Xt:Qr=!0,I(Et,g[Xt],m,null,T,A,V,P,k),Be++)}const Jh=Qr?Hv(Us):is;for(Pe=Jh.length-1,b=Ft-1;b>=0;b--){const Et=re+b,Xt=g[Et],Zh=Et+1<L?g[Et+1].el:y;Us[b]===0?I(null,Xt,m,Zh,T,A,V,P,k):Qr&&(Pe<0||b!==Jh[Pe]?Yt(Xt,m,Zh,2):Pe--)}}},Yt=(p,g,m,y,T=null)=>{const{el:A,type:V,transition:P,children:k,shapeFlag:b}=p;if(b&6){Yt(p.component.subTree,g,m,y);return}if(b&128){p.suspense.move(g,m,y);return}if(b&64){V.move(p,g,m,x);return}if(V===Ut){r(A,g,m);for(let W=0;W<k.length;W++)Yt(k[W],g,m,y);r(p.anchor,g,m);return}if(V===Oo){N(p,g,m);return}if(y!==2&&b&1&&P)if(y===0)P.beforeEnter(A),r(A,g,m),gt(()=>P.enter(A),T);else{const{leave:W,delayLeave:q,afterLeave:Y}=P,re=()=>r(A,g,m),Ee=()=>{W(A,()=>{re(),Y&&Y()})};q?q(A,re,Ee):Ee()}else r(A,g,m)},pt=(p,g,m,y=!1,T=!1)=>{const{type:A,props:V,ref:P,children:k,dynamicChildren:b,shapeFlag:L,patchFlag:W,dirs:q}=p;if(P!=null&&hl(P,null,m,p,!0),L&256){g.ctx.deactivate(p);return}const Y=L&1&&q,re=!ko(p);let Ee;if(re&&(Ee=V&&V.onVnodeBeforeUnmount)&&Jt(Ee,g,p),L&6)co(p.component,m,y);else{if(L&128){p.suspense.unmount(m,y);return}Y&&dr(p,null,g,"beforeUnmount"),L&64?p.type.remove(p,g,m,T,x,y):b&&(A!==Ut||W>0&&W&64)?Ze(b,g,m,!1,!0):(A===Ut&&W&384||!T&&L&16)&&Ze(k,g,m),y&&Gr(p)}(re&&(Ee=V&&V.onVnodeUnmounted)||Y)&&gt(()=>{Ee&&Jt(Ee,g,p),Y&&dr(p,null,g,"unmounted")},m)},Gr=p=>{const{type:g,el:m,anchor:y,transition:T}=p;if(g===Ut){Kr(m,y);return}if(g===Oo){B(p);return}const A=()=>{s(m),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(p.shapeFlag&1&&T&&!T.persisted){const{leave:V,delayLeave:P}=T,k=()=>V(m,A);P?P(p.el,A,k):k()}else A()},Kr=(p,g)=>{let m;for(;p!==g;)m=d(p),s(p),p=m;s(g)},co=(p,g,m)=>{const{bum:y,scope:T,update:A,subTree:V,um:P}=p;y&&Po(y),T.stop(),A&&(A.active=!1,pt(V,p,g,m)),P&&gt(P,g),gt(()=>{p.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ze=(p,g,m,y=!1,T=!1,A=0)=>{for(let V=A;V<p.length;V++)pt(p[V],g,m,y,T)},w=p=>p.shapeFlag&6?w(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el),U=(p,g,m)=>{p==null?g._vnode&&pt(g._vnode,null,null,!0):I(g._vnode||null,p,g,null,null,null,m),ld(),gg(),g._vnode=p},x={p:I,um:pt,m:Yt,r:Gr,mt:hr,mc:ee,pc:pe,pbc:Ie,n:w,o:t};let j,ge;return e&&([j,ge]=e(x)),{render:U,hydrate:j,createApp:Nv(U,j)}}function Ic({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function fr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function qv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Dg(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vn(s[i]),a.el=o.el),n||Dg(o,a)),a.type===Aa&&(a.el=o.el)}}function Hv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Ng(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Ng(e)}const zv=t=>t.__isTeleport,Ut=Symbol.for("v-fgt"),Aa=Symbol.for("v-txt"),Sr=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),ni=[];let jt=null;function te(t=!1){ni.push(jt=t?null:[])}function Wv(){ni.pop(),jt=ni[ni.length-1]||null}let yi=1;function Ed(t){yi+=t}function Vg(t){return t.dynamicChildren=yi>0?jt||is:null,Wv(),yi>0&&jt&&jt.push(t),t}function ye(t,e,n,r,s,i){return Vg(C(t,e,n,r,s,i,!0))}function qt(t,e,n,r,s){return Vg(he(t,e,n,r,s,!0))}function dl(t){return t?t.__v_isVNode===!0:!1}function $s(t,e){return t.type===e.type&&t.key===e.key}const Ra="__vInternal",Mg=({key:t})=>t??null,Do=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||$e(t)||J(t)?{i:Ct,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===Ut?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Mg(e),ref:e&&Do(e),scopeId:yg,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return a?(Iu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Ue(n)?8:16),yi>0&&!o&&jt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&jt.push(c),c}const he=Gv;function Gv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===lv)&&(t=Sr),dl(t)){const a=ps(t,e,!0);return n&&Iu(a,n),yi>0&&!i&&jt&&(a.shapeFlag&6?jt[jt.indexOf(t)]=a:jt.push(a)),a.patchFlag|=-2,a}if(iw(t)&&(t=t.__vccOpts),e){e=Kv(e);let{class:a,style:c}=e;a&&!Ue(a)&&(e.class=ks(a)),Ce(c)&&(cg(c)&&!z(c)&&(c=Xe({},c)),e.style=au(c))}const o=Ue(t)?1:hv(t)?128:zv(t)?64:Ce(t)?4:J(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function Kv(t){return t?cg(t)||Ra in t?Xe({},t):t:null}function ps(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Yv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Mg(a),ref:e&&e.ref?n&&s?z(s)?s.concat(Do(e)):[s,Do(e)]:Do(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ut?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ps(t.ssContent),ssFallback:t.ssFallback&&ps(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Gn(t=" ",e=0){return he(Aa,null,t,e)}function Qv(t,e){const n=he(Oo,null,t);return n.staticCount=e,n}function st(t="",e=!1){return e?(te(),qt(Sr,null,t)):he(Sr,null,t)}function Zt(t){return t==null||typeof t=="boolean"?he(Sr):z(t)?he(Ut,null,t.slice()):typeof t=="object"?Vn(t):he(Aa,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ps(t)}function Iu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Iu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ra in e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[Gn(e)]):n=8);t.children=e,t.shapeFlag|=n}function Yv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=ks([e.class,r.class]));else if(s==="style")e.style=au([e.style,r.style]);else if(ma(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Jt(t,e,n,r=null){Ht(t,e,7,[n,r])}const Xv=bg();let Jv=0;function Zv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Xv,i={uid:Jv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Wp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Pg(r,s),emitsOptions:_g(r,s),emit:null,emitted:null,propsDefaults:Ae,inheritAttrs:r.inheritAttrs,ctx:Ae,data:Ae,props:Ae,attrs:Ae,slots:Ae,refs:Ae,setupState:Ae,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=sv.bind(null,i),t.ce&&t.ce(i),i}let qe=null,Tu,fl;{const t=qp(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Tu=e("__VUE_INSTANCE_SETTERS__",n=>qe=n),fl=e("__VUE_SSR_SETTERS__",n=>ba=n)}const gs=t=>{Tu(t),t.scope.on()},Tr=()=>{qe&&qe.scope.off(),Tu(null)};function Lg(t){return t.vnode.shapeFlag&4}let ba=!1;function ew(t,e=!1){e&&fl(e);const{props:n,children:r}=t.vnode,s=Lg(t);Mv(t,n,s,e),Uv(t,r);const i=s?tw(t,e):void 0;return e&&fl(!1),i}function tw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=wa(new Proxy(t.ctx,bv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?rw(t):null;gs(t),Ur();const i=Wn(r,t,0,[t.props,s]);if($r(),Tr(),$p(i)){if(i.then(Tr,Tr),e)return i.then(o=>{Id(t,o,e)}).catch(o=>{Ea(o,t,0)});t.asyncDep=i}else Id(t,i,e)}else Fg(t,e)}function Id(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=dg(e)),Fg(t,n)}let Td;function Fg(t,e,n){const r=t.type;if(!t.render){if(!e&&Td&&!r.render){const s=r.template||wu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Xe(Xe({isCustomElement:i,delimiters:a},o),c);r.render=Td(s,l)}}t.render=r.render||Ot}{gs(t),Ur();try{Sv(t)}finally{$r(),Tr()}}}function nw(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return vt(t,"get","$attrs"),e[n]}}))}function rw(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return nw(t)},slots:t.slots,emit:t.emit,expose:e}}function Sa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(dg(wa(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ti)return ti[n](t)},has(e,n){return n in e||n in ti}}))}function sw(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function iw(t){return J(t)&&"__vccOpts"in t}const ht=(t,e)=>W0(t,e,ba);function Ug(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!z(e)?dl(e)?he(t,null,[e]):he(t,e):he(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&dl(n)&&(n=[n]),he(t,e,n))}const ow="3.4.3",aw="http://www.w3.org/2000/svg",cw="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,Cd=Mn&&Mn.createElement("template"),lw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Mn.createElementNS(aw,t):e==="mathml"?Mn.createElementNS(cw,t):Mn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Cd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Cd.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},uw=Symbol("_vtc");function hw(t,e,n){const r=t[uw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const dw=Symbol("_vod"),fw=Symbol("");function pw(t,e,n){const r=t.style,s=Ue(n);if(n&&!s){if(e&&!Ue(e))for(const i in e)n[i]==null&&pl(r,i,"");for(const i in n)pl(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[fw];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");dw in t&&(r.display=i)}}const Ad=/\s*!important$/;function pl(t,e,n){if(z(n))n.forEach(r=>pl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=gw(t,e);Ad.test(n)?t.setProperty(Ps(r),n.replace(Ad,""),"important"):t[r]=n}}const Rd=["Webkit","Moz","ms"],Tc={};function gw(t,e){const n=Tc[e];if(n)return n;let r=un(e);if(r!=="filter"&&r in t)return Tc[e]=r;r=ya(r);for(let s=0;s<Rd.length;s++){const i=Rd[s]+r;if(i in t)return Tc[e]=i}return e}const bd="http://www.w3.org/1999/xlink";function mw(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(bd,e.slice(6,e.length)):t.setAttributeNS(bd,e,n);else{const i=I0(e);n==null||i&&!Hp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function _w(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Hp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function mn(t,e,n,r){t.addEventListener(e,n,r)}function yw(t,e,n,r){t.removeEventListener(e,n,r)}const Sd=Symbol("_vei");function vw(t,e,n,r,s=null){const i=t[Sd]||(t[Sd]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=ww(e);if(r){const l=i[e]=Tw(r,s);mn(t,a,l,c)}else o&&(yw(t,a,o,c),i[e]=void 0)}}const Pd=/(?:Once|Passive|Capture)$/;function ww(t){let e;if(Pd.test(t)){e={};let r;for(;r=t.match(Pd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Ps(t.slice(2)),e]}let Cc=0;const Ew=Promise.resolve(),Iw=()=>Cc||(Ew.then(()=>Cc=0),Cc=Date.now());function Tw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ht(Cw(r,n.value),e,5,[r])};return n.value=t,n.attached=Iw(),n}function Cw(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const kd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Aw=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?hw(t,r,l):e==="style"?pw(t,n,r):ma(e)?su(e)||vw(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Rw(t,e,r,l))?_w(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),mw(t,e,r,l))};function Rw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&kd(e)&&J(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return kd(e)&&Ue(n)?!1:e in t}const er=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Po(e,n):e};function bw(t){t.target.composing=!0}function xd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Nt=Symbol("_assign"),jn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Nt]=er(s);const i=r||s.props&&s.props.type==="number";mn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=qo(a)),t[Nt](a)}),n&&mn(t,"change",()=>{t.value=t.value.trim()}),e||(mn(t,"compositionstart",bw),mn(t,"compositionend",xd),mn(t,"change",xd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Nt]=er(i),t.composing)return;const o=s||t.type==="number"?qo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Sw={deep:!0,created(t,e,n){t[Nt]=er(n),mn(t,"change",()=>{const r=t._modelValue,s=ms(t),i=t.checked,o=t[Nt];if(z(r)){const a=cu(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Ss(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o($g(t,i))})},mounted:Od,beforeUpdate(t,e,n){t[Nt]=er(n),Od(t,e,n)}};function Od(t,{value:e,oldValue:n},r){t._modelValue=e,z(e)?t.checked=cu(e,r.props.value)>-1:Ss(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=br(e,$g(t,!0)))}const Pw={created(t,{value:e},n){t.checked=br(e,n.props.value),t[Nt]=er(n),mn(t,"change",()=>{t[Nt](ms(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Nt]=er(r),e!==n&&(t.checked=br(e,r.props.value))}},kw={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Ss(e);mn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?qo(ms(o)):ms(o));t[Nt](t.multiple?s?new Set(i):i:i[0])}),t[Nt]=er(r)},mounted(t,{value:e}){Dd(t,e)},beforeUpdate(t,e,n){t[Nt]=er(n)},updated(t,{value:e}){Dd(t,e)}};function Dd(t,e){const n=t.multiple;if(!(n&&!z(e)&&!Ss(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=ms(i);if(n)z(e)?i.selected=cu(e,o)>-1:i.selected=e.has(o);else if(br(ms(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ms(t){return"_value"in t?t._value:t.value}function $g(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const o3={created(t,e,n){mo(t,e,n,null,"created")},mounted(t,e,n){mo(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){mo(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){mo(t,e,n,r,"updated")}};function xw(t,e){switch(t){case"SELECT":return kw;case"TEXTAREA":return jn;default:switch(e){case"checkbox":return Sw;case"radio":return Pw;default:return jn}}}function mo(t,e,n,r,s){const o=xw(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const Ow=["ctrl","shift","alt","meta"],Dw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ow.some(n=>t[`${n}Key`]&&!e.includes(n))},Bg=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=Dw[e[o]];if(a&&a(s,e))return}return t(s,...i)})},Nw=Xe({patchProp:Aw},lw);let Nd;function Vw(){return Nd||(Nd=Bv(Nw))}const Mw=(...t)=>{const e=Vw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Fw(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,Lw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Lw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fw(t){return Ue(t)?document.querySelector(t):t}var Uw=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let jg;const Pa=t=>jg=t,qg=Symbol();function gl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ri;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ri||(ri={}));function $w(){const t=Gp(!0),e=t.run(()=>Me({}));let n=[],r=[];const s=wa({install(i){Pa(s),s._a=i,i.provide(qg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!Uw?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Hg=()=>{};function Vd(t,e,n,r=Hg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Kp()&&A0(s),s}function Yr(t,...e){t.slice().forEach(n=>{n(...e)})}const Bw=t=>t();function ml(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];gl(s)&&gl(r)&&t.hasOwnProperty(n)&&!$e(r)&&!zn(r)?t[n]=ml(s,r):t[n]=r}return t}const jw=Symbol();function qw(t){return!gl(t)||!t.hasOwnProperty(jw)}const{assign:Nn}=Object;function Hw(t){return!!($e(t)&&t.effect)}function zw(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=Y0(n.state.value[t]);return Nn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=wa(ht(()=>{Pa(n);const f=n._s.get(t);return o[d].call(f,f)})),h),{}))}return c=zg(t,l,e,n,r,!0),c}function zg(t,e,n={},r,s,i){let o;const a=Nn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],f;const _=r.state.value[t];!i&&!_&&(r.state.value[t]={}),Me({});let I;function v(ee){let ne;l=u=!1,typeof ee=="function"?(ee(r.state.value[t]),ne={type:ri.patchFunction,storeId:t,events:f}):(ml(r.state.value[t],ee),ne={type:ri.patchObject,payload:ee,storeId:t,events:f});const Ie=I=Symbol();_u().then(()=>{I===Ie&&(l=!0)}),u=!0,Yr(h,ne,r.state.value[t])}const S=i?function(){const{state:ne}=n,Ie=ne?ne():{};this.$patch(Je=>{Nn(Je,Ie)})}:Hg;function D(){o.stop(),h=[],d=[],r._s.delete(t)}function N(ee,ne){return function(){Pa(r);const Ie=Array.from(arguments),Je=[],wt=[];function Pt(de){Je.push(de)}function hr(de){wt.push(de)}Yr(d,{args:Ie,name:ee,store:F,after:Pt,onError:hr});let kt;try{kt=ne.apply(this&&this.$id===t?this:F,Ie)}catch(de){throw Yr(wt,de),de}return kt instanceof Promise?kt.then(de=>(Yr(Je,de),de)).catch(de=>(Yr(wt,de),Promise.reject(de))):(Yr(Je,kt),kt)}}const B={_p:r,$id:t,$onAction:Vd.bind(null,d),$patch:v,$reset:S,$subscribe(ee,ne={}){const Ie=Vd(h,ee,ne.detached,()=>Je()),Je=o.run(()=>ei(()=>r.state.value[t],wt=>{(ne.flush==="sync"?u:l)&&ee({storeId:t,type:ri.direct,events:f},wt)},Nn({},c,ne)));return Ie},$dispose:D},F=Bi(B);r._s.set(t,F);const me=(r._a&&r._a.runWithContext||Bw)(()=>r._e.run(()=>(o=Gp()).run(e)));for(const ee in me){const ne=me[ee];if($e(ne)&&!Hw(ne)||zn(ne))i||(_&&qw(ne)&&($e(ne)?ne.value=_[ee]:ml(ne,_[ee])),r.state.value[t][ee]=ne);else if(typeof ne=="function"){const Ie=N(ee,ne);me[ee]=Ie,a.actions[ee]=ne}}return Nn(F,me),Nn(ue(F),me),Object.defineProperty(F,"$state",{get:()=>r.state.value[t],set:ee=>{v(ne=>{Nn(ne,ee)})}}),r._p.forEach(ee=>{Nn(F,o.run(()=>ee({store:F,app:r._a,pinia:r,options:a})))}),_&&i&&n.hydrate&&n.hydrate(F.$state,_),l=!0,u=!0,F}function Ww(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Vv();return a=a||(l?Dt(qg,null):null),a&&Pa(a),a=jg,a._s.has(r)||(i?zg(r,e,s,a):zw(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Jr=typeof window<"u";function Gw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Ac(t,e){const n={};for(const r in e){const s=e[r];n[r]=Wt(s)?s.map(t):t(s)}return n}const si=()=>{},Wt=Array.isArray,Kw=/\/$/,Qw=t=>t.replace(Kw,"");function Rc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Zw(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function Yw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Md(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Xw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&_s(e.matched[r],n.matched[s])&&Wg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function _s(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Wg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Jw(t[n],e[n]))return!1;return!0}function Jw(t,e){return Wt(t)?Ld(t,e):Wt(e)?Ld(e,t):t===e}function Ld(t,e){return Wt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Zw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var vi;(function(t){t.pop="pop",t.push="push"})(vi||(vi={}));var ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ii||(ii={}));function eE(t){if(!t)if(Jr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Qw(t)}const tE=/^[^#]+#/;function nE(t,e){return t.replace(tE,"#")+e}function rE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ka=()=>({left:window.pageXOffset,top:window.pageYOffset});function sE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=rE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Fd(t,e){return(history.state?history.state.position-e:-1)+t}const _l=new Map;function iE(t,e){_l.set(t,e)}function oE(t){const e=_l.get(t);return _l.delete(t),e}let aE=()=>location.protocol+"//"+location.host;function Gg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Md(c,"")}return Md(n,t)+r+s}function cE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=Gg(t,location),_=n.value,I=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===_){o=null;return}v=I?d.position-I.position:0}else r(f);s.forEach(S=>{S(n.value,_,{delta:v,type:vi.pop,direction:v?v>0?ii.forward:ii.back:ii.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const _=s.indexOf(d);_>-1&&s.splice(_,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(_e({},d.state,{scroll:ka()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Ud(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ka():null}}function lE(t){const{history:e,location:n}=window,r={value:Gg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:aE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=_e({},e.state,Ud(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=_e({},s.value,e.state,{forward:c,scroll:ka()});i(u.current,u,!0);const h=_e({},Ud(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function uE(t){t=eE(t);const e=lE(t),n=cE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:nE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function hE(t){return typeof t=="string"||t&&typeof t=="object"}function Kg(t){return typeof t=="string"||typeof t=="symbol"}const On={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Qg=Symbol("");var $d;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})($d||($d={}));function ys(t,e){return _e(new Error,{type:t,[Qg]:!0},e)}function pn(t,e){return t instanceof Error&&Qg in t&&(e==null||!!(t.type&e))}const Bd="[^/]+?",dE={sensitive:!1,strict:!1,start:!0,end:!0},fE=/[.+*?^${}()[\]/\\]/g;function pE(t,e){const n=_e({},dE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(fE,"\\$&"),f+=40;else if(d.type===1){const{value:_,repeatable:I,optional:v,regexp:S}=d;i.push({name:_,repeatable:I,optional:v});const D=S||Bd;if(D!==Bd){f+=10;try{new RegExp(`(${D})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${_}" (${D}): `+B.message)}}let N=I?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(N=v&&l.length<2?`(?:/${N})`:"/"+N),v&&(N+="?"),s+=N,f+=20,v&&(f+=-8),I&&(f+=-20),D===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",_=i[d-1];h[_.name]=f&&_.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:_,repeatable:I,optional:v}=f,S=_ in l?l[_]:"";if(Wt(S)&&!I)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const D=Wt(S)?S.join("/"):S;if(!D)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${_}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function gE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function mE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=gE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(jd(r))return 1;if(jd(s))return-1}return s.length-r.length}function jd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const _E={type:0,value:""},yE=/[a-zA-Z0-9_]/;function vE(t){if(!t)return[[]];if(t==="/")return[[_E]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:yE.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function wE(t,e,n){const r=pE(vE(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function EE(t,e){const n=[],r=new Map;e=zd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,_=IE(u);_.aliasOf=d&&d.record;const I=zd(e,u),v=[_];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of N)v.push(_e({},_,{components:d?d.record.components:_.components,path:B,aliasOf:d?d.record:_}))}let S,D;for(const N of v){const{path:B}=N;if(h&&B[0]!=="/"){const F=h.record.path,oe=F[F.length-1]==="/"?"":"/";N.path=h.record.path+(B&&oe+B)}if(S=wE(N,h,I),d?d.alias.push(S):(D=D||S,D!==S&&D.alias.push(S),f&&u.name&&!Hd(S)&&o(u.name)),_.children){const F=_.children;for(let oe=0;oe<F.length;oe++)i(F[oe],S,d&&d.children[oe])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return D?()=>{o(D)}:si}function o(u){if(Kg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&mE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Yg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Hd(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},_,I;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ys(1,{location:u});I=d.record.name,f=_e(qd(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&qd(u.params,d.keys.map(D=>D.name))),_=d.stringify(f)}else if("path"in u)_=u.path,d=n.find(D=>D.re.test(_)),d&&(f=d.parse(_),I=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw ys(1,{location:u,currentLocation:h});I=d.record.name,f=_e({},h.params,u.params),_=d.stringify(f)}const v=[];let S=d;for(;S;)v.unshift(S.record),S=S.parent;return{name:I,path:_,params:f,matched:v,meta:CE(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function qd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function IE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:TE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function TE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Hd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CE(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function zd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Yg(t,e){return e.children.some(n=>n===t||Yg(t,n))}const Xg=/#/g,AE=/&/g,RE=/\//g,bE=/=/g,SE=/\?/g,Jg=/\+/g,PE=/%5B/g,kE=/%5D/g,Zg=/%5E/g,xE=/%60/g,em=/%7B/g,OE=/%7C/g,tm=/%7D/g,DE=/%20/g;function Cu(t){return encodeURI(""+t).replace(OE,"|").replace(PE,"[").replace(kE,"]")}function NE(t){return Cu(t).replace(em,"{").replace(tm,"}").replace(Zg,"^")}function yl(t){return Cu(t).replace(Jg,"%2B").replace(DE,"+").replace(Xg,"%23").replace(AE,"%26").replace(xE,"`").replace(em,"{").replace(tm,"}").replace(Zg,"^")}function VE(t){return yl(t).replace(bE,"%3D")}function ME(t){return Cu(t).replace(Xg,"%23").replace(SE,"%3F")}function LE(t){return t==null?"":ME(t).replace(RE,"%2F")}function Ko(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function FE(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Jg," "),o=i.indexOf("="),a=Ko(o<0?i:i.slice(0,o)),c=o<0?null:Ko(i.slice(o+1));if(a in e){let l=e[a];Wt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Wd(t){let e="";for(let n in t){const r=t[n];if(n=VE(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Wt(r)?r.map(i=>i&&yl(i)):[r&&yl(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function UE(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Wt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const $E=Symbol(""),Gd=Symbol(""),xa=Symbol(""),Au=Symbol(""),vl=Symbol("");function Bs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Ln(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ys(4,{from:n,to:e})):h instanceof Error?a(h):hE(h)?a(ys(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function bc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(BE(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Ln(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=Gw(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Ln(d,n,r,i,o)()}))}}return s}function BE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Kd(t){const e=Dt(xa),n=Dt(Au),r=ht(()=>e.resolve(le(t.to))),s=ht(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(_s.bind(null,u));if(d>-1)return d;const f=Qd(c[l-2]);return l>1&&Qd(u)===f&&h[h.length-1].path!==f?h.findIndex(_s.bind(null,c[l-2])):d}),i=ht(()=>s.value>-1&&zE(n.params,r.value.params)),o=ht(()=>s.value>-1&&s.value===n.matched.length-1&&Wg(n.params,r.value.params));function a(c={}){return HE(c)?e[le(t.replace)?"replace":"push"](le(t.to)).catch(si):Promise.resolve()}return{route:r,href:ht(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const jE=Ig({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Kd,setup(t,{slots:e}){const n=Bi(Kd(t)),{options:r}=Dt(xa),s=ht(()=>({[Yd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Yd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ug("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qE=jE;function HE(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function zE(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Wt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Qd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Yd=(t,e,n)=>t??e??n,WE=Ig({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Dt(vl),s=ht(()=>t.route||r.value),i=Dt(Gd,0),o=ht(()=>{let l=le(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=ht(()=>s.value.matched[o.value]);xo(Gd,ht(()=>o.value+1)),xo($E,a),xo(vl,s);const c=Me();return ei(()=>[c.value,a.value,t.name],([l,u,h],[d,f,_])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!_s(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(I=>I(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Xd(n.default,{Component:d,route:l});const f=h.props[u],_=f?f===!0?l.params:typeof f=="function"?f(l):f:null,v=Ug(d,_e({},_,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Xd(n.default,{Component:v,route:l})||v}}});function Xd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const nm=WE;function GE(t){const e=EE(t.routes,t),n=t.parseQuery||FE,r=t.stringifyQuery||Wd,s=t.history,i=Bs(),o=Bs(),a=Bs(),c=G0(On);let l=On;Jr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ac.bind(null,w=>""+w),h=Ac.bind(null,LE),d=Ac.bind(null,Ko);function f(w,U){let x,j;return Kg(w)?(x=e.getRecordMatcher(w),j=U):j=w,e.addRoute(j,x)}function _(w){const U=e.getRecordMatcher(w);U&&e.removeRoute(U)}function I(){return e.getRoutes().map(w=>w.record)}function v(w){return!!e.getRecordMatcher(w)}function S(w,U){if(U=_e({},U||c.value),typeof w=="string"){const m=Rc(n,w,U.path),y=e.resolve({path:m.path},U),T=s.createHref(m.fullPath);return _e(m,y,{params:d(y.params),hash:Ko(m.hash),redirectedFrom:void 0,href:T})}let x;if("path"in w)x=_e({},w,{path:Rc(n,w.path,U.path).path});else{const m=_e({},w.params);for(const y in m)m[y]==null&&delete m[y];x=_e({},w,{params:h(m)}),U.params=h(U.params)}const j=e.resolve(x,U),ge=w.hash||"";j.params=u(d(j.params));const p=Yw(r,_e({},w,{hash:NE(ge),path:j.path})),g=s.createHref(p);return _e({fullPath:p,hash:ge,query:r===Wd?UE(w.query):w.query||{}},j,{redirectedFrom:void 0,href:g})}function D(w){return typeof w=="string"?Rc(n,w,c.value.path):_e({},w)}function N(w,U){if(l!==w)return ys(8,{from:U,to:w})}function B(w){return me(w)}function F(w){return B(_e(D(w),{replace:!0}))}function oe(w){const U=w.matched[w.matched.length-1];if(U&&U.redirect){const{redirect:x}=U;let j=typeof x=="function"?x(w):x;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=D(j):{path:j},j.params={}),_e({query:w.query,hash:w.hash,params:"path"in j?{}:w.params},j)}}function me(w,U){const x=l=S(w),j=c.value,ge=w.state,p=w.force,g=w.replace===!0,m=oe(x);if(m)return me(_e(D(m),{state:typeof m=="object"?_e({},ge,m.state):ge,force:p,replace:g}),U||x);const y=x;y.redirectedFrom=U;let T;return!p&&Xw(r,j,x)&&(T=ys(16,{to:y,from:j}),Yt(j,j,!0,!1)),(T?Promise.resolve(T):Ie(y,j)).catch(A=>pn(A)?pn(A,2)?A:kn(A):pe(A,y,j)).then(A=>{if(A){if(pn(A,2))return me(_e({replace:g},D(A.to),{state:typeof A.to=="object"?_e({},ge,A.to.state):ge,force:p}),U||y)}else A=wt(y,j,!0,g,ge);return Je(y,j,A),A})}function ee(w,U){const x=N(w,U);return x?Promise.reject(x):Promise.resolve()}function ne(w){const U=Kr.values().next().value;return U&&typeof U.runWithContext=="function"?U.runWithContext(w):w()}function Ie(w,U){let x;const[j,ge,p]=KE(w,U);x=bc(j.reverse(),"beforeRouteLeave",w,U);for(const m of j)m.leaveGuards.forEach(y=>{x.push(Ln(y,w,U))});const g=ee.bind(null,w,U);return x.push(g),Ze(x).then(()=>{x=[];for(const m of i.list())x.push(Ln(m,w,U));return x.push(g),Ze(x)}).then(()=>{x=bc(ge,"beforeRouteUpdate",w,U);for(const m of ge)m.updateGuards.forEach(y=>{x.push(Ln(y,w,U))});return x.push(g),Ze(x)}).then(()=>{x=[];for(const m of p)if(m.beforeEnter)if(Wt(m.beforeEnter))for(const y of m.beforeEnter)x.push(Ln(y,w,U));else x.push(Ln(m.beforeEnter,w,U));return x.push(g),Ze(x)}).then(()=>(w.matched.forEach(m=>m.enterCallbacks={}),x=bc(p,"beforeRouteEnter",w,U),x.push(g),Ze(x))).then(()=>{x=[];for(const m of o.list())x.push(Ln(m,w,U));return x.push(g),Ze(x)}).catch(m=>pn(m,8)?m:Promise.reject(m))}function Je(w,U,x){a.list().forEach(j=>ne(()=>j(w,U,x)))}function wt(w,U,x,j,ge){const p=N(w,U);if(p)return p;const g=U===On,m=Jr?history.state:{};x&&(j||g?s.replace(w.fullPath,_e({scroll:g&&m&&m.scroll},ge)):s.push(w.fullPath,ge)),c.value=w,Yt(w,U,x,g),kn()}let Pt;function hr(){Pt||(Pt=s.listen((w,U,x)=>{if(!co.listening)return;const j=S(w),ge=oe(j);if(ge){me(_e(ge,{replace:!0}),j).catch(si);return}l=j;const p=c.value;Jr&&iE(Fd(p.fullPath,x.delta),ka()),Ie(j,p).catch(g=>pn(g,12)?g:pn(g,2)?(me(g.to,j).then(m=>{pn(m,20)&&!x.delta&&x.type===vi.pop&&s.go(-1,!1)}).catch(si),Promise.reject()):(x.delta&&s.go(-x.delta,!1),pe(g,j,p))).then(g=>{g=g||wt(j,p,!1),g&&(x.delta&&!pn(g,8)?s.go(-x.delta,!1):x.type===vi.pop&&pn(g,20)&&s.go(-1,!1)),Je(j,p,g)}).catch(si)}))}let kt=Bs(),de=Bs(),we;function pe(w,U,x){kn(w);const j=de.list();return j.length?j.forEach(ge=>ge(w,U,x)):console.error(w),Promise.reject(w)}function fn(){return we&&c.value!==On?Promise.resolve():new Promise((w,U)=>{kt.add([w,U])})}function kn(w){return we||(we=!w,hr(),kt.list().forEach(([U,x])=>w?x(w):U()),kt.reset()),w}function Yt(w,U,x,j){const{scrollBehavior:ge}=t;if(!Jr||!ge)return Promise.resolve();const p=!x&&oE(Fd(w.fullPath,0))||(j||!x)&&history.state&&history.state.scroll||null;return _u().then(()=>ge(w,U,p)).then(g=>g&&sE(g)).catch(g=>pe(g,w,U))}const pt=w=>s.go(w);let Gr;const Kr=new Set,co={currentRoute:c,listening:!0,addRoute:f,removeRoute:_,hasRoute:v,getRoutes:I,resolve:S,options:t,push:B,replace:F,go:pt,back:()=>pt(-1),forward:()=>pt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:de.add,isReady:fn,install(w){const U=this;w.component("RouterLink",qE),w.component("RouterView",nm),w.config.globalProperties.$router=U,Object.defineProperty(w.config.globalProperties,"$route",{enumerable:!0,get:()=>le(c)}),Jr&&!Gr&&c.value===On&&(Gr=!0,B(s.location).catch(ge=>{}));const x={};for(const ge in On)Object.defineProperty(x,ge,{get:()=>c.value[ge],enumerable:!0});w.provide(xa,U),w.provide(Au,og(x)),w.provide(vl,c);const j=w.unmount;Kr.add(w),w.unmount=function(){Kr.delete(w),Kr.size<1&&(l=On,Pt&&Pt(),Pt=null,c.value=On,Gr=!1,we=!1),j()}}};function Ze(w){return w.reduce((U,x)=>U.then(()=>ne(x)),Promise.resolve())}return co}function KE(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>_s(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>_s(l,c))||s.push(c))}return[n,r,s]}function Ru(){return Dt(xa)}function bu(){return Dt(Au)}const QE="/assets/gameingstore logo-WZjykKF_.png",Sn=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},YE={},XE={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},JE=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),ZE=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),eI=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M12.2796 3.71579C12.097 3.66261 11.903 3.66261 11.7203 3.71579C11.6678 3.7311 11.5754 3.7694 11.3789 3.91817C11.1723 4.07463 10.9193 4.29855 10.5251 4.64896L5.28544 9.3064C4.64309 9.87739 4.46099 10.0496 4.33439 10.24C4.21261 10.4232 4.12189 10.6252 4.06588 10.8379C4.00765 11.0591 3.99995 11.3095 3.99995 12.169V17.17C3.99995 18.041 4.00076 18.6331 4.03874 19.0905C4.07573 19.536 4.14275 19.7634 4.22513 19.9219C4.41488 20.2872 4.71272 20.5851 5.07801 20.7748C5.23658 20.8572 5.46397 20.9242 5.90941 20.9612C6.36681 20.9992 6.95893 21 7.82995 21H7.99995V18C7.99995 15.7909 9.79081 14 12 14C14.2091 14 16 15.7909 16 18V21H16.17C17.041 21 17.6331 20.9992 18.0905 20.9612C18.5359 20.9242 18.7633 20.8572 18.9219 20.7748C19.2872 20.5851 19.585 20.2872 19.7748 19.9219C19.8572 19.7634 19.9242 19.536 19.9612 19.0905C19.9991 18.6331 20 18.041 20 17.17V12.169C20 11.3095 19.9923 11.0591 19.934 10.8379C19.878 10.6252 19.7873 10.4232 19.6655 10.24C19.5389 10.0496 19.3568 9.87739 18.7145 9.3064L13.4748 4.64896C13.0806 4.29855 12.8276 4.07463 12.621 3.91817C12.4245 3.7694 12.3321 3.7311 12.2796 3.71579ZM11.1611 1.79556C11.709 1.63602 12.2909 1.63602 12.8388 1.79556C13.2189 1.90627 13.5341 2.10095 13.8282 2.32363C14.1052 2.53335 14.4172 2.81064 14.7764 3.12995L20.0432 7.81159C20.0716 7.83679 20.0995 7.86165 20.1272 7.88619C20.6489 8.34941 21.0429 8.69935 21.3311 9.13277C21.5746 9.49916 21.7561 9.90321 21.8681 10.3287C22.0006 10.832 22.0004 11.359 22 12.0566C22 12.0936 22 12.131 22 12.169V17.212C22 18.0305 22 18.7061 21.9543 19.2561C21.9069 19.8274 21.805 20.3523 21.5496 20.8439C21.1701 21.5745 20.5744 22.1701 19.8439 22.5496C19.3522 22.805 18.8274 22.9069 18.256 22.9543C17.706 23 17.0305 23 16.2119 23H15.805C15.7972 23 15.7894 23 15.7814 23C15.6603 23 15.5157 23.0001 15.3883 22.9895C15.2406 22.9773 15.0292 22.9458 14.8085 22.8311C14.5345 22.6888 14.3111 22.4654 14.1688 22.1915C14.0542 21.9707 14.0227 21.7593 14.0104 21.6116C13.9998 21.4843 13.9999 21.3396 13.9999 21.2185L14 18C14 16.8954 13.1045 16 12 16C10.8954 16 9.99995 16.8954 9.99995 18L9.99996 21.2185C10 21.3396 10.0001 21.4843 9.98949 21.6116C9.97722 21.7593 9.94572 21.9707 9.83107 22.1915C9.68876 22.4654 9.46538 22.6888 9.19142 22.8311C8.9707 22.9458 8.75929 22.9773 8.6116 22.9895C8.48423 23.0001 8.33959 23 8.21847 23C8.21053 23 8.20268 23 8.19495 23H7.78798C6.96944 23 6.29389 23 5.74388 22.9543C5.17253 22.9069 4.64769 22.805 4.15605 22.5496C3.42548 22.1701 2.8298 21.5745 2.4503 20.8439C2.19492 20.3523 2.09305 19.8274 2.0456 19.2561C1.99993 18.7061 1.99994 18.0305 1.99995 17.212L1.99995 12.169C1.99995 12.131 1.99993 12.0936 1.99992 12.0566C1.99955 11.359 1.99928 10.832 2.1318 10.3287C2.24383 9.90321 2.42528 9.49916 2.66884 9.13277C2.95696 8.69935 3.35105 8.34941 3.87272 7.8862C3.90036 7.86165 3.92835 7.83679 3.95671 7.81159L9.22354 3.12996C9.58274 2.81064 9.89467 2.53335 10.1717 2.32363C10.4658 2.10095 10.781 1.90627 11.1611 1.79556Z",fill:"currentColor"})],-1),tI=[JE,ZE,eI];function nI(t,e){return te(),ye("svg",XE,tI)}const rI=Sn(YE,[["render",nI]]),sI={},iI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},oI=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),aI=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),cI=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{d:"M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),C("path",{d:"M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),C("path",{d:"M6 9H12",stroke:"currentColor","stroke-width":"1.5","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),C("path",{d:"M6.75 13H11.25",stroke:"currentColor","stroke-width":"1.5","stroke-linecurrentcap":"round","stroke-linejoin":"round"})],-1),lI=[oI,aI,cI];function uI(t,e){return te(),ye("svg",iI,lI)}const hI=Sn(sI,[["render",uI]]),dI={},fI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},pI=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),gI=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),mI=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M1 3C1 2.44772 1.44772 2 2 2C3.62481 2 5.06733 3.03971 5.58114 4.58114L5.72076 5L18.03 5C18.6859 4.99998 19.2437 4.99996 19.6951 5.04029C20.165 5.08226 20.6347 5.17512 21.064 5.43584C21.6667 5.80183 22.1211 6.36838 22.3477 7.03605C22.5091 7.51168 22.4978 7.99036 22.4369 8.45816C22.3783 8.90755 22.2573 9.45209 22.115 10.0924L21.8088 11.4704C21.664 12.1218 21.5435 12.6641 21.4106 13.1043C21.2716 13.5649 21.1006 13.9803 20.8231 14.36C20.4058 14.931 19.8446 15.3812 19.1967 15.6646C18.7658 15.8532 18.3232 15.93 17.8434 15.9658C17.3849 16 16.8295 16 16.1621 16H10.8379C10.1705 16 9.61512 16 9.15656 15.9658C8.67678 15.93 8.23421 15.8532 7.80328 15.6646C7.15536 15.3812 6.59418 14.931 6.17692 14.36C5.89941 13.9803 5.72844 13.5649 5.58939 13.1043C5.45649 12.6641 5.33602 12.1219 5.19125 11.4704L4.035 6.26729L3.68377 5.21359C3.44219 4.48885 2.76395 4 2 4C1.44772 4 1 3.55228 1 3ZM6.24662 7L7.13569 11.0008C7.29042 11.6971 7.39528 12.166 7.50404 12.5263C7.60908 12.8742 7.69899 13.0531 7.79172 13.18C8.00035 13.4655 8.28094 13.6906 8.6049 13.8323C8.74888 13.8953 8.94301 13.9443 9.30546 13.9713C9.68076 13.9994 10.1612 14 10.8745 14H16.1255C16.8388 14 17.3192 13.9994 17.6945 13.9713C18.057 13.9443 18.2511 13.8953 18.3951 13.8323C18.7191 13.6906 18.9997 13.4655 19.2083 13.18C19.301 13.0531 19.3909 12.8742 19.496 12.5263C19.6047 12.166 19.7096 11.6971 19.8643 11.0008L20.153 9.70159C20.3075 9.00651 20.408 8.54985 20.4536 8.19974C20.4982 7.858 20.4722 7.73312 20.4537 7.67868C20.3782 7.45613 20.2267 7.26728 20.0259 7.14528C19.9767 7.11544 19.8605 7.06302 19.5172 7.03235C19.1655 7.00094 18.6979 7 17.9859 7H6.24662Z",fill:"currentColor"}),C("path",{d:"M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z",fill:"currentColor"}),C("path",{d:"M18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21Z",fill:"currentColor"})],-1),_I=[pI,gI,mI];function yI(t,e){return te(),ye("svg",fI,_I)}const vI=Sn(dI,[["render",yI]]),wI={},EI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},II=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),TI=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),CI=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M5.3783 2C5.3905 2 5.40273 2 5.415 2L7.62171 2C8.01734 1.99998 8.37336 1.99996 8.66942 2.02454C8.98657 2.05088 9.32336 2.11052 9.65244 2.28147C10.109 2.51866 10.4813 2.89096 10.7185 3.34757C10.8895 3.67665 10.9491 4.01343 10.9755 4.33059C11 4.62664 11 4.98265 11 5.37828V7.62172C11 8.01735 11 8.37337 10.9755 8.66942C10.9491 8.98657 10.8895 9.32336 10.7185 9.65244C10.4813 10.109 10.109 10.4813 9.65244 10.7185C9.32336 10.8895 8.98657 10.9491 8.66942 10.9755C8.37337 11 8.01735 11 7.62172 11H5.37828C4.98265 11 4.62664 11 4.33059 10.9755C4.01343 10.9491 3.67665 10.8895 3.34757 10.7185C2.89096 10.4813 2.51866 10.109 2.28147 9.65244C2.11052 9.32336 2.05088 8.98657 2.02454 8.66942C1.99996 8.37336 1.99998 8.01734 2 7.62171L2 5.415C2 5.40273 2 5.3905 2 5.3783C1.99998 4.98266 1.99996 4.62664 2.02454 4.33059C2.05088 4.01343 2.11052 3.67665 2.28147 3.34757C2.51866 2.89096 2.89096 2.51866 3.34757 2.28147C3.67665 2.11052 4.01343 2.05088 4.33059 2.02454C4.62664 1.99996 4.98266 1.99998 5.3783 2ZM4.27752 4.05297C4.27226 4.05488 4.27001 4.05604 4.26952 4.0563C4.17819 4.10373 4.10373 4.17819 4.0563 4.26952C4.05604 4.27001 4.05488 4.27226 4.05297 4.27752C4.05098 4.28299 4.04767 4.29312 4.04372 4.30961C4.03541 4.34427 4.02554 4.40145 4.01768 4.49611C4.00081 4.69932 4 4.9711 4 5.415V7.585C4 8.02891 4.00081 8.30068 4.01768 8.5039C4.02554 8.59855 4.03541 8.65574 4.04372 8.6904C4.04767 8.70688 4.05098 8.71701 4.05297 8.72249C4.05488 8.72775 4.05604 8.72999 4.0563 8.73049C4.10373 8.82181 4.17819 8.89627 4.26952 8.94371C4.27001 8.94397 4.27226 8.94513 4.27752 8.94704C4.28299 8.94903 4.29312 8.95234 4.30961 8.95629C4.34427 8.96459 4.40145 8.97446 4.49611 8.98232C4.69932 8.9992 4.9711 9 5.415 9H7.585C8.02891 9 8.30068 8.9992 8.5039 8.98232C8.59855 8.97446 8.65574 8.96459 8.6904 8.95629C8.70688 8.95234 8.71701 8.94903 8.72249 8.94704C8.72775 8.94513 8.72999 8.94397 8.73049 8.94371C8.82181 8.89627 8.89627 8.82181 8.94371 8.73049C8.94397 8.72999 8.94513 8.72775 8.94704 8.72249C8.94903 8.71701 8.95234 8.70688 8.95629 8.6904C8.96459 8.65574 8.97446 8.59855 8.98232 8.5039C8.9992 8.30068 9 8.02891 9 7.585V5.415C9 4.9711 8.9992 4.69932 8.98232 4.49611C8.97446 4.40145 8.96459 4.34427 8.95629 4.30961C8.95234 4.29312 8.94903 4.28299 8.94704 4.27752C8.94513 4.27226 8.94397 4.27001 8.94371 4.26952C8.89627 4.17819 8.82181 4.10373 8.73049 4.0563C8.72999 4.05604 8.72775 4.05488 8.72249 4.05297C8.71701 4.05098 8.70688 4.04767 8.6904 4.04372C8.65574 4.03541 8.59855 4.02554 8.5039 4.01768C8.30068 4.00081 8.02891 4 7.585 4H5.415C4.9711 4 4.69932 4.00081 4.49611 4.01768C4.40145 4.02554 4.34427 4.03541 4.30961 4.04372C4.29312 4.04767 4.28299 4.05098 4.27752 4.05297ZM16.3783 2H18.6217C19.0173 1.99998 19.3734 1.99996 19.6694 2.02454C19.9866 2.05088 20.3234 2.11052 20.6524 2.28147C21.109 2.51866 21.4813 2.89096 21.7185 3.34757C21.8895 3.67665 21.9491 4.01343 21.9755 4.33059C22 4.62665 22 4.98267 22 5.37832V7.62168C22 8.01733 22 8.37336 21.9755 8.66942C21.9491 8.98657 21.8895 9.32336 21.7185 9.65244C21.4813 10.109 21.109 10.4813 20.6524 10.7185C20.3234 10.8895 19.9866 10.9491 19.6694 10.9755C19.3734 11 19.0174 11 18.6217 11H16.3783C15.9827 11 15.6266 11 15.3306 10.9755C15.0134 10.9491 14.6766 10.8895 14.3476 10.7185C13.891 10.4813 13.5187 10.109 13.2815 9.65244C13.1105 9.32336 13.0509 8.98657 13.0245 8.66942C13 8.37337 13 8.01735 13 7.62172V5.37828C13 4.98265 13 4.62664 13.0245 4.33059C13.0509 4.01344 13.1105 3.67665 13.2815 3.34757C13.5187 2.89096 13.891 2.51866 14.3476 2.28147C14.6766 2.11052 15.0134 2.05088 15.3306 2.02454C15.6266 1.99996 15.9827 1.99998 16.3783 2ZM15.2775 4.05297C15.2723 4.05488 15.27 4.05604 15.2695 4.0563C15.1782 4.10373 15.1037 4.17819 15.0563 4.26952C15.056 4.27001 15.0549 4.27226 15.053 4.27752C15.051 4.28299 15.0477 4.29312 15.0437 4.30961C15.0354 4.34427 15.0255 4.40145 15.0177 4.49611C15.0008 4.69932 15 4.9711 15 5.415V7.585C15 8.02891 15.0008 8.30068 15.0177 8.5039C15.0255 8.59855 15.0354 8.65574 15.0437 8.6904C15.0477 8.70688 15.051 8.71701 15.053 8.72249C15.0549 8.72775 15.056 8.72999 15.0563 8.73049C15.1037 8.82181 15.1782 8.89627 15.2695 8.94371C15.27 8.94397 15.2723 8.94513 15.2775 8.94704C15.283 8.94903 15.2931 8.95234 15.3096 8.95629C15.3443 8.96459 15.4015 8.97446 15.4961 8.98232C15.6993 8.9992 15.9711 9 16.415 9H18.585C19.0289 9 19.3007 8.9992 19.5039 8.98232C19.5986 8.97446 19.6557 8.96459 19.6904 8.95629C19.7069 8.95234 19.717 8.94903 19.7225 8.94704C19.7277 8.94513 19.73 8.94397 19.7305 8.94371C19.8218 8.89627 19.8963 8.82181 19.9437 8.73049C19.944 8.72999 19.9451 8.72775 19.947 8.72249C19.949 8.71701 19.9523 8.70688 19.9563 8.6904C19.9646 8.65573 19.9745 8.59855 19.9823 8.5039C19.9992 8.30068 20 8.02891 20 7.585V5.415C20 4.9711 19.9992 4.69932 19.9823 4.49611C19.9745 4.40145 19.9646 4.34427 19.9563 4.30961C19.9523 4.29312 19.949 4.28299 19.947 4.27752C19.9451 4.27226 19.944 4.27001 19.9437 4.26952C19.8963 4.17819 19.8218 4.10373 19.7305 4.0563C19.73 4.05604 19.7277 4.05488 19.7225 4.05297C19.717 4.05098 19.7069 4.04767 19.6904 4.04372C19.6557 4.03541 19.5986 4.02554 19.5039 4.01768C19.3007 4.00081 19.0289 4 18.585 4H16.415C15.9711 4 15.6993 4.00081 15.4961 4.01768C15.4015 4.02554 15.3443 4.03541 15.3096 4.04372C15.2931 4.04767 15.283 4.05098 15.2775 4.05297ZM5.37828 13H7.62172C8.01735 13 8.37337 13 8.66942 13.0245C8.98657 13.0509 9.32336 13.1105 9.65244 13.2815C10.109 13.5187 10.4813 13.891 10.7185 14.3476C10.8895 14.6766 10.9491 15.0134 10.9755 15.3306C11 15.6266 11 15.9827 11 16.3783V18.6217C11 19.0174 11 19.3734 10.9755 19.6694C10.9491 19.9866 10.8895 20.3234 10.7185 20.6524C10.4813 21.109 10.109 21.4813 9.65244 21.7185C9.32336 21.8895 8.98657 21.9491 8.66942 21.9755C8.37336 22 8.01733 22 7.62168 22H5.37832C4.98267 22 4.62665 22 4.33059 21.9755C4.01343 21.9491 3.67665 21.8895 3.34757 21.7185C2.89096 21.4813 2.51866 21.109 2.28147 20.6524C2.11052 20.3234 2.05088 19.9866 2.02454 19.6694C1.99996 19.3734 1.99998 19.0173 2 18.6217V16.3783C1.99998 15.9827 1.99996 15.6266 2.02454 15.3306C2.05088 15.0134 2.11052 14.6766 2.28147 14.3476C2.51866 13.891 2.89096 13.5187 3.34757 13.2815C3.67665 13.1105 4.01344 13.0509 4.33059 13.0245C4.62664 13 4.98265 13 5.37828 13ZM4.27752 15.053C4.27226 15.0549 4.27001 15.056 4.26952 15.0563C4.17819 15.1037 4.10373 15.1782 4.0563 15.2695C4.05604 15.27 4.05488 15.2723 4.05297 15.2775C4.05098 15.283 4.04767 15.2931 4.04372 15.3096C4.03541 15.3443 4.02554 15.4015 4.01768 15.4961C4.00081 15.6993 4 15.9711 4 16.415V18.585C4 19.0289 4.00081 19.3007 4.01768 19.5039C4.02554 19.5986 4.03541 19.6557 4.04372 19.6904C4.04767 19.7069 4.05098 19.717 4.05297 19.7225C4.05488 19.7277 4.05604 19.73 4.0563 19.7305C4.10373 19.8218 4.17819 19.8963 4.26952 19.9437C4.27001 19.944 4.27226 19.9451 4.27752 19.947C4.28299 19.949 4.29312 19.9523 4.30961 19.9563C4.34427 19.9646 4.40145 19.9745 4.49611 19.9823C4.69932 19.9992 4.9711 20 5.415 20H7.585C8.02891 20 8.30068 19.9992 8.5039 19.9823C8.59855 19.9745 8.65573 19.9646 8.6904 19.9563C8.70688 19.9523 8.71701 19.949 8.72249 19.947C8.72775 19.9451 8.72999 19.944 8.73049 19.9437C8.82181 19.8963 8.89627 19.8218 8.94371 19.7305C8.94397 19.73 8.94513 19.7277 8.94704 19.7225C8.94903 19.717 8.95234 19.7069 8.95629 19.6904C8.96459 19.6557 8.97446 19.5986 8.98232 19.5039C8.9992 19.3007 9 19.0289 9 18.585V16.415C9 15.9711 8.9992 15.6993 8.98232 15.4961C8.97446 15.4015 8.96459 15.3443 8.95629 15.3096C8.95234 15.2931 8.94903 15.283 8.94704 15.2775C8.94513 15.2723 8.94397 15.27 8.94371 15.2695C8.89627 15.1782 8.82181 15.1037 8.73049 15.0563C8.73026 15.0562 8.72968 15.0559 8.72861 15.0554C8.72733 15.0548 8.72536 15.054 8.72249 15.053C8.71701 15.051 8.70688 15.0477 8.6904 15.0437C8.65574 15.0354 8.59855 15.0255 8.5039 15.0177C8.30068 15.0008 8.02891 15 7.585 15H5.415C4.9711 15 4.69932 15.0008 4.49611 15.0177C4.40145 15.0255 4.34427 15.0354 4.30961 15.0437C4.29312 15.0477 4.28299 15.051 4.27752 15.053ZM16.3783 13H18.6217C19.0174 13 19.3734 13 19.6694 13.0245C19.9866 13.0509 20.3234 13.1105 20.6524 13.2815C21.109 13.5187 21.4813 13.891 21.7185 14.3476C21.8895 14.6766 21.9491 15.0134 21.9755 15.3306C22 15.6266 22 15.9827 22 16.3783V18.6217C22 19.0173 22 19.3734 21.9755 19.6694C21.9491 19.9866 21.8895 20.3234 21.7185 20.6524C21.4813 21.109 21.109 21.4813 20.6524 21.7185C20.3234 21.8895 19.9866 21.9491 19.6694 21.9755C19.3734 22 19.0173 22 18.6217 22H16.3783C15.9827 22 15.6266 22 15.3306 21.9755C15.0134 21.9491 14.6766 21.8895 14.3476 21.7185C13.891 21.4813 13.5187 21.109 13.2815 20.6524C13.1105 20.3234 13.0509 19.9866 13.0245 19.6694C13 19.3734 13 19.0174 13 18.6217V16.3783C13 15.9827 13 15.6266 13.0245 15.3306C13.0509 15.0134 13.1105 14.6766 13.2815 14.3476C13.5187 13.891 13.891 13.5187 14.3476 13.2815C14.6766 13.1105 15.0134 13.0509 15.3306 13.0245C15.6266 13 15.9827 13 16.3783 13ZM15.2775 15.053C15.2723 15.0549 15.27 15.056 15.2695 15.0563C15.1782 15.1037 15.1037 15.1782 15.0563 15.2695C15.056 15.27 15.0549 15.2723 15.053 15.2775C15.051 15.283 15.0477 15.2931 15.0437 15.3096C15.0354 15.3443 15.0255 15.4015 15.0177 15.4961C15.0008 15.6993 15 15.9711 15 16.415V18.585C15 19.0289 15.0008 19.3007 15.0177 19.5039C15.0255 19.5986 15.0354 19.6557 15.0437 19.6904C15.0477 19.7069 15.051 19.717 15.053 19.7225C15.0549 19.7277 15.056 19.73 15.0563 19.7305C15.1037 19.8218 15.1782 19.8963 15.2695 19.9437C15.27 19.944 15.2723 19.9451 15.2775 19.947C15.283 19.949 15.2931 19.9523 15.3096 19.9563C15.3443 19.9646 15.4015 19.9745 15.4961 19.9823C15.6993 19.9992 15.9711 20 16.415 20H18.585C19.0289 20 19.3007 19.9992 19.5039 19.9823C19.5986 19.9745 19.6557 19.9646 19.6904 19.9563C19.7069 19.9523 19.717 19.949 19.7225 19.947C19.7277 19.9451 19.73 19.944 19.7305 19.9437C19.8218 19.8963 19.8963 19.8218 19.9437 19.7305C19.944 19.73 19.9451 19.7277 19.947 19.7225C19.949 19.717 19.9523 19.7069 19.9563 19.6904C19.9646 19.6557 19.9745 19.5986 19.9823 19.5039C19.9992 19.3007 20 19.0289 20 18.585V16.415C20 15.9711 19.9992 15.6993 19.9823 15.4961C19.9745 15.4015 19.9646 15.3443 19.9563 15.3096C19.9523 15.2931 19.949 15.283 19.947 15.2775C19.9463 15.2756 19.9458 15.2741 19.9453 15.2729C19.9444 15.2709 19.9439 15.2698 19.9437 15.2695C19.8963 15.1782 19.8218 15.1037 19.7305 15.0563C19.73 15.056 19.7277 15.0549 19.7225 15.053C19.717 15.051 19.7069 15.0477 19.6904 15.0437C19.6557 15.0354 19.5986 15.0255 19.5039 15.0177C19.3007 15.0008 19.0289 15 18.585 15H16.415C15.9711 15 15.6993 15.0008 15.4961 15.0177C15.4015 15.0255 15.3443 15.0354 15.3096 15.0437C15.2931 15.0477 15.283 15.051 15.2775 15.053Z",fill:"currentColor"})],-1),AI=[II,TI,CI];function RI(t,e){return te(),ye("svg",EI,AI)}const bI=Sn(wI,[["render",RI]]),SI={},PI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},kI=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),xI=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),OI=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{d:"M5 16C5 15.4477 5.44772 15 6 15H8C8.55229 15 9 15.4477 9 16C9 16.5523 8.55229 17 8 17H6C5.44772 17 5 16.5523 5 16Z",fill:"currentColor"}),C("path",{d:"M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H12C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15H11Z",fill:"currentColor"}),C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M6.788 3C5.96948 2.99999 5.29393 2.99998 4.74393 3.04565C4.17258 3.0931 3.64774 3.19496 3.1561 3.45035C2.42553 3.82985 1.82985 4.42553 1.45035 5.1561C1.19496 5.64774 1.0931 6.17258 1.04565 6.74393C0.999977 7.29393 0.999988 7.96946 1 8.78798V15.212C0.999988 16.0305 0.999977 16.7061 1.04565 17.2561C1.0931 17.8274 1.19496 18.3523 1.45035 18.8439C1.82985 19.5745 2.42553 20.1702 3.1561 20.5497C3.64774 20.805 4.17258 20.9069 4.74393 20.9544C5.29394 21 5.96949 21 6.78803 21H17.212C18.0305 21 18.7061 21 19.2561 20.9544C19.8274 20.9069 20.3523 20.805 20.8439 20.5497C21.5745 20.1702 22.1702 19.5745 22.5497 18.8439C22.805 18.3523 22.9069 17.8274 22.9544 17.2561C23 16.7061 23 16.0305 23 15.212V8.78802C23 7.96949 23 7.29394 22.9544 6.74393C22.9069 6.17258 22.805 5.64774 22.5497 5.1561C22.1702 4.42553 21.5745 3.82985 20.8439 3.45035C20.3523 3.19496 19.8274 3.0931 19.2561 3.04565C18.7061 2.99998 18.0305 2.99999 17.212 3H6.788ZM4.07805 5.22517C4.23663 5.1428 4.46402 5.07578 4.90945 5.03879C5.36686 5.00081 5.95898 5 6.83 5H17.17C18.041 5 18.6331 5.00081 19.0906 5.03879C19.536 5.07578 19.7634 5.1428 19.922 5.22517C20.2872 5.41493 20.5851 5.71277 20.7748 6.07805C20.8572 6.23663 20.9242 6.46402 20.9612 6.90945C20.9857 7.20418 20.9947 7.55484 20.9981 8H3.00194C3.00528 7.55484 3.01431 7.20418 3.03879 6.90945C3.07578 6.46402 3.1428 6.23663 3.22517 6.07805C3.41493 5.71277 3.71277 5.41493 4.07805 5.22517ZM3 10V15.17C3 16.041 3.00081 16.6331 3.03879 17.0906C3.07578 17.536 3.1428 17.7634 3.22517 17.922C3.41493 18.2872 3.71277 18.5851 4.07805 18.7748C4.23663 18.8572 4.46402 18.9242 4.90945 18.9612C5.36686 18.9992 5.95898 19 6.83 19H17.17C18.041 19 18.6331 18.9992 19.0906 18.9612C19.536 18.9242 19.7634 18.8572 19.922 18.7748C20.2872 18.5851 20.5851 18.2872 20.7748 17.922C20.8572 17.7634 20.9242 17.536 20.9612 17.0906C20.9992 16.6331 21 16.041 21 15.17V10H3Z",fill:"currentColor"})],-1),DI=[kI,xI,OI];function NI(t,e){return te(),ye("svg",PI,DI)}const VI=Sn(SI,[["render",NI]]);var Jd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},MI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):MI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new LI;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class LI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FI=function(t){const e=rm(t);return sm.encodeByteArray(e,!0)},Qo=function(t){return FI(t).replace(/\./g,"")},im=function(t){try{return sm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $I=()=>UI().__FIREBASE_DEFAULTS__,BI=()=>{if(typeof process>"u"||typeof Jd>"u")return;const t=Jd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},jI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&im(t[1]);return e&&JSON.parse(e)},Su=()=>{try{return $I()||BI()||jI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},om=t=>{var e,n;return(n=(e=Su())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},am=t=>{const e=om(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cm=()=>{var t;return(t=Su())===null||t===void 0?void 0:t.config},lm=t=>{var e;return(e=Su())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Qo(JSON.stringify(n)),Qo(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(at())}function hm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function WI(){const t=at();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function dm(){try{return typeof indexedDB=="object"}catch{return!1}}function fm(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function GI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="FirebaseError";class Lt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KI,Object.setPrototypeOf(this,Lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Br.prototype.create)}}class Br{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?QI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Lt(s,a,r)}}function QI(t,e){return t.replace(YI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const YI=/\{\$([^}]+)}/g;function XI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Zd(i)&&Zd(o)){if(!wi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Zd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ji(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ks(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function JI(t,e){const n=new ZI(t,e);return n.subscribe.bind(n)}class ZI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");e9(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Sc),s.error===void 0&&(s.error=Sc),s.complete===void 0&&(s.complete=Sc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function e9(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Sc(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t9=1e3,n9=2,r9=4*60*60*1e3,s9=.5;function ef(t,e=t9,n=n9){const r=e*Math.pow(n,t),s=Math.round(s9*r*(Math.random()-.5)*2);return Math.min(r9,r+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(t){return t&&t._delegate?t._delegate:t}class Vt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i9{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new qI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(a9(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:o9(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function o9(t){return t===pr?void 0:t}function a9(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c9{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new i9(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ie;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ie||(ie={}));const l9={debug:ie.DEBUG,verbose:ie.VERBOSE,info:ie.INFO,warn:ie.WARN,error:ie.ERROR,silent:ie.SILENT},u9=ie.INFO,h9={[ie.DEBUG]:"log",[ie.VERBOSE]:"log",[ie.INFO]:"info",[ie.WARN]:"warn",[ie.ERROR]:"error"},d9=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=h9[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Oa{constructor(e){this.name=e,this._logLevel=u9,this._logHandler=d9,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ie))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?l9[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ie.DEBUG,...e),this._logHandler(this,ie.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ie.VERBOSE,...e),this._logHandler(this,ie.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ie.INFO,...e),this._logHandler(this,ie.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ie.WARN,...e),this._logHandler(this,ie.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ie.ERROR,...e),this._logHandler(this,ie.ERROR,...e)}}const f9=(t,e)=>e.some(n=>t instanceof n);let tf,nf;function p9(){return tf||(tf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function g9(){return nf||(nf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pm=new WeakMap,wl=new WeakMap,gm=new WeakMap,Pc=new WeakMap,Pu=new WeakMap;function m9(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Kn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&pm.set(n,t)}).catch(()=>{}),Pu.set(e,t),e}function _9(t){if(wl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});wl.set(t,e)}let El={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return wl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||gm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function y9(t){El=t(El)}function v9(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kc(this),e,...n);return gm.set(r,e.sort?e.sort():[e]),Kn(r)}:g9().includes(t)?function(...e){return t.apply(kc(this),e),Kn(pm.get(this))}:function(...e){return Kn(t.apply(kc(this),e))}}function w9(t){return typeof t=="function"?v9(t):(t instanceof IDBTransaction&&_9(t),f9(t,p9())?new Proxy(t,El):t)}function Kn(t){if(t instanceof IDBRequest)return m9(t);if(Pc.has(t))return Pc.get(t);const e=w9(t);return e!==t&&(Pc.set(t,e),Pu.set(e,t)),e}const kc=t=>Pu.get(t);function E9(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Kn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Kn(o.result),c.oldVersion,c.newVersion,Kn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const I9=["get","getKey","getAll","getAllKeys","count"],T9=["put","add","delete","clear"],xc=new Map;function rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xc.get(e))return xc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=T9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||I9.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return xc.set(e,i),i}y9(t=>({...t,get:(e,n,r)=>rf(e,n)||t.get(e,n,r),has:(e,n)=>!!rf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C9{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(A9(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function A9(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Il="@firebase/app",sf="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new Oa("@firebase/app"),R9="@firebase/app-compat",b9="@firebase/analytics-compat",S9="@firebase/analytics",P9="@firebase/app-check-compat",k9="@firebase/app-check",x9="@firebase/auth",O9="@firebase/auth-compat",D9="@firebase/database",N9="@firebase/database-compat",V9="@firebase/functions",M9="@firebase/functions-compat",L9="@firebase/installations",F9="@firebase/installations-compat",U9="@firebase/messaging",$9="@firebase/messaging-compat",B9="@firebase/performance",j9="@firebase/performance-compat",q9="@firebase/remote-config",H9="@firebase/remote-config-compat",z9="@firebase/storage",W9="@firebase/storage-compat",G9="@firebase/firestore",K9="@firebase/firestore-compat",Q9="firebase",Y9="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="[DEFAULT]",X9={[Il]:"fire-core",[R9]:"fire-core-compat",[S9]:"fire-analytics",[b9]:"fire-analytics-compat",[k9]:"fire-app-check",[P9]:"fire-app-check-compat",[x9]:"fire-auth",[O9]:"fire-auth-compat",[D9]:"fire-rtdb",[N9]:"fire-rtdb-compat",[V9]:"fire-fn",[M9]:"fire-fn-compat",[L9]:"fire-iid",[F9]:"fire-iid-compat",[U9]:"fire-fcm",[$9]:"fire-fcm-compat",[B9]:"fire-perf",[j9]:"fire-perf-compat",[q9]:"fire-rc",[H9]:"fire-rc-compat",[z9]:"fire-gcs",[W9]:"fire-gcs-compat",[G9]:"fire-fst",[K9]:"fire-fst-compat","fire-js":"fire-js",[Q9]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yo=new Map,Cl=new Map;function J9(t,e){try{t.container.addComponent(e)}catch(n){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Gt(t){const e=t.name;if(Cl.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;Cl.set(e,t);for(const n of Yo.values())J9(n,t);return!0}function sr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z9={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qn=new Br("app","Firebase",Z9);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eT{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Vt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Qn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=Y9;function mm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Tl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Qn.create("bad-app-name",{appName:String(s)});if(n||(n=cm()),!n)throw Qn.create("no-options");const i=Yo.get(s);if(i){if(wi(n,i.options)&&wi(r,i.config))return i;throw Qn.create("duplicate-app",{appName:s})}const o=new c9(s);for(const c of Cl.values())o.addComponent(c);const a=new eT(n,r,o);return Yo.set(s,a),a}function Da(t=Tl){const e=Yo.get(t);if(!e&&t===Tl&&cm())return mm();if(!e)throw Qn.create("no-app",{appName:t});return e}function _t(t,e,n){var r;let s=(r=X9[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(a.join(" "));return}Gt(new Vt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="firebase-heartbeat-database",nT=1,Ei="firebase-heartbeat-store";let Oc=null;function _m(){return Oc||(Oc=E9(tT,nT,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ei)}}}).catch(t=>{throw Qn.create("idb-open",{originalErrorMessage:t.message})})),Oc}async function rT(t){try{return await(await _m()).transaction(Ei).objectStore(Ei).get(ym(t))}catch(e){if(e instanceof Lt)Pr.warn(e.message);else{const n=Qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(n.message)}}}async function of(t,e){try{const r=(await _m()).transaction(Ei,"readwrite");await r.objectStore(Ei).put(e,ym(t)),await r.done}catch(n){if(n instanceof Lt)Pr.warn(n.message);else{const r=Qn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pr.warn(r.message)}}}function ym(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sT=1024,iT=30*24*60*60*1e3;class oT{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new cT(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=af();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=iT}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=af(),{heartbeatsToSend:r,unsentEntries:s}=aT(this._heartbeatsCache.heartbeats),i=Qo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function af(){return new Date().toISOString().substring(0,10)}function aT(t,e=sT){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),cf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),cf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class cT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dm()?fm().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await rT(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return of(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function cf(t){return Qo(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lT(t){Gt(new Vt("platform-logger",e=>new C9(e),"PRIVATE")),Gt(new Vt("heartbeat",e=>new oT(e),"PRIVATE")),_t(Il,sf,t),_t(Il,sf,"esm2017"),_t("fire-js","")}lT("");function ku(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function vm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uT=vm,wm=new Br("auth","Firebase",vm());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Oa("@firebase/auth");function hT(t,...e){Xo.logLevel<=ie.WARN&&Xo.warn(`Auth (${jr}): ${t}`,...e)}function No(t,...e){Xo.logLevel<=ie.ERROR&&Xo.error(`Auth (${jr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mt(t,...e){throw xu(t,...e)}function on(t,...e){return xu(t,...e)}function Em(t,e,n){const r=Object.assign(Object.assign({},uT()),{[e]:n});return new Br("auth","Firebase",r).create(e,{appName:t.name})}function dT(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Mt(t,"argument-error"),Em(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function xu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return wm.create(t,...e)}function G(t,e,...n){if(!t)throw xu(e,...n)}function yn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function Tn(t,e){t||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function fT(){return lf()==="http:"||lf()==="https:"}function lf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(fT()||hm()||"connection"in navigator)?navigator.onLine:!0}function gT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Tn(n>e,"Short delay should be less than long delay!"),this.isMobile=HI()||zI()}get(){return pT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ou(t,e){Tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _T=new qi(3e4,6e4);function ir(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Pn(t,e,n,r,s={}){return Tm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=ji(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Im.fetch()(Cm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function Tm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},mT),e);try{const s=new vT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw _o(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw _o(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw _o(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw _o(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Em(t,u,l);Mt(t,u)}}catch(s){if(s instanceof Lt)throw s;Mt(t,"network-request-failed",{message:String(s)})}}async function Hi(t,e,n,r,s={}){const i=await Pn(t,e,n,r,s);return"mfaPendingCredential"in i&&Mt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function Cm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ou(t.config,s):`${t.config.apiScheme}://${s}`}function yT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class vT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(on(this.auth,"network-request-failed")),_T.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function _o(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=on(t,e,r);return s.customData._tokenResponse=n,s}function uf(t){return t!==void 0&&t.enterprise!==void 0}class wT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return yT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function ET(t,e){return Pn(t,"GET","/v2/recaptchaConfig",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IT(t,e){return Pn(t,"POST","/v1/accounts:delete",e)}async function TT(t,e){return Pn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function CT(t,e=!1){const n=Se(t),r=await n.getIdToken(e),s=Du(r);G(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:oi(Dc(s.auth_time)),issuedAtTime:oi(Dc(s.iat)),expirationTime:oi(Dc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Dc(t){return Number(t)*1e3}function Du(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=im(n);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function AT(t){const e=Du(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Lt&&RT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function RT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=oi(this.lastLoginAt),this.creationTime=oi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vs(t,TT(n,{idToken:r}));G(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?kT(i.providerUserInfo):[],a=PT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Am(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function ST(t){const e=Se(t);await Jo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function PT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kT(t){return t.map(e=>{var{providerId:n}=e,r=ku(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xT(t,e){const n=await Tm(t,{},async()=>{const r=ji({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=Cm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Im.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function OT(t,e){return Pn(t,"POST","/v2/accounts:revokeToken",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):AT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return G(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await xT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ii;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(G(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(G(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ii,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Cr{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=ku(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new bT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Am(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vs(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return CT(this,e)}reload(){return ST(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Cr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Jo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await vs(this,IT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,I=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:B,isAnonymous:F,providerData:oe,stsTokenManager:me}=n;G(N&&me,e,"internal-error");const ee=Ii.fromJSON(this.name,me);G(typeof N=="string",e,"internal-error"),Dn(h,e.name),Dn(d,e.name),G(typeof B=="boolean",e,"internal-error"),G(typeof F=="boolean",e,"internal-error"),Dn(f,e.name),Dn(_,e.name),Dn(I,e.name),Dn(v,e.name),Dn(S,e.name),Dn(D,e.name);const ne=new Cr({uid:N,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:F,photoURL:_,phoneNumber:f,tenantId:I,stsTokenManager:ee,createdAt:S,lastLoginAt:D});return oe&&Array.isArray(oe)&&(ne.providerData=oe.map(Ie=>Object.assign({},Ie))),v&&(ne._redirectEventId=v),ne}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ii;s.updateFromServerResponse(n);const i=new Cr({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Jo(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf=new Map;function vn(t){Tn(t instanceof Function,"Expected a class definition");let e=hf.get(t);return e?(Tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,hf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Rm.type="NONE";const df=Rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vo(t,e,n){return`firebase:${t}:${e}:${n}`}class cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Vo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Vo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Cr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new cs(vn(df),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||vn(df);const o=Vo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Cr._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new cs(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ff(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(bm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(xm(e))return"Blackberry";if(Om(e))return"Webos";if(Nu(e))return"Safari";if((e.includes("chrome/")||Sm(e))&&!e.includes("edge/"))return"Chrome";if(km(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function bm(t=at()){return/firefox\//i.test(t)}function Nu(t=at()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Sm(t=at()){return/crios\//i.test(t)}function Pm(t=at()){return/iemobile/i.test(t)}function km(t=at()){return/android/i.test(t)}function xm(t=at()){return/blackberry/i.test(t)}function Om(t=at()){return/webos/i.test(t)}function Na(t=at()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function DT(t=at()){var e;return Na(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function NT(){return WI()&&document.documentMode===10}function Dm(t=at()){return Na(t)||km(t)||Om(t)||xm(t)||/windows phone/i.test(t)||Pm(t)}function VT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(t,e=[]){let n;switch(t){case"Browser":n=ff(at());break;case"Worker":n=`${ff(at())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${jr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LT(t,e={}){return Pn(t,"GET","/v2/passwordPolicy",ir(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FT=6;class UT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:FT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new pf(this),this.idTokenSubscription=new pf(this),this.beforeStateQueue=new MT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=wm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=vn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await cs.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Jo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Se(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(vn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await LT(this),n=new UT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Br("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await OT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&vn(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await cs.create(this,[vn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Nm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&hT(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function or(t){return Se(t)}class pf{constructor(e){this.auth=e,this.observer=null,this.addObserver=JI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Vm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=on("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",BT().appendChild(r)})}function jT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const qT="https://www.google.com/recaptcha/enterprise.js?render=",HT="recaptcha-enterprise",zT="NO_RECAPTCHA";class WT{constructor(e){this.type=HT,this.auth=or(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{ET(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new wT(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;uf(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(zT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&uf(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}Vm(qT+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function gf(t,e,n,r=!1){const s=new WT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Rl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GT(t,e){const n=sr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(wi(i,e??{}))return s;Mt(s,"already-initialized")}return n.initialize({options:e})}function KT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(vn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function QT(t,e,n){const r=or(t);G(r._canInitEmulator,r,"emulator-config-failed"),G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Mm(e),{host:o,port:a}=YT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||XT()}function Mm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YT(t){const e=Mm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:mf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:mf(o)}}}function mf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function XT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,n){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function JT(t,e){return Pn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZT(t,e){return Hi(t,"POST","/v1/accounts:signInWithPassword",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e2(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}async function t2(t,e){return Hi(t,"POST","/v1/accounts:signInWithEmailLink",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends Vu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ti(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ti(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,n,"signInWithPassword",ZT);case"emailLink":return e2(e,{email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Rl(e,r,"signUpPassword",JT);case"emailLink":return t2(e,{idToken:n,email:this._email,oobCode:this._password});default:Mt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ls(t,e){return Hi(t,"POST","/v1/accounts:signInWithIdp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n2="http://localhost";class kr extends Vu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new kr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Mt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=ku(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new kr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ls(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ls(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ls(e,n)}buildRequest(){const e={requestUri:n2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ji(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r2(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function s2(t){const e=Gs(Ks(t)).link,n=e?Gs(Ks(e)).deep_link_id:null,r=Gs(Ks(t)).deep_link_id;return(r?Gs(Ks(r)).link:null)||r||n||e||t}class Mu{constructor(e){var n,r,s,i,o,a;const c=Gs(Ks(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=r2((s=c.mode)!==null&&s!==void 0?s:null);G(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=s2(e);try{return new Mu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return Ti._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Mu.parseLink(n);return G(r,"argument-error"),Ti._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi extends Lu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends zi{constructor(){super("facebook.com")}static credential(e){return kr._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Fn.credential(e.oauthAccessToken)}catch{return null}}}Fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Fn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return kr._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Bt.credentialFromTaggedObject(e)}static credentialFromError(e){return Bt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.GOOGLE_SIGN_IN_METHOD="google.com";Bt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends zi{constructor(){super("github.com")}static credential(e){return kr._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Un.credential(e.oauthAccessToken)}catch{return null}}}Un.GITHUB_SIGN_IN_METHOD="github.com";Un.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends zi{constructor(){super("twitter.com")}static credential(e,n){return kr._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return $n.credential(n,r)}catch{return null}}}$n.TWITTER_SIGN_IN_METHOD="twitter.com";$n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i2(t,e){return Hi(t,"POST","/v1/accounts:signUp",ir(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Cr._fromIdTokenResponse(e,r,s),o=_f(r);return new xr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=_f(r);return new xr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function _f(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo extends Lt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Zo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Zo(e,n,r,s)}}function Lm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Zo._fromErrorAndOperation(t,i,e,r):i})}async function o2(t,e,n=!1){const r=await vs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a2(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await vs(t,Lm(r,s,e,t),n);G(i.idToken,r,"internal-error");const o=Du(i.idToken);G(o,r,"internal-error");const{sub:a}=o;return G(t.uid===a,r,"user-mismatch"),xr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Mt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(t,e,n=!1){const r="signIn",s=await Lm(t,r,e),i=await xr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function c2(t,e){return Fm(or(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Um(t){const e=or(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function l2(t,e,n){const r=or(t),o=await Rl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",i2).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Um(t),c}),a=await xr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function u2(t,e,n){return c2(Se(t),xs.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Um(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h2(t,e){return Pn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Se(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await vs(r,h2(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function f2(t,e,n,r){return Se(t).onIdTokenChanged(e,n,r)}function p2(t,e,n){return Se(t).beforeAuthStateChanged(e,n)}function $m(t,e,n,r){return Se(t).onAuthStateChanged(e,n,r)}function g2(t){return Se(t).signOut()}const ea="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ea,"1"),this.storage.removeItem(ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m2(){const t=at();return Nu(t)||Na(t)}const _2=1e3,y2=10;class jm extends Bm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=m2()&&VT(),this.fallbackToPolling=Dm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);NT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,y2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},_2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}jm.type="LOCAL";const v2=jm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm extends Bm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}qm.type="SESSION";const Hm=qm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Va(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await w2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Va.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Fu("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(){return window}function I2(t){an().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zm(){return typeof an().WorkerGlobalScope<"u"&&typeof an().importScripts=="function"}async function T2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function C2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function A2(){return zm()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm="firebaseLocalStorageDb",R2=1,ta="firebaseLocalStorage",Gm="fbase_key";class Wi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ma(t,e){return t.transaction([ta],e?"readwrite":"readonly").objectStore(ta)}function b2(){const t=indexedDB.deleteDatabase(Wm);return new Wi(t).toPromise()}function bl(){const t=indexedDB.open(Wm,R2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ta,{keyPath:Gm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ta)?e(r):(r.close(),await b2(),e(await bl()))})})}async function yf(t,e,n){const r=Ma(t,!0).put({[Gm]:e,value:n});return new Wi(r).toPromise()}async function S2(t,e){const n=Ma(t,!1).get(e),r=await new Wi(n).toPromise();return r===void 0?null:r.value}function vf(t,e){const n=Ma(t,!0).delete(e);return new Wi(n).toPromise()}const P2=800,k2=3;class Km{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await bl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>k2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return zm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Va._getInstance(A2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await T2(),!this.activeServiceWorker)return;this.sender=new E2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||C2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await bl();return await yf(e,ea,"1"),await vf(e,ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>S2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ma(s,!1).getAll();return new Wi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),P2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Km.type="LOCAL";const x2=Km;new qi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qm(t,e){return e?vn(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uu extends Vu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ls(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ls(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ls(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function O2(t){return Fm(t.auth,new Uu(t),t.bypassAuthState)}function D2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),a2(n,new Uu(t),t.bypassAuthState)}async function N2(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),o2(n,new Uu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ym{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return O2;case"linkViaPopup":case"linkViaRedirect":return N2;case"reauthViaPopup":case"reauthViaRedirect":return D2;default:Mt(this.auth,"internal-error")}}resolve(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V2=new qi(2e3,1e4);async function M2(t,e,n){const r=or(t);dT(t,e,Lu);const s=Qm(r,n);return new mr(r,"signInViaPopup",e,s).executeNotNull()}class mr extends Ym{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,mr.currentPopupAction&&mr.currentPopupAction.cancel(),mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){Tn(this.filter.length===1,"Popup operations only handle one event");const e=Fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(on(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(on(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(on(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,V2.get())};e()}}mr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L2="pendingRedirect",Mo=new Map;class F2 extends Ym{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Mo.get(this.auth._key());if(!e){try{const r=await U2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Mo.set(this.auth._key(),e)}return this.bypassAuthState||Mo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U2(t,e){const n=j2(e),r=B2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $2(t,e){Mo.set(t._key(),e)}function B2(t){return vn(t._redirectPersistence)}function j2(t){return Vo(L2,t.config.apiKey,t.name)}async function q2(t,e,n=!1){const r=or(t),s=Qm(r,e),o=await new F2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H2=10*60*1e3;class z2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!W2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Xm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(on(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=H2&&this.cachedEventUids.clear(),this.cachedEventUids.has(wf(e))}saveEventToCache(e){this.cachedEventUids.add(wf(e)),this.lastProcessedEventTime=Date.now()}}function wf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Xm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function W2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G2(t,e={}){return Pn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q2=/^https?/;async function Y2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await G2(t);for(const n of e)try{if(X2(n))return}catch{}Mt(t,"unauthorized-domain")}function X2(t){const e=Al(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Q2.test(n))return!1;if(K2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J2=new qi(3e4,6e4);function Ef(){const t=an().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Z2(t){return new Promise((e,n)=>{var r,s,i;function o(){Ef(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ef(),n(on(t,"network-request-failed"))},timeout:J2.get()})}if(!((s=(r=an().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=an().gapi)===null||i===void 0)&&i.load)o();else{const a=jT("iframefcb");return an()[a]=()=>{gapi.load?o():n(on(t,"network-request-failed"))},Vm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Lo=null,e})}let Lo=null;function eC(t){return Lo=Lo||Z2(t),Lo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=new qi(5e3,15e3),nC="__/auth/iframe",rC="emulator/auth/iframe",sC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oC(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,rC):`https://${t.config.authDomain}/${nC}`,r={apiKey:e.apiKey,appName:t.name,v:jr},s=iC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${ji(r).slice(1)}`}async function aC(t){const e=await eC(t),n=an().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:oC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=on(t,"network-request-failed"),a=an().setTimeout(()=>{i(o)},tC.get());function c(){an().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},lC=500,uC=600,hC="_blank",dC="http://localhost";class If{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fC(t,e,n,r=lC,s=uC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},cC),{width:r.toString(),height:s.toString(),top:i,left:o}),l=at().toLowerCase();n&&(a=Sm(l)?hC:n),bm(l)&&(e=e||dC,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(DT(l)&&a!=="_self")return pC(e||"",a),new If(null);const h=window.open(e||"",a,u);G(h,t,"popup-blocked");try{h.focus()}catch{}return new If(h)}function pC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gC="__/auth/handler",mC="emulator/auth/handler",_C=encodeURIComponent("fac");async function Tf(t,e,n,r,s,i){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:jr,eventId:s};if(e instanceof Lu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof zi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${_C}=${encodeURIComponent(c)}`:"";return`${yC(t)}?${ji(a).slice(1)}${l}`}function yC({config:t}){return t.emulator?Ou(t,mC):`https://${t.authDomain}/${gC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="webStorageSupport";class vC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Hm,this._completeRedirectFn=q2,this._overrideRedirectResult=$2}async _openPopup(e,n,r,s){var i;Tn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Tf(e,n,r,Al(),s);return fC(e,o,Fu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Tf(e,n,r,Al(),s);return I2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Tn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aC(e),r=new z2(e);return n.register("authEvent",s=>(G(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Nc,{type:Nc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Nc];o!==void 0&&n(!!o),Mt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Dm()||Nu()||Na()}}const wC=vC;var Cf="@firebase/auth",Af="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function TC(t){Gt(new Vt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Nm(t)},l=new $T(r,s,i,c);return KT(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Gt(new Vt("auth-internal",e=>{const n=or(e.getProvider("auth").getImmediate());return(r=>new EC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_t(Cf,Af,IC(t)),_t(Cf,Af,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=5*60,AC=lm("authIdTokenMaxAge")||CC;let Rf=null;const RC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>AC)return;const s=n==null?void 0:n.token;Rf!==s&&(Rf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function bC(t=Da()){const e=sr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=GT(t,{popupRedirectResolver:wC,persistence:[x2,v2,Hm]}),r=lm("authTokenSyncURL");if(r){const i=RC(r);p2(n,i,()=>i(n.currentUser)),f2(n,o=>i(o))}const s=om("auth");return s&&QT(n,`http://${s}`),n}TC("Browser");var SC="firebase",PC="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t(SC,PC,"app");const kC=(t,e)=>e.some(n=>t instanceof n);let bf,Sf;function xC(){return bf||(bf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function OC(){return Sf||(Sf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Jm=new WeakMap,Sl=new WeakMap,Zm=new WeakMap,Vc=new WeakMap,$u=new WeakMap;function DC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Yn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Jm.set(n,t)}).catch(()=>{}),$u.set(e,t),e}function NC(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sl.set(t,e)}let Pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Zm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function VC(t){Pl=t(Pl)}function MC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mc(this),e,...n);return Zm.set(r,e.sort?e.sort():[e]),Yn(r)}:OC().includes(t)?function(...e){return t.apply(Mc(this),e),Yn(Jm.get(this))}:function(...e){return Yn(t.apply(Mc(this),e))}}function LC(t){return typeof t=="function"?MC(t):(t instanceof IDBTransaction&&NC(t),kC(t,xC())?new Proxy(t,Pl):t)}function Yn(t){if(t instanceof IDBRequest)return DC(t);if(Vc.has(t))return Vc.get(t);const e=LC(t);return e!==t&&(Vc.set(t,e),$u.set(e,t)),e}const Mc=t=>$u.get(t);function FC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Yn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Yn(o.result),c.oldVersion,c.newVersion,Yn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const UC=["get","getKey","getAll","getAllKeys","count"],$C=["put","add","delete","clear"],Lc=new Map;function Pf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$C.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Lc.set(e,i),i}VC(t=>({...t,get:(e,n,r)=>Pf(e,n)||t.get(e,n,r),has:(e,n)=>!!Pf(e,n)||t.has(e,n)}));const e_="@firebase/installations",Bu="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t_=1e4,n_=`w:${Bu}`,r_="FIS_v2",BC="https://firebaseinstallations.googleapis.com/v1",jC=60*60*1e3,qC="installations",HC="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Or=new Br(qC,HC,zC);function s_(t){return t instanceof Lt&&t.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i_({projectId:t}){return`${BC}/projects/${t}/installations`}function o_(t){return{token:t.token,requestStatus:2,expiresIn:GC(t.expiresIn),creationTime:Date.now()}}async function a_(t,e){const r=(await e.json()).error;return Or.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function c_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function WC(t,{refreshToken:e}){const n=c_(t);return n.append("Authorization",KC(e)),n}async function l_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function GC(t){return Number(t.replace("s","000"))}function KC(t){return`${r_} ${t}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function QC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=i_(t),s=c_(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:r_,appId:t.appId,sdkVersion:n_},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await l_(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:o_(l.authToken)}}else throw await a_("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u_(t){return new Promise(e=>{setTimeout(e,t)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/^[cdef][\w-]{21}$/,kl="";function JC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=ZC(t);return XC.test(n)?n:kl}catch{return kl}}function ZC(t){return YC(t).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function La(t){return`${t.appName}!${t.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h_=new Map;function d_(t,e){const n=La(t);f_(n,e),eA(n,e)}function f_(t,e){const n=h_.get(t);if(n)for(const r of n)r(e)}function eA(t,e){const n=tA();n&&n.postMessage({key:t,fid:e}),nA()}let _r=null;function tA(){return!_r&&"BroadcastChannel"in self&&(_r=new BroadcastChannel("[Firebase] FID Change"),_r.onmessage=t=>{f_(t.data.key,t.data.fid)}),_r}function nA(){h_.size===0&&_r&&(_r.close(),_r=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA="firebase-installations-database",sA=1,Dr="firebase-installations-store";let Fc=null;function ju(){return Fc||(Fc=FC(rA,sA,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Dr)}}})),Fc}async function na(t,e){const n=La(t),s=(await ju()).transaction(Dr,"readwrite"),i=s.objectStore(Dr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&d_(t,e.fid),e}async function p_(t){const e=La(t),r=(await ju()).transaction(Dr,"readwrite");await r.objectStore(Dr).delete(e),await r.done}async function Fa(t,e){const n=La(t),s=(await ju()).transaction(Dr,"readwrite"),i=s.objectStore(Dr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&d_(t,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qu(t){let e;const n=await Fa(t.appConfig,r=>{const s=iA(r),i=oA(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===kl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function iA(t){const e=t||{fid:JC(),registrationStatus:0};return g_(e)}function oA(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Or.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=aA(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:cA(t)}:{installationEntry:e}}async function aA(t,e){try{const n=await QC(t,e);return na(t.appConfig,n)}catch(n){throw s_(n)&&n.customData.serverCode===409?await p_(t.appConfig):await na(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function cA(t){let e=await kf(t.appConfig);for(;e.registrationStatus===1;)await u_(100),e=await kf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await qu(t);return r||n}return e}function kf(t){return Fa(t,e=>{if(!e)throw Or.create("installation-not-found");return g_(e)})}function g_(t){return lA(t)?{fid:t.fid,registrationStatus:0}:t}function lA(t){return t.registrationStatus===1&&t.registrationTime+t_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA({appConfig:t,heartbeatServiceProvider:e},n){const r=hA(t,n),s=WC(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:n_,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await l_(()=>fetch(r,a));if(c.ok){const l=await c.json();return o_(l)}else throw await a_("Generate Auth Token",c)}function hA(t,{fid:e}){return`${i_(t)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hu(t,e=!1){let n;const r=await Fa(t.appConfig,i=>{if(!m_(i))throw Or.create("not-registered");const o=i.authToken;if(!e&&pA(o))return i;if(o.requestStatus===1)return n=dA(t,e),i;{if(!navigator.onLine)throw Or.create("app-offline");const a=mA(i);return n=fA(t,a),a}});return n?await n:r.authToken}async function dA(t,e){let n=await xf(t.appConfig);for(;n.authToken.requestStatus===1;)await u_(100),n=await xf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Hu(t,e):r}function xf(t){return Fa(t,e=>{if(!m_(e))throw Or.create("not-registered");const n=e.authToken;return _A(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function fA(t,e){try{const n=await uA(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await na(t.appConfig,r),n}catch(n){if(s_(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await p_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await na(t.appConfig,r)}throw n}}function m_(t){return t!==void 0&&t.registrationStatus===2}function pA(t){return t.requestStatus===2&&!gA(t)}function gA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+jC}function mA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function _A(t){return t.requestStatus===1&&t.requestTime+t_<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yA(t){const e=t,{installationEntry:n,registrationPromise:r}=await qu(e);return r?r.catch(console.error):Hu(e).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vA(t,e=!1){const n=t;return await wA(n),(await Hu(n,e)).token}async function wA(t){const{registrationPromise:e}=await qu(t);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EA(t){if(!t||!t.options)throw Uc("App Configuration");if(!t.name)throw Uc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Uc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Uc(t){return Or.create("missing-app-config-values",{valueName:t})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const __="installations",IA="installations-internal",TA=t=>{const e=t.getProvider("app").getImmediate(),n=EA(e),r=sr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},CA=t=>{const e=t.getProvider("app").getImmediate(),n=sr(e,__).getImmediate();return{getId:()=>yA(n),getToken:s=>vA(n,s)}};function AA(){Gt(new Vt(__,TA,"PUBLIC")),Gt(new Vt(IA,CA,"PRIVATE"))}AA();_t(e_,Bu);_t(e_,Bu,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra="analytics",RA="firebase_id",bA="origin",SA=60*1e3,PA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",zu="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt=new Oa("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},bt=new Br("analytics","Analytics",kA);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xA(t){if(!t.startsWith(zu)){const e=bt.create("invalid-gtag-resource",{gtagURL:t});return yt.warn(e.message),""}return t}function y_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function OA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function DA(t,e){const n=OA("firebase-js-sdk-policy",{createScriptURL:xA}),r=document.createElement("script"),s=`${zu}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function NA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function VA(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await y_(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){yt.error(a)}t("config",s,i)}async function MA(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await y_(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){yt.error(i)}}function LA(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await MA(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await VA(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){yt.error(a)}}return s}function FA(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=LA(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function UA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(zu)&&n.src.includes(t))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A=30,BA=1e3;class jA{constructor(e={},n=BA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const v_=new jA;function qA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function HA(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:qA(r)},i=PA.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw bt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function zA(t,e=v_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw bt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw bt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new KA;return setTimeout(async()=>{a.abort()},n!==void 0?n:SA),w_({appId:r,apiKey:s,measurementId:i},o,a,e)}async function w_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=v_){var i;const{appId:o,measurementId:a}=t;try{await WA(r,e)}catch(c){if(a)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await HA(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!GA(l)){if(s.deleteThrottleMetadata(o),a)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?ef(n,s.intervalMillis,$A):ef(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),yt.debug(`Calling attemptFetch again in ${u} millis`),w_(t,h,r,s)}}function WA(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(bt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function GA(t){if(!(t instanceof Lt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class KA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function QA(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(){if(dm())try{await fm()}catch(t){return yt.warn(bt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return yt.warn(bt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function XA(t,e,n,r,s,i,o){var a;const c=zA(t);c.then(f=>{n[f.measurementId]=f.appId,t.options.measurementId&&f.measurementId!==t.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${f.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(f=>yt.error(f)),e.push(c);const l=YA().then(f=>{if(f)return r.getId()}),[u,h]=await Promise.all([c,l]);UA(i)||DA(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[bA]="firebase",d.update=!0,h!=null&&(d[RA]=h),s("config",u.measurementId,d),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e){this.app=e}_delete(){return delete ai[this.app.options.appId],Promise.resolve()}}let ai={},Of=[];const Df={};let $c="dataLayer",ZA="gtag",Nf,E_,Vf=!1;function e4(){const t=[];if(hm()&&t.push("This is a browser extension environment."),GI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=bt.create("invalid-analytics-context",{errorInfo:e});yt.warn(n.message)}}function t4(t,e,n){e4();const r=t.options.appId;if(!r)throw bt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw bt.create("no-api-key");if(ai[r]!=null)throw bt.create("already-exists",{id:r});if(!Vf){NA($c);const{wrappedGtag:i,gtagCore:o}=FA(ai,Of,Df,$c,ZA);E_=i,Nf=o,Vf=!0}return ai[r]=XA(t,Of,Df,e,Nf,$c,n),new JA(t)}function n4(t=Da()){t=Se(t);const e=sr(t,ra);return e.isInitialized()?e.getImmediate():r4(t)}function r4(t,e={}){const n=sr(t,ra);if(n.isInitialized()){const s=n.getImmediate();if(wi(e,n.getOptions()))return s;throw bt.create("already-initialized")}return n.initialize({options:e})}function s4(t,e,n,r){t=Se(t),QA(E_,ai[t.app.options.appId],e,n,r).catch(s=>yt.error(s))}const Mf="@firebase/analytics",Lf="0.10.0";function i4(){Gt(new Vt(ra,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return t4(r,s,n)},"PUBLIC")),Gt(new Vt("analytics-internal",t,"PRIVATE")),_t(Mf,Lf),_t(Mf,Lf,"esm2017");function t(e){try{const n=e.getProvider(ra).getImmediate();return{logEvent:(r,s,i)=>s4(n,r,s,i)}}catch(n){throw bt.create("interop-component-reg-failed",{reason:n})}}}i4();var o4=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},O,Wu=Wu||{},Q=o4||self;function Ua(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Gi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function a4(t){return Object.prototype.hasOwnProperty.call(t,Bc)&&t[Bc]||(t[Bc]=++c4)}var Bc="closure_uid_"+(1e9*Math.random()>>>0),c4=0;function l4(t,e,n){return t.call.apply(t.bind,arguments)}function u4(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function it(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?it=l4:it=u4,it.apply(null,arguments)}function yo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ar(){this.s=this.s,this.o=this.o}var h4=0;ar.prototype.s=!1;ar.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),h4!=0)&&a4(this)};ar.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Gu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ff(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ua(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ot(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ot.prototype.h=function(){this.defaultPrevented=!0};var d4=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function Ci(t){return/^[\s\xa0]*$/.test(t)}function $a(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function tn(t){return $a().indexOf(t)!=-1}function Ku(t){return Ku[" "](t),t}Ku[" "]=function(){};function f4(t,e){var n=iR;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var p4=tn("Opera"),ws=tn("Trident")||tn("MSIE"),T_=tn("Edge"),xl=T_||ws,C_=tn("Gecko")&&!($a().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge"))&&!(tn("Trident")||tn("MSIE"))&&!tn("Edge"),g4=$a().toLowerCase().indexOf("webkit")!=-1&&!tn("Edge");function A_(){var t=Q.document;return t?t.documentMode:void 0}var Ol;e:{var jc="",qc=function(){var t=$a();if(C_)return/rv:([^\);]+)(\)|;)/.exec(t);if(T_)return/Edge\/([\d\.]+)/.exec(t);if(ws)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(g4)return/WebKit\/(\S+)/.exec(t);if(p4)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(qc&&(jc=qc?qc[1]:""),ws){var Hc=A_();if(Hc!=null&&Hc>parseFloat(jc)){Ol=String(Hc);break e}}Ol=jc}var Dl;if(Q.document&&ws){var Uf=A_();Dl=Uf||parseInt(Ol,10)||void 0}else Dl=void 0;var m4=Dl;function Ai(t,e){if(ot.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(C_){e:{try{Ku(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:_4[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ai.$.h.call(this)}}ze(Ai,ot);var _4={2:"touch",3:"pen",4:"mouse"};Ai.prototype.h=function(){Ai.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ki="closure_listenable_"+(1e6*Math.random()|0),y4=0;function v4(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++y4,this.fa=this.ia=!1}function Ba(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Qu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function w4(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function R_(t){const e={};for(const n in t)e[n]=t[n];return e}const $f="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function b_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<$f.length;i++)n=$f[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ja(t){this.src=t,this.g={},this.h=0}ja.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Vl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new v4(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Nl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=I_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ba(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Vl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Yu="closure_lm_"+(1e6*Math.random()|0),zc={};function S_(t,e,n,r,s){if(r&&r.once)return k_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)S_(t,e[i],n,r,s);return null}return n=Zu(n),t&&t[Ki]?t.O(e,n,Gi(r)?!!r.capture:!!r,s):P_(t,e,n,!1,r,s)}function P_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Gi(s)?!!s.capture:!!s,a=Ju(t);if(a||(t[Yu]=a=new ja(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=E4(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)d4||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(O_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function E4(){function t(n){return e.call(t.src,t.listener,n)}const e=I4;return t}function k_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)k_(t,e[i],n,r,s);return null}return n=Zu(n),t&&t[Ki]?t.P(e,n,Gi(r)?!!r.capture:!!r,s):P_(t,e,n,!0,r,s)}function x_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)x_(t,e[i],n,r,s);else r=Gi(r)?!!r.capture:!!r,n=Zu(n),t&&t[Ki]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Vl(i,n,r,s),-1<n&&(Ba(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Ju(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Vl(e,n,r,s)),(n=-1<t?e[t]:null)&&Xu(n))}function Xu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ki])Nl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(O_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Ju(e))?(Nl(n,t),n.h==0&&(n.src=null,e[Yu]=null)):Ba(t)}}}function O_(t){return t in zc?zc[t]:zc[t]="on"+t}function I4(t,e){if(t.fa)t=!0;else{e=new Ai(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Xu(t),t=n.call(r,e)}return t}function Ju(t){return t=t[Yu],t instanceof ja?t:null}var Wc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Zu(t){return typeof t=="function"?t:(t[Wc]||(t[Wc]=function(e){return t.handleEvent(e)}),t[Wc])}function He(){ar.call(this),this.i=new ja(this),this.S=this,this.J=null}ze(He,ar);He.prototype[Ki]=!0;He.prototype.removeEventListener=function(t,e,n,r){x_(this,t,e,n,r)};function Qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ot(e,t);else if(e instanceof ot)e.target=e.target||t;else{var s=e;e=new ot(r,t),b_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=vo(o,r,!0,e)&&s}if(o=e.g=t,s=vo(o,r,!0,e)&&s,s=vo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=vo(o,r,!1,e)&&s}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ba(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function vo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Nl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var eh=Q.JSON.stringify;class T4{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function C4(){var t=th;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class A4{constructor(){this.h=this.g=null}add(e,n){const r=D_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var D_=new T4(()=>new R4,t=>t.reset());class R4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function b4(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function S4(t){Q.setTimeout(()=>{throw t},0)}let Ri,bi=!1,th=new A4,N_=()=>{const t=Q.Promise.resolve(void 0);Ri=()=>{t.then(P4)}};var P4=()=>{for(var t;t=C4();){try{t.h.call(t.g)}catch(n){S4(n)}var e=D_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}bi=!1};function qa(t,e){He.call(this),this.h=t||1,this.g=e||Q,this.j=it(this.qb,this),this.l=Date.now()}ze(qa,He);O=qa.prototype;O.ga=!1;O.T=null;O.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(nh(this),this.start()))}};O.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function nh(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}O.N=function(){qa.$.N.call(this),nh(this),delete this.g};function rh(t,e,n){if(typeof t=="function")n&&(t=it(t,n));else if(t&&typeof t.handleEvent=="function")t=it(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function V_(t){t.g=rh(()=>{t.g=null,t.i&&(t.i=!1,V_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class k4 extends ar{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:V_(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Si(t){ar.call(this),this.h=t,this.g={}}ze(Si,ar);var Bf=[];function M_(t,e,n,r){Array.isArray(n)||(n&&(Bf[0]=n.toString()),n=Bf);for(var s=0;s<n.length;s++){var i=S_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function L_(t){Qu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Xu(e)},t),t.g={}}Si.prototype.N=function(){Si.$.N.call(this),L_(this)};Si.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ha(){this.g=!0}Ha.prototype.Ea=function(){this.g=!1};function x4(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function O4(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ss(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+N4(t,n)+(r?" "+r:"")})}function D4(t,e){t.info(function(){return"TIMEOUT: "+e})}Ha.prototype.info=function(){};function N4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return eh(n)}catch{return e}}var qr={},jf=null;function za(){return jf=jf||new He}qr.Ta="serverreachability";function F_(t){ot.call(this,qr.Ta,t)}ze(F_,ot);function Pi(t){const e=za();Qe(e,new F_(e))}qr.STAT_EVENT="statevent";function U_(t,e){ot.call(this,qr.STAT_EVENT,t),this.stat=e}ze(U_,ot);function dt(t){const e=za();Qe(e,new U_(e,t))}qr.Ua="timingevent";function $_(t,e){ot.call(this,qr.Ua,t),this.size=e}ze($_,ot);function Qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Wa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},B_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function sh(){}sh.prototype.h=null;function qf(t){return t.h||(t.h=t.i())}function j_(){}var Yi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function ih(){ot.call(this,"d")}ze(ih,ot);function oh(){ot.call(this,"c")}ze(oh,ot);var Ml;function Ga(){}ze(Ga,sh);Ga.prototype.g=function(){return new XMLHttpRequest};Ga.prototype.i=function(){return{}};Ml=new Ga;function Xi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Si(this),this.P=V4,t=xl?125:void 0,this.V=new qa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new q_}function q_(){this.i=null,this.g="",this.h=!1}var V4=45e3,H_={},Ll={};O=Xi.prototype;O.setTimeout=function(t){this.P=t};function Fl(t,e,n){t.L=1,t.A=Qa(Cn(e)),t.u=n,t.S=!0,z_(t,null)}function z_(t,e){t.G=Date.now(),Ji(t),t.B=Cn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Z_(n.i,"t",r),t.o=0,n=t.l.J,t.h=new q_,t.g=w1(t.l,n?e:null,!t.u),0<t.O&&(t.M=new k4(it(t.Pa,t,t.g),t.O)),M_(t.U,t.g,"readystatechange",t.nb),e=t.I?R_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Pi(),x4(t.j,t.v,t.B,t.m,t.W,t.u)}O.nb=function(t){t=t.target;const e=this.M;e&&nn(t)==3?e.l():this.Pa(t)};O.Pa=function(t){try{if(t==this.g)e:{const u=nn(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||xl||this.g&&(this.h.h||this.g.ja()||Gf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Pi(3):Pi(2)),Ka(this);var n=this.g.da();this.ca=n;t:if(W_(this)){var r=Gf(this.g);t="";var s=r.length,i=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),ci(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,O4(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ci(a)){var l=a;break t}}l=null}if(n=l)ss(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ul(this,n);else{this.i=!1,this.s=3,dt(12),yr(this),ci(this);break e}}this.S?(G_(this,u,o),xl&&this.i&&u==3&&(M_(this.U,this.V,"tick",this.mb),this.V.start())):(ss(this.j,this.m,o,null),Ul(this,o)),u==4&&yr(this),this.i&&!this.J&&(u==4?m1(this.l,this):(this.i=!1,Ji(this)))}else nR(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,dt(12)):(this.s=0,dt(13)),yr(this),ci(this)}}}catch{}finally{}};function W_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function G_(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=M4(t,n),s==Ll){e==4&&(t.s=4,dt(14),r=!1),ss(t.j,t.m,null,"[Incomplete Response]");break}else if(s==H_){t.s=4,dt(15),ss(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ss(t.j,t.m,s,null),Ul(t,s);W_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,dt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),dh(e),e.M=!0,dt(11))):(ss(t.j,t.m,n,"[Invalid Chunked Response]"),yr(t),ci(t))}O.mb=function(){if(this.g){var t=nn(this.g),e=this.g.ja();this.o<e.length&&(Ka(this),G_(this,t,e),this.i&&t!=4&&Ji(this))}};function M4(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Ll:(n=Number(e.substring(n,r)),isNaN(n)?H_:(r+=1,r+n>e.length?Ll:(e=e.slice(r,r+n),t.o=r+n,e)))}O.cancel=function(){this.J=!0,yr(this)};function Ji(t){t.Y=Date.now()+t.P,K_(t,t.P)}function K_(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Qi(it(t.lb,t),e)}function Ka(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}O.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(D4(this.j,this.B),this.L!=2&&(Pi(),dt(17)),yr(this),this.s=2,ci(this)):K_(this,this.Y-t)};function ci(t){t.l.H==0||t.J||m1(t.l,t)}function yr(t){Ka(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,nh(t.V),L_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Ul(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||$l(n.i,t))){if(!t.K&&$l(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)oa(n),Za(n);else break e;hh(n),dt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qi(it(n.ib,n),6e3));if(1>=n1(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vr(n,11)}else if((t.K||n.g==t)&&oa(n),!Ci(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const _=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var i=r.i;i.g||_.indexOf("spdy")==-1&&_.indexOf("quic")==-1&&_.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(ah(i,i.h),i.h=null))}if(r.F){const I=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;I&&(r.Da=I,Re(r.I,r.F,I))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=v1(r,r.J?r.pa:null,r.Y),o.K){r1(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(Ka(a),Ji(a)),r.g=o}else p1(r);0<n.j.length&&ec(n)}else l[0]!="stop"&&l[0]!="close"||vr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?vr(n,7):uh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Pi(4)}catch{}}function L4(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ua(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function F4(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ua(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Q_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ua(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=F4(t),r=L4(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Y_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function U4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ar(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ar){this.h=t.h,sa(this,t.j),this.s=t.s,this.g=t.g,ia(this,t.m),this.l=t.l;var e=t.i,n=new ki;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Hf(this,n),this.o=t.o}else t&&(e=String(t).match(Y_))?(this.h=!1,sa(this,e[1]||"",!0),this.s=Qs(e[2]||""),this.g=Qs(e[3]||"",!0),ia(this,e[4]),this.l=Qs(e[5]||"",!0),Hf(this,e[6]||"",!0),this.o=Qs(e[7]||"")):(this.h=!1,this.i=new ki(null,this.h))}Ar.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ys(e,zf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ys(e,zf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ys(n,n.charAt(0)=="/"?j4:B4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ys(n,H4)),t.join("")};function Cn(t){return new Ar(t)}function sa(t,e,n){t.j=n?Qs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ia(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Hf(t,e,n){e instanceof ki?(t.i=e,z4(t.i,t.h)):(n||(e=Ys(e,q4)),t.i=new ki(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Qa(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ys(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,$4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var zf=/[#\/\?@]/g,B4=/[#\?:]/g,j4=/[#\?]/g,q4=/[#\?@]/g,H4=/#/g;function ki(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function cr(t){t.g||(t.g=new Map,t.h=0,t.i&&U4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}O=ki.prototype;O.add=function(t,e){cr(this),this.i=null,t=Os(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function X_(t,e){cr(t),e=Os(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function J_(t,e){return cr(t),e=Os(t,e),t.g.has(e)}O.forEach=function(t,e){cr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};O.ta=function(){cr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};O.Z=function(t){cr(this);let e=[];if(typeof t=="string")J_(this,t)&&(e=e.concat(this.g.get(Os(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};O.set=function(t,e){return cr(this),this.i=null,t=Os(this,t),J_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};O.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Z_(t,e,n){X_(t,e),0<n.length&&(t.i=null,t.g.set(Os(t,e),Gu(n)),t.h+=n.length)}O.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Os(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function z4(t,e){e&&!t.j&&(cr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(X_(this,r),Z_(this,s,n))},t)),t.j=e}var W4=class{constructor(t,e){this.g=t,this.map=e}};function e1(t){this.l=t||G4,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var G4=10;function t1(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function n1(t){return t.h?1:t.g?t.g.size:0}function $l(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ah(t,e){t.g?t.g.add(e):t.h=e}function r1(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}e1.prototype.cancel=function(){if(this.i=s1(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function s1(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Gu(t.i)}var K4=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function Q4(){this.g=new K4}function Y4(t,e,n){const r=n||"";try{Q_(t,function(s,i){let o=s;Gi(s)&&(o=eh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function X4(t,e){const n=new Ha;if(Q.Image){const r=new Image;r.onload=yo(wo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=yo(wo,n,r,"TestLoadImage: error",!1,e),r.onabort=yo(wo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=yo(wo,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function wo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ya(t){this.l=t.ec||null,this.j=t.ob||!1}ze(Ya,sh);Ya.prototype.g=function(){return new Xa(this.l,this.j)};Ya.prototype.i=function(t){return function(){return t}}({});function Xa(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=ch,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Xa,He);var ch=0;O=Xa.prototype;O.open=function(t,e){if(this.readyState!=ch)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,xi(this)};O.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};O.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=ch};O.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,xi(this)),this.g&&(this.readyState=3,xi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;i1(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function i1(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}O.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zi(this):xi(this),this.readyState==3&&i1(this)}};O.Za=function(t){this.g&&(this.response=this.responseText=t,Zi(this))};O.Ya=function(t){this.g&&(this.response=t,Zi(this))};O.ka=function(){this.g&&Zi(this)};function Zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,xi(t)}O.setRequestHeader=function(t,e){this.v.append(t,e)};O.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};O.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function xi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Xa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var J4=Q.JSON.parse;function xe(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=o1,this.L=this.M=!1}ze(xe,He);var o1="",Z4=/^https?$/i,eR=["POST","PUT"];O=xe.prototype;O.Oa=function(t){this.M=t};O.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Ml.g(),this.C=this.u?qf(this.u):qf(Ml),this.g.onreadystatechange=it(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Wf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=I_(eR,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{l1(this),0<this.B&&((this.L=tR(this.g))?(this.g.timeout=this.B,this.g.ontimeout=it(this.ua,this)):this.A=rh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Wf(this,i)}};function tR(t){return ws&&typeof t.timeout=="number"&&t.ontimeout!==void 0}O.ua=function(){typeof Wu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Wf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,a1(t),Ja(t)}function a1(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}O.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Ja(this))};O.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ja(this,!0)),xe.$.N.call(this)};O.La=function(){this.s||(this.G||this.v||this.l?c1(this):this.kb())};O.kb=function(){c1(this)};function c1(t){if(t.h&&typeof Wu<"u"&&(!t.C[1]||nn(t)!=4||t.da()!=2)){if(t.v&&nn(t)==4)rh(t.La,0,t);else if(Qe(t,"readystatechange"),nn(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Y_)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!Z4.test(s?s.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var i=2<nn(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",a1(t)}}finally{Ja(t)}}}}function Ja(t,e){if(t.g){l1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function l1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}O.isActive=function(){return!!this.g};function nn(t){return t.g?t.g.readyState:0}O.da=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}};O.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};O.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),J4(e)}};function Gf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case o1:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function nR(t){const e={};t=(t.g&&2<=nn(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ci(t[r]))continue;var n=b4(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}w4(e,function(r){return r.join(", ")})}O.Ia=function(){return this.m};O.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function u1(t){let e="";return Qu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function lh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=u1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function js(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function h1(t){this.Ga=0,this.j=[],this.l=new Ha,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=js("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=js("baseRetryDelayMs",5e3,t),this.hb=js("retryDelaySeedMs",1e4,t),this.eb=js("forwardChannelMaxRetries",2,t),this.xa=js("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new e1(t&&t.concurrentRequestLimit),this.Ja=new Q4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}O=h1.prototype;O.ra=8;O.H=1;function uh(t){if(d1(t),t.H==3){var e=t.W++,n=Cn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),eo(t,n),e=new Xi(t,t.l,e),e.L=2,e.A=Qa(Cn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=w1(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Ji(e)}y1(t)}function Za(t){t.g&&(dh(t),t.g.cancel(),t.g=null)}function d1(t){Za(t),t.u&&(Q.clearTimeout(t.u),t.u=null),oa(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function ec(t){if(!t1(t.i)&&!t.m){t.m=!0;var e=t.Na;Ri||N_(),bi||(Ri(),bi=!0),th.add(e,t),t.C=0}}function rR(t,e){return n1(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Qi(it(t.Na,t,e),_1(t,t.C)),t.C++,!0)}O.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Xi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=R_(i),b_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=f1(this,s,e),n=Cn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),eo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(u1(i)))+"&"+e:this.o&&lh(n,this.o,i)),ah(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,Fl(s,n,null)):Fl(s,n,e),this.H=2}}else this.H==3&&(t?Kf(this,t):this.j.length==0||t1(this.i)||Kf(this))};function Kf(t,e){var n;e?n=e.m:n=t.W++;const r=Cn(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),eo(t,r),t.o&&t.s&&lh(r,t.o,t.s),n=new Xi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=f1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),ah(t.i,n),Fl(n,r,e)}function eo(t,e){t.na&&Qu(t.na,function(n,r){Re(e,r,n)}),t.h&&Q_({},function(n,r){Re(e,r,n)})}function f1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?it(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{Y4(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function p1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ri||N_(),bi||(Ri(),bi=!0),th.add(e,t),t.A=0}}function hh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Qi(it(t.Ma,t),_1(t,t.A)),t.A++,!0)}O.Ma=function(){if(this.u=null,g1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Qi(it(this.jb,this),t)}};O.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,dt(10),Za(this),g1(this))};function dh(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function g1(t){t.g=new Xi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Cn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),eo(t,e),t.o&&t.s&&lh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Qa(Cn(e)),n.u=null,n.S=!0,z_(n,t)}O.ib=function(){this.v!=null&&(this.v=null,Za(this),hh(this),dt(19))};function oa(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function m1(t,e){var n=null;if(t.g==e){oa(t),dh(t),t.g=null;var r=2}else if($l(t.i,e))n=e.F,r1(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=za(),Qe(r,new $_(r,n)),ec(t)}else p1(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&rR(t,e)||r==2&&hh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:vr(t,5);break;case 4:vr(t,10);break;case 3:vr(t,6);break;default:vr(t,2)}}}function _1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=it(t.pb,t);n||(n=new Ar("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||sa(n,"https"),Qa(n)),X4(n.toString(),r)}else dt(2);t.H=0,t.h&&t.h.za(e),y1(t),d1(t)}O.pb=function(t){t?(this.l.info("Successfully pinged google.com"),dt(2)):(this.l.info("Failed to ping google.com"),dt(1))};function y1(t){if(t.H=0,t.ma=[],t.h){const e=s1(t.i);(e.length!=0||t.j.length!=0)&&(Ff(t.ma,e),Ff(t.ma,t.j),t.i.i.length=0,Gu(t.j),t.j.length=0),t.h.ya()}}function v1(t,e,n){var r=n instanceof Ar?Cn(n):new Ar(n);if(r.g!="")e&&(r.g=e+"."+r.g),ia(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ar(null);r&&sa(i,r),e&&(i.g=e),s&&ia(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),eo(t,r),r}function w1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new xe(new Ya({ob:n})):new xe(t.va),e.Oa(t.J),e}O.isActive=function(){return!!this.h&&this.h.isActive(this)};function E1(){}O=E1.prototype;O.Ba=function(){};O.Aa=function(){};O.za=function(){};O.ya=function(){};O.isActive=function(){return!0};O.Va=function(){};function aa(){if(ws&&!(10<=Number(m4)))throw Error("Environmental error: no available transport.")}aa.prototype.g=function(t,e){return new St(t,e)};function St(t,e){He.call(this),this.g=new h1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ci(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ci(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ds(this)}ze(St,He);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;dt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=v1(t,null,t.Y),ec(t)};St.prototype.close=function(){uh(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=eh(t),t=n);e.j.push(new W4(e.fb++,t)),e.H==3&&ec(e)};St.prototype.N=function(){this.g.h=null,delete this.j,uh(this.g),delete this.g,St.$.N.call(this)};function I1(t){ih.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(I1,ih);function T1(){oh.call(this),this.status=1}ze(T1,oh);function Ds(t){this.g=t}ze(Ds,E1);Ds.prototype.Ba=function(){Qe(this.g,"a")};Ds.prototype.Aa=function(t){Qe(this.g,new I1(t))};Ds.prototype.za=function(t){Qe(this.g,new T1)};Ds.prototype.ya=function(){Qe(this.g,"b")};function sR(){this.blockSize=-1}function Kt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(Kt,sR);Kt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Gc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Kt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Gc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Gc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Gc(this,r),s=0;break}}this.h=s,this.i+=e};Kt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ve(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var iR={};function fh(t){return-128<=t&&128>t?f4(t,function(e){return new ve([e|0],0>e?-1:0)}):new ve([t|0],0>t?-1:0)}function rn(t){if(isNaN(t)||!isFinite(t))return us;if(0>t)return Ge(rn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Bl;return new ve(e,0)}function C1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ge(C1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=rn(Math.pow(e,8)),r=us,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=rn(Math.pow(e,i)),r=r.R(i).add(rn(o))):(r=r.R(n),r=r.add(rn(o)))}return r}var Bl=4294967296,us=fh(0),jl=fh(1),Qf=fh(16777216);O=ve.prototype;O.ea=function(){if(xt(this))return-Ge(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Bl+r)*e,e*=Bl}return t};O.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(wn(this))return"0";if(xt(this))return"-"+Ge(this).toString(t);for(var e=rn(Math.pow(t,6)),n=this,r="";;){var s=la(n,e).g;n=ca(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,wn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};O.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function wn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function xt(t){return t.h==-1}O.X=function(t){return t=ca(this,t),xt(t)?-1:wn(t)?0:1};function Ge(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ve(n,~t.h).add(jl)}O.abs=function(){return xt(this)?Ge(this):this};O.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ve(n,n[n.length-1]&-2147483648?-1:0)};function ca(t,e){return t.add(Ge(e))}O.R=function(t){if(wn(this)||wn(t))return us;if(xt(this))return xt(t)?Ge(this).R(Ge(t)):Ge(Ge(this).R(t));if(xt(t))return Ge(this.R(Ge(t)));if(0>this.X(Qf)&&0>t.X(Qf))return rn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Eo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Eo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Eo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Eo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ve(n,0)};function Eo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function qs(t,e){this.g=t,this.h=e}function la(t,e){if(wn(e))throw Error("division by zero");if(wn(t))return new qs(us,us);if(xt(t))return e=la(Ge(t),e),new qs(Ge(e.g),Ge(e.h));if(xt(e))return e=la(t,Ge(e)),new qs(Ge(e.g),e.h);if(30<t.g.length){if(xt(t)||xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=jl,r=e;0>=r.X(t);)n=Yf(n),r=Yf(r);var s=Xr(n,1),i=Xr(r,1);for(r=Xr(r,2),n=Xr(n,2);!wn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Xr(r,1),n=Xr(n,1)}return e=ca(t,s.R(e)),new qs(s,e)}for(s=us;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=rn(n),o=i.R(e);xt(o)||0<o.X(t);)n-=r,i=rn(n),o=i.R(e);wn(i)&&(i=jl),s=s.add(i),t=ca(t,o)}return new qs(s,t)}O.gb=function(t){return la(this,t).h};O.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ve(n,this.h&t.h)};O.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ve(n,this.h|t.h)};O.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ve(n,this.h^t.h)};function Yf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ve(n,t.h)}function Xr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ve(s,t.h)}aa.prototype.createWebChannel=aa.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;Wa.NO_ERROR=0;Wa.TIMEOUT=8;Wa.HTTP_ERROR=6;B_.COMPLETE="complete";j_.EventType=Yi;Yi.OPEN="a";Yi.CLOSE="b";Yi.ERROR="c";Yi.MESSAGE="d";He.prototype.listen=He.prototype.O;xe.prototype.listenOnce=xe.prototype.P;xe.prototype.getLastError=xe.prototype.Sa;xe.prototype.getLastErrorCode=xe.prototype.Ia;xe.prototype.getStatus=xe.prototype.da;xe.prototype.getResponseJson=xe.prototype.Wa;xe.prototype.getResponseText=xe.prototype.ja;xe.prototype.send=xe.prototype.ha;xe.prototype.setWithCredentials=xe.prototype.Oa;Kt.prototype.digest=Kt.prototype.l;Kt.prototype.reset=Kt.prototype.reset;Kt.prototype.update=Kt.prototype.j;ve.prototype.add=ve.prototype.add;ve.prototype.multiply=ve.prototype.R;ve.prototype.modulo=ve.prototype.gb;ve.prototype.compare=ve.prototype.X;ve.prototype.toNumber=ve.prototype.ea;ve.prototype.toString=ve.prototype.toString;ve.prototype.getBits=ve.prototype.D;ve.fromNumber=rn;ve.fromString=C1;var oR=function(){return new aa},aR=function(){return za()},Kc=Wa,cR=B_,lR=qr,Xf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Io=j_,uR=xe,hR=Kt,hs=ve;const Jf="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ns="10.7.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nr=new Oa("@firebase/firestore");function Hs(){return Nr.logLevel}function $(t,...e){if(Nr.logLevel<=ie.DEBUG){const n=e.map(ph);Nr.debug(`Firestore (${Ns}): ${t}`,...n)}}function An(t,...e){if(Nr.logLevel<=ie.ERROR){const n=e.map(ph);Nr.error(`Firestore (${Ns}): ${t}`,...n)}}function Es(t,...e){if(Nr.logLevel<=ie.WARN){const n=e.map(ph);Nr.warn(`Firestore (${Ns}): ${t}`,...n)}}function ph(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t="Unexpected state"){const e=`FIRESTORE (${Ns}) INTERNAL ASSERTION FAILED: `+t;throw An(e),new Error(e)}function Te(t,e){t||K()}function Z(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class M extends Lt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class fR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class pR{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new In;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new In,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new In)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string"),new A1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string"),new tt(e)}}class gR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new gR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _R{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Te(typeof n.token=="string"),this.R=n.token,new _R(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=vR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function fe(t,e){return t<e?-1:t>e?1:0}function Is(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new M(E.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new M(E.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Fe.fromMillis(Date.now())}static fromDate(e){return Fe.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Fe(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Fe(0,0))}static max(){return new X(new Fe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{constructor(e,n,r){n===void 0?n=0:n>e.length&&K(),r===void 0?r=e.length-n:r>e.length-n&&K(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class be extends Oi{construct(e,n,r){return new be(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new M(E.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new be(n)}static emptyPath(){return new be([])}}const wR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Oi{construct(e,n,r){return new Ke(e,n,r)}static isValidIdentifier(e){return wR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ke(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new M(E.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new M(E.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new M(E.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(n)}static emptyPath(){return new Ke([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(be.fromString(e))}static fromName(e){return new H(be.fromString(e).popFirst(5))}static empty(){return new H(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&be.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return be.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new be(e.slice()))}}function ER(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new Fe(n+1,0):new Fe(n,r));return new tr(s,H.empty(),e)}function IR(t){return new tr(t.readTime,t.key,-1)}class tr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new tr(X.min(),H.empty(),-1)}static max(){return new tr(X.max(),H.empty(),-1)}}function TR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:fe(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class AR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function to(t){if(t.code!==E.FAILED_PRECONDITION||t.message!==CR)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&K(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function no(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}gh._e=-1;function tc(t){return t==null}function ua(t){return t===0&&1/t==-1/0}function RR(t){return typeof t=="number"&&Number.isInteger(t)&&!ua(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Hr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function b1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new To(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new To(this.root,e,this.comparator,!1)}getReverseIterator(){return new To(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new To(this.root,e,this.comparator,!0)}}class To{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw K();const e=this.left.check();if(e!==this.right.check())throw K();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw K()}get value(){throw K()}get color(){throw K()}get left(){throw K()}get right(){throw K()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new ep(this.data.getIterator())}getIteratorFrom(e){return new ep(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class ep{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new At([])}unionWith(e){let n=new Ye(Ke.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new At(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Is(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ct{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new S1("Invalid base64 string: "+i):i}}(e);return new ct(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ct(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ct.EMPTY_BYTE_STRING=new ct("");const bR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(t){if(Te(!!t),typeof t=="string"){let e=0;const n=bR.exec(t);if(Te(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vr(t){return typeof t=="string"?ct.fromBase64String(t):ct.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function _h(t){const e=t.mapValue.fields.__previous_value__;return mh(e)?_h(e):e}function Di(t){const e=nr(t.mapValue.fields.__local_write_time__.timestampValue);return new Fe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Ni{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Ni("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Ni&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Mr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?mh(t)?4:PR(t)?9007199254740991:10:K()}function hn(t,e){if(t===e)return!0;const n=Mr(t);if(n!==Mr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Di(t).isEqual(Di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=nr(s.timestampValue),a=nr(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Vr(s.bytesValue).isEqual(Vr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?ua(o)===ua(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Is(t.arrayValue.values||[],e.arrayValue.values||[],hn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Zf(o)!==Zf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!hn(o[c],a[c])))return!1;return!0}(t,e);default:return K()}}function Vi(t,e){return(t.values||[]).find(n=>hn(n,e))!==void 0}function Ts(t,e){if(t===e)return 0;const n=Mr(t),r=Mr(e);if(n!==r)return fe(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return fe(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),c=Ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return tp(t.timestampValue,e.timestampValue);case 4:return tp(Di(t),Di(e));case 5:return fe(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Vr(i),c=Vr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=fe(a[l],c[l]);if(u!==0)return u}return fe(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=fe(Ve(i.latitude),Ve(o.latitude));return a!==0?a:fe(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=Ts(a[l],c[l]);if(u)return u}return fe(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Co.mapValue&&o===Co.mapValue)return 0;if(i===Co.mapValue)return 1;if(o===Co.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=fe(c[h],u[h]);if(d!==0)return d;const f=Ts(a[c[h]],l[u[h]]);if(f!==0)return f}return fe(c.length,u.length)}(t.mapValue,e.mapValue);default:throw K()}}function tp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return fe(t,e);const n=nr(t),r=nr(e),s=fe(n.seconds,r.seconds);return s!==0?s:fe(n.nanos,r.nanos)}function Cs(t){return ql(t)}function ql(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=nr(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Vr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=ql(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${ql(n.fields[o])}`;return s+"}"}(t.mapValue):K()}function np(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Hl(t){return!!t&&"integerValue"in t}function yh(t){return!!t&&"arrayValue"in t}function rp(t){return!!t&&"nullValue"in t}function sp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Fo(t){return!!t&&"mapValue"in t}function li(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Hr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=li(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=li(t.arrayValue.values[n]);return e}return Object.assign({},t)}function PR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Fo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=li(n)}setAll(e){let n=Ke.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=li(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Fo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return hn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Fo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Hr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(li(this.value))}}function P1(t){const e=[];return Hr(t.fields,(n,r)=>{const s=new Ke([n]);if(Fo(r)){const i=P1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),mt.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),mt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e,n){this.position=e,this.inclusive=n}}function ip(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Ts(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function op(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!hn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function kR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k1{}class Le extends k1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new OR(e,n,r):n==="array-contains"?new VR(e,r):n==="in"?new MR(e,r):n==="not-in"?new LR(e,r):n==="array-contains-any"?new FR(e,r):new Le(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new DR(e,r):new NR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ts(n,this.value)):n!==null&&Mr(this.value)===Mr(n)&&this.matchesComparison(Ts(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return K()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Qt extends k1{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Qt(e,n)}matches(e){return x1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function x1(t){return t.op==="and"}function O1(t){return xR(t)&&x1(t)}function xR(t){for(const e of t.filters)if(e instanceof Qt)return!1;return!0}function zl(t){if(t instanceof Le)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(O1(t))return t.filters.map(e=>zl(e)).join(",");{const e=t.filters.map(n=>zl(n)).join(",");return`${t.op}(${e})`}}function D1(t,e){return t instanceof Le?function(r,s){return s instanceof Le&&r.op===s.op&&r.field.isEqual(s.field)&&hn(r.value,s.value)}(t,e):t instanceof Qt?function(r,s){return s instanceof Qt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&D1(o,s.filters[a]),!0):!1}(t,e):void K()}function N1(t){return t instanceof Le?function(n){return`${n.field.canonicalString()} ${n.op} ${Cs(n.value)}`}(t):t instanceof Qt?function(n){return n.op.toString()+" {"+n.getFilters().map(N1).join(" ,")+"}"}(t):"Filter"}class OR extends Le{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class DR extends Le{constructor(e,n){super(e,"in",n),this.keys=V1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class NR extends Le{constructor(e,n){super(e,"not-in",n),this.keys=V1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function V1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class VR extends Le{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yh(n)&&Vi(n.arrayValue,this.value)}}class MR extends Le{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Vi(this.value.arrayValue,n)}}class LR extends Le{constructor(e,n){super(e,"not-in",n)}matches(e){if(Vi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Vi(this.value.arrayValue,n)}}class FR extends Le{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Vi(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function ap(t,e=null,n=[],r=[],s=null,i=null,o=null){return new UR(t,e,n,r,s,i,o)}function vh(t){const e=Z(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>zl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),tc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ce=n}return e.ce}function wh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!kR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!D1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!op(t.startAt,e.startAt)&&op(t.endAt,e.endAt)}function Wl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function $R(t,e,n,r,s,i,o,a){return new Vs(t,e,n,r,s,i,o,a)}function Eh(t){return new Vs(t)}function cp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function M1(t){return t.collectionGroup!==null}function ui(t){const e=Z(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(Ke.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Mi(i,r))}),n.has(Ke.keyField().canonicalString())||e.le.push(new Mi(Ke.keyField(),r))}return e.le}function cn(t){const e=Z(t);return e.he||(e.he=BR(e,ui(t))),e.he}function BR(t,e){if(t.limitType==="F")return ap(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mi(s.field,i)});const n=t.endAt?new ha(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ha(t.startAt.position,t.startAt.inclusive):null;return ap(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Gl(t,e){const n=t.filters.concat([e]);return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Kl(t,e,n){return new Vs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nc(t,e){return wh(cn(t),cn(e))&&t.limitType===e.limitType}function L1(t){return`${vh(cn(t))}|lt:${t.limitType}`}function Zr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>N1(s)).join(", ")}]`),tc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Cs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Cs(s)).join(",")),`Target(${r})`}(cn(t))}; limitType=${t.limitType})`}function rc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ui(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=ip(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ui(r),s)||r.endAt&&!function(o,a,c){const l=ip(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ui(r),s))}(t,e)}function jR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F1(t){return(e,n)=>{let r=!1;for(const s of ui(t)){const i=qR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function qR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?Ts(c,l):K()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return K()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Hr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return b1(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HR=new ke(H.comparator);function Rn(){return HR}const U1=new ke(H.comparator);function Xs(...t){let e=U1;for(const n of t)e=e.insert(n.key,n);return e}function $1(t){let e=U1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function wr(){return hi()}function B1(){return hi()}function hi(){return new Ms(t=>t.toString(),(t,e)=>t.isEqual(e))}const zR=new ke(H.comparator),WR=new Ye(H.comparator);function se(...t){let e=WR;for(const n of t)e=e.add(n);return e}const GR=new Ye(fe);function KR(){return GR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ua(e)?"-0":e}}function q1(t){return{integerValue:""+t}}function QR(t,e){return RR(e)?q1(e):j1(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(){this._=void 0}}function YR(t,e,n){return t instanceof Li?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&mh(i)&&(i=_h(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Fi?z1(t,e):t instanceof Ui?W1(t,e):function(s,i){const o=H1(s,i),a=lp(o)+lp(s.Ie);return Hl(o)&&Hl(s.Ie)?q1(a):j1(s.serializer,a)}(t,e)}function XR(t,e,n){return t instanceof Fi?z1(t,e):t instanceof Ui?W1(t,e):n}function H1(t,e){return t instanceof da?function(r){return Hl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Li extends sc{}class Fi extends sc{constructor(e){super(),this.elements=e}}function z1(t,e){const n=G1(e);for(const r of t.elements)n.some(s=>hn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Ui extends sc{constructor(e){super(),this.elements=e}}function W1(t,e){let n=G1(e);for(const r of t.elements)n=n.filter(s=>!hn(s,r));return{arrayValue:{values:n}}}class da extends sc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function lp(t){return Ve(t.integerValue||t.doubleValue)}function G1(t){return yh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n){this.field=e,this.transform=n}}function ZR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Fi&&s instanceof Fi||r instanceof Ui&&s instanceof Ui?Is(r.elements,s.elements,hn):r instanceof da&&s instanceof da?hn(r.Ie,s.Ie):r instanceof Li&&s instanceof Li}(t.transform,e.transform)}class e5{constructor(e,n){this.version=e,this.transformResults=n}}class zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new zt}static exists(e){return new zt(void 0,e)}static updateTime(e){return new zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Uo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ic{}function K1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Y1(t.key,zt.none()):new ro(t.key,t.data,zt.none());{const n=t.data,r=mt.empty();let s=new Ye(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new lr(t.key,r,new At(s.toArray()),zt.none())}}function t5(t,e,n){t instanceof ro?function(s,i,o){const a=s.value.clone(),c=hp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof lr?function(s,i,o){if(!Uo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=hp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Q1(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function di(t,e,n,r){return t instanceof ro?function(i,o,a,c){if(!Uo(i.precondition,o))return a;const l=i.value.clone(),u=dp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof lr?function(i,o,a,c){if(!Uo(i.precondition,o))return a;const l=dp(i.fieldTransforms,c,o),u=o.data;return u.setAll(Q1(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Uo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function n5(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=H1(r.transform,s||null);i!=null&&(n===null&&(n=mt.empty()),n.set(r.field,i))}return n||null}function up(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Is(r,s,(i,o)=>ZR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends ic{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class lr extends ic{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Q1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function hp(t,e,n){const r=new Map;Te(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,XR(o,a,n[s]))}return r}function dp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,YR(i,o,e))}return r}class Y1 extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class r5 extends ic{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s5{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&t5(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=di(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=B1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=K1(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),se())}isEqual(e){return this.batchId===e.batchId&&Is(this.mutations,e.mutations,(n,r)=>up(n,r))&&Is(this.baseMutations,e.baseMutations,(n,r)=>up(n,r))}}class Ih{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Te(e.mutations.length===r.length);let s=function(){return zR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Ih(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i5{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o5{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ne,ae;function a5(t){switch(t){default:return K();case E.CANCELLED:case E.UNKNOWN:case E.DEADLINE_EXCEEDED:case E.RESOURCE_EXHAUSTED:case E.INTERNAL:case E.UNAVAILABLE:case E.UNAUTHENTICATED:return!1;case E.INVALID_ARGUMENT:case E.NOT_FOUND:case E.ALREADY_EXISTS:case E.PERMISSION_DENIED:case E.FAILED_PRECONDITION:case E.ABORTED:case E.OUT_OF_RANGE:case E.UNIMPLEMENTED:case E.DATA_LOSS:return!0}}function X1(t){if(t===void 0)return An("GRPC error has no .code"),E.UNKNOWN;switch(t){case Ne.OK:return E.OK;case Ne.CANCELLED:return E.CANCELLED;case Ne.UNKNOWN:return E.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return E.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return E.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return E.INTERNAL;case Ne.UNAVAILABLE:return E.UNAVAILABLE;case Ne.UNAUTHENTICATED:return E.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return E.INVALID_ARGUMENT;case Ne.NOT_FOUND:return E.NOT_FOUND;case Ne.ALREADY_EXISTS:return E.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return E.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return E.FAILED_PRECONDITION;case Ne.ABORTED:return E.ABORTED;case Ne.OUT_OF_RANGE:return E.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return E.UNIMPLEMENTED;case Ne.DATA_LOSS:return E.DATA_LOSS;default:return K()}}(ae=Ne||(Ne={}))[ae.OK=0]="OK",ae[ae.CANCELLED=1]="CANCELLED",ae[ae.UNKNOWN=2]="UNKNOWN",ae[ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ae[ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ae[ae.NOT_FOUND=5]="NOT_FOUND",ae[ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",ae[ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",ae[ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",ae[ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ae[ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ae[ae.ABORTED=10]="ABORTED",ae[ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",ae[ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",ae[ae.INTERNAL=13]="INTERNAL",ae[ae.UNAVAILABLE=14]="UNAVAILABLE",ae[ae.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c5(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l5=new hs([4294967295,4294967295],0);function fp(t){const e=c5().encode(t),n=new hR;return n.update(e),new Uint8Array(n.digest())}function pp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new hs([n,r],0),new hs([s,i],0)]}class Th{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Js(`Invalid padding: ${n}`);if(r<0)throw new Js(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Js(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Js(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=hs.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(hs.fromNumber(r)));return s.compare(l5)===1&&(s=new hs([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=fp(e),[r,s]=pp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Th(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=fp(e),[r,s]=pp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Js extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new oc(X.min(),s,new ke(fe),Rn(),se())}}class so{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new so(r,n,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class J1{constructor(e,n){this.targetId=e,this.fe=n}}class Z1{constructor(e,n,r=ct.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class gp{constructor(){this.ge=0,this.pe=_p(),this.ye=ct.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=se(),n=se(),r=se();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:K()}}),new so(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=_p()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Te(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class u5{constructor(e){this.Le=e,this.ke=new Map,this.qe=Rn(),this.Qe=mp(),this.Ke=new ke(fe)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:K()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Wl(i))if(r===0){const o=new H(i.path);this.We(n,o,nt.newNoDocument(o,X.min()))}else Te(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Vr(r).toUint8Array()}catch(c){if(c instanceof S1)return Es("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new Th(o,s,i)}catch(c){return Es(c instanceof Js?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Wl(a.target)){const c=new H(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,nt.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=se();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new oc(e,n,this.Ke,this.qe,r);return this.qe=Rn(),this.Qe=mp(),this.Ke=new ke(fe),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new gp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ye(fe),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new gp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function mp(){return new ke(H.comparator)}function _p(){return new ke(H.comparator)}const h5={asc:"ASCENDING",desc:"DESCENDING"},d5={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},f5={and:"AND",or:"OR"};class p5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Ql(t,e){return t.useProto3Json||tc(e)?e:{value:e}}function fa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ey(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function g5(t,e){return fa(t,e.toTimestamp())}function ln(t){return Te(!!t),X.fromTimestamp(function(n){const r=nr(n);return new Fe(r.seconds,r.nanos)}(t))}function Ch(t,e){return function(r){return new be(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function ty(t){const e=be.fromString(t);return Te(iy(e)),e}function Yl(t,e){return Ch(t.databaseId,e.path)}function Qc(t,e){const n=ty(e);if(n.get(1)!==t.databaseId.projectId)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new M(E.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(ny(n))}function Xl(t,e){return Ch(t.databaseId,e)}function m5(t){const e=ty(t);return e.length===4?be.emptyPath():ny(e)}function Jl(t){return new be(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ny(t){return Te(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function yp(t,e,n){return{name:Yl(t,e),fields:n.value.mapValue.fields}}function _5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:K()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Te(u===void 0||typeof u=="string"),ct.fromBase64String(u||"")):(Te(u===void 0||u instanceof Uint8Array),ct.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?E.UNKNOWN:X1(l.code);return new M(u,l.message||"")}(o);n=new Z1(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Qc(t,r.document.name),i=ln(r.document.updateTime),o=r.document.createTime?ln(r.document.createTime):X.min(),a=new mt({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new $o(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Qc(t,r.document),i=r.readTime?ln(r.readTime):X.min(),o=nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new $o([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Qc(t,r.document),i=r.removedTargetIds||[];n=new $o([],i,s,null)}else{if(!("filter"in e))return K();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new o5(s,i),a=r.targetId;n=new J1(a,o)}}return n}function y5(t,e){let n;if(e instanceof ro)n={update:yp(t,e.key,e.value)};else if(e instanceof Y1)n={delete:Yl(t,e.key)};else if(e instanceof lr)n={update:yp(t,e.key,e.data),updateMask:b5(e.fieldMask)};else{if(!(e instanceof r5))return K();n={verify:Yl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Fi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ui)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof da)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw K()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:g5(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:K()}(t,e.precondition)),n}function v5(t,e){return t&&t.length>0?(Te(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?ln(s.updateTime):ln(i);return o.isEqual(X.min())&&(o=ln(i)),new e5(o,s.transformResults||[])}(n,e))):[]}function w5(t,e){return{documents:[Xl(t,e.path)]}}function E5(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Xl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Xl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return sy(Qt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:es(h.field),direction:C5(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Ql(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function I5(t){let e=m5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Te(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=ry(h);return d instanceof Qt&&O1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(_){return new Mi(ts(_.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(_.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,tc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new ha(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new ha(f,d)}(n.endAt)),$R(e,s,o,i,a,"F",c,l)}function T5(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function ry(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=ts(n.unaryFilter.field);return Le.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=ts(n.unaryFilter.field);return Le.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ts(n.unaryFilter.field);return Le.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=ts(n.unaryFilter.field);return Le.create(o,"!=",{nullValue:"NULL_VALUE"});default:return K()}}(t):t.fieldFilter!==void 0?function(n){return Le.create(ts(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return K()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Qt.create(n.compositeFilter.filters.map(r=>ry(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return K()}}(n.compositeFilter.op))}(t):K()}function C5(t){return h5[t]}function A5(t){return d5[t]}function R5(t){return f5[t]}function es(t){return{fieldPath:t.canonicalString()}}function ts(t){return Ke.fromServerFormat(t.fieldPath)}function sy(t){return t instanceof Le?function(n){if(n.op==="=="){if(sp(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NAN"}};if(rp(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(sp(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NAN"}};if(rp(n.value))return{unaryFilter:{field:es(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:es(n.field),op:A5(n.op),value:n.value}}}(t):t instanceof Qt?function(n){const r=n.getFilters().map(s=>sy(s));return r.length===1?r[0]:{compositeFilter:{op:R5(n.op),filters:r}}}(t):K()}function b5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function iy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e,n,r,s,i=X.min(),o=X.min(),a=ct.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S5{constructor(e){this.ut=e}}function P5(t){const e=I5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Kl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k5{constructor(){this.on=new x5}addToCollectionParentIndex(e,n){return this.on.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(tr.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class x5{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(be.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(be.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new As(0)}static Nn(){return new As(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O5{constructor(){this.changes=new Ms(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&di(r.mutation,s,At.empty(),Fe.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,n,r=se()){const s=wr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Xs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=wr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,se()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Rn();const o=hi(),a=function(){return hi()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof lr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),di(u.mutation,l,u.mutation.getFieldMask(),Fe.now())):o.set(l.key,At.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new D5(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=hi();let s=new ke((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||At.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=B1();u.forEach(d=>{if(!i.has(d)){const f=K1(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):M1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(wr());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,se())).next(u=>({batchId:a,changes:$1(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Xs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Xs();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,d){return new Vs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,nt.newInvalidDocument(u)))});let a=Xs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&di(u.mutation,l,At.empty(),Fe.now()),rc(n,l)&&(a=a.insert(c,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V5{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:ln(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:P5(s.bundledQuery),readTime:ln(s.readTime)}}(n)),R.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M5{constructor(){this.overlays=new ke(H.comparator),this.lr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=wr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=wr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=wr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=wr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new i5(n,r));let i=this.lr.get(n);i===void 0&&(i=se(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(){this.hr=new Ye(je.Pr),this.Ir=new Ye(je.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new je(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new je(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new H(new be([])),r=new je(n,e),s=new je(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new be([])),r=new je(n,e),s=new je(n,e+1);let i=se();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new je(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class je{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||fe(e.gr,n.gr)}static Tr(e,n){return fe(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ye(je.Pr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new s5(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new je(n,0),s=new je(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(fe);return n.forEach(s=>{const i=new je(s,0),o=new je(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new je(new H(i),0);let a=new Ye(fe);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),R.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Te(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,s=>{const i=new je(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new je(n,0),s=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F5{constructor(e){this.Cr=e,this.docs=function(){return new ke(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Rn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Rn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||TR(IR(u),r)<=0||(s.has(u.key)||rc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){K()}vr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new U5(this)}getSize(e){return R.resolve(this.size)}}class U5 extends O5{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $5{constructor(e){this.persistence=e,this.Fr=new Ms(n=>vh(n),wh),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new Ah,this.targetCount=0,this.Nr=As.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new As(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.kn(n),R.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Or.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B5{constructor(e,n){this.Br={},this.overlays={},this.Lr=new gh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new $5(this),this.indexManager=new k5,this.remoteDocumentCache=function(s){return new F5(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new S5(n),this.Kr=new V5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new M5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new L5(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new j5(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class j5 extends AR{constructor(e){super(),this.currentSequenceNumber=e}}class Rh{constructor(e){this.persistence=e,this.Gr=new Ah,this.zr=null}static jr(e){return new Rh(e)}get Hr(){if(this.zr)return this.zr;throw K()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const s=H.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=se(),s=se();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new bh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H5{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new q5;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Hs()<=ie.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Zr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),R.resolve()):(Hs()<=ie.DEBUG&&$("QueryEngine","Query:",Zr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Hs()<=ie.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Zr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,cn(n))):R.resolve())}zi(e,n){if(cp(n))return R.resolve(null);let r=cn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Kl(n,null,"F"),r=cn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Kl(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return cp(n)||s.isEqual(X.min())?R.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?R.resolve(null):(Hs()<=ie.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Zr(n)),this.Xi(e,o,n,ER(s,-1)).next(a=>a))})}Yi(e,n){let r=new Ye(F1(e));return n.forEach((s,i)=>{rc(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Hs()<=ie.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Zr(n)),this.Gi.getDocumentsMatchingQuery(e,n,tr.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z5{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new ke(fe),this.ns=new Ms(i=>vh(i),wh),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new N5(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function W5(t,e,n,r){return new z5(t,e,n,r)}async function oy(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function G5(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=R.resolve();return d.forEach(_=>{f=f.next(()=>u.getEntry(c,_)).next(I=>{const v=l.docVersions.get(_);Te(v!==null),I.version.compareTo(v)<0&&(h.applyToRemoteDocument(I,l),I.isValidDocument()&&(I.setReadTime(l.commitVersion),u.addEntry(I)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=se();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function ay(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function K5(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ct.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(I,v,S){return I.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-I.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,f,u)&&a.push(n.qr.updateTargetData(i,f))});let c=Rn(),l=se();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(Q5(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(X.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function Q5(t,e,n){let r=se(),s=se();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Rn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function Y5(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function X5(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new qn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Zl(t,e,n){const r=Z(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!no(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function vp(t,e,n){const r=Z(t);let s=X.min(),i=se();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Z(c),d=h.ns.get(u);return d!==void 0?R.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,cn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:se())).next(a=>(J5(r,jR(e),a),{documents:a,ls:i})))}function J5(t,e,n){let r=t.rs.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class wp{constructor(){this.activeTargetIds=KR()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Z5{constructor(){this.eo=new wp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new wp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{ro(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ao=null;function Yc(){return Ao===null?Ao=function(){return 268435456+Math.round(2147483648*Math.random())}():Ao++,"0x"+Ao.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="WebChannelConnection";class rb extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=Yc(),c=this.So(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw Es("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ns}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=tb[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=Yc();return new Promise((o,a)=>{const c=new uR;c.setWithCredentials(!0),c.listenOnce(cR.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Kc.NO_ERROR:const u=c.getResponseJson();$(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Kc.TIMEOUT:$(et,`RPC '${e}' ${i} timed out`),a(new M(E.DEADLINE_EXCEEDED,"Request time out"));break;case Kc.HTTP_ERROR:const h=c.getStatus();if($(et,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const _=function(v){const S=v.toLowerCase().replace(/_/g,"-");return Object.values(E).indexOf(S)>=0?S:E.UNKNOWN}(f.status);a(new M(_,f.message))}else a(new M(E.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new M(E.UNAVAILABLE,"Connection failed."));break;default:K()}}finally{$(et,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=Yc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=oR(),a=aR(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");$(et,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const _=new nb({co:v=>{f?$(et,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||($(et,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),$(et,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},lo:()=>h.close()}),I=(v,S,D)=>{v.listen(S,N=>{try{D(N)}catch(B){setTimeout(()=>{throw B},0)}})};return I(h,Io.EventType.OPEN,()=>{f||$(et,`RPC '${e}' stream ${s} transport opened.`)}),I(h,Io.EventType.CLOSE,()=>{f||(f=!0,$(et,`RPC '${e}' stream ${s} transport closed`),_.Ro())}),I(h,Io.EventType.ERROR,v=>{f||(f=!0,Es(et,`RPC '${e}' stream ${s} transport errored:`,v),_.Ro(new M(E.UNAVAILABLE,"The operation could not be completed")))}),I(h,Io.EventType.MESSAGE,v=>{var S;if(!f){const D=v.data[0];Te(!!D);const N=D,B=N.error||((S=N[0])===null||S===void 0?void 0:S.error);if(B){$(et,`RPC '${e}' stream ${s} received error:`,B);const F=B.status;let oe=function(ne){const Ie=Ne[ne];if(Ie!==void 0)return X1(Ie)}(F),me=B.message;oe===void 0&&(oe=E.INTERNAL,me="Unknown error status: "+F+" with message "+B.message),f=!0,_.Ro(new M(oe,me)),h.close()}else $(et,`RPC '${e}' stream ${s} received:`,D),_.Vo(D)}}),I(a,lR.STAT_EVENT,v=>{v.stat===Xf.PROXY?$(et,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Xf.NOPROXY&&$(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{_.Ao()},0),_}}function Xc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(t){return new p5(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ly{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new cy(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===E.RESOURCE_EXHAUSTED?(An(n.toString()),An("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===E.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new M(E.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class sb extends ly{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=_5(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?ln(o.readTime):X.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Jl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Wl(c)?{documents:w5(i,c)}:{query:E5(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=ey(i,o.resumeToken);const l=Ql(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=fa(i,o.snapshotVersion.toTimestamp());const l=Ql(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=T5(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Jl(this.serializer),n.removeTarget=e,this.e_(n)}}class ib extends ly{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Te(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=v5(e.writeResults,e.commitTime),r=ln(e.commitTime);return this.listener.I_(r,n)}return Te(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Jl(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>y5(this.serializer,r))};this.e_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new M(E.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===E.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new M(E.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class ab{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(An(n),this.f_=!1):$("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cb{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{zr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Z(c);l.C_.add(4),await io(l),l.M_.set("Unknown"),l.C_.delete(4),await cc(l)}(this))})}),this.M_=new ab(r,s)}}async function cc(t){if(zr(t))for(const e of t.v_)await e(!0)}async function io(t){for(const e of t.v_)await e(!1)}function uy(t,e){const n=Z(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),kh(n)?Ph(n):Ls(n).Ho()&&Sh(n,e))}function hy(t,e){const n=Z(t),r=Ls(n);n.D_.delete(e),r.Ho()&&dy(n,e),n.D_.size===0&&(r.Ho()?r.Zo():zr(n)&&n.M_.set("Unknown"))}function Sh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ls(t).u_(e)}function dy(t,e){t.x_.Oe(e),Ls(t).c_(e)}function Ph(t){t.x_=new u5({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ls(t).start(),t.M_.g_()}function kh(t){return zr(t)&&!Ls(t).jo()&&t.D_.size>0}function zr(t){return Z(t).C_.size===0}function fy(t){t.x_=void 0}async function lb(t){t.D_.forEach((e,n)=>{Sh(t,e)})}async function ub(t,e){fy(t),kh(t)?(t.M_.w_(e),Ph(t)):t.M_.set("Unknown")}async function hb(t,e,n){if(t.M_.set("Online"),e instanceof Z1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await pa(t,r)}else if(e instanceof $o?t.x_.$e(e):e instanceof J1?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(X.min()))try{const r=await ay(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(ct.EMPTY_BYTE_STRING,u.snapshotVersion)),dy(i,c);const h=new qn(u.target,c,l,u.sequenceNumber);Sh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await pa(t,r)}}async function pa(t,e,n){if(!no(e))throw e;t.C_.add(1),await io(t),t.M_.set("Offline"),n||(n=()=>ay(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await cc(t)})}function py(t,e){return e().catch(n=>pa(t,n,e))}async function lc(t){const e=Z(t),n=rr(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;db(e);)try{const s=await Y5(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,fb(e,s)}catch(s){await pa(e,s)}gy(e)&&my(e)}function db(t){return zr(t)&&t.b_.length<10}function fb(t,e){t.b_.push(e);const n=rr(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function gy(t){return zr(t)&&!rr(t).jo()&&t.b_.length>0}function my(t){rr(t).start()}async function pb(t){rr(t).E_()}async function gb(t){const e=rr(t);for(const n of t.b_)e.P_(n.mutations)}async function mb(t,e,n){const r=t.b_.shift(),s=Ih.from(r,e,n);await py(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await lc(t)}async function _b(t,e){e&&rr(t).h_&&await async function(r,s){if(function(o){return a5(o)&&o!==E.ABORTED}(s.code)){const i=r.b_.shift();rr(r).Yo(),await py(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await lc(r)}}(t,e),gy(t)&&my(t)}async function Ip(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=zr(n);n.C_.add(3),await io(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await cc(n)}async function yb(t,e){const n=Z(t);e?(n.C_.delete(2),await cc(n)):e||(n.C_.add(2),await io(n),n.M_.set("Unknown"))}function Ls(t){return t.O_||(t.O_=function(n,r,s){const i=Z(n);return i.A_(),new sb(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:lb.bind(null,t),Io:ub.bind(null,t),a_:hb.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),kh(t)?Ph(t):t.M_.set("Unknown")):(await t.O_.stop(),fy(t))})),t.O_}function rr(t){return t.N_||(t.N_=function(n,r,s){const i=Z(n);return i.A_(),new ib(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:pb.bind(null,t),Io:_b.bind(null,t),T_:gb.bind(null,t),I_:mb.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await lc(t)):(await t.N_.stop(),t.b_.length>0&&($("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new In,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new xh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new M(E.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Oh(t,e){if(An("AsyncQueue",`${e}: ${t}`),no(t))return new M(E.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Xs(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new ds(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ds)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ds;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.B_=new ke(H.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):K():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Rs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Rs(e,n,ds.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vb{constructor(){this.k_=void 0,this.listeners=[]}}class wb{constructor(){this.queries=new Ms(e=>L1(e),nc),this.onlineState="Unknown",this.q_=new Set}}async function _y(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new vb),s)try{i.k_=await n.onListen(r)}catch(o){const a=Oh(o,`Initialization of query '${Zr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Dh(n)}async function yy(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function Eb(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Dh(n)}function Ib(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Dh(t){t.q_.forEach(e=>{e.next()})}class vy{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Rs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Rs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e){this.key=e}}class Ey{constructor(e){this.key=e}}class Tb{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=se(),this.mutatedKeys=se(),this._a=F1(e),this.aa=new ds(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new Tp,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=rc(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),I=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?_!==I&&(r.track({type:3,doc:f}),v=!0):this.ha(d,f)||(r.track({type:2,doc:f}),v=!0,(c&&this._a(f,c)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(c||l)&&(a=!0)),v&&(f?(o=o.add(f),i=I?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(f,_){const I=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K()}};return I(f)-I(_)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Rs(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Tp,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=se(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new Ey(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new wy(r))}),n}da(e){this.ia=e.ls,this.oa=se();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Rs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Cb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class Ab{constructor(e){this.key=e,this.Ra=!1}}class Rb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ms(a=>L1(a),nc),this.fa=new Map,this.ga=new Set,this.pa=new ke(H.comparator),this.ya=new Map,this.wa=new Ah,this.Sa={},this.ba=new Map,this.Da=As.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function bb(t,e){const n=Lb(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await X5(n.localStore,cn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Sb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&uy(n.remoteStore,o)}return s}async function Sb(t,e,n,r,s){t.va=(h,d,f)=>async function(I,v,S,D){let N=v.view.ca(S);N.Zi&&(N=await vp(I.localStore,v.query,!1).then(({documents:me})=>v.view.ca(me,N)));const B=D&&D.targetChanges.get(v.targetId),F=D&&D.targetMismatches.get(v.targetId)!=null,oe=v.view.applyChanges(N,I.isPrimaryClient,B,F);return Ap(I,v.targetId,oe.Ta),oe.snapshot}(t,h,d,f);const i=await vp(t.localStore,e,!0),o=new Tb(e,i.ls),a=o.ca(i.documents),c=so.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Ap(t,n,l.Ta);const u=new Cb(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function Pb(t,e){const n=Z(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!nc(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Zl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),hy(n.remoteStore,r.targetId),eu(n,r.targetId)}).catch(to)):(eu(n,r.targetId),await Zl(n.localStore,r.targetId,!0))}async function kb(t,e,n){const r=Fb(t);try{const s=await function(o,a){const c=Z(o),l=Fe.now(),u=a.reduce((f,_)=>f.add(_.key),se());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let _=Rn(),I=se();return c.ss.getEntries(f,u).next(v=>{_=v,_.forEach((S,D)=>{D.isValidDocument()||(I=I.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,_)).next(v=>{h=v;const S=[];for(const D of a){const N=n5(D,h.get(D.key).overlayedDocument);N!=null&&S.push(new lr(D.key,N,P1(N.value.mapValue),zt.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,S,a)}).next(v=>{d=v;const S=v.applyToLocalDocumentSet(h,I);return c.documentOverlayCache.saveOverlays(f,v.batchId,S)})}).then(()=>({batchId:d.batchId,changes:$1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new ke(fe)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await oo(r,s.changes),await lc(r.remoteStore)}catch(s){const i=Oh(s,"Failed to persist write");n.reject(i)}}async function Iy(t,e){const n=Z(t);try{const r=await K5(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Te(o.Ra):s.removedDocuments.size>0&&(Te(o.Ra),o.Ra=!1))}),await oo(n,r,e)}catch(r){await to(r)}}function Cp(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Z(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Dh(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function xb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new ke(H.comparator);o=o.insert(i,nt.newNoDocument(i,X.min()));const a=se().add(i),c=new oc(X.min(),new Map,new ke(fe),o,a);await Iy(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Nh(r)}else await Zl(r.localStore,e,!1).then(()=>eu(r,e,n)).catch(to)}async function Ob(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await G5(n.localStore,e);Cy(n,r,null),Ty(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oo(n,s)}catch(s){await to(s)}}async function Db(t,e,n){const r=Z(t);try{const s=await function(o,a){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Te(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);Cy(r,e,n),Ty(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oo(r,s)}catch(s){await to(s)}}function Ty(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function Cy(t,e,n){const r=Z(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function eu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||Ay(t,r)})}function Ay(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(hy(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Nh(t))}function Ap(t,e,n){for(const r of n)r instanceof wy?(t.wa.addReference(r.key,e),Nb(t,r)):r instanceof Ey?($("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||Ay(t,r.key)):K()}function Nb(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||($("SyncEngine","New document in limbo: "+n),t.ga.add(r),Nh(t))}function Nh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(be.fromString(e)),r=t.Da.next();t.ya.set(r,new Ab(n)),t.pa=t.pa.insert(n,r),uy(t.remoteStore,new qn(cn(Eh(n.path)),r,"TargetPurposeLimboResolution",gh._e))}}async function oo(t,e,n){const r=Z(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=bh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=Z(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.ki,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>R.forEach(d.qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!no(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ts.get(d),_=f.snapshotVersion,I=f.withLastLimboFreeSnapshotVersion(_);u.ts=u.ts.insert(d,I)}}}(r.localStore,i))}async function Vb(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await oy(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new M(E.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oo(n,r._s)}}function Mb(t,e){const n=Z(t),r=n.ya.get(e);if(r&&r.Ra)return se().add(r.key);{let s=se();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Lb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Mb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=xb.bind(null,e),e.Va.a_=Eb.bind(null,e.eventManager),e.Va.Fa=Ib.bind(null,e.eventManager),e}function Fb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ob.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Db.bind(null,e),e}class Rp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ac(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return W5(this.persistence,new H5,e.initialUser,this.serializer)}createPersistence(e){return new B5(Rh.jr,this.serializer)}createSharedClientState(e){return new Z5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ub{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Vb.bind(null,this.syncEngine),await yb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new wb}()}createDatastore(e){const n=ac(e.databaseInfo.databaseId),r=function(i){return new rb(i)}(e.databaseInfo);return function(i,o,a,c){return new ob(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new cb(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Cp(this.syncEngine,n,0),function(){return Ep.D()?new Ep:new eb}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new Rb(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);$("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await io(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ry{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):An("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $b{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=R1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new M(E.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new In;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Oh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Jc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await oy(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function bp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jb(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>Ip(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>Ip(e.remoteStore,i)),t._onlineComponents=e}function Bb(t){return t.name==="FirebaseError"?t.code===E.FAILED_PRECONDITION||t.code===E.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function jb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Bb(n))throw n;Es("Error using user provided cache. Falling back to memory cache: "+n),await Jc(t,new Rp)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Jc(t,new Rp);return t._offlineComponents}async function by(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await bp(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await bp(t,new Ub))),t._onlineComponents}function qb(t){return by(t).then(e=>e.syncEngine)}async function Sy(t){const e=await by(t),n=e.eventManager;return n.onListen=bb.bind(null,e.syncEngine),n.onUnlisten=Pb.bind(null,e.syncEngine),n}function Hb(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Ry({next:d=>{o.enqueueAndForget(()=>yy(i,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new M(E.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new M(E.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new vy(Eh(a.path),u,{includeMetadataChanges:!0,J_:!0});return _y(i,h)}(await Sy(t),t.asyncQueue,e,n,r)),r.promise}function zb(t,e,n={}){const r=new In;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new Ry({next:d=>{o.enqueueAndForget(()=>yy(i,h)),d.fromCache&&c.source==="server"?l.reject(new M(E.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new vy(a,u,{includeMetadataChanges:!0,J_:!0});return _y(i,h)}(await Sy(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sp=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(t,e,n){if(!n)throw new M(E.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Wb(t,e,n,r){if(e===!0&&r===!0)throw new M(E.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Pp(t){if(!H.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function kp(t){if(H.isDocumentKey(t))throw new M(E.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function uc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":K()}function dn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new M(E.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=uc(t);throw new M(E.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new M(E.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new M(E.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Wb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Py((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new M(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new M(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new M(E.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class hc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new xp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new M(E.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new M(E.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new xp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dR;switch(r.type){case"firstParty":return new mR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new M(E.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=Sp.get(n);r&&($("ComponentProvider","Removing Datastore"),Sp.delete(n),r.terminate())}(this),Promise.resolve()}}function Gb(t,e,n,r={}){var s;const i=(t=dn(t,hc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&Es("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=um(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new M(E.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(l)}t._authCredentials=new fR(new A1(a,c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Wr(this.firestore,e,this._query)}}class ft{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ft(this.firestore,e,this._key)}}class Xn extends Wr{constructor(e,n,r){super(e,n,Eh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ft(this.firestore,null,new H(e))}withConverter(e){return new Xn(this.firestore,e,this._path)}}function xy(t,e,...n){if(t=Se(t),ky("collection","path",e),t instanceof hc){const r=be.fromString(e,...n);return kp(r),new Xn(t,null,r)}{if(!(t instanceof ft||t instanceof Xn))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return kp(r),new Xn(t.firestore,null,r)}}function Oy(t,e,...n){if(t=Se(t),arguments.length===1&&(e=R1.newId()),ky("doc","path",e),t instanceof hc){const r=be.fromString(e,...n);return Pp(r),new ft(t,null,new H(r))}{if(!(t instanceof ft||t instanceof Xn))throw new M(E.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(be.fromString(e,...n));return Pp(r),new ft(t.firestore,t instanceof Xn?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new cy(this,"async_queue_retry"),this.iu=()=>{const n=Xc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Xc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Xc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new In;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!no(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw An("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=xh.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&K()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class Fs extends hc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Kb}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Dy(this),this._firestoreClient.terminate()}}function Qb(t,e){const n=typeof t=="object"?t:Da(),r=typeof t=="string"?t:e||"(default)",s=sr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=am("firestore");i&&Gb(s,...i)}return s}function Vh(t){return t._firestoreClient||Dy(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Dy(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new SR(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,Py(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new $b(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new bs(ct.fromBase64String(e))}catch(n){throw new M(E.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new bs(ct.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new M(E.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new M(E.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new M(E.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yb=/^__.*__$/;class Xb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}class Ny{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Vy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K()}}class Lh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Lh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return ga(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Vy(this.Iu)&&Yb.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Jb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||ac(e)}pu(e,n,r,s=!1){return new Lh({Iu:e,methodName:n,gu:r,path:Ke.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pc(t){const e=t._freezeSettings(),n=ac(t._databaseId);return new Jb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function My(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Uh("Data must be an object, but it was:",o,r);const a=Ly(r,o);let c,l;if(i.merge)c=new At(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=tu(e,h,n);if(!o.contains(d))throw new M(E.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Uy(u,d)||u.push(d)}c=new At(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Xb(new mt(a),c,l)}class gc extends fc{_toFieldTransform(e){if(e.Iu!==2)throw e.Iu===1?e.mu(`${this._methodName}() can only appear at the top level of your update data`):e.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gc}}class Fh extends fc{_toFieldTransform(e){return new JR(e.path,new Li)}isEqual(e){return e instanceof Fh}}function Zb(t,e,n,r){const s=t.pu(1,e,n);Uh("Data must be an object, but it was:",s,r);const i=[],o=mt.empty();Hr(r,(c,l)=>{const u=$h(e,c,n);l=Se(l);const h=s.Ru(u);if(l instanceof gc)i.push(u);else{const d=ao(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new At(i);return new Ny(o,a,s.fieldTransforms)}function eS(t,e,n,r,s,i){const o=t.pu(1,e,n),a=[tu(e,r,n)],c=[s];if(i.length%2!=0)throw new M(E.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(tu(e,i[d])),c.push(i[d+1]);const l=[],u=mt.empty();for(let d=a.length-1;d>=0;--d)if(!Uy(l,a[d])){const f=a[d];let _=c[d];_=Se(_);const I=o.Ru(f);if(_ instanceof gc)l.push(f);else{const v=ao(_,I);v!=null&&(l.push(f),u.set(f,v))}}const h=new At(l);return new Ny(u,h,o.fieldTransforms)}function tS(t,e,n,r=!1){return ao(n,t.pu(r?4:3,e))}function ao(t,e){if(Fy(t=Se(t)))return Uh("Unsupported field value:",e,t),Ly(t,e);if(t instanceof fc)return function(r,s){if(!Vy(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ao(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Se(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return QR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Fe.fromDate(r);return{timestampValue:fa(s.serializer,i)}}if(r instanceof Fe){const i=new Fe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:fa(s.serializer,i)}}if(r instanceof Mh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof bs)return{bytesValue:ey(s.serializer,r._byteString)};if(r instanceof ft){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ch(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${uc(r)}`)}(t,e)}function Ly(t,e){const n={};return b1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Hr(t,(r,s)=>{const i=ao(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function Fy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Fe||t instanceof Mh||t instanceof bs||t instanceof ft||t instanceof fc)}function Uh(t,e,n){if(!Fy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=uc(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function tu(t,e,n){if((e=Se(e))instanceof dc)return e._internalPath;if(typeof e=="string")return $h(t,e);throw ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const nS=new RegExp("[~\\*/\\[\\]]");function $h(t,e,n){if(e.search(nS)>=0)throw ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new dc(...e.split("."))._internalPath}catch{throw ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ga(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new M(E.INVALID_ARGUMENT,a+t+c)}function Uy(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ft(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new rS(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(mc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class rS extends $y{data(){return super.data()}}function mc(t,e){return typeof e=="string"?$h(t,e):e instanceof dc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new M(E.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Bh{}class By extends Bh{}function iS(t,e,...n){let r=[];e instanceof Bh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof jh).length,a=i.filter(c=>c instanceof _c).length;if(o>1||o>0&&a>0)throw new M(E.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class _c extends By{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new _c(e,n,r)}_apply(e){const n=this._parse(e);return jy(e._query,n),new Wr(e.firestore,e.converter,Gl(e._query,n))}_parse(e){const n=pc(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new M(E.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Dp(h,u);const f=[];for(const _ of h)f.push(Op(c,i,_));d={arrayValue:{values:f}}}else d=Op(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Dp(h,u),d=tS(a,o,h,u==="in"||u==="not-in");return Le.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function u3(t,e,n){const r=e,s=mc("where",t);return _c._create(s,r,n)}class jh extends Bh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new jh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Qt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)jy(o,c),o=Gl(o,c)}(e._query,n),new Wr(e.firestore,e.converter,Gl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class qh extends By{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new qh(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new M(E.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mi(i,o)}(e._query,this._field,this._direction);return new Wr(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Vs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function h3(t,e="asc"){const n=e,r=mc("orderBy",t);return qh._create(r,n)}function Op(t,e,n){if(typeof(n=Se(n))=="string"){if(n==="")throw new M(E.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!M1(e)&&n.indexOf("/")!==-1)throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(be.fromString(n));if(!H.isDocumentKey(r))throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return np(t,new H(r))}if(n instanceof ft)return np(t,n._key);throw new M(E.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${uc(n)}.`)}function Dp(t,e){if(!Array.isArray(t)||t.length===0)throw new M(E.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function jy(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new M(E.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class oS{convertValue(e,n="none"){switch(Mr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw K()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Hr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Mh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=_h(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const n=nr(e);return new Fe(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=be.fromString(e);Te(iy(r));const s=new Ni(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||An(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hy extends $y{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(mc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Bo extends Hy{data(e={}){return super.data(e)}}class aS{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Bo(this._firestore,this._userDataWriter,r.key,r,new Zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new M(E.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Bo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Bo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:cS(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function cS(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lS(t){t=dn(t,ft);const e=dn(t.firestore,Fs);return Hb(Vh(e),t._key).then(n=>hS(e,t,n))}class zy extends oS{constructor(e){super(),this.firestore=e}convertBytes(e){return new bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ft(this.firestore,null,n)}}function uS(t){t=dn(t,Wr);const e=dn(t.firestore,Fs),n=Vh(e),r=new zy(e);return sS(t._query),zb(n,t._query).then(s=>new aS(e,r,t,s))}function d3(t,e,n){t=dn(t,ft);const r=dn(t.firestore,Fs),s=qy(t.converter,e,n);return Hh(r,[My(pc(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,zt.none())])}function f3(t,e,n,...r){t=dn(t,ft);const s=dn(t.firestore,Fs),i=pc(s);let o;return o=typeof(e=Se(e))=="string"||e instanceof dc?eS(i,"updateDoc",t._key,e,n,r):Zb(i,"updateDoc",t._key,e),Hh(s,[o.toMutation(t._key,zt.exists(!0))])}function p3(t,e){const n=dn(t.firestore,Fs),r=Oy(t),s=qy(t.converter,e);return Hh(n,[My(pc(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,zt.exists(!1))]).then(()=>r)}function Hh(t,e){return function(r,s){const i=new In;return r.asyncQueue.enqueueAndForget(async()=>kb(await qb(r),s,i)),i.promise}(Vh(t),e)}function hS(t,e,n){const r=n.docs.get(e._key),s=new zy(t);return new Hy(t,s,e._key,r,new Zs(n.hasPendingWrites,n.fromCache),e.converter)}function g3(){return new Fh("serverTimestamp")}(function(e,n=!0){(function(s){Ns=s})(jr),Gt(new Vt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Fs(new pR(r.getProvider("auth-internal")),new yR(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new M(E.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ni(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),_t(Jf,"4.4.0",e),_t(Jf,"4.4.0","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wy="firebasestorage.googleapis.com",Gy="storageBucket",dS=2*60*1e3,fS=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Lt{constructor(e,n,r=0){super(Zc(e),`Firebase Storage: ${n} (${Zc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Zc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Oe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Oe||(Oe={}));function Zc(t){return"storage/"+t}function zh(){const t="An unknown error occurred, please check the error payload for server response.";return new De(Oe.UNKNOWN,t)}function pS(t){return new De(Oe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function gS(t){return new De(Oe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function mS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(Oe.UNAUTHENTICATED,t)}function _S(){return new De(Oe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function yS(t){return new De(Oe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function vS(){return new De(Oe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function wS(){return new De(Oe.CANCELED,"User canceled the upload/download.")}function ES(t){return new De(Oe.INVALID_URL,"Invalid URL '"+t+"'.")}function IS(t){return new De(Oe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function TS(){return new De(Oe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Gy+"' property when initializing the app?")}function CS(){return new De(Oe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function AS(){return new De(Oe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function RS(t){return new De(Oe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function nu(t){return new De(Oe.INVALID_ARGUMENT,t)}function Ky(){return new De(Oe.APP_DELETED,"The Firebase app was deleted.")}function bS(t){return new De(Oe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function fi(t,e){return new De(Oe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function zs(t){throw new De(Oe.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Rt.makeFromUrl(e,n)}catch{return new Rt(e,"")}if(r.path==="")return r;throw IS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},I=n===Wy?"(?:storage.googleapis.com|storage.cloud.google.com)":n,v="([^?#]*)",S=new RegExp(`^https?://${I}/${s}/${v}`,"i"),N=[{regex:a,indices:c,postModify:i},{regex:f,indices:_,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let B=0;B<N.length;B++){const F=N[B],oe=F.regex.exec(e);if(oe){const me=oe[F.indices.bucket];let ee=oe[F.indices.path];ee||(ee=""),r=new Rt(me,ee),F.postModify(r);break}}if(r==null)throw ES(e);return r}}class SS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PS(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...v){l||(l=!0,e.apply(null,v))}function h(v){s=setTimeout(()=>{s=null,t(f,c())},v)}function d(){i&&clearTimeout(i)}function f(v,...S){if(l){d();return}if(v){d(),u.call(null,v,...S);return}if(c()||o){d(),u.call(null,v,...S);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let _=!1;function I(v){_||(_=!0,d(),!l&&(s!==null?(v||(a=2),clearTimeout(s),h(0)):v||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,I(!0)},n),I}function kS(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t){return t!==void 0}function OS(t){return typeof t=="object"&&!Array.isArray(t)}function Wh(t){return typeof t=="string"||t instanceof String}function Np(t){return Gh()&&t instanceof Blob}function Gh(){return typeof Blob<"u"}function Vp(t,e,n,r){if(r<e)throw nu(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw nu(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Qy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Rr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Rr||(Rr={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NS{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Ro(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Rr.NO_ERROR,c=i.getStatus();if(!a||DS(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Rr.ABORT;r(!1,new Ro(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Ro(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());xS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=zh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Ky():wS();o(c)}else{const c=vS();o(c)}};this.canceled_?n(!1,new Ro(!1,null,!0)):this.backoffId_=PS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&kS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ro{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function VS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function MS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function LS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function FS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function US(t,e,n,r,s,i,o=!0){const a=Qy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return LS(l,e),VS(l,n),MS(l,i),FS(l,r),new NS(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function BS(...t){const e=$S();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Gh())return new Blob(t);throw new De(Oe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function jS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qS(t){if(typeof atob>"u")throw RS("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class el{constructor(e,n){this.data=e,this.contentType=n||null}}function HS(t,e){switch(t){case sn.RAW:return new el(Yy(e));case sn.BASE64:case sn.BASE64URL:return new el(Xy(t,e));case sn.DATA_URL:return new el(WS(e),GS(e))}throw zh()}function Yy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function zS(t){let e;try{e=decodeURIComponent(t)}catch{throw fi(sn.DATA_URL,"Malformed data URL.")}return Yy(e)}function Xy(t,e){switch(t){case sn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw fi(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case sn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw fi(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=qS(e)}catch(s){throw s.message.includes("polyfill")?s:fi(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Jy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw fi(sn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=KS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function WS(t){const e=new Jy(t);return e.base64?Xy(sn.BASE64,e.rest):zS(e.rest)}function GS(t){return new Jy(t).contentType}function KS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n){let r=0,s="";Np(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Np(this.data_)){const r=this.data_,s=jS(r,e,n);return s===null?null:new Bn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Bn(r,!0)}}static getBlob(...e){if(Gh()){const n=e.map(r=>r instanceof Bn?r.data_:r);return new Bn(BS.apply(null,n))}else{const n=e.map(o=>Wh(o)?HS(sn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Bn(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zy(t){let e;try{e=JSON.parse(t)}catch{return null}return OS(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function YS(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function e0(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XS(t,e){return e}class lt{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||XS}}let bo=null;function JS(t){return!Wh(t)||t.length<2?t:e0(t)}function t0(){if(bo)return bo;const t=[];t.push(new lt("bucket")),t.push(new lt("generation")),t.push(new lt("metageneration")),t.push(new lt("name","fullPath",!0));function e(i,o){return JS(o)}const n=new lt("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new lt("size");return s.xform=r,t.push(s),t.push(new lt("timeCreated")),t.push(new lt("updated")),t.push(new lt("md5Hash",null,!0)),t.push(new lt("cacheControl",null,!0)),t.push(new lt("contentDisposition",null,!0)),t.push(new lt("contentEncoding",null,!0)),t.push(new lt("contentLanguage",null,!0)),t.push(new lt("contentType",null,!0)),t.push(new lt("metadata","customMetadata",!0)),bo=t,bo}function ZS(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Rt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function eP(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return ZS(r,t),r}function n0(t,e,n){const r=Zy(e);return r===null?null:eP(t,r,n)}function tP(t,e,n,r){const s=Zy(e);if(s===null||!Wh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=Kh(d,n,r),_=Qy({alt:"media",token:l});return f+_})[0]}function nP(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class r0{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(t){if(!t)throw zh()}function rP(t,e){function n(r,s){const i=n0(t,s,e);return s0(i!==null),i}return n}function sP(t,e){function n(r,s){const i=n0(t,s,e);return s0(i!==null),tP(i,s,t.host,t._protocol)}return n}function i0(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=_S():s=mS():n.getStatus()===402?s=gS(t.bucket):n.getStatus()===403?s=yS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function iP(t){const e=i0(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=pS(t.path)),i.serverResponse=s.serverResponse,i}return n}function oP(t,e,n){const r=e.fullServerUrl(),s=Kh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new r0(s,i,sP(t,n),o);return a.errorHandler=iP(e),a}function aP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function cP(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=aP(null,e)),r}function lP(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let B=0;B<2;B++)N=N+Math.random().toString().slice(2);return N}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=cP(e,r,s),u=nP(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",f=Bn.getBlob(h,r,d);if(f===null)throw CS();const _={name:l.fullPath},I=Kh(i,t.host,t._protocol),v="POST",S=t.maxUploadRetryTime,D=new r0(I,v,rP(t,n),S);return D.urlParams=_,D.headers=o,D.body=f.uploadData(),D.errorHandler=i0(e),D}class uP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Rr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Rr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Rr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw zs("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw zs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw zs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw zs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw zs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class hP extends uP{initXhr(){this.xhr_.responseType="text"}}function o0(){return new hP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this._service=e,n instanceof Rt?this._location=n:this._location=Rt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Lr(e,n)}get root(){const e=new Rt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return e0(this._location.path)}get storage(){return this._service}get parent(){const e=QS(this._location.path);if(e===null)return null;const n=new Rt(this._location.bucket,e);return new Lr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw bS(e)}}function dP(t,e,n){t._throwIfRoot("uploadBytes");const r=lP(t.storage,t._location,t0(),new Bn(e,!0),n);return t.storage.makeRequestWithTokens(r,o0).then(s=>({metadata:s,ref:t}))}function fP(t){t._throwIfRoot("getDownloadURL");const e=oP(t.storage,t._location,t0());return t.storage.makeRequestWithTokens(e,o0).then(n=>{if(n===null)throw AS();return n})}function pP(t,e){const n=YS(t._location.path,e),r=new Rt(t._location.bucket,n);return new Lr(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gP(t){return/^[A-Za-z]+:\/\//.test(t)}function mP(t,e){return new Lr(t,e)}function a0(t,e){if(t instanceof Qh){const n=t;if(n._bucket==null)throw TS();const r=new Lr(n,n._bucket);return e!=null?a0(r,e):r}else return e!==void 0?pP(t,e):t}function _P(t,e){if(e&&gP(e)){if(t instanceof Qh)return mP(t,e);throw nu("To use ref(service, url), the first argument must be a Storage instance.")}else return a0(t,e)}function Mp(t,e){const n=e==null?void 0:e[Gy];return n==null?null:Rt.makeFromBucketSpec(n,t)}function yP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:um(s,t.app.options.projectId))}class Qh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Wy,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=dS,this._maxUploadRetryTime=fS,this._requests=new Set,s!=null?this._bucket=Rt.makeFromBucketSpec(s,this._host):this._bucket=Mp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Rt.makeFromBucketSpec(this._url,e):this._bucket=Mp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Lr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new SS(Ky());{const o=US(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Lp="@firebase/storage",Fp="0.12.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c0="storage";function m3(t,e,n){return t=Se(t),dP(t,e,n)}function _3(t){return t=Se(t),fP(t)}function y3(t,e){return t=Se(t),_P(t,e)}function vP(t=Da(),e){t=Se(t);const r=sr(t,c0).getImmediate({identifier:e}),s=am("storage");return s&&wP(r,...s),r}function wP(t,e,n,r={}){yP(t,e,n,r)}function EP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Qh(n,r,s,e,jr)}function IP(){Gt(new Vt(c0,EP,"PUBLIC").setMultipleInstances(!0)),_t(Lp,Fp,""),_t(Lp,Fp,"esm2017")}IP();const TP={apiKey:"AIzaSyB1pFFpjNdLmk0uGNBMFb8IrZvsFWXA7MQ",authDomain:"gaming-store-32ee2.firebaseapp.com",projectId:"gaming-store-32ee2",storageBucket:"gaming-store-32ee2.appspot.com",messagingSenderId:"724097093017",appId:"1:724097093017:web:b9f27d7e3eb8ddc017d708",measurementId:"G-HE4PQQRHE9"},CP=mm(TP);n4(CP);const v3=vP(),l0=Qb(),Fr=bC(),ur=Ww("session",()=>{const t=Ru(),e=Me({}),n=Me(!1),r=Me(!1),s=Me(""),i=Me([]),o=async()=>{$m(Fr,h=>{a(),h?(n.value=!0,e.value=h):(e.value=null,n.value=!1,r.value=!1)})},a=async()=>{try{const h=await lS(Oy(xy(l0,"admins"),"admins"));if(h.exists()){const d=h.data();i.value=d.admin,console.log(i.value),r.value=i.value.includes(e.value.email)}else console.error("Admin document does not exist.")}catch(h){console.error("Error fetching admins:",h)}};function c(h){s.value=h}function l(){n.value||(t.push("/"),s.value="login")}function u(){g2(Fr).then(()=>{e.value=null,n.value=!1,r.value=!1,s.value=""}).catch(h=>{console.log(h)})}return Ca(()=>{o()}),{user:e,admins:i,isLoggedIn:n,isAdmin:r,modalOpen:s,initializeStore:o,logout:u,openModal:c,check:l}}),AP={class:"flex lg:flex-col gap-6 text-center relative text-sm items-center text-slate-300"},RP={key:0,class:"p-1 bg-red-600 rounded-full absolute -top-1 -right-1"},bP={key:0,class:"p-1 bg-red-600 rounded-full absolute -top-1 -right-1"},SP={__name:"NavIcon",setup(t){const e=ur(),n=bu(),r=Me(!1),s=Me("3"),i=o=>n.path.includes(o);return(o,a)=>{const c=vu("RouterLink");return te(),ye("div",AP,[C("div",{class:ks(["lg:h-9 h-2 max-lg:-bottom-5 w-9 ease-in-out duration-300 lg:-left-5 lg:w-2 absolute lg:py-2 bg-slate-200",{" max-lg:translate-x-[0px] lg:translate-y-[0px]":i("/")," max-lg:translate-x-[60px] lg:translate-y-[60px]":i("/products")," max-lg:translate-x-[120px] lg:translate-y-[120px]":i("/cart")," max-lg:translate-x-[180px] lg:translate-y-[180px]":i("/transaction")," max-lg:translate-x-[240px] lg:translate-y-[240px]":i("/admin")}])},null,2),he(c,{class:"home w-9 h-9 nav-link relative",to:"/"},{default:$t(()=>[he(rI,{class:"home"})]),_:1}),he(c,{class:"products w-9 h-9 nav-link relative",to:"/products"},{default:$t(()=>[he(bI,{class:"product"})]),_:1}),le(e).isLoggedIn?(te(),qt(c,{key:0,class:"cart w-9 h-9 nav-link relative",to:"/cart"},{default:$t(()=>[he(vI,{class:"cart"}),s.value>0?(te(),ye("div",RP)):st("",!0)]),_:1})):st("",!0),le(e).isLoggedIn?(te(),qt(c,{key:1,class:"trans w-9 h-9 nav-link relative",to:"/transaction"},{default:$t(()=>[he(hI,{class:"trans"}),r.value?(te(),ye("div",bP)):st("",!0)]),_:1})):st("",!0),le(e).isAdmin?(te(),qt(c,{key:2,class:"admin w-9 h-9 nav-link relative",to:"/admin/"},{default:$t(()=>[he(VI,{class:"product"})]),_:1})):st("",!0)])}}},PP={},kP={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},xP=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),OP=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),DP=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M8 6C8 3.79086 9.79086 2 12 2H17.5C19.9853 2 22 4.01472 22 6.5V17.5C22 19.9853 19.9853 22 17.5 22H12C9.79086 22 8 20.2091 8 18V17C8 16.4477 8.44772 16 9 16C9.55228 16 10 16.4477 10 17V18C10 19.1046 10.8954 20 12 20H17.5C18.8807 20 20 18.8807 20 17.5V6.5C20 5.11929 18.8807 4 17.5 4H12C10.8954 4 10 4.89543 10 6V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929L13.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L13.5858 11L12.2929 9.70711C11.9024 9.31658 11.9024 8.68342 12.2929 8.29289Z",fill:"currentColor"})],-1),NP=[xP,OP,DP];function VP(t,e){return te(),ye("svg",kP,NP)}const MP=Sn(PP,[["render",VP]]),LP={},FP={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},UP=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),$P=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),BP=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z",fill:"currentColor"})],-1),jP=[UP,$P,BP];function qP(t,e){return te(),ye("svg",FP,jP)}const HP=Sn(LP,[["render",qP]]),zP={class:"bg-slate-600 z-40 max-lg:w-full lg:w-[89.2px] relative bottom-0 max-lg:fixed lg:static max-lg:p-5 lg:px-5 lg:h-auto flex justify-center"},WP={class:"flex lg:py-5 lg:fixed lg:top-0 lg:h-screen lg:flex-col gap-7"},GP=C("img",{class:"max-w-10",src:QE,alt:""},null,-1),KP=C("div",{class:"flex border-t border-gray-400"},null,-1),QP={class:"flex grow gap-1 items-center flex-col-reverse"},YP={class:"absolute rounded-lg opacity-0 group-[.active]:opacity-100 invisible group-[.active]:visible duration-200 -translate-x-1/4 lg:translate-x-1/2 max-lg:group-[.active]:-translate-y-1/2 lg:group-[.active]:translate-x-3/4 lg:-right-full translate-y-1/2 bottom-1/2 bg-slate-700 p-2 px-3"},XP=["src"],JP={__name:"sidebar",setup(t){const e=ur(),n=Me(""),r=()=>{n.value==""?n.value="active":n.value=""};return(s,i)=>{const o=vu("RouterLink");return te(),ye("div",zP,[C("div",WP,[he(o,{to:"/",class:"text-center hidden lg:block"},{default:$t(()=>[GP]),_:1}),KP,he(SP),C("div",QP,[le(e).isLoggedIn?(te(),ye("button",{key:0,onClick:r,class:ks([n.value,"flex group gap-1 items-center relative"])},[C("div",YP,[C("button",{onClick:i[0]||(i[0]=(...a)=>le(e).logout&&le(e).logout(...a)),class:"flex"},[he(HP,{class:"nav-link w-10"}),Gn("Sign Out")])]),C("img",{class:"w-10 rounded-full",src:le(e).user.photoURL?le(e).user.photoURL:"https://avatar.oxro.io/avatar.png?name="+le(e).user.displayName+"&background=random",alt:""},null,8,XP)],2)):st("",!0),le(e).isLoggedIn?st("",!0):(te(),ye("button",{key:1,onClick:i[1]||(i[1]=a=>le(e).openModal("login")),class:""},[he(MP,{class:"nav-link w-10"})]))])])])}}},ZP={},e6={width:"24px",height:"24px",viewBox:"0 0 262.00 262.00",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000"},t6=Qv('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.524"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g>',3),n6=[t6];function r6(t,e){return te(),ye("svg",e6,n6)}const s6=Sn(ZP,[["render",r6]]),i6={class:"flex gap-4 justify-center"},u0={__name:"providerLogin",setup(t){ur();const e=new Bt,n=()=>{M2(Fr,e).then(r=>{Bt.credentialFromResult(r).accessToken,r.user}).catch(r=>{r.code,r.message,r.customData.email,Bt.credentialFromError(r)})};return(r,s)=>(te(),ye("div",i6,[C("button",{type:"button",onClick:n,href:"",class:"hover:scale-105 duration-100 flex gap-3 items-center rounded-lg ring-1 ring-gray-300 py-2 px-4"},[he(s6,{class:""}),Gn(" Sign in with Google")])]))}},o6={class:"p-6 space-y-4 w-full md:space-y-6 sm:p-8"},a6=C("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"},"Sign in to your account",-1),c6={class:"space-y-4 md:space-y-6",action:"#"},l6=C("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Your email",-1),u6=C("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),h6={class:"flex items-center justify-between"},d6={class:"flex items-start"},f6={key:0,class:"text-xs text-red-500 capitalize"},p6=C("a",{href:"#",class:"text-sm font-medium text-primary-900 hover:underline dark:text-primary-500"},"Forgot password?",-1),g6={class:"text-sm font-light text-gray-500 dark:text-gray-400"},m6=C("div",{class:"flex items-center space-x-4"},[C("div",{class:"flex grow border-t border-gray-400"}),C("span",null,"or"),C("div",{class:"flex grow border-t border-gray-400"})],-1),_6={__name:"LoginForm",setup(t){const e=ur(),n=Me(""),r=Me(""),s=Me(""),i=()=>{n.value==""||r.value==""?s.value="Please fill in all fields":u2(Fr,n.value,r.value).then(()=>{}).catch(o=>{console.log(o.message),s.value=o.message})};return(o,a)=>(te(),ye("div",{onClick:a[3]||(a[3]=Bg(()=>{},["stop"])),class:"bg-white w-full h-fit rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"},[C("div",o6,[a6,C("form",c6,[C("div",null,[l6,rs(C("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),type:"email",name:"email",id:"email",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[jn,n.value]])]),C("div",null,[u6,rs(C("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[jn,r.value]])]),C("div",h6,[C("div",d6,[s.value?(te(),ye("span",f6,Ho(s.value),1)):st("",!0)]),p6]),C("button",{type:"button",onClick:i,class:"w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}," Sign in "),C("p",g6,[Gn(" Don't have an account? "),C("button",{type:"button",onClick:a[2]||(a[2]=c=>le(e).openModal("register")),class:"font-medium text-primary-900 hover:underline dark:text-primary-500"},"Sign up")])]),m6,he(u0)])]))}},y6={class:"p-6 space-y-4 w-full md:space-y-6 sm:p-8"},v6=C("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"},"Sign up to your account",-1),w6={class:"space-y-4 md:space-y-6",action:"#"},E6=C("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Name",-1),I6=C("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Email",-1),T6=C("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),C6={key:0,class:"text-xs text-red-500"},A6=C("label",{for:"conpassword",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Confirm Password",-1),R6={key:0,class:"text-xs text-red-500"},b6={class:"flex items-center justify-between"},S6={class:"flex items-start"},P6={key:0,class:"text-xs text-red-500"},k6=C("a",{href:"#",class:"text-sm font-medium text-primary-900 hover:underline dark:text-primary-500"},"Forgot password?",-1),x6={class:"text-sm font-light text-gray-500 dark:text-gray-400"},O6=C("div",{class:"flex items-center space-x-4"},[C("div",{class:"flex grow border-t border-gray-400"}),C("span",null,"or"),C("div",{class:"flex grow border-t border-gray-400"})],-1),D6={__name:"RegisterForm",setup(t){const e=ur(),n=Me(""),r=Me(""),s=Me(""),i=Me(""),o=Me(""),a=()=>{r.value==""||s.value==""||n.value==""||i.value==""?o.value="Please fill in all fields":l2(Fr,r.value,s.value).then(()=>{d2(Fr.currentUser,{displayName:n.value}).catch(c=>{o.value=c.message})})};return(c,l)=>(te(),ye("div",{onClick:l[5]||(l[5]=Bg(()=>{},["stop"])),class:"bg-white w-full h-fit rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"},[C("div",y6,[v6,C("form",w6,[C("div",null,[E6,rs(C("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),type:"text",name:"name",id:"name",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"John Doe",required:""},null,512),[[jn,n.value]])]),C("div",null,[I6,rs(C("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>r.value=u),type:"email",name:"email",id:"email",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[jn,r.value]])]),C("div",null,[T6,rs(C("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>s.value=u),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[jn,s.value]]),s.value.length>0&&s.value.length<6?(te(),ye("span",C6,"Minimum 6 characters")):st("",!0)]),C("div",null,[A6,rs(C("input",{"onUpdate:modelValue":l[3]||(l[3]=u=>i.value=u),type:"password",name:"conpassword",id:"conpassword",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[jn,i.value]])]),s.value.length>0&&i.value.length>0&&s.value!==i.value?(te(),ye("span",R6,"Passwords do not match")):st("",!0),C("div",b6,[C("div",S6,[o.value?(te(),ye("span",P6,Ho(o.value),1)):st("",!0)]),k6]),C("button",{type:"button",onClick:a,class:"w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}," Sign up "),C("p",x6,[Gn(" Have an account? "),C("button",{type:"button",onClick:l[4]||(l[4]=u=>le(e).openModal("login")),class:"font-medium text-primary-900 hover:underline dark:text-primary-500"},"Sign in")])]),O6,he(u0)])]))}},N6={__name:"LogReg",setup(t){const e=bu(),n=Ru(),r=()=>{$m(Fr,i=>{i&&e.path.includes("/login")&&n.push("/")})};Ca(()=>{r()});const s=ur();return(i,o)=>le(s).modalOpen||le(e).path.includes("/login")||le(e).path.includes("/register")?(te(),ye("div",{key:0,onClick:o[0]||(o[0]=a=>le(e).path.includes("/login")||le(e).path.includes("/register")?le(n).push("/"):le(s).modalOpen=""),class:"bg-black h-screen z-50 left-0 top-0 bg-opacity-70 fixed flex w-screen items-center justify-center p-5"},[le(e).path.includes("/login")||le(s).modalOpen=="login"?(te(),qt(_6,{key:0})):st("",!0),le(e).path.includes("/register")||le(s).modalOpen=="register"?(te(),qt(D6,{key:1})):st("",!0)])):st("",!0)}},V6={class:"flex font-saans flex-col-reverse lg:flex-row h-full w-full text-white"},M6={class:"bg-slate-800 max-lg:pb-24 justify-center flex items-start min-h-screen overflow-hidden w-full"},L6={class:"container p-5"},F6={__name:"App",setup(t){const e=ur();return(n,r)=>(te(),ye("div",V6,[le(e).isLoggedIn?st("",!0):(te(),qt(N6,{key:0})),he(JP),C("div",M6,[C("div",L6,[he(le(nm))])])]))}},U6="modulepreload",$6=function(t){return"/"+t},Up={},It=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=$6(o),o in Up)return;Up[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":U6,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},B6={},j6={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},q6=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),H6=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),z6=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{d:"M13 8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11H8C7.44772 11 7 11.4477 7 12C7 12.5523 7.44772 13 8 13H11V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13H16C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11H13V8Z",fill:"currentColor"}),C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12Z",fill:"currentColor"})],-1),W6=[q6,H6,z6];function G6(t,e){return te(),ye("svg",j6,W6)}const K6=Sn(B6,[["render",G6]]),Q6={class:"flex flex-col justify-center mt-4 gap-4"},Y6={class:"flex justify-between grow container"},X6={class:"font-Niramit text-3xl bold"},J6={class:"aspect-square p-3 flex items-center relative w-full overflow-hidden"},Z6=["src"],e3={class:"px-1 text-xl lg:text-2xl"},h0={__name:"ProductsView",setup(t){const e=bu();Ru(),ur();const n=Me([]),r=ht(()=>e.path.includes("category")?e.params.cat:e.path.includes("admin")?"All Products":""),s=async()=>{const h=iS(xy(l0,"game")),d=await uS(h);n.value=d.docs.map(f=>f.data())},i=()=>{const h=new Set;n.value.forEach(f=>{f.categories.forEach(_=>{h.add(_)})});const d=l(Array.from(h)).filter(f=>f!=="All Products").filter(f=>f!=="Popular");return d.unshift("Popular"),d.push("All Products"),d},o=ht(()=>i()),a=h=>`/products/category/${h}`,c=h=>e.path.includes("admin")?`/admin/item/${h.id}`:`/products/${h.id}`,l=h=>{for(let d=h.length-1;d>0;d--){const f=Math.floor(Math.random()*(d+1));[h[d],h[f]]=[h[f],h[d]]}return h},u=ht(()=>{if(e.path==="/"){const h=[];return["Popular","All Products"].forEach(f=>{const _=l(n.value.filter(I=>I.categories.includes(f))).slice(0,6);h.push({category:f,games:_})}),h}else if(r.value){const h=n.value.filter(d=>d.categories.includes(r.value));return[{category:r.value,games:h}]}else{const h=[];return o.value.forEach(d=>{const f=l(n.value.filter(_=>_.categories.includes(d))).slice(0,6);h.push({category:d,games:f})}),h}});return Ca(()=>{s()}),(h,d)=>{const f=vu("RouterLink");return te(),ye("div",Q6,[(te(!0),ye(Ut,null,dd(u.value,_=>(te(),ye("div",{class:"flex flex-col justify-center mt-4 gap-4",key:_.category},[C("div",Y6,[C("h1",X6,Ho(_.category),1),le(e).path.includes("admin")?(te(),qt(f,{key:0,to:"/admin/add-product",class:"group text-lg font-semibold flex gap-2 items-center"},{default:$t(()=>[he(K6,{class:"w-7 duration-150 group-hover:scale-105"}),Gn(" Add Product")]),_:1})):r.value?r.value?(te(),qt(f,{key:2,to:"/products",class:"text-lg font-semibold flex gap-2 items-center"},{default:$t(()=>[Gn("Back")]),_:1})):st("",!0):(te(),qt(f,{key:1,to:a(_.category),class:"text-lg font-semibold flex gap-2 items-center"},{default:$t(()=>[Gn("See All")]),_:2},1032,["to"]))]),C("div",{class:ks([r.value?"flex-wrap justify-center":"overflow-x-scroll","flex gap-3 p-3"])},[(te(!0),ye(Ut,null,dd(_.games,I=>(te(),qt(f,{to:c(I),class:"min-w-52 max-w-52 lg:max-w-72 lg:min-w-72 relative text-center bg-slate-700 overflow-hidden rounded-xl pb-2 hover:scale-105 duration-300",key:I.id},{default:$t(()=>[C("div",J6,[C("img",{class:"top-0 h-full w-auto rounded-xl",src:`${I.image}`,alt:""},null,8,Z6)]),C("h3",e3,Ho(I.name),1)]),_:2},1032,["to"]))),128))],2)]))),128))])}}},tl=Object.freeze(Object.defineProperty({__proto__:null,default:h0},Symbol.toStringTag,{value:"Module"})),t3={class:"bg-slate-800 flex w-full justify-center p-5"},n3={class:"flex flex-col grow container"},r3=C("h1",{class:"text-3xl bold"},"Welcome To Our Gaming Store!",-1),s3={__name:"HomeView",setup(t){return(e,n)=>(te(),ye("div",t3,[C("div",n3,[r3,he(h0)])]))}},i3=GE({history:uE("/"),routes:[{path:"/",name:"home",component:s3},{path:"/products",name:"products",component:()=>It(()=>import("./ProductsMainView-UY1FM1H0.js"),__vite__mapDeps([])),children:[{path:"",name:"products",component:()=>It(()=>Promise.resolve().then(()=>tl),void 0)},{path:"/products/:id",name:"product",component:()=>It(()=>import("./ItemView-U1ur1v_g.js"),__vite__mapDeps([]))},{path:"/products/category/:cat",name:"category",component:()=>It(()=>Promise.resolve().then(()=>tl),void 0)}]},{path:"/cart",name:"cart",component:()=>It(()=>import("./CartView-ICQ5Fn_H.js"),__vite__mapDeps([]))},{path:"/transaction",name:"transaction",component:()=>It(()=>import("./TransactionView-cWB1mfgo.js"),__vite__mapDeps([]))},{path:"/admin",name:"admin",component:()=>It(()=>import("./AdminView-sK3tgG1g.js"),__vite__mapDeps([])),children:[{path:"",name:"admin",component:()=>It(()=>Promise.resolve().then(()=>tl),void 0)},{path:"add-product",name:"add-product",component:()=>It(()=>import("./AddProdView-SlqoG6OE.js"),__vite__mapDeps([]))},{path:"users",name:"users",component:()=>It(()=>import("./UsersView-dUDPHLI3.js"),__vite__mapDeps([]))},{path:"orders",name:"orders",component:()=>It(()=>import("./OrderView-zRS2_rLB.js"),__vite__mapDeps([]))},{path:"item/:id",name:"item",component:()=>It(()=>import("./ItemView-uiq5fk3O.js"),__vite__mapDeps([]))},{path:"instant",name:"edit-product",component:()=>It(()=>import("./adminInstant-RjPdsebw.js"),__vite__mapDeps([]))}]}]}),Yh=Mw(F6);Yh.use($w());Yh.use(i3);Yh.mount("#app");export{p3 as A,lS as B,Gn as C,o3 as D,ks as E,Ut as F,Pw as G,$m as H,K6 as I,Fr as J,iS as K,h3 as L,y3 as M,v3 as N,m3 as O,_3 as P,d3 as Q,qE as R,Qv as S,Sn as _,bu as a,Ru as b,qt as c,Me as d,Ca as e,ye as f,C as g,he as h,le as i,dd as j,st as k,rs as l,kw as m,xy as n,te as o,Oy as p,l0 as q,vu as r,g3 as s,Ho as t,ur as u,jn as v,$t as w,u3 as x,uS as y,f3 as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}