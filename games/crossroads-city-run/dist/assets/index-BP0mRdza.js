var OM=Object.defineProperty;var zM=(o,e,i)=>e in o?OM(o,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):o[e]=i;var xe=(o,e,i)=>zM(o,typeof e!="symbol"?e+"":e,i);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const f of l)if(f.type==="childList")for(const h of f.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const f={};return l.integrity&&(f.integrity=l.integrity),l.referrerPolicy&&(f.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?f.credentials="include":l.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function s(l){if(l.ep)return;l.ep=!0;const f=i(l);fetch(l.href,f)}})();function PM(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var fd={exports:{}},sl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iv;function IM(){if(iv)return sl;iv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,f){var h=null;if(f!==void 0&&(h=""+f),l.key!==void 0&&(h=""+l.key),"key"in l){f={};for(var d in l)d!=="key"&&(f[d]=l[d])}else f=l;return l=f.ref,{$$typeof:o,type:s,key:h,ref:l!==void 0?l:null,props:f}}return sl.Fragment=e,sl.jsx=i,sl.jsxs=i,sl}var av;function BM(){return av||(av=1,fd.exports=IM()),fd.exports}var ie=BM(),hd={exports:{}},ae={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function FM(){if(rv)return ae;rv=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),f=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),_=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),m=Symbol.for("react.activity"),x=Symbol.for("react.view_transition"),M=Symbol.iterator;function T(w){return w===null||typeof w!="object"?null:(w=M&&w[M]||w["@@iterator"],typeof w=="function"?w:null)}var C={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,S={};function P(w,j,mt){this.props=w,this.context=j,this.refs=S,this.updater=mt||C}P.prototype.isReactComponent={},P.prototype.setState=function(w,j){if(typeof w!="object"&&typeof w!="function"&&w!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,w,j,"setState")},P.prototype.forceUpdate=function(w){this.updater.enqueueForceUpdate(this,w,"forceUpdate")};function O(){}O.prototype=P.prototype;function U(w,j,mt){this.props=w,this.context=j,this.refs=S,this.updater=mt||C}var X=U.prototype=new O;X.constructor=U,y(X,P.prototype),X.isPureReactComponent=!0;var I=Array.isArray;function z(){}var G={H:null,A:null,T:null,S:null},D=Object.prototype.hasOwnProperty;function R(w,j,mt){var ut=mt.ref;return{$$typeof:o,type:w,key:j,ref:ut!==void 0?ut:null,props:mt}}function H(w,j){return R(w.type,j,w.props)}function ot(w){return typeof w=="object"&&w!==null&&w.$$typeof===o}function it(w){var j={"=":"=0",":":"=2"};return"$"+w.replace(/[=:]/g,function(mt){return j[mt]})}var dt=/\/+/g;function ct(w,j){return typeof w=="object"&&w!==null&&w.key!=null?it(""+w.key):j.toString(36)}function q(w){switch(w.status){case"fulfilled":return w.value;case"rejected":throw w.reason;default:switch(typeof w.status=="string"?w.then(z,z):(w.status="pending",w.then(function(j){w.status==="pending"&&(w.status="fulfilled",w.value=j)},function(j){w.status==="pending"&&(w.status="rejected",w.reason=j)})),w.status){case"fulfilled":return w.value;case"rejected":throw w.reason}}throw w}function rt(w,j,mt,ut,Tt){var Vt=typeof w;(Vt==="undefined"||Vt==="boolean")&&(w=null);var wt=!1;if(w===null)wt=!0;else switch(Vt){case"bigint":case"string":case"number":wt=!0;break;case"object":switch(w.$$typeof){case o:case e:wt=!0;break;case v:return wt=w._init,rt(wt(w._payload),j,mt,ut,Tt)}}if(wt)return Tt=Tt(w),wt=ut===""?"."+ct(w,0):ut,I(Tt)?(mt="",wt!=null&&(mt=wt.replace(dt,"$&/")+"/"),rt(Tt,j,mt,"",function(re){return re})):Tt!=null&&(ot(Tt)&&(Tt=H(Tt,mt+(Tt.key==null||w&&w.key===Tt.key?"":(""+Tt.key).replace(dt,"$&/")+"/")+wt)),j.push(Tt)),1;wt=0;var bt=ut===""?".":ut+":";if(I(w))for(var It=0;It<w.length;It++)ut=w[It],Vt=bt+ct(ut,It),wt+=rt(ut,j,mt,Vt,Tt);else if(It=T(w),typeof It=="function")for(w=It.call(w),It=0;!(ut=w.next()).done;)ut=ut.value,Vt=bt+ct(ut,It++),wt+=rt(ut,j,mt,Vt,Tt);else if(Vt==="object"){if(typeof w.then=="function")return rt(q(w),j,mt,ut,Tt);throw j=String(w),Error("Objects are not valid as a React child (found: "+(j==="[object Object]"?"object with keys {"+Object.keys(w).join(", ")+"}":j)+"). If you meant to render a collection of children, use an array instead.")}return wt}function Q(w,j,mt){if(w==null)return w;var ut=[],Tt=0;return rt(w,ut,"","",function(Vt){return j.call(mt,Vt,Tt++)}),ut}function xt(w){if(w._status===-1){var j=w._result,mt=j();mt.then(function(ut){(w._status===0||w._status===-1)&&(w._status=1,w._result=ut,mt.status===void 0&&(mt.status="fulfilled",mt.value=ut))},function(ut){(w._status===0||w._status===-1)&&(w._status=2,w._result=ut,mt.status===void 0&&(mt.status="rejected",mt.reason=ut))}),w._status===-1&&(w._status=0,w._result=mt)}if(w._status===1)return w._result.default;throw w._result}var St=typeof reportError=="function"?reportError:function(w){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var j=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof w=="object"&&w!==null&&typeof w.message=="string"?String(w.message):String(w),error:w});if(!window.dispatchEvent(j))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",w);return}console.error(w)};function Ht(w){var j=G.T,mt={};mt.types=j!==null?j.types:null,G.T=mt;try{var ut=w(),Tt=G.S;Tt!==null&&Tt(mt,ut),typeof ut=="object"&&ut!==null&&typeof ut.then=="function"&&ut.then(z,St)}catch(Vt){St(Vt)}finally{j!==null&&mt.types!==null&&(j.types=mt.types),G.T=j}}function ne(w){var j=G.T;if(j!==null){var mt=j.types;mt===null?j.types=[w]:mt.indexOf(w)===-1&&mt.push(w)}else Ht(ne.bind(null,w))}var Te={map:Q,forEach:function(w,j,mt){Q(w,function(){j.apply(this,arguments)},mt)},count:function(w){var j=0;return Q(w,function(){j++}),j},toArray:function(w){return Q(w,function(j){return j})||[]},only:function(w){if(!ot(w))throw Error("React.Children.only expected to receive a single React element child.");return w}};return ae.Activity=m,ae.Children=Te,ae.Component=P,ae.Fragment=i,ae.Profiler=l,ae.PureComponent=U,ae.StrictMode=s,ae.Suspense=p,ae.ViewTransition=x,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=G,ae.__COMPILER_RUNTIME={__proto__:null,c:function(w){return G.H.useMemoCache(w)}},ae.addTransitionType=ne,ae.cache=function(w){return function(){return w.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(w,j,mt){if(w==null)throw Error("The argument must be a React element, but you passed "+w+".");var ut=y({},w.props),Tt=w.key;if(j!=null)for(Vt in j.key!==void 0&&(Tt=""+j.key),j)!D.call(j,Vt)||Vt==="key"||Vt==="__self"||Vt==="__source"||Vt==="ref"&&j.ref===void 0||(ut[Vt]=j[Vt]);var Vt=arguments.length-2;if(Vt===1)ut.children=mt;else if(1<Vt){for(var wt=Array(Vt),bt=0;bt<Vt;bt++)wt[bt]=arguments[bt+2];ut.children=wt}return R(w.type,Tt,ut)},ae.createContext=function(w){return w={$$typeof:h,_currentValue:w,_currentValue2:w,_threadCount:0,Provider:null,Consumer:null},w.Provider=w,w.Consumer={$$typeof:f,_context:w},w},ae.createElement=function(w,j,mt){var ut,Tt={},Vt=null;if(j!=null)for(ut in j.key!==void 0&&(Vt=""+j.key),j)D.call(j,ut)&&ut!=="key"&&ut!=="__self"&&ut!=="__source"&&(Tt[ut]=j[ut]);var wt=arguments.length-2;if(wt===1)Tt.children=mt;else if(1<wt){for(var bt=Array(wt),It=0;It<wt;It++)bt[It]=arguments[It+2];Tt.children=bt}if(w&&w.defaultProps)for(ut in wt=w.defaultProps,wt)Tt[ut]===void 0&&(Tt[ut]=wt[ut]);return R(w,Vt,Tt)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(w){return{$$typeof:d,render:w}},ae.isValidElement=ot,ae.lazy=function(w){return{$$typeof:v,_payload:{_status:-1,_result:w},_init:xt}},ae.memo=function(w,j){return{$$typeof:_,type:w,compare:j===void 0?null:j}},ae.startTransition=Ht,ae.unstable_useCacheRefresh=function(){return G.H.useCacheRefresh()},ae.use=function(w){return G.H.use(w)},ae.useActionState=function(w,j,mt){return G.H.useActionState(w,j,mt)},ae.useCallback=function(w,j){return G.H.useCallback(w,j)},ae.useContext=function(w){return G.H.useContext(w)},ae.useDebugValue=function(){},ae.useDeferredValue=function(w,j){return G.H.useDeferredValue(w,j)},ae.useEffect=function(w,j){return G.H.useEffect(w,j)},ae.useEffectEvent=function(w){return G.H.useEffectEvent(w)},ae.useId=function(){return G.H.useId()},ae.useImperativeHandle=function(w,j,mt){return G.H.useImperativeHandle(w,j,mt)},ae.useInsertionEffect=function(w,j){return G.H.useInsertionEffect(w,j)},ae.useLayoutEffect=function(w,j){return G.H.useLayoutEffect(w,j)},ae.useMemo=function(w,j){return G.H.useMemo(w,j)},ae.useOptimistic=function(w,j){return G.H.useOptimistic(w,j)},ae.useReducer=function(w,j,mt){return G.H.useReducer(w,j,mt)},ae.useRef=function(w){return G.H.useRef(w)},ae.useState=function(w){return G.H.useState(w)},ae.useSyncExternalStore=function(w,j,mt){return G.H.useSyncExternalStore(w,j,mt)},ae.useTransition=function(){return G.H.useTransition()},ae.version="19.3.0",ae}var sv;function Bp(){return sv||(sv=1,hd.exports=FM()),hd.exports}var Mc=Bp();const HM=PM(Mc);var dd={exports:{}},ol={},pd={exports:{}},md={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ov;function GM(){return ov||(ov=1,(function(o){function e(q,rt){var Q=q.length;q.push(rt);t:for(;0<Q;){var xt=Q-1>>>1,St=q[xt];if(0<l(St,rt))q[xt]=rt,q[Q]=St,Q=xt;else break t}}function i(q){return q.length===0?null:q[0]}function s(q){if(q.length===0)return null;var rt=q[0],Q=q.pop();if(Q!==rt){q[0]=Q;t:for(var xt=0,St=q.length,Ht=St>>>1;xt<Ht;){var ne=2*(xt+1)-1,Te=q[ne],w=ne+1,j=q[w];if(0>l(Te,Q))w<St&&0>l(j,Te)?(q[xt]=j,q[w]=Q,xt=w):(q[xt]=Te,q[ne]=Q,xt=ne);else if(w<St&&0>l(j,Q))q[xt]=j,q[w]=Q,xt=w;else break t}}return rt}function l(q,rt){var Q=q.sortIndex-rt.sortIndex;return Q!==0?Q:q.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var f=performance;o.unstable_now=function(){return f.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var p=[],_=[],v=1,m=null,x=3,M=!1,T=!1,C=!1,y=!1,S=typeof setTimeout=="function"?setTimeout:null,P=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function U(q){for(var rt=i(_);rt!==null;){if(rt.callback===null)s(_);else if(rt.startTime<=q)s(_),rt.sortIndex=rt.expirationTime,e(p,rt);else break;rt=i(_)}}function X(q){if(C=!1,U(q),!T)if(i(p)!==null)T=!0,I||(I=!0,ot());else{var rt=i(_);rt!==null&&ct(X,rt.startTime-q)}}var I=!1,z=-1,G=5,D=-1;function R(){return y?!0:!(o.unstable_now()-D<G)}function H(){if(y=!1,I){var q=o.unstable_now();D=q;var rt=!0;try{t:{T=!1,C&&(C=!1,P(z),z=-1),M=!0;var Q=x;try{e:{for(U(q),m=i(p);m!==null&&!(m.expirationTime>q&&R());){var xt=m.callback;if(typeof xt=="function"){m.callback=null,x=m.priorityLevel;var St=xt(m.expirationTime<=q);if(q=o.unstable_now(),typeof St=="function"){m.callback=St,U(q),rt=!0;break e}m===i(p)&&s(p),U(q)}else s(p);m=i(p)}if(m!==null)rt=!0;else{var Ht=i(_);Ht!==null&&ct(X,Ht.startTime-q),rt=!1}}break t}finally{m=null,x=Q,M=!1}rt=void 0}}finally{rt?ot():I=!1}}}var ot;if(typeof O=="function")ot=function(){O(H)};else if(typeof MessageChannel<"u"){var it=new MessageChannel,dt=it.port2;it.port1.onmessage=H,ot=function(){dt.postMessage(null)}}else ot=function(){S(H,0)};function ct(q,rt){z=S(function(){q(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(q){q.callback=null},o.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<q?Math.floor(1e3/q):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(q){switch(x){case 1:case 2:case 3:var rt=3;break;default:rt=x}var Q=x;x=rt;try{return q()}finally{x=Q}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(q,rt){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Q=x;x=q;try{return rt()}finally{x=Q}},o.unstable_scheduleCallback=function(q,rt,Q){var xt=o.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?xt+Q:xt):Q=xt,q){case 1:var St=-1;break;case 2:St=250;break;case 5:St=1073741823;break;case 4:St=1e4;break;default:St=5e3}return St=Q+St,q={id:v++,callback:rt,priorityLevel:q,startTime:Q,expirationTime:St,sortIndex:-1},Q>xt?(q.sortIndex=Q,e(_,q),i(p)===null&&q===i(_)&&(C?(P(z),z=-1):C=!0,ct(X,Q-xt))):(q.sortIndex=St,e(p,q),T||M||(T=!0,I||(I=!0,ot()))),q},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(q){var rt=x;return function(){var Q=x;x=rt;try{return q.apply(this,arguments)}finally{x=Q}}}})(md)),md}var lv;function VM(){return lv||(lv=1,pd.exports=GM()),pd.exports}var gd={exports:{}},Ln={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uv;function XM(){if(uv)return Ln;uv=1;var o=Bp();function e(v){var m="https://react.dev/errors/"+v;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var x=2;x<arguments.length;x++)m+="&args[]="+encodeURIComponent(arguments[x])}return"Minified React error #"+v+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal"),f=Symbol.for("react.recoverable"),h=Symbol.for("react.optimistic_key");function d(v,m,x){var M=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:M==null?null:M===h?h:""+M,children:v,containerInfo:m,implementation:x}}var p=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function _(v,m){if(v==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,Ln.browser=function(v){return{$$typeof:f,_reason:v}},Ln.createPortal=function(v,m){var x=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return d(v,m,null,x)},Ln.flushSync=function(v){var m=p.T,x=s.p;try{if(p.T=null,s.p=2,v)return v()}finally{p.T=m,s.p=x,s.d.f()}},Ln.preconnect=function(v,m){typeof v=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(v,m))},Ln.prefetchDNS=function(v){typeof v=="string"&&s.d.D(v)},Ln.preinit=function(v,m){if(typeof v=="string"&&m&&typeof m.as=="string"){var x=m.as,M=_(x,m.crossOrigin),T=typeof m.integrity=="string"?m.integrity:void 0,C=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;x==="style"?s.d.S(v,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:M,integrity:T,fetchPriority:C}):x==="script"&&s.d.X(v,{crossOrigin:M,integrity:T,fetchPriority:C,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(v,m){if(typeof v=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var x=_(m.as,m.crossOrigin);s.d.M(v,{crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}}else m==null&&s.d.M(v)},Ln.preload=function(v,m){if(typeof v=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var x=m.as,M=_(x,m.crossOrigin);s.d.L(v,x,{crossOrigin:M,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(v,m){if(typeof v=="string")if(m){var x=_(m.as,m.crossOrigin);s.d.m(v,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:x,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0})}else s.d.m(v)},Ln.requestFormReset=function(v){s.d.r(v)},Ln.unstable_batchedUpdates=function(v,m){return v(m)},Ln.useFormState=function(v,m,x){return p.H.useFormState(v,m,x)},Ln.useFormStatus=function(){return p.H.useHostTransitionStatus()},Ln.version="19.3.0",Ln}var cv;function kM(){if(cv)return gd.exports;cv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),gd.exports=XM(),gd.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv;function qM(){if(fv)return ol;fv=1;var o=VM(),e=Bp(),i=kM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function f(t){for(var n=t,a=n;a&&!a.alternate;)n=a,(n.flags&4098)!==0&&(t=n.return),a=n.return;for(;n.return;)n=n.return;return n.tag===3?t:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(f(t)!==t)throw Error(s(188))}function _(t){var n=t.alternate;if(!n){if(n=f(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,r=n;;){var u=a.return;if(u===null)break;var c=u.alternate;if(c===null){if(r=u.return,r!==null){a=r;continue}break}if(u.child===c.child){for(c=u.child;c;){if(c===a)return p(u),t;if(c===r)return p(u),n;c=c.sibling}throw Error(s(188))}if(a.return!==r.return)a=u,r=c;else{for(var g=!1,E=u.child;E;){if(E===a){g=!0,a=u,r=c;break}if(E===r){g=!0,r=u,a=c;break}E=E.sibling}if(!g){for(E=c.child;E;){if(E===a){g=!0,a=c,r=u;break}if(E===r){g=!0,r=c,a=u;break}E=E.sibling}if(!g)throw Error(s(189))}}if(a.alternate!==r)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function v(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=v(t),n!==null)return n;t=t.sibling}return null}function m(t,n,a,r,u,c){for(;t!==null;){if((t.tag===5||t.tag===27||t.tag===6)&&a(t,r,u,c)||(t.tag!==22||t.memoizedState===null)&&(n||t.tag!==5&&t.tag!==27)&&m(t.child,n,a,r,u,c))return!0;t=t.sibling}return!1}function x(t){for(t=t.return;t!==null;){if(t.tag===3||t.tag===5||t.tag===27)return t;t=t.return}return null}function M(t){var n=!1;for(t=t.return;t!==null&&(t.tag===4&&(n=!0),!(t.tag===3||t.tag===5||t.tag===27));)t=t.return;return n}function T(t){var n=[null,null],a=x(t);return a===null||C(n,t,a.child,{foundSelf:!1}),n}function C(t,n,a,r){for(;a!==null;){if(a===n)r.foundSelf=!0;else if(a.tag===5||a.tag===27||a.tag===6){if(r.foundSelf)return t[1]=a,!0;t[0]=a}else if((a.tag!==22||a.memoizedState===null)&&C(t,n,a.child,r))return!0;a=a.sibling}return!1}function y(t){switch(t.tag){case 5:case 27:case 6:return t.stateNode;case 3:return t.stateNode.containerInfo;default:throw Error(s(559))}}var S=null,P=null;function O(t,n,a){return t===a?!0:t===n?(S=t,!0):!1}function U(t,n,a){return t===a?(P=t,!1):t===n?(P!==null&&(S=t),!0):!1}function X(t){if(t===null)return null;do t=t===null?null:t.return;while(t&&t.tag!==5&&t.tag!==27&&t.tag!==3);return t||null}function I(t,n,a){for(var r=0,u=t;u;u=a(u))r++;u=0;for(var c=n;c;c=a(c))u++;for(;0<r-u;)t=a(t),r--;for(;0<u-r;)n=a(n),u--;for(;r--;){if(t===n||n!==null&&t===n.alternate)return t;t=a(t),n=a(n)}return null}var z=Object.assign,G=Symbol.for("react.element"),D=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),H=Symbol.for("react.fragment"),ot=Symbol.for("react.strict_mode"),it=Symbol.for("react.profiler"),dt=Symbol.for("react.consumer"),ct=Symbol.for("react.context"),q=Symbol.for("react.forward_ref"),rt=Symbol.for("react.suspense"),Q=Symbol.for("react.suspense_list"),xt=Symbol.for("react.memo"),St=Symbol.for("react.lazy"),Ht=Symbol.for("react.activity"),ne=Symbol.for("react.legacy_hidden"),Te=Symbol.for("react.memo_cache_sentinel"),w=Symbol.for("react.view_transition"),j=Symbol.for("react.recoverable"),mt=Symbol.iterator;function ut(t){return t===null||typeof t!="object"?null:(t=mt&&t[mt]||t["@@iterator"],typeof t=="function"?t:null)}var Tt=Symbol.for("react.client.reference");function Vt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===Tt?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case H:return"Fragment";case it:return"Profiler";case ot:return"StrictMode";case rt:return"Suspense";case Q:return"SuspenseList";case Ht:return"Activity";case w:return"ViewTransition"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case ct:return t.displayName||"Context";case dt:return(t._context.displayName||"Context")+".Consumer";case q:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case xt:return n=t.displayName||null,n!==null?n:Vt(t.type)||"Memo";case St:n=t._payload,t=t._init;try{return Vt(t(n))}catch{}}return null}var wt=Array.isArray,bt=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,It=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,re={pending:!1,data:null,method:null,action:null},F=[],pn=-1;function se(t){return{current:t}}function Kt(t){0>pn||(t.current=F[pn],F[pn]=null,pn--)}function Rt(t,n){pn++,F[pn]=t.current,t.current=n}var Se=se(null),kt=se(null),N=se(null),A=se(null);function tt(t,n){switch(Rt(N,n),Rt(kt,t),Rt(Se,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?h_(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=h_(n),t=d_(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Kt(Se),Rt(Se,t)}function gt(){Kt(Se),Kt(kt),Kt(N)}function vt(t){var n=t.memoizedState;n!==null&&(Bs._currentValue=n.memoizedState,Rt(A,t)),n=Se.current;var a=d_(n,t.type);n!==a&&(Rt(kt,t),Rt(Se,a))}function pt(t){kt.current===t&&(Kt(Se),Kt(kt)),A.current===t&&(Kt(A),Bs._currentValue=re)}var qt,Nt;function Ot(t){if(qt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);qt=n&&n[1]||"",Nt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+qt+t+Nt}var me=!1;function Mt(t,n){if(!t||me)return"";me=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(n){var ht=function(){throw Error()};if(Object.defineProperty(ht.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ht,[])}catch(Ct){var k=Ct}Reflect.construct(t,[],ht)}else{try{ht.call()}catch(Ct){k=Ct}ht=!1;try{var $=Object.getOwnPropertyDescriptor(t.prototype,"props");Object.defineProperty(t.prototype,"props",{configurable:!0,set:function(){throw Error()}}),ht=!0,new t}finally{ht&&($!==void 0?Object.defineProperty(t.prototype,"props",$):delete t.prototype.props)}}}else{try{throw Error()}catch(Ct){k=Ct}(ht=t())&&typeof ht.catch=="function"&&ht.catch(function(){})}}catch(Ct){if(Ct&&k&&typeof Ct.stack=="string")return[Ct.stack,k.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var c=r.DetermineComponentFrameRoot(),g=c[0],E=c[1];if(g&&E){var L=g.split(`
`),W=E.split(`
`);for(u=r=0;r<L.length&&!L[r].includes("DetermineComponentFrameRoot");)r++;for(;u<W.length&&!W[u].includes("DetermineComponentFrameRoot");)u++;if(r===L.length||u===W.length)for(r=L.length-1,u=W.length-1;1<=r&&0<=u&&L[r]!==W[u];)u--;for(;1<=r&&0<=u;r--,u--)if(L[r]!==W[u]){if(r!==1||u!==1)do if(r--,u--,0>u||L[r]!==W[u]){var et=`
`+L[r].replace(" at new "," at ");return t.displayName&&et.includes("<anonymous>")&&(et=et.replace("<anonymous>",t.displayName)),et}while(1<=r&&0<=u);break}}}finally{me=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ot(a):""}function Gt(t,n){switch(t.tag){case 26:case 27:case 5:return Ot(t.type);case 16:return Ot("Lazy");case 13:return t.child!==n&&n!==null?Ot("Suspense Fallback"):Ot("Suspense");case 19:return Ot("SuspenseList");case 0:case 15:return Mt(t.type,!1);case 11:return Mt(t.type.render,!1);case 1:return Mt(t.type,!0);case 31:return Ot("Activity");case 30:return Ot("ViewTransition");default:return""}}function Jt(t){try{var n="",a=null;do n+=Gt(t,a),a=t,t=t.return;while(t);return n}catch(r){return`
Error generating stack: `+r.message+`
`+r.stack}}var te=Object.prototype.hasOwnProperty,Ft=o.unstable_scheduleCallback,pe=o.unstable_cancelCallback,le=o.unstable_shouldYield,Fe=o.unstable_requestPaint,V=o.unstable_now,zt=o.unstable_getCurrentPriorityLevel,lt=o.unstable_ImmediatePriority,_t=o.unstable_UserBlockingPriority,Lt=o.unstable_NormalPriority,Pt=o.unstable_LowPriority,oe=o.unstable_IdlePriority,Qe=o.log,xn=o.unstable_setDisableYieldValue,Ae=null,Ze=null;function Sn(t){if(typeof Qe=="function"&&xn(t),Ze&&typeof Ze.setStrictMode=="function")try{Ze.setStrictMode(Ae,t)}catch{}}var zn=Math.clz32?Math.clz32:mo,Cl=Math.log,ta=Math.LN2;function mo(t){return t>>>=0,t===0?32:31-(Cl(t)/ta|0)|0}var _r=256,vr=262144,ea=4194304;function Ii(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&-t;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function na(t,n,a){var r=t.pendingLanes;if(r===0)return 0;var u=0,c=t.suspendedLanes,g=t.pingedLanes;t=t.warmLanes;var E=r&134217727;return E!==0?(r=E&~c,r!==0?u=Ii(r):(g&=E,g!==0?u=Ii(g):a||(a=E&~t,a!==0&&(u=Ii(a))))):(E=r&~c,E!==0?u=Ii(E):g!==0?u=Ii(g):a||(a=r&~t,a!==0&&(u=Ii(a)))),u===0?0:n!==0&&n!==u&&(n&c)===0&&(c=u&-u,a=n&-n,c>=a||c===32&&(a&4194048)!==0)?n:u}function wa(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function go(t,n){(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var r=31-zn(a),u=1<<r;n|=t[r],a&=~u}return n}function Bc(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function wl(){var t=ea;return ea<<=1,(ea&62914560)===0&&(ea=4194304),t}function _o(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function xr(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Fc(t,n,a,r,u,c){var g=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var E=t.entanglements,L=t.expirationTimes,W=t.hiddenUpdates;for(a=g&~a;0<a;){var et=31-zn(a),ht=1<<et;E[et]=0,L[et]=-1;var k=W[et];if(k!==null)for(W[et]=null,et=0;et<k.length;et++){var $=k[et];$!==null&&($.lane&=-536870913)}a&=~ht}r!==0&&Dl(t,r,0),c!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=c&~(g&~n))}function Dl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var r=31-zn(n);t.entangledLanes|=n,t.entanglements[r]=t.entanglements[r]|1073741824|a&261930}function b(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var r=31-zn(a),u=1<<r;u&n|t[r]&n&&(t[r]|=n),a&=~u}}function Z(t,n){var a=n&-n;return a=(a&42)!==0?1:at(a),(a&(t.suspendedLanes|n))!==0?0:a}function at(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function st(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function K(){var t=It.p;return t!==0?t:(t=window.event,t===void 0?32:K_(t.type))}function yt(t,n){var a=It.p;try{return It.p=t,n()}finally{It.p=a}}var At=Math.random().toString(36).slice(2),Et="__reactFiber$"+At,Dt="__reactProps$"+At,Qt="__reactContainer$"+At,ee="__reactEvents$"+At,Zt="__reactListeners$"+At,be="__reactHandles$"+At,De="__reactResources$"+At,Ye="__reactMarker$"+At,Ve="__reactLoad$"+At;function ge(t){delete t[Et],delete t[Dt],delete t[Zt],delete t[be]}function Yt(t){var n;if(n=t[Et])return n;for(var a=t.parentNode;a;){if(n=a[Qt]||a[Et]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=D_(t);t!==null;){if(a=t[Et])return a;t=D_(t)}return n}t=a,a=t.parentNode}return null}function Je(t){if(t=t[Et]||t[Qt]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function ye(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function yn(t){var n=t[De];return n||(n=t[De]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Ke(t){t[Ye]=!0}function Pn(t){t[Ve]=void 0}var Da=new Set,Xe={};function ln(t,n){mn(t,n),mn(t+"Capture",n)}function mn(t,n){for(Xe[t]=n,t=0;t<n.length;t++)Da.add(n[t])}var bn=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Rn={},es={};function ia(t){return te.call(es,t)?!0:te.call(Rn,t)?!1:bn.test(t)?es[t]=!0:(Rn[t]=!0,!1)}var Ue=!1;function Jp(){var t=Ue;return Ue=!1,t}function Ul(t,n,a){if(ia(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var r=n.toLowerCase().slice(0,5);if(r!=="data-"&&r!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,a)}}function Nl(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,a)}}function aa(t,n,a,r){if(r===null)t.removeAttribute(a);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,r)}}function ii(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function $p(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function tS(t,n,a){var r=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var u=r.get,c=r.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(g){a=""+g,c.call(this,g)}}),Object.defineProperty(t,n,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(g){a=""+g},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Hc(t){if(!t._valueTracker){var n=$p(t)?"checked":"value";t._valueTracker=tS(t,n,""+t[n])}}function tm(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),r="";return t&&(r=$p(t)?t.checked?"true":"false":t.value),t=r,t!==a?(n.setValue(t),!0):!1}var eS=/[\n"\\]/g;function di(t){return t.replace(eS,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Gc(t,n,a,r,u,c,g,E){t.name="",g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"?t.type=g:t.removeAttribute("type"),n!=null?g==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+ii(n)):t.value!==""+ii(n)&&(t.value=""+ii(n)):g!=="submit"&&g!=="reset"||t.removeAttribute("value"),n!=null?g==="number"&&t.value==n?Vc(t,ii(t.value)):Vc(t,ii(n)):a!=null?Vc(t,ii(a)):r!=null&&t.removeAttribute("value"),u==null&&c!=null&&(t.defaultChecked=!!c),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?t.name=""+ii(E):t.removeAttribute("name")}function em(t,n,a,r,u,c,g,E){if(c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"&&(t.type=c),n!=null||a!=null){if(!(c!=="submit"&&c!=="reset"||n!=null)){Hc(t);return}a=a!=null?""+ii(a):"",n=n!=null?""+ii(n):a,E||n===t.value||(t.value=n),t.defaultValue=n}r=r??u,r=typeof r!="function"&&typeof r!="symbol"&&!!r,t.checked=E?t.checked:!!r,t.defaultChecked=!!r,g!=null&&typeof g!="function"&&typeof g!="symbol"&&typeof g!="boolean"&&(t.name=g),Hc(t)}function Vc(t,n){t.defaultValue!==""+n&&(t.defaultValue=""+n)}function ns(t,n,a,r){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&r&&(t[a].defaultSelected=!0)}else{for(a=""+ii(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,r&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function nm(t,n,a){if(n!=null&&(n=""+ii(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+ii(a):""}function im(t,n,a,r){if(n==null){if(r!=null){if(a!=null)throw Error(s(92));if(wt(r)){if(1<r.length)throw Error(s(93));r=r[0]}a=r}a==null&&(a=""),n=a}a=ii(n),t.defaultValue=a,r=t.textContent,r===a&&r!==""&&r!==null&&(t.value=r),Hc(t)}function is(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var nS=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function am(t,n,a){var r=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?r?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":r?t.setProperty(n,a):typeof a!="number"||a===0||nS.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function rm(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var r in a)!a.hasOwnProperty(r)||n!=null&&n.hasOwnProperty(r)||(r.indexOf("--")===0?t.setProperty(r,""):r==="float"?t.cssFloat="":t[r]="",Ue=!0);for(var u in n)r=n[u],n.hasOwnProperty(u)&&a[u]!==r&&(am(t,u,r),Ue=!0)}else for(var c in n)n.hasOwnProperty(c)&&am(t,c,n[c])}function Xc(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var iS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["maskType","mask-type"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),aS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ll(t){return aS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Bi(){}var kc=null;function qc(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var as=null,rs=null;function sm(t){var n=Je(t);if(n&&(t=n.stateNode)){var a=t[Dt]||null;t:switch(t=n.stateNode,n.type){case"input":if(Gc(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+di(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var r=a[n];if(r!==t&&r.form===t.form){var u=r[Dt]||null;if(!u)throw Error(s(90));Gc(r,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)r=a[n],r.form===t.form&&tm(r)}break t;case"textarea":nm(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ns(t,!!a.multiple,n,!1)}}}var Yc=!1;function om(t,n,a){if(Yc)return t(n,a);Yc=!0;try{var r=t(n);return r}finally{if(Yc=!1,(as!==null||rs!==null)&&(Lu(),as&&(n=as,t=rs,rs=as=null,sm(n),t)))for(n=0;n<t.length;n++)sm(t[n])}}function vo(t,n){var a=t.stateNode;if(a===null)return null;var r=a[Dt]||null;if(r===null)return null;a=r[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var ra=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Wc=!1;if(ra)try{var xo={};Object.defineProperty(xo,"passive",{get:function(){Wc=!0}}),window.addEventListener("test",xo,xo),window.removeEventListener("test",xo,xo)}catch{Wc=!1}var Ua=null,jc=null,Ol=null;function lm(){if(Ol)return Ol;var t,n=jc,a=n.length,r,u="value"in Ua?Ua.value:Ua.textContent,c=u.length;for(t=0;t<a&&n[t]===u[t];t++);var g=a-t;for(r=1;r<=g&&n[a-r]===u[c-r];r++);return Ol=u.slice(t,1<r?1-r:void 0)}function zl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Pl(){return!0}function um(){return!1}function Vn(t){function n(a,r,u,c,g){this._reactName=a,this._targetInst=u,this.type=r,this.nativeEvent=c,this.target=g,this.currentTarget=null;for(var E in t)t.hasOwnProperty(E)&&(a=t[E],this[E]=a?a(c):c[E]);return this.isDefaultPrevented=(c.defaultPrevented!=null?c.defaultPrevented:c.returnValue===!1)?Pl:um,this.isPropagationStopped=um,this}return z(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Pl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Pl)},persist:function(){},isPersistent:Pl}),n}var Na={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Il=Vn(Na),So=z({},Na,{view:0,detail:0}),rS=Vn(So),Zc,Kc,yo,Bl=z({},So,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Jc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==yo&&(yo&&t.type==="mousemove"?(Zc=t.screenX-yo.screenX,Kc=t.screenY-yo.screenY):Kc=Zc=0,yo=t),Zc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),cm=Vn(Bl),sS=z({},Bl,{dataTransfer:0}),oS=Vn(sS),lS=z({},So,{relatedTarget:0}),Qc=Vn(lS),uS=z({},Na,{animationName:0,elapsedTime:0,pseudoElement:0}),cS=Vn(uS),fS=z({},Na,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),hS=Vn(fS),dS=z({},Na,{data:0}),fm=Vn(dS),pS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},mS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _S(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=gS[t])?!!n[t]:!1}function Jc(){return _S}var vS=z({},So,{key:function(t){if(t.key){var n=pS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=zl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?mS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Jc,charCode:function(t){return t.type==="keypress"?zl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?zl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xS=Vn(vS),SS=z({},Bl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),hm=Vn(SS),yS=z({},Na,{submitter:0}),MS=Vn(yS),ES=z({},So,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Jc}),TS=Vn(ES),AS=z({},Na,{propertyName:0,elapsedTime:0,pseudoElement:0}),bS=Vn(AS),RS=z({},Bl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),CS=Vn(RS),wS=z({},Na,{newState:0,oldState:0,source:0}),DS=Vn(wS),US=[9,13,27,32],$c=ra&&"CompositionEvent"in window,Mo=null;ra&&"documentMode"in document&&(Mo=document.documentMode);var NS=ra&&"TextEvent"in window&&!Mo,dm=ra&&(!$c||Mo&&8<Mo&&11>=Mo),pm=" ",mm=!1;function gm(t,n){switch(t){case"keyup":return US.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _m(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function LS(t,n){switch(t){case"compositionend":return _m(n);case"keypress":return n.which!==32?null:(mm=!0,pm);case"textInput":return t=n.data,t===pm&&mm?null:t;default:return null}}function OS(t,n){if(ss)return t==="compositionend"||!$c&&gm(t,n)?(t=lm(),Ol=jc=Ua=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return dm&&n.locale!=="ko"?null:n.data;default:return null}}var zS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function vm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!zS[t.type]:n==="textarea"}function xm(t,n,a,r){as?rs?rs.push(r):rs=[r]:as=r,n=Fu(n,"onChange"),0<n.length&&(a=new Il("onChange","change",null,a,r),t.push({event:a,listeners:n}))}var Eo=null,To=null;function PS(t){s_(t,0)}function Fl(t){var n=ye(t);if(tm(n))return t}function Sm(t,n){if(t==="change")return n}var ym=!1;if(ra){var tf;if(ra){var ef="oninput"in document;if(!ef){var Mm=document.createElement("div");Mm.setAttribute("oninput","return;"),ef=typeof Mm.oninput=="function"}tf=ef}else tf=!1;ym=tf&&(!document.documentMode||9<document.documentMode)}function Em(){Eo&&(Eo.detachEvent("onpropertychange",Tm),To=Eo=null)}function Tm(t){if(t.propertyName==="value"&&Fl(To)){var n=[];xm(n,To,t,qc(t)),om(PS,n)}}function IS(t,n,a){t==="focusin"?(Em(),Eo=n,To=a,Eo.attachEvent("onpropertychange",Tm)):t==="focusout"&&Em()}function BS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Fl(To)}function FS(t,n){if(t==="click")return Fl(n)}function HS(t,n){if(t==="input"||t==="change")return Fl(n)}function GS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var ai=typeof Object.is=="function"?Object.is:GS;function Ao(t,n){if(ai(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),r=Object.keys(n);if(a.length!==r.length)return!1;for(r=0;r<a.length;r++){var u=a[r];if(!te.call(n,u)||!ai(t[u],n[u]))return!1}return!0}function nf(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Am(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function bm(t,n){var a=Am(t);t=0;for(var r;a;){if(a.nodeType===3){if(r=t+a.textContent.length,t<=n&&r>=n)return{node:a,offset:n-t};t=r}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Am(a)}}function Rm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Rm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Cm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=nf(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=nf(t.document)}return n}function af(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var VS=ra&&"documentMode"in document&&11>=document.documentMode,os=null,rf=null,bo=null,sf=!1;function wm(t,n,a){var r=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;sf||os==null||os!==nf(r)||(r=os,"selectionStart"in r&&af(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),bo&&Ao(bo,r)||(bo=r,r=Fu(rf,"onSelect"),0<r.length&&(n=new Il("onSelect","select",null,n,a),t.push({event:n,listeners:r}),n.target=os)))}function Sr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var ls={animationend:Sr("Animation","AnimationEnd"),animationiteration:Sr("Animation","AnimationIteration"),animationstart:Sr("Animation","AnimationStart"),transitionrun:Sr("Transition","TransitionRun"),transitionstart:Sr("Transition","TransitionStart"),transitioncancel:Sr("Transition","TransitionCancel"),transitionend:Sr("Transition","TransitionEnd")},of={},Dm={};ra&&(Dm=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function yr(t){if(of[t])return of[t];if(!ls[t])return t;var n=ls[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Dm)return of[t]=n[a];return t}var Um=yr("animationend"),Nm=yr("animationiteration"),Lm=yr("animationstart"),XS=yr("transitionrun"),kS=yr("transitionstart"),qS=yr("transitioncancel"),Om=yr("transitionend"),zm=new Map,lf="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");lf.push("scrollEnd");function Ti(t,n){zm.set(t,n),ln(n,[t])}var YS=0;function sa(t,n){if(t.name!=null&&t.name!=="auto")return t.name;if(n.autoName!==null)return n.autoName;t=Ci.identifierPrefix;var a=YS++;return t="_"+t+"t_"+a.toString(32)+"_",n.autoName=t}function Pm(t){if(t==null||typeof t=="string")return t;var n=null,a=Cs;if(a!==null)for(var r=0;r<a.length;r++){var u=t[a[r]];if(u!=null){if(u==="none")return"none";n=n==null?u:n+(" "+u)}}return n??t.default}function oa(t,n){return t=Pm(t),n=Pm(n),n==null?t==="auto"?null:t:n==="auto"?null:n}var Hl=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},pi=[],us=0,uf=0;function Gl(){for(var t=us,n=uf=us=0;n<t;){var a=pi[n];pi[n++]=null;var r=pi[n];pi[n++]=null;var u=pi[n];pi[n++]=null;var c=pi[n];if(pi[n++]=null,r!==null&&u!==null){var g=r.pending;g===null?u.next=u:(u.next=g.next,g.next=u),r.pending=u}c!==0&&Im(a,u,c)}}function Vl(t,n,a,r){pi[us++]=t,pi[us++]=n,pi[us++]=a,pi[us++]=r,uf|=r,t.lanes|=r,t=t.alternate,t!==null&&(t.lanes|=r)}function cf(t,n,a,r){return Vl(t,n,a,r),Xl(t)}function Mr(t,n){return Vl(t,null,null,n),Xl(t)}function Im(t,n,a){t.lanes|=a;var r=t.alternate;r!==null&&(r.lanes|=a);for(var u=!1,c=t.return;c!==null;)c.childLanes|=a,r=c.alternate,r!==null&&(r.childLanes|=a),c.tag===22&&(t=c.stateNode,t===null||t._visibility&1||(u=!0)),t=c,c=c.return;return t.tag===3?(c=t.stateNode,u&&n!==null&&(u=31-zn(a),t=c.hiddenUpdates,r=t[u],r===null?t[u]=[n]:r.push(n),n.lane=a|536870912),c):null}function Xl(t){if(50<jo)throw jo=0,Nu=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var cs={};function WS(t,n,a,r){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zn(t,n,a,r){return new WS(t,n,a,r)}function ff(t){return t=t.prototype,!(!t||!t.isReactComponent)}function la(t,n){var a=t.alternate;return a===null?(a=Zn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&1206910976,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Bm(t,n){t.flags&=1206910978;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function kl(t,n,a,r,u,c){var g=0;if(r=t,typeof r=="function")ff(r)&&(g=1);else if(typeof r=="string")g=yM(t,a,Se.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(r){case Ht:return t=Zn(31,a,n,u),t.elementType=Ht,t.lanes=c,t;case H:return Er(a.children,u,c,n);case ot:g=8,u|=24;break;case it:return t=Zn(12,a,n,u|2),t.elementType=it,t.lanes=c,t;case rt:return t=Zn(13,a,n,u),t.elementType=rt,t.lanes=c,t;case Q:return t=Zn(19,a,n,u),t.elementType=Q,t.lanes=c,t;case ne:case w:return t=u|32,t=Zn(30,a,n,t),t.elementType=w,t.lanes=c,t.stateNode={autoName:null,paired:null,clones:null,ref:null},t;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case ct:g=10;break t;case dt:g=9;break t;case q:g=11;break t;case xt:g=14;break t;case St:g=16,r=null;break t}g=29,a=Error(s(130,t===null?"null":typeof t,"")),r=null}return n=Zn(g,a,n,u),n.elementType=t,n.type=r,n.lanes=c,n}function Er(t,n,a,r){return t=Zn(7,t,r,n),t.lanes=a,t}function hf(t,n,a){return t=Zn(6,t,null,n),t.lanes=a,t}function Fm(t){var n=Zn(18,null,null,0);return n.stateNode=t,n}function df(t,n,a){return n=Zn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Hm=new WeakMap;function mi(t,n){if(typeof t=="object"&&t!==null){var a=Hm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Jt(n)},Hm.set(t,n),n)}return{value:t,source:n,stack:Jt(n)}}var fs=[],hs=0,ql=null,Ro=0,gi=[],_i=0,La=null,Fi=1,Hi="";function ua(t,n){fs[hs++]=Ro,fs[hs++]=ql,ql=t,Ro=n}function Gm(t,n,a){gi[_i++]=Fi,gi[_i++]=Hi,gi[_i++]=La,La=t;var r=Fi;t=Hi;var u=32-zn(r)-1;r&=~(1<<u),a+=1;var c=32-zn(n)+u;if(30<c){var g=u-u%5;c=(r&(1<<g)-1).toString(32),r>>=g,u-=g,Fi=1<<32-zn(n)+u|a<<u|r,Hi=c+t}else Fi=1<<c|a<<u|r,Hi=t}function Yl(t){t.return!==null&&(ua(t,1),Gm(t,1,0))}function pf(t){for(;t===ql;)ql=fs[--hs],fs[hs]=null,Ro=fs[--hs],fs[hs]=null;for(;t===La;)La=gi[--_i],gi[_i]=null,Hi=gi[--_i],gi[_i]=null,Fi=gi[--_i],gi[_i]=null}function Vm(t,n){gi[_i++]=Fi,gi[_i++]=Hi,gi[_i++]=La,Fi=n.id,Hi=n.overflow,La=t}var Mn=null,We=null,de=!1,Oa=null,vi=!1,mf=Error(s(519));function za(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Co(mi(n,t)),mf}function Xm(t){var n=t.stateNode,a=t.type,r=t.memoizedProps;switch(n[Et]=t,n[Dt]=r,a){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(a=0;a<Ko.length;a++)ve(Ko[a],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":ve("invalid",n),em(n,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case"select":ve("invalid",n);break;case"textarea":ve("invalid",n),im(n,r.value,r.defaultValue,r.children)}a=r.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||r.suppressHydrationWarning===!0||c_(n.textContent,a)?(r.popover!=null&&(ve("beforetoggle",n),ve("toggle",n)),r.onScroll!=null&&ve("scroll",n),r.onScrollEnd!=null&&ve("scrollend",n),r.onClick!=null&&(n.onclick=Bi),n=!0):n=!1,n||za(t,!0)}function Wl(t){for(Mn=t.return;Mn;)switch(Mn.tag){case 5:case 31:case 13:vi=!1;return;case 27:case 3:vi=!0;return;default:Mn=Mn.return}}function ds(t){if(t!==Mn)return!1;if(!de)return Wl(t),de=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||qh(t.type,t.memoizedProps)),a=!a),a&&We&&za(t),Wl(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=w_(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));We=w_(t)}else n===27?(n=We,Qa(t.type)?(t=td,td=null,We=t):We=n):We=Mn?Si(t.stateNode.nextSibling):null;return!0}function Tr(){We=Mn=null,de=!1}function gf(){var t=Oa;return t!==null&&(Jn===null?Jn=t:Jn.push.apply(Jn,t),Oa=null),t}function Co(t){Oa===null?Oa=[t]:Oa.push(t)}var _f=se(null),Ar=null,ca=null;function Pa(t,n,a){Rt(_f,n._currentValue),n._currentValue=a}function fa(t){t._currentValue=_f.current,Kt(_f)}function jl(t,n,a){for(;t!==null;){var r=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,r!==null&&(r.childLanes|=n)):r!==null&&(r.childLanes&n)!==n&&(r.childLanes|=n),t===a)break;t=t.return}}function vf(t,n,a,r){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var c=u.dependencies;if(c!==null){var g=u.child;c=c.firstContext;t:for(;c!==null;){var E=c;c=u;for(var L=0;L<n.length;L++)if(E.context===n[L]){c.lanes|=a,E=c.alternate,E!==null&&(E.lanes|=a),jl(c.return,a,t),r||(g=null);break t}c=E.next}}else if(u.tag===18){if(g=u.return,g===null)throw Error(s(341));g.lanes|=a,c=g.alternate,c!==null&&(c.lanes|=a),jl(g,a,t),g=null}else u.tag===13&&u.memoizedState!==null&&u.memoizedState.dehydrated===null?(u.lanes|=a,g=u.alternate,g!==null&&(g.lanes|=a),jl(u.return,a,t),g=u.child,g=g!==null?g.sibling:null):g=u.child;if(g!==null)g.return=u;else for(g=u;g!==null;){if(g===t){g=null;break}if(u=g.sibling,u!==null){u.return=g.return,g=u;break}g=g.return}u=g}}function br(t,n,a,r){t=null;for(var u=n,c=!1;u!==null;){if(!c){if((u.flags&524288)!==0)c=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var g=u.alternate;if(g===null)throw Error(s(387));if(g=g.memoizedProps,g!==null){var E=u.type;ai(u.pendingProps.value,g.value)||(t!==null?t.push(E):t=[E])}}else if(u===A.current){if(g=u.alternate,g===null)throw Error(s(387));g.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Bs):t=[Bs])}u=u.return}return t!==null&&vf(n,t,a,r),n.flags|=262144,t!==null}function Zl(t){for(t=t.firstContext;t!==null;){if(!ai(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Rr(t){Ar=t,ca=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return km(Ar,t)}function Kl(t,n){return Ar===null&&Rr(t),km(t,n)}function km(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ca===null){if(t===null)throw Error(s(308));ca=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ca=ca.next=n;return a}var jS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,r){t.push(r)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},ZS=o.unstable_scheduleCallback,KS=o.unstable_NormalPriority,un={$$typeof:ct,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xf(){return{controller:new jS,data:new Map,refCount:0}}function wo(t){t.refCount--,t.refCount===0&&ZS(KS,function(){t.controller.abort()})}function qm(t,n){if((t.pendingLanes&4194048)!==0){var a=t.transitionTypes;for(a===null&&(a=t.transitionTypes=[]),t=0;t<n.length;t++){var r=n[t];a.indexOf(r)===-1&&a.push(r)}}}var Do=null;function QS(t){var n=t.transitionTypes;return t.transitionTypes=null,n}var Uo=null,Sf=0,Cr=0,ps=null;function JS(t,n){if(Uo===null){var a=Uo=[];Sf=0,Cr=Ph(),ps={status:"pending",value:void 0,then:function(r){a.push(r)}}}return Sf++,n.then(Ym,Ym),n}function Ym(){if(--Sf===0&&(Do=null,Uo!==null)){ps!==null&&(ps.status="fulfilled");var t=Uo;Uo=null,Cr=0,ps=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function $S(t,n){var a=[],r={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){r.status="fulfilled",r.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(r.status="rejected",r.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),r}var Wm=bt.S;bt.S=function(t,n){if(Fg=V(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&JS(t,n),Do!==null)for(var a=Ns;a!==null;)qm(a,Do),a=a.next;if(a=t.types,a!==null){for(var r=Ns;r!==null;)qm(r,a),r=r.next;if(Cr!==0){r=Do,r===null&&(r=Do=[]);for(var u=0;u<a.length;u++){var c=a[u];r.indexOf(c)===-1&&r.push(c)}}}Wm!==null&&Wm(t,n)};var wr=se(null);function yf(){var t=wr.current;return t!==null?t:ke.pooledCache}function Ql(t,n){n===null?Rt(wr,wr.current):Rt(wr,n.pool)}function jm(){var t=yf();return t===null?null:{parent:un._currentValue,pool:t}}var ms=Error(s(460)),Mf=Error(s(474)),Jl=Error(s(542)),$l={then:function(){}};function Zm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Km(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Bi,Bi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jm(t),t===void 0&&!("reason"in n)?Error(s(600)):t;default:if(typeof n.status=="string")n.then(Bi,Bi);else{if(t=ke,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(r){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=r}},function(r){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=r}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Jm(t),t}throw Ur=n,ms}}function Dr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Ur=a,ms):a}}var Ur=null;function Qm(){if(Ur===null)throw Error(s(459));var t=Ur;return Ur=null,t}function Jm(t){if(t===ms||t===Jl)throw Error(s(483))}var gs=null,No=0;function tu(t){var n=No;return No+=1,gs===null&&(gs=[]),Km(gs,t,n)}function Ia(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function eu(t,n){throw n.$$typeof===G?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function $m(t){function n(Y,B){if(t){var J=Y.deletions;J===null?(Y.deletions=[B],Y.flags|=16):J.push(B)}}function a(Y,B){if(!t)return null;for(;B!==null;)n(Y,B),B=B.sibling;return null}function r(Y){for(var B=new Map;Y!==null;)Y.key===null?B.set(Y.index,Y):B.set(Y.key,Y),Y=Y.sibling;return B}function u(Y,B){return Y=la(Y,B),Y.index=0,Y.sibling=null,Y}function c(Y,B,J){return Y.index=J,t?(J=Y.alternate,J!==null?(J=J.index,J<B?(Y.flags|=2,B):J):(Y.flags|=134217730,B)):(Y.flags|=1048576,B)}function g(Y){return t&&Y.alternate===null&&(Y.flags|=134217730),Y}function E(Y,B,J,ft){return B===null||B.tag!==6?(B=hf(J,Y.mode,ft),B.return=Y,B):(B=u(B,J),B.return=Y,B)}function L(Y,B,J,ft){var Bt=J.type;return Bt===H?(Y=et(Y,B,J.props.children,ft,J.key),Ia(Y,J),Y):B!==null&&(B.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===St&&Dr(Bt)===B.type)?(B=u(B,J.props),Ia(B,J),B.return=Y,B):(B=kl(J.type,J.key,J.props,null,Y.mode,ft),Ia(B,J),B.return=Y,B)}function W(Y,B,J,ft){return B===null||B.tag!==4||B.stateNode.containerInfo!==J.containerInfo||B.stateNode.implementation!==J.implementation?(B=df(J,Y.mode,ft),B.return=Y,B):(B=u(B,J.children||[]),B.return=Y,B)}function et(Y,B,J,ft,Bt){return B===null||B.tag!==7?(B=Er(J,Y.mode,ft,Bt),B.return=Y,B):(B=u(B,J),B.return=Y,B)}function ht(Y,B,J){if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return B=hf(""+B,Y.mode,J),B.return=Y,B;if(typeof B=="object"&&B!==null){switch(B.$$typeof){case D:return J=kl(B.type,B.key,B.props,null,Y.mode,J),Ia(J,B),J.return=Y,J;case R:return B=df(B,Y.mode,J),B.return=Y,B;case St:return B=Dr(B),ht(Y,B,J)}if(wt(B)||ut(B))return B=Er(B,Y.mode,J,null),B.return=Y,B;if(typeof B.then=="function")return ht(Y,tu(B),J);if(B.$$typeof===ct)return ht(Y,Kl(Y,B),J);eu(Y,B)}return null}function k(Y,B,J,ft){var Bt=B!==null?B.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return Bt!==null?null:E(Y,B,""+J,ft);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case D:return J.key===Bt?L(Y,B,J,ft):null;case R:return J.key===Bt?W(Y,B,J,ft):null;case St:return J=Dr(J),k(Y,B,J,ft)}if(wt(J)||ut(J))return Bt!==null?null:et(Y,B,J,ft,null);if(typeof J.then=="function")return k(Y,B,tu(J),ft);if(J.$$typeof===ct)return k(Y,B,Kl(Y,J),ft);eu(Y,J)}return null}function $(Y,B,J,ft,Bt){if(typeof ft=="string"&&ft!==""||typeof ft=="number"||typeof ft=="bigint")return Y=Y.get(J)||null,E(B,Y,""+ft,Bt);if(typeof ft=="object"&&ft!==null){switch(ft.$$typeof){case D:return Y=Y.get(ft.key===null?J:ft.key)||null,L(B,Y,ft,Bt);case R:return Y=Y.get(ft.key===null?J:ft.key)||null,W(B,Y,ft,Bt);case St:return ft=Dr(ft),$(Y,B,J,ft,Bt)}if(wt(ft)||ut(ft))return Y=Y.get(J)||null,et(B,Y,ft,Bt,null);if(typeof ft.then=="function")return $(Y,B,J,tu(ft),Bt);if(ft.$$typeof===ct)return $(Y,B,J,Kl(B,ft),Bt);eu(B,ft)}return null}function Ct(Y,B,J,ft){for(var Bt=null,Ee=null,Wt=B,$t=B=0,hn=null;Wt!==null&&$t<J.length;$t++){Wt.index>$t?(hn=Wt,Wt=null):hn=Wt.sibling;var we=k(Y,Wt,J[$t],ft);if(we===null){Wt===null&&(Wt=hn);break}t&&Wt&&we.alternate===null&&n(Y,Wt),B=c(we,B,$t),Ee===null?Bt=we:Ee.sibling=we,Ee=we,Wt=hn}if($t===J.length)return a(Y,Wt),de&&ua(Y,$t),Bt;if(Wt===null){for(;$t<J.length;$t++)Wt=ht(Y,J[$t],ft),Wt!==null&&(B=c(Wt,B,$t),Ee===null?Bt=Wt:Ee.sibling=Wt,Ee=Wt);return de&&ua(Y,$t),Bt}for(Wt=r(Wt);$t<J.length;$t++)hn=$(Wt,Y,$t,J[$t],ft),hn!==null&&(t&&(we=hn.alternate,we!==null&&Wt.delete(we.key===null?$t:we.key)),B=c(hn,B,$t),Ee===null?Bt=hn:Ee.sibling=hn,Ee=hn);return t&&Wt.forEach(function(nr){return n(Y,nr)}),de&&ua(Y,$t),Bt}function Xt(Y,B,J,ft){if(J==null)throw Error(s(151));for(var Bt=null,Ee=null,Wt=B,$t=B=0,hn=null,we=J.next();Wt!==null&&!we.done;$t++,we=J.next()){Wt.index>$t?(hn=Wt,Wt=null):hn=Wt.sibling;var nr=k(Y,Wt,we.value,ft);if(nr===null){Wt===null&&(Wt=hn);break}t&&Wt&&nr.alternate===null&&n(Y,Wt),B=c(nr,B,$t),Ee===null?Bt=nr:Ee.sibling=nr,Ee=nr,Wt=hn}if(we.done)return a(Y,Wt),de&&ua(Y,$t),Bt;if(Wt===null){for(;!we.done;$t++,we=J.next())we=ht(Y,we.value,ft),we!==null&&(B=c(we,B,$t),Ee===null?Bt=we:Ee.sibling=we,Ee=we);return de&&ua(Y,$t),Bt}for(Wt=r(Wt);!we.done;$t++,we=J.next())we=$(Wt,Y,$t,we.value,ft),we!==null&&(t&&(hn=we.alternate,hn!==null&&Wt.delete(hn.key===null?$t:hn.key)),B=c(we,B,$t),Ee===null?Bt=we:Ee.sibling=we,Ee=we);return t&&Wt.forEach(function(LM){return n(Y,LM)}),de&&ua(Y,$t),Bt}function ce(Y,B,J,ft){if(typeof J=="object"&&J!==null&&J.type===H&&J.key===null&&J.props.ref===void 0&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case D:t:{for(var Bt=J.key;B!==null;){if(B.key===Bt){if(Bt=J.type,Bt===H){if(B.tag===7){a(Y,B.sibling),ft=u(B,J.props.children),Ia(ft,J),ft.return=Y,Y=ft;break t}}else if(B.elementType===Bt||typeof Bt=="object"&&Bt!==null&&Bt.$$typeof===St&&Dr(Bt)===B.type){a(Y,B.sibling),ft=u(B,J.props),Ia(ft,J),ft.return=Y,Y=ft;break t}a(Y,B);break}else n(Y,B);B=B.sibling}J.type===H?(ft=Er(J.props.children,Y.mode,ft,J.key),Ia(ft,J),ft.return=Y,Y=ft):(ft=kl(J.type,J.key,J.props,null,Y.mode,ft),Ia(ft,J),ft.return=Y,Y=ft)}return g(Y);case R:t:{for(Bt=J.key;B!==null;){if(B.key===Bt)if(B.tag===4&&B.stateNode.containerInfo===J.containerInfo&&B.stateNode.implementation===J.implementation){a(Y,B.sibling),ft=u(B,J.children||[]),ft.return=Y,Y=ft;break t}else{a(Y,B);break}else n(Y,B);B=B.sibling}ft=df(J,Y.mode,ft),ft.return=Y,Y=ft}return g(Y);case St:return J=Dr(J),ce(Y,B,J,ft)}if(wt(J))return Ct(Y,B,J,ft);if(ut(J)){if(Bt=ut(J),typeof Bt!="function")throw Error(s(150));return J=Bt.call(J),Xt(Y,B,J,ft)}if(typeof J.then=="function")return ce(Y,B,tu(J),ft);if(J.$$typeof===ct)return ce(Y,B,Kl(Y,J),ft);eu(Y,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,B!==null&&B.tag===6?(a(Y,B.sibling),ft=u(B,J),ft.return=Y,Y=ft):(a(Y,B),ft=hf(J,Y.mode,ft),ft.return=Y,Y=ft),g(Y)):a(Y,B)}return function(Y,B,J,ft){try{No=0;var Bt=ce(Y,B,J,ft);return gs=null,Bt}catch(Wt){if(Wt===ms||Wt===Jl)throw Wt;var Ee=Zn(29,Wt,null,Y.mode);return Ee.lanes=ft,Ee.return=Y,Ee}finally{}}}var Nr=$m(!0),t0=$m(!1),Ba=!1;function Ef(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Tf(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Fa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ha(t,n,a){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(Le&2)!==0){var u=r.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),r.pending=n,n=Xl(t),Im(t,null,a),n}return Vl(t,r,n,a),Xl(t)}function Lo(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,b(t,a)}}function Af(t,n){var a=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,a===r)){var u=null,c=null;if(a=a.firstBaseUpdate,a!==null){do{var g={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};c===null?u=c=g:c=c.next=g,a=a.next}while(a!==null);c===null?u=c=n:c=c.next=n}else u=c=n;a={baseState:r.baseState,firstBaseUpdate:u,lastBaseUpdate:c,shared:r.shared,callbacks:r.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var bf=!1;function Oo(){if(bf){var t=ps;if(t!==null)throw t}}function zo(t,n,a,r){bf=!1;var u=t.updateQueue;Ba=!1;var c=u.firstBaseUpdate,g=u.lastBaseUpdate,E=u.shared.pending;if(E!==null){u.shared.pending=null;var L=E,W=L.next;L.next=null,g===null?c=W:g.next=W,g=L;var et=t.alternate;et!==null&&(et=et.updateQueue,E=et.lastBaseUpdate,E!==g&&(E===null?et.firstBaseUpdate=W:E.next=W,et.lastBaseUpdate=L))}if(c!==null){var ht=u.baseState;g=0,et=W=L=null,E=c;do{var k=E.lane&-536870913,$=k!==E.lane;if($?(Me&k)===k:(r&k)===k){k!==0&&k===Cr&&(bf=!0),et!==null&&(et=et.next={lane:0,tag:E.tag,payload:E.payload,callback:null,next:null});t:{var Ct=t,Xt=E;k=n;var ce=a;switch(Xt.tag){case 1:if(Ct=Xt.payload,typeof Ct=="function"){ht=Ct.call(ce,ht,k);break t}ht=Ct;break t;case 3:Ct.flags=Ct.flags&-65537|128;case 0:if(Ct=Xt.payload,k=typeof Ct=="function"?Ct.call(ce,ht,k):Ct,k==null)break t;ht=z({},ht,k);break t;case 2:Ba=!0}}k=E.callback,k!==null&&(t.flags|=64,$&&(t.flags|=8192),$=u.callbacks,$===null?u.callbacks=[k]:$.push(k))}else $={lane:k,tag:E.tag,payload:E.payload,callback:E.callback,next:null},et===null?(W=et=$,L=ht):et=et.next=$,g|=k;if(E=E.next,E===null){if(E=u.shared.pending,E===null)break;$=E,E=$.next,$.next=null,u.lastBaseUpdate=$,u.shared.pending=null}}while(!0);et===null&&(L=ht),u.baseState=L,u.firstBaseUpdate=W,u.lastBaseUpdate=et,c===null&&(u.shared.lanes=0),Wa|=g,t.lanes=g,t.memoizedState=ht}}function e0(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function n0(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)e0(a[t],n)}var Ga=se(null),nu=se(0);function i0(t,n){t=ga,Rt(nu,t),Rt(Ga,n),ga=t|n.baseLanes}function Rf(){Rt(nu,ga),Rt(Ga,Ga.current)}function Cf(){ga=nu.current,Kt(Ga),Kt(nu)}var wn=se(null),In=null;function Va(t){var n=t.alternate;Rt(Dn,Dn.current&1),Rt(wn,t),In===null&&(n===null||Ga.current!==null||n.memoizedState!==null)&&(In=t)}function wf(t){Rt(Dn,Dn.current),Rt(wn,t),In===null&&(In=t)}function a0(t){t.tag===22?(Rt(Dn,Dn.current),Rt(wn,t),In===null&&(In=t)):Xa()}function Xa(){Rt(Dn,Dn.current),Rt(wn,wn.current)}function ri(t){Kt(wn),In===t&&(In=null),Kt(Dn)}var Dn=se(0);function Po(t,n){Rt(wn,wn.current),Rt(Dn,n)}function Df(t){Kt(Dn),Kt(wn),In===t&&(In=null)}function iu(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Jh(a)||$h(a)))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!=="independent"){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ha=0,ue=null,He=null,cn=null,au=!1,_s=!1,Lr=!1,ru=0,Io=0,vs=null,ty=0;function nn(){throw Error(s(321))}function Uf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!ai(t[a],n[a]))return!1;return!0}function Nf(t,n,a,r,u,c){return ha=c,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,bt.H=t===null||t.memoizedState===null?G0:V0,Lr=!1,c=a(r,u),Lr=!1,_s&&(c=s0(n,a,r,u)),r0(t),c}function r0(t){bt.H=hu;var n=He!==null&&He.next!==null;if(ha=0,cn=He=ue=null,au=!1,Io=0,vs=null,n)throw Error(s(300));t===null||fn||(t=t.dependencies,t!==null&&Zl(t)&&(fn=!0))}function s0(t,n,a,r){ue=t;var u=0;do{if(_s&&(vs=null),Io=0,_s=!1,25<=u)throw Error(s(301));if(u+=1,cn=He=null,t.updateQueue!=null){var c=t.updateQueue;c.lastEffect=null,c.events=null,c.stores=null,c.memoCache!=null&&(c.memoCache.index=0)}bt.H=ly,c=n(a,r)}while(_s);return c}function ey(){var t=bt.H,n=t.useState()[0];return n=typeof n.then=="function"?Bo(n):n,t=t.useState()[0],(He!==null?He.memoizedState:null)!==t&&(ue.flags|=1024),n}function Lf(){var t=ru!==0;return ru=0,t}function Of(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function zf(t){if(au){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}au=!1}ha=0,cn=He=ue=null,_s=!1,Io=ru=0,vs=null}function Xn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?ue.memoizedState=cn=t:cn=cn.next=t,cn}function on(){if(He===null){var t=ue.alternate;t=t!==null?t.memoizedState:null}else t=He.next;var n=cn===null?ue.memoizedState:cn.next;if(n!==null)cn=n,He=t;else{if(t===null)throw ue.alternate===null?Error(s(467)):Error(s(310));He=t,t={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},cn===null?ue.memoizedState=cn=t:cn=cn.next=t}return cn}function su(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Bo(t){var n=Io;return Io+=1,vs===null&&(vs=[]),t=Km(vs,t,n),n=ue,(cn===null?n.memoizedState:cn.next)===null&&(n=n.alternate,bt.H=n===null||n.memoizedState===null?G0:V0),t}function ou(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Bo(t);if(t.$$typeof===j)return;if(t.$$typeof===ct)return Cn(t)}throw Error(s(438,String(t)))}function Pf(t){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var r=ue.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(n={data:r.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=su(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),r=0;r<t;r++)a[r]=Te;return n.index++,a}function da(t,n){return typeof n=="function"?n(t):n}function lu(t){var n=on();return If(n,He,t)}function If(t,n,a){var r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=a;var u=t.baseQueue,c=r.pending;if(c!==null){if(u!==null){var g=u.next;u.next=c.next,c.next=g}n.baseQueue=u=c,r.pending=null}if(c=t.baseState,u===null)t.memoizedState=c;else{n=u.next;var E=g=null,L=null,W=n,et=!1;do{var ht=W.lane&-536870913;if(ht!==W.lane?(Me&ht)===ht:(ha&ht)===ht){var k=W.revertLane;if(k===0)L!==null&&(L=L.next={lane:0,revertLane:0,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null}),ht===Cr&&(et=!0);else if((ha&k)===k){W=W.next,k===Cr&&(et=!0);continue}else ht={lane:0,revertLane:W.revertLane,gesture:null,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=ht,g=c):L=L.next=ht,ue.lanes|=k,Wa|=k;ht=W.action,Lr&&a(c,ht),c=W.hasEagerState?W.eagerState:a(c,ht)}else k={lane:ht,revertLane:W.revertLane,gesture:W.gesture,action:W.action,hasEagerState:W.hasEagerState,eagerState:W.eagerState,next:null},L===null?(E=L=k,g=c):L=L.next=k,ue.lanes|=ht,Wa|=ht;W=W.next}while(W!==null&&W!==n);if(L===null?g=c:L.next=E,!ai(c,t.memoizedState)&&(fn=!0,et&&(a=ps,a!==null)))throw a;t.memoizedState=c,t.baseState=g,t.baseQueue=L,r.lastRenderedState=c}return u===null&&(r.lanes=0),[t.memoizedState,r.dispatch]}function Bf(t){var n=on(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var r=a.dispatch,u=a.pending,c=n.memoizedState;if(u!==null){a.pending=null;var g=u=u.next;do c=t(c,g.action),g=g.next;while(g!==u);ai(c,n.memoizedState)||(fn=!0),n.memoizedState=c,n.baseQueue===null&&(n.baseState=c),a.lastRenderedState=c}return[c,r]}function o0(t,n,a){var r=ue,u=on(),c=de;if(c){if(a===void 0)throw Error(s(407));a=a()}else a=n();var g=!ai((He||u).memoizedState,a);if(g&&(u.memoizedState=a,fn=!0),u=u.queue,Gf(c0.bind(null,r,u,t),[t]),t=u.getSnapshot!==n||g||cn!==null&&(cn.memoizedState.tag&1)!==0,xs(t?9:8,{destroy:void 0},u0.bind(null,r,u,a,n),null),t){if(r.flags|=2048,ke===null)throw Error(s(349));c||(ha&127)!==0||l0(r,n,a)}return a}function l0(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=su(),ue.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function u0(t,n,a,r){n.value=a,n.getSnapshot=r,f0(n)&&h0(t)}function c0(t,n,a){return a(function(){f0(n)&&h0(t)})}function f0(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!ai(t,a)}catch{return!0}}function h0(t){var n=Mr(t,2);n!==null&&$n(n,t,2)}function Ff(t){var n=Xn();if(typeof t=="function"){var a=t;if(t=a(),Lr){Sn(!0);try{a()}finally{Sn(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:t},n}function d0(t,n,a,r){return t.baseState=a,If(t,He,typeof r=="function"?r:da)}function ny(t,n,a,r,u){if(fu(t))throw Error(s(485));if(t=n.action,t!==null){var c={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(g){c.listeners.push(g)}};bt.T!==null?a(!0):c.isTransition=!1,r(c),a=n.pending,a===null?(c.next=n.pending=c,p0(n,c)):(c.next=a.next,n.pending=a.next=c)}}function p0(t,n){var a=n.action,r=n.payload,u=t.state;if(n.isTransition){var c=bt.T,g={};g.types=c!==null?c.types:null,bt.T=g;try{var E=a(u,r),L=bt.S;L!==null&&L(g,E),m0(t,n,E)}catch(W){Hf(t,n,W)}finally{c!==null&&g.types!==null&&(c.types=g.types),bt.T=c}}else try{c=a(u,r),m0(t,n,c)}catch(W){Hf(t,n,W)}}function m0(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(r){g0(t,n,r)},function(r){return Hf(t,n,r)}):g0(t,n,a)}function g0(t,n,a){n.status="fulfilled",n.value=a,_0(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,p0(t,a)))}function Hf(t,n,a){var r=t.pending;if(t.pending=null,r!==null){r=r.next;do n.status="rejected",n.reason=a,_0(n),n=n.next;while(n!==r)}t.action=null}function _0(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function v0(t,n){return n}function x0(t,n){if(de){var a=ke.formState;if(a!==null){t:{var r=ue;if(de){if(We){e:{for(var u=We,c=vi;u.nodeType!==8;){if(!c){u=null;break e}if(u=Si(u.nextSibling),u===null){u=null;break e}}c=u.data,u=c==="F!"||c==="F"?u:null}if(u){We=Si(u.nextSibling),r=u.data==="F!";break t}}za(r)}r=!1}r&&(n=a[0])}}return a=Xn(),a.memoizedState=a.baseState=n,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:v0,lastRenderedState:n},a.queue=r,a=B0.bind(null,ue,r),r.dispatch=a,r=Ff(!1),c=Yf.bind(null,ue,!1,r.queue),r=Xn(),u={state:n,dispatch:null,action:t,pending:null},r.queue=u,a=ny.bind(null,ue,u,c,a),u.dispatch=a,r.memoizedState=t,[n,a,!1]}function S0(t){var n=on();return y0(n,He,t)}function y0(t,n,a){if(n=If(t,n,v0)[0],t=lu(da)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var r=Bo(n)}catch(g){throw g===ms?Jl:g}else r=n;n=on();var u=n.queue,c=u.dispatch;return a!==n.memoizedState&&(ue.flags|=2048,xs(9,{destroy:void 0},iy.bind(null,u,a),null)),[r,c,t]}function iy(t,n){t.action=n}function M0(t){var n=on(),a=He;if(a!==null)return y0(n,a,t);on(),n=n.memoizedState,a=on();var r=a.queue.dispatch;return a.memoizedState=t,[n,r,!1]}function xs(t,n,a,r){return t={tag:t,create:a,deps:r,inst:n,next:null},n=ue.updateQueue,n===null&&(n=su(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(r=a.next,a.next=t,t.next=r,n.lastEffect=t),t}function E0(){return on().memoizedState}function uu(t,n,a,r){var u=Xn();ue.flags|=t,u.memoizedState=xs(1|n,{destroy:void 0},a,r===void 0?null:r)}function cu(t,n,a,r){var u=on();r=r===void 0?null:r;var c=u.memoizedState.inst;He!==null&&r!==null&&Uf(r,He.memoizedState.deps)?u.memoizedState=xs(n,c,a,r):(ue.flags|=t,u.memoizedState=xs(1|n,c,a,r))}function T0(t,n){uu(8390656,8,t,n)}function Gf(t,n){cu(2048,8,t,n)}function ay(t){ue.flags|=4;var n=ue.updateQueue;if(n===null)n=su(),ue.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function A0(t){var n=on().memoizedState;return ay({ref:n,nextImpl:t}),function(){if((Le&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function b0(t,n){return cu(4,2,t,n)}function R0(t,n){return cu(4,4,t,n)}function C0(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function w0(t,n,a){a=a!=null?a.concat([t]):null,cu(4,4,C0.bind(null,n,t),a)}function Vf(){}function D0(t,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;return n!==null&&Uf(n,r[1])?r[0]:(a.memoizedState=[t,n],t)}function U0(t,n){var a=on();n=n===void 0?null:n;var r=a.memoizedState;if(n!==null&&Uf(n,r[1]))return r[0];if(r=t(),Lr){Sn(!0);try{t()}finally{Sn(!1)}}return a.memoizedState=[r,n],r}function Xf(t,n,a){return a===void 0||(ha&1073741824)!==0&&(Me&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=Gg(),ue.lanes|=t,Wa|=t,a)}function N0(t,n,a,r){return ai(a,n)?a:Ga.current!==null?(t=Xf(t,a,r),ai(t,n)||(fn=!0),t):(ha&106)===0||(ha&1073741824)!==0&&(Me&261930)===0?(fn=!0,t.memoizedState=a):(t=Gg(),ue.lanes|=t,Wa|=t,n)}function L0(t,n,a,r,u){var c=It.p;It.p=c!==0&&8>c?c:8;var g=bt.T,E={};E.types=g!==null?g.types:null,bt.T=E,Yf(t,!1,n,a);try{var L=u(),W=bt.S;if(W!==null&&W(E,L),L!==null&&typeof L=="object"&&typeof L.then=="function"){var et=$S(L,r);Fo(t,n,et,ui(t))}else Fo(t,n,r,ui(t))}catch(ht){Fo(t,n,{then:function(){},status:"rejected",reason:ht},ui())}finally{It.p=c,g!==null&&E.types!==null&&(g.types=E.types),bt.T=g}}function ry(){}function kf(t,n,a,r){if(t.tag!==5)throw Error(s(476));var u=O0(t).queue;L0(t,u,n,re,a===null?ry:function(){return z0(t),a(r)})}function O0(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:re,baseState:re,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:re},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:da,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function z0(t){var n=O0(t);n.next===null&&(n=t.alternate.memoizedState),Fo(t,n.next.queue,{},ui())}function qf(){return Cn(Bs)}function P0(){return on().memoizedState}function I0(){return on().memoizedState}function sy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ui();t=Fa(a);var r=Ha(n,t,a);r!==null&&($n(r,n,a),Lo(r,n,a)),n={cache:xf()},t.payload=n;return}n=n.return}}function oy(t,n,a){var r=ui();a={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},fu(t)?F0(n,a):(a=cf(t,n,a,r),a!==null&&($n(a,t,r),H0(a,n,r)))}function B0(t,n,a){var r=ui();Fo(t,n,a,r)}function Fo(t,n,a,r){var u={lane:r,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(fu(t))F0(n,u);else{var c=t.alternate;if(t.lanes===0&&(c===null||c.lanes===0)&&(c=n.lastRenderedReducer,c!==null))try{var g=n.lastRenderedState,E=c(g,a);if(u.hasEagerState=!0,u.eagerState=E,ai(E,g))return Vl(t,n,u,0),ke===null&&Gl(),!1}catch{}finally{}if(a=cf(t,n,u,r),a!==null)return $n(a,t,r),H0(a,n,r),!0}return!1}function Yf(t,n,a,r){if(r={lane:2,revertLane:Ph(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},fu(t)){if(n)throw Error(s(479))}else n=cf(t,a,r,2),n!==null&&$n(n,t,2)}function fu(t){var n=t.alternate;return t===ue||n!==null&&n===ue}function F0(t,n){_s=au=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function H0(t,n,a){if((a&4194048)!==0){var r=n.lanes;r&=t.pendingLanes,a|=r,n.lanes=a,b(t,a)}}var hu={readContext:Cn,use:ou,useCallback:nn,useContext:nn,useEffect:nn,useImperativeHandle:nn,useLayoutEffect:nn,useInsertionEffect:nn,useMemo:nn,useReducer:nn,useRef:nn,useState:nn,useDebugValue:nn,useDeferredValue:nn,useTransition:nn,useSyncExternalStore:nn,useId:nn,useHostTransitionStatus:nn,useFormState:nn,useActionState:nn,useOptimistic:nn,useMemoCache:nn,useCacheRefresh:nn,useEffectEvent:nn},G0={readContext:Cn,use:ou,useCallback:function(t,n){return Xn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:T0,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,uu(4194308,4,C0.bind(null,n,t),a)},useLayoutEffect:function(t,n){return uu(4194308,4,t,n)},useInsertionEffect:function(t,n){uu(4,2,t,n)},useMemo:function(t,n){var a=Xn();n=n===void 0?null:n;var r=t();if(Lr){Sn(!0);try{t()}finally{Sn(!1)}}return a.memoizedState=[r,n],r},useReducer:function(t,n,a){var r=Xn();if(a!==void 0){var u=a(n);if(Lr){Sn(!0);try{a(n)}finally{Sn(!1)}}}else u=n;return r.memoizedState=r.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},r.queue=t,t=t.dispatch=oy.bind(null,ue,t),[r.memoizedState,t]},useRef:function(t){var n=Xn();return t={current:t},n.memoizedState=t},useState:function(t){t=Ff(t);var n=t.queue,a=B0.bind(null,ue,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Vf,useDeferredValue:function(t,n){var a=Xn();return Xf(a,t,n)},useTransition:function(){var t=Ff(!1);return t=L0.bind(null,ue,t.queue,!0,!1),Xn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var r=ue,u=Xn();if(de){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),ke===null)throw Error(s(349));(Me&127)!==0||l0(r,n,a)}u.memoizedState=a;var c={value:a,getSnapshot:n};return u.queue=c,T0(c0.bind(null,r,c,t),[t]),r.flags|=2048,xs(9,{destroy:void 0},u0.bind(null,r,c,a,n),null),a},useId:function(){var t=Xn(),n=ke.identifierPrefix;if(de){var a=Hi,r=Fi;a=(r&~(1<<32-zn(r)-1)).toString(32)+a,n="_"+n+"R_"+a,a=ru++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ty++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:qf,useFormState:x0,useActionState:x0,useOptimistic:function(t){var n=Xn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Yf.bind(null,ue,!0,a),a.dispatch=n,[t,n]},useMemoCache:Pf,useCacheRefresh:function(){return Xn().memoizedState=sy.bind(null,ue)},useEffectEvent:function(t){var n=Xn(),a={impl:t};return n.memoizedState=a,function(){if((Le&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},V0={readContext:Cn,use:ou,useCallback:D0,useContext:Cn,useEffect:Gf,useImperativeHandle:w0,useInsertionEffect:b0,useLayoutEffect:R0,useMemo:U0,useReducer:lu,useRef:E0,useState:function(){return lu(da)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=on();return N0(a,He.memoizedState,t,n)},useTransition:function(){var t=lu(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:o0,useId:P0,useHostTransitionStatus:qf,useFormState:S0,useActionState:S0,useOptimistic:function(t,n){var a=on();return d0(a,He,t,n)},useMemoCache:Pf,useCacheRefresh:I0,useEffectEvent:A0},ly={readContext:Cn,use:ou,useCallback:D0,useContext:Cn,useEffect:Gf,useImperativeHandle:w0,useInsertionEffect:b0,useLayoutEffect:R0,useMemo:U0,useReducer:Bf,useRef:E0,useState:function(){return Bf(da)},useDebugValue:Vf,useDeferredValue:function(t,n){var a=on();return He===null?Xf(a,t,n):N0(a,He.memoizedState,t,n)},useTransition:function(){var t=Bf(da)[0],n=on().memoizedState;return[typeof t=="boolean"?t:Bo(t),n]},useSyncExternalStore:o0,useId:P0,useHostTransitionStatus:qf,useFormState:M0,useActionState:M0,useOptimistic:function(t,n){var a=on();return He!==null?d0(a,He,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Pf,useCacheRefresh:I0,useEffectEvent:A0};function Wf(t,n,a,r){n=t.memoizedState,a=a(r,n),a=a==null?n:z({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var jf={enqueueSetState:function(t,n,a){t=t._reactInternals;var r=ui(),u=Fa(r);u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,r),n!==null&&($n(n,t,r),Lo(n,t,r))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var r=ui(),u=Fa(r);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Ha(t,u,r),n!==null&&($n(n,t,r),Lo(n,t,r))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ui(),r=Fa(a);r.tag=2,n!=null&&(r.callback=n),n=Ha(t,r,a),n!==null&&($n(n,t,a),Lo(n,t,a))}};function X0(t,n,a,r,u,c,g){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,c,g):n.prototype&&n.prototype.isPureReactComponent?!Ao(a,r)||!Ao(u,c):!0}function k0(t,n,a,r){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,r),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,r),n.state!==t&&jf.enqueueReplaceState(n,n.state,null)}function Or(t,n){var a=n;if("ref"in n){a={};for(var r in n)r!=="ref"&&(a[r]=n[r])}if(t=t.defaultProps){a===n&&(a=z({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function q0(t){Hl(t)}function Y0(t){console.error(t)}function W0(t){Hl(t)}function du(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(r){setTimeout(function(){throw r})}}function j0(t,n,a){try{var r=t.onCaughtError;r(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Zf(t,n,a){return a=Fa(a),a.tag=3,a.payload={element:null},a.callback=function(){du(t,n)},a}function Z0(t){return t=Fa(t),t.tag=3,t}function K0(t,n,a,r){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var c=r.value;t.payload=function(){return u(c)},t.callback=function(){j0(n,a,r)}}var g=a.stateNode;g!==null&&typeof g.componentDidCatch=="function"&&(t.callback=function(){j0(n,a,r),typeof u!="function"&&(ja===null?ja=new Set([this]):ja.add(this));var E=r.stack;this.componentDidCatch(r.value,{componentStack:E!==null?E:""})})}function uy(t,n,a,r,u){if(a.flags|=32768,r!==null&&typeof r=="object"&&typeof r.then=="function"){if(n=a.alternate,n!==null&&br(n,a,u,!0),a=wn.current,a!==null){switch(a.tag){case 31:case 13:case 19:return In===null?Ou():a.alternate===null&&an===0&&(an=3),a.flags&=-257,a.flags|=65536,a.lanes=u,r===$l?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([r]):n.add(r),Lh(t,r,u)),!1;case 22:return a.flags|=65536,r===$l?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([r])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([r]):a.add(r)),Lh(t,r,u)),!1}throw Error(s(435,a.tag))}return Lh(t,r,u),Ou(),!1}if(de)return n=wn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,r!==mf&&(t=Error(s(422),{cause:r}),Co(mi(t,a)))):(r!==mf&&(n=Error(s(423),{cause:r}),Co(mi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,r=mi(r,a),u=Zf(t.stateNode,r,u),Af(t,u),an!==4&&(an=2)),!1;var c=Error(s(520),{cause:r});if(c=mi(c,a),Wo===null?Wo=[c]:Wo.push(c),an!==4&&(an=2),n===null)return!0;r=mi(r,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Zf(a.stateNode,r,t),Af(a,t),!1;case 1:if(n=a.type,c=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||c!==null&&typeof c.componentDidCatch=="function"&&(ja===null||!ja.has(c))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Z0(u),K0(u,t,a,r),Af(a,u),!1;break;case 22:if(a.memoizedState!==null)return a.flags|=65536,!1}a=a.return}while(a!==null);return!1}var Kf=Error(s(461)),fn=!1;function gn(t,n,a,r){n.child=t===null?t0(n,null,a,r):Nr(n,t.child,a,r)}function Q0(t,n,a,r,u){a=a.render;var c=n.ref;if("ref"in r){var g={};for(var E in r)E!=="ref"&&(g[E]=r[E])}else g=r;return Rr(n),r=Nf(t,n,a,g,c,u),E=Lf(),t!==null&&!fn?(Of(t,n,u),pa(t,n,u)):(de&&E&&Yl(n),n.flags|=1,gn(t,n,r,u),n.child)}function J0(t,n,a,r,u){if(t===null){var c=a.type;return typeof c=="function"&&!ff(c)&&c.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=c,$0(t,n,c,r,u)):(t=kl(a.type,null,r,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(c=t.child,!ah(t,u)){var g=c.memoizedProps;if(a=a.compare,a=a!==null?a:Ao,a(g,r)&&t.ref===n.ref)return pa(t,n,u)}return n.flags|=1,t=la(c,r),t.ref=n.ref,t.return=n,n.child=t}function $0(t,n,a,r,u){if(t!==null){var c=t.memoizedProps;if(Ao(c,r)&&t.ref===n.ref)if(fn=!1,n.pendingProps=r=c,ah(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,pa(t,n,u)}return Qf(t,n,a,r,u)}function tg(t,n,a,r){var u=r.children,c=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode==="hidden"){if((n.flags&128)!==0){if(c=c!==null?c.baseLanes|a:a,t!==null){for(r=n.child=t.child,u=0;r!==null;)u=u|r.lanes|r.childLanes,r=r.sibling;r=u&~c}else r=0,n.child=null;return eg(t,n,c,a,r)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ql(n,c!==null?c.cachePool:null),c!==null?i0(n,c):Rf(),a0(n);else return r=n.lanes=536870912,eg(t,n,c!==null?c.baseLanes|a:a,a,r)}else c!==null?(Ql(n,c.cachePool),i0(n,c),Xa(),n.memoizedState=null):(t!==null&&Ql(n,null),Rf(),Xa());return gn(t,n,u,a),n.child}function Ho(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function eg(t,n,a,r,u){var c=yf();return c=c===null?null:{parent:un._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},t!==null&&Ql(n,null),Rf(),a0(n),t!==null&&br(t,n,r,!0),n.childLanes=u,null}function pu(t,n){return n=mu({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function ng(t,n,a){return Nr(n,t.child,null,a),t=pu(n,n.pendingProps),t.flags|=2,ri(n),n.memoizedState=null,t}function cy(t,n,a){var r=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(de){if(r.mode==="hidden")return t=pu(n,r),n.lanes=536870912,t.memoizedState={baseLanes:0,cachePool:null},Ho(null,t);if(wf(n),(t=We)?(t=C_(t,vi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(t),a.return=n,n.child=a,Mn=n,We=null)):t=null,t===null)throw za(n);return n.lanes=536870912,null}return pu(n,r)}var c=t.memoizedState;if(c!==null){var g=c.dehydrated;if(wf(n),u)if(n.flags&256)n.flags&=-257,n=ng(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(fn||br(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(Ga.current===null){if(r=ke,r!==null&&(g=Z(r,a),g!==0&&g!==c.retryLane))throw c.retryLane=g,Mr(t,g),$n(r,t,g),Kf;Ou()}n=ng(t,n,a)}else t=c.treeContext,We=Si(g.nextSibling),Mn=n,de=!0,Oa=null,vi=!1,t!==null&&Vm(n,t),n=pu(n,r),n.flags|=134221824;return n}return t=la(t.child,{mode:r.mode,children:r.children}),t.ref=n.ref,n.child=t,t.return=n,t}function Ss(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Qf(t,n,a,r,u){return Rr(n),a=Nf(t,n,a,r,void 0,u),r=Lf(),t!==null&&!fn?(Of(t,n,u),pa(t,n,u)):(de&&r&&Yl(n),n.flags|=1,gn(t,n,a,u),n.child)}function ig(t,n,a,r,u,c){return Rr(n),n.updateQueue=null,a=s0(n,r,a,u),r0(t),r=Lf(),t!==null&&!fn?(Of(t,n,c),pa(t,n,c)):(de&&r&&Yl(n),n.flags|=1,gn(t,n,a,c),n.child)}function ag(t,n,a,r,u){if(Rr(n),n.stateNode===null){var c=cs,g=a.contextType;typeof g=="object"&&g!==null&&(c=Cn(g)),c=new a(r,c),n.memoizedState=c.state!==null&&c.state!==void 0?c.state:null,c.updater=jf,n.stateNode=c,c._reactInternals=n,c=n.stateNode,c.props=r,c.state=n.memoizedState,c.refs={},Ef(n),g=a.contextType,c.context=typeof g=="object"&&g!==null?Cn(g):cs,c.state=n.memoizedState,g=a.getDerivedStateFromProps,typeof g=="function"&&(Wf(n,a,g,r),c.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof c.getSnapshotBeforeUpdate=="function"||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(g=c.state,typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount(),g!==c.state&&jf.enqueueReplaceState(c,c.state,null),zo(n,r,c,u),Oo(),c.state=n.memoizedState),typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!0}else if(t===null){c=n.stateNode;var E=n.memoizedProps,L=Or(a,E);c.props=L;var W=c.context,et=a.contextType;g=cs,typeof et=="object"&&et!==null&&(g=Cn(et));var ht=a.getDerivedStateFromProps;et=typeof ht=="function"||typeof c.getSnapshotBeforeUpdate=="function",E=n.pendingProps!==E,et||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(E||W!==g)&&k0(n,c,r,g),Ba=!1;var k=n.memoizedState;c.state=k,zo(n,r,c,u),Oo(),W=n.memoizedState,E||k!==W||Ba?(typeof ht=="function"&&(Wf(n,a,ht,r),W=n.memoizedState),(L=Ba||X0(n,a,L,r,k,W,g))?(et||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(n.flags|=4194308)):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=r,n.memoizedState=W),c.props=r,c.state=W,c.context=g,r=L):(typeof c.componentDidMount=="function"&&(n.flags|=4194308),r=!1)}else{c=n.stateNode,Tf(t,n),g=n.memoizedProps,et=Or(a,g),c.props=et,ht=n.pendingProps,k=c.context,W=a.contextType,L=cs,typeof W=="object"&&W!==null&&(L=Cn(W)),E=a.getDerivedStateFromProps,(W=typeof E=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(g!==ht||k!==L)&&k0(n,c,r,L),Ba=!1,k=n.memoizedState,c.state=k,zo(n,r,c,u),Oo();var $=n.memoizedState;g!==ht||k!==$||Ba||t!==null&&t.dependencies!==null&&Zl(t.dependencies)?(typeof E=="function"&&(Wf(n,a,E,r),$=n.memoizedState),(et=Ba||X0(n,a,et,r,k,$,L)||t!==null&&t.dependencies!==null&&Zl(t.dependencies))?(W||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(r,$,L),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(r,$,L)),typeof c.componentDidUpdate=="function"&&(n.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),n.memoizedProps=r,n.memoizedState=$),c.props=r,c.state=$,c.context=L,r=et):(typeof c.componentDidUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||g===t.memoizedProps&&k===t.memoizedState||(n.flags|=1024),r=!1)}return c=r,Ss(t,n),r=(n.flags&128)!==0,c||r?(c=n.stateNode,a=r&&typeof a.getDerivedStateFromError!="function"?null:c.render(),n.flags|=1,t!==null&&r?(n.child=Nr(n,t.child,null,u),n.child=Nr(n,null,a,u)):gn(t,n,a,u),n.memoizedState=c.state,t=n.child):t=pa(t,n,u),t}function rg(t,n,a,r){return Tr(),n.flags|=256,gn(t,n,a,r),n.child}var Jf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $f(t){return{baseLanes:t,cachePool:jm()}}function th(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=li),t}function sg(t,n,a){var r=n.pendingProps,u=!1,c=(n.flags&128)!==0,g;if((g=c)||(g=t!==null&&t.memoizedState===null?!1:(Dn.current&2)!==0),g&&(u=!0,n.flags&=-129),g=(n.flags&32)!==0,n.flags&=-33,t===null){if(de){if(u?Va(n):Xa(),(t=We)?(t=C_(t,vi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:La!==null?{id:Fi,overflow:Hi}:null,retryLane:536870912,hydrationErrors:null},a=Fm(t),a.return=n,n.child=a,Mn=n,We=null)):t=null,t===null)throw za(n);return $h(t)?n.lanes=32:n.lanes=536870912,null}return c=r.children,r=r.fallback,u?(Xa(),u=n.mode,c=mu({mode:"hidden",children:c},u),r=Er(r,u,a,null),c.return=n,r.return=n,c.sibling=r,n.child=c,r=n.child,r.memoizedState=$f(a),r.childLanes=th(t,g,a),n.memoizedState=Jf,Ho(null,r)):(Va(n),eh(n,c))}var E=t.memoizedState;if(E!==null){var L=E.dehydrated;if(L!==null)return fy(t,n,c,g,r,L,E,a)}return u?(Xa(),u=r.fallback,c=n.mode,E=t.child,L=E.sibling,r=la(E,{mode:"hidden",children:r.children}),r.subtreeFlags=E.subtreeFlags&1206910976,L!==null?u=la(L,u):(u=Er(u,c,a,null),u.flags|=2),u.return=n,r.return=n,r.sibling=u,n.child=r,Ho(null,r),r=n.child,u=t.child.memoizedState,u===null?u=$f(a):(c=u.cachePool,c!==null?(E=un._currentValue,c=c.parent!==E?{parent:E,pool:E}:c):c=jm(),u={baseLanes:u.baseLanes|a,cachePool:c}),r.memoizedState=u,r.childLanes=th(t,g,a),n.memoizedState=Jf,Ho(t.child,r)):(Va(n),a=t.child,t=a.sibling,a=la(a,{mode:"visible",children:r.children}),a.return=n,a.sibling=null,t!==null&&(g=n.deletions,g===null?(n.deletions=[t],n.flags|=16):g.push(t)),n.child=a,n.memoizedState=null,a)}function eh(t,n){return n=mu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function mu(t,n){return t=Zn(22,t,null,n),t.lanes=0,t}function gu(t,n,a){return Nr(n,t.child,null,a),t=eh(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function fy(t,n,a,r,u,c,g,E){if(a)return n.flags&256?(Va(n),n.flags&=-257,gu(t,n,E)):n.memoizedState!==null?(Xa(),n.child=t.child,n.flags|=128,null):(Xa(),c=u.fallback,g=n.mode,u=mu({mode:"visible",children:u.children},g),c=Er(c,g,E,null),c.flags|=2,u.return=n,c.return=n,u.sibling=c,n.child=u,Nr(n,t.child,null,E),u=n.child,u.memoizedState=$f(E),u.childLanes=th(t,r,E),n.memoizedState=Jf,Ho(null,u));if(Va(n),$h(c)){if(r=c.nextSibling&&c.nextSibling.dataset,r)var L=r.dgst;return r=L,r!==""&&(u=Error(s(419)),u.stack="",u.digest=r,Co({value:u,source:null,stack:null})),gu(t,n,E)}if(fn||br(t,n,E,!1),r=(E&t.childLanes)!==0,fn||r){if(Ga.current!==null)return gu(t,n,E);if(r=ke,r!==null&&(u=Z(r,E),u!==0&&u!==g.retryLane))throw g.retryLane=u,Mr(t,u),$n(r,t,u),Kf;return Jh(c)||Ou(),gu(t,n,E)}return Jh(c)?(n.flags|=192,n.child=t.child,null):(t=g.treeContext,We=Si(c.nextSibling),Mn=n,de=!0,Oa=null,vi=!1,t!==null&&Vm(n,t),n=eh(n,u.children),n.flags|=134221824,n)}function og(t,n,a){t.lanes|=n;var r=t.alternate;r!==null&&(r.lanes|=n),jl(t.return,n,a)}function lg(t){for(var n=null;t!==null;){var a=t.alternate;a!==null&&iu(a)===null&&(n=t),t=t.sibling}return n}function _u(t,n,a,r,u,c){var g=t.memoizedState;g===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:r,tail:a,tailMode:u,treeForkCount:c}:(g.isBackwards=n,g.rendering=null,g.renderingStartTime=0,g.last=r,g.tail=a,g.tailMode=u,g.treeForkCount=c)}function nh(t){var n=t.child;for(t.child=null;n!==null;){var a=n.sibling;n.sibling=t.child,t.child=n,n=a}}function ih(t,n,a){var r=n.pendingProps,u=r.revealOrder,c=r.tail;r=r.children;var g=Dn.current;if(n.flags&128)return Po(n,g),null;var E=(g&2)!==0;if(E?(g=g&1|2,n.flags|=128):g&=1,Po(n,g),u==="backwards"&&t!==null?(nh(t),gn(t,n,r,a),nh(t)):gn(t,n,r,a),r=de?Ro:0,!E&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&og(t,a,n);else if(t.tag===19)og(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"backwards":a=lg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null,nh(n)),_u(n,!0,u,null,c,r);break;case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&iu(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}_u(n,!0,a,null,c,r);break;case"together":_u(n,!1,null,null,void 0,r);break;case"independent":n.memoizedState=null;break;default:a=lg(n.child),a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),_u(n,!1,u,a,c,r)}return n.child}function ug(t,n,a){var r=n.pendingProps;return Pa(n,n.type,r.value),gn(t,n,r.children,a),n.child}function pa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Wa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(br(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=la(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=la(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function ah(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Zl(t)))}function hy(t,n,a){switch(n.tag){case 3:tt(n,n.stateNode.containerInfo),Pa(n,un,t.memoizedState.cache),Tr();break;case 27:case 5:vt(n);break;case 4:tt(n,n.stateNode.containerInfo);break;case 10:Pa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,wf(n),null;break;case 13:var r=n.memoizedState;if(r!==null){if(r.dehydrated!==null)return Va(n),n.flags|=128,null;r=br(t,n,a,!1);var u=n.child.childLanes;return r||(a&u)!==0?sg(t,n,a):(Va(n),t=pa(t,n,a),t!==null?t.sibling:null)}Va(n);break;case 19:if(n.flags&128)return ih(t,n,a);if(u=(t.flags&128)!==0,r=(a&n.childLanes)!==0,r||(br(t,n,a,!1),r=(a&n.childLanes)!==0),u){if(r)return ih(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),Po(n,Dn.current),r)break;return null;case 22:return n.lanes=0,tg(t,n,a,n.pendingProps);case 24:Pa(n,un,t.memoizedState.cache)}return pa(t,n,a)}function cg(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!ah(t,a)&&(n.flags&128)===0)return fn=!1,hy(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,de&&(n.flags&1048576)!==0&&Gm(n,Ro,n.index);switch(n.lanes=0,n.tag){case 16:t:{var r=n.pendingProps;if(t=Dr(n.elementType),n.type=t,typeof t=="function")ff(t)?(r=Or(t,r),n.tag=1,n=ag(null,n,t,r,a)):(n.tag=0,n=Qf(null,n,t,r,a));else{if(t!=null){var u=t.$$typeof;if(u===q){n.tag=11,n=Q0(null,n,t,r,a);break t}else if(u===xt){n.tag=14,n=J0(null,n,t,r,a);break t}else if(u===ct){n.tag=10,n.type=t,n=ug(null,n,a);break t}}throw n=Vt(t)||t,Error(s(306,n,""))}}return n;case 0:return Qf(t,n,n.type,n.pendingProps,a);case 1:return r=n.type,u=Or(r,n.pendingProps),ag(t,n,r,u,a);case 3:t:{if(tt(n,n.stateNode.containerInfo),t===null)throw Error(s(387));r=n.pendingProps;var c=n.memoizedState;u=c.element,Tf(t,n),zo(n,r,null,a);var g=n.memoizedState;if(r=g.cache,Pa(n,un,r),r!==c.cache&&vf(n,[un],a,!0),Oo(),r=g.element,c.isDehydrated)if(c={element:r,isDehydrated:!1,cache:g.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=rg(t,n,r,a);break t}else if(r!==u){u=mi(Error(s(424)),n),Co(u),n=rg(t,n,r,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(We=Si(t.firstChild),Mn=n,de=!0,Oa=null,vi=!0,a=t0(n,null,r,a),n.child=a;a;)a.flags=a.flags&-3|134221824,a=a.sibling}else{if(Tr(),r===u){n=pa(t,n,a);break t}gn(t,n,r,a)}n=n.child}return n;case 26:return Ss(t,n),t===null?(a=z_(n.type,null,n.pendingProps,null))?n.memoizedState=a:de||(n.stateNode=p_(n.type,n.pendingProps,N.current,n)):n.memoizedState=z_(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return vt(n),t===null&&de&&(r=n.stateNode=U_(n.type,n.pendingProps,N.current),Mn=n,vi=!0,u=We,Qa(n.type)?(td=u,We=Si(r.firstChild)):We=u),gn(t,n,n.pendingProps.children,a),Ss(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&de&&((u=r=We)&&(r=sM(r,n.type,n.pendingProps,vi),r!==null?(n.stateNode=r,Mn=n,We=Si(r.firstChild),vi=!1,u=!0):u=!1),u||za(n)),vt(n),u=n.type,c=n.pendingProps,g=t!==null?t.memoizedProps:null,r=c.children,qh(u,c)?r=null:g!==null&&qh(u,g)&&(n.flags|=32),n.memoizedState!==null&&(u=Nf(t,n,ey,null,null,a),Bs._currentValue=u),Ss(t,n),gn(t,n,r,a),n.child;case 6:return t===null&&de&&((t=a=We)&&(a=oM(a,n.pendingProps,vi),a!==null?(n.stateNode=a,Mn=n,We=null,t=!0):t=!1),t||za(n)),null;case 13:return sg(t,n,a);case 4:return tt(n,n.stateNode.containerInfo),r=n.pendingProps,t===null?n.child=Nr(n,null,r,a):gn(t,n,r,a),n.child;case 11:return Q0(t,n,n.type,n.pendingProps,a);case 7:return r=n.pendingProps,Ss(t,n),gn(t,n,r,a),n.child;case 8:return gn(t,n,n.pendingProps.children,a),n.child;case 12:return gn(t,n,n.pendingProps.children,a),n.child;case 10:return ug(t,n,a);case 9:return u=n.type._context,r=n.pendingProps.children,Rr(n),u=Cn(u),r=r(u),n.flags|=1,gn(t,n,r,a),n.child;case 14:return J0(t,n,n.type,n.pendingProps,a);case 15:return $0(t,n,n.type,n.pendingProps,a);case 19:return ih(t,n,a);case 31:return cy(t,n,a);case 22:return tg(t,n,a,n.pendingProps);case 24:return Rr(n),r=Cn(un),t===null?(u=yf(),u===null&&(u=ke,c=xf(),u.pooledCache=c,c.refCount++,c!==null&&(u.pooledCacheLanes|=a),u=c),n.memoizedState={parent:r,cache:u},Ef(n),Pa(n,un,u)):((t.lanes&a)!==0&&(Tf(t,n),zo(n,null,null,a),Oo()),u=t.memoizedState,c=n.memoizedState,u.parent!==r?(u={parent:r,cache:r},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Pa(n,un,r)):(r=c.cache,Pa(n,un,r),r!==u.cache&&vf(n,[un],a,!0))),gn(t,n,n.pendingProps.children,a),n.child;case 30:return n.stateNode===null&&(n.stateNode={autoName:null,paired:null,clones:null,ref:null}),r=n.pendingProps,r.name!=null&&r.name!=="auto"?n.flags|=t===null?18882560:18874368:de&&Yl(n),t!==null&&t.memoizedProps.name!==r.name?n.flags|=4194816:Ss(t,n),gn(t,n,r.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function ma(t){t.flags|=4}function rh(t,n,a,r,u){var c;if((c=(t.mode&32)!==0)&&(c=a===null?F_(n,r):F_(n,r)&&(r.src!==a.src||r.srcSet!==a.srcSet)),c){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(qg())t.flags|=8192;else throw Ur=$l,Mf}else t.flags&=-16777217}function fg(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!H_(n))if(qg())t.flags|=8192;else throw Ur=$l,Mf}function vu(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?wl():536870912,t.lanes|=n,As|=n)}function Go(t,n){if(!de)switch(t.tailMode){case"visible":break;case"collapsed":for(var a=t.tail,r=null;a!==null;)a.alternate!==null&&(r=a),a=a.sibling;r===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null;break;default:for(n=t.tail,a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null}}function je(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,r=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags&1206910976,r|=u.flags&1206910976,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,r|=u.subtreeFlags,r|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=r,t.childLanes=a,n}function dy(t,n,a){var r=n.pendingProps;switch(pf(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return je(n),null;case 1:return je(n),null;case 3:return a=n.stateNode,r=null,t!==null&&(r=t.memoizedState.cache),n.memoizedState.cache!==r&&(n.flags|=2048),fa(un),gt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ds(n)?ma(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,gf())),je(n),null;case 26:var u=n.type,c=n.memoizedState;return t===null?(ma(n),c!==null?(je(n),fg(n,c)):(je(n),rh(n,u,null,r,a))):c?c!==t.memoizedState?(ma(n),je(n),fg(n,c)):(je(n),n.flags&=-16777217):(t=t.memoizedProps,t!==r&&ma(n),je(n),rh(n,u,t,r,a)),null;case 27:if(pt(n),a=N.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),n.subtreeFlags&=-33554433,null}t=Se.current,ds(n)?Xm(n):(t=U_(u,r,a),n.stateNode=t,ma(n))}return je(n),n.subtreeFlags&=-33554433,null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(!r){if(n.stateNode===null)throw Error(s(166));return je(n),n.subtreeFlags&=-33554433,null}if(c=Se.current,ds(n))Xm(n);else{var g=Jo(N.current);switch(c){case 1:c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":c=g.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":c=g.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":c=g.createElement("div"),c.innerHTML="<script><\/script>",c=c.removeChild(c.firstChild);break;case"select":c=typeof r.is=="string"?g.createElement("select",{is:r.is}):g.createElement("select"),r.multiple?c.multiple=!0:r.size&&(c.size=r.size);break;default:c=typeof r.is=="string"?g.createElement(u,{is:r.is}):g.createElement(u)}}c[Et]=n,c[Dt]=r;t:for(g=n.child;g!==null;){if(g.tag===5||g.tag===6)c.appendChild(g.stateNode);else if(g.tag!==4&&g.tag!==27&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===n)break t;for(;g.sibling===null;){if(g.return===null||g.return===n)break t;g=g.return}g.sibling.return=g.return,g=g.sibling}n.stateNode=c;t:switch(Nn(c,u,r),u){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break t;case"img":r=!0;break t;default:r=!1}r&&ma(n)}}return je(n),n.subtreeFlags&=-33554433,rh(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==r&&ma(n);else{if(typeof r!="string"&&n.stateNode===null)throw Error(s(166));if(t=N.current,ds(n)){if(t=n.stateNode,a=n.memoizedProps,r=null,u=Mn,u!==null)switch(u.tag){case 27:case 5:r=u.memoizedProps}t[Et]=n,t=!!(t.nodeValue===a||r!==null&&r.suppressHydrationWarning===!0||c_(t.nodeValue,a)),t||za(n,!0)}else t=Jo(t).createTextNode(r),t[Et]=n,n.stateNode=t}return je(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(r=ds(n),a!==null){if(t===null){if(!r)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[Et]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),t=!1}else a=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(ri(n),n):(ri(n),null);if((n.flags&128)!==0)throw Error(s(558))}return je(n),null;case 13:if(r=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ds(n),r!==null&&r.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[Et]=n}else Tr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;je(n),u=!1}else u=gf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(ri(n),n):(ri(n),null)}return ri(n),(n.flags&128)!==0?(n.lanes=a,n):(a=r!==null,t=t!==null&&t.memoizedState!==null,a&&(r=n.child,u=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(u=r.alternate.memoizedState.cachePool.pool),c=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(c=r.memoizedState.cachePool.pool),c!==u&&(r.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),vu(n,n.updateQueue),je(n),null);case 4:return gt(),t===null&&Hh(n.stateNode.containerInfo),n.flags|=67108864,je(n),null;case 10:return fa(n.type),je(n),null;case 19:if(Df(n),r=n.memoizedState,r===null)return je(n),null;if(u=(n.flags&128)!==0,c=r.rendering,c===null)if(u)Go(r,!1);else{if(an!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(c=iu(t),c!==null){for(n.flags|=128,Go(r,!1),t=c.updateQueue,n.updateQueue=t,vu(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Bm(a,t),a=a.sibling;return Po(n,Dn.current&1|2),de&&ua(n,r.treeForkCount),n.child}t=t.sibling}r.tail!==null&&V()>Du&&(n.flags|=128,u=!0,Go(r,!1),n.lanes=4194304)}else{if(!u)if(t=iu(c),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,vu(n,t),Go(r,!0),r.tail===null&&r.tailMode!=="collapsed"&&r.tailMode!=="visible"&&!c.alternate&&!de)return je(n),null}else 2*V()-r.renderingStartTime>Du&&a!==536870912&&(n.flags|=128,u=!0,Go(r,!1),n.lanes=4194304);r.isBackwards?(c.sibling=n.child,n.child=c):(t=r.last,t!==null?t.sibling=c:n.child=c,r.last=c)}if(r.tail!==null){t=r.tail;t:{for(a=t;a!==null;){if(a.alternate!==null){a=!1;break t}a=a.sibling}a=!0}return r.rendering=t,r.tail=t.sibling,r.renderingStartTime=V(),t.sibling=null,c=Dn.current,c=u?c&1|2:c&1,r.tailMode==="visible"||r.tailMode==="collapsed"||!a||de?Po(n,c):(a=c,Rt(wn,n),Rt(Dn,a),In===null&&(In=n)),de&&ua(n,r.treeForkCount),t}return je(n),null;case 22:case 23:return ri(n),Cf(),r=n.memoizedState!==null,t!==null?t.memoizedState!==null!==r&&(n.flags|=8192):r&&(n.flags|=8192),r?(a&536870912)!==0&&(n.flags&128)===0&&(je(n),n.subtreeFlags&6&&(n.flags|=8192)):je(n),a=n.updateQueue,a!==null&&vu(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),r=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(r=n.memoizedState.cachePool.pool),r!==a&&(n.flags|=2048),t!==null&&Kt(wr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),fa(un),je(n),null;case 25:return null;case 30:return n.flags|=33554432,je(n),null}throw Error(s(156,n.tag))}function py(t,n){switch(pf(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return fa(un),gt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(ri(n),n.alternate===null)throw Error(s(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(ri(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));Tr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Df(n),t=n.flags,t&65536?(n.flags=t&-65537|128,t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null),n.flags|=4,n):null;case 4:return gt(),null;case 10:return fa(n.type),null;case 22:case 23:return ri(n),Cf(),t!==null&&Kt(wr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return fa(un),null;case 25:return null;default:return null}}function hg(t,n){switch(pf(n),n.tag){case 3:fa(un),gt();break;case 26:case 27:case 5:pt(n);break;case 4:gt();break;case 31:n.memoizedState!==null&&ri(n);break;case 13:ri(n);break;case 19:Df(n);break;case 10:fa(n.type);break;case 22:case 23:ri(n),Cf(),t!==null&&Kt(wr);break;case 24:fa(un)}}function Vo(t,n){try{var a=n.updateQueue,r=a!==null?a.lastEffect:null;if(r!==null){var u=r.next;a=u;do{if((a.tag&t)===t){r=void 0;var c=a.create,g=a.inst;r=c(),g.destroy=r}a=a.next}while(a!==u)}}catch(E){Ie(n,n.return,E)}}function ka(t,n,a){try{var r=n.updateQueue,u=r!==null?r.lastEffect:null;if(u!==null){var c=u.next;r=c;do{if((r.tag&t)===t){var g=r.inst,E=g.destroy;if(E!==void 0){g.destroy=void 0,u=n;var L=a,W=E;try{W()}catch(et){Ie(u,L,et)}}}r=r.next}while(r!==c)}}catch(et){Ie(n,n.return,et)}}function dg(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{n0(n,a)}catch(r){Ie(t,t.return,r)}}}function pg(t,n,a){a.props=Or(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(r){Ie(t,n,r)}}function Gi(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var r=t.stateNode;break;case 30:var u=t.stateNode,c=sa(t.memoizedProps,u);(u.ref===null||u.ref.name!==c)&&(u.ref=y_(c)),r=u.ref;break;case 7:if(t.stateNode===null){var g=new ci(t);m(t.child,!1,aM,g,void 0,void 0),t.stateNode=g}r=t.stateNode;break;default:r=t.stateNode}typeof a=="function"?t.refCleanup=a(r):a.current=r}}catch(E){Ie(t,n,E)}}function Un(t,n){var a=t.ref,r=t.refCleanup;if(a!==null)if(typeof r=="function")try{r()}catch(u){Ie(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Ie(t,n,u)}else a.current=null}function xu(t,n){if((t.tag===5||t.tag===27||t.tag===6)&&t.alternate===null&&n!==null)for(var a=0;a<n.length;a++)R_(t.stateNode,n[a])}function mg(t){for(var n=t.return;n!==null&&(oh(n)&&R_(t.stateNode,n.stateNode),!sh(n));)n=n.return}function Xo(t){for(var n=t.return;n!==null&&(oh(n)&&rM(t.stateNode,n.stateNode),!sh(n));)n=n.return}function sh(t){return t.tag===5||t.tag===3||t.tag===27}function oh(t){return t&&t.tag===7&&t.stateNode!==null}function lh(t){var n=t.type,a=t.memoizedProps,r=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&r.focus();break t;case"img":a.src?r.src=a.src:a.srcSet&&(r.srcset=a.srcSet)}}catch(u){Ie(t,t.return,u)}}function uh(t,n,a){try{var r=t.stateNode;Hy(r,t.type,a,n),r[Dt]=n}catch(u){Ie(t,t.return,u)}}function gg(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Qa(t.type)||t.tag===4}function ch(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||gg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function fh(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(u,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(u),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Bi)),xu(t,r),Ue=!0;else if(u!==4&&(u===27&&(xu(t,r),r=null,Qa(t.type)&&(a=t.stateNode,n=null)),t=t.child,t!==null))for(fh(t,n,a,r),t=t.sibling;t!==null;)fh(t,n,a,r),t=t.sibling}function Su(t,n,a,r){var u=t.tag;if(u===5||u===6)u=t.stateNode,n?a.insertBefore(u,n):a.appendChild(u),xu(t,r),Ue=!0;else if(u!==4&&(u===27&&(xu(t,r),r=null,Qa(t.type)&&(a=t.stateNode)),t=t.child,t!==null))for(Su(t,n,a,r),t=t.sibling;t!==null;)Su(t,n,a,r),t=t.sibling}function _g(t){var n=t.stateNode,a=t.memoizedProps;try{for(var r=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Nn(n,r,a),n[Et]=t,n[Dt]=a}catch(c){Ie(t,t.return,c)}}var yu=!1,si=null;function vg(t){(t.tag===30||(t.subtreeFlags&33554432)!==0)&&(yu=!0)}var Vi=null;function xg(){var t=Vi;return Vi=null,t}var Kn=0;function ys(t,n,a,r,u){return Kn=0,Sg(t.child,n,a,r,u)}function Sg(t,n,a,r,u){for(var c=!1;t!==null;){if(t.tag===5){var g=t.stateNode;if(r!==null){var E=jh(g);r.push(E),E.view&&(c=!0)}else c||jh(g).view&&(c=!0);yu=!0,x_(g,Kn===0?n:n+"_"+Kn,a),Kn++}else(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&u||Sg(t.child,n,a,r,u)&&(c=!0));t=t.sibling}return c}function Xi(t,n){for(;t!==null;)t.tag===5?S_(t.stateNode,t.memoizedProps):(t.tag!==22||t.memoizedState===null)&&(t.tag===30&&n||Xi(t.child,n)),t=t.sibling}function Mu(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if((t.tag!==22||t.memoizedState===null)&&(Mu(t),t.tag===30&&(t.flags&18874368)!==0&&t.stateNode.paired)){var n=t.memoizedProps;if(n.name==null||n.name==="auto")throw Error(s(544));var a=n.name;n=oa(n.default,n.share),n!=="none"&&(ys(t,a,n,null,!1)||Xi(t.child,!1))}t=t.sibling}}function hh(t,n){if(t.tag===30){var a=t.stateNode,r=t.memoizedProps,u=sa(r,a),c=oa(r.default,a.paired?r.share:r.enter);c!=="none"?ys(t,u,c,null,!1)?(Mu(t),a.paired||n||ws(t,r.onEnter)):Xi(t.child,!1):Mu(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)hh(t,n),t=t.sibling;else Mu(t)}function dh(t){if(si!==null&&si.size!==0){var n=si;if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var a=t.memoizedProps,r=a.name;if(r!=null&&r!=="auto"){var u=n.get(r);if(u!==void 0){var c=oa(a.default,a.share);if(c!=="none"&&(ys(t,r,c,null,!1)?(c=t.stateNode,u.paired=c,c.paired=u,ws(t,a.onShare)):Xi(t.child,!1)),n.delete(r),n.size===0)break}}}dh(t)}t=t.sibling}}}function ph(t){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode),r=si!==null?si.get(a):void 0,u=oa(n.default,r!==void 0?n.share:n.exit);u!=="none"&&(ys(t,a,u,null,!1)?r!==void 0?(u=t.stateNode,r.paired=u,u.paired=r,si.delete(a),ws(t,n.onShare)):ws(t,n.onExit):Xi(t.child,!1)),si!==null&&dh(t)}else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)ph(t),t=t.sibling;else si!==null&&dh(t)}function yg(t){for(t=t.child;t!==null;){if(t.tag===30){var n=t.memoizedProps,a=sa(n,t.stateNode);n=oa(n.default,n.update),t.flags&=-5,n!=="none"&&ys(t,a,n,t.memoizedState=[],!1)}else(t.subtreeFlags&33554432)!==0&&yg(t);t=t.sibling}}function mh(t){if((t.subtreeFlags&18874368)!==0)for(t=t.child;t!==null;){if(t.tag!==22||t.memoizedState===null){if(t.tag===30&&(t.flags&18874368)!==0){var n=t.stateNode;n.paired!==null&&(n.paired=null,Xi(t.child,!1))}mh(t)}t=t.sibling}}function Eu(t){if(t.tag===30)t.stateNode.paired=null,Xi(t.child,!1),mh(t);else if((t.subtreeFlags&33554432)!==0)for(t=t.child;t!==null;)Eu(t),t=t.sibling;else mh(t)}function Mg(t){for(t=t.child;t!==null;)t.tag===30?Xi(t.child,!1):(t.subtreeFlags&33554432)!==0&&Mg(t),t=t.sibling}function gh(t,n,a,r,u,c,g){for(var E=!1;n!==null;){if(n.tag===5){var L=n.stateNode;if(c!==null&&Kn<c.length){var W=c[Kn],et=jh(L);(W.view||et.view)&&(E=!0);var ht;if(ht=(t.flags&4)===0)if(et.clip)ht=!0;else{ht=W.rect;var k=et.rect;ht=ht.y!==k.y||ht.x!==k.x||ht.height!==k.height||ht.width!==k.width}ht&&(t.flags|=4),et.abs?et=!W.abs:(W=W.rect,et=et.rect,et=W.height!==et.height||W.width!==et.width),et&&(t.flags|=32)}else t.flags|=32;(t.flags&4)!==0&&x_(L,Kn===0?a:a+"_"+Kn,u),E&&(t.flags&4)!==0||(Vi===null&&(Vi=[]),Vi.push(L,Kn===0?r:r+"_"+Kn,n.memoizedProps)),Kn++}else(n.tag!==22||n.memoizedState===null)&&(n.tag===30&&g?t.flags|=n.flags&32:gh(t,n.child,a,r,u,c,g)&&(E=!0));n=n.sibling}return E}function Eg(t,n){for(t=t.child;t!==null;){if(t.tag===30){var a=t.memoizedProps,r=t.stateNode,u=sa(a,r),c=oa(a.default,a.update),g;g=t.memoizedState,t.memoizedState=null,r=t;var E=t.child;Kn=0,u=gh(r,E,u,u,c,g,!1),(t.flags&4)!==0&&u&&ws(t,a.onUpdate)}else(t.subtreeFlags&33554432)!==0&&Eg(t);t=t.sibling}}var En=!1,ze=!1,ki=!1,_h=!1,Tg=typeof WeakSet=="function"?WeakSet:Set,Tn=null,qi=!1,ko=!1,Tu=!1,vh=!1;function my(t,n,a){if(t=t.containerInfo,Xh=Fs,t=Cm(t),af(t)){if("selectionStart"in t)var r={start:t.selectionStart,end:t.selectionEnd};else t:{r=(r=t.ownerDocument)&&r.defaultView||window;var u=r.getSelection&&r.getSelection();if(u&&u.rangeCount!==0){r=u.anchorNode;var c=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{r.nodeType,g.nodeType}catch{r=null;break t}var E=0,L=-1,W=-1,et=0,ht=0,k=t,$=null;e:for(;;){for(var Ct;k!==r||c!==0&&k.nodeType!==3||(L=E+c),k!==g||u!==0&&k.nodeType!==3||(W=E+u),k.nodeType===3&&(E+=k.nodeValue.length),(Ct=k.firstChild)!==null;)$=k,k=Ct;for(;;){if(k===t)break e;if($===r&&++et===c&&(L=E),$===g&&++ht===u&&(W=E),(Ct=k.nextSibling)!==null)break;k=$,$=k.parentNode}k=Ct}r=L===-1||W===-1?null:{start:L,end:W}}else r=null}r=r||{start:0,end:0}}else r=null;for(kh={focusedElem:t,selectionRange:r},Fs=!1,a=(a&335544064)===a,Tn=n,n=a?9270:1024;Tn!==null;){if(t=Tn,a&&(r=t.deletions,r!==null))for(c=0;c<r.length;c++)a&&ph(r[c]);if(t.alternate===null&&(t.flags&2)!==0)a&&vg(t),Au(a);else{if(t.tag===22){if(r=t.alternate,t.memoizedState!==null){r!==null&&r.memoizedState===null&&a&&ph(r),Au(a);continue}else if(r!==null&&r.memoizedState!==null){a&&vg(t),Au(a);continue}}r=t.child,(t.subtreeFlags&n)!==0&&r!==null?(r.return=t,Tn=r):(a&&yg(t),Au(a))}}si=null}function Au(t){for(;Tn!==null;){var n=Tn,a=t,r=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 15:break;case 1:if((u&1024)!==0&&r!==null){a=void 0,u=r.memoizedProps,r=r.memoizedState;var c=n.stateNode;try{var g=Or(n.type,u);a=c.getSnapshotBeforeUpdate(g,r),c.__reactInternalSnapshotBeforeUpdate=a}catch(E){Ie(n,n.return,E)}}break;case 3:if((u&1024)!==0){if(r=n.stateNode.containerInfo,a=r.nodeType,a===9)Qh(r);else if(a===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":Qh(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;case 30:a&&r!==null&&(a=sa(r.memoizedProps,r.stateNode),u=n.memoizedProps,u=oa(u.default,u.update),u!=="none"&&ys(r,a,u,r.memoizedState=[],!0));break;default:if((u&1024)!==0)throw Error(s(163))}if(r=n.sibling,r!==null){r.return=n.return,Tn=r;break}Tn=n.return}}function Ag(t,n,a){var r=a.flags;switch(a.tag){case 0:case 11:case 15:Yi(t,a),r&4&&Vo(5,a);break;case 1:if(Yi(t,a),r&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(g){Ie(a,a.return,g)}else{var u=Or(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(g){Ie(a,a.return,g)}}r&64&&dg(a),r&512&&Gi(a,a.return);break;case 3:if(Yi(t,a),r&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{n0(t,n)}catch(g){Ie(a,a.return,g)}}break;case 27:n===null&&r&4&&_g(a);case 26:case 5:Yi(t,a),n===null&&r&4&&lh(a),r&512&&Gi(a,a.return);break;case 12:Yi(t,a);break;case 31:Yi(t,a),r&4&&wg(t,a);break;case 13:Yi(t,a),r&4&&Dg(t,a),r&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ry.bind(null,a),lM(t,a))));break;case 22:if(r=a.memoizedState!==null||En,!r){var c=n!==null&&n.memoizedState!==null||ze;n=En,u=ze,En=r,(ze=c)&&!u?(r=2,(a.subtreeFlags&8772)!==0&&(r|=1),Ri(t,a,r)):Yi(t,a),En=n,ze=u}break;case 30:Yi(t,a),r&512&&Gi(a,a.return);break;case 7:r&512&&Gi(a,a.return);default:Yi(t,a)}}function xh(t,n){for(t=t.child;t!==null;)bg(t,n),t=t.sibling}function bg(t,n){switch(t.tag){case 5:case 26:try{var a=t.stateNode;if(n){var r=a.style;typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none"}else{var u=t.stateNode,c=t.memoizedProps.style,g=c!=null&&c.hasOwnProperty("display")?c.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(L){Ie(t,t.return,L)}Sh(t,n);break;case 6:try{t.stateNode.nodeValue=n?"":t.memoizedProps,Ue=!0}catch(L){Ie(t,t.return,L)}break;case 18:try{var E=t.stateNode;n?v_(E,!0):v_(t.stateNode,!1)}catch(L){Ie(t,t.return,L)}break;case 22:case 23:t.memoizedState===null&&xh(t,n);break;default:xh(t,n)}}function Sh(t,n){if(t.subtreeFlags&67108864)for(t=t.child;t!==null;){t:{var a=t,r=n;switch(a.tag){case 4:bg(a,r);break t;case 22:a.memoizedState===null&&Sh(a,r);break t;default:Sh(a,r)}}t=t.sibling}}function Rg(t){var n=t.alternate;n!==null&&(t.alternate=null,Rg(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&ge(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $e=null,Qn=!1;function Ai(t,n,a){for(a=a.child;a!==null;)Cg(t,n,a),a=a.sibling}function Cg(t,n,a){if(Ze&&typeof Ze.onCommitFiberUnmount=="function")try{Ze.onCommitFiberUnmount(Ae,a)}catch{}switch(a.tag){case 26:ze||Un(a,n),Ai(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&!ze&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:ze||Un(a,n),Xo(a);var r=$e,u=Qn;Qa(a.type)&&($e=a.stateNode,Qn=!1),Ai(t,n,a),N_(a.stateNode,a.type,a.memoizedProps),$e=r,Qn=u;break;case 5:ze||Un(a,n),Xo(a);case 6:if(a.tag===6&&Xo(a),r=$e,u=Qn,$e=null,Ai(t,n,a),$e=r,Qn=u,$e!==null)if(Qn)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(a.stateNode),Ue=!0}catch(c){Ie(a,n,c)}else try{$e.removeChild(a.stateNode),Ue=!0}catch(c){Ie(a,n,c)}break;case 18:$e!==null&&(Qn?(t=$e,__(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Hs(t)):__($e,a.stateNode));break;case 4:r=$e,u=Qn,$e=a.stateNode.containerInfo,Qn=!0,Ai(t,n,a),$e=r,Qn=u;break;case 0:case 11:case 14:case 15:ka(2,a,n),ze||ka(4,a,n),Ai(t,n,a);break;case 1:ze||(Un(a,n),r=a.stateNode,typeof r.componentWillUnmount=="function"&&pg(a,n,r)),Ai(t,n,a);break;case 21:Ai(t,n,a);break;case 22:ze=(r=ze)||a.memoizedState!==null,Ai(t,n,a),ze=r;break;case 30:Un(a,n),Ai(t,n,a);break;case 7:ze||Un(a,n),Ai(t,n,a);break;default:Ai(t,n,a)}}function wg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Hs(t)}catch(a){Ie(n,n.return,a)}}}function Dg(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Hs(t)}catch(a){Ie(n,n.return,a)}}function gy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Tg),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Tg),n;default:throw Error(s(435,t.tag))}}function bu(t,n){var a=gy(t);n.forEach(function(r){if(!a.has(r)){a.add(r);var u=Cy.bind(null,t,r);r.then(u,u)}})}function kn(t,n,a){var r=n.deletions;if(r!==null)for(var u=0;u<r.length;u++){var c=r[u],g=t,E=n,L=E;t:for(;L!==null;){switch(L.tag){case 27:if(Qa(L.type)){$e=L.stateNode,Qn=!1;break t}break;case 5:$e=L.stateNode,Qn=!1;break t;case 3:case 4:$e=L.stateNode.containerInfo,Qn=!0;break t}L=L.return}if($e===null)throw Error(s(160));Cg(g,E,c),$e=null,Qn=!1,g=c.alternate,g!==null&&(g.return=null),c.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ug(n,t,a),n=n.sibling}var bi=null;function Ug(t,n,a){var r=t.alternate,u=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(u&4&&(r=t.updateQueue,r=r!==null?r.events:null,r!==null))for(var c=0;c<r.length;c++){var g=r[c];g.ref.impl=g.nextImpl}kn(n,t,a),qn(t),u&4&&(ka(3,t,t.return),Vo(3,t),ka(5,t,t.return));break;case 1:kn(n,t,a),qn(t),u&512&&(ze||r===null||Un(r,r.return)),u&64&&En&&(t=t.updateQueue,t!==null&&(n=t.callbacks,n!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:if(c=bi,kn(n,t,a),qn(t),u&512&&(ze||r===null||Un(r,r.return)),u&4)if(u=r!==null?r.memoizedState:null,a=t.memoizedState,r===null)if(a===null)if(t.stateNode===null)if(En)t.stateNode=p_(t.type,t.memoizedProps,n.containerInfo,t);else{t:{n=t.type,a=t.memoizedProps,u=c.ownerDocument||c;e:switch(n){case"title":r=u.getElementsByTagName("title")[0],(!r||r[Ye]||r[Et]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=u.createElement(n),u.head.insertBefore(r,u.querySelector("head > title"))),Nn(r,n,a),r[Et]=t,Ke(r),n=r;break t;case"link":if(c=B_("link","href",u).get(n+(a.href||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&r.getAttribute("rel")===(a.rel==null?null:a.rel)&&r.getAttribute("title")===(a.title==null?null:a.title)&&r.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){c.splice(g,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;case"meta":if(c=B_("meta","content",u).get(n+(a.content||""))){for(g=0;g<c.length;g++)if(r=c[g],r.getAttribute("content")===(a.content==null?null:""+a.content)&&r.getAttribute("name")===(a.name==null?null:a.name)&&r.getAttribute("property")===(a.property==null?null:a.property)&&r.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&r.getAttribute("charset")===(a.charSet==null?null:a.charSet)){c.splice(g,1);break e}}r=u.createElement(n),Nn(r,n,a),u.head.appendChild(r);break;default:throw Error(s(468,n))}r[Et]=t,Ke(r),n=r}t.stateNode=n}else En||ad(c,t.type,t.stateNode);else t.stateNode=I_(c,a,t.memoizedProps);else u!==a?(u===null?(n=r.stateNode,n===null||ze||n.parentNode.removeChild(n)):u.count--,a===null?En||ad(c,t.type,t.stateNode):I_(c,a,t.memoizedProps)):a===null&&t.stateNode!==null&&uh(t,t.memoizedProps,r.memoizedProps);break;case 27:kn(n,t,a),qn(t),u&512&&(ze||r===null||Un(r,r.return)),r!==null&&u&4&&uh(t,t.memoizedProps,r.memoizedProps);break;case 5:if(c=ki,ki=!1,kn(n,t,a),ki=c,qn(t),u&512&&(ze||r===null||Un(r,r.return)),t.flags&32){n=t.stateNode;try{is(n,""),Ue=!0}catch(et){Ie(t,t.return,et)}}u&4&&t.stateNode!=null&&(n=t.memoizedProps,uh(t,n,r!==null?r.memoizedProps:n)),u&1024&&(_h=!0);break;case 6:if(kn(n,t,a),qn(t),u&4){if(t.stateNode===null)throw Error(s(162));n=t.memoizedProps,a=t.stateNode;try{a.nodeValue=n,Ue=!0}catch(et){Ie(t,t.return,et)}}break;case 3:if(Ue=!1,Gu=null,c=bi,bi=$o(n.containerInfo),kn(n,t,a),bi=c,qn(t),u&4&&r!==null&&r.memoizedState.isDehydrated)try{Hs(n.containerInfo)}catch(et){Ie(t,t.return,et)}_h&&(_h=!1,Ng(t)),Ue=!1;break;case 4:u=ki,ki=En,r=Jp(),c=bi,bi=$o(t.stateNode.containerInfo),kn(n,t,a),qn(t),bi=c,Ue&&ko&&(Tu=!0),Ue=r,ki=u;break;case 12:kn(n,t,a),qn(t);break;case 31:kn(n,t,a),qn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 13:kn(n,t,a),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(r!==null&&r.memoizedState!==null)&&(wu=V()),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 22:c=t.memoizedState!==null,g=r!==null&&r.memoizedState!==null;var E=En,L=ze,W=ki;En=E||c,ki=W||c,ze=L||g,kn(n,t,a),ze=L,ki=W,En=E,qn(t),u&8192&&(n=t.stateNode,n._visibility=c?n._visibility&-2:n._visibility|1,!c||r===null||g||En||ze||(n=g||ze,a=En,r=ze,En=c||En,ze=n,qa(t,2),En=a,ze=r),!c&&ki||xh(t,c)),u&4&&(n=t.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,bu(t,a))));break;case 19:kn(n,t,a),qn(t),u&4&&(n=t.updateQueue,n!==null&&(t.updateQueue=null,bu(t,n)));break;case 30:u&512&&(ze||r===null||Un(r,r.return)),u=Jp(),c=ko,g=(a&335544064)===a,E=t.memoizedProps,ko=g&&oa(E.default,E.update)!=="none",kn(n,t,a),qn(t),g&&r!==null&&Ue&&(t.flags|=4),ko=c,Ue=u;break;case 21:break;case 7:u&512&&(ze||r===null||Un(r,r.return)),r&&r.stateNode!==null&&(r.stateNode._fragmentFiber=t);default:kn(n,t,a),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,r=t.return;r!==null;){if(gg(r)){a=r;break}r=r.return}r=null;for(var u=t.return;u!==null;){if(oh(u)){var c=u.stateNode;r===null?r=[c]:r.push(c)}if(sh(u))break;u=u.return}var g=r;if(a==null)throw Error(s(160));switch(a.tag){case 27:var E=a.stateNode,L=ch(t);Su(t,L,E,g);break;case 5:var W=a.stateNode;a.flags&32&&(is(W,""),a.flags&=-33);var et=ch(t);Su(t,et,W,g);break;case 3:case 4:var ht=a.stateNode.containerInfo,k=ch(t);fh(t,k,ht,g);break;default:throw Error(s(161))}}catch($){Ie(t,t.return,$)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Ng(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Ng(n),n.tag===5&&n.flags&1024&&(n=n.stateNode,Fs=!0,n.reset(),Fs=!1),t=t.sibling}}function Ms(t,n){if(n.subtreeFlags&9270)for(n=n.child;n!==null;)Lg(n,t),n=n.sibling;else Eg(n)}function Lg(t,n){var a=t.alternate;if(a===null)hh(t,!1);else switch(t.tag){case 3:if(vh=qi=!1,xg(),Ms(n,t),!qi&&!Tu){if(t=Vi,t!==null)for(var r=0;r<t.length;r+=3){a=t[r];var u=t[r+1];S_(a,t[r+2]),a=a.ownerDocument.documentElement,a!==null&&a.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group("+u+")"})}t=n.containerInfo,t=t.nodeType===9?t.documentElement:t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName===""&&(t.style.viewTransitionName="none",t.animate({opacity:[0,0],pointerEvents:["none","none"]},{duration:0,fill:"forwards",pseudoElement:"::view-transition-group(root)"}),t.animate({width:[0,0],height:[0,0]},{duration:0,fill:"forwards",pseudoElement:"::view-transition"})),vh=!0}Vi=null;break;case 5:Ms(n,t);break;case 4:r=qi,qi=!1,Ms(n,t),qi&&(Tu=!0),qi=r;break;case 22:t.memoizedState===null&&(a.memoizedState!==null?hh(t,!1):Ms(n,t));break;case 30:r=qi,u=xg(),qi=!1,Ms(n,t),qi&&(t.flags|=4);var c=t.memoizedProps,g=t.stateNode;n=sa(c,g),g=sa(a.memoizedProps,g);var E=oa(c.default,c.update);E==="none"?n=!1:(c=a.memoizedState,a.memoizedState=null,a=t.child,Kn=0,n=gh(t,a,n,g,E,c,!0),Kn!==(c===null?0:c.length)&&(t.flags|=32)),(t.flags&4)!==0&&n?(ws(t,t.memoizedProps.onUpdate),Vi=u):u!==null&&(u.push.apply(u,Vi),Vi=u),qi=(t.flags&32)!==0?!0:r;break;default:Ms(n,t)}}function Yi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ag(t,n.alternate,n),n=n.sibling}function qa(t,n){for(t=t.child;t!==null;){var a=t,r=n;switch(a.tag){case 0:case 11:case 14:case 15:ka(4,a,a.return),qa(a,r);break;case 1:Un(a,a.return);var u=a.stateNode;typeof u.componentWillUnmount=="function"&&pg(a,a.return,u),qa(a,r);break;case 27:(r&2)!==0&&N_(a.stateNode,a.type,a.memoizedProps);case 5:Un(a,a.return),a.tag!==5&&a.tag!==27||Xo(a),qa(a,r);break;case 6:Xo(a);break;case 26:Un(a,a.return),u=a.stateNode,a.memoizedState!==null||u===null||ze||u.parentNode.removeChild(u),qa(a,r);break;case 22:a.memoizedState===null&&qa(a,r);break;case 30:Un(a,a.return),qa(a,r);break;case 7:Un(a,a.return);default:qa(a,r)}t=t.sibling}}function Ri(t,n,a){for(a=(n.subtreeFlags&8772)!==0?a:a&-2,n=n.child;n!==null;){var r=n.alternate,u=t,c=n,g=c.flags,E=(a&1)!==0;switch(c.tag){case 0:case 11:case 15:Ri(u,c,a),Vo(4,c);break;case 1:if(Ri(u,c,a),r=c,u=r.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(et){Ie(r,r.return,et)}if(r=c,u=r.updateQueue,u!==null){var L=r.stateNode;try{var W=u.shared.hiddenCallbacks;if(W!==null)for(u.shared.hiddenCallbacks=null,u=0;u<W.length;u++)e0(W[u],L)}catch(et){Ie(r,r.return,et)}}E&&g&64&&dg(c),Gi(c,c.return);break;case 27:(a&2)!==0&&_g(c);case 5:c.tag!==5&&c.tag!==27||mg(c),Ri(u,c,a),E&&r===null&&g&4&&lh(c),Gi(c,c.return);break;case 6:mg(c);break;case 26:L=c.stateNode,c.memoizedState!==null||L===null||En||ad($o(L.ownerDocument),c.type,L),Ri(u,c,a),E&&r===null&&g&4&&lh(c),Gi(c,c.return);break;case 12:Ri(u,c,a);break;case 31:Ri(u,c,a),E&&g&4&&wg(u,c);break;case 13:Ri(u,c,a),E&&g&4&&Dg(u,c);break;case 22:c.memoizedState===null&&Ri(u,c,a),Gi(c,c.return);break;case 30:Ri(u,c,a),Gi(c,c.return);break;case 7:Gi(c,c.return);default:Ri(u,c,a)}n=n.sibling}}function yh(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&wo(a))}function Mh(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&wo(t))}function xi(t,n,a,r){var u=(a&335544064)===a;if(n.subtreeFlags&(u?10262:10256))for(n=n.child;n!==null;)Og(t,n,a,r),n=n.sibling;else u&&Mg(n)}function Og(t,n,a,r){var u=(a&335544064)===a;u&&n.alternate===null&&n.return!==null&&n.return.alternate!==null&&Eu(n);var c=n.flags;switch(n.tag){case 0:case 11:case 15:xi(t,n,a,r),c&2048&&Vo(9,n);break;case 1:xi(t,n,a,r);break;case 3:xi(t,n,a,r),u&&vh&&(t=t.containerInfo,t=t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,t.style.viewTransitionName==="root"&&(t.style.viewTransitionName=""),t=t.ownerDocument.documentElement,t!==null&&t.style.viewTransitionName==="none"&&(t.style.viewTransitionName="")),c&2048&&(c=null,n.alternate!==null&&(c=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==c&&(n.refCount++,c!=null&&wo(c)));break;case 12:if(c&2048){xi(t,n,a,r),c=n.stateNode;try{var g=n.memoizedProps,E=g.id,L=g.onPostCommit;typeof L=="function"&&L(E,n.alternate===null?"mount":"update",c.passiveEffectDuration,-0)}catch(W){Ie(n,n.return,W)}}else xi(t,n,a,r);break;case 31:xi(t,n,a,r);break;case 13:xi(t,n,a,r);break;case 23:break;case 22:g=n.stateNode,E=n.alternate,n.memoizedState!==null?(u&&E!==null&&E.memoizedState===null&&Eu(E),g._visibility&2?xi(t,n,a,r):qo(t,n)):(u&&E!==null&&E.memoizedState!==null&&Eu(n),g._visibility&2?xi(t,n,a,r):(g._visibility|=2,Es(t,n,a,r,(n.subtreeFlags&10256)!==0||!1))),c&2048&&yh(E,n);break;case 24:xi(t,n,a,r),c&2048&&Mh(n.alternate,n);break;case 30:u&&(c=n.alternate,c!==null&&(Xi(c.child,!0),Xi(n.child,!0))),xi(t,n,a,r);break;default:xi(t,n,a,r)}}function Es(t,n,a,r,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var c=t,g=n,E=a,L=r,W=g.flags;switch(g.tag){case 0:case 11:case 15:Es(c,g,E,L,u),Vo(8,g);break;case 23:break;case 22:var et=g.stateNode;g.memoizedState!==null?et._visibility&2?Es(c,g,E,L,u):qo(c,g):(et._visibility|=2,Es(c,g,E,L,u)),u&&W&2048&&yh(g.alternate,g);break;case 24:Es(c,g,E,L,u),u&&W&2048&&Mh(g.alternate,g);break;default:Es(c,g,E,L,u)}n=n.sibling}}function qo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,r=n,u=r.flags;switch(r.tag){case 22:qo(a,r),u&2048&&yh(r.alternate,r);break;case 24:qo(a,r),u&2048&&Mh(r.alternate,r);break;default:qo(a,r)}n=n.sibling}}var zr=8192;function Pr(t,n,a){if(t.subtreeFlags&zr)for(t=t.child;t!==null;)zg(t,n,a),t=t.sibling}function zg(t,n,a){switch(t.tag){case 26:Pr(t,n,a),t.flags&zr&&(t.memoizedState!==null?MM(a,bi,t.memoizedState,t.memoizedProps):(t=t.stateNode,(n&335544128)===n&&V_(a,t)));break;case 5:Pr(t,n,a),t.flags&zr&&(t=t.stateNode,(n&335544128)===n&&V_(a,t));break;case 3:case 4:var r=bi;bi=$o(t.stateNode.containerInfo),Pr(t,n,a),bi=r;break;case 22:t.memoizedState===null&&(r=t.alternate,r!==null&&r.memoizedState!==null?(r=zr,zr=16777216,Pr(t,n,a),zr=r):Pr(t,n,a));break;case 30:if((t.flags&zr)!==0&&(r=t.memoizedProps.name,r!=null&&r!=="auto")){var u=t.stateNode;u.paired=null,si===null&&(si=new Map),si.set(r,u)}Pr(t,n,a);break;default:Pr(t,n,a)}}function Pg(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Yo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,Bg(r,t)}Pg(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Ig(t),t=t.sibling}function Ig(t){switch(t.tag){case 0:case 11:case 15:Yo(t),t.flags&2048&&ka(9,t,t.return);break;case 3:Yo(t);break;case 12:Yo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,Ru(t)):Yo(t);break;default:Yo(t)}}function Ru(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var r=n[a];Tn=r,Bg(r,t)}Pg(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ka(8,n,n.return),Ru(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,Ru(n));break;default:Ru(n)}t=t.sibling}}function Bg(t,n){for(;Tn!==null;){var a=Tn;switch(a.tag){case 0:case 11:case 15:ka(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var r=a.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:wo(a.memoizedState.cache)}if(r=a.child,r!==null)r.return=a,Tn=r;else t:for(a=t;Tn!==null;){r=Tn;var u=r.sibling,c=r.return;if(Rg(r),r===a){Tn=null;break t}if(u!==null){u.return=c,Tn=u;break t}Tn=c}}}var _y={getCacheForType:function(t){var n=Cn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(un).controller.signal}},vy=typeof WeakMap=="function"?WeakMap:Map,Le=0,ke=null,_e=null,Me=0,Pe=0,oi=null,Ya=!1,Ts=!1,Eh=!1,ga=0,an=0,Wa=0,Ir=0,Cu=0,li=0,As=0,Wo=null,Jn=null,Th=!1,wu=0,Fg=0,Du=1/0,Uu=null,ja=null,en=0,Ci=null,Br=null,Wi=0,Ah=0,bh=null,Hg=null,bs=null,Rs=null,Cs=null,jo=0,Nu=null;function ui(){return(Le&2)!==0&&Me!==0?Me&-Me:bt.T!==null?Ph():K()}function Gg(){if(li===0)if((Me&536870912)===0||de){var t=vr;vr<<=1,(vr&3932160)===0&&(vr=262144),li=t}else li=536870912;return t=wn.current,t!==null&&(t.flags|=32),li}function ws(t,n){if(n!=null){var a=t.stateNode,r=a.ref;r===null&&(r=a.ref=y_(sa(t.memoizedProps,a))),Rs===null&&(Rs=[]),Rs.push(n.bind(null,r))}}function $n(t,n,a){(t===ke&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)&&(Ds(t,0),Za(t,Me,li,!1)),xr(t,a),((Le&2)===0||t!==ke)&&(t===ke&&((Le&2)===0&&(Ir|=a),an===4&&Za(t,Me,li,!1)),ji(t))}function Vg(t,n,a){if((Le&6)!==0)throw Error(s(327));var r=!a&&(n&127)===0&&(n&t.expiredLanes)===0||wa(t,n),u=r?yy(t,n):Ch(t,n,!0),c=r;do{if(u===0){Ts&&!r&&Za(t,n,0,!1);break}else{if(a=t.current.alternate,c&&!xy(a)){u=Ch(t,n,!1),c=!1;continue}if(u===2){if(c=n,t.errorRecoveryDisabledLanes&c)var g=0;else g=t.pendingLanes&-536870913,g=g!==0?g:g&536870912?536870912:0;if(g!==0){n=g;t:{var E=t;u=Wo;var L=E.current.memoizedState.isDehydrated;if(L&&(Ds(E,g).flags|=256),g=Ch(E,g,!1),g!==2&&g!==6){if(Eh&&!L){E.errorRecoveryDisabledLanes|=c,Ir|=c,u=4;break t}c=Jn,Jn=u,c!==null&&(Jn===null?Jn=c:Jn.push.apply(Jn,c))}u=g}if(c=!1,u!==2)continue}}if(u===1){Ds(t,0),Za(t,n,0,!0);break}t:{switch(r=t,c=u,c){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n&&(n&62914560)!==n)break;case 6:Za(r,n,li,!Ya);break t;case 2:Jn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=wu+300-V(),10<u)){if(Za(r,n,li,!Ya),na(r,0,!0)!==0)break t;Wi=n,r.timeoutHandle=Wh(Xg.bind(null,r,a,Jn,Uu,Th,n,li,Ir,As,Ya,c,"Throttled",-0,0),u);break t}Xg(r,a,Jn,Uu,Th,n,li,Ir,As,Ya,c,null,-0,0)}}break}while(!0);ji(t)}function Xg(t,n,a,r,u,c,g,E,L,W,et,ht,k,$){t.timeoutHandle=-1;var Ct=n.subtreeFlags,Xt=(c&335544064)===c;if(ht=null,(Xt||Ct&8192||(Ct&16785408)===16785408)&&(ht={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Bi},si=null,zg(n,c,ht),Xt&&(Ct=ht,Xt=t.containerInfo,Xt=(Xt.nodeType===9?Xt:Xt.ownerDocument).__reactViewTransition,Xt!=null&&(Ct.count++,Ct.waitingForViewTransition=!0,Ct=nl.bind(Ct),Xt.finished.then(Ct,Ct))),Ct=(c&62914560)===c?wu-V():(c&4194048)===c?Fg-V():0,Ct=EM(ht,Ct),Ct!==null)){Wi=c,t.cancelPendingCommit=Ct(Qg.bind(null,t,n,c,a,r,u,g,E,L,W,et,ht,null,k,$)),Za(t,c,g,!W);return}Qg(t,n,c,a,r,u,g,E,L,W,et,ht)}function xy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var r=0;r<a.length;r++){var u=a[r],c=u.getSnapshot;u=u.value;try{if(!ai(c(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Za(t,n,a,r){n=go(t,n),n&=~Cu,n&=~Ir,t.suspendedLanes|=n,t.pingedLanes&=~n,r&&(t.warmLanes|=n),r=t.expirationTimes;for(var u=n;0<u;){var c=31-zn(u),g=1<<c;r[c]=-1,u&=~g}a!==0&&Dl(t,a,n)}function Lu(){return(Le&6)===0?(Zo(0),!1):!0}function Rh(){if(_e!==null){if(Pe===0)var t=_e.return;else t=_e,ca=Ar=null,zf(t),gs=null,No=0,t=_e;for(;t!==null;)hg(t.alternate,t),t=t.return;_e=null}}function Ds(t,n){var a=t.timeoutHandle;return a!==-1&&(t.timeoutHandle=-1,Xy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Wi=0,Rh(),ke=t,_e=a=la(t.current,null),Me=n,Pe=0,oi=null,Ya=!1,Ts=wa(t,n),Eh=!1,As=li=Cu=Ir=Wa=an=0,Jn=Wo=null,Th=!1,ga=go(t,n),Gl(),a}function kg(t,n){ue=null,bt.H=hu,n===ms||n===Jl?(n=Qm(),Pe=3):n===Mf?(n=Qm(),Pe=4):Pe=n===Kf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,oi=n,_e===null&&(an=1,du(t,mi(n,t.current)))}function qg(){var t=wn.current;return t===null?!0:(Me&4194048)===Me?In===null:(Me&62914560)===Me||(Me&536870912)!==0?t===In:!1}function Yg(){var t=bt.H;return bt.H=hu,t===null?hu:t}function Wg(){var t=bt.A;return bt.A=_y,t}function Ou(){an=4,Ya||(Me&4194048)!==Me&&wn.current!==null||(Ts=!0),(Wa&134217727)===0&&(Ir&134217727)===0||ke===null||Za(ke,Me,li,!1)}function Ch(t,n,a){var r=Le;Le|=2;var u=Yg(),c=Wg();(ke!==t||Me!==n)&&(Uu=null,Ds(t,n)),n=!1;var g=an;t:do try{if(Pe!==0&&_e!==null){var E=_e,L=oi;switch(Pe){case 8:Rh(),g=6;break t;case 3:case 2:case 9:case 6:wn.current===null&&(n=!0);var W=Pe;if(Pe=0,oi=null,Us(t,E,L,W),a&&Ts){g=0;break t}break;default:W=Pe,Pe=0,oi=null,Us(t,E,L,W)}}Sy(),g=an;break}catch(et){kg(t,et)}while(!0);return n&&t.shellSuspendCounter++,ca=Ar=null,Le=r,bt.H=u,bt.A=c,_e===null&&(ke=null,Me=0,Gl()),g}function Sy(){for(;_e!==null;)jg(_e)}function yy(t,n){var a=Le;Le|=2;var r=Yg(),u=Wg();ke!==t||Me!==n?(Uu=null,Du=V()+500,Ds(t,n)):Ts=wa(t,n);t:do try{if(Pe!==0&&_e!==null){n=_e;var c=oi;e:switch(Pe){case 1:Pe=0,oi=null,Us(t,n,c,1);break;case 2:case 9:if(Zm(c)){Pe=0,oi=null,Zg(n);break}n=function(){Pe!==2&&Pe!==9||ke!==t||(Pe=7),ji(t)},c.then(n,n);break t;case 3:Pe=7;break t;case 4:Pe=5;break t;case 7:Zm(c)?(Pe=0,oi=null,Zg(n)):(Pe=0,oi=null,Us(t,n,c,7));break;case 5:var g=null;switch(_e.tag){case 26:g=_e.memoizedState;case 5:case 27:var E=_e;if(g?H_(g):E.stateNode.complete){Pe=0,oi=null;var L=E.sibling;if(L!==null)_e=L;else{var W=E.return;W!==null?(_e=W,zu(W)):_e=null}break e}}Pe=0,oi=null,Us(t,n,c,5);break;case 6:Pe=0,oi=null,Us(t,n,c,6);break;case 8:Rh(),an=6;break t;default:throw Error(s(462))}}My();break}catch(et){kg(t,et)}while(!0);return ca=Ar=null,bt.H=r,bt.A=u,Le=a,_e!==null?0:(ke=null,Me=0,Gl(),an)}function My(){for(;_e!==null&&!le();)jg(_e)}function jg(t){var n=cg(t.alternate,t,ga);t.memoizedProps=t.pendingProps,n===null?zu(t):_e=n}function Zg(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=ig(a,n,n.pendingProps,n.type,void 0,Me);break;case 11:n=ig(a,n,n.pendingProps,n.type.render,n.ref,Me);break;case 5:zf(n);var r=n;r===Mn&&(de?(Wl(r),r.tag===5&&r.stateNode!=null&&(We=r.stateNode)):(Wl(r),de=!0));default:hg(a,n),n=_e=Bm(n,ga),n=cg(a,n,ga)}t.memoizedProps=t.pendingProps,n===null?zu(t):_e=n}function Us(t,n,a,r){ca=Ar=null,zf(n),gs=null,No=0;var u=n.return;try{if(uy(t,u,n,a,Me)){an=1,du(t,mi(a,t.current)),_e=null;return}}catch(c){if(u!==null)throw _e=u,c;an=1,du(t,mi(a,t.current)),_e=null;return}n.flags&32768?(de||r===1?t=!0:Ts||(Me&536870912)!==0?t=!1:(Ya=t=!0,(r===2||r===9||r===3||r===6)&&(r=wn.current,r!==null&&r.tag===13&&(r.flags|=16384))),Kg(n,t)):zu(n)}function zu(t){var n=t;do{if((n.flags&32768)!==0){Kg(n,Ya);return}t=n.return;var a=dy(n.alternate,n,ga);if(a!==null){_e=a;return}if(n=n.sibling,n!==null){_e=n;return}_e=n=t}while(n!==null);an===0&&(an=5)}function Kg(t,n){do{var a=py(t.alternate,t);if(a!==null){a.flags&=32767,_e=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){_e=t;return}_e=t=a}while(t!==null);an=6,_e=null}function Qg(t,n,a,r,u,c,g,E,L,W,et,ht){t.cancelPendingCommit=null;do Pu();while(en!==0);if((Le&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));t===ke&&(_e=ke=null,Me=0),Br=n,Ci=t,Wi=a,bh=u,Hg=r,Ey(t,n,a,g,E,L,ht)}}function Ey(t,n,a,r,u,c,g){var E=n.lanes|n.childLanes;if(Ah=E,E|=uf,Fc(t,a,E,r,u,c),Rs=null,(a&335544064)===a?(Cs=QS(t),r=10262):(Cs=null,r=10256),(n.subtreeFlags&r)!==0||(n.flags&r)!==0?(t.callbackNode=null,t.callbackPriority=0,wy(Lt,function(){return Nh(),null})):(t.callbackNode=null,t.callbackPriority=0),yu=!1,r=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||r){r=bt.T,bt.T=null,u=It.p,It.p=2,c=Le,Le|=4;try{my(t,n,a)}finally{Le=c,It.p=u,bt.T=r}}en=1,yu?bs=Zy(g,t.containerInfo,Cs,wh,Dh,Ay,Uh,Nh,Ty):(wh(),Dh(),Uh())}function Ty(t){if(en!==0){var n=Ci.onRecoverableError;n(t,{componentStack:null})}}function Ay(){en===3&&(en=0,Lg(Br,Ci),en=4)}function wh(){if(en===1){en=0;var t=Ci,n=Br,a=Wi,r=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||r){r=bt.T,bt.T=null;var u=It.p;It.p=2;var c=Le;Le|=4;try{ko=Tu=!1,Ug(n,t,a),a=kh;var g=Cm(t.containerInfo),E=a.focusedElem,L=a.selectionRange;if(g!==E&&E&&E.ownerDocument&&Rm(E.ownerDocument.documentElement,E)){if(L!==null&&af(E)){var W=L.start,et=L.end;if(et===void 0&&(et=W),"selectionStart"in E)E.selectionStart=W,E.selectionEnd=Math.min(et,E.value.length);else{var ht=E.ownerDocument||document,k=ht&&ht.defaultView||window;if(k.getSelection){var $=k.getSelection(),Ct=E.textContent.length,Xt=Math.min(L.start,Ct),ce=L.end===void 0?Xt:Math.min(L.end,Ct);!$.extend&&Xt>ce&&(g=ce,ce=Xt,Xt=g);var Y=bm(E,Xt),B=bm(E,ce);if(Y&&B&&($.rangeCount!==1||$.anchorNode!==Y.node||$.anchorOffset!==Y.offset||$.focusNode!==B.node||$.focusOffset!==B.offset)){var J=ht.createRange();J.setStart(Y.node,Y.offset),$.removeAllRanges(),Xt>ce?($.addRange(J),$.extend(B.node,B.offset)):(J.setEnd(B.node,B.offset),$.addRange(J))}}}}for(ht=[],$=E;$=$.parentNode;)$.nodeType===1&&ht.push({element:$,left:$.scrollLeft,top:$.scrollTop});for(typeof E.focus=="function"&&E.focus(),E=0;E<ht.length;E++){var ft=ht[E];ft.element.scrollLeft=ft.left,ft.element.scrollTop=ft.top}}Fs=!!Xh,kh=Xh=null}finally{Le=c,It.p=u,bt.T=r}}t.current=n,en=2}}function Dh(){if(en===2){en=0;var t=Ci,n=Br,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=bt.T,bt.T=null;var r=It.p;It.p=2;var u=Le;Le|=4;try{Ag(t,n.alternate,n)}finally{Le=u,It.p=r,bt.T=a}}en=3}}function Uh(){if(en===4||en===3){en=0;var t=bs;bs=null,Fe();var n=Ci,a=Br,r=Wi,u=Hg,c=(r&335544064)===r?10262:10256;if((a.subtreeFlags&c)!==0||(a.flags&c)!==0?en=5:(en=0,Br=Ci=null,Jg(n,n.pendingLanes)),c=n.pendingLanes,c===0&&(ja=null),st(r),a=a.stateNode,Ze&&typeof Ze.onCommitFiberRoot=="function")try{Ze.onCommitFiberRoot(Ae,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=bt.T,c=It.p,It.p=2,bt.T=null;try{for(var g=n.onRecoverableError,E=0;E<u.length;E++){var L=u[E];g(L.value,{componentStack:L.stack})}}finally{bt.T=a,It.p=c}}if(u=Rs,g=Cs,Cs=null,u!==null&&(Rs=null,g===null&&(g=[]),t!==null))for(L=0;L<u.length;L++)a=(0,u[L])(g),a!==void 0&&t.finished.finally(a);(Wi&3)!==0&&Pu(),ji(n),c=n.pendingLanes,(r&261930)!==0&&(c&42)!==0?n===Nu?jo++:(jo=0,Nu=n):(jo=0,Nu=null),Zo(0)}}function Jg(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,wo(n)))}function Pu(){return bs!==null&&(bs.skipTransition(),bs=null),wh(),Dh(),Uh(),Nh()}function Nh(){if(en!==5)return!1;var t=Ci,n=Ah;Ah=0;var a=st(Wi),r=bt.T,u=It.p;try{It.p=32>a?32:a,bt.T=null,a=bh,bh=null;var c=Ci,g=Wi;if(en=0,Br=Ci=null,Wi=0,(Le&6)!==0)throw Error(s(331));var E=Le;if(Le|=4,Ig(c.current),Og(c,c.current,g,a),Le=E,Zo(0,!1),Ze&&typeof Ze.onPostCommitFiberRoot=="function")try{Ze.onPostCommitFiberRoot(Ae,c)}catch{}return!0}finally{It.p=u,bt.T=r,Jg(t,n)}}function $g(t,n,a){n=mi(a,n),n=Zf(t.stateNode,n,2),t=Ha(t,n,2),t!==null&&(xr(t,2),ji(t))}function Ie(t,n,a){if(t.tag===3)$g(t,t,a);else for(;n!==null;){if(n.tag===3){$g(n,t,a);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ja===null||!ja.has(r))){t=mi(a,t),a=Z0(2),r=Ha(n,a,2),r!==null&&(K0(a,r,n,t),xr(r,2),ji(r));break}}n=n.return}}function Lh(t,n,a){var r=t.pingCache;if(r===null){r=t.pingCache=new vy;var u=new Set;r.set(n,u)}else u=r.get(n),u===void 0&&(u=new Set,r.set(n,u));u.has(a)||(Eh=!0,u.add(a),t=by.bind(null,t,n,a),n.then(t,t))}function by(t,n,a){var r=t.pingCache;r!==null&&r.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,ke===t&&(Me&a)===a&&((an===4||an===3&&(Me&62914560)===Me&&300>V()-wu)&&(Le&2)===0?Ds(t,0):Cu|=a,As===Me&&(As=0)),ji(t)}function t_(t,n){n===0&&(n=wl()),t=Mr(t,n),t!==null&&(xr(t,n),ji(t))}function Ry(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),t_(t,a)}function Cy(t,n){var a=0;switch(t.tag){case 31:case 13:var r=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:r=t.stateNode;break;case 22:r=t.stateNode._retryCache;break;default:throw Error(s(314))}r!==null&&r.delete(n),t_(t,a)}function wy(t,n){return Ft(t,n)}var Ns=null,Ls=null,Oh=!1,Iu=!1,zh=!1,Ka=0;function ji(t){t!==Ls&&t.next===null&&(Ls===null?Ns=Ls=t:Ls=Ls.next=t),Iu=!0,Oh||(Oh=!0,Uy())}function Zo(t,n){if(!zh&&Iu){zh=!0;do for(var a=!1,r=Ns;r!==null;){if(t!==0){var u=r.pendingLanes;if(u===0)var c=0;else{var g=r.suspendedLanes,E=r.pingedLanes;c=(1<<31-zn(42|t)+1)-1,c&=u&~(g&~E),c=c&201326741?c&201326741|1:c?c|2:0}c!==0&&(a=!0,a_(r,c))}else c=Me,c=na(r,r===ke?c:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),(c&3)===0||wa(r,c)||(a=!0,a_(r,c));r=r.next}while(a);zh=!1}}function Dy(){e_()}function e_(){Iu=Oh=!1;var t=0;Ka!==0&&Vy()&&(t=Ka);for(var n=V(),a=null,r=Ns;r!==null;){var u=r.next,c=n_(r,n);c===0?(r.next=null,a===null?Ns=u:a.next=u,u===null&&(Ls=a)):(a=r,(t!==0||(c&3)!==0)&&(Iu=!0)),r=u}en!==0&&en!==5||Zo(t),Ka!==0&&(Ka=0)}function n_(t,n){for(var a=t.suspendedLanes,r=t.pingedLanes,u=t.expirationTimes,c=t.pendingLanes&-62914561;0<c;){var g=31-zn(c),E=1<<g,L=u[g];L===-1?((E&a)===0||(E&r)!==0)&&(u[g]=Bc(E,n)):L<=n&&(t.expiredLanes|=E),c&=~E}if(n=ke,a=Me,a=na(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r=t.callbackNode,a===0||t===n&&(Pe===2||Pe===9)||t.cancelPendingCommit!==null)return r!==null&&r!==null&&pe(r),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||wa(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(r!==null&&pe(r),st(a)){case 2:case 8:a=_t;break;case 32:a=Lt;break;case 268435456:a=oe;break;default:a=Lt}return r=i_.bind(null,t),a=Ft(a,r),t.callbackPriority=n,t.callbackNode=a,n}return r!==null&&r!==null&&pe(r),t.callbackPriority=2,t.callbackNode=null,2}function i_(t,n){if(en!==0&&en!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Pu()&&t.callbackNode!==a)return null;var r=Me;return r=na(t,t===ke?r:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),r===0?null:(Vg(t,r,n),n_(t,V()),t.callbackNode!=null&&t.callbackNode===a?i_.bind(null,t):null)}function a_(t,n){if(Pu())return null;Vg(t,n,!0)}function Uy(){ky(function(){(Le&6)!==0?Ft(lt,Dy):e_()})}function Ph(){if(Ka===0){var t=Cr;t===0&&(t=_r,_r<<=1,(_r&261888)===0&&(_r=256)),Ka=t}return Ka}function r_(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Ll(t)}function Ny(t,n,a,r,u){if(n==="submit"&&a&&a.stateNode===u){var c=r_((u[Dt]||null).action),g=r.submitter;g&&(n=(n=g[Dt]||null)?r_(n.formAction):g.getAttribute("formAction"),n!==null&&(c=n,g=null));var E=new Il("action","action",null,r,u);t.push({event:E,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(Ka!==0){var L=new FormData(u,g);kf(a,{pending:!0,data:L,method:u.method,action:c},null,L)}}else typeof c=="function"&&(E.preventDefault(),L=new FormData(u,g),kf(a,{pending:!0,data:L,method:u.method,action:c},c,L))},currentTarget:u}]})}}for(var Ih=0;Ih<lf.length;Ih++){var Bh=lf[Ih],Ly=Bh.toLowerCase(),Oy=Bh[0].toUpperCase()+Bh.slice(1);Ti(Ly,"on"+Oy)}Ti(Um,"onAnimationEnd"),Ti(Nm,"onAnimationIteration"),Ti(Lm,"onAnimationStart"),Ti("dblclick","onDoubleClick"),Ti("focusin","onFocus"),Ti("focusout","onBlur"),Ti(XS,"onTransitionRun"),Ti(kS,"onTransitionStart"),Ti(qS,"onTransitionCancel"),Ti(Om,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),ln("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ln("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ln("onBeforeInput",["compositionend","keypress","textInput","paste"]),ln("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ln("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zy=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Ko));function s_(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var r=t[a],u=r.event;r=r.listeners;t:{var c=void 0;if(n)for(var g=r.length-1;0<=g;g--){var E=r[g],L=E.instance,W=E.currentTarget;if(E=E.listener,L!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=W;try{c(u)}catch(et){Hl(et)}u.currentTarget=null,c=L}else for(g=0;g<r.length;g++){if(E=r[g],L=E.instance,W=E.currentTarget,E=E.listener,L!==c&&u.isPropagationStopped())break t;c=E,u.currentTarget=W;try{c(u)}catch(et){Hl(et)}u.currentTarget=null,c=L}}}}function ve(t,n){var a=n[ee];a===void 0&&(a=n[ee]=new Set);var r=t+"__bubble";a.has(r)||(o_(n,t,2,!1),a.add(r))}function Fh(t,n,a){var r=0;n&&(r|=4),o_(a,t,r,n)}var Bu="_reactListening"+Math.random().toString(36).slice(2);function Hh(t){if(!t[Bu]){t[Bu]=!0,Da.forEach(function(a){a!=="selectionchange"&&(zy.has(a)||Fh(a,!1,t),Fh(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Bu]||(n[Bu]=!0,Fh("selectionchange",!1,n))}}function o_(t,n,a,r){switch(K_(n)){case 2:var u=RM;break;case 8:u=CM;break;default:u=sd}a=u.bind(null,n,a,t),u=void 0,!Wc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),r?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function Gh(t,n,a,r,u){var c=r;if((n&1)===0&&(n&2)===0&&r!==null)t:for(;;){if(r===null)return;var g=r.tag;if(g===3||g===4){var E=r.stateNode.containerInfo;if(E===u)break;if(g===4)for(g=r.return;g!==null;){var L=g.tag;if((L===3||L===4)&&g.stateNode.containerInfo===u)return;g=g.return}for(;E!==null;){if(g=Yt(E),g===null)return;if(L=g.tag,L===5||L===6||L===26||L===27){r=c=g;continue t}E=E.parentNode}}r=r.return}om(function(){var W=c,et=qc(a),ht=[];t:{var k=zm.get(t);if(k!==void 0){var $=Il,Ct=t;switch(t){case"keypress":if(zl(a)===0)break t;case"keydown":case"keyup":$=xS;break;case"focusin":Ct="focus",$=Qc;break;case"focusout":Ct="blur",$=Qc;break;case"beforeblur":case"afterblur":$=Qc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$=cm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$=oS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$=TS;break;case Um:case Nm:case Lm:$=cS;break;case Om:$=bS;break;case"scroll":case"scrollend":$=rS;break;case"wheel":$=CS;break;case"copy":case"cut":case"paste":$=hS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$=hm;break;case"submit":$=MS;break;case"toggle":case"beforetoggle":$=DS}var Xt=(n&4)!==0,ce=!Xt&&(t==="scroll"||t==="scrollend"),Y=Xt?k!==null?k+"Capture":null:k;Xt=[];for(var B=W,J;B!==null;){var ft=B;if(J=ft.stateNode,ft=ft.tag,ft!==5&&ft!==26&&ft!==27||J===null||Y===null||(ft=vo(B,Y),ft!=null&&Xt.push(Qo(B,ft,J))),ce)break;B=B.return}0<Xt.length&&(k=new $(k,Ct,null,a,et),ht.push({event:k,listeners:Xt}))}}if((n&7)===0){t:{if($=t==="mouseover"||t==="pointerover",k=t==="mouseout"||t==="pointerout",$&&a!==kc&&(Ct=a.relatedTarget||a.fromElement)&&(Yt(Ct)||Ct[Qt]))break t;(k||$)&&(Ct=et.window===et?et:($=et.ownerDocument)?$.defaultView||$.parentWindow:window,k?($=a.relatedTarget||a.toElement,k=W,$=$?Yt($):null,$!==null&&(ce=f($),Xt=$.tag,$!==ce||Xt!==5&&Xt!==27&&Xt!==6)&&($=null)):(k=null,$=W),k!==$&&(Xt=cm,ft="onMouseLeave",Y="onMouseEnter",B="mouse",(t==="pointerout"||t==="pointerover")&&(Xt=hm,ft="onPointerLeave",Y="onPointerEnter",B="pointer"),ce=k==null?Ct:ye(k),J=$==null?Ct:ye($),Ct=new Xt(ft,B+"leave",k,a,et),Ct.target=ce,Ct.relatedTarget=J,ft=null,Yt(et)===W&&(Xt=new Xt(Y,B+"enter",$,a,et),Xt.target=J,Xt.relatedTarget=ce,ft=Xt),ce=ft,Xt=k&&$?I(k,$,Py):null,k!==null&&l_(ht,Ct,k,Xt,!1),$!==null&&ce!==null&&l_(ht,ce,$,Xt,!0)))}t:{if(k=W?ye(W):window,$=k.nodeName&&k.nodeName.toLowerCase(),$==="select"||$==="input"&&k.type==="file")var Bt=Sm;else if(vm(k))if(ym)Bt=HS;else{Bt=BS;var Ee=IS}else $=k.nodeName,!$||$.toLowerCase()!=="input"||k.type!=="checkbox"&&k.type!=="radio"?W&&Xc(W.elementType)&&(Bt=Sm):Bt=FS;if(Bt&&(Bt=Bt(t,W))){xm(ht,Bt,a,et);break t}Ee&&Ee(t,k,W)}switch(Ee=W?ye(W):window,t){case"focusin":(vm(Ee)||Ee.contentEditable==="true")&&(os=Ee,rf=W,bo=null);break;case"focusout":bo=rf=os=null;break;case"mousedown":sf=!0;break;case"contextmenu":case"mouseup":case"dragend":sf=!1,wm(ht,a,et);break;case"selectionchange":if(VS)break;case"keydown":case"keyup":wm(ht,a,et)}var Wt;if($c)t:{switch(t){case"compositionstart":var $t="onCompositionStart";break t;case"compositionend":$t="onCompositionEnd";break t;case"compositionupdate":$t="onCompositionUpdate";break t}$t=void 0}else ss?gm(t,a)&&($t="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&($t="onCompositionStart");$t&&(dm&&a.locale!=="ko"&&(ss||$t!=="onCompositionStart"?$t==="onCompositionEnd"&&ss&&(Wt=lm()):(Ua=et,jc="value"in Ua?Ua.value:Ua.textContent,ss=!0)),Ee=Fu(W,$t),0<Ee.length&&($t=new fm($t,t,null,a,et),ht.push({event:$t,listeners:Ee}),Wt?$t.data=Wt:(Wt=_m(a),Wt!==null&&($t.data=Wt)))),(Wt=NS?LS(t,a):OS(t,a))&&($t=Fu(W,"onBeforeInput"),0<$t.length&&(Ee=new fm("onBeforeInput","beforeinput",null,a,et),ht.push({event:Ee,listeners:$t}),Ee.data=Wt)),Ny(ht,t,W,a,et)}s_(ht,n)})}function Qo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Fu(t,n){for(var a=n+"Capture",r=[];t!==null;){var u=t,c=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||c===null||(u=vo(t,a),u!=null&&r.unshift(Qo(t,u,c)),u=vo(t,n),u!=null&&r.push(Qo(t,u,c))),t.tag===3)return r;t=t.return}return[]}function Py(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function l_(t,n,a,r,u){for(var c=n._reactName,g=[];a!==null&&a!==r;){var E=a,L=E.alternate,W=E.stateNode;if(E=E.tag,L!==null&&L===r)break;E!==5&&E!==26&&E!==27||W===null||(L=W,u?(W=vo(a,c),W!=null&&g.unshift(Qo(a,W,L))):u||(W=vo(a,c),W!=null&&g.push(Qo(a,W,L)))),a=a.return}g.length!==0&&t.push({event:n,listeners:g})}var Iy=/\r\n?/g,By=/\u0000|\uFFFD/g;function u_(t){return(typeof t=="string"?t:""+t).replace(Iy,`
`).replace(By,"")}function c_(t,n){return n=u_(n),u_(t)===n}function Be(t,n,a,r,u,c){switch(a){case"children":if(typeof r=="string")n==="body"||n==="textarea"&&r===""||is(t,r);else if(typeof r=="number"||typeof r=="bigint")n!=="body"&&is(t,""+r);else return;break;case"className":Nl(t,"class",r);break;case"tabIndex":Nl(t,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":Nl(t,a,r);break;case"style":rm(t,r,c);return;case"data":if(n!=="object"){Nl(t,"data",r);break}case"src":case"href":if(r===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(r==null||typeof r=="function"||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ll(r),t.setAttribute(a,r);break;case"action":case"formAction":if(typeof r=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof c=="function"&&(a==="formAction"?(n!=="input"&&Be(t,n,"name",u.name,u,null),Be(t,n,"formEncType",u.formEncType,u,null),Be(t,n,"formMethod",u.formMethod,u,null),Be(t,n,"formTarget",u.formTarget,u,null)):(Be(t,n,"encType",u.encType,u,null),Be(t,n,"method",u.method,u,null),Be(t,n,"target",u.target,u,null)));if(r==null||typeof r=="symbol"||typeof r=="boolean"){t.removeAttribute(a);break}r=Ll(r),t.setAttribute(a,r);break;case"onClick":r!=null&&(t.onclick=Bi);return;case"onScroll":r!=null&&ve("scroll",t);return;case"onScrollEnd":r!=null&&ve("scrollend",t);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"multiple":t.multiple=r&&typeof r!="function"&&typeof r!="symbol";break;case"muted":t.muted=r&&typeof r!="function"&&typeof r!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(r==null||typeof r=="function"||typeof r=="boolean"||typeof r=="symbol"){t.removeAttribute("xlink:href");break}a=Ll(r),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"credentialless":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":r===!0?t.setAttribute(a,""):r!==!1&&r!=null&&typeof r!="function"&&typeof r!="symbol"?t.setAttribute(a,r):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":r!=null&&typeof r!="function"&&typeof r!="symbol"&&!isNaN(r)&&1<=r?t.setAttribute(a,r):t.removeAttribute(a);break;case"rowSpan":case"start":r==null||typeof r=="function"||typeof r=="symbol"||isNaN(r)?t.removeAttribute(a):t.setAttribute(a,r);break;case"popover":ve("beforetoggle",t),ve("toggle",t),Ul(t,"popover",r);break;case"xlinkActuate":aa(t,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":aa(t,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":aa(t,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":aa(t,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":aa(t,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":aa(t,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":aa(t,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":aa(t,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":aa(t,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":Ul(t,"is",r);break;case"innerText":case"textContent":return;default:if(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")a=iS.get(a)||a,Ul(t,a,r);else return}Ue=!0}function Vh(t,n,a,r,u,c){switch(a){case"style":rm(t,r,c);return;case"dangerouslySetInnerHTML":if(r!=null){if(typeof r!="object"||!("__html"in r))throw Error(s(61));if(a=r.__html,a!=null){if(u.children!=null)throw Error(s(60));(c!=null?c.__html:void 0)!==a&&(t.innerHTML=a)}}break;case"children":if(typeof r=="string")is(t,r);else if(typeof r=="number"||typeof r=="bigint")is(t,""+r);else return;break;case"onScroll":r!=null&&ve("scroll",t);return;case"onScrollEnd":r!=null&&ve("scrollend",t);return;case"onClick":r!=null&&(t.onclick=Bi);return;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":return;case"innerText":case"textContent":return;default:if(!Xe.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),c=a.slice(2,u?a.length-7:void 0),n=t[Dt]||null,n=n!=null?n[a]:null,typeof n=="function"&&t.removeEventListener(c,n,u),typeof r=="function")){typeof n!="function"&&n!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(c,r,u);break t}Ue=!0,a in t?t[a]=r:r===!0?t.setAttribute(a,""):Ul(t,a,r)}return}Ue=!0}function Nn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ve("error",t),ve("load",t);var r=!1,u=!1,c;for(c in a)if(a.hasOwnProperty(c)){var g=a[c];if(g!=null)switch(c){case"src":r=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,c,g,a,null)}}u&&Be(t,n,"srcSet",a.srcSet,a,null),r&&Be(t,n,"src",a.src,a,null);return;case"input":ve("invalid",t);var E=c=g=u=null,L=null,W=null;for(r in a)if(a.hasOwnProperty(r)){var et=a[r];if(et!=null)switch(r){case"name":u=et;break;case"type":g=et;break;case"checked":L=et;break;case"defaultChecked":W=et;break;case"value":c=et;break;case"defaultValue":E=et;break;case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(s(137,n));break;default:Be(t,n,r,et,a,null)}}em(t,c,E,L,W,g,u,!1);return;case"select":ve("invalid",t),r=g=c=null;for(u in a)if(a.hasOwnProperty(u)&&(E=a[u],E!=null))switch(u){case"value":c=E;break;case"defaultValue":g=E;break;case"multiple":r=E;default:Be(t,n,u,E,a,null)}n=c,a=g,t.multiple=!!r,n!=null?ns(t,!!r,n,!1):a!=null&&ns(t,!!r,a,!0);return;case"textarea":ve("invalid",t),c=u=r=null;for(g in a)if(a.hasOwnProperty(g)&&(E=a[g],E!=null))switch(g){case"value":r=E;break;case"defaultValue":u=E;break;case"children":c=E;break;case"dangerouslySetInnerHTML":if(E!=null)throw Error(s(91));break;default:Be(t,n,g,E,a,null)}im(t,r,u,c);return;case"option":for(L in a)if(a.hasOwnProperty(L)&&(r=a[L],r!=null))switch(L){case"selected":t.selected=r&&typeof r!="function"&&typeof r!="symbol";break;default:Be(t,n,L,r,a,null)}return;case"dialog":ve("beforetoggle",t),ve("toggle",t),ve("cancel",t),ve("close",t);break;case"iframe":case"object":ve("load",t);break;case"video":case"audio":for(r=0;r<Ko.length;r++)ve(Ko[r],t);break;case"image":ve("error",t),ve("load",t);break;case"details":ve("toggle",t);break;case"embed":case"source":case"link":ve("error",t),ve("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(W in a)if(a.hasOwnProperty(W)&&(r=a[W],r!=null))switch(W){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Be(t,n,W,r,a,null)}return;default:if(Xc(n)){for(et in a)a.hasOwnProperty(et)&&(r=a[et],r!==void 0&&Vh(t,n,et,r,a,void 0));return}}for(E in a)a.hasOwnProperty(E)&&(r=a[E],r!=null&&Be(t,n,E,r,a,null))}var Fy={};function Hy(t,n,a,r){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,c=null,g=null,E=null,L=null,W=null,et=null;for($ in a){var ht=a[$];if(a.hasOwnProperty($)&&ht!=null)switch($){case"checked":break;case"value":break;case"defaultValue":L=ht;default:r.hasOwnProperty($)||Be(t,n,$,null,r,ht)}}for(var k in r){var $=r[k];if(ht=a[k],r.hasOwnProperty(k)&&($!=null||ht!=null))switch(k){case"type":$!==ht&&(Ue=!0),c=$;break;case"name":$!==ht&&(Ue=!0),u=$;break;case"checked":$!==ht&&(Ue=!0),W=$;break;case"defaultChecked":$!==ht&&(Ue=!0),et=$;break;case"value":$!==ht&&(Ue=!0),g=$;break;case"defaultValue":$!==ht&&(Ue=!0),E=$;break;case"children":case"dangerouslySetInnerHTML":if($!=null)throw Error(s(137,n));break;default:$!==ht&&Be(t,n,k,$,r,ht)}}Gc(t,g,E,L,W,et,c,u);return;case"select":$=g=E=k=null;for(c in a)if(L=a[c],a.hasOwnProperty(c)&&L!=null)switch(c){case"value":break;case"multiple":$=L;default:r.hasOwnProperty(c)||Be(t,n,c,null,r,L)}for(u in r)if(c=r[u],L=a[u],r.hasOwnProperty(u)&&(c!=null||L!=null))switch(u){case"value":c!==L&&(Ue=!0),k=c;break;case"defaultValue":c!==L&&(Ue=!0),E=c;break;case"multiple":c!==L&&(Ue=!0),g=c;default:c!==L&&Be(t,n,u,c,r,L)}n=E,a=g,r=$,k!=null?ns(t,!!a,k,!1):!!r!=!!a&&(n!=null?ns(t,!!a,n,!0):ns(t,!!a,a?[]:"",!1));return;case"textarea":$=k=null;for(E in a)if(u=a[E],a.hasOwnProperty(E)&&u!=null&&!r.hasOwnProperty(E))switch(E){case"value":break;case"children":break;default:Be(t,n,E,null,r,u)}for(g in r)if(u=r[g],c=a[g],r.hasOwnProperty(g)&&(u!=null||c!=null))switch(g){case"value":u!==c&&(Ue=!0),k=u;break;case"defaultValue":u!==c&&(Ue=!0),$=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==c&&Be(t,n,g,u,r,c)}nm(t,k,$);return;case"option":for(var Ct in a)if(k=a[Ct],a.hasOwnProperty(Ct)&&k!=null&&!r.hasOwnProperty(Ct))switch(Ct){case"selected":t.selected=!1;break;default:Be(t,n,Ct,null,r,k)}for(L in r)if(k=r[L],$=a[L],r.hasOwnProperty(L)&&k!==$&&(k!=null||$!=null))switch(L){case"selected":k!==$&&(Ue=!0),t.selected=k&&typeof k!="function"&&typeof k!="symbol";break;default:Be(t,n,L,k,r,$)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Xt in a)k=a[Xt],a.hasOwnProperty(Xt)&&k!=null&&!r.hasOwnProperty(Xt)&&Be(t,n,Xt,null,r,k);for(W in r)if(k=r[W],$=a[W],r.hasOwnProperty(W)&&k!==$&&(k!=null||$!=null))switch(W){case"children":case"dangerouslySetInnerHTML":if(k!=null)throw Error(s(137,n));break;default:Be(t,n,W,k,r,$)}return;default:if(Xc(n)){for(var ce in a)k=a[ce],a.hasOwnProperty(ce)&&k!==void 0&&!r.hasOwnProperty(ce)&&Vh(t,n,ce,void 0,r,k);for(et in r)k=r[et],$=a[et],!r.hasOwnProperty(et)||k===$||k===void 0&&$===void 0||Vh(t,n,et,k,r,$);return}}for(var Y in a)k=a[Y],a.hasOwnProperty(Y)&&k!=null&&!r.hasOwnProperty(Y)&&Be(t,n,Y,null,r,k);for(ht in r)k=r[ht],$=a[ht],!r.hasOwnProperty(ht)||k===$||k==null&&$==null||Be(t,n,ht,k,r,$)}function f_(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),r=0;r<a.length;r++){var u=a[r],c=u.transferSize,g=u.initiatorType,E=u.duration;if(c&&E&&f_(g)){for(g=0,E=u.responseEnd,r+=1;r<a.length;r++){var L=a[r],W=L.startTime;if(W>E)break;var et=L.transferSize,ht=L.initiatorType;et&&f_(ht)&&(L=L.responseEnd,g+=et*(L<E?1:(E-W)/(L-W)))}if(--r,n+=8*(c+g)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Xh=null,kh=null;function Jo(t){return t.nodeType===9?t:t.ownerDocument}function h_(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function p_(t,n,a,r){return a=Jo(a).createElement(t),a[Et]=r,a[Dt]=n,Nn(a,t,n),Ke(a),a}function qh(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Yh=null;function Vy(){var t=window.event;return t&&t.type==="popstate"?t===Yh?!1:(Yh=t,!0):(Yh=null,!1)}var Wh=typeof setTimeout=="function"?setTimeout:void 0,Xy=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,g_=typeof requestAnimationFrame=="function"?requestAnimationFrame:Wh,ky=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(t){return m_.resolve(null).then(t).catch(qy)}:Wh;function qy(t){setTimeout(function(){throw t})}function Qa(t){return t==="head"}function __(t,n){var a=n,r=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(r===0){t.removeChild(u),Hs(n);return}r--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")r++;else if(a==="html")ed(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,ed(a);for(var c=a.firstChild;c;){var g=c.nextSibling,E=c.nodeName;c[Ye]||E==="SCRIPT"||E==="STYLE"||E==="LINK"&&c.rel.toLowerCase()==="stylesheet"||a.removeChild(c),c=g}}else a==="body"&&ed(t.ownerDocument.body);a=u}while(a);Hs(n)}function v_(t,n){var a=t;t=0;do{var r=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),r&&r.nodeType===8)if(a=r.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=r}while(a)}function x_(t,n,a){if(n=CSS.escape(n)!==n?"r-"+btoa(n).replace(/=/g,""):n,t.style.viewTransitionName=n,a!=null&&(t.style.viewTransitionClass=a),a=getComputedStyle(t),a.display==="inline"){if(n=t.getClientRects(),n.length===1)var r=1;else for(var u=r=0;u<n.length;u++){var c=n[u];0<c.width&&0<c.height&&r++}r===1&&(t=t.style,t.display=n.length===1?"inline-block":"block",t.marginTop="-"+a.paddingTop,t.marginBottom="-"+a.paddingBottom)}}function S_(t,n){t=t.style,n=n.style;var a=n!=null?n.hasOwnProperty("viewTransitionName")?n.viewTransitionName:n.hasOwnProperty("view-transition-name")?n["view-transition-name"]:null:null;t.viewTransitionName=a==null||typeof a=="boolean"?"":(""+a).trim(),a=n!=null?n.hasOwnProperty("viewTransitionClass")?n.viewTransitionClass:n.hasOwnProperty("view-transition-class")?n["view-transition-class"]:null:null,t.viewTransitionClass=a==null||typeof a=="boolean"?"":(""+a).trim(),t.display==="inline-block"&&(n==null?t.display=t.margin="":(a=n.display,t.display=a==null||typeof a=="boolean"?"":a,a=n.margin,a!=null?t.margin=a:(a=n.hasOwnProperty("marginTop")?n.marginTop:n["margin-top"],t.marginTop=a==null||typeof a=="boolean"?"":a,n=n.hasOwnProperty("marginBottom")?n.marginBottom:n["margin-bottom"],t.marginBottom=n==null||typeof n=="boolean"?"":n)))}function Yy(t,n,a){return a=a.ownerDocument.defaultView,{rect:t,abs:n.position==="absolute"||n.position==="fixed",clip:n.clipPath!=="none"||n.overflow!=="visible"||n.filter!=="none"||n.mask!=="none"||n.mask!=="none"||n.borderRadius!=="0px",view:0<=t.bottom&&0<=t.right&&t.top<=a.innerHeight&&t.left<=a.innerWidth}}function jh(t){var n=t.getBoundingClientRect(),a=getComputedStyle(t);return Yy(n,a,t)}function Wy(t){return t.documentElement.clientHeight}function jy(t){this.addEventListener("load",t),this.addEventListener("error",t)}function Zy(t,n,a,r,u,c,g,E,L){var W=n.nodeType===9?n:n.ownerDocument;try{var et=W.startViewTransition({update:function(){var k=W.defaultView,$=k.navigation&&k.navigation.transition,Ct=W.fonts.status;r();var Xt=[];if(Ct==="loaded"&&(Wy(W),W.fonts.status==="loading"&&Xt.push(W.fonts.ready)),Ct=Xt.length,t!==null)for(var ce=t.suspenseyImages,Y=0,B=0;B<ce.length;B++){var J=ce[B];if(!J.complete){var ft=J.getBoundingClientRect();if(0<ft.bottom&&0<ft.right&&ft.top<k.innerHeight&&ft.left<k.innerWidth){if(Y+=G_(J),Y>Vu){Xt.length=Ct;break}J=new Promise(jy.bind(J)),Xt.push(J)}}}if(0<Xt.length)return k=Promise.race([Promise.all(Xt),new Promise(function(Bt){return setTimeout(Bt,500)})]).then(u,u),($?Promise.allSettled([$.finished,k]):k).then(c,c);if(u(),$)return $.finished.then(c,c);c()},types:a});W.__reactViewTransition=et;var ht=[];return et.ready.then(function(){for(var k=W.documentElement.getAnimations({subtree:!0}),$=0;$<k.length;$++){var Ct=k[$],Xt=Ct.effect,ce=Xt.pseudoElement;if(ce!=null&&ce.startsWith("::view-transition")){ht.push(Ct),Ct=Xt.getKeyframes();for(var Y=ce=void 0,B=!0,J=0;J<Ct.length;J++){var ft=Ct[J],Bt=ft.width;if(ce===void 0)ce=Bt;else if(ce!==Bt){B=!1;break}if(Bt=ft.height,Y===void 0)Y=Bt;else if(Y!==Bt){B=!1;break}delete ft.width,delete ft.height,ft.transform==="none"&&delete ft.transform}B&&ce!==void 0&&Y!==void 0&&(Xt.setKeyframes(Ct),B=getComputedStyle(Xt.target,Xt.pseudoElement),B.width!==ce||B.height!==Y)&&(B=Ct[0],B.width=ce,B.height=Y,B=Ct[Ct.length-1],B.width=ce,B.height=Y,Xt.setKeyframes(Ct))}}g()},function(k){W.__reactViewTransition===et&&(W.__reactViewTransition=null);try{if(typeof k=="object"&&k!==null)switch(k.name){case"InvalidStateError":(k.message==="View transition was skipped because document visibility state is hidden."||k.message==="Skipping view transition because document visibility state has become hidden."||k.message==="Skipping view transition because viewport size changed."||k.message==="Transition was aborted because of invalid state")&&(k=null)}k!==null&&L(k)}finally{r(),u(),g()}}),et.finished.finally(function(){for(var k=0;k<ht.length;k++)ht[k].cancel();W.__reactViewTransition===et&&(W.__reactViewTransition=null),E()}),et}catch{return r(),u(),g(),null}}function Fr(t,n){this._scope=document.documentElement,this._selector="::view-transition-"+t+"("+n+")"}Fr.prototype.animate=function(t,n){return n=typeof n=="number"?{duration:n}:z({},n),n.pseudoElement=this._selector,this._scope.animate(t,n)},Fr.prototype.getAnimations=function(){for(var t=this._scope,n=this._selector,a=t.getAnimations({subtree:!0}),r=[],u=0;u<a.length;u++){var c=a[u].effect;c!==null&&c.target===t&&c.pseudoElement===n&&r.push(a[u])}return r},Fr.prototype.getComputedStyle=function(){return getComputedStyle(this._scope,this._selector)};function y_(t){return{name:t,group:new Fr("group",t),imagePair:new Fr("image-pair",t),old:new Fr("old",t),new:new Fr("new",t)}}function ci(t){this._fragmentFiber=t,this._observers=this._eventListeners=null}ci.prototype.addEventListener=function(t,n,a){var r=null,u=null;if(!(a!=null&&typeof a!="boolean"&&(r=a.signal||null,r!==null&&r.aborted))){this._eventListeners===null&&(this._eventListeners=[]);var c=this._eventListeners;if(E_(c,t,n,a)===-1){var g=this,E=n;a!=null&&typeof a!="boolean"&&a.once===!0&&(E=function(L){g.removeEventListener(t,n,a),typeof n=="function"?n.call(this,L):n.handleEvent(L)}),r!==null&&(u=g.removeEventListener.bind(g,t,n,a),r.addEventListener("abort",u,{once:!0}),u=r.removeEventListener.bind(r,"abort",u)),r=Os(a),c.push({type:t,listener:n,optionsOrUseCapture:a,attachedListener:E,cleanup:u}),m(this._fragmentFiber.child,!1,Ky,t,E,r)}this._eventListeners=c}};function Ky(t,n,a,r){return y(t).addEventListener(n,a,r),!1}ci.prototype.removeEventListener=function(t,n,a){var r=this._eventListeners;if(r!==null&&(n=E_(r,t,n,a),n!==-1)){var u=r[n];a=u.attachedListener;var c=u.cleanup;u=Os(u.optionsOrUseCapture),m(this._fragmentFiber.child,!1,Qy,t,a,u),r.splice(n,1),c!==null&&c()}};function Qy(t,n,a,r){return y(t).removeEventListener(n,a,r),!1}function Os(t){return t!=null&&typeof t!="boolean"&&(t.once===!0||t.signal instanceof AbortSignal)?{capture:t.capture,passive:t.passive}:t}function M_(t){return t==null?"c=0":typeof t=="boolean"?"c="+(t?"1":"0"):"c="+(t.capture?"1":"0")}function E_(t,n,a,r){if(t.length===0)return-1;r=M_(r);for(var u=0;u<t.length;u++){var c=t[u];if(c.type===n&&c.listener===a&&M_(c.optionsOrUseCapture)===r)return u}return-1}ci.prototype.dispatchEvent=function(t){var n=x(this._fragmentFiber);if(n===null)return!0;n=y(n);var a=this._eventListeners;if(a!==null&&0<a.length||!t.bubbles){var r=n.nodeType===9?n.createComment(""):document.createTextNode("");if(a)for(var u=0;u<a.length;u++){var c=a[u];r.addEventListener(c.type,c.attachedListener,Os(c.optionsOrUseCapture))}if(n.appendChild(r),t=r.dispatchEvent(t),a)for(u=0;u<a.length;u++)c=a[u],r.removeEventListener(c.type,c.attachedListener,Os(c.optionsOrUseCapture));return n.removeChild(r),t}return n.dispatchEvent(t)},ci.prototype.focus=function(t){m(this._fragmentFiber.child,!0,T_,t,void 0,void 0)};function T_(t,n){return t.tag===6?!1:(t=y(t),uM(t,n))}ci.prototype.focusLast=function(t){var n=[];m(this._fragmentFiber.child,!0,Zh,n,void 0,void 0);for(var a=n.length-1;0<=a&&!T_(n[a],t);a--);};function Zh(t,n){return n.push(t),!1}ci.prototype.blur=function(){var t=x(this._fragmentFiber);t!==null&&(t=y(t),t=Jo(t).activeElement,t!==null&&m(this._fragmentFiber.child,!1,Jy,t,void 0,void 0))};function Jy(t,n){return t.tag===6?!1:(t=y(t),t===n||t.contains(n)?(n.blur(),!0):!1)}ci.prototype.observeUsing=function(t){this._observers===null&&(this._observers=new Set),this._observers.add(t),m(this._fragmentFiber.child,!1,$y,t,void 0,void 0)};function $y(t,n){return t.tag===6||(t=y(t),n.observe(t)),!1}ci.prototype.unobserveUsing=function(t){var n=this._observers;if(n!==null&&n.has(t)){n.delete(t),m(this._fragmentFiber.child,!1,tM,t,void 0,void 0);for(var a=n=0;a<wi.length;a++){var r=wi[a];r.fragmentInstance===this&&r.observer===t?t.unobserve(r.instance):wi[n++]=r}wi.length=n}};function tM(t,n){return t.tag===6||(t=y(t),n.unobserve(t)),!1}var wi=[],Kh=!1;function eM(t,n,a){wi.push({fragmentInstance:t,observer:n,instance:a}),Kh||(Kh=!0,cM(function(){Kh=!1;var r=wi;wi=[];for(var u=0;u<r.length;u++){var c=r[u];c.observer.unobserve(c.instance)}}))}ci.prototype.getClientRects=function(){var t=[];return m(this._fragmentFiber.child,!1,nM,t,void 0,void 0),t};function nM(t,n){if(t.tag===6){t=t.stateNode;var a=t.ownerDocument.createRange();a.selectNodeContents(t),n.push.apply(n,a.getClientRects())}else t=y(t),n.push.apply(n,t.getClientRects());return!1}ci.prototype.getRootNode=function(t){var n=x(this._fragmentFiber);return n===null?this:y(n).getRootNode(t)},ci.prototype.compareDocumentPosition=function(t){var n=x(this._fragmentFiber);if(n===null)return Node.DOCUMENT_POSITION_DISCONNECTED;var a=[];m(this._fragmentFiber.child,!1,Zh,a,void 0,void 0);var r=y(n);if(a.length===0){if(a=r,M(this._fragmentFiber)){t:{for(n=this._fragmentFiber.return;n!==null;){if(n.tag===4){n=n.stateNode.containerInfo;break t}if(n.tag===3||n.tag===5||n.tag===27)break;n=n.return}n=null}n!=null&&(a=n)}n=this._fragmentFiber;var u=r=a.compareDocumentPosition(t);return a===t?u=Node.DOCUMENT_POSITION_CONTAINS:r&Node.DOCUMENT_POSITION_CONTAINED_BY&&(a=T(n)[1],a===null?u=Node.DOCUMENT_POSITION_PRECEDING:(t=y(a).compareDocumentPosition(t),u=t===0||t&Node.DOCUMENT_POSITION_FOLLOWING?Node.DOCUMENT_POSITION_FOLLOWING:Node.DOCUMENT_POSITION_PRECEDING)),u|=Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC}n=y(a[0]),u=y(a[a.length-1]);var c=M(this._fragmentFiber)?n.parentElement:r;if(c==null)return Node.DOCUMENT_POSITION_DISCONNECTED;r=c.compareDocumentPosition(n)&Node.DOCUMENT_POSITION_CONTAINED_BY,c=c.compareDocumentPosition(u)&Node.DOCUMENT_POSITION_CONTAINED_BY;var g=n.compareDocumentPosition(t),E=u.compareDocumentPosition(t),L=g&Node.DOCUMENT_POSITION_CONTAINED_BY||E&Node.DOCUMENT_POSITION_CONTAINED_BY;return E=r&&c&&g&Node.DOCUMENT_POSITION_FOLLOWING&&E&Node.DOCUMENT_POSITION_PRECEDING,n=r&&n===t||c&&u===t||L||E?Node.DOCUMENT_POSITION_CONTAINED_BY:!r&&n===t||!c&&u===t?Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC:g,n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC||iM(n,this._fragmentFiber,a[0],a[a.length-1],t)?n:Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC};function iM(t,n,a,r,u){var c=Yt(u);if(t&Node.DOCUMENT_POSITION_CONTAINED_BY){if(a=!!c)t:{for(;c!==null;){if(c.tag===7&&(c===n||c.alternate===n)){a=!0;break t}c=c.return}a=!1}return a}if(t&Node.DOCUMENT_POSITION_CONTAINS){if(c===null)return c=u.ownerDocument,u===c||u===c.documentElement||u===c.body;t:{for(c=n,n=x(n);c!==null;){if(!(c.tag!==5&&c.tag!==3&&c.tag!==27||c!==n&&c.alternate!==n)){c=!0;break t}c=c.return}c=!1}return c}return t&Node.DOCUMENT_POSITION_PRECEDING?((n=!!c)&&!(n=c===a)&&(n=I(a,c,X),n===null?n=!1:(m(n,!0,O,c,a),c=S,S=null,n=c!==null)),n):t&Node.DOCUMENT_POSITION_FOLLOWING?((n=!!c)&&!(n=c===r)&&(n=I(r,c,X),n===null?n=!1:(m(n,!0,U,c,r),c=S,P=S=null,n=c!==null)),n):!1}function A_(t,n){var a=t.ownerDocument.createRange();a.selectNodeContents(t),t=a.getBoundingClientRect(),window.scrollTo(window.scrollX+t.left,n?window.scrollY+t.top:window.scrollY+t.bottom-window.innerHeight)}ci.prototype.scrollIntoView=function(t){if(typeof t=="object")throw Error(s(566));var n=[];m(this._fragmentFiber.child,!1,Zh,n,void 0,void 0);var a=t!==!1;if(n.length===0){var r=T(this._fragmentFiber);if(r=a?r[1]||r[0]||x(this._fragmentFiber):r[0]||r[1],r===null)return;if(r.tag===6){t=y(r),A_(t,a);return}if(r=y(r),r.nodeType!==9){if(r.nodeType===11){a="host"in r?r.host:null,a!==null&&a.scrollIntoView(t);return}r.scrollIntoView(t)}}for(r=a?n.length-1:0;r!==(a?-1:n.length);){var u=n[r];u.tag===6?(u=y(u),A_(u,a)):y(u).scrollIntoView(t),r+=a?-1:1}};function aM(t,n){return t=y(t),b_(t,n),!1}function b_(t,n){t.reactFragments==null&&(t.reactFragments=new Set),t.reactFragments.add(n)}function R_(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.addEventListener(u.type,u.attachedListener,Os(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){for(var g=0,E=0;E<wi.length;E++){var L=wi[E];(L.fragmentInstance!==n||L.observer!==c||L.instance!==t)&&(wi[g++]=L)}wi.length=g,c.observe(t)}),b_(t,n))}function rM(t,n){var a=n._eventListeners;if(a!==null)for(var r=0;r<a.length;r++){var u=a[r];t.removeEventListener(u.type,u.attachedListener,Os(u.optionsOrUseCapture))}t.nodeType!==3&&(a=n._observers,a!==null&&a.forEach(function(c){typeof c.rootMargin=="string"?eM(n,c,t):c.unobserve(t)}),t.reactFragments!=null&&t.reactFragments.delete(n))}function Qh(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Qh(a),ge(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function sM(t,n,a,r){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!r&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(r){if(!t[Ye])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(c=t.getAttribute("rel"),c==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(c!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(c=t.getAttribute("src"),(c!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&c&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var c=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===c)return t}else return t;if(t=Si(t.nextSibling),t===null)break}return null}function oM(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=Si(t.nextSibling),t===null))return null;return t}function C_(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=Si(t.nextSibling),t===null))return null;return t}function Jh(t){return t.data==="$?"||t.data==="$~"}function $h(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function lM(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var r=function(){n(),a.removeEventListener("DOMContentLoaded",r)};a.addEventListener("DOMContentLoaded",r),t._reactRetry=r}}function Si(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var td=null;function w_(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return Si(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function D_(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function uM(t,n){function a(){r=!0}if(t.ownerDocument.activeElement===t)return!0;var r=!1;try{t.ownerDocument.addEventListener("focus",a,!0),(t.focus||HTMLElement.prototype.focus).call(t,n)}finally{t.ownerDocument.removeEventListener("focus",a,!0)}return r}function cM(t){g_(function(){g_(function(n){return t(n)})})}function U_(t,n,a){switch(n=Jo(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function N_(t,n,a){for(var r in a){var u=a[r];a.hasOwnProperty(r)&&u!=null&&Be(t,n,r,null,Fy,u)}a.dangerouslySetInnerHTML!=null&&(t.textContent=""),t.onclick===Bi&&(t.onclick=null),ge(t)}function ed(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);ge(t)}var yi=new Map,L_=new Set;function $o(t){if(typeof t.getRootNode=="function"){var n=t.getRootNode();if(n.nodeType===9||n.nodeType===11)return n}return t.nodeType===9?t:t.ownerDocument}var _a=It.d;It.d={f:fM,r:hM,D:dM,C:pM,L:mM,m:gM,X:vM,S:_M,M:xM};function fM(){var t=_a.f(),n=Lu();return t||n}function hM(t){var n=Je(t);n!==null&&n.tag===5&&n.type==="form"?z0(n):_a.r(t)}var zs=typeof document>"u"?null:document;function O_(t,n,a){var r=zs;if(r&&typeof n=="string"&&n){var u=di(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),L_.has(u)||(L_.add(u),t={rel:t,crossOrigin:a,href:n},r.querySelector(u)===null&&(n=r.createElement("link"),Nn(n,"link",t),Ke(n),r.head.appendChild(n)))}}function dM(t){_a.D(t),O_("dns-prefetch",t,null)}function pM(t,n){_a.C(t,n),O_("preconnect",t,n)}function mM(t,n,a){_a.L(t,n,a);var r=zs;if(r&&t&&n){var u='link[rel="preload"][as="'+di(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+di(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+di(a.imageSizes)+'"]')):u+='[href="'+di(t)+'"]';var c=u;switch(n){case"style":c=Ps(t);break;case"script":c=Is(t)}if(!(yi.has(c)||(t=z({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),yi.set(c,t),r.querySelector(u)!==null||n==="style"&&r.querySelector(tl(c))||n==="script"&&r.querySelector(el(c))))){var g=r.createElement("link");Nn(g,"link",t),n==="style"&&(g[Ve]=!0,g.onload=g.onerror=function(){Pn(g)}),Ke(g),r.head.appendChild(g)}}}function gM(t,n){_a.m(t,n);var a=zs;if(a&&t){var r=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+di(r)+'"][href="'+di(t)+'"]',c=u;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":c=Is(t)}if(!yi.has(c)&&(t=z({rel:"modulepreload",href:t},n),yi.set(c,t),a.querySelector(u)===null)){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(el(c)))return}r=a.createElement("link"),Nn(r,"link",t),Ke(r),a.head.appendChild(r)}}}function _M(t,n,a){_a.S(t,n,a);var r=zs;if(r&&t){var u=yn(r).hoistableStyles,c=Ps(t);n=n||"default";var g=u.get(c);if(!g){var E={loading:0,preload:null};if(g=r.querySelector(tl(c)))E.loading=5;else{t=z({rel:"stylesheet",href:t,"data-precedence":n},a),(a=yi.get(c))&&nd(t,a);var L=g=r.createElement("link");Ke(L),Nn(L,"link",t),L._p=new Promise(function(W,et){L.onload=W,L.onerror=et}),L.addEventListener("load",function(){E.loading|=1}),L.addEventListener("error",function(){E.loading|=2}),E.loading|=4,Hu(g,n,r)}g={type:"stylesheet",instance:g,count:1,state:E},u.set(c,g)}}}function vM(t,n){_a.X(t,n);var a=zs;if(a&&t){var r=yn(a).hoistableScripts,u=Is(t),c=r.get(u);c||(c=a.querySelector(el(u)),c||(t=z({src:t,async:!0},n),(n=yi.get(u))&&id(t,n),c=a.createElement("script"),Ke(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function xM(t,n){_a.M(t,n);var a=zs;if(a&&t){var r=yn(a).hoistableScripts,u=Is(t),c=r.get(u);c||(c=a.querySelector(el(u)),c||(t=z({src:t,async:!0,type:"module"},n),(n=yi.get(u))&&id(t,n),c=a.createElement("script"),Ke(c),Nn(c,"link",t),a.head.appendChild(c)),c={type:"script",instance:c,count:1,state:null},r.set(u,c))}}function z_(t,n,a,r){var u=(u=N.current)?$o(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(a=Ps(a.href),n=yn(u).hoistableStyles,r=n.get(a),r||(r={type:"style",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Ps(a.href);var c=yn(u).hoistableStyles,g=c.get(t);if(g||(u=u.ownerDocument||u,g={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},c.set(t,g),(c=u.querySelector(tl(t)))?c._p||(g.instance=c,g.state.loading=5):(c=yi.get(t),c||(c={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},yi.set(t,c)),SM(u,t,c,g.state))),n&&r===null)throw Error(s(528,""));return g}if(n&&r!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(a=Is(a),n=yn(u).hoistableScripts,r=n.get(a),r||(r={type:"script",instance:null,count:0,state:null},n.set(a,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function Ps(t){return'href="'+di(t)+'"'}function tl(t){return'link[rel="stylesheet"]['+t+"]"}function P_(t){return z({},t,{"data-precedence":t.precedence,precedence:null})}function SM(t,n,a,r){if(n=t.querySelector('link[rel="preload"][as="style"]['+n+"]")){if(n[Ve]!==!0){r.loading=1;return}}else n=t.createElement("link"),n[Ve]=!0,n.onload=n.onerror=Pn.bind(null,n),Nn(n,"link",a),Ke(n),t.head.appendChild(n);r.preload=n,n.addEventListener("load",function(){return r.loading|=1}),n.addEventListener("error",function(){return r.loading|=2})}function Is(t){return'[src="'+di(t)+'"]'}function el(t){return"script[async]"+t}function I_(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var r=t.querySelector('style[data-href~="'+di(a.href)+'"]');if(r)return n.instance=r,Ke(r),r;var u=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return r=(t.ownerDocument||t).createElement("style"),Ke(r),Nn(r,"style",u),Hu(r,a.precedence,t),n.instance=r;case"stylesheet":u=Ps(a.href);var c=t.querySelector(tl(u));if(c)return n.state.loading|=4,n.instance=c,Ke(c),c;r=P_(a),(u=yi.get(u))&&nd(r,u),c=(t.ownerDocument||t).createElement("link"),Ke(c);var g=c;return g._p=new Promise(function(E,L){g.onload=E,g.onerror=L}),Nn(c,"link",r),n.state.loading|=4,Hu(c,a.precedence,t),n.instance=c;case"script":return c=Is(a.src),(u=t.querySelector(el(c)))?(n.instance=u,Ke(u),u):(r=a,(u=yi.get(c))&&(r=z({},a),id(r,u)),t=t.ownerDocument||t,u=t.createElement("script"),Ke(u),Nn(u,"link",r),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(r=n.instance,n.state.loading|=4,Hu(r,a.precedence,t));return n.instance}function Hu(t,n,a){for(var r=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=r.length?r[r.length-1]:null,c=u,g=0;g<r.length;g++){var E=r[g];if(E.dataset.precedence===n)c=E;else if(c!==u)break}c?c.parentNode.insertBefore(t,c.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function nd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function id(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Gu=null;function B_(t,n,a){if(Gu===null){var r=new Map,u=Gu=new Map;u.set(a,r)}else u=Gu,r=u.get(a),r||(r=new Map,u.set(a,r));if(r.has(t))return r;for(r.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var c=a[u];if(!(c[Ye]||c[Et]||t==="link"&&c.getAttribute("rel")==="stylesheet")&&c.namespaceURI!=="http://www.w3.org/2000/svg"){var g=c.getAttribute(n)||"";g=t+g;var E=r.get(g);E?E.push(c):r.set(g,[c])}}return r}function ad(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function yM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function F_(t,n){return t==="img"&&n.src!=null&&n.src!==""&&n.onLoad==null&&n.loading!=="lazy"}function H_(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function G_(t){return(t.width||100)*(t.height||100)*(typeof devicePixelRatio=="number"?devicePixelRatio:1)*.25}function V_(t,n){typeof n.decode=="function"&&(t.imgCount++,n.complete||(t.imgBytes+=G_(n),t.suspenseyImages.push(n)),t=TM.bind(t),n.decode().then(t,t))}function MM(t,n,a,r){if(a.type==="stylesheet"&&(typeof r.media!="string"||matchMedia(r.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Ps(r.href),c=n.querySelector(tl(u));if(c){n=c._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=nl.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=c,Ke(c);return}c=n.ownerDocument||n,r=P_(r),(u=yi.get(u))&&nd(r,u),c=c.createElement("link"),Ke(c);var g=c;g._p=new Promise(function(E,L){g.onload=E,g.onerror=L}),Nn(c,"link",r),a.instance=c}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=nl.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Vu=0;function EM(t,n){return t.stylesheets&&t.count===0&&ku(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var r=setTimeout(function(){if(t.stylesheets&&ku(t,t.stylesheets),t.unsuspend){var c=t.unsuspend;t.unsuspend=null,c()}},6e4+n);0<t.imgBytes&&Vu===0&&(Vu=62500*Gy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&ku(t,t.stylesheets),t.unsuspend)){var c=t.unsuspend;t.unsuspend=null,c()}},(t.imgBytes>Vu?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(r),clearTimeout(u)}}:null}function X_(t){if(t.count===0&&(t.imgCount===0||!t.waitingForImages)){if(t.stylesheets)ku(t,t.stylesheets);else if(t.unsuspend){var n=t.unsuspend;t.unsuspend=null,n()}}}function nl(){this.count--,X_(this)}function TM(){this.imgCount--,X_(this)}var Xu=null;function ku(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Xu=new Map,n.forEach(AM,t),Xu=null,nl.call(t))}function AM(t,n){if(!(n.state.loading&4)){var a=Xu.get(t);if(a)var r=a.get(null);else{a=new Map,Xu.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),c=0;c<u.length;c++){var g=u[c];(g.nodeName==="LINK"||g.getAttribute("media")!=="not all")&&(a.set(g.dataset.precedence,g),r=g)}r&&a.set(null,r)}u=n.instance,g=u.getAttribute("data-precedence"),c=a.get(g)||r,c===r&&a.set(null,u),a.set(g,u),this.count++,r=nl.bind(this),u.addEventListener("load",r),u.addEventListener("error",r),c?c.parentNode.insertBefore(u,c.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Bs={$$typeof:ct,Provider:null,Consumer:null,_currentValue:re,_currentValue2:re,_threadCount:0};function bM(t,n,a,r,u,c,g,E,L){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=_o(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=_o(0),this.hiddenUpdates=_o(null),this.identifierPrefix=r,this.onUncaughtError=u,this.onCaughtError=c,this.onRecoverableError=g,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=L,this.transitionTypes=null,this.incompleteTransitions=new Map}function k_(t,n,a,r,u,c,g,E,L,W,et,ht){return t=new bM(t,n,a,g,L,W,et,ht,E),n=1,c===!0&&(n|=24),c=Zn(3,null,null,n),t.current=c,c.stateNode=t,n=xf(),n.refCount++,t.pooledCache=n,n.refCount++,c.memoizedState={element:r,isDehydrated:a,cache:n},Ef(c),t}function q_(t){return t?(t=cs,t):cs}function Y_(t,n,a,r,u,c){u=q_(u),r.context===null?r.context=u:r.pendingContext=u,r=Fa(n),r.payload={element:a},c=c===void 0?null:c,c!==null&&(r.callback=c),a=Ha(t,r,n),a!==null&&($n(a,t,n),Lo(a,t,n))}function W_(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function rd(t,n){W_(t,n),(t=t.alternate)&&W_(t,n)}function j_(t){if(t.tag===13||t.tag===31){var n=Mr(t,67108864);n!==null&&$n(n,t,67108864),rd(t,67108864)}}function Z_(t){if(t.tag===13||t.tag===31){var n=ui();n=at(n);var a=Mr(t,n);a!==null&&$n(a,t,n),rd(t,n)}}var Fs=!0;function RM(t,n,a,r){var u=bt.T;bt.T=null;var c=It.p;try{It.p=2,sd(t,n,a,r)}finally{It.p=c,bt.T=u}}function CM(t,n,a,r){var u=bt.T;bt.T=null;var c=It.p;try{It.p=8,sd(t,n,a,r)}finally{It.p=c,bt.T=u}}function sd(t,n,a,r){if(Fs){var u=od(r);if(u===null)Gh(t,n,r,qu,a),Q_(t,r);else if(DM(u,t,n,a,r))r.stopPropagation();else if(Q_(t,r),n&4&&-1<wM.indexOf(t)){for(;u!==null;){var c=Je(u);if(c!==null)switch(c.tag){case 3:if(c=c.stateNode,c.current.memoizedState.isDehydrated){var g=Ii(c.pendingLanes);if(g!==0){var E=c;for(E.pendingLanes|=2,E.entangledLanes|=2;g;){var L=1<<31-zn(g);E.entanglements[1]|=L,g&=~L}ji(c),(Le&6)===0&&(Du=V()+500,Zo(0))}}break;case 31:case 13:E=Mr(c,2),E!==null&&$n(E,c,2),Lu(),rd(c,2)}if(c=od(r),c===null&&Gh(t,n,r,qu,a),c===u)break;u=c}u!==null&&r.stopPropagation()}else Gh(t,n,r,null,a)}}function od(t){return t=qc(t),ld(t)}var qu=null;function ld(t){if(qu=null,t=Yt(t),t!==null){var n=f(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return qu=t,null}function K_(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"fullscreenerror":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"resize":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zt()){case lt:return 2;case _t:return 8;case Lt:case Pt:return 32;case oe:return 268435456;default:return 32}default:return 32}}var ud=!1,Ja=null,$a=null,tr=null,il=new Map,al=new Map,er=[],wM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Q_(t,n){switch(t){case"focusin":case"focusout":Ja=null;break;case"dragenter":case"dragleave":$a=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":il.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":al.delete(n.pointerId)}}function rl(t,n,a,r,u,c){return t===null||t.nativeEvent!==c?(t={blockedOn:n,domEventName:a,eventSystemFlags:r,nativeEvent:c,targetContainers:[u]},n!==null&&(n=Je(n),n!==null&&j_(n)),t):(t.eventSystemFlags|=r,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function DM(t,n,a,r,u){switch(n){case"focusin":return Ja=rl(Ja,t,n,a,r,u),!0;case"dragenter":return $a=rl($a,t,n,a,r,u),!0;case"mouseover":return tr=rl(tr,t,n,a,r,u),!0;case"pointerover":var c=u.pointerId;return il.set(c,rl(il.get(c)||null,t,n,a,r,u)),!0;case"gotpointercapture":return c=u.pointerId,al.set(c,rl(al.get(c)||null,t,n,a,r,u)),!0}return!1}function J_(t){var n=Yt(t.target);if(n!==null){var a=f(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,yt(t.priority,function(){Z_(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,yt(t.priority,function(){Z_(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Yu(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=od(t.nativeEvent);if(a===null){a=t.nativeEvent;var r=new a.constructor(a.type,a);kc=r,a.target.dispatchEvent(r),kc=null}else return n=Je(a),n!==null&&j_(n),t.blockedOn=a,!1;n.shift()}return!0}function $_(t,n,a){Yu(t)&&a.delete(n)}function UM(){ud=!1,Ja!==null&&Yu(Ja)&&(Ja=null),$a!==null&&Yu($a)&&($a=null),tr!==null&&Yu(tr)&&(tr=null),il.forEach($_),al.forEach($_)}function Wu(t,n){t.blockedOn===n&&(t.blockedOn=null,ud||(ud=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,UM)))}var ju=null;function tv(t){ju!==t&&(ju=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){ju===t&&(ju=null);for(var n=0;n<t.length;n+=3){var a=t[n],r=t[n+1],u=t[n+2];if(typeof r!="function"){if(ld(r||a)===null)continue;break}var c=Je(a);c!==null&&(t.splice(n,3),n-=3,kf(c,{pending:!0,data:u,method:a.method,action:r},r,u))}}))}function Hs(t){function n(L){return Wu(L,t)}Ja!==null&&Wu(Ja,t),$a!==null&&Wu($a,t),tr!==null&&Wu(tr,t),il.forEach(n),al.forEach(n);for(var a=0;a<er.length;a++){var r=er[a];r.blockedOn===t&&(r.blockedOn=null)}for(;0<er.length&&(a=er[0],a.blockedOn===null);)J_(a),a.blockedOn===null&&er.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(r=0;r<a.length;r+=3){var u=a[r],c=a[r+1],g=u[Dt]||null;if(typeof c=="function")g||tv(a);else if(g){var E=null;if(c&&c.hasAttribute("formAction")){if(u=c,g=c[Dt]||null)E=g.formAction;else if(ld(u)!==null)continue}else E=g.action;typeof E=="function"?a[r+1]=E:(a.splice(r,3),r-=3),tv(a)}}}function ev(){function t(c){c.canIntercept&&c.info==="react-transition"&&c.intercept({handler:function(){return new Promise(function(g){return u=g})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),r||setTimeout(a,20)}function a(){if(!r&&!navigation.transition){var c=navigation.currentEntry;c&&c.url!=null&&navigation.navigate(c.url,{state:c.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var r=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){r=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function cd(t){this._internalRoot=t}Zu.prototype.render=cd.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,r=ui();Y_(a,r,t,n,null,null)},Zu.prototype.unmount=cd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Y_(t.current,2,null,t,null,null),Lu(),n[Qt]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var n=K();t={blockedOn:null,target:t,priority:n};for(var a=0;a<er.length&&n!==0&&n<er[a].priority;a++);er.splice(a,0,t),a===0&&J_(t)}};var nv=e.version;if(nv!=="19.3.0")throw Error(s(527,nv,"19.3.0"));It.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=_(n),t=t!==null?v(t):null,t=t===null?null:t.stateNode,t};var NM={bundleType:0,version:"19.3.0",rendererPackageName:"react-dom",currentDispatcherRef:bt,reconcilerVersion:"19.3.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ku=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ku.isDisabled&&Ku.supportsFiber)try{Ae=Ku.inject(NM),Ze=Ku}catch{}}return ol.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,r="",u=q0,c=Y0,g=W0;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(c=n.onCaughtError),n.onRecoverableError!==void 0&&(g=n.onRecoverableError)),n=k_(t,1,!1,null,null,a,r,null,u,c,g,ev),t[Qt]=n.current,Hh(t),new cd(n)},ol.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var r=!1,u="",c=q0,g=Y0,E=W0,L=null;return a!=null&&(a.unstable_strictMode===!0&&(r=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(c=a.onUncaughtError),a.onCaughtError!==void 0&&(g=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.formState!==void 0&&(L=a.formState)),n=k_(t,1,!0,n,a??null,r,u,L,c,g,E,ev),n.context=q_(null),a=n.current,r=ui(),r=at(r),u=Fa(r),u.callback=null,Ha(a,u,r),a=r,n.current.lanes=a,xr(n,a),ji(n),t[Qt]=n.current,Hh(t),new Zu(n)},ol.version="19.3.0",ol}var hv;function YM(){if(hv)return dd.exports;hv=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),dd.exports=qM(),dd.exports}var WM=YM();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fp="175",jM=0,dv=1,ZM=2,_x=1,vx=2,Ea=3,mr=0,ni=1,Ki=2,dr=0,ao=1,pv=2,mv=3,gv=4,KM=5,jr=100,QM=101,JM=102,$M=103,tE=104,eE=200,nE=201,iE=202,aE=203,Qd=204,Jd=205,rE=206,sE=207,oE=208,lE=209,uE=210,cE=211,fE=212,hE=213,dE=214,$d=0,tp=1,ep=2,so=3,np=4,ip=5,ap=6,rp=7,xx=0,pE=1,mE=2,pr=0,gE=1,_E=2,vE=3,Sx=4,xE=5,SE=6,yE=7,yx=300,oo=301,lo=302,sp=303,op=304,zc=306,Dc=1e3,Kr=1001,lp=1002,Pi=1003,ME=1004,Qu=1005,Oi=1006,_d=1007,Qr=1008,Ca=1009,Mx=1010,Ex=1011,gl=1012,Hp=1013,$r=1014,Aa=1015,Ml=1016,Gp=1017,Vp=1018,_l=1020,Tx=35902,Ax=1021,bx=1022,zi=1023,Rx=1024,Cx=1025,vl=1026,xl=1027,wx=1028,Xp=1029,Dx=1030,kp=1031,qp=1033,Ec=33776,Tc=33777,Ac=33778,bc=33779,up=35840,cp=35841,fp=35842,hp=35843,dp=36196,pp=37492,mp=37496,gp=37808,_p=37809,vp=37810,xp=37811,Sp=37812,yp=37813,Mp=37814,Ep=37815,Tp=37816,Ap=37817,bp=37818,Rp=37819,Cp=37820,wp=37821,Rc=36492,Dp=36494,Up=36495,Ux=36283,Np=36284,Lp=36285,Op=36286,EE=3200,TE=3201,Nx=0,AE=1,cr="",ei="srgb",uo="srgb-linear",Uc="linear",Ge="srgb",Gs=7680,_v=519,bE=512,RE=513,CE=514,Lx=515,wE=516,DE=517,UE=518,NE=519,vv=35044,xv="300 es",ba=2e3,Nc=2001;class fo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const f=l.indexOf(i);f!==-1&&l.splice(f,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let f=0,h=l.length;f<h;f++)l[f].call(this,e);e.target=null}}}const Bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,zp=180/Math.PI;function El(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Bn[o&255]+Bn[o>>8&255]+Bn[o>>16&255]+Bn[o>>24&255]+"-"+Bn[e&255]+Bn[e>>8&255]+"-"+Bn[e>>16&15|64]+Bn[e>>24&255]+"-"+Bn[i&63|128]+Bn[i>>8&255]+"-"+Bn[i>>16&255]+Bn[i>>24&255]+Bn[s&255]+Bn[s>>8&255]+Bn[s>>16&255]+Bn[s>>24&255]).toLowerCase()}function Re(o,e,i){return Math.max(e,Math.min(i,o))}function LE(o,e){return(o%e+e)%e}function xd(o,e,i){return(1-i)*o+i*e}function ll(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ti(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Oe{constructor(e=0,i=0){Oe.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Re(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),f=this.x-e.x,h=this.y-e.y;return this.x=f*s-h*l+e.x,this.y=f*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fe{constructor(e,i,s,l,f,h,d,p,_){fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,p,_)}set(e,i,s,l,f,h,d,p,_){const v=this.elements;return v[0]=e,v[1]=l,v[2]=d,v[3]=i,v[4]=f,v[5]=p,v[6]=s,v[7]=h,v[8]=_,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[3],p=s[6],_=s[1],v=s[4],m=s[7],x=s[2],M=s[5],T=s[8],C=l[0],y=l[3],S=l[6],P=l[1],O=l[4],U=l[7],X=l[2],I=l[5],z=l[8];return f[0]=h*C+d*P+p*X,f[3]=h*y+d*O+p*I,f[6]=h*S+d*U+p*z,f[1]=_*C+v*P+m*X,f[4]=_*y+v*O+m*I,f[7]=_*S+v*U+m*z,f[2]=x*C+M*P+T*X,f[5]=x*y+M*O+T*I,f[8]=x*S+M*U+T*z,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8];return i*h*v-i*d*_-s*f*v+s*d*p+l*f*_-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8],m=v*h-d*_,x=d*p-v*f,M=_*f-h*p,T=i*m+s*x+l*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=m*C,e[1]=(l*_-v*s)*C,e[2]=(d*s-l*h)*C,e[3]=x*C,e[4]=(v*i-l*p)*C,e[5]=(l*f-d*i)*C,e[6]=M*C,e[7]=(s*p-_*i)*C,e[8]=(h*i-s*f)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,f,h,d){const p=Math.cos(f),_=Math.sin(f);return this.set(s*p,s*_,-s*(p*h+_*d)+h+e,-l*_,l*p,-l*(-_*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Sd.makeScale(e,i)),this}rotate(e){return this.premultiply(Sd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Sd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Sd=new fe;function Ox(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Lc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function OE(){const o=Lc("canvas");return o.style.display="block",o}const Sv={};function Cc(o){o in Sv||(Sv[o]=!0,console.warn(o))}function zE(o,e,i){return new Promise(function(s,l){function f(){switch(o.clientWaitSync(e,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(f,i);break;default:s()}}setTimeout(f,i)})}function PE(o){const e=o.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function IE(o){const e=o.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const yv=new fe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mv=new fe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BE(){const o={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(l,f,h){return this.enabled===!1||f===h||!f||!h||(this.spaces[f].transfer===Ge&&(l.r=Ra(l.r),l.g=Ra(l.g),l.b=Ra(l.b)),this.spaces[f].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[f].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ge&&(l.r=ro(l.r),l.g=ro(l.g),l.b=ro(l.b))),l},fromWorkingColorSpace:function(l,f){return this.convert(l,this.workingColorSpace,f)},toWorkingColorSpace:function(l,f){return this.convert(l,f,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===cr?Uc:this.spaces[l].transfer},getLuminanceCoefficients:function(l,f=this.workingColorSpace){return l.fromArray(this.spaces[f].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,f,h){return l.copy(this.spaces[f].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return o.define({[uo]:{primaries:e,whitePoint:s,transfer:Uc,toXYZ:yv,fromXYZ:Mv,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ei},outputColorSpaceConfig:{drawingBufferColorSpace:ei}},[ei]:{primaries:e,whitePoint:s,transfer:Ge,toXYZ:yv,fromXYZ:Mv,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ei}}}),o}const Ne=BE();function Ra(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ro(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Vs;class FE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Vs===void 0&&(Vs=Lc("canvas")),Vs.width=e.width,Vs.height=e.height;const l=Vs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=Vs}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Lc("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),f=l.data;for(let h=0;h<f.length;h++)f[h]=Ra(f[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(Ra(i[s]/255)*255):i[s]=Ra(i[s]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let HE=0;class Yp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HE++}),this.uuid=El(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let f;if(Array.isArray(l)){f=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?f.push(yd(l[h].image)):f.push(yd(l[h]))}else f=yd(l);s.url=f}return i||(e.images[this.uuid]=s),s}}function yd(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?FE.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GE=0;class jn extends fo{constructor(e=jn.DEFAULT_IMAGE,i=jn.DEFAULT_MAPPING,s=Kr,l=Kr,f=Oi,h=Qr,d=zi,p=Ca,_=jn.DEFAULT_ANISOTROPY,v=cr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GE++}),this.uuid=El(),this.name="",this.source=new Yp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=f,this.minFilter=h,this.anisotropy=_,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dc:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case lp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dc:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case lp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=yx;jn.DEFAULT_ANISOTROPY=1;class rn{constructor(e=0,i=0,s=0,l=1){rn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*f,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*f,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*f,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*f,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,f;const p=e.elements,_=p[0],v=p[4],m=p[8],x=p[1],M=p[5],T=p[9],C=p[2],y=p[6],S=p[10];if(Math.abs(v-x)<.01&&Math.abs(m-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+x)<.1&&Math.abs(m+C)<.1&&Math.abs(T+y)<.1&&Math.abs(_+M+S-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(_+1)/2,U=(M+1)/2,X=(S+1)/2,I=(v+x)/4,z=(m+C)/4,G=(T+y)/4;return O>U&&O>X?O<.01?(s=0,l=.707106781,f=.707106781):(s=Math.sqrt(O),l=I/s,f=z/s):U>X?U<.01?(s=.707106781,l=0,f=.707106781):(l=Math.sqrt(U),s=I/l,f=G/l):X<.01?(s=.707106781,l=.707106781,f=0):(f=Math.sqrt(X),s=z/f,l=G/f),this.set(s,l,f,i),this}let P=Math.sqrt((y-T)*(y-T)+(m-C)*(m-C)+(x-v)*(x-v));return Math.abs(P)<.001&&(P=1),this.x=(y-T)/P,this.y=(m-C)/P,this.z=(x-v)/P,this.w=Math.acos((_+M+S-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this.w=Re(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this.w=Re(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VE extends fo{constructor(e=1,i=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new rn(0,0,e,i),this.scissorTest=!1,this.viewport=new rn(0,0,e,i);const l={width:e,height:i,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Oi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const f=new jn(l,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);f.flipY=!1,f.generateMipmaps=s.generateMipmaps,f.internalFormat=s.internalFormat,this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=f.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,f=this.textures.length;l<f;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Yp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ts extends VE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class zx extends jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XE extends jn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Pi,this.minFilter=Pi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Tl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,f,h,d){let p=s[l+0],_=s[l+1],v=s[l+2],m=s[l+3];const x=f[h+0],M=f[h+1],T=f[h+2],C=f[h+3];if(d===0){e[i+0]=p,e[i+1]=_,e[i+2]=v,e[i+3]=m;return}if(d===1){e[i+0]=x,e[i+1]=M,e[i+2]=T,e[i+3]=C;return}if(m!==C||p!==x||_!==M||v!==T){let y=1-d;const S=p*x+_*M+v*T+m*C,P=S>=0?1:-1,O=1-S*S;if(O>Number.EPSILON){const X=Math.sqrt(O),I=Math.atan2(X,S*P);y=Math.sin(y*I)/X,d=Math.sin(d*I)/X}const U=d*P;if(p=p*y+x*U,_=_*y+M*U,v=v*y+T*U,m=m*y+C*U,y===1-d){const X=1/Math.sqrt(p*p+_*_+v*v+m*m);p*=X,_*=X,v*=X,m*=X}}e[i]=p,e[i+1]=_,e[i+2]=v,e[i+3]=m}static multiplyQuaternionsFlat(e,i,s,l,f,h){const d=s[l],p=s[l+1],_=s[l+2],v=s[l+3],m=f[h],x=f[h+1],M=f[h+2],T=f[h+3];return e[i]=d*T+v*m+p*M-_*x,e[i+1]=p*T+v*x+_*m-d*M,e[i+2]=_*T+v*M+d*x-p*m,e[i+3]=v*T-d*m-p*x-_*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,f=e._z,h=e._order,d=Math.cos,p=Math.sin,_=d(s/2),v=d(l/2),m=d(f/2),x=p(s/2),M=p(l/2),T=p(f/2);switch(h){case"XYZ":this._x=x*v*m+_*M*T,this._y=_*M*m-x*v*T,this._z=_*v*T+x*M*m,this._w=_*v*m-x*M*T;break;case"YXZ":this._x=x*v*m+_*M*T,this._y=_*M*m-x*v*T,this._z=_*v*T-x*M*m,this._w=_*v*m+x*M*T;break;case"ZXY":this._x=x*v*m-_*M*T,this._y=_*M*m+x*v*T,this._z=_*v*T+x*M*m,this._w=_*v*m-x*M*T;break;case"ZYX":this._x=x*v*m-_*M*T,this._y=_*M*m+x*v*T,this._z=_*v*T-x*M*m,this._w=_*v*m+x*M*T;break;case"YZX":this._x=x*v*m+_*M*T,this._y=_*M*m+x*v*T,this._z=_*v*T-x*M*m,this._w=_*v*m-x*M*T;break;case"XZY":this._x=x*v*m-_*M*T,this._y=_*M*m-x*v*T,this._z=_*v*T+x*M*m,this._w=_*v*m+x*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],f=i[8],h=i[1],d=i[5],p=i[9],_=i[2],v=i[6],m=i[10],x=s+d+m;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(v-p)*M,this._y=(f-_)*M,this._z=(h-l)*M}else if(s>d&&s>m){const M=2*Math.sqrt(1+s-d-m);this._w=(v-p)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(f+_)/M}else if(d>m){const M=2*Math.sqrt(1+d-s-m);this._w=(f-_)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(p+v)/M}else{const M=2*Math.sqrt(1+m-s-d);this._w=(h-l)/M,this._x=(f+_)/M,this._y=(p+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Re(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,f=e._z,h=e._w,d=i._x,p=i._y,_=i._z,v=i._w;return this._x=s*v+h*d+l*_-f*p,this._y=l*v+h*p+f*d-s*_,this._z=f*v+h*_+s*p-l*d,this._w=h*v-s*d-l*p-f*_,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const s=this._x,l=this._y,f=this._z,h=this._w;let d=h*e._w+s*e._x+l*e._y+f*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=h,this._x=s,this._y=l,this._z=f,this;const p=1-d*d;if(p<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*s+i*this._x,this._y=M*l+i*this._y,this._z=M*f+i*this._z,this.normalize(),this}const _=Math.sqrt(p),v=Math.atan2(_,d),m=Math.sin((1-i)*v)/_,x=Math.sin(i*v)/_;return this._w=h*m+this._w*x,this._x=s*m+this._x*x,this._y=l*m+this._y*x,this._z=f*m+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),f=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),f*Math.sin(i),f*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class nt{constructor(e=0,i=0,s=0){nt.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(Ev.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(Ev.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[3]*s+f[6]*l,this.y=f[1]*i+f[4]*s+f[7]*l,this.z=f[2]*i+f[5]*s+f[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,f=e.elements,h=1/(f[3]*i+f[7]*s+f[11]*l+f[15]);return this.x=(f[0]*i+f[4]*s+f[8]*l+f[12])*h,this.y=(f[1]*i+f[5]*s+f[9]*l+f[13])*h,this.z=(f[2]*i+f[6]*s+f[10]*l+f[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,f=e.x,h=e.y,d=e.z,p=e.w,_=2*(h*l-d*s),v=2*(d*i-f*l),m=2*(f*s-h*i);return this.x=i+p*_+h*m-d*v,this.y=s+p*v+d*_-f*m,this.z=l+p*m+f*v-h*_,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,f=e.elements;return this.x=f[0]*i+f[4]*s+f[8]*l,this.y=f[1]*i+f[5]*s+f[9]*l,this.z=f[2]*i+f[6]*s+f[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Re(this.x,e.x,i.x),this.y=Re(this.y,e.y,i.y),this.z=Re(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=Re(this.x,e,i),this.y=Re(this.y,e,i),this.z=Re(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Re(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,f=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-f*d,this.y=f*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(Re(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Md=new nt,Ev=new Tl;class Al{constructor(e=new nt(1/0,1/0,1/0),i=new nt(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Di.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Di.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Di.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const f=s.getAttribute("position");if(i===!0&&f!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=f.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Di):Di.fromBufferAttribute(f,h),Di.applyMatrix4(e.matrixWorld),this.expandByPoint(Di);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ju.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Ju.copy(s.boundingBox)),Ju.applyMatrix4(e.matrixWorld),this.union(Ju)}const l=e.children;for(let f=0,h=l.length;f<h;f++)this.expandByObject(l[f],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Di),Di.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ul),$u.subVectors(this.max,ul),Xs.subVectors(e.a,ul),ks.subVectors(e.b,ul),qs.subVectors(e.c,ul),ir.subVectors(ks,Xs),ar.subVectors(qs,ks),Hr.subVectors(Xs,qs);let i=[0,-ir.z,ir.y,0,-ar.z,ar.y,0,-Hr.z,Hr.y,ir.z,0,-ir.x,ar.z,0,-ar.x,Hr.z,0,-Hr.x,-ir.y,ir.x,0,-ar.y,ar.x,0,-Hr.y,Hr.x,0];return!Ed(i,Xs,ks,qs,$u)||(i=[1,0,0,0,1,0,0,0,1],!Ed(i,Xs,ks,qs,$u))?!1:(tc.crossVectors(ir,ar),i=[tc.x,tc.y,tc.z],Ed(i,Xs,ks,qs,$u))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Di).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Di).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(va[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),va[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),va[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),va[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),va[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),va[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),va[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),va[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(va),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const va=[new nt,new nt,new nt,new nt,new nt,new nt,new nt,new nt],Di=new nt,Ju=new Al,Xs=new nt,ks=new nt,qs=new nt,ir=new nt,ar=new nt,Hr=new nt,ul=new nt,$u=new nt,tc=new nt,Gr=new nt;function Ed(o,e,i,s,l){for(let f=0,h=o.length-3;f<=h;f+=3){Gr.fromArray(o,f);const d=l.x*Math.abs(Gr.x)+l.y*Math.abs(Gr.y)+l.z*Math.abs(Gr.z),p=e.dot(Gr),_=i.dot(Gr),v=s.dot(Gr);if(Math.max(-Math.max(p,_,v),Math.min(p,_,v))>d)return!1}return!0}const kE=new Al,cl=new nt,Td=new nt;class Wp{constructor(e=new nt,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):kE.setFromPoints(e).getCenter(s);let l=0;for(let f=0,h=e.length;f<h;f++)l=Math.max(l,s.distanceToSquared(e[f]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cl.subVectors(e,this.center);const i=cl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(cl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Td.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cl.copy(e.center).add(Td)),this.expandByPoint(cl.copy(e.center).sub(Td))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xa=new nt,Ad=new nt,ec=new nt,rr=new nt,bd=new nt,nc=new nt,Rd=new nt;class qE{constructor(e=new nt,i=new nt(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=xa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(xa.copy(this.origin).addScaledVector(this.direction,i),xa.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Ad.copy(e).add(i).multiplyScalar(.5),ec.copy(i).sub(e).normalize(),rr.copy(this.origin).sub(Ad);const f=e.distanceTo(i)*.5,h=-this.direction.dot(ec),d=rr.dot(this.direction),p=-rr.dot(ec),_=rr.lengthSq(),v=Math.abs(1-h*h);let m,x,M,T;if(v>0)if(m=h*p-d,x=h*d-p,T=f*v,m>=0)if(x>=-T)if(x<=T){const C=1/v;m*=C,x*=C,M=m*(m+h*x+2*d)+x*(h*m+x+2*p)+_}else x=f,m=Math.max(0,-(h*x+d)),M=-m*m+x*(x+2*p)+_;else x=-f,m=Math.max(0,-(h*x+d)),M=-m*m+x*(x+2*p)+_;else x<=-T?(m=Math.max(0,-(-h*f+d)),x=m>0?-f:Math.min(Math.max(-f,-p),f),M=-m*m+x*(x+2*p)+_):x<=T?(m=0,x=Math.min(Math.max(-f,-p),f),M=x*(x+2*p)+_):(m=Math.max(0,-(h*f+d)),x=m>0?f:Math.min(Math.max(-f,-p),f),M=-m*m+x*(x+2*p)+_);else x=h>0?-f:f,m=Math.max(0,-(h*x+d)),M=-m*m+x*(x+2*p)+_;return s&&s.copy(this.origin).addScaledVector(this.direction,m),l&&l.copy(Ad).addScaledVector(ec,x),M}intersectSphere(e,i){xa.subVectors(e.center,this.origin);const s=xa.dot(this.direction),l=xa.dot(xa)-s*s,f=e.radius*e.radius;if(l>f)return null;const h=Math.sqrt(f-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,f,h,d,p;const _=1/this.direction.x,v=1/this.direction.y,m=1/this.direction.z,x=this.origin;return _>=0?(s=(e.min.x-x.x)*_,l=(e.max.x-x.x)*_):(s=(e.max.x-x.x)*_,l=(e.min.x-x.x)*_),v>=0?(f=(e.min.y-x.y)*v,h=(e.max.y-x.y)*v):(f=(e.max.y-x.y)*v,h=(e.min.y-x.y)*v),s>h||f>l||((f>s||isNaN(s))&&(s=f),(h<l||isNaN(l))&&(l=h),m>=0?(d=(e.min.z-x.z)*m,p=(e.max.z-x.z)*m):(d=(e.max.z-x.z)*m,p=(e.min.z-x.z)*m),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,xa)!==null}intersectTriangle(e,i,s,l,f){bd.subVectors(i,e),nc.subVectors(s,e),Rd.crossVectors(bd,nc);let h=this.direction.dot(Rd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;rr.subVectors(this.origin,e);const p=d*this.direction.dot(nc.crossVectors(rr,nc));if(p<0)return null;const _=d*this.direction.dot(bd.cross(rr));if(_<0||p+_>h)return null;const v=-d*rr.dot(Rd);return v<0?null:this.at(v/h,f)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class sn{constructor(e,i,s,l,f,h,d,p,_,v,m,x,M,T,C,y){sn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,f,h,d,p,_,v,m,x,M,T,C,y)}set(e,i,s,l,f,h,d,p,_,v,m,x,M,T,C,y){const S=this.elements;return S[0]=e,S[4]=i,S[8]=s,S[12]=l,S[1]=f,S[5]=h,S[9]=d,S[13]=p,S[2]=_,S[6]=v,S[10]=m,S[14]=x,S[3]=M,S[7]=T,S[11]=C,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new sn().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,s=e.elements,l=1/Ys.setFromMatrixColumn(e,0).length(),f=1/Ys.setFromMatrixColumn(e,1).length(),h=1/Ys.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*f,i[5]=s[5]*f,i[6]=s[6]*f,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,f=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),_=Math.sin(l),v=Math.cos(f),m=Math.sin(f);if(e.order==="XYZ"){const x=h*v,M=h*m,T=d*v,C=d*m;i[0]=p*v,i[4]=-p*m,i[8]=_,i[1]=M+T*_,i[5]=x-C*_,i[9]=-d*p,i[2]=C-x*_,i[6]=T+M*_,i[10]=h*p}else if(e.order==="YXZ"){const x=p*v,M=p*m,T=_*v,C=_*m;i[0]=x+C*d,i[4]=T*d-M,i[8]=h*_,i[1]=h*m,i[5]=h*v,i[9]=-d,i[2]=M*d-T,i[6]=C+x*d,i[10]=h*p}else if(e.order==="ZXY"){const x=p*v,M=p*m,T=_*v,C=_*m;i[0]=x-C*d,i[4]=-h*m,i[8]=T+M*d,i[1]=M+T*d,i[5]=h*v,i[9]=C-x*d,i[2]=-h*_,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const x=h*v,M=h*m,T=d*v,C=d*m;i[0]=p*v,i[4]=T*_-M,i[8]=x*_+C,i[1]=p*m,i[5]=C*_+x,i[9]=M*_-T,i[2]=-_,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const x=h*p,M=h*_,T=d*p,C=d*_;i[0]=p*v,i[4]=C-x*m,i[8]=T*m+M,i[1]=m,i[5]=h*v,i[9]=-d*v,i[2]=-_*v,i[6]=M*m+T,i[10]=x-C*m}else if(e.order==="XZY"){const x=h*p,M=h*_,T=d*p,C=d*_;i[0]=p*v,i[4]=-m,i[8]=_*v,i[1]=x*m+C,i[5]=h*v,i[9]=M*m-T,i[2]=T*m-M,i[6]=d*v,i[10]=C*m+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(YE,e,WE)}lookAt(e,i,s){const l=this.elements;return fi.subVectors(e,i),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),sr.crossVectors(s,fi),sr.lengthSq()===0&&(Math.abs(s.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),sr.crossVectors(s,fi)),sr.normalize(),ic.crossVectors(fi,sr),l[0]=sr.x,l[4]=ic.x,l[8]=fi.x,l[1]=sr.y,l[5]=ic.y,l[9]=fi.y,l[2]=sr.z,l[6]=ic.z,l[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,f=this.elements,h=s[0],d=s[4],p=s[8],_=s[12],v=s[1],m=s[5],x=s[9],M=s[13],T=s[2],C=s[6],y=s[10],S=s[14],P=s[3],O=s[7],U=s[11],X=s[15],I=l[0],z=l[4],G=l[8],D=l[12],R=l[1],H=l[5],ot=l[9],it=l[13],dt=l[2],ct=l[6],q=l[10],rt=l[14],Q=l[3],xt=l[7],St=l[11],Ht=l[15];return f[0]=h*I+d*R+p*dt+_*Q,f[4]=h*z+d*H+p*ct+_*xt,f[8]=h*G+d*ot+p*q+_*St,f[12]=h*D+d*it+p*rt+_*Ht,f[1]=v*I+m*R+x*dt+M*Q,f[5]=v*z+m*H+x*ct+M*xt,f[9]=v*G+m*ot+x*q+M*St,f[13]=v*D+m*it+x*rt+M*Ht,f[2]=T*I+C*R+y*dt+S*Q,f[6]=T*z+C*H+y*ct+S*xt,f[10]=T*G+C*ot+y*q+S*St,f[14]=T*D+C*it+y*rt+S*Ht,f[3]=P*I+O*R+U*dt+X*Q,f[7]=P*z+O*H+U*ct+X*xt,f[11]=P*G+O*ot+U*q+X*St,f[15]=P*D+O*it+U*rt+X*Ht,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],f=e[12],h=e[1],d=e[5],p=e[9],_=e[13],v=e[2],m=e[6],x=e[10],M=e[14],T=e[3],C=e[7],y=e[11],S=e[15];return T*(+f*p*m-l*_*m-f*d*x+s*_*x+l*d*M-s*p*M)+C*(+i*p*M-i*_*x+f*h*x-l*h*M+l*_*v-f*p*v)+y*(+i*_*m-i*d*M-f*h*m+s*h*M+f*d*v-s*_*v)+S*(-l*d*v-i*p*m+i*d*x+l*h*m-s*h*x+s*p*v)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],f=e[3],h=e[4],d=e[5],p=e[6],_=e[7],v=e[8],m=e[9],x=e[10],M=e[11],T=e[12],C=e[13],y=e[14],S=e[15],P=m*y*_-C*x*_+C*p*M-d*y*M-m*p*S+d*x*S,O=T*x*_-v*y*_-T*p*M+h*y*M+v*p*S-h*x*S,U=v*C*_-T*m*_+T*d*M-h*C*M-v*d*S+h*m*S,X=T*m*p-v*C*p-T*d*x+h*C*x+v*d*y-h*m*y,I=i*P+s*O+l*U+f*X;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/I;return e[0]=P*z,e[1]=(C*x*f-m*y*f-C*l*M+s*y*M+m*l*S-s*x*S)*z,e[2]=(d*y*f-C*p*f+C*l*_-s*y*_-d*l*S+s*p*S)*z,e[3]=(m*p*f-d*x*f-m*l*_+s*x*_+d*l*M-s*p*M)*z,e[4]=O*z,e[5]=(v*y*f-T*x*f+T*l*M-i*y*M-v*l*S+i*x*S)*z,e[6]=(T*p*f-h*y*f-T*l*_+i*y*_+h*l*S-i*p*S)*z,e[7]=(h*x*f-v*p*f+v*l*_-i*x*_-h*l*M+i*p*M)*z,e[8]=U*z,e[9]=(T*m*f-v*C*f-T*s*M+i*C*M+v*s*S-i*m*S)*z,e[10]=(h*C*f-T*d*f+T*s*_-i*C*_-h*s*S+i*d*S)*z,e[11]=(v*d*f-h*m*f-v*s*_+i*m*_+h*s*M-i*d*M)*z,e[12]=X*z,e[13]=(v*C*l-T*m*l+T*s*x-i*C*x-v*s*y+i*m*y)*z,e[14]=(T*d*l-h*C*l-T*s*p+i*C*p+h*s*y-i*d*y)*z,e[15]=(h*m*l-v*d*l+v*s*p-i*m*p-h*s*x+i*d*x)*z,this}scale(e){const i=this.elements,s=e.x,l=e.y,f=e.z;return i[0]*=s,i[4]*=l,i[8]*=f,i[1]*=s,i[5]*=l,i[9]*=f,i[2]*=s,i[6]*=l,i[10]*=f,i[3]*=s,i[7]*=l,i[11]*=f,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),f=1-s,h=e.x,d=e.y,p=e.z,_=f*h,v=f*d;return this.set(_*h+s,_*d-l*p,_*p+l*d,0,_*d+l*p,v*d+s,v*p-l*h,0,_*p-l*d,v*p+l*h,f*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,f,h){return this.set(1,s,f,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,f=i._x,h=i._y,d=i._z,p=i._w,_=f+f,v=h+h,m=d+d,x=f*_,M=f*v,T=f*m,C=h*v,y=h*m,S=d*m,P=p*_,O=p*v,U=p*m,X=s.x,I=s.y,z=s.z;return l[0]=(1-(C+S))*X,l[1]=(M+U)*X,l[2]=(T-O)*X,l[3]=0,l[4]=(M-U)*I,l[5]=(1-(x+S))*I,l[6]=(y+P)*I,l[7]=0,l[8]=(T+O)*z,l[9]=(y-P)*z,l[10]=(1-(x+C))*z,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;let f=Ys.set(l[0],l[1],l[2]).length();const h=Ys.set(l[4],l[5],l[6]).length(),d=Ys.set(l[8],l[9],l[10]).length();this.determinant()<0&&(f=-f),e.x=l[12],e.y=l[13],e.z=l[14],Ui.copy(this);const _=1/f,v=1/h,m=1/d;return Ui.elements[0]*=_,Ui.elements[1]*=_,Ui.elements[2]*=_,Ui.elements[4]*=v,Ui.elements[5]*=v,Ui.elements[6]*=v,Ui.elements[8]*=m,Ui.elements[9]*=m,Ui.elements[10]*=m,i.setFromRotationMatrix(Ui),s.x=f,s.y=h,s.z=d,this}makePerspective(e,i,s,l,f,h,d=ba){const p=this.elements,_=2*f/(i-e),v=2*f/(s-l),m=(i+e)/(i-e),x=(s+l)/(s-l);let M,T;if(d===ba)M=-(h+f)/(h-f),T=-2*h*f/(h-f);else if(d===Nc)M=-h/(h-f),T=-h*f/(h-f);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=_,p[4]=0,p[8]=m,p[12]=0,p[1]=0,p[5]=v,p[9]=x,p[13]=0,p[2]=0,p[6]=0,p[10]=M,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,i,s,l,f,h,d=ba){const p=this.elements,_=1/(i-e),v=1/(s-l),m=1/(h-f),x=(i+e)*_,M=(s+l)*v;let T,C;if(d===ba)T=(h+f)*m,C=-2*m;else if(d===Nc)T=f*m,C=-1*m;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=2*_,p[4]=0,p[8]=0,p[12]=-x,p[1]=0,p[5]=2*v,p[9]=0,p[13]=-M,p[2]=0,p[6]=0,p[10]=C,p[14]=-T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ys=new nt,Ui=new sn,YE=new nt(0,0,0),WE=new nt(1,1,1),sr=new nt,ic=new nt,fi=new nt,Tv=new sn,Av=new Tl;class Ji{constructor(e=0,i=0,s=0,l=Ji.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,f=l[0],h=l[4],d=l[8],p=l[1],_=l[5],v=l[9],m=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Re(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-h,f)):(this._x=Math.atan2(x,_),this._z=0);break;case"YXZ":this._x=Math.asin(-Re(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(p,_)):(this._y=Math.atan2(-m,f),this._z=0);break;case"ZXY":this._x=Math.asin(Re(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-m,M),this._z=Math.atan2(-h,_)):(this._y=0,this._z=Math.atan2(p,f));break;case"ZYX":this._y=Math.asin(-Re(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(p,f)):(this._x=0,this._z=Math.atan2(-h,_));break;case"YZX":this._z=Math.asin(Re(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,_),this._y=Math.atan2(-m,f)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,_),this._y=Math.atan2(d,f)):(this._x=Math.atan2(-v,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return Tv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Tv,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return Av.setFromEuler(this),this.setFromQuaternion(Av,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ji.DEFAULT_ORDER="XYZ";class Px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let jE=0;const bv=new nt,Ws=new Tl,Sa=new sn,ac=new nt,fl=new nt,ZE=new nt,KE=new Tl,Rv=new nt(1,0,0),Cv=new nt(0,1,0),wv=new nt(0,0,1),Dv={type:"added"},QE={type:"removed"},js={type:"childadded",child:null},Cd={type:"childremoved",child:null};class On extends fo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=El(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new nt,i=new Ji,s=new Tl,l=new nt(1,1,1);function f(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(f),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new sn},normalMatrix:{value:new fe}}),this.matrix=new sn,this.matrixWorld=new sn,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Ws.setFromAxisAngle(e,i),this.quaternion.multiply(Ws),this}rotateOnWorldAxis(e,i){return Ws.setFromAxisAngle(e,i),this.quaternion.premultiply(Ws),this}rotateX(e){return this.rotateOnAxis(Rv,e)}rotateY(e){return this.rotateOnAxis(Cv,e)}rotateZ(e){return this.rotateOnAxis(wv,e)}translateOnAxis(e,i){return bv.copy(e).applyQuaternion(this.quaternion),this.position.add(bv.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(Rv,e)}translateY(e){return this.translateOnAxis(Cv,e)}translateZ(e){return this.translateOnAxis(wv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sa.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?ac.copy(e):ac.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),fl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sa.lookAt(fl,ac,this.up):Sa.lookAt(ac,fl,this.up),this.quaternion.setFromRotationMatrix(Sa),l&&(Sa.extractRotation(l.matrixWorld),Ws.setFromRotationMatrix(Sa),this.quaternion.premultiply(Ws.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dv),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(QE),Cd.child=e,this.dispatchEvent(Cd),Cd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sa.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sa.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sa),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dv),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,e,ZE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fl,KE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let f=0,h=l.length;f<h;f++)l[f].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function f(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=f(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let _=0,v=p.length;_<v;_++){const m=p[_];f(e.shapes,m)}else f(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(f(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,_=this.material.length;p<_;p++)d.push(f(e.materials,this.material[p]));l.material=d}else l.material=f(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(f(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),_=h(e.textures),v=h(e.images),m=h(e.shapes),x=h(e.skeletons),M=h(e.animations),T=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),_.length>0&&(s.textures=_),v.length>0&&(s.images=v),m.length>0&&(s.shapes=m),x.length>0&&(s.skeletons=x),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=l,s;function h(d){const p=[];for(const _ in d){const v=d[_];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}On.DEFAULT_UP=new nt(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ni=new nt,ya=new nt,wd=new nt,Ma=new nt,Zs=new nt,Ks=new nt,Uv=new nt,Dd=new nt,Ud=new nt,Nd=new nt,Ld=new rn,Od=new rn,zd=new rn;class Li{constructor(e=new nt,i=new nt,s=new nt){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),Ni.subVectors(e,i),l.cross(Ni);const f=l.lengthSq();return f>0?l.multiplyScalar(1/Math.sqrt(f)):l.set(0,0,0)}static getBarycoord(e,i,s,l,f){Ni.subVectors(l,i),ya.subVectors(s,i),wd.subVectors(e,i);const h=Ni.dot(Ni),d=Ni.dot(ya),p=Ni.dot(wd),_=ya.dot(ya),v=ya.dot(wd),m=h*_-d*d;if(m===0)return f.set(0,0,0),null;const x=1/m,M=(_*p-d*v)*x,T=(h*v-d*p)*x;return f.set(1-M-T,T,M)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,Ma)===null?!1:Ma.x>=0&&Ma.y>=0&&Ma.x+Ma.y<=1}static getInterpolation(e,i,s,l,f,h,d,p){return this.getBarycoord(e,i,s,l,Ma)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(f,Ma.x),p.addScaledVector(h,Ma.y),p.addScaledVector(d,Ma.z),p)}static getInterpolatedAttribute(e,i,s,l,f,h){return Ld.setScalar(0),Od.setScalar(0),zd.setScalar(0),Ld.fromBufferAttribute(e,i),Od.fromBufferAttribute(e,s),zd.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(Ld,f.x),h.addScaledVector(Od,f.y),h.addScaledVector(zd,f.z),h}static isFrontFacing(e,i,s,l){return Ni.subVectors(s,i),ya.subVectors(e,i),Ni.cross(ya).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),ya.subVectors(this.a,this.b),Ni.cross(ya).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Li.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,f){return Li.getInterpolation(e,this.a,this.b,this.c,i,s,l,f)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,f=this.c;let h,d;Zs.subVectors(l,s),Ks.subVectors(f,s),Dd.subVectors(e,s);const p=Zs.dot(Dd),_=Ks.dot(Dd);if(p<=0&&_<=0)return i.copy(s);Ud.subVectors(e,l);const v=Zs.dot(Ud),m=Ks.dot(Ud);if(v>=0&&m<=v)return i.copy(l);const x=p*m-v*_;if(x<=0&&p>=0&&v<=0)return h=p/(p-v),i.copy(s).addScaledVector(Zs,h);Nd.subVectors(e,f);const M=Zs.dot(Nd),T=Ks.dot(Nd);if(T>=0&&M<=T)return i.copy(f);const C=M*_-p*T;if(C<=0&&_>=0&&T<=0)return d=_/(_-T),i.copy(s).addScaledVector(Ks,d);const y=v*T-M*m;if(y<=0&&m-v>=0&&M-T>=0)return Uv.subVectors(f,l),d=(m-v)/(m-v+(M-T)),i.copy(l).addScaledVector(Uv,d);const S=1/(y+C+x);return h=C*S,d=x*S,i.copy(s).addScaledVector(Zs,h).addScaledVector(Ks,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ix={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},or={h:0,s:0,l:0},rc={h:0,s:0,l:0};function Pd(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Ce{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(e,i,s,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=s,Ne.toWorkingColorSpace(this,l),this}setHSL(e,i,s,l=Ne.workingColorSpace){if(e=LE(e,1),i=Re(i,0,1),s=Re(s,0,1),i===0)this.r=this.g=this.b=s;else{const f=s<=.5?s*(1+i):s+i-s*i,h=2*s-f;this.r=Pd(h,f,e+1/3),this.g=Pd(h,f,e),this.b=Pd(h,f,e-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(e,i=ei){function s(f){f!==void 0&&parseFloat(f)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let f;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(f=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(255,parseInt(f[1],10))/255,Math.min(255,parseInt(f[2],10))/255,Math.min(255,parseInt(f[3],10))/255,i);if(f=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setRGB(Math.min(100,parseInt(f[1],10))/100,Math.min(100,parseInt(f[2],10))/100,Math.min(100,parseInt(f[3],10))/100,i);break;case"hsl":case"hsla":if(f=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(f[4]),this.setHSL(parseFloat(f[1])/360,parseFloat(f[2])/100,parseFloat(f[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const f=l[1],h=f.length;if(h===3)return this.setRGB(parseInt(f.charAt(0),16)/15,parseInt(f.charAt(1),16)/15,parseInt(f.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(f,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ei){const s=Ix[e.toLowerCase()];return s!==void 0?this.setHex(s,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ra(e.r),this.g=Ra(e.g),this.b=Ra(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return Ne.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Re(Fn.r*255,0,255))*65536+Math.round(Re(Fn.g*255,0,255))*256+Math.round(Re(Fn.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,f=Fn.b,h=Math.max(s,l,f),d=Math.min(s,l,f);let p,_;const v=(d+h)/2;if(d===h)p=0,_=0;else{const m=h-d;switch(_=v<=.5?m/(h+d):m/(2-h-d),h){case s:p=(l-f)/m+(l<f?6:0);break;case l:p=(f-s)/m+2;break;case f:p=(s-l)/m+4;break}p/=6}return e.h=p,e.s=_,e.l=v,e}getRGB(e,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ei){Ne.fromWorkingColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==ei?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(or),this.setHSL(or.h+e,or.s+i,or.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(or),e.getHSL(rc);const s=xd(or.h,rc.h,i),l=xd(or.s,rc.s,i),f=xd(or.l,rc.l,i);return this.setHSL(s,l,f),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,f=e.elements;return this.r=f[0]*i+f[3]*s+f[6]*l,this.g=f[1]*i+f[4]*s+f[7]*l,this.b=f[2]*i+f[5]*s+f[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Ce;Ce.NAMES=Ix;let JE=0;class bl extends fo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=El(),this.name="",this.type="Material",this.blending=ao,this.side=mr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qd,this.blendDst=Jd,this.blendEquation=jr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_v,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gs,this.stencilZFail=Gs,this.stencilZPass=Gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ao&&(s.blending=this.blending),this.side!==mr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Qd&&(s.blendSrc=this.blendSrc),this.blendDst!==Jd&&(s.blendDst=this.blendDst),this.blendEquation!==jr&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_v&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Gs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Gs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(f){const h=[];for(const d in f){const p=f[d];delete p.metadata,h.push(p)}return h}if(i){const f=l(e.textures),h=l(e.images);f.length>0&&(s.textures=f),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let f=0;f!==l;++f)s[f]=i[f].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Oc extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.combine=xx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dn=new nt,sc=new Oe;let $E=0;class Qi{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$E++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=vv,this.updateRanges=[],this.gpuType=Aa,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,f=this.itemSize;l<f;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)sc.fromBufferAttribute(this,i),sc.applyMatrix3(e),this.setXY(i,sc.x,sc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix3(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyMatrix4(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.applyNormalMatrix(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)dn.fromBufferAttribute(this,i),dn.transformDirection(e),this.setXYZ(i,dn.x,dn.y,dn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=ll(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=ti(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=ll(i,this.array)),i}setX(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=ll(i,this.array)),i}setY(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=ll(i,this.array)),i}setZ(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=ll(i,this.array)),i}setW(e,i){return this.normalized&&(i=ti(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,f){return e*=this.itemSize,this.normalized&&(i=ti(i,this.array),s=ti(s,this.array),l=ti(l,this.array),f=ti(f,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=f,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==vv&&(e.usage=this.usage),e}}class Bx extends Qi{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class Fx extends Qi{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Gn extends Qi{constructor(e,i,s){super(new Float32Array(e),i,s)}}let tT=0;const Mi=new sn,Id=new On,Qs=new nt,hi=new Al,hl=new Al,An=new nt;class $i extends fo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tT++}),this.uuid=El(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ox(e)?Fx:Bx)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const f=new fe().getNormalMatrix(e);s.applyNormalMatrix(f),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mi.makeRotationFromQuaternion(e),this.applyMatrix4(Mi),this}rotateX(e){return Mi.makeRotationX(e),this.applyMatrix4(Mi),this}rotateY(e){return Mi.makeRotationY(e),this.applyMatrix4(Mi),this}rotateZ(e){return Mi.makeRotationZ(e),this.applyMatrix4(Mi),this}translate(e,i,s){return Mi.makeTranslation(e,i,s),this.applyMatrix4(Mi),this}scale(e,i,s){return Mi.makeScale(e,i,s),this.applyMatrix4(Mi),this}lookAt(e){return Id.lookAt(e),Id.updateMatrix(),this.applyMatrix4(Id.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qs).negate(),this.translate(Qs.x,Qs.y,Qs.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,f=e.length;l<f;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Gn(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const f=e[l];i.setXYZ(l,f.x,f.y,f.z||0)}e.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Al);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new nt(-1/0,-1/0,-1/0),new nt(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const f=i[s];hi.setFromBufferAttribute(f),this.morphTargetsRelative?(An.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(An),An.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(An)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wp);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new nt,1/0);return}if(e){const s=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),i)for(let f=0,h=i.length;f<h;f++){const d=i[f];hl.setFromBufferAttribute(d),this.morphTargetsRelative?(An.addVectors(hi.min,hl.min),hi.expandByPoint(An),An.addVectors(hi.max,hl.max),hi.expandByPoint(An)):(hi.expandByPoint(hl.min),hi.expandByPoint(hl.max))}hi.getCenter(s);let l=0;for(let f=0,h=e.count;f<h;f++)An.fromBufferAttribute(e,f),l=Math.max(l,s.distanceToSquared(An));if(i)for(let f=0,h=i.length;f<h;f++){const d=i[f],p=this.morphTargetsRelative;for(let _=0,v=d.count;_<v;_++)An.fromBufferAttribute(d,_),p&&(Qs.fromBufferAttribute(e,_),An.add(Qs)),l=Math.max(l,s.distanceToSquared(An))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,f=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Qi(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let G=0;G<s.count;G++)d[G]=new nt,p[G]=new nt;const _=new nt,v=new nt,m=new nt,x=new Oe,M=new Oe,T=new Oe,C=new nt,y=new nt;function S(G,D,R){_.fromBufferAttribute(s,G),v.fromBufferAttribute(s,D),m.fromBufferAttribute(s,R),x.fromBufferAttribute(f,G),M.fromBufferAttribute(f,D),T.fromBufferAttribute(f,R),v.sub(_),m.sub(_),M.sub(x),T.sub(x);const H=1/(M.x*T.y-T.x*M.y);isFinite(H)&&(C.copy(v).multiplyScalar(T.y).addScaledVector(m,-M.y).multiplyScalar(H),y.copy(m).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(H),d[G].add(C),d[D].add(C),d[R].add(C),p[G].add(y),p[D].add(y),p[R].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:e.count}]);for(let G=0,D=P.length;G<D;++G){const R=P[G],H=R.start,ot=R.count;for(let it=H,dt=H+ot;it<dt;it+=3)S(e.getX(it+0),e.getX(it+1),e.getX(it+2))}const O=new nt,U=new nt,X=new nt,I=new nt;function z(G){X.fromBufferAttribute(l,G),I.copy(X);const D=d[G];O.copy(D),O.sub(X.multiplyScalar(X.dot(D))).normalize(),U.crossVectors(I,D);const H=U.dot(p[G])<0?-1:1;h.setXYZW(G,O.x,O.y,O.z,H)}for(let G=0,D=P.length;G<D;++G){const R=P[G],H=R.start,ot=R.count;for(let it=H,dt=H+ot;it<dt;it+=3)z(e.getX(it+0)),z(e.getX(it+1)),z(e.getX(it+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Qi(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let x=0,M=s.count;x<M;x++)s.setXYZ(x,0,0,0);const l=new nt,f=new nt,h=new nt,d=new nt,p=new nt,_=new nt,v=new nt,m=new nt;if(e)for(let x=0,M=e.count;x<M;x+=3){const T=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,T),f.fromBufferAttribute(i,C),h.fromBufferAttribute(i,y),v.subVectors(h,f),m.subVectors(l,f),v.cross(m),d.fromBufferAttribute(s,T),p.fromBufferAttribute(s,C),_.fromBufferAttribute(s,y),d.add(v),p.add(v),_.add(v),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(C,p.x,p.y,p.z),s.setXYZ(y,_.x,_.y,_.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),f.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),v.subVectors(h,f),m.subVectors(l,f),v.cross(m),s.setXYZ(x+0,v.x,v.y,v.z),s.setXYZ(x+1,v.x,v.y,v.z),s.setXYZ(x+2,v.x,v.y,v.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)An.fromBufferAttribute(e,i),An.normalize(),e.setXYZ(i,An.x,An.y,An.z)}toNonIndexed(){function e(d,p){const _=d.array,v=d.itemSize,m=d.normalized,x=new _.constructor(p.length*v);let M=0,T=0;for(let C=0,y=p.length;C<y;C++){d.isInterleavedBufferAttribute?M=p[C]*d.data.stride+d.offset:M=p[C]*v;for(let S=0;S<v;S++)x[T++]=_[M++]}return new Qi(x,v,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new $i,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],_=e(p,s);i.setAttribute(d,_)}const f=this.morphAttributes;for(const d in f){const p=[],_=f[d];for(let v=0,m=_.length;v<m;v++){const x=_[v],M=e(x,s);p.push(M)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const _=h[d];i.addGroup(_.start,_.count,_.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const _ in p)p[_]!==void 0&&(e[_]=p[_]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const _=s[p];e.data.attributes[p]=_.toJSON(e.data)}const l={};let f=!1;for(const p in this.morphAttributes){const _=this.morphAttributes[p],v=[];for(let m=0,x=_.length;m<x;m++){const M=_[m];v.push(M.toJSON(e.data))}v.length>0&&(l[p]=v,f=!0)}f&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const _ in l){const v=l[_];this.setAttribute(_,v.clone(i))}const f=e.morphAttributes;for(const _ in f){const v=[],m=f[_];for(let x=0,M=m.length;x<M;x++)v.push(m[x].clone(i));this.morphAttributes[_]=v}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let _=0,v=h.length;_<v;_++){const m=h[_];this.addGroup(m.start,m.count,m.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nv=new sn,Vr=new qE,oc=new Wp,Lv=new nt,lc=new nt,uc=new nt,cc=new nt,Bd=new nt,fc=new nt,Ov=new nt,hc=new nt;class tn extends On{constructor(e=new $i,i=new Oc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let f=0,h=l.length;f<h;f++){const d=l[f].name||String(f);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=f}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,f=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(f&&d){fc.set(0,0,0);for(let p=0,_=f.length;p<_;p++){const v=d[p],m=f[p];v!==0&&(Bd.fromBufferAttribute(m,e),h?fc.addScaledVector(Bd,v):fc.addScaledVector(Bd.sub(i),v))}i.add(fc)}return i}raycast(e,i){const s=this.geometry,l=this.material,f=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),oc.copy(s.boundingSphere),oc.applyMatrix4(f),Vr.copy(e.ray).recast(e.near),!(oc.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(oc,Lv)===null||Vr.origin.distanceToSquared(Lv)>(e.far-e.near)**2))&&(Nv.copy(f).invert(),Vr.copy(e.ray).applyMatrix4(Nv),!(s.boundingBox!==null&&Vr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Vr)))}_computeIntersections(e,i,s){let l;const f=this.geometry,h=this.material,d=f.index,p=f.attributes.position,_=f.attributes.uv,v=f.attributes.uv1,m=f.attributes.normal,x=f.groups,M=f.drawRange;if(d!==null)if(Array.isArray(h))for(let T=0,C=x.length;T<C;T++){const y=x[T],S=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let U=P,X=O;U<X;U+=3){const I=d.getX(U),z=d.getX(U+1),G=d.getX(U+2);l=dc(this,S,e,s,_,v,m,I,z,G),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(d.count,M.start+M.count);for(let y=T,S=C;y<S;y+=3){const P=d.getX(y),O=d.getX(y+1),U=d.getX(y+2);l=dc(this,h,e,s,_,v,m,P,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let T=0,C=x.length;T<C;T++){const y=x[T],S=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(p.count,Math.min(y.start+y.count,M.start+M.count));for(let U=P,X=O;U<X;U+=3){const I=U,z=U+1,G=U+2;l=dc(this,S,e,s,_,v,m,I,z,G),l&&(l.faceIndex=Math.floor(U/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const T=Math.max(0,M.start),C=Math.min(p.count,M.start+M.count);for(let y=T,S=C;y<S;y+=3){const P=y,O=y+1,U=y+2;l=dc(this,h,e,s,_,v,m,P,O,U),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function eT(o,e,i,s,l,f,h,d){let p;if(e.side===ni?p=s.intersectTriangle(h,f,l,!0,d):p=s.intersectTriangle(l,f,h,e.side===mr,d),p===null)return null;hc.copy(d),hc.applyMatrix4(o.matrixWorld);const _=i.ray.origin.distanceTo(hc);return _<i.near||_>i.far?null:{distance:_,point:hc.clone(),object:o}}function dc(o,e,i,s,l,f,h,d,p,_){o.getVertexPosition(d,lc),o.getVertexPosition(p,uc),o.getVertexPosition(_,cc);const v=eT(o,e,i,s,lc,uc,cc,Ov);if(v){const m=new nt;Li.getBarycoord(Ov,lc,uc,cc,m),l&&(v.uv=Li.getInterpolatedAttribute(l,d,p,_,m,new Oe)),f&&(v.uv1=Li.getInterpolatedAttribute(f,d,p,_,m,new Oe)),h&&(v.normal=Li.getInterpolatedAttribute(h,d,p,_,m,new nt),v.normal.dot(s.direction)>0&&v.normal.multiplyScalar(-1));const x={a:d,b:p,c:_,normal:new nt,materialIndex:0};Li.getNormal(lc,uc,cc,x.normal),v.face=x,v.barycoord=m}return v}class ho extends $i{constructor(e=1,i=1,s=1,l=1,f=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:f,depthSegments:h};const d=this;l=Math.floor(l),f=Math.floor(f),h=Math.floor(h);const p=[],_=[],v=[],m=[];let x=0,M=0;T("z","y","x",-1,-1,s,i,e,h,f,0),T("z","y","x",1,-1,s,i,-e,h,f,1),T("x","z","y",1,1,e,s,i,l,h,2),T("x","z","y",1,-1,e,s,-i,l,h,3),T("x","y","z",1,-1,e,i,s,l,f,4),T("x","y","z",-1,-1,e,i,-s,l,f,5),this.setIndex(p),this.setAttribute("position",new Gn(_,3)),this.setAttribute("normal",new Gn(v,3)),this.setAttribute("uv",new Gn(m,2));function T(C,y,S,P,O,U,X,I,z,G,D){const R=U/z,H=X/G,ot=U/2,it=X/2,dt=I/2,ct=z+1,q=G+1;let rt=0,Q=0;const xt=new nt;for(let St=0;St<q;St++){const Ht=St*H-it;for(let ne=0;ne<ct;ne++){const Te=ne*R-ot;xt[C]=Te*P,xt[y]=Ht*O,xt[S]=dt,_.push(xt.x,xt.y,xt.z),xt[C]=0,xt[y]=0,xt[S]=I>0?1:-1,v.push(xt.x,xt.y,xt.z),m.push(ne/z),m.push(1-St/G),rt+=1}}for(let St=0;St<G;St++)for(let Ht=0;Ht<z;Ht++){const ne=x+Ht+ct*St,Te=x+Ht+ct*(St+1),w=x+(Ht+1)+ct*(St+1),j=x+(Ht+1)+ct*St;p.push(ne,Te,j),p.push(Te,w,j),Q+=6}d.addGroup(M,Q,D),M+=Q,x+=rt}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ho(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function co(o){const e={};for(const i in o){e[i]={};for(const s in o[i]){const l=o[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Yn(o){const e={};for(let i=0;i<o.length;i++){const s=co(o[i]);for(const l in s)e[l]=s[l]}return e}function nT(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function Hx(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const iT={clone:co,merge:Yn};var aT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gr extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aT,this.fragmentShader=rT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=co(e.uniforms),this.uniformsGroups=nT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Gx extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new sn,this.projectionMatrix=new sn,this.projectionMatrixInverse=new sn,this.coordinateSystem=ba}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new nt,zv=new Oe,Pv=new Oe;class Ei extends Gx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=zp*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zp*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,i){return this.getViewBounds(e,zv,Pv),i.subVectors(Pv,zv)}setViewOffset(e,i,s,l,f,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(vd*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,f=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,_=h.fullHeight;f+=h.offsetX*l/p,i-=h.offsetY*s/_,l*=h.width/p,s*=h.height/_}const d=this.filmOffset;d!==0&&(f+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(f,f+l,i,i-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Js=-90,$s=1;class sT extends On{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new Ei(Js,$s,e,i);l.layers=this.layers,this.add(l);const f=new Ei(Js,$s,e,i);f.layers=this.layers,this.add(f);const h=new Ei(Js,$s,e,i);h.layers=this.layers,this.add(h);const d=new Ei(Js,$s,e,i);d.layers=this.layers,this.add(d);const p=new Ei(Js,$s,e,i);p.layers=this.layers,this.add(p);const _=new Ei(Js,$s,e,i);_.layers=this.layers,this.add(_)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,f,h,d,p]=i;for(const _ of i)this.remove(_);if(e===ba)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),f.up.set(0,0,-1),f.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Nc)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),f.up.set(0,0,1),f.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const _ of i)this.add(_),_.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[f,h,d,p,_,v]=this.children,m=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,f),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,_),s.texture.generateMipmaps=C,e.setRenderTarget(s,5,l),e.render(i,v),e.setRenderTarget(m,x,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class Vx extends jn{constructor(e=[],i=oo,s,l,f,h,d,p,_,v){super(e,i,s,l,f,h,d,p,_,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class oT extends ts{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Vx(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Oi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new ho(5,5,5),f=new gr({name:"CubemapFromEquirect",uniforms:co(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:ni,blending:dr});f.uniforms.tEquirect.value=i;const h=new tn(l,f),d=i.minFilter;return i.minFilter===Qr&&(i.minFilter=Oi),new sT(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const f=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(f)}}class Wn extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lT={type:"move"};class Fd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new nt,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new nt),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new nt,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new nt),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,f=null,h=null;const d=this._targetRay,p=this._grip,_=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(_&&e.hand){h=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,s),S=this._getHandJoint(_,C);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=_.joints["index-finger-tip"],m=_.joints["thumb-tip"],x=v.position.distanceTo(m.position),M=.02,T=.005;_.inputState.pinching&&x>M+T?(_.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!_.inputState.pinching&&x<=M-T&&(_.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(f=i.getPose(e.gripSpace,s),f!==null&&(p.matrix.fromArray(f.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,f.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(f.linearVelocity)):p.hasLinearVelocity=!1,f.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(f.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&f!==null&&(l=f),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(lT)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=f!==null),_!==null&&(_.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new Wn;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class jp{constructor(e,i=1,s=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=i,this.far=s}clone(){return new jp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class uT extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ji,this.environmentIntensity=1,this.environmentRotation=new Ji,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const Hd=new nt,cT=new nt,fT=new fe;class Yr{constructor(e=new nt(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=Hd.subVectors(s,i).cross(cT.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(Hd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const f=-(e.start.dot(this.normal)+this.constant)/l;return f<0||f>1?null:i.copy(e.start).addScaledVector(s,f)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||fT.getNormalMatrix(e),l=this.coplanarPoint(Hd).applyMatrix4(e),f=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(f),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Wp,pc=new nt;class Zp{constructor(e=new Yr,i=new Yr,s=new Yr,l=new Yr,f=new Yr,h=new Yr){this.planes=[e,i,s,l,f,h]}set(e,i,s,l,f,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(f),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ba){const s=this.planes,l=e.elements,f=l[0],h=l[1],d=l[2],p=l[3],_=l[4],v=l[5],m=l[6],x=l[7],M=l[8],T=l[9],C=l[10],y=l[11],S=l[12],P=l[13],O=l[14],U=l[15];if(s[0].setComponents(p-f,x-_,y-M,U-S).normalize(),s[1].setComponents(p+f,x+_,y+M,U+S).normalize(),s[2].setComponents(p+h,x+v,y+T,U+P).normalize(),s[3].setComponents(p-h,x-v,y-T,U-P).normalize(),s[4].setComponents(p-d,x-m,y-C,U-O).normalize(),i===ba)s[5].setComponents(p+d,x+m,y+C,U+O).normalize();else if(i===Nc)s[5].setComponents(d,m,C,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Xr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){return Xr.center.set(0,0,0),Xr.radius=.7071067811865476,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let f=0;f<6;f++)if(i[f].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(pc.x=l.normal.x>0?e.max.x:e.min.x,pc.y=l.normal.y>0?e.max.y:e.min.y,pc.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(pc)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class hT extends jn{constructor(e,i,s,l,f,h,d,p,_){super(e,i,s,l,f,h,d,p,_),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xx extends jn{constructor(e,i,s=$r,l,f,h,d=Pi,p=Pi,_,v=vl){if(v!==vl&&v!==xl)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");super(null,l,f,h,d,p,v,s,_),this.isDepthTexture=!0,this.image={width:e,height:i},this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class Jr extends $i{constructor(e=1,i=1,s=1,l=32,f=1,h=!1,d=0,p=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:i,height:s,radialSegments:l,heightSegments:f,openEnded:h,thetaStart:d,thetaLength:p};const _=this;l=Math.floor(l),f=Math.floor(f);const v=[],m=[],x=[],M=[];let T=0;const C=[],y=s/2;let S=0;P(),h===!1&&(e>0&&O(!0),i>0&&O(!1)),this.setIndex(v),this.setAttribute("position",new Gn(m,3)),this.setAttribute("normal",new Gn(x,3)),this.setAttribute("uv",new Gn(M,2));function P(){const U=new nt,X=new nt;let I=0;const z=(i-e)/s;for(let G=0;G<=f;G++){const D=[],R=G/f,H=R*(i-e)+e;for(let ot=0;ot<=l;ot++){const it=ot/l,dt=it*p+d,ct=Math.sin(dt),q=Math.cos(dt);X.x=H*ct,X.y=-R*s+y,X.z=H*q,m.push(X.x,X.y,X.z),U.set(ct,z,q).normalize(),x.push(U.x,U.y,U.z),M.push(it,1-R),D.push(T++)}C.push(D)}for(let G=0;G<l;G++)for(let D=0;D<f;D++){const R=C[D][G],H=C[D+1][G],ot=C[D+1][G+1],it=C[D][G+1];(e>0||D!==0)&&(v.push(R,H,it),I+=3),(i>0||D!==f-1)&&(v.push(H,ot,it),I+=3)}_.addGroup(S,I,0),S+=I}function O(U){const X=T,I=new Oe,z=new nt;let G=0;const D=U===!0?e:i,R=U===!0?1:-1;for(let ot=1;ot<=l;ot++)m.push(0,y*R,0),x.push(0,R,0),M.push(.5,.5),T++;const H=T;for(let ot=0;ot<=l;ot++){const dt=ot/l*p+d,ct=Math.cos(dt),q=Math.sin(dt);z.x=D*q,z.y=y*R,z.z=D*ct,m.push(z.x,z.y,z.z),x.push(0,R,0),I.x=ct*.5+.5,I.y=q*.5*R+.5,M.push(I.x,I.y),T++}for(let ot=0;ot<l;ot++){const it=X+ot,dt=H+ot;U===!0?v.push(dt,dt+1,it):v.push(dt+1,dt,it),G+=3}_.addGroup(S,G,U===!0?1:2),S+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Kp extends Jr{constructor(e=1,i=1,s=32,l=1,f=!1,h=0,d=Math.PI*2){super(0,e,i,s,l,f,h,d),this.type="ConeGeometry",this.parameters={radius:e,height:i,radialSegments:s,heightSegments:l,openEnded:f,thetaStart:h,thetaLength:d}}static fromJSON(e){return new Kp(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rl extends $i{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const f=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),_=d+1,v=p+1,m=e/d,x=i/p,M=[],T=[],C=[],y=[];for(let S=0;S<v;S++){const P=S*x-h;for(let O=0;O<_;O++){const U=O*m-f;T.push(U,-P,0),C.push(0,0,1),y.push(O/d),y.push(1-S/p)}}for(let S=0;S<p;S++)for(let P=0;P<d;P++){const O=P+_*S,U=P+_*(S+1),X=P+1+_*(S+1),I=P+1+_*S;M.push(O,U,I),M.push(U,X,I)}this.setIndex(M),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rl(e.width,e.height,e.widthSegments,e.heightSegments)}}class ur extends $i{constructor(e=1,i=32,s=16,l=0,f=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:f,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let _=0;const v=[],m=new nt,x=new nt,M=[],T=[],C=[],y=[];for(let S=0;S<=s;S++){const P=[],O=S/s;let U=0;S===0&&h===0?U=.5/i:S===s&&p===Math.PI&&(U=-.5/i);for(let X=0;X<=i;X++){const I=X/i;m.x=-e*Math.cos(l+I*f)*Math.sin(h+O*d),m.y=e*Math.cos(h+O*d),m.z=e*Math.sin(l+I*f)*Math.sin(h+O*d),T.push(m.x,m.y,m.z),x.copy(m).normalize(),C.push(x.x,x.y,x.z),y.push(I+U,1-O),P.push(_++)}v.push(P)}for(let S=0;S<s;S++)for(let P=0;P<i;P++){const O=v[S][P+1],U=v[S][P],X=v[S+1][P],I=v[S+1][P+1];(S!==0||h>0)&&M.push(O,U,I),(S!==s-1||p<Math.PI)&&M.push(U,X,I)}this.setIndex(M),this.setAttribute("position",new Gn(T,3)),this.setAttribute("normal",new Gn(C,3)),this.setAttribute("uv",new Gn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ur(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Pc extends $i{constructor(e=1,i=.4,s=12,l=48,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:i,radialSegments:s,tubularSegments:l,arc:f},s=Math.floor(s),l=Math.floor(l);const h=[],d=[],p=[],_=[],v=new nt,m=new nt,x=new nt;for(let M=0;M<=s;M++)for(let T=0;T<=l;T++){const C=T/l*f,y=M/s*Math.PI*2;m.x=(e+i*Math.cos(y))*Math.cos(C),m.y=(e+i*Math.cos(y))*Math.sin(C),m.z=i*Math.sin(y),d.push(m.x,m.y,m.z),v.x=e*Math.cos(C),v.y=e*Math.sin(C),x.subVectors(m,v).normalize(),p.push(x.x,x.y,x.z),_.push(T/l),_.push(M/s)}for(let M=1;M<=s;M++)for(let T=1;T<=l;T++){const C=(l+1)*M+T-1,y=(l+1)*(M-1)+T-1,S=(l+1)*(M-1)+T,P=(l+1)*M+T;h.push(C,y,P),h.push(y,S,P)}this.setIndex(h),this.setAttribute("position",new Gn(d,3)),this.setAttribute("normal",new Gn(p,3)),this.setAttribute("uv",new Gn(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pc(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class fr extends bl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nx,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ji,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class dT extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=EE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pT extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class kx extends On{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(i.object.target=this.target.uuid),i}}class mT extends kx{constructor(e,i,s){super(e,s),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(i)}copy(e,i){return super.copy(e,i),this.groundColor.copy(e.groundColor),this}}const Gd=new sn,Iv=new nt,Bv=new nt;class gT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new sn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zp,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;Iv.setFromMatrixPosition(e.matrixWorld),i.position.copy(Iv),Bv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(Bv),i.updateMatrixWorld(),Gd.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Gd),s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class qx extends Gx{constructor(e=-1,i=1,s=1,l=-1,f=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=f,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,f,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=f,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let f=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const _=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;f+=_*this.view.offsetX,h=f+_*this.view.width,d-=v*this.view.offsetY,p=d-v*this.view.height}this.projectionMatrix.makeOrthographic(f,h,d,p,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class _T extends gT{constructor(){super(new qx(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class vT extends kx{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new _T}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class xT extends Ei{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}function Fv(o,e,i,s){const l=ST(s);switch(i){case Ax:return o*e;case Rx:return o*e;case Cx:return o*e*2;case wx:return o*e/l.components*l.byteLength;case Xp:return o*e/l.components*l.byteLength;case Dx:return o*e*2/l.components*l.byteLength;case kp:return o*e*2/l.components*l.byteLength;case bx:return o*e*3/l.components*l.byteLength;case zi:return o*e*4/l.components*l.byteLength;case qp:return o*e*4/l.components*l.byteLength;case Ec:case Tc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case Ac:case bc:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case cp:case hp:return Math.max(o,16)*Math.max(e,8)/4;case up:case fp:return Math.max(o,8)*Math.max(e,8)/2;case dp:case pp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*8;case mp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case gp:return Math.floor((o+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((o+4)/5)*Math.floor((e+3)/4)*16;case vp:return Math.floor((o+4)/5)*Math.floor((e+4)/5)*16;case xp:return Math.floor((o+5)/6)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((o+5)/6)*Math.floor((e+5)/6)*16;case yp:return Math.floor((o+7)/8)*Math.floor((e+4)/5)*16;case Mp:return Math.floor((o+7)/8)*Math.floor((e+5)/6)*16;case Ep:return Math.floor((o+7)/8)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((o+9)/10)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((o+9)/10)*Math.floor((e+5)/6)*16;case bp:return Math.floor((o+9)/10)*Math.floor((e+7)/8)*16;case Rp:return Math.floor((o+9)/10)*Math.floor((e+9)/10)*16;case Cp:return Math.floor((o+11)/12)*Math.floor((e+9)/10)*16;case wp:return Math.floor((o+11)/12)*Math.floor((e+11)/12)*16;case Rc:case Dp:case Up:return Math.ceil(o/4)*Math.ceil(e/4)*16;case Ux:case Np:return Math.ceil(o/4)*Math.ceil(e/4)*8;case Lp:case Op:return Math.ceil(o/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function ST(o){switch(o){case Ca:case Mx:return{byteLength:1,components:1};case gl:case Ex:case Ml:return{byteLength:2,components:1};case Gp:case Vp:return{byteLength:2,components:4};case $r:case Hp:case Aa:return{byteLength:4,components:1};case Tx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Yx(){let o=null,e=!1,i=null,s=null;function l(f,h){i(f,h),s=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(f){i=f},setContext:function(f){o=f}}}function yT(o){const e=new WeakMap;function i(d,p){const _=d.array,v=d.usage,m=_.byteLength,x=o.createBuffer();o.bindBuffer(p,x),o.bufferData(p,_,v),d.onUploadCallback();let M;if(_ instanceof Float32Array)M=o.FLOAT;else if(_ instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(_ instanceof Int16Array)M=o.SHORT;else if(_ instanceof Uint32Array)M=o.UNSIGNED_INT;else if(_ instanceof Int32Array)M=o.INT;else if(_ instanceof Int8Array)M=o.BYTE;else if(_ instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(_ instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+_);return{buffer:x,type:M,bytesPerElement:_.BYTES_PER_ELEMENT,version:d.version,size:m}}function s(d,p,_){const v=p.array,m=p.updateRanges;if(o.bindBuffer(_,d),m.length===0)o.bufferSubData(_,0,v);else{m.sort((M,T)=>M.start-T.start);let x=0;for(let M=1;M<m.length;M++){const T=m[x],C=m[M];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++x,m[x]=C)}m.length=x+1;for(let M=0,T=m.length;M<T;M++){const C=m[M];o.bufferSubData(_,C.start*v.BYTES_PER_ELEMENT,v,C.start,C.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function f(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(o.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const _=e.get(d);if(_===void 0)e.set(d,i(d,p));else if(_.version<d.version){if(_.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(_.buffer,d,p),_.version=d.version}}return{get:l,remove:f,update:h}}var MT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ET=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,TT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,RT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,CT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DT=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,UT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,NT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,LT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,PT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,FT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,GT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,VT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,XT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,kT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,qT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,YT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,WT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,jT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,KT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JT="gl_FragColor = linearToOutputTexel( gl_FragColor );",$T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,t1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,i1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,r1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,s1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,o1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,u1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,p1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,m1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,g1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,S1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,y1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,M1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,E1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T1=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,A1=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b1=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,D1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,F1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,H1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,G1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,k1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,q1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,j1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,eA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,nA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,iA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,aA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,oA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,mA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,gA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_A=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const yA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,MA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,TA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,CA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,DA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,NA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,LA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,PA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,VA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,XA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,YA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,KA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$A=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,he={alphahash_fragment:MT,alphahash_pars_fragment:ET,alphamap_fragment:TT,alphamap_pars_fragment:AT,alphatest_fragment:bT,alphatest_pars_fragment:RT,aomap_fragment:CT,aomap_pars_fragment:wT,batching_pars_vertex:DT,batching_vertex:UT,begin_vertex:NT,beginnormal_vertex:LT,bsdfs:OT,iridescence_fragment:zT,bumpmap_pars_fragment:PT,clipping_planes_fragment:IT,clipping_planes_pars_fragment:BT,clipping_planes_pars_vertex:FT,clipping_planes_vertex:HT,color_fragment:GT,color_pars_fragment:VT,color_pars_vertex:XT,color_vertex:kT,common:qT,cube_uv_reflection_fragment:YT,defaultnormal_vertex:WT,displacementmap_pars_vertex:jT,displacementmap_vertex:ZT,emissivemap_fragment:KT,emissivemap_pars_fragment:QT,colorspace_fragment:JT,colorspace_pars_fragment:$T,envmap_fragment:t1,envmap_common_pars_fragment:e1,envmap_pars_fragment:n1,envmap_pars_vertex:i1,envmap_physical_pars_fragment:p1,envmap_vertex:a1,fog_vertex:r1,fog_pars_vertex:s1,fog_fragment:o1,fog_pars_fragment:l1,gradientmap_pars_fragment:u1,lightmap_pars_fragment:c1,lights_lambert_fragment:f1,lights_lambert_pars_fragment:h1,lights_pars_begin:d1,lights_toon_fragment:m1,lights_toon_pars_fragment:g1,lights_phong_fragment:_1,lights_phong_pars_fragment:v1,lights_physical_fragment:x1,lights_physical_pars_fragment:S1,lights_fragment_begin:y1,lights_fragment_maps:M1,lights_fragment_end:E1,logdepthbuf_fragment:T1,logdepthbuf_pars_fragment:A1,logdepthbuf_pars_vertex:b1,logdepthbuf_vertex:R1,map_fragment:C1,map_pars_fragment:w1,map_particle_fragment:D1,map_particle_pars_fragment:U1,metalnessmap_fragment:N1,metalnessmap_pars_fragment:L1,morphinstance_vertex:O1,morphcolor_vertex:z1,morphnormal_vertex:P1,morphtarget_pars_vertex:I1,morphtarget_vertex:B1,normal_fragment_begin:F1,normal_fragment_maps:H1,normal_pars_fragment:G1,normal_pars_vertex:V1,normal_vertex:X1,normalmap_pars_fragment:k1,clearcoat_normal_fragment_begin:q1,clearcoat_normal_fragment_maps:Y1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:j1,opaque_fragment:Z1,packing:K1,premultiplied_alpha_fragment:Q1,project_vertex:J1,dithering_fragment:$1,dithering_pars_fragment:tA,roughnessmap_fragment:eA,roughnessmap_pars_fragment:nA,shadowmap_pars_fragment:iA,shadowmap_pars_vertex:aA,shadowmap_vertex:rA,shadowmask_pars_fragment:sA,skinbase_vertex:oA,skinning_pars_vertex:lA,skinning_vertex:uA,skinnormal_vertex:cA,specularmap_fragment:fA,specularmap_pars_fragment:hA,tonemapping_fragment:dA,tonemapping_pars_fragment:pA,transmission_fragment:mA,transmission_pars_fragment:gA,uv_pars_fragment:_A,uv_pars_vertex:vA,uv_vertex:xA,worldpos_vertex:SA,background_vert:yA,background_frag:MA,backgroundCube_vert:EA,backgroundCube_frag:TA,cube_vert:AA,cube_frag:bA,depth_vert:RA,depth_frag:CA,distanceRGBA_vert:wA,distanceRGBA_frag:DA,equirect_vert:UA,equirect_frag:NA,linedashed_vert:LA,linedashed_frag:OA,meshbasic_vert:zA,meshbasic_frag:PA,meshlambert_vert:IA,meshlambert_frag:BA,meshmatcap_vert:FA,meshmatcap_frag:HA,meshnormal_vert:GA,meshnormal_frag:VA,meshphong_vert:XA,meshphong_frag:kA,meshphysical_vert:qA,meshphysical_frag:YA,meshtoon_vert:WA,meshtoon_frag:jA,points_vert:ZA,points_frag:KA,shadow_vert:QA,shadow_frag:JA,sprite_vert:$A,sprite_frag:tb},Ut={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new fe}},envmap:{envMap:{value:null},envMapRotation:{value:new fe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new fe},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0},uvTransform:{value:new fe}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new fe},alphaMap:{value:null},alphaMapTransform:{value:new fe},alphaTest:{value:0}}},Zi={basic:{uniforms:Yn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:he.meshbasic_vert,fragmentShader:he.meshbasic_frag},lambert:{uniforms:Yn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:he.meshlambert_vert,fragmentShader:he.meshlambert_frag},phong:{uniforms:Yn([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:he.meshphong_vert,fragmentShader:he.meshphong_frag},standard:{uniforms:Yn([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag},toon:{uniforms:Yn([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new Ce(0)}}]),vertexShader:he.meshtoon_vert,fragmentShader:he.meshtoon_frag},matcap:{uniforms:Yn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:he.meshmatcap_vert,fragmentShader:he.meshmatcap_frag},points:{uniforms:Yn([Ut.points,Ut.fog]),vertexShader:he.points_vert,fragmentShader:he.points_frag},dashed:{uniforms:Yn([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:he.linedashed_vert,fragmentShader:he.linedashed_frag},depth:{uniforms:Yn([Ut.common,Ut.displacementmap]),vertexShader:he.depth_vert,fragmentShader:he.depth_frag},normal:{uniforms:Yn([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:he.meshnormal_vert,fragmentShader:he.meshnormal_frag},sprite:{uniforms:Yn([Ut.sprite,Ut.fog]),vertexShader:he.sprite_vert,fragmentShader:he.sprite_frag},background:{uniforms:{uvTransform:{value:new fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:he.background_vert,fragmentShader:he.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new fe}},vertexShader:he.backgroundCube_vert,fragmentShader:he.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:he.cube_vert,fragmentShader:he.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:he.equirect_vert,fragmentShader:he.equirect_frag},distanceRGBA:{uniforms:Yn([Ut.common,Ut.displacementmap,{referencePosition:{value:new nt},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:he.distanceRGBA_vert,fragmentShader:he.distanceRGBA_frag},shadow:{uniforms:Yn([Ut.lights,Ut.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:he.shadow_vert,fragmentShader:he.shadow_frag}};Zi.physical={uniforms:Yn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new fe},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new fe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new fe},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new fe},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new fe},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new fe},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new fe}}]),vertexShader:he.meshphysical_vert,fragmentShader:he.meshphysical_frag};const mc={r:0,b:0,g:0},kr=new Ji,eb=new sn;function nb(o,e,i,s,l,f,h){const d=new Ce(0);let p=f===!0?0:1,_,v,m=null,x=0,M=null;function T(O){let U=O.isScene===!0?O.background:null;return U&&U.isTexture&&(U=(O.backgroundBlurriness>0?i:e).get(U)),U}function C(O){let U=!1;const X=T(O);X===null?S(d,p):X&&X.isColor&&(S(X,1),U=!0);const I=o.xr.getEnvironmentBlendMode();I==="additive"?s.buffers.color.setClear(0,0,0,1,h):I==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(o.autoClear||U)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,U){const X=T(U);X&&(X.isCubeTexture||X.mapping===zc)?(v===void 0&&(v=new tn(new ho(1,1,1),new gr({name:"BackgroundCubeMaterial",uniforms:co(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(I,z,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(v)),kr.copy(U.backgroundRotation),kr.x*=-1,kr.y*=-1,kr.z*=-1,X.isCubeTexture&&X.isRenderTargetTexture===!1&&(kr.y*=-1,kr.z*=-1),v.material.uniforms.envMap.value=X,v.material.uniforms.flipEnvMap.value=X.isCubeTexture&&X.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(eb.makeRotationFromEuler(kr)),v.material.toneMapped=Ne.getTransfer(X.colorSpace)!==Ge,(m!==X||x!==X.version||M!==o.toneMapping)&&(v.material.needsUpdate=!0,m=X,x=X.version,M=o.toneMapping),v.layers.enableAll(),O.unshift(v,v.geometry,v.material,0,0,null)):X&&X.isTexture&&(_===void 0&&(_=new tn(new Rl(2,2),new gr({name:"BackgroundMaterial",uniforms:co(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:mr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),Object.defineProperty(_.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(_)),_.material.uniforms.t2D.value=X,_.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,_.material.toneMapped=Ne.getTransfer(X.colorSpace)!==Ge,X.matrixAutoUpdate===!0&&X.updateMatrix(),_.material.uniforms.uvTransform.value.copy(X.matrix),(m!==X||x!==X.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,m=X,x=X.version,M=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null))}function S(O,U){O.getRGB(mc,Hx(o)),s.buffers.color.setClear(mc.r,mc.g,mc.b,U,h)}function P(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,U=1){d.set(O),p=U,S(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,S(d,p)},render:C,addToRenderList:y,dispose:P}}function ib(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),s={},l=x(null);let f=l,h=!1;function d(R,H,ot,it,dt){let ct=!1;const q=m(it,ot,H);f!==q&&(f=q,_(f.object)),ct=M(R,it,ot,dt),ct&&T(R,it,ot,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(ct||h)&&(h=!1,U(R,H,ot,it),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function p(){return o.createVertexArray()}function _(R){return o.bindVertexArray(R)}function v(R){return o.deleteVertexArray(R)}function m(R,H,ot){const it=ot.wireframe===!0;let dt=s[R.id];dt===void 0&&(dt={},s[R.id]=dt);let ct=dt[H.id];ct===void 0&&(ct={},dt[H.id]=ct);let q=ct[it];return q===void 0&&(q=x(p()),ct[it]=q),q}function x(R){const H=[],ot=[],it=[];for(let dt=0;dt<i;dt++)H[dt]=0,ot[dt]=0,it[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ot,attributeDivisors:it,object:R,attributes:{},index:null}}function M(R,H,ot,it){const dt=f.attributes,ct=H.attributes;let q=0;const rt=ot.getAttributes();for(const Q in rt)if(rt[Q].location>=0){const St=dt[Q];let Ht=ct[Q];if(Ht===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(Ht=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(Ht=R.instanceColor)),St===void 0||St.attribute!==Ht||Ht&&St.data!==Ht.data)return!0;q++}return f.attributesNum!==q||f.index!==it}function T(R,H,ot,it){const dt={},ct=H.attributes;let q=0;const rt=ot.getAttributes();for(const Q in rt)if(rt[Q].location>=0){let St=ct[Q];St===void 0&&(Q==="instanceMatrix"&&R.instanceMatrix&&(St=R.instanceMatrix),Q==="instanceColor"&&R.instanceColor&&(St=R.instanceColor));const Ht={};Ht.attribute=St,St&&St.data&&(Ht.data=St.data),dt[Q]=Ht,q++}f.attributes=dt,f.attributesNum=q,f.index=it}function C(){const R=f.newAttributes;for(let H=0,ot=R.length;H<ot;H++)R[H]=0}function y(R){S(R,0)}function S(R,H){const ot=f.newAttributes,it=f.enabledAttributes,dt=f.attributeDivisors;ot[R]=1,it[R]===0&&(o.enableVertexAttribArray(R),it[R]=1),dt[R]!==H&&(o.vertexAttribDivisor(R,H),dt[R]=H)}function P(){const R=f.newAttributes,H=f.enabledAttributes;for(let ot=0,it=H.length;ot<it;ot++)H[ot]!==R[ot]&&(o.disableVertexAttribArray(ot),H[ot]=0)}function O(R,H,ot,it,dt,ct,q){q===!0?o.vertexAttribIPointer(R,H,ot,dt,ct):o.vertexAttribPointer(R,H,ot,it,dt,ct)}function U(R,H,ot,it){C();const dt=it.attributes,ct=ot.getAttributes(),q=H.defaultAttributeValues;for(const rt in ct){const Q=ct[rt];if(Q.location>=0){let xt=dt[rt];if(xt===void 0&&(rt==="instanceMatrix"&&R.instanceMatrix&&(xt=R.instanceMatrix),rt==="instanceColor"&&R.instanceColor&&(xt=R.instanceColor)),xt!==void 0){const St=xt.normalized,Ht=xt.itemSize,ne=e.get(xt);if(ne===void 0)continue;const Te=ne.buffer,w=ne.type,j=ne.bytesPerElement,mt=w===o.INT||w===o.UNSIGNED_INT||xt.gpuType===Hp;if(xt.isInterleavedBufferAttribute){const ut=xt.data,Tt=ut.stride,Vt=xt.offset;if(ut.isInstancedInterleavedBuffer){for(let wt=0;wt<Q.locationSize;wt++)S(Q.location+wt,ut.meshPerAttribute);R.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let wt=0;wt<Q.locationSize;wt++)y(Q.location+wt);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let wt=0;wt<Q.locationSize;wt++)O(Q.location+wt,Ht/Q.locationSize,w,St,Tt*j,(Vt+Ht/Q.locationSize*wt)*j,mt)}else{if(xt.isInstancedBufferAttribute){for(let ut=0;ut<Q.locationSize;ut++)S(Q.location+ut,xt.meshPerAttribute);R.isInstancedMesh!==!0&&it._maxInstanceCount===void 0&&(it._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ut=0;ut<Q.locationSize;ut++)y(Q.location+ut);o.bindBuffer(o.ARRAY_BUFFER,Te);for(let ut=0;ut<Q.locationSize;ut++)O(Q.location+ut,Ht/Q.locationSize,w,St,Ht*j,Ht/Q.locationSize*ut*j,mt)}}else if(q!==void 0){const St=q[rt];if(St!==void 0)switch(St.length){case 2:o.vertexAttrib2fv(Q.location,St);break;case 3:o.vertexAttrib3fv(Q.location,St);break;case 4:o.vertexAttrib4fv(Q.location,St);break;default:o.vertexAttrib1fv(Q.location,St)}}}}P()}function X(){G();for(const R in s){const H=s[R];for(const ot in H){const it=H[ot];for(const dt in it)v(it[dt].object),delete it[dt];delete H[ot]}delete s[R]}}function I(R){if(s[R.id]===void 0)return;const H=s[R.id];for(const ot in H){const it=H[ot];for(const dt in it)v(it[dt].object),delete it[dt];delete H[ot]}delete s[R.id]}function z(R){for(const H in s){const ot=s[H];if(ot[R.id]===void 0)continue;const it=ot[R.id];for(const dt in it)v(it[dt].object),delete it[dt];delete ot[R.id]}}function G(){D(),h=!0,f!==l&&(f=l,_(f.object))}function D(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:D,dispose:X,releaseStatesOfGeometry:I,releaseStatesOfProgram:z,initAttributes:C,enableAttribute:y,disableUnusedAttributes:P}}function ab(o,e,i){let s;function l(_){s=_}function f(_,v){o.drawArrays(s,_,v),i.update(v,s,1)}function h(_,v,m){m!==0&&(o.drawArraysInstanced(s,_,v,m),i.update(v,s,m))}function d(_,v,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,_,0,v,0,m);let M=0;for(let T=0;T<m;T++)M+=v[T];i.update(M,s,1)}function p(_,v,m,x){if(m===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<_.length;T++)h(_[T],v[T],x[T]);else{M.multiDrawArraysInstancedWEBGL(s,_,0,v,0,x,0,m);let T=0;for(let C=0;C<m;C++)T+=v[C]*x[C];i.update(T,s,1)}}this.setMode=l,this.render=f,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function rb(o,e,i,s){let l;function f(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(z){return!(z!==zi&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(z){const G=z===Ml&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==Ca&&s.convert(z)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&z!==Aa&&!G)}function p(z){if(z==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let _=i.precision!==void 0?i.precision:"highp";const v=p(_);v!==_&&(console.warn("THREE.WebGLRenderer:",_,"not supported, using",v,"instead."),_=v);const m=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),T=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),S=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),U=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),X=T>0,I=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:f,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:_,logarithmicDepthBuffer:m,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:U,vertexTextures:X,maxSamples:I}}function sb(o){const e=this;let i=null,s=0,l=!1,f=!1;const h=new Yr,d=new fe,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(m,x){const M=m.length!==0||x||s!==0||l;return l=x,s=m.length,M},this.beginShadows=function(){f=!0,v(null)},this.endShadows=function(){f=!1},this.setGlobalState=function(m,x){i=v(m,x,0)},this.setState=function(m,x,M){const T=m.clippingPlanes,C=m.clipIntersection,y=m.clipShadows,S=o.get(m);if(!l||T===null||T.length===0||f&&!y)f?v(null):_();else{const P=f?0:s,O=P*4;let U=S.clippingState||null;p.value=U,U=v(T,x,O,M);for(let X=0;X!==O;++X)U[X]=i[X];S.clippingState=U,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=P}};function _(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function v(m,x,M,T){const C=m!==null?m.length:0;let y=null;if(C!==0){if(y=p.value,T!==!0||y===null){const S=M+C*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<S)&&(y=new Float32Array(S));for(let O=0,U=M;O!==C;++O,U+=4)h.copy(m[O]).applyMatrix4(P,d),h.normal.toArray(y,U),y[U+3]=h.constant}p.value=y,p.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function ob(o){let e=new WeakMap;function i(h,d){return d===sp?h.mapping=oo:d===op&&(h.mapping=lo),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===sp||d===op)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const _=new oT(p.height);return _.fromEquirectangularTexture(o,h),e.set(h,_),h.addEventListener("dispose",l),i(_.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function f(){e=new WeakMap}return{get:s,dispose:f}}const io=4,Hv=[.125,.215,.35,.446,.526,.582],Zr=20,Vd=new qx,Gv=new Ce;let Xd=null,kd=0,qd=0,Yd=!1;const Wr=(1+Math.sqrt(5))/2,to=1/Wr,Vv=[new nt(-Wr,to,0),new nt(Wr,to,0),new nt(-to,0,Wr),new nt(to,0,Wr),new nt(0,Wr,-to),new nt(0,Wr,to),new nt(-1,1,-1),new nt(1,1,-1),new nt(-1,1,1),new nt(1,1,1)],lb=new nt;class Xv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,s=.1,l=100,f={}){const{size:h=256,position:d=lb}=f;Xd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qv(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xd,kd,qd),this._renderer.xr.enabled=Yd,e.scissorTest=!1,gc(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===oo||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xd=this._renderer.getRenderTarget(),kd=this._renderer.getActiveCubeFace(),qd=this._renderer.getActiveMipmapLevel(),Yd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:Oi,minFilter:Oi,generateMipmaps:!1,type:Ml,format:zi,colorSpace:uo,depthBuffer:!1},l=kv(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kv(e,i,s);const{_lodMax:f}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ub(f)),this._blurMaterial=cb(f,e,i)}return l}_compileMaterial(e){const i=new tn(this._lodPlanes[0],e);this._renderer.compile(i,Vd)}_sceneToCubeUV(e,i,s,l,f){const p=new Ei(90,1,i,s),_=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],m=this._renderer,x=m.autoClear,M=m.toneMapping;m.getClearColor(Gv),m.toneMapping=pr,m.autoClear=!1;const T=new Oc({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),C=new tn(new ho,T);let y=!1;const S=e.background;S?S.isColor&&(T.color.copy(S),e.background=null,y=!0):(T.color.copy(Gv),y=!0);for(let P=0;P<6;P++){const O=P%3;O===0?(p.up.set(0,_[P],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x+v[P],f.y,f.z)):O===1?(p.up.set(0,0,_[P]),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y+v[P],f.z)):(p.up.set(0,_[P],0),p.position.set(f.x,f.y,f.z),p.lookAt(f.x,f.y,f.z+v[P]));const U=this._cubeSize;gc(l,O*U,P>2?U:0,U,U),m.setRenderTarget(l),y&&m.render(C,p),m.render(e,p)}C.geometry.dispose(),C.material.dispose(),m.toneMapping=M,m.autoClear=x,e.background=S}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===oo||e.mapping===lo;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qv());const f=l?this._cubemapMaterial:this._equirectMaterial,h=new tn(this._lodPlanes[0],f),d=f.uniforms;d.envMap.value=e;const p=this._cubeSize;gc(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,Vd)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let f=1;f<l;f++){const h=Math.sqrt(this._sigmas[f]*this._sigmas[f]-this._sigmas[f-1]*this._sigmas[f-1]),d=Vv[(l-f-1)%Vv.length];this._blur(e,f-1,f,h,d)}i.autoClear=s}_blur(e,i,s,l,f){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",f),this._halfBlur(h,e,s,s,l,"longitudinal",f)}_halfBlur(e,i,s,l,f,h,d){const p=this._renderer,_=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,m=new tn(this._lodPlanes[l],_),x=_.uniforms,M=this._sizeLods[s]-1,T=isFinite(f)?Math.PI/(2*M):2*Math.PI/(2*Zr-1),C=f/T,y=isFinite(f)?1+Math.floor(v*C):Zr;y>Zr&&console.warn(`sigmaRadians, ${f}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${Zr}`);const S=[];let P=0;for(let z=0;z<Zr;++z){const G=z/C,D=Math.exp(-G*G/2);S.push(D),z===0?P+=D:z<y&&(P+=2*D)}for(let z=0;z<S.length;z++)S[z]=S[z]/P;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=S,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=T,x.mipInt.value=O-s;const U=this._sizeLods[l],X=3*U*(l>O-io?l-O+io:0),I=4*(this._cubeSize-U);gc(i,X,I,3*U,2*U),p.setRenderTarget(i),p.render(m,Vd)}}function ub(o){const e=[],i=[],s=[];let l=o;const f=o-io+1+Hv.length;for(let h=0;h<f;h++){const d=Math.pow(2,l);i.push(d);let p=1/d;h>o-io?p=Hv[h-o+io-1]:h===0&&(p=0),s.push(p);const _=1/(d-2),v=-_,m=1+_,x=[v,v,m,v,m,m,v,v,m,m,v,m],M=6,T=6,C=3,y=2,S=1,P=new Float32Array(C*T*M),O=new Float32Array(y*T*M),U=new Float32Array(S*T*M);for(let I=0;I<M;I++){const z=I%3*2/3-1,G=I>2?0:-1,D=[z,G,0,z+2/3,G,0,z+2/3,G+1,0,z,G,0,z+2/3,G+1,0,z,G+1,0];P.set(D,C*T*I),O.set(x,y*T*I);const R=[I,I,I,I,I,I];U.set(R,S*T*I)}const X=new $i;X.setAttribute("position",new Qi(P,C)),X.setAttribute("uv",new Qi(O,y)),X.setAttribute("faceIndex",new Qi(U,S)),e.push(X),l>io&&l--}return{lodPlanes:e,sizeLods:i,sigmas:s}}function kv(o,e,i){const s=new ts(o,e,i);return s.texture.mapping=zc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function gc(o,e,i,s,l){o.viewport.set(e,i,s,l),o.scissor.set(e,i,s,l)}function cb(o,e,i){const s=new Float32Array(Zr),l=new nt(0,1,0);return new gr({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function qv(){return new gr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Yv(){return new gr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:dr,depthTest:!1,depthWrite:!1})}function Qp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fb(o){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,_=p===sp||p===op,v=p===oo||p===lo;if(_||v){let m=e.get(d);const x=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Xv(o)),m=_?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),m.texture;if(m!==void 0)return m.texture;{const M=d.image;return _&&M&&M.height>0||v&&M&&l(M)?(i===null&&(i=new Xv(o)),m=_?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,e.set(d,m),d.addEventListener("dispose",f),m.texture):null}}}return d}function l(d){let p=0;const _=6;for(let v=0;v<_;v++)d[v]!==void 0&&p++;return p===_}function f(d){const p=d.target;p.removeEventListener("dispose",f);const _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function hb(o){const e={};function i(s){if(e[s]!==void 0)return e[s];let l;switch(s){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(s)}return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&Cc("THREE.WebGLRenderer: "+s+" extension not supported."),l}}}function db(o,e,i,s){const l={},f=new WeakMap;function h(m){const x=m.target;x.index!==null&&e.remove(x.index);for(const T in x.attributes)e.remove(x.attributes[T]);x.removeEventListener("dispose",h),delete l[x.id];const M=f.get(x);M&&(e.remove(M),f.delete(x)),s.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(m,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function p(m){const x=m.attributes;for(const M in x)e.update(x[M],o.ARRAY_BUFFER)}function _(m){const x=[],M=m.index,T=m.attributes.position;let C=0;if(M!==null){const P=M.array;C=M.version;for(let O=0,U=P.length;O<U;O+=3){const X=P[O+0],I=P[O+1],z=P[O+2];x.push(X,I,I,z,z,X)}}else if(T!==void 0){const P=T.array;C=T.version;for(let O=0,U=P.length/3-1;O<U;O+=3){const X=O+0,I=O+1,z=O+2;x.push(X,I,I,z,z,X)}}else return;const y=new(Ox(x)?Fx:Bx)(x,1);y.version=C;const S=f.get(m);S&&e.remove(S),f.set(m,y)}function v(m){const x=f.get(m);if(x){const M=m.index;M!==null&&x.version<M.version&&_(m)}else _(m);return f.get(m)}return{get:d,update:p,getWireframeAttribute:v}}function pb(o,e,i){let s;function l(x){s=x}let f,h;function d(x){f=x.type,h=x.bytesPerElement}function p(x,M){o.drawElements(s,M,f,x*h),i.update(M,s,1)}function _(x,M,T){T!==0&&(o.drawElementsInstanced(s,M,f,x*h,T),i.update(M,s,T))}function v(x,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,f,x,0,T);let y=0;for(let S=0;S<T;S++)y+=M[S];i.update(y,s,1)}function m(x,M,T,C){if(T===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let S=0;S<x.length;S++)_(x[S]/h,M[S],C[S]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,f,x,0,C,0,T);let S=0;for(let P=0;P<T;P++)S+=M[P]*C[P];i.update(S,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=_,this.renderMultiDraw=v,this.renderMultiDrawInstances=m}function mb(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(f,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(f/3);break;case o.LINES:i.lines+=d*(f/2);break;case o.LINE_STRIP:i.lines+=d*(f-1);break;case o.LINE_LOOP:i.lines+=d*f;break;case o.POINTS:i.points+=d*f;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function gb(o,e,i){const s=new WeakMap,l=new rn;function f(h,d,p){const _=h.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,m=v!==void 0?v.length:0;let x=s.get(d);if(x===void 0||x.count!==m){let R=function(){G.dispose(),s.delete(d),d.removeEventListener("dispose",R)};var M=R;x!==void 0&&x.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,S=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let U=0;T===!0&&(U=1),C===!0&&(U=2),y===!0&&(U=3);let X=d.attributes.position.count*U,I=1;X>e.maxTextureSize&&(I=Math.ceil(X/e.maxTextureSize),X=e.maxTextureSize);const z=new Float32Array(X*I*4*m),G=new zx(z,X,I,m);G.type=Aa,G.needsUpdate=!0;const D=U*4;for(let H=0;H<m;H++){const ot=S[H],it=P[H],dt=O[H],ct=X*I*4*H;for(let q=0;q<ot.count;q++){const rt=q*D;T===!0&&(l.fromBufferAttribute(ot,q),z[ct+rt+0]=l.x,z[ct+rt+1]=l.y,z[ct+rt+2]=l.z,z[ct+rt+3]=0),C===!0&&(l.fromBufferAttribute(it,q),z[ct+rt+4]=l.x,z[ct+rt+5]=l.y,z[ct+rt+6]=l.z,z[ct+rt+7]=0),y===!0&&(l.fromBufferAttribute(dt,q),z[ct+rt+8]=l.x,z[ct+rt+9]=l.y,z[ct+rt+10]=l.z,z[ct+rt+11]=dt.itemSize===4?l.w:1)}}x={count:m,texture:G,size:new Oe(X,I)},s.set(d,x),d.addEventListener("dispose",R)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let T=0;for(let y=0;y<_.length;y++)T+=_[y];const C=d.morphTargetsRelative?1:1-T;p.getUniforms().setValue(o,"morphTargetBaseInfluence",C),p.getUniforms().setValue(o,"morphTargetInfluences",_)}p.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),p.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:f}}function _b(o,e,i,s){let l=new WeakMap;function f(p){const _=s.render.frame,v=p.geometry,m=e.get(p,v);if(l.get(m)!==_&&(e.update(m),l.set(m,_)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==_&&(i.update(p.instanceMatrix,o.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,o.ARRAY_BUFFER),l.set(p,_))),p.isSkinnedMesh){const x=p.skeleton;l.get(x)!==_&&(x.update(),l.set(x,_))}return m}function h(){l=new WeakMap}function d(p){const _=p.target;_.removeEventListener("dispose",d),i.remove(_.instanceMatrix),_.instanceColor!==null&&i.remove(_.instanceColor)}return{update:f,dispose:h}}const Wx=new jn,Wv=new Xx(1,1),jx=new zx,Zx=new XE,Kx=new Vx,jv=[],Zv=[],Kv=new Float32Array(16),Qv=new Float32Array(9),Jv=new Float32Array(4);function po(o,e,i){const s=o[0];if(s<=0||s>0)return o;const l=e*i;let f=jv[l];if(f===void 0&&(f=new Float32Array(l),jv[l]=f),e!==0){s.toArray(f,0);for(let h=1,d=0;h!==e;++h)d+=i,o[h].toArray(f,d)}return f}function _n(o,e){if(o.length!==e.length)return!1;for(let i=0,s=o.length;i<s;i++)if(o[i]!==e[i])return!1;return!0}function vn(o,e){for(let i=0,s=e.length;i<s;i++)o[i]=e[i]}function Ic(o,e){let i=Zv[e];i===void 0&&(i=new Int32Array(e),Zv[e]=i);for(let s=0;s!==e;++s)i[s]=o.allocateTextureUnit();return i}function vb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function xb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2fv(this.addr,e),vn(i,e)}}function Sb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(_n(i,e))return;o.uniform3fv(this.addr,e),vn(i,e)}}function yb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4fv(this.addr,e),vn(i,e)}}function Mb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;Jv.set(s),o.uniformMatrix2fv(this.addr,!1,Jv),vn(i,s)}}function Eb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;Qv.set(s),o.uniformMatrix3fv(this.addr,!1,Qv),vn(i,s)}}function Tb(o,e){const i=this.cache,s=e.elements;if(s===void 0){if(_n(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(_n(i,s))return;Kv.set(s),o.uniformMatrix4fv(this.addr,!1,Kv),vn(i,s)}}function Ab(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function bb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2iv(this.addr,e),vn(i,e)}}function Rb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3iv(this.addr,e),vn(i,e)}}function Cb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4iv(this.addr,e),vn(i,e)}}function wb(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function Db(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(_n(i,e))return;o.uniform2uiv(this.addr,e),vn(i,e)}}function Ub(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(_n(i,e))return;o.uniform3uiv(this.addr,e),vn(i,e)}}function Nb(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(_n(i,e))return;o.uniform4uiv(this.addr,e),vn(i,e)}}function Lb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l);let f;this.type===o.SAMPLER_2D_SHADOW?(Wv.compareFunction=Lx,f=Wv):f=Wx,i.setTexture2D(e||f,l)}function Ob(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||Zx,l)}function zb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||Kx,l)}function Pb(o,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(o.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||jx,l)}function Ib(o){switch(o){case 5126:return vb;case 35664:return xb;case 35665:return Sb;case 35666:return yb;case 35674:return Mb;case 35675:return Eb;case 35676:return Tb;case 5124:case 35670:return Ab;case 35667:case 35671:return bb;case 35668:case 35672:return Rb;case 35669:case 35673:return Cb;case 5125:return wb;case 36294:return Db;case 36295:return Ub;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Lb;case 35679:case 36299:case 36307:return Ob;case 35680:case 36300:case 36308:case 36293:return zb;case 36289:case 36303:case 36311:case 36292:return Pb}}function Bb(o,e){o.uniform1fv(this.addr,e)}function Fb(o,e){const i=po(e,this.size,2);o.uniform2fv(this.addr,i)}function Hb(o,e){const i=po(e,this.size,3);o.uniform3fv(this.addr,i)}function Gb(o,e){const i=po(e,this.size,4);o.uniform4fv(this.addr,i)}function Vb(o,e){const i=po(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function Xb(o,e){const i=po(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function kb(o,e){const i=po(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function qb(o,e){o.uniform1iv(this.addr,e)}function Yb(o,e){o.uniform2iv(this.addr,e)}function Wb(o,e){o.uniform3iv(this.addr,e)}function jb(o,e){o.uniform4iv(this.addr,e)}function Zb(o,e){o.uniform1uiv(this.addr,e)}function Kb(o,e){o.uniform2uiv(this.addr,e)}function Qb(o,e){o.uniform3uiv(this.addr,e)}function Jb(o,e){o.uniform4uiv(this.addr,e)}function $b(o,e,i){const s=this.cache,l=e.length,f=Ic(i,l);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==l;++h)i.setTexture2D(e[h]||Wx,f[h])}function t2(o,e,i){const s=this.cache,l=e.length,f=Ic(i,l);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||Zx,f[h])}function e2(o,e,i){const s=this.cache,l=e.length,f=Ic(i,l);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||Kx,f[h])}function n2(o,e,i){const s=this.cache,l=e.length,f=Ic(i,l);_n(s,f)||(o.uniform1iv(this.addr,f),vn(s,f));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||jx,f[h])}function i2(o){switch(o){case 5126:return Bb;case 35664:return Fb;case 35665:return Hb;case 35666:return Gb;case 35674:return Vb;case 35675:return Xb;case 35676:return kb;case 5124:case 35670:return qb;case 35667:case 35671:return Yb;case 35668:case 35672:return Wb;case 35669:case 35673:return jb;case 5125:return Zb;case 36294:return Kb;case 36295:return Qb;case 36296:return Jb;case 35678:case 36198:case 36298:case 36306:case 35682:return $b;case 35679:case 36299:case 36307:return t2;case 35680:case 36300:case 36308:case 36293:return e2;case 36289:case 36303:case 36311:case 36292:return n2}}class a2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=Ib(i.type)}}class r2{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=i2(i.type)}}class s2{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let f=0,h=l.length;f!==h;++f){const d=l[f];d.setValue(e,i[d.id],s)}}}const Wd=/(\w+)(\])?(\[|\.)?/g;function $v(o,e){o.seq.push(e),o.map[e.id]=e}function o2(o,e,i){const s=o.name,l=s.length;for(Wd.lastIndex=0;;){const f=Wd.exec(s),h=Wd.lastIndex;let d=f[1];const p=f[2]==="]",_=f[3];if(p&&(d=d|0),_===void 0||_==="["&&h+2===l){$v(i,_===void 0?new a2(d,o,e):new r2(d,o,e));break}else{let m=i.map[d];m===void 0&&(m=new s2(d),$v(i,m)),i=m}}}class wc{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<s;++l){const f=e.getActiveUniform(i,l),h=e.getUniformLocation(i,f.name);o2(f,h,this)}}setValue(e,i,s,l){const f=this.map[i];f!==void 0&&f.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let f=0,h=i.length;f!==h;++f){const d=i[f],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,f=e.length;l!==f;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function tx(o,e,i){const s=o.createShader(e);return o.shaderSource(s,i),o.compileShader(s),s}const l2=37297;let u2=0;function c2(o,e){const i=o.split(`
`),s=[],l=Math.max(e-6,0),f=Math.min(e+6,i.length);for(let h=l;h<f;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const ex=new fe;function f2(o){Ne._getMatrix(ex,Ne.workingColorSpace,o);const e=`mat3( ${ex.elements.map(i=>i.toFixed(4))} )`;switch(Ne.getTransfer(o)){case Uc:return[e,"LinearTransferOETF"];case Ge:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[e,"LinearTransferOETF"]}}function nx(o,e,i){const s=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(s&&l==="")return"";const f=/ERROR: 0:(\d+)/.exec(l);if(f){const h=parseInt(f[1]);return i.toUpperCase()+`

`+l+`

`+c2(o.getShaderSource(e),h)}else return l}function h2(o,e){const i=f2(e);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function d2(o,e){let i;switch(e){case gE:i="Linear";break;case _E:i="Reinhard";break;case vE:i="Cineon";break;case Sx:i="ACESFilmic";break;case SE:i="AgX";break;case yE:i="Neutral";break;case xE:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const _c=new nt;function p2(){Ne.getLuminanceCoefficients(_c);const o=_c.x.toFixed(4),e=_c.y.toFixed(4),i=_c.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function m2(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ml).join(`
`)}function g2(o){const e=[];for(const i in o){const s=o[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function _2(o,e){const i={},s=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const f=o.getActiveAttrib(e,l),h=f.name;let d=1;f.type===o.FLOAT_MAT2&&(d=2),f.type===o.FLOAT_MAT3&&(d=3),f.type===o.FLOAT_MAT4&&(d=4),i[h]={type:f.type,location:o.getAttribLocation(e,h),locationSize:d}}return i}function ml(o){return o!==""}function ix(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ax(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const v2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Pp(o){return o.replace(v2,S2)}const x2=new Map;function S2(o,e){let i=he[e];if(i===void 0){const s=x2.get(e);if(s!==void 0)i=he[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Pp(i)}const y2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function rx(o){return o.replace(y2,M2)}function M2(o,e,i,s){let l="";for(let f=parseInt(e);f<parseInt(i);f++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+f+" ]").replace(/UNROLLED_LOOP_INDEX/g,f);return l}function sx(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function E2(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===_x?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===vx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Ea&&(e="SHADOWMAP_TYPE_VSM"),e}function T2(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case oo:case lo:e="ENVMAP_TYPE_CUBE";break;case zc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function A2(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function b2(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case xx:e="ENVMAP_BLENDING_MULTIPLY";break;case pE:e="ENVMAP_BLENDING_MIX";break;case mE:e="ENVMAP_BLENDING_ADD";break}return e}function R2(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function C2(o,e,i,s){const l=o.getContext(),f=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=E2(i),_=T2(i),v=A2(i),m=b2(i),x=R2(i),M=m2(i),T=g2(f),C=l.createProgram();let y,S,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ml).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T].filter(ml).join(`
`),S.length>0&&(S+=`
`)):(y=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+v:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ml).join(`
`),S=[sx(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,T,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.envMap?"#define "+v:"",i.envMap?"#define "+m:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==pr?"#define TONE_MAPPING":"",i.toneMapping!==pr?he.tonemapping_pars_fragment:"",i.toneMapping!==pr?d2("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",he.colorspace_pars_fragment,h2("linearToOutputTexel",i.outputColorSpace),p2(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ml).join(`
`)),h=Pp(h),h=ix(h,i),h=ax(h,i),d=Pp(d),d=ix(d,i),d=ax(d,i),h=rx(h),d=rx(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",i.glslVersion===xv?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===xv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const O=P+y+h,U=P+S+d,X=tx(l,l.VERTEX_SHADER,O),I=tx(l,l.FRAGMENT_SHADER,U);l.attachShader(C,X),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function z(H){if(o.debug.checkShaderErrors){const ot=l.getProgramInfoLog(C).trim(),it=l.getShaderInfoLog(X).trim(),dt=l.getShaderInfoLog(I).trim();let ct=!0,q=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(ct=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,X,I);else{const rt=nx(l,X,"vertex"),Q=nx(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ot+`
`+rt+`
`+Q)}else ot!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ot):(it===""||dt==="")&&(q=!1);q&&(H.diagnostics={runnable:ct,programLog:ot,vertexShader:{log:it,prefix:y},fragmentShader:{log:dt,prefix:S}})}l.deleteShader(X),l.deleteShader(I),G=new wc(l,C),D=_2(l,C)}let G;this.getUniforms=function(){return G===void 0&&z(this),G};let D;this.getAttributes=function(){return D===void 0&&z(this),D};let R=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=l.getProgramParameter(C,l2)),R},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=u2++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=X,this.fragmentShader=I,this}let w2=0;class D2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),f=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(f)===!1&&(h.add(f),f.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new U2(e),i.set(e,s)),s}}class U2{constructor(e){this.id=w2++,this.code=e,this.usedTimes=0}}function N2(o,e,i,s,l,f,h){const d=new Px,p=new D2,_=new Set,v=[],m=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(D){return _.add(D),D===0?"uv":`uv${D}`}function y(D,R,H,ot,it){const dt=ot.fog,ct=it.geometry,q=D.isMeshStandardMaterial?ot.environment:null,rt=(D.isMeshStandardMaterial?i:e).get(D.envMap||q),Q=rt&&rt.mapping===zc?rt.image.height:null,xt=T[D.type];D.precision!==null&&(M=l.getMaxPrecision(D.precision),M!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",M,"instead."));const St=ct.morphAttributes.position||ct.morphAttributes.normal||ct.morphAttributes.color,Ht=St!==void 0?St.length:0;let ne=0;ct.morphAttributes.position!==void 0&&(ne=1),ct.morphAttributes.normal!==void 0&&(ne=2),ct.morphAttributes.color!==void 0&&(ne=3);let Te,w,j,mt;if(xt){const Ae=Zi[xt];Te=Ae.vertexShader,w=Ae.fragmentShader}else Te=D.vertexShader,w=D.fragmentShader,p.update(D),j=p.getVertexShaderID(D),mt=p.getFragmentShaderID(D);const ut=o.getRenderTarget(),Tt=o.state.buffers.depth.getReversed(),Vt=it.isInstancedMesh===!0,wt=it.isBatchedMesh===!0,bt=!!D.map,It=!!D.matcap,re=!!rt,F=!!D.aoMap,pn=!!D.lightMap,se=!!D.bumpMap,Kt=!!D.normalMap,Rt=!!D.displacementMap,Se=!!D.emissiveMap,kt=!!D.metalnessMap,N=!!D.roughnessMap,A=D.anisotropy>0,tt=D.clearcoat>0,gt=D.dispersion>0,vt=D.iridescence>0,pt=D.sheen>0,qt=D.transmission>0,Nt=A&&!!D.anisotropyMap,Ot=tt&&!!D.clearcoatMap,me=tt&&!!D.clearcoatNormalMap,Mt=tt&&!!D.clearcoatRoughnessMap,Gt=vt&&!!D.iridescenceMap,Jt=vt&&!!D.iridescenceThicknessMap,te=pt&&!!D.sheenColorMap,Ft=pt&&!!D.sheenRoughnessMap,pe=!!D.specularMap,le=!!D.specularColorMap,Fe=!!D.specularIntensityMap,V=qt&&!!D.transmissionMap,zt=qt&&!!D.thicknessMap,lt=!!D.gradientMap,_t=!!D.alphaMap,Lt=D.alphaTest>0,Pt=!!D.alphaHash,oe=!!D.extensions;let Qe=pr;D.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(Qe=o.toneMapping);const xn={shaderID:xt,shaderType:D.type,shaderName:D.name,vertexShader:Te,fragmentShader:w,defines:D.defines,customVertexShaderID:j,customFragmentShaderID:mt,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:M,batching:wt,batchingColor:wt&&it._colorsTexture!==null,instancing:Vt,instancingColor:Vt&&it.instanceColor!==null,instancingMorph:Vt&&it.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:ut===null?o.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:uo,alphaToCoverage:!!D.alphaToCoverage,map:bt,matcap:It,envMap:re,envMapMode:re&&rt.mapping,envMapCubeUVHeight:Q,aoMap:F,lightMap:pn,bumpMap:se,normalMap:Kt,displacementMap:x&&Rt,emissiveMap:Se,normalMapObjectSpace:Kt&&D.normalMapType===AE,normalMapTangentSpace:Kt&&D.normalMapType===Nx,metalnessMap:kt,roughnessMap:N,anisotropy:A,anisotropyMap:Nt,clearcoat:tt,clearcoatMap:Ot,clearcoatNormalMap:me,clearcoatRoughnessMap:Mt,dispersion:gt,iridescence:vt,iridescenceMap:Gt,iridescenceThicknessMap:Jt,sheen:pt,sheenColorMap:te,sheenRoughnessMap:Ft,specularMap:pe,specularColorMap:le,specularIntensityMap:Fe,transmission:qt,transmissionMap:V,thicknessMap:zt,gradientMap:lt,opaque:D.transparent===!1&&D.blending===ao&&D.alphaToCoverage===!1,alphaMap:_t,alphaTest:Lt,alphaHash:Pt,combine:D.combine,mapUv:bt&&C(D.map.channel),aoMapUv:F&&C(D.aoMap.channel),lightMapUv:pn&&C(D.lightMap.channel),bumpMapUv:se&&C(D.bumpMap.channel),normalMapUv:Kt&&C(D.normalMap.channel),displacementMapUv:Rt&&C(D.displacementMap.channel),emissiveMapUv:Se&&C(D.emissiveMap.channel),metalnessMapUv:kt&&C(D.metalnessMap.channel),roughnessMapUv:N&&C(D.roughnessMap.channel),anisotropyMapUv:Nt&&C(D.anisotropyMap.channel),clearcoatMapUv:Ot&&C(D.clearcoatMap.channel),clearcoatNormalMapUv:me&&C(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Mt&&C(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&C(D.iridescenceMap.channel),iridescenceThicknessMapUv:Jt&&C(D.iridescenceThicknessMap.channel),sheenColorMapUv:te&&C(D.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&C(D.sheenRoughnessMap.channel),specularMapUv:pe&&C(D.specularMap.channel),specularColorMapUv:le&&C(D.specularColorMap.channel),specularIntensityMapUv:Fe&&C(D.specularIntensityMap.channel),transmissionMapUv:V&&C(D.transmissionMap.channel),thicknessMapUv:zt&&C(D.thicknessMap.channel),alphaMapUv:_t&&C(D.alphaMap.channel),vertexTangents:!!ct.attributes.tangent&&(Kt||A),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!ct.attributes.color&&ct.attributes.color.itemSize===4,pointsUvs:it.isPoints===!0&&!!ct.attributes.uv&&(bt||_t),fog:!!dt,useFog:D.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:m,reverseDepthBuffer:Tt,skinning:it.isSkinnedMesh===!0,morphTargets:ct.morphAttributes.position!==void 0,morphNormals:ct.morphAttributes.normal!==void 0,morphColors:ct.morphAttributes.color!==void 0,morphTargetsCount:Ht,morphTextureStride:ne,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:D.dithering,shadowMapEnabled:o.shadowMap.enabled&&H.length>0,shadowMapType:o.shadowMap.type,toneMapping:Qe,decodeVideoTexture:bt&&D.map.isVideoTexture===!0&&Ne.getTransfer(D.map.colorSpace)===Ge,decodeVideoTextureEmissive:Se&&D.emissiveMap.isVideoTexture===!0&&Ne.getTransfer(D.emissiveMap.colorSpace)===Ge,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Ki,flipSided:D.side===ni,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:oe&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&D.extensions.multiDraw===!0||wt)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return xn.vertexUv1s=_.has(1),xn.vertexUv2s=_.has(2),xn.vertexUv3s=_.has(3),_.clear(),xn}function S(D){const R=[];if(D.shaderID?R.push(D.shaderID):(R.push(D.customVertexShaderID),R.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)R.push(H),R.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(P(R,D),O(R,D),R.push(o.outputColorSpace)),R.push(D.customProgramCacheKey),R.join()}function P(D,R){D.push(R.precision),D.push(R.outputColorSpace),D.push(R.envMapMode),D.push(R.envMapCubeUVHeight),D.push(R.mapUv),D.push(R.alphaMapUv),D.push(R.lightMapUv),D.push(R.aoMapUv),D.push(R.bumpMapUv),D.push(R.normalMapUv),D.push(R.displacementMapUv),D.push(R.emissiveMapUv),D.push(R.metalnessMapUv),D.push(R.roughnessMapUv),D.push(R.anisotropyMapUv),D.push(R.clearcoatMapUv),D.push(R.clearcoatNormalMapUv),D.push(R.clearcoatRoughnessMapUv),D.push(R.iridescenceMapUv),D.push(R.iridescenceThicknessMapUv),D.push(R.sheenColorMapUv),D.push(R.sheenRoughnessMapUv),D.push(R.specularMapUv),D.push(R.specularColorMapUv),D.push(R.specularIntensityMapUv),D.push(R.transmissionMapUv),D.push(R.thicknessMapUv),D.push(R.combine),D.push(R.fogExp2),D.push(R.sizeAttenuation),D.push(R.morphTargetsCount),D.push(R.morphAttributeCount),D.push(R.numDirLights),D.push(R.numPointLights),D.push(R.numSpotLights),D.push(R.numSpotLightMaps),D.push(R.numHemiLights),D.push(R.numRectAreaLights),D.push(R.numDirLightShadows),D.push(R.numPointLightShadows),D.push(R.numSpotLightShadows),D.push(R.numSpotLightShadowsWithMaps),D.push(R.numLightProbes),D.push(R.shadowMapType),D.push(R.toneMapping),D.push(R.numClippingPlanes),D.push(R.numClipIntersection),D.push(R.depthPacking)}function O(D,R){d.disableAll(),R.supportsVertexTextures&&d.enable(0),R.instancing&&d.enable(1),R.instancingColor&&d.enable(2),R.instancingMorph&&d.enable(3),R.matcap&&d.enable(4),R.envMap&&d.enable(5),R.normalMapObjectSpace&&d.enable(6),R.normalMapTangentSpace&&d.enable(7),R.clearcoat&&d.enable(8),R.iridescence&&d.enable(9),R.alphaTest&&d.enable(10),R.vertexColors&&d.enable(11),R.vertexAlphas&&d.enable(12),R.vertexUv1s&&d.enable(13),R.vertexUv2s&&d.enable(14),R.vertexUv3s&&d.enable(15),R.vertexTangents&&d.enable(16),R.anisotropy&&d.enable(17),R.alphaHash&&d.enable(18),R.batching&&d.enable(19),R.dispersion&&d.enable(20),R.batchingColor&&d.enable(21),D.push(d.mask),d.disableAll(),R.fog&&d.enable(0),R.useFog&&d.enable(1),R.flatShading&&d.enable(2),R.logarithmicDepthBuffer&&d.enable(3),R.reverseDepthBuffer&&d.enable(4),R.skinning&&d.enable(5),R.morphTargets&&d.enable(6),R.morphNormals&&d.enable(7),R.morphColors&&d.enable(8),R.premultipliedAlpha&&d.enable(9),R.shadowMapEnabled&&d.enable(10),R.doubleSided&&d.enable(11),R.flipSided&&d.enable(12),R.useDepthPacking&&d.enable(13),R.dithering&&d.enable(14),R.transmission&&d.enable(15),R.sheen&&d.enable(16),R.opaque&&d.enable(17),R.pointsUvs&&d.enable(18),R.decodeVideoTexture&&d.enable(19),R.decodeVideoTextureEmissive&&d.enable(20),R.alphaToCoverage&&d.enable(21),D.push(d.mask)}function U(D){const R=T[D.type];let H;if(R){const ot=Zi[R];H=iT.clone(ot.uniforms)}else H=D.uniforms;return H}function X(D,R){let H;for(let ot=0,it=v.length;ot<it;ot++){const dt=v[ot];if(dt.cacheKey===R){H=dt,++H.usedTimes;break}}return H===void 0&&(H=new C2(o,R,D,f),v.push(H)),H}function I(D){if(--D.usedTimes===0){const R=v.indexOf(D);v[R]=v[v.length-1],v.pop(),D.destroy()}}function z(D){p.remove(D)}function G(){p.dispose()}return{getParameters:y,getProgramCacheKey:S,getUniforms:U,acquireProgram:X,releaseProgram:I,releaseShaderCache:z,programs:v,dispose:G}}function L2(){let o=new WeakMap;function e(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function s(h){o.delete(h)}function l(h,d,p){o.get(h)[d]=p}function f(){o=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:f}}function O2(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function ox(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function lx(){const o=[];let e=0;const i=[],s=[],l=[];function f(){e=0,i.length=0,s.length=0,l.length=0}function h(m,x,M,T,C,y){let S=o[e];return S===void 0?(S={id:m.id,object:m,geometry:x,material:M,groupOrder:T,renderOrder:m.renderOrder,z:C,group:y},o[e]=S):(S.id=m.id,S.object=m,S.geometry=x,S.material=M,S.groupOrder=T,S.renderOrder=m.renderOrder,S.z=C,S.group=y),e++,S}function d(m,x,M,T,C,y){const S=h(m,x,M,T,C,y);M.transmission>0?s.push(S):M.transparent===!0?l.push(S):i.push(S)}function p(m,x,M,T,C,y){const S=h(m,x,M,T,C,y);M.transmission>0?s.unshift(S):M.transparent===!0?l.unshift(S):i.unshift(S)}function _(m,x){i.length>1&&i.sort(m||O2),s.length>1&&s.sort(x||ox),l.length>1&&l.sort(x||ox)}function v(){for(let m=e,x=o.length;m<x;m++){const M=o[m];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:s,transparent:l,init:f,push:d,unshift:p,finish:v,sort:_}}function z2(){let o=new WeakMap;function e(s,l){const f=o.get(s);let h;return f===void 0?(h=new lx,o.set(s,[h])):l>=f.length?(h=new lx,f.push(h)):h=f[l],h}function i(){o=new WeakMap}return{get:e,dispose:i}}function P2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new nt,color:new Ce};break;case"SpotLight":i={position:new nt,direction:new nt,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new nt,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":i={direction:new nt,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":i={color:new Ce,position:new nt,halfWidth:new nt,halfHeight:new nt};break}return o[e.id]=i,i}}}function I2(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let B2=0;function F2(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function H2(o){const e=new P2,i=I2(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let _=0;_<9;_++)s.probe.push(new nt);const l=new nt,f=new sn,h=new sn;function d(_){let v=0,m=0,x=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let M=0,T=0,C=0,y=0,S=0,P=0,O=0,U=0,X=0,I=0,z=0;_.sort(F2);for(let D=0,R=_.length;D<R;D++){const H=_[D],ot=H.color,it=H.intensity,dt=H.distance,ct=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)v+=ot.r*it,m+=ot.g*it,x+=ot.b*it;else if(H.isLightProbe){for(let q=0;q<9;q++)s.probe[q].addScaledVector(H.sh.coefficients[q],it);z++}else if(H.isDirectionalLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const rt=H.shadow,Q=i.get(H);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,s.directionalShadow[M]=Q,s.directionalShadowMap[M]=ct,s.directionalShadowMatrix[M]=H.shadow.matrix,P++}s.directional[M]=q,M++}else if(H.isSpotLight){const q=e.get(H);q.position.setFromMatrixPosition(H.matrixWorld),q.color.copy(ot).multiplyScalar(it),q.distance=dt,q.coneCos=Math.cos(H.angle),q.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),q.decay=H.decay,s.spot[C]=q;const rt=H.shadow;if(H.map&&(s.spotLightMap[X]=H.map,X++,rt.updateMatrices(H),H.castShadow&&I++),s.spotLightMatrix[C]=rt.matrix,H.castShadow){const Q=i.get(H);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,s.spotShadow[C]=Q,s.spotShadowMap[C]=ct,U++}C++}else if(H.isRectAreaLight){const q=e.get(H);q.color.copy(ot).multiplyScalar(it),q.halfWidth.set(H.width*.5,0,0),q.halfHeight.set(0,H.height*.5,0),s.rectArea[y]=q,y++}else if(H.isPointLight){const q=e.get(H);if(q.color.copy(H.color).multiplyScalar(H.intensity),q.distance=H.distance,q.decay=H.decay,H.castShadow){const rt=H.shadow,Q=i.get(H);Q.shadowIntensity=rt.intensity,Q.shadowBias=rt.bias,Q.shadowNormalBias=rt.normalBias,Q.shadowRadius=rt.radius,Q.shadowMapSize=rt.mapSize,Q.shadowCameraNear=rt.camera.near,Q.shadowCameraFar=rt.camera.far,s.pointShadow[T]=Q,s.pointShadowMap[T]=ct,s.pointShadowMatrix[T]=H.shadow.matrix,O++}s.point[T]=q,T++}else if(H.isHemisphereLight){const q=e.get(H);q.skyColor.copy(H.color).multiplyScalar(it),q.groundColor.copy(H.groundColor).multiplyScalar(it),s.hemi[S]=q,S++}}y>0&&(o.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Ut.LTC_FLOAT_1,s.rectAreaLTC2=Ut.LTC_FLOAT_2):(s.rectAreaLTC1=Ut.LTC_HALF_1,s.rectAreaLTC2=Ut.LTC_HALF_2)),s.ambient[0]=v,s.ambient[1]=m,s.ambient[2]=x;const G=s.hash;(G.directionalLength!==M||G.pointLength!==T||G.spotLength!==C||G.rectAreaLength!==y||G.hemiLength!==S||G.numDirectionalShadows!==P||G.numPointShadows!==O||G.numSpotShadows!==U||G.numSpotMaps!==X||G.numLightProbes!==z)&&(s.directional.length=M,s.spot.length=C,s.rectArea.length=y,s.point.length=T,s.hemi.length=S,s.directionalShadow.length=P,s.directionalShadowMap.length=P,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=U,s.spotShadowMap.length=U,s.directionalShadowMatrix.length=P,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=U+X-I,s.spotLightMap.length=X,s.numSpotLightShadowsWithMaps=I,s.numLightProbes=z,G.directionalLength=M,G.pointLength=T,G.spotLength=C,G.rectAreaLength=y,G.hemiLength=S,G.numDirectionalShadows=P,G.numPointShadows=O,G.numSpotShadows=U,G.numSpotMaps=X,G.numLightProbes=z,s.version=B2++)}function p(_,v){let m=0,x=0,M=0,T=0,C=0;const y=v.matrixWorldInverse;for(let S=0,P=_.length;S<P;S++){const O=_[S];if(O.isDirectionalLight){const U=s.directional[m];U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),m++}else if(O.isSpotLight){const U=s.spot[M];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),U.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),U.direction.sub(l),U.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const U=s.rectArea[T];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),h.identity(),f.copy(O.matrixWorld),f.premultiply(y),h.extractRotation(f),U.halfWidth.set(O.width*.5,0,0),U.halfHeight.set(0,O.height*.5,0),U.halfWidth.applyMatrix4(h),U.halfHeight.applyMatrix4(h),T++}else if(O.isPointLight){const U=s.point[x];U.position.setFromMatrixPosition(O.matrixWorld),U.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const U=s.hemi[C];U.direction.setFromMatrixPosition(O.matrixWorld),U.direction.transformDirection(y),C++}}}return{setup:d,setupView:p,state:s}}function ux(o){const e=new H2(o),i=[],s=[];function l(v){_.camera=v,i.length=0,s.length=0}function f(v){i.push(v)}function h(v){s.push(v)}function d(){e.setup(i)}function p(v){e.setupView(i,v)}const _={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:_,setupLights:d,setupLightsView:p,pushLight:f,pushShadow:h}}function G2(o){let e=new WeakMap;function i(l,f=0){const h=e.get(l);let d;return h===void 0?(d=new ux(o),e.set(l,[d])):f>=h.length?(d=new ux(o),h.push(d)):d=h[f],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const V2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,X2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function k2(o,e,i){let s=new Zp;const l=new Oe,f=new Oe,h=new rn,d=new dT({depthPacking:TE}),p=new pT,_={},v=i.maxTextureSize,m={[mr]:ni,[ni]:mr,[Ki]:Ki},x=new gr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:V2,fragmentShader:X2}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const T=new $i;T.setAttribute("position",new Qi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new tn(T,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_x;let S=this.type;this.render=function(I,z,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const D=o.getRenderTarget(),R=o.getActiveCubeFace(),H=o.getActiveMipmapLevel(),ot=o.state;ot.setBlending(dr),ot.buffers.color.setClear(1,1,1,1),ot.buffers.depth.setTest(!0),ot.setScissorTest(!1);const it=S!==Ea&&this.type===Ea,dt=S===Ea&&this.type!==Ea;for(let ct=0,q=I.length;ct<q;ct++){const rt=I[ct],Q=rt.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;l.copy(Q.mapSize);const xt=Q.getFrameExtents();if(l.multiply(xt),f.copy(Q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(f.x=Math.floor(v/xt.x),l.x=f.x*xt.x,Q.mapSize.x=f.x),l.y>v&&(f.y=Math.floor(v/xt.y),l.y=f.y*xt.y,Q.mapSize.y=f.y)),Q.map===null||it===!0||dt===!0){const Ht=this.type!==Ea?{minFilter:Pi,magFilter:Pi}:{};Q.map!==null&&Q.map.dispose(),Q.map=new ts(l.x,l.y,Ht),Q.map.texture.name=rt.name+".shadowMap",Q.camera.updateProjectionMatrix()}o.setRenderTarget(Q.map),o.clear();const St=Q.getViewportCount();for(let Ht=0;Ht<St;Ht++){const ne=Q.getViewport(Ht);h.set(f.x*ne.x,f.y*ne.y,f.x*ne.z,f.y*ne.w),ot.viewport(h),Q.updateMatrices(rt,Ht),s=Q.getFrustum(),U(z,G,Q.camera,rt,this.type)}Q.isPointLightShadow!==!0&&this.type===Ea&&P(Q,G),Q.needsUpdate=!1}S=this.type,y.needsUpdate=!1,o.setRenderTarget(D,R,H)};function P(I,z){const G=e.update(C);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ts(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(z,null,G,x,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(z,null,G,M,C,null)}function O(I,z,G,D){let R=null;const H=G.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(H!==void 0)R=H;else if(R=G.isPointLight===!0?p:d,o.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0){const ot=R.uuid,it=z.uuid;let dt=_[ot];dt===void 0&&(dt={},_[ot]=dt);let ct=dt[it];ct===void 0&&(ct=R.clone(),dt[it]=ct,z.addEventListener("dispose",X)),R=ct}if(R.visible=z.visible,R.wireframe=z.wireframe,D===Ea?R.side=z.shadowSide!==null?z.shadowSide:z.side:R.side=z.shadowSide!==null?z.shadowSide:m[z.side],R.alphaMap=z.alphaMap,R.alphaTest=z.alphaTest,R.map=z.map,R.clipShadows=z.clipShadows,R.clippingPlanes=z.clippingPlanes,R.clipIntersection=z.clipIntersection,R.displacementMap=z.displacementMap,R.displacementScale=z.displacementScale,R.displacementBias=z.displacementBias,R.wireframeLinewidth=z.wireframeLinewidth,R.linewidth=z.linewidth,G.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const ot=o.properties.get(R);ot.light=G}return R}function U(I,z,G,D,R){if(I.visible===!1)return;if(I.layers.test(z.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Ea)&&(!I.frustumCulled||s.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,I.matrixWorld);const it=e.update(I),dt=I.material;if(Array.isArray(dt)){const ct=it.groups;for(let q=0,rt=ct.length;q<rt;q++){const Q=ct[q],xt=dt[Q.materialIndex];if(xt&&xt.visible){const St=O(I,xt,D,R);I.onBeforeShadow(o,I,z,G,it,St,Q),o.renderBufferDirect(G,null,it,St,I,Q),I.onAfterShadow(o,I,z,G,it,St,Q)}}}else if(dt.visible){const ct=O(I,dt,D,R);I.onBeforeShadow(o,I,z,G,it,ct,null),o.renderBufferDirect(G,null,it,ct,I,null),I.onAfterShadow(o,I,z,G,it,ct,null)}}const ot=I.children;for(let it=0,dt=ot.length;it<dt;it++)U(ot[it],z,G,D,R)}function X(I){I.target.removeEventListener("dispose",X);for(const G in _){const D=_[G],R=I.target.uuid;R in D&&(D[R].dispose(),delete D[R])}}}const q2={[$d]:tp,[ep]:ap,[np]:rp,[so]:ip,[tp]:$d,[ap]:ep,[rp]:np,[ip]:so};function Y2(o,e){function i(){let V=!1;const zt=new rn;let lt=null;const _t=new rn(0,0,0,0);return{setMask:function(Lt){lt!==Lt&&!V&&(o.colorMask(Lt,Lt,Lt,Lt),lt=Lt)},setLocked:function(Lt){V=Lt},setClear:function(Lt,Pt,oe,Qe,xn){xn===!0&&(Lt*=Qe,Pt*=Qe,oe*=Qe),zt.set(Lt,Pt,oe,Qe),_t.equals(zt)===!1&&(o.clearColor(Lt,Pt,oe,Qe),_t.copy(zt))},reset:function(){V=!1,lt=null,_t.set(-1,0,0,0)}}}function s(){let V=!1,zt=!1,lt=null,_t=null,Lt=null;return{setReversed:function(Pt){if(zt!==Pt){const oe=e.get("EXT_clip_control");Pt?oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.ZERO_TO_ONE_EXT):oe.clipControlEXT(oe.LOWER_LEFT_EXT,oe.NEGATIVE_ONE_TO_ONE_EXT),zt=Pt;const Qe=Lt;Lt=null,this.setClear(Qe)}},getReversed:function(){return zt},setTest:function(Pt){Pt?ut(o.DEPTH_TEST):Tt(o.DEPTH_TEST)},setMask:function(Pt){lt!==Pt&&!V&&(o.depthMask(Pt),lt=Pt)},setFunc:function(Pt){if(zt&&(Pt=q2[Pt]),_t!==Pt){switch(Pt){case $d:o.depthFunc(o.NEVER);break;case tp:o.depthFunc(o.ALWAYS);break;case ep:o.depthFunc(o.LESS);break;case so:o.depthFunc(o.LEQUAL);break;case np:o.depthFunc(o.EQUAL);break;case ip:o.depthFunc(o.GEQUAL);break;case ap:o.depthFunc(o.GREATER);break;case rp:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Pt}},setLocked:function(Pt){V=Pt},setClear:function(Pt){Lt!==Pt&&(zt&&(Pt=1-Pt),o.clearDepth(Pt),Lt=Pt)},reset:function(){V=!1,lt=null,_t=null,Lt=null,zt=!1}}}function l(){let V=!1,zt=null,lt=null,_t=null,Lt=null,Pt=null,oe=null,Qe=null,xn=null;return{setTest:function(Ae){V||(Ae?ut(o.STENCIL_TEST):Tt(o.STENCIL_TEST))},setMask:function(Ae){zt!==Ae&&!V&&(o.stencilMask(Ae),zt=Ae)},setFunc:function(Ae,Ze,Sn){(lt!==Ae||_t!==Ze||Lt!==Sn)&&(o.stencilFunc(Ae,Ze,Sn),lt=Ae,_t=Ze,Lt=Sn)},setOp:function(Ae,Ze,Sn){(Pt!==Ae||oe!==Ze||Qe!==Sn)&&(o.stencilOp(Ae,Ze,Sn),Pt=Ae,oe=Ze,Qe=Sn)},setLocked:function(Ae){V=Ae},setClear:function(Ae){xn!==Ae&&(o.clearStencil(Ae),xn=Ae)},reset:function(){V=!1,zt=null,lt=null,_t=null,Lt=null,Pt=null,oe=null,Qe=null,xn=null}}}const f=new i,h=new s,d=new l,p=new WeakMap,_=new WeakMap;let v={},m={},x=new WeakMap,M=[],T=null,C=!1,y=null,S=null,P=null,O=null,U=null,X=null,I=null,z=new Ce(0,0,0),G=0,D=!1,R=null,H=null,ot=null,it=null,dt=null;const ct=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,rt=0;const Q=o.getParameter(o.VERSION);Q.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Q)[1]),q=rt>=1):Q.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),q=rt>=2);let xt=null,St={};const Ht=o.getParameter(o.SCISSOR_BOX),ne=o.getParameter(o.VIEWPORT),Te=new rn().fromArray(Ht),w=new rn().fromArray(ne);function j(V,zt,lt,_t){const Lt=new Uint8Array(4),Pt=o.createTexture();o.bindTexture(V,Pt),o.texParameteri(V,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(V,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let oe=0;oe<lt;oe++)V===o.TEXTURE_3D||V===o.TEXTURE_2D_ARRAY?o.texImage3D(zt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Lt):o.texImage2D(zt+oe,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Lt);return Pt}const mt={};mt[o.TEXTURE_2D]=j(o.TEXTURE_2D,o.TEXTURE_2D,1),mt[o.TEXTURE_CUBE_MAP]=j(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),mt[o.TEXTURE_2D_ARRAY]=j(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),mt[o.TEXTURE_3D]=j(o.TEXTURE_3D,o.TEXTURE_3D,1,1),f.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ut(o.DEPTH_TEST),h.setFunc(so),se(!1),Kt(dv),ut(o.CULL_FACE),F(dr);function ut(V){v[V]!==!0&&(o.enable(V),v[V]=!0)}function Tt(V){v[V]!==!1&&(o.disable(V),v[V]=!1)}function Vt(V,zt){return m[V]!==zt?(o.bindFramebuffer(V,zt),m[V]=zt,V===o.DRAW_FRAMEBUFFER&&(m[o.FRAMEBUFFER]=zt),V===o.FRAMEBUFFER&&(m[o.DRAW_FRAMEBUFFER]=zt),!0):!1}function wt(V,zt){let lt=M,_t=!1;if(V){lt=x.get(zt),lt===void 0&&(lt=[],x.set(zt,lt));const Lt=V.textures;if(lt.length!==Lt.length||lt[0]!==o.COLOR_ATTACHMENT0){for(let Pt=0,oe=Lt.length;Pt<oe;Pt++)lt[Pt]=o.COLOR_ATTACHMENT0+Pt;lt.length=Lt.length,_t=!0}}else lt[0]!==o.BACK&&(lt[0]=o.BACK,_t=!0);_t&&o.drawBuffers(lt)}function bt(V){return T!==V?(o.useProgram(V),T=V,!0):!1}const It={[jr]:o.FUNC_ADD,[QM]:o.FUNC_SUBTRACT,[JM]:o.FUNC_REVERSE_SUBTRACT};It[$M]=o.MIN,It[tE]=o.MAX;const re={[eE]:o.ZERO,[nE]:o.ONE,[iE]:o.SRC_COLOR,[Qd]:o.SRC_ALPHA,[uE]:o.SRC_ALPHA_SATURATE,[oE]:o.DST_COLOR,[rE]:o.DST_ALPHA,[aE]:o.ONE_MINUS_SRC_COLOR,[Jd]:o.ONE_MINUS_SRC_ALPHA,[lE]:o.ONE_MINUS_DST_COLOR,[sE]:o.ONE_MINUS_DST_ALPHA,[cE]:o.CONSTANT_COLOR,[fE]:o.ONE_MINUS_CONSTANT_COLOR,[hE]:o.CONSTANT_ALPHA,[dE]:o.ONE_MINUS_CONSTANT_ALPHA};function F(V,zt,lt,_t,Lt,Pt,oe,Qe,xn,Ae){if(V===dr){C===!0&&(Tt(o.BLEND),C=!1);return}if(C===!1&&(ut(o.BLEND),C=!0),V!==KM){if(V!==y||Ae!==D){if((S!==jr||U!==jr)&&(o.blendEquation(o.FUNC_ADD),S=jr,U=jr),Ae)switch(V){case ao:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pv:o.blendFunc(o.ONE,o.ONE);break;case mv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case gv:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ao:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case pv:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case mv:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case gv:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}P=null,O=null,X=null,I=null,z.set(0,0,0),G=0,y=V,D=Ae}return}Lt=Lt||zt,Pt=Pt||lt,oe=oe||_t,(zt!==S||Lt!==U)&&(o.blendEquationSeparate(It[zt],It[Lt]),S=zt,U=Lt),(lt!==P||_t!==O||Pt!==X||oe!==I)&&(o.blendFuncSeparate(re[lt],re[_t],re[Pt],re[oe]),P=lt,O=_t,X=Pt,I=oe),(Qe.equals(z)===!1||xn!==G)&&(o.blendColor(Qe.r,Qe.g,Qe.b,xn),z.copy(Qe),G=xn),y=V,D=!1}function pn(V,zt){V.side===Ki?Tt(o.CULL_FACE):ut(o.CULL_FACE);let lt=V.side===ni;zt&&(lt=!lt),se(lt),V.blending===ao&&V.transparent===!1?F(dr):F(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),h.setFunc(V.depthFunc),h.setTest(V.depthTest),h.setMask(V.depthWrite),f.setMask(V.colorWrite);const _t=V.stencilWrite;d.setTest(_t),_t&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Se(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ut(o.SAMPLE_ALPHA_TO_COVERAGE):Tt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(V){R!==V&&(V?o.frontFace(o.CW):o.frontFace(o.CCW),R=V)}function Kt(V){V!==jM?(ut(o.CULL_FACE),V!==H&&(V===dv?o.cullFace(o.BACK):V===ZM?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):Tt(o.CULL_FACE),H=V}function Rt(V){V!==ot&&(q&&o.lineWidth(V),ot=V)}function Se(V,zt,lt){V?(ut(o.POLYGON_OFFSET_FILL),(it!==zt||dt!==lt)&&(o.polygonOffset(zt,lt),it=zt,dt=lt)):Tt(o.POLYGON_OFFSET_FILL)}function kt(V){V?ut(o.SCISSOR_TEST):Tt(o.SCISSOR_TEST)}function N(V){V===void 0&&(V=o.TEXTURE0+ct-1),xt!==V&&(o.activeTexture(V),xt=V)}function A(V,zt,lt){lt===void 0&&(xt===null?lt=o.TEXTURE0+ct-1:lt=xt);let _t=St[lt];_t===void 0&&(_t={type:void 0,texture:void 0},St[lt]=_t),(_t.type!==V||_t.texture!==zt)&&(xt!==lt&&(o.activeTexture(lt),xt=lt),o.bindTexture(V,zt||mt[V]),_t.type=V,_t.texture=zt)}function tt(){const V=St[xt];V!==void 0&&V.type!==void 0&&(o.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function gt(){try{o.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function vt(){try{o.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function pt(){try{o.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function qt(){try{o.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(){try{o.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ot(){try{o.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function me(){try{o.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{o.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{o.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Jt(){try{o.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function te(V){Te.equals(V)===!1&&(o.scissor(V.x,V.y,V.z,V.w),Te.copy(V))}function Ft(V){w.equals(V)===!1&&(o.viewport(V.x,V.y,V.z,V.w),w.copy(V))}function pe(V,zt){let lt=_.get(zt);lt===void 0&&(lt=new WeakMap,_.set(zt,lt));let _t=lt.get(V);_t===void 0&&(_t=o.getUniformBlockIndex(zt,V.name),lt.set(V,_t))}function le(V,zt){const _t=_.get(zt).get(V);p.get(zt)!==_t&&(o.uniformBlockBinding(zt,_t,V.__bindingPointIndex),p.set(zt,_t))}function Fe(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),v={},xt=null,St={},m={},x=new WeakMap,M=[],T=null,C=!1,y=null,S=null,P=null,O=null,U=null,X=null,I=null,z=new Ce(0,0,0),G=0,D=!1,R=null,H=null,ot=null,it=null,dt=null,Te.set(0,0,o.canvas.width,o.canvas.height),w.set(0,0,o.canvas.width,o.canvas.height),f.reset(),h.reset(),d.reset()}return{buffers:{color:f,depth:h,stencil:d},enable:ut,disable:Tt,bindFramebuffer:Vt,drawBuffers:wt,useProgram:bt,setBlending:F,setMaterial:pn,setFlipSided:se,setCullFace:Kt,setLineWidth:Rt,setPolygonOffset:Se,setScissorTest:kt,activeTexture:N,bindTexture:A,unbindTexture:tt,compressedTexImage2D:gt,compressedTexImage3D:vt,texImage2D:Gt,texImage3D:Jt,updateUBOMapping:pe,uniformBlockBinding:le,texStorage2D:me,texStorage3D:Mt,texSubImage2D:pt,texSubImage3D:qt,compressedTexSubImage2D:Nt,compressedTexSubImage3D:Ot,scissor:te,viewport:Ft,reset:Fe}}function W2(o,e,i,s,l,f,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new Oe,v=new WeakMap;let m;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,A){return M?new OffscreenCanvas(N,A):Lc("canvas")}function C(N,A,tt){let gt=1;const vt=kt(N);if((vt.width>tt||vt.height>tt)&&(gt=tt/Math.max(vt.width,vt.height)),gt<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const pt=Math.floor(gt*vt.width),qt=Math.floor(gt*vt.height);m===void 0&&(m=T(pt,qt));const Nt=A?T(pt,qt):m;return Nt.width=pt,Nt.height=qt,Nt.getContext("2d").drawImage(N,0,0,pt,qt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+vt.width+"x"+vt.height+") to ("+pt+"x"+qt+")."),Nt}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+vt.width+"x"+vt.height+")."),N;return N}function y(N){return N.generateMipmaps}function S(N){o.generateMipmap(N)}function P(N){return N.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?o.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(N,A,tt,gt,vt=!1){if(N!==null){if(o[N]!==void 0)return o[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let pt=A;if(A===o.RED&&(tt===o.FLOAT&&(pt=o.R32F),tt===o.HALF_FLOAT&&(pt=o.R16F),tt===o.UNSIGNED_BYTE&&(pt=o.R8)),A===o.RED_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.R8UI),tt===o.UNSIGNED_SHORT&&(pt=o.R16UI),tt===o.UNSIGNED_INT&&(pt=o.R32UI),tt===o.BYTE&&(pt=o.R8I),tt===o.SHORT&&(pt=o.R16I),tt===o.INT&&(pt=o.R32I)),A===o.RG&&(tt===o.FLOAT&&(pt=o.RG32F),tt===o.HALF_FLOAT&&(pt=o.RG16F),tt===o.UNSIGNED_BYTE&&(pt=o.RG8)),A===o.RG_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RG8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RG16UI),tt===o.UNSIGNED_INT&&(pt=o.RG32UI),tt===o.BYTE&&(pt=o.RG8I),tt===o.SHORT&&(pt=o.RG16I),tt===o.INT&&(pt=o.RG32I)),A===o.RGB_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),tt===o.UNSIGNED_INT&&(pt=o.RGB32UI),tt===o.BYTE&&(pt=o.RGB8I),tt===o.SHORT&&(pt=o.RGB16I),tt===o.INT&&(pt=o.RGB32I)),A===o.RGBA_INTEGER&&(tt===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),tt===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),tt===o.UNSIGNED_INT&&(pt=o.RGBA32UI),tt===o.BYTE&&(pt=o.RGBA8I),tt===o.SHORT&&(pt=o.RGBA16I),tt===o.INT&&(pt=o.RGBA32I)),A===o.RGB&&tt===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),A===o.RGBA){const qt=vt?Uc:Ne.getTransfer(gt);tt===o.FLOAT&&(pt=o.RGBA32F),tt===o.HALF_FLOAT&&(pt=o.RGBA16F),tt===o.UNSIGNED_BYTE&&(pt=qt===Ge?o.SRGB8_ALPHA8:o.RGBA8),tt===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),tt===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),pt}function U(N,A){let tt;return N?A===null||A===$r||A===_l?tt=o.DEPTH24_STENCIL8:A===Aa?tt=o.DEPTH32F_STENCIL8:A===gl&&(tt=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===$r||A===_l?tt=o.DEPTH_COMPONENT24:A===Aa?tt=o.DEPTH_COMPONENT32F:A===gl&&(tt=o.DEPTH_COMPONENT16),tt}function X(N,A){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==Pi&&N.minFilter!==Oi?Math.log2(Math.max(A.width,A.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?A.mipmaps.length:1}function I(N){const A=N.target;A.removeEventListener("dispose",I),G(A),A.isVideoTexture&&v.delete(A)}function z(N){const A=N.target;A.removeEventListener("dispose",z),R(A)}function G(N){const A=s.get(N);if(A.__webglInit===void 0)return;const tt=N.source,gt=x.get(tt);if(gt){const vt=gt[A.__cacheKey];vt.usedTimes--,vt.usedTimes===0&&D(N),Object.keys(gt).length===0&&x.delete(tt)}s.remove(N)}function D(N){const A=s.get(N);o.deleteTexture(A.__webglTexture);const tt=N.source,gt=x.get(tt);delete gt[A.__cacheKey],h.memory.textures--}function R(N){const A=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let gt=0;gt<6;gt++){if(Array.isArray(A.__webglFramebuffer[gt]))for(let vt=0;vt<A.__webglFramebuffer[gt].length;vt++)o.deleteFramebuffer(A.__webglFramebuffer[gt][vt]);else o.deleteFramebuffer(A.__webglFramebuffer[gt]);A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer[gt])}else{if(Array.isArray(A.__webglFramebuffer))for(let gt=0;gt<A.__webglFramebuffer.length;gt++)o.deleteFramebuffer(A.__webglFramebuffer[gt]);else o.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&o.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&o.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let gt=0;gt<A.__webglColorRenderbuffer.length;gt++)A.__webglColorRenderbuffer[gt]&&o.deleteRenderbuffer(A.__webglColorRenderbuffer[gt]);A.__webglDepthRenderbuffer&&o.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const tt=N.textures;for(let gt=0,vt=tt.length;gt<vt;gt++){const pt=s.get(tt[gt]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),s.remove(tt[gt])}s.remove(N)}let H=0;function ot(){H=0}function it(){const N=H;return N>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+l.maxTextures),H+=1,N}function dt(N){const A=[];return A.push(N.wrapS),A.push(N.wrapT),A.push(N.wrapR||0),A.push(N.magFilter),A.push(N.minFilter),A.push(N.anisotropy),A.push(N.internalFormat),A.push(N.format),A.push(N.type),A.push(N.generateMipmaps),A.push(N.premultiplyAlpha),A.push(N.flipY),A.push(N.unpackAlignment),A.push(N.colorSpace),A.join()}function ct(N,A){const tt=s.get(N);if(N.isVideoTexture&&Rt(N),N.isRenderTargetTexture===!1&&N.version>0&&tt.__version!==N.version){const gt=N.image;if(gt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(gt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{w(tt,N,A);return}}i.bindTexture(o.TEXTURE_2D,tt.__webglTexture,o.TEXTURE0+A)}function q(N,A){const tt=s.get(N);if(N.version>0&&tt.__version!==N.version){w(tt,N,A);return}i.bindTexture(o.TEXTURE_2D_ARRAY,tt.__webglTexture,o.TEXTURE0+A)}function rt(N,A){const tt=s.get(N);if(N.version>0&&tt.__version!==N.version){w(tt,N,A);return}i.bindTexture(o.TEXTURE_3D,tt.__webglTexture,o.TEXTURE0+A)}function Q(N,A){const tt=s.get(N);if(N.version>0&&tt.__version!==N.version){j(tt,N,A);return}i.bindTexture(o.TEXTURE_CUBE_MAP,tt.__webglTexture,o.TEXTURE0+A)}const xt={[Dc]:o.REPEAT,[Kr]:o.CLAMP_TO_EDGE,[lp]:o.MIRRORED_REPEAT},St={[Pi]:o.NEAREST,[ME]:o.NEAREST_MIPMAP_NEAREST,[Qu]:o.NEAREST_MIPMAP_LINEAR,[Oi]:o.LINEAR,[_d]:o.LINEAR_MIPMAP_NEAREST,[Qr]:o.LINEAR_MIPMAP_LINEAR},Ht={[bE]:o.NEVER,[NE]:o.ALWAYS,[RE]:o.LESS,[Lx]:o.LEQUAL,[CE]:o.EQUAL,[UE]:o.GEQUAL,[wE]:o.GREATER,[DE]:o.NOTEQUAL};function ne(N,A){if(A.type===Aa&&e.has("OES_texture_float_linear")===!1&&(A.magFilter===Oi||A.magFilter===_d||A.magFilter===Qu||A.magFilter===Qr||A.minFilter===Oi||A.minFilter===_d||A.minFilter===Qu||A.minFilter===Qr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(N,o.TEXTURE_WRAP_S,xt[A.wrapS]),o.texParameteri(N,o.TEXTURE_WRAP_T,xt[A.wrapT]),(N===o.TEXTURE_3D||N===o.TEXTURE_2D_ARRAY)&&o.texParameteri(N,o.TEXTURE_WRAP_R,xt[A.wrapR]),o.texParameteri(N,o.TEXTURE_MAG_FILTER,St[A.magFilter]),o.texParameteri(N,o.TEXTURE_MIN_FILTER,St[A.minFilter]),A.compareFunction&&(o.texParameteri(N,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(N,o.TEXTURE_COMPARE_FUNC,Ht[A.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Pi||A.minFilter!==Qu&&A.minFilter!==Qr||A.type===Aa&&e.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||s.get(A).__currentAnisotropy){const tt=e.get("EXT_texture_filter_anisotropic");o.texParameterf(N,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,l.getMaxAnisotropy())),s.get(A).__currentAnisotropy=A.anisotropy}}}function Te(N,A){let tt=!1;N.__webglInit===void 0&&(N.__webglInit=!0,A.addEventListener("dispose",I));const gt=A.source;let vt=x.get(gt);vt===void 0&&(vt={},x.set(gt,vt));const pt=dt(A);if(pt!==N.__cacheKey){vt[pt]===void 0&&(vt[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,tt=!0),vt[pt].usedTimes++;const qt=vt[N.__cacheKey];qt!==void 0&&(vt[N.__cacheKey].usedTimes--,qt.usedTimes===0&&D(A)),N.__cacheKey=pt,N.__webglTexture=vt[pt].texture}return tt}function w(N,A,tt){let gt=o.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(gt=o.TEXTURE_2D_ARRAY),A.isData3DTexture&&(gt=o.TEXTURE_3D);const vt=Te(N,A),pt=A.source;i.bindTexture(gt,N.__webglTexture,o.TEXTURE0+tt);const qt=s.get(pt);if(pt.version!==qt.__version||vt===!0){i.activeTexture(o.TEXTURE0+tt);const Nt=Ne.getPrimaries(Ne.workingColorSpace),Ot=A.colorSpace===cr?null:Ne.getPrimaries(A.colorSpace),me=A.colorSpace===cr||Nt===Ot?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Mt=C(A.image,!1,l.maxTextureSize);Mt=Se(A,Mt);const Gt=f.convert(A.format,A.colorSpace),Jt=f.convert(A.type);let te=O(A.internalFormat,Gt,Jt,A.colorSpace,A.isVideoTexture);ne(gt,A);let Ft;const pe=A.mipmaps,le=A.isVideoTexture!==!0,Fe=qt.__version===void 0||vt===!0,V=pt.dataReady,zt=X(A,Mt);if(A.isDepthTexture)te=U(A.format===xl,A.type),Fe&&(le?i.texStorage2D(o.TEXTURE_2D,1,te,Mt.width,Mt.height):i.texImage2D(o.TEXTURE_2D,0,te,Mt.width,Mt.height,0,Gt,Jt,null));else if(A.isDataTexture)if(pe.length>0){le&&Fe&&i.texStorage2D(o.TEXTURE_2D,zt,te,pe[0].width,pe[0].height);for(let lt=0,_t=pe.length;lt<_t;lt++)Ft=pe[lt],le?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Jt,Ft.data):i.texImage2D(o.TEXTURE_2D,lt,te,Ft.width,Ft.height,0,Gt,Jt,Ft.data);A.generateMipmaps=!1}else le?(Fe&&i.texStorage2D(o.TEXTURE_2D,zt,te,Mt.width,Mt.height),V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Mt.width,Mt.height,Gt,Jt,Mt.data)):i.texImage2D(o.TEXTURE_2D,0,te,Mt.width,Mt.height,0,Gt,Jt,Mt.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){le&&Fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,te,pe[0].width,pe[0].height,Mt.depth);for(let lt=0,_t=pe.length;lt<_t;lt++)if(Ft=pe[lt],A.format!==zi)if(Gt!==null)if(le){if(V)if(A.layerUpdates.size>0){const Lt=Fv(Ft.width,Ft.height,A.format,A.type);for(const Pt of A.layerUpdates){const oe=Ft.data.subarray(Pt*Lt/Ft.data.BYTES_PER_ELEMENT,(Pt+1)*Lt/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,Pt,Ft.width,Ft.height,1,Gt,oe)}A.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ft.width,Ft.height,Mt.depth,Gt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,lt,te,Ft.width,Ft.height,Mt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?V&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,lt,0,0,0,Ft.width,Ft.height,Mt.depth,Gt,Jt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,lt,te,Ft.width,Ft.height,Mt.depth,0,Gt,Jt,Ft.data)}else{le&&Fe&&i.texStorage2D(o.TEXTURE_2D,zt,te,pe[0].width,pe[0].height);for(let lt=0,_t=pe.length;lt<_t;lt++)Ft=pe[lt],A.format!==zi?Gt!==null?le?V&&i.compressedTexSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,lt,te,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Ft.width,Ft.height,Gt,Jt,Ft.data):i.texImage2D(o.TEXTURE_2D,lt,te,Ft.width,Ft.height,0,Gt,Jt,Ft.data)}else if(A.isDataArrayTexture)if(le){if(Fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,zt,te,Mt.width,Mt.height,Mt.depth),V)if(A.layerUpdates.size>0){const lt=Fv(Mt.width,Mt.height,A.format,A.type);for(const _t of A.layerUpdates){const Lt=Mt.data.subarray(_t*lt/Mt.data.BYTES_PER_ELEMENT,(_t+1)*lt/Mt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Mt.width,Mt.height,1,Gt,Jt,Lt)}A.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,Jt,Mt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,te,Mt.width,Mt.height,Mt.depth,0,Gt,Jt,Mt.data);else if(A.isData3DTexture)le?(Fe&&i.texStorage3D(o.TEXTURE_3D,zt,te,Mt.width,Mt.height,Mt.depth),V&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Mt.width,Mt.height,Mt.depth,Gt,Jt,Mt.data)):i.texImage3D(o.TEXTURE_3D,0,te,Mt.width,Mt.height,Mt.depth,0,Gt,Jt,Mt.data);else if(A.isFramebufferTexture){if(Fe)if(le)i.texStorage2D(o.TEXTURE_2D,zt,te,Mt.width,Mt.height);else{let lt=Mt.width,_t=Mt.height;for(let Lt=0;Lt<zt;Lt++)i.texImage2D(o.TEXTURE_2D,Lt,te,lt,_t,0,Gt,Jt,null),lt>>=1,_t>>=1}}else if(pe.length>0){if(le&&Fe){const lt=kt(pe[0]);i.texStorage2D(o.TEXTURE_2D,zt,te,lt.width,lt.height)}for(let lt=0,_t=pe.length;lt<_t;lt++)Ft=pe[lt],le?V&&i.texSubImage2D(o.TEXTURE_2D,lt,0,0,Gt,Jt,Ft):i.texImage2D(o.TEXTURE_2D,lt,te,Gt,Jt,Ft);A.generateMipmaps=!1}else if(le){if(Fe){const lt=kt(Mt);i.texStorage2D(o.TEXTURE_2D,zt,te,lt.width,lt.height)}V&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Gt,Jt,Mt)}else i.texImage2D(o.TEXTURE_2D,0,te,Gt,Jt,Mt);y(A)&&S(gt),qt.__version=pt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function j(N,A,tt){if(A.image.length!==6)return;const gt=Te(N,A),vt=A.source;i.bindTexture(o.TEXTURE_CUBE_MAP,N.__webglTexture,o.TEXTURE0+tt);const pt=s.get(vt);if(vt.version!==pt.__version||gt===!0){i.activeTexture(o.TEXTURE0+tt);const qt=Ne.getPrimaries(Ne.workingColorSpace),Nt=A.colorSpace===cr?null:Ne.getPrimaries(A.colorSpace),Ot=A.colorSpace===cr||qt===Nt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,A.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,A.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot);const me=A.isCompressedTexture||A.image[0].isCompressedTexture,Mt=A.image[0]&&A.image[0].isDataTexture,Gt=[];for(let _t=0;_t<6;_t++)!me&&!Mt?Gt[_t]=C(A.image[_t],!0,l.maxCubemapSize):Gt[_t]=Mt?A.image[_t].image:A.image[_t],Gt[_t]=Se(A,Gt[_t]);const Jt=Gt[0],te=f.convert(A.format,A.colorSpace),Ft=f.convert(A.type),pe=O(A.internalFormat,te,Ft,A.colorSpace),le=A.isVideoTexture!==!0,Fe=pt.__version===void 0||gt===!0,V=vt.dataReady;let zt=X(A,Jt);ne(o.TEXTURE_CUBE_MAP,A);let lt;if(me){le&&Fe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,pe,Jt.width,Jt.height);for(let _t=0;_t<6;_t++){lt=Gt[_t].mipmaps;for(let Lt=0;Lt<lt.length;Lt++){const Pt=lt[Lt];A.format!==zi?te!==null?le?V&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,Pt.width,Pt.height,te,Pt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,pe,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,0,0,Pt.width,Pt.height,te,Ft,Pt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt,pe,Pt.width,Pt.height,0,te,Ft,Pt.data)}}}else{if(lt=A.mipmaps,le&&Fe){lt.length>0&&zt++;const _t=kt(Gt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,zt,pe,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Mt){le?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt[_t].width,Gt[_t].height,te,Ft,Gt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,pe,Gt[_t].width,Gt[_t].height,0,te,Ft,Gt[_t].data);for(let Lt=0;Lt<lt.length;Lt++){const oe=lt[Lt].image[_t].image;le?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,oe.width,oe.height,te,Ft,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,pe,oe.width,oe.height,0,te,Ft,oe.data)}}else{le?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,te,Ft,Gt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,pe,te,Ft,Gt[_t]);for(let Lt=0;Lt<lt.length;Lt++){const Pt=lt[Lt];le?V&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,0,0,te,Ft,Pt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Lt+1,pe,te,Ft,Pt.image[_t])}}}y(A)&&S(o.TEXTURE_CUBE_MAP),pt.__version=vt.version,A.onUpdate&&A.onUpdate(A)}N.__version=A.version}function mt(N,A,tt,gt,vt,pt){const qt=f.convert(tt.format,tt.colorSpace),Nt=f.convert(tt.type),Ot=O(tt.internalFormat,qt,Nt,tt.colorSpace),me=s.get(A),Mt=s.get(tt);if(Mt.__renderTarget=A,!me.__hasExternalTextures){const Gt=Math.max(1,A.width>>pt),Jt=Math.max(1,A.height>>pt);vt===o.TEXTURE_3D||vt===o.TEXTURE_2D_ARRAY?i.texImage3D(vt,pt,Ot,Gt,Jt,A.depth,0,qt,Nt,null):i.texImage2D(vt,pt,Ot,Gt,Jt,0,qt,Nt,null)}i.bindFramebuffer(o.FRAMEBUFFER,N),Kt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,gt,vt,Mt.__webglTexture,0,se(A)):(vt===o.TEXTURE_2D||vt>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&vt<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,gt,vt,Mt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ut(N,A,tt){if(o.bindRenderbuffer(o.RENDERBUFFER,N),A.depthBuffer){const gt=A.depthTexture,vt=gt&&gt.isDepthTexture?gt.type:null,pt=U(A.stencilBuffer,vt),qt=A.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Nt=se(A);Kt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Nt,pt,A.width,A.height):tt?o.renderbufferStorageMultisample(o.RENDERBUFFER,Nt,pt,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,pt,A.width,A.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,qt,o.RENDERBUFFER,N)}else{const gt=A.textures;for(let vt=0;vt<gt.length;vt++){const pt=gt[vt],qt=f.convert(pt.format,pt.colorSpace),Nt=f.convert(pt.type),Ot=O(pt.internalFormat,qt,Nt,pt.colorSpace),me=se(A);tt&&Kt(A)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,Ot,A.width,A.height):Kt(A)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,Ot,A.width,A.height):o.renderbufferStorage(o.RENDERBUFFER,Ot,A.width,A.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Tt(N,A){if(A&&A.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,N),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const gt=s.get(A.depthTexture);gt.__renderTarget=A,(!gt.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),ct(A.depthTexture,0);const vt=gt.__webglTexture,pt=se(A);if(A.depthTexture.format===vl)Kt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,vt,0);else if(A.depthTexture.format===xl)Kt(A)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,vt,0);else throw new Error("Unknown depthTexture format")}function Vt(N){const A=s.get(N),tt=N.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==N.depthTexture){const gt=N.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),gt){const vt=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,gt.removeEventListener("dispose",vt)};gt.addEventListener("dispose",vt),A.__depthDisposeCallback=vt}A.__boundDepthTexture=gt}if(N.depthTexture&&!A.__autoAllocateDepthBuffer){if(tt)throw new Error("target.depthTexture not supported in Cube render targets");Tt(A.__webglFramebuffer,N)}else if(tt){A.__webglDepthbuffer=[];for(let gt=0;gt<6;gt++)if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer[gt]),A.__webglDepthbuffer[gt]===void 0)A.__webglDepthbuffer[gt]=o.createRenderbuffer(),ut(A.__webglDepthbuffer[gt],N,!1);else{const vt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=A.__webglDepthbuffer[gt];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,vt,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=o.createRenderbuffer(),ut(A.__webglDepthbuffer,N,!1);else{const gt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,vt=A.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,vt),o.framebufferRenderbuffer(o.FRAMEBUFFER,gt,o.RENDERBUFFER,vt)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function wt(N,A,tt){const gt=s.get(N);A!==void 0&&mt(gt.__webglFramebuffer,N,N.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),tt!==void 0&&Vt(N)}function bt(N){const A=N.texture,tt=s.get(N),gt=s.get(A);N.addEventListener("dispose",z);const vt=N.textures,pt=N.isWebGLCubeRenderTarget===!0,qt=vt.length>1;if(qt||(gt.__webglTexture===void 0&&(gt.__webglTexture=o.createTexture()),gt.__version=A.version,h.memory.textures++),pt){tt.__webglFramebuffer=[];for(let Nt=0;Nt<6;Nt++)if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer[Nt]=[];for(let Ot=0;Ot<A.mipmaps.length;Ot++)tt.__webglFramebuffer[Nt][Ot]=o.createFramebuffer()}else tt.__webglFramebuffer[Nt]=o.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){tt.__webglFramebuffer=[];for(let Nt=0;Nt<A.mipmaps.length;Nt++)tt.__webglFramebuffer[Nt]=o.createFramebuffer()}else tt.__webglFramebuffer=o.createFramebuffer();if(qt)for(let Nt=0,Ot=vt.length;Nt<Ot;Nt++){const me=s.get(vt[Nt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(N.samples>0&&Kt(N)===!1){tt.__webglMultisampledFramebuffer=o.createFramebuffer(),tt.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,tt.__webglMultisampledFramebuffer);for(let Nt=0;Nt<vt.length;Nt++){const Ot=vt[Nt];tt.__webglColorRenderbuffer[Nt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,tt.__webglColorRenderbuffer[Nt]);const me=f.convert(Ot.format,Ot.colorSpace),Mt=f.convert(Ot.type),Gt=O(Ot.internalFormat,me,Mt,Ot.colorSpace,N.isXRRenderTarget===!0),Jt=se(N);o.renderbufferStorageMultisample(o.RENDERBUFFER,Jt,Gt,N.width,N.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Nt,o.RENDERBUFFER,tt.__webglColorRenderbuffer[Nt])}o.bindRenderbuffer(o.RENDERBUFFER,null),N.depthBuffer&&(tt.__webglDepthRenderbuffer=o.createRenderbuffer(),ut(tt.__webglDepthRenderbuffer,N,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,gt.__webglTexture),ne(o.TEXTURE_CUBE_MAP,A);for(let Nt=0;Nt<6;Nt++)if(A.mipmaps&&A.mipmaps.length>0)for(let Ot=0;Ot<A.mipmaps.length;Ot++)mt(tt.__webglFramebuffer[Nt][Ot],N,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,Ot);else mt(tt.__webglFramebuffer[Nt],N,A,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+Nt,0);y(A)&&S(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(qt){for(let Nt=0,Ot=vt.length;Nt<Ot;Nt++){const me=vt[Nt],Mt=s.get(me);i.bindTexture(o.TEXTURE_2D,Mt.__webglTexture),ne(o.TEXTURE_2D,me),mt(tt.__webglFramebuffer,N,me,o.COLOR_ATTACHMENT0+Nt,o.TEXTURE_2D,0),y(me)&&S(o.TEXTURE_2D)}i.unbindTexture()}else{let Nt=o.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Nt=N.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(Nt,gt.__webglTexture),ne(Nt,A),A.mipmaps&&A.mipmaps.length>0)for(let Ot=0;Ot<A.mipmaps.length;Ot++)mt(tt.__webglFramebuffer[Ot],N,A,o.COLOR_ATTACHMENT0,Nt,Ot);else mt(tt.__webglFramebuffer,N,A,o.COLOR_ATTACHMENT0,Nt,0);y(A)&&S(Nt),i.unbindTexture()}N.depthBuffer&&Vt(N)}function It(N){const A=N.textures;for(let tt=0,gt=A.length;tt<gt;tt++){const vt=A[tt];if(y(vt)){const pt=P(N),qt=s.get(vt).__webglTexture;i.bindTexture(pt,qt),S(pt),i.unbindTexture()}}}const re=[],F=[];function pn(N){if(N.samples>0){if(Kt(N)===!1){const A=N.textures,tt=N.width,gt=N.height;let vt=o.COLOR_BUFFER_BIT;const pt=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,qt=s.get(N),Nt=A.length>1;if(Nt)for(let Ot=0;Ot<A.length;Ot++)i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,qt.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglFramebuffer);for(let Ot=0;Ot<A.length;Ot++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(vt|=o.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(vt|=o.STENCIL_BUFFER_BIT)),Nt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Ot]);const me=s.get(A[Ot]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,tt,gt,0,0,tt,gt,vt,o.NEAREST),p===!0&&(re.length=0,F.length=0,re.push(o.COLOR_ATTACHMENT0+Ot),N.depthBuffer&&N.resolveDepthBuffer===!1&&(re.push(pt),F.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,F)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,re))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),Nt)for(let Ot=0;Ot<A.length;Ot++){i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.RENDERBUFFER,qt.__webglColorRenderbuffer[Ot]);const me=s.get(A[Ot]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,qt.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Ot,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,qt.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&p){const A=N.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[A])}}}function se(N){return Math.min(l.maxSamples,N.samples)}function Kt(N){const A=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Rt(N){const A=h.render.frame;v.get(N)!==A&&(v.set(N,A),N.update())}function Se(N,A){const tt=N.colorSpace,gt=N.format,vt=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||tt!==uo&&tt!==cr&&(Ne.getTransfer(tt)===Ge?(gt!==zi||vt!==Ca)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",tt)),A}function kt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(_.width=N.naturalWidth||N.width,_.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(_.width=N.displayWidth,_.height=N.displayHeight):(_.width=N.width,_.height=N.height),_}this.allocateTextureUnit=it,this.resetTextureUnits=ot,this.setTexture2D=ct,this.setTexture2DArray=q,this.setTexture3D=rt,this.setTextureCube=Q,this.rebindTextures=wt,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=Kt}function j2(o,e){function i(s,l=cr){let f;const h=Ne.getTransfer(l);if(s===Ca)return o.UNSIGNED_BYTE;if(s===Gp)return o.UNSIGNED_SHORT_4_4_4_4;if(s===Vp)return o.UNSIGNED_SHORT_5_5_5_1;if(s===Tx)return o.UNSIGNED_INT_5_9_9_9_REV;if(s===Mx)return o.BYTE;if(s===Ex)return o.SHORT;if(s===gl)return o.UNSIGNED_SHORT;if(s===Hp)return o.INT;if(s===$r)return o.UNSIGNED_INT;if(s===Aa)return o.FLOAT;if(s===Ml)return o.HALF_FLOAT;if(s===Ax)return o.ALPHA;if(s===bx)return o.RGB;if(s===zi)return o.RGBA;if(s===Rx)return o.LUMINANCE;if(s===Cx)return o.LUMINANCE_ALPHA;if(s===vl)return o.DEPTH_COMPONENT;if(s===xl)return o.DEPTH_STENCIL;if(s===wx)return o.RED;if(s===Xp)return o.RED_INTEGER;if(s===Dx)return o.RG;if(s===kp)return o.RG_INTEGER;if(s===qp)return o.RGBA_INTEGER;if(s===Ec||s===Tc||s===Ac||s===bc)if(h===Ge)if(f=e.get("WEBGL_compressed_texture_s3tc_srgb"),f!==null){if(s===Ec)return f.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Tc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ac)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bc)return f.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(f=e.get("WEBGL_compressed_texture_s3tc"),f!==null){if(s===Ec)return f.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Tc)return f.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ac)return f.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bc)return f.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===up||s===cp||s===fp||s===hp)if(f=e.get("WEBGL_compressed_texture_pvrtc"),f!==null){if(s===up)return f.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===cp)return f.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===fp)return f.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===hp)return f.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===dp||s===pp||s===mp)if(f=e.get("WEBGL_compressed_texture_etc"),f!==null){if(s===dp||s===pp)return h===Ge?f.COMPRESSED_SRGB8_ETC2:f.COMPRESSED_RGB8_ETC2;if(s===mp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:f.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===gp||s===_p||s===vp||s===xp||s===Sp||s===yp||s===Mp||s===Ep||s===Tp||s===Ap||s===bp||s===Rp||s===Cp||s===wp)if(f=e.get("WEBGL_compressed_texture_astc"),f!==null){if(s===gp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:f.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===_p)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:f.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===vp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:f.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===xp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:f.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Sp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:f.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===yp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:f.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:f.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Ep)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:f.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Tp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:f.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ap)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:f.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===bp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:f.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:f.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Cp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:f.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===wp)return h===Ge?f.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:f.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Rc||s===Dp||s===Up)if(f=e.get("EXT_texture_compression_bptc"),f!==null){if(s===Rc)return h===Ge?f.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:f.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Dp)return f.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Up)return f.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Ux||s===Np||s===Lp||s===Op)if(f=e.get("EXT_texture_compression_rgtc"),f!==null){if(s===Rc)return f.COMPRESSED_RED_RGTC1_EXT;if(s===Np)return f.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lp)return f.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Op)return f.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===_l?o.UNSIGNED_INT_24_8:o[s]!==void 0?o[s]:null}return{convert:i}}const Z2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,K2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Q2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,s){if(this.texture===null){const l=new jn,f=e.properties.get(l);f.__webglTexture=i.texture,(i.depthNear!==s.depthNear||i.depthFar!==s.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new gr({vertexShader:Z2,fragmentShader:K2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new tn(new Rl(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class J2 extends fo{constructor(e,i){super();const s=this;let l=null,f=1,h=null,d="local-floor",p=1,_=null,v=null,m=null,x=null,M=null,T=null;const C=new Q2,y=i.getContextAttributes();let S=null,P=null;const O=[],U=[],X=new Oe;let I=null;const z=new Ei;z.viewport=new rn;const G=new Ei;G.viewport=new rn;const D=[z,G],R=new xT;let H=null,ot=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(w){let j=O[w];return j===void 0&&(j=new Fd,O[w]=j),j.getTargetRaySpace()},this.getControllerGrip=function(w){let j=O[w];return j===void 0&&(j=new Fd,O[w]=j),j.getGripSpace()},this.getHand=function(w){let j=O[w];return j===void 0&&(j=new Fd,O[w]=j),j.getHandSpace()};function it(w){const j=U.indexOf(w.inputSource);if(j===-1)return;const mt=O[j];mt!==void 0&&(mt.update(w.inputSource,w.frame,_||h),mt.dispatchEvent({type:w.type,data:w.inputSource}))}function dt(){l.removeEventListener("select",it),l.removeEventListener("selectstart",it),l.removeEventListener("selectend",it),l.removeEventListener("squeeze",it),l.removeEventListener("squeezestart",it),l.removeEventListener("squeezeend",it),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",ct);for(let w=0;w<O.length;w++){const j=U[w];j!==null&&(U[w]=null,O[w].disconnect(j))}H=null,ot=null,C.reset(),e.setRenderTarget(S),M=null,x=null,m=null,l=null,P=null,Te.stop(),s.isPresenting=!1,e.setPixelRatio(I),e.setSize(X.width,X.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(w){f=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(w){d=w,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return _||h},this.setReferenceSpace=function(w){_=w},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return m},this.getFrame=function(){return T},this.getSession=function(){return l},this.setSession=async function(w){if(l=w,l!==null){if(S=e.getRenderTarget(),l.addEventListener("select",it),l.addEventListener("selectstart",it),l.addEventListener("selectend",it),l.addEventListener("squeeze",it),l.addEventListener("squeezestart",it),l.addEventListener("squeezeend",it),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",ct),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(X),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let mt=null,ut=null,Tt=null;y.depth&&(Tt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,mt=y.stencil?xl:vl,ut=y.stencil?_l:$r);const Vt={colorFormat:i.RGBA8,depthFormat:Tt,scaleFactor:f};m=new XRWebGLBinding(l,i),x=m.createProjectionLayer(Vt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),P=new ts(x.textureWidth,x.textureHeight,{format:zi,type:Ca,depthTexture:new Xx(x.textureWidth,x.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,mt),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}else{const mt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:f};M=new XRWebGLLayer(l,i,mt),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new ts(M.framebufferWidth,M.framebufferHeight,{format:zi,type:Ca,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1})}P.isXRRenderTarget=!0,this.setFoveation(p),_=null,h=await l.requestReferenceSpace(d),Te.setContext(l),Te.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return C.getDepthTexture()};function ct(w){for(let j=0;j<w.removed.length;j++){const mt=w.removed[j],ut=U.indexOf(mt);ut>=0&&(U[ut]=null,O[ut].disconnect(mt))}for(let j=0;j<w.added.length;j++){const mt=w.added[j];let ut=U.indexOf(mt);if(ut===-1){for(let Vt=0;Vt<O.length;Vt++)if(Vt>=U.length){U.push(mt),ut=Vt;break}else if(U[Vt]===null){U[Vt]=mt,ut=Vt;break}if(ut===-1)break}const Tt=O[ut];Tt&&Tt.connect(mt)}}const q=new nt,rt=new nt;function Q(w,j,mt){q.setFromMatrixPosition(j.matrixWorld),rt.setFromMatrixPosition(mt.matrixWorld);const ut=q.distanceTo(rt),Tt=j.projectionMatrix.elements,Vt=mt.projectionMatrix.elements,wt=Tt[14]/(Tt[10]-1),bt=Tt[14]/(Tt[10]+1),It=(Tt[9]+1)/Tt[5],re=(Tt[9]-1)/Tt[5],F=(Tt[8]-1)/Tt[0],pn=(Vt[8]+1)/Vt[0],se=wt*F,Kt=wt*pn,Rt=ut/(-F+pn),Se=Rt*-F;if(j.matrixWorld.decompose(w.position,w.quaternion,w.scale),w.translateX(Se),w.translateZ(Rt),w.matrixWorld.compose(w.position,w.quaternion,w.scale),w.matrixWorldInverse.copy(w.matrixWorld).invert(),Tt[10]===-1)w.projectionMatrix.copy(j.projectionMatrix),w.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const kt=wt+Rt,N=bt+Rt,A=se-Se,tt=Kt+(ut-Se),gt=It*bt/N*kt,vt=re*bt/N*kt;w.projectionMatrix.makePerspective(A,tt,gt,vt,kt,N),w.projectionMatrixInverse.copy(w.projectionMatrix).invert()}}function xt(w,j){j===null?w.matrixWorld.copy(w.matrix):w.matrixWorld.multiplyMatrices(j.matrixWorld,w.matrix),w.matrixWorldInverse.copy(w.matrixWorld).invert()}this.updateCamera=function(w){if(l===null)return;let j=w.near,mt=w.far;C.texture!==null&&(C.depthNear>0&&(j=C.depthNear),C.depthFar>0&&(mt=C.depthFar)),R.near=G.near=z.near=j,R.far=G.far=z.far=mt,(H!==R.near||ot!==R.far)&&(l.updateRenderState({depthNear:R.near,depthFar:R.far}),H=R.near,ot=R.far),z.layers.mask=w.layers.mask|2,G.layers.mask=w.layers.mask|4,R.layers.mask=z.layers.mask|G.layers.mask;const ut=w.parent,Tt=R.cameras;xt(R,ut);for(let Vt=0;Vt<Tt.length;Vt++)xt(Tt[Vt],ut);Tt.length===2?Q(R,z,G):R.projectionMatrix.copy(z.projectionMatrix),St(w,R,ut)};function St(w,j,mt){mt===null?w.matrix.copy(j.matrixWorld):(w.matrix.copy(mt.matrixWorld),w.matrix.invert(),w.matrix.multiply(j.matrixWorld)),w.matrix.decompose(w.position,w.quaternion,w.scale),w.updateMatrixWorld(!0),w.projectionMatrix.copy(j.projectionMatrix),w.projectionMatrixInverse.copy(j.projectionMatrixInverse),w.isPerspectiveCamera&&(w.fov=zp*2*Math.atan(1/w.projectionMatrix.elements[5]),w.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&M===null))return p},this.setFoveation=function(w){p=w,x!==null&&(x.fixedFoveation=w),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=w)},this.hasDepthSensing=function(){return C.texture!==null},this.getDepthSensingMesh=function(){return C.getMesh(R)};let Ht=null;function ne(w,j){if(v=j.getViewerPose(_||h),T=j,v!==null){const mt=v.views;M!==null&&(e.setRenderTargetFramebuffer(P,M.framebuffer),e.setRenderTarget(P));let ut=!1;mt.length!==R.cameras.length&&(R.cameras.length=0,ut=!0);for(let wt=0;wt<mt.length;wt++){const bt=mt[wt];let It=null;if(M!==null)It=M.getViewport(bt);else{const F=m.getViewSubImage(x,bt);It=F.viewport,wt===0&&(e.setRenderTargetTextures(P,F.colorTexture,F.depthStencilTexture),e.setRenderTarget(P))}let re=D[wt];re===void 0&&(re=new Ei,re.layers.enable(wt),re.viewport=new rn,D[wt]=re),re.matrix.fromArray(bt.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(bt.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(It.x,It.y,It.width,It.height),wt===0&&(R.matrix.copy(re.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),ut===!0&&R.cameras.push(re)}const Tt=l.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&m){const wt=m.getDepthInformation(mt[0]);wt&&wt.isValid&&wt.texture&&C.init(e,wt,l.renderState)}}for(let mt=0;mt<O.length;mt++){const ut=U[mt],Tt=O[mt];ut!==null&&Tt!==void 0&&Tt.update(ut,j,_||h)}Ht&&Ht(w,j),j.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:j}),T=null}const Te=new Yx;Te.setAnimationLoop(ne),this.setAnimationLoop=function(w){Ht=w},this.dispose=function(){}}}const qr=new Ji,$2=new sn;function tR(o,e){function i(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function s(y,S){S.color.getRGB(y.fogColor.value,Hx(o)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function l(y,S,P,O,U){S.isMeshBasicMaterial||S.isMeshLambertMaterial?f(y,S):S.isMeshToonMaterial?(f(y,S),m(y,S)):S.isMeshPhongMaterial?(f(y,S),v(y,S)):S.isMeshStandardMaterial?(f(y,S),x(y,S),S.isMeshPhysicalMaterial&&M(y,S,U)):S.isMeshMatcapMaterial?(f(y,S),T(y,S)):S.isMeshDepthMaterial?f(y,S):S.isMeshDistanceMaterial?(f(y,S),C(y,S)):S.isMeshNormalMaterial?f(y,S):S.isLineBasicMaterial?(h(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?p(y,S,P,O):S.isSpriteMaterial?_(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function f(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,i(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===ni&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,i(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===ni&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,i(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,i(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,i(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const P=e.get(S),O=P.envMap,U=P.envMapRotation;O&&(y.envMap.value=O,qr.copy(U),qr.x*=-1,qr.y*=-1,qr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),y.envMapRotation.value.setFromMatrix4($2.makeRotationFromEuler(qr)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,i(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,i(S.aoMap,y.aoMapTransform))}function h(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function p(y,S,P,O){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*P,y.scale.value=O*.5,S.map&&(y.map.value=S.map,i(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function _(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,i(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,i(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function m(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function x(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,i(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,i(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,P){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,i(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,i(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,i(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,i(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,i(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===ni&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,i(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,i(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,i(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,i(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,i(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,i(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,i(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function C(y,S){const P=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function eR(o,e,i,s){let l={},f={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function p(P,O){const U=O.program;s.uniformBlockBinding(P,U)}function _(P,O){let U=l[P.id];U===void 0&&(T(P),U=v(P),l[P.id]=U,P.addEventListener("dispose",y));const X=O.program;s.updateUBOMapping(P,X);const I=e.render.frame;f[P.id]!==I&&(x(P),f[P.id]=I)}function v(P){const O=m();P.__bindingPointIndex=O;const U=o.createBuffer(),X=P.__size,I=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,U),o.bufferData(o.UNIFORM_BUFFER,X,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,U),U}function m(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],U=P.uniforms,X=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let I=0,z=U.length;I<z;I++){const G=Array.isArray(U[I])?U[I]:[U[I]];for(let D=0,R=G.length;D<R;D++){const H=G[D];if(M(H,I,D,X)===!0){const ot=H.__offset,it=Array.isArray(H.value)?H.value:[H.value];let dt=0;for(let ct=0;ct<it.length;ct++){const q=it[ct],rt=C(q);typeof q=="number"||typeof q=="boolean"?(H.__data[0]=q,o.bufferSubData(o.UNIFORM_BUFFER,ot+dt,H.__data)):q.isMatrix3?(H.__data[0]=q.elements[0],H.__data[1]=q.elements[1],H.__data[2]=q.elements[2],H.__data[3]=0,H.__data[4]=q.elements[3],H.__data[5]=q.elements[4],H.__data[6]=q.elements[5],H.__data[7]=0,H.__data[8]=q.elements[6],H.__data[9]=q.elements[7],H.__data[10]=q.elements[8],H.__data[11]=0):(q.toArray(H.__data,dt),dt+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,ot,H.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,O,U,X){const I=P.value,z=O+"_"+U;if(X[z]===void 0)return typeof I=="number"||typeof I=="boolean"?X[z]=I:X[z]=I.clone(),!0;{const G=X[z];if(typeof I=="number"||typeof I=="boolean"){if(G!==I)return X[z]=I,!0}else if(G.equals(I)===!1)return G.copy(I),!0}return!1}function T(P){const O=P.uniforms;let U=0;const X=16;for(let z=0,G=O.length;z<G;z++){const D=Array.isArray(O[z])?O[z]:[O[z]];for(let R=0,H=D.length;R<H;R++){const ot=D[R],it=Array.isArray(ot.value)?ot.value:[ot.value];for(let dt=0,ct=it.length;dt<ct;dt++){const q=it[dt],rt=C(q),Q=U%X,xt=Q%rt.boundary,St=Q+xt;U+=xt,St!==0&&X-St<rt.storage&&(U+=X-St),ot.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),ot.__offset=U,U+=rt.storage}}}const I=U%X;return I>0&&(U+=X-I),P.__size=U,P.__cache={},this}function C(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const U=h.indexOf(O.__bindingPointIndex);h.splice(U,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete f[O.id]}function S(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},f={}}return{bind:p,update:_,dispose:S}}class nR{constructor(e={}){const{canvas:i=OE(),context:s=null,depth:l=!0,stencil:f=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:_=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:m=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=h;const T=new Uint32Array(4),C=new Int32Array(4);let y=null,S=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const U=this;let X=!1;this._outputColorSpace=ei;let I=0,z=0,G=null,D=-1,R=null;const H=new rn,ot=new rn;let it=null;const dt=new Ce(0);let ct=0,q=i.width,rt=i.height,Q=1,xt=null,St=null;const Ht=new rn(0,0,q,rt),ne=new rn(0,0,q,rt);let Te=!1;const w=new Zp;let j=!1,mt=!1;const ut=new sn,Tt=new sn,Vt=new nt,wt=new rn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let It=!1;function re(){return G===null?Q:1}let F=s;function pn(b,Z){return i.getContext(b,Z)}try{const b={alpha:!0,depth:l,stencil:f,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:_,powerPreference:v,failIfMajorPerformanceCaveat:m};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fp}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Lt,!1),i.addEventListener("webglcontextcreationerror",Pt,!1),F===null){const Z="webgl2";if(F=pn(Z,b),F===null)throw pn(Z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let se,Kt,Rt,Se,kt,N,A,tt,gt,vt,pt,qt,Nt,Ot,me,Mt,Gt,Jt,te,Ft,pe,le,Fe,V;function zt(){se=new hb(F),se.init(),le=new j2(F,se),Kt=new rb(F,se,e,le),Rt=new Y2(F,se),Kt.reverseDepthBuffer&&x&&Rt.buffers.depth.setReversed(!0),Se=new mb(F),kt=new L2,N=new W2(F,se,Rt,kt,Kt,le,Se),A=new ob(U),tt=new fb(U),gt=new yT(F),Fe=new ib(F,gt),vt=new db(F,gt,Se,Fe),pt=new _b(F,vt,gt,Se),te=new gb(F,Kt,N),Mt=new sb(kt),qt=new N2(U,A,tt,se,Kt,Fe,Mt),Nt=new tR(U,kt),Ot=new z2,me=new G2(se),Jt=new nb(U,A,tt,Rt,pt,M,p),Gt=new k2(U,pt,Kt),V=new eR(F,Se,Kt,Rt),Ft=new ab(F,se,Se),pe=new pb(F,se,Se),Se.programs=qt.programs,U.capabilities=Kt,U.extensions=se,U.properties=kt,U.renderLists=Ot,U.shadowMap=Gt,U.state=Rt,U.info=Se}zt();const lt=new J2(U,F);this.xr=lt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const b=se.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=se.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(b){b!==void 0&&(Q=b,this.setSize(q,rt,!1))},this.getSize=function(b){return b.set(q,rt)},this.setSize=function(b,Z,at=!0){if(lt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=b,rt=Z,i.width=Math.floor(b*Q),i.height=Math.floor(Z*Q),at===!0&&(i.style.width=b+"px",i.style.height=Z+"px"),this.setViewport(0,0,b,Z)},this.getDrawingBufferSize=function(b){return b.set(q*Q,rt*Q).floor()},this.setDrawingBufferSize=function(b,Z,at){q=b,rt=Z,Q=at,i.width=Math.floor(b*at),i.height=Math.floor(Z*at),this.setViewport(0,0,b,Z)},this.getCurrentViewport=function(b){return b.copy(H)},this.getViewport=function(b){return b.copy(Ht)},this.setViewport=function(b,Z,at,st){b.isVector4?Ht.set(b.x,b.y,b.z,b.w):Ht.set(b,Z,at,st),Rt.viewport(H.copy(Ht).multiplyScalar(Q).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,Z,at,st){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,Z,at,st),Rt.scissor(ot.copy(ne).multiplyScalar(Q).round())},this.getScissorTest=function(){return Te},this.setScissorTest=function(b){Rt.setScissorTest(Te=b)},this.setOpaqueSort=function(b){xt=b},this.setTransparentSort=function(b){St=b},this.getClearColor=function(b){return b.copy(Jt.getClearColor())},this.setClearColor=function(){Jt.setClearColor(...arguments)},this.getClearAlpha=function(){return Jt.getClearAlpha()},this.setClearAlpha=function(){Jt.setClearAlpha(...arguments)},this.clear=function(b=!0,Z=!0,at=!0){let st=0;if(b){let K=!1;if(G!==null){const yt=G.texture.format;K=yt===qp||yt===kp||yt===Xp}if(K){const yt=G.texture.type,At=yt===Ca||yt===$r||yt===gl||yt===_l||yt===Gp||yt===Vp,Et=Jt.getClearColor(),Dt=Jt.getClearAlpha(),Qt=Et.r,ee=Et.g,Zt=Et.b;At?(T[0]=Qt,T[1]=ee,T[2]=Zt,T[3]=Dt,F.clearBufferuiv(F.COLOR,0,T)):(C[0]=Qt,C[1]=ee,C[2]=Zt,C[3]=Dt,F.clearBufferiv(F.COLOR,0,C))}else st|=F.COLOR_BUFFER_BIT}Z&&(st|=F.DEPTH_BUFFER_BIT),at&&(st|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(st)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Lt,!1),i.removeEventListener("webglcontextcreationerror",Pt,!1),Jt.dispose(),Ot.dispose(),me.dispose(),kt.dispose(),A.dispose(),tt.dispose(),pt.dispose(),Fe.dispose(),V.dispose(),qt.dispose(),lt.dispose(),lt.removeEventListener("sessionstart",zn),lt.removeEventListener("sessionend",Cl),ta.stop()};function _t(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),X=!0}function Lt(){console.log("THREE.WebGLRenderer: Context Restored."),X=!1;const b=Se.autoReset,Z=Gt.enabled,at=Gt.autoUpdate,st=Gt.needsUpdate,K=Gt.type;zt(),Se.autoReset=b,Gt.enabled=Z,Gt.autoUpdate=at,Gt.needsUpdate=st,Gt.type=K}function Pt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function oe(b){const Z=b.target;Z.removeEventListener("dispose",oe),Qe(Z)}function Qe(b){xn(b),kt.remove(b)}function xn(b){const Z=kt.get(b).programs;Z!==void 0&&(Z.forEach(function(at){qt.releaseProgram(at)}),b.isShaderMaterial&&qt.releaseShaderCache(b))}this.renderBufferDirect=function(b,Z,at,st,K,yt){Z===null&&(Z=bt);const At=K.isMesh&&K.matrixWorld.determinant()<0,Et=Bc(b,Z,at,st,K);Rt.setMaterial(st,At);let Dt=at.index,Qt=1;if(st.wireframe===!0){if(Dt=vt.getWireframeAttribute(at),Dt===void 0)return;Qt=2}const ee=at.drawRange,Zt=at.attributes.position;let be=ee.start*Qt,De=(ee.start+ee.count)*Qt;yt!==null&&(be=Math.max(be,yt.start*Qt),De=Math.min(De,(yt.start+yt.count)*Qt)),Dt!==null?(be=Math.max(be,0),De=Math.min(De,Dt.count)):Zt!=null&&(be=Math.max(be,0),De=Math.min(De,Zt.count));const Ye=De-be;if(Ye<0||Ye===1/0)return;Fe.setup(K,st,Et,at,Dt);let Ve,ge=Ft;if(Dt!==null&&(Ve=gt.get(Dt),ge=pe,ge.setIndex(Ve)),K.isMesh)st.wireframe===!0?(Rt.setLineWidth(st.wireframeLinewidth*re()),ge.setMode(F.LINES)):ge.setMode(F.TRIANGLES);else if(K.isLine){let Yt=st.linewidth;Yt===void 0&&(Yt=1),Rt.setLineWidth(Yt*re()),K.isLineSegments?ge.setMode(F.LINES):K.isLineLoop?ge.setMode(F.LINE_LOOP):ge.setMode(F.LINE_STRIP)}else K.isPoints?ge.setMode(F.POINTS):K.isSprite&&ge.setMode(F.TRIANGLES);if(K.isBatchedMesh)if(K._multiDrawInstances!==null)Cc("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ge.renderMultiDrawInstances(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount,K._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ge.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{const Yt=K._multiDrawStarts,Je=K._multiDrawCounts,ye=K._multiDrawCount,yn=Dt?gt.get(Dt).bytesPerElement:1,Ke=kt.get(st).currentProgram.getUniforms();for(let Pn=0;Pn<ye;Pn++)Ke.setValue(F,"_gl_DrawID",Pn),ge.render(Yt[Pn]/yn,Je[Pn])}else if(K.isInstancedMesh)ge.renderInstances(be,Ye,K.count);else if(at.isInstancedBufferGeometry){const Yt=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Je=Math.min(at.instanceCount,Yt);ge.renderInstances(be,Ye,Je)}else ge.render(be,Ye)};function Ae(b,Z,at){b.transparent===!0&&b.side===Ki&&b.forceSinglePass===!1?(b.side=ni,b.needsUpdate=!0,na(b,Z,at),b.side=mr,b.needsUpdate=!0,na(b,Z,at),b.side=Ki):na(b,Z,at)}this.compile=function(b,Z,at=null){at===null&&(at=b),S=me.get(at),S.init(Z),O.push(S),at.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),b!==at&&b.traverseVisible(function(K){K.isLight&&K.layers.test(Z.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights();const st=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;const yt=K.material;if(yt)if(Array.isArray(yt))for(let At=0;At<yt.length;At++){const Et=yt[At];Ae(Et,at,K),st.add(Et)}else Ae(yt,at,K),st.add(yt)}),S=O.pop(),st},this.compileAsync=function(b,Z,at=null){const st=this.compile(b,Z,at);return new Promise(K=>{function yt(){if(st.forEach(function(At){kt.get(At).currentProgram.isReady()&&st.delete(At)}),st.size===0){K(b);return}setTimeout(yt,10)}se.get("KHR_parallel_shader_compile")!==null?yt():setTimeout(yt,10)})};let Ze=null;function Sn(b){Ze&&Ze(b)}function zn(){ta.stop()}function Cl(){ta.start()}const ta=new Yx;ta.setAnimationLoop(Sn),typeof self<"u"&&ta.setContext(self),this.setAnimationLoop=function(b){Ze=b,lt.setAnimationLoop(b),b===null?ta.stop():ta.start()},lt.addEventListener("sessionstart",zn),lt.addEventListener("sessionend",Cl),this.render=function(b,Z){if(Z!==void 0&&Z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),lt.enabled===!0&&lt.isPresenting===!0&&(lt.cameraAutoUpdate===!0&&lt.updateCamera(Z),Z=lt.getCamera()),b.isScene===!0&&b.onBeforeRender(U,b,Z,G),S=me.get(b,O.length),S.init(Z),O.push(S),Tt.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),w.setFromProjectionMatrix(Tt),mt=this.localClippingEnabled,j=Mt.init(this.clippingPlanes,mt),y=Ot.get(b,P.length),y.init(),P.push(y),lt.enabled===!0&&lt.isPresenting===!0){const yt=U.xr.getDepthSensingMesh();yt!==null&&mo(yt,Z,-1/0,U.sortObjects)}mo(b,Z,0,U.sortObjects),y.finish(),U.sortObjects===!0&&y.sort(xt,St),It=lt.enabled===!1||lt.isPresenting===!1||lt.hasDepthSensing()===!1,It&&Jt.addToRenderList(y,b),this.info.render.frame++,j===!0&&Mt.beginShadows();const at=S.state.shadowsArray;Gt.render(at,b,Z),j===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset();const st=y.opaque,K=y.transmissive;if(S.setupLights(),Z.isArrayCamera){const yt=Z.cameras;if(K.length>0)for(let At=0,Et=yt.length;At<Et;At++){const Dt=yt[At];vr(st,K,b,Dt)}It&&Jt.render(b);for(let At=0,Et=yt.length;At<Et;At++){const Dt=yt[At];_r(y,b,Dt,Dt.viewport)}}else K.length>0&&vr(st,K,b,Z),It&&Jt.render(b),_r(y,b,Z);G!==null&&z===0&&(N.updateMultisampleRenderTarget(G),N.updateRenderTargetMipmap(G)),b.isScene===!0&&b.onAfterRender(U,b,Z),Fe.resetDefaultState(),D=-1,R=null,O.pop(),O.length>0?(S=O[O.length-1],j===!0&&Mt.setGlobalState(U.clippingPlanes,S.state.camera)):S=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function mo(b,Z,at,st){if(b.visible===!1)return;if(b.layers.test(Z.layers)){if(b.isGroup)at=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(Z);else if(b.isLight)S.pushLight(b),b.castShadow&&S.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||w.intersectsSprite(b)){st&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Tt);const At=pt.update(b),Et=b.material;Et.visible&&y.push(b,At,Et,at,wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||w.intersectsObject(b))){const At=pt.update(b),Et=b.material;if(st&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),wt.copy(At.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(Tt)),Array.isArray(Et)){const Dt=At.groups;for(let Qt=0,ee=Dt.length;Qt<ee;Qt++){const Zt=Dt[Qt],be=Et[Zt.materialIndex];be&&be.visible&&y.push(b,At,be,at,wt.z,Zt)}}else Et.visible&&y.push(b,At,Et,at,wt.z,null)}}const yt=b.children;for(let At=0,Et=yt.length;At<Et;At++)mo(yt[At],Z,at,st)}function _r(b,Z,at,st){const K=b.opaque,yt=b.transmissive,At=b.transparent;S.setupLightsView(at),j===!0&&Mt.setGlobalState(U.clippingPlanes,at),st&&Rt.viewport(H.copy(st)),K.length>0&&ea(K,Z,at),yt.length>0&&ea(yt,Z,at),At.length>0&&ea(At,Z,at),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function vr(b,Z,at,st){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;S.state.transmissionRenderTarget[st.id]===void 0&&(S.state.transmissionRenderTarget[st.id]=new ts(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?Ml:Ca,minFilter:Qr,samples:4,stencilBuffer:f,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ne.workingColorSpace}));const yt=S.state.transmissionRenderTarget[st.id],At=st.viewport||H;yt.setSize(At.z*U.transmissionResolutionScale,At.w*U.transmissionResolutionScale);const Et=U.getRenderTarget();U.setRenderTarget(yt),U.getClearColor(dt),ct=U.getClearAlpha(),ct<1&&U.setClearColor(16777215,.5),U.clear(),It&&Jt.render(at);const Dt=U.toneMapping;U.toneMapping=pr;const Qt=st.viewport;if(st.viewport!==void 0&&(st.viewport=void 0),S.setupLightsView(st),j===!0&&Mt.setGlobalState(U.clippingPlanes,st),ea(b,at,st),N.updateMultisampleRenderTarget(yt),N.updateRenderTargetMipmap(yt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Zt=0,be=Z.length;Zt<be;Zt++){const De=Z[Zt],Ye=De.object,Ve=De.geometry,ge=De.material,Yt=De.group;if(ge.side===Ki&&Ye.layers.test(st.layers)){const Je=ge.side;ge.side=ni,ge.needsUpdate=!0,Ii(Ye,at,st,Ve,ge,Yt),ge.side=Je,ge.needsUpdate=!0,ee=!0}}ee===!0&&(N.updateMultisampleRenderTarget(yt),N.updateRenderTargetMipmap(yt))}U.setRenderTarget(Et),U.setClearColor(dt,ct),Qt!==void 0&&(st.viewport=Qt),U.toneMapping=Dt}function ea(b,Z,at){const st=Z.isScene===!0?Z.overrideMaterial:null;for(let K=0,yt=b.length;K<yt;K++){const At=b[K],Et=At.object,Dt=At.geometry,Qt=At.group;let ee=At.material;ee.allowOverride===!0&&st!==null&&(ee=st),Et.layers.test(at.layers)&&Ii(Et,Z,at,Dt,ee,Qt)}}function Ii(b,Z,at,st,K,yt){b.onBeforeRender(U,Z,at,st,K,yt),b.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(U,Z,at,st,b,yt),K.transparent===!0&&K.side===Ki&&K.forceSinglePass===!1?(K.side=ni,K.needsUpdate=!0,U.renderBufferDirect(at,Z,st,K,b,yt),K.side=mr,K.needsUpdate=!0,U.renderBufferDirect(at,Z,st,K,b,yt),K.side=Ki):U.renderBufferDirect(at,Z,st,K,b,yt),b.onAfterRender(U,Z,at,st,K,yt)}function na(b,Z,at){Z.isScene!==!0&&(Z=bt);const st=kt.get(b),K=S.state.lights,yt=S.state.shadowsArray,At=K.state.version,Et=qt.getParameters(b,K.state,yt,Z,at),Dt=qt.getProgramCacheKey(Et);let Qt=st.programs;st.environment=b.isMeshStandardMaterial?Z.environment:null,st.fog=Z.fog,st.envMap=(b.isMeshStandardMaterial?tt:A).get(b.envMap||st.environment),st.envMapRotation=st.environment!==null&&b.envMap===null?Z.environmentRotation:b.envMapRotation,Qt===void 0&&(b.addEventListener("dispose",oe),Qt=new Map,st.programs=Qt);let ee=Qt.get(Dt);if(ee!==void 0){if(st.currentProgram===ee&&st.lightsStateVersion===At)return go(b,Et),ee}else Et.uniforms=qt.getUniforms(b),b.onBeforeCompile(Et,U),ee=qt.acquireProgram(Et,Dt),Qt.set(Dt,ee),st.uniforms=Et.uniforms;const Zt=st.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Zt.clippingPlanes=Mt.uniform),go(b,Et),st.needsLights=_o(b),st.lightsStateVersion=At,st.needsLights&&(Zt.ambientLightColor.value=K.state.ambient,Zt.lightProbe.value=K.state.probe,Zt.directionalLights.value=K.state.directional,Zt.directionalLightShadows.value=K.state.directionalShadow,Zt.spotLights.value=K.state.spot,Zt.spotLightShadows.value=K.state.spotShadow,Zt.rectAreaLights.value=K.state.rectArea,Zt.ltc_1.value=K.state.rectAreaLTC1,Zt.ltc_2.value=K.state.rectAreaLTC2,Zt.pointLights.value=K.state.point,Zt.pointLightShadows.value=K.state.pointShadow,Zt.hemisphereLights.value=K.state.hemi,Zt.directionalShadowMap.value=K.state.directionalShadowMap,Zt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Zt.spotShadowMap.value=K.state.spotShadowMap,Zt.spotLightMatrix.value=K.state.spotLightMatrix,Zt.spotLightMap.value=K.state.spotLightMap,Zt.pointShadowMap.value=K.state.pointShadowMap,Zt.pointShadowMatrix.value=K.state.pointShadowMatrix),st.currentProgram=ee,st.uniformsList=null,ee}function wa(b){if(b.uniformsList===null){const Z=b.currentProgram.getUniforms();b.uniformsList=wc.seqWithValue(Z.seq,b.uniforms)}return b.uniformsList}function go(b,Z){const at=kt.get(b);at.outputColorSpace=Z.outputColorSpace,at.batching=Z.batching,at.batchingColor=Z.batchingColor,at.instancing=Z.instancing,at.instancingColor=Z.instancingColor,at.instancingMorph=Z.instancingMorph,at.skinning=Z.skinning,at.morphTargets=Z.morphTargets,at.morphNormals=Z.morphNormals,at.morphColors=Z.morphColors,at.morphTargetsCount=Z.morphTargetsCount,at.numClippingPlanes=Z.numClippingPlanes,at.numIntersection=Z.numClipIntersection,at.vertexAlphas=Z.vertexAlphas,at.vertexTangents=Z.vertexTangents,at.toneMapping=Z.toneMapping}function Bc(b,Z,at,st,K){Z.isScene!==!0&&(Z=bt),N.resetTextureUnits();const yt=Z.fog,At=st.isMeshStandardMaterial?Z.environment:null,Et=G===null?U.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:uo,Dt=(st.isMeshStandardMaterial?tt:A).get(st.envMap||At),Qt=st.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,ee=!!at.attributes.tangent&&(!!st.normalMap||st.anisotropy>0),Zt=!!at.morphAttributes.position,be=!!at.morphAttributes.normal,De=!!at.morphAttributes.color;let Ye=pr;st.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ye=U.toneMapping);const Ve=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,ge=Ve!==void 0?Ve.length:0,Yt=kt.get(st),Je=S.state.lights;if(j===!0&&(mt===!0||b!==R)){const bn=b===R&&st.id===D;Mt.setState(st,b,bn)}let ye=!1;st.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==Je.state.version||Yt.outputColorSpace!==Et||K.isBatchedMesh&&Yt.batching===!1||!K.isBatchedMesh&&Yt.batching===!0||K.isBatchedMesh&&Yt.batchingColor===!0&&K.colorTexture===null||K.isBatchedMesh&&Yt.batchingColor===!1&&K.colorTexture!==null||K.isInstancedMesh&&Yt.instancing===!1||!K.isInstancedMesh&&Yt.instancing===!0||K.isSkinnedMesh&&Yt.skinning===!1||!K.isSkinnedMesh&&Yt.skinning===!0||K.isInstancedMesh&&Yt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Yt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Yt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Yt.instancingMorph===!1&&K.morphTexture!==null||Yt.envMap!==Dt||st.fog===!0&&Yt.fog!==yt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Mt.numPlanes||Yt.numIntersection!==Mt.numIntersection)||Yt.vertexAlphas!==Qt||Yt.vertexTangents!==ee||Yt.morphTargets!==Zt||Yt.morphNormals!==be||Yt.morphColors!==De||Yt.toneMapping!==Ye||Yt.morphTargetsCount!==ge)&&(ye=!0):(ye=!0,Yt.__version=st.version);let yn=Yt.currentProgram;ye===!0&&(yn=na(st,Z,K));let Ke=!1,Pn=!1,Da=!1;const Xe=yn.getUniforms(),ln=Yt.uniforms;if(Rt.useProgram(yn.program)&&(Ke=!0,Pn=!0,Da=!0),st.id!==D&&(D=st.id,Pn=!0),Ke||R!==b){Rt.buffers.depth.getReversed()?(ut.copy(b.projectionMatrix),PE(ut),IE(ut),Xe.setValue(F,"projectionMatrix",ut)):Xe.setValue(F,"projectionMatrix",b.projectionMatrix),Xe.setValue(F,"viewMatrix",b.matrixWorldInverse);const Rn=Xe.map.cameraPosition;Rn!==void 0&&Rn.setValue(F,Vt.setFromMatrixPosition(b.matrixWorld)),Kt.logarithmicDepthBuffer&&Xe.setValue(F,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(st.isMeshPhongMaterial||st.isMeshToonMaterial||st.isMeshLambertMaterial||st.isMeshBasicMaterial||st.isMeshStandardMaterial||st.isShaderMaterial)&&Xe.setValue(F,"isOrthographic",b.isOrthographicCamera===!0),R!==b&&(R=b,Pn=!0,Da=!0)}if(K.isSkinnedMesh){Xe.setOptional(F,K,"bindMatrix"),Xe.setOptional(F,K,"bindMatrixInverse");const bn=K.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Xe.setValue(F,"boneTexture",bn.boneTexture,N))}K.isBatchedMesh&&(Xe.setOptional(F,K,"batchingTexture"),Xe.setValue(F,"batchingTexture",K._matricesTexture,N),Xe.setOptional(F,K,"batchingIdTexture"),Xe.setValue(F,"batchingIdTexture",K._indirectTexture,N),Xe.setOptional(F,K,"batchingColorTexture"),K._colorsTexture!==null&&Xe.setValue(F,"batchingColorTexture",K._colorsTexture,N));const mn=at.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&te.update(K,at,yn),(Pn||Yt.receiveShadow!==K.receiveShadow)&&(Yt.receiveShadow=K.receiveShadow,Xe.setValue(F,"receiveShadow",K.receiveShadow)),st.isMeshGouraudMaterial&&st.envMap!==null&&(ln.envMap.value=Dt,ln.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),st.isMeshStandardMaterial&&st.envMap===null&&Z.environment!==null&&(ln.envMapIntensity.value=Z.environmentIntensity),Pn&&(Xe.setValue(F,"toneMappingExposure",U.toneMappingExposure),Yt.needsLights&&wl(ln,Da),yt&&st.fog===!0&&Nt.refreshFogUniforms(ln,yt),Nt.refreshMaterialUniforms(ln,st,Q,rt,S.state.transmissionRenderTarget[b.id]),wc.upload(F,wa(Yt),ln,N)),st.isShaderMaterial&&st.uniformsNeedUpdate===!0&&(wc.upload(F,wa(Yt),ln,N),st.uniformsNeedUpdate=!1),st.isSpriteMaterial&&Xe.setValue(F,"center",K.center),Xe.setValue(F,"modelViewMatrix",K.modelViewMatrix),Xe.setValue(F,"normalMatrix",K.normalMatrix),Xe.setValue(F,"modelMatrix",K.matrixWorld),st.isShaderMaterial||st.isRawShaderMaterial){const bn=st.uniformsGroups;for(let Rn=0,es=bn.length;Rn<es;Rn++){const ia=bn[Rn];V.update(ia,yn),V.bind(ia,yn)}}return yn}function wl(b,Z){b.ambientLightColor.needsUpdate=Z,b.lightProbe.needsUpdate=Z,b.directionalLights.needsUpdate=Z,b.directionalLightShadows.needsUpdate=Z,b.pointLights.needsUpdate=Z,b.pointLightShadows.needsUpdate=Z,b.spotLights.needsUpdate=Z,b.spotLightShadows.needsUpdate=Z,b.rectAreaLights.needsUpdate=Z,b.hemisphereLights.needsUpdate=Z}function _o(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(b,Z,at){const st=kt.get(b);st.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,st.__autoAllocateDepthBuffer===!1&&(st.__useRenderToTexture=!1),kt.get(b.texture).__webglTexture=Z,kt.get(b.depthTexture).__webglTexture=st.__autoAllocateDepthBuffer?void 0:at,st.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,Z){const at=kt.get(b);at.__webglFramebuffer=Z,at.__useDefaultFramebuffer=Z===void 0};const xr=F.createFramebuffer();this.setRenderTarget=function(b,Z=0,at=0){G=b,I=Z,z=at;let st=!0,K=null,yt=!1,At=!1;if(b){const Dt=kt.get(b);if(Dt.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(F.FRAMEBUFFER,null),st=!1;else if(Dt.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(Dt.__hasExternalTextures)N.rebindTextures(b,kt.get(b.texture).__webglTexture,kt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Zt=b.depthTexture;if(Dt.__boundDepthTexture!==Zt){if(Zt!==null&&kt.has(Zt)&&(b.width!==Zt.image.width||b.height!==Zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const Qt=b.texture;(Qt.isData3DTexture||Qt.isDataArrayTexture||Qt.isCompressedArrayTexture)&&(At=!0);const ee=kt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(ee[Z])?K=ee[Z][at]:K=ee[Z],yt=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?K=kt.get(b).__webglMultisampledFramebuffer:Array.isArray(ee)?K=ee[at]:K=ee,H.copy(b.viewport),ot.copy(b.scissor),it=b.scissorTest}else H.copy(Ht).multiplyScalar(Q).floor(),ot.copy(ne).multiplyScalar(Q).floor(),it=Te;if(at!==0&&(K=xr),Rt.bindFramebuffer(F.FRAMEBUFFER,K)&&st&&Rt.drawBuffers(b,K),Rt.viewport(H),Rt.scissor(ot),Rt.setScissorTest(it),yt){const Dt=kt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Dt.__webglTexture,at)}else if(At){const Dt=kt.get(b.texture),Qt=Z;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Dt.__webglTexture,at,Qt)}else if(b!==null&&at!==0){const Dt=kt.get(b.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Dt.__webglTexture,at)}D=-1},this.readRenderTargetPixels=function(b,Z,at,st,K,yt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Et=Et[At]),Et){Rt.bindFramebuffer(F.FRAMEBUFFER,Et);try{const Dt=b.texture,Qt=Dt.format,ee=Dt.type;if(!Kt.textureFormatReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Kt.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=b.width-st&&at>=0&&at<=b.height-K&&F.readPixels(Z,at,st,K,le.convert(Qt),le.convert(ee),yt)}finally{const Dt=G!==null?kt.get(G).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,Dt)}}},this.readRenderTargetPixelsAsync=async function(b,Z,at,st,K,yt,At){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=kt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Et=Et[At]),Et)if(Z>=0&&Z<=b.width-st&&at>=0&&at<=b.height-K){Rt.bindFramebuffer(F.FRAMEBUFFER,Et);const Dt=b.texture,Qt=Dt.format,ee=Dt.type;if(!Kt.textureFormatReadable(Qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Kt.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Zt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Zt),F.bufferData(F.PIXEL_PACK_BUFFER,yt.byteLength,F.STREAM_READ),F.readPixels(Z,at,st,K,le.convert(Qt),le.convert(ee),0);const be=G!==null?kt.get(G).__webglFramebuffer:null;Rt.bindFramebuffer(F.FRAMEBUFFER,be);const De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await zE(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Zt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,yt),F.deleteBuffer(Zt),F.deleteSync(De),yt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,Z=null,at=0){const st=Math.pow(2,-at),K=Math.floor(b.image.width*st),yt=Math.floor(b.image.height*st),At=Z!==null?Z.x:0,Et=Z!==null?Z.y:0;N.setTexture2D(b,0),F.copyTexSubImage2D(F.TEXTURE_2D,at,0,0,At,Et,K,yt),Rt.unbindTexture()};const Fc=F.createFramebuffer(),Dl=F.createFramebuffer();this.copyTextureToTexture=function(b,Z,at=null,st=null,K=0,yt=null){yt===null&&(K!==0?(Cc("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),yt=K,K=0):yt=0);let At,Et,Dt,Qt,ee,Zt,be,De,Ye;const Ve=b.isCompressedTexture?b.mipmaps[yt]:b.image;if(at!==null)At=at.max.x-at.min.x,Et=at.max.y-at.min.y,Dt=at.isBox3?at.max.z-at.min.z:1,Qt=at.min.x,ee=at.min.y,Zt=at.isBox3?at.min.z:0;else{const mn=Math.pow(2,-K);At=Math.floor(Ve.width*mn),Et=Math.floor(Ve.height*mn),b.isDataArrayTexture?Dt=Ve.depth:b.isData3DTexture?Dt=Math.floor(Ve.depth*mn):Dt=1,Qt=0,ee=0,Zt=0}st!==null?(be=st.x,De=st.y,Ye=st.z):(be=0,De=0,Ye=0);const ge=le.convert(Z.format),Yt=le.convert(Z.type);let Je;Z.isData3DTexture?(N.setTexture3D(Z,0),Je=F.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(N.setTexture2DArray(Z,0),Je=F.TEXTURE_2D_ARRAY):(N.setTexture2D(Z,0),Je=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,Z.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,Z.unpackAlignment);const ye=F.getParameter(F.UNPACK_ROW_LENGTH),yn=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Ke=F.getParameter(F.UNPACK_SKIP_PIXELS),Pn=F.getParameter(F.UNPACK_SKIP_ROWS),Da=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ve.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ve.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qt),F.pixelStorei(F.UNPACK_SKIP_ROWS,ee),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);const Xe=b.isDataArrayTexture||b.isData3DTexture,ln=Z.isDataArrayTexture||Z.isData3DTexture;if(b.isDepthTexture){const mn=kt.get(b),bn=kt.get(Z),Rn=kt.get(mn.__renderTarget),es=kt.get(bn.__renderTarget);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,es.__webglFramebuffer);for(let ia=0;ia<Dt;ia++)Xe&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(b).__webglTexture,K,Zt+ia),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,kt.get(Z).__webglTexture,yt,Ye+ia)),F.blitFramebuffer(Qt,ee,At,Et,be,De,At,Et,F.DEPTH_BUFFER_BIT,F.NEAREST);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||kt.has(b)){const mn=kt.get(b),bn=kt.get(Z);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,Fc),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Dl);for(let Rn=0;Rn<Dt;Rn++)Xe?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,mn.__webglTexture,K,Zt+Rn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,mn.__webglTexture,K),ln?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,bn.__webglTexture,yt,Ye+Rn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,bn.__webglTexture,yt),K!==0?F.blitFramebuffer(Qt,ee,At,Et,be,De,At,Et,F.COLOR_BUFFER_BIT,F.NEAREST):ln?F.copyTexSubImage3D(Je,yt,be,De,Ye+Rn,Qt,ee,At,Et):F.copyTexSubImage2D(Je,yt,be,De,Qt,ee,At,Et);Rt.bindFramebuffer(F.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ln?b.isDataTexture||b.isData3DTexture?F.texSubImage3D(Je,yt,be,De,Ye,At,Et,Dt,ge,Yt,Ve.data):Z.isCompressedArrayTexture?F.compressedTexSubImage3D(Je,yt,be,De,Ye,At,Et,Dt,ge,Ve.data):F.texSubImage3D(Je,yt,be,De,Ye,At,Et,Dt,ge,Yt,Ve):b.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,yt,be,De,At,Et,ge,Yt,Ve.data):b.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,yt,be,De,Ve.width,Ve.height,ge,Ve.data):F.texSubImage2D(F.TEXTURE_2D,yt,be,De,At,Et,ge,Yt,Ve);F.pixelStorei(F.UNPACK_ROW_LENGTH,ye),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,yn),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ke),F.pixelStorei(F.UNPACK_SKIP_ROWS,Pn),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Da),yt===0&&Z.generateMipmaps&&F.generateMipmap(Je),Rt.unbindTexture()},this.copyTextureToTexture3D=function(b,Z,at=null,st=null,K=0){return Cc('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,Z,at,st,K)},this.initRenderTarget=function(b){kt.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),Rt.unbindTexture()},this.resetState=function(){I=0,z=0,G=null,Rt.reset(),Fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ba}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Ne._getDrawingBufferColorSpace(e),i.unpackColorSpace=Ne._getUnpackColorSpace()}}class iR{constructor(){xe(this,"down",new Set);xe(this,"pressed",new Set);xe(this,"onDown",e=>{if(e.ctrlKey||e.altKey||e.metaKey)return;const i=this.key(e);i&&(e.preventDefault(),this.down.has(i)||this.pressed.add(i),this.down.add(i))});xe(this,"onUp",e=>{const i=this.key(e);i&&this.down.delete(i)});xe(this,"onBlur",()=>{this.down.clear(),this.pressed.clear()});window.addEventListener("keydown",this.onDown),window.addEventListener("keyup",this.onUp),window.addEventListener("blur",this.onBlur)}key(e){return{KeyW:"w",KeyA:"a",KeyS:"s",KeyD:"d",KeyE:"e",KeyR:"r",Space:" ",ArrowUp:"arrowup",ArrowDown:"arrowdown",ArrowLeft:"arrowleft",ArrowRight:"arrowright"}[e.code]}held(...e){return e.some(i=>this.down.has(i))}once(e){return this.pressed.has(e)}frameEnd(){this.pressed.clear()}dispose(){window.removeEventListener("keydown",this.onDown),window.removeEventListener("keyup",this.onUp),window.removeEventListener("blur",this.onBlur)}}const Ta=(o,e,i)=>Math.max(e,Math.min(i,o)),Hn=(o,e)=>Math.hypot(o.x-e.x,o.z-e.z),eo=(o,e)=>Math.atan2(e.x-o.x,e.z-o.z),vc=(o,e)=>Math.atan2(Math.sin(e-o),Math.cos(e-o)),jd=(o,e,i)=>o<e?Math.min(e,o+i):Math.max(e,o-i);function Zd(o,e,i,s){const l=o-Ta(o,s.x-s.hx,s.x+s.hx),f=e-Ta(e,s.z-s.hz,s.z+s.hz);return l*l+f*f<i*i}function xc(o,e,i,s){const l=o-s.x,f=e-s.z,h=Math.cos(s.angle),d=Math.sin(s.angle),p=l*h-f*d,_=l*d+f*h,v=Math.max(Math.abs(p)-s.width/2,0),m=Math.max(Math.abs(_)-s.length/2,0);return v*v+m*m<i*i}function Ip(o,e=o.x,i=o.z,s=o.angle){const l=Math.cos(s),f=Math.sin(s);return[[-1,-1],[1,-1],[1,1],[-1,1]].map(([h,d])=>({x:e+h*o.width/2*l+d*o.length/2*f,z:i-h*o.width/2*f+d*o.length/2*l}))}function aR(o,e,i){const s=o.map(f=>f.x*i.x+f.z*i.z),l=e.map(f=>f.x*i.x+f.z*i.z);return Math.max(...s)>Math.min(...l)&&Math.max(...l)>Math.min(...s)}function Qx(o,e){for(const i of[o,e])for(let s=0;s<4;s++){const l={x:i[(s+1)%4].x-i[s].x,z:i[(s+1)%4].z-i[s].z};if(!aR(o,e,{x:-l.z,z:l.x}))return!0}return!1}function rR(o,e,i=o.x,s=o.z,l=o.angle){const f=Ip(o,i,s,l),h=[{x:e.x-e.hx,z:e.z-e.hz},{x:e.x+e.hx,z:e.z-e.hz},{x:e.x+e.hx,z:e.z+e.hz},{x:e.x-e.hx,z:e.z+e.hz}];return!Qx(f,h)}function sR(o,e,i=o.x,s=o.z,l=o.angle){return Math.hypot(i-e.x,s-e.z)>o.length+e.length?!1:!Qx(Ip(o,i,s,l),Ip(e))}const Sc={x:-31,z:-29},Sl={x:-24,z:-27},hr={x:-16,z:-27},yl={x:53,z:51},no=100,qe=(o,e=.83,i=0)=>new fr({color:o,roughness:e,metalness:i}),cx=qe(2239541),fx=qe(10134951),oR=qe(2506036),hx=qe(16046988);function dx(o,e,i=!1){const s=document.createElement("canvas");s.width=256,s.height=256;const l=s.getContext("2d"),f=new Ce(o);let h=e|0;const d=()=>(h=h*1664525+1013904223|0,(h>>>0)/4294967296);if(l.fillStyle=i?"#000000":`#${f.getHexString()}`,l.fillRect(0,0,256,256),!i){for(let v=0;v<2200;v++){const m=d()>.5?255:0,x=.018+d()*.035;l.fillStyle=`rgba(${m},${m},${m},${x})`,l.fillRect(d()*256,d()*256,1+d()*2,1+d()*2)}l.fillStyle="rgba(20,29,34,.16)";for(let v=0;v<256;v+=64)l.fillRect(0,v,256,2);for(let v=0;v<256;v+=64)l.fillRect(v,0,2,256);const _=l.createLinearGradient(0,0,0,256);_.addColorStop(0,"rgba(255,255,255,.07)"),_.addColorStop(.7,"rgba(0,0,0,0)"),_.addColorStop(1,"rgba(20,25,25,.14)"),l.fillStyle=_,l.fillRect(0,0,256,256)}for(let _=0;_<4;_++)for(let v=0;v<4;v++){const m=10+v*64,x=12+_*64,M=d()>.7;if(l.fillStyle=i?M?"#8aa59a":"#050708":"#263841",l.fillRect(m,x,43,38),!i){const T=l.createLinearGradient(m,x,m+43,x+38);T.addColorStop(0,M?"#b7c9bd":"#54717b"),T.addColorStop(.48,M?"#829a91":"#344e59"),T.addColorStop(.52,"#20333c"),T.addColorStop(1,"#49636c"),l.fillStyle=T,l.fillRect(m+3,x+3,37,32),l.fillStyle="rgba(13,24,29,.62)",l.fillRect(m+20,x+3,3,32),l.fillStyle="rgba(235,245,238,.13)",l.fillRect(m+4,x+4,13,2),l.fillStyle="rgba(16,22,24,.28)",l.fillRect(m,x+40,43,3)}}const p=new hT(s);return p.colorSpace=ei,p.wrapS=p.wrapT=Dc,p.magFilter=Oi,p.anisotropy=4,p}function lR(o){const e=Math.round((o.x+110)*31+(o.z+110)*17+o.height*13),i=dx(o.color,e),s=dx(o.color,e,!0);i.repeat.set(Math.max(1,o.hz/8),Math.max(1,o.height/16)),s.repeat.copy(i.repeat);const l=i.clone(),f=s.clone();l.repeat.set(Math.max(1,o.hx/8),Math.max(1,o.height/16)),l.needsUpdate=!0,f.repeat.copy(l.repeat),f.needsUpdate=!0;const h=(v,m)=>new fr({color:16777215,map:v,emissive:16768163,emissiveMap:m,emissiveIntensity:.28,roughness:.76,metalness:.03}),d=h(i,s),p=h(l,f),_=qe(2569274,.9);return[d,d,_,_,p,p]}function jt(o,e,i,s,l=0,f=0,h=0){const d=new tn(new ho(o,e,i),s);return d.position.set(l,f,h),d.castShadow=!0,d.receiveShadow=!0,d}function uR(o,e,i,s=0){const l=new tn(new Rl(o,e),i);return l.rotation.x=-Math.PI/2,l.position.y=s,l.receiveShadow=!0,l}function px(o,e,i){e.push(i);const s=new Wn;s.position.set(i.x,0,i.z);const l=jt(i.hx*2,i.height,i.hz*2,i.kind==="building"?lR(i):qe(i.color),0,i.height/2,0);if(s.add(l),i.kind==="building"){const f=qe(1516334,.78,.08),h=qe(5399402,.55,.35);s.add(jt(i.hx*2+.55,.55,i.hz*2+.55,f,0,i.height+.25,0));for(let _=4;_<i.height-2;_+=8)s.add(jt(i.hx*2+.18,.14,i.hz*2+.18,f,0,_,0));s.add(jt(2.8,2.8,.34,f,0,1.4,i.hz+.2)),s.add(jt(1.9,2.25,.08,qe(4678769,.22,.18),0,1.3,i.hz+.4)),s.add(jt(3.6,.18,1.15,f,0,2.95,i.hz+.48));const d=i.hx*.34,p=-i.hz*.18;s.add(jt(3.8,1.25,2.5,h,d,i.height+1.15,p)),s.add(jt(.65,2.1,.65,f,-i.hx*.35,i.height+1.55,i.hz*.2))}o.add(s)}function cR(o){o.background=new Ce(9021626),o.fog=new jp(9021626,105,235),o.add(new mT(15398143,3163194,2));const e=new vT(16771269,2.5);e.position.set(-32,75,-42),e.castShadow=!0,e.shadow.mapSize.set(2048,2048),e.shadow.camera.left=-110,e.shadow.camera.right=110,e.shadow.camera.top=110,e.shadow.camera.bottom=-110,e.shadow.bias=-25e-5,o.add(e),o.add(uR(210,210,oR,-.08));const i=[];for(const h of[-48,0,48]){const d=jt(20,.14,202,fx,h,.02,0),p=jt(202,.14,20,fx,0,.02,h);o.add(d,p),o.add(jt(12,.035,202,cx,h,.12,0),jt(202,.035,12,cx,0,.12,h));for(let _=-94;_<95;_+=11)[-48,0,48].some(v=>Math.abs(_-v)<10)||o.add(jt(.22,.04,4.4,hx,h,.15,_),jt(4.4,.04,.22,hx,_,.15,h))}o.add(jt(27,.14,27,qe(7831424),-24,.04,-24)),o.add(jt(11,.04,7,qe(10726049),-27,.14,-27));const s=[[-74,-74,11,10,24,6650761],[-24,-74,10,10,33,10059121],[24,-74,10,11,20,7573129],[74,-74,11,10,29,8225174],[-74,-24,11,11,28,10193525],[24,-24,10,10,38,7831448],[74,-24,11,11,23,9017482],[-74,24,11,10,20,7441299],[-24,24,11,11,27,10785916],[24,24,11,10,31,7700357],[74,24,11,11,34,7374480],[-74,74,11,11,34,8293266],[-24,74,10,11,23,10259068],[24,74,11,10,29,7835018],[74,74,11,11,37,9077138]];for(const[h,d,p,_,v,m]of s)px(o,i,{x:h,z:d,hx:p,hz:_,height:v,color:m,kind:"building"});[[-10,15,2.2,2.2],[-36,15,2,2],[14,65,2.8,2],[-70,2,2.2,2.2],[12,-65,2.2,2.2]].forEach(([h,d,p,_])=>px(o,i,{x:h,z:d,hx:p,hz:_,height:2,color:6187618,kind:"obstacle"}));const l=qe(3492436),f=new fr({color:16770464,emissive:16761690,emissiveIntensity:1.5});for(const h of[-58,-10,38,58])for(const d of[-58,-10,38,58])h===-10&&d===-10||o.add(jt(.28,6.6,.28,l,h,3.3,d),jt(1.5,.28,.7,f,h+.65,6.58,d));return Kd(o,Sl,4842176,1.8),Kd(o,yl,16763235,3.8),Kd(o,hr,6739455,2.3),i}function Kd(o,e,i,s){const l=new Oc({color:i,transparent:!0,opacity:.8,depthWrite:!1}),f=new tn(new Pc(s,.16,8,50),l);f.rotation.x=Math.PI/2,f.position.set(e.x,.27,e.z),o.add(f);const h=new tn(new Jr(s*.72,s*.72,10,24,1,!0),new Oc({color:i,transparent:!0,opacity:.075,side:Ki,depthWrite:!1}));h.position.set(e.x,5.2,e.z),o.add(h),f.userData.marker=!0,f.userData.baseY=.27}function fR(o,e,i){o.traverse(s=>{if(!s.userData.marker)return;const l=s.position.x,f=s.position.z,h=i==="start"&&l===Sl.x&&f===Sl.z||i==="car"&&l===hr.x&&f===hr.z||i==="delivery"&&l===yl.x&&f===yl.z;s.visible=h,s.position.y=s.userData.baseY+Math.sin(e*2.8)*.13;const d=o.children.find(p=>p!==s&&p.type==="Mesh"&&Math.abs(p.position.x-l)<.01&&Math.abs(p.position.z-f)<.01&&p.position.y>4);d&&(d.visible=h)})}const Jx=new WeakMap;function hR(o,e=!1){const i=new Wn,s=qe(o,.42,.38),l=qe(1581353,.3,.35),f=qe(856340,.92),h=qe(10266540,.25,.75),d=new fr({color:2704983,roughness:.18,metalness:.18,transparent:!0,opacity:.82}),p=new fr({color:16773572,emissive:16765803,emissiveIntensity:.65,roughness:.2}),_=new fr({color:14102328,emissive:11146784,emissiveIntensity:.55,roughness:.28});i.add(jt(2.2,.58,4.1,s,0,.72,0),jt(2.05,.18,1.22,s,0,1.08,1.32),jt(2.03,.18,.92,s,0,1.05,-1.58)),i.add(jt(2.12,.14,3,s,0,1.02,-.05),jt(2.28,.18,.22,l,0,.48,2.08),jt(2.28,.18,.22,l,0,.48,-2.08)),i.add(jt(2.22,.15,2.65,l,0,.42,-.08));for(const x of[-1,1])i.add(jt(.12,.23,2.85,s,x*1.08,.65,-.03)),i.add(jt(.13,.12,1.3,l,x*1.12,.35,-.02));i.add(jt(1.78,.62,1.86,d,0,1.39,-.2),jt(1.72,.1,1.72,s,0,1.74,-.24)),i.add(jt(1.86,.67,.12,d,0,1.39,.77),jt(1.86,.66,.12,d,0,1.39,-1.17));for(const x of[-1,1])i.add(jt(.1,.58,.72,d,x*.91,1.39,.34),jt(.1,.58,.7,d,x*.91,1.39,-.75)),i.add(jt(.11,.68,.1,l,x*.92,1.4,-.2)),i.add(jt(.32,.16,.24,l,x*1.18,1.28,.54)),i.add(jt(.06,.22,1.45,l,x*1.14,.91,-.25));i.add(jt(.09,.18,.82,l,0,1.16,-.28)),i.add(jt(.07,.46,.07,l,-.42,1.42,.48));const v=new tn(new Pc(.19,.035,7,16),l);v.rotation.x=Math.PI/2,v.position.set(-.42,1.45,.5),i.add(v);for(const x of[-.68,.68])i.add(jt(.5,.22,.09,p,x,.82,2.1),jt(.46,.24,.09,_,x,.82,-2.1));i.add(jt(.68,.1,.1,l,0,.72,2.12),jt(.56,.1,.1,l,0,.7,-2.12));const m=[];for(const x of[-1.3,1.3])for(const M of[-1.13,1.13]){const T=new Wn;T.position.set(M,.45,x);const C=new tn(new Jr(.44,.44,.27,20),f);C.rotation.z=Math.PI/2,C.castShadow=!0,T.add(C);const y=new tn(new Jr(.23,.23,.285,12),h);y.rotation.z=Math.PI/2,y.castShadow=!0,T.add(y);const S=new tn(new Jr(.075,.075,.3,12),l);S.rotation.z=Math.PI/2,T.add(S),i.add(T),x>0&&m.push(T)}return e&&(i.add(jt(2.08,.22,.2,qe(1518408,.35,.45),0,.88,.05)),i.add(jt(.56,.2,.48,new fr({color:16725836,emissive:16720957,emissiveIntensity:.9}),-.4,1.9,0),jt(.56,.2,.48,new fr({color:3967999,emissive:1729791,emissiveIntensity:.9}),.4,1.9,0))),Jx.set(i,{frontWheels:m,steering:0}),i}function yc(o,e){const i=Jx.get(o);if(i){i.steering+=(e-i.steering)*.22;for(const s of i.frontWheels)s.rotation.y=i.steering}}const $x=new WeakMap;function mx(o,e=!1,i=0){const s=new Wn,l=new Wn;s.add(l);const f=qe(o),h=qe(e?13959155:14210249),d=qe([15251866,13143406,15779751,11105880][i%4]),p=qe(e?2308430:3162436),_=qe(e?1582383:3158071),v=qe([3418665,2369323,7031093,4929581][i%4]),m=qe(2107179),x=qe(9131340);l.add(jt(.72,.88,.43,f,0,1.49,0),jt(.66,.25,.41,p,0,.99,0)),l.add(jt(.36,.09,.25,h,0,1.96,.02));const M=new tn(new ur(.31,14,10),d);M.position.set(0,2.23,0),M.castShadow=!0,l.add(M);const T=new tn(new ur(.32,14,8,0,Math.PI*2,0,Math.PI/2),v);T.position.set(0,2.29,0),T.castShadow=!0,l.add(T),l.add(jt(.48,.09,.13,v,0,2.46,.22));for(const O of[-1,1]){const U=new tn(new ur(.035,8,6),m);U.position.set(O*.115,2.25,.287),l.add(U),l.add(jt(.105,.025,.025,v,O*.115,2.34,.292));const X=new tn(new ur(.07,8,6),d);X.position.set(O*.305,2.22,0),l.add(X)}const C=new tn(new ur(.045,8,6),d);C.position.set(0,2.15,.315),l.add(C),l.add(jt(.16,.025,.025,x,0,2.055,.292));const y=[new Wn,new Wn],S=[new Wn,new Wn],P=[new Wn,new Wn];for(const O of[0,1]){const U=O===0?-1:1,X=y[O],I=S[O],z=P[O];X.position.set(U*.19,1.04,0),X.add(jt(.27,.48,.3,p,0,-.24,0)),I.position.y=-.46,I.add(jt(.25,.46,.27,p,0,-.23,0)),I.add(jt(.3,.17,.43,_,0,-.5,.085)),X.add(I),l.add(X),z.position.set(U*.46,1.87,0),z.add(jt(.24,.46,.29,f,0,-.23,0)),z.add(jt(.19,.29,.22,d,0,-.59,0));const G=new tn(new ur(.12,9,7),d);G.position.y=-.78,G.castShadow=!0,z.add(G),l.add(z)}if(e){l.add(jt(.54,.65,.19,qe(2839393),0,1.48,-.34));const O=new tn(new Kp(.32,.5,4),qe(16767602));O.rotation.x=Math.PI/2,O.position.set(0,2.85,.35),s.add(O)}return $x.set(s,{legs:y,knees:S,arms:P,body:l,phase:0,stride:0}),s}function dl(o,e,i){const s=$x.get(o);if(!s)return;const l=Math.min(i/2.4,1);s.stride+=(l-s.stride)*Math.min(1,e*10),i>.05&&(s.phase+=(4+i*1.7)*e);const f=Math.sin(s.phase)*s.stride;s.legs[0].rotation.x=f*.65,s.legs[1].rotation.x=-f*.65,s.knees[0].rotation.x=Math.max(0,-f)*.52,s.knees[1].rotation.x=Math.max(0,f)*.52,s.arms[0].rotation.x=-f*.5,s.arms[1].rotation.x=f*.5,s.body.position.y=s.stride*(.025+Math.abs(Math.cos(s.phase))*.035)}function pl(o){o.mesh.position.set(o.x,.14,o.z),o.mesh.rotation.y=o.angle}function gx(o){o.mesh.position.set(o.x,.14,o.z),o.mesh.rotation.y=o.angle}const dR=[[{x:-36,z:-37},{x:-12,z:-37},{x:-12,z:-12},{x:-36,z:-12}],[{x:12,z:-36},{x:36,z:-36},{x:36,z:-12},{x:12,z:-12}],[{x:-36,z:12},{x:-12,z:12},{x:-12,z:36},{x:-36,z:36}],[{x:12,z:12},{x:36,z:12},{x:36,z:36},{x:12,z:36}],[{x:60,z:12},{x:84,z:12},{x:84,z:36},{x:60,z:36}],[{x:-84,z:12},{x:-60,z:12},{x:-60,z:36},{x:-84,z:36}],[{x:60,z:-36},{x:84,z:-36},{x:84,z:-12},{x:60,z:-12}]],pR=[[{x:-50,z:-50},{x:2,z:-50},{x:2,z:2},{x:-50,z:2}],[{x:50,z:-50},{x:50,z:2},{x:2,z:2},{x:2,z:-50}],[{x:-50,z:2},{x:2,z:2},{x:2,z:50},{x:-50,z:50}],[{x:2,z:50},{x:50,z:50},{x:50,z:2},{x:2,z:2}],[{x:-50,z:50},{x:50,z:50},{x:50,z:-50},{x:-50,z:-50}]];class mR{constructor(e,i){xe(this,"scene",new uT);xe(this,"renderer");xe(this,"camera",new Ei(57,1,.1,320));xe(this,"cameraYaw",Math.PI);xe(this,"cameraPitch",.57);xe(this,"draggingCamera",!1);xe(this,"mousePosition",null);xe(this,"input",new iR);xe(this,"boxes");xe(this,"vehicles",[]);xe(this,"pedestrians",[]);xe(this,"playerMesh",mx(5692612,!0));xe(this,"player",{...Sc});xe(this,"playerAngle",0);xe(this,"currentCar",null);xe(this,"mission","start");xe(this,"wanted",!1);xe(this,"wantedTimer",0);xe(this,"police",null);xe(this,"toast","");xe(this,"toastTimer",0);xe(this,"elapsed",0);xe(this,"lastTime",0);xe(this,"frame",0);xe(this,"raf",0);xe(this,"onResize",()=>this.resize());xe(this,"onPointerDown",e=>{e.button===0&&(this.renderer.domElement.focus(),this.draggingCamera=!0,this.mousePosition={x:e.clientX,y:e.clientY},Promise.resolve(this.renderer.domElement.requestPointerLock()).catch(()=>{}))});xe(this,"onPointerUp",()=>{this.draggingCamera=!1});xe(this,"onMouseLeave",()=>{this.draggingCamera||(this.mousePosition=null)});xe(this,"onMouseMove",e=>{const i=document.pointerLockElement===this.renderer.domElement;if(!i&&!this.draggingCamera&&e.target!==this.renderer.domElement){this.mousePosition=null;return}const s=i?e.movementX:this.mousePosition?e.clientX-this.mousePosition.x:0,l=i?e.movementY:this.mousePosition?e.clientY-this.mousePosition.y:0;this.mousePosition=i?null:{x:e.clientX,y:e.clientY},this.cameraYaw+=s*.0025,this.cameraPitch=Ta(this.cameraPitch-l*.0025,.08,1.35)});xe(this,"tick",e=>{const i=Math.min((e-this.lastTime)/1e3,.035);this.lastTime=e,this.elapsed+=i,this.input.once("r")&&this.restart(),this.currentCar?this.updatePlayerCar(i):this.updateFoot(i),this.updateTraffic(i),this.updatePedestrians(i),this.updatePolice(i),this.updateMission(),this.updateCamera(i),fR(this.scene,this.elapsed,this.mission),this.toastTimer=Math.max(0,this.toastTimer-i),++this.frame%6===0&&this.emitHUD(),this.input.frameEnd(),this.renderer.render(this.scene,this.camera),this.raf=requestAnimationFrame(this.tick)});this.host=e,this.onHUD=i,this.renderer=new nR({antialias:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vx,this.renderer.outputColorSpace=ei,this.renderer.toneMapping=Sx,this.renderer.toneMappingExposure=1.55,e.appendChild(this.renderer.domElement),this.renderer.domElement.tabIndex=0,this.renderer.domElement.addEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.addEventListener("mouseleave",this.onMouseLeave),window.addEventListener("pointerup",this.onPointerUp),window.addEventListener("mousemove",this.onMouseMove),this.boxes=cR(this.scene),this.scene.add(this.playerMesh),this.createEntities(),this.resize(),window.addEventListener("resize",this.onResize),this.camera.position.set(Sc.x,15,Sc.z+21),this.lastTime=performance.now(),this.raf=requestAnimationFrame(this.tick)}addVehicle(e,i,s,l,f,h,d){const p=hR(f,h==="police");this.scene.add(p);const _={id:e,x:i,z:s,angle:l,speed:0,steering:0,length:4.15,width:2.25,color:f,kind:h,mesh:p,route:d,waypoint:d?1:void 0,blocked:0};return this.vehicles.push(_),pl(_),_}createEntities(){this.addVehicle("mission",hr.x,hr.z,0,16102472,"parked"),this.addVehicle("park-1",-55,-25,0,6856104,"parked"),this.addVehicle("park-2",24,7,Math.PI/2,12093817,"parked"),this.addVehicle("park-3",58,69,Math.PI,10726003,"parked"),pR.forEach((e,i)=>{const s=e[0],l=e[1];this.addVehicle(`traffic-${i}`,s.x,s.z,eo(s,l),[13002855,9337776,7386536,13083498,7573937][i],"traffic",e)}),dR.forEach((e,i)=>{const s=i%2===0?0:1,l=e[s],f=mx([15245425,8762827,13871480,11570117,10471288,14516105,9028284][i],!1,i);this.scene.add(f);const h={x:l.x,z:l.z,angle:0,speed:1.2+i%3*.23,mesh:f,route:e,waypoint:(s+1)%e.length,wait:i*.3,flee:0};this.pedestrians.push(h),gx(h)})}resize(){const e=this.host.clientWidth||window.innerWidth,i=this.host.clientHeight||window.innerHeight;this.renderer.setSize(e,i,!1),this.camera.aspect=e/i,this.camera.updateProjectionMatrix()}pedestrianBlocked(e,i,s){return Math.abs(e)>no||Math.abs(i)>no||this.boxes.some(l=>Zd(e,i,.43,l))||this.vehicles.some(l=>l!==this.currentCar&&xc(e,i,.43,l))||this.currentCar!==null&&xc(e,i,.43,this.currentCar)||this.pedestrians.some(l=>l!==s&&Hn({x:e,z:i},l)<.65)}footBlocked(e,i,s){return Math.abs(e)>no||Math.abs(i)>no||this.boxes.some(l=>Zd(e,i,.48,l))||this.vehicles.some(l=>l!==s&&xc(e,i,.48,l))}carBlocked(e,i,s,l=e.angle){return Math.abs(i)>no-2||Math.abs(s)>no-2||this.boxes.some(f=>rR(e,f,i,s,l))?"solid":this.vehicles.find(f=>f!==e&&sR(e,f,i,s,l))||null}setWanted(e){this.wanted||(this.wanted=!0,this.say(e),this.spawnPolice()),this.wantedTimer=0}spawnPolice(){if(this.police){this.police.mesh.visible=!0;return}const e=this.currentCar||this.player,s=[{x:e.x-25,z:e.z},{x:e.x+25,z:e.z},{x:e.x,z:e.z-25},{x:e.x,z:e.z+25},{x:-48,z:48}].find(l=>Math.abs(l.x)<90&&Math.abs(l.z)<90&&!this.boxes.some(f=>Zd(l.x,l.z,3,f))&&!this.vehicles.some(f=>Hn(l,f)<5))||{x:-48,z:48};this.police=this.addVehicle("police",s.x,s.z,eo(s,e),15790834,"police")}say(e){this.toast=e,this.toastTimer=3.4}restart(){this.currentCar&&(this.currentCar.speed=0,this.currentCar=null),this.player={...Sc},this.playerAngle=0,this.playerMesh.visible=!0,dl(this.playerMesh,1,0);const e=this.vehicles.find(i=>i.id==="mission");e.x=hr.x,e.z=hr.z,e.angle=0,e.speed=0,e.steering=0,pl(e),yc(e.mesh,0),this.mission="start",this.wanted=!1,this.wantedTimer=0,this.police&&(this.scene.remove(this.police.mesh),this.vehicles=this.vehicles.filter(i=>i!==this.police),this.police=null),this.say("Mission restarted")}enterCar(e){this.currentCar=e,this.playerMesh.visible=!1,this.say(e.id==="mission"?"Delivery car acquired":"Vehicle entered"),this.mission==="car"&&e.id==="mission"&&(this.mission="delivery")}exitCar(e=!1){const i=this.currentCar;if(!i||!e&&Math.abs(i.speed)>2.1){e||this.say("Slow down to exit");return}const s=Math.cos(i.angle),l=Math.sin(i.angle),h=[{x:s*3,z:-l*3},{x:-s*3,z:l*3},{x:-l*3,z:-s*3},{x:l*3,z:s*3},{x:0,z:0}].map(d=>({x:i.x+d.x,z:i.z+d.z})).find(d=>!this.footBlocked(d.x,d.z,i)&&!xc(d.x,d.z,.48,i));if(!h){e||this.say("No clear space to exit");return}this.player=h,this.playerAngle=i.angle,this.currentCar=null,this.playerMesh.visible=!0,i.speed=0}updateFoot(e){let i=0,s=0;this.input.held("w","arrowup")&&(s-=1),this.input.held("s","arrowdown")&&(s+=1),this.input.held("a","arrowleft")&&(i-=1),this.input.held("d","arrowright")&&(i+=1);const l=Math.hypot(i,s),f=this.player.x,h=this.player.z;if(l>0){i/=l,s/=l,this.playerAngle=Math.atan2(i,s);const d=e*5.6;this.footBlocked(this.player.x+i*d,this.player.z)||(this.player.x+=i*d),this.footBlocked(this.player.x,this.player.z+s*d)||(this.player.z+=s*d)}if(this.input.once("e")){const d=this.vehicles.filter(p=>p.kind==="parked"&&Math.abs(p.speed)<.5&&Hn(p,this.player)<3.9).sort((p,_)=>Hn(p,this.player)-Hn(_,this.player))[0];d&&this.enterCar(d)}this.playerMesh.position.set(this.player.x,.14,this.player.z),this.playerMesh.rotation.y=this.playerAngle,dl(this.playerMesh,e,e>0?Math.hypot(this.player.x-f,this.player.z-h)/e:0)}updatePlayerCar(e){const i=this.currentCar,s=this.input.held("w","arrowup")?1:this.input.held("s","arrowdown")?-1:0,l=(this.input.held("d","arrowright")?1:0)-(this.input.held("a","arrowleft")?1:0);i.steering=l*.5;const f=s>0?12:s<0?-16:0;i.speed=Ta(i.speed+f*e,-7,19),s===0&&(i.speed=jd(i.speed,0,(this.input.held(" ")?22:5.4)*e)),this.input.held(" ")&&(i.speed=jd(i.speed,0,22*e));const h=l*1.55*Math.min(Math.abs(i.speed)/7,1)*Math.sign(i.speed)*e,d=i.angle+h,p=i.x+Math.sin(d)*i.speed*e,_=i.z+Math.cos(d)*i.speed*e,v=this.carBlocked(i,p,_,d);v?(Math.abs(i.speed)>3.6&&(this.setWanted(v==="solid"?"Property damage reported":"Traffic collision reported"),v!=="solid"&&v.kind==="police"&&this.setWanted("Police vehicle struck")),i.speed*=-.18,this.carBlocked(i,i.x,i.z,d)||(i.angle=d)):(i.x=p,i.z=_,i.angle=d);for(const m of this.pedestrians)Hn(i,m)<2&&Math.abs(i.speed)>2.5&&(m.flee=4,this.setWanted("Pedestrian endangered"));pl(i),yc(i.mesh,i.steering),this.input.once("e")&&this.exitCar()}updateTraffic(e){for(const i of this.vehicles){if(i.kind!=="traffic"||!i.route)continue;const s=i.route[i.waypoint];Hn(i,s)<3&&(i.waypoint=(i.waypoint+1)%i.route.length);const l=i.route[i.waypoint],f=eo(i,l),h=Ta(vc(i.angle,f),-1.5*e,1.5*e);i.steering=Ta(h/Math.max(e,.001)*.34,-.5,.5);const d=i.angle+h,p=this.carBlocked(i,i.x+Math.sin(d)*3.5,i.z+Math.cos(d)*3.5,d),_=p?0:7.5+Number(i.id.slice(-1))%3;i.speed=jd(i.speed,_,(p?17:5)*e);const v=i.x+Math.sin(d)*i.speed*e,m=i.z+Math.cos(d)*i.speed*e;this.carBlocked(i,v,m,d)?(i.speed=0,i.blocked=(i.blocked||0)+e,i.blocked>5&&(i.waypoint=(i.waypoint+1)%i.route.length,i.blocked=0)):(i.x=v,i.z=m,i.angle=d,i.blocked=0),pl(i),yc(i.mesh,0)}}updatePedestrians(e){for(const i of this.pedestrians){if(i.wait>0){i.wait-=e,dl(i.mesh,e,0);continue}const s=this.currentCar&&Hn(i,this.currentCar)<7&&Math.abs(this.currentCar.speed)>5?this.currentCar:null;s&&(i.flee=Math.max(i.flee,2));const l=i.route[i.waypoint];if(Hn(i,l)<1.2){i.waypoint=(i.waypoint+1)%i.route.length,i.wait=.3+Math.random()*.9,dl(i.mesh,e,0);continue}const f=i.flee>0&&s?eo(s,i):eo(i,l);i.angle+=Ta(vc(i.angle,f),-4*e,4*e);const h=(i.flee>0?3:i.speed)*e,d=i.x+Math.sin(i.angle)*h,p=i.z+Math.cos(i.angle)*h,_=!this.pedestrianBlocked(d,p,i);_?(i.x=d,i.z=p):(i.wait=.25+Math.random()*.5,i.waypoint=(i.waypoint+1)%i.route.length),i.flee=Math.max(0,i.flee-e),gx(i),dl(i.mesh,e,_&&e>0?h/e:0)}}updatePolice(e){if(!this.wanted||!this.police)return;const i=this.police,s=this.currentCar||this.player,l=Hn(i,s);if(l>27?this.wantedTimer+=e:this.wantedTimer=Math.max(0,this.wantedTimer-e*.8),this.wantedTimer>14){this.wanted=!1,this.wantedTimer=0,this.say("You escaped the patrol"),this.scene.remove(i.mesh),this.vehicles=this.vehicles.filter(d=>d!==i),this.police=null;return}const f=eo(i,s);let h=!1;for(const d of[0,.5,-.5,1,-1]){const p=f+d,_=i.angle+Ta(vc(i.angle,p),-2.1*e,2.1*e),v=10.8,m=i.x+Math.sin(_)*v*e,x=i.z+Math.cos(_)*v*e;if(!this.carBlocked(i,m,x,_)){i.x=m,i.z=x,i.angle=_,i.speed=v,i.steering=Ta(vc(i.angle,p)*.9,-.5,.5),h=!0;break}}h||(i.speed=0,i.angle+=e*1.3),pl(i),yc(i.mesh,0),l<3.5&&this.currentCar&&Math.abs(this.currentCar.speed)<1.3&&(this.wanted=!1,this.wantedTimer=0,this.say("Pulled over — pursuit ended"),this.scene.remove(i.mesh),this.vehicles=this.vehicles.filter(d=>d!==i),this.police=null)}updateMission(){var i;const e=this.currentCar||this.player;this.mission==="start"&&!this.currentCar&&Hn(this.player,Sl)<2.6&&(this.mission="car",this.say("Find the amber car")),this.mission==="delivery"&&((i=this.currentCar)==null?void 0:i.id)==="mission"&&Hn(e,yl)<5.5&&(this.mission="success",this.say("Delivery complete")),e.x>43&&e.x<65&&e.z<-42&&e.z>-63&&!this.wanted&&this.setWanted("Restricted service yard entered")}updateCamera(e){const i=this.currentCar||this.player,s=this.currentCar?17.5:21.5,l=s*Math.cos(this.cameraPitch),f=new nt(i.x-Math.sin(this.cameraYaw)*l,1.8+s*Math.sin(this.cameraPitch),i.z-Math.cos(this.cameraYaw)*l),h=1-Math.exp(-e*3.4);this.camera.position.lerp(f,h),this.camera.lookAt(i.x,1.8,i.z)}emitHUD(){const e=this.currentCar||this.player,i=this.vehicles.filter(f=>f.kind==="parked"&&Hn(f,this.player)<3.9).sort((f,h)=>Hn(f,this.player)-Hn(h,this.player))[0],s=this.mission==="start"?"Go to the teal marker in the plaza":this.mission==="car"?"Enter the amber delivery car":this.mission==="delivery"?"Drive the delivery car to the gold marker":"Delivery complete — press R to replay",l=this.mission==="start"?Sl:this.mission==="car"?hr:yl;this.onHUD({mode:this.currentCar?"DRIVING":"ON FOOT",speed:this.currentCar?Math.round(Math.abs(this.currentCar.speed)*3.6):0,objective:s,mission:this.mission,wanted:this.wanted,wantedTime:this.wantedTimer,hint:this.currentCar?Math.abs(this.currentCar.speed)<2.1?"E · exit vehicle":"Slow down to exit":i?"E · enter "+(i.id==="mission"?"delivery car":"car"):"",distance:this.mission==="success"?0:Math.round(Hn(e,l)),toast:this.toastTimer>0?this.toast:""})}dispose(){cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),window.removeEventListener("pointerup",this.onPointerUp),window.removeEventListener("mousemove",this.onMouseMove),this.renderer.domElement.removeEventListener("pointerdown",this.onPointerDown),this.renderer.domElement.removeEventListener("mouseleave",this.onMouseLeave),document.pointerLockElement===this.renderer.domElement&&document.exitPointerLock(),this.input.dispose(),this.renderer.dispose(),this.host.removeChild(this.renderer.domElement)}}const gR={mode:"ON FOOT",speed:0,objective:"Go to the teal marker in the plaza",mission:"start",wanted:!1,wantedTime:0,hint:"",distance:0,toast:""};function _R(){const o=Mc.useRef(null),[e,i]=Mc.useState(gR);return Mc.useEffect(()=>{if(!o.current)return;const s=new mR(o.current,i);return()=>s.dispose()},[]),ie.jsxs("div",{className:"game-shell",children:[ie.jsx("div",{ref:o,className:"viewport","aria-label":"Real-time 3D city game"}),ie.jsx("div",{className:"vignette"}),ie.jsxs("header",{className:"brand",children:[ie.jsx("span",{className:"brand-icon",children:"C"}),ie.jsxs("div",{children:[ie.jsx("strong",{children:"CROSSROADS"}),ie.jsx("small",{children:"CITY RUN / FREE ROAM"})]})]}),ie.jsxs("div",{className:"mission-card",children:[ie.jsxs("div",{className:"eyebrow",children:[ie.jsx("span",{className:"pulse"})," MISSION 01 ",ie.jsx("span",{className:"mission-counter",children:e.mission==="success"?"COMPLETE":e.mission==="start"?"01 / 03":e.mission==="car"?"02 / 03":"03 / 03"})]}),ie.jsx("div",{className:"objective",children:e.objective}),e.mission!=="success"&&ie.jsxs("div",{className:"distance",children:["◆  ",e.distance," m to objective"]}),e.mission==="success"&&ie.jsx("div",{className:"distance success",children:"✓  Delivery complete"})]}),ie.jsxs("div",{className:"status-card",children:[ie.jsxs("div",{className:"status-line",children:[ie.jsx("span",{children:"STATUS"}),ie.jsx("strong",{children:e.mode})]}),ie.jsxs("div",{className:"status-line",children:[ie.jsx("span",{children:"SPEED"}),ie.jsx("strong",{children:e.mode==="DRIVING"?`${e.speed} km/h`:"—"})]}),ie.jsxs("div",{className:"status-line wanted "+(e.wanted?"active":""),children:[ie.jsx("span",{children:"POLICE"}),ie.jsx("strong",{children:e.wanted?"● WANTED":"○ CLEAR"})]}),e.wanted&&ie.jsx("div",{className:"wanted-track",children:ie.jsx("div",{style:{width:`${Math.min(100,e.wantedTime/14*100)}%`}})})]}),e.hint&&ie.jsxs("div",{className:"interaction",children:[ie.jsx("kbd",{children:"E"}),ie.jsx("span",{children:e.hint.split(" · ")[1]})]}),e.toast&&ie.jsx("div",{className:"toast",children:e.toast}),ie.jsxs("div",{className:"controls",children:[ie.jsxs("span",{children:[ie.jsx("kbd",{children:"W"}),ie.jsx("kbd",{children:"A"}),ie.jsx("kbd",{children:"S"}),ie.jsx("kbd",{children:"D"})," MOVE / DRIVE"]}),ie.jsxs("span",{children:[ie.jsx("kbd",{children:"E"})," ENTER / EXIT"]}),ie.jsxs("span",{children:[ie.jsx("kbd",{children:"SPACE"})," BRAKE"]}),ie.jsxs("span",{children:[ie.jsx("kbd",{children:"R"})," REPLAY"]}),ie.jsx("span",{children:"MOUSE LOOK · CLICK GAME · ESC RELEASE"})]}),ie.jsx("div",{className:"corner-mark",children:"✦  EXPLORE THE CITY"})]})}WM.createRoot(document.getElementById("root")).render(ie.jsx(HM.StrictMode,{children:ie.jsx(_R,{})}));
