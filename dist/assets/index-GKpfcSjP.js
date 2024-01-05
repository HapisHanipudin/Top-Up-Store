(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function zl(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const Ce={},ts=[],kt=()=>{},Gy=()=>!1,fa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Wl=t=>t.startsWith("onUpdate:"),Xe=Object.assign,Kl=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Qy=Object.prototype.hasOwnProperty,ae=(t,e)=>Qy.call(t,e),z=Array.isArray,ns=t=>Mi(t)==="[object Map]",As=t=>Mi(t)==="[object Set]",Uh=t=>Mi(t)==="[object Date]",J=t=>typeof t=="function",Fe=t=>typeof t=="string",Gn=t=>typeof t=="symbol",Te=t=>t!==null&&typeof t=="object",Cp=t=>(Te(t)||J(t))&&J(t.then)&&J(t.catch),Ap=Object.prototype.toString,Mi=t=>Ap.call(t),Yy=t=>Mi(t).slice(8,-1),Rp=t=>Mi(t)==="[object Object]",Gl=t=>Fe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Co=zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),pa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Xy=/-(\w)/g,an=pa(t=>t.replace(Xy,(e,n)=>n?n.toUpperCase():"")),Jy=/\B([A-Z])/g,Rs=pa(t=>t.replace(Jy,"-$1").toLowerCase()),ga=pa(t=>t.charAt(0).toUpperCase()+t.slice(1)),cc=pa(t=>t?`on${ga(t)}`:""),Qn=(t,e)=>!Object.is(t,e),Ao=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Fo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Uo=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $h;const bp=()=>$h||($h=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ql(t){if(z(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Fe(r)?n0(r):Ql(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Fe(t)||Te(t))return t}const Zy=/;(?![^(]*\))/g,e0=/:([^]+)/,t0=/\/\*[^]*?\*\//g;function n0(t){const e={};return t.replace(t0,"").split(Zy).forEach(n=>{if(n){const r=n.split(e0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bs(t){let e="";if(Fe(t))e=t;else if(z(t))for(let n=0;n<t.length;n++){const r=bs(t[n]);r&&(e+=r+" ")}else if(Te(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const r0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",s0=zl(r0);function Sp(t){return!!t||t===""}function i0(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Tr(t[r],e[r]);return n}function Tr(t,e){if(t===e)return!0;let n=Uh(t),r=Uh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Gn(t),r=Gn(e),n||r)return t===e;if(n=z(t),r=z(e),n||r)return n&&r?i0(t,e):!1;if(n=Te(t),r=Te(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const a=t.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Tr(t[o],e[o]))return!1}}return String(t)===String(e)}function Yl(t,e){return t.findIndex(n=>Tr(n,e))}const Xl=t=>Fe(t)?t:t==null?"":z(t)||Te(t)&&(t.toString===Ap||!J(t.toString))?JSON.stringify(t,Pp,2):String(t),Pp=(t,e)=>e&&e.__v_isRef?Pp(t,e.value):ns(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[lc(r,i)+" =>"]=s,n),{})}:As(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>lc(n))}:Gn(e)?lc(e):Te(e)&&!z(e)&&!Rp(e)?String(e):e,lc=(t,e="")=>{var n;return Gn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let vt;class kp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=vt,!e&&vt&&(this.index=(vt.scopes||(vt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=vt;try{return vt=this,e()}finally{vt=n}}}on(){vt=this}off(){vt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Op(t){return new kp(t)}function o0(t,e=vt){e&&e.active&&e.effects.push(t)}function xp(){return vt}function a0(t){vt&&vt.cleanups.push(t)}let mr;class Jl{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=3,this._trackId=0,this._runnings=0,this._queryings=0,this._depsLength=0,o0(this,s)}get dirty(){if(this._dirtyLevel===1){this._dirtyLevel=0,this._queryings++,Vr();for(const e of this.deps)if(e.computed&&(c0(e.computed),this._dirtyLevel>=2))break;Mr(),this._queryings--}return this._dirtyLevel>=2}set dirty(e){this._dirtyLevel=e?3:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Bn,n=mr;try{return Bn=!0,mr=this,this._runnings++,Bh(this),this.fn()}finally{jh(this),this._runnings--,mr=n,Bn=e}}stop(){var e;this.active&&(Bh(this),jh(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function c0(t){return t.value}function Bh(t){t._trackId++,t._depsLength=0}function jh(t){if(t.deps&&t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Dp(t.deps[e],t);t.deps.length=t._depsLength}}function Dp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Bn=!0,zc=0;const Np=[];function Vr(){Np.push(Bn),Bn=!1}function Mr(){const t=Np.pop();Bn=t===void 0?!0:t}function Zl(){zc++}function eu(){for(zc--;!zc&&Wc.length;)Wc.shift()()}function Vp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&Dp(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Wc=[];function Mp(t,e,n){Zl();for(const r of t.keys())if(!(!r.allowRecurse&&r._runnings)&&r._dirtyLevel<e&&(!r._runnings||e!==2)){const s=r._dirtyLevel;r._dirtyLevel=e,s===0&&(!r._queryings||e!==2)&&(r.trigger(),r.scheduler&&Wc.push(r.scheduler))}eu()}const Lp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},$o=new WeakMap,_r=Symbol(""),Kc=Symbol("");function mt(t,e,n){if(Bn&&mr){let r=$o.get(t);r||$o.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Lp(()=>r.delete(n))),Vp(mr,s)}}function _n(t,e,n,r,s,i){const o=$o.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&z(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Gn(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":z(t)?Gl(n)&&a.push(o.get("length")):(a.push(o.get(_r)),ns(t)&&a.push(o.get(Kc)));break;case"delete":z(t)||(a.push(o.get(_r)),ns(t)&&a.push(o.get(Kc)));break;case"set":ns(t)&&a.push(o.get(_r));break}Zl();for(const c of a)c&&Mp(c,3);eu()}function l0(t,e){var n;return(n=$o.get(t))==null?void 0:n.get(e)}const u0=zl("__proto__,__v_isRef,__isVue"),Fp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Gn)),qh=h0();function h0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=le(this);for(let i=0,o=this.length;i<o;i++)mt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(le)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Vr(),Zl();const r=le(this)[e].apply(this,n);return eu(),Mr(),r}}),t}function d0(t){const e=le(this);return mt(e,"has",t),e.hasOwnProperty(t)}class Up{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?A0:qp:i?jp:Bp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=z(e);if(!s){if(o&&ae(qh,n))return Reflect.get(qh,n,r);if(n==="hasOwnProperty")return d0}const a=Reflect.get(e,n,r);return(Gn(n)?Fp.has(n):u0(n))||(s||mt(e,"get",n),i)?a:Ue(a)?o&&Gl(n)?a:a.value:Te(a)?s?zp(a):Li(a):a}}class $p extends Up{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._shallow){const c=ls(i);if(!Jr(r)&&!ls(r)&&(i=le(i),r=le(r)),!z(e)&&Ue(i)&&!Ue(r))return c?!1:(i.value=r,!0)}const o=z(e)&&Gl(n)?Number(n)<e.length:ae(e,n),a=Reflect.set(e,n,r,s);return e===le(s)&&(o?Qn(r,i)&&_n(e,"set",n,r):_n(e,"add",n,r)),a}deleteProperty(e,n){const r=ae(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&_n(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Gn(n)||!Fp.has(n))&&mt(e,"has",n),r}ownKeys(e){return mt(e,"iterate",z(e)?"length":_r),Reflect.ownKeys(e)}}class f0 extends Up{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const p0=new $p,g0=new f0,m0=new $p(!0),tu=t=>t,ma=t=>Reflect.getPrototypeOf(t);function io(t,e,n=!1,r=!1){t=t.__v_raw;const s=le(t),i=le(e);n||(Qn(e,i)&&mt(s,"get",e),mt(s,"get",i));const{has:o}=ma(s),a=r?tu:n?su:hi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function oo(t,e=!1){const n=this.__v_raw,r=le(n),s=le(t);return e||(Qn(t,s)&&mt(r,"has",t),mt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ao(t,e=!1){return t=t.__v_raw,!e&&mt(le(t),"iterate",_r),Reflect.get(t,"size",t)}function Hh(t){t=le(t);const e=le(this);return ma(e).has.call(e,t)||(e.add(t),_n(e,"add",t,t)),this}function zh(t,e){e=le(e);const n=le(this),{has:r,get:s}=ma(n);let i=r.call(n,t);i||(t=le(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Qn(e,o)&&_n(n,"set",t,e):_n(n,"add",t,e),this}function Wh(t){const e=le(this),{has:n,get:r}=ma(e);let s=n.call(e,t);s||(t=le(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&_n(e,"delete",t,void 0),i}function Kh(){const t=le(this),e=t.size!==0,n=t.clear();return e&&_n(t,"clear",void 0,void 0),n}function co(t,e){return function(r,s){const i=this,o=i.__v_raw,a=le(o),c=e?tu:t?su:hi;return!t&&mt(a,"iterate",_r),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function lo(t,e,n){return function(...r){const s=this.__v_raw,i=le(s),o=ns(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?tu:e?su:hi;return!e&&mt(i,"iterate",c?Kc:_r),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function _0(){const t={get(i){return io(this,i)},get size(){return ao(this)},has:oo,add:Hh,set:zh,delete:Wh,clear:Kh,forEach:co(!1,!1)},e={get(i){return io(this,i,!1,!0)},get size(){return ao(this)},has:oo,add:Hh,set:zh,delete:Wh,clear:Kh,forEach:co(!1,!0)},n={get(i){return io(this,i,!0)},get size(){return ao(this,!0)},has(i){return oo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:co(!0,!1)},r={get(i){return io(this,i,!0,!0)},get size(){return ao(this,!0)},has(i){return oo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:co(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=lo(i,!1,!1),n[i]=lo(i,!0,!1),e[i]=lo(i,!1,!0),r[i]=lo(i,!0,!0)}),[t,n,e,r]}const[y0,v0,E0,w0]=_0();function nu(t,e){const n=e?t?w0:E0:t?v0:y0;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(ae(n,s)&&s in r?n:r,s,i)}const I0={get:nu(!1,!1)},T0={get:nu(!1,!0)},C0={get:nu(!0,!1)},Bp=new WeakMap,jp=new WeakMap,qp=new WeakMap,A0=new WeakMap;function R0(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function b0(t){return t.__v_skip||!Object.isExtensible(t)?0:R0(Yy(t))}function Li(t){return ls(t)?t:ru(t,!1,p0,I0,Bp)}function Hp(t){return ru(t,!1,m0,T0,jp)}function zp(t){return ru(t,!0,g0,C0,qp)}function ru(t,e,n,r,s){if(!Te(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=b0(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function jn(t){return ls(t)?jn(t.__v_raw):!!(t&&t.__v_isReactive)}function ls(t){return!!(t&&t.__v_isReadonly)}function Jr(t){return!!(t&&t.__v_isShallow)}function Wp(t){return jn(t)||ls(t)}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function _a(t){return Fo(t,"__v_skip",!0),t}const hi=t=>Te(t)?Li(t):t,su=t=>Te(t)?zp(t):t;class Kp{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Jl(()=>e(this._value),()=>Gc(this,1)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=le(this);return Gp(e),(!e._cacheable||e.effect.dirty)&&Qn(e._value,e._value=e.effect.run())&&Gc(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function S0(t,e,n=!1){let r,s;const i=J(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new Kp(r,s,i||!s,n)}function Gp(t){Bn&&mr&&(t=le(t),Vp(mr,t.dep||(t.dep=Lp(()=>t.dep=void 0,t instanceof Kp?t:void 0))))}function Gc(t,e=3,n){t=le(t);const r=t.dep;r&&Mp(r,e)}function Ue(t){return!!(t&&t.__v_isRef===!0)}function je(t){return Qp(t,!1)}function P0(t){return Qp(t,!0)}function Qp(t,e){return Ue(t)?t:new k0(t,e)}class k0{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:le(e),this._value=n?e:hi(e)}get value(){return Gp(this),this._value}set value(e){const n=this.__v_isShallow||Jr(e)||ls(e);e=n?e:le(e),Qn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:hi(e),Gc(this,3))}}function Se(t){return Ue(t)?t.value:t}const O0={get:(t,e,n)=>Se(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Ue(s)&&!Ue(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Yp(t){return jn(t)?t:new Proxy(t,O0)}function x0(t){const e=z(t)?new Array(t.length):{};for(const n in t)e[n]=N0(t,n);return e}class D0{constructor(e,n,r){this._object=e,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return l0(le(this._object),this._key)}}function N0(t,e,n){const r=t[e];return Ue(r)?r:new D0(t,e,n)}function qn(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){ya(i,e,n)}return s}function Ut(t,e,n,r){if(J(t)){const i=qn(t,e,n,r);return i&&Cp(i)&&i.catch(o=>{ya(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ut(t[i],e,n,r));return s}function ya(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/errors/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){qn(c,null,10,[t,o,a]);return}}V0(t,n,s,r)}function V0(t,e,n,r=!0){console.error(t)}let di=!1,Qc=!1;const rt=[];let Xt=0;const rs=[];let hn=null,lr=0;const Xp=Promise.resolve();let iu=null;function ou(t){const e=iu||Xp;return t?e.then(this?t.bind(this):t):e}function M0(t){let e=Xt+1,n=rt.length;for(;e<n;){const r=e+n>>>1,s=rt[r],i=fi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function au(t){(!rt.length||!rt.includes(t,di&&t.allowRecurse?Xt+1:Xt))&&(t.id==null?rt.push(t):rt.splice(M0(t.id),0,t),Jp())}function Jp(){!di&&!Qc&&(Qc=!0,iu=Xp.then(eg))}function L0(t){const e=rt.indexOf(t);e>Xt&&rt.splice(e,1)}function F0(t){z(t)?rs.push(...t):(!hn||!hn.includes(t,t.allowRecurse?lr+1:lr))&&rs.push(t),Jp()}function Gh(t,e,n=di?Xt+1:0){for(;n<rt.length;n++){const r=rt[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;rt.splice(n,1),n--,r()}}}function Zp(t){if(rs.length){const e=[...new Set(rs)];if(rs.length=0,hn){hn.push(...e);return}for(hn=e,hn.sort((n,r)=>fi(n)-fi(r)),lr=0;lr<hn.length;lr++)hn[lr]();hn=null,lr=0}}const fi=t=>t.id==null?1/0:t.id,U0=(t,e)=>{const n=fi(t)-fi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function eg(t){Qc=!1,di=!0,rt.sort(U0);try{for(Xt=0;Xt<rt.length;Xt++){const e=rt[Xt];e&&e.active!==!1&&qn(e,null,14)}}finally{Xt=0,rt.length=0,Zp(),di=!1,iu=null,(rt.length||rs.length)&&eg()}}function $0(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ce;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||Ce;d&&(s=n.map(p=>Fe(p)?p.trim():p)),h&&(s=n.map(Uo))}let a,c=r[a=cc(e)]||r[a=cc(an(e))];!c&&i&&(c=r[a=cc(Rs(e))]),c&&Ut(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ut(l,t,6,s)}}function tg(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!J(t)){const c=l=>{const u=tg(l,e,!0);u&&(a=!0,Xe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Te(t)&&r.set(t,null),null):(z(i)?i.forEach(c=>o[c]=null):Xe(o,i),Te(t)&&r.set(t,o),o)}function va(t,e){return!t||!fa(e)?!1:(e=e.slice(2).replace(/Once$/,""),ae(t,e[0].toLowerCase()+e.slice(1))||ae(t,Rs(e))||ae(t,e))}let Et=null,ng=null;function Bo(t){const e=Et;return Et=t,ng=t&&t.type.__scopeId||null,e}function ur(t,e=Et,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&id(-1);const i=Bo(e);let o;try{o=t(...s)}finally{Bo(i),r._d&&id(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function uc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:p,ctx:y,inheritAttrs:T}=t;let E,S;const D=Bo(t);try{if(n.shapeFlag&4){const B=s||r,L=B;E=Yt(u.call(L,B,h,i,p,d,y)),S=c}else{const B=e;E=Yt(B.length>1?B(i,{attrs:c,slots:a,emit:l}):B(i,null)),S=e.props?c:B0(c)}}catch(B){Zs.length=0,ya(B,t,1),E=ce(Cr)}let N=E;if(S&&T!==!1){const B=Object.keys(S),{shapeFlag:L}=N;B.length&&L&7&&(o&&B.some(Wl)&&(S=j0(S,o)),N=us(N,S))}return n.dirs&&(N=us(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),E=N,Bo(D),E}const B0=t=>{let e;for(const n in t)(n==="class"||n==="style"||fa(n))&&((e||(e={}))[n]=t[n]);return e},j0=(t,e)=>{const n={};for(const r in t)(!Wl(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function q0(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Qh(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!va(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Qh(r,o,l):!0:!!o;return!1}function Qh(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!va(n,i))return!0}return!1}function H0({vnode:t,parent:e},n){if(n)for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const rg="components";function sg(t,e){return W0(rg,t,!0,e)||t}const z0=Symbol.for("v-ndc");function W0(t,e,n=!0,r=!1){const s=Et||qe;if(s){const i=s.type;if(t===rg){const a=Bv(i,!1);if(a&&(a===e||a===an(e)||a===ga(an(e))))return i}const o=Yh(s[t]||i[t],e)||Yh(s.appContext[t],e);return!o&&r?i:o}}function Yh(t,e){return t&&(t[e]||t[an(e)]||t[ga(an(e))])}const K0=t=>t.__isSuspense;function G0(t,e){e&&e.pendingBranch?z(t)?e.effects.push(...t):e.effects.push(t):F0(t)}const Q0=Symbol.for("v-scx"),Y0=()=>$t(Q0),uo={};function Xs(t,e,n){return ig(t,e,n)}function ig(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=Ce){var c;if(e&&i){const L=e;e=(...ie)=>{L(...ie),B()}}const l=xp()===((c=qe)==null?void 0:c.scope)?qe:null;let u,h=!1,d=!1;if(Ue(t)?(u=()=>t.value,h=Jr(t)):jn(t)?(u=Jr(t)||r===!1?()=>fn(t,1):()=>fn(t),h=!0):z(t)?(d=!0,h=t.some(L=>jn(L)||Jr(L)),u=()=>t.map(L=>{if(Ue(L))return L.value;if(jn(L))return fn(L,Jr(L)||r===!1?1:void 0);if(J(L))return qn(L,l,2)})):J(t)?e?u=()=>qn(t,l,2):u=()=>{if(!(l&&l.isUnmounted))return p&&p(),Ut(t,l,3,[y])}:u=kt,e&&r){const L=u;u=()=>fn(L())}let p,y=L=>{p=N.onStop=()=>{qn(L,l,4),p=N.onStop=void 0}},T;if(Ta)if(y=kt,e?n&&Ut(e,l,3,[u(),d?[]:void 0,y]):u(),s==="sync"){const L=Y0();T=L.__watcherHandles||(L.__watcherHandles=[])}else return kt;let E=d?new Array(t.length).fill(uo):uo;const S=()=>{if(!(!N.active||!N.dirty))if(e){const L=N.run();(r||h||(d?L.some((ie,ge)=>Qn(ie,E[ge])):Qn(L,E)))&&(p&&p(),Ut(e,l,3,[L,E===uo?void 0:d&&E[0]===uo?[]:E,y]),E=L)}else N.run()};S.allowRecurse=!!e;let D;s==="sync"?D=S:s==="post"?D=()=>dt(S,l&&l.suspense):(S.pre=!0,l&&(S.id=l.uid),D=()=>au(S));const N=new Jl(u,kt,D),B=()=>{N.stop(),l&&l.scope&&Kl(l.scope.effects,N)};return e?n?S():E=N.run():s==="post"?dt(N.run.bind(N),l&&l.suspense):N.run(),T&&T.push(B),B}function X0(t,e,n){const r=this.proxy,s=Fe(t)?t.includes(".")?og(r,t):()=>r[t]:t.bind(r,r);let i;J(e)?i=e:(i=e.handler,n=e);const o=qe;hs(this);const a=ig(s,i.bind(r),n);return o?hs(o):vr(),a}function og(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function fn(t,e,n=0,r){if(!Te(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),Ue(t))fn(t.value,e,n,r);else if(z(t))for(let s=0;s<t.length;s++)fn(t[s],e,n,r);else if(As(t)||ns(t))t.forEach(s=>{fn(s,e,n,r)});else if(Rp(t))for(const s in t)fn(t[s],e,n,r);return t}function Zr(t,e){const n=Et;if(n===null)return t;const r=Ca(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=Ce]=e[i];o&&(J(o)&&(o={mounted:o,updated:o}),o.deep&&fn(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function or(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Vr(),Ut(c,n,8,[t.el,a,t,e]),Mr())}}/*! #__NO_SIDE_EFFECTS__ */function ag(t,e){return J(t)?Xe({name:t.name},e,{setup:t}):t}const Ro=t=>!!t.type.__asyncLoader,cg=t=>t.type.__isKeepAlive;function J0(t,e){lg(t,"a",e)}function Z0(t,e){lg(t,"da",e)}function lg(t,e,n=qe){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Ea(e,r,n),n){let s=n.parent;for(;s&&s.parent;)cg(s.parent.vnode)&&ev(r,e,n,s),s=s.parent}}function ev(t,e,n,r){const s=Ea(e,t,r,!0);hg(()=>{Kl(r[e],s)},n)}function Ea(t,e,n=qe,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Vr(),hs(n);const a=Ut(e,n,t,o);return vr(),Mr(),a});return r?s.unshift(i):s.push(i),i}}const Cn=t=>(e,n=qe)=>(!Ta||t==="sp")&&Ea(t,(...r)=>e(...r),n),ug=Cn("bm"),tv=Cn("m"),nv=Cn("bu"),rv=Cn("u"),sv=Cn("bum"),hg=Cn("um"),iv=Cn("sp"),ov=Cn("rtg"),av=Cn("rtc");function cv(t,e=qe){Ea("ec",t,e)}function lv(t,e,n,r){let s;const i=n&&n[r];if(z(t)||Fe(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Te(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const Yc=t=>t?Tg(t)?Ca(t)||t.proxy:Yc(t.parent):null,Js=Xe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yc(t.parent),$root:t=>Yc(t.root),$emit:t=>t.emit,$options:t=>cu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,au(t.update)}),$nextTick:t=>t.n||(t.n=ou.bind(t.proxy)),$watch:t=>X0.bind(t)}),hc=(t,e)=>t!==Ce&&!t.__isScriptSetup&&ae(t,e),uv={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(hc(r,e))return o[e]=1,r[e];if(s!==Ce&&ae(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&ae(l,e))return o[e]=3,i[e];if(n!==Ce&&ae(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const u=Js[e];let h,d;if(u)return e==="$attrs"&&mt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==Ce&&ae(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,ae(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return hc(s,e)?(s[e]=n,!0):r!==Ce&&ae(r,e)?(r[e]=n,!0):ae(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==Ce&&ae(t,o)||hc(e,o)||(a=i[0])&&ae(a,o)||ae(r,o)||ae(Js,o)||ae(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ae(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Xh(t){return z(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xc=!0;function hv(t){const e=cu(t),n=t.proxy,r=t.ctx;Xc=!1,e.beforeCreate&&Jh(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:p,updated:y,activated:T,deactivated:E,beforeDestroy:S,beforeUnmount:D,destroyed:N,unmounted:B,render:L,renderTracked:ie,renderTriggered:ge,errorCaptured:ee,serverPrefetch:te,expose:Ee,inheritAttrs:Je,components:_t,directives:At,filters:ir}=e;if(l&&dv(l,r,null),o)for(const ye in o){const fe=o[ye];J(fe)&&(r[ye]=fe.bind(n))}if(s){const ye=s.call(n,n);Te(ye)&&(t.data=Li(ye))}if(Xc=!0,i)for(const ye in i){const fe=i[ye],ln=J(fe)?fe.bind(n,n):J(fe.get)?fe.get.bind(n,n):kt,bn=!J(fe)&&J(fe.set)?fe.set.bind(n):kt,zt=bt({get:ln,set:bn});Object.defineProperty(r,ye,{enumerable:!0,configurable:!0,get:()=>zt.value,set:ht=>zt.value=ht})}if(a)for(const ye in a)dg(a[ye],r,n,ye);if(c){const ye=J(c)?c.call(n):c;Reflect.ownKeys(ye).forEach(fe=>{bo(fe,ye[fe])})}u&&Jh(u,t,"c");function ue(ye,fe){z(fe)?fe.forEach(ln=>ye(ln.bind(n))):fe&&ye(fe.bind(n))}if(ue(ug,h),ue(tv,d),ue(nv,p),ue(rv,y),ue(J0,T),ue(Z0,E),ue(cv,ee),ue(av,ie),ue(ov,ge),ue(sv,D),ue(hg,B),ue(iv,te),z(Ee))if(Ee.length){const ye=t.exposed||(t.exposed={});Ee.forEach(fe=>{Object.defineProperty(ye,fe,{get:()=>n[fe],set:ln=>n[fe]=ln})})}else t.exposed||(t.exposed={});L&&t.render===kt&&(t.render=L),Je!=null&&(t.inheritAttrs=Je),_t&&(t.components=_t),At&&(t.directives=At)}function dv(t,e,n=kt){z(t)&&(t=Jc(t));for(const r in t){const s=t[r];let i;Te(s)?"default"in s?i=$t(s.from||r,s.default,!0):i=$t(s.from||r):i=$t(s),Ue(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Jh(t,e,n){Ut(z(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function dg(t,e,n,r){const s=r.includes(".")?og(n,r):()=>n[r];if(Fe(t)){const i=e[t];J(i)&&Xs(s,i)}else if(J(t))Xs(s,t.bind(n));else if(Te(t))if(z(t))t.forEach(i=>dg(i,e,n,r));else{const i=J(t.handler)?t.handler.bind(n):e[t.handler];J(i)&&Xs(s,i,t)}}function cu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>jo(c,l,o,!0)),jo(c,e,o)),Te(e)&&i.set(e,c),c}function jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&jo(t,i,n,!0),s&&s.forEach(o=>jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=fv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const fv={data:Zh,props:ed,emits:ed,methods:qs,computed:qs,beforeCreate:lt,created:lt,beforeMount:lt,mounted:lt,beforeUpdate:lt,updated:lt,beforeDestroy:lt,beforeUnmount:lt,destroyed:lt,unmounted:lt,activated:lt,deactivated:lt,errorCaptured:lt,serverPrefetch:lt,components:qs,directives:qs,watch:gv,provide:Zh,inject:pv};function Zh(t,e){return e?t?function(){return Xe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function pv(t,e){return qs(Jc(t),Jc(e))}function Jc(t){if(z(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function lt(t,e){return t?[...new Set([].concat(t,e))]:e}function qs(t,e){return t?Xe(Object.create(null),t,e):e}function ed(t,e){return t?z(t)&&z(e)?[...new Set([...t,...e])]:Xe(Object.create(null),Xh(t),Xh(e??{})):e}function gv(t,e){if(!t)return e;if(!e)return t;const n=Xe(Object.create(null),t);for(const r in e)n[r]=lt(t[r],e[r]);return n}function fg(){return{app:null,config:{isNativeTag:Gy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mv=0;function _v(t,e){return function(r,s=null){J(r)||(r=Xe({},r)),s!=null&&!Te(s)&&(s=null);const i=fg(),o=new WeakSet;let a=!1;const c=i.app={_uid:mv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:qv,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&J(l.install)?(o.add(l),l.install(c,...u)):J(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=ce(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ca(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){pi=c;try{return l()}finally{pi=null}}};return c}}let pi=null;function bo(t,e){if(qe){let n=qe.provides;const r=qe.parent&&qe.parent.provides;r===n&&(n=qe.provides=Object.create(r)),n[t]=e}}function $t(t,e,n=!1){const r=qe||Et;if(r||pi){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:pi._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&J(e)?e.call(r&&r.proxy):e}}function yv(){return!!(qe||Et||pi)}function vv(t,e,n,r=!1){const s={},i={};Fo(i,Ia,1),t.propsDefaults=Object.create(null),pg(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Hp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Ev(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=le(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(va(t.emitsOptions,d))continue;const p=e[d];if(c)if(ae(i,d))p!==i[d]&&(i[d]=p,l=!0);else{const y=an(d);s[y]=Zc(c,a,y,p,t,!1)}else p!==i[d]&&(i[d]=p,l=!0)}}}else{pg(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!ae(e,h)&&((u=Rs(h))===h||!ae(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Zc(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!ae(e,h))&&(delete i[h],l=!0)}l&&_n(t,"set","$attrs")}function pg(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(Co(c))continue;const l=e[c];let u;s&&ae(s,u=an(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:va(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=le(n),l=a||Ce;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Zc(s,c,h,l[h],t,!ae(l,h))}}return o}function Zc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=ae(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&J(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(hs(s),r=l[n]=c.call(null,e),vr())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Rs(n))&&(r=!0))}return r}function gg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!J(t)){const u=h=>{c=!0;const[d,p]=gg(h,e,!0);Xe(o,d),p&&a.push(...p)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Te(t)&&r.set(t,ts),ts;if(z(i))for(let u=0;u<i.length;u++){const h=an(i[u]);td(h)&&(o[h]=Ce)}else if(i)for(const u in i){const h=an(u);if(td(h)){const d=i[u],p=o[h]=z(d)||J(d)?{type:d}:Xe({},d);if(p){const y=sd(Boolean,p.type),T=sd(String,p.type);p[0]=y>-1,p[1]=T<0||y<T,(y>-1||ae(p,"default"))&&a.push(h)}}}const l=[o,a];return Te(t)&&r.set(t,l),l}function td(t){return t[0]!=="$"}function nd(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function rd(t,e){return nd(t)===nd(e)}function sd(t,e){return z(e)?e.findIndex(n=>rd(n,t)):J(e)&&rd(e,t)?0:-1}const mg=t=>t[0]==="_"||t==="$stable",lu=t=>z(t)?t.map(Yt):[Yt(t)],wv=(t,e,n)=>{if(e._n)return e;const r=ur((...s)=>lu(e(...s)),n);return r._c=!1,r},_g=(t,e,n)=>{const r=t._ctx;for(const s in t){if(mg(s))continue;const i=t[s];if(J(i))e[s]=wv(s,i,r);else if(i!=null){const o=lu(i);e[s]=()=>o}}},yg=(t,e)=>{const n=lu(e);t.slots.default=()=>n},Iv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=le(e),Fo(e,"_",n)):_g(e,t.slots={})}else t.slots={},e&&yg(t,e);Fo(t.slots,Ia,1)},Tv=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(Xe(s,e),!n&&a===1&&delete s._):(i=!e.$stable,_g(e,s)),o=e}else e&&(yg(t,e),o={default:1});if(i)for(const a in s)!mg(a)&&o[a]==null&&delete s[a]};function el(t,e,n,r,s=!1){if(z(t)){t.forEach((d,p)=>el(d,e&&(z(e)?e[p]:e),n,r,s));return}if(Ro(r)&&!s)return;const i=r.shapeFlag&4?Ca(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Fe(l)?(u[l]=null,ae(h,l)&&(h[l]=null)):Ue(l)&&(l.value=null)),J(c))qn(c,a,12,[o,u]);else{const d=Fe(c),p=Ue(c);if(d||p){const y=()=>{if(t.f){const T=d?ae(h,c)?h[c]:u[c]:c.value;s?z(T)&&Kl(T,i):z(T)?T.includes(i)||T.push(i):d?(u[c]=[i],ae(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,ae(h,c)&&(h[c]=o)):p&&(c.value=o,t.k&&(u[t.k]=o))};o?(y.id=-1,dt(y,n)):y()}}}const dt=G0;function Cv(t){return Av(t)}function Av(t,e){const n=bp();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:p=kt,insertStaticContent:y}=t,T=(f,g,m,_=null,I=null,A=null,V=void 0,P=null,k=!!g.dynamicChildren)=>{if(f===g)return;f&&!Ls(f,g)&&(_=v(f),ht(f,I,A,!0),f=null),g.patchFlag===-2&&(k=!1,g.dynamicChildren=null);const{type:b,ref:M,shapeFlag:W}=g;switch(b){case wa:E(f,g,m,_);break;case Cr:S(f,g,m,_);break;case So:f==null&&D(g,m,_,V);break;case Qt:_t(f,g,m,_,I,A,V,P,k);break;default:W&1?L(f,g,m,_,I,A,V,P,k):W&6?At(f,g,m,_,I,A,V,P,k):(W&64||W&128)&&b.process(f,g,m,_,I,A,V,P,k,O)}M!=null&&I&&el(M,f&&f.ref,A,g||f,!g)},E=(f,g,m,_)=>{if(f==null)r(g.el=a(g.children),m,_);else{const I=g.el=f.el;g.children!==f.children&&l(I,g.children)}},S=(f,g,m,_)=>{f==null?r(g.el=c(g.children||""),m,_):g.el=f.el},D=(f,g,m,_)=>{[f.el,f.anchor]=y(f.children,g,m,_,f.el,f.anchor)},N=({el:f,anchor:g},m,_)=>{let I;for(;f&&f!==g;)I=d(f),r(f,m,_),f=I;r(g,m,_)},B=({el:f,anchor:g})=>{let m;for(;f&&f!==g;)m=d(f),s(f),f=m;s(g)},L=(f,g,m,_,I,A,V,P,k)=>{g.type==="svg"?V="svg":g.type==="math"&&(V="mathml"),f==null?ie(g,m,_,I,A,V,P,k):te(f,g,I,A,V,P,k)},ie=(f,g,m,_,I,A,V,P)=>{let k,b;const{props:M,shapeFlag:W,transition:q,dirs:Y}=f;if(k=f.el=o(f.type,A,M&&M.is,M),W&8?u(k,f.children):W&16&&ee(f.children,k,null,_,I,dc(f,A),V,P),Y&&or(f,null,_,"created"),ge(k,f,f.scopeId,V,_),M){for(const ve in M)ve!=="value"&&!Co(ve)&&i(k,ve,null,M[ve],A,f.children,_,I,Ze);"value"in M&&i(k,"value",null,M.value,A),(b=M.onVnodeBeforeMount)&&Kt(b,_,f)}Y&&or(f,null,_,"beforeMount");const ne=Rv(I,q);ne&&q.beforeEnter(k),r(k,g,m),((b=M&&M.onVnodeMounted)||ne||Y)&&dt(()=>{b&&Kt(b,_,f),ne&&q.enter(k),Y&&or(f,null,_,"mounted")},I)},ge=(f,g,m,_,I)=>{if(m&&p(f,m),_)for(let A=0;A<_.length;A++)p(f,_[A]);if(I){let A=I.subTree;if(g===A){const V=I.vnode;ge(f,V,V.scopeId,V.slotScopeIds,I.parent)}}},ee=(f,g,m,_,I,A,V,P,k=0)=>{for(let b=k;b<f.length;b++){const M=f[b]=P?xn(f[b]):Yt(f[b]);T(null,M,g,m,_,I,A,V,P)}},te=(f,g,m,_,I,A,V)=>{const P=g.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:M}=g;k|=f.patchFlag&16;const W=f.props||Ce,q=g.props||Ce;let Y;if(m&&ar(m,!1),(Y=q.onVnodeBeforeUpdate)&&Kt(Y,m,g,f),M&&or(g,f,m,"beforeUpdate"),m&&ar(m,!0),b?Ee(f.dynamicChildren,b,P,m,_,dc(g,I),A):V||fe(f,g,P,null,m,_,dc(g,I),A,!1),k>0){if(k&16)Je(P,g,W,q,m,_,I);else if(k&2&&W.class!==q.class&&i(P,"class",null,q.class,I),k&4&&i(P,"style",W.style,q.style,I),k&8){const ne=g.dynamicProps;for(let ve=0;ve<ne.length;ve++){const be=ne[ve],$e=W[be],Vt=q[be];(Vt!==$e||be==="value")&&i(P,be,$e,Vt,I,f.children,m,_,Ze)}}k&1&&f.children!==g.children&&u(P,g.children)}else!V&&b==null&&Je(P,g,W,q,m,_,I);((Y=q.onVnodeUpdated)||M)&&dt(()=>{Y&&Kt(Y,m,g,f),M&&or(g,f,m,"updated")},_)},Ee=(f,g,m,_,I,A,V)=>{for(let P=0;P<g.length;P++){const k=f[P],b=g[P],M=k.el&&(k.type===Qt||!Ls(k,b)||k.shapeFlag&70)?h(k.el):m;T(k,b,M,null,_,I,A,V,!0)}},Je=(f,g,m,_,I,A,V)=>{if(m!==_){if(m!==Ce)for(const P in m)!Co(P)&&!(P in _)&&i(f,P,m[P],null,V,g.children,I,A,Ze);for(const P in _){if(Co(P))continue;const k=_[P],b=m[P];k!==b&&P!=="value"&&i(f,P,b,k,V,g.children,I,A,Ze)}"value"in _&&i(f,"value",m.value,_.value,V)}},_t=(f,g,m,_,I,A,V,P,k)=>{const b=g.el=f?f.el:a(""),M=g.anchor=f?f.anchor:a("");let{patchFlag:W,dynamicChildren:q,slotScopeIds:Y}=g;Y&&(P=P?P.concat(Y):Y),f==null?(r(b,m,_),r(M,m,_),ee(g.children,m,M,I,A,V,P,k)):W>0&&W&64&&q&&f.dynamicChildren?(Ee(f.dynamicChildren,q,m,I,A,V,P),(g.key!=null||I&&g===I.subTree)&&vg(f,g,!0)):fe(f,g,m,M,I,A,V,P,k)},At=(f,g,m,_,I,A,V,P,k)=>{g.slotScopeIds=P,f==null?g.shapeFlag&512?I.ctx.activate(g,m,_,V,k):ir(g,m,_,I,A,V,k):Rt(f,g,k)},ir=(f,g,m,_,I,A,V)=>{const P=f.component=Mv(f,_,I);if(cg(f)&&(P.ctx.renderer=O),Lv(P),P.asyncDep){if(I&&I.registerDep(P,ue),!f.el){const k=P.subTree=ce(Cr);S(null,k,g,m)}}else ue(P,f,g,m,I,A,V)},Rt=(f,g,m)=>{const _=g.component=f.component;if(q0(f,g,m))if(_.asyncDep&&!_.asyncResolved){ye(_,g,m);return}else _.next=g,L0(_.update),_.effect.dirty=!0,_.update();else g.el=f.el,_.vnode=g},ue=(f,g,m,_,I,A,V)=>{const P=()=>{if(f.isMounted){let{next:M,bu:W,u:q,parent:Y,vnode:ne}=f;{const zr=Eg(f);if(zr){M&&(M.el=ne.el,ye(f,M,V)),zr.asyncDep.then(()=>{f.isUnmounted||P()});return}}let ve=M,be;ar(f,!1),M?(M.el=ne.el,ye(f,M,V)):M=ne,W&&Ao(W),(be=M.props&&M.props.onVnodeBeforeUpdate)&&Kt(be,Y,M,ne),ar(f,!0);const $e=uc(f),Vt=f.subTree;f.subTree=$e,T(Vt,$e,h(Vt.el),v(Vt),f,I,A),M.el=$e.el,ve===null&&H0(f,$e.el),q&&dt(q,I),(be=M.props&&M.props.onVnodeUpdated)&&dt(()=>Kt(be,Y,M,ne),I)}else{let M;const{el:W,props:q}=g,{bm:Y,m:ne,parent:ve}=f,be=Ro(g);if(ar(f,!1),Y&&Ao(Y),!be&&(M=q&&q.onVnodeBeforeMount)&&Kt(M,ve,g),ar(f,!0),W&&pe){const $e=()=>{f.subTree=uc(f),pe(W,f.subTree,f,I,null)};be?g.type.__asyncLoader().then(()=>!f.isUnmounted&&$e()):$e()}else{const $e=f.subTree=uc(f);T(null,$e,m,_,f,I,A),g.el=$e.el}if(ne&&dt(ne,I),!be&&(M=q&&q.onVnodeMounted)){const $e=g;dt(()=>Kt(M,ve,$e),I)}(g.shapeFlag&256||ve&&Ro(ve.vnode)&&ve.vnode.shapeFlag&256)&&f.a&&dt(f.a,I),f.isMounted=!0,g=m=_=null}},k=f.effect=new Jl(P,kt,()=>au(b),f.scope),b=f.update=()=>{k.dirty&&k.run()};b.id=f.uid,ar(f,!0),b()},ye=(f,g,m)=>{g.component=f;const _=f.vnode.props;f.vnode=g,f.next=null,Ev(f,g.props,_,m),Tv(f,g.children,m),Vr(),Gh(f),Mr()},fe=(f,g,m,_,I,A,V,P,k=!1)=>{const b=f&&f.children,M=f?f.shapeFlag:0,W=g.children,{patchFlag:q,shapeFlag:Y}=g;if(q>0){if(q&128){bn(b,W,m,_,I,A,V,P,k);return}else if(q&256){ln(b,W,m,_,I,A,V,P,k);return}}Y&8?(M&16&&Ze(b,I,A),W!==b&&u(m,W)):M&16?Y&16?bn(b,W,m,_,I,A,V,P,k):Ze(b,I,A,!0):(M&8&&u(m,""),Y&16&&ee(W,m,_,I,A,V,P,k))},ln=(f,g,m,_,I,A,V,P,k)=>{f=f||ts,g=g||ts;const b=f.length,M=g.length,W=Math.min(b,M);let q;for(q=0;q<W;q++){const Y=g[q]=k?xn(g[q]):Yt(g[q]);T(f[q],Y,m,null,I,A,V,P,k)}b>M?Ze(f,I,A,!0,!1,W):ee(g,m,_,I,A,V,P,k,W)},bn=(f,g,m,_,I,A,V,P,k)=>{let b=0;const M=g.length;let W=f.length-1,q=M-1;for(;b<=W&&b<=q;){const Y=f[b],ne=g[b]=k?xn(g[b]):Yt(g[b]);if(Ls(Y,ne))T(Y,ne,m,null,I,A,V,P,k);else break;b++}for(;b<=W&&b<=q;){const Y=f[W],ne=g[q]=k?xn(g[q]):Yt(g[q]);if(Ls(Y,ne))T(Y,ne,m,null,I,A,V,P,k);else break;W--,q--}if(b>W){if(b<=q){const Y=q+1,ne=Y<M?g[Y].el:_;for(;b<=q;)T(null,g[b]=k?xn(g[b]):Yt(g[b]),m,ne,I,A,V,P,k),b++}}else if(b>q)for(;b<=W;)ht(f[b],I,A,!0),b++;else{const Y=b,ne=b,ve=new Map;for(b=ne;b<=q;b++){const yt=g[b]=k?xn(g[b]):Yt(g[b]);yt.key!=null&&ve.set(yt.key,b)}let be,$e=0;const Vt=q-ne+1;let zr=!1,Mh=0;const Ms=new Array(Vt);for(b=0;b<Vt;b++)Ms[b]=0;for(b=Y;b<=W;b++){const yt=f[b];if($e>=Vt){ht(yt,I,A,!0);continue}let Wt;if(yt.key!=null)Wt=ve.get(yt.key);else for(be=ne;be<=q;be++)if(Ms[be-ne]===0&&Ls(yt,g[be])){Wt=be;break}Wt===void 0?ht(yt,I,A,!0):(Ms[Wt-ne]=b+1,Wt>=Mh?Mh=Wt:zr=!0,T(yt,g[Wt],m,null,I,A,V,P,k),$e++)}const Lh=zr?bv(Ms):ts;for(be=Lh.length-1,b=Vt-1;b>=0;b--){const yt=ne+b,Wt=g[yt],Fh=yt+1<M?g[yt+1].el:_;Ms[b]===0?T(null,Wt,m,Fh,I,A,V,P,k):zr&&(be<0||b!==Lh[be]?zt(Wt,m,Fh,2):be--)}}},zt=(f,g,m,_,I=null)=>{const{el:A,type:V,transition:P,children:k,shapeFlag:b}=f;if(b&6){zt(f.component.subTree,g,m,_);return}if(b&128){f.suspense.move(g,m,_);return}if(b&64){V.move(f,g,m,O);return}if(V===Qt){r(A,g,m);for(let W=0;W<k.length;W++)zt(k[W],g,m,_);r(f.anchor,g,m);return}if(V===So){N(f,g,m);return}if(_!==2&&b&1&&P)if(_===0)P.beforeEnter(A),r(A,g,m),dt(()=>P.enter(A),I);else{const{leave:W,delayLeave:q,afterLeave:Y}=P,ne=()=>r(A,g,m),ve=()=>{W(A,()=>{ne(),Y&&Y()})};q?q(A,ne,ve):ve()}else r(A,g,m)},ht=(f,g,m,_=!1,I=!1)=>{const{type:A,props:V,ref:P,children:k,dynamicChildren:b,shapeFlag:M,patchFlag:W,dirs:q}=f;if(P!=null&&el(P,null,m,f,!0),M&256){g.ctx.deactivate(f);return}const Y=M&1&&q,ne=!Ro(f);let ve;if(ne&&(ve=V&&V.onVnodeBeforeUnmount)&&Kt(ve,g,f),M&6)so(f.component,m,_);else{if(M&128){f.suspense.unmount(m,_);return}Y&&or(f,null,g,"beforeUnmount"),M&64?f.type.remove(f,g,m,I,O,_):b&&(A!==Qt||W>0&&W&64)?Ze(b,g,m,!1,!0):(A===Qt&&W&384||!I&&M&16)&&Ze(k,g,m),_&&qr(f)}(ne&&(ve=V&&V.onVnodeUnmounted)||Y)&&dt(()=>{ve&&Kt(ve,g,f),Y&&or(f,null,g,"unmounted")},m)},qr=f=>{const{type:g,el:m,anchor:_,transition:I}=f;if(g===Qt){Hr(m,_);return}if(g===So){B(f);return}const A=()=>{s(m),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:V,delayLeave:P}=I,k=()=>V(m,A);P?P(f.el,A,k):k()}else A()},Hr=(f,g)=>{let m;for(;f!==g;)m=d(f),s(f),f=m;s(g)},so=(f,g,m)=>{const{bum:_,scope:I,update:A,subTree:V,um:P}=f;_&&Ao(_),I.stop(),A&&(A.active=!1,ht(V,f,g,m)),P&&dt(P,g),dt(()=>{f.isUnmounted=!0},g),g&&g.pendingBranch&&!g.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===g.pendingId&&(g.deps--,g.deps===0&&g.resolve())},Ze=(f,g,m,_=!1,I=!1,A=0)=>{for(let V=A;V<f.length;V++)ht(f[V],g,m,_,I)},v=f=>f.shapeFlag&6?v(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),F=(f,g,m)=>{f==null?g._vnode&&ht(g._vnode,null,null,!0):T(g._vnode||null,f,g,null,null,null,m),Gh(),Zp(),g._vnode=f},O={p:T,um:ht,m:zt,r:qr,mt:ir,mc:ee,pc:fe,pbc:Ee,n:v,o:t};let j,pe;return e&&([j,pe]=e(O)),{render:F,hydrate:j,createApp:_v(F,j)}}function dc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ar({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function Rv(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function vg(t,e,n=!1){const r=t.children,s=e.children;if(z(r)&&z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=xn(s[i]),a.el=o.el),n||vg(o,a)),a.type===wa&&(a.el=o.el)}}function bv(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Eg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Eg(e)}const Sv=t=>t.__isTeleport,Qt=Symbol.for("v-fgt"),wa=Symbol.for("v-txt"),Cr=Symbol.for("v-cmt"),So=Symbol.for("v-stc"),Zs=[];let Lt=null;function de(t=!1){Zs.push(Lt=t?null:[])}function Pv(){Zs.pop(),Lt=Zs[Zs.length-1]||null}let gi=1;function id(t){gi+=t}function wg(t){return t.dynamicChildren=gi>0?Lt||ts:null,Pv(),gi>0&&Lt&&Lt.push(t),t}function we(t,e,n,r,s,i){return wg(C(t,e,n,r,s,i,!0))}function mi(t,e,n,r,s){return wg(ce(t,e,n,r,s,!0))}function tl(t){return t?t.__v_isVNode===!0:!1}function Ls(t,e){return t.type===e.type&&t.key===e.key}const Ia="__vInternal",Ig=({key:t})=>t??null,Po=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Fe(t)||Ue(t)||J(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function C(t,e=null,n=null,r=0,s=null,i=t===Qt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ig(e),ref:e&&Po(e),scopeId:ng,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Et};return a?(uu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Fe(n)?8:16),gi>0&&!o&&Lt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Lt.push(c),c}const ce=kv;function kv(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===z0)&&(t=Cr),tl(t)){const a=us(t,e,!0);return n&&uu(a,n),gi>0&&!i&&Lt&&(a.shapeFlag&6?Lt[Lt.indexOf(t)]=a:Lt.push(a)),a.patchFlag|=-2,a}if(jv(t)&&(t=t.__vccOpts),e){e=Ov(e);let{class:a,style:c}=e;a&&!Fe(a)&&(e.class=bs(a)),Te(c)&&(Wp(c)&&!z(c)&&(c=Xe({},c)),e.style=Ql(c))}const o=Fe(t)?1:K0(t)?128:Sv(t)?64:Te(t)?4:J(t)?2:0;return C(t,e,n,r,s,o,i,!0)}function Ov(t){return t?Wp(t)||Ia in t?Xe({},t):t:null}function us(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?Dv(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Ig(a),ref:e&&e.ref?n&&s?z(s)?s.concat(Po(e)):[s,Po(e)]:Po(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Qt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&us(t.ssContent),ssFallback:t.ssFallback&&us(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function yr(t=" ",e=0){return ce(wa,null,t,e)}function xv(t,e){const n=ce(So,null,t);return n.staticCount=e,n}function It(t="",e=!1){return e?(de(),mi(Cr,null,t)):ce(Cr,null,t)}function Yt(t){return t==null||typeof t=="boolean"?ce(Cr):z(t)?ce(Qt,null,t.slice()):typeof t=="object"?xn(t):ce(wa,null,String(t))}function xn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:us(t)}function uu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(z(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),uu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(Ia in e)?e._ctx=Et:s===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),r&64?(n=16,e=[yr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Dv(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bs([e.class,r.class]));else if(s==="style")e.style=Ql([e.style,r.style]);else if(fa(s)){const i=e[s],o=r[s];o&&i!==o&&!(z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Kt(t,e,n,r=null){Ut(t,e,7,[n,r])}const Nv=fg();let Vv=0;function Mv(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||Nv,i={uid:Vv++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gg(r,s),emitsOptions:tg(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=$0.bind(null,i),t.ce&&t.ce(i),i}let qe=null,hu,nl;{const t=bp(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};hu=e("__VUE_INSTANCE_SETTERS__",n=>qe=n),nl=e("__VUE_SSR_SETTERS__",n=>Ta=n)}const hs=t=>{hu(t),t.scope.on()},vr=()=>{qe&&qe.scope.off(),hu(null)};function Tg(t){return t.vnode.shapeFlag&4}let Ta=!1;function Lv(t,e=!1){e&&nl(e);const{props:n,children:r}=t.vnode,s=Tg(t);vv(t,n,s,e),Iv(t,r);const i=s?Fv(t,e):void 0;return e&&nl(!1),i}function Fv(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=_a(new Proxy(t.ctx,uv));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?$v(t):null;hs(t),Vr();const i=qn(r,t,0,[t.props,s]);if(Mr(),vr(),Cp(i)){if(i.then(vr,vr),e)return i.then(o=>{od(t,o,e)}).catch(o=>{ya(o,t,0)});t.asyncDep=i}else od(t,i,e)}else Cg(t,e)}function od(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Te(e)&&(t.setupState=Yp(e)),Cg(t,n)}let ad;function Cg(t,e,n){const r=t.type;if(!t.render){if(!e&&ad&&!r.render){const s=r.template||cu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=Xe(Xe({isCustomElement:i,delimiters:a},o),c);r.render=ad(s,l)}}t.render=r.render||kt}{hs(t),Vr();try{hv(t)}finally{Mr(),vr()}}}function Uv(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return mt(t,"get","$attrs"),e[n]}}))}function $v(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return Uv(t)},slots:t.slots,emit:t.emit,expose:e}}function Ca(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Yp(_a(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Js)return Js[n](t)},has(e,n){return n in e||n in Js}}))}function Bv(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function jv(t){return J(t)&&"__vccOpts"in t}const bt=(t,e)=>S0(t,e,Ta);function Ag(t,e,n){const r=arguments.length;return r===2?Te(e)&&!z(e)?tl(e)?ce(t,null,[e]):ce(t,e):ce(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&tl(n)&&(n=[n]),ce(t,e,n))}const qv="3.4.3",Hv="http://www.w3.org/2000/svg",zv="http://www.w3.org/1998/Math/MathML",Dn=typeof document<"u"?document:null,cd=Dn&&Dn.createElement("template"),Wv={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Dn.createElementNS(Hv,t):e==="mathml"?Dn.createElementNS(zv,t):Dn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Dn.createTextNode(t),createComment:t=>Dn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Dn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{cd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=cd.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Kv=Symbol("_vtc");function Gv(t,e,n){const r=t[Kv];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Qv=Symbol("_vod"),Yv=Symbol("");function Xv(t,e,n){const r=t.style,s=Fe(n);if(n&&!s){if(e&&!Fe(e))for(const i in e)n[i]==null&&rl(r,i,"");for(const i in n)rl(r,i,n[i])}else{const i=r.display;if(s){if(e!==n){const o=r[Yv];o&&(n+=";"+o),r.cssText=n}}else e&&t.removeAttribute("style");Qv in t&&(r.display=i)}}const ld=/\s*!important$/;function rl(t,e,n){if(z(n))n.forEach(r=>rl(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Jv(t,e);ld.test(n)?t.setProperty(Rs(r),n.replace(ld,""),"important"):t[r]=n}}const ud=["Webkit","Moz","ms"],fc={};function Jv(t,e){const n=fc[e];if(n)return n;let r=an(e);if(r!=="filter"&&r in t)return fc[e]=r;r=ga(r);for(let s=0;s<ud.length;s++){const i=ud[s]+r;if(i in t)return fc[e]=i}return e}const hd="http://www.w3.org/1999/xlink";function Zv(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(hd,e.slice(6,e.length)):t.setAttributeNS(hd,e,n);else{const i=s0(e);n==null||i&&!Sp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function eE(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";l!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Sp(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function dn(t,e,n,r){t.addEventListener(e,n,r)}function tE(t,e,n,r){t.removeEventListener(e,n,r)}const dd=Symbol("_vei");function nE(t,e,n,r,s=null){const i=t[dd]||(t[dd]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=rE(e);if(r){const l=i[e]=oE(r,s);dn(t,a,l,c)}else o&&(tE(t,a,o,c),i[e]=void 0)}}const fd=/(?:Once|Passive|Capture)$/;function rE(t){let e;if(fd.test(t)){e={};let r;for(;r=t.match(fd);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Rs(t.slice(2)),e]}let pc=0;const sE=Promise.resolve(),iE=()=>pc||(sE.then(()=>pc=0),pc=Date.now());function oE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ut(aE(r,n.value),e,5,[r])};return n.value=t,n.attached=iE(),n}function aE(t,e){if(z(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const pd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,cE=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?Gv(t,r,l):e==="style"?Xv(t,n,r):fa(e)?Wl(e)||nE(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):lE(t,e,r,l))?eE(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Zv(t,e,r,l))};function lE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&pd(e)&&J(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return pd(e)&&Fe(n)?!1:e in t}const Yn=t=>{const e=t.props["onUpdate:modelValue"]||!1;return z(e)?n=>Ao(e,n):e};function uE(t){t.target.composing=!0}function gd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ot=Symbol("_assign"),Un={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Ot]=Yn(s);const i=r||s.props&&s.props.type==="number";dn(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Uo(a)),t[Ot](a)}),n&&dn(t,"change",()=>{t.value=t.value.trim()}),e||(dn(t,"compositionstart",uE),dn(t,"compositionend",gd),dn(t,"change",gd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Ot]=Yn(i),t.composing)return;const o=s||t.type==="number"?Uo(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},hE={deep:!0,created(t,e,n){t[Ot]=Yn(n),dn(t,"change",()=>{const r=t._modelValue,s=ds(t),i=t.checked,o=t[Ot];if(z(r)){const a=Yl(r,s),c=a!==-1;if(i&&!c)o(r.concat(s));else if(!i&&c){const l=[...r];l.splice(a,1),o(l)}}else if(As(r)){const a=new Set(r);i?a.add(s):a.delete(s),o(a)}else o(Rg(t,i))})},mounted:md,beforeUpdate(t,e,n){t[Ot]=Yn(n),md(t,e,n)}};function md(t,{value:e,oldValue:n},r){t._modelValue=e,z(e)?t.checked=Yl(e,r.props.value)>-1:As(e)?t.checked=e.has(r.props.value):e!==n&&(t.checked=Tr(e,Rg(t,!0)))}const dE={created(t,{value:e},n){t.checked=Tr(e,n.props.value),t[Ot]=Yn(n),dn(t,"change",()=>{t[Ot](ds(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[Ot]=Yn(r),e!==n&&(t.checked=Tr(e,r.props.value))}},fE={deep:!0,created(t,{value:e,modifiers:{number:n}},r){const s=As(e);dn(t,"change",()=>{const i=Array.prototype.filter.call(t.options,o=>o.selected).map(o=>n?Uo(ds(o)):ds(o));t[Ot](t.multiple?s?new Set(i):i:i[0])}),t[Ot]=Yn(r)},mounted(t,{value:e}){_d(t,e)},beforeUpdate(t,e,n){t[Ot]=Yn(n)},updated(t,{value:e}){_d(t,e)}};function _d(t,e){const n=t.multiple;if(!(n&&!z(e)&&!As(e))){for(let r=0,s=t.options.length;r<s;r++){const i=t.options[r],o=ds(i);if(n)z(e)?i.selected=Yl(e,o)>-1:i.selected=e.has(o);else if(Tr(ds(i),e)){t.selectedIndex!==r&&(t.selectedIndex=r);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function ds(t){return"_value"in t?t._value:t.value}function Rg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const V6={created(t,e,n){ho(t,e,n,null,"created")},mounted(t,e,n){ho(t,e,n,null,"mounted")},beforeUpdate(t,e,n,r){ho(t,e,n,r,"beforeUpdate")},updated(t,e,n,r){ho(t,e,n,r,"updated")}};function pE(t,e){switch(t){case"SELECT":return fE;case"TEXTAREA":return Un;default:switch(e){case"checkbox":return hE;case"radio":return dE;default:return Un}}}function ho(t,e,n,r,s){const o=pE(t.tagName,n.props&&n.props.type)[s];o&&o(t,e,n,r)}const gE=["ctrl","shift","alt","meta"],mE={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>gE.some(n=>t[`${n}Key`]&&!e.includes(n))},bg=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(s,...i)=>{for(let o=0;o<e.length;o++){const a=mE[e[o]];if(a&&a(s,e))return}return t(s,...i)})},_E=Xe({patchProp:cE},Wv);let yd;function yE(){return yd||(yd=Cv(_E))}const vE=(...t)=>{const e=yE().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=wE(r);if(!s)return;const i=e._component;!J(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,EE(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function EE(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function wE(t){return Fe(t)?document.querySelector(t):t}var IE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Sg;const Aa=t=>Sg=t,Pg=Symbol();function sl(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(ei||(ei={}));function TE(){const t=Op(!0),e=t.run(()=>je({}));let n=[],r=[];const s=_a({install(i){Aa(s),s._a=i,i.provide(Pg,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return!this._a&&!IE?r.push(i):n.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}const kg=()=>{};function vd(t,e,n,r=kg){t.push(e);const s=()=>{const i=t.indexOf(e);i>-1&&(t.splice(i,1),r())};return!n&&xp()&&a0(s),s}function Wr(t,...e){t.slice().forEach(n=>{n(...e)})}const CE=t=>t();function il(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,r)=>t.set(r,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const r=e[n],s=t[n];sl(s)&&sl(r)&&t.hasOwnProperty(n)&&!Ue(r)&&!jn(r)?t[n]=il(s,r):t[n]=r}return t}const AE=Symbol();function RE(t){return!sl(t)||!t.hasOwnProperty(AE)}const{assign:On}=Object;function bE(t){return!!(Ue(t)&&t.effect)}function SE(t,e,n,r){const{state:s,actions:i,getters:o}=e,a=n.state.value[t];let c;function l(){a||(n.state.value[t]=s?s():{});const u=x0(n.state.value[t]);return On(u,i,Object.keys(o||{}).reduce((h,d)=>(h[d]=_a(bt(()=>{Aa(n);const p=n._s.get(t);return o[d].call(p,p)})),h),{}))}return c=Og(t,l,e,n,r,!0),c}function Og(t,e,n={},r,s,i){let o;const a=On({actions:{}},n),c={deep:!0};let l,u,h=[],d=[],p;const y=r.state.value[t];!i&&!y&&(r.state.value[t]={}),je({});let T;function E(ee){let te;l=u=!1,typeof ee=="function"?(ee(r.state.value[t]),te={type:ei.patchFunction,storeId:t,events:p}):(il(r.state.value[t],ee),te={type:ei.patchObject,payload:ee,storeId:t,events:p});const Ee=T=Symbol();ou().then(()=>{T===Ee&&(l=!0)}),u=!0,Wr(h,te,r.state.value[t])}const S=i?function(){const{state:te}=n,Ee=te?te():{};this.$patch(Je=>{On(Je,Ee)})}:kg;function D(){o.stop(),h=[],d=[],r._s.delete(t)}function N(ee,te){return function(){Aa(r);const Ee=Array.from(arguments),Je=[],_t=[];function At(ue){Je.push(ue)}function ir(ue){_t.push(ue)}Wr(d,{args:Ee,name:ee,store:L,after:At,onError:ir});let Rt;try{Rt=te.apply(this&&this.$id===t?this:L,Ee)}catch(ue){throw Wr(_t,ue),ue}return Rt instanceof Promise?Rt.then(ue=>(Wr(Je,ue),ue)).catch(ue=>(Wr(_t,ue),Promise.reject(ue))):(Wr(Je,Rt),Rt)}}const B={_p:r,$id:t,$onAction:vd.bind(null,d),$patch:E,$reset:S,$subscribe(ee,te={}){const Ee=vd(h,ee,te.detached,()=>Je()),Je=o.run(()=>Xs(()=>r.state.value[t],_t=>{(te.flush==="sync"?u:l)&&ee({storeId:t,type:ei.direct,events:p},_t)},On({},c,te)));return Ee},$dispose:D},L=Li(B);r._s.set(t,L);const ge=(r._a&&r._a.runWithContext||CE)(()=>r._e.run(()=>(o=Op()).run(e)));for(const ee in ge){const te=ge[ee];if(Ue(te)&&!bE(te)||jn(te))i||(y&&RE(te)&&(Ue(te)?te.value=y[ee]:il(te,y[ee])),r.state.value[t][ee]=te);else if(typeof te=="function"){const Ee=N(ee,te);ge[ee]=Ee,a.actions[ee]=te}}return On(L,ge),On(le(L),ge),Object.defineProperty(L,"$state",{get:()=>r.state.value[t],set:ee=>{E(te=>{On(te,ee)})}}),r._p.forEach(ee=>{On(L,o.run(()=>ee({store:L,app:r._a,pinia:r,options:a})))}),y&&i&&n.hydrate&&n.hydrate(L.$state,y),l=!0,u=!0,L}function PE(t,e,n){let r,s;const i=typeof e=="function";typeof t=="string"?(r=t,s=i?n:e):(s=t,r=t.id);function o(a,c){const l=yv();return a=a||(l?$t(Pg,null):null),a&&Aa(a),a=Sg,a._s.has(r)||(i?Og(r,e,s,a):SE(r,s,a)),a._s.get(r)}return o.$id=r,o}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Gr=typeof window<"u";function kE(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const me=Object.assign;function gc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Bt(s)?s.map(t):t(s)}return n}const ti=()=>{},Bt=Array.isArray,OE=/\/$/,xE=t=>t.replace(OE,"");function mc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=ME(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function DE(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ed(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function NE(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&fs(e.matched[r],n.matched[s])&&xg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function fs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function xg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VE(t[n],e[n]))return!1;return!0}function VE(t,e){return Bt(t)?wd(t,e):Bt(e)?wd(e,t):t===e}function wd(t,e){return Bt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function ME(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var _i;(function(t){t.pop="pop",t.push="push"})(_i||(_i={}));var ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ni||(ni={}));function LE(t){if(!t)if(Gr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),xE(t)}const FE=/^[^#]+#/;function UE(t,e){return t.replace(FE,"#")+e}function $E(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ra=()=>({left:window.pageXOffset,top:window.pageYOffset});function BE(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=$E(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Id(t,e){return(history.state?history.state.position-e:-1)+t}const ol=new Map;function jE(t,e){ol.set(t,e)}function qE(t){const e=ol.get(t);return ol.delete(t),e}let HE=()=>location.protocol+"//"+location.host;function Dg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ed(c,"")}return Ed(n,t)+r+s}function zE(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=Dg(t,location),y=n.value,T=e.value;let E=0;if(d){if(n.value=p,e.value=d,o&&o===y){o=null;return}E=T?d.position-T.position:0}else r(p);s.forEach(S=>{S(n.value,y,{delta:E,type:_i.pop,direction:E?E>0?ni.forward:ni.back:ni.unknown})})};function c(){o=n.value}function l(d){s.push(d);const p=()=>{const y=s.indexOf(d);y>-1&&s.splice(y,1)};return i.push(p),p}function u(){const{history:d}=window;d.state&&d.replaceState(me({},d.state,{scroll:Ra()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function Td(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ra():null}}function WE(t){const{history:e,location:n}=window,r={value:Dg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:HE()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(p){console.error(p),n[u?"replace":"assign"](d)}}function o(c,l){const u=me({},e.state,Td(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=me({},s.value,e.state,{forward:c,scroll:Ra()});i(u.current,u,!0);const h=me({},Td(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function KE(t){t=LE(t);const e=WE(t),n=zE(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=me({location:"",base:t,go:r,createHref:UE.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function GE(t){return typeof t=="string"||t&&typeof t=="object"}function Ng(t){return typeof t=="string"||typeof t=="symbol"}const Pn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Vg=Symbol("");var Cd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Cd||(Cd={}));function ps(t,e){return me(new Error,{type:t,[Vg]:!0},e)}function un(t,e){return t instanceof Error&&Vg in t&&(e==null||!!(t.type&e))}const Ad="[^/]+?",QE={sensitive:!1,strict:!1,start:!0,end:!0},YE=/[.+*?^${}()[\]/\\]/g;function XE(t,e){const n=me({},QE,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let p=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(YE,"\\$&"),p+=40;else if(d.type===1){const{value:y,repeatable:T,optional:E,regexp:S}=d;i.push({name:y,repeatable:T,optional:E});const D=S||Ad;if(D!==Ad){p+=10;try{new RegExp(`(${D})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${y}" (${D}): `+B.message)}}let N=T?`((?:${D})(?:/(?:${D}))*)`:`(${D})`;h||(N=E&&l.length<2?`(?:/${N})`:"/"+N),E&&(N+="?"),s+=N,p+=20,E&&(p+=-8),T&&(p+=-20),D===".*"&&(p+=-50)}u.push(p)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const p=u[d]||"",y=i[d-1];h[y.name]=p&&y.repeatable?p.split("/"):p}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const p of d)if(p.type===0)u+=p.value;else if(p.type===1){const{value:y,repeatable:T,optional:E}=p,S=y in l?l[y]:"";if(Bt(S)&&!T)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const D=Bt(S)?S.join("/"):S;if(!D)if(E)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${y}"`);u+=D}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function JE(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function ZE(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=JE(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Rd(r))return 1;if(Rd(s))return-1}return s.length-r.length}function Rd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ew={type:0,value:""},tw=/[a-zA-Z0-9_]/;function nw(t){if(!t)return[[]];if(t==="/")return[[ew]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(p){throw new Error(`ERR (${n})/"${l}": ${p}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:tw.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function rw(t,e,n){const r=XE(nw(t.path),n),s=me(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function sw(t,e){const n=[],r=new Map;e=Pd({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const p=!d,y=iw(u);y.aliasOf=d&&d.record;const T=Pd(e,u),E=[y];if("alias"in u){const N=typeof u.alias=="string"?[u.alias]:u.alias;for(const B of N)E.push(me({},y,{components:d?d.record.components:y.components,path:B,aliasOf:d?d.record:y}))}let S,D;for(const N of E){const{path:B}=N;if(h&&B[0]!=="/"){const L=h.record.path,ie=L[L.length-1]==="/"?"":"/";N.path=h.record.path+(B&&ie+B)}if(S=rw(N,h,T),d?d.alias.push(S):(D=D||S,D!==S&&D.alias.push(S),p&&u.name&&!Sd(S)&&o(u.name)),y.children){const L=y.children;for(let ie=0;ie<L.length;ie++)i(L[ie],S,d&&d.children[ie])}d=d||S,(S.record.components&&Object.keys(S.record.components).length||S.record.name||S.record.redirect)&&c(S)}return D?()=>{o(D)}:ti}function o(u){if(Ng(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&ZE(u,n[h])>=0&&(u.record.path!==n[h].record.path||!Mg(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Sd(u)&&r.set(u.record.name,u)}function l(u,h){let d,p={},y,T;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw ps(1,{location:u});T=d.record.name,p=me(bd(h.params,d.keys.filter(D=>!D.optional).map(D=>D.name)),u.params&&bd(u.params,d.keys.map(D=>D.name))),y=d.stringify(p)}else if("path"in u)y=u.path,d=n.find(D=>D.re.test(y)),d&&(p=d.parse(y),T=d.record.name);else{if(d=h.name?r.get(h.name):n.find(D=>D.re.test(h.path)),!d)throw ps(1,{location:u,currentLocation:h});T=d.record.name,p=me({},h.params,u.params),y=d.stringify(p)}const E=[];let S=d;for(;S;)E.unshift(S.record),S=S.parent;return{name:T,path:y,params:p,matched:E,meta:aw(E)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function bd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function iw(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:ow(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function ow(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Sd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function aw(t){return t.reduce((e,n)=>me(e,n.meta),{})}function Pd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Mg(t,e){return e.children.some(n=>n===t||Mg(t,n))}const Lg=/#/g,cw=/&/g,lw=/\//g,uw=/=/g,hw=/\?/g,Fg=/\+/g,dw=/%5B/g,fw=/%5D/g,Ug=/%5E/g,pw=/%60/g,$g=/%7B/g,gw=/%7C/g,Bg=/%7D/g,mw=/%20/g;function du(t){return encodeURI(""+t).replace(gw,"|").replace(dw,"[").replace(fw,"]")}function _w(t){return du(t).replace($g,"{").replace(Bg,"}").replace(Ug,"^")}function al(t){return du(t).replace(Fg,"%2B").replace(mw,"+").replace(Lg,"%23").replace(cw,"%26").replace(pw,"`").replace($g,"{").replace(Bg,"}").replace(Ug,"^")}function yw(t){return al(t).replace(uw,"%3D")}function vw(t){return du(t).replace(Lg,"%23").replace(hw,"%3F")}function Ew(t){return t==null?"":vw(t).replace(lw,"%2F")}function qo(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function ww(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Fg," "),o=i.indexOf("="),a=qo(o<0?i:i.slice(0,o)),c=o<0?null:qo(i.slice(o+1));if(a in e){let l=e[a];Bt(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function kd(t){let e="";for(let n in t){const r=t[n];if(n=yw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Bt(r)?r.map(i=>i&&al(i)):[r&&al(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Iw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Bt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Tw=Symbol(""),Od=Symbol(""),fu=Symbol(""),pu=Symbol(""),cl=Symbol("");function Fs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Nn(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(ps(4,{from:n,to:e})):h instanceof Error?a(h):GE(h)?a(ps(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},l=t.call(r&&r.instances[s],e,n,c);let u=Promise.resolve(l);t.length<3&&(u=u.then(c)),u.catch(h=>a(h))})}function _c(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Cw(a)){const l=(a.__vccOpts||a)[e];l&&s.push(Nn(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const u=kE(l)?l.default:l;i.components[o]=u;const d=(u.__vccOpts||u)[e];return d&&Nn(d,n,r,i,o)()}))}}return s}function Cw(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function xd(t){const e=$t(fu),n=$t(pu),r=bt(()=>e.resolve(Se(t.to))),s=bt(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(fs.bind(null,u));if(d>-1)return d;const p=Dd(c[l-2]);return l>1&&Dd(u)===p&&h[h.length-1].path!==p?h.findIndex(fs.bind(null,c[l-2])):d}),i=bt(()=>s.value>-1&&Sw(n.params,r.value.params)),o=bt(()=>s.value>-1&&s.value===n.matched.length-1&&xg(n.params,r.value.params));function a(c={}){return bw(c)?e[Se(t.replace)?"replace":"push"](Se(t.to)).catch(ti):Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Aw=ag({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:xd,setup(t,{slots:e}){const n=Li(xd(t)),{options:r}=$t(fu),s=bt(()=>({[Nd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:Ag("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Rw=Aw;function bw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Sw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Bt(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Dd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nd=(t,e,n)=>t??e??n,Pw=ag({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=$t(cl),s=bt(()=>t.route||r.value),i=$t(Od,0),o=bt(()=>{let l=Se(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=bt(()=>s.value.matched[o.value]);bo(Od,bt(()=>o.value+1)),bo(Tw,a),bo(cl,s);const c=je();return Xs(()=>[c.value,a.value,t.name],([l,u,h],[d,p,y])=>{u&&(u.instances[h]=l,p&&p!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=p.leaveGuards),u.updateGuards.size||(u.updateGuards=p.updateGuards))),l&&u&&(!p||!fs(u,p)||!d)&&(u.enterCallbacks[h]||[]).forEach(T=>T(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Vd(n.default,{Component:d,route:l});const p=h.props[u],y=p?p===!0?l.params:typeof p=="function"?p(l):p:null,E=Ag(d,me({},y,e,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Vd(n.default,{Component:E,route:l})||E}}});function Vd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jg=Pw;function kw(t){const e=sw(t.routes,t),n=t.parseQuery||ww,r=t.stringifyQuery||kd,s=t.history,i=Fs(),o=Fs(),a=Fs(),c=P0(Pn);let l=Pn;Gr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=gc.bind(null,v=>""+v),h=gc.bind(null,Ew),d=gc.bind(null,qo);function p(v,F){let O,j;return Ng(v)?(O=e.getRecordMatcher(v),j=F):j=v,e.addRoute(j,O)}function y(v){const F=e.getRecordMatcher(v);F&&e.removeRoute(F)}function T(){return e.getRoutes().map(v=>v.record)}function E(v){return!!e.getRecordMatcher(v)}function S(v,F){if(F=me({},F||c.value),typeof v=="string"){const m=mc(n,v,F.path),_=e.resolve({path:m.path},F),I=s.createHref(m.fullPath);return me(m,_,{params:d(_.params),hash:qo(m.hash),redirectedFrom:void 0,href:I})}let O;if("path"in v)O=me({},v,{path:mc(n,v.path,F.path).path});else{const m=me({},v.params);for(const _ in m)m[_]==null&&delete m[_];O=me({},v,{params:h(m)}),F.params=h(F.params)}const j=e.resolve(O,F),pe=v.hash||"";j.params=u(d(j.params));const f=DE(r,me({},v,{hash:_w(pe),path:j.path})),g=s.createHref(f);return me({fullPath:f,hash:pe,query:r===kd?Iw(v.query):v.query||{}},j,{redirectedFrom:void 0,href:g})}function D(v){return typeof v=="string"?mc(n,v,c.value.path):me({},v)}function N(v,F){if(l!==v)return ps(8,{from:F,to:v})}function B(v){return ge(v)}function L(v){return B(me(D(v),{replace:!0}))}function ie(v){const F=v.matched[v.matched.length-1];if(F&&F.redirect){const{redirect:O}=F;let j=typeof O=="function"?O(v):O;return typeof j=="string"&&(j=j.includes("?")||j.includes("#")?j=D(j):{path:j},j.params={}),me({query:v.query,hash:v.hash,params:"path"in j?{}:v.params},j)}}function ge(v,F){const O=l=S(v),j=c.value,pe=v.state,f=v.force,g=v.replace===!0,m=ie(O);if(m)return ge(me(D(m),{state:typeof m=="object"?me({},pe,m.state):pe,force:f,replace:g}),F||O);const _=O;_.redirectedFrom=F;let I;return!f&&NE(r,j,O)&&(I=ps(16,{to:_,from:j}),zt(j,j,!0,!1)),(I?Promise.resolve(I):Ee(_,j)).catch(A=>un(A)?un(A,2)?A:bn(A):fe(A,_,j)).then(A=>{if(A){if(un(A,2))return ge(me({replace:g},D(A.to),{state:typeof A.to=="object"?me({},pe,A.to.state):pe,force:f}),F||_)}else A=_t(_,j,!0,g,pe);return Je(_,j,A),A})}function ee(v,F){const O=N(v,F);return O?Promise.reject(O):Promise.resolve()}function te(v){const F=Hr.values().next().value;return F&&typeof F.runWithContext=="function"?F.runWithContext(v):v()}function Ee(v,F){let O;const[j,pe,f]=Ow(v,F);O=_c(j.reverse(),"beforeRouteLeave",v,F);for(const m of j)m.leaveGuards.forEach(_=>{O.push(Nn(_,v,F))});const g=ee.bind(null,v,F);return O.push(g),Ze(O).then(()=>{O=[];for(const m of i.list())O.push(Nn(m,v,F));return O.push(g),Ze(O)}).then(()=>{O=_c(pe,"beforeRouteUpdate",v,F);for(const m of pe)m.updateGuards.forEach(_=>{O.push(Nn(_,v,F))});return O.push(g),Ze(O)}).then(()=>{O=[];for(const m of f)if(m.beforeEnter)if(Bt(m.beforeEnter))for(const _ of m.beforeEnter)O.push(Nn(_,v,F));else O.push(Nn(m.beforeEnter,v,F));return O.push(g),Ze(O)}).then(()=>(v.matched.forEach(m=>m.enterCallbacks={}),O=_c(f,"beforeRouteEnter",v,F),O.push(g),Ze(O))).then(()=>{O=[];for(const m of o.list())O.push(Nn(m,v,F));return O.push(g),Ze(O)}).catch(m=>un(m,8)?m:Promise.reject(m))}function Je(v,F,O){a.list().forEach(j=>te(()=>j(v,F,O)))}function _t(v,F,O,j,pe){const f=N(v,F);if(f)return f;const g=F===Pn,m=Gr?history.state:{};O&&(j||g?s.replace(v.fullPath,me({scroll:g&&m&&m.scroll},pe)):s.push(v.fullPath,pe)),c.value=v,zt(v,F,O,g),bn()}let At;function ir(){At||(At=s.listen((v,F,O)=>{if(!so.listening)return;const j=S(v),pe=ie(j);if(pe){ge(me(pe,{replace:!0}),j).catch(ti);return}l=j;const f=c.value;Gr&&jE(Id(f.fullPath,O.delta),Ra()),Ee(j,f).catch(g=>un(g,12)?g:un(g,2)?(ge(g.to,j).then(m=>{un(m,20)&&!O.delta&&O.type===_i.pop&&s.go(-1,!1)}).catch(ti),Promise.reject()):(O.delta&&s.go(-O.delta,!1),fe(g,j,f))).then(g=>{g=g||_t(j,f,!1),g&&(O.delta&&!un(g,8)?s.go(-O.delta,!1):O.type===_i.pop&&un(g,20)&&s.go(-1,!1)),Je(j,f,g)}).catch(ti)}))}let Rt=Fs(),ue=Fs(),ye;function fe(v,F,O){bn(v);const j=ue.list();return j.length?j.forEach(pe=>pe(v,F,O)):console.error(v),Promise.reject(v)}function ln(){return ye&&c.value!==Pn?Promise.resolve():new Promise((v,F)=>{Rt.add([v,F])})}function bn(v){return ye||(ye=!v,ir(),Rt.list().forEach(([F,O])=>v?O(v):F()),Rt.reset()),v}function zt(v,F,O,j){const{scrollBehavior:pe}=t;if(!Gr||!pe)return Promise.resolve();const f=!O&&qE(Id(v.fullPath,0))||(j||!O)&&history.state&&history.state.scroll||null;return ou().then(()=>pe(v,F,f)).then(g=>g&&BE(g)).catch(g=>fe(g,v,F))}const ht=v=>s.go(v);let qr;const Hr=new Set,so={currentRoute:c,listening:!0,addRoute:p,removeRoute:y,hasRoute:E,getRoutes:T,resolve:S,options:t,push:B,replace:L,go:ht,back:()=>ht(-1),forward:()=>ht(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ue.add,isReady:ln,install(v){const F=this;v.component("RouterLink",Rw),v.component("RouterView",jg),v.config.globalProperties.$router=F,Object.defineProperty(v.config.globalProperties,"$route",{enumerable:!0,get:()=>Se(c)}),Gr&&!qr&&c.value===Pn&&(qr=!0,B(s.location).catch(pe=>{}));const O={};for(const pe in Pn)Object.defineProperty(O,pe,{get:()=>c.value[pe],enumerable:!0});v.provide(fu,F),v.provide(pu,Hp(O)),v.provide(cl,c);const j=v.unmount;Hr.add(v),v.unmount=function(){Hr.delete(v),Hr.size<1&&(l=Pn,At&&At(),At=null,c.value=Pn,qr=!1,ye=!1),j()}}};function Ze(v){return v.reduce((F,O)=>F.then(()=>te(O)),Promise.resolve())}return so}function Ow(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>fs(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>fs(l,c))||s.push(c))}return[n,r,s]}function xw(){return $t(pu)}const An=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},Dw={},Nw={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Vw=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Mw=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),Lw=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M12.2796 3.71579C12.097 3.66261 11.903 3.66261 11.7203 3.71579C11.6678 3.7311 11.5754 3.7694 11.3789 3.91817C11.1723 4.07463 10.9193 4.29855 10.5251 4.64896L5.28544 9.3064C4.64309 9.87739 4.46099 10.0496 4.33439 10.24C4.21261 10.4232 4.12189 10.6252 4.06588 10.8379C4.00765 11.0591 3.99995 11.3095 3.99995 12.169V17.17C3.99995 18.041 4.00076 18.6331 4.03874 19.0905C4.07573 19.536 4.14275 19.7634 4.22513 19.9219C4.41488 20.2872 4.71272 20.5851 5.07801 20.7748C5.23658 20.8572 5.46397 20.9242 5.90941 20.9612C6.36681 20.9992 6.95893 21 7.82995 21H7.99995V18C7.99995 15.7909 9.79081 14 12 14C14.2091 14 16 15.7909 16 18V21H16.17C17.041 21 17.6331 20.9992 18.0905 20.9612C18.5359 20.9242 18.7633 20.8572 18.9219 20.7748C19.2872 20.5851 19.585 20.2872 19.7748 19.9219C19.8572 19.7634 19.9242 19.536 19.9612 19.0905C19.9991 18.6331 20 18.041 20 17.17V12.169C20 11.3095 19.9923 11.0591 19.934 10.8379C19.878 10.6252 19.7873 10.4232 19.6655 10.24C19.5389 10.0496 19.3568 9.87739 18.7145 9.3064L13.4748 4.64896C13.0806 4.29855 12.8276 4.07463 12.621 3.91817C12.4245 3.7694 12.3321 3.7311 12.2796 3.71579ZM11.1611 1.79556C11.709 1.63602 12.2909 1.63602 12.8388 1.79556C13.2189 1.90627 13.5341 2.10095 13.8282 2.32363C14.1052 2.53335 14.4172 2.81064 14.7764 3.12995L20.0432 7.81159C20.0716 7.83679 20.0995 7.86165 20.1272 7.88619C20.6489 8.34941 21.0429 8.69935 21.3311 9.13277C21.5746 9.49916 21.7561 9.90321 21.8681 10.3287C22.0006 10.832 22.0004 11.359 22 12.0566C22 12.0936 22 12.131 22 12.169V17.212C22 18.0305 22 18.7061 21.9543 19.2561C21.9069 19.8274 21.805 20.3523 21.5496 20.8439C21.1701 21.5745 20.5744 22.1701 19.8439 22.5496C19.3522 22.805 18.8274 22.9069 18.256 22.9543C17.706 23 17.0305 23 16.2119 23H15.805C15.7972 23 15.7894 23 15.7814 23C15.6603 23 15.5157 23.0001 15.3883 22.9895C15.2406 22.9773 15.0292 22.9458 14.8085 22.8311C14.5345 22.6888 14.3111 22.4654 14.1688 22.1915C14.0542 21.9707 14.0227 21.7593 14.0104 21.6116C13.9998 21.4843 13.9999 21.3396 13.9999 21.2185L14 18C14 16.8954 13.1045 16 12 16C10.8954 16 9.99995 16.8954 9.99995 18L9.99996 21.2185C10 21.3396 10.0001 21.4843 9.98949 21.6116C9.97722 21.7593 9.94572 21.9707 9.83107 22.1915C9.68876 22.4654 9.46538 22.6888 9.19142 22.8311C8.9707 22.9458 8.75929 22.9773 8.6116 22.9895C8.48423 23.0001 8.33959 23 8.21847 23C8.21053 23 8.20268 23 8.19495 23H7.78798C6.96944 23 6.29389 23 5.74388 22.9543C5.17253 22.9069 4.64769 22.805 4.15605 22.5496C3.42548 22.1701 2.8298 21.5745 2.4503 20.8439C2.19492 20.3523 2.09305 19.8274 2.0456 19.2561C1.99993 18.7061 1.99994 18.0305 1.99995 17.212L1.99995 12.169C1.99995 12.131 1.99993 12.0936 1.99992 12.0566C1.99955 11.359 1.99928 10.832 2.1318 10.3287C2.24383 9.90321 2.42528 9.49916 2.66884 9.13277C2.95696 8.69935 3.35105 8.34941 3.87272 7.8862C3.90036 7.86165 3.92835 7.83679 3.95671 7.81159L9.22354 3.12996C9.58274 2.81064 9.89467 2.53335 10.1717 2.32363C10.4658 2.10095 10.781 1.90627 11.1611 1.79556Z",fill:"currentColor"})],-1),Fw=[Vw,Mw,Lw];function Uw(t,e){return de(),we("svg",Nw,Fw)}const $w=An(Dw,[["render",Uw]]),Bw={},jw={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},qw=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Hw=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),zw=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{d:"M22 6V8.42C22 10 21 11 19.42 11H16V4.01C16 2.9 16.91 2 18.02 2C19.11 2.01 20.11 2.45 20.83 3.17C21.55 3.9 22 4.9 22 6Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),C("path",{d:"M2 7V21C2 21.83 2.93998 22.3 3.59998 21.8L5.31 20.52C5.71 20.22 6.27 20.26 6.63 20.62L8.28998 22.29C8.67998 22.68 9.32002 22.68 9.71002 22.29L11.39 20.61C11.74 20.26 12.3 20.22 12.69 20.52L14.4 21.8C15.06 22.29 16 21.82 16 21V4C16 2.9 16.9 2 18 2H7H6C3 2 2 3.79 2 6V7Z",stroke:"currentColor","stroke-width":"1.5","stroke-miterlimit":"10","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),C("path",{d:"M6 9H12",stroke:"currentColor","stroke-width":"1.5","stroke-linecurrentcap":"round","stroke-linejoin":"round"}),C("path",{d:"M6.75 13H11.25",stroke:"currentColor","stroke-width":"1.5","stroke-linecurrentcap":"round","stroke-linejoin":"round"})],-1),Ww=[qw,Hw,zw];function Kw(t,e){return de(),we("svg",jw,Ww)}const Gw=An(Bw,[["render",Kw]]),Qw={},Yw={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},Xw=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),Jw=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),Zw=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M1 3C1 2.44772 1.44772 2 2 2C3.62481 2 5.06733 3.03971 5.58114 4.58114L5.72076 5L18.03 5C18.6859 4.99998 19.2437 4.99996 19.6951 5.04029C20.165 5.08226 20.6347 5.17512 21.064 5.43584C21.6667 5.80183 22.1211 6.36838 22.3477 7.03605C22.5091 7.51168 22.4978 7.99036 22.4369 8.45816C22.3783 8.90755 22.2573 9.45209 22.115 10.0924L21.8088 11.4704C21.664 12.1218 21.5435 12.6641 21.4106 13.1043C21.2716 13.5649 21.1006 13.9803 20.8231 14.36C20.4058 14.931 19.8446 15.3812 19.1967 15.6646C18.7658 15.8532 18.3232 15.93 17.8434 15.9658C17.3849 16 16.8295 16 16.1621 16H10.8379C10.1705 16 9.61512 16 9.15656 15.9658C8.67678 15.93 8.23421 15.8532 7.80328 15.6646C7.15536 15.3812 6.59418 14.931 6.17692 14.36C5.89941 13.9803 5.72844 13.5649 5.58939 13.1043C5.45649 12.6641 5.33602 12.1219 5.19125 11.4704L4.035 6.26729L3.68377 5.21359C3.44219 4.48885 2.76395 4 2 4C1.44772 4 1 3.55228 1 3ZM6.24662 7L7.13569 11.0008C7.29042 11.6971 7.39528 12.166 7.50404 12.5263C7.60908 12.8742 7.69899 13.0531 7.79172 13.18C8.00035 13.4655 8.28094 13.6906 8.6049 13.8323C8.74888 13.8953 8.94301 13.9443 9.30546 13.9713C9.68076 13.9994 10.1612 14 10.8745 14H16.1255C16.8388 14 17.3192 13.9994 17.6945 13.9713C18.057 13.9443 18.2511 13.8953 18.3951 13.8323C18.7191 13.6906 18.9997 13.4655 19.2083 13.18C19.301 13.0531 19.3909 12.8742 19.496 12.5263C19.6047 12.166 19.7096 11.6971 19.8643 11.0008L20.153 9.70159C20.3075 9.00651 20.408 8.54985 20.4536 8.19974C20.4982 7.858 20.4722 7.73312 20.4537 7.67868C20.3782 7.45613 20.2267 7.26728 20.0259 7.14528C19.9767 7.11544 19.8605 7.06302 19.5172 7.03235C19.1655 7.00094 18.6979 7 17.9859 7H6.24662Z",fill:"currentColor"}),C("path",{d:"M11 19C11 20.1046 10.1046 21 9 21C7.89543 21 7 20.1046 7 19C7 17.8954 7.89543 17 9 17C10.1046 17 11 17.8954 11 19Z",fill:"currentColor"}),C("path",{d:"M18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21Z",fill:"currentColor"})],-1),eI=[Xw,Jw,Zw];function tI(t,e){return de(),we("svg",Yw,eI)}const nI=An(Qw,[["render",tI]]),rI={},sI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},iI=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),oI=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),aI=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M5.3783 2C5.3905 2 5.40273 2 5.415 2L7.62171 2C8.01734 1.99998 8.37336 1.99996 8.66942 2.02454C8.98657 2.05088 9.32336 2.11052 9.65244 2.28147C10.109 2.51866 10.4813 2.89096 10.7185 3.34757C10.8895 3.67665 10.9491 4.01343 10.9755 4.33059C11 4.62664 11 4.98265 11 5.37828V7.62172C11 8.01735 11 8.37337 10.9755 8.66942C10.9491 8.98657 10.8895 9.32336 10.7185 9.65244C10.4813 10.109 10.109 10.4813 9.65244 10.7185C9.32336 10.8895 8.98657 10.9491 8.66942 10.9755C8.37337 11 8.01735 11 7.62172 11H5.37828C4.98265 11 4.62664 11 4.33059 10.9755C4.01343 10.9491 3.67665 10.8895 3.34757 10.7185C2.89096 10.4813 2.51866 10.109 2.28147 9.65244C2.11052 9.32336 2.05088 8.98657 2.02454 8.66942C1.99996 8.37336 1.99998 8.01734 2 7.62171L2 5.415C2 5.40273 2 5.3905 2 5.3783C1.99998 4.98266 1.99996 4.62664 2.02454 4.33059C2.05088 4.01343 2.11052 3.67665 2.28147 3.34757C2.51866 2.89096 2.89096 2.51866 3.34757 2.28147C3.67665 2.11052 4.01343 2.05088 4.33059 2.02454C4.62664 1.99996 4.98266 1.99998 5.3783 2ZM4.27752 4.05297C4.27226 4.05488 4.27001 4.05604 4.26952 4.0563C4.17819 4.10373 4.10373 4.17819 4.0563 4.26952C4.05604 4.27001 4.05488 4.27226 4.05297 4.27752C4.05098 4.28299 4.04767 4.29312 4.04372 4.30961C4.03541 4.34427 4.02554 4.40145 4.01768 4.49611C4.00081 4.69932 4 4.9711 4 5.415V7.585C4 8.02891 4.00081 8.30068 4.01768 8.5039C4.02554 8.59855 4.03541 8.65574 4.04372 8.6904C4.04767 8.70688 4.05098 8.71701 4.05297 8.72249C4.05488 8.72775 4.05604 8.72999 4.0563 8.73049C4.10373 8.82181 4.17819 8.89627 4.26952 8.94371C4.27001 8.94397 4.27226 8.94513 4.27752 8.94704C4.28299 8.94903 4.29312 8.95234 4.30961 8.95629C4.34427 8.96459 4.40145 8.97446 4.49611 8.98232C4.69932 8.9992 4.9711 9 5.415 9H7.585C8.02891 9 8.30068 8.9992 8.5039 8.98232C8.59855 8.97446 8.65574 8.96459 8.6904 8.95629C8.70688 8.95234 8.71701 8.94903 8.72249 8.94704C8.72775 8.94513 8.72999 8.94397 8.73049 8.94371C8.82181 8.89627 8.89627 8.82181 8.94371 8.73049C8.94397 8.72999 8.94513 8.72775 8.94704 8.72249C8.94903 8.71701 8.95234 8.70688 8.95629 8.6904C8.96459 8.65574 8.97446 8.59855 8.98232 8.5039C8.9992 8.30068 9 8.02891 9 7.585V5.415C9 4.9711 8.9992 4.69932 8.98232 4.49611C8.97446 4.40145 8.96459 4.34427 8.95629 4.30961C8.95234 4.29312 8.94903 4.28299 8.94704 4.27752C8.94513 4.27226 8.94397 4.27001 8.94371 4.26952C8.89627 4.17819 8.82181 4.10373 8.73049 4.0563C8.72999 4.05604 8.72775 4.05488 8.72249 4.05297C8.71701 4.05098 8.70688 4.04767 8.6904 4.04372C8.65574 4.03541 8.59855 4.02554 8.5039 4.01768C8.30068 4.00081 8.02891 4 7.585 4H5.415C4.9711 4 4.69932 4.00081 4.49611 4.01768C4.40145 4.02554 4.34427 4.03541 4.30961 4.04372C4.29312 4.04767 4.28299 4.05098 4.27752 4.05297ZM16.3783 2H18.6217C19.0173 1.99998 19.3734 1.99996 19.6694 2.02454C19.9866 2.05088 20.3234 2.11052 20.6524 2.28147C21.109 2.51866 21.4813 2.89096 21.7185 3.34757C21.8895 3.67665 21.9491 4.01343 21.9755 4.33059C22 4.62665 22 4.98267 22 5.37832V7.62168C22 8.01733 22 8.37336 21.9755 8.66942C21.9491 8.98657 21.8895 9.32336 21.7185 9.65244C21.4813 10.109 21.109 10.4813 20.6524 10.7185C20.3234 10.8895 19.9866 10.9491 19.6694 10.9755C19.3734 11 19.0174 11 18.6217 11H16.3783C15.9827 11 15.6266 11 15.3306 10.9755C15.0134 10.9491 14.6766 10.8895 14.3476 10.7185C13.891 10.4813 13.5187 10.109 13.2815 9.65244C13.1105 9.32336 13.0509 8.98657 13.0245 8.66942C13 8.37337 13 8.01735 13 7.62172V5.37828C13 4.98265 13 4.62664 13.0245 4.33059C13.0509 4.01344 13.1105 3.67665 13.2815 3.34757C13.5187 2.89096 13.891 2.51866 14.3476 2.28147C14.6766 2.11052 15.0134 2.05088 15.3306 2.02454C15.6266 1.99996 15.9827 1.99998 16.3783 2ZM15.2775 4.05297C15.2723 4.05488 15.27 4.05604 15.2695 4.0563C15.1782 4.10373 15.1037 4.17819 15.0563 4.26952C15.056 4.27001 15.0549 4.27226 15.053 4.27752C15.051 4.28299 15.0477 4.29312 15.0437 4.30961C15.0354 4.34427 15.0255 4.40145 15.0177 4.49611C15.0008 4.69932 15 4.9711 15 5.415V7.585C15 8.02891 15.0008 8.30068 15.0177 8.5039C15.0255 8.59855 15.0354 8.65574 15.0437 8.6904C15.0477 8.70688 15.051 8.71701 15.053 8.72249C15.0549 8.72775 15.056 8.72999 15.0563 8.73049C15.1037 8.82181 15.1782 8.89627 15.2695 8.94371C15.27 8.94397 15.2723 8.94513 15.2775 8.94704C15.283 8.94903 15.2931 8.95234 15.3096 8.95629C15.3443 8.96459 15.4015 8.97446 15.4961 8.98232C15.6993 8.9992 15.9711 9 16.415 9H18.585C19.0289 9 19.3007 8.9992 19.5039 8.98232C19.5986 8.97446 19.6557 8.96459 19.6904 8.95629C19.7069 8.95234 19.717 8.94903 19.7225 8.94704C19.7277 8.94513 19.73 8.94397 19.7305 8.94371C19.8218 8.89627 19.8963 8.82181 19.9437 8.73049C19.944 8.72999 19.9451 8.72775 19.947 8.72249C19.949 8.71701 19.9523 8.70688 19.9563 8.6904C19.9646 8.65573 19.9745 8.59855 19.9823 8.5039C19.9992 8.30068 20 8.02891 20 7.585V5.415C20 4.9711 19.9992 4.69932 19.9823 4.49611C19.9745 4.40145 19.9646 4.34427 19.9563 4.30961C19.9523 4.29312 19.949 4.28299 19.947 4.27752C19.9451 4.27226 19.944 4.27001 19.9437 4.26952C19.8963 4.17819 19.8218 4.10373 19.7305 4.0563C19.73 4.05604 19.7277 4.05488 19.7225 4.05297C19.717 4.05098 19.7069 4.04767 19.6904 4.04372C19.6557 4.03541 19.5986 4.02554 19.5039 4.01768C19.3007 4.00081 19.0289 4 18.585 4H16.415C15.9711 4 15.6993 4.00081 15.4961 4.01768C15.4015 4.02554 15.3443 4.03541 15.3096 4.04372C15.2931 4.04767 15.283 4.05098 15.2775 4.05297ZM5.37828 13H7.62172C8.01735 13 8.37337 13 8.66942 13.0245C8.98657 13.0509 9.32336 13.1105 9.65244 13.2815C10.109 13.5187 10.4813 13.891 10.7185 14.3476C10.8895 14.6766 10.9491 15.0134 10.9755 15.3306C11 15.6266 11 15.9827 11 16.3783V18.6217C11 19.0174 11 19.3734 10.9755 19.6694C10.9491 19.9866 10.8895 20.3234 10.7185 20.6524C10.4813 21.109 10.109 21.4813 9.65244 21.7185C9.32336 21.8895 8.98657 21.9491 8.66942 21.9755C8.37336 22 8.01733 22 7.62168 22H5.37832C4.98267 22 4.62665 22 4.33059 21.9755C4.01343 21.9491 3.67665 21.8895 3.34757 21.7185C2.89096 21.4813 2.51866 21.109 2.28147 20.6524C2.11052 20.3234 2.05088 19.9866 2.02454 19.6694C1.99996 19.3734 1.99998 19.0173 2 18.6217V16.3783C1.99998 15.9827 1.99996 15.6266 2.02454 15.3306C2.05088 15.0134 2.11052 14.6766 2.28147 14.3476C2.51866 13.891 2.89096 13.5187 3.34757 13.2815C3.67665 13.1105 4.01344 13.0509 4.33059 13.0245C4.62664 13 4.98265 13 5.37828 13ZM4.27752 15.053C4.27226 15.0549 4.27001 15.056 4.26952 15.0563C4.17819 15.1037 4.10373 15.1782 4.0563 15.2695C4.05604 15.27 4.05488 15.2723 4.05297 15.2775C4.05098 15.283 4.04767 15.2931 4.04372 15.3096C4.03541 15.3443 4.02554 15.4015 4.01768 15.4961C4.00081 15.6993 4 15.9711 4 16.415V18.585C4 19.0289 4.00081 19.3007 4.01768 19.5039C4.02554 19.5986 4.03541 19.6557 4.04372 19.6904C4.04767 19.7069 4.05098 19.717 4.05297 19.7225C4.05488 19.7277 4.05604 19.73 4.0563 19.7305C4.10373 19.8218 4.17819 19.8963 4.26952 19.9437C4.27001 19.944 4.27226 19.9451 4.27752 19.947C4.28299 19.949 4.29312 19.9523 4.30961 19.9563C4.34427 19.9646 4.40145 19.9745 4.49611 19.9823C4.69932 19.9992 4.9711 20 5.415 20H7.585C8.02891 20 8.30068 19.9992 8.5039 19.9823C8.59855 19.9745 8.65573 19.9646 8.6904 19.9563C8.70688 19.9523 8.71701 19.949 8.72249 19.947C8.72775 19.9451 8.72999 19.944 8.73049 19.9437C8.82181 19.8963 8.89627 19.8218 8.94371 19.7305C8.94397 19.73 8.94513 19.7277 8.94704 19.7225C8.94903 19.717 8.95234 19.7069 8.95629 19.6904C8.96459 19.6557 8.97446 19.5986 8.98232 19.5039C8.9992 19.3007 9 19.0289 9 18.585V16.415C9 15.9711 8.9992 15.6993 8.98232 15.4961C8.97446 15.4015 8.96459 15.3443 8.95629 15.3096C8.95234 15.2931 8.94903 15.283 8.94704 15.2775C8.94513 15.2723 8.94397 15.27 8.94371 15.2695C8.89627 15.1782 8.82181 15.1037 8.73049 15.0563C8.73026 15.0562 8.72968 15.0559 8.72861 15.0554C8.72733 15.0548 8.72536 15.054 8.72249 15.053C8.71701 15.051 8.70688 15.0477 8.6904 15.0437C8.65574 15.0354 8.59855 15.0255 8.5039 15.0177C8.30068 15.0008 8.02891 15 7.585 15H5.415C4.9711 15 4.69932 15.0008 4.49611 15.0177C4.40145 15.0255 4.34427 15.0354 4.30961 15.0437C4.29312 15.0477 4.28299 15.051 4.27752 15.053ZM16.3783 13H18.6217C19.0174 13 19.3734 13 19.6694 13.0245C19.9866 13.0509 20.3234 13.1105 20.6524 13.2815C21.109 13.5187 21.4813 13.891 21.7185 14.3476C21.8895 14.6766 21.9491 15.0134 21.9755 15.3306C22 15.6266 22 15.9827 22 16.3783V18.6217C22 19.0173 22 19.3734 21.9755 19.6694C21.9491 19.9866 21.8895 20.3234 21.7185 20.6524C21.4813 21.109 21.109 21.4813 20.6524 21.7185C20.3234 21.8895 19.9866 21.9491 19.6694 21.9755C19.3734 22 19.0173 22 18.6217 22H16.3783C15.9827 22 15.6266 22 15.3306 21.9755C15.0134 21.9491 14.6766 21.8895 14.3476 21.7185C13.891 21.4813 13.5187 21.109 13.2815 20.6524C13.1105 20.3234 13.0509 19.9866 13.0245 19.6694C13 19.3734 13 19.0174 13 18.6217V16.3783C13 15.9827 13 15.6266 13.0245 15.3306C13.0509 15.0134 13.1105 14.6766 13.2815 14.3476C13.5187 13.891 13.891 13.5187 14.3476 13.2815C14.6766 13.1105 15.0134 13.0509 15.3306 13.0245C15.6266 13 15.9827 13 16.3783 13ZM15.2775 15.053C15.2723 15.0549 15.27 15.056 15.2695 15.0563C15.1782 15.1037 15.1037 15.1782 15.0563 15.2695C15.056 15.27 15.0549 15.2723 15.053 15.2775C15.051 15.283 15.0477 15.2931 15.0437 15.3096C15.0354 15.3443 15.0255 15.4015 15.0177 15.4961C15.0008 15.6993 15 15.9711 15 16.415V18.585C15 19.0289 15.0008 19.3007 15.0177 19.5039C15.0255 19.5986 15.0354 19.6557 15.0437 19.6904C15.0477 19.7069 15.051 19.717 15.053 19.7225C15.0549 19.7277 15.056 19.73 15.0563 19.7305C15.1037 19.8218 15.1782 19.8963 15.2695 19.9437C15.27 19.944 15.2723 19.9451 15.2775 19.947C15.283 19.949 15.2931 19.9523 15.3096 19.9563C15.3443 19.9646 15.4015 19.9745 15.4961 19.9823C15.6993 19.9992 15.9711 20 16.415 20H18.585C19.0289 20 19.3007 19.9992 19.5039 19.9823C19.5986 19.9745 19.6557 19.9646 19.6904 19.9563C19.7069 19.9523 19.717 19.949 19.7225 19.947C19.7277 19.9451 19.73 19.944 19.7305 19.9437C19.8218 19.8963 19.8963 19.8218 19.9437 19.7305C19.944 19.73 19.9451 19.7277 19.947 19.7225C19.949 19.717 19.9523 19.7069 19.9563 19.6904C19.9646 19.6557 19.9745 19.5986 19.9823 19.5039C19.9992 19.3007 20 19.0289 20 18.585V16.415C20 15.9711 19.9992 15.6993 19.9823 15.4961C19.9745 15.4015 19.9646 15.3443 19.9563 15.3096C19.9523 15.2931 19.949 15.283 19.947 15.2775C19.9463 15.2756 19.9458 15.2741 19.9453 15.2729C19.9444 15.2709 19.9439 15.2698 19.9437 15.2695C19.8963 15.1782 19.8218 15.1037 19.7305 15.0563C19.73 15.056 19.7277 15.0549 19.7225 15.053C19.717 15.051 19.7069 15.0477 19.6904 15.0437C19.6557 15.0354 19.5986 15.0255 19.5039 15.0177C19.3007 15.0008 19.0289 15 18.585 15H16.415C15.9711 15 15.6993 15.0008 15.4961 15.0177C15.4015 15.0255 15.3443 15.0354 15.3096 15.0437C15.2931 15.0477 15.283 15.051 15.2775 15.053Z",fill:"currentColor"})],-1),cI=[iI,oI,aI];function lI(t,e){return de(),we("svg",sI,cI)}const uI=An(rI,[["render",lI]]),hI={},dI={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},fI=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),pI=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),gI=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{d:"M5 16C5 15.4477 5.44772 15 6 15H8C8.55229 15 9 15.4477 9 16C9 16.5523 8.55229 17 8 17H6C5.44772 17 5 16.5523 5 16Z",fill:"currentColor"}),C("path",{d:"M11 15C10.4477 15 10 15.4477 10 16C10 16.5523 10.4477 17 11 17H12C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15H11Z",fill:"currentColor"}),C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M6.788 3C5.96948 2.99999 5.29393 2.99998 4.74393 3.04565C4.17258 3.0931 3.64774 3.19496 3.1561 3.45035C2.42553 3.82985 1.82985 4.42553 1.45035 5.1561C1.19496 5.64774 1.0931 6.17258 1.04565 6.74393C0.999977 7.29393 0.999988 7.96946 1 8.78798V15.212C0.999988 16.0305 0.999977 16.7061 1.04565 17.2561C1.0931 17.8274 1.19496 18.3523 1.45035 18.8439C1.82985 19.5745 2.42553 20.1702 3.1561 20.5497C3.64774 20.805 4.17258 20.9069 4.74393 20.9544C5.29394 21 5.96949 21 6.78803 21H17.212C18.0305 21 18.7061 21 19.2561 20.9544C19.8274 20.9069 20.3523 20.805 20.8439 20.5497C21.5745 20.1702 22.1702 19.5745 22.5497 18.8439C22.805 18.3523 22.9069 17.8274 22.9544 17.2561C23 16.7061 23 16.0305 23 15.212V8.78802C23 7.96949 23 7.29394 22.9544 6.74393C22.9069 6.17258 22.805 5.64774 22.5497 5.1561C22.1702 4.42553 21.5745 3.82985 20.8439 3.45035C20.3523 3.19496 19.8274 3.0931 19.2561 3.04565C18.7061 2.99998 18.0305 2.99999 17.212 3H6.788ZM4.07805 5.22517C4.23663 5.1428 4.46402 5.07578 4.90945 5.03879C5.36686 5.00081 5.95898 5 6.83 5H17.17C18.041 5 18.6331 5.00081 19.0906 5.03879C19.536 5.07578 19.7634 5.1428 19.922 5.22517C20.2872 5.41493 20.5851 5.71277 20.7748 6.07805C20.8572 6.23663 20.9242 6.46402 20.9612 6.90945C20.9857 7.20418 20.9947 7.55484 20.9981 8H3.00194C3.00528 7.55484 3.01431 7.20418 3.03879 6.90945C3.07578 6.46402 3.1428 6.23663 3.22517 6.07805C3.41493 5.71277 3.71277 5.41493 4.07805 5.22517ZM3 10V15.17C3 16.041 3.00081 16.6331 3.03879 17.0906C3.07578 17.536 3.1428 17.7634 3.22517 17.922C3.41493 18.2872 3.71277 18.5851 4.07805 18.7748C4.23663 18.8572 4.46402 18.9242 4.90945 18.9612C5.36686 18.9992 5.95898 19 6.83 19H17.17C18.041 19 18.6331 18.9992 19.0906 18.9612C19.536 18.9242 19.7634 18.8572 19.922 18.7748C20.2872 18.5851 20.5851 18.2872 20.7748 17.922C20.8572 17.7634 20.9242 17.536 20.9612 17.0906C20.9992 16.6331 21 16.041 21 15.17V10H3Z",fill:"currentColor"})],-1),mI=[fI,pI,gI];function _I(t,e){return de(),we("svg",dI,mI)}const yI=An(hI,[["render",_I]]);var Md={};/**
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
 */const qg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},vI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Hg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,p=l&63;c||(p=64,o||(d=64)),r.push(n[u],n[h],n[d],n[p])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(qg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new EI;const d=i<<2|a>>4;if(r.push(d),l!==64){const p=a<<4&240|l>>2;if(r.push(p),h!==64){const y=l<<6&192|h;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class EI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const wI=function(t){const e=qg(t);return Hg.encodeByteArray(e,!0)},Ho=function(t){return wI(t).replace(/\./g,"")},zg=function(t){try{return Hg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function II(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const TI=()=>II().__FIREBASE_DEFAULTS__,CI=()=>{if(typeof process>"u"||typeof Md>"u")return;const t=Md.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},AI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&zg(t[1]);return e&&JSON.parse(e)},gu=()=>{try{return TI()||CI()||AI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wg=t=>{var e,n;return(n=(e=gu())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Kg=t=>{const e=Wg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Gg=()=>{var t;return(t=gu())===null||t===void 0?void 0:t.config},Qg=t=>{var e;return(e=gu())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class RI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Yg(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ho(JSON.stringify(n)),Ho(JSON.stringify(o)),""].join(".")}/**
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
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function Xg(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function SI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PI(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jg(){try{return typeof indexedDB=="object"}catch{return!1}}function Zg(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}function kI(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const OI="FirebaseError";class Nt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=OI,Object.setPrototypeOf(this,Nt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?xI(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Nt(s,a,r)}}function xI(t,e){return t.replace(DI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const DI=/\{\$([^}]+)}/g;function NI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yi(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ld(i)&&Ld(o)){if(!yi(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ld(t){return t!==null&&typeof t=="object"}/**
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
 */function Fi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Hs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function zs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function VI(t,e){const n=new MI(t,e);return n.subscribe.bind(n)}class MI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");LI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=yc),s.error===void 0&&(s.error=yc),s.complete===void 0&&(s.complete=yc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function LI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function yc(){}/**
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
 */const FI=1e3,UI=2,$I=4*60*60*1e3,BI=.5;function Fd(t,e=FI,n=UI){const r=e*Math.pow(n,t),s=Math.round(BI*r*(Math.random()-.5)*2);return Math.min($I,r+s)}/**
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
 */function ke(t){return t&&t._delegate?t._delegate:t}class xt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const cr="[DEFAULT]";/**
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
 */class jI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new RI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(HI(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qI(t){return t===cr?void 0:t}function HI(t){return t.instantiationMode==="EAGER"}/**
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
 */class zI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new jI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(se||(se={}));const WI={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},KI=se.INFO,GI={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},QI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=GI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ba{constructor(e){this.name=e,this._logLevel=KI,this._logHandler=QI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const YI=(t,e)=>e.some(n=>t instanceof n);let Ud,$d;function XI(){return Ud||(Ud=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function JI(){return $d||($d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const em=new WeakMap,ll=new WeakMap,tm=new WeakMap,vc=new WeakMap,mu=new WeakMap;function ZI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&em.set(n,t)}).catch(()=>{}),mu.set(e,t),e}function e9(t){if(ll.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ll.set(t,e)}let ul={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ll.get(t);if(e==="objectStoreNames")return t.objectStoreNames||tm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function t9(t){ul=t(ul)}function n9(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Ec(this),e,...n);return tm.set(r,e.sort?e.sort():[e]),Hn(r)}:JI().includes(t)?function(...e){return t.apply(Ec(this),e),Hn(em.get(this))}:function(...e){return Hn(t.apply(Ec(this),e))}}function r9(t){return typeof t=="function"?n9(t):(t instanceof IDBTransaction&&e9(t),YI(t,XI())?new Proxy(t,ul):t)}function Hn(t){if(t instanceof IDBRequest)return ZI(t);if(vc.has(t))return vc.get(t);const e=r9(t);return e!==t&&(vc.set(t,e),mu.set(e,t)),e}const Ec=t=>mu.get(t);function s9(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Hn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Hn(o.result),c.oldVersion,c.newVersion,Hn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const i9=["get","getKey","getAll","getAllKeys","count"],o9=["put","add","delete","clear"],wc=new Map;function Bd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(wc.get(e))return wc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=o9.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||i9.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return wc.set(e,i),i}t9(t=>({...t,get:(e,n,r)=>Bd(e,n)||t.get(e,n,r),has:(e,n)=>!!Bd(e,n)||t.has(e,n)}));/**
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
 */class a9{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(c9(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function c9(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const hl="@firebase/app",jd="0.9.25";/**
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
 */const Ar=new ba("@firebase/app"),l9="@firebase/app-compat",u9="@firebase/analytics-compat",h9="@firebase/analytics",d9="@firebase/app-check-compat",f9="@firebase/app-check",p9="@firebase/auth",g9="@firebase/auth-compat",m9="@firebase/database",_9="@firebase/database-compat",y9="@firebase/functions",v9="@firebase/functions-compat",E9="@firebase/installations",w9="@firebase/installations-compat",I9="@firebase/messaging",T9="@firebase/messaging-compat",C9="@firebase/performance",A9="@firebase/performance-compat",R9="@firebase/remote-config",b9="@firebase/remote-config-compat",S9="@firebase/storage",P9="@firebase/storage-compat",k9="@firebase/firestore",O9="@firebase/firestore-compat",x9="firebase",D9="10.7.1";/**
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
 */const dl="[DEFAULT]",N9={[hl]:"fire-core",[l9]:"fire-core-compat",[h9]:"fire-analytics",[u9]:"fire-analytics-compat",[f9]:"fire-app-check",[d9]:"fire-app-check-compat",[p9]:"fire-auth",[g9]:"fire-auth-compat",[m9]:"fire-rtdb",[_9]:"fire-rtdb-compat",[y9]:"fire-fn",[v9]:"fire-fn-compat",[E9]:"fire-iid",[w9]:"fire-iid-compat",[I9]:"fire-fcm",[T9]:"fire-fcm-compat",[C9]:"fire-perf",[A9]:"fire-perf-compat",[R9]:"fire-rc",[b9]:"fire-rc-compat",[S9]:"fire-gcs",[P9]:"fire-gcs-compat",[k9]:"fire-fst",[O9]:"fire-fst-compat","fire-js":"fire-js",[x9]:"fire-js-all"};/**
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
 */const zo=new Map,fl=new Map;function V9(t,e){try{t.container.addComponent(e)}catch(n){Ar.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function jt(t){const e=t.name;if(fl.has(e))return Ar.debug(`There were multiple attempts to register component ${e}.`),!1;fl.set(e,t);for(const n of zo.values())V9(n,t);return!0}function er(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const M9={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new Lr("app","Firebase",M9);/**
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
 */class L9{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new xt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=D9;function nm(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:dl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=Gg()),!n)throw zn.create("no-options");const i=zo.get(s);if(i){if(yi(n,i.options)&&yi(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new zI(s);for(const c of fl.values())o.addComponent(c);const a=new L9(n,r,o);return zo.set(s,a),a}function Sa(t=dl){const e=zo.get(t);if(!e&&t===dl&&Gg())return nm();if(!e)throw zn.create("no-app",{appName:t});return e}function ft(t,e,n){var r;let s=(r=N9[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ar.warn(a.join(" "));return}jt(new xt(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const F9="firebase-heartbeat-database",U9=1,vi="firebase-heartbeat-store";let Ic=null;function rm(){return Ic||(Ic=s9(F9,U9,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(vi)}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Ic}async function $9(t){try{return await(await rm()).transaction(vi).objectStore(vi).get(sm(t))}catch(e){if(e instanceof Nt)Ar.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Ar.warn(n.message)}}}async function qd(t,e){try{const r=(await rm()).transaction(vi,"readwrite");await r.objectStore(vi).put(e,sm(t)),await r.done}catch(n){if(n instanceof Nt)Ar.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Ar.warn(r.message)}}}function sm(t){return`${t.name}!${t.options.appId}`}/**
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
 */const B9=1024,j9=30*24*60*60*1e3;class q9{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new z9(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hd();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=j9}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hd(),{heartbeatsToSend:r,unsentEntries:s}=H9(this._heartbeatsCache.heartbeats),i=Ho(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hd(){return new Date().toISOString().substring(0,10)}function H9(t,e=B9){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class z9{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Jg()?Zg().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await $9(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zd(t){return Ho(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function W9(t){jt(new xt("platform-logger",e=>new a9(e),"PRIVATE")),jt(new xt("heartbeat",e=>new q9(e),"PRIVATE")),ft(hl,jd,t),ft(hl,jd,"esm2017"),ft("fire-js","")}W9("");function _u(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function im(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const K9=im,om=new Lr("auth","Firebase",im());/**
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
 */const Wo=new ba("@firebase/auth");function G9(t,...e){Wo.logLevel<=se.WARN&&Wo.warn(`Auth (${Fr}): ${t}`,...e)}function ko(t,...e){Wo.logLevel<=se.ERROR&&Wo.error(`Auth (${Fr}): ${t}`,...e)}/**
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
 */function Dt(t,...e){throw yu(t,...e)}function nn(t,...e){return yu(t,...e)}function am(t,e,n){const r=Object.assign(Object.assign({},K9()),{[e]:n});return new Lr("auth","Firebase",r).create(e,{appName:t.name})}function Q9(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Dt(t,"argument-error"),am(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function yu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return om.create(t,...e)}function K(t,e,...n){if(!t)throw yu(e,...n)}function pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ko(e),new Error(e)}function En(t,e){t||pn(e)}/**
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
 */function pl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Y9(){return Wd()==="http:"||Wd()==="https:"}function Wd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function X9(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Y9()||Xg()||"connection"in navigator)?navigator.onLine:!0}function J9(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Ui{constructor(e,n){this.shortDelay=e,this.longDelay=n,En(n>e,"Short delay should be less than long delay!"),this.isMobile=bI()||SI()}get(){return X9()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function vu(t,e){En(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class cm{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Z9={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const eT=new Ui(3e4,6e4);function tr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Rn(t,e,n,r,s={}){return lm(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Fi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),cm.fetch()(um(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function lm(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Z9),e);try{const s=new nT(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw fo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw fo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw fo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw fo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw am(t,u,l);Dt(t,u)}}catch(s){if(s instanceof Nt)throw s;Dt(t,"network-request-failed",{message:String(s)})}}async function $i(t,e,n,r,s={}){const i=await Rn(t,e,n,r,s);return"mfaPendingCredential"in i&&Dt(t,"multi-factor-auth-required",{_serverResponse:i}),i}function um(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?vu(t.config,s):`${t.config.apiScheme}://${s}`}function tT(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class nT{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(nn(this.auth,"network-request-failed")),eT.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=nn(t,e,r);return s.customData._tokenResponse=n,s}function Kd(t){return t!==void 0&&t.enterprise!==void 0}class rT{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return tT(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function sT(t,e){return Rn(t,"GET","/v2/recaptchaConfig",tr(t,e))}/**
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
 */async function iT(t,e){return Rn(t,"POST","/v1/accounts:delete",e)}async function oT(t,e){return Rn(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function aT(t,e=!1){const n=ke(t),r=await n.getIdToken(e),s=Eu(r);K(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ri(Tc(s.auth_time)),issuedAtTime:ri(Tc(s.iat)),expirationTime:ri(Tc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Tc(t){return Number(t)*1e3}function Eu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ko("JWT malformed, contained fewer than 3 sections"),null;try{const s=zg(n);return s?JSON.parse(s):(ko("Failed to decode base64 JWT payload"),null)}catch(s){return ko("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function cT(t){const e=Eu(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function gs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Nt&&lT(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function lT({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class uT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class hm{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ko(t){var e;const n=t.auth,r=await t.getIdToken(),s=await gs(t,oT(n,{idToken:r}));K(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?fT(i.providerUserInfo):[],a=dT(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new hm(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function hT(t){const e=ke(t);await Ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function dT(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function fT(t){return t.map(e=>{var{providerId:n}=e,r=_u(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function pT(t,e){const n=await lm(t,{},async()=>{const r=Fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=um(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",cm.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function gT(t,e){return Rn(t,"POST","/v2/accounts:revokeToken",tr(t,e))}/**
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
 */class Ei{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await pT(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ei;return r&&(K(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(K(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(K(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ei,this.toJSON())}_performRefresh(){return pn("not implemented")}}/**
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
 */function kn(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Er{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=_u(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new uT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new hm(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await gs(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return aT(this,e)}reload(){return hT(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Er(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await gs(this,iT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,p=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,S=(l=n.createdAt)!==null&&l!==void 0?l:void 0,D=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:N,emailVerified:B,isAnonymous:L,providerData:ie,stsTokenManager:ge}=n;K(N&&ge,e,"internal-error");const ee=Ei.fromJSON(this.name,ge);K(typeof N=="string",e,"internal-error"),kn(h,e.name),kn(d,e.name),K(typeof B=="boolean",e,"internal-error"),K(typeof L=="boolean",e,"internal-error"),kn(p,e.name),kn(y,e.name),kn(T,e.name),kn(E,e.name),kn(S,e.name),kn(D,e.name);const te=new Er({uid:N,auth:e,email:d,emailVerified:B,displayName:h,isAnonymous:L,photoURL:y,phoneNumber:p,tenantId:T,stsTokenManager:ee,createdAt:S,lastLoginAt:D});return ie&&Array.isArray(ie)&&(te.providerData=ie.map(Ee=>Object.assign({},Ee))),E&&(te._redirectEventId=E),te}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ei;s.updateFromServerResponse(n);const i=new Er({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ko(i),i}}/**
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
 */const Gd=new Map;function gn(t){En(t instanceof Function,"Expected a class definition");let e=Gd.get(t);return e?(En(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gd.set(t,e),e)}/**
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
 */class dm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}dm.type="NONE";const Qd=dm;/**
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
 */function Oo(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Er._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(gn(Qd),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||gn(Qd);const o=Oo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=Er._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ss(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ss(i,e,r))}}/**
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
 */function Yd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(gm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fm(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_m(e))return"Blackberry";if(ym(e))return"Webos";if(wu(e))return"Safari";if((e.includes("chrome/")||pm(e))&&!e.includes("edge/"))return"Chrome";if(mm(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fm(t=ot()){return/firefox\//i.test(t)}function wu(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pm(t=ot()){return/crios\//i.test(t)}function gm(t=ot()){return/iemobile/i.test(t)}function mm(t=ot()){return/android/i.test(t)}function _m(t=ot()){return/blackberry/i.test(t)}function ym(t=ot()){return/webos/i.test(t)}function Pa(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function mT(t=ot()){var e;return Pa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _T(){return PI()&&document.documentMode===10}function vm(t=ot()){return Pa(t)||mm(t)||ym(t)||_m(t)||/windows phone/i.test(t)||gm(t)}function yT(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Em(t,e=[]){let n;switch(t){case"Browser":n=Yd(ot());break;case"Worker":n=`${Yd(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}/**
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
 */class vT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ET(t,e={}){return Rn(t,"GET","/v2/passwordPolicy",tr(t,e))}/**
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
 */const wT=6;class IT{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:wT,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class TT{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xd(this),this.idTokenSubscription=new Xd(this),this.beforeStateQueue=new vT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=om,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ko(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=J9()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ke(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ET(this),n=new IT(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lr("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await gT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(K(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Em(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&G9(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function nr(t){return ke(t)}class Xd{constructor(e){this.auth=e,this.observer=null,this.addObserver=VI(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function CT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function wm(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=nn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",CT().appendChild(r)})}function AT(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const RT="https://www.google.com/recaptcha/enterprise.js?render=",bT="recaptcha-enterprise",ST="NO_RECAPTCHA";class PT{constructor(e){this.type=bT,this.auth=nr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{sT(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new rT(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;Kd(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ST)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&Kd(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}wm(RT+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Jd(t,e,n,r=!1){const s=new PT(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function gl(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Jd(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Jd(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
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
 */function kT(t,e){const n=er(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(yi(i,e??{}))return s;Dt(s,"already-initialized")}return n.initialize({options:e})}function OT(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xT(t,e,n){const r=nr(t);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Im(e),{host:o,port:a}=DT(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||NT()}function Im(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function DT(t){const e=Im(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zd(o)}}}function Zd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function NT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Iu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return pn("not implemented")}_getIdTokenResponse(e){return pn("not implemented")}_linkToIdToken(e,n){return pn("not implemented")}_getReauthenticationResolver(e){return pn("not implemented")}}async function VT(t,e){return Rn(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function MT(t,e){return $i(t,"POST","/v1/accounts:signInWithPassword",tr(t,e))}/**
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
 */async function LT(t,e){return $i(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}async function FT(t,e){return $i(t,"POST","/v1/accounts:signInWithEmailLink",tr(t,e))}/**
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
 */class wi extends Iu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new wi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new wi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,n,"signInWithPassword",MT);case"emailLink":return LT(e,{email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return gl(e,r,"signUpPassword",VT);case"emailLink":return FT(e,{idToken:n,email:this._email,oobCode:this._password});default:Dt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function is(t,e){return $i(t,"POST","/v1/accounts:signInWithIdp",tr(t,e))}/**
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
 */const UT="http://localhost";class Rr extends Iu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Rr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Dt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=_u(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Rr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:UT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Fi(n)}return e}}/**
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
 */function $T(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function BT(t){const e=Hs(zs(t)).link,n=e?Hs(zs(e)).deep_link_id:null,r=Hs(zs(t)).deep_link_id;return(r?Hs(zs(r)).link:null)||r||n||e||t}class Tu{constructor(e){var n,r,s,i,o,a;const c=Hs(zs(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,h=$T((s=c.mode)!==null&&s!==void 0?s:null);K(l&&u&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=u,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=BT(e);try{return new Tu(n)}catch{return null}}}/**
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
 */class Ss{constructor(){this.providerId=Ss.PROVIDER_ID}static credential(e,n){return wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tu.parseLink(n);return K(r,"argument-error"),wi._fromEmailAndCode(e,r.code,r.tenantId)}}Ss.PROVIDER_ID="password";Ss.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ss.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Cu{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Bi extends Cu{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vn extends Bi{constructor(){super("facebook.com")}static credential(e){return Rr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
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
 */class Mt extends Bi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Rr._fromParams({providerId:Mt.PROVIDER_ID,signInMethod:Mt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mt.credentialFromTaggedObject(e)}static credentialFromError(e){return Mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mt.credential(n,r)}catch{return null}}}Mt.GOOGLE_SIGN_IN_METHOD="google.com";Mt.PROVIDER_ID="google.com";/**
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
 */class Mn extends Bi{constructor(){super("github.com")}static credential(e){return Rr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
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
 */class Ln extends Bi{constructor(){super("twitter.com")}static credential(e,n){return Rr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Ln.credential(n,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
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
 */async function jT(t,e){return $i(t,"POST","/v1/accounts:signUp",tr(t,e))}/**
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
 */class br{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Er._fromIdTokenResponse(e,r,s),o=ef(r);return new br({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ef(r);return new br({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ef(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Go extends Nt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Go.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Go(e,n,r,s)}}function Tm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Go._fromErrorAndOperation(t,i,e,r):i})}async function qT(t,e,n=!1){const r=await gs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return br._forOperation(t,"link",r)}/**
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
 */async function HT(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await gs(t,Tm(r,s,e,t),n);K(i.idToken,r,"internal-error");const o=Eu(i.idToken);K(o,r,"internal-error");const{sub:a}=o;return K(t.uid===a,r,"user-mismatch"),br._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Dt(r,"user-mismatch"),i}}/**
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
 */async function Cm(t,e,n=!1){const r="signIn",s=await Tm(t,r,e),i=await br._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function zT(t,e){return Cm(nr(t),e)}/**
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
 */async function Am(t){const e=nr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function WT(t,e,n){const r=nr(t),o=await gl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",jT).catch(c=>{throw c.code==="auth/password-does-not-meet-requirements"&&Am(t),c}),a=await br._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(a.user),a}function KT(t,e,n){return zT(ke(t),Ss.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Am(t),r})}/**
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
 */async function GT(t,e){return Rn(t,"POST","/v1/accounts:update",e)}/**
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
 */async function QT(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ke(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await gs(r,GT(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function YT(t,e,n,r){return ke(t).onIdTokenChanged(e,n,r)}function XT(t,e,n){return ke(t).beforeAuthStateChanged(e,n)}function JT(t,e,n,r){return ke(t).onAuthStateChanged(e,n,r)}function ZT(t){return ke(t).signOut()}const Qo="__sak";/**
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
 */class Rm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qo,"1"),this.storage.removeItem(Qo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function e2(){const t=ot();return wu(t)||Pa(t)}const t2=1e3,n2=10;class bm extends Rm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=e2()&&yT(),this.fallbackToPolling=vm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);_T()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,n2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},t2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}bm.type="LOCAL";const r2=bm;/**
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
 */class Sm extends Rm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Sm.type="SESSION";const Pm=Sm;/**
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
 */function s2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ka{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ka(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await s2(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ka.receivers=[];/**
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
 */function Au(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class i2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Au("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function rn(){return window}function o2(t){rn().location.href=t}/**
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
 */function km(){return typeof rn().WorkerGlobalScope<"u"&&typeof rn().importScripts=="function"}async function a2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function c2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function l2(){return km()?self:null}/**
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
 */const Om="firebaseLocalStorageDb",u2=1,Yo="firebaseLocalStorage",xm="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Oa(t,e){return t.transaction([Yo],e?"readwrite":"readonly").objectStore(Yo)}function h2(){const t=indexedDB.deleteDatabase(Om);return new ji(t).toPromise()}function ml(){const t=indexedDB.open(Om,u2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Yo,{keyPath:xm})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Yo)?e(r):(r.close(),await h2(),e(await ml()))})})}async function tf(t,e,n){const r=Oa(t,!0).put({[xm]:e,value:n});return new ji(r).toPromise()}async function d2(t,e){const n=Oa(t,!1).get(e),r=await new ji(n).toPromise();return r===void 0?null:r.value}function nf(t,e){const n=Oa(t,!0).delete(e);return new ji(n).toPromise()}const f2=800,p2=3;class Dm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ml(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>p2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return km()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ka._getInstance(l2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await a2(),!this.activeServiceWorker)return;this.sender=new i2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||c2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ml();return await tf(e,Qo,"1"),await nf(e,Qo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>d2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oa(s,!1).getAll();return new ji(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),f2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Dm.type="LOCAL";const g2=Dm;new Ui(3e4,6e4);/**
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
 */function Nm(t,e){return e?gn(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Ru extends Iu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function m2(t){return Cm(t.auth,new Ru(t),t.bypassAuthState)}function _2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),HT(n,new Ru(t),t.bypassAuthState)}async function y2(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),qT(n,new Ru(t),t.bypassAuthState)}/**
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
 */class Vm{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return m2;case"linkViaPopup":case"linkViaRedirect":return y2;case"reauthViaPopup":case"reauthViaRedirect":return _2;default:Dt(this.auth,"internal-error")}}resolve(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){En(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const v2=new Ui(2e3,1e4);async function E2(t,e,n){const r=nr(t);Q9(t,e,Cu);const s=Nm(r,n);return new hr(r,"signInViaPopup",e,s).executeNotNull()}class hr extends Vm{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,hr.currentPopupAction&&hr.currentPopupAction.cancel(),hr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){En(this.filter.length===1,"Popup operations only handle one event");const e=Au();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(nn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(nn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,hr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(nn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,v2.get())};e()}}hr.currentPopupAction=null;/**
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
 */const w2="pendingRedirect",xo=new Map;class I2 extends Vm{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await T2(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function T2(t,e){const n=R2(e),r=A2(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function C2(t,e){xo.set(t._key(),e)}function A2(t){return gn(t._redirectPersistence)}function R2(t){return Oo(w2,t.config.apiKey,t.name)}async function b2(t,e,n=!1){const r=nr(t),s=Nm(r,e),o=await new I2(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const S2=10*60*1e3;class P2{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k2(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Mm(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(nn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=S2&&this.cachedEventUids.clear(),this.cachedEventUids.has(rf(e))}saveEventToCache(e){this.cachedEventUids.add(rf(e)),this.lastProcessedEventTime=Date.now()}}function rf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Mm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function k2(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Mm(t);default:return!1}}/**
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
 */async function O2(t,e={}){return Rn(t,"GET","/v1/projects",e)}/**
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
 */const x2=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,D2=/^https?/;async function N2(t){if(t.config.emulator)return;const{authorizedDomains:e}=await O2(t);for(const n of e)try{if(V2(n))return}catch{}Dt(t,"unauthorized-domain")}function V2(t){const e=pl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!D2.test(n))return!1;if(x2.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const M2=new Ui(3e4,6e4);function sf(){const t=rn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function L2(t){return new Promise((e,n)=>{var r,s,i;function o(){sf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sf(),n(nn(t,"network-request-failed"))},timeout:M2.get()})}if(!((s=(r=rn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=rn().gapi)===null||i===void 0)&&i.load)o();else{const a=AT("iframefcb");return rn()[a]=()=>{gapi.load?o():n(nn(t,"network-request-failed"))},wm(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Do=null,e})}let Do=null;function F2(t){return Do=Do||L2(t),Do}/**
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
 */const U2=new Ui(5e3,15e3),$2="__/auth/iframe",B2="emulator/auth/iframe",j2={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},q2=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function H2(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?vu(e,B2):`https://${t.config.authDomain}/${$2}`,r={apiKey:e.apiKey,appName:t.name,v:Fr},s=q2.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Fi(r).slice(1)}`}async function z2(t){const e=await F2(t),n=rn().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:H2(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:j2,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=nn(t,"network-request-failed"),a=rn().setTimeout(()=>{i(o)},U2.get());function c(){rn().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const W2={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},K2=500,G2=600,Q2="_blank",Y2="http://localhost";class of{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function X2(t,e,n,r=K2,s=G2){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},W2),{width:r.toString(),height:s.toString(),top:i,left:o}),l=ot().toLowerCase();n&&(a=pm(l)?Q2:n),fm(l)&&(e=e||Y2,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[p,y])=>`${d}${p}=${y},`,"");if(mT(l)&&a!=="_self")return J2(e||"",a),new of(null);const h=window.open(e||"",a,u);K(h,t,"popup-blocked");try{h.focus()}catch{}return new of(h)}function J2(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Z2="__/auth/handler",eC="emulator/auth/handler",tC=encodeURIComponent("fac");async function af(t,e,n,r,s,i){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Fr,eventId:s};if(e instanceof Cu){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Bi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${tC}=${encodeURIComponent(c)}`:"";return`${nC(t)}?${Fi(a).slice(1)}${l}`}function nC({config:t}){return t.emulator?vu(t,eC):`https://${t.authDomain}/${Z2}`}/**
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
 */const Cc="webStorageSupport";class rC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Pm,this._completeRedirectFn=b2,this._overrideRedirectResult=C2}async _openPopup(e,n,r,s){var i;En((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await af(e,n,r,pl(),s);return X2(e,o,Au())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await af(e,n,r,pl(),s);return o2(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(En(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await z2(e),r=new P2(e);return n.register("authEvent",s=>(K(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Cc,{type:Cc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Cc];o!==void 0&&n(!!o),Dt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=N2(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vm()||wu()||Pa()}}const sC=rC;var cf="@firebase/auth",lf="1.5.1";/**
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
 */class iC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function oC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function aC(t){jt(new xt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Em(t)},l=new TT(r,s,i,c);return OT(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),jt(new xt("auth-internal",e=>{const n=nr(e.getProvider("auth").getImmediate());return(r=>new iC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ft(cf,lf,oC(t)),ft(cf,lf,"esm2017")}/**
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
 */const cC=5*60,lC=Qg("authIdTokenMaxAge")||cC;let uf=null;const uC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>lC)return;const s=n==null?void 0:n.token;uf!==s&&(uf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hC(t=Sa()){const e=er(t,"auth");if(e.isInitialized())return e.getImmediate();const n=kT(t,{popupRedirectResolver:sC,persistence:[g2,r2,Pm]}),r=Qg("authTokenSyncURL");if(r){const i=uC(r);XT(n,i,()=>i(n.currentUser)),YT(n,o=>i(o))}const s=Wg("auth");return s&&xT(n,`http://${s}`),n}aC("Browser");var dC="firebase",fC="10.7.1";/**
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
 */ft(dC,fC,"app");const pC=(t,e)=>e.some(n=>t instanceof n);let hf,df;function gC(){return hf||(hf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mC(){return df||(df=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Lm=new WeakMap,_l=new WeakMap,Fm=new WeakMap,Ac=new WeakMap,bu=new WeakMap;function _C(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Wn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Lm.set(n,t)}).catch(()=>{}),bu.set(e,t),e}function yC(t){if(_l.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});_l.set(t,e)}let yl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _l.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Fm.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Wn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function vC(t){yl=t(yl)}function EC(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Rc(this),e,...n);return Fm.set(r,e.sort?e.sort():[e]),Wn(r)}:mC().includes(t)?function(...e){return t.apply(Rc(this),e),Wn(Lm.get(this))}:function(...e){return Wn(t.apply(Rc(this),e))}}function wC(t){return typeof t=="function"?EC(t):(t instanceof IDBTransaction&&yC(t),pC(t,gC())?new Proxy(t,yl):t)}function Wn(t){if(t instanceof IDBRequest)return _C(t);if(Ac.has(t))return Ac.get(t);const e=wC(t);return e!==t&&(Ac.set(t,e),bu.set(e,t)),e}const Rc=t=>bu.get(t);function IC(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Wn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Wn(o.result),c.oldVersion,c.newVersion,Wn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const TC=["get","getKey","getAll","getAllKeys","count"],CC=["put","add","delete","clear"],bc=new Map;function ff(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(bc.get(e))return bc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=CC.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||TC.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return bc.set(e,i),i}vC(t=>({...t,get:(e,n,r)=>ff(e,n)||t.get(e,n,r),has:(e,n)=>!!ff(e,n)||t.has(e,n)}));const Um="@firebase/installations",Su="0.6.4";/**
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
 */const $m=1e4,Bm=`w:${Su}`,jm="FIS_v2",AC="https://firebaseinstallations.googleapis.com/v1",RC=60*60*1e3,bC="installations",SC="Installations";/**
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
 */const PC={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Sr=new Lr(bC,SC,PC);function qm(t){return t instanceof Nt&&t.code.includes("request-failed")}/**
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
 */function Hm({projectId:t}){return`${AC}/projects/${t}/installations`}function zm(t){return{token:t.token,requestStatus:2,expiresIn:OC(t.expiresIn),creationTime:Date.now()}}async function Wm(t,e){const r=(await e.json()).error;return Sr.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function Km({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function kC(t,{refreshToken:e}){const n=Km(t);return n.append("Authorization",xC(e)),n}async function Gm(t){const e=await t();return e.status>=500&&e.status<600?t():e}function OC(t){return Number(t.replace("s","000"))}function xC(t){return`${jm} ${t}`}/**
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
 */async function DC({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=Hm(t),s=Km(t),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={fid:n,authVersion:jm,appId:t.appId,sdkVersion:Bm},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Gm(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:zm(l.authToken)}}else throw await Wm("Create Installation",c)}/**
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
 */function Qm(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function NC(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const VC=/^[cdef][\w-]{21}$/,vl="";function MC(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const n=LC(t);return VC.test(n)?n:vl}catch{return vl}}function LC(t){return NC(t).substr(0,22)}/**
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
 */function xa(t){return`${t.appName}!${t.appId}`}/**
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
 */const Ym=new Map;function Xm(t,e){const n=xa(t);Jm(n,e),FC(n,e)}function Jm(t,e){const n=Ym.get(t);if(n)for(const r of n)r(e)}function FC(t,e){const n=UC();n&&n.postMessage({key:t,fid:e}),$C()}let dr=null;function UC(){return!dr&&"BroadcastChannel"in self&&(dr=new BroadcastChannel("[Firebase] FID Change"),dr.onmessage=t=>{Jm(t.data.key,t.data.fid)}),dr}function $C(){Ym.size===0&&dr&&(dr.close(),dr=null)}/**
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
 */const BC="firebase-installations-database",jC=1,Pr="firebase-installations-store";let Sc=null;function Pu(){return Sc||(Sc=IC(BC,jC,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Pr)}}})),Sc}async function Xo(t,e){const n=xa(t),s=(await Pu()).transaction(Pr,"readwrite"),i=s.objectStore(Pr),o=await i.get(n);return await i.put(e,n),await s.done,(!o||o.fid!==e.fid)&&Xm(t,e.fid),e}async function Zm(t){const e=xa(t),r=(await Pu()).transaction(Pr,"readwrite");await r.objectStore(Pr).delete(e),await r.done}async function Da(t,e){const n=xa(t),s=(await Pu()).transaction(Pr,"readwrite"),i=s.objectStore(Pr),o=await i.get(n),a=e(o);return a===void 0?await i.delete(n):await i.put(a,n),await s.done,a&&(!o||o.fid!==a.fid)&&Xm(t,a.fid),a}/**
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
 */async function ku(t){let e;const n=await Da(t.appConfig,r=>{const s=qC(r),i=HC(t,s);return e=i.registrationPromise,i.installationEntry});return n.fid===vl?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function qC(t){const e=t||{fid:MC(),registrationStatus:0};return e_(e)}function HC(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Sr.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=zC(t,n);return{installationEntry:n,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:WC(t)}:{installationEntry:e}}async function zC(t,e){try{const n=await DC(t,e);return Xo(t.appConfig,n)}catch(n){throw qm(n)&&n.customData.serverCode===409?await Zm(t.appConfig):await Xo(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function WC(t){let e=await pf(t.appConfig);for(;e.registrationStatus===1;)await Qm(100),e=await pf(t.appConfig);if(e.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await ku(t);return r||n}return e}function pf(t){return Da(t,e=>{if(!e)throw Sr.create("installation-not-found");return e_(e)})}function e_(t){return KC(t)?{fid:t.fid,registrationStatus:0}:t}function KC(t){return t.registrationStatus===1&&t.registrationTime+$m<Date.now()}/**
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
 */async function GC({appConfig:t,heartbeatServiceProvider:e},n){const r=QC(t,n),s=kC(t,n),i=e.getImmediate({optional:!0});if(i){const l=await i.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const o={installation:{sdkVersion:Bm,appId:t.appId}},a={method:"POST",headers:s,body:JSON.stringify(o)},c=await Gm(()=>fetch(r,a));if(c.ok){const l=await c.json();return zm(l)}else throw await Wm("Generate Auth Token",c)}function QC(t,{fid:e}){return`${Hm(t)}/${e}/authTokens:generate`}/**
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
 */async function Ou(t,e=!1){let n;const r=await Da(t.appConfig,i=>{if(!t_(i))throw Sr.create("not-registered");const o=i.authToken;if(!e&&JC(o))return i;if(o.requestStatus===1)return n=YC(t,e),i;{if(!navigator.onLine)throw Sr.create("app-offline");const a=eA(i);return n=XC(t,a),a}});return n?await n:r.authToken}async function YC(t,e){let n=await gf(t.appConfig);for(;n.authToken.requestStatus===1;)await Qm(100),n=await gf(t.appConfig);const r=n.authToken;return r.requestStatus===0?Ou(t,e):r}function gf(t){return Da(t,e=>{if(!t_(e))throw Sr.create("not-registered");const n=e.authToken;return tA(n)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function XC(t,e){try{const n=await GC(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await Xo(t.appConfig,r),n}catch(n){if(qm(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Zm(t.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Xo(t.appConfig,r)}throw n}}function t_(t){return t!==void 0&&t.registrationStatus===2}function JC(t){return t.requestStatus===2&&!ZC(t)}function ZC(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+RC}function eA(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function tA(t){return t.requestStatus===1&&t.requestTime+$m<Date.now()}/**
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
 */async function nA(t){const e=t,{installationEntry:n,registrationPromise:r}=await ku(e);return r?r.catch(console.error):Ou(e).catch(console.error),n.fid}/**
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
 */async function rA(t,e=!1){const n=t;return await sA(n),(await Ou(n,e)).token}async function sA(t){const{registrationPromise:e}=await ku(t);e&&await e}/**
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
 */function iA(t){if(!t||!t.options)throw Pc("App Configuration");if(!t.name)throw Pc("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw Pc(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function Pc(t){return Sr.create("missing-app-config-values",{valueName:t})}/**
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
 */const n_="installations",oA="installations-internal",aA=t=>{const e=t.getProvider("app").getImmediate(),n=iA(e),r=er(e,"heartbeat");return{app:e,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},cA=t=>{const e=t.getProvider("app").getImmediate(),n=er(e,n_).getImmediate();return{getId:()=>nA(n),getToken:s=>rA(n,s)}};function lA(){jt(new xt(n_,aA,"PUBLIC")),jt(new xt(oA,cA,"PRIVATE"))}lA();ft(Um,Su);ft(Um,Su,"esm2017");/**
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
 */const Jo="analytics",uA="firebase_id",hA="origin",dA=60*1e3,fA="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xu="https://www.googletagmanager.com/gtag/js";/**
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
 */const pt=new ba("@firebase/analytics");/**
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
 */const pA={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Tt=new Lr("analytics","Analytics",pA);/**
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
 */function gA(t){if(!t.startsWith(xu)){const e=Tt.create("invalid-gtag-resource",{gtagURL:t});return pt.warn(e.message),""}return t}function r_(t){return Promise.all(t.map(e=>e.catch(n=>n)))}function mA(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function _A(t,e){const n=mA("firebase-js-sdk-policy",{createScriptURL:gA}),r=document.createElement("script"),s=`${xu}?l=${t}&id=${e}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function yA(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function vA(t,e,n,r,s,i){const o=r[s];try{if(o)await e[o];else{const c=(await r_(n)).find(l=>l.measurementId===s);c&&await e[c.appId]}}catch(a){pt.error(a)}t("config",s,i)}async function EA(t,e,n,r,s){try{let i=[];if(s&&s.send_to){let o=s.send_to;Array.isArray(o)||(o=[o]);const a=await r_(n);for(const c of o){const l=a.find(h=>h.measurementId===c),u=l&&e[l.appId];if(u)i.push(u);else{i=[];break}}}i.length===0&&(i=Object.values(e)),await Promise.all(i),t("event",r,s||{})}catch(i){pt.error(i)}}function wA(t,e,n,r){async function s(i,...o){try{if(i==="event"){const[a,c]=o;await EA(t,e,n,a,c)}else if(i==="config"){const[a,c]=o;await vA(t,e,n,r,a,c)}else if(i==="consent"){const[a]=o;t("consent","update",a)}else if(i==="get"){const[a,c,l]=o;t("get",a,c,l)}else if(i==="set"){const[a]=o;t("set",a)}else t(i,...o)}catch(a){pt.error(a)}}return s}function IA(t,e,n,r,s){let i=function(...o){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(i=window[s]),window[s]=wA(i,t,e,n),{gtagCore:i,wrappedGtag:window[s]}}function TA(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(xu)&&n.src.includes(t))return n;return null}/**
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
 */const CA=30,AA=1e3;class RA{constructor(e={},n=AA){this.throttleMetadata=e,this.intervalMillis=n}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,n){this.throttleMetadata[e]=n}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const s_=new RA;function bA(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function SA(t){var e;const{appId:n,apiKey:r}=t,s={method:"GET",headers:bA(r)},i=fA.replace("{app-id}",n),o=await fetch(i,s);if(o.status!==200&&o.status!==304){let a="";try{const c=await o.json();!((e=c.error)===null||e===void 0)&&e.message&&(a=c.error.message)}catch{}throw Tt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:a})}return o.json()}async function PA(t,e=s_,n){const{appId:r,apiKey:s,measurementId:i}=t.options;if(!r)throw Tt.create("no-app-id");if(!s){if(i)return{measurementId:i,appId:r};throw Tt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new xA;return setTimeout(async()=>{a.abort()},n!==void 0?n:dA),i_({appId:r,apiKey:s,measurementId:i},o,a,e)}async function i_(t,{throttleEndTimeMillis:e,backoffCount:n},r,s=s_){var i;const{appId:o,measurementId:a}=t;try{await kA(r,e)}catch(c){if(a)return pt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:o,measurementId:a};throw c}try{const c=await SA(t);return s.deleteThrottleMetadata(o),c}catch(c){const l=c;if(!OA(l)){if(s.deleteThrottleMetadata(o),a)return pt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:o,measurementId:a};throw c}const u=Number((i=l==null?void 0:l.customData)===null||i===void 0?void 0:i.httpStatus)===503?Fd(n,s.intervalMillis,CA):Fd(n,s.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return s.setThrottleMetadata(o,h),pt.debug(`Calling attemptFetch again in ${u} millis`),i_(t,h,r,s)}}function kA(t,e){return new Promise((n,r)=>{const s=Math.max(e-Date.now(),0),i=setTimeout(n,s);t.addEventListener(()=>{clearTimeout(i),r(Tt.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function OA(t){if(!(t instanceof Nt)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class xA{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function DA(t,e,n,r,s){if(s&&s.global){t("event",n,r);return}else{const i=await e,o=Object.assign(Object.assign({},r),{send_to:i});t("event",n,o)}}/**
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
 */async function NA(){if(Jg())try{await Zg()}catch(t){return pt.warn(Tt.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return pt.warn(Tt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function VA(t,e,n,r,s,i,o){var a;const c=PA(t);c.then(p=>{n[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&pt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>pt.error(p)),e.push(c);const l=NA().then(p=>{if(p)return r.getId()}),[u,h]=await Promise.all([c,l]);TA(i)||_A(i,u.measurementId),s("js",new Date);const d=(a=o==null?void 0:o.config)!==null&&a!==void 0?a:{};return d[hA]="firebase",d.update=!0,h!=null&&(d[uA]=h),s("config",u.measurementId,d),u.measurementId}/**
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
 */class MA{constructor(e){this.app=e}_delete(){return delete si[this.app.options.appId],Promise.resolve()}}let si={},mf=[];const _f={};let kc="dataLayer",LA="gtag",yf,o_,vf=!1;function FA(){const t=[];if(Xg()&&t.push("This is a browser extension environment."),kI()||t.push("Cookies are not available."),t.length>0){const e=t.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Tt.create("invalid-analytics-context",{errorInfo:e});pt.warn(n.message)}}function UA(t,e,n){FA();const r=t.options.appId;if(!r)throw Tt.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)pt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Tt.create("no-api-key");if(si[r]!=null)throw Tt.create("already-exists",{id:r});if(!vf){yA(kc);const{wrappedGtag:i,gtagCore:o}=IA(si,mf,_f,kc,LA);o_=i,yf=o,vf=!0}return si[r]=VA(t,mf,_f,e,yf,kc,n),new MA(t)}function $A(t=Sa()){t=ke(t);const e=er(t,Jo);return e.isInitialized()?e.getImmediate():BA(t)}function BA(t,e={}){const n=er(t,Jo);if(n.isInitialized()){const s=n.getImmediate();if(yi(e,n.getOptions()))return s;throw Tt.create("already-initialized")}return n.initialize({options:e})}function jA(t,e,n,r){t=ke(t),DA(o_,si[t.app.options.appId],e,n,r).catch(s=>pt.error(s))}const Ef="@firebase/analytics",wf="0.10.0";function qA(){jt(new xt(Jo,(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return UA(r,s,n)},"PUBLIC")),jt(new xt("analytics-internal",t,"PRIVATE")),ft(Ef,wf),ft(Ef,wf,"esm2017");function t(e){try{const n=e.getProvider(Jo).getImmediate();return{logEvent:(r,s,i)=>jA(n,r,s,i)}}catch(n){throw Tt.create("interop-component-reg-failed",{reason:n})}}}qA();var HA=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},x,Du=Du||{},Q=HA||self;function Na(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function qi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function zA(t){return Object.prototype.hasOwnProperty.call(t,Oc)&&t[Oc]||(t[Oc]=++WA)}var Oc="closure_uid_"+(1e9*Math.random()>>>0),WA=0;function KA(t,e,n){return t.call.apply(t.bind,arguments)}function GA(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=KA:st=GA,st.apply(null,arguments)}function po(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ze(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function rr(){this.s=this.s,this.o=this.o}var QA=0;rr.prototype.s=!1;rr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),QA!=0)&&zA(this)};rr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const a_=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Nu(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function If(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Na(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function it(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}it.prototype.h=function(){this.defaultPrevented=!0};var YA=function(){if(!Q.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};Q.addEventListener("test",n,e),Q.removeEventListener("test",n,e)}catch{}return t}();function Ii(t){return/^[\s\xa0]*$/.test(t)}function Va(){var t=Q.navigator;return t&&(t=t.userAgent)?t:""}function Jt(t){return Va().indexOf(t)!=-1}function Vu(t){return Vu[" "](t),t}Vu[" "]=function(){};function XA(t,e){var n=q4;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var JA=Jt("Opera"),ms=Jt("Trident")||Jt("MSIE"),c_=Jt("Edge"),El=c_||ms,l_=Jt("Gecko")&&!(Va().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge"))&&!(Jt("Trident")||Jt("MSIE"))&&!Jt("Edge"),ZA=Va().toLowerCase().indexOf("webkit")!=-1&&!Jt("Edge");function u_(){var t=Q.document;return t?t.documentMode:void 0}var wl;e:{var xc="",Dc=function(){var t=Va();if(l_)return/rv:([^\);]+)(\)|;)/.exec(t);if(c_)return/Edge\/([\d\.]+)/.exec(t);if(ms)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ZA)return/WebKit\/(\S+)/.exec(t);if(JA)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Dc&&(xc=Dc?Dc[1]:""),ms){var Nc=u_();if(Nc!=null&&Nc>parseFloat(xc)){wl=String(Nc);break e}}wl=xc}var Il;if(Q.document&&ms){var Tf=u_();Il=Tf||parseInt(wl,10)||void 0}else Il=void 0;var e4=Il;function Ti(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(l_){e:{try{Vu(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:t4[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ti.$.h.call(this)}}ze(Ti,it);var t4={2:"touch",3:"pen",4:"mouse"};Ti.prototype.h=function(){Ti.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Hi="closure_listenable_"+(1e6*Math.random()|0),n4=0;function r4(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++n4,this.fa=this.ia=!1}function Ma(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Mu(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function s4(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function h_(t){const e={};for(const n in t)e[n]=t[n];return e}const Cf="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function d_(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<Cf.length;i++)n=Cf[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function La(t){this.src=t,this.g={},this.h=0}La.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Cl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new r4(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Tl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=a_(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Ma(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Cl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var Lu="closure_lm_"+(1e6*Math.random()|0),Vc={};function f_(t,e,n,r,s){if(r&&r.once)return g_(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)f_(t,e[i],n,r,s);return null}return n=$u(n),t&&t[Hi]?t.O(e,n,qi(r)?!!r.capture:!!r,s):p_(t,e,n,!1,r,s)}function p_(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=qi(s)?!!s.capture:!!s,a=Uu(t);if(a||(t[Lu]=a=new La(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=i4(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)YA||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(__(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function i4(){function t(n){return e.call(t.src,t.listener,n)}const e=o4;return t}function g_(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)g_(t,e[i],n,r,s);return null}return n=$u(n),t&&t[Hi]?t.P(e,n,qi(r)?!!r.capture:!!r,s):p_(t,e,n,!0,r,s)}function m_(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)m_(t,e[i],n,r,s);else r=qi(r)?!!r.capture:!!r,n=$u(n),t&&t[Hi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Cl(i,n,r,s),-1<n&&(Ma(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Uu(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Cl(e,n,r,s)),(n=-1<t?e[t]:null)&&Fu(n))}function Fu(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Hi])Tl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(__(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Uu(e))?(Tl(n,t),n.h==0&&(n.src=null,e[Lu]=null)):Ma(t)}}}function __(t){return t in Vc?Vc[t]:Vc[t]="on"+t}function o4(t,e){if(t.fa)t=!0;else{e=new Ti(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Fu(t),t=n.call(r,e)}return t}function Uu(t){return t=t[Lu],t instanceof La?t:null}var Mc="__closure_events_fn_"+(1e9*Math.random()>>>0);function $u(t){return typeof t=="function"?t:(t[Mc]||(t[Mc]=function(e){return t.handleEvent(e)}),t[Mc])}function He(){rr.call(this),this.i=new La(this),this.S=this,this.J=null}ze(He,rr);He.prototype[Hi]=!0;He.prototype.removeEventListener=function(t,e,n,r){m_(this,t,e,n,r)};function Qe(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new it(e,t);else if(e instanceof it)e.target=e.target||t;else{var s=e;e=new it(r,t),d_(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=go(o,r,!0,e)&&s}if(o=e.g=t,s=go(o,r,!0,e)&&s,s=go(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=go(o,r,!1,e)&&s}He.prototype.N=function(){if(He.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Ma(n[r]);delete t.g[e],t.h--}}this.J=null};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function go(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Tl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Bu=Q.JSON.stringify;class a4{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function c4(){var t=ju;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class l4{constructor(){this.h=this.g=null}add(e,n){const r=y_.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var y_=new a4(()=>new u4,t=>t.reset());class u4{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function h4(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function d4(t){Q.setTimeout(()=>{throw t},0)}let Ci,Ai=!1,ju=new l4,v_=()=>{const t=Q.Promise.resolve(void 0);Ci=()=>{t.then(f4)}};var f4=()=>{for(var t;t=c4();){try{t.h.call(t.g)}catch(n){d4(n)}var e=y_;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ai=!1};function Fa(t,e){He.call(this),this.h=t||1,this.g=e||Q,this.j=st(this.qb,this),this.l=Date.now()}ze(Fa,He);x=Fa.prototype;x.ga=!1;x.T=null;x.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Qe(this,"tick"),this.ga&&(qu(this),this.start()))}};x.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function qu(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}x.N=function(){Fa.$.N.call(this),qu(this),delete this.g};function Hu(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Q.setTimeout(t,e||0)}function E_(t){t.g=Hu(()=>{t.g=null,t.i&&(t.i=!1,E_(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class p4 extends rr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:E_(this)}N(){super.N(),this.g&&(Q.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){rr.call(this),this.h=t,this.g={}}ze(Ri,rr);var Af=[];function w_(t,e,n,r){Array.isArray(n)||(n&&(Af[0]=n.toString()),n=Af);for(var s=0;s<n.length;s++){var i=f_(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function I_(t){Mu(t.g,function(e,n){this.g.hasOwnProperty(n)&&Fu(e)},t),t.g={}}Ri.prototype.N=function(){Ri.$.N.call(this),I_(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Ua(){this.g=!0}Ua.prototype.Ea=function(){this.g=!1};function g4(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function m4(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function es(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+y4(t,n)+(r?" "+r:"")})}function _4(t,e){t.info(function(){return"TIMEOUT: "+e})}Ua.prototype.info=function(){};function y4(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Bu(n)}catch{return e}}var Ur={},Rf=null;function $a(){return Rf=Rf||new He}Ur.Ta="serverreachability";function T_(t){it.call(this,Ur.Ta,t)}ze(T_,it);function bi(t){const e=$a();Qe(e,new T_(e))}Ur.STAT_EVENT="statevent";function C_(t,e){it.call(this,Ur.STAT_EVENT,t),this.stat=e}ze(C_,it);function ut(t){const e=$a();Qe(e,new C_(e,t))}Ur.Ua="timingevent";function A_(t,e){it.call(this,Ur.Ua,t),this.size=e}ze(A_,it);function zi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return Q.setTimeout(function(){t()},e)}var Ba={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},R_={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function zu(){}zu.prototype.h=null;function bf(t){return t.h||(t.h=t.i())}function b_(){}var Wi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Wu(){it.call(this,"d")}ze(Wu,it);function Ku(){it.call(this,"c")}ze(Ku,it);var Al;function ja(){}ze(ja,zu);ja.prototype.g=function(){return new XMLHttpRequest};ja.prototype.i=function(){return{}};Al=new ja;function Ki(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ri(this),this.P=v4,t=El?125:void 0,this.V=new Fa(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new S_}function S_(){this.i=null,this.g="",this.h=!1}var v4=45e3,P_={},Rl={};x=Ki.prototype;x.setTimeout=function(t){this.P=t};function bl(t,e,n){t.L=1,t.A=Ha(wn(e)),t.u=n,t.S=!0,k_(t,null)}function k_(t,e){t.G=Date.now(),Gi(t),t.B=wn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),F_(n.i,"t",r),t.o=0,n=t.l.J,t.h=new S_,t.g=i1(t.l,n?e:null,!t.u),0<t.O&&(t.M=new p4(st(t.Pa,t,t.g),t.O)),w_(t.U,t.g,"readystatechange",t.nb),e=t.I?h_(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),bi(),g4(t.j,t.v,t.B,t.m,t.W,t.u)}x.nb=function(t){t=t.target;const e=this.M;e&&Zt(t)==3?e.l():this.Pa(t)};x.Pa=function(t){try{if(t==this.g)e:{const u=Zt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||El||this.g&&(this.h.h||this.g.ja()||Of(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?bi(3):bi(2)),qa(this);var n=this.g.da();this.ca=n;t:if(O_(this)){var r=Of(this.g);t="";var s=r.length,i=Zt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){fr(this),ii(this);var o="";break t}this.h.i=new Q.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,m4(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ii(a)){var l=a;break t}}l=null}if(n=l)es(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Sl(this,n);else{this.i=!1,this.s=3,ut(12),fr(this),ii(this);break e}}this.S?(x_(this,u,o),El&&this.i&&u==3&&(w_(this.U,this.V,"tick",this.mb),this.V.start())):(es(this.j,this.m,o,null),Sl(this,o)),u==4&&fr(this),this.i&&!this.J&&(u==4?t1(this.l,this):(this.i=!1,Gi(this)))}else $4(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,ut(12)):(this.s=0,ut(13)),fr(this),ii(this)}}}catch{}finally{}};function O_(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function x_(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=E4(t,n),s==Rl){e==4&&(t.s=4,ut(14),r=!1),es(t.j,t.m,null,"[Incomplete Response]");break}else if(s==P_){t.s=4,ut(15),es(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else es(t.j,t.m,s,null),Sl(t,s);O_(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,ut(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Zu(e),e.M=!0,ut(11))):(es(t.j,t.m,n,"[Invalid Chunked Response]"),fr(t),ii(t))}x.mb=function(){if(this.g){var t=Zt(this.g),e=this.g.ja();this.o<e.length&&(qa(this),x_(this,t,e),this.i&&t!=4&&Gi(this))}};function E4(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Rl:(n=Number(e.substring(n,r)),isNaN(n)?P_:(r+=1,r+n>e.length?Rl:(e=e.slice(r,r+n),t.o=r+n,e)))}x.cancel=function(){this.J=!0,fr(this)};function Gi(t){t.Y=Date.now()+t.P,D_(t,t.P)}function D_(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=zi(st(t.lb,t),e)}function qa(t){t.C&&(Q.clearTimeout(t.C),t.C=null)}x.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(_4(this.j,this.B),this.L!=2&&(bi(),ut(17)),fr(this),this.s=2,ii(this)):D_(this,this.Y-t)};function ii(t){t.l.H==0||t.J||t1(t.l,t)}function fr(t){qa(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,qu(t.V),I_(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Sl(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Pl(n.i,t))){if(!t.K&&Pl(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ta(n),Ga(n);else break e;Ju(n),ut(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=zi(st(n.ib,n),6e3));if(1>=B_(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else pr(n,11)}else if((t.K||n.g==t)&&ta(n),!Ii(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const p=t.g;if(p){const y=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var i=r.i;i.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Gu(i,i.h),i.h=null))}if(r.F){const T=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(r.Da=T,Ae(r.I,r.F,T))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=s1(r,r.J?r.pa:null,r.Y),o.K){j_(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(qa(a),Gi(a)),r.g=o}else Z_(r);0<n.j.length&&Qa(n)}else l[0]!="stop"&&l[0]!="close"||pr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?pr(n,7):Xu(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}bi(4)}catch{}}function w4(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Na(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function I4(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Na(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function N_(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Na(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=I4(t),r=w4(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var V_=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function T4(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function wr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof wr){this.h=t.h,Zo(this,t.j),this.s=t.s,this.g=t.g,ea(this,t.m),this.l=t.l;var e=t.i,n=new Si;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Sf(this,n),this.o=t.o}else t&&(e=String(t).match(V_))?(this.h=!1,Zo(this,e[1]||"",!0),this.s=Ws(e[2]||""),this.g=Ws(e[3]||"",!0),ea(this,e[4]),this.l=Ws(e[5]||"",!0),Sf(this,e[6]||"",!0),this.o=Ws(e[7]||"")):(this.h=!1,this.i=new Si(null,this.h))}wr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ks(e,Pf,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ks(e,Pf,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ks(n,n.charAt(0)=="/"?R4:A4,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ks(n,S4)),t.join("")};function wn(t){return new wr(t)}function Zo(t,e,n){t.j=n?Ws(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ea(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Sf(t,e,n){e instanceof Si?(t.i=e,P4(t.i,t.h)):(n||(e=Ks(e,b4)),t.i=new Si(e,t.h))}function Ae(t,e,n){t.i.set(e,n)}function Ha(t){return Ae(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ws(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ks(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,C4),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function C4(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Pf=/[#\/\?@]/g,A4=/[#\?:]/g,R4=/[#\?]/g,b4=/[#\?@]/g,S4=/#/g;function Si(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function sr(t){t.g||(t.g=new Map,t.h=0,t.i&&T4(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}x=Si.prototype;x.add=function(t,e){sr(this),this.i=null,t=Ps(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function M_(t,e){sr(t),e=Ps(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function L_(t,e){return sr(t),e=Ps(t,e),t.g.has(e)}x.forEach=function(t,e){sr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};x.ta=function(){sr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};x.Z=function(t){sr(this);let e=[];if(typeof t=="string")L_(this,t)&&(e=e.concat(this.g.get(Ps(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};x.set=function(t,e){return sr(this),this.i=null,t=Ps(this,t),L_(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};x.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function F_(t,e,n){M_(t,e),0<n.length&&(t.i=null,t.g.set(Ps(t,e),Nu(n)),t.h+=n.length)}x.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Ps(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function P4(t,e){e&&!t.j&&(sr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(M_(this,r),F_(this,s,n))},t)),t.j=e}var k4=class{constructor(t,e){this.g=t,this.map=e}};function U_(t){this.l=t||O4,Q.PerformanceNavigationTiming?(t=Q.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(Q.g&&Q.g.Ka&&Q.g.Ka()&&Q.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var O4=10;function $_(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function B_(t){return t.h?1:t.g?t.g.size:0}function Pl(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Gu(t,e){t.g?t.g.add(e):t.h=e}function j_(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}U_.prototype.cancel=function(){if(this.i=q_(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function q_(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Nu(t.i)}var x4=class{stringify(t){return Q.JSON.stringify(t,void 0)}parse(t){return Q.JSON.parse(t,void 0)}};function D4(){this.g=new x4}function N4(t,e,n){const r=n||"";try{N_(t,function(s,i){let o=s;qi(s)&&(o=Bu(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function V4(t,e){const n=new Ua;if(Q.Image){const r=new Image;r.onload=po(mo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=po(mo,n,r,"TestLoadImage: error",!1,e),r.onabort=po(mo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=po(mo,n,r,"TestLoadImage: timeout",!1,e),Q.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function mo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function za(t){this.l=t.ec||null,this.j=t.ob||!1}ze(za,zu);za.prototype.g=function(){return new Wa(this.l,this.j)};za.prototype.i=function(t){return function(){return t}}({});function Wa(t,e){He.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Qu,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ze(Wa,He);var Qu=0;x=Wa.prototype;x.open=function(t,e){if(this.readyState!=Qu)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pi(this)};x.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||Q).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};x.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=Qu};x.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof Q.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;H_(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function H_(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}x.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Qi(this):Pi(this),this.readyState==3&&H_(this)}};x.Za=function(t){this.g&&(this.response=this.responseText=t,Qi(this))};x.Ya=function(t){this.g&&(this.response=t,Qi(this))};x.ka=function(){this.g&&Qi(this)};function Qi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pi(t)}x.setRequestHeader=function(t,e){this.v.append(t,e)};x.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};x.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Wa.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var M4=Q.JSON.parse;function Oe(t){He.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=z_,this.L=this.M=!1}ze(Oe,He);var z_="",L4=/^https?$/i,F4=["POST","PUT"];x=Oe.prototype;x.Oa=function(t){this.M=t};x.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Al.g(),this.C=this.u?bf(this.u):bf(Al),this.g.onreadystatechange=st(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){kf(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=Q.FormData&&t instanceof Q.FormData,!(0<=a_(F4,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{G_(this),0<this.B&&((this.L=U4(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.ua,this)):this.A=Hu(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){kf(this,i)}};function U4(t){return ms&&typeof t.timeout=="number"&&t.ontimeout!==void 0}x.ua=function(){typeof Du<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Qe(this,"timeout"),this.abort(8))};function kf(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,W_(t),Ka(t)}function W_(t){t.F||(t.F=!0,Qe(t,"complete"),Qe(t,"error"))}x.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Qe(this,"complete"),Qe(this,"abort"),Ka(this))};x.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Ka(this,!0)),Oe.$.N.call(this)};x.La=function(){this.s||(this.G||this.v||this.l?K_(this):this.kb())};x.kb=function(){K_(this)};function K_(t){if(t.h&&typeof Du<"u"&&(!t.C[1]||Zt(t)!=4||t.da()!=2)){if(t.v&&Zt(t)==4)Hu(t.La,0,t);else if(Qe(t,"readystatechange"),Zt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(V_)[1]||null;!s&&Q.self&&Q.self.location&&(s=Q.self.location.protocol.slice(0,-1)),r=!L4.test(s?s.toLowerCase():"")}n=r}if(n)Qe(t,"complete"),Qe(t,"success");else{t.m=6;try{var i=2<Zt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",W_(t)}}finally{Ka(t)}}}}function Ka(t,e){if(t.g){G_(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Qe(t,"ready");try{n.onreadystatechange=r}catch{}}}function G_(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(Q.clearTimeout(t.A),t.A=null)}x.isActive=function(){return!!this.g};function Zt(t){return t.g?t.g.readyState:0}x.da=function(){try{return 2<Zt(this)?this.g.status:-1}catch{return-1}};x.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};x.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),M4(e)}};function Of(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case z_:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function $4(t){const e={};t=(t.g&&2<=Zt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ii(t[r]))continue;var n=h4(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}s4(e,function(r){return r.join(", ")})}x.Ia=function(){return this.m};x.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Q_(t){let e="";return Mu(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Yu(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Q_(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ae(t,e,n))}function Us(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Y_(t){this.Ga=0,this.j=[],this.l=new Ua,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Us("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Us("baseRetryDelayMs",5e3,t),this.hb=Us("retryDelaySeedMs",1e4,t),this.eb=Us("forwardChannelMaxRetries",2,t),this.xa=Us("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new U_(t&&t.concurrentRequestLimit),this.Ja=new D4,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}x=Y_.prototype;x.ra=8;x.H=1;function Xu(t){if(X_(t),t.H==3){var e=t.W++,n=wn(t.I);if(Ae(n,"SID",t.K),Ae(n,"RID",e),Ae(n,"TYPE","terminate"),Yi(t,n),e=new Ki(t,t.l,e),e.L=2,e.A=Ha(wn(n)),n=!1,Q.navigator&&Q.navigator.sendBeacon)try{n=Q.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&Q.Image&&(new Image().src=e.A,n=!0),n||(e.g=i1(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Gi(e)}r1(t)}function Ga(t){t.g&&(Zu(t),t.g.cancel(),t.g=null)}function X_(t){Ga(t),t.u&&(Q.clearTimeout(t.u),t.u=null),ta(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&Q.clearTimeout(t.m),t.m=null)}function Qa(t){if(!$_(t.i)&&!t.m){t.m=!0;var e=t.Na;Ci||v_(),Ai||(Ci(),Ai=!0),ju.add(e,t),t.C=0}}function B4(t,e){return B_(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=zi(st(t.Na,t,e),n1(t,t.C)),t.C++,!0)}x.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ki(this,this.l,t);let i=this.s;if(this.U&&(i?(i=h_(i),d_(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=J_(this,s,e),n=wn(this.I),Ae(n,"RID",t),Ae(n,"CVER",22),this.F&&Ae(n,"X-HTTP-Session-Id",this.F),Yi(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Q_(i)))+"&"+e:this.o&&Yu(n,this.o,i)),Gu(this.i,s),this.bb&&Ae(n,"TYPE","init"),this.P?(Ae(n,"$req",e),Ae(n,"SID","null"),s.aa=!0,bl(s,n,null)):bl(s,n,e),this.H=2}}else this.H==3&&(t?xf(this,t):this.j.length==0||$_(this.i)||xf(this))};function xf(t,e){var n;e?n=e.m:n=t.W++;const r=wn(t.I);Ae(r,"SID",t.K),Ae(r,"RID",n),Ae(r,"AID",t.V),Yi(t,r),t.o&&t.s&&Yu(r,t.o,t.s),n=new Ki(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=J_(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Gu(t.i,n),bl(n,r,e)}function Yi(t,e){t.na&&Mu(t.na,function(n,r){Ae(e,r,n)}),t.h&&N_({},function(n,r){Ae(e,r,n)})}function J_(t,e,n){n=Math.min(t.j.length,n);var r=t.h?st(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{N4(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function Z_(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ci||v_(),Ai||(Ci(),Ai=!0),ju.add(e,t),t.A=0}}function Ju(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=zi(st(t.Ma,t),n1(t,t.A)),t.A++,!0)}x.Ma=function(){if(this.u=null,e1(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=zi(st(this.jb,this),t)}};x.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,ut(10),Ga(this),e1(this))};function Zu(t){t.B!=null&&(Q.clearTimeout(t.B),t.B=null)}function e1(t){t.g=new Ki(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=wn(t.wa);Ae(e,"RID","rpc"),Ae(e,"SID",t.K),Ae(e,"AID",t.V),Ae(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Ae(e,"TO",t.qa),Ae(e,"TYPE","xmlhttp"),Yi(t,e),t.o&&t.s&&Yu(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=Ha(wn(e)),n.u=null,n.S=!0,k_(n,t)}x.ib=function(){this.v!=null&&(this.v=null,Ga(this),Ju(this),ut(19))};function ta(t){t.v!=null&&(Q.clearTimeout(t.v),t.v=null)}function t1(t,e){var n=null;if(t.g==e){ta(t),Zu(t),t.g=null;var r=2}else if(Pl(t.i,e))n=e.F,j_(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=$a(),Qe(r,new A_(r,n)),Qa(t)}else Z_(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&B4(t,e)||r==2&&Ju(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:pr(t,5);break;case 4:pr(t,10);break;case 3:pr(t,6);break;default:pr(t,2)}}}function n1(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function pr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=st(t.pb,t);n||(n=new wr("//www.google.com/images/cleardot.gif"),Q.location&&Q.location.protocol=="http"||Zo(n,"https"),Ha(n)),V4(n.toString(),r)}else ut(2);t.H=0,t.h&&t.h.za(e),r1(t),X_(t)}x.pb=function(t){t?(this.l.info("Successfully pinged google.com"),ut(2)):(this.l.info("Failed to ping google.com"),ut(1))};function r1(t){if(t.H=0,t.ma=[],t.h){const e=q_(t.i);(e.length!=0||t.j.length!=0)&&(If(t.ma,e),If(t.ma,t.j),t.i.i.length=0,Nu(t.j),t.j.length=0),t.h.ya()}}function s1(t,e,n){var r=n instanceof wr?wn(n):new wr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ea(r,r.m);else{var s=Q.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new wr(null);r&&Zo(i,r),e&&(i.g=e),s&&ea(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Ae(r,n,e),Ae(r,"VER",t.ra),Yi(t,r),r}function i1(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Oe(new za({ob:n})):new Oe(t.va),e.Oa(t.J),e}x.isActive=function(){return!!this.h&&this.h.isActive(this)};function o1(){}x=o1.prototype;x.Ba=function(){};x.Aa=function(){};x.za=function(){};x.ya=function(){};x.isActive=function(){return!0};x.Va=function(){};function na(){if(ms&&!(10<=Number(e4)))throw Error("Environmental error: no available transport.")}na.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){He.call(this),this.g=new Y_(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ii(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ii(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ks(this)}ze(Ct,He);Ct.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;ut(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=s1(t,null,t.Y),Qa(t)};Ct.prototype.close=function(){Xu(this.g)};Ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Bu(t),t=n);e.j.push(new k4(e.fb++,t)),e.H==3&&Qa(e)};Ct.prototype.N=function(){this.g.h=null,delete this.j,Xu(this.g),delete this.g,Ct.$.N.call(this)};function a1(t){Wu.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ze(a1,Wu);function c1(){Ku.call(this),this.status=1}ze(c1,Ku);function ks(t){this.g=t}ze(ks,o1);ks.prototype.Ba=function(){Qe(this.g,"a")};ks.prototype.Aa=function(t){Qe(this.g,new a1(t))};ks.prototype.za=function(t){Qe(this.g,new c1)};ks.prototype.ya=function(){Qe(this.g,"b")};function j4(){this.blockSize=-1}function qt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}ze(qt,j4);qt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Lc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}qt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)Lc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){Lc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){Lc(this,r),s=0;break}}this.h=s,this.i+=e};qt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function _e(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var q4={};function eh(t){return-128<=t&&128>t?XA(t,function(e){return new _e([e|0],0>e?-1:0)}):new _e([t|0],0>t?-1:0)}function en(t){if(isNaN(t)||!isFinite(t))return os;if(0>t)return Ke(en(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=kl;return new _e(e,0)}function l1(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ke(l1(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=en(Math.pow(e,8)),r=os,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=en(Math.pow(e,i)),r=r.R(i).add(en(o))):(r=r.R(n),r=r.add(en(o)))}return r}var kl=4294967296,os=eh(0),Ol=eh(1),Df=eh(16777216);x=_e.prototype;x.ea=function(){if(St(this))return-Ke(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:kl+r)*e,e*=kl}return t};x.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mn(this))return"0";if(St(this))return"-"+Ke(this).toString(t);for(var e=en(Math.pow(t,6)),n=this,r="";;){var s=sa(n,e).g;n=ra(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,mn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};x.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function St(t){return t.h==-1}x.X=function(t){return t=ra(this,t),St(t)?-1:mn(t)?0:1};function Ke(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new _e(n,~t.h).add(Ol)}x.abs=function(){return St(this)?Ke(this):this};x.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new _e(n,n[n.length-1]&-2147483648?-1:0)};function ra(t,e){return t.add(Ke(e))}x.R=function(t){if(mn(this)||mn(t))return os;if(St(this))return St(t)?Ke(this).R(Ke(t)):Ke(Ke(this).R(t));if(St(t))return Ke(this.R(Ke(t)));if(0>this.X(Df)&&0>t.X(Df))return en(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,_o(n,2*r+2*s),n[2*r+2*s+1]+=i*c,_o(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,_o(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,_o(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new _e(n,0)};function _o(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function $s(t,e){this.g=t,this.h=e}function sa(t,e){if(mn(e))throw Error("division by zero");if(mn(t))return new $s(os,os);if(St(t))return e=sa(Ke(t),e),new $s(Ke(e.g),Ke(e.h));if(St(e))return e=sa(t,Ke(e)),new $s(Ke(e.g),e.h);if(30<t.g.length){if(St(t)||St(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Ol,r=e;0>=r.X(t);)n=Nf(n),r=Nf(r);var s=Kr(n,1),i=Kr(r,1);for(r=Kr(r,2),n=Kr(n,2);!mn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Kr(r,1),n=Kr(n,1)}return e=ra(t,s.R(e)),new $s(s,e)}for(s=os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=en(n),o=i.R(e);St(o)||0<o.X(t);)n-=r,i=en(n),o=i.R(e);mn(i)&&(i=Ol),s=s.add(i),t=ra(t,o)}return new $s(s,t)}x.gb=function(t){return sa(this,t).h};x.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new _e(n,this.h&t.h)};x.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new _e(n,this.h|t.h)};x.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new _e(n,this.h^t.h)};function Nf(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new _e(n,t.h)}function Kr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new _e(s,t.h)}na.prototype.createWebChannel=na.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;Ba.NO_ERROR=0;Ba.TIMEOUT=8;Ba.HTTP_ERROR=6;R_.COMPLETE="complete";b_.EventType=Wi;Wi.OPEN="a";Wi.CLOSE="b";Wi.ERROR="c";Wi.MESSAGE="d";He.prototype.listen=He.prototype.O;Oe.prototype.listenOnce=Oe.prototype.P;Oe.prototype.getLastError=Oe.prototype.Sa;Oe.prototype.getLastErrorCode=Oe.prototype.Ia;Oe.prototype.getStatus=Oe.prototype.da;Oe.prototype.getResponseJson=Oe.prototype.Wa;Oe.prototype.getResponseText=Oe.prototype.ja;Oe.prototype.send=Oe.prototype.ha;Oe.prototype.setWithCredentials=Oe.prototype.Oa;qt.prototype.digest=qt.prototype.l;qt.prototype.reset=qt.prototype.reset;qt.prototype.update=qt.prototype.j;_e.prototype.add=_e.prototype.add;_e.prototype.multiply=_e.prototype.R;_e.prototype.modulo=_e.prototype.gb;_e.prototype.compare=_e.prototype.X;_e.prototype.toNumber=_e.prototype.ea;_e.prototype.toString=_e.prototype.toString;_e.prototype.getBits=_e.prototype.D;_e.fromNumber=en;_e.fromString=l1;var H4=function(){return new na},z4=function(){return $a()},Fc=Ba,W4=R_,K4=Ur,Vf={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},yo=b_,G4=Oe,Q4=qt,as=_e;const Mf="@firebase/firestore";/**
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
 */const kr=new ba("@firebase/firestore");function Bs(){return kr.logLevel}function $(t,...e){if(kr.logLevel<=se.DEBUG){const n=e.map(th);kr.debug(`Firestore (${Os}): ${t}`,...n)}}function In(t,...e){if(kr.logLevel<=se.ERROR){const n=e.map(th);kr.error(`Firestore (${Os}): ${t}`,...n)}}function _s(t,...e){if(kr.logLevel<=se.WARN){const n=e.map(th);kr.warn(`Firestore (${Os}): ${t}`,...n)}}function th(t){if(typeof t=="string")return t;try{/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends Nt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class u1{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Y4{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(tt.UNAUTHENTICATED))}shutdown(){}}class X4{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class J4{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new yn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new yn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string"),new u1(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string"),new tt(e)}}class Z4{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class eR{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new Z4(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class tR{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nR{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ie(typeof n.token=="string"),this.R=n.token,new tR(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class h1{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=rR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function he(t,e){return t<e?-1:t>e?1:0}function ys(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&G(),r===void 0?r=e.length-n:r>e.length-n&&G(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Re extends ki{construct(e,n,r){return new Re(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Re(n)}static emptyPath(){return new Re([])}}const sR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends ki{construct(e,n,r){return new Ge(e,n,r)}static isValidIdentifier(e){return sR.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Re.fromString(e))}static fromName(e){return new H(Re.fromString(e).popFirst(5))}static empty(){return new H(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Re.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Re(e.slice()))}}function iR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=X.fromTimestamp(r===1e9?new Le(n+1,0):new Le(n,r));return new Xn(s,H.empty(),e)}function oR(t){return new Xn(t.readTime,t.key,-1)}class Xn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Xn(X.min(),H.empty(),-1)}static max(){return new Xn(X.max(),H.empty(),-1)}}function aR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:he(t.largestBatchId,e.largestBatchId))}/**
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
 */const cR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class lR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Xi(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==cR)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&G(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,r)=>{n(e)})}static reject(e){return new R((n,r)=>{r(e)})}static waitFor(e){return new R((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=R.resolve(!1);for(const r of e)n=n.next(s=>s?R.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new R((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new R((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}function Ji(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class nh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}nh._e=-1;function Ya(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function uR(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Lf(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function d1(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Pe{constructor(e,n){this.comparator=e,this.root=n||We.EMPTY}insert(e,n){return new Pe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Pe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new vo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new vo(this.root,e,this.comparator,!1)}getReverseIterator(){return new vo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new vo(this.root,e,this.comparator,!0)}}class vo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new We(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw G();const e=this.left.check();if(e!==this.right.check())throw G();return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw G()}get value(){throw G()}get color(){throw G()}get left(){throw G()}get right(){throw G()}copy(e,n,r,s,i){return this}insert(e,n,r){return new We(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ye{constructor(e){this.comparator=e,this.data=new Pe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Ff(this.data.getIterator())}getIteratorFrom(e){return new Ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ye)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ye(this.comparator);return n.data=e,n}}class Ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Ft{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Ft([])}unionWith(e){let n=new Ye(Ge.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ft(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ys(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class f1 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class at{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new f1("Invalid base64 string: "+i):i}}(e);return new at(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new at(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return he(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}at.EMPTY_BYTE_STRING=new at("");const hR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Jn(t){if(Ie(!!t),typeof t=="string"){let e=0;const n=hR.exec(t);if(Ie(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?at.fromBase64String(t):at.fromUint8Array(t)}/**
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
 */function rh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function sh(t){const e=t.mapValue.fields.__previous_value__;return rh(e)?sh(e):e}function Oi(t){const e=Jn(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class dR{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Eo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function xr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rh(t)?4:fR(t)?9007199254740991:10:G()}function cn(t,e){if(t===e)return!0;const n=xr(t);if(n!==xr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Oi(t).isEqual(Oi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Jn(s.timestampValue),a=Jn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Or(s.bytesValue).isEqual(Or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ve(s.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(s.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ve(s.integerValue)===Ve(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ve(s.doubleValue),a=Ve(i.doubleValue);return o===a?ia(o)===ia(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ys(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Lf(o)!==Lf(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!cn(o[c],a[c])))return!1;return!0}(t,e);default:return G()}}function Di(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function vs(t,e){if(t===e)return 0;const n=xr(t),r=xr(e);if(n!==r)return he(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return he(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ve(i.integerValue||i.doubleValue),c=Ve(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Uf(t.timestampValue,e.timestampValue);case 4:return Uf(Oi(t),Oi(e));case 5:return he(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Or(i),c=Or(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=he(a[l],c[l]);if(u!==0)return u}return he(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=he(Ve(i.latitude),Ve(o.latitude));return a!==0?a:he(Ve(i.longitude),Ve(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=vs(a[l],c[l]);if(u)return u}return he(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Eo.mapValue&&o===Eo.mapValue)return 0;if(i===Eo.mapValue)return 1;if(o===Eo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=he(c[h],u[h]);if(d!==0)return d;const p=vs(a[c[h]],l[u[h]]);if(p!==0)return p}return he(c.length,u.length)}(t.mapValue,e.mapValue);default:throw G()}}function Uf(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return he(t,e);const n=Jn(t),r=Jn(e),s=he(n.seconds,r.seconds);return s!==0?s:he(n.nanos,r.nanos)}function Es(t){return xl(t)}function xl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Jn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return H.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=xl(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${xl(n.fields[o])}`;return s+"}"}(t.mapValue):G()}function $f(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Dl(t){return!!t&&"integerValue"in t}function ih(t){return!!t&&"arrayValue"in t}function Bf(t){return!!t&&"nullValue"in t}function jf(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function No(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xs(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function fR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!No(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=Ge.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=oi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());No(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];No(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){xs(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Pt(oi(this.value))}}function p1(t){const e=[];return xs(t.fields,(n,r)=>{const s=new Ge([n]);if(No(r)){const i=p1(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ft(e)}/**
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
 */class nt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new nt(e,0,X.min(),X.min(),X.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new nt(e,1,n,X.min(),r,s,0)}static newNoDocument(e,n){return new nt(e,2,n,X.min(),X.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new nt(e,3,n,X.min(),X.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof nt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new nt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class oa{constructor(e,n){this.position=e,this.inclusive=n}}function qf(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=vs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Hf(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class aa{constructor(e,n="asc"){this.field=e,this.dir=n}}function pR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class g1{}class Me extends g1{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new mR(e,n,r):n==="array-contains"?new vR(e,r):n==="in"?new ER(e,r):n==="not-in"?new wR(e,r):n==="array-contains-any"?new IR(e,r):new Me(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new _R(e,r):new yR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(vs(n,this.value)):n!==null&&xr(this.value)===xr(n)&&this.matchesComparison(vs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return G()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ht extends g1{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new Ht(e,n)}matches(e){return m1(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function m1(t){return t.op==="and"}function _1(t){return gR(t)&&m1(t)}function gR(t){for(const e of t.filters)if(e instanceof Ht)return!1;return!0}function Nl(t){if(t instanceof Me)return t.field.canonicalString()+t.op.toString()+Es(t.value);if(_1(t))return t.filters.map(e=>Nl(e)).join(",");{const e=t.filters.map(n=>Nl(n)).join(",");return`${t.op}(${e})`}}function y1(t,e){return t instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof Ht?function(r,s){return s instanceof Ht&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&y1(o,s.filters[a]),!0):!1}(t,e):void G()}function v1(t){return t instanceof Me?function(n){return`${n.field.canonicalString()} ${n.op} ${Es(n.value)}`}(t):t instanceof Ht?function(n){return n.op.toString()+" {"+n.getFilters().map(v1).join(" ,")+"}"}(t):"Filter"}class mR extends Me{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class _R extends Me{constructor(e,n){super(e,"in",n),this.keys=E1("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class yR extends Me{constructor(e,n){super(e,"not-in",n),this.keys=E1("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function E1(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class vR extends Me{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ih(n)&&Di(n.arrayValue,this.value)}}class ER extends Me{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class wR extends Me{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Di(this.value.arrayValue,n)}}class IR extends Me{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ih(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Di(this.value.arrayValue,r))}}/**
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
 */class TR{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function zf(t,e=null,n=[],r=[],s=null,i=null,o=null){return new TR(t,e,n,r,s,i,o)}function oh(t){const e=Z(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>Nl(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ya(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Es(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Es(r)).join(",")),e.ce=n}return e.ce}function ah(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!pR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!y1(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Hf(t.startAt,e.startAt)&&Hf(t.endAt,e.endAt)}function Vl(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Zi{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function CR(t,e,n,r,s,i,o,a){return new Zi(t,e,n,r,s,i,o,a)}function ch(t){return new Zi(t)}function Wf(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function w1(t){return t.collectionGroup!==null}function ai(t){const e=Z(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Ye(Ge.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new aa(i,r))}),n.has(Ge.keyField().canonicalString())||e.le.push(new aa(Ge.keyField(),r))}return e.le}function sn(t){const e=Z(t);return e.he||(e.he=AR(e,ai(t))),e.he}function AR(t,e){if(t.limitType==="F")return zf(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new aa(s.field,i)});const n=t.endAt?new oa(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new oa(t.startAt.position,t.startAt.inclusive):null;return zf(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Ml(t,e){const n=t.filters.concat([e]);return new Zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ll(t,e,n){return new Zi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Xa(t,e){return ah(sn(t),sn(e))&&t.limitType===e.limitType}function I1(t){return`${oh(sn(t))}|lt:${t.limitType}`}function Qr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>v1(s)).join(", ")}]`),Ya(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>Es(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>Es(s)).join(",")),`Target(${r})`}(sn(t))}; limitType=${t.limitType})`}function Ja(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):H.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=qf(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ai(r),s)||r.endAt&&!function(o,a,c){const l=qf(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ai(r),s))}(t,e)}function RR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function T1(t){return(e,n)=>{let r=!1;for(const s of ai(t)){const i=bR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function bR(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?vs(c,l):G()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return G()}}/**
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
 */class Ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return d1(this.inner)}size(){return this.innerSize}}/**
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
 */const SR=new Pe(H.comparator);function Tn(){return SR}const C1=new Pe(H.comparator);function Gs(...t){let e=C1;for(const n of t)e=e.insert(n.key,n);return e}function A1(t){let e=C1;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function gr(){return ci()}function R1(){return ci()}function ci(){return new Ds(t=>t.toString(),(t,e)=>t.isEqual(e))}const PR=new Pe(H.comparator),kR=new Ye(H.comparator);function re(...t){let e=kR;for(const n of t)e=e.add(n);return e}const OR=new Ye(he);function xR(){return OR}/**
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
 */function b1(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function S1(t){return{integerValue:""+t}}function DR(t,e){return uR(e)?S1(e):b1(t,e)}/**
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
 */class Za{constructor(){this._=void 0}}function NR(t,e,n){return t instanceof ca?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&rh(i)&&(i=sh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Ni?k1(t,e):t instanceof Vi?O1(t,e):function(s,i){const o=P1(s,i),a=Kf(o)+Kf(s.Ie);return Dl(o)&&Dl(s.Ie)?S1(a):b1(s.serializer,a)}(t,e)}function VR(t,e,n){return t instanceof Ni?k1(t,e):t instanceof Vi?O1(t,e):n}function P1(t,e){return t instanceof la?function(r){return Dl(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ca extends Za{}class Ni extends Za{constructor(e){super(),this.elements=e}}function k1(t,e){const n=x1(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends Za{constructor(e){super(),this.elements=e}}function O1(t,e){let n=x1(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class la extends Za{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Kf(t){return Ve(t.integerValue||t.doubleValue)}function x1(t){return ih(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function MR(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Ni&&s instanceof Ni||r instanceof Vi&&s instanceof Vi?ys(r.elements,s.elements,cn):r instanceof la&&s instanceof la?cn(r.Ie,s.Ie):r instanceof ca&&s instanceof ca}(t.transform,e.transform)}class LR{constructor(e,n){this.version=e,this.transformResults=n}}class vn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vn}static exists(e){return new vn(void 0,e)}static updateTime(e){return new vn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Vo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class ec{}function D1(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new V1(t.key,vn.none()):new eo(t.key,t.data,vn.none());{const n=t.data,r=Pt.empty();let s=new Ye(Ge.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new $r(t.key,r,new Ft(s.toArray()),vn.none())}}function FR(t,e,n){t instanceof eo?function(s,i,o){const a=s.value.clone(),c=Qf(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof $r?function(s,i,o){if(!Vo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Qf(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(N1(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function li(t,e,n,r){return t instanceof eo?function(i,o,a,c){if(!Vo(i.precondition,o))return a;const l=i.value.clone(),u=Yf(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof $r?function(i,o,a,c){if(!Vo(i.precondition,o))return a;const l=Yf(i.fieldTransforms,c,o),u=o.data;return u.setAll(N1(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Vo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function UR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=P1(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function Gf(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ys(r,s,(i,o)=>MR(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class eo extends ec{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $r extends ec{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function N1(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Qf(t,e,n){const r=new Map;Ie(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,VR(o,a,n[s]))}return r}function Yf(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,NR(i,o,e))}return r}class V1 extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class $R extends ec{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class BR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&FR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=li(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=R1();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=D1(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&ys(this.mutations,e.mutations,(n,r)=>Gf(n,r))&&ys(this.baseMutations,e.baseMutations,(n,r)=>Gf(n,r))}}class lh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length);let s=function(){return PR}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new lh(e,n,r,s)}}/**
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
 */class jR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class qR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ne,oe;function HR(t){switch(t){default:return G();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function M1(t){if(t===void 0)return In("GRPC error has no .code"),w.UNKNOWN;switch(t){case Ne.OK:return w.OK;case Ne.CANCELLED:return w.CANCELLED;case Ne.UNKNOWN:return w.UNKNOWN;case Ne.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Ne.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Ne.INTERNAL:return w.INTERNAL;case Ne.UNAVAILABLE:return w.UNAVAILABLE;case Ne.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Ne.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Ne.NOT_FOUND:return w.NOT_FOUND;case Ne.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Ne.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Ne.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Ne.ABORTED:return w.ABORTED;case Ne.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Ne.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Ne.DATA_LOSS:return w.DATA_LOSS;default:return G()}}(oe=Ne||(Ne={}))[oe.OK=0]="OK",oe[oe.CANCELLED=1]="CANCELLED",oe[oe.UNKNOWN=2]="UNKNOWN",oe[oe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",oe[oe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",oe[oe.NOT_FOUND=5]="NOT_FOUND",oe[oe.ALREADY_EXISTS=6]="ALREADY_EXISTS",oe[oe.PERMISSION_DENIED=7]="PERMISSION_DENIED",oe[oe.UNAUTHENTICATED=16]="UNAUTHENTICATED",oe[oe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",oe[oe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",oe[oe.ABORTED=10]="ABORTED",oe[oe.OUT_OF_RANGE=11]="OUT_OF_RANGE",oe[oe.UNIMPLEMENTED=12]="UNIMPLEMENTED",oe[oe.INTERNAL=13]="INTERNAL",oe[oe.UNAVAILABLE=14]="UNAVAILABLE",oe[oe.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function zR(){return new TextEncoder}/**
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
 */const WR=new as([4294967295,4294967295],0);function Xf(t){const e=zR().encode(t),n=new Q4;return n.update(e),new Uint8Array(n.digest())}function Jf(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new as([n,r],0),new as([s,i],0)]}class uh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Qs(`Invalid padding: ${n}`);if(r<0)throw new Qs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Qs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Qs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=as.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(as.fromNumber(r)));return s.compare(WR)===1&&(s=new as([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Xf(e),[r,s]=Jf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new uh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Xf(e),[r,s]=Jf(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Qs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class tc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,to.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new tc(X.min(),s,new Pe(he),Tn(),re())}}class to{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new to(r,n,re(),re(),re())}}/**
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
 */class Mo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class L1{constructor(e,n){this.targetId=e,this.fe=n}}class F1{constructor(e,n,r=at.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Zf{constructor(){this.ge=0,this.pe=tp(),this.ye=at.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=re(),n=re(),r=re();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:G()}}),new to(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=tp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ie(this.ge>=0)}Be(){this.Se=!0,this.we=!0}}class KR{constructor(e){this.Le=e,this.ke=new Map,this.qe=Tn(),this.Qe=ep(),this.Ke=new Pe(he)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Be(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:G()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(Vl(i))if(r===0){const o=new H(i.path);this.We(n,o,nt.newNoDocument(o,X.min()))}else Ie(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Or(r).toUint8Array()}catch(c){if(c instanceof f1)return _s("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new uh(o,s,i)}catch(c){return _s(c instanceof Qs?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Le.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&Vl(a.target)){const c=new H(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,nt.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=re();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new tc(e,n,this.Ke,this.qe,r);return this.qe=Tn(),this.Qe=ep(),this.Ke=new Pe(he),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Zf,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new Ye(he),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Le._t(e)}He(e){this.ke.set(e,new Zf),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function ep(){return new Pe(H.comparator)}function tp(){return new Pe(H.comparator)}const GR={asc:"ASCENDING",desc:"DESCENDING"},QR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YR={and:"AND",or:"OR"};class XR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Fl(t,e){return t.useProto3Json||Ya(e)?e:{value:e}}function ua(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function U1(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function JR(t,e){return ua(t,e.toTimestamp())}function on(t){return Ie(!!t),X.fromTimestamp(function(n){const r=Jn(n);return new Le(r.seconds,r.nanos)}(t))}function hh(t,e){return function(r){return new Re(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function $1(t){const e=Re.fromString(t);return Ie(H1(e)),e}function Ul(t,e){return hh(t.databaseId,e.path)}function Uc(t,e){const n=$1(e);if(n.get(1)!==t.databaseId.projectId)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(B1(n))}function $l(t,e){return hh(t.databaseId,e)}function ZR(t){const e=$1(t);return e.length===4?Re.emptyPath():B1(e)}function Bl(t){return new Re(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function B1(t){return Ie(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function np(t,e,n){return{name:Ul(t,e),fields:n.value.mapValue.fields}}function e5(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:G()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ie(u===void 0||typeof u=="string"),at.fromBase64String(u||"")):(Ie(u===void 0||u instanceof Uint8Array),at.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?w.UNKNOWN:M1(l.code);return new U(u,l.message||"")}(o);n=new F1(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Uc(t,r.document.name),i=on(r.document.updateTime),o=r.document.createTime?on(r.document.createTime):X.min(),a=new Pt({mapValue:{fields:r.document.fields}}),c=nt.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Mo(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Uc(t,r.document),i=r.readTime?on(r.readTime):X.min(),o=nt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Mo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Uc(t,r.document),i=r.removedTargetIds||[];n=new Mo([],i,s,null)}else{if(!("filter"in e))return G();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new qR(s,i),a=r.targetId;n=new L1(a,o)}}return n}function t5(t,e){let n;if(e instanceof eo)n={update:np(t,e.key,e.value)};else if(e instanceof V1)n={delete:Ul(t,e.key)};else if(e instanceof $r)n={update:np(t,e.key,e.data),updateMask:u5(e.fieldMask)};else{if(!(e instanceof $R))return G();n={verify:Ul(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ni)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof la)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw G()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:JR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:G()}(t,e.precondition)),n}function n5(t,e){return t&&t.length>0?(Ie(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?on(s.updateTime):on(i);return o.isEqual(X.min())&&(o=on(i)),new LR(o,s.transformResults||[])}(n,e))):[]}function r5(t,e){return{documents:[$l(t,e.path)]}}function s5(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=$l(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=$l(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return q1(Ht.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(l=>function(h){return{field:Yr(h.field),direction:a5(h.dir)}}(l))}(e.orderBy);i&&(n.structuredQuery.orderBy=i);const o=Fl(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),n}function i5(t){let e=ZR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=j1(h);return d instanceof Ht&&_1(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(y){return new aa(Xr(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ya(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,p=h.values||[];return new oa(p,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,p=h.values||[];return new oa(p,d)}(n.endAt)),CR(e,s,o,i,a,"F",c,l)}function o5(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return G()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function j1(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xr(n.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Xr(n.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Xr(n.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xr(n.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});default:return G()}}(t):t.fieldFilter!==void 0?function(n){return Me.create(Xr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return G()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return Ht.create(n.compositeFilter.filters.map(r=>j1(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return G()}}(n.compositeFilter.op))}(t):G()}function a5(t){return GR[t]}function c5(t){return QR[t]}function l5(t){return YR[t]}function Yr(t){return{fieldPath:t.canonicalString()}}function Xr(t){return Ge.fromServerFormat(t.fieldPath)}function q1(t){return t instanceof Me?function(n){if(n.op==="=="){if(jf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NAN"}};if(Bf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(jf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NAN"}};if(Bf(n.value))return{unaryFilter:{field:Yr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Yr(n.field),op:c5(n.op),value:n.value}}}(t):t instanceof Ht?function(n){const r=n.getFilters().map(s=>q1(s));return r.length===1?r[0]:{compositeFilter:{op:l5(n.op),filters:r}}}(t):G()}function u5(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function H1(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class $n{constructor(e,n,r,s,i=X.min(),o=X.min(),a=at.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new $n(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new $n(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class h5{constructor(e){this.ut=e}}function d5(t){const e=i5({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ll(e,e.limit,"L"):e}/**
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
 */class f5{constructor(){this.on=new p5}addToCollectionParentIndex(e,n){return this.on.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.on.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}deleteAllFieldIndexes(e){return R.resolve()}createTargetIndexes(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Xn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Xn.min())}updateCollectionGroup(e,n,r){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class p5{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Ye(Re.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ye(Re.comparator)).toArray()}}/**
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
 */class ws{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static On(){return new ws(0)}static Nn(){return new ws(-1)}}/**
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
 */class g5{constructor(){this.changes=new Ds(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,nt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?R.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class m5{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class _5{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&li(r.mutation,s,Ft.empty(),Le.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const s=gr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Gs();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=gr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tn();const o=ci(),a=function(){return ci()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof $r)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),li(u.mutation,l,u.mutation.getFieldMask(),Le.now())):o.set(l.key,Ft.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new m5(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=ci();let s=new Pe((o,a)=>o-a),i=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Ft.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||re()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=R1();u.forEach(d=>{if(!i.has(d)){const p=D1(n.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return R.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return H.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):w1(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):R.resolve(gr());let a=-1,c=i;return o.next(l=>R.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?R.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,re())).next(u=>({batchId:a,changes:A1(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let s=Gs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Gs();return this.indexManager.getCollectionParents(e,i).next(a=>R.forEach(a,c=>{const l=function(h,d){return new Zi(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,nt.newInvalidDocument(u)))});let a=Gs();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&li(u.mutation,l,Ft.empty(),Le.now()),Ja(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class y5{constructor(e){this.serializer=e,this.ur=new Map,this.cr=new Map}getBundleMetadata(e,n){return R.resolve(this.ur.get(n))}saveBundleMetadata(e,n){return this.ur.set(n.id,function(s){return{id:s.id,version:s.version,createTime:on(s.createTime)}}(n)),R.resolve()}getNamedQuery(e,n){return R.resolve(this.cr.get(n))}saveNamedQuery(e,n){return this.cr.set(n.name,function(s){return{name:s.name,query:d5(s.bundledQuery),readTime:on(s.readTime)}}(n)),R.resolve()}}/**
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
 */class v5{constructor(){this.overlays=new Pe(H.comparator),this.lr=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const r=gr();return R.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.lt(e,n,i)}),R.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.lr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.lr.delete(r)),R.resolve()}getOverlaysForCollection(e,n,r){const s=gr(),i=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return R.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Pe((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=gr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=gr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return R.resolve(a)}lt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.lr.get(s.largestBatchId).delete(r.key);this.lr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new jR(n,r));let i=this.lr.get(n);i===void 0&&(i=re(),this.lr.set(n,i)),this.lr.set(n,i.add(r.key))}}/**
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
 */class dh{constructor(){this.hr=new Ye(Be.Pr),this.Ir=new Ye(Be.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(e,n){const r=new Be(e,n);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.dr(new Be(e,n))}Ar(e,n){e.forEach(r=>this.removeReference(r,n))}Rr(e){const n=new H(new Re([])),r=new Be(n,e),s=new Be(n,e+1),i=[];return this.Ir.forEachInRange([r,s],o=>{this.dr(o),i.push(o.key)}),i}Vr(){this.hr.forEach(e=>this.dr(e))}dr(e){this.hr=this.hr.delete(e),this.Ir=this.Ir.delete(e)}mr(e){const n=new H(new Re([])),r=new Be(n,e),s=new Be(n,e+1);let i=re();return this.Ir.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new Be(e,0),r=this.hr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Be{constructor(e,n){this.key=e,this.gr=n}static Pr(e,n){return H.comparator(e.key,n.key)||he(e.gr,n.gr)}static Tr(e,n){return he(e.gr,n.gr)||H.comparator(e.key,n.key)}}/**
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
 */class E5{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.pr=1,this.yr=new Ye(Be.Pr)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BR(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.yr=this.yr.add(new Be(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.wr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Sr(r),i=s<0?0:s;return R.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Be(n,0),s=new Be(n,Number.POSITIVE_INFINITY),i=[];return this.yr.forEachInRange([r,s],o=>{const a=this.wr(o.gr);i.push(a)}),R.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ye(he);return n.forEach(s=>{const i=new Be(s,0),o=new Be(s,Number.POSITIVE_INFINITY);this.yr.forEachInRange([i,o],a=>{r=r.add(a.gr)})}),R.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;H.isDocumentKey(i)||(i=i.child(""));const o=new Be(new H(i),0);let a=new Ye(he);return this.yr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.gr)),!0)},o),R.resolve(this.br(a))}br(e){const n=[];return e.forEach(r=>{const s=this.wr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ie(this.Dr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return R.forEach(n.mutations,s=>{const i=new Be(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.yr=r})}Fn(e){}containsKey(e,n){const r=new Be(n,0),s=this.yr.firstAfterOrEqual(r);return R.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Dr(e,n){return this.Sr(e)}Sr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}wr(e){const n=this.Sr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class w5{constructor(e){this.Cr=e,this.docs=function(){return new Pe(H.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.Cr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return R.resolve(r?r.document.mutableCopy():nt.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():nt.newInvalidDocument(s))}),R.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,a=new H(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||aR(oR(u),r)<=0||(s.has(u.key)||Ja(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return R.resolve(i)}getAllFromCollectionGroup(e,n,r,s){G()}vr(e,n){return R.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new I5(this)}getSize(e){return R.resolve(this.size)}}class I5 extends g5{constructor(e){super(),this._r=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this._r.addEntry(e,s)):this._r.removeEntry(r)}),R.waitFor(n)}getFromCache(e,n){return this._r.getEntry(e,n)}getAllFromCache(e,n){return this._r.getEntries(e,n)}}/**
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
 */class T5{constructor(e){this.persistence=e,this.Fr=new Ds(n=>oh(n),ah),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Mr=0,this.Or=new dh,this.targetCount=0,this.Nr=ws.On()}forEachTarget(e,n){return this.Fr.forEach((r,s)=>n(s)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Mr)}allocateTargetId(e){return this.highestTargetId=this.Nr.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Mr&&(this.Mr=n),R.resolve()}kn(e){this.Fr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Nr=new ws(n),this.highestTargetId=n),e.sequenceNumber>this.Mr&&(this.Mr=e.sequenceNumber)}addTargetData(e,n){return this.kn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.kn(n),R.resolve()}removeTargetData(e,n){return this.Fr.delete(n.target),this.Or.Rr(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Fr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),R.waitFor(i).next(()=>s)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const r=this.Fr.get(n)||null;return R.resolve(r)}addMatchingKeys(e,n,r){return this.Or.Er(n,r),R.resolve()}removeMatchingKeys(e,n,r){this.Or.Ar(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),R.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Or.Rr(n),R.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Or.mr(n);return R.resolve(r)}containsKey(e,n){return R.resolve(this.Or.containsKey(n))}}/**
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
 */class C5{constructor(e,n){this.Br={},this.overlays={},this.Lr=new nh(0),this.kr=!1,this.kr=!0,this.referenceDelegate=e(this),this.qr=new T5(this),this.indexManager=new f5,this.remoteDocumentCache=function(s){return new w5(s)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new h5(n),this.Kr=new y5(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new v5,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new E5(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const s=new A5(this.Lr.next());return this.referenceDelegate.$r(),r(s).next(i=>this.referenceDelegate.Ur(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Wr(e,n){return R.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class A5 extends lR{constructor(e){super(),this.currentSequenceNumber=e}}class fh{constructor(e){this.persistence=e,this.Gr=new dh,this.zr=null}static jr(e){return new fh(e)}get Hr(){if(this.zr)return this.zr;throw G()}addReference(e,n,r){return this.Gr.addReference(r,n),this.Hr.delete(r.toString()),R.resolve()}removeReference(e,n,r){return this.Gr.removeReference(r,n),this.Hr.add(r.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Hr.add(n.toString()),R.resolve()}removeTarget(e,n){this.Gr.Rr(n.targetId).forEach(s=>this.Hr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Hr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}$r(){this.zr=new Set}Ur(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Hr,r=>{const s=H.fromPath(r);return this.Jr(e,s).next(i=>{i||n.removeEntry(s,X.min())})}).next(()=>(this.zr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Jr(e,n).next(r=>{r?this.Hr.delete(n.toString()):this.Hr.add(n.toString())})}Qr(e){return 0}Jr(e,n){return R.or([()=>R.resolve(this.Gr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Wr(e,n)])}}/**
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
 */class ph{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.ki=r,this.qi=s}static Qi(e,n){let r=re(),s=re();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ph(e,n.fromCache,r,s)}}/**
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
 */class R5{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class b5{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(e,n){this.Gi=e,this.indexManager=n,this.Ki=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.zi(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.ji(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new R5;return this.Hi(e,n,o).next(a=>{if(i.result=a,this.$i)return this.Ji(e,n,o,a.size)})}).next(()=>i.result)}Ji(e,n,r,s){return r.documentReadCount<this.Ui?(Bs()<=se.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Qr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),R.resolve()):(Bs()<=se.DEBUG&&$("QueryEngine","Query:",Qr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Wi*s?(Bs()<=se.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Qr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,sn(n))):R.resolve())}zi(e,n){if(Wf(n))return R.resolve(null);let r=sn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=Ll(n,null,"F"),r=sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=re(...i);return this.Gi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Yi(n,a);return this.Zi(n,l,o,c.readTime)?this.zi(e,Ll(n,null,"F")):this.Xi(e,l,n,c)}))})))}ji(e,n,r,s){return Wf(n)||s.isEqual(X.min())?R.resolve(null):this.Gi.getDocuments(e,r).next(i=>{const o=this.Yi(n,i);return this.Zi(n,o,r,s)?R.resolve(null):(Bs()<=se.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Qr(n)),this.Xi(e,o,n,iR(s,-1)).next(a=>a))})}Yi(e,n){let r=new Ye(T1(e));return n.forEach((s,i)=>{Ja(e,i)&&(r=r.add(i))}),r}Zi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Hi(e,n,r){return Bs()<=se.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Qr(n)),this.Gi.getDocumentsMatchingQuery(e,n,Xn.min(),r)}Xi(e,n,r,s){return this.Gi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class S5{constructor(e,n,r,s){this.persistence=e,this.es=n,this.serializer=s,this.ts=new Pe(he),this.ns=new Ds(i=>oh(i),ah),this.rs=new Map,this.ss=e.getRemoteDocumentCache(),this.qr=e.getTargetCache(),this.Kr=e.getBundleCache(),this.os(r)}os(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _5(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ts))}}function P5(t,e,n,r){return new S5(t,e,n,r)}async function z1(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n.os(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=re();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function k5(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.ss.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let p=R.resolve();return d.forEach(y=>{p=p.next(()=>u.getEntry(c,y)).next(T=>{const E=l.docVersions.get(y);Ie(E!==null),T.version.compareTo(E)<0&&(h.applyToRemoteDocument(T,l),T.isValidDocument()&&(T.setReadTime(l.commitVersion),u.addEntry(T)))})}),p.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=re();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function W1(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.qr.getLastRemoteSnapshotVersion(n))}function O5(t,e){const n=Z(t),r=e.snapshotVersion;let s=n.ts;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.ss.newChangeBuffer({trackRemovals:!0});s=n.ts;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.qr.addMatchingKeys(i,u.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?p=p.withResumeToken(at.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):u.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(u.resumeToken,r)),s=s.insert(h,p),function(T,E,S){return T.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-T.snapshotVersion.toMicroseconds()>=3e8?!0:S.addedDocuments.size+S.modifiedDocuments.size+S.removedDocuments.size>0}(d,p,u)&&a.push(n.qr.updateTargetData(i,p))});let c=Tn(),l=re();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(x5(i,o,e.documentUpdates).next(u=>{c=u.us,l=u.cs})),!r.isEqual(X.min())){const u=n.qr.getLastRemoteSnapshotVersion(i).next(h=>n.qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return R.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ts=s,i))}function x5(t,e,n){let r=re(),s=re();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(X.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):$("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{us:o,cs:s}})}function D5(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function N5(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.qr.getTargetData(r,e).next(i=>i?(s=i,R.resolve(s)):n.qr.allocateTargetId(r).next(o=>(s=new $n(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ts.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ts=n.ts.insert(r.targetId,r),n.ns.set(e,r.targetId)),r})}async function jl(t,e,n){const r=Z(t),s=r.ts.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ji(o))throw o;$("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ts=r.ts.remove(e),r.ns.delete(s.target)}function rp(t,e,n){const r=Z(t);let s=X.min(),i=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=Z(c),d=h.ns.get(u);return d!==void 0?R.resolve(h.ts.get(d)):h.qr.getTargetData(l,u)}(r,o,sn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.es.getDocumentsMatchingQuery(o,e,n?s:X.min(),n?i:re())).next(a=>(V5(r,RR(e),a),{documents:a,ls:i})))}function V5(t,e,n){let r=t.rs.get(e)||X.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.rs.set(e,r)}class sp{constructor(){this.activeTargetIds=xR()}ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}As(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Es(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class M5{constructor(){this.eo=new sp,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.eo.ds(e),this.no[e]||"not-current"}updateQueryState(e,n,r){this.no[e]=n}removeLocalQueryTarget(e){this.eo.As(e)}isLocalQueryTarget(e){return this.eo.activeTargetIds.has(e)}clearQueryState(e){delete this.no[e]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(e){return this.eo.activeTargetIds.has(e)}start(){return this.eo=new sp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class L5{ro(e){}shutdown(){}}/**
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
 */class ip{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(e){this.ao.push(e)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){$("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ao)e(0)}_o(){$("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ao)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let wo=null;function $c(){return wo===null?wo=function(){return 268435456+Math.round(2147483648*Math.random())}():wo++,"0x"+wo.toString(16)}/**
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
 */const F5={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class U5{constructor(e){this.co=e.co,this.lo=e.lo}ho(e){this.Po=e}Io(e){this.To=e}onMessage(e){this.Eo=e}close(){this.lo()}send(e){this.co(e)}Ao(){this.Po()}Ro(e){this.To(e)}Vo(e){this.Eo(e)}}/**
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
 */const et="WebChannelConnection";class $5 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+n.host,this.fo=`projects/${s}/databases/${i}`,this.po=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get yo(){return!1}wo(n,r,s,i,o){const a=$c(),c=this.So(n,r);$("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,i,o),this.Do(n,c,l,s).then(u=>($("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw _s("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}Co(n,r,s,i,o,a){return this.wo(n,r,s,i,o)}bo(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Os}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}So(n,r){const s=F5[n];return`${this.mo}/v1/${r}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Do(e,n,r,s){const i=$c();return new Promise((o,a)=>{const c=new G4;c.setWithCredentials(!0),c.listenOnce(W4.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fc.NO_ERROR:const u=c.getResponseJson();$(et,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case Fc.TIMEOUT:$(et,`RPC '${e}' ${i} timed out`),a(new U(w.DEADLINE_EXCEEDED,"Request time out"));break;case Fc.HTTP_ERROR:const h=c.getStatus();if($(et,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const y=function(E){const S=E.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(S)>=0?S:w.UNKNOWN}(p.status);a(new U(y,p.message))}else a(new U(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(w.UNAVAILABLE,"Connection failed."));break;default:G()}}finally{$(et,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);$(et,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}vo(e,n,r){const s=$c(),i=[this.mo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=H4(),a=z4(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.bo(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");$(et,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,p=!1;const y=new U5({co:E=>{p?$(et,`Not sending because RPC '${e}' stream ${s} is closed:`,E):(d||($(et,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),$(et,`RPC '${e}' stream ${s} sending:`,E),h.send(E))},lo:()=>h.close()}),T=(E,S,D)=>{E.listen(S,N=>{try{D(N)}catch(B){setTimeout(()=>{throw B},0)}})};return T(h,yo.EventType.OPEN,()=>{p||$(et,`RPC '${e}' stream ${s} transport opened.`)}),T(h,yo.EventType.CLOSE,()=>{p||(p=!0,$(et,`RPC '${e}' stream ${s} transport closed`),y.Ro())}),T(h,yo.EventType.ERROR,E=>{p||(p=!0,_s(et,`RPC '${e}' stream ${s} transport errored:`,E),y.Ro(new U(w.UNAVAILABLE,"The operation could not be completed")))}),T(h,yo.EventType.MESSAGE,E=>{var S;if(!p){const D=E.data[0];Ie(!!D);const N=D,B=N.error||((S=N[0])===null||S===void 0?void 0:S.error);if(B){$(et,`RPC '${e}' stream ${s} received error:`,B);const L=B.status;let ie=function(te){const Ee=Ne[te];if(Ee!==void 0)return M1(Ee)}(L),ge=B.message;ie===void 0&&(ie=w.INTERNAL,ge="Unknown error status: "+L+" with message "+B.message),p=!0,y.Ro(new U(ie,ge)),h.close()}else $(et,`RPC '${e}' stream ${s} received:`,D),y.Vo(D)}}),T(a,K4.STAT_EVENT,E=>{E.stat===Vf.PROXY?$(et,`RPC '${e}' stream ${s} detected buffering proxy`):E.stat===Vf.NOPROXY&&$(et,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function Bc(){return typeof document<"u"?document:null}/**
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
 */function nc(t){return new XR(t,!0)}/**
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
 */class K1{constructor(e,n,r=1e3,s=1.5,i=6e4){this.si=e,this.timerId=n,this.Fo=r,this.Mo=s,this.xo=i,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(e){this.cancel();const n=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&$("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Oo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
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
 */class G1{constructor(e,n,r,s,i,o,a,c){this.si=e,this.Ko=r,this.$o=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new K1(e,n)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(e){this.t_(),this.stream.send(e)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(e,n){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,e!==4?this.zo.reset():n&&n.code===w.RESOURCE_EXHAUSTED?(In(n.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):n&&n.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Io(n)}r_(){}auth(){this.state=1;const e=this.i_(this.Uo),n=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Uo===n&&this.s_(r,s)},r=>{e(()=>{const s=new U(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(s)})})}s_(e,n){const r=this.i_(this.Uo);this.stream=this.__(e,n),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(s=>{r(()=>this.o_(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(e){return $("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}i_(e){return n=>{this.si.enqueueAndForget(()=>this.Uo===e?n():($("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class B5 extends G1{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}__(e,n){return this.connection.vo("Listen",e,n)}onMessage(e){this.zo.reset();const n=e5(this.serializer,e),r=function(i){if(!("targetChange"in i))return X.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?on(o.readTime):X.min()}(e);return this.listener.a_(n,r)}u_(e){const n={};n.database=Bl(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=Vl(c)?{documents:r5(i,c)}:{query:s5(i,c)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=U1(i,o.resumeToken);const l=Fl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(X.min())>0){a.readTime=ua(i,o.snapshotVersion.toTimestamp());const l=Fl(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=o5(this.serializer,e);r&&(n.labels=r),this.e_(n)}c_(e){const n={};n.database=Bl(this.serializer),n.removeTarget=e,this.e_(n)}}class j5 extends G1{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(e,n){return this.connection.vo("Write",e,n)}onMessage(e){if(Ie(!!e.streamToken),this.lastStreamToken=e.streamToken,this.l_){this.zo.reset();const n=n5(e.writeResults,e.commitTime),r=on(e.commitTime);return this.listener.I_(r,n)}return Ie(!e.writeResults||e.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const e={};e.database=Bl(this.serializer),this.e_(e)}P_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>t5(this.serializer,r))};this.e_(n)}}/**
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
 */class q5 extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.d_=!1}A_(){if(this.d_)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}wo(e,n,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.wo(e,n,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new U(w.UNKNOWN,s.toString())})}Co(e,n,r,s){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Co(e,n,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(w.UNKNOWN,i.toString())})}terminate(){this.d_=!0}}class H5{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(e){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.p_("Offline")))}set(e){this.S_(),this.V_=0,e==="Online"&&(this.f_=!1),this.p_(e)}p_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}y_(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */class z5{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=i,this.F_.ro(o=>{r.enqueueAndForget(async()=>{Br(this)&&($("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=Z(c);l.C_.add(4),await no(l),l.M_.set("Unknown"),l.C_.delete(4),await rc(l)}(this))})}),this.M_=new H5(r,s)}}async function rc(t){if(Br(t))for(const e of t.v_)await e(!0)}async function no(t){for(const e of t.v_)await e(!1)}function Q1(t,e){const n=Z(t);n.D_.has(e.targetId)||(n.D_.set(e.targetId,e),_h(n)?mh(n):Ns(n).Ho()&&gh(n,e))}function Y1(t,e){const n=Z(t),r=Ns(n);n.D_.delete(e),r.Ho()&&X1(n,e),n.D_.size===0&&(r.Ho()?r.Zo():Br(n)&&n.M_.set("Unknown"))}function gh(t,e){if(t.x_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ns(t).u_(e)}function X1(t,e){t.x_.Oe(e),Ns(t).c_(e)}function mh(t){t.x_=new KR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.D_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ns(t).start(),t.M_.g_()}function _h(t){return Br(t)&&!Ns(t).jo()&&t.D_.size>0}function Br(t){return Z(t).C_.size===0}function J1(t){t.x_=void 0}async function W5(t){t.D_.forEach((e,n)=>{gh(t,e)})}async function K5(t,e){J1(t),_h(t)?(t.M_.w_(e),mh(t)):t.M_.set("Unknown")}async function G5(t,e,n){if(t.M_.set("Online"),e instanceof F1&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.D_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.D_.delete(a),s.x_.removeTarget(a))}(t,e)}catch(r){$("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ha(t,r)}else if(e instanceof Mo?t.x_.$e(e):e instanceof L1?t.x_.Je(e):t.x_.Ge(e),!n.isEqual(X.min()))try{const r=await W1(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.x_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.D_.get(l);u&&i.D_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.D_.get(c);if(!u)return;i.D_.set(c,u.withResumeToken(at.EMPTY_BYTE_STRING,u.snapshotVersion)),X1(i,c);const h=new $n(u.target,c,l,u.sequenceNumber);gh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){$("RemoteStore","Failed to raise snapshot:",r),await ha(t,r)}}async function ha(t,e,n){if(!Ji(e))throw e;t.C_.add(1),await no(t),t.M_.set("Offline"),n||(n=()=>W1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$("RemoteStore","Retrying IndexedDB access"),await n(),t.C_.delete(1),await rc(t)})}function Z1(t,e){return e().catch(n=>ha(t,n,e))}async function sc(t){const e=Z(t),n=Zn(e);let r=e.b_.length>0?e.b_[e.b_.length-1].batchId:-1;for(;Q5(e);)try{const s=await D5(e.localStore,r);if(s===null){e.b_.length===0&&n.Zo();break}r=s.batchId,Y5(e,s)}catch(s){await ha(e,s)}ey(e)&&ty(e)}function Q5(t){return Br(t)&&t.b_.length<10}function Y5(t,e){t.b_.push(e);const n=Zn(t);n.Ho()&&n.h_&&n.P_(e.mutations)}function ey(t){return Br(t)&&!Zn(t).jo()&&t.b_.length>0}function ty(t){Zn(t).start()}async function X5(t){Zn(t).E_()}async function J5(t){const e=Zn(t);for(const n of t.b_)e.P_(n.mutations)}async function Z5(t,e,n){const r=t.b_.shift(),s=lh.from(r,e,n);await Z1(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await sc(t)}async function eb(t,e){e&&Zn(t).h_&&await async function(r,s){if(function(o){return HR(o)&&o!==w.ABORTED}(s.code)){const i=r.b_.shift();Zn(r).Yo(),await Z1(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await sc(r)}}(t,e),ey(t)&&ty(t)}async function op(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),$("RemoteStore","RemoteStore received new credentials");const r=Br(n);n.C_.add(3),await no(n),r&&n.M_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.C_.delete(3),await rc(n)}async function tb(t,e){const n=Z(t);e?(n.C_.delete(2),await rc(n)):e||(n.C_.add(2),await no(n),n.M_.set("Unknown"))}function Ns(t){return t.O_||(t.O_=function(n,r,s){const i=Z(n);return i.A_(),new B5(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:W5.bind(null,t),Io:K5.bind(null,t),a_:G5.bind(null,t)}),t.v_.push(async e=>{e?(t.O_.Yo(),_h(t)?mh(t):t.M_.set("Unknown")):(await t.O_.stop(),J1(t))})),t.O_}function Zn(t){return t.N_||(t.N_=function(n,r,s){const i=Z(n);return i.A_(),new j5(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{ho:X5.bind(null,t),Io:eb.bind(null,t),T_:J5.bind(null,t),I_:Z5.bind(null,t)}),t.v_.push(async e=>{e?(t.N_.Yo(),await sc(t)):(await t.N_.stop(),t.b_.length>0&&($("RemoteStore",`Stopping write stream with ${t.b_.length} pending writes`),t.b_=[]))})),t.N_}/**
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
 */class yh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new yh(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function vh(t,e){if(In("AsyncQueue",`${e}: ${t}`),Ji(t))return new U(w.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class cs{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=Gs(),this.sortedSet=new Pe(this.comparator)}static emptySet(e){return new cs(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof cs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new cs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class ap{constructor(){this.B_=new Pe(H.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):G():this.B_=this.B_.insert(n,e)}L_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Is{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Is(e,n,cs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Xa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class nb{constructor(){this.k_=void 0,this.listeners=[]}}class rb{constructor(){this.queries=new Ds(e=>I1(e),Xa),this.onlineState="Unknown",this.q_=new Set}}async function ny(t,e){const n=Z(t),r=e.query;let s=!1,i=n.queries.get(r);if(i||(s=!0,i=new nb),s)try{i.k_=await n.onListen(r)}catch(o){const a=vh(o,`Initialization of query '${Qr(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,i),i.listeners.push(e),e.Q_(n.onlineState),i.k_&&e.K_(i.k_)&&Eh(n)}async function ry(t,e){const n=Z(t),r=e.query;let s=!1;const i=n.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return n.queries.delete(r),n.onUnlisten(r)}function sb(t,e){const n=Z(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.K_(s)&&(r=!0);o.k_=s}}r&&Eh(n)}function ib(t,e,n){const r=Z(t),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(n);r.queries.delete(e)}function Eh(t){t.q_.forEach(e=>{e.next()})}class sy{constructor(e,n,r){this.query=e,this.U_=n,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Is(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.W_?this.z_(e)&&(this.U_.next(e),n=!0):this.j_(e,this.onlineState)&&(this.H_(e),n=!0),this.G_=e,n}onError(e){this.U_.error(e)}Q_(e){this.onlineState=e;let n=!1;return this.G_&&!this.W_&&this.j_(this.G_,e)&&(this.H_(this.G_),n=!0),n}j_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.J_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}z_(e){if(e.docChanges.length>0)return!0;const n=this.G_&&this.G_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}H_(e){e=Is.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.W_=!0,this.U_.next(e)}}/**
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
 */class iy{constructor(e){this.key=e}}class oy{constructor(e){this.key=e}}class ob{constructor(e,n){this.query=e,this.ia=n,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=re(),this.mutatedKeys=re(),this._a=T1(e),this.aa=new cs(this._a)}get ua(){return this.ia}ca(e,n){const r=n?n.la:new ap,s=n?n.aa:this.aa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),p=Ja(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),T=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let E=!1;d&&p?d.data.isEqual(p.data)?y!==T&&(r.track({type:3,doc:p}),E=!0):this.ha(d,p)||(r.track({type:2,doc:p}),E=!0,(c&&this._a(p,c)>0||l&&this._a(p,l)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),E=!0):d&&!p&&(r.track({type:1,doc:d}),E=!0,(c||l)&&(a=!0)),E&&(p?(o=o.add(p),i=T?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{aa:o,la:r,Zi:a,mutatedKeys:i}}ha(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.aa;this.aa=e.aa,this.mutatedKeys=e.mutatedKeys;const o=e.la.L_();o.sort((u,h)=>function(p,y){const T=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return G()}};return T(p)-T(y)}(u.type,h.type)||this._a(u.doc,h.doc)),this.Pa(r),s=s!=null&&s;const a=n&&!s?this.Ia():[],c=this.oa.size===0&&this.current&&!s?1:0,l=c!==this.sa;return this.sa=c,o.length!==0||l?{snapshot:new Is(this.query,e.aa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:a}:{Ta:a}}Q_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new ap,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(e){return!this.ia.has(e)&&!!this.aa.has(e)&&!this.aa.get(e).hasLocalMutations}Pa(e){e&&(e.addedDocuments.forEach(n=>this.ia=this.ia.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ia=this.ia.delete(n)),this.current=e.current)}Ia(){if(!this.current)return[];const e=this.oa;this.oa=re(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const n=[];return e.forEach(r=>{this.oa.has(r)||n.push(new oy(r))}),this.oa.forEach(r=>{e.has(r)||n.push(new iy(r))}),n}da(e){this.ia=e.ls,this.oa=re();const n=this.ca(e.documents);return this.applyChanges(n,!0)}Aa(){return Is.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class ab{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class cb{constructor(e){this.key=e,this.Ra=!1}}class lb{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new Ds(a=>I1(a),Xa),this.fa=new Map,this.ga=new Set,this.pa=new Pe(H.comparator),this.ya=new Map,this.wa=new dh,this.Sa={},this.ba=new Map,this.Da=ws.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function ub(t,e){const n=Eb(t);let r,s;const i=n.ma.get(e);if(i)r=i.targetId,n.sharedClientState.addLocalQueryTarget(r),s=i.view.Aa();else{const o=await N5(n.localStore,sn(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await hb(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&Q1(n.remoteStore,o)}return s}async function hb(t,e,n,r,s){t.va=(h,d,p)=>async function(T,E,S,D){let N=E.view.ca(S);N.Zi&&(N=await rp(T.localStore,E.query,!1).then(({documents:ge})=>E.view.ca(ge,N)));const B=D&&D.targetChanges.get(E.targetId),L=D&&D.targetMismatches.get(E.targetId)!=null,ie=E.view.applyChanges(N,T.isPrimaryClient,B,L);return lp(T,E.targetId,ie.Ta),ie.snapshot}(t,h,d,p);const i=await rp(t.localStore,e,!0),o=new ob(e,i.ls),a=o.ca(i.documents),c=to.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);lp(t,n,l.Ta);const u=new ab(e,n,o);return t.ma.set(e,u),t.fa.has(n)?t.fa.get(n).push(e):t.fa.set(n,[e]),l.snapshot}async function db(t,e){const n=Z(t),r=n.ma.get(e),s=n.fa.get(r.targetId);if(s.length>1)return n.fa.set(r.targetId,s.filter(i=>!Xa(i,e))),void n.ma.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await jl(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Y1(n.remoteStore,r.targetId),ql(n,r.targetId)}).catch(Xi)):(ql(n,r.targetId),await jl(n.localStore,r.targetId,!0))}async function fb(t,e,n){const r=wb(t);try{const s=await function(o,a){const c=Z(o),l=Le.now(),u=a.reduce((p,y)=>p.add(y.key),re());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",p=>{let y=Tn(),T=re();return c.ss.getEntries(p,u).next(E=>{y=E,y.forEach((S,D)=>{D.isValidDocument()||(T=T.add(S))})}).next(()=>c.localDocuments.getOverlayedDocuments(p,y)).next(E=>{h=E;const S=[];for(const D of a){const N=UR(D,h.get(D.key).overlayedDocument);N!=null&&S.push(new $r(D.key,N,p1(N.value.mapValue),vn.exists(!0)))}return c.mutationQueue.addMutationBatch(p,l,S,a)}).next(E=>{d=E;const S=E.applyToLocalDocumentSet(h,T);return c.documentOverlayCache.saveOverlays(p,E.batchId,S)})}).then(()=>({batchId:d.batchId,changes:A1(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Sa[o.currentUser.toKey()];l||(l=new Pe(he)),l=l.insert(a,c),o.Sa[o.currentUser.toKey()]=l}(r,s.batchId,n),await ro(r,s.changes),await sc(r.remoteStore)}catch(s){const i=vh(s,"Failed to persist write");n.reject(i)}}async function ay(t,e){const n=Z(t);try{const r=await O5(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.ya.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.Ra=!0:s.modifiedDocuments.size>0?Ie(o.Ra):s.removedDocuments.size>0&&(Ie(o.Ra),o.Ra=!1))}),await ro(n,r,e)}catch(r){await Xi(r)}}function cp(t,e,n){const r=Z(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.ma.forEach((i,o)=>{const a=o.view.Q_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=Z(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&Eh(c)}(r.eventManager,e),s.length&&r.Va.a_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function pb(t,e,n){const r=Z(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.ya.get(e),i=s&&s.key;if(i){let o=new Pe(H.comparator);o=o.insert(i,nt.newNoDocument(i,X.min()));const a=re().add(i),c=new tc(X.min(),new Map,new Pe(he),o,a);await ay(r,c),r.pa=r.pa.remove(i),r.ya.delete(e),wh(r)}else await jl(r.localStore,e,!1).then(()=>ql(r,e,n)).catch(Xi)}async function gb(t,e){const n=Z(t),r=e.batch.batchId;try{const s=await k5(n.localStore,e);ly(n,r,null),cy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ro(n,s)}catch(s){await Xi(s)}}async function mb(t,e,n){const r=Z(t);try{const s=await function(o,a){const c=Z(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ie(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);ly(r,e,n),cy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ro(r,s)}catch(s){await Xi(s)}}function cy(t,e){(t.ba.get(e)||[]).forEach(n=>{n.resolve()}),t.ba.delete(e)}function ly(t,e,n){const r=Z(t);let s=r.Sa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Sa[r.currentUser.toKey()]=s}}function ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.fa.get(e))t.ma.delete(r),n&&t.Va.Fa(r,n);t.fa.delete(e),t.isPrimaryClient&&t.wa.Rr(e).forEach(r=>{t.wa.containsKey(r)||uy(t,r)})}function uy(t,e){t.ga.delete(e.path.canonicalString());const n=t.pa.get(e);n!==null&&(Y1(t.remoteStore,n),t.pa=t.pa.remove(e),t.ya.delete(n),wh(t))}function lp(t,e,n){for(const r of n)r instanceof iy?(t.wa.addReference(r.key,e),_b(t,r)):r instanceof oy?($("SyncEngine","Document no longer in limbo: "+r.key),t.wa.removeReference(r.key,e),t.wa.containsKey(r.key)||uy(t,r.key)):G()}function _b(t,e){const n=e.key,r=n.path.canonicalString();t.pa.get(n)||t.ga.has(r)||($("SyncEngine","New document in limbo: "+n),t.ga.add(r),wh(t))}function wh(t){for(;t.ga.size>0&&t.pa.size<t.maxConcurrentLimboResolutions;){const e=t.ga.values().next().value;t.ga.delete(e);const n=new H(Re.fromString(e)),r=t.Da.next();t.ya.set(r,new cb(n)),t.pa=t.pa.insert(n,r),Q1(t.remoteStore,new $n(sn(ch(n.path)),r,"TargetPurposeLimboResolution",nh._e))}}async function ro(t,e,n){const r=Z(t),s=[],i=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,c)=>{o.push(r.va(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=ph.Qi(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.Va.a_(s),await async function(c,l){const u=Z(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>R.forEach(l,d=>R.forEach(d.ki,p=>u.persistence.referenceDelegate.addReference(h,d.targetId,p)).next(()=>R.forEach(d.qi,p=>u.persistence.referenceDelegate.removeReference(h,d.targetId,p)))))}catch(h){if(!Ji(h))throw h;$("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const p=u.ts.get(d),y=p.snapshotVersion,T=p.withLastLimboFreeSnapshotVersion(y);u.ts=u.ts.insert(d,T)}}}(r.localStore,i))}async function yb(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){$("SyncEngine","User change. New user:",e.toKey());const r=await z1(n.localStore,e);n.currentUser=e,function(i,o){i.ba.forEach(a=>{a.forEach(c=>{c.reject(new U(w.CANCELLED,o))})}),i.ba.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await ro(n,r._s)}}function vb(t,e){const n=Z(t),r=n.ya.get(e);if(r&&r.Ra)return re().add(r.key);{let s=re();const i=n.fa.get(e);if(!i)return s;for(const o of i){const a=n.ma.get(o);s=s.unionWith(a.view.ua)}return s}}function Eb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=ay.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=vb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=pb.bind(null,e),e.Va.a_=sb.bind(null,e.eventManager),e.Va.Fa=ib.bind(null,e.eventManager),e}function wb(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=gb.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=mb.bind(null,e),e}class up{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=nc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return P5(this.persistence,new b5,e.initialUser,this.serializer)}createPersistence(e){return new C5(fh.jr,this.serializer)}createSharedClientState(e){return new M5}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ib{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=yb.bind(null,this.syncEngine),await tb(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new rb}()}createDatastore(e){const n=nc(e.databaseInfo.databaseId),r=function(i){return new $5(i)}(e.databaseInfo);return function(i,o,a,c){return new q5(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new z5(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>cp(this.syncEngine,n,0),function(){return ip.D()?new ip:new L5}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new lb(s,i,o,a,c,l);return u&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=Z(n);$("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await no(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
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
 */class hy{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Oa(this.observer.next,e)}error(e){this.observer.error?this.Oa(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString())}Na(){this.muted=!0}Oa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class Tb{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=h1.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{$("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>($("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=vh(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function jc(t,e){t.asyncQueue.verifyOperationInProgress(),$("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await z1(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function hp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Ab(t);$("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>op(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,i)=>op(e.remoteStore,i)),t._onlineComponents=e}function Cb(t){return t.name==="FirebaseError"?t.code===w.FAILED_PRECONDITION||t.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Ab(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$("FirestoreClient","Using user provided OfflineComponentProvider");try{await jc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Cb(n))throw n;_s("Error using user provided cache. Falling back to memory cache: "+n),await jc(t,new up)}}else $("FirestoreClient","Using default OfflineComponentProvider"),await jc(t,new up);return t._offlineComponents}async function dy(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($("FirestoreClient","Using user provided OnlineComponentProvider"),await hp(t,t._uninitializedComponentsProvider._online)):($("FirestoreClient","Using default OnlineComponentProvider"),await hp(t,new Ib))),t._onlineComponents}function Rb(t){return dy(t).then(e=>e.syncEngine)}async function fy(t){const e=await dy(t),n=e.eventManager;return n.onListen=ub.bind(null,e.syncEngine),n.onUnlisten=db.bind(null,e.syncEngine),n}function bb(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new hy({next:d=>{o.enqueueAndForget(()=>ry(i,h));const p=d.docs.has(a);!p&&d.fromCache?l.reject(new U(w.UNAVAILABLE,"Failed to get document because the client is offline.")):p&&d.fromCache&&c&&c.source==="server"?l.reject(new U(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new sy(ch(a.path),u,{includeMetadataChanges:!0,J_:!0});return ny(i,h)}(await fy(t),t.asyncQueue,e,n,r)),r.promise}function Sb(t,e,n={}){const r=new yn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new hy({next:d=>{o.enqueueAndForget(()=>ry(i,h)),d.fromCache&&c.source==="server"?l.reject(new U(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new sy(a,u,{includeMetadataChanges:!0,J_:!0});return ny(i,h)}(await fy(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function py(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dp=new Map;/**
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
 */function gy(t,e,n){if(!n)throw new U(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Pb(t,e,n,r){if(e===!0&&r===!0)throw new U(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fp(t){if(!H.isDocumentKey(t))throw new U(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function pp(t){if(H.isDocumentKey(t))throw new U(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":G()}function Dr(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new U(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class gp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Pb("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=py((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(w.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class oc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new gp({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new gp(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new Y4;switch(r.type){case"firstParty":return new eR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=dp.get(n);r&&($("ComponentProvider","Removing Datastore"),dp.delete(n),r.terminate())}(this),Promise.resolve()}}function kb(t,e,n,r={}){var s;const i=(t=Dr(t,oc))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&_s("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=tt.MOCK_USER;else{a=Yg(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new tt(l)}t._authCredentials=new X4(new u1(a,c))}}/**
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
 */class Vs{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Vs(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Kn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class Kn extends Vs{constructor(e,n,r){super(e,n,ch(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new H(e))}withConverter(e){return new Kn(this.firestore,e,this._path)}}function U6(t,e,...n){if(t=ke(t),gy("collection","path",e),t instanceof oc){const r=Re.fromString(e,...n);return pp(r),new Kn(t,null,r)}{if(!(t instanceof gt||t instanceof Kn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return pp(r),new Kn(t.firestore,null,r)}}function $6(t,e,...n){if(t=ke(t),arguments.length===1&&(e=h1.newId()),gy("doc","path",e),t instanceof oc){const r=Re.fromString(e,...n);return fp(r),new gt(t,null,new H(r))}{if(!(t instanceof gt||t instanceof Kn))throw new U(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Re.fromString(e,...n));return fp(r),new gt(t.firestore,t instanceof Kn?t.converter:null,new H(r))}}/**
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
 */class Ob{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new K1(this,"async_queue_retry"),this.iu=()=>{const n=Bc();n&&$("AsyncQueue","Visibility state changed to "+n.visibilityState),this.zo.Qo()};const e=Bc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.su(),this.ou(e)}enterRestrictedMode(e){if(!this.Za){this.Za=!0,this.nu=e||!1;const n=Bc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.iu)}}enqueue(e){if(this.su(),this.Za)return new Promise(()=>{});const n=new yn;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ya.push(e),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(e){if(!Ji(e))throw e;$("AsyncQueue","Operation failed with retryable error: "+e)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(e){const n=this.Ja.then(()=>(this.tu=!0,e().catch(r=>{this.eu=r,this.tu=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw In("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.tu=!1,r))));return this.Ja=n,n}enqueueAfterDelay(e,n,r){this.su(),this.ru.indexOf(e)>-1&&(n=0);const s=yh.createAndSchedule(this,e,n,r,i=>this.au(i));return this.Xa.push(s),s}su(){this.eu&&G()}verifyOperationInProgress(){}async uu(){let e;do e=this.Ja,await e;while(e!==this.Ja)}cu(e){for(const n of this.Xa)if(n.timerId===e)return!0;return!1}lu(e){return this.uu().then(()=>{this.Xa.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Xa)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.uu()})}hu(e){this.ru.push(e)}au(e){const n=this.Xa.indexOf(e);this.Xa.splice(n,1)}}class ac extends oc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Ob}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||my(this),this._firestoreClient.terminate()}}function xb(t,e){const n=typeof t=="object"?t:Sa(),r=typeof t=="string"?t:e||"(default)",s=er(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Kg("firestore");i&&kb(s,...i)}return s}function Ih(t){return t._firestoreClient||my(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function my(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new dR(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,py(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Tb(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(at.fromBase64String(e))}catch(n){throw new U(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(at.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Th{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class _y{constructor(e){this._methodName=e}}/**
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
 */class Ch{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return he(this._lat,e._lat)||he(this._long,e._long)}}/**
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
 */const Db=/^__.*__$/;class Nb{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $r(e,this.data,this.fieldMask,n,this.fieldTransforms):new eo(e,this.data,n,this.fieldTransforms)}}function yy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw G()}}class Ah{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Pu(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(e){return new Ah(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Au(e),s}Ru(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Tu({path:r,du:!1});return s.Pu(),s}Vu(e){return this.Tu({path:void 0,du:!0})}mu(e){return da(e,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Pu(){if(this.path)for(let e=0;e<this.path.length;e++)this.Au(this.path.get(e))}Au(e){if(e.length===0)throw this.mu("Document fields must not be empty");if(yy(this.Iu)&&Db.test(e))throw this.mu('Document fields cannot begin and end with "__"')}}class Vb{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||nc(e)}pu(e,n,r,s=!1){return new Ah({Iu:e,methodName:n,gu:r,path:Ge.emptyPath(),du:!1,fu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function vy(t){const e=t._freezeSettings(),n=nc(t._databaseId);return new Vb(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Mb(t,e,n,r,s,i={}){const o=t.pu(i.merge||i.mergeFields?2:0,e,n,s);Iy("Data must be an object, but it was:",o,r);const a=Ey(r,o);let c,l;if(i.merge)c=new Ft(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=Fb(e,h,n);if(!o.contains(d))throw new U(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);$b(u,d)||u.push(d)}c=new Ft(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new Nb(new Pt(a),c,l)}function Lb(t,e,n,r=!1){return Rh(n,t.pu(r?4:3,e))}function Rh(t,e){if(wy(t=ke(t)))return Iy("Unsupported field value:",e,t),Ey(t,e);if(t instanceof _y)return function(r,s){if(!yy(s.Iu))throw s.mu(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.mu(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.du&&e.Iu!==4)throw e.mu("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=Rh(a,s.Vu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=ke(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return DR(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Le.fromDate(r);return{timestampValue:ua(s.serializer,i)}}if(r instanceof Le){const i=new Le(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ua(s.serializer,i)}}if(r instanceof Ch)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:U1(s.serializer,r._byteString)};if(r instanceof gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:hh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.mu(`Unsupported field value: ${ic(r)}`)}(t,e)}function Ey(t,e){const n={};return d1(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(t,(r,s)=>{const i=Rh(s,e.Eu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function wy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof Ch||t instanceof Ts||t instanceof gt||t instanceof _y)}function Iy(t,e,n){if(!wy(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=ic(n);throw r==="an object"?e.mu(t+" a custom object"):e.mu(t+" "+r)}}function Fb(t,e,n){if((e=ke(e))instanceof Th)return e._internalPath;if(typeof e=="string")return Ty(t,e);throw da("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ub=new RegExp("[~\\*/\\[\\]]");function Ty(t,e,n){if(e.search(Ub)>=0)throw da(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Th(...e.split("."))._internalPath}catch{throw da(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function da(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(w.INVALID_ARGUMENT,a+t+c)}function $b(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Cy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Bb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Ay("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Bb extends Cy{data(){return super.data()}}function Ay(t,e){return typeof e=="string"?Ty(t,e):e instanceof Th?e._internalPath:e._delegate._internalPath}/**
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
 */function jb(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bh{}class qb extends bh{}function B6(t,e,...n){let r=[];e instanceof bh&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof Ph).length,a=i.filter(c=>c instanceof Sh).length;if(o>1||o>0&&a>0)throw new U(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class Sh extends qb{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Sh(e,n,r)}_apply(e){const n=this._parse(e);return Ry(e._query,n),new Vs(e.firestore,e.converter,Ml(e._query,n))}_parse(e){const n=vy(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){_p(h,u);const p=[];for(const y of h)p.push(mp(c,i,y));d={arrayValue:{values:p}}}else d=mp(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||_p(h,u),d=Lb(a,o,h,u==="in"||u==="not-in");return Me.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class Ph extends bh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Ph(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:Ht.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)Ry(o,c),o=Ml(o,c)}(e._query,n),new Vs(e.firestore,e.converter,Ml(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function mp(t,e,n){if(typeof(n=ke(n))=="string"){if(n==="")throw new U(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!w1(e)&&n.indexOf("/")!==-1)throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Re.fromString(n));if(!H.isDocumentKey(r))throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $f(t,new H(r))}if(n instanceof gt)return $f(t,n._key);throw new U(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(n)}.`)}function _p(t,e){if(!Array.isArray(t)||t.length===0)throw new U(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Ry(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Hb{convertValue(e,n="none"){switch(xr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw G()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xs(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new Ch(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=sh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Oi(e));default:return null}}convertTimestamp(e){const n=Jn(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Re.fromString(e);Ie(H1(r));const s=new xi(r.get(1),r.get(3)),i=new H(r.popFirst(5));return s.isEqual(n)||In(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function zb(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Ys{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class by extends Cy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Ay("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Lo extends by{data(e={}){return super.data(e)}}class Wb{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ys(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Lo(this._firestore,this._userDataWriter,r.key,r,new Ys(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Lo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ys(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Lo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Ys(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Kb(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Kb(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return G()}}/**
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
 */function j6(t){t=Dr(t,gt);const e=Dr(t.firestore,ac);return bb(Ih(e),t._key).then(n=>Qb(e,t,n))}class Sy extends Hb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function q6(t){t=Dr(t,Vs);const e=Dr(t.firestore,ac),n=Ih(e),r=new Sy(e);return jb(t._query),Sb(n,t._query).then(s=>new Wb(e,r,t,s))}function H6(t,e,n){t=Dr(t,gt);const r=Dr(t.firestore,ac),s=zb(t.converter,e,n);return Gb(r,[Mb(vy(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,vn.none())])}function Gb(t,e){return function(r,s){const i=new yn;return r.asyncQueue.enqueueAndForget(async()=>fb(await Rb(r),s,i)),i.promise}(Ih(t),e)}function Qb(t,e,n){const r=n.docs.get(e._key),s=new Sy(t);return new by(t,s,e._key,r,new Ys(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Os=s})(Fr),jt(new xt("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new ac(new J4(r.getProvider("auth-internal")),new nR(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),ft(Mf,"4.4.0",e),ft(Mf,"4.4.0","esm2017")})();/**
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
 */const Py="firebasestorage.googleapis.com",ky="storageBucket",Yb=2*60*1e3,Xb=10*60*1e3;/**
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
 */class De extends Nt{constructor(e,n,r=0){super(qc(e),`Firebase Storage: ${n} (${qc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,De.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return qc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var xe;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(xe||(xe={}));function qc(t){return"storage/"+t}function kh(){const t="An unknown error occurred, please check the error payload for server response.";return new De(xe.UNKNOWN,t)}function Jb(t){return new De(xe.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function Zb(t){return new De(xe.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function eS(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new De(xe.UNAUTHENTICATED,t)}function tS(){return new De(xe.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function nS(t){return new De(xe.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function rS(){return new De(xe.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function sS(){return new De(xe.CANCELED,"User canceled the upload/download.")}function iS(t){return new De(xe.INVALID_URL,"Invalid URL '"+t+"'.")}function oS(t){return new De(xe.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function aS(){return new De(xe.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+ky+"' property when initializing the app?")}function cS(){return new De(xe.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lS(){return new De(xe.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function uS(t){return new De(xe.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Hl(t){return new De(xe.INVALID_ARGUMENT,t)}function Oy(){return new De(xe.APP_DELETED,"The Firebase app was deleted.")}function hS(t){return new De(xe.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function ui(t,e){return new De(xe.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function js(t){throw new De(xe.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class wt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=wt.makeFromUrl(e,n)}catch{return new wt(e,"")}if(r.path==="")return r;throw oS(e)}static makeFromUrl(e,n){let r=null;const s="([A-Za-z0-9.\\-_]+)";function i(B){B.path.charAt(B.path.length-1)==="/"&&(B.path_=B.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),c={bucket:1,path:3};function l(B){B.path_=decodeURIComponent(B.path)}const u="v[A-Za-z0-9_]+",h=n.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",p=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),y={bucket:1,path:3},T=n===Py?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",S=new RegExp(`^https?://${T}/${s}/${E}`,"i"),N=[{regex:a,indices:c,postModify:i},{regex:p,indices:y,postModify:l},{regex:S,indices:{bucket:1,path:2},postModify:l}];for(let B=0;B<N.length;B++){const L=N[B],ie=L.regex.exec(e);if(ie){const ge=ie[L.indices.bucket];let ee=ie[L.indices.path];ee||(ee=""),r=new wt(ge,ee),L.postModify(r);break}}if(r==null)throw iS(e);return r}}class dS{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function fS(t,e,n){let r=1,s=null,i=null,o=!1,a=0;function c(){return a===2}let l=!1;function u(...E){l||(l=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,t(p,c())},E)}function d(){i&&clearTimeout(i)}function p(E,...S){if(l){d();return}if(E){d(),u.call(null,E,...S);return}if(c()||o){d(),u.call(null,E,...S);return}r<64&&(r*=2);let N;a===1?(a=2,N=0):N=(r+Math.random())*1e3,h(N)}let y=!1;function T(E){y||(y=!0,d(),!l&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),i=setTimeout(()=>{o=!0,T(!0)},n),T}function pS(t){t(!1)}/**
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
 */function gS(t){return t!==void 0}function mS(t){return typeof t=="object"&&!Array.isArray(t)}function Oh(t){return typeof t=="string"||t instanceof String}function yp(t){return xh()&&t instanceof Blob}function xh(){return typeof Blob<"u"}function vp(t,e,n,r){if(r<e)throw Hl(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw Hl(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Dh(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function xy(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const s=e(r)+"="+e(t[r]);n=n+s+"&"}return n=n.slice(0,-1),n}/**
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
 */var Ir;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Ir||(Ir={}));/**
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
 */function _S(t,e){const n=t>=500&&t<600,s=[408,429].indexOf(t)!==-1,i=e.indexOf(t)!==-1;return n||s||i}/**
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
 */class yS{constructor(e,n,r,s,i,o,a,c,l,u,h,d=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=s,this.successCodes_=i,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=c,this.timeout_=l,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((p,y)=>{this.resolve_=p,this.reject_=y,this.start_()})}start_(){const e=(r,s)=>{if(s){r(!1,new Io(!1,null,!0));return}const i=this.connectionFactory_();this.pendingConnection_=i;const o=a=>{const c=a.loaded,l=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(c,l)};this.progressCallback_!==null&&i.addUploadProgressListener(o),i.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&i.removeUploadProgressListener(o),this.pendingConnection_=null;const a=i.getErrorCode()===Ir.NO_ERROR,c=i.getStatus();if(!a||_S(c,this.additionalRetryCodes_)&&this.retry){const u=i.getErrorCode()===Ir.ABORT;r(!1,new Io(!1,null,u));return}const l=this.successCodes_.indexOf(c)!==-1;r(!0,new Io(l,i))})},n=(r,s)=>{const i=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const c=this.callback_(a,a.getResponse());gS(c)?i(c):i()}catch(c){o(c)}else if(a!==null){const c=kh();c.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,c)):o(c)}else if(s.canceled){const c=this.appDelete_?Oy():sS();o(c)}else{const c=rS();o(c)}};this.canceled_?n(!1,new Io(!1,null,!0)):this.backoffId_=fS(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&pS(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Io{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function vS(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function ES(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wS(t,e){e&&(t["X-Firebase-GMPID"]=e)}function IS(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function TS(t,e,n,r,s,i,o=!0){const a=xy(t.urlParams),c=t.url+a,l=Object.assign({},t.headers);return wS(l,e),vS(l,n),ES(l,i),IS(l,r),new yS(c,t.method,l,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,s,o)}/**
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
 */function CS(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function AS(...t){const e=CS();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(xh())return new Blob(t);throw new De(xe.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function RS(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function bS(t){if(typeof atob>"u")throw uS("base-64");return atob(t)}/**
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
 */const tn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Hc{constructor(e,n){this.data=e,this.contentType=n||null}}function SS(t,e){switch(t){case tn.RAW:return new Hc(Dy(e));case tn.BASE64:case tn.BASE64URL:return new Hc(Ny(t,e));case tn.DATA_URL:return new Hc(kS(e),OS(e))}throw kh()}function Dy(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const i=r,o=t.charCodeAt(++n);r=65536|(i&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function PS(t){let e;try{e=decodeURIComponent(t)}catch{throw ui(tn.DATA_URL,"Malformed data URL.")}return Dy(e)}function Ny(t,e){switch(t){case tn.BASE64:{const s=e.indexOf("-")!==-1,i=e.indexOf("_")!==-1;if(s||i)throw ui(t,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case tn.BASE64URL:{const s=e.indexOf("+")!==-1,i=e.indexOf("/")!==-1;if(s||i)throw ui(t,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=bS(e)}catch(s){throw s.message.includes("polyfill")?s:ui(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}class Vy{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw ui(tn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=xS(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function kS(t){const e=new Vy(t);return e.base64?Ny(tn.BASE64,e.rest):PS(e.rest)}function OS(t){return new Vy(t).contentType}function xS(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class Fn{constructor(e,n){let r=0,s="";yp(e)?(this.data_=e,r=e.size,s=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,n){if(yp(this.data_)){const r=this.data_,s=RS(r,e,n);return s===null?null:new Fn(s)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new Fn(r,!0)}}static getBlob(...e){if(xh()){const n=e.map(r=>r instanceof Fn?r.data_:r);return new Fn(AS.apply(null,n))}else{const n=e.map(o=>Oh(o)?SS(tn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const s=new Uint8Array(r);let i=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)s[i++]=o[a]}),new Fn(s,!0)}}uploadData(){return this.data_}}/**
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
 */function My(t){let e;try{e=JSON.parse(t)}catch{return null}return mS(e)?e:null}/**
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
 */function DS(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function NS(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function Ly(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function VS(t,e){return e}class ct{constructor(e,n,r,s){this.server=e,this.local=n||e,this.writable=!!r,this.xform=s||VS}}let To=null;function MS(t){return!Oh(t)||t.length<2?t:Ly(t)}function Fy(){if(To)return To;const t=[];t.push(new ct("bucket")),t.push(new ct("generation")),t.push(new ct("metageneration")),t.push(new ct("name","fullPath",!0));function e(i,o){return MS(o)}const n=new ct("name");n.xform=e,t.push(n);function r(i,o){return o!==void 0?Number(o):o}const s=new ct("size");return s.xform=r,t.push(s),t.push(new ct("timeCreated")),t.push(new ct("updated")),t.push(new ct("md5Hash",null,!0)),t.push(new ct("cacheControl",null,!0)),t.push(new ct("contentDisposition",null,!0)),t.push(new ct("contentEncoding",null,!0)),t.push(new ct("contentLanguage",null,!0)),t.push(new ct("contentType",null,!0)),t.push(new ct("metadata","customMetadata",!0)),To=t,To}function LS(t,e){function n(){const r=t.bucket,s=t.fullPath,i=new wt(r,s);return e._makeStorageReference(i)}Object.defineProperty(t,"ref",{get:n})}function FS(t,e,n){const r={};r.type="file";const s=n.length;for(let i=0;i<s;i++){const o=n[i];r[o.local]=o.xform(r,e[o.server])}return LS(r,t),r}function Uy(t,e,n){const r=My(e);return r===null?null:FS(t,r,n)}function US(t,e,n,r){const s=My(e);if(s===null||!Oh(s.downloadTokens))return null;const i=s.downloadTokens;if(i.length===0)return null;const o=encodeURIComponent;return i.split(",").map(l=>{const u=t.bucket,h=t.fullPath,d="/b/"+o(u)+"/o/"+o(h),p=Dh(d,n,r),y=xy({alt:"media",token:l});return p+y})[0]}function $S(t,e){const n={},r=e.length;for(let s=0;s<r;s++){const i=e[s];i.writable&&(n[i.server]=t[i.local])}return JSON.stringify(n)}class $y{constructor(e,n,r,s){this.url=e,this.method=n,this.handler=r,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function By(t){if(!t)throw kh()}function BS(t,e){function n(r,s){const i=Uy(t,s,e);return By(i!==null),i}return n}function jS(t,e){function n(r,s){const i=Uy(t,s,e);return By(i!==null),US(i,s,t.host,t._protocol)}return n}function jy(t){function e(n,r){let s;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?s=tS():s=eS():n.getStatus()===402?s=Zb(t.bucket):n.getStatus()===403?s=nS(t.path):s=r,s.status=n.getStatus(),s.serverResponse=r.serverResponse,s}return e}function qS(t){const e=jy(t);function n(r,s){let i=e(r,s);return r.getStatus()===404&&(i=Jb(t.path)),i.serverResponse=s.serverResponse,i}return n}function HS(t,e,n){const r=e.fullServerUrl(),s=Dh(r,t.host,t._protocol),i="GET",o=t.maxOperationRetryTime,a=new $y(s,i,jS(t,n),o);return a.errorHandler=qS(e),a}function zS(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function WS(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=zS(null,e)),r}function KS(t,e,n,r,s){const i=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let N="";for(let B=0;B<2;B++)N=N+Math.random().toString().slice(2);return N}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const l=WS(e,r,s),u=$S(l,n),h="--"+c+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+c+`\r
Content-Type: `+l.contentType+`\r
\r
`,d=`\r
--`+c+"--",p=Fn.getBlob(h,r,d);if(p===null)throw cS();const y={name:l.fullPath},T=Dh(i,t.host,t._protocol),E="POST",S=t.maxUploadRetryTime,D=new $y(T,E,BS(t,n),S);return D.urlParams=y,D.headers=o,D.body=p.uploadData(),D.errorHandler=jy(e),D}class GS{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Ir.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Ir.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Ir.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,s){if(this.sent_)throw js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),s!==void 0)for(const i in s)s.hasOwnProperty(i)&&this.xhr_.setRequestHeader(i,s[i].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class QS extends GS{initXhr(){this.xhr_.responseType="text"}}function qy(){return new QS}/**
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
 */class Nr{constructor(e,n){this._service=e,n instanceof wt?this._location=n:this._location=wt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Nr(e,n)}get root(){const e=new wt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Ly(this._location.path)}get storage(){return this._service}get parent(){const e=DS(this._location.path);if(e===null)return null;const n=new wt(this._location.bucket,e);return new Nr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw hS(e)}}function YS(t,e,n){t._throwIfRoot("uploadBytes");const r=KS(t.storage,t._location,Fy(),new Fn(e,!0),n);return t.storage.makeRequestWithTokens(r,qy).then(s=>({metadata:s,ref:t}))}function XS(t){t._throwIfRoot("getDownloadURL");const e=HS(t.storage,t._location,Fy());return t.storage.makeRequestWithTokens(e,qy).then(n=>{if(n===null)throw lS();return n})}function JS(t,e){const n=NS(t._location.path,e),r=new wt(t._location.bucket,n);return new Nr(t.storage,r)}/**
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
 */function ZS(t){return/^[A-Za-z]+:\/\//.test(t)}function eP(t,e){return new Nr(t,e)}function Hy(t,e){if(t instanceof Nh){const n=t;if(n._bucket==null)throw aS();const r=new Nr(n,n._bucket);return e!=null?Hy(r,e):r}else return e!==void 0?JS(t,e):t}function tP(t,e){if(e&&ZS(e)){if(t instanceof Nh)return eP(t,e);throw Hl("To use ref(service, url), the first argument must be a Storage instance.")}else return Hy(t,e)}function Ep(t,e){const n=e==null?void 0:e[ky];return n==null?null:wt.makeFromBucketSpec(n,t)}function nP(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:Yg(s,t.app.options.projectId))}class Nh{constructor(e,n,r,s,i){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=s,this._firebaseVersion=i,this._bucket=null,this._host=Py,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yb,this._maxUploadRetryTime=Xb,this._requests=new Set,s!=null?this._bucket=wt.makeFromBucketSpec(s,this._host):this._bucket=Ep(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=wt.makeFromBucketSpec(this._url,e):this._bucket=Ep(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vp("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vp("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Nr(this,e)}_makeRequest(e,n,r,s,i=!0){if(this._deleted)return new dS(Oy());{const o=TS(e,this._appId,r,s,n,this._firebaseVersion,i);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,s).getPromise()}}const wp="@firebase/storage",Ip="0.12.0";/**
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
 */const zy="storage";function z6(t,e,n){return t=ke(t),YS(t,e,n)}function W6(t){return t=ke(t),XS(t)}function K6(t,e){return t=ke(t),tP(t,e)}function rP(t=Sa(),e){t=ke(t);const r=er(t,zy).getImmediate({identifier:e}),s=Kg("storage");return s&&sP(r,...s),r}function sP(t,e,n,r={}){nP(t,e,n,r)}function iP(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return new Nh(n,r,s,e,Fr)}function oP(){jt(new xt(zy,iP,"PUBLIC").setMultipleInstances(!0)),ft(wp,Ip,""),ft(wp,Ip,"esm2017")}oP();const aP={apiKey:"AIzaSyB1pFFpjNdLmk0uGNBMFb8IrZvsFWXA7MQ",authDomain:"gaming-store-32ee2.firebaseapp.com",projectId:"gaming-store-32ee2",storageBucket:"gaming-store-32ee2.appspot.com",messagingSenderId:"724097093017",appId:"1:724097093017:web:b9f27d7e3eb8ddc017d708",measurementId:"G-HE4PQQRHE9"},cP=nm(aP);$A(cP);const G6=rP(),Q6=xb(),Cs=hC(),jr=PE("session",()=>{const t=je(null),e=je(!1),n=je(!1),r=je(""),s=["hapis.hanipuddin@gmail.com"];function i(){JT(Cs,c=>{c?(e.value=!0,t.value=c,s.includes(t.value.email)&&(n.value=!0)):(t.value=null,e.value=!1,n.value=!1)})}function o(c){r.value=c}function a(){ZT(Cs).then(()=>{t.value=null,e.value=!1,n.value=!1,r.value=""}).catch(c=>{console.log(c)})}return ug(()=>{i()}),{user:t,isLoggedIn:e,isAdmin:n,modalOpen:r,checkAuthStatusOnMount:i,logout:a,openModal:o}}),lP={class:"flex lg:flex-col gap-6 text-center relative text-sm items-center text-slate-300"},uP={key:0,class:"p-1 bg-red-600 rounded-full absolute -top-1 -right-1"},hP={key:0,class:"p-1 bg-red-600 rounded-full absolute -top-1 -right-1"},dP={__name:"NavIcon",setup(t){const e=jr(),n=xw(),r=je(!1),s=je("3"),i=o=>n.path.includes(o);return(o,a)=>{const c=sg("RouterLink");return de(),we("div",lP,[C("div",{class:bs(["lg:h-9 h-2 max-lg:-bottom-5 w-9 ease-in-out duration-300 lg:-left-5 lg:w-2 absolute lg:py-2 bg-slate-200",{" max-lg:translate-x-[0px] lg:translate-y-[0px]":i("/")," max-lg:translate-x-[60px] lg:translate-y-[60px]":i("/products")," max-lg:translate-x-[120px] lg:translate-y-[120px]":i("/cart")," max-lg:translate-x-[180px] lg:translate-y-[180px]":i("/transaction")," max-lg:translate-x-[240px] lg:translate-y-[240px]":i("/admin")}])},null,2),ce(c,{class:"home w-9 h-9 nav-link relative",to:"/"},{default:ur(()=>[ce($w,{class:"home"})]),_:1}),ce(c,{class:"products w-9 h-9 nav-link relative",to:"/products"},{default:ur(()=>[ce(uI,{class:"product"})]),_:1}),ce(c,{class:"cart w-9 h-9 nav-link relative",to:"/cart"},{default:ur(()=>[ce(nI,{class:"cart"}),s.value>0?(de(),we("div",uP)):It("",!0)]),_:1}),ce(c,{class:"trans w-9 h-9 nav-link relative",to:"/transaction"},{default:ur(()=>[ce(Gw,{class:"trans"}),r.value?(de(),we("div",hP)):It("",!0)]),_:1}),Se(e).user?(de(),mi(c,{key:0,class:"admin w-9 h-9 nav-link relative",to:"/admin/"},{default:ur(()=>[ce(yI,{class:"product"})]),_:1})):It("",!0)])}}},fP={},pP={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},gP=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),mP=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),_P=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M8 6C8 3.79086 9.79086 2 12 2H17.5C19.9853 2 22 4.01472 22 6.5V17.5C22 19.9853 19.9853 22 17.5 22H12C9.79086 22 8 20.2091 8 18V17C8 16.4477 8.44772 16 9 16C9.55228 16 10 16.4477 10 17V18C10 19.1046 10.8954 20 12 20H17.5C18.8807 20 20 18.8807 20 17.5V6.5C20 5.11929 18.8807 4 17.5 4H12C10.8954 4 10 4.89543 10 6V7C10 7.55228 9.55228 8 9 8C8.44772 8 8 7.55228 8 7V6ZM12.2929 8.29289C12.6834 7.90237 13.3166 7.90237 13.7071 8.29289L16.7071 11.2929C17.0976 11.6834 17.0976 12.3166 16.7071 12.7071L13.7071 15.7071C13.3166 16.0976 12.6834 16.0976 12.2929 15.7071C11.9024 15.3166 11.9024 14.6834 12.2929 14.2929L13.5858 13L5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L13.5858 11L12.2929 9.70711C11.9024 9.31658 11.9024 8.68342 12.2929 8.29289Z",fill:"currentColor"})],-1),yP=[gP,mP,_P];function vP(t,e){return de(),we("svg",pP,yP)}const EP=An(fP,[["render",vP]]),wP={},IP={viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},TP=C("g",{id:"SVGRepo_bgCarrier","stroke-width":"0"},null,-1),CP=C("g",{id:"SVGRepo_tracurrentColorerCarrier","stroke-linecurrentcap":"round","stroke-linejoin":"round"},null,-1),AP=C("g",{id:"SVGRepo_icurrentColoronCarrier"},[C("path",{"fill-rule":"evenodd","currentclip-rule":"evenodd",d:"M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z",fill:"currentColor"})],-1),RP=[TP,CP,AP];function bP(t,e){return de(),we("svg",IP,RP)}const SP=An(wP,[["render",bP]]),PP={class:"bg-slate-600 z-40 max-lg:w-full lg:w-[89.2px] relative bottom-0 max-lg:fixed lg:static max-lg:p-5 lg:px-5 lg:h-auto flex justify-center"},kP={class:"flex lg:py-5 lg:fixed lg:top-0 lg:h-screen lg:flex-col gap-7"},OP=C("br",null,null,-1),xP=C("div",{class:"flex border-t border-gray-400"},null,-1),DP={class:"flex grow gap-1 items-center flex-col-reverse"},NP={class:"absolute rounded-lg opacity-0 group-[.active]:opacity-100 invisible group-[.active]:visible duration-200 -translate-x-1/4 lg:translate-x-1/2 max-lg:group-[.active]:-translate-y-1/2 lg:group-[.active]:translate-x-3/4 lg:-right-full translate-y-1/2 bottom-1/2 bg-slate-700 p-2 px-3"},VP=["src"],MP={__name:"sidebar",setup(t){const e=jr(),n=je(""),r=()=>{n.value==""?n.value="active":n.value=""};return(s,i)=>{const o=sg("RouterLink");return de(),we("div",PP,[C("div",kP,[ce(o,{to:"/",class:"text-center hidden lg:block"},{default:ur(()=>[yr(" LOGO "),OP,yr(" HERE ")]),_:1}),xP,ce(dP),C("div",DP,[Se(e).isLoggedIn?(de(),we("button",{key:0,onClick:r,class:bs([n.value,"flex group gap-1 items-center relative"])},[C("div",NP,[C("button",{onClick:i[0]||(i[0]=(...a)=>Se(e).logout&&Se(e).logout(...a)),class:"flex"},[ce(SP,{class:"nav-link w-10"}),yr("Sign Out")])]),C("img",{class:"w-10 rounded-full",src:Se(e).user.photoURL?Se(e).user.photoURL:"https://ui-avatars.com/api/?name="+Se(e).user.displayName+"&background=random",alt:""},null,8,VP)],2)):It("",!0),Se(e).isLoggedIn?It("",!0):(de(),we("button",{key:1,onClick:i[1]||(i[1]=a=>Se(e).openModal("login")),class:""},[ce(EP,{class:"nav-link w-10"})]))])])])}}},LP="modulepreload",FP=function(t){return"/"+t},Tp={},Gt=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link");s=Promise.all(n.map(o=>{if(o=FP(o),o in Tp)return;Tp[o]=!0;const a=o.endsWith(".css"),c=a?'[rel="stylesheet"]':"";if(!!r)for(let h=i.length-1;h>=0;h--){const d=i[h];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${c}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":LP,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((h,d)=>{u.addEventListener("load",h),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return s.then(()=>e()).catch(i=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=i,window.dispatchEvent(o),!o.defaultPrevented)throw i})},UP={class:"carousel"},$P=["src","alt"],BP={class:"absolute inset-0 flex items-center justify-center"},jP={class:"text-white text-lg font-semibold"},qP={__name:"carousel",setup(t){const e=[{image:"https://placekitten.com/800/400",caption:"Slide 1"},{image:"https://placekitten.com/801/400",caption:"Slide 2"},{image:"https://placekitten.com/802/400",caption:"Slide 3"}];let n=0;const r=o=>({"opacity-100":o===n,"opacity-0":o!==n,"transition-opacity":!0}),s=()=>{n=(n+1)%e.length},i=()=>{n=(n-1+e.length)%e.length};return(o,a)=>(de(),we("div",UP,[(de(),we(Qt,null,lv(e,(c,l)=>C("div",{key:l,class:bs(r(l))},[C("img",{src:c.image,alt:c.caption,class:"w-full h-full object-cover"},null,8,$P),C("div",BP,[C("div",jP,Xl(c.caption),1)])],2)),64)),C("button",{onClick:i,class:"prev-btn"},"Previous"),C("button",{onClick:s,class:"next-btn"},"Next")]))}},HP=An(qP,[["__scopeId","data-v-61b11ace"]]),zP={class:"bg-slate-800 flex w-full justify-center p-5"},WP={class:"flex flex-col grow container"},KP=C("h1",{class:"text-3xl bold"},"Welcome To Our Gaming Store!",-1),GP={__name:"HomeView",setup(t){return(e,n)=>(de(),we("div",zP,[C("div",WP,[KP,ce(HP)])]))}},Wy=kw({history:KE("/"),routes:[{path:"/",name:"home",component:GP},{path:"/products",name:"products",component:()=>Gt(()=>import("./ProductsView-afFWp9N0.js"),__vite__mapDeps([0,1]))},{path:"/products/:id",name:"product",component:()=>Gt(()=>import("./ItemView-hUqEm3Mu.js"),__vite__mapDeps([]))},{path:"/cart",name:"cart",component:()=>Gt(()=>import("./CartView-Jg7IfXK7.js"),__vite__mapDeps([]))},{path:"/transaction",name:"transaction",component:()=>Gt(()=>import("./TransactionView-NfMOpZQV.js"),__vite__mapDeps([]))},{path:"/admin",name:"admin",component:()=>Gt(()=>import("./AdminView-Qw7cy7Kb.js"),__vite__mapDeps([])),children:[{path:"",name:"admin",component:()=>Gt(()=>import("./ProductsView-afFWp9N0.js"),__vite__mapDeps([0,1]))},{path:"add-product",name:"add-product",component:()=>Gt(()=>import("./AddProdView-ZZEm0_HH.js"),__vite__mapDeps([2,1]))},{path:"users",name:"users",component:()=>Gt(()=>import("./UsersView-giQpFJge.js"),__vite__mapDeps([]))},{path:"orders",name:"orders",component:()=>Gt(()=>import("./OrderView-JURLi8uY.js"),__vite__mapDeps([]))},{path:"item/:id",name:"item",component:()=>Gt(()=>import("./ItemView-xp3UYt4G.js"),__vite__mapDeps([]))}]}]}),QP={},YP={width:"24px",height:"24px",viewBox:"0 0 262.00 262.00",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",fill:"#000000"},XP=xv('<g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.524"></g><g id="SVGRepo_iconCarrier"><path d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" fill="#4285F4"></path><path d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" fill="#34A853"></path><path d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" fill="#FBBC05"></path><path d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" fill="#EB4335"></path></g>',3),JP=[XP];function ZP(t,e){return de(),we("svg",YP,JP)}const e6=An(QP,[["render",ZP]]),t6={class:"flex gap-4 justify-center"},Ky={__name:"providerLogin",setup(t){jr();const e=new Mt,n=()=>{E2(Cs,e).then(r=>{Mt.credentialFromResult(r).accessToken,r.user}).catch(r=>{r.code,r.message,r.customData.email,Mt.credentialFromError(r)})};return(r,s)=>(de(),we("div",t6,[C("button",{type:"button",onClick:n,href:"",class:"hover:scale-105 duration-100 flex gap-3 items-center rounded-lg ring-1 ring-gray-300 py-2 px-4"},[ce(e6,{class:""}),yr(" Sign in with Google")])]))}},n6={class:"p-6 space-y-4 w-full md:space-y-6 sm:p-8"},r6=C("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"},"Sign in to your account",-1),s6={class:"space-y-4 md:space-y-6",action:"#"},i6=C("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Your email",-1),o6=C("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),a6={class:"flex items-center justify-between"},c6={class:"flex items-start"},l6={key:0,class:"text-xs text-red-500 capitalize"},u6=C("a",{href:"#",class:"text-sm font-medium text-primary-900 hover:underline dark:text-primary-500"},"Forgot password?",-1),h6={class:"text-sm font-light text-gray-500 dark:text-gray-400"},d6=C("div",{class:"flex items-center space-x-4"},[C("div",{class:"flex grow border-t border-gray-400"}),C("span",null,"or"),C("div",{class:"flex grow border-t border-gray-400"})],-1),f6={__name:"LoginForm",setup(t){const e=jr(),n=je(""),r=je(""),s=je(""),i=()=>{n.value==""||r.value==""?s.value="Please fill in all fields":KT(Cs,n.value,r.value).then(()=>{}).catch(o=>{console.log(o.message),s.value=o.message})};return(o,a)=>(de(),we("div",{onClick:a[3]||(a[3]=bg(()=>{},["stop"])),class:"bg-white w-full h-fit rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"},[C("div",n6,[r6,C("form",s6,[C("div",null,[i6,Zr(C("input",{"onUpdate:modelValue":a[0]||(a[0]=c=>n.value=c),type:"email",name:"email",id:"email",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[Un,n.value]])]),C("div",null,[o6,Zr(C("input",{"onUpdate:modelValue":a[1]||(a[1]=c=>r.value=c),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[Un,r.value]])]),C("div",a6,[C("div",c6,[s.value?(de(),we("span",l6,Xl(s.value),1)):It("",!0)]),u6]),C("button",{type:"button",onClick:i,class:"w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}," Sign in "),C("p",h6,[yr(" Don't have an account? "),C("button",{type:"button",onClick:a[2]||(a[2]=c=>Se(e).openModal("register")),class:"font-medium text-primary-900 hover:underline dark:text-primary-500"},"Sign up")])]),d6,ce(Ky)])]))}},p6={class:"p-6 space-y-4 w-full md:space-y-6 sm:p-8"},g6=C("h1",{class:"text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"},"Sign up to your account",-1),m6={class:"space-y-4 md:space-y-6",action:"#"},_6=C("label",{for:"name",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Name",-1),y6=C("label",{for:"email",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"}," Email",-1),v6=C("label",{for:"password",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Password",-1),E6={key:0,class:"text-xs text-red-500"},w6=C("label",{for:"conpassword",class:"block mb-2 text-sm font-medium text-gray-900 dark:text-white"},"Confirm Password",-1),I6={key:0,class:"text-xs text-red-500"},T6={class:"flex items-center justify-between"},C6={class:"flex items-start"},A6={key:0,class:"text-xs text-red-500"},R6=C("a",{href:"#",class:"text-sm font-medium text-primary-900 hover:underline dark:text-primary-500"},"Forgot password?",-1),b6={class:"text-sm font-light text-gray-500 dark:text-gray-400"},S6=C("div",{class:"flex items-center space-x-4"},[C("div",{class:"flex grow border-t border-gray-400"}),C("span",null,"or"),C("div",{class:"flex grow border-t border-gray-400"})],-1),P6={__name:"RegisterForm",setup(t){const e=jr(),n=je(""),r=je(""),s=je(""),i=je(""),o=je(""),a=()=>{r.value==""||s.value==""||n.value==""||i.value==""?o.value="Please fill in all fields":WT(Cs,r.value,s.value).then(()=>{QT(Cs.currentUser,{displayName:n.value}).catch(c=>{o.value=c.message})})};return(c,l)=>(de(),we("div",{onClick:l[5]||(l[5]=bg(()=>{},["stop"])),class:"bg-white w-full h-fit rounded-lg shadow dark:border md:mt-0 sm:max-w-lg xl:p-0 dark:bg-gray-800 dark:border-gray-700"},[C("div",p6,[g6,C("form",m6,[C("div",null,[_6,Zr(C("input",{"onUpdate:modelValue":l[0]||(l[0]=u=>n.value=u),type:"text",name:"name",id:"name",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"John Doe",required:""},null,512),[[Un,n.value]])]),C("div",null,[y6,Zr(C("input",{"onUpdate:modelValue":l[1]||(l[1]=u=>r.value=u),type:"email",name:"email",id:"email",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",placeholder:"name@company.com",required:""},null,512),[[Un,r.value]])]),C("div",null,[v6,Zr(C("input",{"onUpdate:modelValue":l[2]||(l[2]=u=>s.value=u),type:"password",name:"password",id:"password",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[Un,s.value]]),s.value.length>0&&s.value.length<6?(de(),we("span",E6,"Minimum 6 characters")):It("",!0)]),C("div",null,[w6,Zr(C("input",{"onUpdate:modelValue":l[3]||(l[3]=u=>i.value=u),type:"password",name:"conpassword",id:"conpassword",placeholder:"••••••••",class:"text-gray-900 sm:text-sm rounded-lg focus:ring-primary-900 focus:border-primary-900 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",required:""},null,512),[[Un,i.value]])]),s.value.length>0&&i.value.length>0&&s.value!==i.value?(de(),we("span",I6,"Passwords do not match")):It("",!0),C("div",T6,[C("div",C6,[o.value?(de(),we("span",A6,Xl(o.value),1)):It("",!0)]),R6]),C("button",{type:"button",onClick:a,class:"w-full text-white bg-primary-900 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-900 dark:hover:bg-primary-700 dark:focus:ring-primary-800"}," Sign up "),C("p",b6,[yr(" Have an account? "),C("button",{type:"button",onClick:l[4]||(l[4]=u=>Se(e).openModal("login")),class:"font-medium text-primary-900 hover:underline dark:text-primary-500"},"Sign in")])]),S6,ce(Ky)])]))}},k6={__name:"LogReg",setup(t){const e=jr();return(n,r)=>Se(e).modalOpen||n.$route.path.includes("/login")||n.$route.path.includes("/register")?(de(),we("div",{key:0,onClick:r[0]||(r[0]=s=>n.$route.path.includes("/login")||n.$route.path.includes("/register")?Se(Wy).push("/"):Se(e).modalOpen=""),class:"bg-black h-screen z-50 left-0 top-0 bg-opacity-70 fixed flex w-screen items-center justify-center p-5"},[n.$route.path.includes("/login")||Se(e).modalOpen=="login"?(de(),mi(f6,{key:0})):It("",!0),n.$route.path.includes("/register")||Se(e).modalOpen=="register"?(de(),mi(P6,{key:1})):It("",!0)])):It("",!0)}},O6={class:"flex font-josefin flex-col-reverse lg:flex-row h-full w-full text-white"},x6={class:"bg-slate-800 max-lg:pb-24 justify-center flex items-start min-h-screen overflow-hidden w-full"},D6={class:"container p-5"},N6={__name:"App",setup(t){const e=jr();return(n,r)=>(de(),we("div",O6,[Se(e).isLoggedIn?It("",!0):(de(),mi(k6,{key:0})),ce(MP),C("div",x6,[C("div",D6,[ce(Se(jg))])])]))}},Vh=vE(N6);Vh.use(TE());Vh.use(Wy);Vh.mount("#app");export{Un as A,K6 as B,G6 as C,z6 as D,W6 as E,Qt as F,H6 as G,xv as H,An as _,sg as a,de as b,we as c,ce as d,C as e,lv as f,U6 as g,q6 as h,yr as i,mi as j,Q6 as k,xw as l,$6 as m,j6 as n,ug as o,Zr as p,B6 as q,je as r,It as s,Xl as t,jr as u,V6 as v,ur as w,fE as x,bs as y,dE as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ProductsView-afFWp9N0.js","assets/Add-gIbn5K16.js","assets/AddProdView-ZZEm0_HH.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}