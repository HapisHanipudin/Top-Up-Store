(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Kl(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ce={},rs=[],Ot=()=>{},e0=()=>!1,pa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Gl=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Ql=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},t0=Object.prototype.hasOwnProperty,ae=(t,e)=>t0.call(t,e),z=Array.isArray,ss=t=>Mi(t)==="[object Map]",Rs=t=>Mi(t)==="[object Set]",qh=t=>Mi(t)==="[object Date]",J=t=>typeof t=="function",Fe=t=>typeof t=="string",Kn=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Sp=t=>(Te(t)||J(t))&&J(t.then)&&J(t.catch),Pp=Object.prototype.toString,Mi=t=>Pp.call(t),n0=t=>Mi(t).slice(8,-1),kp=t=>Mi(t)==="[object Object]",Yl=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ro=Kl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ga=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},r0=/-(\w)/g,an=ga(t=>t.replace(r0,(e,n)=>n?n.toUpperCase():"")),s0=/\B([A-Z])/g,bs=ga(t=>t.replace(s0,"-$1").toLowerCase()),ma=ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),uc=ga(t=>t?`on${ma(t)}`:""),Gn=(t,e)=>!Object.is(t,e),bo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},$o=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Bo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hh;const Op=()=>Hh||(Hh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Xl(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?c0(r):Xl(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||Te(t))return t}const i0=/;(?![^(]*\))/g,o0=/:([^]+)/,a0=/\/\*[^]*?\*\//g;function c0(t){const e={};return t.replace(a0,"").split(i0).forEach(n=>{if(n){const r=n.split(o0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Li(t){let e="";if(Fe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=Li(t[n]);r&&(e+=r+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const l0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",u0=Kl(l0);function xp(t){return!!t||t===""}function h0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ar(t[r],e[r]);return n}function Ar(t,e){if(t===e)return!0;let n=qh(t),r=qh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Kn(t),r=Kn(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?h0(t,e):!1;if(n=Te(t),r=Te(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ar(t[o],e[o]))return!1}}return String(t)===String(e)}function Jl(t,e){return t.findIndex(n=>Ar(n,e))}const Dp=t=>Fe(t)?t:t==null?"":z(t)||Te(t)&&(t.toString===Pp||!J(t.toString))?JSON.stringify(t,Np,2):String(t),Np=(t,e)=>e&&e.__v_isRef?Np(t,e.value):ss(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[hc(r,i)+" =>"]=s,n),{})}:Rs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>hc(n))}:Kn(e)?hc(e):Te(e)&&!z(e)&&!kp(e)?String(e):e,hc=(t,e="")=>{var n;return Kn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let wt;class Vp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=wt,!e&&wt&&(this.index=(wt.scopes||(wt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=wt;try{return wt=this,e()}finally{wt=n}}}on(){wt=this}off(){wt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Mp(t){return new Vp(t)}function d0(t,e=wt){e&&e.active&&e.effects.push(t)}function Lp(){return wt}function f0(t){wt&&wt.cleanups.push(t)}let _r;class Zl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,d0(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Lr();for(const e of this.deps)if(e.computed&&(p0(e.computed),this._dirtyLevel>=2))break;Fr(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=$n,n=_r;try{return $n=!0,_r=this,this._runnings++,zh(this),this.fn()}finally{Wh(this),this._runnings--,_r=n,$n=e}}stop(){var e;this.active&&(zh(this),Wh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function p0(t){return t.value}function zh(t){t._trackId++,t._depsLength=0}function Wh(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Fp(t.deps[e],t);t.deps.length=t._depsLength}}function Fp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let $n=!0,Kc=0;const Up=[];function Lr(){Up.push($n),$n=!1}function Fr(){const t=Up.pop();$n=t===void 0?!0:t}function eu(){Kc++}function tu(){for(Kc--;!Kc&&Gc.length;)Gc.shift()()}function $p(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Fp(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Gc=[];function Bp(t,e,n){eu();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&Gc.push(r.scheduler))}tu()}const jp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},jo=new WeakMap,yr=Symbol(""),Qc=Symbol("");function _t(t,e,n){if($n&&_r){let r=jo.get(t);r||jo.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=jp(()=>r.delete(n))),$p(_r,s)}}function yn(t,e,n,r,s,i){const o=jo.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Kn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Yl(n)&&a.push(o.get("length")):(a.push(o.get(yr)),ss(t)&&a.push(o.get(Qc)));break;case"delete":z(t)||(a.push(o.get(yr)),ss(t)&&a.push(o.get(Qc)));break;case"set":ss(t)&&a.push(o.get(yr));break}eu();for(const c of a)c&&Bp(c,3);tu()}function g0(t,e){var n;return(n=jo.get(t))==null?void 0:n.get(e)}const m0=Kl("__proto__,__v_isRef,__isVue"),qp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Kn)),Kh=_0();function _0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ce(this);for(let i=0,o=this.length;i<o;i++)_t(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ce)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Lr(),eu();const r=ce(this)[e].apply(this,n);return tu(),Fr(),r}}),t}function y0(t){const e=ce(this);return _t(e,"has",t),e.hasOwnProperty(t)}class Hp{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?O0:Gp:i?Kp:Wp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=z(e);if(!s){if(o&&ae(Kh,n))return Reflect.get(Kh,n,r);if(n==="hasOwnProperty")return y0}const a=Reflect.get(e,n,r);return(Kn(n)?qp.has(n):m0(n))||(s||_t(e,"get",n),i)?a:Ue(a)?o&&Yl(n)?a:a.value:Te(a)?s?Yp(a):Fi(a):a}}class zp extends Hp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=hs(i);if(!es(r)&&!hs(r)&&(i=ce(i),r=ce(r)),!z(e)&&Ue(i)&&!Ue(r))return c?!1:(i.value=r,!0)}const o=z(e)&&Yl(n)?Number(n)<e.length:ae(e,n),a=Reflect.set(e,n,r,s);return e===ce(s)&&(o?Gn(r,i)&&yn(e,"set",n,r):yn(e,"add",n,r)),a}deleteProperty(e,n){const r=ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&yn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Kn(n)||!qp.has(n))&&_t(e,"has",n),r}ownKeys(e){return _t(e,"iterate",z(e)?"length":yr),Reflect.ownKeys(e)}}class v0 extends Hp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const E0=new zp,w0=new v0,I0=new zp(!0),nu=t=>t,_a=t=>Reflect.getPrototypeOf(t);function ao(t,e,n=!1,r=!1){t=t.__v_raw;const s=ce(t),i=ce(e);n||(Gn(e,i)&&_t(s,"get",e),_t(s,"get",i));const{has:o}=_a(s),a=r?nu:n?iu:hi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function co(t,e=!1){const n=this.__v_raw,r=ce(n),s=ce(t);return e||(Gn(t,s)&&_t(r,"has",t),_t(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function lo(t,e=!1){return t=t.__v_raw,!e&&_t(ce(t),"iterate",yr),Reflect.get(t,"size",t)}function Gh(t){t=ce(t);const e=ce(this);return _a(e).has.call(e,t)||(e.add(t),yn(e,"add",t,t)),this}function Qh(t,e){e=ce(e);const n=ce(this),{has:r,get:s}=_a(n);let i=r.call(n,t);i||(t=ce(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Gn(e,o)&&yn(n,"set",t,e):yn(n,"add",t,e),this}function Yh(t){const e=ce(this),{has:n,get:r}=_a(e);let s=n.call(e,t);s||(t=ce(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&yn(e,"delete",t,void 0),i}function Xh(){const t=ce(this),e=t.size!==0,n=t.clear();return e&&yn(t,"clear",void 0,void 0),n}function uo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=ce(o),c=e?nu:t?iu:hi;return!t&&_t(a,"iterate",yr),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function ho(t,e,n){return function(...r){const s=this.__v_raw,i=ce(s),o=ss(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?nu:e?iu:hi;return!e&&_t(i,"iterate",c?Qc:yr),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function bn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function T0(){const t={get(i){return ao(this,i)},get size(){return lo(this)},has:co,add:Gh,set:Qh,delete:Yh,clear:Xh,forEach:uo(!1,!1)},e={get(i){return ao(this,i,!1,!0)},get size(){return lo(this)},has:co,add:Gh,set:Qh,delete:Yh,clear:Xh,forEach:uo(!1,!0)},n={get(i){return ao(this,i,!0)},get size(){return lo(this,!0)},has(i){return co.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:uo(!0,!1)},r={get(i){return ao(this,i,!0,!0)},get size(){return lo(this,!0)},has(i){return co.call(this,i,!0)},add:bn("add"),set:bn("set"),delete:bn("delete"),clear:bn("clear"),forEach:uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=ho(i,!1,!1),n[i]=ho(i,!0,!1),e[i]=ho(i,!1,!0),r[i]=ho(i,!0,!0)}),[t,n,e,r]}const[C0,A0,R0,b0]=T0();function ru(t,e){const n=e?t?b0:R0:t?A0:C0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const S0={get:ru(!1,!1)},P0={get:ru(!1,!0)},k0={get:ru(!0,!1)},Wp=new WeakMap,Kp=new WeakMap,Gp=new WeakMap,O0=new WeakMap;function x0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function D0(t){return t.__v_skip||!Object.isExtensible(t)?0:x0(n0(t))}function Fi(t){return hs(t)?t:su(t,!1,E0,S0,Wp)}function Qp(t){return su(t,!1,I0,P0,Kp)}function Yp(t){return su(t,!0,w0,k0,Gp)}function su(t,e,n,r,s){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=D0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Bn(t){return hs(t)?Bn(t.__v_raw):!!(t&&t.__v_isReactive)}function hs(t){return!!(t&&t.__v_isReadonly)}function es(t){return!!(t&&t.__v_isShallow)}function Xp(t){return Bn(t)||hs(t)}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function ya(t){return $o(t,"__v_skip",!0),t}const hi=t=>Te(t)?Fi(t):t,iu=t=>Te(t)?Yp(t):t;class Jp{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Zl(()=>e(this._value),()=>Yc(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ce(this);return Zp(e),(!e._cacheable||e.effect.dirty)&&Gn(e._value,e._value=e.effect.run())&&Yc(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function N0(t,e,n=!1){let r,s;const i=J(t);return i?(r=t,s=Ot):(r=t.get,s=t.set),new Jp(r,s,i||!s,n)}function Zp(t){$n&&_r&&(t=ce(t),$p(_r,t.dep||(t.dep=jp(()=>t.dep=void 0,t instanceof Jp?t:void 0))))}function Yc(t,e=3,n){t=ce(t);const r=t.dep;r&&Bp(r,e)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function je(t){return eg(t,!1)}function V0(t){return eg(t,!0)}function eg(t,e){return Ue(t)?t:new M0(t,e)}class M0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:ce(e),this._value=n?e:hi(e)}get value(){return Zp(this),this._value}set value(e){const n=this.__v_isShallow||es(e)||hs(e);e=n?e:ce(e),Gn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:hi(e),Yc(this,3))}}function le(t){return Ue(t)?t.value:t}const L0={get:(t,e,n)=>le(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function tg(t){return Bn(t)?t:new Proxy(t,L0)}function F0(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=$0(t,n);return e}class U0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return g0(ce(this._object),this._key)}}function $0(t,e,n){const r=t[e];return Ue(r)?r:new U0(t,e,n)}function jn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){va(i,e,n)}return s}function Bt(t,e,n,r){if(J(t)){const i=jn(t,e,n,r);return i&&Sp(i)&&i.catch(o=>{va(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Bt(t[i],e,n,r));return s}function va(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){jn(c,null,10,[t,o,a]);return}}B0(t,n,s,r)}function B0(t,e,n,r=!0){console.error(t)}let di=!1,Xc=!1;const rt=[];let Yt=0;const is=[];let hn=null,ur=0;const ng=Promise.resolve();let ou=null;function au(t){const e=ou||ng;return t?e.then(this?t.bind(this):t):e}function j0(t){let e=Yt+1,n=rt.length;for(;e<n;){const r=e+n>>>1,s=rt[r],i=fi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function cu(t){(!rt.length||!rt.includes(t,di&&t.allowRecurse?Yt+1:Yt))&&(t.id==null?rt.push(t):rt.splice(j0(t.id),0,t),rg())}function rg(){!di&&!Xc&&(Xc=!0,ou=ng.then(ig))}function q0(t){const e=rt.indexOf(t);e>Yt&&rt.splice(e,1)}function H0(t){z(t)?is.push(...t):(!hn||!hn.includes(t,t.allowRecurse?ur+1:ur))&&is.push(t),rg()}function Jh(t,e,n=di?Yt+1:0){for(;n<rt.length;n++){const r=rt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;rt.splice(n,1),n--,r()}}}function sg(t){if(is.length){const e=[...new Set(is)];if(is.length=0,hn){hn.push(...e);return}for(hn=e,hn.sort((n,r)=>fi(n)-fi(r)),ur=0;ur<hn.length;ur++)hn[ur]();hn=null,ur=0}}const fi=t=>t.id==null?1/0:t.id,z0=(t,e)=>{const n=fi(t)-fi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function ig(t){Xc=!1,di=!0,rt.sort(z0);try{for(Yt=0;Yt<rt.length;Yt++){const e=rt[Yt];e&&e.active!==!1&&jn(e,null,14)}}finally{Yt=0,rt.length=0,sg(),di=!1,ou=null,(rt.length||is.length)&&ig()}}function W0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ce;d&&(s=n.map(p=>Fe(p)?p.trim():p)),h&&(s=n.map(Bo))}let a,c=r[a=uc(e)]||r[a=uc(an(e))];!c&&i&&(c=r[a=uc(bs(e))]),c&&Bt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Bt(l,t,6,s)}}function og(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=og(l,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Te(t)&&r.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Xe(o,i),Te(t)&&r.set(t,o),o)}function Ea(t,e){return!t||!pa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,bs(e))||ae(t,e))}let It=null,ag=null;function qo(t){const e=It;return It=t,ag=t&&t.type.__scopeId||null,e}function hr(t,e=It,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ld(-1);const i=qo(e);let o;try{o=t(...s)}finally{qo(i),r._d&&ld(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function dc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:T}=t;let E,S;const D=qo(t);try{if(n.shapeFlag&4){const B=s||r,L=B;E=Qt(u.call(L,B,h,i,p,d,y)),S=c}else{const B=e;E=Qt(B.length>1?B(i,{attrs:c,slots:a,emit:l}):B(i,null)),S=e.props?c:K0(c)}}catch(B){Zs.length=0,va(B,t,1),E=ge(Rr)}let N=E;if(S&&T!==!1){const B=Object.keys(S),{shapeFlag:L}=N;B.length&&L&7&&(o&&B.some(Gl)&&(S=G0(S,o)),N=ds(N,S))}return n.dirs&&(N=ds(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),E=N,qo(D),E}const K0=t=>{let e;for(const n in t)(n==="class"||n==="style"||pa(n))&&((e||(e={}))[n]=t[n]);return e},G0=(t,e)=>{const n={};for(const r in t)(!Gl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function Q0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Zh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Ea(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Zh(r,o,l):!0:!!o;return!1}function Zh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Ea(n,i))return!0}return!1}function Y0({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const cg="components";function lg(t,e){return J0(cg,t,!0,e)||t}const X0=Symbol.for("v-ndc");function J0(t,e,n=!0,r=!1){const s=It||qe;if(s){const i=s.type;if(t===cg){const a=Wv(i,!1);if(a&&(a===e||a===an(e)||a===ma(an(e))))return i}const o=ed(s[t]||i[t],e)||ed(s.appContext[t],e);return!o&&r?i:o}}function ed(t,e){return t&&(t[e]||t[an(e)]||t[ma(an(e))])}const Z0=t=>t.__isSuspense;function ev(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):H0(t)}const tv=Symbol.for("v-scx"),nv=()=>xt(tv),fo={};function Xs(t,e,n){return ug(t,e,n)}function ug(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ce){var c;if(e&&i){const L=e;e=(...ie)=>{L(...ie),B()}}const l=Lp()===((c=qe)==null?void 0:c.scope)?qe:null;let u,h=!1,d=!1;if(Ue(t)?(u=()=>t.value,h=es(t)):Bn(t)?(u=es(t)||r===!1?()=>pn(t,1):()=>pn(t),h=!0):z(t)?(d=!0,h=t.some(L=>Bn(L)||es(L)),u=()=>t.map(L=>{if(Ue(L))return L.value;if(Bn(L))return pn(L,es(L)||r===!1?1:void 0);if(J(L))return jn(L,l,2)})):J(t)?e?u=()=>jn(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),Bt(t,l,3,[y])}:u=Ot,e&&r){const L=u;u=()=>pn(L())}let p,y=L=>{p=N.onStop=()=>{jn(L,l,4),p=N.onStop=void 0}},T;if(Ca)if(y=Ot,e?n&&Bt(e,l,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const L=nv();T=L.__watcherHandles||(L.__watcherHandles=[])}else return Ot;let E=d?new Array(t.length).fill(fo):fo;const S=()=>{if(!(!N.active||!N.dirty))if(e){const L=N.run();(r||h||(d?L.some((ie,me)=>Gn(ie,E[me])):Gn(L,E)))&&(p&&p(),Bt(e,l,3,[L,E===fo?void 0:d&&E[0]===fo?[]:E,y]),E=L)}else N.run()};S.allowRecurse=!!e;let D;s==="sync"?D=S:s==="post"?D=()=>ft(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),D=()=>cu(S));const N=new Zl(u,Ot,D),B=()=>{N.stop(),l&&l.scope&&Ql(l.scope.effects,N)};return e?n?S():E=N.run():s==="post"?ft(N.run.bind(N),l&&l.suspense):N.run(),T&&T.push(B),B}function rv(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?hg(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=qe;fs(this);const a=ug(s,i.bind(r),n);return o?fs(o):wr(),a}function hg(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function pn(t,e,n=0,r){if(!Te(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ue(t))pn(t.value,e,n,r);else if(z(t))for(let s=0;s<t.length;s++)pn(t[s],e,n,r);else if(Rs(t)||ss(t))t.forEach(s=>{pn(s,e,n,r)});else if(kp(t))for(const s in t)pn(t[s],e,n,r);return t}function ts(t,e){const n=It;if(n===null)return t;const r=Aa(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ce]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&pn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function ar(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Lr(),Bt(c,n,8,[t.el,a,t,e]),Fr())}}/*! #__NO_SIDE_EFFECTS__ */function dg(t,e){return J(t)?Xe({name:t.name},e,{setup:t}):t}const So=t=>!!t.type.__asyncLoader,fg=t=>t.type.__isKeepAlive;function sv(t,e){pg(t,"a",e)}function iv(t,e){pg(t,"da",e)}function pg(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(wa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)fg(s.parent.vnode)&&ov(r,e,n,s),s=s.parent}}function ov(t,e,n,r){const s=wa(e,t,r,!0);gg(()=>{Ql(r[e],s)},n)}function wa(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Lr(),fs(n);const a=Bt(e,n,t,o);return wr(),Fr(),a});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=qe)=>(!Ca||t==="sp")&&wa(t,(...r)=>e(...r),n),lu=Cn("bm"),av=Cn("m"),cv=Cn("bu"),lv=Cn("u"),uv=Cn("bum"),gg=Cn("um"),hv=Cn("sp"),dv=Cn("rtg"),fv=Cn("rtc");function pv(t,e=qe){wa("ec",t,e)}function x6(t,e,n,r){let s;const i=n&&n[r];if(z(t)||Fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Te(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Jc=t=>t?bg(t)?Aa(t)||t.proxy:Jc(t.parent):null,Js=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Jc(t.parent),$root:t=>Jc(t.root),$emit:t=>t.emit,$options:t=>uu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,cu(t.update)}),$nextTick:t=>t.n||(t.n=au.bind(t.proxy)),$watch:t=>rv.bind(t)}),fc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&ae(t,e),gv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(fc(r,e))return o[e]=1,r[e];if(s!==Ce&&ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==Ce&&ae(n,e))return o[e]=4,n[e];Zc&&(o[e]=0)}}const u=Js[e];let h,d;if(u)return e==="$attrs"&&_t(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return fc(s,e)?(s[e]=n,!0):r!==Ce&&ae(r,e)?(r[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&ae(t,o)||fc(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(Js,o)||ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function td(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Zc=!0;function mv(t){const e=uu(t),n=t.proxy,r=t.ctx;Zc=!1,e.beforeCreate&&nd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:T,deactivated:E,beforeDestroy:S,beforeUnmount:D,destroyed:N,unmounted:B,render:L,renderTracked:ie,renderTriggered:me,errorCaptured:ee,serverPrefetch:te,expose:we,inheritAttrs:Je,components:yt,directives:Rt,filters:or}=e;if(l&&_v(l,r,null),o)for(const ve in o){const fe=o[ve];J(fe)&&(r[ve]=fe.bind(n))}if(s){const ve=s.call(n,n);Te(ve)&&(t.data=Fi(ve))}if(Zc=!0,i)for(const ve in i){const fe=i[ve],ln=J(fe)?fe.bind(n,n):J(fe.get)?fe.get.bind(n,n):Ot,Rn=!J(fe)&&J(fe.set)?fe.set.bind(n):Ot,Wt=St({get:ln,set:Rn});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Wt.value,set:dt=>Wt.value=dt})}if(a)for(const ve in a)mg(a[ve],r,n,ve);if(c){const ve=J(c)?c.call(n):c;Reflect.ownKeys(ve).forEach(fe=>{Po(fe,ve[fe])})}u&&nd(u,t,"c");function ue(ve,fe){z(fe)?fe.forEach(ln=>ve(ln.bind(n))):fe&&ve(fe.bind(n))}if(ue(lu,h),ue(av,d),ue(cv,p),ue(lv,y),ue(sv,T),ue(iv,E),ue(pv,ee),ue(fv,ie),ue(dv,me),ue(uv,D),ue(gg,B),ue(hv,te),z(we))if(we.length){const ve=t.exposed||(t.exposed={});we.forEach(fe=>{Object.defineProperty(ve,fe,{get:()=>n[fe],set:ln=>n[fe]=ln})})}else t.exposed||(t.exposed={});L&&t.render===Ot&&(t.render=L),Je!=null&&(t.inheritAttrs=Je),yt&&(t.components=yt),Rt&&(t.directives=Rt)}function _v(t,e,n=Ot){z(t)&&(t=el(t));for(const r in t){const s=t[r];let i;Te(s)?"default"in s?i=xt(s.from||r,s.default,!0):i=xt(s.from||r):i=xt(s),Ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function nd(t,e,n){Bt(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function mg(t,e,n,r){const s=r.includes(".")?hg(n,r):()=>n[r];if(Fe(t)){const i=e[t];J(i)&&Xs(s,i)}else if(J(t))Xs(s,t.bind(n));else if(Te(t))if(z(t))t.forEach(i=>mg(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Xs(s,i,t)}}function uu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Ho(c,l,o,!0)),Ho(c,e,o)),Te(e)&&i.set(e,c),c}function Ho(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ho(t,i,n,!0),s&&s.forEach(o=>Ho(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=yv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const yv={data:rd,props:sd,emits:sd,methods:qs,computed:qs,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:qs,directives:qs,watch:Ev,provide:rd,inject:vv};function rd(t,e){return e?t?function(){return Xe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function vv(t,e){return qs(el(t),el(e))}function el(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?Xe(Object.create(null),t,e):e}function sd(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Xe(Object.create(null),td(t),td(e??{})):e}function Ev(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function _g(){return{app:null,config:{isNativeTag:e0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let wv=0;function Iv(t,e){return function(r,s=null){J(r)||(r=Xe({},r)),s!=null&&!Te(s)&&(s=null);const i=_g(),o=new WeakSet;let a=!1;const c=i.app={_uid:wv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Gv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ge(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Aa(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){pi=c;try{return l()}finally{pi=null}}};return c}}let pi=null;function Po(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function xt(t,e,n=!1){const r=qe||It;if(r||pi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:pi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r&&r.proxy):e}}function Tv(){return!!(qe||It||pi)}function Cv(t,e,n,r=!1){const s={},i={};$o(i,Ta,1),t.propsDefaults=Object.create(null),yg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Qp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Av(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=ce(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Ea(t.emitsOptions,d))continue;const p=e[d];if(c)if(ae(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const y=an(d);s[y]=tl(c,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{yg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=bs(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=tl(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&yn(t,"set","$attrs")}function yg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Ro(c))continue;const l=e[c];let u;s&&ae(s,u=an(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:Ea(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=ce(n),l=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=tl(s,c,h,l[h],t,!ae(l,h))}}return o}function tl(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(fs(s),r=l[n]=c.call(null,e),wr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===bs(n))&&(r=!0))}return r}function vg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,p]=vg(h,e,!0);Xe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Te(t)&&r.set(t,rs),rs;if(z(i))for(let u=0;u<i.length;u++){const h=an(i[u]);id(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=an(u);if(id(h)){const d=i[u],p=o[h]=z(d)||J(d)?{type:d}:Xe({},d);if(p){const y=cd(Boolean,p.type),T=cd(String,p.type);p[0]=y>-1,p[1]=T<0||y<T,(y>-1||ae(p,"default"))&&a.push(h)}}}const l=[o,a];return Te(t)&&r.set(t,l),l}function id(t){return t[0]!=="$"}function od(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function ad(t,e){return od(t)===od(e)}function cd(t,e){return z(e)?e.findIndex(n=>ad(n,t)):J(e)&&ad(e,t)?0:-1}const Eg=t=>t[0]==="_"||t==="$stable",hu=t=>z(t)?t.map(Qt):[Qt(t)],Rv=(t,e,n)=>{if(e._n)return e;const r=hr((...s)=>hu(e(...s)),n);return r._c=!1,r},wg=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Eg(s))continue;const i=t[s];if(J(i))e[s]=Rv(s,i,r);else if(i!=null){const o=hu(i);e[s]=()=>o}}},Ig=(t,e)=>{const n=hu(e);t.slots.default=()=>n},bv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ce(e),$o(e,"_",n)):wg(e,t.slots={})}else t.slots={},e&&Ig(t,e);$o(t.slots,Ta,1)},Sv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,wg(e,s)),o=e}else e&&(Ig(t,e),o={default:1});if(i)for(const a in s)!Eg(a)&&o[a]==null&&delete s[a]};function nl(t,e,n,r,s=!1){if(z(t)){t.forEach((d,p)=>nl(d,e&&(z(e)?e[p]:e),n,r,s));return}if(So(r)&&!s)return;const i=r.shapeFlag&4?Aa(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),J(c))jn(c,a,12,[o,u]);else{const d=Fe(c),p=Ue(c);if(d||p){const y=()=>{if(t.f){const T=d?ae(h,c)?h[c]:u[c]:c.value;s?z(T)&&Ql(T,i):z(T)?T.includes(i)||T.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,ft(y,n)):y()}}}const ft=ev;function Pv(t){return kv(t)}function kv(t,e){const n=Op();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=Ot,insertStaticContent:y}=t,T=(f,g,m,_=null,I=null,C=null,V=void 0,P=null,k=!!g.dynamicChildren)=>{if(f===g)return;f&&!Ls(f,g)&&(_=v(f),dt(f,I,C,!0),f=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:R,ref:M,shapeFlag:W}=g;switch(R){case Ia:E(f,g,m,_);break;case Rr:S(f,g,m,_);break;case ko:f==null&&D(g,m,_,V);break;case dn:yt(f,g,m,_,I,C,V,P,k);break;default:W&1?L(f,g,m,_,I,C,V,P,k):W&6?Rt(f,g,m,_,I,C,V,P,k):(W&64||W&128)&&R.process(f,g,m,_,I,C,V,P,k,O)}M!=null&&I&&nl(M,f&&f.ref,C,g||f,!g)},E=(f,g,m,_)=>{if(f==null)r(g.el=a(g.children),m,_);else{const I=g.el=f.el;g.children!==f.children&&l(I,g.children)}},S=(f,g,m,_)=>{f==null?r(g.el=c(g.children||""),m,_):g.el=f.el},D=(f,g,m,_)=>{[f.el,f.anchor]=y(f.children,g,m,_,f.el,f.anchor)},N=({el:f,anchor:g},m,_)=>{let I;for(;f&&f!==g;)I=d(f),r(f,m,_),f=I;r(g,m,_)},B=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),s(f),f=m;s(g)},L=(f,g,m,_,I,C,V,P,k)=>{g.type==="svg"?V="svg":g.type==="math"&&(V="mathml"),f==null?ie(g,m,_,I,C,V,P,k):te(f,g,I,C,V,P,k)},ie=(f,g,m,_,I,C,V,P)=>{let k,R;const{props:M,shapeFlag:W,transition:q,dirs:Y}=f;if(k=f.el=o(f.type,C,M&&M.is,M),W&8?u(k,f.children):W&16&&ee(f.children,k,null,_,I,pc(f,C),V,P),Y&&ar(f,null,_,"created"),me(k,f,f.scopeId,V,_),M){for(const Ee in M)Ee!=="value"&&!Ro(Ee)&&i(k,Ee,null,M[Ee],C,f.children,_,I,Ze);"value"in M&&i(k,"value",null,M.value,C),(R=M.onVnodeBeforeMount)&&Gt(R,_,f)}Y&&ar(f,null,_,"beforeMount");const ne=Ov(I,q);ne&&q.beforeEnter(k),r(k,g,m),((R=M&&M.onVnodeMounted)||ne||Y)&&ft(()=>{R&&Gt(R,_,f),ne&&q.enter(k),Y&&ar(f,null,_,"mounted")},I)},me=(f,g,m,_,I)=>{if(m&&p(f,m),_)for(let C=0;C<_.length;C++)p(f,_[C]);if(I){let C=I.subTree;if(g===C){const V=I.vnode;me(f,V,V.scopeId,V.slotScopeIds,I.parent)}}},ee=(f,g,m,_,I,C,V,P,k=0)=>{for(let R=k;R<f.length;R++){const M=f[R]=P?On(f[R]):Qt(f[R]);T(null,M,g,m,_,I,C,V,P)}},te=(f,g,m,_,I,C,V)=>{const P=g.el=f.el;let{patchFlag:k,dynamicChildren:R,dirs:M}=g;k|=f.patchFlag&16;const W=f.props||Ce,q=g.props||Ce;let Y;if(m&&cr(m,!1),(Y=q.onVnodeBeforeUpdate)&&Gt(Y,m,g,f),M&&ar(g,f,m,"beforeUpdate"),m&&cr(m,!0),R?we(f.dynamicChildren,R,P,m,_,pc(g,I),C):V||fe(f,g,P,null,m,_,pc(g,I),C,!1),k>0){if(k&16)Je(P,g,W,q,m,_,I);else if(k&2&&W.class!==q.class&&i(P,"class",null,q.class,I),k&4&&i(P,"style",W.style,q.style,I),k&8){const ne=g.dynamicProps;for(let Ee=0;Ee<ne.length;Ee++){const be=ne[Ee],$e=W[be],Lt=q[be];(Lt!==$e||be==="value")&&i(P,be,$e,Lt,I,f.children,m,_,Ze)}}k&1&&f.children!==g.children&&u(P,g.children)}else!V&&R==null&&Je(P,g,W,q,m,_,I);((Y=q.onVnodeUpdated)||M)&&ft(()=>{Y&&Gt(Y,m,g,f),M&&ar(g,f,m,"updated")},_)},we=(f,g,m,_,I,C,V)=>{for(let P=0;P<g.length;P++){const k=f[P],R=g[P],M=k.el&&(k.type===dn||!Ls(k,R)||k.shapeFlag&70)?h(k.el):m;T(k,R,M,null,_,I,C,V,!0)}},Je=(f,g,m,_,I,C,V)=>{if(m!==_){if(m!==Ce)for(const P in m)!Ro(P)&&!(P in _)&&i(f,P,m[P],null,V,g.children,I,C,Ze);for(const P in _){if(Ro(P))continue;const k=_[P],R=m[P];k!==R&&P!=="value"&&i(f,P,R,k,V,g.children,I,C,Ze)}"value"in _&&i(f,"value",m.value,_.value,V)}},yt=(f,g,m,_,I,C,V,P,k)=>{const R=g.el=f?f.el:a(""),M=g.anchor=f?f.anchor:a("");let{patchFlag:W,dynamicChildren:q,slotScopeIds:Y}=g;Y&&(P=P?P.concat(Y):Y),f==null?(r(R,m,_),r(M,m,_),ee(g.children,m,M,I,C,V,P,k)):W>0&&W&64&&q&&f.dynamicChildren?(we(f.dynamicChildren,q,m,I,C,V,P),(g.key!=null||I&&g===I.subTree)&&Tg(f,g,!0)):fe(f,g,m,M,I,C,V,P,k)},Rt=(f,g,m,_,I,C,V,P,k)=>{g.slotScopeIds=P,f==null?g.shapeFlag&512?I.ctx.activate(g,m,_,V,k):or(g,m,_,I,C,V,k):bt(f,g,k)},or=(f,g,m,_,I,C,V)=>{const P=f.component=Bv(f,_,I);if(fg(f)&&(P.ctx.renderer=O),jv(P),P.asyncDep){if(I&&I.registerDep(P,ue),!f.el){const k=P.subTree=ge(Rr);S(null,k,g,m)}}else ue(P,f,g,m,I,C,V)},bt=(f,g,m)=>{const _=g.component=f.component;if(Q0(f,g,m))if(_.asyncDep&&!_.asyncResolved){ve(_,g,m);return}else _.next=g,q0(_.update),_.effect.dirty=!0,_.update();else g.el=f.el,_.vnode=g},ue=(f,g,m,_,I,C,V)=>{const P=()=>{if(f.isMounted){let{next:M,bu:W,u:q,parent:Y,vnode:ne}=f;{const Kr=Cg(f);if(Kr){M&&(M.el=ne.el,ve(f,M,V)),Kr.asyncDep.then(()=>{f.isUnmounted||P()});return}}let Ee=M,be;cr(f,!1),M?(M.el=ne.el,ve(f,M,V)):M=ne,W&&bo(W),(be=M.props&&M.props.onVnodeBeforeUpdate)&&Gt(be,Y,M,ne),cr(f,!0);const $e=dc(f),Lt=f.subTree;f.subTree=$e,T(Lt,$e,h(Lt.el),v(Lt),f,I,C),M.el=$e.el,Ee===null&&Y0(f,$e.el),q&&ft(q,I),(be=M.props&&M.props.onVnodeUpdated)&&ft(()=>Gt(be,Y,M,ne),I)}else{let M;const{el:W,props:q}=g,{bm:Y,m:ne,parent:Ee}=f,be=So(g);if(cr(f,!1),Y&&bo(Y),!be&&(M=q&&q.onVnodeBeforeMount)&&Gt(M,Ee,g),cr(f,!0),W&&pe){const $e=()=>{f.subTree=dc(f),pe(W,f.subTree,f,I,null)};be?g.type.__asyncLoader().then(()=>!f.isUnmounted&&$e()):$e()}else{const $e=f.subTree=dc(f);T(null,$e,m,_,f,I,C),g.el=$e.el}if(ne&&ft(ne,I),!be&&(M=q&&q.onVnodeMounted)){const $e=g;ft(()=>Gt(M,Ee,$e),I)}(g.shapeFlag&256||Ee&&So(Ee.vnode)&&Ee.vnode.shapeFlag&256)&&f.a&&ft(f.a,I),f.isMounted=!0,g=m=_=null}},k=f.effect=new Zl(P,Ot,()=>cu(R),f.scope),R=f.update=()=>{k.dirty&&k.run()};R.id=f.uid,cr(f,!0),R()},ve=(f,g,m)=>{g.component=f;const _=f.vnode.props;f.vnode=g,f.next=null,Av(f,g.props,_,m),Sv(f,g.children,m),Lr(),Jh(f),Fr()},fe=(f,g,m,_,I,C,V,P,k=!1)=>{const R=f&&f.children,M=f?f.shapeFlag:0,W=g.children,{patchFlag:q,shapeFlag:Y}=g;if(q>0){if(q&128){Rn(R,W,m,_,I,C,V,P,k);return}else if(q&256){ln(R,W,m,_,I,C,V,P,k);return}}Y&8?(M&16&&Ze(R,I,C),W!==R&&u(m,W)):M&16?Y&16?Rn(R,W,m,_,I,C,V,P,k):Ze(R,I,C,!0):(M&8&&u(m,""),Y&16&&ee(W,m,_,I,C,V,P,k))},ln=(f,g,m,_,I,C,V,P,k)=>{f=f||rs,g=g||rs;const R=f.length,M=g.length,W=Math.min(R,M);let q;for(q=0;q<W;q++){const Y=g[q]=k?On(g[q]):Qt(g[q]);T(f[q],Y,m,null,I,C,V,P,k)}R>M?Ze(f,I,C,!0,!1,W):ee(g,m,_,I,C,V,P,k,W)},Rn=(f,g,m,_,I,C,V,P,k)=>{let R=0;const M=g.length;let W=f.length-1,q=M-1;for(;R<=W&&R<=q;){const Y=f[R],ne=g[R]=k?On(g[R]):Qt(g[R]);if(Ls(Y,ne))T(Y,ne,m,null,I,C,V,P,k);else break;R++}for(;R<=W&&R<=q;){const Y=f[W],ne=g[q]=k?On(g[q]):Qt(g[q]);if(Ls(Y,ne))T(Y,ne,m,null,I,C,V,P,k);else break;W--,q--}if(R>W){if(R<=q){const Y=q+1,ne=Y<M?g[Y].el:_;for(;R<=q;)T(null,g[R]=k?On(g[R]):Qt(g[R]),m,ne,I,C,V,P,k),R++}}else if(R>q)for(;R<=W;)dt(f[R],I,C,!0),R++;else{const Y=R,ne=R,Ee=new Map;for(R=ne;R<=q;R++){const vt=g[R]=k?On(g[R]):Qt(g[R]);vt.key!=null&&Ee.set(vt.key,R)}let be,$e=0;const Lt=q-ne+1;let Kr=!1,$h=0;const Ms=new Array(Lt);for(R=0;R<Lt;R++)Ms[R]=0;for(R=Y;R<=W;R++){const vt=f[R];if($e>=Lt){dt(vt,I,C,!0);continue}let Kt;if(vt.key!=null)Kt=Ee.get(vt.key);else for(be=ne;be<=q;be++)if(Ms[be-ne]===0&&Ls(vt,g[be])){Kt=be;break}Kt===void 0?dt(vt,I,C,!0):(Ms[Kt-ne]=R+1,Kt>=$h?$h=Kt:Kr=!0,T(vt,g[Kt],m,null,I,C,V,P,k),$e++)}const Bh=Kr?xv(Ms):rs;for(be=Bh.length-1,R=Lt-1;R>=0;R--){const vt=ne+R,Kt=g[vt],jh=vt+1<M?g[vt+1].el:_;Ms[R]===0?T(null,Kt,m,jh,I,C,V,P,k):Kr&&(be<0||R!==Bh[be]?Wt(Kt,m,jh,2):be--)}}},Wt=(f,g,m,_,I=null)=>{const{el:C,type:V,transition:P,children:k,shapeFlag:R}=f;if(R&6){Wt(f.component.subTree,g,m,_);return}if(R&128){f.suspense.move(g,m,_);return}if(R&64){V.move(f,g,m,O);return}if(V===dn){r(C,g,m);for(let W=0;W<k.length;W++)Wt(k[W],g,m,_);r(f.anchor,g,m);return}if(V===ko){N(f,g,m);return}if(_!==2&&R&1&&P)if(_===0)P.beforeEnter(C),r(C,g,m),ft(()=>P.enter(C),I);else{const{leave:W,delayLeave:q,afterLeave:Y}=P,ne=()=>r(C,g,m),Ee=()=>{W(C,()=>{ne(),Y&&Y()})};q?q(C,ne,Ee):Ee()}else r(C,g,m)},dt=(f,g,m,_=!1,I=!1)=>{const{type:C,props:V,ref:P,children:k,dynamicChildren:R,shapeFlag:M,patchFlag:W,dirs:q}=f;if(P!=null&&nl(P,null,m,f,!0),M&256){g.ctx.deactivate(f);return}const Y=M&1&&q,ne=!So(f);let Ee;if(ne&&(Ee=V&&V.onVnodeBeforeUnmount)&&Gt(Ee,g,f),M&6)oo(f.component,m,_);else{if(M&128){f.suspense.unmount(m,_);return}Y&&ar(f,null,g,"beforeUnmount"),M&64?f.type.remove(f,g,m,I,O,_):R&&(C!==dn||W>0&&W&64)?Ze(R,g,m,!1,!0):(C===dn&&W&384||!I&&M&16)&&Ze(k,g,m),_&&zr(f)}(ne&&(Ee=V&&V.onVnodeUnmounted)||Y)&&ft(()=>{Ee&&Gt(Ee,g,f),Y&&ar(f,null,g,"unmounted")},m)},zr=f=>{const{type:g,el:m,anchor:_,transition:I}=f;if(g===dn){Wr(m,_);return}if(g===ko){B(f);return}const C=()=>{s(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:V,delayLeave:P}=I,k=()=>V(m,C);P?P(f.el,C,k):k()}else C()},Wr=(f,g)=>{let m;for(;f!==g;)m=d(f),s(f),f=m;s(g)},oo=(f,g,m)=>{const{bum:_,scope:I,update:C,subTree:V,um:P}=f;_&&bo(_),I.stop(),C&&(C.active=!1,dt(V,f,g,m)),P&&ft(P,g),ft(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ze=(f,g,m,_=!1,I=!1,C=0)=>{for(let V=C;V<f.length;V++)dt(f[V],g,m,_,I)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,g,m)=>{f==null?g._vnode&&dt(g._vnode,null,null,!0):T(g._vnode||null,f,g,null,null,null,m),Jh(),sg(),g._vnode=f},O={p:T,um:dt,m:Wt,r:zr,mt:or,mc:ee,pc:fe,pbc:we,n:v,o:t};let j,pe;return e&&([j,pe]=e(O)),{render:F,hydrate:j,createApp:Iv(F,j)}}function pc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Ov(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tg(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=On(s[i]),a.el=o.el),n||Tg(o,a)),a.type===Ia&&(a.el=o.el)}}function xv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Cg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Cg(e)}const Dv=t=>t.__isTeleport,dn=Symbol.for("v-fgt"),Ia=Symbol.for("v-txt"),Rr=Symbol.for("v-cmt"),ko=Symbol.for("v-stc"),Zs=[];let Ut=null;function de(t=!1){Zs.push(Ut=t?null:[])}function Nv(){Zs.pop(),Ut=Zs[Zs.length-1]||null}let gi=1;function ld(t){gi+=t}function Ag(t){return t.dynamicChildren=gi>0?Ut||rs:null,Nv(),gi>0&&Ut&&Ut.push(t),t}function Se(t,e,n,r,s,i){return Ag(b(t,e,n,r,s,i,!0))}function vr(t,e,n,r,s){return Ag(ge(t,e,n,r,s,!0))}function rl(t){return t?t.__v_isVNode===!0:!1}function Ls(t,e){return t.type===e.type&&t.key===e.key}const Ta="__vInternal",Rg=({key:t})=>t??null,Oo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Ue(t)||J(t)?{i:It,r:t,k:e,f:!!n}:t:null);function b(t,e=null,n=null,r=0,s=null,i=t===dn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rg(e),ref:e&&Oo(e),scopeId:ag,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:It};return a?(du(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),gi>0&&!o&&Ut&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Ut.push(c),c}const ge=Vv;function Vv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===X0)&&(t=Rr),rl(t)){const a=ds(t,e,!0);return n&&du(a,n),gi>0&&!i&&Ut&&(a.shapeFlag&6?Ut[Ut.indexOf(t)]=a:Ut.push(a)),a.patchFlag|=-2,a}if(Kv(t)&&(t=t.__vccOpts),e){e=Mv(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=Li(a)),Te(c)&&(Xp(c)&&!z(c)&&(c=Xe({},c)),e.style=Xl(c))}const o=Fe(t)?1:Z0(t)?128:Dv(t)?64:Te(t)?4:J(t)?2:0;return b(t,e,n,r,s,o,i,!0)}function Mv(t){return t?Xp(t)||Ta in t?Xe({},t):t:null}function ds(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Fv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Rg(a),ref:e&&e.ref?n&&s?z(s)?s.concat(Oo(e)):[s,Oo(e)]:Oo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==dn?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ds(t.ssContent),ssFallback:t.ssFallback&&ds(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Er(t=" ",e=0){return ge(Ia,null,t,e)}function Lv(t,e){const n=ge(ko,null,t);return n.staticCount=e,n}function ut(t="",e=!1){return e?(de(),vr(Rr,null,t)):ge(Rr,null,t)}function Qt(t){return t==null||typeof t=="boolean"?ge(Rr):z(t)?ge(dn,null,t.slice()):typeof t=="object"?On(t):ge(Ia,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ds(t)}function du(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),du(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ta in e)?e._ctx=It:s===3&&It&&(It.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:It},n=32):(e=String(e),r&64?(n=16,e=[Er(e)]):n=8);t.children=e,t.shapeFlag|=n}function Fv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Li([e.class,r.class]));else if(s==="style")e.style=Xl([e.style,r.style]);else if(pa(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Gt(t,e,n,r=null){Bt(t,e,7,[n,r])}const Uv=_g();let $v=0;function Bv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Uv,i={uid:$v++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:vg(r,s),emitsOptions:og(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=W0.bind(null,i),t.ce&&t.ce(i),i}let qe=null,fu,sl;{const t=Op(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};fu=e("__VUE_INSTANCE_SETTERS__",n=>qe=n),sl=e("__VUE_SSR_SETTERS__",n=>Ca=n)}const fs=t=>{fu(t),t.scope.on()},wr=()=>{qe&&qe.scope.off(),fu(null)};function bg(t){return t.vnode.shapeFlag&4}let Ca=!1;function jv(t,e=!1){e&&sl(e);const{props:n,children:r}=t.vnode,s=bg(t);Cv(t,n,s,e),bv(t,r);const i=s?qv(t,e):void 0;return e&&sl(!1),i}function qv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=ya(new Proxy(t.ctx,gv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?zv(t):null;fs(t),Lr();const i=jn(r,t,0,[t.props,s]);if(Fr(),wr(),Sp(i)){if(i.then(wr,wr),e)return i.then(o=>{ud(t,o,e)}).catch(o=>{va(o,t,0)});t.asyncDep=i}else ud(t,i,e)}else Sg(t,e)}function ud(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=tg(e)),Sg(t,n)}let hd;function Sg(t,e,n){const r=t.type;if(!t.render){if(!e&&hd&&!r.render){const s=r.template||uu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Xe(Xe({isCustomElement:i,delimiters:a},o),c);r.render=hd(s,l)}}t.render=r.render||Ot}{fs(t),Lr();try{mv(t)}finally{Fr(),wr()}}}function Hv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return _t(t,"get","$attrs"),e[n]}}))}function zv(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Hv(t)},slots:t.slots,emit:t.emit,expose:e}}function Aa(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(tg(ya(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)},has(e,n){return n in e||n in Js}}))}function Wv(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function Kv(t){return J(t)&&"__vccOpts"in t}const St=(t,e)=>N0(t,e,Ca);function Pg(t,e,n){const r=arguments.length;return r===2?Te(e)&&!z(e)?rl(e)?ge(t,null,[e]):ge(t,e):ge(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&rl(n)&&(n=[n]),ge(t,e,n))}const Gv="3.4.3",Qv="http://www.w3.org/2000/svg",Yv="http://www.w3.org/1998/Math/MathML",xn=typeof document<"u"?document:null,dd=xn&&xn.createElement("template"),Xv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?xn.createElementNS(Qv,t):e==="mathml"?xn.createElementNS(Yv,t):xn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>xn.createTextNode(t),createComment:t=>xn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>xn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=dd.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Jv=Symbol("_vtc");function Zv(t,e,n){const r=t[Jv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const eE=Symbol("_vod"),tE=Symbol("");function nE(t,e,n){const r=t.style,s=Fe(n);if(n&&!s){if(e&&!Fe(e))for(const i in e)n[i]==null&&il(r,i,"");for(const i in n)il(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[tE];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");eE in t&&(r.display=i)}}const fd=/\s*!important$/;function il(t,e,n){if(z(n))n.forEach(r=>il(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=rE(t,e);fd.test(n)?t.setProperty(bs(r),n.replace(fd,""),"important"):t[r]=n}}const pd=["Webkit","Moz","ms"],gc={};function rE(t,e){const n=gc[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return gc[e]=r;r=ma(r);for(let s=0;s<pd.length;s++){const i=pd[s]+r;if(i in t)return gc[e]=i}return e}const gd="http://www.w3.org/1999/xlink";function sE(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(gd,e.slice(6,e.length)):t.setAttributeNS(gd,e,n);else{const i=u0(e);n==null||i&&!xp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function iE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=xp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function fn(t,e,n,r){t.addEventListener(e,n,r)}function oE(t,e,n,r){t.removeEventListener(e,n,r)}const md=Symbol("_vei");function aE(t,e,n,r,s=null){const i=t[md]||(t[md]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=cE(e);if(r){const l=i[e]=hE(r,s);fn(t,a,l,c)}else o&&(oE(t,a,o,c),i[e]=void 0)}}const _d=/(?:Once|Passive|Capture)$/;function cE(t){let e;if(_d.test(t)){e={};let r;for(;r=t.match(_d);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):bs(t.slice(2)),e]}let mc=0;const lE=Promise.resolve(),uE=()=>mc||(lE.then(()=>mc=0),mc=Date.now());function hE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Bt(dE(r,n.value),e,5,[r])};return n.value=t,n.attached=uE(),n}function dE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const yd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,fE=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Zv(t,r,l):e==="style"?nE(t,n,r):pa(e)?Gl(e)||aE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):pE(t,e,r,l))?iE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),sE(t,e,r,l))};function pE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&yd(e)&&J(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return yd(e)&&Fe(n)?!1:e in t}const Qn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>bo(e,n):e};function gE(t){t.target.composing=!0}function vd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Dt=Symbol("_assign"),Fn={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Dt]=Qn(s);const i=r||s.props&&s.props.type==="number";fn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Bo(a)),t[Dt](a)}),n&&fn(t,"change",()=>{t.value=t.value.trim()}),e||(fn(t,"compositionstart",gE),fn(t,"compositionend",vd),fn(t,"change",vd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Dt]=Qn(i),t.composing)return;const o=s||t.type==="number"?Bo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},mE={deep:!0,created(t,e,n){t[Dt]=Qn(n),fn(t,"change",()=>{const r=t._modelValue,s=ps(t),i=t.checked,o=t[Dt];if(z(r)){const a=Jl(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(Rs(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(kg(t,i))})},mounted:Ed,beforeUpdate(t,e,n){t[Dt]=Qn(n),Ed(t,e,n)}};function Ed(t,{value:e,oldValue:n},r){t._modelValue=e,z(e)?t.checked=Jl(e,r.props.value)>-1:Rs(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Ar(e,kg(t,!0)))}const _E={created(t,{value:e},n){t.checked=Ar(e,n.props.value),t[Dt]=Qn(n),fn(t,"change",()=>{t[Dt](ps(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Dt]=Qn(r),e!==n&&(t.checked=Ar(e,r.props.value))}},yE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=Rs(e);fn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Bo(ps(o)):ps(o));t[Dt](t.multiple?s?new Set(i):i:i[0])}),t[Dt]=Qn(r)},mounted(t,{value:e}){wd(t,e)},beforeUpdate(t,e,n){t[Dt]=Qn(n)},updated(t,{value:e}){wd(t,e)}};function wd(t,e){const n=t.multiple;if(!(n&&!z(e)&&!Rs(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=ps(i);if(n)z(e)?i.selected=Jl(e,o)>-1:i.selected=e.has(o);else if(Ar(ps(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ps(t){return"_value"in t?t._value:t.value}function kg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const D6={created(t,e,n){po(t,e,n,null,"created")},mounted(t,e,n){po(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){po(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){po(t,e,n,r,"updated")}};function vE(t,e){switch(t){case"SELECT":return yE;case"TEXTAREA":return Fn;default:switch(e){case"checkbox":return mE;case"radio":return _E;default:return Fn}}}function po(t,e,n,r,s){const o=vE(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const EE=["ctrl","shift","alt","meta"],wE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>EE.some(n=>t[`${n}Key`]&&!e.includes(n))},Og=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=wE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},IE=Xe({patchProp:fE},Xv);let Id;function TE(){return Id||(Id=Pv(IE))}const CE=(...t)=>{const e=TE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=RE(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,AE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function AE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function RE(t){return Fe(t)?document.querySelector(t):t}var bE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let xg;const Ra=t=>xg=t,Dg=Symbol();function ol(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ei||(ei={}));function SE(){const t=Mp(!0),e=t.run(()=>je({}));let n=[],r=[];const s=ya({install(i){Ra(s),s._a=i,i.provide(Dg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!bE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const Ng=()=>{};function Td(t,e,n,r=Ng){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&Lp()&&f0(s),s}function Gr(t,...e){t.slice().forEach(n=>{n(...e)})}const PE=t=>t();function al(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];ol(s)&&ol(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!Bn(r)?t[n]=al(s,r):t[n]=r}return t}const kE=Symbol();function OE(t){return!ol(t)||!t.hasOwnProperty(kE)}const{assign:kn}=Object;function xE(t){return!!(Ue(t)&&t.effect)}function DE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=F0(n.state.value[t]);return kn(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=ya(St(()=>{Ra(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Vg(t,l,e,n,r,!0),c}function Vg(t,e,n={},r,s,i){let o;const a=kn({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),je({});let T;function E(ee){let te;l=u=!1,typeof ee=="function"?(ee(r.state.value[t]),te={type:ei.patchFunction,storeId:t,events:p}):(al(r.state.value[t],ee),te={type:ei.patchObject,payload:ee,storeId:t,events:p});const we=T=Symbol();au().then(()=>{T===we&&(l=!0)}),u=!0,Gr(h,te,r.state.value[t])}const S=i?function(){const{state:te}=n,we=te?te():{};this.$patch(Je=>{kn(Je,we)})}:Ng;function D(){o.stop(),h=[],d=[],r._s.delete(t)}function N(ee,te){return function(){Ra(r);const we=Array.from(arguments),Je=[],yt=[];function Rt(ue){Je.push(ue)}function or(ue){yt.push(ue)}Gr(d,{args:we,name:ee,store:L,after:Rt,onError:or});let bt;try{bt=te.apply(this&&this.$id===t?this:L,we)}catch(ue){throw Gr(yt,ue),ue}return bt instanceof Promise?bt.then(ue=>(Gr(Je,ue),ue)).catch(ue=>(Gr(yt,ue),Promise.reject(ue))):(Gr(Je,bt),bt)}}const B={_p:r,$id:t,$onAction:Td.bind(null,d),$patch:E,$reset:S,$subscribe(ee,te={}){const we=Td(h,ee,te.detached,()=>Je()),Je=o.run(()=>Xs(()=>r.state.value[t],yt=>{(te.flush==="sync"?u:l)&&ee({storeId:t,type:ei.direct,events:p},yt)},kn({},c,te)));return we},$dispose:D},L=Fi(B);r._s.set(t,L);const me=(r._a&&r._a.runWithContext||PE)(()=>r._e.run(()=>(o=Mp()).run(e)));for(const ee in me){const te=me[ee];if(Ue(te)&&!xE(te)||Bn(te))i||(y&&OE(te)&&(Ue(te)?te.value=y[ee]:al(te,y[ee])),r.state.value[t][ee]=te);else if(typeof te=="function"){const we=N(ee,te);me[ee]=we,a.actions[ee]=te}}return kn(L,me),kn(ce(L),me),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:ee=>{E(te=>{kn(te,ee)})}}),r._p.forEach(ee=>{kn(L,o.run(()=>ee({store:L,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(L.$state,y),l=!0,u=!0,L}function NE(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=Tv();return a=a||(l?xt(Dg,null):null),a&&Ra(a),a=xg,a._s.has(r)||(i?Vg(r,e,s,a):DE(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Yr=typeof window<"u";function VE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const _e=Object.assign;function _c(t,e){const n={};for(const r in e){const s=e[r];n[r]=jt(s)?s.map(t):t(s)}return n}const ti=()=>{},jt=Array.isArray,ME=/\/$/,LE=t=>t.replace(ME,"");function yc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=BE(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function FE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Cd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function UE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&gs(e.matched[r],n.matched[s])&&Mg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function gs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Mg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!$E(t[n],e[n]))return!1;return!0}function $E(t,e){return jt(t)?Ad(t,e):jt(e)?Ad(e,t):t===e}function Ad(t,e){return jt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function BE(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var mi;(function(t){t.pop="pop",t.push="push"})(mi||(mi={}));var ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ni||(ni={}));function jE(t){if(!t)if(Yr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),LE(t)}const qE=/^[^#]+#/;function HE(t,e){return t.replace(qE,"#")+e}function zE(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const ba=()=>({left:window.pageXOffset,top:window.pageYOffset});function WE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=zE(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Rd(t,e){return(history.state?history.state.position-e:-1)+t}const cl=new Map;function KE(t,e){cl.set(t,e)}function GE(t){const e=cl.get(t);return cl.delete(t),e}let QE=()=>location.protocol+"//"+location.host;function Lg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Cd(c,"")}return Cd(n,t)+r+s}function YE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Lg(t,location),y=n.value,T=e.value;let E=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}E=T?d.position-T.position:0}else r(p);s.forEach(S=>{S(n.value,y,{delta:E,type:mi.pop,direction:E?E>0?ni.forward:ni.back:ni.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(_e({},d.state,{scroll:ba()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function bd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?ba():null}}function XE(t){const{history:e,location:n}=window,r={value:Lg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:QE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=_e({},e.state,bd(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=_e({},s.value,e.state,{forward:c,scroll:ba()});i(u.current,u,!0);const h=_e({},bd(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function JE(t){t=jE(t);const e=XE(t),n=YE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=_e({location:"",base:t,go:r,createHref:HE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ZE(t){return typeof t=="string"||t&&typeof t=="object"}function Fg(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Ug=Symbol("");var Sd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Sd||(Sd={}));function ms(t,e){return _e(new Error,{type:t,[Ug]:!0},e)}function un(t,e){return t instanceof Error&&Ug in t&&(e==null||!!(t.type&e))}const Pd="[^/]+?",ew={sensitive:!1,strict:!1,start:!0,end:!0},tw=/[.+*?^${}()[\]/\\]/g;function nw(t,e){const n=_e({},ew,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(tw,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:T,optional:E,regexp:S}=d;i.push({name:y,repeatable:T,optional:E});const D=S||Pd;if(D!==Pd){p+=10;try{new RegExp(`(${D})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${y}" (${D}): `+B.message)}}let N=T?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(N=E&&l.length<2?`(?:/${N})`:"/"+N),E&&(N+="?"),s+=N,p+=20,E&&(p+=-8),T&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:T,optional:E}=p,S=y in l?l[y]:"";if(jt(S)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const D=jt(S)?S.join("/"):S;if(!D)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function rw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function sw(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=rw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(kd(r))return 1;if(kd(s))return-1}return s.length-r.length}function kd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const iw={type:0,value:""},ow=/[a-zA-Z0-9_]/;function aw(t){if(!t)return[[]];if(t==="/")return[[iw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:ow.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function cw(t,e,n){const r=nw(aw(t.path),n),s=_e(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function lw(t,e){const n=[],r=new Map;e=Dd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,y=uw(u);y.aliasOf=d&&d.record;const T=Dd(e,u),E=[y];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of N)E.push(_e({},y,{components:d?d.record.components:y.components,path:B,aliasOf:d?d.record:y}))}let S,D;for(const N of E){const{path:B}=N;if(h&&B[0]!=="/"){const L=h.record.path,ie=L[L.length-1]==="/"?"":"/";N.path=h.record.path+(B&&ie+B)}if(S=cw(N,h,T),d?d.alias.push(S):(D=D||S,D!==S&&D.alias.push(S),p&&u.name&&!xd(S)&&o(u.name)),y.children){const L=y.children;for(let ie=0;ie<L.length;ie++)i(L[ie],S,d&&d.children[ie])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return D?()=>{o(D)}:ti}function o(u){if(Fg(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&sw(u,n[h])>=0&&(u.record.path!==n[h].record.path||!$g(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!xd(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ms(1,{location:u});T=d.record.name,p=_e(Od(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&Od(u.params,d.keys.map(D=>D.name))),y=d.stringify(p)}else if("path"in u)y=u.path,d=n.find(D=>D.re.test(y)),d&&(p=d.parse(y),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw ms(1,{location:u,currentLocation:h});T=d.record.name,p=_e({},h.params,u.params),y=d.stringify(p)}const E=[];let S=d;for(;S;)E.unshift(S.record),S=S.parent;return{name:T,path:y,params:p,matched:E,meta:dw(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Od(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function uw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function xd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function dw(t){return t.reduce((e,n)=>_e(e,n.meta),{})}function Dd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function $g(t,e){return e.children.some(n=>n===t||$g(t,n))}const Bg=/#/g,fw=/&/g,pw=/\//g,gw=/=/g,mw=/\?/g,jg=/\+/g,_w=/%5B/g,yw=/%5D/g,qg=/%5E/g,vw=/%60/g,Hg=/%7B/g,Ew=/%7C/g,zg=/%7D/g,ww=/%20/g;function pu(t){return encodeURI(""+t).replace(Ew,"|").replace(_w,"[").replace(yw,"]")}function Iw(t){return pu(t).replace(Hg,"{").replace(zg,"}").replace(qg,"^")}function ll(t){return pu(t).replace(jg,"%2B").replace(ww,"+").replace(Bg,"%23").replace(fw,"%26").replace(vw,"`").replace(Hg,"{").replace(zg,"}").replace(qg,"^")}function Tw(t){return ll(t).replace(gw,"%3D")}function Cw(t){return pu(t).replace(Bg,"%23").replace(mw,"%3F")}function Aw(t){return t==null?"":Cw(t).replace(pw,"%2F")}function zo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Rw(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(jg," "),o=i.indexOf("="),a=zo(o<0?i:i.slice(0,o)),c=o<0?null:zo(i.slice(o+1));if(a in e){let l=e[a];jt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function Nd(t){let e="";for(let n in t){const r=t[n];if(n=Tw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(jt(r)?r.map(i=>i&&ll(i)):[r&&ll(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function bw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=jt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Sw=Symbol(""),Vd=Symbol(""),Sa=Symbol(""),gu=Symbol(""),ul=Symbol("");function Fs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Dn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ms(4,{from:n,to:e})):h instanceof Error?a(h):ZE(h)?a(ms(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function vc(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Pw(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Dn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=VE(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Dn(d,n,r,i,o)()}))}}return s}function Pw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Md(t){const e=xt(Sa),n=xt(gu),r=St(()=>e.resolve(le(t.to))),s=St(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(gs.bind(null,u));if(d>-1)return d;const p=Ld(c[l-2]);return l>1&&Ld(u)===p&&h[h.length-1].path!==p?h.findIndex(gs.bind(null,c[l-2])):d}),i=St(()=>s.value>-1&&Dw(n.params,r.value.params)),o=St(()=>s.value>-1&&s.value===n.matched.length-1&&Mg(n.params,r.value.params));function a(c={}){return xw(c)?e[le(t.replace)?"replace":"push"](le(t.to)).catch(ti):Promise.resolve()}return{route:r,href:St(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const kw=dg({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Md,setup(t,{slots:e}){const n=Fi(Md(t)),{options:r}=xt(Sa),s=St(()=>({[Fd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Fd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Pg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ow=kw;function xw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Dw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!jt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Ld(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Fd=(t,e,n)=>t??e??n,Nw=dg({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=xt(ul),s=St(()=>t.route||r.value),i=xt(Vd,0),o=St(()=>{let l=le(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=St(()=>s.value.matched[o.value]);Po(Vd,St(()=>o.value+1)),Po(Sw,a),Po(ul,s);const c=je();return Xs(()=>[c.value,a.value,t.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!gs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Ud(n.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,E=Pg(d,_e({},y,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Ud(n.default,{Component:E,route:l})||E}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wg=Nw;function Vw(t){const e=lw(t.routes,t),n=t.parseQuery||Rw,r=t.stringifyQuery||Nd,s=t.history,i=Fs(),o=Fs(),a=Fs(),c=V0(Sn);let l=Sn;Yr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_c.bind(null,v=>""+v),h=_c.bind(null,Aw),d=_c.bind(null,zo);function p(v,F){let O,j;return Fg(v)?(O=e.getRecordMatcher(v),j=F):j=v,e.addRoute(j,O)}function y(v){const F=e.getRecordMatcher(v);F&&e.removeRoute(F)}function T(){return e.getRoutes().map(v=>v.record)}function E(v){return!!e.getRecordMatcher(v)}function S(v,F){if(F=_e({},F||c.value),typeof v=="string"){const m=yc(n,v,F.path),_=e.resolve({path:m.path},F),I=s.createHref(m.fullPath);return _e(m,_,{params:d(_.params),hash:zo(m.hash),redirectedFrom:void 0,href:I})}let O;if("path"in v)O=_e({},v,{path:yc(n,v.path,F.path).path});else{const m=_e({},v.params);for(const _ in m)m[_]==null&&delete m[_];O=_e({},v,{params:h(m)}),F.params=h(F.params)}const j=e.resolve(O,F),pe=v.hash||"";j.params=u(d(j.params));const f=FE(r,_e({},v,{hash:Iw(pe),path:j.path})),g=s.createHref(f);return _e({fullPath:f,hash:pe,query:r===Nd?bw(v.query):v.query||{}},j,{redirectedFrom:void 0,href:g})}function D(v){return typeof v=="string"?yc(n,v,c.value.path):_e({},v)}function N(v,F){if(l!==v)return ms(8,{from:F,to:v})}function B(v){return me(v)}function L(v){return B(_e(D(v),{replace:!0}))}function ie(v){const F=v.matched[v.matched.length-1];if(F&&F.redirect){const{redirect:O}=F;let j=typeof O=="function"?O(v):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=D(j):{path:j},j.params={}),_e({query:v.query,hash:v.hash,params:"path"in j?{}:v.params},j)}}function me(v,F){const O=l=S(v),j=c.value,pe=v.state,f=v.force,g=v.replace===!0,m=ie(O);if(m)return me(_e(D(m),{state:typeof m=="object"?_e({},pe,m.state):pe,force:f,replace:g}),F||O);const _=O;_.redirectedFrom=F;let I;return!f&&UE(r,j,O)&&(I=ms(16,{to:_,from:j}),Wt(j,j,!0,!1)),(I?Promise.resolve(I):we(_,j)).catch(C=>un(C)?un(C,2)?C:Rn(C):fe(C,_,j)).then(C=>{if(C){if(un(C,2))return me(_e({replace:g},D(C.to),{state:typeof C.to=="object"?_e({},pe,C.to.state):pe,force:f}),F||_)}else C=yt(_,j,!0,g,pe);return Je(_,j,C),C})}function ee(v,F){const O=N(v,F);return O?Promise.reject(O):Promise.resolve()}function te(v){const F=Wr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(v):v()}function we(v,F){let O;const[j,pe,f]=Mw(v,F);O=vc(j.reverse(),"beforeRouteLeave",v,F);for(const m of j)m.leaveGuards.forEach(_=>{O.push(Dn(_,v,F))});const g=ee.bind(null,v,F);return O.push(g),Ze(O).then(()=>{O=[];for(const m of i.list())O.push(Dn(m,v,F));return O.push(g),Ze(O)}).then(()=>{O=vc(pe,"beforeRouteUpdate",v,F);for(const m of pe)m.updateGuards.forEach(_=>{O.push(Dn(_,v,F))});return O.push(g),Ze(O)}).then(()=>{O=[];for(const m of f)if(m.beforeEnter)if(jt(m.beforeEnter))for(const _ of m.beforeEnter)O.push(Dn(_,v,F));else O.push(Dn(m.beforeEnter,v,F));return O.push(g),Ze(O)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),O=vc(f,"beforeRouteEnter",v,F),O.push(g),Ze(O))).then(()=>{O=[];for(const m of o.list())O.push(Dn(m,v,F));return O.push(g),Ze(O)}).catch(m=>un(m,8)?m:Promise.reject(m))}function Je(v,F,O){a.list().forEach(j=>te(()=>j(v,F,O)))}function yt(v,F,O,j,pe){const f=N(v,F);if(f)return f;const g=F===Sn,m=Yr?history.state:{};O&&(j||g?s.replace(v.fullPath,_e({scroll:g&&m&&m.scroll},pe)):s.push(v.fullPath,pe)),c.value=v,Wt(v,F,O,g),Rn()}let Rt;function or(){Rt||(Rt=s.listen((v,F,O)=>{if(!oo.listening)return;const j=S(v),pe=ie(j);if(pe){me(_e(pe,{replace:!0}),j).catch(ti);return}l=j;const f=c.value;Yr&&KE(Rd(f.fullPath,O.delta),ba()),we(j,f).catch(g=>un(g,12)?g:un(g,2)?(me(g.to,j).then(m=>{un(m,20)&&!O.delta&&O.type===mi.pop&&s.go(-1,!1)}).catch(ti),Promise.reject()):(O.delta&&s.go(-O.delta,!1),fe(g,j,f))).then(g=>{g=g||yt(j,f,!1),g&&(O.delta&&!un(g,8)?s.go(-O.delta,!1):O.type===mi.pop&&un(g,20)&&s.go(-1,!1)),Je(j,f,g)}).catch(ti)}))}let bt=Fs(),ue=Fs(),ve;function fe(v,F,O){Rn(v);const j=ue.list();return j.length?j.forEach(pe=>pe(v,F,O)):console.error(v),Promise.reject(v)}function ln(){return ve&&c.value!==Sn?Promise.resolve():new Promise((v,F)=>{bt.add([v,F])})}function Rn(v){return ve||(ve=!v,or(),bt.list().forEach(([F,O])=>v?O(v):F()),bt.reset()),v}function Wt(v,F,O,j){const{scrollBehavior:pe}=t;if(!Yr||!pe)return Promise.resolve();const f=!O&&GE(Rd(v.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return au().then(()=>pe(v,F,f)).then(g=>g&&WE(g)).catch(g=>fe(g,v,F))}const dt=v=>s.go(v);let zr;const Wr=new Set,oo={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:E,getRoutes:T,resolve:S,options:t,push:B,replace:L,go:dt,back:()=>dt(-1),forward:()=>dt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:ln,install(v){const F=this;v.component("RouterLink",Ow),v.component("RouterView",Wg),v.config.globalProperties.$router=F,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>le(c)}),Yr&&!zr&&c.value===Sn&&(zr=!0,B(s.location).catch(pe=>{}));const O={};for(const pe in Sn)Object.defineProperty(O,pe,{get:()=>c.value[pe],enumerable:!0});v.provide(Sa,F),v.provide(gu,Qp(O)),v.provide(ul,c);const j=v.unmount;Wr.add(v),v.unmount=function(){Wr.delete(v),Wr.size<1&&(l=Sn,Rt&&Rt(),Rt=null,c.value=Sn,zr=!1,ve=!1),j()}}};function Ze(v){return v.reduce((F,O)=>F.then(()=>te(O)),Promise.resolve())}return oo}function Mw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>gs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>gs(l,c))||s.push(c))}return[n,r,s]}function Kg(){return xt(Sa)}function Gg(){return xt(gu)}const er=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Lw={},Fw={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Uw=b("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),$w=b("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),Bw=b("g",{id:"SVGRepo_icurrentColoronCarrier"},[b("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M12.2796 3.71579C12.097 3.66261 11.903 3.66261 11.7203 3.71579C11.6678 3.7311 11.5754 3.7694 11.3789 3.91817C11.1723 4.07463 10.9193 4.29855 10.5251 4.64896L5.28544 9.3064C4.64309 9.87739 4.46099 10.0496 4.33439 10.24C4.21261 10.4232 4.12189 10.6252 4.06588 10.8379C4.00765 11.0591 3.99995 11.3095 3.99995 12.169V17.17C3.99995 18.041 4.00076 18.6331 4.03874 19.0905C4.07573 19.536 4.14275 19.7634 4.22513 19.9219C4.41488 20.2872 4.71272 20.5851 5.07801 20.7748C5.23658 20.8572 5.46397 20.9242 5.90941 20.9612C6.36681 20.9992 6.95893 21 7.82995 21H7.99995V18C7.99995 15.7909 9.79081 14 12 14C14.2091 14 16 15.7909 16 18V21H16.17C17.041 21 17.6331 20.9992 18.0905 20.9612C18.5359 20.9242 18.7633 20.8572 18.9219 20.7748C19.2872 20.5851 19.585 20.2872 19.7748 19.9219C19.8572 19.7634 19.9242 19.536 19.9612 19.0905C19.9991 18.6331 20 18.041 20 17.17V12.169C20 11.3095 19.9923 11.0591 19.934 10.8379C19.878 10.6252 19.7873 10.4232 19.6655 10.24C19.5389 10.0496 19.3568 9.87739 18.7145 9.3064L13.4748 4.64896C13.0806 4.29855 12.8276 4.07463 12.621 3.91817C12.4245 3.7694 12.3321 3.7311 12.2796 3.71579ZM11.1611 1.79556C11.709 1.63602 12.2909 1.63602 12.8388 1.79556C13.2189 1.90627 13.5341 2.10095 13.8282 2.32363C14.1052 2.53335 14.4172 2.81064 14.7764 3.12995L20.0432 7.81159C20.0716 7.83679 20.0995 7.86165 20.1272 7.88619C20.6489 8.34941 21.0429 8.69935 21.3311 9.13277C21.5746 9.49916 21.7561 9.90321 21.8681 10.3287C22.0006 10.832 22.0004 11.359 22 12.0566C22 12.0936 22 12.131 22 12.169V17.212C22 18.0305 22 18.7061 21.9543 19.2561C21.9069 19.8274 21.805 20.3523 21.5496 20.8439C21.1701 21.5745 20.5744 22.1701 19.8439 22.5496C19.3522 22.805 18.8274 22.9069 18.256 22.9543C17.706 23 17.0305 23 16.2119 23H15.805C15.7972 23 15.7894 23 15.7814 23C15.6603 23 15.5157 23.0001 15.3883 22.9895C15.2406 22.9773 15.0292 22.9458 14.8085 22.8311C14.5345 22.6888 14.3111 22.4654 14.1688 22.1915C14.0542 21.9707 14.0227 21.7593 14.0104 21.6116C13.9998 21.4843 13.9999 21.3396 13.9999 21.2185L14 18C14 16.8954 13.1045 16 12 16C10.8954 16 9.99995 16.8954 9.99995 18L9.99996 21.2185C10 21.3396 10.0001 21.4843 9.98949 21.6116C9.97722 21.7593 9.94572 21.9707 9.83107 22.1915C9.68876 22.4654 9.46538 22.6888 9.19142 22.8311C8.9707 22.9458 8.75929 22.9773 8.6116 22.9895C8.48423 23.0001 8.33959 23 8.21847 23C8.21053 23 8.20268 23 8.19495 23H7.78798C6.96944 23 6.29389 23 5.74388 22.9543C5.17253 22.9069 4.64769 22.805 4.15605 22.5496C3.42548 22.1701 2.8298 21.5745 2.4503 20.8439C2.19492 20.3523 2.09305 19.8274 2.0456 19.2561C1.99993 18.7061 1.99994 18.0305 1.99995 17.212L1.99995 12.169C1.99995 12.131 1.99993 12.0936 1.99992 12.0566C1.99955 11.359 1.99928 10.832 2.1318 10.3287C2.24383 9.90321 2.42528 9.49916 2.66884 9.13277C2.95696 8.69935 3.35105 8.34941 3.87272 7.8862C3.90036 7.86165 3.92835 7.83679 3.95671 7.81159L9.22354 3.12996C9.58274 2.81064 9.89467 2.53335 10.1717 2.32363C10.4658 2.10095 10.781 1.90627 11.1611 1.79556Z",fill:"currentColor"})],-1),jw=[Uw,$w,Bw];function qw(t,e){return de(),Se("svg",Fw,jw)}const Hw=er(Lw,[["render",qw]]),zw={},Ww={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Kw=b("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Gw=b("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),Qw=b("g",{id:"SVGRepo_icurrentColoronCarrier"},[b("path",{d:"M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),b("path",{d:"M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),b("path",{d:"M6 9H12",stroke:"currentColor","stroke-width":"1.5","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),b("path",{d:"M6.75 13H11.25",stroke:"currentColor","stroke-width":"1.5","stroke-linecurrentcap":"round","stroke-linejoin":"round"})],-1),Yw=[Kw,Gw,Qw];function Xw(t,e){return de(),Se("svg",Ww,Yw)}const Jw=er(zw,[["render",Xw]]),Zw={},eI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},tI=b("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),nI=b("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),rI=b("g",{id:"SVGRepo_icurrentColoronCarrier"},[b("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M1 3C1 2.44772 1.44772 2 2 2C3.62481 2 5.06733 3.03971 5.58114 4.58114L5.72076 5L18.03 5C18.6859 4.99998 19.2437 4.99996 19.6951 5.04029C20.165 5.08226 20.6347 5.17512 21.064 5.43584C21.6667 5.80183 22.1211 6.36838 22.3477 7.03605C22.5091 7.51168 22.4978 7.99036 22.4369 8.45816C22.3783 8.90755 22.2573 9.45209 22.115 10.0924L21.8088 11.4704C21.664 12.1218 21.5435 12.6641 21.4106 13.1043C21.2716 13.5649 21.1006 13.9803 20.8231 14.36C20.4058 14.931 19.8446 15.3812 19.1967 15.6646C18.7658 15.8532 18.3232 15.93 17.8434 15.9658C17.3849 16 16.8295 16 16.1621 16H10.8379C10.1705 16 9.61512 16 9.15656 15.9658C8.67678 15.93 8.23421 15.8532 7.80328 15.6646C7.15536 15.3812 6.59418 14.931 6.17692 14.36C5.89941 13.9803 5.72844 13.5649 5.58939 13.1043C5.45649 12.6641 5.33602 12.1219 5.19125 11.4704L4.035 6.26729L3.68377 5.21359C3.44219 4.48885 2.76395 4 2 4C1.44772 4 1 3.55228 1 3ZM6.24662 7L7.13569 11.0008C7.29042 11.6971 7.39528 12.166 7.50404 12.5263C7.60908 12.8742 7.69899 13.0531 7.79172 13.18C8.00035 13.4655 8.28094 13.6906 8.6049 13.8323C8.74888 13.8953 8.94301 13.9443 9.30546 13.9713C9.68076 13.9994 10.1612 14 10.8745 14H16.1255C16.8388 14 17.3192 13.9994 17.6945 13.9713C18.057 13.9443 18.2511 13.8953 18.3951 13.8323C18.7191 13.6906 18.9997 13.4655 19.2083 13.18C19.301 13.0531 19.3909 12.8742 19.496 12.5263C19.6047 12.166 19.7096 11.6971 19.8643 11.0008L20.153 9.70159C20.3075 9.00651 20.408 8.54985 20.4536 8.19974C20.4982 7.858 20.4722 7.73312 20.4537 7.67868C20.3782 7.45613 20.2267 7.26728 20.0259 7.14528C19.9767 7.11544 19.8605 7.06302 19.5172 7.03235C19.1655 7.00094 18.6979 7 17.9859 7H6.24662Z",fill:"currentColor"}),b("path",{d:"M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z",fill:"currentColor"}),b("path",{d:"M18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21Z",fill:"currentColor"})],-1),sI=[tI,nI,rI];function iI(t,e){return de(),Se("svg",eI,sI)}const oI=er(Zw,[["render",iI]]),aI={},cI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},lI=b("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),uI=b("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),hI=b("g",{id:"SVGRepo_icurrentColoronCarrier"},[b("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M5.3783 2C5.3905 2 5.40273 2 5.415 2L7.62171 2C8.01734 1.99998 8.37336 1.99996 8.66942 2.02454C8.98657 2.05088 9.32336 2.11052 9.65244 2.28147C10.109 2.51866 10.4813 2.89096 10.7185 3.34757C10.8895 3.67665 10.9491 4.01343 10.9755 4.33059C11 4.62664 11 4.98265 11 5.37828V7.62172C11 8.01735 11 8.37337 10.9755 8.66942C10.9491 8.98657 10.8895 9.32336 10.7185 9.65244C10.4813 10.109 10.109 10.4813 9.65244 10.7185C9.32336 10.8895 8.98657 10.9491 8.66942 10.9755C8.37337 11 8.01735 11 7.62172 11H5.37828C4.98265 11 4.62664 11 4.33059 10.9755C4.01343 10.9491 3.67665 10.8895 3.34757 10.7185C2.89096 10.4813 2.51866 10.109 2.28147 9.65244C2.11052 9.32336 2.05088 8.98657 2.02454 8.66942C1.99996 8.37336 1.99998 8.01734 2 7.62171L2 5.415C2 5.40273 2 5.3905 2 5.3783C1.99998 4.98266 1.99996 4.62664 2.02454 4.33059C2.05088 4.01343 2.11052 3.67665 2.28147 3.34757C2.51866 2.89096 2.89096 2.51866 3.34757 2.28147C3.67665 2.11052 4.01343 2.05088 4.33059 2.02454C4.62664 1.99996 4.98266 1.99998 5.3783 2ZM4.27752 4.05297C4.27226 4.05488 4.27001 4.05604 4.26952 4.0563C4.17819 4.10373 4.10373 4.17819 4.0563 4.26952C4.05604 4.27001 4.05488 4.27226 4.05297 4.27752C4.05098 4.28299 4.04767 4.29312 4.04372 4.30961C4.03541 4.34427 4.02554 4.40145 4.01768 4.49611C4.00081 4.69932 4 4.9711 4 5.415V7.585C4 8.02891 4.00081 8.30068 4.01768 8.5039C4.02554 8.59855 4.03541 8.65574 4.04372 8.6904C4.04767 8.70688 4.05098 8.71701 4.05297 8.72249C4.05488 8.72775 4.05604 8.72999 4.0563 8.73049C4.10373 8.82181 4.17819 8.89627 4.26952 8.94371C4.27001 8.94397 4.27226 8.94513 4.27752 8.94704C4.28299 8.94903 4.29312 8.95234 4.30961 8.95629C4.34427 8.96459 4.40145 8.97446 4.49611 8.98232C4.69932 8.9992 4.9711 9 5.415 9H7.585C8.02891 9 8.30068 8.9992 8.5039 8.98232C8.59855 8.97446 8.65574 8.96459 8.6904 8.95629C8.70688 8.95234 8.71701 8.94903 8.72249 8.94704C8.72775 8.94513 8.72999 8.94397 8.73049 8.94371C8.82181 8.89627 8.89627 8.82181 8.94371 8.73049C8.94397 8.72999 8.94513 8.72775 8.94704 8.72249C8.94903 8.71701 8.95234 8.70688 8.95629 8.6904C8.96459 8.65574 8.97446 8.59855 8.98232 8.5039C8.9992 8.30068 9 8.02891 9 7.585V5.415C9 4.9711 8.9992 4.69932 8.98232 4.49611C8.97446 4.40145 8.96459 4.34427 8.95629 4.30961C8.95234 4.29312 8.94903 4.28299 8.94704 4.27752C8.94513 4.27226 8.94397 4.27001 8.94371 4.26952C8.89627 4.17819 8.82181 4.10373 8.73049 4.0563C8.72999 4.05604 8.72775 4.05488 8.72249 4.05297C8.71701 4.05098 8.70688 4.04767 8.6904 4.04372C8.65574 4.03541 8.59855 4.02554 8.5039 4.01768C8.30068 4.00081 8.02891 4 7.585 4H5.415C4.9711 4 4.69932 4.00081 4.49611 4.01768C4.40145 4.02554 4.34427 4.03541 4.30961 4.04372C4.29312 4.04767 4.28299 4.05098 4.27752 4.05297ZM16.3783 2H18.6217C19.0173 1.99998 19.3734 1.99996 19.6694 2.02454C19.9866 2.05088 20.3234 2.11052 20.6524 2.28147C21.109 2.51866 21.4813 2.89096 21.7185 3.34757C21.8895 3.67665 21.9491 4.01343 21.9755 4.33059C22 4.62665 22 4.98267 22 5.37832V7.62168C22 8.01733 22 8.37336 21.9755 8.66942C21.9491 8.98657 21.8895 9.32336 21.7185 9.65244C21.4813 10.109 21.109 10.4813 20.6524 10.7185C20.3234 10.8895 19.9866 10.9491 19.6694 10.9755C19.3734 11 19.0174 11 18.6217 11H16.3783C15.9827 11 15.6266 11 15.3306 10.9755C15.0134 10.9491 14.6766 10.8895 14.3476 10.7185C13.891 10.4813 13.5187 10.109 13.2815 9.65244C13.1105 9.32336 13.0509 8.98657 13.0245 8.66942C13 8.37337 13 8.01735 13 7.62172V5.37828C13 4.98265 13 4.62664 13.0245 4.33059C13.0509 4.01344 13.1105 3.67665 13.2815 3.34757C13.5187 2.89096 13.891 2.51866 14.3476 2.28147C14.6766 2.11052 15.0134 2.05088 15.3306 2.02454C15.6266 1.99996 15.9827 1.99998 16.3783 2ZM15.2775 4.05297C15.2723 4.05488 15.27 4.05604 15.2695 4.0563C15.1782 4.10373 15.1037 4.17819 15.0563 4.26952C15.056 4.27001 15.0549 4.27226 15.053 4.27752C15.051 4.28299 15.0477 4.29312 15.0437 4.30961C15.0354 4.34427 15.0255 4.40145 15.0177 4.49611C15.0008 4.69932 15 4.9711 15 5.415V7.585C15 8.02891 15.0008 8.30068 15.0177 8.5039C15.0255 8.59855 15.0354 8.65574 15.0437 8.6904C15.0477 8.70688 15.051 8.71701 15.053 8.72249C15.0549 8.72775 15.056 8.72999 15.0563 8.73049C15.1037 8.82181 15.1782 8.89627 15.2695 8.94371C15.27 8.94397 15.2723 8.94513 15.2775 8.94704C15.283 8.94903 15.2931 8.95234 15.3096 8.95629C15.3443 8.96459 15.4015 8.97446 15.4961 8.98232C15.6993 8.9992 15.9711 9 16.415 9H18.585C19.0289 9 19.3007 8.9992 19.5039 8.98232C19.5986 8.97446 19.6557 8.96459 19.6904 8.95629C19.7069 8.95234 19.717 8.94903 19.7225 8.94704C19.7277 8.94513 19.73 8.94397 19.7305 8.94371C19.8218 8.89627 19.8963 8.82181 19.9437 8.73049C19.944 8.72999 19.9451 8.72775 19.947 8.72249C19.949 8.71701 19.9523 8.70688 19.9563 8.6904C19.9646 8.65573 19.9745 8.59855 19.9823 8.5039C19.9992 8.30068 20 8.02891 20 7.585V5.415C20 4.9711 19.9992 4.69932 19.9823 4.49611C19.9745 4.40145 19.9646 4.34427 19.9563 4.30961C19.9523 4.29312 19.949 4.28299 19.947 4.27752C19.9451 4.27226 19.944 4.27001 19.9437 4.26952C19.8963 4.17819 19.8218 4.10373 19.7305 4.0563C19.73 4.05604 19.7277 4.05488 19.7225 4.05297C19.717 4.05098 19.7069 4.04767 19.6904 4.04372C19.6557 4.03541 19.5986 4.02554 19.5039 4.01768C19.3007 4.00081 19.0289 4 18.585 4H16.415C15.9711 4 15.6993 4.00081 15.4961 4.01768C15.4015 4.02554 15.3443 4.03541 15.3096 4.04372C15.2931 4.04767 15.283 4.05098 15.2775 4.05297ZM5.37828 13H7.62172C8.01735 13 8.37337 13 8.66942 13.0245C8.98657 13.0509 9.32336 13.1105 9.65244 13.2815C10.109 13.5187 10.4813 13.891 10.7185 14.3476C10.8895 14.6766 10.9491 15.0134 10.9755 15.3306C11 15.6266 11 15.9827 11 16.3783V18.6217C11 19.0174 11 19.3734 10.9755 19.6694C10.9491 19.9866 10.8895 20.3234 10.7185 20.6524C10.4813 21.109 10.109 21.4813 9.65244 21.7185C9.32336 21.8895 8.98657 21.9491 8.66942 21.9755C8.37336 22 8.01733 22 7.62168 22H5.37832C4.98267 22 4.62665 22 4.33059 21.9755C4.01343 21.9491 3.67665 21.8895 3.34757 21.7185C2.89096 21.4813 2.51866 21.109 2.28147 20.6524C2.11052 20.3234 2.05088 19.9866 2.02454 19.6694C1.99996 19.3734 1.99998 19.0173 2 18.6217V16.3783C1.99998 15.9827 1.99996 15.6266 2.02454 15.3306C2.05088 15.0134 2.11052 14.6766 2.28147 14.3476C2.51866 13.891 2.89096 13.5187 3.34757 13.2815C3.67665 13.1105 4.01344 13.0509 4.33059 13.0245C4.62664 13 4.98265 13 5.37828 13ZM4.27752 15.053C4.27226 15.0549 4.27001 15.056 4.26952 15.0563C4.17819 15.1037 4.10373 15.1782 4.0563 15.2695C4.05604 15.27 4.05488 15.2723 4.05297 15.2775C4.05098 15.283 4.04767 15.2931 4.04372 15.3096C4.03541 15.3443 4.02554 15.4015 4.01768 15.4961C4.00081 15.6993 4 15.9711 4 16.415V18.585C4 19.0289 4.00081 19.3007 4.01768 19.5039C4.02554 19.5986 4.03541 19.6557 4.04372 19.6904C4.04767 19.7069 4.05098 19.717 4.05297 19.7225C4.05488 19.7277 4.05604 19.73 4.0563 19.7305C4.10373 19.8218 4.17819 19.8963 4.26952 19.9437C4.27001 19.944 4.27226 19.9451 4.27752 19.947C4.28299 19.949 4.29312 19.9523 4.30961 19.9563C4.34427 19.9646 4.40145 19.9745 4.49611 19.9823C4.69932 19.9992 4.9711 20 5.415 20H7.585C8.02891 20 8.30068 19.9992 8.5039 19.9823C8.59855 19.9745 8.65573 19.9646 8.6904 19.9563C8.70688 19.9523 8.71701 19.949 8.72249 19.947C8.72775 19.9451 8.72999 19.944 8.73049 19.9437C8.82181 19.8963 8.89627 19.8218 8.94371 19.7305C8.94397 19.73 8.94513 19.7277 8.94704 19.7225C8.94903 19.717 8.95234 19.7069 8.95629 19.6904C8.96459 19.6557 8.97446 19.5986 8.98232 19.5039C8.9992 19.3007 9 19.0289 9 18.585V16.415C9 15.9711 8.9992 15.6993 8.98232 15.4961C8.97446 15.4015 8.96459 15.3443 8.95629 15.3096C8.95234 15.2931 8.94903 15.283 8.94704 15.2775C8.94513 15.2723 8.94397 15.27 8.94371 15.2695C8.89627 15.1782 8.82181 15.1037 8.73049 15.0563C8.73026 15.0562 8.72968 15.0559 8.72861 15.0554C8.72733 15.0548 8.72536 15.054 8.72249 15.053C8.71701 15.051 8.70688 15.0477 8.6904 15.0437C8.65574 15.0354 8.59855 15.0255 8.5039 15.0177C8.30068 15.0008 8.02891 15 7.585 15H5.415C4.9711 15 4.69932 15.0008 4.49611 15.0177C4.40145 15.0255 4.34427 15.0354 4.30961 15.0437C4.29312 15.0477 4.28299 15.051 4.27752 15.053ZM16.3783 13H18.6217C19.0174 13 19.3734 13 19.6694 13.0245C19.9866 13.0509 20.3234 13.1105 20.6524 13.2815C21.109 13.5187 21.4813 13.891 21.7185 14.3476C21.8895 14.6766 21.9491 15.0134 21.9755 15.3306C22 15.6266 22 15.9827 22 16.3783V18.6217C22 19.0173 22 19.3734 21.9755 19.6694C21.9491 19.9866 21.8895 20.3234 21.7185 20.6524C21.4813 21.109 21.109 21.4813 20.6524 21.7185C20.3234 21.8895 19.9866 21.9491 19.6694 21.9755C19.3734 22 19.0173 22 18.6217 22H16.3783C15.9827 22 15.6266 22 15.3306 21.9755C15.0134 21.9491 14.6766 21.8895 14.3476 21.7185C13.891 21.4813 13.5187 21.109 13.2815 20.6524C13.1105 20.3234 13.0509 19.9866 13.0245 19.6694C13 19.3734 13 19.0174 13 18.6217V16.3783C13 15.9827 13 15.6266 13.0245 15.3306C13.0509 15.0134 13.1105 14.6766 13.2815 14.3476C13.5187 13.891 13.891 13.5187 14.3476 13.2815C14.6766 13.1105 15.0134 13.0509 15.3306 13.0245C15.6266 13 15.9827 13 16.3783 13ZM15.2775 15.053C15.2723 15.0549 15.27 15.056 15.2695 15.0563C15.1782 15.1037 15.1037 15.1782 15.0563 15.2695C15.056 15.27 15.0549 15.2723 15.053 15.2775C15.051 15.283 15.0477 15.2931 15.0437 15.3096C15.0354 15.3443 15.0255 15.4015 15.0177 15.4961C15.0008 15.6993 15 15.9711 15 16.415V18.585C15 19.0289 15.0008 19.3007 15.0177 19.5039C15.0255 19.5986 15.0354 19.6557 15.0437 19.6904C15.0477 19.7069 15.051 19.717 15.053 19.7225C15.0549 19.7277 15.056 19.73 15.0563 19.7305C15.1037 19.8218 15.1782 19.8963 15.2695 19.9437C15.27 19.944 15.2723 19.9451 15.2775 19.947C15.283 19.949 15.2931 19.9523 15.3096 19.9563C15.3443 19.9646 15.4015 19.9745 15.4961 19.9823C15.6993 19.9992 15.9711 20 16.415 20H18.585C19.0289 20 19.3007 19.9992 19.5039 19.9823C19.5986 19.9745 19.6557 19.9646 19.6904 19.9563C19.7069 19.9523 19.717 19.949 19.7225 19.947C19.7277 19.9451 19.73 19.944 19.7305 19.9437C19.8218 19.8963 19.8963 19.8218 19.9437 19.7305C19.944 19.73 19.9451 19.7277 19.947 19.7225C19.949 19.717 19.9523 19.7069 19.9563 19.6904C19.9646 19.6557 19.9745 19.5986 19.9823 19.5039C19.9992 19.3007 20 19.0289 20 18.585V16.415C20 15.9711 19.9992 15.6993 19.9823 15.4961C19.9745 15.4015 19.9646 15.3443 19.9563 15.3096C19.9523 15.2931 19.949 15.283 19.947 15.2775C19.9463 15.2756 19.9458 15.2741 19.9453 15.2729C19.9444 15.2709 19.9439 15.2698 19.9437 15.2695C19.8963 15.1782 19.8218 15.1037 19.7305 15.0563C19.73 15.056 19.7277 15.0549 19.7225 15.053C19.717 15.051 19.7069 15.0477 19.6904 15.0437C19.6557 15.0354 19.5986 15.0255 19.5039 15.0177C19.3007 15.0008 19.0289 15 18.585 15H16.415C15.9711 15 15.6993 15.0008 15.4961 15.0177C15.4015 15.0255 15.3443 15.0354 15.3096 15.0437C15.2931 15.0477 15.283 15.051 15.2775 15.053Z",fill:"currentColor"})],-1),dI=[lI,uI,hI];function fI(t,e){return de(),Se("svg",cI,dI)}const pI=er(aI,[["render",fI]]),gI={},mI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_I=b("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),yI=b("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),vI=b("g",{id:"SVGRepo_icurrentColoronCarrier"},[b("path",{d:"M5 16C5 15.4477 5.44772 15 6 15H8C8.55229 15 9 15.4477 9 16C9 16.5523 8.55229 17 8 17H6C5.44772 17 5 16.5523 5 16Z",fill:"currentColor"}),b("path",{d:"M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H12C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15H11Z",fill:"currentColor"}),b("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M6.788 3C5.96948 2.99999 5.29393 2.99998 4.74393 3.04565C4.17258 3.0931 3.64774 3.19496 3.1561 3.45035C2.42553 3.82985 1.82985 4.42553 1.45035 5.1561C1.19496 5.64774 1.0931 6.17258 1.04565 6.74393C0.999977 7.29393 0.999988 7.96946 1 8.78798V15.212C0.999988 16.0305 0.999977 16.7061 1.04565 17.2561C1.0931 17.8274 1.19496 18.3523 1.45035 18.8439C1.82985 19.5745 2.42553 20.1702 3.1561 20.5497C3.64774 20.805 4.17258 20.9069 4.74393 20.9544C5.29394 21 5.96949 21 6.78803 21H17.212C18.0305 21 18.7061 21 19.2561 20.9544C19.8274 20.9069 20.3523 20.805 20.8439 20.5497C21.5745 20.1702 22.1702 19.5745 22.5497 18.8439C22.805 18.3523 22.9069 17.8274 22.9544 17.2561C23 16.7061 23 16.0305 23 15.212V8.78802C23 7.96949 23 7.29394 22.9544 6.74393C22.9069 6.17258 22.805 5.64774 22.5497 5.1561C22.1702 4.42553 21.5745 3.82985 20.8439 3.45035C20.3523 3.19496 19.8274 3.0931 19.2561 3.04565C18.7061 2.99998 18.0305 2.99999 17.212 3H6.788ZM4.07805 5.22517C4.23663 5.1428 4.46402 5.07578 4.90945 5.03879C5.36686 5.00081 5.95898 5 6.83 5H17.17C18.041 5 18.6331 5.00081 19.0906 5.03879C19.536 5.07578 19.7634 5.1428 19.922 5.22517C20.2872 5.41493 20.5851 5.71277 20.7748 6.07805C20.8572 6.23663 20.9242 6.46402 20.9612 6.90945C20.9857 7.20418 20.9947 7.55484 20.9981 8H3.00194C3.00528 7.55484 3.01431 7.20418 3.03879 6.90945C3.07578 6.46402 3.1428 6.23663 3.22517 6.07805C3.41493 5.71277 3.71277 5.41493 4.07805 5.22517ZM3 10V15.17C3 16.041 3.00081 16.6331 3.03879 17.0906C3.07578 17.536 3.1428 17.7634 3.22517 17.922C3.41493 18.2872 3.71277 18.5851 4.07805 18.7748C4.23663 18.8572 4.46402 18.9242 4.90945 18.9612C5.36686 18.9992 5.95898 19 6.83 19H17.17C18.041 19 18.6331 18.9992 19.0906 18.9612C19.536 18.9242 19.7634 18.8572 19.922 18.7748C20.2872 18.5851 20.5851 18.2872 20.7748 17.922C20.8572 17.7634 20.9242 17.536 20.9612 17.0906C20.9992 16.6331 21 16.041 21 15.17V10H3Z",fill:"currentColor"})],-1),EI=[_I,yI,vI];function wI(t,e){return de(),Se("svg",mI,EI)}const II=er(gI,[["render",wI]]);var $d={};/**
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
 */const Qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},TI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Qg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):TI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new CI;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class CI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const AI=function(t){const e=Qg(t);return Yg.encodeByteArray(e,!0)},Wo=function(t){return AI(t).replace(/\./g,"")},Xg=function(t){try{return Yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function RI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const bI=()=>RI().__FIREBASE_DEFAULTS__,SI=()=>{if(typeof process>"u"||typeof $d>"u")return;const t=$d.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},PI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Xg(t[1]);return e&&JSON.parse(e)},mu=()=>{try{return bI()||SI()||PI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Jg=t=>{var e,n;return(n=(e=mu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Zg=t=>{const e=Jg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},em=()=>{var t;return(t=mu())===null||t===void 0?void 0:t.config},tm=t=>{var e;return(e=mu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class kI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function nm(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Wo(JSON.stringify(n)),Wo(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function OI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function rm(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function xI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function DI(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sm(){try{return typeof indexedDB=="object"}catch{return!1}}function im(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function NI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const VI="FirebaseError";class Mt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=VI,Object.setPrototypeOf(this,Mt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ur.prototype.create)}}class Ur{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?MI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Mt(s,a,r)}}function MI(t,e){return t.replace(LI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const LI=/\{\$([^}]+)}/g;function FI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function _i(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Bd(i)&&Bd(o)){if(!_i(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bd(t){return t!==null&&typeof t=="object"}/**
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
 */function Ui(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function UI(t,e){const n=new $I(t,e);return n.subscribe.bind(n)}class $I{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");BI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Ec),s.error===void 0&&(s.error=Ec),s.complete===void 0&&(s.complete=Ec);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function BI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ec(){}/**
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
 */const jI=1e3,qI=2,HI=4*60*60*1e3,zI=.5;function jd(t,e=jI,n=qI){const r=e*Math.pow(n,t),s=Math.round(zI*r*(Math.random()-.5)*2);return Math.min(HI,r+s)}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class Nt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class WI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new kI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GI(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:KI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function KI(t){return t===lr?void 0:t}function GI(t){return t.instantiationMode==="EAGER"}/**
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
 */class QI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new WI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const YI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},XI=se.INFO,JI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},ZI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=JI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Pa{constructor(e){this.name=e,this._logLevel=XI,this._logHandler=ZI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?YI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const e9=(t,e)=>e.some(n=>t instanceof n);let qd,Hd;function t9(){return qd||(qd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function n9(){return Hd||(Hd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const om=new WeakMap,hl=new WeakMap,am=new WeakMap,wc=new WeakMap,_u=new WeakMap;function r9(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(qn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&om.set(n,t)}).catch(()=>{}),_u.set(e,t),e}function s9(t){if(hl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});hl.set(t,e)}let dl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return hl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||am.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return qn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function i9(t){dl=t(dl)}function o9(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ic(this),e,...n);return am.set(r,e.sort?e.sort():[e]),qn(r)}:n9().includes(t)?function(...e){return t.apply(Ic(this),e),qn(om.get(this))}:function(...e){return qn(t.apply(Ic(this),e))}}function a9(t){return typeof t=="function"?o9(t):(t instanceof IDBTransaction&&s9(t),e9(t,t9())?new Proxy(t,dl):t)}function qn(t){if(t instanceof IDBRequest)return r9(t);if(wc.has(t))return wc.get(t);const e=a9(t);return e!==t&&(wc.set(t,e),_u.set(e,t)),e}const Ic=t=>_u.get(t);function c9(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=qn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(qn(o.result),c.oldVersion,c.newVersion,qn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const l9=["get","getKey","getAll","getAllKeys","count"],u9=["put","add","delete","clear"],Tc=new Map;function zd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Tc.get(e))return Tc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=u9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||l9.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Tc.set(e,i),i}i9(t=>({...t,get:(e,n,r)=>zd(e,n)||t.get(e,n,r),has:(e,n)=>!!zd(e,n)||t.has(e,n)}));/**
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
 */class h9{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(d9(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function d9(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fl="@firebase/app",Wd="0.9.25";/**
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
 */const br=new Pa("@firebase/app"),f9="@firebase/app-compat",p9="@firebase/analytics-compat",g9="@firebase/analytics",m9="@firebase/app-check-compat",_9="@firebase/app-check",y9="@firebase/auth",v9="@firebase/auth-compat",E9="@firebase/database",w9="@firebase/database-compat",I9="@firebase/functions",T9="@firebase/functions-compat",C9="@firebase/installations",A9="@firebase/installations-compat",R9="@firebase/messaging",b9="@firebase/messaging-compat",S9="@firebase/performance",P9="@firebase/performance-compat",k9="@firebase/remote-config",O9="@firebase/remote-config-compat",x9="@firebase/storage",D9="@firebase/storage-compat",N9="@firebase/firestore",V9="@firebase/firestore-compat",M9="firebase",L9="10.7.1";/**
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
 */const pl="[DEFAULT]",F9={[fl]:"fire-core",[f9]:"fire-core-compat",[g9]:"fire-analytics",[p9]:"fire-analytics-compat",[_9]:"fire-app-check",[m9]:"fire-app-check-compat",[y9]:"fire-auth",[v9]:"fire-auth-compat",[E9]:"fire-rtdb",[w9]:"fire-rtdb-compat",[I9]:"fire-fn",[T9]:"fire-fn-compat",[C9]:"fire-iid",[A9]:"fire-iid-compat",[R9]:"fire-fcm",[b9]:"fire-fcm-compat",[S9]:"fire-perf",[P9]:"fire-perf-compat",[k9]:"fire-rc",[O9]:"fire-rc-compat",[x9]:"fire-gcs",[D9]:"fire-gcs-compat",[N9]:"fire-fst",[V9]:"fire-fst-compat","fire-js":"fire-js",[M9]:"fire-js-all"};/**
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
 */const Ko=new Map,gl=new Map;function U9(t,e){try{t.container.addComponent(e)}catch(n){br.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function qt(t){const e=t.name;if(gl.has(e))return br.debug(`There were multiple attempts to register component ${e}.`),!1;gl.set(e,t);for(const n of Ko.values())U9(n,t);return!0}function tr(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const $9={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Hn=new Ur("app","Firebase",$9);/**
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
 */class B9{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Nt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Hn.create("app-deleted",{appName:this._name})}}/**
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
 */const $r=L9;function cm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Hn.create("bad-app-name",{appName:String(s)});if(n||(n=em()),!n)throw Hn.create("no-options");const i=Ko.get(s);if(i){if(_i(n,i.options)&&_i(r,i.config))return i;throw Hn.create("duplicate-app",{appName:s})}const o=new QI(s);for(const c of gl.values())o.addComponent(c);const a=new B9(n,r,o);return Ko.set(s,a),a}function ka(t=pl){const e=Ko.get(t);if(!e&&t===pl&&em())return cm();if(!e)throw Hn.create("no-app",{appName:t});return e}function pt(t,e,n){var r;let s=(r=F9[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),br.warn(a.join(" "));return}qt(new Nt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const j9="firebase-heartbeat-database",q9=1,yi="firebase-heartbeat-store";let Cc=null;function lm(){return Cc||(Cc=c9(j9,q9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(yi)}}}).catch(t=>{throw Hn.create("idb-open",{originalErrorMessage:t.message})})),Cc}async function H9(t){try{return await(await lm()).transaction(yi).objectStore(yi).get(um(t))}catch(e){if(e instanceof Mt)br.warn(e.message);else{const n=Hn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});br.warn(n.message)}}}async function Kd(t,e){try{const r=(await lm()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,um(t)),await r.done}catch(n){if(n instanceof Mt)br.warn(n.message);else{const r=Hn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});br.warn(r.message)}}}function um(t){return`${t.name}!${t.options.appId}`}/**
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
 */const z9=1024,W9=30*24*60*60*1e3;class K9{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Q9(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=W9}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Gd(),{heartbeatsToSend:r,unsentEntries:s}=G9(this._heartbeatsCache.heartbeats),i=Wo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Gd(){return new Date().toISOString().substring(0,10)}function G9(t,e=z9){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Qd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Qd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Q9{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return sm()?im().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await H9(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Kd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Qd(t){return Wo(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function Y9(t){qt(new Nt("platform-logger",e=>new h9(e),"PRIVATE")),qt(new Nt("heartbeat",e=>new K9(e),"PRIVATE")),pt(fl,Wd,t),pt(fl,Wd,"esm2017"),pt("fire-js","")}Y9("");function yu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function hm(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const X9=hm,dm=new Ur("auth","Firebase",hm());/**
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
 */const Go=new Pa("@firebase/auth");function J9(t,...e){Go.logLevel<=se.WARN&&Go.warn(`Auth (${$r}): ${t}`,...e)}function xo(t,...e){Go.logLevel<=se.ERROR&&Go.error(`Auth (${$r}): ${t}`,...e)}/**
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
 */function Vt(t,...e){throw vu(t,...e)}function tn(t,...e){return vu(t,...e)}function fm(t,e,n){const r=Object.assign(Object.assign({},X9()),{[e]:n});return new Ur("auth","Firebase",r).create(e,{appName:t.name})}function Z9(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Vt(t,"argument-error"),fm(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function vu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return dm.create(t,...e)}function K(t,e,...n){if(!t)throw vu(e,...n)}function gn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw xo(e),new Error(e)}function En(t,e){t||gn(e)}/**
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
 */function ml(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eT(){return Yd()==="http:"||Yd()==="https:"}function Yd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function tT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eT()||rm()||"connection"in navigator)?navigator.onLine:!0}function nT(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $i{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=OI()||xI()}get(){return tT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Eu(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class pm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const rT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const sT=new $i(3e4,6e4);function nr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function An(t,e,n,r,s={}){return gm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ui(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),pm.fetch()(mm(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function gm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rT),e);try{const s=new oT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw go(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw go(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw go(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw go(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw fm(t,u,l);Vt(t,u)}}catch(s){if(s instanceof Mt)throw s;Vt(t,"network-request-failed",{message:String(s)})}}async function Bi(t,e,n,r,s={}){const i=await An(t,e,n,r,s);return"mfaPendingCredential"in i&&Vt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function mm(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Eu(t.config,s):`${t.config.apiScheme}://${s}`}function iT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class oT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(tn(this.auth,"network-request-failed")),sT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function go(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=tn(t,e,r);return s.customData._tokenResponse=n,s}function Xd(t){return t!==void 0&&t.enterprise!==void 0}class aT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return iT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function cT(t,e){return An(t,"GET","/v2/recaptchaConfig",nr(t,e))}/**
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
 */async function lT(t,e){return An(t,"POST","/v1/accounts:delete",e)}async function uT(t,e){return An(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hT(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=wu(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ri(Ac(s.auth_time)),issuedAtTime:ri(Ac(s.iat)),expirationTime:ri(Ac(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ac(t){return Number(t)*1e3}function wu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return xo("JWT malformed, contained fewer than 3 sections"),null;try{const s=Xg(n);return s?JSON.parse(s):(xo("Failed to decode base64 JWT payload"),null)}catch(s){return xo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function dT(t){const e=wu(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function _s(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Mt&&fT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class pT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class _m{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Qo(t){var e;const n=t.auth,r=await t.getIdToken(),s=await _s(t,uT(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?_T(i.providerUserInfo):[],a=mT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new _m(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function gT(t){const e=ke(t);await Qo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function _T(t){return t.map(e=>{var{providerId:n}=e,r=yu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function yT(t,e){const n=await gm(t,{},async()=>{const r=Ui({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=mm(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",pm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function vT(t,e){return An(t,"POST","/v2/accounts:revokeToken",nr(t,e))}/**
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
 */class vi{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):dT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await yT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new vi;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new vi,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
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
 */function Pn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ir{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=yu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _m(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await _s(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hT(this,e)}reload(){return gT(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ir(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Qo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await _s(this,lT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:B,isAnonymous:L,providerData:ie,stsTokenManager:me}=n;K(N&&me,e,"internal-error");const ee=vi.fromJSON(this.name,me);K(typeof N=="string",e,"internal-error"),Pn(h,e.name),Pn(d,e.name),K(typeof B=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),Pn(p,e.name),Pn(y,e.name),Pn(T,e.name),Pn(E,e.name),Pn(S,e.name),Pn(D,e.name);const te=new Ir({uid:N,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:L,photoURL:y,phoneNumber:p,tenantId:T,stsTokenManager:ee,createdAt:S,lastLoginAt:D});return ie&&Array.isArray(ie)&&(te.providerData=ie.map(we=>Object.assign({},we))),E&&(te._redirectEventId=E),te}static async _fromIdTokenResponse(e,n,r=!1){const s=new vi;s.updateFromServerResponse(n);const i=new Ir({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Qo(i),i}}/**
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
 */const Jd=new Map;function mn(t){En(t instanceof Function,"Expected a class definition");let e=Jd.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Jd.set(t,e),e)}/**
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
 */class ym{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}ym.type="NONE";const Zd=ym;/**
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
 */function Do(t,e,n){return`firebase:${t}:${e}:${n}`}class os{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Do(this.userKey,s.apiKey,i),this.fullPersistenceKey=Do("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ir._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new os(mn(Zd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||mn(Zd);const o=Do(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Ir._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new os(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new os(i,e,r))}}/**
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
 */function ef(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(wm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(vm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Tm(e))return"Blackberry";if(Cm(e))return"Webos";if(Iu(e))return"Safari";if((e.includes("chrome/")||Em(e))&&!e.includes("edge/"))return"Chrome";if(Im(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function vm(t=ot()){return/firefox\//i.test(t)}function Iu(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Em(t=ot()){return/crios\//i.test(t)}function wm(t=ot()){return/iemobile/i.test(t)}function Im(t=ot()){return/android/i.test(t)}function Tm(t=ot()){return/blackberry/i.test(t)}function Cm(t=ot()){return/webos/i.test(t)}function Oa(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ET(t=ot()){var e;return Oa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function wT(){return DI()&&document.documentMode===10}function Am(t=ot()){return Oa(t)||Im(t)||Cm(t)||Tm(t)||/windows phone/i.test(t)||wm(t)}function IT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Rm(t,e=[]){let n;switch(t){case"Browser":n=ef(ot());break;case"Worker":n=`${ef(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${$r}/${r}`}/**
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
 */class TT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function CT(t,e={}){return An(t,"GET","/v2/passwordPolicy",nr(t,e))}/**
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
 */const AT=6;class RT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:AT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class bT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tf(this),this.idTokenSubscription=new tf(this),this.beforeStateQueue=new TT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=dm,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=mn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await os.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Qo(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await CT(this),n=new RT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ur("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await vT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&mn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await os.create(this,[mn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Rm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&J9(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function rr(t){return ke(t)}class tf{constructor(e){this.auth=e,this.observer=null,this.addObserver=UI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function ST(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function bm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",ST().appendChild(r)})}function PT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kT="https://www.google.com/recaptcha/enterprise.js?render=",OT="recaptcha-enterprise",xT="NO_RECAPTCHA";class DT{constructor(e){this.type=OT,this.auth=rr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{cT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new aT(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Xd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(xT)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Xd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}bm(kT+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function nf(t,e,n,r=!1){const s=new DT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function _l(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await nf(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await nf(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function NT(t,e){const n=tr(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(_i(i,e??{}))return s;Vt(s,"already-initialized")}return n.initialize({options:e})}function VT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(mn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function MT(t,e,n){const r=rr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Sm(e),{host:o,port:a}=LT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||FT()}function Sm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function LT(t){const e=Sm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:rf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:rf(o)}}}function rf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function FT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Tu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,n){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}async function UT(t,e){return An(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function $T(t,e){return Bi(t,"POST","/v1/accounts:signInWithPassword",nr(t,e))}/**
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
 */async function BT(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}async function jT(t,e){return Bi(t,"POST","/v1/accounts:signInWithEmailLink",nr(t,e))}/**
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
 */class Ei extends Tu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ei(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ei(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,n,"signInWithPassword",$T);case"emailLink":return BT(e,{email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return _l(e,r,"signUpPassword",UT);case"emailLink":return jT(e,{idToken:n,email:this._email,oobCode:this._password});default:Vt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function as(t,e){return Bi(t,"POST","/v1/accounts:signInWithIdp",nr(t,e))}/**
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
 */const qT="http://localhost";class Sr extends Tu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Sr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Vt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=yu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Sr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return as(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,as(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,as(e,n)}buildRequest(){const e={requestUri:qT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ui(n)}return e}}/**
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
 */function HT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function zT(t){const e=Hs(zs(t)).link,n=e?Hs(zs(e)).deep_link_id:null,r=Hs(zs(t)).deep_link_id;return(r?Hs(zs(r)).link:null)||r||n||e||t}class Cu{constructor(e){var n,r,s,i,o,a;const c=Hs(zs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=HT((s=c.mode)!==null&&s!==void 0?s:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=zT(e);try{return new Cu(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return Ei._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Cu.parseLink(n);return K(r,"argument-error"),Ei._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Au{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ji extends Au{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Nn extends ji{constructor(){super("facebook.com")}static credential(e){return Sr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Nn.credential(e.oauthAccessToken)}catch{return null}}}Nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Nn.PROVIDER_ID="facebook.com";/**
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
 */class Ft extends ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Sr._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ft.credentialFromTaggedObject(e)}static credentialFromError(e){return Ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
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
 */class Vn extends ji{constructor(){super("github.com")}static credential(e){return Sr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.GITHUB_SIGN_IN_METHOD="github.com";Vn.PROVIDER_ID="github.com";/**
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
 */class Mn extends ji{constructor(){super("twitter.com")}static credential(e,n){return Sr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */async function WT(t,e){return Bi(t,"POST","/v1/accounts:signUp",nr(t,e))}/**
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
 */class Pr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Ir._fromIdTokenResponse(e,r,s),o=sf(r);return new Pr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=sf(r);return new Pr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function sf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yo extends Mt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Yo.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Yo(e,n,r,s)}}function Pm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Yo._fromErrorAndOperation(t,i,e,r):i})}async function KT(t,e,n=!1){const r=await _s(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Pr._forOperation(t,"link",r)}/**
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
 */async function GT(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await _s(t,Pm(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=wu(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),Pr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Vt(r,"user-mismatch"),i}}/**
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
 */async function km(t,e,n=!1){const r="signIn",s=await Pm(t,r,e),i=await Pr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function QT(t,e){return km(rr(t),e)}/**
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
 */async function Om(t){const e=rr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function YT(t,e,n){const r=rr(t),o=await _l(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Om(t),c}),a=await Pr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function XT(t,e,n){return QT(ke(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Om(t),r})}/**
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
 */async function JT(t,e){return An(t,"POST","/v1/accounts:update",e)}/**
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
 */async function ZT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ke(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await _s(r,JT(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function e2(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function t2(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function xm(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function n2(t){return ke(t).signOut()}const Xo="__sak";/**
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
 */class Dm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xo,"1"),this.storage.removeItem(Xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function r2(){const t=ot();return Iu(t)||Oa(t)}const s2=1e3,i2=10;class Nm extends Dm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=r2()&&IT(),this.fallbackToPolling=Am(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);wT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,i2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},s2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nm.type="LOCAL";const o2=Nm;/**
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
 */class Vm extends Dm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Vm.type="SESSION";const Mm=Vm;/**
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
 */function a2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class xa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new xa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await a2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}xa.receivers=[];/**
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
 */function Ru(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class c2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Ru("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function nn(){return window}function l2(t){nn().location.href=t}/**
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
 */function Lm(){return typeof nn().WorkerGlobalScope<"u"&&typeof nn().importScripts=="function"}async function u2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function h2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function d2(){return Lm()?self:null}/**
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
 */const Fm="firebaseLocalStorageDb",f2=1,Jo="firebaseLocalStorage",Um="fbase_key";class qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Da(t,e){return t.transaction([Jo],e?"readwrite":"readonly").objectStore(Jo)}function p2(){const t=indexedDB.deleteDatabase(Fm);return new qi(t).toPromise()}function yl(){const t=indexedDB.open(Fm,f2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Jo,{keyPath:Um})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Jo)?e(r):(r.close(),await p2(),e(await yl()))})})}async function of(t,e,n){const r=Da(t,!0).put({[Um]:e,value:n});return new qi(r).toPromise()}async function g2(t,e){const n=Da(t,!1).get(e),r=await new qi(n).toPromise();return r===void 0?null:r.value}function af(t,e){const n=Da(t,!0).delete(e);return new qi(n).toPromise()}const m2=800,_2=3;class $m{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>_2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=xa._getInstance(d2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await u2(),!this.activeServiceWorker)return;this.sender=new c2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||h2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yl();return await of(e,Xo,"1"),await af(e,Xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>of(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>g2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>af(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Da(s,!1).getAll();return new qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}$m.type="LOCAL";const y2=$m;new $i(3e4,6e4);/**
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
 */function Bm(t,e){return e?mn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bu extends Tu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return as(e,this._buildIdpRequest())}_linkToIdToken(e,n){return as(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return as(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function v2(t){return km(t.auth,new bu(t),t.bypassAuthState)}function E2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),GT(n,new bu(t),t.bypassAuthState)}async function w2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),KT(n,new bu(t),t.bypassAuthState)}/**
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
 */class jm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v2;case"linkViaPopup":case"linkViaRedirect":return w2;case"reauthViaPopup":case"reauthViaRedirect":return E2;default:Vt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const I2=new $i(2e3,1e4);async function T2(t,e,n){const r=rr(t);Z9(t,e,Au);const s=Bm(r,n);return new dr(r,"signInViaPopup",e,s).executeNotNull()}class dr extends jm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,dr.currentPopupAction&&dr.currentPopupAction.cancel(),dr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Ru();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,dr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I2.get())};e()}}dr.currentPopupAction=null;/**
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
 */const C2="pendingRedirect",No=new Map;class A2 extends jm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=No.get(this.auth._key());if(!e){try{const r=await R2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}No.set(this.auth._key(),e)}return this.bypassAuthState||No.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R2(t,e){const n=P2(e),r=S2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function b2(t,e){No.set(t._key(),e)}function S2(t){return mn(t._redirectPersistence)}function P2(t){return Do(C2,t.config.apiKey,t.name)}async function k2(t,e,n=!1){const r=rr(t),s=Bm(r,e),o=await new A2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const O2=10*60*1e3;class x2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!qm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=O2&&this.cachedEventUids.clear(),this.cachedEventUids.has(cf(e))}saveEventToCache(e){this.cachedEventUids.add(cf(e)),this.lastProcessedEventTime=Date.now()}}function cf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function qm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return qm(t);default:return!1}}/**
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
 */async function N2(t,e={}){return An(t,"GET","/v1/projects",e)}/**
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
 */const V2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M2=/^https?/;async function L2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await N2(t);for(const n of e)try{if(F2(n))return}catch{}Vt(t,"unauthorized-domain")}function F2(t){const e=ml(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!M2.test(n))return!1;if(V2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const U2=new $i(3e4,6e4);function lf(){const t=nn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $2(t){return new Promise((e,n)=>{var r,s,i;function o(){lf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{lf(),n(tn(t,"network-request-failed"))},timeout:U2.get()})}if(!((s=(r=nn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=nn().gapi)===null||i===void 0)&&i.load)o();else{const a=PT("iframefcb");return nn()[a]=()=>{gapi.load?o():n(tn(t,"network-request-failed"))},bm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function B2(t){return Vo=Vo||$2(t),Vo}/**
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
 */const j2=new $i(5e3,15e3),q2="__/auth/iframe",H2="emulator/auth/iframe",z2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K2(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Eu(e,H2):`https://${t.config.authDomain}/${q2}`,r={apiKey:e.apiKey,appName:t.name,v:$r},s=W2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ui(r).slice(1)}`}async function G2(t){const e=await B2(t),n=nn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:K2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:z2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=tn(t,"network-request-failed"),a=nn().setTimeout(()=>{i(o)},j2.get());function c(){nn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const Q2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y2=500,X2=600,J2="_blank",Z2="http://localhost";class uf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eC(t,e,n,r=Y2,s=X2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Q2),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ot().toLowerCase();n&&(a=Em(l)?J2:n),vm(l)&&(e=e||Z2,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(ET(l)&&a!=="_self")return tC(e||"",a),new uf(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new uf(h)}function tC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const nC="__/auth/handler",rC="emulator/auth/handler",sC=encodeURIComponent("fac");async function hf(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:$r,eventId:s};if(e instanceof Au){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",FI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof ji){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${sC}=${encodeURIComponent(c)}`:"";return`${iC(t)}?${Ui(a).slice(1)}${l}`}function iC({config:t}){return t.emulator?Eu(t,rC):`https://${t.authDomain}/${nC}`}/**
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
 */const Rc="webStorageSupport";class oC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mm,this._completeRedirectFn=k2,this._overrideRedirectResult=b2}async _openPopup(e,n,r,s){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await hf(e,n,r,ml(),s);return eC(e,o,Ru())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await hf(e,n,r,ml(),s);return l2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(En(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await G2(e),r=new x2(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Rc,{type:Rc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Rc];o!==void 0&&n(!!o),Vt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=L2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Am()||Iu()||Oa()}}const aC=oC;var df="@firebase/auth",ff="1.5.1";/**
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
 */class cC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function lC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function uC(t){qt(new Nt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Rm(t)},l=new bT(r,s,i,c);return VT(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),qt(new Nt("auth-internal",e=>{const n=rr(e.getProvider("auth").getImmediate());return(r=>new cC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),pt(df,ff,lC(t)),pt(df,ff,"esm2017")}/**
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
 */const hC=5*60,dC=tm("authIdTokenMaxAge")||hC;let pf=null;const fC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>dC)return;const s=n==null?void 0:n.token;pf!==s&&(pf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function pC(t=ka()){const e=tr(t,"auth");if(e.isInitialized())return e.getImmediate();const n=NT(t,{popupRedirectResolver:aC,persistence:[y2,o2,Mm]}),r=tm("authTokenSyncURL");if(r){const i=fC(r);t2(n,i,()=>i(n.currentUser)),e2(n,o=>i(o))}const s=Jg("auth");return s&&MT(n,`http://${s}`),n}uC("Browser");var gC="firebase",mC="10.7.1";/**
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
 */pt(gC,mC,"app");const _C=(t,e)=>e.some(n=>t instanceof n);let gf,mf;function yC(){return gf||(gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vC(){return mf||(mf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Hm=new WeakMap,vl=new WeakMap,zm=new WeakMap,bc=new WeakMap,Su=new WeakMap;function EC(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(zn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Hm.set(n,t)}).catch(()=>{}),Su.set(e,t),e}function wC(t){if(vl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});vl.set(t,e)}let El={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return vl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||zm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function IC(t){El=t(El)}function TC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Sc(this),e,...n);return zm.set(r,e.sort?e.sort():[e]),zn(r)}:vC().includes(t)?function(...e){return t.apply(Sc(this),e),zn(Hm.get(this))}:function(...e){return zn(t.apply(Sc(this),e))}}function CC(t){return typeof t=="function"?TC(t):(t instanceof IDBTransaction&&wC(t),_C(t,yC())?new Proxy(t,El):t)}function zn(t){if(t instanceof IDBRequest)return EC(t);if(bc.has(t))return bc.get(t);const e=CC(t);return e!==t&&(bc.set(t,e),Su.set(e,t)),e}const Sc=t=>Su.get(t);function AC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=zn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(zn(o.result),c.oldVersion,c.newVersion,zn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const RC=["get","getKey","getAll","getAllKeys","count"],bC=["put","add","delete","clear"],Pc=new Map;function _f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Pc.get(e))return Pc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=bC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Pc.set(e,i),i}IC(t=>({...t,get:(e,n,r)=>_f(e,n)||t.get(e,n,r),has:(e,n)=>!!_f(e,n)||t.has(e,n)}));const Wm="@firebase/installations",Pu="0.6.4";/**
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
 */const Km=1e4,Gm=`w:${Pu}`,Qm="FIS_v2",SC="https://firebaseinstallations.googleapis.com/v1",PC=60*60*1e3,kC="installations",OC="Installations";/**
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
 */const xC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},kr=new Ur(kC,OC,xC);function Ym(t){return t instanceof Mt&&t.code.includes("request-failed")}/**
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
 */function Xm({projectId:t}){return`${SC}/projects/${t}/installations`}function Jm(t){return{token:t.token,requestStatus:2,expiresIn:NC(t.expiresIn),creationTime:Date.now()}}async function Zm(t,e){const r=(await e.json()).error;return kr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function e_({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function DC(t,{refreshToken:e}){const n=e_(t);return n.append("Authorization",VC(e)),n}async function t_(t){const e=await t();return e.status>=500&&e.status<600?t():e}function NC(t){return Number(t.replace("s","000"))}function VC(t){return`${Qm} ${t}`}/**
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
 */async function MC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Xm(t),s=e_(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:Qm,appId:t.appId,sdkVersion:Gm},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await t_(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:Jm(l.authToken)}}else throw await Zm("Create Installation",c)}/**
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
 */function n_(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function LC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const FC=/^[cdef][\w-]{21}$/,wl="";function UC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=$C(t);return FC.test(n)?n:wl}catch{return wl}}function $C(t){return LC(t).substr(0,22)}/**
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
 */function Na(t){return`${t.appName}!${t.appId}`}/**
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
 */const r_=new Map;function s_(t,e){const n=Na(t);i_(n,e),BC(n,e)}function i_(t,e){const n=r_.get(t);if(n)for(const r of n)r(e)}function BC(t,e){const n=jC();n&&n.postMessage({key:t,fid:e}),qC()}let fr=null;function jC(){return!fr&&"BroadcastChannel"in self&&(fr=new BroadcastChannel("[Firebase] FID Change"),fr.onmessage=t=>{i_(t.data.key,t.data.fid)}),fr}function qC(){r_.size===0&&fr&&(fr.close(),fr=null)}/**
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
 */const HC="firebase-installations-database",zC=1,Or="firebase-installations-store";let kc=null;function ku(){return kc||(kc=AC(HC,zC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Or)}}})),kc}async function Zo(t,e){const n=Na(t),s=(await ku()).transaction(Or,"readwrite"),i=s.objectStore(Or),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&s_(t,e.fid),e}async function o_(t){const e=Na(t),r=(await ku()).transaction(Or,"readwrite");await r.objectStore(Or).delete(e),await r.done}async function Va(t,e){const n=Na(t),s=(await ku()).transaction(Or,"readwrite"),i=s.objectStore(Or),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&s_(t,a.fid),a}/**
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
 */async function Ou(t){let e;const n=await Va(t.appConfig,r=>{const s=WC(r),i=KC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===wl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function WC(t){const e=t||{fid:UC(),registrationStatus:0};return a_(e)}function KC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(kr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=GC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:QC(t)}:{installationEntry:e}}async function GC(t,e){try{const n=await MC(t,e);return Zo(t.appConfig,n)}catch(n){throw Ym(n)&&n.customData.serverCode===409?await o_(t.appConfig):await Zo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function QC(t){let e=await yf(t.appConfig);for(;e.registrationStatus===1;)await n_(100),e=await yf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ou(t);return r||n}return e}function yf(t){return Va(t,e=>{if(!e)throw kr.create("installation-not-found");return a_(e)})}function a_(t){return YC(t)?{fid:t.fid,registrationStatus:0}:t}function YC(t){return t.registrationStatus===1&&t.registrationTime+Km<Date.now()}/**
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
 */async function XC({appConfig:t,heartbeatServiceProvider:e},n){const r=JC(t,n),s=DC(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Gm,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await t_(()=>fetch(r,a));if(c.ok){const l=await c.json();return Jm(l)}else throw await Zm("Generate Auth Token",c)}function JC(t,{fid:e}){return`${Xm(t)}/${e}/authTokens:generate`}/**
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
 */async function xu(t,e=!1){let n;const r=await Va(t.appConfig,i=>{if(!c_(i))throw kr.create("not-registered");const o=i.authToken;if(!e&&tA(o))return i;if(o.requestStatus===1)return n=ZC(t,e),i;{if(!navigator.onLine)throw kr.create("app-offline");const a=rA(i);return n=eA(t,a),a}});return n?await n:r.authToken}async function ZC(t,e){let n=await vf(t.appConfig);for(;n.authToken.requestStatus===1;)await n_(100),n=await vf(t.appConfig);const r=n.authToken;return r.requestStatus===0?xu(t,e):r}function vf(t){return Va(t,e=>{if(!c_(e))throw kr.create("not-registered");const n=e.authToken;return sA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function eA(t,e){try{const n=await XC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Zo(t.appConfig,r),n}catch(n){if(Ym(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await o_(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Zo(t.appConfig,r)}throw n}}function c_(t){return t!==void 0&&t.registrationStatus===2}function tA(t){return t.requestStatus===2&&!nA(t)}function nA(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+PC}function rA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function sA(t){return t.requestStatus===1&&t.requestTime+Km<Date.now()}/**
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
 */async function iA(t){const e=t,{installationEntry:n,registrationPromise:r}=await Ou(e);return r?r.catch(console.error):xu(e).catch(console.error),n.fid}/**
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
 */async function oA(t,e=!1){const n=t;return await aA(n),(await xu(n,e)).token}async function aA(t){const{registrationPromise:e}=await Ou(t);e&&await e}/**
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
 */function cA(t){if(!t||!t.options)throw Oc("App Configuration");if(!t.name)throw Oc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Oc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Oc(t){return kr.create("missing-app-config-values",{valueName:t})}/**
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
 */const l_="installations",lA="installations-internal",uA=t=>{const e=t.getProvider("app").getImmediate(),n=cA(e),r=tr(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},hA=t=>{const e=t.getProvider("app").getImmediate(),n=tr(e,l_).getImmediate();return{getId:()=>iA(n),getToken:s=>oA(n,s)}};function dA(){qt(new Nt(l_,uA,"PUBLIC")),qt(new Nt(lA,hA,"PRIVATE"))}dA();pt(Wm,Pu);pt(Wm,Pu,"esm2017");/**
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
 */const ea="analytics",fA="firebase_id",pA="origin",gA=60*1e3,mA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Du="https://www.googletagmanager.com/gtag/js";/**
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
 */const gt=new Pa("@firebase/analytics");/**
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
 */const _A={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Ct=new Ur("analytics","Analytics",_A);/**
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
 */function yA(t){if(!t.startsWith(Du)){const e=Ct.create("invalid-gtag-resource",{gtagURL:t});return gt.warn(e.message),""}return t}function u_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function vA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function EA(t,e){const n=vA("firebase-js-sdk-policy",{createScriptURL:yA}),r=document.createElement("script"),s=`${Du}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function wA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function IA(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await u_(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){gt.error(a)}t("config",s,i)}async function TA(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await u_(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){gt.error(i)}}function CA(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await TA(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await IA(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){gt.error(a)}}return s}function AA(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=CA(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function RA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(Du)&&n.src.includes(t))return n;return null}/**
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
 */const bA=30,SA=1e3;class PA{constructor(e={},n=SA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const h_=new PA;function kA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function OA(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:kA(r)},i=mA.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Ct.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function xA(t,e=h_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Ct.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Ct.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new VA;return setTimeout(async()=>{a.abort()},n!==void 0?n:gA),d_({appId:r,apiKey:s,measurementId:i},o,a,e)}async function d_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=h_){var i;const{appId:o,measurementId:a}=t;try{await DA(r,e)}catch(c){if(a)return gt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await OA(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!NA(l)){if(s.deleteThrottleMetadata(o),a)return gt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?jd(n,s.intervalMillis,bA):jd(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),gt.debug(`Calling attemptFetch again in ${u} millis`),d_(t,h,r,s)}}function DA(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Ct.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function NA(t){if(!(t instanceof Mt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class VA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function MA(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function LA(){if(sm())try{await im()}catch(t){return gt.warn(Ct.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return gt.warn(Ct.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function FA(t,e,n,r,s,i,o){var a;const c=xA(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&gt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>gt.error(p)),e.push(c);const l=LA().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);RA(i)||EA(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[pA]="firebase",d.update=!0,h!=null&&(d[fA]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class UA{constructor(e){this.app=e}_delete(){return delete si[this.app.options.appId],Promise.resolve()}}let si={},Ef=[];const wf={};let xc="dataLayer",$A="gtag",If,f_,Tf=!1;function BA(){const t=[];if(rm()&&t.push("This is a browser extension environment."),NI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Ct.create("invalid-analytics-context",{errorInfo:e});gt.warn(n.message)}}function jA(t,e,n){BA();const r=t.options.appId;if(!r)throw Ct.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)gt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Ct.create("no-api-key");if(si[r]!=null)throw Ct.create("already-exists",{id:r});if(!Tf){wA(xc);const{wrappedGtag:i,gtagCore:o}=AA(si,Ef,wf,xc,$A);f_=i,If=o,Tf=!0}return si[r]=FA(t,Ef,wf,e,If,xc,n),new UA(t)}function qA(t=ka()){t=ke(t);const e=tr(t,ea);return e.isInitialized()?e.getImmediate():HA(t)}function HA(t,e={}){const n=tr(t,ea);if(n.isInitialized()){const s=n.getImmediate();if(_i(e,n.getOptions()))return s;throw Ct.create("already-initialized")}return n.initialize({options:e})}function zA(t,e,n,r){t=ke(t),MA(f_,si[t.app.options.appId],e,n,r).catch(s=>gt.error(s))}const Cf="@firebase/analytics",Af="0.10.0";function WA(){qt(new Nt(ea,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return jA(r,s,n)},"PUBLIC")),qt(new Nt("analytics-internal",t,"PRIVATE")),pt(Cf,Af),pt(Cf,Af,"esm2017");function t(e){try{const n=e.getProvider(ea).getImmediate();return{logEvent:(r,s,i)=>zA(n,r,s,i)}}catch(n){throw Ct.create("interop-component-reg-failed",{reason:n})}}}WA();var KA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Nu=Nu||{},Q=KA||self;function Ma(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Hi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function GA(t){return Object.prototype.hasOwnProperty.call(t,Dc)&&t[Dc]||(t[Dc]=++QA)}var Dc="closure_uid_"+(1e9*Math.random()>>>0),QA=0;function YA(t,e,n){return t.call.apply(t.bind,arguments)}function XA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=YA:st=XA,st.apply(null,arguments)}function mo(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function sr(){this.s=this.s,this.o=this.o}var JA=0;sr.prototype.s=!1;sr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),JA!=0)&&GA(this)};sr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const p_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Vu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Rf(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Ma(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var ZA=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function wi(t){return/^[\s\xa0]*$/.test(t)}function La(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Xt(t){return La().indexOf(t)!=-1}function Mu(t){return Mu[" "](t),t}Mu[" "]=function(){};function e4(t,e){var n=W4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var t4=Xt("Opera"),ys=Xt("Trident")||Xt("MSIE"),g_=Xt("Edge"),Il=g_||ys,m_=Xt("Gecko")&&!(La().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge"))&&!(Xt("Trident")||Xt("MSIE"))&&!Xt("Edge"),n4=La().toLowerCase().indexOf("webkit")!=-1&&!Xt("Edge");function __(){var t=Q.document;return t?t.documentMode:void 0}var Tl;e:{var Nc="",Vc=function(){var t=La();if(m_)return/rv:([^\);]+)(\)|;)/.exec(t);if(g_)return/Edge\/([\d\.]+)/.exec(t);if(ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(n4)return/WebKit\/(\S+)/.exec(t);if(t4)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Vc&&(Nc=Vc?Vc[1]:""),ys){var Mc=__();if(Mc!=null&&Mc>parseFloat(Nc)){Tl=String(Mc);break e}}Tl=Nc}var Cl;if(Q.document&&ys){var bf=__();Cl=bf||parseInt(Tl,10)||void 0}else Cl=void 0;var r4=Cl;function Ii(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(m_){e:{try{Mu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:s4[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ii.$.h.call(this)}}ze(Ii,it);var s4={2:"touch",3:"pen",4:"mouse"};Ii.prototype.h=function(){Ii.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var zi="closure_listenable_"+(1e6*Math.random()|0),i4=0;function o4(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++i4,this.fa=this.ia=!1}function Fa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Lu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function a4(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function y_(t){const e={};for(const n in t)e[n]=t[n];return e}const Sf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function v_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Sf.length;i++)n=Sf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ua(t){this.src=t,this.g={},this.h=0}Ua.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Rl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new o4(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Al(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=p_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Fa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Rl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Fu="closure_lm_"+(1e6*Math.random()|0),Lc={};function E_(t,e,n,r,s){if(r&&r.once)return I_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)E_(t,e[i],n,r,s);return null}return n=Bu(n),t&&t[zi]?t.O(e,n,Hi(r)?!!r.capture:!!r,s):w_(t,e,n,!1,r,s)}function w_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Hi(s)?!!s.capture:!!s,a=$u(t);if(a||(t[Fu]=a=new Ua(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=c4(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)ZA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(C_(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function c4(){function t(n){return e.call(t.src,t.listener,n)}const e=l4;return t}function I_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)I_(t,e[i],n,r,s);return null}return n=Bu(n),t&&t[zi]?t.P(e,n,Hi(r)?!!r.capture:!!r,s):w_(t,e,n,!0,r,s)}function T_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)T_(t,e[i],n,r,s);else r=Hi(r)?!!r.capture:!!r,n=Bu(n),t&&t[zi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Rl(i,n,r,s),-1<n&&(Fa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=$u(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Rl(e,n,r,s)),(n=-1<t?e[t]:null)&&Uu(n))}function Uu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[zi])Al(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(C_(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=$u(e))?(Al(n,t),n.h==0&&(n.src=null,e[Fu]=null)):Fa(t)}}}function C_(t){return t in Lc?Lc[t]:Lc[t]="on"+t}function l4(t,e){if(t.fa)t=!0;else{e=new Ii(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Uu(t),t=n.call(r,e)}return t}function $u(t){return t=t[Fu],t instanceof Ua?t:null}var Fc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Bu(t){return typeof t=="function"?t:(t[Fc]||(t[Fc]=function(e){return t.handleEvent(e)}),t[Fc])}function He(){sr.call(this),this.i=new Ua(this),this.S=this,this.J=null}ze(He,sr);He.prototype[zi]=!0;He.prototype.removeEventListener=function(t,e,n,r){T_(this,t,e,n,r)};function Qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var s=e;e=new it(r,t),v_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=_o(o,r,!0,e)&&s}if(o=e.g=t,s=_o(o,r,!0,e)&&s,s=_o(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=_o(o,r,!1,e)&&s}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Fa(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function _o(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Al(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var ju=Q.JSON.stringify;class u4{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function h4(){var t=qu;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class d4{constructor(){this.h=this.g=null}add(e,n){const r=A_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var A_=new u4(()=>new f4,t=>t.reset());class f4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function p4(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function g4(t){Q.setTimeout(()=>{throw t},0)}let Ti,Ci=!1,qu=new d4,R_=()=>{const t=Q.Promise.resolve(void 0);Ti=()=>{t.then(m4)}};var m4=()=>{for(var t;t=h4();){try{t.h.call(t.g)}catch(n){g4(n)}var e=A_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ci=!1};function $a(t,e){He.call(this),this.h=t||1,this.g=e||Q,this.j=st(this.qb,this),this.l=Date.now()}ze($a,He);x=$a.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(Hu(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Hu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){$a.$.N.call(this),Hu(this),delete this.g};function zu(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function b_(t){t.g=zu(()=>{t.g=null,t.i&&(t.i=!1,b_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class _4 extends sr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:b_(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(t){sr.call(this),this.h=t,this.g={}}ze(Ai,sr);var Pf=[];function S_(t,e,n,r){Array.isArray(n)||(n&&(Pf[0]=n.toString()),n=Pf);for(var s=0;s<n.length;s++){var i=E_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function P_(t){Lu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Uu(e)},t),t.g={}}Ai.prototype.N=function(){Ai.$.N.call(this),P_(this)};Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ba(){this.g=!0}Ba.prototype.Ea=function(){this.g=!1};function y4(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function v4(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function ns(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+w4(t,n)+(r?" "+r:"")})}function E4(t,e){t.info(function(){return"TIMEOUT: "+e})}Ba.prototype.info=function(){};function w4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return ju(n)}catch{return e}}var Br={},kf=null;function ja(){return kf=kf||new He}Br.Ta="serverreachability";function k_(t){it.call(this,Br.Ta,t)}ze(k_,it);function Ri(t){const e=ja();Qe(e,new k_(e))}Br.STAT_EVENT="statevent";function O_(t,e){it.call(this,Br.STAT_EVENT,t),this.stat=e}ze(O_,it);function ht(t){const e=ja();Qe(e,new O_(e,t))}Br.Ua="timingevent";function x_(t,e){it.call(this,Br.Ua,t),this.size=e}ze(x_,it);function Wi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var qa={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},D_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Wu(){}Wu.prototype.h=null;function Of(t){return t.h||(t.h=t.i())}function N_(){}var Ki={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Ku(){it.call(this,"d")}ze(Ku,it);function Gu(){it.call(this,"c")}ze(Gu,it);var bl;function Ha(){}ze(Ha,Wu);Ha.prototype.g=function(){return new XMLHttpRequest};Ha.prototype.i=function(){return{}};bl=new Ha;function Gi(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ai(this),this.P=I4,t=Il?125:void 0,this.V=new $a(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new V_}function V_(){this.i=null,this.g="",this.h=!1}var I4=45e3,M_={},Sl={};x=Gi.prototype;x.setTimeout=function(t){this.P=t};function Pl(t,e,n){t.L=1,t.A=Wa(wn(e)),t.u=n,t.S=!0,L_(t,null)}function L_(t,e){t.G=Date.now(),Qi(t),t.B=wn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),z_(n.i,"t",r),t.o=0,n=t.l.J,t.h=new V_,t.g=d1(t.l,n?e:null,!t.u),0<t.O&&(t.M=new _4(st(t.Pa,t,t.g),t.O)),S_(t.U,t.g,"readystatechange",t.nb),e=t.I?y_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Ri(),y4(t.j,t.v,t.B,t.m,t.W,t.u)}x.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Il||this.g&&(this.h.h||this.g.ja()||Vf(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Ri(3):Ri(2)),za(this);var n=this.g.da();this.ca=n;t:if(F_(this)){var r=Vf(this.g);t="";var s=r.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){pr(this),ii(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,v4(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!wi(a)){var l=a;break t}}l=null}if(n=l)ns(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,kl(this,n);else{this.i=!1,this.s=3,ht(12),pr(this),ii(this);break e}}this.S?(U_(this,u,o),Il&&this.i&&u==3&&(S_(this.U,this.V,"tick",this.mb),this.V.start())):(ns(this.j,this.m,o,null),kl(this,o)),u==4&&pr(this),this.i&&!this.J&&(u==4?c1(this.l,this):(this.i=!1,Qi(this)))}else q4(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),pr(this),ii(this)}}}catch{}finally{}};function F_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function U_(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=T4(t,n),s==Sl){e==4&&(t.s=4,ht(14),r=!1),ns(t.j,t.m,null,"[Incomplete Response]");break}else if(s==M_){t.s=4,ht(15),ns(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ns(t.j,t.m,s,null),kl(t,s);F_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ht(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),eh(e),e.M=!0,ht(11))):(ns(t.j,t.m,n,"[Invalid Chunked Response]"),pr(t),ii(t))}x.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.o<e.length&&(za(this),U_(this,t,e),this.i&&t!=4&&Qi(this))}};function T4(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Sl:(n=Number(e.substring(n,r)),isNaN(n)?M_:(r+=1,r+n>e.length?Sl:(e=e.slice(r,r+n),t.o=r+n,e)))}x.cancel=function(){this.J=!0,pr(this)};function Qi(t){t.Y=Date.now()+t.P,$_(t,t.P)}function $_(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Wi(st(t.lb,t),e)}function za(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}x.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(E4(this.j,this.B),this.L!=2&&(Ri(),ht(17)),pr(this),this.s=2,ii(this)):$_(this,this.Y-t)};function ii(t){t.l.H==0||t.J||c1(t.l,t)}function pr(t){za(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Hu(t.V),P_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function kl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Ol(n.i,t))){if(!t.K&&Ol(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ra(n),Ya(n);else break e;Zu(n),ht(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Wi(st(n.ib,n),6e3));if(1>=G_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else gr(n,11)}else if((t.K||n.g==t)&&ra(n),!wi(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qu(i,i.h),i.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Ae(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=h1(r,r.J?r.pa:null,r.Y),o.K){Q_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(za(a),Qi(a)),r.g=o}else o1(r);0<n.j.length&&Xa(n)}else l[0]!="stop"&&l[0]!="close"||gr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?gr(n,7):Ju(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}Ri(4)}catch{}}function C4(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Ma(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function A4(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Ma(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function B_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Ma(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=A4(t),r=C4(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var j_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function R4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Tr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Tr){this.h=t.h,ta(this,t.j),this.s=t.s,this.g=t.g,na(this,t.m),this.l=t.l;var e=t.i,n=new bi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),xf(this,n),this.o=t.o}else t&&(e=String(t).match(j_))?(this.h=!1,ta(this,e[1]||"",!0),this.s=Ws(e[2]||""),this.g=Ws(e[3]||"",!0),na(this,e[4]),this.l=Ws(e[5]||"",!0),xf(this,e[6]||"",!0),this.o=Ws(e[7]||"")):(this.h=!1,this.i=new bi(null,this.h))}Tr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ks(e,Df,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ks(e,Df,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ks(n,n.charAt(0)=="/"?P4:S4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ks(n,O4)),t.join("")};function wn(t){return new Tr(t)}function ta(t,e,n){t.j=n?Ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function na(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function xf(t,e,n){e instanceof bi?(t.i=e,x4(t.i,t.h)):(n||(e=Ks(e,k4)),t.i=new bi(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Wa(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,b4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function b4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Df=/[#\/\?@]/g,S4=/[#\?:]/g,P4=/[#\?]/g,k4=/[#\?@]/g,O4=/#/g;function bi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ir(t){t.g||(t.g=new Map,t.h=0,t.i&&R4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=bi.prototype;x.add=function(t,e){ir(this),this.i=null,t=Ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function q_(t,e){ir(t),e=Ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function H_(t,e){return ir(t),e=Ps(t,e),t.g.has(e)}x.forEach=function(t,e){ir(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};x.ta=function(){ir(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};x.Z=function(t){ir(this);let e=[];if(typeof t=="string")H_(this,t)&&(e=e.concat(this.g.get(Ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return ir(this),this.i=null,t=Ps(this,t),H_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function z_(t,e,n){q_(t,e),0<n.length&&(t.i=null,t.g.set(Ps(t,e),Vu(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function x4(t,e){e&&!t.j&&(ir(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(q_(this,r),z_(this,s,n))},t)),t.j=e}var D4=class{constructor(t,e){this.g=t,this.map=e}};function W_(t){this.l=t||N4,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var N4=10;function K_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function G_(t){return t.h?1:t.g?t.g.size:0}function Ol(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qu(t,e){t.g?t.g.add(e):t.h=e}function Q_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}W_.prototype.cancel=function(){if(this.i=Y_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Y_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Vu(t.i)}var V4=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function M4(){this.g=new V4}function L4(t,e,n){const r=n||"";try{B_(t,function(s,i){let o=s;Hi(s)&&(o=ju(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function F4(t,e){const n=new Ba;if(Q.Image){const r=new Image;r.onload=mo(yo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=mo(yo,n,r,"TestLoadImage: error",!1,e),r.onabort=mo(yo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=mo(yo,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function yo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ka(t){this.l=t.ec||null,this.j=t.ob||!1}ze(Ka,Wu);Ka.prototype.g=function(){return new Ga(this.l,this.j)};Ka.prototype.i=function(t){return function(){return t}}({});function Ga(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Yu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Ga,He);var Yu=0;x=Ga.prototype;x.open=function(t,e){if(this.readyState!=Yu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Si(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Yi(this)),this.readyState=Yu};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;X_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function X_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Yi(this):Si(this),this.readyState==3&&X_(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Yi(this))};x.Ya=function(t){this.g&&(this.response=t,Yi(this))};x.ka=function(){this.g&&Yi(this)};function Yi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Si(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ga.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var U4=Q.JSON.parse;function Oe(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=J_,this.L=this.M=!1}ze(Oe,He);var J_="",$4=/^https?$/i,B4=["POST","PUT"];x=Oe.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():bl.g(),this.C=this.u?Of(this.u):Of(bl),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){Nf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=p_(B4,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{t1(this),0<this.B&&((this.L=j4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=zu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){Nf(this,i)}};function j4(t){return ys&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Nu<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function Nf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Z_(t),Qa(t)}function Z_(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Qa(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Qa(this,!0)),Oe.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?e1(this):this.kb())};x.kb=function(){e1(this)};function e1(t){if(t.h&&typeof Nu<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)zu(t.La,0,t);else if(Qe(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(j_)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!$4.test(s?s.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var i=2<Jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Z_(t)}}finally{Qa(t)}}}}function Qa(t,e){if(t.g){t1(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function t1(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),U4(e)}};function Vf(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case J_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function q4(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(wi(t[r]))continue;var n=p4(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}a4(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function n1(t){let e="";return Lu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Xu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=n1(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Us(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function r1(t){this.Ga=0,this.j=[],this.l=new Ba,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Us("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Us("baseRetryDelayMs",5e3,t),this.hb=Us("retryDelaySeedMs",1e4,t),this.eb=Us("forwardChannelMaxRetries",2,t),this.xa=Us("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new W_(t&&t.concurrentRequestLimit),this.Ja=new M4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=r1.prototype;x.ra=8;x.H=1;function Ju(t){if(s1(t),t.H==3){var e=t.W++,n=wn(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Xi(t,n),e=new Gi(t,t.l,e),e.L=2,e.A=Wa(wn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=d1(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Qi(e)}u1(t)}function Ya(t){t.g&&(eh(t),t.g.cancel(),t.g=null)}function s1(t){Ya(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ra(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Xa(t){if(!K_(t.i)&&!t.m){t.m=!0;var e=t.Na;Ti||R_(),Ci||(Ti(),Ci=!0),qu.add(e,t),t.C=0}}function H4(t,e){return G_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Wi(st(t.Na,t,e),l1(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Gi(this,this.l,t);let i=this.s;if(this.U&&(i?(i=y_(i),v_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=i1(this,s,e),n=wn(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),Xi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(n1(i)))+"&"+e:this.o&&Xu(n,this.o,i)),Qu(this.i,s),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),s.aa=!0,Pl(s,n,null)):Pl(s,n,e),this.H=2}}else this.H==3&&(t?Mf(this,t):this.j.length==0||K_(this.i)||Mf(this))};function Mf(t,e){var n;e?n=e.m:n=t.W++;const r=wn(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),Xi(t,r),t.o&&t.s&&Xu(r,t.o,t.s),n=new Gi(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=i1(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qu(t.i,n),Pl(n,r,e)}function Xi(t,e){t.na&&Lu(t.na,function(n,r){Ae(e,r,n)}),t.h&&B_({},function(n,r){Ae(e,r,n)})}function i1(t,e,n){n=Math.min(t.j.length,n);var r=t.h?st(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{L4(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function o1(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ti||R_(),Ci||(Ti(),Ci=!0),qu.add(e,t),t.A=0}}function Zu(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Wi(st(t.Ma,t),l1(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,a1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Wi(st(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ht(10),Ya(this),a1(this))};function eh(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function a1(t){t.g=new Gi(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wn(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),Xi(t,e),t.o&&t.s&&Xu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Wa(wn(e)),n.u=null,n.S=!0,L_(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Ya(this),Zu(this),ht(19))};function ra(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function c1(t,e){var n=null;if(t.g==e){ra(t),eh(t),t.g=null;var r=2}else if(Ol(t.i,e))n=e.F,Q_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=ja(),Qe(r,new x_(r,n)),Xa(t)}else o1(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&H4(t,e)||r==2&&Zu(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:gr(t,5);break;case 4:gr(t,10);break;case 3:gr(t,6);break;default:gr(t,2)}}}function l1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function gr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=st(t.pb,t);n||(n=new Tr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||ta(n,"https"),Wa(n)),F4(n.toString(),r)}else ht(2);t.H=0,t.h&&t.h.za(e),u1(t),s1(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ht(2)):(this.l.info("Failed to ping google.com"),ht(1))};function u1(t){if(t.H=0,t.ma=[],t.h){const e=Y_(t.i);(e.length!=0||t.j.length!=0)&&(Rf(t.ma,e),Rf(t.ma,t.j),t.i.i.length=0,Vu(t.j),t.j.length=0),t.h.ya()}}function h1(t,e,n){var r=n instanceof Tr?wn(n):new Tr(n);if(r.g!="")e&&(r.g=e+"."+r.g),na(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Tr(null);r&&ta(i,r),e&&(i.g=e),s&&na(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),Xi(t,r),r}function d1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Oe(new Ka({ob:n})):new Oe(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function f1(){}x=f1.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function sa(){if(ys&&!(10<=Number(r4)))throw Error("Environmental error: no available transport.")}sa.prototype.g=function(t,e){return new At(t,e)};function At(t,e){He.call(this),this.g=new r1(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!wi(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!wi(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ks(this)}ze(At,He);At.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ht(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=h1(t,null,t.Y),Xa(t)};At.prototype.close=function(){Ju(this.g)};At.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=ju(t),t=n);e.j.push(new D4(e.fb++,t)),e.H==3&&Xa(e)};At.prototype.N=function(){this.g.h=null,delete this.j,Ju(this.g),delete this.g,At.$.N.call(this)};function p1(t){Ku.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(p1,Ku);function g1(){Gu.call(this),this.status=1}ze(g1,Gu);function ks(t){this.g=t}ze(ks,f1);ks.prototype.Ba=function(){Qe(this.g,"a")};ks.prototype.Aa=function(t){Qe(this.g,new p1(t))};ks.prototype.za=function(t){Qe(this.g,new g1)};ks.prototype.ya=function(){Qe(this.g,"b")};function z4(){this.blockSize=-1}function Ht(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(Ht,z4);Ht.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Uc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Ht.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Uc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Uc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Uc(this,r),s=0;break}}this.h=s,this.i+=e};Ht.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function ye(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var W4={};function th(t){return-128<=t&&128>t?e4(t,function(e){return new ye([e|0],0>e?-1:0)}):new ye([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return cs;if(0>t)return Ke(Zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=xl;return new ye(e,0)}function m1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(m1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),r=cs,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Zt(Math.pow(e,i)),r=r.R(i).add(Zt(o))):(r=r.R(n),r=r.add(Zt(o)))}return r}var xl=4294967296,cs=th(0),Dl=th(1),Lf=th(16777216);x=ye.prototype;x.ea=function(){if(Pt(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:xl+r)*e,e*=xl}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(_n(this))return"0";if(Pt(this))return"-"+Ke(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,r="";;){var s=oa(n,e).g;n=ia(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,_n(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function _n(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Pt(t){return t.h==-1}x.X=function(t){return t=ia(this,t),Pt(t)?-1:_n(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new ye(n,~t.h).add(Dl)}x.abs=function(){return Pt(this)?Ke(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new ye(n,n[n.length-1]&-2147483648?-1:0)};function ia(t,e){return t.add(Ke(e))}x.R=function(t){if(_n(this)||_n(t))return cs;if(Pt(this))return Pt(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(Pt(t))return Ke(this.R(Ke(t)));if(0>this.X(Lf)&&0>t.X(Lf))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,vo(n,2*r+2*s),n[2*r+2*s+1]+=i*c,vo(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,vo(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,vo(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new ye(n,0)};function vo(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function $s(t,e){this.g=t,this.h=e}function oa(t,e){if(_n(e))throw Error("division by zero");if(_n(t))return new $s(cs,cs);if(Pt(t))return e=oa(Ke(t),e),new $s(Ke(e.g),Ke(e.h));if(Pt(e))return e=oa(t,Ke(e)),new $s(Ke(e.g),e.h);if(30<t.g.length){if(Pt(t)||Pt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Dl,r=e;0>=r.X(t);)n=Ff(n),r=Ff(r);var s=Qr(n,1),i=Qr(r,1);for(r=Qr(r,2),n=Qr(n,2);!_n(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Qr(r,1),n=Qr(n,1)}return e=ia(t,s.R(e)),new $s(s,e)}for(s=cs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Zt(n),o=i.R(e);Pt(o)||0<o.X(t);)n-=r,i=Zt(n),o=i.R(e);_n(i)&&(i=Dl),s=s.add(i),t=ia(t,o)}return new $s(s,t)}x.gb=function(t){return oa(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new ye(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new ye(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new ye(n,this.h^t.h)};function Ff(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new ye(n,t.h)}function Qr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new ye(s,t.h)}sa.prototype.createWebChannel=sa.prototype.g;At.prototype.send=At.prototype.u;At.prototype.open=At.prototype.m;At.prototype.close=At.prototype.close;qa.NO_ERROR=0;qa.TIMEOUT=8;qa.HTTP_ERROR=6;D_.COMPLETE="complete";N_.EventType=Ki;Ki.OPEN="a";Ki.CLOSE="b";Ki.ERROR="c";Ki.MESSAGE="d";He.prototype.listen=He.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;Ht.prototype.digest=Ht.prototype.l;Ht.prototype.reset=Ht.prototype.reset;Ht.prototype.update=Ht.prototype.j;ye.prototype.add=ye.prototype.add;ye.prototype.multiply=ye.prototype.R;ye.prototype.modulo=ye.prototype.gb;ye.prototype.compare=ye.prototype.X;ye.prototype.toNumber=ye.prototype.ea;ye.prototype.toString=ye.prototype.toString;ye.prototype.getBits=ye.prototype.D;ye.fromNumber=Zt;ye.fromString=m1;var K4=function(){return new sa},G4=function(){return ja()},$c=qa,Q4=D_,Y4=Br,Uf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Eo=N_,X4=Oe,J4=Ht,ls=ye;const $f="@firebase/firestore";/**
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
 */let Os="10.7.0";/**
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
 */const xr=new Pa("@firebase/firestore");function Bs(){return xr.logLevel}function $(t,...e){if(xr.logLevel<=se.DEBUG){const n=e.map(nh);xr.debug(`Firestore (${Os}): ${t}`,...n)}}function In(t,...e){if(xr.logLevel<=se.ERROR){const n=e.map(nh);xr.error(`Firestore (${Os}): ${t}`,...n)}}function vs(t,...e){if(xr.logLevel<=se.WARN){const n=e.map(nh);xr.warn(`Firestore (${Os}): ${t}`,...n)}}function nh(t){if(typeof t=="string")return t;try{/**
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
 */function G(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw In(e),new Error(e)}function Ie(t,e){t||G()}function Z(t,e){return t}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Mt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class _1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Z4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class eR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class tR{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new vn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new vn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new vn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new _1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new tt(e)}}class nR{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class rR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new nR(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class sR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new sR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function oR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class y1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=oR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function Es(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Le(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?he(this.nanoseconds,e.nanoseconds):he(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Le(0,0))}static max(){return new X(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends Pi{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const aR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Pi{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return aR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Re.fromString(e))}static fromName(e){return new H(Re.fromString(e).popFirst(5))}static empty(){return new H(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Re(e.slice()))}}function cR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Yn(s,H.empty(),e)}function lR(t){return new Yn(t.readTime,t.key,-1)}class Yn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Yn(X.min(),H.empty(),-1)}static max(){return new Yn(X.max(),H.empty(),-1)}}function uR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const hR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Ji(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==hR)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(s=>s?A.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new A((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new A((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Zi(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class rh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}rh._e=-1;function Ja(t){return t==null}function aa(t){return t===0&&1/t==-1/0}function fR(t){return typeof t=="number"&&Number.isInteger(t)&&!aa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Bf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function v1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wo(this.root,e,this.comparator,!0)}}class wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new jf(this.data.getIterator())}getIteratorFrom(e){return new jf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class jf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class $t{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new $t([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new $t(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Es(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class E1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new E1("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const pR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Xn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=pR.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function sh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ih(t){const e=t.mapValue.fields.__previous_value__;return sh(e)?ih(e):e}function ki(t){const e=Xn(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class gR{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class Oi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Oi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Oi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Io={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?sh(t)?4:mR(t)?9007199254740991:10:G()}function cn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ki(t).isEqual(ki(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Xn(s.timestampValue),a=Xn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?aa(o)===aa(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Es(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Bf(o)!==Bf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!cn(o[c],a[c])))return!1;return!0}(t,e);default:return G()}}function xi(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ws(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),c=Ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return qf(t.timestampValue,e.timestampValue);case 4:return qf(ki(t),ki(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Dr(i),c=Dr(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=he(a[l],c[l]);if(u!==0)return u}return he(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(Ve(i.latitude),Ve(o.latitude));return a!==0?a:he(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ws(a[l],c[l]);if(u)return u}return he(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Io.mapValue&&o===Io.mapValue)return 0;if(i===Io.mapValue)return 1;if(o===Io.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=he(c[h],u[h]);if(d!==0)return d;const p=ws(a[c[h]],l[u[h]]);if(p!==0)return p}return he(c.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function qf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Xn(t),r=Xn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Is(t){return Nl(t)}function Nl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Xn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Nl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Nl(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function Hf(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Vl(t){return!!t&&"integerValue"in t}function oh(t){return!!t&&"arrayValue"in t}function zf(t){return!!t&&"nullValue"in t}function Wf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function mR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=oi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new kt(oi(this.value))}}function w1(t){const e=[];return xs(t.fields,(n,r)=>{const s=new Ge([n]);if(Mo(r)){const i=w1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new $t(e)}/**
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
 */class nt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ca{constructor(e,n){this.position=e,this.inclusive=n}}function Kf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=ws(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class la{constructor(e,n="asc"){this.field=e,this.dir=n}}function _R(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class I1{}class Me extends I1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vR(e,n,r):n==="array-contains"?new IR(e,r):n==="in"?new TR(e,r):n==="not-in"?new CR(e,r):n==="array-contains-any"?new AR(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new ER(e,r):new wR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ws(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(ws(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zt extends I1{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new zt(e,n)}matches(e){return T1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function T1(t){return t.op==="and"}function C1(t){return yR(t)&&T1(t)}function yR(t){for(const e of t.filters)if(e instanceof zt)return!1;return!0}function Ml(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Is(t.value);if(C1(t))return t.filters.map(e=>Ml(e)).join(",");{const e=t.filters.map(n=>Ml(n)).join(",");return`${t.op}(${e})`}}function A1(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof zt?function(r,s){return s instanceof zt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&A1(o,s.filters[a]),!0):!1}(t,e):void G()}function R1(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Is(n.value)}`}(t):t instanceof zt?function(n){return n.op.toString()+" {"+n.getFilters().map(R1).join(" ,")+"}"}(t):"Filter"}class vR extends Me{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class ER extends Me{constructor(e,n){super(e,"in",n),this.keys=b1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class wR extends Me{constructor(e,n){super(e,"not-in",n),this.keys=b1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function b1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class IR extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return oh(n)&&xi(n.arrayValue,this.value)}}class TR extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xi(this.value.arrayValue,n)}}class CR extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(xi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xi(this.value.arrayValue,n)}}class AR extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!oh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xi(this.value.arrayValue,r))}}/**
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
 */class RR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Qf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new RR(t,e,n,r,s,i,o)}function ah(t){const e=Z(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Ml(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ja(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Is(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Is(r)).join(",")),e.ce=n}return e.ce}function ch(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_R(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!A1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gf(t.startAt,e.startAt)&&Gf(t.endAt,e.endAt)}function Ll(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class eo{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function bR(t,e,n,r,s,i,o,a){return new eo(t,e,n,r,s,i,o,a)}function lh(t){return new eo(t)}function Yf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function S1(t){return t.collectionGroup!==null}function ai(t){const e=Z(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(Ge.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new la(i,r))}),n.has(Ge.keyField().canonicalString())||e.le.push(new la(Ge.keyField(),r))}return e.le}function rn(t){const e=Z(t);return e.he||(e.he=SR(e,ai(t))),e.he}function SR(t,e){if(t.limitType==="F")return Qf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new la(s.field,i)});const n=t.endAt?new ca(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ca(t.startAt.position,t.startAt.inclusive):null;return Qf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Fl(t,e){const n=t.filters.concat([e]);return new eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ul(t,e,n){return new eo(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Za(t,e){return ch(rn(t),rn(e))&&t.limitType===e.limitType}function P1(t){return`${ah(rn(t))}|lt:${t.limitType}`}function Xr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>R1(s)).join(", ")}]`),Ja(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Is(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Is(s)).join(",")),`Target(${r})`}(rn(t))}; limitType=${t.limitType})`}function ec(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Kf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ai(r),s)||r.endAt&&!function(o,a,c){const l=Kf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ai(r),s))}(t,e)}function PR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function k1(t){return(e,n)=>{let r=!1;for(const s of ai(t)){const i=kR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function kR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ws(c,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return v1(this.inner)}size(){return this.innerSize}}/**
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
 */const OR=new Pe(H.comparator);function Tn(){return OR}const O1=new Pe(H.comparator);function Gs(...t){let e=O1;for(const n of t)e=e.insert(n.key,n);return e}function x1(t){let e=O1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function mr(){return ci()}function D1(){return ci()}function ci(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const xR=new Pe(H.comparator),DR=new Ye(H.comparator);function re(...t){let e=DR;for(const n of t)e=e.add(n);return e}const NR=new Ye(he);function VR(){return NR}/**
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
 */function N1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:aa(e)?"-0":e}}function V1(t){return{integerValue:""+t}}function MR(t,e){return fR(e)?V1(e):N1(t,e)}/**
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
 */class tc{constructor(){this._=void 0}}function LR(t,e,n){return t instanceof Di?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&sh(i)&&(i=ih(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ni?L1(t,e):t instanceof Vi?F1(t,e):function(s,i){const o=M1(s,i),a=Xf(o)+Xf(s.Ie);return Vl(o)&&Vl(s.Ie)?V1(a):N1(s.serializer,a)}(t,e)}function FR(t,e,n){return t instanceof Ni?L1(t,e):t instanceof Vi?F1(t,e):n}function M1(t,e){return t instanceof ua?function(r){return Vl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class Di extends tc{}class Ni extends tc{constructor(e){super(),this.elements=e}}function L1(t,e){const n=U1(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends tc{constructor(e){super(),this.elements=e}}function F1(t,e){let n=U1(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class ua extends tc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Xf(t){return Ve(t.integerValue||t.doubleValue)}function U1(t){return oh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class UR{constructor(e,n){this.field=e,this.transform=n}}function $R(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ni&&s instanceof Ni||r instanceof Vi&&s instanceof Vi?Es(r.elements,s.elements,cn):r instanceof ua&&s instanceof ua?cn(r.Ie,s.Ie):r instanceof Di&&s instanceof Di}(t.transform,e.transform)}class BR{constructor(e,n){this.version=e,this.transformResults=n}}class sn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new sn}static exists(e){return new sn(void 0,e)}static updateTime(e){return new sn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class nc{}function $1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new j1(t.key,sn.none()):new to(t.key,t.data,sn.none());{const n=t.data,r=kt.empty();let s=new Ye(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new jr(t.key,r,new $t(s.toArray()),sn.none())}}function jR(t,e,n){t instanceof to?function(s,i,o){const a=s.value.clone(),c=Zf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof jr?function(s,i,o){if(!Lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Zf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(B1(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function li(t,e,n,r){return t instanceof to?function(i,o,a,c){if(!Lo(i.precondition,o))return a;const l=i.value.clone(),u=ep(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof jr?function(i,o,a,c){if(!Lo(i.precondition,o))return a;const l=ep(i.fieldTransforms,c,o),u=o.data;return u.setAll(B1(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function qR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=M1(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function Jf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Es(r,s,(i,o)=>$R(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class to extends nc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class jr extends nc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function B1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Zf(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,FR(o,a,n[s]))}return r}function ep(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,LR(i,o,e))}return r}class j1 extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class HR extends nc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&jR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=D1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=$1(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&Es(this.mutations,e.mutations,(n,r)=>Jf(n,r))&&Es(this.baseMutations,e.baseMutations,(n,r)=>Jf(n,r))}}class uh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return xR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new uh(e,n,r,s)}}/**
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
 */class WR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,oe;function GR(t){switch(t){default:return G();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function q1(t){if(t===void 0)return In("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ne.OK:return w.OK;case Ne.CANCELLED:return w.CANCELLED;case Ne.UNKNOWN:return w.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return w.INTERNAL;case Ne.UNAVAILABLE:return w.UNAVAILABLE;case Ne.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ne.NOT_FOUND:return w.NOT_FOUND;case Ne.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ne.ABORTED:return w.ABORTED;case Ne.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ne.DATA_LOSS:return w.DATA_LOSS;default:return G()}}(oe=Ne||(Ne={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function QR(){return new TextEncoder}/**
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
 */const YR=new ls([4294967295,4294967295],0);function tp(t){const e=QR().encode(t),n=new J4;return n.update(e),new Uint8Array(n.digest())}function np(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new ls([n,r],0),new ls([s,i],0)]}class hh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qs(`Invalid padding: ${n}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=ls.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(ls.fromNumber(r)));return s.compare(YR)===1&&(s=new ls([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=tp(e),[r,s]=np(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new hh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=tp(e),[r,s]=np(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class rc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,no.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new rc(X.min(),s,new Pe(he),Tn(),re())}}class no{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new no(r,n,re(),re(),re())}}/**
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
 */class Fo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class H1{constructor(e,n){this.targetId=e,this.fe=n}}class z1{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class rp{constructor(){this.ge=0,this.pe=ip(),this.ye=at.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new no(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=ip()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ie(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class XR{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tn(),this.Qe=sp(),this.Ke=new Pe(he)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Ll(i))if(r===0){const o=new H(i.path);this.We(n,o,nt.newNoDocument(o,X.min()))}else Ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Dr(r).toUint8Array()}catch(c){if(c instanceof E1)return vs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new hh(o,s,i)}catch(c){return vs(c instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Ll(a.target)){const c=new H(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,nt.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new rc(e,n,this.Ke,this.qe,r);return this.qe=Tn(),this.Qe=sp(),this.Ke=new Pe(he),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new rp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ye(he),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new rp),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function sp(){return new Pe(H.comparator)}function ip(){return new Pe(H.comparator)}const JR={asc:"ASCENDING",desc:"DESCENDING"},ZR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},e5={and:"AND",or:"OR"};class t5{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function $l(t,e){return t.useProto3Json||Ja(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function W1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function n5(t,e){return ha(t,e.toTimestamp())}function on(t){return Ie(!!t),X.fromTimestamp(function(n){const r=Xn(n);return new Le(r.seconds,r.nanos)}(t))}function dh(t,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function K1(t){const e=Re.fromString(t);return Ie(X1(e)),e}function Bl(t,e){return dh(t.databaseId,e.path)}function Bc(t,e){const n=K1(e);if(n.get(1)!==t.databaseId.projectId)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(G1(n))}function jl(t,e){return dh(t.databaseId,e)}function r5(t){const e=K1(t);return e.length===4?Re.emptyPath():G1(e)}function ql(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function G1(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function op(t,e,n){return{name:Bl(t,e),fields:n.value.mapValue.fields}}function s5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ie(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:q1(l.code);return new U(u,l.message||"")}(o);n=new z1(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Bc(t,r.document.name),i=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):X.min(),a=new kt({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Fo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Bc(t,r.document),i=r.readTime?on(r.readTime):X.min(),o=nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Fo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Bc(t,r.document),i=r.removedTargetIds||[];n=new Fo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KR(s,i),a=r.targetId;n=new H1(a,o)}}return n}function i5(t,e){let n;if(e instanceof to)n={update:op(t,e.key,e.value)};else if(e instanceof j1)n={delete:Bl(t,e.key)};else if(e instanceof jr)n={update:op(t,e.key,e.data),updateMask:p5(e.fieldMask)};else{if(!(e instanceof HR))return G();n={verify:Bl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof Di)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ni)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ua)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:n5(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function o5(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?on(s.updateTime):on(i);return o.isEqual(X.min())&&(o=on(i)),new BR(o,s.transformResults||[])}(n,e))):[]}function a5(t,e){return{documents:[jl(t,e.path)]}}function c5(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=jl(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=jl(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return Y1(zt.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Jr(h.field),direction:h5(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=$l(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function l5(t){let e=r5(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Q1(h);return d instanceof zt&&C1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new la(Zr(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ja(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new ca(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new ca(p,d)}(n.endAt)),bR(e,s,o,i,a,"F",c,l)}function u5(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Q1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Zr(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Zr(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zr(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Zr(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Zr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return zt.create(n.compositeFilter.filters.map(r=>Q1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function h5(t){return JR[t]}function d5(t){return ZR[t]}function f5(t){return e5[t]}function Jr(t){return{fieldPath:t.canonicalString()}}function Zr(t){return Ge.fromServerFormat(t.fieldPath)}function Y1(t){return t instanceof Me?function(n){if(n.op==="=="){if(Wf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NAN"}};if(zf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Wf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NAN"}};if(zf(n.value))return{unaryFilter:{field:Jr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Jr(n.field),op:d5(n.op),value:n.value}}}(t):t instanceof zt?function(n){const r=n.getFilters().map(s=>Y1(s));return r.length===1?r[0]:{compositeFilter:{op:f5(n.op),filters:r}}}(t):G()}function p5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function X1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Un{constructor(e,n,r,s,i=X.min(),o=X.min(),a=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Un(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Un(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class g5{constructor(e){this.ut=e}}function m5(t){const e=l5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ul(e,e.limit,"L"):e}/**
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
 */class _5{constructor(){this.on=new y5}addToCollectionParentIndex(e,n){return this.on.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}deleteAllFieldIndexes(e){return A.resolve()}createTargetIndexes(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Yn.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class y5{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Re.comparator)).toArray()}}/**
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
 */class Ts{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new Ts(0)}static Nn(){return new Ts(-1)}}/**
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
 */class v5{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class E5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class w5{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&li(r.mutation,s,$t.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=mr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Gs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=mr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tn();const o=ci(),a=function(){return ci()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof jr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),li(u.mutation,l,u.mutation.getFieldMask(),Le.now())):o.set(l.key,$t.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new E5(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ci();let s=new Pe((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||$t.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=D1();u.forEach(d=>{if(!i.has(d)){const p=$1(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):S1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):A.resolve(mr());let a=-1,c=i;return o.next(l=>A.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?A.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:x1(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Gs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,i).next(a=>A.forEach(a,c=>{const l=function(h,d){return new eo(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,nt.newInvalidDocument(u)))});let a=Gs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&li(u.mutation,l,$t.empty(),Le.now()),ec(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class I5{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return A.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),A.resolve()}getNamedQuery(e,n){return A.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:m5(s.bundledQuery),readTime:on(s.readTime)}}(n)),A.resolve()}}/**
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
 */class T5{constructor(){this.overlays=new Pe(H.comparator),this.lr=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=mr();return A.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const s=mr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return A.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=mr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=mr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return A.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new WR(n,r));let i=this.lr.get(n);i===void 0&&(i=re(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class fh{constructor(){this.hr=new Ye(Be.Pr),this.Ir=new Ye(Be.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Be(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new H(new Re([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new Re([])),r=new Be(n,e),s=new Be(n,e+1);let i=re();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||he(e.gr,n.gr)}static Tr(e,n){return he(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
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
 */class C5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ye(Be.Pr)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return A.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),A.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(he);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),A.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Be(new H(i),0);let a=new Ye(he);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),A.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return A.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Be(n,0),s=this.yr.firstAfterOrEqual(r);return A.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class A5{constructor(e){this.Cr=e,this.docs=function(){return new Pe(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),A.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||uR(lR(u),r)<=0||(s.has(u.key)||ec(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}vr(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new R5(this)}getSize(e){return A.resolve(this.size)}}class R5 extends v5{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class b5{constructor(e){this.persistence=e,this.Fr=new Ds(n=>ah(n),ch),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new fh,this.targetCount=0,this.Nr=Ts.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),A.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new Ts(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.kn(n),A.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),A.waitFor(i).next(()=>s)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),A.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Or.containsKey(n))}}/**
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
 */class S5{constructor(e,n){this.Br={},this.overlays={},this.Lr=new rh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new b5(this),this.indexManager=new _5,this.remoteDocumentCache=function(s){return new A5(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new g5(n),this.Kr=new I5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new T5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new C5(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new P5(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return A.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class P5 extends dR{constructor(e){super(),this.currentSequenceNumber=e}}class ph{constructor(e){this.persistence=e,this.Gr=new fh,this.zr=null}static jr(e){return new ph(e)}get Hr(){if(this.zr)return this.zr;throw G()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),A.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Hr,r=>{const s=H.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return A.or([()=>A.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class gh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gh(e,n.fromCache,r,s)}}/**
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
 */class k5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class O5{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new k5;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Bs()<=se.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Xr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),A.resolve()):(Bs()<=se.DEBUG&&$("QueryEngine","Query:",Xr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Bs()<=se.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Xr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,rn(n))):A.resolve())}zi(e,n){if(Yf(n))return A.resolve(null);let r=rn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ul(n,null,"F"),r=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Ul(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return Yf(n)||s.isEqual(X.min())?A.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?A.resolve(null):(Bs()<=se.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Xr(n)),this.Xi(e,o,n,cR(s,-1)).next(a=>a))})}Yi(e,n){let r=new Ye(k1(e));return n.forEach((s,i)=>{ec(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Bs()<=se.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Xr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Yn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class x5{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Pe(he),this.ns=new Ds(i=>ah(i),ch),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w5(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function D5(t,e,n,r){return new x5(t,e,n,r)}async function J1(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function N5(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=A.resolve();return d.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(T=>{const E=l.docVersions.get(y);Ie(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Z1(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function V5(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(at.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(T,E,S){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=Tn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(M5(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(X.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return A.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function M5(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function L5(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function F5(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,A.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new Un(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function Hl(t,e,n){const r=Z(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Zi(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function ap(t,e,n){const r=Z(t);let s=X.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Z(c),d=h.ns.get(u);return d!==void 0?A.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,rn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:re())).next(a=>(U5(r,PR(e),a),{documents:a,ls:i})))}function U5(t,e,n){let r=t.rs.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class cp{constructor(){this.activeTargetIds=VR()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $5{constructor(){this.eo=new cp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new cp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class B5{ro(e){}shutdown(){}}/**
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
 */class lp{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let To=null;function jc(){return To===null?To=function(){return 268435456+Math.round(2147483648*Math.random())}():To++,"0x"+To.toString(16)}/**
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
 */const j5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class q5{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const et="WebChannelConnection";class H5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=jc(),c=this.So(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw vs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=j5[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=jc();return new Promise((o,a)=>{const c=new X4;c.setWithCredentials(!0),c.listenOnce(Q4.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case $c.NO_ERROR:const u=c.getResponseJson();$(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case $c.TIMEOUT:$(et,`RPC '${e}' ${i} timed out`),a(new U(w.DEADLINE_EXCEEDED,"Request time out"));break;case $c.HTTP_ERROR:const h=c.getStatus();if($(et,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(S)>=0?S:w.UNKNOWN}(p.status);a(new U(y,p.message))}else a(new U(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(w.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(et,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=jc(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=K4(),a=G4(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");$(et,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new q5({co:E=>{p?$(et,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||($(et,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),$(et,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},lo:()=>h.close()}),T=(E,S,D)=>{E.listen(S,N=>{try{D(N)}catch(B){setTimeout(()=>{throw B},0)}})};return T(h,Eo.EventType.OPEN,()=>{p||$(et,`RPC '${e}' stream ${s} transport opened.`)}),T(h,Eo.EventType.CLOSE,()=>{p||(p=!0,$(et,`RPC '${e}' stream ${s} transport closed`),y.Ro())}),T(h,Eo.EventType.ERROR,E=>{p||(p=!0,vs(et,`RPC '${e}' stream ${s} transport errored:`,E),y.Ro(new U(w.UNAVAILABLE,"The operation could not be completed")))}),T(h,Eo.EventType.MESSAGE,E=>{var S;if(!p){const D=E.data[0];Ie(!!D);const N=D,B=N.error||((S=N[0])===null||S===void 0?void 0:S.error);if(B){$(et,`RPC '${e}' stream ${s} received error:`,B);const L=B.status;let ie=function(te){const we=Ne[te];if(we!==void 0)return q1(we)}(L),me=B.message;ie===void 0&&(ie=w.INTERNAL,me="Unknown error status: "+L+" with message "+B.message),p=!0,y.Ro(new U(ie,me)),h.close()}else $(et,`RPC '${e}' stream ${s} received:`,D),y.Vo(D)}}),T(a,Y4.STAT_EVENT,E=>{E.stat===Uf.PROXY?$(et,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===Uf.NOPROXY&&$(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function qc(){return typeof document<"u"?document:null}/**
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
 */function sc(t){return new t5(t,!0)}/**
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
 */class ey{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class ty{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ey(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new U(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class z5 extends ty{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=s5(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?on(o.readTime):X.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=ql(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Ll(c)?{documents:a5(i,c)}:{query:c5(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=W1(i,o.resumeToken);const l=$l(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=ha(i,o.snapshotVersion.toTimestamp());const l=$l(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=u5(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=ql(this.serializer),n.removeTarget=e,this.e_(n)}}class W5 extends ty{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=o5(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.I_(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=ql(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>i5(this.serializer,r))};this.e_(n)}}/**
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
 */class K5 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(w.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(w.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class G5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(In(n),this.f_=!1):$("OnlineStateTracker",n)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
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
 */class Q5{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{qr(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Z(c);l.C_.add(4),await ro(l),l.M_.set("Unknown"),l.C_.delete(4),await ic(l)}(this))})}),this.M_=new G5(r,s)}}async function ic(t){if(qr(t))for(const e of t.v_)await e(!0)}async function ro(t){for(const e of t.v_)await e(!1)}function ny(t,e){const n=Z(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),yh(n)?_h(n):Ns(n).Ho()&&mh(n,e))}function ry(t,e){const n=Z(t),r=Ns(n);n.D_.delete(e),r.Ho()&&sy(n,e),n.D_.size===0&&(r.Ho()?r.Zo():qr(n)&&n.M_.set("Unknown"))}function mh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).u_(e)}function sy(t,e){t.x_.Oe(e),Ns(t).c_(e)}function _h(t){t.x_=new XR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.M_.g_()}function yh(t){return qr(t)&&!Ns(t).jo()&&t.D_.size>0}function qr(t){return Z(t).C_.size===0}function iy(t){t.x_=void 0}async function Y5(t){t.D_.forEach((e,n)=>{mh(t,e)})}async function X5(t,e){iy(t),yh(t)?(t.M_.w_(e),_h(t)):t.M_.set("Unknown")}async function J5(t,e,n){if(t.M_.set("Online"),e instanceof z1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(t,r)}else if(e instanceof Fo?t.x_.$e(e):e instanceof H1?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(X.min()))try{const r=await Z1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),sy(i,c);const h=new Un(u.target,c,l,u.sequenceNumber);mh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await da(t,r)}}async function da(t,e,n){if(!Zi(e))throw e;t.C_.add(1),await ro(t),t.M_.set("Offline"),n||(n=()=>Z1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await ic(t)})}function oy(t,e){return e().catch(n=>da(t,n,e))}async function oc(t){const e=Z(t),n=Jn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Z5(e);)try{const s=await L5(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,eb(e,s)}catch(s){await da(e,s)}ay(e)&&cy(e)}function Z5(t){return qr(t)&&t.b_.length<10}function eb(t,e){t.b_.push(e);const n=Jn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function ay(t){return qr(t)&&!Jn(t).jo()&&t.b_.length>0}function cy(t){Jn(t).start()}async function tb(t){Jn(t).E_()}async function nb(t){const e=Jn(t);for(const n of t.b_)e.P_(n.mutations)}async function rb(t,e,n){const r=t.b_.shift(),s=uh.from(r,e,n);await oy(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await oc(t)}async function sb(t,e){e&&Jn(t).h_&&await async function(r,s){if(function(o){return GR(o)&&o!==w.ABORTED}(s.code)){const i=r.b_.shift();Jn(r).Yo(),await oy(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oc(r)}}(t,e),ay(t)&&cy(t)}async function up(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=qr(n);n.C_.add(3),await ro(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await ic(n)}async function ib(t,e){const n=Z(t);e?(n.C_.delete(2),await ic(n)):e||(n.C_.add(2),await ro(n),n.M_.set("Unknown"))}function Ns(t){return t.O_||(t.O_=function(n,r,s){const i=Z(n);return i.A_(),new z5(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:Y5.bind(null,t),Io:X5.bind(null,t),a_:J5.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),yh(t)?_h(t):t.M_.set("Unknown")):(await t.O_.stop(),iy(t))})),t.O_}function Jn(t){return t.N_||(t.N_=function(n,r,s){const i=Z(n);return i.A_(),new W5(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:tb.bind(null,t),Io:sb.bind(null,t),T_:nb.bind(null,t),I_:rb.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await oc(t)):(await t.N_.stop(),t.b_.length>0&&($("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class vh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new vn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new vh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Eh(t,e){if(In("AsyncQueue",`${e}: ${t}`),Zi(t))return new U(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class us{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new us(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof us)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new us;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class hp{constructor(){this.B_=new Pe(H.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):G():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Cs{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Cs(e,n,us.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Za(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ob{constructor(){this.k_=void 0,this.listeners=[]}}class ab{constructor(){this.queries=new Ds(e=>P1(e),Za),this.onlineState="Unknown",this.q_=new Set}}async function ly(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new ob),s)try{i.k_=await n.onListen(r)}catch(o){const a=Eh(o,`Initialization of query '${Xr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&wh(n)}async function uy(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function cb(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&wh(n)}function lb(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function wh(t){t.q_.forEach(e=>{e.next()})}class hy{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Cs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Cs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class dy{constructor(e){this.key=e}}class fy{constructor(e){this.key=e}}class ub{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=re(),this.mutatedKeys=re(),this._a=k1(e),this.aa=new us(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new hp,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=ec(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?y!==T&&(r.track({type:3,doc:p}),E=!0):this.ha(d,p)||(r.track({type:2,doc:p}),E=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,y){const T=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return T(p)-T(y)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Cs(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new hp,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new fy(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new dy(r))}),n}da(e){this.ia=e.ls,this.oa=re();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Cs.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class hb{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class db{constructor(e){this.key=e,this.Ra=!1}}class fb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ds(a=>P1(a),Za),this.fa=new Map,this.ga=new Set,this.pa=new Pe(H.comparator),this.ya=new Map,this.wa=new fh,this.Sa={},this.ba=new Map,this.Da=Ts.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function pb(t,e){const n=Cb(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await F5(n.localStore,rn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await gb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&ny(n.remoteStore,o)}return s}async function gb(t,e,n,r,s){t.va=(h,d,p)=>async function(T,E,S,D){let N=E.view.ca(S);N.Zi&&(N=await ap(T.localStore,E.query,!1).then(({documents:me})=>E.view.ca(me,N)));const B=D&&D.targetChanges.get(E.targetId),L=D&&D.targetMismatches.get(E.targetId)!=null,ie=E.view.applyChanges(N,T.isPrimaryClient,B,L);return fp(T,E.targetId,ie.Ta),ie.snapshot}(t,h,d,p);const i=await ap(t.localStore,e,!0),o=new ub(e,i.ls),a=o.ca(i.documents),c=no.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);fp(t,n,l.Ta);const u=new hb(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function mb(t,e){const n=Z(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Za(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Hl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),ry(n.remoteStore,r.targetId),zl(n,r.targetId)}).catch(Ji)):(zl(n,r.targetId),await Hl(n.localStore,r.targetId,!0))}async function _b(t,e,n){const r=Ab(t);try{const s=await function(o,a){const c=Z(o),l=Le.now(),u=a.reduce((p,y)=>p.add(y.key),re());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Tn(),T=re();return c.ss.getEntries(p,u).next(E=>{y=E,y.forEach((S,D)=>{D.isValidDocument()||(T=T.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(E=>{h=E;const S=[];for(const D of a){const N=qR(D,h.get(D.key).overlayedDocument);N!=null&&S.push(new jr(D.key,N,w1(N.value.mapValue),sn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,S,a)}).next(E=>{d=E;const S=E.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(p,E.batchId,S)})}).then(()=>({batchId:d.batchId,changes:x1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Pe(he)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await so(r,s.changes),await oc(r.remoteStore)}catch(s){const i=Eh(s,"Failed to persist write");n.reject(i)}}async function py(t,e){const n=Z(t);try{const r=await V5(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Ie(o.Ra):s.removedDocuments.size>0&&(Ie(o.Ra),o.Ra=!1))}),await so(n,r,e)}catch(r){await Ji(r)}}function dp(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Z(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&wh(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function yb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Pe(H.comparator);o=o.insert(i,nt.newNoDocument(i,X.min()));const a=re().add(i),c=new rc(X.min(),new Map,new Pe(he),o,a);await py(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),Ih(r)}else await Hl(r.localStore,e,!1).then(()=>zl(r,e,n)).catch(Ji)}async function vb(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await N5(n.localStore,e);my(n,r,null),gy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await so(n,s)}catch(s){await Ji(s)}}async function Eb(t,e,n){const r=Z(t);try{const s=await function(o,a){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ie(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);my(r,e,n),gy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await so(r,s)}catch(s){await Ji(s)}}function gy(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function my(t,e,n){const r=Z(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||_y(t,r)})}function _y(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(ry(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),Ih(t))}function fp(t,e,n){for(const r of n)r instanceof dy?(t.wa.addReference(r.key,e),wb(t,r)):r instanceof fy?($("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||_y(t,r.key)):G()}function wb(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||($("SyncEngine","New document in limbo: "+n),t.ga.add(r),Ih(t))}function Ih(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(Re.fromString(e)),r=t.Da.next();t.ya.set(r,new db(n)),t.pa=t.pa.insert(n,r),ny(t.remoteStore,new Un(rn(lh(n.path)),r,"TargetPurposeLimboResolution",rh._e))}}async function so(t,e,n){const r=Z(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=gh.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=Z(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(l,d=>A.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>A.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Zi(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),y=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,T)}}}(r.localStore,i))}async function Ib(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await J1(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new U(w.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await so(n,r._s)}}function Tb(t,e){const n=Z(t),r=n.ya.get(e);if(r&&r.Ra)return re().add(r.key);{let s=re();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Cb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=py.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Tb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=yb.bind(null,e),e.Va.a_=cb.bind(null,e.eventManager),e.Va.Fa=lb.bind(null,e.eventManager),e}function Ab(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=vb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Eb.bind(null,e),e}class pp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=sc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return D5(this.persistence,new O5,e.initialUser,this.serializer)}createPersistence(e){return new S5(ph.jr,this.serializer)}createSharedClientState(e){return new $5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rb{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>dp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ib.bind(null,this.syncEngine),await ib(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ab}()}createDatastore(e){const n=sc(e.databaseInfo.databaseId),r=function(i){return new H5(i)}(e.databaseInfo);return function(i,o,a,c){return new K5(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new Q5(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>dp(this.syncEngine,n,0),function(){return lp.D()?new lp:new B5}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new fb(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);$("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await ro(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class yy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class bb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=y1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=Eh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Hc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await J1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function gp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Pb(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>up(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>up(e.remoteStore,i)),t._onlineComponents=e}function Sb(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Pb(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await Hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Sb(n))throw n;vs("Error using user provided cache. Falling back to memory cache: "+n),await Hc(t,new pp)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await Hc(t,new pp);return t._offlineComponents}async function vy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await gp(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await gp(t,new Rb))),t._onlineComponents}function kb(t){return vy(t).then(e=>e.syncEngine)}async function Ey(t){const e=await vy(t),n=e.eventManager;return n.onListen=pb.bind(null,e.syncEngine),n.onUnlisten=mb.bind(null,e.syncEngine),n}function Ob(t,e,n={}){const r=new vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new yy({next:d=>{o.enqueueAndForget(()=>uy(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new U(w.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new U(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new hy(lh(a.path),u,{includeMetadataChanges:!0,J_:!0});return ly(i,h)}(await Ey(t),t.asyncQueue,e,n,r)),r.promise}function xb(t,e,n={}){const r=new vn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new yy({next:d=>{o.enqueueAndForget(()=>uy(i,h)),d.fromCache&&c.source==="server"?l.reject(new U(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new hy(a,u,{includeMetadataChanges:!0,J_:!0});return ly(i,h)}(await Ey(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function wy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const mp=new Map;/**
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
 */function Iy(t,e,n){if(!n)throw new U(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Db(t,e,n,r){if(e===!0&&r===!0)throw new U(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function _p(t){if(!H.isDocumentKey(t))throw new U(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function yp(t){if(H.isDocumentKey(t))throw new U(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ac(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Zn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ac(t);throw new U(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class vp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Db("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class cc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new vp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new vp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Z4;switch(r.type){case"firstParty":return new rR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=mp.get(n);r&&($("ComponentProvider","Removing Datastore"),mp.delete(n),r.terminate())}(this),Promise.resolve()}}function Nb(t,e,n,r={}){var s;const i=(t=Zn(t,cc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&vs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=nm(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(l)}t._authCredentials=new eR(new _1(a,c))}}/**
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
 */class Vs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vs(this.firestore,e,this._query)}}class mt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new mt(this.firestore,e,this._key)}}class Wn extends Vs{constructor(e,n,r){super(e,n,lh(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new mt(this.firestore,null,new H(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function L6(t,e,...n){if(t=ke(t),Iy("collection","path",e),t instanceof cc){const r=Re.fromString(e,...n);return yp(r),new Wn(t,null,r)}{if(!(t instanceof mt||t instanceof Wn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return yp(r),new Wn(t.firestore,null,r)}}function Vb(t,e,...n){if(t=ke(t),arguments.length===1&&(e=y1.newId()),Iy("doc","path",e),t instanceof cc){const r=Re.fromString(e,...n);return _p(r),new mt(t,null,new H(r))}{if(!(t instanceof mt||t instanceof Wn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return _p(r),new mt(t.firestore,t instanceof Wn?t.converter:null,new H(r))}}/**
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
 */class Mb{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ey(this,"async_queue_retry"),this.iu=()=>{const n=qc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=qc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=qc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new vn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Zi(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=vh.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&G()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class io extends cc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Mb}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ty(this),this._firestoreClient.terminate()}}function Lb(t,e){const n=typeof t=="object"?t:ka(),r=typeof t=="string"?t:e||"(default)",s=tr(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Zg("firestore");i&&Nb(s,...i)}return s}function Th(t){return t._firestoreClient||Ty(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ty(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new gR(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,wy(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new bb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class As{constructor(e){this._byteString=e}static fromBase64String(e){try{return new As(at.fromBase64String(e))}catch(n){throw new U(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new As(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Ch{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ah{constructor(e){this._methodName=e}}/**
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
 */class Rh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const Fb=/^__.*__$/;class Ub{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new jr(e,this.data,this.fieldMask,n,this.fieldTransforms):new to(e,this.data,n,this.fieldTransforms)}}function Cy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class bh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new bh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return fa(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(Cy(this.Iu)&&Fb.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class $b{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||sc(e)}pu(e,n,r,s=!1){return new bh({Iu:e,methodName:n,gu:r,path:Ge.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Sh(t){const e=t._freezeSettings(),n=sc(t._databaseId);return new $b(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Ay(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Sy("Data must be an object, but it was:",o,r);const a=Ry(r,o);let c,l;if(i.merge)c=new $t(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=jb(e,h,n);if(!o.contains(d))throw new U(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);Hb(u,d)||u.push(d)}c=new $t(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Ub(new kt(a),c,l)}class Ph extends Ah{_toFieldTransform(e){return new UR(e.path,new Di)}isEqual(e){return e instanceof Ph}}function Bb(t,e,n,r=!1){return kh(n,t.pu(r?4:3,e))}function kh(t,e){if(by(t=ke(t)))return Sy("Unsupported field value:",e,t),Ry(t,e);if(t instanceof Ah)return function(r,s){if(!Cy(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=kh(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:ha(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(r instanceof Rh)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof As)return{bytesValue:W1(s.serializer,r._byteString)};if(r instanceof mt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:dh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${ac(r)}`)}(t,e)}function Ry(t,e){const n={};return v1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,s)=>{const i=kh(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function by(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Rh||t instanceof As||t instanceof mt||t instanceof Ah)}function Sy(t,e,n){if(!by(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ac(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function jb(t,e,n){if((e=ke(e))instanceof Ch)return e._internalPath;if(typeof e=="string")return Py(t,e);throw fa("Field path arguments must be of type string or ",t,!1,void 0,n)}const qb=new RegExp("[~\\*/\\[\\]]");function Py(t,e,n){if(e.search(qb)>=0)throw fa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Ch(...e.split("."))._internalPath}catch{throw fa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function fa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(w.INVALID_ARGUMENT,a+t+c)}function Hb(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class ky{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new mt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new zb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Oh("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class zb extends ky{data(){return super.data()}}function Oh(t,e){return typeof e=="string"?Py(t,e):e instanceof Ch?e._internalPath:e._delegate._internalPath}/**
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
 */function Wb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class xh{}class Kb extends xh{}function F6(t,e,...n){let r=[];e instanceof xh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Dh).length,a=i.filter(c=>c instanceof lc).length;if(o>1||o>0&&a>0)throw new U(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class lc extends Kb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new lc(e,n,r)}_apply(e){const n=this._parse(e);return Oy(e._query,n),new Vs(e.firestore,e.converter,Fl(e._query,n))}_parse(e){const n=Sh(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){wp(h,u);const p=[];for(const y of h)p.push(Ep(c,i,y));d={arrayValue:{values:p}}}else d=Ep(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||wp(h,u),d=Bb(a,o,h,u==="in"||u==="not-in");return Me.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function U6(t,e,n){const r=e,s=Oh("where",t);return lc._create(s,r,n)}class Dh extends xh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Dh(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:zt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Oy(o,c),o=Fl(o,c)}(e._query,n),new Vs(e.firestore,e.converter,Fl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Ep(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new U(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!S1(e)&&n.indexOf("/")!==-1)throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!H.isDocumentKey(r))throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Hf(t,new H(r))}if(n instanceof mt)return Hf(t,n._key);throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ac(n)}.`)}function wp(t,e){if(!Array.isArray(t)||t.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Oy(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Gb{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Rh(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ih(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const n=Xn(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Ie(X1(r));const s=new Oi(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function xy(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Dy extends ky{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Oh("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Uo extends Dy{data(e={}){return super.data(e)}}class Qb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Uo(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Uo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ys(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Uo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ys(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Yb(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Yb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function $6(t){t=Zn(t,mt);const e=Zn(t.firestore,io);return Ob(Th(e),t._key).then(n=>Xb(e,t,n))}class Ny extends Gb{constructor(e){super(),this.firestore=e}convertBytes(e){return new As(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new mt(this.firestore,null,n)}}function B6(t){t=Zn(t,Vs);const e=Zn(t.firestore,io),n=Th(e),r=new Ny(e);return Wb(t._query),xb(n,t._query).then(s=>new Qb(e,r,t,s))}function j6(t,e,n){t=Zn(t,mt);const r=Zn(t.firestore,io),s=xy(t.converter,e,n);return Vy(r,[Ay(Sh(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,sn.none())])}function q6(t,e){const n=Zn(t.firestore,io),r=Vb(t),s=xy(t.converter,e);return Vy(n,[Ay(Sh(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,sn.exists(!1))]).then(()=>r)}function Vy(t,e){return function(r,s){const i=new vn;return r.asyncQueue.enqueueAndForget(async()=>_b(await kb(r),s,i)),i.promise}(Th(t),e)}function Xb(t,e,n){const r=n.docs.get(e._key),s=new Ny(t);return new Dy(t,s,e._key,r,new Ys(n.hasPendingWrites,n.fromCache),e.converter)}function H6(){return new Ph("serverTimestamp")}(function(e,n=!0){(function(s){Os=s})($r),qt(new Nt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new io(new tR(r.getProvider("auth-internal")),new iR(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),pt($f,"4.4.0",e),pt($f,"4.4.0","esm2017")})();/**
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
 */const My="firebasestorage.googleapis.com",Ly="storageBucket",Jb=2*60*1e3,Zb=10*60*1e3;/**
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
 */class De extends Mt{constructor(e,n,r=0){super(zc(e),`Firebase Storage: ${n} (${zc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return zc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xe||(xe={}));function zc(t){return"storage/"+t}function Nh(){const t="An unknown error occurred, please check the error payload for server response.";return new De(xe.UNKNOWN,t)}function eS(t){return new De(xe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function tS(t){return new De(xe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function nS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(xe.UNAUTHENTICATED,t)}function rS(){return new De(xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function sS(t){return new De(xe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function iS(){return new De(xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function oS(){return new De(xe.CANCELED,"User canceled the upload/download.")}function aS(t){return new De(xe.INVALID_URL,"Invalid URL '"+t+"'.")}function cS(t){return new De(xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function lS(){return new De(xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+Ly+"' property when initializing the app?")}function uS(){return new De(xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function hS(){return new De(xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function dS(t){return new De(xe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wl(t){return new De(xe.INVALID_ARGUMENT,t)}function Fy(){return new De(xe.APP_DELETED,"The Firebase app was deleted.")}function fS(t){return new De(xe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ui(t,e){return new De(xe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function js(t){throw new De(xe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class Tt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=Tt.makeFromUrl(e,n)}catch{return new Tt(e,"")}if(r.path==="")return r;throw cS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},T=n===My?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",S=new RegExp(`^https?://${T}/${s}/${E}`,"i"),N=[{regex:a,indices:c,postModify:i},{regex:p,indices:y,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let B=0;B<N.length;B++){const L=N[B],ie=L.regex.exec(e);if(ie){const me=ie[L.indices.bucket];let ee=ie[L.indices.path];ee||(ee=""),r=new Tt(me,ee),L.postModify(r);break}}if(r==null)throw aS(e);return r}}class pS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function gS(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(p,c())},E)}function d(){i&&clearTimeout(i)}function p(E,...S){if(l){d();return}if(E){d(),u.call(null,E,...S);return}if(c()||o){d(),u.call(null,E,...S);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let y=!1;function T(E){y||(y=!0,d(),!l&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function mS(t){t(!1)}/**
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
 */function _S(t){return t!==void 0}function yS(t){return typeof t=="object"&&!Array.isArray(t)}function Vh(t){return typeof t=="string"||t instanceof String}function Ip(t){return Mh()&&t instanceof Blob}function Mh(){return typeof Blob<"u"}function Tp(t,e,n,r){if(r<e)throw Wl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Wl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Lh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function Uy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Cr;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Cr||(Cr={}));/**
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
 */function vS(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class ES{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Co(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Cr.NO_ERROR,c=i.getStatus();if(!a||vS(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Cr.ABORT;r(!1,new Co(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Co(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());_S(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=Nh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Fy():oS();o(c)}else{const c=iS();o(c)}};this.canceled_?n(!1,new Co(!1,null,!0)):this.backoffId_=gS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&mS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Co{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function wS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function IS(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function TS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function CS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function AS(t,e,n,r,s,i,o=!0){const a=Uy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return TS(l,e),wS(l,n),IS(l,i),CS(l,r),new ES(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function RS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function bS(...t){const e=RS();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Mh())return new Blob(t);throw new De(xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function SS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function PS(t){if(typeof atob>"u")throw dS("base-64");return atob(t)}/**
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
 */const en={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Wc{constructor(e,n){this.data=e,this.contentType=n||null}}function kS(t,e){switch(t){case en.RAW:return new Wc($y(e));case en.BASE64:case en.BASE64URL:return new Wc(By(t,e));case en.DATA_URL:return new Wc(xS(e),DS(e))}throw Nh()}function $y(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function OS(t){let e;try{e=decodeURIComponent(t)}catch{throw ui(en.DATA_URL,"Malformed data URL.")}return $y(e)}function By(t,e){switch(t){case en.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ui(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case en.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ui(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=PS(e)}catch(s){throw s.message.includes("polyfill")?s:ui(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class jy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ui(en.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=NS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function xS(t){const e=new jy(t);return e.base64?By(en.BASE64,e.rest):OS(e.rest)}function DS(t){return new jy(t).contentType}function NS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Ln{constructor(e,n){let r=0,s="";Ip(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(Ip(this.data_)){const r=this.data_,s=SS(r,e,n);return s===null?null:new Ln(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Ln(r,!0)}}static getBlob(...e){if(Mh()){const n=e.map(r=>r instanceof Ln?r.data_:r);return new Ln(bS.apply(null,n))}else{const n=e.map(o=>Vh(o)?kS(en.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Ln(s,!0)}}uploadData(){return this.data_}}/**
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
 */function qy(t){let e;try{e=JSON.parse(t)}catch{return null}return yS(e)?e:null}/**
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
 */function VS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function MS(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Hy(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function LS(t,e){return e}class ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||LS}}let Ao=null;function FS(t){return!Vh(t)||t.length<2?t:Hy(t)}function zy(){if(Ao)return Ao;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return FS(o)}const n=new ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,t.push(s),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),Ao=t,Ao}function US(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new Tt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function $S(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return US(r,t),r}function Wy(t,e,n){const r=qy(e);return r===null?null:$S(t,r,n)}function BS(t,e,n,r){const s=qy(e);if(s===null||!Vh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Lh(d,n,r),y=Uy({alt:"media",token:l});return p+y})[0]}function jS(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class Ky{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Gy(t){if(!t)throw Nh()}function qS(t,e){function n(r,s){const i=Wy(t,s,e);return Gy(i!==null),i}return n}function HS(t,e){function n(r,s){const i=Wy(t,s,e);return Gy(i!==null),BS(i,s,t.host,t._protocol)}return n}function Qy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=rS():s=nS():n.getStatus()===402?s=tS(t.bucket):n.getStatus()===403?s=sS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function zS(t){const e=Qy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=eS(t.path)),i.serverResponse=s.serverResponse,i}return n}function WS(t,e,n){const r=e.fullServerUrl(),s=Lh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new Ky(s,i,HS(t,n),o);return a.errorHandler=zS(e),a}function KS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function GS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=KS(null,e)),r}function QS(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let B=0;B<2;B++)N=N+Math.random().toString().slice(2);return N}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=GS(e,r,s),u=jS(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Ln.getBlob(h,r,d);if(p===null)throw uS();const y={name:l.fullPath},T=Lh(i,t.host,t._protocol),E="POST",S=t.maxUploadRetryTime,D=new Ky(T,E,qS(t,n),S);return D.urlParams=y,D.headers=o,D.body=p.uploadData(),D.errorHandler=Qy(e),D}class YS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Cr.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Cr.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Cr.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class XS extends YS{initXhr(){this.xhr_.responseType="text"}}function Yy(){return new XS}/**
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
 */class Vr{constructor(e,n){this._service=e,n instanceof Tt?this._location=n:this._location=Tt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vr(e,n)}get root(){const e=new Tt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Hy(this._location.path)}get storage(){return this._service}get parent(){const e=VS(this._location.path);if(e===null)return null;const n=new Tt(this._location.bucket,e);return new Vr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw fS(e)}}function JS(t,e,n){t._throwIfRoot("uploadBytes");const r=QS(t.storage,t._location,zy(),new Ln(e,!0),n);return t.storage.makeRequestWithTokens(r,Yy).then(s=>({metadata:s,ref:t}))}function ZS(t){t._throwIfRoot("getDownloadURL");const e=WS(t.storage,t._location,zy());return t.storage.makeRequestWithTokens(e,Yy).then(n=>{if(n===null)throw hS();return n})}function eP(t,e){const n=MS(t._location.path,e),r=new Tt(t._location.bucket,n);return new Vr(t.storage,r)}/**
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
 */function tP(t){return/^[A-Za-z]+:\/\//.test(t)}function nP(t,e){return new Vr(t,e)}function Xy(t,e){if(t instanceof Fh){const n=t;if(n._bucket==null)throw lS();const r=new Vr(n,n._bucket);return e!=null?Xy(r,e):r}else return e!==void 0?eP(t,e):t}function rP(t,e){if(e&&tP(e)){if(t instanceof Fh)return nP(t,e);throw Wl("To use ref(service, url), the first argument must be a Storage instance.")}else return Xy(t,e)}function Cp(t,e){const n=e==null?void 0:e[Ly];return n==null?null:Tt.makeFromBucketSpec(n,t)}function sP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:nm(s,t.app.options.projectId))}class Fh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=My,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Jb,this._maxUploadRetryTime=Zb,this._requests=new Set,s!=null?this._bucket=Tt.makeFromBucketSpec(s,this._host):this._bucket=Cp(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Tt.makeFromBucketSpec(this._url,e):this._bucket=Cp(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Tp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Tp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new pS(Fy());{const o=AS(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const Ap="@firebase/storage",Rp="0.12.0";/**
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
 */const Jy="storage";function z6(t,e,n){return t=ke(t),JS(t,e,n)}function W6(t){return t=ke(t),ZS(t)}function K6(t,e){return t=ke(t),rP(t,e)}function iP(t=ka(),e){t=ke(t);const r=tr(t,Jy).getImmediate({identifier:e}),s=Zg("storage");return s&&oP(r,...s),r}function oP(t,e,n,r={}){sP(t,e,n,r)}function aP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Fh(n,r,s,e,$r)}function cP(){qt(new Nt(Jy,aP,"PUBLIC").setMultipleInstances(!0)),pt(Ap,Rp,""),pt(Ap,Rp,"esm2017")}cP();const lP={apiKey:"AIzaSyB1pFFpjNdLmk0uGNBMFb8IrZvsFWXA7MQ",authDomain:"gaming-store-32ee2.firebaseapp.com",projectId:"gaming-store-32ee2",storageBucket:"gaming-store-32ee2.appspot.com",messagingSenderId:"724097093017",appId:"1:724097093017:web:b9f27d7e3eb8ddc017d708",measurementId:"G-HE4PQQRHE9"},uP=cm(lP);qA(uP);const G6=iP(),Q6=Lb(),Mr=pC(),Hr=NE("session",()=>{const t=Kg(),e=je({}),n=je(!1),r=je(!1),s=je(""),i=["hapis.hanipuddin@gmail.com","msauqi.ihsan324@gmail.com","aqielsyafiq11@gmail.com","tubagusalif1504@gmail.com","ahmadtaqi999@gmail.com"],o=()=>{xm(Mr,u=>{u?(n.value=!0,e.value=u,i.includes(e.value.email)&&(r.value=!0)):(e.value=null,n.value=!1,r.value=!1)})};function a(u){s.value=u}function c(){n.value||(t.push("/"),s.value="login")}function l(){n2(Mr).then(()=>{e.value=null,n.value=!1,r.value=!1,s.value=""}).catch(u=>{console.log(u)})}return lu(()=>{o()}),{user:e,isLoggedIn:n,isAdmin:r,modalOpen:s,initializeStore:o,logout:l,openModal:a,check:c}}),hP={class:"flex lg:flex-col gap-6 text-center relative text-sm items-center text-slate-300"},dP={key:0,class:"p-1 bg-red-600 rounded-full absolute -top-1 -right-1"},fP={key:0,class:"p-1 bg-red-600 rounded-full absolute -top-1 -right-1"},pP={__name:"NavIcon",setup(t){const e=Hr(),n=Gg(),r=je(!1),s=je("3"),i=o=>n.path.includes(o);return(o,a)=>{const c=lg("RouterLink");return de(),Se("div",hP,[b("div",{class:Li(["lg:h-9 h-2 max-lg:-bottom-5 w-9 ease-in-out duration-300 lg:-left-5 lg:w-2 absolute lg:py-2 bg-slate-200",{" max-lg:translate-x-[0px] lg:translate-y-[0px]":i("/")," max-lg:translate-x-[60px] lg:translate-y-[60px]":i("/products")," max-lg:translate-x-[120px] lg:translate-y-[120px]":i("/cart")," max-lg:translate-x-[180px] lg:translate-y-[180px]":i("/transaction")," max-lg:translate-x-[240px] lg:translate-y-[240px]":i("/admin")}])},null,2),ge(c,{class:"home w-9 h-9 nav-link relative",to:"/"},{default:hr(()=>[ge(Hw,{class:"home"})]),_:1}),ge(c,{class:"products w-9 h-9 nav-link relative",to:"/products"},{default:hr(()=>[ge(pI,{class:"product"})]),_:1}),le(e).user?(de(),vr(c,{key:0,class:"cart w-9 h-9 nav-link relative",to:"/cart"},{default:hr(()=>[ge(oI,{class:"cart"}),s.value>0?(de(),Se("div",dP)):ut("",!0)]),_:1})):ut("",!0),le(e).user?(de(),vr(c,{key:1,class:"trans w-9 h-9 nav-link relative",to:"/transaction"},{default:hr(()=>[ge(Jw,{class:"trans"}),r.value?(de(),Se("div",fP)):ut("",!0)]),_:1})):ut("",!0),le(e).user?(de(),vr(c,{key:2,class:"admin w-9 h-9 nav-link relative",to:"/admin/"},{default:hr(()=>[ge(II,{class:"product"})]),_:1})):ut("",!0)])}}},gP={},mP={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},_P=b("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),yP=b("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),vP=b("g",{id:"SVGRepo_icurrentColoronCarrier"},[b("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M8 6C8 3.79086 9.79086 2 12 2H17.5C19.9853 2 22 4.01472 22 6.5V17.5C22 19.9853 19.9853 22 17.5 22H12C9.79086 22 8 20.2091 8 18V17C8 16.4477 8.44772 16 9 16C9.55228 16 10 16.4477 10 17V18C10 19.1046 10.8954 20 12 20H17.5C18.8807 20 20 18.8807 20 17.5V6.5C20 5.11929 18.8807 4 17.5 4H12C10.8954 4 10 4.89543 10 6V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929L13.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L13.5858 11L12.2929 9.70711C11.9024 9.31658 11.9024 8.68342 12.2929 8.29289Z",fill:"currentColor"})],-1),EP=[_P,yP,vP];function wP(t,e){return de(),Se("svg",mP,EP)}const IP=er(gP,[["render",wP]]),TP={},CP={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},AP=b("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),RP=b("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),bP=b("g",{id:"SVGRepo_icurrentColoronCarrier"},[b("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z",fill:"currentColor"})],-1),SP=[AP,RP,bP];function PP(t,e){return de(),Se("svg",CP,SP)}const kP=er(TP,[["render",PP]]),OP={class:"bg-slate-600 z-40 max-lg:w-full lg:w-[89.2px] relative bottom-0 max-lg:fixed lg:static max-lg:p-5 lg:px-5 lg:h-auto flex justify-center"},xP={class:"flex lg:py-5 lg:fixed lg:top-0 lg:h-screen lg:flex-col gap-7"},DP=b("br",null,null,-1),NP=b("div",{class:"flex border-t border-gray-400"},null,-1),VP={class:"flex grow gap-1 items-center flex-col-reverse"},MP={class:"absolute rounded-lg opacity-0 group-[.active]:opacity-100 invisible group-[.active]:visible duration-200 -translate-x-1/4 lg:translate-x-1/2 max-lg:group-[.active]:-translate-y-1/2 lg:group-[.active]:translate-x-3/4 lg:-right-full translate-y-1/2 bottom-1/2 bg-slate-700 p-2 px-3"},LP=["src"],FP={__name:"sidebar",setup(t){const e=Hr(),n=je(""),r=()=>{n.value==""?n.value="active":n.value=""};return(s,i)=>{const o=lg("RouterLink");return de(),Se("div",OP,[b("div",xP,[ge(o,{to:"/",class:"text-center hidden lg:block"},{default:hr(()=>[Er(" LOGO "),DP,Er(" HERE ")]),_:1}),NP,ge(pP),b("div",VP,[le(e).isLoggedIn?(de(),Se("button",{key:0,onClick:r,class:Li([n.value,"flex group gap-1 items-center relative"])},[b("div",MP,[b("button",{onClick:i[0]||(i[0]=(...a)=>le(e).logout&&le(e).logout(...a)),class:"flex"},[ge(kP,{class:"nav-link w-10"}),Er("Sign Out")])]),b("img",{class:"w-10 rounded-full",src:le(e).user.photoURL?le(e).user.photoURL:"https://avatar.oxro.io/avatar.png?name="+le(e).user.displayName+"&background=random",alt:""},null,8,LP)],2)):ut("",!0),le(e).isLoggedIn?ut("",!0):(de(),Se("button",{key:1,onClick:i[1]||(i[1]=a=>le(e).openModal("login")),class:""},[ge(IP,{class:"nav-link w-10"})]))])])])}}},UP={},$P={width:"24px",height:"24px",viewBox:"0 0 262.00 262.00",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000"},BP=Lv('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.524"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g>',3),jP=[BP];function qP(t,e){return de(),Se("svg",$P,jP)}const HP=er(UP,[["render",qP]]),zP={class:"flex gap-4 justify-center"},Zy={__name:"providerLogin",setup(t){Hr();const e=new Ft,n=()=>{T2(Mr,e).then(r=>{Ft.credentialFromResult(r).accessToken,r.user}).catch(r=>{r.code,r.message,r.customData.email,Ft.credentialFromError(r)})};return(r,s)=>(de(),Se("div",zP,[b("button",{type:"button",onClick:n,href:"",class:"hover:scale-105 duration-100 flex gap-3 items-center rounded-lg ring-1 ring-gray-300 py-2 px-4"},[ge(HP,{class:""}),Er(" Sign in with Google")])]))}},WP={class:"p-6 space-y-4 w-full md:space-y-6 sm:p-8"},KP=b("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"},"Sign in to your account",-1),GP={class:"space-y-4 md:space-y-6",action:"#"},QP=b("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Your email",-1),YP=b("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),XP={class:"flex items-center justify-between"},JP={class:"flex items-start"},ZP={key:0,class:"text-xs text-red-500 capitalize"},e6=b("a",{href:"#",class:"text-sm font-medium text-primary-900 hover:underline dark:text-primary-500"},"Forgot password?",-1),t6={class:"text-sm font-light text-gray-500 dark:text-gray-400"},n6=b("div",{class:"flex items-center space-x-4"},[b("div",{class:"flex grow border-t border-gray-400"}),b("span",null,"or"),b("div",{class:"flex grow border-t border-gray-400"})],-1),r6={__name:"LoginForm",setup(t){const e=Hr(),n=je(""),r=je(""),s=je(""),i=()=>{n.value==""||r.value==""?s.value="Please fill in all fields":XT(Mr,n.value,r.value).then(()=>{}).catch(o=>{console.log(o.message),s.value=o.message})};return(o,a)=>(de(),Se("div",{onClick:a[3]||(a[3]=Og(()=>{},["stop"])),class:"bg-white w-full h-fit rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"},[b("div",WP,[KP,b("form",GP,[b("div",null,[QP,ts(b("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),type:"email",name:"email",id:"email",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[Fn,n.value]])]),b("div",null,[YP,ts(b("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[Fn,r.value]])]),b("div",XP,[b("div",JP,[s.value?(de(),Se("span",ZP,Dp(s.value),1)):ut("",!0)]),e6]),b("button",{type:"button",onClick:i,class:"w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}," Sign in "),b("p",t6,[Er(" Don't have an account? "),b("button",{type:"button",onClick:a[2]||(a[2]=c=>le(e).openModal("register")),class:"font-medium text-primary-900 hover:underline dark:text-primary-500"},"Sign up")])]),n6,ge(Zy)])]))}},s6={class:"p-6 space-y-4 w-full md:space-y-6 sm:p-8"},i6=b("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"},"Sign up to your account",-1),o6={class:"space-y-4 md:space-y-6",action:"#"},a6=b("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Name",-1),c6=b("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Email",-1),l6=b("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),u6={key:0,class:"text-xs text-red-500"},h6=b("label",{for:"conpassword",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Confirm Password",-1),d6={key:0,class:"text-xs text-red-500"},f6={class:"flex items-center justify-between"},p6={class:"flex items-start"},g6={key:0,class:"text-xs text-red-500"},m6=b("a",{href:"#",class:"text-sm font-medium text-primary-900 hover:underline dark:text-primary-500"},"Forgot password?",-1),_6={class:"text-sm font-light text-gray-500 dark:text-gray-400"},y6=b("div",{class:"flex items-center space-x-4"},[b("div",{class:"flex grow border-t border-gray-400"}),b("span",null,"or"),b("div",{class:"flex grow border-t border-gray-400"})],-1),v6={__name:"RegisterForm",setup(t){const e=Hr(),n=je(""),r=je(""),s=je(""),i=je(""),o=je(""),a=()=>{r.value==""||s.value==""||n.value==""||i.value==""?o.value="Please fill in all fields":YT(Mr,r.value,s.value).then(()=>{ZT(Mr.currentUser,{displayName:n.value}).catch(c=>{o.value=c.message})})};return(c,l)=>(de(),Se("div",{onClick:l[5]||(l[5]=Og(()=>{},["stop"])),class:"bg-white w-full h-fit rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"},[b("div",s6,[i6,b("form",o6,[b("div",null,[a6,ts(b("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),type:"text",name:"name",id:"name",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"John Doe",required:""},null,512),[[Fn,n.value]])]),b("div",null,[c6,ts(b("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>r.value=u),type:"email",name:"email",id:"email",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[Fn,r.value]])]),b("div",null,[l6,ts(b("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>s.value=u),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[Fn,s.value]]),s.value.length>0&&s.value.length<6?(de(),Se("span",u6,"Minimum 6 characters")):ut("",!0)]),b("div",null,[h6,ts(b("input",{"onUpdate:modelValue":l[3]||(l[3]=u=>i.value=u),type:"password",name:"conpassword",id:"conpassword",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[Fn,i.value]])]),s.value.length>0&&i.value.length>0&&s.value!==i.value?(de(),Se("span",d6,"Passwords do not match")):ut("",!0),b("div",f6,[b("div",p6,[o.value?(de(),Se("span",g6,Dp(o.value),1)):ut("",!0)]),m6]),b("button",{type:"button",onClick:a,class:"w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}," Sign up "),b("p",_6,[Er(" Have an account? "),b("button",{type:"button",onClick:l[4]||(l[4]=u=>le(e).openModal("login")),class:"font-medium text-primary-900 hover:underline dark:text-primary-500"},"Sign in")])]),y6,ge(Zy)])]))}},E6={__name:"LogReg",setup(t){const e=Gg(),n=Kg(),r=()=>{xm(Mr,i=>{i&&e.path.includes("/login")&&n.push("/")})};lu(()=>{r()});const s=Hr();return(i,o)=>le(s).modalOpen||le(e).path.includes("/login")||le(e).path.includes("/register")?(de(),Se("div",{key:0,onClick:o[0]||(o[0]=a=>le(e).path.includes("/login")||le(e).path.includes("/register")?le(n).push("/"):le(s).modalOpen=""),class:"bg-black h-screen z-50 left-0 top-0 bg-opacity-70 fixed flex w-screen items-center justify-center p-5"},[le(e).path.includes("/login")||le(s).modalOpen=="login"?(de(),vr(r6,{key:0})):ut("",!0),le(e).path.includes("/register")||le(s).modalOpen=="register"?(de(),vr(v6,{key:1})):ut("",!0)])):ut("",!0)}},w6={class:"flex font-saans flex-col-reverse lg:flex-row h-full w-full text-white"},I6={class:"bg-slate-800 max-lg:pb-24 justify-center flex items-start min-h-screen overflow-hidden w-full"},T6={class:"container p-5"},C6={__name:"App",setup(t){const e=Hr();return(n,r)=>(de(),Se("div",w6,[le(e).isLoggedIn?ut("",!0):(de(),vr(E6,{key:0})),ge(FP),b("div",I6,[b("div",T6,[ge(le(Wg))])])]))}},A6="modulepreload",R6=function(t){return"/"+t},bp={},Et=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=R6(o),o in bp)return;bp[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":A6,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},b6={class:"bg-slate-800 flex w-full justify-center p-5"},S6=b("div",{class:"flex flex-col grow container"},[b("h1",{class:"text-3xl bold"},"Welcome To Our Gaming Store!")],-1),P6=[S6],k6={__name:"HomeView",setup(t){return(e,n)=>(de(),Se("div",b6,P6))}},O6=Vw({history:JE("/"),routes:[{path:"/",name:"home",component:k6},{path:"/products",name:"products",component:()=>Et(()=>import("./ProductsMainView-UHp0Kn0-.js"),__vite__mapDeps([])),children:[{path:"",name:"products",component:()=>Et(()=>import("./ProductsView-lsPkzydW.js"),__vite__mapDeps([0,1]))},{path:"/products/:id",name:"product",component:()=>Et(()=>import("./ItemView-l0p_K_Cd.js"),__vite__mapDeps([]))},{path:"/products/category/:cat",name:"category",component:()=>Et(()=>import("./ProductsView-lsPkzydW.js"),__vite__mapDeps([0,1]))}]},{path:"/cart",name:"cart",component:()=>Et(()=>import("./CartView-6SNDAb6F.js"),__vite__mapDeps([]))},{path:"/transaction",name:"transaction",component:()=>Et(()=>import("./TransactionView-A7UAubF5.js"),__vite__mapDeps([]))},{path:"/admin",name:"admin",component:()=>Et(()=>import("./AdminView-Aat9TEhW.js"),__vite__mapDeps([])),children:[{path:"",name:"admin",component:()=>Et(()=>import("./ProductsView-lsPkzydW.js"),__vite__mapDeps([0,1]))},{path:"add-product",name:"add-product",component:()=>Et(()=>import("./AddProdView-0JdkDSJT.js"),__vite__mapDeps([2,1]))},{path:"users",name:"users",component:()=>Et(()=>import("./UsersView-C2aFWLEC.js"),__vite__mapDeps([]))},{path:"orders",name:"orders",component:()=>Et(()=>import("./OrderView-ZhNWPIxl.js"),__vite__mapDeps([]))},{path:"item/:id",name:"item",component:()=>Et(()=>import("./ItemView-VURzfuxI.js"),__vite__mapDeps([]))},{path:"instant",name:"edit-product",component:()=>Et(()=>import("./adminInstant-sVNuiV8f.js"),__vite__mapDeps([]))}]}]}),Uh=CE(C6);Uh.use(SE());Uh.use(O6);Uh.mount("#app");export{Vb as A,q6 as B,j6 as C,$6 as D,D6 as E,dn as F,_E as G,H6 as H,xm as I,Mr as J,U6 as K,K6 as L,G6 as M,z6 as N,W6 as O,Lv as P,er as _,Kg as a,Hr as b,vr as c,je as d,St as e,lu as f,Se as g,x6 as h,L6 as i,B6 as j,b as k,le as l,ge as m,Er as n,de as o,ut as p,F6 as q,lg as r,Li as s,Dp as t,Gg as u,Q6 as v,hr as w,ts as x,Fn as y,yE as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ProductsView-lsPkzydW.js","assets/Add-aG9o8AEP.js","assets/AddProdView-0JdkDSJT.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}