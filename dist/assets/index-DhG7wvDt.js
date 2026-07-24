function lh(i,o){for(var s=0;s<o.length;s++){const u=o[s];if(typeof u!="string"&&!Array.isArray(u)){for(const c in u)if(c!=="default"&&!(c in i)){const f=Object.getOwnPropertyDescriptor(u,c);f&&Object.defineProperty(i,c,f.get?f:{enumerable:!0,get:()=>u[c]})}}}return Object.freeze(Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}))}(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))u(c);new MutationObserver(c=>{for(const f of c)if(f.type==="childList")for(const g of f.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&u(g)}).observe(document,{childList:!0,subtree:!0});function s(c){const f={};return c.integrity&&(f.integrity=c.integrity),c.referrerPolicy&&(f.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?f.credentials="include":c.crossOrigin==="anonymous"?f.credentials="omit":f.credentials="same-origin",f}function u(c){if(c.ep)return;c.ep=!0;const f=s(c);fetch(c.href,f)}})();function sh(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Fs={exports:{}},ra={},zs={exports:{}},Fe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tp;function dh(){if(Tp)return Fe;Tp=1;var i=Symbol.for("react.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),f=Symbol.for("react.provider"),g=Symbol.for("react.context"),x=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),v=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),b=Symbol.iterator;function z(F){return F===null||typeof F!="object"?null:(F=b&&F[b]||F["@@iterator"],typeof F=="function"?F:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,B={};function _(F,P,fe){this.props=F,this.context=P,this.refs=B,this.updater=fe||E}_.prototype.isReactComponent={},_.prototype.setState=function(F,P){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,P,"setState")},_.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function Q(){}Q.prototype=_.prototype;function H(F,P,fe){this.props=F,this.context=P,this.refs=B,this.updater=fe||E}var K=H.prototype=new Q;K.constructor=H,D(K,_.prototype),K.isPureReactComponent=!0;var ge=Array.isArray,me=Object.prototype.hasOwnProperty,Ee={current:null},M={key:!0,ref:!0,__self:!0,__source:!0};function de(F,P,fe){var xe,he={},ke=null,Be=null;if(P!=null)for(xe in P.ref!==void 0&&(Be=P.ref),P.key!==void 0&&(ke=""+P.key),P)me.call(P,xe)&&!M.hasOwnProperty(xe)&&(he[xe]=P[xe]);var Ae=arguments.length-2;if(Ae===1)he.children=fe;else if(1<Ae){for(var Ve=Array(Ae),wt=0;wt<Ae;wt++)Ve[wt]=arguments[wt+2];he.children=Ve}if(F&&F.defaultProps)for(xe in Ae=F.defaultProps,Ae)he[xe]===void 0&&(he[xe]=Ae[xe]);return{$$typeof:i,type:F,key:ke,ref:Be,props:he,_owner:Ee.current}}function ve(F,P){return{$$typeof:i,type:F.type,key:P,ref:F.ref,props:F.props,_owner:F._owner}}function Se(F){return typeof F=="object"&&F!==null&&F.$$typeof===i}function Ne(F){var P={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(fe){return P[fe]})}var Pe=/\/+/g;function Ge(F,P){return typeof F=="object"&&F!==null&&F.key!=null?Ne(""+F.key):P.toString(36)}function Me(F,P,fe,xe,he){var ke=typeof F;(ke==="undefined"||ke==="boolean")&&(F=null);var Be=!1;if(F===null)Be=!0;else switch(ke){case"string":case"number":Be=!0;break;case"object":switch(F.$$typeof){case i:case o:Be=!0}}if(Be)return Be=F,he=he(Be),F=xe===""?"."+Ge(Be,0):xe,ge(he)?(fe="",F!=null&&(fe=F.replace(Pe,"$&/")+"/"),Me(he,P,fe,"",function(wt){return wt})):he!=null&&(Se(he)&&(he=ve(he,fe+(!he.key||Be&&Be.key===he.key?"":(""+he.key).replace(Pe,"$&/")+"/")+F)),P.push(he)),1;if(Be=0,xe=xe===""?".":xe+":",ge(F))for(var Ae=0;Ae<F.length;Ae++){ke=F[Ae];var Ve=xe+Ge(ke,Ae);Be+=Me(ke,P,fe,Ve,he)}else if(Ve=z(F),typeof Ve=="function")for(F=Ve.call(F),Ae=0;!(ke=F.next()).done;)ke=ke.value,Ve=xe+Ge(ke,Ae++),Be+=Me(ke,P,fe,Ve,he);else if(ke==="object")throw P=String(F),Error("Objects are not valid as a React child (found: "+(P==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":P)+"). If you meant to render a collection of children, use an array instead.");return Be}function qe(F,P,fe){if(F==null)return F;var xe=[],he=0;return Me(F,xe,"","",function(ke){return P.call(fe,ke,he++)}),xe}function Ce(F){if(F._status===-1){var P=F._result;P=P(),P.then(function(fe){(F._status===0||F._status===-1)&&(F._status=1,F._result=fe)},function(fe){(F._status===0||F._status===-1)&&(F._status=2,F._result=fe)}),F._status===-1&&(F._status=0,F._result=P)}if(F._status===1)return F._result.default;throw F._result}var we={current:null},$={transition:null},te={ReactCurrentDispatcher:we,ReactCurrentBatchConfig:$,ReactCurrentOwner:Ee};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Fe.Children={map:qe,forEach:function(F,P,fe){qe(F,function(){P.apply(this,arguments)},fe)},count:function(F){var P=0;return qe(F,function(){P++}),P},toArray:function(F){return qe(F,function(P){return P})||[]},only:function(F){if(!Se(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Fe.Component=_,Fe.Fragment=s,Fe.Profiler=c,Fe.PureComponent=H,Fe.StrictMode=u,Fe.Suspense=m,Fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Fe.act=Z,Fe.cloneElement=function(F,P,fe){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var xe=D({},F.props),he=F.key,ke=F.ref,Be=F._owner;if(P!=null){if(P.ref!==void 0&&(ke=P.ref,Be=Ee.current),P.key!==void 0&&(he=""+P.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Ve in P)me.call(P,Ve)&&!M.hasOwnProperty(Ve)&&(xe[Ve]=P[Ve]===void 0&&Ae!==void 0?Ae[Ve]:P[Ve])}var Ve=arguments.length-2;if(Ve===1)xe.children=fe;else if(1<Ve){Ae=Array(Ve);for(var wt=0;wt<Ve;wt++)Ae[wt]=arguments[wt+2];xe.children=Ae}return{$$typeof:i,type:F.type,key:he,ref:ke,props:xe,_owner:Be}},Fe.createContext=function(F){return F={$$typeof:g,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:f,_context:F},F.Consumer=F},Fe.createElement=de,Fe.createFactory=function(F){var P=de.bind(null,F);return P.type=F,P},Fe.createRef=function(){return{current:null}},Fe.forwardRef=function(F){return{$$typeof:x,render:F}},Fe.isValidElement=Se,Fe.lazy=function(F){return{$$typeof:j,_payload:{_status:-1,_result:F},_init:Ce}},Fe.memo=function(F,P){return{$$typeof:v,type:F,compare:P===void 0?null:P}},Fe.startTransition=function(F){var P=$.transition;$.transition={};try{F()}finally{$.transition=P}},Fe.unstable_act=Z,Fe.useCallback=function(F,P){return we.current.useCallback(F,P)},Fe.useContext=function(F){return we.current.useContext(F)},Fe.useDebugValue=function(){},Fe.useDeferredValue=function(F){return we.current.useDeferredValue(F)},Fe.useEffect=function(F,P){return we.current.useEffect(F,P)},Fe.useId=function(){return we.current.useId()},Fe.useImperativeHandle=function(F,P,fe){return we.current.useImperativeHandle(F,P,fe)},Fe.useInsertionEffect=function(F,P){return we.current.useInsertionEffect(F,P)},Fe.useLayoutEffect=function(F,P){return we.current.useLayoutEffect(F,P)},Fe.useMemo=function(F,P){return we.current.useMemo(F,P)},Fe.useReducer=function(F,P,fe){return we.current.useReducer(F,P,fe)},Fe.useRef=function(F){return we.current.useRef(F)},Fe.useState=function(F){return we.current.useState(F)},Fe.useSyncExternalStore=function(F,P,fe){return we.current.useSyncExternalStore(F,P,fe)},Fe.useTransition=function(){return we.current.useTransition()},Fe.version="18.3.1",Fe}var Rp;function Ys(){return Rp||(Rp=1,zs.exports=dh()),zs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mp;function ch(){if(Mp)return ra;Mp=1;var i=Ys(),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),u=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function g(x,m,v){var j,b={},z=null,E=null;v!==void 0&&(z=""+v),m.key!==void 0&&(z=""+m.key),m.ref!==void 0&&(E=m.ref);for(j in m)u.call(m,j)&&!f.hasOwnProperty(j)&&(b[j]=m[j]);if(x&&x.defaultProps)for(j in m=x.defaultProps,m)b[j]===void 0&&(b[j]=m[j]);return{$$typeof:o,type:x,key:z,ref:E,props:b,_owner:c.current}}return ra.Fragment=s,ra.jsx=g,ra.jsxs=g,ra}var Bp;function ph(){return Bp||(Bp=1,Fs.exports=ch()),Fs.exports}var n=ph(),Lo={},As={exports:{}},Nt={},Is={exports:{}},Ls={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function uh(){return Dp||(Dp=1,(function(i){function o($,te){var Z=$.length;$.push(te);e:for(;0<Z;){var F=Z-1>>>1,P=$[F];if(0<c(P,te))$[F]=te,$[Z]=P,Z=F;else break e}}function s($){return $.length===0?null:$[0]}function u($){if($.length===0)return null;var te=$[0],Z=$.pop();if(Z!==te){$[0]=Z;e:for(var F=0,P=$.length,fe=P>>>1;F<fe;){var xe=2*(F+1)-1,he=$[xe],ke=xe+1,Be=$[ke];if(0>c(he,Z))ke<P&&0>c(Be,he)?($[F]=Be,$[ke]=Z,F=ke):($[F]=he,$[xe]=Z,F=xe);else if(ke<P&&0>c(Be,Z))$[F]=Be,$[ke]=Z,F=ke;else break e}}return te}function c($,te){var Z=$.sortIndex-te.sortIndex;return Z!==0?Z:$.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var f=performance;i.unstable_now=function(){return f.now()}}else{var g=Date,x=g.now();i.unstable_now=function(){return g.now()-x}}var m=[],v=[],j=1,b=null,z=3,E=!1,D=!1,B=!1,_=typeof setTimeout=="function"?setTimeout:null,Q=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function K($){for(var te=s(v);te!==null;){if(te.callback===null)u(v);else if(te.startTime<=$)u(v),te.sortIndex=te.expirationTime,o(m,te);else break;te=s(v)}}function ge($){if(B=!1,K($),!D)if(s(m)!==null)D=!0,Ce(me);else{var te=s(v);te!==null&&we(ge,te.startTime-$)}}function me($,te){D=!1,B&&(B=!1,Q(de),de=-1),E=!0;var Z=z;try{for(K(te),b=s(m);b!==null&&(!(b.expirationTime>te)||$&&!Ne());){var F=b.callback;if(typeof F=="function"){b.callback=null,z=b.priorityLevel;var P=F(b.expirationTime<=te);te=i.unstable_now(),typeof P=="function"?b.callback=P:b===s(m)&&u(m),K(te)}else u(m);b=s(m)}if(b!==null)var fe=!0;else{var xe=s(v);xe!==null&&we(ge,xe.startTime-te),fe=!1}return fe}finally{b=null,z=Z,E=!1}}var Ee=!1,M=null,de=-1,ve=5,Se=-1;function Ne(){return!(i.unstable_now()-Se<ve)}function Pe(){if(M!==null){var $=i.unstable_now();Se=$;var te=!0;try{te=M(!0,$)}finally{te?Ge():(Ee=!1,M=null)}}else Ee=!1}var Ge;if(typeof H=="function")Ge=function(){H(Pe)};else if(typeof MessageChannel<"u"){var Me=new MessageChannel,qe=Me.port2;Me.port1.onmessage=Pe,Ge=function(){qe.postMessage(null)}}else Ge=function(){_(Pe,0)};function Ce($){M=$,Ee||(Ee=!0,Ge())}function we($,te){de=_(function(){$(i.unstable_now())},te)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){D||E||(D=!0,Ce(me))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return z},i.unstable_getFirstCallbackNode=function(){return s(m)},i.unstable_next=function($){switch(z){case 1:case 2:case 3:var te=3;break;default:te=z}var Z=z;z=te;try{return $()}finally{z=Z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,te){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=z;z=$;try{return te()}finally{z=Z}},i.unstable_scheduleCallback=function($,te,Z){var F=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?F+Z:F):Z=F,$){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=Z+P,$={id:j++,callback:te,priorityLevel:$,startTime:Z,expirationTime:P,sortIndex:-1},Z>F?($.sortIndex=Z,o(v,$),s(m)===null&&$===s(v)&&(B?(Q(de),de=-1):B=!0,we(ge,Z-F))):($.sortIndex=P,o(m,$),D||E||(D=!0,Ce(me))),$},i.unstable_shouldYield=Ne,i.unstable_wrapCallback=function($){var te=z;return function(){var Z=z;z=te;try{return $.apply(this,arguments)}finally{z=Z}}}})(Ls)),Ls}var Pp;function fh(){return Pp||(Pp=1,Is.exports=uh()),Is.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _p;function hh(){if(_p)return Nt;_p=1;var i=Ys(),o=fh();function s(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var u=new Set,c={};function f(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(c[e]=t,e=0;e<t.length;e++)u.add(t[e])}var x=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,v=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,j={},b={};function z(e){return m.call(b,e)?!0:m.call(j,e)?!1:v.test(e)?b[e]=!0:(j[e]=!0,!1)}function E(e,t,r,a){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function D(e,t,r,a){if(t===null||typeof t>"u"||E(e,t,r,a))return!0;if(a)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function B(e,t,r,a,l,d,h){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=l,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=d,this.removeEmptyString=h}var _={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_[e]=new B(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_[t]=new B(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){_[e]=new B(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_[e]=new B(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_[e]=new B(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){_[e]=new B(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){_[e]=new B(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){_[e]=new B(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){_[e]=new B(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q=/[\-:]([a-z])/g;function H(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q,H);_[t]=new B(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q,H);_[t]=new B(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q,H);_[t]=new B(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){_[e]=new B(e,1,!1,e.toLowerCase(),null,!1,!1)}),_.xlinkHref=new B("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){_[e]=new B(e,1,!1,e.toLowerCase(),null,!0,!0)});function K(e,t,r,a){var l=_.hasOwnProperty(t)?_[t]:null;(l!==null?l.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(D(t,r,l,a)&&(r=null),a||l===null?z(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):l.mustUseProperty?e[l.propertyName]=r===null?l.type===3?!1:"":r:(t=l.attributeName,a=l.attributeNamespace,r===null?e.removeAttribute(t):(l=l.type,r=l===3||l===4&&r===!0?"":""+r,a?e.setAttributeNS(a,t,r):e.setAttribute(t,r))))}var ge=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,me=Symbol.for("react.element"),Ee=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),de=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Se=Symbol.for("react.provider"),Ne=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),Ge=Symbol.for("react.suspense"),Me=Symbol.for("react.suspense_list"),qe=Symbol.for("react.memo"),Ce=Symbol.for("react.lazy"),we=Symbol.for("react.offscreen"),$=Symbol.iterator;function te(e){return e===null||typeof e!="object"?null:(e=$&&e[$]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Object.assign,F;function P(e){if(F===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);F=t&&t[1]||""}return`
`+F+e}var fe=!1;function xe(e,t){if(!e||fe)return"";fe=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(R){var a=R}Reflect.construct(e,[],t)}else{try{t.call()}catch(R){a=R}e.call(t.prototype)}else{try{throw Error()}catch(R){a=R}e()}}catch(R){if(R&&a&&typeof R.stack=="string"){for(var l=R.stack.split(`
`),d=a.stack.split(`
`),h=l.length-1,y=d.length-1;1<=h&&0<=y&&l[h]!==d[y];)y--;for(;1<=h&&0<=y;h--,y--)if(l[h]!==d[y]){if(h!==1||y!==1)do if(h--,y--,0>y||l[h]!==d[y]){var C=`
`+l[h].replace(" at new "," at ");return e.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",e.displayName)),C}while(1<=h&&0<=y);break}}}finally{fe=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?P(e):""}function he(e){switch(e.tag){case 5:return P(e.type);case 16:return P("Lazy");case 13:return P("Suspense");case 19:return P("SuspenseList");case 0:case 2:case 15:return e=xe(e.type,!1),e;case 11:return e=xe(e.type.render,!1),e;case 1:return e=xe(e.type,!0),e;default:return""}}function ke(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case Ee:return"Portal";case ve:return"Profiler";case de:return"StrictMode";case Ge:return"Suspense";case Me:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ne:return(e.displayName||"Context")+".Consumer";case Se:return(e._context.displayName||"Context")+".Provider";case Pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case qe:return t=e.displayName||null,t!==null?t:ke(e.type)||"Memo";case Ce:t=e._payload,e=e._init;try{return ke(e(t))}catch{}}return null}function Be(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ke(t);case 8:return t===de?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ae(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function wt(e){var t=Ve(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var l=r.get,d=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(h){a=""+h,d.call(this,h)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return a},setValue:function(h){a=""+h},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pr(e){e._valueTracker||(e._valueTracker=wt(e))}function lt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),a="";return e&&(a=Ve(e)?e.checked?"true":"false":e.value),e=a,e!==r?(t.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function _r(e,t){var r=t.checked;return Z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function ka(e,t){var r=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;r=Ae(t.value!=null?t.value:r),e._wrapperState={initialChecked:a,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ln(e,t){t=t.checked,t!=null&&K(e,"checked",t,!1)}function xi(e,t){ln(e,t);var r=Ae(t.value),a=t.type;if(r!=null)a==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Hr(e,t.type,r):t.hasOwnProperty("defaultValue")&&Hr(e,t.type,Ae(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ja(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Hr(e,t,r){(t!=="number"||Jt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var pr=Array.isArray;function Tn(e,t,r,a){if(e=e.options,t){t={};for(var l=0;l<r.length;l++)t["$"+r[l]]=!0;for(r=0;r<e.length;r++)l=t.hasOwnProperty("$"+e[r].value),e[r].selected!==l&&(e[r].selected=l),l&&a&&(e[r].defaultSelected=!0)}else{for(r=""+Ae(r),t=null,l=0;l<e.length;l++){if(e[l].value===r){e[l].selected=!0,a&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function mi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(s(91));return Z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Ca(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(s(92));if(pr(r)){if(1<r.length)throw Error(s(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:Ae(r)}}function sn(e,t){var r=Ae(t.value),a=Ae(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),a!=null&&(e.defaultValue=""+a)}function Rn(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vi(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ur(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vi(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Et,Ot=(function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,a,l){MSApp.execUnsafeLocalFunction(function(){return e(t,r,a,l)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Et=Et||document.createElement("div"),Et.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Et.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Mn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var fr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},yi=["Webkit","ms","Moz","O"];Object.keys(fr).forEach(function(e){yi.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),fr[t]=fr[e]})});function Ea(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||fr.hasOwnProperty(e)&&fr[e]?(""+t).trim():t+"px"}function Wt(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var a=r.indexOf("--")===0,l=Ea(r,t[r],a);r==="float"&&(r="cssFloat"),a?e.setProperty(r,l):e[r]=l}}var Sa=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Or(e,t){if(t){if(Sa[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(s(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(s(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(s(61))}if(t.style!=null&&typeof t.style!="object")throw Error(s(62))}}function Wr(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bi=null;function Vr(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Bn=null,yn=null,dn=null;function Fa(e){if(e=Wi(e)){if(typeof Bn!="function")throw Error(s(280));var t=e.stateNode;t&&(t=Ga(t),Bn(e.stateNode,e.type,t))}}function wi(e){yn?dn?dn.push(e):dn=[e]:yn=e}function za(){if(yn){var e=yn,t=dn;if(dn=yn=null,Fa(e),t)for(e=0;e<t.length;e++)Fa(t[e])}}function ki(e,t){return e(t)}function hr(){}var Dn=!1;function ji(e,t,r){if(Dn)return e(t,r);Dn=!0;try{return ki(e,t,r)}finally{Dn=!1,(yn!==null||dn!==null)&&(hr(),za())}}function gr(e,t){var r=e.stateNode;if(r===null)return null;var a=Ga(r);if(a===null)return null;r=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(s(231,t,typeof r));return r}var Ci=!1;if(x)try{var w={};Object.defineProperty(w,"passive",{get:function(){Ci=!0}}),window.addEventListener("test",w,w),window.removeEventListener("test",w,w)}catch{Ci=!1}function A(e,t,r,a,l,d,h,y,C){var R=Array.prototype.slice.call(arguments,3);try{t.apply(r,R)}catch(V){this.onError(V)}}var T=!1,W=null,q=!1,oe=null,ce={onError:function(e){T=!0,W=e}};function J(e,t,r,a,l,d,h,y,C){T=!1,W=null,A.apply(ce,arguments)}function ne(e,t,r,a,l,d,h,y,C){if(J.apply(this,arguments),T){if(T){var R=W;T=!1,W=null}else throw Error(s(198));q||(q=!0,oe=R)}}function ie(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function be(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function se(e){if(ie(e)!==e)throw Error(s(188))}function je(e){var t=e.alternate;if(!t){if(t=ie(e),t===null)throw Error(s(188));return t!==e?null:e}for(var r=e,a=t;;){var l=r.return;if(l===null)break;var d=l.alternate;if(d===null){if(a=l.return,a!==null){r=a;continue}break}if(l.child===d.child){for(d=l.child;d;){if(d===r)return se(l),e;if(d===a)return se(l),t;d=d.sibling}throw Error(s(188))}if(r.return!==a.return)r=l,a=d;else{for(var h=!1,y=l.child;y;){if(y===r){h=!0,r=l,a=d;break}if(y===a){h=!0,a=l,r=d;break}y=y.sibling}if(!h){for(y=d.child;y;){if(y===r){h=!0,r=d,a=l;break}if(y===a){h=!0,a=d,r=l;break}y=y.sibling}if(!h)throw Error(s(189))}}if(r.alternate!==a)throw Error(s(190))}if(r.tag!==3)throw Error(s(188));return r.stateNode.current===r?e:t}function Ie(e){return e=je(e),e!==null?nt(e):null}function nt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=nt(e);if(t!==null)return t;e=e.sibling}return null}var et=o.unstable_scheduleCallback,ct=o.unstable_cancelCallback,De=o.unstable_shouldYield,St=o.unstable_requestPaint,_e=o.unstable_now,xr=o.unstable_getCurrentPriorityLevel,Vt=o.unstable_ImmediatePriority,Rt=o.unstable_UserBlockingPriority,Pn=o.unstable_NormalPriority,mr=o.unstable_LowPriority,cn=o.unstable_IdlePriority,bn=null,kt=null;function Le(e){if(kt&&typeof kt.onCommitFiberRoot=="function")try{kt.onCommitFiberRoot(bn,e,void 0,(e.current.flags&128)===128)}catch{}}var Oe=Math.clz32?Math.clz32:Ze,_n=Math.log,wn=Math.LN2;function Ze(e){return e>>>=0,e===0?32:31-(_n(e)/wn|0)|0}var kn=64,vr=4194304;function yr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Aa(e,t){var r=e.pendingLanes;if(r===0)return 0;var a=0,l=e.suspendedLanes,d=e.pingedLanes,h=r&268435455;if(h!==0){var y=h&~l;y!==0?a=yr(y):(d&=h,d!==0&&(a=yr(d)))}else h=r&~l,h!==0?a=yr(h):d!==0&&(a=yr(d));if(a===0)return 0;if(t!==0&&t!==a&&(t&l)===0&&(l=a&-a,d=t&-t,l>=d||l===16&&(d&4194240)!==0))return t;if((a&4)!==0&&(a|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)r=31-Oe(t),l=1<<r,a|=e[r],t&=~l;return a}function E0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function S0(e,t){for(var r=e.suspendedLanes,a=e.pingedLanes,l=e.expirationTimes,d=e.pendingLanes;0<d;){var h=31-Oe(d),y=1<<h,C=l[h];C===-1?((y&r)===0||(y&a)!==0)&&(l[h]=E0(y,t)):C<=t&&(e.expiredLanes|=y),d&=~y}}function qo(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function cd(){var e=kn;return kn<<=1,(kn&4194240)===0&&(kn=64),e}function Zo(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ei(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Oe(t),e[t]=r}function F0(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<r;){var l=31-Oe(r),d=1<<l;t[l]=0,a[l]=-1,e[l]=-1,r&=~d}}function Ko(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var a=31-Oe(r),l=1<<a;l&t|e[a]&t&&(e[a]|=t),r&=~l}}var He=0;function pd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var ud,Qo,fd,hd,gd,Xo=!1,Ia=[],Hn=null,On=null,Wn=null,Si=new Map,Fi=new Map,Vn=[],z0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xd(e,t){switch(e){case"focusin":case"focusout":Hn=null;break;case"dragenter":case"dragleave":On=null;break;case"mouseover":case"mouseout":Wn=null;break;case"pointerover":case"pointerout":Si.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fi.delete(t.pointerId)}}function zi(e,t,r,a,l,d){return e===null||e.nativeEvent!==d?(e={blockedOn:t,domEventName:r,eventSystemFlags:a,nativeEvent:d,targetContainers:[l]},t!==null&&(t=Wi(t),t!==null&&Qo(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function A0(e,t,r,a,l){switch(t){case"focusin":return Hn=zi(Hn,e,t,r,a,l),!0;case"dragenter":return On=zi(On,e,t,r,a,l),!0;case"mouseover":return Wn=zi(Wn,e,t,r,a,l),!0;case"pointerover":var d=l.pointerId;return Si.set(d,zi(Si.get(d)||null,e,t,r,a,l)),!0;case"gotpointercapture":return d=l.pointerId,Fi.set(d,zi(Fi.get(d)||null,e,t,r,a,l)),!0}return!1}function md(e){var t=br(e.target);if(t!==null){var r=ie(t);if(r!==null){if(t=r.tag,t===13){if(t=be(r),t!==null){e.blockedOn=t,gd(e.priority,function(){fd(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function La(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=el(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var a=new r.constructor(r.type,r);bi=a,r.target.dispatchEvent(a),bi=null}else return t=Wi(r),t!==null&&Qo(t),e.blockedOn=r,!1;t.shift()}return!0}function vd(e,t,r){La(e)&&r.delete(t)}function I0(){Xo=!1,Hn!==null&&La(Hn)&&(Hn=null),On!==null&&La(On)&&(On=null),Wn!==null&&La(Wn)&&(Wn=null),Si.forEach(vd),Fi.forEach(vd)}function Ai(e,t){e.blockedOn===t&&(e.blockedOn=null,Xo||(Xo=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,I0)))}function Ii(e){function t(l){return Ai(l,e)}if(0<Ia.length){Ai(Ia[0],e);for(var r=1;r<Ia.length;r++){var a=Ia[r];a.blockedOn===e&&(a.blockedOn=null)}}for(Hn!==null&&Ai(Hn,e),On!==null&&Ai(On,e),Wn!==null&&Ai(Wn,e),Si.forEach(t),Fi.forEach(t),r=0;r<Vn.length;r++)a=Vn[r],a.blockedOn===e&&(a.blockedOn=null);for(;0<Vn.length&&(r=Vn[0],r.blockedOn===null);)md(r),r.blockedOn===null&&Vn.shift()}var $r=ge.ReactCurrentBatchConfig,Na=!0;function L0(e,t,r,a){var l=He,d=$r.transition;$r.transition=null;try{He=1,Jo(e,t,r,a)}finally{He=l,$r.transition=d}}function N0(e,t,r,a){var l=He,d=$r.transition;$r.transition=null;try{He=4,Jo(e,t,r,a)}finally{He=l,$r.transition=d}}function Jo(e,t,r,a){if(Na){var l=el(e,t,r,a);if(l===null)ml(e,t,a,Ta,r),xd(e,a);else if(A0(l,e,t,r,a))a.stopPropagation();else if(xd(e,a),t&4&&-1<z0.indexOf(e)){for(;l!==null;){var d=Wi(l);if(d!==null&&ud(d),d=el(e,t,r,a),d===null&&ml(e,t,a,Ta,r),d===l)break;l=d}l!==null&&a.stopPropagation()}else ml(e,t,a,null,r)}}var Ta=null;function el(e,t,r,a){if(Ta=null,e=Vr(a),e=br(e),e!==null)if(t=ie(e),t===null)e=null;else if(r=t.tag,r===13){if(e=be(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ta=e,null}function yd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xr()){case Vt:return 1;case Rt:return 4;case Pn:case mr:return 16;case cn:return 536870912;default:return 16}default:return 16}}var $n=null,tl=null,Ra=null;function bd(){if(Ra)return Ra;var e,t=tl,r=t.length,a,l="value"in $n?$n.value:$n.textContent,d=l.length;for(e=0;e<r&&t[e]===l[e];e++);var h=r-e;for(a=1;a<=h&&t[r-a]===l[d-a];a++);return Ra=l.slice(e,1<a?1-a:void 0)}function Ma(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ba(){return!0}function wd(){return!1}function Mt(e){function t(r,a,l,d,h){this._reactName=r,this._targetInst=l,this.type=a,this.nativeEvent=d,this.target=h,this.currentTarget=null;for(var y in e)e.hasOwnProperty(y)&&(r=e[y],this[y]=r?r(d):d[y]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Ba:wd,this.isPropagationStopped=wd,this}return Z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Ba)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Ba)},persist:function(){},isPersistent:Ba}),t}var Gr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nl=Mt(Gr),Li=Z({},Gr,{view:0,detail:0}),T0=Mt(Li),rl,il,Ni,Da=Z({},Li,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ol,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Ni&&(Ni&&e.type==="mousemove"?(rl=e.screenX-Ni.screenX,il=e.screenY-Ni.screenY):il=rl=0,Ni=e),rl)},movementY:function(e){return"movementY"in e?e.movementY:il}}),kd=Mt(Da),R0=Z({},Da,{dataTransfer:0}),M0=Mt(R0),B0=Z({},Li,{relatedTarget:0}),al=Mt(B0),D0=Z({},Gr,{animationName:0,elapsedTime:0,pseudoElement:0}),P0=Mt(D0),_0=Z({},Gr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),H0=Mt(_0),O0=Z({},Gr,{data:0}),jd=Mt(O0),W0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function G0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$0[e])?!!t[e]:!1}function ol(){return G0}var U0=Z({},Li,{key:function(e){if(e.key){var t=W0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ma(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ol,charCode:function(e){return e.type==="keypress"?Ma(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ma(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Y0=Mt(U0),q0=Z({},Da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=Mt(q0),Z0=Z({},Li,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ol}),K0=Mt(Z0),Q0=Z({},Gr,{propertyName:0,elapsedTime:0,pseudoElement:0}),X0=Mt(Q0),J0=Z({},Da,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ef=Mt(J0),tf=[9,13,27,32],ll=x&&"CompositionEvent"in window,Ti=null;x&&"documentMode"in document&&(Ti=document.documentMode);var nf=x&&"TextEvent"in window&&!Ti,Ed=x&&(!ll||Ti&&8<Ti&&11>=Ti),Sd=" ",Fd=!1;function zd(e,t){switch(e){case"keyup":return tf.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ad(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ur=!1;function rf(e,t){switch(e){case"compositionend":return Ad(t);case"keypress":return t.which!==32?null:(Fd=!0,Sd);case"textInput":return e=t.data,e===Sd&&Fd?null:e;default:return null}}function af(e,t){if(Ur)return e==="compositionend"||!ll&&zd(e,t)?(e=bd(),Ra=tl=$n=null,Ur=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Ed&&t.locale!=="ko"?null:t.data;default:return null}}var of={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Id(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!of[e.type]:t==="textarea"}function Ld(e,t,r,a){wi(a),t=Wa(t,"onChange"),0<t.length&&(r=new nl("onChange","change",null,r,a),e.push({event:r,listeners:t}))}var Ri=null,Mi=null;function lf(e){Zd(e,0)}function Pa(e){var t=Qr(e);if(lt(t))return e}function sf(e,t){if(e==="change")return t}var Nd=!1;if(x){var sl;if(x){var dl="oninput"in document;if(!dl){var Td=document.createElement("div");Td.setAttribute("oninput","return;"),dl=typeof Td.oninput=="function"}sl=dl}else sl=!1;Nd=sl&&(!document.documentMode||9<document.documentMode)}function Rd(){Ri&&(Ri.detachEvent("onpropertychange",Md),Mi=Ri=null)}function Md(e){if(e.propertyName==="value"&&Pa(Mi)){var t=[];Ld(t,Mi,e,Vr(e)),ji(lf,t)}}function df(e,t,r){e==="focusin"?(Rd(),Ri=t,Mi=r,Ri.attachEvent("onpropertychange",Md)):e==="focusout"&&Rd()}function cf(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pa(Mi)}function pf(e,t){if(e==="click")return Pa(t)}function uf(e,t){if(e==="input"||e==="change")return Pa(t)}function ff(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var en=typeof Object.is=="function"?Object.is:ff;function Bi(e,t){if(en(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),a=Object.keys(t);if(r.length!==a.length)return!1;for(a=0;a<r.length;a++){var l=r[a];if(!m.call(t,l)||!en(e[l],t[l]))return!1}return!0}function Bd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Dd(e,t){var r=Bd(e);e=0;for(var a;r;){if(r.nodeType===3){if(a=e+r.textContent.length,e<=t&&a>=t)return{node:r,offset:t-e};e=a}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Bd(r)}}function Pd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Pd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function _d(){for(var e=window,t=Jt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=Jt(e.document)}return t}function cl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function hf(e){var t=_d(),r=e.focusedElem,a=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&Pd(r.ownerDocument.documentElement,r)){if(a!==null&&cl(r)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=r.textContent.length,d=Math.min(a.start,l);a=a.end===void 0?d:Math.min(a.end,l),!e.extend&&d>a&&(l=a,a=d,d=l),l=Dd(r,d);var h=Dd(r,a);l&&h&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==h.node||e.focusOffset!==h.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),d>a?(e.addRange(t),e.extend(h.node,h.offset)):(t.setEnd(h.node,h.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var gf=x&&"documentMode"in document&&11>=document.documentMode,Yr=null,pl=null,Di=null,ul=!1;function Hd(e,t,r){var a=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ul||Yr==null||Yr!==Jt(a)||(a=Yr,"selectionStart"in a&&cl(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Di&&Bi(Di,a)||(Di=a,a=Wa(pl,"onSelect"),0<a.length&&(t=new nl("onSelect","select",null,t,r),e.push({event:t,listeners:a}),t.target=Yr)))}function _a(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var qr={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},fl={},Od={};x&&(Od=document.createElement("div").style,"AnimationEvent"in window||(delete qr.animationend.animation,delete qr.animationiteration.animation,delete qr.animationstart.animation),"TransitionEvent"in window||delete qr.transitionend.transition);function Ha(e){if(fl[e])return fl[e];if(!qr[e])return e;var t=qr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in Od)return fl[e]=t[r];return e}var Wd=Ha("animationend"),Vd=Ha("animationiteration"),$d=Ha("animationstart"),Gd=Ha("transitionend"),Ud=new Map,Yd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gn(e,t){Ud.set(e,t),f(t,[e])}for(var hl=0;hl<Yd.length;hl++){var gl=Yd[hl],xf=gl.toLowerCase(),mf=gl[0].toUpperCase()+gl.slice(1);Gn(xf,"on"+mf)}Gn(Wd,"onAnimationEnd"),Gn(Vd,"onAnimationIteration"),Gn($d,"onAnimationStart"),Gn("dblclick","onDoubleClick"),Gn("focusin","onFocus"),Gn("focusout","onBlur"),Gn(Gd,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),f("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),f("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),f("onBeforeInput",["compositionend","keypress","textInput","paste"]),f("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),f("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Pi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vf=new Set("cancel close invalid load scroll toggle".split(" ").concat(Pi));function qd(e,t,r){var a=e.type||"unknown-event";e.currentTarget=r,ne(a,t,void 0,e),e.currentTarget=null}function Zd(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var a=e[r],l=a.event;a=a.listeners;e:{var d=void 0;if(t)for(var h=a.length-1;0<=h;h--){var y=a[h],C=y.instance,R=y.currentTarget;if(y=y.listener,C!==d&&l.isPropagationStopped())break e;qd(l,y,R),d=C}else for(h=0;h<a.length;h++){if(y=a[h],C=y.instance,R=y.currentTarget,y=y.listener,C!==d&&l.isPropagationStopped())break e;qd(l,y,R),d=C}}}if(q)throw e=oe,q=!1,oe=null,e}function Ue(e,t){var r=t[jl];r===void 0&&(r=t[jl]=new Set);var a=e+"__bubble";r.has(a)||(Kd(t,e,2,!1),r.add(a))}function xl(e,t,r){var a=0;t&&(a|=4),Kd(r,e,a,t)}var Oa="_reactListening"+Math.random().toString(36).slice(2);function _i(e){if(!e[Oa]){e[Oa]=!0,u.forEach(function(r){r!=="selectionchange"&&(vf.has(r)||xl(r,!1,e),xl(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Oa]||(t[Oa]=!0,xl("selectionchange",!1,t))}}function Kd(e,t,r,a){switch(yd(t)){case 1:var l=L0;break;case 4:l=N0;break;default:l=Jo}r=l.bind(null,t,r,e),l=void 0,!Ci||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),a?l!==void 0?e.addEventListener(t,r,{capture:!0,passive:l}):e.addEventListener(t,r,!0):l!==void 0?e.addEventListener(t,r,{passive:l}):e.addEventListener(t,r,!1)}function ml(e,t,r,a,l){var d=a;if((t&1)===0&&(t&2)===0&&a!==null)e:for(;;){if(a===null)return;var h=a.tag;if(h===3||h===4){var y=a.stateNode.containerInfo;if(y===l||y.nodeType===8&&y.parentNode===l)break;if(h===4)for(h=a.return;h!==null;){var C=h.tag;if((C===3||C===4)&&(C=h.stateNode.containerInfo,C===l||C.nodeType===8&&C.parentNode===l))return;h=h.return}for(;y!==null;){if(h=br(y),h===null)return;if(C=h.tag,C===5||C===6){a=d=h;continue e}y=y.parentNode}}a=a.return}ji(function(){var R=d,V=Vr(r),G=[];e:{var O=Ud.get(e);if(O!==void 0){var X=nl,re=e;switch(e){case"keypress":if(Ma(r)===0)break e;case"keydown":case"keyup":X=Y0;break;case"focusin":re="focus",X=al;break;case"focusout":re="blur",X=al;break;case"beforeblur":case"afterblur":X=al;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":X=kd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":X=M0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":X=K0;break;case Wd:case Vd:case $d:X=P0;break;case Gd:X=X0;break;case"scroll":X=T0;break;case"wheel":X=ef;break;case"copy":case"cut":case"paste":X=H0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":X=Cd}var ae=(t&4)!==0,tt=!ae&&e==="scroll",L=ae?O!==null?O+"Capture":null:O;ae=[];for(var S=R,N;S!==null;){N=S;var U=N.stateNode;if(N.tag===5&&U!==null&&(N=U,L!==null&&(U=gr(S,L),U!=null&&ae.push(Hi(S,U,N)))),tt)break;S=S.return}0<ae.length&&(O=new X(O,re,null,r,V),G.push({event:O,listeners:ae}))}}if((t&7)===0){e:{if(O=e==="mouseover"||e==="pointerover",X=e==="mouseout"||e==="pointerout",O&&r!==bi&&(re=r.relatedTarget||r.fromElement)&&(br(re)||re[jn]))break e;if((X||O)&&(O=V.window===V?V:(O=V.ownerDocument)?O.defaultView||O.parentWindow:window,X?(re=r.relatedTarget||r.toElement,X=R,re=re?br(re):null,re!==null&&(tt=ie(re),re!==tt||re.tag!==5&&re.tag!==6)&&(re=null)):(X=null,re=R),X!==re)){if(ae=kd,U="onMouseLeave",L="onMouseEnter",S="mouse",(e==="pointerout"||e==="pointerover")&&(ae=Cd,U="onPointerLeave",L="onPointerEnter",S="pointer"),tt=X==null?O:Qr(X),N=re==null?O:Qr(re),O=new ae(U,S+"leave",X,r,V),O.target=tt,O.relatedTarget=N,U=null,br(V)===R&&(ae=new ae(L,S+"enter",re,r,V),ae.target=N,ae.relatedTarget=tt,U=ae),tt=U,X&&re)t:{for(ae=X,L=re,S=0,N=ae;N;N=Zr(N))S++;for(N=0,U=L;U;U=Zr(U))N++;for(;0<S-N;)ae=Zr(ae),S--;for(;0<N-S;)L=Zr(L),N--;for(;S--;){if(ae===L||L!==null&&ae===L.alternate)break t;ae=Zr(ae),L=Zr(L)}ae=null}else ae=null;X!==null&&Qd(G,O,X,ae,!1),re!==null&&tt!==null&&Qd(G,tt,re,ae,!0)}}e:{if(O=R?Qr(R):window,X=O.nodeName&&O.nodeName.toLowerCase(),X==="select"||X==="input"&&O.type==="file")var le=sf;else if(Id(O))if(Nd)le=uf;else{le=cf;var pe=df}else(X=O.nodeName)&&X.toLowerCase()==="input"&&(O.type==="checkbox"||O.type==="radio")&&(le=pf);if(le&&(le=le(e,R))){Ld(G,le,r,V);break e}pe&&pe(e,O,R),e==="focusout"&&(pe=O._wrapperState)&&pe.controlled&&O.type==="number"&&Hr(O,"number",O.value)}switch(pe=R?Qr(R):window,e){case"focusin":(Id(pe)||pe.contentEditable==="true")&&(Yr=pe,pl=R,Di=null);break;case"focusout":Di=pl=Yr=null;break;case"mousedown":ul=!0;break;case"contextmenu":case"mouseup":case"dragend":ul=!1,Hd(G,r,V);break;case"selectionchange":if(gf)break;case"keydown":case"keyup":Hd(G,r,V)}var ue;if(ll)e:{switch(e){case"compositionstart":var ye="onCompositionStart";break e;case"compositionend":ye="onCompositionEnd";break e;case"compositionupdate":ye="onCompositionUpdate";break e}ye=void 0}else Ur?zd(e,r)&&(ye="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(ye="onCompositionStart");ye&&(Ed&&r.locale!=="ko"&&(Ur||ye!=="onCompositionStart"?ye==="onCompositionEnd"&&Ur&&(ue=bd()):($n=V,tl="value"in $n?$n.value:$n.textContent,Ur=!0)),pe=Wa(R,ye),0<pe.length&&(ye=new jd(ye,e,null,r,V),G.push({event:ye,listeners:pe}),ue?ye.data=ue:(ue=Ad(r),ue!==null&&(ye.data=ue)))),(ue=nf?rf(e,r):af(e,r))&&(R=Wa(R,"onBeforeInput"),0<R.length&&(V=new jd("onBeforeInput","beforeinput",null,r,V),G.push({event:V,listeners:R}),V.data=ue))}Zd(G,t)})}function Hi(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Wa(e,t){for(var r=t+"Capture",a=[];e!==null;){var l=e,d=l.stateNode;l.tag===5&&d!==null&&(l=d,d=gr(e,r),d!=null&&a.unshift(Hi(e,d,l)),d=gr(e,t),d!=null&&a.push(Hi(e,d,l))),e=e.return}return a}function Zr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Qd(e,t,r,a,l){for(var d=t._reactName,h=[];r!==null&&r!==a;){var y=r,C=y.alternate,R=y.stateNode;if(C!==null&&C===a)break;y.tag===5&&R!==null&&(y=R,l?(C=gr(r,d),C!=null&&h.unshift(Hi(r,C,y))):l||(C=gr(r,d),C!=null&&h.push(Hi(r,C,y)))),r=r.return}h.length!==0&&e.push({event:t,listeners:h})}var yf=/\r\n?/g,bf=/\u0000|\uFFFD/g;function Xd(e){return(typeof e=="string"?e:""+e).replace(yf,`
`).replace(bf,"")}function Va(e,t,r){if(t=Xd(t),Xd(e)!==t&&r)throw Error(s(425))}function $a(){}var vl=null,yl=null;function bl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var wl=typeof setTimeout=="function"?setTimeout:void 0,wf=typeof clearTimeout=="function"?clearTimeout:void 0,Jd=typeof Promise=="function"?Promise:void 0,kf=typeof queueMicrotask=="function"?queueMicrotask:typeof Jd<"u"?function(e){return Jd.resolve(null).then(e).catch(jf)}:wl;function jf(e){setTimeout(function(){throw e})}function kl(e,t){var r=t,a=0;do{var l=r.nextSibling;if(e.removeChild(r),l&&l.nodeType===8)if(r=l.data,r==="/$"){if(a===0){e.removeChild(l),Ii(t);return}a--}else r!=="$"&&r!=="$?"&&r!=="$!"||a++;r=l}while(r);Ii(t)}function Un(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function ec(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Kr=Math.random().toString(36).slice(2),pn="__reactFiber$"+Kr,Oi="__reactProps$"+Kr,jn="__reactContainer$"+Kr,jl="__reactEvents$"+Kr,Cf="__reactListeners$"+Kr,Ef="__reactHandles$"+Kr;function br(e){var t=e[pn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[jn]||r[pn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=ec(e);e!==null;){if(r=e[pn])return r;e=ec(e)}return t}e=r,r=e.parentNode}return null}function Wi(e){return e=e[pn]||e[jn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Qr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(s(33))}function Ga(e){return e[Oi]||null}var Cl=[],Xr=-1;function Yn(e){return{current:e}}function Ye(e){0>Xr||(e.current=Cl[Xr],Cl[Xr]=null,Xr--)}function $e(e,t){Xr++,Cl[Xr]=e.current,e.current=t}var qn={},xt=Yn(qn),Ft=Yn(!1),wr=qn;function Jr(e,t){var r=e.type.contextTypes;if(!r)return qn;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var l={},d;for(d in r)l[d]=t[d];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=l),l}function zt(e){return e=e.childContextTypes,e!=null}function Ua(){Ye(Ft),Ye(xt)}function tc(e,t,r){if(xt.current!==qn)throw Error(s(168));$e(xt,t),$e(Ft,r)}function nc(e,t,r){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return r;a=a.getChildContext();for(var l in a)if(!(l in t))throw Error(s(108,Be(e)||"Unknown",l));return Z({},r,a)}function Ya(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||qn,wr=xt.current,$e(xt,e),$e(Ft,Ft.current),!0}function rc(e,t,r){var a=e.stateNode;if(!a)throw Error(s(169));r?(e=nc(e,t,wr),a.__reactInternalMemoizedMergedChildContext=e,Ye(Ft),Ye(xt),$e(xt,e)):Ye(Ft),$e(Ft,r)}var Cn=null,qa=!1,El=!1;function ic(e){Cn===null?Cn=[e]:Cn.push(e)}function Sf(e){qa=!0,ic(e)}function Zn(){if(!El&&Cn!==null){El=!0;var e=0,t=He;try{var r=Cn;for(He=1;e<r.length;e++){var a=r[e];do a=a(!0);while(a!==null)}Cn=null,qa=!1}catch(l){throw Cn!==null&&(Cn=Cn.slice(e+1)),et(Vt,Zn),l}finally{He=t,El=!1}}return null}var ei=[],ti=0,Za=null,Ka=0,$t=[],Gt=0,kr=null,En=1,Sn="";function jr(e,t){ei[ti++]=Ka,ei[ti++]=Za,Za=e,Ka=t}function ac(e,t,r){$t[Gt++]=En,$t[Gt++]=Sn,$t[Gt++]=kr,kr=e;var a=En;e=Sn;var l=32-Oe(a)-1;a&=~(1<<l),r+=1;var d=32-Oe(t)+l;if(30<d){var h=l-l%5;d=(a&(1<<h)-1).toString(32),a>>=h,l-=h,En=1<<32-Oe(t)+l|r<<l|a,Sn=d+e}else En=1<<d|r<<l|a,Sn=e}function Sl(e){e.return!==null&&(jr(e,1),ac(e,1,0))}function Fl(e){for(;e===Za;)Za=ei[--ti],ei[ti]=null,Ka=ei[--ti],ei[ti]=null;for(;e===kr;)kr=$t[--Gt],$t[Gt]=null,Sn=$t[--Gt],$t[Gt]=null,En=$t[--Gt],$t[Gt]=null}var Bt=null,Dt=null,Ke=!1,tn=null;function oc(e,t){var r=Zt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function lc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Bt=e,Dt=Un(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Bt=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=kr!==null?{id:En,overflow:Sn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Zt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,Bt=e,Dt=null,!0):!1;default:return!1}}function zl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(Ke){var t=Dt;if(t){var r=t;if(!lc(e,t)){if(zl(e))throw Error(s(418));t=Un(r.nextSibling);var a=Bt;t&&lc(e,t)?oc(a,r):(e.flags=e.flags&-4097|2,Ke=!1,Bt=e)}}else{if(zl(e))throw Error(s(418));e.flags=e.flags&-4097|2,Ke=!1,Bt=e}}}function sc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Bt=e}function Qa(e){if(e!==Bt)return!1;if(!Ke)return sc(e),Ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!bl(e.type,e.memoizedProps)),t&&(t=Dt)){if(zl(e))throw dc(),Error(s(418));for(;t;)oc(e,t),t=Un(t.nextSibling)}if(sc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(s(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){Dt=Un(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Bt?Un(e.stateNode.nextSibling):null;return!0}function dc(){for(var e=Dt;e;)e=Un(e.nextSibling)}function ni(){Dt=Bt=null,Ke=!1}function Il(e){tn===null?tn=[e]:tn.push(e)}var Ff=ge.ReactCurrentBatchConfig;function Vi(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(s(309));var a=r.stateNode}if(!a)throw Error(s(147,e));var l=a,d=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===d?t.ref:(t=function(h){var y=l.refs;h===null?delete y[d]:y[d]=h},t._stringRef=d,t)}if(typeof e!="string")throw Error(s(284));if(!r._owner)throw Error(s(290,e))}return e}function Xa(e,t){throw e=Object.prototype.toString.call(t),Error(s(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function cc(e){var t=e._init;return t(e._payload)}function pc(e){function t(L,S){if(e){var N=L.deletions;N===null?(L.deletions=[S],L.flags|=16):N.push(S)}}function r(L,S){if(!e)return null;for(;S!==null;)t(L,S),S=S.sibling;return null}function a(L,S){for(L=new Map;S!==null;)S.key!==null?L.set(S.key,S):L.set(S.index,S),S=S.sibling;return L}function l(L,S){return L=rr(L,S),L.index=0,L.sibling=null,L}function d(L,S,N){return L.index=N,e?(N=L.alternate,N!==null?(N=N.index,N<S?(L.flags|=2,S):N):(L.flags|=2,S)):(L.flags|=1048576,S)}function h(L){return e&&L.alternate===null&&(L.flags|=2),L}function y(L,S,N,U){return S===null||S.tag!==6?(S=ws(N,L.mode,U),S.return=L,S):(S=l(S,N),S.return=L,S)}function C(L,S,N,U){var le=N.type;return le===M?V(L,S,N.props.children,U,N.key):S!==null&&(S.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ce&&cc(le)===S.type)?(U=l(S,N.props),U.ref=Vi(L,S,N),U.return=L,U):(U=jo(N.type,N.key,N.props,null,L.mode,U),U.ref=Vi(L,S,N),U.return=L,U)}function R(L,S,N,U){return S===null||S.tag!==4||S.stateNode.containerInfo!==N.containerInfo||S.stateNode.implementation!==N.implementation?(S=ks(N,L.mode,U),S.return=L,S):(S=l(S,N.children||[]),S.return=L,S)}function V(L,S,N,U,le){return S===null||S.tag!==7?(S=Lr(N,L.mode,U,le),S.return=L,S):(S=l(S,N),S.return=L,S)}function G(L,S,N){if(typeof S=="string"&&S!==""||typeof S=="number")return S=ws(""+S,L.mode,N),S.return=L,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case me:return N=jo(S.type,S.key,S.props,null,L.mode,N),N.ref=Vi(L,null,S),N.return=L,N;case Ee:return S=ks(S,L.mode,N),S.return=L,S;case Ce:var U=S._init;return G(L,U(S._payload),N)}if(pr(S)||te(S))return S=Lr(S,L.mode,N,null),S.return=L,S;Xa(L,S)}return null}function O(L,S,N,U){var le=S!==null?S.key:null;if(typeof N=="string"&&N!==""||typeof N=="number")return le!==null?null:y(L,S,""+N,U);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case me:return N.key===le?C(L,S,N,U):null;case Ee:return N.key===le?R(L,S,N,U):null;case Ce:return le=N._init,O(L,S,le(N._payload),U)}if(pr(N)||te(N))return le!==null?null:V(L,S,N,U,null);Xa(L,N)}return null}function X(L,S,N,U,le){if(typeof U=="string"&&U!==""||typeof U=="number")return L=L.get(N)||null,y(S,L,""+U,le);if(typeof U=="object"&&U!==null){switch(U.$$typeof){case me:return L=L.get(U.key===null?N:U.key)||null,C(S,L,U,le);case Ee:return L=L.get(U.key===null?N:U.key)||null,R(S,L,U,le);case Ce:var pe=U._init;return X(L,S,N,pe(U._payload),le)}if(pr(U)||te(U))return L=L.get(N)||null,V(S,L,U,le,null);Xa(S,U)}return null}function re(L,S,N,U){for(var le=null,pe=null,ue=S,ye=S=0,ft=null;ue!==null&&ye<N.length;ye++){ue.index>ye?(ft=ue,ue=null):ft=ue.sibling;var Re=O(L,ue,N[ye],U);if(Re===null){ue===null&&(ue=ft);break}e&&ue&&Re.alternate===null&&t(L,ue),S=d(Re,S,ye),pe===null?le=Re:pe.sibling=Re,pe=Re,ue=ft}if(ye===N.length)return r(L,ue),Ke&&jr(L,ye),le;if(ue===null){for(;ye<N.length;ye++)ue=G(L,N[ye],U),ue!==null&&(S=d(ue,S,ye),pe===null?le=ue:pe.sibling=ue,pe=ue);return Ke&&jr(L,ye),le}for(ue=a(L,ue);ye<N.length;ye++)ft=X(ue,L,ye,N[ye],U),ft!==null&&(e&&ft.alternate!==null&&ue.delete(ft.key===null?ye:ft.key),S=d(ft,S,ye),pe===null?le=ft:pe.sibling=ft,pe=ft);return e&&ue.forEach(function(ir){return t(L,ir)}),Ke&&jr(L,ye),le}function ae(L,S,N,U){var le=te(N);if(typeof le!="function")throw Error(s(150));if(N=le.call(N),N==null)throw Error(s(151));for(var pe=le=null,ue=S,ye=S=0,ft=null,Re=N.next();ue!==null&&!Re.done;ye++,Re=N.next()){ue.index>ye?(ft=ue,ue=null):ft=ue.sibling;var ir=O(L,ue,Re.value,U);if(ir===null){ue===null&&(ue=ft);break}e&&ue&&ir.alternate===null&&t(L,ue),S=d(ir,S,ye),pe===null?le=ir:pe.sibling=ir,pe=ir,ue=ft}if(Re.done)return r(L,ue),Ke&&jr(L,ye),le;if(ue===null){for(;!Re.done;ye++,Re=N.next())Re=G(L,Re.value,U),Re!==null&&(S=d(Re,S,ye),pe===null?le=Re:pe.sibling=Re,pe=Re);return Ke&&jr(L,ye),le}for(ue=a(L,ue);!Re.done;ye++,Re=N.next())Re=X(ue,L,ye,Re.value,U),Re!==null&&(e&&Re.alternate!==null&&ue.delete(Re.key===null?ye:Re.key),S=d(Re,S,ye),pe===null?le=Re:pe.sibling=Re,pe=Re);return e&&ue.forEach(function(oh){return t(L,oh)}),Ke&&jr(L,ye),le}function tt(L,S,N,U){if(typeof N=="object"&&N!==null&&N.type===M&&N.key===null&&(N=N.props.children),typeof N=="object"&&N!==null){switch(N.$$typeof){case me:e:{for(var le=N.key,pe=S;pe!==null;){if(pe.key===le){if(le=N.type,le===M){if(pe.tag===7){r(L,pe.sibling),S=l(pe,N.props.children),S.return=L,L=S;break e}}else if(pe.elementType===le||typeof le=="object"&&le!==null&&le.$$typeof===Ce&&cc(le)===pe.type){r(L,pe.sibling),S=l(pe,N.props),S.ref=Vi(L,pe,N),S.return=L,L=S;break e}r(L,pe);break}else t(L,pe);pe=pe.sibling}N.type===M?(S=Lr(N.props.children,L.mode,U,N.key),S.return=L,L=S):(U=jo(N.type,N.key,N.props,null,L.mode,U),U.ref=Vi(L,S,N),U.return=L,L=U)}return h(L);case Ee:e:{for(pe=N.key;S!==null;){if(S.key===pe)if(S.tag===4&&S.stateNode.containerInfo===N.containerInfo&&S.stateNode.implementation===N.implementation){r(L,S.sibling),S=l(S,N.children||[]),S.return=L,L=S;break e}else{r(L,S);break}else t(L,S);S=S.sibling}S=ks(N,L.mode,U),S.return=L,L=S}return h(L);case Ce:return pe=N._init,tt(L,S,pe(N._payload),U)}if(pr(N))return re(L,S,N,U);if(te(N))return ae(L,S,N,U);Xa(L,N)}return typeof N=="string"&&N!==""||typeof N=="number"?(N=""+N,S!==null&&S.tag===6?(r(L,S.sibling),S=l(S,N),S.return=L,L=S):(r(L,S),S=ws(N,L.mode,U),S.return=L,L=S),h(L)):r(L,S)}return tt}var ri=pc(!0),uc=pc(!1),Ja=Yn(null),eo=null,ii=null,Ll=null;function Nl(){Ll=ii=eo=null}function Tl(e){var t=Ja.current;Ye(Ja),e._currentValue=t}function Rl(e,t,r){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===r)break;e=e.return}}function ai(e,t){eo=e,Ll=ii=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(At=!0),e.firstContext=null)}function Ut(e){var t=e._currentValue;if(Ll!==e)if(e={context:e,memoizedValue:t,next:null},ii===null){if(eo===null)throw Error(s(308));ii=e,eo.dependencies={lanes:0,firstContext:e}}else ii=ii.next=e;return t}var Cr=null;function Ml(e){Cr===null?Cr=[e]:Cr.push(e)}function fc(e,t,r,a){var l=t.interleaved;return l===null?(r.next=r,Ml(t)):(r.next=l.next,l.next=r),t.interleaved=r,Fn(e,a)}function Fn(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Kn=!1;function Bl(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function hc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function zn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,r){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,(Te&2)!==0){var l=a.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),a.pending=t,Fn(e,r)}return l=a.interleaved,l===null?(t.next=t,Ml(a)):(t.next=l.next,l.next=t),a.interleaved=t,Fn(e,r)}function to(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Ko(e,r)}}function gc(e,t){var r=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,r===a)){var l=null,d=null;if(r=r.firstBaseUpdate,r!==null){do{var h={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};d===null?l=d=h:d=d.next=h,r=r.next}while(r!==null);d===null?l=d=t:d=d.next=t}else l=d=t;r={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:d,shared:a.shared,effects:a.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function no(e,t,r,a){var l=e.updateQueue;Kn=!1;var d=l.firstBaseUpdate,h=l.lastBaseUpdate,y=l.shared.pending;if(y!==null){l.shared.pending=null;var C=y,R=C.next;C.next=null,h===null?d=R:h.next=R,h=C;var V=e.alternate;V!==null&&(V=V.updateQueue,y=V.lastBaseUpdate,y!==h&&(y===null?V.firstBaseUpdate=R:y.next=R,V.lastBaseUpdate=C))}if(d!==null){var G=l.baseState;h=0,V=R=C=null,y=d;do{var O=y.lane,X=y.eventTime;if((a&O)===O){V!==null&&(V=V.next={eventTime:X,lane:0,tag:y.tag,payload:y.payload,callback:y.callback,next:null});e:{var re=e,ae=y;switch(O=t,X=r,ae.tag){case 1:if(re=ae.payload,typeof re=="function"){G=re.call(X,G,O);break e}G=re;break e;case 3:re.flags=re.flags&-65537|128;case 0:if(re=ae.payload,O=typeof re=="function"?re.call(X,G,O):re,O==null)break e;G=Z({},G,O);break e;case 2:Kn=!0}}y.callback!==null&&y.lane!==0&&(e.flags|=64,O=l.effects,O===null?l.effects=[y]:O.push(y))}else X={eventTime:X,lane:O,tag:y.tag,payload:y.payload,callback:y.callback,next:null},V===null?(R=V=X,C=G):V=V.next=X,h|=O;if(y=y.next,y===null){if(y=l.shared.pending,y===null)break;O=y,y=O.next,O.next=null,l.lastBaseUpdate=O,l.shared.pending=null}}while(!0);if(V===null&&(C=G),l.baseState=C,l.firstBaseUpdate=R,l.lastBaseUpdate=V,t=l.shared.interleaved,t!==null){l=t;do h|=l.lane,l=l.next;while(l!==t)}else d===null&&(l.shared.lanes=0);Fr|=h,e.lanes=h,e.memoizedState=G}}function xc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],l=a.callback;if(l!==null){if(a.callback=null,a=r,typeof l!="function")throw Error(s(191,l));l.call(a)}}}var $i={},un=Yn($i),Gi=Yn($i),Ui=Yn($i);function Er(e){if(e===$i)throw Error(s(174));return e}function Dl(e,t){switch($e(Ui,t),$e(Gi,e),$e(un,$i),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ur(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ur(t,e)}Ye(un),$e(un,t)}function oi(){Ye(un),Ye(Gi),Ye(Ui)}function mc(e){Er(Ui.current);var t=Er(un.current),r=ur(t,e.type);t!==r&&($e(Gi,e),$e(un,r))}function Pl(e){Gi.current===e&&(Ye(un),Ye(Gi))}var Qe=Yn(0);function ro(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _l=[];function Hl(){for(var e=0;e<_l.length;e++)_l[e]._workInProgressVersionPrimary=null;_l.length=0}var io=ge.ReactCurrentDispatcher,Ol=ge.ReactCurrentBatchConfig,Sr=0,Xe=null,st=null,pt=null,ao=!1,Yi=!1,qi=0,zf=0;function mt(){throw Error(s(321))}function Wl(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!en(e[r],t[r]))return!1;return!0}function Vl(e,t,r,a,l,d){if(Sr=d,Xe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,io.current=e===null||e.memoizedState===null?Nf:Tf,e=r(a,l),Yi){d=0;do{if(Yi=!1,qi=0,25<=d)throw Error(s(301));d+=1,pt=st=null,t.updateQueue=null,io.current=Rf,e=r(a,l)}while(Yi)}if(io.current=so,t=st!==null&&st.next!==null,Sr=0,pt=st=Xe=null,ao=!1,t)throw Error(s(300));return e}function $l(){var e=qi!==0;return qi=0,e}function fn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return pt===null?Xe.memoizedState=pt=e:pt=pt.next=e,pt}function Yt(){if(st===null){var e=Xe.alternate;e=e!==null?e.memoizedState:null}else e=st.next;var t=pt===null?Xe.memoizedState:pt.next;if(t!==null)pt=t,st=e;else{if(e===null)throw Error(s(310));st=e,e={memoizedState:st.memoizedState,baseState:st.baseState,baseQueue:st.baseQueue,queue:st.queue,next:null},pt===null?Xe.memoizedState=pt=e:pt=pt.next=e}return pt}function Zi(e,t){return typeof t=="function"?t(e):t}function Gl(e){var t=Yt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var a=st,l=a.baseQueue,d=r.pending;if(d!==null){if(l!==null){var h=l.next;l.next=d.next,d.next=h}a.baseQueue=l=d,r.pending=null}if(l!==null){d=l.next,a=a.baseState;var y=h=null,C=null,R=d;do{var V=R.lane;if((Sr&V)===V)C!==null&&(C=C.next={lane:0,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null}),a=R.hasEagerState?R.eagerState:e(a,R.action);else{var G={lane:V,action:R.action,hasEagerState:R.hasEagerState,eagerState:R.eagerState,next:null};C===null?(y=C=G,h=a):C=C.next=G,Xe.lanes|=V,Fr|=V}R=R.next}while(R!==null&&R!==d);C===null?h=a:C.next=y,en(a,t.memoizedState)||(At=!0),t.memoizedState=a,t.baseState=h,t.baseQueue=C,r.lastRenderedState=a}if(e=r.interleaved,e!==null){l=e;do d=l.lane,Xe.lanes|=d,Fr|=d,l=l.next;while(l!==e)}else l===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Ul(e){var t=Yt(),r=t.queue;if(r===null)throw Error(s(311));r.lastRenderedReducer=e;var a=r.dispatch,l=r.pending,d=t.memoizedState;if(l!==null){r.pending=null;var h=l=l.next;do d=e(d,h.action),h=h.next;while(h!==l);en(d,t.memoizedState)||(At=!0),t.memoizedState=d,t.baseQueue===null&&(t.baseState=d),r.lastRenderedState=d}return[d,a]}function vc(){}function yc(e,t){var r=Xe,a=Yt(),l=t(),d=!en(a.memoizedState,l);if(d&&(a.memoizedState=l,At=!0),a=a.queue,Yl(kc.bind(null,r,a,e),[e]),a.getSnapshot!==t||d||pt!==null&&pt.memoizedState.tag&1){if(r.flags|=2048,Ki(9,wc.bind(null,r,a,l,t),void 0,null),ut===null)throw Error(s(349));(Sr&30)!==0||bc(r,t,l)}return l}function bc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function wc(e,t,r,a){t.value=r,t.getSnapshot=a,jc(t)&&Cc(e)}function kc(e,t,r){return r(function(){jc(t)&&Cc(e)})}function jc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!en(e,r)}catch{return!0}}function Cc(e){var t=Fn(e,1);t!==null&&on(t,e,1,-1)}function Ec(e){var t=fn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Zi,lastRenderedState:e},t.queue=e,e=e.dispatch=Lf.bind(null,Xe,e),[t.memoizedState,e]}function Ki(e,t,r,a){return e={tag:e,create:t,destroy:r,deps:a,next:null},t=Xe.updateQueue,t===null?(t={lastEffect:null,stores:null},Xe.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(a=r.next,r.next=e,e.next=a,t.lastEffect=e)),e}function Sc(){return Yt().memoizedState}function oo(e,t,r,a){var l=fn();Xe.flags|=e,l.memoizedState=Ki(1|t,r,void 0,a===void 0?null:a)}function lo(e,t,r,a){var l=Yt();a=a===void 0?null:a;var d=void 0;if(st!==null){var h=st.memoizedState;if(d=h.destroy,a!==null&&Wl(a,h.deps)){l.memoizedState=Ki(t,r,d,a);return}}Xe.flags|=e,l.memoizedState=Ki(1|t,r,d,a)}function Fc(e,t){return oo(8390656,8,e,t)}function Yl(e,t){return lo(2048,8,e,t)}function zc(e,t){return lo(4,2,e,t)}function Ac(e,t){return lo(4,4,e,t)}function Ic(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Lc(e,t,r){return r=r!=null?r.concat([e]):null,lo(4,4,Ic.bind(null,t,e),r)}function ql(){}function Nc(e,t){var r=Yt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Wl(t,a[1])?a[0]:(r.memoizedState=[e,t],e)}function Tc(e,t){var r=Yt();t=t===void 0?null:t;var a=r.memoizedState;return a!==null&&t!==null&&Wl(t,a[1])?a[0]:(e=e(),r.memoizedState=[e,t],e)}function Rc(e,t,r){return(Sr&21)===0?(e.baseState&&(e.baseState=!1,At=!0),e.memoizedState=r):(en(r,t)||(r=cd(),Xe.lanes|=r,Fr|=r,e.baseState=!0),t)}function Af(e,t){var r=He;He=r!==0&&4>r?r:4,e(!0);var a=Ol.transition;Ol.transition={};try{e(!1),t()}finally{He=r,Ol.transition=a}}function Mc(){return Yt().memoizedState}function If(e,t,r){var a=tr(e);if(r={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null},Bc(e))Dc(t,r);else if(r=fc(e,t,r,a),r!==null){var l=Ct();on(r,e,a,l),Pc(r,t,a)}}function Lf(e,t,r){var a=tr(e),l={lane:a,action:r,hasEagerState:!1,eagerState:null,next:null};if(Bc(e))Dc(t,l);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=t.lastRenderedReducer,d!==null))try{var h=t.lastRenderedState,y=d(h,r);if(l.hasEagerState=!0,l.eagerState=y,en(y,h)){var C=t.interleaved;C===null?(l.next=l,Ml(t)):(l.next=C.next,C.next=l),t.interleaved=l;return}}catch{}finally{}r=fc(e,t,l,a),r!==null&&(l=Ct(),on(r,e,a,l),Pc(r,t,a))}}function Bc(e){var t=e.alternate;return e===Xe||t!==null&&t===Xe}function Dc(e,t){Yi=ao=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Pc(e,t,r){if((r&4194240)!==0){var a=t.lanes;a&=e.pendingLanes,r|=a,t.lanes=r,Ko(e,r)}}var so={readContext:Ut,useCallback:mt,useContext:mt,useEffect:mt,useImperativeHandle:mt,useInsertionEffect:mt,useLayoutEffect:mt,useMemo:mt,useReducer:mt,useRef:mt,useState:mt,useDebugValue:mt,useDeferredValue:mt,useTransition:mt,useMutableSource:mt,useSyncExternalStore:mt,useId:mt,unstable_isNewReconciler:!1},Nf={readContext:Ut,useCallback:function(e,t){return fn().memoizedState=[e,t===void 0?null:t],e},useContext:Ut,useEffect:Fc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,oo(4194308,4,Ic.bind(null,t,e),r)},useLayoutEffect:function(e,t){return oo(4194308,4,e,t)},useInsertionEffect:function(e,t){return oo(4,2,e,t)},useMemo:function(e,t){var r=fn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var a=fn();return t=r!==void 0?r(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=If.bind(null,Xe,e),[a.memoizedState,e]},useRef:function(e){var t=fn();return e={current:e},t.memoizedState=e},useState:Ec,useDebugValue:ql,useDeferredValue:function(e){return fn().memoizedState=e},useTransition:function(){var e=Ec(!1),t=e[0];return e=Af.bind(null,e[1]),fn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var a=Xe,l=fn();if(Ke){if(r===void 0)throw Error(s(407));r=r()}else{if(r=t(),ut===null)throw Error(s(349));(Sr&30)!==0||bc(a,t,r)}l.memoizedState=r;var d={value:r,getSnapshot:t};return l.queue=d,Fc(kc.bind(null,a,d,e),[e]),a.flags|=2048,Ki(9,wc.bind(null,a,d,r,t),void 0,null),r},useId:function(){var e=fn(),t=ut.identifierPrefix;if(Ke){var r=Sn,a=En;r=(a&~(1<<32-Oe(a)-1)).toString(32)+r,t=":"+t+"R"+r,r=qi++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=zf++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Tf={readContext:Ut,useCallback:Nc,useContext:Ut,useEffect:Yl,useImperativeHandle:Lc,useInsertionEffect:zc,useLayoutEffect:Ac,useMemo:Tc,useReducer:Gl,useRef:Sc,useState:function(){return Gl(Zi)},useDebugValue:ql,useDeferredValue:function(e){var t=Yt();return Rc(t,st.memoizedState,e)},useTransition:function(){var e=Gl(Zi)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Mc,unstable_isNewReconciler:!1},Rf={readContext:Ut,useCallback:Nc,useContext:Ut,useEffect:Yl,useImperativeHandle:Lc,useInsertionEffect:zc,useLayoutEffect:Ac,useMemo:Tc,useReducer:Ul,useRef:Sc,useState:function(){return Ul(Zi)},useDebugValue:ql,useDeferredValue:function(e){var t=Yt();return st===null?t.memoizedState=e:Rc(t,st.memoizedState,e)},useTransition:function(){var e=Ul(Zi)[0],t=Yt().memoizedState;return[e,t]},useMutableSource:vc,useSyncExternalStore:yc,useId:Mc,unstable_isNewReconciler:!1};function nn(e,t){if(e&&e.defaultProps){t=Z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Zl(e,t,r,a){t=e.memoizedState,r=r(a,t),r=r==null?t:Z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var co={isMounted:function(e){return(e=e._reactInternals)?ie(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var a=Ct(),l=tr(e),d=zn(a,l);d.payload=t,r!=null&&(d.callback=r),t=Qn(e,d,l),t!==null&&(on(t,e,l,a),to(t,e,l))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var a=Ct(),l=tr(e),d=zn(a,l);d.tag=1,d.payload=t,r!=null&&(d.callback=r),t=Qn(e,d,l),t!==null&&(on(t,e,l,a),to(t,e,l))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ct(),a=tr(e),l=zn(r,a);l.tag=2,t!=null&&(l.callback=t),t=Qn(e,l,a),t!==null&&(on(t,e,a,r),to(t,e,a))}};function _c(e,t,r,a,l,d,h){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,d,h):t.prototype&&t.prototype.isPureReactComponent?!Bi(r,a)||!Bi(l,d):!0}function Hc(e,t,r){var a=!1,l=qn,d=t.contextType;return typeof d=="object"&&d!==null?d=Ut(d):(l=zt(t)?wr:xt.current,a=t.contextTypes,d=(a=a!=null)?Jr(e,l):qn),t=new t(r,d),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=co,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=l,e.__reactInternalMemoizedMaskedChildContext=d),t}function Oc(e,t,r,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,a),t.state!==e&&co.enqueueReplaceState(t,t.state,null)}function Kl(e,t,r,a){var l=e.stateNode;l.props=r,l.state=e.memoizedState,l.refs={},Bl(e);var d=t.contextType;typeof d=="object"&&d!==null?l.context=Ut(d):(d=zt(t)?wr:xt.current,l.context=Jr(e,d)),l.state=e.memoizedState,d=t.getDerivedStateFromProps,typeof d=="function"&&(Zl(e,t,d,r),l.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(t=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),t!==l.state&&co.enqueueReplaceState(l,l.state,null),no(e,r,l,a),l.state=e.memoizedState),typeof l.componentDidMount=="function"&&(e.flags|=4194308)}function li(e,t){try{var r="",a=t;do r+=he(a),a=a.return;while(a);var l=r}catch(d){l=`
Error generating stack: `+d.message+`
`+d.stack}return{value:e,source:t,stack:l,digest:null}}function Ql(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function Xl(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Mf=typeof WeakMap=="function"?WeakMap:Map;function Wc(e,t,r){r=zn(-1,r),r.tag=3,r.payload={element:null};var a=t.value;return r.callback=function(){mo||(mo=!0,fs=a),Xl(e,t)},r}function Vc(e,t,r){r=zn(-1,r),r.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var l=t.value;r.payload=function(){return a(l)},r.callback=function(){Xl(e,t)}}var d=e.stateNode;return d!==null&&typeof d.componentDidCatch=="function"&&(r.callback=function(){Xl(e,t),typeof a!="function"&&(Jn===null?Jn=new Set([this]):Jn.add(this));var h=t.stack;this.componentDidCatch(t.value,{componentStack:h!==null?h:""})}),r}function $c(e,t,r){var a=e.pingCache;if(a===null){a=e.pingCache=new Mf;var l=new Set;a.set(t,l)}else l=a.get(t),l===void 0&&(l=new Set,a.set(t,l));l.has(r)||(l.add(r),e=Zf.bind(null,e,t,r),t.then(e,e))}function Gc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Uc(e,t,r,a,l){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=zn(-1,1),t.tag=2,Qn(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=l,e)}var Bf=ge.ReactCurrentOwner,At=!1;function jt(e,t,r,a){t.child=e===null?uc(t,null,r,a):ri(t,e.child,r,a)}function Yc(e,t,r,a,l){r=r.render;var d=t.ref;return ai(t,l),a=Vl(e,t,r,a,d,l),r=$l(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,An(e,t,l)):(Ke&&r&&Sl(t),t.flags|=1,jt(e,t,a,l),t.child)}function qc(e,t,r,a,l){if(e===null){var d=r.type;return typeof d=="function"&&!bs(d)&&d.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=d,Zc(e,t,d,a,l)):(e=jo(r.type,null,a,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(d=e.child,(e.lanes&l)===0){var h=d.memoizedProps;if(r=r.compare,r=r!==null?r:Bi,r(h,a)&&e.ref===t.ref)return An(e,t,l)}return t.flags|=1,e=rr(d,a),e.ref=t.ref,e.return=t,t.child=e}function Zc(e,t,r,a,l){if(e!==null){var d=e.memoizedProps;if(Bi(d,a)&&e.ref===t.ref)if(At=!1,t.pendingProps=a=d,(e.lanes&l)!==0)(e.flags&131072)!==0&&(At=!0);else return t.lanes=e.lanes,An(e,t,l)}return Jl(e,t,r,a,l)}function Kc(e,t,r){var a=t.pendingProps,l=a.children,d=e!==null?e.memoizedState:null;if(a.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},$e(di,Pt),Pt|=r;else{if((r&1073741824)===0)return e=d!==null?d.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,$e(di,Pt),Pt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=d!==null?d.baseLanes:r,$e(di,Pt),Pt|=a}else d!==null?(a=d.baseLanes|r,t.memoizedState=null):a=r,$e(di,Pt),Pt|=a;return jt(e,t,l,r),t.child}function Qc(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function Jl(e,t,r,a,l){var d=zt(r)?wr:xt.current;return d=Jr(t,d),ai(t,l),r=Vl(e,t,r,a,d,l),a=$l(),e!==null&&!At?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~l,An(e,t,l)):(Ke&&a&&Sl(t),t.flags|=1,jt(e,t,r,l),t.child)}function Xc(e,t,r,a,l){if(zt(r)){var d=!0;Ya(t)}else d=!1;if(ai(t,l),t.stateNode===null)uo(e,t),Hc(t,r,a),Kl(t,r,a,l),a=!0;else if(e===null){var h=t.stateNode,y=t.memoizedProps;h.props=y;var C=h.context,R=r.contextType;typeof R=="object"&&R!==null?R=Ut(R):(R=zt(r)?wr:xt.current,R=Jr(t,R));var V=r.getDerivedStateFromProps,G=typeof V=="function"||typeof h.getSnapshotBeforeUpdate=="function";G||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==a||C!==R)&&Oc(t,h,a,R),Kn=!1;var O=t.memoizedState;h.state=O,no(t,a,h,l),C=t.memoizedState,y!==a||O!==C||Ft.current||Kn?(typeof V=="function"&&(Zl(t,r,V,a),C=t.memoizedState),(y=Kn||_c(t,r,y,a,O,C,R))?(G||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount()),typeof h.componentDidMount=="function"&&(t.flags|=4194308)):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=C),h.props=a,h.state=C,h.context=R,a=y):(typeof h.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{h=t.stateNode,hc(e,t),y=t.memoizedProps,R=t.type===t.elementType?y:nn(t.type,y),h.props=R,G=t.pendingProps,O=h.context,C=r.contextType,typeof C=="object"&&C!==null?C=Ut(C):(C=zt(r)?wr:xt.current,C=Jr(t,C));var X=r.getDerivedStateFromProps;(V=typeof X=="function"||typeof h.getSnapshotBeforeUpdate=="function")||typeof h.UNSAFE_componentWillReceiveProps!="function"&&typeof h.componentWillReceiveProps!="function"||(y!==G||O!==C)&&Oc(t,h,a,C),Kn=!1,O=t.memoizedState,h.state=O,no(t,a,h,l);var re=t.memoizedState;y!==G||O!==re||Ft.current||Kn?(typeof X=="function"&&(Zl(t,r,X,a),re=t.memoizedState),(R=Kn||_c(t,r,R,a,O,re,C)||!1)?(V||typeof h.UNSAFE_componentWillUpdate!="function"&&typeof h.componentWillUpdate!="function"||(typeof h.componentWillUpdate=="function"&&h.componentWillUpdate(a,re,C),typeof h.UNSAFE_componentWillUpdate=="function"&&h.UNSAFE_componentWillUpdate(a,re,C)),typeof h.componentDidUpdate=="function"&&(t.flags|=4),typeof h.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=re),h.props=a,h.state=re,h.context=C,a=R):(typeof h.componentDidUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=4),typeof h.getSnapshotBeforeUpdate!="function"||y===e.memoizedProps&&O===e.memoizedState||(t.flags|=1024),a=!1)}return es(e,t,r,a,d,l)}function es(e,t,r,a,l,d){Qc(e,t);var h=(t.flags&128)!==0;if(!a&&!h)return l&&rc(t,r,!1),An(e,t,d);a=t.stateNode,Bf.current=t;var y=h&&typeof r.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&h?(t.child=ri(t,e.child,null,d),t.child=ri(t,null,y,d)):jt(e,t,y,d),t.memoizedState=a.state,l&&rc(t,r,!0),t.child}function Jc(e){var t=e.stateNode;t.pendingContext?tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&tc(e,t.context,!1),Dl(e,t.containerInfo)}function ep(e,t,r,a,l){return ni(),Il(l),t.flags|=256,jt(e,t,r,a),t.child}var ts={dehydrated:null,treeContext:null,retryLane:0};function ns(e){return{baseLanes:e,cachePool:null,transitions:null}}function tp(e,t,r){var a=t.pendingProps,l=Qe.current,d=!1,h=(t.flags&128)!==0,y;if((y=h)||(y=e!==null&&e.memoizedState===null?!1:(l&2)!==0),y?(d=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(l|=1),$e(Qe,l&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(h=a.children,e=a.fallback,d?(a=t.mode,d=t.child,h={mode:"hidden",children:h},(a&1)===0&&d!==null?(d.childLanes=0,d.pendingProps=h):d=Co(h,a,0,null),e=Lr(e,a,r,null),d.return=t,e.return=t,d.sibling=e,t.child=d,t.child.memoizedState=ns(r),t.memoizedState=ts,e):rs(t,h));if(l=e.memoizedState,l!==null&&(y=l.dehydrated,y!==null))return Df(e,t,h,a,y,l,r);if(d){d=a.fallback,h=t.mode,l=e.child,y=l.sibling;var C={mode:"hidden",children:a.children};return(h&1)===0&&t.child!==l?(a=t.child,a.childLanes=0,a.pendingProps=C,t.deletions=null):(a=rr(l,C),a.subtreeFlags=l.subtreeFlags&14680064),y!==null?d=rr(y,d):(d=Lr(d,h,r,null),d.flags|=2),d.return=t,a.return=t,a.sibling=d,t.child=a,a=d,d=t.child,h=e.child.memoizedState,h=h===null?ns(r):{baseLanes:h.baseLanes|r,cachePool:null,transitions:h.transitions},d.memoizedState=h,d.childLanes=e.childLanes&~r,t.memoizedState=ts,a}return d=e.child,e=d.sibling,a=rr(d,{mode:"visible",children:a.children}),(t.mode&1)===0&&(a.lanes=r),a.return=t,a.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=a,t.memoizedState=null,a}function rs(e,t){return t=Co({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function po(e,t,r,a){return a!==null&&Il(a),ri(t,e.child,null,r),e=rs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Df(e,t,r,a,l,d,h){if(r)return t.flags&256?(t.flags&=-257,a=Ql(Error(s(422))),po(e,t,h,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(d=a.fallback,l=t.mode,a=Co({mode:"visible",children:a.children},l,0,null),d=Lr(d,l,h,null),d.flags|=2,a.return=t,d.return=t,a.sibling=d,t.child=a,(t.mode&1)!==0&&ri(t,e.child,null,h),t.child.memoizedState=ns(h),t.memoizedState=ts,d);if((t.mode&1)===0)return po(e,t,h,null);if(l.data==="$!"){if(a=l.nextSibling&&l.nextSibling.dataset,a)var y=a.dgst;return a=y,d=Error(s(419)),a=Ql(d,a,void 0),po(e,t,h,a)}if(y=(h&e.childLanes)!==0,At||y){if(a=ut,a!==null){switch(h&-h){case 4:l=2;break;case 16:l=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:l=32;break;case 536870912:l=268435456;break;default:l=0}l=(l&(a.suspendedLanes|h))!==0?0:l,l!==0&&l!==d.retryLane&&(d.retryLane=l,Fn(e,l),on(a,e,l,-1))}return ys(),a=Ql(Error(s(421))),po(e,t,h,a)}return l.data==="$?"?(t.flags|=128,t.child=e.child,t=Kf.bind(null,e),l._reactRetry=t,null):(e=d.treeContext,Dt=Un(l.nextSibling),Bt=t,Ke=!0,tn=null,e!==null&&($t[Gt++]=En,$t[Gt++]=Sn,$t[Gt++]=kr,En=e.id,Sn=e.overflow,kr=t),t=rs(t,a.children),t.flags|=4096,t)}function np(e,t,r){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),Rl(e.return,t,r)}function is(e,t,r,a,l){var d=e.memoizedState;d===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:r,tailMode:l}:(d.isBackwards=t,d.rendering=null,d.renderingStartTime=0,d.last=a,d.tail=r,d.tailMode=l)}function rp(e,t,r){var a=t.pendingProps,l=a.revealOrder,d=a.tail;if(jt(e,t,a.children,r),a=Qe.current,(a&2)!==0)a=a&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&np(e,r,t);else if(e.tag===19)np(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if($e(Qe,a),(t.mode&1)===0)t.memoizedState=null;else switch(l){case"forwards":for(r=t.child,l=null;r!==null;)e=r.alternate,e!==null&&ro(e)===null&&(l=r),r=r.sibling;r=l,r===null?(l=t.child,t.child=null):(l=r.sibling,r.sibling=null),is(t,!1,l,r,d);break;case"backwards":for(r=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&ro(e)===null){t.child=l;break}e=l.sibling,l.sibling=r,r=l,l=e}is(t,!0,r,null,d);break;case"together":is(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function uo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function An(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Fr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(s(153));if(t.child!==null){for(e=t.child,r=rr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=rr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Pf(e,t,r){switch(t.tag){case 3:Jc(t),ni();break;case 5:mc(t);break;case 1:zt(t.type)&&Ya(t);break;case 4:Dl(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,l=t.memoizedProps.value;$e(Ja,a._currentValue),a._currentValue=l;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?($e(Qe,Qe.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?tp(e,t,r):($e(Qe,Qe.current&1),e=An(e,t,r),e!==null?e.sibling:null);$e(Qe,Qe.current&1);break;case 19:if(a=(r&t.childLanes)!==0,(e.flags&128)!==0){if(a)return rp(e,t,r);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),$e(Qe,Qe.current),a)break;return null;case 22:case 23:return t.lanes=0,Kc(e,t,r)}return An(e,t,r)}var ip,as,ap,op;ip=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},as=function(){},ap=function(e,t,r,a){var l=e.memoizedProps;if(l!==a){e=t.stateNode,Er(un.current);var d=null;switch(r){case"input":l=_r(e,l),a=_r(e,a),d=[];break;case"select":l=Z({},l,{value:void 0}),a=Z({},a,{value:void 0}),d=[];break;case"textarea":l=mi(e,l),a=mi(e,a),d=[];break;default:typeof l.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=$a)}Or(r,a);var h;r=null;for(R in l)if(!a.hasOwnProperty(R)&&l.hasOwnProperty(R)&&l[R]!=null)if(R==="style"){var y=l[R];for(h in y)y.hasOwnProperty(h)&&(r||(r={}),r[h]="")}else R!=="dangerouslySetInnerHTML"&&R!=="children"&&R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&R!=="autoFocus"&&(c.hasOwnProperty(R)?d||(d=[]):(d=d||[]).push(R,null));for(R in a){var C=a[R];if(y=l!=null?l[R]:void 0,a.hasOwnProperty(R)&&C!==y&&(C!=null||y!=null))if(R==="style")if(y){for(h in y)!y.hasOwnProperty(h)||C&&C.hasOwnProperty(h)||(r||(r={}),r[h]="");for(h in C)C.hasOwnProperty(h)&&y[h]!==C[h]&&(r||(r={}),r[h]=C[h])}else r||(d||(d=[]),d.push(R,r)),r=C;else R==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,y=y?y.__html:void 0,C!=null&&y!==C&&(d=d||[]).push(R,C)):R==="children"?typeof C!="string"&&typeof C!="number"||(d=d||[]).push(R,""+C):R!=="suppressContentEditableWarning"&&R!=="suppressHydrationWarning"&&(c.hasOwnProperty(R)?(C!=null&&R==="onScroll"&&Ue("scroll",e),d||y===C||(d=[])):(d=d||[]).push(R,C))}r&&(d=d||[]).push("style",r);var R=d;(t.updateQueue=R)&&(t.flags|=4)}},op=function(e,t,r,a){r!==a&&(t.flags|=4)};function Qi(e,t){if(!Ke)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var a=null;r!==null;)r.alternate!==null&&(a=r),r=r.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function vt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,a=0;if(t)for(var l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags&14680064,a|=l.flags&14680064,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)r|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=a,e.childLanes=r,t}function _f(e,t,r){var a=t.pendingProps;switch(Fl(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vt(t),null;case 1:return zt(t.type)&&Ua(),vt(t),null;case 3:return a=t.stateNode,oi(),Ye(Ft),Ye(xt),Hl(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Qa(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,tn!==null&&(xs(tn),tn=null))),as(e,t),vt(t),null;case 5:Pl(t);var l=Er(Ui.current);if(r=t.type,e!==null&&t.stateNode!=null)ap(e,t,r,a,l),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(s(166));return vt(t),null}if(e=Er(un.current),Qa(t)){a=t.stateNode,r=t.type;var d=t.memoizedProps;switch(a[pn]=t,a[Oi]=d,e=(t.mode&1)!==0,r){case"dialog":Ue("cancel",a),Ue("close",a);break;case"iframe":case"object":case"embed":Ue("load",a);break;case"video":case"audio":for(l=0;l<Pi.length;l++)Ue(Pi[l],a);break;case"source":Ue("error",a);break;case"img":case"image":case"link":Ue("error",a),Ue("load",a);break;case"details":Ue("toggle",a);break;case"input":ka(a,d),Ue("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!d.multiple},Ue("invalid",a);break;case"textarea":Ca(a,d),Ue("invalid",a)}Or(r,d),l=null;for(var h in d)if(d.hasOwnProperty(h)){var y=d[h];h==="children"?typeof y=="string"?a.textContent!==y&&(d.suppressHydrationWarning!==!0&&Va(a.textContent,y,e),l=["children",y]):typeof y=="number"&&a.textContent!==""+y&&(d.suppressHydrationWarning!==!0&&Va(a.textContent,y,e),l=["children",""+y]):c.hasOwnProperty(h)&&y!=null&&h==="onScroll"&&Ue("scroll",a)}switch(r){case"input":Pr(a),ja(a,d,!0);break;case"textarea":Pr(a),Rn(a);break;case"select":case"option":break;default:typeof d.onClick=="function"&&(a.onclick=$a)}a=l,t.updateQueue=a,a!==null&&(t.flags|=4)}else{h=l.nodeType===9?l:l.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vi(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=h.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=h.createElement(r,{is:a.is}):(e=h.createElement(r),r==="select"&&(h=e,a.multiple?h.multiple=!0:a.size&&(h.size=a.size))):e=h.createElementNS(e,r),e[pn]=t,e[Oi]=a,ip(e,t,!1,!1),t.stateNode=e;e:{switch(h=Wr(r,a),r){case"dialog":Ue("cancel",e),Ue("close",e),l=a;break;case"iframe":case"object":case"embed":Ue("load",e),l=a;break;case"video":case"audio":for(l=0;l<Pi.length;l++)Ue(Pi[l],e);l=a;break;case"source":Ue("error",e),l=a;break;case"img":case"image":case"link":Ue("error",e),Ue("load",e),l=a;break;case"details":Ue("toggle",e),l=a;break;case"input":ka(e,a),l=_r(e,a),Ue("invalid",e);break;case"option":l=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},l=Z({},a,{value:void 0}),Ue("invalid",e);break;case"textarea":Ca(e,a),l=mi(e,a),Ue("invalid",e);break;default:l=a}Or(r,l),y=l;for(d in y)if(y.hasOwnProperty(d)){var C=y[d];d==="style"?Wt(e,C):d==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&Ot(e,C)):d==="children"?typeof C=="string"?(r!=="textarea"||C!=="")&&Mn(e,C):typeof C=="number"&&Mn(e,""+C):d!=="suppressContentEditableWarning"&&d!=="suppressHydrationWarning"&&d!=="autoFocus"&&(c.hasOwnProperty(d)?C!=null&&d==="onScroll"&&Ue("scroll",e):C!=null&&K(e,d,C,h))}switch(r){case"input":Pr(e),ja(e,a,!1);break;case"textarea":Pr(e),Rn(e);break;case"option":a.value!=null&&e.setAttribute("value",""+Ae(a.value));break;case"select":e.multiple=!!a.multiple,d=a.value,d!=null?Tn(e,!!a.multiple,d,!1):a.defaultValue!=null&&Tn(e,!!a.multiple,a.defaultValue,!0);break;default:typeof l.onClick=="function"&&(e.onclick=$a)}switch(r){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return vt(t),null;case 6:if(e&&t.stateNode!=null)op(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(s(166));if(r=Er(Ui.current),Er(un.current),Qa(t)){if(a=t.stateNode,r=t.memoizedProps,a[pn]=t,(d=a.nodeValue!==r)&&(e=Bt,e!==null))switch(e.tag){case 3:Va(a.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Va(a.nodeValue,r,(e.mode&1)!==0)}d&&(t.flags|=4)}else a=(r.nodeType===9?r:r.ownerDocument).createTextNode(a),a[pn]=t,t.stateNode=a}return vt(t),null;case 13:if(Ye(Qe),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ke&&Dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)dc(),ni(),t.flags|=98560,d=!1;else if(d=Qa(t),a!==null&&a.dehydrated!==null){if(e===null){if(!d)throw Error(s(318));if(d=t.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(s(317));d[pn]=t}else ni(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;vt(t),d=!1}else tn!==null&&(xs(tn),tn=null),d=!0;if(!d)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Qe.current&1)!==0?dt===0&&(dt=3):ys())),t.updateQueue!==null&&(t.flags|=4),vt(t),null);case 4:return oi(),as(e,t),e===null&&_i(t.stateNode.containerInfo),vt(t),null;case 10:return Tl(t.type._context),vt(t),null;case 17:return zt(t.type)&&Ua(),vt(t),null;case 19:if(Ye(Qe),d=t.memoizedState,d===null)return vt(t),null;if(a=(t.flags&128)!==0,h=d.rendering,h===null)if(a)Qi(d,!1);else{if(dt!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(h=ro(e),h!==null){for(t.flags|=128,Qi(d,!1),a=h.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=r,r=t.child;r!==null;)d=r,e=a,d.flags&=14680066,h=d.alternate,h===null?(d.childLanes=0,d.lanes=e,d.child=null,d.subtreeFlags=0,d.memoizedProps=null,d.memoizedState=null,d.updateQueue=null,d.dependencies=null,d.stateNode=null):(d.childLanes=h.childLanes,d.lanes=h.lanes,d.child=h.child,d.subtreeFlags=0,d.deletions=null,d.memoizedProps=h.memoizedProps,d.memoizedState=h.memoizedState,d.updateQueue=h.updateQueue,d.type=h.type,e=h.dependencies,d.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return $e(Qe,Qe.current&1|2),t.child}e=e.sibling}d.tail!==null&&_e()>ci&&(t.flags|=128,a=!0,Qi(d,!1),t.lanes=4194304)}else{if(!a)if(e=ro(h),e!==null){if(t.flags|=128,a=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Qi(d,!0),d.tail===null&&d.tailMode==="hidden"&&!h.alternate&&!Ke)return vt(t),null}else 2*_e()-d.renderingStartTime>ci&&r!==1073741824&&(t.flags|=128,a=!0,Qi(d,!1),t.lanes=4194304);d.isBackwards?(h.sibling=t.child,t.child=h):(r=d.last,r!==null?r.sibling=h:t.child=h,d.last=h)}return d.tail!==null?(t=d.tail,d.rendering=t,d.tail=t.sibling,d.renderingStartTime=_e(),t.sibling=null,r=Qe.current,$e(Qe,a?r&1|2:r&1),t):(vt(t),null);case 22:case 23:return vs(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&(t.mode&1)!==0?(Pt&1073741824)!==0&&(vt(t),t.subtreeFlags&6&&(t.flags|=8192)):vt(t),null;case 24:return null;case 25:return null}throw Error(s(156,t.tag))}function Hf(e,t){switch(Fl(t),t.tag){case 1:return zt(t.type)&&Ua(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return oi(),Ye(Ft),Ye(xt),Hl(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Pl(t),null;case 13:if(Ye(Qe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(s(340));ni()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ye(Qe),null;case 4:return oi(),null;case 10:return Tl(t.type._context),null;case 22:case 23:return vs(),null;case 24:return null;default:return null}}var fo=!1,yt=!1,Of=typeof WeakSet=="function"?WeakSet:Set,ee=null;function si(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(a){Je(e,t,a)}else r.current=null}function os(e,t,r){try{r()}catch(a){Je(e,t,a)}}var lp=!1;function Wf(e,t){if(vl=Na,e=_d(),cl(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var a=r.getSelection&&r.getSelection();if(a&&a.rangeCount!==0){r=a.anchorNode;var l=a.anchorOffset,d=a.focusNode;a=a.focusOffset;try{r.nodeType,d.nodeType}catch{r=null;break e}var h=0,y=-1,C=-1,R=0,V=0,G=e,O=null;t:for(;;){for(var X;G!==r||l!==0&&G.nodeType!==3||(y=h+l),G!==d||a!==0&&G.nodeType!==3||(C=h+a),G.nodeType===3&&(h+=G.nodeValue.length),(X=G.firstChild)!==null;)O=G,G=X;for(;;){if(G===e)break t;if(O===r&&++R===l&&(y=h),O===d&&++V===a&&(C=h),(X=G.nextSibling)!==null)break;G=O,O=G.parentNode}G=X}r=y===-1||C===-1?null:{start:y,end:C}}else r=null}r=r||{start:0,end:0}}else r=null;for(yl={focusedElem:e,selectionRange:r},Na=!1,ee=t;ee!==null;)if(t=ee,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ee=e;else for(;ee!==null;){t=ee;try{var re=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(re!==null){var ae=re.memoizedProps,tt=re.memoizedState,L=t.stateNode,S=L.getSnapshotBeforeUpdate(t.elementType===t.type?ae:nn(t.type,ae),tt);L.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var N=t.stateNode.containerInfo;N.nodeType===1?N.textContent="":N.nodeType===9&&N.documentElement&&N.removeChild(N.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(s(163))}}catch(U){Je(t,t.return,U)}if(e=t.sibling,e!==null){e.return=t.return,ee=e;break}ee=t.return}return re=lp,lp=!1,re}function Xi(e,t,r){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var l=a=a.next;do{if((l.tag&e)===e){var d=l.destroy;l.destroy=void 0,d!==void 0&&os(t,r,d)}l=l.next}while(l!==a)}}function ho(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var a=r.create;r.destroy=a()}r=r.next}while(r!==t)}}function ls(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function sp(e){var t=e.alternate;t!==null&&(e.alternate=null,sp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[Oi],delete t[jl],delete t[Cf],delete t[Ef])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function dp(e){return e.tag===5||e.tag===3||e.tag===4}function cp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ss(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=$a));else if(a!==4&&(e=e.child,e!==null))for(ss(e,t,r),e=e.sibling;e!==null;)ss(e,t,r),e=e.sibling}function ds(e,t,r){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(ds(e,t,r),e=e.sibling;e!==null;)ds(e,t,r),e=e.sibling}var ht=null,rn=!1;function Xn(e,t,r){for(r=r.child;r!==null;)pp(e,t,r),r=r.sibling}function pp(e,t,r){if(kt&&typeof kt.onCommitFiberUnmount=="function")try{kt.onCommitFiberUnmount(bn,r)}catch{}switch(r.tag){case 5:yt||si(r,t);case 6:var a=ht,l=rn;ht=null,Xn(e,t,r),ht=a,rn=l,ht!==null&&(rn?(e=ht,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):ht.removeChild(r.stateNode));break;case 18:ht!==null&&(rn?(e=ht,r=r.stateNode,e.nodeType===8?kl(e.parentNode,r):e.nodeType===1&&kl(e,r),Ii(e)):kl(ht,r.stateNode));break;case 4:a=ht,l=rn,ht=r.stateNode.containerInfo,rn=!0,Xn(e,t,r),ht=a,rn=l;break;case 0:case 11:case 14:case 15:if(!yt&&(a=r.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){l=a=a.next;do{var d=l,h=d.destroy;d=d.tag,h!==void 0&&((d&2)!==0||(d&4)!==0)&&os(r,t,h),l=l.next}while(l!==a)}Xn(e,t,r);break;case 1:if(!yt&&(si(r,t),a=r.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=r.memoizedProps,a.state=r.memoizedState,a.componentWillUnmount()}catch(y){Je(r,t,y)}Xn(e,t,r);break;case 21:Xn(e,t,r);break;case 22:r.mode&1?(yt=(a=yt)||r.memoizedState!==null,Xn(e,t,r),yt=a):Xn(e,t,r);break;default:Xn(e,t,r)}}function up(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Of),t.forEach(function(a){var l=Qf.bind(null,e,a);r.has(a)||(r.add(a),a.then(l,l))})}}function an(e,t){var r=t.deletions;if(r!==null)for(var a=0;a<r.length;a++){var l=r[a];try{var d=e,h=t,y=h;e:for(;y!==null;){switch(y.tag){case 5:ht=y.stateNode,rn=!1;break e;case 3:ht=y.stateNode.containerInfo,rn=!0;break e;case 4:ht=y.stateNode.containerInfo,rn=!0;break e}y=y.return}if(ht===null)throw Error(s(160));pp(d,h,l),ht=null,rn=!1;var C=l.alternate;C!==null&&(C.return=null),l.return=null}catch(R){Je(l,t,R)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fp(t,e),t=t.sibling}function fp(e,t){var r=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(an(t,e),hn(e),a&4){try{Xi(3,e,e.return),ho(3,e)}catch(ae){Je(e,e.return,ae)}try{Xi(5,e,e.return)}catch(ae){Je(e,e.return,ae)}}break;case 1:an(t,e),hn(e),a&512&&r!==null&&si(r,r.return);break;case 5:if(an(t,e),hn(e),a&512&&r!==null&&si(r,r.return),e.flags&32){var l=e.stateNode;try{Mn(l,"")}catch(ae){Je(e,e.return,ae)}}if(a&4&&(l=e.stateNode,l!=null)){var d=e.memoizedProps,h=r!==null?r.memoizedProps:d,y=e.type,C=e.updateQueue;if(e.updateQueue=null,C!==null)try{y==="input"&&d.type==="radio"&&d.name!=null&&ln(l,d),Wr(y,h);var R=Wr(y,d);for(h=0;h<C.length;h+=2){var V=C[h],G=C[h+1];V==="style"?Wt(l,G):V==="dangerouslySetInnerHTML"?Ot(l,G):V==="children"?Mn(l,G):K(l,V,G,R)}switch(y){case"input":xi(l,d);break;case"textarea":sn(l,d);break;case"select":var O=l._wrapperState.wasMultiple;l._wrapperState.wasMultiple=!!d.multiple;var X=d.value;X!=null?Tn(l,!!d.multiple,X,!1):O!==!!d.multiple&&(d.defaultValue!=null?Tn(l,!!d.multiple,d.defaultValue,!0):Tn(l,!!d.multiple,d.multiple?[]:"",!1))}l[Oi]=d}catch(ae){Je(e,e.return,ae)}}break;case 6:if(an(t,e),hn(e),a&4){if(e.stateNode===null)throw Error(s(162));l=e.stateNode,d=e.memoizedProps;try{l.nodeValue=d}catch(ae){Je(e,e.return,ae)}}break;case 3:if(an(t,e),hn(e),a&4&&r!==null&&r.memoizedState.isDehydrated)try{Ii(t.containerInfo)}catch(ae){Je(e,e.return,ae)}break;case 4:an(t,e),hn(e);break;case 13:an(t,e),hn(e),l=e.child,l.flags&8192&&(d=l.memoizedState!==null,l.stateNode.isHidden=d,!d||l.alternate!==null&&l.alternate.memoizedState!==null||(us=_e())),a&4&&up(e);break;case 22:if(V=r!==null&&r.memoizedState!==null,e.mode&1?(yt=(R=yt)||V,an(t,e),yt=R):an(t,e),hn(e),a&8192){if(R=e.memoizedState!==null,(e.stateNode.isHidden=R)&&!V&&(e.mode&1)!==0)for(ee=e,V=e.child;V!==null;){for(G=ee=V;ee!==null;){switch(O=ee,X=O.child,O.tag){case 0:case 11:case 14:case 15:Xi(4,O,O.return);break;case 1:si(O,O.return);var re=O.stateNode;if(typeof re.componentWillUnmount=="function"){a=O,r=O.return;try{t=a,re.props=t.memoizedProps,re.state=t.memoizedState,re.componentWillUnmount()}catch(ae){Je(a,r,ae)}}break;case 5:si(O,O.return);break;case 22:if(O.memoizedState!==null){xp(G);continue}}X!==null?(X.return=O,ee=X):xp(G)}V=V.sibling}e:for(V=null,G=e;;){if(G.tag===5){if(V===null){V=G;try{l=G.stateNode,R?(d=l.style,typeof d.setProperty=="function"?d.setProperty("display","none","important"):d.display="none"):(y=G.stateNode,C=G.memoizedProps.style,h=C!=null&&C.hasOwnProperty("display")?C.display:null,y.style.display=Ea("display",h))}catch(ae){Je(e,e.return,ae)}}}else if(G.tag===6){if(V===null)try{G.stateNode.nodeValue=R?"":G.memoizedProps}catch(ae){Je(e,e.return,ae)}}else if((G.tag!==22&&G.tag!==23||G.memoizedState===null||G===e)&&G.child!==null){G.child.return=G,G=G.child;continue}if(G===e)break e;for(;G.sibling===null;){if(G.return===null||G.return===e)break e;V===G&&(V=null),G=G.return}V===G&&(V=null),G.sibling.return=G.return,G=G.sibling}}break;case 19:an(t,e),hn(e),a&4&&up(e);break;case 21:break;default:an(t,e),hn(e)}}function hn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(dp(r)){var a=r;break e}r=r.return}throw Error(s(160))}switch(a.tag){case 5:var l=a.stateNode;a.flags&32&&(Mn(l,""),a.flags&=-33);var d=cp(e);ds(e,d,l);break;case 3:case 4:var h=a.stateNode.containerInfo,y=cp(e);ss(e,y,h);break;default:throw Error(s(161))}}catch(C){Je(e,e.return,C)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Vf(e,t,r){ee=e,hp(e)}function hp(e,t,r){for(var a=(e.mode&1)!==0;ee!==null;){var l=ee,d=l.child;if(l.tag===22&&a){var h=l.memoizedState!==null||fo;if(!h){var y=l.alternate,C=y!==null&&y.memoizedState!==null||yt;y=fo;var R=yt;if(fo=h,(yt=C)&&!R)for(ee=l;ee!==null;)h=ee,C=h.child,h.tag===22&&h.memoizedState!==null?mp(l):C!==null?(C.return=h,ee=C):mp(l);for(;d!==null;)ee=d,hp(d),d=d.sibling;ee=l,fo=y,yt=R}gp(e)}else(l.subtreeFlags&8772)!==0&&d!==null?(d.return=l,ee=d):gp(e)}}function gp(e){for(;ee!==null;){var t=ee;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:yt||ho(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!yt)if(r===null)a.componentDidMount();else{var l=t.elementType===t.type?r.memoizedProps:nn(t.type,r.memoizedProps);a.componentDidUpdate(l,r.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var d=t.updateQueue;d!==null&&xc(t,d,a);break;case 3:var h=t.updateQueue;if(h!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}xc(t,h,r)}break;case 5:var y=t.stateNode;if(r===null&&t.flags&4){r=y;var C=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&r.focus();break;case"img":C.src&&(r.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var R=t.alternate;if(R!==null){var V=R.memoizedState;if(V!==null){var G=V.dehydrated;G!==null&&Ii(G)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(s(163))}yt||t.flags&512&&ls(t)}catch(O){Je(t,t.return,O)}}if(t===e){ee=null;break}if(r=t.sibling,r!==null){r.return=t.return,ee=r;break}ee=t.return}}function xp(e){for(;ee!==null;){var t=ee;if(t===e){ee=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ee=r;break}ee=t.return}}function mp(e){for(;ee!==null;){var t=ee;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ho(4,t)}catch(C){Je(t,r,C)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var l=t.return;try{a.componentDidMount()}catch(C){Je(t,l,C)}}var d=t.return;try{ls(t)}catch(C){Je(t,d,C)}break;case 5:var h=t.return;try{ls(t)}catch(C){Je(t,h,C)}}}catch(C){Je(t,t.return,C)}if(t===e){ee=null;break}var y=t.sibling;if(y!==null){y.return=t.return,ee=y;break}ee=t.return}}var $f=Math.ceil,go=ge.ReactCurrentDispatcher,cs=ge.ReactCurrentOwner,qt=ge.ReactCurrentBatchConfig,Te=0,ut=null,rt=null,gt=0,Pt=0,di=Yn(0),dt=0,Ji=null,Fr=0,xo=0,ps=0,ea=null,It=null,us=0,ci=1/0,In=null,mo=!1,fs=null,Jn=null,vo=!1,er=null,yo=0,ta=0,hs=null,bo=-1,wo=0;function Ct(){return(Te&6)!==0?_e():bo!==-1?bo:bo=_e()}function tr(e){return(e.mode&1)===0?1:(Te&2)!==0&&gt!==0?gt&-gt:Ff.transition!==null?(wo===0&&(wo=cd()),wo):(e=He,e!==0||(e=window.event,e=e===void 0?16:yd(e.type)),e)}function on(e,t,r,a){if(50<ta)throw ta=0,hs=null,Error(s(185));Ei(e,r,a),((Te&2)===0||e!==ut)&&(e===ut&&((Te&2)===0&&(xo|=r),dt===4&&nr(e,gt)),Lt(e,a),r===1&&Te===0&&(t.mode&1)===0&&(ci=_e()+500,qa&&Zn()))}function Lt(e,t){var r=e.callbackNode;S0(e,t);var a=Aa(e,e===ut?gt:0);if(a===0)r!==null&&ct(r),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(r!=null&&ct(r),t===1)e.tag===0?Sf(yp.bind(null,e)):ic(yp.bind(null,e)),kf(function(){(Te&6)===0&&Zn()}),r=null;else{switch(pd(a)){case 1:r=Vt;break;case 4:r=Rt;break;case 16:r=Pn;break;case 536870912:r=cn;break;default:r=Pn}r=Fp(r,vp.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function vp(e,t){if(bo=-1,wo=0,(Te&6)!==0)throw Error(s(327));var r=e.callbackNode;if(pi()&&e.callbackNode!==r)return null;var a=Aa(e,e===ut?gt:0);if(a===0)return null;if((a&30)!==0||(a&e.expiredLanes)!==0||t)t=ko(e,a);else{t=a;var l=Te;Te|=2;var d=wp();(ut!==e||gt!==t)&&(In=null,ci=_e()+500,Ar(e,t));do try{Yf();break}catch(y){bp(e,y)}while(!0);Nl(),go.current=d,Te=l,rt!==null?t=0:(ut=null,gt=0,t=dt)}if(t!==0){if(t===2&&(l=qo(e),l!==0&&(a=l,t=gs(e,l))),t===1)throw r=Ji,Ar(e,0),nr(e,a),Lt(e,_e()),r;if(t===6)nr(e,a);else{if(l=e.current.alternate,(a&30)===0&&!Gf(l)&&(t=ko(e,a),t===2&&(d=qo(e),d!==0&&(a=d,t=gs(e,d))),t===1))throw r=Ji,Ar(e,0),nr(e,a),Lt(e,_e()),r;switch(e.finishedWork=l,e.finishedLanes=a,t){case 0:case 1:throw Error(s(345));case 2:Ir(e,It,In);break;case 3:if(nr(e,a),(a&130023424)===a&&(t=us+500-_e(),10<t)){if(Aa(e,0)!==0)break;if(l=e.suspendedLanes,(l&a)!==a){Ct(),e.pingedLanes|=e.suspendedLanes&l;break}e.timeoutHandle=wl(Ir.bind(null,e,It,In),t);break}Ir(e,It,In);break;case 4:if(nr(e,a),(a&4194240)===a)break;for(t=e.eventTimes,l=-1;0<a;){var h=31-Oe(a);d=1<<h,h=t[h],h>l&&(l=h),a&=~d}if(a=l,a=_e()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*$f(a/1960))-a,10<a){e.timeoutHandle=wl(Ir.bind(null,e,It,In),a);break}Ir(e,It,In);break;case 5:Ir(e,It,In);break;default:throw Error(s(329))}}}return Lt(e,_e()),e.callbackNode===r?vp.bind(null,e):null}function gs(e,t){var r=ea;return e.current.memoizedState.isDehydrated&&(Ar(e,t).flags|=256),e=ko(e,t),e!==2&&(t=It,It=r,t!==null&&xs(t)),e}function xs(e){It===null?It=e:It.push.apply(It,e)}function Gf(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var a=0;a<r.length;a++){var l=r[a],d=l.getSnapshot;l=l.value;try{if(!en(d(),l))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nr(e,t){for(t&=~ps,t&=~xo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Oe(t),a=1<<r;e[r]=-1,t&=~a}}function yp(e){if((Te&6)!==0)throw Error(s(327));pi();var t=Aa(e,0);if((t&1)===0)return Lt(e,_e()),null;var r=ko(e,t);if(e.tag!==0&&r===2){var a=qo(e);a!==0&&(t=a,r=gs(e,a))}if(r===1)throw r=Ji,Ar(e,0),nr(e,t),Lt(e,_e()),r;if(r===6)throw Error(s(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,It,In),Lt(e,_e()),null}function ms(e,t){var r=Te;Te|=1;try{return e(t)}finally{Te=r,Te===0&&(ci=_e()+500,qa&&Zn())}}function zr(e){er!==null&&er.tag===0&&(Te&6)===0&&pi();var t=Te;Te|=1;var r=qt.transition,a=He;try{if(qt.transition=null,He=1,e)return e()}finally{He=a,qt.transition=r,Te=t,(Te&6)===0&&Zn()}}function vs(){Pt=di.current,Ye(di)}function Ar(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,wf(r)),rt!==null)for(r=rt.return;r!==null;){var a=r;switch(Fl(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Ua();break;case 3:oi(),Ye(Ft),Ye(xt),Hl();break;case 5:Pl(a);break;case 4:oi();break;case 13:Ye(Qe);break;case 19:Ye(Qe);break;case 10:Tl(a.type._context);break;case 22:case 23:vs()}r=r.return}if(ut=e,rt=e=rr(e.current,null),gt=Pt=t,dt=0,Ji=null,ps=xo=Fr=0,It=ea=null,Cr!==null){for(t=0;t<Cr.length;t++)if(r=Cr[t],a=r.interleaved,a!==null){r.interleaved=null;var l=a.next,d=r.pending;if(d!==null){var h=d.next;d.next=l,a.next=h}r.pending=a}Cr=null}return e}function bp(e,t){do{var r=rt;try{if(Nl(),io.current=so,ao){for(var a=Xe.memoizedState;a!==null;){var l=a.queue;l!==null&&(l.pending=null),a=a.next}ao=!1}if(Sr=0,pt=st=Xe=null,Yi=!1,qi=0,cs.current=null,r===null||r.return===null){dt=1,Ji=t,rt=null;break}e:{var d=e,h=r.return,y=r,C=t;if(t=gt,y.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var R=C,V=y,G=V.tag;if((V.mode&1)===0&&(G===0||G===11||G===15)){var O=V.alternate;O?(V.updateQueue=O.updateQueue,V.memoizedState=O.memoizedState,V.lanes=O.lanes):(V.updateQueue=null,V.memoizedState=null)}var X=Gc(h);if(X!==null){X.flags&=-257,Uc(X,h,y,d,t),X.mode&1&&$c(d,R,t),t=X,C=R;var re=t.updateQueue;if(re===null){var ae=new Set;ae.add(C),t.updateQueue=ae}else re.add(C);break e}else{if((t&1)===0){$c(d,R,t),ys();break e}C=Error(s(426))}}else if(Ke&&y.mode&1){var tt=Gc(h);if(tt!==null){(tt.flags&65536)===0&&(tt.flags|=256),Uc(tt,h,y,d,t),Il(li(C,y));break e}}d=C=li(C,y),dt!==4&&(dt=2),ea===null?ea=[d]:ea.push(d),d=h;do{switch(d.tag){case 3:d.flags|=65536,t&=-t,d.lanes|=t;var L=Wc(d,C,t);gc(d,L);break e;case 1:y=C;var S=d.type,N=d.stateNode;if((d.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||N!==null&&typeof N.componentDidCatch=="function"&&(Jn===null||!Jn.has(N)))){d.flags|=65536,t&=-t,d.lanes|=t;var U=Vc(d,y,t);gc(d,U);break e}}d=d.return}while(d!==null)}jp(r)}catch(le){t=le,rt===r&&r!==null&&(rt=r=r.return);continue}break}while(!0)}function wp(){var e=go.current;return go.current=so,e===null?so:e}function ys(){(dt===0||dt===3||dt===2)&&(dt=4),ut===null||(Fr&268435455)===0&&(xo&268435455)===0||nr(ut,gt)}function ko(e,t){var r=Te;Te|=2;var a=wp();(ut!==e||gt!==t)&&(In=null,Ar(e,t));do try{Uf();break}catch(l){bp(e,l)}while(!0);if(Nl(),Te=r,go.current=a,rt!==null)throw Error(s(261));return ut=null,gt=0,dt}function Uf(){for(;rt!==null;)kp(rt)}function Yf(){for(;rt!==null&&!De();)kp(rt)}function kp(e){var t=Sp(e.alternate,e,Pt);e.memoizedProps=e.pendingProps,t===null?jp(e):rt=t,cs.current=null}function jp(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=_f(r,t,Pt),r!==null){rt=r;return}}else{if(r=Hf(r,t),r!==null){r.flags&=32767,rt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{dt=6,rt=null;return}}if(t=t.sibling,t!==null){rt=t;return}rt=t=e}while(t!==null);dt===0&&(dt=5)}function Ir(e,t,r){var a=He,l=qt.transition;try{qt.transition=null,He=1,qf(e,t,r,a)}finally{qt.transition=l,He=a}return null}function qf(e,t,r,a){do pi();while(er!==null);if((Te&6)!==0)throw Error(s(327));r=e.finishedWork;var l=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(s(177));e.callbackNode=null,e.callbackPriority=0;var d=r.lanes|r.childLanes;if(F0(e,d),e===ut&&(rt=ut=null,gt=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||vo||(vo=!0,Fp(Pn,function(){return pi(),null})),d=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||d){d=qt.transition,qt.transition=null;var h=He;He=1;var y=Te;Te|=4,cs.current=null,Wf(e,r),fp(r,e),hf(yl),Na=!!vl,yl=vl=null,e.current=r,Vf(r),St(),Te=y,He=h,qt.transition=d}else e.current=r;if(vo&&(vo=!1,er=e,yo=l),d=e.pendingLanes,d===0&&(Jn=null),Le(r.stateNode),Lt(e,_e()),t!==null)for(a=e.onRecoverableError,r=0;r<t.length;r++)l=t[r],a(l.value,{componentStack:l.stack,digest:l.digest});if(mo)throw mo=!1,e=fs,fs=null,e;return(yo&1)!==0&&e.tag!==0&&pi(),d=e.pendingLanes,(d&1)!==0?e===hs?ta++:(ta=0,hs=e):ta=0,Zn(),null}function pi(){if(er!==null){var e=pd(yo),t=qt.transition,r=He;try{if(qt.transition=null,He=16>e?16:e,er===null)var a=!1;else{if(e=er,er=null,yo=0,(Te&6)!==0)throw Error(s(331));var l=Te;for(Te|=4,ee=e.current;ee!==null;){var d=ee,h=d.child;if((ee.flags&16)!==0){var y=d.deletions;if(y!==null){for(var C=0;C<y.length;C++){var R=y[C];for(ee=R;ee!==null;){var V=ee;switch(V.tag){case 0:case 11:case 15:Xi(8,V,d)}var G=V.child;if(G!==null)G.return=V,ee=G;else for(;ee!==null;){V=ee;var O=V.sibling,X=V.return;if(sp(V),V===R){ee=null;break}if(O!==null){O.return=X,ee=O;break}ee=X}}}var re=d.alternate;if(re!==null){var ae=re.child;if(ae!==null){re.child=null;do{var tt=ae.sibling;ae.sibling=null,ae=tt}while(ae!==null)}}ee=d}}if((d.subtreeFlags&2064)!==0&&h!==null)h.return=d,ee=h;else e:for(;ee!==null;){if(d=ee,(d.flags&2048)!==0)switch(d.tag){case 0:case 11:case 15:Xi(9,d,d.return)}var L=d.sibling;if(L!==null){L.return=d.return,ee=L;break e}ee=d.return}}var S=e.current;for(ee=S;ee!==null;){h=ee;var N=h.child;if((h.subtreeFlags&2064)!==0&&N!==null)N.return=h,ee=N;else e:for(h=S;ee!==null;){if(y=ee,(y.flags&2048)!==0)try{switch(y.tag){case 0:case 11:case 15:ho(9,y)}}catch(le){Je(y,y.return,le)}if(y===h){ee=null;break e}var U=y.sibling;if(U!==null){U.return=y.return,ee=U;break e}ee=y.return}}if(Te=l,Zn(),kt&&typeof kt.onPostCommitFiberRoot=="function")try{kt.onPostCommitFiberRoot(bn,e)}catch{}a=!0}return a}finally{He=r,qt.transition=t}}return!1}function Cp(e,t,r){t=li(r,t),t=Wc(e,t,1),e=Qn(e,t,1),t=Ct(),e!==null&&(Ei(e,1,t),Lt(e,t))}function Je(e,t,r){if(e.tag===3)Cp(e,e,r);else for(;t!==null;){if(t.tag===3){Cp(t,e,r);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Jn===null||!Jn.has(a))){e=li(r,e),e=Vc(t,e,1),t=Qn(t,e,1),e=Ct(),t!==null&&(Ei(t,1,e),Lt(t,e));break}}t=t.return}}function Zf(e,t,r){var a=e.pingCache;a!==null&&a.delete(t),t=Ct(),e.pingedLanes|=e.suspendedLanes&r,ut===e&&(gt&r)===r&&(dt===4||dt===3&&(gt&130023424)===gt&&500>_e()-us?Ar(e,0):ps|=r),Lt(e,t)}function Ep(e,t){t===0&&((e.mode&1)===0?t=1:(t=vr,vr<<=1,(vr&130023424)===0&&(vr=4194304)));var r=Ct();e=Fn(e,t),e!==null&&(Ei(e,t,r),Lt(e,r))}function Kf(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Ep(e,r)}function Qf(e,t){var r=0;switch(e.tag){case 13:var a=e.stateNode,l=e.memoizedState;l!==null&&(r=l.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(s(314))}a!==null&&a.delete(t),Ep(e,r)}var Sp;Sp=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Ft.current)At=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return At=!1,Pf(e,t,r);At=(e.flags&131072)!==0}else At=!1,Ke&&(t.flags&1048576)!==0&&ac(t,Ka,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;uo(e,t),e=t.pendingProps;var l=Jr(t,xt.current);ai(t,r),l=Vl(null,t,a,e,l,r);var d=$l();return t.flags|=1,typeof l=="object"&&l!==null&&typeof l.render=="function"&&l.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,zt(a)?(d=!0,Ya(t)):d=!1,t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,Bl(t),l.updater=co,t.stateNode=l,l._reactInternals=t,Kl(t,a,e,r),t=es(null,t,a,!0,d,r)):(t.tag=0,Ke&&d&&Sl(t),jt(null,t,l,r),t=t.child),t;case 16:a=t.elementType;e:{switch(uo(e,t),e=t.pendingProps,l=a._init,a=l(a._payload),t.type=a,l=t.tag=Jf(a),e=nn(a,e),l){case 0:t=Jl(null,t,a,e,r);break e;case 1:t=Xc(null,t,a,e,r);break e;case 11:t=Yc(null,t,a,e,r);break e;case 14:t=qc(null,t,a,nn(a.type,e),r);break e}throw Error(s(306,a,""))}return t;case 0:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:nn(a,l),Jl(e,t,a,l,r);case 1:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:nn(a,l),Xc(e,t,a,l,r);case 3:e:{if(Jc(t),e===null)throw Error(s(387));a=t.pendingProps,d=t.memoizedState,l=d.element,hc(e,t),no(t,a,null,r);var h=t.memoizedState;if(a=h.element,d.isDehydrated)if(d={element:a,isDehydrated:!1,cache:h.cache,pendingSuspenseBoundaries:h.pendingSuspenseBoundaries,transitions:h.transitions},t.updateQueue.baseState=d,t.memoizedState=d,t.flags&256){l=li(Error(s(423)),t),t=ep(e,t,a,r,l);break e}else if(a!==l){l=li(Error(s(424)),t),t=ep(e,t,a,r,l);break e}else for(Dt=Un(t.stateNode.containerInfo.firstChild),Bt=t,Ke=!0,tn=null,r=uc(t,null,a,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ni(),a===l){t=An(e,t,r);break e}jt(e,t,a,r)}t=t.child}return t;case 5:return mc(t),e===null&&Al(t),a=t.type,l=t.pendingProps,d=e!==null?e.memoizedProps:null,h=l.children,bl(a,l)?h=null:d!==null&&bl(a,d)&&(t.flags|=32),Qc(e,t),jt(e,t,h,r),t.child;case 6:return e===null&&Al(t),null;case 13:return tp(e,t,r);case 4:return Dl(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=ri(t,null,a,r):jt(e,t,a,r),t.child;case 11:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:nn(a,l),Yc(e,t,a,l,r);case 7:return jt(e,t,t.pendingProps,r),t.child;case 8:return jt(e,t,t.pendingProps.children,r),t.child;case 12:return jt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(a=t.type._context,l=t.pendingProps,d=t.memoizedProps,h=l.value,$e(Ja,a._currentValue),a._currentValue=h,d!==null)if(en(d.value,h)){if(d.children===l.children&&!Ft.current){t=An(e,t,r);break e}}else for(d=t.child,d!==null&&(d.return=t);d!==null;){var y=d.dependencies;if(y!==null){h=d.child;for(var C=y.firstContext;C!==null;){if(C.context===a){if(d.tag===1){C=zn(-1,r&-r),C.tag=2;var R=d.updateQueue;if(R!==null){R=R.shared;var V=R.pending;V===null?C.next=C:(C.next=V.next,V.next=C),R.pending=C}}d.lanes|=r,C=d.alternate,C!==null&&(C.lanes|=r),Rl(d.return,r,t),y.lanes|=r;break}C=C.next}}else if(d.tag===10)h=d.type===t.type?null:d.child;else if(d.tag===18){if(h=d.return,h===null)throw Error(s(341));h.lanes|=r,y=h.alternate,y!==null&&(y.lanes|=r),Rl(h,r,t),h=d.sibling}else h=d.child;if(h!==null)h.return=d;else for(h=d;h!==null;){if(h===t){h=null;break}if(d=h.sibling,d!==null){d.return=h.return,h=d;break}h=h.return}d=h}jt(e,t,l.children,r),t=t.child}return t;case 9:return l=t.type,a=t.pendingProps.children,ai(t,r),l=Ut(l),a=a(l),t.flags|=1,jt(e,t,a,r),t.child;case 14:return a=t.type,l=nn(a,t.pendingProps),l=nn(a.type,l),qc(e,t,a,l,r);case 15:return Zc(e,t,t.type,t.pendingProps,r);case 17:return a=t.type,l=t.pendingProps,l=t.elementType===a?l:nn(a,l),uo(e,t),t.tag=1,zt(a)?(e=!0,Ya(t)):e=!1,ai(t,r),Hc(t,a,l),Kl(t,a,l,r),es(null,t,a,!0,e,r);case 19:return rp(e,t,r);case 22:return Kc(e,t,r)}throw Error(s(156,t.tag))};function Fp(e,t){return et(e,t)}function Xf(e,t,r,a){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(e,t,r,a){return new Xf(e,t,r,a)}function bs(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jf(e){if(typeof e=="function")return bs(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===qe)return 14}return 2}function rr(e,t){var r=e.alternate;return r===null?(r=Zt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function jo(e,t,r,a,l,d){var h=2;if(a=e,typeof e=="function")bs(e)&&(h=1);else if(typeof e=="string")h=5;else e:switch(e){case M:return Lr(r.children,l,d,t);case de:h=8,l|=8;break;case ve:return e=Zt(12,r,t,l|2),e.elementType=ve,e.lanes=d,e;case Ge:return e=Zt(13,r,t,l),e.elementType=Ge,e.lanes=d,e;case Me:return e=Zt(19,r,t,l),e.elementType=Me,e.lanes=d,e;case we:return Co(r,l,d,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Se:h=10;break e;case Ne:h=9;break e;case Pe:h=11;break e;case qe:h=14;break e;case Ce:h=16,a=null;break e}throw Error(s(130,e==null?e:typeof e,""))}return t=Zt(h,r,t,l),t.elementType=e,t.type=a,t.lanes=d,t}function Lr(e,t,r,a){return e=Zt(7,e,a,t),e.lanes=r,e}function Co(e,t,r,a){return e=Zt(22,e,a,t),e.elementType=we,e.lanes=r,e.stateNode={isHidden:!1},e}function ws(e,t,r){return e=Zt(6,e,null,t),e.lanes=r,e}function ks(e,t,r){return t=Zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function eh(e,t,r,a,l){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Zo(0),this.expirationTimes=Zo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zo(0),this.identifierPrefix=a,this.onRecoverableError=l,this.mutableSourceEagerHydrationData=null}function js(e,t,r,a,l,d,h,y,C){return e=new eh(e,t,r,y,C),t===1?(t=1,d===!0&&(t|=8)):t=0,d=Zt(3,null,null,t),e.current=d,d.stateNode=e,d.memoizedState={element:a,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Bl(d),e}function th(e,t,r){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ee,key:a==null?null:""+a,children:e,containerInfo:t,implementation:r}}function zp(e){if(!e)return qn;e=e._reactInternals;e:{if(ie(e)!==e||e.tag!==1)throw Error(s(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(zt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(s(171))}if(e.tag===1){var r=e.type;if(zt(r))return nc(e,r,t)}return t}function Ap(e,t,r,a,l,d,h,y,C){return e=js(r,a,!0,e,l,d,h,y,C),e.context=zp(null),r=e.current,a=Ct(),l=tr(r),d=zn(a,l),d.callback=t??null,Qn(r,d,l),e.current.lanes=l,Ei(e,l,a),Lt(e,a),e}function Eo(e,t,r,a){var l=t.current,d=Ct(),h=tr(l);return r=zp(r),t.context===null?t.context=r:t.pendingContext=r,t=zn(d,h),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=Qn(l,t,h),e!==null&&(on(e,l,h,d),to(e,l,h)),h}function So(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ip(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Cs(e,t){Ip(e,t),(e=e.alternate)&&Ip(e,t)}function nh(){return null}var Lp=typeof reportError=="function"?reportError:function(e){console.error(e)};function Es(e){this._internalRoot=e}Fo.prototype.render=Es.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(s(409));Eo(e,t,null,null)},Fo.prototype.unmount=Es.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zr(function(){Eo(null,e,null,null)}),t[jn]=null}};function Fo(e){this._internalRoot=e}Fo.prototype.unstable_scheduleHydration=function(e){if(e){var t=hd();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Vn.length&&t!==0&&t<Vn[r].priority;r++);Vn.splice(r,0,e),r===0&&md(e)}};function Ss(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function zo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Np(){}function rh(e,t,r,a,l){if(l){if(typeof a=="function"){var d=a;a=function(){var R=So(h);d.call(R)}}var h=Ap(t,a,e,0,null,!1,!1,"",Np);return e._reactRootContainer=h,e[jn]=h.current,_i(e.nodeType===8?e.parentNode:e),zr(),h}for(;l=e.lastChild;)e.removeChild(l);if(typeof a=="function"){var y=a;a=function(){var R=So(C);y.call(R)}}var C=js(e,0,!1,null,null,!1,!1,"",Np);return e._reactRootContainer=C,e[jn]=C.current,_i(e.nodeType===8?e.parentNode:e),zr(function(){Eo(t,C,r,a)}),C}function Ao(e,t,r,a,l){var d=r._reactRootContainer;if(d){var h=d;if(typeof l=="function"){var y=l;l=function(){var C=So(h);y.call(C)}}Eo(t,h,e,l)}else h=rh(r,t,e,l,a);return So(h)}ud=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=yr(t.pendingLanes);r!==0&&(Ko(t,r|1),Lt(t,_e()),(Te&6)===0&&(ci=_e()+500,Zn()))}break;case 13:zr(function(){var a=Fn(e,1);if(a!==null){var l=Ct();on(a,e,1,l)}}),Cs(e,1)}},Qo=function(e){if(e.tag===13){var t=Fn(e,134217728);if(t!==null){var r=Ct();on(t,e,134217728,r)}Cs(e,134217728)}},fd=function(e){if(e.tag===13){var t=tr(e),r=Fn(e,t);if(r!==null){var a=Ct();on(r,e,t,a)}Cs(e,t)}},hd=function(){return He},gd=function(e,t){var r=He;try{return He=e,t()}finally{He=r}},Bn=function(e,t,r){switch(t){case"input":if(xi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var a=r[t];if(a!==e&&a.form===e.form){var l=Ga(a);if(!l)throw Error(s(90));lt(a),xi(a,l)}}}break;case"textarea":sn(e,r);break;case"select":t=r.value,t!=null&&Tn(e,!!r.multiple,t,!1)}},ki=ms,hr=zr;var ih={usingClientEntryPoint:!1,Events:[Wi,Qr,Ga,wi,za,ms]},na={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ah={bundleType:na.bundleType,version:na.version,rendererPackageName:na.rendererPackageName,rendererConfig:na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ge.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ie(e),e===null?null:e.stateNode},findFiberByHostInstance:na.findFiberByHostInstance||nh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Io.isDisabled&&Io.supportsFiber)try{bn=Io.inject(ah),kt=Io}catch{}}return Nt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ih,Nt.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ss(t))throw Error(s(200));return th(e,t,null,r)},Nt.createRoot=function(e,t){if(!Ss(e))throw Error(s(299));var r=!1,a="",l=Lp;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(l=t.onRecoverableError)),t=js(e,1,!1,null,null,r,!1,a,l),e[jn]=t.current,_i(e.nodeType===8?e.parentNode:e),new Es(t)},Nt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(s(188)):(e=Object.keys(e).join(","),Error(s(268,e)));return e=Ie(t),e=e===null?null:e.stateNode,e},Nt.flushSync=function(e){return zr(e)},Nt.hydrate=function(e,t,r){if(!zo(t))throw Error(s(200));return Ao(null,e,t,!0,r)},Nt.hydrateRoot=function(e,t,r){if(!Ss(e))throw Error(s(405));var a=r!=null&&r.hydratedSources||null,l=!1,d="",h=Lp;if(r!=null&&(r.unstable_strictMode===!0&&(l=!0),r.identifierPrefix!==void 0&&(d=r.identifierPrefix),r.onRecoverableError!==void 0&&(h=r.onRecoverableError)),t=Ap(t,null,e,1,r??null,l,!1,d,h),e[jn]=t.current,_i(e),a)for(e=0;e<a.length;e++)r=a[e],l=r._getVersion,l=l(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,l]:t.mutableSourceEagerHydrationData.push(r,l);return new Fo(t)},Nt.render=function(e,t,r){if(!zo(t))throw Error(s(200));return Ao(null,e,t,!1,r)},Nt.unmountComponentAtNode=function(e){if(!zo(e))throw Error(s(40));return e._reactRootContainer?(zr(function(){Ao(null,null,e,!1,function(){e._reactRootContainer=null,e[jn]=null})}),!0):!1},Nt.unstable_batchedUpdates=ms,Nt.unstable_renderSubtreeIntoContainer=function(e,t,r,a){if(!zo(r))throw Error(s(200));if(e==null||e._reactInternals===void 0)throw Error(s(38));return Ao(e,t,r,!1,a)},Nt.version="18.3.1-next-f1338f8080-20240426",Nt}var Hp;function gh(){if(Hp)return As.exports;Hp=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(o){console.error(o)}}return i(),As.exports=hh(),As.exports}var Op;function xh(){if(Op)return Lo;Op=1;var i=gh();return Lo.createRoot=i.createRoot,Lo.hydrateRoot=i.hydrateRoot,Lo}var mh=xh(),I=Ys();const vh=sh(I),yh=lh({__proto__:null,default:vh},[I]);/**
 * react-router v7.13.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Tu=i=>{throw TypeError(i)},bh=(i,o,s)=>o.has(i)||Tu("Cannot "+s),Ns=(i,o,s)=>(bh(i,o,"read from private field"),s?s.call(i):o.get(i)),wh=(i,o,s)=>o.has(i)?Tu("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(i):o.set(i,s),Wp="popstate";function kh(i={}){function o(u,c){let{pathname:f,search:g,hash:x}=u.location;return pa("",{pathname:f,search:g,hash:x},c.state&&c.state.usr||null,c.state&&c.state.key||"default")}function s(u,c){return typeof c=="string"?c:mn(c)}return Ch(o,s,null,i)}function ze(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function at(i,o){if(!i){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function jh(){return Math.random().toString(36).substring(2,10)}function Vp(i,o){return{usr:i.state,key:i.key,idx:o}}function pa(i,o,s=null,u){return{pathname:typeof i=="string"?i:i.pathname,search:"",hash:"",...typeof o=="string"?cr(o):o,state:s,key:o&&o.key||u||jh()}}function mn({pathname:i="/",search:o="",hash:s=""}){return o&&o!=="?"&&(i+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(i+=s.charAt(0)==="#"?s:"#"+s),i}function cr(i){let o={};if(i){let s=i.indexOf("#");s>=0&&(o.hash=i.substring(s),i=i.substring(0,s));let u=i.indexOf("?");u>=0&&(o.search=i.substring(u),i=i.substring(0,u)),i&&(o.pathname=i)}return o}function Ch(i,o,s,u={}){let{window:c=document.defaultView,v5Compat:f=!1}=u,g=c.history,x="POP",m=null,v=j();v==null&&(v=0,g.replaceState({...g.state,idx:v},""));function j(){return(g.state||{idx:null}).idx}function b(){x="POP";let _=j(),Q=_==null?null:_-v;v=_,m&&m({action:x,location:B.location,delta:Q})}function z(_,Q){x="PUSH";let H=pa(B.location,_,Q);v=j()+1;let K=Vp(H,v),ge=B.createHref(H);try{g.pushState(K,"",ge)}catch(me){if(me instanceof DOMException&&me.name==="DataCloneError")throw me;c.location.assign(ge)}f&&m&&m({action:x,location:B.location,delta:1})}function E(_,Q){x="REPLACE";let H=pa(B.location,_,Q);v=j();let K=Vp(H,v),ge=B.createHref(H);g.replaceState(K,"",ge),f&&m&&m({action:x,location:B.location,delta:0})}function D(_){return Ru(_)}let B={get action(){return x},get location(){return i(c,g)},listen(_){if(m)throw new Error("A history only accepts one active listener");return c.addEventListener(Wp,b),m=_,()=>{c.removeEventListener(Wp,b),m=null}},createHref(_){return o(c,_)},createURL:D,encodeLocation(_){let Q=D(_);return{pathname:Q.pathname,search:Q.search,hash:Q.hash}},push:z,replace:E,go(_){return g.go(_)}};return B}function Ru(i,o=!1){let s="http://localhost";typeof window<"u"&&(s=window.location.origin!=="null"?window.location.origin:window.location.href),ze(s,"No window.location.(origin|href) available to create URL");let u=typeof i=="string"?i:mn(i);return u=u.replace(/ $/,"%20"),!o&&u.startsWith("//")&&(u=s+u),new URL(u,s)}var sa,$p=class{constructor(i){if(wh(this,sa,new Map),i)for(let[o,s]of i)this.set(o,s)}get(i){if(Ns(this,sa).has(i))return Ns(this,sa).get(i);if(i.defaultValue!==void 0)return i.defaultValue;throw new Error("No value found for context")}set(i,o){Ns(this,sa).set(i,o)}};sa=new WeakMap;var Eh=new Set(["lazy","caseSensitive","path","id","index","children"]);function Sh(i){return Eh.has(i)}var Fh=new Set(["lazy","caseSensitive","path","id","index","middleware","children"]);function zh(i){return Fh.has(i)}function Ah(i){return i.index===!0}function ua(i,o,s=[],u={},c=!1){return i.map((f,g)=>{let x=[...s,String(g)],m=typeof f.id=="string"?f.id:x.join("-");if(ze(f.index!==!0||!f.children,"Cannot specify children on an index route"),ze(c||!u[m],`Found a route id collision on id "${m}".  Route id's must be globally unique within Data Router usages`),Ah(f)){let v={...f,id:m};return u[m]=Gp(v,o(v)),v}else{let v={...f,id:m,children:void 0};return u[m]=Gp(v,o(v)),f.children&&(v.children=ua(f.children,o,x,u,c)),v}})}function Gp(i,o){return Object.assign(i,{...o,...typeof o.lazy=="object"&&o.lazy!=null?{lazy:{...i.lazy,...o.lazy}}:{}})}function or(i,o,s="/"){return da(i,o,s,!1)}function da(i,o,s,u){let c=typeof o=="string"?cr(o):o,f=Qt(c.pathname||"/",s);if(f==null)return null;let g=Mu(i);Lh(g);let x=null;for(let m=0;x==null&&m<g.length;++m){let v=Wh(f);x=Hh(g[m],v,u)}return x}function Ih(i,o){let{route:s,pathname:u,params:c}=i;return{id:s.id,pathname:u,params:c,data:o[s.id],loaderData:o[s.id],handle:s.handle}}function Mu(i,o=[],s=[],u="",c=!1){let f=(g,x,m=c,v)=>{let j={relativePath:v===void 0?g.path||"":v,caseSensitive:g.caseSensitive===!0,childrenIndex:x,route:g};if(j.relativePath.startsWith("/")){if(!j.relativePath.startsWith(u)&&m)return;ze(j.relativePath.startsWith(u),`Absolute route path "${j.relativePath}" nested under path "${u}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),j.relativePath=j.relativePath.slice(u.length)}let b=xn([u,j.relativePath]),z=s.concat(j);g.children&&g.children.length>0&&(ze(g.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${b}".`),Mu(g.children,o,z,b,m)),!(g.path==null&&!g.index)&&o.push({path:b,score:Ph(b,g.index),routesMeta:z})};return i.forEach((g,x)=>{var m;if(g.path===""||!((m=g.path)!=null&&m.includes("?")))f(g,x);else for(let v of Bu(g.path))f(g,x,!0,v)}),o}function Bu(i){let o=i.split("/");if(o.length===0)return[];let[s,...u]=o,c=s.endsWith("?"),f=s.replace(/\?$/,"");if(u.length===0)return c?[f,""]:[f];let g=Bu(u.join("/")),x=[];return x.push(...g.map(m=>m===""?f:[f,m].join("/"))),c&&x.push(...g),x.map(m=>i.startsWith("/")&&m===""?"/":m)}function Lh(i){i.sort((o,s)=>o.score!==s.score?s.score-o.score:_h(o.routesMeta.map(u=>u.childrenIndex),s.routesMeta.map(u=>u.childrenIndex)))}var Nh=/^:[\w-]+$/,Th=3,Rh=2,Mh=1,Bh=10,Dh=-2,Up=i=>i==="*";function Ph(i,o){let s=i.split("/"),u=s.length;return s.some(Up)&&(u+=Dh),o&&(u+=Rh),s.filter(c=>!Up(c)).reduce((c,f)=>c+(Nh.test(f)?Th:f===""?Mh:Bh),u)}function _h(i,o){return i.length===o.length&&i.slice(0,-1).every((u,c)=>u===o[c])?i[i.length-1]-o[o.length-1]:0}function Hh(i,o,s=!1){let{routesMeta:u}=i,c={},f="/",g=[];for(let x=0;x<u.length;++x){let m=u[x],v=x===u.length-1,j=f==="/"?o:o.slice(f.length)||"/",b=Vo({path:m.relativePath,caseSensitive:m.caseSensitive,end:v},j),z=m.route;if(!b&&v&&s&&!u[u.length-1].route.index&&(b=Vo({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},j)),!b)return null;Object.assign(c,b.params),g.push({params:c,pathname:xn([f,b.pathname]),pathnameBase:Gh(xn([f,b.pathnameBase])),route:z}),b.pathnameBase!=="/"&&(f=xn([f,b.pathnameBase]))}return g}function Vo(i,o){typeof i=="string"&&(i={path:i,caseSensitive:!1,end:!0});let[s,u]=Oh(i.path,i.caseSensitive,i.end),c=o.match(s);if(!c)return null;let f=c[0],g=f.replace(/(.)\/+$/,"$1"),x=c.slice(1);return{params:u.reduce((v,{paramName:j,isOptional:b},z)=>{if(j==="*"){let D=x[z]||"";g=f.slice(0,f.length-D.length).replace(/(.)\/+$/,"$1")}const E=x[z];return b&&!E?v[j]=void 0:v[j]=(E||"").replace(/%2F/g,"/"),v},{}),pathname:f,pathnameBase:g,pattern:i}}function Oh(i,o=!1,s=!0){at(i==="*"||!i.endsWith("*")||i.endsWith("/*"),`Route path "${i}" will be treated as if it were "${i.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${i.replace(/\*$/,"/*")}".`);let u=[],c="^"+i.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(g,x,m)=>(u.push({paramName:x,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)")).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return i.endsWith("*")?(u.push({paramName:"*"}),c+=i==="*"||i==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?c+="\\/*$":i!==""&&i!=="/"&&(c+="(?:(?=\\/|$))"),[new RegExp(c,o?void 0:"i"),u]}function Wh(i){try{return i.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return at(!1,`The URL path "${i}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),i}}function Qt(i,o){if(o==="/")return i;if(!i.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,u=i.charAt(s);return u&&u!=="/"?null:i.slice(s)||"/"}function Vh({basename:i,pathname:o}){return o==="/"?i:xn([i,o])}var Du=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,qs=i=>Du.test(i);function $h(i,o="/"){let{pathname:s,search:u="",hash:c=""}=typeof i=="string"?cr(i):i,f;return s?(s=s.replace(/\/\/+/g,"/"),s.startsWith("/")?f=Yp(s.substring(1),"/"):f=Yp(s,o)):f=o,{pathname:f,search:Uh(u),hash:Yh(c)}}function Yp(i,o){let s=o.replace(/\/+$/,"").split("/");return i.split("/").forEach(c=>{c===".."?s.length>1&&s.pop():c!=="."&&s.push(c)}),s.length>1?s.join("/"):"/"}function Ts(i,o,s,u){return`Cannot include a '${i}' character in a manually specified \`to.${o}\` field [${JSON.stringify(u)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function Pu(i){return i.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function Zs(i){let o=Pu(i);return o.map((s,u)=>u===o.length-1?s.pathname:s.pathnameBase)}function Ks(i,o,s,u=!1){let c;typeof i=="string"?c=cr(i):(c={...i},ze(!c.pathname||!c.pathname.includes("?"),Ts("?","pathname","search",c)),ze(!c.pathname||!c.pathname.includes("#"),Ts("#","pathname","hash",c)),ze(!c.search||!c.search.includes("#"),Ts("#","search","hash",c)));let f=i===""||c.pathname==="",g=f?"/":c.pathname,x;if(g==null)x=s;else{let b=o.length-1;if(!u&&g.startsWith("..")){let z=g.split("/");for(;z[0]==="..";)z.shift(),b-=1;c.pathname=z.join("/")}x=b>=0?o[b]:"/"}let m=$h(c,x),v=g&&g!=="/"&&g.endsWith("/"),j=(f||g===".")&&s.endsWith("/");return!m.pathname.endsWith("/")&&(v||j)&&(m.pathname+="/"),m}var xn=i=>i.join("/").replace(/\/\/+/g,"/"),Gh=i=>i.replace(/\/+$/,"").replace(/^\/*/,"/"),Uh=i=>!i||i==="?"?"":i.startsWith("?")?i:"?"+i,Yh=i=>!i||i==="#"?"":i.startsWith("#")?i:"#"+i,ma=class{constructor(i,o,s,u=!1){this.status=i,this.statusText=o||"",this.internal=u,s instanceof Error?(this.data=s.toString(),this.error=s):this.data=s}};function fa(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.internal=="boolean"&&"data"in i}function va(i){return i.map(o=>o.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var _u=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function Hu(i,o){let s=i;if(typeof s!="string"||!Du.test(s))return{absoluteURL:void 0,isExternal:!1,to:s};let u=s,c=!1;if(_u)try{let f=new URL(window.location.href),g=s.startsWith("//")?new URL(f.protocol+s):new URL(s),x=Qt(g.pathname,o);g.origin===f.origin&&x!=null?s=x+g.search+g.hash:c=!0}catch{at(!1,`<Link to="${s}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:u,isExternal:c,to:s}}var sr=Symbol("Uninstrumented");function qh(i,o){let s={lazy:[],"lazy.loader":[],"lazy.action":[],"lazy.middleware":[],middleware:[],loader:[],action:[]};i.forEach(c=>c({id:o.id,index:o.index,path:o.path,instrument(f){let g=Object.keys(s);for(let x of g)f[x]&&s[x].push(f[x])}}));let u={};if(typeof o.lazy=="function"&&s.lazy.length>0){let c=fi(s.lazy,o.lazy,()=>{});c&&(u.lazy=c)}if(typeof o.lazy=="object"){let c=o.lazy;["middleware","loader","action"].forEach(f=>{let g=c[f],x=s[`lazy.${f}`];if(typeof g=="function"&&x.length>0){let m=fi(x,g,()=>{});m&&(u.lazy=Object.assign(u.lazy||{},{[f]:m}))}})}return["loader","action"].forEach(c=>{let f=o[c];if(typeof f=="function"&&s[c].length>0){let g=f[sr]??f,x=fi(s[c],g,(...m)=>qp(m[0]));x&&(c==="loader"&&g.hydrate===!0&&(x.hydrate=!0),x[sr]=g,u[c]=x)}}),o.middleware&&o.middleware.length>0&&s.middleware.length>0&&(u.middleware=o.middleware.map(c=>{let f=c[sr]??c,g=fi(s.middleware,f,(...x)=>qp(x[0]));return g?(g[sr]=f,g):c})),u}function Zh(i,o){let s={navigate:[],fetch:[]};if(o.forEach(u=>u({instrument(c){let f=Object.keys(c);for(let g of f)c[g]&&s[g].push(c[g])}})),s.navigate.length>0){let u=i.navigate[sr]??i.navigate,c=fi(s.navigate,u,(...f)=>{let[g,x]=f;return{to:typeof g=="number"||typeof g=="string"?g:g?mn(g):".",...Zp(i,x??{})}});c&&(c[sr]=u,i.navigate=c)}if(s.fetch.length>0){let u=i.fetch[sr]??i.fetch,c=fi(s.fetch,u,(...f)=>{let[g,,x,m]=f;return{href:x??".",fetcherKey:g,...Zp(i,m??{})}});c&&(c[sr]=u,i.fetch=c)}return i}function fi(i,o,s){return i.length===0?null:async(...u)=>{let c=await Ou(i,s(...u),()=>o(...u),i.length-1);if(c.type==="error")throw c.value;return c.value}}async function Ou(i,o,s,u){let c=i[u],f;if(c){let g,x=async()=>(g?console.error("You cannot call instrumented handlers more than once"):g=Ou(i,o,s,u-1),f=await g,ze(f,"Expected a result"),f.type==="error"&&f.value instanceof Error?{status:"error",error:f.value}:{status:"success",error:void 0});try{await c(x,o)}catch(m){console.error("An instrumentation function threw an error:",m)}g||await x(),await g}else try{f={type:"success",value:await s()}}catch(g){f={type:"error",value:g}}return f||{type:"error",value:new Error("No result assigned in instrumentation chain.")}}function qp(i){let{request:o,context:s,params:u,unstable_pattern:c}=i;return{request:Kh(o),params:{...u},unstable_pattern:c,context:Qh(s)}}function Zp(i,o){return{currentUrl:mn(i.state.location),..."formMethod"in o?{formMethod:o.formMethod}:{},..."formEncType"in o?{formEncType:o.formEncType}:{},..."formData"in o?{formData:o.formData}:{},..."body"in o?{body:o.body}:{}}}function Kh(i){return{method:i.method,url:i.url,headers:{get:(...o)=>i.headers.get(...o)}}}function Qh(i){if(Jh(i)){let o={...i};return Object.freeze(o),o}else return{get:o=>i.get(o)}}var Xh=Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function Jh(i){if(i===null||typeof i!="object")return!1;const o=Object.getPrototypeOf(i);return o===Object.prototype||o===null||Object.getOwnPropertyNames(o).sort().join("\0")===Xh}var Wu=["POST","PUT","PATCH","DELETE"],eg=new Set(Wu),tg=["GET",...Wu],ng=new Set(tg),Vu=new Set([301,302,303,307,308]),rg=new Set([307,308]),Rs={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ig={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ia={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},ag=i=>({hasErrorBoundary:!!i.hasErrorBoundary}),$u="remix-router-transitions",Gu=Symbol("ResetLoaderData");function og(i){const o=i.window?i.window:typeof window<"u"?window:void 0,s=typeof o<"u"&&typeof o.document<"u"&&typeof o.document.createElement<"u";ze(i.routes.length>0,"You must provide a non-empty routes array to createRouter");let u=i.hydrationRouteProperties||[],c=i.mapRouteProperties||ag,f=c;if(i.unstable_instrumentations){let w=i.unstable_instrumentations;f=A=>({...c(A),...qh(w.map(T=>T.route).filter(Boolean),A)})}let g={},x=ua(i.routes,f,void 0,g),m,v=i.basename||"/";v.startsWith("/")||(v=`/${v}`);let j=i.dataStrategy||pg,b={...i.future},z=null,E=new Set,D=null,B=null,_=null,Q=i.hydrationData!=null,H=or(x,i.history.location,v),K=!1,ge=null,me;if(H==null&&!i.patchRoutesOnNavigation){let w=Kt(404,{pathname:i.history.location.pathname}),{matches:A,route:T}=No(x);me=!0,H=A,ge={[T.id]:w}}else if(H&&!i.hydrationData&&hr(H,x,i.history.location.pathname).active&&(H=null),H)if(H.some(w=>w.route.lazy))me=!1;else if(!H.some(w=>Qs(w.route)))me=!0;else{let w=i.hydrationData?i.hydrationData.loaderData:null,A=i.hydrationData?i.hydrationData.errors:null;if(A){let T=H.findIndex(W=>A[W.route.id]!==void 0);me=H.slice(0,T+1).every(W=>!Ws(W.route,w,A))}else me=H.every(T=>!Ws(T.route,w,A))}else{me=!1,H=[];let w=hr(null,x,i.history.location.pathname);w.active&&w.matches&&(K=!0,H=w.matches)}let Ee,M={historyAction:i.history.action,location:i.history.location,matches:H,initialized:me,navigation:Rs,restoreScrollPosition:i.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:i.hydrationData&&i.hydrationData.loaderData||{},actionData:i.hydrationData&&i.hydrationData.actionData||null,errors:i.hydrationData&&i.hydrationData.errors||ge,fetchers:new Map,blockers:new Map},de="POP",ve=null,Se=!1,Ne,Pe=!1,Ge=new Map,Me=null,qe=!1,Ce=!1,we=new Set,$=new Map,te=0,Z=-1,F=new Map,P=new Set,fe=new Map,xe=new Map,he=new Set,ke=new Map,Be,Ae=null;function Ve(){if(z=i.history.listen(({action:w,location:A,delta:T})=>{if(Be){Be(),Be=void 0;return}at(ke.size===0||T!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let W=yn({currentLocation:M.location,nextLocation:A,historyAction:w});if(W&&T!=null){let q=new Promise(oe=>{Be=oe});i.history.go(T*-1),Bn(W,{state:"blocked",location:A,proceed(){Bn(W,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),q.then(()=>i.history.go(T))},reset(){let oe=new Map(M.blockers);oe.set(W,ia),lt({blockers:oe})}}),ve==null||ve.resolve(),ve=null;return}return ln(w,A)}),s){Ag(o,Ge);let w=()=>Ig(o,Ge);o.addEventListener("pagehide",w),Me=()=>o.removeEventListener("pagehide",w)}return M.initialized||ln("POP",M.location,{initialHydration:!0}),Ee}function wt(){z&&z(),Me&&Me(),E.clear(),Ne&&Ne.abort(),M.fetchers.forEach((w,A)=>yi(A)),M.blockers.forEach((w,A)=>Vr(A))}function Pr(w){return E.add(w),()=>E.delete(w)}function lt(w,A={}){w.matches&&(w.matches=w.matches.map(q=>{let oe=g[q.route.id],ce=q.route;return ce.element!==oe.element||ce.errorElement!==oe.errorElement||ce.hydrateFallbackElement!==oe.hydrateFallbackElement?{...q,route:oe}:q})),M={...M,...w};let T=[],W=[];M.fetchers.forEach((q,oe)=>{q.state==="idle"&&(he.has(oe)?T.push(oe):W.push(oe))}),he.forEach(q=>{!M.fetchers.has(q)&&!$.has(q)&&T.push(q)}),[...E].forEach(q=>q(M,{deletedFetchers:T,newErrors:w.errors??null,viewTransitionOpts:A.viewTransitionOpts,flushSync:A.flushSync===!0})),T.forEach(q=>yi(q)),W.forEach(q=>M.fetchers.delete(q))}function Jt(w,A,{flushSync:T}={}){var be,se;let W=M.actionData!=null&&M.navigation.formMethod!=null&&bt(M.navigation.formMethod)&&M.navigation.state==="loading"&&((be=w.state)==null?void 0:be._isRedirect)!==!0,q;A.actionData?Object.keys(A.actionData).length>0?q=A.actionData:q=null:W?q=M.actionData:q=null;let oe=A.loaderData?au(M.loaderData,A.loaderData,A.matches||[],A.errors):M.loaderData,ce=M.blockers;ce.size>0&&(ce=new Map(ce),ce.forEach((je,Ie)=>ce.set(Ie,ia)));let J=qe?!1:ki(w,A.matches||M.matches),ne=Se===!0||M.navigation.formMethod!=null&&bt(M.navigation.formMethod)&&((se=w.state)==null?void 0:se._isRedirect)!==!0;m&&(x=m,m=void 0),qe||de==="POP"||(de==="PUSH"?i.history.push(w,w.state):de==="REPLACE"&&i.history.replace(w,w.state));let ie;if(de==="POP"){let je=Ge.get(M.location.pathname);je&&je.has(w.pathname)?ie={currentLocation:M.location,nextLocation:w}:Ge.has(w.pathname)&&(ie={currentLocation:w,nextLocation:M.location})}else if(Pe){let je=Ge.get(M.location.pathname);je?je.add(w.pathname):(je=new Set([w.pathname]),Ge.set(M.location.pathname,je)),ie={currentLocation:M.location,nextLocation:w}}lt({...A,actionData:q,loaderData:oe,historyAction:de,location:w,initialized:!0,navigation:Rs,revalidation:"idle",restoreScrollPosition:J,preventScrollReset:ne,blockers:ce},{viewTransitionOpts:ie,flushSync:T===!0}),de="POP",Se=!1,Pe=!1,qe=!1,Ce=!1,ve==null||ve.resolve(),ve=null,Ae==null||Ae.resolve(),Ae=null}async function _r(w,A){if(ve==null||ve.resolve(),ve=null,typeof w=="number"){ve||(ve=du());let Ie=ve.promise;return i.history.go(w),Ie}let T=Os(M.location,M.matches,v,w,A==null?void 0:A.fromRouteId,A==null?void 0:A.relative),{path:W,submission:q,error:oe}=Kp(!1,T,A),ce=M.location,J=pa(M.location,W,A&&A.state);J={...J,...i.history.encodeLocation(J)};let ne=A&&A.replace!=null?A.replace:void 0,ie="PUSH";ne===!0?ie="REPLACE":ne===!1||q!=null&&bt(q.formMethod)&&q.formAction===M.location.pathname+M.location.search&&(ie="REPLACE");let be=A&&"preventScrollReset"in A?A.preventScrollReset===!0:void 0,se=(A&&A.flushSync)===!0,je=yn({currentLocation:ce,nextLocation:J,historyAction:ie});if(je){Bn(je,{state:"blocked",location:J,proceed(){Bn(je,{state:"proceeding",proceed:void 0,reset:void 0,location:J}),_r(w,A)},reset(){let Ie=new Map(M.blockers);Ie.set(je,ia),lt({blockers:Ie})}});return}await ln(ie,J,{submission:q,pendingError:oe,preventScrollReset:be,replace:A&&A.replace,enableViewTransition:A&&A.viewTransition,flushSync:se,callSiteDefaultShouldRevalidate:A&&A.unstable_defaultShouldRevalidate})}function ka(){Ae||(Ae=du()),ur(),lt({revalidation:"loading"});let w=Ae.promise;return M.navigation.state==="submitting"?w:M.navigation.state==="idle"?(ln(M.historyAction,M.location,{startUninterruptedRevalidation:!0}),w):(ln(de||M.historyAction,M.navigation.location,{overrideNavigation:M.navigation,enableViewTransition:Pe===!0}),w)}async function ln(w,A,T){Ne&&Ne.abort(),Ne=null,de=w,qe=(T&&T.startUninterruptedRevalidation)===!0,za(M.location,M.matches),Se=(T&&T.preventScrollReset)===!0,Pe=(T&&T.enableViewTransition)===!0;let W=m||x,q=T&&T.overrideNavigation,oe=T!=null&&T.initialHydration&&M.matches&&M.matches.length>0&&!K?M.matches:or(W,A,v),ce=(T&&T.flushSync)===!0;if(oe&&M.initialized&&!Ce&&yg(M.location,A)&&!(T&&T.submission&&bt(T.submission.formMethod))){Jt(A,{matches:oe},{flushSync:ce});return}let J=hr(oe,W,A.pathname);if(J.active&&J.matches&&(oe=J.matches),!oe){let{error:et,notFoundMatches:ct,route:De}=dn(A.pathname);Jt(A,{matches:ct,loaderData:{},errors:{[De.id]:et}},{flushSync:ce});return}Ne=new AbortController;let ne=ui(i.history,A,Ne.signal,T&&T.submission),ie=i.getContext?await i.getContext():new $p,be;if(T&&T.pendingError)be=[lr(oe).route.id,{type:"error",error:T.pendingError}];else if(T&&T.submission&&bt(T.submission.formMethod)){let et=await xi(ne,A,T.submission,oe,ie,J.active,T&&T.initialHydration===!0,{replace:T.replace,flushSync:ce});if(et.shortCircuited)return;if(et.pendingActionResult){let[ct,De]=et.pendingActionResult;if(Ht(De)&&fa(De.error)&&De.error.status===404){Ne=null,Jt(A,{matches:et.matches,loaderData:{},errors:{[ct]:De.error}});return}}oe=et.matches||oe,be=et.pendingActionResult,q=Ms(A,T.submission),ce=!1,J.active=!1,ne=ui(i.history,ne.url,ne.signal)}let{shortCircuited:se,matches:je,loaderData:Ie,errors:nt}=await ja(ne,A,oe,ie,J.active,q,T&&T.submission,T&&T.fetcherSubmission,T&&T.replace,T&&T.initialHydration===!0,ce,be,T&&T.callSiteDefaultShouldRevalidate);se||(Ne=null,Jt(A,{matches:je||oe,...ou(be),loaderData:Ie,errors:nt}))}async function xi(w,A,T,W,q,oe,ce,J={}){ur();let ne=Fg(A,T);if(lt({navigation:ne},{flushSync:J.flushSync===!0}),oe){let se=await Dn(W,A.pathname,w.signal);if(se.type==="aborted")return{shortCircuited:!0};if(se.type==="error"){if(se.partialMatches.length===0){let{matches:Ie,route:nt}=No(x);return{matches:Ie,pendingActionResult:[nt.id,{type:"error",error:se.error}]}}let je=lr(se.partialMatches).route.id;return{matches:se.partialMatches,pendingActionResult:[je,{type:"error",error:se.error}]}}else if(se.matches)W=se.matches;else{let{notFoundMatches:je,error:Ie,route:nt}=dn(A.pathname);return{matches:je,pendingActionResult:[nt.id,{type:"error",error:Ie}]}}}let ie,be=Po(W,A);if(!be.route.action&&!be.route.lazy)ie={type:"error",error:Kt(405,{method:w.method,pathname:A.pathname,routeId:be.route.id})};else{let se=hi(f,g,w,W,be,ce?[]:u,q),je=await Rn(w,se,q,null);if(ie=je[be.route.id],!ie){for(let Ie of W)if(je[Ie.route.id]){ie=je[Ie.route.id];break}}if(w.signal.aborted)return{shortCircuited:!0}}if(Mr(ie)){let se;return J&&J.replace!=null?se=J.replace:se=nu(ie.response.headers.get("Location"),new URL(w.url),v,i.history)===M.location.pathname+M.location.search,await sn(w,ie,!0,{submission:T,replace:se}),{shortCircuited:!0}}if(Ht(ie)){let se=lr(W,be.route.id);return(J&&J.replace)!==!0&&(de="PUSH"),{matches:W,pendingActionResult:[se.route.id,ie,be.route.id]}}return{matches:W,pendingActionResult:[be.route.id,ie]}}async function ja(w,A,T,W,q,oe,ce,J,ne,ie,be,se,je){let Ie=oe||Ms(A,ce),nt=ce||J||su(Ie),et=!qe&&!ie;if(q){if(et){let Oe=Hr(se);lt({navigation:Ie,...Oe!==void 0?{actionData:Oe}:{}},{flushSync:be})}let Le=await Dn(T,A.pathname,w.signal);if(Le.type==="aborted")return{shortCircuited:!0};if(Le.type==="error"){if(Le.partialMatches.length===0){let{matches:_n,route:wn}=No(x);return{matches:_n,loaderData:{},errors:{[wn.id]:Le.error}}}let Oe=lr(Le.partialMatches).route.id;return{matches:Le.partialMatches,loaderData:{},errors:{[Oe]:Le.error}}}else if(Le.matches)T=Le.matches;else{let{error:Oe,notFoundMatches:_n,route:wn}=dn(A.pathname);return{matches:_n,loaderData:{},errors:{[wn.id]:Oe}}}}let ct=m||x,{dsMatches:De,revalidatingFetchers:St}=Qp(w,W,f,g,i.history,M,T,nt,A,ie?[]:u,ie===!0,Ce,we,he,fe,P,ct,v,i.patchRoutesOnNavigation!=null,se,je);if(Z=++te,!i.dataStrategy&&!De.some(Le=>Le.shouldLoad)&&!De.some(Le=>Le.route.middleware&&Le.route.middleware.length>0)&&St.length===0){let Le=Or();return Jt(A,{matches:T,loaderData:{},errors:se&&Ht(se[1])?{[se[0]]:se[1].error}:null,...ou(se),...Le?{fetchers:new Map(M.fetchers)}:{}},{flushSync:be}),{shortCircuited:!0}}if(et){let Le={};if(!q){Le.navigation=Ie;let Oe=Hr(se);Oe!==void 0&&(Le.actionData=Oe)}St.length>0&&(Le.fetchers=pr(St)),lt(Le,{flushSync:be})}St.forEach(Le=>{Wt(Le.key),Le.controller&&$.set(Le.key,Le.controller)});let _e=()=>St.forEach(Le=>Wt(Le.key));Ne&&Ne.signal.addEventListener("abort",_e);let{loaderResults:xr,fetcherResults:Vt}=await vi(De,St,w,W);if(w.signal.aborted)return{shortCircuited:!0};Ne&&Ne.signal.removeEventListener("abort",_e),St.forEach(Le=>$.delete(Le.key));let Rt=To(xr);if(Rt)return await sn(w,Rt.result,!0,{replace:ne}),{shortCircuited:!0};if(Rt=To(Vt),Rt)return P.add(Rt.key),await sn(w,Rt.result,!0,{replace:ne}),{shortCircuited:!0};let{loaderData:Pn,errors:mr}=iu(M,T,xr,se,St,Vt);ie&&M.errors&&(mr={...M.errors,...mr});let cn=Or(),bn=Wr(Z),kt=cn||bn||St.length>0;return{matches:T,loaderData:Pn,errors:mr,...kt?{fetchers:new Map(M.fetchers)}:{}}}function Hr(w){if(w&&!Ht(w[1]))return{[w[0]]:w[1].data};if(M.actionData)return Object.keys(M.actionData).length===0?null:M.actionData}function pr(w){return w.forEach(A=>{let T=M.fetchers.get(A.key),W=aa(void 0,T?T.data:void 0);M.fetchers.set(A.key,W)}),new Map(M.fetchers)}async function Tn(w,A,T,W){Wt(w);let q=(W&&W.flushSync)===!0,oe=m||x,ce=Os(M.location,M.matches,v,T,A,W==null?void 0:W.relative),J=or(oe,ce,v),ne=hr(J,oe,ce);if(ne.active&&ne.matches&&(J=ne.matches),!J){Ot(w,A,Kt(404,{pathname:ce}),{flushSync:q});return}let{path:ie,submission:be,error:se}=Kp(!0,ce,W);if(se){Ot(w,A,se,{flushSync:q});return}let je=i.getContext?await i.getContext():new $p,Ie=(W&&W.preventScrollReset)===!0;if(be&&bt(be.formMethod)){await mi(w,A,ie,J,je,ne.active,q,Ie,be,W&&W.unstable_defaultShouldRevalidate);return}fe.set(w,{routeId:A,path:ie}),await Ca(w,A,ie,J,je,ne.active,q,Ie,be)}async function mi(w,A,T,W,q,oe,ce,J,ne,ie){ur(),fe.delete(w);let be=M.fetchers.get(w);Et(w,zg(ne,be),{flushSync:ce});let se=new AbortController,je=ui(i.history,T,se.signal,ne);if(oe){let Ze=await Dn(W,new URL(je.url).pathname,je.signal,w);if(Ze.type==="aborted")return;if(Ze.type==="error"){Ot(w,A,Ze.error,{flushSync:ce});return}else if(Ze.matches)W=Ze.matches;else{Ot(w,A,Kt(404,{pathname:T}),{flushSync:ce});return}}let Ie=Po(W,T);if(!Ie.route.action&&!Ie.route.lazy){let Ze=Kt(405,{method:ne.formMethod,pathname:T,routeId:A});Ot(w,A,Ze,{flushSync:ce});return}$.set(w,se);let nt=te,et=hi(f,g,je,W,Ie,u,q),ct=await Rn(je,et,q,w),De=ct[Ie.route.id];if(!De){for(let Ze of et)if(ct[Ze.route.id]){De=ct[Ze.route.id];break}}if(je.signal.aborted){$.get(w)===se&&$.delete(w);return}if(he.has(w)){if(Mr(De)||Ht(De)){Et(w,Ln(void 0));return}}else{if(Mr(De))if($.delete(w),Z>nt){Et(w,Ln(void 0));return}else return P.add(w),Et(w,aa(ne)),sn(je,De,!1,{fetcherSubmission:ne,preventScrollReset:J});if(Ht(De)){Ot(w,A,De.error);return}}let St=M.navigation.location||M.location,_e=ui(i.history,St,se.signal),xr=m||x,Vt=M.navigation.state!=="idle"?or(xr,M.navigation.location,v):M.matches;ze(Vt,"Didn't find any matches after fetcher action");let Rt=++te;F.set(w,Rt);let Pn=aa(ne,De.data);M.fetchers.set(w,Pn);let{dsMatches:mr,revalidatingFetchers:cn}=Qp(_e,q,f,g,i.history,M,Vt,ne,St,u,!1,Ce,we,he,fe,P,xr,v,i.patchRoutesOnNavigation!=null,[Ie.route.id,De],ie);cn.filter(Ze=>Ze.key!==w).forEach(Ze=>{let kn=Ze.key,vr=M.fetchers.get(kn),yr=aa(void 0,vr?vr.data:void 0);M.fetchers.set(kn,yr),Wt(kn),Ze.controller&&$.set(kn,Ze.controller)}),lt({fetchers:new Map(M.fetchers)});let bn=()=>cn.forEach(Ze=>Wt(Ze.key));se.signal.addEventListener("abort",bn);let{loaderResults:kt,fetcherResults:Le}=await vi(mr,cn,_e,q);if(se.signal.aborted)return;if(se.signal.removeEventListener("abort",bn),F.delete(w),$.delete(w),cn.forEach(Ze=>$.delete(Ze.key)),M.fetchers.has(w)){let Ze=Ln(De.data);M.fetchers.set(w,Ze)}let Oe=To(kt);if(Oe)return sn(_e,Oe.result,!1,{preventScrollReset:J});if(Oe=To(Le),Oe)return P.add(Oe.key),sn(_e,Oe.result,!1,{preventScrollReset:J});let{loaderData:_n,errors:wn}=iu(M,Vt,kt,void 0,cn,Le);Wr(Rt),M.navigation.state==="loading"&&Rt>Z?(ze(de,"Expected pending action"),Ne&&Ne.abort(),Jt(M.navigation.location,{matches:Vt,loaderData:_n,errors:wn,fetchers:new Map(M.fetchers)})):(lt({errors:wn,loaderData:au(M.loaderData,_n,Vt,wn),fetchers:new Map(M.fetchers)}),Ce=!1)}async function Ca(w,A,T,W,q,oe,ce,J,ne){let ie=M.fetchers.get(w);Et(w,aa(ne,ie?ie.data:void 0),{flushSync:ce});let be=new AbortController,se=ui(i.history,T,be.signal);if(oe){let De=await Dn(W,new URL(se.url).pathname,se.signal,w);if(De.type==="aborted")return;if(De.type==="error"){Ot(w,A,De.error,{flushSync:ce});return}else if(De.matches)W=De.matches;else{Ot(w,A,Kt(404,{pathname:T}),{flushSync:ce});return}}let je=Po(W,T);$.set(w,be);let Ie=te,nt=hi(f,g,se,W,je,u,q),ct=(await Rn(se,nt,q,w))[je.route.id];if($.get(w)===be&&$.delete(w),!se.signal.aborted){if(he.has(w)){Et(w,Ln(void 0));return}if(Mr(ct))if(Z>Ie){Et(w,Ln(void 0));return}else{P.add(w),await sn(se,ct,!1,{preventScrollReset:J});return}if(Ht(ct)){Ot(w,A,ct.error);return}Et(w,Ln(ct.data))}}async function sn(w,A,T,{submission:W,fetcherSubmission:q,preventScrollReset:oe,replace:ce}={}){T||(ve==null||ve.resolve(),ve=null),A.response.headers.has("X-Remix-Revalidate")&&(Ce=!0);let J=A.response.headers.get("Location");ze(J,"Expected a Location header on the redirect Response"),J=nu(J,new URL(w.url),v,i.history);let ne=pa(M.location,J,{_isRedirect:!0});if(s){let nt=!1;if(A.response.headers.has("X-Remix-Reload-Document"))nt=!0;else if(qs(J)){const et=Ru(J,!0);nt=et.origin!==o.location.origin||Qt(et.pathname,v)==null}if(nt){ce?o.location.replace(J):o.location.assign(J);return}}Ne=null;let ie=ce===!0||A.response.headers.has("X-Remix-Replace")?"REPLACE":"PUSH",{formMethod:be,formAction:se,formEncType:je}=M.navigation;!W&&!q&&be&&se&&je&&(W=su(M.navigation));let Ie=W||q;if(rg.has(A.response.status)&&Ie&&bt(Ie.formMethod))await ln(ie,ne,{submission:{...Ie,formAction:J},preventScrollReset:oe||Se,enableViewTransition:T?Pe:void 0});else{let nt=Ms(ne,W);await ln(ie,ne,{overrideNavigation:nt,fetcherSubmission:q,preventScrollReset:oe||Se,enableViewTransition:T?Pe:void 0})}}async function Rn(w,A,T,W){var ce;let q,oe={};try{q=await fg(j,w,A,W,T,!1)}catch(J){return A.filter(ne=>ne.shouldLoad).forEach(ne=>{oe[ne.route.id]={type:"error",error:J}}),oe}if(w.signal.aborted)return oe;if(!bt(w.method))for(let J of A){if(((ce=q[J.route.id])==null?void 0:ce.type)==="error")break;!q.hasOwnProperty(J.route.id)&&!M.loaderData.hasOwnProperty(J.route.id)&&(!M.errors||!M.errors.hasOwnProperty(J.route.id))&&J.shouldCallHandler()&&(q[J.route.id]={type:"error",result:new Error(`No result returned from dataStrategy for route ${J.route.id}`)})}for(let[J,ne]of Object.entries(q))if(jg(ne)){let ie=ne.result;oe[J]={type:"redirect",response:mg(ie,w,J,A,v)}}else oe[J]=await xg(ne);return oe}async function vi(w,A,T,W){let q=Rn(T,w,W,null),oe=Promise.all(A.map(async ne=>{if(ne.matches&&ne.match&&ne.request&&ne.controller){let be=(await Rn(ne.request,ne.matches,W,ne.key))[ne.match.route.id];return{[ne.key]:be}}else return Promise.resolve({[ne.key]:{type:"error",error:Kt(404,{pathname:ne.path})}})})),ce=await q,J=(await oe).reduce((ne,ie)=>Object.assign(ne,ie),{});return{loaderResults:ce,fetcherResults:J}}function ur(){Ce=!0,fe.forEach((w,A)=>{$.has(A)&&we.add(A),Wt(A)})}function Et(w,A,T={}){M.fetchers.set(w,A),lt({fetchers:new Map(M.fetchers)},{flushSync:(T&&T.flushSync)===!0})}function Ot(w,A,T,W={}){let q=lr(M.matches,A);yi(w),lt({errors:{[q.route.id]:T},fetchers:new Map(M.fetchers)},{flushSync:(W&&W.flushSync)===!0})}function Mn(w){return xe.set(w,(xe.get(w)||0)+1),he.has(w)&&he.delete(w),M.fetchers.get(w)||ig}function fr(w,A){Wt(w,A==null?void 0:A.reason),Et(w,Ln(null))}function yi(w){let A=M.fetchers.get(w);$.has(w)&&!(A&&A.state==="loading"&&F.has(w))&&Wt(w),fe.delete(w),F.delete(w),P.delete(w),he.delete(w),we.delete(w),M.fetchers.delete(w)}function Ea(w){let A=(xe.get(w)||0)-1;A<=0?(xe.delete(w),he.add(w)):xe.set(w,A),lt({fetchers:new Map(M.fetchers)})}function Wt(w,A){let T=$.get(w);T&&(T.abort(A),$.delete(w))}function Sa(w){for(let A of w){let T=Mn(A),W=Ln(T.data);M.fetchers.set(A,W)}}function Or(){let w=[],A=!1;for(let T of P){let W=M.fetchers.get(T);ze(W,`Expected fetcher: ${T}`),W.state==="loading"&&(P.delete(T),w.push(T),A=!0)}return Sa(w),A}function Wr(w){let A=[];for(let[T,W]of F)if(W<w){let q=M.fetchers.get(T);ze(q,`Expected fetcher: ${T}`),q.state==="loading"&&(Wt(T),F.delete(T),A.push(T))}return Sa(A),A.length>0}function bi(w,A){let T=M.blockers.get(w)||ia;return ke.get(w)!==A&&ke.set(w,A),T}function Vr(w){M.blockers.delete(w),ke.delete(w)}function Bn(w,A){let T=M.blockers.get(w)||ia;ze(T.state==="unblocked"&&A.state==="blocked"||T.state==="blocked"&&A.state==="blocked"||T.state==="blocked"&&A.state==="proceeding"||T.state==="blocked"&&A.state==="unblocked"||T.state==="proceeding"&&A.state==="unblocked",`Invalid blocker state transition: ${T.state} -> ${A.state}`);let W=new Map(M.blockers);W.set(w,A),lt({blockers:W})}function yn({currentLocation:w,nextLocation:A,historyAction:T}){if(ke.size===0)return;ke.size>1&&at(!1,"A router only supports one blocker at a time");let W=Array.from(ke.entries()),[q,oe]=W[W.length-1],ce=M.blockers.get(q);if(!(ce&&ce.state==="proceeding")&&oe({currentLocation:w,nextLocation:A,historyAction:T}))return q}function dn(w){let A=Kt(404,{pathname:w}),T=m||x,{matches:W,route:q}=No(T);return{notFoundMatches:W,route:q,error:A}}function Fa(w,A,T){if(D=w,_=A,B=T||null,!Q&&M.navigation===Rs){Q=!0;let W=ki(M.location,M.matches);W!=null&&lt({restoreScrollPosition:W})}return()=>{D=null,_=null,B=null}}function wi(w,A){return B&&B(w,A.map(W=>Ih(W,M.loaderData)))||w.key}function za(w,A){if(D&&_){let T=wi(w,A);D[T]=_()}}function ki(w,A){if(D){let T=wi(w,A),W=D[T];if(typeof W=="number")return W}return null}function hr(w,A,T){if(i.patchRoutesOnNavigation)if(w){if(Object.keys(w[0].params).length>0)return{active:!0,matches:da(A,T,v,!0)}}else return{active:!0,matches:da(A,T,v,!0)||[]};return{active:!1,matches:null}}async function Dn(w,A,T,W){if(!i.patchRoutesOnNavigation)return{type:"success",matches:w};let q=w;for(;;){let oe=m==null,ce=m||x,J=g;try{await i.patchRoutesOnNavigation({signal:T,path:A,matches:q,fetcherKey:W,patch:(be,se)=>{T.aborted||Xp(be,se,ce,J,f,!1)}})}catch(be){return{type:"error",error:be,partialMatches:q}}finally{oe&&!T.aborted&&(x=[...x])}if(T.aborted)return{type:"aborted"};let ne=or(ce,A,v),ie=null;if(ne){if(Object.keys(ne[0].params).length===0)return{type:"success",matches:ne};if(ie=da(ce,A,v,!0),!(ie&&q.length<ie.length&&ji(q,ie.slice(0,q.length))))return{type:"success",matches:ne}}if(ie||(ie=da(ce,A,v,!0)),!ie||ji(q,ie))return{type:"success",matches:null};q=ie}}function ji(w,A){return w.length===A.length&&w.every((T,W)=>T.route.id===A[W].route.id)}function gr(w){g={},m=ua(w,f,void 0,g)}function Ci(w,A,T=!1){let W=m==null;Xp(w,A,m||x,g,f,T),W&&(x=[...x],lt({}))}return Ee={get basename(){return v},get future(){return b},get state(){return M},get routes(){return x},get window(){return o},initialize:Ve,subscribe:Pr,enableScrollRestoration:Fa,navigate:_r,fetch:Tn,revalidate:ka,createHref:w=>i.history.createHref(w),encodeLocation:w=>i.history.encodeLocation(w),getFetcher:Mn,resetFetcher:fr,deleteFetcher:Ea,dispose:wt,getBlocker:bi,deleteBlocker:Vr,patchRoutes:Ci,_internalFetchControllers:$,_internalSetRoutes:gr,_internalSetStateDoNotUseOrYouWillBreakYourApp(w){lt(w)}},i.unstable_instrumentations&&(Ee=Zh(Ee,i.unstable_instrumentations.map(w=>w.router).filter(Boolean))),Ee}function lg(i){return i!=null&&("formData"in i&&i.formData!=null||"body"in i&&i.body!==void 0)}function Os(i,o,s,u,c,f){let g,x;if(c){g=[];for(let v of o)if(g.push(v),v.route.id===c){x=v;break}}else g=o,x=o[o.length-1];let m=Ks(u||".",Zs(g),Qt(i.pathname,s)||i.pathname,f==="path");if(u==null&&(m.search=i.search,m.hash=i.hash),(u==null||u===""||u===".")&&x){let v=Js(m.search);if(x.route.index&&!v)m.search=m.search?m.search.replace(/^\?/,"?index&"):"?index";else if(!x.route.index&&v){let j=new URLSearchParams(m.search),b=j.getAll("index");j.delete("index"),b.filter(E=>E).forEach(E=>j.append("index",E));let z=j.toString();m.search=z?`?${z}`:""}}return s!=="/"&&(m.pathname=Vh({basename:s,pathname:m.pathname})),mn(m)}function Kp(i,o,s){if(!s||!lg(s))return{path:o};if(s.formMethod&&!Sg(s.formMethod))return{path:o,error:Kt(405,{method:s.formMethod})};let u=()=>({path:o,error:Kt(400,{type:"invalid-body"})}),f=(s.formMethod||"get").toUpperCase(),g=Qu(o);if(s.body!==void 0){if(s.formEncType==="text/plain"){if(!bt(f))return u();let b=typeof s.body=="string"?s.body:s.body instanceof FormData||s.body instanceof URLSearchParams?Array.from(s.body.entries()).reduce((z,[E,D])=>`${z}${E}=${D}
`,""):String(s.body);return{path:o,submission:{formMethod:f,formAction:g,formEncType:s.formEncType,formData:void 0,json:void 0,text:b}}}else if(s.formEncType==="application/json"){if(!bt(f))return u();try{let b=typeof s.body=="string"?JSON.parse(s.body):s.body;return{path:o,submission:{formMethod:f,formAction:g,formEncType:s.formEncType,formData:void 0,json:b,text:void 0}}}catch{return u()}}}ze(typeof FormData=="function","FormData is not available in this environment");let x,m;if(s.formData)x=$s(s.formData),m=s.formData;else if(s.body instanceof FormData)x=$s(s.body),m=s.body;else if(s.body instanceof URLSearchParams)x=s.body,m=ru(x);else if(s.body==null)x=new URLSearchParams,m=new FormData;else try{x=new URLSearchParams(s.body),m=ru(x)}catch{return u()}let v={formMethod:f,formAction:g,formEncType:s&&s.formEncType||"application/x-www-form-urlencoded",formData:m,json:void 0,text:void 0};if(bt(v.formMethod))return{path:o,submission:v};let j=cr(o);return i&&j.search&&Js(j.search)&&x.append("index",""),j.search=`?${x}`,{path:mn(j),submission:v}}function Qp(i,o,s,u,c,f,g,x,m,v,j,b,z,E,D,B,_,Q,H,K,ge){var qe;let me=K?Ht(K[1])?K[1].error:K[1].data:void 0,Ee=c.createURL(f.location),M=c.createURL(m),de;if(j&&f.errors){let Ce=Object.keys(f.errors)[0];de=g.findIndex(we=>we.route.id===Ce)}else if(K&&Ht(K[1])){let Ce=K[0];de=g.findIndex(we=>we.route.id===Ce)-1}let ve=K?K[1].statusCode:void 0,Se=ve&&ve>=400,Ne={currentUrl:Ee,currentParams:((qe=f.matches[0])==null?void 0:qe.params)||{},nextUrl:M,nextParams:g[0].params,...x,actionResult:me,actionStatus:ve},Pe=va(g),Ge=g.map((Ce,we)=>{let{route:$}=Ce,te=null;if(de!=null&&we>de?te=!1:$.lazy?te=!0:Qs($)?j?te=Ws($,f.loaderData,f.errors):sg(f.loaderData,f.matches[we],Ce)&&(te=!0):te=!1,te!==null)return Vs(s,u,i,Pe,Ce,v,o,te);let Z=!1;typeof ge=="boolean"?Z=ge:Se?Z=!1:(b||Ee.pathname+Ee.search===M.pathname+M.search||Ee.search!==M.search||dg(f.matches[we],Ce))&&(Z=!0);let F={...Ne,defaultShouldRevalidate:Z},P=ca(Ce,F);return Vs(s,u,i,Pe,Ce,v,o,P,F,ge)}),Me=[];return D.forEach((Ce,we)=>{if(j||!g.some(he=>he.route.id===Ce.routeId)||E.has(we))return;let $=f.fetchers.get(we),te=$&&$.state!=="idle"&&$.data===void 0,Z=or(_,Ce.path,Q);if(!Z){if(H&&te)return;Me.push({key:we,routeId:Ce.routeId,path:Ce.path,matches:null,match:null,request:null,controller:null});return}if(B.has(we))return;let F=Po(Z,Ce.path),P=new AbortController,fe=ui(c,Ce.path,P.signal),xe=null;if(z.has(we))z.delete(we),xe=hi(s,u,fe,Z,F,v,o);else if(te)b&&(xe=hi(s,u,fe,Z,F,v,o));else{let he;typeof ge=="boolean"?he=ge:Se?he=!1:he=b;let ke={...Ne,defaultShouldRevalidate:he};ca(F,ke)&&(xe=hi(s,u,fe,Z,F,v,o,ke))}xe&&Me.push({key:we,routeId:Ce.routeId,path:Ce.path,matches:xe,match:F,request:fe,controller:P})}),{dsMatches:Ge,revalidatingFetchers:Me}}function Qs(i){return i.loader!=null||i.middleware!=null&&i.middleware.length>0}function Ws(i,o,s){if(i.lazy)return!0;if(!Qs(i))return!1;let u=o!=null&&i.id in o,c=s!=null&&s[i.id]!==void 0;return!u&&c?!1:typeof i.loader=="function"&&i.loader.hydrate===!0?!0:!u&&!c}function sg(i,o,s){let u=!o||s.route.id!==o.route.id,c=!i.hasOwnProperty(s.route.id);return u||c}function dg(i,o){let s=i.route.path;return i.pathname!==o.pathname||s!=null&&s.endsWith("*")&&i.params["*"]!==o.params["*"]}function ca(i,o){if(i.route.shouldRevalidate){let s=i.route.shouldRevalidate(o);if(typeof s=="boolean")return s}return o.defaultShouldRevalidate}function Xp(i,o,s,u,c,f){let g;if(i){let v=u[i];ze(v,`No route found to patch children into: routeId = ${i}`),v.children||(v.children=[]),g=v.children}else g=s;let x=[],m=[];if(o.forEach(v=>{let j=g.find(b=>Uu(v,b));j?m.push({existingRoute:j,newRoute:v}):x.push(v)}),x.length>0){let v=ua(x,c,[i||"_","patch",String((g==null?void 0:g.length)||"0")],u);g.push(...v)}if(f&&m.length>0)for(let v=0;v<m.length;v++){let{existingRoute:j,newRoute:b}=m[v],z=j,[E]=ua([b],c,[],{},!0);Object.assign(z,{element:E.element?E.element:z.element,errorElement:E.errorElement?E.errorElement:z.errorElement,hydrateFallbackElement:E.hydrateFallbackElement?E.hydrateFallbackElement:z.hydrateFallbackElement})}}function Uu(i,o){return"id"in i&&"id"in o&&i.id===o.id?!0:i.index===o.index&&i.path===o.path&&i.caseSensitive===o.caseSensitive?(!i.children||i.children.length===0)&&(!o.children||o.children.length===0)?!0:i.children.every((s,u)=>{var c;return(c=o.children)==null?void 0:c.some(f=>Uu(s,f))}):!1}var Jp=new WeakMap,Yu=({key:i,route:o,manifest:s,mapRouteProperties:u})=>{let c=s[o.id];if(ze(c,"No route found in manifest"),!c.lazy||typeof c.lazy!="object")return;let f=c.lazy[i];if(!f)return;let g=Jp.get(c);g||(g={},Jp.set(c,g));let x=g[i];if(x)return x;let m=(async()=>{let v=Sh(i),b=c[i]!==void 0&&i!=="hasErrorBoundary";if(v)at(!v,"Route property "+i+" is not a supported lazy route property. This property will be ignored."),g[i]=Promise.resolve();else if(b)at(!1,`Route "${c.id}" has a static property "${i}" defined. The lazy property will be ignored.`);else{let z=await f();z!=null&&(Object.assign(c,{[i]:z}),Object.assign(c,u(c)))}typeof c.lazy=="object"&&(c.lazy[i]=void 0,Object.values(c.lazy).every(z=>z===void 0)&&(c.lazy=void 0))})();return g[i]=m,m},eu=new WeakMap;function cg(i,o,s,u,c){let f=s[i.id];if(ze(f,"No route found in manifest"),!i.lazy)return{lazyRoutePromise:void 0,lazyHandlerPromise:void 0};if(typeof i.lazy=="function"){let j=eu.get(f);if(j)return{lazyRoutePromise:j,lazyHandlerPromise:j};let b=(async()=>{ze(typeof i.lazy=="function","No lazy route function found");let z=await i.lazy(),E={};for(let D in z){let B=z[D];if(B===void 0)continue;let _=zh(D),H=f[D]!==void 0&&D!=="hasErrorBoundary";_?at(!_,"Route property "+D+" is not a supported property to be returned from a lazy route function. This property will be ignored."):H?at(!H,`Route "${f.id}" has a static property "${D}" defined but its lazy function is also returning a value for this property. The lazy route property "${D}" will be ignored.`):E[D]=B}Object.assign(f,E),Object.assign(f,{...u(f),lazy:void 0})})();return eu.set(f,b),b.catch(()=>{}),{lazyRoutePromise:b,lazyHandlerPromise:b}}let g=Object.keys(i.lazy),x=[],m;for(let j of g){if(c&&c.includes(j))continue;let b=Yu({key:j,route:i,manifest:s,mapRouteProperties:u});b&&(x.push(b),j===o&&(m=b))}let v=x.length>0?Promise.all(x).then(()=>{}):void 0;return v==null||v.catch(()=>{}),m==null||m.catch(()=>{}),{lazyRoutePromise:v,lazyHandlerPromise:m}}async function tu(i){let o=i.matches.filter(c=>c.shouldLoad),s={};return(await Promise.all(o.map(c=>c.resolve()))).forEach((c,f)=>{s[o[f].route.id]=c}),s}async function pg(i){return i.matches.some(o=>o.route.middleware)?qu(i,()=>tu(i)):tu(i)}function qu(i,o){return ug(i,o,u=>{if(Eg(u))throw u;return u},wg,s);function s(u,c,f){if(f)return Promise.resolve(Object.assign(f.value,{[c]:{type:"error",result:u}}));{let{matches:g}=i,x=Math.min(Math.max(g.findIndex(v=>v.route.id===c),0),Math.max(g.findIndex(v=>v.shouldCallHandler()),0)),m=lr(g,g[x].route.id).route.id;return Promise.resolve({[m]:{type:"error",result:u}})}}}async function ug(i,o,s,u,c){let{matches:f,request:g,params:x,context:m,unstable_pattern:v}=i,j=f.flatMap(z=>z.route.middleware?z.route.middleware.map(E=>[z.route.id,E]):[]);return await Zu({request:g,params:x,context:m,unstable_pattern:v},j,o,s,u,c)}async function Zu(i,o,s,u,c,f,g=0){let{request:x}=i;if(x.signal.aborted)throw x.signal.reason??new Error(`Request aborted: ${x.method} ${x.url}`);let m=o[g];if(!m)return await s();let[v,j]=m,b,z=async()=>{if(b)throw new Error("You may only call `next()` once per middleware");try{return b={value:await Zu(i,o,s,u,c,f,g+1)},b.value}catch(E){return b={value:await f(E,v,b)},b.value}};try{let E=await j(i,z),D=E!=null?u(E):void 0;return c(D)?D:b?D??b.value:(b={value:await z()},b.value)}catch(E){return await f(E,v,b)}}function Ku(i,o,s,u,c){let f=Yu({key:"middleware",route:u.route,manifest:o,mapRouteProperties:i}),g=cg(u.route,bt(s.method)?"action":"loader",o,i,c);return{middleware:f,route:g.lazyRoutePromise,handler:g.lazyHandlerPromise}}function Vs(i,o,s,u,c,f,g,x,m=null,v){let j=!1,b=Ku(i,o,s,c,f);return{...c,_lazyPromises:b,shouldLoad:x,shouldRevalidateArgs:m,shouldCallHandler(z){return j=!0,m?typeof v=="boolean"?ca(c,{...m,defaultShouldRevalidate:v}):typeof z=="boolean"?ca(c,{...m,defaultShouldRevalidate:z}):ca(c,m):x},resolve(z){let{lazy:E,loader:D,middleware:B}=c.route,_=j||x||z&&!bt(s.method)&&(E||D),Q=B&&B.length>0&&!D&&!E;return _&&(bt(s.method)||!Q)?hg({request:s,unstable_pattern:u,match:c,lazyHandlerPromise:b==null?void 0:b.handler,lazyRoutePromise:b==null?void 0:b.route,handlerOverride:z,scopedContext:g}):Promise.resolve({type:"data",result:void 0})}}}function hi(i,o,s,u,c,f,g,x=null){return u.map(m=>m.route.id!==c.route.id?{...m,shouldLoad:!1,shouldRevalidateArgs:x,shouldCallHandler:()=>!1,_lazyPromises:Ku(i,o,s,m,f),resolve:()=>Promise.resolve({type:"data",result:void 0})}:Vs(i,o,s,va(u),m,f,g,!0,x))}async function fg(i,o,s,u,c,f){s.some(v=>{var j;return(j=v._lazyPromises)==null?void 0:j.middleware})&&await Promise.all(s.map(v=>{var j;return(j=v._lazyPromises)==null?void 0:j.middleware}));let g={request:o,unstable_pattern:va(s),params:s[0].params,context:c,matches:s},m=await i({...g,fetcherKey:u,runClientMiddleware:v=>{let j=g;return qu(j,()=>v({...j,fetcherKey:u,runClientMiddleware:()=>{throw new Error("Cannot call `runClientMiddleware()` from within an `runClientMiddleware` handler")}}))}});try{await Promise.all(s.flatMap(v=>{var j,b;return[(j=v._lazyPromises)==null?void 0:j.handler,(b=v._lazyPromises)==null?void 0:b.route]}))}catch{}return m}async function hg({request:i,unstable_pattern:o,match:s,lazyHandlerPromise:u,lazyRoutePromise:c,handlerOverride:f,scopedContext:g}){let x,m,v=bt(i.method),j=v?"action":"loader",b=z=>{let E,D=new Promise((Q,H)=>E=H);m=()=>E(),i.signal.addEventListener("abort",m);let B=Q=>typeof z!="function"?Promise.reject(new Error(`You cannot call the handler for a route which defines a boolean "${j}" [routeId: ${s.route.id}]`)):z({request:i,unstable_pattern:o,params:s.params,context:g},...Q!==void 0?[Q]:[]),_=(async()=>{try{return{type:"data",result:await(f?f(H=>B(H)):B())}}catch(Q){return{type:"error",result:Q}}})();return Promise.race([_,D])};try{let z=v?s.route.action:s.route.loader;if(u||c)if(z){let E,[D]=await Promise.all([b(z).catch(B=>{E=B}),u,c]);if(E!==void 0)throw E;x=D}else{await u;let E=v?s.route.action:s.route.loader;if(E)[x]=await Promise.all([b(E),c]);else if(j==="action"){let D=new URL(i.url),B=D.pathname+D.search;throw Kt(405,{method:i.method,pathname:B,routeId:s.route.id})}else return{type:"data",result:void 0}}else if(z)x=await b(z);else{let E=new URL(i.url),D=E.pathname+E.search;throw Kt(404,{pathname:D})}}catch(z){return{type:"error",result:z}}finally{m&&i.signal.removeEventListener("abort",m)}return x}async function gg(i){let o=i.headers.get("Content-Type");return o&&/\bapplication\/json\b/.test(o)?i.body==null?null:i.json():i.text()}async function xg(i){var u,c,f,g,x;let{result:o,type:s}=i;if(Xs(o)){let m;try{m=await gg(o)}catch(v){return{type:"error",error:v}}return s==="error"?{type:"error",error:new ma(o.status,o.statusText,m),statusCode:o.status,headers:o.headers}:{type:"data",data:m,statusCode:o.status,headers:o.headers}}return s==="error"?lu(o)?o.data instanceof Error?{type:"error",error:o.data,statusCode:(u=o.init)==null?void 0:u.status,headers:(c=o.init)!=null&&c.headers?new Headers(o.init.headers):void 0}:{type:"error",error:bg(o),statusCode:fa(o)?o.status:void 0,headers:(f=o.init)!=null&&f.headers?new Headers(o.init.headers):void 0}:{type:"error",error:o,statusCode:fa(o)?o.status:void 0}:lu(o)?{type:"data",data:o.data,statusCode:(g=o.init)==null?void 0:g.status,headers:(x=o.init)!=null&&x.headers?new Headers(o.init.headers):void 0}:{type:"data",data:o}}function mg(i,o,s,u,c){let f=i.headers.get("Location");if(ze(f,"Redirects returned/thrown from loaders/actions must have a Location header"),!qs(f)){let g=u.slice(0,u.findIndex(x=>x.route.id===s)+1);f=Os(new URL(o.url),g,c,f),i.headers.set("Location",f)}return i}function nu(i,o,s,u){let c=["about:","blob:","chrome:","chrome-untrusted:","content:","data:","devtools:","file:","filesystem:","javascript:"];if(qs(i)){let f=i,g=f.startsWith("//")?new URL(o.protocol+f):new URL(f);if(c.includes(g.protocol))throw new Error("Invalid redirect location");let x=Qt(g.pathname,s)!=null;if(g.origin===o.origin&&x)return g.pathname+g.search+g.hash}try{let f=u.createURL(i);if(c.includes(f.protocol))throw new Error("Invalid redirect location")}catch{}return i}function ui(i,o,s,u){let c=i.createURL(Qu(o)).toString(),f={signal:s};if(u&&bt(u.formMethod)){let{formMethod:g,formEncType:x}=u;f.method=g.toUpperCase(),x==="application/json"?(f.headers=new Headers({"Content-Type":x}),f.body=JSON.stringify(u.json)):x==="text/plain"?f.body=u.text:x==="application/x-www-form-urlencoded"&&u.formData?f.body=$s(u.formData):f.body=u.formData}return new Request(c,f)}function $s(i){let o=new URLSearchParams;for(let[s,u]of i.entries())o.append(s,typeof u=="string"?u:u.name);return o}function ru(i){let o=new FormData;for(let[s,u]of i.entries())o.append(s,u);return o}function vg(i,o,s,u=!1,c=!1){let f={},g=null,x,m=!1,v={},j=s&&Ht(s[1])?s[1].error:void 0;return i.forEach(b=>{if(!(b.route.id in o))return;let z=b.route.id,E=o[z];if(ze(!Mr(E),"Cannot handle redirect results in processLoaderData"),Ht(E)){let D=E.error;if(j!==void 0&&(D=j,j=void 0),g=g||{},c)g[z]=D;else{let B=lr(i,z);g[B.route.id]==null&&(g[B.route.id]=D)}u||(f[z]=Gu),m||(m=!0,x=fa(E.error)?E.error.status:500),E.headers&&(v[z]=E.headers)}else f[z]=E.data,E.statusCode&&E.statusCode!==200&&!m&&(x=E.statusCode),E.headers&&(v[z]=E.headers)}),j!==void 0&&s&&(g={[s[0]]:j},s[2]&&(f[s[2]]=void 0)),{loaderData:f,errors:g,statusCode:x||200,loaderHeaders:v}}function iu(i,o,s,u,c,f){let{loaderData:g,errors:x}=vg(o,s,u);return c.filter(m=>!m.matches||m.matches.some(v=>v.shouldLoad)).forEach(m=>{let{key:v,match:j,controller:b}=m;if(b&&b.signal.aborted)return;let z=f[v];if(ze(z,"Did not find corresponding fetcher result"),Ht(z)){let E=lr(i.matches,j==null?void 0:j.route.id);x&&x[E.route.id]||(x={...x,[E.route.id]:z.error}),i.fetchers.delete(v)}else if(Mr(z))ze(!1,"Unhandled fetcher revalidation redirect");else{let E=Ln(z.data);i.fetchers.set(v,E)}}),{loaderData:g,errors:x}}function au(i,o,s,u){let c=Object.entries(o).filter(([,f])=>f!==Gu).reduce((f,[g,x])=>(f[g]=x,f),{});for(let f of s){let g=f.route.id;if(!o.hasOwnProperty(g)&&i.hasOwnProperty(g)&&f.route.loader&&(c[g]=i[g]),u&&u.hasOwnProperty(g))break}return c}function ou(i){return i?Ht(i[1])?{actionData:{}}:{actionData:{[i[0]]:i[1].data}}:{}}function lr(i,o){return(o?i.slice(0,i.findIndex(u=>u.route.id===o)+1):[...i]).reverse().find(u=>u.route.hasErrorBoundary===!0)||i[0]}function No(i){let o=i.length===1?i[0]:i.find(s=>s.index||!s.path||s.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:o}],route:o}}function Kt(i,{pathname:o,routeId:s,method:u,type:c,message:f}={}){let g="Unknown Server Error",x="Unknown @remix-run/router error";return i===400?(g="Bad Request",u&&o&&s?x=`You made a ${u} request to "${o}" but did not provide a \`loader\` for route "${s}", so there is no way to handle the request.`:c==="invalid-body"&&(x="Unable to encode submission body")):i===403?(g="Forbidden",x=`Route "${s}" does not match URL "${o}"`):i===404?(g="Not Found",x=`No route matches URL "${o}"`):i===405&&(g="Method Not Allowed",u&&o&&s?x=`You made a ${u.toUpperCase()} request to "${o}" but did not provide an \`action\` for route "${s}", so there is no way to handle the request.`:u&&(x=`Invalid request method "${u.toUpperCase()}"`)),new ma(i||500,g,new Error(x),!0)}function To(i){let o=Object.entries(i);for(let s=o.length-1;s>=0;s--){let[u,c]=o[s];if(Mr(c))return{key:u,result:c}}}function Qu(i){let o=typeof i=="string"?cr(i):i;return mn({...o,hash:""})}function yg(i,o){return i.pathname!==o.pathname||i.search!==o.search?!1:i.hash===""?o.hash!=="":i.hash===o.hash?!0:o.hash!==""}function bg(i){var o,s;return new ma(((o=i.init)==null?void 0:o.status)??500,((s=i.init)==null?void 0:s.statusText)??"Internal Server Error",i.data)}function wg(i){return i!=null&&typeof i=="object"&&Object.entries(i).every(([o,s])=>typeof o=="string"&&kg(s))}function kg(i){return i!=null&&typeof i=="object"&&"type"in i&&"result"in i&&(i.type==="data"||i.type==="error")}function jg(i){return Xs(i.result)&&Vu.has(i.result.status)}function Ht(i){return i.type==="error"}function Mr(i){return(i&&i.type)==="redirect"}function lu(i){return typeof i=="object"&&i!=null&&"type"in i&&"data"in i&&"init"in i&&i.type==="DataWithResponseInit"}function Xs(i){return i!=null&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.headers=="object"&&typeof i.body<"u"}function Cg(i){return Vu.has(i)}function Eg(i){return Xs(i)&&Cg(i.status)&&i.headers.has("Location")}function Sg(i){return ng.has(i.toUpperCase())}function bt(i){return eg.has(i.toUpperCase())}function Js(i){return new URLSearchParams(i).getAll("index").some(o=>o==="")}function Po(i,o){let s=typeof o=="string"?cr(o).search:o.search;if(i[i.length-1].route.index&&Js(s||""))return i[i.length-1];let u=Pu(i);return u[u.length-1]}function su(i){let{formMethod:o,formAction:s,formEncType:u,text:c,formData:f,json:g}=i;if(!(!o||!s||!u)){if(c!=null)return{formMethod:o,formAction:s,formEncType:u,formData:void 0,json:void 0,text:c};if(f!=null)return{formMethod:o,formAction:s,formEncType:u,formData:f,json:void 0,text:void 0};if(g!==void 0)return{formMethod:o,formAction:s,formEncType:u,formData:void 0,json:g,text:void 0}}}function Ms(i,o){return o?{state:"loading",location:i,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}:{state:"loading",location:i,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function Fg(i,o){return{state:"submitting",location:i,formMethod:o.formMethod,formAction:o.formAction,formEncType:o.formEncType,formData:o.formData,json:o.json,text:o.text}}function aa(i,o){return i?{state:"loading",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:o}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:o}}function zg(i,o){return{state:"submitting",formMethod:i.formMethod,formAction:i.formAction,formEncType:i.formEncType,formData:i.formData,json:i.json,text:i.text,data:o?o.data:void 0}}function Ln(i){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:i}}function Ag(i,o){try{let s=i.sessionStorage.getItem($u);if(s){let u=JSON.parse(s);for(let[c,f]of Object.entries(u||{}))f&&Array.isArray(f)&&o.set(c,new Set(f||[]))}}catch{}}function Ig(i,o){if(o.size>0){let s={};for(let[u,c]of o)s[u]=[...c];try{i.sessionStorage.setItem($u,JSON.stringify(s))}catch(u){at(!1,`Failed to save applied view transitions in sessionStorage (${u}).`)}}}function du(){let i,o,s=new Promise((u,c)=>{i=async f=>{u(f);try{await s}catch{}},o=async f=>{c(f);try{await s}catch{}}});return{promise:s,resolve:i,reject:o}}var Br=I.createContext(null);Br.displayName="DataRouter";var ya=I.createContext(null);ya.displayName="DataRouterState";var Xu=I.createContext(!1);function Lg(){return I.useContext(Xu)}var ed=I.createContext({isTransitioning:!1});ed.displayName="ViewTransition";var Ju=I.createContext(new Map);Ju.displayName="Fetchers";var Ng=I.createContext(null);Ng.displayName="Await";var Xt=I.createContext(null);Xt.displayName="Navigation";var Go=I.createContext(null);Go.displayName="Location";var vn=I.createContext({outlet:null,matches:[],isDataRoute:!1});vn.displayName="Route";var td=I.createContext(null);td.displayName="RouteError";var e0="REACT_ROUTER_ERROR",Tg="REDIRECT",Rg="ROUTE_ERROR_RESPONSE";function Mg(i){if(i.startsWith(`${e0}:${Tg}:{`))try{let o=JSON.parse(i.slice(28));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.location=="string"&&typeof o.reloadDocument=="boolean"&&typeof o.replace=="boolean")return o}catch{}}function Bg(i){if(i.startsWith(`${e0}:${Rg}:{`))try{let o=JSON.parse(i.slice(40));if(typeof o=="object"&&o&&typeof o.status=="number"&&typeof o.statusText=="string")return new ma(o.status,o.statusText,o.data)}catch{}}function Dg(i,{relative:o}={}){ze(ba(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:u}=I.useContext(Xt),{hash:c,pathname:f,search:g}=wa(i,{relative:o}),x=f;return s!=="/"&&(x=f==="/"?s:xn([s,f])),u.createHref({pathname:x,search:g,hash:c})}function ba(){return I.useContext(Go)!=null}function Dr(){return ze(ba(),"useLocation() may be used only in the context of a <Router> component."),I.useContext(Go).location}var t0="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function n0(i){I.useContext(Xt).static||I.useLayoutEffect(i)}function Nn(){let{isDataRoute:i}=I.useContext(vn);return i?Xg():Pg()}function Pg(){ze(ba(),"useNavigate() may be used only in the context of a <Router> component.");let i=I.useContext(Br),{basename:o,navigator:s}=I.useContext(Xt),{matches:u}=I.useContext(vn),{pathname:c}=Dr(),f=JSON.stringify(Zs(u)),g=I.useRef(!1);return n0(()=>{g.current=!0}),I.useCallback((m,v={})=>{if(at(g.current,t0),!g.current)return;if(typeof m=="number"){s.go(m);return}let j=Ks(m,JSON.parse(f),c,v.relative==="path");i==null&&o!=="/"&&(j.pathname=j.pathname==="/"?o:xn([o,j.pathname])),(v.replace?s.replace:s.push)(j,v.state,v)},[o,s,f,c,i])}var _g=I.createContext(null);function Hg(i){let o=I.useContext(vn).outlet;return I.useMemo(()=>o&&I.createElement(_g.Provider,{value:i},o),[o,i])}function wa(i,{relative:o}={}){let{matches:s}=I.useContext(vn),{pathname:u}=Dr(),c=JSON.stringify(Zs(s));return I.useMemo(()=>Ks(i,JSON.parse(c),u,o==="path"),[i,c,u,o])}function Og(i,o,s,u,c){ze(ba(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:f}=I.useContext(Xt),{matches:g}=I.useContext(vn),x=g[g.length-1],m=x?x.params:{},v=x?x.pathname:"/",j=x?x.pathnameBase:"/",b=x&&x.route;{let H=b&&b.path||"";i0(v,!b||H.endsWith("*")||H.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${H}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${H}"> to <Route path="${H==="/"?"*":`${H}/*`}">.`)}let z=Dr(),E;E=z;let D=E.pathname||"/",B=D;if(j!=="/"){let H=j.replace(/^\//,"").split("/");B="/"+D.replace(/^\//,"").split("/").slice(H.length).join("/")}let _=or(i,{pathname:B});return at(b||_!=null,`No routes matched location "${E.pathname}${E.search}${E.hash}" `),at(_==null||_[_.length-1].route.element!==void 0||_[_.length-1].route.Component!==void 0||_[_.length-1].route.lazy!==void 0,`Matched leaf route at location "${E.pathname}${E.search}${E.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Ug(_&&_.map(H=>Object.assign({},H,{params:Object.assign({},m,H.params),pathname:xn([j,f.encodeLocation?f.encodeLocation(H.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathname]),pathnameBase:H.pathnameBase==="/"?j:xn([j,f.encodeLocation?f.encodeLocation(H.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:H.pathnameBase])})),g,s,u,c)}function Wg(){let i=Qg(),o=fa(i)?`${i.status} ${i.statusText}`:i instanceof Error?i.message:JSON.stringify(i),s=i instanceof Error?i.stack:null,u="rgba(200,200,200, 0.5)",c={padding:"0.5rem",backgroundColor:u},f={padding:"2px 4px",backgroundColor:u},g=null;return console.error("Error handled by React Router default ErrorBoundary:",i),g=I.createElement(I.Fragment,null,I.createElement("p",null,"💿 Hey developer 👋"),I.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",I.createElement("code",{style:f},"ErrorBoundary")," or"," ",I.createElement("code",{style:f},"errorElement")," prop on your route.")),I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},o),s?I.createElement("pre",{style:c},s):null,g)}var Vg=I.createElement(Wg,null),r0=class extends I.Component{constructor(i){super(i),this.state={location:i.location,revalidation:i.revalidation,error:i.error}}static getDerivedStateFromError(i){return{error:i}}static getDerivedStateFromProps(i,o){return o.location!==i.location||o.revalidation!=="idle"&&i.revalidation==="idle"?{error:i.error,location:i.location,revalidation:i.revalidation}:{error:i.error!==void 0?i.error:o.error,location:o.location,revalidation:i.revalidation||o.revalidation}}componentDidCatch(i,o){this.props.onError?this.props.onError(i,o):console.error("React Router caught the following error during render",i)}render(){let i=this.state.error;if(this.context&&typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){const s=Bg(i.digest);s&&(i=s)}let o=i!==void 0?I.createElement(vn.Provider,{value:this.props.routeContext},I.createElement(td.Provider,{value:i,children:this.props.component})):this.props.children;return this.context?I.createElement($g,{error:i},o):o}};r0.contextType=Xu;var Bs=new WeakMap;function $g({children:i,error:o}){let{basename:s}=I.useContext(Xt);if(typeof o=="object"&&o&&"digest"in o&&typeof o.digest=="string"){let u=Mg(o.digest);if(u){let c=Bs.get(o);if(c)throw c;let f=Hu(u.location,s);if(_u&&!Bs.get(o))if(f.isExternal||u.reloadDocument)window.location.href=f.absoluteURL||f.to;else{const g=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(f.to,{replace:u.replace}));throw Bs.set(o,g),g}return I.createElement("meta",{httpEquiv:"refresh",content:`0;url=${f.absoluteURL||f.to}`})}}return i}function Gg({routeContext:i,match:o,children:s}){let u=I.useContext(Br);return u&&u.static&&u.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(u.staticContext._deepestRenderedBoundaryId=o.route.id),I.createElement(vn.Provider,{value:i},s)}function Ug(i,o=[],s=null,u=null,c=null){if(i==null){if(!s)return null;if(s.errors)i=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)i=s.matches;else return null}let f=i,g=s==null?void 0:s.errors;if(g!=null){let j=f.findIndex(b=>b.route.id&&(g==null?void 0:g[b.route.id])!==void 0);ze(j>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(g).join(",")}`),f=f.slice(0,Math.min(f.length,j+1))}let x=!1,m=-1;if(s)for(let j=0;j<f.length;j++){let b=f[j];if((b.route.HydrateFallback||b.route.hydrateFallbackElement)&&(m=j),b.route.id){let{loaderData:z,errors:E}=s,D=b.route.loader&&!z.hasOwnProperty(b.route.id)&&(!E||E[b.route.id]===void 0);if(b.route.lazy||D){x=!0,m>=0?f=f.slice(0,m+1):f=[f[0]];break}}}let v=s&&u?(j,b)=>{var z,E;u(j,{location:s.location,params:((E=(z=s.matches)==null?void 0:z[0])==null?void 0:E.params)??{},unstable_pattern:va(s.matches),errorInfo:b})}:void 0;return f.reduceRight((j,b,z)=>{let E,D=!1,B=null,_=null;s&&(E=g&&b.route.id?g[b.route.id]:void 0,B=b.route.errorElement||Vg,x&&(m<0&&z===0?(i0("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),D=!0,_=null):m===z&&(D=!0,_=b.route.hydrateFallbackElement||null)));let Q=o.concat(f.slice(0,z+1)),H=()=>{let K;return E?K=B:D?K=_:b.route.Component?K=I.createElement(b.route.Component,null):b.route.element?K=b.route.element:K=j,I.createElement(Gg,{match:b,routeContext:{outlet:j,matches:Q,isDataRoute:s!=null},children:K})};return s&&(b.route.ErrorBoundary||b.route.errorElement||z===0)?I.createElement(r0,{location:s.location,revalidation:s.revalidation,component:B,error:E,children:H(),routeContext:{outlet:null,matches:Q,isDataRoute:!0},onError:v}):H()},null)}function nd(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yg(i){let o=I.useContext(Br);return ze(o,nd(i)),o}function qg(i){let o=I.useContext(ya);return ze(o,nd(i)),o}function Zg(i){let o=I.useContext(vn);return ze(o,nd(i)),o}function rd(i){let o=Zg(i),s=o.matches[o.matches.length-1];return ze(s.route.id,`${i} can only be used on routes that contain a unique "id"`),s.route.id}function Kg(){return rd("useRouteId")}function Qg(){var u;let i=I.useContext(td),o=qg("useRouteError"),s=rd("useRouteError");return i!==void 0?i:(u=o.errors)==null?void 0:u[s]}function Xg(){let{router:i}=Yg("useNavigate"),o=rd("useNavigate"),s=I.useRef(!1);return n0(()=>{s.current=!0}),I.useCallback(async(c,f={})=>{at(s.current,t0),s.current&&(typeof c=="number"?await i.navigate(c):await i.navigate(c,{fromRouteId:o,...f}))},[i,o])}var cu={};function i0(i,o,s){!o&&!cu[i]&&(cu[i]=!0,at(!1,s))}var pu={};function uu(i,o){!i&&!pu[o]&&(pu[o]=!0,console.warn(o))}var Jg="useOptimistic",fu=yh[Jg],ex=()=>{};function tx(i){return fu?fu(i):[i,ex]}function nx(i){let o={hasErrorBoundary:i.hasErrorBoundary||i.ErrorBoundary!=null||i.errorElement!=null};return i.Component&&(i.element&&at(!1,"You should not include both `Component` and `element` on your route - `Component` will be used."),Object.assign(o,{element:I.createElement(i.Component),Component:void 0})),i.HydrateFallback&&(i.hydrateFallbackElement&&at(!1,"You should not include both `HydrateFallback` and `hydrateFallbackElement` on your route - `HydrateFallback` will be used."),Object.assign(o,{hydrateFallbackElement:I.createElement(i.HydrateFallback),HydrateFallback:void 0})),i.ErrorBoundary&&(i.errorElement&&at(!1,"You should not include both `ErrorBoundary` and `errorElement` on your route - `ErrorBoundary` will be used."),Object.assign(o,{errorElement:I.createElement(i.ErrorBoundary),ErrorBoundary:void 0})),o}var rx=["HydrateFallback","hydrateFallbackElement"],ix=class{constructor(){this.status="pending",this.promise=new Promise((i,o)=>{this.resolve=s=>{this.status==="pending"&&(this.status="resolved",i(s))},this.reject=s=>{this.status==="pending"&&(this.status="rejected",o(s))}})}};function ax({router:i,flushSync:o,onError:s,unstable_useTransitions:u}){u=Lg()||u;let[f,g]=I.useState(i.state),[x,m]=tx(f),[v,j]=I.useState(),[b,z]=I.useState({isTransitioning:!1}),[E,D]=I.useState(),[B,_]=I.useState(),[Q,H]=I.useState(),K=I.useRef(new Map),ge=I.useCallback((de,{deletedFetchers:ve,newErrors:Se,flushSync:Ne,viewTransitionOpts:Pe})=>{Se&&s&&Object.values(Se).forEach(Me=>{var qe;return s(Me,{location:de.location,params:((qe=de.matches[0])==null?void 0:qe.params)??{},unstable_pattern:va(de.matches)})}),de.fetchers.forEach((Me,qe)=>{Me.data!==void 0&&K.current.set(qe,Me.data)}),ve.forEach(Me=>K.current.delete(Me)),uu(Ne===!1||o!=null,'You provided the `flushSync` option to a router update, but you are not using the `<RouterProvider>` from `react-router/dom` so `ReactDOM.flushSync()` is unavailable.  Please update your app to `import { RouterProvider } from "react-router/dom"` and ensure you have `react-dom` installed as a dependency to use the `flushSync` option.');let Ge=i.window!=null&&i.window.document!=null&&typeof i.window.document.startViewTransition=="function";if(uu(Pe==null||Ge,"You provided the `viewTransition` option to a router update, but you do not appear to be running in a DOM environment as `window.startViewTransition` is not available."),!Pe||!Ge){o&&Ne?o(()=>g(de)):u===!1?g(de):I.startTransition(()=>{u===!0&&m(Me=>hu(Me,de)),g(de)});return}if(o&&Ne){o(()=>{B&&(E==null||E.resolve(),B.skipTransition()),z({isTransitioning:!0,flushSync:!0,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation})});let Me=i.window.document.startViewTransition(()=>{o(()=>g(de))});Me.finished.finally(()=>{o(()=>{D(void 0),_(void 0),j(void 0),z({isTransitioning:!1})})}),o(()=>_(Me));return}B?(E==null||E.resolve(),B.skipTransition(),H({state:de,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation})):(j(de),z({isTransitioning:!0,flushSync:!1,currentLocation:Pe.currentLocation,nextLocation:Pe.nextLocation}))},[i.window,o,B,E,u,m,s]);I.useLayoutEffect(()=>i.subscribe(ge),[i,ge]),I.useEffect(()=>{b.isTransitioning&&!b.flushSync&&D(new ix)},[b]),I.useEffect(()=>{if(E&&v&&i.window){let de=v,ve=E.promise,Se=i.window.document.startViewTransition(async()=>{u===!1?g(de):I.startTransition(()=>{u===!0&&m(Ne=>hu(Ne,de)),g(de)}),await ve});Se.finished.finally(()=>{D(void 0),_(void 0),j(void 0),z({isTransitioning:!1})}),_(Se)}},[v,E,i.window,u,m]),I.useEffect(()=>{E&&v&&x.location.key===v.location.key&&E.resolve()},[E,B,x.location,v]),I.useEffect(()=>{!b.isTransitioning&&Q&&(j(Q.state),z({isTransitioning:!0,flushSync:!1,currentLocation:Q.currentLocation,nextLocation:Q.nextLocation}),H(void 0))},[b.isTransitioning,Q]);let me=I.useMemo(()=>({createHref:i.createHref,encodeLocation:i.encodeLocation,go:de=>i.navigate(de),push:(de,ve,Se)=>i.navigate(de,{state:ve,preventScrollReset:Se==null?void 0:Se.preventScrollReset}),replace:(de,ve,Se)=>i.navigate(de,{replace:!0,state:ve,preventScrollReset:Se==null?void 0:Se.preventScrollReset})}),[i]),Ee=i.basename||"/",M=I.useMemo(()=>({router:i,navigator:me,static:!1,basename:Ee,onError:s}),[i,me,Ee,s]);return I.createElement(I.Fragment,null,I.createElement(Br.Provider,{value:M},I.createElement(ya.Provider,{value:x},I.createElement(Ju.Provider,{value:K.current},I.createElement(ed.Provider,{value:b},I.createElement(dx,{basename:Ee,location:x.location,navigationType:x.historyAction,navigator:me,unstable_useTransitions:u},I.createElement(ox,{routes:i.routes,future:i.future,state:x,onError:s})))))),null)}function hu(i,o){return{...i,navigation:o.navigation.state!=="idle"?o.navigation:i.navigation,revalidation:o.revalidation!=="idle"?o.revalidation:i.revalidation,actionData:o.navigation.state!=="submitting"?o.actionData:i.actionData,fetchers:o.fetchers}}var ox=I.memo(lx);function lx({routes:i,future:o,state:s,onError:u}){return Og(i,void 0,s,u,o)}function sx(i){return Hg(i.context)}function dx({basename:i="/",children:o=null,location:s,navigationType:u="POP",navigator:c,static:f=!1,unstable_useTransitions:g}){ze(!ba(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let x=i.replace(/^\/*/,"/"),m=I.useMemo(()=>({basename:x,navigator:c,static:f,unstable_useTransitions:g,future:{}}),[x,c,f,g]);typeof s=="string"&&(s=cr(s));let{pathname:v="/",search:j="",hash:b="",state:z=null,key:E="default"}=s,D=I.useMemo(()=>{let B=Qt(v,x);return B==null?null:{location:{pathname:B,search:j,hash:b,state:z,key:E},navigationType:u}},[x,v,j,b,z,E,u]);return at(D!=null,`<Router basename="${x}"> is not able to match the URL "${v}${j}${b}" because it does not start with the basename, so the <Router> won't render anything.`),D==null?null:I.createElement(Xt.Provider,{value:m},I.createElement(Go.Provider,{children:o,value:D}))}var _o="get",Ho="application/x-www-form-urlencoded";function Uo(i){return typeof HTMLElement<"u"&&i instanceof HTMLElement}function cx(i){return Uo(i)&&i.tagName.toLowerCase()==="button"}function px(i){return Uo(i)&&i.tagName.toLowerCase()==="form"}function ux(i){return Uo(i)&&i.tagName.toLowerCase()==="input"}function fx(i){return!!(i.metaKey||i.altKey||i.ctrlKey||i.shiftKey)}function hx(i,o){return i.button===0&&(!o||o==="_self")&&!fx(i)}var Ro=null;function gx(){if(Ro===null)try{new FormData(document.createElement("form"),0),Ro=!1}catch{Ro=!0}return Ro}var xx=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ds(i){return i!=null&&!xx.has(i)?(at(!1,`"${i}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Ho}"`),null):i}function mx(i,o){let s,u,c,f,g;if(px(i)){let x=i.getAttribute("action");u=x?Qt(x,o):null,s=i.getAttribute("method")||_o,c=Ds(i.getAttribute("enctype"))||Ho,f=new FormData(i)}else if(cx(i)||ux(i)&&(i.type==="submit"||i.type==="image")){let x=i.form;if(x==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=i.getAttribute("formaction")||x.getAttribute("action");if(u=m?Qt(m,o):null,s=i.getAttribute("formmethod")||x.getAttribute("method")||_o,c=Ds(i.getAttribute("formenctype"))||Ds(x.getAttribute("enctype"))||Ho,f=new FormData(x,i),!gx()){let{name:v,type:j,value:b}=i;if(j==="image"){let z=v?`${v}.`:"";f.append(`${z}x`,"0"),f.append(`${z}y`,"0")}else v&&f.append(v,b)}}else{if(Uo(i))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=_o,u=null,c=Ho,g=i}return f&&c==="text/plain"&&(g=f,f=void 0),{action:u,method:s.toLowerCase(),encType:c,formData:f,body:g}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function id(i,o){if(i===!1||i===null||typeof i>"u")throw new Error(o)}function vx(i,o,s,u){let c=typeof i=="string"?new URL(i,typeof window>"u"?"server://singlefetch/":window.location.origin):i;return s?c.pathname.endsWith("/")?c.pathname=`${c.pathname}_.${u}`:c.pathname=`${c.pathname}.${u}`:c.pathname==="/"?c.pathname=`_root.${u}`:o&&Qt(c.pathname,o)==="/"?c.pathname=`${o.replace(/\/$/,"")}/_root.${u}`:c.pathname=`${c.pathname.replace(/\/$/,"")}.${u}`,c}async function yx(i,o){if(i.id in o)return o[i.id];try{let s=await import(i.module);return o[i.id]=s,s}catch(s){return console.error(`Error loading route module \`${i.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function bx(i){return i==null?!1:i.href==null?i.rel==="preload"&&typeof i.imageSrcSet=="string"&&typeof i.imageSizes=="string":typeof i.rel=="string"&&typeof i.href=="string"}async function wx(i,o,s){let u=await Promise.all(i.map(async c=>{let f=o.routes[c.route.id];if(f){let g=await yx(f,s);return g.links?g.links():[]}return[]}));return Ex(u.flat(1).filter(bx).filter(c=>c.rel==="stylesheet"||c.rel==="preload").map(c=>c.rel==="stylesheet"?{...c,rel:"prefetch",as:"style"}:{...c,rel:"prefetch"}))}function gu(i,o,s,u,c,f){let g=(m,v)=>s[v]?m.route.id!==s[v].route.id:!0,x=(m,v)=>{var j;return s[v].pathname!==m.pathname||((j=s[v].route.path)==null?void 0:j.endsWith("*"))&&s[v].params["*"]!==m.params["*"]};return f==="assets"?o.filter((m,v)=>g(m,v)||x(m,v)):f==="data"?o.filter((m,v)=>{var b;let j=u.routes[m.route.id];if(!j||!j.hasLoader)return!1;if(g(m,v)||x(m,v))return!0;if(m.route.shouldRevalidate){let z=m.route.shouldRevalidate({currentUrl:new URL(c.pathname+c.search+c.hash,window.origin),currentParams:((b=s[0])==null?void 0:b.params)||{},nextUrl:new URL(i,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof z=="boolean")return z}return!0}):[]}function kx(i,o,{includeHydrateFallback:s}={}){return jx(i.map(u=>{let c=o.routes[u.route.id];if(!c)return[];let f=[c.module];return c.clientActionModule&&(f=f.concat(c.clientActionModule)),c.clientLoaderModule&&(f=f.concat(c.clientLoaderModule)),s&&c.hydrateFallbackModule&&(f=f.concat(c.hydrateFallbackModule)),c.imports&&(f=f.concat(c.imports)),f}).flat(1))}function jx(i){return[...new Set(i)]}function Cx(i){let o={},s=Object.keys(i).sort();for(let u of s)o[u]=i[u];return o}function Ex(i,o){let s=new Set;return new Set(o),i.reduce((u,c)=>{let f=JSON.stringify(Cx(c));return s.has(f)||(s.add(f),u.push({key:f,link:c})),u},[])}function a0(){let i=I.useContext(Br);return id(i,"You must render this element inside a <DataRouterContext.Provider> element"),i}function Sx(){let i=I.useContext(ya);return id(i,"You must render this element inside a <DataRouterStateContext.Provider> element"),i}var ad=I.createContext(void 0);ad.displayName="FrameworkContext";function o0(){let i=I.useContext(ad);return id(i,"You must render this element inside a <HydratedRouter> element"),i}function Fx(i,o){let s=I.useContext(ad),[u,c]=I.useState(!1),[f,g]=I.useState(!1),{onFocus:x,onBlur:m,onMouseEnter:v,onMouseLeave:j,onTouchStart:b}=o,z=I.useRef(null);I.useEffect(()=>{if(i==="render"&&g(!0),i==="viewport"){let B=Q=>{Q.forEach(H=>{g(H.isIntersecting)})},_=new IntersectionObserver(B,{threshold:.5});return z.current&&_.observe(z.current),()=>{_.disconnect()}}},[i]),I.useEffect(()=>{if(u){let B=setTimeout(()=>{g(!0)},100);return()=>{clearTimeout(B)}}},[u]);let E=()=>{c(!0)},D=()=>{c(!1),g(!1)};return s?i!=="intent"?[f,z,{}]:[f,z,{onFocus:oa(x,E),onBlur:oa(m,D),onMouseEnter:oa(v,E),onMouseLeave:oa(j,D),onTouchStart:oa(b,E)}]:[!1,z,{}]}function oa(i,o){return s=>{i&&i(s),s.defaultPrevented||o(s)}}function zx({page:i,...o}){let{router:s}=a0(),u=I.useMemo(()=>or(s.routes,i,s.basename),[s.routes,i,s.basename]);return u?I.createElement(Ix,{page:i,matches:u,...o}):null}function Ax(i){let{manifest:o,routeModules:s}=o0(),[u,c]=I.useState([]);return I.useEffect(()=>{let f=!1;return wx(i,o,s).then(g=>{f||c(g)}),()=>{f=!0}},[i,o,s]),u}function Ix({page:i,matches:o,...s}){let u=Dr(),{future:c,manifest:f,routeModules:g}=o0(),{basename:x}=a0(),{loaderData:m,matches:v}=Sx(),j=I.useMemo(()=>gu(i,o,v,f,u,"data"),[i,o,v,f,u]),b=I.useMemo(()=>gu(i,o,v,f,u,"assets"),[i,o,v,f,u]),z=I.useMemo(()=>{if(i===u.pathname+u.search+u.hash)return[];let B=new Set,_=!1;if(o.forEach(H=>{var ge;let K=f.routes[H.route.id];!K||!K.hasLoader||(!j.some(me=>me.route.id===H.route.id)&&H.route.id in m&&((ge=g[H.route.id])!=null&&ge.shouldRevalidate)||K.hasClientLoader?_=!0:B.add(H.route.id))}),B.size===0)return[];let Q=vx(i,x,c.unstable_trailingSlashAwareDataRequests,"data");return _&&B.size>0&&Q.searchParams.set("_routes",o.filter(H=>B.has(H.route.id)).map(H=>H.route.id).join(",")),[Q.pathname+Q.search]},[x,c.unstable_trailingSlashAwareDataRequests,m,u,f,j,o,i,g]),E=I.useMemo(()=>kx(b,f),[b,f]),D=Ax(b);return I.createElement(I.Fragment,null,z.map(B=>I.createElement("link",{key:B,rel:"prefetch",as:"fetch",href:B,...s})),E.map(B=>I.createElement("link",{key:B,rel:"modulepreload",href:B,...s})),D.map(({key:B,link:_})=>I.createElement("link",{key:B,nonce:s.nonce,..._,crossOrigin:_.crossOrigin??s.crossOrigin})))}function Lx(...i){return o=>{i.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var Nx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{Nx&&(window.__reactRouterVersion="7.13.0")}catch{}function Tx(i,o){return og({basename:o==null?void 0:o.basename,getContext:o==null?void 0:o.getContext,future:o==null?void 0:o.future,history:kh({window:o==null?void 0:o.window}),hydrationData:Rx(),routes:i,mapRouteProperties:nx,hydrationRouteProperties:rx,dataStrategy:o==null?void 0:o.dataStrategy,patchRoutesOnNavigation:o==null?void 0:o.patchRoutesOnNavigation,window:o==null?void 0:o.window,unstable_instrumentations:o==null?void 0:o.unstable_instrumentations}).initialize()}function Rx(){let i=window==null?void 0:window.__staticRouterHydrationData;return i&&i.errors&&(i={...i,errors:Mx(i.errors)}),i}function Mx(i){if(!i)return null;let o=Object.entries(i),s={};for(let[u,c]of o)if(c&&c.__type==="RouteErrorResponse")s[u]=new ma(c.status,c.statusText,c.data,c.internal===!0);else if(c&&c.__type==="Error"){if(c.__subType){let f=window[c.__subType];if(typeof f=="function")try{let g=new f(c.message);g.stack="",s[u]=g}catch{}}if(s[u]==null){let f=new Error(c.message);f.stack="",s[u]=f}}else s[u]=c;return s}var l0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,s0=I.forwardRef(function({onClick:o,discover:s="render",prefetch:u="none",relative:c,reloadDocument:f,replace:g,state:x,target:m,to:v,preventScrollReset:j,viewTransition:b,unstable_defaultShouldRevalidate:z,...E},D){let{basename:B,unstable_useTransitions:_}=I.useContext(Xt),Q=typeof v=="string"&&l0.test(v),H=Hu(v,B);v=H.to;let K=Dg(v,{relative:c}),[ge,me,Ee]=Fx(u,E),M=_x(v,{replace:g,state:x,target:m,preventScrollReset:j,relative:c,viewTransition:b,unstable_defaultShouldRevalidate:z,unstable_useTransitions:_});function de(Se){o&&o(Se),Se.defaultPrevented||M(Se)}let ve=I.createElement("a",{...E,...Ee,href:H.absoluteURL||K,onClick:H.isExternal||f?o:de,ref:Lx(D,me),target:m,"data-discover":!Q&&s==="render"?"true":void 0});return ge&&!Q?I.createElement(I.Fragment,null,ve,I.createElement(zx,{page:K})):ve});s0.displayName="Link";var Bx=I.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:u="",end:c=!1,style:f,to:g,viewTransition:x,children:m,...v},j){let b=wa(g,{relative:v.relative}),z=Dr(),E=I.useContext(ya),{navigator:D,basename:B}=I.useContext(Xt),_=E!=null&&$x(b)&&x===!0,Q=D.encodeLocation?D.encodeLocation(b).pathname:b.pathname,H=z.pathname,K=E&&E.navigation&&E.navigation.location?E.navigation.location.pathname:null;s||(H=H.toLowerCase(),K=K?K.toLowerCase():null,Q=Q.toLowerCase()),K&&B&&(K=Qt(K,B)||K);const ge=Q!=="/"&&Q.endsWith("/")?Q.length-1:Q.length;let me=H===Q||!c&&H.startsWith(Q)&&H.charAt(ge)==="/",Ee=K!=null&&(K===Q||!c&&K.startsWith(Q)&&K.charAt(Q.length)==="/"),M={isActive:me,isPending:Ee,isTransitioning:_},de=me?o:void 0,ve;typeof u=="function"?ve=u(M):ve=[u,me?"active":null,Ee?"pending":null,_?"transitioning":null].filter(Boolean).join(" ");let Se=typeof f=="function"?f(M):f;return I.createElement(s0,{...v,"aria-current":de,className:ve,ref:j,style:Se,to:g,viewTransition:x},typeof m=="function"?m(M):m)});Bx.displayName="NavLink";var Dx=I.forwardRef(({discover:i="render",fetcherKey:o,navigate:s,reloadDocument:u,replace:c,state:f,method:g=_o,action:x,onSubmit:m,relative:v,preventScrollReset:j,viewTransition:b,unstable_defaultShouldRevalidate:z,...E},D)=>{let{unstable_useTransitions:B}=I.useContext(Xt),_=Wx(),Q=Vx(x,{relative:v}),H=g.toLowerCase()==="get"?"get":"post",K=typeof x=="string"&&l0.test(x),ge=me=>{if(m&&m(me),me.defaultPrevented)return;me.preventDefault();let Ee=me.nativeEvent.submitter,M=(Ee==null?void 0:Ee.getAttribute("formmethod"))||g,de=()=>_(Ee||me.currentTarget,{fetcherKey:o,method:M,navigate:s,replace:c,state:f,relative:v,preventScrollReset:j,viewTransition:b,unstable_defaultShouldRevalidate:z});B&&s!==!1?I.startTransition(()=>de()):de()};return I.createElement("form",{ref:D,method:H,action:Q,onSubmit:u?m:ge,...E,"data-discover":!K&&i==="render"?"true":void 0})});Dx.displayName="Form";function Px(i){return`${i} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function d0(i){let o=I.useContext(Br);return ze(o,Px(i)),o}function _x(i,{target:o,replace:s,state:u,preventScrollReset:c,relative:f,viewTransition:g,unstable_defaultShouldRevalidate:x,unstable_useTransitions:m}={}){let v=Nn(),j=Dr(),b=wa(i,{relative:f});return I.useCallback(z=>{if(hx(z,o)){z.preventDefault();let E=s!==void 0?s:mn(j)===mn(b),D=()=>v(i,{replace:E,state:u,preventScrollReset:c,relative:f,viewTransition:g,unstable_defaultShouldRevalidate:x});m?I.startTransition(()=>D()):D()}},[j,v,b,s,u,o,i,c,f,g,x,m])}var Hx=0,Ox=()=>`__${String(++Hx)}__`;function Wx(){let{router:i}=d0("useSubmit"),{basename:o}=I.useContext(Xt),s=Kg(),u=i.fetch,c=i.navigate;return I.useCallback(async(f,g={})=>{let{action:x,method:m,encType:v,formData:j,body:b}=mx(f,o);if(g.navigate===!1){let z=g.fetcherKey||Ox();await u(z,s,g.action||x,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:j,body:b,formMethod:g.method||m,formEncType:g.encType||v,flushSync:g.flushSync})}else await c(g.action||x,{unstable_defaultShouldRevalidate:g.unstable_defaultShouldRevalidate,preventScrollReset:g.preventScrollReset,formData:j,body:b,formMethod:g.method||m,formEncType:g.encType||v,replace:g.replace,state:g.state,fromRouteId:s,flushSync:g.flushSync,viewTransition:g.viewTransition})},[u,c,o,s])}function Vx(i,{relative:o}={}){let{basename:s}=I.useContext(Xt),u=I.useContext(vn);ze(u,"useFormAction must be used inside a RouteContext");let[c]=u.matches.slice(-1),f={...wa(i||".",{relative:o})},g=Dr();if(i==null){f.search=g.search;let x=new URLSearchParams(f.search),m=x.getAll("index");if(m.some(j=>j==="")){x.delete("index"),m.filter(b=>b).forEach(b=>x.append("index",b));let j=x.toString();f.search=j?`?${j}`:""}}return(!i||i===".")&&c.route.index&&(f.search=f.search?f.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(f.pathname=f.pathname==="/"?s:xn([s,f.pathname])),mn(f)}function $x(i,{relative:o}={}){let s=I.useContext(ed);ze(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:u}=d0("useViewTransitionState"),c=wa(i,{relative:o});if(!s.isTransitioning)return!1;let f=Qt(s.currentLocation.pathname,u)||s.currentLocation.pathname,g=Qt(s.nextLocation.pathname,u)||s.nextLocation.pathname;return Vo(c.pathname,g)!=null||Vo(c.pathname,f)!=null}const p={yellow:"#FFE600",white:"#FFFFFF",offWhite:"#F6F6FA",gray02:"#C4C4CD",gray01:"#747480",offBlack:"#2E2E38",confidentBlack:"#1A1A24",frameOrange:"#FF7D1E",frameRed:"#FF3C00",frameMagenta:"#FF32FF",framePurple:"#B400FF",frameLime:"#B4FF00",frameGreen:"#00C864",frameTeal:"#32FFFF",frameBlue:"#4696FF",eyebrowGold:"#B89B00",success:"#00C864",destructive:"#FF4136",info:"#4696FF",accentOrange:"#FF7D1E",onDark:"#FFFFFF",onDarkSubtle:"rgba(255, 255, 255, 0.55)",surfaceOnDark:"rgba(255, 255, 255, 0.06)",borderOnDark:"rgba(255, 255, 255, 0.12)",yellowAlpha10:"rgba(255, 230, 0, 0.10)",yellowAlpha12:"rgba(255, 230, 0, 0.12)"},Gx=[[p.yellow,p.frameOrange,p.frameMagenta],[p.yellow,p.frameMagenta,p.frameRed],[p.yellow,p.frameMagenta,p.frameTeal],[p.yellow,p.framePurple,p.frameBlue],[p.yellow,p.frameLime,p.frameTeal],[p.yellow,p.frameGreen,p.frameBlue],[p.yellow,p.frameOrange,p.frameTeal]];function Ux(i,o="90deg"){const[s,u,c]=Gx[Math.max(0,Math.min(i-1,6))];return`linear-gradient(${o}, ${s}, ${u}, ${c})`}const k={bold:"'EYInterstate:Bold', Arial, 'Helvetica Neue', sans-serif",regular:"'EYInterstate:Regular', Arial, 'Helvetica Neue', sans-serif",light:"'EYInterstate:Light', Arial, 'Helvetica Neue', sans-serif"},xu={sectionPadding:"72px 64px",cardPadding:"18px"};function Mo({height:i,letterColor:o}){return n.jsxs("svg",{viewBox:"0 -18 217.599 217.599",style:{height:i,width:"auto",display:"block",flexShrink:0},xmlns:"http://www.w3.org/2000/svg","aria-label":"EY logo",children:[n.jsx("path",{fill:p.yellow,d:"M0 79.4L217.599 0v41z"}),n.jsx("path",{fill:o,d:"M24.9 150.6h28.5v-16.5H24.9v-13h31.5L46 103H1.4v78.6h62.8v-18.1H24.9zM106.1 103l-13.3 25.7L79.4 103h-26l27.4 47.6v31h23.5v-31l27.5-47.6z"})]})}function Ps({fontSize:i,color:o}){return n.jsxs("span",{style:{fontFamily:"'EYInterstate:Bold', Arial, sans-serif",fontWeight:700,fontSize:i,lineHeight:1.2,color:o,whiteSpace:"nowrap"},children:["Shape the future",n.jsx("br",{}),"with confidence"]})}function c0({variant:i="stacked",theme:o="dark",className:s,onClick:u}){const c=o==="dark"?p.white:p.offBlack,f=o==="dark"?p.white:p.offBlack,g={display:"inline-flex",alignItems:"flex-start",cursor:u?"pointer":"default",userSelect:"none"};return i==="mark-only"?n.jsx("div",{style:g,className:s,onClick:u,"aria-label":"EY",children:n.jsx(Mo,{height:44,letterColor:c})}):i==="stacked"?n.jsxs("div",{style:{...g,flexDirection:"column",gap:12,alignItems:"flex-start"},className:s,onClick:u,"aria-label":"EY — Shape the future with confidence",children:[n.jsx(Mo,{height:100,letterColor:c}),n.jsx(Ps,{fontSize:18,color:f})]}):i==="horizontal-sm"?n.jsxs("div",{style:{...g,flexDirection:"row",gap:14,alignItems:"center"},className:s,onClick:u,"aria-label":"EY — Shape the future with confidence",children:[n.jsx(Mo,{height:40,letterColor:c}),n.jsx(Ps,{fontSize:12,color:f})]}):n.jsxs("div",{style:{...g,flexDirection:"row",gap:18,alignItems:"center"},className:s,onClick:u,"aria-label":"EY — Shape the future with confidence",children:[n.jsx(Mo,{height:56,letterColor:c}),n.jsx(Ps,{fontSize:15,color:f})]})}const Yx="Phase 1: Foundational Training Workshops",qx="/phase1",p0="EY.ai Tax Labs",od=[{id:"foundational",title:"Foundational Concepts of AI",path:"/foundational",order:1,estimatedTime:"~45 min",supportsInPageNav:!0,subModules:[{id:"rise-of-ai",label:"Understanding AI",group:"learn"},{id:"evolution",label:"Evolution",group:"learn"},{id:"terminology",label:"Key Terms",group:"learn"},{id:"genai-vs-agents",label:"GenAI vs Agents",group:"learn"},{id:"cheatsheet",label:"Cheat Sheet",group:"apply"},{id:"quiz",label:"Quiz",group:"apply"},{id:"act-now",label:"Velocity",group:"apply"}]},{id:"ai-tax-prompting",title:"AI Tax Prompting",path:"/ai-tax-prompting",order:2,estimatedTime:"~30 min",supportsInPageNav:!0,subModules:[{id:"pipeline",label:"Prompt Basics",group:"learn"},{id:"team-briefing",label:"Team Briefing",group:"learn"},{id:"elements",label:"8 Elements",group:"learn"},{id:"lazy-vs-pro",label:"Weak vs Strong",group:"learn"},{id:"stack-builder",label:"Stack Builder",group:"learn"},{id:"advanced",label:"Techniques",group:"learn"},{id:"match-activity",label:"Activity",group:"apply"},{id:"dos-donts",label:"Do's & Don'ts",group:"apply"},{id:"recap",label:"Cheat Sheet",group:"apply"}]},{id:"copilot-hub",title:"M365 Copilot Dashboard",path:"/copilot-hub",order:3,estimatedTime:"~60 min",supportsInPageNav:!0,subModules:[{id:"prompt-repository",label:"M365 Apps",group:"learn"},{id:"useful-links",label:"Useful Links",group:"apply"},{id:"security",label:"Security & Governance",group:"apply"}]}];function u0(i){const o=od.find(s=>s.id===i);if(!o)throw new Error(`Unknown module id: ${i}`);return o}const Zx=od.length;function Kx(i){const{subModules:o}=u0(i);return{learn:o.filter(s=>s.group==="learn"),apply:o.filter(s=>s.group==="apply")}}const Qx=`2px solid ${p.yellow}`;function ld(i){i.currentTarget.style.outline=Qx,i.currentTarget.style.outlineOffset="2px"}function sd(i){i.currentTarget.style.outline="none"}function gi({variant:i="hub",activeSection:o="tax-labs",onNavigate:s,rightSlot:u,skipLinkTarget:c}){return n.jsxs("header",{children:[c&&n.jsx("a",{href:c,style:{position:"absolute",left:-9999,top:"auto",width:1,height:1,overflow:"hidden",zIndex:1e4,background:p.yellow,color:p.confidentBlack,padding:"10px 16px",fontFamily:k.bold,fontSize:13},onFocus:f=>{Object.assign(f.currentTarget.style,{left:16,top:8,width:"auto",height:"auto"})},onBlur:f=>{Object.assign(f.currentTarget.style,{left:-9999,width:1,height:1})},children:"Skip to content"}),i==="learning"?n.jsx(Xx,{onNavigate:s}):n.jsx(Jx,{onNavigate:s,activeSection:o,rightSlot:u})]})}function Xx({onNavigate:i}){return n.jsxs("div",{className:"flex items-center justify-between gap-3 w-full px-4 sm:px-6 md:px-10 py-3 md:py-4",style:{background:p.confidentBlack,borderBottom:"1px solid #2E2E38"},children:[n.jsxs("button",{onClick:()=>i("/phased"),className:"flex items-center gap-3 md:gap-4 min-w-0",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4},"aria-label":`${p0} — back to Tax Labs overview`,onFocus:ld,onBlur:sd,children:[n.jsx("div",{style:{background:p.offBlack,width:40,height:40,borderRadius:4,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx("div",{style:{transform:"scale(0.68)",transformOrigin:"center"},children:n.jsx(c0,{variant:"mark-only",theme:"dark"})})}),n.jsxs("div",{className:"flex flex-col gap-0.5 items-start min-w-0",children:[n.jsxs("span",{className:"text-[16px] md:text-[20px] truncate",style:{color:"#FFFFFF",fontFamily:k.bold,lineHeight:1.2},children:["EY.ai ",n.jsx("span",{style:{fontFamily:k.regular},children:"Tax Labs"})]}),n.jsx("span",{className:"text-[9px] md:text-[10px]",style:{color:p.yellow,fontFamily:k.bold,letterSpacing:"0.04em",textTransform:"uppercase",whiteSpace:"nowrap"},children:"India Tax Hub"})]})]}),n.jsx("div",{className:"hidden sm:block shrink-0",children:n.jsx(e1,{})})]})}function Jx({onNavigate:i,activeSection:o,rightSlot:s}){return n.jsxs(n.Fragment,{children:[n.jsx("div",{style:{background:p.yellow,height:3,width:"100%"}}),n.jsxs("div",{style:{background:p.offBlack,height:64,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 16px"},children:[n.jsxs("button",{onClick:()=>i("/"),style:{background:"none",border:"none",cursor:"pointer",padding:4,borderRadius:4,display:"flex",alignItems:"center",gap:12,minWidth:0},"aria-label":`${p0} — go to home`,onFocus:ld,onBlur:sd,children:[n.jsx(c0,{variant:"mark-only",theme:"dark"}),n.jsx("span",{style:{color:"#FFFFFF",fontFamily:k.regular,fontSize:13,borderLeft:"1px solid rgba(255,255,255,0.3)",paddingLeft:12,whiteSpace:"nowrap"},children:"India AI Tax Hub"})]}),s]}),n.jsxs("nav",{"aria-label":"Site sections",style:{background:"#2E2E38",display:"flex",alignItems:"center",padding:"0 16px",overflowX:"auto"},children:[n.jsx(mu,{label:"About EY India AI Tax Hub",isActive:o==="home",onClick:()=>i("/")}),n.jsx(mu,{label:"EY.ai Tax Labs",isActive:o==="tax-labs",onClick:()=>i("/phased")})]})]})}function e1(){return n.jsx("span",{style:{color:p.yellow,fontFamily:k.bold,fontSize:12,textTransform:"uppercase",letterSpacing:"0.04em",whiteSpace:"nowrap"},children:"Platform Mode: Active Learning"})}function mu({label:i,isActive:o,onClick:s}){return n.jsx("button",{onClick:o?void 0:s,"aria-current":o?"page":void 0,style:{background:"none",border:"none",cursor:o?"default":"pointer",padding:"10px 14px",fontFamily:k.regular,fontSize:13,color:o?p.yellow:p.gray02,whiteSpace:"nowrap",transition:"color 0.15s"},onMouseEnter:u=>{o||(u.currentTarget.style.color="#FFFFFF")},onMouseLeave:u=>{o||(u.currentTarget.style.color=p.gray02)},onFocus:ld,onBlur:sd,children:i})}const dr={p110f3b80:"M26.25 3.75V15C26.2497 15.629 26.4077 16.248 26.7094 16.8L37.0406 35.7C37.3531 36.2711 37.5115 36.9138 37.5003 37.5647C37.4891 38.2157 37.3086 38.8525 36.9765 39.4125C36.6445 39.9725 36.1724 40.4364 35.6066 40.7586C35.0409 41.0808 34.401 41.2502 33.75 41.25H11.25C10.599 41.2502 9.95909 41.0808 9.39336 40.7586C8.82762 40.4364 8.35551 39.9725 8.02348 39.4125C7.69145 38.8525 7.51093 38.2157 7.49969 37.5647C7.48845 36.9138 7.64687 36.2711 7.95937 35.7L18.2906 16.8C18.5923 16.248 18.7503 15.629 18.75 15V3.75",p17d3fb80:"M20.8125 41.25H11.25C10.2554 41.25 9.30161 40.8549 8.59835 40.1517C7.89509 39.4484 7.5 38.4946 7.5 37.5V7.5C7.5 6.50544 7.89509 5.55161 8.59835 4.84835C9.30161 4.14509 10.2554 3.75 11.25 3.75H26.25C26.8442 3.74854 27.4327 3.86477 27.9818 4.09197C28.5308 4.31917 29.0294 4.65285 29.4488 5.07375L36.1781 11.8013C36.5987 12.2208 36.932 12.7194 37.1589 13.2685C37.3858 13.8175 37.5017 14.406 37.5 15V21.0938",p1b4fc880:"M26.25 3.75V13.125C26.25 13.6223 26.4475 14.0992 26.7992 14.4508C27.1508 14.8025 27.6277 15 28.125 15H37.5",p26318a80:"M30 37.5C33.1066 37.5 35.625 34.9816 35.625 31.875C35.625 28.7684 33.1066 26.25 30 26.25C26.8934 26.25 24.375 28.7684 24.375 31.875C24.375 34.9816 26.8934 37.5 30 37.5Z",p2dd93a80:"M5.625 13.125L9.375 16.875L16.875 9.375",p3955b500:"M80.5276 0L19.8341 22.1511L80.5276 11.4305V0Z",p3eb8a400:"M5.625 31.875L9.375 35.625L16.875 28.125",pf788bc0:"M29.572 49.9334H40.673V43.4875H29.572V38.4211H41.8524L37.7779 31.3598H20.3641V62.0601H44.9238V54.9988H29.5711L29.572 49.9334ZM61.2704 31.3607L56.0551 41.3795L50.8528 31.3607H40.673L51.3993 49.9343V62.0611H60.5788V49.9343L71.3197 31.3607H61.2704ZM71.519 96.4482C71.519 96.664 71.5043 96.9368 71.4905 97.0379H67.3784C67.4501 97.9867 68.0976 98.3752 68.8306 98.3752C69.2623 98.3752 69.6646 98.2457 70.0099 97.9003L71.2177 98.9208C70.5849 99.7116 69.6214 99.9991 68.7589 99.9991C66.775 99.9991 65.6388 98.4753 65.6388 96.4767C65.6388 94.3054 66.9761 92.9249 68.6441 92.9249C70.4269 92.9249 71.5199 94.4918 71.5199 96.4473L71.519 96.4482ZM67.4069 95.7153H69.8225C69.7647 94.9529 69.276 94.4358 68.5862 94.4358C67.7669 94.4358 67.4501 95.155 67.4069 95.7153ZM91.85 96.4482C91.85 96.664 91.8353 96.9368 91.8215 97.0379H87.7094C87.781 97.9867 88.4286 98.3752 89.1616 98.3752C89.5932 98.3752 89.9956 98.2457 90.3409 97.9003L91.5487 98.9208C90.9159 99.7116 89.9524 99.9991 89.0899 99.9991C87.106 99.9991 85.9698 98.4753 85.9698 96.4767C85.9698 94.3054 87.3071 92.9249 88.9751 92.9249C90.7579 92.9249 91.8509 94.4918 91.8509 96.4473L91.85 96.4482ZM87.7379 95.7153H90.1535C90.0957 94.9529 89.607 94.4358 88.9172 94.4358C88.0979 94.4358 87.781 95.155 87.7379 95.7153ZM84.3155 97.4402L85.437 98.5038C84.8621 99.2367 84.0712 99.9991 82.7339 99.9991C80.8794 99.9991 79.5127 98.5185 79.5127 96.4767C79.5127 94.6076 80.6489 92.9249 82.7624 92.9249C83.9702 92.9249 84.8042 93.4714 85.4223 94.3917L84.2724 95.5564C83.8701 95.0246 83.4384 94.6076 82.7486 94.6076C81.8136 94.6076 81.3249 95.3984 81.3249 96.4482C81.3249 97.4255 81.7566 98.3026 82.7624 98.3026C83.3805 98.3026 83.8985 97.972 84.3155 97.4402ZM68.6717 86.1676H67.0037V85.6928C66.6298 86.1097 66.0264 86.3109 65.422 86.3109C63.6677 86.3109 63.0063 85.0452 63.0063 83.2193V79.38H64.7028V83.0751C64.7028 83.9954 64.8902 84.6852 65.839 84.6852C66.7878 84.6852 66.9752 83.966 66.9752 83.132V79.3791H68.6717V86.1658V86.1676ZM73.9631 84.1837L73.7188 85.9095C73.3735 86.1823 72.7415 86.3118 72.3245 86.3118C71.2894 86.3118 70.4839 85.5357 70.4839 84.2985V81.0057H69.5066V79.3809H70.4839V77.6128L72.1803 76.7504V79.3818H73.7905V81.0066H72.1803V83.8539C72.1803 84.4436 72.4246 84.6595 72.8416 84.6595C73.2586 84.6595 73.6903 84.4427 73.9631 84.1837ZM48.1965 86.1676H46.5V82.4725C46.5 81.5522 46.2988 80.8762 45.35 80.8762C44.4012 80.8762 44.1854 81.4944 44.1854 82.4294V86.1676H42.4889V77.6128L44.1854 76.7504V79.8558C44.5592 79.482 45.0194 79.2376 45.7817 79.2376C47.5792 79.2376 48.1974 80.6181 48.1974 82.343L48.1965 86.1676ZM78.4776 99.8558H76.7232V96.1607C76.7232 95.2119 76.5074 94.5791 75.5586 94.5791C74.6667 94.5791 74.3792 95.1109 74.3792 96.1175V99.8558H72.6249V93.0691H74.3792V93.5293C74.7383 93.1701 75.2711 92.9258 76.0325 92.9258C77.8732 92.9258 78.4766 94.3495 78.4766 96.0174V99.8567L78.4776 99.8558ZM56.5364 92.4804C57.0976 92.4804 57.5431 92.0349 57.5431 91.4737C57.5431 90.9125 57.0976 90.467 56.5364 90.467C55.9752 90.467 55.5298 90.9125 55.5298 91.4737C55.5298 92.0349 55.9752 92.4804 56.5364 92.4804ZM11.7044 92.4804C12.2656 92.4804 12.7111 92.0349 12.7111 91.4737C12.7111 90.9125 12.2656 90.467 11.7044 90.467C11.1432 90.467 10.6978 90.9125 10.6978 91.4737C10.6978 92.0349 11.1432 92.4804 11.7044 92.4804ZM91.85 82.76C91.85 82.9759 91.8353 83.2487 91.8215 83.3497H87.7094C87.781 84.2985 88.4286 84.687 89.1616 84.687C89.5932 84.687 89.9956 84.5575 90.3409 84.2122L91.5487 85.2326C90.9159 86.0234 89.9524 86.3109 89.0899 86.3109C87.106 86.3109 85.9698 84.7871 85.9698 82.7885C85.9698 80.6172 87.3071 79.2367 88.9751 79.2367C90.7579 79.2367 91.8509 80.8037 91.8509 82.7591L91.85 82.76ZM87.7379 82.0271H90.1535C90.0957 81.2647 89.607 80.7476 88.9172 80.7476C88.0979 80.7476 87.781 81.4668 87.7379 82.0271ZM80.4193 86.1676H78.7513V85.6928C78.3774 86.1097 77.774 86.3109 77.1696 86.3109C75.4153 86.3109 74.754 85.0452 74.754 83.2193V79.38H76.4504V83.0751C76.4504 83.9954 76.6378 84.6852 77.5866 84.6852C78.5354 84.6852 78.7228 83.966 78.7228 83.132V79.3791H80.4193V86.1658V86.1676ZM54.9401 82.76C54.9401 82.9759 54.9254 83.2487 54.9116 83.3497H50.7995C50.8711 84.2985 51.5187 84.687 52.2516 84.687C52.6833 84.687 53.0856 84.5575 53.431 84.2122L54.6388 85.2326C54.006 86.0234 53.0425 86.3109 52.18 86.3109C50.196 86.3109 49.0598 84.7871 49.0598 82.7885C49.0598 80.6172 50.3972 79.2367 52.0652 79.2367C53.848 79.2367 54.941 80.8037 54.941 82.7591L54.9401 82.76ZM50.828 82.0271H53.2436C53.1857 81.2647 52.6971 80.7476 52.0073 80.7476C51.188 80.7476 50.8711 81.4668 50.828 82.0271ZM64.588 99.8558H62.8337V99.4103C62.2587 99.8273 61.9133 100 61.2952 100C59.3397 100 58.5057 98.3035 58.5057 96.405C58.5057 94.3485 59.483 92.9258 61.252 92.9258C61.8417 92.9258 62.402 93.0838 62.8337 93.4723V91.301L64.588 90.4239V99.8558ZM62.8346 97.757V95.1688C62.4608 94.7665 62.1016 94.5791 61.6121 94.5791C60.5916 94.5791 60.3464 95.3846 60.3464 96.3472C60.3464 97.4402 60.6623 98.3458 61.6552 98.3458C62.1439 98.3458 62.4892 98.1308 62.8346 97.757ZM55.6446 93.0691V99.8558H57.3989V93.0691H55.6446ZM54.6241 90.6544V92.0634C54.3651 91.977 54.0207 91.9339 53.7616 91.9339C53.2583 91.9339 53.0287 92.0918 53.0287 92.5235V93.07H54.4808V94.7095H53.0287V99.8567H51.2743V94.7095H50.3255V93.07H51.2743V92.2507C51.2743 90.9851 52.0652 90.468 53.3446 90.468C53.7185 90.468 54.265 90.5102 54.6241 90.6544ZM49.4621 99.8558H47.7078V96.1607C47.7078 95.2119 47.492 94.5791 46.5432 94.5791C45.6513 94.5791 45.3638 95.1109 45.3638 96.1175V99.8558H43.6095V93.0691H45.3638V93.5293C45.7229 93.1701 46.2557 92.9258 47.0171 92.9258C48.8578 92.9258 49.4612 94.3495 49.4612 96.0174V99.8567L49.4621 99.8558ZM39.3825 92.9258C37.427 92.9258 36.2045 94.4643 36.2045 96.4629C36.2045 98.5626 37.5419 100 39.3825 100C41.2232 100 42.5605 98.5626 42.5605 96.4629C42.5605 94.3632 41.338 92.9258 39.3825 92.9258ZM39.3825 98.3035C38.261 98.3035 38.0167 97.2252 38.0167 96.4629C38.0167 95.4131 38.4484 94.6085 39.3825 94.6085C40.3166 94.6085 40.7483 95.414 40.7483 96.4629C40.7483 97.2252 40.504 98.3035 39.3825 98.3035ZM34.508 97.4402L35.6295 98.5038C35.0546 99.2367 34.2637 99.9991 32.9264 99.9991C31.0719 99.9991 29.7052 98.5185 29.7052 96.4767C29.7052 94.6076 30.8414 92.9249 32.9549 92.9249C34.1627 92.9249 34.9967 93.4714 35.6148 94.3917L34.4649 95.5564C34.0626 95.0246 33.6309 94.6076 32.9411 94.6076C32.0061 94.6076 31.5174 95.3984 31.5174 96.4482C31.5174 97.4255 31.9491 98.3026 32.9549 98.3026C33.573 98.3026 34.091 97.972 34.508 97.4402ZM25.436 99.8558H23.6817V96.1607C23.6817 95.2119 23.4658 94.5791 22.517 94.5791C21.6252 94.5791 21.3239 95.1109 21.3239 96.1175V99.8558H19.5696V91.301L21.3239 90.4239V93.5293C21.6546 93.127 22.3444 92.9258 23.0204 92.9258C24.8032 92.9258 25.436 94.3348 25.436 96.0174V99.8558ZM18.4903 97.814L18.2313 99.5821C17.8722 99.8696 17.0088 99.9991 16.5486 99.9991C15.485 99.9991 14.7226 99.1504 14.7226 97.972V94.7077H13.5433V93.0682H14.7226V91.3001L16.477 90.4229V93.0682H18.4609V94.7077H16.477V97.4971C16.477 98.1153 16.7066 98.3164 17.1236 98.3164C17.5406 98.3164 18.1872 98.1006 18.4894 97.8131L18.4903 97.814ZM10.8273 93.0691V99.8558H12.5816V93.0691H10.8273ZM9.90694 93.0691L7.765 99.8558H6.15487L5.00491 95.729L3.84025 99.8558H2.23012L0.101035 93.0691H2.05652L3.07698 97.0085L4.22694 93.0691H5.82329L6.97325 97.0085L8.0084 93.0691H9.90694ZM62.5756 76.98V78.3743C62.187 78.2732 61.9289 78.2301 61.6984 78.2301C61.0949 78.2301 60.9654 78.4459 60.9654 78.7913V79.3809H62.1154V81.0204H60.9654V86.1676H59.269V81.0204H58.435V79.3809H59.269V78.5616C59.269 77.3823 59.8871 76.7789 61.3255 76.7789C61.7857 76.7789 62.1586 76.8652 62.5756 76.98ZM41.7118 84.1837L41.4675 85.9095C41.1222 86.1823 40.5187 86.3118 40.1017 86.3118C39.0666 86.3118 38.261 85.5357 38.261 84.2985V81.0057H37.0817V79.3809H38.261V77.6128L39.9575 76.7504V79.3818H41.5392V81.0066H39.9575V83.8539C39.9575 84.4436 40.2018 84.6595 40.6188 84.6595C41.0358 84.6595 41.4381 84.4427 41.7118 84.1837ZM33.8183 82.76C33.8183 82.9759 33.8036 83.2487 33.7898 83.3497H29.8209C29.8926 84.2985 30.5539 84.687 31.2878 84.687C31.7195 84.687 32.1071 84.5575 32.4524 84.2122L33.6603 85.2326C33.0991 85.9802 32.0786 86.3109 31.173 86.3109C29.2322 86.3109 28.0813 84.7871 28.0813 82.8023C28.0813 80.8174 29.3323 79.2367 31.1004 79.2367C32.998 79.2367 33.8183 80.9635 33.8183 82.76ZM29.8494 82.0271H32.2651C32.1934 81.2647 31.747 80.7476 31.0141 80.7476C30.2379 80.7476 29.8926 81.4668 29.8494 82.0271ZM27.2758 82.7894C27.2758 84.529 26.5566 86.3118 24.6305 86.3118C23.8828 86.3118 23.4227 86.039 23.1205 85.7506V87.8209L21.424 88.6696V79.3809H23.1205V79.8411C23.566 79.4388 24.0261 79.2376 24.659 79.2376C26.4849 79.2376 27.2758 80.9635 27.2758 82.7894ZM25.5214 82.8748C25.5214 81.8829 25.2624 80.8762 24.242 80.8762C23.7671 80.8762 23.3933 81.0921 23.1205 81.4797V84.068C23.3933 84.4565 23.8534 84.6861 24.343 84.6861C25.2918 84.6861 25.5214 83.8236 25.5214 82.8748ZM20.2447 86.1676H18.5482V85.6928C18.1459 86.095 17.6279 86.3109 16.9665 86.3109C15.6292 86.3109 14.5794 85.4484 14.5794 83.9531C14.5794 82.4578 15.5998 81.667 17.2246 81.667C17.6563 81.667 18.1018 81.7249 18.5473 81.9398V81.5807C18.5473 80.9479 18.1303 80.6888 17.3826 80.6888C16.8508 80.6888 16.3475 80.8184 15.8157 81.1343L15.1396 79.9265C15.8726 79.4663 16.5771 79.2367 17.4836 79.2367C19.1948 79.2367 20.2447 80.0707 20.2447 81.6092V86.1676ZM18.5482 84.1837V83.3212C18.2028 83.1054 17.7574 83.0337 17.412 83.0337C16.6643 83.0337 16.3052 83.3644 16.3052 83.9109C16.3052 84.4289 16.6359 84.8459 17.2687 84.8459C17.5994 84.8459 18.1744 84.7302 18.5482 84.1837ZM13.6452 86.1676H11.9488V82.4725C11.9488 81.5522 11.7476 80.8762 10.7988 80.8762C9.84999 80.8762 9.63415 81.4944 9.63415 82.4294V86.1676H7.93768V77.6128L9.63415 76.7504V79.8558C10.008 79.482 10.4681 79.2376 11.2305 79.2376C13.028 79.2376 13.6462 80.6181 13.6462 82.343V86.1676H13.6452ZM7.00264 83.4507C7.00264 85.4925 5.44946 86.3118 3.60971 86.3118C2.28615 86.3118 0.819302 85.8948 0 84.687L1.26569 83.5655C1.85537 84.27 2.70315 84.6007 3.56654 84.6007C4.58699 84.6007 5.17667 84.1405 5.17667 83.4939C5.17667 83.2349 5.07563 82.9759 4.64485 82.7609C4.32889 82.603 3.94037 82.5019 3.17801 82.3155C2.70315 82.2007 1.72586 81.9701 1.12149 81.4815C0.518034 80.9929 0.345356 80.2884 0.345356 79.6702C0.345356 77.758 1.98488 76.9818 3.59501 76.9818C4.98929 76.9818 5.99597 77.5568 6.80149 78.3761L5.5358 79.6124C4.94612 79.0227 4.37114 78.6921 3.47928 78.6921C2.71692 78.6921 2.15664 78.9364 2.15664 79.5692C2.15664 79.842 2.25767 80.0294 2.53047 80.1874C2.84643 80.36 3.29282 80.4895 3.98262 80.6622C4.80192 80.8781 5.56427 81.0645 6.18242 81.5678C6.72893 82.0133 7.00173 82.603 7.00173 83.4517L7.00264 83.4507ZM86.0414 79.6978L85.3489 81.3942C85.0898 81.1499 84.7877 80.9773 84.3716 80.9773C83.5661 80.9773 83.3667 81.6533 83.3667 82.4725V86.1676H81.6703V79.3809H83.3667V79.8558C83.7553 79.4673 84.2439 79.2376 84.7904 79.2376C85.2653 79.2376 85.6823 79.3818 86.0414 79.6978Z"},t1="/assets/cf830df8acc30d2ebe5a2c08149d39333d1079bd-BeLjyhso.png",n1="/assets/c47d9607a0edbab8c4595b79a2b7a480058303f1-jP8oLYOB.png",r1="/assets/3ade42659624abadce59b0790baf7f1d24194a8a-DJmztXD1.png",i1="/assets/f68a98c7299f7f60dd06bf1faca4b1c636e4b255-By-7Ebtn.png",a1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2091.85%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22clip0_1_2%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M91.85%200H0V100H91.85V0Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",o1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_facebook.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1096)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M29.5615%2013.5H14.4385C13.92%2013.5%2013.5%2013.92%2013.5%2014.4385V29.5622C13.5%2030.08%2013.92%2030.5%2014.4385%2030.5H22.5808V23.9167H20.3652V21.3512H22.5808V19.4592C22.5808%2017.2634%2023.9217%2016.0677%2025.881%2016.0677C26.8195%2016.0677%2027.6256%2016.1378%2027.8607%2016.169V18.464L26.5022%2018.4647C25.4368%2018.4647%2025.2307%2018.9712%2025.2307%2019.7135V21.3519H27.7715L27.4407%2023.9175H25.2307V30.5H29.5629C30.08%2030.5%2030.5%2030.08%2030.5%2029.5615V14.4385C30.5%2013.92%2030.08%2013.5%2029.5615%2013.5Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1096%22%3E%0A%3Crect%20width%3D%2217%22%20height%3D%2217%22%20fill%3D%22white%22%20transform%3D%22translate(13.5%2013.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",l1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_twitter.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M23.7821%2020.4474L30.7554%2012.3415H29.1029L23.048%2019.3797L18.212%2012.3415H12.6342L19.9472%2022.9845L12.6342%2031.4848H14.2867L20.6809%2024.0522L25.7881%2031.4848H31.3659L23.7821%2020.4474ZM21.5187%2023.0783L20.7777%2022.0185L14.8821%2013.5855H17.4203L22.1781%2020.3912L22.9191%2021.451L29.1037%2030.2974H26.5655L21.5187%2023.0783Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",s1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_linkedin.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1091)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M17.1036%2016.0713C17.1036%2017.0345%2016.3293%2017.815%2015.3738%2017.815C14.4182%2017.815%2013.644%2017.0345%2013.644%2016.0713C13.644%2015.1087%2014.4182%2014.3275%2015.3738%2014.3275C16.3293%2014.3275%2017.1036%2015.1087%2017.1036%2016.0713ZM17.1175%2019.21H13.63V30.37H17.1175V19.21ZM22.6849%2019.21H19.2198V30.37H22.6856V24.5117C22.6856%2021.2544%2026.8909%2020.9879%2026.8909%2024.5117V30.37H30.37V23.3036C30.37%2017.8073%2024.1469%2018.0075%2022.6849%2020.7131V19.21Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1091%22%3E%0A%3Crect%20width%3D%2216.74%22%20height%3D%2216.74%22%20fill%3D%22white%22%20transform%3D%22translate(13.63%2013.63)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",d1="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_youtube.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1081)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cg%20id%3D%22Group_2%22%3E%0A%3Cg%20id%3D%22Group_3%22%3E%0A%3Cg%20id%3D%22Group_4%22%3E%0A%3Cg%20id%3D%22Group_5%22%3E%0A%3Cpath%20id%3D%22Vector%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M32.5402%2016.8423C33%2018.5133%2033%2022%2033%2022C33%2022%2033%2025.4865%2032.5402%2027.1578C32.2872%2028.0797%2031.5419%2028.8058%2030.5951%2029.0523C28.8796%2029.5%2022%2029.5%2022%2029.5C22%2029.5%2015.1204%2029.5%2013.4047%2029.0523C12.4581%2028.8058%2011.7126%2028.0797%2011.4596%2027.1578C11%2025.4865%2011%2022%2011%2022C11%2022%2011%2018.5133%2011.4596%2016.8423C11.7126%2015.9203%2012.4581%2015.1942%2013.4047%2014.9478C15.1204%2014.5%2022%2014.5%2022%2014.5C22%2014.5%2028.8796%2014.5%2030.5951%2014.9478C31.5419%2015.1942%2032.2872%2015.9203%2032.5402%2016.8423ZM19.75%2025.1656L25.5%2022.0001L19.75%2018.8344V25.1656Z%22%20fill%3D%22var(--fill-0%2C%20%232E2E38)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1081%22%3E%0A%3Crect%20width%3D%2222%22%20height%3D%2215%22%20fill%3D%22white%22%20transform%3D%22translate(11%2014.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A";function c1(){return n.jsx("div",{className:"absolute inset-0 bg-gradient-to-r from-[#2e2e38] to-[rgba(0,0,0,0)] via-[62.981%] via-[rgba(46,46,56,0.7)] w-full","data-name":"Container",children:n.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"IndianTaxLady 1",children:n.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[n.jsx("img",{alt:"",className:"absolute max-w-none object-cover object-[70%_center] size-full",src:t1}),n.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.25)] inset-0"})]})})})}function p1(){return n.jsxs("section",{className:"relative shrink-0 w-full min-h-[420px] md:min-h-[560px] lg:min-h-[632px] overflow-hidden","data-name":"section",children:[n.jsx(c1,{}),n.jsx("div",{className:"absolute bottom-0 left-0 right-0 h-[4px] bg-[#ffe600]"}),n.jsxs("div",{className:"relative z-[1] flex flex-col gap-5 md:gap-6 max-w-[640px] px-5 sm:px-8 md:px-10 pt-24 pb-16 md:pt-32 md:pb-20",children:[n.jsx("h1",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.1] not-italic text-[#ffe600] text-[36px] sm:text-[48px] md:text-[58px] tracking-[-0.02em] m-0",children:"EY India AI Tax Hub"}),n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.45] not-italic m-0 text-[16px] sm:text-[18px] md:text-[20px] text-[rgba(255,255,255,0.85)]",children:"A program offering suite of AI Agents for deep research, compliance, litigation and AI led bespoke tax function transformation capabilities. It is backed by trusted tax databases and sharpest tax minds in India."}),n.jsx("button",{type:"button",className:"bg-[#ffe600] border-0 cursor-pointer font-['EYInterstate:Regular',sans-serif] text-[#2e2e38] text-[16px] px-6 py-3 w-fit",children:"Know More"})]})]})}function u1(){return n.jsxs("div",{className:"relative shrink-0 w-full flex flex-col gap-2 items-center text-center px-2","data-name":"Container",children:[n.jsx("h2",{className:"font-['EYInterstate:Bold',sans-serif] leading-[1.25] not-italic m-0 text-[#2e2e38] text-[24px] sm:text-[28px] md:text-[32px] tracking-[-0.02em]",children:"Discover what's happening on the Hub"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[1.5] not-italic m-0 text-[#747480] text-[15px] md:text-[16px] max-w-[720px]",children:"The three foundational pillars of the EY India AI Tax Hub, designed to revolutionize your end-to-end tax operations."})]})}function f1(){return n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"Research & Litigation"})})}function h1(){return n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[71px]","data-name":"file-search-corner 4",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:n.jsxs("g",{id:"file-search-corner 4",children:[n.jsx("path",{d:dr.p17d3fb80,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:dr.p1b4fc880,id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M39.375 41.25L33.975 35.85",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:dr.p26318a80,id:"Vector_4",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function g1(){return n.jsxs("div",{className:"absolute bg-gradient-to-t from-[61.538%] from-[rgba(46,46,56,0)] h-[192px] left-0 to-[rgba(0,0,0,0)] top-[0.41px] w-full","data-name":"Container",children:[n.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"ResearchLitigation 1",children:n.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[n.jsx("img",{alt:"",className:"absolute max-w-none object-cover size-full",src:n1}),n.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),n.jsx(h1,{})]})}function x1(){return n.jsx("div",{className:"absolute h-[27px] left-[16px] top-[149px] w-full max-w-full","data-name":"h3"})}function m1(){return n.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex items-start justify-between p-[10px] relative size-full",children:[n.jsx(g1,{}),n.jsx(x1,{})]})})})}function v1(){return n.jsx("div",{className:"h-[67.195px] relative shrink-0 w-full","data-name":"p",children:n.jsx("p",{className:"[word-break:break-word] absolute font-['EYInterstate:Bold',sans-serif] leading-[23.996px] left-0 not-italic text-[#747480] text-[16.002px] top-[0.5px] w-full",children:"Platform for research and litigation with deeply embedded agentic capabilities."})})}function y1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:n.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0","data-name":"Link",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#747480] border-solid inset-0 pointer-events-none"}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] whitespace-nowrap",children:"Know more"})]})})}function b1(){return n.jsxs("div",{className:"bg-white flex-[1_0_0] min-h-px relative rounded-[5px] w-full","data-name":"Container",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[5px]"}),n.jsx("div",{className:"flex flex-col justify-center size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start justify-between p-[20px] relative size-full",children:[n.jsx(v1,{}),n.jsx(y1,{})]})})]})}function w1(){return n.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[n.jsx(m1,{}),n.jsx(b1,{})]})}),n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function k1(){return n.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px]",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),n.jsx(f1,{}),n.jsx(w1,{})]})}function j1(){return n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"Compliance"})})}function C1(){return n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[73.41px]","data-name":"list-checks 1",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:n.jsxs("g",{id:"list-checks 1",children:[n.jsx("path",{d:"M24.375 9.375H39.375",id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M24.375 22.5H39.375",id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M24.375 35.625H39.375",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:dr.p3eb8a400,id:"Vector_4",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:dr.p2dd93a80,id:"Vector_5",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function E1(){return n.jsxs("div",{className:"absolute bg-[#2e2e38] h-[192px] left-0 top-0 w-full","data-name":"Container",children:[n.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"Compliance 1",children:n.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[n.jsx("img",{alt:"",className:"absolute max-w-none object-cover size-full",src:r1}),n.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),n.jsx(C1,{})]})}function S1(){return n.jsx("div",{className:"absolute h-[27px] left-[16px] top-[149px] w-full max-w-full","data-name":"h3"})}function F1(){return n.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex items-start justify-between p-[10px] relative size-full",children:[n.jsx(E1,{}),n.jsx(S1,{})]})})})}function z1(){return n.jsx("div",{className:"content-stretch flex items-center justify-center py-px relative shrink-0","data-name":"p",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[23.996px] not-italic relative shrink-0 text-[#747480] text-[16.002px] w-full",children:"Platforms for multiple tax compliances powered by AI agents"})})}function A1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:n.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0","data-name":"Link",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#747480] border-solid inset-0 pointer-events-none"}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] whitespace-nowrap",children:"Know more"})]})})}function I1(){return n.jsx("div",{className:"bg-white relative rounded-[5px] shrink-0 w-full","data-name":"Container",children:n.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start p-[20px] relative size-full",children:[n.jsx(z1,{}),n.jsx(A1,{})]})})}function L1(){return n.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[n.jsx(F1,{}),n.jsx(I1,{})]})}),n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function N1(){return n.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px]",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),n.jsx(j1,{}),n.jsx(L1,{})]})}function T1(){return n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center py-[8px] relative shrink-0 w-full",children:n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[32.004px] min-w-px not-italic relative text-[#2E2E38] text-[25.998px] text-center",children:"EY.ai Tax Labs"})})}function R1(){return n.jsx("div",{className:"absolute left-1/2 -translate-x-1/2 size-[45px] top-[73.41px]","data-name":"flask-conical (1) 1",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 45 45",children:n.jsxs("g",{id:"flask-conical (1) 1",children:[n.jsx("path",{d:dr.p110f3b80,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M12.0994 28.125H32.9006",id:"Vector_2",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"}),n.jsx("path",{d:"M15.9375 3.75H29.0625",id:"Vector_3",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"4"})]})})})}function M1(){return n.jsxs("div",{className:"absolute bg-gradient-to-t from-1/2 from-[rgba(46,46,56,0.6)] h-[192px] left-0 to-[rgba(0,0,0,0)] top-0 w-full","data-name":"Container",children:[n.jsx("div",{className:"absolute inset-0 w-full h-full","data-name":"Tax lab 1",children:n.jsxs("div",{"aria-hidden":!0,className:"absolute inset-0 pointer-events-none",children:[n.jsx("div",{className:"absolute inset-0 overflow-hidden",children:n.jsx("img",{alt:"",className:"absolute h-[150.96%] left-[-30.48%] max-w-none top-[-32.57%] w-[153.51%]",src:i1})}),n.jsx("div",{className:"absolute bg-[rgba(0,0,0,0.5)] inset-0"})]})}),n.jsx(R1,{})]})}function B1(){return n.jsx("div",{className:"h-[27px] relative shrink-0 w-full max-w-full","data-name":"h3"})}function D1(){return n.jsx("div",{className:"h-[192px] relative shrink-0 w-full","data-name":"Container",children:n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col gap-[10px] items-start p-[16px] relative size-full",children:[n.jsx(M1,{}),n.jsx(B1,{})]})})})}function P1(){return n.jsx("div",{className:"content-stretch flex items-center justify-center relative shrink-0","data-name":"p",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[23.996px] not-italic relative shrink-0 text-[#747480] text-[16.002px] w-full",children:"Your space to build the tax function of the future"})})}function _1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start relative shrink-0",children:n.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex items-center justify-center px-[16px] py-[7px] relative shrink-0","data-name":"Link",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#747480] border-solid inset-0 pointer-events-none"}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a24] text-[14px] whitespace-nowrap",children:"Know more"})]})})}function H1(){return n.jsx("div",{className:"bg-white flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:n.jsx("div",{className:"flex flex-col justify-center size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start justify-between p-[20px] relative size-full",children:[n.jsx(P1,{}),n.jsx(_1,{})]})})})}function O1(){return n.jsxs("div",{className:"flex-[1_0_0] min-h-px relative w-full","data-name":"Container",children:[n.jsx("div",{className:"overflow-clip rounded-[inherit] size-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-start p-px relative size-full",children:[n.jsx(D1,{}),n.jsx(H1,{})]})}),n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none shadow-[0px_1px_2px_0px_rgba(35,35,47,0.06),0px_4px_8px_0px_rgba(35,35,47,0.08)]"})]})}function W1({onOpenTaxLabs:i}){return n.jsxs("button",{type:"button",onClick:i,title:"Explore EY.ai Tax Labs",className:"content-stretch flex flex-col items-stretch relative w-full min-w-0 md:min-h-[391px] bg-transparent border-0 p-0 cursor-pointer text-left appearance-none",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-[-1px] pointer-events-none"}),n.jsx(T1,{}),n.jsx(O1,{})]})}function V1({onOpenTaxLabs:i}){return n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(k1,{}),n.jsx(N1,{}),n.jsx(W1,{onOpenTaxLabs:i})]})}function $1({onOpenTaxLabs:i}){return n.jsx("div",{className:"bg-white relative shrink-0 w-full","data-name":"Section",children:n.jsxs("div",{className:"content-stretch flex flex-col gap-8 items-stretch p-5 sm:p-8 md:p-10 relative size-full",children:[n.jsx(u1,{}),n.jsx(V1,{onOpenTaxLabs:i})]})})}function G1(){return n.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function U1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-10 md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:n.jsx(G1,{})})}function Y1(){return n.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${a1}")`},"data-name":"Group",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:n.jsxs("g",{id:"Group",children:[n.jsx("path",{d:dr.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),n.jsx("path",{d:dr.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function q1(){return n.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:n.jsx(Y1,{})})}function Z1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:n.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:n.jsx(q1,{})})})}function K1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:n.jsx(Z1,{})})}function Q1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:n.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function X1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:n.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function J1(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:n.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function em(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:n.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function tm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:n.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function nm(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[n.jsx(Q1,{}),n.jsx(X1,{}),n.jsx(J1,{}),n.jsx(em,{}),n.jsx(tm,{})]})}function rm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:n.jsx(nm,{})})}function im(){return n.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(K1,{}),n.jsx(rm,{})]})}function am(){return n.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:n.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function om(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${o1}")`},"data-name":"Background"})})}function lm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(om,{})]})})}function sm(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${l1}")`},"data-name":"Background"})})}function dm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(sm,{})]})})}function cm(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${s1}")`},"data-name":"Background"})})}function pm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(cm,{})]})})}function um(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${d1}")`},"data-name":"Background"})})}function fm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(um,{})]})})}function hm(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[n.jsx(lm,{}),n.jsx(dm,{}),n.jsx(pm,{}),n.jsx(fm,{})]})}function gm(){return n.jsxs("div",{className:"content-stretch flex flex-col sm:flex-row sm:items-center gap-4 relative shrink-0 w-full min-w-0",children:[n.jsx(am,{}),n.jsx(hm,{})]})}function xm(){return n.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Container",children:n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-0 sm:px-[8px] relative w-full",children:n.jsx(gm,{})})})}function mm(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-8 md:gap-[36px] items-stretch relative shrink-0 w-full min-w-0",children:[n.jsx(im,{}),n.jsx(xm,{})]})}function vm(){return n.jsx("div",{className:"content-stretch flex flex-col items-center relative shrink-0 w-full",children:n.jsx(mm,{})})}function ym({onOpenTaxLabs:i}){return n.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:[n.jsx(p1,{}),n.jsx($1,{onOpenTaxLabs:i}),n.jsxs("div",{className:"bg-white content-stretch flex flex-col items-stretch justify-center px-4 sm:px-8 md:px-[64px] py-10 md:py-14 relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:[n.jsx(U1,{}),n.jsx(vm,{})]})]})}function bm({onOpenTaxLabs:i}){return n.jsx("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full min-w-0","data-name":"Body",children:n.jsx(ym,{onOpenTaxLabs:i})})}function wm(){const i=Nn();return n.jsxs("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden bg-white","data-name":"HOME 2",children:[n.jsx("div",{className:"sticky top-0 z-[300] w-full",children:n.jsx(gi,{variant:"hub",activeSection:"home",onNavigate:i,skipLinkTarget:"#home-content"})}),n.jsx("div",{id:"home-content",className:"w-full min-w-0",children:n.jsx(bm,{onOpenTaxLabs:()=>i("/phased")})})]})}const ha={p3955b500:"M80.5276 0L19.8341 22.1511L80.5276 11.4305V0Z",p3bfa7a00:"M3.3328 8H12.6672M8 12.6672L12.6672 8L8 3.3328",pf788bc0:"M29.572 49.9334H40.673V43.4875H29.572V38.4211H41.8524L37.7779 31.3598H20.3641V62.0601H44.9238V54.9988H29.5711L29.572 49.9334ZM61.2704 31.3607L56.0551 41.3795L50.8528 31.3607H40.673L51.3993 49.9343V62.0611H60.5788V49.9343L71.3197 31.3607H61.2704ZM71.519 96.4482C71.519 96.664 71.5043 96.9368 71.4905 97.0379H67.3784C67.4501 97.9867 68.0976 98.3752 68.8306 98.3752C69.2623 98.3752 69.6646 98.2457 70.0099 97.9003L71.2177 98.9208C70.5849 99.7116 69.6214 99.9991 68.7589 99.9991C66.775 99.9991 65.6388 98.4753 65.6388 96.4767C65.6388 94.3054 66.9761 92.9249 68.6441 92.9249C70.4269 92.9249 71.5199 94.4918 71.5199 96.4473L71.519 96.4482ZM67.4069 95.7153H69.8225C69.7647 94.9529 69.276 94.4358 68.5862 94.4358C67.7669 94.4358 67.4501 95.155 67.4069 95.7153ZM91.85 96.4482C91.85 96.664 91.8353 96.9368 91.8215 97.0379H87.7094C87.781 97.9867 88.4286 98.3752 89.1616 98.3752C89.5932 98.3752 89.9956 98.2457 90.3409 97.9003L91.5487 98.9208C90.9159 99.7116 89.9524 99.9991 89.0899 99.9991C87.106 99.9991 85.9698 98.4753 85.9698 96.4767C85.9698 94.3054 87.3071 92.9249 88.9751 92.9249C90.7579 92.9249 91.8509 94.4918 91.8509 96.4473L91.85 96.4482ZM87.7379 95.7153H90.1535C90.0957 94.9529 89.607 94.4358 88.9172 94.4358C88.0979 94.4358 87.781 95.155 87.7379 95.7153ZM84.3155 97.4402L85.437 98.5038C84.8621 99.2367 84.0712 99.9991 82.7339 99.9991C80.8794 99.9991 79.5127 98.5185 79.5127 96.4767C79.5127 94.6076 80.6489 92.9249 82.7624 92.9249C83.9702 92.9249 84.8042 93.4714 85.4223 94.3917L84.2724 95.5564C83.8701 95.0246 83.4384 94.6076 82.7486 94.6076C81.8136 94.6076 81.3249 95.3984 81.3249 96.4482C81.3249 97.4255 81.7566 98.3026 82.7624 98.3026C83.3805 98.3026 83.8985 97.972 84.3155 97.4402ZM68.6717 86.1676H67.0037V85.6928C66.6298 86.1097 66.0264 86.3109 65.422 86.3109C63.6677 86.3109 63.0063 85.0452 63.0063 83.2193V79.38H64.7028V83.0751C64.7028 83.9954 64.8902 84.6852 65.839 84.6852C66.7878 84.6852 66.9752 83.966 66.9752 83.132V79.3791H68.6717V86.1658V86.1676ZM73.9631 84.1837L73.7188 85.9095C73.3735 86.1823 72.7415 86.3118 72.3245 86.3118C71.2894 86.3118 70.4839 85.5357 70.4839 84.2985V81.0057H69.5066V79.3809H70.4839V77.6128L72.1803 76.7504V79.3818H73.7905V81.0066H72.1803V83.8539C72.1803 84.4436 72.4246 84.6595 72.8416 84.6595C73.2586 84.6595 73.6903 84.4427 73.9631 84.1837ZM48.1965 86.1676H46.5V82.4725C46.5 81.5522 46.2988 80.8762 45.35 80.8762C44.4012 80.8762 44.1854 81.4944 44.1854 82.4294V86.1676H42.4889V77.6128L44.1854 76.7504V79.8558C44.5592 79.482 45.0194 79.2376 45.7817 79.2376C47.5792 79.2376 48.1974 80.6181 48.1974 82.343L48.1965 86.1676ZM78.4776 99.8558H76.7232V96.1607C76.7232 95.2119 76.5074 94.5791 75.5586 94.5791C74.6667 94.5791 74.3792 95.1109 74.3792 96.1175V99.8558H72.6249V93.0691H74.3792V93.5293C74.7383 93.1701 75.2711 92.9258 76.0325 92.9258C77.8732 92.9258 78.4766 94.3495 78.4766 96.0174V99.8567L78.4776 99.8558ZM56.5364 92.4804C57.0976 92.4804 57.5431 92.0349 57.5431 91.4737C57.5431 90.9125 57.0976 90.467 56.5364 90.467C55.9752 90.467 55.5298 90.9125 55.5298 91.4737C55.5298 92.0349 55.9752 92.4804 56.5364 92.4804ZM11.7044 92.4804C12.2656 92.4804 12.7111 92.0349 12.7111 91.4737C12.7111 90.9125 12.2656 90.467 11.7044 90.467C11.1432 90.467 10.6978 90.9125 10.6978 91.4737C10.6978 92.0349 11.1432 92.4804 11.7044 92.4804ZM91.85 82.76C91.85 82.9759 91.8353 83.2487 91.8215 83.3497H87.7094C87.781 84.2985 88.4286 84.687 89.1616 84.687C89.5932 84.687 89.9956 84.5575 90.3409 84.2122L91.5487 85.2326C90.9159 86.0234 89.9524 86.3109 89.0899 86.3109C87.106 86.3109 85.9698 84.7871 85.9698 82.7885C85.9698 80.6172 87.3071 79.2367 88.9751 79.2367C90.7579 79.2367 91.8509 80.8037 91.8509 82.7591L91.85 82.76ZM87.7379 82.0271H90.1535C90.0957 81.2647 89.607 80.7476 88.9172 80.7476C88.0979 80.7476 87.781 81.4668 87.7379 82.0271ZM80.4193 86.1676H78.7513V85.6928C78.3774 86.1097 77.774 86.3109 77.1696 86.3109C75.4153 86.3109 74.754 85.0452 74.754 83.2193V79.38H76.4504V83.0751C76.4504 83.9954 76.6378 84.6852 77.5866 84.6852C78.5354 84.6852 78.7228 83.966 78.7228 83.132V79.3791H80.4193V86.1658V86.1676ZM54.9401 82.76C54.9401 82.9759 54.9254 83.2487 54.9116 83.3497H50.7995C50.8711 84.2985 51.5187 84.687 52.2516 84.687C52.6833 84.687 53.0856 84.5575 53.431 84.2122L54.6388 85.2326C54.006 86.0234 53.0425 86.3109 52.18 86.3109C50.196 86.3109 49.0598 84.7871 49.0598 82.7885C49.0598 80.6172 50.3972 79.2367 52.0652 79.2367C53.848 79.2367 54.941 80.8037 54.941 82.7591L54.9401 82.76ZM50.828 82.0271H53.2436C53.1857 81.2647 52.6971 80.7476 52.0073 80.7476C51.188 80.7476 50.8711 81.4668 50.828 82.0271ZM64.588 99.8558H62.8337V99.4103C62.2587 99.8273 61.9133 100 61.2952 100C59.3397 100 58.5057 98.3035 58.5057 96.405C58.5057 94.3485 59.483 92.9258 61.252 92.9258C61.8417 92.9258 62.402 93.0838 62.8337 93.4723V91.301L64.588 90.4239V99.8558ZM62.8346 97.757V95.1688C62.4608 94.7665 62.1016 94.5791 61.6121 94.5791C60.5916 94.5791 60.3464 95.3846 60.3464 96.3472C60.3464 97.4402 60.6623 98.3458 61.6552 98.3458C62.1439 98.3458 62.4892 98.1308 62.8346 97.757ZM55.6446 93.0691V99.8558H57.3989V93.0691H55.6446ZM54.6241 90.6544V92.0634C54.3651 91.977 54.0207 91.9339 53.7616 91.9339C53.2583 91.9339 53.0287 92.0918 53.0287 92.5235V93.07H54.4808V94.7095H53.0287V99.8567H51.2743V94.7095H50.3255V93.07H51.2743V92.2507C51.2743 90.9851 52.0652 90.468 53.3446 90.468C53.7185 90.468 54.265 90.5102 54.6241 90.6544ZM49.4621 99.8558H47.7078V96.1607C47.7078 95.2119 47.492 94.5791 46.5432 94.5791C45.6513 94.5791 45.3638 95.1109 45.3638 96.1175V99.8558H43.6095V93.0691H45.3638V93.5293C45.7229 93.1701 46.2557 92.9258 47.0171 92.9258C48.8578 92.9258 49.4612 94.3495 49.4612 96.0174V99.8567L49.4621 99.8558ZM39.3825 92.9258C37.427 92.9258 36.2045 94.4643 36.2045 96.4629C36.2045 98.5626 37.5419 100 39.3825 100C41.2232 100 42.5605 98.5626 42.5605 96.4629C42.5605 94.3632 41.338 92.9258 39.3825 92.9258ZM39.3825 98.3035C38.261 98.3035 38.0167 97.2252 38.0167 96.4629C38.0167 95.4131 38.4484 94.6085 39.3825 94.6085C40.3166 94.6085 40.7483 95.414 40.7483 96.4629C40.7483 97.2252 40.504 98.3035 39.3825 98.3035ZM34.508 97.4402L35.6295 98.5038C35.0546 99.2367 34.2637 99.9991 32.9264 99.9991C31.0719 99.9991 29.7052 98.5185 29.7052 96.4767C29.7052 94.6076 30.8414 92.9249 32.9549 92.9249C34.1627 92.9249 34.9967 93.4714 35.6148 94.3917L34.4649 95.5564C34.0626 95.0246 33.6309 94.6076 32.9411 94.6076C32.0061 94.6076 31.5174 95.3984 31.5174 96.4482C31.5174 97.4255 31.9491 98.3026 32.9549 98.3026C33.573 98.3026 34.091 97.972 34.508 97.4402ZM25.436 99.8558H23.6817V96.1607C23.6817 95.2119 23.4658 94.5791 22.517 94.5791C21.6252 94.5791 21.3239 95.1109 21.3239 96.1175V99.8558H19.5696V91.301L21.3239 90.4239V93.5293C21.6546 93.127 22.3444 92.9258 23.0204 92.9258C24.8032 92.9258 25.436 94.3348 25.436 96.0174V99.8558ZM18.4903 97.814L18.2313 99.5821C17.8722 99.8696 17.0088 99.9991 16.5486 99.9991C15.485 99.9991 14.7226 99.1504 14.7226 97.972V94.7077H13.5433V93.0682H14.7226V91.3001L16.477 90.4229V93.0682H18.4609V94.7077H16.477V97.4971C16.477 98.1153 16.7066 98.3164 17.1236 98.3164C17.5406 98.3164 18.1872 98.1006 18.4894 97.8131L18.4903 97.814ZM10.8273 93.0691V99.8558H12.5816V93.0691H10.8273ZM9.90694 93.0691L7.765 99.8558H6.15487L5.00491 95.729L3.84025 99.8558H2.23012L0.101035 93.0691H2.05652L3.07698 97.0085L4.22694 93.0691H5.82329L6.97325 97.0085L8.0084 93.0691H9.90694ZM62.5756 76.98V78.3743C62.187 78.2732 61.9289 78.2301 61.6984 78.2301C61.0949 78.2301 60.9654 78.4459 60.9654 78.7913V79.3809H62.1154V81.0204H60.9654V86.1676H59.269V81.0204H58.435V79.3809H59.269V78.5616C59.269 77.3823 59.8871 76.7789 61.3255 76.7789C61.7857 76.7789 62.1586 76.8652 62.5756 76.98ZM41.7118 84.1837L41.4675 85.9095C41.1222 86.1823 40.5187 86.3118 40.1017 86.3118C39.0666 86.3118 38.261 85.5357 38.261 84.2985V81.0057H37.0817V79.3809H38.261V77.6128L39.9575 76.7504V79.3818H41.5392V81.0066H39.9575V83.8539C39.9575 84.4436 40.2018 84.6595 40.6188 84.6595C41.0358 84.6595 41.4381 84.4427 41.7118 84.1837ZM33.8183 82.76C33.8183 82.9759 33.8036 83.2487 33.7898 83.3497H29.8209C29.8926 84.2985 30.5539 84.687 31.2878 84.687C31.7195 84.687 32.1071 84.5575 32.4524 84.2122L33.6603 85.2326C33.0991 85.9802 32.0786 86.3109 31.173 86.3109C29.2322 86.3109 28.0813 84.7871 28.0813 82.8023C28.0813 80.8174 29.3323 79.2367 31.1004 79.2367C32.998 79.2367 33.8183 80.9635 33.8183 82.76ZM29.8494 82.0271H32.2651C32.1934 81.2647 31.747 80.7476 31.0141 80.7476C30.2379 80.7476 29.8926 81.4668 29.8494 82.0271ZM27.2758 82.7894C27.2758 84.529 26.5566 86.3118 24.6305 86.3118C23.8828 86.3118 23.4227 86.039 23.1205 85.7506V87.8209L21.424 88.6696V79.3809H23.1205V79.8411C23.566 79.4388 24.0261 79.2376 24.659 79.2376C26.4849 79.2376 27.2758 80.9635 27.2758 82.7894ZM25.5214 82.8748C25.5214 81.8829 25.2624 80.8762 24.242 80.8762C23.7671 80.8762 23.3933 81.0921 23.1205 81.4797V84.068C23.3933 84.4565 23.8534 84.6861 24.343 84.6861C25.2918 84.6861 25.5214 83.8236 25.5214 82.8748ZM20.2447 86.1676H18.5482V85.6928C18.1459 86.095 17.6279 86.3109 16.9665 86.3109C15.6292 86.3109 14.5794 85.4484 14.5794 83.9531C14.5794 82.4578 15.5998 81.667 17.2246 81.667C17.6563 81.667 18.1018 81.7249 18.5473 81.9398V81.5807C18.5473 80.9479 18.1303 80.6888 17.3826 80.6888C16.8508 80.6888 16.3475 80.8184 15.8157 81.1343L15.1396 79.9265C15.8726 79.4663 16.5771 79.2367 17.4836 79.2367C19.1948 79.2367 20.2447 80.0707 20.2447 81.6092V86.1676ZM18.5482 84.1837V83.3212C18.2028 83.1054 17.7574 83.0337 17.412 83.0337C16.6643 83.0337 16.3052 83.3644 16.3052 83.9109C16.3052 84.4289 16.6359 84.8459 17.2687 84.8459C17.5994 84.8459 18.1744 84.7302 18.5482 84.1837ZM13.6452 86.1676H11.9488V82.4725C11.9488 81.5522 11.7476 80.8762 10.7988 80.8762C9.84999 80.8762 9.63415 81.4944 9.63415 82.4294V86.1676H7.93768V77.6128L9.63415 76.7504V79.8558C10.008 79.482 10.4681 79.2376 11.2305 79.2376C13.028 79.2376 13.6462 80.6181 13.6462 82.343V86.1676H13.6452ZM7.00264 83.4507C7.00264 85.4925 5.44946 86.3118 3.60971 86.3118C2.28615 86.3118 0.819302 85.8948 0 84.687L1.26569 83.5655C1.85537 84.27 2.70315 84.6007 3.56654 84.6007C4.58699 84.6007 5.17667 84.1405 5.17667 83.4939C5.17667 83.2349 5.07563 82.9759 4.64485 82.7609C4.32889 82.603 3.94037 82.5019 3.17801 82.3155C2.70315 82.2007 1.72586 81.9701 1.12149 81.4815C0.518034 80.9929 0.345356 80.2884 0.345356 79.6702C0.345356 77.758 1.98488 76.9818 3.59501 76.9818C4.98929 76.9818 5.99597 77.5568 6.80149 78.3761L5.5358 79.6124C4.94612 79.0227 4.37114 78.6921 3.47928 78.6921C2.71692 78.6921 2.15664 78.9364 2.15664 79.5692C2.15664 79.842 2.25767 80.0294 2.53047 80.1874C2.84643 80.36 3.29282 80.4895 3.98262 80.6622C4.80192 80.8781 5.56427 81.0645 6.18242 81.5678C6.72893 82.0133 7.00173 82.603 7.00173 83.4517L7.00264 83.4507ZM86.0414 79.6978L85.3489 81.3942C85.0898 81.1499 84.7877 80.9773 84.3716 80.9773C83.5661 80.9773 83.3667 81.6533 83.3667 82.4725V86.1676H81.6703V79.3809H83.3667V79.8558C83.7553 79.4673 84.2439 79.2376 84.7904 79.2376C85.2653 79.2376 85.6823 79.3818 86.0414 79.6978Z"},Tt=156,km=`2px solid ${p.yellow}`,jm=Yx.replace(/^Phase 1: /,"");function ga(i){i.currentTarget.style.outline=km,i.currentTarget.style.outlineOffset="2px"}function xa(i){i.currentTarget.style.outline="none"}function Yo(i){const{onNavigate:o,onBack:s,sectionStatus:u}=i,c=i.mode==="phase-overview",f=c?null:i.currentModuleId,g=c?void 0:i.onSectionClick,x=f?u0(f):null,m=c?"Foundational AI Training":x.title,v=c?"Phase 1 of 4":`Module ${x.order} of ${Zx}`,j=u??(c?void 0:"Section 1 of 4 Completed"),[b,z]=I.useState(!1),E=I.useRef(null),D=f?Kx(f):{learn:[],apply:[]},{learn:B,apply:_}=D,Q=!c&&!!(x!=null&&x.supportsInPageNav)&&(B.length>0||_.length>0),H=Em(g||!x?[]:x.subModules.map(K=>K.id));return I.useEffect(()=>{if(!b)return;function K(me){E.current&&!E.current.contains(me.target)&&z(!1)}function ge(me){me.key==="Escape"&&z(!1)}return document.addEventListener("mousedown",K),document.addEventListener("keydown",ge),()=>{document.removeEventListener("mousedown",K),document.removeEventListener("keydown",ge)}},[b]),n.jsxs("div",{style:{position:"sticky",top:0,zIndex:200},children:[n.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 md:gap-4 px-4 sm:px-6 md:px-10 py-3",style:{background:p.offBlack,borderBottom:`1px solid ${p.offBlack}`},children:[n.jsxs("div",{className:"flex items-center gap-2 md:gap-3 min-w-0 flex-1",children:[n.jsxs("button",{onClick:s,className:"flex items-center gap-2 shrink-0",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4},"aria-label":"Back to Tax Labs",onFocus:ga,onBlur:xa,children:[n.jsx(Cm,{}),n.jsx("span",{className:"hidden sm:inline",style:{fontFamily:k.bold,fontSize:14,color:p.yellow,whiteSpace:"nowrap"},children:"Tax Labs"})]}),n.jsx("span",{className:"hidden sm:inline shrink-0","aria-hidden":"true",children:n.jsx(vu,{})}),n.jsxs("div",{ref:E,className:"relative min-w-0",children:[n.jsxs("button",{onClick:()=>z(K=>!K),"aria-haspopup":"menu","aria-expanded":b,className:"flex items-center gap-1.5 min-w-0 max-w-[min(100%,240px)] sm:max-w-none",style:{background:"none",border:"none",cursor:"pointer",padding:0,borderRadius:4,fontFamily:k.bold,fontSize:14,color:p.white},onFocus:ga,onBlur:xa,children:[n.jsx("span",{className:"truncate",children:jm}),n.jsx("span",{style:{fontSize:8,color:p.yellow,transform:b?"rotate(180deg)":"none",transition:"transform 0.15s",display:"inline-block",flexShrink:0},"aria-hidden":"true",children:"▼"})]}),b&&n.jsxs("div",{role:"menu","aria-label":"Jump to module",style:{position:"absolute",top:"calc(100% + 8px)",left:0,minWidth:260,maxWidth:"min(90vw, 320px)",background:p.confidentBlack,border:"1px solid rgba(255,255,255,0.14)",borderRadius:8,boxShadow:"0 12px 32px rgba(0,0,0,0.4)",padding:6,zIndex:300},children:[n.jsx(yu,{label:"Phase 1 Overview",isCurrent:c,order:null,onClick:()=>{z(!1),c||o(qx)}}),od.map(K=>n.jsx(yu,{label:K.title,isCurrent:K.id===f,order:K.order,onClick:()=>{z(!1),K.id!==f&&o(K.path)}},K.id))]})]}),n.jsx("span",{className:"hidden lg:inline shrink-0","aria-hidden":"true",children:n.jsx(vu,{})}),n.jsx("span",{className:"hidden lg:inline truncate",style:{color:p.gray01,fontFamily:k.regular,fontSize:14},"aria-current":"page",children:m})]}),n.jsxs("div",{className:"flex items-center gap-3 md:gap-5 shrink-0",children:[n.jsx("div",{style:{background:p.yellow,borderRadius:12,padding:"6px 12px",fontFamily:k.bold,fontSize:12,color:p.confidentBlack,whiteSpace:"nowrap"},children:v}),j&&n.jsxs("div",{className:"hidden md:flex items-center gap-2",children:[n.jsx("span",{style:{width:8,height:8,borderRadius:"50%",background:p.yellow,flexShrink:0},"aria-hidden":"true"}),n.jsx("span",{style:{color:p.white,fontFamily:k.regular,fontSize:12,whiteSpace:"nowrap"},children:j})]})]})]}),Q&&n.jsxs("nav",{"aria-label":`${m} sections`,className:"flex gap-6 md:gap-8 overflow-x-auto px-4 sm:px-6 md:px-10 pt-2.5",style:{background:p.offWhite,borderBottom:"1px solid rgba(46,46,56,0.1)"},children:[B.length>0&&n.jsx(bu,{label:"Learn",items:B,activeSectionId:H,onSectionClick:g}),B.length>0&&_.length>0&&n.jsx("div",{className:"hidden sm:block w-px self-stretch mb-2.5",style:{background:"rgba(46,46,56,0.12)"},"aria-hidden":"true"}),_.length>0&&n.jsx(bu,{label:"Apply",items:_,activeSectionId:H,onSectionClick:g})]})]})}function Cm(){return n.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:26,height:26,borderRadius:"50%",border:`1.5px solid ${p.yellow}`,color:p.yellow,fontSize:14,lineHeight:1,flexShrink:0},"aria-hidden":"true",children:"←"})}function vu(){return n.jsx("span",{style:{color:p.gray01,fontSize:14,flexShrink:0},"aria-hidden":"true",children:"›"})}function yu({label:i,isCurrent:o,order:s,onClick:u}){return n.jsxs("button",{role:"menuitem","aria-current":o?"page":void 0,onClick:u,style:{width:"100%",display:"flex",alignItems:"center",gap:10,background:o?"rgba(255,230,0,0.1)":"none",border:"none",borderRadius:6,padding:"10px 10px",cursor:o?"default":"pointer",textAlign:"left",fontFamily:o?k.bold:k.regular,fontSize:13,color:o?p.yellow:p.white},onMouseEnter:c=>{o||(c.currentTarget.style.background="rgba(255,255,255,0.08)")},onMouseLeave:c=>{o||(c.currentTarget.style.background="none")},onFocus:ga,onBlur:xa,children:[s!==null&&n.jsx("span",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",width:18,height:18,borderRadius:"50%",fontSize:11,fontFamily:k.bold,background:o?p.yellow:"rgba(255,255,255,0.12)",color:o?p.offBlack:"rgba(255,255,255,0.7)",flexShrink:0},"aria-hidden":"true",children:s}),i]})}function bu({label:i,items:o,activeSectionId:s,onSectionClick:u}){return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6,flexShrink:0},children:[n.jsx("span",{style:{fontFamily:k.bold,fontSize:10,letterSpacing:"0.06em",textTransform:"uppercase",color:p.gray01},children:i}),n.jsx("div",{style:{display:"flex",gap:20},children:o.map(c=>{const f=c.id===s,g={display:"flex",flexDirection:"column",alignItems:"center",gap:8,paddingBottom:10,background:"none",border:"none",color:f?p.offBlack:p.gray01,fontFamily:f?k.bold:k.regular,fontSize:14,whiteSpace:"nowrap",textDecoration:"none",cursor:"pointer",borderBottom:f?`3px solid ${p.yellow}`:"3px solid transparent",transition:"color 0.15s, border-color 0.15s"};return u?n.jsx("button",{onClick:()=>u(c.id),style:g,onFocus:ga,onBlur:xa,children:c.label},c.id):n.jsx("a",{href:`#${c.id}`,"aria-current":f?"location":void 0,style:g,onFocus:ga,onBlur:xa,children:c.label},c.id)})})]})}function Em(i){const[o,s]=I.useState(i[0]??null);return I.useEffect(()=>{if(i.length===0)return;const u=i.map(f=>document.getElementById(f)).filter(f=>f!==null);if(u.length===0)return;const c=new IntersectionObserver(f=>{const g=f.filter(x=>x.isIntersecting);if(g.length>0){const x=g.reduce((m,v)=>m.boundingClientRect.top<v.boundingClientRect.top?m:v);s(x.target.id)}},{rootMargin:`-${Tt}px 0px -60% 0px`,threshold:0});return u.forEach(f=>c.observe(f)),()=>c.disconnect()},[i.join(",")]),o}const Gs={p18f7f580:"M12.6667 7.33333H3.33333C2.59695 7.33333 2 7.93029 2 8.66667V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66667C14 7.93029 13.403 7.33333 12.6667 7.33333Z",p3c2c1c00:"M4 7.3336C5.8411 7.3336 7.3336 5.8411 7.3336 4C7.3336 2.1589 5.8411 0.6664 4 0.6664C2.1589 0.6664 0.6664 2.1589 0.6664 4C0.6664 5.8411 2.1589 7.3336 4 7.3336Z",p4317f80:"M4.66667 7.33333V4.66667C4.66667 3.78261 5.01786 2.93477 5.64298 2.30964C6.2681 1.68452 7.11594 1.33333 8 1.33333C8.88405 1.33333 9.7319 1.68452 10.357 2.30964C10.9821 2.93477 11.3333 3.78261 11.3333 4.66667V7.33333"},Sm="/assets/f5e2e2f2ea31280810b6cbd46b1af92fee8b344c-DR_OQro3.png",f0="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2091.85%20100%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22clip0_1_2%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M91.85%200H0V100H91.85V0Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",h0="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_facebook.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1096)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M29.5615%2013.5H14.4385C13.92%2013.5%2013.5%2013.92%2013.5%2014.4385V29.5622C13.5%2030.08%2013.92%2030.5%2014.4385%2030.5H22.5808V23.9167H20.3652V21.3512H22.5808V19.4592C22.5808%2017.2634%2023.9217%2016.0677%2025.881%2016.0677C26.8195%2016.0677%2027.6256%2016.1378%2027.8607%2016.169V18.464L26.5022%2018.4647C25.4368%2018.4647%2025.2307%2018.9712%2025.2307%2019.7135V21.3519H27.7715L27.4407%2023.9175H25.2307V30.5H29.5629C30.08%2030.5%2030.5%2030.08%2030.5%2029.5615V14.4385C30.5%2013.92%2030.08%2013.5%2029.5615%2013.5Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1096%22%3E%0A%3Crect%20width%3D%2217%22%20height%3D%2217%22%20fill%3D%22white%22%20transform%3D%22translate(13.5%2013.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",g0="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_twitter.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M23.7821%2020.4474L30.7554%2012.3415H29.1029L23.048%2019.3797L18.212%2012.3415H12.6342L19.9472%2022.9845L12.6342%2031.4848H14.2867L20.6809%2024.0522L25.7881%2031.4848H31.3659L23.7821%2020.4474ZM21.5187%2023.0783L20.7777%2022.0185L14.8821%2013.5855H17.4203L22.1781%2020.3912L22.9191%2021.451L29.1037%2030.2974H26.5655L21.5187%2023.0783Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A",x0="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_linkedin.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1091)%22%3E%0A%3Cpath%20id%3D%22Vector%22%20d%3D%22M17.1036%2016.0713C17.1036%2017.0345%2016.3293%2017.815%2015.3738%2017.815C14.4182%2017.815%2013.644%2017.0345%2013.644%2016.0713C13.644%2015.1087%2014.4182%2014.3275%2015.3738%2014.3275C16.3293%2014.3275%2017.1036%2015.1087%2017.1036%2016.0713ZM17.1175%2019.21H13.63V30.37H17.1175V19.21ZM22.6849%2019.21H19.2198V30.37H22.6856V24.5117C22.6856%2021.2544%2026.8909%2020.9879%2026.8909%2024.5117V30.37H30.37V23.3036C30.37%2017.8073%2024.1469%2018.0075%2022.6849%2020.7131V19.21Z%22%20fill%3D%22var(--fill-0%2C%20black)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1091%22%3E%0A%3Crect%20width%3D%2216.74%22%20height%3D%2216.74%22%20fill%3D%22white%22%20transform%3D%22translate(13.63%2013.63)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",m0="data:image/svg+xml,%3Csvg%20preserveAspectRatio%3D%22none%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20overflow%3D%22visible%22%20style%3D%22display%3A%20block%3B%22%20viewBox%3D%220%200%2044%2044%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%0A%3Cg%20id%3D%22Mask%22%3E%0A%3Cg%20id%3D%22ic_youtube.svg%20fill%22%3E%0A%3Cg%20id%3D%22Component%206%22%20clip-path%3D%22url(%23clip0_1_1081)%22%3E%0A%3Cg%20id%3D%22Group%22%3E%0A%3Cg%20id%3D%22Group_2%22%3E%0A%3Cg%20id%3D%22Group_3%22%3E%0A%3Cg%20id%3D%22Group_4%22%3E%0A%3Cg%20id%3D%22Group_5%22%3E%0A%3Cpath%20id%3D%22Vector%22%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M32.5402%2016.8423C33%2018.5133%2033%2022%2033%2022C33%2022%2033%2025.4865%2032.5402%2027.1578C32.2872%2028.0797%2031.5419%2028.8058%2030.5951%2029.0523C28.8796%2029.5%2022%2029.5%2022%2029.5C22%2029.5%2015.1204%2029.5%2013.4047%2029.0523C12.4581%2028.8058%2011.7126%2028.0797%2011.4596%2027.1578C11%2025.4865%2011%2022%2011%2022C11%2022%2011%2018.5133%2011.4596%2016.8423C11.7126%2015.9203%2012.4581%2015.1942%2013.4047%2014.9478C15.1204%2014.5%2022%2014.5%2022%2014.5C22%2014.5%2028.8796%2014.5%2030.5951%2014.9478C31.5419%2015.1942%2032.2872%2015.9203%2032.5402%2016.8423ZM19.75%2025.1656L25.5%2022.0001L19.75%2018.8344V25.1656Z%22%20fill%3D%22var(--fill-0%2C%20%232E2E38)%22%2F%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3C%2Fg%3E%0A%3Cdefs%3E%0A%3CclipPath%20id%3D%22clip0_1_1081%22%3E%0A%3Crect%20width%3D%2222%22%20height%3D%2215%22%20fill%3D%22white%22%20transform%3D%22translate(11%2014.5)%22%2F%3E%0A%3C%2FclipPath%3E%0A%3C%2Fdefs%3E%0A%3C%2Fsvg%3E%0A",Rr={p18f7f580:"M12.6667 7.33333H3.33333C2.59695 7.33333 2 7.93029 2 8.66667V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V8.66667C14 7.93029 13.403 7.33333 12.6667 7.33333Z",p221839c0:"M13.3328 4L6.0002 11.3328L2.6672 7.99971",p3cbc4600:"M9.3332 1.3328H4.0004C3.64681 1.3328 3.30771 1.47329 3.05769 1.72336C2.80766 1.97343 2.6672 2.31259 2.6672 2.66624V13.3338C2.6672 13.6874 2.80766 14.0266 3.05769 14.2766C3.30771 14.5267 3.64681 14.6672 4.0004 14.6672H11.9996C12.3532 14.6672 12.6923 14.5267 12.9423 14.2766C13.1923 14.0266 13.3328 13.6874 13.3328 13.3338V5.33312M9.3332 1.3328C9.54421 1.33246 9.75321 1.37387 9.94816 1.45466C10.1431 1.53544 10.3201 1.654 10.4691 1.80351L12.8608 4.1957C13.0107 4.34471 13.1296 4.52195 13.2106 4.71718C13.2916 4.91241 13.3331 5.12175 13.3328 5.33312M9.3332 1.3328V4.6664C9.3332 4.84322 9.40343 5.01281 9.52844 5.13784C9.65345 5.26288 9.823 5.33312 9.9998 5.33312L13.3328 5.33312M6.6668 5.99984H5.3336M10.6664 8.66672H5.3336M10.6664 11.3336H5.3336",p4317f80:"M4.66667 7.33333V4.66667C4.66667 3.78261 5.01786 2.93477 5.64298 2.30964C6.2681 1.68452 7.11594 1.33333 8 1.33333C8.88405 1.33333 9.7319 1.68452 10.357 2.30964C10.9821 2.93477 11.3333 3.78261 11.3333 4.66667V7.33333"};function wu({className:i,property1:o="active"}){const s=o==="locked";return n.jsxs("div",{className:i||`content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] ${s?"bg-[#c4c4cd]":"bg-[#F6F6FA]"}`,children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[12px]"}),n.jsx("p",{className:`[word-break:break-word] font-["EYInterstate:Regular",sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] whitespace-nowrap ${s?"text-[#747480]":"text-[#2e2e38]"}`,children:"ACTIVE PHASE"})]})}function Fm({className:i,state:o="Open"}){const s=o==="Locked";return n.jsxs("div",{className:i||`content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[6px] ${s?"bg-[#C4C4CD] gap-[8px]":"bg-[#ffe600]"}`,children:[o==="Open"&&n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2E2E38] text-[16px] whitespace-nowrap",children:"Click here to Proceed"}),s&&n.jsxs(n.Fragment,{children:[n.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"Lock Icon",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsxs("g",{id:"Lock Icon",children:[n.jsx("path",{d:Rr.p18f7f580,id:"Vector",stroke:"var(--stroke-0, #747480)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"}),n.jsx("path",{d:Rr.p4317f80,id:"Vector_2",stroke:"var(--stroke-0, #747480)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"})]})})}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#747480] text-[16px] whitespace-nowrap",children:"This journey is locked"})]})]})}function zm({className:i,expanded:o=!0,onProceed:s}){const u=o,c=!o;return n.jsxs("div",{className:i||`bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex p-[32px] relative rounded-[12px] w-[1006px] ${c?"gap-[16px] items-center":"flex-col gap-[24px] items-start"}`,children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-0 pointer-events-none rounded-[12px]"}),u&&n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:"content-stretch flex items-center justify-between relative shrink-0 w-full","data-name":"Card-Header",children:[n.jsx(wu,{className:"bg-[#F6F6FA] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0"}),n.jsx("div",{className:"content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[13px]","data-name":"Collapse-Icon",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#747480] text-[12px] whitespace-nowrap",children:"▲"})})]}),n.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full","data-name":"Card-Body",children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] leading-[30px] relative shrink-0 text-[#2e2e38] text-[24px] w-full",children:"Foundational Training Workshops"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#747480] text-[14px] w-full",children:"3 workshops × 1.5 hrs each. Covers essential generative AI structures, tax workflows prompt architecture, and M365 Copilot productivity."})]}),n.jsxs("div",{className:"content-stretch flex gap-[40px] items-start relative shrink-0 w-full","data-name":"Card-Details",children:[n.jsxs("div",{className:"content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative","data-name":"Coverage-Col",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Coverage"}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full","data-name":"List",children:[n.jsxs("div",{className:"content-stretch flex gap-[10px] items-center relative shrink-0 w-full","data-name":"Frame",children:[n.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]","data-name":"Bullet",children:n.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"check",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsx("g",{id:"check",children:n.jsx("path",{d:Rr.p221839c0,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeWidth:"2"})})})})}),n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#2e2e38] text-[14px]",children:"AI concepts in Tax"})]}),n.jsxs("div",{className:"content-stretch flex gap-[10px] items-center relative shrink-0 w-full","data-name":"Frame",children:[n.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]","data-name":"Bullet",children:n.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"check",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsx("g",{id:"check",children:n.jsx("path",{d:Rr.p221839c0,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeWidth:"2"})})})})}),n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#2e2e38] text-[14px]",children:"Prompt engineering basics"})]}),n.jsxs("div",{className:"content-stretch flex gap-[10px] items-center relative shrink-0 w-full","data-name":"Frame",children:[n.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]","data-name":"Bullet",children:n.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"check",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsx("g",{id:"check",children:n.jsx("path",{d:Rr.p221839c0,id:"Vector",stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeWidth:"2"})})})})}),n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#2e2e38] text-[14px]",children:"M365 Copilot across tax use cases"})]})]})]}),n.jsxs("div",{className:"content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-w-px relative","data-name":"Deliverables-Col",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Deliverables"}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full","data-name":"List",children:[n.jsxs("div",{className:"content-stretch flex gap-[10px] items-center relative shrink-0 w-full","data-name":"Frame",children:[n.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]","data-name":"Bullet",children:n.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"file-text",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsx("g",{id:"file-text",children:n.jsx("path",{d:Rr.p3cbc4600,id:"Vector",stroke:"var(--stroke-0, #00C864)",strokeLinecap:"round",strokeWidth:"2"})})})})}),n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#2e2e38] text-[14px]",children:"Copilot Prompt Templates"})]}),n.jsxs("div",{className:"content-stretch flex gap-[10px] items-center relative shrink-0 w-full","data-name":"Frame",children:[n.jsx("div",{className:"content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[16px]","data-name":"Bullet",children:n.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"file-text",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsx("g",{id:"file-text",children:n.jsx("path",{d:Rr.p3cbc4600,id:"Vector",stroke:"var(--stroke-0, #00C864)",strokeLinecap:"round",strokeWidth:"2"})})})})}),n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Regular',sans-serif] font-normal leading-[normal] min-w-px not-italic relative text-[#2e2e38] text-[14px]",children:"Adoption & Enablement Toolkit"})]})]})]})]}),n.jsxs("div",{className:"content-stretch flex items-start pt-[12px] relative shrink-0 w-full","data-name":"Action-Section",onClick:f=>{f.stopPropagation(),s==null||s()},children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#C4C4CD] border-solid border-t inset-0 pointer-events-none"}),n.jsx(Fm,{className:"bg-[#ffe600] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0"})]})]}),c&&n.jsxs(n.Fragment,{children:[n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] h-full leading-[30px] min-w-px not-italic relative text-[#2e2e38] text-[24px]",children:"Foundational Training Workshops"}),n.jsx(wu,{className:"bg-[#F6F6FA] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0"}),n.jsx("div",{className:"content-stretch flex h-[24px] items-center justify-center overflow-clip relative shrink-0 w-[13px]","data-name":"Expand-Icon",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[#747480] text-[12px] whitespace-nowrap",children:"▼"})})]})]})}const it={circleGlowTop:"/pipeline/circle-glow-top.svg",circleGlowBot:"/pipeline/circle-glow-bot.svg",bot:"/pipeline/bot.svg",copilot:"/pipeline/copilot-icon.svg",message:"/pipeline/message-circle.svg",database:"/pipeline/database.svg",userCheck:"/pipeline/user-check.svg",cpu:"/pipeline/cpu.svg",arrow:"/pipeline/arrow-right.svg",info:"/pipeline/info.svg",word:"/pipeline/word.svg",excel:"/pipeline/excel.svg",teams:"/pipeline/teams.svg",powerpoint:"/pipeline/powerpoint.svg",sharepoint:"/pipeline/sharepoint.svg",outlook:"/pipeline/outlook.svg",line1:"/pipeline/line1.svg",line3:"/pipeline/line3.svg",line4:"/pipeline/line4.svg"},ku=1200,ju=820,Am=[{title:"Chat",desc:"Conversational interface layer for user interaction",icon:it.message},{title:"RAG",desc:"Retrieval-Augmented Generation for contextual data",icon:it.database},{title:"Human in the Loop",desc:"Expert oversight and decision validation layer",icon:it.userCheck},{title:"Model",desc:"AI/ML model inference and prediction engine",icon:it.cpu}];function Im({title:i,desc:o,icon:s}){return n.jsxs("div",{className:"bg-white border border-[#C4C4CD] shadow-[0px_2px_5px_rgba(0,0,0,0.08)] flex items-center justify-between px-4 py-3.5 rounded-xl w-[420px]",children:[n.jsxs("div",{className:"flex flex-1 gap-3 items-center min-w-0",children:[n.jsx("div",{className:"bg-[#ffe600] flex items-center justify-center rounded-[10px] shrink-0 size-10",children:n.jsx("img",{alt:"",className:"size-7",height:28,src:s,width:28})}),n.jsxs("div",{className:"flex flex-1 flex-col gap-1 min-w-0",children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] leading-6 text-base text-[#2e2e38] whitespace-nowrap",children:i}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[22.4px] text-sm text-[#1a1a24] w-[285px]",children:o})]})]}),n.jsx("img",{alt:"",className:"shrink-0 size-[18px]",height:18,src:it.arrow,width:18})]})}function Lm(){return n.jsxs("div",{className:"absolute left-[521px] top-[219px] size-[384px]",children:[n.jsx("div",{className:"absolute inset-0 flex items-center justify-center",children:n.jsx("div",{className:"-rotate-90 size-[384px]",children:n.jsxs("div",{className:"relative size-[384px]",children:[n.jsx("div",{className:"absolute bottom-1/2 left-0 right-0 top-0",children:n.jsx("img",{alt:"",className:"block size-full max-w-none",height:192,src:it.circleGlowTop,width:384})}),n.jsx("div",{className:"absolute bottom-0 left-0 right-0 top-1/2",children:n.jsx("img",{alt:"",className:"block size-full max-w-none",height:192,src:it.circleGlowBot,width:384})})]})})}),n.jsxs("svg",{className:"pointer-events-none absolute inset-0 size-full",viewBox:"0 0 384 384",fill:"none","aria-hidden":!0,children:[n.jsxs("defs",{children:[n.jsx("path",{id:"pipelineLeftLabel",d:"M192 320 A128 128 0 0 1 192 64"}),n.jsx("path",{id:"pipelineRightLabel",d:"M192 64 A128 128 0 0 1 192 320"})]}),n.jsx("text",{fill:"#1A1A24",fontFamily:"EYInterstate, sans-serif",fontSize:"12",fontWeight:"700",letterSpacing:"1",children:n.jsx("textPath",{href:"#pipelineLeftLabel",startOffset:"50%",textAnchor:"middle",children:"Core Processing Pipeline"})}),n.jsx("text",{fill:"#1A1A24",fontFamily:"EYInterstate, sans-serif",fontSize:"12",fontWeight:"700",letterSpacing:"1",children:n.jsx("textPath",{href:"#pipelineRightLabel",startOffset:"50%",textAnchor:"middle",children:"MS 365 Copilot"})})]}),n.jsx("div",{className:"absolute left-[68px] top-[68px] size-[248px] rounded-full bg-[#1a1a24]"}),n.jsxs("div",{className:"absolute left-1/2 top-1/2 flex w-[120px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1",children:[n.jsx("div",{className:"flex size-11 shrink-0 items-center justify-center rounded-xl border border-[rgba(255,230,0,0.2)] bg-[#2E2E38] p-3",children:n.jsx("img",{alt:"",className:"size-9",height:36,src:it.bot,width:36})}),n.jsx("p",{className:"w-[120px] shrink-0 text-center font-['EYInterstate:Bold',sans-serif] text-[15px] leading-normal text-white",children:"Copilot Engine"}),n.jsx("img",{alt:"Microsoft Copilot",className:"size-[116px] shrink-0",height:116,src:it.copilot,width:116})]})]})}function Nm(){const i=I.useRef(null),[o,s]=I.useState(1);return I.useEffect(()=>{const u=i.current;if(!u)return;const c=()=>s(u.clientWidth/ku);c();const f=new ResizeObserver(c);return f.observe(u),()=>f.disconnect()},[]),n.jsx("div",{ref:i,className:"relative mx-auto w-full max-w-[1200px] overflow-hidden rounded-2xl",style:{height:ju*o},"data-name":"Infographic - Core Processing Pipeline","data-node-id":"3440:2917",children:n.jsxs("div",{className:"absolute left-0 top-0 origin-top-left bg-[#1a1a24]",style:{width:ku,height:ju,transform:`scale(${o})`},children:[n.jsx(Lm,{}),n.jsx("div",{className:"absolute left-12 top-[136px] flex h-[588px] flex-col items-start justify-between",children:Am.map(u=>n.jsx(Im,{...u},u.title))}),n.jsx("div",{className:"absolute",style:{inset:"11.83% 29.57% 76.15% 62.42%"},children:n.jsx("img",{alt:"Microsoft Word",className:"absolute inset-0 size-full max-w-none",src:it.word})}),n.jsx("div",{className:"absolute",style:{inset:"19.73% 18.63% 68.26% 73.35%"},children:n.jsx("img",{alt:"Microsoft Excel",className:"absolute inset-0 size-full max-w-none",src:it.excel})}),n.jsx("div",{className:"absolute left-[951px] top-[276px] h-[99px] w-[94px] overflow-clip",children:n.jsx("img",{alt:"Microsoft Teams",className:"absolute inset-0 size-full max-w-none",src:it.teams})}),n.jsx("div",{className:"absolute",style:{inset:"51.55% 11.58% 37.01% 80.41%"},children:n.jsx("img",{alt:"Microsoft PowerPoint",className:"absolute inset-0 size-full max-w-none",src:it.powerpoint})}),n.jsx("div",{className:"absolute left-[880px] top-[531px] h-[108px] w-[96px] overflow-clip",children:n.jsx("img",{alt:"Microsoft SharePoint",className:"absolute inset-0 size-full max-w-none",src:it.sharepoint})}),n.jsx("div",{className:"absolute left-[755px] top-[605px] h-[91px] w-[96px] overflow-clip",children:n.jsx("img",{alt:"Microsoft Outlook",className:"absolute inset-0 size-full max-w-none",src:it.outlook})}),n.jsx("div",{className:"absolute left-[492px] top-[603px] flex h-[108px] w-[173px] items-center justify-center",children:n.jsx("div",{className:"flex-none rotate-[-27.55deg]",children:n.jsx("div",{className:"relative h-[28px] w-[181px]",children:n.jsx("img",{alt:"",className:"absolute inset-0 size-full max-w-none",src:it.line1})})})}),n.jsx("div",{className:"absolute left-[474px] top-[364px] h-0 w-[43px]",children:n.jsx("img",{alt:"",className:"absolute inset-[-4px_0] size-full max-w-none",src:it.line3})}),n.jsx("div",{className:"absolute left-[474px] top-[511px] h-0 w-[43px]",children:n.jsx("img",{alt:"",className:"absolute inset-[-4px_0] size-full max-w-none",src:it.line3})}),n.jsx("div",{className:"absolute left-[472px] top-[153px] flex h-[95px] w-[148px] items-center justify-center",children:n.jsx("div",{className:"flex-none rotate-[26.57deg]",children:n.jsx("div",{className:"relative h-[31px] w-[149px]",children:n.jsx("img",{alt:"",className:"absolute inset-0 size-full max-w-none",src:it.line4})})})}),n.jsxs("div",{className:"absolute bottom-0 left-0 flex h-12 w-full items-center justify-center gap-2 bg-[#2E2E38] px-8",children:[n.jsx("img",{alt:"",className:"size-4",height:16,src:it.info,width:16}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] text-sm leading-[22.4px] text-[#c4c4cd] whitespace-nowrap",children:"EY AI Tax Hub · Core Processing Pipeline · Confidential"})]})]})})}function Tm(){return n.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[12px] md:gap-[16px] items-start justify-center not-italic relative shrink-0 w-full max-w-[800px]","data-name":"Frame",children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#ffe600] text-[32px] sm:text-[40px] md:text-[48px] md:leading-[56px]",children:"EY.ai Tax Labs"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] font-normal leading-[26px] md:leading-[28px] relative shrink-0 text-[#C4C4CD] text-[16px] md:text-[18px] w-full",children:"A structured phased engagement designed to empower your tax teams with AI capabilities, from foundational training to advanced workflow integration."})]})}function Rm(){return n.jsx("div",{className:"relative shrink-0 w-full","data-name":"header-section",children:n.jsx("div",{className:"flex flex-row items-center size-full",children:n.jsx("div",{className:"content-stretch flex items-center justify-between pb-[24px] pt-[32px] md:pt-[40px] px-4 sm:px-8 md:px-[64px] relative size-full",children:n.jsx(Tm,{})})})})}function Mm(){return n.jsx("div",{className:"bg-[#1A1A24] relative shrink-0 w-full min-w-0","data-name":"diagram-viewport",children:n.jsx("div",{className:"flex flex-row items-center justify-center size-full min-w-0",children:n.jsx("div",{className:"content-stretch flex items-center justify-center px-4 sm:px-8 md:px-[48px] py-6 md:py-[40px] relative size-full min-w-0 w-full",children:n.jsx(Nm,{})})})})}function Bm(){return n.jsxs("div",{className:"bg-[#1A1A24] content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full","data-name":"ai-ms365-schematic",children:[n.jsx(Rm,{}),n.jsx(Mm,{})]})}function Dm(){return n.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[8px] items-start not-italic relative shrink-0 text-[#2e2e38] w-full","data-name":"Frame",children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.2] relative shrink-0 text-[24px] sm:text-[28px] md:text-[32px] md:leading-[40px]",children:"Phased Approach"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[24px] relative shrink-0 text-[15px] md:text-[16px] w-full",children:"A progressive journey from understanding to application to adoption, tailored for your organization's specific tax needs."})]})}function Pm(){return n.jsxs("div",{className:"bg-[#F6F6FA] content-stretch flex items-start px-[16px] sm:px-[20px] py-[12px] relative rounded-[4px] shrink-0 max-w-full","data-name":"Frame",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-0 pointer-events-none rounded-[4px]"}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[20px] not-italic relative shrink-0 text-[#2e2e38] text-[13px] sm:text-[14px]",children:"5-6 Weeks | ~10 Participants | M365 Copilot Licensed"})]})}function _m(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full","data-name":"Frame",children:[n.jsx(Dm,{}),n.jsx(Pm,{})]})}function Hm(){return n.jsx("div",{className:"bg-[#c4c4cd] relative shrink-0 w-full",children:n.jsx("div",{className:"content-stretch flex flex-col items-start px-4 sm:px-8 md:px-[64px] py-[24px] relative size-full",children:n.jsx(_m,{})})})}function Om(){return n.jsx("div",{className:"relative shrink-0 size-[16px]","data-name":"arrow-right",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsx("g",{id:"arrow-right",children:n.jsx("path",{d:ha.p3bfa7a00,id:"Vector",stroke:"var(--stroke-0, #1A1A24)",strokeLinecap:"round",strokeWidth:"2"})})})})}function Wm(){return n.jsxs("div",{className:"bg-[#ffe600] content-stretch flex gap-[12px] items-center justify-center px-[32px] py-[16px] relative rounded-[999px] shrink-0","data-name":"Frame",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] font-bold leading-[normal] not-italic relative shrink-0 text-[#1A1A24] text-[16px] whitespace-nowrap",children:"Download Engagement Overview"}),n.jsx(Om,{})]})}function Vm(){return n.jsx("div",{className:"content-stretch flex flex-col items-center pt-[40px] relative shrink-0 w-full","data-name":"Frame",children:n.jsx(Wm,{})})}const Bo=[{week:"Week 1-2",number:1,title:"Foundational Training Workshops",description:"2 workshops×1.5 hrs each. Covers AI concepts in Tax, Prompt engineering basics, and M365 Copilot across tax use cases.",locked:!1,coverage:["AI concepts in Tax","Prompt engineering (basics)","M365 Copilot across tax use cases"],deliverables:["Copilot Prompt Templates","Adoption & Enablement Toolkit"]},{week:"Week 3-4",number:2,title:"Brainstorming Tax Use Cases",description:"Identifying high-impact tax workflows where AI can automate repetitive tasks, improve accuracy, and reduce manual effort.",locked:!0,coverage:["Document fetching automation","Notice/Order validation","Drafting replies"],deliverables:["Prioritized Use Case List","ROI Estimation Framework"]},{week:"Week 5-6",number:3,title:"Guidance in Prompts & AI Agents",description:"Deep dive into advanced prompt engineering and the integration of AI agents into your existing tax workflows and systems.",locked:!0,coverage:["Advanced Prompt Engineering","AI Agent Integration","Data Quality & Validation"],deliverables:["Agent Configuration Guide","Validation Framework"]},{week:"Week 6",number:4,title:"Governance & AI Reinforcement",description:"Establishing the right governance structures and reinforcing AI adoption across the organization to ensure long-term success.",locked:!0,coverage:["Change Management","Governance Framework","Adoption Metrics"],deliverables:["Governance Policy","Adoption Roadmap"]}];function Cu(){return n.jsx("div",{className:"relative shrink-0 size-[8px]",children:n.jsxs("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 8 8",children:[n.jsx("g",{clipPath:"url(#clip0_card_bullet)",children:n.jsx("path",{d:Gs.p3c2c1c00,stroke:"var(--stroke-0, #FFE600)",strokeLinecap:"round",strokeWidth:"2"})}),n.jsx("defs",{children:n.jsx("clipPath",{id:"clip0_card_bullet",children:n.jsx("rect",{fill:"white",height:"8",width:"8"})})})]})})}function $m(){return n.jsx("div",{className:"relative shrink-0 size-[16px]",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 16 16",children:n.jsxs("g",{children:[n.jsx("path",{d:Gs.p18f7f580,stroke:"var(--stroke-0, #747480)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"}),n.jsx("path",{d:Gs.p4317f80,stroke:"var(--stroke-0, #747480)",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.66667"})]})})})}function Do({phase:i,onProceed:o}){return n.jsxs("div",{className:"bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-px relative rounded-[8px]",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-0 pointer-events-none rounded-[8px]"}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[24px] items-start p-[32px] relative size-full",children:[n.jsxs("div",{className:"content-stretch flex items-center justify-between relative shrink-0 w-full min-w-0",children:[n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1A1A24] text-[20px] whitespace-nowrap",children:i.number})}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:i.week})]}),n.jsxs("div",{className:"[word-break:break-word] content-stretch flex flex-col gap-[12px] items-start not-italic relative shrink-0 w-full",children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] leading-[normal] relative shrink-0 text-[#2e2e38] text-[24px]",children:i.title}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] leading-[22px] min-w-full relative shrink-0 text-[#747480] text-[14px] w-[min-content]",children:i.description})]}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full",children:[n.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Coverage"}),n.jsx("div",{className:"content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full",children:i.coverage.map(s=>n.jsxs("div",{className:"content-stretch flex gap-[8px] items-center relative shrink-0",children:[n.jsx(Cu,{}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative min-w-0 text-[#2e2e38] text-[14px]",children:s})]},s))})]}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full",children:[n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:"Deliverables"}),n.jsx("div",{className:"content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full",children:i.deliverables.map(s=>n.jsxs("div",{className:"content-stretch flex gap-[8px] items-center relative shrink-0",children:[n.jsx(Cu,{}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative min-w-0 text-[#2e2e38] text-[14px]",children:s})]},s))})]})]}),i.locked?n.jsxs("div",{className:"bg-[#C4C4CD] content-stretch flex gap-[8px] items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0",children:[n.jsx($m,{}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#747480] text-[16px] whitespace-nowrap",children:"This journey is locked"})]}):n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center px-[20px] py-[10px] relative rounded-[6px] shrink-0 cursor-pointer",onClick:o,children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2E2E38] text-[16px] whitespace-nowrap",children:"Click here to Proceed"})})]})]})}function Gm({onProceed:i}){return n.jsx("div",{className:"relative shrink-0 w-full min-w-0",children:n.jsx("div",{className:"content-stretch flex flex-col gap-[24px] items-stretch px-4 sm:px-8 md:px-[64px] relative size-full",children:n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-[24px] relative shrink-0 w-full",children:[n.jsx(Do,{phase:Bo[0],onProceed:i}),n.jsx(Do,{phase:Bo[1]}),n.jsx(Do,{phase:Bo[2]}),n.jsx(Do,{phase:Bo[3]})]})})})}function Um(){return n.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function Ym(){return n.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-[40px] md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:n.jsx(Um,{})})}function qm(){return n.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${f0}")`},"data-name":"Group",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:n.jsxs("g",{id:"Group",children:[n.jsx("path",{d:ha.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),n.jsx("path",{d:ha.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function Zm(){return n.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:n.jsx(qm,{})})}function Km(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:n.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:n.jsx(Zm,{})})})}function Qm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:n.jsx(Km,{})})}function Xm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:n.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function Jm(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:n.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function e2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:n.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function t2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:n.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function n2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:n.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function r2(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0 w-full","data-name":"List",children:[n.jsx(Xm,{}),n.jsx(Jm,{}),n.jsx(e2,{}),n.jsx(t2,{}),n.jsx(n2,{})]})}function i2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:n.jsx(r2,{})})}function a2(){return n.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(Qm,{}),n.jsx(i2,{})]})}function o2(){return n.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:n.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function l2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${h0}")`},"data-name":"Background"})})}function s2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(l2,{})]})})}function d2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${g0}")`},"data-name":"Background"})})}function c2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(d2,{})]})})}function p2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${x0}")`},"data-name":"Background"})})}function u2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(p2,{})]})})}function f2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${m0}")`},"data-name":"Background"})})}function h2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(f2,{})]})})}function g2(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-[0px_10px] items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[n.jsx(s2,{}),n.jsx(c2,{}),n.jsx(u2,{}),n.jsx(h2,{})]})}function x2(){return n.jsxs("div",{className:"content-stretch flex flex-col sm:flex-row sm:items-center gap-4 relative shrink-0 w-full min-w-0",children:[n.jsx(o2,{}),n.jsx(g2,{})]})}function m2(){return n.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Container",children:n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-0 sm:px-[8px] relative w-full",children:n.jsx(x2,{})})})}function v2(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-8 md:gap-[36px] items-stretch relative shrink-0 w-full min-w-0",children:[n.jsx(a2,{}),n.jsx(m2,{})]})}function y2(){return n.jsx("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:n.jsx(v2,{})})}function b2(){return n.jsx("div",{className:"absolute h-[1200px] left-0 opacity-8 top-0 w-full pointer-events-none","data-name":"Background Motif",children:n.jsx("img",{alt:"",className:"absolute inset-0 max-w-none object-cover pointer-events-none size-full",src:Sm})})}function w2(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full min-w-0",children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,flexWrap:"wrap"},children:[n.jsx("p",{style:{fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:11,letterSpacing:"0.05em",textTransform:"uppercase",color:"#B89B00",margin:0},children:"Phase 1 of 4"}),n.jsx("div",{style:{display:"flex",gap:5,alignItems:"center"},children:[0,1,2,3].map(i=>n.jsx("div",{style:{width:i===0?20:8,height:8,borderRadius:999,background:i===0?"#2e2e38":"#c4c4cd",transition:"width 0.2s"}},i))})]}),n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold leading-[1.15] relative shrink-0 text-[#2e2e38] text-[28px] sm:text-[36px] md:text-[48px] md:leading-[56px] w-full max-w-full",children:"Phase 1 — Foundational Training"}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] font-normal leading-[26px] md:leading-[28px] relative shrink-0 text-[#747480] text-[16px] md:text-[18px] w-full max-w-[800px]",children:"Select a module below to begin your foundational journey into AI concepts, prompting, and M365 Copilot capabilities."})]})}function _s({onNavigate:i,icon:o,activeIcon:s,title:u,description:c,estimatedTime:f}){const[g,x]=I.useState(!1),[m,v]=I.useState(!1),j=()=>{g?i==null||i():x(!0)};return g?n.jsxs("div",{className:"w-full min-w-0 relative rounded-[8px]",style:{background:"#FFFFFF",border:m?"1.5px solid #2e2e38":"1.5px solid #ffe600",boxShadow:m?"0 8px 28px rgba(0,0,0,0.09)":"0 4px 16px rgba(255,230,0,0.2)",cursor:"pointer",transition:"border 0.15s, box-shadow 0.15s, transform 0.15s",transform:m?"translateY(-2px)":"none"},onClick:j,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),role:"button",tabIndex:0,onKeyDown:b=>(b.key==="Enter"||b.key===" ")&&j(),"aria-label":`Begin ${u}`,children:[n.jsx("div",{style:{position:"absolute",top:0,bottom:0,left:0,width:m?6:4,background:"#ffe600",borderRadius:"8px 0 0 8px",transition:"width 0.1s"}}),n.jsx("div",{style:{position:"absolute",top:12,right:12,background:"#ffe600",color:"#1a1a24",fontSize:10,fontWeight:700,padding:"3px 8px",borderRadius:20,fontFamily:"'EYInterstate:Bold',sans-serif",letterSpacing:"0.05em"},children:"✓ UNLOCKED"}),n.jsxs("div",{className:"content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full",children:[n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:24,background:"#ffe600",flexShrink:0},children:s??o}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,flex:1},children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold text-[#2e2e38] text-[22px]",style:{lineHeight:"1.2",margin:0},children:u}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] text-[#747480] text-[14px]",style:{lineHeight:"22px",margin:0},children:c})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[f&&n.jsx("p",{style:{fontFamily:"'EYInterstate:Regular',sans-serif",fontSize:12,color:"#747480",margin:0},children:f}),n.jsx("div",{style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:6,background:m?"#2e2e38":"#ffe600",color:m?"#ffffff":"#1A1A24",padding:"8px 16px",borderRadius:4,fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:13,transition:"background 0.15s ease-out, color 0.15s ease-out"},children:"Begin →"})]})]})]}):n.jsx("div",{className:"w-full min-w-0 relative rounded-[8px]",style:{background:"#F6F6FA",border:"1px solid #F6F6FA",cursor:"pointer",transition:"box-shadow 0.15s",boxShadow:m?"0 4px 14px rgba(0,0,0,0.08)":"none"},onClick:j,onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),role:"button",tabIndex:0,onKeyDown:b=>(b.key==="Enter"||b.key===" ")&&j(),"aria-label":`Unlock ${u}`,children:n.jsxs("div",{className:"content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full",children:[n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",width:48,height:48,borderRadius:24,background:"#F6F6FA",flexShrink:0,opacity:.6},children:o}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8,flex:1},children:[n.jsx("p",{className:"font-['EYInterstate:Bold',sans-serif] font-bold text-[22px]",style:{lineHeight:"1.2",margin:0,color:"#c4c4cd"},children:u}),n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] text-[14px]",style:{lineHeight:"22px",margin:0,color:"#c4c4cd"},children:c})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",width:"100%"},children:[f&&n.jsx("p",{style:{fontFamily:"'EYInterstate:Regular',sans-serif",fontSize:12,color:"#c4c4cd",margin:0},children:f}),n.jsxs("div",{style:{marginLeft:"auto",display:"inline-flex",alignItems:"center",gap:6,background:m?"#ffe600":"#F6F6FA",color:m?"#1a1a24":"#c4c4cd",padding:"8px 16px",borderRadius:4,fontFamily:"'EYInterstate:Bold',sans-serif",fontWeight:700,fontSize:13,transition:"background 0.2s, color 0.2s"},children:[n.jsxs("svg",{width:"13",height:"13",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round","aria-hidden":"true",children:[n.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),n.jsx("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"})]}),m?"Click to Unlock":"Locked"]})]})]})})}function k2({onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s}){return n.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(_s,{onNavigate:i,icon:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}),n.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"})]}),activeIcon:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"}),n.jsx("path",{d:"M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"})]}),title:"Foundational Concepts of AI",description:"Understanding AI/ML fundamentals and their application in tax workflows.",estimatedTime:"~45 min"}),n.jsx(_s,{onNavigate:o,icon:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),activeIcon:n.jsx("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:n.jsx("path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"})}),title:"AI Tax Prompting",description:"Core principles of effective prompt engineering for tax professionals.",estimatedTime:"~30 min"}),n.jsx(_s,{onNavigate:s,icon:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#c4c4cd",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]}),activeIcon:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#1A1A24",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"3",y:"3",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"14",y:"3",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"14",y:"14",width:"7",height:"7",rx:"1"}),n.jsx("rect",{x:"3",y:"14",width:"7",height:"7",rx:"1"})]}),title:"M365 Copilot Dashboard",description:"Hands-on exploration of Microsoft 365 Copilot capabilities across tax use cases.",estimatedTime:"~60 min"})]})}function j2({onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s}){return n.jsx("div",{className:"relative shrink-0 w-full min-w-0","data-name":"Content Area",children:n.jsxs("div",{className:"content-stretch flex flex-col gap-[48px] items-stretch md:items-start px-6 md:px-[64px] py-12 md:py-[80px] relative size-full max-w-full",children:[n.jsx(w2,{}),n.jsx(k2,{onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s})]})})}function C2(){return n.jsx("div",{className:"h-px relative shrink-0 w-full","data-name":"Separator",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#c4c4cd] border-solid border-t inset-0 pointer-events-none"})})}function E2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start overflow-clip pb-10 md:pb-[60px] relative shrink-0 w-full","data-name":"Container",children:n.jsx(C2,{})})}function S2(){return n.jsx("div",{className:"absolute inset-[0_0.16%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[91.85px_100px]",style:{maskImage:`url("${f0}")`},"data-name":"Group",children:n.jsx("svg",{className:"absolute block inset-0 size-full",fill:"none",preserveAspectRatio:"none",viewBox:"0 0 91.8509 100",children:n.jsxs("g",{id:"Group",children:[n.jsx("path",{d:ha.p3955b500,fill:"var(--fill-0, #FFE600)",id:"Vector"}),n.jsx("path",{d:ha.pf788bc0,fill:"var(--fill-0, #2E2E38)",id:"Vector_2"})]})})})}function F2(){return n.jsx("div",{className:"absolute contents inset-[0_0.16%_0_0]","data-name":"Clip path group",children:n.jsx(S2,{})})}function z2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[7px] relative shrink-0 w-full","data-name":"EY logo",children:n.jsx("div",{className:"h-[100px] overflow-clip relative shrink-0 w-[92px]","data-name":"Component 6",children:n.jsx(F2,{})})})}function A2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[13px] px-[8px] relative shrink-0 w-[221.33px]","data-name":"Container",children:n.jsx(z2,{})})}function I2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[122.25px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[122.639px]",children:n.jsx("p",{className:"leading-[24px]",children:"Connect with us"})})]})})}function L2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[101.56px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[101.917px]",children:n.jsx("p",{className:"leading-[24px]",children:"Our locations"})})]})})}function N2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[48.92px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[49.27px]",children:n.jsx("p",{className:"leading-[24px]",children:"My EY"})})]})})}function T2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[67.06px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[67.363px]",children:n.jsx("p",{className:"leading-[24px]",children:"Site map"})})]})})}function R2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[6.59px] pl-[24px] pt-[7px] relative shrink-0","data-name":"Item:margin",children:n.jsxs("div",{className:"h-[20px] relative shrink-0 w-[133.05px]","data-name":"Component 1",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border-[#2e2e38] border-b border-solid inset-0 pointer-events-none"}),n.jsx("div",{className:"-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['EYInterstate:Bold',sans-serif] h-[24px] justify-center leading-[0] left-0 not-italic text-[#2e2e38] text-[16px] top-[9.5px] w-[133.353px]",children:n.jsx("p",{className:"leading-[24px]",children:"Legal and privacy"})})]})})}function M2(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-0 items-center justify-end relative shrink-0 w-full","data-name":"List",children:[n.jsx(I2,{}),n.jsx(L2,{}),n.jsx(N2,{}),n.jsx(T2,{}),n.jsx(R2,{})]})}function B2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start pb-8 md:pb-[56.41px] pt-[30px] px-0 md:px-[8px] relative shrink-0 w-full md:w-auto md:max-w-[640px] min-w-0","data-name":"Container",children:n.jsx(M2,{})})}function D2(){return n.jsxs("div",{className:"content-stretch flex flex-col md:flex-row md:items-center justify-between gap-6 relative shrink-0 w-full min-w-0",children:[n.jsx(A2,{}),n.jsx(B2,{})]})}function P2(){return n.jsx("div",{className:"content-stretch flex flex-1 flex-col items-start min-w-0 relative","data-name":"Container",children:n.jsx("p",{className:"m-0 font-['EYInterstate:Light',sans-serif] text-[#747480] text-[14px] leading-[20px] max-w-prose",children:"EY refers to the global organization, and may refer to one or more, of the member firms of Ernst & Young Global Limited, each of which is a separate legal entity. Ernst & Young Global Limited, a UK company limited by guarantee, does not provide services to clients."})})}function _2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${h0}")`},"data-name":"Background"})})}function H2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(_2,{})]})})}function O2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${g0}")`},"data-name":"Background"})})}function W2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(O2,{})]})})}function V2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${x0}")`},"data-name":"Background"})})}function $2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(V2,{})]})})}function G2(){return n.jsx("div",{className:"size-[44px] relative shrink-0","data-name":"Mask Group",children:n.jsx("div",{className:"absolute bg-[#2e2e38] inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[100%_100%]",style:{maskImage:`url("${m0}")`},"data-name":"Background"})})}function U2(){return n.jsx("div",{className:"content-stretch flex flex-col items-start justify-center relative shrink-0 size-[44px]","data-name":"Item",children:n.jsxs("div",{className:"content-stretch flex items-center justify-center relative rounded-[22px] size-full","data-name":"Component 7",children:[n.jsx("div",{className:"absolute bg-white left-[2px] rounded-[20px] size-[40px] top-[2px]","data-name":"Background+Border",children:n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#c4c4cd] border-solid inset-0 pointer-events-none rounded-[20px]"})}),n.jsx(G2,{})]})})}function Y2(){return n.jsxs("div",{className:"content-center flex flex-wrap gap-2.5 items-center justify-start sm:justify-end relative shrink-0 w-auto max-w-full","data-name":"List",children:[n.jsx(H2,{}),n.jsx(W2,{}),n.jsx($2,{}),n.jsx(U2,{})]})}function q2(){return n.jsxs("div",{className:"content-stretch flex items-start relative shrink-0 w-full",children:[n.jsx(P2,{}),n.jsx(Y2,{})]})}function Z2(){return n.jsx("div",{className:"relative shrink-0 w-full","data-name":"Container",children:n.jsx("div",{className:"content-stretch flex flex-col items-start pb-[5px] pt-[10px] px-[8px] relative size-full",children:n.jsx(q2,{})})})}function K2(){return n.jsxs("div",{className:"content-stretch flex flex-col gap-[36px] items-center relative shrink-0 w-full",children:[n.jsx(D2,{}),n.jsx(Z2,{})]})}function Q2(){return n.jsx("div",{className:"content-stretch flex flex-col items-center relative shrink-0 w-full",children:n.jsx(K2,{})})}const Eu=[{week:"Week 1-2",number:1,title:"Foundational Training Workshops",locked:!1},{week:"Week 3-4",number:2,title:"Brainstorming Tax Use Cases",locked:!0},{week:"Week 5-6",number:3,title:"Guidance in Prompts & AI Agents",locked:!0},{week:"Week 8",number:4,title:"Governance & AI Reinforcement",locked:!0}];function X2({onProceed:i}){const[o,s]=I.useState(1),[u,c]=I.useState("cards");return n.jsxs("div",{className:"bg-white content-stretch flex flex-col gap-[48px] items-start pb-[80px] relative shrink-0 w-full",children:[n.jsx(Hm,{}),n.jsxs("div",{className:"flex flex-wrap items-center gap-[8px] px-4 sm:px-8 md:px-[64px]",children:[n.jsx("p",{className:"font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] text-[#747480]",children:"View:"}),n.jsx("button",{onClick:()=>c("timeline"),style:{textDecorationColor:u==="timeline"?"#ffe600":"transparent",textDecorationThickness:"2px"},className:`font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] underline underline-offset-2 cursor-pointer border-none bg-transparent p-0 transition-colors ${u==="timeline"?"text-[#2e2e38] font-['EYInterstate:Bold',sans-serif]":"text-[#747480]"}`,children:"Option 1 — Timeline"}),n.jsx("span",{className:"font-['EYInterstate:Regular',sans-serif] text-[13px] text-[#c4c4cd] select-none",children:"·"}),n.jsx("button",{onClick:()=>c("cards"),style:{textDecorationColor:u==="cards"?"#ffe600":"transparent",textDecorationThickness:"2px"},className:`font-['EYInterstate:Regular',sans-serif] text-[13px] leading-[20px] underline underline-offset-2 cursor-pointer border-none bg-transparent p-0 transition-colors ${u==="cards"?"text-[#2e2e38] font-['EYInterstate:Bold',sans-serif]":"text-[#747480]"}`,children:"Option 2 — Cards"})]}),u==="timeline"&&n.jsx("div",{className:"relative shrink-0 w-full min-w-0",children:n.jsx("div",{className:"content-stretch flex flex-col px-4 sm:px-8 md:px-[64px] relative w-full min-w-0",children:Eu.map((f,g)=>{const x=o===f.number;return n.jsxs("div",{className:"content-stretch flex flex-col sm:flex-row gap-4 sm:gap-[32px] items-start relative shrink-0 w-full min-w-0",children:[n.jsxs("div",{className:"content-stretch flex gap-[16px] sm:gap-[24px] items-start relative self-stretch shrink-0 sm:w-[160px]",children:[n.jsx("div",{className:"content-stretch flex h-[48px] items-center justify-center relative shrink-0",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#2e2e38] text-[12px] uppercase whitespace-nowrap",children:f.week})}),n.jsxs("div",{className:"content-stretch flex flex-col h-full items-center relative shrink-0 w-[48px]",children:[n.jsx("div",{className:"content-stretch flex items-center relative shrink-0",children:n.jsx("div",{className:"bg-[#ffe600] content-stretch flex items-center justify-center relative rounded-[24px] shrink-0 size-[48px]",children:n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Bold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#1A1A24] text-[20px] whitespace-nowrap",children:f.number})})}),g<Eu.length-1&&n.jsx("div",{className:"bg-[#ffe600] flex-[1_0_0] min-h-px relative w-[4px] hidden sm:block",style:{minHeight:24}})]})]}),f.locked?n.jsxs("div",{className:"bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex-[1_0_0] min-w-0 relative rounded-[12px] mb-[16px] w-full",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#C4C4CD] border-solid inset-0 pointer-events-none rounded-[12px]"}),n.jsxs("div",{className:"content-stretch flex flex-wrap gap-[16px] items-center p-5 sm:p-[32px] relative w-full",children:[n.jsx("p",{className:"[word-break:break-word] flex-[1_0_0] font-['EYInterstate:Bold',sans-serif] leading-[28px] sm:leading-[30px] min-w-[12rem] not-italic relative text-[#2e2e38] text-[20px] sm:text-[24px]",children:f.title}),n.jsxs("div",{className:"bg-[#c4c4cd] content-stretch flex items-start px-[10px] py-[4px] relative rounded-[12px] shrink-0",children:[n.jsx("div",{"aria-hidden":!0,className:"absolute border border-[#ffe600] border-solid inset-0 pointer-events-none rounded-[12px]"}),n.jsx("p",{className:"[word-break:break-word] font-['EYInterstate:Regular',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#747480] text-[14px] whitespace-nowrap",children:"Locked"})]})]})]}):n.jsx("div",{className:"flex-[1_0_0] min-w-0 mb-[16px] w-full",style:{cursor:"pointer"},onClick:()=>s(x?0:f.number),children:n.jsx(zm,{expanded:x,onProceed:i,className:`bg-white content-stretch drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] flex p-5 sm:p-[32px] relative rounded-[12px] w-full ${x?"flex-col gap-[24px] items-start":"gap-[16px] items-center"}`})})]},f.number)})})}),u==="cards"&&n.jsx(Gm,{onProceed:i}),n.jsx(Vm,{})]})}function J2({onNavigateToPhase1:i}={}){const o=Nn();return n.jsxs("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full max-w-full min-w-0 overflow-x-hidden","data-name":"EY.ai Tax Labs - Phased Engagement",children:[n.jsx("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full sticky top-0 z-[300]","data-name":"Top Navigation",children:n.jsx(gi,{variant:"hub",activeSection:"tax-labs",onNavigate:o,skipLinkTarget:"#phased-content"})}),n.jsxs("div",{id:"phased-content",className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0",children:[n.jsx(Bm,{}),n.jsx(X2,{onProceed:i})]}),n.jsxs("div",{className:"bg-white content-stretch flex flex-col items-stretch justify-center px-4 sm:px-8 md:px-[64px] py-10 md:py-14 relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:[n.jsx(Ym,{}),n.jsx(y2,{})]})]})}function ev({onNavigateToFoundational:i,onNavigateToAiTaxPrompting:o,onNavigateToCopilotHub:s,onNavigate:u}={}){const c=Nn(),f=u??(g=>c(g));return n.jsxs("div",{className:"relative bg-white content-stretch flex flex-col items-stretch w-full max-w-full min-w-0 overflow-x-hidden","data-name":"EY.ai Tax Labs - Phase 1",children:[n.jsx(b2,{}),n.jsxs("div",{className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full sticky top-0 z-[300]","data-name":"Top Navigation",children:[n.jsx(gi,{variant:"learning",onNavigate:f,skipLinkTarget:"#phase1-content"}),n.jsx(Yo,{mode:"phase-overview",onNavigate:f,onBack:()=>f("/phased")})]}),n.jsx("div",{id:"phase1-content",className:"content-stretch flex flex-col items-stretch relative shrink-0 w-full min-w-0 overflow-x-hidden",children:n.jsx(j2,{onOpenFoundational:i,onOpenAiTaxPrompting:o,onOpenCopilotHub:s})}),n.jsx("div",{className:"bg-white relative shrink-0 w-full overflow-hidden","data-name":"Footer Final",children:n.jsx("div",{className:"flex flex-col items-stretch justify-center w-full",children:n.jsxs("div",{className:"content-stretch flex flex-col items-stretch justify-center px-4 sm:px-6 md:px-[64px] py-10 md:py-14 relative w-full",children:[n.jsx(E2,{}),n.jsx(Q2,{})]})})})]})}const Su=`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>EY India AI Tax Hub — Part 1: Foundational Concepts</title>

<style>
/* ===== RESET ===== */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

/* ===== ROOT VARIABLES ===== */
:root {
  /* EY Design System — LIGHT SCHEME (primary canvas) */
  --ey-yellow: #FFE600;
  --eyebrow-gold: #B89B00;       /* yellow-safe label on light surfaces */
  --white: #FFFFFF;
  --off-white: #F6F6FA;
  --gray-02: #C4C4CD;
  --gray-01: #747480;
  --ey-dark: #2E2E38;            /* Off Black — primary text / print */
  --confident-black: #1A1A24;    /* digital dark surfaces / primary btn */
  --muted-foreground: #747480;

  /* Page surfaces (light) */
  --ey-bg: var(--white);
  --ey-bg-alt: var(--off-white);
  --ey-bg-deep: var(--off-white);
  --card-bg: var(--white);
  --card-border: var(--gray-02);

  /* Text on light */
  --text-primary: var(--ey-dark);
  --text-secondary: var(--gray-01);
  --text-muted: var(--gray-01);
  --text-dim: var(--muted-foreground);

  /* Semantic (kept for quizzes / status — not brand spectrum) */
  --accent-green: #00C864;
  --accent-red: #FF4136;
  --accent-blue: #4696FF;
  --accent-orange: #FF7D1E;
  --accent-purple: #B400FF;

  /* Section surface cycle — Light → Neutral → Dark */
  --surface-light: var(--white);
  --surface-neutral: var(--off-white);
  --surface-dark: var(--confident-black);
  --surface-dark-border: #2E2E38;
  --surface-dark-muted: var(--gray-02);

  --radius: 0;
  --transition: background 0.15s, color 0.15s, border-color 0.15s, box-shadow 0.15s, transform 0.15s;
}

/* ===== BODY ===== */
body {
  font-family: 'EYInterstate:Regular', Arial, "Helvetica Neue", Helvetica, sans-serif;
  background: var(--white);
  color: var(--ey-dark);
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* ===== NAVBAR ===== */
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 50px;
  height: 60px;
  background: var(--ey-dark);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 16px rgba(0,0,0,0.5);
}
.nav-brand {
  display: flex;
  align-items: center;
  gap: 12px;
}
.nav-brand svg { height: 26px; width: auto; }
.nav-brand .divider { width: 1px; height: 24px; background: #747480; }
.nav-brand .brand-text { font-size: 15px; font-weight: 600; color: var(--ey-dark); letter-spacing: 0.3px; }
.nav-links { display: flex; align-items: center; }
.nav-links a {
  padding: 18px 14px;
  text-decoration: none;
  color: var(--text-secondary);
  font-size: 13px;
  font-weight: 500;
  border-bottom: 3px solid transparent;
  transition: var(--transition);
  letter-spacing: 0.2px;
}
.nav-links a:hover, .nav-links a.active {
  color: var(--ey-yellow);
  border-bottom-color: var(--ey-yellow);
}

/* ===== HERO — Figma structure + EY LIGHT scheme + Spectrum Shape ===== */
.hero {
  position: relative;
  text-align: left;
  min-height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--white);
  border-bottom: 1px solid var(--gray-02);
  padding: 48px 64px 56px;
}
/*
  EY Spectrum Shape crop (Property 1=image 4.png).
  Note: screen-blend cannot work on white (washes to white), so we place a
  right-side crop that fades into the light canvas — text stays readable.
*/
.hero-bg {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 38%;
  z-index: 0;
  pointer-events: none;
  background:
    #1A1A24 url('/ey-spectrum-hero.png') 70% center / cover no-repeat;
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, #000 22%, #000 100%);
  mask-image: linear-gradient(90deg, transparent 0%, #000 22%, #000 100%);
}
/* Extra soft veil so type column stays pure light-scheme */
.hero-overlay {
  display: block;
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: linear-gradient(
    90deg,
    #FFFFFF 0%,
    #FFFFFF 42%,
    rgba(255,255,255,0.55) 55%,
    rgba(255,255,255,0.12) 72%,
    transparent 100%
  );
}
.hero-inner {
  position: relative; z-index: 2;
  display: grid;
  grid-template-columns: minmax(280px, 640px) 1fr;
  gap: 64px;
  align-items: center;
  width: 100%;
  max-width: none;
  margin: 0;
}
.hero-eyebrow {
  font-size: 12px; font-weight: 700;
  color: var(--eyebrow-gold);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 26px;
}
.hero-title {
  font-size: 36px; font-weight: 700;
  font-family: 'EYInterstate:Bold', Arial, sans-serif;
  color: var(--ey-dark); line-height: 44px;
  letter-spacing: -0.5px;
  margin-bottom: 16px;
}
/* Yellow highlight words — accent only, not body copy */
.hero-title .hl { color: var(--ey-dark); box-shadow: inset 0 -0.28em 0 var(--ey-yellow); }
.hero-subtitle {
  font-size: 16px; font-weight: 400;
  color: var(--gray-01); line-height: 24px;
  max-width: 560px; margin-bottom: 14px;
}
.hero-meta {
  font-size: 14px; color: var(--muted-foreground);
  margin-bottom: 26px;
}
.hero-cta { display: flex; gap: 24px; align-items: center; flex-wrap: wrap; }
/* EY web buttons — square; primary = Confident Black (never yellow fill) */
.hero-cta button, .btn-primary, .btn-secondary {
  padding: 12px 28px; border: none; border-radius: 0;
  font-size: 14px; font-weight: 700; cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  letter-spacing: -0.02em; height: 48px;
  font-family: 'EYInterstate:Bold', Arial, sans-serif;
}
.btn-primary { background: var(--confident-black); color: var(--white); border: 1px solid var(--confident-black); }
.btn-primary:hover { background: var(--ey-dark); border-color: var(--ey-dark); }
.btn-secondary { background: transparent; color: var(--ey-dark); border: 1.5px solid var(--ey-dark) !important; }
.btn-secondary:hover { border-color: var(--confident-black) !important; background: var(--off-white); }
.hero-media {
  position: relative;
  width: 100%; max-width: 480px; margin-left: auto;
  aspect-ratio: 16/9;
  background: var(--confident-black);
  border: 1px solid var(--gray-02);
  overflow: hidden;
}
.hero-media video { width: 100%; height: 100%; object-fit: cover; display: block; }
.hero-play {
  position: absolute; inset: 0;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; background: rgba(26,26,36,0.35);
  transition: background 0.25s;
}
.hero-play:hover { background: rgba(26,26,36,0.2); }
.hero-play-btn {
  width: 64px; height: 64px;
  background: var(--ey-yellow);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
}
.hero-play-btn::after {
  content: '';
  width: 0; height: 0;
  border-style: solid;
  border-width: 10px 0 10px 18px;
  border-color: transparent transparent transparent var(--ey-dark);
  margin-left: 4px;
}
.hero-duration {
  position: absolute; bottom: 16px; right: 16px;
  background: rgba(0,0,0,0.5);
  color: #FFFFFF; font-size: 11px; font-weight: 700;
  padding: 4px 8px;
}
@media (max-width: 900px) {
  .hero { padding: 40px 24px 48px; }
  .hero-inner { grid-template-columns: 1fr; gap: 32px; }
  .hero-media { max-width: 100%; margin: 0; }
  .hero-title { font-size: 28px; line-height: 36px; }
  .hero-bg { background-position: center top; opacity: 0.55; }
  .hero-overlay {
    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.94) 0%,
      rgba(255,255,255,0.75) 45%,
      rgba(255,255,255,0.4) 100%
    );
  }
}

/* ===== SECTIONS ===== */
.section { padding: 90px 60px; text-align: center; background: var(--white); }
.section h2 { font-size: 34px; font-weight: 700; color: var(--ey-dark); margin-bottom: 12px; letter-spacing: -0.8px; }
.section-subtitle { color: var(--gray-01); font-size: 16px; margin-bottom: 50px; max-width: 650px; margin-left: auto; margin-right: auto; }

/* ===== SURFACE CYCLE (Light → Neutral → Dark) ===== */
.surface-light {
  background: var(--surface-light) !important;
  color: var(--ey-dark);
  border-bottom: 1px solid var(--gray-02);
}
.surface-neutral {
  background: var(--surface-neutral) !important;
  color: var(--ey-dark);
  border-bottom: 1px solid var(--gray-02);
}
.surface-dark {
  background: var(--surface-dark) !important;
  color: #FFFFFF;
  border-bottom: 1px solid var(--surface-dark-border);
}
.surface-dark h2,
.surface-dark .rise-title,
.surface-dark .wrong-title,
.surface-dark .paths-title,
.surface-dark .evo-title,
.surface-dark .gva-title,
.surface-dark .velocity-section h2 {
  color: #FFFFFF !important;
}
.surface-dark .section-subtitle,
.surface-dark .evo-sub,
.surface-dark .gva-sub,
.surface-dark .velocity-callout-body {
  color: var(--surface-dark-muted) !important;
}
.surface-dark .rise-label,
.surface-dark .paths-label,
.surface-dark .evo-label,
.surface-dark .gva-label,
.surface-dark .sim-label,
.surface-dark .velocity-eyebrow,
.surface-dark .badge {
  color: var(--ey-yellow) !important;
}
/* Keep semantic danger label red even on dark */
.surface-dark .wrong-label { color: #FF4136 !important; }

/* Cards keep dark ink even when section surface is dark */
.surface-dark .rise-card,
.surface-dark .wrong-card,
.surface-dark .paths-card,
.surface-dark .cheat-row,
.surface-dark .velocity-card {
  color: var(--ey-dark);
}
.badge {
  display: inline-block; background: transparent;
  padding: 0; border-radius: 0;
  color: var(--eyebrow-gold); font-size: 13px; font-weight: 700;
  letter-spacing: 0.5px; text-transform: uppercase; margin-bottom: 16px;
}

/* ===== VIDEO ===== */
.video-container {
  max-width: 800px; margin: 0 auto; position: relative;
  aspect-ratio: 16/9; background: var(--off-white); border-radius: 14px;
  border: 1px solid var(--gray-02); overflow: hidden;
  cursor: pointer; transition: var(--transition);
}
.video-container:hover { border-color: rgba(255,230,0,0.3); box-shadow: 0 12px 40px rgba(0,0,0,0.5); }
.play-btn {
  position: absolute; top: 50%; left: 50%; transform: translate(-50%,-50%);
  width: 72px; height: 72px; background: rgba(255,230,0,0.9);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  transition: var(--transition);
}
.video-container:hover .play-btn { transform: translate(-50%,-50%) scale(1.1); box-shadow: 0 0 30px rgba(255,230,0,0.4); }
.play-btn::after { content:''; border-style: solid; border-width: 12px 0 12px 22px; border-color: transparent transparent transparent var(--ey-dark); margin-left: 3px; }
.video-label { position: absolute; bottom: 18px; left: 50%; transform: translateX(-50%); color: var(--text-dim); font-size: 12px; }

/* ===== NEWS CARDS (legacy) ===== */
.news-grid { display: grid; gap: 0; max-width: 1300px; margin: 0 auto; }
.news-grid-4 { grid-template-columns: repeat(4,1fr); }
.news-grid-3 { grid-template-columns: repeat(3,1fr); }
.news-card {
  background: var(--white); border: 1px solid var(--gray-02);
  transition: var(--transition); text-align: left;
}
.news-card:hover { transform: translateY(-4px); border-color: rgba(255,230,0,0.25); box-shadow: 0 12px 30px rgba(0,0,0,0.4); }
.news-img {
  width: 100%; height: 180px; display: flex; align-items: flex-end; padding: 20px;
  background: linear-gradient(135deg, var(--off-white), var(--gray-02)); position: relative;
}
.news-highlight { font-size: 26px; font-weight: 800; color: var(--ey-yellow); line-height: 1.2; }
.news-highlight small { display: block; font-size: 12px; font-weight: 400; color: var(--text-muted); margin-bottom: 4px; }
.news-body { padding: 20px; }
.news-source { font-size: 11px; text-transform: uppercase; letter-spacing: 1.2px; color: var(--ey-yellow); font-weight: 700; margin-bottom: 8px; }
.news-headline { font-size: 14px; font-weight: 600; color: var(--ey-dark); line-height: 1.4; margin-bottom: 8px; }
.news-date { font-size: 12px; color: var(--text-dim); }

/* ===== MACRO INDICATORS (Figma 3187:3233) ===== */
.rise-section {
  background: var(--surface-dark);
  border-bottom: 1px solid var(--surface-dark-border);
  padding: 80px;
  text-align: left;
}
.rise-section .rise-label {
  font-size: 14px; font-weight: 700;
  color: var(--ey-yellow);
  text-transform: uppercase;
  margin: 0 0 8px;
  width: 100%;
}
.rise-section .rise-title {
  font-size: 32px; font-weight: 700;
  color: #FFFFFF;
  margin: 0 0 40px;
  letter-spacing: -0.5px;
  width: 100%;
}
.rise-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  max-width: none;
}
.rise-card {
  background: var(--white);
  border: 1px solid var(--gray-02);
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  transition: transform 0.15s, box-shadow 0.15s;
  display: flex; flex-direction: column;
}
.rise-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(46,46,56,0.12);
}
.rise-card-top {
  background: var(--ey-yellow);
  padding: 20px;
  color: var(--confident-black);
}
.rise-card-top .metric {
  font-size: 36px; font-weight: 700; line-height: 1.1;
  margin-bottom: 4px;
}
.rise-card-top .metric-label {
  font-size: 12px; font-weight: 700;
  text-transform: uppercase;
}
.rise-card-body { padding: 20px; }
.rise-card-meta {
  display: flex; justify-content: space-between; align-items: baseline;
  font-size: 11px; margin-bottom: 12px;
}
.rise-card-meta .source { font-weight: 700; color: var(--ey-dark); }
.rise-card-meta .date { color: var(--gray-01); font-weight: 400; }
.rise-card-body p {
  font-size: 14px; line-height: 1.4;
  color: var(--ey-dark); font-weight: 400;
  margin: 0;
}
@media (max-width: 1100px) {
  .rise-section { padding: 56px 24px; }
  .rise-grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 600px) {
  .rise-grid { grid-template-columns: 1fr; }
  .rise-section .rise-title { font-size: 24px; }
}

/* ===== REALITY CHECK / When AI Goes Wrong (Figma 3350:3932) ===== */
.wrong-section {
  background: var(--surface-light);
  border-bottom: 1px solid var(--gray-02);
  padding: 80px;
  text-align: left;
}
.wrong-section .wrong-label {
  font-size: 14px; font-weight: 700;
  color: #FF4136;
  text-transform: uppercase;
  margin: 0 0 8px;
  width: 100%;
}
.wrong-section .wrong-title {
  font-size: 32px; font-weight: 700;
  color: var(--confident-black);
  margin: 0 0 40px;
  letter-spacing: -0.5px;
  width: 100%;
}
.wrong-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;
  width: 100%;
  max-width: none;
}
.wrong-card {
  background: rgba(239, 68, 68, 0.02);
  border: 1px solid rgba(239, 68, 68, 0.2);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  text-align: left;
  transition: transform 0.15s, box-shadow 0.15s;
  display: flex;
  flex-direction: column;
}
.wrong-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 24px rgba(46, 46, 56, 0.12);
}
.wrong-card-top {
  position: relative;
  padding: 20px;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  color: #FFFFFF;
  overflow: hidden;
}
.wrong-card-top img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}
/* Figma: grey hard-light wash over photo so white metrics stay readable */
.wrong-card-top::after {
  content: '';
  position: absolute;
  inset: 0;
  background: #747480;
  mix-blend-mode: hard-light;
  z-index: 1;
  pointer-events: none;
}
.wrong-card:nth-child(2) .wrong-card-top::after { background: #747480; }
.wrong-card:nth-child(3) .wrong-card-top::after { background: #2E2E38; }
.wrong-card-top .metric,
.wrong-card-top .metric-label {
  position: relative;
  z-index: 2;
  color: #FFFFFF;
}
.wrong-card-top .metric {
  font-size: 36px; font-weight: 700; line-height: 1.1;
}
.wrong-card-top .metric-label {
  font-size: 12px; font-weight: 700;
  text-transform: uppercase;
}
.wrong-card-body { padding: 20px; background: transparent; }
.wrong-card-meta {
  display: flex; justify-content: space-between; align-items: baseline;
  font-size: 11px; margin-bottom: 12px;
}
.wrong-card-meta .source { font-weight: 700; color: var(--ey-dark); }
.wrong-card-meta .date { color: var(--muted-foreground); font-weight: 400; }
.wrong-card-body p {
  font-size: 14px; line-height: 1.4;
  color: var(--ey-dark); font-weight: 400;
  margin: 0;
}
@media (max-width: 900px) {
  .wrong-section { padding: 56px 24px; }
  .wrong-grid { grid-template-columns: 1fr; }
  .wrong-section .wrong-title { font-size: 24px; }
}


/* ===== AUTONOMY SPECTRUM (Figma 3187:3460) + modals ===== */
.gva-section {
  padding: 80px 40px !important;
  text-align: left;
}
.gva-section .gva-label {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--ey-yellow);
  margin: 0 0 8px;
  width: 100%;
}
.gva-section .gva-title {
  font-size: 32px;
  font-weight: 700;
  color: #FFFFFF !important;
  margin: 0 0 40px;
  width: 100%;
  letter-spacing: -0.5px;
  text-align: left;
}
.gva-spectrum {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: none;
  margin: 0 0 24px;
}
.gva-spectrum-card {
  background: var(--white);
  border: 1px solid #747480;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  cursor: pointer;
  padding: 0;
  font: inherit;
  color: inherit;
  width: 100%;
  transition: transform 0.15s, box-shadow 0.15s;
}
.gva-spectrum-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.22);
}
.gva-spectrum-card:focus-visible {
  outline: 2px solid var(--ey-yellow);
  outline-offset: 3px;
}
.gva-spectrum-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 20px;
}
.gva-spectrum-card[data-tone="blue"] .gva-spectrum-head { background: rgba(59,130,246,0.08); }
.gva-spectrum-card[data-tone="green"] .gva-spectrum-head { background: rgba(16,185,129,0.08); }
.gva-spectrum-card[data-tone="orange"] .gva-spectrum-head { background: rgba(249,115,22,0.08); }
.gva-spectrum-title {
  font-size: 18px;
  font-weight: 700;
  margin: 0;
  line-height: 1.2;
}
.gva-spectrum-card[data-tone="blue"] .gva-spectrum-title { color: #4696FF; }
.gva-spectrum-card[data-tone="green"] .gva-spectrum-title { color: #00C864; }
.gva-spectrum-card[data-tone="orange"] .gva-spectrum-title { color: #FF7D1E; }
.gva-badge {
  display: inline-flex;
  align-items: center;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: #FFFFFF;
}
.gva-spectrum-card[data-tone="blue"] .gva-badge { background: #4696FF; }
.gva-spectrum-card[data-tone="green"] .gva-badge { background: #00C864; }
.gva-spectrum-card[data-tone="orange"] .gva-badge { background: #FF7D1E; }
.gva-spectrum-body {
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  flex: 1;
}
.gva-spectrum-desc {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--gray-01);
}
.gva-flow {
  border: 1px solid rgba(46,46,56,0.12);
  border-radius: 6px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  background: var(--white);
}
.gva-spectrum-card[data-tone="blue"] .gva-flow { color: #4696FF; }
.gva-spectrum-card[data-tone="green"] .gva-flow { color: #00C864; }
.gva-spectrum-card[data-tone="orange"] .gva-flow { color: #FF7D1E; }
.gva-best-label {
  margin: 0;
  font-size: 11px;
  font-weight: 400;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--gray-01);
}
.gva-best-value {
  margin: 2px 0 0;
  font-size: 13px;
  font-weight: 700;
  color: var(--ey-dark);
}
.gva-card-cta {
  margin-top: auto;
  font-size: 13px;
  font-weight: 700;
  color: var(--ey-dark);
  text-decoration: underline;
  text-underline-offset: 3px;
}
.gva-banner {
  width: 100%;
  max-width: none;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 24px;
  border-radius: 12px;
  background: #1a1a24;
  border: 1px solid rgba(255,255,255,0.08);
}
.gva-banner-icon {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--ey-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.gva-banner-icon img { width: 20px; height: 20px; display: block; }
.gva-banner-title {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 700;
  color: #FFFFFF;
}
.gva-banner-body {
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  color: var(--gray-02);
  line-height: 1.45;
}

/* Modal */
.gva-modal[hidden] { display: none !important; }
.gva-modal {
  position: fixed;
  inset: 0;
  z-index: 10050;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
}
.gva-modal-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(26,26,36,0.72);
}
.gva-modal-dialog {
  position: relative;
  z-index: 1;
  width: min(720px, 100%);
  max-height: min(88vh, 900px);
  overflow: auto;
  background: var(--white);
  border: 1px solid var(--gray-02);
  border-radius: 12px;
  box-shadow: 0 24px 64px rgba(0,0,0,0.35);
}
.gva-modal-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  border-bottom: 1px solid var(--gray-02);
}
.gva-modal-top h3 {
  margin: 0 0 6px;
  font-size: 22px;
  font-weight: 700;
  color: var(--ey-dark);
}
.gva-modal-close {
  border: 1px solid var(--gray-02);
  background: var(--off-white);
  width: 36px;
  height: 36px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  line-height: 1;
  color: var(--ey-dark);
  flex-shrink: 0;
}
.gva-modal-close:focus-visible {
  outline: 2px solid var(--ey-yellow);
  outline-offset: 2px;
}
.gva-modal-content {
  padding: 20px 24px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.gva-modal-content .gva-block {
  border: 1px solid var(--gray-02);
  background: var(--off-white);
  padding: 12px 14px;
  border-radius: 8px;
}
.gva-modal-content .gva-block-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--gray-01);
  margin: 0 0 8px;
}
.gva-modal-content .gva-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.gva-modal-content .gva-list li {
  font-size: 13px;
  color: var(--ey-dark);
  line-height: 1.4;
  padding-left: 12px;
  position: relative;
}
.gva-modal-content .gva-list li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 7px;
  width: 6px;
  height: 6px;
  background: var(--ey-dark);
}
.gva-modal-content .gva-analogy {
  border-left: 3px solid var(--ey-yellow);
  background: rgba(255,230,0,0.06);
  padding: 10px 12px;
}
.gva-modal-content .gva-analogy p,
.gva-modal-content .gva-example p {
  margin: 0;
  font-size: 13px;
  color: var(--ey-dark);
  line-height: 1.5;
}
.gva-modal-content .gva-quote {
  font-style: italic;
  color: var(--gray-01);
  margin-bottom: 6px !important;
}
.gva-modal-thumb {
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center top;
  border-radius: 8px;
  display: block;
  background: #F6F6FA;
  border: 1px solid rgba(46, 46, 56, 0.08);
}
body.gva-modal-open { overflow: hidden; }
@media (max-width: 1000px) {
  .gva-spectrum { grid-template-columns: 1fr; }
  .gva-section { padding: 56px 24px !important; }
}

/* ===== STRATEGIC DIVIDE / Why Fundamentals (Figma 3198:38831) ===== */
.paths-section {
  background: var(--surface-light);
  border-bottom: 1px solid var(--gray-02);
  padding: 80px 64px 64px;
  text-align: center;
}
.paths-section .paths-label {
  font-size: 12px; font-weight: 700;
  color: #747480;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0 0 12px;
}
.paths-section .paths-title {
  font-size: 32px; font-weight: 700;
  color: #2e2e38;
  margin: 0;
  letter-spacing: -0.64px;
  line-height: 40px;
}
.paths-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  margin-bottom: 32px;
}
.paths-row {
  display: flex;
  align-items: stretch;
  gap: 24px;
  width: 100%;
  max-width: none;
  margin: 0;
  text-align: left;
}
.paths-card {
  flex: 1 1 0;
  min-width: 0;
  background: var(--white);
  border: 1px solid #F6F6FA;
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow:
    0 2px 4px rgba(35, 35, 47, 0.06),
    0 6px 12px rgba(35, 35, 47, 0.08);
}
.paths-card-head {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.paths-card.bad .paths-card-head { background: #F6F6FA; }
.paths-card.good .paths-card-head {
  background: #FFFFFF;
  border-top: 3px solid var(--ey-yellow);
}
.paths-card-title {
  font-size: 18px; font-weight: 700;
  color: #2e2e38;
  margin: 0;
  line-height: 1.3;
}
.paths-card-sub {
  font-size: 13px; font-weight: 400;
  color: #747480;
  line-height: 18px;
  margin: 0;
}
.paths-items { display: flex; flex-direction: column; }
.paths-item {
  display: flex;
  align-items: center;
  gap: 12px;
  min-height: 48px;
  padding: 16px;
  background: var(--white);
}
.paths-item:nth-child(even) { background: #F6F6FA; }
.paths-item img {
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  display: block;
}
.paths-item p {
  font-size: 14px; font-weight: 400;
  color: #2e2e38;
  line-height: 1.35;
  margin: 0;
}
.paths-outcome {
  padding: 16px;
  margin: 0;
  font-size: 13px; font-weight: 700;
  line-height: 1.35;
}
.paths-card.bad .paths-outcome {
  background: #F6F6FA;
  color: #FF4136;
}
.paths-card.good .paths-outcome {
  background: #F6F6FA;
  color: #00C864;
}
.paths-divider {
  width: 24px;
  flex-shrink: 0;
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: center;
  align-self: stretch;
}
.paths-divider::before {
  content: '';
  width: 2px;
  background: #C4C4CD;
  border-radius: 1px;
}
.paths-divider-diamond {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 8px;
  height: 8px;
  background: #C4C4CD;
  border-radius: 2px;
  transform: translate(-50%, -50%) rotate(45deg);
}
.paths-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin-top: 64px;
}
.paths-footer-msg {
  font-size: 18px; font-weight: 700;
  color: #2e2e38;
  margin: 0;
  text-align: center;
}
.paths-cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 36px;
  padding: 8px 14px;
  background: #2e2e38;
  color: var(--white);
  border-radius: 4px;
  font-size: 14px; font-weight: 400;
  text-decoration: none;
  line-height: 20px;
  transition: filter 0.15s;
}
.paths-cta:hover { filter: brightness(1.12); }
@media (max-width: 900px) {
  .paths-section { padding: 56px 24px; }
  .paths-section .paths-title { font-size: 24px; line-height: 1.25; }
  .paths-row { flex-direction: column; gap: 16px; }
  .paths-divider {
    width: 100%;
    height: 24px;
    align-items: center;
  }
  .paths-divider::before {
    width: 100%;
    height: 2px;
  }
  .paths-footer { margin-top: 40px; }
}


/* ===== EVOLUTION OF AI (Figma 3276:17185) ===== */
.evo-section {
  background: var(--surface-dark);
  border-top: 1px solid var(--surface-dark-border);
  padding: 96px 64px;
  text-align: left;
  color: #FFFFFF;
}
#evo-timeline-view {
  width: 100%;
  max-width: none;
  margin: 0;
}
.evo-label {
  font-size: 12px; font-weight: 700;
  color: var(--ey-yellow);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin: 0 0 12px;
  width: 100%;
}
.evo-title {
  font-size: 32px; font-weight: 700;
  color: #FFFFFF;
  line-height: 40px;
  margin: 0 0 12px;
  width: 100%;
}
.evo-sub {
  font-size: 18px; font-weight: 400;
  color: #C4C4CD;
  line-height: 28px;
  margin: 0 0 20px;
  width: 100%;
}
.evo-meta {
  font-size: 12px; font-weight: 600;
  color: #FFFFFF; margin: 0 0 16px;
}
/* Parent → child concentric nest (wraps the featured card) */
.evo-builds {
  display: flex; flex-wrap: wrap; align-items: center; gap: 8px;
  margin: 0 0 16px;
  font-size: 13px; line-height: 1.4; color: #C4C4CD;
}
.evo-builds strong { color: #FFFFFF; font-weight: 700; }
.evo-builds-chip {
  display: inline-flex; align-items: center; gap: 6px;
  border: 1px solid rgba(255,230,0,0.25);
  background: rgba(255,230,0,0.06);
  color: var(--ey-yellow);
  font-size: 12px; font-weight: 700;
  padding: 6px 12px; border-radius: 999px;
}
.evo-concentric {
  margin: 0 0 24px;
  width: 100%;
}
.evo-nest-layer {
  border: 1.5px solid #2E2E38;
  border-radius: 16px;
  padding: 10px;
  background: rgba(255,255,255,0.015);
  transition: border-color 0.2s, background 0.2s, padding 0.2s;
}
.evo-nest-layer > .evo-nest-layer {
  margin-top: 8px;
}
.evo-nest-layer .evo-nest-row {
  display: flex; align-items: center; gap: 10px;
  min-height: 28px;
  padding: 0 4px 2px;
}
.evo-nest-layer .evo-nest-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
}
.evo-nest-layer .evo-nest-label {
  font-size: 12px; font-weight: 700; color: #C4C4CD;
  letter-spacing: 0.02em;
}
.evo-nest-layer .evo-nest-role {
  margin-left: auto;
  font-size: 11px; font-weight: 600; color: #747480;
  text-transform: uppercase;
}
.evo-nest-layer.is-ancestor {
  border-color: #2E2E38;
}
.evo-nest-layer.is-current {
  border-color: var(--ey-yellow);
  background: rgba(255,230,0,0.04);
  padding: 0;
  overflow: hidden;
}
.evo-nest-layer.is-current > .evo-nest-row {
  padding: 10px 14px;
  background: rgba(255,230,0,0.1);
  border-bottom: 1px solid rgba(255,230,0,0.22);
}
.evo-nest-layer.is-current .evo-nest-label { color: #FFFFFF; }
.evo-nest-layer.is-current .evo-nest-role { color: var(--ey-yellow); }
.evo-featured {
  display: flex; gap: 24px;
  background: #1A1A24;
  border: none;
  border-radius: 0 0 14px 14px;
  overflow: hidden;
  min-height: 420px;
  margin-bottom: 0;
}
/* When featured is alone (pre-init), keep a frame */
.evo-concentric > .evo-featured {
  border: 1px solid #2E2E38;
  border-radius: 12px;
}
.evo-featured-img {
  width: 520px; max-width: 45%;
  flex-shrink: 0;
  position: relative;
  min-height: 420px;
}
.evo-featured-img img {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
}
.evo-featured-body {
  flex: 1; padding: 24px;
  display: flex; flex-direction: column; gap: 16px;
  min-width: 0;
}
.evo-year-display {
  font-family: Georgia, "Times New Roman", serif;
  font-size: 64px; line-height: 1;
  color: var(--ey-yellow);
  margin: 0;
}
.evo-title-row {
  display: flex; align-items: center; justify-content: space-between; gap: 12px;
}
.evo-era-name {
  font-size: 32px; font-weight: 700; color: #FFFFFF; margin: 0;
}
.evo-tag {
  border: 1px solid rgba(255,230,0,0.19);
  background: rgba(255,230,0,0.08);
  color: var(--ey-yellow);
  font-size: 12px; font-weight: 700;
  padding: 6px 14px; border-radius: 99px;
  white-space: nowrap;
}
.evo-desc {
  font-size: 14px; line-height: 20px; color: #C4C4CD; margin: 0;
}
.evo-analogy {
  background: rgba(255,230,0,0.06);
  border: 1px solid var(--ey-yellow);
  border-radius: 12px;
  padding: 16px;
}
.evo-analogy-h {
  display: flex; align-items: center; gap: 12px;
  margin-bottom: 10px;
}
.evo-analogy-h .bar {
  width: 4px; height: 24px; background: var(--ey-yellow); border-radius: 2px;
}
.evo-analogy-h span {
  font-size: 18px; font-weight: 700; color: #FFFFFF;
}
.evo-analogy p {
  font-size: 14px; line-height: 20px; color: #C4C4CD; margin: 0;
}
.evo-examples-label {
  font-size: 12px; font-weight: 700;
  color: #747480; text-transform: uppercase; margin: 0 0 10px;
}
.evo-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.evo-chip {
  border: 1px solid #2E2E38; background: #1A1A24;
  color: #C4C4CD; font-size: 12px; font-weight: 600;
  padding: 8px 12px; border-radius: 999px;
}
.evo-previews {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin-bottom: 40px;
}
.evo-preview {
  background: #1A1A24;
  border: 1px solid #2E2E38;
  border-radius: 12px;
  padding: 16px;
  display: flex; flex-direction: column; gap: 12px;
  cursor: pointer;
  transition: border-color 0.15s, transform 0.15s;
  text-align: left;
  font-family: inherit;
  color: inherit;
}
.evo-preview:hover { border-color: rgba(255,230,0,0.35); transform: translateY(-2px); }
.evo-preview-top {
  display: flex; align-items: center; justify-content: space-between;
}
.evo-preview-left { display: flex; align-items: center; gap: 12px; }
.evo-dot {
  width: 10px; height: 10px; border-radius: 50%;
  display: inline-block;
}
.evo-preview-year { font-size: 14px; font-weight: 700; color: #FFFFFF; }
.evo-preview-short { font-size: 12px; font-weight: 700; color: #C4C4CD; }
.evo-preview-title { font-size: 18px; font-weight: 700; color: #FFFFFF; margin: 0; }
.evo-preview-desc { font-size: 13px; line-height: 18px; color: #C4C4CD; margin: 0; }
.evo-preview-thumb {
  height: 88px; border-radius: 10px; overflow: hidden;
}
.evo-preview-thumb img {
  width: 100%; height: 100%; object-fit: cover; display: block;
}
.evo-cabinet {
  display: flex; align-items: center; justify-content: space-between;
  gap: 16px;
  background: rgba(255,230,0,0.06);
  border: 1px solid var(--ey-yellow);
  border-radius: 12px;
  padding: 24px;
}
.evo-cabinet p {
  font-size: 16px; font-weight: 500; color: #FFFFFF; margin: 0;
}
.evo-cabinet .btn-open {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--ey-yellow); color: #2e2e38;
  border: none; border-radius: 4px;
  height: 48px; padding: 0 20px;
  font-size: 18px; font-weight: 700; cursor: pointer;
  font-family: inherit;
}
.evo-cabinet .btn-open img { width: 20px; height: 20px; display: block; }
.evo-cabinet .btn-open:hover { filter: brightness(0.97); }

@media (max-width: 1100px) {
  .evo-section { padding: 64px 24px; }
  .evo-featured { flex-direction: column; }
  .evo-featured-img { width: 100%; max-width: none; min-height: 240px; }
  .evo-previews { grid-template-columns: 1fr 1fr; }
  .evo-year-display { font-size: 48px; }
  .evo-era-name { font-size: 24px; }
  .evo-cabinet { flex-direction: column; align-items: flex-start; }
}
@media (max-width: 640px) {
  .evo-previews { grid-template-columns: 1fr; }
}

/* ===== TIMELINE ===== */
.timeline { position: relative; max-width: 850px; margin: 0 auto; padding-left: 40px; }
.timeline::before {
  content:''; position: absolute; left: 18px; top: 0; bottom: 0;
  width: 3px; background: linear-gradient(180deg, #4696FF, #00C864, #FF7D1E, #FF4136, #B400FF);
  border-radius: 3px;
}
.timeline-item { position: relative; padding: 0 0 45px 40px; text-align: left; }
.timeline-item:last-child { padding-bottom: 0; }
.timeline-dot {
  position: absolute; left: -31px; top: 5px;
  width: 15px; height: 15px; border-radius: 50%;
  border: 3px solid; background: var(--off-white);
}
.timeline-year { font-size: 12px; font-weight: 700; letter-spacing: 1.5px; margin-bottom: 4px; }
.timeline-title { font-size: 20px; font-weight: 700; color: var(--ey-dark); margin-bottom: 5px; }
.timeline-desc { font-size: 13px; color: var(--text-muted); margin-bottom: 10px; }
.timeline-examples { display: flex; gap: 6px; flex-wrap: wrap; }
.timeline-examples span {
  background: rgba(255,255,255,0.04); border: 1px solid var(--gray-02);
  padding: 3px 10px; border-radius: 14px; font-size: 11px; color: var(--text-secondary);
}

/* ===== AI TIERS (GenAI vs Agent) ===== */
.ai-tier-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 22px; max-width: 1000px; margin: 50px auto 0; }
.ai-tier-card {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: var(--radius); padding: 32px 28px; text-align: left;
  transition: var(--transition); position: relative; overflow: hidden;
}
.ai-tier-card:hover { border-color: rgba(255,230,0,0.3); transform: translateY(-3px); box-shadow: 0 10px 28px rgba(0,0,0,0.4); }
.autonomy-badge {
  position: absolute; top: 14px; right: 14px; font-size: 10px; font-weight: 700;
  letter-spacing: 0.8px; padding: 3px 10px; border-radius: 10px; text-transform: uppercase;
}
.tier-flow { display: flex; align-items: center; gap: 5px; margin: 16px 0; flex-wrap: wrap; }
.tier-flow .node { background: #2E2E38; padding: 6px 12px; border-radius: 5px; font-size: 11px; color: var(--text-secondary); font-weight: 500; }
.tier-traits { margin-top: 14px; list-style: none; }
.tier-traits li { color: var(--text-muted); font-size: 12px; margin-bottom: 5px; padding-left: 14px; position: relative; }
.tier-traits li::before { content:'•'; position: absolute; left: 0; color: var(--ey-yellow); }
.best-for { margin-top: 14px; font-size: 12px; color: var(--text-dim); }
.best-for strong { color: var(--ey-yellow); }
.data-stream {
  height: 3px; background: rgba(255,230,0,0.08); border-radius: 3px;
  overflow: hidden; margin: 14px 0; position: relative;
}
.data-stream::after {
  content:''; position: absolute; top: 0; left: 0; width: 40%; height: 100%;
  background: linear-gradient(90deg, transparent, var(--ey-yellow), transparent);
  animation: dataFlow 2s ease-in-out infinite;
}

/* ===== CHEAT SHEET ===== */
.cheat-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; max-width: 1000px; margin: 0 auto; }
.cheat-card {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: var(--radius); padding: 22px; cursor: pointer;
  transition: var(--transition); text-align: left;
}
.cheat-card:hover { border-color: var(--ey-yellow); background: rgba(255,230,0,0.02); transform: translateY(-3px); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
.cheat-icon { font-size: 26px; margin-bottom: 10px; display: block; }
.cheat-title { font-size: 17px; font-weight: 700; color: var(--ey-dark); margin-bottom: 5px; }
.cheat-desc { font-size: 12px; color: var(--text-muted); line-height: 1.5; margin-bottom: 12px; }
.cheat-example {
  background: rgba(255,230,0,0.05); border: 1px solid rgba(255,230,0,0.12);
  border-radius: 8px; padding: 0 12px; max-height: 0; overflow: hidden;
  transition: max-height 0.4s ease, padding 0.4s ease, opacity 0.3s; opacity: 0;
}
.cheat-card:hover .cheat-example { max-height: 200px; padding: 12px; opacity: 1; }
.ex-label { font-size: 10px; font-weight: 700; color: var(--ey-yellow); letter-spacing: 1px; text-transform: uppercase; margin-bottom: 5px; }
.ex-text { font-size: 11px; color: var(--text-secondary); line-height: 1.5; font-style: italic; }

/* ===== QUIZ ===== */
.quiz-container { max-width: 780px; margin: 40px auto 0; text-align: left; }
.quiz-card {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: var(--radius); padding: 24px 28px; margin-bottom: 16px;
}
.quiz-q { display: flex; align-items: flex-start; gap: 14px; }
.quiz-num {
  background: var(--ey-yellow); color: var(--ey-dark);
  width: 28px; height: 28px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 13px; font-weight: 800; flex-shrink: 0;
}
.scenario { font-size: 15px; color: var(--ey-dark); font-weight: 600; margin-bottom: 3px; }
.app-name { font-size: 12px; color: var(--text-dim); margin-bottom: 12px; }
.quiz-options { display: flex; gap: 10px; }
.quiz-options button {
  padding: 7px 16px; border-radius: 5px; font-size: 12px; font-weight: 600;
  cursor: pointer; transition: var(--transition); border: none;
}
.btn-yes { background: rgba(0,200,100,0.12); color: var(--accent-green); border: 1px solid rgba(0,200,100,0.3) !important; }
.btn-yes:hover { background: rgba(0,200,100,0.25); }
.btn-no { background: rgba(255,65,54,0.12); color: var(--accent-red); border: 1px solid rgba(255,65,54,0.3) !important; }
.btn-no:hover { background: rgba(255,65,54,0.25); }
.quiz-reveal { margin-top: 14px; padding: 14px; border-radius: 8px; display: none; font-size: 12px; line-height: 1.6; }
.quiz-reveal.show { display: block; }
.quiz-reveal.correct { background: rgba(0,200,100,0.06); border: 1px solid rgba(0,200,100,0.15); color: var(--text-secondary); }
.quiz-reveal.incorrect { background: rgba(255,65,54,0.06); border: 1px solid rgba(255,65,54,0.15); color: var(--text-secondary); }
.quiz-reveal strong { color: var(--eyebrow-gold); }
.quiz-score { text-align: center; margin-top: 24px; padding: 18px; background: rgba(255,230,0,0.08); border: 1px solid rgba(255,230,0,0.35); border-radius: var(--radius); display: none; }
.quiz-score.show { display: block; }
.quiz-score .score-num { font-size: 38px; font-weight: 800; color: var(--confident-black); }
.quiz-score .score-label { color: var(--gray-01); font-size: 13px; margin-top: 4px; }

/* Quiz section — EY light surface pop (tokens) */
#quiz.quiz-section {
  background: var(--off-white) !important;
  border-top: 1px solid var(--gray-02);
  border-bottom: 1px solid var(--gray-02);
}
#quiz.quiz-section > h2 { color: var(--confident-black); }
#quiz.quiz-section > .section-subtitle { color: var(--gray-01); }
.quiz-ex-panel {
  max-width: 920px;
  margin: 0 auto 64px;
  background: var(--white);
  border: 1px solid var(--gray-02);
  border-left: 4px solid var(--ey-yellow);
  border-radius: 16px;
  padding: 36px 40px;
  text-align: left;
  box-shadow: 0 2px 4px rgba(35,35,47,0.06), 0 8px 20px rgba(35,35,47,0.06);
}
.quiz-ex-panel.is-spot { border-left-color: var(--accent-blue); margin-bottom: 0; }
.quiz-ex-icon {
  width: 38px; height: 38px; border-radius: 9px;
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
.quiz-ex-icon.is-yellow {
  background: rgba(255,230,0,0.16);
  border: 1px solid rgba(184,155,0,0.35);
}
.quiz-ex-icon.is-blue {
  background: rgba(70,150,255,0.12);
  border: 1px solid rgba(70,150,255,0.35);
}
.quiz-ex-eyebrow {
  font-size: 11px; font-weight: 700; letter-spacing: 2px;
  text-transform: uppercase; margin-bottom: 3px;
}
.quiz-ex-eyebrow.is-yellow { color: var(--eyebrow-gold); }
.quiz-ex-eyebrow.is-blue { color: var(--accent-blue); }
.quiz-desc {
  background: var(--white);
  border: 1px solid var(--gray-02);
  border-radius: 9px;
  padding: 11px 14px;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 10px;
  transition: border-color 0.15s, background 0.15s, transform 0.15s, box-shadow 0.15s;
  user-select: none;
}
.quiz-desc:hover:not([data-matched]) {
  border-color: rgba(184,155,0,0.45);
  background: rgba(255,230,0,0.06);
}
.quiz-desc.is-selected {
  border-color: var(--ey-yellow);
  background: rgba(255,230,0,0.14);
  box-shadow: inset 3px 0 0 var(--ey-yellow);
  transform: translateX(3px);
}
.quiz-desc.is-matched {
  border-color: rgba(0,200,100,0.45);
  background: rgba(0,200,100,0.08);
  cursor: default;
  transform: none;
  box-shadow: none;
}
.quiz-desc-letter {
  color: var(--eyebrow-gold);
  font-size: 12px; font-weight: 700;
  flex-shrink: 0; width: 16px; padding-top: 1px;
}
.quiz-desc-text {
  color: var(--ey-dark);
  font-size: 13px; line-height: 1.5; flex: 1;
}
.quiz-term {
  background: var(--off-white);
  border: 1px solid var(--gray-02);
  border-radius: 9px;
  padding: 11px 12px;
  cursor: pointer;
  text-align: center;
  color: var(--ey-dark);
  font-size: 13px; font-weight: 600;
  transition: border-color 0.15s, background 0.15s, color 0.15s;
  user-select: none;
  letter-spacing: 0.3px;
}
.quiz-term:hover:not([data-matched]) {
  border-color: var(--ey-yellow);
  background: rgba(255,230,0,0.12);
}
.quiz-term.is-matched {
  background: rgba(0,200,100,0.1);
  border-color: rgba(0,200,100,0.45);
  color: var(--accent-green);
  cursor: default;
}
.quiz-desc.is-wrong-flash {
  border-color: rgba(255,65,54,0.5) !important;
  background: rgba(255,65,54,0.08) !important;
  box-shadow: none;
  transform: none;
}
.quiz-term.is-wrong-flash {
  background: rgba(255,65,54,0.08);
  border-color: rgba(255,65,54,0.45);
}
.quiz-scorebar {
  display: flex; align-items: center; gap: 8px;
  background: var(--white);
  border: 1px solid var(--gray-02);
  border-left: 3px solid var(--ey-yellow);
  border-radius: 8px;
  padding: 10px 16px;
  margin-bottom: 20px;
}
.quiz-scorebar #spot-score-val {
  color: var(--confident-black);
  background: var(--ey-yellow);
  font-weight: 800;
  font-size: 13px;
  padding: 2px 10px;
  border-radius: 999px;
}
.quiz-spot-card {
  background: var(--white);
  border: 1px solid var(--gray-02);
  border-radius: 10px;
  padding: 16px 18px;
  transition: border-color 0.15s, box-shadow 0.15s;
}
.quiz-spot-card:hover { border-color: rgba(70,150,255,0.35); }
.quiz-spot-num {
  background: rgba(70,150,255,0.12);
  color: var(--accent-blue);
  font-size: 11px; font-weight: 700;
  border-radius: 5px; padding: 2px 7px;
  flex-shrink: 0; margin-top: 2px;
}
.spot-btn {
  background: var(--off-white);
  border: 1px solid var(--gray-02);
  border-radius: 6px;
  padding: 6px 12px;
  color: var(--ey-dark);
  font-size: 12px; font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  transition: border-color 0.15s, color 0.15s, background 0.15s;
  user-select: none;
  white-space: nowrap;
}
.spot-btn:hover:not([disabled]) {
  border-color: var(--eyebrow-gold);
  background: rgba(255,230,0,0.14);
  color: var(--confident-black);
}
.spot-btn[disabled] { cursor: default; }
.spot-btn.is-correct {
  background: rgba(0,200,100,0.14) !important;
  border-color: rgba(0,200,100,0.5) !important;
  color: var(--accent-green) !important;
}
.spot-btn.is-wrong {
  background: rgba(255,65,54,0.1) !important;
  border-color: rgba(255,65,54,0.45) !important;
  color: var(--accent-red) !important;
}
.spot-reveal {
  display: none;
  margin-top: 12px;
  padding: 10px 14px;
  background: rgba(0,200,100,0.08);
  border-left: 3px solid var(--accent-green);
  border-radius: 0 7px 7px 0;
}
.spot-reveal strong {
  color: var(--accent-green);
  font-size: 13px;
  display: block;
  margin-bottom: 3px;
}
.spot-reveal .why {
  color: var(--gray-01);
  font-size: 12px;
  line-height: 1.55;
  margin: 0;
}
.quiz-result {
  display: none;
  margin-top: 22px;
  border-radius: 12px;
  padding: 20px 24px;
  text-align: center;
}
.quiz-result.is-match {
  background: rgba(0,200,100,0.08);
  border: 1px solid rgba(0,200,100,0.3);
}
.quiz-result.is-spot {
  background: rgba(255,230,0,0.12);
  border: 1px solid rgba(184,155,0,0.35);
}
.quiz-result.is-visible {
  display: block;
  animation: quiz-result-pop 280ms ease-out;
}
.quiz-result-score {
  display: inline-block;
  background: var(--ey-yellow);
  color: var(--confident-black);
  font-size: 18px;
  font-weight: 800;
  padding: 4px 12px;
  border-radius: 6px;
  animation: quiz-score-pulse 400ms ease-out;
}
@keyframes quiz-result-pop {
  0% { opacity: 0; transform: translateY(8px) scale(0.97); }
  100% { opacity: 1; transform: translateY(0) scale(1); }
}
@keyframes quiz-score-pulse {
  0% { transform: scale(0.86); }
  55% { transform: scale(1.08); }
  100% { transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .quiz-result.is-visible,
  .quiz-result-score { animation: none; }
}
@media (max-width: 720px) {
  .quiz-ex-panel { padding: 24px 18px; }
  #quiz [style*="grid-template-columns:1fr 200px"],
  #quiz [style*="grid-template-columns:1fr 1fr"] {
    grid-template-columns: 1fr !important;
  }
}
.quiz-score .score-label { color: var(--text-muted); font-size: 13px; margin-top: 4px; }

/* ===== ADOPTION BARS ===== */
.adoption-bar { display: flex; align-items: center; margin-bottom: 14px; gap: 14px; }
.adoption-bar .bar-label { width: 120px; text-align: right; font-size: 13px; color: var(--text-secondary); font-weight: 600; flex-shrink: 0; }
.adoption-bar .bar-track { flex: 1; height: 34px; background: rgba(255,255,255,0.03); border-radius: 5px; position: relative; overflow: hidden; }
.adoption-bar .bar-fill {
  height: 100%; border-radius: 5px; display: flex; align-items: center;
  justify-content: flex-end; padding-right: 10px; font-size: 11px; font-weight: 700; color: var(--ey-dark);
  animation: growBar 1.5s ease-out forwards;
}
@keyframes growBar { from { width: 0; } }

/* ===== OPPORTUNITY CARDS ===== */
.opp-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 18px; max-width: 1000px; margin: 0 auto; }
.opp-card {
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: var(--radius); padding: 26px 22px; text-align: center;
  transition: var(--transition); position: relative; overflow: hidden;
}
.opp-card::before { content:''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--ey-yellow), var(--accent-green)); opacity: 0; transition: opacity 0.3s; }
.opp-card:hover::before { opacity: 1; }
.opp-card:hover { transform: translateY(-4px); border-color: rgba(255,230,0,0.2); box-shadow: 0 8px 20px rgba(0,0,0,0.3); }
.opp-icon { font-size: 30px; margin-bottom: 12px; display: block; }
.opp-title { font-size: 16px; font-weight: 700; color: var(--ey-dark); margin-bottom: 6px; }
.opp-desc { font-size: 12px; color: var(--text-muted); line-height: 1.5; }

/* ===== CTA FINAL ===== */
.cta-final {
  max-width: 720px;
  margin: 0 auto;
  padding: 56px 40px;
  background: rgba(255,230,0,0.06);
  border: 1px solid rgba(255,230,0,0.28);
  border-radius: 16px;
  animation: glowPulse 3s ease-in-out infinite;
  text-align: center;
}
#whats-next.surface-dark {
  color: #FFFFFF;
}
#whats-next .cta-final h2 {
  color: #FFFFFF !important;
  font-size: 30px;
  line-height: 1.35;
  margin: 0 0 18px;
}
#whats-next .cta-final .cta-lead {
  color: rgba(255,255,255,0.72);
  font-size: 16px;
  line-height: 1.7;
  margin: 0 0 28px;
}
#whats-next .cta-final .cta-meta {
  color: rgba(255,255,255,0.55);
  font-size: 12px;
  margin: 18px 0 0;
}
#whats-next .cta-final .badge {
  color: var(--ey-yellow) !important;
  margin-bottom: 18px;
}
#whats-next .cta-final .btn-primary {
  padding: 15px 34px;
  font-size: 15px;
  text-decoration: none;
  display: inline-block;
  background: var(--ey-yellow);
  color: var(--confident-black);
  border-radius: 4px;
  font-weight: 700;
}
#whats-next .cta-final .btn-primary:hover {
  filter: brightness(0.97);
}
@media (prefers-reduced-motion: reduce) {
  .cta-final { animation: none; }
}

/* ===== FOOTER ===== */
.footer { text-align: center; padding: 36px; color: var(--text-dim); background: var(--ey-dark); border-top: 1px solid rgba(255,255,255,0.05); font-size: 13px; }

/* ===== STEP CARDS (Key Terminology) ===== */
.step-card {
  max-width: 880px; margin: 0 auto 50px; text-align: left;
  background: var(--card-bg); border: 1px solid var(--card-border);
  border-radius: 14px; padding: 36px; position: relative;
}
.step-badge {
  position: absolute; top: -12px; left: 28px;
  background: var(--ey-yellow); color: var(--ey-dark);
  font-size: 11px; font-weight: 700; padding: 4px 14px;
  border-radius: 12px; letter-spacing: 0.5px;
}
.step-badge.warning { background: var(--accent-red); color: var(--ey-dark); }
.step-card h3 { color: var(--ey-yellow); font-size: 20px; margin-bottom: 8px; }
.step-card.danger { background: rgba(220,50,50,0.03); border-color: rgba(220,50,50,0.15); }
.step-card.danger h3 { color: var(--accent-red); }

/* ===== SUMMARY BOXES ===== */
.summary-box {
  max-width: 880px; margin: 28px auto; background: var(--card-bg);
  border: 1px solid var(--card-border); border-radius: var(--radius); padding: 28px;
  text-align: center;
}
.summary-box h4 { color: var(--ey-dark); font-size: 15px; margin-bottom: 16px; letter-spacing: 1px; }
.summary-row { display: grid; gap: 14px; text-align: center; }
.summary-row-4 { grid-template-columns: repeat(4,1fr); }

/* ===== ANIMATIONS ===== */
@keyframes pulseFlow { 0%,100%{opacity:0.4;transform:translateX(0)} 50%{opacity:1;transform:translateX(3px)} }
@keyframes bounceNode { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
@keyframes dataFlow { 0%{transform:translateX(-100%);opacity:0} 50%{opacity:1} 100%{transform:translateX(100%);opacity:0} }
@keyframes glowPulse { 0%,100%{box-shadow:0 0 15px rgba(255,230,0,0.08)} 50%{box-shadow:0 0 35px rgba(255,230,0,0.25)} }
.flow-arrow { animation: pulseFlow 1.5s ease-in-out infinite; display: inline-block; }
.bounce-node { animation: bounceNode 2s ease-in-out infinite; }

/* ===== CHAT MOCKUP ===== */
.chat-mockup {
  max-width: 880px; margin: 0 auto 60px;
  background: var(--white); border: 1px solid var(--gray-02);
  border-radius: 16px; overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,0.5); position: relative;
}
.chat-header {
  display: flex; align-items: center; gap: 10px;
  padding: 14px 20px; background: var(--white); border-bottom: 1px solid rgba(255,255,255,0.05);
}
.chat-dots { display: flex; gap: 6px; }
.chat-dots span { width: 10px; height: 10px; border-radius: 50%; }
.chat-dots span:nth-child(1) { background: #FF4136; }
.chat-dots span:nth-child(2) { background: #FFE600; }
.chat-dots span:nth-child(3) { background: #00C864; }
.chat-model { margin-left: auto; font-size: 12px; color: var(--text-dim); background: rgba(255,255,255,0.04); padding: 4px 12px; border-radius: 14px; }
.chat-body { padding: 30px 28px 20px; min-height: 220px; }
.chat-message { display: flex; gap: 14px; margin-bottom: 22px; align-items: flex-start; animation: fadeInMsg 0.6s ease-out forwards; opacity: 0; }
.chat-message:nth-child(1) { animation-delay: 0.3s; }
.chat-message:nth-child(2) { animation-delay: 1.2s; }
@keyframes fadeInMsg { to { opacity: 1; } }
.chat-avatar { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 14px; flex-shrink: 0; font-weight: 700; }
.chat-avatar.user { background: rgba(255,230,0,0.15); color: var(--ey-yellow); }
.chat-avatar.ai { background: rgba(74,144,217,0.15); color: var(--accent-blue); }
.chat-bubble { padding: 14px 18px; border-radius: 12px; font-size: 14px; line-height: 1.6; max-width: 650px; }
.chat-bubble.user-bubble { background: rgba(255,230,0,0.05); border: 1px solid rgba(255,230,0,0.12); color: var(--text-primary); }
.chat-bubble.ai-bubble { background: rgba(74,144,217,0.04); border: 1px solid rgba(74,144,217,0.1); color: var(--text-secondary); }
.chat-input-area { display: flex; align-items: center; gap: 12px; padding: 16px 20px; background: #1A1A24; border-top: 1px solid rgba(255,255,255,0.05); position: relative; }
.chat-input { flex: 1; background: #1A1A24; border: 1px solid var(--gray-02); border-radius: 10px; padding: 14px 18px; color: var(--text-secondary); font-size: 14px; outline: none; }
.chat-input::placeholder { color: var(--text-dim); }
.chat-send { width: 42px; height: 42px; border-radius: 8px; background: var(--ey-yellow); border: none; cursor: pointer; display: flex; align-items: center; justify-content: center; }
.chat-send svg { width: 18px; height: 18px; fill: var(--ey-dark); }
.input-annotation { position: absolute; top: -55px; left: 50%; transform: translateX(-50%); text-align: center; animation: bounceAnnotation 2s ease-in-out infinite; }
.input-annotation .arrow { font-size: 24px; color: var(--ey-yellow); display: block; line-height: 1; }
.input-annotation .label { background: var(--ey-yellow); color: var(--ey-dark); font-size: 11px; font-weight: 700; padding: 5px 14px; border-radius: 14px; letter-spacing: 0.5px; white-space: nowrap; }
@keyframes bounceAnnotation { 0%,100%{transform:translateX(-50%) translateY(0)} 50%{transform:translateX(-50%) translateY(-6px)} }

/* ===== PIPELINE STAGE EXPAND ===== */
.pipeline-stage .stage-detail { max-height: 0; overflow: hidden; transition: max-height 0.5s ease, padding 0.3s, margin 0.3s; }
.pipeline-stage.expanded .stage-detail { max-height: 200px; }
.pipeline-stage > div:first-child { pointer-events: none; }

/* ===== JOURNEY MAP ===== */
.journey-map {
  display: flex; align-items: center; justify-content: center;
  gap: 0; max-width: 900px; margin: 0 auto 60px; position: relative;
}
.journey-stop {
  display: flex; flex-direction: column; align-items: center; gap: 8px; cursor: pointer;
  transition: all 0.3s ease; flex: 0 0 auto; position: relative; z-index: 2;
}
.journey-stop:hover .journey-node { transform: scale(1.15); }
.journey-node {
  width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center;
  justify-content: center; font-size: 24px; font-weight: 800; transition: all 0.4s ease;
  border: 3px solid; position: relative;
}
.journey-node::after {
  content: ''; position: absolute; inset: -6px; border-radius: 50%;
  border: 2px dashed; opacity: 0.3; animation: rotateBorder 8s linear infinite;
}
@keyframes rotateBorder { to { transform: rotate(360deg); } }
.journey-label { font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; text-align: center; max-width: 100px; }
.journey-connector {
  flex: 1; height: 4px; border-radius: 4px; position: relative; overflow: hidden; min-width: 60px;
}
.journey-connector::after {
  content: ''; position: absolute; top: 0; left: 0; width: 30px; height: 100%;
  background: linear-gradient(90deg, transparent, #ffe600, transparent);
  animation: journeyPulse 2s ease-in-out infinite;
}
@keyframes journeyPulse { 0%{left:-30px;opacity:0} 50%{opacity:1} 100%{left:100%;opacity:0} }

.analogy-card {
  background: linear-gradient(135deg, rgba(255,230,0,0.06), rgba(255,230,0,0.02));
  border: 1px solid rgba(255,230,0,0.2); border-radius: 16px; padding: 28px;
  margin-bottom: 28px; position: relative; overflow: hidden;
}
.analogy-card::before {
  content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%;
  background: var(--ey-yellow); border-radius: 4px 0 0 4px;
}
.analogy-tag {
  display: inline-block; background: rgba(255,230,0,0.12); color: var(--ey-yellow);
  font-size: 10px; font-weight: 700; letter-spacing: 1.2px; text-transform: uppercase;
  padding: 4px 12px; border-radius: 20px; margin-bottom: 12px;
}
.step-intro-banner {
  background: var(--off-white);
  border-radius: 16px; padding: 32px; margin-bottom: 32px;
  display: flex; align-items: center; gap: 24px;
  border: 1px solid var(--gray-02);
}
.step-intro-emoji { font-size: 48px; flex-shrink: 0; }
.step-intro-text h3 { color: var(--ey-dark); font-size: 22px; font-weight: 700; margin-bottom: 6px; }
.step-intro-text p { color: var(--text-muted); font-size: 14px; line-height: 1.7; }
.step-intro-text .highlight { color: var(--ey-yellow); font-weight: 600; }

.versus-card {
  background: var(--white); border: 1px solid var(--gray-02); border-radius: 0; padding: 24px; text-align: center;
  transition: all 0.3s; border: 2px solid transparent;
}
.versus-card:hover { transform: translateY(-4px); }
.versus-card .emoji { font-size: 36px; margin-bottom: 10px; display: block; }
.versus-card .label { font-size: 13px; font-weight: 700; margin-bottom: 8px; }
.versus-card .example { font-size: 14px; font-style: italic; line-height: 1.6; padding: 12px; border-radius: 8px; margin-bottom: 8px; }
.versus-card .result { font-size: 11px; line-height: 1.5; }

@keyframes floatUp { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
.float-anim { animation: floatUp 3s ease-in-out infinite; }
</style>

<style>
@font-face{font-family:'EYInterstate:Light';src:local('EYInterstate Light'),local('EYInterstate-Light'),url('/fonts/EYInterstate-Light.woff2') format('woff2');font-weight:300;font-style:normal;font-display:swap}
@font-face{font-family:'EYInterstate:Regular';src:local('EYInterstate Regular'),local('EYInterstate-Regular'),local('EYInterstate'),url('/fonts/EYInterstate-Regular.woff2') format('woff2');font-weight:400;font-style:normal;font-display:swap}
@font-face{font-family:'EYInterstate:Bold';src:local('EYInterstate Bold'),local('EYInterstate-Bold'),url('/fonts/EYInterstate-Bold.woff2') format('woff2');font-weight:700;font-style:normal;font-display:swap}
</style>
</head>

<body>
<!-- Internal sticky nav removed — site chrome is SiteHeader + ModuleHeader outside this iframe. -->

<!-- ======== HERO — Figma 3206:10348, EY light + Spectrum Shape asset ======== -->
<section class="hero" id="home" aria-label="Module 1 hero">
  <!-- Abstract Spectrum Shape (from Property 1=image 4.png) -->
  <div class="hero-bg" aria-hidden="true"></div>
  <div class="hero-overlay" aria-hidden="true"></div>
  <div class="hero-inner">
    <div>
      <p class="hero-eyebrow">Module 1</p>
      <h1 class="hero-title">
        Foundational Concepts of <span class="hl">AI</span> and its Application in <span class="hl">Tax</span>
      </h1>
      <p class="hero-subtitle">
        Learn how AI is reshaping tax compliance, automation, and strategic advisory — and how to apply it in your practice.
      </p>
      <p class="hero-meta">~45 min · Video + Reading + Quiz · Foundational · Reviewed Q1 2026</p>
      <div class="hero-cta">
        <button type="button" class="btn-primary" onclick="document.getElementById('rise-of-ai').scrollIntoView({behavior:'smooth'})">Begin Module</button>
        <button type="button" class="btn-secondary" onclick="document.getElementById('cheatsheet') ? document.getElementById('cheatsheet').scrollIntoView({behavior:'smooth'}) : null">Download Syllabus</button>
      </div>
    </div>
    <div class="hero-media">
      <video
        id="hero-video"
        src="Life before and after AI 1_4.mp4"
        preload="metadata"
        playsinline
      ></video>
      <div id="hero-video-overlay" class="hero-play" onclick="playHeroVideo()" role="button" tabindex="0" aria-label="Play intro video" onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();playHeroVideo();}">
        <div class="hero-play-btn" aria-hidden="true"></div>
        <span class="hero-duration">2:45</span>
      </div>
    </div>
  </div>
</section>

<script>
function playHeroVideo() {
  var v = document.getElementById('hero-video');
  var overlay = document.getElementById('hero-video-overlay');
  if (!v || !overlay) return;
  overlay.style.display = 'none';
  v.controls = true;
  v.play();
}
document.getElementById('hero-video').addEventListener('ended', function() {
  this.controls = false;
  document.getElementById('hero-video-overlay').style.display = 'flex';
});
<\/script>

<!-- ======== WHY ACT NOW ======== -->
<!-- ======== VELOCITY STATISTICS — Figma 3198:39293 ======== -->
<section class="section velocity-section surface-neutral" id="act-now">
  <div class="velocity-header">
    <p class="velocity-eyebrow">Velocity Statistics</p>
    <h2>AI Adoption Speed: Time to Reach 100 Million Users</h2>
  </div>

  <div class="velocity-card">
    <div class="velocity-row">
      <span class="velocity-label">Telephone</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:100%;"></div></div>
        <span class="velocity-value">75 Years</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">Mobile</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:70%;"></div></div>
        <span class="velocity-value">16 Years</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">Internet</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:50%;"></div></div>
        <span class="velocity-value">7 Years</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">iPhone</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:35%;"></div></div>
        <span class="velocity-value">4 Years</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">Instagram</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--muted" style="width:25%;"></div></div>
        <span class="velocity-value">2.5 Years</span>
      </div>
    </div>
    <div class="velocity-row">
      <span class="velocity-label">ChatGPT</span>
      <div class="velocity-track">
        <div class="velocity-bar-wrap"><div class="velocity-bar velocity-bar--accent" style="width:12%;"></div></div>
        <span class="velocity-value">2 Months</span>
      </div>
    </div>

    <div class="velocity-divider" aria-hidden="true"></div>

    <div class="velocity-callout">
      <p class="velocity-callout-title">100 Million Users in 2 Months</p>
      <p class="velocity-callout-body">Generative AI is not an incremental technical shift. It is the fastest-adopted business and consumer tool in human history.</p>
    </div>
  </div>
</section>

<style>
.velocity-section {
  background: var(--surface-neutral);
  padding: 96px 64px;
  text-align: left;
  border-bottom: 1px solid var(--gray-02);
}
.velocity-header {
  width: 100%;
  max-width: none;
  margin: 0 0 48px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
.velocity-eyebrow {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--ey-dark);
  margin: 0;
}
.velocity-section h2 {
  font-size: 32px;
  font-weight: 700;
  letter-spacing: -0.64px;
  line-height: 40px;
  color: var(--ey-dark);
  margin: 0;
  text-align: left;
}
.velocity-card {
  width: 100%;
  max-width: none;
  margin: 0;
  background: var(--white);
  border: 1px solid rgba(196, 196, 205, 0.35);
  border-radius: 16px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;
}
.velocity-row {
  display: flex;
  align-items: center;
  gap: 24px;
  width: 100%;
}
.velocity-label {
  width: 120px;
  flex-shrink: 0;
  font-size: 15px;
  font-weight: 700;
  color: var(--ey-dark);
  line-height: 1.3;
}
.velocity-track {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 16px;
}
.velocity-bar-wrap {
  flex: 1;
  min-width: 0;
}
.velocity-bar {
  height: 24px;
  border-radius: 4px;
}
.velocity-bar--muted { background: var(--gray-01); }
.velocity-bar--accent { background: var(--ey-yellow); }
.velocity-value {
  font-size: 14px;
  font-weight: 700;
  color: var(--ey-dark);
  white-space: nowrap;
  flex-shrink: 0;
}
.velocity-divider {
  width: 100%;
  height: 1px;
  background: var(--card-border);
  margin: 4px 0;
}
.velocity-callout {
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: flex-start;
}
.velocity-callout-title {
  font-size: 32px;
  font-weight: 700;
  color: var(--ey-dark);
  margin: 0;
  line-height: 1.2;
}
.velocity-callout-body {
  font-size: 14px;
  font-weight: 400;
  color: var(--ey-dark);
  line-height: 22px;
  margin: 0;
  max-width: 720px;
}
@media (max-width: 768px) {
  .velocity-section { padding: 72px 24px; }
  .velocity-card { padding: 24px 20px; gap: 18px; }
  .velocity-section h2 { font-size: 24px; line-height: 32px; }
  .velocity-row { gap: 12px; }
  .velocity-label { width: 84px; font-size: 13px; }
  .velocity-track { gap: 10px; }
  .velocity-bar { height: 18px; }
  .velocity-value { font-size: 12px; }
  .velocity-callout-title { font-size: 22px; }
}
</style>


<!-- ======== RISE OF AI — SUCCESS ======== -->
<style>
/* ── TICKER ── */
.news-ticker-wrap {
  background: #ffe600; overflow: hidden; white-space: nowrap;
  padding: 9px 0; position: relative;
}
.news-ticker-inner {
  display: inline-block;
  animation: tickerScroll 38s linear infinite;
  font-size: 12px; font-weight: 700; color: #1A1A24;
  letter-spacing: 0.4px;
}
.news-ticker-inner span { margin: 0 48px; }
.news-ticker-inner span::before { content: '●  '; color: #2e2e38; opacity: 0.5; }
@keyframes tickerScroll { 0% { transform: translateX(100vw); } 100% { transform: translateX(-100%); } }

/* ── LIVE DOT ── */
.live-dot {
  display: inline-block; width: 8px; height: 8px; border-radius: 50%;
  background: #FF4136; margin-right: 6px;
  animation: livePulse 1.2s ease-in-out infinite;
}
@keyframes livePulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.4;transform:scale(1.4)} }

/* ── STAT COUNTERS ── */
.rise-stats {
  display: grid; grid-template-columns: repeat(5, 1fr); gap: 0;
  max-width: 1300px; margin: 0 auto 56px; border: 1px solid var(--gray-02);
  border-radius: 14px; overflow: hidden;
}
.rise-stat {
  padding: 28px 20px; text-align: center; position: relative;
  background: rgba(255,255,255,0.02);
  border-right: 1px solid rgba(255,255,255,0.06);
  transition: background 0.3s;
}
.rise-stat:last-child { border-right: none; }
.rise-stat:hover { background: rgba(255,230,0,0.04); }
.rise-stat-num {
  font-size: 34px; font-weight: 800; color: #ffe600; line-height: 1;
  margin-bottom: 6px; display: block; letter-spacing: -1px;
}
.rise-stat-label { font-size: 11px; color: var(--text-muted); line-height: 1.4; text-transform: uppercase; letter-spacing: 0.6px; }
.rise-stat-src { font-size: 10px; color: var(--text-dim); margin-top: 6px; }
.rise-stat-bar {
  position: absolute; bottom: 0; left: 0; height: 3px; background: var(--ey-yellow);
  border-radius: 0 2px 0 0; width: 0;
  transition: width 1.6s ease-out;
}
.rise-stat.in-view .rise-stat-bar { width: 100%; }

/* ── SECTION HEADER ── */
.rise-header {
  position: relative; text-align: center; padding: 72px 40px 40px;
  overflow: hidden;
}
.rise-header::before {
  content: ''; position: absolute; top: -100px; left: 50%; transform: translateX(-50%);
  width: 600px; height: 600px;
  background: radial-gradient(circle, rgba(255,230,0,0.07) 0%, transparent 65%);
  pointer-events: none;
}
.rise-headline {
  font-size: 42px; font-weight: 800; color: var(--ey-dark); line-height: 1.15;
  margin-bottom: 14px; letter-spacing: -0.5px;
}
.rise-headline em { color: var(--ey-yellow); font-style: normal; }

/* ── CARDS WRAPPER ── */
.rise-cards-section { padding: 0 40px 72px; }

/* ── ENHANCED NEWS CARD ── */
.news-card-v2 {
  background: var(--white); border: 1px solid var(--gray-02);
  border-radius: 12px; overflow: hidden;
  transition: all 0.35s ease; cursor: pointer;
  position: relative;
}
.news-card-v2::after {
  content: ''; position: absolute; inset: 0; border-radius: 12px;
  box-shadow: 0 0 0 0 rgba(255,230,0,0);
  transition: box-shadow 0.35s;
  pointer-events: none;
}
.news-card-v2:hover { transform: translateY(-6px); border-color: rgba(255,230,0,0.35); }
.news-card-v2:hover::after { box-shadow: 0 12px 40px rgba(255,230,0,0.12); }
.news-card-v2 .news-img-v2 { width: 100%; height: 200px; overflow: hidden; position: relative; }
.news-card-v2 .news-img-v2 img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; transition: transform 0.4s ease; }
.news-card-v2:hover .news-img-v2 img { transform: scale(1.05); }
.news-card-v2 .news-img-v2::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 60px;
  background: linear-gradient(0deg, var(--white), transparent);
}
.news-card-v2 .news-body-v2 { padding: 18px 20px 20px; }
.news-card-v2 .news-source-v2 {
  font-size: 10px; text-transform: uppercase; letter-spacing: 1.4px;
  color: var(--ey-yellow); font-weight: 700; margin-bottom: 8px;
  display: flex; align-items: center; gap: 6px;
}
.news-card-v2 .news-source-v2::before {
  content: ''; display: inline-block; width: 16px; height: 2px;
  background: var(--ey-yellow); border-radius: 2px;
}
.news-card-v2 .news-headline-v2 {
  font-size: 13.5px; font-weight: 600; color: var(--ey-dark);
  line-height: 1.5; margin-bottom: 12px;
}
.news-card-v2 .news-footer-v2 {
  display: flex; align-items: center; justify-content: space-between;
}
.news-card-v2 .news-date-v2 { font-size: 11px; color: var(--text-dim); }
.news-card-v2 .news-tag-v2 {
  font-size: 10px; font-weight: 700; padding: 3px 9px; border-radius: 10px;
  background: rgba(255,230,0,0.1); color: var(--ey-yellow);
  text-transform: uppercase; letter-spacing: 0.5px;
}
</style>

<!-- ======== RISE OF AI — SUCCESS ======== -->
<style>
/* ── LIGHTBOX ── */
#clip-lightbox {
  display: none; position: fixed; inset: 0; z-index: 9000;
  background: rgba(0,0,0,0.88); backdrop-filter: blur(10px);
  align-items: center; justify-content: center;
  animation: lbFadeIn 0.25s ease;
}
#clip-lightbox.open { display: flex; }
@keyframes lbFadeIn { from { opacity:0; } to { opacity:1; } }
#clip-lightbox img {
  max-width: 88vw; max-height: 84vh;
  border-radius: 12px; box-shadow: 0 32px 80px rgba(0,0,0,0.7);
  animation: lbZoomIn 0.3s cubic-bezier(0.34,1.56,0.64,1);
}
@keyframes lbZoomIn { from { transform: scale(0.82); opacity:0; } to { transform: scale(1); opacity:1; } }
#clip-lightbox-close {
  position: fixed; top: 24px; right: 28px;
  width: 44px; height: 44px; border-radius: 50%;
  background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2);
  color: var(--ey-dark); font-size: 22px; line-height: 1;
  cursor: pointer; display: flex; align-items: center; justify-content: center;
  transition: background 0.2s, transform 0.2s;
  z-index: 9001;
}
#clip-lightbox-close:hover { background: rgba(255,230,0,0.2); border-color: #ffe600; color: #ffe600; transform: rotate(90deg); }
#clip-lightbox-caption {
  position: fixed; bottom: 28px; left: 50%; transform: translateX(-50%);
  background: rgba(0,0,0,0.7); border: 1px solid var(--gray-02);
  border-radius: 20px; padding: 8px 20px;
  font-size: 12px; color: rgba(255,255,255,0.65);
  white-space: nowrap; z-index: 9001;
}

/* ── NEWS CARD V3 (newspaper clipping style) ── */
.clip-card {
  background: var(--white); border: 1px solid var(--gray-02);
  border-radius: 0; overflow: hidden; cursor: pointer;
  transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  position: relative;
  display: flex; flex-direction: column;
}
.clip-card:hover { transform: translateY(-4px); border-color: var(--gray-01); box-shadow: 0 12px 32px rgba(46,46,56,0.12); }
.clip-img-wrap {
  width: 100%; height: 220px; overflow: hidden; position: relative; cursor: zoom-in;
}
.clip-img-wrap img {
  width: 100%; height: 100%; object-fit: cover; object-position: top; display: block;
  transition: transform 0.4s ease;
}
.clip-card:hover .clip-img-wrap img { transform: scale(1.06); }
.clip-img-wrap::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 70px;
  background: linear-gradient(0deg, #FFFFFF 0%, transparent 100%);
  pointer-events: none;
}
/* Zoom hint icon on hover */
.clip-img-wrap::before {
  content: '';
  position: absolute; top: 10px; right: 10px; z-index: 2;
  width: 30px; height: 30px; border-radius: 50%;
  background: rgba(255,230,0,0.85);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%232e2e38' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'/%3E%3Cline x1='21' y1='21' x2='16.65' y2='16.65'/%3E%3Cline x1='11' y1='8' x2='11' y2='14'/%3E%3Cline x1='8' y1='11' x2='14' y2='11'/%3E%3C/svg%3E");
  background-repeat: no-repeat; background-position: center;
  opacity: 0; transform: scale(0.7);
  transition: opacity 0.25s, transform 0.25s;
}
.clip-card:hover .clip-img-wrap::before { opacity: 1; transform: scale(1); }

.clip-body { padding: 16px 18px 20px; display: flex; flex-direction: column; flex: 1; }
.clip-source {
  font-size: 10px; text-transform: uppercase; letter-spacing: 1.4px;
  color: var(--eyebrow-gold); font-weight: 700; margin-bottom: 8px;
  display: flex; align-items: center; gap: 7px;
}
.clip-source::before {
  content: ''; display: inline-block; width: 18px; height: 2px;
  background: var(--ey-yellow); border-radius: 2px; flex-shrink: 0;
}
.clip-headline { font-size: 14px; font-weight: 600; color: var(--ey-dark); line-height: 1.4; margin-bottom: 8px; }
.clip-date { font-size: 12px; color: var(--gray-01); margin-top: auto; }
</style>

<!-- Lightbox -->
<div id="clip-lightbox" onclick="if(event.target===this) closeLightbox()">
  <button id="clip-lightbox-close" onclick="closeLightbox()" title="Close">&#x2715;</button>
  <img id="clip-lightbox-img" src="" alt="">
  <div id="clip-lightbox-caption"></div>
</div>

<!-- ======== SECTION 2 — Macro Indicators (Figma 3187:3233) ======== -->
<section id="rise-of-ai" class="rise-section surface-dark" aria-labelledby="rise-heading">
  <p class="rise-label">Macro Indicators</p>
  <h2 id="rise-heading" class="rise-title">The Meteoric Rise of Artificial Intelligence</h2>

  <div class="rise-grid">
    <!-- Card 1 -->
    <article class="rise-card" onclick="openLightbox('/indian%20date%20center.png','ET India — Data Centre Surge · March 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="rise-card-top">
        <div class="metric">$48 Bn</div>
        <div class="metric-label">Data Centre Surge</div>
      </div>
      <div class="rise-card-body">
        <div class="rise-card-meta">
          <span class="source">ET India</span>
          <span class="date">March 2026</span>
        </div>
        <p>Indian data centre stocks set to skyrocket as global workloads shift to regional facilities.</p>
      </div>
    </article>

    <!-- Card 2 -->
    <article class="rise-card" onclick="openLightbox('/gov.uk.png','Financial Times — UK AI Funding · Feb 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="rise-card-top">
        <div class="metric">£6 Bn+</div>
        <div class="metric-label">UK AI Funding</div>
      </div>
      <div class="rise-card-body">
        <div class="rise-card-meta">
          <span class="source">Financial Times</span>
          <span class="date">Feb 2026</span>
        </div>
        <p>Government confirms over six billion pounds of public-private backing for core LLM research.</p>
      </div>
    </article>

    <!-- Card 3 -->
    <article class="rise-card" onclick="openLightbox('/nvidia.png','Bloomberg — Nvidia Valuation · March 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="rise-card-top">
        <div class="metric">$5 Tn</div>
        <div class="metric-label">Nvidia Valuation</div>
      </div>
      <div class="rise-card-body">
        <div class="rise-card-meta">
          <span class="source">Bloomberg</span>
          <span class="date">March 2026</span>
        </div>
        <p>Nvidia eclipses historic thresholds as data center infrastructure orders sustain exponential scale.</p>
      </div>
    </article>

    <!-- Card 4 -->
    <article class="rise-card" onclick="openLightbox('/tcs.png','TechCrunch — TCS × Anthropic · Jan 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="rise-card-top">
        <div class="metric">Enterprise</div>
        <div class="metric-label">TCS × Anthropic</div>
      </div>
      <div class="rise-card-body">
        <div class="rise-card-meta">
          <span class="source">TechCrunch</span>
          <span class="date">Jan 2026</span>
        </div>
        <p>TCS launches dedicated Anthropic business unit to deploy Claude models inside Fortune 500 tax teams.</p>
      </div>
    </article>
  </div>
</section>

<script>
function openLightbox(src, caption) {
  document.getElementById('clip-lightbox-img').src = src;
  document.getElementById('clip-lightbox-caption').textContent = caption;
  document.getElementById('clip-lightbox').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('clip-lightbox').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});
<\/script>

<!-- ======== REALITY CHECK — When AI Goes Wrong (Figma 3350:3932) ======== -->
<section id="reality-check" class="wrong-section surface-light" aria-labelledby="wrong-heading">
  <p class="wrong-label">THE REALITY CHECK</p>
  <h2 id="wrong-heading" class="wrong-title">When AI Goes Wrong: The Hidden Risks</h2>

  <div class="wrong-grid">
    <article class="wrong-card" onclick="openLightbox('/95pct.png','McKinsey Support — 95% Zero ROI · Feb 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="wrong-card-top">
        <img src="/reality-95.png" alt="">
        <div class="metric">95%</div>
        <div class="metric-label">Zero ROI</div>
      </div>
      <div class="wrong-card-body">
        <div class="wrong-card-meta">
          <span class="source">McKinsey Support</span>
          <span class="date">Feb 2026</span>
        </div>
        <p>Ninety-five percent of generative AI pilots fail to expand past sandbox trial stages due to unstructured execution plans.</p>
      </div>
    </article>

    <article class="wrong-card" onclick="openLightbox('/wakeupcall.png','The Information — $500M Monthly Compute Cost · March 2026')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="wrong-card-top">
        <img src="/reality-500m.png" alt="">
        <div class="metric">$500M</div>
        <div class="metric-label">Monthly Compute Cost</div>
      </div>
      <div class="wrong-card-body">
        <div class="wrong-card-meta">
          <span class="source">The Information</span>
          <span class="date">March 2026</span>
        </div>
        <p>Enterprise finds itself saddled with unpredicted token processing fees after deploying unrestrained autonomous loops.</p>
      </div>
    </article>

    <article class="wrong-card" onclick="openLightbox('/wall%20street.png','Bar &amp; Bench — Sanctioned AI Rationing · Dec 2025')" role="button" tabindex="0" onkeydown="if(event.key==='Enter'){this.click();}">
      <div class="wrong-card-top">
        <img src="/reality-sanctioned.png" alt="">
        <div class="metric">Sanctioned</div>
        <div class="metric-label">AI Rationing</div>
      </div>
      <div class="wrong-card-body">
        <div class="wrong-card-meta">
          <span class="source">Bar &amp; Bench</span>
          <span class="date">Dec 2025</span>
        </div>
        <p>Senior legal advisory firm penalized by tax appellate tribunal for submitting fabricated case precedents generated by raw LLM.</p>
      </div>
    </article>
  </div>
</section>

<!-- ======== STRATEGIC DIVIDE — Why Fundamentals Matter (Figma 3198:38831) ======== -->
<section id="strategic-divide" class="paths-section surface-light" aria-labelledby="paths-heading">
  <div class="paths-header">
    <p class="paths-label">Strategic Divide</p>
    <h2 id="paths-heading" class="paths-title">Why Fundamentals Matter: Two Paths for Tax Practice</h2>
  </div>

  <div class="paths-row">
    <article class="paths-card bad">
      <div class="paths-card-head">
        <h3 class="paths-card-title">The "Just Wing It" Path</h3>
        <p class="paths-card-sub">Treating complex enterprise AI like a simple search engine toy.</p>
      </div>
      <div class="paths-items">
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p>Relies on out-of-the-box ChatGPT prompts</p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p>No governance framework</p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p>Ignores tax-specific hallucination risks</p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p>Zero prompt engineering discipline</p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-x.svg" alt="" width="16" height="16">
          <p>No measurement of output accuracy</p>
        </div>
      </div>
      <p class="paths-outcome">OUTCOME: Wasted Budget, Risk Exposure, Inefficiency</p>
    </article>

    <div class="paths-divider" aria-hidden="true">
      <span class="paths-divider-diamond"></span>
    </div>

    <article class="paths-card good">
      <div class="paths-card-head">
        <h3 class="paths-card-title">The Foundations First Path</h3>
        <p class="paths-card-sub">Structuring AI with programmatic governance and deep tax context.</p>
      </div>
      <div class="paths-items">
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p>Custom system prompts for tax domains</p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p>Structured output validation</p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p>Human-in-the-loop audit checkpoints</p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p>Domain-specific fine-tuning strategy</p>
        </div>
        <div class="paths-item">
          <img src="/icons/path-check-mark.svg" alt="" width="16" height="16">
          <p>Measurable ROI tracking</p>
        </div>
      </div>
      <p class="paths-outcome">OUTCOME: Efficiency, Trust, Competitive Edge</p>
    </article>
  </div>

  <div class="paths-footer">
    <p class="paths-footer-msg">This is why we start here - with the foundations.</p>
    <a class="paths-cta" href="#evolution">Explore Timeline Below ↓</a>
  </div>
</section>

<!-- ======== AI EVOLUTION TIMELINE (Figma 3276:17185) ======== -->
<section class="evo-section surface-dark" id="evolution" aria-labelledby="evo-heading">
  <p class="evo-label">Historical Trajectory</p>
  <h2 id="evo-heading" class="evo-title">The Evolution of Artificial Intelligence</h2>
  <p class="evo-sub">Each layer is a subset of the one before it - building on the last</p>

  <div id="evo-timeline-view">
    <p class="evo-meta">5 eras · 1943-2024 · each era nests inside the one before it</p>

    <p class="evo-builds" id="evo-builds" aria-live="polite"></p>

    <!-- Concentric nest: ancestor rings wrap the featured card -->
    <div class="evo-concentric" id="evo-nest" role="img" aria-label="Technology nesting from parent to child">
      <div class="evo-featured" id="evo-featured">
        <div class="evo-featured-img"><img id="evo-feat-img" src="/evo-ai.png" alt=""></div>
        <div class="evo-featured-body">
          <div>
            <p class="evo-year-display" id="evo-feat-year">1943</p>
            <div class="evo-title-row">
              <h3 class="evo-era-name" id="evo-feat-title">Artificial Intelligence</h3>
              <span class="evo-tag" id="evo-feat-tag">Rules Engine</span>
            </div>
          </div>
          <p class="evo-desc" id="evo-feat-desc"></p>
          <div class="evo-analogy">
            <div class="evo-analogy-h"><span class="bar"></span><span>Analogy</span></div>
            <p id="evo-feat-analogy"></p>
          </div>
          <div>
            <p class="evo-examples-label">Everyday Examples</p>
            <div class="evo-chips" id="evo-feat-chips"></div>
          </div>
        </div>
      </div>
    </div>

    <div class="evo-previews" id="evo-previews"></div>

    <div class="evo-cabinet">
      <p>Need a simpler explanation? Let us use the Cabinet Analogy</p>
      <button type="button" class="btn-open" onclick="toggleEasyView(true)">
        Open
        <img src="/icons/arrow-right.svg" alt="" width="20" height="20">
      </button>
    </div>
  </div>

  <!-- ===== EASY EXPLANATION SLIDESHOW (hidden by default) ===== -->
    <div id="easy-explain-view" style="display:none; max-width:1100px; margin:30px auto 0;">

      <!-- Header with close button -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:24px;">
        <div>
          <h3 style="color:var(--ey-yellow); font-size:24px; font-weight:700; margin-bottom:4px;">The Simple Version</h3>
          <p style="color:#C4C4CD; font-size:13px;">Each concept explained with everyday examples — no jargon.</p>
        </div>
        <button onclick="toggleEasyView(false)" style="background:rgba(255,255,255,0.06); border:1px solid rgba(255,255,255,0.15); color:#FFFFFF; padding:10px 22px; border-radius:8px; font-size:13px; font-weight:600; cursor:pointer; transition:all 0.3s; display:flex; align-items:center; gap:8px;" onmouseover="this.style.background='rgba(255,255,255,0.12)'; this.style.borderColor='rgba(255,230,0,0.4)'" onmouseout="this.style.background='rgba(255,255,255,0.06)'; this.style.borderColor='rgba(255,255,255,0.15)'">
          <span style="font-size:16px;">✕</span> Back to Timeline
        </button>
      </div>

      <!-- Slide counter dots -->
      <div style="text-align:center; margin-bottom:20px;">
        <div id="easy-dots" style="display:flex; justify-content:center; gap:8px;">
          <span onclick="goToSlide(0)" style="width:12px; height:12px; border-radius:50%; background:var(--accent-blue); cursor:pointer; transition:all 0.3s; box-shadow:0 0 8px rgba(74,144,217,0.5);"></span>
          <span onclick="goToSlide(1)" style="width:12px; height:12px; border-radius:50%; background:rgba(255,255,255,0.15); cursor:pointer; transition:all 0.3s;"></span>
          <span onclick="goToSlide(2)" style="width:12px; height:12px; border-radius:50%; background:rgba(255,255,255,0.15); cursor:pointer; transition:all 0.3s;"></span>
          <span onclick="goToSlide(3)" style="width:12px; height:12px; border-radius:50%; background:rgba(255,255,255,0.15); cursor:pointer; transition:all 0.3s;"></span>
          <span onclick="goToSlide(4)" style="width:12px; height:12px; border-radius:50%; background:rgba(255,255,255,0.15); cursor:pointer; transition:all 0.3s;"></span>
        </div>
      </div>

      <!-- Slide container — image left + info right -->
      <div id="easy-slide-container" style="position:relative;">
        <div id="easy-slide" style="display:grid; grid-template-columns:1.2fr 1fr; gap:24px; align-items:stretch; transition:opacity 0.4s ease;">

          <!-- Left: Image -->
          <div style="border-radius:16px; overflow:hidden; box-shadow:0 12px 50px rgba(0,0,0,0.4); cursor:zoom-in;" onclick="document.getElementById('lightbox-img').src=document.getElementById('easy-slide-img').src; document.getElementById('img-lightbox').style.display='flex';">
            <img id="easy-slide-img" src="/ai.png" style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.2s;" onmouseover="this.style.transform='scale(1.02)'" onmouseout="this.style.transform='none'" />
          </div>

          <!-- Right: Tax Practice + Key Difference -->
          <div style="display:flex; flex-direction:column; gap:16px;">
            <div style="flex:1; background:rgba(255,230,0,0.04); border:1px solid rgba(255,230,0,0.15); border-radius:16px; padding:28px; display:flex; flex-direction:column; justify-content:center;">
              <div style="color:var(--ey-yellow); font-size:11px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; margin-bottom:12px;">🏢 In Tax Practice</div>
              <p id="easy-tax" style="color:#c4c4cd; font-size:15px; line-height:1.7;">Early tax software that auto-calculated totals based on fixed formulas — no learning, just math rules.</p>
            </div>
            <div style="flex:1; background:#1A1A24; border:1px solid #2E2E38; border-radius:16px; padding:28px; display:flex; flex-direction:column; justify-content:center;">
              <div style="color:#C4C4CD; font-size:11px; font-weight:700; letter-spacing:1.2px; text-transform:uppercase; margin-bottom:10px;">🔑 Key Difference from Next Layer</div>
              <p id="easy-diff" style="color:#c4c4cd; font-size:14px; line-height:1.6;">AI follows exact rules you give it. Machine Learning (next) figures out its own rules from data.</p>
            </div>
          </div>

        </div>
      </div>

      <!-- Navigation -->
      <div style="display:flex; align-items:center; justify-content:space-between; margin-top:24px;">
        <button id="easy-prev" onclick="navigateSlide(-1)" style="background:var(--white); border:1px solid rgba(255,255,255,0.15); color:var(--text-secondary); padding:12px 28px; border-radius:8px; font-size:14px; font-weight:600; cursor:pointer; transition:all 0.3s; display:flex; align-items:center; gap:8px; opacity:0.3; pointer-events:none;" onmouseover="if(this.style.opacity!='0.3'){this.style.background='rgba(255,255,255,0.12)'; this.style.borderColor='rgba(255,230,0,0.3)'}" onmouseout="this.style.background='rgba(255,255,255,0.06)'; this.style.borderColor='rgba(255,255,255,0.15)'">
          ← Previous
        </button>
        <span id="easy-counter" style="color:var(--text-dim); font-size:13px; font-weight:600;">1 / 5</span>
        <button id="easy-next" onclick="navigateSlide(1)" style="background:var(--ey-yellow); border:none; color:var(--ey-dark); padding:12px 28px; border-radius:8px; font-size:14px; font-weight:700; cursor:pointer; transition:all 0.3s; display:flex; align-items:center; gap:8px;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 6px 20px rgba(255,230,0,0.3)'" onmouseout="this.style.transform='none'; this.style.boxShadow='none'">
          Next →
        </button>
      </div>

      <!-- Tax summary bar -->
      <div style="background:rgba(255,230,0,0.04); border:1px solid rgba(255,230,0,0.12); border-radius:10px; padding:14px; margin-top:28px; text-align:center;">
        <p style="color:var(--ey-yellow); font-size:12px; font-weight:600; margin:0;">In tax terms: AI went from "follow this rule" → "learn from past filings" → "read any document" → "draft memos and create new content in your style" → "run an entire compliance workflow for you."</p>
      </div>

    </div><!-- end easy-explain-view -->

</section>

<!-- ======== KEY AI TERMINOLOGY — GUIDED DEMO ======== -->
<section class="section sim-section surface-light" id="terminology" style="padding:80px 40px;">
  <p class="sim-label">Guided demo</p>
  <h2 style="font-size:36px; margin-bottom:8px; color:var(--ey-dark);">Inside Every Gen AI Conversation</h2>
  <p class="section-subtitle" style="max-width:700px; color:var(--gray-01);">Follow one prompt through five beats and learn what happens between your question and the final answer.</p>

  <div style="max-width:1200px; margin:0 auto;">

    <!-- 5-beat stage strip -->
    <div id="beat-strip" style="display:none; align-items:center; justify-content:center; gap:6px; flex-wrap:wrap; margin:0 0 18px;">
      <div class="beat-chip" id="beat-ask"><span class="beat-chip-num">1</span><span class="beat-chip-label">Ask</span></div>
      <span class="beat-connector"></span>
      <div class="beat-chip" id="beat-inside"><span class="beat-chip-num">2</span><span class="beat-chip-label">Inside</span></div>
      <span class="beat-connector"></span>
      <div class="beat-chip" id="beat-risk"><span class="beat-chip-num">3</span><span class="beat-chip-label">Risk</span></div>
      <span class="beat-connector"></span>
      <div class="beat-chip" id="beat-you"><span class="beat-chip-num">4</span><span class="beat-chip-label">You</span></div>
      <span class="beat-connector"></span>
      <div class="beat-chip" id="beat-better"><span class="beat-chip-num">5</span><span class="beat-chip-label">Better</span></div>
    </div>

    <!-- Copilot Window -->
    <div id="copilot-window" style="background:var(--off-white); border:1px solid var(--gray-02); border-radius:16px; overflow:hidden; box-shadow:0 24px 60px rgba(46,46,56,0.12);">

      <!-- Title bar -->
      <div style="display:flex; align-items:center; padding:12px 20px; background:var(--confident-black); border-bottom:1px solid rgba(255,255,255,0.08);">
        <div style="display:flex; align-items:center; gap:8px;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--ey-yellow)" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span style="color:#FFFFFF; font-size:14px; font-weight:600;">EY.ai Copilot</span>
        </div>
        <span style="margin-left:auto; font-size:10px; color:rgba(255,255,255,0.7); background:rgba(255,255,255,0.08); padding:3px 10px; border-radius:10px;">GPT-4o • EY Secure</span>
      </div>

      <!-- Chat body -->
      <div id="copilot-chat" style="padding:28px; min-height:420px; max-height:600px; overflow-y:auto; background:var(--white);">
        <div id="copilot-welcome" style="text-align:center; padding:60px 20px;">
          <h3 style="color:var(--ey-dark); font-size:20px; font-weight:700; margin-bottom:8px;">Welcome to EY.ai Copilot</h3>
          <p style="color:var(--gray-01); font-size:14px; max-width:400px; margin:0 auto 24px;">Ask me anything about India tax. I'll show you how AI processes your question — and where things can go wrong.</p>
          <button onclick="startDemo()" style="background:var(--ey-yellow); color:var(--ey-dark); border:none; padding:14px 32px; border-radius:8px; font-size:14px; font-weight:700; cursor:pointer; display:inline-flex; align-items:center; gap:10px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 25px rgba(255,230,0,0.3)'" onmouseout="this.style.transform='none'; this.style.boxShadow='none'">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--ey-dark)"><polygon points="5 3 19 12 5 21 5 3"/></svg> Start walkthrough
          </button>
        </div>
      </div>

      <!-- Input bar — visible only in the Ask beat -->
      <div id="copilot-input-bar" style="display:none; align-items:center; gap:12px; padding:14px 20px; background:var(--off-white); border-top:1px solid rgba(46,46,56,0.05);">
        <input id="copilot-input" type="text" placeholder="Ask me about tax..." readonly style="flex:1; background:var(--white); border:1px solid rgba(46,46,56,0.08); border-radius:10px; padding:12px 16px; color:var(--gray-01); font-size:13px; outline:none;">
        <button style="width:38px; height:38px; border-radius:8px; background:var(--ey-yellow); border:none; cursor:pointer; display:flex; align-items:center; justify-content:center;"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--ey-dark)"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg></button>
      </div>

      <!-- Bottom action bar: single primary Continue, secondary Back, quiet Restart -->
      <div id="demo-actions" style="display:none; align-items:center; justify-content:space-between; gap:12px; padding:14px 20px; background:var(--off-white); border-top:1px solid rgba(46,46,56,0.05); flex-wrap:wrap;">
        <button id="demo-back-btn" onclick="backBeat()" disabled style="background:none; border:none; color:var(--gray-01); font-size:13px; font-weight:600; cursor:pointer; display:flex; align-items:center; gap:6px; opacity:0.35; transition:opacity 0.3s; padding:8px 4px;">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--gray-01)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg> Back
        </button>
        <div style="display:flex; align-items:center; gap:18px;">
          <button id="demo-restart-btn" onclick="resetDemo()" style="display:none; background:none; border:none; color:var(--gray-01); font-size:12px; font-weight:600; cursor:pointer; text-decoration:underline; text-underline-offset:3px; padding:8px 4px;">Restart demo</button>
          <button id="demo-continue-btn" onclick="continueBeat()" style="background:var(--ey-yellow); color:var(--ey-dark); border:none; padding:11px 26px; border-radius:8px; font-size:13px; font-weight:700; cursor:pointer; display:flex; align-items:center; gap:8px; transition:all 0.3s;" onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 8px 20px rgba(255,230,0,0.3)'" onmouseout="this.style.transform='none'; this.style.boxShadow='none'">
            Continue <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--ey-dark)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>

    </div><!-- end copilot window -->

  </div>
</section>

<!-- Guided Demo Styles & Script -->
<style>
.sim-label { font-size:12px; font-weight:700; color:var(--eyebrow-gold); letter-spacing:2px; text-transform:uppercase; margin-bottom:12px; }
.beat-chip { display:flex; align-items:center; gap:8px; padding:7px 14px; border-radius:20px; border:1px solid rgba(46,46,56,0.1); background:rgba(46,46,56,0.02); transition:all 0.3s; }
.beat-chip-num { width:18px; height:18px; border-radius:50%; background:rgba(46,46,56,0.08); color:var(--gray-01); font-size:10px; font-weight:700; display:flex; align-items:center; justify-content:center; flex-shrink:0; transition:all 0.3s; }
.beat-chip-label { font-size:12px; font-weight:600; color:var(--gray-01); letter-spacing:0.3px; transition:color 0.3s; }
.beat-chip.is-active { border-color:rgba(255,230,0,0.5); background:rgba(255,230,0,0.08); }
.beat-chip.is-active .beat-chip-num { background:var(--ey-yellow); color:var(--ey-dark); }
.beat-chip.is-active .beat-chip-label { color:var(--ey-dark); }
.beat-chip.is-done .beat-chip-num { background:rgba(0,200,100,0.22); color:var(--accent-green); }
.beat-chip.is-done .beat-chip-label { color:var(--gray-01); }
.beat-connector { width:16px; height:1px; background:rgba(46,46,56,0.1); flex-shrink:0; }
#demo-back-btn:not(:disabled):hover { opacity:0.75 !important; }
#demo-restart-btn:hover { color:var(--ey-dark) !important; }
.inside-acc-toggle { width:100%; display:flex; align-items:center; justify-content:space-between; gap:10px; padding:14px 16px; background:transparent; border:none; border-top:1px solid rgba(46,46,56,0.06); cursor:pointer; text-align:left; }
.inside-acc-toggle:hover { background:rgba(46,46,56,0.02); }
.acc-chev { transition:transform 0.25s ease; flex-shrink:0; }
.inside-tab-strip { display:flex; gap:4px; padding:10px 10px 0; overflow-x:auto; }
.inside-tab-btn { flex:1 1 0; white-space:nowrap; padding:9px 10px; font-size:11px; font-weight:700; font-family:inherit; border-radius:8px 8px 0 0; border:1px solid transparent; border-bottom:none; background:transparent; color:var(--text-dim); cursor:pointer; transition:background 0.15s ease, color 0.15s ease; }
.inside-tab-btn:hover { background:rgba(46,46,56,0.03); }
.inside-tab-btn.is-active { background:var(--white); color:var(--tab-color, var(--ey-dark)); border-color:rgba(46,46,56,0.08); }
.inside-tab-panel { padding:16px; border-top:1px solid rgba(46,46,56,0.08); background:var(--white); }
@keyframes bounce { 0%,80%,100%{transform:translateY(0)} 40%{transform:translateY(-6px)} }
@keyframes tokenPop { 0%{transform:scale(0.3); opacity:0} 60%{transform:scale(1.1)} 100%{transform:scale(1); opacity:1} }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
@keyframes pulseRed { 0%,100%{background:rgba(255,65,54,0.15)} 50%{background:rgba(255,65,54,0.3)} }
@media (max-width: 640px) {
  .beat-chip { padding:6px 10px; gap:6px; }
  .beat-chip-label { font-size:11px; }
  .beat-connector { width:8px; }
  #demo-actions { padding:12px 16px; }
  #demo-actions > div { gap:12px; }
}
</style>
<script>
let currentBeat = -1;
const BEATS = ['ask','inside','risk','you','better'];
const chatEl = document.getElementById('copilot-chat');

function addMessage(role, html) {
  const msg = document.createElement('div');
  msg.style.cssText = 'display:flex; gap:14px; margin-bottom:20px; align-items:flex-start; animation:fadeInMsg 0.5s ease-out forwards; opacity:0;';
  const colors = {You:['rgba(255,230,0,0.18)','var(--ey-dark)'],AI:['rgba(70,150,255,0.15)','var(--accent-blue)'],SYS:['rgba(46,46,56,0.04)','var(--ey-dark)']};
  const [bg,fg] = colors[role] || colors.SYS;
  const icon = role==='You'?'You':role==='AI'?'AI':'⚙';
  msg.innerHTML = \`<div style="width:30px;height:30px;border-radius:50%;background:\${bg};display:flex;align-items:center;justify-content:center;font-size:\${role==='SYS'?'14px':'12px'};font-weight:700;color:\${fg};flex-shrink:0;">\${icon}</div><div style="flex:1;">\${html}</div>\`;
  chatEl.appendChild(msg);
  chatEl.scrollTop = chatEl.scrollHeight;
}

function showThinking(text) {
  const t = document.createElement('div');
  t.id = 'thinking-indicator';
  t.style.cssText = 'display:flex; gap:14px; margin-bottom:20px; align-items:center; animation:fadeInMsg 0.3s ease-out forwards; opacity:0;';
  t.innerHTML = \`<div style="width:30px;height:30px;border-radius:50%;background:rgba(70,150,255,0.15);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;color:var(--accent-blue);flex-shrink:0;">AI</div><div style="display:flex;align-items:center;gap:8px;padding:12px 18px;background:rgba(70,150,255,0.04);border:1px solid rgba(70,150,255,0.1);border-radius:12px;"><div style="display:flex;gap:4px;"><span style="width:6px;height:6px;border-radius:50%;background:var(--accent-blue);animation:bounce 1.4s infinite;"></span><span style="width:6px;height:6px;border-radius:50%;background:var(--accent-blue);animation:bounce 1.4s infinite 0.2s;"></span><span style="width:6px;height:6px;border-radius:50%;background:var(--accent-blue);animation:bounce 1.4s infinite 0.4s;"></span></div><span style="color:var(--text-dim);font-size:12px;font-style:italic;">\${text||'Thinking...'}</span></div>\`;
  chatEl.appendChild(t);
  chatEl.scrollTop = chatEl.scrollHeight;
}

function removeThinking() { const t=document.getElementById('thinking-indicator'); if(t) t.remove(); }

function toggleAcc(id, el) {
  var body = document.getElementById(id);
  if (!body) return;
  var isOpen = body.style.display === 'block';
  body.style.display = isOpen ? 'none' : 'block';
  var chev = el ? el.querySelector('.acc-chev') : null;
  if (chev) chev.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}

function updateBeatStrip() {
  BEATS.forEach(function (b, i) {
    var chip = document.getElementById('beat-' + b);
    if (!chip) return;
    chip.classList.remove('is-active', 'is-done');
    if (currentBeat > i) chip.classList.add('is-done');
    if (currentBeat === i) chip.classList.add('is-active');
  });
}

function updateActionBar() {
  var back = document.getElementById('demo-back-btn');
  var cont = document.getElementById('demo-continue-btn');
  var restart = document.getElementById('demo-restart-btn');
  if (back) { back.disabled = currentBeat <= 0; back.style.opacity = currentBeat <= 0 ? '0.35' : '1'; }
  if (cont) { cont.style.display = currentBeat >= BEATS.length - 1 ? 'none' : 'flex'; }
  if (restart) { restart.style.display = currentBeat >= 0 ? 'inline-flex' : 'none'; }
}

function startDemo() {
  document.getElementById('copilot-welcome').style.display = 'none';
  document.getElementById('beat-strip').style.display = 'flex';
  document.getElementById('demo-actions').style.display = 'flex';
  currentBeat = 0;
  renderBeat();
}

function continueBeat() {
  if (currentBeat < BEATS.length - 1) { currentBeat++; renderBeat(); }
}

function backBeat() {
  if (window._typer) clearInterval(window._typer);
  if (currentBeat > 0) { currentBeat--; renderBeat(); }
}

function resetDemo() {
  if (window._typer) clearInterval(window._typer);
  chatEl.innerHTML = \`<div id="copilot-welcome" style="text-align:center;padding:60px 20px;"><h3 style="color:var(--ey-dark);font-size:20px;font-weight:700;margin-bottom:8px;">Welcome to EY.ai Copilot</h3><p style="color:var(--gray-01);font-size:14px;max-width:400px;margin:0 auto 24px;">Ask me anything about India tax. I'll show you how AI processes your question — and where things can go wrong.</p><button onclick="startDemo()" style="background:var(--ey-yellow);color:var(--ey-dark);border:none;padding:14px 32px;border-radius:8px;font-size:14px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:10px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="var(--ey-dark)"><polygon points="5 3 19 12 5 21 5 3"/></svg> Start walkthrough</button></div>\`;
  document.getElementById('beat-strip').style.display = 'none';
  document.getElementById('demo-actions').style.display = 'none';
  var bar = document.getElementById('copilot-input-bar'); if (bar) bar.style.display = 'none';
  var inp = document.getElementById('copilot-input'); if (inp) { inp.value = ''; inp.style.color = 'var(--text-secondary)'; inp.style.borderColor = 'rgba(46,46,56,0.08)'; }
  currentBeat = -1;
  updateBeatStrip();
}

const INSIDE_TOKENS_HTML = \`<div style="padding:18px;background:rgba(70,150,255,0.04);border:1px solid rgba(70,150,255,0.15);border-radius:12px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="1.5"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg><span style="color:var(--accent-blue);font-size:13px;font-weight:700;">Tokenization</span></div><p style="color:var(--text-secondary);font-size:13px;line-height:1.7;margin-bottom:14px;">AI doesn't read words like you. It breaks your sentence into small chunks called <strong style="color:var(--ey-dark);">tokens</strong> — roughly ¾ of a word each.</p><div style="background:var(--off-white);border-radius:10px;padding:16px;margin-bottom:14px;"><div style="color:var(--text-dim);font-size:10px;font-weight:600;letter-spacing:1px;margin-bottom:10px;">YOUR PROMPT → TOKENIZED</div><div style="font-size:11px;color:var(--gray-01);margin-bottom:10px;font-style:italic;line-height:1.5;padding:7px 10px;background:var(--white);border-radius:5px;border-left:2px solid rgba(46,46,56,0.06);">&ldquo;Summarize the GST implications for an online seller selling goods across multiple Indian states&rdquo;</div><div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;"><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.1s both;"><span style="background:rgba(70,150,255,0.2);border:1px solid rgba(70,150,255,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-blue);font-weight:600;font-family:monospace;">Summar</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.2s both;"><span style="background:rgba(70,150,255,0.2);border:1px solid rgba(70,150,255,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-blue);font-weight:600;font-family:monospace;">ize</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.35s both;"><span style="background:rgba(0,200,100,0.2);border:1px solid rgba(0,200,100,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-green);font-weight:600;font-family:monospace;">the</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.5s both;"><span style="background:rgba(70,150,255,0.2);border:1px solid rgba(70,150,255,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-blue);font-weight:600;font-family:monospace;">G</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.65s both;"><span style="background:rgba(70,150,255,0.2);border:1px solid rgba(70,150,255,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-blue);font-weight:600;font-family:monospace;">ST</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.8s both;"><span style="background:rgba(255,125,30,0.2);border:1px solid rgba(255,125,30,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-orange);font-weight:600;font-family:monospace;">impl</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 0.95s both;"><span style="background:rgba(255,125,30,0.2);border:1px solid rgba(255,125,30,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-orange);font-weight:600;font-family:monospace;">ications</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 1.1s both;"><span style="background:rgba(0,200,100,0.2);border:1px solid rgba(0,200,100,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-green);font-weight:600;font-family:monospace;">online</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 1.25s both;"><span style="background:rgba(255,65,54,0.2);border:1px solid rgba(255,65,54,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-red);font-weight:600;font-family:monospace;">sell</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 1.4s both;"><span style="background:rgba(255,65,54,0.2);border:1px solid rgba(255,65,54,0.4);padding:6px 14px;border-radius:6px;font-size:14px;color:var(--accent-red);font-weight:600;font-family:monospace;">er</span></span><span style="display:inline-block;animation:tokenPop 0.4s ease-out 1.55s both;align-self:center;"><span style="color:rgba(46,46,56,0.25);font-size:18px;letter-spacing:3px;">···</span></span></div><div style="display:flex;align-items:center;gap:8px;"><span style="color:var(--text-dim);font-size:10px;">16 words</span><span style="color:var(--text-dim);">→</span><span style="color:var(--accent-blue);font-size:10px;font-weight:600;">~21 tokens</span></div></div><div style="background:rgba(255,230,0,0.04);border:1px solid rgba(255,230,0,0.12);border-left:3px solid rgba(255,230,0,0.35);border-radius:8px;padding:10px 14px;margin-top:10px;display:flex;align-items:flex-start;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div><div style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:3px;">Everyday Analogy - Like cutting a pizza into slices before eating it.</div></div></div><div style="margin-top:12px;padding:10px 14px;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.15);border-radius:8px;display:flex;align-items:center;gap:10px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><div><span style="color:var(--accent-green);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;display:block;margin-bottom:2px;">What happens next? - LLM</span></div></div></div>\`;

const INSIDE_LLM_HTML = \`<div style="padding:18px;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.15);border-radius:12px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="1.5"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6-1 1-1.5 2-1.5 3h-5c0-1-.5-2-1.5-3-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z"/><path d="M9 21h6"/></svg><span style="color:var(--accent-green);font-size:13px;font-weight:700;">LLM — The Brain Predicts One Word at a Time</span></div><p style="color:var(--text-secondary);font-size:13px;line-height:1.7;margin-bottom:14px;">Tokens enter a <strong style="color:var(--ey-dark);">Large Language Model</strong> — The model has learned patterns from <strong style="color:var(--accent-green);">enormous amounts of text</strong>. It <em>predicts</em> the next word, one at a time.</p><div style="background:var(--off-white);border-radius:10px;padding:16px;margin-bottom:14px;"><div style="color:var(--text-dim);font-size:10px;font-weight:600;letter-spacing:1px;margin-bottom:8px;"></div><div style="font-size:10px;color:var(--gray-01);font-style:italic;margin-bottom:10px;padding:5px 8px;background:var(--white);border-radius:4px;border-left:2px solid rgba(46,46,56,0.05);">Prompt: &ldquo;Summarize the GST implications for an online seller selling goods across multiple Indian states&rdquo;</div><div style="font-family:monospace;font-size:13px;line-height:2.2;"><span style="color:var(--accent-green);">GST</span> <span style="color:var(--text-dim);animation:blink 1s infinite;">▊</span><br><span style="color:var(--accent-green);">GST</span> <span style="color:var(--ey-dark);">implications</span> <span style="color:var(--text-dim);animation:blink 1s infinite;">▊</span><br><span style="color:var(--accent-green);">GST</span> <span style="color:var(--ey-dark);">implications for an online seller include registration across multiple states, ITC claims...</span></div></div><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding:10px 14px;background:rgba(0,200,100,0.07);border:1px solid rgba(0,200,100,0.2);border-radius:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:12px;font-weight:700;">LLM = The brain behind the conversation</span></div><div style="padding:10px 14px;background:rgba(255,230,0,0.04);border:1px solid rgba(255,230,0,0.12);border-left:3px solid rgba(255,230,0,0.35);border-radius:8px;display:flex;align-items:flex-start;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div><div style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:3px;">Everyday Analogy - Like your phone predicting the next word while typing.</div></div></div></div>\`;

const INSIDE_KNOWLEDGE_HTML = \`<div style="padding:18px;background:rgba(180,0,255,0.04);border:1px solid rgba(180,0,255,0.15);border-radius:12px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/><path d="M8 7h8M8 11h6"/></svg><span style="color:var(--accent-purple);font-size:13px;font-weight:700;">Knowledge Layer — Where AI Finds Trusted Information</span></div><p style="color:var(--text-secondary);font-size:13px;line-height:1.7;margin-bottom:14px;">The model understands the question. <strong style="color:var(--ey-dark);">Now it needs trusted information.</strong></p><div style="background:var(--off-white);border-radius:10px;padding:16px;margin-bottom:14px;"><div style="color:var(--text-dim);font-size:10px;font-weight:600;letter-spacing:1px;margin-bottom:12px;">THE KNOWLEDGE LAYER CONTAINS</div><div style="display:flex;flex-direction:column;gap:7px;"><div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(180,0,255,0.04);border:1px solid rgba(180,0,255,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><span style="color:var(--gray-01);font-size:12px;">Company documents</span></div><div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(180,0,255,0.04);border:1px solid rgba(180,0,255,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span style="color:var(--gray-01);font-size:12px;">Tax guidance</span></div><div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(180,0,255,0.04);border:1px solid rgba(180,0,255,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg><span style="color:var(--gray-01);font-size:12px;">Policies</span></div><div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(180,0,255,0.04);border:1px solid rgba(180,0,255,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg><span style="color:var(--gray-01);font-size:12px;">Knowledge repositories</span></div><div style="display:flex;align-items:center;gap:10px;padding:8px 12px;background:rgba(180,0,255,0.04);border:1px solid rgba(180,0,255,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><span style="color:var(--gray-01);font-size:12px;">Research material</span></div></div></div><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding:10px 14px;background:rgba(180,0,255,0.07);border:1px solid rgba(180,0,255,0.2);border-radius:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-purple);font-size:12px;font-weight:700;">Knowledge Layer = The library AI can consult</span></div><div style="padding:10px 14px;background:rgba(255,230,0,0.04);border:1px solid rgba(255,230,0,0.12);border-left:3px solid rgba(255,230,0,0.35);border-radius:8px;display:flex;align-items:flex-start;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div><div style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:3px;">Everyday Analogy - Like a tax professional reaching for a bookshelf before drafting advice.</div></div></div></div>\`;

const INSIDE_RAG_HTML = \`<div style="padding:18px;background:rgba(255,125,30,0.04);border:1px solid rgba(255,125,30,0.15);border-radius:12px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:14px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="1.5"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg><span style="color:var(--accent-orange);font-size:13px;font-weight:700;">RAG — Retrieval Augmented Generation</span><span style="color:var(--gray-01);font-size:11px;margin-left:8px;">AI actively searches a knowledge source before constructing its answer.</span></div><div style="padding:10px 14px;background:rgba(255,125,30,0.06);border-left:3px solid rgba(255,125,30,0.5);border-radius:6px;margin-bottom:16px;display:flex;align-items:flex-start;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px;"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg><div><div style="color:var(--accent-orange);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:2px;">What Happens Next? - The AI searches that knowledge source before answering.</div></div></div><div style="background:var(--off-white);border-radius:10px;padding:16px;margin-bottom:14px;"><div style="color:var(--text-dim);font-size:10px;font-weight:600;letter-spacing:1px;margin-bottom:14px;text-align:center;">HOW RAG WORKS</div><div style="display:flex;flex-direction:column;align-items:center;gap:0;"><div style="background:rgba(255,230,0,0.08);border:1px solid rgba(255,230,0,0.25);border-radius:8px;padding:9px 20px;text-align:center;min-width:200px;"><span style="color:var(--eyebrow-gold);font-size:12px;font-weight:700;">Question</span></div><div style="display:flex;flex-direction:column;align-items:center;padding:4px 0;"><div style="width:1px;height:10px;background:rgba(46,46,56,0.12);"></div><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M2 6l3 3 3-3" stroke="rgba(46,46,56,0.25)" stroke-width="1.5" stroke-linecap="round"/></svg></div><div style="background:rgba(180,0,255,0.08);border:1px solid rgba(180,0,255,0.25);border-radius:8px;padding:9px 20px;text-align:center;min-width:200px;"><span style="color:var(--accent-purple);font-size:12px;font-weight:700;">Search Knowledge Layer</span></div><div style="display:flex;flex-direction:column;align-items:center;padding:4px 0;"><div style="width:1px;height:10px;background:rgba(46,46,56,0.12);"></div><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M2 6l3 3 3-3" stroke="rgba(46,46,56,0.25)" stroke-width="1.5" stroke-linecap="round"/></svg></div><div style="background:rgba(255,125,30,0.08);border:1px solid rgba(255,125,30,0.25);border-radius:8px;padding:9px 20px;text-align:center;min-width:200px;"><span style="color:var(--accent-orange);font-size:12px;font-weight:700;">Retrieve Relevant Information</span></div><div style="display:flex;flex-direction:column;align-items:center;padding:4px 0;"><div style="width:1px;height:10px;background:rgba(46,46,56,0.12);"></div><svg width="10" height="10" viewBox="0 0 10 10" fill="none"><path d="M5 1v8M2 6l3 3 3-3" stroke="rgba(46,46,56,0.25)" stroke-width="1.5" stroke-linecap="round"/></svg></div><div style="background:rgba(0,200,100,0.08);border:1px solid rgba(0,200,100,0.25);border-radius:8px;padding:9px 20px;text-align:center;min-width:200px;"><span style="color:var(--accent-green);font-size:12px;font-weight:700;">Generate Response</span></div></div></div><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding:10px 14px;background:rgba(0,200,100,0.07);border:1px solid rgba(0,200,100,0.2);border-radius:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:12px;font-weight:700;">RAG = AI looking up information before responding</span></div><div style="padding:10px 14px;background:rgba(255,230,0,0.04);border:1px solid rgba(255,230,0,0.12);border-left:3px solid rgba(255,230,0,0.35);border-radius:8px;display:flex;align-items:flex-start;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div><div style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:3px;">Everyday Analogy - Like an open-book exam. With the textbook available. Not relying on memory alone.</div></div></div></div>\`;

const INSIDE_TABS = [
  { id: 'tokens', label: 'Tokenization', color: 'var(--accent-blue)', html: INSIDE_TOKENS_HTML },
  { id: 'llm', label: 'LLM', color: 'var(--accent-green)', html: INSIDE_LLM_HTML },
  { id: 'knowledge', label: 'Knowledge Layer', color: 'var(--accent-purple)', html: INSIDE_KNOWLEDGE_HTML },
  { id: 'rag', label: 'RAG', color: 'var(--accent-orange)', html: INSIDE_RAG_HTML },
];

function buildInsideAccordion() {
  var tabButtons = INSIDE_TABS.map(function (tab, i) {
    return '<button class="inside-tab-btn' + (i === 0 ? ' is-active' : '') + '" style="--tab-color:' + tab.color + ';" onclick="selectInsideTab(\\'' + tab.id + '\\', this)">' + tab.label + '</button>';
  }).join('');
  return \`<div style="border:1px solid var(--card-border); border-radius:12px; overflow:hidden; margin-top:6px; background:var(--off-white);">
    <div style="padding:12px 16px 0; font-size:10px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:var(--text-dim);">How it works — optional detail</div>
    <div class="inside-tab-strip">\${tabButtons}</div>
    <div id="inside-tab-panel" class="inside-tab-panel">\${INSIDE_TABS[0].html}</div>
  </div>\`;
}

function selectInsideTab(id, el) {
  var panel = document.getElementById('inside-tab-panel');
  var tab = INSIDE_TABS.find(function (t) { return t.id === id; });
  if (!panel || !tab) return;
  panel.innerHTML = tab.html;
  var strip = el ? el.parentElement : null;
  if (strip) {
    Array.prototype.forEach.call(strip.querySelectorAll('.inside-tab-btn'), function (btn) {
      btn.classList.remove('is-active');
    });
  }
  if (el) el.classList.add('is-active');
}

function renderBeat() {
  updateBeatStrip();
  updateActionBar();
  if (window._typer) clearInterval(window._typer);
  chatEl.innerHTML = '';
  var barEl = document.getElementById('copilot-input-bar');
  var inputEl = document.getElementById('copilot-input');
  var beat = BEATS[currentBeat];

  if (beat === 'ask') {
    barEl.style.display = 'flex';
    inputEl.value = ''; inputEl.style.color = 'var(--ey-dark)'; inputEl.style.borderColor = 'rgba(255,230,0,0.35)';
    var promptTxt = 'Summarize the GST implications for an online seller selling goods across multiple Indian states';
    var ti = 0;
    window._typer = setInterval(function () {
      if (ti < promptTxt.length) { inputEl.value += promptTxt[ti]; ti++; } else { clearInterval(window._typer); }
    }, 30);
    var ann = document.createElement('div');
    ann.style.cssText = 'margin:0 0 20px 0;animation:fadeInMsg 0.6s ease-out 0.3s forwards;opacity:0;';
    ann.innerHTML = \`<div style="border:1px solid rgba(255,230,0,0.25);border-radius:12px;overflow:hidden;background:var(--white);"><div style="background:rgba(255,230,0,0.07);border-bottom:1px solid rgba(255,230,0,0.15);padding:10px 18px;display:flex;align-items:center;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span style="color:var(--eyebrow-gold);font-size:11px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;">What is a Prompt?</span></div><div style="padding:18px 20px;display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:start;"><div><p style="color:var(--ey-dark);font-size:14px;font-weight:700;margin:0 0 6px;line-height:1.4;">This is the instruction given to AI.</p><p style="color:var(--gray-01);font-size:12px;line-height:1.6;margin:0 0 14px;">The clearer the instruction, the better the answer.</p><div style="display:inline-flex;align-items:center;gap:6px;background:rgba(0,200,100,0.1);border:1px solid rgba(0,200,100,0.25);padding:7px 14px;border-radius:20px;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:12px;font-weight:700;">Prompt = What you ask AI to do</span></div></div><div style="background:var(--off-white);border:1px solid rgba(255,230,0,0.15);border-left:3px solid var(--ey-yellow);border-radius:8px;padding:14px 16px;"><div style="display:flex;align-items:center;gap:6px;margin-bottom:10px;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Everyday Analogy</span></div><p style="color:var(--ey-dark);font-size:13px;font-weight:600;margin:0 0 6px;line-height:1.4;">Like giving directions to a cab driver.</p><p style="color:var(--gray-01);font-size:12px;line-height:1.5;margin:0;">A specific destination leads to a better journey.</p></div></div></div>\`;
    chatEl.appendChild(ann);
    chatEl.scrollTop = chatEl.scrollHeight;

  } else if (beat === 'inside') {
    barEl.style.display = 'none';
    inputEl.value = ''; inputEl.style.color = 'var(--text-secondary)'; inputEl.style.borderColor = 'rgba(46,46,56,0.08)';
    addMessage('You', '<div style="padding:12px 16px;background:rgba(255,230,0,0.05);border:1px solid rgba(255,230,0,0.12);border-radius:12px;color:var(--ey-dark);font-size:14px;">Summarize the GST implications for an online seller selling goods across multiple Indian states</div>');
    showThinking('Processing your prompt...');
    setTimeout(function () {
      removeThinking();
      var exp = document.createElement('div');
      exp.style.cssText = 'margin:0 0 20px 0;animation:fadeInMsg 0.7s ease-out forwards;opacity:0;';
      exp.innerHTML = \`<div style="border:1px solid rgba(46,46,56,0.07);border-radius:14px;overflow:hidden;background:linear-gradient(135deg,var(--white),var(--off-white));"><div style="padding:14px 20px;background:rgba(46,46,56,0.025);border-bottom:1px solid rgba(46,46,56,0.06);display:flex;align-items:center;gap:12px;"><div style="width:34px;height:34px;border-radius:50%;background:rgba(255,230,0,0.1);border:1px solid rgba(255,230,0,0.3);display:flex;align-items:center;justify-content:center;flex-shrink:0;"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div><div><div style="color:var(--ey-dark);font-size:14px;font-weight:700;">What's happening right now: the pipeline at a glance</div><div style="color:var(--gray-01);font-size:11px;margin-top:3px;"></div></div></div><div style="padding:18px 20px;"><p style="color:var(--gray-01);font-size:13px;line-height:1.7;margin:0 0 18px;">Every AI response travels through <strong style="color:var(--ey-dark);">7 invisible steps</strong> before reaching you</p><div style="display:flex;align-items:flex-start;gap:0;margin-bottom:18px;overflow-x:auto;padding-bottom:2px;justify-content:center;"><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,230,0,0.12);border:1.5px solid rgba(255,230,0,0.45);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></div><span style="color:rgba(255,230,0,0.9);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Prompt</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:linear-gradient(90deg,rgba(255,230,0,0.4),rgba(70,150,255,0.3));"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none" style="margin-bottom:0;"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.2)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(70,150,255,0.08);border:1.5px dashed rgba(70,150,255,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2"><path d="M4 7V4h16v3"/><path d="M9 20h6"/><path d="M12 4v16"/></svg></div><span style="color:rgba(70,150,255,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Tokens</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(0,200,100,0.08);border:1.5px dashed rgba(0,200,100,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6h-8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z"/><path d="M9 21h6"/></svg></div><span style="color:rgba(0,200,100,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">LLM</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,125,30,0.08);border:1.5px dashed rgba(255,125,30,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-orange)" stroke-width="2"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg></div><span style="color:rgba(255,125,30,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">RAG</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(70,150,255,0.08);border:1.5px dashed rgba(70,150,255,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg></div><span style="color:rgba(70,150,255,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Output</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(255,65,54,0.08);border:1.5px dashed rgba(255,65,54,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg></div><span style="color:rgba(255,65,54,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">Risk?</span></div><div style="display:flex;align-items:center;padding-bottom:19px;"><div style="width:18px;height:1px;background:var(--card-border);"></div><svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4h6M4 1l3 3-3 3" stroke="rgba(46,46,56,0.15)" stroke-width="1.2" stroke-linecap="round"/></svg></div><div style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;"><div style="width:36px;height:36px;border-radius:50%;background:rgba(0,200,100,0.08);border:1.5px dashed rgba(0,200,100,0.35);display:flex;align-items:center;justify-content:center;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></div><span style="color:rgba(0,200,100,0.7);font-size:7px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;">You</span></div></div></div></div>\`;
      chatEl.appendChild(exp);
      var acc = document.createElement('div');
      acc.innerHTML = buildInsideAccordion();
      chatEl.appendChild(acc);
      chatEl.scrollTop = chatEl.scrollHeight;
    }, 700);

  } else if (beat === 'risk') {
    barEl.style.display = 'none';
    addMessage('SYS', \`<div style="padding:18px;background:rgba(70,150,255,0.04);border:1px solid rgba(70,150,255,0.15);border-radius:12px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg><span style="color:var(--accent-blue);font-size:13px;font-weight:700;">AI Generates a Response</span></div><div style="background:var(--off-white);border-radius:10px;padding:16px;margin-bottom:14px;"><div style="color:var(--text-dim);font-size:10px;font-weight:600;letter-spacing:1px;margin-bottom:10px;">EXAMPLE OUTPUT</div><p style="color:var(--gray-01);font-size:13px;line-height:1.8;margin:0;border-left:3px solid rgba(70,150,255,0.4);padding-left:12px;">GST registration may be required in multiple states depending on the business model. Interstate supplies generally attract IGST. E-commerce operators may have additional compliance requirements including collection and reporting obligations. Businesses should evaluate registration, invoicing, return filing and place-of-supply considerations.</p></div><div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;padding:10px 14px;background:rgba(70,150,255,0.07);border:1px solid rgba(70,150,255,0.2);border-radius:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-blue);font-size:12px;font-weight:700;">Output = AI's generated answer</span></div><div style="padding:10px 14px;background:rgba(255,230,0,0.04);border:1px solid rgba(255,230,0,0.12);border-left:3px solid rgba(255,230,0,0.35);border-radius:8px;display:flex;align-items:flex-start;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div><div style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:3px;">Everyday Analogy - Like receiving the first draft of a report from a junior team member.</div></div></div></div>\`);
    addMessage('AI', \`<div style="padding:16px 18px;background:rgba(255,65,54,0.04);border:1px solid rgba(255,65,54,0.12);border-radius:12px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg><span style="color:var(--accent-red);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Hallucination &#8212; Now Comes the Important Part</span></div><div style="background:rgba(255,65,54,0.06);border:1px solid rgba(255,65,54,0.15);border-radius:8px;padding:10px 14px;margin-bottom:12px;"><p style="color:var(--ey-dark);font-size:14px;font-weight:600;margin:0;">What Could Go Wrong?</p></div><p style="color:var(--text-secondary);font-size:13px;margin-bottom:8px;">Suppose the AI generates:</p><div style="background:rgba(255,65,54,0.08);border-left:3px solid var(--accent-red);padding:12px 14px;border-radius:0 8px 8px 0;margin-bottom:12px;"><p style="color:var(--accent-red);font-size:13px;font-style:italic;margin:0;animation:pulseRed 2s infinite;">&ldquo;Every online seller is required to register for GST in every Indian state where customers are located.&rdquo;</p></div><p style="color:var(--text-secondary);font-size:13px;margin-bottom:2px;">This sounds professional.</p><p style="color:var(--text-secondary);font-size:13px;margin-bottom:2px;">It sounds confident.</p><p style="color:var(--text-muted);font-size:13px;margin-bottom:14px;">But it may not be accurate.</p><div style="border-top:1px solid rgba(46,46,56,0.06);padding-top:12px;margin-bottom:12px;"><p style="color:var(--ey-dark);font-size:13px;font-weight:600;margin-bottom:4px;">What Happened?</p><p style="color:var(--text-muted);font-size:13px;margin:0;">The AI filled gaps with something that sounded plausible.</p></div><div style="background:rgba(255,65,54,0.08);border:1px solid rgba(255,65,54,0.2);border-radius:8px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><span style="color:var(--accent-red);font-size:13px;font-weight:700;">Hallucination = A confident answer that may be wrong</span></div><div style="padding:10px 14px;background:rgba(255,230,0,0.04);border:1px solid rgba(255,230,0,0.12);border-left:3px solid rgba(255,230,0,0.35);border-radius:8px;margin-bottom:14px;display:flex;align-items:flex-start;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div><div style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:3px;">Everyday Analogy - Like a student who doesn&#x27;t know the answer in an exam but writes something that sounds convincing.</div></div></div><div style="display:flex;flex-direction:column;align-items:stretch;"><div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:rgba(0,200,100,0.06);border:1px solid rgba(0,200,100,0.15);border-radius:8px 8px 0 0;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:12px;font-weight:600;">Question</span></div><div style="width:2px;height:10px;background:rgba(46,46,56,0.1);margin-left:20px;"></div><div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:rgba(0,200,100,0.06);border:1px solid rgba(0,200,100,0.15);border-radius:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:12px;font-weight:600;">AI Process</span></div><div style="width:2px;height:10px;background:rgba(46,46,56,0.1);margin-left:20px;"></div><div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:rgba(0,200,100,0.06);border:1px solid rgba(0,200,100,0.15);border-radius:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:12px;font-weight:600;">Professional-Looking Response</span></div><div style="width:2px;height:10px;background:rgba(46,46,56,0.1);margin-left:20px;"></div><div style="display:flex;align-items:center;gap:10px;padding:8px 14px;background:rgba(255,65,54,0.06);border:1px solid rgba(255,65,54,0.2);border-radius:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-red)" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg><span style="color:var(--accent-red);font-size:12px;font-weight:600;">Factually Incorrect Statement</span></div></div></div>\`);

  } else if (beat === 'you') {
    barEl.style.display = 'none';
    addMessage('You', \`<div style="padding:16px 18px;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.12);border-radius:12px;"><div style="display:flex;align-items:center;gap:8px;margin-bottom:12px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg><span style="color:var(--accent-green);font-size:14px;font-weight:700;text-transform:uppercase;letter-spacing:1px;">Human in the Loop</span></div><div style="background:rgba(0,200,100,0.06);border:1px solid rgba(0,200,100,0.15);border-radius:8px;padding:10px 14px;margin-bottom:12px;"><p style="color:var(--text-dim);font-size:10px;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:4px;">What Happens Next?</p><p style="color:var(--ey-dark);font-size:14px;font-weight:600;margin:0;">The tax professional reviews the answer.</p></div><p style="color:var(--text-secondary);font-size:13px;margin-bottom:8px;">The professional:</p><div style="display:flex;flex-direction:column;gap:6px;margin-bottom:14px;"><div style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--text-secondary);font-size:13px;">Validates the facts</span></div><div style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--text-secondary);font-size:13px;">Checks current legislation</span></div><div style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--text-secondary);font-size:13px;">Verifies interpretations</span></div><div style="display:flex;align-items:center;gap:8px;padding:7px 12px;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.1);border-radius:6px;"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--text-secondary);font-size:13px;">Applies professional judgment</span></div></div><div style="background:rgba(0,200,100,0.06);border:1px solid rgba(0,200,100,0.15);border-left:3px solid rgba(0,200,100,0.4);border-radius:0 8px 8px 0;padding:10px 14px;margin-bottom:12px;"><p style="color:var(--accent-green);font-size:12px;font-weight:700;margin-bottom:4px;">Revised Response</p><p style="color:var(--text-secondary);font-size:13px;margin:0;">The AI-generated draft is corrected and refined before being relied upon.</p></div><div style="background:rgba(0,200,100,0.08);border:1px solid rgba(0,200,100,0.2);border-radius:8px;padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span style="color:var(--accent-green);font-size:13px;font-weight:700;">Human in the Loop = AI assists. Humans decide.</span></div><div style="padding:10px 14px;background:rgba(255,230,0,0.04);border:1px solid rgba(255,230,0,0.12);border-left:3px solid rgba(255,230,0,0.35);border-radius:8px;display:flex;align-items:flex-start;gap:8px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex-shrink:0;margin-top:1px;"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div><div style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;letter-spacing:0.8px;text-transform:uppercase;margin-bottom:3px;">Everyday Analogy - Like GPS suggesting a route. You are still responsible for driving the car.</div></div></div></div>\`);

  } else if (beat === 'better') {
    barEl.style.display = 'none';
    addMessage('AI', \`<div style="padding:22px;background:linear-gradient(160deg,rgba(255,230,0,0.04) 0%,rgba(0,200,100,0.04) 100%);border:1px solid var(--gray-02);border-radius:16px;animation:fadeInMsg 0.5s ease;"><div style="text-align:center;margin-bottom:20px;padding-bottom:16px;border-bottom:1px solid rgba(46,46,56,0.06);"><div style="display:inline-flex;align-items:center;gap:6px;background:rgba(255,230,0,0.07);border:1px solid rgba(255,230,0,0.18);border-radius:20px;padding:4px 14px;margin-bottom:10px;"><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--eyebrow-gold)" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg><span style="color:var(--eyebrow-gold);font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;">THE FULL JOURNEY</span></div><div style="color:var(--ey-dark);font-size:16px;font-weight:700;margin-bottom:4px;">Inside Every AI Conversation</div><div style="color:var(--text-muted);font-size:12px;">Every response you receive passes through all of these layers.</div></div><div style="display:flex;flex-direction:column;gap:3px;"><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--ey-yellow);background:rgba(255,230,0,0.1);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;border-radius:50%;background:var(--ey-yellow);"></div></div><div style="flex:1;display:flex;align-items:center;background:rgba(255,230,0,0.04);border:1px solid rgba(255,230,0,0.1);border-radius:8px;overflow:hidden;"><div style="background:rgba(255,230,0,0.1);padding:8px 12px;width:140px;border-right:1px solid rgba(255,230,0,0.1);"><span style="color:var(--eyebrow-gold);font-size:11px;font-weight:700;">PROMPT</span></div><div style="padding:8px 12px;"><span style="color:var(--text-secondary);font-size:12px;">You asked</span></div></div></div><div style="width:1px;height:6px;background:var(--card-border);margin-left:9px;"></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--accent-blue);background:rgba(70,150,255,0.1);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;border-radius:50%;background:var(--accent-blue);"></div></div><div style="flex:1;display:flex;align-items:center;background:rgba(70,150,255,0.04);border:1px solid rgba(70,150,255,0.1);border-radius:8px;overflow:hidden;"><div style="background:rgba(70,150,255,0.1);padding:8px 12px;width:140px;border-right:1px solid rgba(70,150,255,0.1);"><span style="color:var(--accent-blue);font-size:11px;font-weight:700;">TOKENS</span></div><div style="padding:8px 12px;"><span style="color:var(--text-secondary);font-size:12px;">AI read</span></div></div></div><div style="width:1px;height:6px;background:var(--card-border);margin-left:9px;"></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--accent-green);background:rgba(0,200,100,0.1);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;border-radius:50%;background:var(--accent-green);"></div></div><div style="flex:1;display:flex;align-items:center;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.1);border-radius:8px;overflow:hidden;"><div style="background:rgba(0,200,100,0.1);padding:8px 12px;width:140px;border-right:1px solid rgba(0,200,100,0.1);"><span style="color:var(--accent-green);font-size:11px;font-weight:700;">LLM</span></div><div style="padding:8px 12px;"><span style="color:var(--text-secondary);font-size:12px;">AI understood</span></div></div></div><div style="width:1px;height:6px;background:var(--card-border);margin-left:9px;"></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--accent-purple);background:rgba(180,0,255,0.1);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;border-radius:50%;background:var(--accent-purple);"></div></div><div style="flex:1;display:flex;align-items:center;background:rgba(180,0,255,0.04);border:1px solid rgba(180,0,255,0.1);border-radius:8px;overflow:hidden;"><div style="background:rgba(180,0,255,0.1);padding:8px 12px;width:140px;border-right:1px solid rgba(180,0,255,0.1);"><span style="color:var(--accent-purple);font-size:11px;font-weight:700;">KNOWLEDGE LAYER</span></div><div style="padding:8px 12px;"><span style="color:var(--text-secondary);font-size:12px;">AI knew where to look</span></div></div></div><div style="width:1px;height:6px;background:var(--card-border);margin-left:9px;"></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--accent-orange);background:rgba(255,125,30,0.1);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;border-radius:50%;background:var(--accent-orange);"></div></div><div style="flex:1;display:flex;align-items:center;background:rgba(255,125,30,0.04);border:1px solid rgba(255,125,30,0.1);border-radius:8px;overflow:hidden;"><div style="background:rgba(255,125,30,0.1);padding:8px 12px;width:140px;border-right:1px solid rgba(255,125,30,0.1);"><span style="color:var(--accent-orange);font-size:11px;font-weight:700;">RAG</span></div><div style="padding:8px 12px;"><span style="color:var(--text-secondary);font-size:12px;">AI checked</span></div></div></div><div style="width:1px;height:6px;background:var(--card-border);margin-left:9px;"></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--accent-blue);background:rgba(70,150,255,0.1);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;border-radius:50%;background:var(--accent-blue);"></div></div><div style="flex:1;display:flex;align-items:center;background:rgba(70,150,255,0.04);border:1px solid rgba(70,150,255,0.1);border-radius:8px;overflow:hidden;"><div style="background:rgba(70,150,255,0.1);padding:8px 12px;width:140px;border-right:1px solid rgba(70,150,255,0.1);"><span style="color:var(--accent-blue);font-size:11px;font-weight:700;">OUTPUT</span></div><div style="padding:8px 12px;"><span style="color:var(--text-secondary);font-size:12px;">AI drafted</span></div></div></div><div style="width:1px;height:6px;background:var(--card-border);margin-left:9px;"></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--accent-red);background:rgba(255,65,54,0.1);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;border-radius:50%;background:var(--accent-red);"></div></div><div style="flex:1;display:flex;align-items:center;background:rgba(255,65,54,0.04);border:1px solid rgba(255,65,54,0.1);border-radius:8px;overflow:hidden;"><div style="background:rgba(255,65,54,0.1);padding:8px 12px;width:140px;border-right:1px solid rgba(255,65,54,0.1);"><span style="color:var(--accent-red);font-size:11px;font-weight:700;">HALLUCINATION</span></div><div style="padding:8px 12px;"><span style="color:var(--text-secondary);font-size:12px;">AI could still be wrong</span></div></div></div><div style="width:1px;height:6px;background:var(--card-border);margin-left:9px;"></div><div style="display:flex;align-items:center;gap:10px;"><div style="width:20px;height:20px;border-radius:50%;border:2px solid var(--accent-green);background:rgba(0,200,100,0.1);flex-shrink:0;display:flex;align-items:center;justify-content:center;"><div style="width:5px;height:5px;border-radius:50%;background:var(--accent-green);"></div></div><div style="flex:1;display:flex;align-items:center;background:rgba(0,200,100,0.04);border:1px solid rgba(0,200,100,0.1);border-radius:8px;overflow:hidden;"><div style="background:rgba(0,200,100,0.1);padding:8px 12px;width:140px;border-right:1px solid rgba(0,200,100,0.1);"><span style="color:var(--accent-green);font-size:11px;font-weight:700;">HUMAN IN THE LOOP</span></div><div style="padding:8px 12px;"><span style="color:var(--text-secondary);font-size:12px;">Professional judgment ensured accuracy</span></div></div></div></div><div style="margin-top:16px;padding-top:14px;border-top:1px solid rgba(46,46,56,0.06);text-align:center;"><span style="color:var(--text-muted);font-size:12px;font-style:italic;">Now you know what happens inside every AI response.</span></div></div>\`);
    document.getElementById('demo-continue-btn').style.display = 'none';
  }
}
<\/script>





<!-- ======== CHEAT SHEET ======== -->
<section class="section surface-neutral" id="cheatsheet" style="padding:100px 60px;">
  <h2>Think Beyond Drafting and Summarisation</h2>
  <p class="section-subtitle">Generative AI can be your smart thought partner. Tap a capability to see it in action.</p>

  <div class="cheat-stack">

    <!-- ROW 1: CREATE (Figma 3512:4223) -->
    <div class="cheat-row" style="--cheat-accent: var(--ey-yellow); --cheat-accent-soft: rgba(255,230,0,0.1); --cheat-accent-border: rgba(255,230,0,0.3); --cheat-accent-text: var(--eyebrow-gold);">
      <div class="cheat-row-label">
        <div class="cheat-row-brand">
          <div class="cheat-row-icon">
            <img src="/icons/cheat-create-star.svg" alt="" width="18" height="18">
          </div>
          <div class="cheat-row-copy">
            <span class="cheat-row-eyebrow">Create</span>
            <p class="cheat-row-desc">Produce new content from your instructions.</p>
          </div>
        </div>
      </div>
      <div class="cheat-items">
        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-create-generate', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Generate</span><span class="cheat-item-desc">Create something new from instructions</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-create-generate" class="cheat-item-example" hidden><p>&ldquo;Draft a response to a tax authority notice based on the facts provided&rdquo;</p></div>

        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-create-transform', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Transform</span><span class="cheat-item-desc">Convert information from one format into another</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-create-transform" class="cheat-item-example" hidden><p>&ldquo;Convert this GST reconciliation table into a user-ready summary.&rdquo;</p></div>

        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-create-synthesize', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Synthesize</span><span class="cheat-item-desc">Combine information from multiple sources into one view</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-create-synthesize" class="cheat-item-example" hidden><p>&ldquo;Combine the judgment, circular and statutory provisions into a consolidated briefing note.&rdquo;</p></div>
      </div>
    </div>

    <!-- ROW 2: UNDERSTAND -->
    <div class="cheat-row" style="--cheat-accent: var(--accent-blue); --cheat-accent-soft: rgba(70,150,255,0.1); --cheat-accent-border: rgba(70,150,255,0.3); --cheat-accent-text: var(--accent-blue);">
      <div class="cheat-row-label">
        <div class="cheat-row-brand">
          <div class="cheat-row-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
          </div>
          <div class="cheat-row-copy">
            <span class="cheat-row-eyebrow">Understand</span>
            <p class="cheat-row-desc">Make sense of information that already exists.</p>
          </div>
        </div>
      </div>
      <div class="cheat-items">
        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-understand-query', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Query</span><span class="cheat-item-desc">Ask questions and get targeted answers</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-understand-query" class="cheat-item-example" hidden><p>&ldquo;What is the time limit for filing a revised return?&rdquo;</p></div>

        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-understand-summarise', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Summarise</span><span class="cheat-item-desc">Condense large volumes of information into key points</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-understand-summarise" class="cheat-item-example" hidden><p>&ldquo;Summarize this tax judgment in five key takeaways.&rdquo;</p></div>

        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-understand-explain', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Explain</span><span class="cheat-item-desc">Simplify complex topics for a specific audience</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-understand-explain" class="cheat-item-example" hidden><p>&ldquo;Explain POEM in simple language for a CFO presentation.&rdquo;</p></div>
      </div>
    </div>

    <!-- ROW 3: ORGANIZE -->
    <div class="cheat-row" style="--cheat-accent: var(--accent-green); --cheat-accent-soft: rgba(0,200,100,0.1); --cheat-accent-border: rgba(0,200,100,0.3); --cheat-accent-text: var(--accent-green);">
      <div class="cheat-row-label">
        <div class="cheat-row-brand">
          <div class="cheat-row-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
          </div>
          <div class="cheat-row-copy">
            <span class="cheat-row-eyebrow">Organize</span>
            <p class="cheat-row-desc">Structure and compare what you already have.</p>
          </div>
        </div>
      </div>
      <div class="cheat-items">
        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-organize-extract', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Extract</span><span class="cheat-item-desc">Pull specific information from documents</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-organize-extract" class="cheat-item-example" hidden><p>&ldquo;Extract TDS amounts, PANs and section references from Form 26AS.&rdquo;</p></div>

        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-organize-classify', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Classify</span><span class="cheat-item-desc">Categorise information into predefined groups</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-organize-classify" class="cheat-item-example" hidden><p>&ldquo;Classify expenses as capital or revenue based on the descriptions provided.&rdquo;</p></div>

        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-organize-compare', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Compare</span><span class="cheat-item-desc">Highlight similarities, differences and trade-offs</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-organize-compare" class="cheat-item-example" hidden><p>&ldquo;Compare the India&#8211;Singapore and India&#8211;Mauritius treaties for capital gains taxation.&rdquo;</p></div>
      </div>
    </div>

    <!-- ROW 4: THINK -->
    <div class="cheat-row" style="--cheat-accent: var(--accent-purple); --cheat-accent-soft: rgba(180,0,255,0.1); --cheat-accent-border: rgba(180,0,255,0.3); --cheat-accent-text: var(--accent-purple);">
      <div class="cheat-row-label">
        <div class="cheat-row-brand">
          <div class="cheat-row-icon">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-purple)" stroke-width="2"><path d="M12 2a7 7 0 0 1 7 7c0 2.5-1.5 4.5-3 6h-8c-1.5-1.5-3-3.5-3-6a7 7 0 0 1 7-7z"/><path d="M9 21h6M10 17h4"/></svg>
          </div>
          <div class="cheat-row-copy">
            <span class="cheat-row-eyebrow">Think</span>
            <p class="cheat-row-desc">Weigh judgment calls and reason toward a recommendation.</p>
          </div>
        </div>
      </div>
      <div class="cheat-items">
        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-think-analyse', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Analyse</span><span class="cheat-item-desc">Identify patterns, risks and insights</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-think-analyse" class="cheat-item-example" hidden><p>&ldquo;Analyze these transactions and highlight potential transfer pricing risk areas.&rdquo;</p></div>

        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-think-evaluate', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Evaluate</span><span class="cheat-item-desc">Assess strengths, weaknesses and potential issues</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-think-evaluate" class="cheat-item-example" hidden><p>&ldquo;Evaluate the risks and support available for this tax position.&rdquo;</p></div>

        <button type="button" class="cheat-item-toggle" onclick="toggleCheat('cheat-think-advise', this)" aria-expanded="false">
          <span class="cheat-item-text"><span class="cheat-item-verb">Advise</span><span class="cheat-item-desc">Suggest possible approaches or next steps</span></span>
          <img class="cheat-chev" src="/icons/cheat-chevron.svg" alt="" width="14" height="14">
        </button>
        <div id="cheat-think-advise" class="cheat-item-example" hidden><p>&ldquo;Suggest factors to consider when evaluating a cross-border restructuring.&rdquo;</p></div>
      </div>
    </div>

  </div>
</section>

<style>
.cheat-stack {
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
/* Figma 3512:4223 — accent outline + thick left rail */
.cheat-row {
  --cheat-accent: var(--ey-yellow);
  --cheat-accent-soft: rgba(255,230,0,0.1);
  --cheat-accent-border: rgba(255,230,0,0.3);
  --cheat-accent-text: var(--eyebrow-gold);
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 28px;
  align-items: center;
  background: var(--white);
  border: 1px solid var(--cheat-accent);
  border-left-width: 4px;
  border-radius: 16px;
  padding: 29px 31px 29px 34px;
}
.cheat-row-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 88px;
  align-self: stretch;
  text-align: left;
}
.cheat-row-brand {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  min-height: 38px;
}
.cheat-row-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid var(--cheat-accent-border);
  background: var(--cheat-accent-soft);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.cheat-row-icon img,
.cheat-row-icon svg {
  width: 18px;
  height: 18px;
  display: block;
}
.cheat-row-copy {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 0;
  flex: 1;
  text-align: left;
  align-items: flex-start;
}
.cheat-row-eyebrow {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 15.6px;
  color: var(--cheat-accent-text);
  text-align: left;
  display: block;
  width: 100%;
}
.cheat-row-desc {
  color: #747480;
  font-size: 13px;
  line-height: 19.5px;
  margin: 0;
  text-align: left;
  width: 100%;
}
.cheat-items {
  display: flex;
  flex-direction: column;
  min-width: 0;
}
.cheat-item-toggle {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  background: transparent;
  border: none;
  border-top: 1px solid #c4c4cd;
  padding: 15px 4px 14px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
}
.cheat-items .cheat-item-toggle:first-of-type {
  border-top: none;
  padding-top: 0;
}
.cheat-item-toggle:hover { background: rgba(46,46,56,0.02); }
.cheat-item-text {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
  min-width: 0;
}
.cheat-item-verb {
  font-size: 14px;
  font-weight: 700;
  color: #2e2e38;
  line-height: 22.4px;
}
.cheat-item-desc {
  font-size: 12.5px;
  color: #747480;
  line-height: 20px;
}
.cheat-chev {
  width: 14px;
  height: 14px;
  flex-shrink: 0;
  transition: transform 0.25s ease;
  display: block;
}
.cheat-item-toggle[aria-expanded="true"] .cheat-chev { transform: rotate(180deg); }
.cheat-item-example {
  padding: 2px 4px 14px;
  margin-top: -4px;
}
.cheat-item-example p {
  margin: 0;
  padding: 10px 14px;
  background: var(--off-white);
  border-left: 3px solid var(--cheat-accent);
  border-radius: 0 8px 8px 0;
  font-size: 13px;
  font-style: italic;
  color: #747480;
  line-height: 1.5;
}
@media (max-width: 720px) {
  .cheat-row {
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 22px 20px;
    align-items: stretch;
  }
  .cheat-row-label {
    min-height: 0;
    padding-bottom: 12px;
    border-bottom: 1px solid #c4c4cd;
  }
}
</style>
<script>
function toggleCheat(id, btn) {
  var body = document.getElementById(id);
  if (!body) return;
  var isOpen = !body.hidden;
  body.hidden = isOpen;
  btn.setAttribute('aria-expanded', String(!isOpen));
}
<\/script>


<section class="section surface-dark gva-section" id="genai-vs-agents" aria-labelledby="gva-heading" data-node-id="3187:3460">
  <p class="gva-label">Autonomy Spectrum</p>
  <h2 id="gva-heading" class="gva-title">LLM vs Agent vs Agentic Workflow</h2>

  <div class="gva-spectrum">
    <button type="button" class="gva-spectrum-card" data-tone="blue" data-gva-open="llm" aria-haspopup="dialog">
      <div class="gva-spectrum-head">
        <p class="gva-spectrum-title">LLM / GenAI</p>
        <span class="gva-badge">Generate</span>
      </div>
      <div class="gva-spectrum-body">
        <p class="gva-spectrum-desc">A static knowledge generator that responds immediately to a prompt. No actions, no long-term memory.</p>
        <div class="gva-flow">Prompt → Output</div>
        <div>
          <p class="gva-best-label">Best for</p>
          <p class="gva-best-value">Summarization &amp; Drafting</p>
        </div>
        <span class="gva-card-cta">Open details →</span>
      </div>
    </button>

    <button type="button" class="gva-spectrum-card" data-tone="green" data-gva-open="agent" aria-haspopup="dialog">
      <div class="gva-spectrum-head">
        <p class="gva-spectrum-title">AI Agent</p>
        <span class="gva-badge">Act</span>
      </div>
      <div class="gva-spectrum-body">
        <p class="gva-spectrum-desc">Equipped with memory and tool access. Executes lookups, takes actions, and revises its plan.</p>
        <div class="gva-flow">Goal → Loop → Output</div>
        <div>
          <p class="gva-best-label">Best for</p>
          <p class="gva-best-value">Information Retrieval &amp; Task Actions</p>
        </div>
        <span class="gva-card-cta">Open details →</span>
      </div>
    </button>

    <button type="button" class="gva-spectrum-card" data-tone="orange" data-gva-open="agentic" aria-haspopup="dialog">
      <div class="gva-spectrum-head">
        <p class="gva-spectrum-title">Agentic Workflow</p>
        <span class="gva-badge">Orchestrate</span>
      </div>
      <div class="gva-spectrum-body">
        <p class="gva-spectrum-desc">A structured process loop of sequential tasks with integrated human-in-the-loop audit checks.</p>
        <div class="gva-flow">Agent A → Audit → Agent B</div>
        <div>
          <p class="gva-best-label">Best for</p>
          <p class="gva-best-value">Multi-Step Tax Filings</p>
        </div>
        <span class="gva-card-cta">Open details →</span>
      </div>
    </button>
  </div>

  <div class="gva-banner">
    <div class="gva-banner-icon" aria-hidden="true">
      <img src="/icons/book-open.svg" alt="" width="20" height="20">
    </div>
    <div>
      <p class="gva-banner-title">When to Use What?</p>
      <p class="gva-banner-body">Do not use a multi-agent system where a simple LLM draft fits. Match system autonomy strictly to operational audit tolerance. Click a card above for tax examples and when to use each level.</p>
    </div>
  </div>

  <!-- Modals — content from Foundational Concepts curriculum -->
  <div class="gva-modal" id="gva-modal" hidden>
    <div class="gva-modal-backdrop" data-gva-close tabindex="-1"></div>
    <div class="gva-modal-dialog" role="dialog" aria-modal="true" aria-labelledby="gva-modal-title" tabindex="-1">
      <div class="gva-modal-top">
        <div>
          <span class="gva-badge" id="gva-modal-badge">Generate</span>
          <h3 id="gva-modal-title">LLM / GenAI</h3>
        </div>
        <button type="button" class="gva-modal-close" data-gva-close aria-label="Close details">×</button>
      </div>
      <div class="gva-modal-content" id="gva-modal-content"></div>
    </div>
  </div>
</section>

<script>
(function initAutonomySpectrum() {
  var GVA = {
    llm: {
      tone: 'blue',
      badge: 'Generate',
      title: 'LLM / GenAI',
      image: '/llm.png',
      imageAlt: 'Large language model generating content',
      mantra: '“Tell me.”',
      blocks: [
        { type: 'lead', text: 'Answers questions and creates content. A static knowledge generator that responds immediately to a prompt — no actions, no long-term memory.' },
        { type: 'list', label: 'What it gives you', items: ['Answer', 'Draft', 'Summary', 'Email', 'Presentation content'] },
        { type: 'analogy', label: 'Think of it as', text: 'A knowledgeable assistant.' },
        { type: 'example', label: 'Example', quote: '"Summarize the GST implications for e-commerce sellers."', text: 'AI returns an answer.' },
        { type: 'list', label: 'Best used when', items: ['You need information', 'You need a draft', 'You need ideas'] },
        { type: 'cap', label: 'New capability introduced', text: 'Creates content' }
      ]
    },
    agent: {
      tone: 'green',
      badge: 'Act',
      title: 'AI Agent',
      image: '/ai.png',
      imageAlt: 'AI agent assisting with workplace tasks',
      mantra: '“Do it.”',
      blocks: [
        { type: 'lead', text: 'Not only answers — but also does things. Equipped with memory and tool access to execute lookups, take actions, and revise its plan.' },
        { type: 'list', label: 'What is added?', items: ['LLM capability', 'Access to tools', 'Ability to take actions'] },
        { type: 'analogy', label: 'Think of it as', text: 'A virtual team member.' },
        { type: 'example', label: 'Example', quote: 'Instead of only: "Summarize this GST notice"', text: 'The agent reads the notice, extracts key facts, drafts a summary, and stores it in the correct folder.' },
        { type: 'list', label: 'Best used when', items: ['Tasks are repetitive', 'Multiple actions are required', 'The process is still relatively simple'] },
        { type: 'cap', label: 'New capability introduced', text: 'Takes action' }
      ]
    },
    agentic: {
      tone: 'orange',
      badge: 'Orchestrate',
      title: 'Agentic Workflow',
      image: '/agentic.png',
      imageAlt: 'Agentic AI coordinating a multi-step workflow',
      mantra: '“Own it.”',
      blocks: [
        { type: 'lead', text: 'Manages an entire objective from start to finish. A structured process loop of sequential tasks with human-in-the-loop audit checks.' },
        { type: 'list', label: 'What is added?', items: ['LLM', 'Tools', 'Planning', 'Decision-making', 'Multi-step workflow management'] },
        { type: 'analogy', label: 'Think of it as', text: 'A project manager.' },
        { type: 'example', label: 'Example', quote: 'Goal: Prepare an initial response package for a GST notice.', text: 'Reviews the notice, identifies due dates, gathers documents, drafts response points, and creates a review package.' },
        { type: 'list', label: 'Best used when', items: ['Multiple steps are involved', 'Decisions need to be made', 'Several tasks must be coordinated'] },
        { type: 'cap', label: 'New capability introduced', text: 'Plans and coordinates work' }
      ]
    }
  };

  // Always re-query the live DOM — HMR / React re-inject can replace nodes.
  var lastFocus = null;

  function els() {
    return {
      modal: document.getElementById('gva-modal'),
      content: document.getElementById('gva-modal-content'),
      titleEl: document.getElementById('gva-modal-title'),
      badgeEl: document.getElementById('gva-modal-badge')
    };
  }

  function renderBlocks(data) {
    var html = '';
    html += '<img class="gva-modal-thumb" src="' + data.image + '" alt="' + data.imageAlt + '" width="672" height="160">';
    html += '<p style="margin:0;font-size:14px;font-weight:700;color:var(--ey-dark);">' + data.mantra + '</p>';
    data.blocks.forEach(function (b) {
      if (b.type === 'lead') {
        html += '<p style="margin:0;font-size:14px;line-height:1.55;color:var(--gray-01);">' + b.text + '</p>';
      } else if (b.type === 'list') {
        html += '<div class="gva-block"><p class="gva-block-label">' + b.label + '</p><ul class="gva-list">';
        b.items.forEach(function (it) { html += '<li>' + it + '</li>'; });
        html += '</ul></div>';
      } else if (b.type === 'analogy') {
        html += '<div class="gva-analogy"><p class="gva-block-label">' + b.label + '</p><p>' + b.text + '</p></div>';
      } else if (b.type === 'example') {
        html += '<div class="gva-block gva-example"><p class="gva-block-label">' + b.label + '</p>';
        html += '<p class="gva-quote">' + b.quote + '</p><p>' + b.text + '</p></div>';
      } else if (b.type === 'cap') {
        html += '<div class="gva-block"><p class="gva-block-label">' + b.label + '</p>';
        html += '<p style="margin:0;font-size:13px;font-weight:700;color:var(--ey-dark);">' + b.text + '</p></div>';
      }
    });
    return html;
  }

  function openModal(key) {
    var data = GVA[key];
    var e = els();
    if (!data || !e.modal || !e.content || !e.titleEl || !e.badgeEl) return;
    lastFocus = document.activeElement;
    e.badgeEl.textContent = data.badge;
    e.badgeEl.style.background = key === 'llm' ? '#4696FF' : key === 'agent' ? '#00C864' : '#FF7D1E';
    e.titleEl.textContent = data.title;
    e.content.innerHTML = renderBlocks(data);
    e.modal.hidden = false;
    document.body.classList.add('gva-modal-open');
    var closeBtn = e.modal.querySelector('.gva-modal-close');
    if (closeBtn) closeBtn.focus();
  }

  function closeModal() {
    var e = els();
    if (!e.modal || e.modal.hidden) return;
    e.modal.hidden = true;
    document.body.classList.remove('gva-modal-open');
    if (lastFocus && typeof lastFocus.focus === 'function') lastFocus.focus();
  }

  window.openGvaModal = openModal;
  window.closeGvaModal = closeModal;

  // Event delegation survives React replacing the card nodes on HMR.
  // Always call window.* so re-inits update the live handlers.
  if (!window.__gvaSpectrumDelegated) {
    window.__gvaSpectrumDelegated = true;
    document.addEventListener('click', function (ev) {
      var t = ev.target;
      if (!t || !t.closest) return;
      var openBtn = t.closest('[data-gva-open]');
      if (openBtn && typeof window.openGvaModal === 'function') {
        window.openGvaModal(openBtn.getAttribute('data-gva-open'));
        return;
      }
      if (t.closest('[data-gva-close]') && typeof window.closeGvaModal === 'function') {
        window.closeGvaModal();
      }
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && typeof window.closeGvaModal === 'function') {
        window.closeGvaModal();
      }
    });
  }
})();
<\/script>

<!-- ======== INTERACTIVE EXERCISES ======== -->
<section class="section surface-neutral quiz-section" id="quiz" style="padding:100px 60px;">
  <h2>Test Your Understanding</h2>
  <p class="section-subtitle">Two exercises to check what you have learned.</p>

  <!-- â”€â”€ EXERCISE 1: Match the Explanation â”€â”€ -->
  <div class="quiz-ex-panel">

    <div style="display:flex; align-items:center; gap:14px; margin-bottom:6px;">
      <div class="quiz-ex-icon is-yellow">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#B89B00" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="16" height="10" rx="2"/><path d="M18 10h2a2 2 0 0 1 0 4h-2"/><line x1="6" y1="12" x2="10" y2="12"/></svg>
      </div>
      <div>
        <div class="quiz-ex-eyebrow is-yellow">Exercise 1</div>
        <h3 style="color:var(--ey-dark); font-size:21px; font-weight:700; margin:0;">Match the Explanation</h3>
      </div>
    </div>
    <p style="color:var(--gray-01); font-size:13px; line-height:1.6; margin:0 0 28px; padding-left:52px;">Match each description to the correct term. Click a description to select it (it highlights in yellow), then click the matching term on the right.</p>

    <div style="display:grid; grid-template-columns:1fr 200px; gap:16px; align-items:start;">

      <!-- Left: Descriptions -->
      <div style="display:flex; flex-direction:column; gap:7px;">

                <div id="desc-A" class="quiz-desc" onclick="matchSelectDesc('A')">
          <span class="quiz-desc-letter">A</span>
          <span class="quiz-desc-text">Breaks your question into smaller pieces before processing it.</span>
          <span id="dcheck-A" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

                <div id="desc-B" class="quiz-desc" onclick="matchSelectDesc('B')">
          <span class="quiz-desc-letter">B</span>
          <span class="quiz-desc-text">A question or instruction given to the AI.</span>
          <span id="dcheck-B" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

                <div id="desc-C" class="quiz-desc" onclick="matchSelectDesc('C')">
          <span class="quiz-desc-letter">C</span>
          <span class="quiz-desc-text">Uses patterns learned from large amounts of text to generate responses.</span>
          <span id="dcheck-C" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

                <div id="desc-D" class="quiz-desc" onclick="matchSelectDesc('D')">
          <span class="quiz-desc-letter">D</span>
          <span class="quiz-desc-text">Retrieves relevant information before generating an answer.</span>
          <span id="dcheck-D" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

                <div id="desc-E" class="quiz-desc" onclick="matchSelectDesc('E')">
          <span class="quiz-desc-letter">E</span>
          <span class="quiz-desc-text">Produces an answer that sounds convincing but may be incorrect.</span>
          <span id="dcheck-E" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

                <div id="desc-F" class="quiz-desc" onclick="matchSelectDesc('F')">
          <span class="quiz-desc-letter">F</span>
          <span class="quiz-desc-text">Human review and judgment used to validate AI-generated outputs.</span>
          <span id="dcheck-F" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

                <div id="desc-G" class="quiz-desc" onclick="matchSelectDesc('G')">
          <span class="quiz-desc-letter">G</span>
          <span class="quiz-desc-text">Creates content such as summaries, emails, presentations or code.</span>
          <span id="dcheck-G" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

                <div id="desc-H" class="quiz-desc" onclick="matchSelectDesc('H')">
          <span class="quiz-desc-letter">H</span>
          <span class="quiz-desc-text">Can use tools and perform actions to complete a task.</span>
          <span id="dcheck-H" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

                <div id="desc-I" class="quiz-desc" onclick="matchSelectDesc('I')">
          <span class="quiz-desc-letter">I</span>
          <span class="quiz-desc-text">Can coordinate multiple steps, make decisions and work toward an objective.</span>
          <span id="dcheck-I" style="display:none; margin-left:auto; flex-shrink:0; padding-top:2px;"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 12 9 17 20 7"/></svg></span>
        </div>

      </div>

      <!-- Right: Term chips (shuffled order) -->
      <div style="display:flex; flex-direction:column; gap:7px;">
        <div id="term-Prompt" class="quiz-term" onclick="matchSelectTerm('Prompt')">Prompt</div>
        <div id="term-Tokens" class="quiz-term" onclick="matchSelectTerm('Tokens')">Tokens</div>
        <div id="term-Hallucination" class="quiz-term" onclick="matchSelectTerm('Hallucination')">Hallucination</div>
        <div id="term-RAG" class="quiz-term" onclick="matchSelectTerm('RAG')">RAG</div>
        <div id="term-AI-Agent" class="quiz-term" onclick="matchSelectTerm('AI Agent')">AI Agent</div>
        <div id="term-LLM" class="quiz-term" onclick="matchSelectTerm('LLM')">LLM</div>
        <div id="term-Agentic-AI" class="quiz-term" onclick="matchSelectTerm('Agentic AI')">Agentic AI</div>
        <div id="term-Human-in-the-Loop" class="quiz-term" onclick="matchSelectTerm('Human in the Loop')">Human in the Loop</div>
        <div id="term-Generative-AI" class="quiz-term" onclick="matchSelectTerm('Generative AI')">Generative AI</div>
      </div>

    </div>

    <!-- Result banner -->
    <div id="match-result" class="quiz-result is-match">
      <div style="display:flex; align-items:center; gap:10px; justify-content:center; flex-wrap:wrap;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent-green)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span style="color:var(--confident-black); font-size:15px; font-weight:700;">Complete — here&rsquo;s what you locked in:</span>
        <span class="quiz-result-score">9 / 9</span>
      </div>
      <p style="color:var(--gray-01); font-size:13px; text-align:center; margin:10px 0 16px;">You have a solid grasp of the core AI concepts.</p>
      <div style="text-align:center;">
        <button onclick="matchReset()" style="background:var(--ey-yellow); border:none; border-radius:4px; padding:8px 22px; color:var(--confident-black); font-size:12px; font-weight:700; cursor:pointer; font-family:inherit;">Try Again</button>
      </div>
    </div>

  </div>

  <!-- â”€â”€ EXERCISE 2: Can You Spot the AI? â”€â”€ -->
  <div class="quiz-ex-panel is-spot">


    <div style="display:flex; align-items:center; gap:14px; margin-bottom:6px;">
      <div class="quiz-ex-icon is-blue">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--accent-blue)" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="22" y1="12" x2="15" y2="12"/><line x1="9" y1="12" x2="2" y2="12"/><line x1="12" y1="2" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="22"/></svg>
      </div>
      <div>
        <div class="quiz-ex-eyebrow is-blue">Exercise 2</div>
        <h3 style="color:var(--ey-dark); font-size:21px; font-weight:700; margin:0;">Spot the Right Technology</h3>
      </div>
    </div>
    <p style="color:var(--gray-01); font-size:13px; line-height:1.6; margin:0 0 24px; padding-left:52px;">For each scenario, select the AI technology that best describes what is happening.</p>

    <div class="quiz-scorebar">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--gray-01)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <span style="color:var(--gray-01); font-size:12px;">Score:</span>
      <span id="spot-score-val">0 / 0</span>
      <span style="color:var(--gray-01); font-size:12px;">correct</span>
    </div>

    <!-- Scenarios 1-5 -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; margin-bottom:20px;">

      <div id="sc1" class="quiz-spot-card">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span class="quiz-spot-num">1</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A traffic signal automatically changes from green to red based on programmed timing rules.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc1','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc1','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc1','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc1','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc1','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc1-reveal" class="spot-reveal"><strong>Artificial Intelligence</strong></div>
      </div>

      <div id="sc2" class="quiz-spot-card">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span class="quiz-spot-num">2</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A shopping app recommends products based on a customer's previous purchases.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc2','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc2','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc2','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc2','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc2','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc2-reveal" class="spot-reveal"><strong>Machine Learning</strong></div>
      </div>

      <div id="sc3" class="quiz-spot-card">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span class="quiz-spot-num">3</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A smartphone unlocks when it recognizes its owner's face.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc3','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc3','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc3','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc3','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc3','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc3-reveal" class="spot-reveal"><strong>Deep Learning</strong></div>
      </div>

      <div id="sc4" class="quiz-spot-card">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span class="quiz-spot-num">4</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A user asks Copilot to draft an email explaining GST implications.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc4','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc4','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc4','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc4','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc4','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc4-reveal" class="spot-reveal"><strong>Generative AI</strong></div>
      </div>

      <div id="sc5" style="background:var(--white); border:1px solid rgba(255,255,255,0.07); border-radius:10px; padding:16px 18px; grid-column:1/-1;">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span class="quiz-spot-num">5</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A system monitors tax notices, identifies deadlines, gathers supporting documents and prepares a review package.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc5','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc5','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc5','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc5','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc5','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc5-reveal" class="spot-reveal"><strong>Agentic AI</strong></div>
      </div>

    </div>

    <!-- Tricky Scenarios divider -->
    <div style="display:flex; align-items:center; gap:12px; margin:4px 0 20px;">
      <div style="flex:1; height:1px; background:var(--white);"></div>
      <div style="display:flex; align-items:center; gap:7px; background:rgba(255,107,107,0.07); border:1px solid rgba(255,107,107,0.18); border-radius:20px; padding:5px 14px;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#FF4136" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        <span style="color:#FF4136; font-size:11px; font-weight:700; text-transform:uppercase; letter-spacing:1.5px;">Tricky Scenarios</span>
      </div>
      <div style="flex:1; height:1px; background:var(--white);"></div>
    </div>

    <!-- Scenarios 6-10 -->
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">

      <div id="sc6" style="background:var(--white); border:1px solid rgba(255,107,107,0.12); border-radius:10px; padding:16px 18px;">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span style="background:rgba(255,107,107,0.1); color:#FF4136; font-size:11px; font-weight:700; border-radius:5px; padding:2px 7px; flex-shrink:0; margin-top:2px;">6</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A chatbot answers questions from a company's HR policy documents.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc6','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc6','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc6','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc6','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc6','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc6-reveal" class="spot-reveal">
          <strong>Generative AI</strong>
          <p class="why">Many people select Agentic AI because it is answering questions. However, it is still primarily generating responses rather than managing a process.</p>
        </div>
      </div>

      <div id="sc7" style="background:var(--white); border:1px solid rgba(255,107,107,0.12); border-radius:10px; padding:16px 18px;">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span style="background:rgba(255,107,107,0.1); color:#FF4136; font-size:11px; font-weight:700; border-radius:5px; padding:2px 7px; flex-shrink:0; margin-top:2px;">7</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A bank detects unusual spending activity on a credit card.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc7','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc7','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc7','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc7','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc7','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc7-reveal" class="spot-reveal">
          <strong>Machine Learning</strong>
          <p class="why">The system is recognizing patterns from historical transaction data, not generating content.</p>
        </div>
      </div>

      <div id="sc8" style="background:var(--white); border:1px solid rgba(255,107,107,0.12); border-radius:10px; padding:16px 18px;">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span style="background:rgba(255,107,107,0.1); color:#FF4136; font-size:11px; font-weight:700; border-radius:5px; padding:2px 7px; flex-shrink:0; margin-top:2px;">8</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A system extracts values from scanned invoices with different formats and layouts.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc8','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc8','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc8','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc8','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc8','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc8-reveal" class="spot-reveal">
          <strong>Deep Learning</strong>
          <p class="why">This is primarily pattern recognition across diverse document layouts rather than content generation.</p>
        </div>
      </div>

      <div id="sc9" style="background:var(--white); border:1px solid rgba(255,107,107,0.12); border-radius:10px; padding:16px 18px;">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span style="background:rgba(255,107,107,0.1); color:#FF4136; font-size:11px; font-weight:700; border-radius:5px; padding:2px 7px; flex-shrink:0; margin-top:2px;">9</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A user uploads a GST notice and asks AI to summarize the key issues.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc9','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc9','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc9','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc9','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc9','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc9-reveal" class="spot-reveal">
          <strong>Generative AI</strong>
          <p class="why">It is summarizing content, not taking autonomous actions or managing a multi-step workflow.</p>
        </div>
      </div>

      <div id="sc10" style="background:var(--white); border:1px solid rgba(255,107,107,0.12); border-radius:10px; padding:16px 18px; grid-column:1/-1;">
        <div style="display:flex; align-items:flex-start; gap:9px; margin-bottom:12px;">
          <span style="background:rgba(255,107,107,0.1); color:#FF4136; font-size:11px; font-weight:700; border-radius:5px; padding:2px 7px; flex-shrink:0; margin-top:2px;">10</span>
          <p style="color:var(--ey-dark); font-size:13px; line-height:1.6; margin:0;">A virtual assistant receives a goal, reviews a notice, checks internal guidance, drafts responses, requests missing documents and updates a tracker automatically.</p>
        </div>
        <div style="display:flex; flex-wrap:wrap; gap:7px;">
          <button class="spot-btn" data-val="AI" onclick="spotAnswer('sc10','AI')">Artificial Intelligence</button>
          <button class="spot-btn" data-val="ML" onclick="spotAnswer('sc10','ML')">Machine Learning</button>
          <button class="spot-btn" data-val="DL" onclick="spotAnswer('sc10','DL')">Deep Learning</button>
          <button class="spot-btn" data-val="GenAI" onclick="spotAnswer('sc10','GenAI')">Generative AI</button>
          <button class="spot-btn" data-val="AgenticAI" onclick="spotAnswer('sc10','AgenticAI')">Agentic AI</button>
        </div>
        <div id="sc10-reveal" class="spot-reveal"><strong>Agentic AI</strong></div>
      </div>

    </div>

    <!-- Final result -->
    <div id="spot-final" class="quiz-result is-spot">
      <div style="display:flex; align-items:center; gap:10px; justify-content:center; flex-wrap:wrap;">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--confident-black)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span style="color:var(--confident-black); font-size:15px; font-weight:700;">Complete — here&rsquo;s what we found:</span>
        <span id="spot-final-score" class="quiz-result-score">0/10</span>
      </div>
      <p style="color:var(--gray-01); font-size:13px; margin:10px 0 0;">Understanding when each technology applies is the first step to using AI effectively.</p>
    </div>

    <script>
      var spotCorrect = {
        'sc1':'AI','sc2':'ML','sc3':'DL','sc4':'GenAI','sc5':'AgenticAI',
        'sc6':'GenAI','sc7':'ML','sc8':'DL','sc9':'GenAI','sc10':'AgenticAI'
      };
      var spotScore = 0;
      var spotAnswered = 0;

      function spotAnswer(cardId, chosen) {
        var card = document.getElementById(cardId);
        if (card.dataset.answered) return;
        var correct = spotCorrect[cardId];
        var btns = card.querySelectorAll('.spot-btn');
        btns.forEach(function(btn) {
          btn.disabled = true;
          if (btn.dataset.val === correct) {
            btn.classList.add('is-correct');
          } else if (btn.dataset.val === chosen && chosen !== correct) {
            btn.classList.add('is-wrong');
          } else {
            btn.style.opacity = '0.35';
          }
        });
        document.getElementById(cardId + '-reveal').style.display = 'block';
        card.dataset.answered = '1';
        spotAnswered++;
        if (chosen === correct) spotScore++;
        document.getElementById('spot-score-val').textContent = spotScore + ' / ' + spotAnswered;
        if (spotAnswered === 10) {
          var banner = document.getElementById('spot-final');
          document.getElementById('spot-final-score').textContent = spotScore + ' / 10';
          banner.style.display = 'block';
          banner.classList.add('is-visible');
          var score = banner.querySelector('.quiz-result-score');
          if (score) { score.style.animation = 'none'; void score.offsetWidth; score.style.animation = ''; }
        }
      }
    <\/script>

  </div>

  <script>
    // ===== MATCH THE EXPLANATION GAME =====
    var matchSelected = null;
    var matchCount = 0;
    var matchAnswers = {
      'A': 'Tokens',
      'B': 'Prompt',
      'C': 'LLM',
      'D': 'RAG',
      'E': 'Hallucination',
      'F': 'Human in the Loop',
      'G': 'Generative AI',
      'H': 'AI Agent',
      'I': 'Agentic AI'
    };
    var termSlugMap = {
      'Tokens':            'Tokens',
      'Prompt':            'Prompt',
      'LLM':               'LLM',
      'RAG':               'RAG',
      'Hallucination':     'Hallucination',
      'Human in the Loop': 'Human-in-the-Loop',
      'Generative AI':     'Generative-AI',
      'AI Agent':          'AI-Agent',
      'Agentic AI':        'Agentic-AI'
    };

    function matchSelectDesc(letter) {
      var el = document.getElementById('desc-' + letter);
      if (el.dataset.matched) return;
      if (matchSelected === letter) {
        el.classList.remove('is-selected');
        matchSelected = null;
        return;
      }
      if (matchSelected) {
        var prev = document.getElementById('desc-' + matchSelected);
        if (prev && !prev.dataset.matched) prev.classList.remove('is-selected');
      }
      matchSelected = letter;
      el.classList.add('is-selected');
    }

    function matchSelectTerm(term) {
      if (!matchSelected) return;
      var slug   = termSlugMap[term];
      var termEl = document.getElementById('term-' + slug);
      var descEl = document.getElementById('desc-' + matchSelected);
      if (!termEl || termEl.dataset.matched || !descEl) return;

      if (matchAnswers[matchSelected] === term) {
        descEl.classList.remove('is-selected');
        descEl.classList.add('is-matched');
        descEl.dataset.matched = '1';
        document.getElementById('dcheck-' + matchSelected).style.display = 'inline';
        termEl.classList.add('is-matched');
        termEl.dataset.matched = '1';
        matchSelected = null;
        matchCount++;
        if (matchCount === 9) {
          var banner = document.getElementById('match-result');
          banner.style.display = 'block';
          banner.classList.add('is-visible');
          var score = banner.querySelector('.quiz-result-score');
          if (score) { score.style.animation = 'none'; void score.offsetWidth; score.style.animation = ''; }
        }
      } else {
        descEl.classList.remove('is-selected');
        descEl.classList.add('is-wrong-flash');
        termEl.classList.add('is-wrong-flash');
        setTimeout(function() {
          descEl.classList.remove('is-wrong-flash');
          termEl.classList.remove('is-wrong-flash');
          matchSelected = null;
        }, 700);
      }
    }

    function matchReset() {
      matchSelected = null;
      matchCount    = 0;
      ['A','B','C','D','E','F','G','H','I'].forEach(function(l) {
        var el = document.getElementById('desc-' + l);
        el.classList.remove('is-selected', 'is-matched', 'is-wrong-flash');
        el.style.cursor = 'pointer';
        delete el.dataset.matched;
        document.getElementById('dcheck-' + l).style.display = 'none';
      });
      ['Prompt','Tokens','Hallucination','RAG','AI-Agent','LLM','Agentic-AI','Human-in-the-Loop','Generative-AI'].forEach(function(t) {
        var el = document.getElementById('term-' + t);
        el.classList.remove('is-matched', 'is-wrong-flash');
        el.style.cursor = 'pointer';
        delete el.dataset.matched;
      });
      var banner = document.getElementById('match-result');
      banner.style.display = 'none';
      banner.classList.remove('is-visible');
    }
  <\/script>

</section>

<!-- ======== OPPORTUNITIES IN TAX (placeholder) ======== -->
<div style="display:none;">
    <p style="color:var(--text-dim); font-size:11px; text-align:center; margin-bottom:24px; letter-spacing:1.5px; text-transform:uppercase;">Time to reach 100 Million Users</p>
    
    <div style="display:flex; align-items:center; margin-bottom:14px;">
      <div style="width:110px; text-align:right; padding-right:16px; font-size:15px; font-weight:700; color:var(--gray-01); font-style:italic;">Telephone</div>
      <div style="flex:1; position:relative; height:28px;"><div style="position:absolute; left:0; top:0; height:100%; width:100%; background:#FFFFFF; border-radius:3px;"></div><span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); font-size:13px; font-weight:700; color:#000;">75 yrs</span></div>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:14px;">
      <div style="width:110px; text-align:right; padding-right:16px; font-size:15px; font-weight:700; color:var(--gray-01); font-style:italic;">Mobile</div>
      <div style="flex:1; position:relative; height:28px;"><div style="position:absolute; left:0; top:0; height:100%; width:21%; background:#FFFFFF; border-radius:3px;"></div><span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); font-size:13px; font-weight:700; color:var(--ey-dark);">16 yrs</span></div>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:14px;">
      <div style="width:110px; text-align:right; padding-right:16px; font-size:15px; font-weight:700; color:var(--gray-01); font-style:italic;">Internet</div>
      <div style="flex:1; position:relative; height:28px;"><div style="position:absolute; left:0; top:0; height:100%; width:9%; background:#FFFFFF; border-radius:3px;"></div><span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); font-size:13px; font-weight:700; color:var(--ey-dark);">7 yrs</span></div>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:14px;">
      <div style="width:110px; text-align:right; padding-right:16px; font-size:15px; font-weight:700; color:var(--gray-01); font-style:italic;">iPhone</div>
      <div style="flex:1; position:relative; height:28px;"><div style="position:absolute; left:0; top:0; height:100%; width:5%; background:#FFFFFF; border-radius:3px; min-width:20px;"></div><span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); font-size:13px; font-weight:700; color:var(--ey-dark);">4 yrs</span></div>
    </div>
    <div style="display:flex; align-items:center; margin-bottom:14px;">
      <div style="width:110px; text-align:right; padding-right:16px; font-size:15px; font-weight:700; color:var(--gray-01); font-style:italic;">Instagram</div>
      <div style="flex:1; position:relative; height:28px;"><div style="position:absolute; left:0; top:0; height:100%; width:3%; background:#FFFFFF; border-radius:3px; min-width:16px;"></div><span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); font-size:13px; font-weight:700; color:var(--ey-dark);">2.5 yrs</span></div>
    </div>
    <div style="display:flex; align-items:center;">
      <div style="width:110px; text-align:right; padding-right:16px; font-size:15px; font-weight:700; color:#FF4136; font-style:italic;">ChatGPT</div>
      <div style="flex:1; position:relative; height:28px;"><div style="position:absolute; left:0; top:0; height:100%; width:8px; background:#FF4136; border-radius:3px;"></div><span style="position:absolute; right:10px; top:50%; transform:translateY(-50%); font-size:13px; font-weight:700; color:#FF4136;">2 mo</span></div>
    </div>
  </div>
</div>

<!-- What's Next CTA is rendered by EYWhatsNext in FoundationalConcepts.tsx -->

<!-- ======== JAVASCRIPT ======== -->
<script>
function toggleAcc(id, el) {
  var body = document.getElementById(id);
  if (!body) return;
  var isOpen = body.style.display === 'block';
  body.style.display = isOpen ? 'none' : 'block';
  var chev = el ? el.querySelector('.acc-chev') : null;
  if (chev) chev.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}
// Quiz logic
let quizAnswered = 0, quizCorrect = 0;
function revealAnswer(qId, userSaidYes, correctIsYes) {
  const card = document.getElementById(qId);
  const reveal = document.getElementById(qId + '-reveal');
  const buttons = card.querySelectorAll('button');
  buttons.forEach(b => { b.disabled = true; b.style.opacity = '0.5'; b.style.cursor = 'default'; });
  const isCorrect = (userSaidYes === correctIsYes);
  reveal.classList.add('show', isCorrect ? 'correct' : 'incorrect');
  if (isCorrect) quizCorrect++;
  quizAnswered++;
  if (quizAnswered === 5) {
    document.getElementById('score-value').textContent = quizCorrect + '/5';
    document.getElementById('quiz-score').classList.add('show');
  }
}

// Active nav highlighting on scroll
const sections = document.querySelectorAll('section[id]');
const topNavLinks = document.querySelectorAll('nav a[href^="#"]');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 100) current = s.getAttribute('id'); });
  topNavLinks.forEach(a => {
    a.style.color = '#747480';
    if (a.getAttribute('href') === '#' + current) {
      a.style.color = '#ffe600';
    }
  });
});
// Pipeline stage tabs
const stageData = [
  { num:'1', color:'#4696FF', bg:'rgba(74,144,217,0.06)', border:'rgba(74,144,217,0.2)', img:'stage1.png', title:'The waiter reads your order (Tokenization)', desc:'Just like a waiter breaks your order into items — "large / oat / latte / extra shot" — the AI breaks your prompt into small chunks called <strong>tokens</strong> (roughly ¾ of a word each).<br><br><strong style="color:#ffe600;">💰 Cost tip:</strong> More items on your order = higher bill. Same with AI — more input/output tokens = more cost. A focused prompt is cheaper than dumping a 50-page document.<div style="background:#2E2E38; border-radius:8px; padding:16px; margin-top:14px;"><div style="display:flex; justify-content:space-between; margin-bottom:8px;"><span style="color:var(--gray-01); font-size:11px;">Token Usage</span><span style="color:#ffe600; font-size:11px; font-weight:600;">More tokens → Higher cost</span></div><div style="background:var(--off-white); border-radius:5px; height:8px; overflow:hidden;"><div style="background:linear-gradient(90deg, #00C864, #ffe600, #FF4136); height:100%; width:70%; border-radius:5px;"></div></div><div style="display:flex; justify-content:space-between; margin-top:4px;"><span style="color:#00C864; font-size:9px;">Focused prompt</span><span style="color:#FF4136; font-size:9px;">Document dump</span></div></div>' },
  { num:'2', color:'#00C864', bg:'rgba(46,204,113,0.06)', border:'rgba(46,204,113,0.2)', img:'stage2.png', title:'The chef prepares your dish (LLM Processing)', desc:'The chef (LLM) doesn\\'t follow a recipe book word-for-word. Instead, they\\'ve <em>tasted millions of dishes</em> and predict what should come next based on experience. That\\'s what a Large Language Model does — it <strong>generates</strong> text by predicting the most likely next word, one at a time. It\\'s creating something new, not copying from a database.' },
  { num:'3', color:'#FF7D1E', bg:'rgba(243,156,18,0.06)', border:'rgba(243,156,18,0.2)', img:'stage3.png', title:'Checking the recipe book (RAG)', desc:'A great chef checks the recipe book when needed. Similarly, <strong>RAG (Retrieval Augmented Generation)</strong> means the AI looks up your firm\\'s actual documents or knowledge base to <em>ground</em> its response in real data — like the chef verifying "does this client actually prefer no sugar?" This dramatically reduces hallucination.' },
  { num:'4', color:'#B400FF', bg:'rgba(155,89,182,0.06)', border:'rgba(155,89,182,0.2)', img:'stage4.png', title:'The dish is served (Output Generation)', desc:'The chef combines their skill (model) with the recipe book (retrieved knowledge) and <strong>plates the dish</strong> — token by token, word by word. What you receive looks polished and professional. But remember: it was <em>created</em>, not looked up. That\\'s why you always taste before serving to your guests (clients).' }
];
function showStage(i) {
  const d = stageData[i];
  const panel = document.getElementById('stage-detail-panel');
  panel.style.opacity = '0';
  setTimeout(() => {
    document.getElementById('stage-number').textContent = d.num;
    document.getElementById('stage-number').style.color = d.color;
    document.getElementById('stage-number').style.borderColor = d.color;
    document.getElementById('stage-number').style.background = d.bg;
    document.getElementById('stage-title').textContent = d.title;
    document.getElementById('stage-title').style.color = d.color;
    document.getElementById('stage-desc').innerHTML = d.desc;
    document.getElementById('stage-img').src = d.img;
    document.getElementById('stage-img').style.display = 'block';
    panel.querySelector('div').style.background = d.bg;
    panel.querySelector('div').style.borderColor = d.border;
    panel.style.opacity = '1';
  }, 200);
  // Highlight active button
  const colors = ['#4696FF','#00C864','#FF7D1E','#B400FF'];
  for (let j = 0; j < 4; j++) {
    const btn = document.getElementById('stage-btn-' + j);
    if (j === i) {
      btn.style.boxShadow = '0 0 25px ' + colors[j].replace(')',',0.4)').replace('rgb','rgba');
      btn.style.transform = 'scale(1.1)';
    } else {
      btn.style.boxShadow = '0 4px 20px rgba(0,0,0,0.3)';
      btn.style.transform = 'none';
    }
  }
}

// Also highlight on click
topNavLinks.forEach(a => {
  a.addEventListener('click', function() {
    topNavLinks.forEach(l => l.style.color = '#747480');
    this.style.color = '#ffe600';
  });
});


// ===== EVOLUTION ERA EXPLORER (Figma 3276:17185) =====
// Causal chain: each era is a child/subset of the previous parent layer.
const EVO_ERAS = [
  {
    year: '1943', short: 'AI', title: 'Artificial Intelligence', tag: 'Rules Engine',
    desc: 'Systems designed to perform tasks that normally require human intelligence by following predefined rules and instructions.',
    analogy: 'Like a Traffic Signal - Rule: If the timer reaches 60 seconds, change to red. The signal follows the instruction.',
    examples: ['Traffic lights', 'Elevator logic', 'Washing machine cycles'],
    preview: 'Follows predefined rules',
    image: '/evo-ai.png',
    dot: '#4696FF',
    parent: null
  },
  {
    year: '1959', short: 'ML', title: 'Machine Learning', tag: 'Pattern Learner',
    desc: 'AI systems that learn patterns from data instead of only following predefined rules.',
    analogy: 'Like Your Favourite Food Delivery App — at first it knows nothing about you. After many orders, it starts learning your preferences.',
    examples: ['Netflix recommendations', 'Amazon suggestions', 'Email spam filtering'],
    preview: 'Learns from experience',
    image: '/evo-ml.png',
    dot: '#00C864',
    parent: 0
  },
  {
    year: '2006', short: 'DL', title: 'Deep Learning', tag: 'Neural Nets',
    desc: 'A type of machine learning that uses neural networks to recognize complex patterns in images, speech, and unstructured data.',
    analogy: 'Like Listening to a Song and Recognising It Instantly — not because you memorized rules, but because your brain learned complex patterns.',
    examples: ['Face Unlock', 'Voice assistants', 'Photo recognition'],
    preview: 'Recognises complex patterns',
    image: '/evo-dl.png',
    dot: '#FF7D1E',
    parent: 1
  },
  {
    year: '2017', yearLabel: '2017-22', short: 'Gen', title: 'Generative AI', tag: 'Content Creator',
    desc: 'AI that creates new content such as text, images, audio and code from natural language instructions.',
    analogy: 'Like A Musician Composing a New Song — you ask for a relaxing melody, and it uses learned knowledge to create something new.',
    examples: ['ChatGPT drafting', 'Copilot presentations', 'AI image generation'],
    preview: 'Creates new content',
    image: '/evo-gen.png',
    dot: '#FF7D1E',
    parent: 2
  },
  {
    year: '2024', short: 'Agentic', title: 'Agentic AI', tag: 'Goal-Driven',
    desc: 'AI systems that can plan, decide and execute multi-step tasks toward a goal with less step-by-step human direction.',
    analogy: 'Like a Personal Executive Assistant — instead of only answering "When is my flight?", it can book, reserve, calendar, and remind.',
    examples: ['Travel planners', 'Shopping assistants', 'Meeting prep agents'],
    preview: 'Acts towards an end goal',
    image: '/evo-agentic.png',
    dot: '#B400FF',
    parent: 3
  }
];
let evoActive = 0;

function renderEvoNest(i) {
  const nest = document.getElementById('evo-nest');
  const builds = document.getElementById('evo-builds');
  const featured = document.getElementById('evo-featured');
  if (!nest || !builds || !featured) return;

  // Keep the featured card alive — pull it out before rebuilding rings
  featured.remove();

  // Build concentric rings: outer ancestors → inner current wraps featured
  let outer = null;
  let innermost = null;
  for (let depth = 0; depth <= i; depth++) {
    const e = EVO_ERAS[depth];
    const isCurrent = depth === i;
    const role = depth === 0 && i === 0
      ? 'Root'
      : isCurrent
        ? 'You are here'
        : (depth === 0 ? 'Parent root' : 'Parent layer');

    const layer = document.createElement('div');
    layer.className = 'evo-nest-layer ' + (isCurrent ? 'is-current' : 'is-ancestor');
    layer.setAttribute('data-depth', String(depth));

    const row = document.createElement('div');
    row.className = 'evo-nest-row';
    row.innerHTML =
      \`<span class="evo-nest-dot" style="background:\${e.dot}"></span>\` +
      \`<span class="evo-nest-label">\${e.short} · \${e.title}</span>\` +
      \`<span class="evo-nest-role">\${role}</span>\`;
    layer.appendChild(row);

    if (!outer) outer = layer;
    else innermost.appendChild(layer);
    innermost = layer;
  }

  innermost.appendChild(featured);
  nest.innerHTML = '';
  nest.appendChild(outer);
  nest.setAttribute(
    'aria-label',
    'Nesting: ' + EVO_ERAS.slice(0, i + 1).map((e) => e.short).join(' contains ')
  );

  const era = EVO_ERAS[i];
  const child = EVO_ERAS[i + 1];
  if (era.parent === null) {
    builds.innerHTML = child
      ? \`<span class="evo-builds-chip">Root layer</span>
         <span>Child tech that nests inside: <strong>\${child.title}</strong></span>\`
      : \`<span class="evo-builds-chip">Root layer</span>\`;
  } else {
    const parent = EVO_ERAS[era.parent];
    builds.innerHTML = \`<span class="evo-builds-chip">Builds on \${parent.short}</span>
      <span>Parent: <strong>\${parent.title}</strong>\${
        child ? \` · next child: <strong>\${child.title}</strong>\` : ''
      }</span>\`;
  }
}

function selectEra(i) {
  if (i < 0 || i >= EVO_ERAS.length) return;
  evoActive = i;
  const era = EVO_ERAS[i];
  const img = document.getElementById('evo-feat-img');
  if (!img) return;

  img.src = era.image;
  img.alt = era.title;
  document.getElementById('evo-feat-year').textContent = era.yearLabel || era.year;
  document.getElementById('evo-feat-title').textContent = era.title;
  document.getElementById('evo-feat-tag').textContent = era.tag;
  document.getElementById('evo-feat-desc').textContent = era.desc;
  document.getElementById('evo-feat-analogy').textContent = era.analogy;
  document.getElementById('evo-feat-chips').innerHTML = era.examples.map(e =>
    \`<span class="evo-chip">\${e}</span>\`
  ).join('');

  renderEvoNest(i);

  const previews = document.getElementById('evo-previews');
  if (previews) {
    previews.innerHTML = EVO_ERAS.filter((_, idx) => idx !== i).map((e) => {
      const realIdx = EVO_ERAS.indexOf(e);
      const relation =
        realIdx === i - 1 ? 'Parent' :
        realIdx === i + 1 ? 'Child' :
        realIdx < i ? 'Ancestor' : 'Later';
      return \`<button type="button" class="evo-preview" onclick="selectEra(\${realIdx})">
      <div class="evo-preview-top">
        <div class="evo-preview-left">
          <span class="evo-dot" style="background:\${e.dot}"></span>
          <span class="evo-preview-year">\${e.yearLabel || e.year}</span>
        </div>
        <span class="evo-preview-short">\${relation} · \${e.short}</span>
      </div>
      <p class="evo-preview-title">\${e.title}</p>
      <p class="evo-preview-desc">\${e.preview}</p>
      <div class="evo-preview-thumb"><img src="\${e.image}" alt=""></div>
    </button>\`;
    }).join('');
  }
}

function initEvoExplorer() {
  // Preview cards are the era picker — no separate year-tab strip
  if (!document.getElementById('evo-featured')) return;
  selectEra(0);
}

// Expose for inline handlers + React late inject (DOMContentLoaded already fired)
window.selectEra = selectEra;
window.initEvoExplorer = initEvoExplorer;
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEvoExplorer);
} else {
  initEvoExplorer();
}

// ===== EASY EXPLANATION SLIDESHOW =====
const easyImages = ['/ai.png', '/ml.png', '/dl.png', '/llm.png', '/agentic.png'];
const easyInfo = [
  { tax: 'Early tax software that auto-calculated totals based on fixed formulas — no learning, just math rules. Like an Excel formula: IF income > 10L, apply 30%.', diff: 'AI follows exact rules you give it. Machine Learning (next) figures out its own rules from data.' },
  { tax: 'Systems that learn which tax returns are likely flagged for audit based on patterns from thousands of past cases. The more data it sees, the better it gets.', diff: 'ML learns patterns from past data. Deep Learning (next) handles much more complex patterns — images, speech, unstructured documents.' },
  { tax: 'OCR systems that read scanned invoices, extract amounts, GSTIN numbers, and dates automatically — even from messy handwritten documents or photos.', diff: 'Deep Learning recognizes patterns in raw data. LLMs & GenAI (next) can actually understand and generate human language.' },
  { tax: 'ChatGPT, Copilot, EY.ai — tools that draft memos, summarise circulars, generate first-draft responses to tax notices, and create content you\\'ve never seen before.', diff: 'GenAI creates content when you ask. Agentic AI (next) can plan, decide, and act on its own without you directing each step.' },
  { tax: 'Future tax agents that could: monitor regulatory changes → identify client impact → draft advisory memos → route for partner approval — all without manual prompting.', diff: 'This is the frontier. Agentic AI doesn\\'t wait for instructions — it sets sub-goals and completes multi-step tasks independently.' }
];
let currentEasySlide = 0;

function toggleEasyView(show) {
  const timeline = document.getElementById('evo-timeline-view');
  const easyView = document.getElementById('easy-explain-view');
  if (show) {
    timeline.style.display = 'none';
    easyView.style.display = 'block';
    currentEasySlide = 0;
    renderEasySlide(0);
  } else {
    timeline.style.display = 'block';
    easyView.style.display = 'none';
  }
}

function renderEasySlide(i) {
  const slide = document.getElementById('easy-slide');
  slide.style.opacity = '0';
  setTimeout(() => {
    document.getElementById('easy-slide-img').src = easyImages[i];
    document.getElementById('easy-tax').textContent = easyInfo[i].tax;
    document.getElementById('easy-diff').textContent = easyInfo[i].diff;
    document.getElementById('easy-counter').textContent = (i + 1) + ' / 5';
    // Update dots
    const dots = document.getElementById('easy-dots').children;
    const dotColors = ['#4696FF','#00C864','#FF7D1E','#FF7D1E','#B400FF'];
    for (let j = 0; j < dots.length; j++) {
      dots[j].style.background = j === i ? dotColors[j] : 'rgba(255,255,255,0.15)';
      dots[j].style.boxShadow = j === i ? '0 0 8px ' + dotColors[j] : 'none';
      dots[j].style.transform = j === i ? 'scale(1.3)' : 'scale(1)';
    }
    // Update prev/next buttons
    const prev = document.getElementById('easy-prev');
    const next = document.getElementById('easy-next');
    prev.style.opacity = i === 0 ? '0.3' : '1';
    prev.style.pointerEvents = i === 0 ? 'none' : 'auto';
    if (i === 4) {
      next.innerHTML = '✕ Close';
      next.onclick = function() { toggleEasyView(false); };
    } else {
      next.innerHTML = 'Next →';
      next.onclick = function() { navigateSlide(1); };
    }
    slide.style.opacity = '1';
  }, 200);
}

function navigateSlide(dir) {
  currentEasySlide += dir;
  if (currentEasySlide < 0) currentEasySlide = 0;
  if (currentEasySlide > 4) { toggleEasyView(false); return; }
  renderEasySlide(currentEasySlide);
}

function goToSlide(i) {
  currentEasySlide = i;
  renderEasySlide(i);
}
<\/script>

<!-- Image Lightbox -->
<div id="img-lightbox" onclick="this.style.display='none'" style="display:none; position:fixed; inset:0; z-index:9999; background:rgba(0,0,0,0.85); backdrop-filter:blur(8px); align-items:center; justify-content:center; cursor:zoom-out;">
  <button onclick="document.getElementById('img-lightbox').style.display='none'; event.stopPropagation();" style="position:absolute; top:20px; right:24px; background:rgba(255,255,255,0.1); border:1px solid rgba(255,255,255,0.2); color:var(--ey-dark); font-size:24px; width:40px; height:40px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; z-index:10000;">✕</button>
  <img id="lightbox-img" src="" style="max-width:85vw; max-height:85vh; border-radius:14px; box-shadow:0 20px 60px rgba(0,0,0,0.6); object-fit:contain;" onclick="event.stopPropagation()" />
</div>

</body>
</html>
`;/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tv=i=>i.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),nv=i=>i.replace(/^([A-Z])|[\s-_]+(\w)/g,(o,s,u)=>u?u.toUpperCase():s.toLowerCase()),Fu=i=>{const o=nv(i);return o.charAt(0).toUpperCase()+o.slice(1)},v0=(...i)=>i.filter((o,s,u)=>!!o&&o.trim()!==""&&u.indexOf(o)===s).join(" ").trim();/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var rv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iv=I.forwardRef(({color:i="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:u,className:c="",children:f,iconNode:g,...x},m)=>I.createElement("svg",{ref:m,...rv,width:o,height:o,stroke:i,strokeWidth:u?Number(s)*24/Number(o):s,className:v0("lucide",c),...x},[...g.map(([v,j])=>I.createElement(v,j)),...Array.isArray(f)?f:[f]]));/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=(i,o)=>{const s=I.forwardRef(({className:u,...c},f)=>I.createElement(iv,{ref:f,iconNode:o,className:v0(`lucide-${tv(Fu(i))}`,`lucide-${i}`,u),...c}));return s.displayName=Fu(i),s};/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const av=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],Us=ot("arrow-right",av);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ov=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],lv=ot("chevron-left",ov);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sv=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],Oo=ot("chevron-right",sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dv=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],cv=ot("circle-check-big",dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],uv=ot("copy",pv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],hv=ot("cpu",fv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],xv=ot("eye-off",gv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mv=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],vv=ot("file-text",mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yv=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],zu=ot("lightbulb",yv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]],wv=ot("list-checks",bv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]],jv=ot("list-tree",kv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cv=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]],Ev=ot("palette",Cv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Fv=ot("refresh-cw",Sv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],Av=ot("rotate-ccw",zv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iv=[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]],Lv=ot("scale",Iv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],Tv=ot("shield",Nv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]],y0=ot("table-2",Rv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]],Bv=ot("target",Mv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dv=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],b0=ot("user",Dv);/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],_v=ot("zap",Pv),_t={page:p.confidentBlack,surface:p.offBlack,yellow:p.yellow,yellowSoft:"rgba(255, 230, 0, 0.10)",border:"#2E2E38",body:p.gray02,caption:p.gray01,white:p.white};function dd({eyebrow:i="What's Next",title:o,description:s,ctaLabel:u,onContinue:c,meta:f,id:g="whats-next",style:x}){return n.jsx("section",{id:g,"aria-labelledby":`${g}-heading`,style:{background:_t.page,padding:"96px 64px",textAlign:"center",borderTop:`1px solid ${_t.border}`,...x},children:n.jsxs("div",{style:{maxWidth:640,margin:"0 auto",padding:"48px 40px",background:_t.surface,border:`1px solid ${_t.border}`,borderRadius:16,boxShadow:"0 16px 40px rgba(0,0,0,0.35)"},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",background:_t.yellowSoft,border:`1px solid ${_t.yellow}`,borderRadius:100,padding:"4px 12px",marginBottom:16},children:n.jsx("span",{style:{color:_t.yellow,fontSize:12,fontWeight:700,letterSpacing:"1px",textTransform:"uppercase",fontFamily:k.bold,lineHeight:1.2},children:i})}),n.jsx("h2",{id:`${g}-heading`,style:{margin:"0 0 14px",fontSize:32,lineHeight:"38px",fontWeight:700,color:_t.white,fontFamily:k.bold},children:o}),n.jsx("p",{style:{margin:"0 0 28px",fontSize:15,lineHeight:"22px",color:_t.body,fontFamily:k.regular},children:s}),n.jsxs("button",{type:"button",onClick:c,style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:8,padding:"14px 28px",fontSize:15,fontWeight:700,fontFamily:k.bold,background:_t.yellow,color:_t.page,border:"none",borderRadius:8,cursor:"pointer",lineHeight:1.2},children:[u,n.jsx(Us,{size:16,"aria-hidden":!0})]}),f?n.jsx("p",{style:{margin:"18px 0 0",fontSize:13,lineHeight:1.5,color:_t.caption,fontFamily:k.regular},children:f}):null]})})}function w0({children:i}){return n.jsx("span",{style:{color:_t.yellow},children:i})}const Hv=`
#module-content {
  /* Colour tokens (design-kit) */
  --ey-yellow: ${p.yellow};
  --eyebrow-gold: ${p.eyebrowGold};
  --white: ${p.white};
  --off-white: ${p.offWhite};
  --gray-02: ${p.gray02};
  --gray-01: ${p.gray01};
  --ey-dark: ${p.offBlack};
  --confident-black: ${p.confidentBlack};
  --muted-foreground: ${p.gray01};

  /* Surface aliases used by the lesson CSS */
  --ey-bg: ${p.white};
  --ey-bg-alt: ${p.offWhite};
  --ey-bg-deep: ${p.offWhite};
  --card-bg: ${p.white};
  --text-secondary: ${p.gray01};

  /* Spacing — section rhythm from design-kit */
  --section-padding: ${xu.sectionPadding};
  --card-padding: ${xu.cardPadding};

  font-family: ${k.regular};
  background: ${p.white};
  color: ${p.offBlack};
  line-height: 1.6;
  scroll-behavior: smooth;
}

/* Restore intended section breathing room (lesson used 90px 60px / 80px / 64px;
   unify major .section blocks on the kit's section padding). */
#module-content .section,
#module-content .rise-section,
#module-content .wrong-section,
#module-content .paths-section,
#module-content .gva-section {
  padding: var(--section-padding);
}

/* Ultrawide: stretch capped content rails to the full section width
   (backgrounds already full-bleed; only the inner grids were stuck at ~1300px). */
#module-content .rise-grid,
#module-content .wrong-grid,
#module-content .gva-spectrum,
#module-content .gva-banner,
#module-content .paths-row,
#module-content .hero-inner,
#module-content .velocity-header,
#module-content .velocity-card,
#module-content #evo-timeline-view,
#module-content .news-grid {
  width: 100%;
  max-width: none;
  margin-left: 0;
  margin-right: 0;
}

/* Autonomy Spectrum — kept here so lesson cards always render even if
   the embedded HTML stylesheet drifts. Mirrors Figma 3187:3460. */
#module-content .gva-spectrum {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  width: 100%;
  max-width: none;
  margin: 0 0 24px;
}
#module-content .gva-spectrum-card {
  background: ${p.white};
  border: 1px solid ${p.gray02};
  border-radius: 12px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: left;
  cursor: pointer;
  padding: 0;
  font: inherit;
  color: inherit;
  width: 100%;
  transition: transform 0.15s, box-shadow 0.15s;
}
#module-content .gva-spectrum-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 28px rgba(0,0,0,0.22);
}
#module-content .gva-spectrum-head {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  padding: 20px;
}
#module-content .gva-spectrum-card[data-tone="blue"] .gva-spectrum-head { background: rgba(70,150,255,0.08); }
#module-content .gva-spectrum-card[data-tone="green"] .gva-spectrum-head { background: rgba(0,200,100,0.08); }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-spectrum-head { background: rgba(255,125,30,0.08); }
#module-content .gva-spectrum-title { font-size: 18px; font-weight: 700; margin: 0; }
#module-content .gva-spectrum-card[data-tone="blue"] .gva-spectrum-title { color: ${p.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-spectrum-title { color: ${p.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-spectrum-title { color: ${p.frameOrange}; }
#module-content .gva-badge {
  display: inline-flex; align-items: center; padding: 2px 8px; border-radius: 4px;
  font-size: 10px; font-weight: 700; letter-spacing: 0.04em; text-transform: uppercase; color: ${p.white};
}
#module-content .gva-spectrum-card[data-tone="blue"] .gva-badge { background: ${p.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-badge { background: ${p.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-badge { background: ${p.frameOrange}; }
#module-content .gva-spectrum-body { display: flex; flex-direction: column; gap: 16px; padding: 20px; flex: 1; }
#module-content .gva-spectrum-desc { margin: 0; font-size: 13px; line-height: 1.4; color: ${p.gray01}; }
#module-content .gva-flow {
  border: 1px solid rgba(46,46,56,0.12); border-radius: 6px; min-height: 32px;
  display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700;
  background: ${p.white};
}
#module-content .gva-spectrum-card[data-tone="blue"] .gva-flow { color: ${p.frameBlue}; }
#module-content .gva-spectrum-card[data-tone="green"] .gva-flow { color: ${p.frameGreen}; }
#module-content .gva-spectrum-card[data-tone="orange"] .gva-flow { color: ${p.frameOrange}; }
#module-content .gva-best-label { margin: 0; font-size: 11px; text-transform: uppercase; color: ${p.gray01}; }
#module-content .gva-best-value { margin: 2px 0 0; font-size: 13px; font-weight: 700; color: ${p.offBlack}; }
#module-content .gva-card-cta { margin-top: auto; font-size: 13px; font-weight: 700; color: ${p.offBlack}; text-decoration: underline; text-underline-offset: 3px; }
#module-content .gva-banner {
  width: 100%; max-width: none; display: flex; gap: 20px; align-items: center; padding: 24px;
  border-radius: 12px; background: ${p.confidentBlack}; border: 1px solid rgba(255,255,255,0.08);
}
#module-content .gva-banner-icon {
  width: 40px; height: 40px; border-radius: 8px; background: ${p.yellow};
  display: flex; align-items: center; justify-content: center; flex-shrink: 0;
}
#module-content .gva-banner-icon img { width: 20px; height: 20px; display: block; }
#module-content .gva-banner-title { margin: 0 0 4px; font-size: 16px; font-weight: 700; color: #FFFFFF; }
#module-content .gva-banner-body { margin: 0; font-size: 13px; color: ${p.gray02}; line-height: 1.45; }
@media (max-width: 1000px) {
  #module-content .gva-spectrum { grid-template-columns: 1fr; }
}

/* Modal shell — also pinned here so open/close UI never loses styles */
#module-content .gva-modal[hidden] { display: none !important; }
#module-content .gva-modal {
  position: fixed; inset: 0; z-index: 10050;
  display: flex; align-items: center; justify-content: center; padding: 24px;
}
#module-content .gva-modal-backdrop {
  position: absolute; inset: 0; background: rgba(26,26,36,0.72);
}
#module-content .gva-modal-dialog {
  position: relative; z-index: 1; width: min(720px, 100%);
  max-height: min(88vh, 900px); overflow: auto;
  background: ${p.white}; border: 1px solid ${p.gray02};
  border-radius: 12px; box-shadow: 0 24px 64px rgba(0,0,0,0.35);
}
#module-content .gva-modal-top {
  display: flex; align-items: flex-start; justify-content: space-between;
  gap: 16px; padding: 20px 24px; border-bottom: 1px solid ${p.gray02};
}
#module-content .gva-modal-top h3 {
  margin: 0 0 6px; font-size: 22px; font-weight: 700; color: ${p.offBlack};
}
#module-content .gva-modal-close {
  border: 1px solid ${p.gray02}; background: ${p.offWhite};
  width: 36px; height: 36px; border-radius: 8px; cursor: pointer;
  font-size: 18px; line-height: 1; color: ${p.offBlack}; flex-shrink: 0;
}
#module-content .gva-modal-content {
  padding: 20px 24px 28px; display: flex; flex-direction: column; gap: 14px;
}
#module-content .gva-modal-thumb {
  width: 100%; height: auto; object-fit: contain; object-position: center top;
  border-radius: 8px; display: block; background: #F6F6FA;
  border: 1px solid rgba(46, 46, 56, 0.08);
}
body.gva-modal-open { overflow: hidden; }

#module-content .hero {
  padding: 48px 64px 56px;
}

#module-content [id] {
  scroll-margin-top: ${Tt}px;
}
`;function Ov(i){const o=[],s=[];let u=i.replace(/<style[^>]*>([\s\S]*?)<\/style>/gi,(x,m)=>(o.push(m),""));u=u.replace(/<script\b[^>]*>([\s\S]*?)<\/script>/gi,(x,m)=>(m.trim()&&s.push(m),""));const c=u.match(/<body[^>]*>([\s\S]*)<\/body>/i),f=c?c[1]:u;let g=o.join(`
`);return g=g.replace(/\*,\s*\*::before,\s*\*::after\s*\{[^}]*\}/,`#module-content { margin: 0; padding: 0; }
#module-content, #module-content *, #module-content *::before, #module-content *::after { box-sizing: border-box; }`),g=g.replace(/(^|})\s*body\s*\{/g,`$1
#module-content {`),g=g.replace(/(^|})\s*:root\s*\{/g,`$1
#module-content {`),g+=`
${Hv}
`,{css:g,body:f,scripts:s}}function Wv({onBack:i,onNavigate:o}){const{css:s,body:u,scripts:c}=I.useMemo(()=>Ov(Su),[Su]),f=I.useRef(null),g=I.useRef(!1);return I.useEffect(()=>{if(g.current)return;g.current=!0;const x=[];for(const v of c){const j=document.createElement("script");j.text=v,document.body.appendChild(j),x.push(j)}const m=window;return typeof m.initEvoExplorer=="function"&&m.initEvoExplorer(),()=>{x.forEach(v=>v.remove()),g.current=!1}},[c]),n.jsxs("div",{style:{position:"fixed",inset:0,overflowY:"auto",background:p.white},children:[n.jsx(gi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),n.jsx(Yo,{currentModuleId:"foundational",onNavigate:o,onBack:i}),n.jsxs("div",{id:"module-content",ref:f,children:[n.jsx("style",{dangerouslySetInnerHTML:{__html:s}}),n.jsx("div",{dangerouslySetInnerHTML:{__html:u}})]}),n.jsx(dd,{title:n.jsxs(n.Fragment,{children:["Fundamentals are clear.",n.jsx("br",{}),"Now it's time to ",n.jsx(w0,{children:"use AI effectively."})]}),description:"You now understand what AI is, how it works, where it fails, and why fundamentals matter. The next step is learning how to interact with it — how to craft prompts that deliver real, usable results in tax work.",ctaLabel:"Continue to Part 2: Basics of Prompting in Tax",onContinue:()=>o("/ai-tax-prompting"),meta:"Part 2 covers: prompt structure, role-setting, context framing, output formatting, and real tax prompt templates"})]})}const We={dark:{bg:p.confidentBlack,heading:p.onDark,body:p.gray02,eyebrow:p.yellow,border:p.borderOnDark},neutral:{bg:p.offWhite,border:"rgba(46,46,56,0.10)"},light:{bg:p.white,heading:p.confidentBlack,body:p.gray01,eyebrow:p.eyebrowGold,border:"rgba(46,46,56,0.10)"}},Nr=[{id:1,name:"Persona",color:p.frameMagenta,border:p.frameMagenta,q:"WHO should AI be?",what:"Defines who the AI should act like — setting expertise, seniority, and perspective. A tax partner writes differently from a junior analyst.",why:"Aligns output to the expertise level you need. Without it, AI defaults to a generic voice that doesn't match your audience.",without:'"Explain impact of New Tax Act on MNCs."',with:'"You are a senior tax partner in India. Explain impact of withholding tax changes in the New Income Tax Act, 2025 on MNCs."'},{id:2,name:"Context",color:p.frameTeal,border:p.frameTeal,q:"WHAT's the background?",what:"Background information for the task — the who, what, where, and when surrounding your query.",why:"Without context, AI gives generic answers that miss your specific situation entirely.",without:'"Explain recent changes to transfer pricing regulations."',with:'"Our client in India provides IT support to its parent in Singapore. Explain recent TP Regulation changes in 2025."'},{id:3,name:"Instruction",color:p.frameOrange,border:p.yellow,q:"WHAT should AI do?",what:"A clear task or command — the specific action you want AI to perform. No ambiguity.",why:`Define what "significant" or "recent" means — don't leave it to AI to guess.`,without:'"Summarise significant recent tax exposures of the Indian target company."',with:'"Summarise tax exposures above INR 25 crore, under dispute in the last 3 assessment years."'},{id:4,name:"Constraints",color:p.frameBlue,border:p.frameBlue,q:"WHAT are the limits?",what:"Setting limits on scope, detail, or length — guardrails that keep AI focused.",why:"Without limits, AI may produce 2,000 words when you needed 200.",without:'"Summarise GST refund changes."',with:'"In under 200 words, summarise July 2025 GST refund changes for exporters."'},{id:5,name:"Grounding",color:p.framePurple,border:p.framePurple,q:"WHERE should AI look?",what:"Instructing AI to use specific statutes, circulars, or case law as its reference base.",why:"Prevents hallucination and ensures legal accuracy. Ungrounded output is dangerous output.",without:'"Explain safe harbour rules."',with:'"According to the Income-tax Act, 1961 and latest CBDT circulars, explain safe harbour applicability to cross-border service fees."'},{id:6,name:"Tone / Style",color:p.eyebrowGold,border:p.yellow,q:"HOW should it sound?",what:"Directing AI to adopt a formal, client-ready, or simplified style matching your audience.",why:"A CFO needs different language than an internal audit team or ITAT bench.",without:'"Draft an email to the client regarding new GST slab rates."',with:'"Explain new GST slab changes in a formal and concise manner, suitable for the Tax Head of a Logistics company."'},{id:7,name:"Output Format",color:p.frameGreen,border:p.frameGreen,q:"WHAT shape should the answer take?",what:"Specifies desired format — table, bullets, email, memo, comparison chart, etc.",why:"Output is immediately usable without reformatting — saves editing time.",without:'"Compare old vs new tax rates."',with:'"Provide a table comparing old vs new tax rates, followed by 3 bullet-point risks and recommendations."'},{id:8,name:"Iterative Refinement",color:p.frameOrange,border:p.frameOrange,q:"REFINE — don't restart",what:"Improving output through follow-ups — treating AI conversations as iterative, not one-shot.",why:"First drafts are starting points. Each refinement sharpens precision and usability.",without:'"Summarize attached case law."',with:'Step 1: "Summarize facts, issues and ruling." → Step 2: "Now create 5-bullet summary for Indian MNCs."'}],Vv=[{title:"Be specific about your role",desc:'Say "You are a senior tax manager in India" not just "You are a tax professional."'},{title:"State the output format",desc:"Ask for bullet points, table, 1-page memo, or email — whatever you'll actually use."},{title:"Set word or length limits",desc:'"Under 200 words" prevents unnecessary padding and forces concision.'},{title:"Reference specific statutes",desc:"Cite Acts, circulars, or sections to keep the AI legally grounded."},{title:"Iterate — don't restart",desc:"Ask follow-ups like 'Make it more concise' or 'Add a risk table.' Build on the conversation."}],$v=[{title:"Don't share confidential data",desc:"Never input client names, PAN numbers, or deal-specific financials into a public AI tool."},{title:"Don't accept output without review",desc:"AI can hallucinate statutes or dates. Always verify legal citations before use."},{title:"Don't use one-word prompts",desc:'"Explain GST" will produce a textbook. Ask for what you actually need, for whom.'},{title:"Don't ignore the tool's knowledge cutoff",desc:"AI may not know about the latest Finance Act amendments. Ground it or verify freshness."},{title:"Don't forget tone and audience",desc:"An internal memo for a partner reads very differently from a client advisory note."}],Tr=[{id:"context",name:"Context & Audience",color:p.frameTeal,summary:"Shape who the answer is for and how examples guide format.",techniques:[{id:"audience",name:"Audience Prompting",what:"Telling AI who the output is intended for.",does:"Adjusts language, depth and terminology for the reader.",without:'"Explain POEM provisions."',with:'"Explain POEM provisions for a CEO with no tax background using simple business language and examples."',taxUse:"Turn a dense POEM memo into a board-ready summary without losing the tax position."},{id:"few-shot",name:"Zero-Shot / Few-Shot",what:"Providing no examples (Zero-Shot) or sample examples (Few-Shot) to guide the AI.",does:"Guides the format and quality of the response.",without:'"Summarize this tax judgment."',with:'"Example Format: Issue → Taxpayer Argument → Revenue Argument → Decision → Key Takeaway. Now summarize this judgment using the same format."',taxUse:"Standardize ITAT ruling summaries across the team using one worked example as the template."}]},{id:"iterate",name:"Iterative Flow",color:p.frameOrange,summary:"Build, question, and refine — don't restart from scratch.",techniques:[{id:"iterative",name:"Iterative Prompting",what:"Improving the output through a series of follow-up prompts.",does:"Refines the response step by step until it meets your needs.",without:'"Draft a note on GST implications."',with:'"Draft a note on GST implications." → "Make it user-friendly." → "Reduce it to one page." → "Add a summary table."',taxUse:"Draft a GST advisory in passes — scope first, then tone, then a partner-ready one-pager."},{id:"flipped",name:"Flipped Prompting",what:"Asking AI to ask questions before answering.",does:"Helps gather missing context and improve accuracy.",without:'"Prepare a tax advisory note on this transaction."',with:'"Before preparing the advisory note, ask me all relevant questions regarding the transaction, jurisdictions, parties, objectives and timeline."',taxUse:"Surface missing facts on a cross-border deal before AI drafts the opinion."},{id:"refinement",name:"Refinement Prompting",what:"Asking AI to improve your question before attempting the task.",does:"Helps identify gaps and creates a stronger, more effective prompt.",without:'"Summarize the GST implications of this transaction."',with:'"Review my prompt and suggest a better version before answering. Highlight any missing context, assumptions or instructions that would improve the quality of the response."',taxUse:"Catch vague scope or missing grounding before the model produces a wrong GST analysis."}]},{id:"reasoning",name:"Structured Reasoning",color:p.frameBlue,summary:"Step through complex tax analysis with deliberate structure.",techniques:[{id:"cot",name:"Chain-of-Thought",what:"Asking AI to reason through a problem step by step.",does:"Improves structured thinking and analysis.",without:'"Does this arrangement create a Permanent Establishment risk?"',with:'"Assess this arrangement step-by-step: identify key facts, evaluate PE indicators, analyze supporting and opposing arguments, then conclude."',taxUse:"PE determinations where facts, indicators, and counter-arguments must be shown in sequence."},{id:"expansion",name:"Creative Expansion",what:"Asking AI to challenge assumptions and identify gaps.",does:"Generates additional perspectives and uncovers blind spots.",without:'"Review this restructuring proposal."',with:'"Review this restructuring proposal and identify 10 risks, unanswered questions or issues the team may have overlooked."',taxUse:"Stress-test a restructuring memo before partner sign-off — find what the first draft missed."}]},{id:"meta",name:"Meta & Craft",color:p.framePurple,summary:"Let AI help you design the prompt itself.",techniques:[{id:"meta",name:"Meta Prompting",what:"Asking AI to create or improve the prompt itself.",does:"Combines multiple prompting techniques and helps build stronger prompts.",without:'"Summarize this judgment."',with:'"Create the most effective prompt for summarizing a Supreme Court tax judgment for a Tax Partner. Incorporate persona, audience, format and key takeaway requirements."',taxUse:"Generate a reusable prompt template for Supreme Court tax ruling summaries."}]}],ar=[{key:"what",label:"What it is",color:p.frameBlue},{key:"does",label:"What it does",color:p.frameOrange},{key:"without",label:"Without",color:p.destructive},{key:"with",label:"With",color:p.success},{key:"taxUse",label:"Tax use case",color:p.eyebrowGold}],Gv=Tr.flatMap(i=>i.techniques.map(o=>({...o,category:i.name,categoryColor:i.color}))),Au=[{element:"Persona",question:"Who is the AI?",example:"Senior Tax Partner, India"},{element:"Context",question:"What's the situation?",example:"Client has cross-border IT support arrangement"},{element:"Instruction",question:"What exactly should it do?",example:"Summarise exposures above INR 25 Cr"},{element:"Constraints",question:"What are the limits?",example:"Under 200 words, last 3 assessment years"},{element:"Grounding",question:"Which sources apply?",example:"Income-tax Act, 1961 + CBDT circulars"},{element:"Tone",question:"How should it sound?",example:"Formal, client-ready"},{element:"Output",question:"What format?",example:"Table + 3 bullet risks"},{element:"Iterate",question:"How do you refine?",example:'Follow up: "Now make it 5 bullets for MNCs"'}],Uv=[{icon:b0,name:"Persona",color:p.frameMagenta,bg:"rgba(255,50,255,0.06)",desc:`Tell AI WHO to be. Like telling a new colleague: "Pretend you're a senior tax partner" — so it talks like one, not like a Wikipedia article.`},{icon:vv,name:"Context",color:p.frameTeal,bg:"rgba(50,255,255,0.06)",desc:"Give the background story. Like telling a taxi driver WHERE you're going — without it, AI drives in circles giving generic answers."},{icon:wv,name:"Instruction",color:p.yellow,bg:"rgba(255,230,0,0.08)",desc:`Say exactly WHAT to do. Like ordering food: "Give me a paneer tikka" works. "Give me something nice" doesn't.`},{icon:Tv,name:"Constraints",color:p.frameBlue,bg:"rgba(70,150,255,0.08)",desc:'Set boundaries. Like telling a kid "draw me a picture — but only use 3 colours and keep it on one page." Keeps AI focused.'},{icon:Lv,name:"Grounding",color:p.framePurple,bg:"rgba(180,0,255,0.06)",desc:'Tell AI WHERE to look. Like saying "only use THIS textbook for answers" — prevents it from making things up.'},{icon:Ev,name:"Tone / Style",color:p.yellow,bg:"rgba(255,230,0,0.08)",desc:`Tell AI HOW to sound. Like asking someone: "Explain it like I'm presenting to a CFO" vs "Explain it to a 5-year-old." Same info, different packaging.`},{icon:y0,name:"Output Format",color:p.frameGreen,bg:"rgba(0,200,100,0.08)",desc:'Tell AI WHAT SHAPE the answer should take. Like saying "give me a table, not a paragraph" — saves you 20 minutes of reformatting.'},{icon:Fv,name:"Iterative Refinement",color:p.frameOrange,bg:"rgba(255,125,30,0.08)",desc:`Don't restart — refine. Like editing a draft: "Make it shorter", "Add a table", "Simplify for the board." Each follow-up makes it better.`}],Yv=[{label:"User",value:"ABC Corp"},{label:"Issue",value:"Royalty payments"},{label:"Jurisdiction",value:"India"},{label:"Output",value:"1-page memo"},{label:"Deadline",value:"Thursday"},{label:"Audience",value:"User-ready"}],qv={prompts:[{id:"b1",answer:"persona",text:'"You are a senior international tax partner with 20 years of experience in India-US DTAA matters. Analyze whether this payment qualifies as royalty under Article 12."'},{id:"b2",answer:"context",text:'"Our client is an Indian subsidiary of a US pharma company. They pay ₹50 Cr annually as management fees to the parent. The AO has disallowed this under Section 37. The matter is pending before CIT(A)."'},{id:"b3",answer:"output",text:`"Present your analysis as a 3-column table with columns: Issue, Taxpayer's Position, Revenue's Likely Argument. Follow with 5 bullet-point recommendations."`},{id:"b4",answer:"constraints",text:'"Keep your response under 300 words. Focus only on the indirect transfer provisions under Section 9(1)(i). Do not cover capital gains computation or exemptions."'},{id:"b5",answer:"grounding",text:'"Base your analysis strictly on the Supreme Court ruling in Engineering Analysis Centre of Excellence (2022) and the CBDT Circular No. 17/2023. Do not rely on tribunal decisions."'}],elements:[{id:"grounding",label:"Grounding / Source Anchoring"},{id:"persona",label:"Persona"},{id:"constraints",label:"Constraints & Boundaries"},{id:"output",label:"Output Indicator"},{id:"context",label:"Context"}],scoreMsg:"You've got the basics down! These elements form the foundation of every effective prompt."},Zv={prompts:[{id:"a1",answer:"step-back",text:`"Before analyzing whether our client's arrangement triggers GAAR, first explain the general principles of anti-avoidance across OECD jurisdictions. Then apply those principles to the Indian GAAR provisions under Chapter X-A."`},{id:"a2",answer:"tree-of-thoughts",text:'"Consider 3 possible restructuring paths for this demerger: (A) tax-neutral under Section 2(19AA), (B) slump sale under Section 50B, (C) itemised sale of assets. Evaluate tax cost of each path separately, then recommend the optimal one."'},{id:"a3",answer:"self-refine",text:'"Draft a transfer pricing documentation memo for this IT services transaction. Then review your own draft as if you were the reviewing tax partner. Identify gaps, strengthen weak arguments, and produce an improved final version."'},{id:"a4",answer:"chain-verification",text:'"After completing your analysis of the PE exposure, list every factual claim and legal citation you made. Verify each one against the attached India-Singapore DTAA text. Correct any errors before presenting the final output."'},{id:"a5",answer:"analogical",text:`"The EU's digital services tax applies a 3% levy on revenues from targeted digital services. Using this as a parallel, analyze how India's Equalisation Levy (2%) compares in scope, applicability, and treaty override implications."`}],elements:[{id:"analogical",label:"Analogical Prompting"},{id:"chain-verification",label:"Chain of Verification"},{id:"step-back",label:"Step-back Prompting"},{id:"self-refine",label:"Self-Refine"},{id:"tree-of-thoughts",label:"Tree of Thoughts"}],scoreMsg:"Impressive! You can identify advanced techniques — now use them to supercharge your prompts."};function Hs(){return{selectedPromptId:null,correctCount:0,answeredCount:0,solvedPrompts:{},matchedElements:{},incorrectPromptId:null,highlightElementId:null,showScore:!1,scoreMessage:""}}function Iu(i,o){return o===5?i==="basic"?"🎉 Perfect score! You've mastered the basic prompt elements. Time to level up!":"🎉 Flawless! You can identify advanced techniques like a pro — now deploy them in your tax work.":o>=3?i==="basic"?"Solid foundation! Review the ones you missed and try again.":"Good grasp of advanced techniques! A quick review of the missed ones will make you unstoppable.":i==="basic"?"Worth another try — scroll up to the Prompt Elements section for a refresher.":"These are tricky! Revisit the Advanced Techniques section and give it another go."}const Wo=Nr.map(i=>{var o,s;return{id:i.id,name:i.name.replace(" / "," · "),shortName:i.name.split(" / ")[0],question:((o=Au[i.id-1])==null?void 0:o.question)??i.q,example:((s=Au[i.id-1])==null?void 0:s.example)??"",color:i.color,border:i.border,fragment:["You are a senior tax partner in India.","Our client in India provides IT support to its parent in Singapore.","Summarise tax exposures above INR 25 crore, under dispute in the last 3 assessment years.","Keep the response under 200 words.","According to the Income-tax Act, 1961 and latest CBDT circulars.","Use a formal, client-ready tone suitable for the Tax Head.","Provide a table followed by 3 bullet-point risks and recommendations.",'Then refine: "Now create a 5-bullet summary for Indian MNCs."'][i.id-1]}});function Kv(i){return[...i].sort((o,s)=>o-s).map(o=>{var s;return(s=Wo.find(u=>u.id===o))==null?void 0:s.fragment}).filter(Boolean).join(" ")}function Qv(){const[i,o]=I.useState([]),[s,u]=I.useState(!1),c=`2px solid ${p.yellow}`,f=new Set(i),g=[...i].sort((b,z)=>b-z).map(b=>Wo.find(z=>z.id===b)).filter(Boolean),x=Kv(i),m=b=>{o(z=>z.includes(b)?z.filter(E=>E!==b):[...z,b]),u(!1)},v=()=>{o([]),u(!1)},j=async()=>{x&&(await navigator.clipboard.writeText(x),u(!0),setTimeout(()=>u(!1),2e3))};return n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"minmax(240px, 280px) 1fr",gap:24,height:560,minHeight:560,background:p.offWhite,border:"1px solid rgba(46,46,56,0.10)",borderRadius:12,padding:20},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:0},children:[n.jsx("p",{style:{fontSize:13,color:p.gray01,fontFamily:k.regular,lineHeight:1.5,marginBottom:12,flexShrink:0},children:"Tap to add. Tap again to remove."}),n.jsx("div",{role:"group","aria-label":"Prompt elements",style:{display:"flex",flexDirection:"column",gap:6,overflowY:"auto",flex:1,paddingRight:4},children:Wo.map(b=>{const z=f.has(b.id);return n.jsxs("button",{type:"button","aria-pressed":z,onClick:()=>m(b.id),style:{width:"100%",display:"flex",alignItems:"center",gap:10,padding:"10px 12px",borderRadius:8,cursor:"pointer",textAlign:"left",background:z?"rgba(255,230,0,0.18)":p.white,border:z?`1.5px solid ${p.yellow}`:"1px solid rgba(46,46,56,0.12)",flexShrink:0},onFocus:E=>{E.currentTarget.style.outline=c},onBlur:E=>{E.currentTarget.style.outline="none"},children:[n.jsx("span",{style:{width:26,height:26,borderRadius:"50%",flexShrink:0,background:z?p.yellow:b.color+"22",border:z?"none":`1.5px solid ${b.border}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:11,fontWeight:800,color:z?p.confidentBlack:b.color,fontFamily:k.bold},children:b.id}),n.jsx("span",{style:{minWidth:0},children:n.jsx("span",{style:{display:"block",fontSize:13,fontWeight:700,color:z?p.offBlack:p.confidentBlack,fontFamily:k.bold},children:b.shortName})})]},b.id)})}),n.jsxs("p",{style:{fontSize:11,color:p.gray01,fontFamily:k.regular,marginTop:10,flexShrink:0},children:[i.length," of ",Wo.length," added"]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",minHeight:0,height:"100%"},children:[n.jsx("div",{"aria-label":"Prompt element stack",style:{flex:1,minHeight:0,overflowY:"auto",background:"transparent",border:"1px solid rgba(46,46,56,0.08)",borderRadius:"12px 12px 0 0",padding:"20px 24px"},children:g.length===0?n.jsx("div",{style:{height:"100%",minHeight:160,display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("p",{style:{fontSize:14,color:p.gray01,fontFamily:k.regular,margin:0,textAlign:"center",maxWidth:320,lineHeight:1.6},children:"Pick elements on the left — each one appears here as a tagged line."})}):n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:g.map(b=>n.jsxs("div",{style:{display:"flex",gap:12,alignItems:"flex-start",padding:"12px 14px",background:p.white,borderRadius:8,border:"1px solid rgba(46,46,56,0.08)",borderLeft:`3px solid ${b.border}`},children:[n.jsx("span",{style:{flexShrink:0,fontSize:10,fontWeight:800,letterSpacing:"0.04em",color:b.color,background:b.color+"18",border:`1px solid ${b.color}44`,borderRadius:4,padding:"3px 8px",fontFamily:k.bold,lineHeight:1.4},children:b.shortName.toUpperCase()}),n.jsx("p",{style:{margin:0,fontSize:14,lineHeight:1.65,color:p.offBlack,fontFamily:k.regular,flex:1},children:b.fragment}),n.jsx("button",{type:"button","aria-label":`Remove ${b.shortName}`,onClick:()=>m(b.id),style:{background:"none",border:"none",cursor:"pointer",color:p.gray01,fontSize:18,lineHeight:1,padding:"0 2px",flexShrink:0},children:"×"})]},b.id))})}),n.jsxs("div",{style:{flexShrink:0,background:p.white,border:"1px solid rgba(46,46,56,0.10)",borderTop:`2px solid ${p.yellow}`,borderRadius:"0 0 12px 12px",padding:"18px 24px",display:"flex",flexDirection:"column",gap:12},children:[n.jsx("span",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:p.eyebrowGold,fontFamily:k.bold},children:"Generated prompt"}),n.jsx("p",{"aria-live":"polite",style:{margin:0,fontSize:14,lineHeight:1.7,color:x?p.offBlack:p.gray01,fontFamily:k.light,fontStyle:x?"italic":"normal",maxHeight:72,overflowY:"auto",flex:1},children:x?`"${x}"`:"Your assembled prompt appears here as you add elements."}),n.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:8,flexShrink:0},children:[n.jsxs("button",{type:"button",onClick:v,disabled:i.length===0,style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:6,fontSize:12,fontFamily:k.regular,border:"1px solid rgba(46,46,56,0.15)",background:p.white,color:i.length===0?p.gray02:p.offBlack,cursor:i.length===0?"not-allowed":"pointer"},children:[n.jsx(Av,{size:13})," Reset"]}),n.jsxs("button",{type:"button",onClick:j,disabled:!x,style:{display:"flex",alignItems:"center",gap:6,padding:"8px 16px",borderRadius:6,fontSize:12,fontFamily:k.bold,border:"none",background:x?p.yellow:p.offWhite,color:x?p.confidentBlack:p.gray02,cursor:x?"pointer":"not-allowed"},children:[n.jsx(uv,{size:13})," ",s?"Copied!":"Copy prompt"]})]})]})]})]})}function Xv(){const i=["What issue?","Which jurisdiction?","What output?","By when?"];return n.jsx("section",{id:"team-briefing",style:{background:We.light.bg,padding:"72px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:p.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:k.bold},children:"Brief AI Like You Brief Your Team"}),n.jsx("p",{style:{fontSize:16,color:p.gray01,textAlign:"center",lineHeight:1.7,marginBottom:52,fontFamily:k.light},children:"The more context you provide, the better the outcome."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 60px 1fr",gap:0,alignItems:"stretch"},children:[n.jsxs("div",{style:{border:`1px solid ${p.destructive}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%",background:p.white},children:[n.jsx("div",{style:{background:p.destructive+"0d",padding:"14px 22px",borderBottom:`1px solid ${p.destructive}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:n.jsx("span",{style:{color:p.destructive,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:k.bold},children:"WEAK BRIEF"})}),n.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[n.jsx("div",{style:{background:p.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${p.destructive}`},children:n.jsx("p",{style:{color:p.offBlack,fontSize:15,fontStyle:"italic",lineHeight:1.65,fontFamily:k.light,margin:0},children:"“Research this matter and get back to me.”"})}),n.jsxs("div",{children:[n.jsx("div",{style:{color:p.destructive,fontSize:10,fontWeight:700,textTransform:"uppercase",letterSpacing:"1px",marginBottom:9,fontFamily:k.bold},children:"Missing:"}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8},children:i.map(o=>n.jsx("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:p.destructive+"0d",borderRadius:6},children:n.jsx("span",{style:{color:p.destructive,fontSize:11,fontWeight:600,fontFamily:k.bold},children:o})},o))})]}),n.jsxs("div",{style:{background:p.destructive+"0a",border:`1px dashed ${p.destructive}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[n.jsx("div",{style:{color:p.destructive,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:k.bold},children:"↓ OUTCOME"}),n.jsxs("p",{style:{color:p.gray01,fontSize:12,lineHeight:1.6,fontFamily:k.regular,margin:0},children:[n.jsx("strong",{style:{color:p.destructive},children:"Generic response"})," — vague, incomplete, and needs a full rewrite."]})]})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${p.destructive}4d, ${p.yellow}99, ${p.success}4d)`}}),n.jsx("div",{style:{background:p.white,border:`2px solid ${p.yellow}`,color:p.offBlack,fontSize:10,fontWeight:800,padding:"6px 8px",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:k.bold},children:"VS"}),n.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${p.success}4d, ${p.yellow}99, ${p.destructive}4d)`}})]}),n.jsxs("div",{style:{border:`1px solid ${p.success}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%",background:p.white},children:[n.jsx("div",{style:{background:p.success+"0d",padding:"14px 22px",borderBottom:`1px solid ${p.success}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:n.jsx("span",{style:{color:p.success,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:k.bold},children:"STRONG BRIEF"})}),n.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:6},children:Yv.map(o=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"7px 12px",background:p.success+"0d",borderRadius:6},children:[n.jsx("span",{style:{color:p.gray01,fontSize:11,fontWeight:600,minWidth:82,flexShrink:0,fontFamily:k.bold},children:o.label}),n.jsx("span",{style:{color:p.offBlack,fontSize:12,fontWeight:500,flex:1,fontFamily:k.regular},children:o.value}),n.jsx("span",{style:{color:p.success,fontSize:12,fontWeight:700},children:"✓"})]},o.label))}),n.jsxs("div",{style:{background:p.success+"0a",border:`1px dashed ${p.success}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[n.jsx("div",{style:{color:p.success,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:k.bold},children:"↓ OUTCOME"}),n.jsxs("p",{style:{color:p.gray01,fontSize:12,lineHeight:1.6,fontFamily:k.regular,margin:0},children:[n.jsx("strong",{style:{color:p.success},children:"Focused response"})," — ready to use, right scope, right audience."]})]})]})]})]}),n.jsx("div",{style:{textAlign:"center",marginTop:36},children:n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:14,flexWrap:"wrap",padding:"16px 28px",background:p.white,border:"1px solid rgba(46,46,56,0.10)",borderRadius:12},children:[n.jsx("div",{style:{background:p.yellowAlpha10,border:`1px solid ${p.yellow}44`,padding:"10px 20px",borderRadius:8,color:p.eyebrowGold,fontSize:14,fontWeight:600,fontFamily:k.bold},children:"A Good Brief"}),n.jsx("span",{style:{color:p.confidentBlack,fontSize:24,fontWeight:700,fontFamily:k.bold},children:"="}),n.jsx("div",{style:{background:p.info+"14",border:`1px solid ${p.info}33`,padding:"10px 20px",borderRadius:8,color:p.info,fontSize:14,fontWeight:600,fontFamily:k.bold},children:"A Good Prompt"})]})})]})})}function Jv(){return n.jsx("section",{id:"lazy-vs-pro",style:{background:We.neutral.bg,padding:"72px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:p.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:k.bold},children:"Same AI. Two Very Different Results."}),n.jsx("p",{style:{fontSize:16,color:p.gray01,textAlign:"center",lineHeight:1.7,marginBottom:52,fontFamily:k.light},children:"The only thing that changed? The way you asked."}),n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 60px 1fr",gap:0,alignItems:"stretch"},children:[n.jsxs("div",{style:{border:`1px solid ${p.destructive}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%"},children:[n.jsxs("div",{style:{background:p.destructive+"0d",padding:"14px 22px",borderBottom:`1px solid ${p.destructive}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:p.destructive,strokeWidth:"2",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M15 9l-6 6M9 9l6 6"})]}),n.jsx("span",{style:{color:p.destructive,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:k.bold},children:"THE LAZY ASK"})]}),n.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[n.jsx("div",{style:{background:p.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${p.destructive}`,minHeight:128,display:"flex",alignItems:"flex-start"},children:n.jsx("p",{style:{color:p.offBlack,fontSize:15,fontStyle:"italic",lineHeight:1.65,fontFamily:k.light,margin:0},children:"“Summarise this document”"})}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,minHeight:76},children:["No role","No context","No format","No limits"].map(i=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:p.destructive+"0d",borderRadius:6},children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:p.destructive,strokeWidth:"2.5",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),n.jsx("span",{style:{color:p.destructive,fontSize:11,fontWeight:600,fontFamily:k.bold},children:i})]},i))}),n.jsxs("div",{style:{background:p.destructive+"0a",border:`1px dashed ${p.destructive}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[n.jsx("div",{style:{color:p.destructive,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:k.bold},children:"↓ WHAT YOU GET BACK"}),n.jsxs("p",{style:{color:p.gray01,fontSize:12,lineHeight:1.6,fontFamily:k.regular,margin:0},children:["A generic 300-word wall of text. Wrong tone. Wrong audience. Needs complete rewriting. ",n.jsx("strong",{style:{color:p.destructive},children:"30 minutes wasted."})]})]})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:[n.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${p.destructive}4d, ${p.yellow}99, ${p.success}4d)`}}),n.jsx("div",{style:{background:p.white,border:`2px solid ${p.yellow}`,color:p.offBlack,fontSize:10,fontWeight:800,padding:"6px 8px",borderRadius:"50%",width:38,height:38,display:"flex",alignItems:"center",justifyContent:"center",fontFamily:k.bold},children:"VS"}),n.jsx("div",{style:{width:2,flex:1,background:`linear-gradient(180deg, ${p.success}4d, ${p.yellow}99, ${p.destructive}4d)`}})]}),n.jsxs("div",{style:{border:`1px solid ${p.success}33`,borderRadius:12,overflow:"hidden",display:"flex",flexDirection:"column",height:"100%"},children:[n.jsxs("div",{style:{background:p.success+"0d",padding:"14px 22px",borderBottom:`1px solid ${p.success}1f`,display:"flex",alignItems:"center",gap:10,minHeight:48},children:[n.jsxs("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:p.success,strokeWidth:"2",children:[n.jsx("path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"}),n.jsx("polyline",{points:"22 4 12 14.01 9 11.01"})]}),n.jsx("span",{style:{color:p.success,fontSize:11,fontWeight:700,letterSpacing:"1px",fontFamily:k.bold},children:"THE PRO ASK"})]}),n.jsxs("div",{style:{padding:22,flex:1,display:"flex",flexDirection:"column",gap:18},children:[n.jsx("div",{style:{background:p.offWhite,borderRadius:8,padding:"16px 18px",borderLeft:`3px solid ${p.success}`,minHeight:128,display:"flex",alignItems:"flex-start"},children:n.jsxs("p",{style:{color:p.offBlack,fontSize:14,fontStyle:"italic",lineHeight:1.65,fontFamily:k.light,margin:0},children:["“You are a ",n.jsx("strong",{style:{color:p.eyebrowGold,fontStyle:"normal"},children:"tax advisor"}),". Summarise the key ",n.jsx("strong",{style:{color:p.frameBlue,fontStyle:"normal"},children:"transfer pricing changes"})," in this circular for a ",n.jsx("strong",{style:{color:p.frameOrange,fontStyle:"normal"},children:"client memo"}),". Use ",n.jsx("strong",{style:{color:p.framePurple,fontStyle:"normal"},children:"bullet points"}),". Keep it under ",n.jsx("strong",{style:{color:p.success,fontStyle:"normal"},children:"200 words"}),".”"]})}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,minHeight:76},children:["Role defined","Task clear","Format set","Length capped"].map(i=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,padding:"7px 12px",background:p.success+"0d",borderRadius:6},children:[n.jsx("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:p.success,strokeWidth:"2.5",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),n.jsx("span",{style:{color:p.success,fontSize:11,fontWeight:600,fontFamily:k.bold},children:i})]},i))}),n.jsxs("div",{style:{background:p.success+"0a",border:`1px dashed ${p.success}33`,borderRadius:8,padding:14,marginTop:"auto"},children:[n.jsx("div",{style:{color:p.success,fontSize:10,fontWeight:700,letterSpacing:"1px",marginBottom:6,fontFamily:k.bold},children:"↓ WHAT YOU GET BACK"}),n.jsxs("p",{style:{color:p.gray01,fontSize:12,lineHeight:1.6,fontFamily:k.regular,margin:0},children:["A client-ready bullet list. Right tone. Right scope. Drop it straight into the email. ",n.jsx("strong",{style:{color:p.success},children:"Done in 30 seconds."})]})]})]})]})]})]})})}function ey(){const i=We.dark;return n.jsx("section",{id:"recap",style:{background:i.bg,padding:"100px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto",textAlign:"center"},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",justifyContent:"center",background:p.yellow,border:`1px solid ${p.gray02}`,borderRadius:100,padding:"6px 16px",marginBottom:16},children:n.jsx("span",{style:{color:p.offBlack,fontSize:14,fontFamily:k.regular},children:"Recap in a Nutshell"})}),n.jsxs("h2",{style:{fontSize:36,fontWeight:700,color:i.heading,marginBottom:10,fontFamily:k.bold},children:["Putting your ",n.jsx("span",{style:{color:p.yellow,fontStyle:"italic"},children:"#BestPrompt Forward"})]}),n.jsx("p",{style:{fontSize:16,color:i.body,lineHeight:1.6,marginBottom:50,fontFamily:k.light},children:"Your 8-element checklist. Before you hit Send, make sure you've covered these."}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:16,textAlign:"left"},children:Uv.map(({icon:o,name:s,color:u,desc:c})=>n.jsxs("div",{style:{background:p.white,border:`1px solid ${i.border}`,borderLeft:`4px solid ${u}`,borderRadius:12,padding:"21px 28px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,marginBottom:8},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:p.yellow,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx(o,{size:18,color:p.confidentBlack,strokeWidth:2})}),n.jsx("span",{style:{color:u,fontSize:15,fontWeight:700,fontFamily:k.bold},children:s})]}),n.jsx("p",{style:{color:p.gray01,fontSize:13,lineHeight:1.6,margin:0,fontFamily:k.regular},children:c})]},s))}),n.jsxs("div",{style:{marginTop:40,maxWidth:900,marginLeft:"auto",marginRight:"auto",background:p.surfaceOnDark,border:`1px solid ${i.border}`,borderTop:`3px solid ${p.yellow}`,borderRadius:12,padding:29,textAlign:"center"},children:[n.jsx("p",{style:{margin:0,fontSize:16,lineHeight:1.6,fontFamily:k.bold,color:i.heading},children:"We have shared the essentials. Now it's your turn to unlock the extraordinary."}),n.jsx("p",{style:{margin:"8px 0 0",fontSize:16,lineHeight:1.6,color:i.body,fontFamily:k.regular},children:"The more you practice, the sharper your prompts become. Start with one element — and layer more as you gain confidence."})]})]})})}function ty({onContinue:i}){return n.jsx(dd,{style:{background:We.neutral.bg,borderTop:`1px solid ${We.neutral.border}`},title:"Prompting skills — unlocked.",description:n.jsx(n.Fragment,{children:"The next module takes you into Microsoft 365 Copilot — where you'll apply these skills across Word, Excel, Outlook, and Teams with real tax use cases."}),ctaLabel:"Continue to Part 3: M365 Copilot Deep Dive",onContinue:i,meta:"Part 3 covers: Copilot in Word, Excel, Outlook, Teams, and real tax workflows"})}function ny(){const[i,o]=I.useState("basic"),[s,u]=I.useState({basic:Hs(),advanced:Hs()}),c=i==="basic"?qv:Zv,f=s[i],g=v=>{f.solvedPrompts[v]||u(j=>({...j,[i]:{...j[i],selectedPromptId:v}}))},x=v=>{const j=s[i];if(j.matchedElements[v]||!j.selectedPromptId)return;const b=c.prompts.find(B=>B.id===j.selectedPromptId);if(!b)return;const z=b.answer===v,E=j.answeredCount+1,D=j.correctCount+(z?1:0);if(z){u(B=>({...B,[i]:{...B[i],selectedPromptId:null,answeredCount:E,correctCount:D,solvedPrompts:{...B[i].solvedPrompts,[b.id]:!0},matchedElements:{...B[i].matchedElements,[v]:!0},showScore:E===5,scoreMessage:E===5?Iu(i,D):B[i].scoreMessage}}));return}u(B=>({...B,[i]:{...B[i],selectedPromptId:null,answeredCount:E,correctCount:D,incorrectPromptId:b.id,highlightElementId:b.answer,showScore:E===5,scoreMessage:E===5?Iu(i,D):B[i].scoreMessage}})),window.setTimeout(()=>{u(B=>({...B,[i]:{...B[i],incorrectPromptId:null,highlightElementId:null}}))},1500)},m=v=>{u(j=>({...j,[v]:Hs()}))};return n.jsx("section",{id:"match-activity",style:{background:We.neutral.bg,padding:"100px 64px",textAlign:"center",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1e3,margin:"0 auto"},children:[n.jsx("div",{style:{display:"inline-flex",background:p.accentOrange+"14",border:`1px solid ${p.accentOrange}40`,borderRadius:20,padding:"6px 18px",marginBottom:16},children:n.jsx("span",{style:{color:p.accentOrange,fontSize:11,fontWeight:700,letterSpacing:"1.26px",textTransform:"uppercase",fontFamily:k.bold},children:"Interactive Activity"})}),n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:p.confidentBlack,marginBottom:12,fontFamily:k.bold},children:"Match the Prompt to the Element"}),n.jsx("p",{style:{fontSize:16,color:p.gray01,lineHeight:1.6,marginBottom:24,fontFamily:k.regular,maxWidth:650,marginLeft:"auto",marginRight:"auto"},children:"Read each prompt example. Identify which prompting element or technique it demonstrates. Click the prompt, then click the matching element."}),n.jsx("div",{style:{display:"flex",justifyContent:"center",gap:12,marginBottom:40,flexWrap:"wrap"},children:[{id:"basic",label:"🎯 Basic Elements"},{id:"advanced",label:"🚀 Advanced Techniques"}].map(v=>n.jsx("button",{type:"button",onClick:()=>o(v.id),style:{padding:"10px 24px",borderRadius:8,fontSize:13,fontWeight:700,cursor:"pointer",border:i===v.id?`1px solid ${p.yellow}`:"1px solid rgba(46,46,56,0.12)",background:i===v.id?p.yellowAlpha10:p.white,color:i===v.id?p.eyebrowGold:p.gray01,fontFamily:k.bold},children:v.label},v.id))}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",gap:20,flexWrap:"wrap",marginBottom:30,padding:"14px 24px",background:p.white,border:"1px solid rgba(46,46,56,0.08)",borderRadius:10,maxWidth:700,marginLeft:"auto",marginRight:"auto"},children:["Click a prompt on the left","Click the matching element on the right","Get instant feedback"].map((v,j)=>n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,fontSize:12,color:p.gray01,fontFamily:k.regular},children:[n.jsx("span",{style:{width:20,height:20,borderRadius:"50%",background:p.yellowAlpha10,color:p.eyebrowGold,fontSize:10,fontWeight:800,display:"flex",alignItems:"center",justifyContent:"center"},children:j+1}),v]},v))}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:14},children:c.prompts.map((v,j)=>{const b=c.elements[j],z=f.selectedPromptId===v.id,E=f.solvedPrompts[v.id],D=f.incorrectPromptId===v.id,B=f.matchedElements[b.id],_=f.highlightElementId===b.id;return n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 80px 1fr",gap:0,alignItems:"stretch"},children:[n.jsxs("button",{type:"button",onClick:()=>g(v.id),disabled:E,style:{position:"relative",padding:"18px 20px",borderRadius:10,textAlign:"left",cursor:E?"default":"pointer",background:E?p.success+"0d":D?p.destructive+"0d":z?p.yellowAlpha10:p.white,border:E?`2px solid ${p.success}`:D?`2px solid ${p.destructive}`:z?`2px solid ${p.yellow}`:"2px solid rgba(46,46,56,0.10)",boxShadow:z?`0 0 15px ${p.yellowAlpha12}`:"none",fontFamily:k.regular},children:[n.jsx("span",{style:{position:"absolute",top:-8,left:-8,width:22,height:22,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,background:p.confidentBlack,color:p.yellow,border:"1px solid rgba(255,230,0,0.3)"},children:j+1}),E&&n.jsx("span",{style:{position:"absolute",top:10,right:12,color:p.success,fontSize:16,fontWeight:700},children:"✓"}),n.jsx("p",{style:{margin:0,fontSize:13,color:p.offBlack,lineHeight:1.6,fontStyle:"italic"},children:v.text})]}),n.jsx("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",color:p.gray01,fontSize:24},children:"⟷"}),n.jsxs("button",{type:"button",onClick:()=>x(b.id),disabled:B,style:{padding:"14px 20px",borderRadius:10,textAlign:"center",cursor:B?"default":"pointer",background:p.white,border:_?`2px solid ${p.success}`:B?`2px solid ${p.success}4d`:"2px solid rgba(46,46,56,0.10)",boxShadow:_?`0 0 12px ${p.success}80`:"none",fontSize:13,fontWeight:700,color:B?p.success:p.offBlack,opacity:B?.5:1,letterSpacing:"0.3px",fontFamily:k.bold},children:[b.label,B?" ✓":""]})]},v.id)})}),f.showScore&&n.jsxs("div",{style:{marginTop:30,padding:24,background:p.yellowAlpha10,border:`1px solid ${p.yellow}44`,borderRadius:12},children:[n.jsxs("div",{style:{fontSize:42,fontWeight:800,color:p.eyebrowGold,fontFamily:k.bold},children:[f.correctCount,"/5"]}),n.jsx("p",{style:{fontSize:14,color:p.gray01,marginTop:8,fontFamily:k.regular},children:f.scoreMessage||c.scoreMsg})]}),n.jsx("button",{type:"button",onClick:()=>m(i),style:{marginTop:20,padding:"10px 24px",border:"1px solid rgba(46,46,56,0.15)",borderRadius:6,background:p.white,color:p.gray01,fontSize:12,fontWeight:600,cursor:"pointer",fontFamily:k.bold},children:"↻ Reset & Try Again"})]})})}const Lu={1:"WHO should AI be?",2:"What is the background?",3:"What should AI do?",4:"What are the limits?",5:"Where should AI look?",6:"How should it sound?",7:"What shape should it take?",8:"How do you refine?"},gn={description:"Assigning a specific persona primes the AI's perspective, knowledge base, and tone. It shifts the response from a generic search engine summary to a contextual expert analysis.",whyMatters:'Without a specified persona, the LLM treats your inquiry through a generalist average lens. Specifying "Tax Partner" ensures it highlights liabilities and focuses precisely on structural risk mitigation.',without:'"Explain the GST applicability on supply of services under Section 7 of CGST Act."',with:'"Act as a Senior Indian Tax Partner specializing in indirect taxation. Analyze Section 7 of the CGST Act..."',withoutNote:"⚠️ Result: Produces a generic textbook definition without practical corporate tax planning implications.",withNote:"🌟 Result: Generates corporate advisory-level insights, highlighting risks, recent rulings, and planning loopholes.",fieldLabel:"Define the AI Persona below:",fieldPlaceholder:"AI Persona Definition",fieldTip:"Tip: Mention years of experience, field of mastery, and context-specific credentials.",proTips:['• Authority: Reference specific professional bodies or titles (e.g., "Chartered Accountant", "Audit Partner").','• Tone Setting: Give it constraints (e.g., "Be analytical, skeptical, and prioritize regulatory safety").']};function ry(){const[i,o]=I.useState(0),[s,u]=I.useState({}),c=Nr[i],f=s[c.id]??"",g=c.id===1,x=g?gn.description:c.what,m=g?gn.whyMatters:c.why,v=g?gn.without:c.without,j=g?gn.with:c.with,b=g?gn.withoutNote:"⚠️ Result: Output stays generic and misses the specifics of your tax situation.",z=g?gn.withNote:"🌟 Result: Output becomes precise, professional, and ready to use in your workflow.",E=g?gn.fieldLabel:`Define the ${c.name} below:`,D=g?gn.fieldPlaceholder:`${c.name} definition`,B=g?gn.fieldTip:`Tip: Be explicit about ${c.name.toLowerCase()} so the AI knows exactly what you need.`,_=g?gn.proTips:[`• Apply ${c.name.toLowerCase()} clearly in your opening sentence before the main task.`],Q=c.name.replace(" / "," ").toUpperCase();return n.jsx("section",{id:"elements",style:{background:We.dark.bg,padding:"80px 80px 48px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1280,margin:"0 auto",display:"flex",flexDirection:"column",gap:8},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16,marginBottom:8},children:[n.jsx("div",{style:{background:p.yellow,border:`1px solid ${p.gray02}`,borderRadius:100,padding:"6px 16px"},children:n.jsx("span",{style:{fontSize:14,color:p.offBlack,fontFamily:k.regular},children:"METHODOLOGY"})}),n.jsx("h2",{style:{fontSize:32,fontWeight:700,color:We.dark.heading,fontFamily:k.bold,letterSpacing:"-0.32px",textAlign:"center",margin:0},children:"Prompt like a Pro — The 8 Elements"}),n.jsx("p",{style:{fontSize:16,color:We.dark.body,fontFamily:k.light,lineHeight:"24px",textAlign:"center",maxWidth:760,margin:0},children:"The more context and structural anchors you provide, the better the final output."})]}),n.jsx("div",{style:{padding:"40px 0 20px",overflowX:"auto"},children:n.jsx("div",{style:{background:p.offWhite,border:`1px solid ${p.gray02}`,borderRadius:16,padding:24,display:"inline-flex",minWidth:"min(100%, 1232px)"},children:n.jsx("div",{style:{display:"flex",alignItems:"flex-start"},children:Nr.map((H,K)=>{const ge=K===i;return n.jsxs("div",{style:{display:"flex",alignItems:"flex-start"},children:[n.jsxs("button",{type:"button",onClick:()=>o(K),style:{background:ge?p.offWhite:"transparent",border:"none",borderRadius:8,padding:8,cursor:"pointer",display:"flex",flexDirection:"column",gap:12,alignItems:"flex-start",textAlign:"left",fontFamily:k.regular},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:14,background:ge?p.yellow:p.offBlack,display:"flex",alignItems:"center",justifyContent:"center",fontSize:14,fontWeight:800,color:ge?p.confidentBlack:p.white,fontFamily:k.bold},children:H.id}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:14,color:p.offBlack,lineHeight:"22px",whiteSpace:"nowrap"},children:H.name}),n.jsx("div",{style:{fontSize:12,color:p.gray01,lineHeight:"19.2px",whiteSpace:"nowrap"},children:Lu[H.id]})]})]}),K<Nr.length-1&&n.jsx("div",{style:{padding:"14px 16px 0 8px",display:"flex",alignItems:"center"},children:n.jsx(Oo,{size:14,color:p.gray01,strokeWidth:2})})]},H.id)})})})}),n.jsxs("div",{style:{display:"flex",gap:40,alignItems:"stretch",justifyContent:"center",flexWrap:"wrap",paddingTop:12},children:[n.jsxs("div",{style:{flex:"1 1 560px",maxWidth:760,background:p.confidentBlack,border:`1px solid ${p.gray02}`,borderRadius:20,padding:40,display:"flex",flexDirection:"column",gap:32,boxShadow:"0 16px 16px rgba(0,0,0,0.25)"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:16},children:[n.jsx("div",{style:{width:44,height:44,borderRadius:22,background:p.yellow,display:"flex",alignItems:"center",justifyContent:"center",fontSize:22,fontWeight:800,color:p.confidentBlack,fontFamily:k.bold,flexShrink:0},children:c.id}),n.jsxs("div",{children:[n.jsx("div",{style:{fontSize:28,fontWeight:700,color:p.white,fontFamily:k.bold,lineHeight:1.1},children:c.name}),n.jsx("div",{style:{fontSize:20,fontWeight:700,color:p.white,fontFamily:k.bold,lineHeight:"28px"},children:Lu[c.id]})]})]}),n.jsx("p",{style:{margin:0,fontSize:15,lineHeight:"25.5px",color:p.white,fontFamily:k.regular},children:x}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:10},children:[n.jsx("label",{style:{fontSize:16,fontWeight:700,color:p.white,fontFamily:k.bold},children:E}),n.jsx("textarea",{value:f,onChange:H=>u(K=>({...K,[c.id]:H.target.value})),placeholder:D,maxLength:2e3,style:{width:"100%",minHeight:118,resize:"vertical",background:p.confidentBlack,border:`1px solid ${p.yellow}`,borderRadius:4,padding:"8px 12px",fontSize:14,lineHeight:"20px",color:p.white,fontFamily:k.light,outline:"none"}}),n.jsxs("div",{style:{display:"flex",justifyContent:"space-between",gap:24,alignItems:"flex-start"},children:[n.jsx("p",{style:{margin:0,flex:1,fontSize:12,lineHeight:"18px",color:p.gray01,fontFamily:k.light},children:B}),n.jsxs("span",{style:{fontSize:12,color:p.white,fontFamily:k.light,whiteSpace:"nowrap"},children:[f.length,"/2000"]})]})]}),n.jsxs("div",{style:{background:p.offWhite,border:`1px solid ${p.gray02}`,borderRadius:12,padding:20,display:"flex",flexDirection:"column",gap:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6},children:[n.jsx(zu,{size:20,color:p.gray01,strokeWidth:2}),n.jsxs("span",{style:{fontSize:16,fontWeight:700,color:p.gray01,fontFamily:k.bold},children:["Pro ",c.name," Tips:"]})]}),_.map(H=>n.jsx("p",{style:{margin:0,fontSize:14,lineHeight:"22.4px",color:p.gray01,fontFamily:k.regular},children:H},H))]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:12,flexWrap:"wrap"},children:[n.jsx("button",{type:"button",onClick:()=>u(H=>({...H,[c.id]:""})),style:{background:"none",border:"none",color:p.white,fontSize:16,cursor:"pointer",fontFamily:k.regular,padding:"10px 16px"},children:"Reset Field"}),n.jsxs("div",{style:{display:"flex",gap:12},children:[n.jsx("button",{type:"button",disabled:i===0,onClick:()=>o(H=>Math.max(0,H-1)),style:{height:44,padding:"10px 16px",borderRadius:4,cursor:i===0?"not-allowed":"pointer",border:`1px solid ${p.gray02}`,background:"transparent",color:i===0?p.onDarkSubtle:p.white,fontSize:16,fontFamily:k.regular},children:"Back"}),i<Nr.length-1?n.jsxs("button",{type:"button",onClick:()=>o(H=>Math.min(Nr.length-1,H+1)),style:{height:44,padding:"10px 16px",borderRadius:4,border:"none",background:p.yellow,color:p.confidentBlack,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:k.bold},children:["Next Step: ",Nr[i+1].name]}):n.jsx("button",{type:"button",onClick:()=>o(0),style:{height:44,padding:"10px 16px",borderRadius:4,border:"none",background:p.yellow,color:p.confidentBlack,fontSize:16,fontWeight:700,cursor:"pointer",fontFamily:k.bold},children:"Start Over"})]})]})]}),n.jsxs("div",{style:{flex:"0 1 480px",display:"flex",flexDirection:"column",gap:16,minWidth:280},children:[n.jsxs("div",{style:{background:p.yellow,border:`1px solid ${p.gray02}`,borderRadius:16,padding:24,display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10},children:[n.jsx(zu,{size:20,color:p.offBlack,strokeWidth:2}),n.jsx("span",{style:{fontSize:20,fontWeight:700,color:p.offBlack,fontFamily:k.bold},children:"Why it matters"})]}),n.jsx("p",{style:{margin:0,fontSize:15,lineHeight:"25.5px",color:p.offBlack,fontFamily:k.regular},children:m})]}),n.jsxs("div",{style:{background:p.offWhite,border:`1px solid ${p.gray02}`,borderRadius:16,padding:24,display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[n.jsxs("span",{style:{background:"rgba(255,107,107,0.1)",padding:"2px 8px",borderRadius:4,fontSize:11,fontWeight:700,color:p.gray02,fontFamily:k.bold},children:["❌ WITHOUT ",Q]}),n.jsx("span",{style:{fontSize:14,color:p.gray01,fontFamily:k.regular},children:"The Generic Way"})]}),n.jsx("div",{style:{background:p.confidentBlack,borderRadius:8,padding:16},children:n.jsx("p",{style:{margin:0,fontSize:14,lineHeight:"22.4px",color:p.white,fontFamily:k.regular,fontStyle:"italic"},children:v})}),n.jsx("p",{style:{margin:0,fontSize:12,lineHeight:"19.2px",color:p.gray01,fontFamily:k.regular},children:b})]}),n.jsxs("div",{style:{background:p.offWhite,border:`1px solid ${p.gray02}`,borderRadius:16,padding:24,display:"flex",flexDirection:"column",gap:16},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[n.jsxs("span",{style:{background:"rgba(46,204,113,0.1)",padding:"2px 8px",borderRadius:4,fontSize:11,fontWeight:700,color:p.gray02,fontFamily:k.bold},children:["✅ WITH ",Q]}),n.jsx("span",{style:{fontSize:14,color:p.gray01,fontFamily:k.regular},children:"The Expert Way"})]}),n.jsx("div",{style:{background:p.confidentBlack,borderRadius:8,padding:16},children:n.jsx("p",{style:{margin:0,fontSize:14,lineHeight:"22.4px",color:p.white,fontFamily:k.regular,fontStyle:"italic"},children:j})}),n.jsx("p",{style:{margin:0,fontSize:12,lineHeight:"19.2px",color:p.gray01,fontFamily:k.regular},children:z})]})]})]}),n.jsx("div",{style:{paddingTop:24},children:n.jsx("div",{style:{height:1,background:We.dark.border,width:"100%"}})})]})})}function iy({view:i,onChange:o,onDark:s=!1}){const u=`2px solid ${p.yellow}`,c=[{id:"wizard",label:"Wizard",Icon:jv,hint:"One technique at a time"},{id:"table",label:"Table",Icon:y0,hint:"Scan all techniques"}];return n.jsx("div",{role:"tablist","aria-label":"Advanced techniques view",style:{display:"inline-flex",background:s?p.white:p.offWhite,border:"1px solid rgba(46,46,56,0.10)",borderRadius:10,padding:4,gap:4},children:c.map(({id:f,label:g,Icon:x,hint:m})=>{const v=i===f;return n.jsxs("button",{type:"button",role:"tab","aria-selected":v,title:m,onClick:()=>o(f),style:{display:"flex",alignItems:"center",gap:8,padding:"9px 16px",borderRadius:7,border:"none",cursor:"pointer",background:v?p.confidentBlack:"transparent",color:v?p.white:p.gray01,fontSize:13,fontWeight:v?700:500,fontFamily:v?k.bold:k.regular,transition:"background 0.15s, color 0.15s"},onFocus:j=>{j.currentTarget.style.outline=u},onBlur:j=>{j.currentTarget.style.outline="none"},children:[n.jsx(x,{size:15,strokeWidth:2}),g]},f)})})}function ay(){return n.jsx("div",{style:{overflowX:"auto"},children:n.jsxs("div",{style:{border:"1px solid rgba(46,46,56,0.10)",borderRadius:10,overflow:"hidden",minWidth:860},children:[n.jsx("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr 1.4fr 1.4fr 2fr 2fr",background:p.confidentBlack,padding:"14px 20px",gap:16},children:["Technique","Category","What it is","What it does","Without","With"].map((i,o)=>n.jsx("span",{style:{color:o===0?p.yellow:o>=4?o===4?p.destructive:p.success:p.gray02,fontSize:11,fontWeight:700,letterSpacing:"0.06em",textTransform:"uppercase",fontFamily:k.bold},children:i},i))}),Gv.map((i,o)=>n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1.2fr 1fr 1.4fr 1.4fr 2fr 2fr",padding:"18px 20px",gap:16,alignItems:"start",background:o%2===0?p.white:p.offWhite,borderTop:"1px solid rgba(46,46,56,0.07)"},children:[n.jsx("span",{style:{color:p.confidentBlack,fontSize:13,fontWeight:700,fontFamily:k.bold,lineHeight:1.4},children:i.name}),n.jsx("span",{style:{display:"inline-block",width:"fit-content",fontSize:10,fontWeight:700,fontFamily:k.bold,color:i.categoryColor,background:i.categoryColor+"14",border:`1px solid ${i.categoryColor}33`,borderRadius:4,padding:"3px 8px"},children:i.category}),n.jsx("span",{style:{color:p.gray01,fontSize:13,fontFamily:k.regular,lineHeight:1.6},children:i.what}),n.jsx("span",{style:{color:p.gray01,fontSize:13,fontFamily:k.regular,lineHeight:1.6},children:i.does}),n.jsx("span",{style:{color:p.destructive,fontSize:12,fontStyle:"italic",fontFamily:k.light,lineHeight:1.65,background:p.destructive+"0a",borderRadius:6,padding:"8px 12px",display:"block"},children:i.without}),n.jsx("span",{style:{color:p.success,fontSize:12,fontStyle:"italic",fontFamily:k.light,lineHeight:1.65,background:p.success+"0a",borderRadius:6,padding:"8px 12px",display:"block"},children:i.with})]},i.id))]})})}function oy({onDark:i=!1}){const[o,s]=I.useState("wizard"),u=i?We.dark.body:p.gray01;return n.jsxs(n.Fragment,{children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,flexWrap:"wrap",marginBottom:24},children:[n.jsx("p",{style:{fontSize:11,color:u,margin:0,fontFamily:k.regular,flex:1,minWidth:220},children:o==="wizard"?"Wizard — decompose left, walk through one facet at a time.":"Table — compare all techniques side by side for quick reference."}),n.jsx(iy,{view:o,onChange:s,onDark:i})]}),o==="wizard"?n.jsx(ly,{}):n.jsx(ay,{})]})}function ly(){const[i,o]=I.useState(Tr[0].id),[s,u]=I.useState({categoryId:Tr[0].id,techniqueId:Tr[0].techniques[0].id}),[c,f]=I.useState(0),g=Tr.find(E=>E.id===s.categoryId),x=g.techniques.find(E=>E.id===s.techniqueId),m=ar[c],v=x[m.key],j=m.key==="without"||m.key==="with",b=(E,D)=>{u({categoryId:E,techniqueId:D}),o(E),f(0)},z=`2px solid ${p.yellow}`;return n.jsxs("div",{style:{border:"1px solid rgba(46,46,56,0.10)",borderRadius:12,overflow:"hidden",display:"grid",gridTemplateColumns:"minmax(260px, 300px) 1fr",minHeight:520},children:[n.jsxs("nav",{"aria-label":"Advanced technique categories",style:{background:p.offWhite,borderRight:"1px solid rgba(46,46,56,0.08)",padding:"20px 0",display:"flex",flexDirection:"column"},children:[n.jsxs("div",{style:{padding:"0 20px 16px",borderBottom:"1px solid rgba(46,46,56,0.08)"},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:p.gray01,fontFamily:k.bold,marginBottom:4},children:"Decompose by topic"}),n.jsx("div",{style:{fontSize:13,color:p.offBlack,fontFamily:k.regular,lineHeight:1.5},children:"Pick a branch, then one technique."})]}),n.jsx("div",{style:{flex:1,overflowY:"auto",padding:"12px 10px"},children:Tr.map(E=>{const D=i===E.id;return n.jsxs("div",{style:{marginBottom:6},children:[n.jsxs("button",{type:"button","aria-expanded":D,onClick:()=>o(D?"":E.id),style:{width:"100%",display:"flex",alignItems:"center",gap:10,padding:"10px 12px",background:D?p.white:"transparent",border:D?"1px solid rgba(46,46,56,0.10)":"1px solid transparent",borderRadius:8,cursor:"pointer",textAlign:"left"},onFocus:B=>{B.currentTarget.style.outline=z},onBlur:B=>{B.currentTarget.style.outline="none"},children:[n.jsx("span",{style:{width:22,height:22,borderRadius:6,flexShrink:0,background:E.color+"18",border:`1.5px solid ${E.color}`,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10,fontWeight:800,color:E.color,fontFamily:k.bold},children:Tr.indexOf(E)+1}),n.jsxs("span",{style:{flex:1},children:[n.jsx("span",{style:{display:"block",fontSize:13,fontWeight:700,color:p.confidentBlack,fontFamily:k.bold},children:E.name}),n.jsxs("span",{style:{display:"block",fontSize:11,color:p.gray01,fontFamily:k.regular,marginTop:2},children:[E.techniques.length," technique",E.techniques.length>1?"s":""]})]}),n.jsx(Oo,{size:14,color:p.gray01,style:{flexShrink:0,transform:D?"rotate(90deg)":"none",transition:"transform 0.15s"}})]}),D&&n.jsx("div",{style:{marginTop:4,marginLeft:14,paddingLeft:14,borderLeft:`2px solid ${E.color}44`},children:E.techniques.map(B=>{const _=s.categoryId===E.id&&s.techniqueId===B.id;return n.jsx("button",{type:"button","aria-current":_?"true":void 0,onClick:()=>b(E.id,B.id),style:{width:"100%",display:"block",padding:"8px 12px",marginBottom:2,background:_?p.confidentBlack:"transparent",border:_?"none":"1px solid transparent",borderRadius:6,cursor:"pointer",textAlign:"left",fontSize:12,fontWeight:_?700:500,color:_?p.white:p.offBlack,fontFamily:_?k.bold:k.regular,lineHeight:1.4},onFocus:Q=>{Q.currentTarget.style.outline=z},onBlur:Q=>{Q.currentTarget.style.outline="none"},children:B.name},B.id)})})]},E.id)})})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",background:p.white},children:[n.jsxs("div",{style:{padding:"16px 24px",borderBottom:"1px solid rgba(46,46,56,0.08)",display:"flex",alignItems:"center",gap:8,flexWrap:"wrap"},children:[n.jsx("span",{style:{fontSize:11,color:g.color,fontWeight:700,fontFamily:k.bold},children:g.name}),n.jsx(Oo,{size:12,color:p.gray02}),n.jsx("span",{style:{fontSize:13,fontWeight:700,color:p.confidentBlack,fontFamily:k.bold},children:x.name}),n.jsxs("span",{style:{marginLeft:"auto",fontSize:11,color:p.gray01,fontFamily:k.regular},children:["Step ",c+1," of ",ar.length]})]}),n.jsx("div",{style:{display:"flex",gap:6,padding:"12px 24px",borderBottom:"1px solid rgba(46,46,56,0.06)"},children:ar.map((E,D)=>n.jsx("button",{type:"button","aria-label":`View ${E.label}`,"aria-current":D===c?"step":void 0,onClick:()=>f(D),style:{flex:1,height:4,borderRadius:2,border:"none",cursor:"pointer",background:D===c?E.color:D<c?E.color+"66":"rgba(46,46,56,0.10)",transition:"background 0.15s"},onFocus:B=>{B.currentTarget.style.outline=z,B.currentTarget.style.outlineOffset="2px"},onBlur:B=>{B.currentTarget.style.outline="none"}},E.key))}),n.jsxs("div",{style:{flex:1,padding:"28px 32px",display:"flex",flexDirection:"column",justifyContent:"center"},children:[n.jsx("div",{style:{fontSize:10,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",color:m.color,fontFamily:k.bold,marginBottom:12},children:m.label}),n.jsx("p",{style:{fontSize:m.key==="taxUse"?15:j?14:16,lineHeight:1.7,color:m.key==="without"?p.destructive:m.key==="with"?p.success:p.offBlack,fontFamily:j?k.light:k.regular,fontStyle:j?"italic":"normal",margin:0,maxWidth:560,padding:j?"16px 20px":0,background:j?m.key==="without"?p.destructive+"0a":p.success+"0a":"transparent",borderRadius:j?8:0,borderLeft:j?`3px solid ${m.color}`:"none"},children:v})]}),n.jsxs("div",{style:{padding:"14px 24px",borderTop:"1px solid rgba(46,46,56,0.08)",display:"flex",justifyContent:"space-between",alignItems:"center"},children:[n.jsxs("button",{type:"button",disabled:c===0,onClick:()=>f(E=>E-1),style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:6,border:"1px solid rgba(46,46,56,0.15)",background:c===0?p.offWhite:p.white,color:c===0?p.gray02:p.offBlack,cursor:c===0?"not-allowed":"pointer",fontSize:13,fontFamily:k.regular},onFocus:E=>{c>0&&(E.currentTarget.style.outline=z)},onBlur:E=>{E.currentTarget.style.outline="none"},children:[n.jsx(lv,{size:16})," Previous"]}),n.jsx("span",{style:{fontSize:12,color:p.gray01,fontFamily:k.regular},children:m.label}),n.jsxs("button",{type:"button",disabled:c===ar.length-1,onClick:()=>f(E=>E+1),style:{display:"flex",alignItems:"center",gap:6,padding:"8px 14px",borderRadius:6,border:"1px solid rgba(46,46,56,0.15)",background:c===ar.length-1?p.offWhite:p.confidentBlack,color:c===ar.length-1?p.gray02:p.white,cursor:c===ar.length-1?"not-allowed":"pointer",fontSize:13,fontFamily:k.bold},onFocus:E=>{c<ar.length-1&&(E.currentTarget.style.outline=z)},onBlur:E=>{E.currentTarget.style.outline="none"},children:["Next ",n.jsx(Oo,{size:16})]})]})]})]})}function sy({onBack:i,onNavigate:o}){return n.jsxs("div",{style:{position:"fixed",inset:0,overflowY:"auto",background:p.white},children:[n.jsx(gi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),n.jsx(Yo,{currentModuleId:"ai-tax-prompting",onNavigate:o,onBack:i}),n.jsxs("section",{id:"module-content",style:{background:p.confidentBlack,padding:"80px 64px 72px",position:"relative",overflow:"hidden"},children:[n.jsx("div",{style:{position:"absolute",top:0,left:0,right:0,height:3,background:Ux(5)}}),n.jsxs("div",{style:{maxWidth:860},children:[n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:8,background:"rgba(255,230,0,0.08)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:24,padding:"6px 18px",marginBottom:28},children:[n.jsx("div",{style:{width:6,height:6,borderRadius:"50%",background:p.yellow}}),n.jsx("span",{style:{color:p.yellow,fontSize:11,fontWeight:700,letterSpacing:"1.5px",fontFamily:k.bold},children:"PART 2 · AI TAX LABS"})]}),n.jsxs("h1",{style:{fontSize:52,fontWeight:700,color:p.white,lineHeight:1.15,marginBottom:20,fontFamily:k.bold},children:["Basics of"," ",n.jsx("span",{style:{color:p.yellow},children:"Prompting"})]}),n.jsx("p",{style:{fontSize:19,color:p.gray02,fontWeight:300,lineHeight:1.7,maxWidth:660,fontFamily:k.light},children:"The quality of your AI output is a direct function of your input. Learn the 8 elements of a great prompt — and how to use them in your daily tax work."}),n.jsxs("div",{style:{display:"flex",gap:12,marginTop:36},children:[n.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,230,0,0.10)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:20,color:p.yellow,fontSize:12,fontFamily:k.bold},children:"~30 min"}),n.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:20,color:p.gray02,fontSize:12,fontFamily:k.regular},children:"8 Elements"}),n.jsx("span",{style:{padding:"6px 16px",background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:20,color:p.gray02,fontSize:12,fontFamily:k.regular},children:"Interactive"})]})]})]}),n.jsx("section",{id:"pipeline",style:{background:We.neutral.bg,padding:"80px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto",display:"flex",flexDirection:"column",gap:48,alignItems:"center"},children:[n.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16,width:"100%"},children:[n.jsx("div",{style:{background:p.yellow,border:`1px solid ${p.gray02}`,borderRadius:100,padding:"6px 16px"},children:n.jsx("span",{style:{fontSize:14,color:p.offBlack,fontFamily:k.regular,lineHeight:"21px"},children:"THE PIPELINE"})}),n.jsx("h2",{style:{fontSize:32,fontWeight:700,color:p.offBlack,fontFamily:k.bold,lineHeight:1.2,letterSpacing:"-0.32px",textAlign:"center",margin:0},children:"A Prompt Is Simply an Instruction"}),n.jsx("p",{style:{fontSize:16,color:p.offBlack,fontFamily:k.light,lineHeight:"24px",textAlign:"center",maxWidth:760,margin:0},children:"AI responds to the instructions you provide. Better instructions produce better results."})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:32,width:"100%",alignItems:"center"},children:[n.jsxs("div",{style:{background:p.confidentBlack,border:`1px solid ${p.gray02}`,borderRadius:16,padding:32,width:"100%",display:"flex",alignItems:"center",justifyContent:"center",gap:24,flexWrap:"wrap"},children:[n.jsxs("div",{style:{background:p.white,border:`1.5px solid ${p.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[n.jsx("div",{style:{background:p.info+"33",borderRadius:100,padding:12,display:"flex"},children:n.jsx(b0,{size:24,color:p.info,strokeWidth:2})}),n.jsx("span",{style:{fontSize:15,color:p.offBlack,fontFamily:k.regular,lineHeight:"25.5px"},children:"YOU"}),n.jsx("span",{style:{border:`1px solid ${p.gray02}`,borderRadius:16,padding:"2px 8px",fontSize:14,color:p.offBlack,fontFamily:k.regular,lineHeight:"22.4px"},children:"Instruction"})]}),n.jsx(Us,{size:16,color:p.white,strokeWidth:2,style:{flexShrink:0}}),n.jsxs("div",{style:{background:p.yellow,border:`1.5px solid ${p.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[n.jsx("div",{style:{background:p.yellow,borderRadius:100,padding:12,display:"flex"},children:n.jsx(hv,{size:24,color:p.offBlack,strokeWidth:2})}),n.jsx("span",{style:{fontSize:15,color:p.offBlack,fontFamily:k.regular,lineHeight:"25.5px"},children:"AI ENGINE"}),n.jsx("span",{style:{border:`1px solid ${p.gray02}`,borderRadius:16,padding:"2px 8px",fontSize:14,color:p.offBlack,fontFamily:k.regular,lineHeight:"22.4px",background:p.yellow},children:"Processes"})]}),n.jsx(Us,{size:16,color:p.white,strokeWidth:2,style:{flexShrink:0}}),n.jsxs("div",{style:{background:p.gray01,border:`1.5px solid ${p.gray02}`,borderRadius:16,width:220,padding:20,display:"flex",flexDirection:"column",alignItems:"center",gap:12},children:[n.jsx("div",{style:{background:p.success+"33",borderRadius:100,padding:12,display:"flex"},children:n.jsx(cv,{size:24,color:p.success,strokeWidth:2})}),n.jsx("span",{style:{fontSize:15,color:p.offBlack,fontFamily:k.regular,lineHeight:"25.5px"},children:"RESULT"}),n.jsx("span",{style:{border:`1px solid ${p.gray02}`,borderRadius:16,padding:"2px 8px",fontSize:14,color:p.offBlack,fontFamily:k.regular,lineHeight:"22.4px",background:p.gray01},children:"Output"})]})]}),n.jsx("div",{style:{display:"flex",gap:24,width:"100%",flexWrap:"wrap"},children:[{Icon:Bv,text:"Specific input = Specific output."},{Icon:xv,text:"AI doesn't read your mind."},{Icon:_v,text:"Prompting is a skill, not a gift."}].map(({Icon:s,text:u})=>n.jsxs("div",{style:{flex:"1 1 240px",background:p.confidentBlack,border:`1px solid ${p.gray02}`,borderRadius:12,padding:20,display:"flex",alignItems:"center",gap:16},children:[n.jsx(s,{size:24,color:p.white,strokeWidth:2,style:{flexShrink:0}}),n.jsx("p",{style:{margin:0,fontSize:14,color:p.white,fontFamily:k.regular,lineHeight:"21px"},children:u})]},u))})]})]})}),n.jsx(Xv,{}),n.jsx(ry,{}),n.jsx(Jv,{}),n.jsx("section",{id:"stack-builder",style:{background:We.light.bg,padding:"80px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:p.confidentBlack,textAlign:"center",marginBottom:8,fontFamily:k.bold},children:"Build a Perfect Prompt — Piece by Piece"}),n.jsx("p",{style:{fontSize:16,color:p.gray01,textAlign:"center",lineHeight:1.7,marginBottom:8,fontFamily:k.light,maxWidth:650,marginLeft:"auto",marginRight:"auto"},children:"Click each ingredient below to add it to the prompt stack. Watch your prompt assemble in real time."}),n.jsx("p",{style:{fontSize:13,color:p.gray01,textAlign:"center",marginBottom:32,fontFamily:k.regular},children:"Use case: Analyzing withholding tax on software royalty payments from India to the US"}),n.jsx(Qv,{})]})}),n.jsx("section",{id:"advanced",style:{background:We.dark.bg,padding:"72px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1200,margin:"0 auto"},children:[n.jsx("p",{style:{color:We.dark.eyebrow,fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:k.bold,marginBottom:10},children:"NEXT LEVEL"}),n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:We.dark.heading,marginBottom:8,fontFamily:k.bold},children:"Advanced Prompting Techniques"}),n.jsx("p",{style:{fontSize:16,color:We.dark.body,lineHeight:1.7,marginBottom:12,fontFamily:k.light,maxWidth:680},children:"Once you've mastered the 8 elements, these techniques help you get more precise, structured, and creative output."}),n.jsx(oy,{onDark:!0})]})}),n.jsx(ny,{}),n.jsx("section",{id:"dos-donts",style:{background:We.light.bg,padding:"72px 64px",scrollMarginTop:Tt},children:n.jsxs("div",{style:{maxWidth:1100,margin:"0 auto"},children:[n.jsx("p",{style:{color:We.light.eyebrow,fontSize:11,fontWeight:700,letterSpacing:"0.08em",textTransform:"uppercase",fontFamily:k.bold,marginBottom:10},children:"GUARDRAILS"}),n.jsx("h2",{style:{fontSize:36,fontWeight:700,color:We.light.heading,marginBottom:48,fontFamily:k.bold},children:"Do's & Don'ts"}),n.jsxs("div",{children:[n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,marginBottom:16},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 18px",background:p.success+"1a",border:`1px solid ${p.success}40`,borderRadius:8},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:p.success,strokeWidth:"2.5",children:n.jsx("polyline",{points:"20 6 9 17 4 12"})}),n.jsx("span",{style:{color:p.success,fontSize:14,fontWeight:700,fontFamily:k.bold},children:"DO THIS"})]}),n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,padding:"12px 18px",background:p.destructive+"1a",border:`1px solid ${p.destructive}40`,borderRadius:8},children:[n.jsx("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:p.destructive,strokeWidth:"2.5",children:n.jsx("path",{d:"M18 6L6 18M6 6l12 12"})}),n.jsx("span",{style:{color:p.destructive,fontSize:14,fontWeight:700,fontFamily:k.bold},children:"DON'T DO THIS"})]})]}),n.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12},children:Vv.map((s,u)=>{const c=$v[u];return c?n.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:32,alignItems:"stretch"},children:[n.jsxs("div",{style:{height:"100%",padding:"16px 18px",background:We.neutral.bg,borderRadius:8,border:`1px solid ${We.light.border}`,borderLeft:`3px solid ${p.success}`,display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{fontSize:13,fontWeight:700,color:p.success,marginBottom:5,fontFamily:k.bold},children:s.title}),n.jsx("div",{style:{fontSize:13,color:We.light.body,lineHeight:1.6,fontFamily:k.regular,flex:1},children:s.desc})]}),n.jsxs("div",{style:{height:"100%",padding:"16px 18px",background:We.neutral.bg,borderRadius:8,border:`1px solid ${We.light.border}`,borderLeft:`3px solid ${p.destructive}`,display:"flex",flexDirection:"column"},children:[n.jsx("div",{style:{fontSize:13,fontWeight:700,color:p.destructive,marginBottom:5,fontFamily:k.bold},children:c.title}),n.jsx("div",{style:{fontSize:13,color:We.light.body,lineHeight:1.6,fontFamily:k.regular,flex:1},children:c.desc})]})]},s.title):null})})]}),n.jsx("div",{style:{marginTop:40,padding:"14px 22px",background:p.yellowAlpha10,border:`1px solid ${p.yellow}33`,borderRadius:8,textAlign:"center"},children:n.jsx("p",{style:{fontSize:12,color:p.eyebrowGold,lineHeight:1.6,fontFamily:k.regular},children:"⚠️ AI tools are assistants, not advisors. All output must be reviewed by a qualified tax professional before client delivery. Never input confidential or personally identifiable information into public AI platforms."})})]})}),n.jsx(ey,{}),n.jsx(ty,{onContinue:()=>o("/copilot-hub")}),n.jsx("div",{style:{background:We.light.bg,borderTop:`1px solid ${We.light.border}`,padding:"24px 64px",textAlign:"center"},children:n.jsx("p",{style:{color:p.gray01,fontSize:12,fontFamily:k.regular},children:"EY.ai Tax Labs · AI Tax Prompting Module · For internal training use only. Not for external distribution."})})]})}const Y={yellow:"#FFE600",dark:"#1A1A24",dark2:"#2E2E38",gray01:"#747480",gray02:"#C4C4CD",offWhite:"#F6F6FA",white:"#FFFFFF",frameGreen:"#00C864",wordBlue:"#4696FF",excelGreen:"#00C864",pptOrange:"#FF3C00",outlookBlue:"#4696FF",teamsViolet:"#B400FF"};function dy({height:i=32,letterColor:o="#FFFFFF"}){return n.jsxs("svg",{viewBox:"0 -18 217.599 217.599",width:i*(217.599/181.599),height:i,"aria-label":"EY logo",children:[n.jsx("path",{fill:Y.yellow,d:"M0 79.4L217.599 0v41z"}),n.jsx("path",{fill:o,d:"M24.9 150.6h28.5v-16.5H24.9v-13h31.5L46 103H1.4v78.6h62.8v-18.1H24.9zM106.1 103l-13.3 25.7L79.4 103h-26l27.4 47.6v31h23.5v-31l27.5-47.6z"})]})}function $o({size:i=20}){return n.jsxs("svg",{width:i,height:i,viewBox:"0 0 32 32",fill:"none",children:[n.jsx("circle",{cx:"16",cy:"16",r:"16",fill:"url(#cg)"}),n.jsx("defs",{children:n.jsxs("radialGradient",{id:"cg",cx:"30%",cy:"30%",children:[n.jsx("stop",{offset:"0%",stopColor:"#4696FF"}),n.jsx("stop",{offset:"100%",stopColor:"#B400FF"})]})}),n.jsx("path",{d:"M16 8l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5z",fill:"#FFFFFF",opacity:".9"})]})}const k0=[{id:"word",label:"Word Prompts",color:Y.wordBlue,appColor:Y.wordBlue,letter:"W"},{id:"excel",label:"Excel Formulas",color:Y.excelGreen,appColor:Y.excelGreen,letter:"X"},{id:"ppt",label:"PowerPoint Decks",color:Y.pptOrange,appColor:Y.pptOrange,letter:"P"},{id:"outlook",label:"Outlook Threads",color:Y.outlookBlue,appColor:Y.outlookBlue,letter:"O"},{id:"m365",label:"M365 Chat",color:Y.teamsViolet,appColor:Y.teamsViolet,letter:"T"}],cy={word:{eyebrow:"DOCUMENT INTELLIGENCE",eyebrowColor:Y.wordBlue,h2:"Copilot in Word",subtitle:"Draft documents, summarize content, and rewrite text with AI-powered assistance. Build professional issue memos and restructure client communication instantly.",features:[{title:"Draft Position Notes",body:"Generate comprehensive first-cut tax research memos, issue analyses, and legal summaries for client reviews."},{title:"Refine Legal Language",body:"Audit and adjust draft submissions, ensuring technical precision and alignment with jurisdictional requirements."},{title:"Summarize Case Laws",body:"Quickly synthesize extensive tax court rulings, tribunal orders, and state circulars into essential facts and holdings."},{title:"Track Review Points",body:"Convert comments and inputs into action points, open items and next-step trackers."}],prompt:'"Draft a position memo on international tax safe harbor implications for tech transfers."',suggestions:["Summarize Rulings","Rewrite & Restructure"],screenshotSide:"left",altBg:!0},excel:{eyebrow:"ANALYTICAL ROUTINES",eyebrowColor:Y.excelGreen,h2:"Copilot in Excel",subtitle:"Analyze data, create formulas, generate charts, and uncover insights from your spreadsheets. Build clean logical checks and eliminate calculation bugs.",features:[{title:"Analyse Tax Data",body:"Summarise large datasets and identify key trends, gaps, mismatches and exceptions."},{title:"Spot Exceptions",body:"Detect anomalies such as missing details, rate mismatches or duplicates."},{title:"Build Reconciliations",body:"Create formulas and logic checks to compare books, returns and working papers."},{title:"Visualise Compliance",body:"Create dashboards to show status, exposures, ageing and risk movement."}],prompt:'"Highlight and partition any invoice entries where currency rates deviate by more than 2%."',suggestions:["Flag Anomalies","Build Formula"],screenshotSide:"right",altBg:!1},ppt:{eyebrow:"COLLABORATIVE & CREATIVE DELIVERY",eyebrowColor:Y.pptOrange,h2:"Copilot in PowerPoint & Chat",subtitle:"Translate raw data matrices into compelling slides, executive summaries, and cross-application project definitions. Use Interactive Chat to coordinate answers.",features:[{title:"Create Client Decks",body:"Convert tax analysis into structured, visually clean, client-ready presentations."},{title:"Prepare Leadership Updates",body:"Generate concise leadership slides on exposures, updates and decisions required."},{title:"Tell the Tax Story",body:"Organise complex positions into context, issue, risk, recommendation and next steps."},{title:"Summarise Case Strategy",body:"Build crisp hearing briefs, timelines and argument maps."}],prompt:'"Create a 5-slide visual presentation deck outlining the safe harbor risks for Q3."',suggestions:["Summarize Rulings","Rewrite & Restructure"],screenshotSide:"right",altBg:!0},outlook:{eyebrow:"COMMUNICATIONS & AGENDAS",eyebrowColor:Y.outlookBlue,h2:"Copilot in Outlook",subtitle:"Summarize email threads, draft replies, and manage your inbox efficiently. Convert messy, sprawling client communications into actionable priorities in seconds.",features:[{title:"Draft Client Emails",body:"Prepare clear professional emails for data requests, updates and follow-ups."},{title:"Manage Follow-ups",body:"Convert email conversations into action-oriented follow-ups."},{title:"Summarise Threads",body:"Extract decisions, pending inputs, responsibilities and deadlines from long chains."},{title:"Polish Tone Instantly",body:"Rewrite responses to sound concise, client-sensitive and executive-ready."}],prompt:'"Summarise this 12-email thread, listing all key approvals and unresolved items for the compliance team."',suggestions:["Summarize Thread","Draft Reply"],screenshotSide:"left",altBg:!1},m365:{eyebrow:"COLATE INFORMATION ACROSS M365",eyebrowColor:Y.teamsViolet,h2:"Copilot in M365 Chat",subtitle:"Use Copilot in M365 Chat to ask questions, get summaries, and generate content across your Microsoft 365 data. Chat brings together information from documents, emails, meetings, and contacts to give you AI-powered answers grounded in your work data.",features:[{title:"Search Across Work",body:"Find tax-related discussions, documents, emails and files across Microsoft 365."},{title:"Connect Tax Context",body:"Connect compliance data, research notes, email trails and presentation inputs."},{title:"Prepare Matter Briefs",body:"Generate briefing notes before client calls or internal reviews."},{title:"Accelerate First Drafts",body:"Create starting drafts for emails, memos, decks, trackers and meeting prep."}],prompt:'"Find all tax-related documents James shared last week and summarise the key updates."',suggestions:["Search Docs","Summarise"],screenshotSide:"right",altBg:!0}};function py({title:i,body:o}){return n.jsxs("div",{style:{background:Y.white,borderRadius:12,padding:"24px",boxShadow:"0 1px 4px rgba(0,0,0,0.05)",borderBottom:"1px solid #C4C4CD"},children:[n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:16,color:Y.dark2,marginBottom:8,lineHeight:1.3},children:i}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:14,color:Y.gray01,lineHeight:1.6},children:o})]})}function j0({prompt:i,suggestions:o}){return n.jsxs("div",{style:{width:220,background:Y.white,borderLeft:"1px solid #C4C4CD",padding:16,flexShrink:0},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,marginBottom:16},children:[n.jsx($o,{size:22}),n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:14,color:Y.dark2},children:"Copilot"})]}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:11,color:Y.gray01,marginBottom:6,fontWeight:600,letterSpacing:"0.04em"},children:"CURRENT PROMPT"}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:12,background:Y.offWhite,padding:"10px 12px",borderRadius:8,fontStyle:"italic",color:Y.dark2,lineHeight:1.5,marginBottom:16},children:i}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:11,color:Y.gray01,marginBottom:8,fontWeight:600,letterSpacing:"0.04em"},children:"SUGGESTIONS"}),o.map(s=>n.jsxs("div",{style:{display:"inline-flex",alignItems:"center",gap:6,padding:"5px 10px",borderRadius:16,border:"1px solid #C4C4CD",fontSize:11,color:Y.dark2,marginRight:4,marginBottom:4,background:Y.white,cursor:"default",fontFamily:k.regular},children:[n.jsxs("svg",{width:"10",height:"10",viewBox:"0 0 12 12",fill:"none",children:[n.jsx("circle",{cx:"6",cy:"6",r:"5.5",stroke:Y.frameGreen}),n.jsx("path",{d:"M3.5 6l1.7 1.7L8.5 4.5",stroke:Y.frameGreen,strokeWidth:"1.2",strokeLinecap:"round"})]}),s]},s))]})}function uy({prompt:i,suggestions:o}){return n.jsxs("div",{style:{flex:1,background:"#F6F6FA",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsxs("div",{style:{background:Y.wordBlue,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[n.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#4696FF"}),n.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:"W"})]}),n.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:k.regular,fontWeight:600},children:"Untitled Document"}),n.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:16},children:["File","Home","Insert"].map(s=>n.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontSize:11,fontFamily:k.regular},children:s},s))})]}),n.jsxs("div",{style:{display:"flex",minHeight:320},children:[n.jsxs("div",{style:{flex:1,padding:"24px 24px",fontFamily:k.regular,overflow:"hidden"},children:[n.jsx("p",{style:{fontWeight:700,fontSize:16,color:"#1A1A24",marginBottom:12},children:"International Tax Transfer Pricing Memo"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65",marginBottom:12},children:"Executive Summary: This document outlines the current regulatory landscape regarding safe harbor provisions for cross-border tech transfers. The following sections detail the methodology for calculating arm's length pricing and the implications of recent tribunal rulings on multinational entities."}),n.jsx("p",{style:{fontWeight:600,fontSize:13,color:"#1A1A24",marginBottom:6},children:"• Methodology"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65"},children:"We will utilize the Comparable Uncontrolled Price (CUP) method to establish a baseline for royalty rates. This approach ensures compliance with OECD guidelines while providing a defensible position for audit purposes."})]}),n.jsx(j0,{prompt:i,suggestions:o})]})]})}const fy=[{n:2,id:"INV-20240101",exp:"1.1250",act:"1.1260",flag:"OK",ent:"DE Entity A",flagged:!1,active:!1},{n:3,id:"INV-20240102",exp:"1.1250",act:"1.1520",flag:"FLAG",ent:"FR Entity B",flagged:!0,active:!1},{n:4,id:"INV-20240103",exp:"1.1250",act:"1.1480",flag:"FLAG",ent:"NL Entity C",flagged:!1,active:!0},{n:5,id:"INV-20240104",exp:"1.1250",act:"1.1255",flag:"OK",ent:"UK Entity D",flagged:!1,active:!1},{n:6,id:"INV-20240105",exp:"1.1250",act:"1.1610",flag:"FLAG",ent:"ES Entity E",flagged:!0,active:!1},{n:7,id:"INV-20240106",exp:"1.1250",act:"1.1258",flag:"OK",ent:"IT Entity F",flagged:!1,active:!1},{n:8,id:"INV-20240107",exp:"1.1250",act:"1.1263",flag:"OK",ent:"PL Entity G",flagged:!1,active:!1,faded:!0}];function hy({prompt:i,suggestions:o}){return n.jsxs("div",{style:{flex:1,background:"#FFFFFF",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsxs("div",{style:{background:Y.excelGreen,padding:"8px 14px",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[n.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#00C864"}),n.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:"X"})]}),n.jsx("span",{style:{color:"#FFFFFF",fontSize:12,fontFamily:k.regular,fontWeight:600},children:"TaxAnalysis_Q4_2024.xlsx - Excel"}),n.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:10},children:[Y.excelGreen,"#00C864","#00C864"].map((s,u)=>n.jsx("div",{style:{width:10,height:10,borderRadius:"50%",background:s,border:"1px solid rgba(255,255,255,0.3)"}},u))})]}),n.jsx("div",{style:{background:"#F6F6FA",padding:"4px 14px",display:"flex",gap:16,borderBottom:"1px solid #C4C4CD"},children:["File","Home","Insert","Formulas","Data","Review","View","Copilot"].map(s=>n.jsx("span",{style:{fontSize:11,color:"#2E2E38",fontFamily:k.regular},children:s},s))}),n.jsxs("div",{style:{background:"#FFFFFF",padding:"5px 14px",display:"flex",alignItems:"center",gap:8,borderBottom:"1px solid #C4C4CD"},children:[n.jsx("span",{style:{background:"#F6F6FA",padding:"3px 8px",borderRadius:4,fontSize:10,fontFamily:"monospace",fontWeight:600},children:"D4"}),n.jsx("span",{style:{width:1,height:16,background:"#C4C4CD"}}),n.jsx("span",{style:{fontFamily:"monospace",fontSize:10,color:Y.excelGreen},children:'=IF(ABS(C4-B4)/B4>0.02,"FLAG","OK")'})]}),n.jsxs("div",{style:{position:"relative",overflowX:"auto"},children:[n.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:10,fontFamily:k.regular},children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{background:"#F6F6FA",width:32,padding:"5px 6px",border:"1px solid #C4C4CD",color:"#747480"}}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Invoice ID"}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Expected Rate"}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Actual Rate"}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Variance Flag"}),n.jsx("th",{style:{background:"#F6F6FA",padding:"5px 6px",border:"1px solid #C4C4CD",textAlign:"left",color:"#2E2E38",fontWeight:600},children:"Entity"})]})}),n.jsx("tbody",{children:fy.map(s=>n.jsxs("tr",{style:{background:s.active?"rgba(16,124,65,0.06)":s.flagged?"rgba(192,57,43,0.04)":"#FFFFFF",opacity:s.faded?.45:1},children:[n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?Y.excelGreen:"#747480",textAlign:"center",fontWeight:s.active?700:400},children:s.n}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?Y.excelGreen:s.flagged?"#FF4136":"#2E2E38"},children:s.id}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:"#2E2E38"},children:s.exp}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.flagged?"#FF4136":s.active?Y.excelGreen:"#2E2E38",fontWeight:s.flagged||s.active?600:400},children:s.act}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD"},children:n.jsx("span",{style:{background:s.flag==="FLAG"?s.active?Y.excelGreen:"rgba(192,57,43,0.12)":"transparent",color:s.flag==="FLAG"?s.active?"#FFFFFF":"#FF4136":Y.excelGreen,padding:"2px 6px",borderRadius:4,fontWeight:700},children:s.flag})}),n.jsx("td",{style:{padding:"5px 6px",border:"1px solid #C4C4CD",color:s.active?Y.excelGreen:"#2E2E38"},children:s.ent})]},s.n))})]}),n.jsxs("div",{style:{background:"#FFFFFF",borderTop:"1px solid #C4C4CD",padding:12},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:6,marginBottom:10},children:[n.jsx($o,{size:16}),n.jsx("span",{style:{fontFamily:k.regular,fontSize:11,fontWeight:700,background:Y.excelGreen,color:"#FFFFFF",padding:"2px 8px",borderRadius:10},children:"Copilot"})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:6},children:[n.jsx("div",{style:{fontSize:10,fontFamily:k.regular,padding:"8px 10px",borderRadius:8,background:"#F6F6FA",color:"#2E2E38",lineHeight:1.5},children:"I've analysed your transaction data. I found 2 invoices where currency rate deviation exceeds your 2% threshold."}),n.jsx("div",{style:{fontSize:10,fontFamily:k.regular,padding:"8px 10px",borderRadius:8,background:Y.excelGreen,color:"#FFFFFF",alignSelf:"flex-end",maxWidth:"85%",lineHeight:1.5},children:"Highlight and partition any invoice entries where currency rates deviate by more than 2%."}),n.jsxs("div",{style:{fontSize:10,fontFamily:k.regular,padding:"8px 10px",borderRadius:8,background:"#F6F6FA",color:"#2E2E38",lineHeight:1.5},children:["Done! Rows 3 and 6 are flagged. Column D formula applied:",n.jsx("div",{style:{fontFamily:"monospace",fontSize:9,color:Y.excelGreen,background:"#F6F6FA",padding:"4px 8px",borderRadius:4,marginTop:4},children:'=IF(ABS(C-B)/B>0.02,"FLAG","OK")'})]})]}),n.jsxs("div",{style:{marginTop:8,display:"flex",alignItems:"center",background:Y.offWhite,borderRadius:8,padding:"6px 10px"},children:[n.jsx("span",{style:{flex:1,fontFamily:k.regular,fontSize:11,color:Y.gray01},children:"Ask Copilot something..."}),n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:Y.gray01,strokeWidth:"2",children:[n.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),n.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})]})]})]})]})}function Nu({appColor:i,appLetter:o,title:s,bodyContent:u,prompt:c,suggestions:f}){return n.jsxs("div",{style:{flex:1,background:"#F6F6FA",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsxs("div",{style:{background:i,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[n.jsx("rect",{width:"18",height:"19",rx:"2",fill:i}),n.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:o})]}),n.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:k.regular,fontWeight:600},children:s}),n.jsx("div",{style:{marginLeft:"auto",display:"flex",gap:16},children:["File","Home","Insert"].map(g=>n.jsx("span",{style:{color:"rgba(255,255,255,0.85)",fontSize:11,fontFamily:k.regular},children:g},g))})]}),n.jsxs("div",{style:{display:"flex",minHeight:300},children:[n.jsx("div",{style:{flex:1,padding:24,fontFamily:k.regular,overflow:"hidden"},children:u}),n.jsx(j0,{prompt:c,suggestions:f})]})]})}function gy(){return n.jsxs("div",{style:{flex:1,background:"#FFFFFF",borderRadius:12,overflow:"hidden",boxShadow:"0 4px 16px rgba(0,0,0,0.06)"},children:[n.jsxs("div",{style:{background:Y.teamsViolet,padding:"10px 16px",display:"flex",alignItems:"center",gap:8},children:[n.jsxs("svg",{width:"18",height:"19",viewBox:"0 0 18 19",children:[n.jsx("rect",{width:"18",height:"19",rx:"2",fill:"#B400FF"}),n.jsx("text",{x:"4",y:"13",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:"T"})]}),n.jsx("span",{style:{color:"#FFFFFF",fontSize:13,fontFamily:k.regular,fontWeight:600},children:"M365 Chat"})]}),n.jsxs("div",{style:{padding:20},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,paddingBottom:16,borderBottom:"1px solid #C4C4CD",marginBottom:16},children:[n.jsx($o,{size:28}),n.jsxs("div",{children:[n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:15,color:Y.dark2},children:"Copilot"}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:12,color:Y.excelGreen},children:"Online"})]})]}),n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:14},children:[n.jsxs("div",{style:{display:"flex",gap:10},children:[n.jsx("div",{style:{width:28,height:28,borderRadius:"50%",background:Y.yellow,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,fontFamily:k.regular,fontWeight:700,fontSize:12,color:Y.dark},children:"U"}),n.jsx("div",{style:{background:"#F6F6FA",padding:"12px 14px",borderRadius:12,fontSize:13,color:"#2E2E38",fontFamily:k.regular,maxWidth:"85%",lineHeight:1.6},children:"Find all tax-related documents James shared last week and summarise the key updates across compliance and advisory."})]}),n.jsxs("div",{style:{display:"flex",gap:10,justifyContent:"flex-end"},children:[n.jsxs("div",{style:{background:"#F6F6FA",padding:"12px 14px",borderRadius:12,fontSize:13,color:"#2E2E38",fontFamily:k.regular,maxWidth:"85%",lineHeight:1.6},children:["I found 3 documents shared by James last week. Here is a summary of the key tax updates:",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Compliance:"})," New safe harbor provisions for cross-border tech transfers.",n.jsx("br",{}),"• ",n.jsx("strong",{children:"Advisory:"})," Tribunal rulings on arm's length pricing methodologies."]}),n.jsx($o,{size:28})]})]})]})]})}function C0({color:i,letter:o}){return n.jsxs("svg",{width:"20",height:"20",viewBox:"0 0 20 20",style:{flexShrink:0},children:[n.jsx("rect",{width:"20",height:"20",rx:"3",fill:i}),n.jsx("text",{x:"4",y:"14",fill:"white",fontSize:"11",fontWeight:"bold",fontFamily:k.regular,children:o})]})}function xy({tabId:i}){const o=cy[i],s=k0.find(g=>g.id===i),u=o.altBg?Y.offWhite:Y.white,c=i==="word"?n.jsx(uy,{prompt:o.prompt,suggestions:o.suggestions}):i==="excel"?n.jsx(hy,{prompt:o.prompt,suggestions:o.suggestions}):i==="ppt"?n.jsx(Nu,{appColor:Y.pptOrange,appLetter:"P",title:"Safe Harbor Presentation",prompt:o.prompt,suggestions:o.suggestions,bodyContent:n.jsxs(n.Fragment,{children:[n.jsx("p",{style:{fontWeight:700,fontSize:16,color:"#1A1A24",marginBottom:12},children:"Safe Harbor Risks — Q3 Presentation"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65",marginBottom:12},children:"Executive Summary: This deck summarizes the current regulatory landscape regarding safe harbor provisions for cross-border tech transfers. The following slides detail the methodology for calculating arm's length pricing."}),n.jsx("p",{style:{fontWeight:600,fontSize:13,color:"#1A1A24",marginBottom:6},children:"• Slide 1: Executive Summary"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",lineHeight:"1.65"},children:"We will utilize the Comparable Uncontrolled Price (CUP) method to establish a baseline for royalty rates. This approach ensures compliance with OECD guidelines."})]})}):i==="outlook"?n.jsx(Nu,{appColor:Y.outlookBlue,appLetter:"O",title:"Inbox — Compliance Team",prompt:o.prompt,suggestions:o.suggestions,bodyContent:n.jsxs("div",{style:{display:"flex",alignItems:"flex-start",gap:12,padding:12,background:"#F6F6FA",borderRadius:8},children:[n.jsx("div",{style:{width:36,height:36,borderRadius:"50%",background:Y.outlookBlue,display:"flex",alignItems:"center",justifyContent:"center",color:"#FFFFFF",fontWeight:700,fontSize:15,flexShrink:0,fontFamily:k.regular},children:"A"}),n.jsxs("div",{children:[n.jsx("p",{style:{fontWeight:700,fontSize:14,color:"#1A1A24",marginBottom:4,fontFamily:k.regular},children:"Alex Chen"}),n.jsx("p",{style:{fontSize:13,color:"#2E2E38",fontFamily:k.regular},children:"Re: Compliance Review for Q3 Tax Filings"}),n.jsx("p",{style:{fontSize:11,color:Y.gray01,fontFamily:k.regular,marginTop:2},children:"10:42 AM"})]})]})}):n.jsx(gy,{}),f=n.jsx("div",{style:{flex:1,display:"flex",flexDirection:"column",gap:16},children:o.features.map(g=>n.jsx(py,{title:g.title,body:g.body},g.title))});return n.jsxs("div",{style:{background:u,padding:"48px 80px 64px"},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[n.jsx(C0,{color:s.appColor,letter:s.letter}),n.jsx("span",{style:{fontFamily:k.regular,fontWeight:700,fontSize:11,letterSpacing:"1.5px",textTransform:"uppercase",color:o.eyebrowColor},children:o.eyebrow})]}),n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:28,color:Y.dark2,marginBottom:12,lineHeight:1.2},children:o.h2}),n.jsx("p",{style:{fontFamily:k.regular,fontSize:15,color:Y.gray01,maxWidth:1e3,marginBottom:36,lineHeight:1.6},children:o.subtitle}),n.jsx("div",{style:{display:"flex",gap:32,alignItems:"flex-start"},children:o.screenshotSide==="left"?n.jsxs(n.Fragment,{children:[c,f]}):n.jsxs(n.Fragment,{children:[f,c]})})]})}const la={mail:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}),n.jsx("path",{d:"M2 7l10 7 10-7"})]}),book:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("path",{d:"M4 19.5A2.5 2.5 0 016.5 17H20"}),n.jsx("path",{d:"M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"})]}),helpCircle:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("path",{d:"M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3"}),n.jsx("circle",{cx:"12",cy:"17",r:".5",fill:"#C4C4CD"})]}),compass:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("circle",{cx:"12",cy:"12",r:"10"}),n.jsx("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"})]}),lock:n.jsxs("svg",{width:"22",height:"22",viewBox:"0 0 24 24",fill:"none",stroke:"#C4C4CD",strokeWidth:"1.75",strokeLinecap:"round",strokeLinejoin:"round",children:[n.jsx("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2"}),n.jsx("path",{d:"M7 11V7a5 5 0 0110 0v4"})]})},my=[{icon:la.mail,title:"Outlook Copilot Resources",body:"Access quick reference sheets and guides for secure email automation.",cta:"View Guides"},{icon:la.book,title:"EY Prompt Library",body:"Explore verified prompts created and vetted specifically by professional services.",cta:"Browse Library"},{icon:la.helpCircle,title:"Copilot FAQs",body:"Find quick answers regarding workspace licenses, token limits, and prompt accuracy.",cta:"Read FAQs"},{icon:la.compass,title:"Explore Agents",body:"Discover AI agents built for specific EY workflows, from tax research to audit support.",cta:"Explore Agents"},{icon:la.lock,title:"Manage Access",body:"Review your Copilot license status, request access, or manage permissions for your team.",cta:"Manage Access"}],vy=[{num:"01",title:"Quick Check Before You Prompt",src:"/security_Picture1.png"},{num:"02",title:"Share Smartly",src:"/security_Picture2.png"},{num:"03",title:"Use Sensitivity Labels",src:"/security_Picture3.png"},{num:"04",title:"Check Who Has Access",src:"/security_Picture4.png"}];function yy({onBack:i,onNavigate:o}){const[s,u]=I.useState("word");return n.jsxs("div",{style:{fontFamily:k.regular,color:Y.dark2,background:Y.white,minHeight:"100vh"},children:[i&&o&&n.jsxs(n.Fragment,{children:[n.jsx(gi,{variant:"learning",onNavigate:o,skipLinkTarget:"#module-content"}),n.jsx(Yo,{currentModuleId:"copilot-hub",onNavigate:o,onBack:i})]}),n.jsxs("section",{id:"module-content",style:{background:Y.dark,display:"flex",alignItems:"center",padding:"88px 80px",gap:64},children:[n.jsxs("div",{style:{flex:1,maxWidth:676},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:20},children:[n.jsx("div",{style:{width:8,height:8,borderRadius:"50%",background:Y.frameGreen}}),n.jsx("span",{style:{fontSize:11,color:Y.gray02,letterSpacing:"1.5px",textTransform:"uppercase",fontWeight:700,fontFamily:k.regular},children:"M365 COPILOT HUB IS LIVE"})]}),n.jsx("h1",{style:{fontSize:36,color:Y.white,fontWeight:700,lineHeight:1.3,marginBottom:20},children:"Explore M365 Copilot prompts in a new-age workspace"}),n.jsx("p",{style:{fontSize:16,color:"rgba(255,255,255,0.82)",lineHeight:1.6},children:"Step into an interactive M365 learning space where you can find what wonders the age-old MS apps can do just by adding a magical element called M365."})]}),n.jsx("div",{style:{width:540,height:269,background:Y.gray01,borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0},children:n.jsx("div",{style:{width:64,height:64,borderRadius:"50%",background:"rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center"},children:n.jsx("div",{style:{width:0,height:0,borderLeft:"22px solid #FFFFFF",borderTop:"13px solid transparent",borderBottom:"13px solid transparent",marginLeft:5}})})})]}),n.jsxs("section",{id:"prompt-repository",style:{padding:"64px 80px 0",textAlign:"center",scrollMarginTop:Tt},children:[n.jsx("p",{style:{fontSize:11,color:Y.gray01,letterSpacing:"1.5px",textTransform:"uppercase",marginBottom:12,fontWeight:700},children:"EXPLORE PROMPT CATEGORIES"}),n.jsx("h2",{style:{fontSize:28,fontWeight:700,marginBottom:12,color:Y.dark2},children:"Sample Prompt Repository for using Copilot in Tax"}),n.jsx("p",{style:{fontSize:15,color:Y.gray01,marginBottom:32},children:"Select your preferred M365 application tool below to view optimized, compliant corporate-ready prompts."}),n.jsx("div",{style:{display:"inline-flex",gap:8,background:Y.dark2,borderRadius:12,padding:8},children:k0.map(c=>n.jsxs("button",{onClick:()=>u(c.id),style:{display:"flex",alignItems:"center",gap:8,padding:"9px 18px",borderRadius:8,background:s===c.id?Y.yellow:"transparent",border:"none",cursor:"pointer",fontSize:13,color:s===c.id?Y.dark2:Y.gray02,fontWeight:700,boxShadow:s===c.id?"0 1px 6px rgba(0,0,0,0.25)":"none",transition:"background 0.15s, color 0.15s, box-shadow 0.15s",fontFamily:k.regular},children:[n.jsx(C0,{color:c.appColor,letter:c.letter}),c.label]},c.id))})]}),n.jsx(xy,{tabId:s}),n.jsxs("section",{id:"useful-links",style:{background:Y.dark2,padding:"80px 80px 64px",scrollMarginTop:Tt},children:[n.jsx("h2",{style:{fontSize:28,fontWeight:700,color:Y.white,marginBottom:12,textAlign:"center"},children:"Useful Links"}),n.jsx("p",{style:{fontSize:15,color:Y.gray02,marginBottom:48,textAlign:"center"},children:"Handy EY resources to check your system access, explore deeper templates, and use generative AI safely."}),n.jsx("div",{style:{display:"flex",gap:20},children:my.map(c=>n.jsxs("div",{style:{flex:"1 1 0",background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:16,padding:"24px 20px",display:"flex",flexDirection:"column",gap:12,transition:"transform 0.15s",cursor:"default"},children:[n.jsx("div",{style:{width:48,height:48,background:"rgba(255,255,255,0.06)",border:"1px solid rgba(255,255,255,0.12)",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center"},children:c.icon}),n.jsx("p",{style:{fontWeight:700,fontSize:15,color:Y.white,lineHeight:1.3},children:c.title}),n.jsx("p",{style:{fontSize:13,color:"#C4C4CD",flex:1,lineHeight:1.55},children:c.body}),n.jsxs("a",{href:"#",style:{fontSize:14,color:Y.yellow,textDecoration:"none",fontWeight:700,display:"flex",alignItems:"center",gap:4},children:[c.cta," ",n.jsxs("svg",{width:"14",height:"14",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]},c.title))})]}),n.jsxs("section",{id:"security",style:{background:Y.dark,padding:"80px 80px 80px",scrollMarginTop:Tt},children:[n.jsx("div",{style:{display:"inline-flex",alignItems:"center",background:"rgba(255,230,0,0.12)",border:"1px solid rgba(255,230,0,0.25)",borderRadius:20,padding:"5px 14px",marginBottom:24},children:n.jsx("span",{style:{fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase",color:Y.yellow,fontFamily:k.regular},children:"GOVERNANCE & TRUST"})}),n.jsx("h2",{style:{fontSize:32,fontWeight:700,color:Y.white,marginBottom:14},children:"Enterprise-Grade Security"}),n.jsx("p",{style:{fontSize:16,color:Y.gray02,marginBottom:52,maxWidth:800},children:"Before you let Copilot loose on tax data, know the ground rules. Tap any card to view it full-size."}),n.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:26},children:vy.map(c=>n.jsxs("div",{style:{borderRadius:12,overflow:"hidden",cursor:"pointer",transition:"transform 0.25s, box-shadow 0.25s",background:"#2e2e38",border:"1px solid #747480",display:"flex",flexDirection:"column"},onMouseEnter:f=>{f.currentTarget.style.transform="translateY(-6px)",f.currentTarget.style.boxShadow="0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px #ffe600"},onMouseLeave:f=>{f.currentTarget.style.transform="none",f.currentTarget.style.boxShadow="none"},children:[n.jsx("div",{style:{height:140,background:"linear-gradient(155deg, rgb(69,69,83) 0%, rgb(37,37,46) 100%)",position:"relative",overflow:"hidden",flexShrink:0},children:n.jsx("img",{src:c.src,alt:c.title,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}})}),n.jsxs("div",{style:{background:"#2e2e38",padding:"20px 24px",flex:1,display:"flex",flexDirection:"column"},children:[n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:32,color:Y.yellow,marginBottom:10,lineHeight:1},children:c.num}),n.jsx("p",{style:{fontFamily:k.regular,fontWeight:700,fontSize:16,color:Y.white,lineHeight:1.35,flex:1,marginBottom:14},children:c.title}),n.jsx("div",{style:{height:1,background:"rgba(255,255,255,0.1)",marginBottom:14}}),n.jsxs("a",{href:"#",style:{display:"inline-flex",alignItems:"center",gap:6,fontSize:12,color:Y.yellow,fontWeight:700,textDecoration:"none",fontFamily:k.regular},children:["View Protocol",n.jsxs("svg",{width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",children:[n.jsx("line",{x1:"5",y1:"12",x2:"19",y2:"12"}),n.jsx("polyline",{points:"12 5 19 12 12 19"})]})]})]})]},c.num))})]}),n.jsx(dd,{title:n.jsxs(n.Fragment,{children:["You've completed Phase 1.",n.jsx("br",{}),"Keep practising with ",n.jsx(w0,{children:"real tax workflows."})]}),description:"You now have the foundations, prompting craft, and Copilot patterns to use AI safely in tax work. Revisit any module anytime — or return to Tax Labs to explore what's next.",ctaLabel:"Back to Tax Labs",onContinue:()=>o==null?void 0:o("/phase1"),meta:"Phase 1 covered: AI foundations, tax prompting, and M365 Copilot"}),n.jsxs("footer",{style:{background:Y.dark2,padding:"56px 80px 32px"},children:[n.jsxs("div",{style:{display:"flex",gap:80,marginBottom:48},children:[n.jsxs("div",{style:{flex:1,maxWidth:280},children:[n.jsxs("div",{style:{display:"flex",alignItems:"center",gap:10,marginBottom:14},children:[n.jsx(dy,{height:28,letterColor:"#FFFFFF"}),n.jsx("span",{style:{color:Y.white,fontWeight:700,fontSize:16,fontFamily:k.regular},children:"EY.ai Tax Labs"})]}),n.jsx("p",{style:{fontSize:13,color:"#C4C4CD",lineHeight:1.6},children:"Accelerating tax performance safely through custom generative AI structures and premium prompt frameworks."})]}),n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:14,color:Y.white,fontWeight:700,marginBottom:14,fontFamily:k.regular},children:"M365 Apps"}),["Word Prompts","Excel Sheets","PowerPoint Decks","Outlook Emails"].map(c=>n.jsx("a",{href:"#",style:{display:"block",fontSize:13,color:"#C4C4CD",textDecoration:"none",marginBottom:8,fontFamily:k.regular},children:c},c))]}),n.jsxs("div",{children:[n.jsx("p",{style:{fontSize:14,color:Y.white,fontWeight:700,marginBottom:14,fontFamily:k.regular},children:"Trust & Security"}),["Privacy Policy","Data Governance","Safe Harbor Rules"].map(c=>n.jsx("a",{href:"#",style:{display:"block",fontSize:13,color:"#C4C4CD",textDecoration:"none",marginBottom:8,fontFamily:k.regular},children:c},c))]})]}),n.jsxs("div",{style:{borderTop:"1px solid rgba(255,255,255,0.1)",paddingTop:20,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[n.jsx("p",{style:{fontSize:12,color:"#C4C4CD",fontFamily:k.regular},children:"© 2026 EY.ai Tax Labs. All rights reserved. Proprietary and confidential."}),n.jsx("div",{style:{display:"flex",gap:14},children:["in","𝕏"].map(c=>n.jsx("a",{href:"#",style:{width:28,height:28,borderRadius:"50%",border:"1px solid rgba(255,255,255,0.15)",display:"flex",alignItems:"center",justifyContent:"center",color:"#C4C4CD",fontSize:11,fontWeight:700,textDecoration:"none",fontFamily:k.regular},children:c},c))})]})]})]})}function by(){return n.jsx("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden",children:n.jsx(wm,{})})}function wy(){const i=Nn();return n.jsx("div",{className:"relative w-full max-w-full min-w-0 overflow-x-hidden",children:n.jsx(J2,{onNavigateToPhase1:()=>i("/phase1")})})}function ky(){const i=Nn();return n.jsx("div",{style:{width:"100%",maxWidth:"100%",minWidth:0},children:n.jsx(ev,{onNavigate:i,onNavigateToFoundational:()=>i("/foundational"),onNavigateToAiTaxPrompting:()=>i("/ai-tax-prompting"),onNavigateToCopilotHub:()=>i("/copilot-hub")})})}function jy(){const i=Nn();return n.jsx("div",{className:"size-full",children:n.jsx(yy,{onBack:()=>i("/phase1"),onNavigate:i})})}function Cy(){const i=Nn();return n.jsx("div",{className:"size-full",children:n.jsx(sy,{onBack:()=>i("/phase1"),onNavigate:i})})}function Ey(){const i=Nn();return n.jsx("div",{className:"size-full",children:n.jsx(Wv,{onBack:()=>i("/phase1"),onNavigate:i})})}function Sy(){return n.jsx("div",{className:"size-full overflow-auto bg-white",children:n.jsx(sx,{})})}const Fy=Tx([{path:"/",Component:Sy,children:[{index:!0,Component:by},{path:"phased",Component:wy},{path:"phase1",Component:ky},{path:"ai-tax-prompting",Component:Cy},{path:"foundational",Component:Ey},{path:"copilot-hub",Component:jy}]}]);function zy(){return n.jsx(ax,{router:Fy})}mh.createRoot(document.getElementById("root")).render(n.jsx(zy,{}));
